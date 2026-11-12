const ju = ':host{display:flex;flex-direction:column;min-height:calc(100dvh - var(--header-height,0px));position:relative;background:#050505;color-scheme:dark;--color-bg-ground:#090909;--color-bg-card:#222222;--color-bg-tile:#2b2b2b;--color-fill-bright:#f1f1f1;--color-text-primary:#d9d9d9;--color-text-muted:#969696;--color-text-on-bright:#090909;--color-line:rgba(255,255,255,.14);--color-border-focus:#03a9f4;--color-accent-primary:#03a9f4;--color-accent-secondary:#d0ff00;--color-text-accent:#d0ff00;--color-text-on-accent:#090909;--color-bg-resting:#1f7a4d;--color-bg-danger:#311313;--color-bg-danger-fill:#d53d3d;--color-border-danger:#8c2e2e;--color-text-danger:#ff7777;--color-text-on-danger:#ffffff;--color-state-hover:rgba(255,255,255,.08);--color-bg-chip:#090909;--color-fill-selected:#f1f1f1;--color-text-on-selected:#090909;--color-bg-segment-selected:#2b2b2b;--wx-clear:#03a9f4;--wx-cloudy:#d8d6d6;--wx-night:#1d2b4f;--wx-cloud-bright:#f1f1f1;--color-state-pressed:rgba(255,255,255,.14);--color-state-hover-on-bright:rgba(0,0,0,.06);--color-state-pressed-on-bright:rgba(0,0,0,.12);--scrim:rgba(0,0,0,.66);--lift:rgba(0,0,0,.5)}*{box-sizing:border-box}#app{color:var(--text);font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif;transition:background .25s ease,color .25s ease;-webkit-font-smoothing:antialiased}[hidden]{display:none!important}button,input{font:inherit}#app{flex:1;display:flex;flex-direction:column;width:100%;margin:0;padding:0;background:var(--bg);text-align:left}#app{--bg:var(--color-bg-ground);--page:var(--color-bg-ground);--card:var(--color-bg-card);--card2:var(--color-bg-card);--modal:var(--color-bg-card);--timer:var(--color-bg-ground);--tile:var(--color-bg-tile);--tile-2:var(--color-bg-tile);--row:var(--color-bg-tile);--row-rest:var(--color-bg-tile);--raised:var(--color-bg-tile);--chip:var(--color-bg-tile);--segment:var(--color-bg-tile);--seg-on:var(--color-bg-segment-selected);--scroll-thumb:var(--color-bg-tile);--control:var(--color-bg-ground);--control-2:var(--color-bg-ground);--sunken:var(--color-bg-ground);--input:var(--color-bg-ground);--track:var(--color-bg-ground);--icon-bg:var(--color-bg-chip);--seg-bg:var(--color-bg-ground);--switch-off:var(--color-bg-ground);--stage:var(--color-bg-ground);--text:var(--color-text-primary);--soft:var(--color-text-primary);--muted:var(--color-text-muted);--accent-text:var(--color-text-accent);--border-hover:var(--color-text-muted);--knob-off:var(--color-text-muted);--today-ring:var(--color-text-muted);--line:var(--color-line);--lineb:var(--color-line);--field-line:var(--color-line);--divider:var(--color-line);--bright:var(--color-fill-bright);--slider-fill:var(--color-fill-bright);--segment-fill:var(--color-fill-bright);--timer-fill:var(--color-fill-bright);--on-bright:var(--color-text-on-bright);--hover:var(--color-state-hover);--wash-2:var(--color-state-hover);--danger:var(--color-text-danger);--danger-bg:var(--color-bg-danger);--danger-line:var(--color-border-danger);--danger-fill:var(--color-bg-danger-fill);--on-danger-fill:var(--color-text-on-danger);--primary:var(--color-accent-primary);--secondary:var(--color-accent-secondary)}.shell{flex:1;display:flex;flex-direction:column;position:relative;width:100%;background:var(--page);border-radius:0;overflow:visible;transition:background .28s ease}#app.resting .shell{background:var(--color-bg-resting)}#app.paused .shell{background:var(--primary)}#app.light.paused .shell{background:color-mix(in srgb,var(--primary) 55%,var(--color-bg-card))}#app.light{--color-bg-ground:#eeebe8;--color-bg-card:#fbf9f6;--color-bg-tile:#f3efea;--color-fill-bright:#26221e;--color-text-primary:#26221e;--color-text-muted:#6a625a;--color-text-on-bright:#fbf9f6;--color-text-on-accent:#26221e;--color-line:rgba(38,34,30,.12);--color-text-accent:#26221e;--color-accent-secondary:#03a9f4;--color-bg-resting:#7dbb98;--color-bg-danger:#f5dede;--color-border-danger:#e3a0a0;--color-text-danger:#b42a2a;--color-state-hover:rgba(38,34,30,.06);--color-state-pressed:rgba(38,34,30,.12);--color-bg-chip:#fbf9f6;--color-fill-selected:#26221e;--color-text-on-selected:#fbf9f6;--color-bg-segment-selected:#fbf9f6;--color-accent-primary:#0288d1;--color-border-focus:#0288d1;--scrim:rgba(38,34,30,.32);--lift:rgba(38,34,30,.16)}:host(.lightBody){background:#eeebe8;color-scheme:light}.view{display:none;width:100%;max-width:1184px;margin:0 auto;padding:22px 22px 76.8px}.view.active{display:block;flex:1 0 auto}.card,.panel,.tile{position:relative;background:var(--card);border-radius:36px;padding:22px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.grid{display:grid;grid-template-columns:repeat(12,minmax(0,1fr));gap:16px}.eyebrow{text-transform:uppercase;color:var(--muted)}.sub{color:var(--muted);margin-top:6.4px}.pill,.primary,.navBtn,.tab,.back,.hideBtn,.addBtn{cursor:pointer}.pill{min-height:0;padding:3.2px 0;border:0;border-radius:0;background:transparent;color:var(--text);text-decoration-line:underline;text-decoration-thickness:.8px;text-underline-offset:3.2px}.tab,.back{border-radius:799.2px;min-height:41.6px;padding:0 16px;background:var(--control);border:.32px solid var(--line);color:var(--text)}.primary{border-radius:799.2px;min-height:41.6px;padding:0 16px;border:0;background:var(--bright);color:var(--on-bright)}.activityCard,.weekly{grid-column:span 6}.activityCard,.weekly{min-height:288px}.sourceTag{display:inline-flex;margin-top:11.2px;padding:4px;border-radius:799.2px;background:var(--chip);color:var(--soft)}.workoutFooter{display:flex;justify-content:space-between;align-items:end;gap:22.4px;flex-wrap:wrap;margin-top:22.4px;width:100%;box-sizing:border-box}.workoutGallery{grid-column:span 12;display:flex;gap:16px;height:288px;overflow:hidden}.workoutPanel{position:relative;height:288px;flex:1 1 72px;min-width:70.4px;background:var(--card);border-radius:28.8px;padding:22.4px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);overflow:hidden;box-sizing:border-box;transition:flex .32s ease;cursor:pointer}.workoutPanel.active{flex:7 1 0;min-width:0;cursor:default}.workoutPanel.addPanel{flex:0 0 73.6px;min-width:73.6px;display:flex;align-items:center;justify-content:center;padding:14.4px}.workoutPanel{--edge-proximity:0;--cursor-angle:45deg;--edge-sensitivity:36;--color-sensitivity:56;--cone-spread:25;--fill-opacity:.18;--glow-color-60:hsl(199deg 97% 68% / 60%);--glow-color-40:hsl(199deg 97% 68% / 40%);--glow-color-30:hsl(199deg 97% 68% / 30%);--glow-color-20:hsl(199deg 97% 68% / 20%);--glow-color-10:hsl(199deg 97% 68% / 10%);--gradient-one:radial-gradient(at 80% 55%,#c084fc 0px,transparent 50%);--gradient-two:radial-gradient(at 69% 34%,#f472b6 0px,transparent 50%);--gradient-three:radial-gradient(at 8% 6%,#38bdf8 0px,transparent 50%);--gradient-four:radial-gradient(at 41% 38%,#c084fc 0px,transparent 50%);--gradient-five:radial-gradient(at 86% 85%,#f472b6 0px,transparent 50%);--gradient-six:radial-gradient(at 82% 18%,#38bdf8 0px,transparent 50%);--gradient-seven:radial-gradient(at 51% 4%,#f472b6 0px,transparent 50%);isolation:isolate}.workoutPanel:before,.workoutPanel:after,.workoutPanel>.edgeLight{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;pointer-events:none;transition:opacity .18s ease-out}.workoutPanel:before{z-index:2;border:.8px solid transparent;background:linear-gradient(var(--card) 0 100%) padding-box,linear-gradient(#fff0 0,#fff0) border-box,var(--gradient-one) border-box,var(--gradient-two) border-box,var(--gradient-three) border-box,var(--gradient-four) border-box,var(--gradient-five) border-box,var(--gradient-six) border-box,var(--gradient-seven) border-box;opacity:clamp(0,calc(.72 * (var(--edge-proximity) - var(--color-sensitivity)) / (100 - var(--color-sensitivity))),.72);-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,black calc(var(--cone-spread) * 1%),transparent calc((var(--cone-spread) + 15) * 1%),transparent calc((100 - var(--cone-spread) - 15) * 1%),black calc((100 - var(--cone-spread)) * 1%));mask-image:conic-gradient(from var(--cursor-angle) at center,black calc(var(--cone-spread) * 1%),transparent calc((var(--cone-spread) + 15) * 1%),transparent calc((100 - var(--cone-spread) - 15) * 1%),black calc((100 - var(--cone-spread)) * 1%))}.workoutPanel:after{z-index:1;border:.8px solid transparent;background:var(--gradient-one) padding-box,var(--gradient-two) padding-box,var(--gradient-three) padding-box,var(--gradient-four) padding-box,var(--gradient-five) padding-box,var(--gradient-six) padding-box,var(--gradient-seven) padding-box;opacity:clamp(0,calc(var(--fill-opacity) * (var(--edge-proximity) - var(--color-sensitivity)) / (100 - var(--color-sensitivity))),.18);mix-blend-mode:soft-light;-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,transparent 5%,black 15%,black 85%,transparent 95%);mask-image:conic-gradient(from var(--cursor-angle) at center,transparent 5%,black 15%,black 85%,transparent 95%)}.workoutPanel>.edgeLight{top:-19.2px;right:-19.2px;bottom:-19.2px;left:-19.2px;z-index:3;opacity:clamp(0,calc(.62 * (var(--edge-proximity) - var(--edge-sensitivity)) / (100 - var(--edge-sensitivity))),.62);mix-blend-mode:plus-lighter;-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,black 2.5%,transparent 10%,transparent 90%,black 97.5%);mask-image:conic-gradient(from var(--cursor-angle) at center,black 2.5%,transparent 10%,transparent 90%,black 97.5%)}.workoutPanel>.edgeLight:before{content:"";position:absolute;top:19.2px;right:19.2px;bottom:19.2px;left:19.2px;border-radius:inherit;box-shadow:inset 0 0 0 .8px var(--glow-color-60),inset 0 0 2.4px 0 var(--glow-color-40),inset 0 0 6.4px 0 var(--glow-color-30),inset 0 0 12.8px 0 var(--glow-color-20),0 0 2.4px 0 var(--glow-color-40),0 0 6.4px 0 var(--glow-color-30),0 0 12.8px 0 var(--glow-color-20),0 0 22.4px 1.6px var(--glow-color-10)}.workoutPanel:not(.borderGlowActive):before,.workoutPanel:not(.borderGlowActive):after,.workoutPanel:not(.borderGlowActive)>.edgeLight{opacity:0;transition:opacity .35s ease-out}#app.light .workoutPanel{--glow-color-40:hsl(199deg 97% 48% / 40%);--glow-color-30:hsl(199deg 97% 48% / 30%);--glow-color-20:hsl(199deg 97% 48% / 20%);--glow-color-10:hsl(199deg 97% 48% / 10%)}.workoutPanel:not(.active):not(.addPanel) .panelExpanded{opacity:0;filter:blur(8px);pointer-events:none}.workoutPanel:not(.active):not(.addPanel) .panelCollapsed{opacity:1;filter:blur(0)}.workoutPanel.active .panelExpanded{opacity:1;filter:blur(0);pointer-events:auto}.workoutPanel.active .panelCollapsed{opacity:0;filter:blur(6.4px);pointer-events:none}.panelExpanded{position:relative;z-index:4;width:100%;height:100%;min-width:0;box-sizing:border-box;display:flex;flex-direction:column;justify-content:space-between;transition:opacity .22s ease,filter .22s ease}.panelCollapsed{position:absolute;top:0;right:0;bottom:0;left:0;z-index:4;display:flex;align-items:center;justify-content:center;opacity:0;filter:blur(6.4px);transition:opacity .22s ease,filter .22s ease}.panelCollapsedText{writing-mode:vertical-rl;transform:rotate(180deg);white-space:nowrap}.workoutPanelTop{display:flex;justify-content:space-between;align-items:flex-start;gap:22.4px;width:100%;min-width:0;box-sizing:border-box}.workoutPanelActions{display:flex;gap:22.4px;flex-wrap:wrap;align-items:center;justify-content:flex-end;margin-left:auto}.startWorkoutBtn{background:var(--primary)!important;color:var(--color-text-on-accent)!important}.startWorkoutBtn:hover{filter:brightness(1.04)}.addPanelPlus{position:relative;z-index:4;font-size:27.2px;line-height:1}.addPanelLabel{position:absolute;z-index:4;bottom:16px;writing-mode:vertical-rl;transform:rotate(180deg);color:var(--muted)}@media (max-height:820px) and (min-width:621px){.modalStatic{padding:17.6px 22.4px}.timeTile{min-height:124.8px}}@media (max-width:900px){.weekCopy{white-space:normal}.workoutGallery{overflow-x:auto;scroll-snap-type:x mandatory;padding-bottom:3.2px}.workoutPanel,.workoutPanel.active{height:288px;flex:0 0 min(68.8vw,544px);min-width:min(68.8vw,544px);scroll-snap-align:start}.workoutPanel.addPanel{flex-basis:80px;min-width:80px}.panelCollapsed{display:none}}.moveActions{display:flex;gap:22.4px;flex-wrap:wrap}@keyframes feelingWarp{0%{transform:scale(1.03) skew(-2deg) translate(-1.5%);filter:saturate(1.02) blur(.8px)}50%{transform:scale(1.12) skew(1deg) translate(1%);filter:saturate(1.22) blur(1.5px)}to{transform:scale(1.06) skew(3deg) translate(-.5%);filter:saturate(1.1) blur(.6px)}}@keyframes feelingScan{0%{background-position:0 0,-80% 0}to{background-position:0 8px,180% 0}}.tempoExperiment{margin-top:14.4px;padding-top:16px;border-top:.32px solid var(--line)}.tempoEstimate{white-space:nowrap}.tempoQuad{position:relative;width:min(288px,100%);aspect-ratio:1/1;border-radius:28.8px;background:#ffffff06;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);overflow:hidden;touch-action:none;cursor:crosshair}.tempoCross{position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none;background:linear-gradient(to right,transparent calc(50% - .4px),rgba(255,255,255,.12) 50%,transparent calc(50% + .4px)),linear-gradient(to bottom,transparent calc(50% - .4px),rgba(255,255,255,.12) 50%,transparent calc(50% + .4px))}.tempoDot{position:absolute;left:50%;top:50%;width:17.6px;height:17.6px;border-radius:50%;background:var(--text);transform:translate(-50%,-50%);pointer-events:none;box-shadow:0 0 0 4.8px #ffffff12}.tempoPole{position:absolute;pointer-events:none;color:var(--muted)}.tempoFast{top:9.6px;left:50%;transform:translate(-50%)}.tempoSlow{bottom:9.6px;left:50%;transform:translate(-50%)}.tempoHard{right:9.6px;top:50%;transform:translateY(-50%)}.tempoLow{left:9.6px;top:50%;transform:translateY(-50%)}.tempoReadout{margin-top:9.6px;color:var(--muted)}.tempoRevealRow{margin-top:11.2px}.tempoRevealBtn{color:var(--muted);text-decoration-color:var(--muted)}.editTempoExperiment{margin-top:11.2px}.editTempoExperiment[hidden]{display:none}.testingZone{position:relative;overflow:hidden;border-radius:22.4px;background:#202226;border:.8px solid #4a4f58;box-shadow:none;--text:#d6d9df;--soft:#c7ccd5;--muted:#9ea5b0;--line:#4a4f58;--lineb:#4a4f58;--field-line:#4a4f58;color:var(--text)}.testingZoneInner{position:relative;padding:19.2px;background:linear-gradient(rgba(176,186,199,.045) .8px,transparent .8px),linear-gradient(90deg,rgba(176,186,199,.045) .8px,transparent .8px),#202226;background-size:16px 16px}.testingZoneTitleBlock{max-width:608px;margin-bottom:19.2px}.testingZoneTitleRow{display:flex;justify-content:space-between;align-items:center;gap:16px}.testingZoneTitleRow strong{color:#d6d9df}.testingZone .tempoEstimate{color:#aeb4bf}.testingZoneExplanation{margin:8px 0 0;color:#9ea5b0;text-align:left}.testingZoneLayout{display:grid;grid-template-columns:minmax(224px,288px) minmax(0,1fr);grid-template-areas:"controller feedback";gap:25.6px;align-items:start}.testingFeedbackForm{grid-area:feedback;display:grid;gap:14.4px;min-width:0;padding:16px;border:.32px solid var(--line);border-radius:16px;background:#252525}.testingFeedbackHeading{color:#d6d9df}.testingFeedbackField{display:grid;gap:6.4px;color:#9ea5b0}.testingFeedbackField select,.testingFeedbackField textarea{width:100%;border:.32px solid var(--line);background:#171717;color:#d6d9df;border-radius:11.2px;padding:8px 9.6px;font:inherit}.testingFeedbackField textarea{resize:vertical;min-height:65.6px}.testingRating{display:grid;grid-template-columns:repeat(5,1fr);gap:4.8px}.testingRating button{min-height:30.4px;border-radius:9.6px;border:.32px solid var(--line);background:#171717;color:#c7ccd5;cursor:pointer}.testingRating button.selected{border-color:#c7ccd5;background:#343434}.testingFeedbackSubmit{justify-self:start;min-height:33.6px;padding:0 12.8px;border-radius:11.2px;border:0;background:#ffffffe0;color:#111;cursor:pointer}.testingZoneControllerWrap{grid-area:controller;display:flex;flex-direction:column;align-items:center;justify-content:flex-start}.tempoQuadFrame{width:min(256px,100%);aspect-ratio:1/1;padding:0;background:linear-gradient(rgba(176,186,199,.075) .8px,transparent .8px),linear-gradient(90deg,rgba(176,186,199,.075) .8px,transparent .8px),#202226;background-size:16px 16px,16px 16px,auto;border-radius:16px}.testingZone .tempoQuad{width:100%;height:100%;border-radius:16px;background:#202226;border:.8px solid #5a606a;box-shadow:none}.testingZone .tempoCross{background:linear-gradient(to right,transparent calc(50% - .4px),rgba(176,186,199,.2) 50%,transparent calc(50% + .4px)),linear-gradient(to bottom,transparent calc(50% - .4px),rgba(176,186,199,.2) 50%,transparent calc(50% + .4px))}.testingZone .tempoDot{width:14.4px;height:14.4px;background:transparent;border:.8px solid #c4cad4;box-shadow:0 0 0 3.2px #c4cad40d}.testingZone .tempoPole{color:#8e96a2}.testingZone .tempoReadout{width:min(256px,100%);color:#9ea5b0;text-align:center;margin-top:9.6px}.testingZone button,.testingZone input,.testingZone select,.testingZone textarea{transition:opacity .14s ease,border-color .14s ease,color .14s ease,background .14s ease}.testingZone button:hover,.testingZone button:focus-visible{filter:none;opacity:.88}@media (max-width:900px){.testingZoneLayout{grid-template-columns:1fr;grid-template-areas:"controller" "feedback"}}.activityHeader{display:flex;align-items:center;gap:var(--inset);margin-bottom:var(--inset)}.activityIcon{display:grid;place-items:center}.icon{width:var(--glyph-size);height:var(--glyph-size);flex:none;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}.icon *{vector-effect:non-scaling-stroke}.addPanelPlus .icon,.addFab .icon{width:24px;height:24px}.checkinTabIcon .icon{width:18px;height:18px}.weekTick .icon{width:1em;height:1em}.activityRows{display:grid;gap:9.6px}.activityRow{display:grid;grid-template-columns:43.2px minmax(0,1fr);align-items:center;gap:11.2px;background:var(--tile-2);border-radius:24px;padding:12px 14px}.activityRowIcon{width:43.2px;height:43.2px;border-radius:16px;background:var(--icon-bg);display:grid;place-items:center;font-size:16px}.activityRowMeta{color:var(--soft);margin-top:2.4px}.toast{position:absolute;right:20.8px;top:20.8px;z-index:60;background:var(--bright);color:var(--on-bright);border-radius:799.2px;padding:8.8px 12.8px;opacity:0;transform:translateY(-6.4px);pointer-events:none;transition:opacity .18s ease,transform .18s ease}.toast.show{opacity:1;transform:none}.weekCopy{color:var(--muted);margin-top:9.6px;max-width:none;white-space:nowrap}.weekChip{background:var(--tile-2);border-radius:12.8px;min-height:60.8px;padding:9.6px 11.2px;display:flex;flex-direction:column;justify-content:space-between;gap:6.4px}.weekChipTop{display:flex;justify-content:space-between;align-items:center;gap:6.4px}.weekTick{font-size:11.2px;font-weight:800;line-height:1}.weekChip.total{background:var(--card2)}.workoutSurface{position:relative;overflow:hidden;isolation:isolate}.workoutContent{position:relative;z-index:2}.pixelTrailCanvas{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;z-index:1;pointer-events:none}#app.light .pixelTrailCanvas{opacity:.46}.sessionHead{display:flex;justify-content:space-between;align-items:flex-start;gap:16px}.sessionActions{display:flex;gap:22.4px;align-items:center;flex-wrap:wrap;justify-content:flex-end}.holdEnd{position:relative;overflow:hidden;min-width:110.4px;min-height:41.6px;padding:0 16px;border-radius:799.2px;border:.32px solid var(--line);background:var(--control);text-decoration:none;user-select:none;-webkit-user-select:none;touch-action:none}.holdEndFill{position:absolute;inset:0 auto 0 0;width:0;background:var(--bright);pointer-events:none}.holdEndLabel{position:relative;z-index:1;mix-blend-mode:difference;color:#fff}.holdEnd.holding{border-color:var(--muted)}.exerciseTitle{margin-top:4.8px;color:var(--accent-text)}.meta{color:var(--muted);margin-top:4.8px}.progress{height:46.4px;padding:0;background:transparent;border-radius:17.6px;display:flex;gap:3.2px;margin-top:19.2px;overflow:hidden}.progressSegment{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:0;padding:0;display:block;flex:1;min-width:0;background:var(--segment);border-radius:17.6px;position:relative;overflow:hidden;cursor:default}.progressSegment:after{content:"";position:absolute;inset:0 auto 0 0;width:0;background:var(--segment-fill);transition:width .2s linear}.progressSegment.done{background:transparent;opacity:0;pointer-events:none}.progressSegment.done:after{display:none}.progressSegment.active:after{width:var(--segment-progress,0%)}#app.resting .progressSegment:not(.done):not(.active),#app.paused .progressSegment:not(.done):not(.active){background:#fff}.progressSegment.rewindable{cursor:pointer}.progressSegment.rewindable:hover{filter:brightness(1.08)}.progressSegment:focus-visible{outline:1.6px solid var(--primary);outline-offset:-2.4px}.workGrid{display:grid;grid-template-columns:minmax(0,2fr) minmax(240px,1fr);gap:16px;margin-top:16px}.timerCard,.movementCard,.nextCard{position:relative;border-radius:28.8px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.timerCard{min-height:344px;background:var(--timer);overflow:hidden}.fill{position:absolute;inset:0 auto 0 0;width:100%;background:var(--timer-fill);transition:width .2s linear}.digits{position:absolute;top:0;right:0;bottom:0;left:0;display:flex;align-items:center;justify-content:center;font-size:clamp(152px,22.4vw,312px);font-weight:850;letter-spacing:-.11em;color:#fff;mix-blend-mode:difference;font-variant-numeric:tabular-nums}.movementCard{background:var(--stage);min-height:344px;display:grid;place-items:center;padding:22.4px}.movementCard{overflow:hidden}.movementRippleCanvas{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;z-index:0}.nextCard{background:var(--card);padding:22.4px;display:flex;justify-content:space-between;align-items:center;gap:16px;min-height:116.8px}.nextIcon{width:52.8px;height:52.8px;border-radius:19.2px;background:var(--icon-bg);display:grid;place-items:center;font-size:20.8px;flex:0 0 auto}.sectionLabel{margin:0 0 8px 22.4px}.moveSection{grid-column:span 12}.moveSection .workoutGallery{width:100%}.nextWrap{margin-top:16px}.nextLabel{margin:0 0 8px 22.4px}.nextCard{background:var(--card);padding:22.4px;display:flex;justify-content:space-between;align-items:center;gap:22.4px;min-height:86.4px;border-radius:28.8px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.nextMain{display:flex;align-items:center;gap:14.4px;min-width:0}.nextIcon{width:43.2px;height:43.2px;border-radius:12.8px;background:var(--icon-bg);display:grid;place-items:center;font-size:16px;flex:0 0 auto}.sessionControlRow{display:flex;justify-content:flex-end;gap:22.4px;align-items:center;margin-top:16px}.skipBtn{min-width:120px;min-height:41.6px;padding:0 14.4px;border:.8px solid var(--line);background:transparent;color:var(--text);text-decoration:none}.pause{min-width:120px;min-height:41.6px;padding:0 16px}.upcomingList{display:grid;gap:9.6px;margin-top:9.6px}.upcomingCard{--future-opacity:1;display:flex;align-items:center;justify-content:space-between;gap:22.4px;min-height:86.4px;padding:22.4px;border-radius:28.8px;background:var(--card);border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);opacity:var(--future-opacity);transition:opacity .22s ease}.upcomingCard:nth-child(-n+3){--future-opacity:1}.upcomingCard:nth-child(4){--future-opacity:.72}.upcomingCard:nth-child(5){--future-opacity:.48}.upcomingCard:nth-child(6){--future-opacity:.3}.upcomingCard:nth-child(n+7){--future-opacity:.16}.upcomingCard.sessionHidden{--future-opacity:.24!important;filter:saturate(.15)}.upcomingCard.sessionHidden .upcomingName{text-decoration:line-through}.upcomingCard.sessionHidden .upcomingIcon{opacity:.45}.upcomingCard.sessionHidden .upcomingMeta{opacity:.55}.upcomingInfo{display:flex;align-items:center;gap:14.4px;min-width:0}.upcomingIcon{width:43.2px;height:43.2px;flex:0 0 auto;border-radius:12.8px;background:var(--icon-bg);display:grid;place-items:center;font-size:16px}.upcomingMeta{color:var(--muted);margin-top:4px}.skipSessionBtn{flex:0 0 auto;min-height:41.6px;padding:0 14.4px;border:.8px solid var(--line);background:transparent;color:var(--text)}@media (max-width:900px){.weekCopy{white-space:normal}.nextCard{align-items:flex-start;flex-direction:column}.sessionControlRow{width:100%}.skipBtn,.pause{flex:1;min-width:0}.upcomingCard{align-items:flex-start;flex-direction:column}.skipSessionBtn{width:100%}}.countdown{display:none;position:fixed;top:0;right:0;bottom:0;left:0;width:100vw;height:100dvh;background:var(--page);z-index:300;align-items:center;justify-content:center;flex-direction:column;text-align:center;overflow:hidden}.countdown.active{display:flex}.pixelCanvas{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;display:block;z-index:1}.countdown:before{content:"";position:absolute;top:0;right:0;bottom:0;left:0;background:radial-gradient(circle at center,color-mix(in srgb,var(--primary) 16%,transparent),transparent 58%);pointer-events:none}.countNum{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);z-index:3}.countNum{font-size:clamp(144px,25.6vw,344px);font-weight:850;line-height:.75;letter-spacing:-.1em}.modalBackdrop{display:none;position:fixed;top:0;right:0;bottom:0;left:0;width:100vw;height:100dvh;z-index:145;background:var(--scrim);padding:28px;box-sizing:border-box;align-items:center;justify-content:center}.modalBackdrop.open{display:flex}.modal{width:min(1184px,100%);height:100%;max-width:1184px;max-height:none;overflow:hidden;background:var(--modal);border-radius:28.8px;padding:0;display:flex;flex-direction:column;box-sizing:border-box;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.modalStatic{flex:0 0 auto;padding:22.4px;background:var(--modal);border-bottom:.32px solid var(--divider)}.modalHead{display:flex;justify-content:space-between;align-items:flex-start;gap:16px;margin-bottom:12.8px}.modalHeaderActions{display:flex;gap:22.4px;align-items:center;flex:0 0 auto}.modalHead h2{margin:2.4px 0 0}.editNameRow{display:grid;gap:6.4px;margin-bottom:11.2px}.editNameLabel{color:var(--muted)}.editNameInput{min-height:42px;border-radius:var(--r-inner);border:.32px solid var(--field-line);background:var(--input);color:var(--text);padding:0 16px}.timeTiles{display:grid;grid-auto-flow:column;grid-auto-columns:minmax(0,1fr);gap:11.2px;margin-bottom:11.2px}.timeTile{background:var(--tile);min-height:148.8px;padding:16px;display:flex;flex-direction:column;justify-content:space-between}.timeHeader{display:flex;align-items:center;gap:14.4px}.timeIcon{width:46.4px;height:46.4px;border-radius:16px;background:var(--icon-bg);display:grid;place-items:center;flex:0 0 auto;font-size:17.6px;font-weight:760}.timeCopy{min-width:0}.rangeTrack{height:46.4px;border-radius:17.6px;background:var(--track);overflow:hidden;position:relative;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.rangeFill{position:absolute;inset:0 auto 0 0;background:var(--slider-fill);border-radius:17.6px 0 0 17.6px}.rangeInput{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;opacity:0;cursor:pointer}.exerciseScroller{min-height:0;overflow-y:auto;padding:3.2px 16px 17.6px 22.4px;border-top:.16px solid var(--divider);scrollbar-gutter:stable}.exerciseScroller::-webkit-scrollbar{width:6.4px}.exerciseScroller::-webkit-scrollbar-track{background:transparent}.exerciseScroller::-webkit-scrollbar-thumb{background:var(--scroll-thumb);border-radius:799.2px}.sectionTitle{text-transform:uppercase;color:var(--muted);margin:14.4px 0 8px}.moveList{display:grid;gap:8px}.moveRow{display:flex;justify-content:space-between;align-items:center;gap:22.4px;background:var(--row);border-radius:20.8px;padding:22.4px}.moveRow.hidden{opacity:.46}.moveRow.hidden .moveItemName{text-decoration:line-through}.moveMeta{color:var(--muted);margin-top:4px}.hideBtn{border-radius:799.2px;min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text)}.removeBtn{position:relative;overflow:hidden;border-radius:799.2px;min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);cursor:pointer}.removeFill{position:absolute;inset:0 auto 0 0;width:0;background:var(--danger-fill);pointer-events:none;transition:width 0s linear}.addInput{min-height:41.6px;border-radius:799.2px;border:.32px solid var(--field-line);background:var(--input);color:var(--text);padding:0 14.4px}.addBtn{border-radius:799.2px;min-height:42px;padding:0 16px;border:0;background:var(--bright);color:var(--on-bright)}.routineSummary{margin-top:14.4px;background:var(--sunken);border-radius:20.8px;padding:12.8px 14.4px;color:var(--soft)}.settingsHeader{display:flex;align-items:center;gap:12.8px;margin-bottom:24px}.back{width:46.4px;padding:0;font-size:24px}.tabs.rubberTabs{position:relative;display:inline-flex;gap:0;padding:3.2px;margin-bottom:17.6px;border-radius:12.8px;background:var(--control);border:.32px solid var(--line);overflow:hidden}.rubberIndicator{position:absolute;top:3.2px;left:3.2px;height:calc(100% - 6.4px);width:0;border-radius:12.8px;background:var(--bright);transition:left .34s cubic-bezier(.2,1.35,.4,1),width .34s cubic-bezier(.2,1.35,.4,1),transform .18s ease;transform-origin:center;z-index:0}.tabs.rubberTabs .tab{position:relative;z-index:1;min-height:41.6px;padding:0 16px;border:0;background:transparent;color:var(--text)}.tabs.rubberTabs .tab.active{color:var(--on-bright)}.settingsPane{display:none}.settingsPane.active{display:block}.integrationList,.toggleList{display:grid;gap:9.6px}.integration,.toggleRow{display:flex;justify-content:space-between;align-items:center;gap:14.4px;background:var(--raised);border-radius:22.4px;padding:14.4px 16px}.status{color:var(--muted);margin-top:3.2px}.note{color:var(--muted);line-height:1.5;max-width:688px}.switch{position:relative;width:50px;height:28px;padding:0;border-radius:var(--r-inner);background:var(--line);border:.4px solid var(--line);opacity:1;flex:0 0 auto;cursor:pointer;transition:background .18s ease,opacity .18s ease}.switch:after{content:"";position:absolute;width:24px;height:24px;top:50%;left:1.6px;border-radius:12px 4px 4px 12px;background:var(--text);transform:translateY(-50%);transition:left .18s ease,border-radius .18s ease,background .18s ease}.switch.on{background:var(--color-accent-primary);opacity:1}.switch.on:after{left:calc(100% - 25.6px);border-radius:4px 12px 12px 4px;background:var(--color-text-on-accent)}.themeChoice{display:flex;gap:9.6px;flex-wrap:wrap;align-items:center;margin:0}.themeBtn{min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);cursor:pointer}.themeBtn.active{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.wxLayoutBtn{min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);cursor:pointer}.wxLayoutBtn[aria-pressed=true]{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.settingsSelect{min-width:96px;min-height:32px;padding:0 27.2px 0 12px;border-radius:var(--r-inner);border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);font:inherit}.motionControlRow{align-items:center}.motionRangeWrap{display:flex;align-items:center;justify-content:flex-end;gap:9.6px;min-width:184px}.motionRangeWrap input{width:128px}.motionRangeWrap span{color:var(--muted);min-width:51.2px;text-align:right}.dangerText{color:var(--danger)}.confirmBackdrop{display:none;position:fixed;top:0;right:0;bottom:0;left:0;z-index:80;padding:22.4px;background:var(--scrim);align-items:center;justify-content:center}.confirmBackdrop.open{display:flex}.confirmCard{width:min(448px,100%);background:var(--card);border-radius:28.8px;padding:22.4px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.confirmActions{display:flex;justify-content:flex-end;align-items:center;gap:22.4px;margin-top:22.4px}.holdDelete{position:relative;overflow:hidden;min-width:88px;min-height:41.6px;padding:0 17.6px;border:.8px solid var(--danger-line);border-radius:12.8px;background:var(--danger-bg);color:var(--text);cursor:pointer}.holdDeleteFill{position:absolute;inset:0 auto 0 0;width:0;background:var(--danger-fill);pointer-events:none}.holdDeleteLabel{position:relative;z-index:1;color:var(--text)}.holdDelete.holding .holdDeleteLabel,.removeBtn.holding .removeLabel{color:#fff}.bottomNav{position:sticky;bottom:22.4px;display:flex;gap:22.4px;z-index:100;width:max-content;margin:-65.6px 0 0 22.4px}.navBtn{width:43.2px;height:43.2px;padding:0;border-radius:16px;background:var(--control);border:.32px solid var(--line);color:var(--text)}.navBtn.active{background:var(--color-fill-selected);color:var(--color-text-on-selected)}@media (max-width:900px){.weekCopy{white-space:normal}.grid{grid-template-columns:1fr}.moveSection,.activityCard,.weekly{grid-column:auto}.workGrid{grid-template-columns:1fr}.timerCard,.movementCard{min-height:256px}.timeTiles{grid-auto-flow:row;grid-template-columns:1fr}}@media (max-width:620px){.modal{width:100%;height:100%;max-height:100%}#app{padding:0}.shell{border-radius:0}.view{padding:14.4px 14.4px 75.2px}.timerCard{min-height:224px}.digits{font-size:144px}.modalBackdrop{padding:9.6px}.modal{height:100%}.modalStatic{padding:14.4px}.exerciseScroller{padding:3.2px 9.6px 14.4px 14.4px}}:is(button,.primary,.tab,.back,.navBtn,.themeBtn,.energyBtn,.hideBtn,.addBtn,.removeBtn,.skipBtn,.holdEnd,.editNameInput,.addInput,.rangeTrack,.progress,.progressSegment):not(.segBtn,.stepBtn,.checkinTab,.switch,.dragHandle,.navBtn,.createPresetBtn,.sheetChoice,.setupSummary,.wxStyleBtn,.tfSeg>button,.tfMoreSwitch>button){border-radius:var(--r-inner)!important}.card,.panel,.tile,.timerCard,.movementCard,.nextCard,.modal{border-radius:var(--r-card)}.movementCreatorLaunch{display:flex;gap:9.6px;align-items:center;margin:3.2px 0 14.4px}.movementCreatorOpen,.restAddBtn{min-height:35.2px;padding:0 12.8px;border-radius:12.8px;cursor:pointer}.movementCreatorOpen{border:0;background:var(--bright);color:var(--on-bright)}.restAddBtn{border:.32px solid var(--field-line);background:var(--control-2);color:var(--text)}.movementCreator{position:relative;margin:0 0 14.4px;padding:19.2px 22.4px;border-radius:22.4px;background:var(--card);border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.movementCreator[hidden]{display:none}.movementCreatorHead{display:flex;align-items:center;justify-content:space-between;gap:16px;margin-bottom:17.6px}.movementCreatorHead h3{margin:0}.movementCreatorClose{position:static}.movementCreatorFields{display:grid;grid-template-columns:minmax(0,1.45fr) minmax(0,.85fr);gap:16px 19.2px}.movementCreatorFields[hidden]{display:none!important}.movementCreatorFields>label{display:grid;gap:6.4px;min-width:0;color:var(--text)}.movementTimingRow{grid-column:1/-1;display:grid;grid-template-columns:minmax(240px,352px) minmax(208px,1fr) auto;gap:17.6px;align-items:end}.durationStack{display:grid;gap:6.4px;color:var(--text)}.creatorDurationRow{display:grid;grid-template-columns:minmax(96px,1fr) minmax(104px,1fr);gap:12.8px;align-items:center}.creatorNumber{width:100%;min-width:0}.creatorUnitSelect{min-height:41.6px;width:100%;padding:0 11.2px;border-radius:12.8px;border:.32px solid var(--field-line);background:var(--input);color:var(--text);font:inherit}.globalTimingToggle{display:flex!important;align-items:center;gap:8px!important;min-height:41.6px;cursor:pointer;color:var(--text)!important;white-space:nowrap}.globalTimingToggle input{position:absolute;opacity:0;pointer-events:none}.toggleTrack{position:relative;width:38.4px;height:22.4px;border-radius:799.2px;background:var(--switch-off);border:.32px solid var(--field-line);flex:0 0 auto;transition:background .16s ease}.toggleThumb{position:absolute;width:17.6px;height:17.6px;top:1.6px;left:1.6px;border-radius:50%;background:var(--knob-off);transition:left .16s ease,background .16s ease}.globalTimingToggle input:checked+.toggleTrack{background:var(--bright)}.globalTimingToggle input:checked+.toggleTrack .toggleThumb{left:17.6px;background:var(--on-bright)}.toggleLabel{color:var(--soft)}.creatorAddButton{min-width:97.6px;min-height:41.6px;align-self:end}@media (max-width:900px){.movementCreatorFields{grid-template-columns:1fr}.movementTimingRow{grid-column:auto;grid-template-columns:1fr;align-items:stretch}.globalTimingToggle{min-height:35.2px}.creatorAddButton{width:100%}}.moveRow.restItem{background:var(--row-rest)}.moveKindBadge{display:inline-flex;margin-left:6.4px;padding:2.4px 5.6px;border:.8px solid var(--field-line);border-radius:799.2px;color:var(--muted);vertical-align:middle}@media (max-width:900px){.movementCreatorFields,.movementCreatorFields.restFields{grid-template-columns:1fr;padding-right:0}.movementCreatorClose{position:static;margin-left:auto;display:block;margin-bottom:12.8px}}.createMoveOptions{margin:0 0 14.4px;padding:14.4px;border-radius:19.2px;background:var(--card2);border:.32px solid var(--line)}.createMoveOptions[hidden]{display:none}.createOptionLabel{text-transform:uppercase;color:var(--muted);margin-bottom:8px}.createPresetChoice{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}.createPresetBtn{min-height:60.8px;padding:11.2px 12.8px;border-radius:14.4px;border:.8px solid var(--field-line);background:transparent;color:var(--text);text-align:left;cursor:pointer}.createPresetBtn strong{display:block}.createPresetBtn span{display:block;color:var(--muted);margin-top:3.2px}.createPresetBtn.active{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.createPresetBtn.active span{color:var(--on-bright);opacity:.68}.createExtras{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px;margin-top:9.6px}.createExtraToggle{display:flex;align-items:flex-start;gap:8px;padding:9.6px 11.2px;border:.8px solid var(--field-line);border-radius:14.4px;cursor:pointer}.createExtraToggle input{margin-top:2.4px}.createExtraToggle span{display:grid;gap:2.4px}.createExtraToggle small{color:var(--muted)}.creatorUnitSelect{min-height:41.6px;padding:0 9.6px;border-radius:12.8px;border:.32px solid var(--field-line);background:var(--input);color:var(--text);font:inherit}@media (max-width:900px){.createPresetChoice,.createExtras{grid-template-columns:1fr}}.globalTimingToggle{display:inline-flex!important;grid-template-columns:none!important;align-items:center;gap:5.6px!important;color:var(--text)!important;white-space:nowrap}.globalTimingToggle input{margin:0}.globalTimingValue{min-height:41.6px;display:flex;align-items:center;padding:0 11.2px;border-radius:12.8px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--muted)}.createFlow{display:grid;gap:9.6px;padding:3.2px 0 8px}.createFlow[hidden]{display:none}.createStep{border-radius:22.4px;background:var(--tile);border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);overflow:hidden}.createStepHeader{width:100%;min-height:57.6px;padding:14.4px 17.6px;border:0;background:transparent;color:var(--text);display:flex;align-items:center;justify-content:space-between;gap:19.2px;text-align:left;cursor:pointer}.createStepHeader:disabled{cursor:not-allowed;opacity:.42}.createStepIdentity{display:flex;align-items:center;gap:9.6px}.createStepNumber{width:22.4px;height:22.4px;border-radius:799.2px;display:grid;place-items:center;border:.32px solid var(--line);color:var(--muted)}.createStepSummary{min-width:0;color:var(--muted);text-align:right}.createStepBody{display:none;padding:0 14.4px 14.4px}.createStep.active .createStepBody{display:block}.createStep.active .createStepHeader{border-bottom:.32px solid var(--divider)}.createStepSlot{display:grid;gap:11.2px}.createStepFooter{display:flex;justify-content:flex-end;margin-top:14.4px}.createStepFooter .primary:disabled{opacity:.35;cursor:not-allowed}.modal.createMode .movementTimingRow{display:none}.modal.createMode .movementCreator{margin-bottom:8px}.modal.createMode .movementCreatorFields{grid-template-columns:minmax(0,1.4fr) minmax(0,1fr)}.modal.createMode .movementCreatorFields.restFields{grid-template-columns:1fr}.modal.createMode .movementCreatorLaunch{margin-top:0}.modal.createMode .sectionTitle{margin-top:9.6px}.modal.createMode .modalStatic{padding-bottom:14.4px}.modal:not(.createMode) .createFlow{display:none!important}#app.resting .movementCard{background:#ffffff0e}#app.resting .movementRippleCanvas{opacity:1}#app.light.resting .movementCard{background:#fbf9f638}.nextCard .skipSessionBtn{margin-left:auto}.modal:not(.createMode) .movementCreatorLaunch{margin-top:25.6px}.testingFeedbackThanks{grid-area:feedback;min-height:176px;padding:19.2px;border:.32px solid var(--line);border-radius:16px;background:#252525;display:flex;flex-direction:column;justify-content:center;align-items:flex-start;gap:6.4px}.testingFeedbackThanks[hidden]{display:none}.testingFeedbackThanks strong{color:#f0f0f0}.testingFeedbackThanks p{margin:0;color:#9ea5b0}.testingFeedbackThanks a{color:#d6d9df;text-underline-offset:2.4px}:host(:fullscreen){overflow:auto;width:100vw;height:100vh}.entitySelect{max-width:min(256px,36.8vw);text-overflow:ellipsis;field-sizing:content}.integration .status code{padding:.8px 4.8px;border-radius:4.8px;background:var(--wash-2)}.integration .pill[disabled]{cursor:default;opacity:.7}#app :focus{outline:none}#app :focus-visible{outline:2.4px solid var(--primary);outline-offset:2.4px}#app .workoutPanel:focus-visible{outline-offset:-2.4px}@media (max-width:620px){.bottomNav{margin-left:14.4px}}.shell:has(.countdown.active) .bottomNav{visibility:hidden}@media (max-width:900px){.workoutPanel:not(.active):not(.addPanel) .panelExpanded{opacity:1;filter:none;pointer-events:auto}}.grid>*{min-width:0}.insightCard{display:grid;gap:22.4px}.day{display:grid;gap:6.4px;justify-items:center}.checkinBackdrop{z-index:160}.checkinCard{width:min(576px,100%)}.checkinCard .sub{margin-top:8px}.checkinSliders{display:grid;gap:11.2px;margin-top:19.2px}.checkinTile{min-height:0;gap:var(--inset);border:0}.scaleEnds{display:flex;justify-content:space-between;margin-top:6.4px;color:var(--muted)}.rangeTrack:focus-within{outline:2.4px solid var(--primary);outline-offset:2.4px}.checkinTab{position:fixed;right:0;top:50%;transform:translateY(-50%);z-index:120;display:flex;flex-direction:column;align-items:center;gap:4px;padding:16px 4px;border:.32px solid var(--line);border-right:0;border-radius:var(--r-fine) 0 0 var(--r-fine)!important;background:var(--control);color:var(--text);cursor:pointer;transition:padding .18s ease,background .18s ease}.checkinTab:hover{padding-right:12.8px}.checkinTabIcon{font-size:16px;line-height:1}.checkinTabLabel{writing-mode:vertical-rl;transform:rotate(180deg)}.checkinBadge{position:absolute;top:8px;left:8px;width:8px;height:8px;border-radius:50%;background:var(--secondary);box-shadow:0 0 0 2.4px var(--control),0 0 9.6px color-mix(in srgb,var(--secondary) 70%,transparent);animation:checkinPulse 1.8s ease-in-out infinite}@keyframes checkinPulse{50%{box-shadow:0 0 0 3px var(--control),0 0 2px color-mix(in srgb,var(--secondary) 20%,transparent)}}@media (prefers-reduced-motion: reduce){.checkinBadge{animation:none}}.shell:has(#workoutView.active) .checkinTab,.shell:has(.countdown.active) .checkinTab{display:none}#app.light .checkinBadge{box-shadow:0 0 0 2.4px var(--color-bg-ground),0 0 9.6px color-mix(in srgb,var(--primary) 50%,transparent)}.feelSection{grid-column:span 12;margin-top:16px}.feelCard{display:grid;gap:19.2px}.feelTop{display:grid;grid-template-columns:minmax(0,1fr) minmax(208px,336px);gap:22.4px;align-items:end}.feelDays{display:grid;grid-template-columns:repeat(7,minmax(0,1fr));gap:8px}.feelDay{min-height:0;gap:9.6px}.feelDay.future{opacity:.4}.feelDay.today{box-shadow:inset 0 0 0 .8px var(--today-ring)}.feelDots{font-size:6.4px;letter-spacing:1.6px;color:var(--muted)}.feelMeter{display:grid;gap:4.8px}.feelMeterTop{display:flex;justify-content:space-between;gap:6.4px;color:var(--muted)}.feelMeterTop span:last-child{color:var(--text)}.feelTrack{height:6.4px;border-radius:799.2px;background:var(--wash-2);overflow:hidden}.feelTrack span{display:block;height:100%;border-radius:799.2px}@media (max-width:900px){.feelSection{grid-column:auto}.feelTop{grid-template-columns:1fr}.feelDays{grid-template-columns:repeat(4,minmax(0,1fr))}}@media (max-width:620px){.feelDays{grid-template-columns:repeat(2,minmax(0,1fr))}}.checkinTile .timeHeader{align-items:center}.checkinTab:not(.due){opacity:.6}.checkinTab:not(.due):hover{opacity:1}.activityCard{grid-column:span 3}.weekly{grid-column:span 9;cursor:pointer;transition:border-color .18s ease,background .18s ease}.weekly:hover{border-color:var(--border-hover)}@media (max-width:1200px){.activityCard{grid-column:span 4}.weekly{grid-column:span 8}}@media (max-width:900px){.activityCard,.weekly{grid-column:auto}}.insightCard{grid-column:span 9;align-content:start}@media (max-width:1200px){.insightCard{grid-column:span 8}}@media (max-width:900px){.insightCard{grid-column:auto}}.helpCard .helpSteps,.helpCard .helpNote{max-width:688px}.helpCard .note{margin:0}.helpSteps{margin:19.2px 0 0;padding:0;list-style:none;counter-reset:help;display:grid;gap:9.6px}.helpSteps li{counter-increment:help;display:grid;gap:4.8px;position:relative;padding:14.4px 16px 14.4px 52.8px;border-radius:20.8px;background:var(--tile);color:var(--muted)}.helpSteps li:before{content:counter(help);position:absolute;left:14.4px;top:12.8px;width:25.6px;height:25.6px;border-radius:9.6px;display:grid;place-items:center;background:var(--icon-bg);color:var(--text)}.helpSteps strong,.helpSteps b,.helpNote b{color:var(--text)}.helpCard code{padding:.8px 4.8px;border-radius:4.8px;background:var(--wash-2)}.helpNote{display:grid;gap:3.2px;margin-top:9.6px;padding:12.8px 16px;border-radius:17.6px;border:.32px solid var(--field-line);color:var(--muted)}.helpNote strong{color:var(--text)}.rowLabel{grid-column:1/-1;margin-top:16px;margin-bottom:-8px}.checkinTab{flex-direction:row;align-items:center;gap:0}.checkinTabMain{display:flex;flex-direction:column;align-items:center;gap:4px}.checkinPeek{display:grid;gap:3.2px;justify-items:start;white-space:nowrap;overflow:hidden;max-width:0;opacity:0;margin-right:0;transition:max-width .32s cubic-bezier(.2,1.2,.4,1),opacity .2s ease,margin-right .32s ease}.checkinTab.peek{padding-left:17.6px;opacity:1}.checkinTab.peek .checkinPeek{max-width:176px;opacity:1;margin-right:14.4px}.peekCountdown{font-size:24px;font-weight:800;letter-spacing:-.04em;line-height:1;font-variant-numeric:tabular-nums}.peekAt{color:var(--muted)}@media (prefers-reduced-motion: reduce){.checkinPeek{transition:none}}.activityRowMeta{color:var(--text);margin-top:1.6px;font-variant-numeric:tabular-nums}.feelTop{grid-template-columns:1fr}:host{--primary:#03A9F4;--secondary:#D0FF00;--font:Inter,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;--font-tile:Geist,var(--font);--w-regular:400;--w-medium:500;--w-semibold:600;--w-bold:700;--w-heavy:800;--t-display:52px;--t-title:22px;--t-card-title:18px;--t-value:16px;--t-section:18px;--t-strong:14px;--t-body:12px;--t-caption:12px;--lh-display:1.05;--lh-title:1;--t-wx-temp:64px;--t-wx-range:24px;--t-tile-title:14px;--lh-tile-title:20px;--t-tile-detail:16px;--lh-tile-detail:20px;--inset:10px;--r-card:34px;--r-tile:24px;--r-inner:16px;--r-fine:12px;--tile-min:60px;--chip-size:40px;--glyph-size:34px;--gutter:22px;--grid-gap:16px}@media (max-width:620px){:host{--t-display:46px;--t-title:20px;--t-value:20px;--t-section:16px;--t-strong:15px;--t-body:14px;--t-caption:11px;--lh-display:.92;--lh-title:1.05}}#app{font-family:var(--font);font-size:var(--t-body);font-weight:var(--w-regular);line-height:1.4}#app button,#app input,#app select,#app textarea{font-family:inherit}:where(#app) strong,:where(#app) b{font-weight:var(--w-bold)}.title,.workoutName,.exerciseTitle,.feelHeadline,.settingsTitle{font-size:var(--t-display);font-weight:var(--w-heavy);line-height:var(--lh-display);letter-spacing:-.055em}.confirmTitle,.sheetTitle,.modalHead h2,.paneTitle,.movementCreatorHead h3,.testingFeedbackThanks strong{font-size:var(--t-title);font-weight:var(--w-medium);font-style:italic;line-height:var(--lh-title);letter-spacing:-.03em}.activityTitle{font-size:var(--t-card-title);font-weight:var(--w-medium);font-style:italic;line-height:1.1;letter-spacing:-.02em;text-box:trim-both cap alphabetic}.paneTitle{margin:0 0 10px}.activityRowMeta,.nextName,.upcomingName,.editNameInput,.videoClock{font-size:var(--t-value);font-weight:var(--w-regular);line-height:1.15;letter-spacing:-.02em}.sectionLabel,.nextLabel{font-size:var(--t-section);font-weight:var(--w-regular);line-height:1.2;letter-spacing:-.01em}.activityRowName,.timeLabel,.moveItemName,.setupSummaryText strong,.sheetChoice strong,.createPresetBtn strong,.createExtraToggle strong{font-family:var(--font-tile);font-size:var(--t-tile-title);font-weight:var(--w-semibold);line-height:var(--lh-tile-title);letter-spacing:0}.moveMeta,.setupSummaryText small,.sheetChoice small,.createPresetBtn span,.createExtraToggle small{font-family:var(--font-tile);font-size:var(--t-tile-detail);font-weight:var(--w-regular);line-height:var(--lh-tile-detail);letter-spacing:0}.integration strong,.toggleRow strong,.setupName,.weekChipTop strong,.panelCollapsedText,.activityCount,.metaType,.kindChip,.helpSteps strong,.addGhost strong,.helpNote strong,.createStepIdentity strong,.testingZoneTitleRow strong,.testingFeedbackHeading,.tempoEstimate,.primary,.tab,.skipBtn,.skipSessionBtn,.hideBtn,.removeBtn,.addBtn,.themeBtn,.wxLayoutBtn,.holdEnd,.holdDelete,.movementCreatorOpen,.restAddBtn,.creatorAddButton,.testingFeedbackSubmit,.testingRating button,.toast,.checkinTabLabel{font-size:var(--t-strong);font-weight:var(--w-semibold);line-height:1.25;letter-spacing:-.01em}.status,.setupValue,.sub,.meta,.note,.weekCopy,.addInput,.settingsSelect,.pill,.routineSummary,.helpSteps li,.helpNote,.createStepSummary{font-size:var(--t-body);font-weight:var(--w-regular);line-height:1.4;letter-spacing:0}.setupCaption,.moveEditForm label>span,.addGhostText small,.setupSummaryAction,.metaTable th,.metaSub,.eyebrow,#stepLabel,.sourceTag,.addPanelLabel,.motionRangeWrap span,.sectionTitle,.editNameLabel,.scaleEnds,.peekAt,.upcomingMeta,.tempoPole,.tempoReadout,.tempoRevealBtn,.testingFeedbackField,.testingZoneExplanation,.testingFeedbackThanks p,.movementCreatorClose,.movementCreatorFields>label,.durationStack,.globalTimingToggle,.toggleLabel,.moveKindBadge,.createOptionLabel,.fieldError,.globalTimingValue,.createStepNumber,.feelMeterTop,#app code{font-size:var(--t-caption);font-weight:var(--w-regular);line-height:1.35;letter-spacing:0}.eyebrow,#stepLabel,.sectionTitle,.setupCaption{letter-spacing:.1em}.globalTimingToggle{font-size:var(--t-caption)!important}.workoutGallery,.workoutPanel{height:340px}@media (max-width:900px){.workoutPanel,.workoutPanel.active{height:320px}}@media (max-width:900px){.workoutGallery{height:auto}.workoutPanel,.workoutPanel.active{height:auto;min-height:320px}}@media (max-width:620px){.view{padding-left:0;padding-right:0}.settingsHeader,.sessionHead,.sessionControlRow{margin-left:16px;margin-right:16px}.tabs.rubberTabs,.sectionLabel,.rowLabel{margin-left:16px}.grid{gap:8px}.rowLabel,.feelSection{margin-top:16px}.rowLabel{margin-bottom:-4px}.sectionLabel{margin-bottom:8px}.workoutGallery{gap:8px}.workoutPanel,.workoutPanel.active{flex:0 0 100%;min-width:100%}.workoutPanel.addPanel{flex:0 0 100%;min-width:100%;min-height:120px}.card,.workoutPanel,.timerCard,.movementCard,.nextCard,.upcomingCard,.confirmCard{padding:16px}.activityRows,.insightCard,.feelCard{gap:8px}.activityRow,.weekChip{padding:10px 12px}.feelDays{gap:8px}.workGrid{gap:8px;margin-top:8px}.nextWrap,.sessionControlRow{margin-top:8px}.upcomingList{gap:8px}}.tabs.rubberTabs .tab{white-space:nowrap}@media (max-width:620px){.tabs.rubberTabs{display:flex;width:max-content;max-width:calc(100% - 32px);overflow-x:auto;scrollbar-width:none}.tabs.rubberTabs::-webkit-scrollbar{display:none}.tabs.rubberTabs .tab{flex:0 0 auto}}.insightCard{display:flex;flex-direction:column;gap:0}@media (max-width:1200px) and (min-width:901px){.timeTiles{grid-auto-flow:row;grid-template-columns:repeat(2,1fr)}}#stepLabel{margin-top:9.6px}#exerciseMeta{margin-top:4px}.moveRow{justify-content:flex-start;gap:12.8px}.moveText{flex:1;min-width:0}.moveActions{display:flex;gap:6.4px;flex:0 0 auto}.dragHandle{flex:0 0 auto;display:grid;place-items:center;width:32px;height:40px;margin:-8px 0 -8px -9.6px;padding:0;border:0;border-radius:12px;background:transparent;color:var(--muted);cursor:grab;touch-action:none}.dragHandle:hover{background:var(--hover);color:var(--text)}.moveRow.dragging{box-shadow:0 10px 30px var(--lift),inset 0 0 0 1.5px var(--primary);position:relative;z-index:2}.moveRow.dragging .dragHandle{cursor:grabbing;color:var(--text)}.removeBtn:hover,.hideBtn:hover{border-color:var(--muted)}.toast{position:fixed;z-index:400;display:flex;align-items:center;gap:12.8px}.toast.withAction{pointer-events:auto}.toastAction{border:0;padding:0;background:none;color:inherit;font:inherit;text-decoration:underline;text-underline-offset:3px;cursor:pointer}.modalTop{flex:0 0 auto;padding:22px 22px 0}.modalTop .modalHead{margin-bottom:0;padding-bottom:16px}@media (min-width:901px){.modal:not(.createMode){display:grid;grid-template-columns:minmax(340px,420px) minmax(0,1fr);grid-template-rows:auto minmax(0,1fr)}.modal:not(.createMode) .modalTop{grid-column:1/-1;border-bottom:.32px solid var(--divider)}.modal:not(.createMode) .modalStatic{grid-column:1;grid-row:2;overflow-y:auto;border-bottom:0;border-right:.32px solid var(--divider)}.modal:not(.createMode) .exerciseScroller{grid-column:2;grid-row:2;border-top:0;padding-top:12px}.modal:not(.createMode) .timeTiles{grid-auto-flow:row;grid-template-columns:minmax(0,1fr)}}.timeTiles{align-items:start}.removeLabel{position:relative;z-index:1}.removeBtn.holding{border-color:var(--danger-fill)}#deleteMoveConfirm{z-index:200}.moveRow{will-change:transform}.moveRow.dragging{box-shadow:0 18px 40px var(--lift),inset 0 0 0 1.5px var(--primary);z-index:3;transform-origin:center}.moveRow.editing{display:block;padding:16px;box-shadow:inset 0 0 0 1.5px var(--primary)}.moveEditForm{display:grid;gap:14.4px}.moveEditFields{display:grid;grid-template-columns:minmax(0,1.4fr) minmax(0,1fr);gap:12.8px}.moveEditForm label:not(.globalTimingToggle){display:grid;gap:6.4px;min-width:0}.moveEditForm .addInput{width:100%;min-width:0}.moveEditTiming{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:12.8px}.moveEditTiming .creatorDurationRow{display:grid;grid-template-columns:96px 128px;gap:9.6px}.creatorDurationRow.isDisabled{opacity:.38}.moveEditActions{display:flex;justify-content:flex-end;align-items:center;gap:22.4px}@media (max-width:620px){.moveEditFields{grid-template-columns:1fr}}.integration .status code{color:var(--soft)}#app.resting :is(.sessionHead,.nextLabel,.sessionControlRow){--muted:#f4f4f4;color:var(--text)}#app.paused :is(.sessionHead,.nextLabel,.sessionControlRow){--text:#090909;--muted:rgba(9,9,9,.8);--accent-text:#090909;--line:rgba(9,9,9,.3);color:var(--text)}#app.light:is(.resting,.paused) :is(.sessionHead,.nextLabel,.sessionControlRow){--text:#26221e;--muted:rgba(38,34,30,.85);--accent-text:#26221e;--line:rgba(38,34,30,.25);color:var(--text)}.moveList{display:flex;flex-direction:column}.movementCreatorOpen,.restAddBtn{display:inline-flex;align-items:center;gap:6px;touch-action:none;user-select:none;-webkit-user-select:none;cursor:grab;transition:transform .42s cubic-bezier(.34,1.46,.64,1),opacity .2s ease}.movementCreatorOpen svg,.restAddBtn svg{width:14px;height:14px;margin-left:-3px;opacity:.55;flex:0 0 auto}.movementCreatorOpen.lifting,.restAddBtn.lifting{transform:scale(.92);opacity:.4;cursor:grabbing;transition:transform .16s ease,opacity .16s ease}.addGhost{position:fixed;left:0;top:0;z-index:20;pointer-events:none;box-sizing:border-box;display:flex;align-items:center;gap:8px;padding:0 12.8px;overflow:hidden;white-space:nowrap;border-radius:12px;background:var(--bright);color:var(--on-bright);box-shadow:0 12px 30px var(--lift);will-change:transform;transition:width .4s cubic-bezier(.34,1.46,.64,1),height .4s cubic-bezier(.34,1.46,.64,1),border-radius .3s ease,padding .3s ease,background .2s ease,color .2s ease,box-shadow .25s ease,opacity .18s ease}.addGhost.rest{background:var(--control-2);color:var(--text);box-shadow:inset 0 0 0 .5px var(--field-line),0 12px 30px var(--lift)}.addGhostGrip{display:grid;place-items:center;flex:0 0 auto;opacity:.55}.addGhostGrip svg{width:14px;height:14px;transition:width .3s ease,height .3s ease}.addGhostText{display:grid;min-width:0}.addGhostText small{color:var(--muted);max-height:0;opacity:0;transition:max-height .3s ease,opacity .2s ease}.addGhost.overList{border-radius:20.8px;gap:12.8px;padding:0 22.4px 0 12.8px;background:var(--row);color:var(--text);box-shadow:inset 0 0 0 1.5px var(--primary),0 16px 36px var(--lift)}.addGhost.overList .addGhostGrip svg{width:18px;height:18px}.addGhost.overList .addGhostText small{max-height:20px;opacity:1;margin-top:4px}.addGhost.leaving{opacity:0}.dropSlot{flex:0 0 auto;height:0;margin-top:-8px;border-radius:20.8px;background:color-mix(in srgb,var(--primary) 9%,transparent);box-shadow:inset 0 0 0 1.5px color-mix(in srgb,var(--primary) 40%,transparent);transition:height .42s cubic-bezier(.34,1.46,.64,1),margin-top .42s cubic-bezier(.34,1.46,.64,1),opacity .2s ease}.dropSlot.leaving{opacity:0;transition:height .26s cubic-bezier(.4,0,.2,1),margin-top .26s cubic-bezier(.4,0,.2,1),opacity .16s ease}@media (prefers-reduced-motion: reduce){.addGhost,.dropSlot,.movementCreatorOpen,.restAddBtn{transition:none}}.exerciseScroller,.modalStatic,.createFlow{overflow-anchor:none}.videoStage{position:absolute;top:0;right:0;bottom:0;left:0;z-index:3;display:grid;place-items:center;background:#000;opacity:0;pointer-events:none;transition:opacity .3s ease}#app.videoStep .videoStage{opacity:1;pointer-events:auto}.videoStage{container-type:size}.videoFrame{width:min(100cqw,calc(100cqh * 16 / 9));aspect-ratio:16/9}.videoFrame>*{display:block;width:100%;height:100%;border:0}.videoSound{position:absolute;left:50%;bottom:16px;transform:translate(-50%);z-index:2}.videoProbe{position:fixed;left:-10000px;top:0;width:320px;height:180px;opacity:0;pointer-events:none}.digits.long{font-size:clamp(96px,12.8vw,200px)}.moveEditFields.videoFields{grid-template-columns:minmax(0,1fr)}.fieldError{margin:0;color:var(--danger)}.addInput.invalid{border-color:var(--danger)}@media (prefers-reduced-motion: reduce){.videoStage{transition:none}}.workGrid{transition:grid-template-columns .55s cubic-bezier(.2,.8,.2,1),gap .55s cubic-bezier(.2,.8,.2,1)}.timerCard{transition:opacity .25s ease}#app.videoStep .timerCard{opacity:0;min-width:0;pointer-events:none}.workGrid{container-type:inline-size}#app.videoStep .movementCard{height:min(56.25cqw,var(--theater-h,60vh));min-height:240px;padding:0}#app.videoStep .exerciseTitle{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}@media (min-width:901px){#app.videoStep .workGrid{grid-template-columns:minmax(0,0fr) minmax(240px,1fr);gap:0}}@media (max-width:900px){#app.videoStep .timerCard{display:none}#app.videoStep .movementCard{min-height:0}}.videoClock{display:none;margin-right:auto;font-variant-numeric:tabular-nums}#app.videoStep .videoClock{display:block}@media (prefers-reduced-motion: reduce){.workGrid,.timerCard{transition:none}}.metaCard{margin-top:16px}.metaFilters{display:flex;flex-wrap:wrap;gap:9.6px;align-items:center;margin:14.4px 0 11.2px}.metaSearch{flex:1 1 200px;min-width:0}.metaKinds{display:flex;flex-wrap:wrap;gap:6.4px}.kindChip{min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);border-radius:12px;background:var(--control-2);color:var(--text);cursor:pointer}.kindChip.active{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.metaTableWrap{overflow-x:auto}.metaTable{width:100%;border-collapse:collapse}.metaTable th{text-align:left;color:var(--muted);padding:12px 16px;border-bottom:.32px solid var(--divider);text-transform:uppercase;letter-spacing:.1em}.metaTable td{padding:12px 16px;border-top:.32px solid var(--divider);vertical-align:middle;color:var(--soft)}.metaTable tbody tr:first-child td{border-top:0}.metaTable :is(th,td):first-child{padding-left:4px}.metaTable :is(th,td):last-child{padding-right:4px}.metaTable .metaSwitchCol{width:1%;white-space:nowrap;text-align:right}.metaTable .metaSwitchCol .switch{display:inline-block;vertical-align:middle}.metaType{color:var(--text)}.metaTable tr.off .metaType{color:var(--muted)}.metaSub{display:none;margin-top:2px;color:var(--muted)}.metaEmpty td{text-align:center;color:var(--muted)}.metaBulk{display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap;margin-top:11.2px}.metaBulkActions{display:flex;gap:22.4px}@media (max-width:620px){.metaKindCol,.metaUsedCol{display:none}.metaSub{display:block}}@media (max-width:620px){.moveRow.noMeta .moveMeta,.upcomingCard.noMeta .upcomingMeta,.nextCard.noMeta #nextMeta{display:none}}.setupSummary,.addFab{display:none}.modal{position:relative}.setupSummary{align-items:center;justify-content:space-between;gap:12px;width:100%;margin:6.4px 0 4px;padding:12px 14px;border:0;border-radius:20.8px;background:var(--tile);color:var(--text);text-align:left;cursor:pointer}.setupSummaryText{display:grid;gap:2px;min-width:0}.setupSummaryText small{color:var(--muted)}.setupSummaryAction{flex:0 0 auto;color:var(--muted)}.rowChevron{flex:0 0 auto;color:var(--muted);font-size:22px;line-height:1}.addFab{position:absolute;right:16px;bottom:calc(16px + env(safe-area-inset-bottom,0px));z-index:12;place-items:center;width:56px;height:56px;padding:0;border:0;background:var(--bright);color:var(--on-bright);font-size:30px;font-weight:300;line-height:1;box-shadow:0 10px 24px var(--lift);cursor:pointer}.sheetScrim{position:absolute;top:0;right:0;bottom:0;left:0;z-index:30;background:var(--scrim);opacity:0;pointer-events:none;transition:opacity .25s ease}.sheetScrim.open{opacity:1;pointer-events:auto}.sheet{position:absolute;left:0;right:0;bottom:0;z-index:31;display:grid;gap:14px;max-height:88%;overflow-y:auto;overscroll-behavior:contain;padding:10px 16px calc(22px + env(safe-area-inset-bottom,0px));border-radius:var(--r-card) var(--r-card) 0 0;background:var(--modal);box-shadow:0 -.5px 0 var(--divider),0 -18px 40px var(--lift);transform:translateY(105%);visibility:hidden;transition:transform .42s cubic-bezier(.2,.9,.25,1.06),visibility 0s linear .42s}.sheet.open{transform:none;visibility:visible;transition:transform .42s cubic-bezier(.2,.9,.25,1.06)}.sheetGrab{justify-self:center;width:38px;height:5px;border-radius:99px;background:var(--field-line)}.sheetTitle{margin:0}.sheet .moveRow.editing{display:block;padding:0;background:none;box-shadow:none;border-radius:0}.sheetActions{justify-content:space-between;flex-wrap:wrap;gap:12.8px}.sheetSecondary,.sheetPrimary{display:flex;align-items:center;gap:6.4px}.sheetPrimary{gap:22.4px;margin-left:auto}.sheetChoices{display:grid;gap:8px}.sheetChoice{display:flex;align-items:center;gap:14px;width:100%;padding:12px;border:0;border-radius:20.8px;background:var(--row);color:var(--text);text-align:left;cursor:pointer}.sheetChoice small{display:block;margin-top:2px;color:var(--muted)}.sheetSetup .modalStatic{padding:0;background:none;border:0;overflow:visible}.sheetDone{width:100%;margin-top:14.4px}.addGhostActions{display:none;align-items:center;gap:6.4px;margin-left:auto;flex:0 0 auto}.addGhost.hovering{pointer-events:auto;cursor:grab;touch-action:none;animation:ghostWait 1.8s ease-in-out infinite}.addGhost.held{pointer-events:auto;cursor:grabbing;touch-action:none}.addGhost.hovering .addGhostActions{display:flex}.addGhost.rising{transition:transform .6s cubic-bezier(.34,1.46,.64,1),opacity .2s ease}.ghostDiscard{padding:0 10px}@keyframes ghostWait{50%{box-shadow:inset 0 0 0 1.5px var(--primary),0 22px 44px var(--lift),0 0 0 5px color-mix(in srgb,var(--primary) 22%,transparent)}}@media (max-width:620px){.modal:not(.createMode)>.modalStatic{display:none}.modal:not(.createMode) .setupSummary{display:flex}.addFab{display:grid}.movementCreatorLaunch{display:none}.exerciseScroller{padding-bottom:104px}.moveRow.phoneRow{gap:8px;min-height:60px;padding:12px 12px 12px 14px;cursor:pointer}}@media (prefers-reduced-motion: reduce){.sheet,.sheetScrim{transition:none}.addGhost.hovering{animation:none}}.modal{overflow:clip}.moveList.reordering>.moveRow:not(.dragging){transition:transform .44s cubic-bezier(.34,1.46,.64,1)}.moveRow.dragging.willReturn{opacity:.62;box-shadow:0 10px 24px var(--lift),inset 0 0 0 1.5px var(--field-line)}@media (prefers-reduced-motion: reduce){.moveList.reordering>.moveRow{transition:none}}.card,.panel,.confirmCard,.nextCard,.workoutPanel.active{padding:var(--inset)}.confirmCard,.nextCard,.upcomingCard{border-radius:var(--r-card)}.upcomingCard{padding:var(--inset)}.workoutPanel{border-radius:var(--r-tile);padding:var(--inset)}.workoutPanel.active{border-radius:var(--r-tile)}.workoutPanel.addPanel{padding:var(--inset)}.activityRow,.moveRow,.timeTile,.createPresetBtn,.createExtraToggle,.sheetChoice,.setupSummary{border-radius:var(--r-tile)}.activityRow,.moveRow{min-height:var(--tile-min);padding:var(--inset);gap:var(--inset)}.activityRow{grid-template-columns:var(--chip-size) minmax(0,1fr)}.activityRows{gap:12px}.timeTile{padding:var(--inset);gap:var(--inset)}.timeHeader{gap:var(--inset)}.createPresetBtn,.createExtraToggle{padding:var(--inset)}.moveMeta,.activityRowMeta,.setupSummaryText small,.sheetChoice small,.createExtraToggle small{color:var(--text)}.createPresetBtn.active span{color:var(--on-bright)}.moveMeta,.activityRowMeta{margin-top:0}.activityRowIcon,.activityIcon,.timeIcon,.nextIcon,.upcomingIcon{width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);font-size:20px}.navBtn,.back{display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);min-height:0;padding:0;border-radius:var(--r-inner)}.moveRow.editing{padding:var(--inset)}.moveRow.phoneRow{min-height:0;padding:var(--inset);gap:var(--inset)}.dragHandle{width:var(--chip-size);height:var(--chip-size);margin:0;border-radius:var(--r-inner);background:var(--icon-bg);color:var(--muted)}.dragHandle svg{width:var(--glyph-size);height:var(--glyph-size)}.moveRow.restItem .dragHandle{background:transparent}.dragHandle:hover{background:color-mix(in srgb,var(--icon-bg) 80%,var(--text))}.moveRow.restItem .dragHandle:hover{background:var(--hover)}.addGhost.overList,.dropSlot{border-radius:var(--r-tile)}.seg{display:flex;align-items:center;gap:4px;padding:4px;border-radius:var(--r-inner);background:var(--seg-bg);flex:0 0 auto}.segBtn{min-height:38px;padding:0 20px;border:0;border-radius:var(--r-fine);background:transparent;color:var(--text);cursor:pointer}.segBtn:hover{background:var(--hover)}.moveActions.seg{gap:4px}.moveActions .segBtn{min-width:100px}.moveActions .editBtn{background:var(--seg-on)}.moveActions .editBtn:hover{background:color-mix(in srgb,var(--seg-on) 88%,var(--text))}.moveActions .removeBtn{display:grid;place-items:center;width:40px;min-width:40px;padding:0;border:0;background:var(--danger-fill);color:var(--on-danger-fill)}.moveActions .removeBtn:hover{background:color-mix(in srgb,var(--danger-fill) 88%,white);border:0}.moveActions .removeBtn svg{display:block;width:24px;height:24px}.moveActions .removeFill{background:color-mix(in srgb,var(--on-danger-fill) 45%,transparent)}.moveActions .removeBtn.holding{color:#fff}@media (max-width:1100px){.moveActions .segBtn:not(.removeBtn){min-width:0;padding:0 14px}}.tabs.rubberTabs{padding:4px;gap:4px;border:0;border-radius:var(--r-inner);background:var(--seg-bg)}.rubberIndicator{top:4px;left:4px;height:calc(100% - 8px);border-radius:var(--r-fine);background:var(--seg-on)}.tabs.rubberTabs .tab{min-height:38px;padding:0 20px}.tabs.rubberTabs .tab.active{color:var(--text)}#app.light .rubberIndicator{box-shadow:0 1px 3px var(--lift)}.toggleTrack{width:50px;height:28px;border-radius:var(--r-inner);background:var(--line);border:.4px solid var(--line);opacity:1;transition:background .16s ease,opacity .16s ease}.toggleThumb{width:24px;height:24px;top:50%;left:1.6px;border-radius:12px 4px 4px 12px;background:var(--text);transform:translateY(-50%);transition:left .16s ease,border-radius .16s ease,background .16s ease}.globalTimingToggle input:checked+.toggleTrack{background:var(--color-accent-primary);opacity:1}.globalTimingToggle input:checked+.toggleTrack .toggleThumb{left:calc(100% - 25.6px);border-radius:4px 12px 12px 4px;background:var(--color-text-on-accent)}@media (max-width:900px){.workoutPanel:not(.addPanel){border-radius:var(--r-tile);padding:var(--inset)}}@media (max-width:620px){:host{--gutter:0px;--grid-gap:8px}}@media (max-width:620px){.modalBackdrop{padding:0}.modal,.modal:not(.createMode){width:100%;height:100%;max-height:none;border-radius:0;border:0}.modalTop{padding-top:calc(16px + env(safe-area-inset-top,0px))}.modal:not(.createMode) .exerciseScroller{padding-bottom:calc(104px + env(safe-area-inset-bottom,0px))}}#app{--group-bg:var(--card)}.modal,.sheet{--group-bg:var(--tile)}.view{padding-left:var(--gutter);padding-right:var(--gutter)}.grid{gap:var(--grid-gap)}.setupCaption{display:block;padding:0 4px 8px;color:var(--muted);text-transform:uppercase}.setupGroup,#settingsView .integrationList,#settingsView .toggleList{display:grid;gap:0;border-radius:var(--r-tile);background:var(--group-bg);overflow:hidden}.setupRow,#settingsView .integration,#settingsView .toggleRow{position:relative;display:flex;align-items:center;justify-content:space-between;gap:16px;min-height:56px;padding:12px 16px;border-radius:0;background:transparent}:is(.setupRow,#settingsView .integration,#settingsView .toggleRow):not([hidden])~:is(.setupRow,.integration,.toggleRow):before{content:"";position:absolute;top:0;left:16px;right:0;border-top:.5px solid var(--divider)}.setupRow.withSlider{display:grid;grid-template-columns:minmax(0,1fr);gap:10px;align-items:stretch}.setupRowTop{display:flex;justify-content:space-between;align-items:center;gap:16px}.setupText{display:grid;gap:2px;min-width:0}.setupValue,#settingsView .status{color:var(--muted);margin-top:0;font-variant-numeric:tabular-nums}.setupRow .rangeTrack[hidden]{display:none}.rangeTrack.setupSlider{height:28px;margin:0 2px;border:0;border-radius:0!important;background:transparent;overflow:visible}.rangeTrack.setupSlider:before{content:"";position:absolute;left:0;right:0;top:50%;height:6px;border-radius:99px;background:var(--track);transform:translateY(-50%)}.setupSlider .rangeFill{top:50%;bottom:auto;height:6px;border-radius:99px;transform:translateY(-50%)}.setupSlider .rangeFill:after{content:"";position:absolute;right:-11px;top:50%;width:22px;height:22px;border-radius:50%;background:var(--slider-fill);box-shadow:0 1px 4px var(--lift);transform:translateY(-50%)}.setupSlider:focus-within{outline:0}.setupSlider:focus-within .rangeFill:after{box-shadow:0 0 0 3px color-mix(in srgb,var(--primary) 45%,transparent)}.stepper{display:flex;align-items:center;gap:2px;padding:4px;border-radius:var(--r-inner);background:var(--seg-bg);flex:0 0 auto}.stepBtn{width:36px;height:32px;padding:0;border:0;border-radius:var(--r-fine)!important;background:transparent;color:var(--text);font:600 18px/1 var(--font);cursor:pointer}.stepBtn:hover:not(:disabled){background:var(--hover)}.stepBtn:disabled{opacity:.35;cursor:default}.stepCount{min-width:24px;text-align:center;font:600 var(--t-strong)/1 var(--font);font-variant-numeric:tabular-nums}.timeTiles.setupBlock,.modal:not(.createMode) .timeTiles.setupBlock{display:block;margin-bottom:12px}.editNameLabel{padding:0 4px}.routineSummary{margin:0 0 4px;padding:0 4px;background:none;border-radius:0;color:var(--muted)}#settingsView .card{display:grid;gap:12px;padding:0;border:0;border-radius:0;background:none}#settingsView .card+.card{margin-top:36px}#settingsView .paneTitle{margin:0 4px}#settingsView .note{margin:0 4px 4px}#settingsView .integration>div:first-child,#settingsView .toggleRow>div:first-child{display:grid;gap:2px;min-width:0}#settingsView .helpSteps{gap:0;border-radius:var(--r-tile);background:var(--group-bg);overflow:hidden}#settingsView .helpSteps li{border-radius:0;background:transparent}#settingsView .helpSteps li+li:after{content:"";position:absolute;top:0;left:52.8px;right:0;border-top:.5px solid var(--divider)}.activityCard,.insightCard{grid-column:span 3}.weatherCard,.grid.noWeather .activityCard,.grid.noWeather .insightCard,.grid.noActivity .insightCard{grid-column:span 6}.grid.noActivity.noWeather .insightCard{grid-column:span 12}@media (max-width:1199px) and (min-width:901px){.activityCard,.insightCard{grid-column:span 6}.weatherCard,.grid.noActivity .insightCard{grid-column:span 12}}@media (max-width:900px){.activityCard,.insightCard,.weatherCard,.grid .insightCard{grid-column:auto}}.jointRows{gap:0;padding:4px 0;border-radius:var(--r-tile);background:var(--tile)}.jointRows>.activityRow{background:transparent}.insightCard .jointRows{flex:1;align-content:space-evenly}.weatherCard{display:flex;flex-direction:column}.wxWide{flex:1;display:flex;flex-direction:column;gap:var(--inset)}.wxNow{display:flex;justify-content:space-between;align-items:flex-start;gap:16px}.wxCurrent{display:flex;align-items:flex-start;gap:16px;min-width:0}.wxTempBlock{display:grid;gap:4px;min-width:0}.wxTemp{display:flex;align-items:flex-start;gap:2px}.wxPlace{color:var(--muted);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.wxCondition{display:grid;gap:2px;padding:var(--inset);border-radius:var(--r-tile);background:var(--tile);flex:0 0 auto}.wxNoDays{flex:1;display:grid;place-items:center;padding:16px;border-radius:var(--r-tile);background:var(--tile);color:var(--muted)}.wxIcon{position:relative;display:block;flex:0 0 auto;width:54px;height:54px;border-radius:var(--r-inner);background:var(--icon-bg);overflow:hidden}.wxIcon>svg,.wxLayer>svg{display:block;width:100%;height:100%}:is(.wxIcon,.wxLayer).clear,:is(.wxIcon,.wxLayer).partly{background:var(--wx-clear)}:is(.wxIcon,.wxLayer).cloudy{background:var(--wx-cloudy)}:is(.wxIcon,.wxLayer).rain,:is(.wxIcon,.wxLayer).snow{background:var(--color-text-muted)}:is(.wxIcon,.wxLayer).night{background:var(--wx-night)}.wxIcon .wxBright{fill:var(--wx-cloud-bright)}.wxIcon .wxCloudLight{fill:var(--wx-cloudy)}.wxIcon .wxAccent{fill:var(--color-accent-primary)}.wxIcon.large{width:90px;height:90px;border-radius:var(--r-tile)}.wxIcon>canvas{display:block;width:100%;height:100%;image-rendering:pixelated}.wxIcon :is(.wxSunDisc,.wxMoonPath,.wxBright,.wxCloudLight,.wxDrop,.wxFlake,.wxTwinkle){transform-box:fill-box;transform-origin:center}#app.wxMotion .wxIcon .wxSunDisc{animation:wxBreathe 3.6s ease-in-out infinite}#app.wxMotion .wxIcon .wxMoonPath{animation:wxBob 5.2s ease-in-out infinite}#app.wxMotion .wxIcon :is(.wxBright,.wxCloudLight){animation:wxDrift 6.4s ease-in-out infinite}#app.wxMotion .wxIcon .wxDrop{animation:wxFall .95s linear infinite}#app.wxMotion .wxIcon .wxFlake{animation:wxSnow 3.2s linear infinite}#app.wxMotion .wxIcon .wxTwinkle{animation:wxTwinkle 2.4s ease-in-out infinite}@keyframes wxBreathe{50%{transform:scale(1.03)}}@keyframes wxBob{50%{transform:translateY(-1px)}}@keyframes wxDrift{0%,to{transform:translate(-1.5px)}50%{transform:translate(1.5px)}}@keyframes wxFall{0%{transform:translateY(-5px);opacity:0}18%,72%{opacity:1}to{transform:translateY(9px);opacity:0}}@keyframes wxSnow{0%{transform:translateY(-6px);opacity:0}20%,75%{opacity:1}to{transform:translate(1.5px,8px);opacity:0}}@keyframes wxTwinkle{50%{opacity:.35}}.wxLayer{position:absolute;top:0;right:0;bottom:0;left:0;display:block}.wxLayer.wxOut{animation:wxFadeOut .7s cubic-bezier(.3,0,1,1) forwards}@keyframes wxFadeOut{to{opacity:0}}.wxDeg{font-family:var(--font-tile);font-size:var(--t-wx-temp);font-weight:var(--w-medium);line-height:1;letter-spacing:-.02em}.wxUnit,.wxRange{font-family:var(--font-tile);font-size:var(--t-wx-range);font-weight:300;line-height:1.25;letter-spacing:0}.wxPlace,.wxCondName{font-family:var(--font-tile);font-size:var(--t-tile-title);font-weight:var(--w-semibold);line-height:var(--lh-tile-title);letter-spacing:0}.wxNoDays{font-family:var(--font-tile);font-size:var(--t-tile-detail);font-weight:var(--w-regular);line-height:var(--lh-tile-detail);letter-spacing:0}.wxNow[role=button],.wxDayTile{cursor:pointer;border-radius:var(--r-tile)}:is(.wxNow,.wxDayTile,.wxStripDay):focus-visible{outline:2px solid var(--color-border-focus);outline-offset:2px}.wxStrip{position:relative;flex:1;display:flex}.wxStripDays{flex:1;display:grid;grid-template-columns:repeat(6,minmax(0,1fr))}.wxStripDay{display:flex;flex-direction:column;align-items:center;justify-content:space-between;gap:var(--inset);min-width:0;padding:var(--inset) 0;border-radius:var(--r-tile);cursor:pointer}@media (hover:hover){.wxStripDay:hover{background:var(--color-state-hover)}}.wxStripGap{align-self:stretch;height:90px}.wxStripDay .wxTemps{display:grid;justify-items:center;gap:8px}.wxStripSky{position:absolute;left:0;top:calc(var(--inset) * 2 + var(--lh-tile-detail));width:100%;height:90px;border-radius:var(--r-inner);pointer-events:none;image-rendering:pixelated}.wxStripDay .wxDayName,.wxStripDay .wxHigh,.wxGraphDays{font-family:var(--font-tile);font-size:var(--t-tile-detail);font-weight:var(--w-regular);line-height:var(--lh-tile-detail);letter-spacing:0}.wxStripDay .wxLow{font-family:var(--font-tile);font-size:var(--t-tile-title);font-weight:var(--w-semibold);line-height:var(--lh-tile-title);color:var(--muted)}.wxBackdrop{z-index:170}.wxDialogCard{width:min(860px,100%);display:grid;gap:var(--inset)}.wxDialogHead{display:flex;align-items:center;justify-content:space-between;gap:var(--inset);padding-left:var(--inset)}.wxDialogHead .activityTitle{margin:0}.wxDialogClose{background:transparent}.wxGraph{display:grid;gap:8px;touch-action:pan-y;cursor:ew-resize;border-radius:var(--r-tile);user-select:none;-webkit-user-select:none}.wxGraph:focus{outline:none}.wxGraph:focus-visible{outline:2px solid var(--color-border-focus);outline-offset:4px}.wxGraphDays{display:grid;grid-template-columns:repeat(6,minmax(0,1fr));text-align:center;color:var(--muted)}.wxGraphSky{position:relative;height:200px;border-radius:var(--r-tile);overflow:hidden;background:var(--tile)}.wxGraphSky>canvas{display:block;width:100%;height:100%;image-rendering:pixelated}.wxGraphLine{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;overflow:visible;pointer-events:none}.wxLineLabel{font-family:var(--font-tile);font-size:14px;font-weight:var(--w-semibold);text-anchor:middle;paint-order:stroke;stroke-width:3px;stroke-linejoin:round}@media (max-width:620px){.wxGraphSky{height:160px}.wxDialogNow{flex-wrap:wrap}}.segBtn{transition:background .15s ease,transform .18s cubic-bezier(.34,1.46,.64,1),box-shadow .15s ease,color .15s ease}.segBtn:hover{background:transparent}@media (hover:hover){.segBtn:hover{background:var(--color-state-hover)}}.tabs.rubberTabs .tab.active:hover{background:transparent}.segBtn:active{background:var(--color-state-pressed);transform:scale(.97)}.segBtn:focus-visible{outline:none;box-shadow:inset 0 0 0 2px var(--color-border-focus)}.segBtn:disabled{opacity:.4;cursor:default}.moveActions.seg{background:transparent;transition:background .18s ease}.moveActions.seg:focus-within{background:var(--seg-bg)}@media (hover:hover){.moveActions.seg:hover{background:var(--seg-bg)}}.moveActions .editBtn,.moveActions .editBtn:hover{background:transparent}.moveActions .removeBtn,.moveActions .removeBtn:hover{background:transparent;color:var(--text)}@media (hover:hover){.moveActions .editBtn:hover{background:var(--color-state-hover)}.moveActions .removeBtn:hover{background:var(--danger-fill);color:var(--color-text-on-danger)}}.moveActions .removeBtn:active{background:linear-gradient(var(--color-state-pressed-on-bright),var(--color-state-pressed-on-bright)),var(--danger-fill);color:var(--color-text-on-danger)}.moveActions .removeBtn.holding{background:var(--danger-bg);color:var(--color-text-on-danger)}.moveActions .removeFill{background:var(--danger-fill)}.activityIcon{color:var(--muted)}.activityRowIcon,.timeIcon,.nextIcon,.upcomingIcon{color:var(--text)}.wxTempBlock{padding-top:6px}.motionRangeWrap input[type=range]{accent-color:var(--bright);background:transparent}', zu = `#app{--hc-on-accent:#f4f3f3;--hc-open-edge:rgba(255,255,255,.1);--hc-hair:inset 0 0 0 .2px var(--line),inset 0 -.2px 0 var(--line);--hc-hair-all:inset 0 0 0 .4px var(--line)}#app.light{--hc-open-edge:#e3e3e3}#homeView .card{padding:var(--inset);border-radius:var(--r-card);box-shadow:var(--hc-hair)}#homeView .card:has(>.activityHeader){padding-top:14px;box-shadow:var(--hc-hair-all)}#homeView .activityCard{min-height:0}#homeView .activityHeader{height:28px;padding:0 18px;gap:22px;margin-bottom:10px}#homeView .activityHeader .activityIcon{display:none}:is(#homeView,.tfMoreBackdrop,.tfEditTray,.tfMiniPhone) .activityTitle{font:500 18px/1.2 var(--font-tile);font-style:normal;letter-spacing:-.01em;text-box:none}#homeView .card .activityRows{gap:0}#homeView .card .jointRows{padding:0;background:transparent}#homeView .card .activityRow{min-height:var(--tile-min);padding:var(--inset);gap:12px;border-radius:var(--r-tile);grid-template-columns:var(--chip-size) minmax(0,1fr);background:transparent}#homeView .activityRowIcon{width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);background:var(--primary);color:var(--hc-on-accent)}#homeView .activityRowName{font:600 14px/20px var(--font-tile)}#homeView .activityRowMeta{font:400 16px/1.15 var(--font);margin:0}#homeView .card .activityRow.tap{cursor:pointer}#homeView .card .activityRow:is(.tap,:has(.tfName)),#homeView .tfATile{transition:background .15s ease,box-shadow .15s ease}#homeView .card .activityRow:is(.tap,:has(.tfName)):hover,#homeView .tfATile:hover{background:var(--tile);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line)}#homeView .weatherCard{padding:20px}#homeView .wxWide{gap:16px}#homeView .wxIcon.large{border-radius:28px}#homeView .wxCondition{display:flex;flex-direction:column;justify-content:space-between;gap:10px;padding:10px 16px;border-radius:28px}#homeView .wxCondName{font:400 18px/1.2 var(--font)}#homeView .weatherCard .activityRow .wxIcon{width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner)}@media (max-width:620px){#homeView .weatherCard{padding:var(--inset)}#homeView .wxIcon.large{width:60px;height:60px;border-radius:20px}#homeView .wxDeg{font-size:46px}#homeView .wxRange{font-size:20px}}.tfLabel{grid-column:1/-1}.tfCard{grid-column:span 6;align-self:start;display:flex;flex-direction:column}.tfIcon{display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);flex:none;--mdc-icon-size:var(--glyph-size)}#app.house{--hc-icon:#3a3a3a;--hc-icon-ink:var(--text)}#app.house.light{--hc-icon:#e6e6e6}#app.house #homeView .activityRowIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}@media (max-width:620px){#app.house{--grid-gap:16px}#app.house .settingsTitle{font-size:32px}#app.house .tfAreaHead .back{margin-block:calc((32px * .92 - 40px) / 2)}#app.house .tfAreaHead .back svg{width:24px;height:24px}}@container wb-bento (width < 652px){#app.house .wbBento{gap:var(--grid-gap)}#app.house .wbItem[data-size=tile]{width:calc((100% - var(--grid-gap)) / 2)}}#app.house #homeView{overflow-anchor:none}:is(.tfCard .activityRow,.tfOpenHead) .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfCard .activityRow{display:grid;align-items:center}#homeView section.tfCard.open:has(>.activityHeader){padding:var(--inset)}.tfCard.open>.activityHeader{display:none}.tfOpen{flex:1;display:flex;flex-direction:column;gap:10px;padding:var(--inset);border-radius:28px;background:var(--tile);box-shadow:inset 0 0 0 .4px var(--hc-open-edge)}.tfOpenHead{display:flex;align-items:center;gap:12px}.tfOpenHead>div:nth-child(2){flex:1;min-width:0}.tfBack{display:grid;place-items:center;width:34px;height:34px;padding:0;border:0;background:transparent;color:var(--text);cursor:pointer}.tfBack .icon{width:34px;height:34px}.tfGraph{display:block;width:100%;flex:1;min-height:80px}.tfGraph text{fill:var(--muted);font:400 11px var(--font)}.tfAction{display:flex;flex-direction:column;gap:14px;padding:18px;border-radius:28px;background:var(--card);box-shadow:var(--hc-hair)}.tfActionHead{display:flex;align-items:center;gap:12px;min-width:0}.tfAction>.tfActionHead{margin-bottom:auto}.tfActionHead>:is(div,.tfName){min-width:0}.tfAction .tfIcon{border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer}.tfAction.on[data-light] .tfIcon{background:var(--light-soft);color:var(--light-ink)}.tfBar{position:relative;height:46px;border-radius:16px;background:var(--tile);overflow:hidden;cursor:pointer;touch-action:pan-y;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none}:is(.tfBar,.tfTilt).held{outline:2px solid var(--primary);outline-offset:-2px}.tfBar i{position:absolute;inset:0 auto 0 0;background:linear-gradient(90deg,#ffc247,#fa0)}.tfBar .was{position:absolute;top:12px;bottom:12px;width:2px;margin-left:-1px;border-radius:1px;background:var(--text);opacity:.22}.tfBar:focus-visible{outline:2px solid var(--primary);outline-offset:2px}.tfBlock{grid-column:span 6;align-self:start;display:grid;align-content:start;min-width:0;container-type:inline-size}.tfActions{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:10px}.tfAction{grid-column:span 2}@container (max-width:289px){.tfActions{grid-template-columns:1fr}.tfAction{grid-column:auto}}.tfBar:after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;box-shadow:var(--hc-hair-all);pointer-events:none}.tfAction :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#app.house .moveSection{display:none}#app.house #settingsView :is(.rubberTabs:not(.houseTabs),.settingsPane:not(#housePane)){display:none}#app.house #housePane{display:block}#housePane .houseTab{display:none}#housePane .houseTab.active{display:block}#housePane .toggleRow:has(>.switch){flex-direction:row-reverse;justify-content:flex-end}#housePane .toggleRow:has(>.switch)>div:first-child{flex:1}#housePane .toggleRow:has(>.themeChoice,>.settingsSelect){flex-direction:column;align-items:stretch;gap:12px}#housePane .toggleRow>.settingsSelect{width:100%}#housePane .themeChoice[hidden]{display:none}#housePane .houseTab>.card:has(>.tfSetGroup){gap:24px}#housePane .tfSetGroup{display:grid;gap:8px}#housePane .tfSetGroup>.sectionLabel{margin:0 16px}#housePane{container:housepane/inline-size}#housePane .tfLightCards{display:none}@container housepane (width < 720px){#housePane .houseTab .metaTableWrap{display:none}#housePane .tfLightCards{display:grid;gap:8px}}#housePane .wxLayoutBtn:disabled{opacity:.4;cursor:default}.tfTableNote{margin:0 0 12px;padding:10px 14px;border-radius:var(--r-inner);background:color-mix(in srgb,var(--primary) 14%,transparent);color:var(--text)}.tfLightTable td{white-space:nowrap}.tfLightTable td strong{font:600 14px/20px var(--font-tile)}.tfLightTable .settingsSelect{min-width:150px}.tfLightTable .settingsSelect:disabled{opacity:.4}.tfDacPad{min-width:0}.tfDacPad>dual-controller-v3{display:block}#app.house #homeView .grid>:is(#movementLabel,.activityCard,.insightCard,.feelSection){display:none}#app.house .checkinTab,#app.houseBento #weatherCard{display:none}.tfBento{grid-column:1/-1;min-width:0}.tfIcon.art{background-size:cover;background-position:center}.tfBar.ct{background:linear-gradient(90deg,#ff9e45,#ffd3a3 32%,#fff7ee 55%,#d7e7ff)}.tfBar.hue{background:linear-gradient(90deg,red,#ff0 17%,#0f0 33%,#0ff,#00f 67%,#f0f 83%,red)}.tfBar b{position:absolute;top:8px;bottom:8px;width:4px;margin-left:-2px;border-radius:2px;background:#fff;box-shadow:0 0 0 .5px #0006,0 1px 3px #00000040}.tfAction:not(.on) .tfBar:is(.ct,.hue){opacity:.45}.tfBar:is(.pos,.vol) i{background:var(--primary)}:is(.tfStep,.tfSeg,.tfBlocks,.tfTilt,.tfChips){font-family:var(--font-tile)}.tfStep{display:flex;align-items:center;height:46px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all)}.tfStep button{flex:0 1 46px;min-width:32px;height:46px;min-height:0;padding:0;border:0;border-radius:16px;background:transparent;color:var(--text);cursor:pointer}.tfStep svg{display:block;width:22px;height:22px;margin:auto;fill:currentColor}.tfStep output{flex:1 0 auto;white-space:nowrap;text-align:center;font:500 20px/1.2 var(--font-tile);font-variant-numeric:tabular-nums}.tfSeg{display:flex;gap:4px;height:46px;padding:4px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all)}.tfSeg button{flex:1;min-width:0;min-height:0;padding:0 6px;border:0;border-radius:12px;background:transparent;color:var(--muted);font:600 14px/20px var(--font-tile);cursor:pointer;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfSeg button[aria-pressed=true]{background:var(--bright);color:var(--on-bright)}.tfSeg button:not([aria-pressed]){color:var(--text)}.tfSeg button:disabled{opacity:.4;cursor:default}.tfSeg svg{display:block;width:22px;height:22px;margin:auto;fill:currentColor}#housePane .themeChoice,.tfBoardMenu .tfHeightTabs,.wb .wbSegments{gap:4px;padding:4px;border:0;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all)}#housePane .themeChoice{display:flex;flex-wrap:nowrap;width:100%}#housePane .themeChoice>button{flex:1 1 0;overflow:hidden;text-overflow:ellipsis}:is(#housePane .themeChoice :is(.wxLayoutBtn,.themeBtn),.tfBoardMenu .tfHeightTabs button,.wb .wbSegments button){height:38px;min-width:0;min-height:0;padding:0 12px;border:0;border-radius:12px!important;background:transparent;color:var(--muted);font:600 14px/20px var(--font-tile)!important;white-space:nowrap;cursor:pointer}:is(#housePane .themeChoice :is(.wxLayoutBtn,.themeBtn),.tfBoardMenu .tfHeightTabs button,.wb .wbSegments button):hover:not(:disabled):not([aria-pressed=true]):not([aria-checked=true]):not(.active){background:transparent;color:var(--text)}:is(#housePane .themeChoice :is(.wxLayoutBtn[aria-pressed=true],.themeBtn.active),.tfBoardMenu .tfHeightTabs button[aria-checked=true],.wb .wbSegments button[aria-pressed=true]){background:var(--bright);color:var(--on-bright)}.tfChips{display:flex;flex-wrap:wrap;gap:8px}.tfChips button{height:40px;min-height:0;padding:0 14px;border:0;border-radius:16px;background:var(--tile);color:var(--text);font:600 14px/20px var(--font-tile);cursor:pointer;box-shadow:var(--hc-hair-all)}.tfChips button[aria-pressed=true]{background:var(--bright);color:var(--on-bright)}.tfCard .tfPlug .tfIcon{border:0;padding:0;cursor:pointer}.tfCardGraph{height:120px;padding:0 var(--inset)}.tfCardGraph .tfGraph{height:100%}.tfAction.on[data-tone=alarm] .tfIcon{background:#e53935;color:#fff}.tfName{flex:1;display:block;min-width:0;min-height:0;padding:0;border:0;border-radius:0;background:none;color:inherit;font:inherit;text-align:left;cursor:pointer}.tfName>span{display:block}.tfTitleBtn{min-height:0;padding:0;border:0;border-radius:0;background:none;color:inherit;text-align:left;cursor:pointer}.tfAreas{grid-column:1/-1;min-width:0}.tfAreaPanel .workoutPanelTop>div{min-width:0}.tfATags{display:flex;flex-wrap:wrap;justify-content:flex-end;gap:4px;margin-left:auto;min-width:0}.tfATags .sourceTag{display:block;margin:0;max-width:100%;padding:6px 12px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfBlocks{position:relative;display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:4px;height:46px;padding:4px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all);cursor:pointer;touch-action:none;-webkit-user-select:none;user-select:none;container:blocks/inline-size}.tfBlocks>span{position:relative;display:grid;place-items:center;overflow:hidden;border-radius:4px;transition:background .12s}.tfBlocks>span:first-child{border-radius:12px 4px 4px 12px}.tfBlocks>span:nth-child(4){border-radius:4px 12px 12px 4px}.tfBlocks:not(.fine)>span:hover{background:color-mix(in srgb,var(--text) 7%,transparent)}.tfBlocks i{position:absolute;inset:0 auto 0 0;border-radius:inherit;background:var(--primary)}.tfBlocks b{position:relative;color:var(--text);font:600 14px/1 var(--font-tile);transition:opacity .15s}.tfBlocks b small{font:inherit}@container blocks (width < 164px){.tfBlocks b small{display:none}}.tfBlocks b.lit{color:#fff}.tfBlocks.fine b{opacity:0}.tfTip{position:absolute;bottom:calc(100% + 8px);z-index:2;transform:translate(-50%);padding:3px 8px;border-radius:7px;background:var(--text);color:var(--card);font:700 12px/16px var(--font-tile);white-space:nowrap;pointer-events:none;opacity:0;transition:opacity .12s}.tfBlocks.fine .tfTip{opacity:1}.tfTilt{position:relative;display:flex;align-items:center;justify-content:space-between;height:46px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all);cursor:pointer;touch-action:pan-y;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none}.tfTilt i{position:absolute;top:4px;bottom:4px;left:4px;border-radius:12px;background:var(--primary)}.tfTilt span{position:relative;padding:0 16px;color:var(--text);font:600 14px/1 var(--font-tile)}.tfTilt span.lit{color:#fff}:is(.tfBlocks,.tfTilt):focus-visible{outline:2px solid var(--primary);outline-offset:2px}.tfCoverBtns svg{fill:none}.tfCoverArt{align-self:center;width:min(294px,100%,max(150px,100vh - 520px));aspect-ratio:1;border-radius:24px;touch-action:none;-webkit-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent}.tfCoverArt.x{cursor:ew-resize}.tfCoverArt.y{cursor:ns-resize}.tfCoverArt:focus-visible{outline:none;box-shadow:0 0 0 3px var(--primary)}.tfCoverArt svg{display:block;width:100%;height:100%}.tfSide{grid-column:1/-1;align-self:start;min-width:0}.tfSideLabel{display:flex;align-items:baseline;justify-content:space-between;gap:16px;margin-right:22.4px}#homeView .tfSide.tfSums .card .activityRows{grid-template-columns:repeat(auto-fill,minmax(min(150px,calc(50% - 10px)),1fr))}#homeView .tfSide.tfFavs .card .activityRows{grid-template-columns:repeat(auto-fill,minmax(min(240px,calc(50% - 10px)),1fr))}#homeView .tfSum .tfIcon{background:var(--sum,var(--hc-icon));color:var(--sum-ink,var(--hc-icon-ink))}#app.house .tfSum{--sum-ink:var(--sum-d,var(--hc-icon-ink))}#app.house.light .tfSum{--sum-ink:var(--sum-l,var(--hc-icon-ink))}#app.house .tfSum[data-summary=climate]{--g0:var(--g0-d);--g1:var(--g1-d);--g2:var(--g2-d)}#app.house.light .tfSum[data-summary=climate]{--g0:var(--g0-l);--g1:var(--g1-l);--g2:var(--g2-l)}#app.house .tfSum[data-summary=climate] .tfIcon svg path{fill:url(#hcClimateGrad)}.tfGradDefs{position:absolute;width:0;height:0;overflow:hidden;pointer-events:none}.tfSide :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfSide .activityRow>div{min-width:0}:is(.tfCard,.tfMoreList,.tfMoreActions) .tfPlug.on[data-light] .tfIcon{background:var(--light-soft);color:var(--light-ink)}:is(.tfCard,.tfMoreList,.tfMoreActions) .tfPlug.on[data-tone=alarm] .tfIcon{background:#e53935;color:#fff}.tfMoreList{display:flex;flex-direction:column;gap:14px}.tfMoreGroupName{margin:0 0 4px 10px;color:var(--muted);font:500 13px/18px var(--font)}.tfMoreTiles{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}.tfMoreTiles.single{grid-template-columns:1fr}.tfMoreList .activityRow{display:grid;grid-template-columns:var(--chip-size) minmax(0,1fr);align-items:center;gap:12px;min-height:var(--tile-min);padding:var(--inset);border-radius:var(--r-tile);transition:background .15s ease}.tfMoreList .activityRow:hover{background:var(--tile)}.tfMoreList .activityRow .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfMoreList .tfPlug .tfIcon{border:0;padding:0;cursor:pointer}.tfMoreList .tfPick{grid-template-columns:var(--chip-size) minmax(0,1fr) auto}.tfMoreList :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfStar{display:grid;place-items:center;width:34px;height:34px;min-height:0;padding:0;border:0;background:none;color:var(--muted);cursor:pointer}.tfStar[aria-pressed=true]{color:#fa0}.tfStar svg{width:24px;height:24px}.tfMoreHead .activityTitle{flex:1;min-width:0}.tfMoreBackdrop{position:fixed;top:0;right:0;bottom:0;left:0;z-index:180;display:grid;place-items:center;padding:16px;background:#00000073}.tfMoreBackdrop,.tfMore,.tfMoreSideInner,.tfMoreSideBody{overscroll-behavior:contain}.tfMoreBackdrop[hidden]{display:none}.tfMoreBackdrop.tfMoreUnder{z-index:179;pointer-events:none}.tfMore{flex:none;width:440px;max-width:100%;min-height:0;overflow:auto;display:flex;flex-direction:column;gap:14px;padding:20px;border-radius:var(--r-card);background:var(--card);box-shadow:var(--hc-hair-all)}.tfMoreHead{display:flex;align-items:center;justify-content:space-between;gap:12px;min-height:34px}.tfMoreState{font:500 28px/1.15 var(--font-tile);letter-spacing:-.01em}.tfMoreSub{margin-top:3px;color:var(--muted);font:500 13px/18px var(--font)}.tfMoreState.live{color:var(--primary)}.tfMoreRows{display:flex;flex-direction:column}.tfMoreRow{display:flex;justify-content:space-between;gap:16px;padding:10px 0;box-shadow:inset 0 -.4px 0 var(--line);font:400 14px/20px var(--font)}.tfMoreRow span:first-child{color:var(--muted)}.tfMoreNote{color:var(--muted);font:400 12px/16px var(--font)}@media (max-width:1199px) and (min-width:901px){.tfCard{grid-column:span 6}.tfBlock{grid-column:span 12}}@media (max-width:900px){.tfCard,.tfBlock{grid-column:auto}}.tfMoreTileHead .tfName{display:grid;flex:1;min-width:0;cursor:default}.tfMoreTileHead :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfMoreTileHead .tfIcon{border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer}.tfMoreTileHead div.tfIcon{cursor:default}.tfMoreTileHead.on[data-light] .tfIcon{background:var(--light-soft);color:var(--light-ink)}.tfMoreTileHead.on[data-tone=alarm] .tfIcon{background:#e53935;color:#fff}.tfMorePages{display:grid;grid-auto-flow:column;grid-auto-columns:100%;align-items:start;gap:20px;flex:none;overflow-x:auto;overflow-y:hidden;overscroll-behavior-x:contain;scroll-snap-type:x mandatory;scrollbar-width:none;transition:height .25s cubic-bezier(.2,.7,.3,1)}@media (prefers-reduced-motion:reduce){.tfMorePages{transition:none}}.tfMorePages::-webkit-scrollbar{display:none}.tfMorePage{display:flex;flex-direction:column;gap:14px;min-width:0;scroll-snap-align:start;scroll-snap-stop:always}.tfMoreSpace{flex:none;display:flex;flex-direction:column;justify-content:space-between;gap:12px;height:224px;padding:18px;border-radius:16px;background:var(--tile);overflow:hidden}.tfMoreSpace.tfMoreFill{justify-content:center;align-items:center;height:auto;padding:0;background:none;border-radius:0}.tfMoreSpace.tfMoreFill>.tfCoverArt{width:100%;height:auto;max-width:none;align-self:center}.tfMoreSpace.tfMoreFill>.tfDacPad{width:100%;height:100%}.tfMoreBig{display:flex;align-items:baseline;min-width:0;font:500 64px/1 var(--font-tile);letter-spacing:-.03em;white-space:nowrap}.tfMoreBig.live{color:var(--primary)}.tfMoreNum{overflow:hidden;text-overflow:ellipsis}.tfMoreUnit{margin-inline-start:6px;font-size:24px;letter-spacing:0}.tfMoreFacts{display:flex;flex:1;flex-direction:column;justify-content:space-evenly;min-height:0}.tfMoreFact{display:flex;justify-content:space-between;gap:16px;font:400 14px/20px var(--font)}.tfMoreFact span:first-child{color:var(--muted)}.tfMoreFact span{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfMoreGraph{display:flex;flex:none;flex-direction:column;gap:6px}.tfMoreGraph .tfMoreGroupName{margin:0}.tfMoreGraph .tfGraph.tfDay{width:100%}.tfMoreDots{display:flex;flex:none;justify-content:center;gap:4px;margin-top:-4px}.tfMoreDots button{display:grid;place-items:center;width:24px;height:24px;min-height:0;padding:0;border:0;background:none;cursor:pointer}.tfMoreDots button:before{content:"";width:8px;height:8px;border-radius:50%;background:var(--muted);opacity:.45;transition:opacity .15s ease,background .15s ease}.tfMoreDots button[aria-selected=true]:before{background:var(--text);opacity:1}.tfMoreDots.tfMorePageIcons{gap:3px;align-self:center;margin-top:0;padding:3px;border-radius:19px;background:var(--tile)}.tfMoreDots.tfMorePageIcons button{width:48px;height:32px;border-radius:16px;color:var(--muted);transition:background .15s ease,color .15s ease}.tfMoreDots.tfMorePageIcons button:before{display:none}.tfMoreDots.tfMorePageIcons button svg{width:20px;height:20px;fill:currentColor}.tfMoreDots.tfMorePageIcons button[aria-selected=true]{background:var(--text);color:var(--card)}.tfMoreDots.tfMorePageIcons button:not([aria-selected=true]):hover{color:var(--text)}#homeView .grid>.tfDashTiles>.tfAction.tfHeadOnly,#homeView .grid .tfAction.tfHeadOnly{align-self:start}.tfMoreLink{margin-top:auto}.tfMoreLink svg{transform:none!important}.tfMorePage .tfMoreRows{flex:none}#app.showDensity #homeView :is(.card,.tfAction){position:relative;outline:1px dashed color-mix(in srgb,var(--primary) 70%,transparent);outline-offset:-1px}#app.showDensity #homeView :is(.card,.tfAction):after{content:attr(data-h);position:absolute;top:6px;right:12px;z-index:5;padding:2px 8px;border-radius:99px;background:var(--primary);color:#fff;font:600 11px/16px var(--font);pointer-events:none}.densityBadge{position:fixed;left:50%;bottom:calc(16px + env(safe-area-inset-bottom,0px));z-index:80;transform:translate(-50%);display:flex;align-items:center;gap:10px;padding:8px 16px;border-radius:99px;background:var(--bright);color:var(--on-bright);font:600 13px/18px var(--font);box-shadow:0 6px 20px #00000040;pointer-events:none;white-space:nowrap}.densityBadge[hidden]{display:none}.densityBadge b{font-variant-numeric:tabular-nums}.densityBadge small{font-weight:400;opacity:.75}#homeView .card:is(.activityCard,.insightCard,.tfCard,.weatherCard){container-type:inline-size}#homeView .card:is(.activityCard,.insightCard,.tfCard,.weatherCard) .activityRows{grid-template-columns:repeat(2,minmax(0,1fr));gap:0}@container (max-width:279px){#homeView .card .activityRows{grid-template-columns:1fr}}@media (min-width:1200px){#homeView .grid>.card:is(.activityCard,.insightCard){grid-column:span 6}#homeView .grid>.weatherCard{grid-column:span 6}}.tfMorePair{position:relative;display:flex;align-items:stretch;max-width:100%;max-height:calc(100vh - 32px);max-height:calc(100dvh - 32px)}#app[data-more=sheet] .tfMoreBackdrop{place-items:end center;padding:0}#app[data-more=sheet] .tfMorePair{max-height:85vh;animation:tfSheetIn .28s cubic-bezier(.2,.7,.3,1)}#app[data-more=sheet] .tfMorePair.still{animation:none}#app[data-more=sheet] .tfMore{width:min(640px,100vw)}#app[data-more=sheet] :is(.tfMore,.tfMoreSideInner){border-radius:var(--r-card) var(--r-card) 0 0}@keyframes tfSheetIn{0%{transform:translateY(100%)}}.tfDetailsBtn{display:flex;flex:none;align-items:center;justify-content:space-between;gap:12px;width:100%;height:46px;min-height:0;padding:0 12px 0 16px;border:0;border-radius:16px;background:var(--tile);color:var(--text);font:600 14px/20px var(--font-tile);cursor:pointer}.tfDetailsBtn svg{width:20px;height:20px;transition:transform .2s ease}.tfDetailsBtn[aria-expanded=true] svg{transform:rotate(180deg)}.tfMoreSide{position:absolute;top:0;bottom:0;left:100%;width:0;overflow:hidden;visibility:hidden;transition:width .28s cubic-bezier(.2,.7,.3,1),visibility 0s linear .28s}.tfMorePair.details .tfMoreSide{width:312px;visibility:visible;transition:width .28s cubic-bezier(.2,.7,.3,1)}.tfMoreSideInner{box-sizing:border-box;display:flex;flex-direction:column;gap:14px;width:300px;height:100%;margin-left:12px;padding:20px;overflow:auto;border-radius:var(--r-card);background:var(--card);box-shadow:var(--hc-hair-all)}.tfMoreSideInner .tfMoreHead{justify-content:flex-start}.tfMorePair.over .tfMoreSide{position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;width:auto;transform:translate(24px);opacity:0;transition:transform .25s cubic-bezier(.2,.7,.3,1),opacity .2s ease,visibility 0s linear .25s}.tfMorePair.over.details .tfMoreSide{width:auto;transform:none;opacity:1;transition:transform .25s cubic-bezier(.2,.7,.3,1),opacity .2s ease}.tfMorePair.over .tfMoreSideInner{width:100%;margin:0}@media (max-width:620px){.tfMoreSideInner{border-radius:var(--r-card) var(--r-card) 0 0}}@media (prefers-reduced-motion:reduce){.tfMorePair,.tfMoreSide{animation:none!important;transition:none!important}}#homeView .workoutPanel.tfAreaPanel{padding:18px 20px 10px}.tfAreaPanel .tfATiles{margin-inline:-10px}.tfAreaPanel .workoutPanelTop{justify-content:flex-start;gap:14px;padding:0}.tfAreaPanel .panelExpanded{justify-content:flex-start;gap:16px}.tfAreaPanel .icon{width:22px;height:22px}.tfATitle{display:flex;flex-direction:column;align-items:flex-start;min-width:0}#app .tfAName{max-width:100%;min-height:0;padding:0;border:0;border-radius:6px;background:none;color:var(--text);font:700 24px/1.2 var(--font-tile);letter-spacing:-.01em;text-align:start;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;cursor:pointer}.tfAreaIcon{flex:none;border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);--mdc-icon-size:22px}button.tfAreaIcon{cursor:pointer}.tfAreaGlyph{display:grid;place-items:center}.tfAreaHead{grid-column:1/-1;margin-bottom:0}#app.tfAreaOpen:not(.tfWeatherOpen) #homeView .grid>.tfBento{display:none}#app.tfWeatherOpen #homeView .grid>.tfBento .wbBento{margin:0;padding:0;justify-content:flex-start}#app.tfWeatherOpen .tfBento.tfPegs .wbBento{display:grid;grid-template-columns:repeat(var(--peg-n),var(--peg-w));grid-auto-rows:60px;grid-auto-flow:row dense;align-items:stretch;gap:16px;max-width:none}#app.tfWeatherOpen .tfBento.tfPegs .wbItem{width:auto;min-height:0;align-self:stretch;display:flex;flex-direction:column}#app.tfWeatherOpen .tfBento.tfPegs .wbItem>*{flex:1;min-height:0}#app.tfWeatherOpen .tfBento.tfPegs .wbItem[data-size=wide]{grid-column:span 2;grid-row:span 5}#app.tfWeatherOpen .tfBento.tfPegs .wbItem[data-size=double]{grid-column:span 2;grid-row:span 4}#app.tfWeatherOpen .tfBento.tfPegs .wbItem[data-size=tile]{grid-column:span 1;grid-row:span 4}#app.tfWeatherOpen .tfBento.tfPegs .wbCard.wbSquare{aspect-ratio:auto}#app.tfWeatherOpen .tfBento.tfPegs .wbWeather .wbNow{margin-bottom:auto}#app.tfWeatherOpen .tfBento.tfPegs :is(.wbStripScroll,.wbBars .wbDayBars,.wbBars.wbTabbed .wbDayBars){min-height:0}.tfABig{display:flex;flex-direction:column;align-items:flex-start;gap:4px;margin-top:auto;min-height:0;height:auto;padding:0;border:0;border-radius:8px;background:none;color:var(--text);text-align:start;cursor:pointer}.tfABigMain{font:500 64px/1 var(--font-tile);letter-spacing:-.03em;white-space:nowrap}.tfABigMain.long{font-size:40px}.tfABigUnit{margin-inline-start:6px;font-size:24px;letter-spacing:0}.tfABigSub{max-width:100%;overflow:hidden;color:var(--muted);font:400 16px/1.2 var(--font);white-space:nowrap;text-overflow:ellipsis}.tfATiles{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));min-height:calc(2 * var(--tile-min));align-content:end}.tfABig{max-width:100%}.panelExpanded:not(:has(.tfATiles)) .tfABig{margin-bottom:calc(2 * var(--tile-min) + 16px)}#app.tfBoard .tfAreas[data-rows="5"] .tfACMain{position:absolute;left:10px;right:10px;bottom:170.3px;max-width:none;text-align:center}#app.tfBoard .tfAreas[data-rows="4"] .tfACMain{position:absolute;left:10px;right:10px;bottom:164.1px;max-width:none;text-align:center}#app.tfBoard .tfAreas[data-rows="4"] .panelExpanded:not(:has(.tfATiles)) .tfABig{margin-bottom:calc(2 * var(--tile-min) + 12px)}.tfATile{display:grid;grid-template-columns:var(--chip-size) minmax(0,1fr);align-items:center;gap:12px;min-height:var(--tile-min);padding:var(--inset);border-radius:var(--r-tile)}.tfATile>:is(div,.tfName):last-child{min-width:0}.tfATile .tfIcon{border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer}.tfATile.on[data-light] .tfIcon{background:var(--light-soft);color:var(--light-ink)}.tfATile :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfACollapsed{flex-direction:column;justify-content:space-between;padding:18px 0 10px;container-type:inline-size}.tfACTop{display:flex;flex-direction:column;align-items:center;gap:6px;max-width:calc(100% - 20px)}.tfACMain{max-width:calc(100% - 20px);font:200 32px/1.2 var(--font-tile);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfACName{max-width:100%;font:600 16px/17.5px var(--font);letter-spacing:-.1px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfACTiles{display:grid;grid-template-columns:repeat(2,60px);min-height:60px}.tfACTiles:has(>:nth-child(3)){margin-top:-60px}.tfACTile{display:grid;place-items:center;width:60px;height:60px}.tfACTile .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfACTile .tfIcon[data-light]{background:var(--light-soft);color:var(--light-ink)}.tfACTile .tfIcon.alert{background:#e53935;color:#fff}@container (max-width:119px){.tfACTiles{grid-template-columns:60px}.tfACTile:nth-child(n+3){display:none}.tfACTiles:has(>:nth-child(2)){margin-top:-60px}}.tfMore.wide{width:min(1040px,100vw - 32px);padding:40px;gap:28px;background:var(--bg)}#app[data-more=sheet] .tfMore.wide{width:min(1040px,100vw)}.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreSideInner{gap:28px;padding:40px;background:var(--bg)}#app :is(.tfMore.wide>.tfMoreHead,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreHead){margin:-20px -20px 0 0}#app :is(.tfMore.wide>.tfMoreHead,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreHead) .activityTitle{font-size:24px}@media (max-width:620px){#app :is(.tfMore.wide>.tfMoreHead,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreHead){margin:0}}@media (min-width:621px){#app:not([data-more=sheet]) .tfMoreBackdrop.wide{place-items:start center}}.tfMoreNowRow{display:flex;align-items:center;justify-content:space-between;gap:16px}.tfMore.wide .tfMoreGroup{display:flex;flex-direction:column;gap:14px}.tfMore.wide .tfMoreGroupName{margin:0;color:var(--text);font:400 18px/1.2 var(--font);letter-spacing:-.01em}.tfMoreActions{display:grid;grid-template-columns:repeat(auto-fill,minmax(min(260px,100%),1fr));gap:20px}.tfMoreActions .tfAction{grid-column:auto}.tfMoreActions>.activityRow{align-self:start;display:grid;grid-auto-flow:column;grid-template-columns:auto minmax(0,1fr);align-items:center;align-content:start;gap:12px;min-width:0;padding:18px;border-radius:28px;background:var(--card);box-shadow:var(--hc-hair)}.tfMoreActions>.activityRow .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfMoreActions>.tfPlug .tfIcon{border:0;padding:0;cursor:pointer}.tfMoreActions>.activityRow :is(.activityRowName,.activityRowMeta){display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfMoreActions>.activityRow.alert .activityRowMeta{color:var(--danger)}@media (max-width:620px){.tfMore.wide,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreSideInner{width:100%;padding:20px 16px;gap:20px}}#app.tfDash #homeView{max-width:none;container:tfdash/inline-size}#app.tfDash #homeView .grid{display:flex;flex-wrap:wrap;align-items:flex-start;align-content:flex-start}#app.tfDash .tfDashTitle{order:1!important;flex:0 0 100%;margin:0}#app.tfDash .tfDashBarRow{order:2!important;flex:0 0 100%;display:flex;min-width:0}#app.tfDash .tfDash-wx{order:var(--o,3)!important}#app.tfDash .tfAreas{order:var(--o,4)!important}#app.tfDash .tfDash-favs{order:var(--o,5)!important}#app.tfDash .tfDash-act{order:var(--o,6)!important}#app.tfDash .tfDash-energy{order:var(--o,7)!important}#app.tfDash .tfDash-avg{order:var(--o,8)!important}#app.tfDash :is(.tfDash-aq,.tfDash-pollen,.tfDash-radar){order:var(--o,8)!important}#app.tfDash .tfDashTiles>*{order:var(--o,9)}#app.tfDash :is(.tfDash-wx,.tfDash-favs,.tfDash-act,.tfDash-energy,.tfDash-avg){flex:1 1 460px;max-width:520px;min-width:0}@container tfdash (width < 640px){#app.tfDash :is(.tfDash-wx,.tfDash-favs,.tfDash-act,.tfDash-energy,.tfDash-avg){flex-basis:100%;max-width:none}}#app .tfNotAdded{display:none!important}#app.tfDash .tfAreas{flex:none;width:min(var(--areas-w,1131px),100%)}@media (min-width:901px){#app.tfDash .tfAreaGallery{overflow-x:auto;scrollbar-width:none}#app.tfDash .tfAreaGallery::-webkit-scrollbar{display:none}#app.tfDash .tfAreaPanel.active{flex:1 0 409px}#app.tfDash .tfAreaPanel:not(.active){flex:0 0 128px}}#app.tfDash .tfDash-bar{flex:none;max-width:100%}#app.tfDash #homeView .card.tfDash-bar{container-type:normal}#homeView .card.tfDash-bar .activityRows{display:grid;grid-template-columns:repeat(var(--bar-cols,6),auto)}#homeView .card.tfDash-bar .activityRow{min-width:200px}#app.tfDash .tfDash-bar :is(.activityRowName,.activityRowMeta){overflow:visible;text-overflow:clip}@container tfdash (width < 640px){#app.tfDash .tfDash-bar{width:100%}#homeView .card.tfDash-bar .activityRows{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}#homeView .card.tfDash-bar .activityRow{min-width:0}#app.tfDash .tfDash-bar :is(.activityRowName,.activityRowMeta){overflow:hidden;text-overflow:ellipsis}#app.tfDash .tfDashTitle{padding:0 16px;box-sizing:border-box}}#app.tfDash .tfDashCard:not(.tfDash-bar){container-type:inline-size}#homeView .card.tfDash-act .activityRows{grid-template-columns:minmax(0,1fr)}#homeView .card.tfDash-act>.activityRows{flex:none;margin-top:auto;max-height:300px;overflow-y:auto;overscroll-behavior:contain;scroll-snap-type:y mandatory;scroll-behavior:smooth;scrollbar-width:thin;scrollbar-color:color-mix(in srgb,var(--text) 25%,transparent) transparent}#homeView .card.tfDash-act>.activityRows>.activityRow{scroll-snap-align:start}#homeView .card.tfDash-energy .activityRows{grid-template-columns:repeat(auto-fit,minmax(140px,1fr))}.tfDashCard :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfDashCard .activityRow>*{min-width:0}.tfDashNone{margin:0;padding:var(--inset) 18px;color:var(--muted)}.tfDashBento{display:flex;flex-direction:column;min-width:0}#app:not(.tfDash) .tfDashBento{display:none}.tfDashBento:not(:has(.wbItem:not([hidden]))){display:none}.tfDashBento .wb{flex:1;display:flex;flex-direction:column;min-width:0}.tfDashBento .wbBento{flex:1;max-width:none;margin:0;padding:0;display:flex;align-items:stretch}#app .tfDashBento .wbItem{width:100%;align-self:stretch;display:flex;flex-direction:column}#app.house .tfDashBento .wbItem[data-size]{width:100%}#app .tfDashBento .wbItem>.wbCard{flex:1;min-height:0}.tfDash-wx .wbCondition{display:none}#app.tfDash .tfDashTiles{display:contents}.tfDashTiles>:is(.tfAction,.tfDac){flex:none;align-self:stretch;width:calc((100% - var(--grid-gap,8px)) / 2);min-width:0;grid-column:auto}#app.tfBoard #homeView .grid{display:block;position:relative}#app.tfBoard .tfBoardItem{position:absolute;z-index:1;margin:0;max-width:none;min-height:0;box-sizing:border-box}#app.tfEditing.tfBoardReady .tfBoardItem{transition:left .25s cubic-bezier(.2,.7,.3,1),top .25s cubic-bezier(.2,.7,.3,1),height .25s cubic-bezier(.2,.7,.3,1)}#app.tfBoard .tfBoardHidden{display:none!important}#app.tfBoard .tfDashBento .wbWeather .wbNow{margin-bottom:auto}#app.tfBoard .tfDashBento .wbCard.wbSquare{aspect-ratio:auto}#app.tfBoard .tfAreas .workoutGallery,#app.tfBoard .tfAreas .workoutPanel{height:100%;min-height:0}.tfBoardCells{position:absolute;top:0;left:0;z-index:0;pointer-events:none;color:var(--text)}.tfBoardCells svg{display:block;overflow:visible}.tfBoardCells pattern circle{fill:currentColor;fill-opacity:.16}.tfBoardCells .tfGridCross{fill:none;stroke:currentColor;stroke-opacity:.45;stroke-width:1.5;stroke-linecap:round}#app.tfEditing .tfBoardItem:not(.tfDashTitle,.tfDashBarRow,.tfDashBento){outline:1.5px solid var(--primary);outline-offset:-1.5px;border-radius:var(--r-card)}#app.tfEditing .tfBoardItem:is(.tfAction,.tfDac){border-radius:28px}#app.tfEditing .tfAreas{border-radius:24px}#app.tfEditing .tfDashBento .wbCard{outline:1.5px solid var(--primary);outline-offset:-1.5px}#app.tfEditing .tfBoardItem:not(.tfDashTitle,.tfDashBarRow){cursor:grab;overflow:visible;-webkit-user-select:none;user-select:none;touch-action:none}.tfEditChips{position:absolute;inset:-8px -8px auto -8px;z-index:5;height:40px;display:flex;justify-content:flex-end;pointer-events:none}.tfEditGrip{position:absolute;top:-10px;left:50%;display:grid;place-items:center;width:80px;height:40px;border-radius:var(--r-inner);background:var(--text);color:var(--card);transform:translate(-50%);pointer-events:auto;cursor:grab}.tfEditGrip svg{width:24px;height:24px;fill:currentColor}.tfEditChip{display:grid;place-items:center;width:28px;height:28px;min-height:0;padding:0;border:0;border-radius:50%;background:var(--text);color:var(--card);pointer-events:auto;cursor:pointer}.tfEditChip svg{width:18px;height:18px;fill:currentColor}.tfEditChip:focus-visible{outline:2px solid var(--primary);outline-offset:2px}#app.tfEditing .tfBoardItem.tfDragging{z-index:20;transition:none!important;scale:1.02;cursor:grabbing;filter:drop-shadow(0 10px 30px rgba(0,0,0,.35))}.tfBoardLand{position:absolute;z-index:1;box-sizing:border-box;border:1.5px dashed var(--primary);border-radius:28px;background:color-mix(in srgb,var(--primary) 8%,transparent);pointer-events:none;transition:left .2s,top .2s,width .2s,height .2s}.tfBoardMenu{position:absolute;z-index:30;display:grid;gap:2px;min-width:200px;padding:6px;border-radius:var(--r-tile);background:var(--card);box-shadow:var(--hc-hair-all),0 10px 30px #00000059}.tfBoardMenu button{display:flex;align-items:center;min-height:40px;padding:0 12px;border:0;border-radius:var(--r-inner);background:transparent;color:var(--text);font:500 14px/20px var(--font);text-align:start;cursor:pointer}.tfBoardMenu button:hover:not(:disabled),.tfBoardMenu button:focus-visible{background:var(--tile);outline:none}.tfBoardMenu button:disabled{opacity:.4;cursor:default}.tfHeight{display:grid;gap:6px;padding:6px 6px 8px}.tfHeightLabel{padding:0 6px;color:var(--muted);font:500 12px/16px var(--font)}.tfHeightTabs{display:grid;grid-template-columns:repeat(5,1fr)}.tfBoardMenu .tfHeightTabs button{justify-content:center}.tfBoardMenu .tfHeightTabs button:disabled{opacity:.35}.tfWidth{padding-top:0}.tfWidth .tfHeightTabs{grid-template-columns:repeat(3,auto)}.tfBoardMenu .tfWidth .tfHeightTabs button{white-space:nowrap}#app.tfBoard .tfBoardItem:is(.tfDash-favs,.tfDash-act)>.activityRows{grid-auto-rows:var(--fill-row,60px);margin-top:0}#app.tfBoard .tfBoardItem:is(.tfDash-favs,.tfDash-act)>.activityRows>.activityRow{min-height:0;height:var(--fill-row,60px);box-sizing:border-box}#app.tfBoard .tfBoardItem.tfDashCard[data-rows="1"]{padding:0;gap:0}#app.tfBoard .tfBoardItem.tfDashCard[data-rows="1"]>.activityHeader,#app.tfBoard .tfBoardItem.tfDashCard[data-rows="1"]>.tfDashGraph{display:none}#app.tfBoard .tfBoardItem.tfDashCard[data-rows="1"]>.activityRows{margin:0;flex:1}#app.tfBoard .tfBoardItem.tfAction[data-rows="1"]{padding:10px;border-radius:24px}.tfRoomTile{cursor:pointer}.tfRoomTile .tfRoomIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfRoomInline,.tfRoomSub{display:none}.tfRoomReading{display:flex;flex-direction:column;gap:4px;min-width:0}.tfRoomBig{overflow:hidden;color:var(--text);font:500 46px/46px var(--font-tile);letter-spacing:-.92px;white-space:nowrap;text-overflow:ellipsis}.tfRoomSub{overflow:hidden;color:var(--muted);font:400 16px/19px var(--font);white-space:nowrap;text-overflow:ellipsis}.tfRoomDevices{display:flex;gap:12px}.tfRoomDevices .tfIcon{border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer}.tfRoomDevices .tfIcon.on[data-light]{background:var(--light-soft);color:var(--light-ink)}#app.tfBoard .tfRoomTile[data-rows="1"] .tfRoomInline{display:inline}#app.tfBoard .tfRoomTile[data-rows="1"] :is(.tfRoomReading,.tfRoomDevices),#app.tfBoard .tfRoomTile[data-rows="2"] .tfRoomDevices{display:none}#app.tfBoard .tfRoomTile:is([data-rows="4"],[data-rows="5"]) .tfActionHead .activityRowMeta{display:none}#app.tfBoard .tfRoomTile:is([data-rows="4"],[data-rows="5"]) .tfRoomSub{display:block}#app.tfBoard .tfRoomTile[data-rows="4"] .tfRoomBig{font-size:52px;line-height:52px;letter-spacing:-1.92px}#app.tfBoard .tfRoomTile[data-rows="5"] .tfRoomBig{font-size:64px;line-height:64px;letter-spacing:-1.92px}#app.tfBoard .tfRoomTile[data-cols="1"]:is([data-rows="3"],[data-rows="4"],[data-rows="5"]) .tfRoomDevices{display:grid;grid-template-columns:repeat(2,max-content)}#app.tfBoard .tfRoomTile[data-cols="1"][data-rows="3"]:has(.tfRoomDevices) .tfRoomInline{display:inline}#app.tfBoard .tfRoomTile[data-cols="1"][data-rows="3"]:has(.tfRoomDevices) .tfRoomReading{display:none}#app.tfBoard .tfRoomTile[data-cols="1"]:is([data-rows="4"],[data-rows="5"]) .tfRoomDevices{min-height:calc(2 * var(--chip-size) + 12px);align-content:start}.tfRoomHeads{display:none;gap:12px 16px}.tfRoomDev{display:flex;align-items:center;gap:12px;min-width:0;padding:0;border:0;background:none;color:inherit;font:inherit;text-align:left;cursor:pointer}.tfRoomDev .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfRoomDev .tfIcon.on[data-light]{background:var(--light-soft);color:var(--light-ink)}.tfRoomDevName{display:flex;flex-direction:column;min-width:0}.tfRoomDevName>span{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}#app.tfBoard .tfRoomTile[data-rows="1"]:not([data-cols="1"]){flex-direction:row;align-items:center;gap:12px}#app.tfBoard .tfRoomTile[data-rows="1"]:not([data-cols="1"])>.tfActionHead{flex:1;margin-bottom:0}#app.tfBoard .tfRoomTile[data-rows="1"]:not([data-cols="1"]) .tfRoomDevices{display:flex}#app.tfBoard .tfRoomTile:not([data-cols="1"]):not([data-rows="1"]) .tfRoomDevices{display:none}#app.tfBoard .tfRoomTile:not([data-cols="1"]):not([data-rows="1"]) .tfRoomHeads{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}#app.tfBoard .tfRoomTile:not([data-cols="1"]):not([data-cols="2"]):not([data-rows="1"]) .tfRoomHeads{grid-template-columns:repeat(4,minmax(0,1fr))}#app.tfBoard .tfRoomTile[data-cols="2"][data-rows="2"] .tfRoomDev:nth-child(n+3){display:none}#app.tfBoard .tfRoomTile:not([data-cols="1"]):is([data-rows="2"],[data-cols="2"][data-rows="3"]):has(.tfRoomDevices) .tfRoomInline{display:inline}#app.tfBoard .tfRoomTile:not([data-cols="1"]):is([data-rows="2"],[data-cols="2"][data-rows="3"]):has(.tfRoomDevices) .tfRoomReading{display:none}#app.tfBoard .tfDashBento[data-rows="1"] .wbCard{padding:10px;border-radius:24px}#app.tfBoard .tfDashBento[data-rows="1"] .wbVisual{display:none}#app.tfBoard .tfDash-wx[data-rows="1"] .wbNow{margin:0}#app.tfBoard .tfDash-wx[data-rows="1"] .wbWx.wbS90{width:40px;height:40px;border-radius:12px}#app.tfBoard .tfDashBento[data-rows] :is(.wb,.wbBento,.wbItem){height:100%;min-height:0}#app.tfBoard .tfDashBento[data-rows] .wbCard{height:100%;min-height:0;box-sizing:border-box;aspect-ratio:auto}#app.tfBoard .tfDash-wx[data-rows="1"] .wbDeg{font-size:20px;letter-spacing:0;line-height:22px}#app.tfBoard .tfDash-wx[data-rows="1"] .wbPlace{font-size:13px;line-height:18px}#app.tfBoard .tfDash-wx[data-rows="1"] .wbTempBlock{gap:0}#app.tfBoard .tfDash-wx[data-rows="1"] .wbUnit{font-size:14px;line-height:22px}#app.tfBoard .tfDash-wx[data-rows="2"] .wbWx.wbS90{width:100px;height:100px;border-radius:31px}#app.tfBoard .tfDash-wx[data-rows="2"] .wbDeg{font-size:80px;line-height:80px}#app.tfBoard .tfDash-wx[data-rows="2"] .wbUnit{font-size:30px;line-height:38px}#app.tfBoard .tfDash-wx[data-rows="2"] .wbTempBlock{gap:0}#app.tfBoard .tfDash-wx[data-rows="2"]:not([data-narrow]) .wbWeather{flex-direction:row;align-items:center;gap:16px}#app.tfBoard .tfDash-wx[data-rows="2"]:not([data-narrow]) .wbNow{flex:none}#app.tfBoard .tfDash-wx[data-rows="2"]:not([data-narrow]) .wbNextHours{display:flex;flex:1 1 0}#app.tfBoard .tfDash-wx[data-rows="3"]:not([data-narrow]) .wbWeather{justify-content:center;padding-top:0;padding-bottom:0}#app.tfBoard .tfDash-wx[data-rows="3"]:not([data-narrow]) :is(.wbNow,.wbSummary){display:none}#app.tfBoard .tfDash-wx[data-rows="3"]:not([data-narrow]) .wbColumns{display:flex;flex:none;height:185px}#app.tfBoard .tfDash-wx[data-rows="3"]:not([data-narrow]) .wbAsDay{display:none}#app.tfBoard .tfDash-wx[data-rows="3"]:not([data-narrow]) .wbAsNow{display:inline}#app.tfBoard .tfDash-wx[data-narrow] .wbCard.wbWeather{gap:12px;padding:18px}#app.tfBoard .tfDash-wx[data-narrow]:not([data-rows="1"]) .wbWx.wbS90{width:64px;height:64px;border-radius:20px}#app.tfBoard .tfDash-wx[data-narrow]:not([data-rows="1"]) .wbDeg{font-size:46px;line-height:46px;letter-spacing:-.92px}#app.tfBoard .tfDash-wx[data-narrow]:not([data-rows="1"]) .wbUnit{font-size:20px;line-height:26px}#app.tfBoard .tfDash-wx[data-narrow]:not([data-rows="1"]) .wbTempBlock{gap:0}#app.tfBoard .tfDash-wx[data-narrow] .wbHalves{display:none}#app.tfBoard .tfDash-wx[data-narrow][data-rows="3"] .wbNextHours{display:flex;margin-top:auto}#app.tfBoard .tfDash-wx[data-narrow] .wbHour:nth-child(n+4){display:none}#app.tfBoard .tfDash-wx[data-narrow]:is([data-rows="4"],[data-rows="5"]) .wbColumns{display:flex;flex:none;height:auto;margin-top:auto}#app.tfBoard .tfDash-wx[data-narrow]:is([data-rows="4"],[data-rows="5"]) .wbColumn:nth-child(n+4){display:none}#app.tfBoard .tfDash-wx[data-narrow][data-rows="5"] .wbSummary{display:block}#app.tfBoard .tfDash-wx:not([data-narrow]):is([data-rows="4"],[data-rows="5"]) .wbHalves{display:none}#app.tfBoard .tfDash-wx:not([data-narrow]):is([data-rows="4"],[data-rows="5"]) .wbColumns{display:flex;margin-top:auto}#app.tfBoard .tfDash-wx:not([data-narrow])[data-rows="5"] .wbSummary{display:block}#app.tfBoard .tfDash-wx:is([data-rows="1"],[data-rows="2"],[data-rows="4"]) .wbSummary{display:none}#app.tfBoard .tfDash-wx:is([data-rows="1"],[data-rows="2"],[data-rows="3"]) :is(.wbColumns,.wbHalves){display:none}#app.tfBoard .tfDash-wx[data-rows="4"] .wbColumns{flex:1 1 0;height:auto;min-height:0;margin-top:0}#app.tfBoard .tfDash-wx:is([data-rows="4"],[data-narrow][data-rows="5"]) .wbColumn{justify-content:flex-start;gap:8px;padding:12px 0 16px}#app.tfBoard .tfDash-wx:is([data-rows="4"],[data-narrow][data-rows="5"]) .wbColumn .wbWx{width:40px;height:40px;border-radius:16px}#app.tfBoard .tfDash-wx:is([data-rows="4"],[data-narrow][data-rows="5"]) .wbTemps{gap:4px}#app.tfBoard .tfDash-wx[data-rows="4"] .wbHalves>:nth-child(n+5){display:none}#app.tfBoard .tfDash-energy[data-rows="2"] .tfDashGraph{display:none}#app.tfBoard .tfDash-energy:is([data-rows="1"],[data-rows="2"],[data-rows="3"]) .activityRows{grid-template-columns:none;grid-auto-flow:column;grid-auto-columns:minmax(0,1fr)}#app.tfBoard .tfDash-energy[data-rows="3"] .tfDashGraph{min-height:0}#app.tfBoard .tfDashBento[data-rows="2"] .wbBaseRows{display:none}#app.tfBoard .tfDashBento[data-rows="2"] :is(.wbRadar,.wbCompareBars,.wbCompareWords,.wbCompareTemps){display:none}#app.tfBoard .tfDashBento[data-rows="3"] :is(.wbCompareWords,.wbCompareTemps){display:none}#app.tfBoard .tfAreas[data-rows="1"] .workoutPanel.tfAreaPanel{padding:10px}#app.tfBoard .tfAreas[data-rows="1"] .panelExpanded{display:grid;grid-template-columns:40px minmax(0,1fr);gap:0 12px;align-content:center}#app.tfBoard .tfAreas[data-rows="1"] :is(.panelExpanded>.workoutPanelTop,.tfACTop){display:contents}#app.tfBoard .tfAreas[data-rows="1"] .panelExpanded .tfAreaIcon{grid-row:span 2}#app.tfBoard .tfAreas[data-rows="1"] .tfATitle .tfAName{font-size:14px;line-height:20px;height:auto}#app.tfBoard .tfAreas[data-rows="1"] .tfABig{margin:0;flex-direction:row}#app.tfBoard .tfAreas[data-rows="1"] .tfABigMain{font-size:14px;line-height:18px;letter-spacing:0}#app.tfBoard .tfAreas[data-rows="1"] :is(.tfABigUnit){font-size:14px}#app.tfBoard .tfAreas[data-rows="1"] :is(.tfABigSub,.tfATiles,.tfACTiles,.sourceTag){display:none}#app.tfBoard .tfAreas[data-rows="1"] .tfACollapsed{display:grid;grid-template-columns:40px minmax(0,1fr);column-gap:12px;align-content:center;padding:0}#app.tfBoard .tfAreas[data-rows="1"] .tfACollapsed .tfAreaIcon{grid-row:span 2}#app.tfBoard .tfAreas[data-rows="1"] :is(.tfACName,.tfACMain){margin:0;font-size:14px;line-height:18px;text-align:start;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#app.tfBoard .tfAreas:is([data-rows="2"],[data-rows="3"]) .tfABig{display:none}#app.tfBoard .tfAreas[data-rows="4"] .tfABig{flex:none;margin-top:auto;margin-bottom:auto}#app.tfBoard .tfAreas[data-rows="4"] .tfATiles{margin-top:0}#app.tfBoard .tfAreas[data-rows="4"] .tfABigMain{font-size:52px}#app.tfBoard .tfAreas[data-rows="4"] .panelExpanded{row-gap:12px}#app.tfBoard .tfAreas:is([data-rows="2"],[data-rows="3"],[data-rows="4"]) .tfATiles{margin-top:auto}#app.tfBoard .tfAreas[data-rows="2"] .tfATile:nth-child(n+3),#app.tfBoard .tfAreas:is([data-rows="3"],[data-rows="4"]) .tfATile:nth-child(n+5){display:none}#app.tfBoard .tfAreas[data-rows="2"] .tfACTiles{display:none}#app.tfBoard .tfAreas:is([data-rows="3"],[data-rows="4"]) .tfACTile:nth-child(n+3){display:none}#app.tfBoard .tfAreas:is([data-rows="3"],[data-rows="4"]) .tfACollapsed{justify-content:flex-start;gap:10px}#app.tfBoard .tfAreas:is([data-rows="3"],[data-rows="4"]) .tfACTiles{margin-top:auto}.tfEditTray{position:fixed;top:calc(var(--header-height,0px) + env(safe-area-inset-top,0px));right:0;bottom:0;z-index:160;display:flex;width:608px;max-width:calc(100vw - 56px);transform:translate(100%);transition:transform .25s cubic-bezier(.2,.7,.3,1);pointer-events:none}.tfEditTray.open{transform:none}.tfEditTray.open.tucked{transform:translate(100%)}.tfEditTray.open :is(.tfTrayInner,.tfTrayTuck){pointer-events:auto}.tfTrayTuck{position:absolute;top:20px;left:-52px;display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);min-height:0;padding:0;border:0;border-radius:var(--r-inner);background:var(--card);color:var(--text);box-shadow:var(--hc-hair-all);cursor:pointer;--mdc-icon-size:22px}.tfTrayTuck svg{width:22px;height:22px}.tfEditTray:not(.open) .tfTrayTuck{visibility:hidden}.tfTrayInner{flex:1;min-width:0;display:flex;flex-direction:column;gap:20px;overflow:auto;overscroll-behavior:contain;padding:20px;border-radius:var(--r-card) 0 0 var(--r-card);background:var(--card);box-shadow:var(--hc-hair-all),0 0 40px #0000004d}.tfTrayHead{display:flex;align-items:center;justify-content:space-between;gap:12px}.tfTraySection{display:flex;flex-direction:column;gap:8px}.tfTraySection .sectionLabel{margin:0}.tfTrayNote{margin:0;color:var(--muted);font:400 14px/1.3 var(--font)}.tfTrayCards{display:flex;flex-direction:column;gap:6px}.tfTrayCard{display:flex;align-items:center;gap:10px;min-height:var(--tile-min);padding:0 14px 0 10px;border:0;border-radius:var(--r-tile);background:var(--tile);color:var(--text);font:600 14px/20px var(--font-tile);text-align:start;cursor:grab;touch-action:none}.tfTrayList{display:flex;flex-direction:column;margin:0;padding:0;list-style:none}.tfTrayFav{display:grid;grid-template-columns:22px var(--chip-size) minmax(0,1fr) 36px 36px;align-items:center;gap:8px;min-height:var(--tile-min);padding:0 4px 0 6px;border-radius:var(--r-tile)}.tfTrayFav.off{cursor:grab;touch-action:none}.tfTrayFav.off :is(.tfIcon,.tfTrayName){opacity:.5}.tfTrayFav.moving{background:var(--tile)}.tfTrayGrip{display:grid;place-items:center;color:var(--muted);cursor:grab;touch-action:none}.tfTrayGrip svg{width:20px;height:20px;fill:currentColor}:is(.tfTrayFav,.tfTrayPickItem) .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfTrayName{display:flex;flex-direction:column;min-width:0}.tfTrayName>*{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfTrayBtn{display:grid;place-items:center;width:36px;height:36px;min-height:0;padding:0;border:0;border-radius:12px;background:none;color:var(--text);cursor:pointer}.tfTrayBtn svg{width:20px;height:20px;fill:currentColor}.tfTrayBtn:hover{background:var(--tile)}.tfTrayAdd{align-self:flex-start}.tfTrayPick{display:flex;flex-direction:column;gap:6px}.tfTrayPick[hidden]{display:none}.tfTrayPickItem{display:grid;grid-template-columns:var(--chip-size) minmax(0,1fr);align-items:center;gap:12px;width:100%;min-height:var(--tile-min);padding:0 10px;border:0;border-radius:var(--r-tile);background:none;color:var(--text);text-align:start;cursor:pointer}.tfTrayPickItem:hover{background:var(--tile)}.tfTraySuggest{margin-top:8px}.tfMiniPhone{position:fixed;top:calc(var(--header-height,0px) + env(safe-area-inset-top,0px) + 20px);bottom:20px;left:max(16px,calc(100vw - min(608px,100vw - 56px) - 380px));z-index:160;display:flex;flex-direction:column;gap:8px;width:324px;padding:12px;border-radius:44px;background:var(--card);box-shadow:var(--hc-hair-all),0 0 40px #0000004d;opacity:0;transform:translate(16px);transition:opacity .2s ease,transform .25s cubic-bezier(.2,.7,.3,1);pointer-events:none}.tfMiniPhone.open{opacity:1;transform:none;pointer-events:auto}.tfPhoneHead{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:8px 4px 0 12px}.tfMiniPhone>.tfTrayNote{padding:0 12px 4px}.tfLinkBtn{min-height:0;padding:0;border:0;background:none;color:var(--primary);font:inherit;text-decoration:underline;cursor:pointer}.tfPhoneScreen{flex:1;min-height:0;overflow:auto;overscroll-behavior:contain;scrollbar-width:thin;border-radius:34px;background:var(--bg);box-shadow:var(--hc-hair-all);padding:14px 0 24px}.tfPhoneList{display:flex;flex-wrap:wrap;gap:12.8px}.tfPhoneTitle{width:100%;padding:0 12.8px;color:var(--text);font:800 25.6px/1 var(--font);letter-spacing:-.055em;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfPhoneBlock{display:flex;align-items:flex-start;gap:10px;width:100%;min-height:0;padding:12px;border:0;border-radius:27px;background:var(--card);box-shadow:var(--hc-hair);color:var(--text);font:600 14px/20px var(--font-tile);text-align:start;cursor:grab;touch-action:none;-webkit-user-select:none;user-select:none}.tfPhoneBlock.tile{width:calc((100% - 12.8px)/2);border-radius:22.4px}.tfPhoneBlock.fixed{align-items:center;color:var(--muted);cursor:default}.tfPhoneBlock.moving{box-shadow:var(--hc-hair),0 0 0 2px var(--primary);cursor:grabbing}.tfPhoneBlock:focus-visible{outline:2px solid var(--primary);outline-offset:2px}.tfPhoneBlock .tfIcon{width:32px;height:32px;border-radius:13px;background:var(--hc-icon);color:var(--hc-icon-ink);--mdc-icon-size:22px}.tfPhoneName{min-width:0;padding-top:6px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.tfTrayGhost{position:fixed;top:0;left:0;z-index:200;margin:0;pointer-events:none;opacity:.9;background:var(--tile);border-radius:var(--r-tile);box-shadow:0 8px 24px #00000059}.tfFavDrop{position:fixed;z-index:200;width:4px;border-radius:2px;background:var(--primary);pointer-events:none}.tfFavHides{position:absolute;top:0;right:0;bottom:0;left:0;z-index:4;pointer-events:none}.tfFavHide{position:absolute;display:grid;place-items:center;width:32px;height:32px;min-height:0;padding:0;border:0;border-radius:12px;background:var(--card);color:var(--text);box-shadow:var(--hc-hair-all);cursor:pointer;pointer-events:auto}.tfFavHide svg{width:18px;height:18px;fill:currentColor}.tfDash-energy .tfDashGraph{flex:1;min-height:80px;height:auto;margin:var(--inset) 0 0}.tfDash-energy.graphAbove>.activityHeader{order:-2}.tfDash-energy.graphAbove>.tfDashGraph{order:-1;margin:0 0 var(--inset)}#homeView .card.tfDash-energy .activityRow.picked{background:var(--tile);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line)}.toast.tfToast{top:auto;right:auto;max-width:calc(100vw - 32px);transform:translate(-50%,6px)}.toast.tfToast.show{transform:translate(-50%)}.tfDash-act .activityRow.alert .activityRowName{color:var(--danger)}.activityRow .tfIcon.alert{background:#e53935;color:#fff}.tfGraph.tfDay{flex:none;height:62px;min-height:0}.tfGraph.tfDay text{font-size:10px}#housePane .rubberIndicator{background:var(--bright)}#housePane .tab.active{color:var(--on-bright)}#app.house :is(.settingsSelect,.addInput){border:1px solid var(--muted)}#app.house{--select-chev:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath d='M3.5 6l4.5 4.5L12.5 6' fill='none' stroke='%23d9d9d9' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")}#app.house.light{--select-chev:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath d='M3.5 6l4.5 4.5L12.5 6' fill='none' stroke='%2326221e' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")}#app.house select.settingsSelect{-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:0 44px 0 16px;background-image:var(--select-chev);background-repeat:no-repeat;background-position:right 16px center;background-size:16px 16px}#app.house .addInput::placeholder{color:var(--muted);opacity:1}#app .activityRows :focus-visible{outline-offset:-2.4px}#app.house :is(button,a,input,select,[tabindex]){scroll-margin-bottom:96px}@media (max-width:620px){#app.house :is(.activityRowName,.activityRowMeta){white-space:normal;text-overflow:clip;overflow:visible;overflow-wrap:break-word;-webkit-hyphens:auto;hyphens:auto}}.tfTooltip{position:fixed;z-index:500;max-width:min(320px,calc(100vw - 16px));padding:6px 10px;border-radius:10px;background:var(--bright);color:var(--on-bright);font:500 14px/18px var(--font);overflow-wrap:break-word;box-shadow:0 4px 16px #00000040}.tfTooltip[hidden]{display:none}.tfDashGraph rect{transform-box:fill-box;transform-origin:50% 100%}#app.house:is([data-names=cut],[data-names=scroll]) :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis;overflow-wrap:normal}#app.house[data-names=wrap] :is(.activityRowName,.activityRowMeta){display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;white-space:normal;overflow:hidden;text-overflow:ellipsis;overflow-wrap:break-word;-webkit-hyphens:auto;hyphens:auto}#app.tfBoard .tfDash-favs>.activityRows{min-height:0;overflow-y:auto;scrollbar-width:thin}#app.house :is(.tfIcon,.activityRowIcon,.tfAreaIcon,.tfRoomIcon){--chip-hi:.0375;background-image:linear-gradient(180deg,#ffffff08,#fff0)!important;box-shadow:inset 0 1px rgba(255,255,255,var(--chip-hi)),inset 0 -1px color-mix(in srgb,currentColor 3%,transparent),inset 0 -3px 6px color-mix(in srgb,currentColor 3.5%,transparent)}#app.house :is(.on[data-light] .tfIcon,.tfIcon.on[data-light],.tfACTile .tfIcon[data-light],.on[data-tone=alarm] .tfIcon,.tfIcon[data-light]){--chip-hi:.1375}#app.tfWeatherOpen .tfBento.tfPegs .wbItem[data-xl]{grid-row:span 5}#app.tfBoard .tfDashBento:not([data-rows="5"]) .wbItem[data-xl] .wbCallouts{display:none}#app.tfBoard .tfDashBento:is([data-rows="2"],[data-rows="3"]) .wbZone{flex:1;height:auto;background:none;box-shadow:none;padding:0;align-items:flex-start}#app.tfBoard .tfDashBento[data-rows="3"] .wbItem[data-xl] .wbCallouts{display:flex;margin-top:0}#app.tfBoard .tfDashBento[data-rows="1"] :is(.wbZone,.wbCallouts){display:none}#app .wbZoneM{display:none}:is(#app.tfBoard .tfDashBento:is([data-rows="2"],[data-rows="3"]),#app.tfWeatherOpen .tfBento.tfPhonePegs) .wbZone:has(>.wbZoneM){display:flex;align-items:flex-start;justify-content:flex-start}:is(#app.tfBoard .tfDashBento:is([data-rows="2"],[data-rows="3"]),#app.tfWeatherOpen .tfBento.tfPhonePegs) .wbZone:has(>.wbZoneM)>:not(.wbZoneM){display:none}:is(#app.tfBoard .tfDashBento:is([data-rows="2"],[data-rows="3"]),#app.tfWeatherOpen .tfBento.tfPhonePegs) .wbZoneM{display:flex}#app.tfWeatherOpen .tfBento.tfPegs .wbBento{grid-auto-flow:row}#app.tfWeatherOpen .tfBento.tfPegs .wbItem[data-break]{grid-column-start:1}#app.house.tfWeatherOpen #homeView{max-width:none}#app.house #settingsView .toggleList{border-radius:var(--r-card);padding-block:4px}#app.house #settingsView .toggleRow{padding-left:18px;padding-right:18px}#app.house #settingsView .toggleRow:not([hidden])~.toggleRow:before{left:18px}#app.house .view{margin-left:0}#app.house #settingsView .toggleList>.tfCardTitle{display:flex;align-items:center;min-height:28px;padding:14px 18px 2px;font:500 18px/1.2 var(--font-tile);letter-spacing:-.01em;color:var(--text)}.tfLightView{display:flex;padding:4px 0 14px}#housePane.tfLightCardsOn .houseTab .metaTableWrap,#housePane.tfLightCardsOn .houseTab .tfTableNote{display:none}#housePane.tfLightCardsOn .tfLightCards{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:8px}#housePane:not(.tfLightCardsOn) .tfLightCards{display:none}@container housepane (width < 720px){#housePane:not(.tfLightCardsOn) .houseTab .metaTableWrap{display:none}#housePane:not(.tfLightCardsOn) .tfLightCards{display:grid}}#app.house.light .tfSum{--sum-ink:var(--sum-d,var(--hc-icon-ink))}#app.house.light .tfSum[data-summary=climate]{--g0:var(--g0-d);--g1:var(--g1-d);--g2:var(--g2-d)}#app.house .tfTrayInner{gap:32px}#app.house .tfTraySection{gap:12px}#app.house{--font:Geist,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;font-family:var(--font)}#app.house #housePane .toggleRow>:is(.themeChoice,.settingsSelect){align-self:flex-start;width:auto;max-width:100%}#app.house #housePane .themeChoice{display:inline-flex}#app.house #housePane .themeChoice>button{flex:0 1 auto;min-width:0;padding:0 16px;overflow:hidden;text-overflow:ellipsis}#app.house #housePane .toggleRow{min-width:0}#app.house #housePane .toggleRow>.settingsSelect{min-width:200px}#app.house :is(.tfBoardMenu .tfHeightTabs,.wb .wbSegments){display:inline-flex;width:auto;align-self:flex-start}#app.house :is(.tfBoardMenu .tfHeightTabs,.wb .wbSegments) button{flex:0 0 auto;padding:0 16px}@media (max-width:620px){#app.house.tfDash:not(.tfEditing) #homeView>.grid{display:flex!important;flex-wrap:wrap;align-items:flex-start;gap:var(--grid-gap);height:auto!important}#app.house.tfDash:not(.tfEditing) #homeView>.grid .tfBoardItem{position:relative!important;left:auto!important;top:auto!important}#app.house.tfDash:not(.tfEditing) #homeView>.grid>.tfBoardItem:not(.tfDash-favs){height:auto!important}#app.house.tfDash:not(.tfEditing) .tfDash-wx .wbSummary{flex:none;margin-top:0;container-type:normal}#app.house.tfDash:not(.tfEditing) .tfDash-wx .wbSummaryText{position:static}}#app.house :is(#housePane .themeChoice,.wb .wbSegments,.tfBoardMenu .tfHeightTabs){height:32px;padding:3px;gap:3px;box-sizing:border-box}#app.house :is(#housePane .themeChoice>button,.wb .wbSegments button,.tfBoardMenu .tfHeightTabs button){height:26px!important;padding:0 12px;border-radius:13px!important;font:600 12px/16px var(--font-tile)!important}.tfPlantProblem{flex:1 1 0;min-height:184px;flex-direction:column}.tfGraph.tfPlantGraph{flex:1 1 0;width:calc(100% - 20px);height:auto;min-height:160px;margin:0 10px}.tfGraph .tfGuide{stroke:var(--muted);stroke-width:1;stroke-dasharray:3 4;vector-effect:non-scaling-stroke}.tfGraph .tfGuideWord{font-size:11px}#app .tfMoreBackdrop :is(.tfMore,.tfMoreSideInner){box-shadow:inset 0 0 0 1px var(--line)}.tfDashTitle .tfGreeting{display:block;margin-bottom:6px;font:500 20px/1.2 var(--font-tile);letter-spacing:0;color:var(--muted)}#app.tfOverview.tfDash #homeView .tfSum:not([data-summary=alerts]) .tfIcon{background:none}#app.tfOverview.tfDash #homeView .card.tfDash-bar{width:100%;max-width:none}#app.tfOverview.tfDash #homeView .card.tfDash-bar .activityRows{display:flex;justify-content:space-between}#app.tfOverview.tfDash #homeView .card.tfDash-bar .activityRow{flex:none}#app.tfOverview.tfDash #homeView .card.tfDash-bar .activityRows.hcBarRows{display:grid;grid-template-columns:repeat(var(--bar-cols,3),minmax(0,1fr))}#app.tfOverview.tfDash #homeView .card.tfDash-bar .activityRows.hcBarRows>.activityRow{min-width:0}@media (max-width:620px){#app.tfOverview.tfDash #homeView .card.tfDash-bar .activityRows{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}}#app.tfOverview.tfDash #homeView .tfDash-favs{padding:10px;border-radius:var(--r-card)}#app.tfOverview.tfDash #homeView .tfDash-favs>.activityHeader{display:none}#app.tfOverview.tfDash #homeView .tfDash-favs>.activityRows{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));grid-auto-rows:60px;row-gap:25px;max-height:100%;margin:0;overflow-y:auto;scrollbar-width:none}#app.tfOverview.tfDash #homeView .tfDash-favs>.activityRows::-webkit-scrollbar{display:none}.hcFadeList.hcMore{-webkit-mask-image:linear-gradient(to bottom,#000 calc(100% - 40px),transparent);mask-image:linear-gradient(to bottom,#000 calc(100% - 40px),transparent)}#app.tfOverview.tfDash #homeView .tfDash-favs>.activityRows>.activityRow{height:60px;min-height:0;padding:10px;box-sizing:border-box}#app.tfOverview.tfDash #homeView .tfRoomTile{padding:18px;gap:0;border-radius:28px}#app.tfOverview.tfDash #homeView .tfRoomTile>.tfActionHead{margin-bottom:0}#app.tfOverview.tfDash #homeView .tfRoomTile .tfActionHead .activityRowMeta{display:none}#app.tfOverview.tfDash #homeView .tfRoomTile .tfRoomReading{margin-top:35px;gap:0}#app.tfOverview.tfDash #homeView .tfRoomTile .tfRoomBig{font:400 48px/64px var(--font-tile);letter-spacing:-1.92px}#app.tfOverview.tfDash #homeView .tfRoomTile .tfRoomSub{display:block;margin-top:-7px;font:400 16px/19px var(--font)}#app.tfOverview.tfDash #homeView .tfRoomTile .tfRoomDevices{display:flex;justify-content:space-between;min-height:0;margin-top:auto;padding-top:16px}#app.tfOverview.tfDash #homeView .tfRoomTile .tfRoomHeads{display:none}#app.tfOverview.tfDash #homeView .tfRoomTile:not(:has(.tfRoomDevices :nth-child(4))) .tfRoomDevices{justify-content:flex-start;gap:18.67px}#app.light.tfOverview.tfDash #homeView .tfRoomTile .tfRoomIcon{background-color:#acacac;color:#fff}#app.tfOverview.hcSumsFit.tfDash #homeView .card.tfDash-bar{width:max-content;max-width:100%}#app.tfOverview.hcSumsFit.tfDash #homeView .card.tfDash-bar .activityRows{justify-content:flex-start}#app.tfOverview.hcSumsFit.tfDash #homeView .card.tfDash-bar .activityRows.hcBarRows{grid-template-columns:repeat(var(--bar-cols,3),auto)}#app.tfOverview.hcFavStrip.tfDash #homeView .tfDash-favs{height:auto!important;padding:10px;container-type:normal}#app.tfOverview.hcFavStrip.tfDash #homeView .tfDash-favs>.activityRows{display:flex;justify-content:space-between;grid-auto-rows:auto;row-gap:0;max-height:none}#app.tfOverview.hcFavStrip.tfDash #homeView .tfDash-favs>.activityRows>.activityRow{flex:none;width:240px;height:60px}#app.tfOverview.hcFavStrip.tfDash #homeView .tfDash-favs>.activityRows.hcBarRows{display:grid;grid-template-columns:repeat(var(--bar-cols,3),minmax(0,1fr))}#app.tfOverview.hcFavStrip.tfDash #homeView .tfDash-favs>.activityRows.hcBarRows>.activityRow{width:auto;min-width:0}#app.tfOverview.hcFavStrip.hcSumsFit.tfDash #homeView .tfDash-favs{width:max-content!important;max-width:100%}#app.tfOverview.hcFavStrip.hcSumsFit.tfDash #homeView .tfDash-favs>.activityRows{justify-content:flex-start}#app.tfOverview.hcFavStrip.hcSumsFit.tfDash #homeView .tfDash-favs>.activityRows.hcBarRows{grid-template-columns:repeat(var(--bar-cols,3),240px)}@media (max-width:620px){#app.tfOverview.hcFavStrip.tfDash #homeView .tfDash-favs>.activityRows{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}#app.tfOverview.hcFavStrip.tfDash #homeView .tfDash-favs>.activityRows>.activityRow{width:auto;min-width:0}}#app.hcHomeEditing.tfOverview #homeView .tfBoardItem:not(.tfDashTitle,.tfDashBarRow){cursor:grab;-webkit-user-select:none;user-select:none;touch-action:none;outline:1.5px solid var(--primary);outline-offset:-1.5px}#app.hcHomeEditing.tfOverview #homeView .tfBoardItem.tfRoomTile{border-radius:28px}#app.hcHomeEditing.tfBoardReady #homeView .tfBoardItem{transition:left .34s cubic-bezier(.2,1.35,.4,1),top .34s cubic-bezier(.2,1.35,.4,1)}@media (prefers-reduced-motion:reduce){#app.hcHomeEditing.tfBoardReady #homeView .tfBoardItem{transition:none}}#app.hcHomeEditing #homeView .tfBoardItem.tfDragging{z-index:20;transition:none!important;scale:1.02;cursor:grabbing;filter:drop-shadow(0 10px 30px rgba(0,0,0,.35))}@media (max-width:620px){#app.tfOverview.tfDash #homeView .tfRoomTile .tfRoomDevices{display:grid;grid-template-columns:repeat(2,max-content);gap:12px;justify-content:start}}.tfEditTray .tfTrayInner{scrollbar-width:none}.tfEditTray .tfTrayInner::-webkit-scrollbar{display:none}.hcHeChoiceLine{flex-wrap:wrap;gap:8px 12px}.hcHeChoiceLine>.hcHeChoice{margin-left:auto}.hcHeChoice.themeChoice{display:inline-flex;flex-wrap:nowrap;height:32px;padding:3px;gap:3px;box-sizing:border-box;border-radius:16px;background:var(--control-2,var(--hc-icon))}#app .hcHeChoice>button{height:26px!important;min-height:0;padding:0 12px;border:0;border-radius:13px!important;background:none;color:var(--text);font:600 12px/16px var(--font-tile)!important;white-space:nowrap}#app .hcHeChoice>button[aria-pressed=true]{background:var(--card);color:var(--text);box-shadow:var(--hc-hair-all)}.hcHeBody{display:flex;flex-direction:column;gap:12px}.hcHeBody>.tfTrayNote{margin:0 0 8px}.hcHeLabel{display:flex;align-items:center;gap:4px}.hcHeLine{display:flex;align-items:center;gap:4px;min-height:44px}.hcHeLine>.activityRowName{min-width:0}.hcHeLine>.switch{margin-left:auto}.hcHeLink{display:inline;min-height:0;padding:0;border:0;background:none;font:inherit;color:var(--primary);text-decoration:underline;cursor:pointer}.hcHeList{display:flex;flex-direction:column;gap:2px;margin:0;padding:0;list-style:none}.hcHeRow{display:grid;grid-template-columns:36px var(--chip-size) minmax(0,1fr) auto;align-items:center;gap:10px;min-height:var(--tile-min);padding:0 4px;border-radius:var(--r-tile)}.hcHeRow .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.hcHeRow.moving{background:var(--card);box-shadow:var(--hc-hair-all)}.hcHeGrip{color:var(--muted);cursor:grab;touch-action:none}.hcHeSum .tfIcon{color:var(--sum-ink,var(--hc-icon-ink))}#app .hcHeRow.hcHeSum .tfIcon{background-color:transparent}#app.house .hcHeSum{--sum-ink:var(--sum-d,var(--hc-icon-ink))}#app.house.light .hcHeSum{--sum-ink:var(--sum-l,var(--hc-icon-ink))}.hcInfoBtn{display:grid;place-items:center;flex:none;width:28px;height:28px;min-height:0;padding:0;border:0;border-radius:var(--r-fine,12px);background:none;color:var(--muted);cursor:pointer}.hcInfoBtn svg{width:18px;height:18px;fill:currentColor}.hcInfoBtn:hover,.hcInfoBtn[aria-expanded=true]{background:var(--tile);color:var(--text)}.hcInfoPop{position:fixed;z-index:320;width:280px;max-width:calc(100vw - 16px);display:flex;flex-direction:column;gap:8px;padding:16px;border-radius:var(--r-inner);box-shadow:var(--hc-hair-all),0 8px 28px #0000002e}.hcInfoPop[hidden]{display:none}.hcInfoTitle{font:600 14px/20px var(--font-tile);color:var(--text)}.hcInfoText{font:400 14px/1.45 var(--font);color:var(--text)}.hcInfoText p{margin:0}.hcInfoText ul{margin:6px 0 0;padding-left:18px}.hcInfoMore{align-self:flex-start;font:600 14px/20px var(--font-tile);color:var(--primary);text-decoration:underline}#app .tfTrayAdd.hcAddBtn{display:inline-flex;align-items:center;gap:6px;height:32px;min-height:0;margin:10px 0 12px;padding:0 16px 0 12px;border:0;border-radius:16px!important;background:#03a9f4;color:#fff;font:600 14px/20px var(--font-tile);text-decoration:none!important}#app .tfTrayAdd.hcAddBtn svg{width:18px;height:18px;flex:none;fill:currentColor}#app .tfTrayAdd.hcAddBtn:hover{background:#0398dc}#app .tfTrayAdd.hcAddBtn[aria-expanded=true]{background:#0288d1}.tfEditTray:not(.hcHomeTray) .tfTraySection:not(.hcFirst){padding-top:20px;border-top:1px solid var(--line)}#app.house .tfEditTray:not(.hcHomeTray) .tfTrayInner{gap:20px}.hcHeRule{width:100%;height:0;margin:8px 0;border:0;border-top:1px solid var(--line)}.tfEditTray .hcTrayTabs{display:flex;align-self:stretch;margin:0 0 4px;flex:none}.tfEditTray .hcTrayTabs .tab{flex:1 1 0;min-height:36px;padding:0 10px;font:600 14px/20px var(--font-tile)}.tfEditTray .hcTrayTabs .rubberIndicator{background:var(--text)}.tfEditTray .hcTrayTabs .tab.active{color:var(--card)}.tfEditTray .tfTraySection[hidden]{display:none!important}.hcHeTabBody{display:flex;flex-direction:column;gap:8px}.hcHomeTray .hcTrayTabs{margin:0 0 8px}#homeView .grid.tfStack{grid-auto-rows:1px;row-gap:0}#homeView .grid.tfStack>*{align-self:start}.tfTrayPop{position:fixed;z-index:260;right:calc(min(608px,100vw - 56px) + 12px);width:300px;max-width:calc(100vw - 80px);display:grid;gap:2px;padding:10px!important;background:var(--card);box-shadow:var(--hc-hair-all),0 10px 30px #00000059}.tfTrayPop[hidden]{display:none}.tfTrayPopTitle{padding:4px 8px 8px;font:500 18px/1.2 var(--font-tile);letter-spacing:-.01em;color:var(--text)}.tfTrayPopRow{display:flex;align-items:center;gap:12px;min-height:var(--tile-min);padding:0 8px}.tfTrayPopRow .tfIcon{background-color:var(--hc-icon)}.tfTrayPopName{flex:1;min-width:0;font:600 14px/20px var(--font-tile);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#app .tfMoreBackdrop:not(.wide) .tfMore{height:min(600px,85dvh)}#app .tfMoreBackdrop:not(.wide) .tfMorePages{flex:1 1 auto;min-height:0;height:auto!important;align-items:stretch}#app .tfMoreBackdrop:not(.wide) .tfMorePage{overflow-y:auto;overscroll-behavior:contain;scrollbar-width:none}#app .tfMoreBackdrop:not(.wide) .tfMorePage[aria-label=Control]>:first-child{margin-top:auto}#app .tfMoreBackdrop:not(.wide) .tfMoreSpace{flex:1 1 auto;height:auto;min-height:224px}#app .tfMoreBackdrop:not(.wide) .tfMoreSpace.tfMoreFill{min-height:0;container-type:size}#app .tfMoreBackdrop:not(.wide) .tfMoreSpace.tfMoreFill>.tfCoverArt{width:min(100%,100cqh);height:auto}.tfMorePage[aria-label=Control]>:not(.tfMoreSpace,.tfPlantProblem,.tfMoreLink)+:not(.tfMoreSpace,.tfPlantProblem,.tfMoreLink){margin-top:14px}.tfMoreSwitch{display:flex;align-items:center;justify-content:center;min-height:0;padding:0;border-radius:0;background:none}.tfMoreSwitch .tfIcon{width:min(240px,100%);height:min(240px,100%);aspect-ratio:1;min-height:0;border:0;padding:0;border-radius:40%;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer;--mdc-icon-size:204px}.tfMoreSwitch.on[data-light] .tfIcon{background:var(--light-soft);color:var(--light-ink)}.tfMoreSwitch.on[data-tone=alarm] .tfIcon{background:#e53935;color:#fff}@media (max-width:620px){#app .tfMoreBackdrop{place-items:end center;padding:0 16px max(16px,env(safe-area-inset-bottom,0px))}#app .tfMoreBackdrop .tfMorePair{width:100%;max-height:85dvh}#app .tfMoreBackdrop :is(.tfMore,.tfMoreSideInner){width:100%;border-radius:34px;box-shadow:inset 0 0 0 1px var(--line),0 10px 30px #00000047}#app .tfMoreBackdrop .tfMore{padding-top:10px;outline:none}#app .tfMoreBackdrop .tfMore:before{content:"";display:block;position:sticky;top:10px;z-index:2;flex:none;width:36px;height:5px;margin:0 auto;border-radius:3px;background:var(--line)}#app .tfMoreBackdrop .tfMore [data-more-close]{display:none}}`, Gu = `.wb{container:wb-bento/inline-size;display:block;color:var(--text);font-family:var(--font);-webkit-font-smoothing:antialiased}.wbBento{box-sizing:content-box;display:flex;flex-wrap:wrap;align-items:flex-start;justify-content:center;gap:16px;max-width:1056px;margin:0 auto;padding:10px}.wbItem{container:wb-card/inline-size;min-width:0}.wbItem[hidden]{display:none!important}.wbItem[data-size=wide]{width:520px;align-self:stretch;display:flex;flex-direction:column}.wbItem[data-size=wide]>*{flex:1}.wbItem[data-size=wide]>.wbWeather{flex:none}.wbItem[data-size=tile]{width:252px}.wbItem[data-size=double]{width:520px}@container wb-bento (width < 652px){.wbBento{gap:10px;padding:10px}.wbItem:is([data-size=wide],[data-size=double]){width:100%}.wbItem[data-size=tile]{width:calc(50% - 5px)}}.wbCard{position:relative;display:block;box-sizing:border-box;border:0;border-radius:var(--r-card);background:var(--card);color:var(--text);font-family:var(--font);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line);transition:all .3s ease-out}.wbCard.wbHc{display:flex;flex-direction:column;gap:10px;padding:14px var(--inset) var(--inset);box-shadow:var(--hc-hair-all)}.wbHeader{display:flex;align-items:center;justify-content:space-between;gap:12px;min-height:28px;padding:0 18px}.wbTitle{margin:0;font:500 18px/1.2 var(--font-tile);letter-spacing:-.18px;color:var(--text);white-space:nowrap}.wbIcon{display:block;flex:none;width:var(--wb-icon,24px);height:var(--wb-icon,24px);fill:currentColor;pointer-events:none}.wbTile{display:flex;align-items:center;gap:12px;min-width:0;min-height:var(--tile-min);box-sizing:border-box;padding:var(--inset);border:0;border-radius:var(--r-tile);background:transparent;color:inherit;font:inherit;text-align:start}.wb button.wbTile{border-radius:var(--r-tile)!important;cursor:pointer;transition:background-color .15s ease,box-shadow .15s ease}.wb button.wbTile:hover{background:var(--tile);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line)}.wb button.wbTile:focus-visible{outline:2px solid var(--primary)!important;outline-offset:2px!important}.wbChip{flex:none;display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);background:var(--primary);color:var(--hc-on-accent);--wb-icon:24px}.wbChip.wbPlain{background:var(--icon-bg);color:var(--text)}.wbText{display:flex;flex-direction:column;justify-content:center;flex:1;min-width:0;align-self:stretch;overflow:hidden;white-space:nowrap}.wbName{font:600 14px/20px var(--font-tile);overflow:hidden;text-overflow:ellipsis}.wbSub{font:400 16px/1.15 var(--font);letter-spacing:-.32px;overflow:hidden;text-overflow:ellipsis}.wbCard.wbSquare{display:flex;flex-direction:column;gap:14px;aspect-ratio:1;--wb-k:1;box-sizing:border-box;padding:18px;border-radius:28px;overflow:hidden}.wbHead{display:flex;align-items:flex-start;gap:12px;min-width:0}.wbSquare .wbChip{width:40px;height:40px;border-radius:16px}.wbSquare .wbName{font-size:14px;line-height:1.4}.wbSquare .wbSub{font-size:16px}.wbVisual{position:relative;flex:1;min-height:0;display:flex;flex-direction:column;justify-content:center;gap:10px}.wbCard.wbSquare.wbDouble{aspect-ratio:520/252;--wb-k:.4846;border-radius:34px}.wbVisual>svg{display:block;width:100%;height:100%;min-height:0}.wbVisual svg text{font-family:var(--font-tile)}.wbValue{display:flex;align-items:flex-start;gap:2px;white-space:nowrap}.wbValue .wbNum{font:500 clamp(30px,calc(17.5cqw * var(--wb-k,1)),44px)/1 var(--font-tile);letter-spacing:-.02em;font-variant-numeric:tabular-nums}.wbValue .wbUnitV{font:300 clamp(13px,calc(7.1cqw * var(--wb-k,1)),18px)/1.25 var(--font-tile);color:var(--muted)}.wbScaleNote{display:flex;justify-content:space-between;color:var(--muted);font:400 clamp(10px,calc(4.4cqw * var(--wb-k,1)),12px)/1.3 var(--font)}.wbCard.wbSquare.wbHasBackdrop{position:relative;isolation:isolate}.wbBackdrop{position:absolute;top:0;right:0;bottom:0;left:0;z-index:0;overflow:hidden;border-radius:inherit;pointer-events:none}.wbBackdrop~*{position:relative;z-index:1}.wbGraph{position:relative;display:flex;flex-direction:column;justify-content:center;height:120px;box-sizing:border-box;padding:12px 16px;border-radius:10px 10px 18px 18px;background:var(--tile);overflow:hidden;--wb-scale-edge:var(--tile)}.wbChart{display:block;width:100%;height:100%;overflow:visible}.wbChart .wbLine{fill:none;stroke:var(--primary);stroke-width:1;stroke-linecap:round;stroke-linejoin:round}.wbChart .wbArea{fill:var(--primary);fill-opacity:.14}.wbChart .mvGrid{stroke:var(--divider,rgba(127,127,127,.25));stroke-width:1;vector-effect:non-scaling-stroke}.wbChart .wbBar{fill:var(--muted);opacity:.45}.wbChart .wbBar.wbNowBar{fill:var(--primary);opacity:1}.wbChart .wbGuide{stroke:var(--muted);stroke-width:1;stroke-dasharray:2 4}.wbChart text{fill:var(--muted);font:400 11px var(--font)}.wbGraphNote{display:flex;justify-content:space-between;gap:8px;color:var(--muted);font:400 12px/1.4 var(--font)}.wbDayChart{flex:1;min-height:0;display:grid;grid-template-columns:38px minmax(0,1fr);grid-template-rows:20px minmax(0,1fr) 18px;grid-template-areas:". sun" "y plot" ". x";column-gap:6px;color:var(--muted);font:400 11px/14px var(--font);font-variant-numeric:tabular-nums}.wbDcSun,.wbDcX,.wbDcY,.wbDcPlot{position:relative;min-width:0}.wbDcSun{grid-area:sun}.wbDcY{grid-area:y}.wbDcPlot{grid-area:plot}.wbDcX{grid-area:x}.wbDcSunMark,.wbDcX span{position:absolute;bottom:0;transform:translate(-50%);white-space:nowrap}.wbDcSunMark{display:flex;align-items:center;gap:2px;bottom:4px;--wb-icon:14px}.wbDcSunMark .wbIcon{fill:#fea916}.wbDcX span{top:4px;bottom:auto}.wbDcY span{position:absolute;right:0;transform:translateY(-50%);white-space:nowrap}.wbDcPlot svg{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;overflow:visible}.wbDcNight{fill:var(--page);opacity:.6}.wbDcGrid{stroke:var(--line);stroke-width:1}.wbDcSunLine{stroke:#fea916;stroke-width:1;stroke-dasharray:2 4;opacity:.7}.wbDcNow{stroke:var(--text);stroke-width:1;opacity:.4}.wbDcLine,.wbDcPast{fill:none;stroke:var(--primary);stroke-width:2.5;stroke-linecap:round;stroke-linejoin:round}.wbDcPast{stroke:var(--muted);stroke-width:2}.wbDcArea{fill:var(--primary);opacity:.14}.wbDcBar{position:absolute;bottom:0;min-height:3px;border-radius:4px 4px 1px 1px;background:var(--primary)}.wbDcDot{position:absolute;width:10px;height:10px;margin:-5px 0 0 -5px;border-radius:50%;background:var(--primary);box-shadow:0 0 0 2px var(--card)}.wbDcPeak{position:absolute;transform:translate(-50%,calc(-100% - 6px));color:var(--text);font-weight:500;white-space:nowrap}.wbDcNote{position:absolute;top:0;right:0;bottom:0;left:0;display:grid;place-items:center;padding:0 8px;text-align:center;color:var(--muted);font:400 13px/1.4 var(--font)}.wbOpen{flex:1;display:flex;flex-direction:column;gap:10px;padding:var(--inset);border-radius:28px;background:var(--tile);box-shadow:inset 0 0 0 .4px var(--hc-open-edge)}.wbOpenHead{display:flex;align-items:center;gap:12px}.wbBack{flex:none;display:grid;place-items:center;width:34px;height:34px;padding:0;border:0;border-radius:var(--r-fine);background:transparent;color:var(--text);cursor:pointer;--wb-icon:24px}.wb button.wbBack{border-radius:var(--r-fine)!important}.wbBack:hover{background:var(--hover)}.wbOpen .wbGraph{flex:1;height:auto;min-height:152.2px;background:var(--card);--wb-scale-edge:var(--tile)}.wbSegments{display:inline-flex;gap:0;padding:4px;border-radius:var(--r-inner);background:var(--page)}.wbSegments button{padding:4px 12px;border:0;border-radius:var(--r-fine);background:transparent;color:var(--muted);font:600 14px/20px var(--font-tile);cursor:pointer}.wb .wbSegments button{border-radius:var(--r-fine)!important;font-family:var(--font-tile)!important}.wbSegments button[aria-pressed=true]{background:var(--tile);color:var(--text)}.wbWx{position:relative;display:block;flex:none;width:40px;height:40px;border-radius:var(--r-inner);background:var(--icon-bg);overflow:hidden}.wbWx>svg,.wbWx>canvas{display:block;width:100%;height:100%}.wbWx>canvas{image-rendering:pixelated}.wbWx.wbS60{width:60px;height:60px;border-radius:20px}.wbWx.wbS90{width:90px;height:90px;border-radius:28px}.wb[data-style=smooth] :is(.wbWx,.wbSky):after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;border-radius:inherit;pointer-events:none;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n' color-interpolation-filters='sRGB'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix values='1.3 0 0 0 -.15 1.3 0 0 0 -.15 1.3 0 0 0 -.15 0 0 0 0 1'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");background-size:140px 140px;mix-blend-mode:overlay;opacity:.3}.wbBaseRows{display:flex;flex-direction:column;gap:4px;width:100%}.wbBaseRow{display:flex;justify-content:space-between;gap:12px;color:var(--muted);font:400 14px/20px var(--font)}.wbBaseRow>span:last-child{color:var(--text);white-space:nowrap}.wbBaseRow>span:first-child{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.wbRadar{position:relative;flex:1;align-self:stretch;min-height:80px;border-radius:var(--r-inner);overflow:hidden;background-color:var(--tile);background-image:linear-gradient(color-mix(in srgb,var(--text) 7%,transparent) 1px,transparent 1px),linear-gradient(90deg,color-mix(in srgb,var(--text) 7%,transparent) 1px,transparent 1px);background-size:24px 24px;background-position:center}.wbRadarRing{position:absolute;left:50%;top:50%;width:64%;aspect-ratio:1;transform:translate(-50%,-50%);border-radius:50%;box-shadow:0 0 0 1px color-mix(in srgb,var(--text) 20%,transparent)}.wbRadarRing:after{content:"";position:absolute;top:25%;right:25%;bottom:25%;left:25%;border-radius:50%;box-shadow:0 0 0 1px color-mix(in srgb,var(--text) 14%,transparent)}.wbRadarHome{position:absolute;left:50%;top:50%;width:10px;height:10px;margin:-5px 0 0 -5px;border-radius:50%;background:var(--primary);box-shadow:0 0 0 3px var(--tile)}.wbWx.wbLineIcon{display:grid;place-items:center;background:var(--tile);color:var(--text)}.wbWx.wbLineIcon>svg{width:64%;height:64%}.wbWx.wbClear,.wbWx.wbPartly{background:var(--wx-clear)}.wbWx.wbCloudy{background:var(--wx-cloudy)}.wbWx.wbRain,.wbWx.wbSnow{background:#969696}.wbWx.wbNight{background:var(--wx-night)}.wbWx .wbBright{fill:var(--wx-cloud-bright)}.wbWx .wbCloudLight{fill:var(--wx-cloudy)}.wbWx .wbAccent{fill:var(--primary)}.wbWx :is(.wbSunDisc,.wbMoonPath,.wbBright,.wbCloudLight,.wbDrop,.wbFlake,.wbTwinkle){transform-box:fill-box;transform-origin:center}.wbMotion .wbWx .wbSunDisc{animation:wxBreathe 3.6s ease-in-out infinite}.wbMotion .wbWx .wbMoonPath{animation:wxBob 5.2s ease-in-out infinite}.wbMotion .wbWx :is(.wbBright,.wbCloudLight){animation:wxDrift 6.4s ease-in-out infinite}.wbMotion .wbWx .wbDrop{animation:wxFall .95s linear infinite}.wbMotion .wbWx .wbFlake{animation:wxSnow 3.2s linear infinite}.wbMotion .wbWx .wbTwinkle{animation:wxTwinkle 2.4s ease-in-out infinite}.wbCard.wbWeather{position:relative;display:flex;flex-direction:column;gap:12px;padding:18px}.wbClosed{display:contents}.wbWeather.wbIsOpen .wbClosed{visibility:hidden}.wbWeather .wbOpen{position:absolute;top:10px;right:10px;bottom:10px;left:10px;min-height:0}.wbWeather .wbOpen .wbGraph{min-height:0;padding:8px 14px 6px 8px}.wbDayTabs{display:flex}.wbNow{display:flex;align-items:flex-start;justify-content:space-between;gap:16px}.wbCurrent{display:flex;align-items:flex-start;gap:16px;min-width:0}.wb button.wbOpenPage{padding:0;border:0;border-radius:var(--r-tile)!important;background:none;color:inherit;font:inherit;text-align:start;cursor:pointer}.wb button.wbOpenPage:focus-visible{outline:2px solid var(--primary)!important;outline-offset:4px!important}.wbTempBlock{display:flex;flex-direction:column;gap:4px;min-width:0}.wbTemp{display:flex;align-items:flex-start;gap:2px;white-space:nowrap}.wbDeg{font:500 64px/1 var(--font-tile);letter-spacing:-1.28px}.wbUnit,.wbRange{font:300 24px/1.25 var(--font-tile);white-space:nowrap}.wbPlace{color:var(--muted);font:600 14px/20px var(--font-tile);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.wbCondition{flex:none;align-self:stretch;display:flex;flex-direction:column;justify-content:space-between;padding:10px 16px;border-radius:var(--r-tile);background:var(--tile)}.wbCondName{font:400 18px/1.2 var(--font);letter-spacing:-.18px;white-space:nowrap}.wbColumns{display:flex;height:185px;border-radius:28px;overflow:hidden}.wbColumn{flex:1 0 0;min-width:0;display:flex;flex-direction:column;align-items:center;justify-content:space-between;padding:16px 0;border:0;border-radius:var(--r-tile);background:var(--tile);color:var(--text);font:inherit;cursor:pointer}.wb button.wbColumn{border-radius:var(--r-tile)!important}.wbColumn:hover{background:var(--hover);box-shadow:inset 0 0 0 .4px var(--line)}.wb button.wbColumn:focus-visible{outline:2px solid var(--primary)!important;outline-offset:-2px!important}.wbDay{font:400 14px/1.4 var(--font);white-space:nowrap}.wbTemps{display:flex;flex-direction:column;align-items:center;gap:8px}.wbHi{font:400 18px/20px var(--font-tile)}.wbLo{color:var(--muted);font:400 18px/1.2 var(--font);letter-spacing:-.18px}.wbAsNow{display:none}.wbHalves{display:none;grid-template-columns:repeat(2,minmax(0,1fr))}.wbNextHours{display:none;justify-content:space-between;align-items:center;gap:8px;min-width:0}.wbHour{display:flex;flex-direction:column;align-items:center;gap:8px;min-width:0}.wbHourTime{color:var(--muted);font:400 14px/20px var(--font);white-space:nowrap}.wbHourTemp{font:400 18px/20px var(--font-tile);white-space:nowrap}.wbHour .wbWx.wbS40{width:40px;height:40px;border-radius:16px}.wbSummary{position:relative;flex:1 1 0;min-height:0;margin-top:-12px;container:wbsum/size}.wbSummaryText{position:absolute;top:12px;left:0;right:0;margin:0;color:var(--text);font:400 16px/22px var(--font);display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden}@container wbsum (height < 56px){.wbSummaryText{-webkit-line-clamp:1}}@container wbsum (height < 34px){.wbSummaryText{display:none}}@container wb-card (width < 480px){.wbColumn .wbWx.wbS60{width:48px;height:48px;border-radius:16px}}@container wb-card (width < 400px){.wbCard.wbWeather{gap:16px;padding:18px 18px 10px}.wbWeather .wbWx.wbS90{width:60px;height:60px;border-radius:20px}.wbDeg{font-size:46px;letter-spacing:-.92px}.wbRange{font-size:20px}.wbCondition{align-self:flex-start;gap:0;border-radius:28px}.wbColumn .wbWx.wbS60{width:40px;height:40px;border-radius:14px}.wbWeather .wbDcX .wbMinor{display:none}}@container wb-card (width < 280px){.wbHalves{grid-template-columns:1fr}}.wbCard.wbHourly{flex:1}.wbTabs{padding:0 18px}.wbStripScroll{flex:1;min-height:160px;display:flex;overflow-x:auto;overflow-y:hidden;scrollbar-width:none;border-radius:var(--r-tile);-webkit-user-select:none;user-select:none}.wbStripScroll::-webkit-scrollbar{display:none}.wbStripScroll.wbDragging{cursor:grabbing}.wbStrip{flex:none;display:flex;flex-direction:column;gap:8px;min-width:100%;box-sizing:border-box;padding:0 10px}.wbRow{position:relative;flex:none}.wbTimes{height:20px}.wbValues{height:44px}.wbMark{position:absolute;top:0;display:flex;flex-direction:column;align-items:center;transform:translate(-50%);white-space:nowrap}.wbMark.wbFirst{align-items:flex-start;transform:none}.wbTimes .wbMark{font:400 14px/20px var(--font);font-variant-numeric:tabular-nums}.wbTimes .wbMark.wbFirst{font:600 14px/20px var(--font-tile)}.wbSky{position:relative;flex:1;min-height:72px;border-radius:var(--r-inner);overflow:hidden}.wbStripScroll.wbPaged{container-type:inline-size;scroll-snap-type:x mandatory;overscroll-behavior-x:contain}.wbStripScroll.wbPaged.wbHeld{scroll-snap-type:none}.wbPaged .wbStrip{position:relative;min-width:0;padding:0}.wbSnap{position:absolute;top:0;width:1px;height:1px;scroll-snap-align:start;pointer-events:none}.wbMark.wbLast{align-items:flex-end;transform:translate(-100%)}.wbPaged .wbTimes .wbMark.wbFirst{font:400 14px/20px var(--font)}.wbPaged .wbTimes .wbMark.wbNowMark{font:600 14px/20px var(--font-tile)}.wbSky .wbPast{position:absolute;top:0;bottom:0;left:0;background:var(--card);opacity:.45;pointer-events:none}.wbSky .wbNowLine{position:absolute;top:0;bottom:0;width:2px;margin-left:-1px;background:var(--text);opacity:.55;pointer-events:none}.wbSky.wbLineSky{background:var(--tile);color:var(--text)}.wbLineArt{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;overflow:visible}.wbLineArt .wbLineArc{fill:none;stroke:var(--text);stroke-width:1.5;stroke-linejoin:round;vector-effect:non-scaling-stroke;opacity:.7}.wbLineArt .wbLineHorizon{stroke:var(--text);stroke-width:1;vector-effect:non-scaling-stroke;opacity:.35}.wbLineArt .wbLineNight{fill:var(--text);opacity:.07}.wbLineArt .wbLineEdge{stroke:var(--text);stroke-width:1;vector-effect:non-scaling-stroke;opacity:.3}.wbLineTime{position:absolute;top:calc(80% + 4px);transform:translate(-50%);color:var(--muted);font:400 11px/14px var(--font);font-variant-numeric:tabular-nums;white-space:nowrap;pointer-events:none}.wbLineNow{position:absolute;width:26px;height:26px;transform:translate(-50%,-50%);border-radius:50%;background:var(--tile);pointer-events:none}.wbLineNow>svg,.wbLineGlyph>svg{display:block;width:100%;height:100%}.wbLineGlyph{position:absolute;top:calc(50% - 14px);width:28px;height:28px;transform:translate(-50%);pointer-events:none}.wbLineGlyph.wbFirst{transform:none}.wbLineGlyph.wbLast{transform:translate(-100%)}.wbSky .wbMidnight{position:absolute;top:0;bottom:0;width:0;border-left:1.5px dashed var(--text);opacity:.5;pointer-events:none}.wbDays{position:absolute;top:36px;left:0;z-index:1;display:flex;pointer-events:none}.wbDaySpan{flex:none;min-width:0}.wbDayName{position:sticky;left:8px;margin-left:8px;height:26px;min-height:0;padding:0 10px;border:0;background:color-mix(in srgb,var(--card) 82%,transparent);color:var(--text);font:600 13px/26px var(--font-tile);white-space:nowrap;cursor:pointer;pointer-events:auto}.wb .wbDayName{border-radius:13px!important;font-family:var(--font-tile)!important}.wbViews button{padding:2px 10px;font-size:13px}.wbBars .wbDayBars{flex:1 1 0;min-height:160px;display:flex;flex-direction:column;padding:0 18px;overflow-y:auto;overscroll-behavior:contain;scrollbar-width:thin}.wbBars.wbTabbed .wbDayBars{min-height:206px}.wbDayBar{flex:1 0 auto;display:grid;grid-template-columns:minmax(56px,auto) 40px 36px minmax(0,1fr) 36px;align-items:center;column-gap:12px;min-height:48px;box-shadow:inset 0 -.4px 0 var(--line)}.wbDayBar:last-child{box-shadow:none}.wbRangeDay{color:var(--text);font:600 14px/20px var(--font-tile);white-space:nowrap}.wbRangeLo{color:var(--muted);text-align:right;font:400 16px/20px var(--font);font-variant-numeric:tabular-nums}.wbRangeHi{color:var(--text);text-align:right;font:400 16px/20px var(--font-tile);font-variant-numeric:tabular-nums}.wbRangeTrack{position:relative;height:6px;border-radius:3px;background:var(--tile)}.wbRangeFill{position:absolute;top:0;right:0;bottom:0;left:0;border-radius:3px}.wbRangeNow{position:absolute;top:50%;width:10px;height:10px;margin:-5px 0 0 -5px;border-radius:50%;background:#fff;box-shadow:0 0 0 2px var(--card)}.wbSkyArt{position:absolute;top:0;height:100%}.wbSkyArt>canvas{display:block;width:100%;height:100%}.wbSkyArt>canvas.wbPixels{image-rendering:pixelated}.wbPrimaryV{font:400 18px/20px var(--font-tile);font-variant-numeric:tabular-nums}.wbSecondary{min-height:20px;color:var(--muted);font:400 15px/20px var(--font)}@container wb-card (width < 480px){.wbHourly :is(.wbHeader,.wbTabs){padding:0 8px}.wbBars .wbDayBars{padding:0 8px;min-height:380px}.wbBars.wbTabbed .wbDayBars{min-height:426px}.wbDayBar{column-gap:8px}.wbStripScroll{min-height:380px}}.wbSunSky{flex:1;min-height:0;display:flex;border-radius:16px;overflow:hidden;transition:background 1s ease}.wbSunSky svg{display:block;width:100%;height:100%;overflow:visible}.wbSunPath{fill:none;stroke:var(--wb-sun-line);stroke-opacity:.4;stroke-width:28.3}.wbHorizon{stroke:var(--wb-sun-line);stroke-opacity:.3;stroke-width:1}.wbSunTime{fill:var(--wb-sun-line);font-size:13px;font-weight:600;text-anchor:middle}.wbSunTime.wbNoon{dominant-baseline:central}.wbSunTile .wbZone{display:block}.wbSunZone{position:absolute;top:0;right:0;bottom:0;left:0;color:#fff;transition:background 1s ease}.wbSunTrack{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;display:block}.wbSunBand{fill:#fff;fill-opacity:.1}.wbSunBand.wbSunDay{fill-opacity:.14}.wbSunBand.wbSunDone{fill-opacity:.85}.wbSunDot{fill:#ffd84a}.wbSunDot.wbSunNight{fill:#9aa3c7}.wbSunCount{position:absolute;top:22px;right:22px;bottom:22px;left:22px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2px;padding-bottom:14px}.wbSunLeft{font:500 clamp(28px,calc(16cqw * var(--wb-k,1)),36px)/1.1 var(--font-tile);letter-spacing:-.02em;font-variant-numeric:tabular-nums;white-space:nowrap}.wbSunWord{font:400 13px/18px var(--font);opacity:.85}.wbSunAt{position:absolute;bottom:32px;font:500 12px/16px var(--font);opacity:.85;font-variant-numeric:tabular-nums}.wbSunRise{left:32px}.wbSunSet{right:32px}.wbMoonBox{flex:1;min-height:0;display:flex;justify-content:center}.wbMoonArt{display:block;flex:none;width:auto;height:100%;max-width:100%}.wbMoonCaption{gap:8px}.wbMoonCaption span:first-child{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.wbMoonCaption span:last-child{flex:none}.wbMaria{fill:#7d7d78}.wbCrater{fill:#00000017}.wbRays{stroke:#fff;stroke-width:1.2;stroke-linecap:round;opacity:.16}.wbBrightSpots{fill:#fff;opacity:.25}.wbBrightCenter{fill:#f6f6f2;opacity:.75}.wbMottle{opacity:.3;mix-blend-mode:multiply}.wbGrain{opacity:.12;mix-blend-mode:multiply}.wbMoonNight{fill:#0a0a0ebf}.wbWind .wbVisual>svg{overflow:visible}.wbTick{stroke:var(--muted);stroke-width:2.5;stroke-linecap:round}.wbTick.wbMajor{stroke:var(--text);stroke-width:3}.wbLetter{fill:var(--muted);font-size:15px;font-weight:600;text-anchor:middle;dominant-baseline:central}.wbLetter.wbNorth{fill:var(--text)}.wbMarker{fill:var(--primary)}.wbDisc{fill:var(--text)}.wbSpeed{fill:var(--card);font-size:34px;font-weight:500;letter-spacing:-.5px;text-anchor:middle;dominant-baseline:central}.wbSpeedUnit{fill:var(--card);font-size:12px;font-weight:600;text-anchor:middle;dominant-baseline:central;opacity:.7}.wbWater{position:absolute;left:0;right:0;bottom:0;transition:height 1.2s ease}.wbWater .wbBody{position:absolute;top:0;right:0;bottom:0;left:0;background:linear-gradient(180deg,#b2e5fc2e,#81d4fa52,#4fc3f76b 70%,#03a9f48c);-webkit-mask-image:linear-gradient(180deg,transparent,#000 26px);mask-image:linear-gradient(180deg,transparent,#000 26px)}.wbWater .wbMist{position:absolute;left:-10%;right:-10%;bottom:calc(100% - 26px);height:60px;background:radial-gradient(ellipse at 50% 100%,#b2e5fc4d,#b2e5fc00 70%);filter:blur(8px)}.wbWater .wbHaze{position:absolute;width:80%;height:45%;border-radius:50%;background:radial-gradient(closest-side,#ffffff38,#fff0);filter:blur(10px);animation:wbDrift 16s ease-in-out infinite alternate}.wbWater .wbHaze.wbOne{left:-15%;top:8%}.wbWater .wbHaze.wbTwo{right:-20%;top:40%;animation-duration:21s;animation-direction:alternate-reverse}@keyframes wbDrift{0%{transform:translate(-12%)}to{transform:translate(18%)}}.wbWaterValue{flex:1;display:flex;align-items:flex-end}.wbSea{position:relative;flex:1;min-height:0;border-radius:16px;overflow:hidden;--wb-sea-inset:clamp(8.88px,calc(4.76cqw * var(--wb-k,1)),12px)}.wbSeaArt{position:absolute;top:0;right:0;bottom:0;left:0;display:block;width:100%;height:100%;image-rendering:pixelated}.wbSeaFact{position:absolute;top:clamp(7px,calc(3.97cqw * var(--wb-k,1)),10px);inset-inline:var(--wb-sea-inset);color:#26221e;font:600 clamp(9.44px,calc(5.47cqw * var(--wb-k,1)),13.78px)/1.23 var(--font-tile)}.wbSeaValue{position:absolute;bottom:var(--wb-sea-inset);inset-inline-start:var(--wb-sea-inset);color:#fff;text-shadow:0 0 2px rgba(0,0,0,.6),0 1px 3px rgba(0,0,0,.5)}.wbSeaValue .wbUnitV{color:inherit}.wbVu{display:block;width:100%;height:100%;min-height:0;overflow:visible}.wbVuZone{fill:none;stroke-width:12.3;stroke-linecap:butt}.wbVuTick{stroke:var(--muted);stroke-width:.95;stroke-linecap:round}.wbVuTick.wbMajor{stroke:var(--text);stroke-width:1.9}.wbVisual svg text.wbVuLabel{fill:var(--muted);font-family:"Alfarn",var(--font-tile);font-size:18.9px;font-weight:600;letter-spacing:.08em;text-anchor:middle;dominant-baseline:central}.wbVuNeedle{transform-box:view-box;transform-origin:100px 130px;transform:rotate(var(--wb-angle));animation:wbSwing 1.4s cubic-bezier(.3,1.6,.5,1);transition:transform 1s cubic-bezier(.3,1.6,.5,1)}.wbVuNeedle line{stroke:#e0574d;stroke-width:2;stroke-linecap:round}@keyframes wbSwing{0%{transform:rotate(-48deg)}}.wbVuHousing{fill:var(--tile)}.wbVuValue{fill:var(--text);font-size:30.2px;font-weight:600;text-anchor:middle;dominant-baseline:central}@media (prefers-reduced-motion:reduce){.wbWater .wbHaze,.wbVuNeedle{animation:none}}.wbTapeRow{flex:1;min-height:0;display:flex;align-items:stretch;gap:8px}.wbTapeValue{flex:1;display:flex;flex-direction:column;justify-content:center;min-width:0}.wbTapeUnit{color:var(--muted);font:300 clamp(13px,7.1cqw,18px)/1.25 var(--font-tile)}.wbTape{flex:none;width:40%;height:100%}.wbTapeTick{stroke:var(--text);stroke-width:2;stroke-linecap:round}.wbTapeLabel{fill:var(--text);font-size:15px;dominant-baseline:central}.wbTapeEnd{fill:var(--muted);font-size:14px;font-weight:600;text-anchor:middle;dominant-baseline:central}.wbTapeMarker{stroke:#e0574d;stroke-width:4;stroke-linecap:round}.wbCompare{flex:1;min-height:0;display:grid;grid-template-columns:minmax(0,1fr) calc(50% - 28px * var(--wb-k));grid-template-rows:minmax(0,1fr);gap:16px;align-items:stretch}.wbCompareText{display:flex;flex-direction:column;justify-content:flex-end;gap:4px;min-width:0}.wbCompareNumber{font:500 calc(26.4cqw * var(--wb-k)) / 1 var(--font-tile);letter-spacing:-.02em;white-space:nowrap}.wbCompareWords{color:var(--muted);font:300 clamp(14px,calc(7.1cqw * var(--wb-k)),18px) / 1.25 var(--font-tile)}.wbCompareTemps{margin-top:6px;font:400 clamp(12px,calc(5.6cqw * var(--wb-k)),14px) / 1.4 var(--font)}.wbTrend{position:relative;width:100%;height:100%;min-height:0}.wbTrendPlot{position:absolute;top:22px;right:0;bottom:24px;left:0}.wbTrendPlot svg{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;overflow:visible}.wbTrendLine{fill:none;stroke:var(--text);stroke-width:2;stroke-linejoin:round;stroke-linecap:round;opacity:.8}.wbTrendDot{position:absolute;width:7px;height:7px;margin:-3.5px 0 0 -3.5px;border-radius:50%;background:var(--card);box-shadow:0 0 0 2px var(--text)}.wbTrendDot.wbToday{width:11px;height:11px;margin:-5.5px 0 0 -5.5px;background:var(--primary);box-shadow:0 0 0 3px var(--card)}.wbAvgValue{position:absolute;transform:translate(-50%,calc(-100% - 8px));color:var(--muted);font:400 10px/1 var(--font-tile);white-space:nowrap}.wbAvgValue.wbToday{color:var(--text);font-size:12px;font-weight:600}.wbTrendAvg{position:absolute;right:0;transform:translateY(4px);color:var(--muted);font:400 10px/1 var(--font-tile)}.wbTrendDays{position:absolute;left:0;right:0;bottom:0;height:16px}.wbAvgDay{position:absolute;bottom:0;transform:translate(-50%);color:var(--muted);font:400 11px/16px var(--font-tile)}.wbAvgDay.wbToday{color:var(--text);font-weight:600}.wbAvgLine{stroke:var(--text);stroke-width:1;stroke-dasharray:3 4;opacity:.6}.wbCard.wbHc.wbAqOpen{padding:var(--inset);min-height:243px}.wbAqTiles{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}@container wb-card (width < 280px){.wbAqTiles{grid-template-columns:1fr}}.wbAq .wbGraph{gap:10px}.wbScale{position:relative;height:4px;border-radius:9999px}.wbScale i{position:absolute;top:50%;box-sizing:content-box;width:10px;height:10px;border-radius:50%;background-color:var(--text);border:2px solid var(--wb-scale-edge);transform:translate(-50%,-50%)}.wbZoned{gap:14px}.wbZone{position:relative;flex:none;height:198px;display:flex;align-items:center;justify-content:center;border-radius:16px;overflow:hidden}.wbCallouts{display:none;flex-direction:column;gap:4px;margin-top:-6px}.wbCallout{display:flex;justify-content:space-between;gap:12px;color:var(--muted);font:400 14px/20px var(--font)}.wbCallout>span:first-child{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.wbCallout>span:last-child{flex:none;color:var(--text);white-space:nowrap}.wbZone>.wbSunSky{flex:1;align-self:stretch;border-radius:0}.wbZone>.wbMoonBox{flex:none;height:150px}.wbBase .wbZone{align-items:flex-end;justify-content:flex-start}.wbZone>.wbTapeRow{align-self:stretch;height:100%}.wbItem[data-xl] .wbCallouts{display:flex}.wbUv .wbZone{display:block}.wbUvArt{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;display:block}.wbUvBig{position:absolute;right:0;bottom:0;display:flex;flex-direction:column;align-items:flex-end}.wbUvNum{font:500 64px/.9 var(--font-tile);letter-spacing:-.03em;color:var(--text);font-variant-numeric:tabular-nums}.wbUvWord{margin-top:6px;font:400 14px/20px var(--font);color:var(--muted)}.wbAqSmile .wbZone{display:block}.wbAqFill{position:absolute;top:0;right:0;bottom:0;left:0;color:#fff}.wbAqFace{position:absolute;left:12px;top:12px;width:min(140px,calc(100% - 60px));height:auto;aspect-ratio:1;fill:none;stroke:currentColor;stroke-width:3.4;stroke-linecap:round;stroke-linejoin:round}.wbAqFace .wbAqEyes{stroke-width:5}.wbAqBig{position:absolute;right:14px;bottom:12px;display:flex;flex-direction:column;align-items:flex-end}.wbAqNum{font:500 56px/.9 var(--font-tile);letter-spacing:-.03em;font-variant-numeric:tabular-nums}.wbAqUnit{margin-top:4px;font:500 14px/20px var(--font)}.wbPollenAir{position:absolute;top:0;right:0;bottom:62px;left:0;overflow:hidden;pointer-events:none}.wbFloat{position:absolute;left:-12%;animation:wbFloat linear infinite}.wbBob{display:block;animation:wbBob ease-in-out infinite alternate}@keyframes wbFloat{0%{left:-12%}to{left:106%}}@keyframes wbBob{0%{transform:translateY(-6px) rotate(-14deg)}to{transform:translateY(8px) rotate(16deg)}}.wbFloat svg{display:block}.wbSeed svg{width:calc(20px * var(--s));height:calc(28px * var(--s))}.wbGrain svg{width:calc(10px * var(--s));height:calc(10px * var(--s))}.wbStem svg{width:calc(9px * var(--s));height:calc(26px * var(--s))}.wbSeed{color:var(--text);opacity:.7}.wbGrain{color:#e9c46a;opacity:.85}.wbStem{color:#a3b18a;opacity:.75}#app.light .wbGrain{color:#c99a1e}#app.light .wbStem{color:#7d8c5f}@media (prefers-reduced-motion:reduce){.wbFloat,.wbBob{animation:none}.wbFloat{left:var(--x)}}.wbPush{display:block;transition:transform .35s cubic-bezier(.2,.8,.3,1)}.wbCallout.wbAdvice>span:first-child{color:var(--text)}.wbCard.wbSquare.wbGraphCard{height:100%;min-height:0}.wbGraphCard .wbHead .wbBack{margin:-4px -6px 0 auto}.wbGraphCard .wbRangeBtn{align-self:flex-start;display:inline-flex;align-items:center;gap:6px;max-width:100%;height:32px;padding:0 8px 0 10px;border:0;border-radius:12px;background:var(--tile);box-shadow:var(--hc-hair-all);color:var(--text);font:600 12px/16px var(--font-tile);cursor:pointer}.wb button.wbRangeBtn{border-radius:12px!important}.wbRangeBtn>span{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.wbRangeBtn .wbIcon{flex:none;width:16px;height:16px;fill:currentColor}.wbRangeBtn[aria-expanded=true]{background:var(--bright);color:var(--on-bright)}.wbItem:has(.wbRangePick){position:relative;z-index:30}.wbRangePick{position:absolute;top:116px;left:18px;z-index:30;display:flex;flex-direction:column;gap:12px;width:248px;box-sizing:border-box;padding:12px;border-radius:24px;background:var(--card);box-shadow:var(--hc-hair-all),0 18px 40px #00000059}.wbRangePick.wbPickRight{left:auto;right:18px}.wbRangePresets{display:flex;flex-direction:column;gap:2px}.wb .wbRangePreset{height:32px;padding:0 12px;border:0;border-radius:12px!important;background:transparent;color:var(--text);font:400 14px/20px var(--font);text-align:left;cursor:pointer}.wb .wbRangePreset:hover{background:var(--tile)}.wb .wbRangePreset[aria-pressed=true]{background:var(--bright);color:var(--on-bright);font-weight:600}.wbRangeDates{display:grid;grid-template-columns:1fr 1fr;gap:8px;padding-top:12px;box-shadow:inset 0 .4px 0 var(--line)}.wbRangeDates label{display:grid;gap:4px;min-width:0;color:var(--muted);font:400 12px/16px var(--font)}.wbRangeDates input{width:100%;min-width:0;height:32px;box-sizing:border-box;padding:0 6px;border:0;border-radius:12px;background:var(--tile);box-shadow:var(--hc-hair-all);color:var(--text);font:400 12px/16px var(--font);color-scheme:inherit}.wb .wbRangeApply{height:32px;padding:0 14px;border:0;border-radius:999px!important;background:var(--bright);color:var(--on-bright);font:600 12px/16px var(--font-tile);cursor:pointer}.wbGraphCard .wbGraph{flex:1;height:auto;min-height:0}`, Uu = '#app .mvPv{position:relative;transform:perspective(var(--pv-persp)) rotateX(var(--rx,0deg)) rotateY(var(--ry,0deg)) scale(var(--sc,1));transition:transform var(--pv-ret) var(--pv-ease)}#app .mvPv.mvMoving{transition:transform 70ms linear}#app .mvPv:after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;pointer-events:none;opacity:0;mix-blend-mode:soft-light;background:radial-gradient(circle at var(--mx,50%) var(--my,50%),rgba(255,255,255,var(--pv-shine)),transparent var(--pv-size));transition:opacity var(--pv-ret) ease}#app .mvPv.mvLit:after{opacity:1}#app .tfBar{--mv-c:var(--light-soft,var(--primary));transform-origin:center;transition:box-shadow var(--ab-out) var(--ab-ease),transform var(--ab-out) var(--ab-ease)}#app .tfBar.mvHover{box-shadow:0 0 var(--ab-blur) var(--ab-spread) color-mix(in srgb,var(--mv-c) var(--ab-str),transparent);transition-duration:var(--ab-in)}#app .tfBar.mvHold{box-shadow:0 0 var(--ab-blur2) var(--ab-spread2) color-mix(in srgb,var(--mv-c) var(--ab-str2),transparent);transform:var(--ab-grow);transition-duration:var(--ab-in)}#app :is(button.tfIcon,.tfBack,.tfEditChip,.tfTrayBtn,[data-wb=graph-close])>:is(svg,ha-icon,ha-state-icon,span){transition:scale var(--ih-dur) var(--ih-ease)}@media (hover:hover){#app :is(button.tfIcon,.tfBack,.tfEditChip,.tfTrayBtn,[data-wb=graph-close]):hover>:is(svg,ha-icon,ha-state-icon,span){scale:var(--ih-s)}#app :is(button.tfIcon,.tfBack,.tfEditChip,.tfTrayBtn,[data-wb=graph-close]):hover:before{opacity:1}}:where(#app button.tfIcon,#app .tfBack,#app .tfEditChip,#app .tfTrayBtn,#app [data-wb=graph-close]){position:relative}#app :is(button.tfIcon,.tfBack,.tfEditChip,.tfTrayBtn,[data-wb=graph-close]):before{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;pointer-events:none;background:color-mix(in srgb,currentColor var(--ih-tint),transparent);opacity:0;transition:opacity var(--ih-dur) var(--ih-ease)}#app :is(button.tfIcon,.tfBack,.tfEditChip,.tfTrayBtn,[data-wb=graph-close]):active>:is(svg,ha-icon,ha-state-icon,span){scale:var(--ih-p)}#app .mvSegInd{position:absolute;z-index:0;pointer-events:none}#app .mvSegMoving>button{position:relative;z-index:1;background-color:transparent!important;box-shadow:none!important;transition:none!important}#app .tfMoreBackdrop{-webkit-backdrop-filter:blur(12px);backdrop-filter:blur(12px)}#app .toast.tfToast{min-height:58px;box-sizing:border-box;padding:9px 18px 9px 9px;gap:14px;border-radius:29px;font-size:18px;line-height:1.2}#app .toast .mvTick{display:grid;place-items:center;flex:none;width:40px;height:40px;border-radius:var(--r-inner);background:var(--mv-ok);color:#fff}#app .toast .mvTick svg{width:26px;height:26px;fill:none;stroke:currentColor;stroke-width:2.6;stroke-linecap:round;stroke-linejoin:round}#app .toast .mvToastText{font-weight:600}#app .toast .toastAction{font-size:16px;margin-left:2px}#app .mvGrid{stroke:var(--divider,rgba(127,127,127,.25));stroke-width:1;vector-effect:non-scaling-stroke}#app{--ol-l:68%;--mv-ok:#4cc38a}#app.light{--ol-l:48%;--mv-ok:#1f7a4d}#app .tfAreaPanel:has(>.mvEdge){isolation:isolate;position:relative}#app .mvEdge,#app .mvEdgeFill{position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;pointer-events:none;transition:opacity var(--ol-in) ease-out}#app .mvEdgeFill{z-index:-1;background:hsl(var(--ol-h) 97% var(--ol-l));mix-blend-mode:soft-light;opacity:clamp(0,calc(var(--ol-fill) * (var(--edge-proximity,0) - var(--ol-csens)) / (100 - var(--ol-csens))),var(--ol-fill));-webkit-mask-image:conic-gradient(from var(--cursor-angle,45deg) at center,transparent 5%,black 15%,black 85%,transparent 95%);mask-image:conic-gradient(from var(--cursor-angle,45deg) at center,transparent 5%,black 15%,black 85%,transparent 95%)}#app .mvEdge{z-index:5}#app .mvEdge:before{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;box-shadow:inset 0 0 0 .8px hsl(var(--ol-h) 97% var(--ol-l));opacity:clamp(0,calc(var(--ol-border) * (var(--edge-proximity,0) - var(--ol-csens)) / (100 - var(--ol-csens))),var(--ol-border));-webkit-mask-image:conic-gradient(from var(--cursor-angle,45deg) at center,black calc(var(--ol-cone) * 1%),transparent calc((var(--ol-cone) + 15) * 1%),transparent calc((100 - var(--ol-cone) - 15) * 1%),black calc((100 - var(--ol-cone)) * 1%));mask-image:conic-gradient(from var(--cursor-angle,45deg) at center,black calc(var(--ol-cone) * 1%),transparent calc((var(--ol-cone) + 15) * 1%),transparent calc((100 - var(--ol-cone) - 15) * 1%),black calc((100 - var(--ol-cone)) * 1%))}#app .mvEdge>i{position:absolute;top:-19.2px;right:-19.2px;bottom:-19.2px;left:-19.2px;border-radius:inherit;mix-blend-mode:plus-lighter;opacity:clamp(0,calc(var(--ol-glow) * (var(--edge-proximity,0) - var(--ol-esens)) / (100 - var(--ol-esens))),var(--ol-glow));-webkit-mask-image:conic-gradient(from var(--cursor-angle,45deg) at center,black 2.5%,transparent 10%,transparent 90%,black 97.5%);mask-image:conic-gradient(from var(--cursor-angle,45deg) at center,black 2.5%,transparent 10%,transparent 90%,black 97.5%)}#app .mvEdge>i:before{content:"";position:absolute;top:19.2px;right:19.2px;bottom:19.2px;left:19.2px;border-radius:inherit;--s:var(--ol-size);box-shadow:inset 0 0 0 .8px hsl(var(--ol-h) 97% var(--ol-l) / 60%),inset 0 0 calc(2.4px*var(--s)) 0 hsl(var(--ol-h) 97% var(--ol-l) / 40%),inset 0 0 calc(6.4px*var(--s)) 0 hsl(var(--ol-h) 97% var(--ol-l) / 30%),inset 0 0 calc(12.8px*var(--s)) 0 hsl(var(--ol-h) 97% var(--ol-l) / 20%),0 0 calc(2.4px*var(--s)) 0 hsl(var(--ol-h) 97% var(--ol-l) / 40%),0 0 calc(6.4px*var(--s)) 0 hsl(var(--ol-h) 97% var(--ol-l) / 30%),0 0 calc(12.8px*var(--s)) 0 hsl(var(--ol-h) 97% var(--ol-l) / 20%),0 0 calc(22.4px*var(--s)) calc(1.6px*var(--s)) hsl(var(--ol-h) 97% var(--ol-l) / 10%)}#app :not(.mvLitEdge)>:is(.mvEdge,.mvEdgeFill){opacity:0;transition:opacity var(--ol-out) ease-out}@media (prefers-reduced-motion:reduce){#app .mvPv{transform:none!important}#app .mvPv:after{display:none}#app .tfBar.mvHold{transform:none}#app :is(button.tfIcon,.tfBack,.tfEditChip,.tfTrayBtn,[data-wb=graph-close])>*{scale:none!important}}#app .tfBoardItem.mvDrag{scale:none}#app.tfEditing.tfBoardReady .tfBoardItem:not(.tfDragging){transition:left .42s cubic-bezier(.34,1.46,.64,1),top .42s cubic-bezier(.34,1.46,.64,1),height .42s cubic-bezier(.34,1.46,.64,1)}', Yu = `<main id="app"><div class="shell">
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
`, Pn = {
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
}, Bn = (n) => n < 0 ? 0 : n > 1 ? 1 : n, Qc = (n, l, i) => n + (l - n) * i, Oc = (n) => {
  const l = String(n || "#000000").trim().replace("#", ""), i = l.length === 3 ? l.split("").map((u) => u + u).join("") : l;
  return [0, 2, 4].map((u) => parseInt(i.slice(u, u + 2), 16) || 0);
}, Zu = (n) => "#" + n.map((l) => Math.round(Math.max(0, Math.min(255, l))).toString(16).padStart(2, "0")).join(""), tp = {}, ca = (n, l, i) => {
  const u = n + l + i;
  return tp[u] || (tp[u] = Zu(Oc(n).map((g, x) => g + (Oc(l)[x] - g) * i)));
}, ep = {}, Xd = (n) => ep[n] || (ep[n] = Oc(n)), wc = (n, l, i, u) => (g) => {
  if (g <= 0) return 0;
  if (g >= 1) return 1;
  let x = 0, k = 1, A = g;
  for (let I = 0; I < 18; I++)
    A = (x + k) / 2, 3 * (1 - A) * (1 - A) * A * n + 3 * (1 - A) * A * A * i + A * A * A < g ? x = A : k = A;
  return 3 * (1 - A) * (1 - A) * A * l + 3 * (1 - A) * A * A * u + A * A * A;
}, Ku = { std: wc(0.2, 0, 0, 1), acc: wc(0.3, 0, 1, 1), dec: wc(0, 0, 0, 1) };
function sc(n, l) {
  const i = String(n || "");
  return (i === "sunny" || i === "clear-night" ? "clear" : i === "partlycloudy" ? "partly" : i === "fog" ? "fog" : i === "lightning" || i === "lightning-rainy" ? "storm" : i === "snowy" || i === "snowy-rainy" ? "snow" : i === "rainy" || i === "pouring" || i === "hail" ? "rain" : "cloudy") + "/" + (i === "clear-night" || l ? "night" : "day");
}
function ou(n) {
  const l = { clear: [n.skyClearDay, n.skyClearNight], cloudy: [n.skyCloudyDay, n.skyCloudyNight], rain: [n.skyRainDay, n.skyRainNight], snow: [n.skySnowDay, n.skySnowNight], fog: [n.skyFogDay, n.skyFogNight] };
  return l.partly = [ca(l.clear[0], l.cloudy[0], 0.12), ca(l.clear[1], l.cloudy[1], 0.12)], l.storm = [ca(l.rain[0], "#000000", 0.22), ca(l.rain[1], "#000000", 0.22)], l;
}
const qc = [[61, 29, 4.4], [73, 16, 2.9], [79, 57, 3.3], [21, 77, 2.5], [13, 20, 2.3]], Wc = [[29.35, 60.65], [43.04, 60.65], [56.74, 60.65]], Vc = [[30, 64], [44, 61], [58, 64], [37, 74], [51, 74]];
function jc(n, l = Pn) {
  const i = { ...Pn, ...l }, u = ou(i), g = String(n).split("/"), x = u[g[0]] ? g[0] : "clear", k = g[1] === "night", A = u[x][k ? 1 : 0], I = {
    night: k,
    clearness: x === "clear" ? 1 : x === "partly" ? 0.7 : 0.25,
    sky: A,
    skyStops: [A],
    skyT: 0,
    sun: { x: 45, y: k ? 134 : 45, r: 33.26, o: 0 },
    moon: { x: 45, y: k ? 45 : 134, d: 64, o: 0 },
    cloud: { x: 134, y: 52.83, w: 58.7, o: 0, f: k ? 1 : 0 },
    stars: qc.map(() => ({ o: 0 })),
    rain: Wc.map(() => ({ o: 0, dy: -16 })),
    snow: Vc.map(() => ({ o: 0, dy: -16 })),
    bolt: { o: 0, dy: -10 }
  }, M = (W) => qc.map(() => ({ o: W }));
  return x === "clear" ? k ? (I.moon.o = 1, I.stars = M(1)) : I.sun.o = 1 : x === "partly" ? (I.cloud = { x: 52.83, y: 52.83, w: 58.7, o: 1, f: k ? 1 : 0 }, k ? (I.moon = { x: 34, y: 33, d: 48, o: 1 }, I.stars = M(0.7)) : I.sun = { x: 35.22, y: 33.26, r: 23.48, o: 1 }) : x === "cloudy" || x === "fog" ? (I.cloud = { x: 45, y: 42.99, w: 66.52, o: 1, f: k ? 1 : 0 }, k ? I.moon = { x: 40, y: 36, d: 40, o: 0 } : I.sun = { x: 40, y: 36, r: 20, o: 0 }) : (I.cloud = { x: 45, y: 33.26, w: 58.7, o: 1, f: 1 }, k ? I.moon = { x: 38, y: 28, d: 36, o: 0 } : I.sun = { x: 38, y: 28, r: 18, o: 0 }, x === "snow" ? I.snow = Vc.map(() => ({ o: 1, dy: 0 })) : I.rain = Wc.map((W, F) => ({ o: x === "storm" && F === 1 ? 0 : 1, dy: 0 })), x === "storm" && (I.bolt = { o: 1, dy: 0 })), I;
}
const ap = {
  cloud: { enter: [0, 0.55, "dec"], leave: [0.25, 0.8, "acc"], stay: [0.1, 0.75, "std"] },
  body: { enter: [0.35, 0.9, "dec"], leave: [0.15, 0.65, "acc"], stay: [0.1, 0.75, "std"] },
  fx: { enter: [0.55, 1, "dec"], leave: [0, 0.35, "acc"], stay: [0.1, 0.75, "std"] },
  sky: [0.1, 0.8, "std"]
};
function $u(n, l, i, u = Pn, g = !1) {
  const x = { ...Pn, ...u }, k = (V, z) => V > 0.01 && z > 0.01 ? "stay" : V > 0.01 ? "leave" : z > 0.01 ? "enter" : "none", A = (V, z, pt, et) => {
    const X = V[0] + z * et, G = V[1] - (pt - 1 - z) * et;
    return Ku[V[2]](Bn((i - X) / Math.max(1e-3, G - X)));
  }, I = (V, z, pt, et = 0, X = 1, G = 0) => {
    const ht = k(V.o, z.o);
    if (ht === "none") return { ...z, o: 0 };
    const dt = A(ap[pt][ht], et, X, G), kt = {};
    for (const ot in z) kt[ot] = g && ht !== "stay" && ot !== "o" ? ht === "leave" ? V[ot] : z[ot] : Qc(V[ot], z[ot], dt);
    return kt;
  }, M = A(ap.sky, 0, 1, 0);
  let W, F;
  if (n.night !== l.night) {
    const V = Math.min(n.clearness, l.clearness), z = ca(ca(n.sky, l.sky, 0.5), x.dusk, 0.6 * V);
    W = M < 0.5 ? ca(n.sky, z, M * 2) : ca(z, l.sky, M * 2 - 1), F = V > 0.5 ? [n.sky, x.dusk, l.sky] : [n.sky, l.sky];
  } else
    W = ca(n.sky, l.sky, M), F = [n.sky, l.sky];
  return {
    night: i < 0.5 ? n.night : l.night,
    clearness: Qc(n.clearness, l.clearness, i),
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
const Xu = [
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
], Dn = (n, l) => (Xu[(l & 7) * 8 + (n & 7)] + 0.5) / 64, Ju = 0, Uc = 1, Yc = 2, Zc = 3, Kc = 4, _n = 5, ul = 6, Or = 7, $c = 8, ac = (n, l) => l <= 0.6665 && ((n - 0.5) * (n - 0.5) + (l - 0.2877) * (l - 0.2877) <= 0.0824 || (n - 0.25) * (n - 0.25) + (l - 0.416) * (l - 0.416) <= 0.0625 || (n - 0.791) * (n - 0.791) + (l - 0.458) * (l - 0.458) <= 0.0437 || n >= 0.25 && n <= 0.791 && l >= 0.416), Qu = ["...##", "..##.", ".##..", "#####", "..##.", ".##..", ".#..."], tf = [[7, 0], [0, 13], [5, 13], [2, 24], [11, 9], [6, 9], [9, 0]].map((n) => [n[0] * 13 / 11, n[1] * 28 / 24]), iu = (n, l, i) => {
  let u = !1;
  for (let g = 0, x = n.length - 1; g < n.length; x = g++) {
    const k = n[g], A = n[x];
    k[1] > i != A[1] > i && l < (A[0] - k[0]) * (i - k[1]) / (A[1] - k[1]) + k[0] && (u = !u);
  }
  return u;
};
function ru(n, { size: l = 90, px: i = 2, oneBit: u = !1, colors: g = Pn, ink: x = "#26221e", paper: k = "#fbf9f6", clock: A = 0, idle: I = !1 } = {}) {
  const M = { ...Pn, ...g }, W = Math.sin, F = Math.PI * 2, V = Math.max(6, Math.round(l / i)), z = V / 90, pt = I ? Math.floor(A / 100) * 100 : 0, et = I ? W(F * pt / 3600) : 0, X = I ? 1.8 * W(F * pt / 6400) : 0, G = I ? 0.9 * W(F * pt / 4100) : 0, ht = I ? 0.8 * W(F * pt / 5200) : 0, dt = pt / 3400 % 1, kt = I && n.bolt.o > 0.5 && (dt < 0.04 || dt > 0.08 && dt < 0.11), ot = new Array(V * V), nt = new Uint8Array(V * V), at = (L, R, q, D, lt) => {
    q == null || L < 0 || R < 0 || L >= V || R >= V || (D >= 1 || D > Dn(L + 5, R + 3)) && (ot[R * V + L] = q, nt[R * V + L] = lt);
  }, E = (L, R, q, D) => {
    for (let lt = Math.max(0, Math.floor(R - q) - 1); lt <= Math.min(V - 1, R + q + 1); lt++) for (let ut = Math.max(0, Math.floor(L - q) - 1); ut <= Math.min(V - 1, L + q + 1); ut++) D(ut, lt, ut + 0.5 - L, lt + 0.5 - R);
  }, Ct = n.skyStops || [n.sky], st = n.skyT || 0;
  for (let L = 0; L < V; L++) {
    const R = n.night ? Bn(1 - (L + 0.5) / (V * 0.7)) * 0.85 : Bn(((L + 0.5) / V - 0.35) / 0.65) * 0.85;
    for (let q = 0; q < V; q++) {
      let D = Ct[0];
      if (Ct.length > 1) {
        const lt = st * (Ct.length - 1), ut = Math.min(Ct.length - 2, Math.floor(lt));
        D = lt - ut > Dn(q, L) ? Ct[ut + 1] : Ct[ut];
      }
      R > Dn(q + 2, L + 5) && (D = n.night ? ca(D, "#000000", 0.28) : ca(D, "#ffffff", 0.2)), ot[L * V + q] = kt ? ca(D, "#ffffff", 0.25) : D;
    }
  }
  if (n.sun.o > 0.01) {
    const L = n.sun.x * z, R = n.sun.y * z, q = Math.max(1, n.sun.r * z);
    if (I) {
      const D = q * (1.45 + 0.06 * et), lt = ca(M.sun, "#ffffff", 0.55);
      if (E(L, R, D, (ut, gt, St, Lt) => {
        const $t = Math.sqrt(St * St + Lt * Lt);
        $t > q && $t < D && at(ut, gt, lt, 0.26 * (1 - ($t - q) / (D - q)) * n.sun.o, Ju);
      }), n.sun.o > 0.5) {
        const ut = Math.floor(pt / 500) % 2, gt = Math.max(1, q * 0.22);
        for (let St = 0; St < 8; St++) if (St % 2 === ut) for (let Lt = q + 1.5; Lt < q + 1.5 + gt; Lt += 0.7) at(Math.floor(L + Math.cos(St * Math.PI / 4) * Lt), Math.floor(R + Math.sin(St * Math.PI / 4) * Lt), M.sun, n.sun.o, $c);
      }
    }
    E(L, R, q, (D, lt, ut, gt) => {
      if (ut * ut + gt * gt > q * q) return;
      const St = ((ut * 0.643 + gt * 0.766) / q + 1) / 2;
      at(D, lt, Bn((St - 0.62) / 0.38) > Dn(D, lt) ? M.sunEdge : M.sun, n.sun.o, Uc);
    });
  }
  if (qc.forEach((L, R) => {
    const q = n.stars[R].o;
    if (q < 0.01) return;
    const D = Math.floor(L[0] * z), lt = Math.floor(L[1] * z), ut = I ? (Math.floor(pt / 300) + R * 3) % 6 : 0;
    if (ut === 5) return;
    const gt = Math.round(L[2] * z * (ut === 4 ? 0.3 : ut < 2 ? 1 : 0.6));
    at(D, lt, M.star, q, Or);
    for (let St = 1; St <= gt; St++) {
      const Lt = St === gt && gt > 1 ? ca(M.star, n.sky, 0.5) : M.star;
      at(D - St, lt, Lt, q, Or), at(D + St, lt, Lt, q, Or), at(D, lt - St, Lt, q, Or), at(D, lt + St, Lt, q, Or);
    }
  }), n.moon.o > 0.01) {
    const L = Math.max(1.5, n.moon.d * z * 0.37), R = n.moon.x * z, q = n.moon.y * z + (I && ht > 0.4 ? -1 : 0), D = R + 0.547 * L, lt = q - 0.503 * L, ut = 0.82 * L, gt = ca(M.moon, "#ffffff", 0.6);
    E(R, q, L, (St, Lt, $t, ae) => {
      if ($t * $t + ae * ae > L * L) return;
      const Fa = St + 0.5 - D, qt = Lt + 0.5 - lt;
      Fa * Fa + qt * qt <= ut * ut || at(St, Lt, Bn((ae + L) / (2 * L) * 1.1 - 0.1) > Dn(St, Lt) ? M.moon : gt, n.moon.o, Yc);
    });
  }
  const Ot = Math.max(2, Math.round(15.65 * z)), it = Math.max(1, Math.round(5.87 * z * 0.5));
  Wc.forEach((L, R) => {
    const q = n.rain[R];
    let D = q.dy, lt = q.o;
    if (lt < 0.01) return;
    if (I) {
      const St = (pt / 950 + R / 3) % 1;
      D += -5 + St * 14, lt *= St < 0.18 ? St / 0.18 : St > 0.72 ? (1 - St) / 0.28 : 1;
    }
    const ut = (L[0] + 3 + X) * z, gt = (L[1] + D) * z;
    for (let St = 0; St < Ot; St++) for (let Lt = 0; Lt < it; Lt++) at(Math.floor(ut - 0.208 * St) + Lt, Math.floor(gt) + St, M.rain, lt, Kc);
  });
  const Zt = Math.max(0, Math.round(7.34 * z / 2.6));
  if (Vc.forEach((L, R) => {
    const q = n.snow[R];
    let D = q.dy, lt = 0, ut = q.o;
    if (ut < 0.01) return;
    if (I) {
      const Lt = (pt / 3200 + R / 5) % 1;
      D += -6 + Lt * 14, lt = 1.5 * W(F * (Lt * 1.5 + R / 5)), ut *= Lt < 0.2 ? Lt / 0.2 : Lt > 0.75 ? (1 - Lt) / 0.25 : 1;
    }
    const gt = Math.floor((L[0] + 3.67 + lt + X) * z), St = Math.floor((L[1] + 3.67 + D) * z);
    at(gt, St, M.snow, ut, _n);
    for (let Lt = 1; Lt <= Zt; Lt++)
      at(gt - Lt, St, M.snow, ut, _n), at(gt + Lt, St, M.snow, ut, _n), at(gt, St - Lt, M.snow, ut, _n), at(gt, St + Lt, M.snow, ut, _n), Zt > 1 && Lt < Zt && (at(gt - Lt, St - Lt, M.snow, ut, _n), at(gt + Lt, St - Lt, M.snow, ut, _n), at(gt - Lt, St + Lt, M.snow, ut, _n), at(gt + Lt, St + Lt, M.snow, ut, _n));
  }), n.bolt.o > 0.01)
    if (V >= 30) {
      const L = 39 + X, R = 50 + n.bolt.dy;
      for (let q = Math.floor(R * z); q <= (R + 28) * z; q++) for (let D = Math.floor(L * z); D <= (L + 13) * z; D++)
        iu(tf, (D + 0.5) / z - L, (q + 0.5) / z - R) && at(D, q, M.sun, n.bolt.o, ul);
    } else {
      const L = V / 18, R = 7, q = 10 + Math.round(n.bolt.dy * 0.2);
      Qu.forEach((D, lt) => D.split("").forEach((ut, gt) => {
        if (ut !== "#") return;
        const St = Math.floor((R + gt) * L), Lt = Math.floor((q + lt) * L);
        for (let $t = Lt; $t < Math.max(Lt + 1, Math.floor((q + lt + 1) * L)); $t++) for (let ae = St; ae < Math.max(St + 1, Math.floor((R + gt + 1) * L)); ae++) at(ae, $t, M.sun, n.bolt.o, ul);
      }));
    }
  if (n.cloud.o > 0.01) {
    const L = Math.max(3, n.cloud.w * z), R = L * 0.6665, q = (n.cloud.x + X) * z - L / 2, D = (n.cloud.y + G) * z - R / 2, lt = ca(M.cloudDay, M.cloudNight, Math.round(n.cloud.f * 4) / 4), ut = ca(lt, "#000000", 0.16);
    for (let gt = Math.max(0, Math.floor(D) - 1); gt <= Math.min(V - 1, D + R + 1); gt++) for (let St = Math.max(0, Math.floor(q) - 1); St <= Math.min(V - 1, q + L + 1); St++) {
      const Lt = (St + 0.5 - q) / L, $t = (gt + 0.5 - D) / L;
      ac(Lt, $t) && at(St, gt, !ac(Lt, $t + 1 / L) || Bn(($t - 0.42) / 0.25) * 0.8 > Dn(St, gt) ? ut : lt, n.cloud.o, Zc);
    }
  }
  return su(ot, nt, V, V, { oneBit: u, ink: x, paper: k, snowInk: !n.night });
}
function su(n, l, i, u, { oneBit: g, ink: x, paper: k, snowInk: A }) {
  const I = new Uint8ClampedArray(i * u * 4), M = Xd(x), W = Xd(k);
  for (let F = 0; F < u; F++) for (let V = 0; V < i; V++) {
    const z = F * i + V, pt = l[z];
    if (n[z] == null) continue;
    let et = Xd(n[z]);
    if (g) {
      let X;
      pt === Kc || pt === $c ? X = !0 : pt === _n ? X = A : pt === Or || pt === ul ? X = !1 : X = Math.round((0.2126 * et[0] + 0.7152 * et[1] + 0.0722 * et[2]) / 255 * 4) / 4 <= Dn(V, F), (pt === Uc || pt === Yc || pt === Zc || pt === ul) && (V > 0 && l[z - 1] !== pt || V < i - 1 && l[z + 1] !== pt || F > 0 && l[z - i] !== pt || F < u - 1 && l[z + i] !== pt) && (X = !0), et = X ? M : W;
    }
    I[z * 4] = et[0], I[z * 4 + 1] = et[1], I[z * 4 + 2] = et[2], I[z * 4 + 3] = 255;
  }
  return { w: i, h: u, data: I };
}
const ef = { clear: 0, partly: 0.35, cloudy: 0.85, fog: 0.9, rain: 1, storm: 1, snow: 0.9 }, af = (n) => sc(n, !1).split("/")[0], xc = (n) => () => {
  n |= 0, n = n + 1831565813 | 0;
  let l = Math.imul(n ^ n >>> 15, 1 | n);
  return l = l + Math.imul(l ^ l >>> 7, 61 | l) ^ l, ((l ^ l >>> 14) >>> 0) / 4294967296;
}, nf = "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", of = "M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", rf = "M0 -1L0.2687 -0.2687L1 0L0.2687 0.2687L0 1L-0.2687 0.2687L-1 0L-0.2687 -0.2687Z", sf = "M7 0L0 13L5 13L2 24L11 9L6 9L9 0Z", lf = [[7, 0], [0, 13], [5, 13], [2, 24], [11, 9], [6, 9], [9, 0]], df = [".##", "##.", ".#.", "#.."];
function lu(n, { width: l, height: i, colors: u, wave: g = 0.38, soft: x = 6, glow: k = 0.6 }) {
  const A = { ...Pn, dawn: "#e5a77e", ...u }, I = ou(A), M = l, W = i, F = M / 6, V = F / 2, z = Math.PI * 2, pt = n.length ? n : [{ cond: "cloudy", night: !1 }], et = [...Array(12)].map((dt, kt) => {
    const ot = pt[Math.min(kt, pt.length - 1)], nt = af(ot.cond), at = kt % 2 === 1;
    return { cond: ot.cond, k: nt, night: at, sky: I[nt][at ? 1 : 0], cover: ef[nt] };
  }), X = (dt) => W * (0.5 - g * Math.cos(z * (dt / F - 0.25)));
  return { C: A, S: et, W: M, H: W, cw: F, sw: V, TAU: z, yb: X, side: (dt, kt, ot) => {
    const nt = (dt ? X(kt) - ot : ot - X(kt)) / Math.max(3, x * 1.4) + 0.5;
    return nt <= 0 ? 0 : nt >= 1 ? 1 : nt;
  }, glowAt: (dt) => {
    const kt = ((dt / F - 0.25) % 1 + 1) % 1, ot = Math.max(0, Math.min(5, Math.round(dt / F - 0.25))), nt = Math.max(0, Math.min(5, Math.round(dt / F - 0.75))), at = 1 - (et[2 * ot].cover + et[2 * nt + 1].cover) / 2, E = Math.sin(Math.PI * Math.min(1, Math.max(0, X(dt) / W)));
    return { c: kt < 0.5 ? A.dusk : A.dawn, a: k * (0.2 + 0.8 * at) * E * E };
  }, soft: x, tw: F * 0.3, sy: W / 90 };
}
function du(n, { clock: l = 0, ambient: i = !1, seed: u = 1 }) {
  const { S: g, sw: x, side: k, C: A, TAU: I, sy: M } = n, W = l, F = { stars: [], suns: [], moons: [], clouds: [], drops: [], flakes: [], fogs: [], bolts: [] };
  return g.forEach((V, z) => {
    const pt = xc(u * 977 + z * 131 + 7), et = (z + 0.5) * x, X = V.night ? { clear: 9, partly: 5, cloudy: 2, fog: 0, rain: 0, storm: 0, snow: 1 }[V.k] : 0;
    for (let G = 0; G < X; G++) {
      const ht = et + (pt() - 0.5) * x * 1.6, dt = (6 + pt() * 76) * M, kt = pt() < 0.35, ot = 1.8 + pt() * 1.6, nt = k(!0, ht, dt) * (kt ? 0.95 : 0.7) * (i ? 0.6 + 0.4 * Math.sin(I * W / 2600 + G * 1.7 + z) : 1);
      nt >= 0.03 && F.stars.push({ x: ht, y: dt, big: kt, size: ot, o: nt });
    }
    if (!V.night && (V.k === "clear" || V.k === "partly")) {
      const G = et + (pt() - 0.5) * x * 0.3, ht = Math.min(15, x * 0.29);
      F.suns.push({ x: G, y: 32 * M, rad: ht, halo: ht * 2.8 * (i ? 1 + 0.07 * Math.sin(I * W / 3600 + z) : 1) });
    }
    if (V.night && (V.k === "clear" || V.k === "partly")) {
      const G = Math.min(0.78, x * 0.55 / 34), ht = et - 23 * G + (pt() - 0.5) * x * 0.2;
      F.moons.push({ x: ht + 23 * G, y: (4 + (i ? 0.8 * Math.sin(I * W / 5200 + z) : 0)) * M + 23 * G, d: 46 * G });
    }
  }), g.forEach((V, z) => {
    const pt = { clear: 0, partly: 1, cloudy: 3, fog: 0, rain: 3, storm: 3, snow: 2 }[V.k];
    if (!pt) return;
    const et = xc(u * 577 + z * 71 + 3), X = (z + 0.5) * x, G = V.k === "rain" || V.k === "storm" || V.night ? A.cloudNight : A.cloudDay, ht = V.night ? 0.82 : V.k === "storm" ? 0.75 : 1;
    for (let dt = 0; dt < pt; dt++) {
      const kt = x / 46 * (V.k === "partly" ? 0.85 : 0.75 + et() * 0.55), ot = X + (V.k === "partly" ? x * 0.12 : (et() - 0.5) * x * 1.05), nt = (V.k === "partly" ? 40 : 6 + et() * 26) * M, at = i ? 2.5 * Math.sin(I * W / 9e3 + z * 1.3 + dt * 2.1) : 0, E = i ? 0.9 * Math.sin(I * W / 6100 + z + dt) : 0;
      F.clouds.push({ x: ot - 23 * kt + at, y: nt - 15.33 * kt + E, w: 46 * kt, h: 30.66 * kt, fill: G, o: ht * (pt > 1 && dt === 0 ? 0.85 : 1) });
    }
  }), g.forEach((V, z) => {
    const pt = xc(u * 313 + z * 29 + 11), et = (z + 0.5) * x, X = V.cond === "pouring" ? 16 : V.cond === "rainy" || V.cond === "hail" ? 9 : V.cond === "lightning-rainy" ? 12 : V.cond === "snowy-rainy" ? 5 : 0;
    for (let ht = 0; ht < X; ht++) {
      let dt = et + (pt() - 0.5) * x * 1.05, kt = 44 + pt() * 36, ot = 1;
      if (i) {
        const at = ((kt - 44 + W * 0.04) % 36 + 36) % 36;
        dt -= 0.21 * (at - (kt - 44)), kt = 44 + at, ot = Math.min(1, at / 6, (36 - at) / 6);
      }
      kt *= M;
      const nt = k(V.night, dt, kt) * ot;
      nt >= 0.05 && F.drops.push({ x: dt, y: kt, o: nt });
    }
    const G = V.cond === "snowy" ? 11 : V.cond === "snowy-rainy" ? 6 : 0;
    for (let ht = 0; ht < G; ht++) {
      let dt = et + (pt() - 0.5) * x * 1.05, kt = 40 + pt() * 44, ot = 1;
      if (i) {
        const at = ((kt - 40 + W * 9e-3) % 44 + 44) % 44;
        kt = 40 + at, dt += 1.6 * Math.sin(I * W / 2800 + ht * 1.9 + z), ot = Math.min(1, at / 6, (44 - at) / 6);
      }
      kt *= M;
      const nt = k(V.night, dt, kt) * ot;
      nt >= 0.05 && F.flakes.push({ x: dt, y: kt, o: nt });
    }
    if (V.k === "fog") {
      const ht = V.night ? "#c8ccd6" : "#ffffff", dt = V.night ? 0.28 : 0.62, kt = i ? 4 * Math.sin(I * W / 8e3 + z) : 0;
      for (let ot = 0; ot < 4; ot++) F.fogs.push({ x: et - x * 0.75 + ot % 2 * x * 0.18 + (ot % 2 ? kt : -kt), y: (30 + ot * 13) * M, w: x * 1.3, c: ht, a: dt });
    }
    if (V.k === "storm") {
      const ht = (W / 3400 + z * 0.37) % 1;
      F.bolts.push({ x: et + (pt() - 0.5) * x * 0.3 - 5, y: 36 * M, o: i && !(ht < 0.05 || ht > 0.09 && ht < 0.12) ? 0.8 : 1 });
    }
  }), F;
}
function cf(n, l, i, u, g, x, k, A) {
  const { S: I, C: M, cw: W, yb: F, glowAt: V, soft: z, tw: pt, sy: et } = n, X = new Array(i * u), G = new Uint8Array(i * u), ht = new Uint8Array(i * u), dt = (L, R, q, D, lt) => {
    q == null || L < 0 || R < 0 || L >= i || R >= u || (D >= 1 || D > Dn(L + 5, R + 3)) && (X[R * i + L] = q, G[R * i + L] = lt);
  }, kt = (L, R, q, D) => {
    for (let lt = Math.max(0, Math.floor(R - q) - 1); lt <= Math.min(u - 1, R + q + 1); lt++) for (let ut = Math.max(0, Math.floor(L - q) - 1); ut <= Math.min(i - 1, L + q + 1); ut++) D(ut, lt, ut + 0.5 - L, lt + 0.5 - R);
  }, ot = (L, R, q) => {
    for (let lt = 0; lt < L.length - 1; lt++) {
      const ut = (lt + R) * W;
      if (q < ut - pt / 2) return [L[lt], L[lt], 0];
      if (q <= ut + pt / 2) return [L[lt], L[lt + 1], (q - ut + pt / 2) / pt];
    }
    const D = L[L.length - 1];
    return [D, D, 0];
  }, nt = I.filter((L) => !L.night).map((L) => L.sky), at = I.filter((L) => L.night).map((L) => L.sky), E = z / x, Ct = 16 * et / x;
  for (let L = 0; L < i; L++) {
    const R = (L + 0.5) * g, q = F(R) / x, D = ot(nt, 0.75, R), lt = ot(at, 1.25, R), ut = V(R);
    for (let gt = 0; gt < u; gt++) {
      const St = Dn(L, gt), Lt = gt + 0.5 - q, $t = (E > 0.01 ? Bn(0.5 + Lt / E) : Lt > 0 ? 1 : 0) > St;
      let ae = $t ? D[2] > St ? D[1] : D[0] : lt[2] > St ? lt[1] : lt[0];
      ($t ? Bn(((gt + 0.5) / u - 0.45) / 0.55) * 0.7 : Bn(1 - (gt + 0.5) / (u * 0.55)) * 0.7) > Dn(L + 2, gt + 5) && (ae = $t ? ca(ae, "#ffffff", 0.18) : ca(ae, "#000000", 0.25)), $t && Lt >= 0 && Lt < Ct && ut.a * 1.3 * (1 - Lt / Ct) > Dn(L + 6, gt + 1) && (ae = ut.c), X[gt * i + L] = ae, ht[gt * i + L] = $t ? 0 : 1;
    }
  }
  const st = ca(M.sun, "#ffffff", 0.55), Ot = ca(M.moon, "#ffffff", 0.6);
  l.stars.forEach((L) => {
    const R = Math.floor(L.x / g), q = Math.floor(L.y / x);
    if (R < 0 || q < 0 || R >= i || q >= u || !ht[q * i + R] || L.o < 0.15) return;
    const D = L.o > 0.45 ? M.star : ca(M.star, X[q * i + R], 0.5), lt = L.big && L.o > 0.6 ? Math.floor(L.size / g) : 0;
    dt(R, q, D, 1, Or);
    for (let ut = 1; ut <= lt; ut++) [[R - ut, q], [R + ut, q], [R, q - ut], [R, q + ut]].forEach((gt) => {
      gt[0] >= 0 && gt[1] >= 0 && gt[0] < i && gt[1] < u && ht[gt[1] * i + gt[0]] && dt(gt[0], gt[1], D, 1, Or);
    });
  }), l.suns.forEach((L) => {
    const R = Math.max(1.5, L.rad / g), q = L.x / g, D = L.y / x, lt = L.halo / g * 0.85;
    if (kt(q, D, lt, (ut, gt, St, Lt) => {
      const $t = Math.sqrt(St * St + Lt * Lt);
      $t > R && $t < lt && !ht[gt * i + ut] && dt(ut, gt, st, 0.3 * (1 - ($t - R) / (lt - R)), 0);
    }), A) {
      const ut = Math.floor(k / 500) % 2, gt = Math.max(1, R * 0.3);
      for (let St = 0; St < 8; St++) if (St % 2 === ut) for (let Lt = R + 1.2; Lt < R + 1.2 + gt; Lt += 0.7) dt(Math.floor(q + Math.cos(St * Math.PI / 4) * Lt), Math.floor(D + Math.sin(St * Math.PI / 4) * Lt), M.sun, 1, $c);
    }
    kt(q, D, R, (ut, gt, St, Lt) => {
      St * St + Lt * Lt <= R * R && dt(ut, gt, Bn(((Lt / R + 1) / 2 - 0.6) / 0.4) > Dn(ut, gt) ? M.sunEdge : M.sun, 1, Uc);
    });
  }), l.moons.forEach((L) => {
    const R = Math.max(1.5, L.d * 0.37 / g), q = L.x / g, D = L.y / x, lt = q + 0.547 * R, ut = D - 0.503 * R, gt = 0.82 * R;
    kt(q, D, R, (St, Lt, $t, ae) => {
      if ($t * $t + ae * ae > R * R) return;
      const Fa = St + 0.5 - lt, qt = Lt + 0.5 - ut;
      Fa * Fa + qt * qt > gt * gt && dt(St, Lt, Bn((ae + R) / (2 * R) * 1.1 - 0.1) > Dn(St, Lt) ? M.moon : Ot, 1, Yc);
    });
  }), l.clouds.forEach((L) => {
    const R = Math.max(3, L.w / g), q = R * 0.6665, D = L.x / g, lt = L.y / x, ut = ca(L.fill, "#000000", 0.16);
    for (let gt = Math.max(0, Math.floor(lt) - 1); gt <= Math.min(u - 1, lt + q + 1); gt++) for (let St = Math.max(0, Math.floor(D) - 1); St <= Math.min(i - 1, D + R + 1); St++) {
      const Lt = (St + 0.5 - D) / R, $t = (gt + 0.5 - lt) / R;
      ac(Lt, $t) && dt(St, gt, !ac(Lt, $t + 1 / R) || Bn(($t - 0.42) / 0.25) * 0.8 > Dn(St, gt) ? ut : L.fill, L.o, Zc);
    }
  }), l.fogs.forEach((L) => {
    const R = Math.floor(L.y / x), q = Math.max(R, Math.floor((L.y + 6 * et) / x) - 1), D = Math.floor(L.x / g), lt = Math.floor((L.x + L.w) / g);
    for (let ut = R; ut <= q; ut++) for (let gt = D; gt <= lt; gt++) {
      const St = (gt - D) / Math.max(1, lt - D);
      dt(gt, ut, L.c, L.a * (St < 0.25 ? St / 0.25 : St > 0.75 ? (1 - St) / 0.25 : 1), 0);
    }
  });
  const it = Math.max(2, Math.round(9 / x));
  l.drops.forEach((L) => {
    const R = L.x / g, q = Math.floor(L.y / x);
    for (let D = 0; D < it; D++) dt(Math.floor(R - 0.208 * D * x / g), q + D, M.rain, L.o, Kc);
  });
  const Zt = Math.max(0, Math.round(4.4 / g / 2.6));
  return l.flakes.forEach((L) => {
    const R = Math.floor(L.x / g), q = Math.floor(L.y / x);
    dt(R, q, M.snow, L.o, _n);
    for (let D = 1; D <= Zt; D++)
      dt(R - D, q, M.snow, L.o, _n), dt(R + D, q, M.snow, L.o, _n), dt(R, q - D, M.snow, L.o, _n), dt(R, q + D, M.snow, L.o, _n);
  }), l.bolts.forEach((L) => {
    if (g <= 3.5)
      for (let R = Math.floor(L.y / x); R <= (L.y + 24) / x; R++) for (let q = Math.floor(L.x / g); q <= (L.x + 11) / g; q++)
        iu(lf, (q + 0.5) * g - L.x, (R + 0.5) * x - L.y) && dt(q, R, M.sun, 1, ul);
    else {
      const R = Math.round(L.x / g), q = Math.round(L.y / x);
      df.forEach((D, lt) => D.split("").forEach((ut, gt) => {
        ut === "#" && dt(R + gt, q + lt, M.sun, 1, ul);
      }));
    }
  }), { col: X, ids: G };
}
function pf(n, l) {
  const i = l.px, u = Math.max(6, Math.round(l.width / i)), g = Math.max(6, Math.round(l.height / i)), x = l.width / u, k = l.height / g, A = l.ambient ? Math.floor((l.clock || 0) / 100) * 100 : 0, I = (z) => {
    const pt = lu(z, l);
    return cf(pt, du(pt, { clock: A, ambient: l.ambient, seed: l.seed }), u, g, x, k, A, l.ambient);
  }, M = I(n), W = l.reveal == null ? 1 : Bn(l.reveal);
  let F = M.col, V = M.ids;
  if (W < 1) {
    const z = l.prev ? I(l.prev) : null, pt = W * (u + 12);
    F = new Array(u * g), V = new Uint8Array(u * g);
    for (let et = 0; et < u * g; et++) {
      const X = et % u, G = et / u | 0;
      (l.reduce ? W : Bn((pt - X) / 12)) > Dn(X, G) ? (F[et] = M.col[et], V[et] = M.ids[et]) : z ? (F[et] = z.col[et], V[et] = z.ids[et]) : (F[et] = null, V[et] = 255);
    }
  }
  return su(F, V, u, g, { oneBit: l.oneBit, ink: l.ink, paper: l.paper, snowInk: !1 });
}
function uf(n, l, i) {
  const u = i.width, g = i.height, x = i.reveal == null ? 1 : Bn(i.reveal), k = (V, z) => {
    const pt = lu(z, i);
    ff(V, pt, du(pt, i));
  };
  if (n.clearRect(0, 0, u, g), x >= 1) {
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
  M.setTransform(n.getTransform()), M.clearRect(0, 0, u, g), k(M, l);
  const W = x * (u + 64) - 64, F = M.createLinearGradient(W, 0, W + 64, 0);
  F.addColorStop(0, "rgba(0,0,0,1)"), F.addColorStop(1, "rgba(0,0,0,0)"), M.globalCompositeOperation = "destination-in", M.fillStyle = F, M.fillRect(0, 0, u, g), M.globalCompositeOperation = "source-over", n.save(), n.setTransform(1, 0, 0, 1, 0, 0), n.drawImage(I, 0, 0), n.restore();
}
function ff(n, l, i) {
  const { W: u, H: g, S: x, C: k, cw: A, yb: I, glowAt: M, soft: W, tw: F, sy: V } = l, z = (st, Ot) => {
    const it = Xd(st);
    return "rgba(" + it[0] + "," + it[1] + "," + it[2] + "," + Math.max(0, Math.min(1, Ot)).toFixed(3) + ")";
  }, pt = (st, Ot) => {
    const it = n.createLinearGradient(0, 0, u, 0);
    it.addColorStop(0, st[0]);
    for (let Zt = 0; Zt < st.length - 1; Zt++) {
      const L = (Zt + Ot) * A, R = (L - F / 2) / u, q = (L + F / 2) / u;
      R > 0 && R < 1 && it.addColorStop(R, st[Zt]), q > 0 && q < 1 && it.addColorStop(q, st[Zt + 1]);
    }
    return it.addColorStop(1, st[st.length - 1]), it;
  }, et = Math.max(24, Math.ceil(u / 4)), X = (st, Ot) => {
    n.beginPath();
    for (let it = 0; it <= et; it++) {
      const Zt = u * it / et, L = st == null ? 0 : I(Zt) + st;
      it ? n.lineTo(Zt, L) : n.moveTo(Zt, L);
    }
    for (let it = et; it >= 0; it--) {
      const Zt = u * it / et;
      n.lineTo(Zt, I(Zt) + Ot);
    }
    n.closePath(), n.fill();
  };
  n.save(), n.fillStyle = pt(x.filter((st) => !st.night).map((st) => st.sky), 0.75), n.fillRect(0, 0, u, g);
  const G = n.createLinearGradient(0, 0, u, 0);
  for (let st = 0; st <= 64; st++) {
    const Ot = M(u * st / 64);
    G.addColorStop(st / 64, z(Ot.c, Math.min(1, Ot.a)));
  }
  n.fillStyle = G;
  for (let st = 0; st < 8; st++)
    n.globalAlpha = 1 - st / 8, X(st * 2 * V, (st + 1) * 2 * V);
  n.fillStyle = pt(x.filter((st) => st.night).map((st) => st.sky), 1.25);
  const ht = Math.max(0.5, W), dt = 6;
  n.globalAlpha = 1, X(null, -ht);
  for (let st = 0; st < dt; st++)
    n.globalAlpha = 1 - (st + 0.5) / dt, X(-ht + 2 * ht * st / dt, -ht + 2 * ht * (st + 1) / dt);
  n.globalAlpha = 1;
  const kt = new Path2D(rf), ot = new Path2D(of), nt = new Path2D(nf), at = new Path2D(sf);
  n.fillStyle = k.star, i.stars.forEach((st) => {
    n.globalAlpha = st.o, st.big ? (n.save(), n.translate(st.x, st.y), n.scale(st.size, st.size), n.fill(kt), n.restore()) : (n.beginPath(), n.arc(st.x, st.y, 0.8, 0, Math.PI * 2), n.fill());
  }), n.globalAlpha = 1;
  const E = ca(k.sun, "#ffffff", 0.55);
  i.suns.forEach((st) => {
    const Ot = n.createRadialGradient(st.x, st.y, 0, st.x, st.y, st.halo);
    Ot.addColorStop(0, z(E, 0.42)), Ot.addColorStop(0.7, z(E, 0)), n.fillStyle = Ot, n.beginPath(), n.arc(st.x, st.y, st.halo, 0, Math.PI * 2), n.fill();
    const it = n.createLinearGradient(0, st.y - st.rad, 0, st.y + st.rad);
    it.addColorStop(0.6, k.sun), it.addColorStop(1, k.sunEdge), n.fillStyle = it, n.beginPath(), n.arc(st.x, st.y, st.rad, 0, Math.PI * 2), n.fill();
  });
  const Ct = ca(k.moon, "#ffffff", 0.6);
  i.moons.forEach((st) => {
    n.save(), n.translate(st.x - st.d / 2, st.y - st.d / 2), n.scale(st.d / 46, st.d / 46);
    const Ot = n.createLinearGradient(0, 6, 0, 40);
    Ot.addColorStop(0, Ct), Ot.addColorStop(1, k.moon), n.fillStyle = Ot, n.fill(ot), n.restore();
  }), i.clouds.forEach((st) => {
    n.save(), n.globalAlpha = st.o, n.translate(st.x, st.y), n.scale(st.w / 46, st.h / 30.66), n.translate(-4, -9.67), n.fillStyle = st.fill, n.fill(nt), n.restore();
  }), i.fogs.forEach((st) => {
    const Ot = n.createLinearGradient(st.x, 0, st.x + st.w, 0);
    Ot.addColorStop(0, z(st.c, 0)), Ot.addColorStop(0.25, z(st.c, st.a)), Ot.addColorStop(0.75, z(st.c, st.a)), Ot.addColorStop(1, z(st.c, 0)), n.fillStyle = Ot, n.fillRect(st.x, st.y, st.w, 6 * V);
  }), n.fillStyle = k.rain, i.drops.forEach((st) => {
    n.save(), n.globalAlpha = st.o, n.translate(st.x, st.y), n.rotate(12 * Math.PI / 180), n.fillRect(-1.5, 0, 3, 9), n.restore();
  }), n.fillStyle = k.snow, i.flakes.forEach((st) => {
    n.globalAlpha = st.o, n.beginPath(), n.arc(st.x, st.y, 2.2, 0, Math.PI * 2), n.fill();
  }), n.fillStyle = k.sun, i.bolts.forEach((st) => {
    n.save(), n.globalAlpha = st.o, n.translate(st.x, st.y), n.fill(at), n.restore();
  }), n.restore();
}
function hf(n, l) {
  var Dd, Bd, Rd, Pd, nl, ol, Cs;
  const i = (a) => n.getElementById(a), u = i("workoutView"), g = i("workoutNameInput");
  let x = !0;
  const k = i("homeClock");
  function A() {
    k && (k.textContent = new Intl.DateTimeFormat(void 0, { hour: "2-digit", minute: "2-digit" }).format(/* @__PURE__ */ new Date()));
  }
  A(), setInterval(A, 15e3);
  const I = i("createFlow"), M = i("createMovementsSlot"), W = i("createTimingSlot"), F = i("createFinishSlot"), V = i("movementStepSummary"), z = i("timingStepSummary"), pt = i("finishStepSummary"), et = i("continueToTiming"), X = i("continueToFinish"), G = i("finishMoveButton");
  let ht = !1, dt = [];
  function kt(a) {
    !a || dt.some((s) => s.node === a) || dt.push({ node: a, parent: a.parentNode, next: a.nextSibling });
  }
  function ot(a, s) {
    a && (kt(a), s.appendChild(a));
  }
  function nt() {
    [...dt].reverse().forEach(({ node: a, parent: s, next: d }) => {
      s && (d && d.parentNode === s ? s.insertBefore(a, d) : s.appendChild(a));
    }), dt = [];
  }
  function at(a) {
    n.querySelectorAll(".createStep").forEach((s) => {
      s.classList.toggle("active", s.dataset.createStep === a);
    }), a === "timing" && (ht = !0), E();
  }
  function E() {
    var wt, Mt;
    if (!Ye) return;
    ue[Me];
    const a = Xt.filter((bt) => !bt.hidden), s = a.filter((bt) => bt.kind !== "rest").length, d = a.filter((bt) => bt.kind === "rest").length;
    V.textContent = s ? s + " movement" + (s === 1 ? "" : "s") + (d ? " · " + d + " rest" + (d === 1 ? "" : "s") : "") : "No movements yet";
    const m = s > 0, S = n.querySelector('[data-open-step="timing"]'), B = n.querySelector('[data-open-step="finish"]');
    S.disabled = !m, et.disabled = !m, z.textContent = m ? oo(R.value) + " · " + Ca(q.value) + " movement · " + Ca(D.value) + " rest" : "Add a movement first", B.disabled = !(m && ht);
    const O = ((g == null ? void 0 : g.value) || "").trim(), Y = [];
    (wt = i("includeWarmupPreset")) != null && wt.checked && Y.push("warm-up"), (Mt = i("includeCooldownPreset")) != null && Mt.checked && Y.push("cooldown"), pt.textContent = O ? O + (Y.length ? " · " + Y.join(" + ") : "") : Y.length ? Y.join(" + ") : "Name and optional extras";
  }
  function Ct() {
    var It, ee, Wt;
    I.hidden = !1, ht = !1;
    const a = n.querySelector(".editNameRow"), s = i("createMoveOptions"), d = n.querySelector(".timeTiles"), m = i("routineSummaryModal"), S = n.querySelector(".tempoRevealRow"), B = i("tempoExperiment"), O = (It = i("warmupList")) == null ? void 0 : It.closest("section"), Y = i("movementCreatorLaunch"), wt = i("movementCreator"), Mt = (ee = i("strengthList")) == null ? void 0 : ee.closest("section"), bt = (Wt = i("cooldownList")) == null ? void 0 : Wt.closest("section");
    [s == null ? void 0 : s.querySelector(".createExtras"), O, Y, wt, Mt, bt].forEach((Ht) => Ht && ot(Ht, M)), [s, d, m, S, B].forEach((Ht) => ot(Ht, W)), ot(a, F), at("movements"), E();
  }
  function st() {
    nt(), I.hidden = !0, n.querySelectorAll(".createStep").forEach((a) => a.classList.remove("active"));
  }
  n.querySelectorAll("[data-open-step]").forEach((a) => a.addEventListener("click", () => {
    a.disabled || at(a.dataset.openStep);
  })), et.addEventListener("click", () => {
    et.disabled || at("timing");
  }), X.addEventListener("click", () => at("finish")), G.addEventListener("click", () => i("saveWorkoutEdit").click());
  const Ot = { home: i("homeView"), workout: i("workoutView"), settings: i("settingsView") }, it = i("homeNav"), Zt = i("settingsNav");
  function L(a) {
    Object.entries(Ot).forEach(([s, d]) => d.classList.toggle("active", s === a)), it.classList.toggle("active", a === "home"), Zt.classList.toggle("active", a === "settings"), a === "home" && setTimeout(Nt, 400), a === "settings" && (requestAnimationFrame(() => Er(n.querySelector(".tab.active"), !1)), Vn());
  }
  const R = i("totalTime"), q = i("workTime"), D = i("restTime"), lt = i("totalOut"), ut = i("workOut"), gt = i("restOut"), St = i("totalFill"), Lt = i("workFill"), $t = i("restFill"), ae = i("roundsInput"), Fa = i("roundsFill"), qt = i("roundsOut"), eo = i("totalLabel"), Nn = i("routineSummaryModal"), ao = [
    { id: "standing-reach", name: "Standing reach", group: "Warm-up", kind: "warmup", hidden: !1 },
    { id: "arm-circles", name: "Arm circles", group: "Warm-up", kind: "warmup", hidden: !1 },
    { id: "hip-hinge", name: "Hip hinge drill", group: "Warm-up", kind: "warmup", hidden: !1 }
  ];
  let Qe = ao.map((a) => ({ ...a })), Xt = [
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
  const ce = [
    { id: "hip-flexor", name: "Hip flexor stretch", group: "Cooldown", kind: "cooldown", hidden: !1 },
    { id: "chest-opener", name: "Chest opener", group: "Cooldown", kind: "cooldown", hidden: !1 },
    { id: "hamstring", name: "Hamstring stretch", group: "Cooldown", kind: "cooldown", hidden: !1 },
    { id: "slow-breathing", name: "Slow breathing", group: "Cooldown", kind: "cooldown", hidden: !1 }
  ];
  let Ga = ce.map((a) => ({ ...a }));
  const Yn = {
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
  }, Ut = fe(l.data), ue = Ut.profiles;
  let Me = ue[Ut.selected] ? Ut.selected : Ut.order.find((a) => ue[a]) || "kettlebell";
  function fe(a) {
    const s = a && typeof a == "object" ? JSON.parse(JSON.stringify(a)) : {}, d = s.profiles && Object.keys(s.profiles).length ? s.profiles : JSON.parse(JSON.stringify(Yn)), m = (Array.isArray(s.order) ? s.order : Object.keys(d)).filter((S) => d[S]);
    return Object.keys(d).forEach((S) => {
      m.includes(S) || m.push(S);
    }), {
      v: 1,
      profiles: d,
      order: m,
      selected: s.selected || m[0],
      history: Array.isArray(s.history) ? s.history : [],
      checkins: (Array.isArray(s.checkins) ? s.checkins : ln(s.energy)).map(Wr),
      settings: { ...s.settings || {} }
    };
  }
  function ln(a) {
    if (!Array.isArray(a)) return [];
    const s = ["Drained", "Low", "Okay", "Good", "Energised", "Great"], d = [];
    return a.forEach((m) => {
      const S = new Date(m.at);
      if (isNaN(S)) return;
      const B = S.getFullYear() + "-" + String(S.getMonth() + 1).padStart(2, "0") + "-" + String(S.getDate()).padStart(2, "0"), O = S.getHours() < 14 ? "morning" : "evening";
      if (d.some((wt) => wt.date === B && wt.slot === O)) return;
      const Y = s.indexOf(m.value) + 1;
      Y > 0 && d.push({ date: B, slot: O, mood: null, energy: Y, at: m.at });
    }), d;
  }
  function Wr(a) {
    if (a.scale === 100) return a;
    const s = (d) => d == null ? null : Math.round((Number(d) - 1) / 5 * 100);
    return { ...a, mood: s(a.mood), energy: s(a.energy), scale: 100 };
  }
  function wn() {
    Ye || (Ut.selected = Me, Ut.order = Ut.order.filter((a) => ue[a] && a !== no), l.save(Ut));
  }
  function me() {
    return Ut.settings;
  }
  function ze(a) {
    const s = ue[a];
    if (!s) return;
    Me = a;
    const d = i("workoutNameInput");
    if (d && (d.value = s.name), R.value = s.total, q.value = s.work, D.value = s.rest, ae.value = s.rounds || 1, s.customSequence) {
      const m = (s.sequence || []).map((B) => ({ ...B })), S = (B) => m.filter((O) => O.presetRole === B).map(({ presetRole: O, ...Y }) => Y);
      Qe = (s.warmup || S("warmup")).map((B) => ({ ...B })), Ga = (s.cooldown || S("cooldown")).map((B) => ({ ...B })), Xt = m.filter((B) => !B.presetRole), Li(s.preset || "movement", !1);
    } else
      R.min = 3, R.max = 40, R.step = 1, q.min = 20, q.max = 60, q.step = 5, D.min = 5, D.max = 30, D.step = 5, Qe = (s.warmup || ao).map((m) => ({ ...m })), Ga = (s.cooldown || ce).map((m) => ({ ...m })), Xt = s.strength.map((m) => Array.isArray(m) ? (([S, B, O, Y = !1]) => ({ id: S, name: B, group: O, kind: "work", hidden: !!Y }))(m) : { ...m });
    n.querySelectorAll(".workoutPanel[data-workout]").forEach((m) => m.classList.toggle("active", m.dataset.workout === a)), qe();
  }
  function Vr(a, s, d) {
    const m = a.getBoundingClientRect(), S = m.width / 2, B = m.height / 2, O = s - S, Y = d - B;
    let wt = 1 / 0, Mt = 1 / 0;
    O !== 0 && (wt = S / Math.abs(O)), Y !== 0 && (Mt = B / Math.abs(Y));
    const bt = Math.min(Math.max(1 / Math.min(wt, Mt), 0), 1);
    let mt = Math.atan2(Y, O) * (180 / Math.PI) + 90;
    return mt < 0 && (mt += 360), { edge: bt, angle: mt };
  }
  function Co(a, s, d = !1) {
    const m = a.getBoundingClientRect(), S = s.clientX - m.left, B = s.clientY - m.top, { edge: O, angle: Y } = Vr(a, S, B), wt = d ? 100 : O * 100;
    a.style.setProperty("--edge-proximity", wt.toFixed(3)), a.style.setProperty("--cursor-angle", Y.toFixed(3) + "deg"), a.classList.toggle("borderGlowActive", d || wt >= 30);
  }
  function jr(a) {
    a.addEventListener("pointermove", (d) => Co(a, d, !1)), a.addEventListener("pointerenter", (d) => Co(a, d, !1)), a.addEventListener("pointerdown", (d) => Co(a, d, !0));
    const s = () => {
      a.classList.remove("borderGlowActive"), a.style.setProperty("--edge-proximity", "0");
    };
    a.addEventListener("pointerleave", s), a.addEventListener("pointerup", s), a.addEventListener("pointercancel", s);
  }
  jr(i("addWorkoutPanel"));
  let Ye = !1, no = null;
  function ne(a) {
    return String(a ?? "").replace(/[&<>"']/g, (s) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[s]);
  }
  function fl(a) {
    return a.summary ? a.summary : a.customSequence ? oo(a.total) + " · custom move" : oo(a.total) + " · " + Ca(a.work) + " / " + Ca(a.rest) + " · warm-up + cooldown";
  }
  function Hn(a, s) {
    var B;
    const d = document.createElement("article");
    d.className = "workoutPanel", d.dataset.workout = a, d.tabIndex = 0;
    const m = s.activityCount ?? (((B = s.sequence) == null ? void 0 : B.length) || 0);
    d.innerHTML = '<span class="edgeLight" aria-hidden="true"></span><div class="panelExpanded"><div><div class="workoutPanelTop"><div><div class="workoutName">' + ne(s.name) + '</div><div class="sub">' + ne(fl(s)) + '</div><span class="sourceTag">' + ne(s.source || "Custom move") + '</span></div><button class="pill seeWorkoutBtn" type="button">Edit</button></div></div><div class="workoutFooter"><div><strong class="activityCount">' + (m ? m + " activities" + ((s.rounds || 1) > 1 ? " × " + s.rounds : "") : "—") + '</strong></div><div class="workoutPanelActions"><button class="primary startWorkoutBtn" type="button">Start move</button></div></div></div><div class="panelCollapsed"><div class="panelCollapsedText">' + ne(s.name) + "</div></div>";
    const S = i("addWorkoutPanel");
    return i("workoutGallery").insertBefore(d, S), jr(d), d.addEventListener("click", (O) => {
      O.target.closest("button") || ze(a);
    }), d.addEventListener("keydown", (O) => {
      (O.key === "Enter" || O.key === " ") && !O.target.closest("button") && (O.preventDefault(), ze(a));
    }), d.querySelector(".seeWorkoutBtn").addEventListener("click", (O) => {
      O.stopPropagation(), ze(a), Ns(!1);
    }), d.querySelector(".startWorkoutBtn").addEventListener("click", (O) => {
      O.stopPropagation(), ze(a), uc();
    }), d;
  }
  function pa() {
    n.querySelectorAll(".workoutPanel[data-workout]").forEach((a) => a.remove()), Ut.order.forEach((a) => {
      ue[a] && Hn(a, ue[a]);
    }), n.querySelectorAll(".workoutPanel[data-workout]").forEach((a) => a.classList.toggle("active", a.dataset.workout === Me));
  }
  pa(), i("addWorkoutPanel").addEventListener("keydown", (a) => {
    (a.key === "Enter" || a.key === " ") && (a.preventDefault(), i("addWorkoutPanel").click());
  }), i("addWorkoutPanel").addEventListener("click", () => {
    Ye = !0, no = "custom-" + Date.now(), ue[no] = {
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
    }, ze(no), Ns(!0);
  });
  let Kt = [], se = 0, ua = 0, ve = 1, Pt = !1, Ce = null, Te = null, Re = !1, xn = Ut.settings.upcomingCount ?? "all", zr = "movement";
  function or(a, s, d) {
    return (Number(a) - s) / (d - s) * 100;
  }
  function Ca(a) {
    const s = Math.max(0, Number(a) || 0);
    return s >= 3600 && s % 3600 === 0 ? s / 3600 + " hr" : s >= 60 && s % 60 === 0 ? s / 60 + " min" : s >= 60 ? Math.round(s / 60) + " min" : Math.round(s) + " sec";
  }
  function oo(a) {
    const s = Math.max(0, Number(a) || 0);
    return s >= 60 && s % 60 === 0 ? s / 60 + " hr" : s >= 60 ? Math.floor(s / 60) + " hr " + s % 60 + " min" : s + " min";
  }
  function ir() {
    St.style.width = or(R.value, Number(R.min), Number(R.max)) + "%", Lt.style.width = or(q.value, Number(q.min), Number(q.max)) + "%", $t.style.width = or(D.value, Number(D.min), Number(D.max)) + "%", ut.textContent = Ca(q.value), gt.textContent = Ca(D.value);
    const a = Number(ae.value) || 1;
    Fa.style.width = or(a, 1, 10) + "%", eo.textContent = a > 1 ? "Time per round" : "Total time";
  }
  function Gr(a) {
    return a.filter((s) => !s.hidden);
  }
  function io(a) {
    const s = Math.max(0, Math.round(Number(a) || 0)), d = Math.floor(s / 3600), m = Math.floor(s % 3600 / 60), S = s % 60;
    return (d ? d + ":" + String(m).padStart(2, "0") : m) + ":" + String(S).padStart(2, "0");
  }
  function Es(a) {
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
      const wt = Y.match(/^(?:(\d+)h)?(?:(\d+)m)?(?:(\d+)s)?$/);
      return wt ? (Number(wt[1]) || 0) * 3600 + (Number(wt[2]) || 0) * 60 + (Number(wt[3]) || 0) : 0;
    }, B = S(s.searchParams.get("t") || s.searchParams.get("start")), O = S(s.searchParams.get("end"));
    return { id: m, start: B, end: O > B ? O : null };
  }
  function Ti(a, s) {
    if (a.useVideoLength === !1) return Math.max(5, Number(a.duration) || s || 300);
    const d = Number(a.start) || 0, m = Number(a.end) || Number(a.videoDuration) || 0;
    return m > d ? Math.round(m - d) : Number(a.duration) || 300;
  }
  function ro(a, s) {
    const d = Math.max(0, Number(a) || 0);
    return Math.round(s === "hour" ? d * 3600 : s === "min" ? d * 60 : d);
  }
  function Li(a, s = !0) {
    zr = a, n.querySelectorAll(".createPresetBtn").forEach((m) => m.classList.toggle("active", m.dataset.movePreset === a));
    const d = ue[Me];
    d && (d.preset = a), a === "work" ? (R.min = 30, R.max = 480, R.step = 30, q.min = 300, q.max = 7200, q.step = 300, D.min = 60, D.max = 1800, D.step = 60, s && (R.value = 60, q.value = 1500, D.value = 300), i("addMovementUnit").value = "min", i("addMovementDuration").value = 25, i("addRestUnit").value = "min", i("addRestDuration").value = 5) : (R.min = 3, R.max = 40, R.step = 1, q.min = 20, q.max = 60, q.step = 5, D.min = 5, D.max = 30, D.step = 5, s && (R.value = 20, q.value = 45, D.value = 15), i("addMovementUnit").value = "sec", i("addMovementDuration").value = 45, i("addRestUnit").value = "sec", i("addRestDuration").value = 30), ir();
  }
  function Ai(a, s) {
    const d = zr === "work";
    return a.map((m, S) => ({ ...m, id: s + "-" + S + "-" + Date.now().toString(36), useGlobalTiming: !d, duration: d ? 60 : Number(q.value) }));
  }
  function rr() {
    const a = ue[Me];
    a != null && a.customSequence && (a.includeWarmup = i("includeWarmupPreset").checked, a.includeCooldown = i("includeCooldownPreset").checked, a.includeWarmup && !Qe.length && (Qe = Ai(ao, "warm")), a.includeCooldown && !Ga.length && (Ga = Ai(ce, "cool")), qe());
  }
  function hl() {
    const a = i("upcomingCountSetting");
    if (!a) return;
    const s = Math.max(1, Kt.length - 1), d = xn;
    a.innerHTML = "";
    for (let B = 1; B <= s; B++) {
      const O = document.createElement("option");
      O.value = String(B), O.textContent = String(B), a.appendChild(O);
    }
    const m = document.createElement("option");
    m.value = "all", m.textContent = "All", a.appendChild(m);
    const S = d === "all" ? "all" : String(Math.min(Number(d) || 1, s));
    a.value = S, xn = S === "all" ? "all" : Number(S);
  }
  function qe() {
    Number(R.value) * 60;
    const a = Number(q.value), s = Number(D.value), d = ue[Me], m = !!(d != null && d.customSequence), S = (m ? !d.includeWarmup : d != null && d.warmupOff) ? [] : Gr(Qe), B = Gr(Xt), O = m && !d.includeCooldown ? [] : Gr(Ga);
    if (d && (d.total = Number(R.value), d.work = a, d.rest = s, d.rounds = Number(ae.value) || 1, d.customSequence ? (d.sequence = Xt.map((Rt) => ({ ...Rt })), d.warmup = Qe.map((Rt) => ({ ...Rt })), d.cooldown = Ga.map((Rt) => ({ ...Rt }))) : (d.strength = Xt.map((Rt) => ({ ...Rt })), d.warmup = Qe.map((Rt) => ({ ...Rt })), d.cooldown = Ga.map((Rt) => ({ ...Rt })))), d != null && d.customSequence) {
      const Rt = [...S.map((pe) => ({ ...pe, section: "warmup" })), ...B, ...O.map((pe) => ({ ...pe, section: "cooldown" }))].map((pe) => {
        if (pe.kind === "video") return { ...pe, duration: Ti(pe, a), rest: 0 };
        if (pe.kind === "rest") {
          const la = pe.useGlobalTiming === !0 ? s : Number(pe.duration) || s;
          return { ...pe, duration: la, rest: 0 };
        }
        const Ma = pe.useGlobalTiming === !1 && Number(pe.duration) || a;
        return { ...pe, duration: Ma, rest: 0 };
      });
      d.autoRest && Number(d.autoRestDuration) > 0 ? (Kt = [], Rt.forEach((pe, Ma) => {
        Kt.push(pe);
        const la = Rt[Ma + 1];
        pe.kind !== "rest" && la && la.kind !== "rest" && Kt.push({
          id: "auto-rest-" + Ma,
          name: "Rest",
          group: "Rest",
          kind: "rest",
          hidden: !1,
          duration: Number(d.autoRestDuration),
          rest: 0,
          autoGenerated: !0
        });
      })) : Kt = Rt;
    } else
      Kt = [...S.map((Rt) => ({ ...Rt, section: "warmup" })), ...B, ...O.map((Rt) => ({ ...Rt, section: "cooldown" }))].map((Rt) => Rt.kind === "video" ? { ...Rt, duration: Ti(Rt, a), rest: 0 } : Rt.kind === "rest" ? { ...Rt, duration: Rt.useGlobalTiming === !0 ? s : Number(Rt.duration) || s, rest: 0 } : { ...Rt, duration: Rt.useGlobalTiming === !1 && Number(Rt.duration) || a, rest: s }), Kt.forEach((Rt, pe) => {
        var Ma;
        ((Ma = Kt[pe + 1]) == null ? void 0 : Ma.kind) === "rest" && (Rt.rest = 0);
      }), Kt.length && (Kt[Kt.length - 1].rest = 0);
    const Y = Math.max(1, Math.min(10, Number(ae.value) || 1)), wt = Kt, Mt = (Rt) => Y <= 1 ? null : Rt.section === "warmup" || Rt.presetRole === "warmup" ? "first" : Rt.section === "cooldown" || Rt.presetRole === "cooldown" ? "last" : Rt.kind === "video" && (Rt.videoRounds === "first" || Rt.videoRounds === "last") ? Rt.videoRounds : null, bt = (Rt) => !!Mt(Rt), mt = wt.filter((Rt) => !bt(Rt)), It = wt.filter(bt), ee = mt.length, Wt = mt.reduce((Rt, pe) => Rt + pe.duration + pe.rest, 0), Ht = It.reduce((Rt, pe) => Rt + pe.duration + pe.rest, 0), Dt = [
      It.some((Rt) => Rt.section === "warmup" || Rt.presetRole === "warmup") && "warm-up",
      It.some((Rt) => Rt.section === "cooldown" || Rt.presetRole === "cooldown") && "cooldown",
      It.some((Rt) => Rt.kind === "video" && !Rt.section && !Rt.presetRole) && "video"
    ].filter(Boolean), we = Dt.length > 1 ? Dt.slice(0, -1).join(", ") + " & " + Dt[Dt.length - 1] : Dt[0] || "";
    Kt = [];
    const xe = (Rt, pe) => {
      const Ma = Mt(Rt);
      return !Ma || (Ma === "first" ? pe === 1 : pe === Y);
    };
    for (let Rt = 1; Rt <= Y; Rt++)
      if (wt.filter((pe) => xe(pe, Rt)).forEach((pe, Ma) => Kt.push({ ...pe, id: pe.id + (Y > 1 ? "-r" + Rt : ""), round: Rt, roundIndex: Ma })), Rt < Y && ee)
        if (d != null && d.customSequence)
          Kt.push({ id: "round-break-" + Rt, name: "Rest", group: "Round " + (Rt + 1) + " next", kind: "rest", hidden: !1, duration: s, rest: 0, round: Rt, roundIndex: ee, roundBreak: !0 });
        else {
          const pe = Kt[Kt.length - 1];
          pe.rest = s, pe.roundBreakAfter = !0;
        }
    ir();
    const Gt = Kt.reduce((Rt, pe) => Rt + pe.duration + pe.rest, 0), ke = Math.round(Wt / 60), Pe = Math.round(Gt / 60), de = Y > 1 ? oo(ke) + " × " + Y + " rounds" + (Ht ? " + " + Ca(Ht) + " " + we : "") + " (" + oo(Pe) + ")" : oo(Pe), re = [S.length ? "warm-up" : "", O.length ? "cooldown" : ""].filter(Boolean), ka = d != null && d.customSequence ? de + " · " + ee + " items" + (re.length && !(Y > 1 && Ht) ? " · " + re.join(" + ") : "") : de + " · " + Ca(a) + " / " + Ca(s) + (re.length && !(Y > 1 && Ht) ? " · " + re.join(" + ") : "");
    lt.textContent = Ca(Wt);
    const Ba = Kt.filter((Rt) => !Rt.roundBreak).length, Xe = Y > 1 ? Ba + " activities · " + Y + " rounds" : ee + " activities";
    qt.textContent = Y > 1 ? Y + " rounds · " + oo(Pe) + " total" : "1 round", i("roundsCount").textContent = Y, n.querySelectorAll("[data-rounds-step]").forEach((Rt) => {
      Rt.disabled = Number(Rt.dataset.roundsStep) < 0 ? Y <= 1 : Y >= 10;
    }), d && (d.summary = ka, d.activityCount = ee);
    const to = n.querySelector(".workoutPanel.active .sub");
    to && (to.textContent = ka), Nn.textContent = ka, ii(), n.querySelectorAll(".workoutPanel.active .activityCount").forEach((Rt) => Rt.textContent = Xe), ir(), sr(), No(), ri(), hl(), Ye && E(), Ot.workout.classList.contains("active") && !Ce && Aa();
  }
  const yn = '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><g fill="currentColor"><circle cx="9" cy="6" r="1.6"/><circle cx="15" cy="6" r="1.6"/><circle cx="9" cy="12" r="1.6"/><circle cx="15" cy="12" r="1.6"/><circle cx="9" cy="18" r="1.6"/><circle cx="15" cy="18" r="1.6"/></g></svg>', To = '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6z"/></svg>', ei = {
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
  }, Pa = (a) => '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">' + (ei[a] || "") + "</svg>";
  n.querySelectorAll("[data-icon]").forEach((a) => {
    a.innerHTML = Pa(a.dataset.icon);
  });
  let fa = null, ia = null;
  function _s(a) {
    return a = Math.max(1, Number(a) || 0), a >= 3600 && a % 3600 === 0 ? { value: a / 3600, unit: "hour" } : a >= 60 && a % 60 === 0 ? { value: a / 60, unit: "min" } : { value: a, unit: "sec" };
  }
  function In(a = !1) {
    const s = n.querySelector(".moveEditForm input[data-f=url],.moveEditForm input[data-f=name]");
    s && (s.focus({ preventScroll: !0 }), a && s.select());
  }
  function ai(a, s, d = {}) {
    const m = a.kind === "rest", S = a.kind === "video", B = S ? a.useVideoLength !== !1 : m ? a.useGlobalTiming === !0 : a.useGlobalTiming !== !1, O = Number(m ? D.value : q.value), Y = _s(S ? a.useVideoLength === !1 ? a.duration : Ti({ ...a, useVideoLength: !0 }) : B ? O : a.duration || O), wt = S && (Number(a.videoDuration) > 0 || Number(a.end) > 0), Mt = S ? '<label class="moveEditWide"><span>YouTube link</span><input class="addInput" data-f="url" type="url" inputmode="url" autocomplete="off" value="' + ne(a.url || "") + '" placeholder="Paste a YouTube link"></label><label><span>Name</span><input class="addInput" data-f="name" type="text" value="' + ne(a.autoName ? "" : a.name) + '" placeholder="Uses the video’s title"></label><label><span>Plays in</span><select class="creatorUnitSelect" data-f="rounds">' + [["every", "Every round"], ["first", "The first round only"], ["last", "The last round only"]].map(([Gt, ke]) => '<option value="' + Gt + '"' + ((a.videoRounds || "every") === Gt ? " selected" : "") + ">" + ke + "</option>").join("") + '</select></label><p class="fieldError" data-f="urlError" hidden>That isn’t a YouTube link. Copy it from the Share button on YouTube.</p>' : '<label><span>Name</span><input class="addInput" data-f="name" type="text" value="' + ne(a.name) + '" placeholder="' + (m ? "Rest" : "Name this movement") + '"></label><label><span>Type / group</span><input class="addInput" data-f="group" type="text" value="' + ne(a.group) + '" placeholder="' + (m ? "Rest" : "e.g. Glutes + legs") + '"></label>', bt = S ? "Play the whole " + (Number(a.start) > 0 || Number(a.end) > 0 ? "clip" : "video") + (wt ? " · " + io(Ti({ ...a, useVideoLength: !0 })) : "") : "Use global timing · " + Ca(O), mt = document.createElement("div");
    mt.className = "moveRow editing" + (d.sheet ? " inSheet" : ""), mt.dataset.index = s, mt.dataset.id = a.id;
    const It = d.isNew ?? (ia == null ? void 0 : ia.item) === a, ee = d.sheet ? '<div class="moveEditActions sheetActions">' + (It ? "" : '<div class="sheetSecondary"><button class="hideBtn" type="button" data-a="hide">' + (a.hidden ? "Show" : "Hide") + '</button><button class="removeBtn" type="button" data-a="remove" aria-label="Hold to remove ' + ne(a.name) + '"><span class="removeFill"></span><span class="removeLabel">Remove</span></button></div>') + '<div class="sheetPrimary"><button class="pill" type="button" data-a="cancel">Cancel</button><button class="primary" type="button" data-a="save">' + (It ? "Add" : "Save") + "</button></div></div>" : '<div class="moveEditActions"><button class="pill" type="button" data-a="cancel">Cancel</button><button class="primary" type="button" data-a="save">Save</button></div>';
    mt.innerHTML = '<div class="moveEditForm"><div class="moveEditFields' + (S ? " videoFields" : "") + '">' + Mt + '</div><div class="moveEditTiming"><label class="globalTimingToggle"><input type="checkbox" data-f="global"' + (B ? " checked" : "") + '><span class="toggleTrack" aria-hidden="true"><span class="toggleThumb"></span></span><span class="toggleLabel">' + ne(bt) + '</span></label><div class="creatorDurationRow"><input class="addInput creatorNumber" data-f="dur" type="number" min="1" max="3600" step="1" value="' + Y.value + '" aria-label="Duration"><select class="creatorUnitSelect" data-f="unit" aria-label="Duration unit">' + ["sec", "min", "hour"].map((Gt) => '<option value="' + Gt + '"' + (Gt === Y.unit ? " selected" : "") + ">" + { sec: "seconds", min: "minutes", hour: "hours" }[Gt] + "</option>").join("") + "</select></div></div>" + ee + "</div>";
    const Wt = (Gt) => mt.querySelector("[data-f=" + Gt + "]"), Ht = () => {
      const Gt = Wt("global").checked;
      Wt("dur").disabled = Gt, Wt("unit").disabled = Gt, mt.querySelector(".creatorDurationRow").classList.toggle("isDisabled", Gt);
    };
    Wt("global").addEventListener("change", Ht), Ht();
    const Dt = () => {
      var Gt;
      if (d.sheet) {
        (Gt = d.onCancel) == null || Gt.call(d);
        return;
      }
      It && Ei(), fa = null, qe();
    }, we = () => {
      var Pe;
      if (S) {
        xe();
        return;
      }
      const Gt = Wt("name").value.trim();
      if (!Gt) {
        Wt("name").focus();
        return;
      }
      a.name = Gt, a.group = Wt("group").value.trim() || (m ? "Rest" : "Movement");
      const ke = Wt("global").checked;
      if (a.useGlobalTiming = ke, ke || (a.duration = Math.max(m ? 5 : 1, ro(Wt("dur").value, Wt("unit").value))), d.sheet) {
        (Pe = d.onSaved) == null || Pe.call(d);
        return;
      }
      It && (ia = null), fa = null, qe(), Be(It ? m ? "Rest added" : "Movement added" : "Movement updated");
    }, xe = () => {
      var re;
      const Gt = Wt("url").value.trim(), ke = Es(Gt);
      if (!ke) {
        Wt("urlError").hidden = !1, Wt("url").classList.add("invalid"), Wt("url").focus();
        return;
      }
      const Pe = ke.id !== a.videoId;
      a.url = Gt, a.videoId = ke.id, a.start = ke.start, a.end = ke.end, Pe && (a.videoDuration = null, a.videoError = null);
      const de = Wt("name").value.trim();
      a.autoName = !de, a.name = de || (Pe ? "" : a.name) || a.videoTitle || "YouTube video", a.group = "Video", a.videoRounds = Wt("rounds").value, a.useVideoLength = Wt("global").checked, a.useVideoLength || (a.duration = Math.max(5, ro(Wt("dur").value, Wt("unit").value))), d.sheet ? (re = d.onSaved) == null || re.call(d) : (It && (ia = null), fa = null, qe(), Be(It ? "Video added" : "Video updated")), (Pe || !a.videoDuration || a.autoName && !a.videoTitle) && Lr(a);
    };
    if (S && Wt("url").addEventListener("input", () => {
      Wt("urlError").hidden = !0, Wt("url").classList.remove("invalid");
    }), mt.querySelector("[data-a=cancel]").addEventListener("click", Dt), mt.querySelector("[data-a=save]").addEventListener("click", we), d.sheet && !It) {
      mt.querySelector("[data-a=hide]").addEventListener("click", () => {
        var ke;
        return (ke = d.onHide) == null ? void 0 : ke.call(d);
      });
      const Gt = mt.querySelector("[data-a=remove]");
      zi(Gt, Gt.querySelector(".removeFill"), 1200, () => {
        var ke;
        return (ke = d.onRemove) == null ? void 0 : ke.call(d);
      });
    }
    return mt.addEventListener("keydown", (Gt) => {
      Gt.key === "Escape" && (Gt.preventDefault(), Gt.stopPropagation(), Dt()), Gt.key === "Enter" && Gt.target.matches("input") && (Gt.preventDefault(), we());
    }), mt;
  }
  function Lo(a, s) {
    const d = i(s);
    d.innerHTML = "", a.forEach((m, S) => {
      if (m === fa && !Do()) {
        d.appendChild(ai(m, S));
        return;
      }
      const B = document.createElement("div");
      B.className = "moveRow" + (m.hidden ? " hidden" : "") + (m.kind === "rest" ? " restItem" : "") + (m.kind === "video" ? " videoItem" : "") + (Pl(m) ? " noMeta" : ""), B.dataset.index = S, B.dataset.id = m.id;
      const O = m.kind === "rest" ? m.useGlobalTiming === !0 ? "Global timing" : Ca(m.duration) : m.useGlobalTiming === !1 ? Ca(m.duration) : "Global timing", Y = m.kind === "video" ? '<span class="moveKindBadge">Video</span>' : "", wt = m.kind === "video" ? m.videoError ? "YouTube · can’t play outside YouTube" : "YouTube · " + (m.useVideoLength === !1 ? "stops after " + Ca(m.duration) : Number(m.videoDuration) > 0 || Number(m.end) > 0 ? io(Ti(m)) : "plays to the end") + (m.videoRounds === "first" ? " · first round only" : m.videoRounds === "last" ? " · last round only" : "") : m.group + " · " + O, Mt = '<button class="dragHandle" type="button" title="Drag to reorder" aria-label="Reorder ' + ne(m.name) + '. Drag, or use the up and down arrow keys">' + yn + "</button>", bt = '<div class="moveText"><div class="moveItemName">' + ne(m.name) + Y + '</div><div class="moveMeta">' + ne(wt) + "</div></div>", mt = (Wt) => Wt.addEventListener("keydown", (Ht) => {
        var xe, Gt;
        if (Ht.key !== "ArrowUp" && Ht.key !== "ArrowDown") return;
        Ht.preventDefault();
        const Dt = a.indexOf(m), we = Dt + (Ht.key === "ArrowUp" ? -1 : 1);
        we < 0 || we >= a.length || (a.splice(Dt, 1), a.splice(we, 0, m), qe(), (Gt = (xe = i(s).children[we]) == null ? void 0 : xe.querySelector(".dragHandle")) == null || Gt.focus());
      });
      if (Do()) {
        B.classList.add("phoneRow"), B.tabIndex = 0, B.setAttribute("role", "button"), B.setAttribute("aria-label", "Edit " + (m.name || "step")), B.innerHTML = Mt + bt + '<span class="rowChevron" aria-hidden="true">›</span>';
        const Wt = B.querySelector(".dragHandle");
        Wt.addEventListener("pointerdown", (Ht) => Zn(Ht, B, d, a)), mt(Wt), B.addEventListener("click", (Ht) => {
          Ht.target.closest(".dragHandle") || Ri(m, a);
        }), B.addEventListener("keydown", (Ht) => {
          Ht.key === "Enter" && Ht.target === B && (Ht.preventDefault(), Ri(m, a));
        }), d.appendChild(B);
        return;
      }
      B.innerHTML = Mt + bt + '<div class="moveActions seg"><button class="hideBtn editBtn segBtn" type="button" aria-label="Edit ' + ne(m.name) + '">Edit</button><button class="hideBtn segBtn" type="button">' + (m.hidden ? "Show" : "Hide") + '</button><button class="removeBtn segBtn" type="button" title="Hold to remove" aria-label="Hold to remove ' + ne(m.name) + '"><span class="removeFill"></span><span class="removeLabel">' + To + "</span></button></div>", B.querySelector(".editBtn").addEventListener("click", () => {
        Ei(), fa = m, qe(), In();
      }), B.querySelector(".hideBtn:not(.editBtn)").addEventListener("click", () => {
        m.hidden = !m.hidden, qe();
      });
      const It = B.querySelector(".removeBtn");
      zi(It, It.querySelector(".removeFill"), 1200, () => {
        const Wt = a.indexOf(m);
        Wt < 0 || (a.splice(Wt, 1), qe(), Be("Removed " + m.name, { label: "Undo", run: () => {
          a.splice(Math.min(Wt, a.length), 0, m), qe();
        } }));
      });
      const ee = B.querySelector(".dragHandle");
      ee.addEventListener("pointerdown", (Wt) => Zn(Wt, B, d, a)), mt(ee), d.appendChild(B);
    });
  }
  const We = () => {
    var a;
    return (a = window.matchMedia) == null ? void 0 : a.call(window, "(prefers-reduced-motion: reduce)").matches;
  }, ni = (a) => {
    var s;
    try {
      (s = navigator.vibrate) == null || s.call(navigator, a);
    } catch {
    }
  };
  function Zn(a, s, d, m) {
    if (a.button !== void 0 && a.button !== 0) return;
    a.preventDefault();
    const S = a.currentTarget, B = a.pointerId, O = !We();
    try {
      S.setPointerCapture(B);
    } catch {
    }
    const Y = s.closest(".exerciseScroller") || oi(s), wt = d.style.position;
    d.style.position = "relative";
    const Mt = [...d.children].filter((t) => t.classList.contains("moveRow")), bt = Mt.indexOf(s), mt = parseFloat(getComputedStyle(d).rowGap) || 8, It = s.offsetHeight, ee = It + mt, Wt = Mt.map((t) => t.offsetTop), Ht = Mt.map((t) => t.offsetHeight), Dt = () => d.getBoundingClientRect().top, we = d.getBoundingClientRect().width, xe = a.clientY - (Dt() + Wt[bt]), Gt = a.clientX;
    let ke = a.clientY, Pe = a.clientX, de = Dt() + Wt[bt], re = 0, ka = 0, Ba = 0, Xe = 1, to = 0, Rt = bt, pe = !1, Ma = 0, la = !1, Pr = !1, yo = Wt[bt];
    d.classList.add("reordering"), s.classList.add("dragging"), s.style.transition = "none", ni(8);
    const il = () => {
      const t = ke - xe + It / 2 - Dt();
      let e = 0;
      return Mt.forEach((o, r) => {
        r !== bt && t > Wt[r] + Ht[r] / 2 && e++;
      }), e;
    }, rl = () => {
      Mt.forEach((t, e) => {
        if (e === bt) return;
        const o = bt < Rt && e > bt && e <= Rt ? -ee : bt > Rt && e >= Rt && e < bt ? ee : 0;
        t.style.transform = o ? "translateY(" + o + "px)" : "";
      });
    }, Nr = () => {
      const t = d.getBoundingClientRect(), e = Math.abs(Pe - Gt) > Math.max(80, we * 0.3) || Pe < t.left - 24 || Pe > t.right + 24;
      e !== pe && (pe = e, s.classList.toggle("willReturn", e), ni(e ? 10 : 4));
      const o = pe ? bt : il();
      o !== Rt && (Rt = o, rl(), pe || ni(4));
    }, Qo = () => {
      if (Rt === bt) return Wt[bt];
      const t = Mt.filter((o, r) => r !== bt);
      let e = Wt[0];
      for (let o = 0; o < Rt; o++) e += t[o].offsetHeight + mt;
      return e;
    }, yi = () => {
      const t = O ? Math.min(Math.abs(re) / 40, 1) : 0, e = O && !la ? Math.max(-3, Math.min(3, Ba * 0.6)) : 0;
      s.style.transform = "translate(" + ka.toFixed(2) + "px," + (de - (Dt() + Wt[bt])).toFixed(2) + "px) rotate(" + e.toFixed(2) + "deg) scale(" + (Xe * (1 - 0.04 * t)).toFixed(4) + "," + (Xe * (1 + 0.06 * t)).toFixed(4) + ")";
    }, ie = () => {
      Ma = requestAnimationFrame(ie);
      const t = Pe - Gt, e = la ? Dt() + yo : ke - xe, o = la ? 0 : pe ? t * 0.9 : Math.max(-22, Math.min(22, t * 0.22)), r = la ? 1 : pe ? 0.97 : 1.035;
      if (!O) {
        de = e, ka = la ? 0 : o, Xe = 1, yi(), la && Je();
        return;
      }
      const c = la ? 0.24 : 0.2, h = la ? 0.62 : 0.68;
      re = (re + (e - de) * c) * h, de += re, Ba = (Ba + (o - ka) * 0.16) * 0.7, ka += Ba, to = (to + (r - Xe) * 0.22) * 0.6, Xe += to, yi(), la && Math.abs(re) < 0.15 && Math.abs(e - de) < 0.5 && Math.abs(ka) < 0.5 && Math.abs(Xe - 1) < 3e-3 && Je();
    }, _e = setInterval(() => {
      if (!Y || la) return;
      const t = Y.getBoundingClientRect(), e = 56, o = ke < t.top + e ? -10 : ke > t.bottom - e ? 10 : 0;
      o && (Y.scrollTop += o, Nr());
    }, 30);
    function Je() {
      if (Pr) return;
      Pr = !0, cancelAnimationFrame(Ma);
      const t = Rt !== bt, e = s.dataset.id;
      if (d.classList.remove("reordering"), Mt.forEach((r) => {
        r.style.transition = "none", r.style.transform = "";
      }), s.classList.remove("dragging", "willReturn"), d.style.position = wt, t) {
        const [r] = m.splice(bt, 1);
        m.splice(Rt, 0, r);
      }
      qe();
      const o = e && d.querySelector('.moveRow[data-id="' + e + '"]');
      o && O && o.animate([{ transform: "scale(1.02,.95)" }, { transform: "scale(.995,1.012)" }, { transform: "none" }], { duration: 340, easing: "ease-out" }), t && Be("Order saved");
    }
    const Sa = (t) => {
      if (t.pointerId === B) {
        if (t.pointerType === "mouse" && t.buttons === 0) {
          mn();
          return;
        }
        ke = t.clientY, Pe = t.clientX, Nr();
      }
    }, ja = (t) => {
      t.pointerId === B && mn();
    };
    function mn() {
      la || (window.removeEventListener("pointermove", Sa, !0), window.removeEventListener("pointerup", ja, !0), window.removeEventListener("pointercancel", ja, !0), S.removeEventListener("lostpointercapture", mn), clearInterval(_e), pe && Rt !== bt && (Rt = bt, rl()), yo = Qo(), la = !0, ni(6), setTimeout(Je, 800));
    }
    window.addEventListener("pointermove", Sa, !0), window.addEventListener("pointerup", ja, !0), window.addEventListener("pointercancel", ja, !0), S.addEventListener("lostpointercapture", mn), Ma = requestAnimationFrame(ie), yi();
  }
  function sr() {
    var S, B, O, Y;
    const a = ue[Me], s = (S = i("warmupList")) == null ? void 0 : S.closest("section"), d = (B = i("cooldownList")) == null ? void 0 : B.closest("section"), m = (Y = (O = i("strengthList")) == null ? void 0 : O.closest("section")) == null ? void 0 : Y.querySelector(".sectionTitle");
    a != null && a.customSequence ? (s && (s.hidden = !a.includeWarmup), d && (d.hidden = !a.includeCooldown), m && (m.textContent = "Move sequence")) : (s && (s.hidden = !!(a != null && a.warmupOff)), d && (d.hidden = !1), m && (m.textContent = "Kettlebell work")), Lo(Qe, "warmupList"), Lo(Xt, "strengthList"), Lo(Ga, "cooldownList");
  }
  function Ei() {
    if (!ia) return;
    const { item: a, arr: s } = ia;
    ia = null;
    const d = s.indexOf(a);
    d >= 0 && s.splice(d, 1), fa === a && (fa = null);
  }
  function _i(a) {
    return a.id === "warmupList" ? { arr: Qe, kind: "warmup", group: "Warm-up" } : a.id === "cooldownList" ? { arr: Ga, kind: "cooldown", group: "Cooldown" } : { arr: Xt, kind: "work", group: "" };
  }
  function Ds(a, s) {
    const d = _i(s), m = Date.now().toString(36);
    return a === "video" ? { id: "video-" + m, name: "", group: "Video", kind: "video", hidden: !1, url: "", videoId: "", start: 0, end: null, videoDuration: null, useVideoLength: !0, autoName: !0, duration: 300 } : a === "rest" ? { id: "rest-" + m, name: "Rest", group: "Rest", kind: "rest", hidden: !1, useGlobalTiming: !0, duration: Number(D.value) } : { id: "movement-" + m, name: "", group: d.group, kind: d.kind, hidden: !1, useGlobalTiming: !0, duration: Number(q.value) };
  }
  const Bs = "cubic-bezier(.34,1.46,.64,1)";
  function Ao(a, s) {
    if (We() || !a) {
      s();
      return;
    }
    const d = (B) => {
      var O;
      return ((O = B.dataset) == null ? void 0 : O.id) || B;
    }, m = () => [...a.querySelectorAll(".moveRow,.sectionTitle,.movementCreatorLaunch")], S = new Map(m().map((B) => [d(B), B.getBoundingClientRect().top]));
    s(), m().forEach((B) => {
      const O = S.get(d(B));
      if (O === void 0) return;
      const Y = O - B.getBoundingClientRect().top;
      Math.abs(Y) < 0.5 || B.animate([{ transform: "translateY(" + Y + "px)" }, { transform: "none" }], { duration: 440, easing: Bs });
    });
  }
  function Eo(a, s) {
    if (!a || We()) return;
    const d = a.offsetHeight, m = Math.max(0, d - (s || 0));
    a.animate([{ clipPath: "inset(0 0 " + m + "px 0 round 20.8px)" }, { clipPath: "inset(0 0 0 0 round 20.8px)" }], { duration: 460, easing: Bs });
  }
  function lr(a, s, d, m) {
    const { arr: S } = _i(s), B = Ds(a, s);
    S.splice(Math.max(0, Math.min(d, S.length)), 0, B), ia = { item: B, arr: S }, fa = B, Ao(s.closest(".exerciseScroller,.createStepSlot") || s, () => qe());
    const O = s.querySelector(".moveRow.editing");
    return Eo(O, m), In(a === "rest"), O;
  }
  function oi(a) {
    for (let s = a; s && s.nodeType === 1; s = s.parentElement) {
      const d = getComputedStyle(s).overflowY;
      if (/(auto|scroll)/.test(d) && s.scrollHeight > s.clientHeight) return s;
    }
    return null;
  }
  const aa = { movement: ["New movement", "Drop to add, then name it"], rest: ["Rest", "Rest · Global timing"], video: ["New video", "Drop to add, then paste a YouTube link"] };
  function dn(a, s) {
    const d = document.createElement("div");
    return d.className = "addGhost" + (a === "movement" ? "" : " rest"), d.innerHTML = '<span class="addGhostGrip">' + yn + '</span><span class="addGhostText"><strong>' + ne(s[0]) + "</strong><small>" + ne(s[1]) + "</small></span>", i("workoutModal").appendChild(d), d;
  }
  function Se(a) {
    a.classList.add("leaving"), setTimeout(() => a.remove(), 180);
  }
  function Di(a, s, d, m) {
    (fa || ia) && (Ei(), fa = null, qe());
    const S = a.getBoundingClientRect(), B = dn(s, aa[s]);
    B.setAttribute("aria-hidden", "true"), B.style.width = S.width + "px", B.style.height = S.height + "px", B.style.transform = "translate(" + S.left + "px," + S.top + "px)", a.classList.add("lifting");
    const O = oi(a);
    return _o({
      ghost: B,
      origin: S,
      sx: d,
      sy: m,
      scroller: O,
      column: a.closest(".exerciseScroller,.createFlow") || O,
      home: () => a.getBoundingClientRect(),
      onDrop: (Y, wt, Mt) => {
        Se(B), a.classList.remove("lifting"), lr(s, Y, wt, Mt);
      },
      onReturn: () => {
        Se(B), a.classList.remove("lifting");
      }
    });
  }
  function _o({ ghost: a, origin: s, sx: d, sy: m, scroller: S, column: B, home: O, onDrop: Y, onReturn: wt, rowLook: Mt = !1 }) {
    var yi;
    const bt = !We(), mt = ((yi = n.querySelector(".moveList .moveRow:not(.editing)")) == null ? void 0 : yi.offsetHeight) || 80, It = d - s.left, ee = m - s.top, Wt = 44;
    let Ht = d, Dt = m, we = s.left, xe = s.top, Gt = 0, ke = 0, Pe = !bt, de = null, re = null, ka = -1, Ba = 0, Xe = null;
    const to = () => ["warmupList", "strengthList", "cooldownList"].map((ie) => i(ie)).filter((ie) => ie && ie.getClientRects().length && !ie.closest("[hidden]")), Rt = (ie) => {
      if (ie === de) return;
      de = ie, a.classList.toggle("overList", !!ie || Mt);
      const _e = ie ? ie.getBoundingClientRect().width : s.width;
      a.style.width = _e + "px", a.style.height = (ie ? mt : s.height) + "px";
    }, pe = (ie) => {
      ie.classList.add("leaving"), ie.style.height = "0px", ie.style.marginTop = "-8px", setTimeout(() => ie.remove(), bt ? 320 : 0);
    }, Ma = (ie, _e, Je) => {
      if (re && re.parentNode === ie && ka === Je || (re && (pe(re), re = null, ka = -1), !ie)) return;
      const Sa = document.createElement("div");
      Sa.className = "dropSlot", ie.insertBefore(Sa, _e), re = Sa, ka = Je, Sa.getBoundingClientRect(), Sa.style.height = mt + "px", Sa.style.marginTop = "0px";
    }, la = () => {
      let ie = null, _e = 1 / 0;
      for (const mn of to()) {
        const t = mn.getBoundingClientRect();
        if (Ht < t.left - 48 || Ht > t.right + 48) continue;
        const e = t.top - 28, o = t.bottom + 28, r = Dt < e ? e - Dt : Dt > o ? Dt - o : 0;
        r < _e && (_e = r, ie = mn);
      }
      const Je = B == null ? void 0 : B.getBoundingClientRect(), ja = Je && Ht >= Je.left && Ht <= Je.right && Dt >= Je.top && Dt <= Je.bottom || _e === 0 ? ie : null;
      if (ja) {
        const mn = [...ja.children].filter((e) => e.classList.contains("moveRow"));
        let t = mn.findIndex((e) => {
          const o = e.getBoundingClientRect();
          return Dt < o.top + o.height / 2;
        });
        t < 0 && (t = mn.length), Ma(ja, mn[t] || null, t);
      } else Ma(null);
      Rt(ja);
    }, Pr = () => {
      if (Xe) return Xe.aim();
      if (de) {
        const ie = de.getBoundingClientRect();
        let _e = Dt - mt / 2;
        return re && (_e = _e * 0.6 + re.getBoundingClientRect().top * 0.4), { x: ie.left, y: _e };
      }
      return { x: Ht - It, y: Dt - ee };
    }, yo = (ie, _e, Je, Sa) => {
      a.style.transform = "translate(" + we + "px," + xe + "px) rotate(" + ie + "deg) rotate(" + _e + "rad) scale(" + Je + "," + Sa + ") rotate(" + -_e + "rad)";
    }, il = () => {
      if (Ba = requestAnimationFrame(il), !Pe) {
        const t = Ht - d, e = Dt - m, o = Math.min(Math.hypot(t, e) / Wt, 1);
        we = s.left + t * 0.35, xe = s.top + e * 0.35, yo(0, Math.atan2(e, t), 1 + 0.155 * o, 1 - 0.1 * o);
        return;
      }
      const ie = Pr();
      if (!bt) {
        we = ie.x, xe = ie.y, yo(0, 0, 1, 1), Xe && (cancelAnimationFrame(Ba), Xe.done());
        return;
      }
      const _e = Xe ? Xe.k : 0.17, Je = Xe ? Xe.d : 0.7;
      Gt = (Gt + (ie.x - we) * _e) * Je, ke = (ke + (ie.y - xe) * _e) * Je, we += Gt, xe += ke;
      const Sa = Math.hypot(Gt, ke), ja = Math.min(Sa / 48, 1), mn = de || Xe ? 0 : Math.max(-5, Math.min(5, Gt * 0.32));
      yo(mn, Math.atan2(ke, Gt), 1 + 0.1 * ja, 1 - 0.063 * ja), Xe && Sa < 0.15 && Math.hypot(ie.x - we, ie.y - xe) < 0.6 && (cancelAnimationFrame(Ba), Xe.done());
    }, rl = setInterval(() => {
      if (!S || Xe) return;
      const ie = S.getBoundingClientRect(), _e = 64, Je = Dt < ie.top + _e ? -(ie.top + _e - Dt) / 4 : Dt > ie.bottom - _e ? (Dt - (ie.bottom - _e)) / 4 : 0;
      Je && (S.scrollTop += Math.max(-18, Math.min(18, Je)), la());
    }, 30);
    Ba = requestAnimationFrame(il);
    let Nr = !1;
    const Qo = (ie, _e) => {
      if (Nr) return;
      Nr = !0, cancelAnimationFrame(Ba);
      const Je = re ? re.offsetHeight : mt;
      !ie && re && (re.remove(), re = null), ie ? Y(ie, _e, Je) : wt();
    };
    return {
      move(ie, _e) {
        Ht = ie, Dt = _e, !Pe && Math.hypot(Ht - d, Dt - m) > Wt && (Pe = !0, Gt = (Ht - d) * 0.085, ke = (Dt - m) * 0.085), Pe && la();
      },
      drop(ie) {
        clearInterval(rl);
        const _e = de, Je = ka;
        if (!ie && _e && re) {
          const Sa = re;
          Xe = { k: 0.24, d: 0.62, aim: () => {
            const ja = Sa.getBoundingClientRect();
            return { x: ja.left, y: ja.top };
          }, done: () => Qo(_e, Je) }, setTimeout(() => Qo(_e, Je), 650), bt || (cancelAnimationFrame(Ba), Qo(_e, Je));
          return;
        }
        Ma(null), Rt(null), Xe = { k: 0.2, d: 0.66, aim: () => {
          const Sa = O();
          return { x: Sa.left, y: Sa.top };
        }, done: () => Qo(null) }, setTimeout(() => Qo(null), 650), bt || (cancelAnimationFrame(Ba), Qo(null));
      }
    };
  }
  function Bi(a, s) {
    let d = !1;
    a.addEventListener("click", (m) => {
      if (d) {
        d = !1, m.preventDefault();
        return;
      }
      if (Do()) {
        Yr(s);
        return;
      }
      const S = i("strengthList"), B = lr(s, S, _i(S).arr.length, 0);
      B == null || B.scrollIntoView({ block: "nearest", behavior: We() ? "auto" : "smooth" });
    }), a.addEventListener("pointerdown", (m) => {
      if (m.button !== void 0 && m.button !== 0) return;
      const S = m.pointerId, B = m.clientX, O = m.clientY;
      let Y = null, wt = !1;
      try {
        a.setPointerCapture(S);
      } catch {
      }
      const Mt = (Dt) => {
        if (Dt.pointerId === S) {
          if (Dt.pointerType === "mouse" && Dt.buttons === 0) {
            Ht(!1);
            return;
          }
          if (!Y) {
            if (Math.hypot(Dt.clientX - B, Dt.clientY - O) < 6) return;
            Y = Di(a, s, B, O);
          }
          Y.move(Dt.clientX, Dt.clientY);
        }
      }, bt = (Dt) => {
        Dt.pointerId === S && Ht(!1);
      }, mt = (Dt) => {
        Dt.pointerId === S && Ht(!0);
      }, It = () => Ht(!1), ee = () => Ht(!0), Wt = (Dt) => {
        Dt.key === "Escape" && Y && (Dt.preventDefault(), Dt.stopPropagation(), Ht(!0));
      };
      function Ht(Dt) {
        if (!wt && (wt = !0, window.removeEventListener("pointermove", Mt, !0), window.removeEventListener("pointerup", bt, !0), window.removeEventListener("pointercancel", mt, !0), window.removeEventListener("keydown", Wt, !0), window.removeEventListener("blur", ee), a.removeEventListener("lostpointercapture", It), Y)) {
          const we = Y;
          Y = null, d = !0, setTimeout(() => {
            d = !1;
          }, 0), we.drop(Dt);
        }
      }
      window.addEventListener("pointermove", Mt, !0), window.addEventListener("pointerup", bt, !0), window.addEventListener("pointercancel", mt, !0), window.addEventListener("keydown", Wt, !0), window.addEventListener("blur", ee), a.addEventListener("lostpointercapture", It);
    });
  }
  const Ua = (Dd = window.matchMedia) == null ? void 0 : Dd.call(window, "(max-width: 620px)");
  function Do() {
    var a;
    return !!((a = window.matchMedia) != null && a.call(window, "(max-width: 620px)").matches);
  }
  const Ur = (a) => a.charAt(0).toUpperCase() + a.slice(1), kn = (a) => a.kind === "rest" ? "rest" : a.kind === "video" ? "video" : "movement";
  let so = null, Ge = null;
  function Fn(a, s, d, m) {
    wa(), i("sheetTitle").textContent = a;
    const S = i("sheetBody");
    S.innerHTML = "", S.appendChild(s), so = d || null, i("sheet").setAttribute("aria-hidden", "false"), i("sheetScrim").classList.add("open"), i("sheet").classList.add("open"), setTimeout(() => {
      if (!i("sheet").classList.contains("open") || !S.contains(s)) return;
      const B = m ? S.querySelector("input[data-f=url],input[data-f=name]") : S.querySelector("button,input,select");
      B == null || B.focus({ preventScroll: !0 });
    }, We() ? 0 : 360);
  }
  function wa() {
    const a = i("sheet");
    if (!a.classList.contains("open")) return;
    a.classList.remove("open"), i("sheetScrim").classList.remove("open"), a.setAttribute("aria-hidden", "true"), a.contains(n.activeElement) && n.activeElement.blur();
    const s = so;
    so = null, s == null || s(), setTimeout(ha, 0);
  }
  i("sheetScrim").addEventListener("click", wa), i("sheet").addEventListener("keydown", (a) => {
    a.key === "Escape" && (a.preventDefault(), wa());
  });
  function Ri(a, s) {
    const d = ai(a, s.indexOf(a), {
      sheet: !0,
      isNew: !1,
      onSaved() {
        wa(), qe(), Be(Ur(kn(a)) + " updated");
      },
      onCancel: wa,
      onHide() {
        a.hidden = !a.hidden, wa(), qe(), Be((a.hidden ? "Hidden: " : "Showing: ") + a.name);
      },
      onRemove() {
        wa();
        const m = s.indexOf(a);
        m < 0 || (s.splice(m, 1), qe(), Be("Removed " + a.name, { label: "Undo", run: () => {
          s.splice(Math.min(m, s.length), 0, a), qe();
        } }));
      }
    });
    Fn("Edit " + kn(a), d, null, !1);
  }
  function Bo() {
    const a = document.createElement("div");
    a.className = "sheetChoices", [["movement", "activity", "Movement", "Name it, then drag it into place"], ["rest", "pause", "Rest", "A pause between movements"], ["video", "play", "Video", "Paste a YouTube link"]].forEach(([s, d, m, S]) => {
      const B = document.createElement("button");
      B.type = "button", B.className = "sheetChoice", B.innerHTML = '<span class="timeIcon" aria-hidden="true">' + Pa(d) + "</span><span><strong>" + m + "</strong><small>" + S + "</small></span>", B.addEventListener("click", () => Yr(s)), a.appendChild(B);
    }), Fn("Add to the move", a, null, !1);
  }
  function Yr(a) {
    Ge && lo();
    const s = Ds(a, i("strengthList")), d = ai(s, -1, {
      sheet: !0,
      isNew: !0,
      onSaved() {
        wa(), ml(s, a);
      },
      onCancel: wa
    });
    Fn("New " + kn(s), d, null, !0);
  }
  const xa = i("workoutModal").querySelector(".modalStatic"), Ro = { parent: xa.parentNode, next: xa.nextSibling };
  function Kn() {
    const a = document.createElement("div");
    a.className = "sheetSetup", a.appendChild(xa);
    const s = document.createElement("button");
    s.type = "button", s.className = "primary sheetDone", s.textContent = "Done", s.addEventListener("click", wa), a.appendChild(s), Fn("Setup", a, () => {
      Ro.parent.insertBefore(xa, Ro.next), ii();
    }, !1);
  }
  function ii() {
    var s, d;
    const a = i("setupSummaryName");
    a && (a.textContent = (((s = i("workoutNameInput")) == null ? void 0 : s.value) || "").trim() || ((d = ue[Me]) == null ? void 0 : d.name) || "Move", i("setupSummaryMeta").textContent = Nn.textContent);
  }
  i("setupSummary").addEventListener("click", Kn), i("addFab").addEventListener("click", Bo);
  function Po() {
    const a = i("strengthList");
    return oi(a) || a.closest(".exerciseScroller");
  }
  function dr() {
    const a = i("strengthList").getBoundingClientRect(), s = (Po() || i("strengthList")).getBoundingClientRect(), d = (Ge == null ? void 0 : Ge.ghost.offsetHeight) || 64;
    return { left: a.left, top: Math.max(s.top + 12, Math.min(s.bottom - d - 96, s.top + s.height * 0.55 - d / 2)), width: a.width, height: d };
  }
  function ml(a, s) {
    var Y;
    const d = dn(s, [a.name || aa[s][0], "Drag into place"]);
    d.classList.add("overList", "hovering"), d.setAttribute("aria-label", (a.name || "New step") + ". Drag it into place in the list, or add it at the end.");
    const m = document.createElement("span");
    m.className = "addGhostActions", m.innerHTML = '<button class="hideBtn" type="button" data-a="end">Add at end</button><button class="hideBtn ghostDiscard" type="button" data-a="discard" aria-label="Discard ' + ne(a.name) + '">✕</button>', d.appendChild(m), Ge = { item: a, type: s, ghost: d };
    const S = ((Y = n.querySelector(".moveList .moveRow:not(.editing)")) == null ? void 0 : Y.offsetHeight) || 64;
    d.style.width = i("strengthList").getBoundingClientRect().width + "px", d.style.height = S + "px";
    const B = dr(), O = Xa.querySelector(".modal").getBoundingClientRect().bottom;
    d.style.transform = "translate(" + B.left + "px," + O + "px)", d.getBoundingClientRect(), We() || (d.classList.add("rising"), setTimeout(() => d.classList.remove("rising"), 650)), d.style.transform = "translate(" + B.left + "px," + B.top + "px)", m.querySelector("[data-a=end]").addEventListener("click", lo), m.querySelector("[data-a=discard]").addEventListener("click", Rs), d.addEventListener("pointerdown", cr);
  }
  function cr(a) {
    if (!Ge || a.target.closest("button") || a.button !== void 0 && a.button !== 0) return;
    a.preventDefault();
    const { item: s, ghost: d } = Ge, m = a.pointerId;
    try {
      d.setPointerCapture(m);
    } catch {
    }
    d.classList.remove("hovering", "rising"), d.classList.add("held");
    const S = d.getBoundingClientRect(), B = Po(), O = _o({
      ghost: d,
      origin: { left: S.left, top: S.top, width: S.width, height: S.height },
      sx: a.clientX,
      sy: a.clientY,
      scroller: B,
      column: i("strengthList").closest(".exerciseScroller,.createFlow") || B,
      rowLook: !0,
      home: dr,
      onDrop: (Ht, Dt, we) => {
        Ge = null, Se(d), Zr(s, Ht, Dt, we);
      },
      onReturn: () => {
        d.classList.remove("held"), d.classList.add("hovering");
      }
    });
    let Y = !1;
    const wt = (Ht) => {
      if (Ht.pointerId === m) {
        if (Ht.pointerType === "mouse" && Ht.buttons === 0) {
          Wt(!1);
          return;
        }
        O.move(Ht.clientX, Ht.clientY);
      }
    }, Mt = (Ht) => {
      Ht.pointerId === m && Wt(!1);
    }, bt = (Ht) => {
      Ht.pointerId === m && Wt(!0);
    }, mt = () => Wt(!1), It = () => Wt(!0), ee = (Ht) => {
      Ht.key === "Escape" && (Ht.preventDefault(), Wt(!0));
    };
    function Wt(Ht) {
      Y || (Y = !0, window.removeEventListener("pointermove", wt, !0), window.removeEventListener("pointerup", Mt, !0), window.removeEventListener("pointercancel", bt, !0), window.removeEventListener("keydown", ee, !0), window.removeEventListener("blur", It), d.removeEventListener("lostpointercapture", mt), O.drop(Ht));
    }
    window.addEventListener("pointermove", wt, !0), window.addEventListener("pointerup", Mt, !0), window.addEventListener("pointercancel", bt, !0), window.addEventListener("keydown", ee, !0), window.addEventListener("blur", It), d.addEventListener("lostpointercapture", mt);
  }
  function Zr(a, s, d, m) {
    const S = _i(s);
    a.kind !== "rest" && a.kind !== "video" && (a.kind = S.kind, S.group && (!a.group || a.group === "Movement") && (a.group = S.group)), S.arr.splice(Math.max(0, Math.min(d, S.arr.length)), 0, a), Ao(s.closest(".exerciseScroller,.createStepSlot") || s, () => qe()), Eo(s.querySelector('.moveRow[data-id="' + a.id + '"]'), m), Be(Ur(kn(a)) + " added");
  }
  function lo() {
    var m;
    if (!Ge) return;
    const { item: a, ghost: s } = Ge;
    Ge = null, Se(s);
    const d = i("strengthList");
    Zr(a, d, _i(d).arr.length, 0), (m = d.querySelector('.moveRow[data-id="' + a.id + '"]')) == null || m.scrollIntoView({ block: "nearest", behavior: We() ? "auto" : "smooth" });
  }
  function Rs() {
    if (!Ge) return;
    const a = Ge.ghost;
    Ge = null, Se(a), Be("Discarded");
  }
  function Pi() {
    Ge && (Ge.ghost.remove(), Ge = null);
  }
  window.addEventListener("resize", () => {
    if (Ge != null && Ge.ghost.classList.contains("hovering")) {
      const a = dr();
      Ge.ghost.style.width = a.width + "px", Ge.ghost.style.transform = "translate(" + a.left + "px," + a.top + "px)";
    }
  }), (Bd = Ua == null ? void 0 : Ua.addEventListener) == null || Bd.call(Ua, "change", () => {
    wa(), Ge && !Do() && lo(), sr();
  });
  {
    const a = i("workoutModal").querySelector(".modal");
    a.addEventListener("scroll", () => {
      (a.scrollTop || a.scrollLeft) && (a.scrollTop = 0, a.scrollLeft = 0);
    });
  }
  function ha() {
    const a = i("workoutModal"), s = window.visualViewport;
    if (!a.classList.contains("open") || !Do()) {
      Kr();
      return;
    }
    const d = s ? s.offsetTop : 0, m = s ? s.offsetLeft : 0, S = s ? s.width : window.innerWidth, B = s ? s.height : window.innerHeight;
    Object.assign(a.style, { right: "auto", bottom: "auto", width: S + "px", height: B + "px", top: d + "px", left: m + "px" });
    const O = a.getBoundingClientRect();
    Math.abs(O.top - d) > 0.5 && (a.style.top = 2 * d - O.top + "px"), Math.abs(O.left - m) > 0.5 && (a.style.left = 2 * m - O.left + "px");
  }
  function Kr() {
    ["top", "left", "right", "bottom", "width", "height"].forEach((a) => i("workoutModal").style.removeProperty(a));
  }
  (Rd = window.visualViewport) == null || Rd.addEventListener("resize", ha), (Pd = window.visualViewport) == null || Pd.addEventListener("scroll", ha), window.addEventListener("resize", ha), window.addEventListener("scroll", ha, { passive: !0 }), window.addEventListener("orientationchange", () => setTimeout(ha, 250));
  function No() {
    Xt.length > 0;
    const a = i("addMovementBtn"), s = i("addRestBtn");
    a && (a.innerHTML = yn + "<span>Add movement</span>"), s && (s.innerHTML = yn + "<span>Add rest</span>");
    const d = i("addVideoBtn");
    d && (d.innerHTML = yn + "<span>Add video</span>");
  }
  function ri() {
    const a = i("useGlobalTiming").checked, s = i("addMovementDuration"), d = i("addMovementUnit");
    s.disabled = a, d.disabled = a, s.parentElement.style.opacity = a ? ".38" : "1", i("globalTimingValue").textContent = "Use global timing · " + Ca(q.value);
    const m = i("useGlobalRestTiming").checked, S = i("addRestDuration"), B = i("addRestUnit");
    S.disabled = m, B.disabled = m, S.parentElement.style.opacity = m ? ".38" : "1", i("globalRestTimingValue").textContent = "Use global timing · " + Ca(D.value);
  }
  let Ya = "movement";
  function Ni(a) {
    Ya = a;
    const s = i("movementFields"), d = i("restFields");
    s.hidden = a !== "movement", d.hidden = a !== "rest", i("movementCreatorHeading").textContent = "Add movement", i("movementCreator").setAttribute("aria-label", "Create movement"), ri();
  }
  function Hi() {
    ue[Me];
    const a = Ye ? !0 : i("useGlobalTiming").checked, s = a ? Number(q.value) : ro(
      i("addMovementDuration").value,
      i("addMovementUnit").value
    ), d = Ye ? !0 : i("useGlobalRestTiming").checked, m = d ? Number(D.value) : ro(
      i("addRestDuration").value,
      i("addRestUnit").value
    );
    if (Ya === "rest") {
      const S = i("addRestTitle").value.trim() || "Rest", B = i("addRestGroup").value.trim() || "Rest";
      Xt.push({
        id: "rest-" + Date.now(),
        name: S,
        group: B,
        kind: "rest",
        hidden: !1,
        useGlobalTiming: d,
        duration: Math.max(5, m || Number(D.value))
      }), qe(), i("movementCreator").hidden = !0, i("addRestTitle").value = "Rest", i("addRestGroup").value = "Rest", Be("Rest added"), Ye && (at("movements"), E());
    } else {
      const S = i("addMovementInput").value.trim();
      if (!S) return;
      const B = i("addMovementGroup").value.trim() || "Movement";
      Xt.push({
        id: "movement-" + Date.now(),
        name: S,
        group: B,
        kind: "work",
        hidden: !1,
        useGlobalTiming: a,
        duration: Math.max(5, s || Number(q.value))
      }), i("addMovementInput").value = "", i("addMovementGroup").value = "", qe(), i("movementCreator").hidden = !0, Be("Movement added"), Ye && (at("movements"), E());
    }
    No();
  }
  let cn = null;
  function Be(a, s) {
    const d = i("toast");
    d.innerHTML = "";
    const m = document.createElement("span");
    if (m.textContent = a, d.appendChild(m), s) {
      const S = document.createElement("button");
      S.type = "button", S.className = "toastAction", S.textContent = s.label, S.addEventListener("click", () => {
        s.run(), d.classList.remove("show", "withAction"), clearTimeout(cn);
      }), d.appendChild(S);
    }
    d.classList.toggle("withAction", !!s), d.classList.add("show"), clearTimeout(cn), cn = setTimeout(() => d.classList.remove("show", "withAction"), s ? 5e3 : 2200);
  }
  const Ii = ["Terrible", "Poor", "Meh", "Okay", "Good", "Great"], Ps = ["#6E63A8", "#5878A8", "#6F8B8A", "#5F9B72", "#D5A53E", "#D56B54"];
  function $r(a) {
    return Math.max(0, Math.min(5, Math.floor(Number(a) / 100 * 6)));
  }
  function Za(a, s) {
    return Ii[$r(s)];
  }
  function Ka(a) {
    return Ps[$r(a)];
  }
  function Ve(a) {
    return a.getFullYear() + "-" + String(a.getMonth() + 1).padStart(2, "0") + "-" + String(a.getDate()).padStart(2, "0");
  }
  function co() {
    return { morning: me().morningTime || "08:00", evening: me().eveningTime || "19:00" };
  }
  function $a(a) {
    const [s, d] = String(a).split(":").map(Number);
    return (s || 0) * 60 + (d || 0);
  }
  function Ho(a) {
    const s = co();
    return a.getHours() * 60 + a.getMinutes() >= $a(s.evening) ? "evening" : "morning";
  }
  function f(a, s) {
    return Ut.checkins.find((d) => d.date === a && d.slot === s);
  }
  function b(a) {
    return !!(a && a.mood != null && a.energy != null);
  }
  function y() {
    const a = /* @__PURE__ */ new Date(), s = Ve(a), d = Ho(a), m = co(), S = a.getHours() * 60 + a.getMinutes();
    return d === "morning" && S < $a(m.morning) || b(f(s, d)) ? null : d;
  }
  const C = i("checkinModal"), H = i("checkinTab"), U = i("checkinBadge"), K = { mood: { input: i("moodInput"), fill: i("moodFill") }, energy: { input: i("energyLevelInput"), fill: i("energyLevelFill") } };
  function ft(a) {
    const { input: s, fill: d } = K[a];
    d.style.width = s.value + "%", s.setAttribute("aria-valuetext", Za(a, s.value));
  }
  Object.keys(K).forEach((a) => K[a].input.addEventListener("input", () => ft(a)));
  let Q = null;
  function vt() {
    const a = co(), s = /* @__PURE__ */ new Date(), d = s.getHours() * 60 + s.getMinutes();
    return d < $a(a.morning) ? "Next check-in at " + a.morning : d < $a(a.evening) ? "Next check-in at " + a.evening : "Next check-in tomorrow at " + a.morning;
  }
  function xt() {
    const a = co(), s = /* @__PURE__ */ new Date(), d = s.getHours() * 60 + s.getMinutes(), m = (S, B) => {
      const [O, Y] = S.split(":").map(Number);
      return new Date(s.getFullYear(), s.getMonth(), s.getDate() + (B ? 1 : 0), O, Y);
    };
    return d < $a(a.morning) ? { date: m(a.morning), time: a.morning } : d < $a(a.evening) ? { date: m(a.evening), time: a.evening } : { date: m(a.morning, !0), time: a.morning };
  }
  let At = null, Jt = null;
  function jt() {
    if (y()) {
      Qt(), Ee();
      return;
    }
    const a = xt(), s = Math.max(0, Math.round((a.date - Date.now()) / 1e3)), d = Math.floor(s / 3600), m = Math.floor(s % 3600 / 60), S = s % 60;
    i("peekCountdown").textContent = d + ":" + String(m).padStart(2, "0") + ":" + String(S).padStart(2, "0"), i("peekAt").textContent = "Available at " + a.time;
  }
  function _t() {
    jt(), H.classList.add("peek"), clearInterval(Jt), Jt = setInterval(jt, 1e3), clearTimeout(At), At = setTimeout(Qt, 6e3);
  }
  function Qt() {
    H.classList.remove("peek"), clearInterval(Jt), clearTimeout(At);
  }
  function Yt() {
    const a = y();
    if (!a) {
      H.classList.contains("peek") ? Qt() : _t();
      return;
    }
    Q = { date: Ve(/* @__PURE__ */ new Date()), slot: a };
    const d = f(Q.date, a), m = Ut.checkins.find((S) => b(S));
    Object.keys(K).forEach((S) => {
      K[S].input.value = (d == null ? void 0 : d[S]) ?? (m == null ? void 0 : m[S]) ?? 50, ft(S);
    }), i("checkinTitle").textContent = a === "morning" ? "Morning check-in" : "Evening check-in", C.classList.add("open"), C.setAttribute("aria-hidden", "false"), requestAnimationFrame(() => K.mood.input.focus());
  }
  function Et() {
    C.classList.remove("open"), C.setAttribute("aria-hidden", "true"), Q && (oe = Q.date + "-" + Q.slot);
    try {
      localStorage.setItem("move-assistant-dismissed", oe);
    } catch {
    }
    Q = null, Ee();
  }
  function he() {
    if (!Q) return;
    if (b(f(Q.date, Q.slot))) {
      Et();
      return;
    }
    const { date: a, slot: s } = Q;
    let d = f(a, s);
    d || (d = { date: a, slot: s }, Ut.checkins.unshift(d), Ut.checkins = Ut.checkins.slice(0, 2e3)), d.mood = Number(K.mood.input.value), d.energy = Number(K.energy.input.value), d.scale = 100, d.at = (/* @__PURE__ */ new Date()).toISOString(), wn(), l.fire("checkin", { slot: s, mood: d.mood, energy: d.energy, mood_label: Za("mood", d.mood), energy_label: Za("energy", d.energy) }), Be((s === "morning" ? "Morning" : "Evening") + " check-in saved"), Et(), $e(), ta(), wo(), Cn();
  }
  let oe = "";
  try {
    oe = localStorage.getItem("move-assistant-dismissed") || "";
  } catch {
  }
  function Ee() {
    const a = y();
    U.hidden = !a, H.hidden = !a, a || Qt(), H.classList.toggle("due", !!a), H.setAttribute("aria-label", a ? (a === "morning" ? "Morning" : "Evening") + " check-in is due" : vt()), H.title = a ? "Check in now" : vt();
  }
  function Nt() {
    Ee();
    const a = y();
    !a || C.classList.contains("open") || me().checkinAutoOpen !== !1 && (i("app").classList.contains("house") || !Ot.home.classList.contains("active") || Xa.classList.contains("open") || oe !== Ve(/* @__PURE__ */ new Date()) + "-" + a && Yt());
  }
  H.addEventListener("click", Yt), i("checkinLater").addEventListener("click", Et), i("checkinSave").addEventListener("click", he), C.addEventListener("click", (a) => {
    a.target === C && Et();
  }), C.addEventListener("keydown", (a) => {
    a.key === "Escape" && (a.preventDefault(), Et());
  }), setInterval(Nt, 3e4);
  function $e() {
    const a = Ve(/* @__PURE__ */ new Date()), s = (d) => Ut.checkins.find((m) => m.date === a && m[d] != null);
    [["mood", "moodMeta"], ["energy", "energyLevelMeta"]].forEach(([d, m]) => {
      const S = s(d);
      i(m).textContent = S ? Za(d, S[d]) : "—";
    });
  }
  function ta() {
    const a = i("feelCard");
    if (!a) return;
    const s = /* @__PURE__ */ new Date(), d = new Date(s.getFullYear(), s.getMonth(), s.getDate() - (s.getDay() + 6) % 7), m = [...Array(7)].map((Mt, bt) => {
      const mt = new Date(d.getFullYear(), d.getMonth(), d.getDate() + bt), It = Ve(mt), ee = Ut.checkins.filter((Ht) => Ht.date === It), Wt = (Ht) => {
        const Dt = ee.map((we) => we[Ht]).filter((we) => we != null);
        return Dt.length ? Dt.reduce((we, xe) => we + xe, 0) / Dt.length : null;
      };
      return { d: mt, key: It, mood: Wt("mood"), energy: Wt("energy"), count: ee.filter(b).length, future: mt > s && It !== Ve(s) };
    }), S = (Mt) => {
      const bt = m.map((mt) => mt[Mt]).filter((mt) => mt != null);
      return bt.length ? bt.reduce((mt, It) => mt + It, 0) / bt.length : null;
    }, B = S("mood"), O = S("energy"), Y = (Mt, bt) => '<div class="feelMeter"><div class="feelMeterTop"><span>' + Mt + "</span><span>" + (bt == null ? "—" : ne(Za("", bt))) + '</span></div><div class="feelTrack"><span style="width:' + (bt == null ? 0 : Math.max(4, bt)) + "%;background:" + (bt == null ? "transparent" : Ka(bt)) + '"></span></div></div>', wt = m.filter((Mt) => Mt.mood != null && Mt.energy != null).sort((Mt, bt) => bt.mood + bt.energy - (Mt.mood + Mt.energy))[0];
    a.innerHTML = '<div class="feelTop"><div class="feelSummary"><div class="feelHeadline">' + (B == null ? "No check-ins yet" : ne(Za("", (B + O) / 2))) + '</div><div class="weekCopy">' + (B == null ? "Your first check-in will appear here." : "on average this week" + (wt ? " · best day " + ne(new Intl.DateTimeFormat(void 0, { weekday: "long" }).format(wt.d)) : "")) + '</div></div></div><div class="feelDays">' + m.map(
      (Mt) => '<div class="weekChip feelDay' + (Mt.future ? " future" : "") + (Mt.key === Ve(s) ? " today" : "") + '"><div class="weekChipTop"><strong>' + ne(new Intl.DateTimeFormat(void 0, { weekday: "short" }).format(Mt.d)) + "</strong>" + (Mt.count >= 2 ? '<span class="weekTick">' + Pa("check") + "</span>" : '<span class="feelDots">' + "●".repeat(Mt.count) + "</span>") + "</div>" + Y("Mood", Mt.mood) + Y("Energy", Mt.energy) + "</div>"
    ).join("") + "</div>";
  }
  const Wa = i("upcomingCountSetting");
  Wa.addEventListener("change", () => {
    xn = Wa.value === "all" ? "all" : Number(Wa.value), ui();
  });
  const Na = i("tempoRevealBtn"), pr = i("tempoExperiment"), pn = i("tempoQuad"), $n = i("tempoDot"), Le = i("tempoEstimate"), Io = i("tempoReadout");
  let Mn = { x: 0.5, y: 0.5 }, po = !1, uo = { total: 20, work: 45, rest: 15 };
  function si(a, s, d, m) {
    const S = Math.max(s, Math.min(d, a));
    return Math.round((S - s) / m) * m + s;
  }
  function ur(a, s) {
    const d = (a - 0.5) * 2, m = (s - 0.5) * 2, S = si(
      uo.total + d * 5 + m * 8,
      Number(R.min),
      Number(R.max),
      Number(R.step)
    ), B = si(
      uo.work + d * 10 + m * 8,
      Number(q.min),
      Number(q.max),
      Number(q.step)
    ), O = si(
      uo.rest + d * 6 + m * 6,
      Number(D.min),
      Number(D.max),
      Number(D.step)
    );
    return R.value = S, q.value = B, D.value = O, ut.textContent = B + " sec", gt.textContent = O + " sec", ir(), { total: S, work: B, rest: O };
  }
  function La(a, s) {
    const d = a < 0.34 ? "Low" : a > 0.66 ? "Hard" : "Medium", m = s < 0.34 ? "Fast" : s > 0.66 ? "Slow" : "Balanced", S = ur(a, s);
    Io.textContent = d + " + " + m, Le.textContent = S.total + " min", pn.setAttribute("aria-valuetext", d + " and " + m + ", estimated " + S.total + " minutes");
  }
  function gl(a) {
    const s = pn.getBoundingClientRect(), d = Math.max(0, Math.min(1, (a.clientX - s.left) / s.width)), m = Math.max(0, Math.min(1, (a.clientY - s.top) / s.height));
    Mn = { x: d, y: m }, $n.style.left = d * 100 + "%", $n.style.top = m * 100 + "%", La(d, m);
  }
  Na.addEventListener("click", () => {
    const a = pr.hidden;
    pr.hidden = !a, Na.setAttribute("aria-expanded", a ? "true" : "false"), Na.textContent = a ? "Now close this" : "Don’t try this!", a && (uo = {
      total: Number(R.value),
      work: Number(q.value),
      rest: Number(D.value)
    }, Mn = { x: 0.5, y: 0.5 }, $n.style.left = "50%", $n.style.top = "50%", La(Mn.x, Mn.y));
  }), n.querySelectorAll("[data-feedback-rating]").forEach((a) => a.addEventListener("click", () => {
    Number(a.dataset.feedbackRating), n.querySelectorAll("[data-feedback-rating]").forEach((s) => s.classList.toggle("selected", s === a));
  }));
  const Xr = i("testingFeedbackForm"), vl = i("testingFeedbackThanks"), td = i("testingFeedbackAgain");
  Xr.addEventListener("submit", (a) => {
    a.preventDefault(), Xr.hidden = !0, vl.hidden = !1, Be("Feedback captured for prototype");
  }), td.addEventListener("click", (a) => {
    a.preventDefault(), Xr.reset(), n.querySelectorAll("[data-feedback-rating]").forEach((s) => s.classList.remove("selected")), vl.hidden = !0, Xr.hidden = !1;
  }), pn.addEventListener("pointerdown", (a) => {
    var s;
    po = !0, gl(a);
    try {
      (s = pn.setPointerCapture) == null || s.call(pn, a.pointerId);
    } catch {
    }
  }), pn.addEventListener("pointermove", (a) => {
    po && gl(a);
  }), pn.addEventListener("pointerup", (a) => {
    po && (po = !1, gl(a), qe());
  }), pn.addEventListener("pointercancel", () => po = !1), pn.addEventListener("keydown", (a) => {
    let { x: s, y: d } = Mn, m = !0;
    a.key === "ArrowLeft" ? s -= 0.05 : a.key === "ArrowRight" ? s += 0.05 : a.key === "ArrowUp" ? d -= 0.05 : a.key === "ArrowDown" ? d += 0.05 : m = !1, m && (a.preventDefault(), s = Math.max(0, Math.min(1, s)), d = Math.max(0, Math.min(1, d)), Mn = { x: s, y: d }, $n.style.left = s * 100 + "%", $n.style.top = d * 100 + "%", La(s, d), qe());
  });
  const Xa = i("workoutModal");
  let fr = null;
  function hr(a) {
    return a.map((s) => ({ ...s }));
  }
  function Jr() {
    const a = ue[Me];
    return {
      key: Me,
      profile: a ? JSON.parse(JSON.stringify(a)) : null,
      warmup: hr(Qe),
      strength: hr(Xt),
      cooldown: hr(Ga),
      total: Number(R.value),
      work: Number(q.value),
      rest: Number(D.value),
      rounds: Number(ae.value) || 1
    };
  }
  function Ns(a = !1) {
    Ye = !!a, fa = null, ia = null, wa(), Pi(), fr = Jr(), i("moveEditorTitle").textContent = Ye ? "Create new move" : "Edit move", i("moveEditorSubtitle").textContent = "Build the sequence first, then set timing, then finish the move.", i("moveEditorSubtitle").hidden = !Ye, i("warmupRow").hidden = Ye, i("deleteMoveOpen").hidden = Ye;
    const s = i("createMoveOptions");
    s.hidden = !Ye;
    {
      const d = ue[Me];
      i("includeWarmupPreset").checked = !!(d != null && d.includeWarmup), i("includeCooldownPreset").checked = !!(d != null && d.includeCooldown);
    }
    if (wl(), Ye) {
      i("useGlobalTiming").checked = !0, i("useGlobalRestTiming").checked = !0;
      const d = ue[Me];
      Li((d == null ? void 0 : d.preset) || "movement", !1);
    }
    i("movementCreator").hidden = !0, Ni("movement"), No(), ri(), pr.hidden = !0, Na.setAttribute("aria-expanded", "false"), Na.textContent = "Don’t try this!", Xa.classList.toggle("createMode", Ye), Xa.querySelector(".modal").classList.toggle("createMode", Ye), Xa.classList.add("open"), Xa.setAttribute("aria-hidden", "false"), ha(), Ye && Ct();
  }
  function bl() {
    const a = ue[Me];
    return a != null && a.customSequence ? !!a.includeWarmup : !(a != null && a.warmupOff);
  }
  function wl() {
    const a = bl(), s = i("warmupSwitch");
    s.classList.toggle("on", a), s.setAttribute("aria-checked", String(a));
  }
  i("warmupSwitch").addEventListener("click", () => {
    const a = ue[Me];
    a && (a.customSequence ? (i("includeWarmupPreset").checked = !a.includeWarmup, rr()) : (a.warmupOff = !a.warmupOff, qe()), wl());
  });
  function mr() {
    wa(), Pi(), Kr(), ia = null, fa = null, Xa.classList.contains("createMode") && st(), Xa.classList.remove("createMode"), Xa.querySelector(".modal").classList.remove("createMode"), Xa.classList.remove("open"), Xa.setAttribute("aria-hidden", "true");
  }
  function ed() {
    if (!fr) return;
    const a = fr;
    a.profile && (ue[a.key] = JSON.parse(JSON.stringify(a.profile))), Me = a.key, Qe = hr(a.warmup), Xt = hr(a.strength), Ga = hr(a.cooldown), R.value = a.total, q.value = a.work, D.value = a.rest, ae.value = a.rounds || 1;
    const s = ue[Me];
    if (s) {
      n.querySelectorAll(".workoutPanel[data-workout]").forEach((m) => m.classList.toggle("active", m.dataset.workout === Me));
      const d = n.querySelector(".workoutPanel.active");
      if (d) {
        const m = d.querySelector(".workoutName");
        m && (m.textContent = s.name);
        const S = d.querySelector(".panelCollapsedText");
        S && (S.textContent = s.name);
        const B = d.querySelector(".sourceTag");
        B && (B.textContent = s.source);
      }
      g.value = s.name;
    }
    qe();
  }
  i("cancelWorkoutEdit").addEventListener("click", () => {
    if (Ye) {
      const a = Me;
      delete ue[a], Ye = !1, no = null, ze(Ut.order.find((s) => ue[s]) || Object.keys(ue)[0]);
    } else
      ed();
    mr();
  }), i("saveWorkoutEdit").addEventListener("click", () => {
    wa(), Ge && lo();
    const a = ue[Me], s = g.value.trim() || "New move";
    if (a && (a.name = s), Ei(), fa = null, qe(), Ye && a)
      Hn(Me, a), n.querySelectorAll(".workoutPanel[data-workout]").forEach((d) => d.classList.toggle("active", d.dataset.workout === Me)), Ye = !1, no = null, Ut.order.includes(Me) || Ut.order.push(Me), Be("Move created");
    else {
      const d = n.querySelector(".workoutPanel.active");
      if (d) {
        const m = d.querySelector(".workoutName");
        m && (m.textContent = s);
        const S = d.querySelector(".panelCollapsedText");
        S && (S.textContent = s);
      }
      Be("Move saved");
    }
    fr = null, mr(), wn();
  }), Xa.addEventListener("click", (a) => {
    if (a.target === Xa) {
      if (Ye) {
        const s = Me;
        delete ue[s], Ye = !1, no = null, ze(Ut.order.find((d) => ue[d]) || Object.keys(ue)[0]);
      } else
        ed();
      mr();
    }
  }), Bi(i("addMovementBtn"), "movement"), Bi(i("addRestBtn"), "rest"), Bi(i("addVideoBtn"), "video"), i("closeMovementCreator").addEventListener("click", () => {
    i("movementCreator").hidden = !0;
  }), i("useGlobalTiming").addEventListener("change", ri), i("useGlobalRestTiming").addEventListener("change", ri), n.querySelectorAll(".createPresetBtn").forEach((a) => a.addEventListener("click", () => {
    Li(a.dataset.movePreset, !0), qe();
  })), i("includeWarmupPreset").addEventListener("change", rr), i("includeCooldownPreset").addEventListener("change", rr), i("includeWarmupPreset").addEventListener("change", E), i("includeCooldownPreset").addEventListener("change", E), g.addEventListener("input", E), g.addEventListener("input", ii), i("confirmAddMovement").addEventListener("click", Hi), i("confirmAddRest").addEventListener("click", Hi), i("addMovementInput").addEventListener("keydown", (a) => {
    a.key === "Enter" && Hi();
  });
  const Qr = i("countdown"), xl = i("countNum"), Fo = i("countdownPixelCanvas");
  let ts = null, Fi = "appear";
  class ad {
    constructor(s, d, m, S, B, O, Y) {
      this.width = s.width, this.height = s.height, this.ctx = d, this.x = m, this.y = S, this.color = B, this.speed = (Math.random() * 0.8 + 0.1) * O, this.size = 0, this.sizeStep = Math.random() * 0.4, this.minSize = 0.5, this.maxSizeInteger = 2, this.maxSize = Math.random() * (this.maxSizeInteger - this.minSize) + this.minSize, this.delay = Y, this.counter = 0, this.counterStep = Math.random() * 4 + (this.width + this.height) * 0.01, this.isIdle = !1, this.isReverse = !1, this.isShimmer = !1;
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
  let yl = [], nd = 1, Oi = 1;
  function li() {
    const a = parseFloat(getComputedStyle(i("app")).zoom);
    return Number.isFinite(a) && a > 0 ? a : 1;
  }
  function od() {
    var Mt;
    if (!Fo) return;
    const a = li(), s = Math.max(1, window.innerWidth / a), d = Math.max(1, window.innerHeight / a);
    nd = s, Oi = d;
    const m = Math.min(window.devicePixelRatio || 1, 2);
    Fo.width = Math.floor(s * m), Fo.height = Math.floor(d * m), Fo.style.width = s + "px", Fo.style.height = d + "px";
    const S = Fo.getContext("2d");
    S.setTransform(m, 0, 0, m, 0, 0);
    const B = ["#f2fbff", "#d4effc", "#a9e0fa", "#6cc8f6"], O = 12, Y = (Mt = window.matchMedia) == null ? void 0 : Mt.call(window, "(prefers-reduced-motion: reduce)").matches, wt = Y ? 0 : 0.055;
    yl = [];
    for (let bt = 0; bt < s; bt += O)
      for (let mt = 0; mt < d; mt += O) {
        const It = bt - s / 2, ee = mt - d / 2, Wt = Math.sqrt(It * It + ee * ee), Ht = Y ? 0 : Math.random() * 75 + Wt * 0.05, Dt = new ad({ width: s, height: d }, S, bt, mt, B[Math.floor(Math.random() * B.length)], wt, Ht);
        Dt.maxSizeInteger = 4, Dt.maxSize = Math.random() * 3.2 + 0.8, Dt.sizeStep = 0.35 + Math.random() * 0.45, yl.push(Dt);
      }
  }
  function kl(a) {
    cancelAnimationFrame(ts), Fi = a;
    const s = Fo == null ? void 0 : Fo.getContext("2d");
    if (!s) return;
    function d() {
      s.clearRect(0, 0, nd, Oi);
      let m = !0;
      yl.forEach((S) => {
        S[Fi](), S.isIdle || (m = !1);
      }), Fi === "disappear" && m || (ts = requestAnimationFrame(d));
    }
    ts = requestAnimationFrame(d);
  }
  function es() {
    cancelAnimationFrame(ts), od(), kl("appear"), setTimeout(() => kl("disappear"), 560);
  }
  window.addEventListener("resize", () => {
    Qr.classList.contains("active") && es();
  });
  const gr = i("pixelTrailCanvas"), vr = gr.getContext("2d");
  let Oo = !0, br = 0.7, qi = 600, di = [], ci = null, fo = { x: 0, y: 0, ready: !1 };
  function Hs() {
    const a = u.getBoundingClientRect(), s = li(), d = Math.min(window.devicePixelRatio || 1, 2), m = Math.max(1, a.width / s), S = Math.max(1, a.height / s);
    gr.width = Math.max(1, Math.floor(m * d)), gr.height = Math.max(1, Math.floor(S * d)), gr.style.width = m + "px", gr.style.height = S + "px", vr.setTransform(d, 0, 0, d, 0, 0);
  }
  function id(a, s) {
    if (!Oo) return;
    const d = performance.now();
    fo.ready || (fo = { x: a, y: s, ready: !0 });
    const m = 7;
    for (let S = 1; S <= m; S++) {
      const B = S / m;
      di.push({
        x: fo.x + (a - fo.x) * B,
        y: fo.y + (s - fo.y) * B,
        born: d - (m - S) * 10
      });
    }
    fo = { x: a, y: s, ready: !0 };
  }
  function Is(a) {
    if (ci = null, !x) return;
    if (!Ot.workout.classList.contains("active")) {
      ci = requestAnimationFrame(Is);
      return;
    }
    const s = u.getBoundingClientRect(), d = li();
    vr.clearRect(0, 0, s.width / d, s.height / d), Oo && (di = di.filter((S) => a - S.born < qi), vr.fillStyle = i("app").classList.contains("light") ? "#03A9F4" : "#f4f4f4", di.forEach((S) => {
      const B = (a - S.born) / qi, O = (1 - B) * br, Y = Math.round(S.x / 14) * 14, wt = Math.round(S.y / 14) * 14;
      vr.globalAlpha = Math.max(0, O);
      const Mt = 2 + 5 * (1 - B) * br;
      vr.fillRect(Y - Mt / 2, wt - Mt / 2, Mt, Mt);
    }), vr.globalAlpha = 1), ci = requestAnimationFrame(Is);
  }
  u.addEventListener("pointermove", (a) => {
    const s = u.getBoundingClientRect(), d = li();
    id((a.clientX - s.left) / d, (a.clientY - s.top) / d);
  }), u.addEventListener("pointerleave", () => fo.ready = !1), new ResizeObserver(Hs).observe(u), Hs(), ci = requestAnimationFrame(Is);
  const qo = i("movementRippleCanvas"), pi = qo.getContext("2d");
  let Wi = !0, wr = null, rd = performance.now();
  function sd() {
    const a = qo.parentElement.getBoundingClientRect(), s = li(), d = Math.max(1, a.width / s), m = Math.max(1, a.height / s), S = Math.min(window.devicePixelRatio || 1, 2);
    qo.width = Math.max(1, Math.floor(d * S)), qo.height = Math.max(1, Math.floor(m * S)), qo.style.width = d + "px", qo.style.height = m + "px", pi.setTransform(S, 0, 0, S, 0, 0);
  }
  function xr() {
    var a;
    return Re || ((a = Kt[se]) == null ? void 0 : a.kind) === "rest";
  }
  function Ze() {
    const a = Kt[se];
    return xr() ? 2200 : a ? a.kind === "warmup" || a.kind === "cooldown" ? 2400 : 1350 : 1600;
  }
  function Fs(a) {
    if (wr = null, !x) return;
    if (!Ot.workout.classList.contains("active")) {
      wr = requestAnimationFrame(Fs);
      return;
    }
    const s = qo.parentElement.getBoundingClientRect(), d = li(), m = Math.max(1, s.width / d), S = Math.max(1, s.height / d);
    if (pi.clearRect(0, 0, m, S), Wi) {
      const B = Ze(), O = (a - rd) % B / B, Y = 15, wt = Math.max(8, Math.round(Y * S / Math.max(1, m))), Mt = m / (Y + 1), bt = S / (wt + 1), mt = m * 0.5, It = S * 0.52, ee = Math.hypot(mt, It), Ht = i("app").classList.contains("light") ? "34,34,34" : "244,244,244";
      for (let Dt = 1; Dt <= wt; Dt++)
        for (let we = 1; we <= Y; we++) {
          const xe = we * Mt, Gt = Dt * bt, ke = Math.hypot(xe - mt, Gt - It) / ee, Pe = xr(), de = Pe ? Math.exp(-Math.pow((ke - (O * 0.82 + 0.08) % 1 * 1.18) * 5.5, 2)) : 0, re = Math.exp(-Math.pow((ke - O * 1.25) * 7, 2)), ka = Pe ? de : re, Ba = Pe ? 0.5 + 0.5 * Math.sin(O * Math.PI * 2 - ke * 3) ** 2 : 0.35 + 0.65 * Math.sin(O * Math.PI * 2 - ke * 5) ** 2, Xe = Pe ? 1.4 + ka * 4.2 * Ba : 1.2 + ka * 5 * Ba;
          pi.beginPath(), pi.arc(xe, Gt, Xe, 0, Math.PI * 2), pi.fillStyle = `rgba(${Ht},${Pe ? 0.08 + ka * 0.48 : 0.05 + ka * 0.55})`, pi.fill();
        }
    }
    wr = requestAnimationFrame(Fs);
  }
  new ResizeObserver(sd).observe(qo.parentElement), sd(), wr = requestAnimationFrame(Fs);
  const as = i("exerciseTitle"), Wo = i("exerciseMeta"), Sn = i("stepLabel"), Ml = i("digits"), Sl = i("fill"), yr = i("progress"), Os = i("pause"), ld = i("nextName"), lc = i("nextMeta"), dc = i("nextIcon"), ns = i("skipNextSession");
  let Oa = null;
  function un(a) {
    for (let s = Math.max(0, a); s < Kt.length; s++)
      if (!Kt[s].sessionHidden) return s;
    return -1;
  }
  function cc() {
    const a = Kt[se];
    if (!a) return { name: "Complete", meta: "Move finished", icon: "check" };
    if (Re) {
      const m = un(se + 1), S = m >= 0 ? Kt[m] : null;
      return S ? { name: S.name, meta: Cl(S), icon: fn(S) } : { name: "Complete", meta: "Move finished", icon: "check" };
    }
    if (a.rest > 0) return { name: "Rest", meta: a.rest + " sec · " + (a.roundBreakAfter ? "round " + (a.round + 1) + " next" : "recovery"), icon: "pause" };
    const s = un(se + 1), d = s >= 0 ? Kt[s] : null;
    return d ? { name: d.name, meta: Cl(d), icon: fn(d) } : { name: "Complete", meta: "Move finished", icon: "check" };
  }
  function pc() {
    if (!Kt[se]) return Kt.length;
    const s = un(se + 1);
    return s < 0 ? Kt.length : s + 1;
  }
  function fn(a) {
    return a.kind === "video" ? "play" : "clock";
  }
  function Cl(a) {
    return a.kind === "video" ? "YouTube · " + io(a.duration) : a.group + " · " + a.duration + " sec";
  }
  function qs() {
    return Kt.length && Kt[Kt.length - 1].round || 1;
  }
  function Ja(a) {
    const s = Kt[a];
    if (!s) return "";
    const d = qs();
    if (d <= 1) return "Step " + (a + 1) + " of " + Kt.length;
    if (s.roundBreak) return "Round " + s.round + " of " + d + " · Rest";
    const m = Kt.filter((S) => S.round === s.round && !S.roundBreak).length;
    return "Round " + s.round + " of " + d + " · Step " + (s.roundIndex + 1) + " of " + m;
  }
  function Ae() {
    return yr.querySelector('[data-step="' + se + '"]');
  }
  function Qa() {
    Kt[se] && Number(yr.dataset.round) !== (Kt[se].round || 1) && Aa(), [...yr.children].forEach((a) => {
      const s = Number(a.dataset.step);
      a.classList.toggle("done", s < se), a.classList.toggle("active", s === se), a.classList.toggle("rewindable", s <= se), a.disabled = s > se, s === se && a.style.setProperty("--segment-progress", "0%");
    }), Kt[se] && (Sn.textContent = Ja(se), ji());
  }
  function Tl(a) {
    const s = Kt.indexOf(a);
    s < 0 || s <= se || (a.sessionHidden = !a.sessionHidden, ho(), Be((a.sessionHidden ? "Hidden " : "Included ") + a.name + " for this session"));
  }
  function ui() {
    const a = i("upcomingList");
    if (!a) return;
    a.innerHTML = "";
    const s = pc(), d = Kt.slice(s);
    (xn === "all" ? d : d.slice(0, Math.max(1, Number(xn) || 1))).forEach((S) => {
      const B = document.createElement("section");
      B.className = "upcomingCard" + (S.sessionHidden ? " sessionHidden" : "") + (Pl(S) ? " noMeta" : ""), B.innerHTML = '<div class="upcomingInfo"><div class="upcomingIcon" aria-hidden="true">' + Pa(fn(S)) + '</div><div><div class="upcomingName">' + ne(S.name) + '</div><div class="upcomingMeta">' + ne(Cl(S)) + (qs() > 1 ? " · round " + S.round : "") + '</div></div></div><button class="skipSessionBtn" type="button">' + (S.sessionHidden ? "Include this session" : "Skip this session") + "</button>", B.querySelector(".skipSessionBtn").addEventListener("click", () => Tl(S)), a.appendChild(B);
    });
  }
  function ho() {
    var s;
    const a = cc();
    ld.textContent = a.name, lc.textContent = a.meta, dc.innerHTML = Pa(a.icon);
    {
      const d = Re ? Kt[un(se + 1)] : ((s = Kt[se]) == null ? void 0 : s.rest) > 0 ? { kind: "rest" } : Kt[un(se + 1)];
      n.querySelector(".nextCard").classList.toggle("noMeta", !!(d && Pl(d)));
    }
    if (Oa = null, Re) {
      const d = un(se + 1);
      d >= 0 && (Oa = Kt[d]);
    } else {
      const d = Kt[se];
      if (d && d.rest > 0)
        Oa = null;
      else {
        const m = un(se + 1);
        m >= 0 && (Oa = Kt[m]);
      }
    }
    ns && (ns.hidden = !Oa, ns.textContent = Oa != null && Oa.sessionHidden ? "Include this session" : "Skip this session"), ui();
  }
  ns.addEventListener("click", () => {
    Oa && (Oa.sessionHidden = !Oa.sessionHidden, Be((Oa.sessionHidden ? "Hidden " : "Included ") + Oa.name + " for this session"), ho());
  });
  let qa = null, On = null;
  function Xn(a, s = {}) {
    const d = ue[Me];
    l.fire(a, { move: (d == null ? void 0 : d.name) || "", move_id: Me, ...s });
  }
  function dd() {
    const a = ue[Me];
    qa = { key: Me, name: (a == null ? void 0 : a.name) || "Move", startedAt: Date.now(), active: 0 }, clearInterval(On), On = setInterval(() => {
      qa && !Pt && qa.active++;
    }, 1e3), Xn("started", { steps: Kt.length });
  }
  function cd(a) {
    if (clearInterval(On), !qa) return;
    const s = qa;
    qa = null, Xn(a ? "completed" : "ended", { seconds: s.active }), !(s.active < 30) && (Ut.history.unshift({ id: "h-" + s.startedAt, move_id: s.key, name: s.name, start: new Date(s.startedAt).toISOString(), seconds: s.active, completed: a }), Ut.history = Ut.history.slice(0, 1e3), wn(), wo(), Cn());
  }
  let ye = null, Vi = null, Vo = !1;
  function qn() {
    return me().sounds !== !1;
  }
  function Ll() {
    if (qn())
      try {
        navigator.audioSession && (navigator.audioSession.type = "playback"), ye = ye || new (window.AudioContext || window.webkitAudioContext)(), ye.state === "suspended" && ye.resume();
      } catch {
        ye = null;
      }
  }
  function fi(a, s, d, { to: m = a, vol: S = 0.25, type: B = "sine" } = {}) {
    const O = ye.currentTime + s, Y = ye.createOscillator(), wt = ye.createGain();
    Y.type = B, Y.frequency.setValueAtTime(a, O), m !== a && Y.frequency.exponentialRampToValueAtTime(m, O + d), wt.gain.setValueAtTime(1e-4, O), wt.gain.exponentialRampToValueAtTime(S, O + 0.01), wt.gain.exponentialRampToValueAtTime(1e-4, O + d), Y.connect(wt).connect(ye.destination), Y.start(O), Y.stop(O + d + 0.02);
  }
  const pd = {
    tick: () => fi(880, 0, 0.07, { vol: 0.18 }),
    move: () => {
      fi(660, 0, 0.12, { type: "triangle", vol: 0.3 }), fi(990, 0.13, 0.16, { type: "triangle", vol: 0.3 });
    },
    rest: () => fi(660, 0, 0.4, { to: 440, vol: 0.22 }),
    done: () => {
      fi(523, 0, 0.16, { type: "triangle" }), fi(659, 0.16, 0.16, { type: "triangle" }), fi(784, 0.32, 0.4, { type: "triangle" });
    }
  };
  function jo(a) {
    if (!(!qn() || !ye))
      try {
        ye.state === "suspended" && ye.resume(), pd[a]();
      } catch {
      }
  }
  function kr() {
    ua >= 1 && ua <= 3 && ua !== Vi && (Vi = ua, jo("tick"));
  }
  function uc() {
    Ll(), L("workout"), Mr();
    const a = un(0);
    a >= 0 && Kt[a].kind === "video" && Ws(Kt[a]);
  }
  function os() {
    tn(), cd(!1), clearInterval(Ce), clearInterval(Te), Re = !1, ya(!1), i("app").classList.remove("resting"), Qr.classList.remove("active"), L("home");
  }
  function Mr() {
    Qr.classList.add("active");
    let a = 5;
    xl.textContent = a, jo("tick"), requestAnimationFrame(es), clearInterval(Te), Te = setInterval(() => {
      a--, a > 0 ? (xl.textContent = a, jo("tick"), es()) : (clearInterval(Te), xl.textContent = "GO", jo("move"), Vo = !0, es(), setTimeout(() => {
        Qr.classList.remove("active"), cancelAnimationFrame(ts), ra();
      }, 650));
    }, 1e3);
  }
  function Aa() {
    var s;
    yr.innerHTML = "";
    const a = ((s = Kt[Math.max(0, se)] || Kt[0]) == null ? void 0 : s.round) || 1;
    yr.dataset.round = a, Kt.forEach((d, m) => {
      if ((d.round || 1) !== a) return;
      const S = document.createElement("button");
      S.dataset.step = m, S.type = "button", S.className = "progressSegment", S.setAttribute("aria-label", "Go to " + d.name), S.addEventListener("click", () => {
        m <= se && ud(m);
      }), yr.appendChild(S);
    });
  }
  function ya(a) {
    a = !!a;
    const s = Pt !== a;
    if (Pt = a, Os.textContent = a ? "Resume" : "Pause", i("app").classList.toggle("paused", a), na && Ue)
      try {
        a ? Ue.pauseVideo() : Ue.playVideo();
      } catch {
      }
    s && qa && Xn(a ? "paused" : "resumed");
  }
  function ud(a) {
    a < 0 || a >= Kt.length || a > se || (clearInterval(Ce), Re = !1, i("app").classList.remove("resting"), se = a, ya(!1), gi(), Ce = setInterval(Go, 1e3));
  }
  function ra() {
    if (se = un(0), ya(!1), Aa(), se < 0) {
      as.textContent = "No activities", Wo.textContent = "Open Edit and enable or add a movement", Wo.hidden = !1;
      return;
    }
    dd(), gi(), clearInterval(Ce), Ce = setInterval(Go, 1e3);
  }
  const Al = i("videoStage"), mo = i("videoSound"), El = 0, Sr = 1, fc = 2;
  let is = 0, hi = null, Cr = null, Ue = null, mi = null, Tr = 0, _l = !1, na = null, zo = null;
  function fd() {
    var a;
    return (a = window.YT) != null && a.Player ? Promise.resolve(window.YT) : hi || (hi = new Promise((s, d) => {
      const m = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        try {
          m == null || m();
        } catch {
        }
      };
      const S = setInterval(() => {
        var O;
        (O = window.YT) != null && O.Player && (clearInterval(S), clearTimeout(B), s(window.YT));
      }, 100), B = setTimeout(() => {
        clearInterval(S), hi = null, d(new Error("YouTube did not load"));
      }, 15e3);
      if (!document.querySelector('script[src*="youtube.com/iframe_api"]')) {
        const O = document.createElement("script");
        O.src = "https://www.youtube.com/iframe_api", O.async = !0, O.onerror = () => {
          clearInterval(S), clearTimeout(B), hi = null, d(new Error("YouTube did not load"));
        }, document.head.appendChild(O);
      }
    }), hi);
  }
  function Dl() {
    return Cr || (Cr = fd().then((a) => new Promise((s) => {
      const d = document.createElement("div");
      i("videoFrame").appendChild(d), Ue = new a.Player(d, {
        width: "100%",
        height: "100%",
        playerVars: { playsinline: 1, rel: 0, iv_load_policy: 3, modestbranding: 1 },
        events: { onReady: () => s(Ue), onStateChange: (m) => hd(m.data), onError: (m) => md(m.data) }
      });
    })), Cr.catch(() => {
      Cr = null;
    }), Cr);
  }
  function Ws(a) {
    !(a != null && a.videoId) || a.videoError || Dl().then((s) => {
      na || mi === a.videoId || (mi = a.videoId, Tr = Number(a.start) || 0, _l = !1, s.mute(), s.loadVideoById({ videoId: a.videoId, startSeconds: Tr }));
    }).catch(() => {
    });
  }
  function Vs() {
    const a = un(se + 1);
    a >= 0 && Kt[a].kind === "video" && Ws(Kt[a]);
  }
  function hd(a) {
    if (!na) {
      a === Sr && !_l && (_l = !0, Ue.pauseVideo(), Ue.seekTo(Tr, !0));
      return;
    }
    Al.classList.toggle("playing", a === Sr), Kt[se] === na && performance.now() > is && (a === Sr && Pt ? ya(!1) : a === fc && !Pt && ya(!0)), a === Sr && ss(na.videoId, Ue.getDuration()) && wn(), a === El && rs();
  }
  function md(a) {
    const s = na;
    if (!s) {
      mi = null;
      return;
    }
    a === 101 || a === 150 ? (ls(s.videoId), Be("That video can’t play outside YouTube, so it was skipped")) : Be("The video couldn’t play, so it was skipped"), rs();
  }
  function hc(a) {
    if (i("app").classList.add("videoStep"), mo.hidden = !0, na = a, clearTimeout(zo), !a.videoId) {
      Be("This video step has no link yet, so it was skipped"), setTimeout(() => rs(), 0);
      return;
    }
    Dl().then((s) => {
      if (na !== a) return;
      is = performance.now() + 1500;
      const d = Number(a.start) || 0;
      mi !== a.videoId ? (mi = a.videoId, Tr = d, s.loadVideoById({ videoId: a.videoId, startSeconds: d })) : (s.seekTo(d, !0), s.playVideo()), s.unMute(), Pt && s.pauseVideo(), zo = setTimeout(() => {
        na !== a || Pt || (s.getPlayerState() !== Sr ? (s.mute(), s.playVideo(), mo.hidden = !1) : s.isMuted() && (mo.hidden = !1));
      }, 1600);
    }).catch(() => {
      na === a && (Be("YouTube didn’t load, so the video was skipped"), rs());
    });
  }
  function js() {
    if (!i("app").classList.contains("videoStep")) return;
    const a = n.querySelector(".workGrid"), s = n.querySelector(".sessionControlRow"), d = a.getBoundingClientRect().top, m = (s == null ? void 0 : s.offsetHeight) || 42, S = window.innerHeight - d - 16 - m - 84;
    a.style.setProperty("--theater-h", Math.max(240, Math.round(S)) + "px");
  }
  window.addEventListener("resize", js);
  function tn() {
    clearTimeout(zo);
    const a = na;
    if (na = null, i("app").classList.remove("videoStep"), Al.classList.remove("playing"), mo.hidden = !0, a && Ue) {
      try {
        Ue.pauseVideo();
      } catch {
      }
      mi = null;
    }
  }
  function rs() {
    const a = na;
    !a || Kt[se] !== a || (tn(), clearInterval(Ce), Uo(), Ce = setInterval(Go, 1e3));
  }
  mo.addEventListener("click", () => {
    Ue && (Ue.unMute(), Ue.playVideo()), mo.hidden = !0;
  });
  function mc(a) {
    var m;
    const s = Number(a.start) || 0;
    if (a.useVideoLength === !1) return s + (Number(a.duration) || 300);
    const d = Ue && na === a && Number((m = Ue.getDuration) == null ? void 0 : m.call(Ue)) || 0;
    return Number(a.end) || d || Number(a.videoDuration) || s + (Number(a.duration) || 300);
  }
  function en(a, s) {
    const d = ue[Me];
    [Qe, Xt, Ga, d == null ? void 0 : d.warmup, d == null ? void 0 : d.strength, d == null ? void 0 : d.cooldown, d == null ? void 0 : d.sequence].forEach((m) => (Array.isArray(m) ? m : []).forEach((S) => {
      S && S.kind === "video" && S.videoId === a && s(S);
    }));
  }
  function ss(a, s) {
    s = Math.round(Number(s) || 0);
    let d = !1;
    return a && s > 0 && en(a, (m) => {
      m.videoDuration !== s && (m.videoDuration = s, d = !0);
    }), d;
  }
  function ls(a) {
    en(a, (s) => {
      s.videoError = "embed";
    }), wn();
  }
  function Lr(a) {
    const s = a.videoId;
    if (!s) return;
    const d = () => {
      Xa.classList.contains("open") ? fa || qe() : (qe(), wn());
    };
    fetch("https://www.youtube.com/oembed?format=json&url=" + encodeURIComponent("https://www.youtube.com/watch?v=" + s)).then((m) => m.ok ? m.json() : Promise.reject(m.status)).then((m) => {
      a.videoId === s && (a.videoTitle = m.title || "", a.autoName && m.title && (a.name = m.title), d());
    }).catch((m) => {
      a.videoId === s && m === 401 && (a.videoError = "embed", d());
    }), gd(s).then((m) => {
      ss(s, m) && d();
    }).catch((m) => {
      m === "embed" && a.videoId === s && (a.videoError = "embed", d());
    });
  }
  function gd(a) {
    return fd().then((s) => new Promise((d, m) => {
      const S = document.createElement("div");
      S.className = "videoProbe", S.setAttribute("aria-hidden", "true");
      const B = document.createElement("div");
      S.appendChild(B), i("app").appendChild(S);
      let O = null, Y = !1;
      const wt = (mt, It) => {
        Y || (Y = !0, clearTimeout(Mt), setTimeout(() => {
          try {
            O == null || O.destroy();
          } catch {
          }
          S.remove();
        }, 0), It ? m(It) : d(mt));
      }, Mt = setTimeout(() => wt(0), 2e4), bt = () => {
        var It;
        const mt = Number((It = O == null ? void 0 : O.getDuration) == null ? void 0 : It.call(O)) || 0;
        return mt > 0 && wt(mt), mt > 0;
      };
      O = new s.Player(B, {
        width: 320,
        height: 180,
        videoId: a,
        playerVars: { playsinline: 1, mute: 1, controls: 0 },
        events: {
          onReady: () => {
            bt() || (O.mute(), O.playVideo());
          },
          onStateChange: () => bt(),
          onError: (mt) => wt(0, mt.data === 101 || mt.data === 150 ? "embed" : "error")
        }
      });
    }));
  }
  function gi() {
    Re = !1;
    const a = Kt[se];
    i("app").classList.toggle("resting", a.kind === "rest"), a.kind === "video" ? hc(a) : tn(), ua = a.duration, ve = a.duration, Vi = null, Vo ? Vo = !1 : jo(a.kind === "rest" ? "rest" : "move"), as.textContent = a.name, Wo.textContent = a.group, Wo.hidden = !0, Sn.textContent = Ja(se), qa && Xn("step", { name: a.name, group: a.group, kind: a.kind, step: se + 1, of: Kt.length, round: a.round || 1, rounds: qs(), duration: a.duration }), ho(), Qa(), Vs(), a.kind === "video" && setTimeout(js, 0);
  }
  function ji() {
    var S;
    const a = ((S = Kt[se]) == null ? void 0 : S.kind) === "video" && !Re, s = a && ua >= 60;
    Ml.textContent = s ? io(ua) : ua, Ml.classList.toggle("long", s), a && (i("videoClock").textContent = io(ua) + " left");
    const d = ua / ve * 100;
    Sl.style.width = d + "%";
    const m = Ae();
    if (m && !Re) {
      const B = 100 - d;
      m.style.setProperty("--segment-progress", B + "%");
    }
  }
  function Go() {
    var s, d;
    if (Pt) return;
    const a = Kt[se];
    if ((a == null ? void 0 : a.kind) === "video" && !Re && na === a) {
      const m = Number((s = Ue == null ? void 0 : Ue.getCurrentTime) == null ? void 0 : s.call(Ue)) || 0, S = Number(a.start) || 0, B = mc(a);
      ve = Math.max(1, B - S), (m > S || ((d = Ue == null ? void 0 : Ue.getPlayerState) == null ? void 0 : d.call(Ue)) === Sr) && (ua = Math.max(0, Math.ceil(B - m))), ji(), kr(), m > S && m >= B - 0.25 && rs();
      return;
    }
    ua--, ji(), kr(), ua <= 0 && (a.rest > 0 ? ds(a.rest) : Uo());
  }
  function ds(a) {
    var d;
    Re = !0, i("app").classList.add("resting");
    const s = Ae();
    s && s.style.setProperty("--segment-progress", "100%"), clearInterval(Ce), ua = a, ve = a, Vi = null, jo("rest"), qa && Xn("rest", { duration: a }), as.textContent = "Rest", Wo.textContent = (d = Kt[se]) != null && d.roundBreakAfter ? "Round " + (Kt[se].round + 1) + " next" : "Recovery", ho(), ji(), Ce = setInterval(() => {
      Pt || (ua--, ji(), kr(), ua <= 0 && (clearInterval(Ce), Uo(), Ce = setInterval(Go, 1e3)));
    }, 1e3);
  }
  function Uo() {
    Re = !1;
    const a = un(se + 1);
    if (a >= 0)
      se = a, gi();
    else {
      clearInterval(Ce), tn(), ya(!1), i("app").classList.remove("resting"), as.textContent = "Complete", Wo.textContent = "Move finished", Wo.hidden = !1, Ml.textContent = "✓";
      {
        const s = qs();
        Sn.textContent = s > 1 ? s + " rounds done" : Kt.filter((d) => !d.roundBreak).length + " steps done";
      }
      cd(!0), jo("done");
      {
        const s = Zs(7).reduce((d, m) => d + m.minutes, 0);
        Wo.textContent = "Move finished · " + s + " min in the last 7 days";
      }
      Sl.style.width = "100%", ho();
    }
  }
  i("skipExercise").addEventListener("click", () => {
    zs(), ya(!1);
  });
  function zs() {
    clearInterval(Ce);
    const a = Kt[se];
    if (Re) {
      Re = !1, i("app").classList.remove("resting");
      const d = un(se + 1);
      d >= 0 ? (se = d, gi(), Ce = setInterval(Go, 1e3)) : Uo();
      return;
    }
    if (a && a.rest > 0) {
      ds(a.rest);
      return;
    }
    const s = un(se + 1);
    s >= 0 ? (se = s, gi(), Ce = setInterval(Go, 1e3)) : Uo();
  }
  i("restartSegment").addEventListener("click", () => {
    if (clearInterval(Ce), ya(!1), Re) {
      const a = Kt[se];
      ua = a.rest, ve = a.rest, Vi = null, jo("rest"), as.textContent = "Rest", Wo.textContent = "Recovery", i("app").classList.add("resting"), ho(), ji();
    } else
      gi();
    Ce = setInterval(Re ? () => {
      Pt || (ua--, ji(), kr(), ua <= 0 && (clearInterval(Ce), Uo(), Ce = setInterval(Go, 1e3)));
    } : Go, 1e3);
  });
  function zi(a, s, d, m) {
    let S = 0, B = null, O = !1;
    function Y() {
      B && cancelAnimationFrame(B), B = null, S = 0, O = !1, s.style.width = "0%", a.classList.remove("holding");
    }
    function wt(mt) {
      if (!O) return;
      S || (S = mt);
      const It = Math.min(1, (mt - S) / d);
      if (s.style.width = It * 100 + "%", It >= 1) {
        O = !1, B && cancelAnimationFrame(B), B = null, s.style.width = "100%", setTimeout(() => s.style.width = "0%", 90), m();
        return;
      }
      B = requestAnimationFrame(wt);
    }
    function Mt(mt) {
      var It;
      if (!(mt && mt.button !== void 0 && mt.button !== 0)) {
        mt == null || mt.preventDefault(), Y(), O = !0, a.classList.add("holding");
        try {
          (It = a.setPointerCapture) == null || It.call(a, mt.pointerId);
        } catch {
        }
        B = requestAnimationFrame(wt);
      }
    }
    function bt() {
      O && Y();
    }
    a.addEventListener("pointerdown", Mt), a.addEventListener("pointerup", bt), a.addEventListener("pointercancel", bt), a.addEventListener("lostpointercapture", bt), a.addEventListener("keydown", (mt) => {
      (mt.key === " " || mt.key === "Enter") && !mt.repeat && Mt(mt);
    }), a.addEventListener("keyup", (mt) => {
      (mt.key === " " || mt.key === "Enter") && bt();
    });
  }
  const vd = i("endWorkout");
  zi(vd, i("holdEndFill"), 1500, os);
  const vi = i("deleteMoveConfirm");
  i("deleteMoveOpen").addEventListener("click", () => {
    vi.classList.add("open"), vi.setAttribute("aria-hidden", "false");
  }), i("deleteMoveCancel").addEventListener("click", () => {
    vi.classList.remove("open"), vi.setAttribute("aria-hidden", "true");
  });
  function Gs() {
    const a = Me, s = n.querySelector('.workoutPanel[data-workout="' + a + '"]');
    s && s.remove(), delete ue[a], Ut.order = Ut.order.filter((m) => m !== a);
    let d = n.querySelector(".workoutPanel[data-workout]");
    if (!d) {
      const m = "custom-" + Date.now();
      ue[m] = { name: "New move", source: "Custom routine", total: 20, work: 45, rest: 15, customSequence: !0, preset: "movement", sequence: [], strength: [] }, Ut.order.push(m), d = Hn(m, ue[m]);
    }
    vi.classList.remove("open"), vi.setAttribute("aria-hidden", "true"), fr = null, mr(), ze(d.dataset.workout), wn(), Be("Move deleted");
  }
  zi(i("deleteMoveYes"), i("deleteMoveFill"), 1500, Gs);
  const Bl = n.querySelector(".rubberTabs"), Ar = i("rubberIndicator");
  function Er(a, s = !0) {
    if (!a || !Bl || !Ar) return;
    const d = Bl.getBoundingClientRect(), m = a.getBoundingClientRect();
    Ar.style.transition = s ? "left .34s cubic-bezier(.2,1.35,.4,1),width .34s cubic-bezier(.2,1.35,.4,1),transform .18s ease" : "none";
    const S = li();
    Ar.style.left = (m.left - d.left) / S + Bl.scrollLeft + "px", Ar.style.width = m.width / S + "px", s && (Ar.style.transform = "scaleX(1.08)", setTimeout(() => Ar.style.transform = "scaleX(1)", 180));
  }
  n.querySelectorAll(".tab").forEach((a) => a.addEventListener("click", () => {
    a.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "smooth" }), n.querySelectorAll(".tab").forEach((s) => s.classList.remove("active")), n.querySelectorAll(".settingsPane").forEach((s) => s.classList.remove("active")), a.classList.add("active"), i(a.dataset.pane).classList.add("active"), Er(a, !0);
  })), requestAnimationFrame(() => Er(n.querySelector(".tab.active"), !1)), window.addEventListener("resize", () => Er(n.querySelector(".tab.active"), !1));
  const Rl = i("pixelTrailToggle"), cs = i("rippleToggle"), _r = i("trailStrength"), Gi = i("trailLife");
  function be(a, s) {
    me()[a] = s, wn();
  }
  const an = ["Warm-up", "Movement", "Cooldown", "Rest", "Video"];
  function ps(a) {
    return a.kind === "rest" ? "rest" : a.kind === "video" ? "video" : "g:" + String(a.group || "").trim().toLowerCase();
  }
  function Pl(a) {
    var s;
    return !!((s = me().hideMeta) != null && s[ps(a)]);
  }
  function Nl() {
    const a = /* @__PURE__ */ new Map(), s = (d, m, S) => {
      if (!d) return;
      Array.isArray(d) && (d = { name: d[1], group: d[2], kind: "work" });
      const B = ps(d);
      let O = a.get(B);
      O || (O = { key: B, label: B === "rest" ? "Rest" : B === "video" ? "Video" : String(d.group || "").trim() || "No type", kinds: /* @__PURE__ */ new Set(), moves: /* @__PURE__ */ new Set(), count: 0 }, a.set(B, O)), O.kinds.add(B === "rest" ? "Rest" : B === "video" ? "Video" : m), O.moves.add(S), O.count++;
    };
    return Object.values(ue).forEach((d) => {
      const m = d.name || "Move";
      (d.warmup || (d.customSequence ? [] : ao)).forEach((S) => s(S, "Warm-up", m)), (d.customSequence ? d.sequence || [] : d.strength || []).forEach((S) => s(S, S.presetRole === "warmup" ? "Warm-up" : S.presetRole === "cooldown" ? "Cooldown" : "Movement", m)), (d.cooldown || (d.customSequence ? [] : ce)).forEach((S) => s(S, "Cooldown", m));
    }), [["rest", "Rest"], ["video", "Video"]].forEach(([d, m]) => {
      a.has(d) || a.set(d, { key: d, label: m, kinds: /* @__PURE__ */ new Set([m]), moves: /* @__PURE__ */ new Set(), count: 0 });
    }), [...a.values()].map((d) => ({ ...d, kind: d.kinds.has("Movement") ? "Movement" : [...d.kinds][0], moves: [...d.moves] })).sort((d, m) => an.indexOf(d.kind) - an.indexOf(m.kind) || d.label.localeCompare(m.label));
  }
  let Hl = "all";
  function Wn() {
    const a = i("metaSearch").value.trim().toLowerCase();
    return Nl().filter((s) => (Hl === "all" || s.kind === Hl) && (!a || s.label.toLowerCase().includes(a) || s.moves.some((d) => d.toLowerCase().includes(a))));
  }
  function Vn() {
    const a = i("metaTableBody");
    if (!a) return;
    const s = me().hideMeta || {}, d = Wn();
    a.innerHTML = d.length ? "" : '<tr class="metaEmpty"><td colspan="4">No types match</td></tr>', d.forEach((S) => {
      const B = !s[S.key], O = S.count ? (S.moves.length > 2 ? S.moves.slice(0, 2).join(", ") + " + " + (S.moves.length - 2) + " more" : S.moves.join(", ")) + " · " + S.count + " step" + (S.count === 1 ? "" : "s") : "Not used yet", Y = document.createElement("tr");
      Y.className = B ? "" : "off", Y.innerHTML = '<td><div class="metaType">' + ne(S.label) + '</div><div class="metaSub">' + ne(S.kind + " · " + O) + '</div></td><td class="metaKindCol">' + ne(S.kind) + '</td><td class="metaUsedCol">' + ne(O) + '</td><td class="metaSwitchCol"><button class="switch' + (B ? " on" : "") + '" type="button" role="switch" aria-checked="' + B + '" aria-label="Second line for ' + ne(S.label) + ' on phones"></button></td>', Y.querySelector(".switch").addEventListener("click", () => Jn([S.key], B)), a.appendChild(Y);
    });
    const m = d.filter((S) => s[S.key]).length;
    i("metaCount").textContent = d.length ? d.length + " type" + (d.length === 1 ? "" : "s") + (m ? " · " + m + " hidden on phones" : "") : "";
  }
  function Jn(a, s) {
    const d = { ...me().hideMeta || {} };
    a.forEach((m) => {
      s ? d[m] = !0 : delete d[m];
    }), be("hideMeta", d), Vn(), sr(), ho();
  }
  i("metaSearch").addEventListener("input", Vn), i("metaKinds").querySelectorAll(".kindChip").forEach((a) => a.addEventListener("click", () => {
    Hl = a.dataset.kind, i("metaKinds").querySelectorAll(".kindChip").forEach((s) => s.classList.toggle("active", s === a)), Vn();
  })), i("metaHideAll").addEventListener("click", () => Jn(Wn().map((a) => a.key), !0)), i("metaShowAll").addEventListener("click", () => Jn(Wn().map((a) => a.key), !1));
  const go = { feel: !0, steps: !0, mood: !0, energyLevel: !0, weather: !0, ...me().toggles || {} };
  function Va() {
    n.querySelectorAll("[data-toggle]").forEach((d) => d.classList.toggle("on", go[d.dataset.toggle] !== !1)), n.querySelector(".feelSection").hidden = !0, [["steps", "stepsRow"], ["mood", "moodRow"], ["energyLevel", "energyLevelRow"]].forEach(([d, m]) => {
      i(m).hidden = go[d] === !1;
    });
    const a = ["steps", "mood", "energyLevel"].some((d) => go[d] !== !1);
    n.querySelector(".activityCard").hidden = !a, i("weatherCard").hidden = !0;
    const s = n.querySelector("#homeView .grid");
    s.classList.toggle("noActivity", !a), s.classList.toggle("noWeather", !0);
  }
  n.querySelectorAll("[data-toggle]").forEach((a) => a.addEventListener("click", () => {
    go[a.dataset.toggle] = go[a.dataset.toggle] === !1, Va(), be("toggles", { ...go });
  })), Va();
  function Yo() {
    Rl.classList.toggle("on", Oo), cs.classList.toggle("on", Wi), _r.value = Math.round(br * 100), i("trailStrengthValue").textContent = _r.value + "%", Gi.value = qi, i("trailLifeValue").textContent = Gi.value + " ms";
  }
  me().trailEnabled !== void 0 && (Oo = me().trailEnabled), me().rippleEnabled !== void 0 && (Wi = me().rippleEnabled), me().trailStrength !== void 0 && (br = me().trailStrength), me().trailMaxAge !== void 0 && (qi = me().trailMaxAge), Yo();
  const us = i("soundsToggle");
  us.classList.toggle("on", qn()), us.addEventListener("click", () => {
    be("sounds", !qn()), us.classList.toggle("on", qn()), qn() && (Ll(), jo("move"));
  }), Rl.addEventListener("click", () => {
    Oo = !Oo, Rl.classList.toggle("on", Oo), Oo || (di = []), be("trailEnabled", Oo);
  }), cs.addEventListener("click", () => {
    Wi = !Wi, cs.classList.toggle("on", Wi), be("rippleEnabled", Wi);
  }), _r.addEventListener("input", () => {
    br = Number(_r.value) / 100, i("trailStrengthValue").textContent = _r.value + "%";
  }), _r.addEventListener("change", () => be("trailStrength", br)), Gi.addEventListener("input", () => {
    qi = Number(Gi.value), i("trailLifeValue").textContent = Gi.value + " ms";
  }), Gi.addEventListener("change", () => be("trailMaxAge", qi)), Wa.addEventListener("change", () => be("upcomingCount", xn));
  function vo(a) {
    n.querySelectorAll(".themeBtn").forEach((d) => d.classList.toggle("active", d.dataset.theme === a));
    const s = a === "light";
    i("app").classList.toggle("light", s), l.setLight(s), Yi(n);
  }
  vo(me().theme || "dark"), n.querySelectorAll(".themeBtn").forEach((a) => a.addEventListener("click", () => {
    vo(a.dataset.theme), be("theme", a.dataset.theme);
  }));
  const nn = { steps: null, weather: null, ...me().entities || {} };
  let Ea = null, fs = {};
  function gc(a) {
    const s = Object.values(a).filter((Y) => Y.entity_id.startsWith("sensor.") || Y.entity_id.startsWith("input_number.")), d = (Y) => Y.attributes.friendly_name || Y.entity_id, m = s.filter((Y) => /step/i.test(Y.entity_id) || /step/i.test(d(Y)) || ["steps", "step"].includes(String(Y.attributes.unit_of_measurement || "").toLowerCase())), S = s.filter((Y) => !m.includes(Y)), B = (Y, wt) => d(Y).localeCompare(d(wt)), O = (Y, wt) => /health_steps/.test(wt.entity_id) - /health_steps/.test(Y.entity_id) || B(Y, wt);
    return { suggested: m.sort(O), rest: S.sort(B), label: d };
  }
  function Il(a) {
    const s = i("stepsEntity");
    if (!s || s.matches(":focus")) return;
    const { suggested: d, rest: m, label: S } = gc(a), B = (wt) => '<option value="' + ne(wt.entity_id) + '">' + ne(S(wt)) + "</option>";
    s.innerHTML = '<option value="">Not connected</option>' + (d.length ? '<optgroup label="Suggested">' + d.map(B).join("") + "</optgroup>" : "") + (m.length ? '<optgroup label="All sensors">' + m.map(B).join("") + "</optgroup>" : ""), s.value = nn.steps || "";
    const O = i("stepsStatus"), Y = nn.steps && a[nn.steps];
    O.textContent = Y ? "Connected · " + S(Y) : O.dataset.empty;
  }
  i("stepsEntity").addEventListener("change", () => {
    nn.steps = i("stepsEntity").value || null, be("entities", { ...nn }), fs = {}, Ys(), Ea && (Il(Ea), jn(Ea));
  });
  function ma(a, s = 0) {
    return new Intl.NumberFormat(void 0, { maximumFractionDigits: s }).format(a);
  }
  function bo() {
    const a = nn.steps && (Ea == null ? void 0 : Ea[nn.steps]), s = Number(a == null ? void 0 : a.state);
    return Number.isFinite(s) ? s : null;
  }
  function jn(a) {
    var m;
    const s = nn.steps, d = s ? Number((m = a[s]) == null ? void 0 : m.state) : NaN;
    i("stepsMeta").textContent = s ? Number.isFinite(d) ? ma(d) : "—" : "Set up in Settings";
  }
  let Us = 0;
  async function Ys() {
    const a = nn.steps;
    if (!a || !l.ws) return;
    Us = Date.now();
    const s = /* @__PURE__ */ new Date(), d = new Date(s.getFullYear(), s.getMonth(), s.getDate() - 30);
    try {
      const m = await l.ws({ type: "recorder/statistics_during_period", start_time: d.toISOString(), end_time: s.toISOString(), statistic_ids: [a], period: "day", types: ["max"] }), S = (m == null ? void 0 : m[a]) || [], B = {};
      if (S.forEach((O) => {
        Number.isFinite(O.max) && (B[Ve(new Date(O.start))] = O.max);
      }), !Object.keys(B).length) {
        const O = await l.ws({ type: "history/history_during_period", start_time: d.toISOString(), end_time: s.toISOString(), entity_ids: [a], minimal_response: !0, no_attributes: !0, significant_changes_only: !1 });
        ((O == null ? void 0 : O[a]) || []).forEach((Y) => {
          const wt = Number(Y.s ?? Y.state), Mt = Y.lu ? Y.lu * 1e3 : Date.parse(Y.last_updated || Y.last_changed);
          if (!Number.isFinite(wt) || !Mt) return;
          const bt = Ve(new Date(Mt));
          B[bt] = Math.max(B[bt] || 0, wt);
        });
      }
      fs = B, Cn();
    } catch {
    }
  }
  function wo() {
    Cn();
  }
  wo(), setInterval(() => {
    wo(), ta(), Ee();
  }, 10 * 60 * 1e3);
  function Zs(a) {
    const s = {}, d = {};
    Ut.history.forEach((O) => {
      const Y = Ve(new Date(O.start));
      s[Y] = (s[Y] || 0) + (O.seconds || 0) / 60, d[Y] = (d[Y] || 0) + 1;
    });
    const m = /* @__PURE__ */ new Date(), S = Ve(m), B = [];
    for (let O = a - 1; O >= 0; O--) {
      const Y = new Date(m.getFullYear(), m.getMonth(), m.getDate() - O), wt = Ve(Y), Mt = Ut.checkins.filter((mt) => mt.date === wt), bt = (mt) => {
        const It = Mt.map((ee) => ee[mt]).filter(Boolean);
        return It.length ? It.reduce((ee, Wt) => ee + Wt, 0) / It.length : null;
      };
      B.push({
        key: wt,
        date: Y,
        minutes: Math.round(s[wt] || 0),
        moves: d[wt] || 0,
        steps: wt === S && bo() != null ? bo() : fs[wt] ?? null,
        mood: bt("mood"),
        energy: bt("energy")
      });
    }
    return B;
  }
  function hs(a) {
    let s = a.length - 1;
    a[s] && !a[s].minutes && s--;
    let d = 0;
    for (; s >= 0 && a[s].minutes > 0; )
      d++, s--;
    return d;
  }
  function Cn() {
    const a = i("insightCard");
    if (!a) return;
    const s = Zs(30), d = hs(s), m = s.reduce((Mt, bt) => Mt + bt.minutes, 0), S = /* @__PURE__ */ new Date(), B = Ve(S), O = Ve(new Date(S.getFullYear(), S.getMonth(), S.getDate() - (S.getDay() + 6) % 7)), Y = s.filter((Mt) => Mt.key >= O && Mt.key <= B).reduce((Mt, bt) => Mt + bt.minutes, 0), wt = (Mt, bt, mt) => '<div class="activityRow"><div class="activityRowIcon" aria-hidden="true">' + Mt + '</div><div><div class="activityRowName">' + ne(bt) + '</div><div class="activityRowMeta">' + ne(mt) + "</div></div></div>";
    a.innerHTML = '<div class="activityHeader"><div class="activityIcon" aria-hidden="true">' + Pa("move") + '</div><div class="activityTitle">Movement</div></div><div class="activityRows jointRows">' + wt(Pa("clock"), "This week", Y + " min") + wt(Pa("streak"), "Streak", d + " day" + (d === 1 ? "" : "s")) + wt(Pa("calendar"), "30 days", m + " min") + "</div>";
  }
  const Ks = {
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
  }, bd = (a) => a === "sunny" ? "clear" : a === "clear-night" ? "night" : a === "partlycloudy" ? "partly" : ["rainy", "pouring", "lightning", "lightning-rainy", "hail"].includes(a) ? "rain" : ["snowy", "snowy-rainy"].includes(a) ? "snow" : "cloudy", Ui = { s: "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", sp: "M41.025 27.045C40.5181 24.4943 39.142 22.1985 37.1315 20.5491C35.121 18.8996 32.6005 17.9987 30 18C25.665 18 21.9 20.46 20.025 24.045C17.8191 24.2867 15.7801 25.3344 14.2991 26.987C12.8181 28.6396 11.9994 30.7809 12 33C12 35.3869 12.9482 37.6761 14.636 39.364C16.3239 41.0518 18.6131 42 21 42H40.5C41.4849 42 42.4602 41.806 43.3701 41.4291C44.2801 41.0522 45.1069 40.4997 45.8033 39.8033C46.4997 39.1069 47.0522 38.2801 47.4291 37.3701C47.806 36.4602 48 35.4849 48 34.5C48 30.54 44.925 27.33 41.025 27.045Z", lp: "M70.8016 48.008C69.9751 43.8493 67.7316 40.1062 64.4536 37.4168C61.1755 34.7275 57.0661 33.2587 52.8261 33.2607C45.7581 33.2607 39.6196 37.2716 36.5625 43.1167C32.9659 43.5108 29.6414 45.219 27.2267 47.9135C24.8121 50.608 23.4772 54.0991 23.4783 57.7173C23.4783 61.609 25.0243 65.3414 27.7761 68.0933C30.528 70.8452 34.2604 72.3912 38.1522 72.3912H69.9456C71.5515 72.3912 73.1416 72.0749 74.6252 71.4604C76.1088 70.8458 77.4568 69.9451 78.5923 68.8096C79.7278 67.6741 80.6286 66.3261 81.2431 64.8425C81.8576 63.3589 82.1739 61.7688 82.1739 60.1629C82.1739 53.7064 77.1603 48.4727 70.8016 48.008Z", lc: "M65.3723 37.5398C64.4356 32.8266 61.8929 28.5843 58.1778 25.5364C54.4627 22.4885 49.8054 20.8238 45 20.8262C36.9897 20.8262 30.0326 25.3718 26.5679 31.9963C22.4918 32.4429 18.724 34.3788 15.9874 37.4326C13.2508 40.4864 11.738 44.443 11.7391 48.5436C11.7391 52.9542 13.4913 57.1842 16.6101 60.3031C19.7289 63.4219 23.9589 65.174 28.3696 65.174H64.4022C66.2221 65.174 68.0243 64.8155 69.7057 64.1191C71.3871 63.4226 72.9149 62.4018 74.2018 61.1149C75.4887 59.828 76.5095 58.3002 77.2059 56.6188C77.9024 54.9374 78.2609 53.1353 78.2609 51.3153C78.2609 43.9979 72.5788 38.0664 65.3723 37.5398Z", lr: "M62.9755 28.4431C62.149 24.2844 59.9055 20.5412 56.6275 17.8519C53.3494 15.1626 49.24 13.6937 45 13.6958C37.9321 13.6958 31.7935 17.7067 28.7364 23.5518C25.1398 23.9459 21.8153 25.654 19.4006 28.3485C16.986 31.043 15.6511 34.5342 15.6522 38.1523C15.6522 42.0441 17.1982 45.7765 19.9501 48.5284C22.7019 51.2802 26.4343 52.8262 30.3261 52.8262H62.1196C63.7254 52.8262 65.3155 52.5099 66.7991 51.8954C68.2827 51.2809 69.6307 50.3802 70.7662 49.2447C71.9017 48.1092 72.8025 46.7611 73.417 45.2775C74.0315 43.7939 74.3478 42.2038 74.3478 40.598C74.3478 34.1415 69.3342 28.9078 62.9755 28.4431Z" }, ms = {
    s: ["M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", 6.11, 40],
    l: ["M41.1747 11.959C37.7298 16.5251 35.6875 22.2086 35.6874 28.3691C35.6874 43.4321 47.8979 55.6435 62.9608 55.6436C68.3701 55.6436 73.411 54.0676 77.6512 51.3516C74.6865 66.6826 61.197 78.2607 44.9999 78.2607C26.6305 78.2607 11.7391 63.3694 11.7391 45C11.7392 27.9244 24.6071 13.8562 41.1747 11.959Z", 11.96, 78.26],
    sp: ["M16.6201 5.0791C15.3771 6.72655 14.6397 8.7772 14.6396 11C14.6396 16.4345 19.046 20.8398 24.4805 20.8398C26.4326 20.8398 28.2502 20.2686 29.7803 19.2881C28.7119 24.821 23.8449 29 18 29C11.3726 29 6 23.6274 6 17C6 10.8393 10.6426 5.76349 16.6201 5.0791Z", 5.08, 29],
    lp: ["M32.5175 9.93848C30.0859 13.1616 28.6435 17.1729 28.6434 21.5215C28.6434 32.1541 37.2628 40.7733 47.8954 40.7734C51.7136 40.7734 55.2724 39.6622 58.2655 37.7451C56.1724 48.5666 46.6506 56.7391 35.2177 56.7393C22.251 56.7393 11.7391 46.2274 11.7391 33.2607C11.7393 21.2073 20.8226 11.2776 32.5175 9.93848Z", 9.94, 56.74]
  };
  let Fl = 0;
  const bi = (a, s) => '<path class="' + s + '" d="' + a + '"/>', gs = (a, s) => ' style="animation-delay:-' + Math.round(a * 137 % s) + 'ms"', Ha = (a, s, d, m) => {
    const S = d * 0.2687;
    return '<path class="wxTwinkle" fill="#fff"' + (m < 1 ? ' opacity="' + m + '"' : "") + gs(a, 2400) + ' d="M' + a + " " + (s - d) + "L" + (a + S) + " " + (s - S) + "L" + (a + d) + " " + s + "L" + (a + S) + " " + (s + S) + "L" + a + " " + (s + d) + "L" + (a - S) + " " + (s + S) + "L" + (a - d) + " " + s + "L" + (a - S) + " " + (s - S) + 'Z"/>';
  }, $s = ([a, s, d], m) => '<path class="wxMoonPath" d="' + a + '" fill="url(#' + m + ')"/><defs><linearGradient id="' + m + '" x1="0" y1="' + s + '" x2="0" y2="' + d + '" gradientUnits="userSpaceOnUse"><stop stop-color="#FFF4C7"/><stop offset="1" stop-color="#F2C95E"/></linearGradient></defs>', Zo = (a, s) => s ? '<circle class="wxSunDisc" cx="45" cy="45" r="33.26" fill="url(#' + a + ')"/><defs><linearGradient id="' + a + '" x1="12" y1="8.5" x2="67" y2="73.5" gradientUnits="userSpaceOnUse"><stop offset=".653" stop-color="#FFE100"/><stop offset="1" stop-color="#F2C159"/></linearGradient></defs>' : '<circle class="wxSunDisc" cx="23" cy="23" r="17" fill="url(#' + a + ')"/><defs><linearGradient id="' + a + '" x1="23" y1="6" x2="23" y2="40" gradientUnits="userSpaceOnUse"><stop offset=".606" stop-color="#FFE100"/><stop offset="1" stop-color="#FFAA00"/></linearGradient></defs>', Qn = (a) => (a ? ["29.35", "43.04", "56.74"].map((s, d) => '<g class="wxDrop" style="animation-delay:-' + d * 317 + 'ms"><rect class="wxAccent" x="' + s + '" y="60.65" width="5.87" height="15.65" rx="2.93" transform="rotate(12 ' + s + ' 60.65)"/></g>') : [19, 26, 33].map((s, d) => '<g class="wxDrop" style="animation-delay:-' + d * 317 + 'ms"><rect class="wxAccent" width="3.03" height="9.41" rx="1.51" transform="matrix(0.9698 0.244 -0.1768 0.9843 ' + s + ' 38)"/></g>')).join(""), vs = (a) => (a ? [[33.67, 67.67], [47.67, 64.67], [61.67, 67.67], [40.67, 77.67], [54.67, 77.67]] : [[21.2, 42.2], [29.2, 40.2], [37.2, 42.2], [25.2, 48.2], [33.2, 48.2]]).map(([s, d], m) => '<circle class="wxFlake" style="animation-delay:-' + m * 640 + 'ms" cx="' + s + '" cy="' + d + '" r="' + (a ? 3.67 : 2.2) + '" fill="#fff"/>').join("");
  function Ol(a, s, d, m) {
    return a === "clear" ? s ? $s(d ? ms.l : ms.s, m) + (d ? Ha(70, 20, 5.83, 1) + Ha(78.33, 41.67, 3.75, 0.8) + Ha(60, 71.67, 3.33, 0.6) : Ha(42, 12, 3.5, 1) + Ha(47, 25, 2.25, 0.8) + Ha(36, 43, 2, 0.6)) : Zo(m, d) : a === "partly" ? (s ? $s(d ? ms.lp : ms.sp, m) : d ? '<circle class="wxSunDisc" cx="35.22" cy="33.26" r="23.48" fill="#FFE100"/>' : '<circle class="wxSunDisc" cx="18" cy="17" r="12" fill="#FFE100"/>') + bi(d ? Ui.lp : Ui.sp, s ? "wxCloudLight" : "wxBright") + (s ? d ? Ha(73.33, 16.67, 4.17, 0.9) : Ha(44, 10, 2.5, 0.9) : "") : a === "cloudy" ? bi(d ? Ui.lc : Ui.s, s ? "wxCloudLight" : "wxBright") + (s ? d ? Ha(15, 15, 3.75, 0.8) + Ha(76.67, 13.33, 2.92, 0.6) : Ha(9, 9, 2.25, 0.8) + Ha(46, 8, 1.75, 0.6) : "") : bi(d ? Ui.lr : Ui.s, "wxCloudLight") + (a === "rain" ? Qn(d) : vs(d));
  }
  const vc = () => {
    var a;
    return ((a = Ea == null ? void 0 : Ea["sun.sun"]) == null ? void 0 : a.state) === "below_horizon";
  };
  let hn = me().weatherStyle || "bitmap", ga = me().weatherLayout === "strip" ? "strip" : "tiles", Dr = me().weatherMotion !== !1;
  const Br = () => Dr && !We(), bs = /* @__PURE__ */ new Map(), ql = 700, wd = (a) => {
    const [s, d] = a.split("/");
    return { k: s === "fog" ? "cloudy" : s === "storm" ? "rain" : s, night: d === "night" };
  };
  function ws(a, s, d, m = hn, S, B) {
    let O = bd(a);
    const Y = O === "night" || (B != null ? !!B : !!d && vc());
    O === "night" && (O = "clear");
    const wt = s ? 90 : 54, Mt = sc(a, Y), bt = performance.now();
    let mt = S ? bs.get(S) : null;
    if (S && !mt ? bs.set(S, mt = { key: Mt, t0: -1e9 }) : mt && mt.key !== Mt && (mt.fromKey = mt.key, mt.from = mt.last || null, mt.key = Mt, mt.t0 = bt), m !== "smooth") return '<span class="wxIcon pixels' + (s ? " large" : "") + '" aria-hidden="true"><canvas data-wx="' + Mt + '"' + (S ? ' data-wx-slot="' + S + '"' : "") + ' data-wx-style="' + m + '" data-wx-size="' + wt + '"></canvas></span>';
    let It = "";
    if (mt && bt - mt.t0 < ql && (Br() || We())) {
      const ee = wd(mt.fromKey);
      It = '<span class="wxLayer wxOut ' + ee.k + (ee.night ? " night" : "") + '" style="animation-delay:' + Math.round(mt.t0 - bt) + 'ms"><svg viewBox="0 0 ' + wt + " " + wt + '">' + Ol(ee.k, ee.night, s, "wxg" + ++Fl) + "</svg></span>";
    }
    return '<span class="wxIcon ' + O + (Y ? " night" : "") + (s ? " large" : "") + '" aria-hidden="true"><svg viewBox="0 0 ' + wt + " " + wt + '">' + Ol(O, Y, s, "wxg" + ++Fl) + "</svg>" + It + "</span>";
  }
  function xs() {
    const a = i("app"), s = getComputedStyle(a), d = (Y) => s.getPropertyValue(Y).trim(), m = {};
    [["skyClearDay", "--wx-clear"], ["skyClearNight", "--wx-night"], ["skyCloudyDay", "--wx-cloudy"], ["cloudDay", "--wx-cloud-bright"], ["cloudNight", "--wx-cloudy"], ["rain", "--color-accent-primary"]].forEach(([Y, wt]) => {
      d(wt) && (m[Y] = d(wt));
    });
    const S = d("--color-text-primary") || "#f1f1f1", B = d("--color-bg-card") || "#222222", O = a.classList.contains("light");
    return { colors: m, ink: O ? S : B, paper: O ? B : S };
  }
  function Yi(a, s = performance.now()) {
    const d = a.querySelectorAll("canvas[data-wx]");
    if (!d.length) return;
    const m = xs(), S = Br(), B = We();
    d.forEach((O) => {
      var mt;
      const Y = O.dataset.wx, wt = O.dataset.wxSlot ? bs.get(O.dataset.wxSlot) : null;
      let Mt = jc(Y, m.colors);
      if (wt && wt.key === Y) {
        const It = (s - wt.t0) / ql;
        It < 1 && (S || B) && (Mt = $u(wt.from || jc(wt.fromKey, m.colors), Mt, Math.max(0, It), m.colors, B)), wt.last = Mt;
      }
      const bt = ru(Mt, { size: Number(O.dataset.wxSize) || 54, px: 2, oneBit: O.dataset.wxStyle === "onebit", colors: m.colors, ink: m.ink, paper: m.paper, clock: s, idle: S });
      O.width !== bt.w && (O.width = bt.w), O.height !== bt.h && (O.height = bt.h), (mt = O.getContext("2d")) == null || mt.putImageData(new ImageData(bt.data, bt.w, bt.h), 0, 0);
    });
  }
  let Xs = null, xd = -1;
  function on(a) {
    if (Xs = null, !x) return;
    const s = Br(), d = Math.floor(a / 100), m = [...bs.values()].some((wt) => a - wt.t0 < ql), S = [...Qs.values()].some((wt) => a - wt.t0 < wt.dur), B = Ot.home.classList.contains("active"), O = rn.classList.contains("open"), Y = s && hn === "smooth" && (O || B && ga === "strip");
    !document.hidden && (m || S || Y || s && d !== xd) && (xd = d, B && (Yi(i("weatherCard"), a), Xo(i("weatherCard"), a)), O && (Yi(rn, a), Xo(rn, a))), (s || m || S) && (Xs = requestAnimationFrame(on));
  }
  function Ko() {
    i("app").classList.toggle("wxMotion", Br()), !Xs && x && (Xs = requestAnimationFrame(on));
  }
  let Wl = [];
  const va = 36e5, Vl = /* @__PURE__ */ new Set(["rainy", "pouring", "lightning", "lightning-rainy", "hail", "snowy", "snowy-rainy"]);
  function $o() {
    const a = /* @__PURE__ */ new Date(), s = (B, O) => new Date(a.getFullYear(), a.getMonth(), a.getDate() + B, O), d = [], m = [], S = [...Array(6)].map((B, O) => {
      const Y = s(O, 6), wt = s(O, 18), Mt = s(O + 1, 6), bt = Wl.find((It) => Ve(new Date(It.datetime)) === Ve(Y)), mt = (It, ee, Wt) => {
        const Ht = d.filter((xe) => xe.t >= +It && xe.t < +ee);
        if (Ht.length) {
          const xe = {};
          return Ht.forEach((Gt) => {
            xe[Gt.c] = (xe[Gt.c] || 0) + (Vl.has(Gt.c) ? 2 : 1);
          }), Object.entries(xe).sort((Gt, ke) => ke[1] - Gt[1])[0][0];
        }
        const Dt = m.find((xe) => {
          const Gt = +new Date(xe.datetime);
          return Gt >= +It - 3 * va && Gt < +ee && (xe.is_daytime == null || !!xe.is_daytime == !Wt);
        });
        if (Dt) return Dt.condition;
        const we = (bt == null ? void 0 : bt.condition) || "cloudy";
        return Wt && we === "sunny" ? "clear-night" : we;
      };
      return { start: +Y, end: +Mt, day: mt(Y, wt, !1), night: mt(wt, Mt, !0), hi: Number(bt == null ? void 0 : bt.temperature), lo: Number(bt == null ? void 0 : bt.templow) };
    });
    return { days: S, hours: d, start: S[0].start, end: S[5].end };
  }
  const yd = (a, s) => {
    const d = a.days.findIndex((S) => s < S.end);
    if (d < 0) return 1;
    const m = a.days[d];
    return Math.max(0, (d + (s - m.start) / (m.end - m.start)) / 6);
  }, bc = (a, s) => {
    const d = Math.max(0, Math.min(0.99999, s)) * 6, m = Math.floor(d), S = a.days[m];
    return S.start + (d - m) * (S.end - S.start);
  };
  function Js(a, s) {
    const d = Math.max(0, a.days.findIndex((wt) => s < wt.end)), m = a.days[d], S = (s - m.start) / (m.end - m.start) >= 0.5;
    let B = S ? m.night : m.day, O = NaN;
    const Y = a.hours;
    if (Y.length && s >= Y[0].t - va && s <= Y[Y.length - 1].t + va) {
      let wt = Y.findIndex((mt) => mt.t > s);
      wt < 0 && (wt = Y.length);
      const Mt = Y[Math.max(0, wt - 1)], bt = Y[Math.min(Y.length - 1, wt)];
      B = Mt.c || B, O = bt.t > Mt.t ? Mt.temp + (bt.temp - Mt.temp) * Math.max(0, Math.min(1, (s - Mt.t) / (bt.t - Mt.t))) : Mt.temp;
    }
    if (!Number.isFinite(O)) {
      const wt = [];
      if (a.days.forEach((Mt) => {
        Number.isFinite(Mt.lo) && wt.push([Mt.start - va, Mt.lo]), Number.isFinite(Mt.hi) && wt.push([Mt.start + 9 * va, Mt.hi]);
      }), wt.length) {
        O = s <= wt[0][0] ? wt[0][1] : wt[wt.length - 1][1];
        for (let Mt = 1; Mt < wt.length; Mt++) if (s <= wt[Mt][0] && s > wt[Mt - 1][0]) {
          const [bt, mt] = wt[Mt - 1], [It, ee] = wt[Mt];
          O = mt + (ee - mt) * (1 - Math.cos(Math.PI * (s - bt) / (It - bt))) / 2;
          break;
        }
      }
    }
    return { cond: S && B === "sunny" ? "clear-night" : B, temp: O, night: S, day: m };
  }
  const jl = (a) => Ve(new Date(a)) === Ve(/* @__PURE__ */ new Date()) ? "Today" : new Intl.DateTimeFormat(void 0, { weekday: "short" }).format(new Date(a)), Qs = /* @__PURE__ */ new Map(), kd = 900, Md = 700;
  let ys = null;
  const Tn = typeof ResizeObserver == "function" ? new ResizeObserver((a) => a.forEach((s) => {
    Xo(s.target.parentElement), s.target.closest("#wxDialog") && Ad();
  })) : null;
  function Xo(a, s = performance.now()) {
    const d = a.querySelectorAll("canvas[data-wx-strip]");
    if (!d.length) return;
    const m = $o(), S = m.days.flatMap((mt) => [{ cond: mt.day, night: !1 }, { cond: mt.night, night: !0 }]), B = S.map((mt) => mt.cond).join(), O = xs(), Y = Br(), wt = We(), Mt = Number(Ve(new Date(m.start)).replace(/\D/g, "")) % 9973;
    let bt = !1;
    d.forEach((mt) => {
      var xe;
      const It = mt.clientWidth, ee = mt.clientHeight;
      if (!It || !ee) return;
      const Wt = mt.dataset.wxStrip;
      let Ht = Qs.get(Wt);
      Ht ? Ht.sig !== B && (Ht.prev = Ht.segs, Ht.sig = B, Ht.segs = S, Ht.t0 = s, Ht.dur = Md) : Qs.set(Wt, Ht = { sig: B, segs: S, prev: null, t0: s, dur: kd });
      const Dt = Y || wt ? Math.min(1, Math.max(0, (s - Ht.t0) / Ht.dur)) : 1;
      Dt < 1 && (bt = !0);
      const we = { width: It, height: ee, colors: O.colors, clock: s, ambient: Y, seed: Mt, reveal: wt ? Dt : 1 - Math.pow(1 - Dt, 3), prev: Dt < 1 ? Ht.prev : null, reduce: wt };
      if (hn === "smooth") {
        const Gt = Math.min(2, window.devicePixelRatio || 1), ke = Math.round(It * Gt), Pe = Math.round(ee * Gt);
        mt.width !== ke && (mt.width = ke), mt.height !== Pe && (mt.height = Pe);
        const de = mt.getContext("2d");
        if (!de) return;
        de.setTransform(Gt, 0, 0, Gt, 0, 0), uf(de, S, we);
      } else {
        const Gt = pf(S, { ...we, px: 2, oneBit: hn === "onebit", ink: O.ink, paper: O.paper });
        mt.width !== Gt.w && (mt.width = Gt.w), mt.height !== Gt.h && (mt.height = Gt.h), (xe = mt.getContext("2d")) == null || xe.putImageData(new ImageData(Gt.data, Gt.w, Gt.h), 0, 0);
      }
    }), bt && Ko();
  }
  function Sd() {
    const a = i("weatherCard");
    if (!a || a.hidden) return;
    const s = nn.weather, d = s && (Ea == null ? void 0 : Ea[s]);
    if (!d) {
      a.innerHTML = '<div class="activityHeader"><div class="activityTitle">Weather</div></div><div class="activityRows"><div class="activityRow">' + ws("cloudy") + '<div><div class="activityRowName">Forecast</div><div class="activityRowMeta">' + (s ? "Not available" : "Set up in Settings") + "</div></div></div></div>", Yi(a);
      return;
    }
    const m = d.attributes || {}, S = m.temperature_unit || "°", B = (de) => Number.isFinite(Number(de)) ? Math.round(Number(de)) + "°" : "—", O = (m.friendly_name || "").replace(/^forecast\s+/i, "") || "Weather", Y = Ks[d.state] || (d.state ? d.state.charAt(0).toUpperCase() + d.state.slice(1) : "—"), wt = Ve(/* @__PURE__ */ new Date()), Mt = Wl.slice(0, 7), bt = Mt.find((de) => Ve(new Date(de.datetime)) === wt) || null, mt = Mt.filter((de) => Ve(new Date(de.datetime)) >= wt).slice(0, 6), It = /* @__PURE__ */ new Date(), ee = Ve(new Date(It.getFullYear(), It.getMonth(), It.getDate() + 1)), Wt = bt ? "H " + B(bt.temperature) + "&ensp; L " + B(bt.templow) : "", Ht = (de) => {
      const re = Ve(new Date(de.datetime));
      return re === wt ? "Today" : re === ee ? "Tomorrow" : new Intl.DateTimeFormat(void 0, { weekday: "short" }).format(new Date(de.datetime));
    }, Dt = Number.isFinite(Number(m.temperature)) ? Math.round(Number(m.temperature)) : "—", we = (de) => {
      const re = new Date(de.datetime);
      return Math.round((new Date(re.getFullYear(), re.getMonth(), re.getDate()) - new Date(It.getFullYear(), It.getMonth(), It.getDate())) / 864e5);
    }, xe = (de) => (Ks[de] || de || "").toLowerCase(), Gt = (de, re) => '<div class="activityRow wxDayTile" role="button" tabindex="0" data-wx-day="' + we(de) + '" aria-label="' + ne(Ht(de) + ": " + xe(de.condition) + ", " + B(de.temperature) + " / " + B(de.templow) + ". Open the forecast") + '">' + ws(de.condition, !1, !1, hn, "day" + re) + '<div><div class="activityRowName">' + ne(Ht(de)) + '</div><div class="activityRowMeta">' + B(de.temperature) + " / " + B(de.templow) + "</div></div></div>", ke = () => '<div class="wxStrip"><div class="wxStripDays">' + $o().days.map((re, ka) => {
      const Xe = new Intl.DateTimeFormat(void 0, { weekday: "long" }).format(new Date(re.start)) + ": " + xe(re.day) + (xe(re.day) === xe(re.night) ? " all day and night" : ", then " + xe(re.night) + " overnight") + (Number.isFinite(re.hi) ? ". High " + B(re.hi) : "") + (Number.isFinite(re.lo) ? ", low " + B(re.lo) : "") + ". Open the forecast";
      return '<div class="wxStripDay" role="button" tabindex="0" data-wx-day="' + ka + '" aria-label="' + ne(Xe) + '"><span class="wxDayName">' + ne(jl(re.start)) + '</span><span class="wxStripGap" aria-hidden="true"></span><span class="wxTemps" aria-hidden="true"><span class="wxHigh">' + B(re.hi) + '</span><span class="wxLow">' + B(re.lo) + "</span></span></div>";
    }).join("") + '</div><canvas class="wxStripSky" data-wx-strip="inline" aria-hidden="true"></canvas></div>';
    a.innerHTML = '<div class="wxWide"><div class="wxNow" role="button" tabindex="0" data-wx-open="now" aria-label="' + ne("Now in " + O + ": " + Dt + "°, " + xe(d.state) + ". Open the forecast") + '"><div class="wxCurrent">' + ws(d.state, !0, !0, hn, "now") + '<div class="wxTempBlock"><div class="wxTemp"><span class="wxDeg">' + ne(String(Dt)) + '</span><span class="wxUnit">' + ne(S) + '</span></div><div class="wxPlace">' + ne(O) + '</div></div></div><div class="wxCondition"><div class="wxCondName">' + ne(Y) + "</div>" + (Wt ? '<div class="wxRange">' + Wt + "</div>" : "") + "</div></div>" + // the days are tiles under Now, like every card of readings (Figma "Weather in halves · proposal"), or the sky strip
    (mt.length ? ga === "strip" ? ke() : '<div class="activityRows wxDays">' + mt.map(Gt).join("") + "</div>" : '<div class="wxNoDays">Loading the forecast…</div>') + "</div>", Yi(a);
    const Pe = a.querySelector("canvas[data-wx-strip]");
    ys && ys !== Pe && (Tn == null || Tn.unobserve(ys)), ys = Pe, Pe && (Tn == null || Tn.observe(Pe), Xo(a)), Ko(), Ld();
  }
  const tl = i("weatherCard"), Cd = (a) => {
    const s = a.closest("[data-wx-day]");
    if (s) {
      const m = /* @__PURE__ */ new Date();
      Td(+new Date(m.getFullYear(), m.getMonth(), m.getDate() + Number(s.dataset.wxDay), 12), s);
      return;
    }
    const d = a.closest("[data-wx-open]");
    d && Td(Date.now(), d);
  };
  tl.addEventListener("click", (a) => Cd(a.target)), tl.addEventListener("keydown", (a) => {
    (a.key === "Enter" || a.key === " ") && a.target.matches("[data-wx-day],[data-wx-open]") && (a.preventDefault(), Cd(a.target));
  });
  const rn = i("wxDialog"), zn = i("wxGraph"), Rr = i("wxGraphWrap");
  let _a = Date.now(), wi = null, ks = !1, xi = null;
  function Td(a, s) {
    const d = $o();
    wi = s || null, _a = Math.max(d.start, Math.min(d.end - va, a)), Qs.delete("dialog"), bs.delete("scrub"), rn.classList.add("open"), rn.setAttribute("aria-hidden", "false"), Ld(), Tn == null || Tn.observe(rn.querySelector("canvas[data-wx-strip]")), zn.focus({ preventScroll: !0 }), Ko();
  }
  function sa() {
    var a;
    rn.classList.remove("open"), rn.setAttribute("aria-hidden", "true"), Tn == null || Tn.unobserve(rn.querySelector("canvas[data-wx-strip]")), (a = wi == null ? void 0 : wi.focus) == null || a.call(wi, { preventScroll: !0 }), wi = null;
  }
  function Ld() {
    if (!rn.classList.contains("open")) return;
    const a = $o();
    i("wxGraphDays").innerHTML = a.days.map((s) => "<span>" + ne(jl(s.start)) + "</span>").join(""), Ad(a), Jo(a), Xo(rn);
  }
  function Jo(a = $o()) {
    const s = Js(a, _a), d = Ea == null ? void 0 : Ea[nn.weather], m = (d == null ? void 0 : d.attributes) || {}, S = m.temperature_unit || "°", B = Math.abs(_a - Date.now()) < va / 2, O = B && d ? d.state : s.cond, Y = B && Number.isFinite(Number(m.temperature)) ? Math.round(Number(m.temperature)) : Number.isFinite(s.temp) ? Math.round(s.temp) : "—", wt = Ks[O] || (O ? O.charAt(0).toUpperCase() + O.slice(1) : "—"), Mt = B ? "Now" : new Intl.DateTimeFormat(void 0, { weekday: "short", hour: "2-digit", minute: "2-digit" }).format(new Date(Math.round(_a / va) * va)), bt = s.day, mt = (Number.isFinite(bt.hi) ? "H " + Math.round(bt.hi) + "°" : "") + (Number.isFinite(bt.lo) ? "&ensp; L " + Math.round(bt.lo) + "°" : "");
    i("wxDialogNow").innerHTML = '<div class="wxCurrent">' + ws(O, !0, B, hn, "scrub", B ? void 0 : s.night) + '<div class="wxTempBlock"><div class="wxTemp"><span class="wxDeg">' + ne(String(Y)) + '</span><span class="wxUnit">' + ne(S) + '</span></div><div class="wxPlace">' + ne(Mt) + '</div></div></div><div class="wxCondition"><div class="wxCondName">' + ne(wt) + "</div>" + (mt ? '<div class="wxRange">' + mt + "</div>" : "") + "</div>", Yi(i("wxDialogNow")), zn.setAttribute("aria-valuenow", String(Math.round((_a - a.start) / va))), zn.setAttribute("aria-valuetext", Mt + ", " + wt.toLowerCase() + ", " + Y + "°"), zl(a), Ko();
  }
  function Ad(a = $o()) {
    const s = i("wxGraphLine"), d = Rr.clientWidth, m = Rr.clientHeight;
    if (!d || !m) return;
    const S = [];
    for (let Dt = a.start; Dt <= a.end; Dt += va) {
      const we = Js(a, Dt).temp;
      Number.isFinite(we) && S.push([yd(a, Dt) * d, we]);
    }
    if (s.setAttribute("viewBox", "0 0 " + d + " " + m), S.length < 2) {
      s.innerHTML = '<g id="wxCursorMark"></g>', xi = null, zl(a);
      return;
    }
    const B = S.map((Dt) => Dt[1]), O = Math.min(...B), Y = Math.max(...B), wt = Math.max(4, Y - O), Mt = hn !== "smooth", bt = (Dt) => Mt ? Math.round(Dt / 2) * 2 : Math.round(Dt * 10) / 10;
    xi = (Dt) => m * 0.84 - (Dt - O) / wt * m * 0.62;
    const mt = xs(), It = hn === "onebit" ? mt.paper : "#ffffff", ee = hn === "onebit" ? mt.ink : "rgba(0,0,0,.28)", Wt = "M" + S.map((Dt) => bt(Dt[0]) + " " + bt(xi(Dt[1]))).join(" L"), Ht = (Dt, we) => {
      const xe = S.find((Gt) => Gt[1] === Dt);
      return '<text class="wxLineLabel" x="' + bt(Math.min(d - 14, Math.max(14, xe[0]))) + '" y="' + bt(xi(Dt) + (we ? 18 : -10)) + '" fill="' + It + '" stroke="' + ee + '">' + Math.round(Dt) + "°</text>";
    };
    s.setAttribute("shape-rendering", Mt ? "crispEdges" : "auto"), s.innerHTML = '<path d="' + Wt + '" fill="none" stroke="' + ee + '" stroke-width="' + (Mt ? 4 : 5) + '" stroke-linejoin="round"/><path d="' + Wt + '" fill="none" stroke="' + It + '" stroke-width="2" stroke-linejoin="round"/>' + Ht(Y, !1) + Ht(O, !0) + '<g id="wxCursorMark"></g>', zl(a);
  }
  function zl(a = $o()) {
    const s = i("wxGraphLine").querySelector("#wxCursorMark");
    if (!s) return;
    const d = Rr.clientWidth, m = Rr.clientHeight, S = hn !== "smooth", B = (It) => S ? Math.round(It / 2) * 2 : It, O = B(yd(a, _a) * d), Y = Js(a, _a).temp, wt = xs(), Mt = hn === "onebit" ? wt.paper : "#ffffff", bt = hn === "onebit" ? wt.ink : "rgba(0,0,0,.28)", mt = xi && Number.isFinite(Y) ? B(xi(Y)) : null;
    s.innerHTML = '<rect x="' + (O - 2) + '" y="0" width="4" height="' + m + '" fill="' + bt + '"/><rect x="' + (O - 1) + '" y="0" width="2" height="' + m + '" fill="' + Mt + '"/>' + (mt == null ? "" : S ? '<rect x="' + (O - 5) + '" y="' + (mt - 5) + '" width="10" height="10" fill="' + Mt + '" stroke="' + bt + '" stroke-width="2"/>' : '<circle cx="' + O + '" cy="' + mt + '" r="6" fill="' + Mt + '" stroke="' + bt + '" stroke-width="2"/>');
  }
  const zt = (a) => {
    const s = Rr.getBoundingClientRect();
    s.width && (_a = bc($o(), (a - s.left) / s.width), Jo());
  };
  zn.addEventListener("pointerdown", (a) => {
    if (a.button === 0) {
      ks = !0;
      try {
        zn.setPointerCapture(a.pointerId);
      } catch {
      }
      zt(a.clientX);
    }
  }), zn.addEventListener("pointermove", (a) => {
    ks && zt(a.clientX);
  }), ["pointerup", "pointercancel", "lostpointercapture"].forEach((a) => zn.addEventListener(a, () => {
    ks = !1;
  })), zn.addEventListener("keydown", (a) => {
    const s = $o(), d = { ArrowLeft: -va, ArrowRight: va, ArrowDown: -va, ArrowUp: va, PageUp: -24 * va, PageDown: 24 * va }[a.key];
    d ? (a.preventDefault(), _a = Math.max(s.start, Math.min(s.end - va, Math.round(_a / va) * va + d)), Jo(s)) : (a.key === "Home" || a.key === "End") && (a.preventDefault(), _a = a.key === "Home" ? s.start : s.end - va, Jo(s));
  }), i("wxDialogClose").addEventListener("click", sa), rn.addEventListener("click", (a) => {
    a.target === rn && sa();
  }), rn.addEventListener("keydown", (a) => {
    a.key === "Escape" && (a.preventDefault(), sa());
  }), Sd(), (Cs = (nl = window.matchMedia) == null ? void 0 : (ol = nl.call(window, "(prefers-reduced-motion: reduce)")).addEventListener) == null || Cs.call(ol, "change", () => {
    Ko(), Yi(n);
  }), Ko();
  const Gn = i("tvNav");
  l.fullscreenSupported || (Gn.hidden = !0), Gn.addEventListener("click", () => l.toggleFullscreen()), n.addEventListener("keydown", (a) => {
    !Ot.workout.classList.contains("active") || Qr.classList.contains("active") || a.target.closest("input,select,textarea,.holdEnd") || (a.key === "MediaPlayPause" || a.key === " " && !a.target.closest("button") ? (a.preventDefault(), Os.click()) : a.key === "MediaTrackNext" ? (a.preventDefault(), i("skipExercise").click()) : a.key === "MediaTrackPrevious" && (a.preventDefault(), i("restartSegment").click()));
  }), n.querySelectorAll("[data-rounds-step]").forEach((a) => a.addEventListener("click", () => {
    const s = Math.max(1, Math.min(10, (Number(ae.value) || 1) + Number(a.dataset.roundsStep)));
    String(s) !== ae.value && (ae.value = s, ae.dispatchEvent(new Event("input", { bubbles: !0 })));
  })), [R, q, D, ae].forEach((a) => a.addEventListener("input", () => {
    const s = ue[Me];
    s && (s.total = Number(R.value), s.work = Number(q.value), s.rest = Number(D.value)), qe();
  })), it.addEventListener("click", os), Zt.addEventListener("click", () => L("settings")), i("settingsBack").addEventListener("click", os), Os.addEventListener("click", () => ya(!Pt)), ze(Me), $e(), ta(), Cn(), i("healthHelpOpen").addEventListener("click", () => n.querySelector(".tab[data-pane=helpPane]").click()), zi(i("resetStats"), i("resetStatsFill"), 1500, () => {
    Ut.history = [], Ut.checkins = [], oe = "";
    try {
      localStorage.removeItem("move-assistant-dismissed");
    } catch {
    }
    wn(), wo(), ta(), $e(), Cn(), Ee(), Be("Stats reset");
  });
  const Ms = i("morningTime"), Zi = i("eveningTime"), Gl = i("checkinAutoOpen");
  Ms.value = co().morning, Zi.value = co().evening, Gl.classList.toggle("on", me().checkinAutoOpen !== !1), [["morningTime", Ms], ["eveningTime", Zi]].forEach(([a, s]) => s.addEventListener("change", () => {
    s.value && (be(a, s.value), Ee());
  })), Gl.addEventListener("click", () => {
    const a = me().checkinAutoOpen === !1;
    Gl.classList.toggle("on", a), be("checkinAutoOpen", a);
  }), setTimeout(Nt, 800);
  const Da = i("checkinNotify"), Ss = i("checkinNotifyTarget"), el = i("checkinNotifyStatus"), xo = el.textContent;
  function Ed() {
    const a = l.notifyServices(), s = a.filter((S) => S.startsWith("mobile_app_")), d = s.length ? s : a, m = (S) => S.replace(/^mobile_app_/, "").replace(/_/g, " ");
    Ss.innerHTML = d.map((S) => '<option value="' + ne(S) + '">' + ne(m(S)) + "</option>").join(""), !me().notifyTarget && d[0] && (me().notifyTarget = d[0]), Ss.value = me().notifyTarget || "";
  }
  function al() {
    const a = !!me().notifyOn;
    Da.classList.toggle("on", a), i("checkinNotifyTargetRow").hidden = !a;
    const s = co();
    el.textContent = a ? "Sends at " + s.morning + " and " + s.evening : xo;
  }
  async function Ul() {
    const a = !!me().notifyOn;
    try {
      return await l.setReminderAutomation(a ? { target: me().notifyTarget, times: co() } : null), !0;
    } catch {
      return Be("Couldn't update the reminder in Home Assistant"), !1;
    }
  }
  Da.addEventListener("click", async () => {
    const a = !me().notifyOn;
    if (a && (Ed(), !me().notifyTarget)) {
      Be("Install the Companion app on your phone first");
      return;
    }
    me().notifyOn = a, al(), await Ul() ? (wn(), Be(a ? "Check-in notifications on" : "Check-in notifications off")) : (me().notifyOn = !a, al());
  }), Ss.addEventListener("change", () => {
    be("notifyTarget", Ss.value), me().notifyOn && Ul();
  }), [Ms, Zi].forEach((a) => a.addEventListener("change", () => {
    al(), me().notifyOn && Ul();
  })), Ed(), al();
  let Yl = null;
  function _d() {
    Yl || (Yl = setTimeout(() => {
      Yl = null, Cn();
    }, 3e4));
  }
  return {
    updateStates(a) {
      var d, m;
      const s = !Ea || Ea[nn.weather] !== a[nn.weather] || ((d = Ea["sun.sun"]) == null ? void 0 : d.state) !== ((m = a["sun.sun"]) == null ? void 0 : m.state);
      Ea = a, Il(a), jn(a), s && Sd(), Date.now() - Us > 60 * 60 * 1e3 && Ys(), _d();
    },
    applyRemoteData(a) {
      if (a && (Array.isArray(a.history) && (Ut.history = a.history, wo()), Array.isArray(a.history) && Cn(), Array.isArray(a.checkins) && (Ut.checkins = a.checkins.map(Wr), Ee(), $e(), ta(), wo(), Cn()), a.profiles && !Xa.classList.contains("open") && !qa)) {
        const s = fe(a);
        Object.keys(ue).forEach((d) => delete ue[d]), Object.assign(ue, s.profiles), Ut.order = s.order, ue[Me] || (Me = Ut.order[0]), pa(), ze(Me);
      }
    },
    suspend() {
      x = !1;
    },
    resume() {
      x || (x = !0, ci || (ci = requestAnimationFrame(Is)), wr || (wr = requestAnimationFrame(Fs)), Ko(), Er(n.querySelector(".tab.active"), !1));
    }
  };
}
const mf = /* @__PURE__ */ new Set(["roaming", "test_area"]), gf = {
  living_room: { climate: !0, cover: ["Curtains", "curtain", 62], temperature: 20.5, humidity: 44, motion: "Living room motion", plant: ["Monstera", 32, 4200, 21.4, 580] },
  kitchen: { temperature: 21.2, humidity: 48, door: "Back door", plant: ["Basil", 55, 900, 22.1, 910] },
  balcony: { solar: !0, door: "Balcony door", doorOpen: !0, valve: "Watering", plant: ["Tomatoes", 61, 18500, 14.2, 1240] },
  bedroom: { cover: ["Roller blind", "shade", 0], humidifier: !0, temperature: 18.9, humidity: 38, window: "Bedroom window" },
  office: { cover: ["Blinds", "blind", 60, 45], vacuum: !0, temperature: 21.8, humidity: 41, plant: ["Pothos", 47, 2600, 21.6, 640] },
  bathroom: { temperature: 22.4, humidity: 62 }
}, Ts = { moisture: [40, 70], light: [1500, 6e4], temperature: [10, 32], fertility: [350, 2e3] }, Ia = "made_up_", ki = (n) => {
  var l;
  return (l = String(n).split(".")[1]) == null ? void 0 : l.startsWith(Ia);
}, Fd = (n) => n.toLowerCase().replace(/[^a-z0-9]+/g, "_");
function Xc(n) {
  const l = n.getHours() + n.getMinutes() / 60, i = Math.max(0, Math.sin((l - 7) / 13 * Math.PI));
  return 2.4 * i * i;
}
function vf(n) {
  const l = new Date(n.getFullYear(), n.getMonth(), n.getDate());
  let i = 0;
  for (let u = +l; u < +n; u += 10 * 60 * 1e3) i += Xc(new Date(u)) / 6;
  return i;
}
function np(n = /* @__PURE__ */ new Date()) {
  const l = [];
  for (let i = 0; i <= 96; i++) {
    const u = +n - (96 - i) * 15 * 60 * 1e3;
    l.push([u, Xc(new Date(u))]);
  }
  return l;
}
function bf({ onChange: n }) {
  const l = {}, i = {}, u = (X, G, ht, dt) => {
    l[X] = { entity_id: X, state: ht, attributes: dt, last_changed: new Date(Date.now() - 18e6).toISOString() }, i[X] = G;
  }, g = (X, G, ht) => {
    const dt = l[X], kt = G ?? dt.state;
    l[X] = { ...dt, state: kt, attributes: { ...dt.attributes, ...ht }, last_changed: kt === dt.state ? dt.last_changed : (/* @__PURE__ */ new Date()).toISOString() };
  }, x = (X, G, ht, dt) => u("binary_sensor." + Ia + (X ? X + "_" : "") + Fd(G), X, dt ? "on" : "off", { friendly_name: G, device_class: ht });
  Object.entries(gf).forEach(([X, G]) => {
    if (G.temperature != null && u("sensor." + Ia + X + "_temperature", X, String(G.temperature), { friendly_name: "Temperature", device_class: "temperature", state_class: "measurement", unit_of_measurement: "°C" }), G.humidity != null && u("sensor." + Ia + X + "_humidity", X, String(G.humidity), { friendly_name: "Humidity", device_class: "humidity", state_class: "measurement", unit_of_measurement: "%" }), G.vacuum && u("vacuum." + Ia + "robot", X, "docked", { friendly_name: "Robot vacuum", battery_level: 100, fan_speed: "standard", rooms: [] }), G.climate && u("climate." + Ia + X, X, "heat", { friendly_name: "Thermostat", hvac_modes: ["off", "heat", "cool", "auto"], hvac_action: "heating", current_temperature: G.temperature, temperature: 21, min_temp: 7, max_temp: 30, target_temp_step: 0.5 }), G.cover) {
      const [ht, dt, kt, ot] = G.cover;
      u("cover." + Ia + X + "_" + Fd(ht), X, kt ? "open" : "closed", { friendly_name: ht, device_class: dt, current_position: kt, ...ot != null ? { current_tilt_position: ot } : {} });
    }
    if (G.humidifier && u("humidifier." + Ia + X, X, "on", { friendly_name: "Humidifier", device_class: "humidifier", humidity: 45, current_humidity: G.humidity, action: "humidifying", mode: "normal", available_modes: ["normal", "eco", "sleep", "boost"], min_humidity: 30, max_humidity: 70 }), G.solar && (u("sensor." + Ia + X + "_solar_power", X, "0", { friendly_name: "Solar now", device_class: "power", state_class: "measurement", unit_of_measurement: "kW" }), u("sensor." + Ia + X + "_solar_today", X, "0", { friendly_name: "Solar today", device_class: "energy", state_class: "total_increasing", unit_of_measurement: "kWh" })), G.valve && u("valve." + Ia + X + "_" + Fd(G.valve), X, "closed", { friendly_name: G.valve, device_class: "water" }), G.door && x(X, G.door, "door", G.doorOpen), G.window && x(X, G.window, "window", !1), G.motion && x(X, G.motion, "motion", !1), G.plant) {
      const [ht, dt, kt, ot, nt] = G.plant, at = Ia + Fd(ht), E = (st, Ot, it, Zt, L) => u("sensor." + at + "_" + st, X, String(it), { friendly_name: Ot, device_class: L, state_class: "measurement", unit_of_measurement: Zt, plant_low: it < Ts[st][0], plant_high: it > Ts[st][1], icon: { moisture: "mdi:water", light: "mdi:white-balance-sunny", temperature: "mdi:thermometer", fertility: "mdi:emoticon-poop" }[st] });
      E("moisture", "Moisture", dt, "%", "moisture"), E("light", "Light", kt, "lx", "illuminance"), E("temperature", "Temperature", ot, "°C", "temperature"), E("fertility", "Fertility", nt, "µS/cm", "conductivity");
      const Ct = Object.entries({ moisture: dt, light: kt, temperature: ot, fertility: nt }).filter(([st, Ot]) => Ot < Ts[st][0] || Ot > Ts[st][1]).map(([st, Ot]) => st + (Ot < Ts[st][0] ? " low" : " high"));
      u("plant." + at, X, Ct.length ? "problem" : "ok", { friendly_name: ht, moisture: dt, brightness: kt, temperature: ot, conductivity: nt, problem: Ct.join(", ") || "none" });
    }
  }), u("alarm_control_panel." + Ia + "house", null, "disarmed", { friendly_name: "Alarm", supported_features: 7, code_format: null, changed_by: "Matt" }), x(null, "Front door", "door", !1), x(null, "Smoke alarm", "smoke", !1), u("sensor." + Ia + "doorbell", null, "", { friendly_name: "Doorbell", device_class: "timestamp", rang: Date.now() - 47 * 60 * 1e3 });
  const k = {}, A = {};
  let I = null;
  function M() {
    const X = /* @__PURE__ */ new Date();
    Object.keys(l).forEach((G) => {
      G.endsWith("_solar_power") && (l[G] = { ...l[G], state: Xc(X).toFixed(2) }), G.endsWith("_solar_today") && (l[G] = { ...l[G], state: vf(X).toFixed(1) });
    });
  }
  M();
  let W = 0;
  function F() {
    let X = !1;
    const G = ++W % 10 === 0, ht = (ot, nt, at) => {
      g(ot, nt, at), X = !0;
    };
    Object.entries(k).forEach(([ot, nt]) => {
      const at = l[ot].attributes.current_position, E = at < nt ? Math.min(nt, at + 10) : Math.max(nt, at - 10);
      E === nt && delete k[ot], ht(ot, E === nt ? E === 0 ? "closed" : "open" : nt > at ? "opening" : "closing", { current_position: E });
    }), Object.entries(A).forEach(([ot, nt]) => {
      const at = l[ot].attributes.current_tilt_position, E = at < nt ? Math.min(nt, at + 25) : Math.max(nt, at - 25);
      E === nt && delete A[ot], ht(ot, null, { current_tilt_position: E });
    }), Object.keys(l).filter((ot) => ot.startsWith("climate.")).forEach((ot) => {
      const nt = l[ot], at = nt.attributes, E = at.current_temperature, Ct = (nt.state === "heat" || nt.state === "auto") && E < at.temperature - 0.05, st = (nt.state === "cool" || nt.state === "auto") && E > at.temperature + 0.05, Ot = nt.state === "off" ? "off" : Ct ? "heating" : st ? "cooling" : "idle", it = G ? Math.round((E + (Ct ? 0.1 : st ? -0.1 : 0)) * 10) / 10 : E;
      (it !== E || Ot !== at.hvac_action) && ht(ot, null, { current_temperature: it, hvac_action: Ot });
    }), Object.keys(l).filter((ot) => ot.startsWith("humidifier.")).forEach((ot) => {
      const nt = l[ot], at = nt.attributes, E = at.current_humidity, Ct = nt.state === "on" && E < at.humidity, st = Ct && G ? E + 1 : E, Ot = nt.state !== "on" ? "off" : Ct ? "humidifying" : "idle";
      if (st !== E || Ot !== at.action) {
        ht(ot, null, { current_humidity: st, action: Ot });
        const it = "sensor." + Ia + i[ot] + "_humidity";
        l[it] && ht(it, String(st));
      }
    });
    const dt = l["vacuum." + Ia + "robot"], kt = dt.attributes;
    dt.state === "cleaning" && G && ht(dt.entity_id, null, { battery_level: Math.max(5, kt.battery_level - 1) }), dt.state === "returning" && ht(dt.entity_id, "docked", {}), dt.state === "docked" && kt.battery_level < 100 && ht(dt.entity_id, null, { battery_level: Math.min(100, kt.battery_level + 2) }), I && Date.now() - I.at > 5e3 && (ht("alarm_control_panel." + Ia + "house", "armed_" + I.mode, {}), I = null), X && n();
  }
  const V = setInterval(F, 1e3), z = setInterval(() => {
    M(), n();
  }, 60 * 1e3);
  function pt(X, G, ht) {
    const dt = ht == null ? void 0 : ht.entity_id;
    if (!l[dt]) return !1;
    const kt = l[dt], ot = kt.attributes, nt = (at, E) => g(dt, at, E);
    if (X === "climate" && (G === "set_temperature" && nt(null, { temperature: Math.max(ot.min_temp, Math.min(ot.max_temp, ht.temperature)) }), G === "set_hvac_mode" && nt(ht.hvac_mode, ht.hvac_mode === "off" ? { hvac_action: "off" } : {}), G === "toggle" && nt(kt.state === "off" ? "heat" : "off", kt.state === "off" ? {} : { hvac_action: "off" })), X === "cover") {
      const at = G === "open_cover" ? 100 : G === "close_cover" ? 0 : G === "set_cover_position" ? ht.position : G === "toggle" ? ot.current_position > 0 ? 0 : 100 : null;
      G === "stop_cover" && (delete k[dt], delete A[dt], nt(ot.current_position === 0 ? "closed" : "open")), at != null && at !== ot.current_position && (k[dt] = at, nt(at > ot.current_position ? "opening" : "closing"));
      const E = G === "open_cover_tilt" ? 100 : G === "close_cover_tilt" ? 0 : G === "set_cover_tilt_position" ? ht.tilt_position : null;
      G === "stop_cover_tilt" && delete A[dt], E != null && ot.current_tilt_position != null && E !== ot.current_tilt_position && (A[dt] = E);
    }
    if (X === "humidifier" && (G === "set_humidity" && nt(null, { humidity: Math.max(ot.min_humidity, Math.min(ot.max_humidity, ht.humidity)) }), G === "set_mode" && nt(null, { mode: ht.mode }), G === "turn_on" || G === "turn_off" || G === "toggle")) {
      const at = G === "turn_on" || G === "toggle" && kt.state !== "on";
      nt(at ? "on" : "off", { action: at ? "idle" : "off" });
    }
    if (X === "vacuum" && (G === "start" && nt("cleaning", { rooms: ht.rooms || ot.rooms }), G === "pause" && nt("paused"), G === "return_to_base" && nt("returning", { rooms: [] }), G === "locate" && nt(null, { located: Date.now() }), G === "set_rooms" && nt(null, { rooms: ht.rooms })), X === "valve") {
      const at = G === "open_valve" || G === "toggle" && kt.state !== "open";
      ["open_valve", "close_valve", "toggle"].includes(G) && nt(at ? "open" : "closed");
    }
    if (X === "alarm_control_panel") {
      G === "alarm_disarm" && (I = null, nt("disarmed", { changed_by: "Matt" }));
      const at = { alarm_arm_home: "home", alarm_arm_away: "away", alarm_arm_night: "night" }[G];
      at && (I = { mode: at, at: Date.now() }, nt("arming", { changed_by: "Matt" }));
    }
    return n(), !0;
  }
  function et(X, { madeUp: G = !0 } = {}) {
    const ht = G ? l : {}, dt = (X == null ? void 0 : X.states) || {}, kt = (X == null ? void 0 : X.entities) || {}, ot = (X == null ? void 0 : X.devices) || {}, nt = (lt) => {
      var gt;
      const ut = kt[lt];
      return ut && (ut.area_id || ut.device_id && ((gt = ot[ut.device_id]) == null ? void 0 : gt.area_id)) || null;
    }, at = (lt) => {
      const ut = kt[lt];
      return dt[lt] && dt[lt].state !== "unavailable" && !(ut != null && ut.hidden) && !(ut != null && ut.entity_category);
    }, E = {};
    Object.keys(dt).forEach((lt) => {
      const ut = nt(lt);
      ut && at(lt) && (E[ut] || (E[ut] = [])).push(lt);
    });
    const Ct = { ...dt, ...ht }, st = (lt) => {
      var ut, gt;
      return (gt = (ut = Ct[lt]) == null ? void 0 : ut.attributes) == null ? void 0 : gt.device_class;
    }, Ot = ["door", "window", "garage_door", "opening", "motion", "occupancy", "smoke", "gas"], it = Object.keys(dt).filter((lt) => lt.startsWith("vacuum.") && at(lt)), Zt = Object.values((X == null ? void 0 : X.areas) || {}).filter((lt) => !mf.has(lt.area_id)).map((lt) => {
      const ut = lt.area_id, gt = E[ut] || [], St = (Xt) => gt.filter((ce) => ce.startsWith(Xt + ".")), Lt = (Xt) => St("sensor").filter((ce) => st(ce) === Xt), $t = (Xt) => Object.keys(ht).filter((ce) => i[ce] === ut && Xt(ce)), ae = (Xt, ce) => Xt.length ? Xt : $t(ce), Fa = ae(Lt("temperature"), (Xt) => Xt.endsWith(ut + "_temperature")), qt = ae(Lt("humidity"), (Xt) => Xt.endsWith(ut + "_humidity")), eo = Lt("power").filter((Xt) => /^(W|kW)$/.test(Ct[Xt].attributes.unit_of_measurement || "")), Nn = St("binary_sensor").filter((Xt) => st(Xt) === "moisture"), ao = ae(St("plant"), (Xt) => Xt.startsWith("plant.")).map((Xt) => ({ id: Xt, readings: $t((ce) => ce.startsWith("sensor." + Xt.split(".")[1] + "_")) })), Qe = [...St("binary_sensor").filter((Xt) => Ot.includes(st(Xt))), ...$t((Xt) => Xt.startsWith("binary_sensor."))];
      return {
        id: ut,
        name: lt.name,
        icon: lt.icon,
        readings: [...Fa.slice(0, 1), ...qt.slice(0, 1), ...Nn],
        power: eo.length ? eo.reduce((Xt, ce) => Xt + Number(Ct[ce].state) * (Ct[ce].attributes.unit_of_measurement === "kW" ? 1e3 : 1), 0) : null,
        plugs: St("switch"),
        lights: St("light"),
        actions: [...St("light"), ...ae(St("climate"), (Xt) => Xt.startsWith("climate.")), ...ae(St("cover"), (Xt) => Xt.startsWith("cover.")), ...ae(St("humidifier"), (Xt) => Xt.startsWith("humidifier.")), ...ae(St("valve"), (Xt) => Xt.startsWith("valve.")), ...St("media_player"), ...St("vacuum"), ...it.length ? [] : $t((Xt) => Xt.startsWith("vacuum."))],
        solar: $t((Xt) => Xt.includes("_solar_")),
        plants: ao,
        openings: Qe,
        alerts: [...Nn, ...Qe].filter((Xt) => {
          var ce;
          return ((ce = Ct[Xt]) == null ? void 0 : ce.state) === "on";
        })
      };
    }).filter((lt) => lt.readings.length || lt.plugs.length || lt.actions.length || lt.solar.length || lt.plants.length), L = Object.keys(dt).find((lt) => /^sensor\..*(p1_meter_power|grid_power)$/.test(lt) && dt[lt].state !== "unavailable") || null, R = (lt) => Object.keys(dt).filter((ut) => ut.startsWith(lt + ".") && at(ut)), q = R("alarm_control_panel"), D = it.length ? it : G ? ["vacuum." + Ia + "robot"] : [];
    return {
      states: Ct,
      rooms: Zt,
      grid: L,
      // any device's room, hidden ones too (Maintenance's batteries are mostly diagnostic)
      areaOf: (lt) => ht[lt] ? i[lt] : nt(lt),
      vacuums: D,
      homeVacuums: D.filter((lt) => !Zt.some((ut) => ut.actions.includes(lt))),
      security: {
        alarms: q.length ? q : G ? ["alarm_control_panel." + Ia + "house"] : [],
        locks: R("lock"),
        openings: [...Object.keys(ht).filter((lt) => lt.startsWith("binary_sensor.")), ...G ? ["sensor." + Ia + "doorbell"] : []]
      }
    };
  }
  return { model: et, call: pt, stop() {
    clearInterval(V), clearInterval(z);
  } };
}
const er = (n) => n < 0 ? 0 : n > 1 ? 1 : n, zc = (n) => {
  const l = String(n || "#000000").trim().replace("#", ""), i = l.length === 3 ? l.split("").map((u) => u + u).join("") : l;
  return [0, 2, 4].map((u) => parseInt(i.slice(u, u + 2), 16) || 0);
}, wf = (n) => "#" + n.map((l) => Math.round(Math.max(0, Math.min(255, l))).toString(16).padStart(2, "0")).join(""), op = {}, So = (n, l, i) => {
  const u = n + l + i;
  return op[u] || (op[u] = wf(zc(n).map((g, x) => g + (zc(l)[x] - g) * i)));
}, ip = {}, Jd = (n) => ip[n] || (ip[n] = zc(n));
function xf(n) {
  const l = { clear: [n.skyClearDay, n.skyClearNight], cloudy: [n.skyCloudyDay, n.skyCloudyNight], rain: [n.skyRainDay, n.skyRainNight], snow: [n.skySnowDay, n.skySnowNight], fog: [n.skyFogDay, n.skyFogNight] };
  return l.partly = [So(l.clear[0], l.cloudy[0], 0.12), So(l.clear[1], l.cloudy[1], 0.12)], l.storm = [So(l.rain[0], "#000000", 0.22), So(l.rain[1], "#000000", 0.22)], l;
}
const yf = [
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
], Qi = (n, l) => (yf[(l & 7) * 8 + (n & 7)] + 0.5) / 64, cu = 1, pu = 2, uu = 3, fu = 4, cl = 5, nc = 6, Gc = 7, hu = 8, rp = (n, l) => l <= 0.6665 && ((n - 0.5) * (n - 0.5) + (l - 0.2877) * (l - 0.2877) <= 0.0824 || (n - 0.25) * (n - 0.25) + (l - 0.416) * (l - 0.416) <= 0.0625 || (n - 0.791) * (n - 0.791) + (l - 0.458) * (l - 0.458) <= 0.0437 || n >= 0.25 && n <= 0.791 && l >= 0.416), kf = (n, l, i) => {
  let u = !1;
  for (let g = 0, x = n.length - 1; g < n.length; x = g++) {
    const k = n[g], A = n[x];
    k[1] > i != A[1] > i && l < (A[0] - k[0]) * (i - k[1]) / (A[1] - k[1]) + k[0] && (u = !u);
  }
  return u;
};
function Mf(n, l, i, u, { oneBit: g, ink: x, paper: k, snowInk: A }) {
  const I = new Uint8ClampedArray(i * u * 4), M = Jd(x), W = Jd(k);
  for (let F = 0; F < u; F++) for (let V = 0; V < i; V++) {
    const z = F * i + V, pt = l[z];
    if (n[z] == null) continue;
    let et = Jd(n[z]);
    if (g) {
      let X;
      pt === fu || pt === hu ? X = !0 : pt === cl ? X = A : pt === Gc || pt === nc ? X = !1 : X = Math.round((0.2126 * et[0] + 0.7152 * et[1] + 0.0722 * et[2]) / 255 * 4) / 4 <= Qi(V, F), (pt === cu || pt === pu || pt === uu || pt === nc) && (V > 0 && l[z - 1] !== pt || V < i - 1 && l[z + 1] !== pt || F > 0 && l[z - i] !== pt || F < u - 1 && l[z + i] !== pt) && (X = !0), et = X ? M : W;
    }
    I[z * 4] = et[0], I[z * 4 + 1] = et[1], I[z * 4 + 2] = et[2], I[z * 4 + 3] = 255;
  }
  return { w: i, h: u, data: I };
}
const Sf = { clear: 0, partly: 0.35, cloudy: 0.85, fog: 0.9, rain: 1, storm: 1, snow: 0.9 }, Cf = (n) => sc(n, !1).split("/")[0], yc = (n) => () => {
  n |= 0, n = n + 1831565813 | 0;
  let l = Math.imul(n ^ n >>> 15, 1 | n);
  return l = l + Math.imul(l ^ l >>> 7, 61 | l) ^ l, ((l ^ l >>> 14) >>> 0) / 4294967296;
}, Tf = "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", Lf = "M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", Af = "M0 -1L0.2687 -0.2687L1 0L0.2687 0.2687L0 1L-0.2687 0.2687L-1 0L-0.2687 -0.2687Z", Ef = "M7 0L0 13L5 13L2 24L11 9L6 9L9 0Z", _f = [[7, 0], [0, 13], [5, 13], [2, 24], [11, 9], [6, 9], [9, 0]], Df = [".##", "##.", ".#.", "#.."];
function mu(n, { width: l, height: i, colors: u, wave: g = 0.38, soft: x = 6, glow: k = 0.6, columns: A = 6 }) {
  const I = { ...Pn, dawn: "#e5a77e", ...u }, M = xf(I), W = l, F = i, V = W / A, z = V / 2, pt = Math.PI * 2, et = n.length ? n : [{ cond: "cloudy", night: !1 }], X = [...Array(A * 2)].map((kt, ot) => {
    const nt = et[Math.min(ot, et.length - 1)], at = Cf(nt.cond), E = ot % 2 === 1;
    return { cond: nt.cond, k: at, night: E, sky: M[at][E ? 1 : 0], cover: Sf[at] };
  }), G = (kt) => F * (0.5 - g * Math.cos(pt * (kt / V - 0.25)));
  return { C: I, S: X, W, H: F, cw: V, sw: z, TAU: pt, yb: G, side: (kt, ot, nt) => {
    const at = (kt ? G(ot) - nt : nt - G(ot)) / Math.max(3, x * 1.4) + 0.5;
    return at <= 0 ? 0 : at >= 1 ? 1 : at;
  }, glowAt: (kt) => {
    const ot = ((kt / V - 0.25) % 1 + 1) % 1, nt = Math.max(0, Math.min(A - 1, Math.round(kt / V - 0.25))), at = Math.max(0, Math.min(A - 1, Math.round(kt / V - 0.75))), E = 1 - (X[2 * nt].cover + X[2 * at + 1].cover) / 2, Ct = Math.sin(Math.PI * Math.min(1, Math.max(0, G(kt) / F)));
    return { c: ot < 0.5 ? I.dusk : I.dawn, a: k * (0.2 + 0.8 * E) * Ct * Ct };
  }, soft: x, tw: V * 0.3, sy: F / 90 };
}
function gu(n, { clock: l = 0, ambient: i = !1, seed: u = 1 }) {
  const { S: g, sw: x, side: k, C: A, TAU: I, sy: M, H: W } = n, F = l, V = { stars: [], suns: [], moons: [], clouds: [], drops: [], flakes: [], fogs: [], bolts: [] };
  g.forEach((et, X) => {
    const G = yc(u * 977 + X * 131 + 7), ht = (X + 0.5) * x, dt = et.night ? { clear: 9, partly: 5, cloudy: 2, fog: 0, rain: 0, storm: 0, snow: 1 }[et.k] : 0;
    for (let kt = 0; kt < dt; kt++) {
      const ot = ht + (G() - 0.5) * x * 1.6, nt = (6 + G() * 76) * M, at = G() < 0.35, E = 1.8 + G() * 1.6, Ct = k(!0, ot, nt) * (at ? 0.95 : 0.7) * (i ? 0.6 + 0.4 * Math.sin(I * F / 2600 + kt * 1.7 + X) : 1);
      Ct >= 0.03 && V.stars.push({ x: ot, y: nt, big: at, size: E, o: Ct });
    }
    if (!et.night && (et.k === "clear" || et.k === "partly")) {
      const kt = ht + (G() - 0.5) * x * 0.3, ot = Math.min(15, x * 0.29);
      V.suns.push({ x: kt, y: 32 * M, rad: ot, halo: ot * 2.8 * (i ? 1 + 0.07 * Math.sin(I * F / 3600 + X) : 1) });
    }
    if (et.night && (et.k === "clear" || et.k === "partly")) {
      const kt = Math.min(0.78, x * 0.55 / 34), ot = ht - 23 * kt + (G() - 0.5) * x * 0.2;
      V.moons.push({ x: ot + 23 * kt, y: (4 + (i ? 0.8 * Math.sin(I * F / 5200 + X) : 0)) * M + 23 * kt, d: 46 * kt });
    }
  });
  const z = Math.max(56, Math.min(100, W * 0.45)), pt = Math.max(1, x / (z * 2.4));
  return g.forEach((et, X) => {
    const G = { clear: 0, partly: 1, cloudy: 3, fog: 0, rain: 3, storm: 3, snow: 2 }[et.k];
    if (!G) return;
    const ht = et.k === "partly" ? 1 : Math.round(G * pt), dt = yc(u * 577 + X * 71 + 3), kt = (X + 0.5) * x, ot = et.k === "rain" || et.k === "storm" || et.night ? A.cloudNight : A.cloudDay, nt = et.night ? 0.82 : et.k === "storm" ? 0.75 : 1;
    for (let at = 0; at < ht; at++) {
      const E = z / 46 * (et.k === "partly" ? 1 : 0.8 + dt() * 0.4), Ct = kt + (et.k === "partly" ? x * 0.12 : ((at + 0.5) / ht - 0.5) * x * 0.95 + (dt() - 0.5) * x * 0.5 / ht), st = (et.k === "partly" ? 40 : 6 + dt() * 26) * M, Ot = i ? 2.5 * Math.sin(I * F / 9e3 + X * 1.3 + at * 2.1) : 0, it = i ? 0.9 * Math.sin(I * F / 6100 + X + at) : 0;
      V.clouds.push({ x: Ct - 23 * E + Ot, y: st - 15.33 * E + it, w: 46 * E, h: 30.66 * E, fill: ot, o: nt * (ht > 1 && at === 0 ? 0.85 : 1) });
    }
  }), g.forEach((et, X) => {
    const G = yc(u * 313 + X * 29 + 11), ht = (X + 0.5) * x, dt = et.cond === "pouring" ? 16 : et.cond === "rainy" || et.cond === "hail" ? 9 : et.cond === "lightning-rainy" ? 12 : et.cond === "snowy-rainy" ? 5 : 0;
    for (let ot = 0; ot < dt; ot++) {
      let nt = ht + (G() - 0.5) * x * 1.05, at = 44 + G() * 36, E = 1;
      if (i) {
        const st = ((at - 44 + F * 0.04) % 36 + 36) % 36;
        nt -= 0.21 * (st - (at - 44)), at = 44 + st, E = Math.min(1, st / 6, (36 - st) / 6);
      }
      at *= M;
      const Ct = k(et.night, nt, at) * E;
      Ct >= 0.05 && V.drops.push({ x: nt, y: at, o: Ct });
    }
    const kt = et.cond === "snowy" ? 11 : et.cond === "snowy-rainy" ? 6 : 0;
    for (let ot = 0; ot < kt; ot++) {
      let nt = ht + (G() - 0.5) * x * 1.05, at = 40 + G() * 44, E = 1;
      if (i) {
        const st = ((at - 40 + F * 9e-3) % 44 + 44) % 44;
        at = 40 + st, nt += 1.6 * Math.sin(I * F / 2800 + ot * 1.9 + X), E = Math.min(1, st / 6, (44 - st) / 6);
      }
      at *= M;
      const Ct = k(et.night, nt, at) * E;
      Ct >= 0.05 && V.flakes.push({ x: nt, y: at, o: Ct });
    }
    if (et.k === "fog") {
      const ot = et.night ? "#c8ccd6" : "#ffffff", nt = et.night ? 0.28 : 0.62, at = i ? 4 * Math.sin(I * F / 8e3 + X) : 0;
      for (let E = 0; E < 4; E++) V.fogs.push({ x: ht - x * 0.75 + E % 2 * x * 0.18 + (E % 2 ? at : -at), y: (30 + E * 13) * M, w: x * 1.3, c: ot, a: nt });
    }
    if (et.k === "storm") {
      const ot = (F / 3400 + X * 0.37) % 1;
      V.bolts.push({ x: ht + (G() - 0.5) * x * 0.3 - 5, y: 36 * M, o: i && !(ot < 0.05 || ot > 0.09 && ot < 0.12) ? 0.8 : 1 });
    }
  }), V;
}
function Bf(n, l, i, u, g, x, k, A) {
  const { S: I, C: M, cw: W, yb: F, glowAt: V, soft: z, tw: pt, sy: et } = n, X = new Array(i * u), G = new Uint8Array(i * u), ht = new Uint8Array(i * u), dt = (L, R, q, D, lt) => {
    q == null || L < 0 || R < 0 || L >= i || R >= u || (D >= 1 || D > Qi(L + 5, R + 3)) && (X[R * i + L] = q, G[R * i + L] = lt);
  }, kt = (L, R, q, D) => {
    for (let lt = Math.max(0, Math.floor(R - q) - 1); lt <= Math.min(u - 1, R + q + 1); lt++) for (let ut = Math.max(0, Math.floor(L - q) - 1); ut <= Math.min(i - 1, L + q + 1); ut++) D(ut, lt, ut + 0.5 - L, lt + 0.5 - R);
  }, ot = (L, R, q) => {
    for (let lt = 0; lt < L.length - 1; lt++) {
      const ut = (lt + R) * W;
      if (q < ut - pt / 2) return [L[lt], L[lt], 0];
      if (q <= ut + pt / 2) return [L[lt], L[lt + 1], (q - ut + pt / 2) / pt];
    }
    const D = L[L.length - 1];
    return [D, D, 0];
  }, nt = I.filter((L) => !L.night).map((L) => L.sky), at = I.filter((L) => L.night).map((L) => L.sky), E = z / x, Ct = 16 * et / x;
  for (let L = 0; L < i; L++) {
    const R = (L + 0.5) * g, q = F(R) / x, D = ot(nt, 0.75, R), lt = ot(at, 1.25, R), ut = V(R);
    for (let gt = 0; gt < u; gt++) {
      const St = Qi(L, gt), Lt = gt + 0.5 - q, $t = (E > 0.01 ? er(0.5 + Lt / E) : Lt > 0 ? 1 : 0) > St;
      let ae = $t ? D[2] > St ? D[1] : D[0] : lt[2] > St ? lt[1] : lt[0];
      ($t ? er(((gt + 0.5) / u - 0.45) / 0.55) * 0.7 : er(1 - (gt + 0.5) / (u * 0.55)) * 0.7) > Qi(L + 2, gt + 5) && (ae = $t ? So(ae, "#ffffff", 0.18) : So(ae, "#000000", 0.25)), $t && Lt >= 0 && Lt < Ct && ut.a * 1.3 * (1 - Lt / Ct) > Qi(L + 6, gt + 1) && (ae = ut.c), X[gt * i + L] = ae, ht[gt * i + L] = $t ? 0 : 1;
    }
  }
  const st = So(M.sun, "#ffffff", 0.55), Ot = So(M.moon, "#ffffff", 0.6);
  l.stars.forEach((L) => {
    const R = Math.floor(L.x / g), q = Math.floor(L.y / x);
    if (R < 0 || q < 0 || R >= i || q >= u || !ht[q * i + R] || L.o < 0.15) return;
    const D = L.o > 0.45 ? M.star : So(M.star, X[q * i + R], 0.5), lt = L.big && L.o > 0.6 ? Math.floor(L.size / g) : 0;
    dt(R, q, D, 1, Gc);
    for (let ut = 1; ut <= lt; ut++) [[R - ut, q], [R + ut, q], [R, q - ut], [R, q + ut]].forEach((gt) => {
      gt[0] >= 0 && gt[1] >= 0 && gt[0] < i && gt[1] < u && ht[gt[1] * i + gt[0]] && dt(gt[0], gt[1], D, 1, Gc);
    });
  }), l.suns.forEach((L) => {
    const R = Math.max(1.5, L.rad / g), q = L.x / g, D = L.y / x, lt = L.halo / g * 0.85;
    if (kt(q, D, lt, (ut, gt, St, Lt) => {
      const $t = Math.sqrt(St * St + Lt * Lt);
      $t > R && $t < lt && !ht[gt * i + ut] && dt(ut, gt, st, 0.3 * (1 - ($t - R) / (lt - R)), 0);
    }), A) {
      const ut = Math.floor(k / 500) % 2, gt = Math.max(1, R * 0.3);
      for (let St = 0; St < 8; St++) if (St % 2 === ut) for (let Lt = R + 1.2; Lt < R + 1.2 + gt; Lt += 0.7) dt(Math.floor(q + Math.cos(St * Math.PI / 4) * Lt), Math.floor(D + Math.sin(St * Math.PI / 4) * Lt), M.sun, 1, hu);
    }
    kt(q, D, R, (ut, gt, St, Lt) => {
      St * St + Lt * Lt <= R * R && dt(ut, gt, er(((Lt / R + 1) / 2 - 0.6) / 0.4) > Qi(ut, gt) ? M.sunEdge : M.sun, 1, cu);
    });
  }), l.moons.forEach((L) => {
    const R = Math.max(1.5, L.d * 0.37 / g), q = L.x / g, D = L.y / x, lt = q + 0.547 * R, ut = D - 0.503 * R, gt = 0.82 * R;
    kt(q, D, R, (St, Lt, $t, ae) => {
      if ($t * $t + ae * ae > R * R) return;
      const Fa = St + 0.5 - lt, qt = Lt + 0.5 - ut;
      Fa * Fa + qt * qt > gt * gt && dt(St, Lt, er((ae + R) / (2 * R) * 1.1 - 0.1) > Qi(St, Lt) ? M.moon : Ot, 1, pu);
    });
  }), l.clouds.forEach((L) => {
    const R = Math.max(3, L.w / g), q = R * 0.6665, D = L.x / g, lt = L.y / x, ut = So(L.fill, "#000000", 0.16);
    for (let gt = Math.max(0, Math.floor(lt) - 1); gt <= Math.min(u - 1, lt + q + 1); gt++) for (let St = Math.max(0, Math.floor(D) - 1); St <= Math.min(i - 1, D + R + 1); St++) {
      const Lt = (St + 0.5 - D) / R, $t = (gt + 0.5 - lt) / R;
      rp(Lt, $t) && dt(St, gt, !rp(Lt, $t + 1 / R) || er(($t - 0.42) / 0.25) * 0.8 > Qi(St, gt) ? ut : L.fill, L.o, uu);
    }
  }), l.fogs.forEach((L) => {
    const R = Math.floor(L.y / x), q = Math.max(R, Math.floor((L.y + 6 * et) / x) - 1), D = Math.floor(L.x / g), lt = Math.floor((L.x + L.w) / g);
    for (let ut = R; ut <= q; ut++) for (let gt = D; gt <= lt; gt++) {
      const St = (gt - D) / Math.max(1, lt - D);
      dt(gt, ut, L.c, L.a * (St < 0.25 ? St / 0.25 : St > 0.75 ? (1 - St) / 0.25 : 1), 0);
    }
  });
  const it = Math.max(2, Math.round(9 / x));
  l.drops.forEach((L) => {
    const R = L.x / g, q = Math.floor(L.y / x);
    for (let D = 0; D < it; D++) dt(Math.floor(R - 0.208 * D * x / g), q + D, M.rain, L.o, fu);
  });
  const Zt = Math.max(0, Math.round(4.4 / g / 2.6));
  return l.flakes.forEach((L) => {
    const R = Math.floor(L.x / g), q = Math.floor(L.y / x);
    dt(R, q, M.snow, L.o, cl);
    for (let D = 1; D <= Zt; D++)
      dt(R - D, q, M.snow, L.o, cl), dt(R + D, q, M.snow, L.o, cl), dt(R, q - D, M.snow, L.o, cl), dt(R, q + D, M.snow, L.o, cl);
  }), l.bolts.forEach((L) => {
    if (g <= 3.5)
      for (let R = Math.floor(L.y / x); R <= (L.y + 24) / x; R++) for (let q = Math.floor(L.x / g); q <= (L.x + 11) / g; q++)
        kf(_f, (q + 0.5) * g - L.x, (R + 0.5) * x - L.y) && dt(q, R, M.sun, 1, nc);
    else {
      const R = Math.round(L.x / g), q = Math.round(L.y / x);
      Df.forEach((D, lt) => D.split("").forEach((ut, gt) => {
        ut === "#" && dt(R + gt, q + lt, M.sun, 1, nc);
      }));
    }
  }), { col: X, ids: G };
}
function Rf(n, l) {
  const i = l.px, u = Math.max(6, Math.round(l.width / i)), g = Math.max(6, Math.round(l.height / i)), x = l.width / u, k = l.height / g, A = l.ambient ? Math.floor((l.clock || 0) / 100) * 100 : 0, I = (z) => {
    const pt = mu(z, l);
    return Bf(pt, gu(pt, { clock: A, ambient: l.ambient, seed: l.seed }), u, g, x, k, A, l.ambient);
  }, M = I(n), W = l.reveal == null ? 1 : er(l.reveal);
  let F = M.col, V = M.ids;
  if (W < 1) {
    const z = l.prev ? I(l.prev) : null, pt = W * (u + 12);
    F = new Array(u * g), V = new Uint8Array(u * g);
    for (let et = 0; et < u * g; et++) {
      const X = et % u, G = et / u | 0;
      (l.reduce ? W : er((pt - X) / 12)) > Qi(X, G) ? (F[et] = M.col[et], V[et] = M.ids[et]) : z ? (F[et] = z.col[et], V[et] = z.ids[et]) : (F[et] = null, V[et] = 255);
    }
  }
  return Mf(F, V, u, g, { oneBit: l.oneBit, ink: l.ink || "#26221e", paper: l.paper || "#fbf9f6", snowInk: !1 });
}
function Pf(n, l, i) {
  const u = i.width, g = i.height, x = i.reveal == null ? 1 : er(i.reveal), k = (V, z) => {
    const pt = mu(z, i);
    Nf(V, pt, gu(pt, i));
  };
  if (n.clearRect(0, 0, u, g), x >= 1) {
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
  M.setTransform(n.getTransform()), M.clearRect(0, 0, u, g), k(M, l);
  const W = x * (u + 64) - 64, F = M.createLinearGradient(W, 0, W + 64, 0);
  F.addColorStop(0, "rgba(0,0,0,1)"), F.addColorStop(1, "rgba(0,0,0,0)"), M.globalCompositeOperation = "destination-in", M.fillStyle = F, M.fillRect(0, 0, u, g), M.globalCompositeOperation = "source-over", n.save(), n.setTransform(1, 0, 0, 1, 0, 0), n.drawImage(I, 0, 0), n.restore();
}
function Nf(n, l, i) {
  const { W: u, H: g, S: x, C: k, cw: A, yb: I, glowAt: M, soft: W, tw: F, sy: V } = l, z = n.getTransform().a || 1, pt = (it) => {
    n.shadowColor = it ? "rgba(28,18,8,.22)" : "transparent", n.shadowBlur = it ? 4 * z : 0, n.shadowOffsetY = it ? 1.5 * z : 0;
  }, et = (it, Zt) => {
    const L = Jd(it);
    return "rgba(" + L[0] + "," + L[1] + "," + L[2] + "," + Math.max(0, Math.min(1, Zt)).toFixed(3) + ")";
  }, X = (it, Zt) => {
    const L = n.createLinearGradient(0, 0, u, 0);
    L.addColorStop(0, it[0]);
    for (let R = 0; R < it.length - 1; R++) {
      const q = (R + Zt) * A, D = (q - F / 2) / u, lt = (q + F / 2) / u;
      D > 0 && D < 1 && L.addColorStop(D, it[R]), lt > 0 && lt < 1 && L.addColorStop(lt, it[R + 1]);
    }
    return L.addColorStop(1, it[it.length - 1]), L;
  }, G = Math.max(24, Math.ceil(u / 4)), ht = (it, Zt) => {
    n.beginPath();
    for (let L = 0; L <= G; L++) {
      const R = u * L / G, q = it == null ? 0 : I(R) + it;
      L ? n.lineTo(R, q) : n.moveTo(R, q);
    }
    for (let L = G; L >= 0; L--) {
      const R = u * L / G;
      n.lineTo(R, I(R) + Zt);
    }
    n.closePath(), n.fill();
  };
  n.save(), n.fillStyle = X(x.filter((it) => !it.night).map((it) => it.sky), 0.75), n.fillRect(0, 0, u, g);
  const dt = n.createLinearGradient(0, 0, u, 0);
  for (let it = 0; it <= 64; it++) {
    const Zt = M(u * it / 64);
    dt.addColorStop(it / 64, et(Zt.c, Math.min(1, Zt.a)));
  }
  n.fillStyle = dt;
  for (let it = 0; it < 8; it++)
    n.globalAlpha = 1 - it / 8, ht(it * 2 * V, (it + 1) * 2 * V);
  n.fillStyle = X(x.filter((it) => it.night).map((it) => it.sky), 1.25);
  const kt = Math.max(0.5, W), ot = 6;
  n.globalAlpha = 1, ht(null, -kt);
  for (let it = 0; it < ot; it++)
    n.globalAlpha = 1 - (it + 0.5) / ot, ht(-kt + 2 * kt * it / ot, -kt + 2 * kt * (it + 1) / ot);
  n.globalAlpha = 1;
  const nt = new Path2D(Af), at = new Path2D(Lf), E = new Path2D(Tf), Ct = new Path2D(Ef);
  n.fillStyle = k.star, i.stars.forEach((it) => {
    n.globalAlpha = it.o, it.big ? (n.save(), n.translate(it.x, it.y), n.scale(it.size, it.size), n.fill(nt), n.restore()) : (n.beginPath(), n.arc(it.x, it.y, 0.8, 0, Math.PI * 2), n.fill());
  }), n.globalAlpha = 1;
  const st = So(k.sun, "#ffffff", 0.55);
  i.suns.forEach((it) => {
    const Zt = n.createRadialGradient(it.x, it.y, 0, it.x, it.y, it.halo);
    Zt.addColorStop(0, et(st, 0.42)), Zt.addColorStop(0.7, et(st, 0)), n.fillStyle = Zt, n.beginPath(), n.arc(it.x, it.y, it.halo, 0, Math.PI * 2), n.fill();
    const L = n.createLinearGradient(0, it.y - it.rad, 0, it.y + it.rad);
    L.addColorStop(0.6, k.sun), L.addColorStop(1, k.sunEdge), n.fillStyle = L, pt(!0), n.beginPath(), n.arc(it.x, it.y, it.rad, 0, Math.PI * 2), n.fill(), pt(!1);
  });
  const Ot = So(k.moon, "#ffffff", 0.6);
  i.moons.forEach((it) => {
    n.save(), n.translate(it.x - it.d / 2, it.y - it.d / 2), n.scale(it.d / 46, it.d / 46);
    const Zt = n.createLinearGradient(0, 6, 0, 40);
    Zt.addColorStop(0, Ot), Zt.addColorStop(1, k.moon), n.fillStyle = Zt, pt(!0), n.fill(at), pt(!1), n.restore();
  }), i.clouds.forEach((it) => {
    n.save(), n.globalAlpha = it.o, n.translate(it.x, it.y), n.scale(it.w / 46, it.h / 30.66), n.translate(-4, -9.67), n.fillStyle = it.fill, pt(!0), n.fill(E), pt(!1), n.restore();
  }), i.fogs.forEach((it) => {
    const Zt = n.createLinearGradient(it.x, 0, it.x + it.w, 0);
    Zt.addColorStop(0, et(it.c, 0)), Zt.addColorStop(0.25, et(it.c, it.a)), Zt.addColorStop(0.75, et(it.c, it.a)), Zt.addColorStop(1, et(it.c, 0)), n.fillStyle = Zt, n.fillRect(it.x, it.y, it.w, 6 * V);
  }), n.fillStyle = k.rain, i.drops.forEach((it) => {
    n.save(), n.globalAlpha = it.o, n.translate(it.x, it.y), n.rotate(12 * Math.PI / 180), n.fillRect(-1.5, 0, 3, 9), n.restore();
  }), n.fillStyle = k.snow, i.flakes.forEach((it) => {
    n.globalAlpha = it.o, n.beginPath(), n.arc(it.x, it.y, 2.2, 0, Math.PI * 2), n.fill();
  }), n.fillStyle = k.sun, i.bolts.forEach((it) => {
    n.save(), n.globalAlpha = it.o, n.translate(it.x, it.y), n.fill(Ct), n.restore();
  }), n.restore();
}
const Hf = (n) => n === "sunny" ? "clear" : n === "clear-night" ? "night" : n === "partlycloudy" ? "partly" : ["rainy", "pouring", "lightning", "lightning-rainy", "hail"].includes(n) ? "rain" : ["snowy", "snowy-rainy"].includes(n) ? "snow" : "cloudy", sl = { s: "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", sp: "M41.025 27.045C40.5181 24.4943 39.142 22.1985 37.1315 20.5491C35.121 18.8996 32.6005 17.9987 30 18C25.665 18 21.9 20.46 20.025 24.045C17.8191 24.2867 15.7801 25.3344 14.2991 26.987C12.8181 28.6396 11.9994 30.7809 12 33C12 35.3869 12.9482 37.6761 14.636 39.364C16.3239 41.0518 18.6131 42 21 42H40.5C41.4849 42 42.4602 41.806 43.3701 41.4291C44.2801 41.0522 45.1069 40.4997 45.8033 39.8033C46.4997 39.1069 47.0522 38.2801 47.4291 37.3701C47.806 36.4602 48 35.4849 48 34.5C48 30.54 44.925 27.33 41.025 27.045Z", lp: "M70.8016 48.008C69.9751 43.8493 67.7316 40.1062 64.4536 37.4168C61.1755 34.7275 57.0661 33.2587 52.8261 33.2607C45.7581 33.2607 39.6196 37.2716 36.5625 43.1167C32.9659 43.5108 29.6414 45.219 27.2267 47.9135C24.8121 50.608 23.4772 54.0991 23.4783 57.7173C23.4783 61.609 25.0243 65.3414 27.7761 68.0933C30.528 70.8452 34.2604 72.3912 38.1522 72.3912H69.9456C71.5515 72.3912 73.1416 72.0749 74.6252 71.4604C76.1088 70.8458 77.4568 69.9451 78.5923 68.8096C79.7278 67.6741 80.6286 66.3261 81.2431 64.8425C81.8576 63.3589 82.1739 61.7688 82.1739 60.1629C82.1739 53.7064 77.1603 48.4727 70.8016 48.008Z", lc: "M65.3723 37.5398C64.4356 32.8266 61.8929 28.5843 58.1778 25.5364C54.4627 22.4885 49.8054 20.8238 45 20.8262C36.9897 20.8262 30.0326 25.3718 26.5679 31.9963C22.4918 32.4429 18.724 34.3788 15.9874 37.4326C13.2508 40.4864 11.738 44.443 11.7391 48.5436C11.7391 52.9542 13.4913 57.1842 16.6101 60.3031C19.7289 63.4219 23.9589 65.174 28.3696 65.174H64.4022C66.2221 65.174 68.0243 64.8155 69.7057 64.1191C71.3871 63.4226 72.9149 62.4018 74.2018 61.1149C75.4887 59.828 76.5095 58.3002 77.2059 56.6188C77.9024 54.9374 78.2609 53.1353 78.2609 51.3153C78.2609 43.9979 72.5788 38.0664 65.3723 37.5398Z", lr: "M62.9755 28.4431C62.149 24.2844 59.9055 20.5412 56.6275 17.8519C53.3494 15.1626 49.24 13.6937 45 13.6958C37.9321 13.6958 31.7935 17.7067 28.7364 23.5518C25.1398 23.9459 21.8153 25.654 19.4006 28.3485C16.986 31.043 15.6511 34.5342 15.6522 38.1523C15.6522 42.0441 17.1982 45.7765 19.9501 48.5284C22.7019 51.2802 26.4343 52.8262 30.3261 52.8262H62.1196C63.7254 52.8262 65.3155 52.5099 66.7991 51.8954C68.2827 51.2809 69.6307 50.3802 70.7662 49.2447C71.9017 48.1092 72.8025 46.7611 73.417 45.2775C74.0315 43.7939 74.3478 42.2038 74.3478 40.598C74.3478 34.1415 69.3342 28.9078 62.9755 28.4431Z" }, Od = {
  s: ["M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", 6.11, 40],
  l: ["M41.1747 11.959C37.7298 16.5251 35.6875 22.2086 35.6874 28.3691C35.6874 43.4321 47.8979 55.6435 62.9608 55.6436C68.3701 55.6436 73.411 54.0676 77.6512 51.3516C74.6865 66.6826 61.197 78.2607 44.9999 78.2607C26.6305 78.2607 11.7391 63.3694 11.7391 45C11.7392 27.9244 24.6071 13.8562 41.1747 11.959Z", 11.96, 78.26],
  sp: ["M16.6201 5.0791C15.3771 6.72655 14.6397 8.7772 14.6396 11C14.6396 16.4345 19.046 20.8398 24.4805 20.8398C26.4326 20.8398 28.2502 20.2686 29.7803 19.2881C28.7119 24.821 23.8449 29 18 29C11.3726 29 6 23.6274 6 17C6 10.8393 10.6426 5.76349 16.6201 5.0791Z", 5.08, 29],
  lp: ["M32.5175 9.93848C30.0859 13.1616 28.6435 17.1729 28.6434 21.5215C28.6434 32.1541 37.2628 40.7733 47.8954 40.7734C51.7136 40.7734 55.2724 39.6622 58.2655 37.7451C56.1724 48.5666 46.6506 56.7391 35.2177 56.7393C22.251 56.7393 11.7391 46.2274 11.7391 33.2607C11.7393 21.2073 20.8226 11.2776 32.5175 9.93848Z", 9.94, 56.74]
}, kc = (n, l) => '<path class="' + l + '" d="' + n + '"/>', If = (n, l) => ' style="animation-delay:-' + Math.round(n * 137 % l) + 'ms"', ko = (n, l, i, u) => {
  const g = i * 0.2687;
  return '<path class="wbTwinkle" fill="#fff"' + (u < 1 ? ' opacity="' + u + '"' : "") + If(n, 2400) + ' d="M' + n + " " + (l - i) + "L" + (n + g) + " " + (l - g) + "L" + (n + i) + " " + l + "L" + (n + g) + " " + (l + g) + "L" + n + " " + (l + i) + "L" + (n - g) + " " + (l + g) + "L" + (n - i) + " " + l + "L" + (n - g) + " " + (l - g) + 'Z"/>';
}, sp = ([n, l, i], u) => '<path class="wbMoonPath" d="' + n + '" fill="url(#' + u + ')"/><defs><linearGradient id="' + u + '" x1="0" y1="' + l + '" x2="0" y2="' + i + '" gradientUnits="userSpaceOnUse"><stop stop-color="#FFF4C7"/><stop offset="1" stop-color="#F2C95E"/></linearGradient></defs>', Ff = (n, l) => l ? '<circle class="wbSunDisc" cx="45" cy="45" r="33.26" fill="url(#' + n + ')"/><defs><linearGradient id="' + n + '" x1="12" y1="8.5" x2="67" y2="73.5" gradientUnits="userSpaceOnUse"><stop offset=".653" stop-color="#FFE100"/><stop offset="1" stop-color="#F2C159"/></linearGradient></defs>' : '<circle class="wbSunDisc" cx="23" cy="23" r="17" fill="url(#' + n + ')"/><defs><linearGradient id="' + n + '" x1="23" y1="6" x2="23" y2="40" gradientUnits="userSpaceOnUse"><stop offset=".606" stop-color="#FFE100"/><stop offset="1" stop-color="#FFAA00"/></linearGradient></defs>', Of = (n) => (n ? ["29.35", "43.04", "56.74"].map((l, i) => '<g class="wbDrop" style="animation-delay:-' + i * 317 + 'ms"><rect class="wbAccent" x="' + l + '" y="60.65" width="5.87" height="15.65" rx="2.93" transform="rotate(12 ' + l + ' 60.65)"/></g>') : [19, 26, 33].map((l, i) => '<g class="wbDrop" style="animation-delay:-' + i * 317 + 'ms"><rect class="wbAccent" width="3.03" height="9.41" rx="1.51" transform="matrix(0.9698 0.244 -0.1768 0.9843 ' + l + ' 38)"/></g>')).join(""), qf = (n) => (n ? [[33.67, 67.67], [47.67, 64.67], [61.67, 67.67], [40.67, 77.67], [54.67, 77.67]] : [[21.2, 42.2], [29.2, 40.2], [37.2, 42.2], [25.2, 48.2], [33.2, 48.2]]).map(([l, i], u) => '<circle class="wbFlake" style="animation-delay:-' + u * 640 + 'ms" cx="' + l + '" cy="' + i + '" r="' + (n ? 3.67 : 2.2) + '" fill="#fff"/>').join("");
function Wf(n, l, i, u) {
  const g = (x) => '<g filter="url(#' + u + '-sh)">' + x + "</g>";
  return n === "clear" ? l ? g(sp(i ? Od.l : Od.s, u)) + (i ? ko(70, 20, 5.83, 1) + ko(78.33, 41.67, 3.75, 0.8) + ko(60, 71.67, 3.33, 0.6) : ko(42, 12, 3.5, 1) + ko(47, 25, 2.25, 0.8) + ko(36, 43, 2, 0.6)) : g(Ff(u, i)) : n === "partly" ? g(l ? sp(i ? Od.lp : Od.sp, u) : i ? '<circle class="wbSunDisc" cx="35.22" cy="33.26" r="23.48" fill="#FFE100"/>' : '<circle class="wbSunDisc" cx="18" cy="17" r="12" fill="#FFE100"/>') + g(kc(i ? sl.lp : sl.sp, l ? "wbCloudLight" : "wbBright")) + (l ? i ? ko(73.33, 16.67, 4.17, 0.9) : ko(44, 10, 2.5, 0.9) : "") : n === "cloudy" ? g(kc(i ? sl.lc : sl.s, l ? "wbCloudLight" : "wbBright")) + (l ? i ? ko(15, 15, 3.75, 0.8) + ko(76.67, 13.33, 2.92, 0.6) : ko(9, 9, 2.25, 0.8) + ko(46, 8, 1.75, 0.6) : "") : g(kc(i ? sl.lr : sl.s, "wbCloudLight")) + (n === "rain" ? Of(i) : qf(i));
}
const Vf = (n, l) => '<defs><filter id="' + n + '-sh" x="-25%" y="-25%" width="150%" height="160%"><feDropShadow dx="0" dy="' + (l ? 1.6 : 1) + '" stdDeviation="' + (l ? 1.8 : 1.1) + '" flood-color="#1c1208" flood-opacity=".22"/></filter></defs>';
function jf(n, l, i, u) {
  let g = Hf(n);
  const x = g === "night" || !!i;
  g === "night" && (g = "clear");
  const k = l ? 90 : 54;
  return { k: g, night: x, svg: '<svg viewBox="0 0 ' + k + " " + k + '">' + Vf(u, l) + Wf(g, x, l, u) + "</svg>" };
}
const zf = [
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
], qd = (n, l) => (zf[l % 8 * 8 + n % 8] + 0.5) / 64, ti = (n) => [parseInt(n.slice(1, 3), 16), parseInt(n.slice(3, 5), 16), parseInt(n.slice(5, 7), 16)], bn = (n, l, i) => [Math.round(n[0] + (l[0] - n[0]) * i), Math.round(n[1] + (l[1] - n[1]) * i), Math.round(n[2] + (l[2] - n[2]) * i)], Zl = (n) => n < 0 ? 0 : n > 1 ? 1 : n, lp = (n, l) => {
  let i = n * 374761393 + l * 668265263 ^ 1540483477;
  return i = Math.imul(i ^ i >>> 13, 1274126177), ((i ^ i >>> 16) >>> 0) / 4294967296;
}, Ls = [255, 255, 255], En = ti("#26221e"), dp = ti("#0288d1"), Gf = ti("#01579b"), Mc = ti(Pn.cloudDay), Sc = ti(Pn.cloudNight), Wd = ti(Pn.dusk), Cc = ti(Pn.sunEdge), Uf = ti(Pn.sun), Yf = 10, cp = 0.3, ar = 56, vu = 21;
function Zf(n) {
  const l = Array.from({ length: vu }, () => new Array(ar).fill(void 0)), i = (k, A, I) => {
    l[A][k] = I;
  }, u = bn(Wd, En, 0.35), g = bn(En, Ls, 0.22);
  for (let k = 0; k <= 6; k++) {
    const A = k < 2 ? ar - 2 : ar - 1;
    for (let I = 6 - k; I <= A; I++) i(I, k, k < 2 ? u : k === 6 ? g : En);
  }
  const x = [Wd, Cc, Sc, ti(Pn.skyRainDay), bn(Wd, En, 0.2), bn(n, En, 0.35)];
  [2, 3, 2, 3, 3].forEach((k, A) => {
    const I = 9 + A * 6;
    for (let M = 0; M < k; M++) {
      const W = x[(A * 2 + M * 3) % x.length];
      for (let F = I; F < I + 5; F++)
        i(F, 7 + M * 2, bn(W, En, 0.12)), i(F, 8 + M * 2, M === k - 1 ? bn(W, Ls, 0.3) : W);
      i(I + 5, 7 + M * 2, En), i(I + 5, 8 + M * 2, En);
    }
  });
  for (let k = 7; k <= 12; k++) i(5, k, En);
  i(5, 13, Cc);
  for (let k = 7; k <= 14; k++) for (let A = 42; A <= 51; A++) i(A, k, A === 51 ? Sc : Mc);
  for (let k = 43; k <= 50; k += 2)
    i(k, 12, En), i(k, 9, bn(En, Mc, 0.4));
  for (let k = 40; k <= 53; k++) i(k, 14, k === 40 || k === 53 ? Sc : Mc);
  for (let k = 15; k <= 18; k++) for (let A = 46; A <= 49; A++) i(A, k, k === 18 ? En : k === 16 ? Cc : Wd);
  for (let k = 15; k <= 19; k++) i(44, k, En);
  return i(44, 20, Uf), l;
}
function Kf(n, l, i, u) {
  const g = Math.max(1, Math.round(n)), x = Math.max(1, Math.round(l)), k = new Uint8ClampedArray(g * x * 4), A = ti(u.skyClearDay), I = ti(u.skyFogDay), M = Zf(A), W = Math.round(x * 0.55), F = Zl(1 - Math.log(i / cp) / Math.log(Yf / cp)), V = bn(A, I, F), z = (G) => Zl((G - 0.1) / 0.9), pt = Zl((1 - Math.exp(-2 / i) - 0.2) / 0.8), et = Math.round(g / 2 - ar / 2), X = W + 3;
  for (let G = 0; G < x; G++) {
    const ht = X - 1 - G, dt = G - X;
    for (let kt = 0; kt < g; kt++) {
      const ot = kt - et;
      let nt, at;
      const E = ht >= 0 && ht < vu && ot >= 0 && ot < ar ? M[ht][ot] : void 0;
      if (E)
        nt = E, at = pt;
      else if (ht >= 0 && ht <= 1 && ot >= 4 - ht && ot <= 5 - ht)
        nt = bn(Ls, dp, 0.15), at = pt;
      else if (G < W) {
        const Ot = Zl(((G + 0.5) / W - 0.15) / 0.85) * 3, it = Math.min(3, Math.floor(Ot + qd(kt + 2, G + 5)));
        nt = bn(V, Ls, it * 0.1), at = F * 0.95;
      } else {
        const Ot = (G - W + 0.5) / (x - W), it = Math.min(1.5, 6e-3 / (Ot * Ot)), Zt = Zl(Ot * 1.4) * 3, L = Math.min(3, Math.floor(Zt + qd(kt + 1, G + 6)));
        nt = bn(dp, Gf, L / 3);
        const R = 1 + Math.round(Ot * 7), q = Math.floor(kt / (R * 3)), D = 0.06 + 0.16 * Ot, lt = kt % (R * 3) < R;
        lt && lp(q, G) < D ? nt = bn(nt, Ls, 0.18 + 0.1 * (1 - Ot)) : lt && Ot > 0.5 && lp(q, G - 1) < D && (nt = bn(nt, En, 0.12)), at = z(1 - Math.exp(-it / i)), dt === 0 && ot >= 3 && ot <= 8 ? (nt = bn(nt, Ls, ot < 6 ? 0.8 : 0.45), at = pt) : dt >= 0 && dt <= 2 && ot >= ar && ot < ar + 40 ? ((1 - (ot - ar) / 40) * (dt === 1 ? 0.9 : 0.5) > qd(kt, G + 3) && (nt = bn(nt, Ls, 0.5)), at = pt) : dt === 0 && ot >= 6 && ot < ar && (nt = bn(nt, En, ot % 2 === 0 ? 0.35 : 0.2), at = pt);
      }
      const Ct = at > qd(kt, G) ? I : nt, st = (G * g + kt) * 4;
      k[st] = Ct[0], k[st + 1] = Ct[1], k[st + 2] = Ct[2], k[st + 3] = 255;
    }
  }
  return { data: k, w: g, h: x };
}
const $f = {
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
}, Xf = 1.6;
function Jf(n, l) {
  const i = n ? $f[String(n).toUpperCase()] : void 0;
  if (!i || !(l > 0)) return;
  const u = (x) => Math.abs(Math.log(x[2] / l)), g = i.reduce((x, k) => u(k) < u(x) ? k : x);
  return u(g) <= Math.log(Xf) ? { from: g[0], to: g[1], km: g[2] } : void 0;
}
const Qf = (n, l) => l === "mi" ? n * 1.609344 : l === "m" ? n / 1e3 : l === "ft" ? n * 3048e-7 : l === "yd" ? n * 9144e-7 : n, th = (n) => n < 1 ? "very_poor" : n < 4 ? "poor" : n < 10 ? "moderate" : n < 20 ? "good" : n < 40 ? "very_good" : "excellent", ba = {
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
}, ea = { standard: "cubic-bezier(.2,0,0,1)", land: "cubic-bezier(.34,1.46,.64,1)", spring: "cubic-bezier(.2,1.2,.4,1)", soft: "cubic-bezier(.4,0,.2,1)", exit: "cubic-bezier(.4,0,1,1)" }, za = () => {
  var n;
  return !!((n = window.matchMedia) != null && n.call(window, "(prefers-reduced-motion: reduce)").matches);
};
function eh() {
  const { pivot: n, slider: l, iconbtn: i, warp: u, outline: g } = ba;
  return [
    ["--pv-persp", n.persp + "px"],
    ["--pv-shine", n.shine / 100],
    ["--pv-size", n.size + "%"],
    ["--pv-ret", n.ret + "ms"],
    ["--pv-ease", ea[n.ease]],
    ["--ab-blur", l.glow + "px"],
    ["--ab-spread", l.spread + "px"],
    ["--ab-str", l.strength + "%"],
    ["--ab-blur2", l.glow + l.hold + "px"],
    ["--ab-spread2", l.spread + l.hold / 4 + "px"],
    ["--ab-str2", l.holdStrength + "%"],
    ["--ab-grow", "scaleY(" + (1 + (l.grow / 100 - 1) * 3) + ")"],
    ["--ab-in", l.ein + "ms"],
    ["--ab-out", l.eout + "ms"],
    ["--ab-ease", ea[l.ease]],
    ["--ih-s", i.scale / 100],
    ["--ih-p", i.press / 100],
    ["--ih-dur", i.dur + "ms"],
    ["--ih-ease", ea[i.ease]],
    ["--ih-tint", "8%"],
    ["--wc-dur", u.cdur + "ms"],
    ["--wc-delay", u.cdelay + "ms"],
    ["--wc-ease", ea[u.ease]],
    ["--ol-esens", g.glowFrom],
    ["--ol-csens", g.colourFrom],
    ["--ol-cone", g.cone],
    ["--ol-glow", g.glow / 100],
    ["--ol-border", g.border / 100],
    ["--ol-fill", g.fill / 100],
    ["--ol-size", g.size / 100],
    ["--ol-h", g.hue + "deg"],
    ["--ol-in", g.fin + "ms"],
    ["--ol-out", g.fout + "ms"]
  ].map(([x, k]) => x + ":" + k).join(";");
}
const Tc = ":is(button.primary,button.pill,.hcBtn,.wbRangeBtn,.activityRow.tap,.hcRow,a.hcRow)", ah = "#homeView .tfAreaPanel", nh = 300, Qd = (n) => Math.min(1, nh / Math.max(1, n)), Lc = (n, l) => 1 + (l / 100 - 1) * Qd(n.offsetWidth);
function oh(n, l) {
  l.style.cssText += ";" + eh();
  let i = null;
  const u = (W) => {
    W.classList.remove("mvMoving", "mvLit"), W.style.setProperty("--rx", "0deg"), W.style.setProperty("--ry", "0deg"), W.style.setProperty("--sc", 1), W._down = !1;
  };
  n.addEventListener("pointermove", (W) => {
    var G, ht;
    const F = W.pointerType === "touch" || za() ? null : (ht = (G = W.target).closest) == null ? void 0 : ht.call(G, Tc);
    if (i && i !== F && u(i), i = F, !F || F.disabled) return;
    const V = ba.pivot, z = F.getBoundingClientRect(), pt = (W.clientX - z.left) / z.width, et = (W.clientY - z.top) / z.height, X = 1;
    F.classList.add("mvPv", "mvMoving", "mvLit"), F.style.setProperty("--pv-persp", V.persp / Qd(Math.max(F.offsetWidth, F.offsetHeight)) + "px"), F.style.setProperty("--ry", (X * (pt - 0.5) * 2 * V.tilt * Qd(F.offsetWidth)).toFixed(3) + "deg"), F.style.setProperty("--rx", (X * -(et - 0.5) * 2 * V.tilt * Qd(F.offsetHeight)).toFixed(3) + "deg"), F.style.setProperty("--mx", (pt * 100).toFixed(1) + "%"), F.style.setProperty("--my", (et * 100).toFixed(1) + "%"), F._down || F.style.setProperty("--sc", Lc(F, V.lift));
  }, { passive: !0 }), n.addEventListener("pointerout", (W) => {
    i && !i.contains(W.relatedTarget) && (u(i), i = null);
  }), n.addEventListener("pointerdown", (W) => {
    var V, z;
    const F = za() ? null : (z = (V = W.target).closest) == null ? void 0 : z.call(V, Tc);
    F && (F._down = !0, F.classList.add("mvPv"), F.classList.remove("mvMoving"), F.style.setProperty("--sc", Lc(F, ba.pivot.press)));
  }), n.addEventListener("pointerup", (W) => {
    var V, z;
    const F = (z = (V = W.target).closest) == null ? void 0 : z.call(V, Tc);
    F && (F._down = !1, F.style.setProperty("--sc", W.pointerType === "touch" ? 1 : Lc(F, ba.pivot.lift)));
  });
  let g = null;
  n.addEventListener("pointerover", (W) => {
    var F, V, z;
    W.pointerType !== "touch" && ((z = (V = (F = W.target).closest) == null ? void 0 : V.call(F, ".tfBar")) == null || z.classList.add("mvHover"));
  }), n.addEventListener("pointerout", (W) => {
    var V, z;
    const F = (z = (V = W.target).closest) == null ? void 0 : z.call(V, ".tfBar");
    F && !F.contains(W.relatedTarget) && F !== g && F.classList.remove("mvHover");
  }), n.addEventListener("pointerdown", (W) => {
    var V, z;
    const F = (z = (V = W.target).closest) == null ? void 0 : z.call(V, ".tfBar");
    F && (g = F, F.classList.add("mvHold"));
  });
  const x = (W) => {
    if (!g) return;
    g.classList.remove("mvHold");
    const F = g.getBoundingClientRect();
    (W.pointerType === "touch" || W.clientX < F.left || W.clientX > F.right || W.clientY < F.top || W.clientY > F.bottom) && g.classList.remove("mvHover"), g = null;
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
    F && ih(F);
  });
  let k = null;
  const A = (W, F, V) => {
    W.querySelector(":scope>.mvEdge") || W.insertAdjacentHTML("afterbegin", '<span class="mvEdgeFill" aria-hidden="true"></span><span class="mvEdge" aria-hidden="true"><i></i></span>');
    const z = W.getBoundingClientRect(), pt = z.width / 2, et = z.height / 2, X = F.clientX - z.left - pt, G = F.clientY - z.top - et, ht = X ? pt / Math.abs(X) : 1 / 0, dt = G ? et / Math.abs(G) : 1 / 0, kt = Math.min(Math.max(1 / Math.min(ht, dt), 0), 1);
    let ot = Math.atan2(G, X) * 180 / Math.PI + 90;
    ot < 0 && (ot += 360);
    const nt = V ? 100 : kt * 100;
    W.style.setProperty("--edge-proximity", nt.toFixed(3)), W.style.setProperty("--cursor-angle", ot.toFixed(3) + "deg"), W.classList.toggle("mvLitEdge", V || nt >= ba.outline.lightAt);
  }, I = (W) => {
    W.classList.remove("mvLitEdge"), W.style.setProperty("--edge-proximity", "0"), W._down = !1;
  }, M = (W) => {
    var V;
    const F = (V = W.closest) == null ? void 0 : V.call(W, ah);
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
    F && ba.outline.press && (F._down = !0, A(F, W, !0));
  }), n.addEventListener("pointerup", (W) => {
    const F = M(W.target);
    F && (F._down = !1, W.pointerType === "touch" ? I(F) : A(F, W, !1));
  }), new MutationObserver((W) => {
    var F;
    for (const V of W) {
      const z = V.target;
      if (V.type === "attributes") {
        (F = z.classList) != null && F.contains("tfMoreBackdrop") && !z.hidden && V.oldValue !== null && pp(z);
        continue;
      }
      V.addedNodes.forEach((pt) => {
        pt.nodeType === 1 && pt.classList.contains("tfMoreBackdrop") && !pt.hidden && pp(pt);
      });
    }
  }).observe(l, { childList: !0, subtree: !0, attributes: !0, attributeFilter: ["hidden"], attributeOldValue: !0 });
}
const bu = (n) => n.closest("[data-k],.tfMore,.tfMorePair") || n.getRootNode();
function wu(n, l) {
  const i = [];
  for (let u = n; u && u !== l && u.parentNode; u = u.parentNode) i.unshift([...u.parentNode.children].indexOf(u));
  return i;
}
const xu = (n, l) => l.reduce((i, u) => i == null ? void 0 : i.children[u], n);
function ih(n) {
  var z;
  if (za() || n._warp) return;
  const l = ba.warp, i = l.amount / 100, u = n.firstElementChild;
  if (!u) return;
  const g = { squash: { scale: 1 + 0.35 * i + " " + (1 - 0.55 * i) }, pinch: { scale: String(1 - 0.5 * i) }, twist: { rotate: 140 * i + "deg", scale: String(1 - 0.35 * i) }, flip: { rotate: "y 90deg" } }[l.style], x = "blur(" + 2 * i + "px)", k = n.getRootNode(), A = bu(n), I = (z = A.dataset) == null ? void 0 : z.k, M = wu(n, A), W = n.getAttribute("aria-pressed") + "|" + n.dataset.act;
  n._warp = 1;
  const F = u.animate([{ scale: "1", rotate: "none", filter: "blur(0px)" }, { ...g, filter: x }], { duration: l.win, easing: ea.exit, fill: "forwards" }), V = performance.now();
  F.finished.then(() => {
    const pt = () => {
      var kt, ot;
      const et = I ? A.isConnected ? A : (kt = k.querySelector) == null ? void 0 : kt.call(k, '[data-k="' + CSS.escape(I) + '"]') : A, X = et && xu(et, M);
      if (X === n && n.getAttribute("aria-pressed") + "|" + n.dataset.act === W && performance.now() - V < 420) {
        requestAnimationFrame(pt);
        return;
      }
      (((ot = X == null ? void 0 : X.matches) != null && ot.call(X, "button.tfIcon") ? X : n).firstElementChild || u).animate([{ ...g, filter: x }, { scale: "1", rotate: "none", filter: "blur(0px)" }], { duration: l.wout, easing: ea[l.ease] }), F.cancel(), n._warp = 0;
    };
    pt();
  });
}
function rh(n, l, i) {
  var W;
  if (za() || !n || !l) return;
  const u = ba.expand, g = n.getBoundingClientRect(), x = "inset(" + (l.top - g.top).toFixed(1) + "px " + (g.right - l.right).toFixed(1) + "px " + (g.bottom - l.bottom).toFixed(1) + "px " + (l.left - g.left).toFixed(1) + "px round 24px)", k = n.firstElementChild, A = k == null ? void 0 : k.querySelector('.tfBack, [data-close], [data-wb="graph-close"]'), I = [...n.children].slice(1);
  n.animate([{ clipPath: x }, { clipPath: "inset(0px 0px 0px 0px round 0px)" }], { duration: u.dur, easing: ea[u.ease] });
  const M = (W = k == null ? void 0 : k.querySelector(".tfIcon,.wbIcon")) == null ? void 0 : W.getBoundingClientRect();
  k && M && i && k.animate([{ transform: "translate(" + (i.left - M.left).toFixed(1) + "px," + (i.top - M.top).toFixed(1) + "px)" }, { transform: "none" }], { duration: u.dur, easing: ea[u.ease] }), A == null || A.animate([{ opacity: 0 }, { opacity: 0, offset: 0.5 }, { opacity: 1 }], { duration: u.dur, easing: ea[u.ease] }), I.forEach((F, V) => {
    F.animate([{ opacity: 0, transform: "translateY(6px)" }, { opacity: 1, transform: "none" }], { duration: 260, delay: u.delay + V * u.stagger, easing: ea.standard, fill: "backwards" });
  });
}
function sh(n, l, i) {
  if (za() || !n || !l) {
    i();
    return;
  }
  const u = ba.expand, g = u.dur * u.back / 100, x = n.getBoundingClientRect(), k = "inset(" + (l.top - x.top).toFixed(1) + "px " + (x.right - l.right).toFixed(1) + "px " + (x.bottom - l.bottom).toFixed(1) + "px " + (l.left - x.left).toFixed(1) + "px round 24px)";
  [...n.children].slice(1).forEach((W) => W.animate([{ opacity: 1 }, { opacity: 0 }], { duration: g * 0.3, easing: ea.standard, fill: "forwards" }));
  const A = n.animate([{ clipPath: "inset(0px 0px 0px 0px round 0px)" }, { clipPath: k, opacity: 1, offset: 0.85 }, { clipPath: k, opacity: 0 }], { duration: g, easing: ea.standard, fill: "forwards" });
  let I = !1;
  const M = () => {
    I || (I = !0, i());
  };
  A.finished.then(M, M), setTimeout(M, g + 80);
}
const yu = (n) => {
  let l = "M" + n[0][0].toFixed(1) + " " + n[0][1].toFixed(1);
  for (let i = 0; i < n.length - 1; i++) {
    const u = n[i - 1] || n[i], g = n[i], x = n[i + 1], k = n[i + 2] || x, A = [g[0] + (x[0] - u[0]) / 6, g[1] + (x[1] - u[1]) / 6], I = [x[0] - (k[0] - g[0]) / 6, x[1] - (k[1] - g[1]) / 6];
    l += "C" + A.map((M) => M.toFixed(1)).join(" ") + " " + I.map((M) => M.toFixed(1)).join(" ") + " " + x.map((M) => M.toFixed(1)).join(" ");
  }
  return l;
}, ku = (n, l, i, u = "mvGrid") => [0, 1, 2].map((g) => {
  const x = (l + (i - l) * g / 2).toFixed(1);
  return '<line class="' + u + '" x1="0" x2="' + n + '" y1="' + x + '" y2="' + x + '"/>';
}).join("");
function Mu(n, l = n.querySelector(".mvLine"), i = n.querySelectorAll(".mvArea,.mvDot")) {
  if (za() || !(l != null && l.getTotalLength)) return;
  const u = ba.graphs, g = l.getTotalLength();
  l.animate([{ strokeDasharray: g, strokeDashoffset: g }, { strokeDasharray: g, strokeDashoffset: 0 }], { duration: u.draw, easing: ea.standard }), [...i].forEach((x, k) => x.animate([{ opacity: 0 }, { opacity: 1 }], { duration: u.draw * 0.6, delay: u.draw * 0.3 + k * 12, easing: ea.standard, fill: "backwards" }));
}
function tc(n, l, i, u, g) {
  if (n.getAnimations().forEach((W) => W.cancel()), n.style.left = u + "px", n.style.width = g + "px", za() || l === u && i === g) return;
  const x = ba.tabs, k = x.stretch / 100, A = (W, F) => ({ left: W + "px", width: F + "px" }), M = u > l ? A(l + (u - l) * (0.15 * (1 - k)), u + g - (l + (u - l) * (0.15 * (1 - k)))) : A(u, l + i - u - (l - u) * (0.15 * (1 - k)));
  n.animate([A(l, i), { offset: 0.5, ...M }, A(u, g)], { duration: x.dur, easing: ea.standard });
}
function lh(n) {
  const l = ":is(.themeChoice,.wbSegments,.tfHeightTabs,.hcSeg,.tfSeg)", i = (g) => g.querySelector(':scope>[aria-pressed="true"],:scope>[aria-checked="true"],:scope>.active'), u = (g, x) => x ? [...g.children].indexOf(x) : -1;
  n.addEventListener("click", (g) => {
    var ht, dt, kt;
    const x = (dt = (ht = g.target).closest) == null ? void 0 : dt.call(ht, l + ">button"), k = x == null ? void 0 : x.parentElement;
    if (!k || za() || x.disabled) return;
    const A = i(k);
    if (!A || A === x) return;
    const I = u(k, A), M = k.getBoundingClientRect(), W = A.getBoundingClientRect(), F = getComputedStyle(A).borderRadius, V = k.getRootNode(), z = bu(k), pt = (kt = z.dataset) == null ? void 0 : kt.k, et = wu(k, z), X = performance.now(), G = () => {
      var it, Zt, L;
      const ot = pt && !z.isConnected ? (it = V.querySelector) == null ? void 0 : it.call(V, '[data-k="' + CSS.escape(pt) + '"]') : z, nt = ot && xu(ot, et), at = (Zt = nt == null ? void 0 : nt.matches) != null && Zt.call(nt, l) ? i(nt) : null;
      if (!at || u(nt, at) === I) {
        performance.now() - X < 700 && requestAnimationFrame(G);
        return;
      }
      const E = nt.getBoundingClientRect(), Ct = at.getBoundingClientRect(), st = getComputedStyle(at);
      (L = nt.querySelector(":scope>.mvSegInd")) == null || L.remove();
      const Ot = document.createElement("span");
      Ot.className = "mvSegInd", Ot.style.cssText = "top:" + (Ct.top - E.top - nt.clientTop) + "px;height:" + Ct.height + "px;border-radius:" + F + ";background:" + st.backgroundColor + ";box-shadow:" + st.boxShadow, getComputedStyle(nt).position === "static" && (nt.style.position = "relative"), nt.prepend(Ot), nt.classList.add("mvSegMoving"), tc(Ot, W.left - M.left - nt.clientLeft, W.width, Ct.left - E.left - nt.clientLeft, Ct.width), clearTimeout(nt._seg), nt._seg = setTimeout(() => {
        Ot.remove(), nt.classList.remove("mvSegMoving");
      }, ba.tabs.dur + 20);
    };
    requestAnimationFrame(G);
  }, !0);
}
const Su = (n) => getComputedStyle(n).placeItems.startsWith("end");
function pp(n) {
  const l = n.firstElementChild;
  if (za() || !l || l.classList.contains("still")) return;
  const i = ba.dialog;
  n.animate([{ opacity: 0, backdropFilter: "blur(0px)" }, { opacity: 1, backdropFilter: "blur(" + i.blur + "px)" }], { duration: i.open, easing: ea.standard }), l.style.animation = "none", l.animate(Su(n) ? [{ transform: "translateY(100%)" }, { transform: "none" }] : [{ opacity: 0, transform: "scale(" + i.from / 100 + ")" }, { opacity: 1, transform: "none" }], { duration: i.open, easing: ea[i.ease] }), [...(l.classList.contains("tfMorePair") && l.querySelector(".tfMore") || l).children].forEach((g, x) => g.animate([{ opacity: 0 }, { opacity: 1 }], { duration: i.open * 0.6, delay: i.open * 0.35 + x * 40, easing: ea.standard, fill: "backwards" }));
}
function dh(n, l) {
  const i = n == null ? void 0 : n.firstElementChild;
  if (za() || !i || n.hidden || n._closing) {
    l();
    return;
  }
  const u = ba.dialog;
  n._closing = !0, n.style.pointerEvents = "none", n.animate([{ opacity: 1, backdropFilter: "blur(" + u.blur + "px)" }, { opacity: 0, backdropFilter: "blur(0px)" }], { duration: u.close, easing: ea.exit, fill: "forwards" });
  const g = i.animate(Su(n) ? [{ transform: "none" }, { transform: "translateY(100%)" }] : [{ opacity: 1, transform: "none" }, { opacity: 0, transform: "scale(" + u.from / 100 + ")" }], { duration: u.close, easing: ea.exit, fill: "forwards" });
  let x = !1;
  const k = () => {
    x || (x = !0, n._closing = !1, n.style.pointerEvents = "", n.getAnimations().forEach((A) => A.cancel()), i.getAnimations().forEach((A) => A.cancel()), l());
  };
  g.finished.then(k, k), setTimeout(k, u.close + 80);
}
const ch = '<span class="mvTick" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M20 6L9 17L4 12" pathLength="1"/></svg></span>';
function ph(n, l) {
  n.replaceChildren(), n.insertAdjacentHTML("afterbegin", ch), n.appendChild(Object.assign(document.createElement("span"), { className: "mvToastText", textContent: l }));
}
function uh(n) {
  if (za()) return;
  const l = ba.confirm;
  n.animate([{ opacity: 0, translate: "0 18px" }, { opacity: 1, translate: "0 0" }], { duration: l.dur, easing: ea.spring });
  const i = n.querySelector(".mvTick path");
  i && l.draw && i.animate([{ strokeDasharray: "1", strokeDashoffset: "1" }, { strokeDasharray: "1", strokeDashoffset: "0" }], { duration: 420, delay: l.dur * 0.5, easing: ea.standard, fill: "backwards" });
}
const up = (n, l, i, u, g = 1) => (n + l * i * g) * Math.pow(u, g);
function fp(n) {
  const l = ba.drag.squash / 100;
  !n || za() || !l || n.animate([{ transform: "scale(" + (1 + l * 0.4) + "," + (1 - l) + ")" }, { transform: "scale(" + (1 - l * 0.1) + "," + (1 + l * 0.24) + ")" }, { transform: "none" }], { duration: 340, easing: "ease-out" });
}
function hp(n) {
  if (!n || za()) return;
  const l = ba.expand;
  [...n.children].slice(1).forEach((i, u) => i.animate([{ opacity: 0, transform: "translateY(6px)" }, { opacity: 1, transform: "none" }], { duration: 260, delay: l.delay + u * l.stagger, easing: "cubic-bezier(.2,0,0,1)", fill: "backwards" }));
}
const sn = 6e4, Fe = 36e5, Un = 864e5, Xl = 1440, fh = 6, hh = 10 * sn, mp = 3, mh = 3, Vd = { day: [6, 22], waking: [7, 23], all: [0, 24] }, gh = [[-5, [91, 141, 239]], [5, [79, 195, 230]], [12, [95, 211, 160]], [18, [255, 211, 77]], [24, [255, 159, 67]], [30, [255, 91, 79]]], vh = "M6.5 18.5h11a4 4 0 0 0 .4-7.98 5.5 5.5 0 0 0-10.6-1.1A4.5 4.5 0 0 0 6.5 18.5Z", gp = (n, l, i, u) => '<circle cx="' + n + '" cy="' + l + '" r="' + i + '"/><path d="' + [0, 45, 90, 135, 180, 225, 270, 315].map((g) => {
  const x = Math.cos(g * Math.PI / 180), k = Math.sin(g * Math.PI / 180), A = i + 2, I = i + 2 + u;
  return "M" + (n + x * A).toFixed(2) + " " + (l + k * A).toFixed(2) + "L" + (n + x * I).toFixed(2) + " " + (l + k * I).toFixed(2);
}).join("") + '"/>', $i = (n) => '<path d="' + vh + '"' + (n ? ' transform="' + n + '"' : "") + "/>", Xi = (n) => '<path d="' + n + '"/>', vp = '<path d="M19.5 14.5A7.5 7.5 0 1 1 9.5 4.5a6 6 0 0 0 10 10Z"/>';
function bh(n, l) {
  const i = "translate(0,-3)";
  switch (n) {
    case "sunny":
      return l ? vp : gp(12, 12, 4, 2.5);
    case "clear-night":
      return vp;
    case "partlycloudy":
      return (l ? '<path d="M11.5 9.5A4.5 4.5 0 1 1 6 4a3.6 3.6 0 0 0 5.5 5.5Z"/>' : gp(7.5, 7.5, 2.6, 1.4)) + $i("translate(3.6,3) scale(.85)");
    case "cloudy":
      return $i();
    case "fog":
      return Xi("M4 8.5h16M3 12.5h18M5 16.5h14");
    case "rainy":
      return $i(i) + Xi("M8.5 18.5 7.5 21M12.5 18.5l-1 2.5M16.5 18.5l-1 2.5");
    case "pouring":
      return $i(i) + Xi("M7.5 18.5 6 22M11 18.5 9.5 22M14.5 18.5 13 22M18 18.5 16.5 22");
    case "snowy":
      return $i(i) + Xi("M8 20h.01M12 21.5h.01M16 20h.01");
    case "snowy-rainy":
      return $i(i) + Xi("M8.5 18.5 7.5 21M12 21h.01M16.5 18.5l-1 2.5");
    case "hail":
      return $i(i) + '<circle cx="8" cy="20.5" r="1"/><circle cx="12" cy="21.5" r="1"/><circle cx="16" cy="20.5" r="1"/>';
    case "lightning":
      return $i(i) + Xi("M12.5 16 10.5 19.5h3l-2 3");
    case "lightning-rainy":
      return $i(i) + Xi("M12.5 16 10.5 19.5h3l-2 3M7.5 18.5l-1 2.5M17.5 18.5l-1 2.5");
    case "windy":
    case "windy-variant":
      return Xi("M3 8.5h10.5a2.5 2.5 0 1 0-2.5-2.5M3 12h15.5a2.5 2.5 0 1 1-2.5 2.5M3 15.5h8");
    default:
      return '<circle cx="12" cy="12" r="8"/>' + Xi("M12 8v5M12 16h.01");
  }
}
const Ac = (n, l) => '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + bh(n, l) + "</svg>", wh = /* @__PURE__ */ new Set(["rainy", "pouring", "lightning", "lightning-rainy", "hail", "snowy", "snowy-rainy"]), xh = 30 * sn, yh = 7, kh = 3, bp = 1, Mh = sn, Sh = 15 * sn, Ch = 5, Oe = {
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
}, Bt = {
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
}, Th = {
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
}, Lh = ["n", "nne", "ne", "ene", "e", "ese", "se", "sse", "s", "ssw", "sw", "wsw", "w", "wnw", "nw", "nnw"], Ah = Object.keys(Bt.phases), Eh = { low: "var(--success-color, #43a047)", moderate: "var(--warning-color, #ffa600)", high: "var(--orange-color, #ff9800)", very_high: "var(--error-color, #db4437)", extreme: "var(--purple-color, #926bc7)" }, wp = { good: "var(--success-color, #43a047)", fair: "var(--lime-color, #cddc39)", moderate: "var(--warning-color, #ffa600)", poor: "var(--orange-color, #ff9800)", very_poor: "var(--error-color, #db4437)", extremely_poor: "var(--purple-color, #926bc7)" }, Cu = [["good", 15], ["fair", 25], ["moderate", 37.5], ["poor", 50], ["very_poor", 75], ["extremely_poor", 1 / 0]], jd = 100, xp = "µg/m³", _h = "weather_alerts.air_quality_pollen", oc = ["aqi", "pm25", "pm10", "nitrogen_dioxide", "ozone"], Dh = { "m/s": 1, "km/h": 1 / 3.6, mph: 0.44704, kn: 0.514444, "ft/s": 0.3048 }, Bh = [0.5, 1.6, 3.4, 5.5, 8, 10.8, 13.9, 17.2, 20.8, 24.5, 28.5, 32.7], Rh = { hPa: 1, mbar: 1, kPa: 10, inHg: 33.8639, mmHg: 1.33322 }, Ph = { daily: 1, hourly: 2 }, Ft = (n) => String(n ?? "").replace(/[&<>"']/g, (l) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[l]), gn = (n, l) => n.replace(/\{(\w+)\}/g, (i, u) => l[u] ?? ""), tr = (n) => '<svg class="wbIcon" viewBox="0 0 24 24" aria-hidden="true"><path d="' + n + '"/></svg>', yp = /* @__PURE__ */ new Map();
function Tu(n) {
  let l = yp.get(n);
  if (l === void 0) {
    const i = "http://www.w3.org/2000/svg", u = document.createElementNS(i, "svg"), g = document.createElementNS(i, "path");
    u.setAttribute("viewBox", "0 0 24 24"), u.style.cssText = "position:absolute;width:24px;height:24px;visibility:hidden;pointer-events:none", g.setAttribute("d", n), u.append(g), document.body.append(u);
    const x = g.getBBox();
    u.remove();
    const k = Math.max(x.width, x.height), A = k ? 26 * 24 / k : 0, I = A / 24;
    l = k ? "width:" + A.toFixed(2) + "px;height:" + A.toFixed(2) + "px;translate:" + ((12 - x.x - x.width / 2) * I).toFixed(2) + "px " + ((12 - x.y - x.height / 2) * I).toFixed(2) + "px" : "", yp.set(n, l);
  }
  return l ? '<svg class="wbIcon" viewBox="0 0 24 24" aria-hidden="true" style="' + l + '"><path d="' + n + '"/></svg>' : tr(n);
}
const Nh = () => {
  var n;
  return !!((n = window.matchMedia) != null && n.call(window, "(prefers-reduced-motion: reduce)").matches);
}, Ke = (n) => n != null && n !== "" && Number.isFinite(Number(n)), kp = /* @__PURE__ */ new Map(), Mp = /* @__PURE__ */ new Map(), Ec = /* @__PURE__ */ new WeakMap(), Hh = (n) => {
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
function De(n, l, i) {
  const u = Number(n);
  if (Number.isNaN(u)) return String(n);
  const g = (l == null ? void 0 : l.number_format) === "none", x = { maximumFractionDigits: 2, ...i, ...g ? { useGrouping: !1 } : {} }, k = g ? "en-US" : Hh(l), A = JSON.stringify([k, x]);
  let I = kp.get(A);
  if (!I) {
    try {
      I = new Intl.NumberFormat(k, x);
    } catch {
      I = new Intl.NumberFormat(void 0, x);
    }
    kp.set(A, I);
  }
  return I.format(u);
}
const Jc = (n) => {
  var l;
  return ((l = n == null ? void 0 : n.locale) == null ? void 0 : l.language) || (n == null ? void 0 : n.language) || void 0;
};
function Ih(n) {
  if (!n) return (/* @__PURE__ */ new Date("January 1, 2023 22:00:00")).toLocaleString().includes("10");
  if (Ec.has(n)) return Ec.get(n);
  const l = n.time_format, i = l === "language" || l === "system" || !l ? (/* @__PURE__ */ new Date("January 1, 2023 22:00:00")).toLocaleString(l === "language" ? n.language : void 0).includes("10") : l === "12";
  return Ec.set(n, i), i;
}
const Lu = (n) => {
  var l, i;
  return ((l = n == null ? void 0 : n.locale) == null ? void 0 : l.time_zone) === "server" && ((i = n == null ? void 0 : n.config) != null && i.time_zone) ? n.config.time_zone : void 0;
};
function Au(n, l) {
  const i = JSON.stringify([n, l]);
  let u = Mp.get(i);
  if (!u) {
    try {
      u = new Intl.DateTimeFormat(n, l);
    } catch {
      u = new Intl.DateTimeFormat(void 0, { ...l, timeZone: void 0 });
    }
    Mp.set(i, u);
  }
  return u;
}
const vn = (n, l) => Au(Jc(l), { hour: "numeric", minute: "2-digit", hourCycle: Ih(l == null ? void 0 : l.locale) ? "h12" : "h23", timeZone: Lu(l) }).format(n), Sp = (n, l) => Au(Jc(l), { weekday: "short", timeZone: Lu(l) }).format(n), Fh = (n, l) => n.toLocaleDateString(Jc(l), { weekday: "narrow" }), oa = (n, l) => Ke(l) ? De(Math.round(Number(l)), n.locale) + "°" : "–", qr = (n) => {
  const l = new Date(n);
  return l.setHours(0, 0, 0, 0), l;
}, ll = (n, l) => n.getFullYear() === l.getFullYear() && n.getMonth() === l.getMonth() && n.getDate() === l.getDate(), Rn = Math.PI / 180, Oh = 2440588, qh = 2451545, ic = Rn * 23.4397, Wh = 149598e3, Vh = -0.833 * Rn, jh = 0.133 * Rn, Cp = 5 * sn, Eu = (n) => n.getTime() / Un - 0.5 + Oh - qh, _u = (n, l) => Math.atan2(Math.sin(n) * Math.cos(ic) - Math.tan(l) * Math.sin(ic), Math.cos(n)), Du = (n, l) => Math.asin(Math.sin(l) * Math.cos(ic) + Math.cos(l) * Math.sin(ic) * Math.sin(n)), zh = (n, l) => Rn * (280.16 + 360.9856235 * n) - l, Gh = (n, l, i) => Math.asin(Math.sin(l) * Math.sin(i) + Math.cos(l) * Math.cos(i) * Math.cos(n));
function Bu(n) {
  const l = Rn * (357.5291 + 0.98560028 * n), i = Rn * (1.9148 * Math.sin(l) + 0.02 * Math.sin(2 * l) + 3e-4 * Math.sin(3 * l)), u = l + i + Rn * 102.9372 + Math.PI;
  return { ra: _u(u, 0), dec: Du(u, 0), dist: Wh };
}
function Ru(n) {
  const l = Rn * (218.316 + 13.176396 * n), i = Rn * (134.963 + 13.064993 * n), u = Rn * (93.272 + 13.22935 * n), g = l + Rn * 6.289 * Math.sin(i), x = Rn * 5.128 * Math.sin(u);
  return { ra: _u(g, x), dec: Du(g, x), dist: 385001 - 20905 * Math.cos(i) };
}
const Pu = (n, l, i, u) => {
  const g = Eu(l), x = n(g);
  return Gh(zh(g, Rn * -u) - x.ra, Rn * i, x.dec);
}, rc = (n, l, i) => Pu(Bu, n, l, i), Uh = (n, l, i) => Pu(Ru, n, l, i);
function Nu(n, l, i, u) {
  const g = {};
  let x = i.getTime(), k = n(i) - l;
  for (let A = x + Cp; A <= u.getTime(); A += Cp) {
    const I = n(new Date(A)) - l;
    if (k < 0 != I < 0) {
      const M = new Date(x + (A - x) * k / (k - I));
      I > 0 ? g.rise ?? (g.rise = M) : g.set ?? (g.set = M);
    }
    x = A, k = I;
  }
  return g;
}
const Hu = (n) => {
  const l = qr(n);
  return [l, new Date(l.getTime() + Un)];
}, Yh = (n, l, i) => Nu((u) => rc(u, l, i), Vh, ...Hu(n)), Zh = (n, l, i) => Nu((u) => Uh(u, l, i), jh, ...Hu(n));
function _c(n) {
  const l = Eu(n), i = Bu(l), u = Ru(l), g = Math.acos(Math.sin(i.dec) * Math.sin(u.dec) + Math.cos(i.dec) * Math.cos(u.dec) * Math.cos(i.ra - u.ra)), x = Math.atan2(i.dist * Math.sin(g), u.dist - i.dist * Math.cos(g)), k = Math.atan2(Math.cos(i.dec) * Math.sin(i.ra - u.ra), Math.sin(i.dec) * Math.cos(u.dec) - Math.cos(i.dec) * Math.sin(u.dec) * Math.cos(i.ra - u.ra));
  return { fraction: (1 + Math.cos(x)) / 2, phase: 0.5 + 0.5 * x * (k < 0 ? -1 : 1) / Math.PI };
}
const Kh = (n) => {
  const l = n * 28;
  return l < 0.5 || l > 27.5 ? "new_moon" : l < 6.5 ? "waxing_crescent" : l < 7.5 ? "first_quarter" : l < 13.5 ? "waxing_gibbous" : l < 14.5 ? "full_moon" : l < 20.5 ? "waning_gibbous" : l < 21.5 ? "last_quarter" : "waning_crescent";
}, Jl = (n) => {
  const l = n == null ? void 0 : n.config;
  return l && Ke(l.latitude) && Ke(l.longitude) ? { lat: Number(l.latitude), lon: Number(l.longitude) } : null;
};
function dl(n, l) {
  var M, W, F;
  const i = Jl(n), u = i ? Yh(l, i.lat, i.lon) : {}, g = (M = n == null ? void 0 : n.states) == null ? void 0 : M["sun.sun"], x = qr(l).getTime(), k = (V) => {
    const z = V ? new Date(V) : null;
    return z && Number.isFinite(z.getTime()) && qr(z).getTime() === x ? z : null;
  }, A = k((W = g == null ? void 0 : g.attributes) == null ? void 0 : W.next_rising), I = k((F = g == null ? void 0 : g.attributes) == null ? void 0 : F.next_setting);
  return A && (u.rise = A), I && (u.set = I), u;
}
function $h(n) {
  var u;
  const l = (u = n == null ? void 0 : n.states) == null ? void 0 : u["sun.sun"];
  if ((l == null ? void 0 : l.state) === "below_horizon" || (l == null ? void 0 : l.state) === "above_horizon") return l.state === "below_horizon";
  const i = Jl(n);
  return i ? rc(/* @__PURE__ */ new Date(), i.lat, i.lon) < 0 : !1;
}
const As = (n) => !!n && n.state !== "unavailable" && n.state !== "unknown", pl = (n, l) => {
  var u;
  const i = (u = n.entities) == null ? void 0 : u[l];
  return !i || !i.hidden && !i.entity_category;
}, Ta = (n, l, i) => {
  var u, g;
  for (const x of l) {
    const k = (u = n.states) == null ? void 0 : u[x];
    if (!As(k)) continue;
    const A = (g = k.attributes) == null ? void 0 : g[i];
    if (A != null && A !== "") return { stateObj: k, value: A };
  }
}, Xh = (n, l) => l.map((i) => {
  var u;
  return (u = n.states) == null ? void 0 : u[i];
}).find(As), Jh = (n, l, i) => l.map((u) => {
  var g;
  return (g = n.states) == null ? void 0 : g[u];
}).find((u) => {
  var g;
  return As(u) && (((g = u.attributes) == null ? void 0 : g.supported_features) == null || Number(u.attributes.supported_features) & Ph[i]);
});
function Fr(n, l, i) {
  var x, k, A, I;
  const u = ((k = (x = n.config) == null ? void 0 : x.unit_system) == null ? void 0 : k.length) || "", g = (l == null ? void 0 : l.attributes) || {};
  switch (i) {
    case "precipitation":
      return g.precipitation_unit || (u === "km" ? "mm" : "in");
    case "pressure":
      return g.pressure_unit || (u === "km" ? "hPa" : "inHg");
    case "wind_speed":
    case "wind_gust_speed":
      return g.wind_speed_unit || u + "/h";
    case "visibility":
      return g.visibility_unit || u;
    default:
      return g.temperature_unit || ((I = (A = n.config) == null ? void 0 : A.unit_system) == null ? void 0 : I.temperature) || "";
  }
}
function ec(n, l, i, u) {
  try {
    if (typeof n.formatEntityAttributeValueToParts == "function") {
      const [g, ...x] = n.formatEntityAttributeValueToParts(l, i, u).map((k) => k.value);
      return { number: g, unit: x.join("").trim() };
    }
  } catch {
  }
  return { number: De(u, n.locale), unit: Fr(n, l, i) };
}
function Tp(n, l, i, u) {
  try {
    if (typeof n.formatEntityAttributeValue == "function") return n.formatEntityAttributeValue(l, i, u);
  } catch {
  }
  const g = ec(n, l, i, u);
  return (g.number + " " + g.unit).trim();
}
function Ji(n, l) {
  var u;
  try {
    if (typeof n.formatEntityState == "function") return n.formatEntityState(l);
  } catch {
  }
  const i = (u = l.attributes) == null ? void 0 : u.unit_of_measurement;
  return Th[l.state] || (i && Ke(l.state) ? De(l.state, n.locale) + " " + i : l.state);
}
function Hr(n, l) {
  var i;
  try {
    if (typeof n.formatEntityName == "function") return n.formatEntityName(l, { type: "entity" });
  } catch {
  }
  return ((i = l.attributes) == null ? void 0 : i.friendly_name) || l.entity_id;
}
const Lp = (n) => n < 3 ? "low" : n < 6 ? "moderate" : n < 8 ? "high" : n < 11 ? "very_high" : "extreme", zd = (n) => Cu.find(([, l]) => n <= l)[0];
function Qh(n, l) {
  if (l === "Beaufort") return Math.round(n);
  const i = l ? Dh[l] : void 0;
  if (i === void 0) return;
  const u = Bh.findIndex((g) => n * i < g);
  return u === -1 ? 12 : u;
}
const Ap = (n, l) => {
  const i = l ? Rh[l] : void 0;
  return i === void 0 ? void 0 : n * i;
}, Ep = (n) => Object.keys(n.states || {}).find((l) => {
  var i, u;
  return l.startsWith("sensor.") && ((u = (i = n.entities) == null ? void 0 : i[l]) == null ? void 0 : u.platform) === "moon";
}), Dc = (n) => Object.values(n.states || {}).filter((l) => {
  var i, u;
  return l.entity_id.startsWith("sensor.") && ((i = l.attributes) == null ? void 0 : i.device_class) === "precipitation" && ["total", "total_increasing"].includes(((u = l.attributes) == null ? void 0 : u.state_class) ?? "") && pl(n, l.entity_id);
}).map((l) => l.entity_id).sort()[0];
function tm(n) {
  var i;
  const l = {};
  for (const [u, g] of Object.entries(((i = n == null ? void 0 : n.core) == null ? void 0 : i.integration) ?? {})) {
    if (g && "integration_type" in g) {
      l[u] = g.categories;
      continue;
    }
    for (const [x, k] of Object.entries((g == null ? void 0 : g.integrations) ?? {})) l[x] = k == null ? void 0 : k.categories;
  }
  return l;
}
const Iu = (n, l, i) => {
  var g, x, k;
  const u = (x = (g = n.entities) == null ? void 0 : g[i]) == null ? void 0 : x.platform;
  return !!u && !!((k = l[u]) != null && k.includes(_h));
};
function em(n, l) {
  const i = /* @__PURE__ */ new Map();
  return Object.values(n.states || {}).filter((u) => {
    var g;
    return u.entity_id.startsWith("sensor.") && oc.includes(((g = u.attributes) == null ? void 0 : g.device_class) ?? "") && pl(n, u.entity_id) && Iu(n, l, u.entity_id);
  }).sort((u, g) => u.entity_id.localeCompare(g.entity_id)).forEach((u) => {
    i.has(u.attributes.device_class) || i.set(u.attributes.device_class, u.entity_id);
  }), oc.map((u) => i.get(u)).filter(Boolean);
}
const am = (n, l) => Object.values(n.states || {}).filter((i) => {
  var u, g;
  return i.entity_id.startsWith("sensor.") && pl(n, i.entity_id) && Iu(n, l, i.entity_id) && (((g = (u = n.entities) == null ? void 0 : u[i.entity_id]) == null ? void 0 : g.translation_key) ?? i.entity_id).toLowerCase().includes("pollen");
}).map((i) => i.entity_id).sort();
function _p(n, l, i) {
  const u = Math.max(l - n, 1e-6), g = i[i.length - 1], x = i.find((M) => u / M <= 4) ?? g * Math.ceil(u / (4 * g)), k = Math.floor(n / x) * x;
  let A = Math.ceil(l / x) * x;
  A === k && (A = k + x);
  const I = [];
  for (let M = k; M <= A + x / 1e3; M += x) I.push(M);
  return { min: k, max: A, ticks: I };
}
const nm = (n, l, i) => {
  const u = (k) => [1, 3, 5].map((A) => parseInt(k.slice(A, A + 2), 16)), g = u(n), x = u(l);
  return "rgb(" + g.map((k, A) => Math.round(k + (x[A] - k) * i)).join(", ") + ")";
}, om = (n, l, i, u) => {
  const g = i * Math.abs(1 - 2 * u), x = u < 0.5 ? 0 : 1;
  return "M " + n + " " + (l - i) + " A " + i + " " + i + " 0 0 0 " + n + " " + (l + i) + " A " + g + " " + i + " 0 0 " + x + " " + n + " " + (l - i) + " Z";
}, An = ({ icon: n, name: l, sub: i, visual: u, double: g, backdrop: x, cls: k, zone: A, callouts: I }) => '<div class="wbCard wbSquare' + (g ? " wbDouble" : "") + (x ? " wbHasBackdrop" : "") + (A != null ? " wbZoned" : "") + (k ? " " + k : "") + '">' + (x ? '<div class="wbBackdrop" aria-hidden="true">' + x + "</div>" : "") + '<div class="wbHead"><div class="wbChip wbPlain">' + Tu(n) + '</div><div class="wbText"><span class="wbName">' + Ft(l) + "</span>" + (i ? '<span class="wbSub">' + Ft(i) + "</span>" : "") + "</div></div>" + (A != null ? '<div class="wbZone">' + A + "</div>" + (I != null && I.length ? '<div class="wbCallouts">' + I.slice(0, 3).map((M) => Array.isArray(M) ? '<span class="wbCallout"><span>' + Ft(M[0]) + "</span><span>" + Ft(M[1]) + "</span></span>" : '<span class="wbCallout wbAdvice"><span>' + Ft(M) + "</span></span>").join("") + "</div>" : "") : '<div class="wbVisual">' + u + "</div>") + "</div>", Gd = (n) => '<div class="wbZoneM">' + n + "</div>", Mo = (n, l) => '<div class="wbValue"><span class="wbNum">' + Ft(n) + "</span>" + (l ? '<span class="wbUnitV">' + Ft(l) + "</span>" : "") + "</div>";
function im(n) {
  const l = n.max - n.min || 1, i = (A) => 100 - (Math.min(n.max, Math.max(n.min, A)) - n.min) / l * 100, u = (A) => A / Xl * 100 + "%", g = (A) => A.map((I) => I.t + "," + i(I.v)).join(" "), x = n.kind === "line" ? n.points : [];
  let k = '<div class="wbDayChart"><div class="wbDcSun">' + n.sun.map((A) => '<span class="wbDcSunMark" style="left:' + u(A.t) + '">' + tr(A.rise ? Oe.sunsetUp : Oe.sunsetDown) + Ft(A.label) + "</span>").join("") + "</div>";
  return k += '<div class="wbDcY">' + n.ticks.map((A) => '<span style="top:' + i(A) + '%">' + Ft(n.format(A)) + "</span>").join("") + "</div>", k += '<div class="wbDcPlot"><svg viewBox="0 0 ' + Xl + ' 100" preserveAspectRatio="none">' + n.night.map(([A, I]) => '<rect class="wbDcNight" x="' + A + '" y="0" width="' + (I - A) + '" height="100"></rect>').join("") + n.ticks.map((A) => '<line class="wbDcGrid" x1="0" x2="' + Xl + '" y1="' + i(A) + '" y2="' + i(A) + '" vector-effect="non-scaling-stroke"></line>').join("") + n.sun.map((A) => '<line class="wbDcSunLine" x1="' + A.t + '" x2="' + A.t + '" y1="0" y2="100" vector-effect="non-scaling-stroke"></line>').join("") + (n.past && n.past.length > 1 ? '<polyline class="wbDcPast" points="' + g(n.past) + '" vector-effect="non-scaling-stroke"></polyline>' : "") + (x.length > 1 ? '<polygon class="wbDcArea" points="' + x[0].t + ",100 " + g(x) + " " + x[x.length - 1].t + ',100"></polygon><polyline class="wbDcLine" points="' + g(x) + '" vector-effect="non-scaling-stroke"></polyline>' : "") + (n.now ? '<line class="wbDcNow" x1="' + n.now.t + '" x2="' + n.now.t + '" y1="0" y2="100" vector-effect="non-scaling-stroke"></line>' : "") + "</svg>" + (n.kind === "bars" ? n.points.filter((A) => A.v > 0).map((A) => '<i class="wbDcBar" style="left:' + u(A.t + 12) + ";width:" + u(36) + ";height:" + (100 - i(A.v)) + '%"></i>').join("") : "") + (n.now && n.kind === "line" ? '<i class="wbDcDot" style="left:' + u(n.now.t) + ";top:" + i(n.now.v) + '%"></i>' : "") + (n.peak ? '<span class="wbDcPeak" style="left:' + u(n.peak.t) + ";top:" + i(n.peak.v) + '%">' + Ft(n.peak.label) + "</span>" : "") + (n.note ? '<span class="wbDcNote">' + Ft(n.note) + "</span>" : "") + "</div>", k += '<div class="wbDcX">' + n.hours.map((A) => '<span class="' + (A.minor ? "wbMinor" : "") + '" style="left:' + u(A.t) + '">' + Ft(A.label) + "</span>").join("") + "</div></div>", k;
}
function Dp(n, l, i = 120, u = 300) {
  const k = n.map((G) => G.value), A = Math.min(...k), I = Math.max(...k), M = I - A || 1, W = (G) => G / (n.length - 1) * u, F = (G) => 18 + (1 - (G - A) / M) * (i - 18 - 18), V = n.map((G, ht) => [W(ht), F(G.value)]), z = V.length > 2 ? yu(V) : "M" + V.map((G) => G[0].toFixed(1) + " " + G[1].toFixed(1)).join("L"), pt = k.indexOf(I), et = k.indexOf(A), X = (G) => G === 0 ? "start" : G === n.length - 1 ? "end" : "middle";
  return '<svg class="wbChart" viewBox="0 0 ' + u + " " + i + '" aria-hidden="true">' + ku(u, 18, i - 18) + ('<path class="wbArea" d="' + z + "L" + u + " " + (i - 18) + "L0 " + (i - 18) + 'Z"></path>') + '<path class="wbLine" d="' + z + '" vector-effect="non-scaling-stroke"></path><text x="' + W(pt) + '" y="' + (F(I) - 6) + '" text-anchor="' + X(pt) + '">' + Ft(l(I)) + '</text><text x="' + W(et) + '" y="' + (F(A) + 14) + '" text-anchor="' + X(et) + '">' + Ft(l(A)) + '</text><text x="0" y="' + i + '" text-anchor="start">' + Ft(n[0].label) + '</text><text x="' + u + '" y="' + i + '" text-anchor="end">' + Ft(n[n.length - 1].label) + "</text></svg>";
}
function rm(n, l) {
  const x = n.map((F) => F.value).concat([]), k = Math.min(...x) - 2, A = Math.max(...x) + 1, I = A - k || 1, M = 300 / n.length, W = (F) => (1 - (F - k) / I) * 104;
  return '<svg class="wbChart" viewBox="0 0 300 120" aria-hidden="true">' + n.map((F, V) => '<rect class="wbBar' + (F.now ? " wbNowBar" : "") + '" x="' + (V * M + M * 0.2) + '" y="' + W(F.value) + '" width="' + M * 0.6 + '" height="' + (104 - W(F.value)) + '" rx="6"></rect><text x="' + (V * M + M / 2) + '" y="120" text-anchor="middle">' + Ft(F.label) + "</text>").join("") + "</svg>";
}
const sm = [
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
], lm = [[60, 92, 2.2], [72, 98, 1.6], [48, 100, 1.5], [85, 88, 1.8], [38, 92, 1.3], [66, 84, 1.2], [95, 80, 1.3], [25, 40, 1.4], [82, 30, 1.3], [55, 108, 1.2]], Bp = [[54.4, 95, 1.8], [44.5, 56.6, 1.5], [33.5, 56.6, 1.1], [23.7, 40.1, 1.1]], dm = [[30, 62], [48, 48], [72, 60], [96, 82], [86, 112], [30, 108], [16, 86]];
let cm = 0;
function Rp(n, { getHass: l, entityId: i, style: u = "bitmap", motion: g = !0, cards: x, onOpen: k, hoursWindow: A } = {}) {
  var $a, Ho;
  const I = "wb" + ++cm + "-", M = document.createElement("div");
  M.className = "wb", M.dataset.style = u;
  const W = document.createElement("div");
  W.className = "wbBento", M.appendChild(W), n.replaceChildren(M);
  const F = ["aq_tile", "pollen_tile", "radar_tile"], V = ["current", "hourly", "sun", "pollen_tile", "moon", "uv_index", "aq_tile", "humidity", "pressure", "wind", "visibility", "radar_tile", "compared_to_average", "precipitation", "air_quality"].filter((f) => !x || x.includes(f)), z = { current: "wide", hourly: "wide", compared_to_average: "double" }, pt = ["sun", "moon", "uv_index", "aq_tile", "pollen_tile", "humidity", "pressure", "wind"], et = {};
  V.forEach((f) => {
    const b = document.createElement("div");
    b.className = "wbItem", b.dataset.card = f, b.dataset.size = z[f] || "tile", b.hidden = !0, pt.includes(f) && (b.dataset.xl = ""), W.appendChild(b), et[f] = { el: b, html: null };
  });
  let X = !1, G = null, ht = 0, dt = -1, kt = !1, ot = null;
  const nt = "homecore-next-view", at = (() => {
    try {
      return localStorage.getItem(nt);
    } catch {
      return null;
    }
  })(), E = { graph: void 0, range: { preset: "day" }, picking: !1, openDay: void 0, opener: void 0, dayMode: "temperature", hourlyMode: "temperature", hourlyView: at === "bars" ? "bars" : "strip", aq: void 0 }, Ct = { todayHistory: void 0, rain: void 0, temperatureHistory: void 0, pressureHistory: void 0, aqHistory: void 0, categories: void 0, lastFetch: 0 };
  let st = /* @__PURE__ */ new Date(), Ot = /* @__PURE__ */ new Date();
  const it = {}, Zt = {}, L = {}, R = (f) => {
    var b;
    return ((b = L[f]) == null ? void 0 : b.forecast) ?? [];
  }, q = (f, b) => {
    var y;
    return L[b] ? (y = f.states) == null ? void 0 : y[L[b].entityId] : void 0;
  };
  function D(f) {
    const b = Zt[f];
    b && (b.unsub.then((y) => {
      typeof y == "function" && y();
    }).catch(() => {
    }), delete Zt[f]), L[f] && delete L[f];
  }
  function lt(f, b, y) {
    var H;
    if (typeof ((H = f.connection) == null ? void 0 : H.subscribeMessage) != "function") return;
    const C = { entityId: y };
    try {
      C.unsub = Promise.resolve(f.connection.subscribeMessage((U) => {
        X || Zt[b] !== C || (U != null && U.forecast ? L[b] = { entityId: y, forecast: U.forecast } : delete L[b], Ro());
      }, { type: "weather/subscribe_forecast", forecast_type: b, entity_id: y }));
    } catch (U) {
      C.unsub = Promise.reject(U);
    }
    C.unsub.catch(() => {
      Zt[b] === C && delete Zt[b];
    }), Zt[b] = C;
  }
  function ut(f, b) {
    var y;
    for (const C of ["daily", "hourly"]) {
      const H = Jh(f, b, C);
      ((y = Zt[C]) == null ? void 0 : y.entityId) !== (H == null ? void 0 : H.entity_id) && (D(C), H && lt(f, C, H.entity_id));
    }
  }
  const gt = (f, b, y, C = !1) => f.callWS({
    type: "history/history_during_period",
    start_time: y.toISOString(),
    end_time: (/* @__PURE__ */ new Date()).toISOString(),
    entity_ids: [b],
    minimal_response: C,
    no_attributes: C,
    significant_changes_only: !1
  });
  async function St(f, b) {
    var K, ft, Q;
    const y = Ta(f, b, "pressure");
    if (!y) return;
    const C = y.stateObj.entity_id, H = await gt(f, C, new Date(Date.now() - 3 * Fe)), U = (Q = (ft = (K = H == null ? void 0 : H[C]) == null ? void 0 : K.find((vt) => {
      var xt;
      return typeof ((xt = vt.a) == null ? void 0 : xt.pressure) == "number";
    })) == null ? void 0 : ft.a) == null ? void 0 : Q.pressure;
    Ct.pressureHistory = typeof U == "number" ? { entityId: C, value: U } : void 0;
  }
  async function Lt(f, b) {
    var ft;
    const y = Ta(f, b, "temperature");
    if (!y) return;
    const C = y.stateObj.entity_id, H = qr(/* @__PURE__ */ new Date()), U = await gt(f, C, new Date(H.getTime() - yh * Un)), K = /* @__PURE__ */ new Map();
    for (const Q of (U == null ? void 0 : U[C]) ?? []) {
      const vt = (ft = Q.a) == null ? void 0 : ft.temperature, xt = new Date((Q.lc ?? Q.lu) * 1e3);
      if (typeof vt != "number" || xt >= H) continue;
      const At = xt.toDateString();
      K.set(At, Math.max(K.get(At) ?? -1 / 0, vt));
    }
    Ct.temperatureHistory = { entityId: C, dailyHighs: [...K.values()], days: [...K.entries()].map(([Q, vt]) => ({ date: new Date(Q), high: vt })) };
  }
  async function $t(f) {
    const b = Dc(f);
    if (!b) return;
    const y = await f.callWS({ type: "recorder/statistic_during_period", statistic_id: b, rolling_window: { duration: { hours: 24 } } });
    Ct.rain = { entityId: b, change: (y == null ? void 0 : y.change) ?? void 0 };
  }
  function ae() {
    const f = l == null ? void 0 : l();
    if (!f || X || typeof f.callWS != "function") return;
    const b = Nn(f);
    Ct.lastFetch = Date.now(), [St(f, b), Lt(f, b), $t(f)].forEach((y) => y.then(() => Ro(), () => {
    }));
  }
  async function Fa() {
    const f = l == null ? void 0 : l();
    if (!f) return;
    const b = Ta(f, Nn(f), "temperature");
    if (!b) return;
    const y = b.stateObj.entity_id, C = qr(/* @__PURE__ */ new Date());
    try {
      const H = await gt(f, y, C), U = (K) => ((H == null ? void 0 : H[y]) ?? []).map((ft) => {
        var Q;
        return { time: ft.lu * 1e3, value: (Q = ft.a) == null ? void 0 : Q[K] };
      }).filter((ft) => typeof ft.value == "number");
      Ct.todayHistory = { day: C.toDateString(), fetched: Date.now(), temperature: U("temperature"), humidity: U("humidity") }, Ro();
    } catch {
    }
  }
  async function qt(f) {
    const b = l == null ? void 0 : l();
    if (b)
      try {
        const y = await gt(b, f, new Date(Date.now() - 24 * Fe), !0), C = ((y == null ? void 0 : y[f]) ?? []).filter((U) => Ke(U.s)), H = Math.max(1, Math.ceil(C.length / 48));
        Ct.aqHistory = { entityId: f, points: C.filter((U, K) => K % H === 0).map((U) => ({ label: vn(new Date(U.lu * 1e3), b), value: Number(U.s) })) }, Ro();
      } catch {
      }
  }
  function eo(f) {
    Ct.categories === void 0 && (Ct.categories = null, Promise.resolve().then(() => f.callWS({ type: "integration/descriptions" })).then((b) => {
      Ct.categories = tm(b);
    }, () => {
      Ct.categories = {};
    }).then(() => Ro()));
  }
  function Nn(f) {
    var y;
    const b = Object.keys(f.states || {}).filter((C) => C.startsWith("weather.") && pl(f, C)).sort();
    return i && ((y = f.states) != null && y[i]) ? [i, ...b.filter((C) => C !== i)] : b;
  }
  const ao = (f) => Ct.categories ? { air: em(f, Ct.categories), pollen: am(f, Ct.categories) } : { air: [], pollen: [] };
  function Qe(f, b, y, C) {
    if (u === "line") return '<span class="wbWx wbS' + b + ' wbLineIcon" aria-hidden="true">' + Ac(f, y || f === "clear-night") + "</span>";
    if (u === "smooth") {
      const H = jf(f, b === 90, y, I + "g-" + C);
      return '<span class="wbWx wbS' + b + " wb" + H.k[0].toUpperCase() + H.k.slice(1) + (H.night ? " wbNight" : "") + '" aria-hidden="true">' + H.svg + "</span>";
    }
    return '<span class="wbWx wbS' + b + '" aria-hidden="true"><canvas data-wb-wx="' + Ft(sc(f, y)) + '" data-size="' + b + '"></canvas></span>';
  }
  const Xt = () => R("daily").filter((f) => f.templow != null).slice(0, fh);
  function ce(f, b) {
    const y = new Date(b.datetime), C = /* @__PURE__ */ new Date();
    return ll(y, C) ? Bt.today : ll(y, new Date(C.getTime() + Un)) ? Bt.tomorrow : Sp(y, f);
  }
  const Ga = (f, b, y) => y === 0 ? ce(f, b) : Sp(new Date(b.datetime), f);
  function Yn(f, b) {
    var xt, At, Jt, jt;
    const y = Xh(f, b);
    if (!y) return "";
    const C = Xt(), H = E.openDay !== void 0 ? C[E.openDay] : void 0, U = Ta(f, b, "temperature"), K = C[0], ft = K && ll(new Date(K.datetime), /* @__PURE__ */ new Date()), Q = ((At = (xt = f.config) == null ? void 0 : xt.unit_system) == null ? void 0 : At.temperature) || ((Jt = y.attributes) == null ? void 0 : Jt.temperature_unit) || "";
    let vt = '<div class="wbCard wbWeather' + (H ? " wbIsOpen" : "") + '"><div class="wbClosed"' + (H ? " inert" : "") + '><div class="wbNow">' + (k ? '<button class="wbCurrent wbOpenPage" data-wb="open-page" data-wb-focus="open-page" aria-label="' + Ft(Bt.openPage) + '">' : '<div class="wbCurrent">') + Qe(y.state, 90, $h(f), "now") + '<div class="wbTempBlock">' + (U && Ke(U.value) ? '<div class="wbTemp"><span class="wbDeg">' + Ft(De(Math.round(Number(U.value)), f.locale)) + '</span><span class="wbUnit">' + Ft(Q) + "</span></div>" : "") + '<div class="wbPlace">' + Ft(((jt = f.config) == null ? void 0 : jt.location_name) ?? "") + "</div></div>" + (k ? "</button>" : "</div>") + '<div class="wbCondition"><div class="wbCondName">' + Ft(Ji(f, y)) + "</div>" + (ft && K.templow != null ? '<div class="wbRange">' + Ft(gn(Bt.range, { high: oa(f, K.temperature), low: oa(f, K.templow) })) + "</div>" : "") + "</div></div>";
    if (vt += fe(f) + ln(f), C.length) {
      const _t = ft && U && Ke(U.value) ? oa(f, U.value) : "", Qt = (Yt, Et, he) => Yt === 0 && _t ? '<span class="wbAsDay">' + Ft(Et) + '</span><span class="wbAsNow">' + Ft(he) + "</span>" : Ft(Et);
      vt += '<div class="wbColumns" role="list">' + C.map((Yt, Et) => '<button class="wbColumn" role="listitem" data-wb="day" data-index="' + Et + '" data-wb-focus="col-' + Et + '"><span class="wbDay">' + Qt(Et, Ga(f, Yt, Et), Bt.now) + "</span>" + Qe(Yt.condition ?? "cloudy", 60, !1, "col" + Et) + '<span class="wbTemps"><span class="wbHi">' + Qt(Et, oa(f, Yt.temperature), _t) + '</span><span class="wbLo">' + Ft(oa(f, Yt.templow)) + "</span></span></button>").join("") + "</div>", vt += '<div class="wbHalves" role="list">' + C.map((Yt, Et) => '<button class="wbTile" role="listitem" data-wb="day" data-index="' + Et + '" data-wb-focus="half-' + Et + '">' + Qe(Yt.condition ?? "cloudy", 40, !1, "half" + Et) + '<span class="wbText"><span class="wbName">' + Ft(ce(f, Yt)) + '</span><span class="wbSub">' + Ft(gn(Bt.highLow, { high: oa(f, Yt.temperature), low: oa(f, Yt.templow) })) + "</span></span></button>").join("") + "</div>";
    }
    return vt + "</div>" + (H ? me(f, b, H) : "") + "</div>";
  }
  const Ut = {
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
  }, ue = {
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
  function Me(f) {
    const b = Date.now(), y = R("hourly").filter((At) => new Date(At.datetime).getTime() > b - Fe).slice(0, 13);
    if (y.length < 2) return "";
    const C = (At) => vn(new Date(At.datetime), f), H = (At) => Ut[At.condition] || "", U = (At) => ue[At.condition] || At.condition;
    let K = H(y[0]);
    if (!K) return "";
    let ft = y[0], Q = 0;
    for (const At of y.slice(1))
      Q === 2 || U(At) === U(ft) || !H(At) || (K += (Q ? " and " : ", ") + H(At) + " from " + C(At), ft = At, Q++);
    const vt = Number(y[0].temperature), xt = y.filter((At) => Ke(At.temperature));
    if (Ke(vt) && xt.length) {
      const At = xt.reduce((jt, _t) => Number(_t.temperature) < Number(jt.temperature) ? _t : jt), Jt = xt.reduce((jt, _t) => Number(_t.temperature) > Number(jt.temperature) ? _t : jt);
      vt - Number(At.temperature) >= 3 ? K += ", down to " + oa(f, At.temperature) + " by " + C(At) : Number(Jt.temperature) - vt >= 3 && (K += ", up to " + oa(f, Jt.temperature) + " by " + C(Jt));
    }
    return K[0].toUpperCase() + K.slice(1) + ".";
  }
  const fe = (f) => {
    const b = Me(f);
    return b ? '<div class="wbSummary"><p class="wbSummaryText">' + Ft(b) + "</p></div>" : "";
  };
  function ln(f) {
    const [b, y] = Vd[A == null ? void 0 : A()] || Vd.day, C = Date.now(), H = R("hourly").filter((U) => {
      const K = new Date(U.datetime), ft = K.getHours();
      return K.getTime() > C - Fe / 2 && ft >= b && ft < y && Ke(U.temperature);
    }).slice(0, 4);
    return H.length ? '<div class="wbNextHours" role="list">' + H.map((U, K) => '<div class="wbHour" role="listitem"><span class="wbHourTime">' + Ft(vn(new Date(U.datetime), f)) + "</span>" + Qe(U.condition ?? "cloudy", 40, U.is_daytime === !1, "hr" + K) + '<span class="wbHourTemp">' + Ft(oa(f, U.temperature)) + "</span></div>").join("") + "</div>" : "";
  }
  function Wr(f) {
    const b = f.getTime(), y = Date.now() - Fe;
    return R("hourly").filter((C) => {
      const H = new Date(C.datetime).getTime();
      return H >= b && H < b + Un && H > y;
    });
  }
  function wn(f) {
    if (!f.length) return ["temperature"];
    const b = ["temperature"];
    return f.some((y) => y.precipitation != null || y.precipitation_probability != null) && b.push("precipitation"), f.some((y) => y.humidity != null) && b.push("humidity"), b;
  }
  function me(f, b, y) {
    const C = qr(new Date(y.datetime)), H = Wr(C), U = wn(H), K = U.includes(E.dayMode) ? E.dayMode : "temperature", ft = (Q) => Q === "humidity" ? Bt.humidity : Bt.modes[Q];
    return '<div class="wbOpen" data-wb-open="day"><div class="wbOpenHead">' + Qe(y.condition ?? "cloudy", 40, !1, "open") + '<div class="wbText"><span class="wbName">' + Ft(ce(f, y)) + '</span><span class="wbSub">' + Ft(gn(Bt.highLow, { high: oa(f, y.temperature), low: oa(f, y.templow) })) + '</span></div><button class="wbBack" title="' + Ft(Bt.back) + '" data-wb="close-day" data-wb-focus="back-day">' + tr(Oe.back) + "</button></div>" + (U.length > 1 ? '<div class="wbDayTabs"><div class="wbSegments" role="group">' + U.map((Q) => '<button aria-pressed="' + (Q === K) + '" data-wb="day-mode" data-mode="' + Q + '" data-wb-focus="day-mode-' + Q + '">' + Ft(ft(Q)) + "</button>").join("") + "</div></div>" : "") + '<div class="wbGraph">' + im(ze(f, b, C, H, K)) + "</div></div>";
  }
  function ze(f, b, y, C, H) {
    var $n;
    const U = y.getTime(), K = Date.now(), ft = ll(y, /* @__PURE__ */ new Date()), Q = (Le) => (Le - U) / sn, vt = (Le) => vn(new Date(Le), f), xt = (Le) => new Date(Le.datetime).getTime(), At = [0, 3, 6, 9, 12, 15, 18, 21].map((Le) => ({ t: Le * 60, label: vt(U + Le * Fe), minor: Le % 6 !== 0 })), { rise: Jt, set: jt } = dl(f, y), _t = [], Qt = [];
    Jt && (_t.push({ t: Q(Jt.getTime()), label: vt(Jt.getTime()), rise: !0 }), Qt.push([0, Q(Jt.getTime())])), jt && (_t.push({ t: Q(jt.getTime()), label: vt(jt.getTime()), rise: !1 }), Qt.push([Q(jt.getTime()), Xl]));
    const Yt = Jl(f);
    !Jt && !jt && Yt && rc(new Date(U + Un / 2), Yt.lat, Yt.lon) < 0 && Qt.push([0, Xl]);
    const Et = ft ? Q(K) : void 0, he = { hours: At, sun: _t, night: Qt };
    if (!C.length && !ft) return { ...he, kind: "line", points: [], min: 0, max: 1, ticks: [], format: String, note: Bt.noHourly };
    if (H === "precipitation") {
      const Le = C.some((La) => La.precipitation_probability != null), Io = C.map((La) => ({ t: Q(xt(La)), v: Number((Le ? La.precipitation_probability : La.precipitation) ?? 0) })), Mn = Fr(f, q(f, "hourly"), "precipitation"), po = Math.max(0, ...Io.map((La) => La.v)), uo = Le ? 100 : _p(0, Math.max(po, 1), [0.5, 1, 2, 5, 10]).max, si = (La) => Le ? De(La, f.locale) + "%" : De(La, f.locale, { maximumFractionDigits: 1 }) + " " + Mn, ur = Io.find((La) => La.v === po);
      return {
        ...he,
        kind: "bars",
        points: Io,
        min: 0,
        max: uo,
        ticks: [0, uo / 2, uo],
        format: si,
        now: Et !== void 0 ? { t: Et, v: 0 } : void 0,
        peak: ur && po > 0 ? { t: ur.t + 30, v: ur.v, label: si(ur.v) } : void 0,
        note: po > 0 ? void 0 : Bt.noRain
      };
    }
    const oe = H === "humidity" ? "humidity" : "temperature", Ee = C.filter((Le) => Le[oe] != null && (!ft || xt(Le) >= K)).map((Le) => ({ t: Q(xt(Le)), v: Number(Le[oe]) }));
    let Nt, $e = [];
    if (Et !== void 0) {
      const Le = Ta(f, b, oe);
      Le && Ke(Le.value) && (Nt = { t: Et, v: Number(Le.value) }, Ee.unshift(Nt)), $e = ((($n = Ct.todayHistory) == null ? void 0 : $n.day) === y.toDateString() ? Ct.todayHistory[oe] : []).filter((Mn) => Mn.time <= K).map((Mn) => ({ t: Math.max(0, Q(Mn.time)), v: Mn.value })), Nt && $e.length && $e.push(Nt);
    }
    const ta = [...$e, ...Ee];
    if (!ta.length) return { ...he, kind: "line", points: [], min: 0, max: 1, ticks: [], format: String, note: Bt.noHourly };
    const Wa = ta.map((Le) => Le.v), Na = _p(Math.min(...Wa), Math.max(...Wa), oe === "humidity" ? [5, 10, 20, 25] : [1, 2, 5, 10]);
    oe === "humidity" && (Na.min = Math.max(0, Na.min), Na.max = Math.min(100, Na.max), Na.ticks = Na.ticks.filter((Le) => Le >= 0 && Le <= 100));
    const pr = oe === "humidity" ? (Le) => De(Le, f.locale) + "%" : (Le) => oa(f, Le), pn = oe === "temperature" ? ta.reduce((Le, Io) => Io.v > Le.v ? Io : Le) : void 0;
    return { ...he, kind: "line", points: Ee, past: $e, ...Na, format: pr, now: Nt, peak: pn ? { ...pn, label: pr(pn.v) } : void 0 };
  }
  function Vr(f) {
    const b = ["temperature"];
    return f.some((y) => y.precipitation_probability != null || y.precipitation != null) && b.push("precipitation"), f.some((y) => y.wind_speed != null) && b.push("wind"), b;
  }
  function Co(f, b, y = mp) {
    var U, K;
    const C = R("daily"), H = [];
    for (let ft = 0; ft < y; ft++) for (const Q of [!1, !0]) {
      const vt = f.getTime() + (ft * 24 + (Q ? 12 : 0)) * Fe, xt = vt + 12 * Fe, At = {};
      b.forEach((jt) => {
        const _t = new Date(jt.datetime).getTime();
        jt.condition && _t >= vt && _t < xt && (At[jt.condition] = (At[jt.condition] ?? 0) + (wh.has(jt.condition) ? 2 : 1));
      });
      let Jt = (U = Object.entries(At).sort((jt, _t) => _t[1] - jt[1])[0]) == null ? void 0 : U[0];
      if (!Jt) {
        const jt = new Date(vt).toDateString();
        Jt = ((K = C.find((_t) => new Date(_t.datetime).toDateString() === jt)) == null ? void 0 : K.condition) ?? "cloudy";
      }
      H.push({ cond: Q && Jt === "sunny" ? "clear-night" : Jt, night: Q });
    }
    return H;
  }
  function jr(f, b, y) {
    const C = q(f, "hourly"), H = b.precipitation_probability != null ? De(b.precipitation_probability, f.locale) + "%" : "", U = b.precipitation ? De(b.precipitation, f.locale) + " " + Fr(f, C, "precipitation") : "";
    switch (y) {
      case "precipitation":
        return H ? [H, U] : [U || "–", ""];
      case "wind":
        return b.wind_speed != null ? [De(Math.round(b.wind_speed), f.locale), Fr(f, C, "wind_speed")] : ["–", ""];
      default:
        return [oa(f, b.temperature), (b.precipitation_probability ?? 0) >= 20 ? H : ""];
    }
  }
  function Ye(f, b, y) {
    const [C, H] = Vd[A == null ? void 0 : A()] || Vd.day, U = [];
    for (let K = 0; K < 4 && U.length < 3; K++) {
      const ft = /* @__PURE__ */ new Date();
      ft.setHours(0, 0, 0, 0), ft.setDate(ft.getDate() + K);
      const Q = new Date(ft);
      Q.setHours(H, 0, 0, 0), ft.setHours(C, 0, 0, 0), !(Q.getTime() <= y || !b.some((vt) => {
        const xt = new Date(vt.datetime).getTime();
        return xt >= ft.getTime() && xt <= Q.getTime();
      })) && U.push({ a: ft.getTime(), b: Q.getTime(), label: ce(f, { datetime: ft.toISOString() }) });
    }
    return U;
  }
  function no(f, b, y, C, H, U) {
    const K = (y.b - b.a) / Fe, ft = (Et) => ((Et - b.a) / Fe).toFixed(3), Q = 80, vt = 32, xt = [];
    for (const Et = new Date(b.a - Un); Et.getTime() < y.b + Un; Et.setDate(Et.getDate() + 1)) {
      const { rise: he, set: oe } = dl(f, new Date(Et));
      he && oe && xt.push({ rise: he.getTime(), set: oe.getTime() });
    }
    const At = (Et, he) => Q - (Q - vt) * Math.sin(Math.PI * (he - Et.rise) / (Et.set - Et.rise)), Jt = (Et) => !xt.some((he) => Et >= he.rise && Et <= he.set);
    let jt = "", _t = "", Qt = "";
    xt.forEach((Et, he) => {
      const oe = [];
      for (let Nt = Et.rise; Nt <= Et.set; Nt += 15 * sn) oe.push(ft(Nt) + "," + At(Et, Nt).toFixed(2));
      oe.push(ft(Et.set) + "," + Q), jt += '<polyline class="wbLineArc" points="' + oe.join(" ") + '"/>';
      const Ee = xt[he + 1];
      Ee && (jt += '<rect class="wbLineNight" x="' + ft(Et.set) + '" y="0" width="' + ((Ee.rise - Et.set) / Fe).toFixed(3) + '" height="100"/>'), [[Et.rise, "↑"], [Et.set, "↓"]].forEach(([Nt, $e]) => {
        Nt < b.a || Nt > y.b || (_t += '<line class="wbLineEdge" x1="' + ft(Nt) + '" x2="' + ft(Nt) + '" y1="0" y2="100"/>', Qt += '<span class="wbLineTime" style="left:' + U(Nt) + '">' + $e + " " + Ft(vn(new Date(Nt), f)) + "</span>");
      });
    });
    const Yt = xt.find((Et) => H >= Et.rise && H <= Et.set);
    return '<svg class="wbLineArt" viewBox="0 0 ' + K + ' 100" preserveAspectRatio="none" aria-hidden="true">' + jt + _t + '<line class="wbLineHorizon" x1="0" x2="' + K + '" y1="' + Q + '" y2="' + Q + '"/></svg>' + Qt + (Yt ? '<span class="wbLineNow" style="left:' + U(H) + ";top:" + At(Yt, H) + '%">' + Ac("sunny", !1) + "</span>" : "") + C.filter((Et) => Et.entry && !Et.now).map((Et) => '<span class="wbLineGlyph' + Et.edge + '" style="left:' + U(Et.t) + '">' + Ac(Et.entry.condition ?? "cloudy", Jt(Et.t)) + "</span>").join("");
  }
  function ne(f, b) {
    delete it.hourly;
    const y = E.hourlyView === "bars" ? "bars" : "strip", C = '<div class="wbHeader"><h2 class="wbTitle">' + Ft(y === "bars" ? Bt.nextDays : Bt.nextHours) + '</h2><div class="wbSegments wbViews" role="group" aria-label="' + Ft(Bt.showAs) + '">' + ["strip", "bars"].map((Nt) => '<button aria-pressed="' + (Nt === y) + '" data-wb="hourly-view" data-view="' + Nt + '" data-wb-focus="hourly-view-' + Nt + '">' + Ft(Bt.views[Nt]) + "</button>").join("") + "</div></div>";
    if (y === "bars") return Hn(f, b, C);
    const H = R("hourly"), U = Math.floor(Date.now() / sn) * sn, K = H.filter((Nt) => new Date(Nt.datetime).getTime() > U - Fe);
    if (!K.length) return "";
    const ft = Vr(K), Q = ft.includes(E.hourlyMode) ? E.hourlyMode : "temperature", vt = Ye(f, H, U);
    if (!vt.length) return "";
    const xt = vt[0], At = vt[vt.length - 1], Jt = (xt.b - xt.a) / Fe, jt = (Nt) => "calc(var(--wb-u) * " + ((Nt - xt.a) / Fe).toFixed(3) + ")", _t = new Date(xt.a);
    _t.setHours(6, 0, 0, 0), _t.getTime() > xt.a && _t.setDate(_t.getDate() - 1);
    const Qt = Math.ceil((At.b - _t.getTime()) / Un);
    u !== "line" && (it.hourly = { segs: Co(_t, H, Qt), seed: _t.getDate(), columns: Qt });
    const Yt = (Nt) => Nt === xt.a ? " wbFirst" : Nt === At.b ? " wbLast" : "", Et = [];
    for (let Nt = xt.a; Nt < At.b; ) {
      const $e = new Date(Nt);
      $e.setHours(24, 0, 0, 0);
      const ta = Math.min($e.getTime(), At.b);
      Et.push({ a: Nt, b: ta, label: ce(f, { datetime: new Date(Nt).toISOString() }), page: vt.find((Wa) => Wa.a >= Nt && Wa.a < ta) || vt.find((Wa) => Wa.a < ta && Wa.b > Nt) }), Nt = ta;
    }
    const he = U > xt.a && U < At.b ? Math.floor((U - xt.a) / (2 * Fe)) * 2 : 0, oe = [];
    for (let Nt = xt.a; Nt <= At.b; Nt += Fe) {
      const $e = new Date(Nt), ta = Yt(Nt);
      !ta && $e.getHours() % mh || !ta && (Math.abs(xt.a - Nt) < 2 * Fe || Math.abs(At.b - Nt) < 2 * Fe) || U >= xt.a && Math.abs(Nt - U) < 1.5 * Fe && !ta || oe.push({ t: Nt, edge: ta, label: vn($e, f), entry: Nt >= U - Fe ? H.find((Wa) => new Date(Wa.datetime).getTime() === Nt) : void 0 });
    }
    U > xt.a && U < xt.b && oe.push({ t: U, edge: U - xt.a < Fe ? " wbFirst" : xt.b - U < Fe ? " wbLast" : "", label: Bt.now, entry: K[0], now: !0 });
    const Ee = (Nt, $e) => '<span class="wbMark' + Nt.edge + (Nt.now ? " wbNowMark" : "") + '" style="left:' + jt(Nt.t) + '">' + $e + "</span>";
    return '<div class="wbCard wbHc wbHourly">' + C + (ft.length > 1 ? '<div class="wbTabs"><div class="wbSegments" role="group">' + ft.map((Nt) => '<button aria-pressed="' + (Nt === Q) + '" data-wb="hourly-mode" data-mode="' + Nt + '" data-wb-focus="hourly-mode-' + Nt + '">' + Ft(Bt.modes[Nt]) + "</button>").join("") + "</div></div>" : "") + '<div class="wbStripScroll wbPaged" tabindex="0" aria-label="' + Ft(Bt.nextHours) + '" data-span="' + Jt + '" data-start="' + he + '"><div class="wbStrip" style="--wb-u:calc(100cqw / ' + Jt + ");width:calc(var(--wb-u) * " + (At.b - xt.a) / Fe + ')">' + // a stop every two hours (Matt, 1 Nov): a swipe settles on one, a flick runs on past several
    [...Array(Math.floor((At.b - xt.a) / (2 * Fe)) + 1)].map((Nt, $e) => '<i class="wbSnap" style="left:' + jt(xt.a + $e * 2 * Fe) + '"></i>').join("") + '<div class="wbDays">' + Et.map((Nt, $e) => {
      var ta;
      return '<span class="wbDaySpan" style="width:calc(var(--wb-u) * ' + ((Nt.b - Nt.a) / Fe).toFixed(3) + ')"><button class="wbDayName" data-wb="hours-day" data-hours="' + ($e === 0 ? he : ((((ta = Nt.page) == null ? void 0 : ta.a) ?? Nt.a) - xt.a) / Fe) + '" data-wb-focus="hours-day-' + $e + '">' + Ft(Nt.label) + "</button></span>";
    }).join("") + '</div><div class="wbRow wbTimes">' + oe.map((Nt) => Ee(Nt, Ft(Nt.label))).join("") + "</div>" + (u === "line" ? '<div class="wbSky wbLineSky">' + no(f, xt, At, oe, U, jt) : '<div class="wbSky"><div class="wbSkyArt" style="left:' + jt(_t.getTime()) + ";width:calc(var(--wb-u) * " + Qt * 24 + ')"><canvas data-wb-strip="hourly"' + (u === "smooth" ? "" : ' class="wbPixels"') + "></canvas></div>") + (U > xt.a ? '<i class="wbPast" style="width:' + jt(Math.min(U, At.b)) + '"></i><i class="wbNowLine" style="left:' + jt(U) + '"></i>' : "") + Et.slice(1).map((Nt) => '<i class="wbMidnight" style="left:' + jt(Nt.a) + '"></i>').join("") + '</div><div class="wbRow wbValues">' + oe.map((Nt) => {
      if (!Nt.entry) return "";
      const [$e, ta] = jr(f, Nt.entry, Q);
      return Ee(Nt, '<span class="wbPrimaryV">' + Ft($e) + '</span><span class="wbSecondary">' + Ft(ta) + "</span>");
    }).join("") + "</div></div></div></div>";
  }
  function fl(f) {
    const b = gh, y = b.findIndex(([Q]) => Q >= f);
    if (y <= 0) return "rgb(" + b[y < 0 ? b.length - 1 : 0][1].join(",") + ")";
    const [C, H] = b[y - 1], [U, K] = b[y], ft = (f - C) / (U - C);
    return "rgb(" + H.map((Q, vt) => Math.round(Q + (K[vt] - Q) * ft)).join(",") + ")";
  }
  function Hn(f, b, y) {
    var jt;
    const C = R("daily").filter((_t) => Ke(_t.templow) && Ke(_t.temperature)).slice(0, 7);
    if (!C.length) return "";
    const H = Math.min(...C.map((_t) => Number(_t.templow))), U = Math.max(...C.map((_t) => Number(_t.temperature))), K = Math.max(1, U - H), ft = (_t) => Math.max(0, Math.min(100, (_t - H) / K * 100)).toFixed(2), Q = /F/.test(Fr(f, q(f, "daily"), "temperature")), vt = (_t) => Q ? (_t - 32) / 1.8 : _t, xt = "linear-gradient(90deg," + [0, 0.25, 0.5, 0.75, 1].map((_t) => fl(vt(H + _t * K)) + " " + _t * 100 + "%").join(",") + ")", At = (jt = Ta(f, b, "temperature")) == null ? void 0 : jt.value;
    return '<div class="wbCard wbHc wbHourly wbBars' + (Vr(R("hourly").filter((_t) => new Date(_t.datetime).getTime() > Date.now() - Fe)).length > 1 ? " wbTabbed" : "") + '">' + y + '<div class="wbDayBars" role="list">' + C.map((_t, Qt) => {
      const Yt = ce(f, _t), Et = ll(new Date(_t.datetime), /* @__PURE__ */ new Date()), he = Number(_t.templow), oe = Number(_t.temperature);
      return '<div class="wbDayBar" role="listitem" aria-label="' + Ft(gn(Bt.rangeRow, { day: Yt, low: oa(f, he), high: oa(f, oe) })) + '"><span class="wbRangeDay">' + Ft(Yt) + "</span>" + Qe(_t.condition, 40, !1, "r" + Qt) + '<span class="wbRangeLo">' + Ft(oa(f, he)) + '</span><span class="wbRangeTrack"><i class="wbRangeFill" style="background:' + xt + ";clip-path:inset(0 " + (100 - ft(oe)) + "% 0 " + ft(he) + '% round 4px)"></i>' + (Et && Ke(At) ? '<i class="wbRangeNow" style="left:' + ft(Number(At)) + '%"></i>' : "") + '</span><span class="wbRangeHi">' + Ft(oa(f, oe)) + "</span></div>";
    }).join("") + "</div></div>";
  }
  const pa = [[-120, "#0d1530"], [-60, "#1c2550"], [-15, "#c9707a"], [30, "#f2a46a"], [60, "#b49bc8"], [90, "#5aa5e6"]], Kt = [[-90, "#5aa5e6"], [-60, "#a99bd0"], [-30, "#f0a54a"], [15, "#c45a5a"], [60, "#3a2a5c"], [120, "#0d1530"]], se = (f, b) => {
    if (b <= f[0][0]) return f[0][1];
    for (let y = 1; y < f.length; y++) if (b <= f[y][0]) {
      const [C, H] = f[y - 1], [U, K] = f[y];
      return nm(H, K, (b - C) / (U - C));
    }
    return f[f.length - 1][1];
  }, ua = (f, b, y) => {
    if (!b || !y) return pa[5][1];
    const C = (f.getTime() - y.getTime()) / sn;
    return C >= -90 ? se(Kt, C) : se(pa, (f.getTime() - b.getTime()) / sn);
  }, ve = (f) => (f >= 60 ? Math.floor(f / 60) + "h " : "") + f % 60 + "m";
  function Pt(f) {
    const b = st, { rise: y, set: C } = dl(f, b), H = y && C ? Math.round((C.getTime() - y.getTime()) / sn) : 0, U = Math.floor(H / 60), K = H % 60, ft = (Ee) => Ee ? vn(Ee, f) : "–", Q = new Date(b);
    Q.setDate(Q.getDate() + 1);
    const vt = dl(f, Q), xt = vt.rise && vt.set ? Math.round((vt.set.getTime() - vt.rise.getTime()) / sn) : 0, At = new Date(b);
    At.setDate(At.getDate() - 1);
    const Jt = !!(y && C && b >= y && b <= C), jt = !!(y && b < y), _t = Jt ? y : jt ? dl(f, At).set : C, Qt = Jt ? C : jt ? y : vt.rise, Yt = _t && Qt ? Math.min(1, Math.max(0, (b.getTime() - _t.getTime()) / (Qt.getTime() - _t.getTime()))) : 0, Et = Qt ? Math.max(0, Math.round((Qt.getTime() - b.getTime()) / sn)) : 0, he = Qt ? ve(Et) : "–", oe = Jt ? Bt.untilSunset : Bt.untilSunrise;
    return An({
      icon: Oe.sunny,
      name: Bt.sun,
      sub: H ? gn(Bt.daylightShort, { hours: U, minutes: K }) : void 0,
      cls: "wbSunTile",
      callouts: [[Bt.callout.riseTomorrow, ft(vt.rise)], [Bt.callout.setTomorrow, ft(vt.set)], ...xt ? [[Bt.callout.dayTomorrow, Math.floor(xt / 60) + "h " + xt % 60 + "m"]] : []],
      zone: '<div class="wbSunZone" style="background:' + ua(b, y, C) + '"><svg class="wbSunTrack" data-up="' + (Jt ? 1 : 0) + '" data-f="' + Yt.toFixed(4) + '" aria-hidden="true"></svg><div class="wbSunCount"><span class="wbSunLeft">' + Ft(he) + '</span><span class="wbSunWord">' + Ft(oe) + '</span></div><span class="wbSunAt wbSunRise">' + Ft(ft(y)) + '</span><span class="wbSunAt wbSunSet">' + Ft(ft(C)) + "</span></div>" + // at M, the countdown alone (Matt, 10 Nov): M's zone has room for one line
      Gd(Mo(he, ""))
    });
  }
  const Ce = 22;
  function Te(f) {
    const b = Math.round(f.clientWidth), y = Math.round(f.clientHeight), C = Ce, H = C / 2, U = b + "x" + y + ":" + f.dataset.f + ":" + f.dataset.up;
    if (b < C * 3 || y < C * 3 || f.dataset.drawn === U) return;
    f.dataset.drawn = U;
    const K = "M" + H + " " + (y - C) + "V" + C + "A" + H + " " + H + " 0 0 1 " + C + " " + H + "H" + (b - C) + "A" + H + " " + H + " 0 0 1 " + (b - H) + " " + C + "V" + (y - C), ft = "M" + (b - H) + " " + (y - C) + "A" + H + " " + H + " 0 0 1 " + (b - C) + " " + (y - H) + "H" + C + "A" + H + " " + H + " 0 0 1 " + H + " " + (y - C), Q = 16, vt = 6, xt = "M" + Q + " 0H" + (b - Q) + "A" + Q + " " + Q + " 0 0 1 " + b + " " + Q + "V" + (y - Q) + "A" + Q + " " + Q + " 0 0 1 " + (b - Q) + " " + y + "H" + Q + "A" + Q + " " + Q + " 0 0 1 0 " + (y - Q) + "V" + Q + "A" + Q + " " + Q + " 0 0 1 " + Q + " 0ZM" + (C + vt) + " " + C + "A" + vt + " " + vt + " 0 0 0 " + C + " " + (C + vt) + "V" + (y - C - vt) + "A" + vt + " " + vt + " 0 0 0 " + (C + vt) + " " + (y - C) + "H" + (b - C - vt) + "A" + vt + " " + vt + " 0 0 0 " + (b - C) + " " + (y - C - vt) + "V" + (C + vt) + "A" + vt + " " + vt + " 0 0 0 " + (b - C - vt) + " " + C + "Z", At = f.dataset.up === "1", Jt = Number(f.dataset.f) || 0, jt = "http://www.w3.org/2000/svg";
    f.setAttribute("viewBox", "0 0 " + b + " " + y);
    const _t = document.createElementNS(jt, "path");
    _t.setAttribute("d", At ? K : ft), f.replaceChildren(_t);
    const Qt = _t.getTotalLength(), Yt = _t.getPointAtLength(Qt * Jt), Et = At ? Qt : 0;
    f.innerHTML = '<defs><mask id="' + I + 'sun-day"><path d="' + K + '" fill="none" stroke="#fff" stroke-width="' + C * 2 + '"></path></mask><mask id="' + I + 'sun-done"><path d="' + K + '" fill="none" stroke="#fff" stroke-width="' + C * 2 + '" stroke-dasharray="' + (At ? (Et * Jt).toFixed(1) + " " + (Et + 1).toFixed(1) : "0 99999") + '"></path></mask></defs><path class="wbSunBand" fill-rule="evenodd" d="' + xt + '"></path><path class="wbSunBand wbSunDay" fill-rule="evenodd" d="' + xt + '" mask="url(#' + I + 'sun-day)"></path><path class="wbSunBand wbSunDone" fill-rule="evenodd" d="' + xt + '" mask="url(#' + I + 'sun-done)"></path><circle class="wbSunDot' + (At ? "" : " wbSunNight") + '" cx="' + Yt.x.toFixed(1) + '" cy="' + Yt.y.toFixed(1) + '" r="' + H + '"></circle>';
  }
  const Re = typeof ResizeObserver == "function" ? new ResizeObserver((f) => f.forEach((b) => Te(b.target))) : null;
  function xn() {
    Re == null || Re.disconnect(), M.querySelectorAll("svg.wbSunTrack").forEach((f) => {
      Te(f), Re == null || Re.observe(f);
    });
  }
  function zr(f, b, y) {
    const C = (K) => I + "moon-" + K, H = f > 0.995 ? "" : '<path class="wbMoonNight" filter="url(#' + C("terminator") + ')" d="' + om(61, 61, 57.9, f) + '"' + (b ? ' transform="translate(122 0) scale(-1 1)"' : "") + "></path>", U = (K, ft, Q, vt, xt, At) => '<filter id="' + C(K) + '" x="0" y="0" width="100%" height="100%"><feTurbulence type="fractalNoise" baseFrequency="' + ft + '" numOctaves="' + Q + '" seed="' + vt + '"></feTurbulence><feColorMatrix values="0.33 0.33 0.33 0 0 0.33 0.33 0.33 0 0 0.33 0.33 0.33 0 0 0 0 0 0 1"></feColorMatrix><feComponentTransfer>' + ["R", "G", "B"].map((Jt) => "<feFunc" + Jt + ' type="linear" slope="' + xt + '" intercept="' + At + '"></feFunc' + Jt + ">").join("") + "</feComponentTransfer></filter>";
    return '<svg class="wbMoonArt" width="122" height="122" viewBox="0 0 122 122" aria-hidden="true"><defs><radialGradient id="' + C("fill") + '" cx="0.42" cy="0.38" r="0.68"><stop offset="0" stop-color="#ECECE8"></stop><stop offset="0.7" stop-color="#D2D2CD"></stop><stop offset="1" stop-color="#ACACA7"></stop></radialGradient><clipPath id="' + C("clip") + '"><circle cx="61" cy="61" r="54.9"></circle></clipPath><filter id="' + C("soften") + '" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="2.6"></feGaussianBlur></filter><filter id="' + C("glow") + '" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="1.2"></feGaussianBlur></filter><filter id="' + C("terminator") + '" x="-10%" y="-10%" width="120%" height="120%"><feGaussianBlur stdDeviation="1"></feGaussianBlur></filter>' + U("mottle", "0.045", 4, 3, 1.8, -0.4) + U("grain", "1.2", 2, 7, 2, -0.5) + '</defs><g clip-path="url(#' + C("clip") + ')"><circle cx="61" cy="61" r="54.9" fill="url(#' + C("fill") + ')"></circle><g' + (y ? ' transform="rotate(180 61 61)"' : "") + '><g class="wbMaria" filter="url(#' + C("soften") + ')">' + sm.map(([K, ft, Q, vt, xt, At]) => '<ellipse cx="' + K + '" cy="' + ft + '" rx="' + Q + '" ry="' + vt + '" fill-opacity="' + At + '" transform="rotate(' + xt + " " + K + " " + ft + ')"></ellipse>').join("") + "</g>" + lm.map(([K, ft, Q]) => '<circle class="wbCrater" cx="' + K + '" cy="' + ft + '" r="' + Q + '"></circle>').join("") + '<g class="wbRays" filter="url(#' + C("glow") + ')">' + dm.map(([K, ft]) => '<line x1="54.4" y1="95" x2="' + K + '" y2="' + ft + '"></line>').join("") + '</g><g class="wbBrightSpots" filter="url(#' + C("glow") + ')">' + Bp.map(([K, ft, Q]) => '<circle cx="' + K + '" cy="' + ft + '" r="' + Q * 2 + '"></circle>').join("") + "</g>" + Bp.map(([K, ft, Q]) => '<circle class="wbBrightCenter" cx="' + K + '" cy="' + ft + '" r="' + Q + '"></circle>').join("") + '</g><rect class="wbMottle" width="122" height="122" filter="url(#' + C("mottle") + ')"></rect><rect class="wbGrain" width="122" height="122" filter="url(#' + C("grain") + ')"></rect>' + H + '</g><circle cx="61" cy="61" r="54.9" fill="none" stroke="#B4B4B4" stroke-width="0.2"></circle></svg>';
  }
  function or(f) {
    const b = Ot, y = Jl(f), C = (y == null ? void 0 : y.lat) ?? 0, H = _c(b), U = Ep(f), K = U ? f.states[U] : void 0, ft = As(K) && Ah.includes(K.state) ? K.state : Kh(H.phase), { rise: Q, set: vt } = y ? Zh(b, y.lat, y.lon) : {}, xt = H.phase > 0.5 != C < 0, At = De(Math.round(H.fraction * 100), f.locale) + "%", Jt = Q ?? vt;
    return Jt && vn(Jt, f), An({
      icon: Oe.night,
      name: Bt.moon,
      sub: Bt.phases[ft],
      callouts: [...Q ? [[Bt.callout.moonrise, vn(Q, f)]] : [], ...vt ? [[Bt.callout.moonset, vn(vt, f)]] : [], [Bt.callout.lit, At]],
      // at M, how much of it is lit (Matt, 10 Nov)
      zone: '<div class="wbMoonBox">' + zr(H.fraction, xt, C < 0) + "</div>" + Gd(Mo(De(Math.round(H.fraction * 100), f.locale), "%"))
    });
  }
  function Ca(f, b) {
    var _t;
    const y = Ta(f, b, "wind_speed");
    if (!y || !Ke(y.value)) return "";
    const C = Ta(f, b, "wind_gust_speed"), H = Ta(f, b, "wind_bearing"), U = H && Ke(H.value) ? Number(H.value) : void 0, K = Qh(Number(y.value), (_t = y.stateObj.attributes) == null ? void 0 : _t.wind_speed_unit), ft = ec(f, y.stateObj, "wind_speed", y.value), Q = U !== void 0 ? Bt.cardinal[Lh[((U + 11.25) / 22.5 | 0) % 16]] : void 0, vt = C ? Tp(f, C.stateObj, "wind_gust_speed", C.value) : void 0, xt = [Q ? gn(Bt.windFrom, { direction: Q }) : void 0, K !== void 0 ? K + " " + Bt.beaufort : void 0].filter(Boolean).join(" · ") || vt, At = (Qt, Yt) => {
      const Et = (Qt - 90) * Math.PI / 180;
      return [100 + Yt * Math.cos(Et), 100 + Yt * Math.sin(Et)];
    }, Jt = Array.from({ length: 36 }, (Qt, Yt) => Yt * 10).map((Qt) => {
      const Yt = Qt % 90 === 0, [Et, he] = At(Qt, 97), [oe, Ee] = At(Qt, Yt ? 83 : 89);
      return '<line class="wbTick' + (Yt ? " wbMajor" : "") + '" x1="' + Et + '" y1="' + he + '" x2="' + oe + '" y2="' + Ee + '"></line>';
    }).join(""), jt = [["n", 0], ["e", 90], ["s", 180], ["w", 270]].map(([Qt, Yt]) => {
      const [Et, he] = At(Yt, 64);
      return '<text class="wbLetter' + (Qt === "n" ? " wbNorth" : "") + '" x="' + Et + '" y="' + he + '">' + Ft(Bt.cardinal[Qt]) + "</text>";
    }).join("");
    return An({ icon: Oe.windy, name: Bt.wind, sub: xt, cls: "wbWind", visual: '<svg viewBox="0 0 200 200" aria-hidden="true">' + Jt + jt + (U !== void 0 ? '<path class="wbMarker" transform="rotate(' + U + ' 100 100)" d="M 100 24 L 91 5 L 109 5 Z"></path>' : "") + '<circle class="wbDisc" cx="100" cy="100" r="46"></circle><text class="wbSpeed" x="100" y="102">' + Ft(ft.number) + '</text><text class="wbSpeedUnit" x="100" y="124">' + Ft(ft.unit) + "</text></svg>" });
  }
  const oo = (f, b) => {
    if (f < 3) return Bt.advice.fine;
    if (f < 8) return Bt.advice.sunblock;
    const y = Date.now(), C = R("hourly").find((H) => H.uv_index != null && new Date(H.datetime).getTime() > y && H.uv_index < 6);
    return C && new Date(C.datetime).toDateString() === (/* @__PURE__ */ new Date()).toDateString() ? gn(Bt.advice.avoidUntil, { time: vn(new Date(C.datetime), b) }) : Bt.advice.avoidToday;
  };
  function ir(f, b) {
    const y = Ta(f, b, "uv_index");
    if (!y || !Ke(y.value)) return "";
    const C = Number(y.value), H = Bt.uvLevel[Lp(C)], U = /* @__PURE__ */ new Date();
    U.setHours(23, 59, 59, 999);
    const K = R("hourly").filter((xt) => xt.uv_index != null && new Date(xt.datetime) > /* @__PURE__ */ new Date() && new Date(xt.datetime) <= U).reduce((xt, At) => !xt || At.uv_index > xt.uv ? { uv: At.uv_index, time: new Date(At.datetime) } : xt, void 0), ft = Eh[Lp(C)], Q = 216 * Math.min(1, Math.max(0.08, 0.4 + (C - 4.5) * (0.5 / 5.5))), vt = '<svg class="wbUvArt" viewBox="0 0 216 198" preserveAspectRatio="xMinYMin slice" aria-hidden="true"><defs><radialGradient id="' + I + 'uv-sun" gradientUnits="userSpaceOnUse" cx="0" cy="0" r="' + Q.toFixed(1) + '"><stop offset="0" style="stop-color:color-mix(in srgb, ' + ft + ' 28%, #fff6dd)"></stop><stop offset=".62" style="stop-color:color-mix(in srgb, ' + ft + ' 62%, #fff6dd)"></stop><stop offset="1" style="stop-color:' + ft + '"></stop></radialGradient></defs><circle class="wbUvSun" cx="0" cy="0" r="' + Q.toFixed(1) + '" fill="url(#' + I + 'uv-sun)"></circle></svg><div class="wbUvBig"><span class="wbUvNum">' + Ft(De(Math.round(C), f.locale)) + '</span><span class="wbUvWord">' + Ft(H) + "</span></div>" + Gd(Mo(De(Math.round(C), f.locale), ""));
    return An({
      icon: Oe.sunnyAlert,
      name: Bt.metrics.uv_index,
      sub: K && K.uv > C ? gn(Bt.uvPeak, { level: H, uv_index: De(Math.round(K.uv), f.locale), time: vn(K.time, f) }) : H,
      zone: vt,
      cls: "wbUv",
      callouts: [oo(C, f), [Bt.callout.now, De(Math.round(C), f.locale) + " · " + H], [Bt.callout.peak, K && K.uv > C ? De(Math.round(K.uv), f.locale) + " at " + vn(K.time, f) : Bt.callout.now]]
    });
  }
  function Gr(f) {
    const b = R("daily")[0], y = Ct.temperatureHistory;
    if (!b || new Date(b.datetime).toDateString() !== (/* @__PURE__ */ new Date()).toDateString() || !Ke(b.temperature) || !y || y.dailyHighs.length < kh) return "";
    const C = Number(b.temperature), H = y.dailyHighs.reduce((Yt, Et) => Yt + Et, 0) / y.dailyHighs.length, U = Math.round(C - H) || 0, K = U > 0 ? "above" : U < 0 ? "below" : "same", ft = [...y.days, { date: /* @__PURE__ */ new Date(), high: C, today: !0 }], Q = ft.map((Yt) => Yt.high).concat(H), vt = Math.min(...Q) - 1, xt = Math.max(...Q) + 1, At = (Yt) => (1 - (Yt - vt) / (xt - vt)) * 100, Jt = (Yt) => (Yt + 0.5) / ft.length * 100, jt = ft.map((Yt, Et) => [Jt(Et), At(Yt.high)]), _t = jt.map(([Yt, Et], he) => (he ? "L" : "M") + Yt.toFixed(2) + " " + Et.toFixed(2)).join(""), Qt = '<div class="wbCompareBars wbTrend" aria-hidden="true"><div class="wbTrendPlot"><svg viewBox="0 0 100 100" preserveAspectRatio="none"><defs><linearGradient id="' + I + 'trend" x1="0" y1="0" x2="0" y2="1"><stop offset="0" style="stop-color:var(--primary)" stop-opacity=".28"></stop><stop offset="1" style="stop-color:var(--primary)" stop-opacity="0"></stop></linearGradient></defs><path class="wbTrendArea" d="' + _t + "L" + jt[jt.length - 1][0].toFixed(2) + " 100L" + jt[0][0].toFixed(2) + ' 100Z" fill="url(#' + I + 'trend)"></path><line class="wbAvgLine" x1="0" x2="100" y1="' + At(H).toFixed(2) + '" y2="' + At(H).toFixed(2) + '" vector-effect="non-scaling-stroke"></line><path class="wbTrendLine" d="' + _t + '" vector-effect="non-scaling-stroke"></path></svg><span class="wbTrendAvg" style="top:' + At(H).toFixed(2) + '%">' + Ft(oa(f, H)) + "</span>" + ft.map((Yt, Et) => {
      const he = Yt.today ? " wbToday" : "", oe = "left:" + Jt(Et).toFixed(2) + "%;top:" + At(Yt.high).toFixed(2) + "%";
      return '<i class="wbTrendDot' + he + '" style="' + oe + '"></i><span class="wbAvgValue' + he + '" style="' + oe + '">' + Ft(oa(f, Yt.high)) + "</span>";
    }).join("") + '</div><div class="wbTrendDays">' + ft.map((Yt, Et) => '<span class="wbAvgDay' + (Yt.today ? " wbToday" : "") + '" style="left:' + Jt(Et).toFixed(2) + '%">' + Ft(Fh(Yt.date, f)) + "</span>").join("") + "</div></div>";
    return An({
      icon: Oe.chartLine,
      name: Bt.metrics.compared_to_average,
      double: !0,
      sub: gn(Bt.highsLastDays, { days: y.days.length }),
      visual: '<div class="wbCompare"><div class="wbCompareText"><div class="wbCompareNumber">' + (U > 0 ? "+" : "") + Ft(oa(f, U)) + '</div><div class="wbCompareWords">' + Ft(Bt.average[K]) + '</div><div class="wbCompareTemps">' + Ft(gn(Bt.todayVsAverage, { today: oa(f, C), average: oa(f, H) })) + "</div></div>" + Qt + "</div>"
    });
  }
  function io(f, b) {
    const y = Ta(f, b, "humidity");
    if (!y || !Ke(y.value)) return "";
    const C = Ta(f, b, "dew_point"), H = Math.max(0, Math.min(100, Number(y.value)));
    return An({
      icon: Oe.waterPercent,
      name: Bt.metrics.humidity,
      sub: C && Ke(C.value) ? gn(Bt.dewPoint, { dew_point: oa(f, C.value) }) : void 0,
      backdrop: '<div class="wbWater" style="height:' + H + '%"><div class="wbMist"></div><div class="wbBody"></div><div class="wbHaze wbOne"></div><div class="wbHaze wbTwo"></div></div>',
      visual: '<div class="wbWaterValue">' + Mo(De(Math.round(Number(y.value)), f.locale), "%") + "</div>"
    });
  }
  function Es(f, b) {
    var Yt, Et, he;
    const y = Ta(f, b, "pressure");
    if (!y || !Ke(y.value)) return "";
    const C = Number(y.value), H = (Yt = y.stateObj.attributes) == null ? void 0 : Yt.pressure_unit, U = Ap(C, H), K = ((Et = Ct.pressureHistory) == null ? void 0 : Et.entityId) === y.stateObj.entity_id ? Ap(Ct.pressureHistory.value, H) : void 0;
    let ft;
    if (U !== void 0 && K !== void 0) {
      const oe = U - K;
      ft = oe >= bp ? "rising" : oe <= -bp ? "falling" : "steady";
    }
    const Q = ec(f, y.stateObj, "pressure", Math.round(C)), vt = y.stateObj, xt = (oe) => H === "inHg" ? Math.round(oe * 100) / 100 : Math.round(oe), At = (oe) => Tp(f, vt, "pressure", xt(oe)), Jt = K !== void 0 ? Ct.pressureHistory.value : void 0, jt = Jt !== void 0 ? xt(C - Jt) : void 0, _t = (he = vt.entity_id) != null && he.startsWith("weather.") ? R("hourly").find((oe) => Ke(oe.pressure) && new Date(oe.datetime).getTime() >= Date.now() + 3 * Fe - 30 * sn) : void 0, Qt = [
      ...ft ? [Bt.advice[ft]] : [],
      ...Jt !== void 0 ? [[Bt.callout.hoursAgo, At(Jt)], [Bt.callout.change, (jt > 0 ? "+" : jt < 0 ? "−" : "") + At(Math.abs(jt))]] : [],
      ..._t ? [[Bt.callout.inHours, At(Number(_t.pressure))]] : []
    ];
    return An({
      icon: Oe.gauge,
      name: Bt.metrics.pressure,
      sub: ft ? Bt.pressure[ft] : void 0,
      cls: "wbPressure",
      callouts: Qt,
      zone: '<div class="wbTapeRow"><div class="wbTapeValue">' + Mo(Q.number) + '<span class="wbTapeUnit">' + Ft(Q.unit) + "</span></div>" + (U !== void 0 ? Ti(f, U) : "") + "</div>"
    });
  }
  function Ti(f, b) {
    const H = Math.floor(b) - 11;
    return '<svg class="wbTape" viewBox="0 0 76 200" preserveAspectRatio="xMaxYMid meet" aria-hidden="true">' + Array.from({ length: 24 }, (U, K) => H + K).map((U) => {
      const K = 100 - (U - b) * 9;
      if (K < 22 || K > 178) return "";
      const ft = U % 5 === 0;
      return '<g opacity="' + Math.max(0.15, 1 - Math.abs(K - 100) / 100) + '"><line class="wbTapeTick" x1="' + (ft ? 2 : 8) + '" x2="26" y1="' + K + '" y2="' + K + '"></line>' + (ft ? '<text class="wbTapeLabel" x="33" y="' + K + '">' + Ft(De(U, f.locale, { useGrouping: !1 })) + "</text>" : "") + "</g>";
    }).join("") + '<text class="wbTapeEnd" x="14" y="8">' + Ft(Bt.high) + '</text><text class="wbTapeEnd" x="14" y="192">' + Ft(Bt.low) + '</text><line class="wbTapeMarker" x1="0" x2="30" y1="100" y2="100"></line></svg>';
  }
  function ro(f) {
    var Q, vt;
    const b = Dc(f), y = b ? f.states[b] : void 0;
    if (!y || ((Q = Ct.rain) == null ? void 0 : Q.entityId) !== b || !Ke(Ct.rain.change)) return "";
    const C = ((vt = y.attributes) == null ? void 0 : vt.unit_of_measurement) ?? "", H = q(f, "hourly"), U = Date.now() + Un, K = R("hourly").filter((xt) => xt.precipitation != null && new Date(xt.datetime).getTime() <= U), ft = K.reduce((xt, At) => xt + Number(At.precipitation), 0);
    return An({
      icon: Oe.rainy,
      name: Bt.metrics.precipitation,
      sub: H && K.length ? gn(Bt.rainExpected, { amount: De(ft, f.locale, { maximumFractionDigits: 1 }) + " " + Fr(f, H, "precipitation") }) : Bt.rainLast24h,
      visual: Mo(De(Ct.rain.change, f.locale, { maximumFractionDigits: 1 }), C) + (K.length > 1 ? rm(K.map((xt) => ({ label: "", value: Number(xt.precipitation) }))) : "")
    });
  }
  function Li(f, b) {
    const y = Ta(f, b, "visibility");
    if (!y || !Ke(y.value)) return "";
    const C = ec(f, y.stateObj, "visibility", y.value), H = Qf(Number(y.value), Fr(f, y.stateObj, "visibility"));
    return An({
      icon: Oe.eyeOutline,
      name: Bt.metrics.visibility,
      sub: Bt.visibilityLevel[th(H)],
      visual: '<div class="wbSea"><canvas class="wbSeaArt" data-wb-sea="' + H + '" aria-hidden="true"></canvas><div class="wbSeaFact">' + Ft(Ai(f, H)) + '</div><div class="wbSeaValue">' + Mo(C.number, C.unit) + "</div></div>"
    });
  }
  function Ai(f, b) {
    var U;
    const y = Jf((U = f.config) == null ? void 0 : U.country, b);
    if (y) return gn(Bt.visibilityLandmarks, { from: y.from, to: y.to });
    const C = b / Ch * 60;
    if (C < 60) {
      const K = C < 5 ? Math.max(1, Math.round(C)) : 5 * Math.round(C / 5);
      if (K < 60) return gn(Bt.walkMinutes, { minutes: De(K, f.locale) });
    }
    const H = Math.max(1, Math.round(C / 30) / 2);
    return H < 8 ? gn(Bt.walkHours, { hours: De(H, f.locale) }) : Bt.walkDay;
  }
  function rr(f) {
    Ct.categories === void 0 && eo(f);
    const b = ao(f), y = (Q) => Q.map((vt) => f.states[vt]).filter(As), C = y(b.air), H = y(b.pollen);
    if (!C.length && !H.length) return "";
    const U = [...C, ...H], K = (Q) => H.includes(Q) ? Oe.flower : Oe.airFilter, ft = U.find((Q) => Q.entity_id === E.aq);
    return ft ? hl(f, ft, K(ft)) : '<div class="wbCard wbHc wbAq"><div class="wbHeader"><h2 class="wbTitle">' + Ft(Bt.airQuality) + '</h2></div><div class="wbAqTiles">' + U.map((Q) => '<button class="wbTile" data-wb="aq-open" data-entity="' + Ft(Q.entity_id) + '"><span class="wbChip">' + tr(K(Q)) + '</span><span class="wbText"><span class="wbName">' + Ft(Hr(f, Q)) + '</span><span class="wbSub">' + Ft(Ji(f, Q)) + "</span></span></button>").join("") + "</div></div>";
  }
  function hl(f, b, y) {
    var xt, At, Jt;
    const C = ((xt = b.attributes) == null ? void 0 : xt.unit_of_measurement) ?? "", H = ((At = b.attributes) == null ? void 0 : At.device_class) === "pm25" && C === xp && Ke(b.state), U = Number(b.state), K = H ? zd(U) : void 0, ft = ((Jt = Ct.aqHistory) == null ? void 0 : Jt.entityId) === b.entity_id ? Ct.aqHistory.points : void 0, Q = (jt) => Math.min(100, Math.max(0, jt / jd * 100));
    let vt;
    if (ft && ft.length > 1) vt = Dp(ft, (jt) => (De(jt, f.locale, { maximumFractionDigits: 1 }) + " " + C).trim());
    else if (K) {
      let jt = 0;
      const _t = Cu.map(([Qt, Yt]) => {
        const Et = Q(Math.min(Yt, jd)), he = wp[Qt] + " " + jt + "% " + Et + "%";
        return jt = Et, he;
      });
      vt = '<div class="wbScale" role="meter" aria-label="' + Ft(Bt.fineParticles) + '" aria-valuemin="0" aria-valuemax="' + jd + '" aria-valuenow="' + U + '" style="background:linear-gradient(to right, ' + _t.join(", ") + ')"><i style="left:' + Q(U) + '%"></i></div><div class="wbGraphNote"><span>0</span><span>' + jd + " " + xp + "</span></div>";
    } else vt = '<span class="wbGraphNote"><span>' + Ft(Ji(f, b)) + "</span></span>";
    return '<div class="wbCard wbHc wbAq wbAqOpen"><div class="wbOpen"><div class="wbOpenHead"><span class="wbChip">' + tr(y) + '</span><span class="wbText"><span class="wbName">' + Ft(Hr(f, b)) + '</span><span class="wbSub">' + Ft(Ji(f, b)) + (K ? " · " + Ft(Bt.aqLevel[K]) : "") + '</span></span><button class="wbBack" title="' + Ft(Bt.back) + '" data-wb="aq-close">' + tr(Oe.back) + '</button></div><div class="wbGraph">' + vt + "</div></div></div>";
  }
  const qe = { good: "Good", fair: "Fair", moderate: "Moderate", poor: "Poor", very_poor: "Very poor", extremely_poor: "Extremely poor" }, yn = (f) => f <= 50 ? "Good" : f <= 100 ? "Moderate" : f <= 150 ? "Unhealthy for some" : f <= 200 ? "Unhealthy" : f <= 300 ? "Very unhealthy" : "Hazardous";
  function To(f) {
    const b = /* @__PURE__ */ new Map();
    return Object.values(f.states || {}).filter((y) => {
      var C;
      return y.entity_id.startsWith("sensor.") && oc.includes(((C = y.attributes) == null ? void 0 : C.device_class) ?? "") && As(y) && pl(f, y.entity_id);
    }).sort((y, C) => y.entity_id.localeCompare(C.entity_id)).forEach((y) => {
      b.has(y.attributes.device_class) || b.set(y.attributes.device_class, y);
    }), oc.map((y) => b.get(y)).filter(Boolean);
  }
  const ei = (f) => Object.values(f.states || {}).filter((b) => {
    var y, C;
    return b.entity_id.startsWith("sensor.") && As(b) && pl(f, b.entity_id) && (((C = (y = f.entities) == null ? void 0 : y[b.entity_id]) == null ? void 0 : C.translation_key) ?? b.entity_id).toLowerCase().includes("pollen");
  }), Pa = ["none", "very_low", "low", "moderate", "high", "very_high"], fa = (f) => Ke(f.state) ? Number(f.state) : Pa.indexOf(String(f.state).toLowerCase().replace(/ /g, "_")), ia = (f) => {
    const b = String(f).replace(/_/g, " ");
    return b[0].toUpperCase() + b.slice(1);
  }, _s = (f, b, y) => {
    const C = y ? f === "aqi" ? b <= 50 ? "good" : b <= 100 ? "moderate" : "poor" : f === "pm25" ? zd(b) : null : null;
    return C === "good" || C === "fair" ? Bt.advice.window : C === "moderate" || C === null ? Bt.advice.fine : Bt.advice.closed;
  }, In = ["good", "fair", "moderate", "poor", "very_poor", "extremely_poor"], ai = (f) => In[f <= 50 ? 0 : f <= 100 ? 1 : f <= 150 ? 2 : f <= 200 ? 3 : f <= 300 ? 4 : 5], Lo = "M43 43q1 8 0 10M77 42q1 8 -1 10", We = {
    good: [Lo, "M34 69Q61 98 86 67"],
    fair: [Lo, "M40 74Q61 89 81 72"],
    moderate: [Lo, "M41 79Q60 76 80 81"],
    poor: [Lo, "M41 85Q60 73 80 86"],
    very_poor: ["M36 38l13 5M84 37l-13 5M43 48q1 7 0 9M77 47q1 7 -1 9", "M37 90Q60 64 84 89"],
    extremely_poor: ["M37 41l12 11M49 41l-12 11M71 40l12 11M83 40l-12 11", "M36 84q6 -8 12 0t12 0t12 0t12 0"]
  }, ni = (f) => '<svg class="wbAqFace" viewBox="0 0 120 120" aria-hidden="true"><path d="M60 9C89 8 112 32 110 61C109 90 87 112 58 111C30 110 9 88 10 59C11 31 33 10 63 12"></path><path class="wbAqEyes" d="' + We[f][0] + '"></path><path d="' + We[f][1] + '"></path></svg>';
  function Zn(f) {
    const b = To(f), y = b[0];
    if (!y) return An({ icon: Oe.airFilter, name: Bt.airQuality, sub: Bt.noAir, visual: Mo("–", ""), cls: "wbBase" });
    const C = y.attributes.device_class, H = Number(y.state), U = Ke(y.state), K = C === "aqi" && U ? yn(H) : C === "pm25" && U ? qe[zd(H)] : Ji(f, y), ft = U ? De(Math.round(H), f.locale) : String(y.state), Q = C === "aqi" ? "AQI" : y.attributes.unit_of_measurement || "", vt = U && C === "aqi" ? ai(H) : U && C === "pm25" ? zd(H) : null;
    return An(vt ? {
      icon: Oe.airFilter,
      name: Bt.airQuality,
      sub: K,
      cls: "wbAqSmile",
      zone: '<div class="wbAqFill" style="background:' + wp[vt] + '">' + ni(vt) + '<div class="wbAqBig"><span class="wbAqNum">' + Ft(ft) + "</span>" + (Q ? '<span class="wbAqUnit">' + Ft(Q) + "</span>" : "") + "</div></div>" + Gd(Mo(ft, Q)),
      callouts: [_s(C, H, U), ...b.slice(1, 3).map((xt) => [Hr(f, xt), Ji(f, xt)])]
    } : {
      icon: Oe.airFilter,
      name: Bt.airQuality,
      sub: K,
      cls: "wbBase",
      zone: Mo(ft, Q),
      callouts: [_s(C, H, U), ...b.slice(1, 3).map((xt) => [Hr(f, xt), Ji(f, xt)])]
    });
  }
  const sr = [
    ["wbSeed", '<svg viewBox="0 0 22 30" aria-hidden="true"><path d="M11 28V11" fill="none" stroke="currentColor" stroke-width="1"></path><path d="M11 11L3 6M11 11L5 2.5M11 11L8.5 1M11 11L13.5 1M11 11L17 2.5M11 11L19 6" fill="none" stroke="currentColor" stroke-width=".8" stroke-linecap="round"></path><circle cx="11" cy="28.5" r="1.4" fill="currentColor"></circle></svg>'],
    ["wbGrain", '<svg viewBox="0 0 12 12" aria-hidden="true"><circle cx="6" cy="6" r="3.3" fill="currentColor"></circle><path d="M6 1.2v1.4M6 9.4v1.4M1.2 6h1.4M9.4 6h1.4M2.6 2.6l1 1M8.4 8.4l1 1M2.6 9.4l1-1M8.4 3.6l1-1" stroke="currentColor" stroke-width=".9" stroke-linecap="round"></path></svg>'],
    ["wbStem", '<svg viewBox="0 0 10 30" aria-hidden="true"><path d="M5 29Q3.6 18 5 8" fill="none" stroke="currentColor" stroke-width="1"></path><ellipse cx="5" cy="6" rx="2.3" ry="4.6" fill="currentColor"></ellipse></svg>']
  ], Ei = (f) => {
    const b = [1, 3, 5, 7, 10, 13][Math.max(0, Math.min(5, Number.isFinite(f) ? Math.round(f) : 0))];
    return '<div class="wbPollenAir" aria-hidden="true">' + Array.from({ length: b }, (y, C) => {
      const [H, U] = sr[C % 3], K = 10 + C * 7 % 9, ft = 2.6 + C * 5 % 4 * 0.4;
      return '<span class="wbFloat ' + H + '" style="top:' + (4 + C * 37 % 52) + "%;--x:" + (C * 29 % 90 + 4) + "%;--s:" + (0.8 + C * 13 % 5 / 10).toFixed(1) + ";animation-duration:" + K + "s;animation-delay:-" + (C * 2.3 % K).toFixed(1) + 's"><span class="wbPush"><span class="wbBob" style="animation-duration:' + ft.toFixed(1) + "s;animation-delay:-" + (C * 0.7 % ft).toFixed(1) + 's">' + U + "</span></span></span>";
    }).join("") + "</div>";
  };
  function _i(f) {
    const b = ei(f).sort((H, U) => fa(U) - fa(H));
    if (!b.length) return An({ icon: Oe.flower, name: Bt.pollen, sub: Bt.noPollen, visual: Mo("–", ""), cls: "wbBase" });
    const y = b[0], C = (H) => Ke(H.state) ? Ji(f, H) : ia(H.state);
    return An({
      icon: Oe.flower,
      name: Bt.pollen,
      sub: Hr(f, y) + " · " + C(y),
      cls: "wbBase wbPollen",
      zone: Ei(fa(y)) + Mo(C(y), ""),
      callouts: b.slice(0, 3).map((H) => [Hr(f, H), C(H)])
    });
  }
  function Ds(f) {
    const b = Date.now(), y = R("hourly").filter((U) => {
      const K = new Date(U.datetime).getTime();
      return K > b - Fe && K < b + 12 * Fe;
    }), C = y.find((U) => (U.precipitation_probability ?? 0) >= 50 || (U.precipitation ?? 0) >= 0.2), H = C ? gn(Bt.rainFrom, { time: vn(new Date(Math.max(b, new Date(C.datetime).getTime())), f) }) : y.length ? Bt.noRain12 : void 0;
    return An({ icon: Oe.radar, name: Bt.rainRadar, sub: H, cls: "wbBase", visual: '<div class="wbRadar" aria-hidden="true"><i class="wbRadarRing"></i><i class="wbRadarHome"></i></div>' });
  }
  const Bs = {
    current: Yn,
    hourly: ne,
    sun: Pt,
    moon: or,
    wind: Ca,
    uv_index: ir,
    compared_to_average: Gr,
    humidity: io,
    pressure: Es,
    precipitation: ro,
    visibility: Li,
    air_quality: rr,
    aq_tile: Zn,
    pollen_tile: _i,
    radar_tile: Ds
  }, Ao = [["day", "Last 24 hours", 1], ["week", "Last 7 days", 7], ["month", "Last 30 days", 30]], Eo = (f, b) => {
    var y;
    return b.toLocaleDateString((y = f.locale) == null ? void 0 : y.language, { day: "numeric", month: "short" });
  }, lr = (f) => {
    const b = new Date(f);
    return b.setMinutes(b.getMinutes() - b.getTimezoneOffset()), b.toISOString().slice(0, 10);
  }, oi = () => {
    const f = E.range, b = Date.now();
    if (f.preset !== "custom") {
      const H = Ao.find(([U]) => U === f.preset)[2];
      return [b - H * Un, b];
    }
    const y = qr(/* @__PURE__ */ new Date(f.from + "T00:00")).getTime(), C = Math.min(b, qr(/* @__PURE__ */ new Date(f.to + "T00:00")).getTime() + Un);
    return [Math.min(y, C - Fe), C];
  }, aa = (f) => {
    const b = E.range;
    if (b.preset !== "custom") return Ao.find(([H]) => H === b.preset)[1];
    const [y, C] = oi();
    return b.from === b.to ? Eo(f, new Date(y)) : Eo(f, new Date(y)) + " – " + Eo(f, new Date(C - 1));
  }, dn = () => E.range.preset === "custom" ? E.range.from + "_" + E.range.to : E.range.preset, Se = (f, b) => b - f <= 2 * Un, Di = (f, b, y, C) => Se(y, C) ? vn(b, f) : Eo(f, b), _o = (f, b = 60) => {
    const y = Math.max(1, Math.ceil(f.length / b));
    return f.filter((C, H) => H % y === 0 || H === f.length - 1);
  }, Bi = (f, b, y, C, H = !1) => f.callWS({
    type: "history/history_during_period",
    start_time: new Date(y).toISOString(),
    end_time: new Date(C).toISOString(),
    entity_ids: [b],
    minimal_response: H,
    no_attributes: H,
    significant_changes_only: !1
  }), Ua = (f) => async (b, y, C, H) => {
    const U = Ta(b, y, f);
    if (!U) return [];
    const K = U.stateObj.entity_id, ft = await Bi(b, K, C, H);
    return _o(((ft == null ? void 0 : ft[K]) ?? []).map((Q) => {
      var At;
      const vt = ((At = Q.a) == null ? void 0 : At[f]) ?? (Ke(Q.s) ? Number(Q.s) : void 0), xt = (Q.lu ?? Q.lc) * 1e3;
      return typeof vt == "number" && xt >= C && xt <= H ? { t: new Date(xt), value: vt } : null;
    }).filter(Boolean)).map((Q) => ({ label: Di(b, Q.t, C, H), value: Q.value }));
  }, Do = (f, b) => async (y, C, H, U) => {
    const K = f(y);
    if (!K) return [];
    const ft = K.entity_id, Q = await Bi(y, ft, H, U, !0);
    return _o(((Q == null ? void 0 : Q[ft]) ?? []).map((vt) => {
      const xt = b(vt.s), At = vt.lu * 1e3;
      return xt == null || !Number.isFinite(xt) || At < H || At > U ? null : { t: new Date(At), value: xt };
    }).filter(Boolean)).map((vt) => ({ label: Di(y, vt.t, H, U), value: vt.value }));
  }, Ur = (f, b) => async (y, C, H, U) => {
    const K = Jl(y);
    if (!K) return [];
    const ft = [];
    if (Se(H, U)) for (let Q = H; Q <= U; Q += Fe / 2) ft.push({ label: vn(new Date(Q), y), value: f(new Date(Q), K) });
    else for (let Q = U; Q >= H; Q -= Un) {
      const vt = new Date(Q), xt = b(vt, K, y);
      xt != null && ft.unshift({ label: Eo(y, vt), value: xt });
    }
    return _o(ft);
  }, kn = (f) => ei(f).sort((b, y) => fa(y) - fa(b))[0], so = (f, b, y) => {
    const C = Ta(f, b, y);
    return C ? Fr(f, C.stateObj, y) : "";
  }, Ge = {
    current: { name: () => Bt.modes.temperature, icon: () => Oe.sunny, load: Ua("temperature"), fmt: (f, b, y) => oa(f, y), now: (f, b) => {
      var y;
      return oa(f, (y = Ta(f, b, "temperature")) == null ? void 0 : y.value);
    } },
    sun: {
      name: () => Bt.sun,
      icon: () => Oe.sunny,
      load: Ur((f, b) => Math.round(rc(f, b.lat, b.lon) / Rn), (f, b, y) => {
        const C = dl(y, f);
        return C.rise && C.set ? Math.round((C.set - C.rise) / Fe * 10) / 10 : null;
      }),
      fmt: (f, b, y, C) => C ? De(y, f.locale) + "°" : De(y, f.locale) + " h",
      sub: (f) => f ? "How high the sun was" : "Hours of daylight a day"
    },
    moon: {
      name: () => Bt.moon,
      icon: () => Oe.night,
      load: Ur((f) => Math.round(_c(f).fraction * 100), (f) => Math.round(_c(f).fraction * 100)),
      fmt: (f, b, y) => De(y, f.locale) + "%",
      sub: () => "How much of it was lit"
    },
    uv_index: { name: () => Bt.metrics.uv_index, icon: () => Oe.sunnyAlert, load: Ua("uv_index"), fmt: (f, b, y) => De(Math.round(y * 10) / 10, f.locale), now: (f, b) => {
      const y = Ta(f, b, "uv_index");
      return y ? De(Number(y.value), f.locale) : "";
    } },
    humidity: { name: () => Bt.metrics.humidity, icon: () => Oe.waterPercent, load: Ua("humidity"), fmt: (f, b, y) => De(Math.round(y), f.locale) + "%", now: (f, b) => {
      const y = Ta(f, b, "humidity");
      return y ? De(Math.round(Number(y.value)), f.locale) + "%" : "";
    } },
    pressure: { name: () => Bt.metrics.pressure, icon: () => Oe.gauge, load: Ua("pressure"), fmt: (f, b, y) => De(Math.round(y), f.locale) + " " + so(f, b, "pressure"), now: (f, b) => {
      const y = Ta(f, b, "pressure");
      return y ? De(Math.round(Number(y.value)), f.locale) + " " + so(f, b, "pressure") : "";
    } },
    wind: { name: () => Bt.wind, icon: () => Oe.windy, load: Ua("wind_speed"), fmt: (f, b, y) => De(Math.round(y), f.locale) + " " + so(f, b, "wind_speed"), now: (f, b) => {
      const y = Ta(f, b, "wind_speed");
      return y ? De(Math.round(Number(y.value)), f.locale) + " " + so(f, b, "wind_speed") : "";
    } },
    visibility: { name: () => Bt.metrics.visibility, icon: () => Oe.eyeOutline, load: Ua("visibility"), fmt: (f, b, y) => De(Math.round(y * 10) / 10, f.locale) + " " + so(f, b, "visibility"), now: (f, b) => {
      const y = Ta(f, b, "visibility");
      return y ? De(Number(y.value), f.locale) + " " + so(f, b, "visibility") : "";
    } },
    aq_tile: {
      name: (f) => To(f)[0] ? Hr(f, To(f)[0]) : Bt.airQuality,
      icon: () => Oe.airFilter,
      load: Do((f) => To(f)[0], (f) => Ke(f) ? Number(f) : null),
      fmt: (f, b, y) => {
        var U, K;
        const C = To(f)[0], H = (U = C == null ? void 0 : C.attributes) == null ? void 0 : U.device_class;
        return De(Math.round(y * 10) / 10, f.locale) + (H === "aqi" ? " AQI" : (K = C == null ? void 0 : C.attributes) != null && K.unit_of_measurement ? " " + C.attributes.unit_of_measurement : "");
      },
      now: (f) => {
        const b = To(f)[0];
        return b ? Ji(f, b) : "";
      }
    },
    pollen_tile: {
      name: (f) => kn(f) ? Hr(f, kn(f)) : Bt.pollen,
      icon: () => Oe.flower,
      load: Do(kn, (f) => {
        const b = fa({ state: f });
        return b < 0 ? null : b;
      }),
      fmt: (f, b, y) => ia(Pa[Math.round(y)] || ""),
      now: (f) => {
        const b = kn(f);
        return b ? ia(b.state) : "";
      }
    }
  }, Fn = {};
  let wa = null;
  async function Ri(f) {
    var K;
    const b = l == null ? void 0 : l();
    if (!b || !Ge[f]) return;
    const y = f + "|" + dn(), [C, H] = oi();
    if (Fn[y] && Date.now() - Fn[y].at < 5 * sn) return;
    Fn[y] = { at: Date.now(), points: null };
    try {
      Fn[y].points = await Ge[f].load(b, Nn(b), C, H);
    } catch {
      Fn[y].points = [];
    }
    xa(!0), wa === f && E.graph === f && (wa = null, hp(et[f].el.querySelector(".wbGraphCard")));
    const U = E.graph === f && ((K = et[f]) == null ? void 0 : K.el.querySelector(".wbGraph .wbChart"));
    U && Mu(U, U.querySelector(".wbLine"), U.querySelectorAll(".wbArea"));
  }
  function Bo(f, b) {
    const y = E.range, C = lr(Date.now()), [H, U] = oi(), K = y.pickFrom || lr(H), ft = y.pickTo || lr(U - 1);
    return '<div class="wbRangePick' + (b ? " wbPickRight" : "") + '" role="dialog" aria-label="Choose date range"><div class="wbRangePresets">' + Ao.map(([Q, vt]) => '<button class="wbRangePreset" aria-pressed="' + (y.preset === Q) + '" data-wb="graph-preset" data-range="' + Q + '" data-wb-focus="graph-preset-' + Q + '">' + Ft(vt) + "</button>").join("") + '</div><div class="wbRangeDates"><label><span>From</span><input type="date" data-range-from value="' + K + '" max="' + C + '"></label><label><span>To</span><input type="date" data-range-to value="' + ft + '" max="' + C + '"></label></div><button class="wbRangeApply" data-wb="graph-apply" data-wb-focus="graph-apply">Show these dates</button></div>';
  }
  function Yr(f, b, y) {
    var Jt;
    const C = Ge[y], [H, U] = oi(), K = Se(H, U), ft = (Jt = Fn[y + "|" + dn()]) == null ? void 0 : Jt.points, Q = et[y].el, vt = Math.max(120, Q.clientWidth - 2 * 18 - 32), xt = Math.max(40, Q.clientHeight - 2 * 18 - 44 - 14 - 32 - 14 - 24), At = ft ? ft.length > 1 ? Dp(ft, (jt) => C.fmt(f, b, jt, K), xt, vt) : '<span class="wbGraphNote"><span>No history for these dates</span></span>' : '<span class="wbGraphNote"><span>Loading…</span></span>';
    return '<div class="wbCard wbSquare wbGraphCard"><div class="wbHead"><div class="wbChip wbPlain">' + Tu(C.icon(f)) + '</div><div class="wbText"><span class="wbName">' + Ft(C.name(f)) + '</span><span class="wbSub">' + Ft(C.sub ? C.sub(K) : C.now ? C.now(f, b) : "") + '</span></div><button class="wbBack" title="' + Ft(Bt.back) + '" data-wb="graph-close" data-wb-focus="graph-close">' + tr(Oe.back) + '</button></div><button class="wbRangeBtn" aria-haspopup="dialog" aria-expanded="' + !!E.picking + '" title="Choose date range" data-wb="graph-pick" data-wb-focus="graph-pick">' + tr(Oe.calendar) + "<span>" + Ft(aa(f)) + "</span>" + tr(Oe.chevronDown) + '</button><div class="wbGraph">' + At + "</div></div>" + (E.picking ? Bo(f, Q.getBoundingClientRect().left > innerWidth / 2) : "");
  }
  function xa(f) {
    var At, Jt, jt;
    const b = l == null ? void 0 : l();
    if (!b || X) return;
    const y = Nn(b);
    ut(b, y), Ct.lastFetch || ae();
    const C = ao(b), H = Ep(b), U = Dc(b), K = [
      ...y.map((_t) => b.states[_t]),
      b.states["sun.sun"],
      H && b.states[H],
      U && b.states[U],
      ...C.air.map((_t) => b.states[_t]),
      ...C.pollen.map((_t) => b.states[_t]),
      ...V.some((_t) => F.includes(_t)) ? [...To(b), ...ei(b)] : [],
      b.locale,
      b.config,
      b.entities,
      Math.floor(Date.now() / sn)
    ];
    if (!f && G && K.length === G.length && K.every((_t, Qt) => _t === G[Qt])) return;
    G = K;
    const ft = M.getRootNode(), Q = ft.activeElement || document.activeElement;
    for (const _t of V) {
      const Qt = et[_t];
      let Yt = "";
      try {
        Yt = (E.graph === _t ? Yr(b, y, _t) : Bs[_t](b, y)) || "";
      } catch {
        Yt = "";
      }
      if (Yt === Qt.html) continue;
      const Et = Q && Qt.el.contains(Q) ? (At = Q.dataset) == null ? void 0 : At.wbFocus : void 0, he = Qt.el.querySelector(".wbStripScroll"), oe = he ? he.scrollLeft : null;
      Qt.html = Yt, Qt.el.hidden = !Yt, Qt.el.innerHTML = Yt;
      const Ee = Qt.el.querySelector(".wbStripScroll");
      Ee && oe != null ? Ee.scrollTo({ left: oe }) : Ee != null && Ee.dataset.start && Ee.scrollTo({ left: Number(Ee.dataset.start) * Ee.clientWidth / Number(Ee.dataset.span) }), Et && !ot && ((Jt = Qt.el.querySelector('[data-wb-focus="' + Et + '"]')) == null || Jt.focus());
    }
    xn(), ot && ((jt = M.querySelector('[data-wb-focus="' + ot + '"]')) == null || jt.focus({ preventScroll: !0 }), ot = null);
    let vt = !1, xt = !1;
    for (const _t of V) {
      const Qt = et[_t], Yt = !Qt.el.hidden, Et = z[_t] === "wide" || pt.includes(_t), he = V.indexOf(_t) >= V.indexOf("moon"), oe = Yt && (he && Et && !vt || !Et && !xt);
      oe && Et && (vt = !0), oe && !Et && (xt = !0), Qt.el.toggleAttribute("data-break", oe);
    }
    cr(performance.now());
  }
  function Ro() {
    kt || X || (kt = !0, queueMicrotask(() => {
      kt = !1, xa(!0);
    }));
  }
  function Kn() {
    const f = getComputedStyle(M), b = (K) => f.getPropertyValue(K).trim(), y = {};
    [["skyClearDay", "--wx-clear"], ["skyClearNight", "--wx-night"], ["skyCloudyDay", "--wx-cloudy"], ["cloudDay", "--wx-cloud-bright"], ["cloudNight", "--wx-cloudy"], ["rain", "--primary"]].forEach(([K, ft]) => {
      b(ft) && (y[K] = b(ft));
    });
    const C = b("--color-text-primary") || "#f1f1f1", H = b("--color-bg-card") || "#222222", U = !!M.closest(".light");
    return { colors: { ...Pn, ...y }, ink: U ? C : H, paper: U ? H : C };
  }
  const ii = (f, b) => {
    var y;
    f.width !== b.w && (f.width = b.w), f.height !== b.h && (f.height = b.h), (y = f.getContext("2d")) == null || y.putImageData(new ImageData(b.data, b.w, b.h), 0, 0);
  }, Po = () => g && !Nh();
  function dr(f, b) {
    M.querySelectorAll("canvas[data-wb-strip]").forEach((y) => ml(y, it[y.dataset.wbStrip], f, b));
  }
  function ml(f, b, y, C) {
    if (!b || !f.getClientRects().length) return;
    const H = f.clientWidth, U = f.clientHeight;
    if (!H || !U) return;
    const K = { width: H, height: U, columns: b.columns || mp, colors: C.colors, clock: y, ambient: Po(), seed: b.seed, soft: 1.5 };
    if (u === "smooth") {
      const ft = Math.min(2, window.devicePixelRatio || 1), Q = Math.round(H * ft), vt = Math.round(U * ft);
      f.width !== Q && (f.width = Q), f.height !== vt && (f.height = vt);
      const xt = f.getContext("2d");
      if (!xt) return;
      xt.setTransform(ft, 0, 0, ft, 0, 0), Pf(xt, b.segs, K);
    } else ii(f, Rf(b.segs, { ...K, px: 2, oneBit: u === "onebit", ink: C.ink, paper: C.paper }));
  }
  function cr(f) {
    if (X) return;
    const b = Kn();
    if (u !== "smooth") {
      const y = Po();
      M.querySelectorAll("canvas[data-wb-wx]").forEach((C) => {
        C.getClientRects().length && ii(C, ru(jc(C.dataset.wbWx, b.colors), { size: Number(C.dataset.size) || 40, px: 2, oneBit: u === "onebit", colors: b.colors, ink: b.ink, paper: b.paper, clock: f, idle: y }));
      });
    }
    M.querySelectorAll("canvas[data-wb-sea]").forEach((y) => {
      const C = y.clientWidth, H = y.clientHeight, U = Number(y.dataset.wbSea), K = C + "x" + H + ":" + U + ":" + b.colors.skyClearDay;
      !C || !H || !(U > 0) || y.dataset.painted === K || (y.dataset.painted = K, ii(y, Kf(C, H, U, b.colors)));
    }), dr(f, b);
  }
  function Zr(f) {
    if (ht = 0, !(X || !Po())) {
      if (!document.hidden)
        if (u === "smooth") dr(f, Kn());
        else {
          const b = Math.floor(f / 100);
          b !== dt && (dt = b, cr(f));
        }
      ht = requestAnimationFrame(Zr);
    }
  }
  function lo() {
    M.classList.toggle("wbMotion", Po()), !ht && !X && Po() && (ht = requestAnimationFrame(Zr));
  }
  function Rs(f) {
    var y, C, H, U, K, ft, Q;
    const b = (C = (y = f.target).closest) == null ? void 0 : C.call(y, "[data-wb]");
    if (!b || !M.contains(b)) {
      const vt = (U = (H = f.target).closest) == null ? void 0 : U.call(H, ".wbItem"), xt = vt == null ? void 0 : vt.dataset.card;
      if (!vt || !M.contains(vt) || !Ge[xt] || E.graph === xt || M.closest(".tfEditing") || vt.offsetHeight < 200 || xt === "current" && k) return;
      E.graph = xt, ot = "graph-close", xa(!0), (K = Fn[xt + "|" + dn()]) != null && K.points ? hp(et[xt].el.querySelector(".wbGraphCard")) : wa = xt, Ri(xt);
      return;
    }
    switch (b.dataset.wb) {
      case "day": {
        E.openDay = Number(b.dataset.index), E.opener = b.dataset.wbFocus, ot = "back-day";
        const vt = Xt()[E.openDay], xt = !Ct.todayHistory || Ct.todayHistory.day !== (/* @__PURE__ */ new Date()).toDateString() || Date.now() - Ct.todayHistory.fetched > hh;
        vt && ll(new Date(vt.datetime), /* @__PURE__ */ new Date()) && xt && Fa();
        break;
      }
      case "close-day":
        E.openDay = void 0, ot = E.opener, E.opener = void 0;
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
          localStorage.setItem(nt, E.hourlyView);
        } catch {
        }
        break;
      case "hours-day": {
        const vt = M.querySelector(".wbStripScroll");
        vt && vt.scrollTo({ left: Number(b.dataset.hours) * vt.clientWidth / Number(vt.dataset.span), behavior: "smooth" });
        return;
      }
      case "aq-open":
        E.aq = b.dataset.entity, qt(E.aq);
        break;
      case "aq-close":
        E.aq = void 0;
        break;
      case "graph-close":
        E.graph = void 0, E.picking = !1;
        break;
      case "graph-pick":
        E.picking = !E.picking, ot = E.picking ? "graph-preset-" + (E.range.preset === "custom" ? "day" : E.range.preset) : "graph-pick";
        break;
      case "graph-preset":
        E.range = { preset: b.dataset.range }, E.picking = !1, ot = "graph-pick", xa(!0), Ri(E.graph);
        return;
      case "graph-apply": {
        let vt = E.range.pickFrom || ((ft = M.querySelector("[data-range-from]")) == null ? void 0 : ft.value), xt = E.range.pickTo || ((Q = M.querySelector("[data-range-to]")) == null ? void 0 : Q.value);
        if (!vt || !xt) return;
        vt > xt && ([vt, xt] = [xt, vt]), E.range = { preset: "custom", from: vt, to: xt }, E.picking = !1, ot = "graph-pick", xa(!0), Ri(E.graph);
        return;
      }
      default:
        return;
    }
    xa(!0);
  }
  function Pi(f) {
    var b, y, C, H, U, K;
    f.key === "Escape" && E.openDay !== void 0 && ((y = (b = f.target).closest) != null && y.call(b, '[data-wb-open="day"]')) ? (E.openDay = void 0, ot = E.opener, E.opener = void 0, xa(!0)) : f.key === "Escape" && E.picking && ((H = (C = f.target).closest) != null && H.call(C, ".wbGraphCard")) ? (E.picking = !1, ot = "graph-pick", xa(!0)) : f.key === "Escape" && E.graph && ((K = (U = f.target).closest) != null && K.call(U, ".wbGraphCard")) && (E.graph = void 0, xa(!0));
  }
  let ha = null;
  function Kr(f) {
    var y, C;
    const b = (C = (y = f.target).closest) == null ? void 0 : C.call(y, ".wbStripScroll");
    !b || f.button !== 0 || (ha = { startX: f.pageX, left: b.scrollLeft, moved: !1 }, b.classList.add("wbHeld"), window.addEventListener("mousemove", No), window.addEventListener("mouseup", ri, { once: !0 }));
  }
  function No(f) {
    const b = M.querySelector(".wbStripScroll");
    if (!ha || !b) return;
    const y = f.pageX - ha.startX;
    !ha.moved && Math.abs(y) > 1 && (ha.moved = !0, b.classList.add("wbDragging")), b.scrollLeft = ha.left - y;
  }
  function ri() {
    ha = null, window.removeEventListener("mousemove", No);
    const f = M.querySelector(".wbStripScroll");
    if (!f) return;
    f.classList.remove("wbDragging", "wbHeld");
    const b = [...f.querySelectorAll(".wbSnap")];
    if (b.length) {
      const y = b.reduce((C, H) => Math.abs(H.offsetLeft - f.scrollLeft) < Math.abs(C.offsetLeft - f.scrollLeft) ? H : C);
      f.scrollTo({ left: y.offsetLeft, behavior: "smooth" });
    }
  }
  const Ya = (f) => {
    var y, C;
    const b = f.target;
    (y = b.matches) != null && y.call(b, "[data-range-from]") ? E.range.pickFrom = b.value : (C = b.matches) != null && C.call(b, "[data-range-to]") && (E.range.pickTo = b.value);
  };
  M.addEventListener("change", Ya), M.addEventListener("click", Rs), M.addEventListener("keydown", Pi), M.addEventListener("mousedown", Kr);
  const Ni = 64, Hi = 30;
  let cn = null, Be = 0;
  const Ii = () => {
    Be = 0, M.querySelectorAll(".wbPollen .wbPush").forEach((f) => {
      let b = 0, y = 0;
      if (cn) {
        const C = f.parentElement.getBoundingClientRect(), H = C.left + C.width / 2 - cn.x, U = C.top + C.height / 2 - cn.y, K = Math.hypot(H, U) || 1;
        if (K < Ni) {
          const ft = (1 - K / Ni) * Hi;
          b = H / K * ft, y = U / K * ft;
        }
      }
      f.style.transform = b || y ? "translate(" + b.toFixed(1) + "px," + y.toFixed(1) + "px)" : "";
    }), cn && (Be = requestAnimationFrame(Ii));
  }, Ps = (f) => {
    var y, C;
    if (!((C = (y = f.target).closest) == null ? void 0 : C.call(y, ".wbPollen")) || Ka != null && Ka.matches) {
      cn && (cn = null, Be || (Be = requestAnimationFrame(Ii)));
      return;
    }
    cn = { x: f.clientX, y: f.clientY }, Be || (Be = requestAnimationFrame(Ii));
  }, $r = () => {
    cn = null, Be || (Be = requestAnimationFrame(Ii));
  };
  M.addEventListener("pointermove", Ps), M.addEventListener("pointerleave", $r);
  const Za = typeof ResizeObserver == "function" ? new ResizeObserver(() => cr(performance.now())) : null;
  Za == null || Za.observe(M);
  const Ka = ($a = window.matchMedia) == null ? void 0 : $a.call(window, "(prefers-reduced-motion: reduce)"), Ve = () => {
    lo(), cr(performance.now());
  };
  (Ho = Ka == null ? void 0 : Ka.addEventListener) == null || Ho.call(Ka, "change", Ve);
  const co = [
    setInterval(() => {
      st = /* @__PURE__ */ new Date(), xa(!0);
    }, Mh),
    setInterval(() => {
      Ot = /* @__PURE__ */ new Date(), xa(!0);
    }, Sh),
    setInterval(ae, xh)
  ];
  return xa(!0), lo(), {
    update() {
      xa(!1);
    },
    // a choice in Settings changed (Next hours' window)
    refresh() {
      xa(!0);
    },
    setStyle(f) {
      !f || f === u || (u = f, M.dataset.style = u, xa(!0), lo());
    },
    destroy() {
      var f;
      cancelAnimationFrame(Be), M.removeEventListener("pointermove", Ps), M.removeEventListener("pointerleave", $r), X = !0, co.forEach(clearInterval), ht && cancelAnimationFrame(ht), ht = 0, Za == null || Za.disconnect(), (f = Ka == null ? void 0 : Ka.removeEventListener) == null || f.call(Ka, "change", Ve), ri(), M.removeEventListener("click", Rs), M.removeEventListener("change", Ya), M.removeEventListener("keydown", Pi), M.removeEventListener("mousedown", Kr), ["daily", "hourly"].forEach(D), M.remove();
    }
  };
}
const Ql = "#E1E1E1", Pp = "#F7F4F0", Bc = "#03a9f4", He = 14, Ie = 172;
let pm = 0;
const da = (n) => Math.round(n * 100) / 100, Ci = (n, l, i) => Math.max(l, Math.min(i, n)), nr = (n, l, i, u, g, x) => '<rect x="' + da(n) + '" y="' + da(l) + '" width="' + da(i) + '" height="' + da(u) + '" fill="' + g + '"' + (x != null ? ' opacity="' + x + '"' : "") + "/>", Rc = (n) => n.map((l, i) => (i ? "L" : "M") + da(l[0]) + " " + da(l[1])).join("");
function Pc(n) {
  const l = (n == null ? void 0 : n.attributes) || {};
  return l.device_class === "curtain" ? "curtain" : l.device_class === "blind" || l.current_tilt_position != null ? "venetian" : "blind";
}
const Ir = [
  [2, ["#070B16", "#0E2447", "#1B3A6B", "#0A1733", 0.9]],
  [6.5, ["#0B0F1C", "#2E7FD6", "#F2743B", "#F1B6C8", 0.95]],
  [9.5, ["#8FC4EC", "#4DA3E8", "#F4FAFF", "#2F7FCF", 0.7]],
  [13, ["#9ED3F6", "#3F97E6", "#FFFFFF", "#2B86D9", 0.65]],
  [17, ["#9FC2E4", "#4A8ED4", "#FFD9B8", "#5E8FD6", 0.75]],
  [19, ["#4B5E86", "#3B86E0", "#FF6A3D", "#B07CE8", 0.95]],
  [21.5, ["#1A2140", "#1F3F7A", "#B4506E", "#3E59A6", 0.8]],
  [26, ["#070B16", "#0E2447", "#1B3A6B", "#0A1733", 0.9]]
];
function um(n) {
  const l = n < 2 ? n + 24 : n;
  let i = Ir[0], u = Ir[Ir.length - 1];
  for (let A = 0; A < Ir.length - 1; A++) if (l >= Ir[A][0] && l <= Ir[A + 1][0]) {
    i = Ir[A], u = Ir[A + 1];
    break;
  }
  const g = (l - i[0]) / (u[0] - i[0]), x = g * g * (3 - 2 * g), k = (A, I) => {
    const M = parseInt(A.slice(1), 16), W = parseInt(I.slice(1), 16);
    return "#" + [16, 8, 0].map((F) => Math.round((M >> F & 255) + ((W >> F & 255) - (M >> F & 255)) * x).toString(16).padStart(2, "0")).join("");
  };
  return { top: k(i[1][0], u[1][0]), bot: k(i[1][1], u[1][1]), warm: k(i[1][2], u[1][2]), cool: k(i[1][3], u[1][3]), op: i[1][4] + (u[1][4] - i[1][4]) * x, t: l };
}
function fm(n) {
  const l = parseInt(n.slice(1), 16), i = (l >> 16 & 255) / 255, u = (l >> 8 & 255) / 255, g = (l & 255) / 255, x = Math.max(i, u, g), k = Math.min(i, u, g);
  let A = 0, I = 0;
  const M = (x + k) / 2;
  if (x !== k) {
    const W = x - k;
    I = M > 0.5 ? W / (2 - x - k) : W / (x + k), A = (x === i ? (u - g) / W + (u < g ? 6 : 0) : x === u ? (g - i) / W + 2 : (i - u) / W + 4) / 6;
  }
  return [A * 360, I * 100, M * 100];
}
function Fu(n, l, i) {
  l = Ci(l, 0, 100) / 100, i = Ci(i, 0, 100) / 100;
  const u = (k) => (k + n / 30) % 12, g = l * Math.min(i, 1 - i), x = (k) => i - g * Math.max(-1, Math.min(u(k) - 3, Math.min(9 - u(k), 1)));
  return "#" + [x(0), x(8), x(4)].map((k) => Math.round(k * 255).toString(16).padStart(2, "0")).join("");
}
const [Ou, qu, Wu] = fm(Ql), Np = Fu(Ou, qu, Math.max(6, Wu - 14)), hm = Fu(Ou, qu, Math.min(96, Wu + 16));
function mm(n, l, i, u, g) {
  const x = Ie / 2, k = Ie * 0.12, A = x - (x - k) * n, I = (pt) => pt ** 1.3, M = Ci(i, -1.5, 1.5), W = (pt) => -(Math.abs(M) * 4.6 * pt ** 1.5) * Math.sign(M), F = n * 1.4, V = (pt, et) => {
    const X = Math.min(4.8, Math.abs(i) * 2.6) * (et ? 1 : -1) * Math.sign(i || 1), G = et ? pt + A : pt, ht = et ? pt : pt + A, dt = (Ct) => G + W(Ct) + X * Math.sin(Ct * Math.PI * 1.2 + u) * I(Ct) * 1.4 + F * Math.sin(Ct * Math.PI * 2 + u * 0.6) * I(Ct) * (et ? 1 : -1), kt = [[ht, He]];
    for (let Ct = 0; Ct <= 12; Ct++) kt.push([dt(Ct / 12), He + Ie * Ct / 12]);
    kt.push([ht, He + Ie]);
    let ot = '<path d="' + Rc(kt) + 'Z" fill="' + Ql + '"/>';
    if (g) return ot;
    const nt = 1.35 + ((et ? i > 0 : i < 0) ? 0.35 : 0), at = (Ct) => {
      const st = Ct / 7, Ot = et ? 1 - st : st, it = (1 - Ot) ** 1.3, Zt = pt + A * st;
      return Array.from({ length: 13 }, (L, R) => {
        const q = R / 12;
        return [Zt + W(q) * it + X * nt * Math.sin(q * Math.PI * 1.2 + u - Ot * 3.2) * I(q) * 1.4 * it + F * 1.6 * Math.sin(q * Math.PI * 2 + u * 0.6 - Ot * 2.5) * I(q) * n * (0.4 + 0.6 * it), He + Ie * q];
      });
    }, E = [1, 2, 3, 4, 5, 6].map(at);
    for (let Ct = 0; Ct < 6; Ct += 2) ot += '<path d="' + Rc(E[Ct]) + Rc(E[Ct + 1].slice().reverse()).replace("M", "L") + 'Z" fill="#fff"/>';
    return ot;
  }, z = x - (x - k) * l;
  return { body: V(He, !0) + V(He + Ie - A, !1), rails: [{ x: He + z - 4, y: He, w: 4, h: Ie }, { x: He + Ie - z, y: He, w: 4, h: Ie }], head: 6.4 };
}
function gm(n, l, i) {
  const u = Ie * (1 - n);
  let g = "";
  if (u > 1 && (g += nr(He, He, Ie, u, Ql), !i))
    for (let x = 1; x < 7; x += 2) g += nr(He + Ie * x / 7, He, Ie / 7, u, "#fff");
  return { body: g, rails: [{ x: He, y: He + Ie * (1 - l) - 7, w: Ie, h: 11 }], head: 10.4 };
}
function vm(n, l, i, u) {
  const g = 9 - 7 * (i / 100), x = He + Ie * (1 - n), k = Math.ceil(Ie / 10) + 1, A = He + g / 2, I = (He + Ie - g / 2 - A) / (k - 1), M = 0.8, W = 0.6, F = Array.from({ length: k }, (pt, et) => Math.max(A + et * W, Math.min(A + et * I, x - g / 2 - (k - 1 - et) * W))), V = F.slice(0, -1).map((pt, et) => Ci((F[et + 1] - pt - W) / (I - W), 0, 1));
  V.push(V[k - 2]);
  let z = "";
  return F.forEach((pt, et) => {
    const X = M + (g - M) * V[et], G = Math.max(0.5, X / 2), ht = Math.max(0.4, X * 0.114);
    z += nr(He, pt - G, Ie, Math.max(1, X), Ql), !u && X > 2.2 && (z += nr(He, pt + G - ht, Ie, ht, Np) + nr(He, pt - G, Ie, ht * 0.55, hm, 0.75));
  }), u || [0.22, 0.78].forEach((pt) => {
    z += nr(He + Ie * pt - 0.7, He, 1.4, Math.max(0, F[k - 1] + 1 - He), Np, 0.85);
  }), { body: z, rails: [{ x: He, y: He + Ie * (1 - l) - 8, w: Ie, h: 8 }], head: 8.8 };
}
const Hp = (n, l, i, u, g, x, k) => n === "curtain" ? mm(l, i, g, x, k) : n === "venetian" ? vm(l, i, u, k) : gm(l, i, k);
function bm(n, l) {
  let i = "", u = "";
  return l.forEach((g) => {
    const x = g.w > g.h, k = Ci(x ? He + Ie / 2 : g.x + g.w / 2, 17, 183), A = Ci(x ? g.y + g.h / 2 : He + Ie / 2, 17, 183);
    i += x ? nr(He, Ci(g.y + g.h / 2, He, He + Ie) - 1, Ie, 2, Bc) : nr(Ci(g.x + g.w / 2, He, He + Ie) - 1, He, 2, Ie, Bc);
    const I = x ? "M" + da(k - 4) + " " + da(A - 3) + "l4 -3l4 3M" + da(k - 4) + " " + da(A + 3) + "l4 3l4 -3" : "M" + da(k - 3) + " " + da(A - 4) + "l-3 4l3 4M" + da(k + 3) + " " + da(A - 4) + "l3 4l-3 4";
    u += '<circle cx="' + da(k) + '" cy="' + da(A) + '" r="11" fill="' + Bc + '" filter="url(#' + n + 's)"/><path d="' + I + '" fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>';
  }), { lines: i, knobs: u };
}
function wm(n, l) {
  const i = /* @__PURE__ */ new Date(), u = um(i.getHours() + i.getMinutes() / 60), g = 42 + 18 * Math.sin(u.t * 0.5), x = u.t >= 5 && u.t <= 20 ? 40 - 48 * Math.sin(Math.PI * (u.t - 5) / 15) : 80, k = Hp(l.kind, l.pos / 100, l.bar / 100, l.tilt, l.vel, l.ph, !1), A = l.ghostAlpha > 4e-3 && l.ghost != null ? Hp(l.kind, l.ghost / 100, l.ghost / 100, l.tilt, 0, 0, !0).body : "", I = l.grip > 4e-3 ? bm(n, k.rails) : null, M = (W) => nr(He, He, Ie, Ie, W);
  return '<svg viewBox="0 0 200 200" aria-hidden="true" focusable="false"><defs><clipPath id="' + n + 'c"><rect x="14" y="14" width="172" height="172" rx="8"/></clipPath><linearGradient id="' + n + 'l" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + u.top + '"/><stop offset="1" stop-color="' + u.bot + '"/></linearGradient><radialGradient id="' + n + 'w" cx="' + da(g) + '%" cy="' + da(x) + '%" r="58%"><stop offset="0" stop-color="' + u.warm + '" stop-opacity="' + da(u.op * 0.8) + '"/><stop offset="1" stop-color="' + u.warm + '" stop-opacity="0"/></radialGradient><radialGradient id="' + n + 'k" cx="' + da(100 - g * 0.8) + '%" cy="' + da(100 - x * 0.6) + '%" r="62%"><stop offset="0" stop-color="' + u.cool + '" stop-opacity="' + da(u.op * 0.64) + '"/><stop offset="1" stop-color="' + u.cool + '" stop-opacity="0"/></radialGradient><filter id="' + n + 's" x="-5%" y="-50%" width="110%" height="300%"><feDropShadow dx="0" dy="1.2" stdDeviation="1.2" flood-color="#000" flood-opacity=".18"/></filter></defs><rect x="6" y="6" width="188" height="188" rx="16" fill="' + Pp + '" stroke="#E3E3E3" stroke-width=".4"/><g clip-path="url(#' + n + 'c)">' + M("url(#" + n + "l)") + M("url(#" + n + "w)") + M("url(#" + n + "k)") + (A ? '<g opacity="' + da(l.ghostAlpha) + '">' + A + "</g>" : "") + k.body + '<rect x="14" y="14" width="172" height="' + k.head + '" fill="' + Ql + '" filter="url(#' + n + 's)"/></g>' + (I ? '<g clip-path="url(#' + n + 'c)" opacity="' + da(l.grip) + '">' + I.lines + "</g>" : "") + '<rect x="13.5" y="13.5" width="173" height="173" rx="8.5" fill="none" stroke="' + Pp + '" stroke-width="3"/>' + (I ? '<g opacity="' + da(l.grip) + '">' + I.knobs + "</g>" : "") + "</svg>";
}
function xm({ onMove: n, onSet: l }) {
  var ot;
  const i = "cv" + ++pm, u = document.createElement("div");
  u.className = "tfCoverArt";
  const g = (ot = window.matchMedia) == null ? void 0 : ot.call(window, "(pointer: coarse)").matches;
  let x = null;
  const k = { pos: 0, tilt: 0, vel: 0, ph: 0, grip: 0, ghost: 0, gpos: null, last: 0 };
  let A = 0, I = !1, M = !1, W = null, F = 0, V = 0;
  const z = () => (x == null ? void 0 : x.kind) === "curtain" ? "x" : "y", pt = () => W || I || M || x.moving || x.target != null ? 1 : g ? performance.now() < V ? 1 : 0.4 : 0, et = () => {
    u.innerHTML = wm(i, { kind: x.kind, pos: k.pos, bar: x.target ?? k.pos, tilt: k.tilt, vel: k.vel, ph: k.ph, ghost: k.gpos, ghostAlpha: k.ghost, grip: k.grip });
  };
  function X(nt) {
    A = 0;
    const at = k.last ? Math.min(0.064, (nt - k.last) / 1e3) : 1 / 60, E = at * 60;
    k.last = nt;
    const Ct = x.pos - k.pos, st = k.pos;
    k.pos += Math.sign(Ct) * Math.min(Math.abs(Ct), Math.max(10.5, Math.abs(Ct) * 1.4) * at), Math.abs(x.pos - k.pos) < 0.03 && (k.pos = x.pos), k.vel = k.vel * 0.86 + (k.pos - st) / E * 0.14, Math.abs(k.vel) < 0.015 && k.pos === x.pos && (k.vel = 0), (k.pos !== st || k.vel) && (k.ph += (0.06 + Math.abs(k.vel) * 0.03) * E);
    const Ot = x.tilt - k.tilt;
    k.tilt += Math.sign(Ot) * Math.min(Math.abs(Ot), Math.max(60, Math.abs(Ot) * 4) * at);
    const it = pt();
    k.grip += (it - k.grip) * Math.min(1, at * (it > k.grip ? 11 : 3.5)), Math.abs(it - k.grip) < 0.01 && (k.grip = it);
    const Zt = x.target != null && Math.abs(x.target - k.pos) > 0.5 ? 0.22 : 0;
    x.target != null && (k.gpos = x.target), k.ghost += (Zt - k.ghost) * Math.min(1, at * (Zt > k.ghost ? 16 : 3)), Math.abs(Zt - k.ghost) < 4e-3 && (k.ghost = Zt), et(), k.pos !== x.pos || k.vel || k.tilt !== x.tilt || k.grip !== it || k.ghost !== Zt ? A = requestAnimationFrame(X) : k.last = 0;
  }
  const G = () => {
    x && !A && (A = requestAnimationFrame(X));
  }, ht = setInterval(() => {
    x && !A && et();
  }, 60 * 1e3), dt = (nt) => {
    const at = u.getBoundingClientRect();
    return z() === "x" ? (nt.clientX - at.left) / at.width : (nt.clientY - at.top) / at.height;
  };
  u.addEventListener("pointerdown", (nt) => {
    var Ct;
    if (!(x != null && x.canSet) || nt.button > 0) return;
    nt.preventDefault(), (Ct = u.setPointerCapture) == null || Ct.call(u, nt.pointerId);
    const at = x.target ?? x.pos, E = u.getBoundingClientRect();
    W = { p0: dt(nt), from: at, x0: nt.clientX, value: null, side: null }, x.kind === "curtain" && at > 0 && (W.side = (nt.clientX - E.left) / E.width < 0.5 ? "L" : "R"), G();
  }), u.addEventListener("pointermove", (nt) => {
    if (!W) return;
    let at;
    if (x.kind === "curtain") {
      if (!W.side) {
        const Ct = nt.clientX - W.x0;
        if (Math.abs(Ct) < 4) return;
        W.side = Ct < 0 ? "L" : "R";
      }
      const E = (Ie / 2 - Ie * 0.12) / 200;
      at = W.from + (W.side === "L" ? -1 : 1) * ((dt(nt) - W.p0) / E) * 100;
    } else at = W.from - (dt(nt) - W.p0) / (Ie / 200) * 100;
    W.value = Ci(at, 0, 100), n(W.value);
  });
  const kt = () => {
    if (!W) return;
    const nt = W.value;
    W = null, nt != null && l(Math.round(nt)), G();
  };
  return u.addEventListener("pointerup", kt), u.addEventListener("pointercancel", kt), u.addEventListener("lostpointercapture", kt), u.addEventListener("pointerenter", () => {
    I = !0, G();
  }), u.addEventListener("pointerleave", () => {
    I = !1, G();
  }), u.addEventListener("focus", () => {
    M = u.matches(":focus-visible"), G();
  }), u.addEventListener("blur", () => {
    M = !1, G();
  }), u.addEventListener("keydown", (nt) => {
    if (!(x != null && x.canSet)) return;
    const at = Math.round(x.target ?? x.pos), E = nt.shiftKey ? 10 : 1, Ct = { ArrowUp: at + E, ArrowRight: at + E, ArrowDown: at - E, ArrowLeft: at - E, PageUp: at + 25, PageDown: at - 25, Home: 0, End: 100 }[nt.key];
    if (Ct == null) return;
    nt.preventDefault();
    const st = Ci(Ct, 0, 100);
    n(st), clearTimeout(F), F = setTimeout(() => l(st), 500);
  }), {
    el: u,
    update(nt) {
      const at = !x;
      x = nt, at && (k.pos = x.pos, k.tilt = x.tilt, V = performance.now() + 1500, g && setTimeout(G, 1600)), u.classList.toggle("x", z() === "x"), u.classList.toggle("y", z() === "y"), x.canSet ? (u.tabIndex = 0, u.setAttribute("role", "slider"), u.setAttribute("aria-valuemin", "0"), u.setAttribute("aria-valuemax", "100"), u.setAttribute("aria-valuenow", String(Math.round(x.target ?? x.pos))), u.setAttribute("aria-orientation", z() === "x" ? "horizontal" : "vertical")) : u.setAttribute("role", "img"), u.setAttribute("aria-label", x.name + (x.canSet ? " position" : "")), u.setAttribute("aria-valuetext", x.text), G();
    },
    destroy() {
      cancelAnimationFrame(A), A = 0, clearInterval(ht), clearTimeout(F), u.remove();
    }
  };
}
const Ip = "move-assistant-density", Mi = {
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
}, J = (n) => String(n ?? "").replace(/[&<>"']/g, (l) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[l]), Nc = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 12H5"/><path d="M12 19L5 12L12 5"/></svg>', Fp = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M15 18L9 12L15 6"/></svg>', Op = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6L18 18"/><path d="M18 6L6 18"/></svg>', Ud = {
  prev: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6h2v12H6zM9.5 12L18 18V6z"/></svg>',
  next: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16 6h2v12h-2zM6 18l8.5-6L6 6z"/></svg>',
  play: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>',
  pause: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 5h4v14H6zM14 5h4v14h-4z"/></svg>'
}, qp = {
  down: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 11h14v2H5z"/></svg>',
  up: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11 5h2v6h6v2h-6v6h-2v-6H5v-2h6z"/></svg>'
}, Wp = 1, ym = 4, Vp = 16, jp = 32, km = 128, Mm = 256, zp = 16384, Sm = 1, Cm = 2, Gp = 4, Tm = 8, Lm = {
  open: '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 7l-5 5 5 5"/><path d="M16 7l5 5-5 5"/></svg>',
  stop: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="7" y="7" width="10" height="10" rx="2.5" fill="currentColor"/></svg>',
  close: '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7l5 5-5 5"/><path d="M21 7l-5 5 5 5"/></svg>'
}, Up = { curtain: ["mdi:curtains", "mdi:curtains-closed"], blind: ["mdi:roller-shade", "mdi:roller-shade-closed"], venetian: ["mdi:blinds-horizontal", "mdi:blinds-horizontal-closed"] }, Am = { curtain: "curtains", blind: "blind", venetian: "blinds" }, Kl = {
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
}, Yp = ["covers", "people", "openings", "leaks", "vacuum"], Zp = "move_assistant_house", Kp = "move-assistant-house-used", Hc = ["switch", "fan", "input_boolean", "automation"], $p = "move-assistant-house-look", Em = [["look", "Look"], ["house", "House page"], ["weather", "Weather"]], _m = [["popup", "Popup"], ["sheet", "Sheet"]], Dm = [["auto", "Automatic"], ["cut", "Cut short"], ["wrap", "Two lines"], ["scroll", "Scroll"]], Bm = [["day", "Daytime 06–22"], ["waking", "Waking 07–23"], ["all", "All day"]], Rm = [["bitmap", "Pixel"], ["onebit", "1-bit"], ["smooth", "Smooth"], ["line", "Line"]], Yd = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7,19V17H9V19H7M11,19V17H13V19H11M15,19V17H17V19H15M7,15V13H9V15H7M11,15V13H13V15H11M15,15V13H17V15H15M7,11V9H9V11H7M11,11V9H13V11H11M15,11V9H17V11H15M7,7V5H9V7H7M11,7V5H13V7H11M15,7V5H17V7H15Z"/></svg>', Pm = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z"/></svg>', Nm = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z"/></svg>', Xp = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11.83,9L15,12.16C15,12.11 15,12.05 15,12A3,3 0 0,0 12,9C11.94,9 11.89,9 11.83,9M7.53,9.8L9.08,11.35C9.03,11.56 9,11.77 9,12A3,3 0 0,0 12,15C12.22,15 12.44,14.97 12.65,14.92L14.2,16.47C13.53,16.8 12.79,17 12,17A5,5 0 0,1 7,12C7,11.21 7.2,10.47 7.53,9.8M2,4.27L4.28,6.55L4.73,7C3.08,8.3 1.78,10 1,12C2.73,16.39 7,19.5 12,19.5C13.55,19.5 15.03,19.2 16.38,18.66L16.81,19.08L19.73,22L21,20.73L3.27,3M12,7A5,5 0 0,1 17,12C17,12.64 16.87,13.26 16.64,13.82L19.57,16.75C21.07,15.5 22.27,13.86 23,12C21.27,7.61 17,4.5 12,4.5C10.6,4.5 9.26,4.75 8,5.2L10.17,7.35C10.74,7.13 11.35,7 12,7Z"/></svg>', Ic = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"/></svg>', Hm = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 13C6.14 13 4.59 14.28 4.14 16H2V18H4.14C4.59 19.72 6.14 21 8 21S11.41 19.72 11.86 18H22V16H11.86C11.41 14.28 9.86 13 8 13M8 19C6.9 19 6 18.1 6 17C6 15.9 6.9 15 8 15S10 15.9 10 17C10 18.1 9.1 19 8 19M19.86 6C19.41 4.28 17.86 3 16 3S12.59 4.28 12.14 6H2V8H12.14C12.59 9.72 14.14 11 16 11S19.41 9.72 19.86 8H22V6H19.86M16 9C14.9 9 14 8.1 14 7C14 5.9 14.9 5 16 5S18 5.9 18 7C18 8.1 17.1 9 16 9Z"/></svg>', Jp = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z"/></svg>', Zd = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"/></svg>', Qp = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>', Vu = (n) => '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">' + n.map((l) => '<path d="' + l + '"/>').join("") + "</svg>", Kd = Vu(["M12 20H21", "M16.5 3.5C17.33 2.67 18.67 2.67 19.5 3.5C20.33 4.33 20.33 5.67 19.5 6.5L7 19L3 20L4 16L16.5 3.5Z"]), tu = Vu(["M20 6L9 17L4 12"]), Si = (n, l = "") => '<span class="tfAreaGlyph" data-icon-for="' + J(n || "") + '"' + (l ? ' data-icon-name="' + J(l) + '"' : "") + "></span>", Im = (n) => '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.8l2.8 6 6.6.6-5 4.4 1.5 6.5L12 17l-5.9 3.3 1.5-6.5-5-4.4 6.6-.6z" fill="' + (n ? "currentColor" : "none") + '" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>', Fm = 1, Om = [["disarmed", "Off", "alarm_disarm", 0], ["armed_home", "Home", "alarm_arm_home", 1], ["armed_away", "Away", "alarm_arm_away", 2], ["armed_night", "Night", "alarm_arm_night", 4]], eu = { disarmed: "Disarmed", armed_home: "Armed home", armed_away: "Armed away", armed_night: "Armed night", armed_vacation: "Armed vacation", arming: "Arming", pending: "Pending", triggered: "Triggered", disarming: "Disarming" }, $d = ["door", "window", "garage_door", "opening"], au = { moisture: ["detected water", "dry"], smoke: ["detected smoke", "clear"], gas: ["detected gas", "clear"], carbon_monoxide: ["detected carbon monoxide", "clear"], safety: ["became unsafe", "safe"] }, $l = ["light", "climate", "cover", "humidifier", "media_player", "vacuum", "lock", "alarm_control_panel", "valve"], qm = ["light", "switch", "fan", "lock", "cover", "climate", "humidifier", "media_player", "alarm_control_panel", "vacuum", "valve", "binary_sensor"], Wm = 10, Vm = 20, jm = { electricity: "mdi:lightning-bolt", solar: "mdi:solar-power-variant", gas: "mdi:fire", water: "mdi:water" }, zm = ["living room", "bedroom", "office"];
function Gm(n, { config: l, getHass: i }) {
  var Sa, ja, mn;
  const u = (t) => n.getElementById(t), g = u("app"), x = l || {}, k = String(x.layout || "").toLowerCase().replace("_", "-") === "test-focus", A = String(x.page || "").toLowerCase() === "overview";
  let I = Mi.get(Ip) === "1", M = {};
  const W = (t) => {
    var e;
    return (e = i()) == null ? void 0 : e.callWS(t);
  }, F = (t, e, o) => W({ type: "call_service", domain: t, service: e, service_data: o }), V = n.querySelector("#appearancePane .toggleList");
  V && !u("densityToggle") && (V.insertAdjacentHTML(
    "afterbegin",
    '<div class="toggleRow"><div><strong>Show density</strong><div class="status">Each card’s height, and how many readings fit on the screen.</div></div><button class="switch" id="densityToggle" type="button" aria-label="Show density"></button></div>'
  ), u("densityToggle").addEventListener("click", () => {
    I = !I, Mi.set(Ip, I ? "1" : "0"), at();
  }));
  const z = [
    ["weather", "Weather", "The forecast under Home.", (t) => t.startsWith("weather.")],
    ["grid", "Energy", "Power from the grid, for Energy.", (t) => t.startsWith("sensor.") && ve(t).device_class === "power" && /^(W|kW)$/.test(ve(t).unit_of_measurement || "")],
    ["alarm", "Alarm", "The alarm in the Security popup.", (t) => t.startsWith("alarm_control_panel.")]
  ], pt = (t, e, o, r) => '<div class="themeChoice" id="' + t + '" role="group" aria-label="' + e + '">' + r.map(([c, h]) => '<button class="wxLayoutBtn" type="button" aria-pressed="false" ' + o + '="' + c + '">' + h + "</button>").join("") + "</div>", et = (t, e, o, r) => '<div class="toggleRow"' + (r ? ' id="' + r + '"' : "") + "><div><strong>" + t + "</strong>" + (e ? '<div class="status">' + e + "</div>" : "") + "</div>" + o + "</div>";
  function X() {
    var N, tt;
    if (!k || u("housePane")) return;
    const t = u("settingsView");
    t.querySelector(".settingsTitle").textContent = "HomeCore settings";
    const e = [["look", "Appearance"], ["lights", "Lights"], ["sources", "Sources"], ["sums", "Summaries"]], o = (rt, $) => '<div class="houseTab' + (rt === "look" ? " active" : "") + '" data-house-pane="' + rt + '"><section class="card">' + $ + "</section></div>";
    t.querySelector(".rubberTabs").insertAdjacentHTML("afterend", '<div class="settingsPane active" id="housePane"><div class="tabs rubberTabs houseTabs"><div class="rubberIndicator" aria-hidden="true"></div>' + e.map(([rt, $]) => '<button class="tab segBtn' + (rt === "look" ? " active" : "") + '" type="button" data-house-tab="' + rt + '">' + $ + "</button>").join("") + "</div>" + // Appearance in groups (Matt, 8 Nov), each one's title inside its card as a card header (Matt, 9 Nov)
    o("look", Em.map(([rt, $]) => '<div class="tfSetGroup"><div class="toggleList" data-look-group="' + rt + '"><div class="tfCardTitle">' + $ + "</div></div></div>").join("")) + // Lights as cards by default, with a Cards | Table choice (Matt, 9 Nov)
    o("lights", '<div class="tfLightView"><div class="themeChoice" role="group" aria-label="Show lights as"><button class="wxLayoutBtn" type="button" data-light-view="cards">Cards</button><button class="wxLayoutBtn" type="button" data-light-view="table">Table</button></div></div><p class="note tfTableNote">This is an example of a table. It is not how to control features in lights.</p><div class="metaTableWrap"><table class="metaTable tfLightTable"><thead><tr><th>Light</th><th>Room</th><th>Now</th><th class="metaSwitchCol">Favourite</th><th>Tile</th><th>Pad</th></tr></thead><tbody id="lightRows"></tbody></table></div><div class="tfLightCards" id="lightCards"></div>') + o("sources", '<div class="toggleList">' + z.map(([rt, $, ct]) => et($, ct, '<select class="settingsSelect" data-source="' + rt + '" aria-label="' + $ + '"></select>')).join("") + "</div>") + o("sums", '<div class="toggleList">' + Object.entries(Kl).map(([rt, $]) => et($.name, "", '<button class="switch" type="button" role="switch" data-sum-toggle="' + rt + '" aria-label="' + $.name + ' summary"></button>')).join("") + "</div>") + "</div>");
    const r = (rt) => t.querySelector('[data-look-group="' + rt + '"]'), c = (rt) => rt == null ? void 0 : rt.closest(".toggleRow");
    [c(t.querySelector(".themeBtn"))].forEach((rt) => rt && r("look").appendChild(rt));
    const h = c(u("densityToggle"));
    h && (h.hidden = !0), [c(u("moreInfoChoice")), c(u("namesChoice"))].forEach((rt) => rt && r("house").appendChild(rt)), r("house").insertAdjacentHTML("beforeend", et("Lights", "How lights show on the house page.", pt("lightsChoice", "Lights", "data-lights", [["tile", "HomeCore tile"], ["dac", "Dual Axis Controller"]]), "lightsRow") + et("Pad", "What the Dual Axis Controller’s pad sets on its tile.", pt("dacPadChoice", "Pad", "data-dac-pad", [["temperature", "Temperature"], ["colour", "Colour"]]), "dacPadRow")), [c(u("hoursChoice")), c(u("wxStyleChoice"))].forEach((rt) => rt && r("weather").appendChild(rt));
    const p = u("housePane"), v = p.querySelector(".houseTabs"), w = v.querySelector(".rubberIndicator"), _ = "homecore-light-view", P = (rt) => {
      p.classList.toggle("tfLightCardsOn", rt === "cards"), p.querySelectorAll("[data-light-view]").forEach(($) => $.setAttribute("aria-pressed", String($.dataset.lightView === rt))), Mi.set(_, rt);
    };
    P(Mi.get(_) === "table" ? "table" : "cards"), p.querySelector(".tfLightView").addEventListener("click", (rt) => {
      const $ = rt.target.closest("[data-light-view]");
      $ && P($.dataset.lightView);
    }), new ResizeObserver(() => ht()).observe(p), (tt = (N = document.fonts) == null ? void 0 : N.ready) == null || tt.then(() => ht());
    const T = (rt) => {
      const $ = v.querySelector(".tab.active");
      w.style.transition = "none", rt ? tc(w, w.offsetLeft, w.offsetWidth, $.offsetLeft, $.offsetWidth) : (w.style.left = $.offsetLeft + "px", w.style.width = $.offsetWidth + "px");
    };
    new ResizeObserver(() => T(!1)).observe(v), p.addEventListener("click", (rt) => {
      const $ = rt.target.closest("[data-house-tab]");
      if ($) {
        v.querySelectorAll(".tab").forEach((Z) => Z.classList.toggle("active", Z === $)), p.querySelectorAll(".houseTab").forEach((Z) => Z.classList.toggle("active", Z.dataset.housePane === $.dataset.houseTab)), $.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "smooth" }), T(!0), ht();
        return;
      }
      const ct = rt.target.closest("[data-light-fav]");
      if (ct) {
        Xr(ct.dataset.lightFav);
        return;
      }
      const j = rt.target.closest("[data-light-pick]");
      if (j) {
        const [Z, Vt] = j.dataset.lightPick.split("|"), Ne = { ...Ut[Z] };
        j.dataset.v ? Ne[Vt] = j.dataset.v : delete Ne[Vt], Ut[Z] = Ne, ue(), [...Ya.keys()].filter((le) => le.endsWith(":" + Vt)).forEach((le) => Ya.delete(le)), _a();
        return;
      }
      const yt = rt.target.closest("[data-lights],[data-dac-pad],[data-sum-toggle]");
      if (!(!yt || yt.disabled)) {
        if (yt.dataset.lights && (Ut.lights = yt.dataset.lights), yt.dataset.dacPad && (Ut.dacPad = yt.dataset.dacPad), (yt.dataset.lights || yt.dataset.dacPad) && (ue(), Ya.clear()), yt.dataset.sumToggle) {
          const Z = yt.dataset.sumToggle, Vt = new Set(qt.hiddenSums || []);
          Vt.has(Z) ? Vt.delete(Z) : Vt.add(Z), qt = { ...qt, hiddenSums: [...Vt] }, Yn();
        }
        _a();
      }
    }), p.addEventListener("change", (rt) => {
      const $ = rt.target;
      $.dataset.source && (qt = { ...qt, sources: { ...qt.sources || {}, [$.dataset.source]: $.value || void 0 } }, Yn());
      const ct = $.dataset.lightStyle || $.dataset.lightPad;
      if (ct) {
        const j = $.dataset.lightStyle ? "lightStyles" : "lightPads", yt = { ...Ut[j] };
        $.value ? yt[ct] = $.value : delete yt[ct], Ut[j] = yt, ue(), [...Ya.keys()].filter((Z) => Z.endsWith(":" + ct)).forEach((Z) => Ya.delete(Z));
      }
      _a();
    });
  }
  function G() {
    var T, N;
    Hi() && ri();
    const t = u("housePane");
    if (!t) return;
    const e = !!customElements.get(ha);
    t.querySelectorAll("[data-lights]").forEach((tt) => tt.setAttribute("aria-pressed", String(tt.dataset.lights === Ut.lights))), u("lightsRow").querySelector(".status").textContent = e || !Hi() ? "How lights show on the house page." : No === "failed" ? "The Dual Axis Controller didn't load. Check the connection, or install it from HACS." : "Getting the Dual Axis Controller…", t.querySelectorAll("[data-dac-pad]").forEach((tt) => tt.setAttribute("aria-pressed", String(tt.dataset.dacPad === Ut.dacPad))), u("dacPadRow").hidden = !Hi();
    for (const tt of t.querySelectorAll("[data-source]")) {
      if (tt === n.activeElement) continue;
      const [rt] = z.find(([ct]) => ct === tt.dataset.source), $ = Object.keys(M).filter(z.find(([ct]) => ct === rt)[3]).sort((ct, j) => Pt(ct).localeCompare(Pt(j)));
      tt.dataset.sig !== $.join(",") && (tt.innerHTML = '<option value="">Automatic</option>' + $.map((ct) => '<option value="' + J(ct) + '">' + J(Pt(ct)) + "</option>").join(""), tt.dataset.sig = $.join(",")), tt.value = $.includes((T = qt.sources) == null ? void 0 : T[rt]) ? qt.sources[rt] : "";
    }
    t.querySelectorAll("[data-sum-toggle]").forEach((tt) => {
      const rt = !(qt.hiddenSums || []).includes(tt.dataset.sumToggle);
      tt.classList.toggle("on", rt), tt.setAttribute("aria-checked", String(rt));
    });
    const o = u("lightRows"), r = u("lightCards"), c = n.activeElement, h = o != null && o.contains(c) || r != null && r.contains(c) ? c : null;
    if (!o || h != null && h.matches("select")) {
      ht();
      return;
    }
    const p = new Set(Nt()), v = (tt, rt, $, ct) => '<option value="' + tt + '"' + (tt === $ ? " selected" : "") + ">" + rt + "</option>", w = Object.keys(M).filter((tt) => tt.startsWith("light.")).sort((tt, rt) => !ce.get(tt) - !ce.get(rt) || (ce.get(tt) || "").localeCompare(ce.get(rt) || "") || Pt(tt).localeCompare(Pt(rt))).map((tt) => {
      const rt = Ut.lightStyles[tt] || "", $ = Ut.lightPads[tt] || "", ct = p.has(tt), j = J(Pt(tt));
      return "<tr><td><strong>" + j + "</strong></td><td>" + J(ce.get(tt) || "—") + "</td><td>" + J(We(tt)) + '</td><td class="metaSwitchCol"><button class="switch' + (ct ? " on" : "") + '" type="button" role="switch" aria-checked="' + ct + '" data-light-fav="' + J(tt) + '" aria-label="' + j + ' is a favourite"></button></td><td><select class="settingsSelect" data-light-style="' + J(tt) + '" aria-label="' + j + ' tile">' + v("", "Default", rt) + v("tile", "HomeCore tile", rt) + v("dac", "Dual Axis Controller", rt) + '</select></td><td><select class="settingsSelect" data-light-pad="' + J(tt) + '" aria-label="' + j + ' pad"' + (Ni(tt) ? "" : " disabled") + ">" + v("", "Default", $) + v("temperature", "Temperature", $) + v("colour", "Colour", $) + "</select></td></tr>";
    }).join(""), _ = (tt, rt, $, ct, j) => '<div class="themeChoice" role="group" aria-label="' + $ + '">' + ct.map(([yt, Z]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (yt === j) + '" data-light-pick="' + tt + "|" + J(rt) + '" data-v="' + yt + '">' + Z + "</button>").join("") + "</div>", P = Object.keys(M).filter((tt) => tt.startsWith("light.")).sort((tt, rt) => !ce.get(tt) - !ce.get(rt) || (ce.get(tt) || "").localeCompare(ce.get(rt) || "") || Pt(tt).localeCompare(Pt(rt))).map((tt) => {
      const rt = p.has(tt), $ = J(Pt(tt)), ct = [ce.get(tt), We(tt)].filter(Boolean).map(J).join(" · ");
      return '<div class="toggleList"><div class="toggleRow"><div><strong>' + $ + '</strong><div class="status">' + ct + "</div></div></div>" + et("Favourite", "", '<button class="switch' + (rt ? " on" : "") + '" type="button" role="switch" aria-checked="' + rt + '" data-light-fav="' + J(tt) + '" aria-label="' + $ + ' is a favourite"></button>') + et("Tile", "", _("lightStyles", tt, $ + " tile", [["", "Default"], ["tile", "HomeCore tile"], ["dac", "Dual Axis Controller"]], Ut.lightStyles[tt] || "")) + (Ni(tt) ? et("Pad", "", _("lightPads", tt, $ + " pad", [["", "Default"], ["temperature", "Temperature"], ["colour", "Colour"]], Ut.lightPads[tt] || "")) : "") + "</div>";
    }).join("");
    o.dataset.html !== w && (o.innerHTML = w, o.dataset.html = w), r.dataset.html !== P && (r.innerHTML = P, r.dataset.html = P), h != null && h.dataset.lightFav && ((N = (r.contains(h) ? r : o).querySelector('[data-light-fav="' + CSS.escape(h.dataset.lightFav) + '"]')) == null || N.focus({ preventScroll: !0 })), ht();
  }
  function ht() {
    var e, o, r;
    const t = u("housePane");
    if (t)
      for (const c of t.querySelectorAll(".themeChoice")) {
        const h = [...c.querySelectorAll("button")];
        let p = (e = c.nextElementSibling) != null && e.classList.contains("tfChoiceList") ? c.nextElementSibling : null;
        if (!p) {
          p = document.createElement("select"), p.className = "settingsSelect tfChoiceList", p.setAttribute("aria-label", c.getAttribute("aria-label") || ((r = (o = c.closest(".toggleRow")) == null ? void 0 : o.querySelector("strong")) == null ? void 0 : r.textContent) || ""), p.addEventListener("change", () => {
            var T;
            return (T = h[Number(p.value)]) == null ? void 0 : T.click();
          }), c.after(p);
          const P = () => {
            p.innerHTML = h.map((N, tt) => '<option value="' + tt + '"' + (N.disabled ? " disabled" : "") + ">" + J(N.textContent) + "</option>").join("");
            const T = h.findIndex((N) => N.getAttribute("aria-pressed") === "true" || N.classList.contains("active"));
            T >= 0 && (p.value = String(T));
          };
          new MutationObserver(P).observe(c, { subtree: !0, attributes: !0, attributeFilter: ["aria-pressed", "class", "disabled"] }), P();
        }
        const v = (P) => {
          c.hidden !== !P && (c.hidden = !P), p.hidden !== P && (p.hidden = P);
        };
        if (h.length > 3) {
          v(!1);
          continue;
        }
        if (!c.getClientRects().length && !p.getClientRects().length) {
          p.dataset.fit || v(!0);
          continue;
        }
        const w = c.hidden;
        c.hidden = !1;
        const _ = h.every((P) => P.scrollWidth <= P.clientWidth + 1);
        c.hidden = w, v(_), p.dataset.fit = "1";
      }
  }
  const dt = document.createElement("div");
  dt.className = "densityBadge", dt.setAttribute("aria-live", "polite"), dt.hidden = !0, g.appendChild(dt);
  let kt = 0;
  function ot() {
    if (!I) return;
    const t = u("homeView"), e = (h) => h.offsetParent !== null && !h.closest("[hidden]");
    t.querySelectorAll(":scope .card, :scope .tfAction").forEach((h) => {
      e(h) && (h.dataset.h = Math.round(h.getBoundingClientRect().height) + " px");
    });
    const o = [...t.querySelectorAll(".activityRow, .tfAction, .wxNow")].filter(e), r = window.innerHeight, c = o.filter((h) => {
      const p = h.getBoundingClientRect();
      return p.height > 0 && p.top >= 0 && p.bottom <= r + 0.5;
    }).length;
    dt.hidden = !t.classList.contains("active"), dt.innerHTML = "<b>" + c + "</b><small>of " + o.length + " readings on screen</small>";
  }
  const nt = () => {
    I && requestAnimationFrame(ot);
  };
  function at() {
    var t;
    g.classList.toggle("showDensity", I), (t = u("densityToggle")) == null || t.classList.toggle("on", I), dt.hidden = !I, clearInterval(kt), I && (kt = setInterval(ot, 1e3), ot());
  }
  window.addEventListener("scroll", nt, { capture: !0, passive: !0 }), window.addEventListener("resize", nt, { passive: !0 });
  const E = n.querySelector("#homeView .grid"), Ct = document.createElement("style");
  n.appendChild(Ct);
  const st = new ResizeObserver(() => Zt()), Ot = /* @__PURE__ */ new Set(), it = (t) => {
    const e = t.getBoundingClientRect().height;
    return Math.abs(e - t.offsetHeight) < 1 ? e : t.offsetHeight;
  };
  function Zt() {
    const t = g.classList.contains("tfAreaOpen") && !g.classList.contains("tfWeatherOpen");
    if (E.classList.toggle("tfStack", t), Ot.forEach((w) => {
      (!t || !w.isConnected) && (st.unobserve(w), Ot.delete(w));
    }), !t) {
      Ct.textContent = "";
      return;
    }
    const e = getComputedStyle(E), o = parseFloat(e.columnGap) || 0, r = e.gridTemplateColumns.split(" ").length, c = [...E.children].filter((w) => w.dataset.k && w.offsetParent);
    Ct.disabled = !0;
    const h = c.map((w) => {
      const _ = getComputedStyle(w), P = /span (\d+)/.exec(_.gridColumnStart + " " + _.gridColumnEnd);
      return Math.min(r, P ? +P[1] : _.gridColumnEnd === "-1" ? r : 1);
    });
    Ct.disabled = !1;
    let p = 0;
    const v = c.map((w, _) => {
      Ot.has(w) || (Ot.add(w), st.observe(w));
      const P = h[_];
      p + P > r && (p = 0);
      const T = p + 1;
      return p = (p + P) % r, '#homeView .grid.tfStack>[data-k="' + CSS.escape(w.dataset.k) + '"]{grid-column:' + T + " / span " + P + ";grid-row-end:span " + Math.max(1, Math.ceil(it(w) + o)) + "}";
    }).join(`
`);
    Ct.textContent !== v && (Ct.textContent = v);
  }
  new MutationObserver(Zt).observe(E, { childList: !0 }), new MutationObserver(Zt).observe(g, { attributes: !0, attributeFilter: ["class"] });
  let L = null, R = null, q = null, D = null;
  const lt = /* @__PURE__ */ new Map(), ut = /* @__PURE__ */ new Map(), gt = /* @__PURE__ */ new Map(), St = 6;
  let Lt = null;
  const $t = /* @__PURE__ */ new Map(), ae = /* @__PURE__ */ new Map(), Fa = /* @__PURE__ */ new Map();
  let qt = { favourites: null }, eo = {}, Nn = {}, ao = [], Qe = null;
  const Xt = (() => {
    try {
      return JSON.parse(Mi.get(Kp)) || {};
    } catch {
      return {};
    }
  })();
  let ce = /* @__PURE__ */ new Map(), Ga = 0;
  function Yn() {
    clearTimeout(Ga), Ga = setTimeout(() => Promise.resolve(W({ type: "frontend/set_user_data", key: Zp, value: qt })).catch(() => {
    }), 400);
  }
  const Ut = (() => {
    let t = {};
    try {
      t = JSON.parse(Mi.get($p)) || {};
    } catch {
    }
    const e = (o, r) => Object.fromEntries(Object.entries(o || {}).filter(([, c]) => r.includes(c)));
    return {
      more: t.more === "sheet" ? "sheet" : "popup",
      names: t.namesPicked && ["auto", "cut", "wrap", "scroll"].includes(t.names) ? t.names : "scroll",
      namesPicked: !!t.namesPicked,
      hoursWindow: ["day", "waking", "all"].includes(t.hoursWindow) ? t.hoursWindow : "day",
      wxStyle: ["bitmap", "onebit", "smooth", "line"].includes(t.wxStyle) ? t.wxStyle : "bitmap",
      lights: t.lights === "dac" ? "dac" : "tile",
      dacPad: t.dacPad === "colour" ? "colour" : "temperature",
      lightStyles: e(t.lightStyles, ["tile", "dac"]),
      lightPads: e(t.lightPads, ["temperature", "colour"])
    };
  })(), ue = () => Mi.set($p, JSON.stringify(Ut)), Me = () => {
    g.dataset.more = Ut.more, g.dataset.names = Ut.names, el();
  };
  k && V && !u("moreInfoChoice") && (u("densityToggle").closest(".toggleRow").insertAdjacentHTML(
    "afterend",
    '<div class="toggleRow"><div><strong>More info</strong><div class="status">How a device opens on the house page.</div></div><div class="themeChoice" id="moreInfoChoice" role="group" aria-label="More info">' + _m.map(([t, e]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (Ut.more === t) + '" data-more-style="' + t + '">' + e + "</button>").join("") + "</div></div>"
  ), u("moreInfoChoice").addEventListener("click", (t) => {
    const e = t.target.closest("[data-more-style]");
    e && (Ut.more = e.dataset.moreStyle, ue(), Me(), u("moreInfoChoice").querySelectorAll("[data-more-style]").forEach((o) => o.setAttribute("aria-pressed", String(o === e))));
  }), u("moreInfoChoice").closest(".toggleRow").insertAdjacentHTML(
    "afterend",
    '<div class="toggleRow"><div><strong>Long names</strong><div class="status">How a name or state too long for its space shows.</div></div><div class="themeChoice" id="namesChoice" role="group" aria-label="Long names">' + Dm.map(([t, e]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (Ut.names === t) + '" data-names-style="' + t + '">' + e + "</button>").join("") + "</div></div>"
  ), u("namesChoice").addEventListener("click", (t) => {
    const e = t.target.closest("[data-names-style]");
    e && (Ut.names = e.dataset.namesStyle, Ut.namesPicked = !0, ue(), Me(), u("namesChoice").querySelectorAll("[data-names-style]").forEach((o) => o.setAttribute("aria-pressed", String(o === e))));
  }), u("namesChoice").closest(".toggleRow").insertAdjacentHTML(
    "afterend",
    '<div class="toggleRow"><div><strong>Next hours</strong><div class="status">The hours each day shows on the Weather page.</div></div><div class="themeChoice" id="hoursChoice" role="group" aria-label="Next hours">' + Bm.map(([t, e]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (Ut.hoursWindow === t) + '" data-hours-window="' + t + '">' + e + "</button>").join("") + "</div></div>"
  ), u("hoursChoice").addEventListener("click", (t) => {
    const e = t.target.closest("[data-hours-window]");
    e && (Ut.hoursWindow = e.dataset.hoursWindow, ue(), ze == null || ze.refresh(), u("hoursChoice").querySelectorAll("[data-hours-window]").forEach((o) => o.setAttribute("aria-pressed", String(o === e))));
  }), u("hoursChoice").closest(".toggleRow").insertAdjacentHTML(
    "afterend",
    '<div class="toggleRow"><div><strong>Weather art</strong><div class="status">How the weather and the sky are drawn.</div></div><div class="themeChoice" id="wxStyleChoice" role="group" aria-label="Weather art">' + Rm.map(([t, e]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (Ut.wxStyle === t) + '" data-wx-style="' + t + '">' + e + "</button>").join("") + "</div></div>"
  ), u("wxStyleChoice").addEventListener("click", (t) => {
    const e = t.target.closest("[data-wx-style]");
    e && (Ut.wxStyle = e.dataset.wxStyle, ue(), ze == null || ze.setStyle(Ut.wxStyle), pa == null || pa.forEach((o) => o.setStyle(Ut.wxStyle)), u("wxStyleChoice").querySelectorAll("[data-wx-style]").forEach((o) => o.setAttribute("aria-pressed", String(o === e))));
  })), X();
  let fe = { rooms: [], vacuums: [], homeVacuums: [], grid: null, security: { alarms: [], locks: [], openings: [] } };
  const ln = /* @__PURE__ */ new Map();
  let Wr = "";
  const wn = k ? bf({ onChange: () => sa() }) : null;
  k && g.classList.add("house");
  const me = Object.assign(document.createElement("div"), { className: "tfBento" });
  let ze = null, Vr = null, Co = !1;
  function jr(t) {
    const e = Le();
    if (g.classList.toggle("houseBento", !!e), ze && (Vr !== e || t == null) && (ze.destroy(), ze = null), !e || t == null) {
      me.remove();
      return;
    }
    me.isConnected || E.append(me), me.style.order = t, !ze && !Co && (ze = Rp(me, { getHass: i, entityId: e, style: Ut.wxStyle, hoursWindow: () => Ut.hoursWindow }), Vr = e);
  }
  const Ye = [
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
  ], no = Ye.map(([t]) => t), ne = ["aq", "pollen", "radar", "hourly", "sun", "moon", "uv", "humidity", "pressure", "wind", "visibility"], fl = { hourly: 2 }, Hn = Object.fromEntries(Ye.map(([t]) => [t, Object.assign(document.createElement("div"), { className: "tfDashBento tfDash-" + t })]));
  let pa = null, Kt = null;
  function se(t) {
    const e = Le();
    pa && Kt !== e && (pa.forEach((o) => o.destroy()), pa = null), Object.values(Hn).forEach((o) => e ? !o.isConnected && E.append(o) : o.remove()), e && !pa && !Co && (pa = /* @__PURE__ */ new Map(), Kt = e), ua();
  }
  function ua() {
    if (!pa || Co) return;
    const t = new Set(ye().hidden);
    Ye.forEach(([e, o]) => {
      pa.has(e) || t.has(e) && !(Ae != null && Ae.fromTray && Ae.key === e) || pa.set(e, Rp(Hn[e], { getHass: i, entityId: Kt, style: Ut.wxStyle, cards: o, onOpen: e === "wx" ? () => Tn("weather") : void 0 }));
    });
  }
  const ve = (t) => {
    var e;
    return ((e = M[t]) == null ? void 0 : e.attributes) || {};
  }, Pt = (t) => ve(t).friendly_name || t, Ce = (t, e) => ki(t) || (Number(ve(t).supported_features) & e) === e, Te = (t) => {
    const e = String(t ?? "").replace(/_/g, " ");
    return e.charAt(0).toUpperCase() + e.slice(1);
  }, Re = (t, e = 1) => Number(t).toLocaleString(void 0, { minimumFractionDigits: e, maximumFractionDigits: e }), xn = (t) => (t == null ? void 0 : t.state) === "on" ? t.attributes.brightness != null ? Math.max(1, Math.round(t.attributes.brightness / 2.55)) : 100 : 0, zr = (t) => ve(t).supported_color_modes || [], or = (t, e) => [5, 3, 1].map((o) => {
    const r = (o + t / 60) % 6;
    return 255 * (1 - e / 100 * Math.max(0, Math.min(r, 4 - r, 1)));
  }), Ca = (t) => (t /= 255, t <= 0.03928 ? t / 12.92 : Math.pow((t + 0.055) / 1.055, 2.4)), oo = (t) => 0.2126 * Ca(t[0]) + 0.7152 * Ca(t[1]) + 0.0722 * Ca(t[2]), ir = (t, e) => {
    const o = oo(t), r = oo(e);
    return (Math.max(o, r) + 0.05) / (Math.min(o, r) + 0.05);
  }, Gr = 0.55, io = ["hs", "xy", "rgb", "rgbw", "rgbww"], Es = (t) => {
    const e = ve(t), o = io.includes(e.color_mode);
    return (o && e.rgb_color ? e.rgb_color : o && e.hs_color ? or(...e.hs_color) : [255, 170, 0]).map((r) => Math.round(Math.max(0, Math.min(255, r))));
  }, Ti = { heat: [255, 111, 34], cool: [33, 150, 243], heat_cool: [255, 193, 7], auto: [76, 175, 80], dry: [255, 152, 0], fan_only: [0, 188, 212] };
  function ro(t) {
    var r;
    const e = t.split(".")[0], o = (r = M[t]) == null ? void 0 : r.state;
    return !o || o === "unavailable" || o === "unknown" ? null : e === "light" ? o === "on" ? Es(t) : null : e === "climate" ? Ti[o] || null : e === "cover" ? o !== "closed" ? [146, 107, 199] : null : e === "lock" ? o !== "locked" ? [244, 67, 54] : null : e === "media_player" ? ["playing", "paused", "on", "buffering"].includes(o) ? [3, 169, 244] : null : e === "humidifier" || e === "valve" ? ["on", "open", "opening", "closing"].includes(o) ? [33, 150, 243] : null : e === "vacuum" ? ["cleaning", "returning"].includes(o) ? [0, 150, 136] : null : e === "alarm_control_panel" ? o !== "disarmed" && o !== "triggered" ? [76, 175, 80] : null : e === "fan" ? o === "on" ? [0, 188, 212] : null : (e === "switch" || e === "input_boolean") && o === "on" ? [255, 193, 7] : null;
  }
  function Li(t, e, o = !1) {
    const [r, c, h] = t.map((rt) => rt / 255), p = Math.max(r, c, h), v = Math.min(r, c, h), w = p - v, _ = w ? (p === r ? (c - h) / w + (c < h ? 6 : 0) : p === c ? (h - r) / w + 2 : (r - c) / w + 4) * 60 : 0, P = (p + v) / 2, T = w ? w / (1 - Math.abs(2 * P - 1)) : 0, N = w < 0.1 ? Math.min(T, 0.25) : 1, tt = (rt) => {
      const $ = (j) => (j + _ / 30) % 12, ct = N * Math.min(rt, 1 - rt);
      return [0, 8, 4].map((j) => Math.round(255 * (rt - ct * Math.max(-1, Math.min($(j) - 3, 9 - $(j), 1)))));
    };
    for (let rt = 0.5; o ? rt < 0.96 : rt > 0.04; rt += o ? 0.01 : -0.01) {
      const $ = tt(rt);
      if (ir($, e) >= 3) return "rgb(" + $.join(",") + ")";
    }
    return o ? "#ffffff" : "#26221e";
  }
  const Ai = (t) => {
    const e = [1, 3, 5].map((o) => parseInt(t.slice(o, o + 2), 16));
    return Math.max(...e) - Math.min(...e) < 26 ? "" : ";--sum-d:" + Li(e, [58, 58, 58], !0) + ";--sum-l:" + Li(e, [230, 230, 230]);
  }, rr = { d: ["#ffb894", "#d2b4ff", "#9dcbff"], l: ["#f0946a", "#b48ae6", "#6fa8e8"] }, hl = () => [0, 1, 2].map((t) => "--g" + t + "-d:" + rr.d[t] + ";--g" + t + "-l:" + rr.l[t]).join(";"), qe = '<svg class="tfGradDefs" aria-hidden="true" focusable="false"><defs><linearGradient id="hcClimateGrad" x1="0" y1="0" x2="0" y2="1">' + [0.15, 0.5, 0.85].map((t, e) => '<stop offset="' + t + '" style="stop-color:var(--g' + e + ')"/>').join("") + "</linearGradient></defs></svg>", yn = (t) => {
    const e = t.map((o) => Math.round(o + (255 - o) * Gr));
    return "--light-soft:rgb(" + e.join(",") + ");--light-ink:" + Li(t, e);
  }, To = (t) => yn(Es(t)), ei = (t) => {
    const e = ro(t);
    return e ? ' data-light style="' + yn(e) + '"' : "";
  }, Pa = (t) => {
    const e = zr(t);
    return e.length ? e.some((o) => o !== "onoff") : ve(t).brightness != null;
  }, fa = (t) => [ve(t).min_color_temp_kelvin || 2e3, ve(t).max_color_temp_kelvin || 6500], ia = (t) => new Date(t).toLocaleTimeString(void 0, { hour: "2-digit", minute: "2-digit" });
  function _s(t) {
    const e = Math.max(1, Math.round((Date.now() - t) / 1e3));
    if (e < 10) return "Just now";
    if (e < 60) return e + " seconds ago";
    const o = Math.round(e / 60);
    if (o < 60) return o + (o === 1 ? " minute ago" : " minutes ago");
    const r = Math.round(o / 60);
    if (r < 24) return r + (r === 1 ? " hour ago" : " hours ago");
    const c = Math.round(r / 24);
    return c + (c === 1 ? " day ago" : " days ago");
  }
  const In = (t) => {
    var e;
    return ve(t).current_position ?? (((e = M[t]) == null ? void 0 : e.state) === "closed" ? 0 : 100);
  }, ai = (t) => {
    var e;
    return $a("pos", t, ((e = $t.get(t)) == null ? void 0 : e.pos) ?? In(t));
  }, Lo = (t) => {
    var e;
    return $a("tilt", t, ((e = $t.get(t)) == null ? void 0 : e.tilt) ?? ve(t).current_tilt_position);
  };
  function We(t) {
    var p;
    const e = M[t];
    if (!e) return "Not found";
    if (e.state === "unavailable") return "Unavailable";
    const o = e.attributes, r = t.split(".")[0];
    if (r === "light") {
      if (e.state !== "on") return "Off";
      const v = o.color_temp_kelvin;
      return (Pa(t) ? xn(e) + "%" : "On") + (o.color_mode === "color_temp" && v ? " · " + Number(v).toLocaleString() + "k" : io.includes(o.color_mode) ? " · Colour" : "");
    }
    if (r === "climate") return (e.state === "off" ? "Off" : Te(o.hvac_action || e.state)) + " · " + Re(o.current_temperature) + " °C now";
    if (r === "cover") {
      const v = In(t), w = o.current_tilt_position;
      return e.state === "opening" || e.state === "closing" ? Te(e.state) + " - " + v + "%" : (v <= 0 ? "Closed" : v >= 100 ? "Open" : "Partially open") + (w > 0 && w < 100 ? " · tilted" : "");
    }
    if (r === "humidifier") return e.state !== "on" ? "Off" : Te(o.action || "on") + " · " + o.current_humidity + "% now";
    if (r === "vacuum") return Te(e.state) + (e.state === "cleaning" && ((p = o.rooms) != null && p.length) ? " · " + o.rooms.join(", ") : "") + (o.battery_level != null ? " · " + o.battery_level + "%" : "");
    if (r === "media_player") return e.state === "playing" || e.state === "paused" ? (e.state === "paused" ? "Paused · " : "") + (o.media_title || "Playing") : Te(e.state);
    if (r === "alarm_control_panel") return eu[e.state] || Te(e.state);
    if (r === "lock" || r === "valve") return Te(e.state);
    if (r === "switch") return e.state === "on" ? "On" : "Off";
    if (r === "plant") return e.state === "ok" ? "Healthy" : Te(o.problem);
    if (r === "binary_sensor")
      return o.device_class === "battery" ? e.state === "on" ? "Low" : "Normal" : o.device_class === "problem" ? e.state === "on" ? "Problem" : "OK" : o.device_class === "moisture" ? e.state === "on" ? "Wet" : "Dry" : $d.includes(o.device_class) ? e.state === "on" ? "Open" : "Closed" : e.state === "on" ? "Detected" : "Clear";
    if (o.rang) return "Rang at " + ia(o.rang);
    const c = i();
    if (c != null && c.formatEntityState && !ki(t))
      try {
        return c.formatEntityState(e);
      } catch {
      }
    const h = Number(e.state);
    if (e.state !== "" && Number.isFinite(h)) {
      const v = Math.abs(h) >= 100 ? 0 : Math.abs(h) >= 10 ? 1 : 2, w = o.unit_of_measurement ? o.unit_of_measurement === "%" ? "%" : " " + o.unit_of_measurement : "";
      return h.toLocaleString(void 0, { maximumFractionDigits: v }) + w + (o.plant_low ? " · Low" : o.plant_high ? " · High" : "");
    }
    return Te(e.state);
  }
  const ni = (t) => t >= 1e3 ? Re(t / 1e3, 2) + " kW" : Math.round(t).toLocaleString() + " W";
  function Zn(t) {
    var o, r;
    const e = i();
    t.querySelectorAll("[data-icon-for]").forEach((c) => {
      var v;
      const h = M[c.dataset.iconFor], p = c.dataset.iconName || "";
      if (customElements.get("ha-state-icon") && h && !p) {
        let w = c.firstElementChild;
        (!w || w.localName !== "ha-state-icon") && (c.textContent = "", w = document.createElement("ha-state-icon"), c.appendChild(w)), w.hass = e, w.stateObj = h;
      } else if (customElements.get("ha-icon")) {
        let w = c.firstElementChild;
        (!w || w.localName !== "ha-icon") && (c.textContent = "", w = document.createElement("ha-icon"), c.appendChild(w)), w.icon = p || ((v = h == null ? void 0 : h.attributes) == null ? void 0 : v.icon) || "mdi:circle-medium";
      } else c.textContent || (c.textContent = (c.dataset.letter || Pt(c.dataset.iconFor) || "?").trim().charAt(0).toUpperCase());
    }), (o = t.querySelectorAll) == null || o.call(t, ".tfIcon").forEach(Ei), (r = t.classList) != null && r.contains("tfIcon") && Ei(t), lr();
  }
  const sr = /* @__PURE__ */ new Map();
  function Ei(t) {
    var h, p, v;
    const e = (((h = t.closest("[data-k]")) == null ? void 0 : h.dataset.k) || "") + "|" + (t.dataset.iconFor || ((p = t.querySelector("[data-icon-for]")) == null ? void 0 : p.dataset.iconFor) || t.getAttribute("aria-label") || ""), o = getComputedStyle(t), r = { backgroundColor: o.backgroundColor, color: o.color }, c = sr.get(e);
    sr.set(e, r), !(!c || c.backgroundColor === r.backgroundColor && c.color === r.color || (v = window.matchMedia) != null && v.call(window, "(prefers-reduced-motion: reduce)").matches) && t.animate([c, r], { duration: ba.warp.cdur, delay: ba.warp.cdelay, easing: ea[ba.warp.ease], fill: "backwards" });
  }
  const _i = "[data-icon-for]>:is(ha-state-icon,ha-icon),.tfIcon>svg", Ds = (t) => {
    const e = [t];
    for (; e.length; ) {
      const o = e.shift();
      if (o.localName === "svg") return o;
      o.shadowRoot && e.push(...o.shadowRoot.children), e.push(...o.children);
    }
    return null;
  };
  function Bs(t) {
    var tt, rt, $;
    const e = t.localName === "svg" ? t : Ds(t), o = e ? [...e.querySelectorAll("path,rect,circle,ellipse,polygon,polyline,line")] : [];
    if (!o.length) return !e;
    const r = (tt = t.closest(".tfIcon")) == null ? void 0 : tt.offsetWidth;
    if (r === void 0) return !0;
    if (!r) return !1;
    const c = r + "|" + o.map((ct) => ct.getAttribute("d") || ct.localName).join("|");
    if (t.dataset.fitted === c) return !0;
    let h = 1 / 0, p = 1 / 0, v = -1 / 0, w = -1 / 0;
    for (const ct of o) {
      const j = ct.getBBox(), yt = getComputedStyle(ct), Z = yt.stroke !== "none" ? (parseFloat(yt.strokeWidth) || 0) / 2 : 0;
      !j.width && !j.height || (h = Math.min(h, j.x - Z), p = Math.min(p, j.y - Z), v = Math.max(v, j.x + j.width + Z), w = Math.max(w, j.y + j.height + Z));
    }
    if (!(v > h)) return !1;
    const _ = ($ = (rt = e.viewBox) == null ? void 0 : rt.baseVal) != null && $.width ? e.viewBox.baseVal : { x: 0, y: 0, width: 24, height: 24 }, P = r > 40 ? r * (26 / 40) : r - 14, T = P * _.width / Math.max(v - h, w - p), N = T / _.width;
    return t.localName === "svg" ? (t.style.width = T + "px", t.style.height = T + "px") : t.style.setProperty("--mdc-icon-size", T + "px"), e.style.translate = ((_.x + _.width / 2 - (h + v) / 2) * N).toFixed(2) + "px " + ((_.y + _.height / 2 - (p + w) / 2) * N).toFixed(2) + "px", t.dataset.fitted = c, !0;
  }
  let Ao = 0;
  function Eo(t = 0) {
    clearTimeout(Ao), [...n.querySelectorAll(_i)].filter((o) => !Bs(o)).length && t < 5 && (Ao = setTimeout(() => Eo(t + 1), 300));
  }
  function lr() {
    clearTimeout(Ao), Ao = setTimeout(() => Eo(), 60);
  }
  const oi = (t) => {
    var e, o, r;
    return t.startsWith("light.") && M[t] && !ve(t).icon && !((r = (o = (e = i()) == null ? void 0 : e.entities) == null ? void 0 : o[t]) != null && r.icon) ? "mdi:lightbulb" : "";
  }, aa = (t, e, o) => (e = e || oi(t), ' data-icon-for="' + J(t) + '"' + (e ? ' data-icon-name="' + J(e) + '"' : "") + (o ? ' data-letter="' + J(o) + '"' : "")), dn = (t) => t.endsWith("_solar_power") ? "mdi:solar-power-variant" : ve(t).rang ? "mdi:doorbell" : "", Se = (t, e, o, r) => J([t, e, o, r ? JSON.stringify(r) : ""].join("|")), Di = (t) => J(JSON.stringify(t));
  function _o(t, e) {
    var c, h;
    const o = J(Pt(e) + ", " + We(e));
    return '<div class="activityRow' + (Number.isFinite(Number((c = M[e]) == null ? void 0 : c.state)) && ((h = M[e]) == null ? void 0 : h.state) !== "" ? ' tap" role="button" tabindex="0" data-open="' + J(t + "|" + e) + '" aria-label="' + o + '. Show the last 24 hours"' : '" aria-label="' + o + '"') + '><div class="tfIcon" aria-hidden="true"' + aa(e, dn(e)) + '></div><div><div class="activityRowName">' + J(Pt(e)) + '</div><div class="activityRowMeta">' + J(We(e)) + "</div></div></div>";
  }
  const Bi = (t, e, o) => '<div class="activityRow" aria-label="' + J(t + ", " + e) + '"><div class="tfIcon" aria-hidden="true"' + aa("", o, t) + '></div><div><div class="activityRowName">' + J(t) + '</div><div class="activityRowMeta">' + J(e) + "</div></div></div>", Ua = (t) => {
    var e;
    return ((e = ut.get(t)) == null ? void 0 : e.name) ?? Pt(t);
  }, Do = (t) => {
    var e;
    return ((e = ut.get(t)) == null ? void 0 : e.text) ?? We(t);
  };
  function Ur(t) {
    var o;
    const e = (o = ut.get(t)) == null ? void 0 : o.icon;
    return '<div class="tfOpen"><div class="tfOpenHead"><div class="tfIcon" aria-hidden="true"' + (e ? aa("", e, Ua(t)) : aa(t, dn(t))) + '></div><div><div class="activityRowName">' + J(Ua(t)) + '</div><div class="activityRowMeta">' + J(Do(t)) + '</div></div><button class="tfBack" type="button" data-close aria-label="Close ' + J(Ua(t)) + '’s last 24 hours">' + Nc + '</button></div><svg class="tfGraph" data-graph="' + J(t) + '" role="img" aria-label="' + J(Ua(t)) + ', last 24 hours"></svg></div>';
  }
  function kn(t, e, o, r, c = "", h = null, p = "") {
    const v = L && L.key === t;
    return '<section class="card tfCard' + (p ? " " + p : "") + (v ? " open" : "") + '" data-tf data-k="' + J(t) + '" style="order:' + e + (v && L.h ? ";min-height:" + L.h + "px" : "") + '" aria-label="' + J(o) + '"><div class="activityHeader">' + (h ? '<button class="activityTitle tfTitleBtn" type="button" data-more="' + J(h) + '" aria-label="' + J(o + (M[h] ? ", " + We(h) : "") + ". More info") + '">' + J(o) + "</button>" : '<div class="activityTitle">' + J(o) + "</div>") + "</div>" + (v ? Ur(L.id) : '<div class="activityRows">' + r.join("") + "</div>" + c) + "</section>";
  }
  function so(t, e) {
    const o = "readings:" + t.id, r = t.readings.map((c) => _o(o, c));
    return t.power != null && r.push(Bi("Power now", ni(t.power), "mdi:flash")), kn(o, e, "Readings", r);
  }
  function Ge(t, e) {
    var v;
    const o = "energy:" + t.id, [r, c] = [t.solar.find((w) => w.endsWith("_power")), t.solar.find((w) => w.endsWith("_today"))], h = [r, c].filter(Boolean).map((w) => _o(o, w)), p = Number(((v = M[r]) == null ? void 0 : v.state) || 0) * 1e3;
    return fe.grid && (h.push(_o(o, fe.grid)), h.push(Bi("House use", ni(p + Number(M[fe.grid].state)), "mdi:home-lightning-bolt"))), kn(o, e, "Energy", h, '<div class="tfCardGraph"><svg class="tfGraph" data-solar role="img" aria-label="Solar, last 24 hours"></svg></div>');
  }
  const Fn = (t, e) => kn("plant:" + t.id, e, Pt(t.id), t.readings.map((o) => _o("plant:" + t.id, o)), "", t.id);
  function wa(t, e, o, r, c, h, p = null) {
    const v = o == null ? null : Math.max(0, Math.min(1, o)), w = v == null ? 0 : Math.round(v * 100);
    return '<div class="tfBar ' + t + '" role="slider" tabindex="0" aria-label="' + J(r) + '" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + w + '"' + (c ? ' aria-valuetext="' + J(c) + '"' : "") + ' data-drag="' + J(t + "|" + e) + '">' + (p != null ? '<span class="was" aria-hidden="true" style="left:' + p + '%"></span>' : "") + (h ? v == null ? "" : '<b style="left:' + w + '%"></b>' : '<i style="width:' + w + '%"></i>') + "</div>";
  }
  const Ri = "move-assistant-house-last-bright", Bo = (() => {
    try {
      return JSON.parse(Mi.get(Ri)) || {};
    } catch {
      return {};
    }
  })();
  let Yr = 0;
  const xa = (t, e) => {
    !e || Bo[t] === e || (Bo[t] = e, clearTimeout(Yr), Yr = setTimeout(() => Mi.set(Ri, JSON.stringify(Bo)), 500));
  }, Ro = (t, e, o, r) => '<div class="tfStep" role="group" aria-label="' + J(t) + '"><button type="button" data-act="' + o + '" aria-label="Lower ' + J(t.toLowerCase()) + '">' + qp.down + "</button><output>" + J(e) + '</output><button type="button" data-act="' + r + '" aria-label="Raise ' + J(t.toLowerCase()) + '">' + qp.up + "</button></div>", Kn = (t, e, o) => '<div class="' + t + '" role="group" aria-label="' + J(e) + '">' + o.filter(Boolean).map((r) => '<button type="button" data-act="' + r.act + '"' + (r.pressed != null ? ' aria-pressed="' + r.pressed + '"' : "") + (r.disabled ? " disabled" : "") + (r.aria ? ' aria-label="' + J(r.aria) + '"' : "") + ">" + (r.html || J(r.label)) + "</button>").join("") + "</div>", ii = (t, e) => "width:" + Math.round(Math.max(0, Math.min(1, (t - e * 25) / 25)) * 1e3) / 10 + "%;opacity:" + (0.6 + 0.4 * e / 3).toFixed(2), Po = (t) => "left:calc(4px + " + t / 100 + " * (100% - 8px))", dr = (t, e) => '<div class="tfBlocks" role="slider" tabindex="0" aria-label="' + J(Pt(t)) + ' position" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + Math.round(e) + '" aria-valuetext="' + Math.round(e) + '% open" data-blocks="' + J(t) + '">' + [0, 1, 2, 3].map((o) => '<span><i style="' + ii(e, o) + '"></i><b' + (e >= (o + 1) * 25 - 12 ? ' class="lit"' : "") + ">" + (o + 1) * 25 + "<small>%</small></b></span>").join("") + '<output class="tfTip" aria-hidden="true" style="' + Po(e) + '">' + Math.round(e) + "%</output></div>";
  function ml(t, e) {
    t.querySelectorAll(":scope>span").forEach((r, c) => {
      r.firstElementChild.setAttribute("style", ii(e, c)), r.lastElementChild.classList.toggle("lit", e >= (c + 1) * 25 - 12);
    });
    const o = t.querySelector(".tfTip");
    o.setAttribute("style", Po(e)), o.textContent = Math.round(e) + "%", t.setAttribute("aria-valuenow", String(Math.round(e))), t.setAttribute("aria-valuetext", Math.round(e) + "% open");
  }
  const cr = (t, e) => '<div class="tfTilt" role="slider" tabindex="0" aria-label="' + J(Pt(t)) + ' tilt" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + Math.round(e) + '" aria-valuetext="' + Math.round(e) + '% open" data-drag="tilt|' + J(t) + '"><i style="width:calc((100% - 8px) * ' + e / 100 + ')"></i><span' + (e > 8 ? ' class="lit"' : "") + ">Shut</span><span" + (e > 92 ? ' class="lit"' : "") + ">Open</span></div>", Zr = (t, e, o) => '<div class="tfSeg tfCoverBtns" role="group" aria-label="' + J(Pt(t)) + '">' + [
    Ce(t, Sm) && ["open", "Open", "open_cover", e >= 100 && !o],
    Ce(t, Tm) && ["stop", "Stop", "stop_cover", !1],
    Ce(t, Cm) && ["close", "Close", "close_cover", e <= 0 && !o]
  ].filter(Boolean).map(([r, c, h, p]) => '<button type="button" data-act="' + Se("cover", h, t) + '" aria-label="' + c + '"' + (p ? " disabled" : "") + ">" + Lm[r] + "</button>").join("") + "</div>", lo = (t, e) => '<button class="tfIcon' + (e.art ? " art" : "") + '" type="button" data-act="' + e.button.act + '" aria-label="' + J(e.button.label) + '"' + (e.art ? ' style="background-image:url(&quot;' + J(e.art) + '&quot;)"' : aa(t, e.icon)) + "></button>", Rs = (t) => '<button class="tfName" type="button" data-more="' + J(t) + '" aria-label="' + J(Pt(t) + ", " + We(t) + ". More info") + '"><span class="activityRowName">' + J(Pt(t)) + '</span><span class="activityRowMeta">' + J(We(t)) + "</span></button>";
  function Pi(t, e = !1, o = null) {
    const r = Ho(t), c = t.startsWith("light.") && cn(t) && !(o && Oa(t) < 3), h = o || (e && t.startsWith("light.") ? ["bright"] : null), p = c ? ['<div class="tfDacPad" data-dac="' + (e ? "more:" : o ? "dash:" : "tile:") + J(t) + '"></div>'] : r.sections.map((v, w) => v && (!h || h.includes((r.parts || [])[w])) ? v : "").filter(Boolean);
    return '<div class="tfAction' + (c ? " tfDac" : "") + (r.on ? " on" : "") + (!c && !p.length ? " tfHeadOnly" : "") + '" data-k="' + J(t) + '"' + (r.tone ? ' data-tone="' + r.tone + '"' : "") + ei(t) + '><div class="tfActionHead">' + lo(t, r) + Rs(t) + "</div>" + p.join("") + "</div>";
  }
  const ha = "dual-controller-v3", Kr = "https://cdn.jsdelivr.net/gh/mbb365/Dual-Axis-Controller-v4@v9.0.5/dist/dual-axis-controller-v4.js";
  let No = null;
  async function ri() {
    if (No || customElements.get(ha)) return;
    No = "loading";
    const t = await Promise.resolve().then(() => W({ type: "lovelace/resources" })).catch(() => null), e = Array.isArray(t) && t.some((r) => /dual-axis-controller/i.test(r.url || ""));
    if (await Promise.race([customElements.whenDefined(ha), new Promise((r) => setTimeout(r, e ? 8e3 : 0))]), customElements.get(ha)) return;
    const o = Object.assign(document.createElement("script"), { src: Kr });
    o.onerror = () => {
      No = "failed", G();
    }, document.head.appendChild(o);
  }
  const Ya = /* @__PURE__ */ new Map(), Ni = (t) => (Ut.lightStyles[t] || Ut.lights) === "dac", Hi = () => Ut.lights === "dac" || Object.values(Ut.lightStyles).includes("dac");
  function cn(t) {
    return Ni(t) && !!customElements.get(ha);
  }
  const Be = (t) => Ut.lightPads[t] || Ut.dacPad, Ii = () => {
    const t = i();
    return t && {
      ...t,
      themes: { ...t.themes || {}, darkMode: !g.classList.contains("light") },
      callService: (e, o, r, ...c) => t.callService(e, ...Ma(e, o, r), ...c)
    };
  }, Ps = "ha-card,.hc.hcTile{padding:0!important;border:0!important;border-radius:0!important;background:none!important;box-shadow:none!important}.hcTileHead{display:none!important}.hc--dark{--hc-text:var(--color-text-primary,#f1f1f1)}.halo.is-size-tile .halo__pad-shell{height:var(--tf-dac-pad,198px)!important;transition:height .25s cubic-bezier(.2,.7,.3,1)}", $r = (t) => {
    !t.shadowRoot || t.shadowRoot.querySelector("style[data-tf]") || (t.shadowRoot.appendChild(Object.assign(document.createElement("style"), { textContent: Ps })).dataset.tf = "");
  }, Za = /* @__PURE__ */ new Map(), Ka = new ResizeObserver((t) => t.forEach(({ target: e }) => {
    const o = e.parentElement;
    !o || !e.offsetHeight || (o.style.removeProperty("min-height"), Za.set(o.dataset.dac, o.offsetHeight));
  }));
  function Ve(t) {
    t.querySelectorAll("[data-dac]").forEach((e) => {
      const o = e.dataset.dac;
      let r = Ya.get(o);
      if (!r) {
        const c = o.slice(o.indexOf(":") + 1);
        r = document.createElement(ha), r.setConfig({ type: "custom:" + ha, entity: c, pad: Be(c), tap_action: { action: "none" } }), Ya.set(o, r);
      }
      r.hass = Ii(), r.parentNode !== e && e.replaceChildren(r), !r.offsetHeight && Za.has(o) && (e.style.minHeight = Za.get(o) + "px"), Ka.observe(r), $r(r);
    });
  }
  function co() {
    const t = Ii();
    Ya.forEach((e, o) => {
      e.isConnected ? e.hass = t : Ya.delete(o);
    });
  }
  customElements.whenDefined(ha).then(() => {
    k && (E != null && E.querySelector("[data-tf]")) && Rr(_a);
  });
  const $a = (t, e, o) => gt.has(t + "|" + e) ? gt.get(t + "|" + e) : o;
  function Ho(t) {
    var h;
    const e = M[t], o = e.attributes, r = t.split(".")[0], c = (p, v) => ({ act: Se(p, "toggle", t), label: v });
    if (r === "light") {
      const p = e.state === "on", v = zr(t), [w, _] = fa(t), P = $a("bright", t, xn(e));
      p && xa(t, xn(e));
      const T = $a("ct", t, p && o.color_mode === "color_temp" ? o.color_temp_kelvin : null), N = $a("hue", t, p && io.includes(o.color_mode) && o.hs_color ? o.hs_color[0] : null);
      return { on: p, button: c("light", "Turn " + Pt(t) + (p ? " off" : " on")), parts: ["bright", "ct", "hue"], sections: [
        Pa(t) && wa("bright", t, P / 100, Pt(t) + " brightness", P + "%", !1, p ? null : Bo[t] ?? null),
        v.includes("color_temp") && wa("ct", t, T == null ? null : (T - w) / (_ - w), Pt(t) + " warm to cool", T == null ? "" : Math.round(T) + " kelvin", !0),
        v.some((tt) => io.includes(tt)) && wa("hue", t, N == null ? null : N / 360, Pt(t) + " colour", "", !0)
      ] };
    }
    if (r === "climate") {
      const p = o.target_temp_step || 0.5, v = Number(o.temperature);
      return { on: e.state !== "off", tone: e.state === "cool" || o.hvac_action === "cooling" ? "cool" : "heat", button: c("climate", "Turn " + Pt(t) + (e.state === "off" ? " on" : " off")), parts: ["step", "modes"], sections: [
        Number.isFinite(v) && Ro("Target temperature", Re(v) + " °C", Se("climate", "set_temperature", t, { temperature: v - p }), Se("climate", "set_temperature", t, { temperature: v + p })),
        Kn("tfSeg", "Mode", (o.hvac_modes || []).map((w) => ({ label: Te(w), act: Se("climate", "set_hvac_mode", t, { hvac_mode: w }), pressed: e.state === w })))
      ] };
    }
    if (r === "cover") {
      const p = e.state === "opening" || e.state === "closing", v = e.state === "closed", w = ai(t), _ = Lo(t);
      return { on: !v, tone: "blue", icon: Up[Pc(e)][v ? 1 : 0], button: c("cover", (v ? "Open " : "Close ") + Pt(t)), parts: ["blocks", "tilt", "buttons"], sections: [
        Ce(t, Gp) && dr(t, w),
        _ != null && cr(t, _),
        Zr(t, w, p)
      ] };
    }
    if (r === "humidifier") {
      const p = Number(o.humidity);
      return { on: e.state === "on", tone: "blue", icon: "mdi:air-humidifier", button: c("humidifier", "Turn " + Pt(t) + (e.state === "on" ? " off" : " on")), parts: ["step", "modes"], sections: [
        Number.isFinite(p) && Ro("Target humidity", p + "%", Se("humidifier", "set_humidity", t, { humidity: p - 1 }), Se("humidifier", "set_humidity", t, { humidity: p + 1 })),
        ((h = o.available_modes) == null ? void 0 : h.length) && Kn("tfSeg", "Mode", o.available_modes.map((v) => ({ label: Te(v), act: Se("humidifier", "set_mode", t, { mode: v }), pressed: o.mode === v })))
      ] };
    }
    if (r === "media_player") {
      const p = e.state === "playing", v = e.state === "off" || e.state === "standby", w = $a("vol", t, o.volume_level), _ = v ? { act: Se("media_player", Ce(t, km) ? "turn_on" : "toggle", t), label: "Turn " + Pt(t) + " on" } : e.state === "playing" || e.state === "paused" ? { act: Se("media_player", "media_play_pause", t), label: (p ? "Pause " : "Play ") + Pt(t) } : { act: Se("media_player", Ce(t, Mm) ? "turn_off" : "toggle", t), label: "Turn " + Pt(t) + " off" };
      return { on: !v, tone: "blue", art: !v && o.entity_picture ? o.entity_picture : null, button: _, parts: ["playback", "volume"], sections: v ? [] : [
        (Ce(t, Vp) || Ce(t, jp) || Ce(t, Wp) || Ce(t, zp)) && Kn("tfSeg", "Playback", [
          { html: Ud.prev, aria: "Previous", act: Se("media_player", "media_previous_track", t), disabled: !Ce(t, Vp) },
          { html: p ? Ud.pause : Ud.play, aria: p ? "Pause" : "Play", act: Se("media_player", "media_play_pause", t), disabled: !(Ce(t, Wp) || Ce(t, zp)) },
          { html: Ud.next, aria: "Next", act: Se("media_player", "media_next_track", t), disabled: !Ce(t, jp) }
        ]),
        Ce(t, ym) && w != null && wa("vol", t, w, Pt(t) + " volume", Math.round(w * 100) + "%")
      ] };
    }
    if (r === "vacuum") {
      const p = e.state === "cleaning", v = o.rooms || [], w = (P) => v.includes(P) ? v.filter((T) => T !== P) : v.concat(P), _ = Se("vacuum", p ? "pause" : "start", t, ki(t) ? { rooms: v } : null);
      return { on: p || e.state === "returning", tone: "blue", button: { act: _, label: (p ? "Pause " : "Start ") + Pt(t) }, parts: ["controls", "rooms"], sections: [
        Kn("tfSeg", Pt(t), [
          { label: p ? "Pause" : "Start", act: _ },
          { label: "Dock", act: Se("vacuum", "return_to_base", t), disabled: e.state === "docked" },
          { label: "Locate", act: Se("vacuum", "locate", t) }
        ]),
        ki(t) && Kn("tfChips", "Rooms to clean", fe.rooms.filter((P) => P.id !== "balcony").map((P) => ({ label: P.name, act: Se("vacuum", "set_rooms", t, { rooms: w(P.name) }), pressed: v.includes(P.name) })))
      ] };
    }
    if (r === "lock") {
      const p = e.state === "locked";
      return { on: !p, tone: "heat", button: { act: Se("lock", p ? "unlock" : "lock", t), label: (p ? "Unlock " : "Lock ") + Pt(t) }, parts: ["controls"], sections: [
        Kn("tfSeg", Pt(t), [
          { label: "Lock", act: Se("lock", "lock", t), pressed: p },
          { label: "Unlock", act: Se("lock", "unlock", t), pressed: e.state === "unlocked" },
          Ce(t, Fm) && { label: "Open", act: Se("lock", "open", t), pressed: e.state === "open" }
        ])
      ] };
    }
    if (r === "alarm_control_panel") {
      const p = e.state === "disarmed";
      return { on: !p, tone: e.state === "triggered" ? "alarm" : "blue", button: { act: Se("alarm_control_panel", p ? "alarm_arm_away" : "alarm_disarm", t), label: p ? "Arm " + Pt(t) + ", away" : "Disarm " + Pt(t) }, parts: ["controls"], sections: [
        Kn("tfSeg", Pt(t), Om.filter(([, , , v]) => !v || Ce(t, v)).map(([v, w, _]) => ({ label: w, act: Se("alarm_control_panel", _, t), pressed: e.state === v })))
      ] };
    }
    if (r === "valve") {
      const p = e.state === "open";
      return { on: p, tone: "blue", icon: "mdi:sprinkler-variant", button: c("valve", (p ? "Close " : "Open ") + Pt(t)), parts: ["controls"], sections: [
        Kn("tfSeg", Pt(t), [
          { label: "Open", act: Se("valve", "open_valve", t), pressed: p },
          { label: "Close", act: Se("valve", "close_valve", t), pressed: !p }
        ])
      ] };
    }
    if (Hc.includes(r)) {
      const p = e.state === "on";
      return { on: p, button: c(r, "Turn " + Pt(t) + (p ? " off" : " on")), parts: [], sections: [] };
    }
    return { on: !1, button: { act: "", label: Pt(t) }, sections: [] };
  }
  const f = (t) => (Number.isInteger(Number(t)) ? String(Number(t)) : Re(t)) + "°";
  function b(t) {
    var ct;
    const e = (j) => t.readings.find((yt) => ve(yt).device_class === j), o = e("temperature"), r = e("humidity"), c = (j) => {
      var yt;
      return Number((yt = M[j]) == null ? void 0 : yt.state);
    }, h = (j) => t.actions.filter((yt) => j.test(yt)), p = t.lights.filter((j) => {
      var yt;
      return ((yt = M[j]) == null ? void 0 : yt.state) === "on";
    }), v = h(/^cover\./), w = v.filter((j) => {
      var yt;
      return ((yt = M[j]) == null ? void 0 : yt.state) !== "closed";
    }), _ = [...new Set(v.map((j) => Pc(M[j])))], P = h(/^climate\./)[0], T = h(/^humidifier\./)[0], N = h(/^media_player\./), tt = N.find((j) => {
      var yt;
      return ((yt = M[j]) == null ? void 0 : yt.state) === "playing";
    }) || N.find((j) => {
      var yt;
      return ((yt = M[j]) == null ? void 0 : yt.state) === "paused";
    }), rt = t.plugs.filter((j) => {
      var yt;
      return ((yt = M[j]) == null ? void 0 : yt.state) === "on";
    }), $ = [];
    if (o && Number.isFinite(c(o)) && $.push({ key: "temp", id: o, kind: "reading", icon: Si(o), label: "Temperature", value: Re(c(o)) + "°" }), r && Number.isFinite(c(r)) && $.push({ key: "hum", id: r, kind: "reading", icon: Si(r), label: "Humidity", value: Math.round(c(r)) + "%" }), t.lights.length && $.push({
      key: "lights",
      kind: "control",
      tone: "light",
      icon: Si("", "mdi:lightbulb"),
      label: "Lights",
      value: p.length ? p.length + " of " + t.lights.length + " on" : "All off",
      short: p.length ? p.length + " on" : "Off",
      on: p.length > 0,
      light: p.length ? To(p[0]) : "",
      acts: t.lights.map((j) => ["light", p.length ? "turn_off" : "turn_on", j]),
      aria: (p.length ? "Turn off" : "Turn on") + " the lights in " + t.name
    }), v.length) {
      const j = _.length === 1 ? Am[_[0]] : "covers", yt = Math.round(v.reduce((Z, Vt) => Z + In(Vt), 0) / v.length);
      $.push({
        key: "covers",
        kind: "control",
        tone: "blue",
        light: w.length ? yn([146, 107, 199]) : "",
        icon: Si("", ((ct = Up[_[0]]) == null ? void 0 : ct[w.length ? 0 : 1]) || "mdi:window-shutter"),
        label: Te(j),
        value: yt <= 0 ? "Closed" : yt >= 100 ? "Open" : yt + "% open",
        short: yt <= 0 ? "Closed" : yt + "%",
        on: w.length > 0,
        acts: v.map((Z) => ["cover", w.length ? "close_cover" : "open_cover", Z]),
        aria: (w.length ? "Close the " : "Open the ") + j + " in " + t.name
      });
    }
    if (P) {
      const j = ve(P), yt = M[P].state === "off";
      $.push({
        key: "climate",
        kind: "control",
        tone: j.hvac_action === "cooling" ? "cool" : "heat",
        light: ro(P) ? yn(ro(P)) : "",
        icon: Si(P),
        label: Pt(P),
        value: yt ? "Off" : Te(j.hvac_action || M[P].state) + " · " + f(j.temperature),
        short: yt ? "Off" : f(j.temperature),
        on: !yt,
        acts: [["climate", "toggle", P]],
        aria: "Turn " + Pt(P) + (yt ? " on" : " off")
      });
    }
    if (T) {
      const j = M[T].state === "on";
      $.push({
        key: "humidifier",
        kind: "control",
        tone: "blue",
        light: j ? yn([33, 150, 243]) : "",
        icon: Si("", "mdi:air-humidifier"),
        label: Pt(T),
        value: j ? "On · " + ve(T).humidity + "%" : "Off",
        short: j ? ve(T).humidity + "%" : "Off",
        on: j,
        acts: [["humidifier", "toggle", T]],
        aria: "Turn " + Pt(T) + (j ? " off" : " on")
      });
    }
    if (N.length) {
      const j = tt || N[0], yt = M[j], Z = yt.state === "playing";
      $.push({
        key: "media",
        kind: "control",
        tone: "blue",
        light: ro(j) ? yn(ro(j)) : "",
        icon: Si(j),
        label: Pt(j),
        value: We(j),
        short: Z ? "Playing" : yt.state === "paused" ? "Paused" : Te(yt.state),
        on: Z,
        acts: [["media_player", yt.state === "playing" || yt.state === "paused" ? "media_play_pause" : "toggle", j]],
        aria: (Z ? "Pause " : "Play ") + Pt(j)
      });
    }
    return t.plugs.length && $.push({
      key: "plugs",
      kind: "control",
      tone: "blue",
      light: rt.length ? yn([255, 193, 7]) : "",
      icon: Si("", "mdi:power-plug"),
      label: "Plugs",
      value: rt.length ? rt.length + " of " + t.plugs.length + " on" : "All off",
      short: rt.length ? rt.length + " on" : "Off",
      on: rt.length > 0,
      acts: t.plugs.map((j) => ["switch", rt.length ? "turn_off" : "turn_on", j]),
      aria: (rt.length ? "Turn off" : "Turn on") + " the plugs in " + t.name
    }), t.alerts.forEach((j) => $.push(ve(j).device_class === "moisture" ? { key: "alert:" + j, kind: "alert", icon: Si(j), label: "Water leak" } : { key: "note:" + j, kind: "note", icon: Si(j), label: Pt(j) + " " + We(j).toLowerCase() })), $;
  }
  const y = (t, e) => {
    const o = (r) => t.actions.filter((c) => r.test(c));
    return {
      lights: t.lights,
      covers: o(/^cover\./),
      climate: o(/^climate\./).slice(0, 1),
      humidifier: o(/^humidifier\./).slice(0, 1),
      plugs: t.plugs,
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
    }[e] || [];
  }, C = (t, e, o) => '<button class="' + e + (t.on ? " on" : "") + '" type="button" data-tone="' + t.tone + '" data-acts="' + Di(t.acts) + '" aria-label="' + J(t.aria) + '" aria-pressed="' + t.on + '">' + o + "</button>", H = (t) => '<button class="tfAName" type="button" data-go="' + J(t.id) + '" aria-label="Open ' + J(t.name) + '">' + J(t.name) + "</button>";
  function U(t, e, o = !1) {
    const r = e.find((v) => v.key === "lights"), c = !!(r != null && r.on), h = "", p = '<span class="tfAreaGlyph"' + aa("area:" + t.id, t.icon || "mdi:texture-box", t.name) + "></span>";
    return o || !r ? '<span class="tfIcon tfAreaIcon' + (c ? " on" : "") + '"' + h + ' aria-hidden="true">' + p + "</span>" : '<button class="tfIcon tfAreaIcon' + (c ? " on" : "") + '" type="button"' + h + ' data-acts="' + Di(r.acts) + '" aria-label="' + J(r.aria) + '" aria-pressed="' + c + '">' + p + "</button>";
  }
  const K = (t) => t.filter((e) => e.kind === "alert" || e.kind === "note").map((e) => '<span class="sourceTag">' + J(e.label) + "</span>").join(" "), ft = (t) => t.readings.find((e) => ve(e).device_class === "temperature") || [...t.readings, ...t.solar, ...t.openings, ...t.actions, ...t.plugs].find((e) => M[e]) || null, Q = (t, e) => {
    const o = Pt(e);
    return o.toLowerCase().startsWith(t.name.toLowerCase() + " ") ? Te(o.slice(t.name.length + 1)) : o;
  };
  function vt(t) {
    const e = M[t], o = ve(t), r = t.split(".")[0], c = Number(e.state);
    if (e.state === "unavailable") return { text: "Unavailable" };
    if (r === "sensor" && Number.isFinite(c)) {
      if (o.device_class === "temperature") return { text: f(c) };
      const h = o.unit_of_measurement || "";
      return h === "%" ? { text: Math.round(c) + "%" } : { text: Re(c, Number.isInteger(c) ? 0 : 1), unit: h };
    }
    if (r === "climate" && (o.current_temperature ?? o.temperature) != null) return { text: f(o.current_temperature ?? o.temperature) };
    if (r === "light") return { text: e.state !== "on" ? "Off" : Pa(t) ? xn(e) + "%" : "On" };
    if (r === "cover") {
      const h = In(t);
      return { text: h <= 0 ? "Closed" : h >= 100 ? "Open" : h + "%" };
    }
    return r === "humidifier" ? { text: e.state === "on" ? o.humidity + "%" : "Off" } : r === "media_player" ? { text: e.state === "playing" ? "Playing" : e.state === "paused" ? "Paused" : Te(e.state) } : { text: We(t) };
  }
  const xt = (t, e, o) => {
    const r = o.find((v) => v.key === "temp"), c = o.find((v) => v.key === "hum"), h = ve(e), p = M[e].state === "off";
    return e.startsWith("climate.") ? [Q(t, e), p ? "Off" : Te(h.hvac_action || M[e].state) + (h.temperature != null ? " · " + f(h.temperature) : ""), c && c.value + " humidity"].filter(Boolean).join(" · ") : [!(r && r.id === e) && Q(t, e), r && r.id !== e && r.value, c && c.id !== e && c.value + " humidity"].filter(Boolean).join(" · ");
  };
  function At(t, e, o) {
    const r = o && vt(o), c = o ? xt(t, o, e) : "", h = (w) => {
      const _ = y(t, w.key);
      return _.length === 1 ? _[0] : "group:" + t.id + ":" + w.key;
    }, p = e.filter((w) => w.kind === "control").slice(0, 4).map((w) => '<div class="tfATile' + (w.on ? " on" : "") + '" data-tone="' + w.tone + '"' + (w.light ? ' data-light style="' + w.light + '"' : "") + ">" + C(w, "tfIcon", w.icon) + '<button class="tfName" type="button" data-more="' + J(h(w)) + '" aria-label="' + J(t.name + " " + w.label.toLowerCase() + ", " + w.value + ". Open") + '"><span class="activityRowName">' + J(w.label) + '</span><span class="activityRowMeta">' + J(w.value) + "</span></button></div>"), v = K(e);
    return '<div class="workoutPanelTop">' + U(t, e) + '<div class="tfATitle">' + H(t) + "</div>" + (v ? '<div class="tfATags">' + v + "</div>" : "") + "</div>" + (o ? '<button class="tfABig" type="button" data-more="' + J(o) + '" aria-label="' + J(Pt(o) + ", " + We(o) + ". More info") + '"><span class="tfABigMain' + (r.text.length > 7 ? " long" : "") + '">' + J(r.text) + (r.unit ? '<span class="tfABigUnit">' + J(r.unit) + "</span>" : "") + "</span>" + (c ? '<span class="tfABigSub">' + J(c) + "</span>" : "") + "</button>" : "") + (p.length ? '<div class="tfATiles">' + p.join("") + "</div>" : "");
  }
  function Jt(t) {
    const e = t.id === R, o = b(t), r = ft(t), c = r && vt(r), h = [...o.filter((p) => p.kind === "control"), ...o.filter((p) => p.kind !== "control" && p.kind !== "reading")].slice(0, 4);
    return '<article class="workoutPanel tfAreaPanel' + (e ? " active" : "") + '" data-area="' + J(t.id) + '" tabindex="0" aria-expanded="' + e + '" aria-label="' + J(t.name) + '"><div class="panelExpanded"' + (e ? "" : " inert") + ">" + At(t, o, r) + '</div><div class="panelCollapsed tfACollapsed"><div class="tfACTop">' + U(t, o, !0) + '<span class="tfACName">' + J(t.name) + '</span></div><span class="tfACMain">' + (c ? J(c.text + (c.unit ? " " + c.unit : "")) : "") + '</span><span class="tfACTiles" aria-hidden="true">' + h.map((p) => '<span class="tfACTile"><span class="tfIcon' + (p.kind === "alert" ? " alert" : "") + '"' + (p.on && p.light ? ' data-light style="' + p.light + '"' : "") + ">" + p.icon + "</span></span>").join("") + "</span></div></article>";
  }
  let jt = [];
  const _t = () => {
    var e;
    const t = new Set(((e = qt.dash) == null ? void 0 : e.areasOff) || []);
    return jt.filter((o) => !t.has(o.id));
  }, Qt = (t) => {
    var o;
    const e = _t();
    return e.some((r) => r.id === R) || (R = ((o = e[0]) == null ? void 0 : o.id) || null), '<div class="tfAreas" data-tf data-k="areas" style="order:' + t + '"><section class="workoutGallery tfAreaGallery" aria-label="Areas">' + e.map(Jt).join("") + "</section></div>";
  }, Yt = (t) => t.startsWith("room:"), Et = (t) => jt.find((e) => "room:" + e.id === t);
  function he(t, e) {
    const o = b(t), r = ft(t), c = r && vt(r), h = r ? xt(t, r, o) : "", p = c ? c.text + (c.unit ? " " + c.unit : "") : "", v = (N) => {
      const tt = y(t, N.key);
      return tt.length === 1 ? tt[0] : "group:" + t.id + ":" + N.key;
    }, w = o.filter((N) => N.kind === "control").slice(0, 4), _ = (N) => N.on && N.light ? ' data-light style="' + N.light + '"' : "", P = w.map((N) => '<button class="tfIcon' + (N.on ? " on" : "") + '" type="button" data-tone="' + N.tone + '"' + _(N) + ' data-more="' + J(v(N)) + '" aria-label="' + J(N.label + ", " + N.value + ". Open its controls") + '">' + N.icon + "</button>"), T = w.map((N) => '<button class="tfRoomDev" type="button" data-more="' + J(v(N)) + '" aria-label="' + J(N.label + ", " + N.value + ". Open its controls") + '"><span class="tfIcon' + (N.on ? " on" : "") + '" data-tone="' + N.tone + '"' + _(N) + ">" + N.icon + '</span><span class="tfRoomDevName"><span class="activityRowName">' + J(N.label) + '</span><span class="activityRowMeta">' + J(N.value) + "</span></span></button>");
    return '<div class="tfAction tfRoomTile" data-k="' + J(e) + '" data-go="' + J(t.id) + '"><div class="tfActionHead"><span class="tfIcon tfRoomIcon" aria-hidden="true"><span class="tfAreaGlyph"' + aa("area:" + t.id, t.icon || "mdi:texture-box", t.name) + '></span></span><button class="tfName" type="button" data-go="' + J(t.id) + '" aria-label="Open ' + J(t.name) + '"><span class="activityRowName">' + J(t.name) + "</span>" + (p || h ? '<span class="activityRowMeta">' + (p ? '<span class="tfRoomInline">' + J(p) + (h ? " · " : "") + "</span>" : "") + J(h) + "</span>" : "") + "</button></div>" + (p ? '<div class="tfRoomReading" aria-hidden="true"><span class="tfRoomBig">' + J(p) + "</span>" + (h ? '<span class="tfRoomSub">' + J(h) + "</span>" : "") + "</div>" : "") + (P.length ? '<div class="tfRoomDevices">' + P.join("") + '</div><div class="tfRoomHeads">' + T.join("") + "</div>" : "") + "</div>";
  }
  const oe = () => [
    { key: "home", name: "Home", ids: fe.homeVacuums },
    ...fe.rooms.map((t) => ({ key: "room:" + t.id, name: t.name, room: t, ids: t.actions }))
  ], Ee = (t, e, o) => t + " " + (t === 1 ? e : o), Nt = () => (qt.favourites ?? eo.favorite_entities ?? []).filter((t) => M[t]);
  function $e() {
    if (!Qe) {
      const e = Object.entries(Xt).sort((r, c) => c[1] - r[1]).map(([r]) => r), o = fe.rooms.flatMap((r) => r.actions);
      Qe = [.../* @__PURE__ */ new Set([...ao, ...e, ...o.filter((r) => Ho(r).on), ...o])];
    }
    const t = Nt();
    return Qe.filter((e) => M[e] && M[e].state !== "unavailable" && !t.includes(e));
  }
  let ta = !1;
  function Wa() {
    if (!ta || qt.favSeeded || !fe.rooms.length || A) return;
    const t = (o) => Object.keys(M).find((r) => ki(r) && o(r)), e = [t((o) => o.startsWith("climate.")), t((o) => o.startsWith("cover.") && /curtain/.test(o)), t((o) => o.startsWith("valve.")), fe.security.locks[0]];
    qt = { ...qt, favourites: [.../* @__PURE__ */ new Set([...qt.favourites ?? eo.favorite_entities ?? [], ...e.filter(Boolean)])], favSeeded: !0 }, Yn();
  }
  const Na = () => qt.suggest ?? !eo.hide_suggested_entities;
  function pr() {
    const t = new Set(A ? [] : qt.favHidden || []), e = Nt().filter((r) => !t.has(r)), o = Na() ? $e().filter((r) => !t.has(r) && fo(r)) : [];
    return [...e, ...o].slice(0, Wm);
  }
  const pn = (t) => {
    const e = Nt().includes(t);
    return '<button class="tfStar" type="button" data-star="' + J(t) + '" aria-pressed="' + e + '" aria-label="Favourite: ' + J(Pt(t)) + '">' + Im(e) + "</button>";
  };
  function $n(t, { area: e = !1, star: o = !1, plain: r = !1, say: c = null, alert: h = !1 } = {}) {
    var rt, $, ct, j, yt, Z;
    const p = r && ((yt = (rt = i()) == null ? void 0 : rt.devices) == null ? void 0 : yt[(j = (ct = ($ = i()) == null ? void 0 : $.entities) == null ? void 0 : ct[t]) == null ? void 0 : j.device_id]), v = p && (p.name_by_user || p.name) || Pt(t), w = t.split(".")[0], _ = !r && $l.includes(w) ? Ho(t) : null, P = _ ? _.on : ["on", "open", "playing"].includes((Z = M[t]) == null ? void 0 : Z.state), T = r ? null : _ ? _.button : Hc.includes(w) ? { act: Se(w, "toggle", t), label: "Turn " + Pt(t) + (P ? " off" : " on") } : w === "scene" || w === "script" ? { act: Se(w, "turn_on", t), label: "Run " + Pt(t) } : null, N = (c ?? We(t)) + (e && ce.get(t) ? " · " + ce.get(t) : ""), tt = (_ == null ? void 0 : _.icon) || dn(t);
    return '<div class="activityRow' + (T ? " tfPlug" : "") + (P ? " on" : "") + (o ? " tfPick" : "") + (h ? " alert" : "") + '" data-k="' + J((e ? "fav:" : "row:") + t) + '" data-tone="' + (w === "light" ? "light" : (_ == null ? void 0 : _.tone) || "blue") + '"' + ei(t) + ">" + (T && !o ? '<button class="tfIcon" type="button" data-act="' + T.act + '" aria-label="' + J(T.label) + '"' + aa(t, tt) + "></button>" : '<div class="tfIcon" aria-hidden="true"' + aa(t, tt) + "></div>") + '<button class="tfName" type="button" data-more="' + J(t) + '" aria-label="' + J(v + ", " + N + ". More info") + '"><span class="activityRowName">' + J(v) + '</span><span class="activityRowMeta">' + J(N) + "</span></button>" + (o ? pn(t) : "") + "</div>";
  }
  const Le = () => {
    var t;
    return M[(t = qt.sources) == null ? void 0 : t.weather] ? qt.sources.weather : M["weather.forecast_home"] ? "weather.forecast_home" : Object.keys(M).find((e) => e.startsWith("weather."));
  };
  function Io() {
    var o;
    const t = (r) => Object.keys(M).filter((c) => c.startsWith("binary_sensor.") && r.includes(ve(c).device_class));
    return ((o = Nn.alert_entities) != null && o.length ? Nn.alert_entities : [...t(["moisture", "smoke", "gas"]).map((r) => ({ entity: r, severity: "alert" })), ...t($d).map((r) => ({ entity: r, severity: "warning" }))]).filter((r) => M[r.entity]).map((r) => ({ ...r, on: ["on", "open", "unlocked", "triggered", "problem"].includes(M[r.entity].state) }));
  }
  function Mn() {
    const t = Object.keys(Kl), e = /* @__PURE__ */ new Set(), o = [];
    (eo.shortcuts || []).forEach((h) => {
      if (h.type === "summary") {
        if (!t.includes(h.key) || e.has(h.key)) return;
        e.add(h.key);
      }
      o.push(h);
    }), t.forEach((h) => {
      e.has(h) || o.push({ type: "summary", key: h });
    });
    const r = uo().sumOrder || [], c = (h) => h.type === "summary" && r.includes(h.key) ? r.indexOf(h.key) : r.length;
    return r.length ? o.map((h, p) => [h, p]).sort((h, p) => c(h[0]) - c(p[0]) || h[1] - p[1]).map(([h]) => h) : o;
  }
  function po() {
    var ct;
    const t = ((ct = i()) == null ? void 0 : ct.entities) || {}, e = (j) => ve(j).device_class, o = Object.keys(M).filter((j) => j.startsWith("sensor.") && e(j) === "battery" || j.startsWith("binary_sensor.") && ["battery", "problem"].includes(e(j))), r = fe.rooms.flatMap((j) => j.plants.map((yt) => yt.id));
    if (!o.length && !r.length) return null;
    const c = (j) => {
      var Z;
      const yt = (Z = t[j]) == null ? void 0 : Z.device_id;
      return !!yt && Object.keys(M).some((Vt) => {
        var Ne;
        return Vt.startsWith("binary_sensor.") && ((Ne = t[Vt]) == null ? void 0 : Ne.device_id) === yt && e(Vt) === "battery_charging" && M[Vt].state === "on";
      });
    }, h = (j) => j.startsWith("vacuum.") ? ve(j).battery_level <= 20 && M[j].state !== "docked" : j.startsWith("binary_sensor.") ? e(j) === "battery" && M[j].state === "on" : parseFloat(M[j].state) <= 20 && !c(j), p = [...o, ...fe.vacuums].filter((j) => M[j] && h(j)), v = [...o.filter((j) => e(j) === "problem" && M[j].state === "on"), ...r.filter((j) => {
      var yt;
      return ((yt = M[j]) == null ? void 0 : yt.state) === "problem";
    })], w = o.filter((j) => M[j].state === "unavailable"), _ = [.../* @__PURE__ */ new Set([...p, ...v, ...w])], P = (j) => {
      const yt = parseFloat(M[j].state);
      return e(j) === "battery" && Number.isFinite(yt) ? yt : 101;
    }, T = [...r, ...fe.vacuums, ...[...o].sort((j, yt) => P(j) - P(yt))].filter((j) => M[j] && !_.includes(j)), N = /* @__PURE__ */ new Map();
    T.forEach((j) => {
      var Z;
      const yt = ((Z = fe.areaOf) == null ? void 0 : Z.call(fe, j)) || "";
      N.set(yt, [...N.get(yt) || [], j]);
    });
    const tt = (j) => {
      const yt = fe.rooms.findIndex((Z) => Z.id === j);
      return j === "" ? 1 / 0 : yt < 0 ? fe.rooms.length : yt;
    }, rt = [...N.keys()].sort((j, yt) => tt(j) - tt(yt)), $ = (j) => {
      var yt, Z, Vt, Ne;
      return ((yt = fe.rooms.find((le) => le.id === j)) == null ? void 0 : yt.name) || ((Ne = (Vt = (Z = i()) == null ? void 0 : Z.areas) == null ? void 0 : Vt[j]) == null ? void 0 : Ne.name) || j;
    };
    return {
      value: [p.length && Ee(p.length, "low battery", "low batteries"), v.length && Ee(v.length, "problem", "problems"), w.length && Ee(w.length, "unavailable device", "unavailable devices")].filter(Boolean).join(", ") || "All good",
      plain: !0,
      groups: [{ name: "Needs attention", ids: _, alert: !0 }, ...rt.map((j) => ({ name: j ? $(j) : rt.length > 1 ? "Other devices" : "Devices", ids: N.get(j) }))].filter((j) => j.ids.length)
    };
  }
  const uo = () => A ? qt.home || {} : qt, si = (t) => Yp.includes(t) ? (uo().shownSums || []).includes(t) : !(uo().hiddenSums || []).includes(t);
  function ur(t, e, o) {
    const r = t.flatMap((N) => o(N, /^cover\./)), c = r.filter((N) => {
      var tt;
      return ["open", "opening"].includes((tt = M[N]) == null ? void 0 : tt.state);
    }).length, h = Object.keys(M).filter((N) => N.startsWith("person.")), p = h.filter((N) => {
      var tt;
      return ((tt = M[N]) == null ? void 0 : tt.state) === "home";
    }).length, v = fe.security.openings.filter((N) => M[N]), w = v.filter((N) => M[N].state === "on").length, _ = Object.keys(M).filter((N) => N.startsWith("binary_sensor.") && ve(N).device_class === "moisture"), P = _.filter((N) => M[N].state === "on").length, T = fe.vacuums.filter((N) => M[N]);
    return {
      covers: r.length && { value: c ? c + " open" : "All closed", groups: e((N) => o(N, /^cover\./)) },
      people: h.length && { value: p ? p + " home" : "Nobody home", groups: [{ name: "People", ids: h }] },
      openings: v.length && { value: w ? w + " open" : "All closed", groups: [{ name: "Doors and windows", ids: v }] },
      leaks: _.length && { value: P ? Ee(P, "leak", "leaks") : "All dry", groups: [{ name: "Leak sensors", ids: _ }] },
      vacuum: T.length && { value: Te(M[T[0]].state), groups: [{ name: "Vacuum", ids: T }] }
    };
  }
  function La(t = !1) {
    var Ra;
    const e = fe.rooms, o = fe.security, r = (te, Tt) => te.actions.filter((ge) => Tt.test(ge)), c = (te) => e.map((Tt) => ({ name: Tt.name, ids: te(Tt) })).filter((Tt) => Tt.ids.length), h = e.flatMap((te) => te.lights), p = h.filter((te) => {
      var Tt;
      return ((Tt = M[te]) == null ? void 0 : Tt.state) === "on";
    }).length, v = e.map((te) => te.readings.find((Tt) => ve(Tt).device_class === "temperature")).filter(Boolean).map((te) => Number(M[te].state)).filter(Number.isFinite), [w, _] = [Re(Math.min(...v)), Re(Math.max(...v))], P = e.flatMap((te) => r(te, /^media_player\./)), T = P.filter((te) => {
      var Tt;
      return ((Tt = M[te]) == null ? void 0 : Tt.state) === "playing";
    }).length, N = Io(), tt = N.filter((te) => te.severity === "warning" && te.on).length, rt = o.locks.filter((te) => {
      var Tt;
      return ["unlocked", "jammed", "open"].includes((Tt = M[te]) == null ? void 0 : Tt.state);
    }).length, $ = o.alarms.filter((te) => {
      var Tt;
      return ((Tt = M[te]) == null ? void 0 : Tt.state) === "disarmed";
    }).length, ct = tt ? Ee(tt, "warning", "warnings") : null, j = rt ? rt + " unlocked" : $ ? $ + " disarmed" : ct ? null : "All secure", yt = po(), Z = e.flatMap((te) => te.solar), Vt = Z.find((te) => te.endsWith("_power")), Ne = {
      light: h.length && { value: p ? p + " on" : "All off", groups: c((te) => te.lights) },
      climate: v.length && { value: w === _ ? w + "°" : w + " - " + _ + "°", groups: c((te) => [...te.readings.filter((Tt) => ["temperature", "humidity"].includes(ve(Tt).device_class)), ...r(te, /^(climate|humidifier)\./)]) },
      security: (o.alarms.length || o.locks.length) && { value: [ct, j].filter(Boolean).join(", "), groups: [{ name: "Alarm and locks", ids: [...o.alarms, ...o.locks] }, { name: "Doors and windows", ids: o.openings }].filter((te) => te.ids.length) },
      media_players: P.length && { value: T ? T + " playing" : "No media playing", groups: c((te) => r(te, /^media_player\./)) },
      maintenance: yt,
      energy: fe.grid && { value: ni(Number(((Ra = M[Vt]) == null ? void 0 : Ra.state) || 0) * 1e3 + Number(M[fe.grid].state)) + " now", groups: [{ name: "Energy", ids: [...Z, fe.grid] }] },
      ...ur(e, c, r)
    }, le = [], je = N.filter((te) => te.severity !== "warning" && te.on);
    return je.length && le.push({ key: "alerts", name: "Alerts", icon: "mdi:alarm-plus", colour: "#f44336", value: Ee(je.length, "active alert", "active alerts"), groups: [{ name: "Active", ids: je.map((te) => te.entity) }] }), Mn().forEach((te) => {
      te.type !== "summary" ? le.push({ key: "path:" + te.path, name: te.label || te.path, icon: te.icon || "mdi:link-variant", colour: "", value: "" }) : !te.hidden && Ne[te.key] && (t || si(te.key)) && le.push({ key: te.key, ...Kl[te.key], ...Ne[te.key] });
    }), le;
  }
  const gl = (t) => '<div class="activityRow tap tfSum" role="button" tabindex="0" data-summary="' + J(t.key) + '" data-k="sum:' + J(t.key) + '" aria-label="' + J(t.name + (t.value ? ", " + t.value : "")) + '"' + (t.key === "alerts" ? ' style="--sum:' + t.colour + ';--sum-ink:#ffffff"' : t.key === "climate" ? ' style="' + hl() + '"' : t.colour && Ai(t.colour) ? ' style="' + Ai(t.colour).slice(1) + '"' : "") + ">" + (t.key === "climate" ? qe : "") + '<div class="tfIcon" aria-hidden="true"' + aa(t.id || "", t.icon, t.name) + '></div><div><div class="activityRowName">' + J(t.name) + "</div>" + (t.value ? '<div class="activityRowMeta">' + J(t.value) + "</div>" : "") + "</div></div>";
  function Xr(t) {
    const e = Nt();
    qt = { ...qt, favourites: e.includes(t) ? e.filter((o) => o !== t) : [...e, t], favHidden: (qt.favHidden || []).filter((o) => o !== t) }, Yn(), sa();
  }
  function vl(t) {
    document.querySelector("home-assistant") && (lt.pushState(null, "", t), window.dispatchEvent(new CustomEvent("location-changed", { detail: { replace: !1 } })));
  }
  function td(t, e) {
    if (t.startsWith("path:")) {
      vl(t.slice(5));
      return;
    }
    bt("summary:" + t, e);
  }
  async function Xa() {
    const t = (p) => Promise.resolve().then(() => W(p)).catch(() => null), [e, o, r, c] = await Promise.all([
      t({ type: "frontend/get_user_data", key: Zp }),
      t({ type: "frontend/get_system_data", key: "home" }),
      t({ type: "frontend/get_system_data", key: "security" }),
      t({ type: "usage_prediction/common_control" })
    ]), h = (e == null ? void 0 : e.value) || {};
    qt = { favourites: h.favourites ?? null, sources: h.sources, hiddenSums: h.hiddenSums, shownSums: h.shownSums, home: h.home, dash: h.dash, named: h.named, favHidden: h.favHidden, suggest: h.suggest, favSeeded: h.favSeeded }, eo = (o == null ? void 0 : o.value) || {}, Nn = (r == null ? void 0 : r.value) || {}, ao = Array.isArray(c == null ? void 0 : c.entities) ? c.entities : [], Qe = null, Object.keys(M).length && sa(), hr(), ta = !0, Wa();
  }
  const fr = "HomeCore";
  async function hr() {
    var r, c, h;
    const t = location.pathname.split("/")[1], e = qt.named || [];
    if (!((c = (r = i()) == null ? void 0 : r.user) != null && c.is_admin) || !t || e.includes(t)) return;
    const o = () => {
      qt = { ...qt, named: [...e, t] }, Yn();
    };
    try {
      const p = (h = await W({ type: "lovelace/dashboards/list" })) == null ? void 0 : h.find((_) => _.url_path === t);
      if (!p || p.mode === "yaml") return;
      if (p.title === fr) {
        o();
        return;
      }
      const v = await W({ type: "lovelace/config", url_path: t }), w = ((v == null ? void 0 : v.views) || []).flatMap((_) => [..._.cards || [], ...(_.sections || []).flatMap((P) => P.cards || [])]);
      if (!w.length || !w.every((_) => (_ == null ? void 0 : _.type) === "custom:move-assistant-card" && _.layout === "test-focus")) return;
      await W({ type: "lovelace/dashboards/update", dashboard_id: p.id, title: fr }), o();
    } catch {
    }
  }
  let Jr = null, Ns = 0, bl = !1;
  const wl = (t) => {
    const e = t.split(".")[0], o = ve(t).device_class;
    return qm.includes(e) && (e !== "binary_sensor" || $d.includes(o) || !!au[o]);
  }, mr = (t) => t.startsWith("binary_sensor.") ? au[ve(t).device_class] : null;
  async function ed() {
    var t;
    if (!(bl || Date.now() - Ns < 30 * 1e3)) {
      bl = !0, Ns = Date.now();
      try {
        const e = Object.keys(((t = i()) == null ? void 0 : t.states) || {}).filter(wl), o = e.length ? await W({ type: "logbook/get_events", start_time: new Date(Date.now() - 24 * 3600 * 1e3).toISOString(), end_time: (/* @__PURE__ */ new Date()).toISOString(), entity_ids: e }) : null;
        Jr = Array.isArray(o) ? o.filter((r) => r.entity_id && r.state != null && r.when) : null;
      } catch {
        Jr = null;
      }
      bl = !1, sa();
    }
  }
  function Qr() {
    const t = /* @__PURE__ */ new Map(), e = /* @__PURE__ */ new Map(), o = (c) => {
      if (!M[c.entity_id] || !wl(c.entity_id) || !fo(c.entity_id) || ["unavailable", "unknown"].includes(c.state)) return;
      if (mr(c.entity_id)) {
        const p = e.get(c.entity_id);
        c.state === "on" ? (!p || c.when > p.when + 1) && e.set(c.entity_id, { ...c, alarm: !0, cleared: null }) : p && !p.cleared && c.when > p.when && (p.cleared = c.when);
        return;
      }
      const h = t.get(c.entity_id);
      (!h || c.when > h.when + 1) && t.set(c.entity_id, c);
    };
    [...Jr || []].sort((c, h) => c.when - h.when).forEach(o);
    const r = Jr ? Ns / 1e3 - 5 : 0;
    return Object.keys(M).forEach((c) => {
      var v;
      const h = M[c], p = h.last_changed ? Date.parse(h.last_changed) / 1e3 : 0;
      p > r && o({ entity_id: c, state: h.state, when: p, context_user_id: (v = h.context) == null ? void 0 : v.user_id });
    }), [...t.values(), ...e.values()].sort((c, h) => h.when - c.when).slice(0, Vm);
  }
  function xl(t) {
    var r;
    const e = t.context_user_id && Object.keys(M).find((c) => c.startsWith("person.") && ve(c).user_id === t.context_user_id);
    if (e) return Pt(e);
    const o = (r = i()) == null ? void 0 : r.user;
    return o && t.context_user_id === o.id ? o.name : ["automation", "script"].includes(t.context_domain) || t.context_event_type === "automation_triggered" ? t.context_name || "Home Assistant" : "";
  }
  function Fo(t) {
    const e = t.entity_id.split(".")[0], o = String(t.state);
    return e === "lock" ? { locked: "locked", unlocked: "unlocked", open: "opened", jammed: "jammed", locking: "locking", unlocking: "unlocking" }[o] || Te(o).toLowerCase() : e === "cover" || e === "valve" ? { open: "opened", closed: "closed", opening: "opening", closing: "closing" }[o] || Te(o).toLowerCase() : e === "binary_sensor" ? o === "on" ? "opened" : "closed" : e === "climate" ? o === "off" ? "turned off" : "set to " + Te(o).toLowerCase() : e === "media_player" ? { playing: "started playing", paused: "paused", idle: "stopped", off: "turned off", standby: "turned off", on: "turned on" }[o] || Te(o).toLowerCase() : e === "alarm_control_panel" ? (eu[o] || Te(o)).toLowerCase() : e === "vacuum" ? { cleaning: "started cleaning", docked: "docked", returning: "went home", paused: "paused", idle: "stopped" }[o] || Te(o).toLowerCase() : o === "on" ? "turned on" : o === "off" ? "turned off" : Te(o).toLowerCase();
  }
  function ts(t) {
    const e = t.entity_id, o = t.alarm && mr(e), r = Pt(e) + " " + (o ? o[0] : Fo(t)), c = o ? ia(t.when * 1e3) + (t.cleared ? " · " + o[1] + " since " + ia(t.cleared * 1e3) : "") : [xl(t), ia(t.when * 1e3)].filter(Boolean).join(" · ");
    return '<div class="activityRow' + (o ? " alert" : "") + '"><div class="tfIcon' + (o ? " alert" : "") + '" aria-hidden="true"' + aa(e, dn(e)) + '></div><button class="tfName" type="button" data-more="' + J(e) + '" data-at="' + Math.round(t.when * 1e3) + '" aria-label="' + J(r + ", " + c + ". More info") + '"><span class="activityRowName">' + J(r) + '</span><span class="activityRowMeta">' + J(c) + "</span></button></div>";
  }
  let Fi = null, ad = 0;
  const yl = [["electricity", "Electricity", 4.3, "kWh"], ["solar", "Solar", 2.3, "kWh"], ["gas", "Gas", 0.21, "m³"], ["water", "Water", 0.2, "m³"]];
  async function nd() {
    var e;
    if (Date.now() - ad < 5 * 60 * 1e3) return;
    ad = Date.now();
    const t = [];
    try {
      const o = ((e = await W({ type: "energy/get_prefs" })) == null ? void 0 : e.energy_sources) || [], r = (c) => o.filter((h) => h.type === c).flatMap((h) => c === "grid" ? (h.flow_from || []).map((p) => p.stat_energy_from) : [h.stat_energy_from]).filter(Boolean);
      for (const [c, h, p] of [["electricity", "Electricity", r("grid")], ["solar", "Solar", r("solar")], ["gas", "Gas", r("gas")], ["water", "Water", r("water")]]) {
        if (!p.length) continue;
        const v = await Promise.all(p.map((w) => Promise.resolve(W({ type: "recorder/statistic_during_period", statistic_id: w, calendar: { period: "day" }, types: ["change"] })).then((_) => Number(_ == null ? void 0 : _.change) || 0, () => 0)));
        t.push({ key: c, name: h, id: p[0], ids: p, value: v.reduce((w, _) => w + _, 0), unit: ve(p[0]).unit_of_measurement || (c === "gas" || c === "water" ? "m³" : "kWh") });
      }
    } catch {
    }
    Fi = t, sa();
  }
  let Oi = null, li = [];
  function od() {
    var h;
    const t = li = Fi != null && Fi.length ? Fi : yl.map(([p, v, w, _]) => {
      if (p === "solar") {
        const T = Object.keys(M).find((N) => N.endsWith("_solar_today") && !N.includes("made_up_energy"));
        T && Number.isFinite(Number(M[T].state)) && (w = Number(M[T].state));
      }
      const P = "sensor.made_up_energy_" + p;
      return M[P] = { entity_id: P, state: String(w), last_changed: (/* @__PURE__ */ new Date()).toISOString(), attributes: { friendly_name: v + " today", unit_of_measurement: _, state_class: "total_increasing" } }, { key: p, name: v, id: P, value: w, unit: _ };
    });
    ut.clear(), t.some((p) => p.id === Oi) || (Oi = t[0].id);
    const e = t.map((p) => {
      const v = Number(p.value).toLocaleString(void 0, { maximumFractionDigits: p.value < 10 ? 2 : 1 }) + " " + p.unit, w = jm[p.key], _ = p.id === Oi;
      return ut.set(p.id, { name: p.name, text: v, icon: w }), '<div class="activityRow tap' + (_ ? " picked" : "") + '" role="button" tabindex="0" data-energy-pick="' + J(p.id) + '" aria-pressed="' + _ + '" aria-label="' + J(p.name + ", " + v) + '. Show its day in the graph"><div class="tfIcon" aria-hidden="true"' + aa("", w, p.name) + '></div><div><div class="activityRowName">' + J(p.name) + '</div><div class="activityRowMeta">' + J(v) + "</div></div></div>";
    }), o = t.find((p) => p.id === Oi), r = (((h = ye().opts.energy) == null ? void 0 : h.graph) || "above") === "below", c = '<div class="tfCardGraph tfDashGraph"><svg class="tfGraph" data-graph="' + J(o.id) + '" role="img" aria-label="' + J(o.name) + ', last 24 hours"></svg></div>';
    return kn("dash:energy", 0, "Energy today", e, c, La().some((p) => p.key === "energy") ? "summary:energy" : null, "tfDashCard tfDash-energy" + (r ? "" : " graphAbove"));
  }
  function kl(t) {
    const e = E.querySelector(".tfDash-energy"), o = e == null ? void 0 : e.querySelector(".tfDashGraph svg");
    !o || t === Oi || (Oi = t, e.querySelectorAll("[data-energy-pick]").forEach((r) => {
      const c = r.dataset.energyPick === t;
      r.classList.toggle("picked", c), r.setAttribute("aria-pressed", String(c));
    }), o.dataset.graph = t, o.dataset.drawn = "", ln.set("dash:energy", od()), Js(!0));
  }
  const es = {
    electricity: [15, 12, 10, 10, 10, 12, 25, 45, 40, 30, 25, 30, 35, 30, 25, 25, 35, 60, 80, 70, 55, 45, 30, 20],
    gas: [2, 2, 2, 2, 3, 8, 18, 20, 12, 6, 4, 4, 4, 4, 4, 5, 8, 14, 16, 14, 10, 6, 3, 2],
    water: [0, 0, 0, 0, 0, 2, 12, 18, 8, 4, 3, 4, 6, 3, 2, 3, 4, 6, 10, 8, 5, 5, 3, 1]
  }, gr = /* @__PURE__ */ new Map();
  async function vr(t) {
    const e = /* @__PURE__ */ new Date(), o = new Date(e).setHours(0, 0, 0, 0), r = e.getHours(), c = e.getMinutes() / 60, h = Array.from({ length: 24 }, (v, w) => w <= r ? 0 : null);
    if (!t.ids) {
      const v = es[t.key] || es.electricity, w = v.map((P, T) => T < r ? P : T === r ? P * c : 0), _ = w.reduce((P, T) => P + T, 0) || 1;
      return h.map((P, T) => P == null ? null : t.value * w[T] / _);
    }
    const p = gr.get(t.id);
    if (p && p.day === o && Date.now() - p.at < 5 * 60 * 1e3) return p.hours;
    try {
      const v = await W({ type: "recorder/statistics_during_period", start_time: new Date(o).toISOString(), end_time: e.toISOString(), statistic_ids: t.ids, period: "hour", types: ["change"] });
      t.ids.forEach((P) => ((v == null ? void 0 : v[P]) || []).forEach((T) => {
        const N = typeof T.start == "number" ? T.start : Date.parse(T.start), tt = new Date(N).getHours();
        N >= o && tt < r && (h[tt] += Number(T.change) || 0);
      }));
      const w = new Date(e).setMinutes(0, 0, 0), _ = await Promise.all(t.ids.map((P) => Promise.resolve(W({ type: "recorder/statistic_during_period", statistic_id: P, fixed_period: { start_time: new Date(w).toISOString(), end_time: e.toISOString() }, types: ["change"] })).then((T) => Number(T == null ? void 0 : T.change) || 0, () => 0)));
      h[r] = _.reduce((P, T) => P + T, 0);
    } catch {
    }
    return gr.set(t.id, { at: Date.now(), day: o, hours: h }), h;
  }
  async function Oo(t, e) {
    const o = await vr(e);
    if (!t.isConnected) return;
    const r = Math.max(120, t.clientWidth || 260), c = Math.max(60, t.clientHeight || 130), h = 18, p = c - 18, v = r / 24, w = v * 0.72, _ = (/* @__PURE__ */ new Date()).getHours(), P = o.map((ct) => ct ?? 0), T = Math.max(0, ...P), N = (ct) => p - (T > 0 ? ct / T * (p - h) : 0), tt = (ct) => ct.toLocaleString(void 0, { maximumFractionDigits: ct < 10 ? 2 : 1 }) + " " + e.unit, rt = (ct) => String(ct).padStart(2, "0") + ":00", $ = T > 0 ? P.indexOf(T) : -1;
    t.setAttribute("viewBox", "0 0 " + r + " " + c), t.setAttribute("aria-label", e.name + " today by the hour: " + tt(e.value) + ($ >= 0 ? ", most " + tt(T) + " at " + rt($) : "")), t.innerHTML = [h, (h + p) / 2, p].map((ct) => '<line x1="0" x2="' + r + '" y1="' + ct + '" y2="' + ct + '" stroke="var(--line)" stroke-width="1"/>').join("") + o.map((ct, j) => ct > 0 ? '<rect x="' + (j * v + (v - w) / 2).toFixed(1) + '" y="' + N(ct).toFixed(1) + '" width="' + w.toFixed(1) + '" height="' + (p - N(ct)).toFixed(1) + '" rx="2" fill="' + (j === _ ? "var(--primary)" : "var(--text)") + '"' + (j === _ ? "" : ' fill-opacity=".5"') + "/>" : "").join("") + [0, 6, 12, 18].map((ct) => '<text x="' + (ct * v).toFixed(1) + '" y="' + (c - 3) + '">' + String(ct).padStart(2, "0") + "</text>").join("") + ($ >= 0 ? '<text x="0" y="11">Most: ' + J(tt(T)) + " at " + rt($) + "</text>" : "");
  }
  function br(t) {
    var e;
    (e = window.matchMedia) != null && e.call(window, "(prefers-reduced-motion: reduce)").matches || t.querySelectorAll("rect").forEach((o, r) => o.animate([{ transform: "scaleY(0)" }, { transform: "scaleY(1)" }], { duration: 500, delay: r * 18, easing: "cubic-bezier(.2,.7,.3,1)", fill: "backwards" }));
  }
  function qi(t) {
    var r;
    if ((r = window.matchMedia) != null && r.call(window, "(prefers-reduced-motion: reduce)").matches) return;
    const [e, o] = t.querySelectorAll("path");
    Mu(t, o, [e].filter(Boolean));
  }
  let di = null, ci = 0;
  const fo = (t) => !t.startsWith("light.") || zm.includes((ce.get(t) || "").toLowerCase()), Hs = () => Math.max(2, Xn((E == null ? void 0 : E.clientWidth) || 0).n), id = (t) => {
    const e = Ho(t);
    return e.sections.map((o, r) => o && (e.parts || [])[r]).filter(Boolean);
  }, Is = (t) => id(t).slice(0, Oa(t) - 1);
  function qo(t) {
    const e = ye().tiles;
    if (e) return e.filter((r) => M[r] || Et(r));
    if (!di) {
      const r = (c) => {
        var h;
        return (((h = M[c]) == null ? void 0 : h.state) === "on" ? 1e6 : 0) + (Xt[c] || 0);
      };
      di = {
        lights: fe.rooms.flatMap((c) => c.lights).filter((c) => {
          var h;
          return fo(c) && ((h = M[c]) == null ? void 0 : h.state) !== "unavailable";
        }).sort((c, h) => r(h) - r(c) || Pt(c).localeCompare(Pt(h))),
        climates: fe.rooms.flatMap((c) => c.actions.filter((h) => h.startsWith("climate.")))
      };
    }
    const o = di.climates.filter((r) => M[r]).slice(0, t > 3 ? 2 : 1);
    return [...di.lights.filter((r) => M[r]).slice(0, Math.max(0, t - o.length)), ...o];
  }
  const pi = () => {
    var t;
    return ((t = qt.home) == null ? void 0 : t.welcome) ?? !0;
  }, Wi = () => {
    var e, o;
    const t = (e = i()) == null ? void 0 : e.user;
    return (t == null ? void 0 : t.name) || ((o = Object.values(M).find((r) => {
      var c;
      return r.entity_id.startsWith("person.") && (t == null ? void 0 : t.id) && ((c = r.attributes) == null ? void 0 : c.user_id) === t.id;
    })) == null ? void 0 : o.attributes.friendly_name) || "";
  }, wr = () => {
    const t = (/* @__PURE__ */ new Date()).getHours(), e = Wi();
    return (t >= 5 && t < 12 ? "Good morning" : t >= 12 && t < 18 ? "Good afternoon" : "Good evening") + (e ? ", " + e : "");
  }, rd = (t, e, o, r) => (c) => '<section class="card tfCard tfDashCard ' + t + '" data-tf data-k="' + e + '" aria-label="' + o + '">' + (r ? '<div class="activityHeader">' + (e === "favs" ? '<button class="activityTitle tfTitleBtn" type="button" data-more="favourites" aria-label="Favourites. More info">' + o + "</button>" : '<div class="activityTitle">' + o + "</div>") + "</div>" : "") + '<div class="activityRows">' + c + "</div></section>";
  function sd(t, e) {
    var h, p;
    t.dash = !0, t.push({ key: "dash:title", html: '<h1 class="settingsTitle tfDashTitle" data-tf data-k="dash:title">' + ((A ? pi() : ye().welcome) ? '<span class="tfGreeting">' + J(wr()) + "</span>" : "") + J(((p = (h = i()) == null ? void 0 : h.config) == null ? void 0 : p.location_name) || "Home") + "</h1>" }), e.length && t.push({ key: "sums", wrap: (v) => '<div class="tfDashBarRow" data-tf data-k="sums">' + rd("tfDash-bar", "sums-bar", "Summaries", !1)(v).replace(" data-tf", "") + "</div>", tiles: e.map((v) => ({ key: "sum:" + v.key, html: gl(v) })) }), !A && _t().length && t.push({ key: "areas", html: Qt(0) });
    const o = pr();
    if (o.length && t.push({ key: "favs", wrap: rd("tfDash-favs", "favs", "Favourites", !0), tiles: o.map((v) => ({ key: "fav:" + v, html: $n(v, { area: !0 }) })) }), A)
      return ci = Hs(), qo(0).forEach((v) => t.push({
        key: "dash:tile:" + v,
        wrap: (w) => '<div class="tfDashTiles" data-tf data-k="dash:tile:' + J(v) + '">' + w + "</div>",
        tiles: [{ key: v, html: he(Et(v), v) }]
      })), t;
    const r = Qr();
    t.push({ key: "dash:act", html: kn("dash:act", 0, "Activity", r.length ? r.map(ts) : ['<p class="tfDashNone">Nothing has changed in the last day.</p>'], "", null, "tfDashCard tfDash-act") }), t.push({ key: "dash:energy", html: od() });
    const c = Hs();
    return ci = c, qo(c >= 3 ? c : c * 2).forEach((v) => t.push({
      key: "dash:tile:" + v,
      wrap: (w) => '<div class="tfDashTiles" data-tf data-k="dash:tile:' + J(v) + '">' + w + "</div>",
      tiles: [{ key: v, html: Yt(v) ? he(Et(v), v) : Pi(v, !1, Is(v)) }]
    })), ed(), nd(), t;
  }
  const xr = 252, Ze = 16, Fs = 200, as = Math.round(xr * 1.25), Wo = 60, Sn = Wo + Ze, Ml = 3, Sl = {
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
  }, yr = ["wx", "favs", "act", "energy", "avg"], Os = ["XS", "S", "M", "L", "XL"], ld = Os.length, lc = ["Narrow", "Wide", "Really wide"], dc = { wx: 5, areas: 5, favs: 5, act: 5, energy: 4, avg: 4, aq: 4, pollen: 4, radar: 4, hourly: 4, sun: 4, moon: 4, uv: 4, humidity: 4, pressure: 4, wind: 4, visibility: 4 }, ns = (t) => !t.includes(".") || !M[t] || t.startsWith("light.") && Ni(t) ? ld : Math.min(ld, id(t).length + 1), Oa = (t) => {
    const e = ye().opts[t] || {}, o = ns(t), r = Number(e.h) || (e.tall ? 5 : dc[t] || un);
    return Math.max(1, Math.min(o, r));
  }, un = 2, cc = 90, pc = 56, fn = (t) => {
    var e;
    return Sl[t] || (t.startsWith("room:") ? ((e = jt.find((o) => "room:" + o.id === t)) == null ? void 0 : e.name) || "Area" : Pt(t));
  }, Cl = 409, qs = 128;
  let Ja = !1, Ae = null, Qa = null, Tl = !1, ui = /* @__PURE__ */ new Map(), ho = 0, qa = 0;
  const On = ["title", "sums"], Xn = (t) => {
    const e = Math.max(1, Math.floor((t + Ze) / (Fs + Ze)));
    return { n: e, w: Math.max(1, Math.min(as, Math.floor((t - (e - 1) * Ze) / e))) };
  }, dd = () => jt.map((t) => "room:" + t.id);
  function cd() {
    const t = dd();
    return {
      cells: {},
      spans: { favs: 2 },
      hidden: Object.keys(Sl).filter((e) => {
        var o, r;
        return !["title", ...((o = qt.home) == null ? void 0 : o.sums) === !1 ? [] : ["sums"], ...((r = qt.home) == null ? void 0 : r.favs) === !1 ? [] : ["favs"]].includes(e);
      }),
      opts: { favs: { h: 5 }, ...Object.fromEntries(t.map((e) => [e, { h: 5 }])) },
      tiles: t,
      known: ne,
      areasOff: []
    };
  }
  const ye = () => A ? cd() : Vi(), Vi = () => {
    let t = { cells: {}, spans: {}, hidden: [], opts: {}, ...qt.dash || {} };
    t.sumsOff && (t = { ...t, hidden: [...t.hidden, "sums"] });
    const e = ne.filter((o) => !(t.known || []).includes(o) && !t.hidden.includes(o));
    return e.length ? { ...t, hidden: [...t.hidden, ...e] } : t;
  };
  function Vo(t) {
    A || (qt = { ...qt, dash: { ...t, known: ne } }, Yn());
  }
  function qn() {
    const t = (e) => E.querySelector(e);
    return [
      ["title", t(".tfDashTitle"), "full"],
      ["sums", t(".tfDashBarRow"), "full"],
      ["wx", Hn.wx, 2],
      ["areas", t(".tfAreas"), "areas"],
      ["favs", t(".tfDash-favs"), 2],
      ["act", t(".tfDash-act"), 2],
      ["energy", t(".tfDash-energy"), 2],
      ["avg", Hn.avg, 2],
      ...ne.map((e) => [e, Hn[e], fl[e] || 1]),
      ...[...E.querySelectorAll(".tfDashTiles > [data-k]")].map((e) => [e.dataset.k, e, 1, !0])
    ].filter(([, e]) => e == null ? void 0 : e.isConnected).map(([e, o, r, c = !1]) => ({ key: e, el: o, span: r, tile: c }));
  }
  const Ll = (t, e, o) => {
    var r;
    if (t.span === "full") return e;
    if (t.span === "areas") {
      const c = Math.ceil((Cl + Math.max(0, _t().length - 1) * (qs + Ze) + Ze) / (o + Ze));
      return Math.max(Math.min(e, 2), Math.min(c, e - (((r = ye().cells.areas) == null ? void 0 : r.col) || 0)));
    }
    return Math.min(e, ye().spans[t.key] ?? t.span);
  }, fi = (t) => Oa(t.key);
  function pd(t, e, o = null) {
    const r = ye().cells, c = t.every((v) => !r[v.key] || r[v.key].col + v.cols <= e), h = (v) => r[v.key] || { row: 1e9, col: 0 };
    return (() => {
      const v = /* @__PURE__ */ new Set(), w = /* @__PURE__ */ new Map(), _ = ($, ct, j, yt) => {
        for (let Z = ct; Z < ct + yt; Z++) for (let Vt = $; Vt < $ + j; Vt++) if (v.has(Vt + "," + Z)) return !1;
        return !0;
      }, P = ($, ct, j) => {
        for (let yt = j; yt < j + $.rows; yt++) for (let Z = ct; Z < ct + $.cols; Z++) v.add(Z + "," + yt);
        w.set($.key, { col: ct, row: j, cols: $.cols, rows: $.rows });
      }, T = ($, ct, j) => {
        for (ct = Math.max(0, Math.min(e - $.cols, ct)), j = Math.max(0, j); !_(ct, j, $.cols, $.rows); ) j++;
        P($, ct, j);
      }, N = ($) => {
        for (let ct = 0; ; ct++) for (let j = 0; j <= e - $.cols; j++) if (_(j, ct, $.cols, $.rows)) {
          P($, j, ct);
          return;
        }
      };
      o && T(o, Ae.col, Ae.row);
      const tt = t.filter(($) => $ !== o), rt = ($, ct) => h($).row - h(ct).row || h($).col - h(ct).col;
      return c ? (tt.filter(($) => r[$.key]).sort(rt).forEach(($) => T($, r[$.key].col, r[$.key].row)), tt.filter(($) => !r[$.key]).forEach(N), w) : ([...tt].sort(rt).forEach(N), w);
    })();
  }
  function jo(t, e) {
    const o = /* @__PURE__ */ new Set(), r = /* @__PURE__ */ new Map(), c = (h, p, v) => {
      for (let w = p; w < p + v.rows; w++) for (let _ = h; _ < h + v.cols; _++) if (o.has(_ + "," + w)) return !1;
      return !0;
    };
    return t.forEach((h) => {
      for (let p = 0; ; p++) {
        let v = 0;
        for (; v <= e - h.cols && !c(v, p, h); ) v++;
        if (!(v > e - h.cols)) {
          for (let w = p; w < p + h.rows; w++) for (let _ = v; _ < v + h.cols; _++) o.add(_ + "," + w);
          r.set(h.key, { col: v, row: p, cols: h.cols, rows: h.rows });
          return;
        }
      }
    }), r;
  }
  function kr() {
    const t = ye(), e = new Set(t.hidden), o = qn().filter((p) => !On.includes(p.key));
    let r = ui;
    if (!r.size) {
      const p = t.pegs || 4, v = o.filter((w) => !e.has(w.key));
      v.forEach((w) => {
        w.cols = Ll(w, p, xr), w.rows = fi(w) ?? un;
      }), r = pd(v, p);
    }
    const c = (p) => !e.has(p.key) && r.get(p.key) || { row: 1e9, col: 0 };
    o.sort((p, v) => c(p).row - c(v).row || c(p).col - c(v).col);
    const h = (t.phone || []).map((p) => o.find((v) => v.key === p && !e.has(p))).filter(Boolean);
    return [...h, ...o.filter((p) => !h.includes(p))];
  }
  const uc = () => {
    const t = kr();
    t.forEach((e, o) => e.el.style.setProperty("--o", String(3 + o))), os([...qn().filter((e) => On.includes(e.key)), ...t].map((e) => e.el));
  };
  function os(t) {
    if (Ae) return;
    const e = n.activeElement;
    let o = null;
    for (const r of new Set(t.map((c) => {
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
    e && e !== n.activeElement && e.isConnected && e.focus({ preventScroll: !0 });
  }
  const Mr = (t, e) => Vo({ ...t, cells: e, pegs: Xn(E.clientWidth).n });
  function Aa() {
    var yt;
    if (!k || !E) return;
    const t = E.clientWidth, e = t < 2 * xr + Ze, o = g.classList.contains("tfDash");
    A && (Ja = !1), g.classList.toggle("tfOverview", A);
    const { n: r, w: c } = e ? { n: 2, w: Math.floor((t - Ze) / 2) } : Xn(t);
    me.classList.add("tfPegs"), me.style.setProperty("--peg-n", r), me.style.setProperty("--peg-w", c + "px");
    const h = new Set(ye().hidden);
    ne.forEach((Z) => {
      var Vt;
      return (Vt = Hn[Z]) == null ? void 0 : Vt.classList.toggle("tfNotAdded", h.has(Z) && !(Ae != null && Ae.fromTray && Ae.key === Z));
    }), ua(), g.classList.toggle("tfBoard", o), g.classList.toggle("tfEditing", o && Ja && !e);
    const p = u("dashEditNav");
    !o && bo && $s(!1), p && A ? (p.hidden = !o, bo || (p.classList.remove("active"), p.setAttribute("aria-pressed", "false"), p.setAttribute("aria-label", "Edit Home page"), p.title = "Edit", p.innerHTML = Kd)) : p && (p.hidden = !o || e, p.classList.toggle("active", Ja), p.setAttribute("aria-pressed", String(Ja)), p.setAttribute("aria-label", Ja ? "Done editing" : "Edit custom dashboard"), p.title = Ja ? "Done" : "Edit", p.innerHTML = Ja ? tu : Kd);
    const v = o ? qn() : [];
    if (!o) {
      E.style.height = "", E.querySelectorAll(".tfBoardItem").forEach((Z) => {
        Z.classList.remove("tfBoardItem", "tfBoardHidden"), Z.style.left = Z.style.top = Z.style.width = Z.style.height = "";
      }), (yt = E.querySelector(".tfDash-act > .activityRows")) == null || yt.style.removeProperty("max-height"), Ue(!1), g.classList.contains("tfDash") && uc(), ga();
      return;
    }
    if (A) {
      fc(v, t, e);
      return;
    }
    E.style.setProperty("--peg-w", c + "px");
    const w = new Set(ye().hidden), _ = c + Ze;
    Ae != null && Ae.fromTray && w.delete(Ae.key), v.forEach((Z) => Z.el.classList.toggle("tfBoardHidden", w.has(Z.key)));
    const P = v.filter((Z) => !w.has(Z.key) && getComputedStyle(Z.el).display !== "none");
    let T = 0;
    P.filter((Z) => On.includes(Z.key)).forEach((Z) => {
      Z.el.classList.add("tfBoardItem"), Object.assign(Z.el.style, { width: t + "px", height: "", left: "0px", top: T + "px" });
      const Vt = Z.key === "sums" && Z.el.querySelector(".tfDash-bar"), Ne = Vt ? Vt.querySelectorAll(".activityRow").length : 0;
      Vt && (Vt.style.maxWidth = "none");
      for (let le = 1; Vt && le <= Ne && (Vt.style.setProperty("--bar-cols", String(Math.ceil(Ne / le))), !(Vt.offsetWidth <= t)); le++)
        ;
      Vt && (Vt.style.maxWidth = ""), T += Z.el.offsetHeight + Ze;
    }), qa = T;
    const N = P.filter((Z) => !On.includes(Z.key));
    N.forEach((Z) => {
      Z.cols = Ll(Z, r, c), Z.el.classList.add("tfBoardItem"), Z.el.style.width = (Z.cols === r ? t : Z.cols * c + (Z.cols - 1) * Ze) + "px", Z.el.style.height = "", Z.rows = fi(Z) ?? Math.max(1, Math.ceil((Z.el.offsetHeight + Ze - 6) / Sn));
    });
    const tt = Ae && N.find((Z) => Z.key === Ae.key), rt = e && kr().map((Z) => Z.key), $ = (Z) => rt.includes(Z.key) ? rt.indexOf(Z.key) : -1, ct = e ? jo([...N].sort((Z, Vt) => $(Z) - $(Vt)), r) : pd(N, r, tt);
    ct.forEach((Z) => Object.assign(Z, { x: Z.cols === r ? 0 : Z.col * _, y: qa + Z.row * Sn, w: Z.cols === r ? t : Z.cols * c + (Z.cols - 1) * Ze, h: Z.rows * Sn - Ze })), N.forEach((Z) => {
      const Vt = ct.get(Z.key);
      Z.el.style.height = Vt.h + "px", Z.el.dataset.rows = e && Z.key === "wx" ? 5 : Oa(Z.key), Z.el.toggleAttribute("data-narrow", !e && Vt.cols === 1 && r > 1), Z.el.dataset.cols = Vt.cols, Z.el.classList.contains("tfDac") && Z.el.style.setProperty("--tf-dac-pad", Vt.h - cc + "px"), !(Z === tt && !Ae.fromTray) && (Z.el.style.left = Vt.x + "px", Z.el.style.top = Vt.y + "px");
    }), e || (ui = ct), os([...P.filter((Z) => On.includes(Z.key)), ...N.slice().sort((Z, Vt) => ct.get(Z.key).row - ct.get(Vt.key).row || ct.get(Z.key).col - ct.get(Vt.key).col)].map((Z) => Z.el)), [["favs", ".tfDash-favs"], ["act", ".tfDash-act"]].forEach(([Z, Vt]) => {
      const Ne = ct.get(Z), le = Ne && E.querySelector(Vt), je = le == null ? void 0 : le.querySelector(":scope > .activityRows"), Ra = le == null ? void 0 : le.querySelector(":scope > .activityHeader");
      if (!je || !Ra) return;
      const te = je.getBoundingClientRect().top - le.getBoundingClientRect().top, Tt = Ne.rows === 1 ? Ne.h : Math.floor(Ne.h - te - parseFloat(getComputedStyle(le).paddingBottom)), ge = Math.max(1, Math.floor(Tt / pc));
      je.style.setProperty("--fill-row", (Tt / ge).toFixed(2) + "px"), je.style.maxHeight = Tt + "px";
    }), ho = Math.max(0, ...[...ct.values()].map((Z) => Z.row + Z.rows));
    let j = qa + ho * Sn - Ze;
    j = Ue(Ja && !e, N, ct, j, r, c), E.style.height = j + "px", requestAnimationFrame(() => g.classList.add("tfBoardReady")), v.forEach((Z) => hi.observe(Z.el)), Js(), ga();
  }
  const ya = { gap: 20, phoneGap: 16, inner: 16, col: 252, colMin: 200, cols: 5, row: 337, nameGap: 28, sumsGap: 16 }, ud = (t) => t.classList.toggle("hcMore", t.scrollHeight - t.scrollTop - t.clientHeight > 1);
  let ra = null, Al = [], mo = /* @__PURE__ */ new Map();
  function El(t) {
    let e = E.querySelector(".hcHomeLand");
    if (!t) {
      e == null || e.remove();
      return;
    }
    e || (e = Object.assign(document.createElement("div"), { className: "tfBoardLand hcHomeLand" }), E.appendChild(e)), Object.assign(e.style, { left: t.x + "px", top: t.y + "px", width: t.w + "px", height: t.h + "px" });
  }
  function Sr(t) {
    if (!A || !bo || t.button !== 0 || E.clientWidth < 2 * xr + Ze) return;
    const e = t.target.closest(".tfBoardItem"), o = e && qn().find((v) => v.el === e);
    if (!o || On.includes(o.key)) return;
    t.preventDefault();
    const r = E.getBoundingClientRect(), c = mo.get(o.key);
    ra = { key: o.key, el: e, on: !1, x0: t.clientX, y0: t.clientY, left: c.x, top: c.y, order: [...Al] };
    const h = (v) => {
      const w = v.clientX - ra.x0, _ = v.clientY - ra.y0;
      if (!ra.on && Math.hypot(w, _) < 5) return;
      ra.on || (ra.on = !0, e.classList.add("tfDragging"), za() || e.animate([{ scale: "1" }, { scale: "1.05" }, { scale: "1.02" }], { duration: 260, easing: "cubic-bezier(.2,1.35,.4,1)" })), Object.assign(e.style, { left: ra.left + w + "px", top: ra.top + _ + "px" });
      const P = v.clientX - r.left, T = v.clientY - r.top + E.scrollTop;
      let N = null, tt = 1 / 0;
      if (mo.forEach((j, yt) => {
        if (yt === o.key) return;
        const Z = Math.hypot(P - (j.x + j.w / 2), T - (j.y + j.h / 2));
        Z < tt && (tt = Z, N = { key: yt, b: j });
      }), !N) return;
      const rt = ra.order.filter((j) => j !== o.key), $ = rt.indexOf(N.key) + (P > N.b.x + N.b.w / 2 ? 1 : 0), ct = [...rt.slice(0, $), o.key, ...rt.slice($)];
      ct.join() !== ra.order.join() ? (ra.order = ct, Aa()) : El(mo.get(o.key));
    }, p = () => {
      removeEventListener("pointermove", h), removeEventListener("pointerup", p), removeEventListener("pointercancel", p);
      const v = ra;
      ra = null, e.classList.remove("tfDragging"), v.on && Ha({ order: v.order }), Aa(), v.on && !za() && setTimeout(() => fp(e), 340);
    };
    addEventListener("pointermove", h), addEventListener("pointerup", p), addEventListener("pointercancel", p);
  }
  function fc(t, e, o) {
    var te;
    const r = new Set(ye().hidden);
    t.forEach((Tt) => Tt.el.classList.toggle("tfBoardHidden", r.has(Tt.key)));
    const c = t.filter((Tt) => !r.has(Tt.key) && getComputedStyle(Tt.el).display !== "none"), h = o ? ya.phoneGap : ya.gap, p = o ? 2 : Math.max(2, Math.min(ya.cols, Math.floor((e + h) / (ya.colMin + h)))), v = o ? Math.floor((e - h) / 2) : Math.min(ya.col, Math.floor((e - (p - 1) * h) / p)), w = (Tt) => Tt * v + (Tt - 1) * (Tt === 2 ? ya.inner : h), _ = (Tt) => Tt * (v + h) - (p >= 3 && Tt >= 2 ? h - ya.inner : 0), P = p * v + (p - 1) * h - (p >= 3 ? h - ya.inner : 0);
    let T = 0;
    const N = Ui();
    g.classList.toggle("hcSumsFit", bd()), g.classList.toggle("hcFavStrip", N);
    const tt = c.filter((Tt) => On.includes(Tt.key) || N && Tt.key === "favs");
    tt.sort((Tt, ge) => ["title", "sums", "favs"].indexOf(Tt.key) - ["title", "sums", "favs"].indexOf(ge.key)), tt.forEach((Tt) => {
      Tt.el.classList.add("tfBoardItem"), Tt.el.toggleAttribute("data-narrow", !1), Object.assign(Tt.el.style, { width: (Tt.key === "title" ? e : P) + "px", height: "", left: "0px", top: T + "px" });
      const ge = Tt.key !== "title" && (Tt.el.querySelector(".tfDash-bar>.activityRows") || Tt.key === "favs" && Tt.el.querySelector(":scope>.activityRows")), Ln = ge ? ge.children.length : 0;
      if (ge && (ge.classList.remove("hcBarRows"), !o && ge.scrollWidth > ge.clientWidth + 1))
        for (let Ki = 2; Ki <= Ln && (ge.classList.add("hcBarRows"), ge.style.setProperty("--bar-cols", String(Math.ceil(Ln / Ki))), !(ge.scrollWidth <= ge.clientWidth + 1)); Ki++)
          ;
      T += Tt.el.offsetHeight + (Tt.key === "title" ? ya.nameGap : ya.sumsGap);
    });
    const rt = ["favs", ...dd()], $ = (ra == null ? void 0 : ra.order) || ((te = qt.home) == null ? void 0 : te.order), ct = $ ? [...$.filter((Tt) => rt.includes(Tt)), ...rt.filter((Tt) => !$.includes(Tt))] : rt;
    Al = ct;
    const j = c.filter((Tt) => !On.includes(Tt.key) && !(N && Tt.key === "favs")).sort((Tt, ge) => (ct.indexOf(Tt.key) + 1 || 99) - (ct.indexOf(ge.key) + 1 || 99)), yt = /* @__PURE__ */ new Set(), Z = /* @__PURE__ */ new Map();
    j.forEach((Tt) => {
      const ge = Math.min(p, Tt.key === "favs" ? 2 : 1);
      for (let Ln = 0; ; Ln++) {
        const Ki = [...Array(p - ge + 1).keys()].find((Nd) => [...Array(ge).keys()].every((Hd) => !yt.has(Ln + "," + (Nd + Hd))));
        if (Ki != null) {
          [...Array(ge).keys()].forEach((Nd) => yt.add(Ln + "," + (Ki + Nd))), Z.set(Tt.key, { r: Ln, c: Ki, cols: ge });
          break;
        }
      }
    });
    const Vt = Math.max(0, ...[...Z.values()].map((Tt) => Tt.r + 1)), Ne = [];
    j.forEach((Tt) => {
      const ge = Z.get(Tt.key);
      Tt.el.classList.add("tfBoardItem"), Tt.el.dataset.rows = 5, Tt.el.dataset.cols = ge.cols, Tt.el.toggleAttribute("data-narrow", !1), Object.assign(Tt.el.style, { width: w(ge.cols) + "px", height: o ? "" : ya.row + "px" });
    }), o && j.forEach((Tt) => {
      const ge = Z.get(Tt.key);
      Ne[ge.r] = Math.max(Ne[ge.r] || 0, Tt.el.offsetHeight);
    }), j.forEach((Tt, ge) => Tt.el.style.setProperty("--o", String(3 + ge)));
    let le = T;
    const je = [];
    for (let Tt = 0; Tt < Vt; Tt++)
      je[Tt] = le, le += (o ? Ne[Tt] || 0 : ya.row) + h;
    mo = /* @__PURE__ */ new Map(), j.forEach((Tt) => {
      const ge = Z.get(Tt.key), Ln = { x: _(ge.c), y: je[ge.r], w: w(ge.cols), h: o ? Ne[ge.r] : ya.row };
      if (mo.set(Tt.key, Ln), Tt.el.style.height = Ln.h + "px", ra != null && ra.on && ra.key === Tt.key) {
        El(Ln);
        return;
      }
      Object.assign(Tt.el.style, { left: Ln.x + "px", top: Ln.y + "px" });
    }), ra != null && ra.on || El(null), E.style.height = (Vt ? le - h : T) + "px", os([...tt, ...j.slice().sort((Tt, ge) => Z.get(Tt.key).r - Z.get(ge.key).r || Z.get(Tt.key).c - Z.get(ge.key).c)].map((Tt) => Tt.el)), Ue(!1), t.forEach((Tt) => [...Tt.el.children].forEach((ge) => ge.toggleAttribute("inert", bo)));
    const Ra = E.querySelector(".tfDash-favs>.activityRows");
    Ra && (Ra.classList.toggle("hcFadeList", !N), ud(Ra)), requestAnimationFrame(() => g.classList.add("tfBoardReady")), t.forEach((Tt) => hi.observe(Tt.el)), ga();
  }
  const is = () => {
    Tl || (Tl = !0, requestAnimationFrame(() => {
      Tl = !1, Aa();
    }));
  }, hi = new ResizeObserver(() => {
    Ae || is();
  });
  function Cr(t, e, o) {
    const r = o + Ze, c = t * o + (t - 1) * Ze, h = e * Sn - Ze, p = Ze / 2, v = r / Math.max(1, Math.round(r / (Sn / 4))), w = Sn / 4, _ = 6;
    let P = "";
    for (let T = 0; T <= t; T++) for (let N = 0; N <= e; N++) {
      const tt = T * r - p, rt = N * Sn - p;
      P += "M" + (tt - _) + " " + rt + "H" + (tt + _) + "M" + tt + " " + (rt - _) + "V" + (rt + _);
    }
    return '<svg width="' + c + '" height="' + h + '" viewBox="0 0 ' + c + " " + h + '"><defs><pattern id="tfGridDots" patternUnits="userSpaceOnUse" x="' + -p + '" y="' + -p + '" width="' + v.toFixed(3) + '" height="' + w + '"><circle cx="0" cy="0" r="1.4"></circle><circle cx="' + v.toFixed(3) + '" cy="0" r="1.4"></circle><circle cx="0" cy="' + w + '" r="1.4"></circle><circle cx="' + v.toFixed(3) + '" cy="' + w + '" r="1.4"></circle></pattern></defs><rect class="tfGridDots" x="' + -p + '" y="' + -p + '" width="' + (c + Ze) + '" height="' + (h + Ze) + '" fill="url(#tfGridDots)"></rect><path class="tfGridCross" d="' + P + '"></path></svg>';
  }
  function Ue(t, e = [], o = /* @__PURE__ */ new Map(), r = 0, c = 1, h = xr) {
    E.querySelectorAll(".tfEditChips").forEach((P) => {
      (!t || !P.closest(".tfBoardItem")) && P.remove();
    }), E.querySelectorAll(".tfFavHides").forEach((P) => P.remove()), E.querySelectorAll(".tfBoardItem").forEach((P) => [...P.children].forEach((T) => {
      T.classList.contains("tfEditChips") || T.toggleAttribute("inert", t);
    }));
    let p = E.querySelector(".tfBoardCells"), v = E.querySelector(".tfBoardLand");
    if (!t)
      return p == null || p.remove(), v == null || v.remove(), na(), r;
    const w = ho + Ml;
    if (p || (p = Object.assign(document.createElement("div"), { className: "tfBoardCells" }), p.setAttribute("aria-hidden", "true"), E.prepend(p)), p.style.top = qa + "px", p.dataset.size !== c + "x" + w + "x" + h && (p.dataset.size = c + "x" + w + "x" + h, p.innerHTML = Cr(c, w, h)), r = Math.max(r, qa + w * Sn - Ze), e.forEach((P) => {
      const T = P.el;
      !T || T.querySelector(":scope > .tfEditChips") || T.insertAdjacentHTML("beforeend", '<div class="tfEditChips"><span class="tfEditGrip" aria-hidden="true">' + Yd + '</span><button class="tfEditChip" type="button" data-board-more="' + J(P.key) + '" aria-label="' + J(fn(P.key)) + ' options" aria-haspopup="menu">' + Pm + "</button></div>");
    }), Ae && o.has(Ae.key)) {
      v || (v = Object.assign(document.createElement("div"), { className: "tfBoardLand" }), E.appendChild(v));
      const P = o.get(Ae.key);
      Object.assign(v.style, { left: P.x + "px", top: P.y + "px", width: P.w + "px", height: P.h + "px" });
    } else v == null || v.remove();
    const _ = E.querySelector(".tfDash-favs.tfBoardItem:not(.tfBoardHidden)");
    if (_) {
      const P = _.getBoundingClientRect();
      _.insertAdjacentHTML("beforeend", '<div class="tfFavHides">' + [..._.querySelectorAll('[data-k^="fav:"]')].map((T) => {
        const N = T.getBoundingClientRect(), tt = T.dataset.k.slice(4);
        return '<button class="tfFavHide" type="button" data-fav-hide="' + J(tt) + '" aria-label="Hide ' + J(Pt(tt)) + ' from the dashboard" style="left:' + Math.round(N.right - P.left - 42) + "px;top:" + Math.round(N.top - P.top + (N.height - 32) / 2) + 'px">' + Xp + "</button>";
      }).join("") + "</div>");
    }
    return r;
  }
  let mi = "";
  function Tr(t) {
    Ja = t, t || (Ae = null, Vn = Jn = !1, na()), Aa(), t ? mi = JSON.stringify(qt) : mi && JSON.stringify(qt) !== mi && tn("Changes saved");
  }
  function _l(t, e) {
    var $, ct;
    na();
    const o = ui.get(t), { n: r } = Xn(E.clientWidth), c = ye(), h = c.spans[t] ?? (Yt(t) ? 1 : 2);
    if (!o) return;
    const p = o.cols >= r, v = (j, yt, Z) => '<button type="button" role="menuitem" data-board-act="' + j + '"' + (Z ? " disabled" : "") + ">" + yt + "</button>", w = Object.assign(document.createElement("div"), { className: "tfBoardMenu" });
    w.setAttribute("role", "menu"), w.setAttribute("aria-label", fn(t) + " options");
    const _ = E.querySelector('.tfDashTiles > [data-k="' + CSS.escape(t) + '"]'), P = ns(t), T = Oa(t), N = '<div class="tfHeight" role="group" aria-label="Height"><span class="tfHeightLabel" aria-hidden="true">Height</span><div class="tfHeightTabs">' + Os.map((j, yt) => '<button type="button" role="menuitemradio" aria-checked="' + (yt + 1 === T) + '" aria-label="' + j + ", " + (yt + 1) + (yt ? " rows" : " row") + '" data-board-act="h:' + (yt + 1) + '"' + (yt < P ? "" : " disabled") + ">" + j + "</button>").join("") + "</div></div>", tt = yr.includes(t) || Yt(t) ? '<div class="tfHeight tfWidth" role="group" aria-label="Width"><span class="tfHeightLabel" aria-hidden="true">Width</span><div class="tfHeightTabs">' + lc.map((j, yt) => '<button type="button" role="menuitemradio" aria-checked="' + (yt + 1 === Math.min(h, r)) + '" aria-label="' + j + ", " + (yt + 1) + (yt ? " columns" : " column") + '" data-board-act="w:' + (yt + 1) + '"' + (yt < r ? "" : " disabled") + ">" + j + "</button>").join("") + "</div></div>" : "";
    w.innerHTML = N + tt + (t === "energy" ? v("graph", ((($ = c.opts.energy) == null ? void 0 : $.graph) || "above") === "above" ? "Graph below" : "Graph above") : "") + v("left", "Move left", p || o.col === 0) + v("right", "Move right", p || o.col + o.cols >= r) + v("up", "Move up", o.row <= 0) + v("down", "Move down") + (_ ? v("remove", "Remove") : v("hide", "Hide")), E.appendChild(w);
    const rt = Math.min(o.x + o.w - w.offsetWidth, E.clientWidth - w.offsetWidth);
    Object.assign(w.style, { left: Math.max(0, rt) + "px", top: o.y + 28 + "px" }), Qa = { key: t, menu: w, opener: e }, (ct = w.querySelector("button:not([disabled])")) == null || ct.focus();
  }
  function na(t) {
    if (!Qa) return;
    const { menu: e, opener: o } = Qa;
    Qa = null, e.remove(), t && (o == null || o.focus());
  }
  const zo = () => Object.fromEntries([...ui].map(([t, e]) => [t, { col: e.col, row: e.row }]));
  function fd(t, e) {
    var v, w;
    if (e === "remove") {
      na(), hc(t);
      return;
    }
    const o = qt, r = ye(), c = zo(), h = c[t] || { col: 0, row: 0 };
    e.startsWith("w:") && (r.spans = { ...r.spans, [t]: e === "w:full" ? "full" : Number(e.slice(2)) }), e.startsWith("h:") && (r.opts = { ...r.opts, [t]: { ...r.opts[t] || {}, h: Number(e.slice(2)), tall: void 0 } }), e === "graph" && (r.opts = { ...r.opts, energy: { ...r.opts.energy || {}, graph: (((v = r.opts.energy) == null ? void 0 : v.graph) || "above") === "above" ? "below" : "above" } }), e === "left" && (c[t] = { ...h, col: h.col - 1 }), e === "right" && (c[t] = { ...h, col: h.col + 1 }), e === "up" && (c[t] = { ...h, row: h.row - 1 }), e === "down" && (c[t] = { ...h, row: h.row + 1 }), e === "hide" && (r.hidden = [.../* @__PURE__ */ new Set([...r.hidden, t])]), ["left", "right", "up", "down"].includes(e) && (Ae = { key: t, col: c[t].col, row: c[t].row }), Mr(r, c), Ae && (Aa(), Ae = null, Mr(ye(), zo()));
    const p = /^[hw]:/.test(e) && !za() && (Qa == null ? void 0 : Qa.menu.querySelector('[data-board-act="' + CSS.escape(e) + '"]'));
    if (p) {
      const _ = Qa;
      p.parentElement.querySelectorAll("[aria-checked]").forEach((P) => P.setAttribute("aria-checked", String(P === p))), setTimeout(() => {
        Qa === _ && na();
      }, ba.tabs.dur);
    } else na();
    e === "graph" && (ln.delete("dash:energy"), sa()), e.startsWith("h:") && t.includes(".") && sa(), Aa(), e !== "hide" ? (w = E.querySelector('[data-board-more="' + CSS.escape(t) + '"]')) == null || w.focus() : tn(fn(t) + " hidden", Gs(o));
  }
  const Dl = (t) => {
    var e;
    return ne.includes(t) && !(((e = qt.dash) == null ? void 0 : e.cells) || {})[t] ? " added" : " put back";
  };
  function Ws(t) {
    const e = ye(), o = fn(t) + Dl(t);
    Vo({ ...e, hidden: e.hidden.filter((r) => r !== t) }), Aa(), tn(o);
  }
  const Vs = () => ye().tiles || [...E.querySelectorAll(".tfDashTiles > [data-k]")].map((t) => t.dataset.k).filter((t) => !ye().hidden.includes(t));
  function hd(t, e) {
    const o = ye();
    Mr({ ...o, tiles: t, hidden: o.hidden.filter((r) => !r.includes(".")) }, e), sa(), ga();
  }
  const md = (t) => {
    hd([...Vs().filter((e) => e !== t), t], zo()), tn(fn(t) + " added"), Bl(t);
  }, hc = (t) => {
    const e = qt, o = zo();
    delete o[t], hd(Vs().filter((r) => r !== t), o), tn(fn(t) + " removed", Gs(e));
  };
  let js = 0;
  function tn(t, e = null) {
    var p;
    const o = u("toast");
    if (!o) return;
    if (ph(o, t), e) {
      const v = Object.assign(document.createElement("button"), { type: "button", className: "toastAction", textContent: "Undo" });
      v.addEventListener("click", () => {
        clearTimeout(js), o.classList.remove("show", "withAction"), e();
      }), o.appendChild(v);
    }
    const r = g.getBoundingClientRect(), c = (p = n.querySelector(".bottomNav")) == null ? void 0 : p.getBoundingClientRect(), h = be.classList.contains("open") && !Wn ? Math.min(r.right, be.getBoundingClientRect().left) : r.right;
    o.style.left = (r.left + h) / 2 + "px", o.style.bottom = (c != null && c.height ? window.innerHeight - c.top + 12 : 26) + "px", o.classList.add("tfToast", "show"), o.classList.toggle("withAction", !!e), uh(o), clearTimeout(js), js = setTimeout(() => o.classList.remove("show", "withAction"), e ? 5e3 : ba.confirm.stay);
  }
  const rs = 700, mc = 1e3, en = Object.assign(document.createElement("div"), { className: "tfTooltip", hidden: !0 });
  en.setAttribute("role", "tooltip"), en.setAttribute("aria-hidden", "true"), g.appendChild(en);
  let ss = null, ls = 0, Lr = 0, gd = -1 / 0;
  const gi = (t) => {
    if (t.nodeType !== 1) return !1;
    const e = getComputedStyle(t);
    return e.textOverflow === "ellipsis" && t.scrollWidth > t.clientWidth + 1 || e.webkitLineClamp !== "none" && t.scrollHeight > t.clientHeight + 1;
  }, ji = (t) => {
    for (let e = t; e && e !== g; e = e.parentElement) if (gi(e)) return e;
    return null;
  };
  function Go(t, e) {
    clearTimeout(ls), clearTimeout(Lr);
    const o = () => {
      if (!t.isConnected) return;
      ss = t, en.textContent = e, en.hidden = !1;
      const r = t.getBoundingClientRect(), c = en.getBoundingClientRect(), h = r.top - c.height - 8 >= 8 ? r.top - c.height - 8 : r.bottom + 8;
      en.style.left = Math.max(8, Math.min(window.innerWidth - c.width - 8, r.left + r.width / 2 - c.width / 2)) + "px", en.style.top = h + "px";
    };
    !en.hidden || performance.now() - gd < mc ? o() : ls = setTimeout(o, rs);
  }
  function ds() {
    clearTimeout(ls), clearTimeout(Lr), en.hidden || (gd = performance.now()), en.hidden = !0, ss = null;
  }
  n.addEventListener("pointerover", (t) => {
    if (t.pointerType === "touch") return;
    if (en.contains(t.target)) {
      clearTimeout(Lr);
      return;
    }
    const e = ji(t.target);
    if (e && Ut.names === "scroll" && e.matches(Uo)) {
      zi(e);
      return;
    }
    if (e) {
      e !== ss ? Go(e, e.textContent.trim()) : clearTimeout(Lr);
      return;
    }
    clearTimeout(ls), clearTimeout(Lr), Lr = setTimeout(ds, 120);
  }), n.addEventListener("focusin", (t) => {
    var r;
    const e = t.target;
    if (!((r = e.matches) != null && r.call(e, ":focus-visible"))) return;
    let o = [e, ...e.querySelectorAll("*")].filter(gi);
    Ut.names === "scroll" && (o.filter((c) => c.matches(Uo)).forEach(zi), o = o.filter((c) => !c.matches(Uo))), o.length && Go(e, o.map((c) => c.textContent.trim()).join(" · "));
  }), n.addEventListener("focusout", (t) => {
    t.target === ss && ds();
  }), n.addEventListener("keydown", (t) => {
    t.key === "Escape" && !en.hidden && (t.stopPropagation(), ds());
  }, !0), window.addEventListener("scroll", () => {
    (!en.hidden || ls) && ds();
  }, { capture: !0, passive: !0 });
  const Uo = ".activityRowName,.activityRowMeta", zs = /* @__PURE__ */ new WeakSet();
  function zi(t) {
    var o;
    if (Ut.names !== "scroll" || zs.has(t) || t.closest("[inert]") || (o = window.matchMedia) != null && o.call(window, "(prefers-reduced-motion: reduce)").matches) return;
    zs.add(t);
    const e = () => Promise.all([t.closest(".workoutPanel"), t.closest(".panelExpanded")].filter(Boolean).flatMap((r) => r.getAnimations()).map((r) => r.finished.catch(() => {
    })));
    setTimeout(async () => {
      await e();
      const r = t.isConnected && !t.closest("[inert]") ? t.scrollWidth - t.clientWidth : 0;
      if (r < 2) {
        zs.delete(t);
        return;
      }
      const c = r / 30 * 1e3, h = c + 1e3 + c;
      t.style.textOverflow = "clip";
      const p = t.animate([
        { textIndent: "0px", offset: 0, easing: "ease-in-out" },
        { textIndent: -r + "px", offset: c / h },
        { textIndent: -r + "px", offset: (1e3 + c) / h, easing: "ease-in-out" },
        { textIndent: "0px", offset: 1 }
      ], { duration: h });
      p.onfinish = p.oncancel = () => {
        t.style.textOverflow = "", zs.delete(t);
      };
    }, 600);
  }
  const vd = new IntersectionObserver((t) => t.forEach((e) => {
    e.isIntersecting && !e.target.closest("[inert]") && (vd.unobserve(e.target), zi(e.target));
  }), { threshold: 1 });
  let vi = !1;
  new MutationObserver(() => {
    vi || Ut.names !== "scroll" || (vi = !0, setTimeout(() => {
      vi = !1, n.querySelectorAll(Uo).forEach((t) => {
        !t.dataset.glided && gi(t) && (t.dataset.glided = "1", vd.observe(t));
      });
    }, 300));
  }).observe(n, { childList: !0, subtree: !0 });
  const Gs = (t) => () => {
    qt = t, Yn(), sa(), Aa(), ga();
  };
  function Bl(t) {
    const e = () => E.querySelector('.tfDashTiles > [data-k="' + CSS.escape(t) + '"]');
    setTimeout(() => {
      var p;
      const o = e();
      if (!o) return;
      const r = (p = window.matchMedia) == null ? void 0 : p.call(window, "(prefers-reduced-motion: reduce)").matches, c = o.getBoundingClientRect();
      (c.top < 0 || c.bottom > window.innerHeight) && o.scrollIntoView({ behavior: r ? "auto" : "smooth", block: "center" });
      const h = (v) => "0 0 0 4px color-mix(in srgb,var(--primary) " + v + "%,transparent),0 0 24px color-mix(in srgb,var(--primary) " + v + "%,transparent)";
      o.animate([{ boxShadow: h(55) }, { boxShadow: h(0) }], { duration: 1500, easing: r ? "steps(1, end)" : "ease-out" });
    }, Ar(t) ? 260 : 0);
  }
  function Ar(t) {
    const e = ui.get(t);
    if (!e || !be.classList.contains("open") || Wn) return !1;
    const { n: o, w: r } = Xn(E.clientWidth), c = be.getBoundingClientRect().left - E.getBoundingClientRect().left, h = (w) => w * (r + Ze) + e.cols * r + (e.cols - 1) * Ze <= c;
    if (h(e.col)) return !1;
    const p = /* @__PURE__ */ new Set();
    ui.forEach((w, _) => {
      if (_ !== t) for (let P = w.row; P < w.row + w.rows; P++) for (let T = w.col; T < w.col + w.cols; T++) p.add(T + "," + P);
    });
    const v = (w, _) => {
      for (let P = _; P < _ + e.rows; P++) for (let T = w; T < w + e.cols; T++) if (p.has(T + "," + P)) return !1;
      return !0;
    };
    for (let w = 0; w <= ho; w++) for (let _ = 0; _ + e.cols <= o && h(_); _++)
      if (v(_, w))
        return Mr(ye(), { ...zo(), [t]: { col: _, row: w } }), Aa(), !0;
    return !1;
  }
  const Er = /^(light|switch|cover|climate|fan|lock|valve|media_player|humidifier|vacuum|scene|script|alarm_control_panel|water_heater|input_boolean)\./, Rl = [["page", "Page"], ["cards", "Cards"], ["areas", "Areas"], ["favs", "Favourites"]];
  let cs = "page";
  const _r = (t) => t.matches('[data-tray="welcome"],[data-tray="phone"]') ? "page" : t.querySelector("[data-room-add]") ? "areas" : t.querySelector('[data-tray="favs"]') ? "favs" : "cards";
  function Gi(t = !1) {
    const e = be.querySelector(".tfTrayInner"), o = be.querySelector(".hcTrayTabs"), r = o.querySelector(".rubberIndicator");
    let c = !0;
    e.querySelectorAll(":scope>.tfTraySection").forEach((p) => {
      p.hidden = _r(p) !== cs, p.classList.toggle("hcFirst", !p.hidden && c), p.hidden || (c = !1);
    }), o.querySelectorAll("[data-tray-tab]").forEach((p) => {
      const v = p.dataset.trayTab === cs;
      p.classList.toggle("active", v), p.setAttribute("aria-selected", String(v));
    });
    const h = o.querySelector(".tab.active");
    h != null && h.offsetWidth && (r.style.transition = "none", t ? tc(r, r.offsetLeft, r.offsetWidth, h.offsetLeft, h.offsetWidth) : (r.style.left = h.offsetLeft + "px", r.style.width = h.offsetWidth + "px"));
  }
  const be = Object.assign(document.createElement("aside"), { className: "tfEditTray" });
  be.setAttribute("aria-label", "Edit custom dashboard"), be.innerHTML = '<button class="tfTrayTuck" type="button" data-tray-tuck></button><div class="tfTrayInner"><div class="tfTrayHead"><div class="activityTitle">Edit custom dashboard</div><button class="pill" type="button" data-tray-done>Done</button></div><div class="tabs rubberTabs hcTrayTabs" role="tablist" aria-label="Edit custom dashboard"><div class="rubberIndicator" aria-hidden="true"></div>' + Rl.map(([t, e], o) => '<button class="tab segBtn' + (o ? "" : " active") + '" type="button" role="tab" aria-selected="' + !o + '" data-tray-tab="' + t + '">' + e + "</button>").join("") + '</div><section class="tfTraySection" data-tray="welcome"></section><section class="tfTraySection" data-tray="cards"></section><section class="tfTraySection" data-tray="weather"></section><section class="tfTraySection"><div class="sectionLabel">Tiles</div><p class="tfTrayNote">Remove a tile from its ⋯.</p><button class="pill tfTrayAdd hcAddBtn" type="button" data-tile-add aria-expanded="false">' + Zd + '<span>Add tile</span></button><div class="tfTrayPick" data-pick="tiles" hidden><input class="addInput" type="search" placeholder="Search devices" aria-label="Search devices" autocomplete="off" data-tile-search><ul class="tfTrayList" data-tray="tilepick"></ul></div></section><section class="tfTraySection"><div class="sectionLabel">Areas</div><p class="tfTrayNote">Which areas the Areas card shows, and one area on its own instead.</p><button class="pill tfTrayAdd" type="button" data-area-choose aria-expanded="false">Choose areas</button><button class="pill tfTrayAdd hcAddBtn" type="button" data-room-add aria-expanded="false">' + Zd + '<span>Add area</span></button><ul class="tfTrayList" data-tray="roompick" hidden></ul></section><section class="tfTraySection" data-tray="phone"></section><section class="tfTraySection"><div class="sectionLabel">Favourites</div><ul class="tfTrayList" data-tray="favs"></ul><button class="pill tfTrayAdd hcAddBtn" type="button" data-fav-add aria-expanded="false">' + Zd + '<span>Add favourite</span></button><div class="tfTrayPick" data-pick="favs" hidden><input class="addInput" type="search" placeholder="Search devices" aria-label="Search devices" autocomplete="off" data-fav-search><ul class="tfTrayList" data-tray="pick"></ul></div><div class="toggleRow tfTraySuggest" data-tray="suggest"></div></section></div>', g.appendChild(be);
  const an = Object.assign(document.createElement("div"), { className: "card tfTrayPop" });
  an.setAttribute("role", "dialog"), an.setAttribute("aria-label", "Areas"), an.hidden = !0, g.appendChild(an);
  const ps = () => be.querySelector("[data-area-choose]");
  function Pl() {
    const t = new Set(_t().map((e) => e.id));
    an.innerHTML = '<div class="tfTrayPopTitle">Areas</div>' + jt.map((e) => '<div class="tfTrayPopRow"><button class="switch' + (t.has(e.id) ? " on" : "") + '" type="button" role="switch" aria-checked="' + t.has(e.id) + '" aria-label="' + J(e.name) + '" data-area-on="' + J(e.id) + '"></button><span class="tfIcon"><span class="tfAreaGlyph"' + aa("area:" + e.id, e.icon || "mdi:texture-box", e.name) + '></span></span><span class="tfTrayPopName">' + J(e.name) + "</span></div>").join(""), Zn(an);
  }
  function Nl() {
    var t;
    an.hidden || (an.hidden = !0, (t = ps()) == null || t.setAttribute("aria-expanded", "false"));
  }
  function Hl() {
    if (!an.hidden) {
      Nl();
      return;
    }
    Pl(), an.hidden = !1, ps().setAttribute("aria-expanded", "true");
    const t = ps().getBoundingClientRect();
    an.style.top = Math.max(16, Math.min(t.top - 12, innerHeight - an.offsetHeight - 16)) + "px";
  }
  an.addEventListener("click", (t) => {
    var c;
    const e = t.target.closest("[data-area-on]");
    if (!e) return;
    const o = !e.classList.contains("on"), r = new Set(((c = qt.dash) == null ? void 0 : c.areasOff) || []);
    o ? r.delete(e.dataset.areaOn) : r.add(e.dataset.areaOn), Vo({ ...ye(), areasOff: [...r] }), e.classList.toggle("on", o), e.setAttribute("aria-checked", String(o)), sa();
  }), an.addEventListener("keydown", (t) => {
    var e;
    t.key === "Escape" && (t.stopPropagation(), Nl(), (e = ps()) == null || e.focus());
  });
  let Wn = !1, Vn = !1, Jn = !1, go = !1, Va = null, Yo = !1;
  const us = {}, vo = (t, e) => {
    if (us[t] === e) return;
    us[t] = e;
    const o = be.querySelector('[data-tray="' + t + '"]');
    o.innerHTML = e, Zn(o);
  }, nn = (t, e) => '<span class="tfTrayName"><span class="activityRowName">' + J(Pt(t)) + '</span><span class="activityRowMeta">' + J(e) + "</span></span>", Ea = (t, e, o) => '<li class="tfTrayFav' + (e ? " off" : "") + '" data-tray-fav="' + J(t) + '"><span class="tfTrayGrip" aria-hidden="true">' + Yd + '</span><span class="tfIcon"' + aa(t, dn(t)) + "></span>" + nn(t, e ? "Hidden" + (ce.get(t) ? " · " + ce.get(t) : "") : ce.get(t) || We(t)) + '<button class="tfTrayBtn" type="button" data-fav-eye="' + J(t) + '" aria-pressed="' + !e + '" aria-label="' + (e ? "Show " : "Hide ") + J(Pt(t)) + ' on the dashboard">' + (e ? Xp : Nm) + "</button>" + (o ? '<button class="tfTrayBtn" type="button" data-fav-remove="' + J(t) + '" aria-label="Remove ' + J(Pt(t)) + ' from favourites">' + Ic + "</button>" : "<span></span>") + "</li>";
  function fs(t, e, o, r) {
    const c = t.trim().toLowerCase().split(/\s+/).filter(Boolean);
    return Object.keys(M).filter((p) => e(p) && !o.has(p) && M[p].state !== "unavailable").filter((p) => {
      const v = (Pt(p) + " " + (ce.get(p) || "") + " " + p).toLowerCase();
      return c.every((w) => v.includes(w));
    }).sort((p, v) => (ce.get(p) || "~").localeCompare(ce.get(v) || "~") || Pt(p).localeCompare(Pt(v))).slice(0, 40).map((p) => '<li><button class="tfTrayPickItem" type="button" ' + r + '="' + J(p) + '"><span class="tfIcon"' + aa(p, dn(p)) + "></span>" + nn(p, ce.get(p) || "—") + "</button></li>").join("") || '<li class="tfTrayNote">Nothing matches.</li>';
  }
  const gc = "https://www.home-assistant.io/dashboards/", Il = {
    welcome: ["Welcome message", "<p>Shows a <strong>greeting</strong> above your home's name: good morning, afternoon or evening, then your name.</p>"],
    favs: ["Favourite entities", "<p>The devices you use most, at the top of Home.</p><ul><li><strong>Drag</strong> one to change the order</li><li>Press <strong>×</strong> to take it off</li></ul>"],
    suggest: ["Suggested entities", "<p>Fills Favourites with devices you often use, after your own. They change as you use your home.</p>"],
    sums: ["Summaries", "<p>Each summary sums up one kind of thing across your home, like <strong>Lights</strong>: how many are on.</p><ul><li>Switch one off to hide it</li><li><strong>Drag</strong> one to change the order</li></ul>"]
  }, ma = Object.assign(document.createElement("aside"), { className: "tfEditTray hcHomeTray" });
  ma.setAttribute("aria-label", "Edit Home page"), ma.toggleAttribute("inert", !0);
  let bo = !1, jn = !1, Us = "", Ys = null, wo = "page";
  function Zs(t, e) {
    const o = ma.querySelector(".hcTrayTabs"), r = o == null ? void 0 : o.querySelector(".rubberIndicator"), c = o == null ? void 0 : o.querySelector(".tab.active");
    if (!(c != null && c.offsetWidth)) {
      requestAnimationFrame(() => {
        var h;
        return ((h = ma.querySelector(".hcTrayTabs .tab.active")) == null ? void 0 : h.offsetWidth) && Zs(t, e);
      });
      return;
    }
    r.style.transition = "none", t && e ? tc(r, e.left, e.width, c.offsetLeft, c.offsetWidth) : (r.style.left = c.offsetLeft + "px", r.style.width = c.offsetWidth + "px");
  }
  const hs = (t) => '<button class="hcInfoBtn" type="button" data-info="' + t + '" aria-expanded="false" aria-label="About ' + J(Il[t][0]) + '">' + Jp + "</button>", Cn = (t, e, o) => '<button class="switch' + (t ? " on" : "") + '" type="button" role="switch" aria-checked="' + t + '" aria-label="' + J(e) + '" ' + o + "></button>", Ks = (t) => '<button class="tfTrayBtn hcHeGrip" type="button" data-he-grip aria-label="Move ' + J(t) + '. Use the up and down arrows">' + Yd + "</button>", bd = () => {
    var t;
    return ((t = qt.home) == null ? void 0 : t.sumsWidth) === "fit";
  }, Ui = () => {
    var t;
    return ((t = qt.home) == null ? void 0 : t.favsAs) === "strip";
  }, ms = (t, e, o, r) => '<div class="hcHeLine hcHeChoiceLine"><span class="activityRowName">' + t + '</span><div class="themeChoice hcHeChoice" role="group" aria-label="' + J(t) + '">' + r.map(([c, h]) => '<button class="wxLayoutBtn" type="button" ' + e + '="' + c + '" aria-pressed="' + (o === c) + '">' + h + "</button>").join("") + "</div></div>", Fl = () => La(!0).filter((t) => Kl[t.key]).map((t) => t.key);
  function bi() {
    var p, v, w;
    if (!bo) return;
    const t = Nt(), e = (_) => '<li class="hcHeRow" data-he-id="' + J(_) + '">' + Ks(Pt(_)) + '<span class="tfIcon"' + aa(_, dn(_)) + "></span>" + nn(_, ce.get(_) || We(_)) + '<button class="tfTrayBtn" type="button" data-he-remove="' + J(_) + '" aria-label="Take ' + J(Pt(_)) + ' off Favourites">' + Ic + "</button></li>", o = (_) => {
      const P = Kl[_];
      return '<li class="hcHeRow hcHeSum" data-he-id="' + J(_) + '"' + (P.colour && Ai(P.colour) ? ' style="' + Ai(P.colour).slice(1) + '"' : "") + ">" + Ks(P.name) + '<span class="tfIcon"' + aa("", P.icon, P.name) + '></span><span class="activityRowName">' + J(P.name) + "</span>" + Cn(si(_), P.name, 'data-he-sum="' + J(_) + '"') + "</li>";
    }, r = ((p = ma.querySelector("[data-he-search]")) == null ? void 0 : p.value) || "", c = [["page", "Page"], ["favs", "Favourites"], ["sums", "Summaries"]], h = {
      page: '<div class="hcHeLine"><span class="activityRowName">Welcome message</span>' + hs("welcome") + Cn(pi(), "Welcome message", "data-he-welcome") + "</div>",
      favs: '<div class="hcHeLine"><span class="activityRowName">Show favourites</span>' + Cn(((v = qt.home) == null ? void 0 : v.favs) !== !1, "Show favourites", 'data-he-card="favs"') + '</div><hr class="hcHeRule"><div class="hcHeLabel"><span class="activityRowName">Favourite entities</span>' + hs("favs") + "</div>" + ms("Show as", "data-he-favs-as", Ui() ? "strip" : "card", [["card", "Card"], ["strip", "Strip"]]) + '<ul class="tfTrayList hcHeList" data-he-list="favs">' + (t.map(e).join("") || '<li class="tfTrayNote">No favourites yet.</li>') + '</ul><button class="pill tfTrayAdd hcAddBtn" type="button" data-he-add aria-expanded="' + jn + '">' + Zd + '<span>Add favourite</span></button><div class="tfTrayPick" data-he-pick' + (jn ? "" : " hidden") + '><input class="addInput" type="search" placeholder="Search devices" aria-label="Search devices" autocomplete="off" data-he-search value="' + J(r) + '"><ul class="tfTrayList">' + (jn ? fs(r, (_) => Er.test(_), new Set(t), "data-he-pick-id") : "") + '</ul></div><hr class="hcHeRule"><div class="hcHeLine"><span class="activityRowName">Suggested entities</span>' + hs("suggest") + Cn(Na(), "Suggested entities", "data-he-suggest") + "</div>",
      sums: '<div class="hcHeLine"><span class="activityRowName">Show summaries</span>' + hs("sums") + Cn(((w = qt.home) == null ? void 0 : w.sums) !== !1, "Show summaries", 'data-he-card="sums"') + "</div>" + ms("Width", "data-he-sums-width", bd() ? "fit" : "match", [["match", "Match the cards"], ["fit", "Fit the summaries"]]) + '<hr class="hcHeRule"><ul class="tfTrayList hcHeList" data-he-list="sums">' + Fl().map(o).join("") + "</ul>"
    };
    ma.querySelector("[data-he-body]").innerHTML = // the note about the areas page first (Matt, 12 Nov: "to the top of the rollover"), as Home Assistant's dialog has it
    '<p class="tfTrayNote hcHeAreasNote">You can rearrange your floors and areas in the order that best represents your house on the <button type="button" class="hcHeLink" data-path="/config/areas/dashboard">areas page</button>.</p><div class="tabs rubberTabs hcTrayTabs" role="tablist" aria-label="Edit Home page"><div class="rubberIndicator" aria-hidden="true"></div>' + c.map(([_, P]) => '<button class="tab segBtn' + (_ === wo ? " active" : "") + '" type="button" role="tab" aria-selected="' + (_ === wo) + '" data-he-tab="' + _ + '">' + P + "</button>").join("") + '</div><div class="hcHeTabBody" role="tabpanel">' + h[wo] + "</div>", Zs(!1), Zn(ma);
  }
  const gs = (t) => {
    qt = { ...qt, ...t }, Yn(), sa(), bi();
  }, Ha = (t) => gs({ home: { ...qt.home || {}, ...t } });
  function $s(t) {
    vs(), bo = t, jn = !1, ma.classList.toggle("open", t), ma.toggleAttribute("inert", !t), g.classList.toggle("hcHomeEditing", t), k && E && Aa();
    const e = u("dashEditNav"), o = ma.querySelector(".tfTrayHead");
    e && t && (Ys = e.parentElement, o.appendChild(e)), e && !t && Ys && Ys.appendChild(e), e && (e.classList.toggle("active", t), e.setAttribute("aria-pressed", String(t)), e.setAttribute("aria-label", t ? "Done editing Home" : "Edit Home page"), e.title = t ? "Done" : "Edit", e.innerHTML = t ? tu : Kd), t ? (Us = JSON.stringify(qt), bi()) : Us && JSON.stringify(qt) !== Us && tn("Changes saved");
  }
  ma.innerHTML = '<div class="tfTrayInner"><div class="tfTrayHead"><div class="activityTitle">Edit Home page</div></div><div class="hcHeBody" data-he-body></div></div>', g.appendChild(ma);
  let Zo = null;
  const Qn = Object.assign(document.createElement("div"), { className: "card hcInfoPop", hidden: !0 });
  Qn.setAttribute("role", "dialog"), g.appendChild(Qn);
  function vs() {
    Zo && (Zo.setAttribute("aria-expanded", "false"), Zo = null, Qn.hidden = !0);
  }
  function Ol(t) {
    const e = Zo;
    if (vs(), e === t) return;
    const [o, r] = Il[t.dataset.info];
    Qn.setAttribute("aria-label", o), Qn.innerHTML = '<div class="hcInfoTitle">' + J(o) + '</div><div class="hcInfoText">' + r + '</div><a class="hcInfoMore" href="' + gc + '" target="_blank" rel="noopener">Learn more</a>', Qn.hidden = !1, Zo = t, t.setAttribute("aria-expanded", "true");
    const c = t.getBoundingClientRect(), h = Qn.offsetWidth, p = Qn.offsetHeight;
    Qn.style.left = Math.max(8, Math.min(innerWidth - h - 8, c.left + c.width / 2 - h / 2)) + "px", Qn.style.top = (c.bottom + 8 + p > innerHeight - 8 ? Math.max(8, c.top - 8 - p) : c.bottom + 8) + "px";
  }
  n.addEventListener("pointerdown", (t) => {
    Zo && !t.composedPath().some((e) => e === Qn || e === Zo) && vs();
  }, !0), n.addEventListener("keydown", (t) => {
    var e;
    if (t.key === "Escape") {
      if (Zo) {
        t.stopPropagation();
        const o = Zo;
        vs(), o.focus();
        return;
      }
      if (jn) {
        t.stopPropagation(), jn = !1, bi();
        return;
      }
      bo && (t.stopPropagation(), $s(!1), (e = u("dashEditNav")) == null || e.focus());
    }
  }, !0);
  const vc = (t) => t.dataset.heList === "favs" ? Nt() : Fl(), hn = (t, e) => t.dataset.heList === "favs" ? gs({ favourites: e }) : Ha({ sumOrder: e });
  ma.addEventListener("keydown", (t) => {
    var v;
    const e = t.target.closest("[data-he-grip]");
    if (!e || !["ArrowUp", "ArrowDown"].includes(t.key)) return;
    t.preventDefault();
    const o = e.closest("[data-he-id]"), r = o.parentElement, c = vc(r), h = c.indexOf(o.dataset.heId), p = h + (t.key === "ArrowUp" ? -1 : 1);
    p < 0 || p >= c.length || (c.splice(p, 0, c.splice(h, 1)[0]), hn(r, c), (v = ma.querySelector('[data-he-list="' + r.dataset.heList + '"] [data-he-id="' + CSS.escape(o.dataset.heId) + '"] [data-he-grip]')) == null || v.focus());
  }), ma.addEventListener("pointerdown", (t) => {
    const e = t.target.closest("[data-he-grip]");
    if (!e || t.button !== 0) return;
    t.preventDefault();
    const o = e.closest("[data-he-id]"), r = o.parentElement;
    o.classList.add("moving");
    const c = (p) => {
      const v = [...r.children].filter((_) => _ !== o), w = v.find((_) => {
        const P = _.getBoundingClientRect();
        return p.clientY < P.top + P.height / 2;
      });
      w !== o.nextElementSibling && r.insertBefore(o, w || null);
    }, h = () => {
      removeEventListener("pointermove", c), removeEventListener("pointerup", h), o.classList.remove("moving"), hn(r, [...r.children].map((p) => p.dataset.heId).filter(Boolean));
    };
    addEventListener("pointermove", c), addEventListener("pointerup", h);
  }), ma.addEventListener("input", (t) => {
    if (t.target.matches("[data-he-search]")) {
      const e = t.target.selectionStart;
      bi();
      const o = ma.querySelector("[data-he-search]");
      o.focus(), o.setSelectionRange(e, e);
    }
  }), ma.addEventListener("click", (t) => {
    var P;
    const e = t.target, o = e.closest("[data-info]");
    if (o) {
      Ol(o);
      return;
    }
    const r = e.closest("[data-he-tab]");
    if (r) {
      const T = ma.querySelector(".hcTrayTabs .rubberIndicator"), N = { left: T.offsetLeft, width: T.offsetWidth };
      wo = r.dataset.heTab, jn = !1, vs(), bi(), Zs(!0, N), ma.querySelector(".tfTrayInner").scrollTop = 0;
      return;
    }
    if (e.closest("[data-he-welcome]")) {
      Ha({ welcome: !pi() });
      return;
    }
    const c = e.closest("[data-he-card]");
    if (c) {
      const T = c.dataset.heCard;
      Ha({ [T]: ((P = qt.home) == null ? void 0 : P[T]) === !1 });
      return;
    }
    const h = e.closest("[data-he-favs-as]");
    if (h) {
      Ha({ favsAs: h.dataset.heFavsAs });
      return;
    }
    const p = e.closest("[data-he-sums-width]");
    if (p) {
      Ha({ sumsWidth: p.dataset.heSumsWidth });
      return;
    }
    if (e.closest("[data-he-suggest]")) {
      gs({ suggest: !Na() });
      return;
    }
    const v = e.closest("[data-he-sum]");
    if (v) {
      const T = v.dataset.heSum, N = !si(T), tt = qt.home || {};
      Ha(Yp.includes(T) ? { shownSums: N ? [...tt.shownSums || [], T] : (tt.shownSums || []).filter((rt) => rt !== T) } : { hiddenSums: N ? (tt.hiddenSums || []).filter((rt) => rt !== T) : [...tt.hiddenSums || [], T] });
      return;
    }
    const w = e.closest("[data-he-remove]");
    if (w) {
      gs({ favourites: Nt().filter((T) => T !== w.dataset.heRemove) });
      return;
    }
    if (e.closest("[data-he-add]")) {
      jn = !jn, bi(), jn && ma.querySelector("[data-he-search]").focus({ preventScroll: !0 });
      return;
    }
    const _ = e.closest("[data-he-pick-id]");
    _ && (jn = !1, ma.querySelector("[data-he-search]").value = "", gs({ favourites: [...Nt(), _.dataset.hePickId] }));
  });
  function ga() {
    var _, P;
    const t = Ja && g.classList.contains("tfBoard");
    if (be.classList.toggle("open", t), be.classList.toggle("tucked", t && Wn), be.toggleAttribute("inert", !t), t || (Yo = !1), (!t || !g.classList.contains("tfEditing")) && Nl(), Wl(), !t) return;
    const e = be.querySelector("[data-tray-tuck]");
    e.innerHTML = Wn ? Fp : Qp, e.setAttribute("aria-expanded", String(!Wn)), e.setAttribute("aria-label", Wn ? "Show the edit tray" : "Tuck the edit tray away");
    const o = ye().hidden.filter((T) => !On.includes(T) && qn().some((N) => N.key === T)), r = (T, N) => '<button class="tfTrayCard" type="button" data-tray-card="' + J(T) + '" aria-label="' + J(fn(T)) + ": drag it onto the board, or press to " + N + '"><span class="tfTrayGrip" aria-hidden="true">' + Yd + "</span>" + J(fn(T)) + "</button>", c = o.filter((T) => !no.includes(T)), h = no.filter((T) => o.includes(T));
    vo("welcome", '<div class="hcHeLine"><span class="activityRowName">Welcome message</span>' + hs("welcome") + '<button class="switch' + (ye().welcome ? " on" : "") + '" type="button" role="switch" aria-checked="' + !!ye().welcome + '" aria-label="Welcome message" data-dash-welcome></button></div><div class="hcHeLine"><span class="activityRowName">Show summaries</span><button class="switch' + ((_ = qt.dash) != null && _.sumsOff ? "" : " on") + '" type="button" role="switch" aria-checked="' + !((P = qt.dash) != null && P.sumsOff) + '" aria-label="Show summaries" data-dash-sums></button></div>'), requestAnimationFrame(() => Gi(!1)), vo("cards", '<div class="sectionLabel">Hidden and new cards</div>' + (c.length ? '<div class="tfTrayCards">' + c.map((T) => r(T, "put it back")).join("") + "</div>" : '<p class="tfTrayNote">Cards you hide, and new ones, wait here.</p>')), vo("weather", '<div class="sectionLabel">Weather</div>' + (h.length ? `<p class="tfTrayNote">The Weather page's widgets. Drag one onto the board, or press to add it.</p><div class="tfTrayCards">` + h.map((T) => r(T, "add it")).join("") + "</div>" : '<p class="tfTrayNote">Every weather widget is on the board.</p>')), vo("phone", '<div class="sectionLabel">Phone</div><p class="tfTrayNote">' + (ye().phone ? "Phones have an order of their own." : "Phones follow the board's order.") + '</p><button class="pill tfTrayAdd" type="button" data-phone-toggle aria-pressed="' + Yo + '">' + (Yo ? "Hide the phone" : "Show the phone") + "</button>");
    const p = new Set(qt.favHidden || []), v = Nt(), w = [...v, ...[...p].filter((T) => !v.includes(T) && M[T])];
    if (vo("favs", w.map((T) => Ea(T, p.has(T), v.includes(T))).join("") || '<li class="tfTrayNote">No favourites yet.</li>'), be.querySelector('[data-pick="tiles"]').hidden = !Jn, be.querySelector("[data-tile-add]").setAttribute("aria-expanded", String(Jn)), Jn && vo("tilepick", fs(be.querySelector("[data-tile-search]").value, (T) => $l.includes(T.split(".")[0]), new Set(Vs()), "data-tile-pick")), be.querySelector('[data-tray="roompick"]').hidden = !go, be.querySelector("[data-room-add]").setAttribute("aria-expanded", String(go)), go) {
      const T = new Set(Vs());
      vo("roompick", jt.filter((N) => !T.has("room:" + N.id)).map((N) => '<li><button class="tfTrayPickItem" type="button" data-room-pick="' + J(N.id) + '"><span class="tfIcon"><span class="tfAreaGlyph"' + aa("area:" + N.id, N.icon || "mdi:texture-box", N.name) + '></span></span><span class="tfTrayName"><span class="activityRowName">' + J(N.name) + "</span></span></button></li>").join("") || '<li class="tfTrayNote">Every area is on the board.</li>');
    }
    be.querySelector('[data-pick="favs"]').hidden = !Vn, be.querySelector("[data-fav-add]").setAttribute("aria-expanded", String(Vn)), Vn && vo("pick", fs(be.querySelector("[data-fav-search]").value, (T) => Er.test(T), new Set(Nt()), "data-fav-pick")), vo("suggest", '<div><strong>Show suggestions</strong><div class="status">Fills the card after your favourites.</div></div><button class="switch' + (Na() ? " on" : "") + '" type="button" role="switch" aria-checked="' + Na() + '" data-fav-suggest aria-label="Show suggestions"></button>');
  }
  const Dr = (t) => {
    qt = { ...qt, ...t }, Yn(), sa(), ga();
  };
  function Br(t, e) {
    const o = qt, r = new Set(qt.favHidden || []);
    e ? r.delete(t) : r.add(t), Dr({ favHidden: [...r] }), e ? tn(Pt(t) + " put back") : tn(Pt(t) + " hidden", Gs(o));
  }
  const bs = (t) => {
    const e = qt;
    Dr({ favourites: Nt().filter((o) => o !== t), favHidden: (qt.favHidden || []).filter((o) => o !== t) }), tn(Pt(t) + " removed from favourites", Gs(e));
  }, ql = (t) => {
    Dr({ favourites: [...Nt().filter((e) => e !== t), t], favHidden: (qt.favHidden || []).filter((e) => e !== t) }), tn(Pt(t) + " added to favourites");
  };
  be.addEventListener("click", (t) => {
    var o, r;
    const e = t.target.closest("button");
    if (e) {
      if (e.hasAttribute("data-tray-tab")) {
        cs = e.dataset.trayTab, Gi(!0), be.querySelector(".tfTrayInner").scrollTop = 0;
        return;
      }
      if (e.hasAttribute("data-tray-done")) Tr(!1);
      else if (e.hasAttribute("data-info")) Ol(e);
      else if (e.hasAttribute("data-dash-sums"))
        Vo({ ...Vi(), hidden: Vi().hidden.filter((c) => c !== "sums"), sumsOff: !((o = qt.dash) != null && o.sumsOff) }), sa(), ga();
      else if (e.hasAttribute("data-dash-welcome")) {
        const c = ye();
        Vo({ ...c, welcome: !c.welcome }), sa(), ga();
      } else e.hasAttribute("data-tray-tuck") ? (Wn = !Wn, ga()) : e.hasAttribute("data-phone-toggle") ? (Yo = !Yo, ga(), Yo && ((r = on.querySelector("[data-phone-key]")) == null || r.focus({ preventScroll: !0 }))) : e.dataset.trayCard ? t.detail === 0 && (Ws(e.dataset.trayCard), ga()) : e.dataset.favEye ? Br(e.dataset.favEye, e.getAttribute("aria-pressed") !== "true") : e.dataset.favRemove ? bs(e.dataset.favRemove) : e.hasAttribute("data-fav-add") ? (Vn = !Vn, ga(), Vn && be.querySelector("[data-fav-search]").focus({ preventScroll: !0 })) : e.dataset.favPick ? ql(e.dataset.favPick) : e.hasAttribute("data-tile-add") ? (Jn = !Jn, ga(), Jn && be.querySelector("[data-tile-search]").focus({ preventScroll: !0 })) : e.dataset.tilePick ? md(e.dataset.tilePick) : e.hasAttribute("data-area-choose") ? Hl() : e.hasAttribute("data-room-add") ? (go = !go, ga()) : e.dataset.roomPick ? md("room:" + e.dataset.roomPick) : e.hasAttribute("data-fav-suggest") && Dr({ suggest: !Na() });
    }
  }), be.addEventListener("input", (t) => {
    t.target.matches("[data-fav-search],[data-tile-search]") && ga();
  }), be.addEventListener("keydown", (t) => {
    var o, r;
    const e = !!((r = (o = t.target).closest) != null && r.call(o, '[data-pick="tiles"],[data-tile-add]'));
    t.key !== "Escape" || !(e ? Jn : Vn) || (t.stopPropagation(), e ? Jn = !1 : Vn = !1, ga(), be.querySelector(e ? "[data-tile-add]" : "[data-fav-add]").focus({ preventScroll: !0 }));
  });
  function wd(t, e, o, r) {
    t.preventDefault();
    const c = t.clientX, h = t.clientY;
    let p = null, v = 0;
    const w = Object.assign(document.createElement("div"), { className: "tfFavDrop" }), _ = (T) => {
      if (!p) {
        if (Math.hypot(T.clientX - c, T.clientY - h) < 4) return;
        p = e.cloneNode(!0), p.classList.add("tfTrayGhost"), p.style.width = e.offsetWidth + "px", g.appendChild(p);
      }
      p.style.transform = "translate(" + (T.clientX - 24) + "px," + (T.clientY - 24) + "px)";
      const N = !Wn && T.clientX >= be.getBoundingClientRect().left;
      if (o === "card") {
        const $ = E.getBoundingClientRect(), { w: ct } = Xn(E.clientWidth);
        Ae = !N && T.clientX >= $.left && T.clientX <= $.right && T.clientY >= $.top + qa ? { key: r, col: Math.max(0, Math.floor((T.clientX - $.left) / (ct + Ze))), row: Math.max(0, Math.floor((T.clientY - $.top - qa) / Sn)), fromTray: !0 } : null, v || (v = requestAnimationFrame(() => {
          v = 0, Aa();
        }));
        return;
      }
      const tt = E.querySelector(".tfDash-favs"), rt = tt == null ? void 0 : tt.getBoundingClientRect();
      if (Va = null, rt && !N && T.clientX >= rt.left && T.clientX <= rt.right && T.clientY >= rt.top && T.clientY <= rt.bottom) {
        let $ = 1 / 0;
        tt.querySelectorAll('[data-k^="fav:"]').forEach((ct, j) => {
          const yt = ct.getBoundingClientRect(), Z = Math.hypot(T.clientX - (yt.left + yt.width / 2), T.clientY - (yt.top + yt.height / 2));
          Z < $ && ($ = Z, Va = { i: j, r: yt, after: T.clientX > yt.left + yt.width / 2 });
        }), Va || (Va = { i: 0, r: null, after: !1 });
      }
      Va != null && Va.r ? (w.isConnected || g.appendChild(w), Object.assign(w.style, { left: (Va.after ? Va.r.right : Va.r.left) - 2 + "px", top: Va.r.top + 8 + "px", height: Va.r.height - 16 + "px" })) : w.remove();
    }, P = () => {
      if (window.removeEventListener("pointermove", _), window.removeEventListener("pointerup", P), window.removeEventListener("pointercancel", P), cancelAnimationFrame(v), p == null || p.remove(), w.remove(), o === "card") {
        if (!p) Ws(r);
        else if (Ae != null && Ae.fromTray) {
          Aa();
          const $ = fn(r) + Dl(r), ct = ye(), j = zo();
          Ae = null, Mr({ ...ct, hidden: ct.hidden.filter((yt) => yt !== r) }, j), tn($);
        }
        Ae = null, Aa(), sa(), ga();
        return;
      }
      if (!Va) return;
      const T = new Set(qt.favHidden || []);
      T.delete(r);
      const N = Nt().filter(($) => $ !== r), tt = N.filter(($) => !T.has($)), rt = tt[Math.min(Va.i + (Va.after ? 1 : 0), tt.length)];
      N.splice(rt ? N.indexOf(rt) : N.length, 0, r), Va = null, Dr({ favourites: N, favHidden: [...T] }), tn(Pt(r) + " put back");
    };
    window.addEventListener("pointermove", _), window.addEventListener("pointerup", P), window.addEventListener("pointercancel", P);
  }
  const ws = {
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
  }, xs = 136, Yi = 288, Xs = 0.8, xd = { wx: "mdi:weather-partly-cloudy", areas: "mdi:home", favs: "mdi:star", act: "mdi:history", energy: "mdi:lightning-bolt", avg: "mdi:chart-line", aq: "mdi:air-filter", pollen: "mdi:flower-pollen", radar: "mdi:radar" }, on = Object.assign(document.createElement("aside"), { className: "tfMiniPhone" });
  on.setAttribute("aria-label", "Phone order"), on.innerHTML = '<div class="tfPhoneHead"><div class="activityTitle">Phone</div><button class="tfTrayBtn" type="button" data-phone-close aria-label="Close the phone">' + Ic + '</button></div><p class="tfTrayNote" data-phone="note"></p><div class="tfPhoneScreen"><div class="tfPhoneList" data-phone="list"></div></div>', g.appendChild(on);
  let Ko = "";
  function Wl() {
    var v;
    const t = Yo && Ja && g.classList.contains("tfBoard") && !Wn;
    if (on.classList.toggle("open", t), on.toggleAttribute("inert", !t), !t) return;
    const e = kr().filter((w) => !ye().hidden.includes(w.key)), o = e.length, r = (w) => Math.round(w * Xs * 10) / 10 + "px", c = (w, _) => {
      const P = w.el.classList.contains("tfDac"), T = w.tile ? P ? Yi : xs : ws[w.key] || xs;
      return '<button class="tfPhoneBlock' + (w.tile ? " tile" : "") + '" type="button" data-phone-key="' + J(w.key) + '" style="min-height:' + r(T) + '" aria-label="' + J(fn(w.key) + ", " + (_ + 1) + " of " + o + ". Drag, or use the arrow keys, to move it") + '"><span class="tfIcon"' + (w.tile ? aa(w.key, dn(w.key)) : aa(w.key, xd[w.key])) + '></span><span class="tfPhoneName">' + J(fn(w.key)) + "</span></button>";
    }, h = '<div class="tfPhoneTitle">' + J(((v = E.querySelector(".tfDashTitle")) == null ? void 0 : v.textContent) || "") + '</div><div class="tfPhoneBlock fixed" style="min-height:' + r(ws.sums) + '"><span class="tfPhoneName">' + J(fn("sums")) + "</span></div>" + e.map(c).join("");
    if (on.querySelector('[data-phone="note"]').innerHTML = ye().phone ? 'Phones use this order. <button class="tfLinkBtn" type="button" data-phone-reset>Follow the board</button>' : "Phones follow the board. Drag a card to give them an order of their own.", h === Ko) return;
    Ko = h;
    const p = on.querySelector('[data-phone="list"]');
    p.innerHTML = h, Zn(p);
  }
  function va(t, e) {
    var o;
    Vo({ ...ye(), phone: t }), ga(), e && ((o = on.querySelector('[data-phone-key="' + CSS.escape(e) + '"]')) == null || o.focus({ preventScroll: !0 }));
  }
  const Vl = () => [...on.querySelectorAll("[data-phone-key]")].map((t) => t.dataset.phoneKey);
  function $o(t, e) {
    t.preventDefault();
    const o = e.parentElement, r = on.querySelector(".tfPhoneScreen"), c = Vl().join();
    e.classList.add("moving");
    const h = (v) => {
      const w = r.getBoundingClientRect();
      v.clientY > w.bottom - 40 ? r.scrollTop += 12 : v.clientY < w.top + 40 && (r.scrollTop -= 12);
      const _ = [...o.querySelectorAll("[data-phone-key]")].find((N) => {
        const tt = N.getBoundingClientRect();
        return N !== e && v.clientX >= tt.left && v.clientX <= tt.right && v.clientY >= tt.top && v.clientY <= tt.bottom;
      });
      if (!_) return;
      const P = _.getBoundingClientRect(), T = _.classList.contains("tile") ? v.clientX < P.left + P.width / 2 : v.clientY < P.top + P.height / 2;
      o.insertBefore(e, T ? _ : _.nextSibling);
    }, p = () => {
      window.removeEventListener("pointermove", h), window.removeEventListener("pointerup", p), window.removeEventListener("pointercancel", p), e.classList.remove("moving");
      const v = Vl();
      Ko = "", v.join() !== c ? va(v) : Wl();
    };
    window.addEventListener("pointermove", h), window.addEventListener("pointerup", p), window.addEventListener("pointercancel", p);
  }
  on.addEventListener("pointerdown", (t) => {
    const e = t.target.closest("[data-phone-key]");
    e && t.button <= 0 && $o(t, e);
  }), on.addEventListener("click", (t) => {
    var o;
    const e = t.target.closest("button");
    if (e != null && e.hasAttribute("data-phone-close"))
      Yo = !1, ga(), (o = be.querySelector("[data-phone-toggle]")) == null || o.focus({ preventScroll: !0 });
    else if (e != null && e.hasAttribute("data-phone-reset")) {
      const { phone: r, ...c } = ye();
      Vo(c), ga();
    }
  }), on.addEventListener("keydown", (t) => {
    var p, v, w, _;
    if (t.key === "Escape") {
      t.stopPropagation(), Yo = !1, ga(), (p = be.querySelector("[data-phone-toggle]")) == null || p.focus({ preventScroll: !0 });
      return;
    }
    const e = (_ = (w = (v = t.target).closest) == null ? void 0 : w.call(v, "[data-phone-key]")) == null ? void 0 : _.dataset.phoneKey, o = { ArrowUp: -1, ArrowLeft: -1, ArrowDown: 1, ArrowRight: 1 }[t.key];
    if (!e || !o) return;
    t.preventDefault();
    const r = Vl(), c = r.indexOf(e), h = c + o;
    h < 0 || h >= r.length || ([r[c], r[h]] = [r[h], r[c]], va(r, e));
  });
  function yd(t, e) {
    t.preventDefault();
    const o = e.parentElement;
    e.classList.add("moving");
    const r = (h) => {
      const p = [...o.children].find((v) => {
        const w = v.getBoundingClientRect();
        return v !== e && h.clientY >= w.top && h.clientY <= w.bottom;
      });
      if (p) {
        const v = p.getBoundingClientRect();
        o.insertBefore(e, h.clientY < v.top + v.height / 2 ? p : p.nextSibling);
      }
    }, c = () => {
      window.removeEventListener("pointermove", r), window.removeEventListener("pointerup", c), window.removeEventListener("pointercancel", c), e.classList.remove("moving");
      const h = new Set(Nt());
      us.favs = null, Dr({ favourites: [...o.children].map((p) => p.dataset.trayFav).filter((p) => h.has(p)) });
    };
    window.addEventListener("pointermove", r), window.addEventListener("pointerup", c), window.addEventListener("pointercancel", c);
  }
  be.addEventListener("pointerdown", (t) => {
    if (t.button > 0) return;
    const e = t.target.closest("[data-tray-card]"), o = t.target.closest(".tfTrayFav");
    e ? wd(t, e, "card", e.dataset.trayCard) : o && t.target.closest(".tfTrayGrip") ? yd(t, o) : o != null && o.classList.contains("off") && !t.target.closest("button") && wd(t, o, "fav", o.dataset.trayFav);
  });
  function bc(t) {
    if (!Ja || t.button !== 0 || t.target.closest("[data-board-more],.tfBoardMenu,.tfFavHides")) return;
    const e = t.target.closest(".tfBoardItem"), o = e && qn().find((je) => je.el === e);
    if (!o || On.includes(o.key)) return;
    const r = ui.get(o.key), { w: c } = Xn(E.clientWidth);
    if (!r) return;
    t.preventDefault(), na();
    const h = t.clientX, p = t.clientY;
    let v = !1, w = 0;
    const _ = ba.drag, P = za();
    let T = 0, N = 0, tt = 0, rt = 0, $ = 0, ct = 0, j = P || _.stick === 0, yt = 0;
    const Z = (je, Ra, te, Tt) => {
      e.style.transform = "translate(" + tt.toFixed(2) + "px," + rt.toFixed(2) + "px) rotate(" + je.toFixed(2) + "deg) rotate(" + Ra + "rad) scale(" + te.toFixed(4) + "," + Tt.toFixed(4) + ") rotate(" + -Ra + "rad)";
    }, Vt = () => {
      if (yt = requestAnimationFrame(Vt), P) {
        tt = T, rt = N, Z(0, 0, 1, 1);
        return;
      }
      if (!j) {
        const ge = Math.min(Math.hypot(T, N) / Math.max(1, _.stick), 1);
        tt = T * 0.35, rt = N * 0.35, Z(0, Math.atan2(N, T), 1 + 0.155 * ge, 1 - 0.1 * ge);
        return;
      }
      $ = up($, T - tt, _.pull / 100, _.keep / 100), ct = up(ct, N - rt, _.pull / 100, _.keep / 100), tt += $, rt += ct;
      const je = Math.hypot($, ct), Ra = Math.min(je / 48, 1), te = Math.max(-5, Math.min(_.tilt, $ * 0.32)), Tt = 1 + _.lift / 100;
      Z(te, Math.atan2(ct, $), Tt * (1 + 0.1 * Ra), Tt * (1 - 0.063 * Ra));
    }, Ne = (je) => {
      if (T = je.clientX - h, N = je.clientY - p, !v) {
        if (Math.hypot(T, N) < 4) return;
        v = !0, Ae = { key: o.key, col: r.col, row: r.row }, e.classList.add("tfDragging", "mvDrag"), yt = requestAnimationFrame(Vt);
      }
      !j && Math.hypot(T, N) > _.stick && (j = !0, $ = T * 0.085, ct = N * 0.085), Ae.col = Math.round((r.x + T) / (c + Ze)), Ae.row = Math.round((r.y + N - qa) / Sn), w || (w = requestAnimationFrame(() => {
        w = 0, Aa();
      }));
    }, le = () => {
      var Hd;
      if (window.removeEventListener("pointermove", Ne), window.removeEventListener("pointerup", le), window.removeEventListener("pointercancel", le), !v) return;
      const je = (Id) => {
        Id.preventDefault(), Id.stopImmediatePropagation();
      };
      window.addEventListener("click", je, { capture: !0, once: !0 }), setTimeout(() => window.removeEventListener("click", je, { capture: !0 }), 300), cancelAnimationFrame(w), cancelAnimationFrame(yt);
      const Ra = e.getBoundingClientRect(), te = o.key;
      e.style.transition = "none", Aa(), e.classList.remove("tfDragging", "mvDrag"), e.style.transform = "", Ae = null, Mr(ye(), zo()), Aa(), sa();
      const Tt = (Hd = qn().find((Id) => Id.key === te)) == null ? void 0 : Hd.el;
      if (requestAnimationFrame(() => {
        e.style.transition = "", Tt && (Tt.style.transition = "");
      }), !Tt || P) return;
      Tt.style.transition = "none";
      const ge = Tt.getBoundingClientRect(), Ln = Ra.left + Ra.width / 2 - (ge.left + ge.width / 2), Ki = Ra.top + Ra.height / 2 - (ge.top + ge.height / 2);
      Tt.style.zIndex = "20", Tt.animate([{ transform: "translate(" + Ln + "px," + Ki + "px) scale(" + (1 + _.lift / 100) + ")" }, { transform: "none" }], { duration: _.slide, easing: ea.land }).finished.then(() => {
        Tt.style.zIndex = "", fp(Tt);
      }, () => {
        Tt.style.zIndex = "";
      });
    };
    window.addEventListener("pointermove", Ne), window.addEventListener("pointerup", le), window.addEventListener("pointercancel", le);
  }
  function Js(t = !1) {
    const e = E == null ? void 0 : E.querySelector(".tfDashGraph svg[data-graph]");
    if (!(e != null && e.clientWidth)) return;
    const o = e.dataset.graph + "@" + e.clientWidth + "x" + e.clientHeight + "@" + Math.floor(Date.now() / 3e5);
    if (e.dataset.drawn === o) return;
    const r = !e.dataset.drawn;
    e.dataset.drawn = o;
    const c = li.find((h) => h.id === e.dataset.graph);
    c ? Oo(e, c).then(() => {
      (t || r) && br(e);
    }) : to(e.dataset.graph, e).then(() => {
      t && qi(e);
    });
  }
  function jl() {
    var w, _, P;
    fe = wn.model(i(), { madeUp: !A }), Wa(), M = fe.states, M[(w = qt.sources) == null ? void 0 : w.grid] && (fe.grid = qt.sources.grid), M[(_ = qt.sources) == null ? void 0 : _.alarm] && (fe.security.alarms = [qt.sources.alarm]), $t.forEach((T, N) => {
      const tt = M[N], rt = (tt == null ? void 0 : tt.attributes) || {};
      if (!tt || Date.now() - T.at > 2 * 60 * 1e3) {
        $t.delete(N);
        return;
      }
      T.pos != null && tt.state !== "opening" && tt.state !== "closing" && Math.abs(In(N) - T.pos) < 1 && delete T.pos, T.tilt != null && Math.abs((rt.current_tilt_position ?? -1) - T.tilt) < 1 && delete T.tilt, T.pos == null && T.tilt == null && $t.delete(N);
    });
    const t = [];
    let e = 0;
    const o = oe();
    jt = o.filter((T) => T.room).map((T) => T.room), jt.some((T) => T.id === R) || (R = ((P = jt[0]) == null ? void 0 : P.id) || null);
    const r = q === "weather" ? { key: "weather", name: "Weather" } : q && o.find((T) => T.key === q);
    if (r || (q = null), g.classList.toggle("tfAreaOpen", !!r), g.classList.toggle("tfWeatherOpen", (r == null ? void 0 : r.key) === "weather"), g.classList.toggle("tfDash", !r), ce = /* @__PURE__ */ new Map(), fe.rooms.forEach((T) => [...T.actions, ...T.plugs, ...T.readings, ...T.openings, ...T.solar, ...T.plants.flatMap((N) => [N.id, ...N.readings])].forEach((N) => ce.set(N, T.name))), !r) return sd(t, La());
    if (t.push({ key: "areahead", html: Qs(r, ++e) }), r.key === "weather")
      return t.weather = ++e, t;
    const c = r.ids, h = r.room ? r.room.id : r.key, p = r.room;
    p != null && p.solar.length && t.push({ key: "energy:" + p.id, html: Ge(p, ++e) }), p && (p.readings.length || p.power != null) && t.push({ key: "readings:" + p.id, html: so(p, ++e) }), p == null || p.plants.forEach((T) => t.push({ key: "plant:" + T.id, html: Fn(T, ++e) }));
    const v = [...c, ...((p == null ? void 0 : p.plugs) || []).filter((T) => !c.includes(T))];
    return v.length && t.push({ key: "block:" + h, order: ++e, tiles: v.map((T) => ({ key: T, html: Pi(T) })) }), t;
  }
  const Qs = (t, e) => '<div class="settingsHeader tfAreaHead" data-tf data-k="areahead" style="order:' + e + '"><button class="back" type="button" data-area-back aria-label="Back to the house">' + Fp + '</button><div class="settingsTitle">' + J(t.name) + "</div></div>";
  let kd = 0, Md = null;
  const ys = (t) => t === "weather" ? Hn.wx : t.startsWith("room:") && E.querySelector('.tfRoomTile[data-k="' + CSS.escape(t) + '"]') || E.querySelector(".tfAreas");
  function Tn(t) {
    var e, o;
    q || (kd = zn().scrollTop, Md = ((e = ys(t)) == null ? void 0 : e.getBoundingClientRect().top) ?? null), q = t, t.startsWith("room:") && (R = t.slice(5)), _a(), zn().scrollTop = 0, (o = E.querySelector("[data-area-back]")) == null || o.focus({ preventScroll: !0 });
  }
  let Xo = null;
  function Sd(t, e) {
    if (Xo == null || Xo(), e == null) return;
    const o = zn(), r = performance.now() + 1500, c = ["wheel", "touchstart", "pointerdown", "keydown"];
    let h = 0;
    const p = () => {
      cancelAnimationFrame(h), c.forEach((w) => window.removeEventListener(w, p, !0)), Xo = null;
    }, v = () => {
      const w = t();
      if (w != null && w.isConnected) {
        const _ = w.getBoundingClientRect().top - e;
        Math.abs(_) > 0.5 && (o.scrollTop += _);
      }
      performance.now() < r ? h = requestAnimationFrame(v) : p();
    };
    c.forEach((w) => window.addEventListener(w, p, { capture: !0, passive: !0 })), Xo = p, v();
  }
  function tl() {
    var o;
    const t = q;
    q = null, _a(), zn().scrollTop = kd, Sd(() => ys(t), Md);
    const e = t.startsWith("room:") ? E.querySelector('.tfRoomTile[data-k="' + CSS.escape(t) + '"]') || E.querySelector('.tfAreaPanel[data-area="' + CSS.escape(t.slice(5)) + '"]') : t === "weather" ? Hn.wx.querySelector(".wbOpenPage") : E.querySelector('[data-k="sum:' + CSS.escape(t) + '"]');
    (o = (e == null ? void 0 : e.querySelector("[data-go]")) || e) == null || o.focus({ preventScroll: !0 });
  }
  const Cd = (t) => t.wrap ? t.wrap(t.tiles.map((e) => e.html).join(""), t) : '<div class="tfBlock" data-tf data-k="' + J(t.key) + '" style="order:' + t.order + '"><div class="tfActions">' + t.tiles.map((e) => e.html).join("") + "</div></div>", rn = (t) => t.map((e) => e.key + (e.tiles ? "(" + e.tiles.map((o) => o.key).join(",") + ")" : "")).join(";");
  function zn() {
    for (let t = g.parentElement || g.getRootNode().host; t; t = t.parentElement || t.getRootNode().host) {
      const e = getComputedStyle(t).overflowY;
      if ((e === "auto" || e === "scroll") && t.scrollHeight > t.clientHeight) return t;
    }
    return document.scrollingElement;
  }
  function Rr(t) {
    const e = zn(), o = (v) => {
      const w = v.getBoundingClientRect();
      return w.height && w.bottom > 0 && w.top < window.innerHeight;
    }, r = [...E.children, ...E.querySelectorAll(".tfDashTiles > *")].find((v) => !v.matches(".tfDashTiles") && o(v)), c = r == null ? void 0 : r.dataset.k, h = r == null ? void 0 : r.getBoundingClientRect().top;
    t();
    const p = r != null && r.isConnected ? r : c && E.querySelector('[data-k="' + CSS.escape(c) + '"]');
    p != null && p.isConnected && h != null && (e.scrollTop += p.getBoundingClientRect().top - h);
  }
  function _a() {
    if (!k || !E) return;
    const t = jl(), e = (c) => {
      var h;
      return (((h = c.closest("[data-k]")) == null ? void 0 : h.dataset.k) || "") + "|" + c.dataset.iconFor + "|" + (c.dataset.iconName || "");
    }, o = /* @__PURE__ */ new Map();
    E.querySelectorAll("[data-tf] [data-icon-for]").forEach((c) => {
      c.firstElementChild && (o.get(e(c)) || o.set(e(c), []).get(e(c))).push(c.firstElementChild);
    }), E.querySelectorAll("[data-tf]").forEach((c) => c.remove()), ln.clear();
    const r = document.createElement("div");
    r.innerHTML = t.map((c) => c.tiles ? Cd(c) : c.html).join(""), t.forEach((c) => c.tiles ? c.tiles.forEach((h) => ln.set(h.key, h.html)) : ln.set(c.key, c.html)), Wr = rn(t), r.querySelectorAll("[data-icon-for]").forEach((c) => {
      var p;
      const h = !c.firstElementChild && ((p = o.get(e(c))) == null ? void 0 : p.shift());
      h && c.appendChild(h);
    }), E.append(...r.children), jr(t.weather), se(), hi.disconnect(), Aa(), Zn(E), a(E), Ve(E), G(), L && to(L.id), Rt(), S(), m(), requestAnimationFrame(ot);
  }
  const wi = (t) => {
    var o;
    const e = n.activeElement && t.contains(n.activeElement) ? n.activeElement : null;
    return e && { label: e.getAttribute("aria-label"), act: (o = e.dataset) == null ? void 0 : o.act };
  }, ks = (t, e) => {
    var o;
    e && ((o = e.label && t.querySelector('[aria-label="' + CSS.escape(e.label) + '"]') || e.act && t.querySelector('[data-act="' + CSS.escape(e.act) + '"]')) == null || o.focus({ preventScroll: !0 }));
  };
  function xi(t, e) {
    if (!t.querySelector(".tfDacPad"))
      return t.replaceWith(e), e;
    const o = t.matches(".tfDac") && t.querySelector(":scope > .tfDacPad"), r = e.querySelector(":scope > .tfDacPad");
    if (o)
      return (r == null ? void 0 : r.dataset.dac) !== o.dataset.dac ? (t.replaceWith(e), e) : (t.querySelector(":scope > .tfActionHead").replaceWith(e.querySelector(":scope > .tfActionHead")), t.classList.toggle("on", e.classList.contains("on")), ["data-light", "data-tone"].forEach((p) => e.hasAttribute(p) ? t.setAttribute(p, e.getAttribute(p)) : t.removeAttribute(p)), [...t.style].filter((p) => p.startsWith("--") && !p.startsWith("--tf-")).forEach((p) => t.style.removeProperty(p)), [...e.style].forEach((p) => t.style.setProperty(p, e.style.getPropertyValue(p))), t);
    const c = (p) => {
      var v;
      return ((v = p.dataset) == null ? void 0 : v.iconFor) !== void 0;
    };
    if (c(t) && c(e) && !e.children.length && t.dataset.iconFor === e.dataset.iconFor && t.dataset.iconName === e.dataset.iconName && t.firstElementChild)
      return [...t.attributes].forEach((p) => {
        e.hasAttribute(p.name) || t.removeAttribute(p.name);
      }), [...e.attributes].forEach((p) => {
        t.getAttribute(p.name) !== p.value && t.setAttribute(p.name, p.value);
      }), t;
    if (t.tagName !== e.tagName || t.children.length !== e.children.length)
      return t.replaceWith(e), e;
    [...t.attributes].forEach((p) => {
      e.hasAttribute(p.name) || t.removeAttribute(p.name);
    }), [...e.attributes].forEach((p) => t.setAttribute(p.name, p.value));
    const h = [...e.children];
    return [...t.children].forEach((p, v) => xi(p, h[v])), t;
  }
  function Td(t, e) {
    const o = document.createElement("div");
    o.innerHTML = e;
    const r = wi(t), c = xi(t, o.firstElementChild);
    Zn(c), a(c), Ve(c), ks(c, r);
  }
  function sa() {
    !k || !E || Ae || Rr(Ld);
  }
  function Ld() {
    if (!E.querySelector("[data-tf]")) {
      _a();
      return;
    }
    const t = jl();
    if (rn(t) !== Wr) {
      _a();
      return;
    }
    const e = (o) => [...gt.keys()].some((r) => {
      const c = r.slice(r.indexOf("|") + 1);
      return o === c || o.endsWith(":" + c);
    });
    t.forEach((o) => (o.tiles || [o]).forEach((r) => {
      if (ln.get(r.key) === r.html || e(r.key)) return;
      const c = E.querySelector('[data-k="' + CSS.escape(r.key) + '"]');
      if (c) {
        if (ln.set(r.key, r.html), L && L.key === r.key && c.querySelector(".tfOpen")) {
          c.querySelector(".tfOpen .activityRowMeta").textContent = Do(L.id);
          return;
        }
        Td(c, r.html), L && L.key === r.key && to(L.id), r.key.startsWith("energy:") && Rt();
      }
    })), S(), m(), co(), G(), ze == null || ze.update(), pa == null || pa.forEach((o) => o.update()), g.classList.contains("tfDash") && is(), requestAnimationFrame(ot);
  }
  const Jo = {
    light: (t) => [["Brightness", t.brightness != null ? Math.round(t.brightness / 2.55) + "%" : null], ["Colour temperature", t.color_temp_kelvin ? Number(t.color_temp_kelvin).toLocaleString() + " K" : null], ["Colour mode", t.color_mode && Te(t.color_mode)]],
    climate: (t) => [["Current temperature", Re(t.current_temperature) + " °C"], ["Target", Re(t.temperature) + " °C"], ["Action", Te(t.hvac_action)]],
    cover: (t) => [["Position", t.current_position != null ? t.current_position + "% open" : null], ["Tilt", t.current_tilt_position != null ? t.current_tilt_position + "% open" : null]],
    humidifier: (t) => [["Current humidity", t.current_humidity + "%"], ["Target", t.humidity + "%"], ["Mode", Te(t.mode)]],
    media_player: (t) => [["Title", t.media_title], ["Artist", t.media_artist], ["Volume", t.volume_level != null ? Math.round(t.volume_level * 100) + "%" : null], ["Source", t.source]],
    vacuum: (t) => [["Battery", t.battery_level + "%"], ["Fan speed", Te(t.fan_speed)], ["Rooms", (t.rooms || []).join(", ") || null]],
    lock: (t) => [["Changed by", t.changed_by]],
    alarm_control_panel: (t) => [["Changed by", t.changed_by]],
    valve: () => [],
    plant: (t) => [["Moisture", t.moisture + "%"], ["Light", Number(t.brightness).toLocaleString() + " lx"], ["Temperature", Re(t.temperature) + " °C"], ["Fertility", t.conductivity + " µS/cm"], ["Problems", t.problem === "none" ? "None" : Te(t.problem)]],
    weather: (t) => [["Temperature", t.temperature != null ? t.temperature + " " + (t.temperature_unit || "°C") : null], ["Humidity", t.humidity != null ? t.humidity + "%" : null], ["Wind", t.wind_speed != null ? t.wind_speed + " " + (t.wind_speed_unit || "km/h") : null], ["Pressure", t.pressure != null ? t.pressure + " " + (t.pressure_unit || "hPa") : null]]
  }, Ad = (t) => ki(t) ? '<div class="tfMoreNote">Made up for this page</div>' : "";
  function zl(t, e = {}, o = !1) {
    return '<div class="tfMoreList">' + t.map((r) => '<div class="tfMoreGroup"><div class="tfMoreGroupName">' + J(r.name) + '</div><div class="tfMoreTiles' + (o ? " single" : "") + '">' + r.ids.map((c) => $n(c, e)).join("") + "</div></div>").join("") + "</div>";
  }
  const zt = document.createElement("div");
  zt.className = "tfMoreBackdrop", zt.hidden = !0, g.appendChild(zt);
  const Gn = document.createElement("div");
  Gn.className = "tfMoreBackdrop tfMoreUnder", Gn.hidden = !0, g.insertBefore(Gn, zt);
  const Ms = (t, e) => {
    for (let o = t; o && o !== zt; o = o.parentElement) {
      const r = getComputedStyle(o).overflowY;
      if ((r === "auto" || r === "scroll") && o.scrollHeight > o.clientHeight + 1 && (e < 0 ? o.scrollTop > 0 : o.scrollTop + o.clientHeight < o.scrollHeight - 1)) return !0;
    }
    return !1;
  };
  let Zi = null;
  zt.addEventListener("touchstart", (t) => {
    Zi = { x: t.touches[0].clientX, y: t.touches[0].clientY };
  }, { passive: !0 }), zt.addEventListener("touchmove", (t) => {
    var c, h;
    if (!Zi || t.touches.length > 1 || (h = (c = t.target).closest) != null && h.call(c, "input,textarea,select")) return;
    const e = t.touches[0], o = Zi.x - e.clientX, r = Zi.y - e.clientY;
    Zi = { x: e.clientX, y: e.clientY }, Math.abs(r) >= Math.abs(o) && !Ms(t.target, r) && t.preventDefault();
  }, { passive: !1 }), zt.addEventListener("wheel", (t) => {
    var e, o;
    Math.abs(t.deltaX) > Math.abs(t.deltaY) && ((o = (e = t.target).closest) != null && o.call(e, "[data-more-pages]")) || Ms(t.target, t.deltaY) || t.preventDefault();
  }, { passive: !1 });
  const Gl = () => window.innerWidth <= 620;
  let Da = null;
  zt.addEventListener("pointerdown", (t) => {
    const e = zt.querySelector(".tfMorePair");
    !Gl() || !e || !e.contains(t.target) || !t.isPrimary || zt._closing || t.target.closest("input,textarea,select,.tfDacPad,[data-cover-art],.tfMoreSide") || (Da = { x: t.clientX, y: t.clientY, t: performance.now(), dy: 0, v: 0, pair: e, from: t.target, grab: t.target.matches(".tfMore") || !!t.target.closest(".tfMoreHead") });
  }, !0), zt.addEventListener("pointermove", (t) => {
    if (!Da || !t.isPrimary) return;
    const e = t.clientY - Da.y, o = performance.now();
    if (!Da.on) {
      if (Math.abs(t.clientX - Da.x) > 8 || e < -8 || !Da.grab && Ms(Da.from, -1)) {
        Da = null;
        return;
      }
      if (e < 8) return;
      Da.on = !0;
      try {
        zt.setPointerCapture(t.pointerId);
      } catch {
      }
    }
    Da.v = (e - Da.dy) / Math.max(1, o - Da.t), Da.dy = e, Da.t = o, Da.pair.style.transform = "translateY(" + Math.max(0, e) + "px)";
  });
  const Ss = (t) => {
    if (!Da || !t.isPrimary) return;
    const e = Da;
    if (Da = null, !e.on) return;
    const o = (_) => {
      _.preventDefault(), _.stopImmediatePropagation();
    };
    window.addEventListener("click", o, { capture: !0, once: !0 }), setTimeout(() => window.removeEventListener("click", o, { capture: !0 }), 300);
    const r = t.type === "pointerup" && (e.dy > 120 || e.v > 0.5), c = "translateY(" + Math.max(0, e.dy) + "px)";
    if (e.pair.style.transform = "", !r || za()) {
      r ? Wt() : e.pair.animate([{ transform: c }, { transform: "none" }], { duration: 320, easing: ea.spring });
      return;
    }
    const h = D;
    zt._closing = !0, zt.style.pointerEvents = "none", zt.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 220, easing: ea.exit, fill: "forwards" });
    const p = e.pair.animate([{ transform: c }, { transform: "translateY(calc(100% + 40px))" }], { duration: 220, easing: ea.exit, fill: "forwards" });
    let v = !1;
    const w = () => {
      v || (v = !0, zt._closing = !1, zt.style.pointerEvents = "", zt.getAnimations().forEach((_) => _.cancel()), e.pair.getAnimations().forEach((_) => _.cancel()), D === h && Wt());
    };
    p.finished.then(w, w), setTimeout(w, 300);
  };
  zt.addEventListener("pointerup", Ss), zt.addEventListener("pointercancel", Ss);
  function el() {
    const t = zt.querySelector(".tfMorePair"), e = zt.querySelector(".tfMore");
    t == null || t.classList.toggle("over", window.innerWidth <= 620 || (window.innerWidth - e.offsetWidth) / 2 < 328);
  }
  window.addEventListener("resize", el, { passive: !0 }), k && Me();
  let xo = [];
  const Ed = (t) => t === "favourites" || t.startsWith("summary:") || t.startsWith("group:");
  function al(t) {
    const e = (w, _ = "") => '<div class="tfMoreHead">' + (D != null && D.back ? '<button class="tfBack" type="button" data-more-back aria-label="Back">' + Nc + "</button>" : "") + '<div class="activityTitle" id="tfMoreTitle">' + J(w) + "</div>" + _ + '<button class="tfBack" type="button" data-more-close aria-label="Close">' + Op + "</button></div>", o = (w, _) => '<div class="tfMoreNow"><div class="tfMoreState">' + J(w) + "</div></div>", r = zl;
    if (t === "favourites") {
      const w = Nt(), _ = new Set(w), P = [{ name: "Starred", ids: w }, { name: "Home", ids: fe.homeVacuums }, { name: "Security", ids: [...fe.security.alarms, ...fe.security.locks] }, ...fe.rooms.map((T) => ({ name: T.name, ids: [...T.actions, ...T.plugs] }))].map((T, N) => N ? { ...T, ids: T.ids.filter((tt) => !_.has(tt)) } : T).filter((T) => T.ids.length);
      return [e("Favourites"), o(w.length ? w.length + " starred" : "None starred"), r(P, { star: !0 }, !0)];
    }
    const c = (w, { name: _ = "", alert: P = !1, plain: T = !1 } = {}) => {
      const N = T ? [] : w.filter(($) => $l.includes($.split(".")[0])), tt = w.filter(($) => !N.includes($)), rt = ($) => $.startsWith("vacuum.") && ve($).battery_level != null ? ve($).battery_level + "%" : null;
      return '<div class="tfMoreGroup">' + (_ ? '<div class="tfMoreGroupName">' + J(_) + "</div>" : "") + '<div class="tfMoreActions">' + N.map(($) => Pi($, !0)).join("") + tt.map(($) => $n($, { plain: T, alert: P, say: T ? rt($) : null })).join("") + "</div></div>";
    };
    if (t.startsWith("summary:")) {
      const w = La().find((N) => N.key === t.slice(8));
      if (!w) return null;
      const _ = w.key === "light" ? (w.groups || []).flatMap((N) => N.ids) : [], P = _.some((N) => {
        var tt;
        return ((tt = M[N]) == null ? void 0 : tt.state) === "on";
      }), T = _.length ? '<button class="primary" type="button" data-acts="' + Di(_.map((N) => ["light", P ? "turn_off" : "turn_on", N])) + '">' + (P ? "Turn all off" : "Turn all on") + "</button>" : "";
      return [e(w.name), '<div class="tfMoreNowRow">' + o(w.value) + T + "</div>", ...(w.groups || []).map((N) => c(N.ids, { name: N.name === w.name ? "" : N.name, alert: N.alert, plain: w.plain }))];
    }
    if (t.startsWith("group:")) {
      const [, w, _] = t.split(":"), P = fe.rooms.find((tt) => tt.id === w), T = P && b(P).find((tt) => tt.key === _);
      if (!T) return null;
      const N = T.acts ? '<button class="primary" type="button" data-acts="' + Di(T.acts) + '">' + (T.on ? "Turn all off" : "Turn all on") + "</button>" : "";
      return [e(P.name + " " + T.label.toLowerCase()), '<div class="tfMoreNowRow">' + o(T.value) + N + "</div>", c(y(P, _))];
    }
    const h = t.split(".")[0];
    M[t];
    const p = $l.includes(h) ? Ho(t) : _d(t), v = (D == null ? void 0 : D.page) || 0;
    return [
      Ul(t, p),
      '<div class="tfMorePages" data-more-pages><section class="tfMorePage" aria-label="Control">' + Dd(t) + (h === "plant" ? Dt(t).join("") : "") + p.sections.filter(Boolean).join("") + '</section><section class="tfMorePage" aria-label="Info">' + Rd(t) + "</section></div>",
      // the pages' icons in place of their dots (Matt, 12 Nov): Control's sliders and Info's (i), a small segmented pair
      '<div class="tfMoreDots tfMorePageIcons" role="tablist" aria-label="Pages">' + [["Control", Hm], ["Info", Jp]].map(([w, _], P) => '<button type="button" role="tab" aria-selected="' + (P === v) + '" aria-label="' + w + '" title="' + w + '" data-more-page="' + P + '"' + (P === v ? "" : ' tabindex="-1"') + ">" + _ + "</button>").join("") + "</div>"
    ];
  }
  function Ul(t, e, o) {
    var p, v, w, _, P;
    const r = (p = fe.areaOf) == null ? void 0 : p.call(fe, t), c = r && (((v = fe.rooms.find((T) => T.id === r)) == null ? void 0 : v.name) || ((P = (_ = (w = i()) == null ? void 0 : w.areas) == null ? void 0 : _[r]) == null ? void 0 : P.name)) || "", h = e.button ? lo(t, e) : '<div class="tfIcon"' + aa(t, e.icon) + "></div>";
    return '<div class="tfMoreHead tfMoreTileHead' + (e.on ? " on" : "") + '"' + (e.tone ? ' data-tone="' + e.tone + '"' : "") + ei(t) + ">" + (D != null && D.back ? '<button class="tfBack" type="button" data-more-back aria-label="Back">' + Nc + "</button>" : "") + h + '<div class="tfName"><span class="activityRowName" id="tfMoreTitle">' + J(Pt(t)) + "</span>" + (c ? '<span class="activityRowMeta">' + J(c) + "</span>" : "") + '</div><button class="tfBack" type="button" data-more-close aria-label="Close">' + Op + "</button></div>";
  }
  const Yl = ["lock", "alarm_control_panel", "switch", "input_boolean", "fan", "valve", "media_player", "automation", "script", "scene", "button"];
  function _d(t) {
    var c;
    const e = t.split(".")[0], o = ((c = M[t]) == null ? void 0 : c.state) === "on", r = Hc.includes(e) ? { act: Se(e, "toggle", t), label: "Turn " + Pt(t) + (o ? " off" : " on") } : e === "scene" || e === "script" ? { act: Se(e, "turn_on", t), label: "Run " + Pt(t) } : null;
    return { sections: [], on: o, button: r, icon: dn(t) };
  }
  function Dd(t) {
    const e = t.split(".")[0];
    if (Yl.includes(e) || e === "light" && !cn(t)) {
      const c = $l.includes(e) ? Ho(t) : _d(t);
      return c != null && c.button ? '<div class="tfMoreSpace tfMoreSwitch' + (c.on ? " on" : "") + '"' + (c.tone ? ' data-tone="' + c.tone + '"' : "") + ei(t) + ">" + lo(t, c) + "</div>" : "";
    }
    if (e === "cover") return '<div class="tfMoreSpace tfMoreFill"><div data-cover-art="' + J(t) + '"></div></div>';
    if (e === "light" && cn(t)) return '<div class="tfMoreSpace tfMoreFill"><div class="tfDacPad" data-dac="more:' + J(t) + '"></div></div>';
    const { big: o, lines: r } = Bd(t);
    return '<div class="tfMoreSpace"><div class="tfMoreBig' + ($a("pos", t) != null ? " live" : "") + '"><span class="tfMoreNum">' + J(o[0]) + "</span>" + (o[1] ? '<span class="tfMoreUnit">' + J(o[1]) + "</span>" : "") + '</div><div class="tfMoreFacts">' + r.map(([c, h]) => '<div class="tfMoreFact"><span>' + J(c) + "</span><span>" + J(h) + "</span></div>").join("") + "</div></div>";
  }
  function Bd(t) {
    var P;
    const e = M[t], o = ve(t), r = t.split(".")[0], c = (((P = Jo[r]) == null ? void 0 : P.call(Jo, o)) || []).filter(([, T]) => T != null && T !== ""), h = (T) => {
      const N = c.findIndex(([tt]) => tt === T);
      return N < 0 ? null : c.splice(N, 1)[0][1];
    }, p = (T) => {
      const N = String(T).match(/^(-?[\d.,]+)\s*(.*)$/);
      return N ? [N[1], N[2]] : [String(T), ""];
    }, v = () => [Te(String(e.state).replace(/_/g, " ")), ""];
    let w;
    r === "light" ? (h("Brightness"), w = e.state === "on" && Pa(t) ? [String(xn(e)), "%"] : v()) : r === "climate" ? w = p(h("Current temperature") || Re(o.current_temperature) + " °C") : r === "cover" ? (h("Position"), w = o.current_position != null ? [String(In(t)), "%"] : v()) : r === "humidifier" ? w = p(h("Current humidity") || e.state) : r === "vacuum" ? w = p(h("Battery") || e.state) : r === "plant" ? w = p(h("Moisture") || e.state) : ["media_player", "lock", "alarm_control_panel", "valve"].includes(r) ? w = v() : w = p(e.state + (o.unit_of_measurement ? " " + o.unit_of_measurement : ""));
    const _ = c.length ? c.slice(0, 4) : [["State", We(t)]];
    return { big: w, lines: _ };
  }
  function Rd(t) {
    var _, P, T, N, tt, rt, $;
    const e = M[t], o = i(), r = (_ = o == null ? void 0 : o.entities) == null ? void 0 : _[t], c = r != null && r.device_id ? (P = o == null ? void 0 : o.devices) == null ? void 0 : P[r.device_id] : null, h = '<div class="tfMoreGraph"><div class="tfMoreGroupName">Last 24 hours</div><svg class="tfGraph tfDay" data-day="' + J(t) + '" role="img" aria-label="' + J(Pt(t)) + ', last 24 hours"></svg></div>', p = (T = fe.areaOf) == null ? void 0 : T.call(fe, t), v = p && (((N = fe.rooms.find((ct) => ct.id === p)) == null ? void 0 : N.name) || ((rt = (tt = o == null ? void 0 : o.areas) == null ? void 0 : tt[p]) == null ? void 0 : rt.name)) || "", w = [
      ...(($ = Jo[t.split(".")[0]]) == null ? void 0 : $.call(Jo, ve(t))) || [],
      ["Changed", e.last_changed && _s(Date.parse(e.last_changed))],
      ["Area", v],
      ["Device", c && (c.name_by_user || c.name)],
      ["Integration", (r == null ? void 0 : r.platform) && Te(r.platform.replace(/_/g, " "))],
      ["Entity", t]
    ].filter(([, ct]) => ct != null && ct !== "");
    return h + '<div class="tfMoreRows">' + w.map(([ct, j]) => '<div class="tfMoreRow"><span>' + J(ct) + "</span><span>" + J(j) + "</span></div>").join("") + "</div>" + Ad(t) + (c ? '<button class="tfDetailsBtn tfMoreLink" type="button" data-path="/config/devices/device/' + J(r.device_id) + '"><span>Device page</span>' + Qp + "</button>" : "");
  }
  const Pd = () => "";
  let nl = "";
  function ol(t) {
    var e;
    D && (D.details = t, S(), (e = zt.querySelector(t ? "[data-details-close]" : "[data-details]")) == null || e.focus({ preventScroll: !0 }));
  }
  const Cs = (t) => {
    const e = M[t], o = In(t), r = ai(t);
    return { kind: Pc(e), name: Pt(t), text: We(t), pos: o, target: Math.abs(r - o) > 0.5 ? r : null, moving: e.state === "opening" || e.state === "closing", tilt: Lo(t) ?? 100, canSet: Ce(t, Gp) };
  };
  function a(t) {
    t.querySelectorAll("[data-cover-art]").forEach((e) => {
      const o = e.dataset.coverArt, r = e.dataset.artKey || "more:" + o;
      let c = ae.get(r);
      c || (c = xm({ onMove: (h) => yo(o, h), onSet: (h) => {
        yo(o, h), _e("pos", o);
      } }), c.coverId = o, ae.set(r, c)), e.replaceWith(c.el), c.update(Cs(o));
    });
  }
  const s = (t) => [...ae.values()].filter((e) => e.coverId === t), d = () => ae.forEach((t) => {
    M[t.coverId] && t.update(Cs(t.coverId));
  }), m = () => {
    ae.forEach((t, e) => {
      t.el.isConnected || (t.destroy(), ae.delete(e));
    }), d();
  };
  function S() {
    var h, p;
    if (!D || !(Ed(D.id) || M[D.id])) {
      zt.hidden = !0;
      return;
    }
    if ([...gt.keys()].some((v) => v.endsWith("|" + D.id))) {
      d();
      return;
    }
    const t = al(D.id), e = zt.querySelector(".tfMore");
    if (!t) {
      ee();
      return;
    }
    const o = wi(zt), r = Pd(D.id), c = D.frame ? D.frame.wide : D.id.startsWith("summary:") || D.id.startsWith("group:");
    if (zt.hidden || !e || t.length !== xo.length || e.classList.contains("wide") !== c) {
      const v = mt ? D.scroll || 0 : !zt.hidden && e ? e.scrollTop : 0;
      if (zt.innerHTML = '<div class="tfMorePair' + (zt.hidden ? "" : " still") + '" role="dialog" aria-modal="true" aria-labelledby="tfMoreTitle"><section class="tfMore' + (c ? " wide" : "") + '"' + (D.frame ? ' style="height:' + D.frame.h + 'px"' : "") + ' tabindex="-1">' + t.join("") + "</section></div>", nl = r, zt.classList.toggle("wide", c), zt.hidden = !1, el(), a(zt), Ve(zt), Zn(zt), zt.querySelectorAll("[data-day]").forEach((w) => Ba(w.dataset.day, w, D.at)), we(zt), v && (zt.querySelector(".tfMore").scrollTop = v), B(), ks(zt, o), !zt.contains(n.activeElement)) {
        const w = zt.querySelector("[data-more-close]");
        (h = w != null && w.offsetParent ? w : zt.querySelector(".tfMore")) == null || h.focus({ preventScroll: !0 });
      }
    } else {
      if (t.forEach((v, w) => {
        var T, N;
        if (v === xo[w] || v.includes("data-cover-art") || e.children[w].contains((N = (T = n.activeElement) == null ? void 0 : T.matches) != null && N.call(T, "input,select") ? n.activeElement : null) || [...gt.keys()].some((tt) => e.children[w].querySelector('[data-drag="' + CSS.escape(tt) + '"]'))) return;
        const _ = document.createElement("div");
        _.innerHTML = v;
        const P = xi(e.children[w], _.firstElementChild);
        Zn(P), we(P), Ve(P);
      }), r !== nl) {
        const v = zt.querySelector(".tfMoreSideBody");
        v && (v.innerHTML = r), nl = r;
      }
      e.querySelectorAll("[data-day]").forEach((v) => {
        v.innerHTML || Ba(v.dataset.day, v, D.at);
      }), B(), zt.contains(n.activeElement) || ks(zt, o);
    }
    (p = zt.querySelector(".tfMorePair")) == null || p.classList.toggle("details", !!(D.details && r)), xo = t, d();
  }
  function B() {
    const t = zt.querySelector("[data-more-pages]");
    !t || !D || (t.scrollTo({ left: (D.page || 0) * t.clientWidth, behavior: "instant" }), Y(), O(t));
  }
  function O(t) {
    const e = t.children[(D == null ? void 0 : D.page) || 0];
    e && (t.style.height = e.scrollHeight + "px");
  }
  function Y() {
    const t = (D == null ? void 0 : D.page) || 0;
    zt.querySelectorAll("[data-more-page]").forEach((e) => {
      const o = Number(e.dataset.morePage) === t;
      e.setAttribute("aria-selected", String(o)), e.tabIndex = o ? 0 : -1;
    });
  }
  function wt(t, e) {
    var r, c;
    const o = zt.querySelector("[data-more-pages]");
    !o || !D || (D.page = Math.max(0, Math.min(1, t)), o.scrollTo({ left: D.page * o.clientWidth, behavior: (r = window.matchMedia) != null && r.call(window, "(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" }), Y(), O(o), (c = zt.querySelector('[data-more-page="' + D.page + '"]')) == null || c.focus({ preventScroll: !0 }));
  }
  let Mt = 0;
  zt.addEventListener("scroll", (t) => {
    var o;
    const e = t.target;
    !((o = e.matches) != null && o.call(e, "[data-more-pages]")) || !D || (clearTimeout(Mt), Mt = setTimeout(() => {
      if (!D) return;
      const r = Math.round(e.scrollLeft / Math.max(1, e.clientWidth));
      r !== (D.page || 0) && (D.page = r, Y(), O(e));
    }, 80));
  }, !0), setInterval(() => {
    D && S();
  }, 15 * 1e3);
  function bt(t, e) {
    var c, h;
    const o = !!(D && e && zt.contains(e)), r = o && zt.querySelector(".tfMore");
    if (o && (D.scroll = r.scrollTop), o && !D.under) {
      const p = zt.querySelector(".tfMorePair"), v = { more: D, parts: xo, opener: e };
      p.classList.add("still"), p.style.transform = "", p.inert = !0, Gn.innerHTML = "", Gn.appendChild(p), Gn.classList.toggle("wide", zt.classList.contains("wide")), Gn.hidden = !1, zt.hidden = !0, zt.innerHTML = "", D = { id: t, opener: e, back: null, frame: null, under: v, at: Number((c = e == null ? void 0 : e.dataset) == null ? void 0 : c.at) || null }, It();
      return;
    }
    D = { id: t, opener: o ? D.opener : e, back: o ? D : null, frame: o ? D.frame || { wide: r.classList.contains("wide"), h: r.offsetHeight } : null, under: o ? D.under : null, at: Number((h = e == null ? void 0 : e.dataset) == null ? void 0 : h.at) || null }, It();
  }
  let mt = !1;
  function It() {
    xo = [], mt = !zt.hidden, ae.forEach((t, e) => {
      e !== D.id && zt.contains(t.el) && (t.destroy(), ae.delete(e));
    }), S(), mt = !1;
  }
  function ee() {
    if (!D) return;
    const t = D;
    dh(zt, () => {
      D === t && Wt();
    });
  }
  function Wt() {
    var r, c, h, p, v, w, _, P;
    const t = D == null ? void 0 : D.opener, e = D == null ? void 0 : D.under;
    D = null, ae.forEach((T, N) => {
      zt.contains(T.el) && (T.destroy(), ae.delete(N));
    }), Ya.forEach((T, N) => {
      N.startsWith("more:") && Ya.delete(N);
    }), zt.hidden = !0, zt.innerHTML = "";
    const o = { preventScroll: !0 };
    if (e) {
      const T = Gn.firstElementChild;
      D = e.more, xo = e.parts, T && (T.inert = !1, zt.appendChild(T)), zt.classList.toggle("wide", Gn.classList.contains("wide")), Gn.hidden = !0, Gn.innerHTML = "", zt.hidden = !1;
      const N = zt.querySelector(".tfMore");
      N && (N.scrollTop = D.scroll || 0), S(), (c = (r = e.opener) != null && r.isConnected ? e.opener : zt.querySelector("[data-more-close]")) == null || c.focus(o);
      return;
    }
    t != null && t.isConnected ? t.focus(o) : (h = t == null ? void 0 : t.dataset) != null && h.more ? (p = E.querySelector('[data-more="' + CSS.escape(t.dataset.more) + '"]')) == null || p.focus(o) : (v = t == null ? void 0 : t.dataset) != null && v.summary ? (w = E.querySelector('[data-summary="' + CSS.escape(t.dataset.summary) + '"]')) == null || w.focus(o) : (_ = t == null ? void 0 : t.hasAttribute) != null && _.call(t, "data-favs-edit") && ((P = E.querySelector("[data-favs-edit]")) == null || P.focus(o));
  }
  const Ht = { moisture: "moisture", light: "light", brightness: "light", temperature: "temperature", fertility: "fertility", conductivity: "fertility" };
  function Dt(t) {
    const e = String(ve(t).problem || ""), o = "sensor." + t.split(".")[1] + "_";
    return e === "none" ? [] : e.split(",").map((r) => r.trim().split(" ")).map(([r, c]) => {
      const h = Ht[r], p = o + h;
      if (!h || !M[p] || !Ts[h]) return "";
      const v = ve(p).unit_of_measurement || "", [w, _] = Ts[h], P = c === "low";
      return '<div class="tfMoreGroup tfPlantProblem"><div class="tfMoreGroupName">' + J(Pt(p)) + '</div><svg class="tfGraph tfPlantGraph" data-plant-graph="' + J(p) + '" data-guide="' + (P ? w : _) + '" data-guide-word="' + J("Wants " + (P ? "" : "up to ") + (P ? w : _).toLocaleString() + (v === "%" ? "%" : v ? " " + v : "") + (P ? " or more" : "")) + '" role="img" aria-label="' + J(Pt(p)) + ', last 24 hours"></svg></div>';
    }).filter(Boolean);
  }
  const we = (t) => t.querySelectorAll("[data-plant-graph]").forEach((e) => to(e.dataset.plantGraph, e, { guide: Number(e.dataset.guide), guideWord: e.dataset.guideWord }).then(() => qi(e)));
  function xe(t, e, o, r = {}) {
    const c = e.map((ct) => ct[1]).concat(r.guide != null ? [r.guide] : []), h = r.zero ? 0 : Math.min(...c), p = Math.max(...c), v = Math.max(120, t.clientWidth || 260), w = Math.max(60, t.clientHeight || 130), _ = 8, P = w - 20, T = Date.now() - 24 * 3600 * 1e3, N = 24 * 3600 * 1e3, tt = (ct) => Math.max(0, Math.min(v, (ct - T) / N * v)), rt = (ct) => p === h ? (_ + P) / 2 : P - (ct - h) / (p - h) * (P - _);
    let $ = "M" + tt(e[0][0]).toFixed(1) + " " + rt(e[0][1]).toFixed(1);
    if (e.length > 2) $ = yu(e.map((ct) => [tt(ct[0]), rt(ct[1])]));
    else for (let ct = 1; ct < e.length; ct++) $ += r.smooth ? "L" + tt(e[ct][0]).toFixed(1) + " " + rt(e[ct][1]).toFixed(1) : "H" + tt(e[ct][0]).toFixed(1) + "V" + rt(e[ct][1]).toFixed(1);
    t.setAttribute("viewBox", "0 0 " + v + " " + w), t.setAttribute("aria-label", o), t.innerHTML = ku(v, _, P) + '<path d="' + $ + "V" + P + "H" + tt(e[0][0]).toFixed(1) + 'Z" fill="' + (r.colour || "var(--primary)") + '" fill-opacity=".14"/><path d="' + $ + '" fill="none" stroke="' + (r.colour || "var(--primary)") + '" stroke-width="' + ba.graphs.weight + '" stroke-linejoin="round" stroke-linecap="round"/><text x="0" y="' + (w - 4) + '">24 h ago</text><text x="' + v + '" y="' + (w - 4) + '" text-anchor="end">Now</text>' + (r.guide != null ? '<line class="tfGuide" x1="0" x2="' + v + '" y1="' + rt(r.guide).toFixed(1) + '" y2="' + rt(r.guide).toFixed(1) + '"/><text class="tfGuideWord" x="' + v + '" y="' + (rt(r.guide) < 20 ? rt(r.guide) + 14 : rt(r.guide) - 5).toFixed(1) + '" text-anchor="end">' + J(r.guideWord || "") + "</text>" : "");
  }
  const Gt = { lock: ["unlocked", "open", "opening"], cover: ["open", "opening", "closing"], valve: ["open", "opening", "closing"], vacuum: ["cleaning", "returning"] }, ke = (t, e) => {
    const o = t.split(".")[0];
    return Gt[o] ? Gt[o].includes(e) : o === "alarm_control_panel" || o === "climate" || o === "media_player" ? !["off", "standby", "disarmed", "unavailable", "unknown"].includes(e) : e === "on";
  }, Pe = (t) => {
    const e = t.split(".")[0], o = ve(t).device_class;
    return e === "binary_sensor" ? { moisture: "Wet", smoke: "Smoke", gas: "Gas", carbon_monoxide: "Carbon monoxide", safety: "Unsafe" }[o] || ($d.includes(o) ? "Open" : "On") : { lock: "Unlocked", cover: "Open", valve: "Open", vacuum: "Cleaning", alarm_control_panel: "Armed" }[e] || "On";
  }, de = /* @__PURE__ */ new Map();
  let re = 0;
  async function ka(t) {
    let e = de.get(t);
    if (!e || Date.now() - e.at > 60 * 1e3) {
      let c = [];
      try {
        const h = await W({ type: "history/history_during_period", start_time: new Date(Date.now() - 864e5).toISOString(), entity_ids: [t], minimal_response: !0, no_attributes: !0, significant_changes_only: !1 });
        c = ((h == null ? void 0 : h[t]) || []).map((p) => [p.lu != null ? p.lu * 1e3 : Date.parse(p.last_updated || p.last_changed), String(p.s ?? p.state)]).filter(([p]) => Number.isFinite(p));
      } catch {
      }
      c.length || (c = (Jr || []).filter((h) => h.entity_id === t).map((h) => [h.when * 1e3, String(h.state)])), e = { at: Date.now(), pts: c }, de.set(t, e);
    }
    const o = M[t], r = e.pts.slice().sort((c, h) => c[0] - h[0]);
    return o && (!r.length || r[r.length - 1][1] !== o.state) && r.push([Date.parse(o.last_changed) || Date.now(), o.state]), r;
  }
  async function Ba(t, e, o) {
    const r = await ka(t);
    if (!e.isConnected) return;
    const c = r.map(([Z, Vt]) => [Z, Number(Vt)]);
    if (r.length > 1 && c.every(([, Z]) => Number.isFinite(Z))) {
      xe(e, c, Pt(t) + ", last 24 hours");
      return;
    }
    const h = Date.now(), p = h - 864e5, v = Math.max(200, e.clientWidth || 360), w = 62, _ = (Z) => Math.max(0, Math.min(v, (Z - p) / 864e5 * v)), P = [];
    let T = null;
    r.forEach(([Z, Vt]) => {
      const Ne = ke(t, Vt);
      Ne && T == null ? T = Math.max(Z, p) : !Ne && T != null && (P.push([T, Math.max(Z, p)]), T = null);
    }), T != null && P.push([T, h]);
    const N = mr(t) ? "var(--danger)" : t.startsWith("light.") ? "#ffaa00" : "var(--primary)", tt = Pe(t), rt = "tfDayClip" + ++re, $ = P.map(([Z, Vt]) => tt + (Vt >= h - 1e3 && Z <= p + 1e3 ? " all day" : Vt >= h - 1e3 ? " since " + ia(Z) : Z <= p + 1e3 ? " until " + ia(Vt) : " " + ia(Z) + "–" + ia(Vt)));
    let ct = "", j = -1 / 0;
    P.forEach(([Z], Vt) => {
      const Ne = $[Vt].length * 5.4, le = Math.min(_(Z), v - Ne);
      le < j + 8 || (ct += '<text x="' + le.toFixed(1) + '" y="10">' + J($[Vt]) + "</text>", j = le + Ne);
    });
    let yt = '<text x="' + v + '" y="' + (w - 2) + '" text-anchor="end">Now</text>';
    [0, 6, 12, 18].forEach((Z) => {
      let Vt = new Date(h).setHours(Z, 0, 0, 0);
      Vt > h && (Vt -= 864e5), _(Vt) > 8 && _(Vt) < v - 34 && (yt += '<text x="' + _(Vt).toFixed(1) + '" y="' + (w - 2) + '" text-anchor="middle">' + String(Z).padStart(2, "0") + "</text>");
    }), e.setAttribute("viewBox", "0 0 " + v + " " + w), e.setAttribute("aria-label", Pt(t) + ", last 24 hours: " + ($.length ? $.join(", ") : "no changes")), e.innerHTML = '<clipPath id="' + rt + '"><rect x="0" y="18" width="' + v + '" height="26" rx="8"/></clipPath>' + ct + '<rect x="0" y="18" width="' + v + '" height="26" rx="8" fill="var(--text)" fill-opacity=".1"/><g clip-path="url(#' + rt + ')">' + P.map(([Z, Vt]) => '<rect x="' + _(Z).toFixed(1) + '" y="18" width="' + Math.max(2, _(Vt) - _(Z)).toFixed(1) + '" height="26" fill="' + N + '"/>').join("") + "</g>" + (o && o >= p ? '<line x1="' + _(o).toFixed(1) + '" x2="' + _(o).toFixed(1) + '" y1="13" y2="49" stroke="var(--text)" stroke-width="2" stroke-linecap="round"/>' : "") + yt;
  }
  function Xe(t) {
    var r;
    const e = Number((r = M[t]) == null ? void 0 : r.state), o = Date.now();
    if (ve(t).state_class === "total_increasing") {
      const c = (/* @__PURE__ */ new Date()).setHours(0, 0, 0, 0), h = Math.max(1, o - c);
      return [...Array(49)].map((p, v) => c + h * v / 48).map((p) => [p, Math.round(e * Math.pow((p - c) / h, 1.3) * 100) / 100]);
    }
    if (ki(t) && t.endsWith("_moisture")) return [...Array(48)].map((c, h) => [o - (48 - h) * 30 * 60 * 1e3, Math.round((e + 22 * Math.pow(1 - h / 48, 1.2)) * 10) / 10]);
    if (ki(t) && t.endsWith("_light")) {
      const c = (p) => {
        const v = new Date(p).getHours() + new Date(p).getMinutes() / 60;
        return Math.max(0, Math.sin((v - 6) / 14 * Math.PI));
      }, h = (p) => 0.8 + 0.2 * c(p);
      return [...Array(48)].map((p, v) => o - (48 - v) * 30 * 60 * 1e3).map((p) => [p, Math.round(e * h(p) / h(o))]);
    }
    return [...Array(48)].map((c, h) => [o - (48 - h) * 30 * 60 * 1e3, Math.round(e * (0.96 + 0.04 * Math.sin(h / 6)) * 10) / 10]);
  }
  async function to(t, e, o = {}) {
    var rt, $;
    let r = lt.get(t);
    if (t.endsWith("_solar_power")) r = { at: Date.now(), points: np() };
    else if (ki(t)) r = { at: Date.now(), points: Xe(t) };
    else if (!r || Date.now() - r.at > 5 * 60 * 1e3) {
      try {
        const ct = new Date(Date.now() - 864e5).toISOString(), j = await W({ type: "history/history_during_period", start_time: ct, entity_ids: [t], minimal_response: !0, no_attributes: !0, significant_changes_only: !1 }), yt = ((j == null ? void 0 : j[t]) || []).map((Z) => [Z.lu != null ? Z.lu * 1e3 : Date.parse(Z.last_updated || Z.last_changed), Number(Z.s ?? Z.state)]).filter(([Z, Vt]) => Number.isFinite(Z) && Number.isFinite(Vt));
        r = { at: Date.now(), points: yt };
      } catch {
        r = { at: Date.now(), points: [] };
      }
      lt.set(t, r);
    }
    const c = e || E.querySelector('[data-graph="' + CSS.escape(t) + '"]');
    if (!c) return;
    const h = M[t], p = ((rt = h == null ? void 0 : h.attributes) == null ? void 0 : rt.unit_of_measurement) || "", v = r.points.slice(), w = Number(h == null ? void 0 : h.state);
    if (Number.isFinite(w) && !t.endsWith("_solar_power") && v.push([Date.now(), w]), v.length < 2) {
      c.setAttribute("aria-label", Pt(t) + ": no history for the last 24 hours"), c.innerHTML = '<text x="0" y="16">No history for the last 24 hours</text>';
      return;
    }
    const _ = v.map((ct) => ct[1]), P = Math.min(..._), T = Math.max(..._), N = (ct) => ct.toLocaleString(void 0, { maximumFractionDigits: Math.abs(ct) >= 100 ? 0 : 1 }), tt = (($ = h == null ? void 0 : h.attributes) == null ? void 0 : $.state_class) === "total_increasing";
    xe(c, v, Pt(t) + ", last 24 hours: " + (tt ? "+" + N(_[_.length - 1] - _[0]) : P === T ? N(P) : N(P) + " to " + N(T)) + (p ? " " + p : ""), { smooth: t.endsWith("_solar_power"), zero: t.endsWith("_solar_power"), ...o });
  }
  function Rt() {
    const t = E == null ? void 0 : E.querySelector("[data-solar]");
    if (!t) return;
    const e = np();
    xe(t, e, "Solar, last 24 hours: up to " + Re(Math.max(...e.map((o) => o[1])), 1) + " kW", { smooth: !0, zero: !0, colour: "#ffaa00" });
  }
  function pe(t, e) {
    const o = e.entity_id, r = $t.get(o) || {}, c = { open_cover: 100, close_cover: 0, set_cover_position: e.position, toggle: In(o) > 0 ? 0 : 100 }[t], h = { open_cover_tilt: 100, close_cover_tilt: 0, set_cover_tilt_position: e.tilt_position }[t];
    c != null && (r.pos = c), h != null && (r.tilt = h), t === "stop_cover" && (delete r.pos, delete r.tilt), t === "stop_cover_tilt" && delete r.tilt, r.at = Date.now(), $t.set(o, r);
  }
  function Ma(t, e, o) {
    var c;
    const r = o == null ? void 0 : o.entity_id;
    return t !== "light" || typeof r != "string" || !Bo[r] || !Pa(r) || o.brightness_pct != null || o.brightness != null ? [e, o] : e !== "turn_on" && !(e === "toggle" && ((c = M[r]) == null ? void 0 : c.state) !== "on") ? [e, o] : ["turn_on", { ...o, brightness_pct: Bo[r] }];
  }
  function la(t, e, o, r) {
    let c = { entity_id: o, ...r || {} };
    return [e, c] = Ma(t, e, c), t === "cover" && pe(e, c), Xt[o] = (Xt[o] || 0) + 1, Mi.set(Kp, JSON.stringify(Xt)), wn.call(t, e, c) ? Promise.resolve() : Promise.resolve(F(t, e, c));
  }
  function Pr(t) {
    const [e, o, r, c] = t.split("|");
    la(e, o, r, c ? JSON.parse(c) : null).catch(() => {
    });
  }
  function yo(t, e) {
    gt.set("pos|" + t, e), ln.delete(t), xo = xo.map(() => ""), [E, zt].forEach((r) => r.querySelectorAll('[data-blocks="' + CSS.escape(t) + '"]').forEach((c) => ml(c, e)));
    const o = E.querySelector('.tfAction[data-k="' + CSS.escape(t) + '"] .tfName .activityRowMeta');
    if (o && (o.textContent = Math.round(e) + "%"), (D == null ? void 0 : D.id) === t) {
      const r = zt.querySelector(".tfMoreState"), c = zt.querySelector(".tfMoreSub");
      r && (r.textContent = Math.round(e) + "%", r.classList.add("live")), c && (c.textContent = "Currently " + In(t) + "%");
    }
    s(t).forEach((r) => r.update(Cs(t)));
  }
  const il = (t, e) => {
    const o = t.shiftKey ? 10 : 1, r = { ArrowUp: e + o, ArrowRight: e + o, ArrowDown: e - o, ArrowLeft: e - o, PageUp: e + 25, PageDown: e - 25, Home: 0, End: 100 }[t.key];
    return r == null ? null : Math.max(0, Math.min(100, Math.round(r)));
  };
  function rl(t, e) {
    var $;
    const o = t.dataset.blocks;
    ($ = t.setPointerCapture) == null || $.call(t, e.pointerId);
    const r = (ct) => {
      const j = t.getBoundingClientRect();
      return Math.max(0, Math.min(100, (ct.clientX - j.left) / j.width * 100));
    }, c = r(e), h = e.clientX;
    let p = !1, v = ai(o), w = c, _ = 0;
    const P = () => {
      v = Math.abs(w - v) < 0.2 ? w : v + (w - v) * 0.14, yo(o, v), _ = requestAnimationFrame(P);
    }, T = () => {
      p || (p = !0, t.classList.add("fine"), _ = requestAnimationFrame(P));
    }, N = setTimeout(T, 350), tt = (ct) => {
      w = r(ct), Math.abs(ct.clientX - h) > 6 && (clearTimeout(N), T());
    }, rt = () => {
      clearTimeout(N), cancelAnimationFrame(_), t.removeEventListener("pointermove", tt), t.removeEventListener("pointerup", rt), t.removeEventListener("pointercancel", rt), t.classList.remove("fine"), yo(o, p ? Math.round(v) : (Math.min(3, Math.floor(c / 25)) + 1) * 25), _e("pos", o);
    };
    t.addEventListener("pointermove", tt), t.addEventListener("pointerup", rt), t.addEventListener("pointercancel", rt);
  }
  function Nr(t) {
    var v, w;
    const [e, o] = t.dataset.open.split("|"), r = t.closest(".tfCard"), c = t.getBoundingClientRect(), h = (v = t.querySelector(".tfIcon")) == null ? void 0 : v.getBoundingClientRect();
    L = { key: e, id: o, h: r ? Math.round(r.getBoundingClientRect().height) : 0, from: c, chip: h }, ln.delete(e), sa();
    const p = E.querySelector(".tfOpen");
    p && (L.rel = c.top - p.getBoundingClientRect().top), rh(p, c, h), (w = E.querySelector(".tfOpen [data-close]")) == null || w.focus({ preventScroll: !0 });
  }
  function Qo(t) {
    var e;
    R = t.dataset.area, E.querySelectorAll(".tfAreaPanel").forEach((o) => {
      var c;
      const r = o === t;
      o.classList.toggle("active", r), o.setAttribute("aria-expanded", String(r)), (c = o.querySelector(".panelExpanded")) == null || c.toggleAttribute("inert", !r);
    }), ln.set("areas", Qt(((e = E.querySelector('[data-k="areas"]')) == null ? void 0 : e.style.order) || 1));
  }
  const yi = {
    bright: { value: (t, e) => Math.round(e * 100), text: (t, e) => e ? e + "%" : "Off", send: (t, e) => e > 0 ? ["light", "turn_on", { brightness_pct: e }] : ["light", "turn_off", {}] },
    ct: { value: (t, e) => {
      const [o, r] = fa(t);
      return Math.round(o + e * (r - o));
    }, text: (t, e) => e.toLocaleString() + "k", send: (t, e) => ["light", "turn_on", { color_temp_kelvin: e }] },
    hue: { value: (t, e) => Math.round(e * 360), text: () => "Colour", send: (t, e) => {
      var o;
      return ["light", "turn_on", { hs_color: [e, Math.max(60, ((o = ve(t).hs_color) == null ? void 0 : o[1]) || 100)] }];
    } },
    pos: { value: (t, e) => Math.round(e * 100), text: (t, e) => Math.round(e) + "%", send: (t, e) => ["cover", "set_cover_position", { position: Math.round(e) }] },
    tilt: { value: (t, e) => Math.round(e * 100), text: (t, e) => "Tilt " + e + "%", send: (t, e) => ["cover", "set_cover_tilt_position", { tilt_position: e }] },
    vol: { value: (t, e) => Math.round(e * 100) / 100, text: (t, e) => Math.round(e * 100) + "%", send: (t, e) => ["media_player", "volume_set", { volume_level: e }] }
  };
  function ie(t, e, o, r) {
    var w;
    const c = yi[e].value(o, r);
    gt.set(e + "|" + o, c);
    const h = Math.round(r * 100) + "%", p = t.querySelector("i");
    if (e === "tilt") {
      p.style.width = "calc((100% - 8px) * " + r + ")";
      const [_, P] = t.querySelectorAll("span");
      _.classList.toggle("lit", r > 0.08), P.classList.toggle("lit", r > 0.92), ln.delete(o), xo = xo.map(() => ""), s(o).forEach((T) => T.update(Cs(o)));
    } else if (p) p.style.width = h;
    else {
      let _ = t.querySelector("b");
      _ || (_ = document.createElement("b"), t.appendChild(_)), _.style.left = h;
    }
    t.setAttribute("aria-valuenow", String(Math.round(r * 100)));
    const v = (w = t.closest(".tfAction") || t.closest(".tfMore")) == null ? void 0 : w.querySelector(".tfName .activityRowMeta, .tfMoreState");
    v && (v.textContent = yi[e].text(o, c));
  }
  function _e(t, e) {
    const o = gt.get(t + "|" + e), [r, c, h] = yi[t].send(e, o), p = () => setTimeout(() => {
      gt.delete(t + "|" + e), sa();
    }, 1500);
    la(r, c, e, h).then(p, p);
  }
  function Je(t) {
    t.addEventListener("click", (e) => {
      var r;
      const o = e.target.closest("[data-open],[data-close],[data-act],[data-acts],[data-more],[data-more-close],[data-more-back],[data-details],[data-details-close],[data-go],[data-summary],[data-star],[data-favs-edit],[data-area-back],[data-board-more],[data-board-act],[data-board-show],[data-fav-hide],[data-energy-pick],[data-more-page],[data-path],.tfAreaPanel");
      if (Qa && !e.target.closest(".tfBoardMenu,[data-board-more]") && na(), !(!o || !t.contains(o) || o.disabled))
        if (o.dataset.boardMore)
          (Qa == null ? void 0 : Qa.key) === o.dataset.boardMore ? na(!0) : _l(o.dataset.boardMore, o);
        else if (o.dataset.boardAct) fd(Qa.key, o.dataset.boardAct);
        else if (o.dataset.boardShow) Ws(o.dataset.boardShow);
        else if (o.dataset.favHide) Br(o.dataset.favHide, !1);
        else if (o.dataset.energyPick) kl(o.dataset.energyPick);
        else if (o.dataset.act) Pr(o.dataset.act);
        else if (o.hasAttribute("data-details")) ol(!(D != null && D.details));
        else if (o.hasAttribute("data-details-close")) ol(!1);
        else if (o.dataset.summary) td(o.dataset.summary, o);
        else if (o.dataset.star) Xr(o.dataset.star);
        else if (o.hasAttribute("data-more-back")) {
          const c = D.id;
          D = D.back, It(), (r = zt.querySelector('.tfMore [data-more="' + CSS.escape(c) + '"]')) == null || r.focus({ preventScroll: !0 });
        } else if (o.hasAttribute("data-favs-edit")) bt("favourites", o);
        else if (o.dataset.acts) JSON.parse(o.dataset.acts).forEach(([c, h, p, v]) => la(c, h, p, v).catch(() => {
        }));
        else if (o.dataset.more) bt(o.dataset.more, o);
        else if (o.hasAttribute("data-more-close")) ee();
        else if (o.dataset.morePage) wt(Number(o.dataset.morePage));
        else if (o.dataset.path) vl(o.dataset.path);
        else if (o.dataset.go) Tn("room:" + o.dataset.go);
        else if (o.hasAttribute("data-area-back")) tl();
        else if (o.dataset.open) Nr(o);
        else if (o.hasAttribute("data-close")) {
          const c = L, h = o.closest(".tfOpen"), p = h == null ? void 0 : h.getBoundingClientRect().top, v = c.from && p != null ? new DOMRect(c.from.left, p + (c.rel || 0), c.from.width, c.from.height) : c.from;
          sh(h, v, () => {
            var w;
            L === c && (L = null, ln.delete(c.key), sa(), (w = E.querySelector('[data-open="' + CSS.escape(c.key + "|" + c.id) + '"]')) == null || w.focus({ preventScroll: !0 }));
          });
        } else o.classList.contains("tfAreaPanel") && !o.classList.contains("active") && Qo(o);
    }), t.addEventListener("keydown", (e) => {
      var r, c, h, p, v, w, _;
      const o = e.target;
      if ((r = o.dataset) != null && r.open && (e.key === "Enter" || e.key === " ") && (e.preventDefault(), Nr(o)), (c = o.dataset) != null && c.energyPick && (e.key === "Enter" || e.key === " ") && (e.preventDefault(), kl(o.dataset.energyPick)), (h = o.classList) != null && h.contains("tfAreaPanel") && (e.key === "Enter" || e.key === " ") && (e.preventDefault(), Qo(o)), (p = o.dataset) != null && p.summary && (e.key === "Enter" || e.key === " ") && (e.preventDefault(), td(o.dataset.summary, o)), e.key === "Escape" && Qa && t === E) {
        e.preventDefault(), na(!0);
        return;
      }
      if (e.key === "Escape" && Ja && t === E) {
        e.preventDefault(), Tr(!1), (v = u("dashEditNav")) == null || v.focus();
        return;
      }
      if (e.key === "Escape" && q && t === E && (e.preventDefault(), tl()), (w = o.dataset) != null && w.blocks) {
        const P = o.dataset.blocks, T = il(e, Math.round(ai(P)));
        if (T == null) return;
        e.preventDefault(), yo(P, T), clearTimeout(Fa.get(P)), Fa.set(P, setTimeout(() => _e("pos", P), 500));
        return;
      }
      if ((_ = o.dataset) != null && _.drag && ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"].includes(e.key)) {
        e.preventDefault();
        const [P, T] = o.dataset.drag.split("|"), N = Number(o.getAttribute("aria-valuenow")) / 100, tt = e.key === "Home" ? 0 : e.key === "End" ? 1 : Math.max(0, Math.min(1, N + (e.key === "ArrowLeft" || e.key === "ArrowDown" ? -0.05 : 0.05)));
        ie(o, P, T, tt), _e(P, T);
      }
    }), t.addEventListener("pointerdown", (e) => {
      var Ne;
      const o = e.target.closest("[data-blocks]");
      if (o && e.button === 0) {
        e.preventDefault(), rl(o, e);
        return;
      }
      const r = e.target.closest("[data-drag]");
      if (!r || e.button > 0) return;
      const [c, h] = r.dataset.drag.split("|"), p = c === "bright" && !Pa(h), v = e.pointerType !== "mouse";
      if (p && !v) {
        Pr(Se("light", "toggle", h));
        return;
      }
      const w = c === "bright" && ((Ne = M[h]) == null ? void 0 : Ne.state) !== "on", _ = c === "tilt" ? 4 : 0, P = () => r.getBoundingClientRect().width - _ * 2, T = (le) => {
        const je = r.getBoundingClientRect();
        return Math.max(0, Math.min(1, (le.clientX - je.left - _) / P()));
      };
      let N = v ? "waiting" : w ? "pressed" : "dragging", tt = 0;
      const rt = e.clientX, $ = e.clientY, ct = (le, je) => Math.hypot(le.clientX - rt, le.clientY - $) > je, j = () => {
        try {
          r.setPointerCapture(e.pointerId);
        } catch {
        }
      };
      v || (e.preventDefault(), j()), N === "dragging" && ie(r, c, h, T(e));
      const yt = () => {
        var le, je;
        N = "sliding", Lt = r, r.classList.add("held"), j(), (le = navigator.userActivation) != null && le.hasBeenActive && ((je = navigator.vibrate) == null || je.call(navigator, 8)), tt = w ? (Bo[h] ?? 100) / 100 : Number(r.getAttribute("aria-valuenow")) / 100;
      }, Z = (le) => {
        N === "waiting" && ct(le, St) ? !p && Math.abs(le.clientX - rt) > Math.abs(le.clientY - $) ? yt() : N = "gone" : N === "pressed" && ct(le, 4) && (N = "dragging"), N === "sliding" ? ie(r, c, h, Math.max(0, Math.min(1, tt + (le.clientX - rt) / P()))) : N === "dragging" && ie(r, c, h, T(le));
      }, Vt = (le) => {
        ["pointermove", "pointerup", "pointercancel"].forEach((je, Ra) => r.removeEventListener(je, Ra ? Vt : Z)), r.classList.remove("held"), Lt === r && (Lt = null), N === "sliding" || N === "dragging" ? _e(c, h) : le.type === "pointerup" && p ? Pr(Se("light", "toggle", h)) : le.type === "pointerup" && w && (N === "waiting" || N === "pressed") && la("light", "turn_on", h).catch(() => {
        });
      };
      r.addEventListener("pointermove", Z), r.addEventListener("pointerup", Vt), r.addEventListener("pointercancel", Vt);
    }), t.addEventListener("touchmove", (e) => {
      Lt && e.cancelable && e.preventDefault();
    }, { passive: !1 });
  }
  return E && k && (Xa(), Je(E), Je(zt), zt.addEventListener("click", (t) => {
    t.target === zt && ee();
  }), (Sa = n.getElementById("homeNav")) == null || Sa.addEventListener("click", () => {
    q && tl();
  }), (ja = n.querySelector(".bottomNav")) == null || ja.insertAdjacentHTML("beforeend", '<button class="navBtn" id="dashEditNav" type="button" title="Edit" aria-label="Edit the dashboard" aria-pressed="false" hidden>' + Kd + "</button>"), (mn = u("dashEditNav")) == null || mn.addEventListener("click", () => A ? $s(!bo) : Tr(!Ja)), E.addEventListener("pointerdown", bc), E.addEventListener("pointerdown", Sr), E.addEventListener("click", (t) => {
    A && bo && t.target.closest(".tfBoardItem") && (t.preventDefault(), t.stopPropagation());
  }, !0), E.addEventListener("scroll", (t) => {
    var e;
    (e = t.target.classList) != null && e.contains("hcFadeList") && ud(t.target);
  }, !0), new ResizeObserver(() => {
    g.classList.contains("tfDash") && Hs() !== ci ? sa() : is();
  }).observe(E), window.addEventListener("resize", is, { passive: !0 }), zt.addEventListener("keydown", (t) => {
    var e, o;
    t.key === "Escape" ? (t.stopPropagation(), D != null && D.details ? ol(!1) : ee()) : (t.key === "ArrowLeft" || t.key === "ArrowRight") && ((o = (e = t.target).closest) != null && o.call(e, ".tfMoreDots")) && (t.preventDefault(), wt(((D == null ? void 0 : D.page) || 0) + (t.key === "ArrowRight" ? 1 : -1)));
  })), at(), {
    update(t) {
      if (!k) return;
      const e = !Object.keys(M).length;
      M = { ...Object.fromEntries(Object.entries(M).filter(([r]) => ki(r))), ...t || {} };
      for (const r in M) r.startsWith("light.") && M[r].state === "on" && Pa(r) && xa(r, xn(M[r]));
      e ? _a() : sa();
    },
    // the bento's animation runs while it's mounted, so it goes while the card is away
    suspend() {
      Co = !0, ze == null || ze.destroy(), ze = null, pa == null || pa.forEach((t) => t.destroy()), pa = null;
    },
    resume() {
      Co = !1, !(!k || !(E != null && E.querySelector("[data-tf]"))) && (me.isConnected && jr(me.style.order), se());
    }
  };
}
const Um = "0.83.0", Fc = "move_assistant", Ym = "move_assistant", nu = "move_assistant_checkin_reminder";
function Zm() {
  if (document.getElementById("move-assistant-inter")) return;
  const n = document.createElement("link");
  n.id = "move-assistant-inter", n.rel = "stylesheet", n.href = "https://fonts.googleapis.com/css2?family=Geist:wght@200;300;400;500;600;700&family=Inter:ital,wght@0,400;0,500;0,600;0,700;0,800;1,500&display=swap", document.head.appendChild(n);
}
class Km extends HTMLElement {
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
    Zm();
    const l = this.shadowRoot || this.attachShadow({ mode: "open" });
    l.innerHTML = `<style>${ju}${zu}${Gu}${Uu}</style>${Yu}`;
    const i = l.getElementById("app");
    i.style.opacity = "0";
    let u = null;
    try {
      const g = await this._hass.callWS({
        type: "frontend/get_user_data",
        key: Fc
      });
      u = (g == null ? void 0 : g.value) ?? null;
    } catch {
    }
    this._lastSaved = JSON.stringify(u), this._app = hf(l, {
      data: u,
      save: (g) => this._save(g),
      fire: (g, x) => this._fire(g, x),
      ws: (g) => this._hass.callWS(g),
      subscribe: (g, x) => {
        var k, A;
        return (A = (k = this._hass) == null ? void 0 : k.connection) != null && A.subscribeMessage ? this._hass.connection.subscribeMessage(x, g) : Promise.reject(new Error("no connection"));
      },
      notifyServices: () => {
        var g, x;
        return Object.keys(((x = (g = this._hass) == null ? void 0 : g.services) == null ? void 0 : x.notify) || {}).sort();
      },
      setReminderAutomation: (g) => this._setReminderAutomation(g),
      setLight: (g) => this.classList.toggle("lightBody", g),
      fullscreenSupported: !!(this.requestFullscreen || this.webkitRequestFullscreen),
      toggleFullscreen: () => this._toggleFullscreen()
    }), this._lastStates = this._hass.states, this._app.updateStates(this._hass.states), this._test = Gm(l, { config: this._config, getHass: () => this._hass }), this._test.update(this._hass.states), oh(l, i), lh(l), this.isConnected || (this._app.suspend(), this._test.suspend()), i.style.transition = "opacity .2s ease", i.style.opacity = "", this._subscribe();
  }
  _subscribe() {
    var i;
    const l = (i = this._hass) == null ? void 0 : i.connection;
    l != null && l.subscribeMessage && l.subscribeMessage(
      (u) => {
        var x;
        const g = JSON.stringify((u == null ? void 0 : u.value) ?? null);
        g === this._lastSaved || g === this._pendingJson || (this._lastSaved = g, (x = this._app) == null || x.applyRemoteData(u.value));
      },
      { type: "frontend/subscribe_user_data", key: Fc }
    ).catch(() => {
    });
  }
  _save(l) {
    this._pendingJson = JSON.stringify(l), clearTimeout(this._saveTimer), this._saveTimer = setTimeout(async () => {
      const i = this._pendingJson;
      try {
        await this._hass.callWS({
          type: "frontend/set_user_data",
          key: Fc,
          value: JSON.parse(i)
        }), this._lastSaved = i;
      } catch {
        this._toast("Couldn't save to Home Assistant");
      }
    }, 400);
  }
  _fire(l, i = {}) {
    var u, g;
    ((u = this._config) == null ? void 0 : u.events) !== !1 && ((g = this._hass) == null || g.callWS({
      type: "fire_event",
      event_type: Ym,
      event_data: { action: l, ...i }
    }).catch(() => {
    }));
  }
  // Keeps one Home Assistant automation in sync with the check-in times.
  // Passing null removes it.
  async _setReminderAutomation(l) {
    const i = `config/automation/config/${nu}`;
    if (!l) {
      try {
        await this._hass.callApi("DELETE", i);
      } catch (x) {
        if ((x == null ? void 0 : x.status_code) !== 404 && (x == null ? void 0 : x.status) !== 404) throw x;
      }
      return;
    }
    const u = (x) => `${x}:00`, g = window.location.pathname;
    await this._hass.callApi("POST", i, {
      id: nu,
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
            data: { url: g, clickAction: g }
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
customElements.get("move-assistant-card") || (customElements.define("move-assistant-card", Km), window.customCards = window.customCards || [], window.customCards.push({
  type: "move-assistant-card",
  name: "Move Assistant",
  description: "Guided movement timer with your Home Assistant activity data.",
  preview: !1
}), console.info(`%c MOVE ASSISTANT %c ${Um} `, "background:#D0FF00;color:#090909;font-weight:700", ""));
