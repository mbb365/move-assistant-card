const zp = ':host{display:flex;flex-direction:column;min-height:calc(100dvh - var(--header-height,0px));position:relative;background:#050505;color-scheme:dark;--color-bg-ground:#090909;--color-bg-card:#222222;--color-bg-tile:#2b2b2b;--color-fill-bright:#f1f1f1;--color-text-primary:#d9d9d9;--color-text-muted:#969696;--color-text-on-bright:#090909;--color-line:rgba(255,255,255,.14);--color-border-focus:#03a9f4;--color-accent-primary:#03a9f4;--color-accent-secondary:#d0ff00;--color-text-accent:#d0ff00;--color-text-on-accent:#090909;--color-bg-resting:#1f7a4d;--color-bg-danger:#311313;--color-bg-danger-fill:#d53d3d;--color-border-danger:#8c2e2e;--color-text-danger:#ff7777;--color-text-on-danger:#ffffff;--color-state-hover:rgba(255,255,255,.08);--color-bg-chip:#090909;--color-fill-selected:#f1f1f1;--color-text-on-selected:#090909;--color-bg-segment-selected:#2b2b2b;--wx-clear:#03a9f4;--wx-cloudy:#d8d6d6;--wx-night:#1d2b4f;--wx-cloud-bright:#f1f1f1;--color-state-pressed:rgba(255,255,255,.14);--color-state-hover-on-bright:rgba(0,0,0,.06);--color-state-pressed-on-bright:rgba(0,0,0,.12);--scrim:rgba(0,0,0,.66);--lift:rgba(0,0,0,.5)}*{box-sizing:border-box}#app{color:var(--text);font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif;transition:background .25s ease,color .25s ease;-webkit-font-smoothing:antialiased}[hidden]{display:none!important}button,input{font:inherit}#app{flex:1;display:flex;flex-direction:column;width:100%;margin:0;padding:0;background:var(--bg);text-align:left}#app{--bg:var(--color-bg-ground);--page:var(--color-bg-ground);--card:var(--color-bg-card);--card2:var(--color-bg-card);--modal:var(--color-bg-card);--timer:var(--color-bg-ground);--tile:var(--color-bg-tile);--tile-2:var(--color-bg-tile);--row:var(--color-bg-tile);--row-rest:var(--color-bg-tile);--raised:var(--color-bg-tile);--chip:var(--color-bg-tile);--segment:var(--color-bg-tile);--seg-on:var(--color-bg-segment-selected);--scroll-thumb:var(--color-bg-tile);--control:var(--color-bg-ground);--control-2:var(--color-bg-ground);--sunken:var(--color-bg-ground);--input:var(--color-bg-ground);--track:var(--color-bg-ground);--icon-bg:var(--color-bg-chip);--seg-bg:var(--color-bg-ground);--switch-off:var(--color-bg-ground);--stage:var(--color-bg-ground);--text:var(--color-text-primary);--soft:var(--color-text-primary);--muted:var(--color-text-muted);--accent-text:var(--color-text-accent);--border-hover:var(--color-text-muted);--knob-off:var(--color-text-muted);--today-ring:var(--color-text-muted);--line:var(--color-line);--lineb:var(--color-line);--field-line:var(--color-line);--divider:var(--color-line);--bright:var(--color-fill-bright);--slider-fill:var(--color-fill-bright);--segment-fill:var(--color-fill-bright);--timer-fill:var(--color-fill-bright);--on-bright:var(--color-text-on-bright);--hover:var(--color-state-hover);--wash-2:var(--color-state-hover);--danger:var(--color-text-danger);--danger-bg:var(--color-bg-danger);--danger-line:var(--color-border-danger);--danger-fill:var(--color-bg-danger-fill);--on-danger-fill:var(--color-text-on-danger);--primary:var(--color-accent-primary);--secondary:var(--color-accent-secondary)}.shell{flex:1;display:flex;flex-direction:column;position:relative;width:100%;background:var(--page);border-radius:0;overflow:visible;transition:background .28s ease}#app.resting .shell{background:var(--color-bg-resting)}#app.paused .shell{background:var(--primary)}#app.light.paused .shell{background:color-mix(in srgb,var(--primary) 55%,var(--color-bg-card))}#app.light{--color-bg-ground:#eeebe8;--color-bg-card:#fbf9f6;--color-bg-tile:#f3efea;--color-fill-bright:#26221e;--color-text-primary:#26221e;--color-text-muted:#6a625a;--color-text-on-bright:#fbf9f6;--color-text-on-accent:#26221e;--color-line:rgba(38,34,30,.12);--color-text-accent:#26221e;--color-accent-secondary:#03a9f4;--color-bg-resting:#7dbb98;--color-bg-danger:#f5dede;--color-border-danger:#e3a0a0;--color-text-danger:#b42a2a;--color-state-hover:rgba(38,34,30,.06);--color-state-pressed:rgba(38,34,30,.12);--color-bg-chip:#fbf9f6;--color-fill-selected:#26221e;--color-text-on-selected:#fbf9f6;--color-bg-segment-selected:#fbf9f6;--color-accent-primary:#0288d1;--color-border-focus:#0288d1;--scrim:rgba(38,34,30,.32);--lift:rgba(38,34,30,.16)}:host(.lightBody){background:#eeebe8;color-scheme:light}.view{display:none;width:100%;max-width:1184px;margin:0 auto;padding:22px 22px 76.8px}.view.active{display:block;flex:1 0 auto}.card,.panel,.tile{position:relative;background:var(--card);border-radius:36px;padding:22px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.grid{display:grid;grid-template-columns:repeat(12,minmax(0,1fr));gap:16px}.eyebrow{text-transform:uppercase;color:var(--muted)}.sub{color:var(--muted);margin-top:6.4px}.pill,.primary,.navBtn,.tab,.back,.hideBtn,.addBtn{cursor:pointer}.pill{min-height:0;padding:3.2px 0;border:0;border-radius:0;background:transparent;color:var(--text);text-decoration-line:underline;text-decoration-thickness:.8px;text-underline-offset:3.2px}.tab,.back{border-radius:799.2px;min-height:41.6px;padding:0 16px;background:var(--control);border:.32px solid var(--line);color:var(--text)}.primary{border-radius:799.2px;min-height:41.6px;padding:0 16px;border:0;background:var(--bright);color:var(--on-bright)}.activityCard,.weekly{grid-column:span 6}.activityCard,.weekly{min-height:288px}.sourceTag{display:inline-flex;margin-top:11.2px;padding:4px;border-radius:799.2px;background:var(--chip);color:var(--soft)}.workoutFooter{display:flex;justify-content:space-between;align-items:end;gap:22.4px;flex-wrap:wrap;margin-top:22.4px;width:100%;box-sizing:border-box}.workoutGallery{grid-column:span 12;display:flex;gap:16px;height:288px;overflow:hidden}.workoutPanel{position:relative;height:288px;flex:1 1 72px;min-width:70.4px;background:var(--card);border-radius:28.8px;padding:22.4px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);overflow:hidden;box-sizing:border-box;transition:flex .32s ease;cursor:pointer}.workoutPanel.active{flex:7 1 0;min-width:0;cursor:default}.workoutPanel.addPanel{flex:0 0 73.6px;min-width:73.6px;display:flex;align-items:center;justify-content:center;padding:14.4px}.workoutPanel{--edge-proximity:0;--cursor-angle:45deg;--edge-sensitivity:36;--color-sensitivity:56;--cone-spread:25;--fill-opacity:.18;--glow-color-60:hsl(199deg 97% 68% / 60%);--glow-color-40:hsl(199deg 97% 68% / 40%);--glow-color-30:hsl(199deg 97% 68% / 30%);--glow-color-20:hsl(199deg 97% 68% / 20%);--glow-color-10:hsl(199deg 97% 68% / 10%);--gradient-one:radial-gradient(at 80% 55%,#c084fc 0px,transparent 50%);--gradient-two:radial-gradient(at 69% 34%,#f472b6 0px,transparent 50%);--gradient-three:radial-gradient(at 8% 6%,#38bdf8 0px,transparent 50%);--gradient-four:radial-gradient(at 41% 38%,#c084fc 0px,transparent 50%);--gradient-five:radial-gradient(at 86% 85%,#f472b6 0px,transparent 50%);--gradient-six:radial-gradient(at 82% 18%,#38bdf8 0px,transparent 50%);--gradient-seven:radial-gradient(at 51% 4%,#f472b6 0px,transparent 50%);isolation:isolate}.workoutPanel:before,.workoutPanel:after,.workoutPanel>.edgeLight{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;pointer-events:none;transition:opacity .18s ease-out}.workoutPanel:before{z-index:2;border:.8px solid transparent;background:linear-gradient(var(--card) 0 100%) padding-box,linear-gradient(#fff0 0,#fff0) border-box,var(--gradient-one) border-box,var(--gradient-two) border-box,var(--gradient-three) border-box,var(--gradient-four) border-box,var(--gradient-five) border-box,var(--gradient-six) border-box,var(--gradient-seven) border-box;opacity:clamp(0,calc(.72 * (var(--edge-proximity) - var(--color-sensitivity)) / (100 - var(--color-sensitivity))),.72);-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,black calc(var(--cone-spread) * 1%),transparent calc((var(--cone-spread) + 15) * 1%),transparent calc((100 - var(--cone-spread) - 15) * 1%),black calc((100 - var(--cone-spread)) * 1%));mask-image:conic-gradient(from var(--cursor-angle) at center,black calc(var(--cone-spread) * 1%),transparent calc((var(--cone-spread) + 15) * 1%),transparent calc((100 - var(--cone-spread) - 15) * 1%),black calc((100 - var(--cone-spread)) * 1%))}.workoutPanel:after{z-index:1;border:.8px solid transparent;background:var(--gradient-one) padding-box,var(--gradient-two) padding-box,var(--gradient-three) padding-box,var(--gradient-four) padding-box,var(--gradient-five) padding-box,var(--gradient-six) padding-box,var(--gradient-seven) padding-box;opacity:clamp(0,calc(var(--fill-opacity) * (var(--edge-proximity) - var(--color-sensitivity)) / (100 - var(--color-sensitivity))),.18);mix-blend-mode:soft-light;-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,transparent 5%,black 15%,black 85%,transparent 95%);mask-image:conic-gradient(from var(--cursor-angle) at center,transparent 5%,black 15%,black 85%,transparent 95%)}.workoutPanel>.edgeLight{top:-19.2px;right:-19.2px;bottom:-19.2px;left:-19.2px;z-index:3;opacity:clamp(0,calc(.62 * (var(--edge-proximity) - var(--edge-sensitivity)) / (100 - var(--edge-sensitivity))),.62);mix-blend-mode:plus-lighter;-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,black 2.5%,transparent 10%,transparent 90%,black 97.5%);mask-image:conic-gradient(from var(--cursor-angle) at center,black 2.5%,transparent 10%,transparent 90%,black 97.5%)}.workoutPanel>.edgeLight:before{content:"";position:absolute;top:19.2px;right:19.2px;bottom:19.2px;left:19.2px;border-radius:inherit;box-shadow:inset 0 0 0 .8px var(--glow-color-60),inset 0 0 2.4px 0 var(--glow-color-40),inset 0 0 6.4px 0 var(--glow-color-30),inset 0 0 12.8px 0 var(--glow-color-20),0 0 2.4px 0 var(--glow-color-40),0 0 6.4px 0 var(--glow-color-30),0 0 12.8px 0 var(--glow-color-20),0 0 22.4px 1.6px var(--glow-color-10)}.workoutPanel:not(.borderGlowActive):before,.workoutPanel:not(.borderGlowActive):after,.workoutPanel:not(.borderGlowActive)>.edgeLight{opacity:0;transition:opacity .35s ease-out}#app.light .workoutPanel{--glow-color-40:hsl(199deg 97% 48% / 40%);--glow-color-30:hsl(199deg 97% 48% / 30%);--glow-color-20:hsl(199deg 97% 48% / 20%);--glow-color-10:hsl(199deg 97% 48% / 10%)}.workoutPanel:not(.active):not(.addPanel) .panelExpanded{opacity:0;filter:blur(8px);pointer-events:none}.workoutPanel:not(.active):not(.addPanel) .panelCollapsed{opacity:1;filter:blur(0)}.workoutPanel.active .panelExpanded{opacity:1;filter:blur(0);pointer-events:auto}.workoutPanel.active .panelCollapsed{opacity:0;filter:blur(6.4px);pointer-events:none}.panelExpanded{position:relative;z-index:4;width:100%;height:100%;min-width:0;box-sizing:border-box;display:flex;flex-direction:column;justify-content:space-between;transition:opacity .22s ease,filter .22s ease}.panelCollapsed{position:absolute;top:0;right:0;bottom:0;left:0;z-index:4;display:flex;align-items:center;justify-content:center;opacity:0;filter:blur(6.4px);transition:opacity .22s ease,filter .22s ease}.panelCollapsedText{writing-mode:vertical-rl;transform:rotate(180deg);white-space:nowrap}.workoutPanelTop{display:flex;justify-content:space-between;align-items:flex-start;gap:22.4px;width:100%;min-width:0;box-sizing:border-box}.workoutPanelActions{display:flex;gap:22.4px;flex-wrap:wrap;align-items:center;justify-content:flex-end;margin-left:auto}.startWorkoutBtn{background:var(--primary)!important;color:var(--color-text-on-accent)!important}.startWorkoutBtn:hover{filter:brightness(1.04)}.addPanelPlus{position:relative;z-index:4;font-size:27.2px;line-height:1}.addPanelLabel{position:absolute;z-index:4;bottom:16px;writing-mode:vertical-rl;transform:rotate(180deg);color:var(--muted)}@media (max-height:820px) and (min-width:621px){.modalStatic{padding:17.6px 22.4px}.timeTile{min-height:124.8px}}@media (max-width:900px){.weekCopy{white-space:normal}.workoutGallery{overflow-x:auto;scroll-snap-type:x mandatory;padding-bottom:3.2px}.workoutPanel,.workoutPanel.active{height:288px;flex:0 0 min(68.8vw,544px);min-width:min(68.8vw,544px);scroll-snap-align:start}.workoutPanel.addPanel{flex-basis:80px;min-width:80px}.panelCollapsed{display:none}}.moveActions{display:flex;gap:22.4px;flex-wrap:wrap}@keyframes feelingWarp{0%{transform:scale(1.03) skew(-2deg) translate(-1.5%);filter:saturate(1.02) blur(.8px)}50%{transform:scale(1.12) skew(1deg) translate(1%);filter:saturate(1.22) blur(1.5px)}to{transform:scale(1.06) skew(3deg) translate(-.5%);filter:saturate(1.1) blur(.6px)}}@keyframes feelingScan{0%{background-position:0 0,-80% 0}to{background-position:0 8px,180% 0}}.tempoExperiment{margin-top:14.4px;padding-top:16px;border-top:.32px solid var(--line)}.tempoEstimate{white-space:nowrap}.tempoQuad{position:relative;width:min(288px,100%);aspect-ratio:1/1;border-radius:28.8px;background:#ffffff06;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);overflow:hidden;touch-action:none;cursor:crosshair}.tempoCross{position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none;background:linear-gradient(to right,transparent calc(50% - .4px),rgba(255,255,255,.12) 50%,transparent calc(50% + .4px)),linear-gradient(to bottom,transparent calc(50% - .4px),rgba(255,255,255,.12) 50%,transparent calc(50% + .4px))}.tempoDot{position:absolute;left:50%;top:50%;width:17.6px;height:17.6px;border-radius:50%;background:var(--text);transform:translate(-50%,-50%);pointer-events:none;box-shadow:0 0 0 4.8px #ffffff12}.tempoPole{position:absolute;pointer-events:none;color:var(--muted)}.tempoFast{top:9.6px;left:50%;transform:translate(-50%)}.tempoSlow{bottom:9.6px;left:50%;transform:translate(-50%)}.tempoHard{right:9.6px;top:50%;transform:translateY(-50%)}.tempoLow{left:9.6px;top:50%;transform:translateY(-50%)}.tempoReadout{margin-top:9.6px;color:var(--muted)}.tempoRevealRow{margin-top:11.2px}.tempoRevealBtn{color:var(--muted);text-decoration-color:var(--muted)}.editTempoExperiment{margin-top:11.2px}.editTempoExperiment[hidden]{display:none}.testingZone{position:relative;overflow:hidden;border-radius:22.4px;background:#202226;border:.8px solid #4a4f58;box-shadow:none;--text:#d6d9df;--soft:#c7ccd5;--muted:#9ea5b0;--line:#4a4f58;--lineb:#4a4f58;--field-line:#4a4f58;color:var(--text)}.testingZoneInner{position:relative;padding:19.2px;background:linear-gradient(rgba(176,186,199,.045) .8px,transparent .8px),linear-gradient(90deg,rgba(176,186,199,.045) .8px,transparent .8px),#202226;background-size:16px 16px}.testingZoneTitleBlock{max-width:608px;margin-bottom:19.2px}.testingZoneTitleRow{display:flex;justify-content:space-between;align-items:center;gap:16px}.testingZoneTitleRow strong{color:#d6d9df}.testingZone .tempoEstimate{color:#aeb4bf}.testingZoneExplanation{margin:8px 0 0;color:#9ea5b0;text-align:left}.testingZoneLayout{display:grid;grid-template-columns:minmax(224px,288px) minmax(0,1fr);grid-template-areas:"controller feedback";gap:25.6px;align-items:start}.testingFeedbackForm{grid-area:feedback;display:grid;gap:14.4px;min-width:0;padding:16px;border:.32px solid var(--line);border-radius:16px;background:#252525}.testingFeedbackHeading{color:#d6d9df}.testingFeedbackField{display:grid;gap:6.4px;color:#9ea5b0}.testingFeedbackField select,.testingFeedbackField textarea{width:100%;border:.32px solid var(--line);background:#171717;color:#d6d9df;border-radius:11.2px;padding:8px 9.6px;font:inherit}.testingFeedbackField textarea{resize:vertical;min-height:65.6px}.testingRating{display:grid;grid-template-columns:repeat(5,1fr);gap:4.8px}.testingRating button{min-height:30.4px;border-radius:9.6px;border:.32px solid var(--line);background:#171717;color:#c7ccd5;cursor:pointer}.testingRating button.selected{border-color:#c7ccd5;background:#343434}.testingFeedbackSubmit{justify-self:start;min-height:33.6px;padding:0 12.8px;border-radius:11.2px;border:0;background:#ffffffe0;color:#111;cursor:pointer}.testingZoneControllerWrap{grid-area:controller;display:flex;flex-direction:column;align-items:center;justify-content:flex-start}.tempoQuadFrame{width:min(256px,100%);aspect-ratio:1/1;padding:0;background:linear-gradient(rgba(176,186,199,.075) .8px,transparent .8px),linear-gradient(90deg,rgba(176,186,199,.075) .8px,transparent .8px),#202226;background-size:16px 16px,16px 16px,auto;border-radius:16px}.testingZone .tempoQuad{width:100%;height:100%;border-radius:16px;background:#202226;border:.8px solid #5a606a;box-shadow:none}.testingZone .tempoCross{background:linear-gradient(to right,transparent calc(50% - .4px),rgba(176,186,199,.2) 50%,transparent calc(50% + .4px)),linear-gradient(to bottom,transparent calc(50% - .4px),rgba(176,186,199,.2) 50%,transparent calc(50% + .4px))}.testingZone .tempoDot{width:14.4px;height:14.4px;background:transparent;border:.8px solid #c4cad4;box-shadow:0 0 0 3.2px #c4cad40d}.testingZone .tempoPole{color:#8e96a2}.testingZone .tempoReadout{width:min(256px,100%);color:#9ea5b0;text-align:center;margin-top:9.6px}.testingZone button,.testingZone input,.testingZone select,.testingZone textarea{transition:opacity .14s ease,border-color .14s ease,color .14s ease,background .14s ease}.testingZone button:hover,.testingZone button:focus-visible{filter:none;opacity:.88}@media (max-width:900px){.testingZoneLayout{grid-template-columns:1fr;grid-template-areas:"controller" "feedback"}}.activityHeader{display:flex;align-items:center;gap:var(--inset);margin-bottom:var(--inset)}.activityIcon{display:grid;place-items:center}.icon{width:var(--glyph-size);height:var(--glyph-size);flex:none;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}.icon *{vector-effect:non-scaling-stroke}.addPanelPlus .icon,.addFab .icon{width:24px;height:24px}.checkinTabIcon .icon{width:18px;height:18px}.weekTick .icon{width:1em;height:1em}.activityRows{display:grid;gap:9.6px}.activityRow{display:grid;grid-template-columns:43.2px minmax(0,1fr);align-items:center;gap:11.2px;background:var(--tile-2);border-radius:24px;padding:12px 14px}.activityRowIcon{width:43.2px;height:43.2px;border-radius:16px;background:var(--icon-bg);display:grid;place-items:center;font-size:16px}.activityRowMeta{color:var(--soft);margin-top:2.4px}.toast{position:absolute;right:20.8px;top:20.8px;z-index:60;background:var(--bright);color:var(--on-bright);border-radius:799.2px;padding:8.8px 12.8px;opacity:0;transform:translateY(-6.4px);pointer-events:none;transition:opacity .18s ease,transform .18s ease}.toast.show{opacity:1;transform:none}.weekCopy{color:var(--muted);margin-top:9.6px;max-width:none;white-space:nowrap}.weekChip{background:var(--tile-2);border-radius:12.8px;min-height:60.8px;padding:9.6px 11.2px;display:flex;flex-direction:column;justify-content:space-between;gap:6.4px}.weekChipTop{display:flex;justify-content:space-between;align-items:center;gap:6.4px}.weekTick{font-size:11.2px;font-weight:800;line-height:1}.weekChip.total{background:var(--card2)}.workoutSurface{position:relative;overflow:hidden;isolation:isolate}.workoutContent{position:relative;z-index:2}.pixelTrailCanvas{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;z-index:1;pointer-events:none}#app.light .pixelTrailCanvas{opacity:.46}.sessionHead{display:flex;justify-content:space-between;align-items:flex-start;gap:16px}.sessionActions{display:flex;gap:22.4px;align-items:center;flex-wrap:wrap;justify-content:flex-end}.holdEnd{position:relative;overflow:hidden;min-width:110.4px;min-height:41.6px;padding:0 16px;border-radius:799.2px;border:.32px solid var(--line);background:var(--control);text-decoration:none;user-select:none;-webkit-user-select:none;touch-action:none}.holdEndFill{position:absolute;inset:0 auto 0 0;width:0;background:var(--bright);pointer-events:none}.holdEndLabel{position:relative;z-index:1;mix-blend-mode:difference;color:#fff}.holdEnd.holding{border-color:var(--muted)}.exerciseTitle{margin-top:4.8px;color:var(--accent-text)}.meta{color:var(--muted);margin-top:4.8px}.progress{height:46.4px;padding:0;background:transparent;border-radius:17.6px;display:flex;gap:3.2px;margin-top:19.2px;overflow:hidden}.progressSegment{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:0;padding:0;display:block;flex:1;min-width:0;background:var(--segment);border-radius:17.6px;position:relative;overflow:hidden;cursor:default}.progressSegment:after{content:"";position:absolute;inset:0 auto 0 0;width:0;background:var(--segment-fill);transition:width .2s linear}.progressSegment.done{background:transparent;opacity:0;pointer-events:none}.progressSegment.done:after{display:none}.progressSegment.active:after{width:var(--segment-progress,0%)}#app.resting .progressSegment:not(.done):not(.active),#app.paused .progressSegment:not(.done):not(.active){background:#fff}.progressSegment.rewindable{cursor:pointer}.progressSegment.rewindable:hover{filter:brightness(1.08)}.progressSegment:focus-visible{outline:1.6px solid var(--primary);outline-offset:-2.4px}.workGrid{display:grid;grid-template-columns:minmax(0,2fr) minmax(240px,1fr);gap:16px;margin-top:16px}.timerCard,.movementCard,.nextCard{position:relative;border-radius:28.8px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.timerCard{min-height:344px;background:var(--timer);overflow:hidden}.fill{position:absolute;inset:0 auto 0 0;width:100%;background:var(--timer-fill);transition:width .2s linear}.digits{position:absolute;top:0;right:0;bottom:0;left:0;display:flex;align-items:center;justify-content:center;font-size:clamp(152px,22.4vw,312px);font-weight:850;letter-spacing:-.11em;color:#fff;mix-blend-mode:difference;font-variant-numeric:tabular-nums}.movementCard{background:var(--stage);min-height:344px;display:grid;place-items:center;padding:22.4px}.movementCard{overflow:hidden}.movementRippleCanvas{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;z-index:0}.nextCard{background:var(--card);padding:22.4px;display:flex;justify-content:space-between;align-items:center;gap:16px;min-height:116.8px}.nextIcon{width:52.8px;height:52.8px;border-radius:19.2px;background:var(--icon-bg);display:grid;place-items:center;font-size:20.8px;flex:0 0 auto}.sectionLabel{margin:0 0 8px 22.4px}.moveSection{grid-column:span 12}.moveSection .workoutGallery{width:100%}.nextWrap{margin-top:16px}.nextLabel{margin:0 0 8px 22.4px}.nextCard{background:var(--card);padding:22.4px;display:flex;justify-content:space-between;align-items:center;gap:22.4px;min-height:86.4px;border-radius:28.8px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.nextMain{display:flex;align-items:center;gap:14.4px;min-width:0}.nextIcon{width:43.2px;height:43.2px;border-radius:12.8px;background:var(--icon-bg);display:grid;place-items:center;font-size:16px;flex:0 0 auto}.sessionControlRow{display:flex;justify-content:flex-end;gap:22.4px;align-items:center;margin-top:16px}.skipBtn{min-width:120px;min-height:41.6px;padding:0 14.4px;border:.8px solid var(--line);background:transparent;color:var(--text);text-decoration:none}.pause{min-width:120px;min-height:41.6px;padding:0 16px}.upcomingList{display:grid;gap:9.6px;margin-top:9.6px}.upcomingCard{--future-opacity:1;display:flex;align-items:center;justify-content:space-between;gap:22.4px;min-height:86.4px;padding:22.4px;border-radius:28.8px;background:var(--card);border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);opacity:var(--future-opacity);transition:opacity .22s ease}.upcomingCard:nth-child(-n+3){--future-opacity:1}.upcomingCard:nth-child(4){--future-opacity:.72}.upcomingCard:nth-child(5){--future-opacity:.48}.upcomingCard:nth-child(6){--future-opacity:.3}.upcomingCard:nth-child(n+7){--future-opacity:.16}.upcomingCard.sessionHidden{--future-opacity:.24!important;filter:saturate(.15)}.upcomingCard.sessionHidden .upcomingName{text-decoration:line-through}.upcomingCard.sessionHidden .upcomingIcon{opacity:.45}.upcomingCard.sessionHidden .upcomingMeta{opacity:.55}.upcomingInfo{display:flex;align-items:center;gap:14.4px;min-width:0}.upcomingIcon{width:43.2px;height:43.2px;flex:0 0 auto;border-radius:12.8px;background:var(--icon-bg);display:grid;place-items:center;font-size:16px}.upcomingMeta{color:var(--muted);margin-top:4px}.skipSessionBtn{flex:0 0 auto;min-height:41.6px;padding:0 14.4px;border:.8px solid var(--line);background:transparent;color:var(--text)}@media (max-width:900px){.weekCopy{white-space:normal}.nextCard{align-items:flex-start;flex-direction:column}.sessionControlRow{width:100%}.skipBtn,.pause{flex:1;min-width:0}.upcomingCard{align-items:flex-start;flex-direction:column}.skipSessionBtn{width:100%}}.countdown{display:none;position:fixed;top:0;right:0;bottom:0;left:0;width:100vw;height:100dvh;background:var(--page);z-index:300;align-items:center;justify-content:center;flex-direction:column;text-align:center;overflow:hidden}.countdown.active{display:flex}.pixelCanvas{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;display:block;z-index:1}.countdown:before{content:"";position:absolute;top:0;right:0;bottom:0;left:0;background:radial-gradient(circle at center,color-mix(in srgb,var(--primary) 16%,transparent),transparent 58%);pointer-events:none}.countNum{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);z-index:3}.countNum{font-size:clamp(144px,25.6vw,344px);font-weight:850;line-height:.75;letter-spacing:-.1em}.modalBackdrop{display:none;position:fixed;top:0;right:0;bottom:0;left:0;width:100vw;height:100dvh;z-index:145;background:var(--scrim);padding:28px;box-sizing:border-box;align-items:center;justify-content:center}.modalBackdrop.open{display:flex}.modal{width:min(1184px,100%);height:100%;max-width:1184px;max-height:none;overflow:hidden;background:var(--modal);border-radius:28.8px;padding:0;display:flex;flex-direction:column;box-sizing:border-box;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.modalStatic{flex:0 0 auto;padding:22.4px;background:var(--modal);border-bottom:.32px solid var(--divider)}.modalHead{display:flex;justify-content:space-between;align-items:flex-start;gap:16px;margin-bottom:12.8px}.modalHeaderActions{display:flex;gap:22.4px;align-items:center;flex:0 0 auto}.modalHead h2{margin:2.4px 0 0}.editNameRow{display:grid;gap:6.4px;margin-bottom:11.2px}.editNameLabel{color:var(--muted)}.editNameInput{min-height:42px;border-radius:var(--r-inner);border:.32px solid var(--field-line);background:var(--input);color:var(--text);padding:0 16px}.timeTiles{display:grid;grid-auto-flow:column;grid-auto-columns:minmax(0,1fr);gap:11.2px;margin-bottom:11.2px}.timeTile{background:var(--tile);min-height:148.8px;padding:16px;display:flex;flex-direction:column;justify-content:space-between}.timeHeader{display:flex;align-items:center;gap:14.4px}.timeIcon{width:46.4px;height:46.4px;border-radius:16px;background:var(--icon-bg);display:grid;place-items:center;flex:0 0 auto;font-size:17.6px;font-weight:760}.timeCopy{min-width:0}.rangeTrack{height:46.4px;border-radius:17.6px;background:var(--track);overflow:hidden;position:relative;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.rangeFill{position:absolute;inset:0 auto 0 0;background:var(--slider-fill);border-radius:17.6px 0 0 17.6px}.rangeInput{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;opacity:0;cursor:pointer}.exerciseScroller{min-height:0;overflow-y:auto;padding:3.2px 16px 17.6px 22.4px;border-top:.16px solid var(--divider);scrollbar-gutter:stable}.exerciseScroller::-webkit-scrollbar{width:6.4px}.exerciseScroller::-webkit-scrollbar-track{background:transparent}.exerciseScroller::-webkit-scrollbar-thumb{background:var(--scroll-thumb);border-radius:799.2px}.sectionTitle{text-transform:uppercase;color:var(--muted);margin:14.4px 0 8px}.moveList{display:grid;gap:8px}.moveRow{display:flex;justify-content:space-between;align-items:center;gap:22.4px;background:var(--row);border-radius:20.8px;padding:22.4px}.moveRow.hidden{opacity:.46}.moveRow.hidden .moveItemName{text-decoration:line-through}.moveMeta{color:var(--muted);margin-top:4px}.hideBtn{border-radius:799.2px;min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text)}.removeBtn{position:relative;overflow:hidden;border-radius:799.2px;min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);cursor:pointer}.removeFill{position:absolute;inset:0 auto 0 0;width:0;background:var(--danger-fill);pointer-events:none;transition:width 0s linear}.addInput{min-height:41.6px;border-radius:799.2px;border:.32px solid var(--field-line);background:var(--input);color:var(--text);padding:0 14.4px}.addBtn{border-radius:799.2px;min-height:42px;padding:0 16px;border:0;background:var(--bright);color:var(--on-bright)}.routineSummary{margin-top:14.4px;background:var(--sunken);border-radius:20.8px;padding:12.8px 14.4px;color:var(--soft)}.settingsHeader{display:flex;align-items:center;gap:12.8px;margin-bottom:24px}.back{width:46.4px;padding:0;font-size:24px}.tabs.rubberTabs{position:relative;display:inline-flex;gap:0;padding:3.2px;margin-bottom:17.6px;border-radius:12.8px;background:var(--control);border:.32px solid var(--line);overflow:hidden}.rubberIndicator{position:absolute;top:3.2px;left:3.2px;height:calc(100% - 6.4px);width:0;border-radius:12.8px;background:var(--bright);transition:left .34s cubic-bezier(.2,1.35,.4,1),width .34s cubic-bezier(.2,1.35,.4,1),transform .18s ease;transform-origin:center;z-index:0}.tabs.rubberTabs .tab{position:relative;z-index:1;min-height:41.6px;padding:0 16px;border:0;background:transparent;color:var(--text)}.tabs.rubberTabs .tab.active{color:var(--on-bright)}.settingsPane{display:none}.settingsPane.active{display:block}.integrationList,.toggleList{display:grid;gap:9.6px}.integration,.toggleRow{display:flex;justify-content:space-between;align-items:center;gap:14.4px;background:var(--raised);border-radius:22.4px;padding:14.4px 16px}.status{color:var(--muted);margin-top:3.2px}.note{color:var(--muted);line-height:1.5;max-width:688px}.switch{position:relative;width:50px;height:28px;padding:0;border-radius:var(--r-inner);background:var(--line);border:.4px solid var(--line);opacity:1;flex:0 0 auto;cursor:pointer;transition:background .18s ease,opacity .18s ease}.switch:after{content:"";position:absolute;width:24px;height:24px;top:50%;left:1.6px;border-radius:12px 4px 4px 12px;background:var(--text);transform:translateY(-50%);transition:left .18s ease,border-radius .18s ease,background .18s ease}.switch.on{background:var(--color-accent-primary);opacity:1}.switch.on:after{left:calc(100% - 25.6px);border-radius:4px 12px 12px 4px;background:var(--color-text-on-accent)}.themeChoice{display:flex;gap:9.6px;flex-wrap:wrap;align-items:center;margin:0}.themeBtn{min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);cursor:pointer}.themeBtn.active{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.wxLayoutBtn{min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);cursor:pointer}.wxLayoutBtn[aria-pressed=true]{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.settingsSelect{min-width:96px;min-height:32px;padding:0 27.2px 0 12px;border-radius:var(--r-inner);border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);font:inherit}.motionControlRow{align-items:center}.motionRangeWrap{display:flex;align-items:center;justify-content:flex-end;gap:9.6px;min-width:184px}.motionRangeWrap input{width:128px}.motionRangeWrap span{color:var(--muted);min-width:51.2px;text-align:right}.dangerText{color:var(--danger)}.confirmBackdrop{display:none;position:fixed;top:0;right:0;bottom:0;left:0;z-index:80;padding:22.4px;background:var(--scrim);align-items:center;justify-content:center}.confirmBackdrop.open{display:flex}.confirmCard{width:min(448px,100%);background:var(--card);border-radius:28.8px;padding:22.4px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.confirmActions{display:flex;justify-content:flex-end;align-items:center;gap:22.4px;margin-top:22.4px}.holdDelete{position:relative;overflow:hidden;min-width:88px;min-height:41.6px;padding:0 17.6px;border:.8px solid var(--danger-line);border-radius:12.8px;background:var(--danger-bg);color:var(--text);cursor:pointer}.holdDeleteFill{position:absolute;inset:0 auto 0 0;width:0;background:var(--danger-fill);pointer-events:none}.holdDeleteLabel{position:relative;z-index:1;color:var(--text)}.holdDelete.holding .holdDeleteLabel,.removeBtn.holding .removeLabel{color:#fff}.bottomNav{position:sticky;bottom:22.4px;display:flex;gap:22.4px;z-index:100;width:max-content;margin:-65.6px 0 0 22.4px}.navBtn{width:43.2px;height:43.2px;padding:0;border-radius:16px;background:var(--control);border:.32px solid var(--line);color:var(--text)}.navBtn.active{background:var(--color-fill-selected);color:var(--color-text-on-selected)}@media (max-width:900px){.weekCopy{white-space:normal}.grid{grid-template-columns:1fr}.moveSection,.activityCard,.weekly{grid-column:auto}.workGrid{grid-template-columns:1fr}.timerCard,.movementCard{min-height:256px}.timeTiles{grid-auto-flow:row;grid-template-columns:1fr}}@media (max-width:620px){.modal{width:100%;height:100%;max-height:100%}#app{padding:0}.shell{border-radius:0}.view{padding:14.4px 14.4px 75.2px}.timerCard{min-height:224px}.digits{font-size:144px}.modalBackdrop{padding:9.6px}.modal{height:100%}.modalStatic{padding:14.4px}.exerciseScroller{padding:3.2px 9.6px 14.4px 14.4px}}:is(button,.primary,.tab,.back,.navBtn,.themeBtn,.energyBtn,.hideBtn,.addBtn,.removeBtn,.skipBtn,.holdEnd,.editNameInput,.addInput,.rangeTrack,.progress,.progressSegment):not(.segBtn,.stepBtn,.checkinTab,.switch,.dragHandle,.navBtn,.createPresetBtn,.sheetChoice,.setupSummary,.wxStyleBtn,.tfSeg>button){border-radius:var(--r-inner)!important}.card,.panel,.tile,.timerCard,.movementCard,.nextCard,.modal{border-radius:var(--r-card)}.movementCreatorLaunch{display:flex;gap:9.6px;align-items:center;margin:3.2px 0 14.4px}.movementCreatorOpen,.restAddBtn{min-height:35.2px;padding:0 12.8px;border-radius:12.8px;cursor:pointer}.movementCreatorOpen{border:0;background:var(--bright);color:var(--on-bright)}.restAddBtn{border:.32px solid var(--field-line);background:var(--control-2);color:var(--text)}.movementCreator{position:relative;margin:0 0 14.4px;padding:19.2px 22.4px;border-radius:22.4px;background:var(--card);border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.movementCreator[hidden]{display:none}.movementCreatorHead{display:flex;align-items:center;justify-content:space-between;gap:16px;margin-bottom:17.6px}.movementCreatorHead h3{margin:0}.movementCreatorClose{position:static}.movementCreatorFields{display:grid;grid-template-columns:minmax(0,1.45fr) minmax(0,.85fr);gap:16px 19.2px}.movementCreatorFields[hidden]{display:none!important}.movementCreatorFields>label{display:grid;gap:6.4px;min-width:0;color:var(--text)}.movementTimingRow{grid-column:1/-1;display:grid;grid-template-columns:minmax(240px,352px) minmax(208px,1fr) auto;gap:17.6px;align-items:end}.durationStack{display:grid;gap:6.4px;color:var(--text)}.creatorDurationRow{display:grid;grid-template-columns:minmax(96px,1fr) minmax(104px,1fr);gap:12.8px;align-items:center}.creatorNumber{width:100%;min-width:0}.creatorUnitSelect{min-height:41.6px;width:100%;padding:0 11.2px;border-radius:12.8px;border:.32px solid var(--field-line);background:var(--input);color:var(--text);font:inherit}.globalTimingToggle{display:flex!important;align-items:center;gap:8px!important;min-height:41.6px;cursor:pointer;color:var(--text)!important;white-space:nowrap}.globalTimingToggle input{position:absolute;opacity:0;pointer-events:none}.toggleTrack{position:relative;width:38.4px;height:22.4px;border-radius:799.2px;background:var(--switch-off);border:.32px solid var(--field-line);flex:0 0 auto;transition:background .16s ease}.toggleThumb{position:absolute;width:17.6px;height:17.6px;top:1.6px;left:1.6px;border-radius:50%;background:var(--knob-off);transition:left .16s ease,background .16s ease}.globalTimingToggle input:checked+.toggleTrack{background:var(--bright)}.globalTimingToggle input:checked+.toggleTrack .toggleThumb{left:17.6px;background:var(--on-bright)}.toggleLabel{color:var(--soft)}.creatorAddButton{min-width:97.6px;min-height:41.6px;align-self:end}@media (max-width:900px){.movementCreatorFields{grid-template-columns:1fr}.movementTimingRow{grid-column:auto;grid-template-columns:1fr;align-items:stretch}.globalTimingToggle{min-height:35.2px}.creatorAddButton{width:100%}}.moveRow.restItem{background:var(--row-rest)}.moveKindBadge{display:inline-flex;margin-left:6.4px;padding:2.4px 5.6px;border:.8px solid var(--field-line);border-radius:799.2px;color:var(--muted);vertical-align:middle}@media (max-width:900px){.movementCreatorFields,.movementCreatorFields.restFields{grid-template-columns:1fr;padding-right:0}.movementCreatorClose{position:static;margin-left:auto;display:block;margin-bottom:12.8px}}.createMoveOptions{margin:0 0 14.4px;padding:14.4px;border-radius:19.2px;background:var(--card2);border:.32px solid var(--line)}.createMoveOptions[hidden]{display:none}.createOptionLabel{text-transform:uppercase;color:var(--muted);margin-bottom:8px}.createPresetChoice{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}.createPresetBtn{min-height:60.8px;padding:11.2px 12.8px;border-radius:14.4px;border:.8px solid var(--field-line);background:transparent;color:var(--text);text-align:left;cursor:pointer}.createPresetBtn strong{display:block}.createPresetBtn span{display:block;color:var(--muted);margin-top:3.2px}.createPresetBtn.active{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.createPresetBtn.active span{color:var(--on-bright);opacity:.68}.createExtras{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px;margin-top:9.6px}.createExtraToggle{display:flex;align-items:flex-start;gap:8px;padding:9.6px 11.2px;border:.8px solid var(--field-line);border-radius:14.4px;cursor:pointer}.createExtraToggle input{margin-top:2.4px}.createExtraToggle span{display:grid;gap:2.4px}.createExtraToggle small{color:var(--muted)}.creatorUnitSelect{min-height:41.6px;padding:0 9.6px;border-radius:12.8px;border:.32px solid var(--field-line);background:var(--input);color:var(--text);font:inherit}@media (max-width:900px){.createPresetChoice,.createExtras{grid-template-columns:1fr}}.globalTimingToggle{display:inline-flex!important;grid-template-columns:none!important;align-items:center;gap:5.6px!important;color:var(--text)!important;white-space:nowrap}.globalTimingToggle input{margin:0}.globalTimingValue{min-height:41.6px;display:flex;align-items:center;padding:0 11.2px;border-radius:12.8px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--muted)}.createFlow{display:grid;gap:9.6px;padding:3.2px 0 8px}.createFlow[hidden]{display:none}.createStep{border-radius:22.4px;background:var(--tile);border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);overflow:hidden}.createStepHeader{width:100%;min-height:57.6px;padding:14.4px 17.6px;border:0;background:transparent;color:var(--text);display:flex;align-items:center;justify-content:space-between;gap:19.2px;text-align:left;cursor:pointer}.createStepHeader:disabled{cursor:not-allowed;opacity:.42}.createStepIdentity{display:flex;align-items:center;gap:9.6px}.createStepNumber{width:22.4px;height:22.4px;border-radius:799.2px;display:grid;place-items:center;border:.32px solid var(--line);color:var(--muted)}.createStepSummary{min-width:0;color:var(--muted);text-align:right}.createStepBody{display:none;padding:0 14.4px 14.4px}.createStep.active .createStepBody{display:block}.createStep.active .createStepHeader{border-bottom:.32px solid var(--divider)}.createStepSlot{display:grid;gap:11.2px}.createStepFooter{display:flex;justify-content:flex-end;margin-top:14.4px}.createStepFooter .primary:disabled{opacity:.35;cursor:not-allowed}.modal.createMode .movementTimingRow{display:none}.modal.createMode .movementCreator{margin-bottom:8px}.modal.createMode .movementCreatorFields{grid-template-columns:minmax(0,1.4fr) minmax(0,1fr)}.modal.createMode .movementCreatorFields.restFields{grid-template-columns:1fr}.modal.createMode .movementCreatorLaunch{margin-top:0}.modal.createMode .sectionTitle{margin-top:9.6px}.modal.createMode .modalStatic{padding-bottom:14.4px}.modal:not(.createMode) .createFlow{display:none!important}#app.resting .movementCard{background:#ffffff0e}#app.resting .movementRippleCanvas{opacity:1}#app.light.resting .movementCard{background:#fbf9f638}.nextCard .skipSessionBtn{margin-left:auto}.modal:not(.createMode) .movementCreatorLaunch{margin-top:25.6px}.testingFeedbackThanks{grid-area:feedback;min-height:176px;padding:19.2px;border:.32px solid var(--line);border-radius:16px;background:#252525;display:flex;flex-direction:column;justify-content:center;align-items:flex-start;gap:6.4px}.testingFeedbackThanks[hidden]{display:none}.testingFeedbackThanks strong{color:#f0f0f0}.testingFeedbackThanks p{margin:0;color:#9ea5b0}.testingFeedbackThanks a{color:#d6d9df;text-underline-offset:2.4px}:host(:fullscreen){overflow:auto;width:100vw;height:100vh}.entitySelect{max-width:min(256px,36.8vw);text-overflow:ellipsis;field-sizing:content}.integration .status code{padding:.8px 4.8px;border-radius:4.8px;background:var(--wash-2)}.integration .pill[disabled]{cursor:default;opacity:.7}#app :focus{outline:none}#app :focus-visible{outline:2.4px solid var(--primary);outline-offset:2.4px}#app .workoutPanel:focus-visible{outline-offset:-2.4px}@media (max-width:620px){.bottomNav{margin-left:14.4px}}.shell:has(.countdown.active) .bottomNav{visibility:hidden}@media (max-width:900px){.workoutPanel:not(.active):not(.addPanel) .panelExpanded{opacity:1;filter:none;pointer-events:auto}}.grid>*{min-width:0}.insightCard{display:grid;gap:22.4px}.day{display:grid;gap:6.4px;justify-items:center}.checkinBackdrop{z-index:160}.checkinCard{width:min(576px,100%)}.checkinCard .sub{margin-top:8px}.checkinSliders{display:grid;gap:11.2px;margin-top:19.2px}.checkinTile{min-height:0;gap:var(--inset);border:0}.scaleEnds{display:flex;justify-content:space-between;margin-top:6.4px;color:var(--muted)}.rangeTrack:focus-within{outline:2.4px solid var(--primary);outline-offset:2.4px}.checkinTab{position:fixed;right:0;top:50%;transform:translateY(-50%);z-index:120;display:flex;flex-direction:column;align-items:center;gap:4px;padding:16px 4px;border:.32px solid var(--line);border-right:0;border-radius:var(--r-fine) 0 0 var(--r-fine)!important;background:var(--control);color:var(--text);cursor:pointer;transition:padding .18s ease,background .18s ease}.checkinTab:hover{padding-right:12.8px}.checkinTabIcon{font-size:16px;line-height:1}.checkinTabLabel{writing-mode:vertical-rl;transform:rotate(180deg)}.checkinBadge{position:absolute;top:8px;left:8px;width:8px;height:8px;border-radius:50%;background:var(--secondary);box-shadow:0 0 0 2.4px var(--control),0 0 9.6px color-mix(in srgb,var(--secondary) 70%,transparent);animation:checkinPulse 1.8s ease-in-out infinite}@keyframes checkinPulse{50%{box-shadow:0 0 0 3px var(--control),0 0 2px color-mix(in srgb,var(--secondary) 20%,transparent)}}@media (prefers-reduced-motion: reduce){.checkinBadge{animation:none}}.shell:has(#workoutView.active) .checkinTab,.shell:has(.countdown.active) .checkinTab{display:none}#app.light .checkinBadge{box-shadow:0 0 0 2.4px var(--color-bg-ground),0 0 9.6px color-mix(in srgb,var(--primary) 50%,transparent)}.feelSection{grid-column:span 12;margin-top:16px}.feelCard{display:grid;gap:19.2px}.feelTop{display:grid;grid-template-columns:minmax(0,1fr) minmax(208px,336px);gap:22.4px;align-items:end}.feelDays{display:grid;grid-template-columns:repeat(7,minmax(0,1fr));gap:8px}.feelDay{min-height:0;gap:9.6px}.feelDay.future{opacity:.4}.feelDay.today{box-shadow:inset 0 0 0 .8px var(--today-ring)}.feelDots{font-size:6.4px;letter-spacing:1.6px;color:var(--muted)}.feelMeter{display:grid;gap:4.8px}.feelMeterTop{display:flex;justify-content:space-between;gap:6.4px;color:var(--muted)}.feelMeterTop span:last-child{color:var(--text)}.feelTrack{height:6.4px;border-radius:799.2px;background:var(--wash-2);overflow:hidden}.feelTrack span{display:block;height:100%;border-radius:799.2px}@media (max-width:900px){.feelSection{grid-column:auto}.feelTop{grid-template-columns:1fr}.feelDays{grid-template-columns:repeat(4,minmax(0,1fr))}}@media (max-width:620px){.feelDays{grid-template-columns:repeat(2,minmax(0,1fr))}}.checkinTile .timeHeader{align-items:center}.checkinTab:not(.due){opacity:.6}.checkinTab:not(.due):hover{opacity:1}.activityCard{grid-column:span 3}.weekly{grid-column:span 9;cursor:pointer;transition:border-color .18s ease,background .18s ease}.weekly:hover{border-color:var(--border-hover)}@media (max-width:1200px){.activityCard{grid-column:span 4}.weekly{grid-column:span 8}}@media (max-width:900px){.activityCard,.weekly{grid-column:auto}}.insightCard{grid-column:span 9;align-content:start}@media (max-width:1200px){.insightCard{grid-column:span 8}}@media (max-width:900px){.insightCard{grid-column:auto}}.helpCard .helpSteps,.helpCard .helpNote{max-width:688px}.helpCard .note{margin:0}.helpSteps{margin:19.2px 0 0;padding:0;list-style:none;counter-reset:help;display:grid;gap:9.6px}.helpSteps li{counter-increment:help;display:grid;gap:4.8px;position:relative;padding:14.4px 16px 14.4px 52.8px;border-radius:20.8px;background:var(--tile);color:var(--muted)}.helpSteps li:before{content:counter(help);position:absolute;left:14.4px;top:12.8px;width:25.6px;height:25.6px;border-radius:9.6px;display:grid;place-items:center;background:var(--icon-bg);color:var(--text)}.helpSteps strong,.helpSteps b,.helpNote b{color:var(--text)}.helpCard code{padding:.8px 4.8px;border-radius:4.8px;background:var(--wash-2)}.helpNote{display:grid;gap:3.2px;margin-top:9.6px;padding:12.8px 16px;border-radius:17.6px;border:.32px solid var(--field-line);color:var(--muted)}.helpNote strong{color:var(--text)}.rowLabel{grid-column:1/-1;margin-top:16px;margin-bottom:-8px}.checkinTab{flex-direction:row;align-items:center;gap:0}.checkinTabMain{display:flex;flex-direction:column;align-items:center;gap:4px}.checkinPeek{display:grid;gap:3.2px;justify-items:start;white-space:nowrap;overflow:hidden;max-width:0;opacity:0;margin-right:0;transition:max-width .32s cubic-bezier(.2,1.2,.4,1),opacity .2s ease,margin-right .32s ease}.checkinTab.peek{padding-left:17.6px;opacity:1}.checkinTab.peek .checkinPeek{max-width:176px;opacity:1;margin-right:14.4px}.peekCountdown{font-size:24px;font-weight:800;letter-spacing:-.04em;line-height:1;font-variant-numeric:tabular-nums}.peekAt{color:var(--muted)}@media (prefers-reduced-motion: reduce){.checkinPeek{transition:none}}.activityRowMeta{color:var(--text);margin-top:1.6px;font-variant-numeric:tabular-nums}.feelTop{grid-template-columns:1fr}:host{--primary:#03A9F4;--secondary:#D0FF00;--font:Inter,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;--font-tile:Geist,var(--font);--w-regular:400;--w-medium:500;--w-semibold:600;--w-bold:700;--w-heavy:800;--t-display:52px;--t-title:22px;--t-card-title:18px;--t-value:16px;--t-section:18px;--t-strong:14px;--t-body:12px;--t-caption:12px;--lh-display:1.05;--lh-title:1;--t-wx-temp:64px;--t-wx-range:24px;--t-tile-title:14px;--lh-tile-title:20px;--t-tile-detail:16px;--lh-tile-detail:20px;--inset:10px;--r-card:34px;--r-tile:24px;--r-inner:16px;--r-fine:12px;--tile-min:60px;--chip-size:40px;--glyph-size:34px;--gutter:22px;--grid-gap:16px}@media (max-width:620px){:host{--t-display:46px;--t-title:20px;--t-value:20px;--t-section:16px;--t-strong:15px;--t-body:14px;--t-caption:11px;--lh-display:.92;--lh-title:1.05}}#app{font-family:var(--font);font-size:var(--t-body);font-weight:var(--w-regular);line-height:1.4}#app button,#app input,#app select,#app textarea{font-family:inherit}:where(#app) strong,:where(#app) b{font-weight:var(--w-bold)}.title,.workoutName,.exerciseTitle,.feelHeadline,.settingsTitle{font-size:var(--t-display);font-weight:var(--w-heavy);line-height:var(--lh-display);letter-spacing:-.055em}.confirmTitle,.sheetTitle,.modalHead h2,.paneTitle,.movementCreatorHead h3,.testingFeedbackThanks strong{font-size:var(--t-title);font-weight:var(--w-medium);font-style:italic;line-height:var(--lh-title);letter-spacing:-.03em}.activityTitle{font-size:var(--t-card-title);font-weight:var(--w-medium);font-style:italic;line-height:1.1;letter-spacing:-.02em;text-box:trim-both cap alphabetic}.paneTitle{margin:0 0 10px}.activityRowMeta,.nextName,.upcomingName,.editNameInput,.videoClock{font-size:var(--t-value);font-weight:var(--w-regular);line-height:1.15;letter-spacing:-.02em}.sectionLabel,.nextLabel{font-size:var(--t-section);font-weight:var(--w-regular);line-height:1.2;letter-spacing:-.01em}.activityRowName,.timeLabel,.moveItemName,.setupSummaryText strong,.sheetChoice strong,.createPresetBtn strong,.createExtraToggle strong{font-family:var(--font-tile);font-size:var(--t-tile-title);font-weight:var(--w-semibold);line-height:var(--lh-tile-title);letter-spacing:0}.moveMeta,.setupSummaryText small,.sheetChoice small,.createPresetBtn span,.createExtraToggle small{font-family:var(--font-tile);font-size:var(--t-tile-detail);font-weight:var(--w-regular);line-height:var(--lh-tile-detail);letter-spacing:0}.integration strong,.toggleRow strong,.setupName,.weekChipTop strong,.panelCollapsedText,.activityCount,.metaType,.kindChip,.helpSteps strong,.addGhost strong,.helpNote strong,.createStepIdentity strong,.testingZoneTitleRow strong,.testingFeedbackHeading,.tempoEstimate,.primary,.tab,.skipBtn,.skipSessionBtn,.hideBtn,.removeBtn,.addBtn,.themeBtn,.wxLayoutBtn,.holdEnd,.holdDelete,.movementCreatorOpen,.restAddBtn,.creatorAddButton,.testingFeedbackSubmit,.testingRating button,.toast,.checkinTabLabel{font-size:var(--t-strong);font-weight:var(--w-semibold);line-height:1.25;letter-spacing:-.01em}.status,.setupValue,.sub,.meta,.note,.weekCopy,.addInput,.settingsSelect,.pill,.routineSummary,.helpSteps li,.helpNote,.createStepSummary{font-size:var(--t-body);font-weight:var(--w-regular);line-height:1.4;letter-spacing:0}.setupCaption,.moveEditForm label>span,.addGhostText small,.setupSummaryAction,.metaTable th,.metaSub,.eyebrow,#stepLabel,.sourceTag,.addPanelLabel,.motionRangeWrap span,.sectionTitle,.editNameLabel,.scaleEnds,.peekAt,.upcomingMeta,.tempoPole,.tempoReadout,.tempoRevealBtn,.testingFeedbackField,.testingZoneExplanation,.testingFeedbackThanks p,.movementCreatorClose,.movementCreatorFields>label,.durationStack,.globalTimingToggle,.toggleLabel,.moveKindBadge,.createOptionLabel,.fieldError,.globalTimingValue,.createStepNumber,.feelMeterTop,#app code{font-size:var(--t-caption);font-weight:var(--w-regular);line-height:1.35;letter-spacing:0}.eyebrow,#stepLabel,.sectionTitle,.setupCaption{letter-spacing:.1em}.globalTimingToggle{font-size:var(--t-caption)!important}.workoutGallery,.workoutPanel{height:340px}@media (max-width:900px){.workoutPanel,.workoutPanel.active{height:320px}}@media (max-width:900px){.workoutGallery{height:auto}.workoutPanel,.workoutPanel.active{height:auto;min-height:320px}}@media (max-width:620px){.view{padding-left:0;padding-right:0}.settingsHeader,.sessionHead,.sessionControlRow{margin-left:16px;margin-right:16px}.tabs.rubberTabs,.sectionLabel,.rowLabel{margin-left:16px}.grid{gap:8px}.rowLabel,.feelSection{margin-top:16px}.rowLabel{margin-bottom:-4px}.sectionLabel{margin-bottom:8px}.workoutGallery{gap:8px}.workoutPanel,.workoutPanel.active{flex:0 0 100%;min-width:100%}.workoutPanel.addPanel{flex:0 0 100%;min-width:100%;min-height:120px}.card,.workoutPanel,.timerCard,.movementCard,.nextCard,.upcomingCard,.confirmCard{padding:16px}.activityRows,.insightCard,.feelCard{gap:8px}.activityRow,.weekChip{padding:10px 12px}.feelDays{gap:8px}.workGrid{gap:8px;margin-top:8px}.nextWrap,.sessionControlRow{margin-top:8px}.upcomingList{gap:8px}}.tabs.rubberTabs .tab{white-space:nowrap}@media (max-width:620px){.tabs.rubberTabs{display:flex;width:max-content;max-width:calc(100% - 32px);overflow-x:auto;scrollbar-width:none}.tabs.rubberTabs::-webkit-scrollbar{display:none}.tabs.rubberTabs .tab{flex:0 0 auto}}.insightCard{display:flex;flex-direction:column;gap:0}@media (max-width:1200px) and (min-width:901px){.timeTiles{grid-auto-flow:row;grid-template-columns:repeat(2,1fr)}}#stepLabel{margin-top:9.6px}#exerciseMeta{margin-top:4px}.moveRow{justify-content:flex-start;gap:12.8px}.moveText{flex:1;min-width:0}.moveActions{display:flex;gap:6.4px;flex:0 0 auto}.dragHandle{flex:0 0 auto;display:grid;place-items:center;width:32px;height:40px;margin:-8px 0 -8px -9.6px;padding:0;border:0;border-radius:12px;background:transparent;color:var(--muted);cursor:grab;touch-action:none}.dragHandle:hover{background:var(--hover);color:var(--text)}.moveRow.dragging{box-shadow:0 10px 30px var(--lift),inset 0 0 0 1.5px var(--primary);position:relative;z-index:2}.moveRow.dragging .dragHandle{cursor:grabbing;color:var(--text)}.removeBtn:hover,.hideBtn:hover{border-color:var(--muted)}.toast{position:fixed;z-index:400;display:flex;align-items:center;gap:12.8px}.toast.withAction{pointer-events:auto}.toastAction{border:0;padding:0;background:none;color:inherit;font:inherit;text-decoration:underline;text-underline-offset:3px;cursor:pointer}.modalTop{flex:0 0 auto;padding:22px 22px 0}.modalTop .modalHead{margin-bottom:0;padding-bottom:16px}@media (min-width:901px){.modal:not(.createMode){display:grid;grid-template-columns:minmax(340px,420px) minmax(0,1fr);grid-template-rows:auto minmax(0,1fr)}.modal:not(.createMode) .modalTop{grid-column:1/-1;border-bottom:.32px solid var(--divider)}.modal:not(.createMode) .modalStatic{grid-column:1;grid-row:2;overflow-y:auto;border-bottom:0;border-right:.32px solid var(--divider)}.modal:not(.createMode) .exerciseScroller{grid-column:2;grid-row:2;border-top:0;padding-top:12px}.modal:not(.createMode) .timeTiles{grid-auto-flow:row;grid-template-columns:minmax(0,1fr)}}.timeTiles{align-items:start}.removeLabel{position:relative;z-index:1}.removeBtn.holding{border-color:var(--danger-fill)}#deleteMoveConfirm{z-index:200}.moveRow{will-change:transform}.moveRow.dragging{box-shadow:0 18px 40px var(--lift),inset 0 0 0 1.5px var(--primary);z-index:3;transform-origin:center}.moveRow.editing{display:block;padding:16px;box-shadow:inset 0 0 0 1.5px var(--primary)}.moveEditForm{display:grid;gap:14.4px}.moveEditFields{display:grid;grid-template-columns:minmax(0,1.4fr) minmax(0,1fr);gap:12.8px}.moveEditForm label:not(.globalTimingToggle){display:grid;gap:6.4px;min-width:0}.moveEditForm .addInput{width:100%;min-width:0}.moveEditTiming{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:12.8px}.moveEditTiming .creatorDurationRow{display:grid;grid-template-columns:96px 128px;gap:9.6px}.creatorDurationRow.isDisabled{opacity:.38}.moveEditActions{display:flex;justify-content:flex-end;align-items:center;gap:22.4px}@media (max-width:620px){.moveEditFields{grid-template-columns:1fr}}.integration .status code{color:var(--soft)}#app.resting :is(.sessionHead,.nextLabel,.sessionControlRow){--muted:#f4f4f4;color:var(--text)}#app.paused :is(.sessionHead,.nextLabel,.sessionControlRow){--text:#090909;--muted:rgba(9,9,9,.8);--accent-text:#090909;--line:rgba(9,9,9,.3);color:var(--text)}#app.light:is(.resting,.paused) :is(.sessionHead,.nextLabel,.sessionControlRow){--text:#26221e;--muted:rgba(38,34,30,.85);--accent-text:#26221e;--line:rgba(38,34,30,.25);color:var(--text)}.moveList{display:flex;flex-direction:column}.movementCreatorOpen,.restAddBtn{display:inline-flex;align-items:center;gap:6px;touch-action:none;user-select:none;-webkit-user-select:none;cursor:grab;transition:transform .42s cubic-bezier(.34,1.46,.64,1),opacity .2s ease}.movementCreatorOpen svg,.restAddBtn svg{width:14px;height:14px;margin-left:-3px;opacity:.55;flex:0 0 auto}.movementCreatorOpen.lifting,.restAddBtn.lifting{transform:scale(.92);opacity:.4;cursor:grabbing;transition:transform .16s ease,opacity .16s ease}.addGhost{position:fixed;left:0;top:0;z-index:20;pointer-events:none;box-sizing:border-box;display:flex;align-items:center;gap:8px;padding:0 12.8px;overflow:hidden;white-space:nowrap;border-radius:12px;background:var(--bright);color:var(--on-bright);box-shadow:0 12px 30px var(--lift);will-change:transform;transition:width .4s cubic-bezier(.34,1.46,.64,1),height .4s cubic-bezier(.34,1.46,.64,1),border-radius .3s ease,padding .3s ease,background .2s ease,color .2s ease,box-shadow .25s ease,opacity .18s ease}.addGhost.rest{background:var(--control-2);color:var(--text);box-shadow:inset 0 0 0 .5px var(--field-line),0 12px 30px var(--lift)}.addGhostGrip{display:grid;place-items:center;flex:0 0 auto;opacity:.55}.addGhostGrip svg{width:14px;height:14px;transition:width .3s ease,height .3s ease}.addGhostText{display:grid;min-width:0}.addGhostText small{color:var(--muted);max-height:0;opacity:0;transition:max-height .3s ease,opacity .2s ease}.addGhost.overList{border-radius:20.8px;gap:12.8px;padding:0 22.4px 0 12.8px;background:var(--row);color:var(--text);box-shadow:inset 0 0 0 1.5px var(--primary),0 16px 36px var(--lift)}.addGhost.overList .addGhostGrip svg{width:18px;height:18px}.addGhost.overList .addGhostText small{max-height:20px;opacity:1;margin-top:4px}.addGhost.leaving{opacity:0}.dropSlot{flex:0 0 auto;height:0;margin-top:-8px;border-radius:20.8px;background:color-mix(in srgb,var(--primary) 9%,transparent);box-shadow:inset 0 0 0 1.5px color-mix(in srgb,var(--primary) 40%,transparent);transition:height .42s cubic-bezier(.34,1.46,.64,1),margin-top .42s cubic-bezier(.34,1.46,.64,1),opacity .2s ease}.dropSlot.leaving{opacity:0;transition:height .26s cubic-bezier(.4,0,.2,1),margin-top .26s cubic-bezier(.4,0,.2,1),opacity .16s ease}@media (prefers-reduced-motion: reduce){.addGhost,.dropSlot,.movementCreatorOpen,.restAddBtn{transition:none}}.exerciseScroller,.modalStatic,.createFlow{overflow-anchor:none}.videoStage{position:absolute;top:0;right:0;bottom:0;left:0;z-index:3;display:grid;place-items:center;background:#000;opacity:0;pointer-events:none;transition:opacity .3s ease}#app.videoStep .videoStage{opacity:1;pointer-events:auto}.videoStage{container-type:size}.videoFrame{width:min(100cqw,calc(100cqh * 16 / 9));aspect-ratio:16/9}.videoFrame>*{display:block;width:100%;height:100%;border:0}.videoSound{position:absolute;left:50%;bottom:16px;transform:translate(-50%);z-index:2}.videoProbe{position:fixed;left:-10000px;top:0;width:320px;height:180px;opacity:0;pointer-events:none}.digits.long{font-size:clamp(96px,12.8vw,200px)}.moveEditFields.videoFields{grid-template-columns:minmax(0,1fr)}.fieldError{margin:0;color:var(--danger)}.addInput.invalid{border-color:var(--danger)}@media (prefers-reduced-motion: reduce){.videoStage{transition:none}}.workGrid{transition:grid-template-columns .55s cubic-bezier(.2,.8,.2,1),gap .55s cubic-bezier(.2,.8,.2,1)}.timerCard{transition:opacity .25s ease}#app.videoStep .timerCard{opacity:0;min-width:0;pointer-events:none}.workGrid{container-type:inline-size}#app.videoStep .movementCard{height:min(56.25cqw,var(--theater-h,60vh));min-height:240px;padding:0}#app.videoStep .exerciseTitle{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}@media (min-width:901px){#app.videoStep .workGrid{grid-template-columns:minmax(0,0fr) minmax(240px,1fr);gap:0}}@media (max-width:900px){#app.videoStep .timerCard{display:none}#app.videoStep .movementCard{min-height:0}}.videoClock{display:none;margin-right:auto;font-variant-numeric:tabular-nums}#app.videoStep .videoClock{display:block}@media (prefers-reduced-motion: reduce){.workGrid,.timerCard{transition:none}}.metaCard{margin-top:16px}.metaFilters{display:flex;flex-wrap:wrap;gap:9.6px;align-items:center;margin:14.4px 0 11.2px}.metaSearch{flex:1 1 200px;min-width:0}.metaKinds{display:flex;flex-wrap:wrap;gap:6.4px}.kindChip{min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);border-radius:12px;background:var(--control-2);color:var(--text);cursor:pointer}.kindChip.active{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.metaTableWrap{overflow-x:auto}.metaTable{width:100%;border-collapse:collapse}.metaTable th{text-align:left;color:var(--muted);padding:12px 16px;border-bottom:.32px solid var(--divider);text-transform:uppercase;letter-spacing:.1em}.metaTable td{padding:12px 16px;border-top:.32px solid var(--divider);vertical-align:middle;color:var(--soft)}.metaTable tbody tr:first-child td{border-top:0}.metaTable :is(th,td):first-child{padding-left:4px}.metaTable :is(th,td):last-child{padding-right:4px}.metaTable .metaSwitchCol{width:1%;white-space:nowrap;text-align:right}.metaTable .metaSwitchCol .switch{display:inline-block;vertical-align:middle}.metaType{color:var(--text)}.metaTable tr.off .metaType{color:var(--muted)}.metaSub{display:none;margin-top:2px;color:var(--muted)}.metaEmpty td{text-align:center;color:var(--muted)}.metaBulk{display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap;margin-top:11.2px}.metaBulkActions{display:flex;gap:22.4px}@media (max-width:620px){.metaKindCol,.metaUsedCol{display:none}.metaSub{display:block}}@media (max-width:620px){.moveRow.noMeta .moveMeta,.upcomingCard.noMeta .upcomingMeta,.nextCard.noMeta #nextMeta{display:none}}.setupSummary,.addFab{display:none}.modal{position:relative}.setupSummary{align-items:center;justify-content:space-between;gap:12px;width:100%;margin:6.4px 0 4px;padding:12px 14px;border:0;border-radius:20.8px;background:var(--tile);color:var(--text);text-align:left;cursor:pointer}.setupSummaryText{display:grid;gap:2px;min-width:0}.setupSummaryText small{color:var(--muted)}.setupSummaryAction{flex:0 0 auto;color:var(--muted)}.rowChevron{flex:0 0 auto;color:var(--muted);font-size:22px;line-height:1}.addFab{position:absolute;right:16px;bottom:calc(16px + env(safe-area-inset-bottom,0px));z-index:12;place-items:center;width:56px;height:56px;padding:0;border:0;background:var(--bright);color:var(--on-bright);font-size:30px;font-weight:300;line-height:1;box-shadow:0 10px 24px var(--lift);cursor:pointer}.sheetScrim{position:absolute;top:0;right:0;bottom:0;left:0;z-index:30;background:var(--scrim);opacity:0;pointer-events:none;transition:opacity .25s ease}.sheetScrim.open{opacity:1;pointer-events:auto}.sheet{position:absolute;left:0;right:0;bottom:0;z-index:31;display:grid;gap:14px;max-height:88%;overflow-y:auto;overscroll-behavior:contain;padding:10px 16px calc(22px + env(safe-area-inset-bottom,0px));border-radius:var(--r-card) var(--r-card) 0 0;background:var(--modal);box-shadow:0 -.5px 0 var(--divider),0 -18px 40px var(--lift);transform:translateY(105%);visibility:hidden;transition:transform .42s cubic-bezier(.2,.9,.25,1.06),visibility 0s linear .42s}.sheet.open{transform:none;visibility:visible;transition:transform .42s cubic-bezier(.2,.9,.25,1.06)}.sheetGrab{justify-self:center;width:38px;height:5px;border-radius:99px;background:var(--field-line)}.sheetTitle{margin:0}.sheet .moveRow.editing{display:block;padding:0;background:none;box-shadow:none;border-radius:0}.sheetActions{justify-content:space-between;flex-wrap:wrap;gap:12.8px}.sheetSecondary,.sheetPrimary{display:flex;align-items:center;gap:6.4px}.sheetPrimary{gap:22.4px;margin-left:auto}.sheetChoices{display:grid;gap:8px}.sheetChoice{display:flex;align-items:center;gap:14px;width:100%;padding:12px;border:0;border-radius:20.8px;background:var(--row);color:var(--text);text-align:left;cursor:pointer}.sheetChoice small{display:block;margin-top:2px;color:var(--muted)}.sheetSetup .modalStatic{padding:0;background:none;border:0;overflow:visible}.sheetDone{width:100%;margin-top:14.4px}.addGhostActions{display:none;align-items:center;gap:6.4px;margin-left:auto;flex:0 0 auto}.addGhost.hovering{pointer-events:auto;cursor:grab;touch-action:none;animation:ghostWait 1.8s ease-in-out infinite}.addGhost.held{pointer-events:auto;cursor:grabbing;touch-action:none}.addGhost.hovering .addGhostActions{display:flex}.addGhost.rising{transition:transform .6s cubic-bezier(.34,1.46,.64,1),opacity .2s ease}.ghostDiscard{padding:0 10px}@keyframes ghostWait{50%{box-shadow:inset 0 0 0 1.5px var(--primary),0 22px 44px var(--lift),0 0 0 5px color-mix(in srgb,var(--primary) 22%,transparent)}}@media (max-width:620px){.modal:not(.createMode)>.modalStatic{display:none}.modal:not(.createMode) .setupSummary{display:flex}.addFab{display:grid}.movementCreatorLaunch{display:none}.exerciseScroller{padding-bottom:104px}.moveRow.phoneRow{gap:8px;min-height:60px;padding:12px 12px 12px 14px;cursor:pointer}}@media (prefers-reduced-motion: reduce){.sheet,.sheetScrim{transition:none}.addGhost.hovering{animation:none}}.modal{overflow:clip}.moveList.reordering>.moveRow:not(.dragging){transition:transform .44s cubic-bezier(.34,1.46,.64,1)}.moveRow.dragging.willReturn{opacity:.62;box-shadow:0 10px 24px var(--lift),inset 0 0 0 1.5px var(--field-line)}@media (prefers-reduced-motion: reduce){.moveList.reordering>.moveRow{transition:none}}.card,.panel,.confirmCard,.nextCard,.workoutPanel.active{padding:var(--inset)}.confirmCard,.nextCard,.upcomingCard{border-radius:var(--r-card)}.upcomingCard{padding:var(--inset)}.workoutPanel{border-radius:var(--r-tile);padding:var(--inset)}.workoutPanel.active{border-radius:var(--r-tile)}.workoutPanel.addPanel{padding:var(--inset)}.activityRow,.moveRow,.timeTile,.createPresetBtn,.createExtraToggle,.sheetChoice,.setupSummary{border-radius:var(--r-tile)}.activityRow,.moveRow{min-height:var(--tile-min);padding:var(--inset);gap:var(--inset)}.activityRow{grid-template-columns:var(--chip-size) minmax(0,1fr)}.activityRows{gap:12px}.timeTile{padding:var(--inset);gap:var(--inset)}.timeHeader{gap:var(--inset)}.createPresetBtn,.createExtraToggle{padding:var(--inset)}.moveMeta,.activityRowMeta,.setupSummaryText small,.sheetChoice small,.createExtraToggle small{color:var(--text)}.createPresetBtn.active span{color:var(--on-bright)}.moveMeta,.activityRowMeta{margin-top:0}.activityRowIcon,.activityIcon,.timeIcon,.nextIcon,.upcomingIcon{width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);font-size:20px}.navBtn,.back{display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);min-height:0;padding:0;border-radius:var(--r-inner)}.moveRow.editing{padding:var(--inset)}.moveRow.phoneRow{min-height:0;padding:var(--inset);gap:var(--inset)}.dragHandle{width:var(--chip-size);height:var(--chip-size);margin:0;border-radius:var(--r-inner);background:var(--icon-bg);color:var(--muted)}.dragHandle svg{width:var(--glyph-size);height:var(--glyph-size)}.moveRow.restItem .dragHandle{background:transparent}.dragHandle:hover{background:color-mix(in srgb,var(--icon-bg) 80%,var(--text))}.moveRow.restItem .dragHandle:hover{background:var(--hover)}.addGhost.overList,.dropSlot{border-radius:var(--r-tile)}.seg{display:flex;align-items:center;gap:4px;padding:4px;border-radius:var(--r-inner);background:var(--seg-bg);flex:0 0 auto}.segBtn{min-height:38px;padding:0 20px;border:0;border-radius:var(--r-fine);background:transparent;color:var(--text);cursor:pointer}.segBtn:hover{background:var(--hover)}.moveActions.seg{gap:4px}.moveActions .segBtn{min-width:100px}.moveActions .editBtn{background:var(--seg-on)}.moveActions .editBtn:hover{background:color-mix(in srgb,var(--seg-on) 88%,var(--text))}.moveActions .removeBtn{display:grid;place-items:center;width:40px;min-width:40px;padding:0;border:0;background:var(--danger-fill);color:var(--on-danger-fill)}.moveActions .removeBtn:hover{background:color-mix(in srgb,var(--danger-fill) 88%,white);border:0}.moveActions .removeBtn svg{display:block;width:24px;height:24px}.moveActions .removeFill{background:color-mix(in srgb,var(--on-danger-fill) 45%,transparent)}.moveActions .removeBtn.holding{color:#fff}@media (max-width:1100px){.moveActions .segBtn:not(.removeBtn){min-width:0;padding:0 14px}}.tabs.rubberTabs{padding:4px;gap:4px;border:0;border-radius:var(--r-inner);background:var(--seg-bg)}.rubberIndicator{top:4px;left:4px;height:calc(100% - 8px);border-radius:var(--r-fine);background:var(--seg-on)}.tabs.rubberTabs .tab{min-height:38px;padding:0 20px}.tabs.rubberTabs .tab.active{color:var(--text)}#app.light .rubberIndicator{box-shadow:0 1px 3px var(--lift)}.toggleTrack{width:50px;height:28px;border-radius:var(--r-inner);background:var(--line);border:.4px solid var(--line);opacity:1;transition:background .16s ease,opacity .16s ease}.toggleThumb{width:24px;height:24px;top:50%;left:1.6px;border-radius:12px 4px 4px 12px;background:var(--text);transform:translateY(-50%);transition:left .16s ease,border-radius .16s ease,background .16s ease}.globalTimingToggle input:checked+.toggleTrack{background:var(--color-accent-primary);opacity:1}.globalTimingToggle input:checked+.toggleTrack .toggleThumb{left:calc(100% - 25.6px);border-radius:4px 12px 12px 4px;background:var(--color-text-on-accent)}@media (max-width:900px){.workoutPanel:not(.addPanel){border-radius:var(--r-tile);padding:var(--inset)}}@media (max-width:620px){:host{--gutter:0px;--grid-gap:8px}}@media (max-width:620px){.modalBackdrop{padding:0}.modal,.modal:not(.createMode){width:100%;height:100%;max-height:none;border-radius:0;border:0}.modalTop{padding-top:calc(16px + env(safe-area-inset-top,0px))}.modal:not(.createMode) .exerciseScroller{padding-bottom:calc(104px + env(safe-area-inset-bottom,0px))}}#app{--group-bg:var(--card)}.modal,.sheet{--group-bg:var(--tile)}.view{padding-left:var(--gutter);padding-right:var(--gutter)}.grid{gap:var(--grid-gap)}.setupCaption{display:block;padding:0 4px 8px;color:var(--muted);text-transform:uppercase}.setupGroup,#settingsView .integrationList,#settingsView .toggleList{display:grid;gap:0;border-radius:var(--r-tile);background:var(--group-bg);overflow:hidden}.setupRow,#settingsView .integration,#settingsView .toggleRow{position:relative;display:flex;align-items:center;justify-content:space-between;gap:16px;min-height:56px;padding:12px 16px;border-radius:0;background:transparent}:is(.setupRow,#settingsView .integration,#settingsView .toggleRow):not([hidden])~:is(.setupRow,.integration,.toggleRow):before{content:"";position:absolute;top:0;left:16px;right:0;border-top:.5px solid var(--divider)}.setupRow.withSlider{display:grid;grid-template-columns:minmax(0,1fr);gap:10px;align-items:stretch}.setupRowTop{display:flex;justify-content:space-between;align-items:center;gap:16px}.setupText{display:grid;gap:2px;min-width:0}.setupValue,#settingsView .status{color:var(--muted);margin-top:0;font-variant-numeric:tabular-nums}.setupRow .rangeTrack[hidden]{display:none}.rangeTrack.setupSlider{height:28px;margin:0 2px;border:0;border-radius:0!important;background:transparent;overflow:visible}.rangeTrack.setupSlider:before{content:"";position:absolute;left:0;right:0;top:50%;height:6px;border-radius:99px;background:var(--track);transform:translateY(-50%)}.setupSlider .rangeFill{top:50%;bottom:auto;height:6px;border-radius:99px;transform:translateY(-50%)}.setupSlider .rangeFill:after{content:"";position:absolute;right:-11px;top:50%;width:22px;height:22px;border-radius:50%;background:var(--slider-fill);box-shadow:0 1px 4px var(--lift);transform:translateY(-50%)}.setupSlider:focus-within{outline:0}.setupSlider:focus-within .rangeFill:after{box-shadow:0 0 0 3px color-mix(in srgb,var(--primary) 45%,transparent)}.stepper{display:flex;align-items:center;gap:2px;padding:4px;border-radius:var(--r-inner);background:var(--seg-bg);flex:0 0 auto}.stepBtn{width:36px;height:32px;padding:0;border:0;border-radius:var(--r-fine)!important;background:transparent;color:var(--text);font:600 18px/1 var(--font);cursor:pointer}.stepBtn:hover:not(:disabled){background:var(--hover)}.stepBtn:disabled{opacity:.35;cursor:default}.stepCount{min-width:24px;text-align:center;font:600 var(--t-strong)/1 var(--font);font-variant-numeric:tabular-nums}.timeTiles.setupBlock,.modal:not(.createMode) .timeTiles.setupBlock{display:block;margin-bottom:12px}.editNameLabel{padding:0 4px}.routineSummary{margin:0 0 4px;padding:0 4px;background:none;border-radius:0;color:var(--muted)}#settingsView .card{display:grid;gap:12px;padding:0;border:0;border-radius:0;background:none}#settingsView .card+.card{margin-top:36px}#settingsView .paneTitle{margin:0 4px}#settingsView .note{margin:0 4px 4px}#settingsView .integration>div:first-child,#settingsView .toggleRow>div:first-child{display:grid;gap:2px;min-width:0}#settingsView .helpSteps{gap:0;border-radius:var(--r-tile);background:var(--group-bg);overflow:hidden}#settingsView .helpSteps li{border-radius:0;background:transparent}#settingsView .helpSteps li+li:after{content:"";position:absolute;top:0;left:52.8px;right:0;border-top:.5px solid var(--divider)}.activityCard,.insightCard{grid-column:span 3}.weatherCard,.grid.noWeather .activityCard,.grid.noWeather .insightCard,.grid.noActivity .insightCard{grid-column:span 6}.grid.noActivity.noWeather .insightCard{grid-column:span 12}@media (max-width:1199px) and (min-width:901px){.activityCard,.insightCard{grid-column:span 6}.weatherCard,.grid.noActivity .insightCard{grid-column:span 12}}@media (max-width:900px){.activityCard,.insightCard,.weatherCard,.grid .insightCard{grid-column:auto}}.jointRows{gap:0;padding:4px 0;border-radius:var(--r-tile);background:var(--tile)}.jointRows>.activityRow{background:transparent}.insightCard .jointRows{flex:1;align-content:space-evenly}.weatherCard{display:flex;flex-direction:column}.wxWide{flex:1;display:flex;flex-direction:column;gap:var(--inset)}.wxNow{display:flex;justify-content:space-between;align-items:flex-start;gap:16px}.wxCurrent{display:flex;align-items:flex-start;gap:16px;min-width:0}.wxTempBlock{display:grid;gap:4px;min-width:0}.wxTemp{display:flex;align-items:flex-start;gap:2px}.wxPlace{color:var(--muted);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.wxCondition{display:grid;gap:2px;padding:var(--inset);border-radius:var(--r-tile);background:var(--tile);flex:0 0 auto}.wxNoDays{flex:1;display:grid;place-items:center;padding:16px;border-radius:var(--r-tile);background:var(--tile);color:var(--muted)}.wxIcon{position:relative;display:block;flex:0 0 auto;width:54px;height:54px;border-radius:var(--r-inner);background:var(--icon-bg);overflow:hidden}.wxIcon>svg,.wxLayer>svg{display:block;width:100%;height:100%}:is(.wxIcon,.wxLayer).clear,:is(.wxIcon,.wxLayer).partly{background:var(--wx-clear)}:is(.wxIcon,.wxLayer).cloudy{background:var(--wx-cloudy)}:is(.wxIcon,.wxLayer).rain,:is(.wxIcon,.wxLayer).snow{background:var(--color-text-muted)}:is(.wxIcon,.wxLayer).night{background:var(--wx-night)}.wxIcon .wxBright{fill:var(--wx-cloud-bright)}.wxIcon .wxCloudLight{fill:var(--wx-cloudy)}.wxIcon .wxAccent{fill:var(--color-accent-primary)}.wxIcon.large{width:90px;height:90px;border-radius:var(--r-tile)}.wxIcon>canvas{display:block;width:100%;height:100%;image-rendering:pixelated}.wxIcon :is(.wxSunDisc,.wxMoonPath,.wxBright,.wxCloudLight,.wxDrop,.wxFlake,.wxTwinkle){transform-box:fill-box;transform-origin:center}#app.wxMotion .wxIcon .wxSunDisc{animation:wxBreathe 3.6s ease-in-out infinite}#app.wxMotion .wxIcon .wxMoonPath{animation:wxBob 5.2s ease-in-out infinite}#app.wxMotion .wxIcon :is(.wxBright,.wxCloudLight){animation:wxDrift 6.4s ease-in-out infinite}#app.wxMotion .wxIcon .wxDrop{animation:wxFall .95s linear infinite}#app.wxMotion .wxIcon .wxFlake{animation:wxSnow 3.2s linear infinite}#app.wxMotion .wxIcon .wxTwinkle{animation:wxTwinkle 2.4s ease-in-out infinite}@keyframes wxBreathe{50%{transform:scale(1.03)}}@keyframes wxBob{50%{transform:translateY(-1px)}}@keyframes wxDrift{0%,to{transform:translate(-1.5px)}50%{transform:translate(1.5px)}}@keyframes wxFall{0%{transform:translateY(-5px);opacity:0}18%,72%{opacity:1}to{transform:translateY(9px);opacity:0}}@keyframes wxSnow{0%{transform:translateY(-6px);opacity:0}20%,75%{opacity:1}to{transform:translate(1.5px,8px);opacity:0}}@keyframes wxTwinkle{50%{opacity:.35}}.wxLayer{position:absolute;top:0;right:0;bottom:0;left:0;display:block}.wxLayer.wxOut{animation:wxFadeOut .7s cubic-bezier(.3,0,1,1) forwards}@keyframes wxFadeOut{to{opacity:0}}.wxDeg{font-family:var(--font-tile);font-size:var(--t-wx-temp);font-weight:var(--w-medium);line-height:1;letter-spacing:-.02em}.wxUnit,.wxRange{font-family:var(--font-tile);font-size:var(--t-wx-range);font-weight:300;line-height:1.25;letter-spacing:0}.wxPlace,.wxCondName{font-family:var(--font-tile);font-size:var(--t-tile-title);font-weight:var(--w-semibold);line-height:var(--lh-tile-title);letter-spacing:0}.wxNoDays{font-family:var(--font-tile);font-size:var(--t-tile-detail);font-weight:var(--w-regular);line-height:var(--lh-tile-detail);letter-spacing:0}.wxNow[role=button],.wxDayTile{cursor:pointer;border-radius:var(--r-tile)}:is(.wxNow,.wxDayTile,.wxStripDay):focus-visible{outline:2px solid var(--color-border-focus);outline-offset:2px}.wxStrip{position:relative;flex:1;display:flex}.wxStripDays{flex:1;display:grid;grid-template-columns:repeat(6,minmax(0,1fr))}.wxStripDay{display:flex;flex-direction:column;align-items:center;justify-content:space-between;gap:var(--inset);min-width:0;padding:var(--inset) 0;border-radius:var(--r-tile);cursor:pointer}@media (hover:hover){.wxStripDay:hover{background:var(--color-state-hover)}}.wxStripGap{align-self:stretch;height:90px}.wxStripDay .wxTemps{display:grid;justify-items:center;gap:8px}.wxStripSky{position:absolute;left:0;top:calc(var(--inset) * 2 + var(--lh-tile-detail));width:100%;height:90px;border-radius:var(--r-inner);pointer-events:none;image-rendering:pixelated}.wxStripDay .wxDayName,.wxStripDay .wxHigh,.wxGraphDays{font-family:var(--font-tile);font-size:var(--t-tile-detail);font-weight:var(--w-regular);line-height:var(--lh-tile-detail);letter-spacing:0}.wxStripDay .wxLow{font-family:var(--font-tile);font-size:var(--t-tile-title);font-weight:var(--w-semibold);line-height:var(--lh-tile-title);color:var(--muted)}.wxBackdrop{z-index:170}.wxDialogCard{width:min(860px,100%);display:grid;gap:var(--inset)}.wxDialogHead{display:flex;align-items:center;justify-content:space-between;gap:var(--inset);padding-left:var(--inset)}.wxDialogHead .activityTitle{margin:0}.wxDialogClose{background:transparent}.wxGraph{display:grid;gap:8px;touch-action:pan-y;cursor:ew-resize;border-radius:var(--r-tile);user-select:none;-webkit-user-select:none}.wxGraph:focus{outline:none}.wxGraph:focus-visible{outline:2px solid var(--color-border-focus);outline-offset:4px}.wxGraphDays{display:grid;grid-template-columns:repeat(6,minmax(0,1fr));text-align:center;color:var(--muted)}.wxGraphSky{position:relative;height:200px;border-radius:var(--r-tile);overflow:hidden;background:var(--tile)}.wxGraphSky>canvas{display:block;width:100%;height:100%;image-rendering:pixelated}.wxGraphLine{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;overflow:visible;pointer-events:none}.wxLineLabel{font-family:var(--font-tile);font-size:14px;font-weight:var(--w-semibold);text-anchor:middle;paint-order:stroke;stroke-width:3px;stroke-linejoin:round}@media (max-width:620px){.wxGraphSky{height:160px}.wxDialogNow{flex-wrap:wrap}}.segBtn{transition:background .15s ease,transform .18s cubic-bezier(.34,1.46,.64,1),box-shadow .15s ease,color .15s ease}.segBtn:hover{background:transparent}@media (hover:hover){.segBtn:hover{background:var(--color-state-hover)}}.tabs.rubberTabs .tab.active:hover{background:transparent}.segBtn:active{background:var(--color-state-pressed);transform:scale(.97)}.segBtn:focus-visible{outline:none;box-shadow:inset 0 0 0 2px var(--color-border-focus)}.segBtn:disabled{opacity:.4;cursor:default}.moveActions.seg{background:transparent;transition:background .18s ease}.moveActions.seg:focus-within{background:var(--seg-bg)}@media (hover:hover){.moveActions.seg:hover{background:var(--seg-bg)}}.moveActions .editBtn,.moveActions .editBtn:hover{background:transparent}.moveActions .removeBtn,.moveActions .removeBtn:hover{background:transparent;color:var(--text)}@media (hover:hover){.moveActions .editBtn:hover{background:var(--color-state-hover)}.moveActions .removeBtn:hover{background:var(--danger-fill);color:var(--color-text-on-danger)}}.moveActions .removeBtn:active{background:linear-gradient(var(--color-state-pressed-on-bright),var(--color-state-pressed-on-bright)),var(--danger-fill);color:var(--color-text-on-danger)}.moveActions .removeBtn.holding{background:var(--danger-bg);color:var(--color-text-on-danger)}.moveActions .removeFill{background:var(--danger-fill)}.activityIcon{color:var(--muted)}.activityRowIcon,.timeIcon,.nextIcon,.upcomingIcon{color:var(--text)}.wxTempBlock{padding-top:6px}.motionRangeWrap input[type=range]{accent-color:var(--bright);background:transparent}', Vp = `#app{--hc-on-accent:#f4f3f3;--hc-open-edge:rgba(255,255,255,.1);--hc-hair:inset 0 0 0 .2px var(--line),inset 0 -.2px 0 var(--line);--hc-hair-all:inset 0 0 0 .4px var(--line)}#app.light{--hc-open-edge:#e3e3e3}#homeView .card{padding:var(--inset);border-radius:var(--r-card);box-shadow:var(--hc-hair)}#homeView .card:has(>.activityHeader){padding-top:14px;box-shadow:var(--hc-hair-all)}#homeView .activityCard{min-height:0}#homeView .activityHeader{height:28px;padding:0 18px;gap:22px;margin-bottom:10px}#homeView .activityHeader .activityIcon{display:none}:is(#homeView,.tfMoreBackdrop,.tfEditTray,.tfMiniPhone) .activityTitle{font:500 18px/1.2 var(--font-tile);font-style:normal;letter-spacing:-.01em;text-box:none}#homeView .card .activityRows{gap:0}#homeView .card .jointRows{padding:0;background:transparent}#homeView .card .activityRow{min-height:var(--tile-min);padding:var(--inset);gap:12px;border-radius:var(--r-tile);grid-template-columns:var(--chip-size) minmax(0,1fr);background:transparent}#homeView .activityRowIcon{width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);background:var(--primary);color:var(--hc-on-accent)}#homeView .activityRowName{font:600 14px/20px var(--font-tile)}#homeView .activityRowMeta{font:400 16px/1.15 var(--font);margin:0}#homeView .card .activityRow.tap{cursor:pointer}#homeView .card .activityRow:is(.tap,:has(.tfName)),#homeView .tfATile{transition:background .15s ease,box-shadow .15s ease}#homeView .card .activityRow:is(.tap,:has(.tfName)):hover,#homeView .tfATile:hover{background:var(--tile);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line)}#homeView .weatherCard{padding:20px}#homeView .wxWide{gap:16px}#homeView .wxIcon.large{border-radius:28px}#homeView .wxCondition{display:flex;flex-direction:column;justify-content:space-between;gap:10px;padding:10px 16px;border-radius:28px}#homeView .wxCondName{font:400 18px/1.2 var(--font)}#homeView .weatherCard .activityRow .wxIcon{width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner)}@media (max-width:620px){#homeView .weatherCard{padding:var(--inset)}#homeView .wxIcon.large{width:60px;height:60px;border-radius:20px}#homeView .wxDeg{font-size:46px}#homeView .wxRange{font-size:20px}}.tfLabel{grid-column:1/-1}.tfCard{grid-column:span 6;align-self:start;display:flex;flex-direction:column}.tfIcon{display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);flex:none;--mdc-icon-size:var(--glyph-size)}#app.house{--hc-icon:#3a3a3a;--hc-icon-ink:var(--text)}#app.house.light{--hc-icon:#e6e6e6}#app.house #homeView .activityRowIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}@media (max-width:620px){#app.house{--grid-gap:16px}#app.house .settingsTitle{font-size:32px}#app.house .tfAreaHead .back{margin-block:calc((32px * .92 - 40px) / 2)}#app.house .tfAreaHead .back svg{width:24px;height:24px}}@container wb-bento (width < 652px){#app.house .wbBento{gap:var(--grid-gap)}#app.house .wbItem[data-size=tile]{width:calc((100% - var(--grid-gap)) / 2)}}#app.house #homeView{overflow-anchor:none}:is(.tfCard .activityRow,.tfOpenHead) .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfCard .activityRow{display:grid;align-items:center}#homeView section.tfCard.open:has(>.activityHeader){padding:var(--inset)}.tfCard.open>.activityHeader{display:none}.tfOpen{flex:1;display:flex;flex-direction:column;gap:10px;padding:var(--inset);border-radius:28px;background:var(--tile);box-shadow:inset 0 0 0 .4px var(--hc-open-edge)}.tfOpenHead{display:flex;align-items:center;gap:12px}.tfOpenHead>div:nth-child(2){flex:1;min-width:0}.tfBack{display:grid;place-items:center;width:34px;height:34px;padding:0;border:0;background:transparent;color:var(--text);cursor:pointer}.tfBack .icon{width:34px;height:34px}.tfGraph{display:block;width:100%;flex:1;min-height:80px}.tfGraph text{fill:var(--muted);font:400 11px var(--font)}.tfAction{display:flex;flex-direction:column;gap:14px;padding:18px;border-radius:28px;background:var(--card);box-shadow:var(--hc-hair)}.tfActionHead{display:flex;align-items:center;gap:12px;min-width:0}.tfAction>.tfActionHead{margin-bottom:auto}.tfActionHead>:is(div,.tfName){min-width:0}.tfAction .tfIcon{border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer}.tfAction.on[data-light] .tfIcon{background:var(--light-soft);color:var(--light-ink)}.tfBar{position:relative;height:46px;border-radius:16px;background:var(--tile);overflow:hidden;cursor:pointer;touch-action:pan-y;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none}:is(.tfBar,.tfTilt).held{outline:2px solid var(--primary);outline-offset:-2px}.tfBar i{position:absolute;inset:0 auto 0 0;background:linear-gradient(90deg,#ffc247,#fa0)}.tfBar .was{position:absolute;top:12px;bottom:12px;width:2px;margin-left:-1px;border-radius:1px;background:var(--text);opacity:.22}.tfBar:focus-visible{outline:2px solid var(--primary);outline-offset:2px}.tfBlock{grid-column:span 6;align-self:start;display:grid;align-content:start;min-width:0;container-type:inline-size}.tfActions{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:10px}.tfAction{grid-column:span 2}@container (max-width:289px){.tfActions{grid-template-columns:1fr}.tfAction{grid-column:auto}}.tfBar:after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;box-shadow:var(--hc-hair-all);pointer-events:none}.tfAction :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#app.house .moveSection{display:none}#app.house #settingsView :is(.rubberTabs:not(.houseTabs),.settingsPane:not(#housePane)){display:none}#app.house #housePane{display:block}#housePane .houseTab{display:none}#housePane .houseTab.active{display:block}#housePane .toggleRow:has(>.switch){flex-direction:row-reverse;justify-content:flex-end}#housePane .toggleRow:has(>.switch)>div:first-child{flex:1}#housePane .toggleRow:has(>.themeChoice,>.settingsSelect){flex-direction:column;align-items:stretch;gap:12px}#housePane .toggleRow>.settingsSelect{width:100%}#housePane .themeChoice[hidden]{display:none}#housePane .houseTab>.card:has(>.tfSetGroup){gap:24px}#housePane .tfSetGroup{display:grid;gap:8px}#housePane .tfSetGroup>.sectionLabel{margin:0 16px}#housePane{container:housepane/inline-size}#housePane .tfLightCards{display:none}@container housepane (width < 720px){#housePane .houseTab .metaTableWrap{display:none}#housePane .tfLightCards{display:grid;gap:8px}}#housePane .wxLayoutBtn:disabled{opacity:.4;cursor:default}.tfTableNote{margin:0 0 12px;padding:10px 14px;border-radius:var(--r-inner);background:color-mix(in srgb,var(--primary) 14%,transparent);color:var(--text)}.tfLightTable td{white-space:nowrap}.tfLightTable td strong{font:600 14px/20px var(--font-tile)}.tfLightTable .settingsSelect{min-width:150px}.tfLightTable .settingsSelect:disabled{opacity:.4}.tfDacPad{min-width:0}.tfDacPad>dual-controller-v3{display:block}#app.house #homeView .grid>:is(#movementLabel,.activityCard,.insightCard,.feelSection){display:none}#app.house .checkinTab,#app.houseBento #weatherCard{display:none}.tfBento{grid-column:1/-1;min-width:0}.tfIcon.art{background-size:cover;background-position:center}.tfBar.ct{background:linear-gradient(90deg,#ff9e45,#ffd3a3 32%,#fff7ee 55%,#d7e7ff)}.tfBar.hue{background:linear-gradient(90deg,red,#ff0 17%,#0f0 33%,#0ff,#00f 67%,#f0f 83%,red)}.tfBar b{position:absolute;top:8px;bottom:8px;width:4px;margin-left:-2px;border-radius:2px;background:#fff;box-shadow:0 0 0 .5px #0006,0 1px 3px #00000040}.tfAction:not(.on) .tfBar:is(.ct,.hue){opacity:.45}.tfBar:is(.pos,.vol) i{background:var(--primary)}:is(.tfStep,.tfSeg,.tfBlocks,.tfTilt,.tfChips){font-family:var(--font-tile)}.tfStep{display:flex;align-items:center;height:46px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all)}.tfStep button{flex:0 1 46px;min-width:32px;height:46px;min-height:0;padding:0;border:0;border-radius:16px;background:transparent;color:var(--text);cursor:pointer}.tfStep svg{display:block;width:22px;height:22px;margin:auto;fill:currentColor}.tfStep output{flex:1 0 auto;white-space:nowrap;text-align:center;font:500 20px/1.2 var(--font-tile);font-variant-numeric:tabular-nums}.tfSeg{display:flex;gap:4px;height:46px;padding:4px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all)}.tfSeg button{flex:1;min-width:0;min-height:0;padding:0 6px;border:0;border-radius:12px;background:transparent;color:var(--muted);font:600 14px/20px var(--font-tile);cursor:pointer;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfSeg button[aria-pressed=true]{background:var(--bright);color:var(--on-bright)}.tfSeg button:not([aria-pressed]){color:var(--text)}.tfSeg button:disabled{opacity:.4;cursor:default}.tfSeg svg{display:block;width:22px;height:22px;margin:auto;fill:currentColor}#housePane .themeChoice,.tfBoardMenu .tfHeightTabs,.wb .wbSegments{gap:4px;padding:4px;border:0;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all)}#housePane .themeChoice{display:flex;flex-wrap:nowrap;width:100%}#housePane .themeChoice>button{flex:1 1 0;overflow:hidden;text-overflow:ellipsis}:is(#housePane .themeChoice :is(.wxLayoutBtn,.themeBtn),.tfBoardMenu .tfHeightTabs button,.wb .wbSegments button){height:38px;min-width:0;min-height:0;padding:0 12px;border:0;border-radius:12px!important;background:transparent;color:var(--muted);font:600 14px/20px var(--font-tile)!important;white-space:nowrap;cursor:pointer}:is(#housePane .themeChoice :is(.wxLayoutBtn,.themeBtn),.tfBoardMenu .tfHeightTabs button,.wb .wbSegments button):hover:not(:disabled):not([aria-pressed=true]):not([aria-checked=true]):not(.active){background:transparent;color:var(--text)}:is(#housePane .themeChoice :is(.wxLayoutBtn[aria-pressed=true],.themeBtn.active),.tfBoardMenu .tfHeightTabs button[aria-checked=true],.wb .wbSegments button[aria-pressed=true]){background:var(--bright);color:var(--on-bright)}.tfChips{display:flex;flex-wrap:wrap;gap:8px}.tfChips button{height:40px;min-height:0;padding:0 14px;border:0;border-radius:16px;background:var(--tile);color:var(--text);font:600 14px/20px var(--font-tile);cursor:pointer;box-shadow:var(--hc-hair-all)}.tfChips button[aria-pressed=true]{background:var(--bright);color:var(--on-bright)}.tfCard .tfPlug .tfIcon{border:0;padding:0;cursor:pointer}.tfCardGraph{height:120px;padding:0 var(--inset)}.tfCardGraph .tfGraph{height:100%}.tfAction.on[data-tone=alarm] .tfIcon{background:#e53935;color:#fff}.tfName{flex:1;display:block;min-width:0;min-height:0;padding:0;border:0;border-radius:0;background:none;color:inherit;font:inherit;text-align:left;cursor:pointer}.tfName>span{display:block}.tfTitleBtn{min-height:0;padding:0;border:0;border-radius:0;background:none;color:inherit;text-align:left;cursor:pointer}.tfAreas{grid-column:1/-1;min-width:0}.tfAreaPanel .workoutPanelTop>div{min-width:0}.tfATags{display:flex;flex-wrap:wrap;justify-content:flex-end;gap:4px;margin-left:auto;min-width:0}.tfATags .sourceTag{display:block;margin:0;max-width:100%;padding:6px 12px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfBlocks{position:relative;display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:4px;height:46px;padding:4px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all);cursor:pointer;touch-action:none;-webkit-user-select:none;user-select:none;container:blocks/inline-size}.tfBlocks>span{position:relative;display:grid;place-items:center;overflow:hidden;border-radius:4px;transition:background .12s}.tfBlocks>span:first-child{border-radius:12px 4px 4px 12px}.tfBlocks>span:nth-child(4){border-radius:4px 12px 12px 4px}.tfBlocks:not(.fine)>span:hover{background:color-mix(in srgb,var(--text) 7%,transparent)}.tfBlocks i{position:absolute;inset:0 auto 0 0;border-radius:inherit;background:var(--primary)}.tfBlocks b{position:relative;color:var(--text);font:600 14px/1 var(--font-tile);transition:opacity .15s}.tfBlocks b small{font:inherit}@container blocks (width < 164px){.tfBlocks b small{display:none}}.tfBlocks b.lit{color:#fff}.tfBlocks.fine b{opacity:0}.tfTip{position:absolute;bottom:calc(100% + 8px);z-index:2;transform:translate(-50%);padding:3px 8px;border-radius:7px;background:var(--text);color:var(--card);font:700 12px/16px var(--font-tile);white-space:nowrap;pointer-events:none;opacity:0;transition:opacity .12s}.tfBlocks.fine .tfTip{opacity:1}.tfTilt{position:relative;display:flex;align-items:center;justify-content:space-between;height:46px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all);cursor:pointer;touch-action:pan-y;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none}.tfTilt i{position:absolute;top:4px;bottom:4px;left:4px;border-radius:12px;background:var(--primary)}.tfTilt span{position:relative;padding:0 16px;color:var(--text);font:600 14px/1 var(--font-tile)}.tfTilt span.lit{color:#fff}:is(.tfBlocks,.tfTilt):focus-visible{outline:2px solid var(--primary);outline-offset:2px}.tfCoverBtns svg{fill:none}.tfCoverArt{align-self:center;width:min(294px,100%,max(150px,100vh - 520px));aspect-ratio:1;border-radius:24px;touch-action:none;-webkit-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent}.tfCoverArt.x{cursor:ew-resize}.tfCoverArt.y{cursor:ns-resize}.tfCoverArt:focus-visible{outline:none;box-shadow:0 0 0 3px var(--primary)}.tfCoverArt svg{display:block;width:100%;height:100%}.tfSide{grid-column:1/-1;align-self:start;min-width:0}.tfSideLabel{display:flex;align-items:baseline;justify-content:space-between;gap:16px;margin-right:22.4px}#homeView .tfSide.tfSums .card .activityRows{grid-template-columns:repeat(auto-fill,minmax(min(150px,calc(50% - 10px)),1fr))}#homeView .tfSide.tfFavs .card .activityRows{grid-template-columns:repeat(auto-fill,minmax(min(240px,calc(50% - 10px)),1fr))}#homeView .tfSum .tfIcon{background:var(--sum,var(--hc-icon));color:var(--sum-ink,var(--hc-icon-ink))}#app.house .tfSum{--sum-ink:var(--sum-d,var(--hc-icon-ink))}#app.house.light .tfSum{--sum-ink:var(--sum-l,var(--hc-icon-ink))}#app.house .tfSum[data-summary=climate]{--g0:var(--g0-d);--g1:var(--g1-d);--g2:var(--g2-d)}#app.house.light .tfSum[data-summary=climate]{--g0:var(--g0-l);--g1:var(--g1-l);--g2:var(--g2-l)}#app.house .tfSum[data-summary=climate] .tfIcon svg path{fill:url(#hcClimateGrad)}.tfGradDefs{position:absolute;width:0;height:0;overflow:hidden;pointer-events:none}.tfSide :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfSide .activityRow>div{min-width:0}:is(.tfCard,.tfMoreList,.tfMoreActions) .tfPlug.on[data-light] .tfIcon{background:var(--light-soft);color:var(--light-ink)}:is(.tfCard,.tfMoreList,.tfMoreActions) .tfPlug.on[data-tone=alarm] .tfIcon{background:#e53935;color:#fff}.tfMoreList{display:flex;flex-direction:column;gap:14px}.tfMoreGroupName{margin:0 0 4px 10px;color:var(--muted);font:500 13px/18px var(--font)}.tfMoreTiles{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}.tfMoreTiles.single{grid-template-columns:1fr}.tfMoreList .activityRow{display:grid;grid-template-columns:var(--chip-size) minmax(0,1fr);align-items:center;gap:12px;min-height:var(--tile-min);padding:var(--inset);border-radius:var(--r-tile);transition:background .15s ease}.tfMoreList .activityRow:hover{background:var(--tile)}.tfMoreList .activityRow .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfMoreList .tfPlug .tfIcon{border:0;padding:0;cursor:pointer}.tfMoreList .tfPick{grid-template-columns:var(--chip-size) minmax(0,1fr) auto}.tfMoreList :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfStar{display:grid;place-items:center;width:34px;height:34px;min-height:0;padding:0;border:0;background:none;color:var(--muted);cursor:pointer}.tfStar[aria-pressed=true]{color:#fa0}.tfStar svg{width:24px;height:24px}.tfMoreHead .activityTitle{flex:1;min-width:0}.tfMoreBackdrop{position:fixed;top:0;right:0;bottom:0;left:0;z-index:180;display:grid;place-items:center;padding:16px;background:#00000073}.tfMoreBackdrop,.tfMore,.tfMoreSideInner,.tfMoreSideBody{overscroll-behavior:contain}.tfMoreBackdrop[hidden]{display:none}.tfMore{flex:none;width:440px;max-width:100%;min-height:0;overflow:auto;display:flex;flex-direction:column;gap:14px;padding:20px;border-radius:var(--r-card);background:var(--card);box-shadow:var(--hc-hair-all)}.tfMoreHead{display:flex;align-items:center;justify-content:space-between;gap:12px;min-height:34px}.tfMoreState{font:500 28px/1.15 var(--font-tile);letter-spacing:-.01em}.tfMoreSub{margin-top:3px;color:var(--muted);font:500 13px/18px var(--font)}.tfMoreState.live{color:var(--primary)}.tfMoreRows{display:flex;flex-direction:column}.tfMoreRow{display:flex;justify-content:space-between;gap:16px;padding:10px 0;box-shadow:inset 0 -.4px 0 var(--line);font:400 14px/20px var(--font)}.tfMoreRow span:first-child{color:var(--muted)}.tfMoreNote{color:var(--muted);font:400 12px/16px var(--font)}@media (max-width:620px){.tfMoreBackdrop{place-items:end stretch;padding:0}.tfMorePair{width:100%;max-height:85vh}.tfMore{width:100%;border-radius:var(--r-card) var(--r-card) 0 0}}@media (max-width:1199px) and (min-width:901px){.tfCard{grid-column:span 6}.tfBlock{grid-column:span 12}}@media (max-width:900px){.tfCard,.tfBlock{grid-column:auto}}#app.showDensity #homeView :is(.card,.tfAction){position:relative;outline:1px dashed color-mix(in srgb,var(--primary) 70%,transparent);outline-offset:-1px}#app.showDensity #homeView :is(.card,.tfAction):after{content:attr(data-h);position:absolute;top:6px;right:12px;z-index:5;padding:2px 8px;border-radius:99px;background:var(--primary);color:#fff;font:600 11px/16px var(--font);pointer-events:none}.densityBadge{position:fixed;left:50%;bottom:calc(16px + env(safe-area-inset-bottom,0px));z-index:80;transform:translate(-50%);display:flex;align-items:center;gap:10px;padding:8px 16px;border-radius:99px;background:var(--bright);color:var(--on-bright);font:600 13px/18px var(--font);box-shadow:0 6px 20px #00000040;pointer-events:none;white-space:nowrap}.densityBadge[hidden]{display:none}.densityBadge b{font-variant-numeric:tabular-nums}.densityBadge small{font-weight:400;opacity:.75}#homeView .card:is(.activityCard,.insightCard,.tfCard,.weatherCard){container-type:inline-size}#homeView .card:is(.activityCard,.insightCard,.tfCard,.weatherCard) .activityRows{grid-template-columns:repeat(2,minmax(0,1fr));gap:0}@container (max-width:279px){#homeView .card .activityRows{grid-template-columns:1fr}}@media (min-width:1200px){#homeView .grid>.card:is(.activityCard,.insightCard){grid-column:span 6}#homeView .grid>.weatherCard{grid-column:span 6}}.tfMorePair{position:relative;display:flex;align-items:stretch;max-width:100%;max-height:calc(100vh - 32px);max-height:calc(100dvh - 32px)}#app[data-more=sheet] .tfMoreBackdrop{place-items:end center;padding:0}#app[data-more=sheet] .tfMorePair{max-height:85vh;animation:tfSheetIn .28s cubic-bezier(.2,.7,.3,1)}#app[data-more=sheet] .tfMorePair.still{animation:none}#app[data-more=sheet] .tfMore{width:min(640px,100vw)}#app[data-more=sheet] :is(.tfMore,.tfMoreSideInner){border-radius:var(--r-card) var(--r-card) 0 0}@keyframes tfSheetIn{0%{transform:translateY(100%)}}.tfDetailsBtn{display:flex;flex:none;align-items:center;justify-content:space-between;gap:12px;width:100%;height:46px;min-height:0;padding:0 12px 0 16px;border:0;border-radius:16px;background:var(--tile);color:var(--text);font:600 14px/20px var(--font-tile);cursor:pointer}.tfDetailsBtn svg{width:20px;height:20px;transition:transform .2s ease}.tfDetailsBtn[aria-expanded=true] svg{transform:rotate(180deg)}.tfMoreSide{position:absolute;top:0;bottom:0;left:100%;width:0;overflow:hidden;visibility:hidden;transition:width .28s cubic-bezier(.2,.7,.3,1),visibility 0s linear .28s}.tfMorePair.details .tfMoreSide{width:312px;visibility:visible;transition:width .28s cubic-bezier(.2,.7,.3,1)}.tfMoreSideInner{box-sizing:border-box;display:flex;flex-direction:column;gap:14px;width:300px;height:100%;margin-left:12px;padding:20px;overflow:auto;border-radius:var(--r-card);background:var(--card);box-shadow:var(--hc-hair-all)}.tfMoreSideInner .tfMoreHead{justify-content:flex-start}.tfMorePair.over .tfMoreSide{position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;width:auto;transform:translate(24px);opacity:0;transition:transform .25s cubic-bezier(.2,.7,.3,1),opacity .2s ease,visibility 0s linear .25s}.tfMorePair.over.details .tfMoreSide{width:auto;transform:none;opacity:1;transition:transform .25s cubic-bezier(.2,.7,.3,1),opacity .2s ease}.tfMorePair.over .tfMoreSideInner{width:100%;margin:0}@media (max-width:620px){.tfMoreSideInner{border-radius:var(--r-card) var(--r-card) 0 0}}@media (prefers-reduced-motion:reduce){.tfMorePair,.tfMoreSide{animation:none!important;transition:none!important}}#homeView .workoutPanel.tfAreaPanel{padding:18px 20px 10px}.tfAreaPanel .tfATiles{margin-inline:-10px}.tfAreaPanel .workoutPanelTop{justify-content:flex-start;gap:14px;padding:0}.tfAreaPanel .panelExpanded{justify-content:flex-start;gap:16px}.tfAreaPanel .icon{width:22px;height:22px}.tfATitle{display:flex;flex-direction:column;align-items:flex-start;min-width:0}#app .tfAName{max-width:100%;min-height:0;padding:0;border:0;border-radius:6px;background:none;color:var(--text);font:700 24px/1.2 var(--font-tile);letter-spacing:-.01em;text-align:start;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;cursor:pointer}.tfAreaIcon{flex:none;border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);--mdc-icon-size:22px}button.tfAreaIcon{cursor:pointer}.tfAreaGlyph{display:grid;place-items:center}.tfAreaHead{grid-column:1/-1;margin-bottom:0}#app.tfAreaOpen:not(.tfWeatherOpen) #homeView .grid>.tfBento{display:none}#app.tfWeatherOpen #homeView .grid>.tfBento .wbBento{margin:0;padding:0;justify-content:flex-start}#app.tfWeatherOpen .tfBento.tfPegs .wbBento{display:grid;grid-template-columns:repeat(var(--peg-n),var(--peg-w));grid-auto-rows:60px;grid-auto-flow:row dense;align-items:stretch;gap:16px;max-width:none}#app.tfWeatherOpen .tfBento.tfPegs .wbItem{width:auto;min-height:0;align-self:stretch;display:flex;flex-direction:column}#app.tfWeatherOpen .tfBento.tfPegs .wbItem>*{flex:1;min-height:0}#app.tfWeatherOpen .tfBento.tfPegs .wbItem[data-size=wide]{grid-column:span 2;grid-row:span 5}#app.tfWeatherOpen .tfBento.tfPegs .wbItem[data-size=double]{grid-column:span 2;grid-row:span 4}#app.tfWeatherOpen .tfBento.tfPegs .wbItem[data-size=tile]{grid-column:span 1;grid-row:span 4}#app.tfWeatherOpen .tfBento.tfPegs .wbCard.wbSquare{aspect-ratio:auto}#app.tfWeatherOpen .tfBento.tfPegs .wbWeather .wbNow{margin-bottom:auto}#app.tfWeatherOpen .tfBento.tfPegs :is(.wbStripScroll,.wbBars .wbDayBars,.wbBars.wbTabbed .wbDayBars){min-height:0}.tfABig{display:flex;flex-direction:column;align-items:flex-start;gap:4px;margin-top:auto;min-height:0;height:auto;padding:0;border:0;border-radius:8px;background:none;color:var(--text);text-align:start;cursor:pointer}.tfABigMain{font:500 64px/1 var(--font-tile);letter-spacing:-.03em;white-space:nowrap}.tfABigMain.long{font-size:40px}.tfABigUnit{margin-inline-start:6px;font-size:24px;letter-spacing:0}.tfABigSub{max-width:100%;overflow:hidden;color:var(--muted);font:400 16px/1.2 var(--font);white-space:nowrap;text-overflow:ellipsis}.tfATiles{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));min-height:calc(2 * var(--tile-min));align-content:end}.tfABig{max-width:100%}.panelExpanded:not(:has(.tfATiles)) .tfABig{margin-bottom:calc(2 * var(--tile-min) + 16px)}#app.tfBoard .tfAreas[data-rows="5"] .tfACMain{position:absolute;left:10px;right:10px;bottom:170.3px;max-width:none;text-align:center}#app.tfBoard .tfAreas[data-rows="4"] .tfACMain{position:absolute;left:10px;right:10px;bottom:164.1px;max-width:none;text-align:center}#app.tfBoard .tfAreas[data-rows="4"] .panelExpanded:not(:has(.tfATiles)) .tfABig{margin-bottom:calc(2 * var(--tile-min) + 12px)}.tfATile{display:grid;grid-template-columns:var(--chip-size) minmax(0,1fr);align-items:center;gap:12px;min-height:var(--tile-min);padding:var(--inset);border-radius:var(--r-tile)}.tfATile>:is(div,.tfName):last-child{min-width:0}.tfATile .tfIcon{border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer}.tfATile.on[data-light] .tfIcon{background:var(--light-soft);color:var(--light-ink)}.tfATile :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfACollapsed{flex-direction:column;justify-content:space-between;padding:18px 0 10px;container-type:inline-size}.tfACTop{display:flex;flex-direction:column;align-items:center;gap:6px;max-width:calc(100% - 20px)}.tfACMain{max-width:calc(100% - 20px);font:200 32px/1.2 var(--font-tile);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfACName{max-width:100%;font:600 16px/17.5px var(--font);letter-spacing:-.1px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfACTiles{display:grid;grid-template-columns:repeat(2,60px);min-height:60px}.tfACTiles:has(>:nth-child(3)){margin-top:-60px}.tfACTile{display:grid;place-items:center;width:60px;height:60px}.tfACTile .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfACTile .tfIcon[data-light]{background:var(--light-soft);color:var(--light-ink)}.tfACTile .tfIcon.alert{background:#e53935;color:#fff}@container (max-width:119px){.tfACTiles{grid-template-columns:60px}.tfACTile:nth-child(n+3){display:none}.tfACTiles:has(>:nth-child(2)){margin-top:-60px}}.tfMore.wide{width:min(1040px,100vw - 32px);padding:40px;gap:28px;background:var(--bg)}#app[data-more=sheet] .tfMore.wide{width:min(1040px,100vw)}.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreSideInner{gap:28px;padding:40px;background:var(--bg)}#app :is(.tfMore.wide>.tfMoreHead,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreHead){margin:-20px -20px 0 0}#app :is(.tfMore.wide>.tfMoreHead,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreHead) .activityTitle{font-size:24px}@media (max-width:620px){#app :is(.tfMore.wide>.tfMoreHead,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreHead){margin:0}}@media (min-width:621px){#app:not([data-more=sheet]) .tfMoreBackdrop.wide{place-items:start center}}.tfMoreNowRow{display:flex;align-items:center;justify-content:space-between;gap:16px}.tfMore.wide .tfMoreGroup{display:flex;flex-direction:column;gap:14px}.tfMore.wide .tfMoreGroupName{margin:0;color:var(--text);font:400 18px/1.2 var(--font);letter-spacing:-.01em}.tfMoreActions{display:grid;grid-template-columns:repeat(auto-fill,minmax(min(260px,100%),1fr));gap:20px}.tfMoreActions .tfAction{grid-column:auto}.tfMoreActions>.activityRow{display:grid;grid-auto-flow:column;grid-template-columns:auto minmax(0,1fr);align-items:center;align-content:start;gap:12px;min-width:0;padding:18px;border-radius:28px;background:var(--card);box-shadow:var(--hc-hair)}.tfMoreActions>.activityRow .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfMoreActions>.tfPlug .tfIcon{border:0;padding:0;cursor:pointer}.tfMoreActions>.activityRow :is(.activityRowName,.activityRowMeta){display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfMoreActions>.activityRow.alert .activityRowMeta{color:var(--danger)}@media (max-width:620px){.tfMore.wide,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreSideInner{width:100%;padding:20px 16px;gap:20px}}#app.tfDash #homeView{max-width:none;container:tfdash/inline-size}#app.tfDash #homeView .grid{display:flex;flex-wrap:wrap;align-items:flex-start;align-content:flex-start}#app.tfDash .tfDashTitle{order:1!important;flex:0 0 100%;margin:0}#app.tfDash .tfDashBarRow{order:2!important;flex:0 0 100%;display:flex;min-width:0}#app.tfDash .tfDash-wx{order:var(--o,3)!important}#app.tfDash .tfAreas{order:var(--o,4)!important}#app.tfDash .tfDash-favs{order:var(--o,5)!important}#app.tfDash .tfDash-act{order:var(--o,6)!important}#app.tfDash .tfDash-energy{order:var(--o,7)!important}#app.tfDash .tfDash-avg{order:var(--o,8)!important}#app.tfDash :is(.tfDash-aq,.tfDash-pollen,.tfDash-radar){order:var(--o,8)!important}#app.tfDash .tfDashTiles>*{order:var(--o,9)}#app.tfDash :is(.tfDash-wx,.tfDash-favs,.tfDash-act,.tfDash-energy,.tfDash-avg){flex:1 1 460px;max-width:520px;min-width:0}@container tfdash (width < 640px){#app.tfDash :is(.tfDash-wx,.tfDash-favs,.tfDash-act,.tfDash-energy,.tfDash-avg){flex-basis:100%;max-width:none}}#app .tfNotAdded{display:none!important}#app.tfDash .tfAreas{flex:none;width:min(var(--areas-w,1131px),100%)}@media (min-width:901px){#app.tfDash .tfAreaGallery{overflow-x:auto;scrollbar-width:none}#app.tfDash .tfAreaGallery::-webkit-scrollbar{display:none}#app.tfDash .tfAreaPanel.active{flex:1 0 409px}#app.tfDash .tfAreaPanel:not(.active){flex:0 0 128px}}#app.tfDash .tfDash-bar{flex:none;max-width:100%}#app.tfDash #homeView .card.tfDash-bar{container-type:normal}#homeView .card.tfDash-bar .activityRows{display:grid;grid-template-columns:repeat(var(--bar-cols,6),auto)}#homeView .card.tfDash-bar .activityRow{min-width:200px}#app.tfDash .tfDash-bar :is(.activityRowName,.activityRowMeta){overflow:visible;text-overflow:clip}@container tfdash (width < 640px){#app.tfDash .tfDash-bar{width:100%}#homeView .card.tfDash-bar .activityRows{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}#homeView .card.tfDash-bar .activityRow{min-width:0}#app.tfDash .tfDash-bar :is(.activityRowName,.activityRowMeta){overflow:hidden;text-overflow:ellipsis}#app.tfDash .tfDashTitle{padding:0 16px;box-sizing:border-box}}#app.tfDash .tfDashCard:not(.tfDash-bar){container-type:inline-size}#homeView .card.tfDash-act .activityRows{grid-template-columns:minmax(0,1fr)}#homeView .card.tfDash-act>.activityRows{flex:none;margin-top:auto;max-height:300px;overflow-y:auto;overscroll-behavior:contain;scroll-snap-type:y mandatory;scroll-behavior:smooth;scrollbar-width:thin;scrollbar-color:color-mix(in srgb,var(--text) 25%,transparent) transparent}#homeView .card.tfDash-act>.activityRows>.activityRow{scroll-snap-align:start}#homeView .card.tfDash-energy .activityRows{grid-template-columns:repeat(auto-fit,minmax(140px,1fr))}.tfDashCard :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfDashCard .activityRow>*{min-width:0}.tfDashNone{margin:0;padding:var(--inset) 18px;color:var(--muted)}.tfDashBento{display:flex;flex-direction:column;min-width:0}#app:not(.tfDash) .tfDashBento{display:none}.tfDashBento:not(:has(.wbItem:not([hidden]))){display:none}.tfDashBento .wb{flex:1;display:flex;flex-direction:column;min-width:0}.tfDashBento .wbBento{flex:1;max-width:none;margin:0;padding:0;display:flex;align-items:stretch}#app .tfDashBento .wbItem{width:100%;align-self:stretch;display:flex;flex-direction:column}#app.house .tfDashBento .wbItem[data-size]{width:100%}#app .tfDashBento .wbItem>.wbCard{flex:1;min-height:0}.tfDash-wx .wbCondition{display:none}#app.tfDash .tfDashTiles{display:contents}.tfDashTiles>:is(.tfAction,.tfDac){flex:none;align-self:stretch;width:calc((100% - var(--grid-gap,8px)) / 2);min-width:0;grid-column:auto}#app.tfBoard #homeView .grid{display:block;position:relative}#app.tfBoard .tfBoardItem{position:absolute;z-index:1;margin:0;max-width:none;min-height:0;box-sizing:border-box}#app.tfEditing.tfBoardReady .tfBoardItem{transition:left .25s cubic-bezier(.2,.7,.3,1),top .25s cubic-bezier(.2,.7,.3,1),height .25s cubic-bezier(.2,.7,.3,1)}#app.tfBoard .tfBoardHidden{display:none!important}#app.tfBoard .tfDashBento .wbWeather .wbNow{margin-bottom:auto}#app.tfBoard .tfDashBento .wbCard.wbSquare{aspect-ratio:auto}#app.tfBoard .tfAreas .workoutGallery,#app.tfBoard .tfAreas .workoutPanel{height:100%;min-height:0}.tfBoardCells{position:absolute;top:0;left:0;z-index:0;display:grid;grid-auto-rows:60px;gap:16px;pointer-events:none}.tfBoardCells i{border-radius:var(--r-inner);background:color-mix(in srgb,var(--text) 7%,transparent)}#app.tfEditing .tfBoardItem:not(.tfDashTitle,.tfDashBarRow,.tfDashBento){outline:1.5px solid var(--primary);outline-offset:-1.5px;border-radius:var(--r-card)}#app.tfEditing .tfBoardItem:is(.tfAction,.tfDac){border-radius:28px}#app.tfEditing .tfAreas{border-radius:24px}#app.tfEditing .tfDashBento .wbCard{outline:1.5px solid var(--primary);outline-offset:-1.5px}#app.tfEditing .tfBoardItem:not(.tfDashTitle,.tfDashBarRow){cursor:grab;overflow:visible;-webkit-user-select:none;user-select:none;touch-action:none}.tfEditChips{position:absolute;inset:-8px -8px auto -8px;z-index:5;height:40px;display:flex;justify-content:flex-end;pointer-events:none}.tfEditGrip{position:absolute;top:-10px;left:50%;display:grid;place-items:center;width:80px;height:40px;border-radius:var(--r-inner);background:var(--text);color:var(--card);transform:translate(-50%);pointer-events:auto;cursor:grab}.tfEditGrip svg{width:24px;height:24px;fill:currentColor}.tfEditChip{display:grid;place-items:center;width:28px;height:28px;min-height:0;padding:0;border:0;border-radius:50%;background:var(--text);color:var(--card);pointer-events:auto;cursor:pointer}.tfEditChip svg{width:18px;height:18px;fill:currentColor}.tfEditChip:focus-visible{outline:2px solid var(--primary);outline-offset:2px}#app.tfEditing .tfBoardItem.tfDragging{z-index:20;transition:none!important;scale:1.02;cursor:grabbing;filter:drop-shadow(0 10px 30px rgba(0,0,0,.35))}.tfBoardLand{position:absolute;z-index:1;box-sizing:border-box;border:1.5px dashed var(--primary);border-radius:28px;background:color-mix(in srgb,var(--primary) 8%,transparent);pointer-events:none;transition:left .2s,top .2s,width .2s,height .2s}.tfBoardMenu{position:absolute;z-index:30;display:grid;gap:2px;min-width:200px;padding:6px;border-radius:var(--r-tile);background:var(--card);box-shadow:var(--hc-hair-all),0 10px 30px #00000059}.tfBoardMenu button{display:flex;align-items:center;min-height:40px;padding:0 12px;border:0;border-radius:var(--r-inner);background:transparent;color:var(--text);font:500 14px/20px var(--font);text-align:start;cursor:pointer}.tfBoardMenu button:hover:not(:disabled),.tfBoardMenu button:focus-visible{background:var(--tile);outline:none}.tfBoardMenu button:disabled{opacity:.4;cursor:default}.tfHeight{display:grid;gap:6px;padding:6px 6px 8px}.tfHeightLabel{padding:0 6px;color:var(--muted);font:500 12px/16px var(--font)}.tfHeightTabs{display:grid;grid-template-columns:repeat(5,1fr)}.tfBoardMenu .tfHeightTabs button{justify-content:center}.tfBoardMenu .tfHeightTabs button:disabled{opacity:.35}.tfWidth{padding-top:0}.tfWidth .tfHeightTabs{grid-template-columns:repeat(3,auto)}.tfBoardMenu .tfWidth .tfHeightTabs button{white-space:nowrap}#app.tfBoard .tfBoardItem:is(.tfDash-favs,.tfDash-act)>.activityRows{grid-auto-rows:var(--fill-row,60px);margin-top:0}#app.tfBoard .tfBoardItem:is(.tfDash-favs,.tfDash-act)>.activityRows>.activityRow{min-height:0;height:var(--fill-row,60px);box-sizing:border-box}#app.tfBoard .tfBoardItem.tfDashCard[data-rows="1"]{padding:0;gap:0}#app.tfBoard .tfBoardItem.tfDashCard[data-rows="1"]>.activityHeader,#app.tfBoard .tfBoardItem.tfDashCard[data-rows="1"]>.tfDashGraph{display:none}#app.tfBoard .tfBoardItem.tfDashCard[data-rows="1"]>.activityRows{margin:0;flex:1}#app.tfBoard .tfBoardItem.tfAction[data-rows="1"]{padding:10px;border-radius:24px}.tfRoomTile{cursor:pointer}.tfRoomTile .tfRoomIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfRoomInline,.tfRoomSub{display:none}.tfRoomReading{display:flex;flex-direction:column;gap:4px;min-width:0}.tfRoomBig{overflow:hidden;color:var(--text);font:500 46px/46px var(--font-tile);letter-spacing:-.92px;white-space:nowrap;text-overflow:ellipsis}.tfRoomSub{overflow:hidden;color:var(--muted);font:400 16px/19px var(--font);white-space:nowrap;text-overflow:ellipsis}.tfRoomDevices{display:flex;gap:12px}.tfRoomDevices .tfIcon{border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer}.tfRoomDevices .tfIcon.on[data-light]{background:var(--light-soft);color:var(--light-ink)}#app.tfBoard .tfRoomTile[data-rows="1"] .tfRoomInline{display:inline}#app.tfBoard .tfRoomTile[data-rows="1"] :is(.tfRoomReading,.tfRoomDevices),#app.tfBoard .tfRoomTile[data-rows="2"] .tfRoomDevices{display:none}#app.tfBoard .tfRoomTile:is([data-rows="4"],[data-rows="5"]) .tfActionHead .activityRowMeta{display:none}#app.tfBoard .tfRoomTile:is([data-rows="4"],[data-rows="5"]) .tfRoomSub{display:block}#app.tfBoard .tfRoomTile[data-rows="4"] .tfRoomBig{font-size:52px;line-height:52px;letter-spacing:-1.92px}#app.tfBoard .tfRoomTile[data-rows="5"] .tfRoomBig{font-size:64px;line-height:64px;letter-spacing:-1.92px}.tfRoomHeads{display:none;gap:12px 16px}.tfRoomDev{display:flex;align-items:center;gap:12px;min-width:0;padding:0;border:0;background:none;color:inherit;font:inherit;text-align:left;cursor:pointer}.tfRoomDev .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfRoomDev .tfIcon.on[data-light]{background:var(--light-soft);color:var(--light-ink)}.tfRoomDevName{display:flex;flex-direction:column;min-width:0}.tfRoomDevName>span{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}#app.tfBoard .tfRoomTile[data-rows="1"]:not([data-cols="1"]){flex-direction:row;align-items:center;gap:12px}#app.tfBoard .tfRoomTile[data-rows="1"]:not([data-cols="1"])>.tfActionHead{flex:1;margin-bottom:0}#app.tfBoard .tfRoomTile[data-rows="1"]:not([data-cols="1"]) .tfRoomDevices{display:flex}#app.tfBoard .tfRoomTile:not([data-cols="1"]):not([data-rows="1"]) .tfRoomDevices{display:none}#app.tfBoard .tfRoomTile:not([data-cols="1"]):not([data-rows="1"]) .tfRoomHeads{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}#app.tfBoard .tfRoomTile:not([data-cols="1"]):not([data-cols="2"]):not([data-rows="1"]) .tfRoomHeads{grid-template-columns:repeat(4,minmax(0,1fr))}#app.tfBoard .tfRoomTile[data-cols="2"][data-rows="2"] .tfRoomDev:nth-child(n+3){display:none}#app.tfBoard .tfRoomTile:not([data-cols="1"]):is([data-rows="2"],[data-cols="2"][data-rows="3"]) .tfRoomInline{display:inline}#app.tfBoard .tfRoomTile:not([data-cols="1"]):is([data-rows="2"],[data-cols="2"][data-rows="3"]) .tfRoomReading{display:none}#app.tfBoard .tfDashBento[data-rows="1"] .wbCard{padding:10px;border-radius:24px}#app.tfBoard .tfDashBento[data-rows="1"] .wbVisual{display:none}#app.tfBoard .tfDash-wx[data-rows="1"] .wbNow{margin:0}#app.tfBoard .tfDash-wx[data-rows="1"] .wbWx.wbS90{width:40px;height:40px;border-radius:12px}#app.tfBoard .tfDashBento[data-rows] :is(.wb,.wbBento,.wbItem){height:100%;min-height:0}#app.tfBoard .tfDashBento[data-rows] .wbCard{height:100%;min-height:0;box-sizing:border-box;aspect-ratio:auto}#app.tfBoard .tfDash-wx[data-rows="1"] .wbDeg{font-size:20px;letter-spacing:0;line-height:22px}#app.tfBoard .tfDash-wx[data-rows="1"] .wbPlace{font-size:13px;line-height:18px}#app.tfBoard .tfDash-wx[data-rows="1"] .wbTempBlock{gap:0}#app.tfBoard .tfDash-wx[data-rows="1"] .wbUnit{font-size:14px;line-height:22px}#app.tfBoard .tfDash-wx[data-rows="2"] .wbWx.wbS90{width:100px;height:100px;border-radius:31px}#app.tfBoard .tfDash-wx[data-rows="2"] .wbDeg{font-size:80px;line-height:80px}#app.tfBoard .tfDash-wx[data-rows="2"] .wbUnit{font-size:30px;line-height:38px}#app.tfBoard .tfDash-wx[data-rows="2"] .wbTempBlock{gap:0}#app.tfBoard .tfDash-wx[data-rows="2"]:not([data-narrow]) .wbWeather{flex-direction:row;align-items:center;gap:16px}#app.tfBoard .tfDash-wx[data-rows="2"]:not([data-narrow]) .wbNow{flex:none}#app.tfBoard .tfDash-wx[data-rows="2"]:not([data-narrow]) .wbNextHours{display:flex;flex:1 1 0}#app.tfBoard .tfDash-wx[data-rows="3"]:not([data-narrow]) .wbWeather{justify-content:center;padding-top:0;padding-bottom:0}#app.tfBoard .tfDash-wx[data-rows="3"]:not([data-narrow]) :is(.wbNow,.wbSummary){display:none}#app.tfBoard .tfDash-wx[data-rows="3"]:not([data-narrow]) .wbColumns{display:flex;flex:none;height:185px}#app.tfBoard .tfDash-wx[data-rows="3"]:not([data-narrow]) .wbAsDay{display:none}#app.tfBoard .tfDash-wx[data-rows="3"]:not([data-narrow]) .wbAsNow{display:inline}#app.tfBoard .tfDash-wx[data-narrow] .wbCard.wbWeather{gap:12px;padding:18px}#app.tfBoard .tfDash-wx[data-narrow]:not([data-rows="1"]) .wbWx.wbS90{width:64px;height:64px;border-radius:20px}#app.tfBoard .tfDash-wx[data-narrow]:not([data-rows="1"]) .wbDeg{font-size:46px;line-height:46px;letter-spacing:-.92px}#app.tfBoard .tfDash-wx[data-narrow]:not([data-rows="1"]) .wbUnit{font-size:20px;line-height:26px}#app.tfBoard .tfDash-wx[data-narrow]:not([data-rows="1"]) .wbTempBlock{gap:0}#app.tfBoard .tfDash-wx[data-narrow] .wbHalves{display:none}#app.tfBoard .tfDash-wx[data-narrow][data-rows="3"] .wbNextHours{display:flex;margin-top:auto}#app.tfBoard .tfDash-wx[data-narrow] .wbHour:nth-child(n+4){display:none}#app.tfBoard .tfDash-wx[data-narrow]:is([data-rows="4"],[data-rows="5"]) .wbColumns{display:flex;flex:none;height:auto;margin-top:auto}#app.tfBoard .tfDash-wx[data-narrow]:is([data-rows="4"],[data-rows="5"]) .wbColumn:nth-child(n+4){display:none}#app.tfBoard .tfDash-wx[data-narrow][data-rows="5"] .wbSummary{display:block}#app.tfBoard .tfDash-wx:not([data-narrow]):is([data-rows="4"],[data-rows="5"]) .wbHalves{display:none}#app.tfBoard .tfDash-wx:not([data-narrow]):is([data-rows="4"],[data-rows="5"]) .wbColumns{display:flex;margin-top:auto}#app.tfBoard .tfDash-wx:not([data-narrow])[data-rows="5"] .wbSummary{display:block}#app.tfBoard .tfDash-wx:is([data-rows="1"],[data-rows="2"],[data-rows="4"]) .wbSummary{display:none}#app.tfBoard .tfDash-wx:is([data-rows="1"],[data-rows="2"],[data-rows="3"]) :is(.wbColumns,.wbHalves){display:none}#app.tfBoard .tfDash-wx[data-rows="4"] .wbColumns{flex:1 1 0;height:auto;min-height:0;margin-top:0}#app.tfBoard .tfDash-wx:is([data-rows="4"],[data-narrow][data-rows="5"]) .wbColumn{justify-content:flex-start;gap:8px;padding:12px 0 16px}#app.tfBoard .tfDash-wx:is([data-rows="4"],[data-narrow][data-rows="5"]) .wbColumn .wbWx{width:40px;height:40px;border-radius:16px}#app.tfBoard .tfDash-wx:is([data-rows="4"],[data-narrow][data-rows="5"]) .wbTemps{gap:4px}#app.tfBoard .tfDash-wx[data-rows="4"] .wbHalves>:nth-child(n+5){display:none}#app.tfBoard .tfDash-energy[data-rows="2"] .tfDashGraph{display:none}#app.tfBoard .tfDash-energy:is([data-rows="1"],[data-rows="2"],[data-rows="3"]) .activityRows{grid-template-columns:none;grid-auto-flow:column;grid-auto-columns:minmax(0,1fr)}#app.tfBoard .tfDash-energy[data-rows="3"] .tfDashGraph{min-height:0}#app.tfBoard .tfDashBento[data-rows="2"] .wbBaseRows{display:none}#app.tfBoard .tfDashBento[data-rows="2"] :is(.wbRadar,.wbCompareBars,.wbCompareWords,.wbCompareTemps){display:none}#app.tfBoard .tfDashBento[data-rows="3"] :is(.wbCompareWords,.wbCompareTemps){display:none}#app.tfBoard .tfAreas[data-rows="1"] .workoutPanel.tfAreaPanel{padding:10px}#app.tfBoard .tfAreas[data-rows="1"] .panelExpanded{display:grid;grid-template-columns:40px minmax(0,1fr);gap:0 12px;align-content:center}#app.tfBoard .tfAreas[data-rows="1"] :is(.panelExpanded>.workoutPanelTop,.tfACTop){display:contents}#app.tfBoard .tfAreas[data-rows="1"] .panelExpanded .tfAreaIcon{grid-row:span 2}#app.tfBoard .tfAreas[data-rows="1"] .tfATitle .tfAName{font-size:14px;line-height:20px;height:auto}#app.tfBoard .tfAreas[data-rows="1"] .tfABig{margin:0;flex-direction:row}#app.tfBoard .tfAreas[data-rows="1"] .tfABigMain{font-size:14px;line-height:18px;letter-spacing:0}#app.tfBoard .tfAreas[data-rows="1"] :is(.tfABigUnit){font-size:14px}#app.tfBoard .tfAreas[data-rows="1"] :is(.tfABigSub,.tfATiles,.tfACTiles,.sourceTag){display:none}#app.tfBoard .tfAreas[data-rows="1"] .tfACollapsed{display:grid;grid-template-columns:40px minmax(0,1fr);column-gap:12px;align-content:center;padding:0}#app.tfBoard .tfAreas[data-rows="1"] .tfACollapsed .tfAreaIcon{grid-row:span 2}#app.tfBoard .tfAreas[data-rows="1"] :is(.tfACName,.tfACMain){margin:0;font-size:14px;line-height:18px;text-align:start;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#app.tfBoard .tfAreas:is([data-rows="2"],[data-rows="3"]) .tfABig{display:none}#app.tfBoard .tfAreas[data-rows="4"] .tfABig{flex:none;margin-top:auto;margin-bottom:auto}#app.tfBoard .tfAreas[data-rows="4"] .tfATiles{margin-top:0}#app.tfBoard .tfAreas[data-rows="4"] .tfABigMain{font-size:52px}#app.tfBoard .tfAreas[data-rows="4"] .panelExpanded{row-gap:12px}#app.tfBoard .tfAreas:is([data-rows="2"],[data-rows="3"],[data-rows="4"]) .tfATiles{margin-top:auto}#app.tfBoard .tfAreas[data-rows="2"] .tfATile:nth-child(n+3),#app.tfBoard .tfAreas:is([data-rows="3"],[data-rows="4"]) .tfATile:nth-child(n+5){display:none}#app.tfBoard .tfAreas[data-rows="2"] .tfACTiles{display:none}#app.tfBoard .tfAreas:is([data-rows="3"],[data-rows="4"]) .tfACTile:nth-child(n+3){display:none}#app.tfBoard .tfAreas:is([data-rows="3"],[data-rows="4"]) .tfACollapsed{justify-content:flex-start;gap:10px}#app.tfBoard .tfAreas:is([data-rows="3"],[data-rows="4"]) .tfACTiles{margin-top:auto}.tfEditTray{position:fixed;top:calc(var(--header-height,0px) + env(safe-area-inset-top,0px));right:0;bottom:0;z-index:160;display:flex;width:360px;max-width:calc(100vw - 56px);transform:translate(100%);transition:transform .25s cubic-bezier(.2,.7,.3,1);pointer-events:none}.tfEditTray.open{transform:none}.tfEditTray.open.tucked{transform:translate(100%)}.tfEditTray.open :is(.tfTrayInner,.tfTrayTuck){pointer-events:auto}.tfTrayTuck{position:absolute;top:20px;left:-52px;display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);min-height:0;padding:0;border:0;border-radius:var(--r-inner);background:var(--card);color:var(--text);box-shadow:var(--hc-hair-all);cursor:pointer;--mdc-icon-size:22px}.tfTrayTuck svg{width:22px;height:22px}.tfEditTray:not(.open) .tfTrayTuck{visibility:hidden}.tfTrayInner{flex:1;min-width:0;display:flex;flex-direction:column;gap:20px;overflow:auto;overscroll-behavior:contain;padding:20px;border-radius:var(--r-card) 0 0 var(--r-card);background:var(--card);box-shadow:var(--hc-hair-all),0 0 40px #0000004d}.tfTrayHead{display:flex;align-items:center;justify-content:space-between;gap:12px}.tfTraySection{display:flex;flex-direction:column;gap:8px}.tfTraySection .sectionLabel{margin:0}.tfTrayNote{margin:0;color:var(--muted);font:400 14px/1.3 var(--font)}.tfTrayCards{display:flex;flex-direction:column;gap:6px}.tfTrayCard{display:flex;align-items:center;gap:10px;min-height:var(--tile-min);padding:0 14px 0 10px;border:0;border-radius:var(--r-tile);background:var(--tile);color:var(--text);font:600 14px/20px var(--font-tile);text-align:start;cursor:grab;touch-action:none}.tfTrayList{display:flex;flex-direction:column;margin:0;padding:0;list-style:none}.tfTrayFav{display:grid;grid-template-columns:22px var(--chip-size) minmax(0,1fr) 36px 36px;align-items:center;gap:8px;min-height:var(--tile-min);padding:0 4px 0 6px;border-radius:var(--r-tile)}.tfTrayFav.off{cursor:grab;touch-action:none}.tfTrayFav.off :is(.tfIcon,.tfTrayName){opacity:.5}.tfTrayFav.moving{background:var(--tile)}.tfTrayGrip{display:grid;place-items:center;color:var(--muted);cursor:grab;touch-action:none}.tfTrayGrip svg{width:20px;height:20px;fill:currentColor}:is(.tfTrayFav,.tfTrayPickItem) .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfTrayName{display:flex;flex-direction:column;min-width:0}.tfTrayName>*{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfTrayBtn{display:grid;place-items:center;width:36px;height:36px;min-height:0;padding:0;border:0;border-radius:12px;background:none;color:var(--text);cursor:pointer}.tfTrayBtn svg{width:20px;height:20px;fill:currentColor}.tfTrayBtn:hover{background:var(--tile)}.tfTrayAdd{align-self:flex-start}.tfTrayPick{display:flex;flex-direction:column;gap:6px}.tfTrayPick[hidden]{display:none}.tfTrayPickItem{display:grid;grid-template-columns:var(--chip-size) minmax(0,1fr);align-items:center;gap:12px;width:100%;min-height:var(--tile-min);padding:0 10px;border:0;border-radius:var(--r-tile);background:none;color:var(--text);text-align:start;cursor:pointer}.tfTrayPickItem:hover{background:var(--tile)}.tfTraySuggest{margin-top:8px}.tfMiniPhone{position:fixed;top:calc(var(--header-height,0px) + env(safe-area-inset-top,0px) + 20px);bottom:20px;left:max(16px,calc(100vw - min(360px,100vw - 56px) - 380px));z-index:160;display:flex;flex-direction:column;gap:8px;width:324px;padding:12px;border-radius:44px;background:var(--card);box-shadow:var(--hc-hair-all),0 0 40px #0000004d;opacity:0;transform:translate(16px);transition:opacity .2s ease,transform .25s cubic-bezier(.2,.7,.3,1);pointer-events:none}.tfMiniPhone.open{opacity:1;transform:none;pointer-events:auto}.tfPhoneHead{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:8px 4px 0 12px}.tfMiniPhone>.tfTrayNote{padding:0 12px 4px}.tfLinkBtn{min-height:0;padding:0;border:0;background:none;color:var(--primary);font:inherit;text-decoration:underline;cursor:pointer}.tfPhoneScreen{flex:1;min-height:0;overflow:auto;overscroll-behavior:contain;scrollbar-width:thin;border-radius:34px;background:var(--bg);box-shadow:var(--hc-hair-all);padding:14px 0 24px}.tfPhoneList{display:flex;flex-wrap:wrap;gap:12.8px}.tfPhoneTitle{width:100%;padding:0 12.8px;color:var(--text);font:800 25.6px/1 var(--font);letter-spacing:-.055em;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfPhoneBlock{display:flex;align-items:flex-start;gap:10px;width:100%;min-height:0;padding:12px;border:0;border-radius:27px;background:var(--card);box-shadow:var(--hc-hair);color:var(--text);font:600 14px/20px var(--font-tile);text-align:start;cursor:grab;touch-action:none;-webkit-user-select:none;user-select:none}.tfPhoneBlock.tile{width:calc((100% - 12.8px)/2);border-radius:22.4px}.tfPhoneBlock.fixed{align-items:center;color:var(--muted);cursor:default}.tfPhoneBlock.moving{box-shadow:var(--hc-hair),0 0 0 2px var(--primary);cursor:grabbing}.tfPhoneBlock:focus-visible{outline:2px solid var(--primary);outline-offset:2px}.tfPhoneBlock .tfIcon{width:32px;height:32px;border-radius:13px;background:var(--hc-icon);color:var(--hc-icon-ink);--mdc-icon-size:22px}.tfPhoneName{min-width:0;padding-top:6px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.tfTrayGhost{position:fixed;top:0;left:0;z-index:200;margin:0;pointer-events:none;opacity:.9;background:var(--tile);border-radius:var(--r-tile);box-shadow:0 8px 24px #00000059}.tfFavDrop{position:fixed;z-index:200;width:4px;border-radius:2px;background:var(--primary);pointer-events:none}.tfFavHides{position:absolute;top:0;right:0;bottom:0;left:0;z-index:4;pointer-events:none}.tfFavHide{position:absolute;display:grid;place-items:center;width:32px;height:32px;min-height:0;padding:0;border:0;border-radius:12px;background:var(--card);color:var(--text);box-shadow:var(--hc-hair-all);cursor:pointer;pointer-events:auto}.tfFavHide svg{width:18px;height:18px;fill:currentColor}.tfDash-energy .tfDashGraph{flex:1;min-height:80px;height:auto;margin:var(--inset) 0 0}.tfDash-energy.graphAbove>.activityHeader{order:-2}.tfDash-energy.graphAbove>.tfDashGraph{order:-1;margin:0 0 var(--inset)}#homeView .card.tfDash-energy .activityRow.picked{background:var(--tile);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line)}.toast.tfToast{top:auto;right:auto;max-width:calc(100vw - 32px);transform:translate(-50%,6px)}.toast.tfToast.show{transform:translate(-50%)}.tfDash-act .activityRow.alert .activityRowName{color:var(--danger)}.activityRow .tfIcon.alert{background:#e53935;color:#fff}.tfGraph.tfDay{flex:none;height:62px;min-height:0}.tfGraph.tfDay text{font-size:10px}#housePane .rubberIndicator{background:var(--bright)}#housePane .tab.active{color:var(--on-bright)}#app.light .tfBar i{box-shadow:inset -2px 0 0 var(--text)}#app.house :is(.settingsSelect,.addInput){border:1px solid var(--muted)}#app.house{--select-chev:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath d='M3.5 6l4.5 4.5L12.5 6' fill='none' stroke='%23d9d9d9' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")}#app.house.light{--select-chev:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath d='M3.5 6l4.5 4.5L12.5 6' fill='none' stroke='%2326221e' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")}#app.house select.settingsSelect{-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:0 44px 0 16px;background-image:var(--select-chev);background-repeat:no-repeat;background-position:right 16px center;background-size:16px 16px}#app.house .addInput::placeholder{color:var(--muted);opacity:1}#app .activityRows :focus-visible{outline-offset:-2.4px}#app.house :is(button,a,input,select,[tabindex]){scroll-margin-bottom:96px}@media (max-width:620px){#app.house :is(.activityRowName,.activityRowMeta){white-space:normal;text-overflow:clip;overflow:visible;overflow-wrap:break-word;-webkit-hyphens:auto;hyphens:auto}}.tfTooltip{position:fixed;z-index:500;max-width:min(320px,calc(100vw - 16px));padding:6px 10px;border-radius:10px;background:var(--bright);color:var(--on-bright);font:500 14px/18px var(--font);overflow-wrap:break-word;box-shadow:0 4px 16px #00000040}.tfTooltip[hidden]{display:none}.tfDashGraph rect{transform-box:fill-box;transform-origin:50% 100%}#app.house:is([data-names=cut],[data-names=scroll]) :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis;overflow-wrap:normal}#app.house[data-names=wrap] :is(.activityRowName,.activityRowMeta){display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;white-space:normal;overflow:hidden;text-overflow:ellipsis;overflow-wrap:break-word;-webkit-hyphens:auto;hyphens:auto}#app.tfBoard .tfDash-favs>.activityRows{min-height:0;overflow-y:auto;scrollbar-width:thin}#app.house :is(.tfIcon,.activityRowIcon,.tfAreaIcon,.tfRoomIcon){--chip-hi:.0375;background-image:linear-gradient(180deg,#ffffff08,#fff0)!important;box-shadow:inset 0 1px rgba(255,255,255,var(--chip-hi)),inset 0 -1px color-mix(in srgb,currentColor 3%,transparent),inset 0 -3px 6px color-mix(in srgb,currentColor 3.5%,transparent)}#app.house :is(.on[data-light] .tfIcon,.tfIcon.on[data-light],.tfACTile .tfIcon[data-light],.on[data-tone=alarm] .tfIcon,.tfIcon[data-light]){--chip-hi:.1375}#app.tfWeatherOpen .tfBento.tfPegs .wbItem:is([data-xl],[data-size=tile],[data-size=double]){grid-row:span 5}#app.tfBoard .tfDashBento:not([data-rows="5"]) .wbItem[data-xl] .wbCallouts{display:none}#app.tfBoard .tfDashBento:is([data-rows="2"],[data-rows="3"]) .wbZone{flex:1;height:auto;background:none;box-shadow:none;padding:0;align-items:flex-start}#app.tfBoard .tfDashBento[data-rows="3"] .wbItem[data-xl] .wbCallouts{display:flex;margin-top:0}#app.tfBoard .tfDashBento[data-rows="1"] :is(.wbZone,.wbCallouts){display:none}#app.tfBoard .tfDashBento[data-rows="3"] .wbCallout:nth-child(n+3){display:none}#app.house #settingsView .toggleList{border-radius:var(--r-card);padding-block:4px}#app.house #settingsView .toggleRow{padding-left:18px;padding-right:18px}#app.house #settingsView .toggleRow:not([hidden])~.toggleRow:before{left:18px}#app.house #settingsView{margin-left:0}#app.house #housePane .toggleRow>:is(.themeChoice,.settingsSelect){align-self:flex-start;width:auto;max-width:100%}#app.house #housePane .themeChoice{display:inline-flex}#app.house #housePane .themeChoice>button{flex:0 1 auto;min-width:0;padding:0 16px;overflow:hidden;text-overflow:ellipsis}#app.house #housePane .toggleRow{min-width:0}#app.house #housePane .toggleRow>.settingsSelect{min-width:200px}#app.house :is(.tfBoardMenu .tfHeightTabs,.wb .wbSegments){display:inline-flex;width:auto;align-self:flex-start}#app.house :is(.tfBoardMenu .tfHeightTabs,.wb .wbSegments) button{flex:0 0 auto;padding:0 16px}@media (max-width:620px){#app.house.tfDash:not(.tfEditing) #homeView>.grid{display:flex!important;flex-wrap:wrap;align-items:flex-start;gap:var(--grid-gap);height:auto!important}#app.house.tfDash:not(.tfEditing) #homeView>.grid .tfBoardItem{position:relative!important;left:auto!important;top:auto!important}#app.house.tfDash:not(.tfEditing) #homeView>.grid>.tfBoardItem{height:auto!important}#app.house.tfDash:not(.tfEditing) .tfDash-wx .wbSummary{flex:none;margin-top:0;container-type:normal}#app.house.tfDash:not(.tfEditing) .tfDash-wx .wbSummaryText{position:static}}`, Gp = `.wb{container:wb-bento/inline-size;display:block;color:var(--text);font-family:var(--font);-webkit-font-smoothing:antialiased}.wbBento{box-sizing:content-box;display:flex;flex-wrap:wrap;align-items:flex-start;justify-content:center;gap:16px;max-width:1056px;margin:0 auto;padding:10px}.wbItem{container:wb-card/inline-size;min-width:0}.wbItem[hidden]{display:none!important}.wbItem[data-size=wide]{width:520px;align-self:stretch;display:flex;flex-direction:column}.wbItem[data-size=wide]>*{flex:1}.wbItem[data-size=wide]>.wbWeather{flex:none}.wbItem[data-size=tile]{width:252px}.wbItem[data-size=double]{width:520px}@container wb-bento (width < 652px){.wbBento{gap:10px;padding:10px}.wbItem:is([data-size=wide],[data-size=double]){width:100%}.wbItem[data-size=tile]{width:calc(50% - 5px)}}.wbCard{position:relative;display:block;box-sizing:border-box;border:0;border-radius:var(--r-card);background:var(--card);color:var(--text);font-family:var(--font);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line);transition:all .3s ease-out}.wbCard.wbHc{display:flex;flex-direction:column;gap:10px;padding:14px var(--inset) var(--inset);box-shadow:var(--hc-hair-all)}.wbHeader{display:flex;align-items:center;justify-content:space-between;gap:12px;min-height:28px;padding:0 18px}.wbTitle{margin:0;font:500 18px/1.2 var(--font-tile);letter-spacing:-.18px;color:var(--text);white-space:nowrap}.wbIcon{display:block;flex:none;width:var(--wb-icon,24px);height:var(--wb-icon,24px);fill:currentColor;pointer-events:none}.wbTile{display:flex;align-items:center;gap:12px;min-width:0;min-height:var(--tile-min);box-sizing:border-box;padding:var(--inset);border:0;border-radius:var(--r-tile);background:transparent;color:inherit;font:inherit;text-align:start}.wb button.wbTile{border-radius:var(--r-tile)!important;cursor:pointer;transition:background-color .15s ease,box-shadow .15s ease}.wb button.wbTile:hover{background:var(--tile);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line)}.wb button.wbTile:focus-visible{outline:2px solid var(--primary)!important;outline-offset:2px!important}.wbChip{flex:none;display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);background:var(--primary);color:var(--hc-on-accent);--wb-icon:24px}.wbChip.wbPlain{background:var(--icon-bg);color:var(--text)}.wbText{display:flex;flex-direction:column;justify-content:center;flex:1;min-width:0;align-self:stretch;overflow:hidden;white-space:nowrap}.wbName{font:600 14px/20px var(--font-tile);overflow:hidden;text-overflow:ellipsis}.wbSub{font:400 16px/1.15 var(--font);letter-spacing:-.32px;overflow:hidden;text-overflow:ellipsis}.wbCard.wbSquare{display:flex;flex-direction:column;gap:14px;aspect-ratio:1;--wb-k:1;box-sizing:border-box;padding:18px;border-radius:28px;overflow:hidden}.wbHead{display:flex;align-items:flex-start;gap:12px;min-width:0}.wbSquare .wbChip{width:40px;height:40px;border-radius:16px}.wbSquare .wbName{font-size:14px;line-height:1.4}.wbSquare .wbSub{font-size:16px}.wbVisual{position:relative;flex:1;min-height:0;display:flex;flex-direction:column;justify-content:center;gap:10px}.wbCard.wbSquare.wbDouble{aspect-ratio:520/252;--wb-k:.4846;border-radius:34px}.wbVisual>svg{display:block;width:100%;height:100%;min-height:0}.wbVisual svg text{font-family:var(--font-tile)}.wbValue{display:flex;align-items:flex-start;gap:2px;white-space:nowrap}.wbValue .wbNum{font:500 clamp(30px,calc(17.5cqw * var(--wb-k,1)),44px)/1 var(--font-tile);letter-spacing:-.02em;font-variant-numeric:tabular-nums}.wbValue .wbUnitV{font:300 clamp(13px,calc(7.1cqw * var(--wb-k,1)),18px)/1.25 var(--font-tile);color:var(--muted)}.wbScaleNote{display:flex;justify-content:space-between;color:var(--muted);font:400 clamp(10px,calc(4.4cqw * var(--wb-k,1)),12px)/1.3 var(--font)}.wbCard.wbSquare.wbHasBackdrop{position:relative;isolation:isolate}.wbBackdrop{position:absolute;top:0;right:0;bottom:0;left:0;z-index:0;overflow:hidden;border-radius:inherit;pointer-events:none}.wbBackdrop~*{position:relative;z-index:1}.wbGraph{position:relative;display:flex;flex-direction:column;justify-content:center;height:120px;box-sizing:border-box;padding:12px 16px;border-radius:10px 10px 18px 18px;background:var(--tile);overflow:hidden;--wb-scale-edge:var(--tile)}.wbChart{display:block;width:100%;height:100%;overflow:visible}.wbChart .wbLine{fill:none;stroke:var(--primary);stroke-width:2.5;stroke-linecap:round;stroke-linejoin:round}.wbChart .wbArea{fill:var(--primary);opacity:.14}.wbChart .wbBar{fill:var(--muted);opacity:.45}.wbChart .wbBar.wbNowBar{fill:var(--primary);opacity:1}.wbChart .wbGuide{stroke:var(--muted);stroke-width:1;stroke-dasharray:2 4}.wbChart text{fill:var(--muted);font:400 11px var(--font)}.wbGraphNote{display:flex;justify-content:space-between;gap:8px;color:var(--muted);font:400 12px/1.4 var(--font)}.wbDayChart{flex:1;min-height:0;display:grid;grid-template-columns:38px minmax(0,1fr);grid-template-rows:20px minmax(0,1fr) 18px;grid-template-areas:". sun" "y plot" ". x";column-gap:6px;color:var(--muted);font:400 11px/14px var(--font);font-variant-numeric:tabular-nums}.wbDcSun,.wbDcX,.wbDcY,.wbDcPlot{position:relative;min-width:0}.wbDcSun{grid-area:sun}.wbDcY{grid-area:y}.wbDcPlot{grid-area:plot}.wbDcX{grid-area:x}.wbDcSunMark,.wbDcX span{position:absolute;bottom:0;transform:translate(-50%);white-space:nowrap}.wbDcSunMark{display:flex;align-items:center;gap:2px;bottom:4px;--wb-icon:14px}.wbDcSunMark .wbIcon{fill:#fea916}.wbDcX span{top:4px;bottom:auto}.wbDcY span{position:absolute;right:0;transform:translateY(-50%);white-space:nowrap}.wbDcPlot svg{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;overflow:visible}.wbDcNight{fill:var(--page);opacity:.6}.wbDcGrid{stroke:var(--line);stroke-width:1}.wbDcSunLine{stroke:#fea916;stroke-width:1;stroke-dasharray:2 4;opacity:.7}.wbDcNow{stroke:var(--text);stroke-width:1;opacity:.4}.wbDcLine,.wbDcPast{fill:none;stroke:var(--primary);stroke-width:2.5;stroke-linecap:round;stroke-linejoin:round}.wbDcPast{stroke:var(--muted);stroke-width:2}.wbDcArea{fill:var(--primary);opacity:.14}.wbDcBar{position:absolute;bottom:0;min-height:3px;border-radius:4px 4px 1px 1px;background:var(--primary)}.wbDcDot{position:absolute;width:10px;height:10px;margin:-5px 0 0 -5px;border-radius:50%;background:var(--primary);box-shadow:0 0 0 2px var(--card)}.wbDcPeak{position:absolute;transform:translate(-50%,calc(-100% - 6px));color:var(--text);font-weight:500;white-space:nowrap}.wbDcNote{position:absolute;top:0;right:0;bottom:0;left:0;display:grid;place-items:center;padding:0 8px;text-align:center;color:var(--muted);font:400 13px/1.4 var(--font)}.wbOpen{flex:1;display:flex;flex-direction:column;gap:10px;padding:var(--inset);border-radius:28px;background:var(--tile);box-shadow:inset 0 0 0 .4px var(--hc-open-edge)}.wbOpenHead{display:flex;align-items:center;gap:12px}.wbBack{flex:none;display:grid;place-items:center;width:34px;height:34px;padding:0;border:0;border-radius:var(--r-fine);background:transparent;color:var(--text);cursor:pointer;--wb-icon:24px}.wb button.wbBack{border-radius:var(--r-fine)!important}.wbBack:hover{background:var(--hover)}.wbOpen .wbGraph{flex:1;height:auto;min-height:152.2px;background:var(--card);--wb-scale-edge:var(--tile)}.wbSegments{display:inline-flex;gap:0;padding:4px;border-radius:var(--r-inner);background:var(--page)}.wbSegments button{padding:4px 12px;border:0;border-radius:var(--r-fine);background:transparent;color:var(--muted);font:600 14px/20px var(--font-tile);cursor:pointer}.wb .wbSegments button{border-radius:var(--r-fine)!important;font-family:var(--font-tile)!important}.wbSegments button[aria-pressed=true]{background:var(--tile);color:var(--text)}.wbWx{position:relative;display:block;flex:none;width:40px;height:40px;border-radius:var(--r-inner);background:var(--icon-bg);overflow:hidden}.wbWx>svg,.wbWx>canvas{display:block;width:100%;height:100%}.wbWx>canvas{image-rendering:pixelated}.wbWx.wbS60{width:60px;height:60px;border-radius:20px}.wbWx.wbS90{width:90px;height:90px;border-radius:28px}.wb[data-style=smooth] :is(.wbWx,.wbSky):after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;border-radius:inherit;pointer-events:none;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n' color-interpolation-filters='sRGB'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix values='1.3 0 0 0 -.15 1.3 0 0 0 -.15 1.3 0 0 0 -.15 0 0 0 0 1'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");background-size:140px 140px;mix-blend-mode:overlay;opacity:.3}.wbBaseRows{display:flex;flex-direction:column;gap:4px;width:100%}.wbBaseRow{display:flex;justify-content:space-between;gap:12px;color:var(--muted);font:400 14px/20px var(--font)}.wbBaseRow>span:last-child{color:var(--text);white-space:nowrap}.wbBaseRow>span:first-child{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.wbRadar{position:relative;flex:1;align-self:stretch;min-height:80px;border-radius:var(--r-inner);overflow:hidden;background-color:var(--tile);background-image:linear-gradient(color-mix(in srgb,var(--text) 7%,transparent) 1px,transparent 1px),linear-gradient(90deg,color-mix(in srgb,var(--text) 7%,transparent) 1px,transparent 1px);background-size:24px 24px;background-position:center}.wbRadarRing{position:absolute;left:50%;top:50%;width:64%;aspect-ratio:1;transform:translate(-50%,-50%);border-radius:50%;box-shadow:0 0 0 1px color-mix(in srgb,var(--text) 20%,transparent)}.wbRadarRing:after{content:"";position:absolute;top:25%;right:25%;bottom:25%;left:25%;border-radius:50%;box-shadow:0 0 0 1px color-mix(in srgb,var(--text) 14%,transparent)}.wbRadarHome{position:absolute;left:50%;top:50%;width:10px;height:10px;margin:-5px 0 0 -5px;border-radius:50%;background:var(--primary);box-shadow:0 0 0 3px var(--tile)}.wbWx.wbLineIcon{display:grid;place-items:center;background:var(--tile);color:var(--text)}.wbWx.wbLineIcon>svg{width:64%;height:64%}.wbWx.wbClear,.wbWx.wbPartly{background:var(--wx-clear)}.wbWx.wbCloudy{background:var(--wx-cloudy)}.wbWx.wbRain,.wbWx.wbSnow{background:#969696}.wbWx.wbNight{background:var(--wx-night)}.wbWx .wbBright{fill:var(--wx-cloud-bright)}.wbWx .wbCloudLight{fill:var(--wx-cloudy)}.wbWx .wbAccent{fill:var(--primary)}.wbWx :is(.wbSunDisc,.wbMoonPath,.wbBright,.wbCloudLight,.wbDrop,.wbFlake,.wbTwinkle){transform-box:fill-box;transform-origin:center}.wbMotion .wbWx .wbSunDisc{animation:wxBreathe 3.6s ease-in-out infinite}.wbMotion .wbWx .wbMoonPath{animation:wxBob 5.2s ease-in-out infinite}.wbMotion .wbWx :is(.wbBright,.wbCloudLight){animation:wxDrift 6.4s ease-in-out infinite}.wbMotion .wbWx .wbDrop{animation:wxFall .95s linear infinite}.wbMotion .wbWx .wbFlake{animation:wxSnow 3.2s linear infinite}.wbMotion .wbWx .wbTwinkle{animation:wxTwinkle 2.4s ease-in-out infinite}.wbCard.wbWeather{position:relative;display:flex;flex-direction:column;gap:12px;padding:18px}.wbClosed{display:contents}.wbWeather.wbIsOpen .wbClosed{visibility:hidden}.wbWeather .wbOpen{position:absolute;top:10px;right:10px;bottom:10px;left:10px;min-height:0}.wbWeather .wbOpen .wbGraph{min-height:0;padding:8px 14px 6px 8px}.wbDayTabs{display:flex}.wbNow{display:flex;align-items:flex-start;justify-content:space-between;gap:16px}.wbCurrent{display:flex;align-items:flex-start;gap:16px;min-width:0}.wb button.wbOpenPage{padding:0;border:0;border-radius:var(--r-tile)!important;background:none;color:inherit;font:inherit;text-align:start;cursor:pointer}.wb button.wbOpenPage:focus-visible{outline:2px solid var(--primary)!important;outline-offset:4px!important}.wbTempBlock{display:flex;flex-direction:column;gap:4px;min-width:0}.wbTemp{display:flex;align-items:flex-start;gap:2px;white-space:nowrap}.wbDeg{font:500 64px/1 var(--font-tile);letter-spacing:-1.28px}.wbUnit,.wbRange{font:300 24px/1.25 var(--font-tile);white-space:nowrap}.wbPlace{color:var(--muted);font:600 14px/20px var(--font-tile);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.wbCondition{flex:none;align-self:stretch;display:flex;flex-direction:column;justify-content:space-between;padding:10px 16px;border-radius:var(--r-tile);background:var(--tile)}.wbCondName{font:400 18px/1.2 var(--font);letter-spacing:-.18px;white-space:nowrap}.wbColumns{display:flex;height:185px;border-radius:28px;overflow:hidden}.wbColumn{flex:1 0 0;min-width:0;display:flex;flex-direction:column;align-items:center;justify-content:space-between;padding:16px 0;border:0;border-radius:var(--r-tile);background:var(--tile);color:var(--text);font:inherit;cursor:pointer}.wb button.wbColumn{border-radius:var(--r-tile)!important}.wbColumn:hover{background:var(--hover);box-shadow:inset 0 0 0 .4px var(--line)}.wb button.wbColumn:focus-visible{outline:2px solid var(--primary)!important;outline-offset:-2px!important}.wbDay{font:400 14px/1.4 var(--font);white-space:nowrap}.wbTemps{display:flex;flex-direction:column;align-items:center;gap:8px}.wbHi{font:400 18px/20px var(--font-tile)}.wbLo{color:var(--muted);font:400 18px/1.2 var(--font);letter-spacing:-.18px}.wbAsNow{display:none}.wbHalves{display:none;grid-template-columns:repeat(2,minmax(0,1fr))}.wbNextHours{display:none;justify-content:space-between;align-items:center;gap:8px;min-width:0}.wbHour{display:flex;flex-direction:column;align-items:center;gap:8px;min-width:0}.wbHourTime{color:var(--muted);font:400 14px/20px var(--font);white-space:nowrap}.wbHourTemp{font:400 18px/20px var(--font-tile);white-space:nowrap}.wbHour .wbWx.wbS40{width:40px;height:40px;border-radius:16px}.wbSummary{position:relative;flex:1 1 0;min-height:0;margin-top:-12px;container:wbsum/size}.wbSummaryText{position:absolute;top:12px;left:0;right:0;margin:0;color:var(--text);font:400 16px/22px var(--font);display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden}@container wbsum (height < 56px){.wbSummaryText{-webkit-line-clamp:1}}@container wbsum (height < 34px){.wbSummaryText{display:none}}@container wb-card (width < 480px){.wbColumn .wbWx.wbS60{width:48px;height:48px;border-radius:16px}}@container wb-card (width < 400px){.wbSummary{display:none}.wbCard.wbWeather{gap:16px;padding:18px 18px 10px}.wbWeather .wbWx.wbS90{width:60px;height:60px;border-radius:20px}.wbDeg{font-size:46px;letter-spacing:-.92px}.wbRange{font-size:20px}.wbCondition{align-self:flex-start;gap:0;border-radius:28px}.wbColumns{display:none}.wbHalves{display:grid}.wbWeather .wbDcX .wbMinor{display:none}}@container wb-card (width < 280px){.wbHalves{grid-template-columns:1fr}}.wbCard.wbHourly{flex:1}.wbTabs{padding:0 18px}.wbStripScroll{flex:1;min-height:160px;display:flex;overflow-x:auto;overflow-y:hidden;scrollbar-width:none;border-radius:var(--r-tile);-webkit-user-select:none;user-select:none}.wbStripScroll::-webkit-scrollbar{display:none}.wbStripScroll.wbDragging{cursor:grabbing}.wbStrip{flex:none;display:flex;flex-direction:column;gap:8px;min-width:100%;box-sizing:border-box;padding:0 10px}.wbRow{position:relative;flex:none}.wbTimes{height:20px}.wbValues{height:44px}.wbMark{position:absolute;top:0;display:flex;flex-direction:column;align-items:center;transform:translate(-50%);white-space:nowrap}.wbMark.wbFirst{align-items:flex-start;transform:none}.wbTimes .wbMark{font:400 14px/20px var(--font);font-variant-numeric:tabular-nums}.wbTimes .wbMark.wbFirst{font:600 14px/20px var(--font-tile)}.wbSky{position:relative;flex:1;min-height:72px;border-radius:var(--r-inner);overflow:hidden}.wbStripScroll.wbPaged{container-type:inline-size;scroll-snap-type:x mandatory;overscroll-behavior-x:contain}.wbStripScroll.wbPaged.wbHeld{scroll-snap-type:none}.wbPaged .wbStrip{position:relative;min-width:0;padding:0}.wbSnap{position:absolute;top:0;width:1px;height:1px;scroll-snap-align:start;pointer-events:none}.wbMark.wbLast{align-items:flex-end;transform:translate(-100%)}.wbPaged .wbTimes .wbMark.wbFirst{font:400 14px/20px var(--font)}.wbPaged .wbTimes .wbMark.wbNowMark{font:600 14px/20px var(--font-tile)}.wbSky .wbPast{position:absolute;top:0;bottom:0;left:0;background:var(--card);opacity:.45;pointer-events:none}.wbSky .wbNowLine{position:absolute;top:0;bottom:0;width:2px;margin-left:-1px;background:var(--text);opacity:.55;pointer-events:none}.wbSky.wbLineSky{background:var(--tile);color:var(--text)}.wbLineArt{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;overflow:visible}.wbLineArt .wbLineArc{fill:none;stroke:var(--text);stroke-width:1.5;stroke-linejoin:round;vector-effect:non-scaling-stroke;opacity:.7}.wbLineArt .wbLineHorizon{stroke:var(--text);stroke-width:1;vector-effect:non-scaling-stroke;opacity:.35}.wbLineArt .wbLineNight{fill:var(--text);opacity:.07}.wbLineArt .wbLineEdge{stroke:var(--text);stroke-width:1;vector-effect:non-scaling-stroke;opacity:.3}.wbLineTime{position:absolute;top:calc(80% + 4px);transform:translate(-50%);color:var(--muted);font:400 11px/14px var(--font);font-variant-numeric:tabular-nums;white-space:nowrap;pointer-events:none}.wbLineNow{position:absolute;width:26px;height:26px;transform:translate(-50%,-50%);border-radius:50%;background:var(--tile);pointer-events:none}.wbLineNow>svg,.wbLineGlyph>svg{display:block;width:100%;height:100%}.wbLineGlyph{position:absolute;top:calc(50% - 14px);width:28px;height:28px;transform:translate(-50%);pointer-events:none}.wbLineGlyph.wbFirst{transform:none}.wbLineGlyph.wbLast{transform:translate(-100%)}.wbSky .wbMidnight{position:absolute;top:0;bottom:0;width:0;border-left:1.5px dashed var(--text);opacity:.5;pointer-events:none}.wbDays{position:absolute;top:36px;left:0;z-index:1;display:flex;pointer-events:none}.wbDaySpan{flex:none;min-width:0}.wbDayName{position:sticky;left:8px;margin-left:8px;height:26px;min-height:0;padding:0 10px;border:0;background:color-mix(in srgb,var(--card) 82%,transparent);color:var(--text);font:600 13px/26px var(--font-tile);white-space:nowrap;cursor:pointer;pointer-events:auto}.wb .wbDayName{border-radius:13px!important;font-family:var(--font-tile)!important}.wbViews button{padding:2px 10px;font-size:13px}.wbBars .wbDayBars{flex:1 1 0;min-height:160px;display:flex;flex-direction:column;padding:0 18px;overflow-y:auto;overscroll-behavior:contain;scrollbar-width:thin}.wbBars.wbTabbed .wbDayBars{min-height:206px}.wbDayBar{flex:1 0 auto;display:grid;grid-template-columns:minmax(56px,auto) 40px 36px minmax(0,1fr) 36px;align-items:center;column-gap:12px;min-height:48px;box-shadow:inset 0 -.4px 0 var(--line)}.wbDayBar:last-child{box-shadow:none}.wbRangeDay{color:var(--text);font:600 14px/20px var(--font-tile);white-space:nowrap}.wbRangeLo{color:var(--muted);text-align:right;font:400 16px/20px var(--font);font-variant-numeric:tabular-nums}.wbRangeHi{color:var(--text);text-align:right;font:400 16px/20px var(--font-tile);font-variant-numeric:tabular-nums}.wbRangeTrack{position:relative;height:6px;border-radius:3px;background:var(--tile)}.wbRangeFill{position:absolute;top:0;right:0;bottom:0;left:0;border-radius:3px}.wbRangeNow{position:absolute;top:50%;width:10px;height:10px;margin:-5px 0 0 -5px;border-radius:50%;background:#fff;box-shadow:0 0 0 2px var(--card)}.wbSkyArt{position:absolute;top:0;height:100%}.wbSkyArt>canvas{display:block;width:100%;height:100%}.wbSkyArt>canvas.wbPixels{image-rendering:pixelated}.wbPrimaryV{font:400 18px/20px var(--font-tile);font-variant-numeric:tabular-nums}.wbSecondary{min-height:20px;color:var(--muted);font:400 15px/20px var(--font)}@container wb-card (width < 480px){.wbHourly :is(.wbHeader,.wbTabs){padding:0 8px}.wbBars .wbDayBars{padding:0 8px;min-height:380px}.wbBars.wbTabbed .wbDayBars{min-height:426px}.wbDayBar{column-gap:8px}.wbStripScroll{min-height:380px}}.wbSunSky{flex:1;min-height:0;display:flex;border-radius:16px;overflow:hidden;transition:background 1s ease}.wbSunSky svg{display:block;width:100%;height:100%;overflow:visible}.wbSunPath{fill:none;stroke:var(--wb-sun-line);stroke-opacity:.4;stroke-width:28.3}.wbHorizon{stroke:var(--wb-sun-line);stroke-opacity:.3;stroke-width:1}.wbSunTime{fill:var(--wb-sun-line);font-size:13px;font-weight:600;text-anchor:middle}.wbSunTime.wbNoon{dominant-baseline:central}.wbMoonBox{flex:1;min-height:0;display:flex;justify-content:center}.wbMoonArt{display:block;flex:none;width:auto;height:100%;max-width:100%}.wbMoonCaption{gap:8px}.wbMoonCaption span:first-child{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.wbMoonCaption span:last-child{flex:none}.wbMaria{fill:#7d7d78}.wbCrater{fill:#00000017}.wbRays{stroke:#fff;stroke-width:1.2;stroke-linecap:round;opacity:.16}.wbBrightSpots{fill:#fff;opacity:.25}.wbBrightCenter{fill:#f6f6f2;opacity:.75}.wbMottle{opacity:.3;mix-blend-mode:multiply}.wbGrain{opacity:.12;mix-blend-mode:multiply}.wbMoonNight{fill:#0a0a0ebf}.wbWind .wbVisual>svg{overflow:visible}.wbTick{stroke:var(--muted);stroke-width:2.5;stroke-linecap:round}.wbTick.wbMajor{stroke:var(--text);stroke-width:3}.wbLetter{fill:var(--muted);font-size:15px;font-weight:600;text-anchor:middle;dominant-baseline:central}.wbLetter.wbNorth{fill:var(--text)}.wbMarker{fill:var(--primary)}.wbDisc{fill:var(--text)}.wbSpeed{fill:var(--card);font-size:34px;font-weight:500;letter-spacing:-.5px;text-anchor:middle;dominant-baseline:central}.wbSpeedUnit{fill:var(--card);font-size:12px;font-weight:600;text-anchor:middle;dominant-baseline:central;opacity:.7}.wbWater{position:absolute;left:0;right:0;bottom:0;transition:height 1.2s ease}.wbWater .wbBody{position:absolute;top:0;right:0;bottom:0;left:0;background:linear-gradient(180deg,#b2e5fc2e,#81d4fa52,#4fc3f76b 70%,#03a9f48c);-webkit-mask-image:linear-gradient(180deg,transparent,#000 26px);mask-image:linear-gradient(180deg,transparent,#000 26px)}.wbWater .wbMist{position:absolute;left:-10%;right:-10%;bottom:calc(100% - 26px);height:60px;background:radial-gradient(ellipse at 50% 100%,#b2e5fc4d,#b2e5fc00 70%);filter:blur(8px)}.wbWater .wbHaze{position:absolute;width:80%;height:45%;border-radius:50%;background:radial-gradient(closest-side,#ffffff38,#fff0);filter:blur(10px);animation:wbDrift 16s ease-in-out infinite alternate}.wbWater .wbHaze.wbOne{left:-15%;top:8%}.wbWater .wbHaze.wbTwo{right:-20%;top:40%;animation-duration:21s;animation-direction:alternate-reverse}@keyframes wbDrift{0%{transform:translate(-12%)}to{transform:translate(18%)}}.wbWaterValue{flex:1;display:flex;align-items:flex-end}.wbSea{position:relative;flex:1;min-height:0;border-radius:16px;overflow:hidden;--wb-sea-inset:clamp(8.88px,calc(4.76cqw * var(--wb-k,1)),12px)}.wbSeaArt{position:absolute;top:0;right:0;bottom:0;left:0;display:block;width:100%;height:100%;image-rendering:pixelated}.wbSeaFact{position:absolute;top:clamp(7px,calc(3.97cqw * var(--wb-k,1)),10px);inset-inline:var(--wb-sea-inset);color:#26221e;font:600 clamp(9.44px,calc(5.47cqw * var(--wb-k,1)),13.78px)/1.23 var(--font-tile)}.wbSeaValue{position:absolute;bottom:var(--wb-sea-inset);inset-inline-start:var(--wb-sea-inset);color:#fff;text-shadow:0 0 2px rgba(0,0,0,.6),0 1px 3px rgba(0,0,0,.5)}.wbSeaValue .wbUnitV{color:inherit}.wbVu{display:block;width:100%;height:100%;min-height:0;overflow:visible}.wbVuZone{fill:none;stroke-width:12.3;stroke-linecap:butt}.wbVuTick{stroke:var(--muted);stroke-width:.95;stroke-linecap:round}.wbVuTick.wbMajor{stroke:var(--text);stroke-width:1.9}.wbVisual svg text.wbVuLabel{fill:var(--muted);font-family:"Alfarn",var(--font-tile);font-size:18.9px;font-weight:600;letter-spacing:.08em;text-anchor:middle;dominant-baseline:central}.wbVuNeedle{transform-box:view-box;transform-origin:100px 130px;transform:rotate(var(--wb-angle));animation:wbSwing 1.4s cubic-bezier(.3,1.6,.5,1);transition:transform 1s cubic-bezier(.3,1.6,.5,1)}.wbVuNeedle line{stroke:#e0574d;stroke-width:2;stroke-linecap:round}@keyframes wbSwing{0%{transform:rotate(-48deg)}}.wbVuHousing{fill:var(--tile)}.wbVuValue{fill:var(--text);font-size:30.2px;font-weight:600;text-anchor:middle;dominant-baseline:central}@media (prefers-reduced-motion:reduce){.wbWater .wbHaze,.wbVuNeedle{animation:none}}.wbTapeRow{flex:1;min-height:0;display:flex;align-items:stretch;gap:8px}.wbTapeValue{flex:1;display:flex;flex-direction:column;justify-content:center;min-width:0}.wbTapeUnit{color:var(--muted);font:300 clamp(13px,7.1cqw,18px)/1.25 var(--font-tile)}.wbTape{flex:none;width:40%;height:100%}.wbTapeTick{stroke:var(--text);stroke-width:2;stroke-linecap:round}.wbTapeLabel{fill:var(--text);font-size:15px;dominant-baseline:central}.wbTapeEnd{fill:var(--muted);font-size:14px;font-weight:600;text-anchor:middle;dominant-baseline:central}.wbTapeMarker{stroke:#e0574d;stroke-width:4;stroke-linecap:round}.wbCompare{flex:1;min-height:0;display:grid;grid-template-columns:minmax(0,1fr) calc(50% - 28px * var(--wb-k));grid-template-rows:minmax(0,1fr);gap:16px;align-items:stretch}.wbCompareText{display:flex;flex-direction:column;justify-content:flex-end;gap:4px;min-width:0}.wbCompareNumber{font:500 calc(26.4cqw * var(--wb-k)) / 1 var(--font-tile);letter-spacing:-.02em;white-space:nowrap}.wbCompareWords{color:var(--muted);font:300 clamp(14px,calc(7.1cqw * var(--wb-k)),18px) / 1.25 var(--font-tile)}.wbCompareTemps{margin-top:6px;font:400 clamp(12px,calc(5.6cqw * var(--wb-k)),14px) / 1.4 var(--font)}.wbTrend{position:relative;width:100%;height:100%;min-height:0}.wbTrendPlot{position:absolute;top:22px;right:0;bottom:24px;left:0}.wbTrendPlot svg{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;overflow:visible}.wbTrendLine{fill:none;stroke:var(--text);stroke-width:2;stroke-linejoin:round;stroke-linecap:round;opacity:.8}.wbTrendDot{position:absolute;width:7px;height:7px;margin:-3.5px 0 0 -3.5px;border-radius:50%;background:var(--card);box-shadow:0 0 0 2px var(--text)}.wbTrendDot.wbToday{width:11px;height:11px;margin:-5.5px 0 0 -5.5px;background:var(--primary);box-shadow:0 0 0 3px var(--card)}.wbAvgValue{position:absolute;transform:translate(-50%,calc(-100% - 8px));color:var(--muted);font:400 10px/1 var(--font-tile);white-space:nowrap}.wbAvgValue.wbToday{color:var(--text);font-size:12px;font-weight:600}.wbTrendAvg{position:absolute;right:0;transform:translateY(4px);color:var(--muted);font:400 10px/1 var(--font-tile)}.wbTrendDays{position:absolute;left:0;right:0;bottom:0;height:16px}.wbAvgDay{position:absolute;bottom:0;transform:translate(-50%);color:var(--muted);font:400 11px/16px var(--font-tile)}.wbAvgDay.wbToday{color:var(--text);font-weight:600}.wbAvgLine{stroke:var(--text);stroke-width:1;stroke-dasharray:3 4;opacity:.6}.wbCard.wbHc.wbAqOpen{padding:var(--inset);min-height:243px}.wbAqTiles{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}@container wb-card (width < 280px){.wbAqTiles{grid-template-columns:1fr}}.wbAq .wbGraph{gap:10px}.wbScale{position:relative;height:4px;border-radius:9999px}.wbScale i{position:absolute;top:50%;box-sizing:content-box;width:10px;height:10px;border-radius:50%;background-color:var(--text);border:2px solid var(--wb-scale-edge);transform:translate(-50%,-50%)}.wbZoned{gap:14px}.wbZone{position:relative;flex:none;height:198px;display:flex;align-items:center;justify-content:center;border-radius:16px;overflow:hidden}.wbCallouts{display:none;flex-direction:column;gap:4px;margin-top:-6px}.wbCallout{display:flex;justify-content:space-between;gap:12px;color:var(--muted);font:400 14px/20px var(--font)}.wbCallout>span:first-child{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.wbCallout>span:last-child{flex:none;color:var(--text);white-space:nowrap}.wbZone>.wbSunSky{flex:1;align-self:stretch;border-radius:0}.wbZone>.wbMoonBox{flex:none;height:150px}.wbBase .wbZone{align-items:flex-end;justify-content:flex-start}.wbZone>.wbTapeRow{align-self:stretch;height:100%}.wbItem[data-xl] .wbCallouts{display:flex}.wbUv .wbZone{display:block}.wbUvArt{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;display:block}.wbUvBig{position:absolute;right:0;bottom:0;display:flex;flex-direction:column;align-items:flex-end}.wbUvNum{font:500 64px/.9 var(--font-tile);letter-spacing:-.03em;color:var(--text);font-variant-numeric:tabular-nums}.wbUvWord{margin-top:6px;font:400 14px/20px var(--font);color:var(--muted)}.wbPollenAir{position:absolute;top:0;right:0;bottom:62px;left:0;overflow:hidden;pointer-events:none}.wbFloat{position:absolute;left:-12%;animation:wbFloat linear infinite}.wbBob{display:block;animation:wbBob ease-in-out infinite alternate}@keyframes wbFloat{0%{left:-12%}to{left:106%}}@keyframes wbBob{0%{transform:translateY(-6px) rotate(-14deg)}to{transform:translateY(8px) rotate(16deg)}}.wbFloat svg{display:block}.wbSeed svg{width:calc(20px * var(--s));height:calc(28px * var(--s))}.wbGrain svg{width:calc(10px * var(--s));height:calc(10px * var(--s))}.wbStem svg{width:calc(9px * var(--s));height:calc(26px * var(--s))}.wbSeed{color:var(--text);opacity:.7}.wbGrain{color:#e9c46a;opacity:.85}.wbStem{color:#a3b18a;opacity:.75}#app.light .wbGrain{color:#c99a1e}#app.light .wbStem{color:#7d8c5f}@media (prefers-reduced-motion:reduce){.wbFloat,.wbBob{animation:none}.wbFloat{left:var(--x)}}.wbPush{display:block;transition:transform .35s cubic-bezier(.2,.8,.3,1)}.wbCallout.wbAdvice>span:first-child{color:var(--text)}`, Up = `<main id="app"><div class="shell">
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
`, hn = {
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
}, fn = (n) => n < 0 ? 0 : n > 1 ? 1 : n, fc = (n, d, i) => n + (d - n) * i, Gd = (n) => {
  const d = String(n || "#000000").trim().replace("#", ""), i = d.length === 3 ? d.split("").map((p) => p + p).join("") : d;
  return [0, 2, 4].map((p) => parseInt(i.slice(p, p + 2), 16) || 0);
}, Yp = (n) => "#" + n.map((d) => Math.round(Math.max(0, Math.min(255, d))).toString(16).padStart(2, "0")).join(""), hc = {}, $e = (n, d, i) => {
  const p = n + d + i;
  return hc[p] || (hc[p] = Yp(Gd(n).map((g, w) => g + (Gd(d)[w] - g) * i)));
}, mc = {}, ad = (n) => mc[n] || (mc[n] = Gd(n)), Td = (n, d, i, p) => (g) => {
  if (g <= 0) return 0;
  if (g >= 1) return 1;
  let w = 0, x = 1, E = g;
  for (let k = 0; k < 18; k++)
    E = (w + x) / 2, 3 * (1 - E) * (1 - E) * E * n + 3 * (1 - E) * E * E * i + E * E * E < g ? w = E : x = E;
  return 3 * (1 - E) * (1 - E) * E * d + 3 * (1 - E) * E * E * p + E * E * E;
}, Zp = { std: Td(0.2, 0, 0, 1), acc: Td(0.3, 0, 1, 1), dec: Td(0, 0, 0, 1) };
function cd(n, d) {
  const i = String(n || "");
  return (i === "sunny" || i === "clear-night" ? "clear" : i === "partlycloudy" ? "partly" : i === "fog" ? "fog" : i === "lightning" || i === "lightning-rainy" ? "storm" : i === "snowy" || i === "snowy-rainy" ? "snow" : i === "rainy" || i === "pouring" || i === "hail" ? "rain" : "cloudy") + "/" + (i === "clear-night" || d ? "night" : "day");
}
function cp(n) {
  const d = { clear: [n.skyClearDay, n.skyClearNight], cloudy: [n.skyCloudyDay, n.skyCloudyNight], rain: [n.skyRainDay, n.skyRainNight], snow: [n.skySnowDay, n.skySnowNight], fog: [n.skyFogDay, n.skyFogNight] };
  return d.partly = [$e(d.clear[0], d.cloudy[0], 0.12), $e(d.clear[1], d.cloudy[1], 0.12)], d.storm = [$e(d.rain[0], "#000000", 0.22), $e(d.rain[1], "#000000", 0.22)], d;
}
const Ud = [[61, 29, 4.4], [73, 16, 2.9], [79, 57, 3.3], [21, 77, 2.5], [13, 20, 2.3]], Yd = [[29.35, 60.65], [43.04, 60.65], [56.74, 60.65]], Zd = [[30, 64], [44, 61], [58, 64], [37, 74], [51, 74]];
function Kd(n, d = hn) {
  const i = { ...hn, ...d }, p = cp(i), g = String(n).split("/"), w = p[g[0]] ? g[0] : "clear", x = g[1] === "night", E = p[w][x ? 1 : 0], k = {
    night: x,
    clearness: w === "clear" ? 1 : w === "partly" ? 0.7 : 0.25,
    sky: E,
    skyStops: [E],
    skyT: 0,
    sun: { x: 45, y: x ? 134 : 45, r: 33.26, o: 0 },
    moon: { x: 45, y: x ? 45 : 134, d: 64, o: 0 },
    cloud: { x: 134, y: 52.83, w: 58.7, o: 0, f: x ? 1 : 0 },
    stars: Ud.map(() => ({ o: 0 })),
    rain: Yd.map(() => ({ o: 0, dy: -16 })),
    snow: Zd.map(() => ({ o: 0, dy: -16 })),
    bolt: { o: 0, dy: -10 }
  }, B = (yt) => Ud.map(() => ({ o: yt }));
  return w === "clear" ? x ? (k.moon.o = 1, k.stars = B(1)) : k.sun.o = 1 : w === "partly" ? (k.cloud = { x: 52.83, y: 52.83, w: 58.7, o: 1, f: x ? 1 : 0 }, x ? (k.moon = { x: 34, y: 33, d: 48, o: 1 }, k.stars = B(0.7)) : k.sun = { x: 35.22, y: 33.26, r: 23.48, o: 1 }) : w === "cloudy" || w === "fog" ? (k.cloud = { x: 45, y: 42.99, w: 66.52, o: 1, f: x ? 1 : 0 }, x ? k.moon = { x: 40, y: 36, d: 40, o: 0 } : k.sun = { x: 40, y: 36, r: 20, o: 0 }) : (k.cloud = { x: 45, y: 33.26, w: 58.7, o: 1, f: 1 }, x ? k.moon = { x: 38, y: 28, d: 36, o: 0 } : k.sun = { x: 38, y: 28, r: 18, o: 0 }, w === "snow" ? k.snow = Zd.map(() => ({ o: 1, dy: 0 })) : k.rain = Yd.map((yt, ut) => ({ o: w === "storm" && ut === 1 ? 0 : 1, dy: 0 })), w === "storm" && (k.bolt = { o: 1, dy: 0 })), k;
}
const gc = {
  cloud: { enter: [0, 0.55, "dec"], leave: [0.25, 0.8, "acc"], stay: [0.1, 0.75, "std"] },
  body: { enter: [0.35, 0.9, "dec"], leave: [0.15, 0.65, "acc"], stay: [0.1, 0.75, "std"] },
  fx: { enter: [0.55, 1, "dec"], leave: [0, 0.35, "acc"], stay: [0.1, 0.75, "std"] },
  sky: [0.1, 0.8, "std"]
};
function Kp(n, d, i, p = hn, g = !1) {
  const w = { ...hn, ...p }, x = (Z, $) => Z > 0.01 && $ > 0.01 ? "stay" : Z > 0.01 ? "leave" : $ > 0.01 ? "enter" : "none", E = (Z, $, rt, Q) => {
    const V = Z[0] + $ * Q, W = Z[1] - (rt - 1 - $) * Q;
    return Zp[Z[2]](fn((i - V) / Math.max(1e-3, W - V)));
  }, k = (Z, $, rt, Q = 0, V = 1, W = 0) => {
    const dt = x(Z.o, $.o);
    if (dt === "none") return { ...$, o: 0 };
    const st = E(gc[rt][dt], Q, V, W), gt = {};
    for (const tt in $) gt[tt] = g && dt !== "stay" && tt !== "o" ? dt === "leave" ? Z[tt] : $[tt] : fc(Z[tt], $[tt], st);
    return gt;
  }, B = E(gc.sky, 0, 1, 0);
  let yt, ut;
  if (n.night !== d.night) {
    const Z = Math.min(n.clearness, d.clearness), $ = $e($e(n.sky, d.sky, 0.5), w.dusk, 0.6 * Z);
    yt = B < 0.5 ? $e(n.sky, $, B * 2) : $e($, d.sky, B * 2 - 1), ut = Z > 0.5 ? [n.sky, w.dusk, d.sky] : [n.sky, d.sky];
  } else
    yt = $e(n.sky, d.sky, B), ut = [n.sky, d.sky];
  return {
    night: i < 0.5 ? n.night : d.night,
    clearness: fc(n.clearness, d.clearness, i),
    sky: yt,
    skyStops: ut,
    skyT: B,
    sun: k(n.sun, d.sun, "body"),
    moon: k(n.moon, d.moon, "body"),
    cloud: k(n.cloud, d.cloud, "cloud"),
    stars: d.stars.map((Z, $) => k(n.stars[$], Z, "fx", $, d.stars.length, 0.05)),
    rain: d.rain.map((Z, $) => k(n.rain[$], Z, "fx", $, d.rain.length, 0.05)),
    snow: d.snow.map((Z, $) => k(n.snow[$], Z, "fx", $, d.snow.length, 0.05)),
    bolt: k(n.bolt, d.bolt, "fx")
  };
}
const $p = [
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
], un = (n, d) => ($p[(d & 7) * 8 + (n & 7)] + 0.5) / 64, Xp = 0, Jd = 1, Qd = 2, tc = 3, ec = 4, pn = 5, Ts = 6, $i = 7, ac = 8, id = (n, d) => d <= 0.6665 && ((n - 0.5) * (n - 0.5) + (d - 0.2877) * (d - 0.2877) <= 0.0824 || (n - 0.25) * (n - 0.25) + (d - 0.416) * (d - 0.416) <= 0.0625 || (n - 0.791) * (n - 0.791) + (d - 0.458) * (d - 0.458) <= 0.0437 || n >= 0.25 && n <= 0.791 && d >= 0.416), Jp = ["...##", "..##.", ".##..", "#####", "..##.", ".##..", ".#..."], Qp = [[7, 0], [0, 13], [5, 13], [2, 24], [11, 9], [6, 9], [9, 0]].map((n) => [n[0] * 13 / 11, n[1] * 28 / 24]), pp = (n, d, i) => {
  let p = !1;
  for (let g = 0, w = n.length - 1; g < n.length; w = g++) {
    const x = n[g], E = n[w];
    x[1] > i != E[1] > i && d < (E[0] - x[0]) * (i - x[1]) / (E[1] - x[1]) + x[0] && (p = !p);
  }
  return p;
};
function up(n, { size: d = 90, px: i = 2, oneBit: p = !1, colors: g = hn, ink: w = "#26221e", paper: x = "#fbf9f6", clock: E = 0, idle: k = !1 } = {}) {
  const B = { ...hn, ...g }, yt = Math.sin, ut = Math.PI * 2, Z = Math.max(6, Math.round(d / i)), $ = Z / 90, rt = k ? Math.floor(E / 100) * 100 : 0, Q = k ? yt(ut * rt / 3600) : 0, V = k ? 1.8 * yt(ut * rt / 6400) : 0, W = k ? 0.9 * yt(ut * rt / 4100) : 0, dt = k ? 0.8 * yt(ut * rt / 5200) : 0, st = rt / 3400 % 1, gt = k && n.bolt.o > 0.5 && (st < 0.04 || st > 0.08 && st < 0.11), tt = new Array(Z * Z), et = new Uint8Array(Z * Z), T = (M, _, L, P, ht) => {
    L == null || M < 0 || _ < 0 || M >= Z || _ >= Z || (P >= 1 || P > un(M + 5, _ + 3)) && (tt[_ * Z + M] = L, et[_ * Z + M] = ht);
  }, ot = (M, _, L, P) => {
    for (let ht = Math.max(0, Math.floor(_ - L) - 1); ht <= Math.min(Z - 1, _ + L + 1); ht++) for (let ft = Math.max(0, Math.floor(M - L) - 1); ft <= Math.min(Z - 1, M + L + 1); ft++) P(ft, ht, ft + 0.5 - M, ht + 0.5 - _);
  }, St = n.skyStops || [n.sky], U = n.skyT || 0;
  for (let M = 0; M < Z; M++) {
    const _ = n.night ? fn(1 - (M + 0.5) / (Z * 0.7)) * 0.85 : fn(((M + 0.5) / Z - 0.35) / 0.65) * 0.85;
    for (let L = 0; L < Z; L++) {
      let P = St[0];
      if (St.length > 1) {
        const ht = U * (St.length - 1), ft = Math.min(St.length - 2, Math.floor(ht));
        P = ht - ft > un(L, M) ? St[ft + 1] : St[ft];
      }
      _ > un(L + 2, M + 5) && (P = n.night ? $e(P, "#000000", 0.28) : $e(P, "#ffffff", 0.2)), tt[M * Z + L] = gt ? $e(P, "#ffffff", 0.25) : P;
    }
  }
  if (n.sun.o > 0.01) {
    const M = n.sun.x * $, _ = n.sun.y * $, L = Math.max(1, n.sun.r * $);
    if (k) {
      const P = L * (1.45 + 0.06 * Q), ht = $e(B.sun, "#ffffff", 0.55);
      if (ot(M, _, P, (ft, j, vt, Mt) => {
        const Qt = Math.sqrt(vt * vt + Mt * Mt);
        Qt > L && Qt < P && T(ft, j, ht, 0.26 * (1 - (Qt - L) / (P - L)) * n.sun.o, Xp);
      }), n.sun.o > 0.5) {
        const ft = Math.floor(rt / 500) % 2, j = Math.max(1, L * 0.22);
        for (let vt = 0; vt < 8; vt++) if (vt % 2 === ft) for (let Mt = L + 1.5; Mt < L + 1.5 + j; Mt += 0.7) T(Math.floor(M + Math.cos(vt * Math.PI / 4) * Mt), Math.floor(_ + Math.sin(vt * Math.PI / 4) * Mt), B.sun, n.sun.o, ac);
      }
    }
    ot(M, _, L, (P, ht, ft, j) => {
      if (ft * ft + j * j > L * L) return;
      const vt = ((ft * 0.643 + j * 0.766) / L + 1) / 2;
      T(P, ht, fn((vt - 0.62) / 0.38) > un(P, ht) ? B.sunEdge : B.sun, n.sun.o, Jd);
    });
  }
  if (Ud.forEach((M, _) => {
    const L = n.stars[_].o;
    if (L < 0.01) return;
    const P = Math.floor(M[0] * $), ht = Math.floor(M[1] * $), ft = k ? (Math.floor(rt / 300) + _ * 3) % 6 : 0;
    if (ft === 5) return;
    const j = Math.round(M[2] * $ * (ft === 4 ? 0.3 : ft < 2 ? 1 : 0.6));
    T(P, ht, B.star, L, $i);
    for (let vt = 1; vt <= j; vt++) {
      const Mt = vt === j && j > 1 ? $e(B.star, n.sky, 0.5) : B.star;
      T(P - vt, ht, Mt, L, $i), T(P + vt, ht, Mt, L, $i), T(P, ht - vt, Mt, L, $i), T(P, ht + vt, Mt, L, $i);
    }
  }), n.moon.o > 0.01) {
    const M = Math.max(1.5, n.moon.d * $ * 0.37), _ = n.moon.x * $, L = n.moon.y * $ + (k && dt > 0.4 ? -1 : 0), P = _ + 0.547 * M, ht = L - 0.503 * M, ft = 0.82 * M, j = $e(B.moon, "#ffffff", 0.6);
    ot(_, L, M, (vt, Mt, Qt, se) => {
      if (Qt * Qt + se * se > M * M) return;
      const ta = vt + 0.5 - P, Se = Mt + 0.5 - ht;
      ta * ta + Se * Se <= ft * ft || T(vt, Mt, fn((se + M) / (2 * M) * 1.1 - 0.1) > un(vt, Mt) ? B.moon : j, n.moon.o, Qd);
    });
  }
  const wt = Math.max(2, Math.round(15.65 * $)), Y = Math.max(1, Math.round(5.87 * $ * 0.5));
  Yd.forEach((M, _) => {
    const L = n.rain[_];
    let P = L.dy, ht = L.o;
    if (ht < 0.01) return;
    if (k) {
      const vt = (rt / 950 + _ / 3) % 1;
      P += -5 + vt * 14, ht *= vt < 0.18 ? vt / 0.18 : vt > 0.72 ? (1 - vt) / 0.28 : 1;
    }
    const ft = (M[0] + 3 + V) * $, j = (M[1] + P) * $;
    for (let vt = 0; vt < wt; vt++) for (let Mt = 0; Mt < Y; Mt++) T(Math.floor(ft - 0.208 * vt) + Mt, Math.floor(j) + vt, B.rain, ht, ec);
  });
  const zt = Math.max(0, Math.round(7.34 * $ / 2.6));
  if (Zd.forEach((M, _) => {
    const L = n.snow[_];
    let P = L.dy, ht = 0, ft = L.o;
    if (ft < 0.01) return;
    if (k) {
      const Mt = (rt / 3200 + _ / 5) % 1;
      P += -6 + Mt * 14, ht = 1.5 * yt(ut * (Mt * 1.5 + _ / 5)), ft *= Mt < 0.2 ? Mt / 0.2 : Mt > 0.75 ? (1 - Mt) / 0.25 : 1;
    }
    const j = Math.floor((M[0] + 3.67 + ht + V) * $), vt = Math.floor((M[1] + 3.67 + P) * $);
    T(j, vt, B.snow, ft, pn);
    for (let Mt = 1; Mt <= zt; Mt++)
      T(j - Mt, vt, B.snow, ft, pn), T(j + Mt, vt, B.snow, ft, pn), T(j, vt - Mt, B.snow, ft, pn), T(j, vt + Mt, B.snow, ft, pn), zt > 1 && Mt < zt && (T(j - Mt, vt - Mt, B.snow, ft, pn), T(j + Mt, vt - Mt, B.snow, ft, pn), T(j - Mt, vt + Mt, B.snow, ft, pn), T(j + Mt, vt + Mt, B.snow, ft, pn));
  }), n.bolt.o > 0.01)
    if (Z >= 30) {
      const M = 39 + V, _ = 50 + n.bolt.dy;
      for (let L = Math.floor(_ * $); L <= (_ + 28) * $; L++) for (let P = Math.floor(M * $); P <= (M + 13) * $; P++)
        pp(Qp, (P + 0.5) / $ - M, (L + 0.5) / $ - _) && T(P, L, B.sun, n.bolt.o, Ts);
    } else {
      const M = Z / 18, _ = 7, L = 10 + Math.round(n.bolt.dy * 0.2);
      Jp.forEach((P, ht) => P.split("").forEach((ft, j) => {
        if (ft !== "#") return;
        const vt = Math.floor((_ + j) * M), Mt = Math.floor((L + ht) * M);
        for (let Qt = Mt; Qt < Math.max(Mt + 1, Math.floor((L + ht + 1) * M)); Qt++) for (let se = vt; se < Math.max(vt + 1, Math.floor((_ + j + 1) * M)); se++) T(se, Qt, B.sun, n.bolt.o, Ts);
      }));
    }
  if (n.cloud.o > 0.01) {
    const M = Math.max(3, n.cloud.w * $), _ = M * 0.6665, L = (n.cloud.x + V) * $ - M / 2, P = (n.cloud.y + W) * $ - _ / 2, ht = $e(B.cloudDay, B.cloudNight, Math.round(n.cloud.f * 4) / 4), ft = $e(ht, "#000000", 0.16);
    for (let j = Math.max(0, Math.floor(P) - 1); j <= Math.min(Z - 1, P + _ + 1); j++) for (let vt = Math.max(0, Math.floor(L) - 1); vt <= Math.min(Z - 1, L + M + 1); vt++) {
      const Mt = (vt + 0.5 - L) / M, Qt = (j + 0.5 - P) / M;
      id(Mt, Qt) && T(vt, j, !id(Mt, Qt + 1 / M) || fn((Qt - 0.42) / 0.25) * 0.8 > un(vt, j) ? ft : ht, n.cloud.o, tc);
    }
  }
  return fp(tt, et, Z, Z, { oneBit: p, ink: w, paper: x, snowInk: !n.night });
}
function fp(n, d, i, p, { oneBit: g, ink: w, paper: x, snowInk: E }) {
  const k = new Uint8ClampedArray(i * p * 4), B = ad(w), yt = ad(x);
  for (let ut = 0; ut < p; ut++) for (let Z = 0; Z < i; Z++) {
    const $ = ut * i + Z, rt = d[$];
    if (n[$] == null) continue;
    let Q = ad(n[$]);
    if (g) {
      let V;
      rt === ec || rt === ac ? V = !0 : rt === pn ? V = E : rt === $i || rt === Ts ? V = !1 : V = Math.round((0.2126 * Q[0] + 0.7152 * Q[1] + 0.0722 * Q[2]) / 255 * 4) / 4 <= un(Z, ut), (rt === Jd || rt === Qd || rt === tc || rt === Ts) && (Z > 0 && d[$ - 1] !== rt || Z < i - 1 && d[$ + 1] !== rt || ut > 0 && d[$ - i] !== rt || ut < p - 1 && d[$ + i] !== rt) && (V = !0), Q = V ? B : yt;
    }
    k[$ * 4] = Q[0], k[$ * 4 + 1] = Q[1], k[$ * 4 + 2] = Q[2], k[$ * 4 + 3] = 255;
  }
  return { w: i, h: p, data: k };
}
const tu = { clear: 0, partly: 0.35, cloudy: 0.85, fog: 0.9, rain: 1, storm: 1, snow: 0.9 }, eu = (n) => cd(n, !1).split("/")[0], Ad = (n) => () => {
  n |= 0, n = n + 1831565813 | 0;
  let d = Math.imul(n ^ n >>> 15, 1 | n);
  return d = d + Math.imul(d ^ d >>> 7, 61 | d) ^ d, ((d ^ d >>> 14) >>> 0) / 4294967296;
}, au = "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", nu = "M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", ou = "M0 -1L0.2687 -0.2687L1 0L0.2687 0.2687L0 1L-0.2687 0.2687L-1 0L-0.2687 -0.2687Z", iu = "M7 0L0 13L5 13L2 24L11 9L6 9L9 0Z", ru = [[7, 0], [0, 13], [5, 13], [2, 24], [11, 9], [6, 9], [9, 0]], su = [".##", "##.", ".#.", "#.."];
function hp(n, { width: d, height: i, colors: p, wave: g = 0.38, soft: w = 6, glow: x = 0.6 }) {
  const E = { ...hn, dawn: "#e5a77e", ...p }, k = cp(E), B = d, yt = i, ut = B / 6, Z = ut / 2, $ = Math.PI * 2, rt = n.length ? n : [{ cond: "cloudy", night: !1 }], Q = [...Array(12)].map((st, gt) => {
    const tt = rt[Math.min(gt, rt.length - 1)], et = eu(tt.cond), T = gt % 2 === 1;
    return { cond: tt.cond, k: et, night: T, sky: k[et][T ? 1 : 0], cover: tu[et] };
  }), V = (st) => yt * (0.5 - g * Math.cos($ * (st / ut - 0.25)));
  return { C: E, S: Q, W: B, H: yt, cw: ut, sw: Z, TAU: $, yb: V, side: (st, gt, tt) => {
    const et = (st ? V(gt) - tt : tt - V(gt)) / Math.max(3, w * 1.4) + 0.5;
    return et <= 0 ? 0 : et >= 1 ? 1 : et;
  }, glowAt: (st) => {
    const gt = ((st / ut - 0.25) % 1 + 1) % 1, tt = Math.max(0, Math.min(5, Math.round(st / ut - 0.25))), et = Math.max(0, Math.min(5, Math.round(st / ut - 0.75))), T = 1 - (Q[2 * tt].cover + Q[2 * et + 1].cover) / 2, ot = Math.sin(Math.PI * Math.min(1, Math.max(0, V(st) / yt)));
    return { c: gt < 0.5 ? E.dusk : E.dawn, a: x * (0.2 + 0.8 * T) * ot * ot };
  }, soft: w, tw: ut * 0.3, sy: yt / 90 };
}
function mp(n, { clock: d = 0, ambient: i = !1, seed: p = 1 }) {
  const { S: g, sw: w, side: x, C: E, TAU: k, sy: B } = n, yt = d, ut = { stars: [], suns: [], moons: [], clouds: [], drops: [], flakes: [], fogs: [], bolts: [] };
  return g.forEach((Z, $) => {
    const rt = Ad(p * 977 + $ * 131 + 7), Q = ($ + 0.5) * w, V = Z.night ? { clear: 9, partly: 5, cloudy: 2, fog: 0, rain: 0, storm: 0, snow: 1 }[Z.k] : 0;
    for (let W = 0; W < V; W++) {
      const dt = Q + (rt() - 0.5) * w * 1.6, st = (6 + rt() * 76) * B, gt = rt() < 0.35, tt = 1.8 + rt() * 1.6, et = x(!0, dt, st) * (gt ? 0.95 : 0.7) * (i ? 0.6 + 0.4 * Math.sin(k * yt / 2600 + W * 1.7 + $) : 1);
      et >= 0.03 && ut.stars.push({ x: dt, y: st, big: gt, size: tt, o: et });
    }
    if (!Z.night && (Z.k === "clear" || Z.k === "partly")) {
      const W = Q + (rt() - 0.5) * w * 0.3, dt = Math.min(15, w * 0.29);
      ut.suns.push({ x: W, y: 32 * B, rad: dt, halo: dt * 2.8 * (i ? 1 + 0.07 * Math.sin(k * yt / 3600 + $) : 1) });
    }
    if (Z.night && (Z.k === "clear" || Z.k === "partly")) {
      const W = Math.min(0.78, w * 0.55 / 34), dt = Q - 23 * W + (rt() - 0.5) * w * 0.2;
      ut.moons.push({ x: dt + 23 * W, y: (4 + (i ? 0.8 * Math.sin(k * yt / 5200 + $) : 0)) * B + 23 * W, d: 46 * W });
    }
  }), g.forEach((Z, $) => {
    const rt = { clear: 0, partly: 1, cloudy: 3, fog: 0, rain: 3, storm: 3, snow: 2 }[Z.k];
    if (!rt) return;
    const Q = Ad(p * 577 + $ * 71 + 3), V = ($ + 0.5) * w, W = Z.k === "rain" || Z.k === "storm" || Z.night ? E.cloudNight : E.cloudDay, dt = Z.night ? 0.82 : Z.k === "storm" ? 0.75 : 1;
    for (let st = 0; st < rt; st++) {
      const gt = w / 46 * (Z.k === "partly" ? 0.85 : 0.75 + Q() * 0.55), tt = V + (Z.k === "partly" ? w * 0.12 : (Q() - 0.5) * w * 1.05), et = (Z.k === "partly" ? 40 : 6 + Q() * 26) * B, T = i ? 2.5 * Math.sin(k * yt / 9e3 + $ * 1.3 + st * 2.1) : 0, ot = i ? 0.9 * Math.sin(k * yt / 6100 + $ + st) : 0;
      ut.clouds.push({ x: tt - 23 * gt + T, y: et - 15.33 * gt + ot, w: 46 * gt, h: 30.66 * gt, fill: W, o: dt * (rt > 1 && st === 0 ? 0.85 : 1) });
    }
  }), g.forEach((Z, $) => {
    const rt = Ad(p * 313 + $ * 29 + 11), Q = ($ + 0.5) * w, V = Z.cond === "pouring" ? 16 : Z.cond === "rainy" || Z.cond === "hail" ? 9 : Z.cond === "lightning-rainy" ? 12 : Z.cond === "snowy-rainy" ? 5 : 0;
    for (let dt = 0; dt < V; dt++) {
      let st = Q + (rt() - 0.5) * w * 1.05, gt = 44 + rt() * 36, tt = 1;
      if (i) {
        const T = ((gt - 44 + yt * 0.04) % 36 + 36) % 36;
        st -= 0.21 * (T - (gt - 44)), gt = 44 + T, tt = Math.min(1, T / 6, (36 - T) / 6);
      }
      gt *= B;
      const et = x(Z.night, st, gt) * tt;
      et >= 0.05 && ut.drops.push({ x: st, y: gt, o: et });
    }
    const W = Z.cond === "snowy" ? 11 : Z.cond === "snowy-rainy" ? 6 : 0;
    for (let dt = 0; dt < W; dt++) {
      let st = Q + (rt() - 0.5) * w * 1.05, gt = 40 + rt() * 44, tt = 1;
      if (i) {
        const T = ((gt - 40 + yt * 9e-3) % 44 + 44) % 44;
        gt = 40 + T, st += 1.6 * Math.sin(k * yt / 2800 + dt * 1.9 + $), tt = Math.min(1, T / 6, (44 - T) / 6);
      }
      gt *= B;
      const et = x(Z.night, st, gt) * tt;
      et >= 0.05 && ut.flakes.push({ x: st, y: gt, o: et });
    }
    if (Z.k === "fog") {
      const dt = Z.night ? "#c8ccd6" : "#ffffff", st = Z.night ? 0.28 : 0.62, gt = i ? 4 * Math.sin(k * yt / 8e3 + $) : 0;
      for (let tt = 0; tt < 4; tt++) ut.fogs.push({ x: Q - w * 0.75 + tt % 2 * w * 0.18 + (tt % 2 ? gt : -gt), y: (30 + tt * 13) * B, w: w * 1.3, c: dt, a: st });
    }
    if (Z.k === "storm") {
      const dt = (yt / 3400 + $ * 0.37) % 1;
      ut.bolts.push({ x: Q + (rt() - 0.5) * w * 0.3 - 5, y: 36 * B, o: i && !(dt < 0.05 || dt > 0.09 && dt < 0.12) ? 0.8 : 1 });
    }
  }), ut;
}
function lu(n, d, i, p, g, w, x, E) {
  const { S: k, C: B, cw: yt, yb: ut, glowAt: Z, soft: $, tw: rt, sy: Q } = n, V = new Array(i * p), W = new Uint8Array(i * p), dt = new Uint8Array(i * p), st = (M, _, L, P, ht) => {
    L == null || M < 0 || _ < 0 || M >= i || _ >= p || (P >= 1 || P > un(M + 5, _ + 3)) && (V[_ * i + M] = L, W[_ * i + M] = ht);
  }, gt = (M, _, L, P) => {
    for (let ht = Math.max(0, Math.floor(_ - L) - 1); ht <= Math.min(p - 1, _ + L + 1); ht++) for (let ft = Math.max(0, Math.floor(M - L) - 1); ft <= Math.min(i - 1, M + L + 1); ft++) P(ft, ht, ft + 0.5 - M, ht + 0.5 - _);
  }, tt = (M, _, L) => {
    for (let ht = 0; ht < M.length - 1; ht++) {
      const ft = (ht + _) * yt;
      if (L < ft - rt / 2) return [M[ht], M[ht], 0];
      if (L <= ft + rt / 2) return [M[ht], M[ht + 1], (L - ft + rt / 2) / rt];
    }
    const P = M[M.length - 1];
    return [P, P, 0];
  }, et = k.filter((M) => !M.night).map((M) => M.sky), T = k.filter((M) => M.night).map((M) => M.sky), ot = $ / w, St = 16 * Q / w;
  for (let M = 0; M < i; M++) {
    const _ = (M + 0.5) * g, L = ut(_) / w, P = tt(et, 0.75, _), ht = tt(T, 1.25, _), ft = Z(_);
    for (let j = 0; j < p; j++) {
      const vt = un(M, j), Mt = j + 0.5 - L, Qt = (ot > 0.01 ? fn(0.5 + Mt / ot) : Mt > 0 ? 1 : 0) > vt;
      let se = Qt ? P[2] > vt ? P[1] : P[0] : ht[2] > vt ? ht[1] : ht[0];
      (Qt ? fn(((j + 0.5) / p - 0.45) / 0.55) * 0.7 : fn(1 - (j + 0.5) / (p * 0.55)) * 0.7) > un(M + 2, j + 5) && (se = Qt ? $e(se, "#ffffff", 0.18) : $e(se, "#000000", 0.25)), Qt && Mt >= 0 && Mt < St && ft.a * 1.3 * (1 - Mt / St) > un(M + 6, j + 1) && (se = ft.c), V[j * i + M] = se, dt[j * i + M] = Qt ? 0 : 1;
    }
  }
  const U = $e(B.sun, "#ffffff", 0.55), wt = $e(B.moon, "#ffffff", 0.6);
  d.stars.forEach((M) => {
    const _ = Math.floor(M.x / g), L = Math.floor(M.y / w);
    if (_ < 0 || L < 0 || _ >= i || L >= p || !dt[L * i + _] || M.o < 0.15) return;
    const P = M.o > 0.45 ? B.star : $e(B.star, V[L * i + _], 0.5), ht = M.big && M.o > 0.6 ? Math.floor(M.size / g) : 0;
    st(_, L, P, 1, $i);
    for (let ft = 1; ft <= ht; ft++) [[_ - ft, L], [_ + ft, L], [_, L - ft], [_, L + ft]].forEach((j) => {
      j[0] >= 0 && j[1] >= 0 && j[0] < i && j[1] < p && dt[j[1] * i + j[0]] && st(j[0], j[1], P, 1, $i);
    });
  }), d.suns.forEach((M) => {
    const _ = Math.max(1.5, M.rad / g), L = M.x / g, P = M.y / w, ht = M.halo / g * 0.85;
    if (gt(L, P, ht, (ft, j, vt, Mt) => {
      const Qt = Math.sqrt(vt * vt + Mt * Mt);
      Qt > _ && Qt < ht && !dt[j * i + ft] && st(ft, j, U, 0.3 * (1 - (Qt - _) / (ht - _)), 0);
    }), E) {
      const ft = Math.floor(x / 500) % 2, j = Math.max(1, _ * 0.3);
      for (let vt = 0; vt < 8; vt++) if (vt % 2 === ft) for (let Mt = _ + 1.2; Mt < _ + 1.2 + j; Mt += 0.7) st(Math.floor(L + Math.cos(vt * Math.PI / 4) * Mt), Math.floor(P + Math.sin(vt * Math.PI / 4) * Mt), B.sun, 1, ac);
    }
    gt(L, P, _, (ft, j, vt, Mt) => {
      vt * vt + Mt * Mt <= _ * _ && st(ft, j, fn(((Mt / _ + 1) / 2 - 0.6) / 0.4) > un(ft, j) ? B.sunEdge : B.sun, 1, Jd);
    });
  }), d.moons.forEach((M) => {
    const _ = Math.max(1.5, M.d * 0.37 / g), L = M.x / g, P = M.y / w, ht = L + 0.547 * _, ft = P - 0.503 * _, j = 0.82 * _;
    gt(L, P, _, (vt, Mt, Qt, se) => {
      if (Qt * Qt + se * se > _ * _) return;
      const ta = vt + 0.5 - ht, Se = Mt + 0.5 - ft;
      ta * ta + Se * Se > j * j && st(vt, Mt, fn((se + _) / (2 * _) * 1.1 - 0.1) > un(vt, Mt) ? B.moon : wt, 1, Qd);
    });
  }), d.clouds.forEach((M) => {
    const _ = Math.max(3, M.w / g), L = _ * 0.6665, P = M.x / g, ht = M.y / w, ft = $e(M.fill, "#000000", 0.16);
    for (let j = Math.max(0, Math.floor(ht) - 1); j <= Math.min(p - 1, ht + L + 1); j++) for (let vt = Math.max(0, Math.floor(P) - 1); vt <= Math.min(i - 1, P + _ + 1); vt++) {
      const Mt = (vt + 0.5 - P) / _, Qt = (j + 0.5 - ht) / _;
      id(Mt, Qt) && st(vt, j, !id(Mt, Qt + 1 / _) || fn((Qt - 0.42) / 0.25) * 0.8 > un(vt, j) ? ft : M.fill, M.o, tc);
    }
  }), d.fogs.forEach((M) => {
    const _ = Math.floor(M.y / w), L = Math.max(_, Math.floor((M.y + 6 * Q) / w) - 1), P = Math.floor(M.x / g), ht = Math.floor((M.x + M.w) / g);
    for (let ft = _; ft <= L; ft++) for (let j = P; j <= ht; j++) {
      const vt = (j - P) / Math.max(1, ht - P);
      st(j, ft, M.c, M.a * (vt < 0.25 ? vt / 0.25 : vt > 0.75 ? (1 - vt) / 0.25 : 1), 0);
    }
  });
  const Y = Math.max(2, Math.round(9 / w));
  d.drops.forEach((M) => {
    const _ = M.x / g, L = Math.floor(M.y / w);
    for (let P = 0; P < Y; P++) st(Math.floor(_ - 0.208 * P * w / g), L + P, B.rain, M.o, ec);
  });
  const zt = Math.max(0, Math.round(4.4 / g / 2.6));
  return d.flakes.forEach((M) => {
    const _ = Math.floor(M.x / g), L = Math.floor(M.y / w);
    st(_, L, B.snow, M.o, pn);
    for (let P = 1; P <= zt; P++)
      st(_ - P, L, B.snow, M.o, pn), st(_ + P, L, B.snow, M.o, pn), st(_, L - P, B.snow, M.o, pn), st(_, L + P, B.snow, M.o, pn);
  }), d.bolts.forEach((M) => {
    if (g <= 3.5)
      for (let _ = Math.floor(M.y / w); _ <= (M.y + 24) / w; _++) for (let L = Math.floor(M.x / g); L <= (M.x + 11) / g; L++)
        pp(ru, (L + 0.5) * g - M.x, (_ + 0.5) * w - M.y) && st(L, _, B.sun, 1, Ts);
    else {
      const _ = Math.round(M.x / g), L = Math.round(M.y / w);
      su.forEach((P, ht) => P.split("").forEach((ft, j) => {
        ft === "#" && st(_ + j, L + ht, B.sun, 1, Ts);
      }));
    }
  }), { col: V, ids: W };
}
function du(n, d) {
  const i = d.px, p = Math.max(6, Math.round(d.width / i)), g = Math.max(6, Math.round(d.height / i)), w = d.width / p, x = d.height / g, E = d.ambient ? Math.floor((d.clock || 0) / 100) * 100 : 0, k = ($) => {
    const rt = hp($, d);
    return lu(rt, mp(rt, { clock: E, ambient: d.ambient, seed: d.seed }), p, g, w, x, E, d.ambient);
  }, B = k(n), yt = d.reveal == null ? 1 : fn(d.reveal);
  let ut = B.col, Z = B.ids;
  if (yt < 1) {
    const $ = d.prev ? k(d.prev) : null, rt = yt * (p + 12);
    ut = new Array(p * g), Z = new Uint8Array(p * g);
    for (let Q = 0; Q < p * g; Q++) {
      const V = Q % p, W = Q / p | 0;
      (d.reduce ? yt : fn((rt - V) / 12)) > un(V, W) ? (ut[Q] = B.col[Q], Z[Q] = B.ids[Q]) : $ ? (ut[Q] = $.col[Q], Z[Q] = $.ids[Q]) : (ut[Q] = null, Z[Q] = 255);
    }
  }
  return fp(ut, Z, p, g, { oneBit: d.oneBit, ink: d.ink, paper: d.paper, snowInk: !1 });
}
function cu(n, d, i) {
  const p = i.width, g = i.height, w = i.reveal == null ? 1 : fn(i.reveal), x = (Z, $) => {
    const rt = hp($, i);
    pu(Z, rt, mp(rt, i));
  };
  if (n.clearRect(0, 0, p, g), w >= 1) {
    x(n, d);
    return;
  }
  if (i.prev && x(n, i.prev), i.reduce) {
    n.save(), n.globalAlpha = w, x(n, d), n.restore();
    return;
  }
  const E = n.canvas, k = E.__wxOff || (E.__wxOff = document.createElement("canvas"));
  (k.width !== E.width || k.height !== E.height) && (k.width = E.width, k.height = E.height);
  const B = k.getContext("2d");
  B.setTransform(n.getTransform()), B.clearRect(0, 0, p, g), x(B, d);
  const yt = w * (p + 64) - 64, ut = B.createLinearGradient(yt, 0, yt + 64, 0);
  ut.addColorStop(0, "rgba(0,0,0,1)"), ut.addColorStop(1, "rgba(0,0,0,0)"), B.globalCompositeOperation = "destination-in", B.fillStyle = ut, B.fillRect(0, 0, p, g), B.globalCompositeOperation = "source-over", n.save(), n.setTransform(1, 0, 0, 1, 0, 0), n.drawImage(k, 0, 0), n.restore();
}
function pu(n, d, i) {
  const { W: p, H: g, S: w, C: x, cw: E, yb: k, glowAt: B, soft: yt, tw: ut, sy: Z } = d, $ = (U, wt) => {
    const Y = ad(U);
    return "rgba(" + Y[0] + "," + Y[1] + "," + Y[2] + "," + Math.max(0, Math.min(1, wt)).toFixed(3) + ")";
  }, rt = (U, wt) => {
    const Y = n.createLinearGradient(0, 0, p, 0);
    Y.addColorStop(0, U[0]);
    for (let zt = 0; zt < U.length - 1; zt++) {
      const M = (zt + wt) * E, _ = (M - ut / 2) / p, L = (M + ut / 2) / p;
      _ > 0 && _ < 1 && Y.addColorStop(_, U[zt]), L > 0 && L < 1 && Y.addColorStop(L, U[zt + 1]);
    }
    return Y.addColorStop(1, U[U.length - 1]), Y;
  }, Q = Math.max(24, Math.ceil(p / 4)), V = (U, wt) => {
    n.beginPath();
    for (let Y = 0; Y <= Q; Y++) {
      const zt = p * Y / Q, M = U == null ? 0 : k(zt) + U;
      Y ? n.lineTo(zt, M) : n.moveTo(zt, M);
    }
    for (let Y = Q; Y >= 0; Y--) {
      const zt = p * Y / Q;
      n.lineTo(zt, k(zt) + wt);
    }
    n.closePath(), n.fill();
  };
  n.save(), n.fillStyle = rt(w.filter((U) => !U.night).map((U) => U.sky), 0.75), n.fillRect(0, 0, p, g);
  const W = n.createLinearGradient(0, 0, p, 0);
  for (let U = 0; U <= 64; U++) {
    const wt = B(p * U / 64);
    W.addColorStop(U / 64, $(wt.c, Math.min(1, wt.a)));
  }
  n.fillStyle = W;
  for (let U = 0; U < 8; U++)
    n.globalAlpha = 1 - U / 8, V(U * 2 * Z, (U + 1) * 2 * Z);
  n.fillStyle = rt(w.filter((U) => U.night).map((U) => U.sky), 1.25);
  const dt = Math.max(0.5, yt), st = 6;
  n.globalAlpha = 1, V(null, -dt);
  for (let U = 0; U < st; U++)
    n.globalAlpha = 1 - (U + 0.5) / st, V(-dt + 2 * dt * U / st, -dt + 2 * dt * (U + 1) / st);
  n.globalAlpha = 1;
  const gt = new Path2D(ou), tt = new Path2D(nu), et = new Path2D(au), T = new Path2D(iu);
  n.fillStyle = x.star, i.stars.forEach((U) => {
    n.globalAlpha = U.o, U.big ? (n.save(), n.translate(U.x, U.y), n.scale(U.size, U.size), n.fill(gt), n.restore()) : (n.beginPath(), n.arc(U.x, U.y, 0.8, 0, Math.PI * 2), n.fill());
  }), n.globalAlpha = 1;
  const ot = $e(x.sun, "#ffffff", 0.55);
  i.suns.forEach((U) => {
    const wt = n.createRadialGradient(U.x, U.y, 0, U.x, U.y, U.halo);
    wt.addColorStop(0, $(ot, 0.42)), wt.addColorStop(0.7, $(ot, 0)), n.fillStyle = wt, n.beginPath(), n.arc(U.x, U.y, U.halo, 0, Math.PI * 2), n.fill();
    const Y = n.createLinearGradient(0, U.y - U.rad, 0, U.y + U.rad);
    Y.addColorStop(0.6, x.sun), Y.addColorStop(1, x.sunEdge), n.fillStyle = Y, n.beginPath(), n.arc(U.x, U.y, U.rad, 0, Math.PI * 2), n.fill();
  });
  const St = $e(x.moon, "#ffffff", 0.6);
  i.moons.forEach((U) => {
    n.save(), n.translate(U.x - U.d / 2, U.y - U.d / 2), n.scale(U.d / 46, U.d / 46);
    const wt = n.createLinearGradient(0, 6, 0, 40);
    wt.addColorStop(0, St), wt.addColorStop(1, x.moon), n.fillStyle = wt, n.fill(tt), n.restore();
  }), i.clouds.forEach((U) => {
    n.save(), n.globalAlpha = U.o, n.translate(U.x, U.y), n.scale(U.w / 46, U.h / 30.66), n.translate(-4, -9.67), n.fillStyle = U.fill, n.fill(et), n.restore();
  }), i.fogs.forEach((U) => {
    const wt = n.createLinearGradient(U.x, 0, U.x + U.w, 0);
    wt.addColorStop(0, $(U.c, 0)), wt.addColorStop(0.25, $(U.c, U.a)), wt.addColorStop(0.75, $(U.c, U.a)), wt.addColorStop(1, $(U.c, 0)), n.fillStyle = wt, n.fillRect(U.x, U.y, U.w, 6 * Z);
  }), n.fillStyle = x.rain, i.drops.forEach((U) => {
    n.save(), n.globalAlpha = U.o, n.translate(U.x, U.y), n.rotate(12 * Math.PI / 180), n.fillRect(-1.5, 0, 3, 9), n.restore();
  }), n.fillStyle = x.snow, i.flakes.forEach((U) => {
    n.globalAlpha = U.o, n.beginPath(), n.arc(U.x, U.y, 2.2, 0, Math.PI * 2), n.fill();
  }), n.fillStyle = x.sun, i.bolts.forEach((U) => {
    n.save(), n.globalAlpha = U.o, n.translate(U.x, U.y), n.fill(T), n.restore();
  }), n.restore();
}
function uu(n, d) {
  var rc, sc, lc, dc, cc, pc, uc;
  const i = (e) => n.getElementById(e), p = i("workoutView"), g = i("workoutNameInput");
  let w = !0;
  const x = i("homeClock");
  function E() {
    x && (x.textContent = new Intl.DateTimeFormat(void 0, { hour: "2-digit", minute: "2-digit" }).format(/* @__PURE__ */ new Date()));
  }
  E(), setInterval(E, 15e3);
  const k = i("createFlow"), B = i("createMovementsSlot"), yt = i("createTimingSlot"), ut = i("createFinishSlot"), Z = i("movementStepSummary"), $ = i("timingStepSummary"), rt = i("finishStepSummary"), Q = i("continueToTiming"), V = i("continueToFinish"), W = i("finishMoveButton");
  let dt = !1, st = [];
  function gt(e) {
    !e || st.some((r) => r.node === e) || st.push({ node: e, parent: e.parentNode, next: e.nextSibling });
  }
  function tt(e, r) {
    e && (gt(e), r.appendChild(e));
  }
  function et() {
    [...st].reverse().forEach(({ node: e, parent: r, next: s }) => {
      r && (s && s.parentNode === r ? r.insertBefore(e, s) : r.appendChild(e));
    }), st = [];
  }
  function T(e) {
    n.querySelectorAll(".createStep").forEach((r) => {
      r.classList.toggle("active", r.dataset.createStep === e);
    }), e === "timing" && (dt = !0), ot();
  }
  function ot() {
    var ct, mt;
    if (!Kt) return;
    ee[Jt];
    const e = la.filter((pt) => !pt.hidden), r = e.filter((pt) => pt.kind !== "rest").length, s = e.filter((pt) => pt.kind === "rest").length;
    Z.textContent = r ? r + " movement" + (r === 1 ? "" : "s") + (s ? " · " + s + " rest" + (s === 1 ? "" : "s") : "") : "No movements yet";
    const f = r > 0, b = n.querySelector('[data-open-step="timing"]'), A = n.querySelector('[data-open-step="finish"]');
    b.disabled = !f, Q.disabled = !f, $.textContent = f ? Bn(_.value) + " · " + pa(L.value) + " movement · " + pa(P.value) + " rest" : "Add a movement first", A.disabled = !(f && dt);
    const N = ((g == null ? void 0 : g.value) || "").trim(), O = [];
    (ct = i("includeWarmupPreset")) != null && ct.checked && O.push("warm-up"), (mt = i("includeCooldownPreset")) != null && mt.checked && O.push("cooldown"), rt.textContent = N ? N + (O.length ? " · " + O.join(" + ") : "") : O.length ? O.join(" + ") : "Name and optional extras";
  }
  function St() {
    var It, te, Ot;
    k.hidden = !1, dt = !1;
    const e = n.querySelector(".editNameRow"), r = i("createMoveOptions"), s = n.querySelector(".timeTiles"), f = i("routineSummaryModal"), b = n.querySelector(".tempoRevealRow"), A = i("tempoExperiment"), N = (It = i("warmupList")) == null ? void 0 : It.closest("section"), O = i("movementCreatorLaunch"), ct = i("movementCreator"), mt = (te = i("strengthList")) == null ? void 0 : te.closest("section"), pt = (Ot = i("cooldownList")) == null ? void 0 : Ot.closest("section");
    [r == null ? void 0 : r.querySelector(".createExtras"), N, O, ct, mt, pt].forEach((Et) => Et && tt(Et, B)), [r, s, f, b, A].forEach((Et) => tt(Et, yt)), tt(e, ut), T("movements"), ot();
  }
  function U() {
    et(), k.hidden = !0, n.querySelectorAll(".createStep").forEach((e) => e.classList.remove("active"));
  }
  n.querySelectorAll("[data-open-step]").forEach((e) => e.addEventListener("click", () => {
    e.disabled || T(e.dataset.openStep);
  })), Q.addEventListener("click", () => {
    Q.disabled || T("timing");
  }), V.addEventListener("click", () => T("finish")), W.addEventListener("click", () => i("saveWorkoutEdit").click());
  const wt = { home: i("homeView"), workout: i("workoutView"), settings: i("settingsView") }, Y = i("homeNav"), zt = i("settingsNav");
  function M(e) {
    Object.entries(wt).forEach(([r, s]) => s.classList.toggle("active", r === e)), Y.classList.toggle("active", e === "home"), zt.classList.toggle("active", e === "settings"), e === "home" && setTimeout(As, 400), e === "settings" && (requestAnimationFrame(() => Hi(n.querySelector(".tab.active"), !1)), Eo());
  }
  const _ = i("totalTime"), L = i("workTime"), P = i("restTime"), ht = i("totalOut"), ft = i("workOut"), j = i("restOut"), vt = i("totalFill"), Mt = i("workFill"), Qt = i("restFill"), se = i("roundsInput"), ta = i("roundsFill"), Se = i("roundsOut"), pi = i("totalLabel"), La = i("routineSummaryModal"), Rt = [
    { id: "standing-reach", name: "Standing reach", group: "Warm-up", kind: "warmup", hidden: !1 },
    { id: "arm-circles", name: "Arm circles", group: "Warm-up", kind: "warmup", hidden: !1 },
    { id: "hip-hinge", name: "Hip hinge drill", group: "Warm-up", kind: "warmup", hidden: !1 }
  ];
  let he = Rt.map((e) => ({ ...e })), la = [
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
  const ue = [
    { id: "hip-flexor", name: "Hip flexor stretch", group: "Cooldown", kind: "cooldown", hidden: !1 },
    { id: "chest-opener", name: "Chest opener", group: "Cooldown", kind: "cooldown", hidden: !1 },
    { id: "hamstring", name: "Hamstring stretch", group: "Cooldown", kind: "cooldown", hidden: !1 },
    { id: "slow-breathing", name: "Slow breathing", group: "Cooldown", kind: "cooldown", hidden: !1 }
  ];
  let ze = ue.map((e) => ({ ...e }));
  const Fr = {
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
  }, xe = Xi(d.data), ee = xe.profiles;
  let Jt = ee[xe.selected] ? xe.selected : xe.order.find((e) => ee[e]) || "kettlebell";
  function Xi(e) {
    const r = e && typeof e == "object" ? JSON.parse(JSON.stringify(e)) : {}, s = r.profiles && Object.keys(r.profiles).length ? r.profiles : JSON.parse(JSON.stringify(Fr)), f = (Array.isArray(r.order) ? r.order : Object.keys(s)).filter((b) => s[b]);
    return Object.keys(s).forEach((b) => {
      f.includes(b) || f.push(b);
    }), {
      v: 1,
      profiles: s,
      order: f,
      selected: r.selected || f[0],
      history: Array.isArray(r.history) ? r.history : [],
      checkins: (Array.isArray(r.checkins) ? r.checkins : ui(r.energy)).map(Ji),
      settings: { ...r.settings || {} }
    };
  }
  function ui(e) {
    if (!Array.isArray(e)) return [];
    const r = ["Drained", "Low", "Okay", "Good", "Energised", "Great"], s = [];
    return e.forEach((f) => {
      const b = new Date(f.at);
      if (isNaN(b)) return;
      const A = b.getFullYear() + "-" + String(b.getMonth() + 1).padStart(2, "0") + "-" + String(b.getDate()).padStart(2, "0"), N = b.getHours() < 14 ? "morning" : "evening";
      if (s.some((ct) => ct.date === A && ct.slot === N)) return;
      const O = r.indexOf(f.value) + 1;
      O > 0 && s.push({ date: A, slot: N, mood: null, energy: O, at: f.at });
    }), s;
  }
  function Ji(e) {
    if (e.scale === 100) return e;
    const r = (s) => s == null ? null : Math.round((Number(s) - 1) / 5 * 100);
    return { ...e, mood: r(e.mood), energy: r(e.energy), scale: 100 };
  }
  function Xa() {
    Kt || (xe.selected = Jt, xe.order = xe.order.filter((e) => ee[e] && e !== Dt), d.save(xe));
  }
  function me() {
    return xe.settings;
  }
  function da(e) {
    const r = ee[e];
    if (!r) return;
    Jt = e;
    const s = i("workoutNameInput");
    if (s && (s.value = r.name), _.value = r.total, L.value = r.work, P.value = r.rest, se.value = r.rounds || 1, r.customSequence) {
      const f = (r.sequence || []).map((A) => ({ ...A })), b = (A) => f.filter((N) => N.presetRole === A).map(({ presetRole: N, ...O }) => O);
      he = (r.warmup || b("warmup")).map((A) => ({ ...A })), ze = (r.cooldown || b("cooldown")).map((A) => ({ ...A })), la = f.filter((A) => !A.presetRole), ho(r.preset || "movement", !1);
    } else
      _.min = 3, _.max = 40, _.step = 1, L.min = 20, L.max = 60, L.step = 5, P.min = 5, P.max = 30, P.step = 5, he = (r.warmup || Rt).map((f) => ({ ...f })), ze = (r.cooldown || ue).map((f) => ({ ...f })), la = r.strength.map((f) => Array.isArray(f) ? (([b, A, N, O = !1]) => ({ id: b, name: A, group: N, kind: "work", hidden: !!O }))(f) : { ...f });
    n.querySelectorAll(".workoutPanel[data-workout]").forEach((f) => f.classList.toggle("active", f.dataset.workout === e)), Te();
  }
  function ga(e, r, s) {
    const f = e.getBoundingClientRect(), b = f.width / 2, A = f.height / 2, N = r - b, O = s - A;
    let ct = 1 / 0, mt = 1 / 0;
    N !== 0 && (ct = b / Math.abs(N)), O !== 0 && (mt = A / Math.abs(O));
    const pt = Math.min(Math.max(1 / Math.min(ct, mt), 0), 1);
    let it = Math.atan2(O, N) * (180 / Math.PI) + 90;
    return it < 0 && (it += 360), { edge: pt, angle: it };
  }
  function fi(e, r, s = !1) {
    const f = e.getBoundingClientRect(), b = r.clientX - f.left, A = r.clientY - f.top, { edge: N, angle: O } = ga(e, b, A), ct = s ? 100 : N * 100;
    e.style.setProperty("--edge-proximity", ct.toFixed(3)), e.style.setProperty("--cursor-angle", O.toFixed(3) + "deg"), e.classList.toggle("borderGlowActive", s || ct >= 30);
  }
  function Qi(e) {
    e.addEventListener("pointermove", (s) => fi(e, s, !1)), e.addEventListener("pointerenter", (s) => fi(e, s, !1)), e.addEventListener("pointerdown", (s) => fi(e, s, !0));
    const r = () => {
      e.classList.remove("borderGlowActive"), e.style.setProperty("--edge-proximity", "0");
    };
    e.addEventListener("pointerleave", r), e.addEventListener("pointerup", r), e.addEventListener("pointercancel", r);
  }
  Qi(i("addWorkoutPanel"));
  let Kt = !1, Dt = null;
  function Ut(e) {
    return String(e ?? "").replace(/[&<>"']/g, (r) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[r]);
  }
  function De(e) {
    return e.summary ? e.summary : e.customSequence ? Bn(e.total) + " · custom move" : Bn(e.total) + " · " + pa(e.work) + " / " + pa(e.rest) + " · warm-up + cooldown";
  }
  function Ea(e, r) {
    var A;
    const s = document.createElement("article");
    s.className = "workoutPanel", s.dataset.workout = e, s.tabIndex = 0;
    const f = r.activityCount ?? (((A = r.sequence) == null ? void 0 : A.length) || 0);
    s.innerHTML = '<span class="edgeLight" aria-hidden="true"></span><div class="panelExpanded"><div><div class="workoutPanelTop"><div><div class="workoutName">' + Ut(r.name) + '</div><div class="sub">' + Ut(De(r)) + '</div><span class="sourceTag">' + Ut(r.source || "Custom move") + '</span></div><button class="pill seeWorkoutBtn" type="button">Edit</button></div></div><div class="workoutFooter"><div><strong class="activityCount">' + (f ? f + " activities" + ((r.rounds || 1) > 1 ? " × " + r.rounds : "") : "—") + '</strong></div><div class="workoutPanelActions"><button class="primary startWorkoutBtn" type="button">Start move</button></div></div></div><div class="panelCollapsed"><div class="panelCollapsedText">' + Ut(r.name) + "</div></div>";
    const b = i("addWorkoutPanel");
    return i("workoutGallery").insertBefore(s, b), Qi(s), s.addEventListener("click", (N) => {
      N.target.closest("button") || da(e);
    }), s.addEventListener("keydown", (N) => {
      (N.key === "Enter" || N.key === " ") && !N.target.closest("button") && (N.preventDefault(), da(e));
    }), s.querySelector(".seeWorkoutBtn").addEventListener("click", (N) => {
      N.stopPropagation(), da(e), vl(!1);
    }), s.querySelector(".startWorkoutBtn").addEventListener("click", (N) => {
      N.stopPropagation(), da(e), xd();
    }), s;
  }
  function co() {
    n.querySelectorAll(".workoutPanel[data-workout]").forEach((e) => e.remove()), xe.order.forEach((e) => {
      ee[e] && Ea(e, ee[e]);
    }), n.querySelectorAll(".workoutPanel[data-workout]").forEach((e) => e.classList.toggle("active", e.dataset.workout === Jt));
  }
  co(), i("addWorkoutPanel").addEventListener("keydown", (e) => {
    (e.key === "Enter" || e.key === " ") && (e.preventDefault(), i("addWorkoutPanel").click());
  }), i("addWorkoutPanel").addEventListener("click", () => {
    Kt = !0, Dt = "custom-" + Date.now(), ee[Dt] = {
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
    }, da(Dt), vl(!0);
  });
  let Gt = [], ne = 0, ea = 0, Wn = 1, ja = !1, Xe = null, hi = null, ca = !1, po = xe.settings.upcomingCount ?? "all", uo = "movement";
  function fo(e, r, s) {
    return (Number(e) - r) / (s - r) * 100;
  }
  function pa(e) {
    const r = Math.max(0, Number(e) || 0);
    return r >= 3600 && r % 3600 === 0 ? r / 3600 + " hr" : r >= 60 && r % 60 === 0 ? r / 60 + " min" : r >= 60 ? Math.round(r / 60) + " min" : Math.round(r) + " sec";
  }
  function Bn(e) {
    const r = Math.max(0, Number(e) || 0);
    return r >= 60 && r % 60 === 0 ? r / 60 + " hr" : r >= 60 ? Math.floor(r / 60) + " hr " + r % 60 + " min" : r + " min";
  }
  function mi() {
    vt.style.width = fo(_.value, Number(_.min), Number(_.max)) + "%", Mt.style.width = fo(L.value, Number(L.min), Number(L.max)) + "%", Qt.style.width = fo(P.value, Number(P.min), Number(P.max)) + "%", ft.textContent = pa(L.value), j.textContent = pa(P.value);
    const e = Number(se.value) || 1;
    ta.style.width = fo(e, 1, 10) + "%", pi.textContent = e > 1 ? "Time per round" : "Total time";
  }
  function tr(e) {
    return e.filter((r) => !r.hidden);
  }
  function Ja(e) {
    const r = Math.max(0, Math.round(Number(e) || 0)), s = Math.floor(r / 3600), f = Math.floor(r % 3600 / 60), b = r % 60;
    return (s ? s + ":" + String(f).padStart(2, "0") : f) + ":" + String(b).padStart(2, "0");
  }
  function Or(e) {
    let r;
    try {
      r = new URL(String(e || "").trim());
    } catch {
      return null;
    }
    const s = r.hostname.replace(/^(www|m|music)\./, "");
    let f = null;
    if (s === "youtu.be") f = r.pathname.slice(1).split("/")[0];
    else if (/^youtube(-nocookie)?\.com$/.test(s))
      if (r.pathname === "/watch") f = r.searchParams.get("v");
      else {
        const O = r.pathname.match(/^\/(embed|shorts|live|v)\/([^/?#]+)/);
        O && (f = O[2]);
      }
    if (!f || !/^[\w-]{11}$/.test(f)) return null;
    const b = (O) => {
      if (!O) return 0;
      if (/^\d+$/.test(O)) return Number(O);
      const ct = O.match(/^(?:(\d+)h)?(?:(\d+)m)?(?:(\d+)s)?$/);
      return ct ? (Number(ct[1]) || 0) * 3600 + (Number(ct[2]) || 0) * 60 + (Number(ct[3]) || 0) : 0;
    }, A = b(r.searchParams.get("t") || r.searchParams.get("start")), N = b(r.searchParams.get("end"));
    return { id: f, start: A, end: N > A ? N : null };
  }
  function qn(e, r) {
    if (e.useVideoLength === !1) return Math.max(5, Number(e.duration) || r || 300);
    const s = Number(e.start) || 0, f = Number(e.end) || Number(e.videoDuration) || 0;
    return f > s ? Math.round(f - s) : Number(e.duration) || 300;
  }
  function kn(e, r) {
    const s = Math.max(0, Number(e) || 0);
    return Math.round(r === "hour" ? s * 3600 : r === "min" ? s * 60 : s);
  }
  function ho(e, r = !0) {
    uo = e, n.querySelectorAll(".createPresetBtn").forEach((f) => f.classList.toggle("active", f.dataset.movePreset === e));
    const s = ee[Jt];
    s && (s.preset = e), e === "work" ? (_.min = 30, _.max = 480, _.step = 30, L.min = 300, L.max = 7200, L.step = 300, P.min = 60, P.max = 1800, P.step = 60, r && (_.value = 60, L.value = 1500, P.value = 300), i("addMovementUnit").value = "min", i("addMovementDuration").value = 25, i("addRestUnit").value = "min", i("addRestDuration").value = 5) : (_.min = 3, _.max = 40, _.step = 1, L.min = 20, L.max = 60, L.step = 5, P.min = 5, P.max = 30, P.step = 5, r && (_.value = 20, L.value = 45, P.value = 15), i("addMovementUnit").value = "sec", i("addMovementDuration").value = 45, i("addRestUnit").value = "sec", i("addRestDuration").value = 30), mi();
  }
  function Mn(e, r) {
    const s = uo === "work";
    return e.map((f, b) => ({ ...f, id: r + "-" + b + "-" + Date.now().toString(36), useGlobalTiming: !s, duration: s ? 60 : Number(L.value) }));
  }
  function er() {
    const e = ee[Jt];
    e != null && e.customSequence && (e.includeWarmup = i("includeWarmupPreset").checked, e.includeCooldown = i("includeCooldownPreset").checked, e.includeWarmup && !he.length && (he = Mn(Rt, "warm")), e.includeCooldown && !ze.length && (ze = Mn(ue, "cool")), Te());
  }
  function Rn() {
    const e = i("upcomingCountSetting");
    if (!e) return;
    const r = Math.max(1, Gt.length - 1), s = po;
    e.innerHTML = "";
    for (let A = 1; A <= r; A++) {
      const N = document.createElement("option");
      N.value = String(A), N.textContent = String(A), e.appendChild(N);
    }
    const f = document.createElement("option");
    f.value = "all", f.textContent = "All", e.appendChild(f);
    const b = s === "all" ? "all" : String(Math.min(Number(s) || 1, r));
    e.value = b, po = b === "all" ? "all" : Number(b);
  }
  function Te() {
    Number(_.value) * 60;
    const e = Number(L.value), r = Number(P.value), s = ee[Jt], f = !!(s != null && s.customSequence), b = (f ? !s.includeWarmup : s != null && s.warmupOff) ? [] : tr(he), A = tr(la), N = f && !s.includeCooldown ? [] : tr(ze);
    if (s && (s.total = Number(_.value), s.work = e, s.rest = r, s.rounds = Number(se.value) || 1, s.customSequence ? (s.sequence = la.map((Lt) => ({ ...Lt })), s.warmup = he.map((Lt) => ({ ...Lt })), s.cooldown = ze.map((Lt) => ({ ...Lt }))) : (s.strength = la.map((Lt) => ({ ...Lt })), s.warmup = he.map((Lt) => ({ ...Lt })), s.cooldown = ze.map((Lt) => ({ ...Lt })))), s != null && s.customSequence) {
      const Lt = [...b.map((de) => ({ ...de, section: "warmup" })), ...A, ...N.map((de) => ({ ...de, section: "cooldown" }))].map((de) => {
        if (de.kind === "video") return { ...de, duration: qn(de, e), rest: 0 };
        if (de.kind === "rest") {
          const ya = de.useGlobalTiming === !0 ? r : Number(de.duration) || r;
          return { ...de, duration: ya, rest: 0 };
        }
        const xa = de.useGlobalTiming === !1 && Number(de.duration) || e;
        return { ...de, duration: xa, rest: 0 };
      });
      s.autoRest && Number(s.autoRestDuration) > 0 ? (Gt = [], Lt.forEach((de, xa) => {
        Gt.push(de);
        const ya = Lt[xa + 1];
        de.kind !== "rest" && ya && ya.kind !== "rest" && Gt.push({
          id: "auto-rest-" + xa,
          name: "Rest",
          group: "Rest",
          kind: "rest",
          hidden: !1,
          duration: Number(s.autoRestDuration),
          rest: 0,
          autoGenerated: !0
        });
      })) : Gt = Lt;
    } else
      Gt = [...b.map((Lt) => ({ ...Lt, section: "warmup" })), ...A, ...N.map((Lt) => ({ ...Lt, section: "cooldown" }))].map((Lt) => Lt.kind === "video" ? { ...Lt, duration: qn(Lt, e), rest: 0 } : Lt.kind === "rest" ? { ...Lt, duration: Lt.useGlobalTiming === !0 ? r : Number(Lt.duration) || r, rest: 0 } : { ...Lt, duration: Lt.useGlobalTiming === !1 && Number(Lt.duration) || e, rest: r }), Gt.forEach((Lt, de) => {
        var xa;
        ((xa = Gt[de + 1]) == null ? void 0 : xa.kind) === "rest" && (Lt.rest = 0);
      }), Gt.length && (Gt[Gt.length - 1].rest = 0);
    const O = Math.max(1, Math.min(10, Number(se.value) || 1)), ct = Gt, mt = (Lt) => O <= 1 ? null : Lt.section === "warmup" || Lt.presetRole === "warmup" ? "first" : Lt.section === "cooldown" || Lt.presetRole === "cooldown" ? "last" : Lt.kind === "video" && (Lt.videoRounds === "first" || Lt.videoRounds === "last") ? Lt.videoRounds : null, pt = (Lt) => !!mt(Lt), it = ct.filter((Lt) => !pt(Lt)), It = ct.filter(pt), te = it.length, Ot = it.reduce((Lt, de) => Lt + de.duration + de.rest, 0), Et = It.reduce((Lt, de) => Lt + de.duration + de.rest, 0), At = [
      It.some((Lt) => Lt.section === "warmup" || Lt.presetRole === "warmup") && "warm-up",
      It.some((Lt) => Lt.section === "cooldown" || Lt.presetRole === "cooldown") && "cooldown",
      It.some((Lt) => Lt.kind === "video" && !Lt.section && !Lt.presetRole) && "video"
    ].filter(Boolean), fe = At.length > 1 ? At.slice(0, -1).join(", ") + " & " + At[At.length - 1] : At[0] || "";
    Gt = [];
    const ge = (Lt, de) => {
      const xa = mt(Lt);
      return !xa || (xa === "first" ? de === 1 : de === O);
    };
    for (let Lt = 1; Lt <= O; Lt++)
      if (ct.filter((de) => ge(de, Lt)).forEach((de, xa) => Gt.push({ ...de, id: de.id + (O > 1 ? "-r" + Lt : ""), round: Lt, roundIndex: xa })), Lt < O && te)
        if (s != null && s.customSequence)
          Gt.push({ id: "round-break-" + Lt, name: "Rest", group: "Round " + (Lt + 1) + " next", kind: "rest", hidden: !1, duration: r, rest: 0, round: Lt, roundIndex: te, roundBreak: !0 });
        else {
          const de = Gt[Gt.length - 1];
          de.rest = r, de.roundBreakAfter = !0;
        }
    mi();
    const jt = Gt.reduce((Lt, de) => Lt + de.duration + de.rest, 0), ve = Math.round(Ot / 60), Ee = Math.round(jt / 60), re = O > 1 ? Bn(ve) + " × " + O + " rounds" + (Et ? " + " + pa(Et) + " " + fe : "") + " (" + Bn(Ee) + ")" : Bn(Ee), ae = [b.length ? "warm-up" : "", N.length ? "cooldown" : ""].filter(Boolean), ma = s != null && s.customSequence ? re + " · " + te + " items" + (ae.length && !(O > 1 && Et) ? " · " + ae.join(" + ") : "") : re + " · " + pa(e) + " / " + pa(r) + (ae.length && !(O > 1 && Et) ? " · " + ae.join(" + ") : "");
    ht.textContent = pa(Ot);
    const Pa = Gt.filter((Lt) => !Lt.roundBreak).length, Ge = O > 1 ? Pa + " activities · " + O + " rounds" : te + " activities";
    Se.textContent = O > 1 ? O + " rounds · " + Bn(Ee) + " total" : "1 round", i("roundsCount").textContent = O, n.querySelectorAll("[data-rounds-step]").forEach((Lt) => {
      Lt.disabled = Number(Lt.dataset.roundsStep) < 0 ? O <= 1 : O >= 10;
    }), s && (s.summary = ma, s.activityCount = te);
    const Vi = n.querySelector(".workoutPanel.active .sub");
    Vi && (Vi.textContent = ma), La.textContent = ma, Ft(), n.querySelectorAll(".workoutPanel.active .activityCount").forEach((Lt) => Lt.textContent = Ge), mi(), Ue(), fa(), Pt(), Rn(), Kt && ot(), wt.workout.classList.contains("active") && !Xe && Hs();
  }
  const mo = '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><g fill="currentColor"><circle cx="9" cy="6" r="1.6"/><circle cx="15" cy="6" r="1.6"/><circle cx="9" cy="12" r="1.6"/><circle cx="15" cy="12" r="1.6"/><circle cx="9" cy="18" r="1.6"/><circle cx="15" cy="18" r="1.6"/></g></svg>', oa = '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6z"/></svg>', ar = {
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
  }, _a = (e) => '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">' + (ar[e] || "") + "</svg>";
  n.querySelectorAll("[data-icon]").forEach((e) => {
    e.innerHTML = _a(e.dataset.icon);
  });
  let Ve = null, ua = null;
  function Wr(e) {
    return e = Math.max(1, Number(e) || 0), e >= 3600 && e % 3600 === 0 ? { value: e / 3600, unit: "hour" } : e >= 60 && e % 60 === 0 ? { value: e / 60, unit: "min" } : { value: e, unit: "sec" };
  }
  function gi(e = !1) {
    const r = n.querySelector(".moveEditForm input[data-f=url],.moveEditForm input[data-f=name]");
    r && (r.focus({ preventScroll: !0 }), e && r.select());
  }
  function jn(e, r, s = {}) {
    const f = e.kind === "rest", b = e.kind === "video", A = b ? e.useVideoLength !== !1 : f ? e.useGlobalTiming === !0 : e.useGlobalTiming !== !1, N = Number(f ? P.value : L.value), O = Wr(b ? e.useVideoLength === !1 ? e.duration : qn({ ...e, useVideoLength: !0 }) : A ? N : e.duration || N), ct = b && (Number(e.videoDuration) > 0 || Number(e.end) > 0), mt = b ? '<label class="moveEditWide"><span>YouTube link</span><input class="addInput" data-f="url" type="url" inputmode="url" autocomplete="off" value="' + Ut(e.url || "") + '" placeholder="Paste a YouTube link"></label><label><span>Name</span><input class="addInput" data-f="name" type="text" value="' + Ut(e.autoName ? "" : e.name) + '" placeholder="Uses the video’s title"></label><label><span>Plays in</span><select class="creatorUnitSelect" data-f="rounds">' + [["every", "Every round"], ["first", "The first round only"], ["last", "The last round only"]].map(([jt, ve]) => '<option value="' + jt + '"' + ((e.videoRounds || "every") === jt ? " selected" : "") + ">" + ve + "</option>").join("") + '</select></label><p class="fieldError" data-f="urlError" hidden>That isn’t a YouTube link. Copy it from the Share button on YouTube.</p>' : '<label><span>Name</span><input class="addInput" data-f="name" type="text" value="' + Ut(e.name) + '" placeholder="' + (f ? "Rest" : "Name this movement") + '"></label><label><span>Type / group</span><input class="addInput" data-f="group" type="text" value="' + Ut(e.group) + '" placeholder="' + (f ? "Rest" : "e.g. Glutes + legs") + '"></label>', pt = b ? "Play the whole " + (Number(e.start) > 0 || Number(e.end) > 0 ? "clip" : "video") + (ct ? " · " + Ja(qn({ ...e, useVideoLength: !0 })) : "") : "Use global timing · " + pa(N), it = document.createElement("div");
    it.className = "moveRow editing" + (s.sheet ? " inSheet" : ""), it.dataset.index = r, it.dataset.id = e.id;
    const It = s.isNew ?? (ua == null ? void 0 : ua.item) === e, te = s.sheet ? '<div class="moveEditActions sheetActions">' + (It ? "" : '<div class="sheetSecondary"><button class="hideBtn" type="button" data-a="hide">' + (e.hidden ? "Show" : "Hide") + '</button><button class="removeBtn" type="button" data-a="remove" aria-label="Hold to remove ' + Ut(e.name) + '"><span class="removeFill"></span><span class="removeLabel">Remove</span></button></div>') + '<div class="sheetPrimary"><button class="pill" type="button" data-a="cancel">Cancel</button><button class="primary" type="button" data-a="save">' + (It ? "Add" : "Save") + "</button></div></div>" : '<div class="moveEditActions"><button class="pill" type="button" data-a="cancel">Cancel</button><button class="primary" type="button" data-a="save">Save</button></div>';
    it.innerHTML = '<div class="moveEditForm"><div class="moveEditFields' + (b ? " videoFields" : "") + '">' + mt + '</div><div class="moveEditTiming"><label class="globalTimingToggle"><input type="checkbox" data-f="global"' + (A ? " checked" : "") + '><span class="toggleTrack" aria-hidden="true"><span class="toggleThumb"></span></span><span class="toggleLabel">' + Ut(pt) + '</span></label><div class="creatorDurationRow"><input class="addInput creatorNumber" data-f="dur" type="number" min="1" max="3600" step="1" value="' + O.value + '" aria-label="Duration"><select class="creatorUnitSelect" data-f="unit" aria-label="Duration unit">' + ["sec", "min", "hour"].map((jt) => '<option value="' + jt + '"' + (jt === O.unit ? " selected" : "") + ">" + { sec: "seconds", min: "minutes", hour: "hours" }[jt] + "</option>").join("") + "</select></div></div>" + te + "</div>";
    const Ot = (jt) => it.querySelector("[data-f=" + jt + "]"), Et = () => {
      const jt = Ot("global").checked;
      Ot("dur").disabled = jt, Ot("unit").disabled = jt, it.querySelector(".creatorDurationRow").classList.toggle("isDisabled", jt);
    };
    Ot("global").addEventListener("change", Et), Et();
    const At = () => {
      var jt;
      if (s.sheet) {
        (jt = s.onCancel) == null || jt.call(s);
        return;
      }
      It && Qa(), Ve = null, Te();
    }, fe = () => {
      var Ee;
      if (b) {
        ge();
        return;
      }
      const jt = Ot("name").value.trim();
      if (!jt) {
        Ot("name").focus();
        return;
      }
      e.name = jt, e.group = Ot("group").value.trim() || (f ? "Rest" : "Movement");
      const ve = Ot("global").checked;
      if (e.useGlobalTiming = ve, ve || (e.duration = Math.max(f ? 5 : 1, kn(Ot("dur").value, Ot("unit").value))), s.sheet) {
        (Ee = s.onSaved) == null || Ee.call(s);
        return;
      }
      It && (ua = null), Ve = null, Te(), Ae(It ? f ? "Rest added" : "Movement added" : "Movement updated");
    }, ge = () => {
      var ae;
      const jt = Ot("url").value.trim(), ve = Or(jt);
      if (!ve) {
        Ot("urlError").hidden = !1, Ot("url").classList.add("invalid"), Ot("url").focus();
        return;
      }
      const Ee = ve.id !== e.videoId;
      e.url = jt, e.videoId = ve.id, e.start = ve.start, e.end = ve.end, Ee && (e.videoDuration = null, e.videoError = null);
      const re = Ot("name").value.trim();
      e.autoName = !re, e.name = re || (Ee ? "" : e.name) || e.videoTitle || "YouTube video", e.group = "Video", e.videoRounds = Ot("rounds").value, e.useVideoLength = Ot("global").checked, e.useVideoLength || (e.duration = Math.max(5, kn(Ot("dur").value, Ot("unit").value))), s.sheet ? (ae = s.onSaved) == null || ae.call(s) : (It && (ua = null), Ve = null, Te(), Ae(It ? "Video added" : "Video updated")), (Ee || !e.videoDuration || e.autoName && !e.videoTitle) && wa(e);
    };
    if (b && Ot("url").addEventListener("input", () => {
      Ot("urlError").hidden = !0, Ot("url").classList.remove("invalid");
    }), it.querySelector("[data-a=cancel]").addEventListener("click", At), it.querySelector("[data-a=save]").addEventListener("click", fe), s.sheet && !It) {
      it.querySelector("[data-a=hide]").addEventListener("click", () => {
        var ve;
        return (ve = s.onHide) == null ? void 0 : ve.call(s);
      });
      const jt = it.querySelector("[data-a=remove]");
      Tr(jt, jt.querySelector(".removeFill"), 1200, () => {
        var ve;
        return (ve = s.onRemove) == null ? void 0 : ve.call(s);
      });
    }
    return it.addEventListener("keydown", (jt) => {
      jt.key === "Escape" && (jt.preventDefault(), jt.stopPropagation(), At()), jt.key === "Enter" && jt.target.matches("input") && (jt.preventDefault(), fe());
    }), it;
  }
  function zn(e, r) {
    const s = i(r);
    s.innerHTML = "", e.forEach((f, b) => {
      if (f === Ve && !za()) {
        s.appendChild(jn(f, b));
        return;
      }
      const A = document.createElement("div");
      A.className = "moveRow" + (f.hidden ? " hidden" : "") + (f.kind === "rest" ? " restItem" : "") + (f.kind === "video" ? " videoItem" : "") + (rs(f) ? " noMeta" : ""), A.dataset.index = b, A.dataset.id = f.id;
      const N = f.kind === "rest" ? f.useGlobalTiming === !0 ? "Global timing" : pa(f.duration) : f.useGlobalTiming === !1 ? pa(f.duration) : "Global timing", O = f.kind === "video" ? '<span class="moveKindBadge">Video</span>' : "", ct = f.kind === "video" ? f.videoError ? "YouTube · can’t play outside YouTube" : "YouTube · " + (f.useVideoLength === !1 ? "stops after " + pa(f.duration) : Number(f.videoDuration) > 0 || Number(f.end) > 0 ? Ja(qn(f)) : "plays to the end") + (f.videoRounds === "first" ? " · first round only" : f.videoRounds === "last" ? " · last round only" : "") : f.group + " · " + N, mt = '<button class="dragHandle" type="button" title="Drag to reorder" aria-label="Reorder ' + Ut(f.name) + '. Drag, or use the up and down arrow keys">' + mo + "</button>", pt = '<div class="moveText"><div class="moveItemName">' + Ut(f.name) + O + '</div><div class="moveMeta">' + Ut(ct) + "</div></div>", it = (Ot) => Ot.addEventListener("keydown", (Et) => {
        var ge, jt;
        if (Et.key !== "ArrowUp" && Et.key !== "ArrowDown") return;
        Et.preventDefault();
        const At = e.indexOf(f), fe = At + (Et.key === "ArrowUp" ? -1 : 1);
        fe < 0 || fe >= e.length || (e.splice(At, 1), e.splice(fe, 0, f), Te(), (jt = (ge = i(r).children[fe]) == null ? void 0 : ge.querySelector(".dragHandle")) == null || jt.focus());
      });
      if (za()) {
        A.classList.add("phoneRow"), A.tabIndex = 0, A.setAttribute("role", "button"), A.setAttribute("aria-label", "Edit " + (f.name || "step")), A.innerHTML = mt + pt + '<span class="rowChevron" aria-hidden="true">›</span>';
        const Ot = A.querySelector(".dragHandle");
        Ot.addEventListener("pointerdown", (Et) => nr(Et, A, s, e)), it(Ot), A.addEventListener("click", (Et) => {
          Et.target.closest(".dragHandle") || R(f, e);
        }), A.addEventListener("keydown", (Et) => {
          Et.key === "Enter" && Et.target === A && (Et.preventDefault(), R(f, e));
        }), s.appendChild(A);
        return;
      }
      A.innerHTML = mt + pt + '<div class="moveActions seg"><button class="hideBtn editBtn segBtn" type="button" aria-label="Edit ' + Ut(f.name) + '">Edit</button><button class="hideBtn segBtn" type="button">' + (f.hidden ? "Show" : "Hide") + '</button><button class="removeBtn segBtn" type="button" title="Hold to remove" aria-label="Hold to remove ' + Ut(f.name) + '"><span class="removeFill"></span><span class="removeLabel">' + oa + "</span></button></div>", A.querySelector(".editBtn").addEventListener("click", () => {
        Qa(), Ve = f, Te(), gi();
      }), A.querySelector(".hideBtn:not(.editBtn)").addEventListener("click", () => {
        f.hidden = !f.hidden, Te();
      });
      const It = A.querySelector(".removeBtn");
      Tr(It, It.querySelector(".removeFill"), 1200, () => {
        const Ot = e.indexOf(f);
        Ot < 0 || (e.splice(Ot, 1), Te(), Ae("Removed " + f.name, { label: "Undo", run: () => {
          e.splice(Math.min(Ot, e.length), 0, f), Te();
        } }));
      });
      const te = A.querySelector(".dragHandle");
      te.addEventListener("pointerdown", (Ot) => nr(Ot, A, s, e)), it(te), s.appendChild(A);
    });
  }
  const Ia = () => {
    var e;
    return (e = window.matchMedia) == null ? void 0 : e.call(window, "(prefers-reduced-motion: reduce)").matches;
  }, Vn = (e) => {
    var r;
    try {
      (r = navigator.vibrate) == null || r.call(navigator, e);
    } catch {
    }
  };
  function nr(e, r, s, f) {
    if (e.button !== void 0 && e.button !== 0) return;
    e.preventDefault();
    const b = e.currentTarget, A = e.pointerId, N = !Ia();
    try {
      b.setPointerCapture(A);
    } catch {
    }
    const O = r.closest(".exerciseScroller") || bi(r), ct = s.style.position;
    s.style.position = "relative";
    const mt = [...s.children].filter((ce) => ce.classList.contains("moveRow")), pt = mt.indexOf(r), it = parseFloat(getComputedStyle(s).rowGap) || 8, It = r.offsetHeight, te = It + it, Ot = mt.map((ce) => ce.offsetTop), Et = mt.map((ce) => ce.offsetHeight), At = () => s.getBoundingClientRect().top, fe = s.getBoundingClientRect().width, ge = e.clientY - (At() + Ot[pt]), jt = e.clientX;
    let ve = e.clientY, Ee = e.clientX, re = At() + Ot[pt], ae = 0, ma = 0, Pa = 0, Ge = 1, Vi = 0, Lt = pt, de = !1, xa = 0, ya = !1, zl = !1, bs = Ot[pt];
    s.classList.add("reordering"), r.classList.add("dragging"), r.style.transition = "none", Vn(8);
    const Vl = () => {
      const ce = ve - ge + It / 2 - At();
      let Me = 0;
      return mt.forEach((Oe, dn) => {
        dn !== pt && ce > Ot[dn] + Et[dn] / 2 && Me++;
      }), Me;
    }, Gl = () => {
      mt.forEach((ce, Me) => {
        if (Me === pt) return;
        const Oe = pt < Lt && Me > pt && Me <= Lt ? -te : pt > Lt && Me >= Lt && Me < pt ? te : 0;
        ce.style.transform = Oe ? "translateY(" + Oe + "px)" : "";
      });
    }, ol = () => {
      const ce = s.getBoundingClientRect(), Me = Math.abs(Ee - jt) > Math.max(80, fe * 0.3) || Ee < ce.left - 24 || Ee > ce.right + 24;
      Me !== de && (de = Me, r.classList.toggle("willReturn", Me), Vn(Me ? 10 : 4));
      const Oe = de ? pt : Vl();
      Oe !== Lt && (Lt = Oe, Gl(), de || Vn(4));
    }, Gi = () => {
      if (Lt === pt) return Ot[pt];
      const ce = mt.filter((Oe, dn) => dn !== pt);
      let Me = Ot[0];
      for (let Oe = 0; Oe < Lt; Oe++) Me += ce[Oe].offsetHeight + it;
      return Me;
    }, ws = () => {
      const ce = N ? Math.min(Math.abs(ae) / 40, 1) : 0, Me = N && !ya ? Math.max(-3, Math.min(3, Pa * 0.6)) : 0;
      r.style.transform = "translate(" + ma.toFixed(2) + "px," + (re - (At() + Ot[pt])).toFixed(2) + "px) rotate(" + Me.toFixed(2) + "deg) scale(" + (Ge * (1 - 0.04 * ce)).toFixed(4) + "," + (Ge * (1 + 0.06 * ce)).toFixed(4) + ")";
    }, ie = () => {
      xa = requestAnimationFrame(ie);
      const ce = Ee - jt, Me = ya ? At() + bs : ve - ge, Oe = ya ? 0 : de ? ce * 0.9 : Math.max(-22, Math.min(22, ce * 0.22)), dn = ya ? 1 : de ? 0.97 : 1.035;
      if (!N) {
        re = Me, ma = ya ? 0 : Oe, Ge = 1, ws(), ya && Ye();
        return;
      }
      const qp = ya ? 0.24 : 0.2, jp = ya ? 0.62 : 0.68;
      ae = (ae + (Me - re) * qp) * jp, re += ae, Pa = (Pa + (Oe - ma) * 0.16) * 0.7, ma += Pa, Vi = (Vi + (dn - Ge) * 0.22) * 0.6, Ge += Vi, ws(), ya && Math.abs(ae) < 0.15 && Math.abs(Me - re) < 0.5 && Math.abs(ma) < 0.5 && Math.abs(Ge - 1) < 3e-3 && Ye();
    }, Ne = setInterval(() => {
      if (!O || ya) return;
      const ce = O.getBoundingClientRect(), Me = 56, Oe = ve < ce.top + Me ? -10 : ve > ce.bottom - Me ? 10 : 0;
      Oe && (O.scrollTop += Oe, ol());
    }, 30);
    function Ye() {
      if (zl) return;
      zl = !0, cancelAnimationFrame(xa);
      const ce = Lt !== pt, Me = r.dataset.id;
      if (s.classList.remove("reordering"), mt.forEach((dn) => {
        dn.style.transition = "none", dn.style.transform = "";
      }), r.classList.remove("dragging", "willReturn"), s.style.position = ct, ce) {
        const [dn] = f.splice(pt, 1);
        f.splice(Lt, 0, dn);
      }
      Te();
      const Oe = Me && s.querySelector('.moveRow[data-id="' + Me + '"]');
      Oe && N && Oe.animate([{ transform: "scale(1.02,.95)" }, { transform: "scale(.995,1.012)" }, { transform: "none" }], { duration: 340, easing: "ease-out" }), ce && Ae("Order saved");
    }
    const ka = (ce) => {
      if (ce.pointerId === A) {
        if (ce.pointerType === "mouse" && ce.buttons === 0) {
          _n();
          return;
        }
        ve = ce.clientY, Ee = ce.clientX, ol();
      }
    }, ln = (ce) => {
      ce.pointerId === A && _n();
    };
    function _n() {
      ya || (window.removeEventListener("pointermove", ka, !0), window.removeEventListener("pointerup", ln, !0), window.removeEventListener("pointercancel", ln, !0), b.removeEventListener("lostpointercapture", _n), clearInterval(Ne), de && Lt !== pt && (Lt = pt, Gl()), bs = Gi(), ya = !0, Vn(6), setTimeout(Ye, 800));
    }
    window.addEventListener("pointermove", ka, !0), window.addEventListener("pointerup", ln, !0), window.addEventListener("pointercancel", ln, !0), b.addEventListener("lostpointercapture", _n), xa = requestAnimationFrame(ie), ws();
  }
  function Ue() {
    var b, A, N, O;
    const e = ee[Jt], r = (b = i("warmupList")) == null ? void 0 : b.closest("section"), s = (A = i("cooldownList")) == null ? void 0 : A.closest("section"), f = (O = (N = i("strengthList")) == null ? void 0 : N.closest("section")) == null ? void 0 : O.querySelector(".sectionTitle");
    e != null && e.customSequence ? (r && (r.hidden = !e.includeWarmup), s && (s.hidden = !e.includeCooldown), f && (f.textContent = "Move sequence")) : (r && (r.hidden = !!(e != null && e.warmupOff)), s && (s.hidden = !1), f && (f.textContent = "Kettlebell work")), zn(he, "warmupList"), zn(la, "strengthList"), zn(ze, "cooldownList");
  }
  function Qa() {
    if (!ua) return;
    const { item: e, arr: r } = ua;
    ua = null;
    const s = r.indexOf(e);
    s >= 0 && r.splice(s, 1), Ve === e && (Ve = null);
  }
  function ye(e) {
    return e.id === "warmupList" ? { arr: he, kind: "warmup", group: "Warm-up" } : e.id === "cooldownList" ? { arr: ze, kind: "cooldown", group: "Cooldown" } : { arr: la, kind: "work", group: "" };
  }
  function tn(e, r) {
    const s = ye(r), f = Date.now().toString(36);
    return e === "video" ? { id: "video-" + f, name: "", group: "Video", kind: "video", hidden: !1, url: "", videoId: "", start: 0, end: null, videoDuration: null, useVideoLength: !0, autoName: !0, duration: 300 } : e === "rest" ? { id: "rest-" + f, name: "Rest", group: "Rest", kind: "rest", hidden: !1, useGlobalTiming: !0, duration: Number(P.value) } : { id: "movement-" + f, name: "", group: s.group, kind: s.kind, hidden: !1, useGlobalTiming: !0, duration: Number(L.value) };
  }
  const go = "cubic-bezier(.34,1.46,.64,1)";
  function vi(e, r) {
    if (Ia() || !e) {
      r();
      return;
    }
    const s = (A) => {
      var N;
      return ((N = A.dataset) == null ? void 0 : N.id) || A;
    }, f = () => [...e.querySelectorAll(".moveRow,.sectionTitle,.movementCreatorLaunch")], b = new Map(f().map((A) => [s(A), A.getBoundingClientRect().top]));
    r(), f().forEach((A) => {
      const N = b.get(s(A));
      if (N === void 0) return;
      const O = N - A.getBoundingClientRect().top;
      Math.abs(O) < 0.5 || A.animate([{ transform: "translateY(" + O + "px)" }, { transform: "none" }], { duration: 440, easing: go });
    });
  }
  function or(e, r) {
    if (!e || Ia()) return;
    const s = e.offsetHeight, f = Math.max(0, s - (r || 0));
    e.animate([{ clipPath: "inset(0 0 " + f + "px 0 round 20.8px)" }, { clipPath: "inset(0 0 0 0 round 20.8px)" }], { duration: 460, easing: go });
  }
  function vo(e, r, s, f) {
    const { arr: b } = ye(r), A = tn(e, r);
    b.splice(Math.max(0, Math.min(s, b.length)), 0, A), ua = { item: A, arr: b }, Ve = A, vi(r.closest(".exerciseScroller,.createStepSlot") || r, () => Te());
    const N = r.querySelector(".moveRow.editing");
    return or(N, f), gi(e === "rest"), N;
  }
  function bi(e) {
    for (let r = e; r && r.nodeType === 1; r = r.parentElement) {
      const s = getComputedStyle(r).overflowY;
      if (/(auto|scroll)/.test(s) && r.scrollHeight > r.clientHeight) return r;
    }
    return null;
  }
  const Sn = { movement: ["New movement", "Drop to add, then name it"], rest: ["Rest", "Rest · Global timing"], video: ["New video", "Drop to add, then paste a YouTube link"] };
  function Da(e, r) {
    const s = document.createElement("div");
    return s.className = "addGhost" + (e === "movement" ? "" : " rest"), s.innerHTML = '<span class="addGhostGrip">' + mo + '</span><span class="addGhostText"><strong>' + Ut(r[0]) + "</strong><small>" + Ut(r[1]) + "</small></span>", i("workoutModal").appendChild(s), s;
  }
  function Nn(e) {
    e.classList.add("leaving"), setTimeout(() => e.remove(), 180);
  }
  function qr(e, r, s, f) {
    (Ve || ua) && (Qa(), Ve = null, Te());
    const b = e.getBoundingClientRect(), A = Da(r, Sn[r]);
    A.setAttribute("aria-hidden", "true"), A.style.width = b.width + "px", A.style.height = b.height + "px", A.style.transform = "translate(" + b.left + "px," + b.top + "px)", e.classList.add("lifting");
    const N = bi(e);
    return ir({
      ghost: A,
      origin: b,
      sx: s,
      sy: f,
      scroller: N,
      column: e.closest(".exerciseScroller,.createFlow") || N,
      home: () => e.getBoundingClientRect(),
      onDrop: (O, ct, mt) => {
        Nn(A), e.classList.remove("lifting"), vo(r, O, ct, mt);
      },
      onReturn: () => {
        Nn(A), e.classList.remove("lifting");
      }
    });
  }
  function ir({ ghost: e, origin: r, sx: s, sy: f, scroller: b, column: A, home: N, onDrop: O, onReturn: ct, rowLook: mt = !1 }) {
    var ws;
    const pt = !Ia(), it = ((ws = n.querySelector(".moveList .moveRow:not(.editing)")) == null ? void 0 : ws.offsetHeight) || 80, It = s - r.left, te = f - r.top, Ot = 44;
    let Et = s, At = f, fe = r.left, ge = r.top, jt = 0, ve = 0, Ee = !pt, re = null, ae = null, ma = -1, Pa = 0, Ge = null;
    const Vi = () => ["warmupList", "strengthList", "cooldownList"].map((ie) => i(ie)).filter((ie) => ie && ie.getClientRects().length && !ie.closest("[hidden]")), Lt = (ie) => {
      if (ie === re) return;
      re = ie, e.classList.toggle("overList", !!ie || mt);
      const Ne = ie ? ie.getBoundingClientRect().width : r.width;
      e.style.width = Ne + "px", e.style.height = (ie ? it : r.height) + "px";
    }, de = (ie) => {
      ie.classList.add("leaving"), ie.style.height = "0px", ie.style.marginTop = "-8px", setTimeout(() => ie.remove(), pt ? 320 : 0);
    }, xa = (ie, Ne, Ye) => {
      if (ae && ae.parentNode === ie && ma === Ye || (ae && (de(ae), ae = null, ma = -1), !ie)) return;
      const ka = document.createElement("div");
      ka.className = "dropSlot", ie.insertBefore(ka, Ne), ae = ka, ma = Ye, ka.getBoundingClientRect(), ka.style.height = it + "px", ka.style.marginTop = "0px";
    }, ya = () => {
      let ie = null, Ne = 1 / 0;
      for (const _n of Vi()) {
        const ce = _n.getBoundingClientRect();
        if (Et < ce.left - 48 || Et > ce.right + 48) continue;
        const Me = ce.top - 28, Oe = ce.bottom + 28, dn = At < Me ? Me - At : At > Oe ? At - Oe : 0;
        dn < Ne && (Ne = dn, ie = _n);
      }
      const Ye = A == null ? void 0 : A.getBoundingClientRect(), ln = Ye && Et >= Ye.left && Et <= Ye.right && At >= Ye.top && At <= Ye.bottom || Ne === 0 ? ie : null;
      if (ln) {
        const _n = [...ln.children].filter((Me) => Me.classList.contains("moveRow"));
        let ce = _n.findIndex((Me) => {
          const Oe = Me.getBoundingClientRect();
          return At < Oe.top + Oe.height / 2;
        });
        ce < 0 && (ce = _n.length), xa(ln, _n[ce] || null, ce);
      } else xa(null);
      Lt(ln);
    }, zl = () => {
      if (Ge) return Ge.aim();
      if (re) {
        const ie = re.getBoundingClientRect();
        let Ne = At - it / 2;
        return ae && (Ne = Ne * 0.6 + ae.getBoundingClientRect().top * 0.4), { x: ie.left, y: Ne };
      }
      return { x: Et - It, y: At - te };
    }, bs = (ie, Ne, Ye, ka) => {
      e.style.transform = "translate(" + fe + "px," + ge + "px) rotate(" + ie + "deg) rotate(" + Ne + "rad) scale(" + Ye + "," + ka + ") rotate(" + -Ne + "rad)";
    }, Vl = () => {
      if (Pa = requestAnimationFrame(Vl), !Ee) {
        const ce = Et - s, Me = At - f, Oe = Math.min(Math.hypot(ce, Me) / Ot, 1);
        fe = r.left + ce * 0.35, ge = r.top + Me * 0.35, bs(0, Math.atan2(Me, ce), 1 + 0.155 * Oe, 1 - 0.1 * Oe);
        return;
      }
      const ie = zl();
      if (!pt) {
        fe = ie.x, ge = ie.y, bs(0, 0, 1, 1), Ge && (cancelAnimationFrame(Pa), Ge.done());
        return;
      }
      const Ne = Ge ? Ge.k : 0.17, Ye = Ge ? Ge.d : 0.7;
      jt = (jt + (ie.x - fe) * Ne) * Ye, ve = (ve + (ie.y - ge) * Ne) * Ye, fe += jt, ge += ve;
      const ka = Math.hypot(jt, ve), ln = Math.min(ka / 48, 1), _n = re || Ge ? 0 : Math.max(-5, Math.min(5, jt * 0.32));
      bs(_n, Math.atan2(ve, jt), 1 + 0.1 * ln, 1 - 0.063 * ln), Ge && ka < 0.15 && Math.hypot(ie.x - fe, ie.y - ge) < 0.6 && (cancelAnimationFrame(Pa), Ge.done());
    }, Gl = setInterval(() => {
      if (!b || Ge) return;
      const ie = b.getBoundingClientRect(), Ne = 64, Ye = At < ie.top + Ne ? -(ie.top + Ne - At) / 4 : At > ie.bottom - Ne ? (At - (ie.bottom - Ne)) / 4 : 0;
      Ye && (b.scrollTop += Math.max(-18, Math.min(18, Ye)), ya());
    }, 30);
    Pa = requestAnimationFrame(Vl);
    let ol = !1;
    const Gi = (ie, Ne) => {
      if (ol) return;
      ol = !0, cancelAnimationFrame(Pa);
      const Ye = ae ? ae.offsetHeight : it;
      !ie && ae && (ae.remove(), ae = null), ie ? O(ie, Ne, Ye) : ct();
    };
    return {
      move(ie, Ne) {
        Et = ie, At = Ne, !Ee && Math.hypot(Et - s, At - f) > Ot && (Ee = !0, jt = (Et - s) * 0.085, ve = (At - f) * 0.085), Ee && ya();
      },
      drop(ie) {
        clearInterval(Gl);
        const Ne = re, Ye = ma;
        if (!ie && Ne && ae) {
          const ka = ae;
          Ge = { k: 0.24, d: 0.62, aim: () => {
            const ln = ka.getBoundingClientRect();
            return { x: ln.left, y: ln.top };
          }, done: () => Gi(Ne, Ye) }, setTimeout(() => Gi(Ne, Ye), 650), pt || (cancelAnimationFrame(Pa), Gi(Ne, Ye));
          return;
        }
        xa(null), Lt(null), Ge = { k: 0.2, d: 0.66, aim: () => {
          const ka = N();
          return { x: ka.left, y: ka.top };
        }, done: () => Gi(null) }, setTimeout(() => Gi(null), 650), pt || (cancelAnimationFrame(Pa), Gi(null));
      }
    };
  }
  function en(e, r) {
    let s = !1;
    e.addEventListener("click", (f) => {
      if (s) {
        s = !1, f.preventDefault();
        return;
      }
      if (za()) {
        K(r);
        return;
      }
      const b = i("strengthList"), A = vo(r, b, ye(b).arr.length, 0);
      A == null || A.scrollIntoView({ block: "nearest", behavior: Ia() ? "auto" : "smooth" });
    }), e.addEventListener("pointerdown", (f) => {
      if (f.button !== void 0 && f.button !== 0) return;
      const b = f.pointerId, A = f.clientX, N = f.clientY;
      let O = null, ct = !1;
      try {
        e.setPointerCapture(b);
      } catch {
      }
      const mt = (At) => {
        if (At.pointerId === b) {
          if (At.pointerType === "mouse" && At.buttons === 0) {
            Et(!1);
            return;
          }
          if (!O) {
            if (Math.hypot(At.clientX - A, At.clientY - N) < 6) return;
            O = qr(e, r, A, N);
          }
          O.move(At.clientX, At.clientY);
        }
      }, pt = (At) => {
        At.pointerId === b && Et(!1);
      }, it = (At) => {
        At.pointerId === b && Et(!0);
      }, It = () => Et(!1), te = () => Et(!0), Ot = (At) => {
        At.key === "Escape" && O && (At.preventDefault(), At.stopPropagation(), Et(!0));
      };
      function Et(At) {
        if (!ct && (ct = !0, window.removeEventListener("pointermove", mt, !0), window.removeEventListener("pointerup", pt, !0), window.removeEventListener("pointercancel", it, !0), window.removeEventListener("keydown", Ot, !0), window.removeEventListener("blur", te), e.removeEventListener("lostpointercapture", It), O)) {
          const fe = O;
          O = null, s = !0, setTimeout(() => {
            s = !1;
          }, 0), fe.drop(At);
        }
      }
      window.addEventListener("pointermove", mt, !0), window.addEventListener("pointerup", pt, !0), window.addEventListener("pointercancel", it, !0), window.addEventListener("keydown", Ot, !0), window.addEventListener("blur", te), e.addEventListener("lostpointercapture", It);
    });
  }
  const ia = (rc = window.matchMedia) == null ? void 0 : rc.call(window, "(max-width: 620px)");
  function za() {
    var e;
    return !!((e = window.matchMedia) != null && e.call(window, "(max-width: 620px)").matches);
  }
  const rr = (e) => e.charAt(0).toUpperCase() + e.slice(1), bo = (e) => e.kind === "rest" ? "rest" : e.kind === "video" ? "video" : "movement";
  let Ho = null, h = null;
  function S(e, r, s, f) {
    C(), i("sheetTitle").textContent = e;
    const b = i("sheetBody");
    b.innerHTML = "", b.appendChild(r), Ho = s || null, i("sheet").setAttribute("aria-hidden", "false"), i("sheetScrim").classList.add("open"), i("sheet").classList.add("open"), setTimeout(() => {
      if (!i("sheet").classList.contains("open") || !b.contains(r)) return;
      const A = f ? b.querySelector("input[data-f=url],input[data-f=name]") : b.querySelector("button,input,select");
      A == null || A.focus({ preventScroll: !0 });
    }, Ia() ? 0 : 360);
  }
  function C() {
    const e = i("sheet");
    if (!e.classList.contains("open")) return;
    e.classList.remove("open"), i("sheetScrim").classList.remove("open"), e.setAttribute("aria-hidden", "true"), e.contains(n.activeElement) && n.activeElement.blur();
    const r = Ho;
    Ho = null, r == null || r(), setTimeout($t, 0);
  }
  i("sheetScrim").addEventListener("click", C), i("sheet").addEventListener("keydown", (e) => {
    e.key === "Escape" && (e.preventDefault(), C());
  });
  function R(e, r) {
    const s = jn(e, r.indexOf(e), {
      sheet: !0,
      isNew: !1,
      onSaved() {
        C(), Te(), Ae(rr(bo(e)) + " updated");
      },
      onCancel: C,
      onHide() {
        e.hidden = !e.hidden, C(), Te(), Ae((e.hidden ? "Hidden: " : "Showing: ") + e.name);
      },
      onRemove() {
        C();
        const f = r.indexOf(e);
        f < 0 || (r.splice(f, 1), Te(), Ae("Removed " + e.name, { label: "Undo", run: () => {
          r.splice(Math.min(f, r.length), 0, e), Te();
        } }));
      }
    });
    S("Edit " + bo(e), s, null, !1);
  }
  function z() {
    const e = document.createElement("div");
    e.className = "sheetChoices", [["movement", "activity", "Movement", "Name it, then drag it into place"], ["rest", "pause", "Rest", "A pause between movements"], ["video", "play", "Video", "Paste a YouTube link"]].forEach(([r, s, f, b]) => {
      const A = document.createElement("button");
      A.type = "button", A.className = "sheetChoice", A.innerHTML = '<span class="timeIcon" aria-hidden="true">' + _a(s) + "</span><span><strong>" + f + "</strong><small>" + b + "</small></span>", A.addEventListener("click", () => K(r)), e.appendChild(A);
    }), S("Add to the move", e, null, !1);
  }
  function K(e) {
    h && pe();
    const r = tn(e, i("strengthList")), s = jn(r, -1, {
      sheet: !0,
      isNew: !0,
      onSaved() {
        C(), Yt(r, e);
      },
      onCancel: C
    });
    S("New " + bo(r), s, null, !0);
  }
  const nt = i("workoutModal").querySelector(".modalStatic"), bt = { parent: nt.parentNode, next: nt.nextSibling };
  function kt() {
    const e = document.createElement("div");
    e.className = "sheetSetup", e.appendChild(nt);
    const r = document.createElement("button");
    r.type = "button", r.className = "primary sheetDone", r.textContent = "Done", r.addEventListener("click", C), e.appendChild(r), S("Setup", e, () => {
      bt.parent.insertBefore(nt, bt.next), Ft();
    }, !1);
  }
  function Ft() {
    var r, s;
    const e = i("setupSummaryName");
    e && (e.textContent = (((r = i("workoutNameInput")) == null ? void 0 : r.value) || "").trim() || ((s = ee[Jt]) == null ? void 0 : s.name) || "Move", i("setupSummaryMeta").textContent = La.textContent);
  }
  i("setupSummary").addEventListener("click", kt), i("addFab").addEventListener("click", z);
  function Tt() {
    const e = i("strengthList");
    return bi(e) || e.closest(".exerciseScroller");
  }
  function Bt() {
    const e = i("strengthList").getBoundingClientRect(), r = (Tt() || i("strengthList")).getBoundingClientRect(), s = (h == null ? void 0 : h.ghost.offsetHeight) || 64;
    return { left: e.left, top: Math.max(r.top + 12, Math.min(r.bottom - s - 96, r.top + r.height * 0.55 - s / 2)), width: e.width, height: s };
  }
  function Yt(e, r) {
    var O;
    const s = Da(r, [e.name || Sn[r][0], "Drag into place"]);
    s.classList.add("overList", "hovering"), s.setAttribute("aria-label", (e.name || "New step") + ". Drag it into place in the list, or add it at the end.");
    const f = document.createElement("span");
    f.className = "addGhostActions", f.innerHTML = '<button class="hideBtn" type="button" data-a="end">Add at end</button><button class="hideBtn ghostDiscard" type="button" data-a="discard" aria-label="Discard ' + Ut(e.name) + '">✕</button>', s.appendChild(f), h = { item: e, type: r, ghost: s };
    const b = ((O = n.querySelector(".moveList .moveRow:not(.editing)")) == null ? void 0 : O.offsetHeight) || 64;
    s.style.width = i("strengthList").getBoundingClientRect().width + "px", s.style.height = b + "px";
    const A = Bt(), N = Ha.querySelector(".modal").getBoundingClientRect().bottom;
    s.style.transform = "translate(" + A.left + "px," + N + "px)", s.getBoundingClientRect(), Ia() || (s.classList.add("rising"), setTimeout(() => s.classList.remove("rising"), 650)), s.style.transform = "translate(" + A.left + "px," + A.top + "px)", f.querySelector("[data-a=end]").addEventListener("click", pe), f.querySelector("[data-a=discard]").addEventListener("click", Zt), s.addEventListener("pointerdown", Vt);
  }
  function Vt(e) {
    if (!h || e.target.closest("button") || e.button !== void 0 && e.button !== 0) return;
    e.preventDefault();
    const { item: r, ghost: s } = h, f = e.pointerId;
    try {
      s.setPointerCapture(f);
    } catch {
    }
    s.classList.remove("hovering", "rising"), s.classList.add("held");
    const b = s.getBoundingClientRect(), A = Tt(), N = ir({
      ghost: s,
      origin: { left: b.left, top: b.top, width: b.width, height: b.height },
      sx: e.clientX,
      sy: e.clientY,
      scroller: A,
      column: i("strengthList").closest(".exerciseScroller,.createFlow") || A,
      rowLook: !0,
      home: Bt,
      onDrop: (Et, At, fe) => {
        h = null, Nn(s), Nt(r, Et, At, fe);
      },
      onReturn: () => {
        s.classList.remove("held"), s.classList.add("hovering");
      }
    });
    let O = !1;
    const ct = (Et) => {
      if (Et.pointerId === f) {
        if (Et.pointerType === "mouse" && Et.buttons === 0) {
          Ot(!1);
          return;
        }
        N.move(Et.clientX, Et.clientY);
      }
    }, mt = (Et) => {
      Et.pointerId === f && Ot(!1);
    }, pt = (Et) => {
      Et.pointerId === f && Ot(!0);
    }, it = () => Ot(!1), It = () => Ot(!0), te = (Et) => {
      Et.key === "Escape" && (Et.preventDefault(), Ot(!0));
    };
    function Ot(Et) {
      O || (O = !0, window.removeEventListener("pointermove", ct, !0), window.removeEventListener("pointerup", mt, !0), window.removeEventListener("pointercancel", pt, !0), window.removeEventListener("keydown", te, !0), window.removeEventListener("blur", It), s.removeEventListener("lostpointercapture", it), N.drop(Et));
    }
    window.addEventListener("pointermove", ct, !0), window.addEventListener("pointerup", mt, !0), window.addEventListener("pointercancel", pt, !0), window.addEventListener("keydown", te, !0), window.addEventListener("blur", It), s.addEventListener("lostpointercapture", it);
  }
  function Nt(e, r, s, f) {
    const b = ye(r);
    e.kind !== "rest" && e.kind !== "video" && (e.kind = b.kind, b.group && (!e.group || e.group === "Movement") && (e.group = b.group)), b.arr.splice(Math.max(0, Math.min(s, b.arr.length)), 0, e), vi(r.closest(".exerciseScroller,.createStepSlot") || r, () => Te()), or(r.querySelector('.moveRow[data-id="' + e.id + '"]'), f), Ae(rr(bo(e)) + " added");
  }
  function pe() {
    var f;
    if (!h) return;
    const { item: e, ghost: r } = h;
    h = null, Nn(r);
    const s = i("strengthList");
    Nt(e, s, ye(s).arr.length, 0), (f = s.querySelector('.moveRow[data-id="' + e.id + '"]')) == null || f.scrollIntoView({ block: "nearest", behavior: Ia() ? "auto" : "smooth" });
  }
  function Zt() {
    if (!h) return;
    const e = h.ghost;
    h = null, Nn(e), Ae("Discarded");
  }
  function _t() {
    h && (h.ghost.remove(), h = null);
  }
  window.addEventListener("resize", () => {
    if (h != null && h.ghost.classList.contains("hovering")) {
      const e = Bt();
      h.ghost.style.width = e.width + "px", h.ghost.style.transform = "translate(" + e.left + "px," + e.top + "px)";
    }
  }), (sc = ia == null ? void 0 : ia.addEventListener) == null || sc.call(ia, "change", () => {
    C(), h && !za() && pe(), Ue();
  });
  {
    const e = i("workoutModal").querySelector(".modal");
    e.addEventListener("scroll", () => {
      (e.scrollTop || e.scrollLeft) && (e.scrollTop = 0, e.scrollLeft = 0);
    });
  }
  function $t() {
    const e = i("workoutModal"), r = window.visualViewport;
    if (!e.classList.contains("open") || !za()) {
      oe();
      return;
    }
    const s = r ? r.offsetTop : 0, f = r ? r.offsetLeft : 0, b = r ? r.width : window.innerWidth, A = r ? r.height : window.innerHeight;
    Object.assign(e.style, { right: "auto", bottom: "auto", width: b + "px", height: A + "px", top: s + "px", left: f + "px" });
    const N = e.getBoundingClientRect();
    Math.abs(N.top - s) > 0.5 && (e.style.top = 2 * s - N.top + "px"), Math.abs(N.left - f) > 0.5 && (e.style.left = 2 * f - N.left + "px");
  }
  function oe() {
    ["top", "left", "right", "bottom", "width", "height"].forEach((e) => i("workoutModal").style.removeProperty(e));
  }
  (lc = window.visualViewport) == null || lc.addEventListener("resize", $t), (dc = window.visualViewport) == null || dc.addEventListener("scroll", $t), window.addEventListener("resize", $t), window.addEventListener("scroll", $t, { passive: !0 }), window.addEventListener("orientationchange", () => setTimeout($t, 250));
  function fa() {
    la.length > 0;
    const e = i("addMovementBtn"), r = i("addRestBtn");
    e && (e.innerHTML = mo + "<span>Add movement</span>"), r && (r.innerHTML = mo + "<span>Add rest</span>");
    const s = i("addVideoBtn");
    s && (s.innerHTML = mo + "<span>Add video</span>");
  }
  function Pt() {
    const e = i("useGlobalTiming").checked, r = i("addMovementDuration"), s = i("addMovementUnit");
    r.disabled = e, s.disabled = e, r.parentElement.style.opacity = e ? ".38" : "1", i("globalTimingValue").textContent = "Use global timing · " + pa(L.value);
    const f = i("useGlobalRestTiming").checked, b = i("addRestDuration"), A = i("addRestUnit");
    b.disabled = f, A.disabled = f, b.parentElement.style.opacity = f ? ".38" : "1", i("globalRestTimingValue").textContent = "Use global timing · " + pa(P.value);
  }
  let Be = "movement";
  function Ze(e) {
    Be = e;
    const r = i("movementFields"), s = i("restFields");
    r.hidden = e !== "movement", s.hidden = e !== "rest", i("movementCreatorHeading").textContent = "Add movement", i("movementCreator").setAttribute("aria-label", "Create movement"), Pt();
  }
  function Ca() {
    ee[Jt];
    const e = Kt ? !0 : i("useGlobalTiming").checked, r = e ? Number(L.value) : kn(
      i("addMovementDuration").value,
      i("addMovementUnit").value
    ), s = Kt ? !0 : i("useGlobalRestTiming").checked, f = s ? Number(P.value) : kn(
      i("addRestDuration").value,
      i("addRestUnit").value
    );
    if (Be === "rest") {
      const b = i("addRestTitle").value.trim() || "Rest", A = i("addRestGroup").value.trim() || "Rest";
      la.push({
        id: "rest-" + Date.now(),
        name: b,
        group: A,
        kind: "rest",
        hidden: !1,
        useGlobalTiming: s,
        duration: Math.max(5, f || Number(P.value))
      }), Te(), i("movementCreator").hidden = !0, i("addRestTitle").value = "Rest", i("addRestGroup").value = "Rest", Ae("Rest added"), Kt && (T("movements"), ot());
    } else {
      const b = i("addMovementInput").value.trim();
      if (!b) return;
      const A = i("addMovementGroup").value.trim() || "Movement";
      la.push({
        id: "movement-" + Date.now(),
        name: b,
        group: A,
        kind: "work",
        hidden: !1,
        useGlobalTiming: e,
        duration: Math.max(5, r || Number(L.value))
      }), i("addMovementInput").value = "", i("addMovementGroup").value = "", Te(), i("movementCreator").hidden = !0, Ae("Movement added"), Kt && (T("movements"), ot());
    }
    fa();
  }
  let Cn = null;
  function Ae(e, r) {
    const s = i("toast");
    s.innerHTML = "";
    const f = document.createElement("span");
    if (f.textContent = e, s.appendChild(f), r) {
      const b = document.createElement("button");
      b.type = "button", b.className = "toastAction", b.textContent = r.label, b.addEventListener("click", () => {
        r.run(), s.classList.remove("show", "withAction"), clearTimeout(Cn);
      }), s.appendChild(b);
    }
    s.classList.toggle("withAction", !!r), s.classList.add("show"), clearTimeout(Cn), Cn = setTimeout(() => s.classList.remove("show", "withAction"), r ? 5e3 : 2200);
  }
  const Gn = ["Terrible", "Poor", "Meh", "Okay", "Good", "Great"], wo = ["#6E63A8", "#5878A8", "#6F8B8A", "#5F9B72", "#D5A53E", "#D56B54"];
  function be(e) {
    return Math.max(0, Math.min(5, Math.floor(Number(e) / 100 * 6)));
  }
  function Ba(e, r) {
    return Gn[be(r)];
  }
  function xo(e) {
    return wo[be(e)];
  }
  function Ie(e) {
    return e.getFullYear() + "-" + String(e.getMonth() + 1).padStart(2, "0") + "-" + String(e.getDate()).padStart(2, "0");
  }
  function an() {
    return { morning: me().morningTime || "08:00", evening: me().eveningTime || "19:00" };
  }
  function Un(e) {
    const [r, s] = String(e).split(":").map(Number);
    return (r || 0) * 60 + (s || 0);
  }
  function Fo(e) {
    const r = an();
    return e.getHours() * 60 + e.getMinutes() >= Un(r.evening) ? "evening" : "morning";
  }
  function va(e, r) {
    return xe.checkins.find((s) => s.date === e && s.slot === r);
  }
  function wi(e) {
    return !!(e && e.mood != null && e.energy != null);
  }
  function sr() {
    const e = /* @__PURE__ */ new Date(), r = Ie(e), s = Fo(e), f = an(), b = e.getHours() * 60 + e.getMinutes();
    return s === "morning" && b < Un(f.morning) || wi(va(r, s)) ? null : s;
  }
  const yo = i("checkinModal"), ko = i("checkinTab"), Yn = i("checkinBadge"), Zn = { mood: { input: i("moodInput"), fill: i("moodFill") }, energy: { input: i("energyLevelInput"), fill: i("energyLevelFill") } };
  function jr(e) {
    const { input: r, fill: s } = Zn[e];
    s.style.width = r.value + "%", r.setAttribute("aria-valuetext", Ba(e, r.value));
  }
  Object.keys(Zn).forEach((e) => Zn[e].input.addEventListener("input", () => jr(e)));
  let Tn = null;
  function pl() {
    const e = an(), r = /* @__PURE__ */ new Date(), s = r.getHours() * 60 + r.getMinutes();
    return s < Un(e.morning) ? "Next check-in at " + e.morning : s < Un(e.evening) ? "Next check-in at " + e.evening : "Next check-in tomorrow at " + e.morning;
  }
  function pd() {
    const e = an(), r = /* @__PURE__ */ new Date(), s = r.getHours() * 60 + r.getMinutes(), f = (b, A) => {
      const [N, O] = b.split(":").map(Number);
      return new Date(r.getFullYear(), r.getMonth(), r.getDate() + (A ? 1 : 0), N, O);
    };
    return s < Un(e.morning) ? { date: f(e.morning), time: e.morning } : s < Un(e.evening) ? { date: f(e.evening), time: e.evening } : { date: f(e.morning, !0), time: e.morning };
  }
  let Oo = null, Va = null;
  function ul() {
    if (sr()) {
      lr(), Mo();
      return;
    }
    const e = pd(), r = Math.max(0, Math.round((e.date - Date.now()) / 1e3)), s = Math.floor(r / 3600), f = Math.floor(r % 3600 / 60), b = r % 60;
    i("peekCountdown").textContent = s + ":" + String(f).padStart(2, "0") + ":" + String(b).padStart(2, "0"), i("peekAt").textContent = "Available at " + e.time;
  }
  function fl() {
    ul(), ko.classList.add("peek"), clearInterval(Va), Va = setInterval(ul, 1e3), clearTimeout(Oo), Oo = setTimeout(lr, 6e3);
  }
  function lr() {
    ko.classList.remove("peek"), clearInterval(Va), clearTimeout(Oo);
  }
  function dr() {
    const e = sr();
    if (!e) {
      ko.classList.contains("peek") ? lr() : fl();
      return;
    }
    Tn = { date: Ie(/* @__PURE__ */ new Date()), slot: e };
    const s = va(Tn.date, e), f = xe.checkins.find((b) => wi(b));
    Object.keys(Zn).forEach((b) => {
      Zn[b].input.value = (s == null ? void 0 : s[b]) ?? (f == null ? void 0 : f[b]) ?? 50, jr(b);
    }), i("checkinTitle").textContent = e === "morning" ? "Morning check-in" : "Evening check-in", yo.classList.add("open"), yo.setAttribute("aria-hidden", "false"), requestAnimationFrame(() => Zn.mood.input.focus());
  }
  function cr() {
    yo.classList.remove("open"), yo.setAttribute("aria-hidden", "true"), Tn && (Wo = Tn.date + "-" + Tn.slot);
    try {
      localStorage.setItem("move-assistant-dismissed", Wo);
    } catch {
    }
    Tn = null, Mo();
  }
  function ud() {
    if (!Tn) return;
    if (wi(va(Tn.date, Tn.slot))) {
      cr();
      return;
    }
    const { date: e, slot: r } = Tn;
    let s = va(e, r);
    s || (s = { date: e, slot: r }, xe.checkins.unshift(s), xe.checkins = xe.checkins.slice(0, 2e3)), s.mood = Number(Zn.mood.input.value), s.energy = Number(Zn.energy.input.value), s.scale = 100, s.at = (/* @__PURE__ */ new Date()).toISOString(), Xa(), d.fire("checkin", { slot: r, mood: s.mood, energy: s.energy, mood_label: Ba("mood", s.mood), energy_label: Ba("energy", s.energy) }), Ae((r === "morning" ? "Morning" : "Evening") + " check-in saved"), cr(), zr(), pr(), ti(), rn();
  }
  let Wo = "";
  try {
    Wo = localStorage.getItem("move-assistant-dismissed") || "";
  } catch {
  }
  function Mo() {
    const e = sr();
    Yn.hidden = !e, ko.hidden = !e, e || lr(), ko.classList.toggle("due", !!e), ko.setAttribute("aria-label", e ? (e === "morning" ? "Morning" : "Evening") + " check-in is due" : pl()), ko.title = e ? "Check in now" : pl();
  }
  function As() {
    Mo();
    const e = sr();
    !e || yo.classList.contains("open") || me().checkinAutoOpen !== !1 && (i("app").classList.contains("house") || !wt.home.classList.contains("active") || Ha.classList.contains("open") || Wo !== Ie(/* @__PURE__ */ new Date()) + "-" + e && dr());
  }
  ko.addEventListener("click", dr), i("checkinLater").addEventListener("click", cr), i("checkinSave").addEventListener("click", ud), yo.addEventListener("click", (e) => {
    e.target === yo && cr();
  }), yo.addEventListener("keydown", (e) => {
    e.key === "Escape" && (e.preventDefault(), cr());
  }), setInterval(As, 3e4);
  function zr() {
    const e = Ie(/* @__PURE__ */ new Date()), r = (s) => xe.checkins.find((f) => f.date === e && f[s] != null);
    [["mood", "moodMeta"], ["energy", "energyLevelMeta"]].forEach(([s, f]) => {
      const b = r(s);
      i(f).textContent = b ? Ba(s, b[s]) : "—";
    });
  }
  function pr() {
    const e = i("feelCard");
    if (!e) return;
    const r = /* @__PURE__ */ new Date(), s = new Date(r.getFullYear(), r.getMonth(), r.getDate() - (r.getDay() + 6) % 7), f = [...Array(7)].map((mt, pt) => {
      const it = new Date(s.getFullYear(), s.getMonth(), s.getDate() + pt), It = Ie(it), te = xe.checkins.filter((Et) => Et.date === It), Ot = (Et) => {
        const At = te.map((fe) => fe[Et]).filter((fe) => fe != null);
        return At.length ? At.reduce((fe, ge) => fe + ge, 0) / At.length : null;
      };
      return { d: it, key: It, mood: Ot("mood"), energy: Ot("energy"), count: te.filter(wi).length, future: it > r && It !== Ie(r) };
    }), b = (mt) => {
      const pt = f.map((it) => it[mt]).filter((it) => it != null);
      return pt.length ? pt.reduce((it, It) => it + It, 0) / pt.length : null;
    }, A = b("mood"), N = b("energy"), O = (mt, pt) => '<div class="feelMeter"><div class="feelMeterTop"><span>' + mt + "</span><span>" + (pt == null ? "—" : Ut(Ba("", pt))) + '</span></div><div class="feelTrack"><span style="width:' + (pt == null ? 0 : Math.max(4, pt)) + "%;background:" + (pt == null ? "transparent" : xo(pt)) + '"></span></div></div>', ct = f.filter((mt) => mt.mood != null && mt.energy != null).sort((mt, pt) => pt.mood + pt.energy - (mt.mood + mt.energy))[0];
    e.innerHTML = '<div class="feelTop"><div class="feelSummary"><div class="feelHeadline">' + (A == null ? "No check-ins yet" : Ut(Ba("", (A + N) / 2))) + '</div><div class="weekCopy">' + (A == null ? "Your first check-in will appear here." : "on average this week" + (ct ? " · best day " + Ut(new Intl.DateTimeFormat(void 0, { weekday: "long" }).format(ct.d)) : "")) + '</div></div></div><div class="feelDays">' + f.map(
      (mt) => '<div class="weekChip feelDay' + (mt.future ? " future" : "") + (mt.key === Ie(r) ? " today" : "") + '"><div class="weekChipTop"><strong>' + Ut(new Intl.DateTimeFormat(void 0, { weekday: "short" }).format(mt.d)) + "</strong>" + (mt.count >= 2 ? '<span class="weekTick">' + _a("check") + "</span>" : '<span class="feelDots">' + "●".repeat(mt.count) + "</span>") + "</div>" + O("Mood", mt.mood) + O("Energy", mt.energy) + "</div>"
    ).join("") + "</div>";
  }
  const xi = i("upcomingCountSetting");
  xi.addEventListener("change", () => {
    po = xi.value === "all" ? "all" : Number(xi.value), Uo();
  });
  const ur = i("tempoRevealBtn"), Vr = i("tempoExperiment"), Pn = i("tempoQuad"), qo = i("tempoDot"), fd = i("tempoEstimate"), hl = i("tempoReadout");
  let yi = { x: 0.5, y: 0.5 }, Kn = !1, ki = { total: 20, work: 45, rest: 15 };
  function fr(e, r, s, f) {
    const b = Math.max(r, Math.min(s, e));
    return Math.round((b - r) / f) * f + r;
  }
  function ml(e, r) {
    const s = (e - 0.5) * 2, f = (r - 0.5) * 2, b = fr(
      ki.total + s * 5 + f * 8,
      Number(_.min),
      Number(_.max),
      Number(_.step)
    ), A = fr(
      ki.work + s * 10 + f * 8,
      Number(L.min),
      Number(L.max),
      Number(L.step)
    ), N = fr(
      ki.rest + s * 6 + f * 6,
      Number(P.min),
      Number(P.max),
      Number(P.step)
    );
    return _.value = b, L.value = A, P.value = N, ft.textContent = A + " sec", j.textContent = N + " sec", mi(), { total: b, work: A, rest: N };
  }
  function hr(e, r) {
    const s = e < 0.34 ? "Low" : e > 0.66 ? "Hard" : "Medium", f = r < 0.34 ? "Fast" : r > 0.66 ? "Slow" : "Balanced", b = ml(e, r);
    hl.textContent = s + " + " + f, fd.textContent = b.total + " min", Pn.setAttribute("aria-valuetext", s + " and " + f + ", estimated " + b.total + " minutes");
  }
  function Ls(e) {
    const r = Pn.getBoundingClientRect(), s = Math.max(0, Math.min(1, (e.clientX - r.left) / r.width)), f = Math.max(0, Math.min(1, (e.clientY - r.top) / r.height));
    yi = { x: s, y: f }, qo.style.left = s * 100 + "%", qo.style.top = f * 100 + "%", hr(s, f);
  }
  ur.addEventListener("click", () => {
    const e = Vr.hidden;
    Vr.hidden = !e, ur.setAttribute("aria-expanded", e ? "true" : "false"), ur.textContent = e ? "Now close this" : "Don’t try this!", e && (ki = {
      total: Number(_.value),
      work: Number(L.value),
      rest: Number(P.value)
    }, yi = { x: 0.5, y: 0.5 }, qo.style.left = "50%", qo.style.top = "50%", hr(yi.x, yi.y));
  }), n.querySelectorAll("[data-feedback-rating]").forEach((e) => e.addEventListener("click", () => {
    Number(e.dataset.feedbackRating), n.querySelectorAll("[data-feedback-rating]").forEach((r) => r.classList.toggle("selected", r === e));
  }));
  const Gr = i("testingFeedbackForm"), gl = i("testingFeedbackThanks"), hd = i("testingFeedbackAgain");
  Gr.addEventListener("submit", (e) => {
    e.preventDefault(), Gr.hidden = !0, gl.hidden = !1, Ae("Feedback captured for prototype");
  }), hd.addEventListener("click", (e) => {
    e.preventDefault(), Gr.reset(), n.querySelectorAll("[data-feedback-rating]").forEach((r) => r.classList.remove("selected")), gl.hidden = !0, Gr.hidden = !1;
  }), Pn.addEventListener("pointerdown", (e) => {
    var r;
    Kn = !0, Ls(e);
    try {
      (r = Pn.setPointerCapture) == null || r.call(Pn, e.pointerId);
    } catch {
    }
  }), Pn.addEventListener("pointermove", (e) => {
    Kn && Ls(e);
  }), Pn.addEventListener("pointerup", (e) => {
    Kn && (Kn = !1, Ls(e), Te());
  }), Pn.addEventListener("pointercancel", () => Kn = !1), Pn.addEventListener("keydown", (e) => {
    let { x: r, y: s } = yi, f = !0;
    e.key === "ArrowLeft" ? r -= 0.05 : e.key === "ArrowRight" ? r += 0.05 : e.key === "ArrowUp" ? s -= 0.05 : e.key === "ArrowDown" ? s += 0.05 : f = !1, f && (e.preventDefault(), r = Math.max(0, Math.min(1, r)), s = Math.max(0, Math.min(1, s)), yi = { x: r, y: s }, qo.style.left = r * 100 + "%", qo.style.top = s * 100 + "%", hr(r, s), Te());
  });
  const Ha = i("workoutModal");
  let $n = null;
  function jo(e) {
    return e.map((r) => ({ ...r }));
  }
  function md() {
    const e = ee[Jt];
    return {
      key: Jt,
      profile: e ? JSON.parse(JSON.stringify(e)) : null,
      warmup: jo(he),
      strength: jo(la),
      cooldown: jo(ze),
      total: Number(_.value),
      work: Number(L.value),
      rest: Number(P.value),
      rounds: Number(se.value) || 1
    };
  }
  function vl(e = !1) {
    Kt = !!e, Ve = null, ua = null, C(), _t(), $n = md(), i("moveEditorTitle").textContent = Kt ? "Create new move" : "Edit move", i("moveEditorSubtitle").textContent = "Build the sequence first, then set timing, then finish the move.", i("moveEditorSubtitle").hidden = !Kt, i("warmupRow").hidden = Kt, i("deleteMoveOpen").hidden = Kt;
    const r = i("createMoveOptions");
    r.hidden = !Kt;
    {
      const s = ee[Jt];
      i("includeWarmupPreset").checked = !!(s != null && s.includeWarmup), i("includeCooldownPreset").checked = !!(s != null && s.includeCooldown);
    }
    if (Es(), Kt) {
      i("useGlobalTiming").checked = !0, i("useGlobalRestTiming").checked = !0;
      const s = ee[Jt];
      ho((s == null ? void 0 : s.preset) || "movement", !1);
    }
    i("movementCreator").hidden = !0, Ze("movement"), fa(), Pt(), Vr.hidden = !0, ur.setAttribute("aria-expanded", "false"), ur.textContent = "Don’t try this!", Ha.classList.toggle("createMode", Kt), Ha.querySelector(".modal").classList.toggle("createMode", Kt), Ha.classList.add("open"), Ha.setAttribute("aria-hidden", "false"), $t(), Kt && St();
  }
  function Mi() {
    const e = ee[Jt];
    return e != null && e.customSequence ? !!e.includeWarmup : !(e != null && e.warmupOff);
  }
  function Es() {
    const e = Mi(), r = i("warmupSwitch");
    r.classList.toggle("on", e), r.setAttribute("aria-checked", String(e));
  }
  i("warmupSwitch").addEventListener("click", () => {
    const e = ee[Jt];
    e && (e.customSequence ? (i("includeWarmupPreset").checked = !e.includeWarmup, er()) : (e.warmupOff = !e.warmupOff, Te()), Es());
  });
  function mr() {
    C(), _t(), oe(), ua = null, Ve = null, Ha.classList.contains("createMode") && U(), Ha.classList.remove("createMode"), Ha.querySelector(".modal").classList.remove("createMode"), Ha.classList.remove("open"), Ha.setAttribute("aria-hidden", "true");
  }
  function _s() {
    if (!$n) return;
    const e = $n;
    e.profile && (ee[e.key] = JSON.parse(JSON.stringify(e.profile))), Jt = e.key, he = jo(e.warmup), la = jo(e.strength), ze = jo(e.cooldown), _.value = e.total, L.value = e.work, P.value = e.rest, se.value = e.rounds || 1;
    const r = ee[Jt];
    if (r) {
      n.querySelectorAll(".workoutPanel[data-workout]").forEach((f) => f.classList.toggle("active", f.dataset.workout === Jt));
      const s = n.querySelector(".workoutPanel.active");
      if (s) {
        const f = s.querySelector(".workoutName");
        f && (f.textContent = r.name);
        const b = s.querySelector(".panelCollapsedText");
        b && (b.textContent = r.name);
        const A = s.querySelector(".sourceTag");
        A && (A.textContent = r.source);
      }
      g.value = r.name;
    }
    Te();
  }
  i("cancelWorkoutEdit").addEventListener("click", () => {
    if (Kt) {
      const e = Jt;
      delete ee[e], Kt = !1, Dt = null, da(xe.order.find((r) => ee[r]) || Object.keys(ee)[0]);
    } else
      _s();
    mr();
  }), i("saveWorkoutEdit").addEventListener("click", () => {
    C(), h && pe();
    const e = ee[Jt], r = g.value.trim() || "New move";
    if (e && (e.name = r), Qa(), Ve = null, Te(), Kt && e)
      Ea(Jt, e), n.querySelectorAll(".workoutPanel[data-workout]").forEach((s) => s.classList.toggle("active", s.dataset.workout === Jt)), Kt = !1, Dt = null, xe.order.includes(Jt) || xe.order.push(Jt), Ae("Move created");
    else {
      const s = n.querySelector(".workoutPanel.active");
      if (s) {
        const f = s.querySelector(".workoutName");
        f && (f.textContent = r);
        const b = s.querySelector(".panelCollapsedText");
        b && (b.textContent = r);
      }
      Ae("Move saved");
    }
    $n = null, mr(), Xa();
  }), Ha.addEventListener("click", (e) => {
    if (e.target === Ha) {
      if (Kt) {
        const r = Jt;
        delete ee[r], Kt = !1, Dt = null, da(xe.order.find((s) => ee[s]) || Object.keys(ee)[0]);
      } else
        _s();
      mr();
    }
  }), en(i("addMovementBtn"), "movement"), en(i("addRestBtn"), "rest"), en(i("addVideoBtn"), "video"), i("closeMovementCreator").addEventListener("click", () => {
    i("movementCreator").hidden = !0;
  }), i("useGlobalTiming").addEventListener("change", Pt), i("useGlobalRestTiming").addEventListener("change", Pt), n.querySelectorAll(".createPresetBtn").forEach((e) => e.addEventListener("click", () => {
    ho(e.dataset.movePreset, !0), Te();
  })), i("includeWarmupPreset").addEventListener("change", er), i("includeCooldownPreset").addEventListener("change", er), i("includeWarmupPreset").addEventListener("change", ot), i("includeCooldownPreset").addEventListener("change", ot), g.addEventListener("input", ot), g.addEventListener("input", Ft), i("confirmAddMovement").addEventListener("click", Ca), i("confirmAddRest").addEventListener("click", Ca), i("addMovementInput").addEventListener("keydown", (e) => {
    e.key === "Enter" && Ca();
  });
  const Si = i("countdown"), Ur = i("countNum"), Xn = i("countdownPixelCanvas");
  let gr = null, Ds = "appear";
  class gd {
    constructor(r, s, f, b, A, N, O) {
      this.width = r.width, this.height = r.height, this.ctx = s, this.x = f, this.y = b, this.color = A, this.speed = (Math.random() * 0.8 + 0.1) * N, this.size = 0, this.sizeStep = Math.random() * 0.4, this.minSize = 0.5, this.maxSizeInteger = 2, this.maxSize = Math.random() * (this.maxSizeInteger - this.minSize) + this.minSize, this.delay = O, this.counter = 0, this.counterStep = Math.random() * 4 + (this.width + this.height) * 0.01, this.isIdle = !1, this.isReverse = !1, this.isShimmer = !1;
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
  let Ci = [], Bs = 1, Yr = 1;
  function So() {
    const e = parseFloat(getComputedStyle(i("app")).zoom);
    return Number.isFinite(e) && e > 0 ? e : 1;
  }
  function bl() {
    var mt;
    if (!Xn) return;
    const e = So(), r = Math.max(1, window.innerWidth / e), s = Math.max(1, window.innerHeight / e);
    Bs = r, Yr = s;
    const f = Math.min(window.devicePixelRatio || 1, 2);
    Xn.width = Math.floor(r * f), Xn.height = Math.floor(s * f), Xn.style.width = r + "px", Xn.style.height = s + "px";
    const b = Xn.getContext("2d");
    b.setTransform(f, 0, 0, f, 0, 0);
    const A = ["#f2fbff", "#d4effc", "#a9e0fa", "#6cc8f6"], N = 12, O = (mt = window.matchMedia) == null ? void 0 : mt.call(window, "(prefers-reduced-motion: reduce)").matches, ct = O ? 0 : 0.055;
    Ci = [];
    for (let pt = 0; pt < r; pt += N)
      for (let it = 0; it < s; it += N) {
        const It = pt - r / 2, te = it - s / 2, Ot = Math.sqrt(It * It + te * te), Et = O ? 0 : Math.random() * 75 + Ot * 0.05, At = new gd({ width: r, height: s }, b, pt, it, A[Math.floor(Math.random() * A.length)], ct, Et);
        At.maxSizeInteger = 4, At.maxSize = Math.random() * 3.2 + 0.8, At.sizeStep = 0.35 + Math.random() * 0.45, Ci.push(At);
      }
  }
  function wl(e) {
    cancelAnimationFrame(gr), Ds = e;
    const r = Xn == null ? void 0 : Xn.getContext("2d");
    if (!r) return;
    function s() {
      r.clearRect(0, 0, Bs, Yr);
      let f = !0;
      Ci.forEach((b) => {
        b[Ds](), b.isIdle || (f = !1);
      }), Ds === "disappear" && f || (gr = requestAnimationFrame(s));
    }
    gr = requestAnimationFrame(s);
  }
  function Zr() {
    cancelAnimationFrame(gr), bl(), wl("appear"), setTimeout(() => wl("disappear"), 560);
  }
  window.addEventListener("resize", () => {
    Si.classList.contains("active") && Zr();
  });
  const Ti = i("pixelTrailCanvas"), Ai = Ti.getContext("2d");
  let mn = !0, We = 0.7, Li = 600, vr = [], Ei = null, Ga = { x: 0, y: 0, ready: !1 };
  function xl() {
    const e = p.getBoundingClientRect(), r = So(), s = Math.min(window.devicePixelRatio || 1, 2), f = Math.max(1, e.width / r), b = Math.max(1, e.height / r);
    Ti.width = Math.max(1, Math.floor(f * s)), Ti.height = Math.max(1, Math.floor(b * s)), Ti.style.width = f + "px", Ti.style.height = b + "px", Ai.setTransform(s, 0, 0, s, 0, 0);
  }
  function vd(e, r) {
    if (!mn) return;
    const s = performance.now();
    Ga.ready || (Ga = { x: e, y: r, ready: !0 });
    const f = 7;
    for (let b = 1; b <= f; b++) {
      const A = b / f;
      vr.push({
        x: Ga.x + (e - Ga.x) * A,
        y: Ga.y + (r - Ga.y) * A,
        born: s - (f - b) * 10
      });
    }
    Ga = { x: e, y: r, ready: !0 };
  }
  function Kr(e) {
    if (Ei = null, !w) return;
    if (!wt.workout.classList.contains("active")) {
      Ei = requestAnimationFrame(Kr);
      return;
    }
    const r = p.getBoundingClientRect(), s = So();
    Ai.clearRect(0, 0, r.width / s, r.height / s), mn && (vr = vr.filter((b) => e - b.born < Li), Ai.fillStyle = i("app").classList.contains("light") ? "#03A9F4" : "#f4f4f4", vr.forEach((b) => {
      const A = (e - b.born) / Li, N = (1 - A) * We, O = Math.round(b.x / 14) * 14, ct = Math.round(b.y / 14) * 14;
      Ai.globalAlpha = Math.max(0, N);
      const mt = 2 + 5 * (1 - A) * We;
      Ai.fillRect(O - mt / 2, ct - mt / 2, mt, mt);
    }), Ai.globalAlpha = 1), Ei = requestAnimationFrame(Kr);
  }
  p.addEventListener("pointermove", (e) => {
    const r = p.getBoundingClientRect(), s = So();
    vd((e.clientX - r.left) / s, (e.clientY - r.top) / s);
  }), p.addEventListener("pointerleave", () => Ga.ready = !1), new ResizeObserver(xl).observe(p), xl(), Ei = requestAnimationFrame(Kr);
  const Jn = i("movementRippleCanvas"), zo = Jn.getContext("2d");
  let Vo = !0, _i = null, yl = performance.now();
  function Di() {
    const e = Jn.parentElement.getBoundingClientRect(), r = So(), s = Math.max(1, e.width / r), f = Math.max(1, e.height / r), b = Math.min(window.devicePixelRatio || 1, 2);
    Jn.width = Math.max(1, Math.floor(s * b)), Jn.height = Math.max(1, Math.floor(f * b)), Jn.style.width = s + "px", Jn.style.height = f + "px", zo.setTransform(b, 0, 0, b, 0, 0);
  }
  function Rs() {
    var e;
    return ca || ((e = Gt[ne]) == null ? void 0 : e.kind) === "rest";
  }
  function bd() {
    const e = Gt[ne];
    return Rs() ? 2200 : e ? e.kind === "warmup" || e.kind === "cooldown" ? 2400 : 1350 : 1600;
  }
  function $r(e) {
    if (_i = null, !w) return;
    if (!wt.workout.classList.contains("active")) {
      _i = requestAnimationFrame($r);
      return;
    }
    const r = Jn.parentElement.getBoundingClientRect(), s = So(), f = Math.max(1, r.width / s), b = Math.max(1, r.height / s);
    if (zo.clearRect(0, 0, f, b), Vo) {
      const A = bd(), N = (e - yl) % A / A, O = 15, ct = Math.max(8, Math.round(O * b / Math.max(1, f))), mt = f / (O + 1), pt = b / (ct + 1), it = f * 0.5, It = b * 0.52, te = Math.hypot(it, It), Et = i("app").classList.contains("light") ? "34,34,34" : "244,244,244";
      for (let At = 1; At <= ct; At++)
        for (let fe = 1; fe <= O; fe++) {
          const ge = fe * mt, jt = At * pt, ve = Math.hypot(ge - it, jt - It) / te, Ee = Rs(), re = Ee ? Math.exp(-Math.pow((ve - (N * 0.82 + 0.08) % 1 * 1.18) * 5.5, 2)) : 0, ae = Math.exp(-Math.pow((ve - N * 1.25) * 7, 2)), ma = Ee ? re : ae, Pa = Ee ? 0.5 + 0.5 * Math.sin(N * Math.PI * 2 - ve * 3) ** 2 : 0.35 + 0.65 * Math.sin(N * Math.PI * 2 - ve * 5) ** 2, Ge = Ee ? 1.4 + ma * 4.2 * Pa : 1.2 + ma * 5 * Pa;
          zo.beginPath(), zo.arc(ge, jt, Ge, 0, Math.PI * 2), zo.fillStyle = `rgba(${Et},${Ee ? 0.08 + ma * 0.48 : 0.05 + ma * 0.55})`, zo.fill();
        }
    }
    _i = requestAnimationFrame($r);
  }
  new ResizeObserver(Di).observe(Jn.parentElement), Di(), _i = requestAnimationFrame($r);
  const Ra = i("exerciseTitle"), Qn = i("exerciseMeta"), Ns = i("stepLabel"), Fa = i("digits"), Le = i("fill"), Oa = i("progress"), br = i("pause"), Go = i("nextName"), Xr = i("nextMeta"), Co = i("nextIcon"), to = i("skipNextSession");
  let ha = null;
  function ke(e) {
    for (let r = Math.max(0, e); r < Gt.length; r++)
      if (!Gt[r].sessionHidden) return r;
    return -1;
  }
  function Jr() {
    const e = Gt[ne];
    if (!e) return { name: "Complete", meta: "Move finished", icon: "check" };
    if (ca) {
      const f = ke(ne + 1), b = f >= 0 ? Gt[f] : null;
      return b ? { name: b.name, meta: ts(b), icon: Qr(b) } : { name: "Complete", meta: "Move finished", icon: "check" };
    }
    if (e.rest > 0) return { name: "Rest", meta: e.rest + " sec · " + (e.roundBreakAfter ? "round " + (e.round + 1) + " next" : "recovery"), icon: "pause" };
    const r = ke(ne + 1), s = r >= 0 ? Gt[r] : null;
    return s ? { name: s.name, meta: ts(s), icon: Qr(s) } : { name: "Complete", meta: "Move finished", icon: "check" };
  }
  function wr() {
    if (!Gt[ne]) return Gt.length;
    const r = ke(ne + 1);
    return r < 0 ? Gt.length : r + 1;
  }
  function Qr(e) {
    return e.kind === "video" ? "play" : "clock";
  }
  function ts(e) {
    return e.kind === "video" ? "YouTube · " + Ja(e.duration) : e.group + " · " + e.duration + " sec";
  }
  function xr() {
    return Gt.length && Gt[Gt.length - 1].round || 1;
  }
  function kl(e) {
    const r = Gt[e];
    if (!r) return "";
    const s = xr();
    if (s <= 1) return "Step " + (e + 1) + " of " + Gt.length;
    if (r.roundBreak) return "Round " + r.round + " of " + s + " · Rest";
    const f = Gt.filter((b) => b.round === r.round && !b.roundBreak).length;
    return "Round " + r.round + " of " + s + " · Step " + (r.roundIndex + 1) + " of " + f;
  }
  function es() {
    return Oa.querySelector('[data-step="' + ne + '"]');
  }
  function wd() {
    Gt[ne] && Number(Oa.dataset.round) !== (Gt[ne].round || 1) && Hs(), [...Oa.children].forEach((e) => {
      const r = Number(e.dataset.step);
      e.classList.toggle("done", r < ne), e.classList.toggle("active", r === ne), e.classList.toggle("rewindable", r <= ne), e.disabled = r > ne, r === ne && e.style.setProperty("--segment-progress", "0%");
    }), Gt[ne] && (Ns.textContent = kl(ne), $o());
  }
  function Ml(e) {
    const r = Gt.indexOf(e);
    r < 0 || r <= ne || (e.sessionHidden = !e.sessionHidden, ra(), Ae((e.sessionHidden ? "Hidden " : "Included ") + e.name + " for this session"));
  }
  function Uo() {
    const e = i("upcomingList");
    if (!e) return;
    e.innerHTML = "";
    const r = wr(), s = Gt.slice(r);
    (po === "all" ? s : s.slice(0, Math.max(1, Number(po) || 1))).forEach((b) => {
      const A = document.createElement("section");
      A.className = "upcomingCard" + (b.sessionHidden ? " sessionHidden" : "") + (rs(b) ? " noMeta" : ""), A.innerHTML = '<div class="upcomingInfo"><div class="upcomingIcon" aria-hidden="true">' + _a(Qr(b)) + '</div><div><div class="upcomingName">' + Ut(b.name) + '</div><div class="upcomingMeta">' + Ut(ts(b)) + (xr() > 1 ? " · round " + b.round : "") + '</div></div></div><button class="skipSessionBtn" type="button">' + (b.sessionHidden ? "Include this session" : "Skip this session") + "</button>", A.querySelector(".skipSessionBtn").addEventListener("click", () => Ml(b)), e.appendChild(A);
    });
  }
  function ra() {
    var r;
    const e = Jr();
    Go.textContent = e.name, Xr.textContent = e.meta, Co.innerHTML = _a(e.icon);
    {
      const s = ca ? Gt[ke(ne + 1)] : ((r = Gt[ne]) == null ? void 0 : r.rest) > 0 ? { kind: "rest" } : Gt[ke(ne + 1)];
      n.querySelector(".nextCard").classList.toggle("noMeta", !!(s && rs(s)));
    }
    if (ha = null, ca) {
      const s = ke(ne + 1);
      s >= 0 && (ha = Gt[s]);
    } else {
      const s = Gt[ne];
      if (s && s.rest > 0)
        ha = null;
      else {
        const f = ke(ne + 1);
        f >= 0 && (ha = Gt[f]);
      }
    }
    to && (to.hidden = !ha, to.textContent = ha != null && ha.sessionHidden ? "Include this session" : "Skip this session"), Uo();
  }
  to.addEventListener("click", () => {
    ha && (ha.sessionHidden = !ha.sessionHidden, Ae((ha.sessionHidden ? "Hidden " : "Included ") + ha.name + " for this session"), ra());
  });
  let nn = null, as = null;
  function Bi(e, r = {}) {
    const s = ee[Jt];
    d.fire(e, { move: (s == null ? void 0 : s.name) || "", move_id: Jt, ...r });
  }
  function Ps() {
    const e = ee[Jt];
    nn = { key: Jt, name: (e == null ? void 0 : e.name) || "Move", startedAt: Date.now(), active: 0 }, clearInterval(as), as = setInterval(() => {
      nn && !ja && nn.active++;
    }, 1e3), Bi("started", { steps: Gt.length });
  }
  function ns(e) {
    if (clearInterval(as), !nn) return;
    const r = nn;
    nn = null, Bi(e ? "completed" : "ended", { seconds: r.active }), !(r.active < 30) && (xe.history.unshift({ id: "h-" + r.startedAt, move_id: r.key, name: r.name, start: new Date(r.startedAt).toISOString(), seconds: r.active, completed: e }), xe.history = xe.history.slice(0, 1e3), Xa(), ti(), rn());
  }
  let gn = null, on = null, eo = !1;
  function Ri() {
    return me().sounds !== !1;
  }
  function Is() {
    if (Ri())
      try {
        navigator.audioSession && (navigator.audioSession.type = "playback"), gn = gn || new (window.AudioContext || window.webkitAudioContext)(), gn.state === "suspended" && gn.resume();
      } catch {
        gn = null;
      }
  }
  function ao(e, r, s, { to: f = e, vol: b = 0.25, type: A = "sine" } = {}) {
    const N = gn.currentTime + r, O = gn.createOscillator(), ct = gn.createGain();
    O.type = A, O.frequency.setValueAtTime(e, N), f !== e && O.frequency.exponentialRampToValueAtTime(f, N + s), ct.gain.setValueAtTime(1e-4, N), ct.gain.exponentialRampToValueAtTime(b, N + 0.01), ct.gain.exponentialRampToValueAtTime(1e-4, N + s), O.connect(ct).connect(gn.destination), O.start(N), O.stop(N + s + 0.02);
  }
  const os = {
    tick: () => ao(880, 0, 0.07, { vol: 0.18 }),
    move: () => {
      ao(660, 0, 0.12, { type: "triangle", vol: 0.3 }), ao(990, 0.13, 0.16, { type: "triangle", vol: 0.3 });
    },
    rest: () => ao(660, 0, 0.4, { to: 440, vol: 0.22 }),
    done: () => {
      ao(523, 0, 0.16, { type: "triangle" }), ao(659, 0.16, 0.16, { type: "triangle" }), ao(784, 0.32, 0.4, { type: "triangle" });
    }
  };
  function In(e) {
    if (!(!Ri() || !gn))
      try {
        gn.state === "suspended" && gn.resume(), os[e]();
      } catch {
      }
  }
  function yr() {
    ea >= 1 && ea <= 3 && ea !== on && (on = ea, In("tick"));
  }
  function xd() {
    Is(), M("workout"), An();
    const e = ke(0);
    e >= 0 && Gt[e].kind === "video" && Re(Gt[e]);
  }
  function kr() {
    vn(), ns(!1), clearInterval(Xe), clearInterval(hi), ca = !1, no(!1), i("app").classList.remove("resting"), Si.classList.remove("active"), M("home");
  }
  function An() {
    Si.classList.add("active");
    let e = 5;
    Ur.textContent = e, In("tick"), requestAnimationFrame(Zr), clearInterval(hi), hi = setInterval(() => {
      e--, e > 0 ? (Ur.textContent = e, In("tick"), Zr()) : (clearInterval(hi), Ur.textContent = "GO", In("move"), eo = !0, Zr(), setTimeout(() => {
        Si.classList.remove("active"), cancelAnimationFrame(gr), is();
      }, 650));
    }, 1e3);
  }
  function Hs() {
    var r;
    Oa.innerHTML = "";
    const e = ((r = Gt[Math.max(0, ne)] || Gt[0]) == null ? void 0 : r.round) || 1;
    Oa.dataset.round = e, Gt.forEach((s, f) => {
      if ((s.round || 1) !== e) return;
      const b = document.createElement("button");
      b.dataset.step = f, b.type = "button", b.className = "progressSegment", b.setAttribute("aria-label", "Go to " + s.name), b.addEventListener("click", () => {
        f <= ne && Ua(f);
      }), Oa.appendChild(b);
    });
  }
  function no(e) {
    e = !!e;
    const r = ja !== e;
    if (ja = e, br.textContent = e ? "Resume" : "Pause", i("app").classList.toggle("paused", e), ba && Pe)
      try {
        e ? Pe.pauseVideo() : Pe.playVideo();
      } catch {
      }
    r && nn && Bi(e ? "paused" : "resumed");
  }
  function Ua(e) {
    e < 0 || e >= Gt.length || e > ne || (clearInterval(Xe), ca = !1, i("app").classList.remove("resting"), ne = e, no(!1), Ko(), Xe = setInterval(Lo, 1e3));
  }
  function is() {
    if (ne = ke(0), no(!1), Hs(), ne < 0) {
      Ra.textContent = "No activities", Qn.textContent = "Open Edit and enable or add a movement", Qn.hidden = !1;
      return;
    }
    Ps(), Ko(), clearInterval(Xe), Xe = setInterval(Lo, 1e3);
  }
  const Ni = i("videoStage"), Ln = i("videoSound"), Sl = 0, To = 1, yd = 2;
  let Fs = 0, oo = null, io = null, Pe = null, Ao = null, Mr = 0, Sr = !1, ba = null, Os = null;
  function Cl() {
    var e;
    return (e = window.YT) != null && e.Player ? Promise.resolve(window.YT) : oo || (oo = new Promise((r, s) => {
      const f = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        try {
          f == null || f();
        } catch {
        }
      };
      const b = setInterval(() => {
        var N;
        (N = window.YT) != null && N.Player && (clearInterval(b), clearTimeout(A), r(window.YT));
      }, 100), A = setTimeout(() => {
        clearInterval(b), oo = null, s(new Error("YouTube did not load"));
      }, 15e3);
      if (!document.querySelector('script[src*="youtube.com/iframe_api"]')) {
        const N = document.createElement("script");
        N.src = "https://www.youtube.com/iframe_api", N.async = !0, N.onerror = () => {
          clearInterval(b), clearTimeout(A), oo = null, s(new Error("YouTube did not load"));
        }, document.head.appendChild(N);
      }
    }), oo);
  }
  function Tl() {
    return io || (io = Cl().then((e) => new Promise((r) => {
      const s = document.createElement("div");
      i("videoFrame").appendChild(s), Pe = new e.Player(s, {
        width: "100%",
        height: "100%",
        playerVars: { playsinline: 1, rel: 0, iv_load_policy: 3, modestbranding: 1 },
        events: { onReady: () => r(Pe), onStateChange: (f) => ro(f.data), onError: (f) => so(f.data) }
      });
    })), io.catch(() => {
      io = null;
    }), io);
  }
  function Re(e) {
    !(e != null && e.videoId) || e.videoError || Tl().then((r) => {
      ba || Ao === e.videoId || (Ao = e.videoId, Mr = Number(e.start) || 0, Sr = !1, r.mute(), r.loadVideoById({ videoId: e.videoId, startSeconds: Mr }));
    }).catch(() => {
    });
  }
  function Hn() {
    const e = ke(ne + 1);
    e >= 0 && Gt[e].kind === "video" && Re(Gt[e]);
  }
  function ro(e) {
    if (!ba) {
      e === To && !Sr && (Sr = !0, Pe.pauseVideo(), Pe.seekTo(Mr, !0));
      return;
    }
    Ni.classList.toggle("playing", e === To), Gt[ne] === ba && performance.now() > Fs && (e === To && ja ? no(!1) : e === yd && !ja && no(!0)), e === To && Al(ba.videoId, Pe.getDuration()) && Xa(), e === Sl && Yo();
  }
  function so(e) {
    const r = ba;
    if (!r) {
      Ao = null;
      return;
    }
    e === 101 || e === 150 ? (Ll(r.videoId), Ae("That video can’t play outside YouTube, so it was skipped")) : Ae("The video couldn’t play, so it was skipped"), Yo();
  }
  function Cr(e) {
    if (i("app").classList.add("videoStep"), Ln.hidden = !0, ba = e, clearTimeout(Os), !e.videoId) {
      Ae("This video step has no link yet, so it was skipped"), setTimeout(() => Yo(), 0);
      return;
    }
    Tl().then((r) => {
      if (ba !== e) return;
      Fs = performance.now() + 1500;
      const s = Number(e.start) || 0;
      Ao !== e.videoId ? (Ao = e.videoId, Mr = s, r.loadVideoById({ videoId: e.videoId, startSeconds: s })) : (r.seekTo(s, !0), r.playVideo()), r.unMute(), ja && r.pauseVideo(), Os = setTimeout(() => {
        ba !== e || ja || (r.getPlayerState() !== To ? (r.mute(), r.playVideo(), Ln.hidden = !1) : r.isMuted() && (Ln.hidden = !1));
      }, 1600);
    }).catch(() => {
      ba === e && (Ae("YouTube didn’t load, so the video was skipped"), Yo());
    });
  }
  function Na() {
    if (!i("app").classList.contains("videoStep")) return;
    const e = n.querySelector(".workGrid"), r = n.querySelector(".sessionControlRow"), s = e.getBoundingClientRect().top, f = (r == null ? void 0 : r.offsetHeight) || 42, b = window.innerHeight - s - 16 - f - 84;
    e.style.setProperty("--theater-h", Math.max(240, Math.round(b)) + "px");
  }
  window.addEventListener("resize", Na);
  function vn() {
    clearTimeout(Os);
    const e = ba;
    if (ba = null, i("app").classList.remove("videoStep"), Ni.classList.remove("playing"), Ln.hidden = !0, e && Pe) {
      try {
        Pe.pauseVideo();
      } catch {
      }
      Ao = null;
    }
  }
  function Yo() {
    const e = ba;
    !e || Gt[ne] !== e || (vn(), clearInterval(Xe), Xo(), Xe = setInterval(Lo, 1e3));
  }
  Ln.addEventListener("click", () => {
    Pe && (Pe.unMute(), Pe.playVideo()), Ln.hidden = !0;
  });
  function Zo(e) {
    var f;
    const r = Number(e.start) || 0;
    if (e.useVideoLength === !1) return r + (Number(e.duration) || 300);
    const s = Pe && ba === e && Number((f = Pe.getDuration) == null ? void 0 : f.call(Pe)) || 0;
    return Number(e.end) || s || Number(e.videoDuration) || r + (Number(e.duration) || 300);
  }
  function Ws(e, r) {
    const s = ee[Jt];
    [he, la, ze, s == null ? void 0 : s.warmup, s == null ? void 0 : s.strength, s == null ? void 0 : s.cooldown, s == null ? void 0 : s.sequence].forEach((f) => (Array.isArray(f) ? f : []).forEach((b) => {
      b && b.kind === "video" && b.videoId === e && r(b);
    }));
  }
  function Al(e, r) {
    r = Math.round(Number(r) || 0);
    let s = !1;
    return e && r > 0 && Ws(e, (f) => {
      f.videoDuration !== r && (f.videoDuration = r, s = !0);
    }), s;
  }
  function Ll(e) {
    Ws(e, (r) => {
      r.videoError = "embed";
    }), Xa();
  }
  function wa(e) {
    const r = e.videoId;
    if (!r) return;
    const s = () => {
      Ha.classList.contains("open") ? Ve || Te() : (Te(), Xa());
    };
    fetch("https://www.youtube.com/oembed?format=json&url=" + encodeURIComponent("https://www.youtube.com/watch?v=" + r)).then((f) => f.ok ? f.json() : Promise.reject(f.status)).then((f) => {
      e.videoId === r && (e.videoTitle = f.title || "", e.autoName && f.title && (e.name = f.title), s());
    }).catch((f) => {
      e.videoId === r && f === 401 && (e.videoError = "embed", s());
    }), Pi(r).then((f) => {
      Al(r, f) && s();
    }).catch((f) => {
      f === "embed" && e.videoId === r && (e.videoError = "embed", s());
    });
  }
  function Pi(e) {
    return Cl().then((r) => new Promise((s, f) => {
      const b = document.createElement("div");
      b.className = "videoProbe", b.setAttribute("aria-hidden", "true");
      const A = document.createElement("div");
      b.appendChild(A), i("app").appendChild(b);
      let N = null, O = !1;
      const ct = (it, It) => {
        O || (O = !0, clearTimeout(mt), setTimeout(() => {
          try {
            N == null || N.destroy();
          } catch {
          }
          b.remove();
        }, 0), It ? f(It) : s(it));
      }, mt = setTimeout(() => ct(0), 2e4), pt = () => {
        var It;
        const it = Number((It = N == null ? void 0 : N.getDuration) == null ? void 0 : It.call(N)) || 0;
        return it > 0 && ct(it), it > 0;
      };
      N = new r.Player(A, {
        width: 320,
        height: 180,
        videoId: e,
        playerVars: { playsinline: 1, mute: 1, controls: 0 },
        events: {
          onReady: () => {
            pt() || (N.mute(), N.playVideo());
          },
          onStateChange: () => pt(),
          onError: (it) => ct(0, it.data === 101 || it.data === 150 ? "embed" : "error")
        }
      });
    }));
  }
  function Ko() {
    ca = !1;
    const e = Gt[ne];
    i("app").classList.toggle("resting", e.kind === "rest"), e.kind === "video" ? Cr(e) : vn(), ea = e.duration, Wn = e.duration, on = null, eo ? eo = !1 : In(e.kind === "rest" ? "rest" : "move"), Ra.textContent = e.name, Qn.textContent = e.group, Qn.hidden = !0, Ns.textContent = kl(ne), nn && Bi("step", { name: e.name, group: e.group, kind: e.kind, step: ne + 1, of: Gt.length, round: e.round || 1, rounds: xr(), duration: e.duration }), ra(), wd(), Hn(), e.kind === "video" && setTimeout(Na, 0);
  }
  function $o() {
    var b;
    const e = ((b = Gt[ne]) == null ? void 0 : b.kind) === "video" && !ca, r = e && ea >= 60;
    Fa.textContent = r ? Ja(ea) : ea, Fa.classList.toggle("long", r), e && (i("videoClock").textContent = Ja(ea) + " left");
    const s = ea / Wn * 100;
    Le.style.width = s + "%";
    const f = es();
    if (f && !ca) {
      const A = 100 - s;
      f.style.setProperty("--segment-progress", A + "%");
    }
  }
  function Lo() {
    var r, s;
    if (ja) return;
    const e = Gt[ne];
    if ((e == null ? void 0 : e.kind) === "video" && !ca && ba === e) {
      const f = Number((r = Pe == null ? void 0 : Pe.getCurrentTime) == null ? void 0 : r.call(Pe)) || 0, b = Number(e.start) || 0, A = Zo(e);
      Wn = Math.max(1, A - b), (f > b || ((s = Pe == null ? void 0 : Pe.getPlayerState) == null ? void 0 : s.call(Pe)) === To) && (ea = Math.max(0, Math.ceil(A - f))), $o(), yr(), f > b && f >= A - 0.25 && Yo();
      return;
    }
    ea--, $o(), yr(), ea <= 0 && (e.rest > 0 ? qs(e.rest) : Xo());
  }
  function qs(e) {
    var s;
    ca = !0, i("app").classList.add("resting");
    const r = es();
    r && r.style.setProperty("--segment-progress", "100%"), clearInterval(Xe), ea = e, Wn = e, on = null, In("rest"), nn && Bi("rest", { duration: e }), Ra.textContent = "Rest", Qn.textContent = (s = Gt[ne]) != null && s.roundBreakAfter ? "Round " + (Gt[ne].round + 1) + " next" : "Recovery", ra(), $o(), Xe = setInterval(() => {
      ja || (ea--, $o(), yr(), ea <= 0 && (clearInterval(Xe), Xo(), Xe = setInterval(Lo, 1e3)));
    }, 1e3);
  }
  function Xo() {
    ca = !1;
    const e = ke(ne + 1);
    if (e >= 0)
      ne = e, Ko();
    else {
      clearInterval(Xe), vn(), no(!1), i("app").classList.remove("resting"), Ra.textContent = "Complete", Qn.textContent = "Move finished", Qn.hidden = !1, Fa.textContent = "✓";
      {
        const r = xr();
        Ns.textContent = r > 1 ? r + " rounds done" : Gt.filter((s) => !s.roundBreak).length + " steps done";
      }
      ns(!0), In("done");
      {
        const r = le(7).reduce((s, f) => s + f.minutes, 0);
        Qn.textContent = "Move finished · " + r + " min in the last 7 days";
      }
      Le.style.width = "100%", ra();
    }
  }
  i("skipExercise").addEventListener("click", () => {
    El(), no(!1);
  });
  function El() {
    clearInterval(Xe);
    const e = Gt[ne];
    if (ca) {
      ca = !1, i("app").classList.remove("resting");
      const s = ke(ne + 1);
      s >= 0 ? (ne = s, Ko(), Xe = setInterval(Lo, 1e3)) : Xo();
      return;
    }
    if (e && e.rest > 0) {
      qs(e.rest);
      return;
    }
    const r = ke(ne + 1);
    r >= 0 ? (ne = r, Ko(), Xe = setInterval(Lo, 1e3)) : Xo();
  }
  i("restartSegment").addEventListener("click", () => {
    if (clearInterval(Xe), no(!1), ca) {
      const e = Gt[ne];
      ea = e.rest, Wn = e.rest, on = null, In("rest"), Ra.textContent = "Rest", Qn.textContent = "Recovery", i("app").classList.add("resting"), ra(), $o();
    } else
      Ko();
    Xe = setInterval(ca ? () => {
      ja || (ea--, $o(), yr(), ea <= 0 && (clearInterval(Xe), Xo(), Xe = setInterval(Lo, 1e3)));
    } : Lo, 1e3);
  });
  function Tr(e, r, s, f) {
    let b = 0, A = null, N = !1;
    function O() {
      A && cancelAnimationFrame(A), A = null, b = 0, N = !1, r.style.width = "0%", e.classList.remove("holding");
    }
    function ct(it) {
      if (!N) return;
      b || (b = it);
      const It = Math.min(1, (it - b) / s);
      if (r.style.width = It * 100 + "%", It >= 1) {
        N = !1, A && cancelAnimationFrame(A), A = null, r.style.width = "100%", setTimeout(() => r.style.width = "0%", 90), f();
        return;
      }
      A = requestAnimationFrame(ct);
    }
    function mt(it) {
      var It;
      if (!(it && it.button !== void 0 && it.button !== 0)) {
        it == null || it.preventDefault(), O(), N = !0, e.classList.add("holding");
        try {
          (It = e.setPointerCapture) == null || It.call(e, it.pointerId);
        } catch {
        }
        A = requestAnimationFrame(ct);
      }
    }
    function pt() {
      N && O();
    }
    e.addEventListener("pointerdown", mt), e.addEventListener("pointerup", pt), e.addEventListener("pointercancel", pt), e.addEventListener("lostpointercapture", pt), e.addEventListener("keydown", (it) => {
      (it.key === " " || it.key === "Enter") && !it.repeat && mt(it);
    }), e.addEventListener("keyup", (it) => {
      (it.key === " " || it.key === "Enter") && pt();
    });
  }
  const kd = i("endWorkout");
  Tr(kd, i("holdEndFill"), 1500, kr);
  const Ii = i("deleteMoveConfirm");
  i("deleteMoveOpen").addEventListener("click", () => {
    Ii.classList.add("open"), Ii.setAttribute("aria-hidden", "false");
  }), i("deleteMoveCancel").addEventListener("click", () => {
    Ii.classList.remove("open"), Ii.setAttribute("aria-hidden", "true");
  });
  function Ya() {
    const e = Jt, r = n.querySelector('.workoutPanel[data-workout="' + e + '"]');
    r && r.remove(), delete ee[e], xe.order = xe.order.filter((f) => f !== e);
    let s = n.querySelector(".workoutPanel[data-workout]");
    if (!s) {
      const f = "custom-" + Date.now();
      ee[f] = { name: "New move", source: "Custom routine", total: 20, work: 45, rest: 15, customSequence: !0, preset: "movement", sequence: [], strength: [] }, xe.order.push(f), s = Ea(f, ee[f]);
    }
    Ii.classList.remove("open"), Ii.setAttribute("aria-hidden", "true"), $n = null, mr(), da(s.dataset.workout), Xa(), Ae("Move deleted");
  }
  Tr(i("deleteMoveYes"), i("deleteMoveFill"), 1500, Ya);
  const Ar = n.querySelector(".rubberTabs"), Jo = i("rubberIndicator");
  function Hi(e, r = !0) {
    if (!e || !Ar || !Jo) return;
    const s = Ar.getBoundingClientRect(), f = e.getBoundingClientRect();
    Jo.style.transition = r ? "left .34s cubic-bezier(.2,1.35,.4,1),width .34s cubic-bezier(.2,1.35,.4,1),transform .18s ease" : "none";
    const b = So();
    Jo.style.left = (f.left - s.left) / b + Ar.scrollLeft + "px", Jo.style.width = f.width / b + "px", r && (Jo.style.transform = "scaleX(1.08)", setTimeout(() => Jo.style.transform = "scaleX(1)", 180));
  }
  n.querySelectorAll(".tab").forEach((e) => e.addEventListener("click", () => {
    e.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "smooth" }), n.querySelectorAll(".tab").forEach((r) => r.classList.remove("active")), n.querySelectorAll(".settingsPane").forEach((r) => r.classList.remove("active")), e.classList.add("active"), i(e.dataset.pane).classList.add("active"), Hi(e, !0);
  })), requestAnimationFrame(() => Hi(n.querySelector(".tab.active"), !1)), window.addEventListener("resize", () => Hi(n.querySelector(".tab.active"), !1));
  const Lr = i("pixelTrailToggle"), js = i("rippleToggle"), Fi = i("trailStrength"), Oi = i("trailLife");
  function Za(e, r) {
    me()[e] = r, Xa();
  }
  const zs = ["Warm-up", "Movement", "Cooldown", "Rest", "Video"];
  function _l(e) {
    return e.kind === "rest" ? "rest" : e.kind === "video" ? "video" : "g:" + String(e.group || "").trim().toLowerCase();
  }
  function rs(e) {
    var r;
    return !!((r = me().hideMeta) != null && r[_l(e)]);
  }
  function Dl() {
    const e = /* @__PURE__ */ new Map(), r = (s, f, b) => {
      if (!s) return;
      Array.isArray(s) && (s = { name: s[1], group: s[2], kind: "work" });
      const A = _l(s);
      let N = e.get(A);
      N || (N = { key: A, label: A === "rest" ? "Rest" : A === "video" ? "Video" : String(s.group || "").trim() || "No type", kinds: /* @__PURE__ */ new Set(), moves: /* @__PURE__ */ new Set(), count: 0 }, e.set(A, N)), N.kinds.add(A === "rest" ? "Rest" : A === "video" ? "Video" : f), N.moves.add(b), N.count++;
    };
    return Object.values(ee).forEach((s) => {
      const f = s.name || "Move";
      (s.warmup || (s.customSequence ? [] : Rt)).forEach((b) => r(b, "Warm-up", f)), (s.customSequence ? s.sequence || [] : s.strength || []).forEach((b) => r(b, b.presetRole === "warmup" ? "Warm-up" : b.presetRole === "cooldown" ? "Cooldown" : "Movement", f)), (s.cooldown || (s.customSequence ? [] : ue)).forEach((b) => r(b, "Cooldown", f));
    }), [["rest", "Rest"], ["video", "Video"]].forEach(([s, f]) => {
      e.has(s) || e.set(s, { key: s, label: f, kinds: /* @__PURE__ */ new Set([f]), moves: /* @__PURE__ */ new Set(), count: 0 });
    }), [...e.values()].map((s) => ({ ...s, kind: s.kinds.has("Movement") ? "Movement" : [...s.kinds][0], moves: [...s.moves] })).sort((s, f) => zs.indexOf(s.kind) - zs.indexOf(f.kind) || s.label.localeCompare(f.label));
  }
  let ss = "all";
  function ls() {
    const e = i("metaSearch").value.trim().toLowerCase();
    return Dl().filter((r) => (ss === "all" || r.kind === ss) && (!e || r.label.toLowerCase().includes(e) || r.moves.some((s) => s.toLowerCase().includes(e))));
  }
  function Eo() {
    const e = i("metaTableBody");
    if (!e) return;
    const r = me().hideMeta || {}, s = ls();
    e.innerHTML = s.length ? "" : '<tr class="metaEmpty"><td colspan="4">No types match</td></tr>', s.forEach((b) => {
      const A = !r[b.key], N = b.count ? (b.moves.length > 2 ? b.moves.slice(0, 2).join(", ") + " + " + (b.moves.length - 2) + " more" : b.moves.join(", ")) + " · " + b.count + " step" + (b.count === 1 ? "" : "s") : "Not used yet", O = document.createElement("tr");
      O.className = A ? "" : "off", O.innerHTML = '<td><div class="metaType">' + Ut(b.label) + '</div><div class="metaSub">' + Ut(b.kind + " · " + N) + '</div></td><td class="metaKindCol">' + Ut(b.kind) + '</td><td class="metaUsedCol">' + Ut(N) + '</td><td class="metaSwitchCol"><button class="switch' + (A ? " on" : "") + '" type="button" role="switch" aria-checked="' + A + '" aria-label="Second line for ' + Ut(b.label) + ' on phones"></button></td>', O.querySelector(".switch").addEventListener("click", () => Vs([b.key], A)), e.appendChild(O);
    });
    const f = s.filter((b) => r[b.key]).length;
    i("metaCount").textContent = s.length ? s.length + " type" + (s.length === 1 ? "" : "s") + (f ? " · " + f + " hidden on phones" : "") : "";
  }
  function Vs(e, r) {
    const s = { ...me().hideMeta || {} };
    e.forEach((f) => {
      r ? s[f] = !0 : delete s[f];
    }), Za("hideMeta", s), Eo(), Ue(), ra();
  }
  i("metaSearch").addEventListener("input", Eo), i("metaKinds").querySelectorAll(".kindChip").forEach((e) => e.addEventListener("click", () => {
    ss = e.dataset.kind, i("metaKinds").querySelectorAll(".kindChip").forEach((r) => r.classList.toggle("active", r === e)), Eo();
  })), i("metaHideAll").addEventListener("click", () => Vs(ls().map((e) => e.key), !0)), i("metaShowAll").addEventListener("click", () => Vs(ls().map((e) => e.key), !1));
  const _o = { feel: !0, steps: !0, mood: !0, energyLevel: !0, weather: !0, ...me().toggles || {} };
  function Bl() {
    n.querySelectorAll("[data-toggle]").forEach((s) => s.classList.toggle("on", _o[s.dataset.toggle] !== !1)), n.querySelector(".feelSection").hidden = !0, [["steps", "stepsRow"], ["mood", "moodRow"], ["energyLevel", "energyLevelRow"]].forEach(([s, f]) => {
      i(f).hidden = _o[s] === !1;
    });
    const e = ["steps", "mood", "energyLevel"].some((s) => _o[s] !== !1);
    n.querySelector(".activityCard").hidden = !e, i("weatherCard").hidden = !0;
    const r = n.querySelector("#homeView .grid");
    r.classList.toggle("noActivity", !e), r.classList.toggle("noWeather", !0);
  }
  n.querySelectorAll("[data-toggle]").forEach((e) => e.addEventListener("click", () => {
    _o[e.dataset.toggle] = _o[e.dataset.toggle] === !1, Bl(), Za("toggles", { ..._o });
  })), Bl();
  function Rl() {
    Lr.classList.toggle("on", mn), js.classList.toggle("on", Vo), Fi.value = Math.round(We * 100), i("trailStrengthValue").textContent = Fi.value + "%", Oi.value = Li, i("trailLifeValue").textContent = Oi.value + " ms";
  }
  me().trailEnabled !== void 0 && (mn = me().trailEnabled), me().rippleEnabled !== void 0 && (Vo = me().rippleEnabled), me().trailStrength !== void 0 && (We = me().trailStrength), me().trailMaxAge !== void 0 && (Li = me().trailMaxAge), Rl();
  const Qo = i("soundsToggle");
  Qo.classList.toggle("on", Ri()), Qo.addEventListener("click", () => {
    Za("sounds", !Ri()), Qo.classList.toggle("on", Ri()), Ri() && (Is(), In("move"));
  }), Lr.addEventListener("click", () => {
    mn = !mn, Lr.classList.toggle("on", mn), mn || (vr = []), Za("trailEnabled", mn);
  }), js.addEventListener("click", () => {
    Vo = !Vo, js.classList.toggle("on", Vo), Za("rippleEnabled", Vo);
  }), Fi.addEventListener("input", () => {
    We = Number(Fi.value) / 100, i("trailStrengthValue").textContent = Fi.value + "%";
  }), Fi.addEventListener("change", () => Za("trailStrength", We)), Oi.addEventListener("input", () => {
    Li = Number(Oi.value), i("trailLifeValue").textContent = Oi.value + " ms";
  }), Oi.addEventListener("change", () => Za("trailMaxAge", Li)), xi.addEventListener("change", () => Za("upcomingCount", po));
  function Gs(e) {
    n.querySelectorAll(".themeBtn").forEach((s) => s.classList.toggle("active", s.dataset.theme === e));
    const r = e === "light";
    i("app").classList.toggle("light", r), d.setLight(r), ni(n);
  }
  Gs(me().theme || "dark"), n.querySelectorAll(".themeBtn").forEach((e) => e.addEventListener("click", () => {
    Gs(e.dataset.theme), Za("theme", e.dataset.theme);
  }));
  const aa = { steps: null, weather: null, ...me().entities || {} };
  let sa = null, Er = {};
  function Us(e) {
    const r = Object.values(e).filter((O) => O.entity_id.startsWith("sensor.") || O.entity_id.startsWith("input_number.")), s = (O) => O.attributes.friendly_name || O.entity_id, f = r.filter((O) => /step/i.test(O.entity_id) || /step/i.test(s(O)) || ["steps", "step"].includes(String(O.attributes.unit_of_measurement || "").toLowerCase())), b = r.filter((O) => !f.includes(O)), A = (O, ct) => s(O).localeCompare(s(ct)), N = (O, ct) => /health_steps/.test(ct.entity_id) - /health_steps/.test(O.entity_id) || A(O, ct);
    return { suggested: f.sort(N), rest: b.sort(A), label: s };
  }
  function Nl(e) {
    const r = i("stepsEntity");
    if (!r || r.matches(":focus")) return;
    const { suggested: s, rest: f, label: b } = Us(e), A = (ct) => '<option value="' + Ut(ct.entity_id) + '">' + Ut(b(ct)) + "</option>";
    r.innerHTML = '<option value="">Not connected</option>' + (s.length ? '<optgroup label="Suggested">' + s.map(A).join("") + "</optgroup>" : "") + (f.length ? '<optgroup label="All sensors">' + f.map(A).join("") + "</optgroup>" : ""), r.value = aa.steps || "";
    const N = i("stepsStatus"), O = aa.steps && e[aa.steps];
    N.textContent = O ? "Connected · " + b(O) : N.dataset.empty;
  }
  i("stepsEntity").addEventListener("change", () => {
    aa.steps = i("stepsEntity").value || null, Za("entities", { ...aa }), Er = {}, Hl(), sa && (Nl(sa), ds(sa));
  });
  function Ta(e, r = 0) {
    return new Intl.NumberFormat(void 0, { maximumFractionDigits: r }).format(e);
  }
  function Pl() {
    const e = aa.steps && (sa == null ? void 0 : sa[aa.steps]), r = Number(e == null ? void 0 : e.state);
    return Number.isFinite(r) ? r : null;
  }
  function ds(e) {
    var f;
    const r = aa.steps, s = r ? Number((f = e[r]) == null ? void 0 : f.state) : NaN;
    i("stepsMeta").textContent = r ? Number.isFinite(s) ? Ta(s) : "—" : "Set up in Settings";
  }
  let Il = 0;
  async function Hl() {
    const e = aa.steps;
    if (!e || !d.ws) return;
    Il = Date.now();
    const r = /* @__PURE__ */ new Date(), s = new Date(r.getFullYear(), r.getMonth(), r.getDate() - 30);
    try {
      const f = await d.ws({ type: "recorder/statistics_during_period", start_time: s.toISOString(), end_time: r.toISOString(), statistic_ids: [e], period: "day", types: ["max"] }), b = (f == null ? void 0 : f[e]) || [], A = {};
      if (b.forEach((N) => {
        Number.isFinite(N.max) && (A[Ie(new Date(N.start))] = N.max);
      }), !Object.keys(A).length) {
        const N = await d.ws({ type: "history/history_during_period", start_time: s.toISOString(), end_time: r.toISOString(), entity_ids: [e], minimal_response: !0, no_attributes: !0, significant_changes_only: !1 });
        ((N == null ? void 0 : N[e]) || []).forEach((O) => {
          const ct = Number(O.s ?? O.state), mt = O.lu ? O.lu * 1e3 : Date.parse(O.last_updated || O.last_changed);
          if (!Number.isFinite(ct) || !mt) return;
          const pt = Ie(new Date(mt));
          A[pt] = Math.max(A[pt] || 0, ct);
        });
      }
      Er = A, rn();
    } catch {
    }
  }
  function ti() {
    rn();
  }
  ti(), setInterval(() => {
    ti(), pr(), Mo();
  }, 10 * 60 * 1e3);
  function le(e) {
    const r = {}, s = {};
    xe.history.forEach((N) => {
      const O = Ie(new Date(N.start));
      r[O] = (r[O] || 0) + (N.seconds || 0) / 60, s[O] = (s[O] || 0) + 1;
    });
    const f = /* @__PURE__ */ new Date(), b = Ie(f), A = [];
    for (let N = e - 1; N >= 0; N--) {
      const O = new Date(f.getFullYear(), f.getMonth(), f.getDate() - N), ct = Ie(O), mt = xe.checkins.filter((it) => it.date === ct), pt = (it) => {
        const It = mt.map((te) => te[it]).filter(Boolean);
        return It.length ? It.reduce((te, Ot) => te + Ot, 0) / It.length : null;
      };
      A.push({
        key: ct,
        date: O,
        minutes: Math.round(r[ct] || 0),
        moves: s[ct] || 0,
        steps: ct === b && Pl() != null ? Pl() : Er[ct] ?? null,
        mood: pt("mood"),
        energy: pt("energy")
      });
    }
    return A;
  }
  function Fl(e) {
    let r = e.length - 1;
    e[r] && !e[r].minutes && r--;
    let s = 0;
    for (; r >= 0 && e[r].minutes > 0; )
      s++, r--;
    return s;
  }
  function rn() {
    const e = i("insightCard");
    if (!e) return;
    const r = le(30), s = Fl(r), f = r.reduce((mt, pt) => mt + pt.minutes, 0), b = /* @__PURE__ */ new Date(), A = Ie(b), N = Ie(new Date(b.getFullYear(), b.getMonth(), b.getDate() - (b.getDay() + 6) % 7)), O = r.filter((mt) => mt.key >= N && mt.key <= A).reduce((mt, pt) => mt + pt.minutes, 0), ct = (mt, pt, it) => '<div class="activityRow"><div class="activityRowIcon" aria-hidden="true">' + mt + '</div><div><div class="activityRowName">' + Ut(pt) + '</div><div class="activityRowMeta">' + Ut(it) + "</div></div></div>";
    e.innerHTML = '<div class="activityHeader"><div class="activityIcon" aria-hidden="true">' + _a("move") + '</div><div class="activityTitle">Movement</div></div><div class="activityRows jointRows">' + ct(_a("clock"), "This week", O + " min") + ct(_a("streak"), "Streak", s + " day" + (s === 1 ? "" : "s")) + ct(_a("calendar"), "30 days", f + " min") + "</div>";
  }
  const _r = {
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
  }, Do = (e) => e === "sunny" ? "clear" : e === "clear-night" ? "night" : e === "partlycloudy" ? "partly" : ["rainy", "pouring", "lightning", "lightning-rainy", "hail"].includes(e) ? "rain" : ["snowy", "snowy-rainy"].includes(e) ? "snow" : "cloudy", ei = { s: "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", sp: "M41.025 27.045C40.5181 24.4943 39.142 22.1985 37.1315 20.5491C35.121 18.8996 32.6005 17.9987 30 18C25.665 18 21.9 20.46 20.025 24.045C17.8191 24.2867 15.7801 25.3344 14.2991 26.987C12.8181 28.6396 11.9994 30.7809 12 33C12 35.3869 12.9482 37.6761 14.636 39.364C16.3239 41.0518 18.6131 42 21 42H40.5C41.4849 42 42.4602 41.806 43.3701 41.4291C44.2801 41.0522 45.1069 40.4997 45.8033 39.8033C46.4997 39.1069 47.0522 38.2801 47.4291 37.3701C47.806 36.4602 48 35.4849 48 34.5C48 30.54 44.925 27.33 41.025 27.045Z", lp: "M70.8016 48.008C69.9751 43.8493 67.7316 40.1062 64.4536 37.4168C61.1755 34.7275 57.0661 33.2587 52.8261 33.2607C45.7581 33.2607 39.6196 37.2716 36.5625 43.1167C32.9659 43.5108 29.6414 45.219 27.2267 47.9135C24.8121 50.608 23.4772 54.0991 23.4783 57.7173C23.4783 61.609 25.0243 65.3414 27.7761 68.0933C30.528 70.8452 34.2604 72.3912 38.1522 72.3912H69.9456C71.5515 72.3912 73.1416 72.0749 74.6252 71.4604C76.1088 70.8458 77.4568 69.9451 78.5923 68.8096C79.7278 67.6741 80.6286 66.3261 81.2431 64.8425C81.8576 63.3589 82.1739 61.7688 82.1739 60.1629C82.1739 53.7064 77.1603 48.4727 70.8016 48.008Z", lc: "M65.3723 37.5398C64.4356 32.8266 61.8929 28.5843 58.1778 25.5364C54.4627 22.4885 49.8054 20.8238 45 20.8262C36.9897 20.8262 30.0326 25.3718 26.5679 31.9963C22.4918 32.4429 18.724 34.3788 15.9874 37.4326C13.2508 40.4864 11.738 44.443 11.7391 48.5436C11.7391 52.9542 13.4913 57.1842 16.6101 60.3031C19.7289 63.4219 23.9589 65.174 28.3696 65.174H64.4022C66.2221 65.174 68.0243 64.8155 69.7057 64.1191C71.3871 63.4226 72.9149 62.4018 74.2018 61.1149C75.4887 59.828 76.5095 58.3002 77.2059 56.6188C77.9024 54.9374 78.2609 53.1353 78.2609 51.3153C78.2609 43.9979 72.5788 38.0664 65.3723 37.5398Z", lr: "M62.9755 28.4431C62.149 24.2844 59.9055 20.5412 56.6275 17.8519C53.3494 15.1626 49.24 13.6937 45 13.6958C37.9321 13.6958 31.7935 17.7067 28.7364 23.5518C25.1398 23.9459 21.8153 25.654 19.4006 28.3485C16.986 31.043 15.6511 34.5342 15.6522 38.1523C15.6522 42.0441 17.1982 45.7765 19.9501 48.5284C22.7019 51.2802 26.4343 52.8262 30.3261 52.8262H62.1196C63.7254 52.8262 65.3155 52.5099 66.7991 51.8954C68.2827 51.2809 69.6307 50.3802 70.7662 49.2447C71.9017 48.1092 72.8025 46.7611 73.417 45.2775C74.0315 43.7939 74.3478 42.2038 74.3478 40.598C74.3478 34.1415 69.3342 28.9078 62.9755 28.4431Z" }, cs = {
    s: ["M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", 6.11, 40],
    l: ["M41.1747 11.959C37.7298 16.5251 35.6875 22.2086 35.6874 28.3691C35.6874 43.4321 47.8979 55.6435 62.9608 55.6436C68.3701 55.6436 73.411 54.0676 77.6512 51.3516C74.6865 66.6826 61.197 78.2607 44.9999 78.2607C26.6305 78.2607 11.7391 63.3694 11.7391 45C11.7392 27.9244 24.6071 13.8562 41.1747 11.959Z", 11.96, 78.26],
    sp: ["M16.6201 5.0791C15.3771 6.72655 14.6397 8.7772 14.6396 11C14.6396 16.4345 19.046 20.8398 24.4805 20.8398C26.4326 20.8398 28.2502 20.2686 29.7803 19.2881C28.7119 24.821 23.8449 29 18 29C11.3726 29 6 23.6274 6 17C6 10.8393 10.6426 5.76349 16.6201 5.0791Z", 5.08, 29],
    lp: ["M32.5175 9.93848C30.0859 13.1616 28.6435 17.1729 28.6434 21.5215C28.6434 32.1541 37.2628 40.7733 47.8954 40.7734C51.7136 40.7734 55.2724 39.6622 58.2655 37.7451C56.1724 48.5666 46.6506 56.7391 35.2177 56.7393C22.251 56.7393 11.7391 46.2274 11.7391 33.2607C11.7393 21.2073 20.8226 11.2776 32.5175 9.93848Z", 9.94, 56.74]
  };
  let Ys = 0;
  const Dr = (e, r) => '<path class="' + r + '" d="' + e + '"/>', Zs = (e, r) => ' style="animation-delay:-' + Math.round(e * 137 % r) + 'ms"', Wa = (e, r, s, f) => {
    const b = s * 0.2687;
    return '<path class="wxTwinkle" fill="#fff"' + (f < 1 ? ' opacity="' + f + '"' : "") + Zs(e, 2400) + ' d="M' + e + " " + (r - s) + "L" + (e + b) + " " + (r - b) + "L" + (e + s) + " " + r + "L" + (e + b) + " " + (r + b) + "L" + e + " " + (r + s) + "L" + (e - b) + " " + (r + b) + "L" + (e - s) + " " + r + "L" + (e - b) + " " + (r - b) + 'Z"/>';
  }, ps = ([e, r, s], f) => '<path class="wxMoonPath" d="' + e + '" fill="url(#' + f + ')"/><defs><linearGradient id="' + f + '" x1="0" y1="' + r + '" x2="0" y2="' + s + '" gradientUnits="userSpaceOnUse"><stop stop-color="#FFF4C7"/><stop offset="1" stop-color="#F2C95E"/></linearGradient></defs>', Ol = (e, r) => r ? '<circle class="wxSunDisc" cx="45" cy="45" r="33.26" fill="url(#' + e + ')"/><defs><linearGradient id="' + e + '" x1="12" y1="8.5" x2="67" y2="73.5" gradientUnits="userSpaceOnUse"><stop offset=".653" stop-color="#FFE100"/><stop offset="1" stop-color="#F2C159"/></linearGradient></defs>' : '<circle class="wxSunDisc" cx="23" cy="23" r="17" fill="url(#' + e + ')"/><defs><linearGradient id="' + e + '" x1="23" y1="6" x2="23" y2="40" gradientUnits="userSpaceOnUse"><stop offset=".606" stop-color="#FFE100"/><stop offset="1" stop-color="#FFAA00"/></linearGradient></defs>', Ks = (e) => (e ? ["29.35", "43.04", "56.74"].map((r, s) => '<g class="wxDrop" style="animation-delay:-' + s * 317 + 'ms"><rect class="wxAccent" x="' + r + '" y="60.65" width="5.87" height="15.65" rx="2.93" transform="rotate(12 ' + r + ' 60.65)"/></g>') : [19, 26, 33].map((r, s) => '<g class="wxDrop" style="animation-delay:-' + s * 317 + 'ms"><rect class="wxAccent" width="3.03" height="9.41" rx="1.51" transform="matrix(0.9698 0.244 -0.1768 0.9843 ' + r + ' 38)"/></g>')).join(""), Wl = (e) => (e ? [[33.67, 67.67], [47.67, 64.67], [61.67, 67.67], [40.67, 77.67], [54.67, 77.67]] : [[21.2, 42.2], [29.2, 40.2], [37.2, 42.2], [25.2, 48.2], [33.2, 48.2]]).map(([r, s], f) => '<circle class="wxFlake" style="animation-delay:-' + f * 640 + 'ms" cx="' + r + '" cy="' + s + '" r="' + (e ? 3.67 : 2.2) + '" fill="#fff"/>').join("");
  function Wi(e, r, s, f) {
    return e === "clear" ? r ? ps(s ? cs.l : cs.s, f) + (s ? Wa(70, 20, 5.83, 1) + Wa(78.33, 41.67, 3.75, 0.8) + Wa(60, 71.67, 3.33, 0.6) : Wa(42, 12, 3.5, 1) + Wa(47, 25, 2.25, 0.8) + Wa(36, 43, 2, 0.6)) : Ol(f, s) : e === "partly" ? (r ? ps(s ? cs.lp : cs.sp, f) : s ? '<circle class="wxSunDisc" cx="35.22" cy="33.26" r="23.48" fill="#FFE100"/>' : '<circle class="wxSunDisc" cx="18" cy="17" r="12" fill="#FFE100"/>') + Dr(s ? ei.lp : ei.sp, r ? "wxCloudLight" : "wxBright") + (r ? s ? Wa(73.33, 16.67, 4.17, 0.9) : Wa(44, 10, 2.5, 0.9) : "") : e === "cloudy" ? Dr(s ? ei.lc : ei.s, r ? "wxCloudLight" : "wxBright") + (r ? s ? Wa(15, 15, 3.75, 0.8) + Wa(76.67, 13.33, 2.92, 0.6) : Wa(9, 9, 2.25, 0.8) + Wa(46, 8, 1.75, 0.6) : "") : Dr(s ? ei.lr : ei.s, "wxCloudLight") + (e === "rain" ? Ks(s) : Wl(s));
  }
  const $s = () => {
    var e;
    return ((e = sa == null ? void 0 : sa["sun.sun"]) == null ? void 0 : e.state) === "below_horizon";
  };
  let qa = me().weatherStyle || "bitmap", Xs = me().weatherLayout === "strip" ? "strip" : "tiles", us = me().weatherMotion !== !1;
  const ai = () => us && !Ia(), qi = /* @__PURE__ */ new Map(), Js = 700, Md = (e) => {
    const [r, s] = e.split("/");
    return { k: r === "fog" ? "cloudy" : r === "storm" ? "rain" : r, night: s === "night" };
  };
  function Br(e, r, s, f = qa, b, A) {
    let N = Do(e);
    const O = N === "night" || (A != null ? !!A : !!s && $s());
    N === "night" && (N = "clear");
    const ct = r ? 90 : 54, mt = cd(e, O), pt = performance.now();
    let it = b ? qi.get(b) : null;
    if (b && !it ? qi.set(b, it = { key: mt, t0: -1e9 }) : it && it.key !== mt && (it.fromKey = it.key, it.from = it.last || null, it.key = mt, it.t0 = pt), f !== "smooth") return '<span class="wxIcon pixels' + (r ? " large" : "") + '" aria-hidden="true"><canvas data-wx="' + mt + '"' + (b ? ' data-wx-slot="' + b + '"' : "") + ' data-wx-style="' + f + '" data-wx-size="' + ct + '"></canvas></span>';
    let It = "";
    if (it && pt - it.t0 < Js && (ai() || Ia())) {
      const te = Md(it.fromKey);
      It = '<span class="wxLayer wxOut ' + te.k + (te.night ? " night" : "") + '" style="animation-delay:' + Math.round(it.t0 - pt) + 'ms"><svg viewBox="0 0 ' + ct + " " + ct + '">' + Wi(te.k, te.night, r, "wxg" + ++Ys) + "</svg></span>";
    }
    return '<span class="wxIcon ' + N + (O ? " night" : "") + (r ? " large" : "") + '" aria-hidden="true"><svg viewBox="0 0 ' + ct + " " + ct + '">' + Wi(N, O, r, "wxg" + ++Ys) + "</svg>" + It + "</span>";
  }
  function fs() {
    const e = i("app"), r = getComputedStyle(e), s = (O) => r.getPropertyValue(O).trim(), f = {};
    [["skyClearDay", "--wx-clear"], ["skyClearNight", "--wx-night"], ["skyCloudyDay", "--wx-cloudy"], ["cloudDay", "--wx-cloud-bright"], ["cloudNight", "--wx-cloudy"], ["rain", "--color-accent-primary"]].forEach(([O, ct]) => {
      s(ct) && (f[O] = s(ct));
    });
    const b = s("--color-text-primary") || "#f1f1f1", A = s("--color-bg-card") || "#222222", N = e.classList.contains("light");
    return { colors: f, ink: N ? b : A, paper: N ? A : b };
  }
  function ni(e, r = performance.now()) {
    const s = e.querySelectorAll("canvas[data-wx]");
    if (!s.length) return;
    const f = fs(), b = ai(), A = Ia();
    s.forEach((N) => {
      var it;
      const O = N.dataset.wx, ct = N.dataset.wxSlot ? qi.get(N.dataset.wxSlot) : null;
      let mt = Kd(O, f.colors);
      if (ct && ct.key === O) {
        const It = (r - ct.t0) / Js;
        It < 1 && (b || A) && (mt = Kp(ct.from || Kd(ct.fromKey, f.colors), mt, Math.max(0, It), f.colors, A)), ct.last = mt;
      }
      const pt = up(mt, { size: Number(N.dataset.wxSize) || 54, px: 2, oneBit: N.dataset.wxStyle === "onebit", colors: f.colors, ink: f.ink, paper: f.paper, clock: r, idle: b });
      N.width !== pt.w && (N.width = pt.w), N.height !== pt.h && (N.height = pt.h), (it = N.getContext("2d")) == null || it.putImageData(new ImageData(pt.data, pt.w, pt.h), 0, 0);
    });
  }
  let hs = null, ql = -1;
  function ms(e) {
    if (hs = null, !w) return;
    const r = ai(), s = Math.floor(e / 100), f = [...qi.values()].some((ct) => e - ct.t0 < Js), b = [...Rr.values()].some((ct) => e - ct.t0 < ct.dur), A = wt.home.classList.contains("active"), N = a.classList.contains("open"), O = r && qa === "smooth" && (N || A && Xs === "strip");
    !document.hidden && (f || b || O || r && s !== ql) && (ql = s, A && (ni(i("weatherCard"), e), zi(i("weatherCard"), e)), N && (ni(a, e), zi(a, e))), (r || f || b) && (hs = requestAnimationFrame(ms));
  }
  function Bo() {
    i("app").classList.toggle("wxMotion", ai()), !hs && w && (hs = requestAnimationFrame(ms));
  }
  let jl = [];
  const Je = 36e5, gs = /* @__PURE__ */ new Set(["rainy", "pouring", "lightning", "lightning-rainy", "hail", "snowy", "snowy-rainy"]);
  function En() {
    const e = /* @__PURE__ */ new Date(), r = (A, N) => new Date(e.getFullYear(), e.getMonth(), e.getDate() + A, N), s = [], f = [], b = [...Array(6)].map((A, N) => {
      const O = r(N, 6), ct = r(N, 18), mt = r(N + 1, 6), pt = jl.find((It) => Ie(new Date(It.datetime)) === Ie(O)), it = (It, te, Ot) => {
        const Et = s.filter((ge) => ge.t >= +It && ge.t < +te);
        if (Et.length) {
          const ge = {};
          return Et.forEach((jt) => {
            ge[jt.c] = (ge[jt.c] || 0) + (gs.has(jt.c) ? 2 : 1);
          }), Object.entries(ge).sort((jt, ve) => ve[1] - jt[1])[0][0];
        }
        const At = f.find((ge) => {
          const jt = +new Date(ge.datetime);
          return jt >= +It - 3 * Je && jt < +te && (ge.is_daytime == null || !!ge.is_daytime == !Ot);
        });
        if (At) return At.condition;
        const fe = (pt == null ? void 0 : pt.condition) || "cloudy";
        return Ot && fe === "sunny" ? "clear-night" : fe;
      };
      return { start: +O, end: +mt, day: it(O, ct, !1), night: it(ct, mt, !0), hi: Number(pt == null ? void 0 : pt.temperature), lo: Number(pt == null ? void 0 : pt.templow) };
    });
    return { days: b, hours: s, start: b[0].start, end: b[5].end };
  }
  const ji = (e, r) => {
    const s = e.days.findIndex((b) => r < b.end);
    if (s < 0) return 1;
    const f = e.days[s];
    return Math.max(0, (s + (r - f.start) / (f.end - f.start)) / 6);
  }, Sd = (e, r) => {
    const s = Math.max(0, Math.min(0.99999, r)) * 6, f = Math.floor(s), b = e.days[f];
    return b.start + (s - f) * (b.end - b.start);
  };
  function Qs(e, r) {
    const s = Math.max(0, e.days.findIndex((ct) => r < ct.end)), f = e.days[s], b = (r - f.start) / (f.end - f.start) >= 0.5;
    let A = b ? f.night : f.day, N = NaN;
    const O = e.hours;
    if (O.length && r >= O[0].t - Je && r <= O[O.length - 1].t + Je) {
      let ct = O.findIndex((it) => it.t > r);
      ct < 0 && (ct = O.length);
      const mt = O[Math.max(0, ct - 1)], pt = O[Math.min(O.length - 1, ct)];
      A = mt.c || A, N = pt.t > mt.t ? mt.temp + (pt.temp - mt.temp) * Math.max(0, Math.min(1, (r - mt.t) / (pt.t - mt.t))) : mt.temp;
    }
    if (!Number.isFinite(N)) {
      const ct = [];
      if (e.days.forEach((mt) => {
        Number.isFinite(mt.lo) && ct.push([mt.start - Je, mt.lo]), Number.isFinite(mt.hi) && ct.push([mt.start + 9 * Je, mt.hi]);
      }), ct.length) {
        N = r <= ct[0][0] ? ct[0][1] : ct[ct.length - 1][1];
        for (let mt = 1; mt < ct.length; mt++) if (r <= ct[mt][0] && r > ct[mt - 1][0]) {
          const [pt, it] = ct[mt - 1], [It, te] = ct[mt];
          N = it + (te - it) * (1 - Math.cos(Math.PI * (r - pt) / (It - pt))) / 2;
          break;
        }
      }
    }
    return { cond: b && A === "sunny" ? "clear-night" : A, temp: N, night: b, day: f };
  }
  const tl = (e) => Ie(new Date(e)) === Ie(/* @__PURE__ */ new Date()) ? "Today" : new Intl.DateTimeFormat(void 0, { weekday: "short" }).format(new Date(e)), Rr = /* @__PURE__ */ new Map(), el = 900, vs = 700;
  let Ro = null;
  const sn = typeof ResizeObserver == "function" ? new ResizeObserver((e) => e.forEach((r) => {
    zi(r.target.parentElement), r.target.closest("#wxDialog") && q();
  })) : null;
  function zi(e, r = performance.now()) {
    const s = e.querySelectorAll("canvas[data-wx-strip]");
    if (!s.length) return;
    const f = En(), b = f.days.flatMap((it) => [{ cond: it.day, night: !1 }, { cond: it.night, night: !0 }]), A = b.map((it) => it.cond).join(), N = fs(), O = ai(), ct = Ia(), mt = Number(Ie(new Date(f.start)).replace(/\D/g, "")) % 9973;
    let pt = !1;
    s.forEach((it) => {
      var ge;
      const It = it.clientWidth, te = it.clientHeight;
      if (!It || !te) return;
      const Ot = it.dataset.wxStrip;
      let Et = Rr.get(Ot);
      Et ? Et.sig !== A && (Et.prev = Et.segs, Et.sig = A, Et.segs = b, Et.t0 = r, Et.dur = vs) : Rr.set(Ot, Et = { sig: A, segs: b, prev: null, t0: r, dur: el });
      const At = O || ct ? Math.min(1, Math.max(0, (r - Et.t0) / Et.dur)) : 1;
      At < 1 && (pt = !0);
      const fe = { width: It, height: te, colors: N.colors, clock: r, ambient: O, seed: mt, reveal: ct ? At : 1 - Math.pow(1 - At, 3), prev: At < 1 ? Et.prev : null, reduce: ct };
      if (qa === "smooth") {
        const jt = Math.min(2, window.devicePixelRatio || 1), ve = Math.round(It * jt), Ee = Math.round(te * jt);
        it.width !== ve && (it.width = ve), it.height !== Ee && (it.height = Ee);
        const re = it.getContext("2d");
        if (!re) return;
        re.setTransform(jt, 0, 0, jt, 0, 0), cu(re, b, fe);
      } else {
        const jt = du(b, { ...fe, px: 2, oneBit: qa === "onebit", ink: N.ink, paper: N.paper });
        it.width !== jt.w && (it.width = jt.w), it.height !== jt.h && (it.height = jt.h), (ge = it.getContext("2d")) == null || ge.putImageData(new ImageData(jt.data, jt.w, jt.h), 0, 0);
      }
    }), pt && Bo();
  }
  function al() {
    const e = i("weatherCard");
    if (!e || e.hidden) return;
    const r = aa.weather, s = r && (sa == null ? void 0 : sa[r]);
    if (!s) {
      e.innerHTML = '<div class="activityHeader"><div class="activityTitle">Weather</div></div><div class="activityRows"><div class="activityRow">' + Br("cloudy") + '<div><div class="activityRowName">Forecast</div><div class="activityRowMeta">' + (r ? "Not available" : "Set up in Settings") + "</div></div></div></div>", ni(e);
      return;
    }
    const f = s.attributes || {}, b = f.temperature_unit || "°", A = (re) => Number.isFinite(Number(re)) ? Math.round(Number(re)) + "°" : "—", N = (f.friendly_name || "").replace(/^forecast\s+/i, "") || "Weather", O = _r[s.state] || (s.state ? s.state.charAt(0).toUpperCase() + s.state.slice(1) : "—"), ct = Ie(/* @__PURE__ */ new Date()), mt = jl.slice(0, 7), pt = mt.find((re) => Ie(new Date(re.datetime)) === ct) || null, it = mt.filter((re) => Ie(new Date(re.datetime)) >= ct).slice(0, 6), It = /* @__PURE__ */ new Date(), te = Ie(new Date(It.getFullYear(), It.getMonth(), It.getDate() + 1)), Ot = pt ? "H " + A(pt.temperature) + "&ensp; L " + A(pt.templow) : "", Et = (re) => {
      const ae = Ie(new Date(re.datetime));
      return ae === ct ? "Today" : ae === te ? "Tomorrow" : new Intl.DateTimeFormat(void 0, { weekday: "short" }).format(new Date(re.datetime));
    }, At = Number.isFinite(Number(f.temperature)) ? Math.round(Number(f.temperature)) : "—", fe = (re) => {
      const ae = new Date(re.datetime);
      return Math.round((new Date(ae.getFullYear(), ae.getMonth(), ae.getDate()) - new Date(It.getFullYear(), It.getMonth(), It.getDate())) / 864e5);
    }, ge = (re) => (_r[re] || re || "").toLowerCase(), jt = (re, ae) => '<div class="activityRow wxDayTile" role="button" tabindex="0" data-wx-day="' + fe(re) + '" aria-label="' + Ut(Et(re) + ": " + ge(re.condition) + ", " + A(re.temperature) + " / " + A(re.templow) + ". Open the forecast") + '">' + Br(re.condition, !1, !1, qa, "day" + ae) + '<div><div class="activityRowName">' + Ut(Et(re)) + '</div><div class="activityRowMeta">' + A(re.temperature) + " / " + A(re.templow) + "</div></div></div>", ve = () => '<div class="wxStrip"><div class="wxStripDays">' + En().days.map((ae, ma) => {
      const Ge = new Intl.DateTimeFormat(void 0, { weekday: "long" }).format(new Date(ae.start)) + ": " + ge(ae.day) + (ge(ae.day) === ge(ae.night) ? " all day and night" : ", then " + ge(ae.night) + " overnight") + (Number.isFinite(ae.hi) ? ". High " + A(ae.hi) : "") + (Number.isFinite(ae.lo) ? ", low " + A(ae.lo) : "") + ". Open the forecast";
      return '<div class="wxStripDay" role="button" tabindex="0" data-wx-day="' + ma + '" aria-label="' + Ut(Ge) + '"><span class="wxDayName">' + Ut(tl(ae.start)) + '</span><span class="wxStripGap" aria-hidden="true"></span><span class="wxTemps" aria-hidden="true"><span class="wxHigh">' + A(ae.hi) + '</span><span class="wxLow">' + A(ae.lo) + "</span></span></div>";
    }).join("") + '</div><canvas class="wxStripSky" data-wx-strip="inline" aria-hidden="true"></canvas></div>';
    e.innerHTML = '<div class="wxWide"><div class="wxNow" role="button" tabindex="0" data-wx-open="now" aria-label="' + Ut("Now in " + N + ": " + At + "°, " + ge(s.state) + ". Open the forecast") + '"><div class="wxCurrent">' + Br(s.state, !0, !0, qa, "now") + '<div class="wxTempBlock"><div class="wxTemp"><span class="wxDeg">' + Ut(String(At)) + '</span><span class="wxUnit">' + Ut(b) + '</span></div><div class="wxPlace">' + Ut(N) + '</div></div></div><div class="wxCondition"><div class="wxCondName">' + Ut(O) + "</div>" + (Ot ? '<div class="wxRange">' + Ot + "</div>" : "") + "</div></div>" + // the days are tiles under Now, like every card of readings (Figma "Weather in halves · proposal"), or the sky strip
    (it.length ? Xs === "strip" ? ve() : '<div class="activityRows wxDays">' + it.map(jt).join("") + "</div>" : '<div class="wxNoDays">Loading the forecast…</div>') + "</div>", ni(e);
    const Ee = e.querySelector("canvas[data-wx-strip]");
    Ro && Ro !== Ee && (sn == null || sn.unobserve(Ro)), Ro = Ee, Ee && (sn == null || sn.observe(Ee), zi(e)), Bo(), I();
  }
  const nl = i("weatherCard"), t = (e) => {
    const r = e.closest("[data-wx-day]");
    if (r) {
      const f = /* @__PURE__ */ new Date();
      y(+new Date(f.getFullYear(), f.getMonth(), f.getDate() + Number(r.dataset.wxDay), 12), r);
      return;
    }
    const s = e.closest("[data-wx-open]");
    s && y(Date.now(), s);
  };
  nl.addEventListener("click", (e) => t(e.target)), nl.addEventListener("keydown", (e) => {
    (e.key === "Enter" || e.key === " ") && e.target.matches("[data-wx-day],[data-wx-open]") && (e.preventDefault(), t(e.target));
  });
  const a = i("wxDialog"), o = i("wxGraph"), l = i("wxGraphWrap");
  let c = Date.now(), m = null, u = !1, v = null;
  function y(e, r) {
    const s = En();
    m = r || null, c = Math.max(s.start, Math.min(s.end - Je, e)), Rr.delete("dialog"), qi.delete("scrub"), a.classList.add("open"), a.setAttribute("aria-hidden", "false"), I(), sn == null || sn.observe(a.querySelector("canvas[data-wx-strip]")), o.focus({ preventScroll: !0 }), Bo();
  }
  function H() {
    var e;
    a.classList.remove("open"), a.setAttribute("aria-hidden", "true"), sn == null || sn.unobserve(a.querySelector("canvas[data-wx-strip]")), (e = m == null ? void 0 : m.focus) == null || e.call(m, { preventScroll: !0 }), m = null;
  }
  function I() {
    if (!a.classList.contains("open")) return;
    const e = En();
    i("wxGraphDays").innerHTML = e.days.map((r) => "<span>" + Ut(tl(r.start)) + "</span>").join(""), q(e), D(e), zi(a);
  }
  function D(e = En()) {
    const r = Qs(e, c), s = sa == null ? void 0 : sa[aa.weather], f = (s == null ? void 0 : s.attributes) || {}, b = f.temperature_unit || "°", A = Math.abs(c - Date.now()) < Je / 2, N = A && s ? s.state : r.cond, O = A && Number.isFinite(Number(f.temperature)) ? Math.round(Number(f.temperature)) : Number.isFinite(r.temp) ? Math.round(r.temp) : "—", ct = _r[N] || (N ? N.charAt(0).toUpperCase() + N.slice(1) : "—"), mt = A ? "Now" : new Intl.DateTimeFormat(void 0, { weekday: "short", hour: "2-digit", minute: "2-digit" }).format(new Date(Math.round(c / Je) * Je)), pt = r.day, it = (Number.isFinite(pt.hi) ? "H " + Math.round(pt.hi) + "°" : "") + (Number.isFinite(pt.lo) ? "&ensp; L " + Math.round(pt.lo) + "°" : "");
    i("wxDialogNow").innerHTML = '<div class="wxCurrent">' + Br(N, !0, A, qa, "scrub", A ? void 0 : r.night) + '<div class="wxTempBlock"><div class="wxTemp"><span class="wxDeg">' + Ut(String(O)) + '</span><span class="wxUnit">' + Ut(b) + '</span></div><div class="wxPlace">' + Ut(mt) + '</div></div></div><div class="wxCondition"><div class="wxCondName">' + Ut(ct) + "</div>" + (it ? '<div class="wxRange">' + it + "</div>" : "") + "</div>", ni(i("wxDialogNow")), o.setAttribute("aria-valuenow", String(Math.round((c - e.start) / Je))), o.setAttribute("aria-valuetext", mt + ", " + ct.toLowerCase() + ", " + O + "°"), X(e), Bo();
  }
  function q(e = En()) {
    const r = i("wxGraphLine"), s = l.clientWidth, f = l.clientHeight;
    if (!s || !f) return;
    const b = [];
    for (let At = e.start; At <= e.end; At += Je) {
      const fe = Qs(e, At).temp;
      Number.isFinite(fe) && b.push([ji(e, At) * s, fe]);
    }
    if (r.setAttribute("viewBox", "0 0 " + s + " " + f), b.length < 2) {
      r.innerHTML = '<g id="wxCursorMark"></g>', v = null, X(e);
      return;
    }
    const A = b.map((At) => At[1]), N = Math.min(...A), O = Math.max(...A), ct = Math.max(4, O - N), mt = qa !== "smooth", pt = (At) => mt ? Math.round(At / 2) * 2 : Math.round(At * 10) / 10;
    v = (At) => f * 0.84 - (At - N) / ct * f * 0.62;
    const it = fs(), It = qa === "onebit" ? it.paper : "#ffffff", te = qa === "onebit" ? it.ink : "rgba(0,0,0,.28)", Ot = "M" + b.map((At) => pt(At[0]) + " " + pt(v(At[1]))).join(" L"), Et = (At, fe) => {
      const ge = b.find((jt) => jt[1] === At);
      return '<text class="wxLineLabel" x="' + pt(Math.min(s - 14, Math.max(14, ge[0]))) + '" y="' + pt(v(At) + (fe ? 18 : -10)) + '" fill="' + It + '" stroke="' + te + '">' + Math.round(At) + "°</text>";
    };
    r.setAttribute("shape-rendering", mt ? "crispEdges" : "auto"), r.innerHTML = '<path d="' + Ot + '" fill="none" stroke="' + te + '" stroke-width="' + (mt ? 4 : 5) + '" stroke-linejoin="round"/><path d="' + Ot + '" fill="none" stroke="' + It + '" stroke-width="2" stroke-linejoin="round"/>' + Et(O, !1) + Et(N, !0) + '<g id="wxCursorMark"></g>', X(e);
  }
  function X(e = En()) {
    const r = i("wxGraphLine").querySelector("#wxCursorMark");
    if (!r) return;
    const s = l.clientWidth, f = l.clientHeight, b = qa !== "smooth", A = (It) => b ? Math.round(It / 2) * 2 : It, N = A(ji(e, c) * s), O = Qs(e, c).temp, ct = fs(), mt = qa === "onebit" ? ct.paper : "#ffffff", pt = qa === "onebit" ? ct.ink : "rgba(0,0,0,.28)", it = v && Number.isFinite(O) ? A(v(O)) : null;
    r.innerHTML = '<rect x="' + (N - 2) + '" y="0" width="4" height="' + f + '" fill="' + pt + '"/><rect x="' + (N - 1) + '" y="0" width="2" height="' + f + '" fill="' + mt + '"/>' + (it == null ? "" : b ? '<rect x="' + (N - 5) + '" y="' + (it - 5) + '" width="10" height="10" fill="' + mt + '" stroke="' + pt + '" stroke-width="2"/>' : '<circle cx="' + N + '" cy="' + it + '" r="6" fill="' + mt + '" stroke="' + pt + '" stroke-width="2"/>');
  }
  const Ct = (e) => {
    const r = l.getBoundingClientRect();
    r.width && (c = Sd(En(), (e - r.left) / r.width), D());
  };
  o.addEventListener("pointerdown", (e) => {
    if (e.button === 0) {
      u = !0;
      try {
        o.setPointerCapture(e.pointerId);
      } catch {
      }
      Ct(e.clientX);
    }
  }), o.addEventListener("pointermove", (e) => {
    u && Ct(e.clientX);
  }), ["pointerup", "pointercancel", "lostpointercapture"].forEach((e) => o.addEventListener(e, () => {
    u = !1;
  })), o.addEventListener("keydown", (e) => {
    const r = En(), s = { ArrowLeft: -Je, ArrowRight: Je, ArrowDown: -Je, ArrowUp: Je, PageUp: -24 * Je, PageDown: 24 * Je }[e.key];
    s ? (e.preventDefault(), c = Math.max(r.start, Math.min(r.end - Je, Math.round(c / Je) * Je + s)), D(r)) : (e.key === "Home" || e.key === "End") && (e.preventDefault(), c = e.key === "Home" ? r.start : r.end - Je, D(r));
  }), i("wxDialogClose").addEventListener("click", H), a.addEventListener("click", (e) => {
    e.target === a && H();
  }), a.addEventListener("keydown", (e) => {
    e.key === "Escape" && (e.preventDefault(), H());
  }), al(), (uc = (cc = window.matchMedia) == null ? void 0 : (pc = cc.call(window, "(prefers-reduced-motion: reduce)")).addEventListener) == null || uc.call(pc, "change", () => {
    Bo(), ni(n);
  }), Bo();
  const at = i("tvNav");
  d.fullscreenSupported || (at.hidden = !0), at.addEventListener("click", () => d.toggleFullscreen()), n.addEventListener("keydown", (e) => {
    !wt.workout.classList.contains("active") || Si.classList.contains("active") || e.target.closest("input,select,textarea,.holdEnd") || (e.key === "MediaPlayPause" || e.key === " " && !e.target.closest("button") ? (e.preventDefault(), br.click()) : e.key === "MediaTrackNext" ? (e.preventDefault(), i("skipExercise").click()) : e.key === "MediaTrackPrevious" && (e.preventDefault(), i("restartSegment").click()));
  }), n.querySelectorAll("[data-rounds-step]").forEach((e) => e.addEventListener("click", () => {
    const r = Math.max(1, Math.min(10, (Number(se.value) || 1) + Number(e.dataset.roundsStep)));
    String(r) !== se.value && (se.value = r, se.dispatchEvent(new Event("input", { bubbles: !0 })));
  })), [_, L, P, se].forEach((e) => e.addEventListener("input", () => {
    const r = ee[Jt];
    r && (r.total = Number(_.value), r.work = Number(L.value), r.rest = Number(P.value)), Te();
  })), Y.addEventListener("click", kr), zt.addEventListener("click", () => M("settings")), i("settingsBack").addEventListener("click", kr), br.addEventListener("click", () => no(!ja)), da(Jt), zr(), pr(), rn(), i("healthHelpOpen").addEventListener("click", () => n.querySelector(".tab[data-pane=helpPane]").click()), Tr(i("resetStats"), i("resetStatsFill"), 1500, () => {
    xe.history = [], xe.checkins = [], Wo = "";
    try {
      localStorage.removeItem("move-assistant-dismissed");
    } catch {
    }
    Xa(), ti(), pr(), zr(), rn(), Mo(), Ae("Stats reset");
  });
  const lt = i("morningTime"), F = i("eveningTime"), xt = i("checkinAutoOpen");
  lt.value = an().morning, F.value = an().evening, xt.classList.toggle("on", me().checkinAutoOpen !== !1), [["morningTime", lt], ["eveningTime", F]].forEach(([e, r]) => r.addEventListener("change", () => {
    r.value && (Za(e, r.value), Mo());
  })), xt.addEventListener("click", () => {
    const e = me().checkinAutoOpen === !1;
    xt.classList.toggle("on", e), Za("checkinAutoOpen", e);
  }), setTimeout(As, 800);
  const G = i("checkinNotify"), qt = i("checkinNotifyTarget"), Fe = i("checkinNotifyStatus"), we = Fe.textContent;
  function Aa() {
    const e = d.notifyServices(), r = e.filter((b) => b.startsWith("mobile_app_")), s = r.length ? r : e, f = (b) => b.replace(/^mobile_app_/, "").replace(/_/g, " ");
    qt.innerHTML = s.map((b) => '<option value="' + Ut(b) + '">' + Ut(f(b)) + "</option>").join(""), !me().notifyTarget && s[0] && (me().notifyTarget = s[0]), qt.value = me().notifyTarget || "";
  }
  function Xt() {
    const e = !!me().notifyOn;
    G.classList.toggle("on", e), i("checkinNotifyTargetRow").hidden = !e;
    const r = an();
    Fe.textContent = e ? "Sends at " + r.morning + " and " + r.evening : we;
  }
  async function qe() {
    const e = !!me().notifyOn;
    try {
      return await d.setReminderAutomation(e ? { target: me().notifyTarget, times: an() } : null), !0;
    } catch {
      return Ae("Couldn't update the reminder in Home Assistant"), !1;
    }
  }
  G.addEventListener("click", async () => {
    const e = !me().notifyOn;
    if (e && (Aa(), !me().notifyTarget)) {
      Ae("Install the Companion app on your phone first");
      return;
    }
    me().notifyOn = e, Xt(), await qe() ? (Xa(), Ae(e ? "Check-in notifications on" : "Check-in notifications off")) : (me().notifyOn = !e, Xt());
  }), qt.addEventListener("change", () => {
    Za("notifyTarget", qt.value), me().notifyOn && qe();
  }), [lt, F].forEach((e) => e.addEventListener("change", () => {
    Xt(), me().notifyOn && qe();
  })), Aa(), Xt();
  let oi = null;
  function Cd() {
    oi || (oi = setTimeout(() => {
      oi = null, rn();
    }, 3e4));
  }
  return {
    updateStates(e) {
      var s, f;
      const r = !sa || sa[aa.weather] !== e[aa.weather] || ((s = sa["sun.sun"]) == null ? void 0 : s.state) !== ((f = e["sun.sun"]) == null ? void 0 : f.state);
      sa = e, Nl(e), ds(e), r && al(), Date.now() - Il > 60 * 60 * 1e3 && Hl(), Cd();
    },
    applyRemoteData(e) {
      if (e && (Array.isArray(e.history) && (xe.history = e.history, ti()), Array.isArray(e.history) && rn(), Array.isArray(e.checkins) && (xe.checkins = e.checkins.map(Ji), Mo(), zr(), pr(), ti(), rn()), e.profiles && !Ha.classList.contains("open") && !nn)) {
        const r = Xi(e);
        Object.keys(ee).forEach((s) => delete ee[s]), Object.assign(ee, r.profiles), xe.order = r.order, ee[Jt] || (Jt = xe.order[0]), co(), da(Jt);
      }
    },
    suspend() {
      w = !1;
    },
    resume() {
      w || (w = !0, Ei || (Ei = requestAnimationFrame(Kr)), _i || (_i = requestAnimationFrame($r)), Bo(), Hi(n.querySelector(".tab.active"), !1));
    }
  };
}
const fu = /* @__PURE__ */ new Set(["roaming", "test_area"]), hu = {
  living_room: { climate: !0, cover: ["Curtains", "curtain", 62], temperature: 20.5, humidity: 44, motion: "Living room motion", plant: ["Monstera", 32, 4200, 21.4, 580] },
  kitchen: { temperature: 21.2, humidity: 48, door: "Back door", plant: ["Basil", 55, 900, 22.1, 910] },
  balcony: { solar: !0, door: "Balcony door", doorOpen: !0, valve: "Watering", plant: ["Tomatoes", 61, 18500, 14.2, 1240] },
  bedroom: { cover: ["Roller blind", "shade", 0], humidifier: !0, temperature: 18.9, humidity: 38, window: "Bedroom window" },
  office: { cover: ["Blinds", "blind", 60, 45], vacuum: !0, temperature: 21.8, humidity: 41, plant: ["Pothos", 47, 2600, 21.6, 640] },
  bathroom: { temperature: 22.4, humidity: 62 }
}, il = { moisture: [40, 70], light: [1500, 6e4], temperature: [10, 32], fertility: [350, 2e3] }, Ma = "made_up_", Ui = (n) => {
  var d;
  return (d = String(n).split(".")[1]) == null ? void 0 : d.startsWith(Ma);
}, Ul = (n) => n.toLowerCase().replace(/[^a-z0-9]+/g, "_");
function nc(n) {
  const d = n.getHours() + n.getMinutes() / 60, i = Math.max(0, Math.sin((d - 7) / 13 * Math.PI));
  return 2.4 * i * i;
}
function mu(n) {
  const d = new Date(n.getFullYear(), n.getMonth(), n.getDate());
  let i = 0;
  for (let p = +d; p < +n; p += 10 * 60 * 1e3) i += nc(new Date(p)) / 6;
  return i;
}
function vc(n = /* @__PURE__ */ new Date()) {
  const d = [];
  for (let i = 0; i <= 96; i++) {
    const p = +n - (96 - i) * 15 * 60 * 1e3;
    d.push([p, nc(new Date(p))]);
  }
  return d;
}
function gu({ onChange: n }) {
  const d = {}, i = {}, p = (V, W, dt, st) => {
    d[V] = { entity_id: V, state: dt, attributes: st, last_changed: new Date(Date.now() - 18e6).toISOString() }, i[V] = W;
  }, g = (V, W, dt) => {
    const st = d[V], gt = W ?? st.state;
    d[V] = { ...st, state: gt, attributes: { ...st.attributes, ...dt }, last_changed: gt === st.state ? st.last_changed : (/* @__PURE__ */ new Date()).toISOString() };
  }, w = (V, W, dt, st) => p("binary_sensor." + Ma + (V ? V + "_" : "") + Ul(W), V, st ? "on" : "off", { friendly_name: W, device_class: dt });
  Object.entries(hu).forEach(([V, W]) => {
    if (W.temperature != null && p("sensor." + Ma + V + "_temperature", V, String(W.temperature), { friendly_name: "Temperature", device_class: "temperature", state_class: "measurement", unit_of_measurement: "°C" }), W.humidity != null && p("sensor." + Ma + V + "_humidity", V, String(W.humidity), { friendly_name: "Humidity", device_class: "humidity", state_class: "measurement", unit_of_measurement: "%" }), W.vacuum && p("vacuum." + Ma + "robot", V, "docked", { friendly_name: "Robot vacuum", battery_level: 100, fan_speed: "standard", rooms: [] }), W.climate && p("climate." + Ma + V, V, "heat", { friendly_name: "Thermostat", hvac_modes: ["off", "heat", "cool", "auto"], hvac_action: "heating", current_temperature: W.temperature, temperature: 21, min_temp: 7, max_temp: 30, target_temp_step: 0.5 }), W.cover) {
      const [dt, st, gt, tt] = W.cover;
      p("cover." + Ma + V + "_" + Ul(dt), V, gt ? "open" : "closed", { friendly_name: dt, device_class: st, current_position: gt, ...tt != null ? { current_tilt_position: tt } : {} });
    }
    if (W.humidifier && p("humidifier." + Ma + V, V, "on", { friendly_name: "Humidifier", device_class: "humidifier", humidity: 45, current_humidity: W.humidity, action: "humidifying", mode: "normal", available_modes: ["normal", "eco", "sleep", "boost"], min_humidity: 30, max_humidity: 70 }), W.solar && (p("sensor." + Ma + V + "_solar_power", V, "0", { friendly_name: "Solar now", device_class: "power", state_class: "measurement", unit_of_measurement: "kW" }), p("sensor." + Ma + V + "_solar_today", V, "0", { friendly_name: "Solar today", device_class: "energy", state_class: "total_increasing", unit_of_measurement: "kWh" })), W.valve && p("valve." + Ma + V + "_" + Ul(W.valve), V, "closed", { friendly_name: W.valve, device_class: "water" }), W.door && w(V, W.door, "door", W.doorOpen), W.window && w(V, W.window, "window", !1), W.motion && w(V, W.motion, "motion", !1), W.plant) {
      const [dt, st, gt, tt, et] = W.plant, T = Ma + Ul(dt), ot = (U, wt, Y, zt, M) => p("sensor." + T + "_" + U, V, String(Y), { friendly_name: wt, device_class: M, state_class: "measurement", unit_of_measurement: zt, plant_low: Y < il[U][0], plant_high: Y > il[U][1], icon: { moisture: "mdi:water", light: "mdi:white-balance-sunny", temperature: "mdi:thermometer", fertility: "mdi:emoticon-poop" }[U] });
      ot("moisture", "Moisture", st, "%", "moisture"), ot("light", "Light", gt, "lx", "illuminance"), ot("temperature", "Temperature", tt, "°C", "temperature"), ot("fertility", "Fertility", et, "µS/cm", "conductivity");
      const St = Object.entries({ moisture: st, light: gt, temperature: tt, fertility: et }).filter(([U, wt]) => wt < il[U][0] || wt > il[U][1]).map(([U, wt]) => U + (wt < il[U][0] ? " low" : " high"));
      p("plant." + T, V, St.length ? "problem" : "ok", { friendly_name: dt, moisture: st, brightness: gt, temperature: tt, conductivity: et, problem: St.join(", ") || "none" });
    }
  }), p("alarm_control_panel." + Ma + "house", null, "disarmed", { friendly_name: "Alarm", supported_features: 7, code_format: null, changed_by: "Matt" }), w(null, "Front door", "door", !1), w(null, "Smoke alarm", "smoke", !1), p("sensor." + Ma + "doorbell", null, "", { friendly_name: "Doorbell", device_class: "timestamp", rang: Date.now() - 47 * 60 * 1e3 });
  const x = {}, E = {};
  let k = null;
  function B() {
    const V = /* @__PURE__ */ new Date();
    Object.keys(d).forEach((W) => {
      W.endsWith("_solar_power") && (d[W] = { ...d[W], state: nc(V).toFixed(2) }), W.endsWith("_solar_today") && (d[W] = { ...d[W], state: mu(V).toFixed(1) });
    });
  }
  B();
  let yt = 0;
  function ut() {
    let V = !1;
    const W = ++yt % 10 === 0, dt = (tt, et, T) => {
      g(tt, et, T), V = !0;
    };
    Object.entries(x).forEach(([tt, et]) => {
      const T = d[tt].attributes.current_position, ot = T < et ? Math.min(et, T + 10) : Math.max(et, T - 10);
      ot === et && delete x[tt], dt(tt, ot === et ? ot === 0 ? "closed" : "open" : et > T ? "opening" : "closing", { current_position: ot });
    }), Object.entries(E).forEach(([tt, et]) => {
      const T = d[tt].attributes.current_tilt_position, ot = T < et ? Math.min(et, T + 25) : Math.max(et, T - 25);
      ot === et && delete E[tt], dt(tt, null, { current_tilt_position: ot });
    }), Object.keys(d).filter((tt) => tt.startsWith("climate.")).forEach((tt) => {
      const et = d[tt], T = et.attributes, ot = T.current_temperature, St = (et.state === "heat" || et.state === "auto") && ot < T.temperature - 0.05, U = (et.state === "cool" || et.state === "auto") && ot > T.temperature + 0.05, wt = et.state === "off" ? "off" : St ? "heating" : U ? "cooling" : "idle", Y = W ? Math.round((ot + (St ? 0.1 : U ? -0.1 : 0)) * 10) / 10 : ot;
      (Y !== ot || wt !== T.hvac_action) && dt(tt, null, { current_temperature: Y, hvac_action: wt });
    }), Object.keys(d).filter((tt) => tt.startsWith("humidifier.")).forEach((tt) => {
      const et = d[tt], T = et.attributes, ot = T.current_humidity, St = et.state === "on" && ot < T.humidity, U = St && W ? ot + 1 : ot, wt = et.state !== "on" ? "off" : St ? "humidifying" : "idle";
      if (U !== ot || wt !== T.action) {
        dt(tt, null, { current_humidity: U, action: wt });
        const Y = "sensor." + Ma + i[tt] + "_humidity";
        d[Y] && dt(Y, String(U));
      }
    });
    const st = d["vacuum." + Ma + "robot"], gt = st.attributes;
    st.state === "cleaning" && W && dt(st.entity_id, null, { battery_level: Math.max(5, gt.battery_level - 1) }), st.state === "returning" && dt(st.entity_id, "docked", {}), st.state === "docked" && gt.battery_level < 100 && dt(st.entity_id, null, { battery_level: Math.min(100, gt.battery_level + 2) }), k && Date.now() - k.at > 5e3 && (dt("alarm_control_panel." + Ma + "house", "armed_" + k.mode, {}), k = null), V && n();
  }
  const Z = setInterval(ut, 1e3), $ = setInterval(() => {
    B(), n();
  }, 60 * 1e3);
  function rt(V, W, dt) {
    const st = dt == null ? void 0 : dt.entity_id;
    if (!d[st]) return !1;
    const gt = d[st], tt = gt.attributes, et = (T, ot) => g(st, T, ot);
    if (V === "climate" && (W === "set_temperature" && et(null, { temperature: Math.max(tt.min_temp, Math.min(tt.max_temp, dt.temperature)) }), W === "set_hvac_mode" && et(dt.hvac_mode, dt.hvac_mode === "off" ? { hvac_action: "off" } : {}), W === "toggle" && et(gt.state === "off" ? "heat" : "off", gt.state === "off" ? {} : { hvac_action: "off" })), V === "cover") {
      const T = W === "open_cover" ? 100 : W === "close_cover" ? 0 : W === "set_cover_position" ? dt.position : W === "toggle" ? tt.current_position > 0 ? 0 : 100 : null;
      W === "stop_cover" && (delete x[st], delete E[st], et(tt.current_position === 0 ? "closed" : "open")), T != null && T !== tt.current_position && (x[st] = T, et(T > tt.current_position ? "opening" : "closing"));
      const ot = W === "open_cover_tilt" ? 100 : W === "close_cover_tilt" ? 0 : W === "set_cover_tilt_position" ? dt.tilt_position : null;
      W === "stop_cover_tilt" && delete E[st], ot != null && tt.current_tilt_position != null && ot !== tt.current_tilt_position && (E[st] = ot);
    }
    if (V === "humidifier" && (W === "set_humidity" && et(null, { humidity: Math.max(tt.min_humidity, Math.min(tt.max_humidity, dt.humidity)) }), W === "set_mode" && et(null, { mode: dt.mode }), W === "turn_on" || W === "turn_off" || W === "toggle")) {
      const T = W === "turn_on" || W === "toggle" && gt.state !== "on";
      et(T ? "on" : "off", { action: T ? "idle" : "off" });
    }
    if (V === "vacuum" && (W === "start" && et("cleaning", { rooms: dt.rooms || tt.rooms }), W === "pause" && et("paused"), W === "return_to_base" && et("returning", { rooms: [] }), W === "locate" && et(null, { located: Date.now() }), W === "set_rooms" && et(null, { rooms: dt.rooms })), V === "valve") {
      const T = W === "open_valve" || W === "toggle" && gt.state !== "open";
      ["open_valve", "close_valve", "toggle"].includes(W) && et(T ? "open" : "closed");
    }
    if (V === "alarm_control_panel") {
      W === "alarm_disarm" && (k = null, et("disarmed", { changed_by: "Matt" }));
      const T = { alarm_arm_home: "home", alarm_arm_away: "away", alarm_arm_night: "night" }[W];
      T && (k = { mode: T, at: Date.now() }, et("arming", { changed_by: "Matt" }));
    }
    return n(), !0;
  }
  function Q(V) {
    const W = (V == null ? void 0 : V.states) || {}, dt = (V == null ? void 0 : V.entities) || {}, st = (V == null ? void 0 : V.devices) || {}, gt = (L) => {
      var ht;
      const P = dt[L];
      return P && (P.area_id || P.device_id && ((ht = st[P.device_id]) == null ? void 0 : ht.area_id)) || null;
    }, tt = (L) => {
      const P = dt[L];
      return W[L] && W[L].state !== "unavailable" && !(P != null && P.hidden) && !(P != null && P.entity_category);
    }, et = {};
    Object.keys(W).forEach((L) => {
      const P = gt(L);
      P && tt(L) && (et[P] || (et[P] = [])).push(L);
    });
    const T = { ...W, ...d }, ot = (L) => {
      var P, ht;
      return (ht = (P = T[L]) == null ? void 0 : P.attributes) == null ? void 0 : ht.device_class;
    }, St = ["door", "window", "garage_door", "opening", "motion", "occupancy", "smoke", "gas"], U = Object.keys(W).filter((L) => L.startsWith("vacuum.") && tt(L)), wt = Object.values((V == null ? void 0 : V.areas) || {}).filter((L) => !fu.has(L.area_id)).map((L) => {
      const P = L.area_id, ht = et[P] || [], ft = (Rt) => ht.filter((he) => he.startsWith(Rt + ".")), j = (Rt) => ft("sensor").filter((he) => ot(he) === Rt), vt = (Rt) => Object.keys(d).filter((he) => i[he] === P && Rt(he)), Mt = (Rt, he) => Rt.length ? Rt : vt(he), Qt = Mt(j("temperature"), (Rt) => Rt.endsWith(P + "_temperature")), se = Mt(j("humidity"), (Rt) => Rt.endsWith(P + "_humidity")), ta = j("power").filter((Rt) => /^(W|kW)$/.test(T[Rt].attributes.unit_of_measurement || "")), Se = ft("binary_sensor").filter((Rt) => ot(Rt) === "moisture"), pi = Mt(ft("plant"), (Rt) => Rt.startsWith("plant.")).map((Rt) => ({ id: Rt, readings: vt((he) => he.startsWith("sensor." + Rt.split(".")[1] + "_")) })), La = [...ft("binary_sensor").filter((Rt) => St.includes(ot(Rt))), ...vt((Rt) => Rt.startsWith("binary_sensor."))];
      return {
        id: P,
        name: L.name,
        icon: L.icon,
        readings: [...Qt.slice(0, 1), ...se.slice(0, 1), ...Se],
        power: ta.length ? ta.reduce((Rt, he) => Rt + Number(T[he].state) * (T[he].attributes.unit_of_measurement === "kW" ? 1e3 : 1), 0) : null,
        plugs: ft("switch"),
        lights: ft("light"),
        actions: [...ft("light"), ...Mt(ft("climate"), (Rt) => Rt.startsWith("climate.")), ...Mt(ft("cover"), (Rt) => Rt.startsWith("cover.")), ...Mt(ft("humidifier"), (Rt) => Rt.startsWith("humidifier.")), ...Mt(ft("valve"), (Rt) => Rt.startsWith("valve.")), ...ft("media_player"), ...ft("vacuum"), ...U.length ? [] : vt((Rt) => Rt.startsWith("vacuum."))],
        solar: vt((Rt) => Rt.includes("_solar_")),
        plants: pi,
        openings: La,
        alerts: [...Se, ...La].filter((Rt) => {
          var he;
          return ((he = T[Rt]) == null ? void 0 : he.state) === "on";
        })
      };
    }).filter((L) => L.readings.length || L.plugs.length || L.actions.length || L.solar.length || L.plants.length), Y = Object.keys(W).find((L) => /^sensor\..*(p1_meter_power|grid_power)$/.test(L) && W[L].state !== "unavailable") || null, zt = (L) => Object.keys(W).filter((P) => P.startsWith(L + ".") && tt(P)), M = zt("alarm_control_panel"), _ = U.length ? U : ["vacuum." + Ma + "robot"];
    return {
      states: T,
      rooms: wt,
      grid: Y,
      // any device's room, hidden ones too (Maintenance's batteries are mostly diagnostic)
      areaOf: (L) => d[L] ? i[L] : gt(L),
      vacuums: _,
      homeVacuums: _.filter((L) => !wt.some((P) => P.actions.includes(L))),
      security: {
        alarms: M.length ? M : ["alarm_control_panel." + Ma + "house"],
        locks: zt("lock"),
        openings: [...Object.keys(d).filter((L) => L.startsWith("binary_sensor.")), "sensor." + Ma + "doorbell"]
      }
    };
  }
  return { model: Q, call: rt, stop() {
    clearInterval(Z), clearInterval($);
  } };
}
const li = (n) => n < 0 ? 0 : n > 1 ? 1 : n, $d = (n) => {
  const d = String(n || "#000000").trim().replace("#", ""), i = d.length === 3 ? d.split("").map((p) => p + p).join("") : d;
  return [0, 2, 4].map((p) => parseInt(i.slice(p, p + 2), 16) || 0);
}, vu = (n) => "#" + n.map((d) => Math.round(Math.max(0, Math.min(255, d))).toString(16).padStart(2, "0")).join(""), bc = {}, On = (n, d, i) => {
  const p = n + d + i;
  return bc[p] || (bc[p] = vu($d(n).map((g, w) => g + ($d(d)[w] - g) * i)));
}, wc = {}, nd = (n) => wc[n] || (wc[n] = $d(n));
function bu(n) {
  const d = { clear: [n.skyClearDay, n.skyClearNight], cloudy: [n.skyCloudyDay, n.skyCloudyNight], rain: [n.skyRainDay, n.skyRainNight], snow: [n.skySnowDay, n.skySnowNight], fog: [n.skyFogDay, n.skyFogNight] };
  return d.partly = [On(d.clear[0], d.cloudy[0], 0.12), On(d.clear[1], d.cloudy[1], 0.12)], d.storm = [On(d.rain[0], "#000000", 0.22), On(d.rain[1], "#000000", 0.22)], d;
}
const wu = [
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
], si = (n, d) => (wu[(d & 7) * 8 + (n & 7)] + 0.5) / 64, gp = 1, vp = 2, bp = 3, wp = 4, ks = 5, rd = 6, Xd = 7, xp = 8, xc = (n, d) => d <= 0.6665 && ((n - 0.5) * (n - 0.5) + (d - 0.2877) * (d - 0.2877) <= 0.0824 || (n - 0.25) * (n - 0.25) + (d - 0.416) * (d - 0.416) <= 0.0625 || (n - 0.791) * (n - 0.791) + (d - 0.458) * (d - 0.458) <= 0.0437 || n >= 0.25 && n <= 0.791 && d >= 0.416), xu = (n, d, i) => {
  let p = !1;
  for (let g = 0, w = n.length - 1; g < n.length; w = g++) {
    const x = n[g], E = n[w];
    x[1] > i != E[1] > i && d < (E[0] - x[0]) * (i - x[1]) / (E[1] - x[1]) + x[0] && (p = !p);
  }
  return p;
};
function yu(n, d, i, p, { oneBit: g, ink: w, paper: x, snowInk: E }) {
  const k = new Uint8ClampedArray(i * p * 4), B = nd(w), yt = nd(x);
  for (let ut = 0; ut < p; ut++) for (let Z = 0; Z < i; Z++) {
    const $ = ut * i + Z, rt = d[$];
    if (n[$] == null) continue;
    let Q = nd(n[$]);
    if (g) {
      let V;
      rt === wp || rt === xp ? V = !0 : rt === ks ? V = E : rt === Xd || rt === rd ? V = !1 : V = Math.round((0.2126 * Q[0] + 0.7152 * Q[1] + 0.0722 * Q[2]) / 255 * 4) / 4 <= si(Z, ut), (rt === gp || rt === vp || rt === bp || rt === rd) && (Z > 0 && d[$ - 1] !== rt || Z < i - 1 && d[$ + 1] !== rt || ut > 0 && d[$ - i] !== rt || ut < p - 1 && d[$ + i] !== rt) && (V = !0), Q = V ? B : yt;
    }
    k[$ * 4] = Q[0], k[$ * 4 + 1] = Q[1], k[$ * 4 + 2] = Q[2], k[$ * 4 + 3] = 255;
  }
  return { w: i, h: p, data: k };
}
const ku = { clear: 0, partly: 0.35, cloudy: 0.85, fog: 0.9, rain: 1, storm: 1, snow: 0.9 }, Mu = (n) => cd(n, !1).split("/")[0], Ld = (n) => () => {
  n |= 0, n = n + 1831565813 | 0;
  let d = Math.imul(n ^ n >>> 15, 1 | n);
  return d = d + Math.imul(d ^ d >>> 7, 61 | d) ^ d, ((d ^ d >>> 14) >>> 0) / 4294967296;
}, Su = "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", Cu = "M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", Tu = "M0 -1L0.2687 -0.2687L1 0L0.2687 0.2687L0 1L-0.2687 0.2687L-1 0L-0.2687 -0.2687Z", Au = "M7 0L0 13L5 13L2 24L11 9L6 9L9 0Z", Lu = [[7, 0], [0, 13], [5, 13], [2, 24], [11, 9], [6, 9], [9, 0]], Eu = [".##", "##.", ".#.", "#.."];
function yp(n, { width: d, height: i, colors: p, wave: g = 0.38, soft: w = 6, glow: x = 0.6, columns: E = 6 }) {
  const k = { ...hn, dawn: "#e5a77e", ...p }, B = bu(k), yt = d, ut = i, Z = yt / E, $ = Z / 2, rt = Math.PI * 2, Q = n.length ? n : [{ cond: "cloudy", night: !1 }], V = [...Array(E * 2)].map((gt, tt) => {
    const et = Q[Math.min(tt, Q.length - 1)], T = Mu(et.cond), ot = tt % 2 === 1;
    return { cond: et.cond, k: T, night: ot, sky: B[T][ot ? 1 : 0], cover: ku[T] };
  }), W = (gt) => ut * (0.5 - g * Math.cos(rt * (gt / Z - 0.25)));
  return { C: k, S: V, W: yt, H: ut, cw: Z, sw: $, TAU: rt, yb: W, side: (gt, tt, et) => {
    const T = (gt ? W(tt) - et : et - W(tt)) / Math.max(3, w * 1.4) + 0.5;
    return T <= 0 ? 0 : T >= 1 ? 1 : T;
  }, glowAt: (gt) => {
    const tt = ((gt / Z - 0.25) % 1 + 1) % 1, et = Math.max(0, Math.min(E - 1, Math.round(gt / Z - 0.25))), T = Math.max(0, Math.min(E - 1, Math.round(gt / Z - 0.75))), ot = 1 - (V[2 * et].cover + V[2 * T + 1].cover) / 2, St = Math.sin(Math.PI * Math.min(1, Math.max(0, W(gt) / ut)));
    return { c: tt < 0.5 ? k.dusk : k.dawn, a: x * (0.2 + 0.8 * ot) * St * St };
  }, soft: w, tw: Z * 0.3, sy: ut / 90 };
}
function kp(n, { clock: d = 0, ambient: i = !1, seed: p = 1 }) {
  const { S: g, sw: w, side: x, C: E, TAU: k, sy: B, H: yt } = n, ut = d, Z = { stars: [], suns: [], moons: [], clouds: [], drops: [], flakes: [], fogs: [], bolts: [] };
  g.forEach((Q, V) => {
    const W = Ld(p * 977 + V * 131 + 7), dt = (V + 0.5) * w, st = Q.night ? { clear: 9, partly: 5, cloudy: 2, fog: 0, rain: 0, storm: 0, snow: 1 }[Q.k] : 0;
    for (let gt = 0; gt < st; gt++) {
      const tt = dt + (W() - 0.5) * w * 1.6, et = (6 + W() * 76) * B, T = W() < 0.35, ot = 1.8 + W() * 1.6, St = x(!0, tt, et) * (T ? 0.95 : 0.7) * (i ? 0.6 + 0.4 * Math.sin(k * ut / 2600 + gt * 1.7 + V) : 1);
      St >= 0.03 && Z.stars.push({ x: tt, y: et, big: T, size: ot, o: St });
    }
    if (!Q.night && (Q.k === "clear" || Q.k === "partly")) {
      const gt = dt + (W() - 0.5) * w * 0.3, tt = Math.min(15, w * 0.29);
      Z.suns.push({ x: gt, y: 32 * B, rad: tt, halo: tt * 2.8 * (i ? 1 + 0.07 * Math.sin(k * ut / 3600 + V) : 1) });
    }
    if (Q.night && (Q.k === "clear" || Q.k === "partly")) {
      const gt = Math.min(0.78, w * 0.55 / 34), tt = dt - 23 * gt + (W() - 0.5) * w * 0.2;
      Z.moons.push({ x: tt + 23 * gt, y: (4 + (i ? 0.8 * Math.sin(k * ut / 5200 + V) : 0)) * B + 23 * gt, d: 46 * gt });
    }
  });
  const $ = Math.max(56, Math.min(100, yt * 0.45)), rt = Math.max(1, w / ($ * 2.4));
  return g.forEach((Q, V) => {
    const W = { clear: 0, partly: 1, cloudy: 3, fog: 0, rain: 3, storm: 3, snow: 2 }[Q.k];
    if (!W) return;
    const dt = Q.k === "partly" ? 1 : Math.round(W * rt), st = Ld(p * 577 + V * 71 + 3), gt = (V + 0.5) * w, tt = Q.k === "rain" || Q.k === "storm" || Q.night ? E.cloudNight : E.cloudDay, et = Q.night ? 0.82 : Q.k === "storm" ? 0.75 : 1;
    for (let T = 0; T < dt; T++) {
      const ot = $ / 46 * (Q.k === "partly" ? 1 : 0.8 + st() * 0.4), St = gt + (Q.k === "partly" ? w * 0.12 : ((T + 0.5) / dt - 0.5) * w * 0.95 + (st() - 0.5) * w * 0.5 / dt), U = (Q.k === "partly" ? 40 : 6 + st() * 26) * B, wt = i ? 2.5 * Math.sin(k * ut / 9e3 + V * 1.3 + T * 2.1) : 0, Y = i ? 0.9 * Math.sin(k * ut / 6100 + V + T) : 0;
      Z.clouds.push({ x: St - 23 * ot + wt, y: U - 15.33 * ot + Y, w: 46 * ot, h: 30.66 * ot, fill: tt, o: et * (dt > 1 && T === 0 ? 0.85 : 1) });
    }
  }), g.forEach((Q, V) => {
    const W = Ld(p * 313 + V * 29 + 11), dt = (V + 0.5) * w, st = Q.cond === "pouring" ? 16 : Q.cond === "rainy" || Q.cond === "hail" ? 9 : Q.cond === "lightning-rainy" ? 12 : Q.cond === "snowy-rainy" ? 5 : 0;
    for (let tt = 0; tt < st; tt++) {
      let et = dt + (W() - 0.5) * w * 1.05, T = 44 + W() * 36, ot = 1;
      if (i) {
        const U = ((T - 44 + ut * 0.04) % 36 + 36) % 36;
        et -= 0.21 * (U - (T - 44)), T = 44 + U, ot = Math.min(1, U / 6, (36 - U) / 6);
      }
      T *= B;
      const St = x(Q.night, et, T) * ot;
      St >= 0.05 && Z.drops.push({ x: et, y: T, o: St });
    }
    const gt = Q.cond === "snowy" ? 11 : Q.cond === "snowy-rainy" ? 6 : 0;
    for (let tt = 0; tt < gt; tt++) {
      let et = dt + (W() - 0.5) * w * 1.05, T = 40 + W() * 44, ot = 1;
      if (i) {
        const U = ((T - 40 + ut * 9e-3) % 44 + 44) % 44;
        T = 40 + U, et += 1.6 * Math.sin(k * ut / 2800 + tt * 1.9 + V), ot = Math.min(1, U / 6, (44 - U) / 6);
      }
      T *= B;
      const St = x(Q.night, et, T) * ot;
      St >= 0.05 && Z.flakes.push({ x: et, y: T, o: St });
    }
    if (Q.k === "fog") {
      const tt = Q.night ? "#c8ccd6" : "#ffffff", et = Q.night ? 0.28 : 0.62, T = i ? 4 * Math.sin(k * ut / 8e3 + V) : 0;
      for (let ot = 0; ot < 4; ot++) Z.fogs.push({ x: dt - w * 0.75 + ot % 2 * w * 0.18 + (ot % 2 ? T : -T), y: (30 + ot * 13) * B, w: w * 1.3, c: tt, a: et });
    }
    if (Q.k === "storm") {
      const tt = (ut / 3400 + V * 0.37) % 1;
      Z.bolts.push({ x: dt + (W() - 0.5) * w * 0.3 - 5, y: 36 * B, o: i && !(tt < 0.05 || tt > 0.09 && tt < 0.12) ? 0.8 : 1 });
    }
  }), Z;
}
function _u(n, d, i, p, g, w, x, E) {
  const { S: k, C: B, cw: yt, yb: ut, glowAt: Z, soft: $, tw: rt, sy: Q } = n, V = new Array(i * p), W = new Uint8Array(i * p), dt = new Uint8Array(i * p), st = (M, _, L, P, ht) => {
    L == null || M < 0 || _ < 0 || M >= i || _ >= p || (P >= 1 || P > si(M + 5, _ + 3)) && (V[_ * i + M] = L, W[_ * i + M] = ht);
  }, gt = (M, _, L, P) => {
    for (let ht = Math.max(0, Math.floor(_ - L) - 1); ht <= Math.min(p - 1, _ + L + 1); ht++) for (let ft = Math.max(0, Math.floor(M - L) - 1); ft <= Math.min(i - 1, M + L + 1); ft++) P(ft, ht, ft + 0.5 - M, ht + 0.5 - _);
  }, tt = (M, _, L) => {
    for (let ht = 0; ht < M.length - 1; ht++) {
      const ft = (ht + _) * yt;
      if (L < ft - rt / 2) return [M[ht], M[ht], 0];
      if (L <= ft + rt / 2) return [M[ht], M[ht + 1], (L - ft + rt / 2) / rt];
    }
    const P = M[M.length - 1];
    return [P, P, 0];
  }, et = k.filter((M) => !M.night).map((M) => M.sky), T = k.filter((M) => M.night).map((M) => M.sky), ot = $ / w, St = 16 * Q / w;
  for (let M = 0; M < i; M++) {
    const _ = (M + 0.5) * g, L = ut(_) / w, P = tt(et, 0.75, _), ht = tt(T, 1.25, _), ft = Z(_);
    for (let j = 0; j < p; j++) {
      const vt = si(M, j), Mt = j + 0.5 - L, Qt = (ot > 0.01 ? li(0.5 + Mt / ot) : Mt > 0 ? 1 : 0) > vt;
      let se = Qt ? P[2] > vt ? P[1] : P[0] : ht[2] > vt ? ht[1] : ht[0];
      (Qt ? li(((j + 0.5) / p - 0.45) / 0.55) * 0.7 : li(1 - (j + 0.5) / (p * 0.55)) * 0.7) > si(M + 2, j + 5) && (se = Qt ? On(se, "#ffffff", 0.18) : On(se, "#000000", 0.25)), Qt && Mt >= 0 && Mt < St && ft.a * 1.3 * (1 - Mt / St) > si(M + 6, j + 1) && (se = ft.c), V[j * i + M] = se, dt[j * i + M] = Qt ? 0 : 1;
    }
  }
  const U = On(B.sun, "#ffffff", 0.55), wt = On(B.moon, "#ffffff", 0.6);
  d.stars.forEach((M) => {
    const _ = Math.floor(M.x / g), L = Math.floor(M.y / w);
    if (_ < 0 || L < 0 || _ >= i || L >= p || !dt[L * i + _] || M.o < 0.15) return;
    const P = M.o > 0.45 ? B.star : On(B.star, V[L * i + _], 0.5), ht = M.big && M.o > 0.6 ? Math.floor(M.size / g) : 0;
    st(_, L, P, 1, Xd);
    for (let ft = 1; ft <= ht; ft++) [[_ - ft, L], [_ + ft, L], [_, L - ft], [_, L + ft]].forEach((j) => {
      j[0] >= 0 && j[1] >= 0 && j[0] < i && j[1] < p && dt[j[1] * i + j[0]] && st(j[0], j[1], P, 1, Xd);
    });
  }), d.suns.forEach((M) => {
    const _ = Math.max(1.5, M.rad / g), L = M.x / g, P = M.y / w, ht = M.halo / g * 0.85;
    if (gt(L, P, ht, (ft, j, vt, Mt) => {
      const Qt = Math.sqrt(vt * vt + Mt * Mt);
      Qt > _ && Qt < ht && !dt[j * i + ft] && st(ft, j, U, 0.3 * (1 - (Qt - _) / (ht - _)), 0);
    }), E) {
      const ft = Math.floor(x / 500) % 2, j = Math.max(1, _ * 0.3);
      for (let vt = 0; vt < 8; vt++) if (vt % 2 === ft) for (let Mt = _ + 1.2; Mt < _ + 1.2 + j; Mt += 0.7) st(Math.floor(L + Math.cos(vt * Math.PI / 4) * Mt), Math.floor(P + Math.sin(vt * Math.PI / 4) * Mt), B.sun, 1, xp);
    }
    gt(L, P, _, (ft, j, vt, Mt) => {
      vt * vt + Mt * Mt <= _ * _ && st(ft, j, li(((Mt / _ + 1) / 2 - 0.6) / 0.4) > si(ft, j) ? B.sunEdge : B.sun, 1, gp);
    });
  }), d.moons.forEach((M) => {
    const _ = Math.max(1.5, M.d * 0.37 / g), L = M.x / g, P = M.y / w, ht = L + 0.547 * _, ft = P - 0.503 * _, j = 0.82 * _;
    gt(L, P, _, (vt, Mt, Qt, se) => {
      if (Qt * Qt + se * se > _ * _) return;
      const ta = vt + 0.5 - ht, Se = Mt + 0.5 - ft;
      ta * ta + Se * Se > j * j && st(vt, Mt, li((se + _) / (2 * _) * 1.1 - 0.1) > si(vt, Mt) ? B.moon : wt, 1, vp);
    });
  }), d.clouds.forEach((M) => {
    const _ = Math.max(3, M.w / g), L = _ * 0.6665, P = M.x / g, ht = M.y / w, ft = On(M.fill, "#000000", 0.16);
    for (let j = Math.max(0, Math.floor(ht) - 1); j <= Math.min(p - 1, ht + L + 1); j++) for (let vt = Math.max(0, Math.floor(P) - 1); vt <= Math.min(i - 1, P + _ + 1); vt++) {
      const Mt = (vt + 0.5 - P) / _, Qt = (j + 0.5 - ht) / _;
      xc(Mt, Qt) && st(vt, j, !xc(Mt, Qt + 1 / _) || li((Qt - 0.42) / 0.25) * 0.8 > si(vt, j) ? ft : M.fill, M.o, bp);
    }
  }), d.fogs.forEach((M) => {
    const _ = Math.floor(M.y / w), L = Math.max(_, Math.floor((M.y + 6 * Q) / w) - 1), P = Math.floor(M.x / g), ht = Math.floor((M.x + M.w) / g);
    for (let ft = _; ft <= L; ft++) for (let j = P; j <= ht; j++) {
      const vt = (j - P) / Math.max(1, ht - P);
      st(j, ft, M.c, M.a * (vt < 0.25 ? vt / 0.25 : vt > 0.75 ? (1 - vt) / 0.25 : 1), 0);
    }
  });
  const Y = Math.max(2, Math.round(9 / w));
  d.drops.forEach((M) => {
    const _ = M.x / g, L = Math.floor(M.y / w);
    for (let P = 0; P < Y; P++) st(Math.floor(_ - 0.208 * P * w / g), L + P, B.rain, M.o, wp);
  });
  const zt = Math.max(0, Math.round(4.4 / g / 2.6));
  return d.flakes.forEach((M) => {
    const _ = Math.floor(M.x / g), L = Math.floor(M.y / w);
    st(_, L, B.snow, M.o, ks);
    for (let P = 1; P <= zt; P++)
      st(_ - P, L, B.snow, M.o, ks), st(_ + P, L, B.snow, M.o, ks), st(_, L - P, B.snow, M.o, ks), st(_, L + P, B.snow, M.o, ks);
  }), d.bolts.forEach((M) => {
    if (g <= 3.5)
      for (let _ = Math.floor(M.y / w); _ <= (M.y + 24) / w; _++) for (let L = Math.floor(M.x / g); L <= (M.x + 11) / g; L++)
        xu(Lu, (L + 0.5) * g - M.x, (_ + 0.5) * w - M.y) && st(L, _, B.sun, 1, rd);
    else {
      const _ = Math.round(M.x / g), L = Math.round(M.y / w);
      Eu.forEach((P, ht) => P.split("").forEach((ft, j) => {
        ft === "#" && st(_ + j, L + ht, B.sun, 1, rd);
      }));
    }
  }), { col: V, ids: W };
}
function Du(n, d) {
  const i = d.px, p = Math.max(6, Math.round(d.width / i)), g = Math.max(6, Math.round(d.height / i)), w = d.width / p, x = d.height / g, E = d.ambient ? Math.floor((d.clock || 0) / 100) * 100 : 0, k = ($) => {
    const rt = yp($, d);
    return _u(rt, kp(rt, { clock: E, ambient: d.ambient, seed: d.seed }), p, g, w, x, E, d.ambient);
  }, B = k(n), yt = d.reveal == null ? 1 : li(d.reveal);
  let ut = B.col, Z = B.ids;
  if (yt < 1) {
    const $ = d.prev ? k(d.prev) : null, rt = yt * (p + 12);
    ut = new Array(p * g), Z = new Uint8Array(p * g);
    for (let Q = 0; Q < p * g; Q++) {
      const V = Q % p, W = Q / p | 0;
      (d.reduce ? yt : li((rt - V) / 12)) > si(V, W) ? (ut[Q] = B.col[Q], Z[Q] = B.ids[Q]) : $ ? (ut[Q] = $.col[Q], Z[Q] = $.ids[Q]) : (ut[Q] = null, Z[Q] = 255);
    }
  }
  return yu(ut, Z, p, g, { oneBit: d.oneBit, ink: d.ink || "#26221e", paper: d.paper || "#fbf9f6", snowInk: !1 });
}
function Bu(n, d, i) {
  const p = i.width, g = i.height, w = i.reveal == null ? 1 : li(i.reveal), x = (Z, $) => {
    const rt = yp($, i);
    Ru(Z, rt, kp(rt, i));
  };
  if (n.clearRect(0, 0, p, g), w >= 1) {
    x(n, d);
    return;
  }
  if (i.prev && x(n, i.prev), i.reduce) {
    n.save(), n.globalAlpha = w, x(n, d), n.restore();
    return;
  }
  const E = n.canvas, k = E.__wxOff || (E.__wxOff = document.createElement("canvas"));
  (k.width !== E.width || k.height !== E.height) && (k.width = E.width, k.height = E.height);
  const B = k.getContext("2d");
  B.setTransform(n.getTransform()), B.clearRect(0, 0, p, g), x(B, d);
  const yt = w * (p + 64) - 64, ut = B.createLinearGradient(yt, 0, yt + 64, 0);
  ut.addColorStop(0, "rgba(0,0,0,1)"), ut.addColorStop(1, "rgba(0,0,0,0)"), B.globalCompositeOperation = "destination-in", B.fillStyle = ut, B.fillRect(0, 0, p, g), B.globalCompositeOperation = "source-over", n.save(), n.setTransform(1, 0, 0, 1, 0, 0), n.drawImage(k, 0, 0), n.restore();
}
function Ru(n, d, i) {
  const { W: p, H: g, S: w, C: x, cw: E, yb: k, glowAt: B, soft: yt, tw: ut, sy: Z } = d, $ = n.getTransform().a || 1, rt = (Y) => {
    n.shadowColor = Y ? "rgba(28,18,8,.22)" : "transparent", n.shadowBlur = Y ? 4 * $ : 0, n.shadowOffsetY = Y ? 1.5 * $ : 0;
  }, Q = (Y, zt) => {
    const M = nd(Y);
    return "rgba(" + M[0] + "," + M[1] + "," + M[2] + "," + Math.max(0, Math.min(1, zt)).toFixed(3) + ")";
  }, V = (Y, zt) => {
    const M = n.createLinearGradient(0, 0, p, 0);
    M.addColorStop(0, Y[0]);
    for (let _ = 0; _ < Y.length - 1; _++) {
      const L = (_ + zt) * E, P = (L - ut / 2) / p, ht = (L + ut / 2) / p;
      P > 0 && P < 1 && M.addColorStop(P, Y[_]), ht > 0 && ht < 1 && M.addColorStop(ht, Y[_ + 1]);
    }
    return M.addColorStop(1, Y[Y.length - 1]), M;
  }, W = Math.max(24, Math.ceil(p / 4)), dt = (Y, zt) => {
    n.beginPath();
    for (let M = 0; M <= W; M++) {
      const _ = p * M / W, L = Y == null ? 0 : k(_) + Y;
      M ? n.lineTo(_, L) : n.moveTo(_, L);
    }
    for (let M = W; M >= 0; M--) {
      const _ = p * M / W;
      n.lineTo(_, k(_) + zt);
    }
    n.closePath(), n.fill();
  };
  n.save(), n.fillStyle = V(w.filter((Y) => !Y.night).map((Y) => Y.sky), 0.75), n.fillRect(0, 0, p, g);
  const st = n.createLinearGradient(0, 0, p, 0);
  for (let Y = 0; Y <= 64; Y++) {
    const zt = B(p * Y / 64);
    st.addColorStop(Y / 64, Q(zt.c, Math.min(1, zt.a)));
  }
  n.fillStyle = st;
  for (let Y = 0; Y < 8; Y++)
    n.globalAlpha = 1 - Y / 8, dt(Y * 2 * Z, (Y + 1) * 2 * Z);
  n.fillStyle = V(w.filter((Y) => Y.night).map((Y) => Y.sky), 1.25);
  const gt = Math.max(0.5, yt), tt = 6;
  n.globalAlpha = 1, dt(null, -gt);
  for (let Y = 0; Y < tt; Y++)
    n.globalAlpha = 1 - (Y + 0.5) / tt, dt(-gt + 2 * gt * Y / tt, -gt + 2 * gt * (Y + 1) / tt);
  n.globalAlpha = 1;
  const et = new Path2D(Tu), T = new Path2D(Cu), ot = new Path2D(Su), St = new Path2D(Au);
  n.fillStyle = x.star, i.stars.forEach((Y) => {
    n.globalAlpha = Y.o, Y.big ? (n.save(), n.translate(Y.x, Y.y), n.scale(Y.size, Y.size), n.fill(et), n.restore()) : (n.beginPath(), n.arc(Y.x, Y.y, 0.8, 0, Math.PI * 2), n.fill());
  }), n.globalAlpha = 1;
  const U = On(x.sun, "#ffffff", 0.55);
  i.suns.forEach((Y) => {
    const zt = n.createRadialGradient(Y.x, Y.y, 0, Y.x, Y.y, Y.halo);
    zt.addColorStop(0, Q(U, 0.42)), zt.addColorStop(0.7, Q(U, 0)), n.fillStyle = zt, n.beginPath(), n.arc(Y.x, Y.y, Y.halo, 0, Math.PI * 2), n.fill();
    const M = n.createLinearGradient(0, Y.y - Y.rad, 0, Y.y + Y.rad);
    M.addColorStop(0.6, x.sun), M.addColorStop(1, x.sunEdge), n.fillStyle = M, rt(!0), n.beginPath(), n.arc(Y.x, Y.y, Y.rad, 0, Math.PI * 2), n.fill(), rt(!1);
  });
  const wt = On(x.moon, "#ffffff", 0.6);
  i.moons.forEach((Y) => {
    n.save(), n.translate(Y.x - Y.d / 2, Y.y - Y.d / 2), n.scale(Y.d / 46, Y.d / 46);
    const zt = n.createLinearGradient(0, 6, 0, 40);
    zt.addColorStop(0, wt), zt.addColorStop(1, x.moon), n.fillStyle = zt, rt(!0), n.fill(T), rt(!1), n.restore();
  }), i.clouds.forEach((Y) => {
    n.save(), n.globalAlpha = Y.o, n.translate(Y.x, Y.y), n.scale(Y.w / 46, Y.h / 30.66), n.translate(-4, -9.67), n.fillStyle = Y.fill, rt(!0), n.fill(ot), rt(!1), n.restore();
  }), i.fogs.forEach((Y) => {
    const zt = n.createLinearGradient(Y.x, 0, Y.x + Y.w, 0);
    zt.addColorStop(0, Q(Y.c, 0)), zt.addColorStop(0.25, Q(Y.c, Y.a)), zt.addColorStop(0.75, Q(Y.c, Y.a)), zt.addColorStop(1, Q(Y.c, 0)), n.fillStyle = zt, n.fillRect(Y.x, Y.y, Y.w, 6 * Z);
  }), n.fillStyle = x.rain, i.drops.forEach((Y) => {
    n.save(), n.globalAlpha = Y.o, n.translate(Y.x, Y.y), n.rotate(12 * Math.PI / 180), n.fillRect(-1.5, 0, 3, 9), n.restore();
  }), n.fillStyle = x.snow, i.flakes.forEach((Y) => {
    n.globalAlpha = Y.o, n.beginPath(), n.arc(Y.x, Y.y, 2.2, 0, Math.PI * 2), n.fill();
  }), n.fillStyle = x.sun, i.bolts.forEach((Y) => {
    n.save(), n.globalAlpha = Y.o, n.translate(Y.x, Y.y), n.fill(St), n.restore();
  }), n.restore();
}
const Nu = (n) => n === "sunny" ? "clear" : n === "clear-night" ? "night" : n === "partlycloudy" ? "partly" : ["rainy", "pouring", "lightning", "lightning-rainy", "hail"].includes(n) ? "rain" : ["snowy", "snowy-rainy"].includes(n) ? "snow" : "cloudy", xs = { s: "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", sp: "M41.025 27.045C40.5181 24.4943 39.142 22.1985 37.1315 20.5491C35.121 18.8996 32.6005 17.9987 30 18C25.665 18 21.9 20.46 20.025 24.045C17.8191 24.2867 15.7801 25.3344 14.2991 26.987C12.8181 28.6396 11.9994 30.7809 12 33C12 35.3869 12.9482 37.6761 14.636 39.364C16.3239 41.0518 18.6131 42 21 42H40.5C41.4849 42 42.4602 41.806 43.3701 41.4291C44.2801 41.0522 45.1069 40.4997 45.8033 39.8033C46.4997 39.1069 47.0522 38.2801 47.4291 37.3701C47.806 36.4602 48 35.4849 48 34.5C48 30.54 44.925 27.33 41.025 27.045Z", lp: "M70.8016 48.008C69.9751 43.8493 67.7316 40.1062 64.4536 37.4168C61.1755 34.7275 57.0661 33.2587 52.8261 33.2607C45.7581 33.2607 39.6196 37.2716 36.5625 43.1167C32.9659 43.5108 29.6414 45.219 27.2267 47.9135C24.8121 50.608 23.4772 54.0991 23.4783 57.7173C23.4783 61.609 25.0243 65.3414 27.7761 68.0933C30.528 70.8452 34.2604 72.3912 38.1522 72.3912H69.9456C71.5515 72.3912 73.1416 72.0749 74.6252 71.4604C76.1088 70.8458 77.4568 69.9451 78.5923 68.8096C79.7278 67.6741 80.6286 66.3261 81.2431 64.8425C81.8576 63.3589 82.1739 61.7688 82.1739 60.1629C82.1739 53.7064 77.1603 48.4727 70.8016 48.008Z", lc: "M65.3723 37.5398C64.4356 32.8266 61.8929 28.5843 58.1778 25.5364C54.4627 22.4885 49.8054 20.8238 45 20.8262C36.9897 20.8262 30.0326 25.3718 26.5679 31.9963C22.4918 32.4429 18.724 34.3788 15.9874 37.4326C13.2508 40.4864 11.738 44.443 11.7391 48.5436C11.7391 52.9542 13.4913 57.1842 16.6101 60.3031C19.7289 63.4219 23.9589 65.174 28.3696 65.174H64.4022C66.2221 65.174 68.0243 64.8155 69.7057 64.1191C71.3871 63.4226 72.9149 62.4018 74.2018 61.1149C75.4887 59.828 76.5095 58.3002 77.2059 56.6188C77.9024 54.9374 78.2609 53.1353 78.2609 51.3153C78.2609 43.9979 72.5788 38.0664 65.3723 37.5398Z", lr: "M62.9755 28.4431C62.149 24.2844 59.9055 20.5412 56.6275 17.8519C53.3494 15.1626 49.24 13.6937 45 13.6958C37.9321 13.6958 31.7935 17.7067 28.7364 23.5518C25.1398 23.9459 21.8153 25.654 19.4006 28.3485C16.986 31.043 15.6511 34.5342 15.6522 38.1523C15.6522 42.0441 17.1982 45.7765 19.9501 48.5284C22.7019 51.2802 26.4343 52.8262 30.3261 52.8262H62.1196C63.7254 52.8262 65.3155 52.5099 66.7991 51.8954C68.2827 51.2809 69.6307 50.3802 70.7662 49.2447C71.9017 48.1092 72.8025 46.7611 73.417 45.2775C74.0315 43.7939 74.3478 42.2038 74.3478 40.598C74.3478 34.1415 69.3342 28.9078 62.9755 28.4431Z" }, Yl = {
  s: ["M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", 6.11, 40],
  l: ["M41.1747 11.959C37.7298 16.5251 35.6875 22.2086 35.6874 28.3691C35.6874 43.4321 47.8979 55.6435 62.9608 55.6436C68.3701 55.6436 73.411 54.0676 77.6512 51.3516C74.6865 66.6826 61.197 78.2607 44.9999 78.2607C26.6305 78.2607 11.7391 63.3694 11.7391 45C11.7392 27.9244 24.6071 13.8562 41.1747 11.959Z", 11.96, 78.26],
  sp: ["M16.6201 5.0791C15.3771 6.72655 14.6397 8.7772 14.6396 11C14.6396 16.4345 19.046 20.8398 24.4805 20.8398C26.4326 20.8398 28.2502 20.2686 29.7803 19.2881C28.7119 24.821 23.8449 29 18 29C11.3726 29 6 23.6274 6 17C6 10.8393 10.6426 5.76349 16.6201 5.0791Z", 5.08, 29],
  lp: ["M32.5175 9.93848C30.0859 13.1616 28.6435 17.1729 28.6434 21.5215C28.6434 32.1541 37.2628 40.7733 47.8954 40.7734C51.7136 40.7734 55.2724 39.6622 58.2655 37.7451C56.1724 48.5666 46.6506 56.7391 35.2177 56.7393C22.251 56.7393 11.7391 46.2274 11.7391 33.2607C11.7393 21.2073 20.8226 11.2776 32.5175 9.93848Z", 9.94, 56.74]
}, Ed = (n, d) => '<path class="' + d + '" d="' + n + '"/>', Pu = (n, d) => ' style="animation-delay:-' + Math.round(n * 137 % d) + 'ms"', Fn = (n, d, i, p) => {
  const g = i * 0.2687;
  return '<path class="wbTwinkle" fill="#fff"' + (p < 1 ? ' opacity="' + p + '"' : "") + Pu(n, 2400) + ' d="M' + n + " " + (d - i) + "L" + (n + g) + " " + (d - g) + "L" + (n + i) + " " + d + "L" + (n + g) + " " + (d + g) + "L" + n + " " + (d + i) + "L" + (n - g) + " " + (d + g) + "L" + (n - i) + " " + d + "L" + (n - g) + " " + (d - g) + 'Z"/>';
}, yc = ([n, d, i], p) => '<path class="wbMoonPath" d="' + n + '" fill="url(#' + p + ')"/><defs><linearGradient id="' + p + '" x1="0" y1="' + d + '" x2="0" y2="' + i + '" gradientUnits="userSpaceOnUse"><stop stop-color="#FFF4C7"/><stop offset="1" stop-color="#F2C95E"/></linearGradient></defs>', Iu = (n, d) => d ? '<circle class="wbSunDisc" cx="45" cy="45" r="33.26" fill="url(#' + n + ')"/><defs><linearGradient id="' + n + '" x1="12" y1="8.5" x2="67" y2="73.5" gradientUnits="userSpaceOnUse"><stop offset=".653" stop-color="#FFE100"/><stop offset="1" stop-color="#F2C159"/></linearGradient></defs>' : '<circle class="wbSunDisc" cx="23" cy="23" r="17" fill="url(#' + n + ')"/><defs><linearGradient id="' + n + '" x1="23" y1="6" x2="23" y2="40" gradientUnits="userSpaceOnUse"><stop offset=".606" stop-color="#FFE100"/><stop offset="1" stop-color="#FFAA00"/></linearGradient></defs>', Hu = (n) => (n ? ["29.35", "43.04", "56.74"].map((d, i) => '<g class="wbDrop" style="animation-delay:-' + i * 317 + 'ms"><rect class="wbAccent" x="' + d + '" y="60.65" width="5.87" height="15.65" rx="2.93" transform="rotate(12 ' + d + ' 60.65)"/></g>') : [19, 26, 33].map((d, i) => '<g class="wbDrop" style="animation-delay:-' + i * 317 + 'ms"><rect class="wbAccent" width="3.03" height="9.41" rx="1.51" transform="matrix(0.9698 0.244 -0.1768 0.9843 ' + d + ' 38)"/></g>')).join(""), Fu = (n) => (n ? [[33.67, 67.67], [47.67, 64.67], [61.67, 67.67], [40.67, 77.67], [54.67, 77.67]] : [[21.2, 42.2], [29.2, 40.2], [37.2, 42.2], [25.2, 48.2], [33.2, 48.2]]).map(([d, i], p) => '<circle class="wbFlake" style="animation-delay:-' + p * 640 + 'ms" cx="' + d + '" cy="' + i + '" r="' + (n ? 3.67 : 2.2) + '" fill="#fff"/>').join("");
function Ou(n, d, i, p) {
  const g = (w) => '<g filter="url(#' + p + '-sh)">' + w + "</g>";
  return n === "clear" ? d ? g(yc(i ? Yl.l : Yl.s, p)) + (i ? Fn(70, 20, 5.83, 1) + Fn(78.33, 41.67, 3.75, 0.8) + Fn(60, 71.67, 3.33, 0.6) : Fn(42, 12, 3.5, 1) + Fn(47, 25, 2.25, 0.8) + Fn(36, 43, 2, 0.6)) : g(Iu(p, i)) : n === "partly" ? g(d ? yc(i ? Yl.lp : Yl.sp, p) : i ? '<circle class="wbSunDisc" cx="35.22" cy="33.26" r="23.48" fill="#FFE100"/>' : '<circle class="wbSunDisc" cx="18" cy="17" r="12" fill="#FFE100"/>') + g(Ed(i ? xs.lp : xs.sp, d ? "wbCloudLight" : "wbBright")) + (d ? i ? Fn(73.33, 16.67, 4.17, 0.9) : Fn(44, 10, 2.5, 0.9) : "") : n === "cloudy" ? g(Ed(i ? xs.lc : xs.s, d ? "wbCloudLight" : "wbBright")) + (d ? i ? Fn(15, 15, 3.75, 0.8) + Fn(76.67, 13.33, 2.92, 0.6) : Fn(9, 9, 2.25, 0.8) + Fn(46, 8, 1.75, 0.6) : "") : g(Ed(i ? xs.lr : xs.s, "wbCloudLight")) + (n === "rain" ? Hu(i) : Fu(i));
}
const Wu = (n, d) => '<defs><filter id="' + n + '-sh" x="-25%" y="-25%" width="150%" height="160%"><feDropShadow dx="0" dy="' + (d ? 1.6 : 1) + '" stdDeviation="' + (d ? 1.8 : 1.1) + '" flood-color="#1c1208" flood-opacity=".22"/></filter></defs>';
function qu(n, d, i, p) {
  let g = Nu(n);
  const w = g === "night" || !!i;
  g === "night" && (g = "clear");
  const x = d ? 90 : 54;
  return { k: g, night: w, svg: '<svg viewBox="0 0 ' + x + " " + x + '">' + Wu(p, d) + Ou(g, w, d, p) + "</svg>" };
}
const ju = [
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
], Zl = (n, d) => (ju[d % 8 * 8 + n % 8] + 0.5) / 64, lo = (n) => [parseInt(n.slice(1, 3), 16), parseInt(n.slice(3, 5), 16), parseInt(n.slice(5, 7), 16)], $a = (n, d, i) => [Math.round(n[0] + (d[0] - n[0]) * i), Math.round(n[1] + (d[1] - n[1]) * i), Math.round(n[2] + (d[2] - n[2]) * i)], rl = (n) => n < 0 ? 0 : n > 1 ? 1 : n, kc = (n, d) => {
  let i = n * 374761393 + d * 668265263 ^ 1540483477;
  return i = Math.imul(i ^ i >>> 13, 1274126177), ((i ^ i >>> 16) >>> 0) / 4294967296;
}, Ir = [255, 255, 255], cn = lo("#26221e"), Mc = lo("#0288d1"), zu = lo("#01579b"), _d = lo(hn.cloudDay), Dd = lo(hn.cloudNight), Kl = lo(hn.dusk), Bd = lo(hn.sunEdge), Vu = lo(hn.sun), Gu = 10, Sc = 0.3, di = 56, Mp = 21;
function Uu(n) {
  const d = Array.from({ length: Mp }, () => new Array(di).fill(void 0)), i = (x, E, k) => {
    d[E][x] = k;
  }, p = $a(Kl, cn, 0.35), g = $a(cn, Ir, 0.22);
  for (let x = 0; x <= 6; x++) {
    const E = x < 2 ? di - 2 : di - 1;
    for (let k = 6 - x; k <= E; k++) i(k, x, x < 2 ? p : x === 6 ? g : cn);
  }
  const w = [Kl, Bd, Dd, lo(hn.skyRainDay), $a(Kl, cn, 0.2), $a(n, cn, 0.35)];
  [2, 3, 2, 3, 3].forEach((x, E) => {
    const k = 9 + E * 6;
    for (let B = 0; B < x; B++) {
      const yt = w[(E * 2 + B * 3) % w.length];
      for (let ut = k; ut < k + 5; ut++)
        i(ut, 7 + B * 2, $a(yt, cn, 0.12)), i(ut, 8 + B * 2, B === x - 1 ? $a(yt, Ir, 0.3) : yt);
      i(k + 5, 7 + B * 2, cn), i(k + 5, 8 + B * 2, cn);
    }
  });
  for (let x = 7; x <= 12; x++) i(5, x, cn);
  i(5, 13, Bd);
  for (let x = 7; x <= 14; x++) for (let E = 42; E <= 51; E++) i(E, x, E === 51 ? Dd : _d);
  for (let x = 43; x <= 50; x += 2)
    i(x, 12, cn), i(x, 9, $a(cn, _d, 0.4));
  for (let x = 40; x <= 53; x++) i(x, 14, x === 40 || x === 53 ? Dd : _d);
  for (let x = 15; x <= 18; x++) for (let E = 46; E <= 49; E++) i(E, x, x === 18 ? cn : x === 16 ? Bd : Kl);
  for (let x = 15; x <= 19; x++) i(44, x, cn);
  return i(44, 20, Vu), d;
}
function Yu(n, d, i, p) {
  const g = Math.max(1, Math.round(n)), w = Math.max(1, Math.round(d)), x = new Uint8ClampedArray(g * w * 4), E = lo(p.skyClearDay), k = lo(p.skyFogDay), B = Uu(E), yt = Math.round(w * 0.55), ut = rl(1 - Math.log(i / Sc) / Math.log(Gu / Sc)), Z = $a(E, k, ut), $ = (W) => rl((W - 0.1) / 0.9), rt = rl((1 - Math.exp(-2 / i) - 0.2) / 0.8), Q = Math.round(g / 2 - di / 2), V = yt + 3;
  for (let W = 0; W < w; W++) {
    const dt = V - 1 - W, st = W - V;
    for (let gt = 0; gt < g; gt++) {
      const tt = gt - Q;
      let et, T;
      const ot = dt >= 0 && dt < Mp && tt >= 0 && tt < di ? B[dt][tt] : void 0;
      if (ot)
        et = ot, T = rt;
      else if (dt >= 0 && dt <= 1 && tt >= 4 - dt && tt <= 5 - dt)
        et = $a(Ir, Mc, 0.15), T = rt;
      else if (W < yt) {
        const wt = rl(((W + 0.5) / yt - 0.15) / 0.85) * 3, Y = Math.min(3, Math.floor(wt + Zl(gt + 2, W + 5)));
        et = $a(Z, Ir, Y * 0.1), T = ut * 0.95;
      } else {
        const wt = (W - yt + 0.5) / (w - yt), Y = Math.min(1.5, 6e-3 / (wt * wt)), zt = rl(wt * 1.4) * 3, M = Math.min(3, Math.floor(zt + Zl(gt + 1, W + 6)));
        et = $a(Mc, zu, M / 3);
        const _ = 1 + Math.round(wt * 7), L = Math.floor(gt / (_ * 3)), P = 0.06 + 0.16 * wt, ht = gt % (_ * 3) < _;
        ht && kc(L, W) < P ? et = $a(et, Ir, 0.18 + 0.1 * (1 - wt)) : ht && wt > 0.5 && kc(L, W - 1) < P && (et = $a(et, cn, 0.12)), T = $(1 - Math.exp(-Y / i)), st === 0 && tt >= 3 && tt <= 8 ? (et = $a(et, Ir, tt < 6 ? 0.8 : 0.45), T = rt) : st >= 0 && st <= 2 && tt >= di && tt < di + 40 ? ((1 - (tt - di) / 40) * (st === 1 ? 0.9 : 0.5) > Zl(gt, W + 3) && (et = $a(et, Ir, 0.5)), T = rt) : st === 0 && tt >= 6 && tt < di && (et = $a(et, cn, tt % 2 === 0 ? 0.35 : 0.2), T = rt);
      }
      const St = T > Zl(gt, W) ? k : et, U = (W * g + gt) * 4;
      x[U] = St[0], x[U + 1] = St[1], x[U + 2] = St[2], x[U + 3] = 255;
    }
  }
  return { data: x, w: g, h: w };
}
const Zu = {
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
}, Ku = 1.6;
function $u(n, d) {
  const i = n ? Zu[String(n).toUpperCase()] : void 0;
  if (!i || !(d > 0)) return;
  const p = (w) => Math.abs(Math.log(w[2] / d)), g = i.reduce((w, x) => p(x) < p(w) ? x : w);
  return p(g) <= Math.log(Ku) ? { from: g[0], to: g[1], km: g[2] } : void 0;
}
const Xu = (n, d) => d === "mi" ? n * 1.609344 : d === "m" ? n / 1e3 : d === "ft" ? n * 3048e-7 : d === "yd" ? n * 9144e-7 : n, Ju = (n) => n < 1 ? "very_poor" : n < 4 ? "poor" : n < 10 ? "moderate" : n < 20 ? "good" : n < 40 ? "very_good" : "excellent", Dn = 6e4, He = 36e5, Po = 864e5, dl = 1440, Qu = 6, tf = 10 * Dn, Cc = 3, ef = 3, $l = { day: [6, 22], waking: [7, 23], all: [0, 24] }, af = [[-5, [91, 141, 239]], [5, [79, 195, 230]], [12, [95, 211, 160]], [18, [255, 211, 77]], [24, [255, 159, 67]], [30, [255, 91, 79]]], nf = "M6.5 18.5h11a4 4 0 0 0 .4-7.98 5.5 5.5 0 0 0-10.6-1.1A4.5 4.5 0 0 0 6.5 18.5Z", Tc = (n, d, i, p) => '<circle cx="' + n + '" cy="' + d + '" r="' + i + '"/><path d="' + [0, 45, 90, 135, 180, 225, 270, 315].map((g) => {
  const w = Math.cos(g * Math.PI / 180), x = Math.sin(g * Math.PI / 180), E = i + 2, k = i + 2 + p;
  return "M" + (n + w * E).toFixed(2) + " " + (d + x * E).toFixed(2) + "L" + (n + w * k).toFixed(2) + " " + (d + x * k).toFixed(2);
}).join("") + '"/>', ii = (n) => '<path d="' + nf + '"' + (n ? ' transform="' + n + '"' : "") + "/>", ri = (n) => '<path d="' + n + '"/>', Ac = '<path d="M19.5 14.5A7.5 7.5 0 1 1 9.5 4.5a6 6 0 0 0 10 10Z"/>';
function of(n, d) {
  const i = "translate(0,-3)";
  switch (n) {
    case "sunny":
      return d ? Ac : Tc(12, 12, 4, 2.5);
    case "clear-night":
      return Ac;
    case "partlycloudy":
      return (d ? '<path d="M11.5 9.5A4.5 4.5 0 1 1 6 4a3.6 3.6 0 0 0 5.5 5.5Z"/>' : Tc(7.5, 7.5, 2.6, 1.4)) + ii("translate(3.6,3) scale(.85)");
    case "cloudy":
      return ii();
    case "fog":
      return ri("M4 8.5h16M3 12.5h18M5 16.5h14");
    case "rainy":
      return ii(i) + ri("M8.5 18.5 7.5 21M12.5 18.5l-1 2.5M16.5 18.5l-1 2.5");
    case "pouring":
      return ii(i) + ri("M7.5 18.5 6 22M11 18.5 9.5 22M14.5 18.5 13 22M18 18.5 16.5 22");
    case "snowy":
      return ii(i) + ri("M8 20h.01M12 21.5h.01M16 20h.01");
    case "snowy-rainy":
      return ii(i) + ri("M8.5 18.5 7.5 21M12 21h.01M16.5 18.5l-1 2.5");
    case "hail":
      return ii(i) + '<circle cx="8" cy="20.5" r="1"/><circle cx="12" cy="21.5" r="1"/><circle cx="16" cy="20.5" r="1"/>';
    case "lightning":
      return ii(i) + ri("M12.5 16 10.5 19.5h3l-2 3");
    case "lightning-rainy":
      return ii(i) + ri("M12.5 16 10.5 19.5h3l-2 3M7.5 18.5l-1 2.5M17.5 18.5l-1 2.5");
    case "windy":
    case "windy-variant":
      return ri("M3 8.5h10.5a2.5 2.5 0 1 0-2.5-2.5M3 12h15.5a2.5 2.5 0 1 1-2.5 2.5M3 15.5h8");
    default:
      return '<circle cx="12" cy="12" r="8"/>' + ri("M12 8v5M12 16h.01");
  }
}
const Rd = (n, d) => '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + of(n, d) + "</svg>", rf = /* @__PURE__ */ new Set(["rainy", "pouring", "lightning", "lightning-rainy", "hail", "snowy", "snowy-rainy"]), sf = 30 * Dn, lf = 7, df = 3, Lc = 1, cf = Dn, pf = 15 * Dn, uf = 5, Sa = {
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
}, Ht = {
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
}, ff = {
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
}, hf = ["n", "nne", "ne", "ene", "e", "ese", "se", "sse", "s", "ssw", "sw", "wsw", "w", "wnw", "nw", "nnw"], mf = Object.keys(Ht.phases), gf = { low: "var(--success-color, #43a047)", moderate: "var(--warning-color, #ffa600)", high: "var(--orange-color, #ff9800)", very_high: "var(--error-color, #db4437)", extreme: "var(--purple-color, #926bc7)" }, vf = { good: "var(--success-color, #43a047)", fair: "var(--lime-color, #cddc39)", moderate: "var(--warning-color, #ffa600)", poor: "var(--orange-color, #ff9800)", very_poor: "var(--error-color, #db4437)", extremely_poor: "var(--purple-color, #926bc7)" }, Sp = [["good", 15], ["fair", 25], ["moderate", 37.5], ["poor", 50], ["very_poor", 75], ["extremely_poor", 1 / 0]], Xl = 100, Ec = "µg/m³", bf = "weather_alerts.air_quality_pollen", sd = ["aqi", "pm25", "pm10", "nitrogen_dioxide", "ozone"], wf = { "m/s": 1, "km/h": 1 / 3.6, mph: 0.44704, kn: 0.514444, "ft/s": 0.3048 }, xf = [0.5, 1.6, 3.4, 5.5, 8, 10.8, 13.9, 17.2, 20.8, 24.5, 28.5, 32.7], yf = { hPa: 1, mbar: 1, kPa: 10, inHg: 33.8639, mmHg: 1.33322 }, kf = { daily: 1, hourly: 2 }, Wt = (n) => String(n ?? "").replace(/[&<>"']/g, (d) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[d]), Ka = (n, d) => n.replace(/\{(\w+)\}/g, (i, p) => d[p] ?? ""), Ms = (n) => '<svg class="wbIcon" viewBox="0 0 24 24" aria-hidden="true"><path d="' + n + '"/></svg>', _c = /* @__PURE__ */ new Map();
function Mf(n) {
  let d = _c.get(n);
  if (d === void 0) {
    const i = "http://www.w3.org/2000/svg", p = document.createElementNS(i, "svg"), g = document.createElementNS(i, "path");
    p.setAttribute("viewBox", "0 0 24 24"), p.style.cssText = "position:absolute;width:24px;height:24px;visibility:hidden;pointer-events:none", g.setAttribute("d", n), p.append(g), document.body.append(p);
    const w = g.getBBox();
    p.remove();
    const x = Math.max(w.width, w.height), E = x ? 26 * 24 / x : 0, k = E / 24;
    d = x ? "width:" + E.toFixed(2) + "px;height:" + E.toFixed(2) + "px;translate:" + ((12 - w.x - w.width / 2) * k).toFixed(2) + "px " + ((12 - w.y - w.height / 2) * k).toFixed(2) + "px" : "", _c.set(n, d);
  }
  return d ? '<svg class="wbIcon" viewBox="0 0 24 24" aria-hidden="true" style="' + d + '"><path d="' + n + '"/></svg>' : Ms(n);
}
const Sf = () => {
  var n;
  return !!((n = window.matchMedia) != null && n.call(window, "(prefers-reduced-motion: reduce)").matches);
}, je = (n) => n != null && n !== "" && Number.isFinite(Number(n)), Dc = /* @__PURE__ */ new Map(), Bc = /* @__PURE__ */ new Map(), Nd = /* @__PURE__ */ new WeakMap(), Cf = (n) => {
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
function na(n, d, i) {
  const p = Number(n);
  if (Number.isNaN(p)) return String(n);
  const g = (d == null ? void 0 : d.number_format) === "none", w = { maximumFractionDigits: 2, ...i, ...g ? { useGrouping: !1 } : {} }, x = g ? "en-US" : Cf(d), E = JSON.stringify([x, w]);
  let k = Dc.get(E);
  if (!k) {
    try {
      k = new Intl.NumberFormat(x, w);
    } catch {
      k = new Intl.NumberFormat(void 0, w);
    }
    Dc.set(E, k);
  }
  return k.format(p);
}
const oc = (n) => {
  var d;
  return ((d = n == null ? void 0 : n.locale) == null ? void 0 : d.language) || (n == null ? void 0 : n.language) || void 0;
};
function Tf(n) {
  if (!n) return (/* @__PURE__ */ new Date("January 1, 2023 22:00:00")).toLocaleString().includes("10");
  if (Nd.has(n)) return Nd.get(n);
  const d = n.time_format, i = d === "language" || d === "system" || !d ? (/* @__PURE__ */ new Date("January 1, 2023 22:00:00")).toLocaleString(d === "language" ? n.language : void 0).includes("10") : d === "12";
  return Nd.set(n, i), i;
}
const Cp = (n) => {
  var d, i;
  return ((d = n == null ? void 0 : n.locale) == null ? void 0 : d.time_zone) === "server" && ((i = n == null ? void 0 : n.config) != null && i.time_zone) ? n.config.time_zone : void 0;
};
function Tp(n, d) {
  const i = JSON.stringify([n, d]);
  let p = Bc.get(i);
  if (!p) {
    try {
      p = new Intl.DateTimeFormat(n, d);
    } catch {
      p = new Intl.DateTimeFormat(void 0, { ...d, timeZone: void 0 });
    }
    Bc.set(i, p);
  }
  return p;
}
const bn = (n, d) => Tp(oc(d), { hour: "numeric", minute: "2-digit", hourCycle: Tf(d == null ? void 0 : d.locale) ? "h12" : "h23", timeZone: Cp(d) }).format(n), Rc = (n, d) => Tp(oc(d), { weekday: "short", timeZone: Cp(d) }).format(n), Af = (n, d) => n.toLocaleDateString(oc(d), { weekday: "narrow" }), Qe = (n, d) => je(d) ? na(Math.round(Number(d)), n.locale) + "°" : "–", Ss = (n) => {
  const d = new Date(n);
  return d.setHours(0, 0, 0, 0), d;
}, ys = (n, d) => n.getFullYear() === d.getFullYear() && n.getMonth() === d.getMonth() && n.getDate() === d.getDate(), yn = Math.PI / 180, Lf = 2440588, Ef = 2451545, ld = yn * 23.4397, _f = 149598e3, Df = -0.833 * yn, Bf = 0.133 * yn, Nc = 5 * Dn, Ap = (n) => n.getTime() / Po - 0.5 + Lf - Ef, Lp = (n, d) => Math.atan2(Math.sin(n) * Math.cos(ld) - Math.tan(d) * Math.sin(ld), Math.cos(n)), Ep = (n, d) => Math.asin(Math.sin(d) * Math.cos(ld) + Math.cos(d) * Math.sin(ld) * Math.sin(n)), Rf = (n, d) => yn * (280.16 + 360.9856235 * n) - d, Nf = (n, d, i) => Math.asin(Math.sin(d) * Math.sin(i) + Math.cos(d) * Math.cos(i) * Math.cos(n));
function _p(n) {
  const d = yn * (357.5291 + 0.98560028 * n), i = yn * (1.9148 * Math.sin(d) + 0.02 * Math.sin(2 * d) + 3e-4 * Math.sin(3 * d)), p = d + i + yn * 102.9372 + Math.PI;
  return { ra: Lp(p, 0), dec: Ep(p, 0), dist: _f };
}
function Dp(n) {
  const d = yn * (218.316 + 13.176396 * n), i = yn * (134.963 + 13.064993 * n), p = yn * (93.272 + 13.22935 * n), g = d + yn * 6.289 * Math.sin(i), w = yn * 5.128 * Math.sin(p);
  return { ra: Lp(g, w), dec: Ep(g, w), dist: 385001 - 20905 * Math.cos(i) };
}
const Bp = (n, d, i, p) => {
  const g = Ap(d), w = n(g);
  return Nf(Rf(g, yn * -p) - w.ra, yn * i, w.dec);
}, ic = (n, d, i) => Bp(_p, n, d, i), Pf = (n, d, i) => Bp(Dp, n, d, i);
function Rp(n, d, i, p) {
  const g = {};
  let w = i.getTime(), x = n(i) - d;
  for (let E = w + Nc; E <= p.getTime(); E += Nc) {
    const k = n(new Date(E)) - d;
    if (x < 0 != k < 0) {
      const B = new Date(w + (E - w) * x / (x - k));
      k > 0 ? g.rise ?? (g.rise = B) : g.set ?? (g.set = B);
    }
    w = E, x = k;
  }
  return g;
}
const Np = (n) => {
  const d = Ss(n);
  return [d, new Date(d.getTime() + Po)];
}, If = (n, d, i) => Rp((p) => ic(p, d, i), Df, ...Np(n)), Hf = (n, d, i) => Rp((p) => Pf(p, d, i), Bf, ...Np(n));
function Ff(n) {
  const d = Ap(n), i = _p(d), p = Dp(d), g = Math.acos(Math.sin(i.dec) * Math.sin(p.dec) + Math.cos(i.dec) * Math.cos(p.dec) * Math.cos(i.ra - p.ra)), w = Math.atan2(i.dist * Math.sin(g), p.dist - i.dist * Math.cos(g)), x = Math.atan2(Math.cos(i.dec) * Math.sin(i.ra - p.ra), Math.sin(i.dec) * Math.cos(p.dec) - Math.cos(i.dec) * Math.sin(p.dec) * Math.cos(i.ra - p.ra));
  return { fraction: (1 + Math.cos(w)) / 2, phase: 0.5 + 0.5 * w * (x < 0 ? -1 : 1) / Math.PI };
}
const Of = (n) => {
  const d = n * 28;
  return d < 0.5 || d > 27.5 ? "new_moon" : d < 6.5 ? "waxing_crescent" : d < 7.5 ? "first_quarter" : d < 13.5 ? "waxing_gibbous" : d < 14.5 ? "full_moon" : d < 20.5 ? "waning_gibbous" : d < 21.5 ? "last_quarter" : "waning_crescent";
}, dd = (n) => {
  const d = n == null ? void 0 : n.config;
  return d && je(d.latitude) && je(d.longitude) ? { lat: Number(d.latitude), lon: Number(d.longitude) } : null;
};
function Jl(n, d) {
  var B, yt, ut;
  const i = dd(n), p = i ? If(d, i.lat, i.lon) : {}, g = (B = n == null ? void 0 : n.states) == null ? void 0 : B["sun.sun"], w = Ss(d).getTime(), x = (Z) => {
    const $ = Z ? new Date(Z) : null;
    return $ && Number.isFinite($.getTime()) && Ss($).getTime() === w ? $ : null;
  }, E = x((yt = g == null ? void 0 : g.attributes) == null ? void 0 : yt.next_rising), k = x((ut = g == null ? void 0 : g.attributes) == null ? void 0 : ut.next_setting);
  return E && (p.rise = E), k && (p.set = k), p;
}
function Wf(n) {
  var p;
  const d = (p = n == null ? void 0 : n.states) == null ? void 0 : p["sun.sun"];
  if ((d == null ? void 0 : d.state) === "below_horizon" || (d == null ? void 0 : d.state) === "above_horizon") return d.state === "below_horizon";
  const i = dd(n);
  return i ? ic(/* @__PURE__ */ new Date(), i.lat, i.lon) < 0 : !1;
}
const Hr = (n) => !!n && n.state !== "unavailable" && n.state !== "unknown", Cs = (n, d) => {
  var p;
  const i = (p = n.entities) == null ? void 0 : p[d];
  return !i || !i.hidden && !i.entity_category;
}, wn = (n, d, i) => {
  var p, g;
  for (const w of d) {
    const x = (p = n.states) == null ? void 0 : p[w];
    if (!Hr(x)) continue;
    const E = (g = x.attributes) == null ? void 0 : g[i];
    if (E != null && E !== "") return { stateObj: x, value: E };
  }
}, qf = (n, d) => d.map((i) => {
  var p;
  return (p = n.states) == null ? void 0 : p[i];
}).find(Hr), jf = (n, d, i) => d.map((p) => {
  var g;
  return (g = n.states) == null ? void 0 : g[p];
}).find((p) => {
  var g;
  return Hr(p) && (((g = p.attributes) == null ? void 0 : g.supported_features) == null || Number(p.attributes.supported_features) & kf[i]);
});
function Pr(n, d, i) {
  var w, x, E, k;
  const p = ((x = (w = n.config) == null ? void 0 : w.unit_system) == null ? void 0 : x.length) || "", g = (d == null ? void 0 : d.attributes) || {};
  switch (i) {
    case "precipitation":
      return g.precipitation_unit || (p === "km" ? "mm" : "in");
    case "pressure":
      return g.pressure_unit || (p === "km" ? "hPa" : "inHg");
    case "wind_speed":
    case "wind_gust_speed":
      return g.wind_speed_unit || p + "/h";
    case "visibility":
      return g.visibility_unit || p;
    default:
      return g.temperature_unit || ((k = (E = n.config) == null ? void 0 : E.unit_system) == null ? void 0 : k.temperature) || "";
  }
}
function od(n, d, i, p) {
  try {
    if (typeof n.formatEntityAttributeValueToParts == "function") {
      const [g, ...w] = n.formatEntityAttributeValueToParts(d, i, p).map((x) => x.value);
      return { number: g, unit: w.join("").trim() };
    }
  } catch {
  }
  return { number: na(p, n.locale), unit: Pr(n, d, i) };
}
function Pc(n, d, i, p) {
  try {
    if (typeof n.formatEntityAttributeValue == "function") return n.formatEntityAttributeValue(d, i, p);
  } catch {
  }
  const g = od(n, d, i, p);
  return (g.number + " " + g.unit).trim();
}
function Nr(n, d) {
  var p;
  try {
    if (typeof n.formatEntityState == "function") return n.formatEntityState(d);
  } catch {
  }
  const i = (p = d.attributes) == null ? void 0 : p.unit_of_measurement;
  return ff[d.state] || (i && je(d.state) ? na(d.state, n.locale) + " " + i : d.state);
}
function sl(n, d) {
  var i;
  try {
    if (typeof n.formatEntityName == "function") return n.formatEntityName(d, { type: "entity" });
  } catch {
  }
  return ((i = d.attributes) == null ? void 0 : i.friendly_name) || d.entity_id;
}
const Ic = (n) => n < 3 ? "low" : n < 6 ? "moderate" : n < 8 ? "high" : n < 11 ? "very_high" : "extreme", Pd = (n) => Sp.find(([, d]) => n <= d)[0];
function zf(n, d) {
  if (d === "Beaufort") return Math.round(n);
  const i = d ? wf[d] : void 0;
  if (i === void 0) return;
  const p = xf.findIndex((g) => n * i < g);
  return p === -1 ? 12 : p;
}
const Hc = (n, d) => {
  const i = d ? yf[d] : void 0;
  return i === void 0 ? void 0 : n * i;
}, Fc = (n) => Object.keys(n.states || {}).find((d) => {
  var i, p;
  return d.startsWith("sensor.") && ((p = (i = n.entities) == null ? void 0 : i[d]) == null ? void 0 : p.platform) === "moon";
}), Id = (n) => Object.values(n.states || {}).filter((d) => {
  var i, p;
  return d.entity_id.startsWith("sensor.") && ((i = d.attributes) == null ? void 0 : i.device_class) === "precipitation" && ["total", "total_increasing"].includes(((p = d.attributes) == null ? void 0 : p.state_class) ?? "") && Cs(n, d.entity_id);
}).map((d) => d.entity_id).sort()[0];
function Vf(n) {
  var i;
  const d = {};
  for (const [p, g] of Object.entries(((i = n == null ? void 0 : n.core) == null ? void 0 : i.integration) ?? {})) {
    if (g && "integration_type" in g) {
      d[p] = g.categories;
      continue;
    }
    for (const [w, x] of Object.entries((g == null ? void 0 : g.integrations) ?? {})) d[w] = x == null ? void 0 : x.categories;
  }
  return d;
}
const Pp = (n, d, i) => {
  var g, w, x;
  const p = (w = (g = n.entities) == null ? void 0 : g[i]) == null ? void 0 : w.platform;
  return !!p && !!((x = d[p]) != null && x.includes(bf));
};
function Gf(n, d) {
  const i = /* @__PURE__ */ new Map();
  return Object.values(n.states || {}).filter((p) => {
    var g;
    return p.entity_id.startsWith("sensor.") && sd.includes(((g = p.attributes) == null ? void 0 : g.device_class) ?? "") && Cs(n, p.entity_id) && Pp(n, d, p.entity_id);
  }).sort((p, g) => p.entity_id.localeCompare(g.entity_id)).forEach((p) => {
    i.has(p.attributes.device_class) || i.set(p.attributes.device_class, p.entity_id);
  }), sd.map((p) => i.get(p)).filter(Boolean);
}
const Uf = (n, d) => Object.values(n.states || {}).filter((i) => {
  var p, g;
  return i.entity_id.startsWith("sensor.") && Cs(n, i.entity_id) && Pp(n, d, i.entity_id) && (((g = (p = n.entities) == null ? void 0 : p[i.entity_id]) == null ? void 0 : g.translation_key) ?? i.entity_id).toLowerCase().includes("pollen");
}).map((i) => i.entity_id).sort();
function Oc(n, d, i) {
  const p = Math.max(d - n, 1e-6), g = i[i.length - 1], w = i.find((B) => p / B <= 4) ?? g * Math.ceil(p / (4 * g)), x = Math.floor(n / w) * w;
  let E = Math.ceil(d / w) * w;
  E === x && (E = x + w);
  const k = [];
  for (let B = x; B <= E + w / 1e3; B += w) k.push(B);
  return { min: x, max: E, ticks: k };
}
const ll = (n, d, i) => {
  const p = (x) => [1, 3, 5].map((E) => parseInt(x.slice(E, E + 2), 16)), g = p(n), w = p(d);
  return "rgb(" + g.map((x, E) => Math.round(x + (w[E] - x) * i)).join(", ") + ")";
}, Yf = (n, d, i, p) => {
  const g = i * Math.abs(1 - 2 * p), w = p < 0.5 ? 0 : 1;
  return "M " + n + " " + (d - i) + " A " + i + " " + i + " 0 0 0 " + n + " " + (d + i) + " A " + g + " " + i + " 0 0 " + w + " " + n + " " + (d - i) + " Z";
}, xn = ({ icon: n, name: d, sub: i, visual: p, double: g, backdrop: w, cls: x, zone: E, callouts: k }) => '<div class="wbCard wbSquare' + (g ? " wbDouble" : "") + (w ? " wbHasBackdrop" : "") + (E != null ? " wbZoned" : "") + (x ? " " + x : "") + '">' + (w ? '<div class="wbBackdrop" aria-hidden="true">' + w + "</div>" : "") + '<div class="wbHead"><div class="wbChip wbPlain">' + Mf(n) + '</div><div class="wbText"><span class="wbName">' + Wt(d) + "</span>" + (i ? '<span class="wbSub">' + Wt(i) + "</span>" : "") + "</div></div>" + (E != null ? '<div class="wbZone">' + E + "</div>" + (k != null && k.length ? '<div class="wbCallouts">' + k.slice(0, 3).map((B) => Array.isArray(B) ? '<span class="wbCallout"><span>' + Wt(B[0]) + "</span><span>" + Wt(B[1]) + "</span></span>" : '<span class="wbCallout wbAdvice"><span>' + Wt(B) + "</span></span>").join("") + "</div>" : "") : '<div class="wbVisual">' + p + "</div>") + "</div>", Yi = (n, d) => '<div class="wbValue"><span class="wbNum">' + Wt(n) + "</span>" + (d ? '<span class="wbUnitV">' + Wt(d) + "</span>" : "") + "</div>";
function Zf(n) {
  const d = n.max - n.min || 1, i = (E) => 100 - (Math.min(n.max, Math.max(n.min, E)) - n.min) / d * 100, p = (E) => E / dl * 100 + "%", g = (E) => E.map((k) => k.t + "," + i(k.v)).join(" "), w = n.kind === "line" ? n.points : [];
  let x = '<div class="wbDayChart"><div class="wbDcSun">' + n.sun.map((E) => '<span class="wbDcSunMark" style="left:' + p(E.t) + '">' + Ms(E.rise ? Sa.sunsetUp : Sa.sunsetDown) + Wt(E.label) + "</span>").join("") + "</div>";
  return x += '<div class="wbDcY">' + n.ticks.map((E) => '<span style="top:' + i(E) + '%">' + Wt(n.format(E)) + "</span>").join("") + "</div>", x += '<div class="wbDcPlot"><svg viewBox="0 0 ' + dl + ' 100" preserveAspectRatio="none">' + n.night.map(([E, k]) => '<rect class="wbDcNight" x="' + E + '" y="0" width="' + (k - E) + '" height="100"></rect>').join("") + n.ticks.map((E) => '<line class="wbDcGrid" x1="0" x2="' + dl + '" y1="' + i(E) + '" y2="' + i(E) + '" vector-effect="non-scaling-stroke"></line>').join("") + n.sun.map((E) => '<line class="wbDcSunLine" x1="' + E.t + '" x2="' + E.t + '" y1="0" y2="100" vector-effect="non-scaling-stroke"></line>').join("") + (n.past && n.past.length > 1 ? '<polyline class="wbDcPast" points="' + g(n.past) + '" vector-effect="non-scaling-stroke"></polyline>' : "") + (w.length > 1 ? '<polygon class="wbDcArea" points="' + w[0].t + ",100 " + g(w) + " " + w[w.length - 1].t + ',100"></polygon><polyline class="wbDcLine" points="' + g(w) + '" vector-effect="non-scaling-stroke"></polyline>' : "") + (n.now ? '<line class="wbDcNow" x1="' + n.now.t + '" x2="' + n.now.t + '" y1="0" y2="100" vector-effect="non-scaling-stroke"></line>' : "") + "</svg>" + (n.kind === "bars" ? n.points.filter((E) => E.v > 0).map((E) => '<i class="wbDcBar" style="left:' + p(E.t + 12) + ";width:" + p(36) + ";height:" + (100 - i(E.v)) + '%"></i>').join("") : "") + (n.now && n.kind === "line" ? '<i class="wbDcDot" style="left:' + p(n.now.t) + ";top:" + i(n.now.v) + '%"></i>' : "") + (n.peak ? '<span class="wbDcPeak" style="left:' + p(n.peak.t) + ";top:" + i(n.peak.v) + '%">' + Wt(n.peak.label) + "</span>" : "") + (n.note ? '<span class="wbDcNote">' + Wt(n.note) + "</span>" : "") + "</div>", x += '<div class="wbDcX">' + n.hours.map((E) => '<span class="' + (E.minor ? "wbMinor" : "") + '" style="left:' + p(E.t) + '">' + Wt(E.label) + "</span>").join("") + "</div></div>", x;
}
function Kf(n, d) {
  const x = n.map((V) => V.value), E = Math.min(...x), k = Math.max(...x), B = k - E || 1, yt = (V) => V / (n.length - 1) * 300, ut = (V) => 18 + (1 - (V - E) / B) * 84, Z = n.map((V, W) => yt(W) + "," + ut(V.value)).join(" "), $ = x.indexOf(k), rt = x.indexOf(E), Q = (V) => V === 0 ? "start" : V === n.length - 1 ? "end" : "middle";
  return '<svg class="wbChart" viewBox="0 0 300 120" aria-hidden="true"><polygon class="wbArea" points="0,102 ' + Z + ' 300,102"></polygon><polyline class="wbLine" points="' + Z + '" vector-effect="non-scaling-stroke"></polyline><text x="' + yt($) + '" y="' + (ut(k) - 6) + '" text-anchor="' + Q($) + '">' + Wt(d(k)) + '</text><text x="' + yt(rt) + '" y="' + (ut(E) + 14) + '" text-anchor="' + Q(rt) + '">' + Wt(d(E)) + '</text><text x="0" y="120" text-anchor="start">' + Wt(n[0].label) + '</text><text x="300" y="120" text-anchor="end">' + Wt(n[n.length - 1].label) + "</text></svg>";
}
function $f(n, d) {
  const w = n.map((ut) => ut.value).concat([]), x = Math.min(...w) - 2, E = Math.max(...w) + 1, k = E - x || 1, B = 300 / n.length, yt = (ut) => (1 - (ut - x) / k) * 104;
  return '<svg class="wbChart" viewBox="0 0 300 120" aria-hidden="true">' + n.map((ut, Z) => '<rect class="wbBar' + (ut.now ? " wbNowBar" : "") + '" x="' + (Z * B + B * 0.2) + '" y="' + yt(ut.value) + '" width="' + B * 0.6 + '" height="' + (104 - yt(ut.value)) + '" rx="6"></rect><text x="' + (Z * B + B / 2) + '" y="120" text-anchor="middle">' + Wt(ut.label) + "</text>").join("") + "</svg>";
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
], Jf = [[60, 92, 2.2], [72, 98, 1.6], [48, 100, 1.5], [85, 88, 1.8], [38, 92, 1.3], [66, 84, 1.2], [95, 80, 1.3], [25, 40, 1.4], [82, 30, 1.3], [55, 108, 1.2]], Wc = [[54.4, 95, 1.8], [44.5, 56.6, 1.5], [33.5, 56.6, 1.1], [23.7, 40.1, 1.1]], Qf = [[30, 62], [48, 48], [72, 60], [96, 82], [86, 112], [30, 108], [16, 86]];
let th = 0;
function qc(n, { getHass: d, entityId: i, style: p = "bitmap", motion: g = !0, cards: w, onOpen: x, hoursWindow: E } = {}) {
  var bo, Ho;
  const k = "wb" + ++th + "-", B = document.createElement("div");
  B.className = "wb", B.dataset.style = p;
  const yt = document.createElement("div");
  yt.className = "wbBento", B.appendChild(yt), n.replaceChildren(B);
  const ut = ["aq_tile", "pollen_tile", "radar_tile"], Z = ["current", "hourly", "sun", "moon", "wind", "uv_index", "compared_to_average", "humidity", "pressure", "precipitation", "visibility", "air_quality", ...ut].filter((h) => !w || w.includes(h)), $ = { current: "wide", hourly: "wide", compared_to_average: "double" }, rt = ["sun", "moon", "uv_index", "pressure", "aq_tile", "pollen_tile"], Q = {};
  Z.forEach((h) => {
    const S = document.createElement("div");
    S.className = "wbItem", S.dataset.card = h, S.dataset.size = $[h] || "tile", S.hidden = !0, rt.includes(h) && (S.dataset.xl = ""), yt.appendChild(S), Q[h] = { el: S, html: null };
  });
  let V = !1, W = null, dt = 0, st = -1, gt = !1, tt = null;
  const et = "homecore-next-view", ot = { openDay: void 0, opener: void 0, dayMode: "temperature", hourlyMode: "temperature", hourlyView: (() => {
    try {
      return localStorage.getItem(et);
    } catch {
      return null;
    }
  })() === "bars" ? "bars" : "strip", aq: void 0 }, St = { todayHistory: void 0, rain: void 0, temperatureHistory: void 0, pressureHistory: void 0, aqHistory: void 0, categories: void 0, lastFetch: 0 };
  let U = /* @__PURE__ */ new Date(), wt = /* @__PURE__ */ new Date();
  const Y = {}, zt = {}, M = {}, _ = (h) => {
    var S;
    return ((S = M[h]) == null ? void 0 : S.forecast) ?? [];
  }, L = (h, S) => {
    var C;
    return M[S] ? (C = h.states) == null ? void 0 : C[M[S].entityId] : void 0;
  };
  function P(h) {
    const S = zt[h];
    S && (S.unsub.then((C) => {
      typeof C == "function" && C();
    }).catch(() => {
    }), delete zt[h]), M[h] && delete M[h];
  }
  function ht(h, S, C) {
    var z;
    if (typeof ((z = h.connection) == null ? void 0 : z.subscribeMessage) != "function") return;
    const R = { entityId: C };
    try {
      R.unsub = Promise.resolve(h.connection.subscribeMessage((K) => {
        V || zt[S] !== R || (K != null && K.forecast ? M[S] = { entityId: C, forecast: K.forecast } : delete M[S], ua());
      }, { type: "weather/subscribe_forecast", forecast_type: S, entity_id: C }));
    } catch (K) {
      R.unsub = Promise.reject(K);
    }
    R.unsub.catch(() => {
      zt[S] === R && delete zt[S];
    }), zt[S] = R;
  }
  function ft(h, S) {
    var C;
    for (const R of ["daily", "hourly"]) {
      const z = jf(h, S, R);
      ((C = zt[R]) == null ? void 0 : C.entityId) !== (z == null ? void 0 : z.entity_id) && (P(R), z && ht(h, R, z.entity_id));
    }
  }
  const j = (h, S, C, R = !1) => h.callWS({
    type: "history/history_during_period",
    start_time: C.toISOString(),
    end_time: (/* @__PURE__ */ new Date()).toISOString(),
    entity_ids: [S],
    minimal_response: R,
    no_attributes: R,
    significant_changes_only: !1
  });
  async function vt(h, S) {
    var nt, bt, kt;
    const C = wn(h, S, "pressure");
    if (!C) return;
    const R = C.stateObj.entity_id, z = await j(h, R, new Date(Date.now() - 3 * He)), K = (kt = (bt = (nt = z == null ? void 0 : z[R]) == null ? void 0 : nt.find((Ft) => {
      var Tt;
      return typeof ((Tt = Ft.a) == null ? void 0 : Tt.pressure) == "number";
    })) == null ? void 0 : bt.a) == null ? void 0 : kt.pressure;
    St.pressureHistory = typeof K == "number" ? { entityId: R, value: K } : void 0;
  }
  async function Mt(h, S) {
    var bt;
    const C = wn(h, S, "temperature");
    if (!C) return;
    const R = C.stateObj.entity_id, z = Ss(/* @__PURE__ */ new Date()), K = await j(h, R, new Date(z.getTime() - lf * Po)), nt = /* @__PURE__ */ new Map();
    for (const kt of (K == null ? void 0 : K[R]) ?? []) {
      const Ft = (bt = kt.a) == null ? void 0 : bt.temperature, Tt = new Date((kt.lc ?? kt.lu) * 1e3);
      if (typeof Ft != "number" || Tt >= z) continue;
      const Bt = Tt.toDateString();
      nt.set(Bt, Math.max(nt.get(Bt) ?? -1 / 0, Ft));
    }
    St.temperatureHistory = { entityId: R, dailyHighs: [...nt.values()], days: [...nt.entries()].map(([kt, Ft]) => ({ date: new Date(kt), high: Ft })) };
  }
  async function Qt(h) {
    const S = Id(h);
    if (!S) return;
    const C = await h.callWS({ type: "recorder/statistic_during_period", statistic_id: S, rolling_window: { duration: { hours: 24 } } });
    St.rain = { entityId: S, change: (C == null ? void 0 : C.change) ?? void 0 };
  }
  function se() {
    const h = d == null ? void 0 : d();
    if (!h || V || typeof h.callWS != "function") return;
    const S = La(h);
    St.lastFetch = Date.now(), [vt(h, S), Mt(h, S), Qt(h)].forEach((C) => C.then(() => ua(), () => {
    }));
  }
  async function ta() {
    const h = d == null ? void 0 : d();
    if (!h) return;
    const S = wn(h, La(h), "temperature");
    if (!S) return;
    const C = S.stateObj.entity_id, R = Ss(/* @__PURE__ */ new Date());
    try {
      const z = await j(h, C, R), K = (nt) => ((z == null ? void 0 : z[C]) ?? []).map((bt) => {
        var kt;
        return { time: bt.lu * 1e3, value: (kt = bt.a) == null ? void 0 : kt[nt] };
      }).filter((bt) => typeof bt.value == "number");
      St.todayHistory = { day: R.toDateString(), fetched: Date.now(), temperature: K("temperature"), humidity: K("humidity") }, ua();
    } catch {
    }
  }
  async function Se(h) {
    const S = d == null ? void 0 : d();
    if (S)
      try {
        const C = await j(S, h, new Date(Date.now() - 24 * He), !0), R = ((C == null ? void 0 : C[h]) ?? []).filter((K) => je(K.s)), z = Math.max(1, Math.ceil(R.length / 48));
        St.aqHistory = { entityId: h, points: R.filter((K, nt) => nt % z === 0).map((K) => ({ label: bn(new Date(K.lu * 1e3), S), value: Number(K.s) })) }, ua();
      } catch {
      }
  }
  function pi(h) {
    St.categories === void 0 && (St.categories = null, Promise.resolve().then(() => h.callWS({ type: "integration/descriptions" })).then((S) => {
      St.categories = Vf(S);
    }, () => {
      St.categories = {};
    }).then(() => ua()));
  }
  function La(h) {
    var C;
    const S = Object.keys(h.states || {}).filter((R) => R.startsWith("weather.") && Cs(h, R)).sort();
    return i && ((C = h.states) != null && C[i]) ? [i, ...S.filter((R) => R !== i)] : S;
  }
  const Rt = (h) => St.categories ? { air: Gf(h, St.categories), pollen: Uf(h, St.categories) } : { air: [], pollen: [] };
  function he(h, S, C, R) {
    if (p === "line") return '<span class="wbWx wbS' + S + ' wbLineIcon" aria-hidden="true">' + Rd(h, C || h === "clear-night") + "</span>";
    if (p === "smooth") {
      const z = qu(h, S === 90, C, k + "g-" + R);
      return '<span class="wbWx wbS' + S + " wb" + z.k[0].toUpperCase() + z.k.slice(1) + (z.night ? " wbNight" : "") + '" aria-hidden="true">' + z.svg + "</span>";
    }
    return '<span class="wbWx wbS' + S + '" aria-hidden="true"><canvas data-wb-wx="' + Wt(cd(h, C)) + '" data-size="' + S + '"></canvas></span>';
  }
  const la = () => _("daily").filter((h) => h.templow != null).slice(0, Qu);
  function ue(h, S) {
    const C = new Date(S.datetime), R = /* @__PURE__ */ new Date();
    return ys(C, R) ? Ht.today : ys(C, new Date(R.getTime() + Po)) ? Ht.tomorrow : Rc(C, h);
  }
  const ze = (h, S, C) => C === 0 ? ue(h, S) : Rc(new Date(S.datetime), h);
  function Fr(h, S) {
    var Tt, Bt, Yt, Vt;
    const C = qf(h, S);
    if (!C) return "";
    const R = la(), z = ot.openDay !== void 0 ? R[ot.openDay] : void 0, K = wn(h, S, "temperature"), nt = R[0], bt = nt && ys(new Date(nt.datetime), /* @__PURE__ */ new Date()), kt = ((Bt = (Tt = h.config) == null ? void 0 : Tt.unit_system) == null ? void 0 : Bt.temperature) || ((Yt = C.attributes) == null ? void 0 : Yt.temperature_unit) || "";
    let Ft = '<div class="wbCard wbWeather' + (z ? " wbIsOpen" : "") + '"><div class="wbClosed"' + (z ? " inert" : "") + '><div class="wbNow">' + (x ? '<button class="wbCurrent wbOpenPage" data-wb="open-page" data-wb-focus="open-page" aria-label="' + Wt(Ht.openPage) + '">' : '<div class="wbCurrent">') + he(C.state, 90, Wf(h), "now") + '<div class="wbTempBlock">' + (K && je(K.value) ? '<div class="wbTemp"><span class="wbDeg">' + Wt(na(Math.round(Number(K.value)), h.locale)) + '</span><span class="wbUnit">' + Wt(kt) + "</span></div>" : "") + '<div class="wbPlace">' + Wt(((Vt = h.config) == null ? void 0 : Vt.location_name) ?? "") + "</div></div>" + (x ? "</button>" : "</div>") + '<div class="wbCondition"><div class="wbCondName">' + Wt(Nr(h, C)) + "</div>" + (bt && nt.templow != null ? '<div class="wbRange">' + Wt(Ka(Ht.range, { high: Qe(h, nt.temperature), low: Qe(h, nt.templow) })) + "</div>" : "") + "</div></div>";
    if (Ft += Xi(h) + ui(h), R.length) {
      const Nt = bt && K && je(K.value) ? Qe(h, K.value) : "", pe = (Zt, _t, $t) => Zt === 0 && Nt ? '<span class="wbAsDay">' + Wt(_t) + '</span><span class="wbAsNow">' + Wt($t) + "</span>" : Wt(_t);
      Ft += '<div class="wbColumns" role="list">' + R.map((Zt, _t) => '<button class="wbColumn" role="listitem" data-wb="day" data-index="' + _t + '" data-wb-focus="col-' + _t + '"><span class="wbDay">' + pe(_t, ze(h, Zt, _t), Ht.now) + "</span>" + he(Zt.condition ?? "cloudy", 60, !1, "col" + _t) + '<span class="wbTemps"><span class="wbHi">' + pe(_t, Qe(h, Zt.temperature), Nt) + '</span><span class="wbLo">' + Wt(Qe(h, Zt.templow)) + "</span></span></button>").join("") + "</div>", Ft += '<div class="wbHalves" role="list">' + R.map((Zt, _t) => '<button class="wbTile" role="listitem" data-wb="day" data-index="' + _t + '" data-wb-focus="half-' + _t + '">' + he(Zt.condition ?? "cloudy", 40, !1, "half" + _t) + '<span class="wbText"><span class="wbName">' + Wt(ue(h, Zt)) + '</span><span class="wbSub">' + Wt(Ka(Ht.highLow, { high: Qe(h, Zt.temperature), low: Qe(h, Zt.templow) })) + "</span></span></button>").join("") + "</div>";
    }
    return Ft + "</div>" + (z ? me(h, S, z) : "") + "</div>";
  }
  const xe = {
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
  }, ee = {
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
  function Jt(h) {
    const S = Date.now(), C = _("hourly").filter((Bt) => new Date(Bt.datetime).getTime() > S - He).slice(0, 13);
    if (C.length < 2) return "";
    const R = (Bt) => bn(new Date(Bt.datetime), h), z = (Bt) => xe[Bt.condition] || "", K = (Bt) => ee[Bt.condition] || Bt.condition;
    let nt = z(C[0]);
    if (!nt) return "";
    let bt = C[0], kt = 0;
    for (const Bt of C.slice(1))
      kt === 2 || K(Bt) === K(bt) || !z(Bt) || (nt += (kt ? " and " : ", ") + z(Bt) + " from " + R(Bt), bt = Bt, kt++);
    const Ft = Number(C[0].temperature), Tt = C.filter((Bt) => je(Bt.temperature));
    if (je(Ft) && Tt.length) {
      const Bt = Tt.reduce((Vt, Nt) => Number(Nt.temperature) < Number(Vt.temperature) ? Nt : Vt), Yt = Tt.reduce((Vt, Nt) => Number(Nt.temperature) > Number(Vt.temperature) ? Nt : Vt);
      Ft - Number(Bt.temperature) >= 3 ? nt += ", down to " + Qe(h, Bt.temperature) + " by " + R(Bt) : Number(Yt.temperature) - Ft >= 3 && (nt += ", up to " + Qe(h, Yt.temperature) + " by " + R(Yt));
    }
    return nt[0].toUpperCase() + nt.slice(1) + ".";
  }
  const Xi = (h) => {
    const S = Jt(h);
    return S ? '<div class="wbSummary"><p class="wbSummaryText">' + Wt(S) + "</p></div>" : "";
  };
  function ui(h) {
    const [S, C] = $l[E == null ? void 0 : E()] || $l.day, R = Date.now(), z = _("hourly").filter((K) => {
      const nt = new Date(K.datetime), bt = nt.getHours();
      return nt.getTime() > R - He / 2 && bt >= S && bt < C && je(K.temperature);
    }).slice(0, 4);
    return z.length ? '<div class="wbNextHours" role="list">' + z.map((K, nt) => '<div class="wbHour" role="listitem"><span class="wbHourTime">' + Wt(bn(new Date(K.datetime), h)) + "</span>" + he(K.condition ?? "cloudy", 40, K.is_daytime === !1, "hr" + nt) + '<span class="wbHourTemp">' + Wt(Qe(h, K.temperature)) + "</span></div>").join("") + "</div>" : "";
  }
  function Ji(h) {
    const S = h.getTime(), C = Date.now() - He;
    return _("hourly").filter((R) => {
      const z = new Date(R.datetime).getTime();
      return z >= S && z < S + Po && z > C;
    });
  }
  function Xa(h) {
    if (!h.length) return ["temperature"];
    const S = ["temperature"];
    return h.some((C) => C.precipitation != null || C.precipitation_probability != null) && S.push("precipitation"), h.some((C) => C.humidity != null) && S.push("humidity"), S;
  }
  function me(h, S, C) {
    const R = Ss(new Date(C.datetime)), z = Ji(R), K = Xa(z), nt = K.includes(ot.dayMode) ? ot.dayMode : "temperature", bt = (kt) => kt === "humidity" ? Ht.humidity : Ht.modes[kt];
    return '<div class="wbOpen" data-wb-open="day"><div class="wbOpenHead">' + he(C.condition ?? "cloudy", 40, !1, "open") + '<div class="wbText"><span class="wbName">' + Wt(ue(h, C)) + '</span><span class="wbSub">' + Wt(Ka(Ht.highLow, { high: Qe(h, C.temperature), low: Qe(h, C.templow) })) + '</span></div><button class="wbBack" title="' + Wt(Ht.back) + '" data-wb="close-day" data-wb-focus="back-day">' + Ms(Sa.back) + "</button></div>" + (K.length > 1 ? '<div class="wbDayTabs"><div class="wbSegments" role="group">' + K.map((kt) => '<button aria-pressed="' + (kt === nt) + '" data-wb="day-mode" data-mode="' + kt + '" data-wb-focus="day-mode-' + kt + '">' + Wt(bt(kt)) + "</button>").join("") + "</div></div>" : "") + '<div class="wbGraph">' + Zf(da(h, S, R, z, nt)) + "</div></div>";
  }
  function da(h, S, C, R, z) {
    var wo;
    const K = C.getTime(), nt = Date.now(), bt = ys(C, /* @__PURE__ */ new Date()), kt = (be) => (be - K) / Dn, Ft = (be) => bn(new Date(be), h), Tt = (be) => new Date(be.datetime).getTime(), Bt = [0, 3, 6, 9, 12, 15, 18, 21].map((be) => ({ t: be * 60, label: Ft(K + be * He), minor: be % 6 !== 0 })), { rise: Yt, set: Vt } = Jl(h, C), Nt = [], pe = [];
    Yt && (Nt.push({ t: kt(Yt.getTime()), label: Ft(Yt.getTime()), rise: !0 }), pe.push([0, kt(Yt.getTime())])), Vt && (Nt.push({ t: kt(Vt.getTime()), label: Ft(Vt.getTime()), rise: !1 }), pe.push([kt(Vt.getTime()), dl]));
    const Zt = dd(h);
    !Yt && !Vt && Zt && ic(new Date(K + Po / 2), Zt.lat, Zt.lon) < 0 && pe.push([0, dl]);
    const _t = bt ? kt(nt) : void 0, $t = { hours: Bt, sun: Nt, night: pe };
    if (!R.length && !bt) return { ...$t, kind: "line", points: [], min: 0, max: 1, ticks: [], format: String, note: Ht.noHourly };
    if (z === "precipitation") {
      const be = R.some((va) => va.precipitation_probability != null), Ba = R.map((va) => ({ t: kt(Tt(va)), v: Number((be ? va.precipitation_probability : va.precipitation) ?? 0) })), xo = Pr(h, L(h, "hourly"), "precipitation"), Ie = Math.max(0, ...Ba.map((va) => va.v)), an = be ? 100 : Oc(0, Math.max(Ie, 1), [0.5, 1, 2, 5, 10]).max, Un = (va) => be ? na(va, h.locale) + "%" : na(va, h.locale, { maximumFractionDigits: 1 }) + " " + xo, Fo = Ba.find((va) => va.v === Ie);
      return {
        ...$t,
        kind: "bars",
        points: Ba,
        min: 0,
        max: an,
        ticks: [0, an / 2, an],
        format: Un,
        now: _t !== void 0 ? { t: _t, v: 0 } : void 0,
        peak: Fo && Ie > 0 ? { t: Fo.t + 30, v: Fo.v, label: Un(Fo.v) } : void 0,
        note: Ie > 0 ? void 0 : Ht.noRain
      };
    }
    const oe = z === "humidity" ? "humidity" : "temperature", fa = R.filter((be) => be[oe] != null && (!bt || Tt(be) >= nt)).map((be) => ({ t: kt(Tt(be)), v: Number(be[oe]) }));
    let Pt, Be = [];
    if (_t !== void 0) {
      const be = wn(h, S, oe);
      be && je(be.value) && (Pt = { t: _t, v: Number(be.value) }, fa.unshift(Pt)), Be = (((wo = St.todayHistory) == null ? void 0 : wo.day) === C.toDateString() ? St.todayHistory[oe] : []).filter((xo) => xo.time <= nt).map((xo) => ({ t: Math.max(0, kt(xo.time)), v: xo.value })), Pt && Be.length && Be.push(Pt);
    }
    const Ze = [...Be, ...fa];
    if (!Ze.length) return { ...$t, kind: "line", points: [], min: 0, max: 1, ticks: [], format: String, note: Ht.noHourly };
    const Ca = Ze.map((be) => be.v), Cn = Oc(Math.min(...Ca), Math.max(...Ca), oe === "humidity" ? [5, 10, 20, 25] : [1, 2, 5, 10]);
    oe === "humidity" && (Cn.min = Math.max(0, Cn.min), Cn.max = Math.min(100, Cn.max), Cn.ticks = Cn.ticks.filter((be) => be >= 0 && be <= 100));
    const Ae = oe === "humidity" ? (be) => na(be, h.locale) + "%" : (be) => Qe(h, be), Gn = oe === "temperature" ? Ze.reduce((be, Ba) => Ba.v > be.v ? Ba : be) : void 0;
    return { ...$t, kind: "line", points: fa, past: Be, ...Cn, format: Ae, now: Pt, peak: Gn ? { ...Gn, label: Ae(Gn.v) } : void 0 };
  }
  function ga(h) {
    const S = ["temperature"];
    return h.some((C) => C.precipitation_probability != null || C.precipitation != null) && S.push("precipitation"), h.some((C) => C.wind_speed != null) && S.push("wind"), S;
  }
  function fi(h, S, C = Cc) {
    var K, nt;
    const R = _("daily"), z = [];
    for (let bt = 0; bt < C; bt++) for (const kt of [!1, !0]) {
      const Ft = h.getTime() + (bt * 24 + (kt ? 12 : 0)) * He, Tt = Ft + 12 * He, Bt = {};
      S.forEach((Vt) => {
        const Nt = new Date(Vt.datetime).getTime();
        Vt.condition && Nt >= Ft && Nt < Tt && (Bt[Vt.condition] = (Bt[Vt.condition] ?? 0) + (rf.has(Vt.condition) ? 2 : 1));
      });
      let Yt = (K = Object.entries(Bt).sort((Vt, Nt) => Nt[1] - Vt[1])[0]) == null ? void 0 : K[0];
      if (!Yt) {
        const Vt = new Date(Ft).toDateString();
        Yt = ((nt = R.find((Nt) => new Date(Nt.datetime).toDateString() === Vt)) == null ? void 0 : nt.condition) ?? "cloudy";
      }
      z.push({ cond: kt && Yt === "sunny" ? "clear-night" : Yt, night: kt });
    }
    return z;
  }
  function Qi(h, S, C) {
    const R = L(h, "hourly"), z = S.precipitation_probability != null ? na(S.precipitation_probability, h.locale) + "%" : "", K = S.precipitation ? na(S.precipitation, h.locale) + " " + Pr(h, R, "precipitation") : "";
    switch (C) {
      case "precipitation":
        return z ? [z, K] : [K || "–", ""];
      case "wind":
        return S.wind_speed != null ? [na(Math.round(S.wind_speed), h.locale), Pr(h, R, "wind_speed")] : ["–", ""];
      default:
        return [Qe(h, S.temperature), (S.precipitation_probability ?? 0) >= 20 ? z : ""];
    }
  }
  function Kt(h, S, C) {
    const [R, z] = $l[E == null ? void 0 : E()] || $l.day, K = [];
    for (let nt = 0; nt < 4 && K.length < 3; nt++) {
      const bt = /* @__PURE__ */ new Date();
      bt.setHours(0, 0, 0, 0), bt.setDate(bt.getDate() + nt);
      const kt = new Date(bt);
      kt.setHours(z, 0, 0, 0), bt.setHours(R, 0, 0, 0), !(kt.getTime() <= C || !S.some((Ft) => {
        const Tt = new Date(Ft.datetime).getTime();
        return Tt >= bt.getTime() && Tt <= kt.getTime();
      })) && K.push({ a: bt.getTime(), b: kt.getTime(), label: ue(h, { datetime: bt.toISOString() }) });
    }
    return K;
  }
  function Dt(h, S, C, R, z, K) {
    const nt = (C.b - S.a) / He, bt = (_t) => ((_t - S.a) / He).toFixed(3), kt = 80, Ft = 32, Tt = [];
    for (const _t = new Date(S.a - Po); _t.getTime() < C.b + Po; _t.setDate(_t.getDate() + 1)) {
      const { rise: $t, set: oe } = Jl(h, new Date(_t));
      $t && oe && Tt.push({ rise: $t.getTime(), set: oe.getTime() });
    }
    const Bt = (_t, $t) => kt - (kt - Ft) * Math.sin(Math.PI * ($t - _t.rise) / (_t.set - _t.rise)), Yt = (_t) => !Tt.some(($t) => _t >= $t.rise && _t <= $t.set);
    let Vt = "", Nt = "", pe = "";
    Tt.forEach((_t, $t) => {
      const oe = [];
      for (let Pt = _t.rise; Pt <= _t.set; Pt += 15 * Dn) oe.push(bt(Pt) + "," + Bt(_t, Pt).toFixed(2));
      oe.push(bt(_t.set) + "," + kt), Vt += '<polyline class="wbLineArc" points="' + oe.join(" ") + '"/>';
      const fa = Tt[$t + 1];
      fa && (Vt += '<rect class="wbLineNight" x="' + bt(_t.set) + '" y="0" width="' + ((fa.rise - _t.set) / He).toFixed(3) + '" height="100"/>'), [[_t.rise, "↑"], [_t.set, "↓"]].forEach(([Pt, Be]) => {
        Pt < S.a || Pt > C.b || (Nt += '<line class="wbLineEdge" x1="' + bt(Pt) + '" x2="' + bt(Pt) + '" y1="0" y2="100"/>', pe += '<span class="wbLineTime" style="left:' + K(Pt) + '">' + Be + " " + Wt(bn(new Date(Pt), h)) + "</span>");
      });
    });
    const Zt = Tt.find((_t) => z >= _t.rise && z <= _t.set);
    return '<svg class="wbLineArt" viewBox="0 0 ' + nt + ' 100" preserveAspectRatio="none" aria-hidden="true">' + Vt + Nt + '<line class="wbLineHorizon" x1="0" x2="' + nt + '" y1="' + kt + '" y2="' + kt + '"/></svg>' + pe + (Zt ? '<span class="wbLineNow" style="left:' + K(z) + ";top:" + Bt(Zt, z) + '%">' + Rd("sunny", !1) + "</span>" : "") + R.filter((_t) => _t.entry && !_t.now).map((_t) => '<span class="wbLineGlyph' + _t.edge + '" style="left:' + K(_t.t) + '">' + Rd(_t.entry.condition ?? "cloudy", Yt(_t.t)) + "</span>").join("");
  }
  function Ut(h, S) {
    delete Y.hourly;
    const C = ot.hourlyView === "bars" ? "bars" : "strip", R = '<div class="wbHeader"><h2 class="wbTitle">' + Wt(C === "bars" ? Ht.nextDays : Ht.nextHours) + '</h2><div class="wbSegments wbViews" role="group" aria-label="' + Wt(Ht.showAs) + '">' + ["strip", "bars"].map((Pt) => '<button aria-pressed="' + (Pt === C) + '" data-wb="hourly-view" data-view="' + Pt + '" data-wb-focus="hourly-view-' + Pt + '">' + Wt(Ht.views[Pt]) + "</button>").join("") + "</div></div>";
    if (C === "bars") return Ea(h, S, R);
    const z = _("hourly"), K = Math.floor(Date.now() / Dn) * Dn, nt = z.filter((Pt) => new Date(Pt.datetime).getTime() > K - He);
    if (!nt.length) return "";
    const bt = ga(nt), kt = bt.includes(ot.hourlyMode) ? ot.hourlyMode : "temperature", Ft = Kt(h, z, K);
    if (!Ft.length) return "";
    const Tt = Ft[0], Bt = Ft[Ft.length - 1], Yt = (Tt.b - Tt.a) / He, Vt = (Pt) => "calc(var(--wb-u) * " + ((Pt - Tt.a) / He).toFixed(3) + ")", Nt = new Date(Tt.a);
    Nt.setHours(6, 0, 0, 0), Nt.getTime() > Tt.a && Nt.setDate(Nt.getDate() - 1);
    const pe = Math.ceil((Bt.b - Nt.getTime()) / Po);
    p !== "line" && (Y.hourly = { segs: fi(Nt, z, pe), seed: Nt.getDate(), columns: pe });
    const Zt = (Pt) => Pt === Tt.a ? " wbFirst" : Pt === Bt.b ? " wbLast" : "", _t = [];
    for (let Pt = Tt.a; Pt < Bt.b; ) {
      const Be = new Date(Pt);
      Be.setHours(24, 0, 0, 0);
      const Ze = Math.min(Be.getTime(), Bt.b);
      _t.push({ a: Pt, b: Ze, label: ue(h, { datetime: new Date(Pt).toISOString() }), page: Ft.find((Ca) => Ca.a >= Pt && Ca.a < Ze) || Ft.find((Ca) => Ca.a < Ze && Ca.b > Pt) }), Pt = Ze;
    }
    const $t = K > Tt.a && K < Bt.b ? Math.floor((K - Tt.a) / (2 * He)) * 2 : 0, oe = [];
    for (let Pt = Tt.a; Pt <= Bt.b; Pt += He) {
      const Be = new Date(Pt), Ze = Zt(Pt);
      !Ze && Be.getHours() % ef || !Ze && (Math.abs(Tt.a - Pt) < 2 * He || Math.abs(Bt.b - Pt) < 2 * He) || K >= Tt.a && Math.abs(Pt - K) < 1.5 * He && !Ze || oe.push({ t: Pt, edge: Ze, label: bn(Be, h), entry: Pt >= K - He ? z.find((Ca) => new Date(Ca.datetime).getTime() === Pt) : void 0 });
    }
    K > Tt.a && K < Tt.b && oe.push({ t: K, edge: K - Tt.a < He ? " wbFirst" : Tt.b - K < He ? " wbLast" : "", label: Ht.now, entry: nt[0], now: !0 });
    const fa = (Pt, Be) => '<span class="wbMark' + Pt.edge + (Pt.now ? " wbNowMark" : "") + '" style="left:' + Vt(Pt.t) + '">' + Be + "</span>";
    return '<div class="wbCard wbHc wbHourly">' + R + (bt.length > 1 ? '<div class="wbTabs"><div class="wbSegments" role="group">' + bt.map((Pt) => '<button aria-pressed="' + (Pt === kt) + '" data-wb="hourly-mode" data-mode="' + Pt + '" data-wb-focus="hourly-mode-' + Pt + '">' + Wt(Ht.modes[Pt]) + "</button>").join("") + "</div></div>" : "") + '<div class="wbStripScroll wbPaged" tabindex="0" aria-label="' + Wt(Ht.nextHours) + '" data-span="' + Yt + '" data-start="' + $t + '"><div class="wbStrip" style="--wb-u:calc(100cqw / ' + Yt + ");width:calc(var(--wb-u) * " + (Bt.b - Tt.a) / He + ')">' + // a stop every two hours (Matt, 1 Nov): a swipe settles on one, a flick runs on past several
    [...Array(Math.floor((Bt.b - Tt.a) / (2 * He)) + 1)].map((Pt, Be) => '<i class="wbSnap" style="left:' + Vt(Tt.a + Be * 2 * He) + '"></i>').join("") + '<div class="wbDays">' + _t.map((Pt, Be) => {
      var Ze;
      return '<span class="wbDaySpan" style="width:calc(var(--wb-u) * ' + ((Pt.b - Pt.a) / He).toFixed(3) + ')"><button class="wbDayName" data-wb="hours-day" data-hours="' + (Be === 0 ? $t : ((((Ze = Pt.page) == null ? void 0 : Ze.a) ?? Pt.a) - Tt.a) / He) + '" data-wb-focus="hours-day-' + Be + '">' + Wt(Pt.label) + "</button></span>";
    }).join("") + '</div><div class="wbRow wbTimes">' + oe.map((Pt) => fa(Pt, Wt(Pt.label))).join("") + "</div>" + (p === "line" ? '<div class="wbSky wbLineSky">' + Dt(h, Tt, Bt, oe, K, Vt) : '<div class="wbSky"><div class="wbSkyArt" style="left:' + Vt(Nt.getTime()) + ";width:calc(var(--wb-u) * " + pe * 24 + ')"><canvas data-wb-strip="hourly"' + (p === "smooth" ? "" : ' class="wbPixels"') + "></canvas></div>") + (K > Tt.a ? '<i class="wbPast" style="width:' + Vt(Math.min(K, Bt.b)) + '"></i><i class="wbNowLine" style="left:' + Vt(K) + '"></i>' : "") + _t.slice(1).map((Pt) => '<i class="wbMidnight" style="left:' + Vt(Pt.a) + '"></i>').join("") + '</div><div class="wbRow wbValues">' + oe.map((Pt) => {
      if (!Pt.entry) return "";
      const [Be, Ze] = Qi(h, Pt.entry, kt);
      return fa(Pt, '<span class="wbPrimaryV">' + Wt(Be) + '</span><span class="wbSecondary">' + Wt(Ze) + "</span>");
    }).join("") + "</div></div></div></div>";
  }
  function De(h) {
    const S = af, C = S.findIndex(([kt]) => kt >= h);
    if (C <= 0) return "rgb(" + S[C < 0 ? S.length - 1 : 0][1].join(",") + ")";
    const [R, z] = S[C - 1], [K, nt] = S[C], bt = (h - R) / (K - R);
    return "rgb(" + z.map((kt, Ft) => Math.round(kt + (nt[Ft] - kt) * bt)).join(",") + ")";
  }
  function Ea(h, S, C) {
    var Vt;
    const R = _("daily").filter((Nt) => je(Nt.templow) && je(Nt.temperature)).slice(0, 7);
    if (!R.length) return "";
    const z = Math.min(...R.map((Nt) => Number(Nt.templow))), K = Math.max(...R.map((Nt) => Number(Nt.temperature))), nt = Math.max(1, K - z), bt = (Nt) => Math.max(0, Math.min(100, (Nt - z) / nt * 100)).toFixed(2), kt = /F/.test(Pr(h, L(h, "daily"), "temperature")), Ft = (Nt) => kt ? (Nt - 32) / 1.8 : Nt, Tt = "linear-gradient(90deg," + [0, 0.25, 0.5, 0.75, 1].map((Nt) => De(Ft(z + Nt * nt)) + " " + Nt * 100 + "%").join(",") + ")", Bt = (Vt = wn(h, S, "temperature")) == null ? void 0 : Vt.value;
    return '<div class="wbCard wbHc wbHourly wbBars' + (ga(_("hourly").filter((Nt) => new Date(Nt.datetime).getTime() > Date.now() - He)).length > 1 ? " wbTabbed" : "") + '">' + C + '<div class="wbDayBars" role="list">' + R.map((Nt, pe) => {
      const Zt = ue(h, Nt), _t = ys(new Date(Nt.datetime), /* @__PURE__ */ new Date()), $t = Number(Nt.templow), oe = Number(Nt.temperature);
      return '<div class="wbDayBar" role="listitem" aria-label="' + Wt(Ka(Ht.rangeRow, { day: Zt, low: Qe(h, $t), high: Qe(h, oe) })) + '"><span class="wbRangeDay">' + Wt(Zt) + "</span>" + he(Nt.condition, 40, !1, "r" + pe) + '<span class="wbRangeLo">' + Wt(Qe(h, $t)) + '</span><span class="wbRangeTrack"><i class="wbRangeFill" style="background:' + Tt + ";clip-path:inset(0 " + (100 - bt(oe)) + "% 0 " + bt($t) + '% round 4px)"></i>' + (_t && je(Bt) ? '<i class="wbRangeNow" style="left:' + bt(Number(Bt)) + '%"></i>' : "") + '</span><span class="wbRangeHi">' + Wt(Qe(h, oe)) + "</span></div>";
    }).join("") + "</div></div>";
  }
  function co(h) {
    const S = U, { rise: C, set: R } = Jl(h, S), z = C && R ? Math.round((R.getTime() - C.getTime()) / Dn) : 0, K = Math.floor(z / 60), nt = z % 60, bt = C && R ? (S.getTime() - C.getTime()) / (R.getTime() - C.getTime()) : -1, kt = bt >= 0 && bt <= 1, Ft = Math.PI * (1 - Math.min(1, Math.max(0, bt))), Tt = 100 + 74 * Math.cos(Ft), Bt = 100 - 74 * Math.sin(Ft), Yt = kt ? Math.sin(Math.PI * bt) : 0, Vt = kt ? ll("#2e0a0d", "#43180a", Yt) : "#0e0507", Nt = kt ? ll("#7a1d12", "#8f400f", Yt) : "#1c0709", pe = ll("#f60c08", "#ff8f00", Yt), Zt = ll("#fd9b07", "#ffd84a", Yt), _t = kt ? ll("#fd9b07", "#ffd84a", Yt) : "#6b3a2a", $t = (Ze) => Ze ? bn(Ze, h) : "–", oe = C && R ? new Date((C.getTime() + R.getTime()) / 2) : null, fa = new Date(S);
    fa.setDate(fa.getDate() + 1);
    const Pt = Jl(h, fa), Be = Pt.rise && Pt.set ? Math.round((Pt.set.getTime() - Pt.rise.getTime()) / Dn) : 0;
    return xn({
      icon: Sa.sunny,
      name: Ht.sun,
      sub: z ? Ka(Ht.daylightShort, { hours: K, minutes: nt }) : void 0,
      callouts: [[Ht.callout.riseTomorrow, $t(Pt.rise)], [Ht.callout.setTomorrow, $t(Pt.set)], ...Be ? [[Ht.callout.dayTomorrow, Math.floor(Be / 60) + "h " + Be % 60 + "m"]] : []],
      zone: '<div class="wbSunSky" style="background:linear-gradient(180deg, ' + Vt + ", " + Nt + ");--wb-sun-line:" + _t + '"><svg viewBox="0 0 200 124" aria-hidden="true"><defs><radialGradient id="' + k + 'sun-glow"><stop offset="0" stop-color="' + pe + '"></stop><stop offset="0.45" stop-color="' + pe + '"></stop><stop offset="1" stop-color="' + Zt + '"></stop></radialGradient><clipPath id="' + k + 'above-horizon"><rect x="0" y="0" width="200" height="100"></rect></clipPath></defs><path class="wbSunPath" d="M 26 100 A 74 74 0 0 1 174 100"></path><line class="wbHorizon" x1="0" x2="200" y1="100" y2="100"></line>' + (kt ? '<circle cx="' + Tt + '" cy="' + Bt + '" r="14" fill="url(#' + k + 'sun-glow)" clip-path="url(#' + k + 'above-horizon)"></circle>' : "") + (oe ? '<text class="wbSunTime wbNoon" x="100" y="1">' + Wt($t(oe)) + "</text>" : "") + '<text class="wbSunTime" x="26" y="117">' + Wt($t(C)) + '</text><text class="wbSunTime" x="174" y="117">' + Wt($t(R)) + "</text></svg></div>"
    });
  }
  function Gt(h, S, C) {
    const R = (nt) => k + "moon-" + nt, z = h > 0.995 ? "" : '<path class="wbMoonNight" filter="url(#' + R("terminator") + ')" d="' + Yf(61, 61, 57.9, h) + '"' + (S ? ' transform="translate(122 0) scale(-1 1)"' : "") + "></path>", K = (nt, bt, kt, Ft, Tt, Bt) => '<filter id="' + R(nt) + '" x="0" y="0" width="100%" height="100%"><feTurbulence type="fractalNoise" baseFrequency="' + bt + '" numOctaves="' + kt + '" seed="' + Ft + '"></feTurbulence><feColorMatrix values="0.33 0.33 0.33 0 0 0.33 0.33 0.33 0 0 0.33 0.33 0.33 0 0 0 0 0 0 1"></feColorMatrix><feComponentTransfer>' + ["R", "G", "B"].map((Yt) => "<feFunc" + Yt + ' type="linear" slope="' + Tt + '" intercept="' + Bt + '"></feFunc' + Yt + ">").join("") + "</feComponentTransfer></filter>";
    return '<svg class="wbMoonArt" width="122" height="122" viewBox="0 0 122 122" aria-hidden="true"><defs><radialGradient id="' + R("fill") + '" cx="0.42" cy="0.38" r="0.68"><stop offset="0" stop-color="#ECECE8"></stop><stop offset="0.7" stop-color="#D2D2CD"></stop><stop offset="1" stop-color="#ACACA7"></stop></radialGradient><clipPath id="' + R("clip") + '"><circle cx="61" cy="61" r="54.9"></circle></clipPath><filter id="' + R("soften") + '" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="2.6"></feGaussianBlur></filter><filter id="' + R("glow") + '" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="1.2"></feGaussianBlur></filter><filter id="' + R("terminator") + '" x="-10%" y="-10%" width="120%" height="120%"><feGaussianBlur stdDeviation="1"></feGaussianBlur></filter>' + K("mottle", "0.045", 4, 3, 1.8, -0.4) + K("grain", "1.2", 2, 7, 2, -0.5) + '</defs><g clip-path="url(#' + R("clip") + ')"><circle cx="61" cy="61" r="54.9" fill="url(#' + R("fill") + ')"></circle><g' + (C ? ' transform="rotate(180 61 61)"' : "") + '><g class="wbMaria" filter="url(#' + R("soften") + ')">' + Xf.map(([nt, bt, kt, Ft, Tt, Bt]) => '<ellipse cx="' + nt + '" cy="' + bt + '" rx="' + kt + '" ry="' + Ft + '" fill-opacity="' + Bt + '" transform="rotate(' + Tt + " " + nt + " " + bt + ')"></ellipse>').join("") + "</g>" + Jf.map(([nt, bt, kt]) => '<circle class="wbCrater" cx="' + nt + '" cy="' + bt + '" r="' + kt + '"></circle>').join("") + '<g class="wbRays" filter="url(#' + R("glow") + ')">' + Qf.map(([nt, bt]) => '<line x1="54.4" y1="95" x2="' + nt + '" y2="' + bt + '"></line>').join("") + '</g><g class="wbBrightSpots" filter="url(#' + R("glow") + ')">' + Wc.map(([nt, bt, kt]) => '<circle cx="' + nt + '" cy="' + bt + '" r="' + kt * 2 + '"></circle>').join("") + "</g>" + Wc.map(([nt, bt, kt]) => '<circle class="wbBrightCenter" cx="' + nt + '" cy="' + bt + '" r="' + kt + '"></circle>').join("") + '</g><rect class="wbMottle" width="122" height="122" filter="url(#' + R("mottle") + ')"></rect><rect class="wbGrain" width="122" height="122" filter="url(#' + R("grain") + ')"></rect>' + z + '</g><circle cx="61" cy="61" r="54.9" fill="none" stroke="#B4B4B4" stroke-width="0.2"></circle></svg>';
  }
  function ne(h) {
    const S = wt, C = dd(h), R = (C == null ? void 0 : C.lat) ?? 0, z = Ff(S), K = Fc(h), nt = K ? h.states[K] : void 0, bt = Hr(nt) && mf.includes(nt.state) ? nt.state : Of(z.phase), { rise: kt, set: Ft } = C ? Hf(S, C.lat, C.lon) : {}, Tt = z.phase > 0.5 != R < 0, Bt = na(Math.round(z.fraction * 100), h.locale) + "%", Yt = kt ?? Ft;
    return Yt && bn(Yt, h), xn({
      icon: Sa.night,
      name: Ht.moon,
      sub: Ht.phases[bt],
      callouts: [...kt ? [[Ht.callout.moonrise, bn(kt, h)]] : [], ...Ft ? [[Ht.callout.moonset, bn(Ft, h)]] : [], [Ht.callout.lit, Bt]],
      zone: '<div class="wbMoonBox">' + Gt(z.fraction, Tt, R < 0) + "</div>"
    });
  }
  function ea(h, S) {
    var Nt;
    const C = wn(h, S, "wind_speed");
    if (!C || !je(C.value)) return "";
    const R = wn(h, S, "wind_gust_speed"), z = wn(h, S, "wind_bearing"), K = z && je(z.value) ? Number(z.value) : void 0, nt = zf(Number(C.value), (Nt = C.stateObj.attributes) == null ? void 0 : Nt.wind_speed_unit), bt = od(h, C.stateObj, "wind_speed", C.value), kt = K !== void 0 ? Ht.cardinal[hf[((K + 11.25) / 22.5 | 0) % 16]] : void 0, Ft = R ? Pc(h, R.stateObj, "wind_gust_speed", R.value) : void 0, Tt = [kt ? Ka(Ht.windFrom, { direction: kt }) : void 0, nt !== void 0 ? nt + " " + Ht.beaufort : void 0].filter(Boolean).join(" · ") || Ft, Bt = (pe, Zt) => {
      const _t = (pe - 90) * Math.PI / 180;
      return [100 + Zt * Math.cos(_t), 100 + Zt * Math.sin(_t)];
    }, Yt = Array.from({ length: 36 }, (pe, Zt) => Zt * 10).map((pe) => {
      const Zt = pe % 90 === 0, [_t, $t] = Bt(pe, 97), [oe, fa] = Bt(pe, Zt ? 83 : 89);
      return '<line class="wbTick' + (Zt ? " wbMajor" : "") + '" x1="' + _t + '" y1="' + $t + '" x2="' + oe + '" y2="' + fa + '"></line>';
    }).join(""), Vt = [["n", 0], ["e", 90], ["s", 180], ["w", 270]].map(([pe, Zt]) => {
      const [_t, $t] = Bt(Zt, 64);
      return '<text class="wbLetter' + (pe === "n" ? " wbNorth" : "") + '" x="' + _t + '" y="' + $t + '">' + Wt(Ht.cardinal[pe]) + "</text>";
    }).join("");
    return xn({ icon: Sa.windy, name: Ht.wind, sub: Tt, cls: "wbWind", visual: '<svg viewBox="0 0 200 200" aria-hidden="true">' + Yt + Vt + (K !== void 0 ? '<path class="wbMarker" transform="rotate(' + K + ' 100 100)" d="M 100 24 L 91 5 L 109 5 Z"></path>' : "") + '<circle class="wbDisc" cx="100" cy="100" r="46"></circle><text class="wbSpeed" x="100" y="102">' + Wt(bt.number) + '</text><text class="wbSpeedUnit" x="100" y="124">' + Wt(bt.unit) + "</text></svg>" });
  }
  const Wn = (h, S) => {
    if (h < 3) return Ht.advice.fine;
    if (h < 8) return Ht.advice.sunblock;
    const C = Date.now(), R = _("hourly").find((z) => z.uv_index != null && new Date(z.datetime).getTime() > C && z.uv_index < 6);
    return R && new Date(R.datetime).toDateString() === (/* @__PURE__ */ new Date()).toDateString() ? Ka(Ht.advice.avoidUntil, { time: bn(new Date(R.datetime), S) }) : Ht.advice.avoidToday;
  };
  function ja(h, S) {
    const C = wn(h, S, "uv_index");
    if (!C || !je(C.value)) return "";
    const R = Number(C.value), z = Ht.uvLevel[Ic(R)], K = /* @__PURE__ */ new Date();
    K.setHours(23, 59, 59, 999);
    const nt = _("hourly").filter((Tt) => Tt.uv_index != null && new Date(Tt.datetime) > /* @__PURE__ */ new Date() && new Date(Tt.datetime) <= K).reduce((Tt, Bt) => !Tt || Bt.uv_index > Tt.uv ? { uv: Bt.uv_index, time: new Date(Bt.datetime) } : Tt, void 0), bt = gf[Ic(R)], kt = 216 * Math.min(1, Math.max(0.08, 0.4 + (R - 4.5) * (0.5 / 5.5))), Ft = '<svg class="wbUvArt" viewBox="0 0 216 198" preserveAspectRatio="xMinYMin slice" aria-hidden="true"><defs><radialGradient id="' + k + 'uv-sun" gradientUnits="userSpaceOnUse" cx="0" cy="0" r="' + kt.toFixed(1) + '"><stop offset="0" style="stop-color:color-mix(in srgb, ' + bt + ' 28%, #fff6dd)"></stop><stop offset=".62" style="stop-color:color-mix(in srgb, ' + bt + ' 62%, #fff6dd)"></stop><stop offset="1" style="stop-color:' + bt + '"></stop></radialGradient></defs><circle class="wbUvSun" cx="0" cy="0" r="' + kt.toFixed(1) + '" fill="url(#' + k + 'uv-sun)"></circle></svg><div class="wbUvBig"><span class="wbUvNum">' + Wt(na(Math.round(R), h.locale)) + '</span><span class="wbUvWord">' + Wt(z) + "</span></div>";
    return xn({
      icon: Sa.sunnyAlert,
      name: Ht.metrics.uv_index,
      sub: nt && nt.uv > R ? Ka(Ht.uvPeak, { level: z, uv_index: na(Math.round(nt.uv), h.locale), time: bn(nt.time, h) }) : z,
      zone: Ft,
      cls: "wbUv",
      callouts: [Wn(R, h), [Ht.callout.now, na(Math.round(R), h.locale) + " · " + z], [Ht.callout.peak, nt && nt.uv > R ? na(Math.round(nt.uv), h.locale) + " at " + bn(nt.time, h) : Ht.callout.now]]
    });
  }
  function Xe(h) {
    const S = _("daily")[0], C = St.temperatureHistory;
    if (!S || new Date(S.datetime).toDateString() !== (/* @__PURE__ */ new Date()).toDateString() || !je(S.temperature) || !C || C.dailyHighs.length < df) return "";
    const R = Number(S.temperature), z = C.dailyHighs.reduce((Zt, _t) => Zt + _t, 0) / C.dailyHighs.length, K = Math.round(R - z) || 0, nt = K > 0 ? "above" : K < 0 ? "below" : "same", bt = [...C.days, { date: /* @__PURE__ */ new Date(), high: R, today: !0 }], kt = bt.map((Zt) => Zt.high).concat(z), Ft = Math.min(...kt) - 1, Tt = Math.max(...kt) + 1, Bt = (Zt) => (1 - (Zt - Ft) / (Tt - Ft)) * 100, Yt = (Zt) => (Zt + 0.5) / bt.length * 100, Vt = bt.map((Zt, _t) => [Yt(_t), Bt(Zt.high)]), Nt = Vt.map(([Zt, _t], $t) => ($t ? "L" : "M") + Zt.toFixed(2) + " " + _t.toFixed(2)).join(""), pe = '<div class="wbCompareBars wbTrend" aria-hidden="true"><div class="wbTrendPlot"><svg viewBox="0 0 100 100" preserveAspectRatio="none"><defs><linearGradient id="' + k + 'trend" x1="0" y1="0" x2="0" y2="1"><stop offset="0" style="stop-color:var(--primary)" stop-opacity=".28"></stop><stop offset="1" style="stop-color:var(--primary)" stop-opacity="0"></stop></linearGradient></defs><path class="wbTrendArea" d="' + Nt + "L" + Vt[Vt.length - 1][0].toFixed(2) + " 100L" + Vt[0][0].toFixed(2) + ' 100Z" fill="url(#' + k + 'trend)"></path><line class="wbAvgLine" x1="0" x2="100" y1="' + Bt(z).toFixed(2) + '" y2="' + Bt(z).toFixed(2) + '" vector-effect="non-scaling-stroke"></line><path class="wbTrendLine" d="' + Nt + '" vector-effect="non-scaling-stroke"></path></svg><span class="wbTrendAvg" style="top:' + Bt(z).toFixed(2) + '%">' + Wt(Qe(h, z)) + "</span>" + bt.map((Zt, _t) => {
      const $t = Zt.today ? " wbToday" : "", oe = "left:" + Yt(_t).toFixed(2) + "%;top:" + Bt(Zt.high).toFixed(2) + "%";
      return '<i class="wbTrendDot' + $t + '" style="' + oe + '"></i><span class="wbAvgValue' + $t + '" style="' + oe + '">' + Wt(Qe(h, Zt.high)) + "</span>";
    }).join("") + '</div><div class="wbTrendDays">' + bt.map((Zt, _t) => '<span class="wbAvgDay' + (Zt.today ? " wbToday" : "") + '" style="left:' + Yt(_t).toFixed(2) + '%">' + Wt(Af(Zt.date, h)) + "</span>").join("") + "</div></div>";
    return xn({
      icon: Sa.chartLine,
      name: Ht.metrics.compared_to_average,
      double: !0,
      sub: Ka(Ht.highsLastDays, { days: C.days.length }),
      visual: '<div class="wbCompare"><div class="wbCompareText"><div class="wbCompareNumber">' + (K > 0 ? "+" : "") + Wt(Qe(h, K)) + '</div><div class="wbCompareWords">' + Wt(Ht.average[nt]) + '</div><div class="wbCompareTemps">' + Wt(Ka(Ht.todayVsAverage, { today: Qe(h, R), average: Qe(h, z) })) + "</div></div>" + pe + "</div>"
    });
  }
  function hi(h, S) {
    const C = wn(h, S, "humidity");
    if (!C || !je(C.value)) return "";
    const R = wn(h, S, "dew_point"), z = Math.max(0, Math.min(100, Number(C.value)));
    return xn({
      icon: Sa.waterPercent,
      name: Ht.metrics.humidity,
      sub: R && je(R.value) ? Ka(Ht.dewPoint, { dew_point: Qe(h, R.value) }) : void 0,
      backdrop: '<div class="wbWater" style="height:' + z + '%"><div class="wbMist"></div><div class="wbBody"></div><div class="wbHaze wbOne"></div><div class="wbHaze wbTwo"></div></div>',
      visual: '<div class="wbWaterValue">' + Yi(na(Math.round(Number(C.value)), h.locale), "%") + "</div>"
    });
  }
  function ca(h, S) {
    var Zt, _t, $t;
    const C = wn(h, S, "pressure");
    if (!C || !je(C.value)) return "";
    const R = Number(C.value), z = (Zt = C.stateObj.attributes) == null ? void 0 : Zt.pressure_unit, K = Hc(R, z), nt = ((_t = St.pressureHistory) == null ? void 0 : _t.entityId) === C.stateObj.entity_id ? Hc(St.pressureHistory.value, z) : void 0;
    let bt;
    if (K !== void 0 && nt !== void 0) {
      const oe = K - nt;
      bt = oe >= Lc ? "rising" : oe <= -Lc ? "falling" : "steady";
    }
    const kt = od(h, C.stateObj, "pressure", Math.round(R)), Ft = C.stateObj, Tt = (oe) => z === "inHg" ? Math.round(oe * 100) / 100 : Math.round(oe), Bt = (oe) => Pc(h, Ft, "pressure", Tt(oe)), Yt = nt !== void 0 ? St.pressureHistory.value : void 0, Vt = Yt !== void 0 ? Tt(R - Yt) : void 0, Nt = ($t = Ft.entity_id) != null && $t.startsWith("weather.") ? _("hourly").find((oe) => je(oe.pressure) && new Date(oe.datetime).getTime() >= Date.now() + 3 * He - 30 * Dn) : void 0, pe = [
      ...bt ? [Ht.advice[bt]] : [],
      ...Yt !== void 0 ? [[Ht.callout.hoursAgo, Bt(Yt)], [Ht.callout.change, (Vt > 0 ? "+" : Vt < 0 ? "−" : "") + Bt(Math.abs(Vt))]] : [],
      ...Nt ? [[Ht.callout.inHours, Bt(Number(Nt.pressure))]] : []
    ];
    return xn({
      icon: Sa.gauge,
      name: Ht.metrics.pressure,
      sub: bt ? Ht.pressure[bt] : void 0,
      cls: "wbPressure",
      callouts: pe,
      zone: '<div class="wbTapeRow"><div class="wbTapeValue">' + Yi(kt.number) + '<span class="wbTapeUnit">' + Wt(kt.unit) + "</span></div>" + (K !== void 0 ? po(h, K) : "") + "</div>"
    });
  }
  function po(h, S) {
    const z = Math.floor(S) - 11;
    return '<svg class="wbTape" viewBox="0 0 76 200" preserveAspectRatio="xMaxYMid meet" aria-hidden="true">' + Array.from({ length: 24 }, (K, nt) => z + nt).map((K) => {
      const nt = 100 - (K - S) * 9;
      if (nt < 22 || nt > 178) return "";
      const bt = K % 5 === 0;
      return '<g opacity="' + Math.max(0.15, 1 - Math.abs(nt - 100) / 100) + '"><line class="wbTapeTick" x1="' + (bt ? 2 : 8) + '" x2="26" y1="' + nt + '" y2="' + nt + '"></line>' + (bt ? '<text class="wbTapeLabel" x="33" y="' + nt + '">' + Wt(na(K, h.locale, { useGrouping: !1 })) + "</text>" : "") + "</g>";
    }).join("") + '<text class="wbTapeEnd" x="14" y="8">' + Wt(Ht.high) + '</text><text class="wbTapeEnd" x="14" y="192">' + Wt(Ht.low) + '</text><line class="wbTapeMarker" x1="0" x2="30" y1="100" y2="100"></line></svg>';
  }
  function uo(h) {
    var kt, Ft;
    const S = Id(h), C = S ? h.states[S] : void 0;
    if (!C || ((kt = St.rain) == null ? void 0 : kt.entityId) !== S || !je(St.rain.change)) return "";
    const R = ((Ft = C.attributes) == null ? void 0 : Ft.unit_of_measurement) ?? "", z = L(h, "hourly"), K = Date.now() + Po, nt = _("hourly").filter((Tt) => Tt.precipitation != null && new Date(Tt.datetime).getTime() <= K), bt = nt.reduce((Tt, Bt) => Tt + Number(Bt.precipitation), 0);
    return xn({
      icon: Sa.rainy,
      name: Ht.metrics.precipitation,
      sub: z && nt.length ? Ka(Ht.rainExpected, { amount: na(bt, h.locale, { maximumFractionDigits: 1 }) + " " + Pr(h, z, "precipitation") }) : Ht.rainLast24h,
      visual: Yi(na(St.rain.change, h.locale, { maximumFractionDigits: 1 }), R) + (nt.length > 1 ? $f(nt.map((Tt) => ({ label: "", value: Number(Tt.precipitation) }))) : "")
    });
  }
  function fo(h, S) {
    const C = wn(h, S, "visibility");
    if (!C || !je(C.value)) return "";
    const R = od(h, C.stateObj, "visibility", C.value), z = Xu(Number(C.value), Pr(h, C.stateObj, "visibility"));
    return xn({
      icon: Sa.eyeOutline,
      name: Ht.metrics.visibility,
      sub: Ht.visibilityLevel[Ju(z)],
      visual: '<div class="wbSea"><canvas class="wbSeaArt" data-wb-sea="' + z + '" aria-hidden="true"></canvas><div class="wbSeaFact">' + Wt(pa(h, z)) + '</div><div class="wbSeaValue">' + Yi(R.number, R.unit) + "</div></div>"
    });
  }
  function pa(h, S) {
    var K;
    const C = $u((K = h.config) == null ? void 0 : K.country, S);
    if (C) return Ka(Ht.visibilityLandmarks, { from: C.from, to: C.to });
    const R = S / uf * 60;
    if (R < 60) {
      const nt = R < 5 ? Math.max(1, Math.round(R)) : 5 * Math.round(R / 5);
      if (nt < 60) return Ka(Ht.walkMinutes, { minutes: na(nt, h.locale) });
    }
    const z = Math.max(1, Math.round(R / 30) / 2);
    return z < 8 ? Ka(Ht.walkHours, { hours: na(z, h.locale) }) : Ht.walkDay;
  }
  function Bn(h) {
    St.categories === void 0 && pi(h);
    const S = Rt(h), C = (kt) => kt.map((Ft) => h.states[Ft]).filter(Hr), R = C(S.air), z = C(S.pollen);
    if (!R.length && !z.length) return "";
    const K = [...R, ...z], nt = (kt) => z.includes(kt) ? Sa.flower : Sa.airFilter, bt = K.find((kt) => kt.entity_id === ot.aq);
    return bt ? mi(h, bt, nt(bt)) : '<div class="wbCard wbHc wbAq"><div class="wbHeader"><h2 class="wbTitle">' + Wt(Ht.airQuality) + '</h2></div><div class="wbAqTiles">' + K.map((kt) => '<button class="wbTile" data-wb="aq-open" data-entity="' + Wt(kt.entity_id) + '"><span class="wbChip">' + Ms(nt(kt)) + '</span><span class="wbText"><span class="wbName">' + Wt(sl(h, kt)) + '</span><span class="wbSub">' + Wt(Nr(h, kt)) + "</span></span></button>").join("") + "</div></div>";
  }
  function mi(h, S, C) {
    var Tt, Bt, Yt;
    const R = ((Tt = S.attributes) == null ? void 0 : Tt.unit_of_measurement) ?? "", z = ((Bt = S.attributes) == null ? void 0 : Bt.device_class) === "pm25" && R === Ec && je(S.state), K = Number(S.state), nt = z ? Pd(K) : void 0, bt = ((Yt = St.aqHistory) == null ? void 0 : Yt.entityId) === S.entity_id ? St.aqHistory.points : void 0, kt = (Vt) => Math.min(100, Math.max(0, Vt / Xl * 100));
    let Ft;
    if (bt && bt.length > 1) Ft = Kf(bt, (Vt) => (na(Vt, h.locale, { maximumFractionDigits: 1 }) + " " + R).trim());
    else if (nt) {
      let Vt = 0;
      const Nt = Sp.map(([pe, Zt]) => {
        const _t = kt(Math.min(Zt, Xl)), $t = vf[pe] + " " + Vt + "% " + _t + "%";
        return Vt = _t, $t;
      });
      Ft = '<div class="wbScale" role="meter" aria-label="' + Wt(Ht.fineParticles) + '" aria-valuemin="0" aria-valuemax="' + Xl + '" aria-valuenow="' + K + '" style="background:linear-gradient(to right, ' + Nt.join(", ") + ')"><i style="left:' + kt(K) + '%"></i></div><div class="wbGraphNote"><span>0</span><span>' + Xl + " " + Ec + "</span></div>";
    } else Ft = '<span class="wbGraphNote"><span>' + Wt(Nr(h, S)) + "</span></span>";
    return '<div class="wbCard wbHc wbAq wbAqOpen"><div class="wbOpen"><div class="wbOpenHead"><span class="wbChip">' + Ms(C) + '</span><span class="wbText"><span class="wbName">' + Wt(sl(h, S)) + '</span><span class="wbSub">' + Wt(Nr(h, S)) + (nt ? " · " + Wt(Ht.aqLevel[nt]) : "") + '</span></span><button class="wbBack" title="' + Wt(Ht.back) + '" data-wb="aq-close">' + Ms(Sa.back) + '</button></div><div class="wbGraph">' + Ft + "</div></div></div>";
  }
  const tr = { good: "Good", fair: "Fair", moderate: "Moderate", poor: "Poor", very_poor: "Very poor", extremely_poor: "Extremely poor" }, Ja = (h) => h <= 50 ? "Good" : h <= 100 ? "Moderate" : h <= 150 ? "Unhealthy for some" : h <= 200 ? "Unhealthy" : h <= 300 ? "Very unhealthy" : "Hazardous";
  function Or(h) {
    const S = /* @__PURE__ */ new Map();
    return Object.values(h.states || {}).filter((C) => {
      var R;
      return C.entity_id.startsWith("sensor.") && sd.includes(((R = C.attributes) == null ? void 0 : R.device_class) ?? "") && Hr(C) && Cs(h, C.entity_id);
    }).sort((C, R) => C.entity_id.localeCompare(R.entity_id)).forEach((C) => {
      S.has(C.attributes.device_class) || S.set(C.attributes.device_class, C);
    }), sd.map((C) => S.get(C)).filter(Boolean);
  }
  const qn = (h) => Object.values(h.states || {}).filter((S) => {
    var C, R;
    return S.entity_id.startsWith("sensor.") && Hr(S) && Cs(h, S.entity_id) && (((R = (C = h.entities) == null ? void 0 : C[S.entity_id]) == null ? void 0 : R.translation_key) ?? S.entity_id).toLowerCase().includes("pollen");
  }), kn = ["none", "very_low", "low", "moderate", "high", "very_high"], ho = (h) => je(h.state) ? Number(h.state) : kn.indexOf(String(h.state).toLowerCase().replace(/ /g, "_")), Mn = (h) => {
    const S = String(h).replace(/_/g, " ");
    return S[0].toUpperCase() + S.slice(1);
  }, er = (h, S, C) => {
    const R = C ? h === "aqi" ? S <= 50 ? "good" : S <= 100 ? "moderate" : "poor" : h === "pm25" ? Pd(S) : null : null;
    return R === "good" || R === "fair" ? Ht.advice.window : R === "moderate" || R === null ? Ht.advice.fine : Ht.advice.closed;
  };
  function Rn(h) {
    const S = Or(h), C = S[0];
    if (!C) return xn({ icon: Sa.airFilter, name: Ht.airQuality, sub: Ht.noAir, visual: Yi("–", ""), cls: "wbBase" });
    const R = C.attributes.device_class, z = Number(C.state), K = je(C.state), nt = R === "aqi" && K ? Ja(z) : R === "pm25" && K ? tr[Pd(z)] : Nr(h, C);
    return xn({
      icon: Sa.airFilter,
      name: Ht.airQuality,
      sub: nt,
      cls: "wbBase",
      zone: Yi(K ? na(Math.round(z), h.locale) : String(C.state), R === "aqi" ? "AQI" : C.attributes.unit_of_measurement || ""),
      callouts: [er(R, z, K), ...S.slice(1, 3).map((bt) => [sl(h, bt), Nr(h, bt)])]
    });
  }
  const Te = [
    ["wbSeed", '<svg viewBox="0 0 22 30" aria-hidden="true"><path d="M11 28V11" fill="none" stroke="currentColor" stroke-width="1"></path><path d="M11 11L3 6M11 11L5 2.5M11 11L8.5 1M11 11L13.5 1M11 11L17 2.5M11 11L19 6" fill="none" stroke="currentColor" stroke-width=".8" stroke-linecap="round"></path><circle cx="11" cy="28.5" r="1.4" fill="currentColor"></circle></svg>'],
    ["wbGrain", '<svg viewBox="0 0 12 12" aria-hidden="true"><circle cx="6" cy="6" r="3.3" fill="currentColor"></circle><path d="M6 1.2v1.4M6 9.4v1.4M1.2 6h1.4M9.4 6h1.4M2.6 2.6l1 1M8.4 8.4l1 1M2.6 9.4l1-1M8.4 3.6l1-1" stroke="currentColor" stroke-width=".9" stroke-linecap="round"></path></svg>'],
    ["wbStem", '<svg viewBox="0 0 10 30" aria-hidden="true"><path d="M5 29Q3.6 18 5 8" fill="none" stroke="currentColor" stroke-width="1"></path><ellipse cx="5" cy="6" rx="2.3" ry="4.6" fill="currentColor"></ellipse></svg>']
  ], mo = (h) => {
    const S = [1, 3, 5, 7, 10, 13][Math.max(0, Math.min(5, Number.isFinite(h) ? Math.round(h) : 0))];
    return '<div class="wbPollenAir" aria-hidden="true">' + Array.from({ length: S }, (C, R) => {
      const [z, K] = Te[R % 3], nt = 10 + R * 7 % 9, bt = 2.6 + R * 5 % 4 * 0.4;
      return '<span class="wbFloat ' + z + '" style="top:' + (4 + R * 37 % 52) + "%;--x:" + (R * 29 % 90 + 4) + "%;--s:" + (0.8 + R * 13 % 5 / 10).toFixed(1) + ";animation-duration:" + nt + "s;animation-delay:-" + (R * 2.3 % nt).toFixed(1) + 's"><span class="wbPush"><span class="wbBob" style="animation-duration:' + bt.toFixed(1) + "s;animation-delay:-" + (R * 0.7 % bt).toFixed(1) + 's">' + K + "</span></span></span>";
    }).join("") + "</div>";
  };
  function oa(h) {
    const S = qn(h).sort((z, K) => ho(K) - ho(z));
    if (!S.length) return xn({ icon: Sa.flower, name: Ht.pollen, sub: Ht.noPollen, visual: Yi("–", ""), cls: "wbBase" });
    const C = S[0], R = (z) => je(z.state) ? Nr(h, z) : Mn(z.state);
    return xn({
      icon: Sa.flower,
      name: Ht.pollen,
      sub: sl(h, C) + " · " + R(C),
      cls: "wbBase wbPollen",
      zone: mo(ho(C)) + Yi(R(C), ""),
      callouts: S.slice(0, 3).map((z) => [sl(h, z), R(z)])
    });
  }
  function ar(h) {
    const S = Date.now(), C = _("hourly").filter((K) => {
      const nt = new Date(K.datetime).getTime();
      return nt > S - He && nt < S + 12 * He;
    }), R = C.find((K) => (K.precipitation_probability ?? 0) >= 50 || (K.precipitation ?? 0) >= 0.2), z = R ? Ka(Ht.rainFrom, { time: bn(new Date(Math.max(S, new Date(R.datetime).getTime())), h) }) : C.length ? Ht.noRain12 : void 0;
    return xn({ icon: Sa.radar, name: Ht.rainRadar, sub: z, cls: "wbBase", visual: '<div class="wbRadar" aria-hidden="true"><i class="wbRadarRing"></i><i class="wbRadarHome"></i></div>' });
  }
  const _a = {
    current: Fr,
    hourly: Ut,
    sun: co,
    moon: ne,
    wind: ea,
    uv_index: ja,
    compared_to_average: Xe,
    humidity: hi,
    pressure: ca,
    precipitation: uo,
    visibility: fo,
    air_quality: Bn,
    aq_tile: Rn,
    pollen_tile: oa,
    radar_tile: ar
  };
  function Ve(h) {
    var Ft, Tt, Bt;
    const S = d == null ? void 0 : d();
    if (!S || V) return;
    const C = La(S);
    ft(S, C), St.lastFetch || se();
    const R = Rt(S), z = Fc(S), K = Id(S), nt = [
      ...C.map((Yt) => S.states[Yt]),
      S.states["sun.sun"],
      z && S.states[z],
      K && S.states[K],
      ...R.air.map((Yt) => S.states[Yt]),
      ...R.pollen.map((Yt) => S.states[Yt]),
      ...Z.some((Yt) => ut.includes(Yt)) ? [...Or(S), ...qn(S)] : [],
      S.locale,
      S.config,
      S.entities,
      Math.floor(Date.now() / Dn)
    ];
    if (!h && W && nt.length === W.length && nt.every((Yt, Vt) => Yt === W[Vt])) return;
    W = nt;
    const bt = B.getRootNode(), kt = bt.activeElement || document.activeElement;
    for (const Yt of Z) {
      const Vt = Q[Yt];
      let Nt = "";
      try {
        Nt = _a[Yt](S, C) || "";
      } catch {
        Nt = "";
      }
      if (Nt === Vt.html) continue;
      const pe = kt && Vt.el.contains(kt) ? (Ft = kt.dataset) == null ? void 0 : Ft.wbFocus : void 0, Zt = Vt.el.querySelector(".wbStripScroll"), _t = Zt ? Zt.scrollLeft : null;
      Vt.html = Nt, Vt.el.hidden = !Nt, Vt.el.innerHTML = Nt;
      const $t = Vt.el.querySelector(".wbStripScroll");
      $t && _t != null ? $t.scrollTo({ left: _t }) : $t != null && $t.dataset.start && $t.scrollTo({ left: Number($t.dataset.start) * $t.clientWidth / Number($t.dataset.span) }), pe && !tt && ((Tt = Vt.el.querySelector('[data-wb-focus="' + pe + '"]')) == null || Tt.focus());
    }
    tt && ((Bt = B.querySelector('[data-wb-focus="' + tt + '"]')) == null || Bt.focus(), tt = null), Vn(performance.now());
  }
  function ua() {
    gt || V || (gt = !0, queueMicrotask(() => {
      gt = !1, Ve(!0);
    }));
  }
  function Wr() {
    const h = getComputedStyle(B), S = (nt) => h.getPropertyValue(nt).trim(), C = {};
    [["skyClearDay", "--wx-clear"], ["skyClearNight", "--wx-night"], ["skyCloudyDay", "--wx-cloudy"], ["cloudDay", "--wx-cloud-bright"], ["cloudNight", "--wx-cloudy"], ["rain", "--primary"]].forEach(([nt, bt]) => {
      S(bt) && (C[nt] = S(bt));
    });
    const R = S("--color-text-primary") || "#f1f1f1", z = S("--color-bg-card") || "#222222", K = !!B.closest(".light");
    return { colors: { ...hn, ...C }, ink: K ? R : z, paper: K ? z : R };
  }
  const gi = (h, S) => {
    var C;
    h.width !== S.w && (h.width = S.w), h.height !== S.h && (h.height = S.h), (C = h.getContext("2d")) == null || C.putImageData(new ImageData(S.data, S.w, S.h), 0, 0);
  }, jn = () => g && !Sf();
  function zn(h, S) {
    B.querySelectorAll("canvas[data-wb-strip]").forEach((C) => Ia(C, Y[C.dataset.wbStrip], h, S));
  }
  function Ia(h, S, C, R) {
    if (!S || !h.getClientRects().length) return;
    const z = h.clientWidth, K = h.clientHeight;
    if (!z || !K) return;
    const nt = { width: z, height: K, columns: S.columns || Cc, colors: R.colors, clock: C, ambient: jn(), seed: S.seed, soft: 1.5 };
    if (p === "smooth") {
      const bt = Math.min(2, window.devicePixelRatio || 1), kt = Math.round(z * bt), Ft = Math.round(K * bt);
      h.width !== kt && (h.width = kt), h.height !== Ft && (h.height = Ft);
      const Tt = h.getContext("2d");
      if (!Tt) return;
      Tt.setTransform(bt, 0, 0, bt, 0, 0), Bu(Tt, S.segs, nt);
    } else gi(h, Du(S.segs, { ...nt, px: 2, oneBit: p === "onebit", ink: R.ink, paper: R.paper }));
  }
  function Vn(h) {
    if (V) return;
    const S = Wr();
    if (p !== "smooth") {
      const C = jn();
      B.querySelectorAll("canvas[data-wb-wx]").forEach((R) => {
        R.getClientRects().length && gi(R, up(Kd(R.dataset.wbWx, S.colors), { size: Number(R.dataset.size) || 40, px: 2, oneBit: p === "onebit", colors: S.colors, ink: S.ink, paper: S.paper, clock: h, idle: C }));
      });
    }
    B.querySelectorAll("canvas[data-wb-sea]").forEach((C) => {
      const R = C.clientWidth, z = C.clientHeight, K = Number(C.dataset.wbSea), nt = R + "x" + z + ":" + K + ":" + S.colors.skyClearDay;
      !R || !z || !(K > 0) || C.dataset.painted === nt || (C.dataset.painted = nt, gi(C, Yu(R, z, K, S.colors)));
    }), zn(h, S);
  }
  function nr(h) {
    if (dt = 0, !(V || !jn())) {
      if (!document.hidden)
        if (p === "smooth") zn(h, Wr());
        else {
          const S = Math.floor(h / 100);
          S !== st && (st = S, Vn(h));
        }
      dt = requestAnimationFrame(nr);
    }
  }
  function Ue() {
    B.classList.toggle("wbMotion", jn()), !dt && !V && jn() && (dt = requestAnimationFrame(nr));
  }
  function Qa(h) {
    var C, R;
    const S = (R = (C = h.target).closest) == null ? void 0 : R.call(C, "[data-wb]");
    if (!(!S || !B.contains(S))) {
      switch (S.dataset.wb) {
        case "day": {
          ot.openDay = Number(S.dataset.index), ot.opener = S.dataset.wbFocus, tt = "back-day";
          const z = la()[ot.openDay], K = !St.todayHistory || St.todayHistory.day !== (/* @__PURE__ */ new Date()).toDateString() || Date.now() - St.todayHistory.fetched > tf;
          z && ys(new Date(z.datetime), /* @__PURE__ */ new Date()) && K && ta();
          break;
        }
        case "close-day":
          ot.openDay = void 0, tt = ot.opener, ot.opener = void 0;
          break;
        case "open-page":
          x == null || x();
          return;
        case "day-mode":
          ot.dayMode = S.dataset.mode;
          break;
        case "hourly-mode":
          ot.hourlyMode = S.dataset.mode;
          break;
        case "hourly-view":
          ot.hourlyView = S.dataset.view;
          try {
            localStorage.setItem(et, ot.hourlyView);
          } catch {
          }
          break;
        case "hours-day": {
          const z = B.querySelector(".wbStripScroll");
          z && z.scrollTo({ left: Number(S.dataset.hours) * z.clientWidth / Number(z.dataset.span), behavior: "smooth" });
          return;
        }
        case "aq-open":
          ot.aq = S.dataset.entity, Se(ot.aq);
          break;
        case "aq-close":
          ot.aq = void 0;
          break;
        default:
          return;
      }
      Ve(!0);
    }
  }
  function ye(h) {
    var S, C;
    h.key === "Escape" && ot.openDay !== void 0 && ((C = (S = h.target).closest) != null && C.call(S, '[data-wb-open="day"]')) && (ot.openDay = void 0, tt = ot.opener, ot.opener = void 0, Ve(!0));
  }
  let tn = null;
  function go(h) {
    var C, R;
    const S = (R = (C = h.target).closest) == null ? void 0 : R.call(C, ".wbStripScroll");
    !S || h.button !== 0 || (tn = { startX: h.pageX, left: S.scrollLeft, moved: !1 }, S.classList.add("wbHeld"), window.addEventListener("mousemove", vi), window.addEventListener("mouseup", or, { once: !0 }));
  }
  function vi(h) {
    const S = B.querySelector(".wbStripScroll");
    if (!tn || !S) return;
    const C = h.pageX - tn.startX;
    !tn.moved && Math.abs(C) > 1 && (tn.moved = !0, S.classList.add("wbDragging")), S.scrollLeft = tn.left - C;
  }
  function or() {
    tn = null, window.removeEventListener("mousemove", vi);
    const h = B.querySelector(".wbStripScroll");
    if (!h) return;
    h.classList.remove("wbDragging", "wbHeld");
    const S = [...h.querySelectorAll(".wbSnap")];
    if (S.length) {
      const C = S.reduce((R, z) => Math.abs(z.offsetLeft - h.scrollLeft) < Math.abs(R.offsetLeft - h.scrollLeft) ? z : R);
      h.scrollTo({ left: C.offsetLeft, behavior: "smooth" });
    }
  }
  B.addEventListener("click", Qa), B.addEventListener("keydown", ye), B.addEventListener("mousedown", go);
  const vo = 64, bi = 30;
  let Sn = null, Da = 0;
  const Nn = () => {
    Da = 0, B.querySelectorAll(".wbPollen .wbPush").forEach((h) => {
      let S = 0, C = 0;
      if (Sn) {
        const R = h.parentElement.getBoundingClientRect(), z = R.left + R.width / 2 - Sn.x, K = R.top + R.height / 2 - Sn.y, nt = Math.hypot(z, K) || 1;
        if (nt < vo) {
          const bt = (1 - nt / vo) * bi;
          S = z / nt * bt, C = K / nt * bt;
        }
      }
      h.style.transform = S || C ? "translate(" + S.toFixed(1) + "px," + C.toFixed(1) + "px)" : "";
    }), Sn && (Da = requestAnimationFrame(Nn));
  }, qr = (h) => {
    var C, R;
    if (!((R = (C = h.target).closest) == null ? void 0 : R.call(C, ".wbPollen")) || ia != null && ia.matches) {
      Sn && (Sn = null, Da || (Da = requestAnimationFrame(Nn)));
      return;
    }
    Sn = { x: h.clientX, y: h.clientY }, Da || (Da = requestAnimationFrame(Nn));
  }, ir = () => {
    Sn = null, Da || (Da = requestAnimationFrame(Nn));
  };
  B.addEventListener("pointermove", qr), B.addEventListener("pointerleave", ir);
  const en = typeof ResizeObserver == "function" ? new ResizeObserver(() => Vn(performance.now())) : null;
  en == null || en.observe(B);
  const ia = (bo = window.matchMedia) == null ? void 0 : bo.call(window, "(prefers-reduced-motion: reduce)"), za = () => {
    Ue(), Vn(performance.now());
  };
  (Ho = ia == null ? void 0 : ia.addEventListener) == null || Ho.call(ia, "change", za);
  const rr = [
    setInterval(() => {
      U = /* @__PURE__ */ new Date(), Ve(!0);
    }, cf),
    setInterval(() => {
      wt = /* @__PURE__ */ new Date(), Ve(!0);
    }, pf),
    setInterval(se, sf)
  ];
  return Ve(!0), Ue(), {
    update() {
      Ve(!1);
    },
    // a choice in Settings changed (Next hours' window)
    refresh() {
      Ve(!0);
    },
    setStyle(h) {
      !h || h === p || (p = h, B.dataset.style = p, Ve(!0), Ue());
    },
    destroy() {
      var h;
      cancelAnimationFrame(Da), B.removeEventListener("pointermove", qr), B.removeEventListener("pointerleave", ir), V = !0, rr.forEach(clearInterval), dt && cancelAnimationFrame(dt), dt = 0, en == null || en.disconnect(), (h = ia == null ? void 0 : ia.removeEventListener) == null || h.call(ia, "change", za), or(), B.removeEventListener("click", Qa), B.removeEventListener("keydown", ye), B.removeEventListener("mousedown", go), ["daily", "hourly"].forEach(P), B.remove();
    }
  };
}
const cl = "#E1E1E1", jc = "#F7F4F0", Hd = "#03a9f4", Ce = 14, _e = 172;
let eh = 0;
const Ke = (n) => Math.round(n * 100) / 100, Io = (n, d, i) => Math.max(d, Math.min(i, n)), ci = (n, d, i, p, g, w) => '<rect x="' + Ke(n) + '" y="' + Ke(d) + '" width="' + Ke(i) + '" height="' + Ke(p) + '" fill="' + g + '"' + (w != null ? ' opacity="' + w + '"' : "") + "/>", Fd = (n) => n.map((d, i) => (i ? "L" : "M") + Ke(d[0]) + " " + Ke(d[1])).join("");
function Od(n) {
  const d = (n == null ? void 0 : n.attributes) || {};
  return d.device_class === "curtain" ? "curtain" : d.device_class === "blind" || d.current_tilt_position != null ? "venetian" : "blind";
}
const Zi = [
  [2, ["#070B16", "#0E2447", "#1B3A6B", "#0A1733", 0.9]],
  [6.5, ["#0B0F1C", "#2E7FD6", "#F2743B", "#F1B6C8", 0.95]],
  [9.5, ["#8FC4EC", "#4DA3E8", "#F4FAFF", "#2F7FCF", 0.7]],
  [13, ["#9ED3F6", "#3F97E6", "#FFFFFF", "#2B86D9", 0.65]],
  [17, ["#9FC2E4", "#4A8ED4", "#FFD9B8", "#5E8FD6", 0.75]],
  [19, ["#4B5E86", "#3B86E0", "#FF6A3D", "#B07CE8", 0.95]],
  [21.5, ["#1A2140", "#1F3F7A", "#B4506E", "#3E59A6", 0.8]],
  [26, ["#070B16", "#0E2447", "#1B3A6B", "#0A1733", 0.9]]
];
function ah(n) {
  const d = n < 2 ? n + 24 : n;
  let i = Zi[0], p = Zi[Zi.length - 1];
  for (let E = 0; E < Zi.length - 1; E++) if (d >= Zi[E][0] && d <= Zi[E + 1][0]) {
    i = Zi[E], p = Zi[E + 1];
    break;
  }
  const g = (d - i[0]) / (p[0] - i[0]), w = g * g * (3 - 2 * g), x = (E, k) => {
    const B = parseInt(E.slice(1), 16), yt = parseInt(k.slice(1), 16);
    return "#" + [16, 8, 0].map((ut) => Math.round((B >> ut & 255) + ((yt >> ut & 255) - (B >> ut & 255)) * w).toString(16).padStart(2, "0")).join("");
  };
  return { top: x(i[1][0], p[1][0]), bot: x(i[1][1], p[1][1]), warm: x(i[1][2], p[1][2]), cool: x(i[1][3], p[1][3]), op: i[1][4] + (p[1][4] - i[1][4]) * w, t: d };
}
function nh(n) {
  const d = parseInt(n.slice(1), 16), i = (d >> 16 & 255) / 255, p = (d >> 8 & 255) / 255, g = (d & 255) / 255, w = Math.max(i, p, g), x = Math.min(i, p, g);
  let E = 0, k = 0;
  const B = (w + x) / 2;
  if (w !== x) {
    const yt = w - x;
    k = B > 0.5 ? yt / (2 - w - x) : yt / (w + x), E = (w === i ? (p - g) / yt + (p < g ? 6 : 0) : w === p ? (g - i) / yt + 2 : (i - p) / yt + 4) / 6;
  }
  return [E * 360, k * 100, B * 100];
}
function Ip(n, d, i) {
  d = Io(d, 0, 100) / 100, i = Io(i, 0, 100) / 100;
  const p = (x) => (x + n / 30) % 12, g = d * Math.min(i, 1 - i), w = (x) => i - g * Math.max(-1, Math.min(p(x) - 3, Math.min(9 - p(x), 1)));
  return "#" + [w(0), w(8), w(4)].map((x) => Math.round(x * 255).toString(16).padStart(2, "0")).join("");
}
const [Hp, Fp, Op] = nh(cl), zc = Ip(Hp, Fp, Math.max(6, Op - 14)), oh = Ip(Hp, Fp, Math.min(96, Op + 16));
function ih(n, d, i, p, g) {
  const w = _e / 2, x = _e * 0.12, E = w - (w - x) * n, k = (rt) => rt ** 1.3, B = Io(i, -1.5, 1.5), yt = (rt) => -(Math.abs(B) * 4.6 * rt ** 1.5) * Math.sign(B), ut = n * 1.4, Z = (rt, Q) => {
    const V = Math.min(4.8, Math.abs(i) * 2.6) * (Q ? 1 : -1) * Math.sign(i || 1), W = Q ? rt + E : rt, dt = Q ? rt : rt + E, st = (St) => W + yt(St) + V * Math.sin(St * Math.PI * 1.2 + p) * k(St) * 1.4 + ut * Math.sin(St * Math.PI * 2 + p * 0.6) * k(St) * (Q ? 1 : -1), gt = [[dt, Ce]];
    for (let St = 0; St <= 12; St++) gt.push([st(St / 12), Ce + _e * St / 12]);
    gt.push([dt, Ce + _e]);
    let tt = '<path d="' + Fd(gt) + 'Z" fill="' + cl + '"/>';
    if (g) return tt;
    const et = 1.35 + ((Q ? i > 0 : i < 0) ? 0.35 : 0), T = (St) => {
      const U = St / 7, wt = Q ? 1 - U : U, Y = (1 - wt) ** 1.3, zt = rt + E * U;
      return Array.from({ length: 13 }, (M, _) => {
        const L = _ / 12;
        return [zt + yt(L) * Y + V * et * Math.sin(L * Math.PI * 1.2 + p - wt * 3.2) * k(L) * 1.4 * Y + ut * 1.6 * Math.sin(L * Math.PI * 2 + p * 0.6 - wt * 2.5) * k(L) * n * (0.4 + 0.6 * Y), Ce + _e * L];
      });
    }, ot = [1, 2, 3, 4, 5, 6].map(T);
    for (let St = 0; St < 6; St += 2) tt += '<path d="' + Fd(ot[St]) + Fd(ot[St + 1].slice().reverse()).replace("M", "L") + 'Z" fill="#fff"/>';
    return tt;
  }, $ = w - (w - x) * d;
  return { body: Z(Ce, !0) + Z(Ce + _e - E, !1), rails: [{ x: Ce + $ - 4, y: Ce, w: 4, h: _e }, { x: Ce + _e - $, y: Ce, w: 4, h: _e }], head: 6.4 };
}
function rh(n, d, i) {
  const p = _e * (1 - n);
  let g = "";
  if (p > 1 && (g += ci(Ce, Ce, _e, p, cl), !i))
    for (let w = 1; w < 7; w += 2) g += ci(Ce + _e * w / 7, Ce, _e / 7, p, "#fff");
  return { body: g, rails: [{ x: Ce, y: Ce + _e * (1 - d) - 7, w: _e, h: 11 }], head: 10.4 };
}
function sh(n, d, i, p) {
  const g = 9 - 7 * (i / 100), w = Ce + _e * (1 - n), x = Math.ceil(_e / 10) + 1, E = Ce + g / 2, k = (Ce + _e - g / 2 - E) / (x - 1), B = 0.8, yt = 0.6, ut = Array.from({ length: x }, (rt, Q) => Math.max(E + Q * yt, Math.min(E + Q * k, w - g / 2 - (x - 1 - Q) * yt))), Z = ut.slice(0, -1).map((rt, Q) => Io((ut[Q + 1] - rt - yt) / (k - yt), 0, 1));
  Z.push(Z[x - 2]);
  let $ = "";
  return ut.forEach((rt, Q) => {
    const V = B + (g - B) * Z[Q], W = Math.max(0.5, V / 2), dt = Math.max(0.4, V * 0.114);
    $ += ci(Ce, rt - W, _e, Math.max(1, V), cl), !p && V > 2.2 && ($ += ci(Ce, rt + W - dt, _e, dt, zc) + ci(Ce, rt - W, _e, dt * 0.55, oh, 0.75));
  }), p || [0.22, 0.78].forEach((rt) => {
    $ += ci(Ce + _e * rt - 0.7, Ce, 1.4, Math.max(0, ut[x - 1] + 1 - Ce), zc, 0.85);
  }), { body: $, rails: [{ x: Ce, y: Ce + _e * (1 - d) - 8, w: _e, h: 8 }], head: 8.8 };
}
const Vc = (n, d, i, p, g, w, x) => n === "curtain" ? ih(d, i, g, w, x) : n === "venetian" ? sh(d, i, p, x) : rh(d, i, x);
function lh(n, d) {
  let i = "", p = "";
  return d.forEach((g) => {
    const w = g.w > g.h, x = Io(w ? Ce + _e / 2 : g.x + g.w / 2, 17, 183), E = Io(w ? g.y + g.h / 2 : Ce + _e / 2, 17, 183);
    i += w ? ci(Ce, Io(g.y + g.h / 2, Ce, Ce + _e) - 1, _e, 2, Hd) : ci(Io(g.x + g.w / 2, Ce, Ce + _e) - 1, Ce, 2, _e, Hd);
    const k = w ? "M" + Ke(x - 4) + " " + Ke(E - 3) + "l4 -3l4 3M" + Ke(x - 4) + " " + Ke(E + 3) + "l4 3l4 -3" : "M" + Ke(x - 3) + " " + Ke(E - 4) + "l-3 4l3 4M" + Ke(x + 3) + " " + Ke(E - 4) + "l3 4l-3 4";
    p += '<circle cx="' + Ke(x) + '" cy="' + Ke(E) + '" r="11" fill="' + Hd + '" filter="url(#' + n + 's)"/><path d="' + k + '" fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>';
  }), { lines: i, knobs: p };
}
function dh(n, d) {
  const i = /* @__PURE__ */ new Date(), p = ah(i.getHours() + i.getMinutes() / 60), g = 42 + 18 * Math.sin(p.t * 0.5), w = p.t >= 5 && p.t <= 20 ? 40 - 48 * Math.sin(Math.PI * (p.t - 5) / 15) : 80, x = Vc(d.kind, d.pos / 100, d.bar / 100, d.tilt, d.vel, d.ph, !1), E = d.ghostAlpha > 4e-3 && d.ghost != null ? Vc(d.kind, d.ghost / 100, d.ghost / 100, d.tilt, 0, 0, !0).body : "", k = d.grip > 4e-3 ? lh(n, x.rails) : null, B = (yt) => ci(Ce, Ce, _e, _e, yt);
  return '<svg viewBox="0 0 200 200" aria-hidden="true" focusable="false"><defs><clipPath id="' + n + 'c"><rect x="14" y="14" width="172" height="172" rx="8"/></clipPath><linearGradient id="' + n + 'l" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + p.top + '"/><stop offset="1" stop-color="' + p.bot + '"/></linearGradient><radialGradient id="' + n + 'w" cx="' + Ke(g) + '%" cy="' + Ke(w) + '%" r="58%"><stop offset="0" stop-color="' + p.warm + '" stop-opacity="' + Ke(p.op * 0.8) + '"/><stop offset="1" stop-color="' + p.warm + '" stop-opacity="0"/></radialGradient><radialGradient id="' + n + 'k" cx="' + Ke(100 - g * 0.8) + '%" cy="' + Ke(100 - w * 0.6) + '%" r="62%"><stop offset="0" stop-color="' + p.cool + '" stop-opacity="' + Ke(p.op * 0.64) + '"/><stop offset="1" stop-color="' + p.cool + '" stop-opacity="0"/></radialGradient><filter id="' + n + 's" x="-5%" y="-50%" width="110%" height="300%"><feDropShadow dx="0" dy="1.2" stdDeviation="1.2" flood-color="#000" flood-opacity=".18"/></filter></defs><rect x="6" y="6" width="188" height="188" rx="16" fill="' + jc + '" stroke="#E3E3E3" stroke-width=".4"/><g clip-path="url(#' + n + 'c)">' + B("url(#" + n + "l)") + B("url(#" + n + "w)") + B("url(#" + n + "k)") + (E ? '<g opacity="' + Ke(d.ghostAlpha) + '">' + E + "</g>" : "") + x.body + '<rect x="14" y="14" width="172" height="' + x.head + '" fill="' + cl + '" filter="url(#' + n + 's)"/></g>' + (k ? '<g clip-path="url(#' + n + 'c)" opacity="' + Ke(d.grip) + '">' + k.lines + "</g>" : "") + '<rect x="13.5" y="13.5" width="173" height="173" rx="8.5" fill="none" stroke="' + jc + '" stroke-width="3"/>' + (k ? '<g opacity="' + Ke(d.grip) + '">' + k.knobs + "</g>" : "") + "</svg>";
}
function ch({ onMove: n, onSet: d }) {
  var tt;
  const i = "cv" + ++eh, p = document.createElement("div");
  p.className = "tfCoverArt";
  const g = (tt = window.matchMedia) == null ? void 0 : tt.call(window, "(pointer: coarse)").matches;
  let w = null;
  const x = { pos: 0, tilt: 0, vel: 0, ph: 0, grip: 0, ghost: 0, gpos: null, last: 0 };
  let E = 0, k = !1, B = !1, yt = null, ut = 0, Z = 0;
  const $ = () => (w == null ? void 0 : w.kind) === "curtain" ? "x" : "y", rt = () => yt || k || B || w.moving || w.target != null ? 1 : g ? performance.now() < Z ? 1 : 0.4 : 0, Q = () => {
    p.innerHTML = dh(i, { kind: w.kind, pos: x.pos, bar: w.target ?? x.pos, tilt: x.tilt, vel: x.vel, ph: x.ph, ghost: x.gpos, ghostAlpha: x.ghost, grip: x.grip });
  };
  function V(et) {
    E = 0;
    const T = x.last ? Math.min(0.064, (et - x.last) / 1e3) : 1 / 60, ot = T * 60;
    x.last = et;
    const St = w.pos - x.pos, U = x.pos;
    x.pos += Math.sign(St) * Math.min(Math.abs(St), Math.max(10.5, Math.abs(St) * 1.4) * T), Math.abs(w.pos - x.pos) < 0.03 && (x.pos = w.pos), x.vel = x.vel * 0.86 + (x.pos - U) / ot * 0.14, Math.abs(x.vel) < 0.015 && x.pos === w.pos && (x.vel = 0), (x.pos !== U || x.vel) && (x.ph += (0.06 + Math.abs(x.vel) * 0.03) * ot);
    const wt = w.tilt - x.tilt;
    x.tilt += Math.sign(wt) * Math.min(Math.abs(wt), Math.max(60, Math.abs(wt) * 4) * T);
    const Y = rt();
    x.grip += (Y - x.grip) * Math.min(1, T * (Y > x.grip ? 11 : 3.5)), Math.abs(Y - x.grip) < 0.01 && (x.grip = Y);
    const zt = w.target != null && Math.abs(w.target - x.pos) > 0.5 ? 0.22 : 0;
    w.target != null && (x.gpos = w.target), x.ghost += (zt - x.ghost) * Math.min(1, T * (zt > x.ghost ? 16 : 3)), Math.abs(zt - x.ghost) < 4e-3 && (x.ghost = zt), Q(), x.pos !== w.pos || x.vel || x.tilt !== w.tilt || x.grip !== Y || x.ghost !== zt ? E = requestAnimationFrame(V) : x.last = 0;
  }
  const W = () => {
    w && !E && (E = requestAnimationFrame(V));
  }, dt = setInterval(() => {
    w && !E && Q();
  }, 60 * 1e3), st = (et) => {
    const T = p.getBoundingClientRect();
    return $() === "x" ? (et.clientX - T.left) / T.width : (et.clientY - T.top) / T.height;
  };
  p.addEventListener("pointerdown", (et) => {
    var St;
    if (!(w != null && w.canSet) || et.button > 0) return;
    et.preventDefault(), (St = p.setPointerCapture) == null || St.call(p, et.pointerId);
    const T = w.target ?? w.pos, ot = p.getBoundingClientRect();
    yt = { p0: st(et), from: T, x0: et.clientX, value: null, side: null }, w.kind === "curtain" && T > 0 && (yt.side = (et.clientX - ot.left) / ot.width < 0.5 ? "L" : "R"), W();
  }), p.addEventListener("pointermove", (et) => {
    if (!yt) return;
    let T;
    if (w.kind === "curtain") {
      if (!yt.side) {
        const St = et.clientX - yt.x0;
        if (Math.abs(St) < 4) return;
        yt.side = St < 0 ? "L" : "R";
      }
      const ot = (_e / 2 - _e * 0.12) / 200;
      T = yt.from + (yt.side === "L" ? -1 : 1) * ((st(et) - yt.p0) / ot) * 100;
    } else T = yt.from - (st(et) - yt.p0) / (_e / 200) * 100;
    yt.value = Io(T, 0, 100), n(yt.value);
  });
  const gt = () => {
    if (!yt) return;
    const et = yt.value;
    yt = null, et != null && d(Math.round(et)), W();
  };
  return p.addEventListener("pointerup", gt), p.addEventListener("pointercancel", gt), p.addEventListener("lostpointercapture", gt), p.addEventListener("pointerenter", () => {
    k = !0, W();
  }), p.addEventListener("pointerleave", () => {
    k = !1, W();
  }), p.addEventListener("focus", () => {
    B = p.matches(":focus-visible"), W();
  }), p.addEventListener("blur", () => {
    B = !1, W();
  }), p.addEventListener("keydown", (et) => {
    if (!(w != null && w.canSet)) return;
    const T = Math.round(w.target ?? w.pos), ot = et.shiftKey ? 10 : 1, St = { ArrowUp: T + ot, ArrowRight: T + ot, ArrowDown: T - ot, ArrowLeft: T - ot, PageUp: T + 25, PageDown: T - 25, Home: 0, End: 100 }[et.key];
    if (St == null) return;
    et.preventDefault();
    const U = Io(St, 0, 100);
    n(U), clearTimeout(ut), ut = setTimeout(() => d(U), 500);
  }), {
    el: p,
    update(et) {
      const T = !w;
      w = et, T && (x.pos = w.pos, x.tilt = w.tilt, Z = performance.now() + 1500, g && setTimeout(W, 1600)), p.classList.toggle("x", $() === "x"), p.classList.toggle("y", $() === "y"), w.canSet ? (p.tabIndex = 0, p.setAttribute("role", "slider"), p.setAttribute("aria-valuemin", "0"), p.setAttribute("aria-valuemax", "100"), p.setAttribute("aria-valuenow", String(Math.round(w.target ?? w.pos))), p.setAttribute("aria-orientation", $() === "x" ? "horizontal" : "vertical")) : p.setAttribute("role", "img"), p.setAttribute("aria-label", w.name + (w.canSet ? " position" : "")), p.setAttribute("aria-valuetext", w.text), W();
    },
    destroy() {
      cancelAnimationFrame(E), E = 0, clearInterval(dt), clearTimeout(ut), p.remove();
    }
  };
}
const Gc = "move-assistant-density", Ki = {
  get(n) {
    try {
      return localStorage.getItem(n);
    } catch {
      return null;
    }
  },
  set(n, d) {
    try {
      localStorage.setItem(n, d);
    } catch {
    }
  }
}, J = (n) => String(n ?? "").replace(/[&<>"']/g, (d) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[d]), Wd = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 12H5"/><path d="M12 19L5 12L12 5"/></svg>', Uc = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M15 18L9 12L15 6"/></svg>', ph = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6L18 18"/><path d="M18 6L6 18"/></svg>', Ql = {
  prev: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6h2v12H6zM9.5 12L18 18V6z"/></svg>',
  next: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16 6h2v12h-2zM6 18l8.5-6L6 6z"/></svg>',
  play: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>',
  pause: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 5h4v14H6zM14 5h4v14h-4z"/></svg>'
}, Yc = {
  down: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 11h14v2H5z"/></svg>',
  up: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11 5h2v6h6v2h-6v6h-2v-6H5v-2h6z"/></svg>'
}, Zc = 1, uh = 4, Kc = 16, $c = 32, fh = 128, hh = 256, Xc = 16384, mh = 1, gh = 2, Jc = 4, vh = 8, bh = {
  open: '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 7l-5 5 5 5"/><path d="M16 7l5 5-5 5"/></svg>',
  stop: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="7" y="7" width="10" height="10" rx="2.5" fill="currentColor"/></svg>',
  close: '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7l5 5-5 5"/><path d="M21 7l-5 5 5 5"/></svg>'
}, Qc = { curtain: ["mdi:curtains", "mdi:curtains-closed"], blind: ["mdi:roller-shade", "mdi:roller-shade-closed"], venetian: ["mdi:blinds-horizontal", "mdi:blinds-horizontal-closed"] }, wh = { curtain: "curtains", blind: "blind", venetian: "blinds" }, qd = {
  light: { name: "Lights", icon: "mdi:lightbulb", colour: "#ffc107" },
  climate: { name: "Climate", icon: "mdi:home-thermometer", colour: "#ff5722" },
  security: { name: "Security", icon: "mdi:security", colour: "#607d8b" },
  media_players: { name: "Media players", icon: "mdi:multimedia", colour: "#2196f3" },
  maintenance: { name: "Maintenance", icon: "mdi:wrench", colour: "#9e9e9e" },
  energy: { name: "Energy", icon: "mdi:lightning-bolt", colour: "#ffc107" }
}, tp = "move_assistant_house", ep = "move-assistant-house-used", xh = ["switch", "fan", "input_boolean", "automation"], ap = "move-assistant-house-look", yh = [["look", "Look"], ["house", "House page"], ["weather", "Weather"]], kh = [["popup", "Popup"], ["sheet", "Sheet"]], Mh = [["auto", "Automatic"], ["cut", "Cut short"], ["wrap", "Two lines"], ["scroll", "Scroll"]], Sh = [["day", "Daytime 06–22"], ["waking", "Waking 07–23"], ["all", "All day"]], Ch = [["bitmap", "Pixel"], ["onebit", "1-bit"], ["smooth", "Smooth"], ["line", "Line"]], jd = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7,19V17H9V19H7M11,19V17H13V19H11M15,19V17H17V19H15M7,15V13H9V15H7M11,15V13H13V15H11M15,15V13H17V15H15M7,11V9H9V11H7M11,11V9H13V11H11M15,11V9H17V11H15M7,7V5H9V7H7M11,7V5H13V7H11M15,7V5H17V7H15Z"/></svg>', Th = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z"/></svg>', Ah = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z"/></svg>', np = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11.83,9L15,12.16C15,12.11 15,12.05 15,12A3,3 0 0,0 12,9C11.94,9 11.89,9 11.83,9M7.53,9.8L9.08,11.35C9.03,11.56 9,11.77 9,12A3,3 0 0,0 12,15C12.22,15 12.44,14.97 12.65,14.92L14.2,16.47C13.53,16.8 12.79,17 12,17A5,5 0 0,1 7,12C7,11.21 7.2,10.47 7.53,9.8M2,4.27L4.28,6.55L4.73,7C3.08,8.3 1.78,10 1,12C2.73,16.39 7,19.5 12,19.5C13.55,19.5 15.03,19.2 16.38,18.66L16.81,19.08L19.73,22L21,20.73L3.27,3M12,7A5,5 0 0,1 17,12C17,12.64 16.87,13.26 16.64,13.82L19.57,16.75C21.07,15.5 22.27,13.86 23,12C21.27,7.61 17,4.5 12,4.5C10.6,4.5 9.26,4.75 8,5.2L10.17,7.35C10.74,7.13 11.35,7 12,7Z"/></svg>', op = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"/></svg>', ip = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>', Wp = (n) => '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">' + n.map((d) => '<path d="' + d + '"/>').join("") + "</svg>", rp = Wp(["M12 20H21", "M16.5 3.5C17.33 2.67 18.67 2.67 19.5 3.5C20.33 4.33 20.33 5.67 19.5 6.5L7 19L3 20L4 16L16.5 3.5Z"]), Lh = Wp(["M20 6L9 17L4 12"]), No = (n, d = "") => '<span class="tfAreaGlyph" data-icon-for="' + J(n || "") + '"' + (d ? ' data-icon-name="' + J(d) + '"' : "") + "></span>", Eh = (n) => '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.8l2.8 6 6.6.6-5 4.4 1.5 6.5L12 17l-5.9 3.3 1.5-6.5-5-4.4 6.6-.6z" fill="' + (n ? "currentColor" : "none") + '" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>', _h = 1, Dh = [["disarmed", "Off", "alarm_disarm", 0], ["armed_home", "Home", "alarm_arm_home", 1], ["armed_away", "Away", "alarm_arm_away", 2], ["armed_night", "Night", "alarm_arm_night", 4]], sp = { disarmed: "Disarmed", armed_home: "Armed home", armed_away: "Armed away", armed_night: "Armed night", armed_vacation: "Armed vacation", arming: "Arming", pending: "Pending", triggered: "Triggered", disarming: "Disarming" }, zd = ["hs", "xy", "rgb", "rgbw", "rgbww"], td = ["door", "window", "garage_door", "opening"], lp = { moisture: ["detected water", "dry"], smoke: ["detected smoke", "clear"], gas: ["detected gas", "clear"], carbon_monoxide: ["detected carbon monoxide", "clear"], safety: ["became unsafe", "safe"] }, ed = ["light", "climate", "cover", "humidifier", "media_player", "vacuum", "lock", "alarm_control_panel", "valve"], Bh = ["light", "switch", "fan", "lock", "cover", "climate", "humidifier", "media_player", "alarm_control_panel", "vacuum", "valve", "binary_sensor"], Rh = 10, Nh = 20, Ph = { electricity: "mdi:lightning-bolt", solar: "mdi:solar-power-variant", gas: "mdi:fire", water: "mdi:water" }, Ih = ["living room", "bedroom", "office"];
function Hh(n, { config: d, getHass: i }) {
  var zi, al, nl;
  const p = (t) => n.getElementById(t), g = p("app"), x = String((d || {}).layout || "").toLowerCase().replace("_", "-") === "test-focus";
  let E = Ki.get(Gc) === "1", k = {};
  const B = (t) => {
    var a;
    return (a = i()) == null ? void 0 : a.callWS(t);
  }, yt = (t, a, o) => B({ type: "call_service", domain: t, service: a, service_data: o }), ut = n.querySelector("#appearancePane .toggleList");
  ut && !p("densityToggle") && (ut.insertAdjacentHTML(
    "afterbegin",
    '<div class="toggleRow"><div><strong>Show density</strong><div class="status">Each card’s height, and how many readings fit on the screen.</div></div><button class="switch" id="densityToggle" type="button" aria-label="Show density"></button></div>'
  ), p("densityToggle").addEventListener("click", () => {
    E = !E, Ki.set(Gc, E ? "1" : "0"), et();
  }));
  const Z = [
    ["weather", "Weather", "The forecast under Home.", (t) => t.startsWith("weather.")],
    ["grid", "Energy", "Power from the grid, for Energy.", (t) => t.startsWith("sensor.") && Kt(t).device_class === "power" && /^(W|kW)$/.test(Kt(t).unit_of_measurement || "")],
    ["alarm", "Alarm", "The alarm in the Security popup.", (t) => t.startsWith("alarm_control_panel.")]
  ], $ = (t, a, o, l) => '<div class="themeChoice" id="' + t + '" role="group" aria-label="' + a + '">' + l.map(([c, m]) => '<button class="wxLayoutBtn" type="button" aria-pressed="false" ' + o + '="' + c + '">' + m + "</button>").join("") + "</div>", rt = (t, a, o, l) => '<div class="toggleRow"' + (l ? ' id="' + l + '"' : "") + "><div><strong>" + t + "</strong>" + (a ? '<div class="status">' + a + "</div>" : "") + "</div>" + o + "</div>";
  function Q() {
    var H, I;
    if (!x || p("housePane")) return;
    const t = p("settingsView");
    t.querySelector(".settingsTitle").textContent = "HomeCore";
    const a = [["look", "Appearance"], ["lights", "Lights"], ["sources", "Sources"], ["sums", "Summaries"]], o = (D, q) => '<div class="houseTab' + (D === "look" ? " active" : "") + '" data-house-pane="' + D + '"><section class="card">' + q + "</section></div>";
    t.querySelector(".rubberTabs").insertAdjacentHTML("afterend", '<div class="settingsPane active" id="housePane"><div class="tabs rubberTabs houseTabs"><div class="rubberIndicator" aria-hidden="true"></div>' + a.map(([D, q]) => '<button class="tab segBtn' + (D === "look" ? " active" : "") + '" type="button" data-house-tab="' + D + '">' + q + "</button>").join("") + "</div>" + // Appearance in groups, each named above its card (Matt, 8 Nov)
    o("look", yh.map(([D, q]) => '<div class="tfSetGroup"><div class="sectionLabel">' + q + '</div><div class="toggleList" data-look-group="' + D + '"></div></div>').join("")) + o("lights", '<p class="note tfTableNote">This is an example of a table. It is not how to control features in lights.</p><div class="metaTableWrap"><table class="metaTable tfLightTable"><thead><tr><th>Light</th><th>Room</th><th>Now</th><th class="metaSwitchCol">Favourite</th><th>Tile</th><th>Pad</th></tr></thead><tbody id="lightRows"></tbody></table></div><div class="tfLightCards" id="lightCards"></div>') + o("sources", '<div class="toggleList">' + Z.map(([D, q, X]) => rt(q, X, '<select class="settingsSelect" data-source="' + D + '" aria-label="' + q + '"></select>')).join("") + "</div>") + o("sums", '<div class="toggleList">' + Object.entries(qd).map(([D, q]) => rt(q.name, "", '<button class="switch" type="button" role="switch" data-sum-toggle="' + D + '" aria-label="' + q.name + ' summary"></button>')).join("") + "</div>") + "</div>");
    const l = (D) => t.querySelector('[data-look-group="' + D + '"]'), c = (D) => D == null ? void 0 : D.closest(".toggleRow");
    [c(t.querySelector(".themeBtn")), c(p("densityToggle"))].forEach((D) => D && l("look").appendChild(D)), [c(p("moreInfoChoice")), c(p("namesChoice"))].forEach((D) => D && l("house").appendChild(D)), l("house").insertAdjacentHTML("beforeend", rt("Lights", "How lights show on the house page.", $("lightsChoice", "Lights", "data-lights", [["tile", "HomeCore tile"], ["dac", "Dual Axis Controller"]]), "lightsRow") + rt("Pad", "What the Dual Axis Controller’s pad sets on its tile.", $("dacPadChoice", "Pad", "data-dac-pad", [["temperature", "Temperature"], ["colour", "Colour"]]), "dacPadRow")), [c(p("hoursChoice")), c(p("wxStyleChoice"))].forEach((D) => D && l("weather").appendChild(D));
    const m = p("housePane"), u = m.querySelector(".houseTabs"), v = u.querySelector(".rubberIndicator");
    new ResizeObserver(() => W()).observe(m), (I = (H = document.fonts) == null ? void 0 : H.ready) == null || I.then(() => W());
    const y = (D) => {
      const q = u.querySelector(".tab.active");
      v.style.transition = D ? "" : "none", v.style.left = q.offsetLeft + "px", v.style.width = q.offsetWidth + "px", D && (v.style.transform = "scaleX(1.08)", setTimeout(() => v.style.transform = "", 180));
    };
    new ResizeObserver(() => y(!1)).observe(u), m.addEventListener("click", (D) => {
      const q = D.target.closest("[data-house-tab]");
      if (q) {
        u.querySelectorAll(".tab").forEach((lt) => lt.classList.toggle("active", lt === q)), m.querySelectorAll(".houseTab").forEach((lt) => lt.classList.toggle("active", lt.dataset.housePane === q.dataset.houseTab)), q.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "smooth" }), y(!0), W();
        return;
      }
      const X = D.target.closest("[data-light-fav]");
      if (X) {
        Vr(X.dataset.lightFav);
        return;
      }
      const Ct = D.target.closest("[data-light-pick]");
      if (Ct) {
        const [lt, F] = Ct.dataset.lightPick.split("|"), xt = { ...Rt[lt] };
        Ct.dataset.v ? xt[F] = Ct.dataset.v : delete xt[F], Rt[lt] = xt, he(), [...Nt.keys()].filter((G) => G.endsWith(":" + F)).forEach((G) => Nt.delete(G)), aa();
        return;
      }
      const at = D.target.closest("[data-lights],[data-dac-pad],[data-sum-toggle]");
      if (!(!at || at.disabled)) {
        if (at.dataset.lights && (Rt.lights = at.dataset.lights), at.dataset.dacPad && (Rt.dacPad = at.dataset.dacPad), (at.dataset.lights || at.dataset.dacPad) && (he(), Nt.clear()), at.dataset.sumToggle) {
          const lt = at.dataset.sumToggle, F = new Set(j.hiddenSums || []);
          F.has(lt) ? F.delete(lt) : F.add(lt), j = { ...j, hiddenSums: [...F] }, La();
        }
        aa();
      }
    }), m.addEventListener("change", (D) => {
      const q = D.target;
      q.dataset.source && (j = { ...j, sources: { ...j.sources || {}, [q.dataset.source]: q.value || void 0 } }, La());
      const X = q.dataset.lightStyle || q.dataset.lightPad;
      if (X) {
        const Ct = q.dataset.lightStyle ? "lightStyles" : "lightPads", at = { ...Rt[Ct] };
        q.value ? at[X] = q.value : delete at[X], Rt[Ct] = at, he(), [...Nt.keys()].filter((lt) => lt.endsWith(":" + X)).forEach((lt) => Nt.delete(lt));
      }
      aa();
    });
  }
  function V() {
    var D, q;
    Zt() && Vt();
    const t = p("housePane");
    if (!t) return;
    const a = !!customElements.get(Tt);
    t.querySelectorAll("[data-lights]").forEach((X) => X.setAttribute("aria-pressed", String(X.dataset.lights === Rt.lights))), p("lightsRow").querySelector(".status").textContent = a || !Zt() ? "How lights show on the house page." : Yt === "failed" ? "The Dual Axis Controller didn't load. Check the connection, or install it from HACS." : "Getting the Dual Axis Controller…", t.querySelectorAll("[data-dac-pad]").forEach((X) => X.setAttribute("aria-pressed", String(X.dataset.dacPad === Rt.dacPad))), p("dacPadRow").hidden = !Zt();
    for (const X of t.querySelectorAll("[data-source]")) {
      if (X === n.activeElement) continue;
      const [Ct] = Z.find(([lt]) => lt === X.dataset.source), at = Object.keys(k).filter(Z.find(([lt]) => lt === Ct)[3]).sort((lt, F) => Dt(lt).localeCompare(Dt(F)));
      X.dataset.sig !== at.join(",") && (X.innerHTML = '<option value="">Automatic</option>' + at.map((lt) => '<option value="' + J(lt) + '">' + J(Dt(lt)) + "</option>").join(""), X.dataset.sig = at.join(",")), X.value = at.includes((D = j.sources) == null ? void 0 : D[Ct]) ? j.sources[Ct] : "";
    }
    t.querySelectorAll("[data-sum-toggle]").forEach((X) => {
      const Ct = !(j.hiddenSums || []).includes(X.dataset.sumToggle);
      X.classList.toggle("on", Ct), X.setAttribute("aria-checked", String(Ct));
    });
    const o = p("lightRows"), l = p("lightCards"), c = n.activeElement, m = o != null && o.contains(c) || l != null && l.contains(c) ? c : null;
    if (!o || m != null && m.matches("select")) {
      W();
      return;
    }
    const u = new Set(Va()), v = (X, Ct, at, lt) => '<option value="' + X + '"' + (X === at ? " selected" : "") + ">" + Ct + "</option>", y = Object.keys(k).filter((X) => X.startsWith("light.")).sort((X, Ct) => !Se.get(X) - !Se.get(Ct) || (Se.get(X) || "").localeCompare(Se.get(Ct) || "") || Dt(X).localeCompare(Dt(Ct))).map((X) => {
      const Ct = Rt.lightStyles[X] || "", at = Rt.lightPads[X] || "", lt = u.has(X), F = J(Dt(X));
      return "<tr><td><strong>" + F + "</strong></td><td>" + J(Se.get(X) || "—") + "</td><td>" + J(oa(X)) + '</td><td class="metaSwitchCol"><button class="switch' + (lt ? " on" : "") + '" type="button" role="switch" aria-checked="' + lt + '" data-light-fav="' + J(X) + '" aria-label="' + F + ' is a favourite"></button></td><td><select class="settingsSelect" data-light-style="' + J(X) + '" aria-label="' + F + ' tile">' + v("", "Default", Ct) + v("tile", "HomeCore tile", Ct) + v("dac", "Dual Axis Controller", Ct) + '</select></td><td><select class="settingsSelect" data-light-pad="' + J(X) + '" aria-label="' + F + ' pad"' + (pe(X) ? "" : " disabled") + ">" + v("", "Default", at) + v("temperature", "Temperature", at) + v("colour", "Colour", at) + "</select></td></tr>";
    }).join(""), H = (X, Ct, at, lt, F) => '<div class="themeChoice" role="group" aria-label="' + at + '">' + lt.map(([xt, G]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (xt === F) + '" data-light-pick="' + X + "|" + J(Ct) + '" data-v="' + xt + '">' + G + "</button>").join("") + "</div>", I = Object.keys(k).filter((X) => X.startsWith("light.")).sort((X, Ct) => !Se.get(X) - !Se.get(Ct) || (Se.get(X) || "").localeCompare(Se.get(Ct) || "") || Dt(X).localeCompare(Dt(Ct))).map((X) => {
      const Ct = u.has(X), at = J(Dt(X)), lt = [Se.get(X), oa(X)].filter(Boolean).map(J).join(" · ");
      return '<div class="toggleList"><div class="toggleRow"><div><strong>' + at + '</strong><div class="status">' + lt + "</div></div></div>" + rt("Favourite", "", '<button class="switch' + (Ct ? " on" : "") + '" type="button" role="switch" aria-checked="' + Ct + '" data-light-fav="' + J(X) + '" aria-label="' + at + ' is a favourite"></button>') + rt("Tile", "", H("lightStyles", X, at + " tile", [["", "Default"], ["tile", "HomeCore tile"], ["dac", "Dual Axis Controller"]], Rt.lightStyles[X] || "")) + (pe(X) ? rt("Pad", "", H("lightPads", X, at + " pad", [["", "Default"], ["temperature", "Temperature"], ["colour", "Colour"]], Rt.lightPads[X] || "")) : "") + "</div>";
    }).join("");
    o.dataset.html !== y && (o.innerHTML = y, o.dataset.html = y), l.dataset.html !== I && (l.innerHTML = I, l.dataset.html = I), m != null && m.dataset.lightFav && ((q = (l.contains(m) ? l : o).querySelector('[data-light-fav="' + CSS.escape(m.dataset.lightFav) + '"]')) == null || q.focus({ preventScroll: !0 })), W();
  }
  function W() {
    var a, o, l;
    const t = p("housePane");
    if (t)
      for (const c of t.querySelectorAll(".themeChoice")) {
        const m = [...c.querySelectorAll("button")];
        let u = (a = c.nextElementSibling) != null && a.classList.contains("tfChoiceList") ? c.nextElementSibling : null;
        if (!u) {
          u = document.createElement("select"), u.className = "settingsSelect tfChoiceList", u.setAttribute("aria-label", c.getAttribute("aria-label") || ((l = (o = c.closest(".toggleRow")) == null ? void 0 : o.querySelector("strong")) == null ? void 0 : l.textContent) || ""), u.addEventListener("change", () => {
            var D;
            return (D = m[Number(u.value)]) == null ? void 0 : D.click();
          }), c.after(u);
          const I = () => {
            u.innerHTML = m.map((q, X) => '<option value="' + X + '"' + (q.disabled ? " disabled" : "") + ">" + J(q.textContent) + "</option>").join("");
            const D = m.findIndex((q) => q.getAttribute("aria-pressed") === "true" || q.classList.contains("active"));
            D >= 0 && (u.value = String(D));
          };
          new MutationObserver(I).observe(c, { subtree: !0, attributes: !0, attributeFilter: ["aria-pressed", "class", "disabled"] }), I();
        }
        const v = (I) => {
          c.hidden !== !I && (c.hidden = !I), u.hidden !== I && (u.hidden = I);
        };
        if (m.length > 3) {
          v(!1);
          continue;
        }
        if (!c.getClientRects().length && !u.getClientRects().length) {
          u.dataset.fit || v(!0);
          continue;
        }
        const y = c.hidden;
        c.hidden = !1;
        const H = m.every((I) => I.scrollWidth <= I.clientWidth + 1);
        c.hidden = y, v(H), u.dataset.fit = "1";
      }
  }
  const dt = document.createElement("div");
  dt.className = "densityBadge", dt.setAttribute("aria-live", "polite"), dt.hidden = !0, g.appendChild(dt);
  let st = 0;
  function gt() {
    if (!E) return;
    const t = p("homeView"), a = (m) => m.offsetParent !== null && !m.closest("[hidden]");
    t.querySelectorAll(":scope .card, :scope .tfAction").forEach((m) => {
      a(m) && (m.dataset.h = Math.round(m.getBoundingClientRect().height) + " px");
    });
    const o = [...t.querySelectorAll(".activityRow, .tfAction, .wxNow")].filter(a), l = window.innerHeight, c = o.filter((m) => {
      const u = m.getBoundingClientRect();
      return u.height > 0 && u.top >= 0 && u.bottom <= l + 0.5;
    }).length;
    dt.hidden = !t.classList.contains("active"), dt.innerHTML = "<b>" + c + "</b><small>of " + o.length + " readings on screen</small>";
  }
  const tt = () => {
    E && requestAnimationFrame(gt);
  };
  function et() {
    var t;
    g.classList.toggle("showDensity", E), (t = p("densityToggle")) == null || t.classList.toggle("on", E), dt.hidden = !E, clearInterval(st), E && (st = setInterval(gt, 1e3), gt());
  }
  window.addEventListener("scroll", tt, { capture: !0, passive: !0 }), window.addEventListener("resize", tt, { passive: !0 });
  const T = n.querySelector("#homeView .grid");
  let ot = null, St = null, U = null, wt = null;
  const Y = /* @__PURE__ */ new Map(), zt = /* @__PURE__ */ new Map(), M = /* @__PURE__ */ new Map(), _ = 6;
  let L = null;
  const P = /* @__PURE__ */ new Map(), ht = /* @__PURE__ */ new Map(), ft = /* @__PURE__ */ new Map();
  let j = { favourites: null }, vt = {}, Mt = {}, Qt = [], se = null;
  const ta = (() => {
    try {
      return JSON.parse(Ki.get(ep)) || {};
    } catch {
      return {};
    }
  })();
  let Se = /* @__PURE__ */ new Map(), pi = 0;
  function La() {
    clearTimeout(pi), pi = setTimeout(() => Promise.resolve(B({ type: "frontend/set_user_data", key: tp, value: j })).catch(() => {
    }), 400);
  }
  const Rt = (() => {
    let t = {};
    try {
      t = JSON.parse(Ki.get(ap)) || {};
    } catch {
    }
    const a = (o, l) => Object.fromEntries(Object.entries(o || {}).filter(([, c]) => l.includes(c)));
    return {
      more: t.more === "sheet" ? "sheet" : "popup",
      names: t.namesPicked && ["auto", "cut", "wrap", "scroll"].includes(t.names) ? t.names : "scroll",
      namesPicked: !!t.namesPicked,
      hoursWindow: ["day", "waking", "all"].includes(t.hoursWindow) ? t.hoursWindow : "day",
      wxStyle: ["bitmap", "onebit", "smooth", "line"].includes(t.wxStyle) ? t.wxStyle : "bitmap",
      lights: t.lights === "dac" ? "dac" : "tile",
      dacPad: t.dacPad === "colour" ? "colour" : "temperature",
      lightStyles: a(t.lightStyles, ["tile", "dac"]),
      lightPads: a(t.lightPads, ["temperature", "colour"])
    };
  })(), he = () => Ki.set(ap, JSON.stringify(Rt)), la = () => {
    g.dataset.more = Rt.more, g.dataset.names = Rt.names, _r();
  };
  x && ut && !p("moreInfoChoice") && (p("densityToggle").closest(".toggleRow").insertAdjacentHTML(
    "afterend",
    '<div class="toggleRow"><div><strong>More info</strong><div class="status">How a device opens on the house page.</div></div><div class="themeChoice" id="moreInfoChoice" role="group" aria-label="More info">' + kh.map(([t, a]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (Rt.more === t) + '" data-more-style="' + t + '">' + a + "</button>").join("") + "</div></div>"
  ), p("moreInfoChoice").addEventListener("click", (t) => {
    const a = t.target.closest("[data-more-style]");
    a && (Rt.more = a.dataset.moreStyle, he(), la(), p("moreInfoChoice").querySelectorAll("[data-more-style]").forEach((o) => o.setAttribute("aria-pressed", String(o === a))));
  }), p("moreInfoChoice").closest(".toggleRow").insertAdjacentHTML(
    "afterend",
    '<div class="toggleRow"><div><strong>Long names</strong><div class="status">How a name or state too long for its space shows.</div></div><div class="themeChoice" id="namesChoice" role="group" aria-label="Long names">' + Mh.map(([t, a]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (Rt.names === t) + '" data-names-style="' + t + '">' + a + "</button>").join("") + "</div></div>"
  ), p("namesChoice").addEventListener("click", (t) => {
    const a = t.target.closest("[data-names-style]");
    a && (Rt.names = a.dataset.namesStyle, Rt.namesPicked = !0, he(), la(), p("namesChoice").querySelectorAll("[data-names-style]").forEach((o) => o.setAttribute("aria-pressed", String(o === a))));
  }), p("namesChoice").closest(".toggleRow").insertAdjacentHTML(
    "afterend",
    '<div class="toggleRow"><div><strong>Next hours</strong><div class="status">The hours each day shows on the Weather page.</div></div><div class="themeChoice" id="hoursChoice" role="group" aria-label="Next hours">' + Sh.map(([t, a]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (Rt.hoursWindow === t) + '" data-hours-window="' + t + '">' + a + "</button>").join("") + "</div></div>"
  ), p("hoursChoice").addEventListener("click", (t) => {
    const a = t.target.closest("[data-hours-window]");
    a && (Rt.hoursWindow = a.dataset.hoursWindow, he(), Jt == null || Jt.refresh(), p("hoursChoice").querySelectorAll("[data-hours-window]").forEach((o) => o.setAttribute("aria-pressed", String(o === a))));
  }), p("hoursChoice").closest(".toggleRow").insertAdjacentHTML(
    "afterend",
    '<div class="toggleRow"><div><strong>Weather art</strong><div class="status">How the weather and the sky are drawn.</div></div><div class="themeChoice" id="wxStyleChoice" role="group" aria-label="Weather art">' + Ch.map(([t, a]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (Rt.wxStyle === t) + '" data-wx-style="' + t + '">' + a + "</button>").join("") + "</div></div>"
  ), p("wxStyleChoice").addEventListener("click", (t) => {
    const a = t.target.closest("[data-wx-style]");
    a && (Rt.wxStyle = a.dataset.wxStyle, he(), Jt == null || Jt.setStyle(Rt.wxStyle), ga == null || ga.forEach((o) => o.setStyle(Rt.wxStyle)), p("wxStyleChoice").querySelectorAll("[data-wx-style]").forEach((o) => o.setAttribute("aria-pressed", String(o === a))));
  })), Q();
  let ue = { rooms: [], vacuums: [], homeVacuums: [], grid: null, security: { alarms: [], locks: [], openings: [] } };
  const ze = /* @__PURE__ */ new Map();
  let Fr = "";
  const xe = x ? gu({ onChange: () => Ta() }) : null;
  x && g.classList.add("house");
  const ee = Object.assign(document.createElement("div"), { className: "tfBento" });
  let Jt = null, Xi = null, ui = !1;
  function Ji(t) {
    const a = Mo();
    if (g.classList.toggle("houseBento", !!a), Jt && (Xi !== a || t == null) && (Jt.destroy(), Jt = null), !a || t == null) {
      ee.remove();
      return;
    }
    ee.isConnected || T.append(ee), ee.style.order = t, !Jt && !ui && (Jt = qc(ee, { getHass: i, entityId: a, style: Rt.wxStyle, hoursWindow: () => Rt.hoursWindow }), Xi = a);
  }
  const Xa = [["wx", ["current"]], ["avg", ["compared_to_average"]], ["aq", ["aq_tile"]], ["pollen", ["pollen_tile"]], ["radar", ["radar_tile"]]], me = ["aq", "pollen", "radar"], da = Object.fromEntries(Xa.map(([t]) => [t, Object.assign(document.createElement("div"), { className: "tfDashBento tfDash-" + t })]));
  let ga = null, fi = null;
  function Qi(t) {
    const a = Mo();
    ga && fi !== a && (ga.forEach((o) => o.destroy()), ga = null), Object.values(da).forEach((o) => a ? !o.isConnected && T.append(o) : o.remove()), a && !ga && !ui && (ga = Xa.map(([o, l]) => qc(da[o], { getHass: i, entityId: a, style: Rt.wxStyle, cards: l, onOpen: o === "wx" ? () => ls("weather") : void 0 })), fi = a);
  }
  const Kt = (t) => {
    var a;
    return ((a = k[t]) == null ? void 0 : a.attributes) || {};
  }, Dt = (t) => Kt(t).friendly_name || t, Ut = (t, a) => Ui(t) || (Number(Kt(t).supported_features) & a) === a, De = (t) => {
    const a = String(t ?? "").replace(/_/g, " ");
    return a.charAt(0).toUpperCase() + a.slice(1);
  }, Ea = (t, a = 1) => Number(t).toLocaleString(void 0, { minimumFractionDigits: a, maximumFractionDigits: a }), co = (t) => (t == null ? void 0 : t.state) === "on" ? t.attributes.brightness != null ? Math.max(1, Math.round(t.attributes.brightness / 2.55)) : 100 : 0, Gt = (t) => Kt(t).supported_color_modes || [], ne = (t) => {
    const a = t / 100;
    return [a <= 66 ? 255 : 329.7 * Math.pow(a - 60, -0.1332), a <= 66 ? 99.47 * Math.log(a) - 161.12 : 288.12 * Math.pow(a - 60, -0.0755), a >= 66 ? 255 : a <= 19 ? 0 : 138.52 * Math.log(a - 10) - 305.04];
  }, ea = (t, a) => [5, 3, 1].map((o) => {
    const l = (o + t / 60) % 6;
    return 255 * (1 - a / 100 * Math.max(0, Math.min(l, 4 - l, 1)));
  }), Wn = (t) => (t /= 255, t <= 0.03928 ? t / 12.92 : Math.pow((t + 0.055) / 1.055, 2.4)), ja = (t) => 0.2126 * Wn(t[0]) + 0.7152 * Wn(t[1]) + 0.0722 * Wn(t[2]), Xe = (t, a) => {
    const o = ja(t), l = ja(a);
    return (Math.max(o, l) + 0.05) / (Math.min(o, l) + 0.05);
  }, hi = 0.55, ca = (t) => {
    const a = Kt(t);
    return (a.rgb_color || (a.hs_color && a.color_mode !== "color_temp" ? ea(...a.hs_color) : a.color_temp_kelvin ? ne(a.color_temp_kelvin) : [255, 170, 0])).map((o) => Math.round(Math.max(0, Math.min(255, o))));
  }, po = { heat: [255, 111, 34], cool: [33, 150, 243], heat_cool: [255, 193, 7], auto: [76, 175, 80], dry: [255, 152, 0], fan_only: [0, 188, 212] };
  function uo(t) {
    var l;
    const a = t.split(".")[0], o = (l = k[t]) == null ? void 0 : l.state;
    return !o || o === "unavailable" || o === "unknown" ? null : a === "light" ? o === "on" ? ca(t) : null : a === "climate" ? po[o] || null : a === "cover" ? o !== "closed" ? [146, 107, 199] : null : a === "lock" ? o !== "locked" ? [244, 67, 54] : null : a === "media_player" ? ["playing", "paused", "on", "buffering"].includes(o) ? [3, 169, 244] : null : a === "humidifier" || a === "valve" ? ["on", "open", "opening", "closing"].includes(o) ? [33, 150, 243] : null : a === "vacuum" ? ["cleaning", "returning"].includes(o) ? [0, 150, 136] : null : a === "alarm_control_panel" ? o !== "disarmed" && o !== "triggered" ? [76, 175, 80] : null : a === "fan" ? o === "on" ? [0, 188, 212] : null : (a === "switch" || a === "input_boolean") && o === "on" ? [255, 193, 7] : null;
  }
  function fo(t, a, o = !1) {
    const [l, c, m] = t.map((Ct) => Ct / 255), u = Math.max(l, c, m), v = Math.min(l, c, m), y = u - v, H = y ? (u === l ? (c - m) / y + (c < m ? 6 : 0) : u === c ? (m - l) / y + 2 : (l - c) / y + 4) * 60 : 0, I = (u + v) / 2, D = y ? y / (1 - Math.abs(2 * I - 1)) : 0, q = y < 0.1 ? Math.min(D, 0.25) : 1, X = (Ct) => {
      const at = (F) => (F + H / 30) % 12, lt = q * Math.min(Ct, 1 - Ct);
      return [0, 8, 4].map((F) => Math.round(255 * (Ct - lt * Math.max(-1, Math.min(at(F) - 3, 9 - at(F), 1)))));
    };
    for (let Ct = 0.5; o ? Ct < 0.96 : Ct > 0.04; Ct += o ? 0.01 : -0.01) {
      const at = X(Ct);
      if (Xe(at, a) >= 3) return "rgb(" + at.join(",") + ")";
    }
    return o ? "#ffffff" : "#26221e";
  }
  const pa = (t) => {
    const a = [1, 3, 5].map((o) => parseInt(t.slice(o, o + 2), 16));
    return Math.max(...a) - Math.min(...a) < 26 ? "" : ";--sum-d:" + fo(a, [58, 58, 58], !0) + ";--sum-l:" + fo(a, [230, 230, 230]);
  }, Bn = { d: ["#ffb894", "#d2b4ff", "#9dcbff"], l: ["#f0946a", "#b48ae6", "#6fa8e8"] }, mi = () => [0, 1, 2].map((t) => "--g" + t + "-d:" + Bn.d[t] + ";--g" + t + "-l:" + Bn.l[t]).join(";"), tr = '<svg class="tfGradDefs" aria-hidden="true" focusable="false"><defs><linearGradient id="hcClimateGrad" x1="0" y1="0" x2="0" y2="1">' + [0.15, 0.5, 0.85].map((t, a) => '<stop offset="' + t + '" style="stop-color:var(--g' + a + ')"/>').join("") + "</linearGradient></defs></svg>", Ja = (t) => {
    const a = t.map((o) => Math.round(o + (255 - o) * hi));
    return "--light-soft:rgb(" + a.join(",") + ");--light-ink:" + fo(t, a);
  }, Or = (t) => Ja(ca(t)), qn = (t) => {
    const a = uo(t);
    return a ? ' data-light style="' + Ja(a) + '"' : "";
  }, kn = (t) => {
    const a = Gt(t);
    return a.length ? a.some((o) => o !== "onoff") : Kt(t).brightness != null;
  }, ho = (t) => [Kt(t).min_color_temp_kelvin || 2e3, Kt(t).max_color_temp_kelvin || 6500], Mn = (t) => new Date(t).toLocaleTimeString(void 0, { hour: "2-digit", minute: "2-digit" });
  function er(t) {
    const a = Math.max(1, Math.round((Date.now() - t) / 1e3));
    if (a < 10) return "Just now";
    if (a < 60) return a + " seconds ago";
    const o = Math.round(a / 60);
    if (o < 60) return o + (o === 1 ? " minute ago" : " minutes ago");
    const l = Math.round(o / 60);
    if (l < 24) return l + (l === 1 ? " hour ago" : " hours ago");
    const c = Math.round(l / 24);
    return c + (c === 1 ? " day ago" : " days ago");
  }
  const Rn = (t) => {
    var a;
    return Kt(t).current_position ?? (((a = k[t]) == null ? void 0 : a.state) === "closed" ? 0 : 100);
  }, Te = (t) => {
    var a;
    return Ae("pos", t, ((a = P.get(t)) == null ? void 0 : a.pos) ?? Rn(t));
  }, mo = (t) => {
    var a;
    return Ae("tilt", t, ((a = P.get(t)) == null ? void 0 : a.tilt) ?? Kt(t).current_tilt_position);
  };
  function oa(t) {
    var u;
    const a = k[t];
    if (!a) return "Not found";
    if (a.state === "unavailable") return "Unavailable";
    const o = a.attributes, l = t.split(".")[0];
    if (l === "light") {
      if (a.state !== "on") return "Off";
      const v = o.color_temp_kelvin;
      return (kn(t) ? co(a) + "%" : "On") + (o.color_mode === "color_temp" && v ? " · " + Number(v).toLocaleString() + "k" : zd.includes(o.color_mode) ? " · Colour" : "");
    }
    if (l === "climate") return (a.state === "off" ? "Off" : De(o.hvac_action || a.state)) + " · " + Ea(o.current_temperature) + " °C now";
    if (l === "cover") {
      const v = Rn(t), y = o.current_tilt_position;
      return a.state === "opening" || a.state === "closing" ? De(a.state) + " - " + v + "%" : (v <= 0 ? "Closed" : v >= 100 ? "Open" : "Partially open") + (y > 0 && y < 100 ? " · tilted" : "");
    }
    if (l === "humidifier") return a.state !== "on" ? "Off" : De(o.action || "on") + " · " + o.current_humidity + "% now";
    if (l === "vacuum") return De(a.state) + (a.state === "cleaning" && ((u = o.rooms) != null && u.length) ? " · " + o.rooms.join(", ") : "") + (o.battery_level != null ? " · " + o.battery_level + "%" : "");
    if (l === "media_player") return a.state === "playing" || a.state === "paused" ? (a.state === "paused" ? "Paused · " : "") + (o.media_title || "Playing") : De(a.state);
    if (l === "alarm_control_panel") return sp[a.state] || De(a.state);
    if (l === "lock" || l === "valve") return De(a.state);
    if (l === "switch") return a.state === "on" ? "On" : "Off";
    if (l === "plant") return a.state === "ok" ? "Healthy" : De(o.problem);
    if (l === "binary_sensor")
      return o.device_class === "battery" ? a.state === "on" ? "Low" : "Normal" : o.device_class === "problem" ? a.state === "on" ? "Problem" : "OK" : o.device_class === "moisture" ? a.state === "on" ? "Wet" : "Dry" : td.includes(o.device_class) ? a.state === "on" ? "Open" : "Closed" : a.state === "on" ? "Detected" : "Clear";
    if (o.rang) return "Rang at " + Mn(o.rang);
    const c = i();
    if (c != null && c.formatEntityState && !Ui(t))
      try {
        return c.formatEntityState(a);
      } catch {
      }
    const m = Number(a.state);
    if (a.state !== "" && Number.isFinite(m)) {
      const v = Math.abs(m) >= 100 ? 0 : Math.abs(m) >= 10 ? 1 : 2, y = o.unit_of_measurement ? o.unit_of_measurement === "%" ? "%" : " " + o.unit_of_measurement : "";
      return m.toLocaleString(void 0, { maximumFractionDigits: v }) + y + (o.plant_low ? " · Low" : o.plant_high ? " · High" : "");
    }
    return De(a.state);
  }
  const ar = (t) => t >= 1e3 ? Ea(t / 1e3, 2) + " kW" : Math.round(t).toLocaleString() + " W";
  function _a(t) {
    var o, l;
    const a = i();
    t.querySelectorAll("[data-icon-for]").forEach((c) => {
      var v;
      const m = k[c.dataset.iconFor], u = c.dataset.iconName || "";
      if (customElements.get("ha-state-icon") && m && !u) {
        let y = c.firstElementChild;
        (!y || y.localName !== "ha-state-icon") && (c.textContent = "", y = document.createElement("ha-state-icon"), c.appendChild(y)), y.hass = a, y.stateObj = m;
      } else if (customElements.get("ha-icon")) {
        let y = c.firstElementChild;
        (!y || y.localName !== "ha-icon") && (c.textContent = "", y = document.createElement("ha-icon"), c.appendChild(y)), y.icon = u || ((v = m == null ? void 0 : m.attributes) == null ? void 0 : v.icon) || "mdi:circle-medium";
      } else c.textContent || (c.textContent = (c.dataset.letter || Dt(c.dataset.iconFor) || "?").trim().charAt(0).toUpperCase());
    }), (o = t.querySelectorAll) == null || o.call(t, ".tfIcon").forEach(ua), (l = t.classList) != null && l.contains("tfIcon") && ua(t), Vn();
  }
  const Ve = /* @__PURE__ */ new Map();
  function ua(t) {
    var m, u, v;
    const a = (((m = t.closest("[data-k]")) == null ? void 0 : m.dataset.k) || "") + "|" + (t.dataset.iconFor || ((u = t.querySelector("[data-icon-for]")) == null ? void 0 : u.dataset.iconFor) || t.getAttribute("aria-label") || ""), o = getComputedStyle(t), l = { backgroundColor: o.backgroundColor, color: o.color }, c = Ve.get(a);
    Ve.set(a, l), !(!c || c.backgroundColor === l.backgroundColor && c.color === l.color || (v = window.matchMedia) != null && v.call(window, "(prefers-reduced-motion: reduce)").matches) && t.animate([c, l], { duration: 180, easing: "ease" });
  }
  const Wr = "[data-icon-for]>:is(ha-state-icon,ha-icon),.tfIcon>svg", gi = (t) => {
    const a = [t];
    for (; a.length; ) {
      const o = a.shift();
      if (o.localName === "svg") return o;
      o.shadowRoot && a.push(...o.shadowRoot.children), a.push(...o.children);
    }
    return null;
  };
  function jn(t) {
    var X, Ct, at;
    const a = t.localName === "svg" ? t : gi(t), o = a ? [...a.querySelectorAll("path,rect,circle,ellipse,polygon,polyline,line")] : [];
    if (!o.length) return !a;
    const l = (X = t.closest(".tfIcon")) == null ? void 0 : X.offsetWidth;
    if (l === void 0) return !0;
    if (!l) return !1;
    const c = l + "|" + o.map((lt) => lt.getAttribute("d") || lt.localName).join("|");
    if (t.dataset.fitted === c) return !0;
    let m = 1 / 0, u = 1 / 0, v = -1 / 0, y = -1 / 0;
    for (const lt of o) {
      const F = lt.getBBox(), xt = getComputedStyle(lt), G = xt.stroke !== "none" ? (parseFloat(xt.strokeWidth) || 0) / 2 : 0;
      !F.width && !F.height || (m = Math.min(m, F.x - G), u = Math.min(u, F.y - G), v = Math.max(v, F.x + F.width + G), y = Math.max(y, F.y + F.height + G));
    }
    if (!(v > m)) return !1;
    const H = (at = (Ct = a.viewBox) == null ? void 0 : Ct.baseVal) != null && at.width ? a.viewBox.baseVal : { x: 0, y: 0, width: 24, height: 24 }, I = l - 14, D = I * H.width / Math.max(v - m, y - u), q = D / H.width;
    return t.localName === "svg" ? (t.style.width = D + "px", t.style.height = D + "px") : t.style.setProperty("--mdc-icon-size", D + "px"), a.style.translate = ((H.x + H.width / 2 - (m + v) / 2) * q).toFixed(2) + "px " + ((H.y + H.height / 2 - (u + y) / 2) * q).toFixed(2) + "px", t.dataset.fitted = c, !0;
  }
  let zn = 0;
  function Ia(t = 0) {
    clearTimeout(zn), [...n.querySelectorAll(Wr)].filter((o) => !jn(o)).length && t < 5 && (zn = setTimeout(() => Ia(t + 1), 300));
  }
  function Vn() {
    clearTimeout(zn), zn = setTimeout(() => Ia(), 60);
  }
  const nr = (t) => {
    var a, o, l;
    return t.startsWith("light.") && k[t] && !Kt(t).icon && !((l = (o = (a = i()) == null ? void 0 : a.entities) == null ? void 0 : o[t]) != null && l.icon) ? "mdi:lightbulb" : "";
  }, Ue = (t, a, o) => (a = a || nr(t), ' data-icon-for="' + J(t) + '"' + (a ? ' data-icon-name="' + J(a) + '"' : "") + (o ? ' data-letter="' + J(o) + '"' : "")), Qa = (t) => t.endsWith("_solar_power") ? "mdi:solar-power-variant" : Kt(t).rang ? "mdi:doorbell" : "", ye = (t, a, o, l) => J([t, a, o, l ? JSON.stringify(l) : ""].join("|")), tn = (t) => J(JSON.stringify(t));
  function go(t, a) {
    var c, m;
    const o = J(Dt(a) + ", " + oa(a));
    return '<div class="activityRow' + (Number.isFinite(Number((c = k[a]) == null ? void 0 : c.state)) && ((m = k[a]) == null ? void 0 : m.state) !== "" ? ' tap" role="button" tabindex="0" data-open="' + J(t + "|" + a) + '" aria-label="' + o + '. Show the last 24 hours"' : '" aria-label="' + o + '"') + '><div class="tfIcon" aria-hidden="true"' + Ue(a, Qa(a)) + '></div><div><div class="activityRowName">' + J(Dt(a)) + '</div><div class="activityRowMeta">' + J(oa(a)) + "</div></div></div>";
  }
  const vi = (t, a, o) => '<div class="activityRow" aria-label="' + J(t + ", " + a) + '"><div class="tfIcon" aria-hidden="true"' + Ue("", o, t) + '></div><div><div class="activityRowName">' + J(t) + '</div><div class="activityRowMeta">' + J(a) + "</div></div></div>";
  function or(t) {
    var o;
    const a = ((o = k[t]) == null ? void 0 : o.state) === "on";
    return '<div class="activityRow tfPlug' + (a ? " on" : "") + '"><button class="tfIcon" type="button" data-act="' + ye("switch", "toggle", t) + '" aria-label="Turn ' + J(Dt(t)) + (a ? " off" : " on") + '"' + Ue(t) + '></button><button class="tfName" type="button" data-more="' + J(t) + '" aria-label="' + J(Dt(t) + ", " + oa(t) + ". More info") + '"><span class="activityRowName">' + J(Dt(t)) + '</span><span class="activityRowMeta">' + J(oa(t)) + "</span></button></div>";
  }
  const vo = (t) => {
    var a;
    return ((a = zt.get(t)) == null ? void 0 : a.name) ?? Dt(t);
  }, bi = (t) => {
    var a;
    return ((a = zt.get(t)) == null ? void 0 : a.text) ?? oa(t);
  };
  function Sn(t) {
    var o;
    const a = (o = zt.get(t)) == null ? void 0 : o.icon;
    return '<div class="tfOpen"><div class="tfOpenHead"><div class="tfIcon" aria-hidden="true"' + (a ? Ue("", a, vo(t)) : Ue(t, Qa(t))) + '></div><div><div class="activityRowName">' + J(vo(t)) + '</div><div class="activityRowMeta">' + J(bi(t)) + '</div></div><button class="tfBack" type="button" data-close aria-label="Close ' + J(vo(t)) + '’s last 24 hours">' + Wd + '</button></div><svg class="tfGraph" data-graph="' + J(t) + '" role="img" aria-label="' + J(vo(t)) + ', last 24 hours"></svg></div>';
  }
  function Da(t, a, o, l, c = "", m = null, u = "") {
    const v = ot && ot.key === t;
    return '<section class="card tfCard' + (u ? " " + u : "") + (v ? " open" : "") + '" data-tf data-k="' + J(t) + '" style="order:' + a + (v && ot.h ? ";min-height:" + ot.h + "px" : "") + '" aria-label="' + J(o) + '"><div class="activityHeader">' + (m ? '<button class="activityTitle tfTitleBtn" type="button" data-more="' + J(m) + '" aria-label="' + J(o + (k[m] ? ", " + oa(m) : "") + ". More info") + '">' + J(o) + "</button>" : '<div class="activityTitle">' + J(o) + "</div>") + "</div>" + (v ? Sn(ot.id) : '<div class="activityRows">' + l.join("") + "</div>" + c) + "</section>";
  }
  function Nn(t, a) {
    const o = "readings:" + t.id, l = t.readings.map((c) => go(o, c));
    return t.power != null && l.push(vi("Power now", ar(t.power), "mdi:flash")), Da(o, a, "Readings", l.concat(t.plugs.map(or)));
  }
  function qr(t, a) {
    var v;
    const o = "energy:" + t.id, [l, c] = [t.solar.find((y) => y.endsWith("_power")), t.solar.find((y) => y.endsWith("_today"))], m = [l, c].filter(Boolean).map((y) => go(o, y)), u = Number(((v = k[l]) == null ? void 0 : v.state) || 0) * 1e3;
    return ue.grid && (m.push(go(o, ue.grid)), m.push(vi("House use", ar(u + Number(k[ue.grid].state)), "mdi:home-lightning-bolt"))), Da(o, a, "Energy", m, '<div class="tfCardGraph"><svg class="tfGraph" data-solar role="img" aria-label="Solar, last 24 hours"></svg></div>');
  }
  const ir = (t, a) => Da("plant:" + t.id, a, Dt(t.id), t.readings.map((o) => go("plant:" + t.id, o)), "", t.id);
  function en(t, a, o, l, c, m, u = null) {
    const v = o == null ? null : Math.max(0, Math.min(1, o)), y = v == null ? 0 : Math.round(v * 100);
    return '<div class="tfBar ' + t + '" role="slider" tabindex="0" aria-label="' + J(l) + '" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + y + '"' + (c ? ' aria-valuetext="' + J(c) + '"' : "") + ' data-drag="' + J(t + "|" + a) + '">' + (u != null ? '<span class="was" aria-hidden="true" style="left:' + u + '%"></span>' : "") + (m ? v == null ? "" : '<b style="left:' + y + '%"></b>' : '<i style="width:' + y + '%"></i>') + "</div>";
  }
  const ia = "move-assistant-house-last-bright", za = (() => {
    try {
      return JSON.parse(Ki.get(ia)) || {};
    } catch {
      return {};
    }
  })();
  let rr = 0;
  const bo = (t, a) => {
    !a || za[t] === a || (za[t] = a, clearTimeout(rr), rr = setTimeout(() => Ki.set(ia, JSON.stringify(za)), 500));
  }, Ho = (t, a, o, l) => '<div class="tfStep" role="group" aria-label="' + J(t) + '"><button type="button" data-act="' + o + '" aria-label="Lower ' + J(t.toLowerCase()) + '">' + Yc.down + "</button><output>" + J(a) + '</output><button type="button" data-act="' + l + '" aria-label="Raise ' + J(t.toLowerCase()) + '">' + Yc.up + "</button></div>", h = (t, a, o) => '<div class="' + t + '" role="group" aria-label="' + J(a) + '">' + o.filter(Boolean).map((l) => '<button type="button" data-act="' + l.act + '"' + (l.pressed != null ? ' aria-pressed="' + l.pressed + '"' : "") + (l.disabled ? " disabled" : "") + (l.aria ? ' aria-label="' + J(l.aria) + '"' : "") + ">" + (l.html || J(l.label)) + "</button>").join("") + "</div>", S = (t, a) => "width:" + Math.round(Math.max(0, Math.min(1, (t - a * 25) / 25)) * 1e3) / 10 + "%;opacity:" + (0.6 + 0.4 * a / 3).toFixed(2), C = (t) => "left:calc(4px + " + t / 100 + " * (100% - 8px))", R = (t, a) => '<div class="tfBlocks" role="slider" tabindex="0" aria-label="' + J(Dt(t)) + ' position" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + Math.round(a) + '" aria-valuetext="' + Math.round(a) + '% open" data-blocks="' + J(t) + '">' + [0, 1, 2, 3].map((o) => '<span><i style="' + S(a, o) + '"></i><b' + (a >= (o + 1) * 25 - 12 ? ' class="lit"' : "") + ">" + (o + 1) * 25 + "<small>%</small></b></span>").join("") + '<output class="tfTip" aria-hidden="true" style="' + C(a) + '">' + Math.round(a) + "%</output></div>";
  function z(t, a) {
    t.querySelectorAll(":scope>span").forEach((l, c) => {
      l.firstElementChild.setAttribute("style", S(a, c)), l.lastElementChild.classList.toggle("lit", a >= (c + 1) * 25 - 12);
    });
    const o = t.querySelector(".tfTip");
    o.setAttribute("style", C(a)), o.textContent = Math.round(a) + "%", t.setAttribute("aria-valuenow", String(Math.round(a))), t.setAttribute("aria-valuetext", Math.round(a) + "% open");
  }
  const K = (t, a) => '<div class="tfTilt" role="slider" tabindex="0" aria-label="' + J(Dt(t)) + ' tilt" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + Math.round(a) + '" aria-valuetext="' + Math.round(a) + '% open" data-drag="tilt|' + J(t) + '"><i style="width:calc((100% - 8px) * ' + a / 100 + ')"></i><span' + (a > 8 ? ' class="lit"' : "") + ">Shut</span><span" + (a > 92 ? ' class="lit"' : "") + ">Open</span></div>", nt = (t, a, o) => '<div class="tfSeg tfCoverBtns" role="group" aria-label="' + J(Dt(t)) + '">' + [
    Ut(t, mh) && ["open", "Open", "open_cover", a >= 100 && !o],
    Ut(t, vh) && ["stop", "Stop", "stop_cover", !1],
    Ut(t, gh) && ["close", "Close", "close_cover", a <= 0 && !o]
  ].filter(Boolean).map(([l, c, m, u]) => '<button type="button" data-act="' + ye("cover", m, t) + '" aria-label="' + c + '"' + (u ? " disabled" : "") + ">" + bh[l] + "</button>").join("") + "</div>", bt = (t, a) => '<button class="tfIcon' + (a.art ? " art" : "") + '" type="button" data-act="' + a.button.act + '" aria-label="' + J(a.button.label) + '"' + (a.art ? ' style="background-image:url(&quot;' + J(a.art) + '&quot;)"' : Ue(t, a.icon)) + "></button>", kt = (t) => '<button class="tfName" type="button" data-more="' + J(t) + '" aria-label="' + J(Dt(t) + ", " + oa(t) + ". More info") + '"><span class="activityRowName">' + J(Dt(t)) + '</span><span class="activityRowMeta">' + J(oa(t)) + "</span></button>";
  function Ft(t, a = !1, o = null) {
    const l = Gn(t), c = t.startsWith("light.") && _t(t) && !(o && Di(t) < 3), m = o || (a && t.startsWith("light.") ? ["bright"] : null), u = c ? ['<div class="tfDacPad" data-dac="' + (a ? "more:" : o ? "dash:" : "tile:") + J(t) + '"></div>'] : l.sections.map((v, y) => v && (!m || m.includes((l.parts || [])[y])) ? v : "").filter(Boolean);
    return '<div class="tfAction' + (c ? " tfDac" : "") + (l.on ? " on" : "") + '" data-k="' + J(t) + '"' + (l.tone ? ' data-tone="' + l.tone + '"' : "") + qn(t) + '><div class="tfActionHead">' + bt(t, l) + kt(t) + "</div>" + u.join("") + "</div>";
  }
  const Tt = "dual-controller-v3", Bt = "https://cdn.jsdelivr.net/gh/mbb365/Dual-Axis-Controller-v4@v9.0.5/dist/dual-axis-controller-v4.js";
  let Yt = null;
  async function Vt() {
    if (Yt || customElements.get(Tt)) return;
    Yt = "loading";
    const t = await Promise.resolve().then(() => B({ type: "lovelace/resources" })).catch(() => null), a = Array.isArray(t) && t.some((l) => /dual-axis-controller/i.test(l.url || ""));
    if (await Promise.race([customElements.whenDefined(Tt), new Promise((l) => setTimeout(l, a ? 8e3 : 0))]), customElements.get(Tt)) return;
    const o = Object.assign(document.createElement("script"), { src: Bt });
    o.onerror = () => {
      Yt = "failed", V();
    }, document.head.appendChild(o);
  }
  const Nt = /* @__PURE__ */ new Map(), pe = (t) => (Rt.lightStyles[t] || Rt.lights) === "dac", Zt = () => Rt.lights === "dac" || Object.values(Rt.lightStyles).includes("dac");
  function _t(t) {
    return pe(t) && !!customElements.get(Tt);
  }
  const $t = (t) => Rt.lightPads[t] || Rt.dacPad, oe = () => {
    const t = i();
    return t && {
      ...t,
      themes: { ...t.themes || {}, darkMode: !g.classList.contains("light") },
      callService: (a, o, l, ...c) => t.callService(a, ...Je(a, o, l), ...c)
    };
  }, fa = "ha-card,.hc.hcTile{padding:0!important;border:0!important;border-radius:0!important;background:none!important;box-shadow:none!important}.hcTileHead{display:none!important}.hc--dark{--hc-text:var(--color-text-primary,#f1f1f1)}.halo.is-size-tile .halo__pad-shell{height:var(--tf-dac-pad,198px)!important;transition:height .25s cubic-bezier(.2,.7,.3,1)}", Pt = (t) => {
    !t.shadowRoot || t.shadowRoot.querySelector("style[data-tf]") || (t.shadowRoot.appendChild(Object.assign(document.createElement("style"), { textContent: fa })).dataset.tf = "");
  }, Be = /* @__PURE__ */ new Map(), Ze = new ResizeObserver((t) => t.forEach(({ target: a }) => {
    const o = a.parentElement;
    !o || !a.offsetHeight || (o.style.removeProperty("min-height"), Be.set(o.dataset.dac, o.offsetHeight));
  }));
  function Ca(t) {
    t.querySelectorAll("[data-dac]").forEach((a) => {
      const o = a.dataset.dac;
      let l = Nt.get(o);
      if (!l) {
        const c = o.slice(o.indexOf(":") + 1);
        l = document.createElement(Tt), l.setConfig({ type: "custom:" + Tt, entity: c, pad: $t(c), tap_action: { action: "none" } }), Nt.set(o, l);
      }
      l.hass = oe(), l.parentNode !== a && a.replaceChildren(l), !l.offsetHeight && Be.has(o) && (a.style.minHeight = Be.get(o) + "px"), Ze.observe(l), Pt(l);
    });
  }
  function Cn() {
    const t = oe();
    Nt.forEach((a, o) => {
      a.isConnected ? a.hass = t : Nt.delete(o);
    });
  }
  customElements.whenDefined(Tt).then(() => {
    x && (T != null && T.querySelector("[data-tf]")) && Gs(aa);
  });
  const Ae = (t, a, o) => M.has(t + "|" + a) ? M.get(t + "|" + a) : o;
  function Gn(t) {
    var m;
    const a = k[t], o = a.attributes, l = t.split(".")[0], c = (u, v) => ({ act: ye(u, "toggle", t), label: v });
    if (l === "light") {
      const u = a.state === "on", v = Gt(t), [y, H] = ho(t), I = Ae("bright", t, co(a));
      u && bo(t, co(a));
      const D = Ae("ct", t, u && o.color_mode === "color_temp" ? o.color_temp_kelvin : null), q = Ae("hue", t, u && zd.includes(o.color_mode) && o.hs_color ? o.hs_color[0] : null);
      return { on: u, button: c("light", "Turn " + Dt(t) + (u ? " off" : " on")), parts: ["bright", "ct", "hue"], sections: [
        kn(t) && en("bright", t, I / 100, Dt(t) + " brightness", I + "%", !1, u ? null : za[t] ?? null),
        v.includes("color_temp") && en("ct", t, D == null ? null : (D - y) / (H - y), Dt(t) + " warm to cool", D == null ? "" : Math.round(D) + " kelvin", !0),
        v.some((X) => zd.includes(X)) && en("hue", t, q == null ? null : q / 360, Dt(t) + " colour", "", !0)
      ] };
    }
    if (l === "climate") {
      const u = o.target_temp_step || 0.5, v = Number(o.temperature);
      return { on: a.state !== "off", tone: a.state === "cool" || o.hvac_action === "cooling" ? "cool" : "heat", button: c("climate", "Turn " + Dt(t) + (a.state === "off" ? " on" : " off")), parts: ["step", "modes"], sections: [
        Number.isFinite(v) && Ho("Target temperature", Ea(v) + " °C", ye("climate", "set_temperature", t, { temperature: v - u }), ye("climate", "set_temperature", t, { temperature: v + u })),
        h("tfSeg", "Mode", (o.hvac_modes || []).map((y) => ({ label: De(y), act: ye("climate", "set_hvac_mode", t, { hvac_mode: y }), pressed: a.state === y })))
      ] };
    }
    if (l === "cover") {
      const u = a.state === "opening" || a.state === "closing", v = a.state === "closed", y = Te(t), H = mo(t);
      return { on: !v, tone: "blue", icon: Qc[Od(a)][v ? 1 : 0], button: c("cover", (v ? "Open " : "Close ") + Dt(t)), parts: ["blocks", "tilt", "buttons"], sections: [
        Ut(t, Jc) && R(t, y),
        H != null && K(t, H),
        nt(t, y, u)
      ] };
    }
    if (l === "humidifier") {
      const u = Number(o.humidity);
      return { on: a.state === "on", tone: "blue", icon: "mdi:air-humidifier", button: c("humidifier", "Turn " + Dt(t) + (a.state === "on" ? " off" : " on")), parts: ["step", "modes"], sections: [
        Number.isFinite(u) && Ho("Target humidity", u + "%", ye("humidifier", "set_humidity", t, { humidity: u - 1 }), ye("humidifier", "set_humidity", t, { humidity: u + 1 })),
        ((m = o.available_modes) == null ? void 0 : m.length) && h("tfSeg", "Mode", o.available_modes.map((v) => ({ label: De(v), act: ye("humidifier", "set_mode", t, { mode: v }), pressed: o.mode === v })))
      ] };
    }
    if (l === "media_player") {
      const u = a.state === "playing", v = a.state === "off" || a.state === "standby", y = Ae("vol", t, o.volume_level), H = v ? { act: ye("media_player", Ut(t, fh) ? "turn_on" : "toggle", t), label: "Turn " + Dt(t) + " on" } : a.state === "playing" || a.state === "paused" ? { act: ye("media_player", "media_play_pause", t), label: (u ? "Pause " : "Play ") + Dt(t) } : { act: ye("media_player", Ut(t, hh) ? "turn_off" : "toggle", t), label: "Turn " + Dt(t) + " off" };
      return { on: !v, tone: "blue", art: !v && o.entity_picture ? o.entity_picture : null, button: H, parts: ["playback", "volume"], sections: v ? [] : [
        (Ut(t, Kc) || Ut(t, $c) || Ut(t, Zc) || Ut(t, Xc)) && h("tfSeg", "Playback", [
          { html: Ql.prev, aria: "Previous", act: ye("media_player", "media_previous_track", t), disabled: !Ut(t, Kc) },
          { html: u ? Ql.pause : Ql.play, aria: u ? "Pause" : "Play", act: ye("media_player", "media_play_pause", t), disabled: !(Ut(t, Zc) || Ut(t, Xc)) },
          { html: Ql.next, aria: "Next", act: ye("media_player", "media_next_track", t), disabled: !Ut(t, $c) }
        ]),
        Ut(t, uh) && y != null && en("vol", t, y, Dt(t) + " volume", Math.round(y * 100) + "%")
      ] };
    }
    if (l === "vacuum") {
      const u = a.state === "cleaning", v = o.rooms || [], y = (I) => v.includes(I) ? v.filter((D) => D !== I) : v.concat(I), H = ye("vacuum", u ? "pause" : "start", t, Ui(t) ? { rooms: v } : null);
      return { on: u || a.state === "returning", tone: "blue", button: { act: H, label: (u ? "Pause " : "Start ") + Dt(t) }, parts: ["controls", "rooms"], sections: [
        h("tfSeg", Dt(t), [
          { label: u ? "Pause" : "Start", act: H },
          { label: "Dock", act: ye("vacuum", "return_to_base", t), disabled: a.state === "docked" },
          { label: "Locate", act: ye("vacuum", "locate", t) }
        ]),
        Ui(t) && h("tfChips", "Rooms to clean", ue.rooms.filter((I) => I.id !== "balcony").map((I) => ({ label: I.name, act: ye("vacuum", "set_rooms", t, { rooms: y(I.name) }), pressed: v.includes(I.name) })))
      ] };
    }
    if (l === "lock") {
      const u = a.state === "locked";
      return { on: !u, tone: "heat", button: { act: ye("lock", u ? "unlock" : "lock", t), label: (u ? "Unlock " : "Lock ") + Dt(t) }, parts: ["controls"], sections: [
        h("tfSeg", Dt(t), [
          { label: "Lock", act: ye("lock", "lock", t), pressed: u },
          { label: "Unlock", act: ye("lock", "unlock", t), pressed: a.state === "unlocked" },
          Ut(t, _h) && { label: "Open", act: ye("lock", "open", t), pressed: a.state === "open" }
        ])
      ] };
    }
    if (l === "alarm_control_panel") {
      const u = a.state === "disarmed";
      return { on: !u, tone: a.state === "triggered" ? "alarm" : "blue", button: { act: ye("alarm_control_panel", u ? "alarm_arm_away" : "alarm_disarm", t), label: u ? "Arm " + Dt(t) + ", away" : "Disarm " + Dt(t) }, parts: ["controls"], sections: [
        h("tfSeg", Dt(t), Dh.filter(([, , , v]) => !v || Ut(t, v)).map(([v, y, H]) => ({ label: y, act: ye("alarm_control_panel", H, t), pressed: a.state === v })))
      ] };
    }
    if (l === "valve") {
      const u = a.state === "open";
      return { on: u, tone: "blue", icon: "mdi:sprinkler-variant", button: c("valve", (u ? "Close " : "Open ") + Dt(t)), parts: ["controls"], sections: [
        h("tfSeg", Dt(t), [
          { label: "Open", act: ye("valve", "open_valve", t), pressed: u },
          { label: "Close", act: ye("valve", "close_valve", t), pressed: !u }
        ])
      ] };
    }
    return { on: !1, button: { act: "", label: Dt(t) }, sections: [] };
  }
  const wo = (t) => (Number.isInteger(Number(t)) ? String(Number(t)) : Ea(t)) + "°";
  function be(t) {
    var lt;
    const a = (F) => t.readings.find((xt) => Kt(xt).device_class === F), o = a("temperature"), l = a("humidity"), c = (F) => {
      var xt;
      return Number((xt = k[F]) == null ? void 0 : xt.state);
    }, m = (F) => t.actions.filter((xt) => F.test(xt)), u = t.lights.filter((F) => {
      var xt;
      return ((xt = k[F]) == null ? void 0 : xt.state) === "on";
    }), v = m(/^cover\./), y = v.filter((F) => {
      var xt;
      return ((xt = k[F]) == null ? void 0 : xt.state) !== "closed";
    }), H = [...new Set(v.map((F) => Od(k[F])))], I = m(/^climate\./)[0], D = m(/^humidifier\./)[0], q = m(/^media_player\./), X = q.find((F) => {
      var xt;
      return ((xt = k[F]) == null ? void 0 : xt.state) === "playing";
    }) || q.find((F) => {
      var xt;
      return ((xt = k[F]) == null ? void 0 : xt.state) === "paused";
    }), Ct = t.plugs.filter((F) => {
      var xt;
      return ((xt = k[F]) == null ? void 0 : xt.state) === "on";
    }), at = [];
    if (o && Number.isFinite(c(o)) && at.push({ key: "temp", id: o, kind: "reading", icon: No(o), label: "Temperature", value: Ea(c(o)) + "°" }), l && Number.isFinite(c(l)) && at.push({ key: "hum", id: l, kind: "reading", icon: No(l), label: "Humidity", value: Math.round(c(l)) + "%" }), t.lights.length && at.push({
      key: "lights",
      kind: "control",
      tone: "light",
      icon: No("", "mdi:lightbulb"),
      label: "Lights",
      value: u.length ? u.length + " of " + t.lights.length + " on" : "All off",
      short: u.length ? u.length + " on" : "Off",
      on: u.length > 0,
      light: u.length ? Or(u[0]) : "",
      acts: t.lights.map((F) => ["light", u.length ? "turn_off" : "turn_on", F]),
      aria: (u.length ? "Turn off" : "Turn on") + " the lights in " + t.name
    }), v.length) {
      const F = H.length === 1 ? wh[H[0]] : "covers", xt = Math.round(v.reduce((G, qt) => G + Rn(qt), 0) / v.length);
      at.push({
        key: "covers",
        kind: "control",
        tone: "blue",
        light: y.length ? Ja([146, 107, 199]) : "",
        icon: No("", ((lt = Qc[H[0]]) == null ? void 0 : lt[y.length ? 0 : 1]) || "mdi:window-shutter"),
        label: De(F),
        value: xt <= 0 ? "Closed" : xt >= 100 ? "Open" : xt + "% open",
        short: xt <= 0 ? "Closed" : xt + "%",
        on: y.length > 0,
        acts: v.map((G) => ["cover", y.length ? "close_cover" : "open_cover", G]),
        aria: (y.length ? "Close the " : "Open the ") + F + " in " + t.name
      });
    }
    if (I) {
      const F = Kt(I), xt = k[I].state === "off";
      at.push({
        key: "climate",
        kind: "control",
        tone: F.hvac_action === "cooling" ? "cool" : "heat",
        light: uo(I) ? Ja(uo(I)) : "",
        icon: No(I),
        label: Dt(I),
        value: xt ? "Off" : De(F.hvac_action || k[I].state) + " · " + wo(F.temperature),
        short: xt ? "Off" : wo(F.temperature),
        on: !xt,
        acts: [["climate", "toggle", I]],
        aria: "Turn " + Dt(I) + (xt ? " on" : " off")
      });
    }
    if (D) {
      const F = k[D].state === "on";
      at.push({
        key: "humidifier",
        kind: "control",
        tone: "blue",
        light: F ? Ja([33, 150, 243]) : "",
        icon: No("", "mdi:air-humidifier"),
        label: Dt(D),
        value: F ? "On · " + Kt(D).humidity + "%" : "Off",
        short: F ? Kt(D).humidity + "%" : "Off",
        on: F,
        acts: [["humidifier", "toggle", D]],
        aria: "Turn " + Dt(D) + (F ? " off" : " on")
      });
    }
    if (q.length) {
      const F = X || q[0], xt = k[F], G = xt.state === "playing";
      at.push({
        key: "media",
        kind: "control",
        tone: "blue",
        light: uo(F) ? Ja(uo(F)) : "",
        icon: No(F),
        label: Dt(F),
        value: oa(F),
        short: G ? "Playing" : xt.state === "paused" ? "Paused" : De(xt.state),
        on: G,
        acts: [["media_player", xt.state === "playing" || xt.state === "paused" ? "media_play_pause" : "toggle", F]],
        aria: (G ? "Pause " : "Play ") + Dt(F)
      });
    }
    return t.plugs.length && at.push({
      key: "plugs",
      kind: "control",
      tone: "blue",
      light: Ct.length ? Ja([255, 193, 7]) : "",
      icon: No("", "mdi:power-plug"),
      label: "Plugs",
      value: Ct.length ? Ct.length + " of " + t.plugs.length + " on" : "All off",
      short: Ct.length ? Ct.length + " on" : "Off",
      on: Ct.length > 0,
      acts: t.plugs.map((F) => ["switch", Ct.length ? "turn_off" : "turn_on", F]),
      aria: (Ct.length ? "Turn off" : "Turn on") + " the plugs in " + t.name
    }), t.alerts.forEach((F) => at.push(Kt(F).device_class === "moisture" ? { key: "alert:" + F, kind: "alert", icon: No(F), label: "Water leak" } : { key: "note:" + F, kind: "note", icon: No(F), label: Dt(F) + " " + oa(F).toLowerCase() })), at;
  }
  const Ba = (t, a) => {
    const o = (l) => t.actions.filter((c) => l.test(c));
    return {
      lights: t.lights,
      covers: o(/^cover\./),
      climate: o(/^climate\./).slice(0, 1),
      humidifier: o(/^humidifier\./).slice(0, 1),
      plugs: t.plugs,
      media: (() => {
        const l = o(/^media_player\./);
        return [l.find((c) => {
          var m;
          return ((m = k[c]) == null ? void 0 : m.state) === "playing";
        }) || l.find((c) => {
          var m;
          return ((m = k[c]) == null ? void 0 : m.state) === "paused";
        }) || l[0]].filter(Boolean);
      })()
    }[a] || [];
  }, xo = (t, a, o) => '<button class="' + a + (t.on ? " on" : "") + '" type="button" data-tone="' + t.tone + '" data-acts="' + tn(t.acts) + '" aria-label="' + J(t.aria) + '" aria-pressed="' + t.on + '">' + o + "</button>", Ie = (t) => '<button class="tfAName" type="button" data-go="' + J(t.id) + '" aria-label="Open ' + J(t.name) + '">' + J(t.name) + "</button>";
  function an(t, a, o = !1) {
    const l = a.find((v) => v.key === "lights"), c = !!(l != null && l.on), m = "", u = '<span class="tfAreaGlyph"' + Ue("area:" + t.id, t.icon || "mdi:texture-box", t.name) + "></span>";
    return o || !l ? '<span class="tfIcon tfAreaIcon' + (c ? " on" : "") + '"' + m + ' aria-hidden="true">' + u + "</span>" : '<button class="tfIcon tfAreaIcon' + (c ? " on" : "") + '" type="button"' + m + ' data-acts="' + tn(l.acts) + '" aria-label="' + J(l.aria) + '" aria-pressed="' + c + '">' + u + "</button>";
  }
  const Un = (t) => t.filter((a) => a.kind === "alert" || a.kind === "note").map((a) => '<span class="sourceTag">' + J(a.label) + "</span>").join(" "), Fo = (t) => t.readings.find((a) => Kt(a).device_class === "temperature") || [...t.readings, ...t.solar, ...t.openings, ...t.actions, ...t.plugs].find((a) => k[a]) || null, va = (t, a) => {
    const o = Dt(a);
    return o.toLowerCase().startsWith(t.name.toLowerCase() + " ") ? De(o.slice(t.name.length + 1)) : o;
  };
  function wi(t) {
    const a = k[t], o = Kt(t), l = t.split(".")[0], c = Number(a.state);
    if (a.state === "unavailable") return { text: "Unavailable" };
    if (l === "sensor" && Number.isFinite(c)) {
      if (o.device_class === "temperature") return { text: wo(c) };
      const m = o.unit_of_measurement || "";
      return m === "%" ? { text: Math.round(c) + "%" } : { text: Ea(c, Number.isInteger(c) ? 0 : 1), unit: m };
    }
    if (l === "climate" && (o.current_temperature ?? o.temperature) != null) return { text: wo(o.current_temperature ?? o.temperature) };
    if (l === "light") return { text: a.state !== "on" ? "Off" : kn(t) ? co(a) + "%" : "On" };
    if (l === "cover") {
      const m = Rn(t);
      return { text: m <= 0 ? "Closed" : m >= 100 ? "Open" : m + "%" };
    }
    return l === "humidifier" ? { text: a.state === "on" ? o.humidity + "%" : "Off" } : l === "media_player" ? { text: a.state === "playing" ? "Playing" : a.state === "paused" ? "Paused" : De(a.state) } : { text: oa(t) };
  }
  const sr = (t, a, o) => {
    const l = o.find((v) => v.key === "temp"), c = o.find((v) => v.key === "hum"), m = Kt(a), u = k[a].state === "off";
    return a.startsWith("climate.") ? [va(t, a), u ? "Off" : De(m.hvac_action || k[a].state) + (m.temperature != null ? " · " + wo(m.temperature) : ""), c && c.value + " humidity"].filter(Boolean).join(" · ") : [!(l && l.id === a) && va(t, a), l && l.id !== a && l.value, c && c.id !== a && c.value + " humidity"].filter(Boolean).join(" · ");
  };
  function yo(t, a, o) {
    const l = o && wi(o), c = o ? sr(t, o, a) : "", m = (y) => {
      const H = Ba(t, y.key);
      return H.length === 1 ? H[0] : "group:" + t.id + ":" + y.key;
    }, u = a.filter((y) => y.kind === "control").slice(0, 4).map((y) => '<div class="tfATile' + (y.on ? " on" : "") + '" data-tone="' + y.tone + '"' + (y.light ? ' data-light style="' + y.light + '"' : "") + ">" + xo(y, "tfIcon", y.icon) + '<button class="tfName" type="button" data-more="' + J(m(y)) + '" aria-label="' + J(t.name + " " + y.label.toLowerCase() + ", " + y.value + ". Open") + '"><span class="activityRowName">' + J(y.label) + '</span><span class="activityRowMeta">' + J(y.value) + "</span></button></div>"), v = Un(a);
    return '<div class="workoutPanelTop">' + an(t, a) + '<div class="tfATitle">' + Ie(t) + "</div>" + (v ? '<div class="tfATags">' + v + "</div>" : "") + "</div>" + (o ? '<button class="tfABig" type="button" data-more="' + J(o) + '" aria-label="' + J(Dt(o) + ", " + oa(o) + ". More info") + '"><span class="tfABigMain' + (l.text.length > 7 ? " long" : "") + '">' + J(l.text) + (l.unit ? '<span class="tfABigUnit">' + J(l.unit) + "</span>" : "") + "</span>" + (c ? '<span class="tfABigSub">' + J(c) + "</span>" : "") + "</button>" : "") + (u.length ? '<div class="tfATiles">' + u.join("") + "</div>" : "");
  }
  function ko(t) {
    const a = t.id === St, o = be(t), l = Fo(t), c = l && wi(l), m = [...o.filter((u) => u.kind === "control"), ...o.filter((u) => u.kind !== "control" && u.kind !== "reading")].slice(0, 4);
    return '<article class="workoutPanel tfAreaPanel' + (a ? " active" : "") + '" data-area="' + J(t.id) + '" tabindex="0" aria-expanded="' + a + '" aria-label="' + J(t.name) + '"><div class="panelExpanded"' + (a ? "" : " inert") + ">" + yo(t, o, l) + '</div><div class="panelCollapsed tfACollapsed"><div class="tfACTop">' + an(t, o, !0) + '<span class="tfACName">' + J(t.name) + '</span></div><span class="tfACMain">' + (c ? J(c.text + (c.unit ? " " + c.unit : "")) : "") + '</span><span class="tfACTiles" aria-hidden="true">' + m.map((u) => '<span class="tfACTile"><span class="tfIcon' + (u.kind === "alert" ? " alert" : "") + '"' + (u.on && u.light ? ' data-light style="' + u.light + '"' : "") + ">" + u.icon + "</span></span>").join("") + "</span></div></article>";
  }
  let Yn = [];
  const Zn = (t) => '<div class="tfAreas" data-tf data-k="areas" style="order:' + t + '"><section class="workoutGallery tfAreaGallery" aria-label="Areas">' + Yn.map(ko).join("") + "</section></div>", jr = (t) => t.startsWith("room:"), Tn = (t) => Yn.find((a) => "room:" + a.id === t);
  function pl(t, a) {
    const o = be(t), l = Fo(t), c = l && wi(l), m = l ? sr(t, l, o) : "", u = c ? c.text + (c.unit ? " " + c.unit : "") : "", v = (q) => {
      const X = Ba(t, q.key);
      return X.length === 1 ? X[0] : "group:" + t.id + ":" + q.key;
    }, y = o.filter((q) => q.kind === "control").slice(0, 4), H = (q) => q.on && q.light ? ' data-light style="' + q.light + '"' : "", I = y.map((q) => '<button class="tfIcon' + (q.on ? " on" : "") + '" type="button" data-tone="' + q.tone + '"' + H(q) + ' data-more="' + J(v(q)) + '" aria-label="' + J(q.label + ", " + q.value + ". Open its controls") + '">' + q.icon + "</button>"), D = y.map((q) => '<button class="tfRoomDev" type="button" data-more="' + J(v(q)) + '" aria-label="' + J(q.label + ", " + q.value + ". Open its controls") + '"><span class="tfIcon' + (q.on ? " on" : "") + '" data-tone="' + q.tone + '"' + H(q) + ">" + q.icon + '</span><span class="tfRoomDevName"><span class="activityRowName">' + J(q.label) + '</span><span class="activityRowMeta">' + J(q.value) + "</span></span></button>");
    return '<div class="tfAction tfRoomTile" data-k="' + J(a) + '" data-go="' + J(t.id) + '"><div class="tfActionHead"><span class="tfIcon tfRoomIcon" aria-hidden="true"><span class="tfAreaGlyph"' + Ue("area:" + t.id, t.icon || "mdi:texture-box", t.name) + '></span></span><button class="tfName" type="button" data-go="' + J(t.id) + '" aria-label="Open ' + J(t.name) + '"><span class="activityRowName">' + J(t.name) + "</span>" + (u || m ? '<span class="activityRowMeta">' + (u ? '<span class="tfRoomInline">' + J(u) + (m ? " · " : "") + "</span>" : "") + J(m) + "</span>" : "") + "</button></div>" + (u ? '<div class="tfRoomReading" aria-hidden="true"><span class="tfRoomBig">' + J(u) + "</span>" + (m ? '<span class="tfRoomSub">' + J(m) + "</span>" : "") + "</div>" : "") + (I.length ? '<div class="tfRoomDevices">' + I.join("") + '</div><div class="tfRoomHeads">' + D.join("") + "</div>" : "") + "</div>";
  }
  const pd = () => [
    { key: "home", name: "Home", ids: ue.homeVacuums },
    ...ue.rooms.map((t) => ({ key: "room:" + t.id, name: t.name, room: t, ids: t.actions }))
  ], Oo = (t, a, o) => t + " " + (t === 1 ? a : o), Va = () => (j.favourites ?? vt.favorite_entities ?? []).filter((t) => k[t]);
  function ul() {
    if (!se) {
      const a = Object.entries(ta).sort((l, c) => c[1] - l[1]).map(([l]) => l), o = ue.rooms.flatMap((l) => l.actions);
      se = [.../* @__PURE__ */ new Set([...Qt, ...a, ...o.filter((l) => Gn(l).on), ...o])];
    }
    const t = Va();
    return se.filter((a) => k[a] && k[a].state !== "unavailable" && !t.includes(a));
  }
  let fl = !1;
  function lr() {
    if (!fl || j.favSeeded || !ue.rooms.length) return;
    const t = (o) => Object.keys(k).find((l) => Ui(l) && o(l)), a = [t((o) => o.startsWith("climate.")), t((o) => o.startsWith("cover.") && /curtain/.test(o)), t((o) => o.startsWith("valve.")), ue.security.locks[0]];
    j = { ...j, favourites: [.../* @__PURE__ */ new Set([...j.favourites ?? vt.favorite_entities ?? [], ...a.filter(Boolean)])], favSeeded: !0 }, La();
  }
  const dr = () => j.suggest ?? !vt.hide_suggested_entities;
  function cr() {
    const t = new Set(j.favHidden || []), a = Va().filter((l) => !t.has(l)), o = dr() ? ul().filter((l) => !t.has(l) && Yr(l)) : [];
    return [...a, ...o].slice(0, Rh);
  }
  const ud = (t) => {
    const a = Va().includes(t);
    return '<button class="tfStar" type="button" data-star="' + J(t) + '" aria-pressed="' + a + '" aria-label="Favourite: ' + J(Dt(t)) + '">' + Eh(a) + "</button>";
  };
  function Wo(t, { area: a = !1, star: o = !1, plain: l = !1, say: c = null, alert: m = !1 } = {}) {
    var Ct, at, lt, F, xt, G;
    const u = l && ((xt = (Ct = i()) == null ? void 0 : Ct.devices) == null ? void 0 : xt[(F = (lt = (at = i()) == null ? void 0 : at.entities) == null ? void 0 : lt[t]) == null ? void 0 : F.device_id]), v = u && (u.name_by_user || u.name) || Dt(t), y = t.split(".")[0], H = !l && ed.includes(y) ? Gn(t) : null, I = H ? H.on : ["on", "open", "playing"].includes((G = k[t]) == null ? void 0 : G.state), D = l ? null : H ? H.button : xh.includes(y) ? { act: ye(y, "toggle", t), label: "Turn " + Dt(t) + (I ? " off" : " on") } : y === "scene" || y === "script" ? { act: ye(y, "turn_on", t), label: "Run " + Dt(t) } : null, q = (c ?? oa(t)) + (a && Se.get(t) ? " · " + Se.get(t) : ""), X = (H == null ? void 0 : H.icon) || Qa(t);
    return '<div class="activityRow' + (D ? " tfPlug" : "") + (I ? " on" : "") + (o ? " tfPick" : "") + (m ? " alert" : "") + '" data-k="' + J((a ? "fav:" : "row:") + t) + '" data-tone="' + (y === "light" ? "light" : (H == null ? void 0 : H.tone) || "blue") + '"' + qn(t) + ">" + (D && !o ? '<button class="tfIcon" type="button" data-act="' + D.act + '" aria-label="' + J(D.label) + '"' + Ue(t, X) + "></button>" : '<div class="tfIcon" aria-hidden="true"' + Ue(t, X) + "></div>") + '<button class="tfName" type="button" data-more="' + J(t) + '" aria-label="' + J(v + ", " + q + ". More info") + '"><span class="activityRowName">' + J(v) + '</span><span class="activityRowMeta">' + J(q) + "</span></button>" + (o ? ud(t) : "") + "</div>";
  }
  const Mo = () => {
    var t;
    return k[(t = j.sources) == null ? void 0 : t.weather] ? j.sources.weather : k["weather.forecast_home"] ? "weather.forecast_home" : Object.keys(k).find((a) => a.startsWith("weather."));
  };
  function As() {
    var o;
    const t = (l) => Object.keys(k).filter((c) => c.startsWith("binary_sensor.") && l.includes(Kt(c).device_class));
    return ((o = Mt.alert_entities) != null && o.length ? Mt.alert_entities : [...t(["moisture", "smoke", "gas"]).map((l) => ({ entity: l, severity: "alert" })), ...t(td).map((l) => ({ entity: l, severity: "warning" }))]).filter((l) => k[l.entity]).map((l) => ({ ...l, on: ["on", "open", "unlocked", "triggered", "problem"].includes(k[l.entity].state) }));
  }
  function zr() {
    const t = Object.keys(qd), a = /* @__PURE__ */ new Set(), o = [];
    return (vt.shortcuts || []).forEach((l) => {
      if (l.type === "summary") {
        if (!t.includes(l.key) || a.has(l.key)) return;
        a.add(l.key);
      }
      o.push(l);
    }), t.forEach((l) => {
      a.has(l) || o.push({ type: "summary", key: l });
    }), o;
  }
  function pr() {
    var lt;
    const t = ((lt = i()) == null ? void 0 : lt.entities) || {}, a = (F) => Kt(F).device_class, o = Object.keys(k).filter((F) => F.startsWith("sensor.") && a(F) === "battery" || F.startsWith("binary_sensor.") && ["battery", "problem"].includes(a(F))), l = ue.rooms.flatMap((F) => F.plants.map((xt) => xt.id));
    if (!o.length && !l.length) return null;
    const c = (F) => {
      var G;
      const xt = (G = t[F]) == null ? void 0 : G.device_id;
      return !!xt && Object.keys(k).some((qt) => {
        var Fe;
        return qt.startsWith("binary_sensor.") && ((Fe = t[qt]) == null ? void 0 : Fe.device_id) === xt && a(qt) === "battery_charging" && k[qt].state === "on";
      });
    }, m = (F) => F.startsWith("vacuum.") ? Kt(F).battery_level <= 20 && k[F].state !== "docked" : F.startsWith("binary_sensor.") ? a(F) === "battery" && k[F].state === "on" : parseFloat(k[F].state) <= 20 && !c(F), u = [...o, ...ue.vacuums].filter((F) => k[F] && m(F)), v = [...o.filter((F) => a(F) === "problem" && k[F].state === "on"), ...l.filter((F) => {
      var xt;
      return ((xt = k[F]) == null ? void 0 : xt.state) === "problem";
    })], y = o.filter((F) => k[F].state === "unavailable"), H = [.../* @__PURE__ */ new Set([...u, ...v, ...y])], I = (F) => {
      const xt = parseFloat(k[F].state);
      return a(F) === "battery" && Number.isFinite(xt) ? xt : 101;
    }, D = [...l, ...ue.vacuums, ...[...o].sort((F, xt) => I(F) - I(xt))].filter((F) => k[F] && !H.includes(F)), q = /* @__PURE__ */ new Map();
    D.forEach((F) => {
      var G;
      const xt = ((G = ue.areaOf) == null ? void 0 : G.call(ue, F)) || "";
      q.set(xt, [...q.get(xt) || [], F]);
    });
    const X = (F) => {
      const xt = ue.rooms.findIndex((G) => G.id === F);
      return F === "" ? 1 / 0 : xt < 0 ? ue.rooms.length : xt;
    }, Ct = [...q.keys()].sort((F, xt) => X(F) - X(xt)), at = (F) => {
      var xt, G, qt, Fe;
      return ((xt = ue.rooms.find((we) => we.id === F)) == null ? void 0 : xt.name) || ((Fe = (qt = (G = i()) == null ? void 0 : G.areas) == null ? void 0 : qt[F]) == null ? void 0 : Fe.name) || F;
    };
    return {
      value: [u.length && Oo(u.length, "low battery", "low batteries"), v.length && Oo(v.length, "problem", "problems"), y.length && Oo(y.length, "unavailable device", "unavailable devices")].filter(Boolean).join(", ") || "All good",
      plain: !0,
      groups: [{ name: "Needs attention", ids: H, alert: !0 }, ...Ct.map((F) => ({ name: F ? at(F) : Ct.length > 1 ? "Other devices" : "Devices", ids: q.get(F) }))].filter((F) => F.ids.length)
    };
  }
  function xi() {
    var Aa;
    const t = ue.rooms, a = ue.security, o = (Xt, qe) => Xt.actions.filter((oi) => qe.test(oi)), l = (Xt) => t.map((qe) => ({ name: qe.name, ids: Xt(qe) })).filter((qe) => qe.ids.length), c = t.flatMap((Xt) => Xt.lights), m = c.filter((Xt) => {
      var qe;
      return ((qe = k[Xt]) == null ? void 0 : qe.state) === "on";
    }).length, u = t.map((Xt) => Xt.readings.find((qe) => Kt(qe).device_class === "temperature")).filter(Boolean).map((Xt) => Number(k[Xt].state)).filter(Number.isFinite), [v, y] = [Ea(Math.min(...u)), Ea(Math.max(...u))], H = t.flatMap((Xt) => o(Xt, /^media_player\./)), I = H.filter((Xt) => {
      var qe;
      return ((qe = k[Xt]) == null ? void 0 : qe.state) === "playing";
    }).length, D = As(), q = D.filter((Xt) => Xt.severity === "warning" && Xt.on).length, X = a.locks.filter((Xt) => {
      var qe;
      return ["unlocked", "jammed", "open"].includes((qe = k[Xt]) == null ? void 0 : qe.state);
    }).length, Ct = a.alarms.filter((Xt) => {
      var qe;
      return ((qe = k[Xt]) == null ? void 0 : qe.state) === "disarmed";
    }).length, at = q ? Oo(q, "warning", "warnings") : null, lt = X ? X + " unlocked" : Ct ? Ct + " disarmed" : at ? null : "All secure", F = pr(), xt = t.flatMap((Xt) => Xt.solar), G = xt.find((Xt) => Xt.endsWith("_power")), qt = {
      light: c.length && { value: m ? m + " on" : "All off", groups: l((Xt) => Xt.lights) },
      climate: u.length && { value: v === y ? v + "°" : v + " - " + y + "°", groups: l((Xt) => [...Xt.readings.filter((qe) => ["temperature", "humidity"].includes(Kt(qe).device_class)), ...o(Xt, /^(climate|humidifier)\./)]) },
      security: (a.alarms.length || a.locks.length) && { value: [at, lt].filter(Boolean).join(", "), groups: [{ name: "Alarm and locks", ids: [...a.alarms, ...a.locks] }, { name: "Doors and windows", ids: a.openings }].filter((Xt) => Xt.ids.length) },
      media_players: H.length && { value: I ? I + " playing" : "No media playing", groups: l((Xt) => o(Xt, /^media_player\./)) },
      maintenance: F,
      energy: ue.grid && { value: ar(Number(((Aa = k[G]) == null ? void 0 : Aa.state) || 0) * 1e3 + Number(k[ue.grid].state)) + " now", groups: [{ name: "Energy", ids: [...xt, ue.grid] }] }
    }, Fe = [], we = D.filter((Xt) => Xt.severity !== "warning" && Xt.on);
    return we.length && Fe.push({ key: "alerts", name: "Alerts", icon: "mdi:alarm-plus", colour: "#f44336", value: Oo(we.length, "active alert", "active alerts"), groups: [{ name: "Active", ids: we.map((Xt) => Xt.entity) }] }), zr().forEach((Xt) => {
      Xt.type !== "summary" ? Fe.push({ key: "path:" + Xt.path, name: Xt.label || Xt.path, icon: Xt.icon || "mdi:link-variant", colour: "", value: "" }) : !Xt.hidden && qt[Xt.key] && !(j.hiddenSums || []).includes(Xt.key) && Fe.push({ key: Xt.key, ...qd[Xt.key], ...qt[Xt.key] });
    }), Fe;
  }
  const ur = (t) => '<div class="activityRow tap tfSum" role="button" tabindex="0" data-summary="' + J(t.key) + '" data-k="sum:' + J(t.key) + '" aria-label="' + J(t.name + (t.value ? ", " + t.value : "")) + '"' + (t.key === "alerts" ? ' style="--sum:' + t.colour + ';--sum-ink:#ffffff"' : t.key === "climate" ? ' style="' + mi() + '"' : t.colour && pa(t.colour) ? ' style="' + pa(t.colour).slice(1) + '"' : "") + ">" + (t.key === "climate" ? tr : "") + '<div class="tfIcon" aria-hidden="true"' + Ue(t.id || "", t.icon, t.name) + '></div><div><div class="activityRowName">' + J(t.name) + "</div>" + (t.value ? '<div class="activityRowMeta">' + J(t.value) + "</div>" : "") + "</div></div>";
  function Vr(t) {
    const a = Va();
    j = { ...j, favourites: a.includes(t) ? a.filter((o) => o !== t) : [...a, t], favHidden: (j.favHidden || []).filter((o) => o !== t) }, La(), Ta();
  }
  function Pn(t) {
    document.querySelector("home-assistant") && (Y.pushState(null, "", t), window.dispatchEvent(new CustomEvent("location-changed", { detail: { replace: !1 } })));
  }
  function qo(t, a) {
    if (t.startsWith("path:")) {
      Pn(t.slice(5));
      return;
    }
    $s("summary:" + t, a);
  }
  async function fd() {
    const t = (u) => Promise.resolve().then(() => B(u)).catch(() => null), [a, o, l, c] = await Promise.all([
      t({ type: "frontend/get_user_data", key: tp }),
      t({ type: "frontend/get_system_data", key: "home" }),
      t({ type: "frontend/get_system_data", key: "security" }),
      t({ type: "usage_prediction/common_control" })
    ]), m = (a == null ? void 0 : a.value) || {};
    j = { favourites: m.favourites ?? null, sources: m.sources, hiddenSums: m.hiddenSums, dash: m.dash, named: m.named, favHidden: m.favHidden, suggest: m.suggest, favSeeded: m.favSeeded }, vt = (o == null ? void 0 : o.value) || {}, Mt = (l == null ? void 0 : l.value) || {}, Qt = Array.isArray(c == null ? void 0 : c.entities) ? c.entities : [], se = null, Object.keys(k).length && Ta(), yi(), fl = !0, lr();
  }
  const hl = "HomeCore";
  async function yi() {
    var l, c, m;
    const t = location.pathname.split("/")[1], a = j.named || [];
    if (!((c = (l = i()) == null ? void 0 : l.user) != null && c.is_admin) || !t || a.includes(t)) return;
    const o = () => {
      j = { ...j, named: [...a, t] }, La();
    };
    try {
      const u = (m = await B({ type: "lovelace/dashboards/list" })) == null ? void 0 : m.find((H) => H.url_path === t);
      if (!u || u.mode === "yaml") return;
      if (u.title === hl) {
        o();
        return;
      }
      const v = await B({ type: "lovelace/config", url_path: t }), y = ((v == null ? void 0 : v.views) || []).flatMap((H) => [...H.cards || [], ...(H.sections || []).flatMap((I) => I.cards || [])]);
      if (!y.length || !y.every((H) => (H == null ? void 0 : H.type) === "custom:move-assistant-card" && H.layout === "test-focus")) return;
      await B({ type: "lovelace/dashboards/update", dashboard_id: u.id, title: hl }), o();
    } catch {
    }
  }
  let Kn = null, ki = 0, fr = !1;
  const ml = (t) => {
    const a = t.split(".")[0], o = Kt(t).device_class;
    return Bh.includes(a) && (a !== "binary_sensor" || td.includes(o) || !!lp[o]);
  }, hr = (t) => t.startsWith("binary_sensor.") ? lp[Kt(t).device_class] : null;
  async function Ls() {
    var t;
    if (!(fr || Date.now() - ki < 30 * 1e3)) {
      fr = !0, ki = Date.now();
      try {
        const a = Object.keys(((t = i()) == null ? void 0 : t.states) || {}).filter(ml), o = a.length ? await B({ type: "logbook/get_events", start_time: new Date(Date.now() - 24 * 3600 * 1e3).toISOString(), end_time: (/* @__PURE__ */ new Date()).toISOString(), entity_ids: a }) : null;
        Kn = Array.isArray(o) ? o.filter((l) => l.entity_id && l.state != null && l.when) : null;
      } catch {
        Kn = null;
      }
      fr = !1, Ta();
    }
  }
  function Gr() {
    const t = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map(), o = (c) => {
      if (!k[c.entity_id] || !ml(c.entity_id) || !Yr(c.entity_id) || ["unavailable", "unknown"].includes(c.state)) return;
      if (hr(c.entity_id)) {
        const u = a.get(c.entity_id);
        c.state === "on" ? (!u || c.when > u.when + 1) && a.set(c.entity_id, { ...c, alarm: !0, cleared: null }) : u && !u.cleared && c.when > u.when && (u.cleared = c.when);
        return;
      }
      const m = t.get(c.entity_id);
      (!m || c.when > m.when + 1) && t.set(c.entity_id, c);
    };
    [...Kn || []].sort((c, m) => c.when - m.when).forEach(o);
    const l = Kn ? ki / 1e3 - 5 : 0;
    return Object.keys(k).forEach((c) => {
      var v;
      const m = k[c], u = m.last_changed ? Date.parse(m.last_changed) / 1e3 : 0;
      u > l && o({ entity_id: c, state: m.state, when: u, context_user_id: (v = m.context) == null ? void 0 : v.user_id });
    }), [...t.values(), ...a.values()].sort((c, m) => m.when - c.when).slice(0, Nh);
  }
  function gl(t) {
    var l;
    const a = t.context_user_id && Object.keys(k).find((c) => c.startsWith("person.") && Kt(c).user_id === t.context_user_id);
    if (a) return Dt(a);
    const o = (l = i()) == null ? void 0 : l.user;
    return o && t.context_user_id === o.id ? o.name : ["automation", "script"].includes(t.context_domain) || t.context_event_type === "automation_triggered" ? t.context_name || "Home Assistant" : "";
  }
  function hd(t) {
    const a = t.entity_id.split(".")[0], o = String(t.state);
    return a === "lock" ? { locked: "locked", unlocked: "unlocked", open: "opened", jammed: "jammed", locking: "locking", unlocking: "unlocking" }[o] || De(o).toLowerCase() : a === "cover" || a === "valve" ? { open: "opened", closed: "closed", opening: "opening", closing: "closing" }[o] || De(o).toLowerCase() : a === "binary_sensor" ? o === "on" ? "opened" : "closed" : a === "climate" ? o === "off" ? "turned off" : "set to " + De(o).toLowerCase() : a === "media_player" ? { playing: "started playing", paused: "paused", idle: "stopped", off: "turned off", standby: "turned off", on: "turned on" }[o] || De(o).toLowerCase() : a === "alarm_control_panel" ? (sp[o] || De(o)).toLowerCase() : a === "vacuum" ? { cleaning: "started cleaning", docked: "docked", returning: "went home", paused: "paused", idle: "stopped" }[o] || De(o).toLowerCase() : o === "on" ? "turned on" : o === "off" ? "turned off" : De(o).toLowerCase();
  }
  function Ha(t) {
    const a = t.entity_id, o = t.alarm && hr(a), l = Dt(a) + " " + (o ? o[0] : hd(t)), c = o ? Mn(t.when * 1e3) + (t.cleared ? " · " + o[1] + " since " + Mn(t.cleared * 1e3) : "") : [gl(t), Mn(t.when * 1e3)].filter(Boolean).join(" · ");
    return '<div class="activityRow' + (o ? " alert" : "") + '"><div class="tfIcon' + (o ? " alert" : "") + '" aria-hidden="true"' + Ue(a, Qa(a)) + '></div><button class="tfName" type="button" data-more="' + J(a) + '" data-at="' + Math.round(t.when * 1e3) + '" aria-label="' + J(l + ", " + c + ". More info") + '"><span class="activityRowName">' + J(l) + '</span><span class="activityRowMeta">' + J(c) + "</span></button></div>";
  }
  let $n = null, jo = 0;
  const md = [["electricity", "Electricity", 4.3, "kWh"], ["solar", "Solar", 2.3, "kWh"], ["gas", "Gas", 0.21, "m³"], ["water", "Water", 0.2, "m³"]];
  async function vl() {
    var a;
    if (Date.now() - jo < 5 * 60 * 1e3) return;
    jo = Date.now();
    const t = [];
    try {
      const o = ((a = await B({ type: "energy/get_prefs" })) == null ? void 0 : a.energy_sources) || [], l = (c) => o.filter((m) => m.type === c).flatMap((m) => c === "grid" ? (m.flow_from || []).map((u) => u.stat_energy_from) : [m.stat_energy_from]).filter(Boolean);
      for (const [c, m, u] of [["electricity", "Electricity", l("grid")], ["solar", "Solar", l("solar")], ["gas", "Gas", l("gas")], ["water", "Water", l("water")]]) {
        if (!u.length) continue;
        const v = await Promise.all(u.map((y) => Promise.resolve(B({ type: "recorder/statistic_during_period", statistic_id: y, calendar: { period: "day" }, types: ["change"] })).then((H) => Number(H == null ? void 0 : H.change) || 0, () => 0)));
        t.push({ key: c, name: m, id: u[0], ids: u, value: v.reduce((y, H) => y + H, 0), unit: Kt(u[0]).unit_of_measurement || (c === "gas" || c === "water" ? "m³" : "kWh") });
      }
    } catch {
    }
    $n = t, Ta();
  }
  let Mi = null, Es = [];
  function mr() {
    var m;
    const t = Es = $n != null && $n.length ? $n : md.map(([u, v, y, H]) => {
      if (u === "solar") {
        const D = Object.keys(k).find((q) => q.endsWith("_solar_today") && !q.includes("made_up_energy"));
        D && Number.isFinite(Number(k[D].state)) && (y = Number(k[D].state));
      }
      const I = "sensor.made_up_energy_" + u;
      return k[I] = { entity_id: I, state: String(y), last_changed: (/* @__PURE__ */ new Date()).toISOString(), attributes: { friendly_name: v + " today", unit_of_measurement: H, state_class: "total_increasing" } }, { key: u, name: v, id: I, value: y, unit: H };
    });
    zt.clear(), t.some((u) => u.id === Mi) || (Mi = t[0].id);
    const a = t.map((u) => {
      const v = Number(u.value).toLocaleString(void 0, { maximumFractionDigits: u.value < 10 ? 2 : 1 }) + " " + u.unit, y = Ph[u.key], H = u.id === Mi;
      return zt.set(u.id, { name: u.name, text: v, icon: y }), '<div class="activityRow tap' + (H ? " picked" : "") + '" role="button" tabindex="0" data-energy-pick="' + J(u.id) + '" aria-pressed="' + H + '" aria-label="' + J(u.name + ", " + v) + '. Show its day in the graph"><div class="tfIcon" aria-hidden="true"' + Ue("", y, u.name) + '></div><div><div class="activityRowName">' + J(u.name) + '</div><div class="activityRowMeta">' + J(v) + "</div></div></div>";
    }), o = t.find((u) => u.id === Mi), l = (((m = ke().opts.energy) == null ? void 0 : m.graph) || "above") === "below", c = '<div class="tfCardGraph tfDashGraph"><svg class="tfGraph" data-graph="' + J(o.id) + '" role="img" aria-label="' + J(o.name) + ', last 24 hours"></svg></div>';
    return Da("dash:energy", 0, "Energy today", a, c, xi().some((u) => u.key === "energy") ? "summary:energy" : null, "tfDashCard tfDash-energy" + (l ? "" : " graphAbove"));
  }
  function _s(t) {
    const a = T.querySelector(".tfDash-energy"), o = a == null ? void 0 : a.querySelector(".tfDashGraph svg");
    !o || t === Mi || (Mi = t, a.querySelectorAll("[data-energy-pick]").forEach((l) => {
      const c = l.dataset.energyPick === t;
      l.classList.toggle("picked", c), l.setAttribute("aria-pressed", String(c));
    }), o.dataset.graph = t, o.dataset.drawn = "", ze.set("dash:energy", mr()), Za(!0));
  }
  const Si = {
    electricity: [15, 12, 10, 10, 10, 12, 25, 45, 40, 30, 25, 30, 35, 30, 25, 25, 35, 60, 80, 70, 55, 45, 30, 20],
    gas: [2, 2, 2, 2, 3, 8, 18, 20, 12, 6, 4, 4, 4, 4, 4, 5, 8, 14, 16, 14, 10, 6, 3, 2],
    water: [0, 0, 0, 0, 0, 2, 12, 18, 8, 4, 3, 4, 6, 3, 2, 3, 4, 6, 10, 8, 5, 5, 3, 1]
  }, Ur = /* @__PURE__ */ new Map();
  async function Xn(t) {
    const a = /* @__PURE__ */ new Date(), o = new Date(a).setHours(0, 0, 0, 0), l = a.getHours(), c = a.getMinutes() / 60, m = Array.from({ length: 24 }, (v, y) => y <= l ? 0 : null);
    if (!t.ids) {
      const v = Si[t.key] || Si.electricity, y = v.map((I, D) => D < l ? I : D === l ? I * c : 0), H = y.reduce((I, D) => I + D, 0) || 1;
      return m.map((I, D) => I == null ? null : t.value * y[D] / H);
    }
    const u = Ur.get(t.id);
    if (u && u.day === o && Date.now() - u.at < 5 * 60 * 1e3) return u.hours;
    try {
      const v = await B({ type: "recorder/statistics_during_period", start_time: new Date(o).toISOString(), end_time: a.toISOString(), statistic_ids: t.ids, period: "hour", types: ["change"] });
      t.ids.forEach((I) => ((v == null ? void 0 : v[I]) || []).forEach((D) => {
        const q = typeof D.start == "number" ? D.start : Date.parse(D.start), X = new Date(q).getHours();
        q >= o && X < l && (m[X] += Number(D.change) || 0);
      }));
      const y = new Date(a).setMinutes(0, 0, 0), H = await Promise.all(t.ids.map((I) => Promise.resolve(B({ type: "recorder/statistic_during_period", statistic_id: I, fixed_period: { start_time: new Date(y).toISOString(), end_time: a.toISOString() }, types: ["change"] })).then((D) => Number(D == null ? void 0 : D.change) || 0, () => 0)));
      m[l] = H.reduce((I, D) => I + D, 0);
    } catch {
    }
    return Ur.set(t.id, { at: Date.now(), day: o, hours: m }), m;
  }
  async function gr(t, a) {
    const o = await Xn(a);
    if (!t.isConnected) return;
    const l = Math.max(120, t.clientWidth || 260), c = Math.max(60, t.clientHeight || 130), m = 18, u = c - 18, v = l / 24, y = v * 0.72, H = (/* @__PURE__ */ new Date()).getHours(), I = o.map((lt) => lt ?? 0), D = Math.max(0, ...I), q = (lt) => u - (D > 0 ? lt / D * (u - m) : 0), X = (lt) => lt.toLocaleString(void 0, { maximumFractionDigits: lt < 10 ? 2 : 1 }) + " " + a.unit, Ct = (lt) => String(lt).padStart(2, "0") + ":00", at = D > 0 ? I.indexOf(D) : -1;
    t.setAttribute("viewBox", "0 0 " + l + " " + c), t.setAttribute("aria-label", a.name + " today by the hour: " + X(a.value) + (at >= 0 ? ", most " + X(D) + " at " + Ct(at) : "")), t.innerHTML = [m, (m + u) / 2, u].map((lt) => '<line x1="0" x2="' + l + '" y1="' + lt + '" y2="' + lt + '" stroke="var(--line)" stroke-width="1"/>').join("") + o.map((lt, F) => lt > 0 ? '<rect x="' + (F * v + (v - y) / 2).toFixed(1) + '" y="' + q(lt).toFixed(1) + '" width="' + y.toFixed(1) + '" height="' + (u - q(lt)).toFixed(1) + '" rx="2" fill="' + (F === H ? "var(--primary)" : "var(--text)") + '"' + (F === H ? "" : ' fill-opacity=".5"') + "/>" : "").join("") + [0, 6, 12, 18].map((lt) => '<text x="' + (lt * v).toFixed(1) + '" y="' + (c - 3) + '">' + String(lt).padStart(2, "0") + "</text>").join("") + (at >= 0 ? '<text x="0" y="11">Most: ' + J(X(D)) + " at " + Ct(at) + "</text>" : "");
  }
  function Ds(t) {
    var a;
    (a = window.matchMedia) != null && a.call(window, "(prefers-reduced-motion: reduce)").matches || t.querySelectorAll("rect").forEach((o, l) => o.animate([{ transform: "scaleY(0)" }, { transform: "scaleY(1)" }], { duration: 500, delay: l * 18, easing: "cubic-bezier(.2,.7,.3,1)", fill: "backwards" }));
  }
  function gd(t) {
    var c;
    if ((c = window.matchMedia) != null && c.call(window, "(prefers-reduced-motion: reduce)").matches) return;
    const [a, o] = t.querySelectorAll("path");
    if (!(o != null && o.getTotalLength)) return;
    const l = o.getTotalLength();
    o.animate([{ strokeDasharray: l, strokeDashoffset: l }, { strokeDasharray: l, strokeDashoffset: 0 }], { duration: 700, easing: "cubic-bezier(.2,.7,.3,1)" }), a == null || a.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 500, delay: 200, easing: "ease-out", fill: "backwards" });
  }
  let Ci = null, Bs = 0;
  const Yr = (t) => !t.startsWith("light.") || Ih.includes((Se.get(t) || "").toLowerCase()), So = () => Math.max(2, ha((T == null ? void 0 : T.clientWidth) || 0).n), bl = (t) => {
    const a = Gn(t);
    return a.sections.map((o, l) => o && (a.parts || [])[l]).filter(Boolean);
  }, wl = (t) => bl(t).slice(0, Di(t) - 1);
  function Zr(t) {
    const a = ke().tiles;
    if (a) return a.filter((l) => k[l] || Tn(l));
    if (!Ci) {
      const l = (c) => {
        var m;
        return (((m = k[c]) == null ? void 0 : m.state) === "on" ? 1e6 : 0) + (ta[c] || 0);
      };
      Ci = {
        lights: ue.rooms.flatMap((c) => c.lights).filter((c) => {
          var m;
          return Yr(c) && ((m = k[c]) == null ? void 0 : m.state) !== "unavailable";
        }).sort((c, m) => l(m) - l(c) || Dt(c).localeCompare(Dt(m))),
        climates: ue.rooms.flatMap((c) => c.actions.filter((m) => m.startsWith("climate.")))
      };
    }
    const o = Ci.climates.filter((l) => k[l]).slice(0, t > 3 ? 2 : 1);
    return [...Ci.lights.filter((l) => k[l]).slice(0, Math.max(0, t - o.length)), ...o];
  }
  const Ti = (t, a, o, l) => (c) => '<section class="card tfCard tfDashCard ' + t + '" data-tf data-k="' + a + '" aria-label="' + o + '">' + (l ? '<div class="activityHeader">' + (a === "favs" ? '<button class="activityTitle tfTitleBtn" type="button" data-more="favourites" aria-label="Favourites. More info">' + o + "</button>" : '<div class="activityTitle">' + o + "</div>") + "</div>" : "") + '<div class="activityRows">' + c + "</div></section>";
  function Ai(t, a) {
    var m, u;
    t.dash = !0, t.push({ key: "dash:title", html: '<h1 class="settingsTitle tfDashTitle" data-tf data-k="dash:title">' + J(((u = (m = i()) == null ? void 0 : m.config) == null ? void 0 : u.location_name) || "Home") + "</h1>" }), a.length && t.push({ key: "sums", wrap: (v) => '<div class="tfDashBarRow" data-tf data-k="sums">' + Ti("tfDash-bar", "sums-bar", "Summaries", !1)(v).replace(" data-tf", "") + "</div>", tiles: a.map((v) => ({ key: "sum:" + v.key, html: ur(v) })) }), Yn.length && t.push({ key: "areas", html: Zn(0) });
    const o = cr();
    o.length && t.push({ key: "favs", wrap: Ti("tfDash-favs", "favs", "Favourites", !0), tiles: o.map((v) => ({ key: "fav:" + v, html: Wo(v, { area: !0 }) })) });
    const l = Gr();
    t.push({ key: "dash:act", html: Da("dash:act", 0, "Activity", l.length ? l.map(Ha) : ['<p class="tfDashNone">Nothing has changed in the last day.</p>'], "", null, "tfDashCard tfDash-act") }), t.push({ key: "dash:energy", html: mr() });
    const c = So();
    return Bs = c, Zr(c >= 3 ? c : c * 2).forEach((v) => t.push({
      key: "dash:tile:" + v,
      wrap: (y) => '<div class="tfDashTiles" data-tf data-k="dash:tile:' + J(v) + '">' + y + "</div>",
      tiles: [{ key: v, html: jr(v) ? pl(Tn(v), v) : Ft(v, !1, wl(v)) }]
    })), Ls(), vl(), t;
  }
  const mn = 252, We = 16, Li = 200, vr = Math.round(mn * 1.25), Ei = 60, Ga = Ei + We, xl = 3, vd = { title: "The name", sums: "Summaries", wx: "Weather", areas: "Areas", favs: "Favourites", act: "Activity", energy: "Energy today", avg: "Compared to average", aq: "Air quality", pollen: "Pollen", radar: "Rain radar" }, Kr = ["wx", "favs", "act", "energy", "avg"], Jn = ["XS", "S", "M", "L", "XL"], zo = Jn.length, Vo = ["Narrow", "Wide", "Really wide"], _i = { wx: 5, areas: 5, favs: 5, act: 5, energy: 4, avg: 4, aq: 4, pollen: 4, radar: 4 }, yl = (t) => !t.includes(".") || !k[t] || t.startsWith("light.") && pe(t) ? zo : Math.min(zo, bl(t).length + 1), Di = (t) => {
    const a = ke().opts[t] || {}, o = yl(t), l = Number(a.h) || (a.tall ? 5 : _i[t] || Rs);
    return Math.max(1, Math.min(o, l));
  }, Rs = 2, bd = 90, $r = 56, Ra = (t) => {
    var a;
    return vd[t] || (t.startsWith("room:") ? ((a = Yn.find((o) => "room:" + o.id === t)) == null ? void 0 : a.name) || "Area" : Dt(t));
  }, Qn = 409, Ns = 128;
  let Fa = !1, Le = null, Oa = null, br = !1, Go = /* @__PURE__ */ new Map(), Xr = 0, Co = 0;
  const to = ["title", "sums"], ha = (t) => {
    const a = Math.max(1, Math.floor((t + We) / (Li + We)));
    return { n: a, w: Math.max(1, Math.min(vr, Math.floor((t - (a - 1) * We) / a))) };
  }, ke = () => {
    const t = { cells: {}, spans: {}, hidden: [], opts: {}, ...j.dash || {} }, a = me.filter((o) => !(t.known || []).includes(o) && !t.hidden.includes(o));
    return a.length ? { ...t, hidden: [...t.hidden, ...a] } : t;
  };
  function Jr(t) {
    j = { ...j, dash: { ...t, known: me } }, La();
  }
  function wr() {
    const t = (a) => T.querySelector(a);
    return [
      ["title", t(".tfDashTitle"), "full"],
      ["sums", t(".tfDashBarRow"), "full"],
      ["wx", da.wx, 2],
      ["areas", t(".tfAreas"), "areas"],
      ["favs", t(".tfDash-favs"), 2],
      ["act", t(".tfDash-act"), 2],
      ["energy", t(".tfDash-energy"), 2],
      ["avg", da.avg, 2],
      ...me.map((a) => [a, da[a], 1]),
      ...[...T.querySelectorAll(".tfDashTiles > [data-k]")].map((a) => [a.dataset.k, a, 1, !0])
    ].filter(([, a]) => a == null ? void 0 : a.isConnected).map(([a, o, l, c = !1]) => ({ key: a, el: o, span: l, tile: c }));
  }
  const Qr = (t, a, o) => {
    if (t.span === "full") return a;
    const l = t.span === "areas" && ke().spans.areas;
    return l ? l === "full" ? a : Math.min(a, Math.max(2, l)) : t.span === "areas" ? Math.min(a, Math.ceil((Qn + Math.max(0, Yn.length - 1) * (Ns + We) + We) / (o + We))) : Math.min(a, ke().spans[t.key] ?? t.span);
  }, ts = (t) => Di(t.key);
  function xr(t, a, o = null) {
    const l = ke().cells, c = t.every((v) => !l[v.key] || l[v.key].col + v.cols <= a), m = (v) => l[v.key] || { row: 1e9, col: 0 };
    return (() => {
      const v = /* @__PURE__ */ new Set(), y = /* @__PURE__ */ new Map(), H = (at, lt, F, xt) => {
        for (let G = lt; G < lt + xt; G++) for (let qt = at; qt < at + F; qt++) if (v.has(qt + "," + G)) return !1;
        return !0;
      }, I = (at, lt, F) => {
        for (let xt = F; xt < F + at.rows; xt++) for (let G = lt; G < lt + at.cols; G++) v.add(G + "," + xt);
        y.set(at.key, { col: lt, row: F, cols: at.cols, rows: at.rows });
      }, D = (at, lt, F) => {
        for (lt = Math.max(0, Math.min(a - at.cols, lt)), F = Math.max(0, F); !H(lt, F, at.cols, at.rows); ) F++;
        I(at, lt, F);
      }, q = (at) => {
        for (let lt = 0; ; lt++) for (let F = 0; F <= a - at.cols; F++) if (H(F, lt, at.cols, at.rows)) {
          I(at, F, lt);
          return;
        }
      };
      o && D(o, Le.col, Le.row);
      const X = t.filter((at) => at !== o), Ct = (at, lt) => m(at).row - m(lt).row || m(at).col - m(lt).col;
      return c ? (X.filter((at) => l[at.key]).sort(Ct).forEach((at) => D(at, l[at.key].col, l[at.key].row)), X.filter((at) => !l[at.key]).forEach(q), y) : ([...X].sort(Ct).forEach(q), y);
    })();
  }
  function kl(t, a) {
    const o = /* @__PURE__ */ new Set(), l = /* @__PURE__ */ new Map(), c = (m, u, v) => {
      for (let y = u; y < u + v.rows; y++) for (let H = m; H < m + v.cols; H++) if (o.has(H + "," + y)) return !1;
      return !0;
    };
    return t.forEach((m) => {
      for (let u = 0; ; u++) {
        let v = 0;
        for (; v <= a - m.cols && !c(v, u, m); ) v++;
        if (!(v > a - m.cols)) {
          for (let y = u; y < u + m.rows; y++) for (let H = v; H < v + m.cols; H++) o.add(H + "," + y);
          l.set(m.key, { col: v, row: u, cols: m.cols, rows: m.rows });
          return;
        }
      }
    }), l;
  }
  function es() {
    const t = ke(), a = new Set(t.hidden), o = wr().filter((u) => !to.includes(u.key));
    let l = Go;
    if (!l.size) {
      const u = t.pegs || 4, v = o.filter((y) => !a.has(y.key));
      v.forEach((y) => {
        y.cols = Qr(y, u, mn), y.rows = ts(y) ?? Rs;
      }), l = xr(v, u);
    }
    const c = (u) => !a.has(u.key) && l.get(u.key) || { row: 1e9, col: 0 };
    o.sort((u, v) => c(u).row - c(v).row || c(u).col - c(v).col);
    const m = (t.phone || []).map((u) => o.find((v) => v.key === u && !a.has(u))).filter(Boolean);
    return [...m, ...o.filter((u) => !m.includes(u))];
  }
  const wd = () => {
    const t = es();
    t.forEach((a, o) => a.el.style.setProperty("--o", String(3 + o))), Ml([...wr().filter((a) => to.includes(a.key)), ...t].map((a) => a.el));
  };
  function Ml(t) {
    if (Le) return;
    const a = n.activeElement;
    let o = null;
    for (const l of new Set(t.map((c) => {
      for (; c && c.parentElement !== T; ) c = c.parentElement;
      return c;
    }).filter(Boolean))) {
      const c = o ? o.nextSibling : T.querySelector(":scope > [data-tf]");
      if (l !== c)
        try {
          T.moveBefore ? T.moveBefore(l, c) : T.insertBefore(l, c);
        } catch {
          T.insertBefore(l, c);
        }
      o = l;
    }
    a && a !== n.activeElement && a.isConnected && a.focus({ preventScroll: !0 });
  }
  const Uo = (t, a) => Jr({ ...t, cells: a, pegs: ha(T.clientWidth).n });
  function ra() {
    var xt;
    if (!x || !T) return;
    const t = T.clientWidth, a = t < 2 * mn + We, o = g.classList.contains("tfDash"), { n: l, w: c } = a ? { n: 2, w: Math.floor((t - We) / 2) } : ha(t);
    ee.classList.add("tfPegs"), ee.style.setProperty("--peg-n", l), ee.style.setProperty("--peg-w", c + "px");
    const m = new Set(ke().hidden);
    me.forEach((G) => {
      var qt;
      return (qt = da[G]) == null ? void 0 : qt.classList.toggle("tfNotAdded", m.has(G) && !(Le != null && Le.fromTray && Le.key === G));
    }), g.classList.toggle("tfBoard", o), g.classList.toggle("tfEditing", o && Fa && !a);
    const u = p("dashEditNav");
    u && (u.hidden = !o || a, u.classList.toggle("active", Fa), u.setAttribute("aria-pressed", String(Fa)), u.setAttribute("aria-label", Fa ? "Done editing" : "Edit the dashboard"), u.title = Fa ? "Done" : "Edit", u.innerHTML = Fa ? Lh : rp);
    const v = o ? wr() : [];
    if (!o) {
      T.style.height = "", T.querySelectorAll(".tfBoardItem").forEach((G) => {
        G.classList.remove("tfBoardItem", "tfBoardHidden"), G.style.left = G.style.top = G.style.width = G.style.height = "";
      }), (xt = T.querySelector(".tfDash-act > .activityRows")) == null || xt.style.removeProperty("max-height"), Bi(!1), g.classList.contains("tfDash") && wd(), wa();
      return;
    }
    T.style.setProperty("--peg-w", c + "px");
    const y = new Set(ke().hidden), H = c + We;
    Le != null && Le.fromTray && y.delete(Le.key), v.forEach((G) => G.el.classList.toggle("tfBoardHidden", y.has(G.key)));
    const I = v.filter((G) => !y.has(G.key) && getComputedStyle(G.el).display !== "none");
    let D = 0;
    I.filter((G) => to.includes(G.key)).forEach((G) => {
      G.el.classList.add("tfBoardItem"), Object.assign(G.el.style, { width: t + "px", height: "", left: "0px", top: D + "px" });
      const qt = G.key === "sums" && G.el.querySelector(".tfDash-bar"), Fe = qt ? qt.querySelectorAll(".activityRow").length : 0;
      qt && (qt.style.maxWidth = "none");
      for (let we = 1; qt && we <= Fe && (qt.style.setProperty("--bar-cols", String(Math.ceil(Fe / we))), !(qt.offsetWidth <= t)); we++)
        ;
      qt && (qt.style.maxWidth = ""), D += G.el.offsetHeight + We;
    }), Co = D;
    const q = I.filter((G) => !to.includes(G.key));
    q.forEach((G) => {
      G.cols = Qr(G, l, c), G.el.classList.add("tfBoardItem"), G.el.style.width = (G.cols === l ? t : G.cols * c + (G.cols - 1) * We) + "px", G.el.style.height = "", G.rows = ts(G) ?? Math.max(1, Math.ceil((G.el.offsetHeight + We - 6) / Ga));
    });
    const X = Le && q.find((G) => G.key === Le.key), Ct = a && es().map((G) => G.key), at = (G) => Ct.includes(G.key) ? Ct.indexOf(G.key) : -1, lt = a ? kl([...q].sort((G, qt) => at(G) - at(qt)), l) : xr(q, l, X);
    lt.forEach((G) => Object.assign(G, { x: G.cols === l ? 0 : G.col * H, y: Co + G.row * Ga, w: G.cols === l ? t : G.cols * c + (G.cols - 1) * We, h: G.rows * Ga - We })), q.forEach((G) => {
      const qt = lt.get(G.key);
      G.el.style.height = qt.h + "px", G.el.dataset.rows = Di(G.key), G.el.toggleAttribute("data-narrow", !a && qt.cols === 1 && l > 1), G.el.dataset.cols = qt.cols, G.el.classList.contains("tfDac") && G.el.style.setProperty("--tf-dac-pad", qt.h - bd + "px"), !(G === X && !Le.fromTray) && (G.el.style.left = qt.x + "px", G.el.style.top = qt.y + "px");
    }), a || (Go = lt), Ml([...I.filter((G) => to.includes(G.key)), ...q.slice().sort((G, qt) => lt.get(G.key).row - lt.get(qt.key).row || lt.get(G.key).col - lt.get(qt.key).col)].map((G) => G.el)), [["favs", ".tfDash-favs"], ["act", ".tfDash-act"]].forEach(([G, qt]) => {
      const Fe = lt.get(G), we = Fe && T.querySelector(qt), Aa = we == null ? void 0 : we.querySelector(":scope > .activityRows"), Xt = we == null ? void 0 : we.querySelector(":scope > .activityHeader");
      if (!Aa || !Xt) return;
      const qe = Aa.getBoundingClientRect().top - we.getBoundingClientRect().top, oi = Fe.rows === 1 ? Fe.h : Math.floor(Fe.h - qe - parseFloat(getComputedStyle(we).paddingBottom)), Cd = Math.max(1, Math.floor(oi / $r));
      Aa.style.setProperty("--fill-row", (oi / Cd).toFixed(2) + "px"), Aa.style.maxHeight = oi + "px";
    }), Xr = Math.max(0, ...[...lt.values()].map((G) => G.row + G.rows));
    let F = Co + Xr * Ga - We;
    F = Bi(Fa && !a, q, lt, F, l, c), T.style.height = F + "px", requestAnimationFrame(() => g.classList.add("tfBoardReady")), v.forEach((G) => as.observe(G.el)), Za(), wa();
  }
  const nn = () => {
    br || (br = !0, requestAnimationFrame(() => {
      br = !1, ra();
    }));
  }, as = new ResizeObserver(() => {
    Le || nn();
  });
  function Bi(t, a = [], o = /* @__PURE__ */ new Map(), l = 0, c = 1, m = mn) {
    T.querySelectorAll(".tfEditChips").forEach((I) => {
      (!t || !I.closest(".tfBoardItem")) && I.remove();
    }), T.querySelectorAll(".tfFavHides").forEach((I) => I.remove()), T.querySelectorAll(".tfBoardItem").forEach((I) => [...I.children].forEach((D) => {
      D.classList.contains("tfEditChips") || D.toggleAttribute("inert", t);
    }));
    let u = T.querySelector(".tfBoardCells"), v = T.querySelector(".tfBoardLand");
    if (!t)
      return u == null || u.remove(), v == null || v.remove(), on(), l;
    const y = Xr + xl;
    if (u || (u = Object.assign(document.createElement("div"), { className: "tfBoardCells" }), u.setAttribute("aria-hidden", "true"), T.prepend(u)), u.style.top = Co + "px", u.dataset.size !== c + "x" + y + "x" + m && (u.dataset.size = c + "x" + y + "x" + m, u.style.gridTemplateColumns = "repeat(" + c + "," + m + "px)", u.innerHTML = "<i></i>".repeat(c * y)), l = Math.max(l, Co + y * Ga - We), a.forEach((I) => {
      const D = I.el;
      !D || D.querySelector(":scope > .tfEditChips") || D.insertAdjacentHTML("beforeend", '<div class="tfEditChips"><span class="tfEditGrip" aria-hidden="true">' + jd + '</span><button class="tfEditChip" type="button" data-board-more="' + J(I.key) + '" aria-label="' + J(Ra(I.key)) + ' options" aria-haspopup="menu">' + Th + "</button></div>");
    }), Le && o.has(Le.key)) {
      v || (v = Object.assign(document.createElement("div"), { className: "tfBoardLand" }), T.appendChild(v));
      const I = o.get(Le.key);
      Object.assign(v.style, { left: I.x + "px", top: I.y + "px", width: I.w + "px", height: I.h + "px" });
    } else v == null || v.remove();
    const H = T.querySelector(".tfDash-favs.tfBoardItem:not(.tfBoardHidden)");
    if (H) {
      const I = H.getBoundingClientRect();
      H.insertAdjacentHTML("beforeend", '<div class="tfFavHides">' + [...H.querySelectorAll('[data-k^="fav:"]')].map((D) => {
        const q = D.getBoundingClientRect(), X = D.dataset.k.slice(4);
        return '<button class="tfFavHide" type="button" data-fav-hide="' + J(X) + '" aria-label="Hide ' + J(Dt(X)) + ' from the dashboard" style="left:' + Math.round(q.right - I.left - 42) + "px;top:" + Math.round(q.top - I.top + (q.height - 32) / 2) + 'px">' + np + "</button>";
      }).join("") + "</div>");
    }
    return l;
  }
  let Ps = "";
  function ns(t) {
    Fa = t, t || (Le = null, ro = so = !1, on()), ra(), t ? Ps = JSON.stringify(j) : Ps && JSON.stringify(j) !== Ps && An("Changes saved");
  }
  function gn(t, a) {
    var lt, F;
    on();
    const o = Go.get(t), { n: l } = ha(T.clientWidth), c = ke(), m = c.spans[t] ?? (jr(t) ? 1 : 2);
    if (!o) return;
    const u = o.cols >= l, v = (xt, G, qt) => '<button type="button" role="menuitem" data-board-act="' + xt + '"' + (qt ? " disabled" : "") + ">" + G + "</button>", y = Object.assign(document.createElement("div"), { className: "tfBoardMenu" });
    y.setAttribute("role", "menu"), y.setAttribute("aria-label", Ra(t) + " options");
    const H = T.querySelector('.tfDashTiles > [data-k="' + CSS.escape(t) + '"]'), I = yl(t), D = Di(t), q = '<div class="tfHeight" role="group" aria-label="Height"><span class="tfHeightLabel" aria-hidden="true">Height</span><div class="tfHeightTabs">' + Jn.map((xt, G) => '<button type="button" role="menuitemradio" aria-checked="' + (G + 1 === D) + '" aria-label="' + xt + ", " + (G + 1) + (G ? " rows" : " row") + '" data-board-act="h:' + (G + 1) + '"' + (G < I ? "" : " disabled") + ">" + xt + "</button>").join("") + "</div></div>", X = [["Wide", 2, l >= 2], ["Really wide", 3, l >= 3], ["Full width", "full", l >= 4]], Ct = t === "areas" ? '<div class="tfHeight tfWidth" role="group" aria-label="Width"><span class="tfHeightLabel" aria-hidden="true">Width</span><div class="tfHeightTabs">' + X.map(([xt, G, qt]) => '<button type="button" role="menuitemradio" aria-checked="' + (qt && (G === "full" ? o.cols === l : o.cols === G && !(G === l && c.spans.areas === "full"))) + '" aria-label="' + xt + (G === "full" ? "" : ", " + G + " columns") + '" data-board-act="w:' + G + '"' + (qt ? "" : " disabled") + ">" + xt + "</button>").join("") + "</div></div>" : Kr.includes(t) || jr(t) ? '<div class="tfHeight tfWidth" role="group" aria-label="Width"><span class="tfHeightLabel" aria-hidden="true">Width</span><div class="tfHeightTabs">' + Vo.map((xt, G) => '<button type="button" role="menuitemradio" aria-checked="' + (G + 1 === Math.min(m, l)) + '" aria-label="' + xt + ", " + (G + 1) + (G ? " columns" : " column") + '" data-board-act="w:' + (G + 1) + '"' + (G < l ? "" : " disabled") + ">" + xt + "</button>").join("") + "</div></div>" : "";
    y.innerHTML = q + Ct + (t === "energy" ? v("graph", (((lt = c.opts.energy) == null ? void 0 : lt.graph) || "above") === "above" ? "Graph below" : "Graph above") : "") + v("left", "Move left", u || o.col === 0) + v("right", "Move right", u || o.col + o.cols >= l) + v("up", "Move up", o.row <= 0) + v("down", "Move down") + (H ? v("remove", "Remove") : v("hide", "Hide")), T.appendChild(y);
    const at = Math.min(o.x + o.w - y.offsetWidth, T.clientWidth - y.offsetWidth);
    Object.assign(y.style, { left: Math.max(0, at) + "px", top: o.y + 28 + "px" }), Oa = { key: t, menu: y, opener: a }, (F = y.querySelector("button:not([disabled])")) == null || F.focus();
  }
  function on(t) {
    if (!Oa) return;
    const { menu: a, opener: o } = Oa;
    Oa = null, a.remove(), t && (o == null || o.focus());
  }
  const eo = () => Object.fromEntries([...Go].map(([t, a]) => [t, { col: a.col, row: a.row }]));
  function Ri(t, a) {
    var u, v;
    if (a === "remove") {
      on(), xd(t);
      return;
    }
    const o = j, l = ke(), c = eo(), m = c[t] || { col: 0, row: 0 };
    a.startsWith("w:") && (l.spans = { ...l.spans, [t]: a === "w:full" ? "full" : Number(a.slice(2)) }), a.startsWith("h:") && (l.opts = { ...l.opts, [t]: { ...l.opts[t] || {}, h: Number(a.slice(2)), tall: void 0 } }), a === "graph" && (l.opts = { ...l.opts, energy: { ...l.opts.energy || {}, graph: (((u = l.opts.energy) == null ? void 0 : u.graph) || "above") === "above" ? "below" : "above" } }), a === "left" && (c[t] = { ...m, col: m.col - 1 }), a === "right" && (c[t] = { ...m, col: m.col + 1 }), a === "up" && (c[t] = { ...m, row: m.row - 1 }), a === "down" && (c[t] = { ...m, row: m.row + 1 }), a === "hide" && (l.hidden = [.../* @__PURE__ */ new Set([...l.hidden, t])]), ["left", "right", "up", "down"].includes(a) && (Le = { key: t, col: c[t].col, row: c[t].row }), Uo(l, c), Le && (ra(), Le = null, Uo(ke(), eo())), on(), a === "graph" && (ze.delete("dash:energy"), Ta()), a.startsWith("h:") && t.includes(".") && Ta(), ra(), a !== "hide" ? (v = T.querySelector('[data-board-more="' + CSS.escape(t) + '"]')) == null || v.focus() : An(Ra(t) + " hidden", ba(o));
  }
  const Is = (t) => {
    var a;
    return me.includes(t) && !(((a = j.dash) == null ? void 0 : a.cells) || {})[t] ? " added" : " put back";
  };
  function ao(t) {
    const a = ke(), o = Ra(t) + Is(t);
    Jr({ ...a, hidden: a.hidden.filter((l) => l !== t) }), ra(), An(o);
  }
  const os = () => ke().tiles || [...T.querySelectorAll(".tfDashTiles > [data-k]")].map((t) => t.dataset.k).filter((t) => !ke().hidden.includes(t));
  function In(t, a) {
    const o = ke();
    Uo({ ...o, tiles: t, hidden: o.hidden.filter((l) => !l.includes(".")) }, a), Ta(), wa();
  }
  const yr = (t) => {
    In([...os().filter((a) => a !== t), t], eo()), An(Ra(t) + " added"), Os(t);
  }, xd = (t) => {
    const a = j, o = eo();
    delete o[t], In(os().filter((l) => l !== t), o), An(Ra(t) + " removed", ba(a));
  };
  let kr = 0;
  function An(t, a = null) {
    var u;
    const o = p("toast");
    if (!o) return;
    if (o.replaceChildren(Object.assign(document.createElement("span"), { textContent: t })), a) {
      const v = Object.assign(document.createElement("button"), { type: "button", className: "toastAction", textContent: "Undo" });
      v.addEventListener("click", () => {
        clearTimeout(kr), o.classList.remove("show", "withAction"), a();
      }), o.appendChild(v);
    }
    const l = g.getBoundingClientRect(), c = (u = n.querySelector(".bottomNav")) == null ? void 0 : u.getBoundingClientRect(), m = Re.classList.contains("open") && !Hn ? Math.min(l.right, Re.getBoundingClientRect().left) : l.right;
    o.style.left = (l.left + m) / 2 + "px", o.style.bottom = (c != null && c.height ? window.innerHeight - c.top + 12 : 26) + "px", o.classList.add("tfToast", "show"), o.classList.toggle("withAction", !!a), clearTimeout(kr), kr = setTimeout(() => o.classList.remove("show", "withAction"), a ? 5e3 : 2200);
  }
  const Hs = 700, no = 1e3, Ua = Object.assign(document.createElement("div"), { className: "tfTooltip", hidden: !0 });
  Ua.setAttribute("role", "tooltip"), Ua.setAttribute("aria-hidden", "true"), g.appendChild(Ua);
  let is = null, Ni = 0, Ln = 0, Sl = -1 / 0;
  const To = (t) => {
    if (t.nodeType !== 1) return !1;
    const a = getComputedStyle(t);
    return a.textOverflow === "ellipsis" && t.scrollWidth > t.clientWidth + 1 || a.webkitLineClamp !== "none" && t.scrollHeight > t.clientHeight + 1;
  }, yd = (t) => {
    for (let a = t; a && a !== g; a = a.parentElement) if (To(a)) return a;
    return null;
  };
  function Fs(t, a) {
    clearTimeout(Ni), clearTimeout(Ln);
    const o = () => {
      if (!t.isConnected) return;
      is = t, Ua.textContent = a, Ua.hidden = !1;
      const l = t.getBoundingClientRect(), c = Ua.getBoundingClientRect(), m = l.top - c.height - 8 >= 8 ? l.top - c.height - 8 : l.bottom + 8;
      Ua.style.left = Math.max(8, Math.min(window.innerWidth - c.width - 8, l.left + l.width / 2 - c.width / 2)) + "px", Ua.style.top = m + "px";
    };
    !Ua.hidden || performance.now() - Sl < no ? o() : Ni = setTimeout(o, Hs);
  }
  function oo() {
    clearTimeout(Ni), clearTimeout(Ln), Ua.hidden || (Sl = performance.now()), Ua.hidden = !0, is = null;
  }
  n.addEventListener("pointerover", (t) => {
    if (t.pointerType === "touch") return;
    if (Ua.contains(t.target)) {
      clearTimeout(Ln);
      return;
    }
    const a = yd(t.target);
    if (a && Rt.names === "scroll" && a.matches(io)) {
      Ao(a);
      return;
    }
    if (a) {
      a !== is ? Fs(a, a.textContent.trim()) : clearTimeout(Ln);
      return;
    }
    clearTimeout(Ni), clearTimeout(Ln), Ln = setTimeout(oo, 120);
  }), n.addEventListener("focusin", (t) => {
    var l;
    const a = t.target;
    if (!((l = a.matches) != null && l.call(a, ":focus-visible"))) return;
    let o = [a, ...a.querySelectorAll("*")].filter(To);
    Rt.names === "scroll" && (o.filter((c) => c.matches(io)).forEach(Ao), o = o.filter((c) => !c.matches(io))), o.length && Fs(a, o.map((c) => c.textContent.trim()).join(" · "));
  }), n.addEventListener("focusout", (t) => {
    t.target === is && oo();
  }), n.addEventListener("keydown", (t) => {
    t.key === "Escape" && !Ua.hidden && (t.stopPropagation(), oo());
  }, !0), window.addEventListener("scroll", () => {
    (!Ua.hidden || Ni) && oo();
  }, { capture: !0, passive: !0 });
  const io = ".activityRowName,.activityRowMeta", Pe = /* @__PURE__ */ new WeakSet();
  function Ao(t) {
    var o;
    if (Rt.names !== "scroll" || Pe.has(t) || t.closest("[inert]") || (o = window.matchMedia) != null && o.call(window, "(prefers-reduced-motion: reduce)").matches) return;
    Pe.add(t);
    const a = () => Promise.all([t.closest(".workoutPanel"), t.closest(".panelExpanded")].filter(Boolean).flatMap((l) => l.getAnimations()).map((l) => l.finished.catch(() => {
    })));
    setTimeout(async () => {
      await a();
      const l = t.isConnected && !t.closest("[inert]") ? t.scrollWidth - t.clientWidth : 0;
      if (l < 2) {
        Pe.delete(t);
        return;
      }
      const c = l / 30 * 1e3, m = c + 1e3 + c;
      t.style.textOverflow = "clip";
      const u = t.animate([
        { textIndent: "0px", offset: 0, easing: "ease-in-out" },
        { textIndent: -l + "px", offset: c / m },
        { textIndent: -l + "px", offset: (1e3 + c) / m, easing: "ease-in-out" },
        { textIndent: "0px", offset: 1 }
      ], { duration: m });
      u.onfinish = u.oncancel = () => {
        t.style.textOverflow = "", Pe.delete(t);
      };
    }, 600);
  }
  const Mr = new IntersectionObserver((t) => t.forEach((a) => {
    a.isIntersecting && !a.target.closest("[inert]") && (Mr.unobserve(a.target), Ao(a.target));
  }), { threshold: 1 });
  let Sr = !1;
  new MutationObserver(() => {
    Sr || Rt.names !== "scroll" || (Sr = !0, setTimeout(() => {
      Sr = !1, n.querySelectorAll(io).forEach((t) => {
        !t.dataset.glided && To(t) && (t.dataset.glided = "1", Mr.observe(t));
      });
    }, 300));
  }).observe(n, { childList: !0, subtree: !0 });
  const ba = (t) => () => {
    j = t, La(), Ta(), ra(), wa();
  };
  function Os(t) {
    const a = () => T.querySelector('.tfDashTiles > [data-k="' + CSS.escape(t) + '"]');
    setTimeout(() => {
      var u;
      const o = a();
      if (!o) return;
      const l = (u = window.matchMedia) == null ? void 0 : u.call(window, "(prefers-reduced-motion: reduce)").matches, c = o.getBoundingClientRect();
      (c.top < 0 || c.bottom > window.innerHeight) && o.scrollIntoView({ behavior: l ? "auto" : "smooth", block: "center" });
      const m = (v) => "0 0 0 4px color-mix(in srgb,var(--primary) " + v + "%,transparent),0 0 24px color-mix(in srgb,var(--primary) " + v + "%,transparent)";
      o.animate([{ boxShadow: m(55) }, { boxShadow: m(0) }], { duration: 1500, easing: l ? "steps(1, end)" : "ease-out" });
    }, Cl(t) ? 260 : 0);
  }
  function Cl(t) {
    const a = Go.get(t);
    if (!a || !Re.classList.contains("open") || Hn) return !1;
    const { n: o, w: l } = ha(T.clientWidth), c = Re.getBoundingClientRect().left - T.getBoundingClientRect().left, m = (y) => y * (l + We) + a.cols * l + (a.cols - 1) * We <= c;
    if (m(a.col)) return !1;
    const u = /* @__PURE__ */ new Set();
    Go.forEach((y, H) => {
      if (H !== t) for (let I = y.row; I < y.row + y.rows; I++) for (let D = y.col; D < y.col + y.cols; D++) u.add(D + "," + I);
    });
    const v = (y, H) => {
      for (let I = H; I < H + a.rows; I++) for (let D = y; D < y + a.cols; D++) if (u.has(D + "," + I)) return !1;
      return !0;
    };
    for (let y = 0; y <= Xr; y++) for (let H = 0; H + a.cols <= o && m(H); H++)
      if (v(H, y))
        return Uo(ke(), { ...eo(), [t]: { col: H, row: y } }), ra(), !0;
    return !1;
  }
  const Tl = /^(light|switch|cover|climate|fan|lock|valve|media_player|humidifier|vacuum|scene|script|alarm_control_panel|water_heater|input_boolean)\./, Re = Object.assign(document.createElement("aside"), { className: "tfEditTray" });
  Re.setAttribute("aria-label", "Edit the dashboard"), Re.innerHTML = '<button class="tfTrayTuck" type="button" data-tray-tuck></button><div class="tfTrayInner"><div class="tfTrayHead"><div class="activityTitle">Edit dashboard</div><button class="pill" type="button" data-tray-done>Done</button></div><section class="tfTraySection" data-tray="cards"></section><section class="tfTraySection"><div class="sectionLabel">Tiles</div><p class="tfTrayNote">Remove a tile from its ⋯.</p><button class="pill tfTrayAdd" type="button" data-tile-add aria-expanded="false">Add tile</button><div class="tfTrayPick" data-pick="tiles" hidden><input class="addInput" type="search" placeholder="Search devices" aria-label="Search devices" autocomplete="off" data-tile-search><ul class="tfTrayList" data-tray="tilepick"></ul></div></section><section class="tfTraySection"><div class="sectionLabel">Areas</div><p class="tfTrayNote">One area on its own, instead of all of them in the Areas card.</p><button class="pill tfTrayAdd" type="button" data-room-add aria-expanded="false">Add area</button><ul class="tfTrayList" data-tray="roompick" hidden></ul></section><section class="tfTraySection" data-tray="phone"></section><section class="tfTraySection"><div class="sectionLabel">Favourites</div><ul class="tfTrayList" data-tray="favs"></ul><button class="pill tfTrayAdd" type="button" data-fav-add aria-expanded="false">Add favourite</button><div class="tfTrayPick" data-pick="favs" hidden><input class="addInput" type="search" placeholder="Search devices" aria-label="Search devices" autocomplete="off" data-fav-search><ul class="tfTrayList" data-tray="pick"></ul></div><div class="toggleRow tfTraySuggest" data-tray="suggest"></div></section></div>', g.appendChild(Re);
  let Hn = !1, ro = !1, so = !1, Cr = !1, Na = null, vn = !1;
  const Yo = {}, Zo = (t, a) => {
    if (Yo[t] === a) return;
    Yo[t] = a;
    const o = Re.querySelector('[data-tray="' + t + '"]');
    o.innerHTML = a, _a(o);
  }, Ws = (t, a) => '<span class="tfTrayName"><span class="activityRowName">' + J(Dt(t)) + '</span><span class="activityRowMeta">' + J(a) + "</span></span>", Al = (t, a, o) => '<li class="tfTrayFav' + (a ? " off" : "") + '" data-tray-fav="' + J(t) + '"><span class="tfTrayGrip" aria-hidden="true">' + jd + '</span><span class="tfIcon"' + Ue(t, Qa(t)) + "></span>" + Ws(t, a ? "Hidden" + (Se.get(t) ? " · " + Se.get(t) : "") : Se.get(t) || oa(t)) + '<button class="tfTrayBtn" type="button" data-fav-eye="' + J(t) + '" aria-pressed="' + !a + '" aria-label="' + (a ? "Show " : "Hide ") + J(Dt(t)) + ' on the dashboard">' + (a ? np : Ah) + "</button>" + (o ? '<button class="tfTrayBtn" type="button" data-fav-remove="' + J(t) + '" aria-label="Remove ' + J(Dt(t)) + ' from favourites">' + op + "</button>" : "<span></span>") + "</li>";
  function Ll(t, a, o, l) {
    const c = t.trim().toLowerCase().split(/\s+/).filter(Boolean);
    return Object.keys(k).filter((u) => a(u) && !o.has(u) && k[u].state !== "unavailable").filter((u) => {
      const v = (Dt(u) + " " + (Se.get(u) || "") + " " + u).toLowerCase();
      return c.every((y) => v.includes(y));
    }).sort((u, v) => (Se.get(u) || "~").localeCompare(Se.get(v) || "~") || Dt(u).localeCompare(Dt(v))).slice(0, 40).map((u) => '<li><button class="tfTrayPickItem" type="button" ' + l + '="' + J(u) + '"><span class="tfIcon"' + Ue(u, Qa(u)) + "></span>" + Ws(u, Se.get(u) || "—") + "</button></li>").join("") || '<li class="tfTrayNote">Nothing matches.</li>';
  }
  function wa() {
    const t = Fa && g.classList.contains("tfBoard");
    if (Re.classList.toggle("open", t), Re.classList.toggle("tucked", t && Hn), Re.toggleAttribute("inert", !t), t || (vn = !1), Jo(), !t) return;
    const a = Re.querySelector("[data-tray-tuck]");
    a.innerHTML = Hn ? Uc : ip, a.setAttribute("aria-expanded", String(!Hn)), a.setAttribute("aria-label", Hn ? "Show the edit tray" : "Tuck the edit tray away");
    const o = ke().hidden.filter((u) => wr().some((v) => v.key === u));
    Zo("cards", '<div class="sectionLabel">Hidden and new cards</div>' + (o.length ? '<div class="tfTrayCards">' + o.map((u) => '<button class="tfTrayCard" type="button" data-tray-card="' + J(u) + '" aria-label="' + J(Ra(u)) + ': drag it onto the board, or press to put it back"><span class="tfTrayGrip" aria-hidden="true">' + jd + "</span>" + J(Ra(u)) + "</button>").join("") + "</div>" : '<p class="tfTrayNote">Cards you hide, and new ones, wait here.</p>')), Zo("phone", '<div class="sectionLabel">Phone</div><p class="tfTrayNote">' + (ke().phone ? "Phones have an order of their own." : "Phones follow the board's order.") + '</p><button class="pill tfTrayAdd" type="button" data-phone-toggle aria-pressed="' + vn + '">' + (vn ? "Hide the phone" : "Show the phone") + "</button>");
    const l = new Set(j.favHidden || []), c = Va(), m = [...c, ...[...l].filter((u) => !c.includes(u) && k[u])];
    if (Zo("favs", m.map((u) => Al(u, l.has(u), c.includes(u))).join("") || '<li class="tfTrayNote">No favourites yet.</li>'), Re.querySelector('[data-pick="tiles"]').hidden = !so, Re.querySelector("[data-tile-add]").setAttribute("aria-expanded", String(so)), so && Zo("tilepick", Ll(Re.querySelector("[data-tile-search]").value, (u) => ed.includes(u.split(".")[0]), new Set(os()), "data-tile-pick")), Re.querySelector('[data-tray="roompick"]').hidden = !Cr, Re.querySelector("[data-room-add]").setAttribute("aria-expanded", String(Cr)), Cr) {
      const u = new Set(os());
      Zo("roompick", Yn.filter((v) => !u.has("room:" + v.id)).map((v) => '<li><button class="tfTrayPickItem" type="button" data-room-pick="' + J(v.id) + '"><span class="tfIcon"><span class="tfAreaGlyph"' + Ue("area:" + v.id, v.icon || "mdi:texture-box", v.name) + '></span></span><span class="tfTrayName"><span class="activityRowName">' + J(v.name) + "</span></span></button></li>").join("") || '<li class="tfTrayNote">Every area is on the board.</li>');
    }
    Re.querySelector('[data-pick="favs"]').hidden = !ro, Re.querySelector("[data-fav-add]").setAttribute("aria-expanded", String(ro)), ro && Zo("pick", Ll(Re.querySelector("[data-fav-search]").value, (u) => Tl.test(u), new Set(Va()), "data-fav-pick")), Zo("suggest", '<div><strong>Show suggestions</strong><div class="status">Fills the card after your favourites.</div></div><button class="switch' + (dr() ? " on" : "") + '" type="button" role="switch" aria-checked="' + dr() + '" data-fav-suggest aria-label="Show suggestions"></button>');
  }
  const Pi = (t) => {
    j = { ...j, ...t }, La(), Ta(), wa();
  };
  function Ko(t, a) {
    const o = j, l = new Set(j.favHidden || []);
    a ? l.delete(t) : l.add(t), Pi({ favHidden: [...l] }), a ? An(Dt(t) + " put back") : An(Dt(t) + " hidden", ba(o));
  }
  const $o = (t) => {
    const a = j;
    Pi({ favourites: Va().filter((o) => o !== t), favHidden: (j.favHidden || []).filter((o) => o !== t) }), An(Dt(t) + " removed from favourites", ba(a));
  }, Lo = (t) => {
    Pi({ favourites: [...Va().filter((a) => a !== t), t], favHidden: (j.favHidden || []).filter((a) => a !== t) }), An(Dt(t) + " added to favourites");
  };
  Re.addEventListener("click", (t) => {
    var o;
    const a = t.target.closest("button");
    a && (a.hasAttribute("data-tray-done") ? ns(!1) : a.hasAttribute("data-tray-tuck") ? (Hn = !Hn, wa()) : a.hasAttribute("data-phone-toggle") ? (vn = !vn, wa(), vn && ((o = Ya.querySelector("[data-phone-key]")) == null || o.focus({ preventScroll: !0 }))) : a.dataset.trayCard ? t.detail === 0 && (ao(a.dataset.trayCard), wa()) : a.dataset.favEye ? Ko(a.dataset.favEye, a.getAttribute("aria-pressed") !== "true") : a.dataset.favRemove ? $o(a.dataset.favRemove) : a.hasAttribute("data-fav-add") ? (ro = !ro, wa(), ro && Re.querySelector("[data-fav-search]").focus({ preventScroll: !0 })) : a.dataset.favPick ? Lo(a.dataset.favPick) : a.hasAttribute("data-tile-add") ? (so = !so, wa(), so && Re.querySelector("[data-tile-search]").focus({ preventScroll: !0 })) : a.dataset.tilePick ? yr(a.dataset.tilePick) : a.hasAttribute("data-room-add") ? (Cr = !Cr, wa()) : a.dataset.roomPick ? yr("room:" + a.dataset.roomPick) : a.hasAttribute("data-fav-suggest") && Pi({ suggest: !dr() }));
  }), Re.addEventListener("input", (t) => {
    t.target.matches("[data-fav-search],[data-tile-search]") && wa();
  }), Re.addEventListener("keydown", (t) => {
    var o, l;
    const a = !!((l = (o = t.target).closest) != null && l.call(o, '[data-pick="tiles"],[data-tile-add]'));
    t.key !== "Escape" || !(a ? so : ro) || (t.stopPropagation(), a ? so = !1 : ro = !1, wa(), Re.querySelector(a ? "[data-tile-add]" : "[data-fav-add]").focus({ preventScroll: !0 }));
  });
  function qs(t, a, o, l) {
    t.preventDefault();
    const c = t.clientX, m = t.clientY;
    let u = null, v = 0;
    const y = Object.assign(document.createElement("div"), { className: "tfFavDrop" }), H = (D) => {
      if (!u) {
        if (Math.hypot(D.clientX - c, D.clientY - m) < 4) return;
        u = a.cloneNode(!0), u.classList.add("tfTrayGhost"), u.style.width = a.offsetWidth + "px", g.appendChild(u);
      }
      u.style.transform = "translate(" + (D.clientX - 24) + "px," + (D.clientY - 24) + "px)";
      const q = !Hn && D.clientX >= Re.getBoundingClientRect().left;
      if (o === "card") {
        const at = T.getBoundingClientRect(), { w: lt } = ha(T.clientWidth);
        Le = !q && D.clientX >= at.left && D.clientX <= at.right && D.clientY >= at.top + Co ? { key: l, col: Math.max(0, Math.floor((D.clientX - at.left) / (lt + We))), row: Math.max(0, Math.floor((D.clientY - at.top - Co) / Ga)), fromTray: !0 } : null, v || (v = requestAnimationFrame(() => {
          v = 0, ra();
        }));
        return;
      }
      const X = T.querySelector(".tfDash-favs"), Ct = X == null ? void 0 : X.getBoundingClientRect();
      if (Na = null, Ct && !q && D.clientX >= Ct.left && D.clientX <= Ct.right && D.clientY >= Ct.top && D.clientY <= Ct.bottom) {
        let at = 1 / 0;
        X.querySelectorAll('[data-k^="fav:"]').forEach((lt, F) => {
          const xt = lt.getBoundingClientRect(), G = Math.hypot(D.clientX - (xt.left + xt.width / 2), D.clientY - (xt.top + xt.height / 2));
          G < at && (at = G, Na = { i: F, r: xt, after: D.clientX > xt.left + xt.width / 2 });
        }), Na || (Na = { i: 0, r: null, after: !1 });
      }
      Na != null && Na.r ? (y.isConnected || g.appendChild(y), Object.assign(y.style, { left: (Na.after ? Na.r.right : Na.r.left) - 2 + "px", top: Na.r.top + 8 + "px", height: Na.r.height - 16 + "px" })) : y.remove();
    }, I = () => {
      if (window.removeEventListener("pointermove", H), window.removeEventListener("pointerup", I), window.removeEventListener("pointercancel", I), cancelAnimationFrame(v), u == null || u.remove(), y.remove(), o === "card") {
        if (!u) ao(l);
        else if (Le != null && Le.fromTray) {
          ra();
          const at = Ra(l) + Is(l), lt = ke(), F = eo();
          Le = null, Uo({ ...lt, hidden: lt.hidden.filter((xt) => xt !== l) }, F), An(at);
        }
        Le = null, ra(), Ta(), wa();
        return;
      }
      if (!Na) return;
      const D = new Set(j.favHidden || []);
      D.delete(l);
      const q = Va().filter((at) => at !== l), X = q.filter((at) => !D.has(at)), Ct = X[Math.min(Na.i + (Na.after ? 1 : 0), X.length)];
      q.splice(Ct ? q.indexOf(Ct) : q.length, 0, l), Na = null, Pi({ favourites: q, favHidden: [...D] }), An(Dt(l) + " put back");
    };
    window.addEventListener("pointermove", H), window.addEventListener("pointerup", I), window.addEventListener("pointercancel", I);
  }
  const Xo = { sums: 201, wx: 364, favs: 364, areas: 364, act: 364, energy: 288, avg: 288, aq: 288, pollen: 288, radar: 288 }, El = 136, Tr = 288, kd = 0.8, Ii = { wx: "mdi:weather-partly-cloudy", areas: "mdi:home", favs: "mdi:star", act: "mdi:history", energy: "mdi:lightning-bolt", avg: "mdi:chart-line", aq: "mdi:air-filter", pollen: "mdi:flower-pollen", radar: "mdi:radar" }, Ya = Object.assign(document.createElement("aside"), { className: "tfMiniPhone" });
  Ya.setAttribute("aria-label", "Phone order"), Ya.innerHTML = '<div class="tfPhoneHead"><div class="activityTitle">Phone</div><button class="tfTrayBtn" type="button" data-phone-close aria-label="Close the phone">' + op + '</button></div><p class="tfTrayNote" data-phone="note"></p><div class="tfPhoneScreen"><div class="tfPhoneList" data-phone="list"></div></div>', g.appendChild(Ya);
  let Ar = "";
  function Jo() {
    var v;
    const t = vn && Fa && g.classList.contains("tfBoard") && !Hn;
    if (Ya.classList.toggle("open", t), Ya.toggleAttribute("inert", !t), !t) return;
    const a = es().filter((y) => !ke().hidden.includes(y.key)), o = a.length, l = (y) => Math.round(y * kd * 10) / 10 + "px", c = (y, H) => {
      const I = y.el.classList.contains("tfDac"), D = y.tile ? I ? Tr : El : Xo[y.key] || El;
      return '<button class="tfPhoneBlock' + (y.tile ? " tile" : "") + '" type="button" data-phone-key="' + J(y.key) + '" style="min-height:' + l(D) + '" aria-label="' + J(Ra(y.key) + ", " + (H + 1) + " of " + o + ". Drag, or use the arrow keys, to move it") + '"><span class="tfIcon"' + (y.tile ? Ue(y.key, Qa(y.key)) : Ue(y.key, Ii[y.key])) + '></span><span class="tfPhoneName">' + J(Ra(y.key)) + "</span></button>";
    }, m = '<div class="tfPhoneTitle">' + J(((v = T.querySelector(".tfDashTitle")) == null ? void 0 : v.textContent) || "") + '</div><div class="tfPhoneBlock fixed" style="min-height:' + l(Xo.sums) + '"><span class="tfPhoneName">' + J(Ra("sums")) + "</span></div>" + a.map(c).join("");
    if (Ya.querySelector('[data-phone="note"]').innerHTML = ke().phone ? 'Phones use this order. <button class="tfLinkBtn" type="button" data-phone-reset>Follow the board</button>' : "Phones follow the board. Drag a card to give them an order of their own.", m === Ar) return;
    Ar = m;
    const u = Ya.querySelector('[data-phone="list"]');
    u.innerHTML = m, _a(u);
  }
  function Hi(t, a) {
    var o;
    Jr({ ...ke(), phone: t }), wa(), a && ((o = Ya.querySelector('[data-phone-key="' + CSS.escape(a) + '"]')) == null || o.focus({ preventScroll: !0 }));
  }
  const Lr = () => [...Ya.querySelectorAll("[data-phone-key]")].map((t) => t.dataset.phoneKey);
  function js(t, a) {
    t.preventDefault();
    const o = a.parentElement, l = Ya.querySelector(".tfPhoneScreen"), c = Lr().join();
    a.classList.add("moving");
    const m = (v) => {
      const y = l.getBoundingClientRect();
      v.clientY > y.bottom - 40 ? l.scrollTop += 12 : v.clientY < y.top + 40 && (l.scrollTop -= 12);
      const H = [...o.querySelectorAll("[data-phone-key]")].find((q) => {
        const X = q.getBoundingClientRect();
        return q !== a && v.clientX >= X.left && v.clientX <= X.right && v.clientY >= X.top && v.clientY <= X.bottom;
      });
      if (!H) return;
      const I = H.getBoundingClientRect(), D = H.classList.contains("tile") ? v.clientX < I.left + I.width / 2 : v.clientY < I.top + I.height / 2;
      o.insertBefore(a, D ? H : H.nextSibling);
    }, u = () => {
      window.removeEventListener("pointermove", m), window.removeEventListener("pointerup", u), window.removeEventListener("pointercancel", u), a.classList.remove("moving");
      const v = Lr();
      Ar = "", v.join() !== c ? Hi(v) : Jo();
    };
    window.addEventListener("pointermove", m), window.addEventListener("pointerup", u), window.addEventListener("pointercancel", u);
  }
  Ya.addEventListener("pointerdown", (t) => {
    const a = t.target.closest("[data-phone-key]");
    a && t.button <= 0 && js(t, a);
  }), Ya.addEventListener("click", (t) => {
    var o;
    const a = t.target.closest("button");
    if (a != null && a.hasAttribute("data-phone-close"))
      vn = !1, wa(), (o = Re.querySelector("[data-phone-toggle]")) == null || o.focus({ preventScroll: !0 });
    else if (a != null && a.hasAttribute("data-phone-reset")) {
      const { phone: l, ...c } = ke();
      Jr(c), wa();
    }
  }), Ya.addEventListener("keydown", (t) => {
    var u, v, y, H;
    if (t.key === "Escape") {
      t.stopPropagation(), vn = !1, wa(), (u = Re.querySelector("[data-phone-toggle]")) == null || u.focus({ preventScroll: !0 });
      return;
    }
    const a = (H = (y = (v = t.target).closest) == null ? void 0 : y.call(v, "[data-phone-key]")) == null ? void 0 : H.dataset.phoneKey, o = { ArrowUp: -1, ArrowLeft: -1, ArrowDown: 1, ArrowRight: 1 }[t.key];
    if (!a || !o) return;
    t.preventDefault();
    const l = Lr(), c = l.indexOf(a), m = c + o;
    m < 0 || m >= l.length || ([l[c], l[m]] = [l[m], l[c]], Hi(l, a));
  });
  function Fi(t, a) {
    t.preventDefault();
    const o = a.parentElement;
    a.classList.add("moving");
    const l = (m) => {
      const u = [...o.children].find((v) => {
        const y = v.getBoundingClientRect();
        return v !== a && m.clientY >= y.top && m.clientY <= y.bottom;
      });
      if (u) {
        const v = u.getBoundingClientRect();
        o.insertBefore(a, m.clientY < v.top + v.height / 2 ? u : u.nextSibling);
      }
    }, c = () => {
      window.removeEventListener("pointermove", l), window.removeEventListener("pointerup", c), window.removeEventListener("pointercancel", c), a.classList.remove("moving");
      const m = new Set(Va());
      Yo.favs = null, Pi({ favourites: [...o.children].map((u) => u.dataset.trayFav).filter((u) => m.has(u)) });
    };
    window.addEventListener("pointermove", l), window.addEventListener("pointerup", c), window.addEventListener("pointercancel", c);
  }
  Re.addEventListener("pointerdown", (t) => {
    if (t.button > 0) return;
    const a = t.target.closest("[data-tray-card]"), o = t.target.closest(".tfTrayFav");
    a ? qs(t, a, "card", a.dataset.trayCard) : o && t.target.closest(".tfTrayGrip") ? Fi(t, o) : o != null && o.classList.contains("off") && !t.target.closest("button") && qs(t, o, "fav", o.dataset.trayFav);
  });
  function Oi(t) {
    if (!Fa || t.button !== 0 || t.target.closest("[data-board-more],.tfBoardMenu,.tfFavHides")) return;
    const a = t.target.closest(".tfBoardItem"), o = a && wr().find((D) => D.el === a);
    if (!o || to.includes(o.key)) return;
    const l = Go.get(o.key), { w: c } = ha(T.clientWidth);
    if (!l) return;
    t.preventDefault(), on();
    const m = t.clientX, u = t.clientY;
    let v = !1, y = 0;
    const H = (D) => {
      const q = D.clientX - m, X = D.clientY - u;
      if (!v) {
        if (Math.hypot(q, X) < 4) return;
        v = !0, Le = { key: o.key, col: l.col, row: l.row }, a.classList.add("tfDragging");
      }
      a.style.transform = "translate(" + q + "px," + X + "px)", Le.col = Math.round((l.x + q) / (c + We)), Le.row = Math.round((l.y + X - Co) / Ga), y || (y = requestAnimationFrame(() => {
        y = 0, ra();
      }));
    }, I = () => {
      window.removeEventListener("pointermove", H), window.removeEventListener("pointerup", I), window.removeEventListener("pointercancel", I), v && (cancelAnimationFrame(y), ra(), a.classList.remove("tfDragging"), a.style.transform = "", Le = null, Uo(ke(), eo()), ra(), Ta());
    };
    window.addEventListener("pointermove", H), window.addEventListener("pointerup", I), window.addEventListener("pointercancel", I);
  }
  function Za(t = !1) {
    const a = T == null ? void 0 : T.querySelector(".tfDashGraph svg[data-graph]");
    if (!(a != null && a.clientWidth)) return;
    const o = a.dataset.graph + "@" + a.clientWidth + "x" + a.clientHeight + "@" + Math.floor(Date.now() / 3e5);
    if (a.dataset.drawn === o) return;
    const l = !a.dataset.drawn;
    a.dataset.drawn = o;
    const c = Es.find((m) => m.id === a.dataset.graph);
    c ? gr(a, c).then(() => {
      (t || l) && Ds(a);
    }) : ms(a.dataset.graph, a).then(() => {
      t && gd(a);
    });
  }
  function zs() {
    var v, y, H;
    ue = xe.model(i()), lr(), k = ue.states, k[(v = j.sources) == null ? void 0 : v.grid] && (ue.grid = j.sources.grid), k[(y = j.sources) == null ? void 0 : y.alarm] && (ue.security.alarms = [j.sources.alarm]), P.forEach((I, D) => {
      const q = k[D], X = (q == null ? void 0 : q.attributes) || {};
      if (!q || Date.now() - I.at > 2 * 60 * 1e3) {
        P.delete(D);
        return;
      }
      I.pos != null && q.state !== "opening" && q.state !== "closing" && Math.abs(Rn(D) - I.pos) < 1 && delete I.pos, I.tilt != null && Math.abs((X.current_tilt_position ?? -1) - I.tilt) < 1 && delete I.tilt, I.pos == null && I.tilt == null && P.delete(D);
    });
    const t = [];
    let a = 0;
    const o = pd();
    Yn = o.filter((I) => I.room).map((I) => I.room), Yn.some((I) => I.id === St) || (St = ((H = Yn[0]) == null ? void 0 : H.id) || null);
    const l = U === "weather" ? { key: "weather", name: "Weather" } : U && o.find((I) => I.key === U);
    if (l || (U = null), g.classList.toggle("tfAreaOpen", !!l), g.classList.toggle("tfWeatherOpen", (l == null ? void 0 : l.key) === "weather"), g.classList.toggle("tfDash", !l), Se = /* @__PURE__ */ new Map(), ue.rooms.forEach((I) => [...I.actions, ...I.plugs, ...I.readings, ...I.openings, ...I.solar, ...I.plants.flatMap((D) => [D.id, ...D.readings])].forEach((D) => Se.set(D, I.name))), !l) return Ai(t, xi());
    if (t.push({ key: "areahead", html: _l(l, ++a) }), l.key === "weather")
      return t.weather = ++a, t;
    const c = l.ids, m = l.room ? l.room.id : l.key, u = l.room;
    return u != null && u.solar.length && t.push({ key: "energy:" + u.id, html: qr(u, ++a) }), u && (u.readings.length || u.plugs.length || u.power != null) && t.push({ key: "readings:" + u.id, html: Nn(u, ++a) }), u == null || u.plants.forEach((I) => t.push({ key: "plant:" + I.id, html: ir(I, ++a) })), c.length && t.push({ key: "block:" + m, order: ++a, tiles: c.map((I) => ({ key: I, html: Ft(I) })) }), t;
  }
  const _l = (t, a) => '<div class="settingsHeader tfAreaHead" data-tf data-k="areahead" style="order:' + a + '"><button class="back" type="button" data-area-back aria-label="Back to the house">' + Uc + '</button><div class="settingsTitle">' + J(t.name) + "</div></div>";
  let rs = 0, Dl = null;
  const ss = (t) => t === "weather" ? da.wx : t.startsWith("room:") && T.querySelector('.tfRoomTile[data-k="' + CSS.escape(t) + '"]') || T.querySelector(".tfAreas");
  function ls(t) {
    var a, o;
    U || (rs = Qo().scrollTop, Dl = ((a = ss(t)) == null ? void 0 : a.getBoundingClientRect().top) ?? null), U = t, t.startsWith("room:") && (St = t.slice(5)), aa(), Qo().scrollTop = 0, (o = T.querySelector("[data-area-back]")) == null || o.focus({ preventScroll: !0 });
  }
  let Eo = null;
  function Vs(t, a) {
    if (Eo == null || Eo(), a == null) return;
    const o = Qo(), l = performance.now() + 1500, c = ["wheel", "touchstart", "pointerdown", "keydown"];
    let m = 0;
    const u = () => {
      cancelAnimationFrame(m), c.forEach((y) => window.removeEventListener(y, u, !0)), Eo = null;
    }, v = () => {
      const y = t();
      if (y != null && y.isConnected) {
        const H = y.getBoundingClientRect().top - a;
        Math.abs(H) > 0.5 && (o.scrollTop += H);
      }
      performance.now() < l ? m = requestAnimationFrame(v) : u();
    };
    c.forEach((y) => window.addEventListener(y, u, { capture: !0, passive: !0 })), Eo = u, v();
  }
  function _o() {
    var o;
    const t = U;
    U = null, aa(), Qo().scrollTop = rs, Vs(() => ss(t), Dl);
    const a = t.startsWith("room:") ? T.querySelector('.tfRoomTile[data-k="' + CSS.escape(t) + '"]') || T.querySelector('.tfAreaPanel[data-area="' + CSS.escape(t.slice(5)) + '"]') : t === "weather" ? da.wx.querySelector(".wbOpenPage") : T.querySelector('[data-k="sum:' + CSS.escape(t) + '"]');
    (o = (a == null ? void 0 : a.querySelector("[data-go]")) || a) == null || o.focus({ preventScroll: !0 });
  }
  const Bl = (t) => t.wrap ? t.wrap(t.tiles.map((a) => a.html).join(""), t) : '<div class="tfBlock" data-tf data-k="' + J(t.key) + '" style="order:' + t.order + '"><div class="tfActions">' + t.tiles.map((a) => a.html).join("") + "</div></div>", Rl = (t) => t.map((a) => a.key + (a.tiles ? "(" + a.tiles.map((o) => o.key).join(",") + ")" : "")).join(";");
  function Qo() {
    for (let t = g.parentElement || g.getRootNode().host; t; t = t.parentElement || t.getRootNode().host) {
      const a = getComputedStyle(t).overflowY;
      if ((a === "auto" || a === "scroll") && t.scrollHeight > t.clientHeight) return t;
    }
    return document.scrollingElement;
  }
  function Gs(t) {
    const a = Qo(), o = (v) => {
      const y = v.getBoundingClientRect();
      return y.height && y.bottom > 0 && y.top < window.innerHeight;
    }, l = [...T.children, ...T.querySelectorAll(".tfDashTiles > *")].find((v) => !v.matches(".tfDashTiles") && o(v)), c = l == null ? void 0 : l.dataset.k, m = l == null ? void 0 : l.getBoundingClientRect().top;
    t();
    const u = l != null && l.isConnected ? l : c && T.querySelector('[data-k="' + CSS.escape(c) + '"]');
    u != null && u.isConnected && m != null && (a.scrollTop += u.getBoundingClientRect().top - m);
  }
  function aa() {
    if (!x || !T) return;
    const t = zs(), a = (c) => {
      var m;
      return (((m = c.closest("[data-k]")) == null ? void 0 : m.dataset.k) || "") + "|" + c.dataset.iconFor + "|" + (c.dataset.iconName || "");
    }, o = /* @__PURE__ */ new Map();
    T.querySelectorAll("[data-tf] [data-icon-for]").forEach((c) => {
      c.firstElementChild && (o.get(a(c)) || o.set(a(c), []).get(a(c))).push(c.firstElementChild);
    }), T.querySelectorAll("[data-tf]").forEach((c) => c.remove()), ze.clear();
    const l = document.createElement("div");
    l.innerHTML = t.map((c) => c.tiles ? Bl(c) : c.html).join(""), t.forEach((c) => c.tiles ? c.tiles.forEach((m) => ze.set(m.key, m.html)) : ze.set(c.key, c.html)), Fr = Rl(t), l.querySelectorAll("[data-icon-for]").forEach((c) => {
      var u;
      const m = !c.firstElementChild && ((u = o.get(a(c))) == null ? void 0 : u.shift());
      m && c.appendChild(m);
    }), T.append(...l.children), Ji(t.weather), Qi(), as.disconnect(), ra(), _a(T), ps(T), Ca(T), V(), ot && ms(ot.id), Bo(), Wi(), Wl(), requestAnimationFrame(gt);
  }
  const sa = (t) => {
    var o;
    const a = n.activeElement && t.contains(n.activeElement) ? n.activeElement : null;
    return a && { label: a.getAttribute("aria-label"), act: (o = a.dataset) == null ? void 0 : o.act };
  }, Er = (t, a) => {
    var o;
    a && ((o = a.label && t.querySelector('[aria-label="' + CSS.escape(a.label) + '"]') || a.act && t.querySelector('[data-act="' + CSS.escape(a.act) + '"]')) == null || o.focus({ preventScroll: !0 }));
  };
  function Us(t, a) {
    if (!t.querySelector(".tfDacPad"))
      return t.replaceWith(a), a;
    const o = t.matches(".tfDac") && t.querySelector(":scope > .tfDacPad"), l = a.querySelector(":scope > .tfDacPad");
    if (o)
      return (l == null ? void 0 : l.dataset.dac) !== o.dataset.dac ? (t.replaceWith(a), a) : (t.querySelector(":scope > .tfActionHead").replaceWith(a.querySelector(":scope > .tfActionHead")), t.classList.toggle("on", a.classList.contains("on")), ["data-light", "data-tone"].forEach((u) => a.hasAttribute(u) ? t.setAttribute(u, a.getAttribute(u)) : t.removeAttribute(u)), [...t.style].filter((u) => u.startsWith("--") && !u.startsWith("--tf-")).forEach((u) => t.style.removeProperty(u)), [...a.style].forEach((u) => t.style.setProperty(u, a.style.getPropertyValue(u))), t);
    const c = (u) => {
      var v;
      return ((v = u.dataset) == null ? void 0 : v.iconFor) !== void 0;
    };
    if (c(t) && c(a) && !a.children.length && t.dataset.iconFor === a.dataset.iconFor && t.dataset.iconName === a.dataset.iconName && t.firstElementChild)
      return [...t.attributes].forEach((u) => {
        a.hasAttribute(u.name) || t.removeAttribute(u.name);
      }), [...a.attributes].forEach((u) => {
        t.getAttribute(u.name) !== u.value && t.setAttribute(u.name, u.value);
      }), t;
    if (t.tagName !== a.tagName || t.children.length !== a.children.length)
      return t.replaceWith(a), a;
    [...t.attributes].forEach((u) => {
      a.hasAttribute(u.name) || t.removeAttribute(u.name);
    }), [...a.attributes].forEach((u) => t.setAttribute(u.name, u.value));
    const m = [...a.children];
    return [...t.children].forEach((u, v) => Us(u, m[v])), t;
  }
  function Nl(t, a) {
    const o = document.createElement("div");
    o.innerHTML = a;
    const l = sa(t), c = Us(t, o.firstElementChild);
    _a(c), ps(c), Ca(c), Er(c, l);
  }
  function Ta() {
    !x || !T || Le || Gs(Pl);
  }
  function Pl() {
    if (!T.querySelector("[data-tf]")) {
      aa();
      return;
    }
    const t = zs();
    if (Rl(t) !== Fr) {
      aa();
      return;
    }
    const a = (o) => [...M.keys()].some((l) => {
      const c = l.slice(l.indexOf("|") + 1);
      return o === c || o.endsWith(":" + c);
    });
    t.forEach((o) => (o.tiles || [o]).forEach((l) => {
      if (ze.get(l.key) === l.html || a(l.key)) return;
      const c = T.querySelector('[data-k="' + CSS.escape(l.key) + '"]');
      if (c) {
        if (ze.set(l.key, l.html), ot && ot.key === l.key && c.querySelector(".tfOpen")) {
          c.querySelector(".tfOpen .activityRowMeta").textContent = bi(ot.id);
          return;
        }
        Nl(c, l.html), ot && ot.key === l.key && ms(ot.id), l.key.startsWith("energy:") && Bo();
      }
    })), Wi(), Wl(), Cn(), V(), Jt == null || Jt.update(), ga == null || ga.forEach((o) => o.update()), g.classList.contains("tfDash") && nn(), requestAnimationFrame(gt);
  }
  const ds = {
    light: (t) => [["Brightness", t.brightness != null ? Math.round(t.brightness / 2.55) + "%" : null], ["Colour temperature", t.color_temp_kelvin ? Number(t.color_temp_kelvin).toLocaleString() + " K" : null], ["Colour mode", t.color_mode && De(t.color_mode)]],
    climate: (t) => [["Current temperature", Ea(t.current_temperature) + " °C"], ["Target", Ea(t.temperature) + " °C"], ["Action", De(t.hvac_action)]],
    cover: (t) => [["Position", t.current_position != null ? t.current_position + "% open" : null], ["Tilt", t.current_tilt_position != null ? t.current_tilt_position + "% open" : null]],
    humidifier: (t) => [["Current humidity", t.current_humidity + "%"], ["Target", t.humidity + "%"], ["Mode", De(t.mode)]],
    media_player: (t) => [["Title", t.media_title], ["Artist", t.media_artist], ["Volume", t.volume_level != null ? Math.round(t.volume_level * 100) + "%" : null], ["Source", t.source]],
    vacuum: (t) => [["Battery", t.battery_level + "%"], ["Fan speed", De(t.fan_speed)], ["Rooms", (t.rooms || []).join(", ") || null]],
    lock: (t) => [["Changed by", t.changed_by]],
    alarm_control_panel: (t) => [["Changed by", t.changed_by]],
    valve: () => [],
    plant: (t) => [["Moisture", t.moisture + "%"], ["Light", Number(t.brightness).toLocaleString() + " lx"], ["Temperature", Ea(t.temperature) + " °C"], ["Fertility", t.conductivity + " µS/cm"], ["Problems", t.problem === "none" ? "None" : De(t.problem)]],
    weather: (t) => [["Temperature", t.temperature != null ? t.temperature + " " + (t.temperature_unit || "°C") : null], ["Humidity", t.humidity != null ? t.humidity + "%" : null], ["Wind", t.wind_speed != null ? t.wind_speed + " " + (t.wind_speed_unit || "km/h") : null], ["Pressure", t.pressure != null ? t.pressure + " " + (t.pressure_unit || "hPa") : null]]
  }, Il = (t) => {
    var o;
    const a = (((o = ds[t.split(".")[0]]) == null ? void 0 : o.call(ds, Kt(t))) || []).filter(([, l]) => l != null && l !== "");
    return a.length ? '<div class="tfMoreRows">' + a.map(([l, c]) => '<div class="tfMoreRow"><span>' + J(l) + "</span><span>" + J(c) + "</span></div>").join("") + "</div>" : "";
  }, Hl = (t) => Ui(t) ? '<div class="tfMoreNote">Made up for this page</div>' : "";
  function ti(t, a = {}, o = !1) {
    return '<div class="tfMoreList">' + t.map((l) => '<div class="tfMoreGroup"><div class="tfMoreGroupName">' + J(l.name) + '</div><div class="tfMoreTiles' + (o ? " single" : "") + '">' + l.ids.map((c) => Wo(c, a)).join("") + "</div></div>").join("") + "</div>";
  }
  const le = document.createElement("div");
  le.className = "tfMoreBackdrop", le.hidden = !0, g.appendChild(le);
  const Fl = (t, a) => {
    for (let o = t; o && o !== le; o = o.parentElement) {
      const l = getComputedStyle(o).overflowY;
      if ((l === "auto" || l === "scroll") && o.scrollHeight > o.clientHeight + 1 && (a < 0 ? o.scrollTop > 0 : o.scrollTop + o.clientHeight < o.scrollHeight - 1)) return !0;
    }
    return !1;
  };
  let rn = null;
  le.addEventListener("touchstart", (t) => {
    rn = { x: t.touches[0].clientX, y: t.touches[0].clientY };
  }, { passive: !0 }), le.addEventListener("touchmove", (t) => {
    var c, m;
    if (!rn || t.touches.length > 1 || (m = (c = t.target).closest) != null && m.call(c, "input,textarea,select")) return;
    const a = t.touches[0], o = rn.x - a.clientX, l = rn.y - a.clientY;
    rn = { x: a.clientX, y: a.clientY }, Math.abs(l) >= Math.abs(o) && !Fl(t.target, l) && t.preventDefault();
  }, { passive: !1 }), le.addEventListener("wheel", (t) => {
    Fl(t.target, t.deltaY) || t.preventDefault();
  }, { passive: !1 });
  function _r() {
    const t = le.querySelector(".tfMorePair"), a = le.querySelector(".tfMore");
    t == null || t.classList.toggle("over", window.innerWidth <= 620 || (window.innerWidth - a.offsetWidth) / 2 < 328);
  }
  window.addEventListener("resize", _r, { passive: !0 }), x && la();
  let Do = [];
  const ei = (t) => t === "favourites" || t.startsWith("summary:") || t.startsWith("group:");
  function cs(t) {
    const a = (y, H = "") => '<div class="tfMoreHead">' + (wt != null && wt.back ? '<button class="tfBack" type="button" data-more-back aria-label="Back">' + Wd + "</button>" : "") + '<div class="activityTitle" id="tfMoreTitle">' + J(y) + "</div>" + H + '<button class="tfBack" type="button" data-more-close aria-label="Close">' + ph + "</button></div>", o = (y, H) => '<div class="tfMoreNow"><div class="tfMoreState">' + J(y) + "</div>" + (H ? '<div class="tfMoreSub">' + J(H) + "</div>" : "") + "</div>", l = ti;
    if (t === "favourites") {
      const y = Va(), H = new Set(y), I = [{ name: "Starred", ids: y }, { name: "Home", ids: ue.homeVacuums }, { name: "Security", ids: [...ue.security.alarms, ...ue.security.locks] }, ...ue.rooms.map((D) => ({ name: D.name, ids: [...D.actions, ...D.plugs] }))].map((D, q) => q ? { ...D, ids: D.ids.filter((X) => !H.has(X)) } : D).filter((D) => D.ids.length);
      return [a("Favourites"), o(y.length ? y.length + " starred" : "None starred"), l(I, { star: !0 }, !0)];
    }
    const c = (y, { name: H = "", alert: I = !1, plain: D = !1 } = {}) => {
      const q = D ? [] : y.filter((at) => ed.includes(at.split(".")[0])), X = y.filter((at) => !q.includes(at)), Ct = (at) => at.startsWith("vacuum.") && Kt(at).battery_level != null ? Kt(at).battery_level + "%" : null;
      return '<div class="tfMoreGroup">' + (H ? '<div class="tfMoreGroupName">' + J(H) + "</div>" : "") + '<div class="tfMoreActions">' + q.map((at) => Ft(at, !0)).join("") + X.map((at) => Wo(at, { plain: D, alert: I, say: D ? Ct(at) : null })).join("") + "</div></div>";
    };
    if (t.startsWith("summary:")) {
      const y = xi().find((q) => q.key === t.slice(8));
      if (!y) return null;
      const H = y.key === "light" ? (y.groups || []).flatMap((q) => q.ids) : [], I = H.some((q) => {
        var X;
        return ((X = k[q]) == null ? void 0 : X.state) === "on";
      }), D = H.length ? '<button class="primary" type="button" data-acts="' + tn(H.map((q) => ["light", I ? "turn_off" : "turn_on", q])) + '">' + (I ? "Turn all off" : "Turn all on") + "</button>" : "";
      return [a(y.name), '<div class="tfMoreNowRow">' + o(y.value) + D + "</div>", ...(y.groups || []).map((q) => c(q.ids, { name: q.name === y.name ? "" : q.name, alert: q.alert, plain: y.plain }))];
    }
    if (t.startsWith("group:")) {
      const [, y, H] = t.split(":"), I = ue.rooms.find((X) => X.id === y), D = I && be(I).find((X) => X.key === H);
      if (!D) return null;
      const q = D.acts ? '<button class="primary" type="button" data-acts="' + tn(D.acts) + '">' + (D.on ? "Turn all off" : "Turn all on") + "</button>" : "";
      return [a(I.name + " " + D.label.toLowerCase()), '<div class="tfMoreNowRow">' + o(D.value) + q + "</div>", c(Ba(I, H))];
    }
    const m = t.split(".")[0], u = k[t], v = ed.includes(m) ? Gn(t) : { sections: [] };
    return [
      a(Dt(t)),
      o(oa(t), u.last_changed && er(Date.parse(u.last_changed))),
      (wt == null ? void 0 : wt.at) && '<svg class="tfGraph tfDay" data-day="' + J(t) + '" role="img" aria-label="' + J(Dt(t)) + ', last 24 hours"></svg>',
      m === "cover" && '<div data-cover-art="' + J(t) + '"></div>',
      ...v.sections.filter(Boolean),
      Ys(t) && '<button class="tfDetailsBtn" type="button" data-details aria-expanded="' + !!(wt != null && wt.details) + '" aria-controls="tfMoreSide"><span>Details</span>' + ip + "</button>"
    ].filter(Boolean);
  }
  const Ys = (t) => ei(t) ? "" : Il(t) + Hl(t);
  let Dr = "";
  function Zs(t) {
    var a;
    wt && (wt.details = t, Wi(), (a = le.querySelector(t ? "[data-details-close]" : "[data-details]")) == null || a.focus({ preventScroll: !0 }));
  }
  const Wa = (t) => {
    const a = k[t], o = Rn(t), l = Te(t);
    return { kind: Od(a), name: Dt(t), text: oa(t), pos: o, target: Math.abs(l - o) > 0.5 ? l : null, moving: a.state === "opening" || a.state === "closing", tilt: mo(t) ?? 100, canSet: Ut(t, Jc) };
  };
  function ps(t) {
    t.querySelectorAll("[data-cover-art]").forEach((a) => {
      const o = a.dataset.coverArt, l = a.dataset.artKey || "more:" + o;
      let c = ht.get(l);
      c || (c = ch({ onMove: (m) => ji(o, m), onSet: (m) => {
        ji(o, m), Ro("pos", o);
      } }), c.coverId = o, ht.set(l, c)), a.replaceWith(c.el), c.update(Wa(o));
    });
  }
  const Ol = (t) => [...ht.values()].filter((a) => a.coverId === t), Ks = () => ht.forEach((t) => {
    k[t.coverId] && t.update(Wa(t.coverId));
  }), Wl = () => {
    ht.forEach((t, a) => {
      t.el.isConnected || (t.destroy(), ht.delete(a));
    }), Ks();
  };
  function Wi() {
    var m, u;
    if (!wt || !(ei(wt.id) || k[wt.id])) {
      le.hidden = !0;
      return;
    }
    if ([...M.keys()].some((v) => v.endsWith("|" + wt.id))) {
      Ks();
      return;
    }
    const t = cs(wt.id), a = le.querySelector(".tfMore");
    if (!t) {
      us();
      return;
    }
    const o = sa(le), l = Ys(wt.id), c = wt.frame ? wt.frame.wide : wt.id.startsWith("summary:") || wt.id.startsWith("group:");
    if (le.hidden || !a || t.length !== Do.length || a.classList.contains("wide") !== c) {
      const v = qa ? wt.scroll || 0 : !le.hidden && a ? a.scrollTop : 0;
      le.innerHTML = '<div class="tfMorePair' + (le.hidden ? "" : " still") + '" role="dialog" aria-modal="true" aria-labelledby="tfMoreTitle"><section class="tfMore' + (c ? " wide" : "") + '"' + (wt.frame ? ' style="height:' + wt.frame.h + 'px"' : "") + ">" + t.join("") + "</section>" + (l ? '<aside class="tfMoreSide" id="tfMoreSide" aria-label="Details"><div class="tfMoreSideInner"><div class="tfMoreHead"><button class="tfBack" type="button" data-details-close aria-label="Back">' + Wd + '</button><div class="activityTitle">Details</div></div><div class="tfMoreSideBody">' + l + "</div></div></aside>" : "") + "</div>", Dr = l, le.classList.toggle("wide", c), le.hidden = !1, _r(), ps(le), Ca(le), _a(le), le.querySelectorAll("[data-day]").forEach((y) => hs(y.dataset.day, y, wt.at)), v && (le.querySelector(".tfMore").scrollTop = v), Er(le, o), le.contains(n.activeElement) || (m = le.querySelector("[data-more-close]")) == null || m.focus({ preventScroll: !0 });
    } else {
      if (t.forEach((v, y) => {
        var D, q;
        if (v === Do[y] || v.includes("data-cover-art") || a.children[y].contains((q = (D = n.activeElement) == null ? void 0 : D.matches) != null && q.call(D, "input,select") ? n.activeElement : null) || [...M.keys()].some((X) => a.children[y].querySelector('[data-drag="' + CSS.escape(X) + '"]'))) return;
        const H = document.createElement("div");
        H.innerHTML = v;
        const I = Us(a.children[y], H.firstElementChild);
        _a(I), Ca(I);
      }), l !== Dr) {
        const v = le.querySelector(".tfMoreSideBody");
        v && (v.innerHTML = l), Dr = l;
      }
      le.contains(n.activeElement) || Er(le, o);
    }
    (u = le.querySelector(".tfMorePair")) == null || u.classList.toggle("details", !!(wt.details && l)), Do = t, Ks();
  }
  setInterval(() => {
    wt && Wi();
  }, 15 * 1e3);
  function $s(t, a) {
    var c;
    const o = !!(wt && a && le.contains(a)), l = o && le.querySelector(".tfMore");
    o && (wt.scroll = l.scrollTop), wt = { id: t, opener: o ? wt.opener : a, back: o ? wt : null, frame: o ? wt.frame || { wide: l.classList.contains("wide"), h: l.offsetHeight } : null, at: Number((c = a == null ? void 0 : a.dataset) == null ? void 0 : c.at) || null }, Xs();
  }
  let qa = !1;
  function Xs() {
    Do = [], qa = !le.hidden, ht.forEach((t, a) => {
      a !== wt.id && le.contains(t.el) && (t.destroy(), ht.delete(a));
    }), Wi(), qa = !1;
  }
  function us() {
    var o, l, c, m, u, v;
    const t = wt == null ? void 0 : wt.opener;
    wt = null, ht.forEach((y, H) => {
      le.contains(y.el) && (y.destroy(), ht.delete(H));
    }), Nt.forEach((y, H) => {
      H.startsWith("more:") && Nt.delete(H);
    }), le.hidden = !0, le.innerHTML = "";
    const a = { preventScroll: !0 };
    t != null && t.isConnected ? t.focus(a) : (o = t == null ? void 0 : t.dataset) != null && o.more ? (l = T.querySelector('[data-more="' + CSS.escape(t.dataset.more) + '"]')) == null || l.focus(a) : (c = t == null ? void 0 : t.dataset) != null && c.summary ? (m = T.querySelector('[data-summary="' + CSS.escape(t.dataset.summary) + '"]')) == null || m.focus(a) : (u = t == null ? void 0 : t.hasAttribute) != null && u.call(t, "data-favs-edit") && ((v = T.querySelector("[data-favs-edit]")) == null || v.focus(a));
  }
  function ai(t, a, o, l = {}) {
    const c = a.map((lt) => lt[1]), m = l.zero ? 0 : Math.min(...c), u = Math.max(...c), v = Math.max(120, t.clientWidth || 260), y = Math.max(60, t.clientHeight || 130), H = 8, I = y - 20, D = Date.now() - 24 * 3600 * 1e3, q = 24 * 3600 * 1e3, X = (lt) => Math.max(0, Math.min(v, (lt - D) / q * v)), Ct = (lt) => u === m ? (H + I) / 2 : I - (lt - m) / (u - m) * (I - H);
    let at = "M" + X(a[0][0]).toFixed(1) + " " + Ct(a[0][1]).toFixed(1);
    for (let lt = 1; lt < a.length; lt++) at += l.smooth ? "L" + X(a[lt][0]).toFixed(1) + " " + Ct(a[lt][1]).toFixed(1) : "H" + X(a[lt][0]).toFixed(1) + "V" + Ct(a[lt][1]).toFixed(1);
    t.setAttribute("viewBox", "0 0 " + v + " " + y), t.setAttribute("aria-label", o), t.innerHTML = '<path d="' + at + "V" + I + "H" + X(a[0][0]).toFixed(1) + 'Z" fill="' + (l.colour || "var(--primary)") + '" fill-opacity=".14"/><path d="' + at + '" fill="none" stroke="' + (l.colour || "var(--primary)") + '" stroke-width="2" stroke-linejoin="round"/><text x="0" y="' + (y - 4) + '">24 h ago</text><text x="' + v + '" y="' + (y - 4) + '" text-anchor="end">Now</text>';
  }
  const qi = { lock: ["unlocked", "open", "opening"], cover: ["open", "opening", "closing"], valve: ["open", "opening", "closing"], vacuum: ["cleaning", "returning"] }, Js = (t, a) => {
    const o = t.split(".")[0];
    return qi[o] ? qi[o].includes(a) : o === "alarm_control_panel" || o === "climate" || o === "media_player" ? !["off", "standby", "disarmed", "unavailable", "unknown"].includes(a) : a === "on";
  }, Md = (t) => {
    const a = t.split(".")[0], o = Kt(t).device_class;
    return a === "binary_sensor" ? { moisture: "Wet", smoke: "Smoke", gas: "Gas", carbon_monoxide: "Carbon monoxide", safety: "Unsafe" }[o] || (td.includes(o) ? "Open" : "On") : { lock: "Unlocked", cover: "Open", valve: "Open", vacuum: "Cleaning", alarm_control_panel: "Armed" }[a] || "On";
  }, Br = /* @__PURE__ */ new Map();
  let fs = 0;
  async function ni(t) {
    let a = Br.get(t);
    if (!a || Date.now() - a.at > 60 * 1e3) {
      let c = [];
      try {
        const m = await B({ type: "history/history_during_period", start_time: new Date(Date.now() - 864e5).toISOString(), entity_ids: [t], minimal_response: !0, no_attributes: !0, significant_changes_only: !1 });
        c = ((m == null ? void 0 : m[t]) || []).map((u) => [u.lu != null ? u.lu * 1e3 : Date.parse(u.last_updated || u.last_changed), String(u.s ?? u.state)]).filter(([u]) => Number.isFinite(u));
      } catch {
      }
      c.length || (c = (Kn || []).filter((m) => m.entity_id === t).map((m) => [m.when * 1e3, String(m.state)])), a = { at: Date.now(), pts: c }, Br.set(t, a);
    }
    const o = k[t], l = a.pts.slice().sort((c, m) => c[0] - m[0]);
    return o && (!l.length || l[l.length - 1][1] !== o.state) && l.push([Date.parse(o.last_changed) || Date.now(), o.state]), l;
  }
  async function hs(t, a, o) {
    const l = await ni(t);
    if (!a.isConnected) return;
    const c = l.map(([G, qt]) => [G, Number(qt)]);
    if (l.length > 1 && c.every(([, G]) => Number.isFinite(G))) {
      ai(a, c, Dt(t) + ", last 24 hours");
      return;
    }
    const m = Date.now(), u = m - 864e5, v = Math.max(200, a.clientWidth || 360), y = 62, H = (G) => Math.max(0, Math.min(v, (G - u) / 864e5 * v)), I = [];
    let D = null;
    l.forEach(([G, qt]) => {
      const Fe = Js(t, qt);
      Fe && D == null ? D = Math.max(G, u) : !Fe && D != null && (I.push([D, Math.max(G, u)]), D = null);
    }), D != null && I.push([D, m]);
    const q = hr(t) ? "var(--danger)" : t.startsWith("light.") ? "#ffaa00" : "var(--primary)", X = Md(t), Ct = "tfDayClip" + ++fs, at = I.map(([G, qt]) => X + (qt >= m - 1e3 && G <= u + 1e3 ? " all day" : qt >= m - 1e3 ? " since " + Mn(G) : G <= u + 1e3 ? " until " + Mn(qt) : " " + Mn(G) + "–" + Mn(qt)));
    let lt = "", F = -1 / 0;
    I.forEach(([G], qt) => {
      const Fe = at[qt].length * 5.4, we = Math.min(H(G), v - Fe);
      we < F + 8 || (lt += '<text x="' + we.toFixed(1) + '" y="10">' + J(at[qt]) + "</text>", F = we + Fe);
    });
    let xt = '<text x="' + v + '" y="' + (y - 2) + '" text-anchor="end">Now</text>';
    [0, 6, 12, 18].forEach((G) => {
      let qt = new Date(m).setHours(G, 0, 0, 0);
      qt > m && (qt -= 864e5), H(qt) > 8 && H(qt) < v - 34 && (xt += '<text x="' + H(qt).toFixed(1) + '" y="' + (y - 2) + '" text-anchor="middle">' + String(G).padStart(2, "0") + "</text>");
    }), a.setAttribute("viewBox", "0 0 " + v + " " + y), a.setAttribute("aria-label", Dt(t) + ", last 24 hours: " + (at.length ? at.join(", ") : "no changes")), a.innerHTML = '<clipPath id="' + Ct + '"><rect x="0" y="18" width="' + v + '" height="26" rx="8"/></clipPath>' + lt + '<rect x="0" y="18" width="' + v + '" height="26" rx="8" fill="var(--text)" fill-opacity=".1"/><g clip-path="url(#' + Ct + ')">' + I.map(([G, qt]) => '<rect x="' + H(G).toFixed(1) + '" y="18" width="' + Math.max(2, H(qt) - H(G)).toFixed(1) + '" height="26" fill="' + q + '"/>').join("") + "</g>" + (o && o >= u ? '<line x1="' + H(o).toFixed(1) + '" x2="' + H(o).toFixed(1) + '" y1="13" y2="49" stroke="var(--text)" stroke-width="2" stroke-linecap="round"/>' : "") + xt;
  }
  function ql(t) {
    var l;
    const a = Number((l = k[t]) == null ? void 0 : l.state), o = Date.now();
    if (Kt(t).state_class === "total_increasing") {
      const c = (/* @__PURE__ */ new Date()).setHours(0, 0, 0, 0), m = Math.max(1, o - c);
      return [...Array(49)].map((u, v) => c + m * v / 48).map((u) => [u, Math.round(a * Math.pow((u - c) / m, 1.3) * 100) / 100]);
    }
    return [...Array(48)].map((c, m) => [o - (48 - m) * 30 * 60 * 1e3, Math.round(a * (0.96 + 0.04 * Math.sin(m / 6)) * 10) / 10]);
  }
  async function ms(t, a) {
    var X, Ct;
    let o = Y.get(t);
    if (t.endsWith("_solar_power")) o = { at: Date.now(), points: vc() };
    else if (Ui(t)) o = { at: Date.now(), points: ql(t) };
    else if (!o || Date.now() - o.at > 5 * 60 * 1e3) {
      try {
        const at = new Date(Date.now() - 864e5).toISOString(), lt = await B({ type: "history/history_during_period", start_time: at, entity_ids: [t], minimal_response: !0, no_attributes: !0, significant_changes_only: !1 }), F = ((lt == null ? void 0 : lt[t]) || []).map((xt) => [xt.lu != null ? xt.lu * 1e3 : Date.parse(xt.last_updated || xt.last_changed), Number(xt.s ?? xt.state)]).filter(([xt, G]) => Number.isFinite(xt) && Number.isFinite(G));
        o = { at: Date.now(), points: F };
      } catch {
        o = { at: Date.now(), points: [] };
      }
      Y.set(t, o);
    }
    const l = a || T.querySelector('[data-graph="' + CSS.escape(t) + '"]');
    if (!l) return;
    const c = k[t], m = ((X = c == null ? void 0 : c.attributes) == null ? void 0 : X.unit_of_measurement) || "", u = o.points.slice(), v = Number(c == null ? void 0 : c.state);
    if (Number.isFinite(v) && !t.endsWith("_solar_power") && u.push([Date.now(), v]), u.length < 2) {
      l.setAttribute("aria-label", Dt(t) + ": no history for the last 24 hours"), l.innerHTML = '<text x="0" y="16">No history for the last 24 hours</text>';
      return;
    }
    const y = u.map((at) => at[1]), H = Math.min(...y), I = Math.max(...y), D = (at) => at.toLocaleString(void 0, { maximumFractionDigits: Math.abs(at) >= 100 ? 0 : 1 }), q = ((Ct = c == null ? void 0 : c.attributes) == null ? void 0 : Ct.state_class) === "total_increasing";
    ai(l, u, Dt(t) + ", last 24 hours: " + (q ? "+" + D(y[y.length - 1] - y[0]) : H === I ? D(H) : D(H) + " to " + D(I)) + (m ? " " + m : ""), { smooth: t.endsWith("_solar_power"), zero: t.endsWith("_solar_power") });
  }
  function Bo() {
    const t = T == null ? void 0 : T.querySelector("[data-solar]");
    if (!t) return;
    const a = vc();
    ai(t, a, "Solar, last 24 hours: up to " + Ea(Math.max(...a.map((o) => o[1])), 1) + " kW", { smooth: !0, zero: !0, colour: "#ffaa00" });
  }
  function jl(t, a) {
    const o = a.entity_id, l = P.get(o) || {}, c = { open_cover: 100, close_cover: 0, set_cover_position: a.position, toggle: Rn(o) > 0 ? 0 : 100 }[t], m = { open_cover_tilt: 100, close_cover_tilt: 0, set_cover_tilt_position: a.tilt_position }[t];
    c != null && (l.pos = c), m != null && (l.tilt = m), t === "stop_cover" && (delete l.pos, delete l.tilt), t === "stop_cover_tilt" && delete l.tilt, l.at = Date.now(), P.set(o, l);
  }
  function Je(t, a, o) {
    var c;
    const l = o == null ? void 0 : o.entity_id;
    return t !== "light" || typeof l != "string" || !za[l] || !kn(l) || o.brightness_pct != null || o.brightness != null ? [a, o] : a !== "turn_on" && !(a === "toggle" && ((c = k[l]) == null ? void 0 : c.state) !== "on") ? [a, o] : ["turn_on", { ...o, brightness_pct: za[l] }];
  }
  function gs(t, a, o, l) {
    let c = { entity_id: o, ...l || {} };
    return [a, c] = Je(t, a, c), t === "cover" && jl(a, c), ta[o] = (ta[o] || 0) + 1, Ki.set(ep, JSON.stringify(ta)), xe.call(t, a, c) ? Promise.resolve() : Promise.resolve(yt(t, a, c));
  }
  function En(t) {
    const [a, o, l, c] = t.split("|");
    gs(a, o, l, c ? JSON.parse(c) : null).catch(() => {
    });
  }
  function ji(t, a) {
    M.set("pos|" + t, a), ze.delete(t), Do = Do.map(() => ""), [T, le].forEach((l) => l.querySelectorAll('[data-blocks="' + CSS.escape(t) + '"]').forEach((c) => z(c, a)));
    const o = T.querySelector('.tfAction[data-k="' + CSS.escape(t) + '"] .tfName .activityRowMeta');
    if (o && (o.textContent = Math.round(a) + "%"), (wt == null ? void 0 : wt.id) === t) {
      const l = le.querySelector(".tfMoreState"), c = le.querySelector(".tfMoreSub");
      l && (l.textContent = Math.round(a) + "%", l.classList.add("live")), c && (c.textContent = "Currently " + Rn(t) + "%");
    }
    Ol(t).forEach((l) => l.update(Wa(t)));
  }
  const Sd = (t, a) => {
    const o = t.shiftKey ? 10 : 1, l = { ArrowUp: a + o, ArrowRight: a + o, ArrowDown: a - o, ArrowLeft: a - o, PageUp: a + 25, PageDown: a - 25, Home: 0, End: 100 }[t.key];
    return l == null ? null : Math.max(0, Math.min(100, Math.round(l)));
  };
  function Qs(t, a) {
    var at;
    const o = t.dataset.blocks;
    (at = t.setPointerCapture) == null || at.call(t, a.pointerId);
    const l = (lt) => {
      const F = t.getBoundingClientRect();
      return Math.max(0, Math.min(100, (lt.clientX - F.left) / F.width * 100));
    }, c = l(a), m = a.clientX;
    let u = !1, v = Te(o), y = c, H = 0;
    const I = () => {
      v = Math.abs(y - v) < 0.2 ? y : v + (y - v) * 0.14, ji(o, v), H = requestAnimationFrame(I);
    }, D = () => {
      u || (u = !0, t.classList.add("fine"), H = requestAnimationFrame(I));
    }, q = setTimeout(D, 350), X = (lt) => {
      y = l(lt), Math.abs(lt.clientX - m) > 6 && (clearTimeout(q), D());
    }, Ct = () => {
      clearTimeout(q), cancelAnimationFrame(H), t.removeEventListener("pointermove", X), t.removeEventListener("pointerup", Ct), t.removeEventListener("pointercancel", Ct), t.classList.remove("fine"), ji(o, u ? Math.round(v) : (Math.min(3, Math.floor(c / 25)) + 1) * 25), Ro("pos", o);
    };
    t.addEventListener("pointermove", X), t.addEventListener("pointerup", Ct), t.addEventListener("pointercancel", Ct);
  }
  function tl(t) {
    var c;
    const [a, o] = t.dataset.open.split("|"), l = t.closest(".tfCard");
    ot = { key: a, id: o, h: l ? Math.round(l.getBoundingClientRect().height) : 0 }, ze.delete(a), Ta(), (c = T.querySelector(".tfOpen [data-close]")) == null || c.focus({ preventScroll: !0 });
  }
  function Rr(t) {
    var a;
    St = t.dataset.area, T.querySelectorAll(".tfAreaPanel").forEach((o) => {
      var c;
      const l = o === t;
      o.classList.toggle("active", l), o.setAttribute("aria-expanded", String(l)), (c = o.querySelector(".panelExpanded")) == null || c.toggleAttribute("inert", !l);
    }), ze.set("areas", Zn(((a = T.querySelector('[data-k="areas"]')) == null ? void 0 : a.style.order) || 1));
  }
  const el = {
    bright: { value: (t, a) => Math.round(a * 100), text: (t, a) => a ? a + "%" : "Off", send: (t, a) => a > 0 ? ["light", "turn_on", { brightness_pct: a }] : ["light", "turn_off", {}] },
    ct: { value: (t, a) => {
      const [o, l] = ho(t);
      return Math.round(o + a * (l - o));
    }, text: (t, a) => a.toLocaleString() + "k", send: (t, a) => ["light", "turn_on", { color_temp_kelvin: a }] },
    hue: { value: (t, a) => Math.round(a * 360), text: () => "Colour", send: (t, a) => {
      var o;
      return ["light", "turn_on", { hs_color: [a, Math.max(60, ((o = Kt(t).hs_color) == null ? void 0 : o[1]) || 100)] }];
    } },
    pos: { value: (t, a) => Math.round(a * 100), text: (t, a) => Math.round(a) + "%", send: (t, a) => ["cover", "set_cover_position", { position: Math.round(a) }] },
    tilt: { value: (t, a) => Math.round(a * 100), text: (t, a) => "Tilt " + a + "%", send: (t, a) => ["cover", "set_cover_tilt_position", { tilt_position: a }] },
    vol: { value: (t, a) => Math.round(a * 100) / 100, text: (t, a) => Math.round(a * 100) + "%", send: (t, a) => ["media_player", "volume_set", { volume_level: a }] }
  };
  function vs(t, a, o, l) {
    var y;
    const c = el[a].value(o, l);
    M.set(a + "|" + o, c);
    const m = Math.round(l * 100) + "%", u = t.querySelector("i");
    if (a === "tilt") {
      u.style.width = "calc((100% - 8px) * " + l + ")";
      const [H, I] = t.querySelectorAll("span");
      H.classList.toggle("lit", l > 0.08), I.classList.toggle("lit", l > 0.92), ze.delete(o), Do = Do.map(() => ""), Ol(o).forEach((D) => D.update(Wa(o)));
    } else if (u) u.style.width = m;
    else {
      let H = t.querySelector("b");
      H || (H = document.createElement("b"), t.appendChild(H)), H.style.left = m;
    }
    t.setAttribute("aria-valuenow", String(Math.round(l * 100)));
    const v = (y = t.closest(".tfAction") || t.closest(".tfMore")) == null ? void 0 : y.querySelector(".tfName .activityRowMeta, .tfMoreState");
    v && (v.textContent = el[a].text(o, c));
  }
  function Ro(t, a) {
    const o = M.get(t + "|" + a), [l, c, m] = el[t].send(a, o), u = () => setTimeout(() => {
      M.delete(t + "|" + a), Ta();
    }, 1500);
    gs(l, c, a, m).then(u, u);
  }
  function sn(t) {
    t.addEventListener("click", (a) => {
      var l, c;
      const o = a.target.closest("[data-open],[data-close],[data-act],[data-acts],[data-more],[data-more-close],[data-more-back],[data-details],[data-details-close],[data-go],[data-summary],[data-star],[data-favs-edit],[data-area-back],[data-board-more],[data-board-act],[data-board-show],[data-fav-hide],[data-energy-pick],.tfAreaPanel");
      if (Oa && !a.target.closest(".tfBoardMenu,[data-board-more]") && on(), !(!o || !t.contains(o) || o.disabled))
        if (o.dataset.boardMore)
          (Oa == null ? void 0 : Oa.key) === o.dataset.boardMore ? on(!0) : gn(o.dataset.boardMore, o);
        else if (o.dataset.boardAct) Ri(Oa.key, o.dataset.boardAct);
        else if (o.dataset.boardShow) ao(o.dataset.boardShow);
        else if (o.dataset.favHide) Ko(o.dataset.favHide, !1);
        else if (o.dataset.energyPick) _s(o.dataset.energyPick);
        else if (o.dataset.act) En(o.dataset.act);
        else if (o.hasAttribute("data-details")) Zs(!(wt != null && wt.details));
        else if (o.hasAttribute("data-details-close")) Zs(!1);
        else if (o.dataset.summary) qo(o.dataset.summary, o);
        else if (o.dataset.star) Vr(o.dataset.star);
        else if (o.hasAttribute("data-more-back")) {
          const m = wt.id;
          wt = wt.back, Xs(), (l = le.querySelector('.tfMore [data-more="' + CSS.escape(m) + '"]')) == null || l.focus({ preventScroll: !0 });
        } else if (o.hasAttribute("data-favs-edit")) $s("favourites", o);
        else if (o.dataset.acts) JSON.parse(o.dataset.acts).forEach(([m, u, v, y]) => gs(m, u, v, y).catch(() => {
        }));
        else if (o.dataset.more) $s(o.dataset.more, o);
        else if (o.hasAttribute("data-more-close")) us();
        else if (o.dataset.go) ls("room:" + o.dataset.go);
        else if (o.hasAttribute("data-area-back")) _o();
        else if (o.dataset.open) tl(o);
        else if (o.hasAttribute("data-close")) {
          const m = ot;
          ot = null, ze.delete(m.key), Ta(), (c = T.querySelector('[data-open="' + CSS.escape(m.key + "|" + m.id) + '"]')) == null || c.focus({ preventScroll: !0 });
        } else o.classList.contains("tfAreaPanel") && !o.classList.contains("active") && Rr(o);
    }), t.addEventListener("keydown", (a) => {
      var l, c, m, u, v, y, H;
      const o = a.target;
      if ((l = o.dataset) != null && l.open && (a.key === "Enter" || a.key === " ") && (a.preventDefault(), tl(o)), (c = o.dataset) != null && c.energyPick && (a.key === "Enter" || a.key === " ") && (a.preventDefault(), _s(o.dataset.energyPick)), (m = o.classList) != null && m.contains("tfAreaPanel") && (a.key === "Enter" || a.key === " ") && (a.preventDefault(), Rr(o)), (u = o.dataset) != null && u.summary && (a.key === "Enter" || a.key === " ") && (a.preventDefault(), qo(o.dataset.summary, o)), a.key === "Escape" && Oa && t === T) {
        a.preventDefault(), on(!0);
        return;
      }
      if (a.key === "Escape" && Fa && t === T) {
        a.preventDefault(), ns(!1), (v = p("dashEditNav")) == null || v.focus();
        return;
      }
      if (a.key === "Escape" && U && t === T && (a.preventDefault(), _o()), (y = o.dataset) != null && y.blocks) {
        const I = o.dataset.blocks, D = Sd(a, Math.round(Te(I)));
        if (D == null) return;
        a.preventDefault(), ji(I, D), clearTimeout(ft.get(I)), ft.set(I, setTimeout(() => Ro("pos", I), 500));
        return;
      }
      if ((H = o.dataset) != null && H.drag && ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"].includes(a.key)) {
        a.preventDefault();
        const [I, D] = o.dataset.drag.split("|"), q = Number(o.getAttribute("aria-valuenow")) / 100, X = a.key === "Home" ? 0 : a.key === "End" ? 1 : Math.max(0, Math.min(1, q + (a.key === "ArrowLeft" || a.key === "ArrowDown" ? -0.05 : 0.05)));
        vs(o, I, D, X), Ro(I, D);
      }
    }), t.addEventListener("pointerdown", (a) => {
      var Fe;
      const o = a.target.closest("[data-blocks]");
      if (o && a.button === 0) {
        a.preventDefault(), Qs(o, a);
        return;
      }
      const l = a.target.closest("[data-drag]");
      if (!l || a.button > 0) return;
      const [c, m] = l.dataset.drag.split("|"), u = c === "bright" && !kn(m), v = a.pointerType !== "mouse";
      if (u && !v) {
        En(ye("light", "toggle", m));
        return;
      }
      const y = c === "bright" && ((Fe = k[m]) == null ? void 0 : Fe.state) !== "on", H = c === "tilt" ? 4 : 0, I = () => l.getBoundingClientRect().width - H * 2, D = (we) => {
        const Aa = l.getBoundingClientRect();
        return Math.max(0, Math.min(1, (we.clientX - Aa.left - H) / I()));
      };
      let q = v ? "waiting" : y ? "pressed" : "dragging", X = 0;
      const Ct = a.clientX, at = a.clientY, lt = (we, Aa) => Math.hypot(we.clientX - Ct, we.clientY - at) > Aa, F = () => {
        try {
          l.setPointerCapture(a.pointerId);
        } catch {
        }
      };
      v || (a.preventDefault(), F()), q === "dragging" && vs(l, c, m, D(a));
      const xt = () => {
        var we, Aa;
        q = "sliding", L = l, l.classList.add("held"), F(), (we = navigator.userActivation) != null && we.hasBeenActive && ((Aa = navigator.vibrate) == null || Aa.call(navigator, 8)), X = y ? (za[m] ?? 100) / 100 : Number(l.getAttribute("aria-valuenow")) / 100;
      }, G = (we) => {
        q === "waiting" && lt(we, _) ? !u && Math.abs(we.clientX - Ct) > Math.abs(we.clientY - at) ? xt() : q = "gone" : q === "pressed" && lt(we, 4) && (q = "dragging"), q === "sliding" ? vs(l, c, m, Math.max(0, Math.min(1, X + (we.clientX - Ct) / I()))) : q === "dragging" && vs(l, c, m, D(we));
      }, qt = (we) => {
        ["pointermove", "pointerup", "pointercancel"].forEach((Aa, Xt) => l.removeEventListener(Aa, Xt ? qt : G)), l.classList.remove("held"), L === l && (L = null), q === "sliding" || q === "dragging" ? Ro(c, m) : we.type === "pointerup" && u ? En(ye("light", "toggle", m)) : we.type === "pointerup" && y && (q === "waiting" || q === "pressed") && gs("light", "turn_on", m).catch(() => {
        });
      };
      l.addEventListener("pointermove", G), l.addEventListener("pointerup", qt), l.addEventListener("pointercancel", qt);
    }), t.addEventListener("touchmove", (a) => {
      L && a.cancelable && a.preventDefault();
    }, { passive: !1 });
  }
  return T && x && (fd(), sn(T), sn(le), le.addEventListener("click", (t) => {
    t.target === le && us();
  }), (zi = n.getElementById("homeNav")) == null || zi.addEventListener("click", () => {
    U && _o();
  }), (al = n.querySelector(".bottomNav")) == null || al.insertAdjacentHTML("beforeend", '<button class="navBtn" id="dashEditNav" type="button" title="Edit" aria-label="Edit the dashboard" aria-pressed="false" hidden>' + rp + "</button>"), (nl = p("dashEditNav")) == null || nl.addEventListener("click", () => ns(!Fa)), T.addEventListener("pointerdown", Oi), new ResizeObserver(() => {
    g.classList.contains("tfDash") && So() !== Bs ? Ta() : nn();
  }).observe(T), window.addEventListener("resize", nn, { passive: !0 }), le.addEventListener("keydown", (t) => {
    t.key === "Escape" && (t.stopPropagation(), wt != null && wt.details ? Zs(!1) : us());
  })), et(), {
    update(t) {
      if (!x) return;
      const a = !Object.keys(k).length;
      k = { ...Object.fromEntries(Object.entries(k).filter(([l]) => Ui(l))), ...t || {} };
      for (const l in k) l.startsWith("light.") && k[l].state === "on" && kn(l) && bo(l, co(k[l]));
      a ? aa() : Ta();
    },
    // the bento's animation runs while it's mounted, so it goes while the card is away
    suspend() {
      ui = !0, Jt == null || Jt.destroy(), Jt = null, ga == null || ga.forEach((t) => t.destroy()), ga = null;
    },
    resume() {
      ui = !1, !(!x || !(T != null && T.querySelector("[data-tf]"))) && (ee.isConnected && Ji(ee.style.order), Qi());
    }
  };
}
const Fh = "0.71.0", Vd = "move_assistant", Oh = "move_assistant", dp = "move_assistant_checkin_reminder";
function Wh() {
  if (document.getElementById("move-assistant-inter")) return;
  const n = document.createElement("link");
  n.id = "move-assistant-inter", n.rel = "stylesheet", n.href = "https://fonts.googleapis.com/css2?family=Geist:wght@200;300;400;500;600;700&family=Inter:ital,wght@0,400;0,500;0,600;0,700;0,800;1,500&display=swap", document.head.appendChild(n);
}
class qh extends HTMLElement {
  setConfig(d) {
    this._config = d || {};
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
  set hass(d) {
    var p;
    const i = !this._hass;
    if (this._hass = d, i) {
      this._init();
      return;
    }
    this._app && d.states !== this._lastStates && (this._lastStates = d.states, this._app.updateStates(d.states), (p = this._test) == null || p.update(d.states));
  }
  connectedCallback() {
    var d, i;
    (d = this._app) == null || d.resume(), (i = this._test) == null || i.resume();
  }
  disconnectedCallback() {
    var d, i;
    (d = this._app) == null || d.suspend(), (i = this._test) == null || i.suspend();
  }
  async _init() {
    Wh();
    const d = this.shadowRoot || this.attachShadow({ mode: "open" });
    d.innerHTML = `<style>${zp}${Vp}${Gp}</style>${Up}`;
    const i = d.getElementById("app");
    i.style.opacity = "0";
    let p = null;
    try {
      const g = await this._hass.callWS({
        type: "frontend/get_user_data",
        key: Vd
      });
      p = (g == null ? void 0 : g.value) ?? null;
    } catch {
    }
    this._lastSaved = JSON.stringify(p), this._app = uu(d, {
      data: p,
      save: (g) => this._save(g),
      fire: (g, w) => this._fire(g, w),
      ws: (g) => this._hass.callWS(g),
      subscribe: (g, w) => {
        var x, E;
        return (E = (x = this._hass) == null ? void 0 : x.connection) != null && E.subscribeMessage ? this._hass.connection.subscribeMessage(w, g) : Promise.reject(new Error("no connection"));
      },
      notifyServices: () => {
        var g, w;
        return Object.keys(((w = (g = this._hass) == null ? void 0 : g.services) == null ? void 0 : w.notify) || {}).sort();
      },
      setReminderAutomation: (g) => this._setReminderAutomation(g),
      setLight: (g) => this.classList.toggle("lightBody", g),
      fullscreenSupported: !!(this.requestFullscreen || this.webkitRequestFullscreen),
      toggleFullscreen: () => this._toggleFullscreen()
    }), this._lastStates = this._hass.states, this._app.updateStates(this._hass.states), this._test = Hh(d, { config: this._config, getHass: () => this._hass }), this._test.update(this._hass.states), this.isConnected || (this._app.suspend(), this._test.suspend()), i.style.transition = "opacity .2s ease", i.style.opacity = "", this._subscribe();
  }
  _subscribe() {
    var i;
    const d = (i = this._hass) == null ? void 0 : i.connection;
    d != null && d.subscribeMessage && d.subscribeMessage(
      (p) => {
        var w;
        const g = JSON.stringify((p == null ? void 0 : p.value) ?? null);
        g === this._lastSaved || g === this._pendingJson || (this._lastSaved = g, (w = this._app) == null || w.applyRemoteData(p.value));
      },
      { type: "frontend/subscribe_user_data", key: Vd }
    ).catch(() => {
    });
  }
  _save(d) {
    this._pendingJson = JSON.stringify(d), clearTimeout(this._saveTimer), this._saveTimer = setTimeout(async () => {
      const i = this._pendingJson;
      try {
        await this._hass.callWS({
          type: "frontend/set_user_data",
          key: Vd,
          value: JSON.parse(i)
        }), this._lastSaved = i;
      } catch {
        this._toast("Couldn't save to Home Assistant");
      }
    }, 400);
  }
  _fire(d, i = {}) {
    var p, g;
    ((p = this._config) == null ? void 0 : p.events) !== !1 && ((g = this._hass) == null || g.callWS({
      type: "fire_event",
      event_type: Oh,
      event_data: { action: d, ...i }
    }).catch(() => {
    }));
  }
  // Keeps one Home Assistant automation in sync with the check-in times.
  // Passing null removes it.
  async _setReminderAutomation(d) {
    const i = `config/automation/config/${dp}`;
    if (!d) {
      try {
        await this._hass.callApi("DELETE", i);
      } catch (w) {
        if ((w == null ? void 0 : w.status_code) !== 404 && (w == null ? void 0 : w.status) !== 404) throw w;
      }
      return;
    }
    const p = (w) => `${w}:00`, g = window.location.pathname;
    await this._hass.callApi("POST", i, {
      id: dp,
      alias: "Move Assistant check-in reminder",
      description: "Created by Move Assistant. Change it in Move Assistant → Settings → Check-in.",
      mode: "single",
      triggers: [
        { trigger: "time", at: p(d.times.morning), id: "morning" },
        { trigger: "time", at: p(d.times.evening), id: "evening" }
      ],
      conditions: [],
      actions: [
        {
          action: `notify.${d.target}`,
          data: {
            title: "Move Assistant",
            message: "{{ 'Morning' if trigger.id == 'morning' else 'Evening' }} check-in is ready",
            data: { url: g, clickAction: g }
          }
        }
      ]
    });
  }
  _toggleFullscreen() {
    const d = document;
    if (d.fullscreenElement || d.webkitFullscreenElement) {
      (d.exitFullscreen || d.webkitExitFullscreen).call(d);
      return;
    }
    const i = this.requestFullscreen || this.webkitRequestFullscreen;
    Promise.resolve(i.call(this)).catch(
      () => this._toast("Full screen isn't available here")
    );
  }
  _toast(d) {
    var p;
    const i = (p = this.shadowRoot) == null ? void 0 : p.getElementById("toast");
    i && (i.textContent = d, i.classList.add("show"), setTimeout(() => i.classList.remove("show"), 2600));
  }
}
customElements.get("move-assistant-card") || (customElements.define("move-assistant-card", qh), window.customCards = window.customCards || [], window.customCards.push({
  type: "move-assistant-card",
  name: "Move Assistant",
  description: "Guided movement timer with your Home Assistant activity data.",
  preview: !1
}), console.info(`%c MOVE ASSISTANT %c ${Fh} `, "background:#D0FF00;color:#090909;font-weight:700", ""));
