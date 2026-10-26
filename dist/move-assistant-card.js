const Xl = ':host{display:flex;flex-direction:column;min-height:calc(100dvh - var(--header-height,0px));position:relative;background:#050505;color-scheme:dark;--color-bg-ground:#090909;--color-bg-card:#222222;--color-bg-tile:#2b2b2b;--color-fill-bright:#f1f1f1;--color-text-primary:#f1f1f1;--color-text-muted:#969696;--color-text-on-bright:#090909;--color-line:rgba(255,255,255,.14);--color-border-focus:#03a9f4;--color-accent-primary:#03a9f4;--color-accent-secondary:#d0ff00;--color-text-accent:#d0ff00;--color-text-on-accent:#090909;--color-bg-resting:#1f7a4d;--color-bg-danger:#311313;--color-bg-danger-fill:#d53d3d;--color-border-danger:#8c2e2e;--color-text-danger:#ff7777;--color-text-on-danger:#ffffff;--color-state-hover:rgba(255,255,255,.08);--color-bg-chip:#090909;--color-fill-selected:#f1f1f1;--color-text-on-selected:#090909;--color-bg-segment-selected:#2b2b2b;--wx-clear:#03a9f4;--wx-cloudy:#d8d6d6;--wx-night:#1d2b4f;--wx-cloud-bright:#f1f1f1;--color-state-pressed:rgba(255,255,255,.14);--color-state-hover-on-bright:rgba(0,0,0,.06);--color-state-pressed-on-bright:rgba(0,0,0,.12);--scrim:rgba(0,0,0,.66);--lift:rgba(0,0,0,.5)}*{box-sizing:border-box}#app{color:var(--text);font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif;transition:background .25s ease,color .25s ease;-webkit-font-smoothing:antialiased}[hidden]{display:none!important}button,input{font:inherit}#app{flex:1;display:flex;flex-direction:column;width:100%;margin:0;padding:0;background:var(--bg);text-align:left}#app{--bg:var(--color-bg-ground);--page:var(--color-bg-ground);--card:var(--color-bg-card);--card2:var(--color-bg-card);--modal:var(--color-bg-card);--timer:var(--color-bg-ground);--tile:var(--color-bg-tile);--tile-2:var(--color-bg-tile);--row:var(--color-bg-tile);--row-rest:var(--color-bg-tile);--raised:var(--color-bg-tile);--chip:var(--color-bg-tile);--segment:var(--color-bg-tile);--seg-on:var(--color-bg-segment-selected);--scroll-thumb:var(--color-bg-tile);--control:var(--color-bg-ground);--control-2:var(--color-bg-ground);--sunken:var(--color-bg-ground);--input:var(--color-bg-ground);--track:var(--color-bg-ground);--icon-bg:var(--color-bg-chip);--seg-bg:var(--color-bg-ground);--switch-off:var(--color-bg-ground);--stage:var(--color-bg-ground);--text:var(--color-text-primary);--soft:var(--color-text-primary);--muted:var(--color-text-muted);--accent-text:var(--color-text-accent);--border-hover:var(--color-text-muted);--knob-off:var(--color-text-muted);--today-ring:var(--color-text-muted);--line:var(--color-line);--lineb:var(--color-line);--field-line:var(--color-line);--divider:var(--color-line);--bright:var(--color-fill-bright);--slider-fill:var(--color-fill-bright);--segment-fill:var(--color-fill-bright);--timer-fill:var(--color-fill-bright);--on-bright:var(--color-text-on-bright);--hover:var(--color-state-hover);--wash-2:var(--color-state-hover);--danger:var(--color-text-danger);--danger-bg:var(--color-bg-danger);--danger-line:var(--color-border-danger);--danger-fill:var(--color-bg-danger-fill);--on-danger-fill:var(--color-text-on-danger);--primary:var(--color-accent-primary);--secondary:var(--color-accent-secondary)}.shell{flex:1;display:flex;flex-direction:column;position:relative;width:100%;background:var(--page);border-radius:0;overflow:visible;transition:background .28s ease}#app.resting .shell{background:var(--color-bg-resting)}#app.paused .shell{background:var(--primary)}#app.light.paused .shell{background:color-mix(in srgb,var(--primary) 55%,var(--color-bg-card))}#app.light{--color-bg-ground:#eeebe8;--color-bg-card:#fbf9f6;--color-bg-tile:#f3efea;--color-fill-bright:#26221e;--color-text-primary:#26221e;--color-text-muted:#6a625a;--color-text-on-bright:#fbf9f6;--color-text-on-accent:#26221e;--color-line:rgba(38,34,30,.12);--color-text-accent:#26221e;--color-accent-secondary:#03a9f4;--color-bg-resting:#7dbb98;--color-bg-danger:#f5dede;--color-border-danger:#e3a0a0;--color-text-danger:#b42a2a;--color-state-hover:rgba(38,34,30,.06);--color-state-pressed:rgba(38,34,30,.12);--color-bg-chip:#fbf9f6;--color-fill-selected:#fbf9f6;--color-text-on-selected:#26221e;--color-bg-segment-selected:#fbf9f6;--scrim:rgba(38,34,30,.32);--lift:rgba(38,34,30,.16)}:host(.lightBody){background:#eeebe8;color-scheme:light}.view{display:none;width:100%;max-width:1184px;margin:0 auto;padding:22px 22px 76.8px}.view.active{display:block;flex:1 0 auto}.card,.panel,.tile{position:relative;background:var(--card);border-radius:36px;padding:22px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.grid{display:grid;grid-template-columns:repeat(12,minmax(0,1fr));gap:16px}.eyebrow{text-transform:uppercase;color:var(--muted)}.sub{color:var(--muted);margin-top:6.4px}.pill,.primary,.navBtn,.tab,.back,.hideBtn,.addBtn{cursor:pointer}.pill{min-height:0;padding:3.2px 0;border:0;border-radius:0;background:transparent;color:var(--text);text-decoration-line:underline;text-decoration-thickness:.8px;text-underline-offset:3.2px}.tab,.back{border-radius:799.2px;min-height:41.6px;padding:0 16px;background:var(--control);border:.32px solid var(--line);color:var(--text)}.primary{border-radius:799.2px;min-height:41.6px;padding:0 16px;border:0;background:var(--bright);color:var(--on-bright)}.activityCard,.weekly{grid-column:span 6}.activityCard,.weekly{min-height:288px}.sourceTag{display:inline-flex;margin-top:11.2px;padding:4px;border-radius:799.2px;background:var(--chip);color:var(--soft)}.workoutFooter{display:flex;justify-content:space-between;align-items:end;gap:22.4px;flex-wrap:wrap;margin-top:22.4px;width:100%;box-sizing:border-box}.workoutGallery{grid-column:span 12;display:flex;gap:16px;height:288px;overflow:hidden}.workoutPanel{position:relative;height:288px;flex:1 1 72px;min-width:70.4px;background:var(--card);border-radius:28.8px;padding:22.4px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);overflow:hidden;box-sizing:border-box;transition:flex .32s ease;cursor:pointer}.workoutPanel.active{flex:7 1 0;min-width:0;cursor:default}.workoutPanel.addPanel{flex:0 0 73.6px;min-width:73.6px;display:flex;align-items:center;justify-content:center;padding:14.4px}.workoutPanel{--edge-proximity:0;--cursor-angle:45deg;--edge-sensitivity:36;--color-sensitivity:56;--cone-spread:25;--fill-opacity:.18;--glow-color-60:hsl(199deg 97% 68% / 60%);--glow-color-40:hsl(199deg 97% 68% / 40%);--glow-color-30:hsl(199deg 97% 68% / 30%);--glow-color-20:hsl(199deg 97% 68% / 20%);--glow-color-10:hsl(199deg 97% 68% / 10%);--gradient-one:radial-gradient(at 80% 55%,#c084fc 0px,transparent 50%);--gradient-two:radial-gradient(at 69% 34%,#f472b6 0px,transparent 50%);--gradient-three:radial-gradient(at 8% 6%,#38bdf8 0px,transparent 50%);--gradient-four:radial-gradient(at 41% 38%,#c084fc 0px,transparent 50%);--gradient-five:radial-gradient(at 86% 85%,#f472b6 0px,transparent 50%);--gradient-six:radial-gradient(at 82% 18%,#38bdf8 0px,transparent 50%);--gradient-seven:radial-gradient(at 51% 4%,#f472b6 0px,transparent 50%);isolation:isolate}.workoutPanel:before,.workoutPanel:after,.workoutPanel>.edgeLight{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;pointer-events:none;transition:opacity .18s ease-out}.workoutPanel:before{z-index:2;border:.8px solid transparent;background:linear-gradient(var(--card) 0 100%) padding-box,linear-gradient(#fff0 0,#fff0) border-box,var(--gradient-one) border-box,var(--gradient-two) border-box,var(--gradient-three) border-box,var(--gradient-four) border-box,var(--gradient-five) border-box,var(--gradient-six) border-box,var(--gradient-seven) border-box;opacity:clamp(0,calc(.72 * (var(--edge-proximity) - var(--color-sensitivity)) / (100 - var(--color-sensitivity))),.72);-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,black calc(var(--cone-spread) * 1%),transparent calc((var(--cone-spread) + 15) * 1%),transparent calc((100 - var(--cone-spread) - 15) * 1%),black calc((100 - var(--cone-spread)) * 1%));mask-image:conic-gradient(from var(--cursor-angle) at center,black calc(var(--cone-spread) * 1%),transparent calc((var(--cone-spread) + 15) * 1%),transparent calc((100 - var(--cone-spread) - 15) * 1%),black calc((100 - var(--cone-spread)) * 1%))}.workoutPanel:after{z-index:1;border:.8px solid transparent;background:var(--gradient-one) padding-box,var(--gradient-two) padding-box,var(--gradient-three) padding-box,var(--gradient-four) padding-box,var(--gradient-five) padding-box,var(--gradient-six) padding-box,var(--gradient-seven) padding-box;opacity:clamp(0,calc(var(--fill-opacity) * (var(--edge-proximity) - var(--color-sensitivity)) / (100 - var(--color-sensitivity))),.18);mix-blend-mode:soft-light;-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,transparent 5%,black 15%,black 85%,transparent 95%);mask-image:conic-gradient(from var(--cursor-angle) at center,transparent 5%,black 15%,black 85%,transparent 95%)}.workoutPanel>.edgeLight{top:-19.2px;right:-19.2px;bottom:-19.2px;left:-19.2px;z-index:3;opacity:clamp(0,calc(.62 * (var(--edge-proximity) - var(--edge-sensitivity)) / (100 - var(--edge-sensitivity))),.62);mix-blend-mode:plus-lighter;-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,black 2.5%,transparent 10%,transparent 90%,black 97.5%);mask-image:conic-gradient(from var(--cursor-angle) at center,black 2.5%,transparent 10%,transparent 90%,black 97.5%)}.workoutPanel>.edgeLight:before{content:"";position:absolute;top:19.2px;right:19.2px;bottom:19.2px;left:19.2px;border-radius:inherit;box-shadow:inset 0 0 0 .8px var(--glow-color-60),inset 0 0 2.4px 0 var(--glow-color-40),inset 0 0 6.4px 0 var(--glow-color-30),inset 0 0 12.8px 0 var(--glow-color-20),0 0 2.4px 0 var(--glow-color-40),0 0 6.4px 0 var(--glow-color-30),0 0 12.8px 0 var(--glow-color-20),0 0 22.4px 1.6px var(--glow-color-10)}.workoutPanel:not(.borderGlowActive):before,.workoutPanel:not(.borderGlowActive):after,.workoutPanel:not(.borderGlowActive)>.edgeLight{opacity:0;transition:opacity .35s ease-out}#app.light .workoutPanel{--glow-color-40:hsl(199deg 97% 48% / 40%);--glow-color-30:hsl(199deg 97% 48% / 30%);--glow-color-20:hsl(199deg 97% 48% / 20%);--glow-color-10:hsl(199deg 97% 48% / 10%)}.workoutPanel:not(.active):not(.addPanel) .panelExpanded{opacity:0;filter:blur(8px);pointer-events:none}.workoutPanel:not(.active):not(.addPanel) .panelCollapsed{opacity:1;filter:blur(0)}.workoutPanel.active .panelExpanded{opacity:1;filter:blur(0);pointer-events:auto}.workoutPanel.active .panelCollapsed{opacity:0;filter:blur(6.4px);pointer-events:none}.panelExpanded{position:relative;z-index:4;width:100%;height:100%;min-width:0;box-sizing:border-box;display:flex;flex-direction:column;justify-content:space-between;transition:opacity .22s ease,filter .22s ease}.panelCollapsed{position:absolute;top:0;right:0;bottom:0;left:0;z-index:4;display:flex;align-items:center;justify-content:center;opacity:0;filter:blur(6.4px);transition:opacity .22s ease,filter .22s ease}.panelCollapsedText{writing-mode:vertical-rl;transform:rotate(180deg);white-space:nowrap}.workoutPanelTop{display:flex;justify-content:space-between;align-items:flex-start;gap:22.4px;width:100%;min-width:0;box-sizing:border-box}.workoutPanelActions{display:flex;gap:22.4px;flex-wrap:wrap;align-items:center;justify-content:flex-end;margin-left:auto}.startWorkoutBtn{background:var(--primary)!important;color:var(--color-text-on-accent)!important}.startWorkoutBtn:hover{filter:brightness(1.04)}.addPanelPlus{position:relative;z-index:4;font-size:27.2px;line-height:1}.addPanelLabel{position:absolute;z-index:4;bottom:16px;writing-mode:vertical-rl;transform:rotate(180deg);color:var(--muted)}@media (max-height:820px) and (min-width:621px){.modalStatic{padding:17.6px 22.4px}.timeTile{min-height:124.8px}}@media (max-width:900px){.weekCopy{white-space:normal}.workoutGallery{overflow-x:auto;scroll-snap-type:x mandatory;padding-bottom:3.2px}.workoutPanel,.workoutPanel.active{height:288px;flex:0 0 min(68.8vw,544px);min-width:min(68.8vw,544px);scroll-snap-align:start}.workoutPanel.addPanel{flex-basis:80px;min-width:80px}.panelCollapsed{display:none}}.moveActions{display:flex;gap:22.4px;flex-wrap:wrap}@keyframes feelingWarp{0%{transform:scale(1.03) skew(-2deg) translate(-1.5%);filter:saturate(1.02) blur(.8px)}50%{transform:scale(1.12) skew(1deg) translate(1%);filter:saturate(1.22) blur(1.5px)}to{transform:scale(1.06) skew(3deg) translate(-.5%);filter:saturate(1.1) blur(.6px)}}@keyframes feelingScan{0%{background-position:0 0,-80% 0}to{background-position:0 8px,180% 0}}.tempoExperiment{margin-top:14.4px;padding-top:16px;border-top:.32px solid var(--line)}.tempoEstimate{white-space:nowrap}.tempoQuad{position:relative;width:min(288px,100%);aspect-ratio:1/1;border-radius:28.8px;background:#ffffff06;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);overflow:hidden;touch-action:none;cursor:crosshair}.tempoCross{position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none;background:linear-gradient(to right,transparent calc(50% - .4px),rgba(255,255,255,.12) 50%,transparent calc(50% + .4px)),linear-gradient(to bottom,transparent calc(50% - .4px),rgba(255,255,255,.12) 50%,transparent calc(50% + .4px))}.tempoDot{position:absolute;left:50%;top:50%;width:17.6px;height:17.6px;border-radius:50%;background:var(--text);transform:translate(-50%,-50%);pointer-events:none;box-shadow:0 0 0 4.8px #ffffff12}.tempoPole{position:absolute;pointer-events:none;color:var(--muted)}.tempoFast{top:9.6px;left:50%;transform:translate(-50%)}.tempoSlow{bottom:9.6px;left:50%;transform:translate(-50%)}.tempoHard{right:9.6px;top:50%;transform:translateY(-50%)}.tempoLow{left:9.6px;top:50%;transform:translateY(-50%)}.tempoReadout{margin-top:9.6px;color:var(--muted)}.tempoRevealRow{margin-top:11.2px}.tempoRevealBtn{color:var(--muted);text-decoration-color:var(--muted)}.editTempoExperiment{margin-top:11.2px}.editTempoExperiment[hidden]{display:none}.testingZone{position:relative;overflow:hidden;border-radius:22.4px;background:#202226;border:.8px solid #4a4f58;box-shadow:none;--text:#d6d9df;--soft:#c7ccd5;--muted:#9ea5b0;--line:#4a4f58;--lineb:#4a4f58;--field-line:#4a4f58;color:var(--text)}.testingZoneInner{position:relative;padding:19.2px;background:linear-gradient(rgba(176,186,199,.045) .8px,transparent .8px),linear-gradient(90deg,rgba(176,186,199,.045) .8px,transparent .8px),#202226;background-size:16px 16px}.testingZoneTitleBlock{max-width:608px;margin-bottom:19.2px}.testingZoneTitleRow{display:flex;justify-content:space-between;align-items:center;gap:16px}.testingZoneTitleRow strong{color:#d6d9df}.testingZone .tempoEstimate{color:#aeb4bf}.testingZoneExplanation{margin:8px 0 0;color:#9ea5b0;text-align:left}.testingZoneLayout{display:grid;grid-template-columns:minmax(224px,288px) minmax(0,1fr);grid-template-areas:"controller feedback";gap:25.6px;align-items:start}.testingFeedbackForm{grid-area:feedback;display:grid;gap:14.4px;min-width:0;padding:16px;border:.32px solid var(--line);border-radius:16px;background:#252525}.testingFeedbackHeading{color:#d6d9df}.testingFeedbackField{display:grid;gap:6.4px;color:#9ea5b0}.testingFeedbackField select,.testingFeedbackField textarea{width:100%;border:.32px solid var(--line);background:#171717;color:#d6d9df;border-radius:11.2px;padding:8px 9.6px;font:inherit}.testingFeedbackField textarea{resize:vertical;min-height:65.6px}.testingRating{display:grid;grid-template-columns:repeat(5,1fr);gap:4.8px}.testingRating button{min-height:30.4px;border-radius:9.6px;border:.32px solid var(--line);background:#171717;color:#c7ccd5;cursor:pointer}.testingRating button.selected{border-color:#c7ccd5;background:#343434}.testingFeedbackSubmit{justify-self:start;min-height:33.6px;padding:0 12.8px;border-radius:11.2px;border:0;background:#ffffffe0;color:#111;cursor:pointer}.testingZoneControllerWrap{grid-area:controller;display:flex;flex-direction:column;align-items:center;justify-content:flex-start}.tempoQuadFrame{width:min(256px,100%);aspect-ratio:1/1;padding:0;background:linear-gradient(rgba(176,186,199,.075) .8px,transparent .8px),linear-gradient(90deg,rgba(176,186,199,.075) .8px,transparent .8px),#202226;background-size:16px 16px,16px 16px,auto;border-radius:16px}.testingZone .tempoQuad{width:100%;height:100%;border-radius:16px;background:#202226;border:.8px solid #5a606a;box-shadow:none}.testingZone .tempoCross{background:linear-gradient(to right,transparent calc(50% - .4px),rgba(176,186,199,.2) 50%,transparent calc(50% + .4px)),linear-gradient(to bottom,transparent calc(50% - .4px),rgba(176,186,199,.2) 50%,transparent calc(50% + .4px))}.testingZone .tempoDot{width:14.4px;height:14.4px;background:transparent;border:.8px solid #c4cad4;box-shadow:0 0 0 3.2px #c4cad40d}.testingZone .tempoPole{color:#8e96a2}.testingZone .tempoReadout{width:min(256px,100%);color:#9ea5b0;text-align:center;margin-top:9.6px}.testingZone button,.testingZone input,.testingZone select,.testingZone textarea{transition:opacity .14s ease,border-color .14s ease,color .14s ease,background .14s ease}.testingZone button:hover,.testingZone button:focus-visible{filter:none;opacity:.88}@media (max-width:900px){.testingZoneLayout{grid-template-columns:1fr;grid-template-areas:"controller" "feedback"}}.activityHeader{display:flex;align-items:center;gap:var(--inset);margin-bottom:var(--inset)}.activityIcon{display:grid;place-items:center}.icon{width:var(--glyph-size);height:var(--glyph-size);flex:none;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}.icon *{vector-effect:non-scaling-stroke}.addPanelPlus .icon,.addFab .icon{width:24px;height:24px}.checkinTabIcon .icon{width:18px;height:18px}.weekTick .icon{width:1em;height:1em}.activityRows{display:grid;gap:9.6px}.activityRow{display:grid;grid-template-columns:43.2px minmax(0,1fr);align-items:center;gap:11.2px;background:var(--tile-2);border-radius:24px;padding:12px 14px}.activityRowIcon{width:43.2px;height:43.2px;border-radius:16px;background:var(--icon-bg);display:grid;place-items:center;font-size:16px}.activityRowMeta{color:var(--soft);margin-top:2.4px}.toast{position:absolute;right:20.8px;top:20.8px;z-index:60;background:var(--bright);color:var(--on-bright);border-radius:799.2px;padding:8.8px 12.8px;opacity:0;transform:translateY(-6.4px);pointer-events:none;transition:opacity .18s ease,transform .18s ease}.toast.show{opacity:1;transform:none}.weekCopy{color:var(--muted);margin-top:9.6px;max-width:none;white-space:nowrap}.weekChip{background:var(--tile-2);border-radius:12.8px;min-height:60.8px;padding:9.6px 11.2px;display:flex;flex-direction:column;justify-content:space-between;gap:6.4px}.weekChipTop{display:flex;justify-content:space-between;align-items:center;gap:6.4px}.weekTick{font-size:11.2px;font-weight:800;line-height:1}.weekChip.total{background:var(--card2)}.workoutSurface{position:relative;overflow:hidden;isolation:isolate}.workoutContent{position:relative;z-index:2}.pixelTrailCanvas{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;z-index:1;pointer-events:none}#app.light .pixelTrailCanvas{opacity:.46}.sessionHead{display:flex;justify-content:space-between;align-items:flex-start;gap:16px}.sessionActions{display:flex;gap:22.4px;align-items:center;flex-wrap:wrap;justify-content:flex-end}.holdEnd{position:relative;overflow:hidden;min-width:110.4px;min-height:41.6px;padding:0 16px;border-radius:799.2px;border:.32px solid var(--line);background:var(--control);text-decoration:none;user-select:none;-webkit-user-select:none;touch-action:none}.holdEndFill{position:absolute;inset:0 auto 0 0;width:0;background:var(--bright);pointer-events:none}.holdEndLabel{position:relative;z-index:1;mix-blend-mode:difference;color:#fff}.holdEnd.holding{border-color:var(--muted)}.exerciseTitle{margin-top:4.8px;color:var(--accent-text)}.meta{color:var(--muted);margin-top:4.8px}.progress{height:46.4px;padding:0;background:transparent;border-radius:17.6px;display:flex;gap:3.2px;margin-top:19.2px;overflow:hidden}.progressSegment{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:0;padding:0;display:block;flex:1;min-width:0;background:var(--segment);border-radius:17.6px;position:relative;overflow:hidden;cursor:default}.progressSegment:after{content:"";position:absolute;inset:0 auto 0 0;width:0;background:var(--segment-fill);transition:width .2s linear}.progressSegment.done{background:transparent;opacity:0;pointer-events:none}.progressSegment.done:after{display:none}.progressSegment.active:after{width:var(--segment-progress,0%)}#app.resting .progressSegment:not(.done):not(.active),#app.paused .progressSegment:not(.done):not(.active){background:#fff}.progressSegment.rewindable{cursor:pointer}.progressSegment.rewindable:hover{filter:brightness(1.08)}.progressSegment:focus-visible{outline:1.6px solid var(--primary);outline-offset:-2.4px}.workGrid{display:grid;grid-template-columns:minmax(0,2fr) minmax(240px,1fr);gap:16px;margin-top:16px}.timerCard,.movementCard,.nextCard{position:relative;border-radius:28.8px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.timerCard{min-height:344px;background:var(--timer);overflow:hidden}.fill{position:absolute;inset:0 auto 0 0;width:100%;background:var(--timer-fill);transition:width .2s linear}.digits{position:absolute;top:0;right:0;bottom:0;left:0;display:flex;align-items:center;justify-content:center;font-size:clamp(152px,22.4vw,312px);font-weight:850;letter-spacing:-.11em;color:#fff;mix-blend-mode:difference;font-variant-numeric:tabular-nums}.movementCard{background:var(--stage);min-height:344px;display:grid;place-items:center;padding:22.4px}.movementCard{overflow:hidden}.movementRippleCanvas{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;z-index:0}.nextCard{background:var(--card);padding:22.4px;display:flex;justify-content:space-between;align-items:center;gap:16px;min-height:116.8px}.nextIcon{width:52.8px;height:52.8px;border-radius:19.2px;background:var(--icon-bg);display:grid;place-items:center;font-size:20.8px;flex:0 0 auto}.sectionLabel{margin:0 0 8px 22.4px}.moveSection{grid-column:span 12}.moveSection .workoutGallery{width:100%}.nextWrap{margin-top:16px}.nextLabel{margin:0 0 8px 22.4px}.nextCard{background:var(--card);padding:22.4px;display:flex;justify-content:space-between;align-items:center;gap:22.4px;min-height:86.4px;border-radius:28.8px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.nextMain{display:flex;align-items:center;gap:14.4px;min-width:0}.nextIcon{width:43.2px;height:43.2px;border-radius:12.8px;background:var(--icon-bg);display:grid;place-items:center;font-size:16px;flex:0 0 auto}.sessionControlRow{display:flex;justify-content:flex-end;gap:22.4px;align-items:center;margin-top:16px}.skipBtn{min-width:120px;min-height:41.6px;padding:0 14.4px;border:.8px solid var(--line);background:transparent;color:var(--text);text-decoration:none}.pause{min-width:120px;min-height:41.6px;padding:0 16px}.upcomingList{display:grid;gap:9.6px;margin-top:9.6px}.upcomingCard{--future-opacity:1;display:flex;align-items:center;justify-content:space-between;gap:22.4px;min-height:86.4px;padding:22.4px;border-radius:28.8px;background:var(--card);border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);opacity:var(--future-opacity);transition:opacity .22s ease}.upcomingCard:nth-child(-n+3){--future-opacity:1}.upcomingCard:nth-child(4){--future-opacity:.72}.upcomingCard:nth-child(5){--future-opacity:.48}.upcomingCard:nth-child(6){--future-opacity:.3}.upcomingCard:nth-child(n+7){--future-opacity:.16}.upcomingCard.sessionHidden{--future-opacity:.24!important;filter:saturate(.15)}.upcomingCard.sessionHidden .upcomingName{text-decoration:line-through}.upcomingCard.sessionHidden .upcomingIcon{opacity:.45}.upcomingCard.sessionHidden .upcomingMeta{opacity:.55}.upcomingInfo{display:flex;align-items:center;gap:14.4px;min-width:0}.upcomingIcon{width:43.2px;height:43.2px;flex:0 0 auto;border-radius:12.8px;background:var(--icon-bg);display:grid;place-items:center;font-size:16px}.upcomingMeta{color:var(--muted);margin-top:4px}.skipSessionBtn{flex:0 0 auto;min-height:41.6px;padding:0 14.4px;border:.8px solid var(--line);background:transparent;color:var(--text)}@media (max-width:900px){.weekCopy{white-space:normal}.nextCard{align-items:flex-start;flex-direction:column}.sessionControlRow{width:100%}.skipBtn,.pause{flex:1;min-width:0}.upcomingCard{align-items:flex-start;flex-direction:column}.skipSessionBtn{width:100%}}.countdown{display:none;position:fixed;top:0;right:0;bottom:0;left:0;width:100vw;height:100dvh;background:var(--page);z-index:300;align-items:center;justify-content:center;flex-direction:column;text-align:center;overflow:hidden}.countdown.active{display:flex}.pixelCanvas{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;display:block;z-index:1}.countdown:before{content:"";position:absolute;top:0;right:0;bottom:0;left:0;background:radial-gradient(circle at center,color-mix(in srgb,var(--primary) 16%,transparent),transparent 58%);pointer-events:none}.countNum{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);z-index:3}.countNum{font-size:clamp(144px,25.6vw,344px);font-weight:850;line-height:.75;letter-spacing:-.1em}.modalBackdrop{display:none;position:fixed;top:0;right:0;bottom:0;left:0;width:100vw;height:100dvh;z-index:145;background:var(--scrim);padding:28px;box-sizing:border-box;align-items:center;justify-content:center}.modalBackdrop.open{display:flex}.modal{width:min(1184px,100%);height:100%;max-width:1184px;max-height:none;overflow:hidden;background:var(--modal);border-radius:28.8px;padding:0;display:flex;flex-direction:column;box-sizing:border-box;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.modalStatic{flex:0 0 auto;padding:22.4px;background:var(--modal);border-bottom:.32px solid var(--divider)}.modalHead{display:flex;justify-content:space-between;align-items:flex-start;gap:16px;margin-bottom:12.8px}.modalHeaderActions{display:flex;gap:22.4px;align-items:center;flex:0 0 auto}.modalHead h2{margin:2.4px 0 0}.editNameRow{display:grid;gap:6.4px;margin-bottom:11.2px}.editNameLabel{color:var(--muted)}.editNameInput{min-height:42px;border-radius:var(--r-inner);border:.32px solid var(--field-line);background:var(--input);color:var(--text);padding:0 16px}.timeTiles{display:grid;grid-auto-flow:column;grid-auto-columns:minmax(0,1fr);gap:11.2px;margin-bottom:11.2px}.timeTile{background:var(--tile);min-height:148.8px;padding:16px;display:flex;flex-direction:column;justify-content:space-between}.timeHeader{display:flex;align-items:center;gap:14.4px}.timeIcon{width:46.4px;height:46.4px;border-radius:16px;background:var(--icon-bg);display:grid;place-items:center;flex:0 0 auto;font-size:17.6px;font-weight:760}.timeCopy{min-width:0}.rangeTrack{height:46.4px;border-radius:17.6px;background:var(--track);overflow:hidden;position:relative;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.rangeFill{position:absolute;inset:0 auto 0 0;background:var(--slider-fill);border-radius:17.6px 0 0 17.6px}.rangeInput{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;opacity:0;cursor:pointer}.exerciseScroller{min-height:0;overflow-y:auto;padding:3.2px 16px 17.6px 22.4px;border-top:.16px solid var(--divider);scrollbar-gutter:stable}.exerciseScroller::-webkit-scrollbar{width:6.4px}.exerciseScroller::-webkit-scrollbar-track{background:transparent}.exerciseScroller::-webkit-scrollbar-thumb{background:var(--scroll-thumb);border-radius:799.2px}.sectionTitle{text-transform:uppercase;color:var(--muted);margin:14.4px 0 8px}.moveList{display:grid;gap:8px}.moveRow{display:flex;justify-content:space-between;align-items:center;gap:22.4px;background:var(--row);border-radius:20.8px;padding:22.4px}.moveRow.hidden{opacity:.46}.moveRow.hidden .moveItemName{text-decoration:line-through}.moveMeta{color:var(--muted);margin-top:4px}.hideBtn{border-radius:799.2px;min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text)}.removeBtn{position:relative;overflow:hidden;border-radius:799.2px;min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);cursor:pointer}.removeFill{position:absolute;inset:0 auto 0 0;width:0;background:var(--danger-fill);pointer-events:none;transition:width 0s linear}.addInput{min-height:41.6px;border-radius:799.2px;border:.32px solid var(--field-line);background:var(--input);color:var(--text);padding:0 14.4px}.addBtn{border-radius:799.2px;min-height:42px;padding:0 16px;border:0;background:var(--bright);color:var(--on-bright)}.routineSummary{margin-top:14.4px;background:var(--sunken);border-radius:20.8px;padding:12.8px 14.4px;color:var(--soft)}.settingsHeader{display:flex;align-items:center;gap:12.8px;margin-bottom:24px}.back{width:46.4px;padding:0;font-size:24px}.tabs.rubberTabs{position:relative;display:inline-flex;gap:0;padding:3.2px;margin-bottom:17.6px;border-radius:12.8px;background:var(--control);border:.32px solid var(--line);overflow:hidden}.rubberIndicator{position:absolute;top:3.2px;left:3.2px;height:calc(100% - 6.4px);width:0;border-radius:12.8px;background:var(--bright);transition:left .34s cubic-bezier(.2,1.35,.4,1),width .34s cubic-bezier(.2,1.35,.4,1),transform .18s ease;transform-origin:center;z-index:0}.tabs.rubberTabs .tab{position:relative;z-index:1;min-height:41.6px;padding:0 16px;border:0;background:transparent;color:var(--text)}.tabs.rubberTabs .tab.active{color:var(--on-bright)}.settingsPane{display:none}.settingsPane.active{display:block}.integrationList,.toggleList{display:grid;gap:9.6px}.integration,.toggleRow{display:flex;justify-content:space-between;align-items:center;gap:14.4px;background:var(--raised);border-radius:22.4px;padding:14.4px 16px}.status{color:var(--muted);margin-top:3.2px}.note{color:var(--muted);line-height:1.5;max-width:688px}.switch{position:relative;width:50px;height:28px;padding:0;border-radius:var(--r-inner);background:var(--line);border:.4px solid var(--line);opacity:1;flex:0 0 auto;cursor:pointer;transition:background .18s ease,opacity .18s ease}.switch:after{content:"";position:absolute;width:24px;height:24px;top:50%;left:1.6px;border-radius:12px 4px 4px 12px;background:var(--text);transform:translateY(-50%);transition:left .18s ease,border-radius .18s ease,background .18s ease}.switch.on{background:var(--color-accent-primary);opacity:1}.switch.on:after{left:calc(100% - 25.6px);border-radius:4px 12px 12px 4px;background:var(--color-text-on-accent)}.themeChoice{display:flex;gap:9.6px;flex-wrap:wrap;align-items:center;margin:0}.themeBtn{min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);cursor:pointer}.themeBtn.active{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.wxLayoutBtn{min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);cursor:pointer}.wxLayoutBtn[aria-pressed=true]{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.settingsSelect{min-width:96px;min-height:32px;padding:0 27.2px 0 12px;border-radius:var(--r-inner);border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);font:inherit}.motionControlRow{align-items:center}.motionRangeWrap{display:flex;align-items:center;justify-content:flex-end;gap:9.6px;min-width:184px}.motionRangeWrap input{width:128px}.motionRangeWrap span{color:var(--muted);min-width:51.2px;text-align:right}.dangerText{color:var(--danger)}.confirmBackdrop{display:none;position:fixed;top:0;right:0;bottom:0;left:0;z-index:80;padding:22.4px;background:var(--scrim);align-items:center;justify-content:center}.confirmBackdrop.open{display:flex}.confirmCard{width:min(448px,100%);background:var(--card);border-radius:28.8px;padding:22.4px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.confirmActions{display:flex;justify-content:flex-end;align-items:center;gap:22.4px;margin-top:22.4px}.holdDelete{position:relative;overflow:hidden;min-width:88px;min-height:41.6px;padding:0 17.6px;border:.8px solid var(--danger-line);border-radius:12.8px;background:var(--danger-bg);color:var(--text);cursor:pointer}.holdDeleteFill{position:absolute;inset:0 auto 0 0;width:0;background:var(--danger-fill);pointer-events:none}.holdDeleteLabel{position:relative;z-index:1;color:var(--text)}.holdDelete.holding .holdDeleteLabel,.removeBtn.holding .removeLabel{color:#fff}.bottomNav{position:sticky;bottom:22.4px;display:flex;gap:22.4px;z-index:100;width:max-content;margin:-65.6px 0 0 22.4px}.navBtn{width:43.2px;height:43.2px;padding:0;border-radius:16px;background:var(--control);border:.32px solid var(--line);color:var(--text)}.navBtn.active{background:var(--color-fill-selected);color:var(--color-text-on-selected)}@media (max-width:900px){.weekCopy{white-space:normal}.grid{grid-template-columns:1fr}.moveSection,.activityCard,.weekly{grid-column:auto}.workGrid{grid-template-columns:1fr}.timerCard,.movementCard{min-height:256px}.timeTiles{grid-auto-flow:row;grid-template-columns:1fr}}@media (max-width:620px){.modal{width:100%;height:100%;max-height:100%}#app{padding:0}.shell{border-radius:0}.view{padding:14.4px 14.4px 75.2px}.timerCard{min-height:224px}.digits{font-size:144px}.modalBackdrop{padding:9.6px}.modal{height:100%}.modalStatic{padding:14.4px}.exerciseScroller{padding:3.2px 9.6px 14.4px 14.4px}}:is(button,.primary,.tab,.back,.navBtn,.themeBtn,.energyBtn,.hideBtn,.addBtn,.removeBtn,.skipBtn,.holdEnd,.editNameInput,.addInput,.rangeTrack,.progress,.progressSegment):not(.segBtn,.stepBtn,.checkinTab,.switch,.dragHandle,.navBtn,.createPresetBtn,.sheetChoice,.setupSummary,.wxStyleBtn){border-radius:var(--r-inner)!important}.card,.panel,.tile,.timerCard,.movementCard,.nextCard,.modal{border-radius:var(--r-card)}.movementCreatorLaunch{display:flex;gap:9.6px;align-items:center;margin:3.2px 0 14.4px}.movementCreatorOpen,.restAddBtn{min-height:35.2px;padding:0 12.8px;border-radius:12.8px;cursor:pointer}.movementCreatorOpen{border:0;background:var(--bright);color:var(--on-bright)}.restAddBtn{border:.32px solid var(--field-line);background:var(--control-2);color:var(--text)}.movementCreator{position:relative;margin:0 0 14.4px;padding:19.2px 22.4px;border-radius:22.4px;background:var(--card);border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.movementCreator[hidden]{display:none}.movementCreatorHead{display:flex;align-items:center;justify-content:space-between;gap:16px;margin-bottom:17.6px}.movementCreatorHead h3{margin:0}.movementCreatorClose{position:static}.movementCreatorFields{display:grid;grid-template-columns:minmax(0,1.45fr) minmax(0,.85fr);gap:16px 19.2px}.movementCreatorFields[hidden]{display:none!important}.movementCreatorFields>label{display:grid;gap:6.4px;min-width:0;color:var(--text)}.movementTimingRow{grid-column:1/-1;display:grid;grid-template-columns:minmax(240px,352px) minmax(208px,1fr) auto;gap:17.6px;align-items:end}.durationStack{display:grid;gap:6.4px;color:var(--text)}.creatorDurationRow{display:grid;grid-template-columns:minmax(96px,1fr) minmax(104px,1fr);gap:12.8px;align-items:center}.creatorNumber{width:100%;min-width:0}.creatorUnitSelect{min-height:41.6px;width:100%;padding:0 11.2px;border-radius:12.8px;border:.32px solid var(--field-line);background:var(--input);color:var(--text);font:inherit}.globalTimingToggle{display:flex!important;align-items:center;gap:8px!important;min-height:41.6px;cursor:pointer;color:var(--text)!important;white-space:nowrap}.globalTimingToggle input{position:absolute;opacity:0;pointer-events:none}.toggleTrack{position:relative;width:38.4px;height:22.4px;border-radius:799.2px;background:var(--switch-off);border:.32px solid var(--field-line);flex:0 0 auto;transition:background .16s ease}.toggleThumb{position:absolute;width:17.6px;height:17.6px;top:1.6px;left:1.6px;border-radius:50%;background:var(--knob-off);transition:left .16s ease,background .16s ease}.globalTimingToggle input:checked+.toggleTrack{background:var(--bright)}.globalTimingToggle input:checked+.toggleTrack .toggleThumb{left:17.6px;background:var(--on-bright)}.toggleLabel{color:var(--soft)}.creatorAddButton{min-width:97.6px;min-height:41.6px;align-self:end}@media (max-width:900px){.movementCreatorFields{grid-template-columns:1fr}.movementTimingRow{grid-column:auto;grid-template-columns:1fr;align-items:stretch}.globalTimingToggle{min-height:35.2px}.creatorAddButton{width:100%}}.moveRow.restItem{background:var(--row-rest)}.moveKindBadge{display:inline-flex;margin-left:6.4px;padding:2.4px 5.6px;border:.8px solid var(--field-line);border-radius:799.2px;color:var(--muted);vertical-align:middle}@media (max-width:900px){.movementCreatorFields,.movementCreatorFields.restFields{grid-template-columns:1fr;padding-right:0}.movementCreatorClose{position:static;margin-left:auto;display:block;margin-bottom:12.8px}}.createMoveOptions{margin:0 0 14.4px;padding:14.4px;border-radius:19.2px;background:var(--card2);border:.32px solid var(--line)}.createMoveOptions[hidden]{display:none}.createOptionLabel{text-transform:uppercase;color:var(--muted);margin-bottom:8px}.createPresetChoice{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}.createPresetBtn{min-height:60.8px;padding:11.2px 12.8px;border-radius:14.4px;border:.8px solid var(--field-line);background:transparent;color:var(--text);text-align:left;cursor:pointer}.createPresetBtn strong{display:block}.createPresetBtn span{display:block;color:var(--muted);margin-top:3.2px}.createPresetBtn.active{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.createPresetBtn.active span{color:var(--on-bright);opacity:.68}.createExtras{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px;margin-top:9.6px}.createExtraToggle{display:flex;align-items:flex-start;gap:8px;padding:9.6px 11.2px;border:.8px solid var(--field-line);border-radius:14.4px;cursor:pointer}.createExtraToggle input{margin-top:2.4px}.createExtraToggle span{display:grid;gap:2.4px}.createExtraToggle small{color:var(--muted)}.creatorUnitSelect{min-height:41.6px;padding:0 9.6px;border-radius:12.8px;border:.32px solid var(--field-line);background:var(--input);color:var(--text);font:inherit}@media (max-width:900px){.createPresetChoice,.createExtras{grid-template-columns:1fr}}.globalTimingToggle{display:inline-flex!important;grid-template-columns:none!important;align-items:center;gap:5.6px!important;color:var(--text)!important;white-space:nowrap}.globalTimingToggle input{margin:0}.globalTimingValue{min-height:41.6px;display:flex;align-items:center;padding:0 11.2px;border-radius:12.8px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--muted)}.createFlow{display:grid;gap:9.6px;padding:3.2px 0 8px}.createFlow[hidden]{display:none}.createStep{border-radius:22.4px;background:var(--tile);border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);overflow:hidden}.createStepHeader{width:100%;min-height:57.6px;padding:14.4px 17.6px;border:0;background:transparent;color:var(--text);display:flex;align-items:center;justify-content:space-between;gap:19.2px;text-align:left;cursor:pointer}.createStepHeader:disabled{cursor:not-allowed;opacity:.42}.createStepIdentity{display:flex;align-items:center;gap:9.6px}.createStepNumber{width:22.4px;height:22.4px;border-radius:799.2px;display:grid;place-items:center;border:.32px solid var(--line);color:var(--muted)}.createStepSummary{min-width:0;color:var(--muted);text-align:right}.createStepBody{display:none;padding:0 14.4px 14.4px}.createStep.active .createStepBody{display:block}.createStep.active .createStepHeader{border-bottom:.32px solid var(--divider)}.createStepSlot{display:grid;gap:11.2px}.createStepFooter{display:flex;justify-content:flex-end;margin-top:14.4px}.createStepFooter .primary:disabled{opacity:.35;cursor:not-allowed}.modal.createMode .movementTimingRow{display:none}.modal.createMode .movementCreator{margin-bottom:8px}.modal.createMode .movementCreatorFields{grid-template-columns:minmax(0,1.4fr) minmax(0,1fr)}.modal.createMode .movementCreatorFields.restFields{grid-template-columns:1fr}.modal.createMode .movementCreatorLaunch{margin-top:0}.modal.createMode .sectionTitle{margin-top:9.6px}.modal.createMode .modalStatic{padding-bottom:14.4px}.modal:not(.createMode) .createFlow{display:none!important}#app.resting .movementCard{background:#ffffff0e}#app.resting .movementRippleCanvas{opacity:1}#app.light.resting .movementCard{background:#fbf9f638}.nextCard .skipSessionBtn{margin-left:auto}.modal:not(.createMode) .movementCreatorLaunch{margin-top:25.6px}.testingFeedbackThanks{grid-area:feedback;min-height:176px;padding:19.2px;border:.32px solid var(--line);border-radius:16px;background:#252525;display:flex;flex-direction:column;justify-content:center;align-items:flex-start;gap:6.4px}.testingFeedbackThanks[hidden]{display:none}.testingFeedbackThanks strong{color:#f0f0f0}.testingFeedbackThanks p{margin:0;color:#9ea5b0}.testingFeedbackThanks a{color:#d6d9df;text-underline-offset:2.4px}:host(:fullscreen){overflow:auto;width:100vw;height:100vh}.entitySelect{max-width:min(256px,36.8vw);text-overflow:ellipsis;field-sizing:content}.integration .status code{padding:.8px 4.8px;border-radius:4.8px;background:var(--wash-2)}.integration .pill[disabled]{cursor:default;opacity:.7}#app :focus{outline:none}#app :focus-visible{outline:2.4px solid var(--primary);outline-offset:2.4px}#app .workoutPanel:focus-visible{outline-offset:-2.4px}@media (max-width:620px){.bottomNav{margin-left:14.4px}}.shell:has(.countdown.active) .bottomNav{visibility:hidden}@media (max-width:900px){.workoutPanel:not(.active):not(.addPanel) .panelExpanded{opacity:1;filter:none;pointer-events:auto}}.grid>*{min-width:0}.insightCard{display:grid;gap:22.4px}.day{display:grid;gap:6.4px;justify-items:center}.checkinBackdrop{z-index:160}.checkinCard{width:min(576px,100%)}.checkinCard .sub{margin-top:8px}.checkinSliders{display:grid;gap:11.2px;margin-top:19.2px}.checkinTile{min-height:0;gap:var(--inset);border:0}.scaleEnds{display:flex;justify-content:space-between;margin-top:6.4px;color:var(--muted)}.rangeTrack:focus-within{outline:2.4px solid var(--primary);outline-offset:2.4px}.checkinTab{position:fixed;right:0;top:50%;transform:translateY(-50%);z-index:120;display:flex;flex-direction:column;align-items:center;gap:4px;padding:16px 4px;border:.32px solid var(--line);border-right:0;border-radius:var(--r-fine) 0 0 var(--r-fine)!important;background:var(--control);color:var(--text);cursor:pointer;transition:padding .18s ease,background .18s ease}.checkinTab:hover{padding-right:12.8px}.checkinTabIcon{font-size:16px;line-height:1}.checkinTabLabel{writing-mode:vertical-rl;transform:rotate(180deg)}.checkinBadge{position:absolute;top:8px;left:8px;width:8px;height:8px;border-radius:50%;background:var(--secondary);box-shadow:0 0 0 2.4px var(--control),0 0 9.6px color-mix(in srgb,var(--secondary) 70%,transparent);animation:checkinPulse 1.8s ease-in-out infinite}@keyframes checkinPulse{50%{box-shadow:0 0 0 3px var(--control),0 0 2px color-mix(in srgb,var(--secondary) 20%,transparent)}}@media (prefers-reduced-motion: reduce){.checkinBadge{animation:none}}.shell:has(#workoutView.active) .checkinTab,.shell:has(.countdown.active) .checkinTab{display:none}#app.light .checkinBadge{box-shadow:0 0 0 2.4px var(--color-bg-ground),0 0 9.6px color-mix(in srgb,var(--primary) 50%,transparent)}.feelSection{grid-column:span 12;margin-top:16px}.feelCard{display:grid;gap:19.2px}.feelTop{display:grid;grid-template-columns:minmax(0,1fr) minmax(208px,336px);gap:22.4px;align-items:end}.feelDays{display:grid;grid-template-columns:repeat(7,minmax(0,1fr));gap:8px}.feelDay{min-height:0;gap:9.6px}.feelDay.future{opacity:.4}.feelDay.today{box-shadow:inset 0 0 0 .8px var(--today-ring)}.feelDots{font-size:6.4px;letter-spacing:1.6px;color:var(--muted)}.feelMeter{display:grid;gap:4.8px}.feelMeterTop{display:flex;justify-content:space-between;gap:6.4px;color:var(--muted)}.feelMeterTop span:last-child{color:var(--text)}.feelTrack{height:6.4px;border-radius:799.2px;background:var(--wash-2);overflow:hidden}.feelTrack span{display:block;height:100%;border-radius:799.2px}@media (max-width:900px){.feelSection{grid-column:auto}.feelTop{grid-template-columns:1fr}.feelDays{grid-template-columns:repeat(4,minmax(0,1fr))}}@media (max-width:620px){.feelDays{grid-template-columns:repeat(2,minmax(0,1fr))}}.checkinTile .timeHeader{align-items:center}.checkinTab:not(.due){opacity:.6}.checkinTab:not(.due):hover{opacity:1}.activityCard{grid-column:span 3}.weekly{grid-column:span 9;cursor:pointer;transition:border-color .18s ease,background .18s ease}.weekly:hover{border-color:var(--border-hover)}@media (max-width:1200px){.activityCard{grid-column:span 4}.weekly{grid-column:span 8}}@media (max-width:900px){.activityCard,.weekly{grid-column:auto}}.insightCard{grid-column:span 9;align-content:start}@media (max-width:1200px){.insightCard{grid-column:span 8}}@media (max-width:900px){.insightCard{grid-column:auto}}.helpCard .helpSteps,.helpCard .helpNote{max-width:688px}.helpCard .note{margin:0}.helpSteps{margin:19.2px 0 0;padding:0;list-style:none;counter-reset:help;display:grid;gap:9.6px}.helpSteps li{counter-increment:help;display:grid;gap:4.8px;position:relative;padding:14.4px 16px 14.4px 52.8px;border-radius:20.8px;background:var(--tile);color:var(--muted)}.helpSteps li:before{content:counter(help);position:absolute;left:14.4px;top:12.8px;width:25.6px;height:25.6px;border-radius:9.6px;display:grid;place-items:center;background:var(--icon-bg);color:var(--text)}.helpSteps strong,.helpSteps b,.helpNote b{color:var(--text)}.helpCard code{padding:.8px 4.8px;border-radius:4.8px;background:var(--wash-2)}.helpNote{display:grid;gap:3.2px;margin-top:9.6px;padding:12.8px 16px;border-radius:17.6px;border:.32px solid var(--field-line);color:var(--muted)}.helpNote strong{color:var(--text)}.rowLabel{grid-column:1/-1;margin-top:16px;margin-bottom:-8px}.checkinTab{flex-direction:row;align-items:center;gap:0}.checkinTabMain{display:flex;flex-direction:column;align-items:center;gap:4px}.checkinPeek{display:grid;gap:3.2px;justify-items:start;white-space:nowrap;overflow:hidden;max-width:0;opacity:0;margin-right:0;transition:max-width .32s cubic-bezier(.2,1.2,.4,1),opacity .2s ease,margin-right .32s ease}.checkinTab.peek{padding-left:17.6px;opacity:1}.checkinTab.peek .checkinPeek{max-width:176px;opacity:1;margin-right:14.4px}.peekCountdown{font-size:24px;font-weight:800;letter-spacing:-.04em;line-height:1;font-variant-numeric:tabular-nums}.peekAt{color:var(--muted)}@media (prefers-reduced-motion: reduce){.checkinPeek{transition:none}}.activityRowMeta{color:var(--text);margin-top:1.6px;font-variant-numeric:tabular-nums}.feelTop{grid-template-columns:1fr}:host{--primary:#03A9F4;--secondary:#D0FF00;--font:Inter,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;--font-tile:Geist,var(--font);--w-regular:400;--w-medium:500;--w-semibold:600;--w-bold:700;--w-heavy:800;--t-display:52px;--t-title:22px;--t-card-title:18px;--t-value:16px;--t-section:18px;--t-strong:14px;--t-body:12px;--t-caption:12px;--lh-display:1.05;--lh-title:1;--t-wx-temp:64px;--t-wx-range:24px;--t-tile-title:14px;--lh-tile-title:20px;--t-tile-detail:16px;--lh-tile-detail:20px;--inset:10px;--r-card:34px;--r-tile:24px;--r-inner:16px;--r-fine:12px;--tile-min:60px;--chip-size:40px;--glyph-size:34px;--gutter:22px;--grid-gap:16px}@media (max-width:620px){:host{--t-display:46px;--t-title:20px;--t-value:20px;--t-section:16px;--t-strong:15px;--t-body:14px;--t-caption:11px;--lh-display:.92;--lh-title:1.05}}#app{font-family:var(--font);font-size:var(--t-body);font-weight:var(--w-regular);line-height:1.4}#app button,#app input,#app select,#app textarea{font-family:inherit}:where(#app) strong,:where(#app) b{font-weight:var(--w-bold)}.title,.workoutName,.exerciseTitle,.feelHeadline,.settingsTitle{font-size:var(--t-display);font-weight:var(--w-heavy);line-height:var(--lh-display);letter-spacing:-.055em}.confirmTitle,.sheetTitle,.modalHead h2,.paneTitle,.movementCreatorHead h3,.testingFeedbackThanks strong{font-size:var(--t-title);font-weight:var(--w-medium);font-style:italic;line-height:var(--lh-title);letter-spacing:-.03em}.activityTitle{font-size:var(--t-card-title);font-weight:var(--w-medium);font-style:italic;line-height:1.1;letter-spacing:-.02em;text-box:trim-both cap alphabetic}.paneTitle{margin:0 0 10px}.activityRowMeta,.nextName,.upcomingName,.editNameInput,.videoClock{font-size:var(--t-value);font-weight:var(--w-regular);line-height:1.15;letter-spacing:-.02em}.sectionLabel,.nextLabel{font-size:var(--t-section);font-weight:var(--w-regular);line-height:1.2;letter-spacing:-.01em}.activityRowName,.timeLabel,.moveItemName,.setupSummaryText strong,.sheetChoice strong,.createPresetBtn strong,.createExtraToggle strong{font-family:var(--font-tile);font-size:var(--t-tile-title);font-weight:var(--w-semibold);line-height:var(--lh-tile-title);letter-spacing:0}.moveMeta,.setupSummaryText small,.sheetChoice small,.createPresetBtn span,.createExtraToggle small{font-family:var(--font-tile);font-size:var(--t-tile-detail);font-weight:var(--w-regular);line-height:var(--lh-tile-detail);letter-spacing:0}.integration strong,.toggleRow strong,.setupName,.weekChipTop strong,.panelCollapsedText,.activityCount,.metaType,.kindChip,.helpSteps strong,.addGhost strong,.helpNote strong,.createStepIdentity strong,.testingZoneTitleRow strong,.testingFeedbackHeading,.tempoEstimate,.primary,.tab,.skipBtn,.skipSessionBtn,.hideBtn,.removeBtn,.addBtn,.themeBtn,.wxLayoutBtn,.holdEnd,.holdDelete,.movementCreatorOpen,.restAddBtn,.creatorAddButton,.testingFeedbackSubmit,.testingRating button,.toast,.checkinTabLabel{font-size:var(--t-strong);font-weight:var(--w-semibold);line-height:1.25;letter-spacing:-.01em}.status,.setupValue,.sub,.meta,.note,.weekCopy,.addInput,.settingsSelect,.pill,.routineSummary,.helpSteps li,.helpNote,.createStepSummary{font-size:var(--t-body);font-weight:var(--w-regular);line-height:1.4;letter-spacing:0}.setupCaption,.moveEditForm label>span,.addGhostText small,.setupSummaryAction,.metaTable th,.metaSub,.eyebrow,#stepLabel,.sourceTag,.addPanelLabel,.motionRangeWrap span,.sectionTitle,.editNameLabel,.scaleEnds,.peekAt,.upcomingMeta,.tempoPole,.tempoReadout,.tempoRevealBtn,.testingFeedbackField,.testingZoneExplanation,.testingFeedbackThanks p,.movementCreatorClose,.movementCreatorFields>label,.durationStack,.globalTimingToggle,.toggleLabel,.moveKindBadge,.createOptionLabel,.fieldError,.globalTimingValue,.createStepNumber,.feelMeterTop,#app code{font-size:var(--t-caption);font-weight:var(--w-regular);line-height:1.35;letter-spacing:0}.eyebrow,#stepLabel,.sectionTitle,.setupCaption{letter-spacing:.1em}.globalTimingToggle{font-size:var(--t-caption)!important}.workoutGallery,.workoutPanel{height:340px}@media (max-width:900px){.workoutPanel,.workoutPanel.active{height:320px}}@media (max-width:900px){.workoutGallery{height:auto}.workoutPanel,.workoutPanel.active{height:auto;min-height:320px}}@media (max-width:620px){.view{padding-left:0;padding-right:0}.settingsHeader,.sessionHead,.sessionControlRow{margin-left:16px;margin-right:16px}.tabs.rubberTabs,.sectionLabel,.rowLabel{margin-left:16px}.grid{gap:8px}.rowLabel,.feelSection{margin-top:16px}.rowLabel{margin-bottom:-4px}.sectionLabel{margin-bottom:8px}.workoutGallery{gap:8px}.workoutPanel,.workoutPanel.active{flex:0 0 100%;min-width:100%}.workoutPanel.addPanel{flex:0 0 100%;min-width:100%;min-height:120px}.card,.workoutPanel,.timerCard,.movementCard,.nextCard,.upcomingCard,.confirmCard{padding:16px}.activityRows,.insightCard,.feelCard{gap:8px}.activityRow,.weekChip{padding:10px 12px}.feelDays{gap:8px}.workGrid{gap:8px;margin-top:8px}.nextWrap,.sessionControlRow{margin-top:8px}.upcomingList{gap:8px}}.tabs.rubberTabs .tab{white-space:nowrap}@media (max-width:620px){.tabs.rubberTabs{display:flex;width:max-content;max-width:calc(100% - 32px);overflow-x:auto;scrollbar-width:none}.tabs.rubberTabs::-webkit-scrollbar{display:none}.tabs.rubberTabs .tab{flex:0 0 auto}}.insightCard{display:flex;flex-direction:column;gap:0}@media (max-width:1200px) and (min-width:901px){.timeTiles{grid-auto-flow:row;grid-template-columns:repeat(2,1fr)}}#stepLabel{margin-top:9.6px}#exerciseMeta{margin-top:4px}.moveRow{justify-content:flex-start;gap:12.8px}.moveText{flex:1;min-width:0}.moveActions{display:flex;gap:6.4px;flex:0 0 auto}.dragHandle{flex:0 0 auto;display:grid;place-items:center;width:32px;height:40px;margin:-8px 0 -8px -9.6px;padding:0;border:0;border-radius:12px;background:transparent;color:var(--muted);cursor:grab;touch-action:none}.dragHandle:hover{background:var(--hover);color:var(--text)}.moveRow.dragging{box-shadow:0 10px 30px var(--lift),inset 0 0 0 1.5px var(--primary);position:relative;z-index:2}.moveRow.dragging .dragHandle{cursor:grabbing;color:var(--text)}.removeBtn:hover,.hideBtn:hover{border-color:var(--muted)}.toast{position:fixed;z-index:400;display:flex;align-items:center;gap:12.8px}.toast.withAction{pointer-events:auto}.toastAction{border:0;padding:0;background:none;color:inherit;font:inherit;text-decoration:underline;text-underline-offset:3px;cursor:pointer}.modalTop{flex:0 0 auto;padding:22px 22px 0}.modalTop .modalHead{margin-bottom:0;padding-bottom:16px}@media (min-width:901px){.modal:not(.createMode){display:grid;grid-template-columns:minmax(340px,420px) minmax(0,1fr);grid-template-rows:auto minmax(0,1fr)}.modal:not(.createMode) .modalTop{grid-column:1/-1;border-bottom:.32px solid var(--divider)}.modal:not(.createMode) .modalStatic{grid-column:1;grid-row:2;overflow-y:auto;border-bottom:0;border-right:.32px solid var(--divider)}.modal:not(.createMode) .exerciseScroller{grid-column:2;grid-row:2;border-top:0;padding-top:12px}.modal:not(.createMode) .timeTiles{grid-auto-flow:row;grid-template-columns:minmax(0,1fr)}}.timeTiles{align-items:start}.removeLabel{position:relative;z-index:1}.removeBtn.holding{border-color:var(--danger-fill)}#deleteMoveConfirm{z-index:200}.moveRow{will-change:transform}.moveRow.dragging{box-shadow:0 18px 40px var(--lift),inset 0 0 0 1.5px var(--primary);z-index:3;transform-origin:center}.moveRow.editing{display:block;padding:16px;box-shadow:inset 0 0 0 1.5px var(--primary)}.moveEditForm{display:grid;gap:14.4px}.moveEditFields{display:grid;grid-template-columns:minmax(0,1.4fr) minmax(0,1fr);gap:12.8px}.moveEditForm label:not(.globalTimingToggle){display:grid;gap:6.4px;min-width:0}.moveEditForm .addInput{width:100%;min-width:0}.moveEditTiming{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:12.8px}.moveEditTiming .creatorDurationRow{display:grid;grid-template-columns:96px 128px;gap:9.6px}.creatorDurationRow.isDisabled{opacity:.38}.moveEditActions{display:flex;justify-content:flex-end;align-items:center;gap:22.4px}@media (max-width:620px){.moveEditFields{grid-template-columns:1fr}}.integration .status code{color:var(--soft)}#app.resting :is(.sessionHead,.nextLabel,.sessionControlRow){--muted:#f4f4f4;color:var(--text)}#app.paused :is(.sessionHead,.nextLabel,.sessionControlRow){--text:#090909;--muted:rgba(9,9,9,.8);--accent-text:#090909;--line:rgba(9,9,9,.3);color:var(--text)}#app.light:is(.resting,.paused) :is(.sessionHead,.nextLabel,.sessionControlRow){--text:#26221e;--muted:rgba(38,34,30,.85);--accent-text:#26221e;--line:rgba(38,34,30,.25);color:var(--text)}.moveList{display:flex;flex-direction:column}.movementCreatorOpen,.restAddBtn{display:inline-flex;align-items:center;gap:6px;touch-action:none;user-select:none;-webkit-user-select:none;cursor:grab;transition:transform .42s cubic-bezier(.34,1.46,.64,1),opacity .2s ease}.movementCreatorOpen svg,.restAddBtn svg{width:14px;height:14px;margin-left:-3px;opacity:.55;flex:0 0 auto}.movementCreatorOpen.lifting,.restAddBtn.lifting{transform:scale(.92);opacity:.4;cursor:grabbing;transition:transform .16s ease,opacity .16s ease}.addGhost{position:fixed;left:0;top:0;z-index:20;pointer-events:none;box-sizing:border-box;display:flex;align-items:center;gap:8px;padding:0 12.8px;overflow:hidden;white-space:nowrap;border-radius:12px;background:var(--bright);color:var(--on-bright);box-shadow:0 12px 30px var(--lift);will-change:transform;transition:width .4s cubic-bezier(.34,1.46,.64,1),height .4s cubic-bezier(.34,1.46,.64,1),border-radius .3s ease,padding .3s ease,background .2s ease,color .2s ease,box-shadow .25s ease,opacity .18s ease}.addGhost.rest{background:var(--control-2);color:var(--text);box-shadow:inset 0 0 0 .5px var(--field-line),0 12px 30px var(--lift)}.addGhostGrip{display:grid;place-items:center;flex:0 0 auto;opacity:.55}.addGhostGrip svg{width:14px;height:14px;transition:width .3s ease,height .3s ease}.addGhostText{display:grid;min-width:0}.addGhostText small{color:var(--muted);max-height:0;opacity:0;transition:max-height .3s ease,opacity .2s ease}.addGhost.overList{border-radius:20.8px;gap:12.8px;padding:0 22.4px 0 12.8px;background:var(--row);color:var(--text);box-shadow:inset 0 0 0 1.5px var(--primary),0 16px 36px var(--lift)}.addGhost.overList .addGhostGrip svg{width:18px;height:18px}.addGhost.overList .addGhostText small{max-height:20px;opacity:1;margin-top:4px}.addGhost.leaving{opacity:0}.dropSlot{flex:0 0 auto;height:0;margin-top:-8px;border-radius:20.8px;background:color-mix(in srgb,var(--primary) 9%,transparent);box-shadow:inset 0 0 0 1.5px color-mix(in srgb,var(--primary) 40%,transparent);transition:height .42s cubic-bezier(.34,1.46,.64,1),margin-top .42s cubic-bezier(.34,1.46,.64,1),opacity .2s ease}.dropSlot.leaving{opacity:0;transition:height .26s cubic-bezier(.4,0,.2,1),margin-top .26s cubic-bezier(.4,0,.2,1),opacity .16s ease}@media (prefers-reduced-motion: reduce){.addGhost,.dropSlot,.movementCreatorOpen,.restAddBtn{transition:none}}.exerciseScroller,.modalStatic,.createFlow{overflow-anchor:none}.videoStage{position:absolute;top:0;right:0;bottom:0;left:0;z-index:3;display:grid;place-items:center;background:#000;opacity:0;pointer-events:none;transition:opacity .3s ease}#app.videoStep .videoStage{opacity:1;pointer-events:auto}.videoStage{container-type:size}.videoFrame{width:min(100cqw,calc(100cqh * 16 / 9));aspect-ratio:16/9}.videoFrame>*{display:block;width:100%;height:100%;border:0}.videoSound{position:absolute;left:50%;bottom:16px;transform:translate(-50%);z-index:2}.videoProbe{position:fixed;left:-10000px;top:0;width:320px;height:180px;opacity:0;pointer-events:none}.digits.long{font-size:clamp(96px,12.8vw,200px)}.moveEditFields.videoFields{grid-template-columns:minmax(0,1fr)}.fieldError{margin:0;color:var(--danger)}.addInput.invalid{border-color:var(--danger)}@media (prefers-reduced-motion: reduce){.videoStage{transition:none}}.workGrid{transition:grid-template-columns .55s cubic-bezier(.2,.8,.2,1),gap .55s cubic-bezier(.2,.8,.2,1)}.timerCard{transition:opacity .25s ease}#app.videoStep .timerCard{opacity:0;min-width:0;pointer-events:none}.workGrid{container-type:inline-size}#app.videoStep .movementCard{height:min(56.25cqw,var(--theater-h,60vh));min-height:240px;padding:0}#app.videoStep .exerciseTitle{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}@media (min-width:901px){#app.videoStep .workGrid{grid-template-columns:minmax(0,0fr) minmax(240px,1fr);gap:0}}@media (max-width:900px){#app.videoStep .timerCard{display:none}#app.videoStep .movementCard{min-height:0}}.videoClock{display:none;margin-right:auto;font-variant-numeric:tabular-nums}#app.videoStep .videoClock{display:block}@media (prefers-reduced-motion: reduce){.workGrid,.timerCard{transition:none}}.metaCard{margin-top:16px}.metaFilters{display:flex;flex-wrap:wrap;gap:9.6px;align-items:center;margin:14.4px 0 11.2px}.metaSearch{flex:1 1 200px;min-width:0}.metaKinds{display:flex;flex-wrap:wrap;gap:6.4px}.kindChip{min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);border-radius:12px;background:var(--control-2);color:var(--text);cursor:pointer}.kindChip.active{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.metaTableWrap{overflow-x:auto;border-radius:22.4px;background:var(--raised)}.metaTable{width:100%;border-collapse:collapse}.metaTable th{text-align:left;color:var(--muted);padding:12px 16px;border-bottom:.32px solid var(--divider);text-transform:uppercase;letter-spacing:.1em}.metaTable td{padding:12px 16px;border-top:.32px solid var(--divider);vertical-align:middle;color:var(--soft)}.metaTable tbody tr:first-child td{border-top:0}.metaTable .metaSwitchCol{width:1%;white-space:nowrap;text-align:right}.metaTable .metaSwitchCol .switch{display:inline-block;vertical-align:middle}.metaType{color:var(--text)}.metaTable tr.off .metaType{color:var(--muted)}.metaSub{display:none;margin-top:2px;color:var(--muted)}.metaEmpty td{text-align:center;color:var(--muted)}.metaBulk{display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap;margin-top:11.2px}.metaBulkActions{display:flex;gap:22.4px}@media (max-width:620px){.metaKindCol,.metaUsedCol{display:none}.metaSub{display:block}}@media (max-width:620px){.moveRow.noMeta .moveMeta,.upcomingCard.noMeta .upcomingMeta,.nextCard.noMeta #nextMeta{display:none}}.setupSummary,.addFab{display:none}.modal{position:relative}.setupSummary{align-items:center;justify-content:space-between;gap:12px;width:100%;margin:6.4px 0 4px;padding:12px 14px;border:0;border-radius:20.8px;background:var(--tile);color:var(--text);text-align:left;cursor:pointer}.setupSummaryText{display:grid;gap:2px;min-width:0}.setupSummaryText small{color:var(--muted)}.setupSummaryAction{flex:0 0 auto;color:var(--muted)}.rowChevron{flex:0 0 auto;color:var(--muted);font-size:22px;line-height:1}.addFab{position:absolute;right:16px;bottom:calc(16px + env(safe-area-inset-bottom,0px));z-index:12;place-items:center;width:56px;height:56px;padding:0;border:0;background:var(--bright);color:var(--on-bright);font-size:30px;font-weight:300;line-height:1;box-shadow:0 10px 24px var(--lift);cursor:pointer}.sheetScrim{position:absolute;top:0;right:0;bottom:0;left:0;z-index:30;background:var(--scrim);opacity:0;pointer-events:none;transition:opacity .25s ease}.sheetScrim.open{opacity:1;pointer-events:auto}.sheet{position:absolute;left:0;right:0;bottom:0;z-index:31;display:grid;gap:14px;max-height:88%;overflow-y:auto;overscroll-behavior:contain;padding:10px 16px calc(22px + env(safe-area-inset-bottom,0px));border-radius:var(--r-card) var(--r-card) 0 0;background:var(--modal);box-shadow:0 -.5px 0 var(--divider),0 -18px 40px var(--lift);transform:translateY(105%);visibility:hidden;transition:transform .42s cubic-bezier(.2,.9,.25,1.06),visibility 0s linear .42s}.sheet.open{transform:none;visibility:visible;transition:transform .42s cubic-bezier(.2,.9,.25,1.06)}.sheetGrab{justify-self:center;width:38px;height:5px;border-radius:99px;background:var(--field-line)}.sheetTitle{margin:0}.sheet .moveRow.editing{display:block;padding:0;background:none;box-shadow:none;border-radius:0}.sheetActions{justify-content:space-between;flex-wrap:wrap;gap:12.8px}.sheetSecondary,.sheetPrimary{display:flex;align-items:center;gap:6.4px}.sheetPrimary{gap:22.4px;margin-left:auto}.sheetChoices{display:grid;gap:8px}.sheetChoice{display:flex;align-items:center;gap:14px;width:100%;padding:12px;border:0;border-radius:20.8px;background:var(--row);color:var(--text);text-align:left;cursor:pointer}.sheetChoice small{display:block;margin-top:2px;color:var(--muted)}.sheetSetup .modalStatic{padding:0;background:none;border:0;overflow:visible}.sheetDone{width:100%;margin-top:14.4px}.addGhostActions{display:none;align-items:center;gap:6.4px;margin-left:auto;flex:0 0 auto}.addGhost.hovering{pointer-events:auto;cursor:grab;touch-action:none;animation:ghostWait 1.8s ease-in-out infinite}.addGhost.held{pointer-events:auto;cursor:grabbing;touch-action:none}.addGhost.hovering .addGhostActions{display:flex}.addGhost.rising{transition:transform .6s cubic-bezier(.34,1.46,.64,1),opacity .2s ease}.ghostDiscard{padding:0 10px}@keyframes ghostWait{50%{box-shadow:inset 0 0 0 1.5px var(--primary),0 22px 44px var(--lift),0 0 0 5px color-mix(in srgb,var(--primary) 22%,transparent)}}@media (max-width:620px){.modal:not(.createMode)>.modalStatic{display:none}.modal:not(.createMode) .setupSummary{display:flex}.addFab{display:grid}.movementCreatorLaunch{display:none}.exerciseScroller{padding-bottom:104px}.moveRow.phoneRow{gap:8px;min-height:60px;padding:12px 12px 12px 14px;cursor:pointer}}@media (prefers-reduced-motion: reduce){.sheet,.sheetScrim{transition:none}.addGhost.hovering{animation:none}}.modal{overflow:clip}.moveList.reordering>.moveRow:not(.dragging){transition:transform .44s cubic-bezier(.34,1.46,.64,1)}.moveRow.dragging.willReturn{opacity:.62;box-shadow:0 10px 24px var(--lift),inset 0 0 0 1.5px var(--field-line)}@media (prefers-reduced-motion: reduce){.moveList.reordering>.moveRow{transition:none}}.card,.panel,.confirmCard,.nextCard,.workoutPanel.active{padding:var(--inset)}.confirmCard,.nextCard,.upcomingCard{border-radius:var(--r-card)}.upcomingCard{padding:var(--inset)}.workoutPanel{border-radius:var(--r-tile);padding:var(--inset)}.workoutPanel.active{border-radius:var(--r-tile)}.workoutPanel.addPanel{padding:var(--inset)}.activityRow,.moveRow,.timeTile,.createPresetBtn,.createExtraToggle,.sheetChoice,.setupSummary{border-radius:var(--r-tile)}.activityRow,.moveRow{min-height:var(--tile-min);padding:var(--inset);gap:var(--inset)}.activityRow{grid-template-columns:var(--chip-size) minmax(0,1fr)}.activityRows{gap:12px}.timeTile{padding:var(--inset);gap:var(--inset)}.timeHeader{gap:var(--inset)}.createPresetBtn,.createExtraToggle{padding:var(--inset)}.moveMeta,.activityRowMeta,.setupSummaryText small,.sheetChoice small,.createExtraToggle small{color:var(--text)}.createPresetBtn.active span{color:var(--on-bright)}.moveMeta,.activityRowMeta{margin-top:0}.activityRowIcon,.activityIcon,.timeIcon,.nextIcon,.upcomingIcon{width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);font-size:20px}.navBtn,.back{display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);min-height:0;padding:0;border-radius:var(--r-inner)}.moveRow.editing{padding:var(--inset)}.moveRow.phoneRow{min-height:0;padding:var(--inset);gap:var(--inset)}.dragHandle{width:var(--chip-size);height:var(--chip-size);margin:0;border-radius:var(--r-inner);background:var(--icon-bg);color:var(--muted)}.dragHandle svg{width:var(--glyph-size);height:var(--glyph-size)}.moveRow.restItem .dragHandle{background:transparent}.dragHandle:hover{background:color-mix(in srgb,var(--icon-bg) 80%,var(--text))}.moveRow.restItem .dragHandle:hover{background:var(--hover)}.addGhost.overList,.dropSlot{border-radius:var(--r-tile)}.seg{display:flex;align-items:center;gap:4px;padding:4px;border-radius:var(--r-inner);background:var(--seg-bg);flex:0 0 auto}.segBtn{min-height:38px;padding:0 20px;border:0;border-radius:var(--r-fine);background:transparent;color:var(--text);cursor:pointer}.segBtn:hover{background:var(--hover)}.moveActions.seg{gap:4px}.moveActions .segBtn{min-width:100px}.moveActions .editBtn{background:var(--seg-on)}.moveActions .editBtn:hover{background:color-mix(in srgb,var(--seg-on) 88%,var(--text))}.moveActions .removeBtn{display:grid;place-items:center;width:40px;min-width:40px;padding:0;border:0;background:var(--danger-fill);color:var(--on-danger-fill)}.moveActions .removeBtn:hover{background:color-mix(in srgb,var(--danger-fill) 88%,white);border:0}.moveActions .removeBtn svg{display:block;width:24px;height:24px}.moveActions .removeFill{background:color-mix(in srgb,var(--on-danger-fill) 45%,transparent)}.moveActions .removeBtn.holding{color:#fff}@media (max-width:1100px){.moveActions .segBtn:not(.removeBtn){min-width:0;padding:0 14px}}.tabs.rubberTabs{padding:4px;gap:4px;border:0;border-radius:var(--r-inner);background:var(--seg-bg)}.rubberIndicator{top:4px;left:4px;height:calc(100% - 8px);border-radius:var(--r-fine);background:var(--seg-on)}.tabs.rubberTabs .tab{min-height:38px;padding:0 20px}.tabs.rubberTabs .tab.active{color:var(--text)}#app.light .rubberIndicator{box-shadow:0 1px 3px var(--lift)}.toggleTrack{width:50px;height:28px;border-radius:var(--r-inner);background:var(--line);border:.4px solid var(--line);opacity:1;transition:background .16s ease,opacity .16s ease}.toggleThumb{width:24px;height:24px;top:50%;left:1.6px;border-radius:12px 4px 4px 12px;background:var(--text);transform:translateY(-50%);transition:left .16s ease,border-radius .16s ease,background .16s ease}.globalTimingToggle input:checked+.toggleTrack{background:var(--color-accent-primary);opacity:1}.globalTimingToggle input:checked+.toggleTrack .toggleThumb{left:calc(100% - 25.6px);border-radius:4px 12px 12px 4px;background:var(--color-text-on-accent)}@media (max-width:900px){.workoutPanel:not(.addPanel){border-radius:var(--r-tile);padding:var(--inset)}}@media (max-width:620px){:host{--gutter:0px;--grid-gap:8px}}@media (max-width:620px){.modalBackdrop{padding:0}.modal,.modal:not(.createMode){width:100%;height:100%;max-height:none;border-radius:0;border:0}.modalTop{padding-top:calc(16px + env(safe-area-inset-top,0px))}.modal:not(.createMode) .exerciseScroller{padding-bottom:calc(104px + env(safe-area-inset-bottom,0px))}}#app{--group-bg:var(--card)}.modal,.sheet{--group-bg:var(--tile)}.view{padding-left:var(--gutter);padding-right:var(--gutter)}.grid{gap:var(--grid-gap)}.setupCaption{display:block;padding:0 4px 8px;color:var(--muted);text-transform:uppercase}.setupGroup,#settingsView .integrationList,#settingsView .toggleList{display:grid;gap:0;border-radius:var(--r-tile);background:var(--group-bg);overflow:hidden}.setupRow,#settingsView .integration,#settingsView .toggleRow{position:relative;display:flex;align-items:center;justify-content:space-between;gap:16px;min-height:56px;padding:12px 16px;border-radius:0;background:transparent}:is(.setupRow,#settingsView .integration,#settingsView .toggleRow):not([hidden])~:is(.setupRow,.integration,.toggleRow):before{content:"";position:absolute;top:0;left:16px;right:0;border-top:.5px solid var(--divider)}.setupRow.withSlider{display:grid;grid-template-columns:minmax(0,1fr);gap:10px;align-items:stretch}.setupRowTop{display:flex;justify-content:space-between;align-items:center;gap:16px}.setupText{display:grid;gap:2px;min-width:0}.setupValue,#settingsView .status{color:var(--muted);margin-top:0;font-variant-numeric:tabular-nums}.setupRow .rangeTrack[hidden]{display:none}.rangeTrack.setupSlider{height:28px;margin:0 2px;border:0;border-radius:0!important;background:transparent;overflow:visible}.rangeTrack.setupSlider:before{content:"";position:absolute;left:0;right:0;top:50%;height:6px;border-radius:99px;background:var(--track);transform:translateY(-50%)}.setupSlider .rangeFill{top:50%;bottom:auto;height:6px;border-radius:99px;transform:translateY(-50%)}.setupSlider .rangeFill:after{content:"";position:absolute;right:-11px;top:50%;width:22px;height:22px;border-radius:50%;background:var(--slider-fill);box-shadow:0 1px 4px var(--lift);transform:translateY(-50%)}.setupSlider:focus-within{outline:0}.setupSlider:focus-within .rangeFill:after{box-shadow:0 0 0 3px color-mix(in srgb,var(--primary) 45%,transparent)}.stepper{display:flex;align-items:center;gap:2px;padding:4px;border-radius:var(--r-inner);background:var(--seg-bg);flex:0 0 auto}.stepBtn{width:36px;height:32px;padding:0;border:0;border-radius:var(--r-fine)!important;background:transparent;color:var(--text);font:600 18px/1 var(--font);cursor:pointer}.stepBtn:hover:not(:disabled){background:var(--hover)}.stepBtn:disabled{opacity:.35;cursor:default}.stepCount{min-width:24px;text-align:center;font:600 var(--t-strong)/1 var(--font);font-variant-numeric:tabular-nums}.timeTiles.setupBlock,.modal:not(.createMode) .timeTiles.setupBlock{display:block;margin-bottom:12px}.editNameLabel{padding:0 4px}.routineSummary{margin:0 0 4px;padding:0 4px;background:none;border-radius:0;color:var(--muted)}#settingsView .card{display:grid;gap:12px;padding:0;border:0;border-radius:0;background:none}#settingsView .card+.card{margin-top:36px}#settingsView .paneTitle{margin:0 4px}#settingsView .note{margin:0 4px 4px}#settingsView .integration>div:first-child,#settingsView .toggleRow>div:first-child{display:grid;gap:2px;min-width:0}#settingsView .helpSteps{gap:0;border-radius:var(--r-tile);background:var(--group-bg);overflow:hidden}#settingsView .helpSteps li{border-radius:0;background:transparent}#settingsView .helpSteps li+li:after{content:"";position:absolute;top:0;left:52.8px;right:0;border-top:.5px solid var(--divider)}#settingsView .metaTableWrap{border-radius:var(--r-tile);background:var(--group-bg)}.activityCard,.insightCard{grid-column:span 3}.weatherCard,.grid.noWeather .activityCard,.grid.noWeather .insightCard,.grid.noActivity .insightCard{grid-column:span 6}.grid.noActivity.noWeather .insightCard{grid-column:span 12}@media (max-width:1199px) and (min-width:901px){.activityCard,.insightCard{grid-column:span 6}.weatherCard,.grid.noActivity .insightCard{grid-column:span 12}}@media (max-width:900px){.activityCard,.insightCard,.weatherCard,.grid .insightCard{grid-column:auto}}.jointRows{gap:0;padding:4px 0;border-radius:var(--r-tile);background:var(--tile)}.jointRows>.activityRow{background:transparent}.insightCard .jointRows{flex:1;align-content:space-evenly}.weatherCard{display:flex;flex-direction:column}.wxWide{flex:1;display:flex;flex-direction:column;gap:var(--inset)}.wxNow{display:flex;justify-content:space-between;align-items:flex-start;gap:16px}.wxCurrent{display:flex;align-items:flex-start;gap:16px;min-width:0}.wxTempBlock{display:grid;gap:4px;min-width:0}.wxTemp{display:flex;align-items:flex-start;gap:2px}.wxPlace{color:var(--muted);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.wxCondition{display:grid;gap:2px;padding:var(--inset);border-radius:var(--r-tile);background:var(--tile);flex:0 0 auto}.wxNoDays{flex:1;display:grid;place-items:center;padding:16px;border-radius:var(--r-tile);background:var(--tile);color:var(--muted)}.wxIcon{position:relative;display:block;flex:0 0 auto;width:54px;height:54px;border-radius:var(--r-inner);background:var(--icon-bg);overflow:hidden}.wxIcon>svg,.wxLayer>svg{display:block;width:100%;height:100%}:is(.wxIcon,.wxLayer).clear,:is(.wxIcon,.wxLayer).partly{background:var(--wx-clear)}:is(.wxIcon,.wxLayer).cloudy{background:var(--wx-cloudy)}:is(.wxIcon,.wxLayer).rain,:is(.wxIcon,.wxLayer).snow{background:var(--color-text-muted)}:is(.wxIcon,.wxLayer).night{background:var(--wx-night)}.wxIcon .wxBright{fill:var(--wx-cloud-bright)}.wxIcon .wxCloudLight{fill:var(--wx-cloudy)}.wxIcon .wxAccent{fill:var(--color-accent-primary)}.wxIcon.large{width:90px;height:90px;border-radius:var(--r-tile)}.wxIcon>canvas{display:block;width:100%;height:100%;image-rendering:pixelated}.wxIcon :is(.wxSunDisc,.wxMoonPath,.wxBright,.wxCloudLight,.wxDrop,.wxFlake,.wxTwinkle){transform-box:fill-box;transform-origin:center}#app.wxMotion .wxIcon .wxSunDisc{animation:wxBreathe 3.6s ease-in-out infinite}#app.wxMotion .wxIcon .wxMoonPath{animation:wxBob 5.2s ease-in-out infinite}#app.wxMotion .wxIcon :is(.wxBright,.wxCloudLight){animation:wxDrift 6.4s ease-in-out infinite}#app.wxMotion .wxIcon .wxDrop{animation:wxFall .95s linear infinite}#app.wxMotion .wxIcon .wxFlake{animation:wxSnow 3.2s linear infinite}#app.wxMotion .wxIcon .wxTwinkle{animation:wxTwinkle 2.4s ease-in-out infinite}@keyframes wxBreathe{50%{transform:scale(1.03)}}@keyframes wxBob{50%{transform:translateY(-1px)}}@keyframes wxDrift{0%,to{transform:translate(-1.5px)}50%{transform:translate(1.5px)}}@keyframes wxFall{0%{transform:translateY(-5px);opacity:0}18%,72%{opacity:1}to{transform:translateY(9px);opacity:0}}@keyframes wxSnow{0%{transform:translateY(-6px);opacity:0}20%,75%{opacity:1}to{transform:translate(1.5px,8px);opacity:0}}@keyframes wxTwinkle{50%{opacity:.35}}.wxLayer{position:absolute;top:0;right:0;bottom:0;left:0;display:block}.wxLayer.wxOut{animation:wxFadeOut .7s cubic-bezier(.3,0,1,1) forwards}@keyframes wxFadeOut{to{opacity:0}}#settingsView .toggleRow.wxStyleRow{flex-direction:column;align-items:stretch}.wxStyleChoice{display:grid;grid-template-columns:repeat(auto-fit,minmax(148px,1fr));gap:8px}.wxStyleBtn{display:grid;justify-items:start;gap:var(--inset);padding:var(--inset);border:.8px solid var(--field-line);border-radius:var(--r-tile);background:transparent;color:var(--text);text-align:left;cursor:pointer}.wxStyleBtn[aria-pressed=true]{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.wxStylePreview{display:grid;grid-template-columns:repeat(2,54px);gap:8px}.wxDeg{font-family:var(--font-tile);font-size:var(--t-wx-temp);font-weight:var(--w-medium);line-height:1;letter-spacing:-.02em}.wxUnit,.wxRange{font-family:var(--font-tile);font-size:var(--t-wx-range);font-weight:300;line-height:1.25;letter-spacing:0}.wxPlace,.wxCondName{font-family:var(--font-tile);font-size:var(--t-tile-title);font-weight:var(--w-semibold);line-height:var(--lh-tile-title);letter-spacing:0}.wxNoDays{font-family:var(--font-tile);font-size:var(--t-tile-detail);font-weight:var(--w-regular);line-height:var(--lh-tile-detail);letter-spacing:0}.wxNow[role=button],.wxDayTile{cursor:pointer;border-radius:var(--r-tile)}:is(.wxNow,.wxDayTile,.wxStripDay):focus-visible{outline:2px solid var(--color-border-focus);outline-offset:2px}.wxStrip{position:relative;flex:1;display:flex}.wxStripDays{flex:1;display:grid;grid-template-columns:repeat(6,minmax(0,1fr))}.wxStripDay{display:flex;flex-direction:column;align-items:center;justify-content:space-between;gap:var(--inset);min-width:0;padding:var(--inset) 0;border-radius:var(--r-tile);cursor:pointer}@media (hover:hover){.wxStripDay:hover{background:var(--color-state-hover)}}.wxStripGap{align-self:stretch;height:90px}.wxStripDay .wxTemps{display:grid;justify-items:center;gap:8px}.wxStripSky{position:absolute;left:0;top:calc(var(--inset) * 2 + var(--lh-tile-detail));width:100%;height:90px;border-radius:var(--r-inner);pointer-events:none;image-rendering:pixelated}.wxStripDay .wxDayName,.wxStripDay .wxHigh,.wxGraphDays{font-family:var(--font-tile);font-size:var(--t-tile-detail);font-weight:var(--w-regular);line-height:var(--lh-tile-detail);letter-spacing:0}.wxStripDay .wxLow{font-family:var(--font-tile);font-size:var(--t-tile-title);font-weight:var(--w-semibold);line-height:var(--lh-tile-title);color:var(--muted)}.wxBackdrop{z-index:170}.wxDialogCard{width:min(860px,100%);display:grid;gap:var(--inset)}.wxDialogHead{display:flex;align-items:center;justify-content:space-between;gap:var(--inset);padding-left:var(--inset)}.wxDialogHead .activityTitle{margin:0}.wxDialogClose{background:transparent}.wxGraph{display:grid;gap:8px;touch-action:pan-y;cursor:ew-resize;border-radius:var(--r-tile);user-select:none;-webkit-user-select:none}.wxGraph:focus{outline:none}.wxGraph:focus-visible{outline:2px solid var(--color-border-focus);outline-offset:4px}.wxGraphDays{display:grid;grid-template-columns:repeat(6,minmax(0,1fr));text-align:center;color:var(--muted)}.wxGraphSky{position:relative;height:200px;border-radius:var(--r-tile);overflow:hidden;background:var(--tile)}.wxGraphSky>canvas{display:block;width:100%;height:100%;image-rendering:pixelated}.wxGraphLine{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;overflow:visible;pointer-events:none}.wxLineLabel{font-family:var(--font-tile);font-size:14px;font-weight:var(--w-semibold);text-anchor:middle;paint-order:stroke;stroke-width:3px;stroke-linejoin:round}@media (max-width:620px){.wxGraphSky{height:160px}.wxDialogNow{flex-wrap:wrap}}.segBtn{transition:background .15s ease,transform .18s cubic-bezier(.34,1.46,.64,1),box-shadow .15s ease,color .15s ease}.segBtn:hover{background:transparent}@media (hover:hover){.segBtn:hover{background:var(--color-state-hover)}}.tabs.rubberTabs .tab.active:hover{background:transparent}.segBtn:active{background:var(--color-state-pressed);transform:scale(.97)}.segBtn:focus-visible{outline:none;box-shadow:inset 0 0 0 2px var(--color-border-focus)}.segBtn:disabled{opacity:.4;cursor:default}.moveActions.seg{background:transparent;transition:background .18s ease}.moveActions.seg:focus-within{background:var(--seg-bg)}@media (hover:hover){.moveActions.seg:hover{background:var(--seg-bg)}}.moveActions .editBtn,.moveActions .editBtn:hover{background:transparent}.moveActions .removeBtn,.moveActions .removeBtn:hover{background:transparent;color:var(--text)}@media (hover:hover){.moveActions .editBtn:hover{background:var(--color-state-hover)}.moveActions .removeBtn:hover{background:var(--danger-fill);color:var(--color-text-on-danger)}}.moveActions .removeBtn:active{background:linear-gradient(var(--color-state-pressed-on-bright),var(--color-state-pressed-on-bright)),var(--danger-fill);color:var(--color-text-on-danger)}.moveActions .removeBtn.holding{background:var(--danger-bg);color:var(--color-text-on-danger)}.moveActions .removeFill{background:var(--danger-fill)}.activityIcon{color:var(--muted)}.activityRowIcon,.timeIcon,.nextIcon,.upcomingIcon{color:var(--text)}.wxTempBlock{padding-top:6px}.motionRangeWrap input[type=range]{accent-color:var(--bright);background:transparent}', Ql = '#app{--hc-on-accent:#f4f3f3;--hc-open-edge:rgba(255,255,255,.1);--hc-hair:inset 0 0 0 .2px var(--line),inset 0 -.2px 0 var(--line);--hc-hair-all:inset 0 0 0 .4px var(--line)}#app.light{--hc-open-edge:#e3e3e3}#homeView .card{padding:var(--inset);border-radius:var(--r-card);box-shadow:var(--hc-hair)}#homeView .card:has(>.activityHeader){padding-top:14px;box-shadow:var(--hc-hair-all)}#homeView .activityCard{min-height:0}#homeView .activityHeader{height:28px;padding:0 18px;gap:22px;margin-bottom:10px}#homeView .activityHeader .activityIcon{display:none}#homeView .activityTitle{font:500 18px/1.2 var(--font-tile);font-style:normal;letter-spacing:-.01em;text-box:none}#homeView .card .activityRows{gap:0}#homeView .card .jointRows{padding:0;background:transparent}#homeView .card .activityRow{min-height:var(--tile-min);padding:var(--inset);gap:12px;border-radius:var(--r-tile);grid-template-columns:var(--chip-size) minmax(0,1fr);background:transparent}#homeView .activityRowIcon{width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);background:var(--primary);color:var(--hc-on-accent)}#homeView .activityRowName{font:600 14px/20px var(--font-tile)}#homeView .activityRowMeta{font:400 16px/1.15 var(--font);margin:0}#homeView .card .activityRow.tap{cursor:pointer;transition:background .15s ease,box-shadow .15s ease}#homeView .card .activityRow.tap:hover{background:var(--tile);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line)}#homeView .weatherCard{padding:20px}#homeView .wxWide{gap:16px}#homeView .wxIcon.large{border-radius:28px}#homeView .wxCondition{display:flex;flex-direction:column;justify-content:space-between;gap:10px;padding:10px 16px;border-radius:28px}#homeView .wxCondName{font:400 18px/1.2 var(--font)}#homeView .weatherCard .activityRow .wxIcon{width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner)}@media (max-width:620px){#homeView .weatherCard{padding:var(--inset)}#homeView .wxIcon.large{width:60px;height:60px;border-radius:20px}#homeView .wxDeg{font-size:46px}#homeView .wxRange{font-size:20px}}.tfLabel{grid-column:1/-1}.tfCard{grid-column:span 6;align-self:start;display:flex;flex-direction:column}.tfIcon{display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);flex:none;--mdc-icon-size:var(--glyph-size)}:is(.tfCard .activityRow,.tfOpenHead) .tfIcon{background:var(--primary);color:var(--hc-on-accent)}.tfCard .activityRow{display:grid;align-items:center}#homeView section.tfCard.open:has(>.activityHeader){padding:var(--inset)}.tfCard.open>.activityHeader{display:none}.tfOpen{flex:1;display:flex;flex-direction:column;gap:10px;padding:var(--inset);border-radius:28px;background:var(--tile);box-shadow:inset 0 0 0 .4px var(--hc-open-edge)}.tfOpenHead{display:flex;align-items:center;gap:12px}.tfOpenHead>div:nth-child(2){flex:1;min-width:0}.tfBack{display:grid;place-items:center;width:34px;height:34px;padding:0;border:0;background:transparent;color:var(--text);cursor:pointer}.tfBack .icon{width:34px;height:34px}.tfGraph{display:block;width:100%;flex:1;min-height:80px}.tfGraph text{fill:var(--muted);font:400 11px var(--font)}.tfAction{display:flex;flex-direction:column;gap:14px;padding:20px;border-radius:28px;background:var(--card);box-shadow:var(--hc-hair)}.tfActionHead{display:flex;align-items:center;gap:12px;min-width:0}.tfActionHead>div{min-width:0}.tfAction .tfIcon{border:0;padding:0;background:var(--tile);color:var(--text);cursor:pointer}.tfAction.on .tfIcon{background:#fa0;color:#fff}.tfBar{position:relative;height:46px;border-radius:16px;background:var(--tile);overflow:hidden;cursor:pointer;touch-action:none}.tfBar i{position:absolute;inset:0 auto 0 0;background:linear-gradient(90deg,#ffc247,#fa0)}.tfBar:focus-visible{outline:2px solid var(--primary);outline-offset:2px}.tfBlock{grid-column:span 6;align-self:start;display:grid;align-content:start;min-width:0;container-type:inline-size}.tfLights{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}@container (max-width:289px){.tfLights{grid-template-columns:1fr}}.tfPairs{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px;align-content:start}@container (max-width:289px){.tfPairs{grid-template-columns:1fr}}.tfPairs .tfOpen{grid-column:1/-1}.tfHalf.tap{cursor:pointer;transition:background .15s ease}.tfHalf.tap:hover{background:var(--tile)}.tfBar:after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;box-shadow:var(--hc-hair-all);pointer-events:none}.tfHalf{display:flex;align-items:center;gap:12px;min-width:0;min-height:var(--tile-min);padding:var(--inset);border-radius:var(--r-tile);background:var(--card);box-shadow:var(--hc-hair)}.tfHalf .tfIcon{background:var(--tile);color:var(--text)}.tfHalf>div{min-width:0}:is(.tfAction,.tfHalf) :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfHeadIcon{--mdc-icon-size:28px}@media (max-width:1199px) and (min-width:901px){.tfCard{grid-column:span 6}.tfBlock{grid-column:span 12}}@media (max-width:900px){.tfCard,.tfBlock{grid-column:auto}}#app.showDensity #homeView :is(.card,.tfAction,.tfHalf){position:relative;outline:1px dashed color-mix(in srgb,var(--primary) 70%,transparent);outline-offset:-1px}#app.showDensity #homeView :is(.card,.tfAction):after{content:attr(data-h);position:absolute;top:6px;right:12px;z-index:5;padding:2px 8px;border-radius:99px;background:var(--primary);color:#fff;font:600 11px/16px var(--font);pointer-events:none}.densityBadge{position:fixed;left:50%;bottom:calc(16px + env(safe-area-inset-bottom,0px));z-index:80;transform:translate(-50%);display:flex;align-items:center;gap:10px;padding:8px 16px;border-radius:99px;background:var(--bright);color:var(--on-bright);font:600 13px/18px var(--font);box-shadow:0 6px 20px #00000040;pointer-events:none;white-space:nowrap}.densityBadge[hidden]{display:none}.densityBadge b{font-variant-numeric:tabular-nums}.densityBadge small{font-weight:400;opacity:.75}#homeView .card:is(.activityCard,.insightCard,.tfCard,.weatherCard){container-type:inline-size}#homeView .card:is(.activityCard,.insightCard,.tfCard,.weatherCard) .activityRows{grid-template-columns:repeat(2,minmax(0,1fr));gap:0}@container (max-width:279px){#homeView .card .activityRows{grid-template-columns:1fr}}@media (min-width:1200px){#homeView .grid>.card:is(.activityCard,.insightCard){grid-column:span 6}#homeView .grid>.weatherCard{grid-column:span 6}}', ed = `<main id="app"><div class="shell">
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
        <div class="integration"><div><strong>Weather</strong><div class="status" id="weatherStatus" data-empty="The forecast on Home, from a Home Assistant weather entity">The forecast on Home, from a Home Assistant weather entity</div></div><select class="settingsSelect entitySelect" id="weatherEntity" aria-label="Weather entity"></select></div>
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
        <div class="toggleRow"><div><strong>Weather</strong><div class="status">Today and the next days, beside Movement</div></div><button class="switch on" data-toggle="weather"></button></div>
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

        <div class="toggleRow wxStyleRow">
          <div>
            <strong>Weather style</strong>
            <div class="status">How the weather pictures on Home are drawn.</div>
          </div>
          <div class="wxStyleChoice" id="wxStyleChoice" role="group" aria-label="Weather style">
            <button class="wxStyleBtn" type="button" aria-pressed="false" data-wx-style="bitmap"><span class="wxStylePreview"></span><strong>Bitmap</strong></button>
            <button class="wxStyleBtn" type="button" aria-pressed="false" data-wx-style="onebit"><span class="wxStylePreview"></span><strong>1-bit</strong></button>
            <button class="wxStyleBtn" type="button" aria-pressed="false" data-wx-style="smooth"><span class="wxStylePreview"></span><strong>Smooth</strong></button>
          </div>
        </div>

        <div class="toggleRow">
          <div>
            <strong>Weather layout</strong>
            <div class="status">The next six days on Home, as tiles or as a 12-hour sky.</div>
          </div>
          <div class="themeChoice" id="wxLayoutChoice" role="group" aria-label="Weather layout">
            <button class="wxLayoutBtn" type="button" aria-pressed="true" data-wx-layout="tiles">Day tiles</button>
            <button class="wxLayoutBtn" type="button" aria-pressed="false" data-wx-layout="strip">Sky strip</button>
          </div>
        </div>

        <div class="toggleRow">
          <div>
            <strong>Weather motion</strong>
            <div class="status">The weather pictures move, and change shape when the weather changes.</div>
          </div>
          <button class="switch on" id="wxMotionToggle" aria-label="Toggle weather motion"></button>
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
`, ln = {
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
}, ct = (r) => r < 0 ? 0 : r > 1 ? 1 : r, us = (r, u, a) => r + (u - r) * a, ko = (r) => {
  const u = String(r || "#000000").trim().replace("#", ""), a = u.length === 3 ? u.split("").map((M) => M + M).join("") : u;
  return [0, 2, 4].map((M) => parseInt(a.slice(M, M + 2), 16) || 0);
}, td = (r) => "#" + r.map((u) => Math.round(Math.max(0, Math.min(255, u))).toString(16).padStart(2, "0")).join(""), ms = {}, Be = (r, u, a) => {
  const M = r + u + a;
  return ms[M] || (ms[M] = td(ko(r).map((T, C) => T + (ko(u)[C] - T) * a)));
}, gs = {}, ma = (r) => gs[r] || (gs[r] = ko(r)), bo = (r, u, a, M) => (T) => {
  if (T <= 0) return 0;
  if (T >= 1) return 1;
  let C = 0, j = 1, z = T;
  for (let I = 0; I < 18; I++)
    z = (C + j) / 2, 3 * (1 - z) * (1 - z) * z * r + 3 * (1 - z) * z * z * a + z * z * z < T ? C = z : j = z;
  return 3 * (1 - z) * (1 - z) * z * u + 3 * (1 - z) * z * z * M + z * z * z;
}, nd = { std: bo(0.2, 0, 0, 1), acc: bo(0.3, 0, 1, 1), dec: bo(0, 0, 0, 1) };
function ys(r, u) {
  const a = String(r || "");
  return (a === "sunny" || a === "clear-night" ? "clear" : a === "partlycloudy" ? "partly" : a === "fog" ? "fog" : a === "lightning" || a === "lightning-rainy" ? "storm" : a === "snowy" || a === "snowy-rainy" ? "snow" : a === "rainy" || a === "pouring" || a === "hail" ? "rain" : "cloudy") + "/" + (a === "clear-night" || u ? "night" : "day");
}
function ks(r) {
  const u = { clear: [r.skyClearDay, r.skyClearNight], cloudy: [r.skyCloudyDay, r.skyCloudyNight], rain: [r.skyRainDay, r.skyRainNight], snow: [r.skySnowDay, r.skySnowNight], fog: [r.skyFogDay, r.skyFogNight] };
  return u.partly = [Be(u.clear[0], u.cloudy[0], 0.12), Be(u.clear[1], u.cloudy[1], 0.12)], u.storm = [Be(u.rain[0], "#000000", 0.22), Be(u.rain[1], "#000000", 0.22)], u;
}
const So = [[61, 29, 4.4], [73, 16, 2.9], [79, 57, 3.3], [21, 77, 2.5], [13, 20, 2.3]], Co = [[29.35, 60.65], [43.04, 60.65], [56.74, 60.65]], Mo = [[30, 64], [44, 61], [58, 64], [37, 74], [51, 74]];
function hs(r, u = ln) {
  const a = { ...ln, ...u }, M = ks(a), T = String(r).split("/"), C = M[T[0]] ? T[0] : "clear", j = T[1] === "night", z = M[C][j ? 1 : 0], I = {
    night: j,
    clearness: C === "clear" ? 1 : C === "partly" ? 0.7 : 0.25,
    sky: z,
    skyStops: [z],
    skyT: 0,
    sun: { x: 45, y: j ? 134 : 45, r: 33.26, o: 0 },
    moon: { x: 45, y: j ? 45 : 134, d: 64, o: 0 },
    cloud: { x: 134, y: 52.83, w: 58.7, o: 0, f: j ? 1 : 0 },
    stars: So.map(() => ({ o: 0 })),
    rain: Co.map(() => ({ o: 0, dy: -16 })),
    snow: Mo.map(() => ({ o: 0, dy: -16 })),
    bolt: { o: 0, dy: -10 }
  }, B = (re) => So.map(() => ({ o: re }));
  return C === "clear" ? j ? (I.moon.o = 1, I.stars = B(1)) : I.sun.o = 1 : C === "partly" ? (I.cloud = { x: 52.83, y: 52.83, w: 58.7, o: 1, f: j ? 1 : 0 }, j ? (I.moon = { x: 34, y: 33, d: 48, o: 1 }, I.stars = B(0.7)) : I.sun = { x: 35.22, y: 33.26, r: 23.48, o: 1 }) : C === "cloudy" || C === "fog" ? (I.cloud = { x: 45, y: 42.99, w: 66.52, o: 1, f: j ? 1 : 0 }, j ? I.moon = { x: 40, y: 36, d: 40, o: 0 } : I.sun = { x: 40, y: 36, r: 20, o: 0 }) : (I.cloud = { x: 45, y: 33.26, w: 58.7, o: 1, f: 1 }, j ? I.moon = { x: 38, y: 28, d: 36, o: 0 } : I.sun = { x: 38, y: 28, r: 18, o: 0 }, C === "snow" ? I.snow = Mo.map(() => ({ o: 1, dy: 0 })) : I.rain = Co.map((re, K) => ({ o: C === "storm" && K === 1 ? 0 : 1, dy: 0 })), C === "storm" && (I.bolt = { o: 1, dy: 0 })), I;
}
const vs = {
  cloud: { enter: [0, 0.55, "dec"], leave: [0.25, 0.8, "acc"], stay: [0.1, 0.75, "std"] },
  body: { enter: [0.35, 0.9, "dec"], leave: [0.15, 0.65, "acc"], stay: [0.1, 0.75, "std"] },
  fx: { enter: [0.55, 1, "dec"], leave: [0, 0.35, "acc"], stay: [0.1, 0.75, "std"] },
  sky: [0.1, 0.8, "std"]
};
function id(r, u, a, M = ln, T = !1) {
  const C = { ...ln, ...M }, j = (S, L) => S > 0.01 && L > 0.01 ? "stay" : S > 0.01 ? "leave" : L > 0.01 ? "enter" : "none", z = (S, L, O, U) => {
    const pe = S[0] + L * U, J = S[1] - (O - 1 - L) * U;
    return nd[S[2]](ct((a - pe) / Math.max(1e-3, J - pe)));
  }, I = (S, L, O, U = 0, pe = 1, J = 0) => {
    const ie = j(S.o, L.o);
    if (ie === "none") return { ...L, o: 0 };
    const V = z(vs[O][ie], U, pe, J), W = {};
    for (const le in L) W[le] = T && ie !== "stay" && le !== "o" ? ie === "leave" ? S[le] : L[le] : us(S[le], L[le], V);
    return W;
  }, B = z(vs.sky, 0, 1, 0);
  let re, K;
  if (r.night !== u.night) {
    const S = Math.min(r.clearness, u.clearness), L = Be(Be(r.sky, u.sky, 0.5), C.dusk, 0.6 * S);
    re = B < 0.5 ? Be(r.sky, L, B * 2) : Be(L, u.sky, B * 2 - 1), K = S > 0.5 ? [r.sky, C.dusk, u.sky] : [r.sky, u.sky];
  } else
    re = Be(r.sky, u.sky, B), K = [r.sky, u.sky];
  return {
    night: a < 0.5 ? r.night : u.night,
    clearness: us(r.clearness, u.clearness, a),
    sky: re,
    skyStops: K,
    skyT: B,
    sun: I(r.sun, u.sun, "body"),
    moon: I(r.moon, u.moon, "body"),
    cloud: I(r.cloud, u.cloud, "cloud"),
    stars: u.stars.map((S, L) => I(r.stars[L], S, "fx", L, u.stars.length, 0.05)),
    rain: u.rain.map((S, L) => I(r.rain[L], S, "fx", L, u.rain.length, 0.05)),
    snow: u.snow.map((S, L) => I(r.snow[L], S, "fx", L, u.snow.length, 0.05)),
    bolt: I(r.bolt, u.bolt, "fx")
  };
}
const ad = [
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
], dt = (r, u) => (ad[(u & 7) * 8 + (r & 7)] + 0.5) / 64, od = 0, Lo = 1, To = 2, Eo = 3, Ro = 4, lt = 5, On = 6, Jt = 7, Ao = 8, ga = (r, u) => u <= 0.6665 && ((r - 0.5) * (r - 0.5) + (u - 0.2877) * (u - 0.2877) <= 0.0824 || (r - 0.25) * (r - 0.25) + (u - 0.416) * (u - 0.416) <= 0.0625 || (r - 0.791) * (r - 0.791) + (u - 0.458) * (u - 0.458) <= 0.0437 || r >= 0.25 && r <= 0.791 && u >= 0.416), rd = ["...##", "..##.", ".##..", "#####", "..##.", ".##..", ".#..."], sd = [[7, 0], [0, 13], [5, 13], [2, 24], [11, 9], [6, 9], [9, 0]].map((r) => [r[0] * 13 / 11, r[1] * 28 / 24]), Ss = (r, u, a) => {
  let M = !1;
  for (let T = 0, C = r.length - 1; T < r.length; C = T++) {
    const j = r[T], z = r[C];
    j[1] > a != z[1] > a && u < (z[0] - j[0]) * (a - j[1]) / (z[1] - j[1]) + j[0] && (M = !M);
  }
  return M;
};
function ld(r, { size: u = 90, px: a = 2, oneBit: M = !1, colors: T = ln, ink: C = "#26221e", paper: j = "#fbf9f6", clock: z = 0, idle: I = !1 } = {}) {
  const B = { ...ln, ...T }, re = Math.sin, K = Math.PI * 2, S = Math.max(6, Math.round(u / a)), L = S / 90, O = I ? Math.floor(z / 100) * 100 : 0, U = I ? re(K * O / 3600) : 0, pe = I ? 1.8 * re(K * O / 6400) : 0, J = I ? 0.9 * re(K * O / 4100) : 0, ie = I ? 0.8 * re(K * O / 5200) : 0, V = O / 3400 % 1, W = I && r.bolt.o > 0.5 && (V < 0.04 || V > 0.08 && V < 0.11), le = new Array(S * S), xe = new Uint8Array(S * S), $ = (m, v, h, w, q) => {
    h == null || m < 0 || v < 0 || m >= S || v >= S || (w >= 1 || w > dt(m + 5, v + 3)) && (le[v * S + m] = h, xe[v * S + m] = q);
  }, we = (m, v, h, w) => {
    for (let q = Math.max(0, Math.floor(v - h) - 1); q <= Math.min(S - 1, v + h + 1); q++) for (let F = Math.max(0, Math.floor(m - h) - 1); F <= Math.min(S - 1, m + h + 1); F++) w(F, q, F + 0.5 - m, q + 0.5 - v);
  }, Ye = r.skyStops || [r.sky], k = r.skyT || 0;
  for (let m = 0; m < S; m++) {
    const v = r.night ? ct(1 - (m + 0.5) / (S * 0.7)) * 0.85 : ct(((m + 0.5) / S - 0.35) / 0.65) * 0.85;
    for (let h = 0; h < S; h++) {
      let w = Ye[0];
      if (Ye.length > 1) {
        const q = k * (Ye.length - 1), F = Math.min(Ye.length - 2, Math.floor(q));
        w = q - F > dt(h, m) ? Ye[F + 1] : Ye[F];
      }
      v > dt(h + 2, m + 5) && (w = r.night ? Be(w, "#000000", 0.28) : Be(w, "#ffffff", 0.2)), le[m * S + h] = W ? Be(w, "#ffffff", 0.25) : w;
    }
  }
  if (r.sun.o > 0.01) {
    const m = r.sun.x * L, v = r.sun.y * L, h = Math.max(1, r.sun.r * L);
    if (I) {
      const w = h * (1.45 + 0.06 * U), q = Be(B.sun, "#ffffff", 0.55);
      if (we(m, v, w, (F, P, d, c) => {
        const y = Math.sqrt(d * d + c * c);
        y > h && y < w && $(F, P, q, 0.26 * (1 - (y - h) / (w - h)) * r.sun.o, od);
      }), r.sun.o > 0.5) {
        const F = Math.floor(O / 500) % 2, P = Math.max(1, h * 0.22);
        for (let d = 0; d < 8; d++) if (d % 2 === F) for (let c = h + 1.5; c < h + 1.5 + P; c += 0.7) $(Math.floor(m + Math.cos(d * Math.PI / 4) * c), Math.floor(v + Math.sin(d * Math.PI / 4) * c), B.sun, r.sun.o, Ao);
      }
    }
    we(m, v, h, (w, q, F, P) => {
      if (F * F + P * P > h * h) return;
      const d = ((F * 0.643 + P * 0.766) / h + 1) / 2;
      $(w, q, ct((d - 0.62) / 0.38) > dt(w, q) ? B.sunEdge : B.sun, r.sun.o, Lo);
    });
  }
  if (So.forEach((m, v) => {
    const h = r.stars[v].o;
    if (h < 0.01) return;
    const w = Math.floor(m[0] * L), q = Math.floor(m[1] * L), F = I ? (Math.floor(O / 300) + v * 3) % 6 : 0;
    if (F === 5) return;
    const P = Math.round(m[2] * L * (F === 4 ? 0.3 : F < 2 ? 1 : 0.6));
    $(w, q, B.star, h, Jt);
    for (let d = 1; d <= P; d++) {
      const c = d === P && P > 1 ? Be(B.star, r.sky, 0.5) : B.star;
      $(w - d, q, c, h, Jt), $(w + d, q, c, h, Jt), $(w, q - d, c, h, Jt), $(w, q + d, c, h, Jt);
    }
  }), r.moon.o > 0.01) {
    const m = Math.max(1.5, r.moon.d * L * 0.37), v = r.moon.x * L, h = r.moon.y * L + (I && ie > 0.4 ? -1 : 0), w = v + 0.547 * m, q = h - 0.503 * m, F = 0.82 * m, P = Be(B.moon, "#ffffff", 0.6);
    we(v, h, m, (d, c, y, E) => {
      if (y * y + E * E > m * m) return;
      const Q = d + 0.5 - w, X = c + 0.5 - q;
      Q * Q + X * X <= F * F || $(d, c, ct((E + m) / (2 * m) * 1.1 - 0.1) > dt(d, c) ? B.moon : P, r.moon.o, To);
    });
  }
  const ge = Math.max(2, Math.round(15.65 * L)), Me = Math.max(1, Math.round(5.87 * L * 0.5));
  Co.forEach((m, v) => {
    const h = r.rain[v];
    let w = h.dy, q = h.o;
    if (q < 0.01) return;
    if (I) {
      const d = (O / 950 + v / 3) % 1;
      w += -5 + d * 14, q *= d < 0.18 ? d / 0.18 : d > 0.72 ? (1 - d) / 0.28 : 1;
    }
    const F = (m[0] + 3 + pe) * L, P = (m[1] + w) * L;
    for (let d = 0; d < ge; d++) for (let c = 0; c < Me; c++) $(Math.floor(F - 0.208 * d) + c, Math.floor(P) + d, B.rain, q, Ro);
  });
  const He = Math.max(0, Math.round(7.34 * L / 2.6));
  if (Mo.forEach((m, v) => {
    const h = r.snow[v];
    let w = h.dy, q = 0, F = h.o;
    if (F < 0.01) return;
    if (I) {
      const c = (O / 3200 + v / 5) % 1;
      w += -6 + c * 14, q = 1.5 * re(K * (c * 1.5 + v / 5)), F *= c < 0.2 ? c / 0.2 : c > 0.75 ? (1 - c) / 0.25 : 1;
    }
    const P = Math.floor((m[0] + 3.67 + q + pe) * L), d = Math.floor((m[1] + 3.67 + w) * L);
    $(P, d, B.snow, F, lt);
    for (let c = 1; c <= He; c++)
      $(P - c, d, B.snow, F, lt), $(P + c, d, B.snow, F, lt), $(P, d - c, B.snow, F, lt), $(P, d + c, B.snow, F, lt), He > 1 && c < He && ($(P - c, d - c, B.snow, F, lt), $(P + c, d - c, B.snow, F, lt), $(P - c, d + c, B.snow, F, lt), $(P + c, d + c, B.snow, F, lt));
  }), r.bolt.o > 0.01)
    if (S >= 30) {
      const m = 39 + pe, v = 50 + r.bolt.dy;
      for (let h = Math.floor(v * L); h <= (v + 28) * L; h++) for (let w = Math.floor(m * L); w <= (m + 13) * L; w++)
        Ss(sd, (w + 0.5) / L - m, (h + 0.5) / L - v) && $(w, h, B.sun, r.bolt.o, On);
    } else {
      const m = S / 18, v = 7, h = 10 + Math.round(r.bolt.dy * 0.2);
      rd.forEach((w, q) => w.split("").forEach((F, P) => {
        if (F !== "#") return;
        const d = Math.floor((v + P) * m), c = Math.floor((h + q) * m);
        for (let y = c; y < Math.max(c + 1, Math.floor((h + q + 1) * m)); y++) for (let E = d; E < Math.max(d + 1, Math.floor((v + P + 1) * m)); E++) $(E, y, B.sun, r.bolt.o, On);
      }));
    }
  if (r.cloud.o > 0.01) {
    const m = Math.max(3, r.cloud.w * L), v = m * 0.6665, h = (r.cloud.x + pe) * L - m / 2, w = (r.cloud.y + J) * L - v / 2, q = Be(B.cloudDay, B.cloudNight, Math.round(r.cloud.f * 4) / 4), F = Be(q, "#000000", 0.16);
    for (let P = Math.max(0, Math.floor(w) - 1); P <= Math.min(S - 1, w + v + 1); P++) for (let d = Math.max(0, Math.floor(h) - 1); d <= Math.min(S - 1, h + m + 1); d++) {
      const c = (d + 0.5 - h) / m, y = (P + 0.5 - w) / m;
      ga(c, y) && $(d, P, !ga(c, y + 1 / m) || ct((y - 0.42) / 0.25) * 0.8 > dt(d, P) ? F : q, r.cloud.o, Eo);
    }
  }
  return Cs(le, xe, S, S, { oneBit: M, ink: C, paper: j, snowInk: !r.night });
}
function Cs(r, u, a, M, { oneBit: T, ink: C, paper: j, snowInk: z }) {
  const I = new Uint8ClampedArray(a * M * 4), B = ma(C), re = ma(j);
  for (let K = 0; K < M; K++) for (let S = 0; S < a; S++) {
    const L = K * a + S, O = u[L];
    if (r[L] == null) continue;
    let U = ma(r[L]);
    if (T) {
      let pe;
      O === Ro || O === Ao ? pe = !0 : O === lt ? pe = z : O === Jt || O === On ? pe = !1 : pe = Math.round((0.2126 * U[0] + 0.7152 * U[1] + 0.0722 * U[2]) / 255 * 4) / 4 <= dt(S, K), (O === Lo || O === To || O === Eo || O === On) && (S > 0 && u[L - 1] !== O || S < a - 1 && u[L + 1] !== O || K > 0 && u[L - a] !== O || K < M - 1 && u[L + a] !== O) && (pe = !0), U = pe ? B : re;
    }
    I[L * 4] = U[0], I[L * 4 + 1] = U[1], I[L * 4 + 2] = U[2], I[L * 4 + 3] = 255;
  }
  return { w: a, h: M, data: I };
}
const dd = { clear: 0, partly: 0.35, cloudy: 0.85, fog: 0.9, rain: 1, storm: 1, snow: 0.9 }, cd = (r) => ys(r, !1).split("/")[0], wo = (r) => () => {
  r |= 0, r = r + 1831565813 | 0;
  let u = Math.imul(r ^ r >>> 15, 1 | r);
  return u = u + Math.imul(u ^ u >>> 7, 61 | u) ^ u, ((u ^ u >>> 14) >>> 0) / 4294967296;
}, pd = "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", ud = "M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", md = "M0 -1L0.2687 -0.2687L1 0L0.2687 0.2687L0 1L-0.2687 0.2687L-1 0L-0.2687 -0.2687Z", gd = "M7 0L0 13L5 13L2 24L11 9L6 9L9 0Z", hd = [[7, 0], [0, 13], [5, 13], [2, 24], [11, 9], [6, 9], [9, 0]], vd = [".##", "##.", ".#.", "#.."];
function Ms(r, { width: u, height: a, colors: M, wave: T = 0.38, soft: C = 6, glow: j = 0.6 }) {
  const z = { ...ln, dawn: "#e5a77e", ...M }, I = ks(z), B = u, re = a, K = B / 6, S = K / 2, L = Math.PI * 2, O = r.length ? r : [{ cond: "cloudy", night: !1 }], U = [...Array(12)].map((V, W) => {
    const le = O[Math.min(W, O.length - 1)], xe = cd(le.cond), $ = W % 2 === 1;
    return { cond: le.cond, k: xe, night: $, sky: I[xe][$ ? 1 : 0], cover: dd[xe] };
  }), pe = (V) => re * (0.5 - T * Math.cos(L * (V / K - 0.25)));
  return { C: z, S: U, W: B, H: re, cw: K, sw: S, TAU: L, yb: pe, side: (V, W, le) => {
    const xe = (V ? pe(W) - le : le - pe(W)) / Math.max(3, C * 1.4) + 0.5;
    return xe <= 0 ? 0 : xe >= 1 ? 1 : xe;
  }, glowAt: (V) => {
    const W = ((V / K - 0.25) % 1 + 1) % 1, le = Math.max(0, Math.min(5, Math.round(V / K - 0.25))), xe = Math.max(0, Math.min(5, Math.round(V / K - 0.75))), $ = 1 - (U[2 * le].cover + U[2 * xe + 1].cover) / 2, we = Math.sin(Math.PI * Math.min(1, Math.max(0, pe(V) / re)));
    return { c: W < 0.5 ? z.dusk : z.dawn, a: j * (0.2 + 0.8 * $) * we * we };
  }, soft: C, tw: K * 0.3, sy: re / 90 };
}
function Ls(r, { clock: u = 0, ambient: a = !1, seed: M = 1 }) {
  const { S: T, sw: C, side: j, C: z, TAU: I, sy: B } = r, re = u, K = { stars: [], suns: [], moons: [], clouds: [], drops: [], flakes: [], fogs: [], bolts: [] };
  return T.forEach((S, L) => {
    const O = wo(M * 977 + L * 131 + 7), U = (L + 0.5) * C, pe = S.night ? { clear: 9, partly: 5, cloudy: 2, fog: 0, rain: 0, storm: 0, snow: 1 }[S.k] : 0;
    for (let J = 0; J < pe; J++) {
      const ie = U + (O() - 0.5) * C * 1.6, V = (6 + O() * 76) * B, W = O() < 0.35, le = 1.8 + O() * 1.6, xe = j(!0, ie, V) * (W ? 0.95 : 0.7) * (a ? 0.6 + 0.4 * Math.sin(I * re / 2600 + J * 1.7 + L) : 1);
      xe >= 0.03 && K.stars.push({ x: ie, y: V, big: W, size: le, o: xe });
    }
    if (!S.night && (S.k === "clear" || S.k === "partly")) {
      const J = U + (O() - 0.5) * C * 0.3, ie = Math.min(15, C * 0.29);
      K.suns.push({ x: J, y: 32 * B, rad: ie, halo: ie * 2.8 * (a ? 1 + 0.07 * Math.sin(I * re / 3600 + L) : 1) });
    }
    if (S.night && (S.k === "clear" || S.k === "partly")) {
      const J = Math.min(0.78, C * 0.55 / 34), ie = U - 23 * J + (O() - 0.5) * C * 0.2;
      K.moons.push({ x: ie + 23 * J, y: (4 + (a ? 0.8 * Math.sin(I * re / 5200 + L) : 0)) * B + 23 * J, d: 46 * J });
    }
  }), T.forEach((S, L) => {
    const O = { clear: 0, partly: 1, cloudy: 3, fog: 0, rain: 3, storm: 3, snow: 2 }[S.k];
    if (!O) return;
    const U = wo(M * 577 + L * 71 + 3), pe = (L + 0.5) * C, J = S.k === "rain" || S.k === "storm" || S.night ? z.cloudNight : z.cloudDay, ie = S.night ? 0.82 : S.k === "storm" ? 0.75 : 1;
    for (let V = 0; V < O; V++) {
      const W = C / 46 * (S.k === "partly" ? 0.85 : 0.75 + U() * 0.55), le = pe + (S.k === "partly" ? C * 0.12 : (U() - 0.5) * C * 1.05), xe = (S.k === "partly" ? 40 : 6 + U() * 26) * B, $ = a ? 2.5 * Math.sin(I * re / 9e3 + L * 1.3 + V * 2.1) : 0, we = a ? 0.9 * Math.sin(I * re / 6100 + L + V) : 0;
      K.clouds.push({ x: le - 23 * W + $, y: xe - 15.33 * W + we, w: 46 * W, h: 30.66 * W, fill: J, o: ie * (O > 1 && V === 0 ? 0.85 : 1) });
    }
  }), T.forEach((S, L) => {
    const O = wo(M * 313 + L * 29 + 11), U = (L + 0.5) * C, pe = S.cond === "pouring" ? 16 : S.cond === "rainy" || S.cond === "hail" ? 9 : S.cond === "lightning-rainy" ? 12 : S.cond === "snowy-rainy" ? 5 : 0;
    for (let ie = 0; ie < pe; ie++) {
      let V = U + (O() - 0.5) * C * 1.05, W = 44 + O() * 36, le = 1;
      if (a) {
        const $ = ((W - 44 + re * 0.04) % 36 + 36) % 36;
        V -= 0.21 * ($ - (W - 44)), W = 44 + $, le = Math.min(1, $ / 6, (36 - $) / 6);
      }
      W *= B;
      const xe = j(S.night, V, W) * le;
      xe >= 0.05 && K.drops.push({ x: V, y: W, o: xe });
    }
    const J = S.cond === "snowy" ? 11 : S.cond === "snowy-rainy" ? 6 : 0;
    for (let ie = 0; ie < J; ie++) {
      let V = U + (O() - 0.5) * C * 1.05, W = 40 + O() * 44, le = 1;
      if (a) {
        const $ = ((W - 40 + re * 9e-3) % 44 + 44) % 44;
        W = 40 + $, V += 1.6 * Math.sin(I * re / 2800 + ie * 1.9 + L), le = Math.min(1, $ / 6, (44 - $) / 6);
      }
      W *= B;
      const xe = j(S.night, V, W) * le;
      xe >= 0.05 && K.flakes.push({ x: V, y: W, o: xe });
    }
    if (S.k === "fog") {
      const ie = S.night ? "#c8ccd6" : "#ffffff", V = S.night ? 0.28 : 0.62, W = a ? 4 * Math.sin(I * re / 8e3 + L) : 0;
      for (let le = 0; le < 4; le++) K.fogs.push({ x: U - C * 0.75 + le % 2 * C * 0.18 + (le % 2 ? W : -W), y: (30 + le * 13) * B, w: C * 1.3, c: ie, a: V });
    }
    if (S.k === "storm") {
      const ie = (re / 3400 + L * 0.37) % 1;
      K.bolts.push({ x: U + (O() - 0.5) * C * 0.3 - 5, y: 36 * B, o: a && !(ie < 0.05 || ie > 0.09 && ie < 0.12) ? 0.8 : 1 });
    }
  }), K;
}
function fd(r, u, a, M, T, C, j, z) {
  const { S: I, C: B, cw: re, yb: K, glowAt: S, soft: L, tw: O, sy: U } = r, pe = new Array(a * M), J = new Uint8Array(a * M), ie = new Uint8Array(a * M), V = (m, v, h, w, q) => {
    h == null || m < 0 || v < 0 || m >= a || v >= M || (w >= 1 || w > dt(m + 5, v + 3)) && (pe[v * a + m] = h, J[v * a + m] = q);
  }, W = (m, v, h, w) => {
    for (let q = Math.max(0, Math.floor(v - h) - 1); q <= Math.min(M - 1, v + h + 1); q++) for (let F = Math.max(0, Math.floor(m - h) - 1); F <= Math.min(a - 1, m + h + 1); F++) w(F, q, F + 0.5 - m, q + 0.5 - v);
  }, le = (m, v, h) => {
    for (let q = 0; q < m.length - 1; q++) {
      const F = (q + v) * re;
      if (h < F - O / 2) return [m[q], m[q], 0];
      if (h <= F + O / 2) return [m[q], m[q + 1], (h - F + O / 2) / O];
    }
    const w = m[m.length - 1];
    return [w, w, 0];
  }, xe = I.filter((m) => !m.night).map((m) => m.sky), $ = I.filter((m) => m.night).map((m) => m.sky), we = L / C, Ye = 16 * U / C;
  for (let m = 0; m < a; m++) {
    const v = (m + 0.5) * T, h = K(v) / C, w = le(xe, 0.75, v), q = le($, 1.25, v), F = S(v);
    for (let P = 0; P < M; P++) {
      const d = dt(m, P), c = P + 0.5 - h, y = (we > 0.01 ? ct(0.5 + c / we) : c > 0 ? 1 : 0) > d;
      let E = y ? w[2] > d ? w[1] : w[0] : q[2] > d ? q[1] : q[0];
      (y ? ct(((P + 0.5) / M - 0.45) / 0.55) * 0.7 : ct(1 - (P + 0.5) / (M * 0.55)) * 0.7) > dt(m + 2, P + 5) && (E = y ? Be(E, "#ffffff", 0.18) : Be(E, "#000000", 0.25)), y && c >= 0 && c < Ye && F.a * 1.3 * (1 - c / Ye) > dt(m + 6, P + 1) && (E = F.c), pe[P * a + m] = E, ie[P * a + m] = y ? 0 : 1;
    }
  }
  const k = Be(B.sun, "#ffffff", 0.55), ge = Be(B.moon, "#ffffff", 0.6);
  u.stars.forEach((m) => {
    const v = Math.floor(m.x / T), h = Math.floor(m.y / C);
    if (v < 0 || h < 0 || v >= a || h >= M || !ie[h * a + v] || m.o < 0.15) return;
    const w = m.o > 0.45 ? B.star : Be(B.star, pe[h * a + v], 0.5), q = m.big && m.o > 0.6 ? Math.floor(m.size / T) : 0;
    V(v, h, w, 1, Jt);
    for (let F = 1; F <= q; F++) [[v - F, h], [v + F, h], [v, h - F], [v, h + F]].forEach((P) => {
      P[0] >= 0 && P[1] >= 0 && P[0] < a && P[1] < M && ie[P[1] * a + P[0]] && V(P[0], P[1], w, 1, Jt);
    });
  }), u.suns.forEach((m) => {
    const v = Math.max(1.5, m.rad / T), h = m.x / T, w = m.y / C, q = m.halo / T * 0.85;
    if (W(h, w, q, (F, P, d, c) => {
      const y = Math.sqrt(d * d + c * c);
      y > v && y < q && !ie[P * a + F] && V(F, P, k, 0.3 * (1 - (y - v) / (q - v)), 0);
    }), z) {
      const F = Math.floor(j / 500) % 2, P = Math.max(1, v * 0.3);
      for (let d = 0; d < 8; d++) if (d % 2 === F) for (let c = v + 1.2; c < v + 1.2 + P; c += 0.7) V(Math.floor(h + Math.cos(d * Math.PI / 4) * c), Math.floor(w + Math.sin(d * Math.PI / 4) * c), B.sun, 1, Ao);
    }
    W(h, w, v, (F, P, d, c) => {
      d * d + c * c <= v * v && V(F, P, ct(((c / v + 1) / 2 - 0.6) / 0.4) > dt(F, P) ? B.sunEdge : B.sun, 1, Lo);
    });
  }), u.moons.forEach((m) => {
    const v = Math.max(1.5, m.d * 0.37 / T), h = m.x / T, w = m.y / C, q = h + 0.547 * v, F = w - 0.503 * v, P = 0.82 * v;
    W(h, w, v, (d, c, y, E) => {
      if (y * y + E * E > v * v) return;
      const Q = d + 0.5 - q, X = c + 0.5 - F;
      Q * Q + X * X > P * P && V(d, c, ct((E + v) / (2 * v) * 1.1 - 0.1) > dt(d, c) ? B.moon : ge, 1, To);
    });
  }), u.clouds.forEach((m) => {
    const v = Math.max(3, m.w / T), h = v * 0.6665, w = m.x / T, q = m.y / C, F = Be(m.fill, "#000000", 0.16);
    for (let P = Math.max(0, Math.floor(q) - 1); P <= Math.min(M - 1, q + h + 1); P++) for (let d = Math.max(0, Math.floor(w) - 1); d <= Math.min(a - 1, w + v + 1); d++) {
      const c = (d + 0.5 - w) / v, y = (P + 0.5 - q) / v;
      ga(c, y) && V(d, P, !ga(c, y + 1 / v) || ct((y - 0.42) / 0.25) * 0.8 > dt(d, P) ? F : m.fill, m.o, Eo);
    }
  }), u.fogs.forEach((m) => {
    const v = Math.floor(m.y / C), h = Math.max(v, Math.floor((m.y + 6 * U) / C) - 1), w = Math.floor(m.x / T), q = Math.floor((m.x + m.w) / T);
    for (let F = v; F <= h; F++) for (let P = w; P <= q; P++) {
      const d = (P - w) / Math.max(1, q - w);
      V(P, F, m.c, m.a * (d < 0.25 ? d / 0.25 : d > 0.75 ? (1 - d) / 0.25 : 1), 0);
    }
  });
  const Me = Math.max(2, Math.round(9 / C));
  u.drops.forEach((m) => {
    const v = m.x / T, h = Math.floor(m.y / C);
    for (let w = 0; w < Me; w++) V(Math.floor(v - 0.208 * w * C / T), h + w, B.rain, m.o, Ro);
  });
  const He = Math.max(0, Math.round(4.4 / T / 2.6));
  return u.flakes.forEach((m) => {
    const v = Math.floor(m.x / T), h = Math.floor(m.y / C);
    V(v, h, B.snow, m.o, lt);
    for (let w = 1; w <= He; w++)
      V(v - w, h, B.snow, m.o, lt), V(v + w, h, B.snow, m.o, lt), V(v, h - w, B.snow, m.o, lt), V(v, h + w, B.snow, m.o, lt);
  }), u.bolts.forEach((m) => {
    if (T <= 3.5)
      for (let v = Math.floor(m.y / C); v <= (m.y + 24) / C; v++) for (let h = Math.floor(m.x / T); h <= (m.x + 11) / T; h++)
        Ss(hd, (h + 0.5) * T - m.x, (v + 0.5) * C - m.y) && V(h, v, B.sun, 1, On);
    else {
      const v = Math.round(m.x / T), h = Math.round(m.y / C);
      vd.forEach((w, q) => w.split("").forEach((F, P) => {
        F === "#" && V(v + P, h + q, B.sun, 1, On);
      }));
    }
  }), { col: pe, ids: J };
}
function xd(r, u) {
  const a = u.px, M = Math.max(6, Math.round(u.width / a)), T = Math.max(6, Math.round(u.height / a)), C = u.width / M, j = u.height / T, z = u.ambient ? Math.floor((u.clock || 0) / 100) * 100 : 0, I = (L) => {
    const O = Ms(L, u);
    return fd(O, Ls(O, { clock: z, ambient: u.ambient, seed: u.seed }), M, T, C, j, z, u.ambient);
  }, B = I(r), re = u.reveal == null ? 1 : ct(u.reveal);
  let K = B.col, S = B.ids;
  if (re < 1) {
    const L = u.prev ? I(u.prev) : null, O = re * (M + 12);
    K = new Array(M * T), S = new Uint8Array(M * T);
    for (let U = 0; U < M * T; U++) {
      const pe = U % M, J = U / M | 0;
      (u.reduce ? re : ct((O - pe) / 12)) > dt(pe, J) ? (K[U] = B.col[U], S[U] = B.ids[U]) : L ? (K[U] = L.col[U], S[U] = L.ids[U]) : (K[U] = null, S[U] = 255);
    }
  }
  return Cs(K, S, M, T, { oneBit: u.oneBit, ink: u.ink, paper: u.paper, snowInk: !1 });
}
function bd(r, u, a) {
  const M = a.width, T = a.height, C = a.reveal == null ? 1 : ct(a.reveal), j = (S, L) => {
    const O = Ms(L, a);
    wd(S, O, Ls(O, a));
  };
  if (r.clearRect(0, 0, M, T), C >= 1) {
    j(r, u);
    return;
  }
  if (a.prev && j(r, a.prev), a.reduce) {
    r.save(), r.globalAlpha = C, j(r, u), r.restore();
    return;
  }
  const z = r.canvas, I = z.__wxOff || (z.__wxOff = document.createElement("canvas"));
  (I.width !== z.width || I.height !== z.height) && (I.width = z.width, I.height = z.height);
  const B = I.getContext("2d");
  B.setTransform(r.getTransform()), B.clearRect(0, 0, M, T), j(B, u);
  const re = C * (M + 64) - 64, K = B.createLinearGradient(re, 0, re + 64, 0);
  K.addColorStop(0, "rgba(0,0,0,1)"), K.addColorStop(1, "rgba(0,0,0,0)"), B.globalCompositeOperation = "destination-in", B.fillStyle = K, B.fillRect(0, 0, M, T), B.globalCompositeOperation = "source-over", r.save(), r.setTransform(1, 0, 0, 1, 0, 0), r.drawImage(I, 0, 0), r.restore();
}
function wd(r, u, a) {
  const { W: M, H: T, S: C, C: j, cw: z, yb: I, glowAt: B, soft: re, tw: K, sy: S } = u, L = (k, ge) => {
    const Me = ma(k);
    return "rgba(" + Me[0] + "," + Me[1] + "," + Me[2] + "," + Math.max(0, Math.min(1, ge)).toFixed(3) + ")";
  }, O = (k, ge) => {
    const Me = r.createLinearGradient(0, 0, M, 0);
    Me.addColorStop(0, k[0]);
    for (let He = 0; He < k.length - 1; He++) {
      const m = (He + ge) * z, v = (m - K / 2) / M, h = (m + K / 2) / M;
      v > 0 && v < 1 && Me.addColorStop(v, k[He]), h > 0 && h < 1 && Me.addColorStop(h, k[He + 1]);
    }
    return Me.addColorStop(1, k[k.length - 1]), Me;
  }, U = Math.max(24, Math.ceil(M / 4)), pe = (k, ge) => {
    r.beginPath();
    for (let Me = 0; Me <= U; Me++) {
      const He = M * Me / U, m = k == null ? 0 : I(He) + k;
      Me ? r.lineTo(He, m) : r.moveTo(He, m);
    }
    for (let Me = U; Me >= 0; Me--) {
      const He = M * Me / U;
      r.lineTo(He, I(He) + ge);
    }
    r.closePath(), r.fill();
  };
  r.save(), r.fillStyle = O(C.filter((k) => !k.night).map((k) => k.sky), 0.75), r.fillRect(0, 0, M, T);
  const J = r.createLinearGradient(0, 0, M, 0);
  for (let k = 0; k <= 64; k++) {
    const ge = B(M * k / 64);
    J.addColorStop(k / 64, L(ge.c, Math.min(1, ge.a)));
  }
  r.fillStyle = J;
  for (let k = 0; k < 8; k++)
    r.globalAlpha = 1 - k / 8, pe(k * 2 * S, (k + 1) * 2 * S);
  r.fillStyle = O(C.filter((k) => k.night).map((k) => k.sky), 1.25);
  const ie = Math.max(0.5, re), V = 6;
  r.globalAlpha = 1, pe(null, -ie);
  for (let k = 0; k < V; k++)
    r.globalAlpha = 1 - (k + 0.5) / V, pe(-ie + 2 * ie * k / V, -ie + 2 * ie * (k + 1) / V);
  r.globalAlpha = 1;
  const W = new Path2D(md), le = new Path2D(ud), xe = new Path2D(pd), $ = new Path2D(gd);
  r.fillStyle = j.star, a.stars.forEach((k) => {
    r.globalAlpha = k.o, k.big ? (r.save(), r.translate(k.x, k.y), r.scale(k.size, k.size), r.fill(W), r.restore()) : (r.beginPath(), r.arc(k.x, k.y, 0.8, 0, Math.PI * 2), r.fill());
  }), r.globalAlpha = 1;
  const we = Be(j.sun, "#ffffff", 0.55);
  a.suns.forEach((k) => {
    const ge = r.createRadialGradient(k.x, k.y, 0, k.x, k.y, k.halo);
    ge.addColorStop(0, L(we, 0.42)), ge.addColorStop(0.7, L(we, 0)), r.fillStyle = ge, r.beginPath(), r.arc(k.x, k.y, k.halo, 0, Math.PI * 2), r.fill();
    const Me = r.createLinearGradient(0, k.y - k.rad, 0, k.y + k.rad);
    Me.addColorStop(0.6, j.sun), Me.addColorStop(1, j.sunEdge), r.fillStyle = Me, r.beginPath(), r.arc(k.x, k.y, k.rad, 0, Math.PI * 2), r.fill();
  });
  const Ye = Be(j.moon, "#ffffff", 0.6);
  a.moons.forEach((k) => {
    r.save(), r.translate(k.x - k.d / 2, k.y - k.d / 2), r.scale(k.d / 46, k.d / 46);
    const ge = r.createLinearGradient(0, 6, 0, 40);
    ge.addColorStop(0, Ye), ge.addColorStop(1, j.moon), r.fillStyle = ge, r.fill(le), r.restore();
  }), a.clouds.forEach((k) => {
    r.save(), r.globalAlpha = k.o, r.translate(k.x, k.y), r.scale(k.w / 46, k.h / 30.66), r.translate(-4, -9.67), r.fillStyle = k.fill, r.fill(xe), r.restore();
  }), a.fogs.forEach((k) => {
    const ge = r.createLinearGradient(k.x, 0, k.x + k.w, 0);
    ge.addColorStop(0, L(k.c, 0)), ge.addColorStop(0.25, L(k.c, k.a)), ge.addColorStop(0.75, L(k.c, k.a)), ge.addColorStop(1, L(k.c, 0)), r.fillStyle = ge, r.fillRect(k.x, k.y, k.w, 6 * S);
  }), r.fillStyle = j.rain, a.drops.forEach((k) => {
    r.save(), r.globalAlpha = k.o, r.translate(k.x, k.y), r.rotate(12 * Math.PI / 180), r.fillRect(-1.5, 0, 3, 9), r.restore();
  }), r.fillStyle = j.snow, a.flakes.forEach((k) => {
    r.globalAlpha = k.o, r.beginPath(), r.arc(k.x, k.y, 2.2, 0, Math.PI * 2), r.fill();
  }), r.fillStyle = j.sun, a.bolts.forEach((k) => {
    r.save(), r.globalAlpha = k.o, r.translate(k.x, k.y), r.fill($), r.restore();
  }), r.restore();
}
function yd(r, u) {
  var os, rs, ss, ls, ds, cs, ps;
  const a = (e) => r.getElementById(e), M = a("workoutView"), T = a("workoutNameInput");
  let C = !0;
  const j = a("homeClock");
  function z() {
    j && (j.textContent = new Intl.DateTimeFormat(void 0, { hour: "2-digit", minute: "2-digit" }).format(/* @__PURE__ */ new Date()));
  }
  z(), setInterval(z, 15e3);
  const I = a("createFlow"), B = a("createMovementsSlot"), re = a("createTimingSlot"), K = a("createFinishSlot"), S = a("movementStepSummary"), L = a("timingStepSummary"), O = a("finishStepSummary"), U = a("continueToTiming"), pe = a("continueToFinish"), J = a("finishMoveButton");
  let ie = !1, V = [];
  function W(e) {
    !e || V.some((t) => t.node === e) || V.push({ node: e, parent: e.parentNode, next: e.nextSibling });
  }
  function le(e, t) {
    e && (W(e), t.appendChild(e));
  }
  function xe() {
    [...V].reverse().forEach(({ node: e, parent: t, next: n }) => {
      t && (n && n.parentNode === t ? t.insertBefore(e, n) : t.appendChild(e));
    }), V = [];
  }
  function $(e) {
    r.querySelectorAll(".createStep").forEach((t) => {
      t.classList.toggle("active", t.dataset.createStep === e);
    }), e === "timing" && (ie = !0), we();
  }
  function we() {
    var x, b;
    if (!Se) return;
    de[ve];
    const e = _e.filter((f) => !f.hidden), t = e.filter((f) => f.kind !== "rest").length, n = e.filter((f) => f.kind === "rest").length;
    S.textContent = t ? t + " movement" + (t === 1 ? "" : "s") + (n ? " · " + n + " rest" + (n === 1 ? "" : "s") : "") : "No movements yet";
    const i = t > 0, o = r.querySelector('[data-open-step="timing"]'), s = r.querySelector('[data-open-step="finish"]');
    o.disabled = !i, U.disabled = !i, L.textContent = i ? Xt(v.value) + " · " + et(h.value) + " movement · " + et(w.value) + " rest" : "Add a movement first", s.disabled = !(i && ie);
    const l = ((T == null ? void 0 : T.value) || "").trim(), p = [];
    (x = a("includeWarmupPreset")) != null && x.checked && p.push("warm-up"), (b = a("includeCooldownPreset")) != null && b.checked && p.push("cooldown"), O.textContent = l ? l + (p.length ? " · " + p.join(" + ") : "") : p.length ? p.join(" + ") : "Name and optional extras";
  }
  function Ye() {
    var D, Y, H;
    I.hidden = !1, ie = !1;
    const e = r.querySelector(".editNameRow"), t = a("createMoveOptions"), n = r.querySelector(".timeTiles"), i = a("routineSummaryModal"), o = r.querySelector(".tempoRevealRow"), s = a("tempoExperiment"), l = (D = a("warmupList")) == null ? void 0 : D.closest("section"), p = a("movementCreatorLaunch"), x = a("movementCreator"), b = (Y = a("strengthList")) == null ? void 0 : Y.closest("section"), f = (H = a("cooldownList")) == null ? void 0 : H.closest("section");
    [t == null ? void 0 : t.querySelector(".createExtras"), l, p, x, b, f].forEach((N) => N && le(N, B)), [t, n, i, o, s].forEach((N) => le(N, re)), le(e, K), $("movements"), we();
  }
  function k() {
    xe(), I.hidden = !0, r.querySelectorAll(".createStep").forEach((e) => e.classList.remove("active"));
  }
  r.querySelectorAll("[data-open-step]").forEach((e) => e.addEventListener("click", () => {
    e.disabled || $(e.dataset.openStep);
  })), U.addEventListener("click", () => {
    U.disabled || $("timing");
  }), pe.addEventListener("click", () => $("finish")), J.addEventListener("click", () => a("saveWorkoutEdit").click());
  const ge = { home: a("homeView"), workout: a("workoutView"), settings: a("settingsView") }, Me = a("homeNav"), He = a("settingsNav");
  function m(e) {
    Object.entries(ge).forEach(([t, n]) => n.classList.toggle("active", t === e)), Me.classList.toggle("active", e === "home"), He.classList.toggle("active", e === "settings"), e === "home" && setTimeout(Da, 400), e === "settings" && (requestAnimationFrame(() => mi(r.querySelector(".tab.active"), !1)), $i());
  }
  const v = a("totalTime"), h = a("workTime"), w = a("restTime"), q = a("totalOut"), F = a("workOut"), P = a("restOut"), d = a("totalFill"), c = a("workFill"), y = a("restFill"), E = a("roundsInput"), Q = a("roundsFill"), X = a("roundsOut"), ke = a("totalLabel"), Xe = a("routineSummaryModal"), Ke = [
    { id: "standing-reach", name: "Standing reach", group: "Warm-up", kind: "warmup", hidden: !1 },
    { id: "arm-circles", name: "Arm circles", group: "Warm-up", kind: "warmup", hidden: !1 },
    { id: "hip-hinge", name: "Hip hinge drill", group: "Warm-up", kind: "warmup", hidden: !1 }
  ];
  let Le = Ke.map((e) => ({ ...e })), _e = [
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
  const dn = [
    { id: "hip-flexor", name: "Hip flexor stretch", group: "Cooldown", kind: "cooldown", hidden: !1 },
    { id: "chest-opener", name: "Chest opener", group: "Cooldown", kind: "cooldown", hidden: !1 },
    { id: "hamstring", name: "Hamstring stretch", group: "Cooldown", kind: "cooldown", hidden: !1 },
    { id: "slow-breathing", name: "Slow breathing", group: "Cooldown", kind: "cooldown", hidden: !1 }
  ];
  let $e = dn.map((e) => ({ ...e }));
  const cn = {
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
  }, he = Si(u.data), de = he.profiles;
  let ve = de[he.selected] ? he.selected : he.order.find((e) => de[e]) || "kettlebell";
  function Si(e) {
    const t = e && typeof e == "object" ? JSON.parse(JSON.stringify(e)) : {}, n = t.profiles && Object.keys(t.profiles).length ? t.profiles : JSON.parse(JSON.stringify(cn)), i = (Array.isArray(t.order) ? t.order : Object.keys(n)).filter((o) => n[o]);
    return Object.keys(n).forEach((o) => {
      i.includes(o) || i.push(o);
    }), {
      v: 1,
      profiles: n,
      order: i,
      selected: t.selected || i[0],
      history: Array.isArray(t.history) ? t.history : [],
      checkins: (Array.isArray(t.checkins) ? t.checkins : Vn(t.energy)).map(Gn),
      settings: { ...t.settings || {} }
    };
  }
  function Vn(e) {
    if (!Array.isArray(e)) return [];
    const t = ["Drained", "Low", "Okay", "Good", "Energised", "Great"], n = [];
    return e.forEach((i) => {
      const o = new Date(i.at);
      if (isNaN(o)) return;
      const s = o.getFullYear() + "-" + String(o.getMonth() + 1).padStart(2, "0") + "-" + String(o.getDate()).padStart(2, "0"), l = o.getHours() < 14 ? "morning" : "evening";
      if (n.some((x) => x.date === s && x.slot === l)) return;
      const p = t.indexOf(i.value) + 1;
      p > 0 && n.push({ date: s, slot: l, mood: null, energy: p, at: i.at });
    }), n;
  }
  function Gn(e) {
    if (e.scale === 100) return e;
    const t = (n) => n == null ? null : Math.round((Number(n) - 1) / 5 * 100);
    return { ...e, mood: t(e.mood), energy: t(e.energy), scale: 100 };
  }
  function pt() {
    Se || (he.selected = ve, he.order = he.order.filter((e) => de[e] && e !== Rt), u.save(he));
  }
  function be() {
    return he.settings;
  }
  function ht(e) {
    const t = de[e];
    if (!t) return;
    ve = e;
    const n = a("workoutNameInput");
    if (n && (n.value = t.name), v.value = t.total, h.value = t.work, w.value = t.rest, E.value = t.rounds || 1, t.customSequence) {
      const i = (t.sequence || []).map((s) => ({ ...s })), o = (s) => i.filter((l) => l.presetRole === s).map(({ presetRole: l, ...p }) => p);
      Le = (t.warmup || o("warmup")).map((s) => ({ ...s })), $e = (t.cooldown || o("cooldown")).map((s) => ({ ...s })), _e = i.filter((s) => !s.presetRole), fa(t.preset || "movement", !1);
    } else
      v.min = 3, v.max = 40, v.step = 1, h.min = 20, h.max = 60, h.step = 5, w.min = 5, w.max = 30, w.step = 5, Le = (t.warmup || Ke).map((i) => ({ ...i })), $e = (t.cooldown || dn).map((i) => ({ ...i })), _e = t.strength.map((i) => Array.isArray(i) ? (([o, s, l, p = !1]) => ({ id: o, name: s, group: l, kind: "work", hidden: !!p }))(i) : { ...i });
    r.querySelectorAll(".workoutPanel[data-workout]").forEach((i) => i.classList.toggle("active", i.dataset.workout === e)), Te();
  }
  function Ze(e, t, n) {
    const i = e.getBoundingClientRect(), o = i.width / 2, s = i.height / 2, l = t - o, p = n - s;
    let x = 1 / 0, b = 1 / 0;
    l !== 0 && (x = o / Math.abs(l)), p !== 0 && (b = s / Math.abs(p));
    const f = Math.min(Math.max(1 / Math.min(x, b), 0), 1);
    let g = Math.atan2(p, l) * (180 / Math.PI) + 90;
    return g < 0 && (g += 360), { edge: f, angle: g };
  }
  function $t(e, t, n = !1) {
    const i = e.getBoundingClientRect(), o = t.clientX - i.left, s = t.clientY - i.top, { edge: l, angle: p } = Ze(e, o, s), x = n ? 100 : l * 100;
    e.style.setProperty("--edge-proximity", x.toFixed(3)), e.style.setProperty("--cursor-angle", p.toFixed(3) + "deg"), e.classList.toggle("borderGlowActive", n || x >= 30);
  }
  function Ci(e) {
    e.addEventListener("pointermove", (n) => $t(e, n, !1)), e.addEventListener("pointerenter", (n) => $t(e, n, !1)), e.addEventListener("pointerdown", (n) => $t(e, n, !0));
    const t = () => {
      e.classList.remove("borderGlowActive"), e.style.setProperty("--edge-proximity", "0");
    };
    e.addEventListener("pointerleave", t), e.addEventListener("pointerup", t), e.addEventListener("pointercancel", t);
  }
  Ci(a("addWorkoutPanel"));
  let Se = !1, Rt = null;
  function ee(e) {
    return String(e ?? "").replace(/[&<>"']/g, (t) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[t]);
  }
  function Ts(e) {
    return e.summary ? e.summary : e.customSequence ? Xt(e.total) + " · custom move" : Xt(e.total) + " · " + et(e.work) + " / " + et(e.rest) + " · warm-up + cooldown";
  }
  function ha(e, t) {
    var s;
    const n = document.createElement("article");
    n.className = "workoutPanel", n.dataset.workout = e, n.tabIndex = 0;
    const i = t.activityCount ?? (((s = t.sequence) == null ? void 0 : s.length) || 0);
    n.innerHTML = '<span class="edgeLight" aria-hidden="true"></span><div class="panelExpanded"><div><div class="workoutPanelTop"><div><div class="workoutName">' + ee(t.name) + '</div><div class="sub">' + ee(Ts(t)) + '</div><span class="sourceTag">' + ee(t.source || "Custom move") + '</span></div><button class="pill seeWorkoutBtn" type="button">Edit</button></div></div><div class="workoutFooter"><div><strong class="activityCount">' + (i ? i + " activities" + ((t.rounds || 1) > 1 ? " × " + t.rounds : "") : "—") + '</strong></div><div class="workoutPanelActions"><button class="primary startWorkoutBtn" type="button">Start move</button></div></div></div><div class="panelCollapsed"><div class="panelCollapsedText">' + ee(t.name) + "</div></div>";
    const o = a("addWorkoutPanel");
    return a("workoutGallery").insertBefore(n, o), Ci(n), n.addEventListener("click", (l) => {
      l.target.closest("button") || ht(e);
    }), n.addEventListener("keydown", (l) => {
      (l.key === "Enter" || l.key === " ") && !l.target.closest("button") && (l.preventDefault(), ht(e));
    }), n.querySelector(".seeWorkoutBtn").addEventListener("click", (l) => {
      l.stopPropagation(), ht(e), or(!1);
    }), n.querySelector(".startWorkoutBtn").addEventListener("click", (l) => {
      l.stopPropagation(), ht(e), ml();
    }), n;
  }
  function No() {
    r.querySelectorAll(".workoutPanel[data-workout]").forEach((e) => e.remove()), he.order.forEach((e) => {
      de[e] && ha(e, de[e]);
    }), r.querySelectorAll(".workoutPanel[data-workout]").forEach((e) => e.classList.toggle("active", e.dataset.workout === ve));
  }
  No(), a("addWorkoutPanel").addEventListener("keydown", (e) => {
    (e.key === "Enter" || e.key === " ") && (e.preventDefault(), a("addWorkoutPanel").click());
  }), a("addWorkoutPanel").addEventListener("click", () => {
    Se = !0, Rt = "custom-" + Date.now(), de[Rt] = {
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
    }, ht(Rt), or(!0);
  });
  let G = [], se = 0, it = 0, Wn = 1, St = !1, Ve = null, Mi = null, Qe = !1, pn = he.settings.upcomingCount ?? "all", Do = "movement";
  function Li(e, t, n) {
    return (Number(e) - t) / (n - t) * 100;
  }
  function et(e) {
    const t = Math.max(0, Number(e) || 0);
    return t >= 3600 && t % 3600 === 0 ? t / 3600 + " hr" : t >= 60 && t % 60 === 0 ? t / 60 + " min" : t >= 60 ? Math.round(t / 60) + " min" : Math.round(t) + " sec";
  }
  function Xt(e) {
    const t = Math.max(0, Number(e) || 0);
    return t >= 60 && t % 60 === 0 ? t / 60 + " hr" : t >= 60 ? Math.floor(t / 60) + " hr " + t % 60 + " min" : t + " min";
  }
  function Ti() {
    d.style.width = Li(v.value, Number(v.min), Number(v.max)) + "%", c.style.width = Li(h.value, Number(h.min), Number(h.max)) + "%", y.style.width = Li(w.value, Number(w.min), Number(w.max)) + "%", F.textContent = et(h.value), P.textContent = et(w.value);
    const e = Number(E.value) || 1;
    Q.style.width = Li(e, 1, 10) + "%", ke.textContent = e > 1 ? "Time per round" : "Total time";
  }
  function va(e) {
    return e.filter((t) => !t.hidden);
  }
  function jn(e) {
    const t = Math.max(0, Math.round(Number(e) || 0)), n = Math.floor(t / 3600), i = Math.floor(t % 3600 / 60), o = t % 60;
    return (n ? n + ":" + String(i).padStart(2, "0") : i) + ":" + String(o).padStart(2, "0");
  }
  function Es(e) {
    let t;
    try {
      t = new URL(String(e || "").trim());
    } catch {
      return null;
    }
    const n = t.hostname.replace(/^(www|m|music)\./, "");
    let i = null;
    if (n === "youtu.be") i = t.pathname.slice(1).split("/")[0];
    else if (/^youtube(-nocookie)?\.com$/.test(n))
      if (t.pathname === "/watch") i = t.searchParams.get("v");
      else {
        const p = t.pathname.match(/^\/(embed|shorts|live|v)\/([^/?#]+)/);
        p && (i = p[2]);
      }
    if (!i || !/^[\w-]{11}$/.test(i)) return null;
    const o = (p) => {
      if (!p) return 0;
      if (/^\d+$/.test(p)) return Number(p);
      const x = p.match(/^(?:(\d+)h)?(?:(\d+)m)?(?:(\d+)s)?$/);
      return x ? (Number(x[1]) || 0) * 3600 + (Number(x[2]) || 0) * 60 + (Number(x[3]) || 0) : 0;
    }, s = o(t.searchParams.get("t") || t.searchParams.get("start")), l = o(t.searchParams.get("end"));
    return { id: i, start: s, end: l > s ? l : null };
  }
  function Un(e, t) {
    if (e.useVideoLength === !1) return Math.max(5, Number(e.duration) || t || 300);
    const n = Number(e.start) || 0, i = Number(e.end) || Number(e.videoDuration) || 0;
    return i > n ? Math.round(i - n) : Number(e.duration) || 300;
  }
  function Ei(e, t) {
    const n = Math.max(0, Number(e) || 0);
    return Math.round(t === "hour" ? n * 3600 : t === "min" ? n * 60 : n);
  }
  function fa(e, t = !0) {
    Do = e, r.querySelectorAll(".createPresetBtn").forEach((i) => i.classList.toggle("active", i.dataset.movePreset === e));
    const n = de[ve];
    n && (n.preset = e), e === "work" ? (v.min = 30, v.max = 480, v.step = 30, h.min = 300, h.max = 7200, h.step = 300, w.min = 60, w.max = 1800, w.step = 60, t && (v.value = 60, h.value = 1500, w.value = 300), a("addMovementUnit").value = "min", a("addMovementDuration").value = 25, a("addRestUnit").value = "min", a("addRestDuration").value = 5) : (v.min = 3, v.max = 40, v.step = 1, h.min = 20, h.max = 60, h.step = 5, w.min = 5, w.max = 30, w.step = 5, t && (v.value = 20, h.value = 45, w.value = 15), a("addMovementUnit").value = "sec", a("addMovementDuration").value = 45, a("addRestUnit").value = "sec", a("addRestDuration").value = 30), Ti();
  }
  function Io(e, t) {
    const n = Do === "work";
    return e.map((i, o) => ({ ...i, id: t + "-" + o + "-" + Date.now().toString(36), useGlobalTiming: !n, duration: n ? 60 : Number(h.value) }));
  }
  function xa() {
    const e = de[ve];
    e != null && e.customSequence && (e.includeWarmup = a("includeWarmupPreset").checked, e.includeCooldown = a("includeCooldownPreset").checked, e.includeWarmup && !Le.length && (Le = Io(Ke, "warm")), e.includeCooldown && !$e.length && ($e = Io(dn, "cool")), Te());
  }
  function Rs() {
    const e = a("upcomingCountSetting");
    if (!e) return;
    const t = Math.max(1, G.length - 1), n = pn;
    e.innerHTML = "";
    for (let s = 1; s <= t; s++) {
      const l = document.createElement("option");
      l.value = String(s), l.textContent = String(s), e.appendChild(l);
    }
    const i = document.createElement("option");
    i.value = "all", i.textContent = "All", e.appendChild(i);
    const o = n === "all" ? "all" : String(Math.min(Number(n) || 1, t));
    e.value = o, pn = o === "all" ? "all" : Number(o);
  }
  function Te() {
    Number(v.value) * 60;
    const e = Number(h.value), t = Number(w.value), n = de[ve], i = !!(n != null && n.customSequence), o = (i ? !n.includeWarmup : n != null && n.warmupOff) ? [] : va(Le), s = va(_e), l = i && !n.includeCooldown ? [] : va($e);
    if (n && (n.total = Number(v.value), n.work = e, n.rest = t, n.rounds = Number(E.value) || 1, n.customSequence ? (n.sequence = _e.map((A) => ({ ...A })), n.warmup = Le.map((A) => ({ ...A })), n.cooldown = $e.map((A) => ({ ...A }))) : (n.strength = _e.map((A) => ({ ...A })), n.warmup = Le.map((A) => ({ ...A })), n.cooldown = $e.map((A) => ({ ...A })))), n != null && n.customSequence) {
      const A = [...o.map((ae) => ({ ...ae, section: "warmup" })), ...s, ...l.map((ae) => ({ ...ae, section: "cooldown" }))].map((ae) => {
        if (ae.kind === "video") return { ...ae, duration: Un(ae, e), rest: 0 };
        if (ae.kind === "rest") {
          const We = ae.useGlobalTiming === !0 ? t : Number(ae.duration) || t;
          return { ...ae, duration: We, rest: 0 };
        }
        const Ge = ae.useGlobalTiming === !1 && Number(ae.duration) || e;
        return { ...ae, duration: Ge, rest: 0 };
      });
      n.autoRest && Number(n.autoRestDuration) > 0 ? (G = [], A.forEach((ae, Ge) => {
        G.push(ae);
        const We = A[Ge + 1];
        ae.kind !== "rest" && We && We.kind !== "rest" && G.push({
          id: "auto-rest-" + Ge,
          name: "Rest",
          group: "Rest",
          kind: "rest",
          hidden: !1,
          duration: Number(n.autoRestDuration),
          rest: 0,
          autoGenerated: !0
        });
      })) : G = A;
    } else
      G = [...o.map((A) => ({ ...A, section: "warmup" })), ...s, ...l.map((A) => ({ ...A, section: "cooldown" }))].map((A) => A.kind === "video" ? { ...A, duration: Un(A, e), rest: 0 } : A.kind === "rest" ? { ...A, duration: A.useGlobalTiming === !0 ? t : Number(A.duration) || t, rest: 0 } : { ...A, duration: A.useGlobalTiming === !1 && Number(A.duration) || e, rest: t }), G.forEach((A, ae) => {
        var Ge;
        ((Ge = G[ae + 1]) == null ? void 0 : Ge.kind) === "rest" && (A.rest = 0);
      }), G.length && (G[G.length - 1].rest = 0);
    const p = Math.max(1, Math.min(10, Number(E.value) || 1)), x = G, b = (A) => p <= 1 ? null : A.section === "warmup" || A.presetRole === "warmup" ? "first" : A.section === "cooldown" || A.presetRole === "cooldown" ? "last" : A.kind === "video" && (A.videoRounds === "first" || A.videoRounds === "last") ? A.videoRounds : null, f = (A) => !!b(A), g = x.filter((A) => !f(A)), D = x.filter(f), Y = g.length, H = g.reduce((A, ae) => A + ae.duration + ae.rest, 0), N = D.reduce((A, ae) => A + ae.duration + ae.rest, 0), R = [
      D.some((A) => A.section === "warmup" || A.presetRole === "warmup") && "warm-up",
      D.some((A) => A.section === "cooldown" || A.presetRole === "cooldown") && "cooldown",
      D.some((A) => A.kind === "video" && !A.section && !A.presetRole) && "video"
    ].filter(Boolean), ce = R.length > 1 ? R.slice(0, -1).join(", ") + " & " + R[R.length - 1] : R[0] || "";
    G = [];
    const ue = (A, ae) => {
      const Ge = b(A);
      return !Ge || (Ge === "first" ? ae === 1 : ae === p);
    };
    for (let A = 1; A <= p; A++)
      if (x.filter((ae) => ue(ae, A)).forEach((ae, Ge) => G.push({ ...ae, id: ae.id + (p > 1 ? "-r" + A : ""), round: A, roundIndex: Ge })), A < p && Y)
        if (n != null && n.customSequence)
          G.push({ id: "round-break-" + A, name: "Rest", group: "Round " + (A + 1) + " next", kind: "rest", hidden: !1, duration: t, rest: 0, round: A, roundIndex: Y, roundBreak: !0 });
        else {
          const ae = G[G.length - 1];
          ae.rest = t, ae.roundBreakAfter = !0;
        }
    Ti();
    const _ = G.reduce((A, ae) => A + ae.duration + ae.rest, 0), me = Math.round(H / 60), ye = Math.round(_ / 60), ne = p > 1 ? Xt(me) + " × " + p + " rounds" + (N ? " + " + et(N) + " " + ce : "") + " (" + Xt(ye) + ")" : Xt(ye), Z = [o.length ? "warm-up" : "", l.length ? "cooldown" : ""].filter(Boolean), Oe = n != null && n.customSequence ? ne + " · " + Y + " items" + (Z.length && !(p > 1 && N) ? " · " + Z.join(" + ") : "") : ne + " · " + et(e) + " / " + et(t) + (Z.length && !(p > 1 && N) ? " · " + Z.join(" + ") : "");
    q.textContent = et(H);
    const Je = G.filter((A) => !A.roundBreak).length, Ne = p > 1 ? Je + " activities · " + p + " rounds" : Y + " activities";
    X.textContent = p > 1 ? p + " rounds · " + Xt(ye) + " total" : "1 round", a("roundsCount").textContent = p, r.querySelectorAll("[data-rounds-step]").forEach((A) => {
      A.disabled = Number(A.dataset.roundsStep) < 0 ? p <= 1 : p >= 10;
    }), n && (n.summary = Oe, n.activityCount = Y);
    const Kt = r.querySelector(".workoutPanel.active .sub");
    Kt && (Kt.textContent = Oe), Xe.textContent = Oe, Ma(), r.querySelectorAll(".workoutPanel.active .activityCount").forEach((A) => A.textContent = Ne), Ti(), ya(), Ta(), Xn(), Rs(), Se && we(), ge.workout.classList.contains("active") && !Ve && Ya();
  }
  const Yn = '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><g fill="currentColor"><circle cx="9" cy="6" r="1.6"/><circle cx="15" cy="6" r="1.6"/><circle cx="9" cy="12" r="1.6"/><circle cx="15" cy="12" r="1.6"/><circle cx="9" cy="18" r="1.6"/><circle cx="15" cy="18" r="1.6"/></g></svg>', As = '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6z"/></svg>', Ns = {
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
  }, At = (e) => '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">' + (Ns[e] || "") + "</svg>";
  r.querySelectorAll("[data-icon]").forEach((e) => {
    e.innerHTML = At(e.dataset.icon);
  });
  let ut = null, bt = null;
  function Ds(e) {
    return e = Math.max(1, Number(e) || 0), e >= 3600 && e % 3600 === 0 ? { value: e / 3600, unit: "hour" } : e >= 60 && e % 60 === 0 ? { value: e / 60, unit: "min" } : { value: e, unit: "sec" };
  }
  function Bo(e = !1) {
    const t = r.querySelector(".moveEditForm input[data-f=url],.moveEditForm input[data-f=name]");
    t && (t.focus({ preventScroll: !0 }), e && t.select());
  }
  function ba(e, t, n = {}) {
    const i = e.kind === "rest", o = e.kind === "video", s = o ? e.useVideoLength !== !1 : i ? e.useGlobalTiming === !0 : e.useGlobalTiming !== !1, l = Number(i ? w.value : h.value), p = Ds(o ? e.useVideoLength === !1 ? e.duration : Un({ ...e, useVideoLength: !0 }) : s ? l : e.duration || l), x = o && (Number(e.videoDuration) > 0 || Number(e.end) > 0), b = o ? '<label class="moveEditWide"><span>YouTube link</span><input class="addInput" data-f="url" type="url" inputmode="url" autocomplete="off" value="' + ee(e.url || "") + '" placeholder="Paste a YouTube link"></label><label><span>Name</span><input class="addInput" data-f="name" type="text" value="' + ee(e.autoName ? "" : e.name) + '" placeholder="Uses the video’s title"></label><label><span>Plays in</span><select class="creatorUnitSelect" data-f="rounds">' + [["every", "Every round"], ["first", "The first round only"], ["last", "The last round only"]].map(([_, me]) => '<option value="' + _ + '"' + ((e.videoRounds || "every") === _ ? " selected" : "") + ">" + me + "</option>").join("") + '</select></label><p class="fieldError" data-f="urlError" hidden>That isn’t a YouTube link. Copy it from the Share button on YouTube.</p>' : '<label><span>Name</span><input class="addInput" data-f="name" type="text" value="' + ee(e.name) + '" placeholder="' + (i ? "Rest" : "Name this movement") + '"></label><label><span>Type / group</span><input class="addInput" data-f="group" type="text" value="' + ee(e.group) + '" placeholder="' + (i ? "Rest" : "e.g. Glutes + legs") + '"></label>', f = o ? "Play the whole " + (Number(e.start) > 0 || Number(e.end) > 0 ? "clip" : "video") + (x ? " · " + jn(Un({ ...e, useVideoLength: !0 })) : "") : "Use global timing · " + et(l), g = document.createElement("div");
    g.className = "moveRow editing" + (n.sheet ? " inSheet" : ""), g.dataset.index = t, g.dataset.id = e.id;
    const D = n.isNew ?? (bt == null ? void 0 : bt.item) === e, Y = n.sheet ? '<div class="moveEditActions sheetActions">' + (D ? "" : '<div class="sheetSecondary"><button class="hideBtn" type="button" data-a="hide">' + (e.hidden ? "Show" : "Hide") + '</button><button class="removeBtn" type="button" data-a="remove" aria-label="Hold to remove ' + ee(e.name) + '"><span class="removeFill"></span><span class="removeLabel">Remove</span></button></div>') + '<div class="sheetPrimary"><button class="pill" type="button" data-a="cancel">Cancel</button><button class="primary" type="button" data-a="save">' + (D ? "Add" : "Save") + "</button></div></div>" : '<div class="moveEditActions"><button class="pill" type="button" data-a="cancel">Cancel</button><button class="primary" type="button" data-a="save">Save</button></div>';
    g.innerHTML = '<div class="moveEditForm"><div class="moveEditFields' + (o ? " videoFields" : "") + '">' + b + '</div><div class="moveEditTiming"><label class="globalTimingToggle"><input type="checkbox" data-f="global"' + (s ? " checked" : "") + '><span class="toggleTrack" aria-hidden="true"><span class="toggleThumb"></span></span><span class="toggleLabel">' + ee(f) + '</span></label><div class="creatorDurationRow"><input class="addInput creatorNumber" data-f="dur" type="number" min="1" max="3600" step="1" value="' + p.value + '" aria-label="Duration"><select class="creatorUnitSelect" data-f="unit" aria-label="Duration unit">' + ["sec", "min", "hour"].map((_) => '<option value="' + _ + '"' + (_ === p.unit ? " selected" : "") + ">" + { sec: "seconds", min: "minutes", hour: "hours" }[_] + "</option>").join("") + "</select></div></div>" + Y + "</div>";
    const H = (_) => g.querySelector("[data-f=" + _ + "]"), N = () => {
      const _ = H("global").checked;
      H("dur").disabled = _, H("unit").disabled = _, g.querySelector(".creatorDurationRow").classList.toggle("isDisabled", _);
    };
    H("global").addEventListener("change", N), N();
    const R = () => {
      var _;
      if (n.sheet) {
        (_ = n.onCancel) == null || _.call(n);
        return;
      }
      D && Ai(), ut = null, Te();
    }, ce = () => {
      var ye;
      if (o) {
        ue();
        return;
      }
      const _ = H("name").value.trim();
      if (!_) {
        H("name").focus();
        return;
      }
      e.name = _, e.group = H("group").value.trim() || (i ? "Rest" : "Movement");
      const me = H("global").checked;
      if (e.useGlobalTiming = me, me || (e.duration = Math.max(i ? 5 : 1, Ei(H("dur").value, H("unit").value))), n.sheet) {
        (ye = n.onSaved) == null || ye.call(n);
        return;
      }
      D && (bt = null), ut = null, Te(), De(D ? i ? "Rest added" : "Movement added" : "Movement updated");
    }, ue = () => {
      var Z;
      const _ = H("url").value.trim(), me = Es(_);
      if (!me) {
        H("urlError").hidden = !1, H("url").classList.add("invalid"), H("url").focus();
        return;
      }
      const ye = me.id !== e.videoId;
      e.url = _, e.videoId = me.id, e.start = me.start, e.end = me.end, ye && (e.videoDuration = null, e.videoError = null);
      const ne = H("name").value.trim();
      e.autoName = !ne, e.name = ne || (ye ? "" : e.name) || e.videoTitle || "YouTube video", e.group = "Video", e.videoRounds = H("rounds").value, e.useVideoLength = H("global").checked, e.useVideoLength || (e.duration = Math.max(5, Ei(H("dur").value, H("unit").value))), n.sheet ? (Z = n.onSaved) == null || Z.call(n) : (D && (bt = null), ut = null, Te(), De(D ? "Video added" : "Video updated")), (ye || !e.videoDuration || e.autoName && !e.videoTitle) && Ml(e);
    };
    if (o && H("url").addEventListener("input", () => {
      H("urlError").hidden = !0, H("url").classList.remove("invalid");
    }), g.querySelector("[data-a=cancel]").addEventListener("click", R), g.querySelector("[data-a=save]").addEventListener("click", ce), n.sheet && !D) {
      g.querySelector("[data-a=hide]").addEventListener("click", () => {
        var me;
        return (me = n.onHide) == null ? void 0 : me.call(n);
      });
      const _ = g.querySelector("[data-a=remove]");
      ui(_, _.querySelector(".removeFill"), 1200, () => {
        var me;
        return (me = n.onRemove) == null ? void 0 : me.call(n);
      });
    }
    return g.addEventListener("keydown", (_) => {
      _.key === "Escape" && (_.preventDefault(), _.stopPropagation(), R()), _.key === "Enter" && _.target.matches("input") && (_.preventDefault(), ce());
    }), g;
  }
  function wa(e, t) {
    const n = a(t);
    n.innerHTML = "", e.forEach((i, o) => {
      if (i === ut && !$n()) {
        n.appendChild(ba(i, o));
        return;
      }
      const s = document.createElement("div");
      s.className = "moveRow" + (i.hidden ? " hidden" : "") + (i.kind === "rest" ? " restItem" : "") + (i.kind === "video" ? " videoItem" : "") + (Qa(i) ? " noMeta" : ""), s.dataset.index = o, s.dataset.id = i.id;
      const l = i.kind === "rest" ? i.useGlobalTiming === !0 ? "Global timing" : et(i.duration) : i.useGlobalTiming === !1 ? et(i.duration) : "Global timing", p = i.kind === "video" ? '<span class="moveKindBadge">Video</span>' : "", x = i.kind === "video" ? i.videoError ? "YouTube · can’t play outside YouTube" : "YouTube · " + (i.useVideoLength === !1 ? "stops after " + et(i.duration) : Number(i.videoDuration) > 0 || Number(i.end) > 0 ? jn(Un(i)) : "plays to the end") + (i.videoRounds === "first" ? " · first round only" : i.videoRounds === "last" ? " · last round only" : "") : i.group + " · " + l, b = '<button class="dragHandle" type="button" title="Drag to reorder" aria-label="Reorder ' + ee(i.name) + '. Drag, or use the up and down arrow keys">' + Yn + "</button>", f = '<div class="moveText"><div class="moveItemName">' + ee(i.name) + p + '</div><div class="moveMeta">' + ee(x) + "</div></div>", g = (H) => H.addEventListener("keydown", (N) => {
        var ue, _;
        if (N.key !== "ArrowUp" && N.key !== "ArrowDown") return;
        N.preventDefault();
        const R = e.indexOf(i), ce = R + (N.key === "ArrowUp" ? -1 : 1);
        ce < 0 || ce >= e.length || (e.splice(R, 1), e.splice(ce, 0, i), Te(), (_ = (ue = a(t).children[ce]) == null ? void 0 : ue.querySelector(".dragHandle")) == null || _.focus());
      });
      if ($n()) {
        s.classList.add("phoneRow"), s.tabIndex = 0, s.setAttribute("role", "button"), s.setAttribute("aria-label", "Edit " + (i.name || "step")), s.innerHTML = b + f + '<span class="rowChevron" aria-hidden="true">›</span>';
        const H = s.querySelector(".dragHandle");
        H.addEventListener("pointerdown", (N) => Fo(N, s, n, e)), g(H), s.addEventListener("click", (N) => {
          N.target.closest(".dragHandle") || jo(i, e);
        }), s.addEventListener("keydown", (N) => {
          N.key === "Enter" && N.target === s && (N.preventDefault(), jo(i, e));
        }), n.appendChild(s);
        return;
      }
      s.innerHTML = b + f + '<div class="moveActions seg"><button class="hideBtn editBtn segBtn" type="button" aria-label="Edit ' + ee(i.name) + '">Edit</button><button class="hideBtn segBtn" type="button">' + (i.hidden ? "Show" : "Hide") + '</button><button class="removeBtn segBtn" type="button" title="Hold to remove" aria-label="Hold to remove ' + ee(i.name) + '"><span class="removeFill"></span><span class="removeLabel">' + As + "</span></button></div>", s.querySelector(".editBtn").addEventListener("click", () => {
        Ai(), ut = i, Te(), Bo();
      }), s.querySelector(".hideBtn:not(.editBtn)").addEventListener("click", () => {
        i.hidden = !i.hidden, Te();
      });
      const D = s.querySelector(".removeBtn");
      ui(D, D.querySelector(".removeFill"), 1200, () => {
        const H = e.indexOf(i);
        H < 0 || (e.splice(H, 1), Te(), De("Removed " + i.name, { label: "Undo", run: () => {
          e.splice(Math.min(H, e.length), 0, i), Te();
        } }));
      });
      const Y = s.querySelector(".dragHandle");
      Y.addEventListener("pointerdown", (H) => Fo(H, s, n, e)), g(Y), n.appendChild(s);
    });
  }
  const wt = () => {
    var e;
    return (e = window.matchMedia) == null ? void 0 : e.call(window, "(prefers-reduced-motion: reduce)").matches;
  }, Ri = (e) => {
    var t;
    try {
      (t = navigator.vibrate) == null || t.call(navigator, e);
    } catch {
    }
  };
  function Fo(e, t, n, i) {
    if (e.button !== void 0 && e.button !== 0) return;
    e.preventDefault();
    const o = e.currentTarget, s = e.pointerId, l = !wt();
    try {
      o.setPointerCapture(s);
    } catch {
    }
    const p = t.closest(".exerciseScroller") || ka(t), x = n.style.position;
    n.style.position = "relative";
    const b = [...n.children].filter((oe) => oe.classList.contains("moveRow")), f = b.indexOf(t), g = parseFloat(getComputedStyle(n).rowGap) || 8, D = t.offsetHeight, Y = D + g, H = b.map((oe) => oe.offsetTop), N = b.map((oe) => oe.offsetHeight), R = () => n.getBoundingClientRect().top, ce = n.getBoundingClientRect().width, ue = e.clientY - (R() + H[f]), _ = e.clientX;
    let me = e.clientY, ye = e.clientX, ne = R() + H[f], Z = 0, Oe = 0, Je = 0, Ne = 1, Kt = 0, A = f, ae = !1, Ge = 0, We = !1, ca = !1, qn = H[f];
    n.classList.add("reordering"), t.classList.add("dragging"), t.style.transition = "none", Ri(8);
    const pa = () => {
      const oe = me - ue + D / 2 - R();
      let fe = 0;
      return b.forEach((Ee, st) => {
        st !== f && oe > H[st] + N[st] / 2 && fe++;
      }), fe;
    }, ua = () => {
      b.forEach((oe, fe) => {
        if (fe === f) return;
        const Ee = f < A && fe > f && fe <= A ? -Y : f > A && fe >= A && fe < f ? Y : 0;
        oe.style.transform = Ee ? "translateY(" + Ee + "px)" : "";
      });
    }, ki = () => {
      const oe = n.getBoundingClientRect(), fe = Math.abs(ye - _) > Math.max(80, ce * 0.3) || ye < oe.left - 24 || ye > oe.right + 24;
      fe !== ae && (ae = fe, t.classList.toggle("willReturn", fe), Ri(fe ? 10 : 4));
      const Ee = ae ? f : pa();
      Ee !== A && (A = Ee, ua(), ae || Ri(4));
    }, Zt = () => {
      if (A === f) return H[f];
      const oe = b.filter((Ee, st) => st !== f);
      let fe = H[0];
      for (let Ee = 0; Ee < A; Ee++) fe += oe[Ee].offsetHeight + g;
      return fe;
    }, zn = () => {
      const oe = l ? Math.min(Math.abs(Z) / 40, 1) : 0, fe = l && !We ? Math.max(-3, Math.min(3, Je * 0.6)) : 0;
      t.style.transform = "translate(" + Oe.toFixed(2) + "px," + (ne - (R() + H[f])).toFixed(2) + "px) rotate(" + fe.toFixed(2) + "deg) scale(" + (Ne * (1 - 0.04 * oe)).toFixed(4) + "," + (Ne * (1 + 0.06 * oe)).toFixed(4) + ")";
    }, te = () => {
      Ge = requestAnimationFrame(te);
      const oe = ye - _, fe = We ? R() + qn : me - ue, Ee = We ? 0 : ae ? oe * 0.9 : Math.max(-22, Math.min(22, oe * 0.22)), st = We ? 1 : ae ? 0.97 : 1.035;
      if (!l) {
        ne = fe, Oe = We ? 0 : Ee, Ne = 1, zn(), We && Ie();
        return;
      }
      const Jl = We ? 0.24 : 0.2, $l = We ? 0.62 : 0.68;
      Z = (Z + (fe - ne) * Jl) * $l, ne += Z, Je = (Je + (Ee - Oe) * 0.16) * 0.7, Oe += Je, Kt = (Kt + (st - Ne) * 0.22) * 0.6, Ne += Kt, zn(), We && Math.abs(Z) < 0.15 && Math.abs(fe - ne) < 0.5 && Math.abs(Oe) < 0.5 && Math.abs(Ne - 1) < 3e-3 && Ie();
    }, Ce = setInterval(() => {
      if (!p || We) return;
      const oe = p.getBoundingClientRect(), fe = 56, Ee = me < oe.top + fe ? -10 : me > oe.bottom - fe ? 10 : 0;
      Ee && (p.scrollTop += Ee, ki());
    }, 30);
    function Ie() {
      if (ca) return;
      ca = !0, cancelAnimationFrame(Ge);
      const oe = A !== f, fe = t.dataset.id;
      if (n.classList.remove("reordering"), b.forEach((st) => {
        st.style.transition = "none", st.style.transform = "";
      }), t.classList.remove("dragging", "willReturn"), n.style.position = x, oe) {
        const [st] = i.splice(f, 1);
        i.splice(A, 0, st);
      }
      Te();
      const Ee = fe && n.querySelector('.moveRow[data-id="' + fe + '"]');
      Ee && l && Ee.animate([{ transform: "scale(1.02,.95)" }, { transform: "scale(.995,1.012)" }, { transform: "none" }], { duration: 340, easing: "ease-out" }), oe && De("Order saved");
    }
    const je = (oe) => {
      if (oe.pointerId === s) {
        if (oe.pointerType === "mouse" && oe.buttons === 0) {
          xt();
          return;
        }
        me = oe.clientY, ye = oe.clientX, ki();
      }
    }, rt = (oe) => {
      oe.pointerId === s && xt();
    };
    function xt() {
      We || (window.removeEventListener("pointermove", je, !0), window.removeEventListener("pointerup", rt, !0), window.removeEventListener("pointercancel", rt, !0), o.removeEventListener("lostpointercapture", xt), clearInterval(Ce), ae && A !== f && (A = f, ua()), qn = Zt(), We = !0, Ri(6), setTimeout(Ie, 800));
    }
    window.addEventListener("pointermove", je, !0), window.addEventListener("pointerup", rt, !0), window.addEventListener("pointercancel", rt, !0), o.addEventListener("lostpointercapture", xt), Ge = requestAnimationFrame(te), zn();
  }
  function ya() {
    var o, s, l, p;
    const e = de[ve], t = (o = a("warmupList")) == null ? void 0 : o.closest("section"), n = (s = a("cooldownList")) == null ? void 0 : s.closest("section"), i = (p = (l = a("strengthList")) == null ? void 0 : l.closest("section")) == null ? void 0 : p.querySelector(".sectionTitle");
    e != null && e.customSequence ? (t && (t.hidden = !e.includeWarmup), n && (n.hidden = !e.includeCooldown), i && (i.textContent = "Move sequence")) : (t && (t.hidden = !!(e != null && e.warmupOff)), n && (n.hidden = !1), i && (i.textContent = "Kettlebell work")), wa(Le, "warmupList"), wa(_e, "strengthList"), wa($e, "cooldownList");
  }
  function Ai() {
    if (!bt) return;
    const { item: e, arr: t } = bt;
    bt = null;
    const n = t.indexOf(e);
    n >= 0 && t.splice(n, 1), ut === e && (ut = null);
  }
  function Kn(e) {
    return e.id === "warmupList" ? { arr: Le, kind: "warmup", group: "Warm-up" } : e.id === "cooldownList" ? { arr: $e, kind: "cooldown", group: "Cooldown" } : { arr: _e, kind: "work", group: "" };
  }
  function Po(e, t) {
    const n = Kn(t), i = Date.now().toString(36);
    return e === "video" ? { id: "video-" + i, name: "", group: "Video", kind: "video", hidden: !1, url: "", videoId: "", start: 0, end: null, videoDuration: null, useVideoLength: !0, autoName: !0, duration: 300 } : e === "rest" ? { id: "rest-" + i, name: "Rest", group: "Rest", kind: "rest", hidden: !1, useGlobalTiming: !0, duration: Number(w.value) } : { id: "movement-" + i, name: "", group: n.group, kind: n.kind, hidden: !1, useGlobalTiming: !0, duration: Number(h.value) };
  }
  const Ho = "cubic-bezier(.34,1.46,.64,1)";
  function _o(e, t) {
    if (wt() || !e) {
      t();
      return;
    }
    const n = (s) => {
      var l;
      return ((l = s.dataset) == null ? void 0 : l.id) || s;
    }, i = () => [...e.querySelectorAll(".moveRow,.sectionTitle,.movementCreatorLaunch")], o = new Map(i().map((s) => [n(s), s.getBoundingClientRect().top]));
    t(), i().forEach((s) => {
      const l = o.get(n(s));
      if (l === void 0) return;
      const p = l - s.getBoundingClientRect().top;
      Math.abs(p) < 0.5 || s.animate([{ transform: "translateY(" + p + "px)" }, { transform: "none" }], { duration: 440, easing: Ho });
    });
  }
  function qo(e, t) {
    if (!e || wt()) return;
    const n = e.offsetHeight, i = Math.max(0, n - (t || 0));
    e.animate([{ clipPath: "inset(0 0 " + i + "px 0 round 20.8px)" }, { clipPath: "inset(0 0 0 0 round 20.8px)" }], { duration: 460, easing: Ho });
  }
  function zo(e, t, n, i) {
    const { arr: o } = Kn(t), s = Po(e, t);
    o.splice(Math.max(0, Math.min(n, o.length)), 0, s), bt = { item: s, arr: o }, ut = s, _o(t.closest(".exerciseScroller,.createStepSlot") || t, () => Te());
    const l = t.querySelector(".moveRow.editing");
    return qo(l, i), Bo(e === "rest"), l;
  }
  function ka(e) {
    for (let t = e; t && t.nodeType === 1; t = t.parentElement) {
      const n = getComputedStyle(t).overflowY;
      if (/(auto|scroll)/.test(n) && t.scrollHeight > t.clientHeight) return t;
    }
    return null;
  }
  const Oo = { movement: ["New movement", "Drop to add, then name it"], rest: ["Rest", "Rest · Global timing"], video: ["New video", "Drop to add, then paste a YouTube link"] };
  function Vo(e, t) {
    const n = document.createElement("div");
    return n.className = "addGhost" + (e === "movement" ? "" : " rest"), n.innerHTML = '<span class="addGhostGrip">' + Yn + '</span><span class="addGhostText"><strong>' + ee(t[0]) + "</strong><small>" + ee(t[1]) + "</small></span>", a("workoutModal").appendChild(n), n;
  }
  function Zn(e) {
    e.classList.add("leaving"), setTimeout(() => e.remove(), 180);
  }
  function Is(e, t, n, i) {
    (ut || bt) && (Ai(), ut = null, Te());
    const o = e.getBoundingClientRect(), s = Vo(t, Oo[t]);
    s.setAttribute("aria-hidden", "true"), s.style.width = o.width + "px", s.style.height = o.height + "px", s.style.transform = "translate(" + o.left + "px," + o.top + "px)", e.classList.add("lifting");
    const l = ka(e);
    return Go({
      ghost: s,
      origin: o,
      sx: n,
      sy: i,
      scroller: l,
      column: e.closest(".exerciseScroller,.createFlow") || l,
      home: () => e.getBoundingClientRect(),
      onDrop: (p, x, b) => {
        Zn(s), e.classList.remove("lifting"), zo(t, p, x, b);
      },
      onReturn: () => {
        Zn(s), e.classList.remove("lifting");
      }
    });
  }
  function Go({ ghost: e, origin: t, sx: n, sy: i, scroller: o, column: s, home: l, onDrop: p, onReturn: x, rowLook: b = !1 }) {
    var zn;
    const f = !wt(), g = ((zn = r.querySelector(".moveList .moveRow:not(.editing)")) == null ? void 0 : zn.offsetHeight) || 80, D = n - t.left, Y = i - t.top, H = 44;
    let N = n, R = i, ce = t.left, ue = t.top, _ = 0, me = 0, ye = !f, ne = null, Z = null, Oe = -1, Je = 0, Ne = null;
    const Kt = () => ["warmupList", "strengthList", "cooldownList"].map((te) => a(te)).filter((te) => te && te.getClientRects().length && !te.closest("[hidden]")), A = (te) => {
      if (te === ne) return;
      ne = te, e.classList.toggle("overList", !!te || b);
      const Ce = te ? te.getBoundingClientRect().width : t.width;
      e.style.width = Ce + "px", e.style.height = (te ? g : t.height) + "px";
    }, ae = (te) => {
      te.classList.add("leaving"), te.style.height = "0px", te.style.marginTop = "-8px", setTimeout(() => te.remove(), f ? 320 : 0);
    }, Ge = (te, Ce, Ie) => {
      if (Z && Z.parentNode === te && Oe === Ie || (Z && (ae(Z), Z = null, Oe = -1), !te)) return;
      const je = document.createElement("div");
      je.className = "dropSlot", te.insertBefore(je, Ce), Z = je, Oe = Ie, je.getBoundingClientRect(), je.style.height = g + "px", je.style.marginTop = "0px";
    }, We = () => {
      let te = null, Ce = 1 / 0;
      for (const xt of Kt()) {
        const oe = xt.getBoundingClientRect();
        if (N < oe.left - 48 || N > oe.right + 48) continue;
        const fe = oe.top - 28, Ee = oe.bottom + 28, st = R < fe ? fe - R : R > Ee ? R - Ee : 0;
        st < Ce && (Ce = st, te = xt);
      }
      const Ie = s == null ? void 0 : s.getBoundingClientRect(), rt = Ie && N >= Ie.left && N <= Ie.right && R >= Ie.top && R <= Ie.bottom || Ce === 0 ? te : null;
      if (rt) {
        const xt = [...rt.children].filter((fe) => fe.classList.contains("moveRow"));
        let oe = xt.findIndex((fe) => {
          const Ee = fe.getBoundingClientRect();
          return R < Ee.top + Ee.height / 2;
        });
        oe < 0 && (oe = xt.length), Ge(rt, xt[oe] || null, oe);
      } else Ge(null);
      A(rt);
    }, ca = () => {
      if (Ne) return Ne.aim();
      if (ne) {
        const te = ne.getBoundingClientRect();
        let Ce = R - g / 2;
        return Z && (Ce = Ce * 0.6 + Z.getBoundingClientRect().top * 0.4), { x: te.left, y: Ce };
      }
      return { x: N - D, y: R - Y };
    }, qn = (te, Ce, Ie, je) => {
      e.style.transform = "translate(" + ce + "px," + ue + "px) rotate(" + te + "deg) rotate(" + Ce + "rad) scale(" + Ie + "," + je + ") rotate(" + -Ce + "rad)";
    }, pa = () => {
      if (Je = requestAnimationFrame(pa), !ye) {
        const oe = N - n, fe = R - i, Ee = Math.min(Math.hypot(oe, fe) / H, 1);
        ce = t.left + oe * 0.35, ue = t.top + fe * 0.35, qn(0, Math.atan2(fe, oe), 1 + 0.155 * Ee, 1 - 0.1 * Ee);
        return;
      }
      const te = ca();
      if (!f) {
        ce = te.x, ue = te.y, qn(0, 0, 1, 1), Ne && (cancelAnimationFrame(Je), Ne.done());
        return;
      }
      const Ce = Ne ? Ne.k : 0.17, Ie = Ne ? Ne.d : 0.7;
      _ = (_ + (te.x - ce) * Ce) * Ie, me = (me + (te.y - ue) * Ce) * Ie, ce += _, ue += me;
      const je = Math.hypot(_, me), rt = Math.min(je / 48, 1), xt = ne || Ne ? 0 : Math.max(-5, Math.min(5, _ * 0.32));
      qn(xt, Math.atan2(me, _), 1 + 0.1 * rt, 1 - 0.063 * rt), Ne && je < 0.15 && Math.hypot(te.x - ce, te.y - ue) < 0.6 && (cancelAnimationFrame(Je), Ne.done());
    }, ua = setInterval(() => {
      if (!o || Ne) return;
      const te = o.getBoundingClientRect(), Ce = 64, Ie = R < te.top + Ce ? -(te.top + Ce - R) / 4 : R > te.bottom - Ce ? (R - (te.bottom - Ce)) / 4 : 0;
      Ie && (o.scrollTop += Math.max(-18, Math.min(18, Ie)), We());
    }, 30);
    Je = requestAnimationFrame(pa);
    let ki = !1;
    const Zt = (te, Ce) => {
      if (ki) return;
      ki = !0, cancelAnimationFrame(Je);
      const Ie = Z ? Z.offsetHeight : g;
      !te && Z && (Z.remove(), Z = null), te ? p(te, Ce, Ie) : x();
    };
    return {
      move(te, Ce) {
        N = te, R = Ce, !ye && Math.hypot(N - n, R - i) > H && (ye = !0, _ = (N - n) * 0.085, me = (R - i) * 0.085), ye && We();
      },
      drop(te) {
        clearInterval(ua);
        const Ce = ne, Ie = Oe;
        if (!te && Ce && Z) {
          const je = Z;
          Ne = { k: 0.24, d: 0.62, aim: () => {
            const rt = je.getBoundingClientRect();
            return { x: rt.left, y: rt.top };
          }, done: () => Zt(Ce, Ie) }, setTimeout(() => Zt(Ce, Ie), 650), f || (cancelAnimationFrame(Je), Zt(Ce, Ie));
          return;
        }
        Ge(null), A(null), Ne = { k: 0.2, d: 0.66, aim: () => {
          const je = l();
          return { x: je.left, y: je.top };
        }, done: () => Zt(null) }, setTimeout(() => Zt(null), 650), f || (cancelAnimationFrame(Je), Zt(null));
      }
    };
  }
  function Sa(e, t) {
    let n = !1;
    e.addEventListener("click", (i) => {
      if (n) {
        n = !1, i.preventDefault();
        return;
      }
      if ($n()) {
        Uo(t);
        return;
      }
      const o = a("strengthList"), s = zo(t, o, Kn(o).arr.length, 0);
      s == null || s.scrollIntoView({ block: "nearest", behavior: wt() ? "auto" : "smooth" });
    }), e.addEventListener("pointerdown", (i) => {
      if (i.button !== void 0 && i.button !== 0) return;
      const o = i.pointerId, s = i.clientX, l = i.clientY;
      let p = null, x = !1;
      try {
        e.setPointerCapture(o);
      } catch {
      }
      const b = (R) => {
        if (R.pointerId === o) {
          if (R.pointerType === "mouse" && R.buttons === 0) {
            N(!1);
            return;
          }
          if (!p) {
            if (Math.hypot(R.clientX - s, R.clientY - l) < 6) return;
            p = Is(e, t, s, l);
          }
          p.move(R.clientX, R.clientY);
        }
      }, f = (R) => {
        R.pointerId === o && N(!1);
      }, g = (R) => {
        R.pointerId === o && N(!0);
      }, D = () => N(!1), Y = () => N(!0), H = (R) => {
        R.key === "Escape" && p && (R.preventDefault(), R.stopPropagation(), N(!0));
      };
      function N(R) {
        if (!x && (x = !0, window.removeEventListener("pointermove", b, !0), window.removeEventListener("pointerup", f, !0), window.removeEventListener("pointercancel", g, !0), window.removeEventListener("keydown", H, !0), window.removeEventListener("blur", Y), e.removeEventListener("lostpointercapture", D), p)) {
          const ce = p;
          p = null, n = !0, setTimeout(() => {
            n = !1;
          }, 0), ce.drop(R);
        }
      }
      window.addEventListener("pointermove", b, !0), window.addEventListener("pointerup", f, !0), window.addEventListener("pointercancel", g, !0), window.addEventListener("keydown", H, !0), window.addEventListener("blur", Y), e.addEventListener("lostpointercapture", D);
    });
  }
  const Jn = (os = window.matchMedia) == null ? void 0 : os.call(window, "(max-width: 620px)");
  function $n() {
    var e;
    return !!((e = window.matchMedia) != null && e.call(window, "(max-width: 620px)").matches);
  }
  const Wo = (e) => e.charAt(0).toUpperCase() + e.slice(1), Ni = (e) => e.kind === "rest" ? "rest" : e.kind === "video" ? "video" : "movement";
  let Ca = null, Fe = null;
  function Di(e, t, n, i) {
    mt(), a("sheetTitle").textContent = e;
    const o = a("sheetBody");
    o.innerHTML = "", o.appendChild(t), Ca = n || null, a("sheet").setAttribute("aria-hidden", "false"), a("sheetScrim").classList.add("open"), a("sheet").classList.add("open"), setTimeout(() => {
      if (!a("sheet").classList.contains("open") || !o.contains(t)) return;
      const s = i ? o.querySelector("input[data-f=url],input[data-f=name]") : o.querySelector("button,input,select");
      s == null || s.focus({ preventScroll: !0 });
    }, wt() ? 0 : 360);
  }
  function mt() {
    const e = a("sheet");
    if (!e.classList.contains("open")) return;
    e.classList.remove("open"), a("sheetScrim").classList.remove("open"), e.setAttribute("aria-hidden", "true"), e.contains(r.activeElement) && r.activeElement.blur();
    const t = Ca;
    Ca = null, t == null || t(), setTimeout(Qt, 0);
  }
  a("sheetScrim").addEventListener("click", mt), a("sheet").addEventListener("keydown", (e) => {
    e.key === "Escape" && (e.preventDefault(), mt());
  });
  function jo(e, t) {
    const n = ba(e, t.indexOf(e), {
      sheet: !0,
      isNew: !1,
      onSaved() {
        mt(), Te(), De(Wo(Ni(e)) + " updated");
      },
      onCancel: mt,
      onHide() {
        e.hidden = !e.hidden, mt(), Te(), De((e.hidden ? "Hidden: " : "Showing: ") + e.name);
      },
      onRemove() {
        mt();
        const i = t.indexOf(e);
        i < 0 || (t.splice(i, 1), Te(), De("Removed " + e.name, { label: "Undo", run: () => {
          t.splice(Math.min(i, t.length), 0, e), Te();
        } }));
      }
    });
    Di("Edit " + Ni(e), n, null, !1);
  }
  function Bs() {
    const e = document.createElement("div");
    e.className = "sheetChoices", [["movement", "activity", "Movement", "Name it, then drag it into place"], ["rest", "pause", "Rest", "A pause between movements"], ["video", "play", "Video", "Paste a YouTube link"]].forEach(([t, n, i, o]) => {
      const s = document.createElement("button");
      s.type = "button", s.className = "sheetChoice", s.innerHTML = '<span class="timeIcon" aria-hidden="true">' + At(n) + "</span><span><strong>" + i + "</strong><small>" + o + "</small></span>", s.addEventListener("click", () => Uo(t)), e.appendChild(s);
    }), Di("Add to the move", e, null, !1);
  }
  function Uo(e) {
    Fe && Bi();
    const t = Po(e, a("strengthList")), n = ba(t, -1, {
      sheet: !0,
      isNew: !0,
      onSaved() {
        mt(), Ps(t, e);
      },
      onCancel: mt
    });
    Di("New " + Ni(t), n, null, !0);
  }
  const Ii = a("workoutModal").querySelector(".modalStatic"), Yo = { parent: Ii.parentNode, next: Ii.nextSibling };
  function Fs() {
    const e = document.createElement("div");
    e.className = "sheetSetup", e.appendChild(Ii);
    const t = document.createElement("button");
    t.type = "button", t.className = "primary sheetDone", t.textContent = "Done", t.addEventListener("click", mt), e.appendChild(t), Di("Setup", e, () => {
      Yo.parent.insertBefore(Ii, Yo.next), Ma();
    }, !1);
  }
  function Ma() {
    var t, n;
    const e = a("setupSummaryName");
    e && (e.textContent = (((t = a("workoutNameInput")) == null ? void 0 : t.value) || "").trim() || ((n = de[ve]) == null ? void 0 : n.name) || "Move", a("setupSummaryMeta").textContent = Xe.textContent);
  }
  a("setupSummary").addEventListener("click", Fs), a("addFab").addEventListener("click", Bs);
  function Ko() {
    const e = a("strengthList");
    return ka(e) || e.closest(".exerciseScroller");
  }
  function La() {
    const e = a("strengthList").getBoundingClientRect(), t = (Ko() || a("strengthList")).getBoundingClientRect(), n = (Fe == null ? void 0 : Fe.ghost.offsetHeight) || 64;
    return { left: e.left, top: Math.max(t.top + 12, Math.min(t.bottom - n - 96, t.top + t.height * 0.55 - n / 2)), width: e.width, height: n };
  }
  function Ps(e, t) {
    var p;
    const n = Vo(t, [e.name || Oo[t][0], "Drag into place"]);
    n.classList.add("overList", "hovering"), n.setAttribute("aria-label", (e.name || "New step") + ". Drag it into place in the list, or add it at the end.");
    const i = document.createElement("span");
    i.className = "addGhostActions", i.innerHTML = '<button class="hideBtn" type="button" data-a="end">Add at end</button><button class="hideBtn ghostDiscard" type="button" data-a="discard" aria-label="Discard ' + ee(e.name) + '">✕</button>', n.appendChild(i), Fe = { item: e, type: t, ghost: n };
    const o = ((p = r.querySelector(".moveList .moveRow:not(.editing)")) == null ? void 0 : p.offsetHeight) || 64;
    n.style.width = a("strengthList").getBoundingClientRect().width + "px", n.style.height = o + "px";
    const s = La(), l = at.querySelector(".modal").getBoundingClientRect().bottom;
    n.style.transform = "translate(" + s.left + "px," + l + "px)", n.getBoundingClientRect(), wt() || (n.classList.add("rising"), setTimeout(() => n.classList.remove("rising"), 650)), n.style.transform = "translate(" + s.left + "px," + s.top + "px)", i.querySelector("[data-a=end]").addEventListener("click", Bi), i.querySelector("[data-a=discard]").addEventListener("click", _s), n.addEventListener("pointerdown", Hs);
  }
  function Hs(e) {
    if (!Fe || e.target.closest("button") || e.button !== void 0 && e.button !== 0) return;
    e.preventDefault();
    const { item: t, ghost: n } = Fe, i = e.pointerId;
    try {
      n.setPointerCapture(i);
    } catch {
    }
    n.classList.remove("hovering", "rising"), n.classList.add("held");
    const o = n.getBoundingClientRect(), s = Ko(), l = Go({
      ghost: n,
      origin: { left: o.left, top: o.top, width: o.width, height: o.height },
      sx: e.clientX,
      sy: e.clientY,
      scroller: s,
      column: a("strengthList").closest(".exerciseScroller,.createFlow") || s,
      rowLook: !0,
      home: La,
      onDrop: (N, R, ce) => {
        Fe = null, Zn(n), Zo(t, N, R, ce);
      },
      onReturn: () => {
        n.classList.remove("held"), n.classList.add("hovering");
      }
    });
    let p = !1;
    const x = (N) => {
      if (N.pointerId === i) {
        if (N.pointerType === "mouse" && N.buttons === 0) {
          H(!1);
          return;
        }
        l.move(N.clientX, N.clientY);
      }
    }, b = (N) => {
      N.pointerId === i && H(!1);
    }, f = (N) => {
      N.pointerId === i && H(!0);
    }, g = () => H(!1), D = () => H(!0), Y = (N) => {
      N.key === "Escape" && (N.preventDefault(), H(!0));
    };
    function H(N) {
      p || (p = !0, window.removeEventListener("pointermove", x, !0), window.removeEventListener("pointerup", b, !0), window.removeEventListener("pointercancel", f, !0), window.removeEventListener("keydown", Y, !0), window.removeEventListener("blur", D), n.removeEventListener("lostpointercapture", g), l.drop(N));
    }
    window.addEventListener("pointermove", x, !0), window.addEventListener("pointerup", b, !0), window.addEventListener("pointercancel", f, !0), window.addEventListener("keydown", Y, !0), window.addEventListener("blur", D), n.addEventListener("lostpointercapture", g);
  }
  function Zo(e, t, n, i) {
    const o = Kn(t);
    e.kind !== "rest" && e.kind !== "video" && (e.kind = o.kind, o.group && (!e.group || e.group === "Movement") && (e.group = o.group)), o.arr.splice(Math.max(0, Math.min(n, o.arr.length)), 0, e), _o(t.closest(".exerciseScroller,.createStepSlot") || t, () => Te()), qo(t.querySelector('.moveRow[data-id="' + e.id + '"]'), i), De(Wo(Ni(e)) + " added");
  }
  function Bi() {
    var i;
    if (!Fe) return;
    const { item: e, ghost: t } = Fe;
    Fe = null, Zn(t);
    const n = a("strengthList");
    Zo(e, n, Kn(n).arr.length, 0), (i = n.querySelector('.moveRow[data-id="' + e.id + '"]')) == null || i.scrollIntoView({ block: "nearest", behavior: wt() ? "auto" : "smooth" });
  }
  function _s() {
    if (!Fe) return;
    const e = Fe.ghost;
    Fe = null, Zn(e), De("Discarded");
  }
  function Jo() {
    Fe && (Fe.ghost.remove(), Fe = null);
  }
  window.addEventListener("resize", () => {
    if (Fe != null && Fe.ghost.classList.contains("hovering")) {
      const e = La();
      Fe.ghost.style.width = e.width + "px", Fe.ghost.style.transform = "translate(" + e.left + "px," + e.top + "px)";
    }
  }), (rs = Jn == null ? void 0 : Jn.addEventListener) == null || rs.call(Jn, "change", () => {
    mt(), Fe && !$n() && Bi(), ya();
  });
  {
    const e = a("workoutModal").querySelector(".modal");
    e.addEventListener("scroll", () => {
      (e.scrollTop || e.scrollLeft) && (e.scrollTop = 0, e.scrollLeft = 0);
    });
  }
  function Qt() {
    const e = a("workoutModal"), t = window.visualViewport;
    if (!e.classList.contains("open") || !$n()) {
      $o();
      return;
    }
    const n = t ? t.offsetTop : 0, i = t ? t.offsetLeft : 0, o = t ? t.width : window.innerWidth, s = t ? t.height : window.innerHeight;
    Object.assign(e.style, { right: "auto", bottom: "auto", width: o + "px", height: s + "px", top: n + "px", left: i + "px" });
    const l = e.getBoundingClientRect();
    Math.abs(l.top - n) > 0.5 && (e.style.top = 2 * n - l.top + "px"), Math.abs(l.left - i) > 0.5 && (e.style.left = 2 * i - l.left + "px");
  }
  function $o() {
    ["top", "left", "right", "bottom", "width", "height"].forEach((e) => a("workoutModal").style.removeProperty(e));
  }
  (ss = window.visualViewport) == null || ss.addEventListener("resize", Qt), (ls = window.visualViewport) == null || ls.addEventListener("scroll", Qt), window.addEventListener("resize", Qt), window.addEventListener("scroll", Qt, { passive: !0 }), window.addEventListener("orientationchange", () => setTimeout(Qt, 250));
  function Ta() {
    _e.length > 0;
    const e = a("addMovementBtn"), t = a("addRestBtn");
    e && (e.innerHTML = Yn + "<span>Add movement</span>"), t && (t.innerHTML = Yn + "<span>Add rest</span>");
    const n = a("addVideoBtn");
    n && (n.innerHTML = Yn + "<span>Add video</span>");
  }
  function Xn() {
    const e = a("useGlobalTiming").checked, t = a("addMovementDuration"), n = a("addMovementUnit");
    t.disabled = e, n.disabled = e, t.parentElement.style.opacity = e ? ".38" : "1", a("globalTimingValue").textContent = "Use global timing · " + et(h.value);
    const i = a("useGlobalRestTiming").checked, o = a("addRestDuration"), s = a("addRestUnit");
    o.disabled = i, s.disabled = i, o.parentElement.style.opacity = i ? ".38" : "1", a("globalRestTimingValue").textContent = "Use global timing · " + et(w.value);
  }
  let Xo = "movement";
  function qs(e) {
    Xo = e;
    const t = a("movementFields"), n = a("restFields");
    t.hidden = e !== "movement", n.hidden = e !== "rest", a("movementCreatorHeading").textContent = "Add movement", a("movementCreator").setAttribute("aria-label", "Create movement"), Xn();
  }
  function Ea() {
    de[ve];
    const e = Se ? !0 : a("useGlobalTiming").checked, t = e ? Number(h.value) : Ei(
      a("addMovementDuration").value,
      a("addMovementUnit").value
    ), n = Se ? !0 : a("useGlobalRestTiming").checked, i = n ? Number(w.value) : Ei(
      a("addRestDuration").value,
      a("addRestUnit").value
    );
    if (Xo === "rest") {
      const o = a("addRestTitle").value.trim() || "Rest", s = a("addRestGroup").value.trim() || "Rest";
      _e.push({
        id: "rest-" + Date.now(),
        name: o,
        group: s,
        kind: "rest",
        hidden: !1,
        useGlobalTiming: n,
        duration: Math.max(5, i || Number(w.value))
      }), Te(), a("movementCreator").hidden = !0, a("addRestTitle").value = "Rest", a("addRestGroup").value = "Rest", De("Rest added"), Se && ($("movements"), we());
    } else {
      const o = a("addMovementInput").value.trim();
      if (!o) return;
      const s = a("addMovementGroup").value.trim() || "Movement";
      _e.push({
        id: "movement-" + Date.now(),
        name: o,
        group: s,
        kind: "work",
        hidden: !1,
        useGlobalTiming: e,
        duration: Math.max(5, t || Number(h.value))
      }), a("addMovementInput").value = "", a("addMovementGroup").value = "", Te(), a("movementCreator").hidden = !0, De("Movement added"), Se && ($("movements"), we());
    }
    Ta();
  }
  let Ra = null;
  function De(e, t) {
    const n = a("toast");
    n.innerHTML = "";
    const i = document.createElement("span");
    if (i.textContent = e, n.appendChild(i), t) {
      const o = document.createElement("button");
      o.type = "button", o.className = "toastAction", o.textContent = t.label, o.addEventListener("click", () => {
        t.run(), n.classList.remove("show", "withAction"), clearTimeout(Ra);
      }), n.appendChild(o);
    }
    n.classList.toggle("withAction", !!t), n.classList.add("show"), clearTimeout(Ra), Ra = setTimeout(() => n.classList.remove("show", "withAction"), t ? 5e3 : 2200);
  }
  const zs = ["Terrible", "Poor", "Meh", "Okay", "Good", "Great"], Os = ["#6E63A8", "#5878A8", "#6F8B8A", "#5F9B72", "#D5A53E", "#D56B54"];
  function Qo(e) {
    return Math.max(0, Math.min(5, Math.floor(Number(e) / 100 * 6)));
  }
  function un(e, t) {
    return zs[Qo(t)];
  }
  function Vs(e) {
    return Os[Qo(e)];
  }
  function Pe(e) {
    return e.getFullYear() + "-" + String(e.getMonth() + 1).padStart(2, "0") + "-" + String(e.getDate()).padStart(2, "0");
  }
  function _t() {
    return { morning: be().morningTime || "08:00", evening: be().eveningTime || "19:00" };
  }
  function mn(e) {
    const [t, n] = String(e).split(":").map(Number);
    return (t || 0) * 60 + (n || 0);
  }
  function Gs(e) {
    const t = _t();
    return e.getHours() * 60 + e.getMinutes() >= mn(t.evening) ? "evening" : "morning";
  }
  function Fi(e, t) {
    return he.checkins.find((n) => n.date === e && n.slot === t);
  }
  function Pi(e) {
    return !!(e && e.mood != null && e.energy != null);
  }
  function Hi() {
    const e = /* @__PURE__ */ new Date(), t = Pe(e), n = Gs(e), i = _t(), o = e.getHours() * 60 + e.getMinutes();
    return n === "morning" && o < mn(i.morning) || Pi(Fi(t, n)) ? null : n;
  }
  const qt = a("checkinModal"), zt = a("checkinTab"), Ws = a("checkinBadge"), Ot = { mood: { input: a("moodInput"), fill: a("moodFill") }, energy: { input: a("energyLevelInput"), fill: a("energyLevelFill") } };
  function er(e) {
    const { input: t, fill: n } = Ot[e];
    n.style.width = t.value + "%", t.setAttribute("aria-valuetext", un(e, t.value));
  }
  Object.keys(Ot).forEach((e) => Ot[e].input.addEventListener("input", () => er(e)));
  let Mt = null;
  function tr() {
    const e = _t(), t = /* @__PURE__ */ new Date(), n = t.getHours() * 60 + t.getMinutes();
    return n < mn(e.morning) ? "Next check-in at " + e.morning : n < mn(e.evening) ? "Next check-in at " + e.evening : "Next check-in tomorrow at " + e.morning;
  }
  function js() {
    const e = _t(), t = /* @__PURE__ */ new Date(), n = t.getHours() * 60 + t.getMinutes(), i = (o, s) => {
      const [l, p] = o.split(":").map(Number);
      return new Date(t.getFullYear(), t.getMonth(), t.getDate() + (s ? 1 : 0), l, p);
    };
    return n < mn(e.morning) ? { date: i(e.morning), time: e.morning } : n < mn(e.evening) ? { date: i(e.evening), time: e.evening } : { date: i(e.morning, !0), time: e.morning };
  }
  let Aa = null, Na = null;
  function nr() {
    if (Hi()) {
      _i(), en();
      return;
    }
    const e = js(), t = Math.max(0, Math.round((e.date - Date.now()) / 1e3)), n = Math.floor(t / 3600), i = Math.floor(t % 3600 / 60), o = t % 60;
    a("peekCountdown").textContent = n + ":" + String(i).padStart(2, "0") + ":" + String(o).padStart(2, "0"), a("peekAt").textContent = "Available at " + e.time;
  }
  function Us() {
    nr(), zt.classList.add("peek"), clearInterval(Na), Na = setInterval(nr, 1e3), clearTimeout(Aa), Aa = setTimeout(_i, 6e3);
  }
  function _i() {
    zt.classList.remove("peek"), clearInterval(Na), clearTimeout(Aa);
  }
  function ir() {
    const e = Hi();
    if (!e) {
      zt.classList.contains("peek") ? _i() : Us();
      return;
    }
    Mt = { date: Pe(/* @__PURE__ */ new Date()), slot: e };
    const n = Fi(Mt.date, e), i = he.checkins.find((o) => Pi(o));
    Object.keys(Ot).forEach((o) => {
      Ot[o].input.value = (n == null ? void 0 : n[o]) ?? (i == null ? void 0 : i[o]) ?? 50, er(o);
    }), a("checkinTitle").textContent = e === "morning" ? "Morning check-in" : "Evening check-in", qt.classList.add("open"), qt.setAttribute("aria-hidden", "false"), requestAnimationFrame(() => Ot.mood.input.focus());
  }
  function Qn() {
    qt.classList.remove("open"), qt.setAttribute("aria-hidden", "true"), Mt && (ei = Mt.date + "-" + Mt.slot);
    try {
      localStorage.setItem("move-assistant-dismissed", ei);
    } catch {
    }
    Mt = null, en();
  }
  function Ys() {
    if (!Mt) return;
    if (Pi(Fi(Mt.date, Mt.slot))) {
      Qn();
      return;
    }
    const { date: e, slot: t } = Mt;
    let n = Fi(e, t);
    n || (n = { date: e, slot: t }, he.checkins.unshift(n), he.checkins = he.checkins.slice(0, 2e3)), n.mood = Number(Ot.mood.input.value), n.energy = Number(Ot.energy.input.value), n.scale = 100, n.at = (/* @__PURE__ */ new Date()).toISOString(), pt(), u.fire("checkin", { slot: t, mood: n.mood, energy: n.energy, mood_label: un("mood", n.mood), energy_label: un("energy", n.energy) }), De((t === "morning" ? "Morning" : "Evening") + " check-in saved"), Qn(), qi(), ti(), rn(), Ft();
  }
  let ei = "";
  try {
    ei = localStorage.getItem("move-assistant-dismissed") || "";
  } catch {
  }
  function en() {
    const e = Hi();
    Ws.hidden = !e, zt.hidden = !e, e || _i(), zt.classList.toggle("due", !!e), zt.setAttribute("aria-label", e ? (e === "morning" ? "Morning" : "Evening") + " check-in is due" : tr()), zt.title = e ? "Check in now" : tr();
  }
  function Da() {
    en();
    const e = Hi();
    !e || qt.classList.contains("open") || be().checkinAutoOpen !== !1 && (!ge.home.classList.contains("active") || at.classList.contains("open") || ei !== Pe(/* @__PURE__ */ new Date()) + "-" + e && ir());
  }
  zt.addEventListener("click", ir), a("checkinLater").addEventListener("click", Qn), a("checkinSave").addEventListener("click", Ys), qt.addEventListener("click", (e) => {
    e.target === qt && Qn();
  }), qt.addEventListener("keydown", (e) => {
    e.key === "Escape" && (e.preventDefault(), Qn());
  }), setInterval(Da, 3e4);
  function qi() {
    const e = Pe(/* @__PURE__ */ new Date()), t = (n) => he.checkins.find((i) => i.date === e && i[n] != null);
    [["mood", "moodMeta"], ["energy", "energyLevelMeta"]].forEach(([n, i]) => {
      const o = t(n);
      a(i).textContent = o ? un(n, o[n]) : "—";
    });
  }
  function ti() {
    const e = a("feelCard");
    if (!e) return;
    const t = /* @__PURE__ */ new Date(), n = new Date(t.getFullYear(), t.getMonth(), t.getDate() - (t.getDay() + 6) % 7), i = [...Array(7)].map((b, f) => {
      const g = new Date(n.getFullYear(), n.getMonth(), n.getDate() + f), D = Pe(g), Y = he.checkins.filter((N) => N.date === D), H = (N) => {
        const R = Y.map((ce) => ce[N]).filter((ce) => ce != null);
        return R.length ? R.reduce((ce, ue) => ce + ue, 0) / R.length : null;
      };
      return { d: g, key: D, mood: H("mood"), energy: H("energy"), count: Y.filter(Pi).length, future: g > t && D !== Pe(t) };
    }), o = (b) => {
      const f = i.map((g) => g[b]).filter((g) => g != null);
      return f.length ? f.reduce((g, D) => g + D, 0) / f.length : null;
    }, s = o("mood"), l = o("energy"), p = (b, f) => '<div class="feelMeter"><div class="feelMeterTop"><span>' + b + "</span><span>" + (f == null ? "—" : ee(un("", f))) + '</span></div><div class="feelTrack"><span style="width:' + (f == null ? 0 : Math.max(4, f)) + "%;background:" + (f == null ? "transparent" : Vs(f)) + '"></span></div></div>', x = i.filter((b) => b.mood != null && b.energy != null).sort((b, f) => f.mood + f.energy - (b.mood + b.energy))[0];
    e.innerHTML = '<div class="feelTop"><div class="feelSummary"><div class="feelHeadline">' + (s == null ? "No check-ins yet" : ee(un("", (s + l) / 2))) + '</div><div class="weekCopy">' + (s == null ? "Your first check-in will appear here." : "on average this week" + (x ? " · best day " + ee(new Intl.DateTimeFormat(void 0, { weekday: "long" }).format(x.d)) : "")) + '</div></div></div><div class="feelDays">' + i.map(
      (b) => '<div class="weekChip feelDay' + (b.future ? " future" : "") + (b.key === Pe(t) ? " today" : "") + '"><div class="weekChipTop"><strong>' + ee(new Intl.DateTimeFormat(void 0, { weekday: "short" }).format(b.d)) + "</strong>" + (b.count >= 2 ? '<span class="weekTick">' + At("check") + "</span>" : '<span class="feelDots">' + "●".repeat(b.count) + "</span>") + "</div>" + p("Mood", b.mood) + p("Energy", b.energy) + "</div>"
    ).join("") + "</div>";
  }
  const zi = a("upcomingCountSetting");
  zi.addEventListener("change", () => {
    pn = zi.value === "all" ? "all" : Number(zi.value), fr();
  });
  const ni = a("tempoRevealBtn"), Ia = a("tempoExperiment"), Lt = a("tempoQuad"), gn = a("tempoDot"), Ks = a("tempoEstimate"), Zs = a("tempoReadout");
  let hn = { x: 0.5, y: 0.5 }, ii = !1, Oi = { total: 20, work: 45, rest: 15 };
  function Ba(e, t, n, i) {
    const o = Math.max(t, Math.min(n, e));
    return Math.round((o - t) / i) * i + t;
  }
  function Js(e, t) {
    const n = (e - 0.5) * 2, i = (t - 0.5) * 2, o = Ba(
      Oi.total + n * 5 + i * 8,
      Number(v.min),
      Number(v.max),
      Number(v.step)
    ), s = Ba(
      Oi.work + n * 10 + i * 8,
      Number(h.min),
      Number(h.max),
      Number(h.step)
    ), l = Ba(
      Oi.rest + n * 6 + i * 6,
      Number(w.min),
      Number(w.max),
      Number(w.step)
    );
    return v.value = o, h.value = s, w.value = l, F.textContent = s + " sec", P.textContent = l + " sec", Ti(), { total: o, work: s, rest: l };
  }
  function Fa(e, t) {
    const n = e < 0.34 ? "Low" : e > 0.66 ? "Hard" : "Medium", i = t < 0.34 ? "Fast" : t > 0.66 ? "Slow" : "Balanced", o = Js(e, t);
    Zs.textContent = n + " + " + i, Ks.textContent = o.total + " min", Lt.setAttribute("aria-valuetext", n + " and " + i + ", estimated " + o.total + " minutes");
  }
  function Pa(e) {
    const t = Lt.getBoundingClientRect(), n = Math.max(0, Math.min(1, (e.clientX - t.left) / t.width)), i = Math.max(0, Math.min(1, (e.clientY - t.top) / t.height));
    hn = { x: n, y: i }, gn.style.left = n * 100 + "%", gn.style.top = i * 100 + "%", Fa(n, i);
  }
  ni.addEventListener("click", () => {
    const e = Ia.hidden;
    Ia.hidden = !e, ni.setAttribute("aria-expanded", e ? "true" : "false"), ni.textContent = e ? "Now close this" : "Don’t try this!", e && (Oi = {
      total: Number(v.value),
      work: Number(h.value),
      rest: Number(w.value)
    }, hn = { x: 0.5, y: 0.5 }, gn.style.left = "50%", gn.style.top = "50%", Fa(hn.x, hn.y));
  }), r.querySelectorAll("[data-feedback-rating]").forEach((e) => e.addEventListener("click", () => {
    Number(e.dataset.feedbackRating), r.querySelectorAll("[data-feedback-rating]").forEach((t) => t.classList.toggle("selected", t === e));
  }));
  const Vi = a("testingFeedbackForm"), ar = a("testingFeedbackThanks"), $s = a("testingFeedbackAgain");
  Vi.addEventListener("submit", (e) => {
    e.preventDefault(), Vi.hidden = !0, ar.hidden = !1, De("Feedback captured for prototype");
  }), $s.addEventListener("click", (e) => {
    e.preventDefault(), Vi.reset(), r.querySelectorAll("[data-feedback-rating]").forEach((t) => t.classList.remove("selected")), ar.hidden = !0, Vi.hidden = !1;
  }), Lt.addEventListener("pointerdown", (e) => {
    var t;
    ii = !0, Pa(e);
    try {
      (t = Lt.setPointerCapture) == null || t.call(Lt, e.pointerId);
    } catch {
    }
  }), Lt.addEventListener("pointermove", (e) => {
    ii && Pa(e);
  }), Lt.addEventListener("pointerup", (e) => {
    ii && (ii = !1, Pa(e), Te());
  }), Lt.addEventListener("pointercancel", () => ii = !1), Lt.addEventListener("keydown", (e) => {
    let { x: t, y: n } = hn, i = !0;
    e.key === "ArrowLeft" ? t -= 0.05 : e.key === "ArrowRight" ? t += 0.05 : e.key === "ArrowUp" ? n -= 0.05 : e.key === "ArrowDown" ? n += 0.05 : i = !1, i && (e.preventDefault(), t = Math.max(0, Math.min(1, t)), n = Math.max(0, Math.min(1, n)), hn = { x: t, y: n }, gn.style.left = t * 100 + "%", gn.style.top = n * 100 + "%", Fa(t, n), Te());
  });
  const at = a("workoutModal");
  let ai = null;
  function vn(e) {
    return e.map((t) => ({ ...t }));
  }
  function Xs() {
    const e = de[ve];
    return {
      key: ve,
      profile: e ? JSON.parse(JSON.stringify(e)) : null,
      warmup: vn(Le),
      strength: vn(_e),
      cooldown: vn($e),
      total: Number(v.value),
      work: Number(h.value),
      rest: Number(w.value),
      rounds: Number(E.value) || 1
    };
  }
  function or(e = !1) {
    Se = !!e, ut = null, bt = null, mt(), Jo(), ai = Xs(), a("moveEditorTitle").textContent = Se ? "Create new move" : "Edit move", a("moveEditorSubtitle").textContent = "Build the sequence first, then set timing, then finish the move.", a("moveEditorSubtitle").hidden = !Se, a("warmupRow").hidden = Se, a("deleteMoveOpen").hidden = Se;
    const t = a("createMoveOptions");
    t.hidden = !Se;
    {
      const n = de[ve];
      a("includeWarmupPreset").checked = !!(n != null && n.includeWarmup), a("includeCooldownPreset").checked = !!(n != null && n.includeCooldown);
    }
    if (rr(), Se) {
      a("useGlobalTiming").checked = !0, a("useGlobalRestTiming").checked = !0;
      const n = de[ve];
      fa((n == null ? void 0 : n.preset) || "movement", !1);
    }
    a("movementCreator").hidden = !0, qs("movement"), Ta(), Xn(), Ia.hidden = !0, ni.setAttribute("aria-expanded", "false"), ni.textContent = "Don’t try this!", at.classList.toggle("createMode", Se), at.querySelector(".modal").classList.toggle("createMode", Se), at.classList.add("open"), at.setAttribute("aria-hidden", "false"), Qt(), Se && Ye();
  }
  function Qs() {
    const e = de[ve];
    return e != null && e.customSequence ? !!e.includeWarmup : !(e != null && e.warmupOff);
  }
  function rr() {
    const e = Qs(), t = a("warmupSwitch");
    t.classList.toggle("on", e), t.setAttribute("aria-checked", String(e));
  }
  a("warmupSwitch").addEventListener("click", () => {
    const e = de[ve];
    e && (e.customSequence ? (a("includeWarmupPreset").checked = !e.includeWarmup, xa()) : (e.warmupOff = !e.warmupOff, Te()), rr());
  });
  function Gi() {
    mt(), Jo(), $o(), bt = null, ut = null, at.classList.contains("createMode") && k(), at.classList.remove("createMode"), at.querySelector(".modal").classList.remove("createMode"), at.classList.remove("open"), at.setAttribute("aria-hidden", "true");
  }
  function sr() {
    if (!ai) return;
    const e = ai;
    e.profile && (de[e.key] = JSON.parse(JSON.stringify(e.profile))), ve = e.key, Le = vn(e.warmup), _e = vn(e.strength), $e = vn(e.cooldown), v.value = e.total, h.value = e.work, w.value = e.rest, E.value = e.rounds || 1;
    const t = de[ve];
    if (t) {
      r.querySelectorAll(".workoutPanel[data-workout]").forEach((i) => i.classList.toggle("active", i.dataset.workout === ve));
      const n = r.querySelector(".workoutPanel.active");
      if (n) {
        const i = n.querySelector(".workoutName");
        i && (i.textContent = t.name);
        const o = n.querySelector(".panelCollapsedText");
        o && (o.textContent = t.name);
        const s = n.querySelector(".sourceTag");
        s && (s.textContent = t.source);
      }
      T.value = t.name;
    }
    Te();
  }
  a("cancelWorkoutEdit").addEventListener("click", () => {
    if (Se) {
      const e = ve;
      delete de[e], Se = !1, Rt = null, ht(he.order.find((t) => de[t]) || Object.keys(de)[0]);
    } else
      sr();
    Gi();
  }), a("saveWorkoutEdit").addEventListener("click", () => {
    mt(), Fe && Bi();
    const e = de[ve], t = T.value.trim() || "New move";
    if (e && (e.name = t), Ai(), ut = null, Te(), Se && e)
      ha(ve, e), r.querySelectorAll(".workoutPanel[data-workout]").forEach((n) => n.classList.toggle("active", n.dataset.workout === ve)), Se = !1, Rt = null, he.order.includes(ve) || he.order.push(ve), De("Move created");
    else {
      const n = r.querySelector(".workoutPanel.active");
      if (n) {
        const i = n.querySelector(".workoutName");
        i && (i.textContent = t);
        const o = n.querySelector(".panelCollapsedText");
        o && (o.textContent = t);
      }
      De("Move saved");
    }
    ai = null, Gi(), pt();
  }), at.addEventListener("click", (e) => {
    if (e.target === at) {
      if (Se) {
        const t = ve;
        delete de[t], Se = !1, Rt = null, ht(he.order.find((n) => de[n]) || Object.keys(de)[0]);
      } else
        sr();
      Gi();
    }
  }), Sa(a("addMovementBtn"), "movement"), Sa(a("addRestBtn"), "rest"), Sa(a("addVideoBtn"), "video"), a("closeMovementCreator").addEventListener("click", () => {
    a("movementCreator").hidden = !0;
  }), a("useGlobalTiming").addEventListener("change", Xn), a("useGlobalRestTiming").addEventListener("change", Xn), r.querySelectorAll(".createPresetBtn").forEach((e) => e.addEventListener("click", () => {
    fa(e.dataset.movePreset, !0), Te();
  })), a("includeWarmupPreset").addEventListener("change", xa), a("includeCooldownPreset").addEventListener("change", xa), a("includeWarmupPreset").addEventListener("change", we), a("includeCooldownPreset").addEventListener("change", we), T.addEventListener("input", we), T.addEventListener("input", Ma), a("confirmAddMovement").addEventListener("click", Ea), a("confirmAddRest").addEventListener("click", Ea), a("addMovementInput").addEventListener("keydown", (e) => {
    e.key === "Enter" && Ea();
  });
  const oi = a("countdown"), Ha = a("countNum"), Nt = a("countdownPixelCanvas");
  let ri = null, _a = "appear";
  class el {
    constructor(t, n, i, o, s, l, p) {
      this.width = t.width, this.height = t.height, this.ctx = n, this.x = i, this.y = o, this.color = s, this.speed = (Math.random() * 0.8 + 0.1) * l, this.size = 0, this.sizeStep = Math.random() * 0.4, this.minSize = 0.5, this.maxSizeInteger = 2, this.maxSize = Math.random() * (this.maxSizeInteger - this.minSize) + this.minSize, this.delay = p, this.counter = 0, this.counterStep = Math.random() * 4 + (this.width + this.height) * 0.01, this.isIdle = !1, this.isReverse = !1, this.isShimmer = !1;
    }
    draw() {
      const t = this.maxSizeInteger * 0.5 - this.size * 0.5;
      this.ctx.fillStyle = this.color, this.ctx.fillRect(this.x + t, this.y + t, this.size, this.size);
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
  let qa = [], lr = 1, dr = 1;
  function tn() {
    const e = parseFloat(getComputedStyle(a("app")).zoom);
    return Number.isFinite(e) && e > 0 ? e : 1;
  }
  function tl() {
    var b;
    if (!Nt) return;
    const e = tn(), t = Math.max(1, window.innerWidth / e), n = Math.max(1, window.innerHeight / e);
    lr = t, dr = n;
    const i = Math.min(window.devicePixelRatio || 1, 2);
    Nt.width = Math.floor(t * i), Nt.height = Math.floor(n * i), Nt.style.width = t + "px", Nt.style.height = n + "px";
    const o = Nt.getContext("2d");
    o.setTransform(i, 0, 0, i, 0, 0);
    const s = ["#f2fbff", "#d4effc", "#a9e0fa", "#6cc8f6"], l = 12, p = (b = window.matchMedia) == null ? void 0 : b.call(window, "(prefers-reduced-motion: reduce)").matches, x = p ? 0 : 0.055;
    qa = [];
    for (let f = 0; f < t; f += l)
      for (let g = 0; g < n; g += l) {
        const D = f - t / 2, Y = g - n / 2, H = Math.sqrt(D * D + Y * Y), N = p ? 0 : Math.random() * 75 + H * 0.05, R = new el({ width: t, height: n }, o, f, g, s[Math.floor(Math.random() * s.length)], x, N);
        R.maxSizeInteger = 4, R.maxSize = Math.random() * 3.2 + 0.8, R.sizeStep = 0.35 + Math.random() * 0.45, qa.push(R);
      }
  }
  function cr(e) {
    cancelAnimationFrame(ri), _a = e;
    const t = Nt == null ? void 0 : Nt.getContext("2d");
    if (!t) return;
    function n() {
      t.clearRect(0, 0, lr, dr);
      let i = !0;
      qa.forEach((o) => {
        o[_a](), o.isIdle || (i = !1);
      }), _a === "disappear" && i || (ri = requestAnimationFrame(n));
    }
    ri = requestAnimationFrame(n);
  }
  function Wi() {
    cancelAnimationFrame(ri), tl(), cr("appear"), setTimeout(() => cr("disappear"), 560);
  }
  window.addEventListener("resize", () => {
    oi.classList.contains("active") && Wi();
  });
  const si = a("pixelTrailCanvas"), fn = si.getContext("2d");
  let Dt = !0, xn = 0.7, bn = 600, li = [], wn = null, Vt = { x: 0, y: 0, ready: !1 };
  function pr() {
    const e = M.getBoundingClientRect(), t = tn(), n = Math.min(window.devicePixelRatio || 1, 2), i = Math.max(1, e.width / t), o = Math.max(1, e.height / t);
    si.width = Math.max(1, Math.floor(i * n)), si.height = Math.max(1, Math.floor(o * n)), si.style.width = i + "px", si.style.height = o + "px", fn.setTransform(n, 0, 0, n, 0, 0);
  }
  function nl(e, t) {
    if (!Dt) return;
    const n = performance.now();
    Vt.ready || (Vt = { x: e, y: t, ready: !0 });
    const i = 7;
    for (let o = 1; o <= i; o++) {
      const s = o / i;
      li.push({
        x: Vt.x + (e - Vt.x) * s,
        y: Vt.y + (t - Vt.y) * s,
        born: n - (i - o) * 10
      });
    }
    Vt = { x: e, y: t, ready: !0 };
  }
  function ji(e) {
    if (wn = null, !C) return;
    if (!ge.workout.classList.contains("active")) {
      wn = requestAnimationFrame(ji);
      return;
    }
    const t = M.getBoundingClientRect(), n = tn();
    fn.clearRect(0, 0, t.width / n, t.height / n), Dt && (li = li.filter((o) => e - o.born < bn), fn.fillStyle = a("app").classList.contains("light") ? "#03A9F4" : "#f4f4f4", li.forEach((o) => {
      const s = (e - o.born) / bn, l = (1 - s) * xn, p = Math.round(o.x / 14) * 14, x = Math.round(o.y / 14) * 14;
      fn.globalAlpha = Math.max(0, l);
      const b = 2 + 5 * (1 - s) * xn;
      fn.fillRect(p - b / 2, x - b / 2, b, b);
    }), fn.globalAlpha = 1), wn = requestAnimationFrame(ji);
  }
  M.addEventListener("pointermove", (e) => {
    const t = M.getBoundingClientRect(), n = tn();
    nl((e.clientX - t.left) / n, (e.clientY - t.top) / n);
  }), M.addEventListener("pointerleave", () => Vt.ready = !1), new ResizeObserver(pr).observe(M), pr(), wn = requestAnimationFrame(ji);
  const Gt = a("movementRippleCanvas"), yn = Gt.getContext("2d");
  let nn = !0, kn = null, il = performance.now();
  function ur() {
    const e = Gt.parentElement.getBoundingClientRect(), t = tn(), n = Math.max(1, e.width / t), i = Math.max(1, e.height / t), o = Math.min(window.devicePixelRatio || 1, 2);
    Gt.width = Math.max(1, Math.floor(n * o)), Gt.height = Math.max(1, Math.floor(i * o)), Gt.style.width = n + "px", Gt.style.height = i + "px", yn.setTransform(o, 0, 0, o, 0, 0);
  }
  function mr() {
    var e;
    return Qe || ((e = G[se]) == null ? void 0 : e.kind) === "rest";
  }
  function al() {
    const e = G[se];
    return mr() ? 2200 : e ? e.kind === "warmup" || e.kind === "cooldown" ? 2400 : 1350 : 1600;
  }
  function Ui(e) {
    if (kn = null, !C) return;
    if (!ge.workout.classList.contains("active")) {
      kn = requestAnimationFrame(Ui);
      return;
    }
    const t = Gt.parentElement.getBoundingClientRect(), n = tn(), i = Math.max(1, t.width / n), o = Math.max(1, t.height / n);
    if (yn.clearRect(0, 0, i, o), nn) {
      const s = al(), l = (e - il) % s / s, p = 15, x = Math.max(8, Math.round(p * o / Math.max(1, i))), b = i / (p + 1), f = o / (x + 1), g = i * 0.5, D = o * 0.52, Y = Math.hypot(g, D), N = a("app").classList.contains("light") ? "34,34,34" : "244,244,244";
      for (let R = 1; R <= x; R++)
        for (let ce = 1; ce <= p; ce++) {
          const ue = ce * b, _ = R * f, me = Math.hypot(ue - g, _ - D) / Y, ye = mr(), ne = ye ? Math.exp(-Math.pow((me - (l * 0.82 + 0.08) % 1 * 1.18) * 5.5, 2)) : 0, Z = Math.exp(-Math.pow((me - l * 1.25) * 7, 2)), Oe = ye ? ne : Z, Je = ye ? 0.5 + 0.5 * Math.sin(l * Math.PI * 2 - me * 3) ** 2 : 0.35 + 0.65 * Math.sin(l * Math.PI * 2 - me * 5) ** 2, Ne = ye ? 1.4 + Oe * 4.2 * Je : 1.2 + Oe * 5 * Je;
          yn.beginPath(), yn.arc(ue, _, Ne, 0, Math.PI * 2), yn.fillStyle = `rgba(${N},${ye ? 0.08 + Oe * 0.48 : 0.05 + Oe * 0.55})`, yn.fill();
        }
    }
    kn = requestAnimationFrame(Ui);
  }
  new ResizeObserver(ur).observe(Gt.parentElement), ur(), kn = requestAnimationFrame(Ui);
  const di = a("exerciseTitle"), It = a("exerciseMeta"), za = a("stepLabel"), Oa = a("digits"), gr = a("fill"), Sn = a("progress"), Va = a("pause"), ol = a("nextName"), rl = a("nextMeta"), sl = a("nextIcon"), Yi = a("skipNextSession");
  let vt = null;
  function ft(e) {
    for (let t = Math.max(0, e); t < G.length; t++)
      if (!G[t].sessionHidden) return t;
    return -1;
  }
  function ll() {
    const e = G[se];
    if (!e) return { name: "Complete", meta: "Move finished", icon: "check" };
    if (Qe) {
      const i = ft(se + 1), o = i >= 0 ? G[i] : null;
      return o ? { name: o.name, meta: Wa(o), icon: Ga(o) } : { name: "Complete", meta: "Move finished", icon: "check" };
    }
    if (e.rest > 0) return { name: "Rest", meta: e.rest + " sec · " + (e.roundBreakAfter ? "round " + (e.round + 1) + " next" : "recovery"), icon: "pause" };
    const t = ft(se + 1), n = t >= 0 ? G[t] : null;
    return n ? { name: n.name, meta: Wa(n), icon: Ga(n) } : { name: "Complete", meta: "Move finished", icon: "check" };
  }
  function dl() {
    if (!G[se]) return G.length;
    const t = ft(se + 1);
    return t < 0 ? G.length : t + 1;
  }
  function Ga(e) {
    return e.kind === "video" ? "play" : "clock";
  }
  function Wa(e) {
    return e.kind === "video" ? "YouTube · " + jn(e.duration) : e.group + " · " + e.duration + " sec";
  }
  function Ki() {
    return G.length && G[G.length - 1].round || 1;
  }
  function hr(e) {
    const t = G[e];
    if (!t) return "";
    const n = Ki();
    if (n <= 1) return "Step " + (e + 1) + " of " + G.length;
    if (t.roundBreak) return "Round " + t.round + " of " + n + " · Rest";
    const i = G.filter((o) => o.round === t.round && !o.roundBreak).length;
    return "Round " + t.round + " of " + n + " · Step " + (t.roundIndex + 1) + " of " + i;
  }
  function vr() {
    return Sn.querySelector('[data-step="' + se + '"]');
  }
  function cl() {
    G[se] && Number(Sn.dataset.round) !== (G[se].round || 1) && Ya(), [...Sn.children].forEach((e) => {
      const t = Number(e.dataset.step);
      e.classList.toggle("done", t < se), e.classList.toggle("active", t === se), e.classList.toggle("rewindable", t <= se), e.disabled = t > se, t === se && e.style.setProperty("--segment-progress", "0%");
    }), G[se] && (za.textContent = hr(se), on());
  }
  function pl(e) {
    const t = G.indexOf(e);
    t < 0 || t <= se || (e.sessionHidden = !e.sessionHidden, an(), De((e.sessionHidden ? "Hidden " : "Included ") + e.name + " for this session"));
  }
  function fr() {
    const e = a("upcomingList");
    if (!e) return;
    e.innerHTML = "";
    const t = dl(), n = G.slice(t);
    (pn === "all" ? n : n.slice(0, Math.max(1, Number(pn) || 1))).forEach((o) => {
      const s = document.createElement("section");
      s.className = "upcomingCard" + (o.sessionHidden ? " sessionHidden" : "") + (Qa(o) ? " noMeta" : ""), s.innerHTML = '<div class="upcomingInfo"><div class="upcomingIcon" aria-hidden="true">' + At(Ga(o)) + '</div><div><div class="upcomingName">' + ee(o.name) + '</div><div class="upcomingMeta">' + ee(Wa(o)) + (Ki() > 1 ? " · round " + o.round : "") + '</div></div></div><button class="skipSessionBtn" type="button">' + (o.sessionHidden ? "Include this session" : "Skip this session") + "</button>", s.querySelector(".skipSessionBtn").addEventListener("click", () => pl(o)), e.appendChild(s);
    });
  }
  function an() {
    var t;
    const e = ll();
    ol.textContent = e.name, rl.textContent = e.meta, sl.innerHTML = At(e.icon);
    {
      const n = Qe ? G[ft(se + 1)] : ((t = G[se]) == null ? void 0 : t.rest) > 0 ? { kind: "rest" } : G[ft(se + 1)];
      r.querySelector(".nextCard").classList.toggle("noMeta", !!(n && Qa(n)));
    }
    if (vt = null, Qe) {
      const n = ft(se + 1);
      n >= 0 && (vt = G[n]);
    } else {
      const n = G[se];
      if (n && n.rest > 0)
        vt = null;
      else {
        const i = ft(se + 1);
        i >= 0 && (vt = G[i]);
      }
    }
    Yi && (Yi.hidden = !vt, Yi.textContent = vt != null && vt.sessionHidden ? "Include this session" : "Skip this session"), fr();
  }
  Yi.addEventListener("click", () => {
    vt && (vt.sessionHidden = !vt.sessionHidden, De((vt.sessionHidden ? "Hidden " : "Included ") + vt.name + " for this session"), an());
  });
  let Tt = null, ja = null;
  function ci(e, t = {}) {
    const n = de[ve];
    u.fire(e, { move: (n == null ? void 0 : n.name) || "", move_id: ve, ...t });
  }
  function ul() {
    const e = de[ve];
    Tt = { key: ve, name: (e == null ? void 0 : e.name) || "Move", startedAt: Date.now(), active: 0 }, clearInterval(ja), ja = setInterval(() => {
      Tt && !St && Tt.active++;
    }, 1e3), ci("started", { steps: G.length });
  }
  function xr(e) {
    if (clearInterval(ja), !Tt) return;
    const t = Tt;
    Tt = null, ci(e ? "completed" : "ended", { seconds: t.active }), !(t.active < 30) && (he.history.unshift({ id: "h-" + t.startedAt, move_id: t.key, name: t.name, start: new Date(t.startedAt).toISOString(), seconds: t.active, completed: e }), he.history = he.history.slice(0, 1e3), pt(), rn(), Ft());
  }
  function ml() {
    m("workout"), gl();
    const e = ft(0);
    e >= 0 && G[e].kind === "video" && Sr(G[e]);
  }
  function Ua() {
    Ji(), xr(!1), clearInterval(Ve), clearInterval(Mi), Qe = !1, Bt(!1), a("app").classList.remove("resting"), oi.classList.remove("active"), m("home");
  }
  function gl() {
    oi.classList.add("active");
    let e = 5;
    Ha.textContent = e, requestAnimationFrame(Wi), clearInterval(Mi), Mi = setInterval(() => {
      e--, e > 0 ? (Ha.textContent = e, Wi()) : (clearInterval(Mi), Ha.textContent = "GO", Wi(), setTimeout(() => {
        oi.classList.remove("active"), cancelAnimationFrame(ri), vl();
      }, 650));
    }, 1e3);
  }
  function Ya() {
    var t;
    Sn.innerHTML = "";
    const e = ((t = G[Math.max(0, se)] || G[0]) == null ? void 0 : t.round) || 1;
    Sn.dataset.round = e, G.forEach((n, i) => {
      if ((n.round || 1) !== e) return;
      const o = document.createElement("button");
      o.dataset.step = i, o.type = "button", o.className = "progressSegment", o.setAttribute("aria-label", "Go to " + n.name), o.addEventListener("click", () => {
        i <= se && hl(i);
      }), Sn.appendChild(o);
    });
  }
  function Bt(e) {
    e = !!e;
    const t = St !== e;
    if (St = e, Va.textContent = e ? "Resume" : "Pause", a("app").classList.toggle("paused", e), ot && Ae)
      try {
        e ? Ae.pauseVideo() : Ae.playVideo();
      } catch {
      }
    t && Tt && ci(e ? "paused" : "resumed");
  }
  function hl(e) {
    e < 0 || e >= G.length || e > se || (clearInterval(Ve), Qe = !1, a("app").classList.remove("resting"), se = e, Bt(!1), Rn(), Ve = setInterval(Wt, 1e3));
  }
  function vl() {
    if (se = ft(0), Bt(!1), Ya(), se < 0) {
      di.textContent = "No activities", It.textContent = "Open Edit and enable or add a movement", It.hidden = !1;
      return;
    }
    ul(), Rn(), clearInterval(Ve), Ve = setInterval(Wt, 1e3);
  }
  const br = a("videoStage"), Cn = a("videoSound"), fl = 0, Mn = 1, xl = 2;
  let wr = 0, Ln = null, Tn = null, Ae = null, En = null, Zi = 0, Ka = !1, ot = null, Za = null;
  function yr() {
    var e;
    return (e = window.YT) != null && e.Player ? Promise.resolve(window.YT) : Ln || (Ln = new Promise((t, n) => {
      const i = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        try {
          i == null || i();
        } catch {
        }
      };
      const o = setInterval(() => {
        var l;
        (l = window.YT) != null && l.Player && (clearInterval(o), clearTimeout(s), t(window.YT));
      }, 100), s = setTimeout(() => {
        clearInterval(o), Ln = null, n(new Error("YouTube did not load"));
      }, 15e3);
      if (!document.querySelector('script[src*="youtube.com/iframe_api"]')) {
        const l = document.createElement("script");
        l.src = "https://www.youtube.com/iframe_api", l.async = !0, l.onerror = () => {
          clearInterval(o), clearTimeout(s), Ln = null, n(new Error("YouTube did not load"));
        }, document.head.appendChild(l);
      }
    }), Ln);
  }
  function kr() {
    return Tn || (Tn = yr().then((e) => new Promise((t) => {
      const n = document.createElement("div");
      a("videoFrame").appendChild(n), Ae = new e.Player(n, {
        width: "100%",
        height: "100%",
        playerVars: { playsinline: 1, rel: 0, iv_load_policy: 3, modestbranding: 1 },
        events: { onReady: () => t(Ae), onStateChange: (i) => wl(i.data), onError: (i) => yl(i.data) }
      });
    })), Tn.catch(() => {
      Tn = null;
    }), Tn);
  }
  function Sr(e) {
    !(e != null && e.videoId) || e.videoError || kr().then((t) => {
      ot || En === e.videoId || (En = e.videoId, Zi = Number(e.start) || 0, Ka = !1, t.mute(), t.loadVideoById({ videoId: e.videoId, startSeconds: Zi }));
    }).catch(() => {
    });
  }
  function bl() {
    const e = ft(se + 1);
    e >= 0 && G[e].kind === "video" && Sr(G[e]);
  }
  function wl(e) {
    if (!ot) {
      e === Mn && !Ka && (Ka = !0, Ae.pauseVideo(), Ae.seekTo(Zi, !0));
      return;
    }
    br.classList.toggle("playing", e === Mn), G[se] === ot && performance.now() > wr && (e === Mn && St ? Bt(!1) : e === xl && !St && Bt(!0)), e === Mn && Lr(ot.videoId, Ae.getDuration()) && pt(), e === fl && pi();
  }
  function yl(e) {
    const t = ot;
    if (!t) {
      En = null;
      return;
    }
    e === 101 || e === 150 ? (Cl(t.videoId), De("That video can’t play outside YouTube, so it was skipped")) : De("The video couldn’t play, so it was skipped"), pi();
  }
  function kl(e) {
    if (a("app").classList.add("videoStep"), Cn.hidden = !0, ot = e, clearTimeout(Za), !e.videoId) {
      De("This video step has no link yet, so it was skipped"), setTimeout(() => pi(), 0);
      return;
    }
    kr().then((t) => {
      if (ot !== e) return;
      wr = performance.now() + 1500;
      const n = Number(e.start) || 0;
      En !== e.videoId ? (En = e.videoId, Zi = n, t.loadVideoById({ videoId: e.videoId, startSeconds: n })) : (t.seekTo(n, !0), t.playVideo()), t.unMute(), St && t.pauseVideo(), Za = setTimeout(() => {
        ot !== e || St || (t.getPlayerState() !== Mn ? (t.mute(), t.playVideo(), Cn.hidden = !1) : t.isMuted() && (Cn.hidden = !1));
      }, 1600);
    }).catch(() => {
      ot === e && (De("YouTube didn’t load, so the video was skipped"), pi());
    });
  }
  function Cr() {
    if (!a("app").classList.contains("videoStep")) return;
    const e = r.querySelector(".workGrid"), t = r.querySelector(".sessionControlRow"), n = e.getBoundingClientRect().top, i = (t == null ? void 0 : t.offsetHeight) || 42, o = window.innerHeight - n - 16 - i - 84;
    e.style.setProperty("--theater-h", Math.max(240, Math.round(o)) + "px");
  }
  window.addEventListener("resize", Cr);
  function Ji() {
    clearTimeout(Za);
    const e = ot;
    if (ot = null, a("app").classList.remove("videoStep"), br.classList.remove("playing"), Cn.hidden = !0, e && Ae) {
      try {
        Ae.pauseVideo();
      } catch {
      }
      En = null;
    }
  }
  function pi() {
    const e = ot;
    !e || G[se] !== e || (Ji(), clearInterval(Ve), An(), Ve = setInterval(Wt, 1e3));
  }
  Cn.addEventListener("click", () => {
    Ae && (Ae.unMute(), Ae.playVideo()), Cn.hidden = !0;
  });
  function Sl(e) {
    var i;
    const t = Number(e.start) || 0;
    if (e.useVideoLength === !1) return t + (Number(e.duration) || 300);
    const n = Ae && ot === e && Number((i = Ae.getDuration) == null ? void 0 : i.call(Ae)) || 0;
    return Number(e.end) || n || Number(e.videoDuration) || t + (Number(e.duration) || 300);
  }
  function Mr(e, t) {
    const n = de[ve];
    [Le, _e, $e, n == null ? void 0 : n.warmup, n == null ? void 0 : n.strength, n == null ? void 0 : n.cooldown, n == null ? void 0 : n.sequence].forEach((i) => (Array.isArray(i) ? i : []).forEach((o) => {
      o && o.kind === "video" && o.videoId === e && t(o);
    }));
  }
  function Lr(e, t) {
    t = Math.round(Number(t) || 0);
    let n = !1;
    return e && t > 0 && Mr(e, (i) => {
      i.videoDuration !== t && (i.videoDuration = t, n = !0);
    }), n;
  }
  function Cl(e) {
    Mr(e, (t) => {
      t.videoError = "embed";
    }), pt();
  }
  function Ml(e) {
    const t = e.videoId;
    if (!t) return;
    const n = () => {
      at.classList.contains("open") ? ut || Te() : (Te(), pt());
    };
    fetch("https://www.youtube.com/oembed?format=json&url=" + encodeURIComponent("https://www.youtube.com/watch?v=" + t)).then((i) => i.ok ? i.json() : Promise.reject(i.status)).then((i) => {
      e.videoId === t && (e.videoTitle = i.title || "", e.autoName && i.title && (e.name = i.title), n());
    }).catch((i) => {
      e.videoId === t && i === 401 && (e.videoError = "embed", n());
    }), Ll(t).then((i) => {
      Lr(t, i) && n();
    }).catch((i) => {
      i === "embed" && e.videoId === t && (e.videoError = "embed", n());
    });
  }
  function Ll(e) {
    return yr().then((t) => new Promise((n, i) => {
      const o = document.createElement("div");
      o.className = "videoProbe", o.setAttribute("aria-hidden", "true");
      const s = document.createElement("div");
      o.appendChild(s), a("app").appendChild(o);
      let l = null, p = !1;
      const x = (g, D) => {
        p || (p = !0, clearTimeout(b), setTimeout(() => {
          try {
            l == null || l.destroy();
          } catch {
          }
          o.remove();
        }, 0), D ? i(D) : n(g));
      }, b = setTimeout(() => x(0), 2e4), f = () => {
        var D;
        const g = Number((D = l == null ? void 0 : l.getDuration) == null ? void 0 : D.call(l)) || 0;
        return g > 0 && x(g), g > 0;
      };
      l = new t.Player(s, {
        width: 320,
        height: 180,
        videoId: e,
        playerVars: { playsinline: 1, mute: 1, controls: 0 },
        events: {
          onReady: () => {
            f() || (l.mute(), l.playVideo());
          },
          onStateChange: () => f(),
          onError: (g) => x(0, g.data === 101 || g.data === 150 ? "embed" : "error")
        }
      });
    }));
  }
  function Rn() {
    Qe = !1;
    const e = G[se];
    a("app").classList.toggle("resting", e.kind === "rest"), e.kind === "video" ? kl(e) : Ji(), it = e.duration, Wn = e.duration, di.textContent = e.name, It.textContent = e.group, It.hidden = !0, za.textContent = hr(se), Tt && ci("step", { name: e.name, group: e.group, kind: e.kind, step: se + 1, of: G.length, round: e.round || 1, rounds: Ki(), duration: e.duration }), an(), cl(), bl(), e.kind === "video" && setTimeout(Cr, 0);
  }
  function on() {
    var o;
    const e = ((o = G[se]) == null ? void 0 : o.kind) === "video" && !Qe, t = e && it >= 60;
    Oa.textContent = t ? jn(it) : it, Oa.classList.toggle("long", t), e && (a("videoClock").textContent = jn(it) + " left");
    const n = it / Wn * 100;
    gr.style.width = n + "%";
    const i = vr();
    if (i && !Qe) {
      const s = 100 - n;
      i.style.setProperty("--segment-progress", s + "%");
    }
  }
  function Wt() {
    var t, n;
    if (St) return;
    const e = G[se];
    if ((e == null ? void 0 : e.kind) === "video" && !Qe && ot === e) {
      const i = Number((t = Ae == null ? void 0 : Ae.getCurrentTime) == null ? void 0 : t.call(Ae)) || 0, o = Number(e.start) || 0, s = Sl(e);
      Wn = Math.max(1, s - o), (i > o || ((n = Ae == null ? void 0 : Ae.getPlayerState) == null ? void 0 : n.call(Ae)) === Mn) && (it = Math.max(0, Math.ceil(s - i))), on(), i > o && i >= s - 0.25 && pi();
      return;
    }
    it--, on(), it <= 0 && (e.rest > 0 ? Tr(e.rest) : An());
  }
  function Tr(e) {
    var n;
    Qe = !0, a("app").classList.add("resting");
    const t = vr();
    t && t.style.setProperty("--segment-progress", "100%"), clearInterval(Ve), it = e, Wn = e, Tt && ci("rest", { duration: e }), di.textContent = "Rest", It.textContent = (n = G[se]) != null && n.roundBreakAfter ? "Round " + (G[se].round + 1) + " next" : "Recovery", an(), on(), Ve = setInterval(() => {
      St || (it--, on(), it <= 0 && (clearInterval(Ve), An(), Ve = setInterval(Wt, 1e3)));
    }, 1e3);
  }
  function An() {
    Qe = !1;
    const e = ft(se + 1);
    if (e >= 0)
      se = e, Rn();
    else {
      clearInterval(Ve), Ji(), Bt(!1), a("app").classList.remove("resting"), di.textContent = "Complete", It.textContent = "Move finished", It.hidden = !1, Oa.textContent = "✓";
      {
        const t = Ki();
        za.textContent = t > 1 ? t + " rounds done" : G.filter((n) => !n.roundBreak).length + " steps done";
      }
      xr(!0);
      {
        const t = Hr(7).reduce((n, i) => n + i.minutes, 0);
        It.textContent = "Move finished · " + t + " min in the last 7 days";
      }
      gr.style.width = "100%", an();
    }
  }
  a("skipExercise").addEventListener("click", () => {
    Tl(), Bt(!1);
  });
  function Tl() {
    clearInterval(Ve);
    const e = G[se];
    if (Qe) {
      Qe = !1, a("app").classList.remove("resting");
      const n = ft(se + 1);
      n >= 0 ? (se = n, Rn(), Ve = setInterval(Wt, 1e3)) : An();
      return;
    }
    if (e && e.rest > 0) {
      Tr(e.rest);
      return;
    }
    const t = ft(se + 1);
    t >= 0 ? (se = t, Rn(), Ve = setInterval(Wt, 1e3)) : An();
  }
  a("restartSegment").addEventListener("click", () => {
    if (clearInterval(Ve), Bt(!1), Qe) {
      const e = G[se];
      it = e.rest, Wn = e.rest, di.textContent = "Rest", It.textContent = "Recovery", a("app").classList.add("resting"), an(), on();
    } else
      Rn();
    Ve = setInterval(Qe ? () => {
      St || (it--, on(), it <= 0 && (clearInterval(Ve), An(), Ve = setInterval(Wt, 1e3)));
    } : Wt, 1e3);
  });
  function ui(e, t, n, i) {
    let o = 0, s = null, l = !1;
    function p() {
      s && cancelAnimationFrame(s), s = null, o = 0, l = !1, t.style.width = "0%", e.classList.remove("holding");
    }
    function x(g) {
      if (!l) return;
      o || (o = g);
      const D = Math.min(1, (g - o) / n);
      if (t.style.width = D * 100 + "%", D >= 1) {
        l = !1, s && cancelAnimationFrame(s), s = null, t.style.width = "100%", setTimeout(() => t.style.width = "0%", 90), i();
        return;
      }
      s = requestAnimationFrame(x);
    }
    function b(g) {
      var D;
      if (!(g && g.button !== void 0 && g.button !== 0)) {
        g == null || g.preventDefault(), p(), l = !0, e.classList.add("holding");
        try {
          (D = e.setPointerCapture) == null || D.call(e, g.pointerId);
        } catch {
        }
        s = requestAnimationFrame(x);
      }
    }
    function f() {
      l && p();
    }
    e.addEventListener("pointerdown", b), e.addEventListener("pointerup", f), e.addEventListener("pointercancel", f), e.addEventListener("lostpointercapture", f), e.addEventListener("keydown", (g) => {
      (g.key === " " || g.key === "Enter") && !g.repeat && b(g);
    }), e.addEventListener("keyup", (g) => {
      (g.key === " " || g.key === "Enter") && f();
    });
  }
  const El = a("endWorkout");
  ui(El, a("holdEndFill"), 1500, Ua);
  const Nn = a("deleteMoveConfirm");
  a("deleteMoveOpen").addEventListener("click", () => {
    Nn.classList.add("open"), Nn.setAttribute("aria-hidden", "false");
  }), a("deleteMoveCancel").addEventListener("click", () => {
    Nn.classList.remove("open"), Nn.setAttribute("aria-hidden", "true");
  });
  function Rl() {
    const e = ve, t = r.querySelector('.workoutPanel[data-workout="' + e + '"]');
    t && t.remove(), delete de[e], he.order = he.order.filter((i) => i !== e);
    let n = r.querySelector(".workoutPanel[data-workout]");
    if (!n) {
      const i = "custom-" + Date.now();
      de[i] = { name: "New move", source: "Custom routine", total: 20, work: 45, rest: 15, customSequence: !0, preset: "movement", sequence: [], strength: [] }, he.order.push(i), n = ha(i, de[i]);
    }
    Nn.classList.remove("open"), Nn.setAttribute("aria-hidden", "true"), ai = null, Gi(), ht(n.dataset.workout), pt(), De("Move deleted");
  }
  ui(a("deleteMoveYes"), a("deleteMoveFill"), 1500, Rl);
  const Ja = r.querySelector(".rubberTabs"), Dn = a("rubberIndicator");
  function mi(e, t = !0) {
    if (!e || !Ja || !Dn) return;
    const n = Ja.getBoundingClientRect(), i = e.getBoundingClientRect();
    Dn.style.transition = t ? "left .34s cubic-bezier(.2,1.35,.4,1),width .34s cubic-bezier(.2,1.35,.4,1),transform .18s ease" : "none";
    const o = tn();
    Dn.style.left = (i.left - n.left) / o + Ja.scrollLeft + "px", Dn.style.width = i.width / o + "px", t && (Dn.style.transform = "scaleX(1.08)", setTimeout(() => Dn.style.transform = "scaleX(1)", 180));
  }
  r.querySelectorAll(".tab").forEach((e) => e.addEventListener("click", () => {
    e.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "smooth" }), r.querySelectorAll(".tab").forEach((t) => t.classList.remove("active")), r.querySelectorAll(".settingsPane").forEach((t) => t.classList.remove("active")), e.classList.add("active"), a(e.dataset.pane).classList.add("active"), mi(e, !0);
  })), requestAnimationFrame(() => mi(r.querySelector(".tab.active"), !1)), window.addEventListener("resize", () => mi(r.querySelector(".tab.active"), !1));
  const $a = a("pixelTrailToggle"), Xa = a("rippleToggle"), In = a("trailStrength"), Bn = a("trailLife");
  function tt(e, t) {
    be()[e] = t, pt();
  }
  const Er = ["Warm-up", "Movement", "Cooldown", "Rest", "Video"];
  function Rr(e) {
    return e.kind === "rest" ? "rest" : e.kind === "video" ? "video" : "g:" + String(e.group || "").trim().toLowerCase();
  }
  function Qa(e) {
    var t;
    return !!((t = be().hideMeta) != null && t[Rr(e)]);
  }
  function Al() {
    const e = /* @__PURE__ */ new Map(), t = (n, i, o) => {
      if (!n) return;
      Array.isArray(n) && (n = { name: n[1], group: n[2], kind: "work" });
      const s = Rr(n);
      let l = e.get(s);
      l || (l = { key: s, label: s === "rest" ? "Rest" : s === "video" ? "Video" : String(n.group || "").trim() || "No type", kinds: /* @__PURE__ */ new Set(), moves: /* @__PURE__ */ new Set(), count: 0 }, e.set(s, l)), l.kinds.add(s === "rest" ? "Rest" : s === "video" ? "Video" : i), l.moves.add(o), l.count++;
    };
    return Object.values(de).forEach((n) => {
      const i = n.name || "Move";
      (n.warmup || (n.customSequence ? [] : Ke)).forEach((o) => t(o, "Warm-up", i)), (n.customSequence ? n.sequence || [] : n.strength || []).forEach((o) => t(o, o.presetRole === "warmup" ? "Warm-up" : o.presetRole === "cooldown" ? "Cooldown" : "Movement", i)), (n.cooldown || (n.customSequence ? [] : dn)).forEach((o) => t(o, "Cooldown", i));
    }), [["rest", "Rest"], ["video", "Video"]].forEach(([n, i]) => {
      e.has(n) || e.set(n, { key: n, label: i, kinds: /* @__PURE__ */ new Set([i]), moves: /* @__PURE__ */ new Set(), count: 0 });
    }), [...e.values()].map((n) => ({ ...n, kind: n.kinds.has("Movement") ? "Movement" : [...n.kinds][0], moves: [...n.moves] })).sort((n, i) => Er.indexOf(n.kind) - Er.indexOf(i.kind) || n.label.localeCompare(i.label));
  }
  let eo = "all";
  function to() {
    const e = a("metaSearch").value.trim().toLowerCase();
    return Al().filter((t) => (eo === "all" || t.kind === eo) && (!e || t.label.toLowerCase().includes(e) || t.moves.some((n) => n.toLowerCase().includes(e))));
  }
  function $i() {
    const e = a("metaTableBody");
    if (!e) return;
    const t = be().hideMeta || {}, n = to();
    e.innerHTML = n.length ? "" : '<tr class="metaEmpty"><td colspan="4">No types match</td></tr>', n.forEach((o) => {
      const s = !t[o.key], l = o.count ? (o.moves.length > 2 ? o.moves.slice(0, 2).join(", ") + " + " + (o.moves.length - 2) + " more" : o.moves.join(", ")) + " · " + o.count + " step" + (o.count === 1 ? "" : "s") : "Not used yet", p = document.createElement("tr");
      p.className = s ? "" : "off", p.innerHTML = '<td><div class="metaType">' + ee(o.label) + '</div><div class="metaSub">' + ee(o.kind + " · " + l) + '</div></td><td class="metaKindCol">' + ee(o.kind) + '</td><td class="metaUsedCol">' + ee(l) + '</td><td class="metaSwitchCol"><button class="switch' + (s ? " on" : "") + '" type="button" role="switch" aria-checked="' + s + '" aria-label="Second line for ' + ee(o.label) + ' on phones"></button></td>', p.querySelector(".switch").addEventListener("click", () => no([o.key], s)), e.appendChild(p);
    });
    const i = n.filter((o) => t[o.key]).length;
    a("metaCount").textContent = n.length ? n.length + " type" + (n.length === 1 ? "" : "s") + (i ? " · " + i + " hidden on phones" : "") : "";
  }
  function no(e, t) {
    const n = { ...be().hideMeta || {} };
    e.forEach((i) => {
      t ? n[i] = !0 : delete n[i];
    }), tt("hideMeta", n), $i(), ya(), an();
  }
  a("metaSearch").addEventListener("input", $i), a("metaKinds").querySelectorAll(".kindChip").forEach((e) => e.addEventListener("click", () => {
    eo = e.dataset.kind, a("metaKinds").querySelectorAll(".kindChip").forEach((t) => t.classList.toggle("active", t === e)), $i();
  })), a("metaHideAll").addEventListener("click", () => no(to().map((e) => e.key), !0)), a("metaShowAll").addEventListener("click", () => no(to().map((e) => e.key), !1));
  const jt = { feel: !0, steps: !0, mood: !0, energyLevel: !0, weather: !0, ...be().toggles || {} };
  function Ar() {
    r.querySelectorAll("[data-toggle]").forEach((n) => n.classList.toggle("on", jt[n.dataset.toggle] !== !1)), r.querySelector(".feelSection").hidden = !0, [["steps", "stepsRow"], ["mood", "moodRow"], ["energyLevel", "energyLevelRow"]].forEach(([n, i]) => {
      a(i).hidden = jt[n] === !1;
    });
    const e = ["steps", "mood", "energyLevel"].some((n) => jt[n] !== !1);
    r.querySelector(".activityCard").hidden = !e, a("weatherCard").hidden = jt.weather === !1;
    const t = r.querySelector("#homeView .grid");
    t.classList.toggle("noActivity", !e), t.classList.toggle("noWeather", jt.weather === !1);
  }
  r.querySelectorAll("[data-toggle]").forEach((e) => e.addEventListener("click", () => {
    jt[e.dataset.toggle] = jt[e.dataset.toggle] === !1, Ar(), tt("toggles", { ...jt });
  })), Ar();
  function Nl() {
    $a.classList.toggle("on", Dt), Xa.classList.toggle("on", nn), In.value = Math.round(xn * 100), a("trailStrengthValue").textContent = In.value + "%", Bn.value = bn, a("trailLifeValue").textContent = Bn.value + " ms";
  }
  be().trailEnabled !== void 0 && (Dt = be().trailEnabled), be().rippleEnabled !== void 0 && (nn = be().rippleEnabled), be().trailStrength !== void 0 && (xn = be().trailStrength), be().trailMaxAge !== void 0 && (bn = be().trailMaxAge), Nl(), $a.addEventListener("click", () => {
    Dt = !Dt, $a.classList.toggle("on", Dt), Dt || (li = []), tt("trailEnabled", Dt);
  }), Xa.addEventListener("click", () => {
    nn = !nn, Xa.classList.toggle("on", nn), tt("rippleEnabled", nn);
  }), In.addEventListener("input", () => {
    xn = Number(In.value) / 100, a("trailStrengthValue").textContent = In.value + "%";
  }), In.addEventListener("change", () => tt("trailStrength", xn)), Bn.addEventListener("input", () => {
    bn = Number(Bn.value), a("trailLifeValue").textContent = Bn.value + " ms";
  }), Bn.addEventListener("change", () => tt("trailMaxAge", bn)), zi.addEventListener("change", () => tt("upcomingCount", pn));
  function Nr(e) {
    r.querySelectorAll(".themeBtn").forEach((n) => n.classList.toggle("active", n.dataset.theme === e));
    const t = e === "light";
    a("app").classList.toggle("light", t), u.setLight(t), Et(r);
  }
  Nr(be().theme || "dark"), r.querySelectorAll(".themeBtn").forEach((e) => e.addEventListener("click", () => {
    Nr(e.dataset.theme), tt("theme", e.dataset.theme);
  }));
  const Ue = { steps: null, weather: null, ...be().entities || {} };
  let qe = null, io = {};
  function Dl(e) {
    const t = Object.values(e).filter((p) => p.entity_id.startsWith("sensor.") || p.entity_id.startsWith("input_number.")), n = (p) => p.attributes.friendly_name || p.entity_id, i = t.filter((p) => /step/i.test(p.entity_id) || /step/i.test(n(p)) || ["steps", "step"].includes(String(p.attributes.unit_of_measurement || "").toLowerCase())), o = t.filter((p) => !i.includes(p)), s = (p, x) => n(p).localeCompare(n(x)), l = (p, x) => /health_steps/.test(x.entity_id) - /health_steps/.test(p.entity_id) || s(p, x);
    return { suggested: i.sort(l), rest: o.sort(s), label: n };
  }
  function Dr(e) {
    const t = a("stepsEntity");
    if (!t || t.matches(":focus")) return;
    const { suggested: n, rest: i, label: o } = Dl(e), s = (x) => '<option value="' + ee(x.entity_id) + '">' + ee(o(x)) + "</option>";
    t.innerHTML = '<option value="">Not connected</option>' + (n.length ? '<optgroup label="Suggested">' + n.map(s).join("") + "</optgroup>" : "") + (i.length ? '<optgroup label="All sensors">' + i.map(s).join("") + "</optgroup>" : ""), t.value = Ue.steps || "";
    const l = a("stepsStatus"), p = Ue.steps && e[Ue.steps];
    l.textContent = p ? "Connected · " + o(p) : l.dataset.empty;
  }
  a("stepsEntity").addEventListener("change", () => {
    Ue.steps = a("stepsEntity").value || null, tt("entities", { ...Ue }), io = {}, Pr(), qe && (Dr(qe), Br(qe));
  });
  function Il(e, t = 0) {
    return new Intl.NumberFormat(void 0, { maximumFractionDigits: t }).format(e);
  }
  function Ir() {
    const e = Ue.steps && (qe == null ? void 0 : qe[Ue.steps]), t = Number(e == null ? void 0 : e.state);
    return Number.isFinite(t) ? t : null;
  }
  function Br(e) {
    var i;
    const t = Ue.steps, n = t ? Number((i = e[t]) == null ? void 0 : i.state) : NaN;
    a("stepsMeta").textContent = t ? Number.isFinite(n) ? Il(n) : "—" : "Set up in Settings";
  }
  let Fr = 0;
  async function Pr() {
    const e = Ue.steps;
    if (!e || !u.ws) return;
    Fr = Date.now();
    const t = /* @__PURE__ */ new Date(), n = new Date(t.getFullYear(), t.getMonth(), t.getDate() - 30);
    try {
      const i = await u.ws({ type: "recorder/statistics_during_period", start_time: n.toISOString(), end_time: t.toISOString(), statistic_ids: [e], period: "day", types: ["max"] }), o = (i == null ? void 0 : i[e]) || [], s = {};
      if (o.forEach((l) => {
        Number.isFinite(l.max) && (s[Pe(new Date(l.start))] = l.max);
      }), !Object.keys(s).length) {
        const l = await u.ws({ type: "history/history_during_period", start_time: n.toISOString(), end_time: t.toISOString(), entity_ids: [e], minimal_response: !0, no_attributes: !0, significant_changes_only: !1 });
        ((l == null ? void 0 : l[e]) || []).forEach((p) => {
          const x = Number(p.s ?? p.state), b = p.lu ? p.lu * 1e3 : Date.parse(p.last_updated || p.last_changed);
          if (!Number.isFinite(x) || !b) return;
          const f = Pe(new Date(b));
          s[f] = Math.max(s[f] || 0, x);
        });
      }
      io = s, Ft();
    } catch {
    }
  }
  function rn() {
    Ft();
  }
  rn(), setInterval(() => {
    rn(), ti(), en();
  }, 10 * 60 * 1e3);
  function Hr(e) {
    const t = {}, n = {};
    he.history.forEach((l) => {
      const p = Pe(new Date(l.start));
      t[p] = (t[p] || 0) + (l.seconds || 0) / 60, n[p] = (n[p] || 0) + 1;
    });
    const i = /* @__PURE__ */ new Date(), o = Pe(i), s = [];
    for (let l = e - 1; l >= 0; l--) {
      const p = new Date(i.getFullYear(), i.getMonth(), i.getDate() - l), x = Pe(p), b = he.checkins.filter((g) => g.date === x), f = (g) => {
        const D = b.map((Y) => Y[g]).filter(Boolean);
        return D.length ? D.reduce((Y, H) => Y + H, 0) / D.length : null;
      };
      s.push({
        key: x,
        date: p,
        minutes: Math.round(t[x] || 0),
        moves: n[x] || 0,
        steps: x === o && Ir() != null ? Ir() : io[x] ?? null,
        mood: f("mood"),
        energy: f("energy")
      });
    }
    return s;
  }
  function Bl(e) {
    let t = e.length - 1;
    e[t] && !e[t].minutes && t--;
    let n = 0;
    for (; t >= 0 && e[t].minutes > 0; )
      n++, t--;
    return n;
  }
  function Ft() {
    const e = a("insightCard");
    if (!e) return;
    const t = Hr(30), n = Bl(t), i = t.reduce((b, f) => b + f.minutes, 0), o = /* @__PURE__ */ new Date(), s = Pe(o), l = Pe(new Date(o.getFullYear(), o.getMonth(), o.getDate() - (o.getDay() + 6) % 7)), p = t.filter((b) => b.key >= l && b.key <= s).reduce((b, f) => b + f.minutes, 0), x = (b, f, g) => '<div class="activityRow"><div class="activityRowIcon" aria-hidden="true">' + b + '</div><div><div class="activityRowName">' + ee(f) + '</div><div class="activityRowMeta">' + ee(g) + "</div></div></div>";
    e.innerHTML = '<div class="activityHeader"><div class="activityIcon" aria-hidden="true">' + At("move") + '</div><div class="activityTitle">Movement</div></div><div class="activityRows jointRows">' + x(At("clock"), "This week", p + " min") + x(At("streak"), "Streak", n + " day" + (n === 1 ? "" : "s")) + x(At("calendar"), "30 days", i + " min") + "</div>";
  }
  const ao = {
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
  }, Fl = (e) => e === "sunny" ? "clear" : e === "clear-night" ? "night" : e === "partlycloudy" ? "partly" : ["rainy", "pouring", "lightning", "lightning-rainy", "hail"].includes(e) ? "rain" : ["snowy", "snowy-rainy"].includes(e) ? "snow" : "cloudy", Fn = { s: "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", sp: "M41.025 27.045C40.5181 24.4943 39.142 22.1985 37.1315 20.5491C35.121 18.8996 32.6005 17.9987 30 18C25.665 18 21.9 20.46 20.025 24.045C17.8191 24.2867 15.7801 25.3344 14.2991 26.987C12.8181 28.6396 11.9994 30.7809 12 33C12 35.3869 12.9482 37.6761 14.636 39.364C16.3239 41.0518 18.6131 42 21 42H40.5C41.4849 42 42.4602 41.806 43.3701 41.4291C44.2801 41.0522 45.1069 40.4997 45.8033 39.8033C46.4997 39.1069 47.0522 38.2801 47.4291 37.3701C47.806 36.4602 48 35.4849 48 34.5C48 30.54 44.925 27.33 41.025 27.045Z", lp: "M70.8016 48.008C69.9751 43.8493 67.7316 40.1062 64.4536 37.4168C61.1755 34.7275 57.0661 33.2587 52.8261 33.2607C45.7581 33.2607 39.6196 37.2716 36.5625 43.1167C32.9659 43.5108 29.6414 45.219 27.2267 47.9135C24.8121 50.608 23.4772 54.0991 23.4783 57.7173C23.4783 61.609 25.0243 65.3414 27.7761 68.0933C30.528 70.8452 34.2604 72.3912 38.1522 72.3912H69.9456C71.5515 72.3912 73.1416 72.0749 74.6252 71.4604C76.1088 70.8458 77.4568 69.9451 78.5923 68.8096C79.7278 67.6741 80.6286 66.3261 81.2431 64.8425C81.8576 63.3589 82.1739 61.7688 82.1739 60.1629C82.1739 53.7064 77.1603 48.4727 70.8016 48.008Z", lc: "M65.3723 37.5398C64.4356 32.8266 61.8929 28.5843 58.1778 25.5364C54.4627 22.4885 49.8054 20.8238 45 20.8262C36.9897 20.8262 30.0326 25.3718 26.5679 31.9963C22.4918 32.4429 18.724 34.3788 15.9874 37.4326C13.2508 40.4864 11.738 44.443 11.7391 48.5436C11.7391 52.9542 13.4913 57.1842 16.6101 60.3031C19.7289 63.4219 23.9589 65.174 28.3696 65.174H64.4022C66.2221 65.174 68.0243 64.8155 69.7057 64.1191C71.3871 63.4226 72.9149 62.4018 74.2018 61.1149C75.4887 59.828 76.5095 58.3002 77.2059 56.6188C77.9024 54.9374 78.2609 53.1353 78.2609 51.3153C78.2609 43.9979 72.5788 38.0664 65.3723 37.5398Z", lr: "M62.9755 28.4431C62.149 24.2844 59.9055 20.5412 56.6275 17.8519C53.3494 15.1626 49.24 13.6937 45 13.6958C37.9321 13.6958 31.7935 17.7067 28.7364 23.5518C25.1398 23.9459 21.8153 25.654 19.4006 28.3485C16.986 31.043 15.6511 34.5342 15.6522 38.1523C15.6522 42.0441 17.1982 45.7765 19.9501 48.5284C22.7019 51.2802 26.4343 52.8262 30.3261 52.8262H62.1196C63.7254 52.8262 65.3155 52.5099 66.7991 51.8954C68.2827 51.2809 69.6307 50.3802 70.7662 49.2447C71.9017 48.1092 72.8025 46.7611 73.417 45.2775C74.0315 43.7939 74.3478 42.2038 74.3478 40.598C74.3478 34.1415 69.3342 28.9078 62.9755 28.4431Z" }, Xi = {
    s: ["M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", 6.11, 40],
    l: ["M41.1747 11.959C37.7298 16.5251 35.6875 22.2086 35.6874 28.3691C35.6874 43.4321 47.8979 55.6435 62.9608 55.6436C68.3701 55.6436 73.411 54.0676 77.6512 51.3516C74.6865 66.6826 61.197 78.2607 44.9999 78.2607C26.6305 78.2607 11.7391 63.3694 11.7391 45C11.7392 27.9244 24.6071 13.8562 41.1747 11.959Z", 11.96, 78.26],
    sp: ["M16.6201 5.0791C15.3771 6.72655 14.6397 8.7772 14.6396 11C14.6396 16.4345 19.046 20.8398 24.4805 20.8398C26.4326 20.8398 28.2502 20.2686 29.7803 19.2881C28.7119 24.821 23.8449 29 18 29C11.3726 29 6 23.6274 6 17C6 10.8393 10.6426 5.76349 16.6201 5.0791Z", 5.08, 29],
    lp: ["M32.5175 9.93848C30.0859 13.1616 28.6435 17.1729 28.6434 21.5215C28.6434 32.1541 37.2628 40.7733 47.8954 40.7734C51.7136 40.7734 55.2724 39.6622 58.2655 37.7451C56.1724 48.5666 46.6506 56.7391 35.2177 56.7393C22.251 56.7393 11.7391 46.2274 11.7391 33.2607C11.7393 21.2073 20.8226 11.2776 32.5175 9.93848Z", 9.94, 56.74]
  };
  let _r = 0;
  const oo = (e, t) => '<path class="' + t + '" d="' + e + '"/>', Pl = (e, t) => ' style="animation-delay:-' + Math.round(e * 137 % t) + 'ms"', yt = (e, t, n, i) => {
    const o = n * 0.2687;
    return '<path class="wxTwinkle" fill="#fff"' + (i < 1 ? ' opacity="' + i + '"' : "") + Pl(e, 2400) + ' d="M' + e + " " + (t - n) + "L" + (e + o) + " " + (t - o) + "L" + (e + n) + " " + t + "L" + (e + o) + " " + (t + o) + "L" + e + " " + (t + n) + "L" + (e - o) + " " + (t + o) + "L" + (e - n) + " " + t + "L" + (e - o) + " " + (t - o) + 'Z"/>';
  }, qr = ([e, t, n], i) => '<path class="wxMoonPath" d="' + e + '" fill="url(#' + i + ')"/><defs><linearGradient id="' + i + '" x1="0" y1="' + t + '" x2="0" y2="' + n + '" gradientUnits="userSpaceOnUse"><stop stop-color="#FFF4C7"/><stop offset="1" stop-color="#F2C95E"/></linearGradient></defs>', Hl = (e, t) => t ? '<circle class="wxSunDisc" cx="45" cy="45" r="33.26" fill="url(#' + e + ')"/><defs><linearGradient id="' + e + '" x1="12" y1="8.5" x2="67" y2="73.5" gradientUnits="userSpaceOnUse"><stop offset=".653" stop-color="#FFE100"/><stop offset="1" stop-color="#F2C159"/></linearGradient></defs>' : '<circle class="wxSunDisc" cx="23" cy="23" r="17" fill="url(#' + e + ')"/><defs><linearGradient id="' + e + '" x1="23" y1="6" x2="23" y2="40" gradientUnits="userSpaceOnUse"><stop offset=".606" stop-color="#FFE100"/><stop offset="1" stop-color="#FFAA00"/></linearGradient></defs>', _l = (e) => (e ? ["29.35", "43.04", "56.74"].map((t, n) => '<g class="wxDrop" style="animation-delay:-' + n * 317 + 'ms"><rect class="wxAccent" x="' + t + '" y="60.65" width="5.87" height="15.65" rx="2.93" transform="rotate(12 ' + t + ' 60.65)"/></g>') : [19, 26, 33].map((t, n) => '<g class="wxDrop" style="animation-delay:-' + n * 317 + 'ms"><rect class="wxAccent" width="3.03" height="9.41" rx="1.51" transform="matrix(0.9698 0.244 -0.1768 0.9843 ' + t + ' 38)"/></g>')).join(""), ql = (e) => (e ? [[33.67, 67.67], [47.67, 64.67], [61.67, 67.67], [40.67, 77.67], [54.67, 77.67]] : [[21.2, 42.2], [29.2, 40.2], [37.2, 42.2], [25.2, 48.2], [33.2, 48.2]]).map(([t, n], i) => '<circle class="wxFlake" style="animation-delay:-' + i * 640 + 'ms" cx="' + t + '" cy="' + n + '" r="' + (e ? 3.67 : 2.2) + '" fill="#fff"/>').join("");
  function zr(e, t, n, i) {
    return e === "clear" ? t ? qr(n ? Xi.l : Xi.s, i) + (n ? yt(70, 20, 5.83, 1) + yt(78.33, 41.67, 3.75, 0.8) + yt(60, 71.67, 3.33, 0.6) : yt(42, 12, 3.5, 1) + yt(47, 25, 2.25, 0.8) + yt(36, 43, 2, 0.6)) : Hl(i, n) : e === "partly" ? (t ? qr(n ? Xi.lp : Xi.sp, i) : n ? '<circle class="wxSunDisc" cx="35.22" cy="33.26" r="23.48" fill="#FFE100"/>' : '<circle class="wxSunDisc" cx="18" cy="17" r="12" fill="#FFE100"/>') + oo(n ? Fn.lp : Fn.sp, t ? "wxCloudLight" : "wxBright") + (t ? n ? yt(73.33, 16.67, 4.17, 0.9) : yt(44, 10, 2.5, 0.9) : "") : e === "cloudy" ? oo(n ? Fn.lc : Fn.s, t ? "wxCloudLight" : "wxBright") + (t ? n ? yt(15, 15, 3.75, 0.8) + yt(76.67, 13.33, 2.92, 0.6) : yt(9, 9, 2.25, 0.8) + yt(46, 8, 1.75, 0.6) : "") : oo(n ? Fn.lr : Fn.s, "wxCloudLight") + (e === "rain" ? _l(n) : ql(n));
  }
  const zl = () => {
    var e;
    return ((e = qe == null ? void 0 : qe["sun.sun"]) == null ? void 0 : e.state) === "below_horizon";
  };
  let nt = be().weatherStyle || "bitmap", gi = be().weatherLayout === "strip" ? "strip" : "tiles", Pn = be().weatherMotion !== !1;
  const hi = () => Pn && !wt(), vi = /* @__PURE__ */ new Map(), ro = 700, Ol = (e) => {
    const [t, n] = e.split("/");
    return { k: t === "fog" ? "cloudy" : t === "storm" ? "rain" : t, night: n === "night" };
  };
  function fi(e, t, n, i = nt, o, s) {
    let l = Fl(e);
    const p = l === "night" || (s != null ? !!s : !!n && zl());
    l === "night" && (l = "clear");
    const x = t ? 90 : 54, b = ys(e, p), f = performance.now();
    let g = o ? vi.get(o) : null;
    if (o && !g ? vi.set(o, g = { key: b, t0: -1e9 }) : g && g.key !== b && (g.fromKey = g.key, g.from = g.last || null, g.key = b, g.t0 = f), i !== "smooth") return '<span class="wxIcon pixels' + (t ? " large" : "") + '" aria-hidden="true"><canvas data-wx="' + b + '"' + (o ? ' data-wx-slot="' + o + '"' : "") + ' data-wx-style="' + i + '" data-wx-size="' + x + '"></canvas></span>';
    let D = "";
    if (g && f - g.t0 < ro && (hi() || wt())) {
      const Y = Ol(g.fromKey);
      D = '<span class="wxLayer wxOut ' + Y.k + (Y.night ? " night" : "") + '" style="animation-delay:' + Math.round(g.t0 - f) + 'ms"><svg viewBox="0 0 ' + x + " " + x + '">' + zr(Y.k, Y.night, t, "wxg" + ++_r) + "</svg></span>";
    }
    return '<span class="wxIcon ' + l + (p ? " night" : "") + (t ? " large" : "") + '" aria-hidden="true"><svg viewBox="0 0 ' + x + " " + x + '">' + zr(l, p, t, "wxg" + ++_r) + "</svg>" + D + "</span>";
  }
  function Qi() {
    const e = a("app"), t = getComputedStyle(e), n = (p) => t.getPropertyValue(p).trim(), i = {};
    [["skyClearDay", "--wx-clear"], ["skyClearNight", "--wx-night"], ["skyCloudyDay", "--wx-cloudy"], ["cloudDay", "--wx-cloud-bright"], ["cloudNight", "--wx-cloudy"], ["rain", "--color-accent-primary"]].forEach(([p, x]) => {
      n(x) && (i[p] = n(x));
    });
    const o = n("--color-text-primary") || "#f1f1f1", s = n("--color-bg-card") || "#222222", l = e.classList.contains("light");
    return { colors: i, ink: l ? o : s, paper: l ? s : o };
  }
  function Et(e, t = performance.now()) {
    const n = e.querySelectorAll("canvas[data-wx]");
    if (!n.length) return;
    const i = Qi(), o = hi(), s = wt();
    n.forEach((l) => {
      var g;
      const p = l.dataset.wx, x = l.dataset.wxSlot ? vi.get(l.dataset.wxSlot) : null;
      let b = hs(p, i.colors);
      if (x && x.key === p) {
        const D = (t - x.t0) / ro;
        D < 1 && (o || s) && (b = id(x.from || hs(x.fromKey, i.colors), b, Math.max(0, D), i.colors, s)), x.last = b;
      }
      const f = ld(b, { size: Number(l.dataset.wxSize) || 54, px: 2, oneBit: l.dataset.wxStyle === "onebit", colors: i.colors, ink: i.ink, paper: i.paper, clock: t, idle: o });
      l.width !== f.w && (l.width = f.w), l.height !== f.h && (l.height = f.h), (g = l.getContext("2d")) == null || g.putImageData(new ImageData(f.data, f.w, f.h), 0, 0);
    });
  }
  let ea = null, Or = -1;
  function Vr(e) {
    if (ea = null, !C) return;
    const t = hi(), n = Math.floor(e / 100), i = [...vi.values()].some((x) => e - x.t0 < ro), o = [...xi.values()].some((x) => e - x.t0 < x.dur), s = ge.home.classList.contains("active"), l = gt.classList.contains("open"), p = t && nt === "smooth" && (l || s && gi === "strip");
    !document.hidden && (i || o || p || t && n !== Or) && (Or = n, s && (Et(a("weatherCard"), e), bi(a("weatherCard"), e)), ge.settings.classList.contains("active") && Et(yi, e), l && (Et(gt, e), bi(gt, e))), (t || i || o) && (ea = requestAnimationFrame(Vr));
  }
  function Ut() {
    a("app").classList.toggle("wxMotion", hi()), !ea && C && (ea = requestAnimationFrame(Vr));
  }
  let ta = [], Hn, na = null, so = !1;
  const ze = 36e5, Vl = /* @__PURE__ */ new Set(["rainy", "pouring", "lightning", "lightning-rainy", "hail", "snowy", "snowy-rainy"]);
  let ia = [], aa = null, oa = null;
  function Pt() {
    const e = /* @__PURE__ */ new Date(), t = (s, l) => new Date(e.getFullYear(), e.getMonth(), e.getDate() + s, l), n = aa === "hourly" ? ia.map((s) => ({ t: +new Date(s.datetime), c: s.condition, temp: Number(s.temperature) })).filter((s) => Number.isFinite(s.t)).sort((s, l) => s.t - l.t) : [], i = aa === "twice_daily" ? ia : [], o = [...Array(6)].map((s, l) => {
      const p = t(l, 6), x = t(l, 18), b = t(l + 1, 6), f = ta.find((D) => Pe(new Date(D.datetime)) === Pe(p)), g = (D, Y, H) => {
        const N = n.filter((ue) => ue.t >= +D && ue.t < +Y);
        if (N.length) {
          const ue = {};
          return N.forEach((_) => {
            ue[_.c] = (ue[_.c] || 0) + (Vl.has(_.c) ? 2 : 1);
          }), Object.entries(ue).sort((_, me) => me[1] - _[1])[0][0];
        }
        const R = i.find((ue) => {
          const _ = +new Date(ue.datetime);
          return _ >= +D - 3 * ze && _ < +Y && (ue.is_daytime == null || !!ue.is_daytime == !H);
        });
        if (R) return R.condition;
        const ce = (f == null ? void 0 : f.condition) || "cloudy";
        return H && ce === "sunny" ? "clear-night" : ce;
      };
      return { start: +p, end: +b, day: g(p, x, !1), night: g(x, b, !0), hi: Number(f == null ? void 0 : f.temperature), lo: Number(f == null ? void 0 : f.templow) };
    });
    return { days: o, hours: n, start: o[0].start, end: o[5].end };
  }
  const Gr = (e, t) => {
    const n = e.days.findIndex((o) => t < o.end);
    if (n < 0) return 1;
    const i = e.days[n];
    return Math.max(0, (n + (t - i.start) / (i.end - i.start)) / 6);
  }, Gl = (e, t) => {
    const n = Math.max(0, Math.min(0.99999, t)) * 6, i = Math.floor(n), o = e.days[i];
    return o.start + (n - i) * (o.end - o.start);
  };
  function lo(e, t) {
    const n = Math.max(0, e.days.findIndex((x) => t < x.end)), i = e.days[n], o = (t - i.start) / (i.end - i.start) >= 0.5;
    let s = o ? i.night : i.day, l = NaN;
    const p = e.hours;
    if (p.length && t >= p[0].t - ze && t <= p[p.length - 1].t + ze) {
      let x = p.findIndex((g) => g.t > t);
      x < 0 && (x = p.length);
      const b = p[Math.max(0, x - 1)], f = p[Math.min(p.length - 1, x)];
      s = b.c || s, l = f.t > b.t ? b.temp + (f.temp - b.temp) * Math.max(0, Math.min(1, (t - b.t) / (f.t - b.t))) : b.temp;
    }
    if (!Number.isFinite(l)) {
      const x = [];
      if (e.days.forEach((b) => {
        Number.isFinite(b.lo) && x.push([b.start - ze, b.lo]), Number.isFinite(b.hi) && x.push([b.start + 9 * ze, b.hi]);
      }), x.length) {
        l = t <= x[0][0] ? x[0][1] : x[x.length - 1][1];
        for (let b = 1; b < x.length; b++) if (t <= x[b][0] && t > x[b - 1][0]) {
          const [f, g] = x[b - 1], [D, Y] = x[b];
          l = g + (Y - g) * (1 - Math.cos(Math.PI * (t - f) / (D - f))) / 2;
          break;
        }
      }
    }
    return { cond: o && s === "sunny" ? "clear-night" : s, temp: l, night: o, day: i };
  }
  const Wr = (e) => Pe(new Date(e)) === Pe(/* @__PURE__ */ new Date()) ? "Today" : new Intl.DateTimeFormat(void 0, { weekday: "short" }).format(new Date(e)), xi = /* @__PURE__ */ new Map(), Wl = 900, jl = 700;
  let ra = null;
  const kt = typeof ResizeObserver == "function" ? new ResizeObserver((e) => e.forEach((t) => {
    bi(t.target.parentElement), t.target.closest("#wxDialog") && $r();
  })) : null;
  function bi(e, t = performance.now()) {
    const n = e.querySelectorAll("canvas[data-wx-strip]");
    if (!n.length) return;
    const i = Pt(), o = i.days.flatMap((g) => [{ cond: g.day, night: !1 }, { cond: g.night, night: !0 }]), s = o.map((g) => g.cond).join(), l = Qi(), p = hi(), x = wt(), b = Number(Pe(new Date(i.start)).replace(/\D/g, "")) % 9973;
    let f = !1;
    n.forEach((g) => {
      var ue;
      const D = g.clientWidth, Y = g.clientHeight;
      if (!D || !Y) return;
      const H = g.dataset.wxStrip;
      let N = xi.get(H);
      N ? N.sig !== s && (N.prev = N.segs, N.sig = s, N.segs = o, N.t0 = t, N.dur = jl) : xi.set(H, N = { sig: s, segs: o, prev: null, t0: t, dur: Wl });
      const R = p || x ? Math.min(1, Math.max(0, (t - N.t0) / N.dur)) : 1;
      R < 1 && (f = !0);
      const ce = { width: D, height: Y, colors: l.colors, clock: t, ambient: p, seed: b, reveal: x ? R : 1 - Math.pow(1 - R, 3), prev: R < 1 ? N.prev : null, reduce: x };
      if (nt === "smooth") {
        const _ = Math.min(2, window.devicePixelRatio || 1), me = Math.round(D * _), ye = Math.round(Y * _);
        g.width !== me && (g.width = me), g.height !== ye && (g.height = ye);
        const ne = g.getContext("2d");
        if (!ne) return;
        ne.setTransform(_, 0, 0, _, 0, 0), bd(ne, o, ce);
      } else {
        const _ = xd(o, { ...ce, px: 2, oneBit: nt === "onebit", ink: l.ink, paper: l.paper });
        g.width !== _.w && (g.width = _.w), g.height !== _.h && (g.height = _.h), (ue = g.getContext("2d")) == null || ue.putImageData(new ImageData(_.data, _.w, _.h), 0, 0);
      }
    }), f && Ut();
  }
  function Ul(e) {
    return Object.values(e).filter((t) => t.entity_id.startsWith("weather.")).sort((t, n) => (t.attributes.friendly_name || t.entity_id).localeCompare(n.attributes.friendly_name || n.entity_id));
  }
  function jr(e) {
    const t = a("weatherEntity");
    if (!t || t.matches(":focus")) return;
    const n = Ul(e);
    t.innerHTML = '<option value="">Not connected</option>' + n.map((o) => '<option value="' + ee(o.entity_id) + '">' + ee(o.attributes.friendly_name || o.entity_id) + "</option>").join(""), t.value = Ue.weather || "";
    const i = Ue.weather && e[Ue.weather];
    a("weatherStatus").textContent = i ? "Connected · " + (i.attributes.friendly_name || i.entity_id) : a("weatherStatus").dataset.empty;
  }
  function Ur() {
    const e = Ue.weather || null;
    if (e === Hn) return;
    if (Hn = e, ta = [], so = !1, ia = [], aa = null, [na, oa].forEach((n) => n == null ? void 0 : n.then((i) => typeof i == "function" && i()).catch(() => {
    })), na = null, oa = null, !e || !u.subscribe) {
      Ht();
      return;
    }
    na = u.subscribe({ type: "weather/subscribe_forecast", forecast_type: "daily", entity_id: e }, (n) => {
      Hn === e && (ta = Array.isArray(n == null ? void 0 : n.forecast) ? n.forecast : [], Ht());
    }), na.catch(() => {
      Hn === e && (so = !0, Ht());
    });
    const t = (n) => {
      const i = u.subscribe({ type: "weather/subscribe_forecast", forecast_type: n, entity_id: e }, (o) => {
        Hn === e && (ia = Array.isArray(o == null ? void 0 : o.forecast) ? o.forecast : [], aa = n, Ht());
      });
      return i.catch(() => {
        Hn === e && n === "hourly" && (oa = t("twice_daily"));
      }), i;
    };
    oa = t("hourly"), Ht();
  }
  a("weatherEntity").addEventListener("change", () => {
    Ue.weather = a("weatherEntity").value || null, tt("entities", { ...Ue }), qe && jr(qe), Ur();
  });
  function Ht() {
    const e = a("weatherCard");
    if (!e) return;
    const t = Ue.weather, n = t && (qe == null ? void 0 : qe[t]);
    if (!n) {
      e.innerHTML = '<div class="activityHeader"><div class="activityTitle">Weather</div></div><div class="activityRows"><div class="activityRow">' + fi("cloudy") + '<div><div class="activityRowName">Forecast</div><div class="activityRowMeta">' + (t ? "Not available" : "Set up in Settings") + "</div></div></div></div>", Et(e);
      return;
    }
    const i = n.attributes || {}, o = i.temperature_unit || "°", s = (ne) => Number.isFinite(Number(ne)) ? Math.round(Number(ne)) + "°" : "—", l = (i.friendly_name || "").replace(/^forecast\s+/i, "") || "Weather", p = ao[n.state] || (n.state ? n.state.charAt(0).toUpperCase() + n.state.slice(1) : "—"), x = Pe(/* @__PURE__ */ new Date()), b = ta.slice(0, 7), f = b.find((ne) => Pe(new Date(ne.datetime)) === x) || null, g = b.filter((ne) => Pe(new Date(ne.datetime)) >= x).slice(0, 6), D = /* @__PURE__ */ new Date(), Y = Pe(new Date(D.getFullYear(), D.getMonth(), D.getDate() + 1)), H = f ? "H " + s(f.temperature) + "&ensp; L " + s(f.templow) : "", N = (ne) => {
      const Z = Pe(new Date(ne.datetime));
      return Z === x ? "Today" : Z === Y ? "Tomorrow" : new Intl.DateTimeFormat(void 0, { weekday: "short" }).format(new Date(ne.datetime));
    }, R = Number.isFinite(Number(i.temperature)) ? Math.round(Number(i.temperature)) : "—", ce = (ne) => {
      const Z = new Date(ne.datetime);
      return Math.round((new Date(Z.getFullYear(), Z.getMonth(), Z.getDate()) - new Date(D.getFullYear(), D.getMonth(), D.getDate())) / 864e5);
    }, ue = (ne) => (ao[ne] || ne || "").toLowerCase(), _ = (ne, Z) => '<div class="activityRow wxDayTile" role="button" tabindex="0" data-wx-day="' + ce(ne) + '" aria-label="' + ee(N(ne) + ": " + ue(ne.condition) + ", " + s(ne.temperature) + " / " + s(ne.templow) + ". Open the forecast") + '">' + fi(ne.condition, !1, !1, nt, "day" + Z) + '<div><div class="activityRowName">' + ee(N(ne)) + '</div><div class="activityRowMeta">' + s(ne.temperature) + " / " + s(ne.templow) + "</div></div></div>", me = () => '<div class="wxStrip"><div class="wxStripDays">' + Pt().days.map((Z, Oe) => {
      const Ne = new Intl.DateTimeFormat(void 0, { weekday: "long" }).format(new Date(Z.start)) + ": " + ue(Z.day) + (ue(Z.day) === ue(Z.night) ? " all day and night" : ", then " + ue(Z.night) + " overnight") + (Number.isFinite(Z.hi) ? ". High " + s(Z.hi) : "") + (Number.isFinite(Z.lo) ? ", low " + s(Z.lo) : "") + ". Open the forecast";
      return '<div class="wxStripDay" role="button" tabindex="0" data-wx-day="' + Oe + '" aria-label="' + ee(Ne) + '"><span class="wxDayName">' + ee(Wr(Z.start)) + '</span><span class="wxStripGap" aria-hidden="true"></span><span class="wxTemps" aria-hidden="true"><span class="wxHigh">' + s(Z.hi) + '</span><span class="wxLow">' + s(Z.lo) + "</span></span></div>";
    }).join("") + '</div><canvas class="wxStripSky" data-wx-strip="inline" aria-hidden="true"></canvas></div>';
    e.innerHTML = '<div class="wxWide"><div class="wxNow" role="button" tabindex="0" data-wx-open="now" aria-label="' + ee("Now in " + l + ": " + R + "°, " + ue(n.state) + ". Open the forecast") + '"><div class="wxCurrent">' + fi(n.state, !0, !0, nt, "now") + '<div class="wxTempBlock"><div class="wxTemp"><span class="wxDeg">' + ee(String(R)) + '</span><span class="wxUnit">' + ee(o) + '</span></div><div class="wxPlace">' + ee(l) + '</div></div></div><div class="wxCondition"><div class="wxCondName">' + ee(p) + "</div>" + (H ? '<div class="wxRange">' + H + "</div>" : "") + "</div></div>" + // the days are tiles under Now, like every card of readings (Figma "Weather in halves · proposal"), or the sky strip
    (g.length ? gi === "strip" ? me() : '<div class="activityRows wxDays">' + g.map(_).join("") + "</div>" : '<div class="wxNoDays">' + (so ? "This weather service has no daily forecast" : "Loading the forecast…") + "</div>") + "</div>", Et(e);
    const ye = e.querySelector("canvas[data-wx-strip]");
    ra && ra !== ye && (kt == null || kt.unobserve(ra)), ra = ye, ye && (kt == null || kt.observe(ye), bi(e)), Ut(), Jr();
  }
  const Yr = a("weatherCard"), Kr = (e) => {
    const t = e.closest("[data-wx-day]");
    if (t) {
      const i = /* @__PURE__ */ new Date();
      Zr(+new Date(i.getFullYear(), i.getMonth(), i.getDate() + Number(t.dataset.wxDay), 12), t);
      return;
    }
    const n = e.closest("[data-wx-open]");
    n && Zr(Date.now(), n);
  };
  Yr.addEventListener("click", (e) => Kr(e.target)), Yr.addEventListener("keydown", (e) => {
    (e.key === "Enter" || e.key === " ") && e.target.matches("[data-wx-day],[data-wx-open]") && (e.preventDefault(), Kr(e.target));
  });
  const gt = a("wxDialog"), Yt = a("wxGraph"), wi = a("wxGraphWrap");
  let Ct = Date.now(), sn = null, co = !1, _n = null;
  function Zr(e, t) {
    const n = Pt();
    sn = t || null, Ct = Math.max(n.start, Math.min(n.end - ze, e)), xi.delete("dialog"), vi.delete("scrub"), gt.classList.add("open"), gt.setAttribute("aria-hidden", "false"), Jr(), kt == null || kt.observe(gt.querySelector("canvas[data-wx-strip]")), Yt.focus({ preventScroll: !0 }), Ut();
  }
  function po() {
    var e;
    gt.classList.remove("open"), gt.setAttribute("aria-hidden", "true"), kt == null || kt.unobserve(gt.querySelector("canvas[data-wx-strip]")), (e = sn == null ? void 0 : sn.focus) == null || e.call(sn, { preventScroll: !0 }), sn = null;
  }
  function Jr() {
    if (!gt.classList.contains("open")) return;
    const e = Pt();
    a("wxGraphDays").innerHTML = e.days.map((t) => "<span>" + ee(Wr(t.start)) + "</span>").join(""), $r(e), sa(e), bi(gt);
  }
  function sa(e = Pt()) {
    const t = lo(e, Ct), n = qe == null ? void 0 : qe[Ue.weather], i = (n == null ? void 0 : n.attributes) || {}, o = i.temperature_unit || "°", s = Math.abs(Ct - Date.now()) < ze / 2, l = s && n ? n.state : t.cond, p = s && Number.isFinite(Number(i.temperature)) ? Math.round(Number(i.temperature)) : Number.isFinite(t.temp) ? Math.round(t.temp) : "—", x = ao[l] || (l ? l.charAt(0).toUpperCase() + l.slice(1) : "—"), b = s ? "Now" : new Intl.DateTimeFormat(void 0, { weekday: "short", hour: "2-digit", minute: "2-digit" }).format(new Date(Math.round(Ct / ze) * ze)), f = t.day, g = (Number.isFinite(f.hi) ? "H " + Math.round(f.hi) + "°" : "") + (Number.isFinite(f.lo) ? "&ensp; L " + Math.round(f.lo) + "°" : "");
    a("wxDialogNow").innerHTML = '<div class="wxCurrent">' + fi(l, !0, s, nt, "scrub", s ? void 0 : t.night) + '<div class="wxTempBlock"><div class="wxTemp"><span class="wxDeg">' + ee(String(p)) + '</span><span class="wxUnit">' + ee(o) + '</span></div><div class="wxPlace">' + ee(b) + '</div></div></div><div class="wxCondition"><div class="wxCondName">' + ee(x) + "</div>" + (g ? '<div class="wxRange">' + g + "</div>" : "") + "</div>", Et(a("wxDialogNow")), Yt.setAttribute("aria-valuenow", String(Math.round((Ct - e.start) / ze))), Yt.setAttribute("aria-valuetext", b + ", " + x.toLowerCase() + ", " + p + "°"), uo(e), Ut();
  }
  function $r(e = Pt()) {
    const t = a("wxGraphLine"), n = wi.clientWidth, i = wi.clientHeight;
    if (!n || !i) return;
    const o = [];
    for (let R = e.start; R <= e.end; R += ze) {
      const ce = lo(e, R).temp;
      Number.isFinite(ce) && o.push([Gr(e, R) * n, ce]);
    }
    if (t.setAttribute("viewBox", "0 0 " + n + " " + i), o.length < 2) {
      t.innerHTML = '<g id="wxCursorMark"></g>', _n = null, uo(e);
      return;
    }
    const s = o.map((R) => R[1]), l = Math.min(...s), p = Math.max(...s), x = Math.max(4, p - l), b = nt !== "smooth", f = (R) => b ? Math.round(R / 2) * 2 : Math.round(R * 10) / 10;
    _n = (R) => i * 0.84 - (R - l) / x * i * 0.62;
    const g = Qi(), D = nt === "onebit" ? g.paper : "#ffffff", Y = nt === "onebit" ? g.ink : "rgba(0,0,0,.28)", H = "M" + o.map((R) => f(R[0]) + " " + f(_n(R[1]))).join(" L"), N = (R, ce) => {
      const ue = o.find((_) => _[1] === R);
      return '<text class="wxLineLabel" x="' + f(Math.min(n - 14, Math.max(14, ue[0]))) + '" y="' + f(_n(R) + (ce ? 18 : -10)) + '" fill="' + D + '" stroke="' + Y + '">' + Math.round(R) + "°</text>";
    };
    t.setAttribute("shape-rendering", b ? "crispEdges" : "auto"), t.innerHTML = '<path d="' + H + '" fill="none" stroke="' + Y + '" stroke-width="' + (b ? 4 : 5) + '" stroke-linejoin="round"/><path d="' + H + '" fill="none" stroke="' + D + '" stroke-width="2" stroke-linejoin="round"/>' + N(p, !1) + N(l, !0) + '<g id="wxCursorMark"></g>', uo(e);
  }
  function uo(e = Pt()) {
    const t = a("wxGraphLine").querySelector("#wxCursorMark");
    if (!t) return;
    const n = wi.clientWidth, i = wi.clientHeight, o = nt !== "smooth", s = (D) => o ? Math.round(D / 2) * 2 : D, l = s(Gr(e, Ct) * n), p = lo(e, Ct).temp, x = Qi(), b = nt === "onebit" ? x.paper : "#ffffff", f = nt === "onebit" ? x.ink : "rgba(0,0,0,.28)", g = _n && Number.isFinite(p) ? s(_n(p)) : null;
    t.innerHTML = '<rect x="' + (l - 2) + '" y="0" width="4" height="' + i + '" fill="' + f + '"/><rect x="' + (l - 1) + '" y="0" width="2" height="' + i + '" fill="' + b + '"/>' + (g == null ? "" : o ? '<rect x="' + (l - 5) + '" y="' + (g - 5) + '" width="10" height="10" fill="' + b + '" stroke="' + f + '" stroke-width="2"/>' : '<circle cx="' + l + '" cy="' + g + '" r="6" fill="' + b + '" stroke="' + f + '" stroke-width="2"/>');
  }
  const Xr = (e) => {
    const t = wi.getBoundingClientRect();
    t.width && (Ct = Gl(Pt(), (e - t.left) / t.width), sa());
  };
  Yt.addEventListener("pointerdown", (e) => {
    if (e.button === 0) {
      co = !0;
      try {
        Yt.setPointerCapture(e.pointerId);
      } catch {
      }
      Xr(e.clientX);
    }
  }), Yt.addEventListener("pointermove", (e) => {
    co && Xr(e.clientX);
  }), ["pointerup", "pointercancel", "lostpointercapture"].forEach((e) => Yt.addEventListener(e, () => {
    co = !1;
  })), Yt.addEventListener("keydown", (e) => {
    const t = Pt(), n = { ArrowLeft: -ze, ArrowRight: ze, ArrowDown: -ze, ArrowUp: ze, PageUp: -24 * ze, PageDown: 24 * ze }[e.key];
    n ? (e.preventDefault(), Ct = Math.max(t.start, Math.min(t.end - ze, Math.round(Ct / ze) * ze + n)), sa(t)) : (e.key === "Home" || e.key === "End") && (e.preventDefault(), Ct = e.key === "Home" ? t.start : t.end - ze, sa(t));
  }), a("wxDialogClose").addEventListener("click", po), gt.addEventListener("click", (e) => {
    e.target === gt && po();
  }), gt.addEventListener("keydown", (e) => {
    e.key === "Escape" && (e.preventDefault(), po());
  }), Ht();
  const yi = a("wxStyleChoice");
  function Yl() {
    yi.querySelectorAll(".wxStyleBtn").forEach((e) => {
      e.setAttribute("aria-pressed", String(e.dataset.wxStyle === nt)), e.querySelector(".wxStylePreview").innerHTML = ["sunny", "partlycloudy", "rainy", "clear-night"].map((t) => fi(t, !1, !1, e.dataset.wxStyle)).join("");
    }), Et(yi);
  }
  yi.querySelectorAll(".wxStyleBtn").forEach((e) => e.addEventListener("click", () => {
    nt = e.dataset.wxStyle, tt("weatherStyle", nt), yi.querySelectorAll(".wxStyleBtn").forEach((t) => t.setAttribute("aria-pressed", String(t === e))), Ht();
  })), Yl();
  const Qr = a("wxLayoutChoice"), es = () => Qr.querySelectorAll(".wxLayoutBtn").forEach((e) => e.setAttribute("aria-pressed", String(e.dataset.wxLayout === gi)));
  Qr.querySelectorAll(".wxLayoutBtn").forEach((e) => e.addEventListener("click", () => {
    gi = e.dataset.wxLayout, tt("weatherLayout", gi), xi.delete("inline"), es(), Ht();
  })), es();
  const mo = a("wxMotionToggle");
  mo.classList.toggle("on", Pn), mo.addEventListener("click", () => {
    Pn = !Pn, mo.classList.toggle("on", Pn), tt("weatherMotion", Pn), Ut(), Et(r);
  }), (ps = (ds = window.matchMedia) == null ? void 0 : (cs = ds.call(window, "(prefers-reduced-motion: reduce)")).addEventListener) == null || ps.call(cs, "change", () => {
    Ut(), Et(r);
  }), Ut();
  const ts = a("tvNav");
  u.fullscreenSupported || (ts.hidden = !0), ts.addEventListener("click", () => u.toggleFullscreen()), r.addEventListener("keydown", (e) => {
    !ge.workout.classList.contains("active") || oi.classList.contains("active") || e.target.closest("input,select,textarea,.holdEnd") || (e.key === "MediaPlayPause" || e.key === " " && !e.target.closest("button") ? (e.preventDefault(), Va.click()) : e.key === "MediaTrackNext" ? (e.preventDefault(), a("skipExercise").click()) : e.key === "MediaTrackPrevious" && (e.preventDefault(), a("restartSegment").click()));
  }), r.querySelectorAll("[data-rounds-step]").forEach((e) => e.addEventListener("click", () => {
    const t = Math.max(1, Math.min(10, (Number(E.value) || 1) + Number(e.dataset.roundsStep)));
    String(t) !== E.value && (E.value = t, E.dispatchEvent(new Event("input", { bubbles: !0 })));
  })), [v, h, w, E].forEach((e) => e.addEventListener("input", () => {
    const t = de[ve];
    t && (t.total = Number(v.value), t.work = Number(h.value), t.rest = Number(w.value)), Te();
  })), Me.addEventListener("click", Ua), He.addEventListener("click", () => m("settings")), a("settingsBack").addEventListener("click", Ua), Va.addEventListener("click", () => Bt(!St)), ht(ve), qi(), ti(), Ft(), a("healthHelpOpen").addEventListener("click", () => r.querySelector(".tab[data-pane=helpPane]").click()), ui(a("resetStats"), a("resetStatsFill"), 1500, () => {
    he.history = [], he.checkins = [], ei = "";
    try {
      localStorage.removeItem("move-assistant-dismissed");
    } catch {
    }
    pt(), rn(), ti(), qi(), Ft(), en(), De("Stats reset");
  });
  const go = a("morningTime"), ho = a("eveningTime"), vo = a("checkinAutoOpen");
  go.value = _t().morning, ho.value = _t().evening, vo.classList.toggle("on", be().checkinAutoOpen !== !1), [["morningTime", go], ["eveningTime", ho]].forEach(([e, t]) => t.addEventListener("change", () => {
    t.value && (tt(e, t.value), en());
  })), vo.addEventListener("click", () => {
    const e = be().checkinAutoOpen === !1;
    vo.classList.toggle("on", e), tt("checkinAutoOpen", e);
  }), setTimeout(Da, 800);
  const ns = a("checkinNotify"), la = a("checkinNotifyTarget"), is = a("checkinNotifyStatus"), Kl = is.textContent;
  function as() {
    const e = u.notifyServices(), t = e.filter((o) => o.startsWith("mobile_app_")), n = t.length ? t : e, i = (o) => o.replace(/^mobile_app_/, "").replace(/_/g, " ");
    la.innerHTML = n.map((o) => '<option value="' + ee(o) + '">' + ee(i(o)) + "</option>").join(""), !be().notifyTarget && n[0] && (be().notifyTarget = n[0]), la.value = be().notifyTarget || "";
  }
  function da() {
    const e = !!be().notifyOn;
    ns.classList.toggle("on", e), a("checkinNotifyTargetRow").hidden = !e;
    const t = _t();
    is.textContent = e ? "Sends at " + t.morning + " and " + t.evening : Kl;
  }
  async function fo() {
    const e = !!be().notifyOn;
    try {
      return await u.setReminderAutomation(e ? { target: be().notifyTarget, times: _t() } : null), !0;
    } catch {
      return De("Couldn't update the reminder in Home Assistant"), !1;
    }
  }
  ns.addEventListener("click", async () => {
    const e = !be().notifyOn;
    if (e && (as(), !be().notifyTarget)) {
      De("Install the Companion app on your phone first");
      return;
    }
    be().notifyOn = e, da(), await fo() ? (pt(), De(e ? "Check-in notifications on" : "Check-in notifications off")) : (be().notifyOn = !e, da());
  }), la.addEventListener("change", () => {
    tt("notifyTarget", la.value), be().notifyOn && fo();
  }), [go, ho].forEach((e) => e.addEventListener("change", () => {
    da(), be().notifyOn && fo();
  })), as(), da();
  let xo = null;
  function Zl() {
    xo || (xo = setTimeout(() => {
      xo = null, Ft();
    }, 3e4));
  }
  return {
    updateStates(e) {
      var n, i;
      const t = !qe || qe[Ue.weather] !== e[Ue.weather] || ((n = qe["sun.sun"]) == null ? void 0 : n.state) !== ((i = e["sun.sun"]) == null ? void 0 : i.state);
      qe = e, Dr(e), jr(e), Br(e), Ur(), t && Ht(), Date.now() - Fr > 60 * 60 * 1e3 && Pr(), Zl();
    },
    applyRemoteData(e) {
      if (e && (Array.isArray(e.history) && (he.history = e.history, rn()), Array.isArray(e.history) && Ft(), Array.isArray(e.checkins) && (he.checkins = e.checkins.map(Gn), en(), qi(), ti(), rn(), Ft()), e.profiles && !at.classList.contains("open") && !Tt)) {
        const t = Si(e);
        Object.keys(de).forEach((n) => delete de[n]), Object.assign(de, t.profiles), he.order = t.order, de[ve] || (ve = he.order[0]), No(), ht(ve);
      }
    },
    suspend() {
      C = !1;
    },
    resume() {
      C || (C = !0, wn || (wn = requestAnimationFrame(ji)), kn || (kn = requestAnimationFrame(Ui)), Ut(), mi(r.querySelector(".tab.active"), !1));
    }
  };
}
const fs = "move-assistant-density", xs = {
  get(r) {
    try {
      return localStorage.getItem(r);
    } catch {
      return null;
    }
  },
  set(r, u) {
    try {
      localStorage.setItem(r, u);
    } catch {
    }
  }
}, Re = (r) => String(r ?? "").replace(/[&<>"']/g, (u) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[u]), kd = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 12H5"/><path d="M12 19L5 12L12 5"/></svg>', Sd = ["power", "energy", "voltage", "current", "gas", "water", "monetary", "apparent_power", "reactive_power", "power_factor", "battery", "energy_storage"], Cd = ["temperature", "humidity", "pressure", "atmospheric_pressure", "illuminance", "carbon_dioxide", "pm25", "pm10", "volatile_organic_compounds", "moisture", "wind_speed", "precipitation"], bs = {
  lights: { title: "Lights" },
  energy: { title: "Energy", icon: "mdi:lightning-bolt" },
  climate: { title: "Climate", icon: "mdi:thermometer" },
  readings: { title: "Readings", icon: "mdi:gauge" }
};
function Md(r, { config: u, getHass: a }) {
  const M = (d) => r.getElementById(d), T = M("app"), C = u || {}, j = String(C.layout || "").toLowerCase().replace("_", "-") === "test-focus";
  let z = xs.get(fs) === "1", I = {};
  const B = (d) => {
    var c;
    return (c = a()) == null ? void 0 : c.callWS(d);
  }, re = (d, c, y) => B({ type: "call_service", domain: d, service: c, service_data: y }), K = r.querySelector("#appearancePane .toggleList");
  K && !M("densityToggle") && (K.insertAdjacentHTML(
    "afterbegin",
    '<div class="toggleRow"><div><strong>Show density</strong><div class="status">Each card’s height, and how many readings fit on the screen.</div></div><button class="switch" id="densityToggle" type="button" aria-label="Show density"></button></div>'
  ), M("densityToggle").addEventListener("click", () => {
    z = !z, xs.set(fs, z ? "1" : "0"), pe();
  }));
  const S = document.createElement("div");
  S.className = "densityBadge", S.setAttribute("aria-live", "polite"), S.hidden = !0, T.appendChild(S);
  let L = 0;
  function O() {
    if (!z) return;
    const d = M("homeView"), c = (X) => X.offsetParent !== null && !X.closest("[hidden]");
    d.querySelectorAll(":scope .card, :scope .tfAction").forEach((X) => {
      c(X) && (X.dataset.h = Math.round(X.getBoundingClientRect().height) + " px");
    });
    const y = [...d.querySelectorAll(".activityRow, .tfAction, .tfHalf, .wxNow")].filter(c), E = window.innerHeight, Q = y.filter((X) => {
      const ke = X.getBoundingClientRect();
      return ke.height > 0 && ke.top >= 0 && ke.bottom <= E + 0.5;
    }).length;
    S.hidden = !d.classList.contains("active"), S.innerHTML = "<b>" + Q + "</b><small>of " + y.length + " readings on screen</small>";
  }
  const U = () => {
    z && requestAnimationFrame(O);
  };
  function pe() {
    var d;
    T.classList.toggle("showDensity", z), (d = M("densityToggle")) == null || d.classList.toggle("on", z), S.hidden = !z, clearInterval(L), z && (L = setInterval(O, 1e3), O());
  }
  window.addEventListener("scroll", U, { capture: !0, passive: !0 }), window.addEventListener("resize", U, { passive: !0 });
  const J = r.querySelector("#homeView .grid"), ie = r.querySelector("#homeView .feelSection");
  let V = [], W = null;
  const le = /* @__PURE__ */ new Map(), xe = /* @__PURE__ */ new Map();
  function $() {
    if (Array.isArray(C.test_focus) && C.test_focus.length)
      return C.test_focus.map((c) => ({ type: c.type || "readings", title: c.title, icon: c.icon, entities: (c.entities || []).map((y) => typeof y == "string" ? { entity: y } : y).filter((y, E, Q) => Q.findIndex((X) => X.entity === y.entity) === E) }));
    const d = { lights: [], energy: [], climate: [], readings: [] };
    return (C.entities || []).map((c) => typeof c == "string" ? { entity: c } : c).forEach((c) => {
      var Q, X;
      const y = String(c.entity).split(".")[0], E = (X = (Q = I[c.entity]) == null ? void 0 : Q.attributes) == null ? void 0 : X.device_class;
      if (y === "light") d.lights.push(c);
      else {
        if (y === "weather") return;
        Sd.includes(E) ? d.energy.push(c) : Cd.includes(E) ? d.climate.push(c) : d.readings.push(c);
      }
    }), Object.entries(d).filter(([, c]) => c.length).map(([c, y]) => ({ type: c === "lights" ? "lights" : "readings", title: bs[c].title, icon: bs[c].icon, entities: y }));
  }
  const we = (d) => {
    var c, y;
    return d.name || ((y = (c = I[d.entity]) == null ? void 0 : c.attributes) == null ? void 0 : y.friendly_name) || d.entity;
  }, Ye = (d) => (d == null ? void 0 : d.state) === "on" ? d.attributes.brightness != null ? Math.max(1, Math.round(d.attributes.brightness / 2.55)) : 100 : 0, k = (d) => {
    var y, E;
    const c = (y = d == null ? void 0 : d.attributes) == null ? void 0 : y.supported_color_modes;
    return Array.isArray(c) ? c.some((Q) => Q !== "onoff") : ((E = d == null ? void 0 : d.attributes) == null ? void 0 : E.brightness) != null;
  };
  function ge(d) {
    const c = I[d.entity];
    if (!c) return "Not found";
    if (c.state === "unavailable") return "Unavailable";
    if (c.entity_id.startsWith("light.")) {
      if (c.state !== "on") return "Off";
      const Q = c.attributes.color_temp_kelvin;
      return (k(c) ? Ye(c) + "%" : "On") + (c.attributes.color_mode === "color_temp" && Q ? " · " + Number(Q).toLocaleString() + "k" : "");
    }
    const y = a();
    if (y != null && y.formatEntityState)
      try {
        return y.formatEntityState(c);
      } catch {
      }
    const E = Number(c.state);
    if (c.state !== "" && Number.isFinite(E)) {
      const Q = Math.abs(E) >= 100 ? 0 : Math.abs(E) >= 10 ? 1 : 2;
      return E.toLocaleString(void 0, { maximumFractionDigits: Q }) + (c.attributes.unit_of_measurement ? " " + c.attributes.unit_of_measurement : "");
    }
    return c.state.charAt(0).toUpperCase() + c.state.slice(1);
  }
  function Me(d) {
    const c = a();
    d.querySelectorAll("[data-icon-for]").forEach((y) => {
      var X;
      const E = I[y.dataset.iconFor], Q = y.dataset.iconName || "";
      if (customElements.get("ha-state-icon") && E && !Q) {
        let ke = y.firstElementChild;
        (!ke || ke.localName !== "ha-state-icon") && (y.textContent = "", ke = document.createElement("ha-state-icon"), y.appendChild(ke)), ke.hass = c, ke.stateObj = E;
      } else if (customElements.get("ha-icon")) {
        let ke = y.firstElementChild;
        (!ke || ke.localName !== "ha-icon") && (y.textContent = "", ke = document.createElement("ha-icon"), y.appendChild(ke)), ke.icon = Q || ((X = E == null ? void 0 : E.attributes) == null ? void 0 : X.icon) || "mdi:circle-medium";
      } else y.textContent || (y.textContent = (we({ entity: y.dataset.iconFor }) || "?").trim().charAt(0).toUpperCase());
    });
  }
  function He(d, c) {
    return '<div class="activityRow tap" role="button" tabindex="0" data-open="' + c + "|" + Re(d.entity) + '" aria-label="' + Re(we(d)) + ", " + Re(ge(d)) + '. Show the last 24 hours"><div class="tfIcon" aria-hidden="true" data-icon-for="' + Re(d.entity) + '"' + (d.icon ? ' data-icon-name="' + Re(d.icon) + '"' : "") + '></div><div><div class="activityRowName">' + Re(we(d)) + '</div><div class="activityRowMeta">' + Re(ge(d)) + "</div></div></div>";
  }
  function m(d) {
    return '<div class="tfOpen"><div class="tfOpenHead"><div class="tfIcon" aria-hidden="true" data-icon-for="' + Re(d.entity) + '"' + (d.icon ? ' data-icon-name="' + Re(d.icon) + '"' : "") + '></div><div><div class="activityRowName">' + Re(we(d)) + '</div><div class="activityRowMeta">' + Re(ge(d)) + '</div></div><button class="tfBack" type="button" data-close aria-label="Close ' + Re(we(d)) + '’s last 24 hours">' + kd + '</button></div><svg class="tfGraph" data-graph="' + Re(d.entity) + '" role="img" aria-label="' + Re(we(d)) + ', last 24 hours"></svg></div>';
  }
  function v(d) {
    const c = I[d.entity], y = xe.has(d.entity) ? xe.get(d.entity) : Ye(c), E = (c == null ? void 0 : c.state) === "on";
    return '<div class="tfAction' + (E ? " on" : "") + '" data-light="' + Re(d.entity) + '"><div class="tfActionHead"><button class="tfIcon" type="button" data-toggle-light="' + Re(d.entity) + '" aria-label="Turn ' + Re(we(d)) + (E ? " off" : " on") + '" data-icon-for="' + Re(d.entity) + '"' + (d.icon ? ' data-icon-name="' + Re(d.icon) + '"' : "") + '></button><div><div class="activityRowName">' + Re(we(d)) + '</div><div class="activityRowMeta">' + Re(xe.has(d.entity) ? y + "%" : ge(d)) + '</div></div></div><div class="tfBar" role="slider" tabindex="0" aria-label="' + Re(we(d)) + ' brightness" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + y + '" data-bar="' + Re(d.entity) + '"><i style="width:' + y + '%"></i></div></div>';
  }
  function h() {
    if (!j || !J) return;
    if (J.querySelectorAll("[data-tf]").forEach((E) => E.remove()), V = $(), !V.length) {
      J.insertBefore(Object.assign(document.createElement("div"), { className: "sectionLabel rowLabel tfLabel", textContent: "Test focus: add entities to this card’s YAML" }), ie), J.lastElementChild.dataset.tf = "";
      return;
    }
    const d = (E, Q, X) => '<div class="tfBlock' + (" " + X) + '"><div class="sectionLabel tfGroupLabel">' + Re(E) + "</div>" + Q + "</div>", c = V.map((E, Q) => {
      var Xe;
      if (E.type === "lights") return d(E.title || "Lights", '<div class="tfLights" role="group" aria-label="' + Re(E.title || "Lights") + '">' + E.entities.map(v).join("") + "</div>", "tfLightsBlock");
      const ke = W && W.gi === Q && E.entities.find((Ke) => Ke.entity === W.entity);
      return '<section class="card tfCard' + (ke ? " open" : "") + '"' + (ke && W.h ? ' style="min-height:' + W.h + 'px"' : "") + ' aria-label="' + Re(E.title || "Readings") + '"><div class="activityHeader"><div class="activityIcon tfHeadIcon" aria-hidden="true" data-icon-for="' + Re((Xe = E.entities[0]) == null ? void 0 : Xe.entity) + '"' + (E.icon ? ' data-icon-name="' + Re(E.icon) + '"' : "") + '></div><div class="activityTitle">' + Re(E.title || "Readings") + "</div></div>" + (ke ? m(ke) : '<div class="activityRows">' + E.entities.map((Ke) => He(Ke, Q)).join("") + "</div>") + "</section>";
    }).join(""), y = document.createElement("div");
    y.innerHTML = c, [...y.children].forEach((E) => {
      E.dataset.tf = "", J.insertBefore(E, ie);
    }), Me(J), W && q(W.entity), requestAnimationFrame(O);
  }
  function w() {
    if (!(!j || !J)) {
      if (!J.querySelector("[data-tf]") || V.length !== $().length) {
        h();
        return;
      }
      if (V.forEach((d, c) => d.entities.forEach((y) => {
        const E = ge(y);
        J.querySelectorAll('[data-open="' + c + "|" + CSS.escape(y.entity) + '"] .activityRowMeta, .tfHalf [data-icon-for="' + CSS.escape(y.entity) + '"] + div .activityRowMeta').forEach((X) => {
          X.textContent = E;
        });
        const Q = J.querySelector('[data-light="' + CSS.escape(y.entity) + '"]');
        if (Q && !xe.has(y.entity)) {
          const X = I[y.entity], ke = Ye(X);
          Q.classList.toggle("on", (X == null ? void 0 : X.state) === "on"), Q.querySelector(".activityRowMeta").textContent = E, Q.querySelector(".tfBar i").style.width = ke + "%", Q.querySelector(".tfBar").setAttribute("aria-valuenow", String(ke)), Q.querySelector("[data-toggle-light]").setAttribute("aria-label", "Turn " + we(y) + ((X == null ? void 0 : X.state) === "on" ? " off" : " on"));
        }
      })), W) {
        const d = J.querySelector(".tfOpen .activityRowMeta"), c = V[W.gi], y = c == null ? void 0 : c.entities.find((E) => E.entity === W.entity);
        d && y && (d.textContent = ge(y));
      }
      Me(J);
    }
  }
  async function q(d) {
    var be, ht;
    let c = le.get(d);
    if (!c || Date.now() - c.at > 5 * 60 * 1e3) {
      try {
        const Ze = new Date(Date.now() - 864e5).toISOString(), $t = await B({ type: "history/history_during_period", start_time: Ze, entity_ids: [d], minimal_response: !0, no_attributes: !0, significant_changes_only: !1 }), Ci = (($t == null ? void 0 : $t[d]) || []).map((Se) => [Se.lu != null ? Se.lu * 1e3 : Date.parse(Se.last_updated || Se.last_changed), Number(Se.s ?? Se.state)]).filter(([Se, Rt]) => Number.isFinite(Se) && Number.isFinite(Rt));
        c = { at: Date.now(), points: Ci };
      } catch {
        c = { at: Date.now(), points: [] };
      }
      le.set(d, c);
    }
    const y = J.querySelector('[data-graph="' + CSS.escape(d) + '"]');
    if (!y) return;
    const E = I[d], Q = ((be = E == null ? void 0 : E.attributes) == null ? void 0 : be.unit_of_measurement) || "", X = c.points.slice(), ke = Number(E == null ? void 0 : E.state);
    if (Number.isFinite(ke) && X.push([Date.now(), ke]), X.length < 2) {
      y.setAttribute("aria-label", we({ entity: d }) + ": no history for the last 24 hours"), y.innerHTML = '<text x="0" y="16">No history for the last 24 hours</text>';
      return;
    }
    const Xe = X.map((Ze) => Ze[1]), Ke = Math.min(...Xe), Le = Math.max(...Xe), _e = (Ze) => Ze.toLocaleString(void 0, { maximumFractionDigits: Math.abs(Ze) >= 100 ? 0 : 1 }), dn = ((ht = E == null ? void 0 : E.attributes) == null ? void 0 : ht.state_class) === "total_increasing";
    y.setAttribute("aria-label", we({ entity: d }) + ", last 24 hours: " + (dn ? "+" + _e(Xe[Xe.length - 1] - Xe[0]) : Ke === Le ? _e(Ke) : _e(Ke) + " to " + _e(Le)) + (Q ? " " + Q : ""));
    const $e = Math.max(120, y.clientWidth || 260), cn = Math.max(80, y.clientHeight || 130), he = 8, de = cn - 20, ve = Date.now() - 24 * 3600 * 1e3, Si = 24 * 3600 * 1e3, Vn = (Ze) => Math.max(0, Math.min($e, (Ze - ve) / Si * $e)), Gn = (Ze) => Le === Ke ? (he + de) / 2 : de - (Ze - Ke) / (Le - Ke) * (de - he);
    let pt = "M" + Vn(X[0][0]).toFixed(1) + " " + Gn(X[0][1]).toFixed(1);
    for (let Ze = 1; Ze < X.length; Ze++) pt += "H" + Vn(X[Ze][0]).toFixed(1) + "V" + Gn(X[Ze][1]).toFixed(1);
    y.setAttribute("viewBox", "0 0 " + $e + " " + cn), y.innerHTML = '<path d="' + pt + "V" + de + "H" + Vn(X[0][0]).toFixed(1) + 'Z" fill="var(--primary)" fill-opacity=".14"/><path d="' + pt + '" fill="none" stroke="var(--primary)" stroke-width="2" stroke-linejoin="round"/><text x="0" y="' + (cn - 4) + '">24 h ago</text><text x="' + $e + '" y="' + (cn - 4) + '" text-anchor="end">Now</text>';
  }
  function F(d) {
    var Q;
    const [c, y] = d.dataset.open.split("|"), E = d.closest(".tfCard");
    W = { gi: Number(c), entity: y, h: E ? Math.round(E.getBoundingClientRect().height) : 0 }, h(), (Q = J.querySelector(".tfOpen [data-close]")) == null || Q.focus();
  }
  J && j && (J.addEventListener("click", (d) => {
    var y;
    const c = d.target.closest("[data-open],[data-close],[data-toggle-light]");
    if (!(!c || !J.contains(c)))
      if (c.dataset.open) F(c);
      else if (c.hasAttribute("data-close")) {
        const E = W == null ? void 0 : W.gi, Q = W == null ? void 0 : W.entity;
        W = null, h(), (y = J.querySelector('[data-open="' + E + "|" + CSS.escape(Q || "") + '"]')) == null || y.focus();
      } else c.dataset.toggleLight && re("light", "toggle", { entity_id: c.dataset.toggleLight });
  }), J.addEventListener("keydown", (d) => {
    var y, E;
    const c = d.target;
    if ((y = c.dataset) != null && y.open && (d.key === "Enter" || d.key === " ") && (d.preventDefault(), F(c)), (E = c.dataset) != null && E.bar && ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"].includes(d.key)) {
      d.preventDefault();
      const Q = I[c.dataset.bar], X = Ye(Q), ke = d.key === "Home" ? 0 : d.key === "End" ? 100 : Math.max(0, Math.min(100, X + (d.key === "ArrowLeft" || d.key === "ArrowDown" ? -10 : 10)));
      P(c.dataset.bar, ke);
    }
  }), J.addEventListener("pointerdown", (d) => {
    var Ke;
    const c = d.target.closest("[data-bar]");
    if (!c) return;
    const y = c.dataset.bar, E = I[y];
    if (!k(E)) {
      re("light", "toggle", { entity_id: y });
      return;
    }
    d.preventDefault(), (Ke = c.setPointerCapture) == null || Ke.call(c, d.pointerId);
    const Q = (Le) => {
      const _e = c.getBoundingClientRect();
      return Math.round(Math.max(0, Math.min(1, (Le.clientX - _e.left) / _e.width)) * 100);
    }, X = (Le) => {
      xe.set(y, Le), c.querySelector("i").style.width = Le + "%", c.setAttribute("aria-valuenow", String(Le)), c.closest(".tfAction").querySelector(".activityRowMeta").textContent = Le ? Le + "%" : "Off";
    };
    X(Q(d));
    const ke = (Le) => X(Q(Le)), Xe = () => {
      c.removeEventListener("pointermove", ke), c.removeEventListener("pointerup", Xe), c.removeEventListener("pointercancel", Xe);
      const Le = xe.get(y);
      P(y, Le);
    };
    c.addEventListener("pointermove", ke), c.addEventListener("pointerup", Xe), c.addEventListener("pointercancel", Xe);
  }));
  function P(d, c) {
    var E;
    xe.set(d, c);
    const y = () => setTimeout(() => {
      xe.delete(d), w();
    }, 1500);
    (E = c > 0 ? re("light", "turn_on", { entity_id: d, brightness_pct: c }) : re("light", "turn_off", { entity_id: d })) == null || E.then(y, y);
  }
  return pe(), {
    update(d) {
      const c = !Object.keys(I).length;
      I = d || {}, c ? h() : w();
    }
  };
}
const Ld = "0.41.0", yo = "move_assistant", Td = "move_assistant", ws = "move_assistant_checkin_reminder";
function Ed() {
  if (document.getElementById("move-assistant-inter")) return;
  const r = document.createElement("link");
  r.id = "move-assistant-inter", r.rel = "stylesheet", r.href = "https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600&family=Inter:ital,wght@0,400;0,500;0,600;0,700;0,800;1,500&display=swap", document.head.appendChild(r);
}
class Rd extends HTMLElement {
  setConfig(u) {
    this._config = u || {};
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
  set hass(u) {
    var M;
    const a = !this._hass;
    if (this._hass = u, a) {
      this._init();
      return;
    }
    this._app && u.states !== this._lastStates && (this._lastStates = u.states, this._app.updateStates(u.states), (M = this._test) == null || M.update(u.states));
  }
  connectedCallback() {
    var u;
    (u = this._app) == null || u.resume();
  }
  disconnectedCallback() {
    var u;
    (u = this._app) == null || u.suspend();
  }
  async _init() {
    Ed();
    const u = this.shadowRoot || this.attachShadow({ mode: "open" });
    u.innerHTML = `<style>${Xl}${Ql}</style>${ed}`;
    const a = u.getElementById("app");
    a.style.opacity = "0";
    let M = null;
    try {
      const T = await this._hass.callWS({
        type: "frontend/get_user_data",
        key: yo
      });
      M = (T == null ? void 0 : T.value) ?? null;
    } catch {
    }
    this._lastSaved = JSON.stringify(M), this._app = yd(u, {
      data: M,
      save: (T) => this._save(T),
      fire: (T, C) => this._fire(T, C),
      ws: (T) => this._hass.callWS(T),
      subscribe: (T, C) => {
        var j, z;
        return (z = (j = this._hass) == null ? void 0 : j.connection) != null && z.subscribeMessage ? this._hass.connection.subscribeMessage(C, T) : Promise.reject(new Error("no connection"));
      },
      notifyServices: () => {
        var T, C;
        return Object.keys(((C = (T = this._hass) == null ? void 0 : T.services) == null ? void 0 : C.notify) || {}).sort();
      },
      setReminderAutomation: (T) => this._setReminderAutomation(T),
      setLight: (T) => this.classList.toggle("lightBody", T),
      fullscreenSupported: !!(this.requestFullscreen || this.webkitRequestFullscreen),
      toggleFullscreen: () => this._toggleFullscreen()
    }), this._lastStates = this._hass.states, this._app.updateStates(this._hass.states), this._test = Md(u, { config: this._config, getHass: () => this._hass }), this._test.update(this._hass.states), this.isConnected || this._app.suspend(), a.style.transition = "opacity .2s ease", a.style.opacity = "", this._subscribe();
  }
  _subscribe() {
    var a;
    const u = (a = this._hass) == null ? void 0 : a.connection;
    u != null && u.subscribeMessage && u.subscribeMessage(
      (M) => {
        var C;
        const T = JSON.stringify((M == null ? void 0 : M.value) ?? null);
        T === this._lastSaved || T === this._pendingJson || (this._lastSaved = T, (C = this._app) == null || C.applyRemoteData(M.value));
      },
      { type: "frontend/subscribe_user_data", key: yo }
    ).catch(() => {
    });
  }
  _save(u) {
    this._pendingJson = JSON.stringify(u), clearTimeout(this._saveTimer), this._saveTimer = setTimeout(async () => {
      const a = this._pendingJson;
      try {
        await this._hass.callWS({
          type: "frontend/set_user_data",
          key: yo,
          value: JSON.parse(a)
        }), this._lastSaved = a;
      } catch {
        this._toast("Couldn't save to Home Assistant");
      }
    }, 400);
  }
  _fire(u, a = {}) {
    var M, T;
    ((M = this._config) == null ? void 0 : M.events) !== !1 && ((T = this._hass) == null || T.callWS({
      type: "fire_event",
      event_type: Td,
      event_data: { action: u, ...a }
    }).catch(() => {
    }));
  }
  // Keeps one Home Assistant automation in sync with the check-in times.
  // Passing null removes it.
  async _setReminderAutomation(u) {
    const a = `config/automation/config/${ws}`;
    if (!u) {
      try {
        await this._hass.callApi("DELETE", a);
      } catch (C) {
        if ((C == null ? void 0 : C.status_code) !== 404 && (C == null ? void 0 : C.status) !== 404) throw C;
      }
      return;
    }
    const M = (C) => `${C}:00`, T = window.location.pathname;
    await this._hass.callApi("POST", a, {
      id: ws,
      alias: "Move Assistant check-in reminder",
      description: "Created by Move Assistant. Change it in Move Assistant → Settings → Check-in.",
      mode: "single",
      triggers: [
        { trigger: "time", at: M(u.times.morning), id: "morning" },
        { trigger: "time", at: M(u.times.evening), id: "evening" }
      ],
      conditions: [],
      actions: [
        {
          action: `notify.${u.target}`,
          data: {
            title: "Move Assistant",
            message: "{{ 'Morning' if trigger.id == 'morning' else 'Evening' }} check-in is ready",
            data: { url: T, clickAction: T }
          }
        }
      ]
    });
  }
  _toggleFullscreen() {
    const u = document;
    if (u.fullscreenElement || u.webkitFullscreenElement) {
      (u.exitFullscreen || u.webkitExitFullscreen).call(u);
      return;
    }
    const a = this.requestFullscreen || this.webkitRequestFullscreen;
    Promise.resolve(a.call(this)).catch(
      () => this._toast("Full screen isn't available here")
    );
  }
  _toast(u) {
    var M;
    const a = (M = this.shadowRoot) == null ? void 0 : M.getElementById("toast");
    a && (a.textContent = u, a.classList.add("show"), setTimeout(() => a.classList.remove("show"), 2600));
  }
}
customElements.get("move-assistant-card") || (customElements.define("move-assistant-card", Rd), window.customCards = window.customCards || [], window.customCards.push({
  type: "move-assistant-card",
  name: "Move Assistant",
  description: "Guided movement timer with your Home Assistant activity data.",
  preview: !1
}), console.info(`%c MOVE ASSISTANT %c ${Ld} `, "background:#D0FF00;color:#090909;font-weight:700", ""));
