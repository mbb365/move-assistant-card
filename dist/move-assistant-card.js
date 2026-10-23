const Gs = ':host{display:flex;flex-direction:column;min-height:calc(100dvh - var(--header-height,0px));position:relative;background:#050505;color-scheme:dark;--color-bg-ground:#090909;--color-bg-card:#222222;--color-bg-tile:#2b2b2b;--color-fill-bright:#f1f1f1;--color-text-primary:#f1f1f1;--color-text-muted:#969696;--color-text-on-bright:#090909;--color-line:rgba(255,255,255,.14);--color-border-focus:#03a9f4;--color-accent-primary:#03a9f4;--color-accent-secondary:#d0ff00;--color-text-accent:#d0ff00;--color-text-on-accent:#090909;--color-bg-resting:#1f7a4d;--color-bg-danger:#311313;--color-bg-danger-fill:#d53d3d;--color-border-danger:#8c2e2e;--color-text-danger:#ff7777;--color-text-on-danger:#ffffff;--color-state-hover:rgba(255,255,255,.08);--color-bg-chip:#090909;--color-fill-selected:#f1f1f1;--color-text-on-selected:#090909;--color-bg-segment-selected:#2b2b2b;--wx-clear:#03a9f4;--wx-cloudy:#d8d6d6;--wx-night:#1d2b4f;--wx-cloud-bright:#f1f1f1;--color-state-pressed:rgba(255,255,255,.14);--color-state-hover-on-bright:rgba(0,0,0,.06);--color-state-pressed-on-bright:rgba(0,0,0,.12);--scrim:rgba(0,0,0,.66);--lift:rgba(0,0,0,.5)}*{box-sizing:border-box}#app{color:var(--text);font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif;transition:background .25s ease,color .25s ease;-webkit-font-smoothing:antialiased}[hidden]{display:none!important}button,input{font:inherit}#app{flex:1;display:flex;flex-direction:column;width:100%;margin:0;padding:0;background:var(--bg);text-align:left}#app{--bg:var(--color-bg-ground);--page:var(--color-bg-ground);--card:var(--color-bg-card);--card2:var(--color-bg-card);--modal:var(--color-bg-card);--timer:var(--color-bg-ground);--tile:var(--color-bg-tile);--tile-2:var(--color-bg-tile);--row:var(--color-bg-tile);--row-rest:var(--color-bg-tile);--raised:var(--color-bg-tile);--chip:var(--color-bg-tile);--segment:var(--color-bg-tile);--seg-on:var(--color-bg-segment-selected);--scroll-thumb:var(--color-bg-tile);--control:var(--color-bg-ground);--control-2:var(--color-bg-ground);--sunken:var(--color-bg-ground);--input:var(--color-bg-ground);--track:var(--color-bg-ground);--icon-bg:var(--color-bg-chip);--seg-bg:var(--color-bg-ground);--switch-off:var(--color-bg-ground);--stage:var(--color-bg-ground);--text:var(--color-text-primary);--soft:var(--color-text-primary);--muted:var(--color-text-muted);--accent-text:var(--color-text-accent);--border-hover:var(--color-text-muted);--knob-off:var(--color-text-muted);--today-ring:var(--color-text-muted);--line:var(--color-line);--lineb:var(--color-line);--field-line:var(--color-line);--divider:var(--color-line);--bright:var(--color-fill-bright);--slider-fill:var(--color-fill-bright);--segment-fill:var(--color-fill-bright);--timer-fill:var(--color-fill-bright);--on-bright:var(--color-text-on-bright);--hover:var(--color-state-hover);--wash-2:var(--color-state-hover);--danger:var(--color-text-danger);--danger-bg:var(--color-bg-danger);--danger-line:var(--color-border-danger);--danger-fill:var(--color-bg-danger-fill);--on-danger-fill:var(--color-text-on-danger);--primary:var(--color-accent-primary);--secondary:var(--color-accent-secondary)}.shell{flex:1;display:flex;flex-direction:column;position:relative;width:100%;background:var(--page);border-radius:0;overflow:visible;transition:background .28s ease}#app.resting .shell{background:var(--color-bg-resting)}#app.paused .shell{background:var(--primary)}#app.light.paused .shell{background:color-mix(in srgb,var(--primary) 55%,var(--color-bg-card))}#app.light{--color-bg-ground:#eeebe8;--color-bg-card:#fbf9f6;--color-bg-tile:#f3efea;--color-fill-bright:#26221e;--color-text-primary:#26221e;--color-text-muted:#6a625a;--color-text-on-bright:#fbf9f6;--color-text-on-accent:#26221e;--color-line:rgba(38,34,30,.12);--color-text-accent:#26221e;--color-accent-secondary:#03a9f4;--color-bg-resting:#7dbb98;--color-bg-danger:#f5dede;--color-border-danger:#e3a0a0;--color-text-danger:#b42a2a;--color-state-hover:rgba(38,34,30,.06);--color-state-pressed:rgba(38,34,30,.12);--color-bg-chip:#fbf9f6;--color-fill-selected:#fbf9f6;--color-text-on-selected:#26221e;--color-bg-segment-selected:#fbf9f6;--scrim:rgba(38,34,30,.32);--lift:rgba(38,34,30,.16)}:host(.lightBody){background:#eeebe8;color-scheme:light}.view{display:none;width:100%;max-width:1184px;margin:0 auto;padding:22px 22px 76.8px}.view.active{display:block;flex:1 0 auto}.card,.panel,.tile{position:relative;background:var(--card);border-radius:36px;padding:22px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.grid{display:grid;grid-template-columns:repeat(12,minmax(0,1fr));gap:16px}.eyebrow{text-transform:uppercase;color:var(--muted)}.sub{color:var(--muted);margin-top:6.4px}.pill,.primary,.navBtn,.tab,.back,.hideBtn,.addBtn{cursor:pointer}.pill{min-height:0;padding:3.2px 0;border:0;border-radius:0;background:transparent;color:var(--text);text-decoration-line:underline;text-decoration-thickness:.8px;text-underline-offset:3.2px}.tab,.back{border-radius:799.2px;min-height:41.6px;padding:0 16px;background:var(--control);border:.32px solid var(--line);color:var(--text)}.primary{border-radius:799.2px;min-height:41.6px;padding:0 16px;border:0;background:var(--bright);color:var(--on-bright)}.activityCard,.weekly{grid-column:span 6}.activityCard,.weekly{min-height:288px}.sourceTag{display:inline-flex;margin-top:11.2px;padding:4px;border-radius:799.2px;background:var(--chip);color:var(--soft)}.workoutFooter{display:flex;justify-content:space-between;align-items:end;gap:22.4px;flex-wrap:wrap;margin-top:22.4px;width:100%;box-sizing:border-box}.workoutGallery{grid-column:span 12;display:flex;gap:16px;height:288px;overflow:hidden}.workoutPanel{position:relative;height:288px;flex:1 1 72px;min-width:70.4px;background:var(--card);border-radius:28.8px;padding:22.4px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);overflow:hidden;box-sizing:border-box;transition:flex .32s ease;cursor:pointer}.workoutPanel.active{flex:7 1 0;min-width:0;cursor:default}.workoutPanel.addPanel{flex:0 0 73.6px;min-width:73.6px;display:flex;align-items:center;justify-content:center;padding:14.4px}.workoutPanel{--edge-proximity:0;--cursor-angle:45deg;--edge-sensitivity:36;--color-sensitivity:56;--cone-spread:25;--fill-opacity:.18;--glow-color-60:hsl(199deg 97% 68% / 60%);--glow-color-40:hsl(199deg 97% 68% / 40%);--glow-color-30:hsl(199deg 97% 68% / 30%);--glow-color-20:hsl(199deg 97% 68% / 20%);--glow-color-10:hsl(199deg 97% 68% / 10%);--gradient-one:radial-gradient(at 80% 55%,#c084fc 0px,transparent 50%);--gradient-two:radial-gradient(at 69% 34%,#f472b6 0px,transparent 50%);--gradient-three:radial-gradient(at 8% 6%,#38bdf8 0px,transparent 50%);--gradient-four:radial-gradient(at 41% 38%,#c084fc 0px,transparent 50%);--gradient-five:radial-gradient(at 86% 85%,#f472b6 0px,transparent 50%);--gradient-six:radial-gradient(at 82% 18%,#38bdf8 0px,transparent 50%);--gradient-seven:radial-gradient(at 51% 4%,#f472b6 0px,transparent 50%);isolation:isolate}.workoutPanel:before,.workoutPanel:after,.workoutPanel>.edgeLight{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;pointer-events:none;transition:opacity .18s ease-out}.workoutPanel:before{z-index:2;border:.8px solid transparent;background:linear-gradient(var(--card) 0 100%) padding-box,linear-gradient(#fff0 0,#fff0) border-box,var(--gradient-one) border-box,var(--gradient-two) border-box,var(--gradient-three) border-box,var(--gradient-four) border-box,var(--gradient-five) border-box,var(--gradient-six) border-box,var(--gradient-seven) border-box;opacity:clamp(0,calc(.72 * (var(--edge-proximity) - var(--color-sensitivity)) / (100 - var(--color-sensitivity))),.72);-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,black calc(var(--cone-spread) * 1%),transparent calc((var(--cone-spread) + 15) * 1%),transparent calc((100 - var(--cone-spread) - 15) * 1%),black calc((100 - var(--cone-spread)) * 1%));mask-image:conic-gradient(from var(--cursor-angle) at center,black calc(var(--cone-spread) * 1%),transparent calc((var(--cone-spread) + 15) * 1%),transparent calc((100 - var(--cone-spread) - 15) * 1%),black calc((100 - var(--cone-spread)) * 1%))}.workoutPanel:after{z-index:1;border:.8px solid transparent;background:var(--gradient-one) padding-box,var(--gradient-two) padding-box,var(--gradient-three) padding-box,var(--gradient-four) padding-box,var(--gradient-five) padding-box,var(--gradient-six) padding-box,var(--gradient-seven) padding-box;opacity:clamp(0,calc(var(--fill-opacity) * (var(--edge-proximity) - var(--color-sensitivity)) / (100 - var(--color-sensitivity))),.18);mix-blend-mode:soft-light;-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,transparent 5%,black 15%,black 85%,transparent 95%);mask-image:conic-gradient(from var(--cursor-angle) at center,transparent 5%,black 15%,black 85%,transparent 95%)}.workoutPanel>.edgeLight{top:-19.2px;right:-19.2px;bottom:-19.2px;left:-19.2px;z-index:3;opacity:clamp(0,calc(.62 * (var(--edge-proximity) - var(--edge-sensitivity)) / (100 - var(--edge-sensitivity))),.62);mix-blend-mode:plus-lighter;-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,black 2.5%,transparent 10%,transparent 90%,black 97.5%);mask-image:conic-gradient(from var(--cursor-angle) at center,black 2.5%,transparent 10%,transparent 90%,black 97.5%)}.workoutPanel>.edgeLight:before{content:"";position:absolute;top:19.2px;right:19.2px;bottom:19.2px;left:19.2px;border-radius:inherit;box-shadow:inset 0 0 0 .8px var(--glow-color-60),inset 0 0 2.4px 0 var(--glow-color-40),inset 0 0 6.4px 0 var(--glow-color-30),inset 0 0 12.8px 0 var(--glow-color-20),0 0 2.4px 0 var(--glow-color-40),0 0 6.4px 0 var(--glow-color-30),0 0 12.8px 0 var(--glow-color-20),0 0 22.4px 1.6px var(--glow-color-10)}.workoutPanel:not(.borderGlowActive):before,.workoutPanel:not(.borderGlowActive):after,.workoutPanel:not(.borderGlowActive)>.edgeLight{opacity:0;transition:opacity .35s ease-out}#app.light .workoutPanel{--glow-color-40:hsl(199deg 97% 48% / 40%);--glow-color-30:hsl(199deg 97% 48% / 30%);--glow-color-20:hsl(199deg 97% 48% / 20%);--glow-color-10:hsl(199deg 97% 48% / 10%)}.workoutPanel:not(.active):not(.addPanel) .panelExpanded{opacity:0;filter:blur(8px);pointer-events:none}.workoutPanel:not(.active):not(.addPanel) .panelCollapsed{opacity:1;filter:blur(0)}.workoutPanel.active .panelExpanded{opacity:1;filter:blur(0);pointer-events:auto}.workoutPanel.active .panelCollapsed{opacity:0;filter:blur(6.4px);pointer-events:none}.panelExpanded{position:relative;z-index:4;width:100%;height:100%;min-width:0;box-sizing:border-box;display:flex;flex-direction:column;justify-content:space-between;transition:opacity .22s ease,filter .22s ease}.panelCollapsed{position:absolute;top:0;right:0;bottom:0;left:0;z-index:4;display:flex;align-items:center;justify-content:center;opacity:0;filter:blur(6.4px);transition:opacity .22s ease,filter .22s ease}.panelCollapsedText{writing-mode:vertical-rl;transform:rotate(180deg);white-space:nowrap}.workoutPanelTop{display:flex;justify-content:space-between;align-items:flex-start;gap:22.4px;width:100%;min-width:0;box-sizing:border-box}.workoutPanelActions{display:flex;gap:22.4px;flex-wrap:wrap;align-items:center;justify-content:flex-end;margin-left:auto}.startWorkoutBtn{background:var(--primary)!important;color:var(--color-text-on-accent)!important}.startWorkoutBtn:hover{filter:brightness(1.04)}.addPanelPlus{position:relative;z-index:4;font-size:27.2px;line-height:1}.addPanelLabel{position:absolute;z-index:4;bottom:16px;writing-mode:vertical-rl;transform:rotate(180deg);color:var(--muted)}@media (max-height:820px) and (min-width:621px){.modalStatic{padding:17.6px 22.4px}.timeTile{min-height:124.8px}}@media (max-width:900px){.weekCopy{white-space:normal}.workoutGallery{overflow-x:auto;scroll-snap-type:x mandatory;padding-bottom:3.2px}.workoutPanel,.workoutPanel.active{height:288px;flex:0 0 min(68.8vw,544px);min-width:min(68.8vw,544px);scroll-snap-align:start}.workoutPanel.addPanel{flex-basis:80px;min-width:80px}.panelCollapsed{display:none}}.moveActions{display:flex;gap:22.4px;flex-wrap:wrap}@keyframes feelingWarp{0%{transform:scale(1.03) skew(-2deg) translate(-1.5%);filter:saturate(1.02) blur(.8px)}50%{transform:scale(1.12) skew(1deg) translate(1%);filter:saturate(1.22) blur(1.5px)}to{transform:scale(1.06) skew(3deg) translate(-.5%);filter:saturate(1.1) blur(.6px)}}@keyframes feelingScan{0%{background-position:0 0,-80% 0}to{background-position:0 8px,180% 0}}.tempoExperiment{margin-top:14.4px;padding-top:16px;border-top:.32px solid var(--line)}.tempoEstimate{white-space:nowrap}.tempoQuad{position:relative;width:min(288px,100%);aspect-ratio:1/1;border-radius:28.8px;background:#ffffff06;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);overflow:hidden;touch-action:none;cursor:crosshair}.tempoCross{position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none;background:linear-gradient(to right,transparent calc(50% - .4px),rgba(255,255,255,.12) 50%,transparent calc(50% + .4px)),linear-gradient(to bottom,transparent calc(50% - .4px),rgba(255,255,255,.12) 50%,transparent calc(50% + .4px))}.tempoDot{position:absolute;left:50%;top:50%;width:17.6px;height:17.6px;border-radius:50%;background:var(--text);transform:translate(-50%,-50%);pointer-events:none;box-shadow:0 0 0 4.8px #ffffff12}.tempoPole{position:absolute;pointer-events:none;color:var(--muted)}.tempoFast{top:9.6px;left:50%;transform:translate(-50%)}.tempoSlow{bottom:9.6px;left:50%;transform:translate(-50%)}.tempoHard{right:9.6px;top:50%;transform:translateY(-50%)}.tempoLow{left:9.6px;top:50%;transform:translateY(-50%)}.tempoReadout{margin-top:9.6px;color:var(--muted)}.tempoRevealRow{margin-top:11.2px}.tempoRevealBtn{color:var(--muted);text-decoration-color:var(--muted)}.editTempoExperiment{margin-top:11.2px}.editTempoExperiment[hidden]{display:none}.testingZone{position:relative;overflow:hidden;border-radius:22.4px;background:#202226;border:.8px solid #4a4f58;box-shadow:none;--text:#d6d9df;--soft:#c7ccd5;--muted:#9ea5b0;--line:#4a4f58;--lineb:#4a4f58;--field-line:#4a4f58;color:var(--text)}.testingZoneInner{position:relative;padding:19.2px;background:linear-gradient(rgba(176,186,199,.045) .8px,transparent .8px),linear-gradient(90deg,rgba(176,186,199,.045) .8px,transparent .8px),#202226;background-size:16px 16px}.testingZoneTitleBlock{max-width:608px;margin-bottom:19.2px}.testingZoneTitleRow{display:flex;justify-content:space-between;align-items:center;gap:16px}.testingZoneTitleRow strong{color:#d6d9df}.testingZone .tempoEstimate{color:#aeb4bf}.testingZoneExplanation{margin:8px 0 0;color:#9ea5b0;text-align:left}.testingZoneLayout{display:grid;grid-template-columns:minmax(224px,288px) minmax(0,1fr);grid-template-areas:"controller feedback";gap:25.6px;align-items:start}.testingFeedbackForm{grid-area:feedback;display:grid;gap:14.4px;min-width:0;padding:16px;border:.32px solid var(--line);border-radius:16px;background:#252525}.testingFeedbackHeading{color:#d6d9df}.testingFeedbackField{display:grid;gap:6.4px;color:#9ea5b0}.testingFeedbackField select,.testingFeedbackField textarea{width:100%;border:.32px solid var(--line);background:#171717;color:#d6d9df;border-radius:11.2px;padding:8px 9.6px;font:inherit}.testingFeedbackField textarea{resize:vertical;min-height:65.6px}.testingRating{display:grid;grid-template-columns:repeat(5,1fr);gap:4.8px}.testingRating button{min-height:30.4px;border-radius:9.6px;border:.32px solid var(--line);background:#171717;color:#c7ccd5;cursor:pointer}.testingRating button.selected{border-color:#c7ccd5;background:#343434}.testingFeedbackSubmit{justify-self:start;min-height:33.6px;padding:0 12.8px;border-radius:11.2px;border:0;background:#ffffffe0;color:#111;cursor:pointer}.testingZoneControllerWrap{grid-area:controller;display:flex;flex-direction:column;align-items:center;justify-content:flex-start}.tempoQuadFrame{width:min(256px,100%);aspect-ratio:1/1;padding:0;background:linear-gradient(rgba(176,186,199,.075) .8px,transparent .8px),linear-gradient(90deg,rgba(176,186,199,.075) .8px,transparent .8px),#202226;background-size:16px 16px,16px 16px,auto;border-radius:16px}.testingZone .tempoQuad{width:100%;height:100%;border-radius:16px;background:#202226;border:.8px solid #5a606a;box-shadow:none}.testingZone .tempoCross{background:linear-gradient(to right,transparent calc(50% - .4px),rgba(176,186,199,.2) 50%,transparent calc(50% + .4px)),linear-gradient(to bottom,transparent calc(50% - .4px),rgba(176,186,199,.2) 50%,transparent calc(50% + .4px))}.testingZone .tempoDot{width:14.4px;height:14.4px;background:transparent;border:.8px solid #c4cad4;box-shadow:0 0 0 3.2px #c4cad40d}.testingZone .tempoPole{color:#8e96a2}.testingZone .tempoReadout{width:min(256px,100%);color:#9ea5b0;text-align:center;margin-top:9.6px}.testingZone button,.testingZone input,.testingZone select,.testingZone textarea{transition:opacity .14s ease,border-color .14s ease,color .14s ease,background .14s ease}.testingZone button:hover,.testingZone button:focus-visible{filter:none;opacity:.88}@media (max-width:900px){.testingZoneLayout{grid-template-columns:1fr;grid-template-areas:"controller" "feedback"}}.activityHeader{display:flex;align-items:center;gap:var(--inset);margin-bottom:var(--inset)}.activityIcon{display:grid;place-items:center}.icon{width:var(--glyph-size);height:var(--glyph-size);flex:none;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}.icon *{vector-effect:non-scaling-stroke}.addPanelPlus .icon,.addFab .icon{width:24px;height:24px}.checkinTabIcon .icon{width:18px;height:18px}.weekTick .icon{width:1em;height:1em}.activityRows{display:grid;gap:9.6px}.activityRow{display:grid;grid-template-columns:43.2px minmax(0,1fr);align-items:center;gap:11.2px;background:var(--tile-2);border-radius:24px;padding:12px 14px}.activityRowIcon{width:43.2px;height:43.2px;border-radius:16px;background:var(--icon-bg);display:grid;place-items:center;font-size:16px}.activityRowMeta{color:var(--soft);margin-top:2.4px}.toast{position:absolute;right:20.8px;top:20.8px;z-index:60;background:var(--bright);color:var(--on-bright);border-radius:799.2px;padding:8.8px 12.8px;opacity:0;transform:translateY(-6.4px);pointer-events:none;transition:opacity .18s ease,transform .18s ease}.toast.show{opacity:1;transform:none}.weekCopy{color:var(--muted);margin-top:9.6px;max-width:none;white-space:nowrap}.weekChip{background:var(--tile-2);border-radius:12.8px;min-height:60.8px;padding:9.6px 11.2px;display:flex;flex-direction:column;justify-content:space-between;gap:6.4px}.weekChipTop{display:flex;justify-content:space-between;align-items:center;gap:6.4px}.weekTick{font-size:11.2px;font-weight:800;line-height:1}.weekChip.total{background:var(--card2)}.workoutSurface{position:relative;overflow:hidden;isolation:isolate}.workoutContent{position:relative;z-index:2}.pixelTrailCanvas{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;z-index:1;pointer-events:none}#app.light .pixelTrailCanvas{opacity:.46}.sessionHead{display:flex;justify-content:space-between;align-items:flex-start;gap:16px}.sessionActions{display:flex;gap:22.4px;align-items:center;flex-wrap:wrap;justify-content:flex-end}.holdEnd{position:relative;overflow:hidden;min-width:110.4px;min-height:41.6px;padding:0 16px;border-radius:799.2px;border:.32px solid var(--line);background:var(--control);text-decoration:none;user-select:none;-webkit-user-select:none;touch-action:none}.holdEndFill{position:absolute;inset:0 auto 0 0;width:0;background:var(--bright);pointer-events:none}.holdEndLabel{position:relative;z-index:1;mix-blend-mode:difference;color:#fff}.holdEnd.holding{border-color:var(--muted)}.exerciseTitle{margin-top:4.8px;color:var(--accent-text)}.meta{color:var(--muted);margin-top:4.8px}.progress{height:46.4px;padding:0;background:transparent;border-radius:17.6px;display:flex;gap:3.2px;margin-top:19.2px;overflow:hidden}.progressSegment{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:0;padding:0;display:block;flex:1;min-width:0;background:var(--segment);border-radius:17.6px;position:relative;overflow:hidden;cursor:default}.progressSegment:after{content:"";position:absolute;inset:0 auto 0 0;width:0;background:var(--segment-fill);transition:width .2s linear}.progressSegment.done{background:transparent;opacity:0;pointer-events:none}.progressSegment.done:after{display:none}.progressSegment.active:after{width:var(--segment-progress,0%)}#app.resting .progressSegment:not(.done):not(.active),#app.paused .progressSegment:not(.done):not(.active){background:#fff}.progressSegment.rewindable{cursor:pointer}.progressSegment.rewindable:hover{filter:brightness(1.08)}.progressSegment:focus-visible{outline:1.6px solid var(--primary);outline-offset:-2.4px}.workGrid{display:grid;grid-template-columns:minmax(0,2fr) minmax(240px,1fr);gap:16px;margin-top:16px}.timerCard,.movementCard,.nextCard{position:relative;border-radius:28.8px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.timerCard{min-height:344px;background:var(--timer);overflow:hidden}.fill{position:absolute;inset:0 auto 0 0;width:100%;background:var(--timer-fill);transition:width .2s linear}.digits{position:absolute;top:0;right:0;bottom:0;left:0;display:flex;align-items:center;justify-content:center;font-size:clamp(152px,22.4vw,312px);font-weight:850;letter-spacing:-.11em;color:#fff;mix-blend-mode:difference;font-variant-numeric:tabular-nums}.movementCard{background:var(--stage);min-height:344px;display:grid;place-items:center;padding:22.4px}.movementCard{overflow:hidden}.movementRippleCanvas{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;z-index:0}.nextCard{background:var(--card);padding:22.4px;display:flex;justify-content:space-between;align-items:center;gap:16px;min-height:116.8px}.nextIcon{width:52.8px;height:52.8px;border-radius:19.2px;background:var(--icon-bg);display:grid;place-items:center;font-size:20.8px;flex:0 0 auto}.sectionLabel{margin:0 0 8px 22.4px}.moveSection{grid-column:span 12}.moveSection .workoutGallery{width:100%}.nextWrap{margin-top:16px}.nextLabel{margin:0 0 8px 22.4px}.nextCard{background:var(--card);padding:22.4px;display:flex;justify-content:space-between;align-items:center;gap:22.4px;min-height:86.4px;border-radius:28.8px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.nextMain{display:flex;align-items:center;gap:14.4px;min-width:0}.nextIcon{width:43.2px;height:43.2px;border-radius:12.8px;background:var(--icon-bg);display:grid;place-items:center;font-size:16px;flex:0 0 auto}.sessionControlRow{display:flex;justify-content:flex-end;gap:22.4px;align-items:center;margin-top:16px}.skipBtn{min-width:120px;min-height:41.6px;padding:0 14.4px;border:.8px solid var(--line);background:transparent;color:var(--text);text-decoration:none}.pause{min-width:120px;min-height:41.6px;padding:0 16px}.upcomingList{display:grid;gap:9.6px;margin-top:9.6px}.upcomingCard{--future-opacity:1;display:flex;align-items:center;justify-content:space-between;gap:22.4px;min-height:86.4px;padding:22.4px;border-radius:28.8px;background:var(--card);border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);opacity:var(--future-opacity);transition:opacity .22s ease}.upcomingCard:nth-child(-n+3){--future-opacity:1}.upcomingCard:nth-child(4){--future-opacity:.72}.upcomingCard:nth-child(5){--future-opacity:.48}.upcomingCard:nth-child(6){--future-opacity:.3}.upcomingCard:nth-child(n+7){--future-opacity:.16}.upcomingCard.sessionHidden{--future-opacity:.24!important;filter:saturate(.15)}.upcomingCard.sessionHidden .upcomingName{text-decoration:line-through}.upcomingCard.sessionHidden .upcomingIcon{opacity:.45}.upcomingCard.sessionHidden .upcomingMeta{opacity:.55}.upcomingInfo{display:flex;align-items:center;gap:14.4px;min-width:0}.upcomingIcon{width:43.2px;height:43.2px;flex:0 0 auto;border-radius:12.8px;background:var(--icon-bg);display:grid;place-items:center;font-size:16px}.upcomingMeta{color:var(--muted);margin-top:4px}.skipSessionBtn{flex:0 0 auto;min-height:41.6px;padding:0 14.4px;border:.8px solid var(--line);background:transparent;color:var(--text)}@media (max-width:900px){.weekCopy{white-space:normal}.nextCard{align-items:flex-start;flex-direction:column}.sessionControlRow{width:100%}.skipBtn,.pause{flex:1;min-width:0}.upcomingCard{align-items:flex-start;flex-direction:column}.skipSessionBtn{width:100%}}.countdown{display:none;position:fixed;top:0;right:0;bottom:0;left:0;width:100vw;height:100dvh;background:var(--page);z-index:300;align-items:center;justify-content:center;flex-direction:column;text-align:center;overflow:hidden}.countdown.active{display:flex}.pixelCanvas{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;display:block;z-index:1}.countdown:before{content:"";position:absolute;top:0;right:0;bottom:0;left:0;background:radial-gradient(circle at center,color-mix(in srgb,var(--primary) 16%,transparent),transparent 58%);pointer-events:none}.countNum{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);z-index:3}.countNum{font-size:clamp(144px,25.6vw,344px);font-weight:850;line-height:.75;letter-spacing:-.1em}.modalBackdrop{display:none;position:fixed;top:0;right:0;bottom:0;left:0;width:100vw;height:100dvh;z-index:145;background:var(--scrim);padding:28px;box-sizing:border-box;align-items:center;justify-content:center}.modalBackdrop.open{display:flex}.modal{width:min(1184px,100%);height:100%;max-width:1184px;max-height:none;overflow:hidden;background:var(--modal);border-radius:28.8px;padding:0;display:flex;flex-direction:column;box-sizing:border-box;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.modalStatic{flex:0 0 auto;padding:22.4px;background:var(--modal);border-bottom:.32px solid var(--divider)}.modalHead{display:flex;justify-content:space-between;align-items:flex-start;gap:16px;margin-bottom:12.8px}.modalHeaderActions{display:flex;gap:22.4px;align-items:center;flex:0 0 auto}.modalHead h2{margin:2.4px 0 0}.editNameRow{display:grid;gap:6.4px;margin-bottom:11.2px}.editNameLabel{color:var(--muted)}.editNameInput{min-height:42px;border-radius:var(--r-inner);border:.32px solid var(--field-line);background:var(--input);color:var(--text);padding:0 16px}.timeTiles{display:grid;grid-auto-flow:column;grid-auto-columns:minmax(0,1fr);gap:11.2px;margin-bottom:11.2px}.timeTile{background:var(--tile);min-height:148.8px;padding:16px;display:flex;flex-direction:column;justify-content:space-between}.timeHeader{display:flex;align-items:center;gap:14.4px}.timeIcon{width:46.4px;height:46.4px;border-radius:16px;background:var(--icon-bg);display:grid;place-items:center;flex:0 0 auto;font-size:17.6px;font-weight:760}.timeCopy{min-width:0}.rangeTrack{height:46.4px;border-radius:17.6px;background:var(--track);overflow:hidden;position:relative;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.rangeFill{position:absolute;inset:0 auto 0 0;background:var(--slider-fill);border-radius:17.6px 0 0 17.6px}.rangeInput{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;opacity:0;cursor:pointer}.exerciseScroller{min-height:0;overflow-y:auto;padding:3.2px 16px 17.6px 22.4px;border-top:.16px solid var(--divider);scrollbar-gutter:stable}.exerciseScroller::-webkit-scrollbar{width:6.4px}.exerciseScroller::-webkit-scrollbar-track{background:transparent}.exerciseScroller::-webkit-scrollbar-thumb{background:var(--scroll-thumb);border-radius:799.2px}.sectionTitle{text-transform:uppercase;color:var(--muted);margin:14.4px 0 8px}.moveList{display:grid;gap:8px}.moveRow{display:flex;justify-content:space-between;align-items:center;gap:22.4px;background:var(--row);border-radius:20.8px;padding:22.4px}.moveRow.hidden{opacity:.46}.moveRow.hidden .moveItemName{text-decoration:line-through}.moveMeta{color:var(--muted);margin-top:4px}.hideBtn{border-radius:799.2px;min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text)}.removeBtn{position:relative;overflow:hidden;border-radius:799.2px;min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);cursor:pointer}.removeFill{position:absolute;inset:0 auto 0 0;width:0;background:var(--danger-fill);pointer-events:none;transition:width 0s linear}.addInput{min-height:41.6px;border-radius:799.2px;border:.32px solid var(--field-line);background:var(--input);color:var(--text);padding:0 14.4px}.addBtn{border-radius:799.2px;min-height:42px;padding:0 16px;border:0;background:var(--bright);color:var(--on-bright)}.routineSummary{margin-top:14.4px;background:var(--sunken);border-radius:20.8px;padding:12.8px 14.4px;color:var(--soft)}.settingsHeader{display:flex;align-items:center;gap:12.8px;margin-bottom:24px}.back{width:46.4px;padding:0;font-size:24px}.tabs.rubberTabs{position:relative;display:inline-flex;gap:0;padding:3.2px;margin-bottom:17.6px;border-radius:12.8px;background:var(--control);border:.32px solid var(--line);overflow:hidden}.rubberIndicator{position:absolute;top:3.2px;left:3.2px;height:calc(100% - 6.4px);width:0;border-radius:12.8px;background:var(--bright);transition:left .34s cubic-bezier(.2,1.35,.4,1),width .34s cubic-bezier(.2,1.35,.4,1),transform .18s ease;transform-origin:center;z-index:0}.tabs.rubberTabs .tab{position:relative;z-index:1;min-height:41.6px;padding:0 16px;border:0;background:transparent;color:var(--text)}.tabs.rubberTabs .tab.active{color:var(--on-bright)}.settingsPane{display:none}.settingsPane.active{display:block}.integrationList,.toggleList{display:grid;gap:9.6px}.integration,.toggleRow{display:flex;justify-content:space-between;align-items:center;gap:14.4px;background:var(--raised);border-radius:22.4px;padding:14.4px 16px}.status{color:var(--muted);margin-top:3.2px}.note{color:var(--muted);line-height:1.5;max-width:688px}.switch{position:relative;width:50px;height:28px;padding:0;border-radius:var(--r-inner);background:var(--line);border:.4px solid var(--line);opacity:1;flex:0 0 auto;cursor:pointer;transition:background .18s ease,opacity .18s ease}.switch:after{content:"";position:absolute;width:24px;height:24px;top:50%;left:1.6px;border-radius:12px 4px 4px 12px;background:var(--text);transform:translateY(-50%);transition:left .18s ease,border-radius .18s ease,background .18s ease}.switch.on{background:var(--color-accent-primary);opacity:1}.switch.on:after{left:calc(100% - 25.6px);border-radius:4px 12px 12px 4px;background:var(--color-text-on-accent)}.themeChoice{display:flex;gap:9.6px;flex-wrap:wrap;align-items:center;margin:0}.themeBtn{min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);cursor:pointer}.themeBtn.active{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.settingsSelect{min-width:96px;min-height:32px;padding:0 27.2px 0 12px;border-radius:var(--r-inner);border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);font:inherit}.motionControlRow{align-items:center}.motionRangeWrap{display:flex;align-items:center;justify-content:flex-end;gap:9.6px;min-width:184px}.motionRangeWrap input{width:128px}.motionRangeWrap span{color:var(--muted);min-width:51.2px;text-align:right}.dangerText{color:var(--danger)}.confirmBackdrop{display:none;position:fixed;top:0;right:0;bottom:0;left:0;z-index:80;padding:22.4px;background:var(--scrim);align-items:center;justify-content:center}.confirmBackdrop.open{display:flex}.confirmCard{width:min(448px,100%);background:var(--card);border-radius:28.8px;padding:22.4px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.confirmActions{display:flex;justify-content:flex-end;align-items:center;gap:22.4px;margin-top:22.4px}.holdDelete{position:relative;overflow:hidden;min-width:88px;min-height:41.6px;padding:0 17.6px;border:.8px solid var(--danger-line);border-radius:12.8px;background:var(--danger-bg);color:var(--text);cursor:pointer}.holdDeleteFill{position:absolute;inset:0 auto 0 0;width:0;background:var(--danger-fill);pointer-events:none}.holdDeleteLabel{position:relative;z-index:1;color:var(--text)}.holdDelete.holding .holdDeleteLabel,.removeBtn.holding .removeLabel{color:#fff}.bottomNav{position:sticky;bottom:22.4px;display:flex;gap:22.4px;z-index:100;width:max-content;margin:-65.6px 0 0 22.4px}.navBtn{width:43.2px;height:43.2px;padding:0;border-radius:16px;background:var(--control);border:.32px solid var(--line);color:var(--text)}.navBtn.active{background:var(--color-fill-selected);color:var(--color-text-on-selected)}@media (max-width:900px){.weekCopy{white-space:normal}.grid{grid-template-columns:1fr}.moveSection,.activityCard,.weekly{grid-column:auto}.workGrid{grid-template-columns:1fr}.timerCard,.movementCard{min-height:256px}.timeTiles{grid-auto-flow:row;grid-template-columns:1fr}}@media (max-width:620px){.modal{width:100%;height:100%;max-height:100%}#app{padding:0}.shell{border-radius:0}.view{padding:14.4px 14.4px 75.2px}.timerCard{min-height:224px}.digits{font-size:144px}.modalBackdrop{padding:9.6px}.modal{height:100%}.modalStatic{padding:14.4px}.exerciseScroller{padding:3.2px 9.6px 14.4px 14.4px}}:is(button,.primary,.tab,.back,.navBtn,.themeBtn,.energyBtn,.hideBtn,.addBtn,.removeBtn,.skipBtn,.holdEnd,.editNameInput,.addInput,.rangeTrack,.progress,.progressSegment):not(.segBtn,.stepBtn,.checkinTab,.switch,.dragHandle,.navBtn,.createPresetBtn,.sheetChoice,.setupSummary,.wxStyleBtn){border-radius:var(--r-inner)!important}.card,.panel,.tile,.timerCard,.movementCard,.nextCard,.modal{border-radius:var(--r-card)}.movementCreatorLaunch{display:flex;gap:9.6px;align-items:center;margin:3.2px 0 14.4px}.movementCreatorOpen,.restAddBtn{min-height:35.2px;padding:0 12.8px;border-radius:12.8px;cursor:pointer}.movementCreatorOpen{border:0;background:var(--bright);color:var(--on-bright)}.restAddBtn{border:.32px solid var(--field-line);background:var(--control-2);color:var(--text)}.movementCreator{position:relative;margin:0 0 14.4px;padding:19.2px 22.4px;border-radius:22.4px;background:var(--card);border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.movementCreator[hidden]{display:none}.movementCreatorHead{display:flex;align-items:center;justify-content:space-between;gap:16px;margin-bottom:17.6px}.movementCreatorHead h3{margin:0}.movementCreatorClose{position:static}.movementCreatorFields{display:grid;grid-template-columns:minmax(0,1.45fr) minmax(0,.85fr);gap:16px 19.2px}.movementCreatorFields[hidden]{display:none!important}.movementCreatorFields>label{display:grid;gap:6.4px;min-width:0;color:var(--text)}.movementTimingRow{grid-column:1/-1;display:grid;grid-template-columns:minmax(240px,352px) minmax(208px,1fr) auto;gap:17.6px;align-items:end}.durationStack{display:grid;gap:6.4px;color:var(--text)}.creatorDurationRow{display:grid;grid-template-columns:minmax(96px,1fr) minmax(104px,1fr);gap:12.8px;align-items:center}.creatorNumber{width:100%;min-width:0}.creatorUnitSelect{min-height:41.6px;width:100%;padding:0 11.2px;border-radius:12.8px;border:.32px solid var(--field-line);background:var(--input);color:var(--text);font:inherit}.globalTimingToggle{display:flex!important;align-items:center;gap:8px!important;min-height:41.6px;cursor:pointer;color:var(--text)!important;white-space:nowrap}.globalTimingToggle input{position:absolute;opacity:0;pointer-events:none}.toggleTrack{position:relative;width:38.4px;height:22.4px;border-radius:799.2px;background:var(--switch-off);border:.32px solid var(--field-line);flex:0 0 auto;transition:background .16s ease}.toggleThumb{position:absolute;width:17.6px;height:17.6px;top:1.6px;left:1.6px;border-radius:50%;background:var(--knob-off);transition:left .16s ease,background .16s ease}.globalTimingToggle input:checked+.toggleTrack{background:var(--bright)}.globalTimingToggle input:checked+.toggleTrack .toggleThumb{left:17.6px;background:var(--on-bright)}.toggleLabel{color:var(--soft)}.creatorAddButton{min-width:97.6px;min-height:41.6px;align-self:end}@media (max-width:900px){.movementCreatorFields{grid-template-columns:1fr}.movementTimingRow{grid-column:auto;grid-template-columns:1fr;align-items:stretch}.globalTimingToggle{min-height:35.2px}.creatorAddButton{width:100%}}.moveRow.restItem{background:var(--row-rest)}.moveKindBadge{display:inline-flex;margin-left:6.4px;padding:2.4px 5.6px;border:.8px solid var(--field-line);border-radius:799.2px;color:var(--muted);vertical-align:middle}@media (max-width:900px){.movementCreatorFields,.movementCreatorFields.restFields{grid-template-columns:1fr;padding-right:0}.movementCreatorClose{position:static;margin-left:auto;display:block;margin-bottom:12.8px}}.createMoveOptions{margin:0 0 14.4px;padding:14.4px;border-radius:19.2px;background:var(--card2);border:.32px solid var(--line)}.createMoveOptions[hidden]{display:none}.createOptionLabel{text-transform:uppercase;color:var(--muted);margin-bottom:8px}.createPresetChoice{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}.createPresetBtn{min-height:60.8px;padding:11.2px 12.8px;border-radius:14.4px;border:.8px solid var(--field-line);background:transparent;color:var(--text);text-align:left;cursor:pointer}.createPresetBtn strong{display:block}.createPresetBtn span{display:block;color:var(--muted);margin-top:3.2px}.createPresetBtn.active{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.createPresetBtn.active span{color:var(--on-bright);opacity:.68}.createExtras{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px;margin-top:9.6px}.createExtraToggle{display:flex;align-items:flex-start;gap:8px;padding:9.6px 11.2px;border:.8px solid var(--field-line);border-radius:14.4px;cursor:pointer}.createExtraToggle input{margin-top:2.4px}.createExtraToggle span{display:grid;gap:2.4px}.createExtraToggle small{color:var(--muted)}.creatorUnitSelect{min-height:41.6px;padding:0 9.6px;border-radius:12.8px;border:.32px solid var(--field-line);background:var(--input);color:var(--text);font:inherit}@media (max-width:900px){.createPresetChoice,.createExtras{grid-template-columns:1fr}}.globalTimingToggle{display:inline-flex!important;grid-template-columns:none!important;align-items:center;gap:5.6px!important;color:var(--text)!important;white-space:nowrap}.globalTimingToggle input{margin:0}.globalTimingValue{min-height:41.6px;display:flex;align-items:center;padding:0 11.2px;border-radius:12.8px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--muted)}.createFlow{display:grid;gap:9.6px;padding:3.2px 0 8px}.createFlow[hidden]{display:none}.createStep{border-radius:22.4px;background:var(--tile);border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);overflow:hidden}.createStepHeader{width:100%;min-height:57.6px;padding:14.4px 17.6px;border:0;background:transparent;color:var(--text);display:flex;align-items:center;justify-content:space-between;gap:19.2px;text-align:left;cursor:pointer}.createStepHeader:disabled{cursor:not-allowed;opacity:.42}.createStepIdentity{display:flex;align-items:center;gap:9.6px}.createStepNumber{width:22.4px;height:22.4px;border-radius:799.2px;display:grid;place-items:center;border:.32px solid var(--line);color:var(--muted)}.createStepSummary{min-width:0;color:var(--muted);text-align:right}.createStepBody{display:none;padding:0 14.4px 14.4px}.createStep.active .createStepBody{display:block}.createStep.active .createStepHeader{border-bottom:.32px solid var(--divider)}.createStepSlot{display:grid;gap:11.2px}.createStepFooter{display:flex;justify-content:flex-end;margin-top:14.4px}.createStepFooter .primary:disabled{opacity:.35;cursor:not-allowed}.modal.createMode .movementTimingRow{display:none}.modal.createMode .movementCreator{margin-bottom:8px}.modal.createMode .movementCreatorFields{grid-template-columns:minmax(0,1.4fr) minmax(0,1fr)}.modal.createMode .movementCreatorFields.restFields{grid-template-columns:1fr}.modal.createMode .movementCreatorLaunch{margin-top:0}.modal.createMode .sectionTitle{margin-top:9.6px}.modal.createMode .modalStatic{padding-bottom:14.4px}.modal:not(.createMode) .createFlow{display:none!important}#app.resting .movementCard{background:#ffffff0e}#app.resting .movementRippleCanvas{opacity:1}#app.light.resting .movementCard{background:#fbf9f638}.nextCard .skipSessionBtn{margin-left:auto}.modal:not(.createMode) .movementCreatorLaunch{margin-top:25.6px}.testingFeedbackThanks{grid-area:feedback;min-height:176px;padding:19.2px;border:.32px solid var(--line);border-radius:16px;background:#252525;display:flex;flex-direction:column;justify-content:center;align-items:flex-start;gap:6.4px}.testingFeedbackThanks[hidden]{display:none}.testingFeedbackThanks strong{color:#f0f0f0}.testingFeedbackThanks p{margin:0;color:#9ea5b0}.testingFeedbackThanks a{color:#d6d9df;text-underline-offset:2.4px}:host(:fullscreen){overflow:auto;width:100vw;height:100vh}.entitySelect{max-width:min(256px,36.8vw);text-overflow:ellipsis;field-sizing:content}.integration .status code{padding:.8px 4.8px;border-radius:4.8px;background:var(--wash-2)}.integration .pill[disabled]{cursor:default;opacity:.7}#app :focus{outline:none}#app :focus-visible{outline:2.4px solid var(--primary);outline-offset:2.4px}#app .workoutPanel:focus-visible{outline-offset:-2.4px}@media (max-width:620px){.bottomNav{margin-left:14.4px}}.shell:has(.countdown.active) .bottomNav{visibility:hidden}@media (max-width:900px){.workoutPanel:not(.active):not(.addPanel) .panelExpanded{opacity:1;filter:none;pointer-events:auto}}.grid>*{min-width:0}.insightCard{display:grid;gap:22.4px}.day{display:grid;gap:6.4px;justify-items:center}.checkinBackdrop{z-index:160}.checkinCard{width:min(576px,100%)}.checkinCard .sub{margin-top:8px}.checkinSliders{display:grid;gap:11.2px;margin-top:19.2px}.checkinTile{min-height:0;gap:var(--inset);border:0}.scaleEnds{display:flex;justify-content:space-between;margin-top:6.4px;color:var(--muted)}.rangeTrack:focus-within{outline:2.4px solid var(--primary);outline-offset:2.4px}.checkinTab{position:fixed;right:0;top:50%;transform:translateY(-50%);z-index:120;display:flex;flex-direction:column;align-items:center;gap:4px;padding:16px 4px;border:.32px solid var(--line);border-right:0;border-radius:var(--r-fine) 0 0 var(--r-fine)!important;background:var(--control);color:var(--text);cursor:pointer;transition:padding .18s ease,background .18s ease}.checkinTab:hover{padding-right:12.8px}.checkinTabIcon{font-size:16px;line-height:1}.checkinTabLabel{writing-mode:vertical-rl;transform:rotate(180deg)}.checkinBadge{position:absolute;top:8px;left:8px;width:8px;height:8px;border-radius:50%;background:var(--secondary);box-shadow:0 0 0 2.4px var(--control),0 0 9.6px color-mix(in srgb,var(--secondary) 70%,transparent);animation:checkinPulse 1.8s ease-in-out infinite}@keyframes checkinPulse{50%{box-shadow:0 0 0 3px var(--control),0 0 2px color-mix(in srgb,var(--secondary) 20%,transparent)}}@media (prefers-reduced-motion: reduce){.checkinBadge{animation:none}}.shell:has(#workoutView.active) .checkinTab,.shell:has(.countdown.active) .checkinTab{display:none}#app.light .checkinBadge{box-shadow:0 0 0 2.4px var(--color-bg-ground),0 0 9.6px color-mix(in srgb,var(--primary) 50%,transparent)}.feelSection{grid-column:span 12;margin-top:16px}.feelCard{display:grid;gap:19.2px}.feelTop{display:grid;grid-template-columns:minmax(0,1fr) minmax(208px,336px);gap:22.4px;align-items:end}.feelDays{display:grid;grid-template-columns:repeat(7,minmax(0,1fr));gap:8px}.feelDay{min-height:0;gap:9.6px}.feelDay.future{opacity:.4}.feelDay.today{box-shadow:inset 0 0 0 .8px var(--today-ring)}.feelDots{font-size:6.4px;letter-spacing:1.6px;color:var(--muted)}.feelMeter{display:grid;gap:4.8px}.feelMeterTop{display:flex;justify-content:space-between;gap:6.4px;color:var(--muted)}.feelMeterTop span:last-child{color:var(--text)}.feelTrack{height:6.4px;border-radius:799.2px;background:var(--wash-2);overflow:hidden}.feelTrack span{display:block;height:100%;border-radius:799.2px}@media (max-width:900px){.feelSection{grid-column:auto}.feelTop{grid-template-columns:1fr}.feelDays{grid-template-columns:repeat(4,minmax(0,1fr))}}@media (max-width:620px){.feelDays{grid-template-columns:repeat(2,minmax(0,1fr))}}.checkinTile .timeHeader{align-items:center}.checkinTab:not(.due){opacity:.6}.checkinTab:not(.due):hover{opacity:1}.activityCard{grid-column:span 3}.weekly{grid-column:span 9;cursor:pointer;transition:border-color .18s ease,background .18s ease}.weekly:hover{border-color:var(--border-hover)}@media (max-width:1200px){.activityCard{grid-column:span 4}.weekly{grid-column:span 8}}@media (max-width:900px){.activityCard,.weekly{grid-column:auto}}.insightCard{grid-column:span 9;align-content:start}@media (max-width:1200px){.insightCard{grid-column:span 8}}@media (max-width:900px){.insightCard{grid-column:auto}}.helpCard .helpSteps,.helpCard .helpNote{max-width:688px}.helpCard .note{margin:0}.helpSteps{margin:19.2px 0 0;padding:0;list-style:none;counter-reset:help;display:grid;gap:9.6px}.helpSteps li{counter-increment:help;display:grid;gap:4.8px;position:relative;padding:14.4px 16px 14.4px 52.8px;border-radius:20.8px;background:var(--tile);color:var(--muted)}.helpSteps li:before{content:counter(help);position:absolute;left:14.4px;top:12.8px;width:25.6px;height:25.6px;border-radius:9.6px;display:grid;place-items:center;background:var(--icon-bg);color:var(--text)}.helpSteps strong,.helpSteps b,.helpNote b{color:var(--text)}.helpCard code{padding:.8px 4.8px;border-radius:4.8px;background:var(--wash-2)}.helpNote{display:grid;gap:3.2px;margin-top:9.6px;padding:12.8px 16px;border-radius:17.6px;border:.32px solid var(--field-line);color:var(--muted)}.helpNote strong{color:var(--text)}.rowLabel{grid-column:1/-1;margin-top:16px;margin-bottom:-8px}.checkinTab{flex-direction:row;align-items:center;gap:0}.checkinTabMain{display:flex;flex-direction:column;align-items:center;gap:4px}.checkinPeek{display:grid;gap:3.2px;justify-items:start;white-space:nowrap;overflow:hidden;max-width:0;opacity:0;margin-right:0;transition:max-width .32s cubic-bezier(.2,1.2,.4,1),opacity .2s ease,margin-right .32s ease}.checkinTab.peek{padding-left:17.6px;opacity:1}.checkinTab.peek .checkinPeek{max-width:176px;opacity:1;margin-right:14.4px}.peekCountdown{font-size:24px;font-weight:800;letter-spacing:-.04em;line-height:1;font-variant-numeric:tabular-nums}.peekAt{color:var(--muted)}@media (prefers-reduced-motion: reduce){.checkinPeek{transition:none}}.activityRowMeta{color:var(--text);margin-top:1.6px;font-variant-numeric:tabular-nums}.feelTop{grid-template-columns:1fr}:host{--primary:#03A9F4;--secondary:#D0FF00;--font:Inter,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;--font-tile:Geist,var(--font);--w-regular:400;--w-medium:500;--w-semibold:600;--w-bold:700;--w-heavy:800;--t-display:52px;--t-title:22px;--t-card-title:18px;--t-value:16px;--t-section:18px;--t-strong:14px;--t-body:12px;--t-caption:12px;--lh-display:1.05;--lh-title:1;--t-wx-temp:64px;--t-wx-range:24px;--t-tile-title:14px;--lh-tile-title:22.4px;--t-tile-detail:16px;--lh-tile-detail:20px;--inset:16px;--r-card:48px;--r-tile:32px;--r-inner:16px;--r-fine:12px;--tile-min:78px;--chip-size:46px;--glyph-size:34px;--gutter:22px;--grid-gap:16px}@media (max-width:620px){:host{--t-display:46px;--t-title:20px;--t-value:20px;--t-section:16px;--t-strong:15px;--t-body:14px;--t-caption:11px;--lh-display:.92;--lh-title:1.05}}#app{font-family:var(--font);font-size:var(--t-body);font-weight:var(--w-regular);line-height:1.4}#app button,#app input,#app select,#app textarea{font-family:inherit}:where(#app) strong,:where(#app) b{font-weight:var(--w-bold)}.title,.workoutName,.exerciseTitle,.feelHeadline,.settingsTitle{font-size:var(--t-display);font-weight:var(--w-heavy);line-height:var(--lh-display);letter-spacing:-.055em}.confirmTitle,.sheetTitle,.modalHead h2,.paneTitle,.movementCreatorHead h3,.testingFeedbackThanks strong{font-size:var(--t-title);font-weight:var(--w-medium);font-style:italic;line-height:var(--lh-title);letter-spacing:-.03em}.activityTitle{font-size:var(--t-card-title);font-weight:var(--w-medium);font-style:italic;line-height:1.1;letter-spacing:-.02em;text-box:trim-both cap alphabetic}.paneTitle{margin:0 0 10px}.activityRowMeta,.nextName,.upcomingName,.editNameInput,.videoClock{font-size:var(--t-value);font-weight:var(--w-regular);line-height:1.15;letter-spacing:-.02em}.sectionLabel,.nextLabel{font-size:var(--t-section);font-weight:var(--w-regular);line-height:1.2;letter-spacing:-.01em}.activityRowName,.timeLabel,.moveItemName,.setupSummaryText strong,.sheetChoice strong,.createPresetBtn strong,.createExtraToggle strong{font-family:var(--font-tile);font-size:var(--t-tile-title);font-weight:var(--w-semibold);line-height:var(--lh-tile-title);letter-spacing:0}.moveMeta,.setupSummaryText small,.sheetChoice small,.createPresetBtn span,.createExtraToggle small{font-family:var(--font-tile);font-size:var(--t-tile-detail);font-weight:var(--w-regular);line-height:var(--lh-tile-detail);letter-spacing:0}.integration strong,.toggleRow strong,.setupName,.weekChipTop strong,.panelCollapsedText,.activityCount,.metaType,.kindChip,.helpSteps strong,.addGhost strong,.helpNote strong,.createStepIdentity strong,.testingZoneTitleRow strong,.testingFeedbackHeading,.tempoEstimate,.primary,.tab,.skipBtn,.skipSessionBtn,.hideBtn,.removeBtn,.addBtn,.themeBtn,.holdEnd,.holdDelete,.movementCreatorOpen,.restAddBtn,.creatorAddButton,.testingFeedbackSubmit,.testingRating button,.toast,.checkinTabLabel{font-size:var(--t-strong);font-weight:var(--w-semibold);line-height:1.25;letter-spacing:-.01em}.status,.setupValue,.sub,.meta,.note,.weekCopy,.addInput,.settingsSelect,.pill,.routineSummary,.helpSteps li,.helpNote,.createStepSummary{font-size:var(--t-body);font-weight:var(--w-regular);line-height:1.4;letter-spacing:0}.setupCaption,.moveEditForm label>span,.addGhostText small,.setupSummaryAction,.metaTable th,.metaSub,.eyebrow,#stepLabel,.sourceTag,.addPanelLabel,.motionRangeWrap span,.sectionTitle,.editNameLabel,.scaleEnds,.peekAt,.upcomingMeta,.tempoPole,.tempoReadout,.tempoRevealBtn,.testingFeedbackField,.testingZoneExplanation,.testingFeedbackThanks p,.movementCreatorClose,.movementCreatorFields>label,.durationStack,.globalTimingToggle,.toggleLabel,.moveKindBadge,.createOptionLabel,.fieldError,.globalTimingValue,.createStepNumber,.feelMeterTop,#app code{font-size:var(--t-caption);font-weight:var(--w-regular);line-height:1.35;letter-spacing:0}.eyebrow,#stepLabel,.sectionTitle,.setupCaption{letter-spacing:.1em}.globalTimingToggle{font-size:var(--t-caption)!important}.workoutGallery,.workoutPanel{height:340px}@media (max-width:900px){.workoutPanel,.workoutPanel.active{height:320px}}@media (max-width:900px){.workoutGallery{height:auto}.workoutPanel,.workoutPanel.active{height:auto;min-height:320px}}@media (max-width:620px){.view{padding-left:0;padding-right:0}.settingsHeader,.sessionHead,.sessionControlRow{margin-left:16px;margin-right:16px}.tabs.rubberTabs,.sectionLabel,.rowLabel{margin-left:16px}.grid{gap:8px}.rowLabel,.feelSection{margin-top:16px}.rowLabel{margin-bottom:-4px}.sectionLabel{margin-bottom:8px}.workoutGallery{gap:8px}.workoutPanel,.workoutPanel.active{flex:0 0 100%;min-width:100%}.workoutPanel.addPanel{flex:0 0 100%;min-width:100%;min-height:120px}.card,.workoutPanel,.timerCard,.movementCard,.nextCard,.upcomingCard,.confirmCard{padding:16px}.activityRows,.insightCard,.feelCard{gap:8px}.activityRow,.weekChip{padding:10px 12px}.feelDays{gap:8px}.workGrid{gap:8px;margin-top:8px}.nextWrap,.sessionControlRow{margin-top:8px}.upcomingList{gap:8px}}.tabs.rubberTabs .tab{white-space:nowrap}@media (max-width:620px){.tabs.rubberTabs{display:flex;width:max-content;max-width:calc(100% - 32px);overflow-x:auto;scrollbar-width:none}.tabs.rubberTabs::-webkit-scrollbar{display:none}.tabs.rubberTabs .tab{flex:0 0 auto}}.insightCard{display:flex;flex-direction:column;gap:0}@media (max-width:1200px) and (min-width:901px){.timeTiles{grid-auto-flow:row;grid-template-columns:repeat(2,1fr)}}#stepLabel{margin-top:9.6px}#exerciseMeta{margin-top:4px}.moveRow{justify-content:flex-start;gap:12.8px}.moveText{flex:1;min-width:0}.moveActions{display:flex;gap:6.4px;flex:0 0 auto}.dragHandle{flex:0 0 auto;display:grid;place-items:center;width:32px;height:40px;margin:-8px 0 -8px -9.6px;padding:0;border:0;border-radius:12px;background:transparent;color:var(--muted);cursor:grab;touch-action:none}.dragHandle:hover{background:var(--hover);color:var(--text)}.moveRow.dragging{box-shadow:0 10px 30px var(--lift),inset 0 0 0 1.5px var(--primary);position:relative;z-index:2}.moveRow.dragging .dragHandle{cursor:grabbing;color:var(--text)}.removeBtn:hover,.hideBtn:hover{border-color:var(--muted)}.toast{position:fixed;z-index:400;display:flex;align-items:center;gap:12.8px}.toast.withAction{pointer-events:auto}.toastAction{border:0;padding:0;background:none;color:inherit;font:inherit;text-decoration:underline;text-underline-offset:3px;cursor:pointer}.modalTop{flex:0 0 auto;padding:22px 22px 0}.modalTop .modalHead{margin-bottom:0;padding-bottom:16px}@media (min-width:901px){.modal:not(.createMode){display:grid;grid-template-columns:minmax(340px,420px) minmax(0,1fr);grid-template-rows:auto minmax(0,1fr)}.modal:not(.createMode) .modalTop{grid-column:1/-1;border-bottom:.32px solid var(--divider)}.modal:not(.createMode) .modalStatic{grid-column:1;grid-row:2;overflow-y:auto;border-bottom:0;border-right:.32px solid var(--divider)}.modal:not(.createMode) .exerciseScroller{grid-column:2;grid-row:2;border-top:0;padding-top:12px}.modal:not(.createMode) .timeTiles{grid-auto-flow:row;grid-template-columns:minmax(0,1fr)}}.timeTiles{align-items:start}.removeLabel{position:relative;z-index:1}.removeBtn.holding{border-color:var(--danger-fill)}#deleteMoveConfirm{z-index:200}.moveRow{will-change:transform}.moveRow.dragging{box-shadow:0 18px 40px var(--lift),inset 0 0 0 1.5px var(--primary);z-index:3;transform-origin:center}.moveRow.editing{display:block;padding:16px;box-shadow:inset 0 0 0 1.5px var(--primary)}.moveEditForm{display:grid;gap:14.4px}.moveEditFields{display:grid;grid-template-columns:minmax(0,1.4fr) minmax(0,1fr);gap:12.8px}.moveEditForm label:not(.globalTimingToggle){display:grid;gap:6.4px;min-width:0}.moveEditForm .addInput{width:100%;min-width:0}.moveEditTiming{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:12.8px}.moveEditTiming .creatorDurationRow{display:grid;grid-template-columns:96px 128px;gap:9.6px}.creatorDurationRow.isDisabled{opacity:.38}.moveEditActions{display:flex;justify-content:flex-end;align-items:center;gap:22.4px}@media (max-width:620px){.moveEditFields{grid-template-columns:1fr}}.integration .status code{color:var(--soft)}#app.resting :is(.sessionHead,.nextLabel,.sessionControlRow){--muted:#f4f4f4;color:var(--text)}#app.paused :is(.sessionHead,.nextLabel,.sessionControlRow){--text:#090909;--muted:rgba(9,9,9,.8);--accent-text:#090909;--line:rgba(9,9,9,.3);color:var(--text)}#app.light:is(.resting,.paused) :is(.sessionHead,.nextLabel,.sessionControlRow){--text:#26221e;--muted:rgba(38,34,30,.85);--accent-text:#26221e;--line:rgba(38,34,30,.25);color:var(--text)}.moveList{display:flex;flex-direction:column}.movementCreatorOpen,.restAddBtn{display:inline-flex;align-items:center;gap:6px;touch-action:none;user-select:none;-webkit-user-select:none;cursor:grab;transition:transform .42s cubic-bezier(.34,1.46,.64,1),opacity .2s ease}.movementCreatorOpen svg,.restAddBtn svg{width:14px;height:14px;margin-left:-3px;opacity:.55;flex:0 0 auto}.movementCreatorOpen.lifting,.restAddBtn.lifting{transform:scale(.92);opacity:.4;cursor:grabbing;transition:transform .16s ease,opacity .16s ease}.addGhost{position:fixed;left:0;top:0;z-index:20;pointer-events:none;box-sizing:border-box;display:flex;align-items:center;gap:8px;padding:0 12.8px;overflow:hidden;white-space:nowrap;border-radius:12px;background:var(--bright);color:var(--on-bright);box-shadow:0 12px 30px var(--lift);will-change:transform;transition:width .4s cubic-bezier(.34,1.46,.64,1),height .4s cubic-bezier(.34,1.46,.64,1),border-radius .3s ease,padding .3s ease,background .2s ease,color .2s ease,box-shadow .25s ease,opacity .18s ease}.addGhost.rest{background:var(--control-2);color:var(--text);box-shadow:inset 0 0 0 .5px var(--field-line),0 12px 30px var(--lift)}.addGhostGrip{display:grid;place-items:center;flex:0 0 auto;opacity:.55}.addGhostGrip svg{width:14px;height:14px;transition:width .3s ease,height .3s ease}.addGhostText{display:grid;min-width:0}.addGhostText small{color:var(--muted);max-height:0;opacity:0;transition:max-height .3s ease,opacity .2s ease}.addGhost.overList{border-radius:20.8px;gap:12.8px;padding:0 22.4px 0 12.8px;background:var(--row);color:var(--text);box-shadow:inset 0 0 0 1.5px var(--primary),0 16px 36px var(--lift)}.addGhost.overList .addGhostGrip svg{width:18px;height:18px}.addGhost.overList .addGhostText small{max-height:20px;opacity:1;margin-top:4px}.addGhost.leaving{opacity:0}.dropSlot{flex:0 0 auto;height:0;margin-top:-8px;border-radius:20.8px;background:color-mix(in srgb,var(--primary) 9%,transparent);box-shadow:inset 0 0 0 1.5px color-mix(in srgb,var(--primary) 40%,transparent);transition:height .42s cubic-bezier(.34,1.46,.64,1),margin-top .42s cubic-bezier(.34,1.46,.64,1),opacity .2s ease}.dropSlot.leaving{opacity:0;transition:height .26s cubic-bezier(.4,0,.2,1),margin-top .26s cubic-bezier(.4,0,.2,1),opacity .16s ease}@media (prefers-reduced-motion: reduce){.addGhost,.dropSlot,.movementCreatorOpen,.restAddBtn{transition:none}}.exerciseScroller,.modalStatic,.createFlow{overflow-anchor:none}.videoStage{position:absolute;top:0;right:0;bottom:0;left:0;z-index:3;display:grid;place-items:center;background:#000;opacity:0;pointer-events:none;transition:opacity .3s ease}#app.videoStep .videoStage{opacity:1;pointer-events:auto}.videoStage{container-type:size}.videoFrame{width:min(100cqw,calc(100cqh * 16 / 9));aspect-ratio:16/9}.videoFrame>*{display:block;width:100%;height:100%;border:0}.videoSound{position:absolute;left:50%;bottom:16px;transform:translate(-50%);z-index:2}.videoProbe{position:fixed;left:-10000px;top:0;width:320px;height:180px;opacity:0;pointer-events:none}.digits.long{font-size:clamp(96px,12.8vw,200px)}.moveEditFields.videoFields{grid-template-columns:minmax(0,1fr)}.fieldError{margin:0;color:var(--danger)}.addInput.invalid{border-color:var(--danger)}@media (prefers-reduced-motion: reduce){.videoStage{transition:none}}.workGrid{transition:grid-template-columns .55s cubic-bezier(.2,.8,.2,1),gap .55s cubic-bezier(.2,.8,.2,1)}.timerCard{transition:opacity .25s ease}#app.videoStep .timerCard{opacity:0;min-width:0;pointer-events:none}.workGrid{container-type:inline-size}#app.videoStep .movementCard{height:min(56.25cqw,var(--theater-h,60vh));min-height:240px;padding:0}#app.videoStep .exerciseTitle{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}@media (min-width:901px){#app.videoStep .workGrid{grid-template-columns:minmax(0,0fr) minmax(240px,1fr);gap:0}}@media (max-width:900px){#app.videoStep .timerCard{display:none}#app.videoStep .movementCard{min-height:0}}.videoClock{display:none;margin-right:auto;font-variant-numeric:tabular-nums}#app.videoStep .videoClock{display:block}@media (prefers-reduced-motion: reduce){.workGrid,.timerCard{transition:none}}.metaCard{margin-top:16px}.metaFilters{display:flex;flex-wrap:wrap;gap:9.6px;align-items:center;margin:14.4px 0 11.2px}.metaSearch{flex:1 1 200px;min-width:0}.metaKinds{display:flex;flex-wrap:wrap;gap:6.4px}.kindChip{min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);border-radius:12px;background:var(--control-2);color:var(--text);cursor:pointer}.kindChip.active{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.metaTableWrap{overflow-x:auto;border-radius:22.4px;background:var(--raised)}.metaTable{width:100%;border-collapse:collapse}.metaTable th{text-align:left;color:var(--muted);padding:12px 16px;border-bottom:.32px solid var(--divider);text-transform:uppercase;letter-spacing:.1em}.metaTable td{padding:12px 16px;border-top:.32px solid var(--divider);vertical-align:middle;color:var(--soft)}.metaTable tbody tr:first-child td{border-top:0}.metaTable .metaSwitchCol{width:1%;white-space:nowrap;text-align:right}.metaTable .metaSwitchCol .switch{display:inline-block;vertical-align:middle}.metaType{color:var(--text)}.metaTable tr.off .metaType{color:var(--muted)}.metaSub{display:none;margin-top:2px;color:var(--muted)}.metaEmpty td{text-align:center;color:var(--muted)}.metaBulk{display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap;margin-top:11.2px}.metaBulkActions{display:flex;gap:22.4px}@media (max-width:620px){.metaKindCol,.metaUsedCol{display:none}.metaSub{display:block}}@media (max-width:620px){.moveRow.noMeta .moveMeta,.upcomingCard.noMeta .upcomingMeta,.nextCard.noMeta #nextMeta{display:none}}.setupSummary,.addFab{display:none}.modal{position:relative}.setupSummary{align-items:center;justify-content:space-between;gap:12px;width:100%;margin:6.4px 0 4px;padding:12px 14px;border:0;border-radius:20.8px;background:var(--tile);color:var(--text);text-align:left;cursor:pointer}.setupSummaryText{display:grid;gap:2px;min-width:0}.setupSummaryText small{color:var(--muted)}.setupSummaryAction{flex:0 0 auto;color:var(--muted)}.rowChevron{flex:0 0 auto;color:var(--muted);font-size:22px;line-height:1}.addFab{position:absolute;right:16px;bottom:calc(16px + env(safe-area-inset-bottom,0px));z-index:12;place-items:center;width:56px;height:56px;padding:0;border:0;background:var(--bright);color:var(--on-bright);font-size:30px;font-weight:300;line-height:1;box-shadow:0 10px 24px var(--lift);cursor:pointer}.sheetScrim{position:absolute;top:0;right:0;bottom:0;left:0;z-index:30;background:var(--scrim);opacity:0;pointer-events:none;transition:opacity .25s ease}.sheetScrim.open{opacity:1;pointer-events:auto}.sheet{position:absolute;left:0;right:0;bottom:0;z-index:31;display:grid;gap:14px;max-height:88%;overflow-y:auto;overscroll-behavior:contain;padding:10px 16px calc(22px + env(safe-area-inset-bottom,0px));border-radius:var(--r-card) var(--r-card) 0 0;background:var(--modal);box-shadow:0 -.5px 0 var(--divider),0 -18px 40px var(--lift);transform:translateY(105%);visibility:hidden;transition:transform .42s cubic-bezier(.2,.9,.25,1.06),visibility 0s linear .42s}.sheet.open{transform:none;visibility:visible;transition:transform .42s cubic-bezier(.2,.9,.25,1.06)}.sheetGrab{justify-self:center;width:38px;height:5px;border-radius:99px;background:var(--field-line)}.sheetTitle{margin:0}.sheet .moveRow.editing{display:block;padding:0;background:none;box-shadow:none;border-radius:0}.sheetActions{justify-content:space-between;flex-wrap:wrap;gap:12.8px}.sheetSecondary,.sheetPrimary{display:flex;align-items:center;gap:6.4px}.sheetPrimary{gap:22.4px;margin-left:auto}.sheetChoices{display:grid;gap:8px}.sheetChoice{display:flex;align-items:center;gap:14px;width:100%;padding:12px;border:0;border-radius:20.8px;background:var(--row);color:var(--text);text-align:left;cursor:pointer}.sheetChoice small{display:block;margin-top:2px;color:var(--muted)}.sheetSetup .modalStatic{padding:0;background:none;border:0;overflow:visible}.sheetDone{width:100%;margin-top:14.4px}.addGhostActions{display:none;align-items:center;gap:6.4px;margin-left:auto;flex:0 0 auto}.addGhost.hovering{pointer-events:auto;cursor:grab;touch-action:none;animation:ghostWait 1.8s ease-in-out infinite}.addGhost.held{pointer-events:auto;cursor:grabbing;touch-action:none}.addGhost.hovering .addGhostActions{display:flex}.addGhost.rising{transition:transform .6s cubic-bezier(.34,1.46,.64,1),opacity .2s ease}.ghostDiscard{padding:0 10px}@keyframes ghostWait{50%{box-shadow:inset 0 0 0 1.5px var(--primary),0 22px 44px var(--lift),0 0 0 5px color-mix(in srgb,var(--primary) 22%,transparent)}}@media (max-width:620px){.modal:not(.createMode)>.modalStatic{display:none}.modal:not(.createMode) .setupSummary{display:flex}.addFab{display:grid}.movementCreatorLaunch{display:none}.exerciseScroller{padding-bottom:104px}.moveRow.phoneRow{gap:8px;min-height:60px;padding:12px 12px 12px 14px;cursor:pointer}}@media (prefers-reduced-motion: reduce){.sheet,.sheetScrim{transition:none}.addGhost.hovering{animation:none}}.modal{overflow:clip}.moveList.reordering>.moveRow:not(.dragging){transition:transform .44s cubic-bezier(.34,1.46,.64,1)}.moveRow.dragging.willReturn{opacity:.62;box-shadow:0 10px 24px var(--lift),inset 0 0 0 1.5px var(--field-line)}@media (prefers-reduced-motion: reduce){.moveList.reordering>.moveRow{transition:none}}.card,.panel,.confirmCard,.nextCard,.workoutPanel.active{padding:var(--inset)}.confirmCard,.nextCard,.upcomingCard{border-radius:var(--r-card)}.upcomingCard{padding:var(--inset)}.workoutPanel{border-radius:var(--r-tile);padding:var(--inset)}.workoutPanel.active{border-radius:var(--r-tile)}.workoutPanel.addPanel{padding:var(--inset)}.activityRow,.moveRow,.timeTile,.createPresetBtn,.createExtraToggle,.sheetChoice,.setupSummary{border-radius:var(--r-tile)}.activityRow,.moveRow{min-height:var(--tile-min);padding:var(--inset);gap:var(--inset)}.activityRow{grid-template-columns:var(--chip-size) minmax(0,1fr)}.activityRows{gap:12px}.timeTile{padding:var(--inset);gap:var(--inset)}.timeHeader{gap:var(--inset)}.createPresetBtn,.createExtraToggle{padding:var(--inset)}.moveMeta,.activityRowMeta,.setupSummaryText small,.sheetChoice small,.createExtraToggle small{color:var(--text)}.createPresetBtn.active span{color:var(--on-bright)}.moveMeta,.activityRowMeta{margin-top:0}.activityRowIcon,.activityIcon,.timeIcon,.nextIcon,.upcomingIcon{width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);font-size:20px}.navBtn,.back{display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);min-height:0;padding:0;border-radius:var(--r-inner)}.moveRow.editing{padding:var(--inset)}.moveRow.phoneRow{min-height:0;padding:var(--inset);gap:var(--inset)}.dragHandle{width:var(--chip-size);height:var(--chip-size);margin:0;border-radius:var(--r-inner);background:var(--icon-bg);color:var(--muted)}.dragHandle svg{width:var(--glyph-size);height:var(--glyph-size)}.moveRow.restItem .dragHandle{background:transparent}.dragHandle:hover{background:color-mix(in srgb,var(--icon-bg) 80%,var(--text))}.moveRow.restItem .dragHandle:hover{background:var(--hover)}.addGhost.overList,.dropSlot{border-radius:var(--r-tile)}.seg{display:flex;align-items:center;gap:4px;padding:4px;border-radius:var(--r-inner);background:var(--seg-bg);flex:0 0 auto}.segBtn{min-height:38px;padding:0 20px;border:0;border-radius:var(--r-fine);background:transparent;color:var(--text);cursor:pointer}.segBtn:hover{background:var(--hover)}.moveActions.seg{gap:4px}.moveActions .segBtn{min-width:100px}.moveActions .editBtn{background:var(--seg-on)}.moveActions .editBtn:hover{background:color-mix(in srgb,var(--seg-on) 88%,var(--text))}.moveActions .removeBtn{display:grid;place-items:center;width:40px;min-width:40px;padding:0;border:0;background:var(--danger-fill);color:var(--on-danger-fill)}.moveActions .removeBtn:hover{background:color-mix(in srgb,var(--danger-fill) 88%,white);border:0}.moveActions .removeBtn svg{display:block;width:24px;height:24px}.moveActions .removeFill{background:color-mix(in srgb,var(--on-danger-fill) 45%,transparent)}.moveActions .removeBtn.holding{color:#fff}@media (max-width:1100px){.moveActions .segBtn:not(.removeBtn){min-width:0;padding:0 14px}}.tabs.rubberTabs{padding:4px;gap:4px;border:0;border-radius:var(--r-inner);background:var(--seg-bg)}.rubberIndicator{top:4px;left:4px;height:calc(100% - 8px);border-radius:var(--r-fine);background:var(--seg-on)}.tabs.rubberTabs .tab{min-height:38px;padding:0 20px}.tabs.rubberTabs .tab.active{color:var(--text)}#app.light .rubberIndicator{box-shadow:0 1px 3px var(--lift)}.toggleTrack{width:50px;height:28px;border-radius:var(--r-inner);background:var(--line);border:.4px solid var(--line);opacity:1;transition:background .16s ease,opacity .16s ease}.toggleThumb{width:24px;height:24px;top:50%;left:1.6px;border-radius:12px 4px 4px 12px;background:var(--text);transform:translateY(-50%);transition:left .16s ease,border-radius .16s ease,background .16s ease}.globalTimingToggle input:checked+.toggleTrack{background:var(--color-accent-primary);opacity:1}.globalTimingToggle input:checked+.toggleTrack .toggleThumb{left:calc(100% - 25.6px);border-radius:4px 12px 12px 4px;background:var(--color-text-on-accent)}@media (max-width:900px){.workoutPanel:not(.addPanel){border-radius:var(--r-tile);padding:var(--inset)}}@media (max-width:620px){:host{--gutter:0px;--grid-gap:8px}}@media (max-width:620px){.modalBackdrop{padding:0}.modal,.modal:not(.createMode){width:100%;height:100%;max-height:none;border-radius:0;border:0}.modalTop{padding-top:calc(16px + env(safe-area-inset-top,0px))}.modal:not(.createMode) .exerciseScroller{padding-bottom:calc(104px + env(safe-area-inset-bottom,0px))}}#app{--group-bg:var(--card)}.modal,.sheet{--group-bg:var(--tile)}.view{padding-left:var(--gutter);padding-right:var(--gutter)}.grid{gap:var(--grid-gap)}.setupCaption{display:block;padding:0 4px 8px;color:var(--muted);text-transform:uppercase}.setupGroup,#settingsView .integrationList,#settingsView .toggleList{display:grid;gap:0;border-radius:var(--r-tile);background:var(--group-bg);overflow:hidden}.setupRow,#settingsView .integration,#settingsView .toggleRow{position:relative;display:flex;align-items:center;justify-content:space-between;gap:16px;min-height:56px;padding:12px 16px;border-radius:0;background:transparent}:is(.setupRow,#settingsView .integration,#settingsView .toggleRow):not([hidden])~:is(.setupRow,.integration,.toggleRow):before{content:"";position:absolute;top:0;left:16px;right:0;border-top:.5px solid var(--divider)}.setupRow.withSlider{display:grid;grid-template-columns:minmax(0,1fr);gap:10px;align-items:stretch}.setupRowTop{display:flex;justify-content:space-between;align-items:center;gap:16px}.setupText{display:grid;gap:2px;min-width:0}.setupValue,#settingsView .status{color:var(--muted);margin-top:0;font-variant-numeric:tabular-nums}.setupRow .rangeTrack[hidden]{display:none}.rangeTrack.setupSlider{height:28px;margin:0 2px;border:0;border-radius:0!important;background:transparent;overflow:visible}.rangeTrack.setupSlider:before{content:"";position:absolute;left:0;right:0;top:50%;height:6px;border-radius:99px;background:var(--track);transform:translateY(-50%)}.setupSlider .rangeFill{top:50%;bottom:auto;height:6px;border-radius:99px;transform:translateY(-50%)}.setupSlider .rangeFill:after{content:"";position:absolute;right:-11px;top:50%;width:22px;height:22px;border-radius:50%;background:var(--slider-fill);box-shadow:0 1px 4px var(--lift);transform:translateY(-50%)}.setupSlider:focus-within{outline:0}.setupSlider:focus-within .rangeFill:after{box-shadow:0 0 0 3px color-mix(in srgb,var(--primary) 45%,transparent)}.stepper{display:flex;align-items:center;gap:2px;padding:4px;border-radius:var(--r-inner);background:var(--seg-bg);flex:0 0 auto}.stepBtn{width:36px;height:32px;padding:0;border:0;border-radius:var(--r-fine)!important;background:transparent;color:var(--text);font:600 18px/1 var(--font);cursor:pointer}.stepBtn:hover:not(:disabled){background:var(--hover)}.stepBtn:disabled{opacity:.35;cursor:default}.stepCount{min-width:24px;text-align:center;font:600 var(--t-strong)/1 var(--font);font-variant-numeric:tabular-nums}.timeTiles.setupBlock,.modal:not(.createMode) .timeTiles.setupBlock{display:block;margin-bottom:12px}.editNameLabel{padding:0 4px}.routineSummary{margin:0 0 4px;padding:0 4px;background:none;border-radius:0;color:var(--muted)}#settingsView .card{display:grid;gap:12px;padding:0;border:0;border-radius:0;background:none}#settingsView .card+.card{margin-top:36px}#settingsView .paneTitle{margin:0 4px}#settingsView .note{margin:0 4px 4px}#settingsView .integration>div:first-child,#settingsView .toggleRow>div:first-child{display:grid;gap:2px;min-width:0}#settingsView .helpSteps{gap:0;border-radius:var(--r-tile);background:var(--group-bg);overflow:hidden}#settingsView .helpSteps li{border-radius:0;background:transparent}#settingsView .helpSteps li+li:after{content:"";position:absolute;top:0;left:52.8px;right:0;border-top:.5px solid var(--divider)}#settingsView .metaTableWrap{border-radius:var(--r-tile);background:var(--group-bg)}.activityCard,.insightCard{grid-column:span 3}.weatherCard,.grid.noWeather .activityCard,.grid.noWeather .insightCard,.grid.noActivity .insightCard{grid-column:span 6}.grid.noActivity.noWeather .insightCard{grid-column:span 12}@media (max-width:1199px) and (min-width:901px){.activityCard,.insightCard{grid-column:span 6}.weatherCard,.grid.noActivity .insightCard{grid-column:span 12}}@media (max-width:900px){.activityCard,.insightCard,.weatherCard,.grid .insightCard{grid-column:auto}}.jointRows{gap:0;padding:4px 0;border-radius:var(--r-tile);background:var(--tile)}.jointRows>.activityRow{background:transparent}.insightCard .jointRows{flex:1;align-content:space-evenly}.weatherCard{display:flex;flex-direction:column}.wxWide{flex:1;display:flex;flex-direction:column;gap:var(--inset)}.wxNow{display:flex;justify-content:space-between;align-items:flex-start;gap:16px}.wxCurrent{display:flex;align-items:flex-start;gap:16px;min-width:0}.wxTempBlock{display:grid;gap:4px;min-width:0}.wxTemp{display:flex;align-items:flex-start;gap:2px}.wxPlace{color:var(--muted);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.wxCondition{display:grid;gap:2px;padding:var(--inset);border-radius:var(--r-tile);background:var(--tile);flex:0 0 auto}.wxDays{flex:1;display:grid;grid-template-columns:repeat(6,minmax(0,1fr));gap:0;border-radius:var(--r-tile);background:var(--tile);overflow:hidden}.wxDay{display:flex;flex-direction:column;align-items:center;justify-content:space-between;gap:var(--inset);min-width:0;padding:var(--inset) 0}.wxTemps{display:grid;justify-items:center;gap:8px}.wxLow{color:var(--muted)}.wxNoDays{flex:1;display:grid;place-items:center;padding:16px;border-radius:var(--r-tile);background:var(--tile);color:var(--muted)}.wxCompact{display:none}@media (max-width:620px){.wxWide{display:none}.wxCompact{display:grid;gap:var(--inset)}}.wxIcon{position:relative;display:block;flex:0 0 auto;width:54px;height:54px;border-radius:var(--r-inner);background:var(--icon-bg);overflow:hidden}.wxIcon>svg:only-child{display:block;width:100%;height:100%}.wxIcon.clear,.wxIcon.partly{background:var(--wx-clear)}.wxIcon.cloudy{background:var(--wx-cloudy)}.wxIcon.rain,.wxIcon.snow{background:var(--color-text-muted)}.wxIcon.night{background:var(--wx-night)}.wxIcon .wxBright{fill:var(--wx-cloud-bright)}.wxIcon .wxCloudLight{fill:var(--wx-cloudy)}.wxIcon .wxAccent{fill:var(--color-accent-primary)}.wxIcon.large{width:90px;height:90px;border-radius:var(--r-tile)}.wxIcon>canvas{display:block;width:100%;height:100%;image-rendering:pixelated}#settingsView .toggleRow.wxStyleRow{flex-direction:column;align-items:stretch}.wxStyleChoice{display:grid;grid-template-columns:repeat(auto-fit,minmax(148px,1fr));gap:8px}.wxStyleBtn{display:grid;justify-items:start;gap:var(--inset);padding:var(--inset);border:.8px solid var(--field-line);border-radius:var(--r-tile);background:transparent;color:var(--text);text-align:left;cursor:pointer}.wxStyleBtn[aria-pressed=true]{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.wxStylePreview{display:grid;grid-template-columns:repeat(2,54px);gap:8px}.wxDeg{font-family:var(--font-tile);font-size:var(--t-wx-temp);font-weight:var(--w-medium);line-height:1;letter-spacing:-.02em}.wxUnit,.wxRange{font-family:var(--font-tile);font-size:var(--t-wx-range);font-weight:300;line-height:1.25;letter-spacing:0}.wxPlace,.wxCondName,.wxLow{font-family:var(--font-tile);font-size:var(--t-tile-title);font-weight:var(--w-semibold);line-height:var(--lh-tile-title);letter-spacing:0}.wxDayName,.wxHigh,.wxNoDays{font-family:var(--font-tile);font-size:var(--t-tile-detail);font-weight:var(--w-regular);line-height:var(--lh-tile-detail);letter-spacing:0}.segBtn{transition:background .15s ease,transform .18s cubic-bezier(.34,1.46,.64,1),box-shadow .15s ease,color .15s ease}.segBtn:hover{background:transparent}@media (hover:hover){.segBtn:hover{background:var(--color-state-hover)}}.tabs.rubberTabs .tab.active:hover{background:transparent}.segBtn:active{background:var(--color-state-pressed);transform:scale(.97)}.segBtn:focus-visible{outline:none;box-shadow:inset 0 0 0 2px var(--color-border-focus)}.segBtn:disabled{opacity:.4;cursor:default}.moveActions.seg{background:transparent;transition:background .18s ease}.moveActions.seg:focus-within{background:var(--seg-bg)}@media (hover:hover){.moveActions.seg:hover{background:var(--seg-bg)}}.moveActions .editBtn,.moveActions .editBtn:hover{background:transparent}.moveActions .removeBtn,.moveActions .removeBtn:hover{background:transparent;color:var(--text)}@media (hover:hover){.moveActions .editBtn:hover{background:var(--color-state-hover)}.moveActions .removeBtn:hover{background:var(--danger-fill);color:var(--color-text-on-danger)}}.moveActions .removeBtn:active{background:linear-gradient(var(--color-state-pressed-on-bright),var(--color-state-pressed-on-bright)),var(--danger-fill);color:var(--color-text-on-danger)}.moveActions .removeBtn.holding{background:var(--danger-bg);color:var(--color-text-on-danger)}.moveActions .removeFill{background:var(--danger-fill)}.activityIcon{color:var(--muted)}.activityRowIcon,.timeIcon,.nextIcon,.upcomingIcon{color:var(--text)}.wxTempBlock{padding-top:6px}.motionRangeWrap input[type=range]{accent-color:var(--bright);background:transparent}', Vs = `<main id="app"><div class="shell">
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
`, Ni = {
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
}, Vn = (d) => d < 0 ? 0 : d > 1 ? 1 : d, Ho = (d) => {
  const g = String(d || "#000000").trim().replace("#", ""), o = g.length === 3 ? g.split("").map((H) => H + H).join("") : g;
  return [0, 2, 4].map((H) => parseInt(o.slice(H, H + 2), 16) || 0);
}, Ws = (d) => "#" + d.map((g) => Math.round(Math.max(0, Math.min(255, g))).toString(16).padStart(2, "0")).join(""), sr = {}, We = (d, g, o) => {
  const H = d + g + o;
  return sr[H] || (sr[H] = Ws(Ho(d).map((E, z) => E + (Ho(g)[z] - E) * o)));
}, lr = {}, Io = (d) => lr[d] || (lr[d] = Ho(d));
function js(d, g) {
  const o = String(d || "");
  return (o === "sunny" || o === "clear-night" ? "clear" : o === "partlycloudy" ? "partly" : o === "fog" ? "fog" : o === "lightning" || o === "lightning-rainy" ? "storm" : o === "snowy" || o === "snowy-rainy" ? "snow" : o === "rainy" || o === "pouring" || o === "hail" ? "rain" : "cloudy") + "/" + (o === "clear-night" || g ? "night" : "day");
}
function Ys(d) {
  const g = { clear: [d.skyClearDay, d.skyClearNight], cloudy: [d.skyCloudyDay, d.skyCloudyNight], rain: [d.skyRainDay, d.skyRainNight], snow: [d.skySnowDay, d.skySnowNight], fog: [d.skyFogDay, d.skyFogNight] };
  return g.partly = [We(g.clear[0], g.cloudy[0], 0.12), We(g.clear[1], g.cloudy[1], 0.12)], g.storm = [We(g.rain[0], "#000000", 0.22), We(g.rain[1], "#000000", 0.22)], g;
}
const Do = [[61, 29, 4.4], [73, 16, 2.9], [79, 57, 3.3], [21, 77, 2.5], [13, 20, 2.3]], zo = [[29.35, 60.65], [43.04, 60.65], [56.74, 60.65]], qo = [[30, 64], [44, 61], [58, 64], [37, 74], [51, 74]];
function Us(d, g = Ni) {
  const o = { ...Ni, ...g }, H = Ys(o), E = String(d).split("/"), z = H[E[0]] ? E[0] : "clear", le = E[1] === "night", Ne = H[z][le ? 1 : 0], X = {
    night: le,
    clearness: z === "clear" ? 1 : z === "partly" ? 0.7 : 0.25,
    sky: Ne,
    skyStops: [Ne],
    skyT: 0,
    sun: { x: 45, y: le ? 134 : 45, r: 33.26, o: 0 },
    moon: { x: 45, y: le ? 45 : 134, d: 64, o: 0 },
    cloud: { x: 134, y: 52.83, w: 58.7, o: 0, f: le ? 1 : 0 },
    stars: Do.map(() => ({ o: 0 })),
    rain: zo.map(() => ({ o: 0, dy: -16 })),
    snow: qo.map(() => ({ o: 0, dy: -16 })),
    bolt: { o: 0, dy: -10 }
  }, ne = (Ue) => Do.map(() => ({ o: Ue }));
  return z === "clear" ? le ? (X.moon.o = 1, X.stars = ne(1)) : X.sun.o = 1 : z === "partly" ? (X.cloud = { x: 52.83, y: 52.83, w: 58.7, o: 1, f: le ? 1 : 0 }, le ? (X.moon = { x: 34, y: 33, d: 48, o: 1 }, X.stars = ne(0.7)) : X.sun = { x: 35.22, y: 33.26, r: 23.48, o: 1 }) : z === "cloudy" || z === "fog" ? (X.cloud = { x: 45, y: 42.99, w: 66.52, o: 1, f: le ? 1 : 0 }, le ? X.moon = { x: 40, y: 36, d: 40, o: 0 } : X.sun = { x: 40, y: 36, r: 20, o: 0 }) : (X.cloud = { x: 45, y: 33.26, w: 58.7, o: 1, f: 1 }, le ? X.moon = { x: 38, y: 28, d: 36, o: 0 } : X.sun = { x: 38, y: 28, r: 18, o: 0 }, z === "snow" ? X.snow = qo.map(() => ({ o: 1, dy: 0 })) : X.rain = zo.map((Ue, et) => ({ o: z === "storm" && et === 1 ? 0 : 1, dy: 0 })), z === "storm" && (X.bolt = { o: 1, dy: 0 })), X;
}
const Ks = [
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
], Dt = (d, g) => (Ks[(g & 7) * 8 + (d & 7)] + 0.5) / 64, Zs = 0, dr = 1, cr = 2, pr = 3, ur = 4, Qe = 5, Ai = 6, gn = 7, mr = 8, gr = (d, g) => g <= 0.6665 && ((d - 0.5) * (d - 0.5) + (g - 0.2877) * (g - 0.2877) <= 0.0824 || (d - 0.25) * (d - 0.25) + (g - 0.416) * (g - 0.416) <= 0.0625 || (d - 0.791) * (d - 0.791) + (g - 0.458) * (g - 0.458) <= 0.0437 || d >= 0.25 && d <= 0.791 && g >= 0.416), Xs = ["...##", "..##.", ".##..", "#####", "..##.", ".##..", ".#..."], Js = [[7, 0], [0, 13], [5, 13], [2, 24], [11, 9], [6, 9], [9, 0]].map((d) => [d[0] * 13 / 11, d[1] * 28 / 24]), $s = (d, g, o) => {
  let H = !1;
  for (let E = 0, z = d.length - 1; E < d.length; z = E++) {
    const le = d[E], Ne = d[z];
    le[1] > o != Ne[1] > o && g < (Ne[0] - le[0]) * (o - le[1]) / (Ne[1] - le[1]) + le[0] && (H = !H);
  }
  return H;
};
function Qs(d, { size: g = 90, px: o = 2, oneBit: H = !1, colors: E = Ni, ink: z = "#26221e", paper: le = "#fbf9f6", clock: Ne = 0, idle: X = !1 } = {}) {
  const ne = { ...Ni, ...E }, Ue = Math.sin, et = Math.PI * 2, U = Math.max(6, Math.round(g / o)), ie = U / 90, je = X ? Math.floor(Ne / 100) * 100 : 0, hn = X ? Ue(et * je / 3600) : 0, zt = X ? 1.8 * Ue(et * je / 6400) : 0, Bi = X ? 0.9 * Ue(et * je / 4100) : 0, vn = X ? 0.8 * Ue(et * je / 5200) : 0, dt = je / 3400 % 1, Fi = X && d.bolt.o > 0.5 && (dt < 0.04 || dt > 0.08 && dt < 0.11), Ct = new Array(U * U), ct = new Uint8Array(U * U), $ = (p, I, w, C, P) => {
    w == null || p < 0 || I < 0 || p >= U || I >= U || (C >= 1 || C > Dt(p + 5, I + 3)) && (Ct[I * U + p] = w, ct[I * U + p] = P);
  }, qe = (p, I, w, C) => {
    for (let P = Math.max(0, Math.floor(I - w) - 1); P <= Math.min(U - 1, I + w + 1); P++) for (let R = Math.max(0, Math.floor(p - w) - 1); R <= Math.min(U - 1, p + w + 1); R++) C(R, P, R + 0.5 - p, P + 0.5 - I);
  }, pt = d.skyStops || [d.sky], Ii = d.skyT || 0;
  for (let p = 0; p < U; p++) {
    const I = d.night ? Vn(1 - (p + 0.5) / (U * 0.7)) * 0.85 : Vn(((p + 0.5) / U - 0.35) / 0.65) * 0.85;
    for (let w = 0; w < U; w++) {
      let C = pt[0];
      if (pt.length > 1) {
        const P = Ii * (pt.length - 1), R = Math.min(pt.length - 2, Math.floor(P));
        C = P - R > Dt(w, p) ? pt[R + 1] : pt[R];
      }
      I > Dt(w + 2, p + 5) && (C = d.night ? We(C, "#000000", 0.28) : We(C, "#ffffff", 0.2)), Ct[p * U + w] = Fi ? We(C, "#ffffff", 0.25) : C;
    }
  }
  if (d.sun.o > 0.01) {
    const p = d.sun.x * ie, I = d.sun.y * ie, w = Math.max(1, d.sun.r * ie);
    if (X) {
      const C = w * (1.45 + 0.06 * hn), P = We(ne.sun, "#ffffff", 0.55);
      if (qe(p, I, C, (R, V, k, M) => {
        const Se = Math.sqrt(k * k + M * M);
        Se > w && Se < C && $(R, V, P, 0.26 * (1 - (Se - w) / (C - w)) * d.sun.o, Zs);
      }), d.sun.o > 0.5) {
        const R = Math.floor(je / 500) % 2, V = Math.max(1, w * 0.22);
        for (let k = 0; k < 8; k++) if (k % 2 === R) for (let M = w + 1.5; M < w + 1.5 + V; M += 0.7) $(Math.floor(p + Math.cos(k * Math.PI / 4) * M), Math.floor(I + Math.sin(k * Math.PI / 4) * M), ne.sun, d.sun.o, mr);
      }
    }
    qe(p, I, w, (C, P, R, V) => {
      if (R * R + V * V > w * w) return;
      const k = ((R * 0.643 + V * 0.766) / w + 1) / 2;
      $(C, P, Vn((k - 0.62) / 0.38) > Dt(C, P) ? ne.sunEdge : ne.sun, d.sun.o, dr);
    });
  }
  if (Do.forEach((p, I) => {
    const w = d.stars[I].o;
    if (w < 0.01) return;
    const C = Math.floor(p[0] * ie), P = Math.floor(p[1] * ie), R = X ? (Math.floor(je / 300) + I * 3) % 6 : 0;
    if (R === 5) return;
    const V = Math.round(p[2] * ie * (R === 4 ? 0.3 : R < 2 ? 1 : 0.6));
    $(C, P, ne.star, w, gn);
    for (let k = 1; k <= V; k++) {
      const M = k === V && V > 1 ? We(ne.star, d.sky, 0.5) : ne.star;
      $(C - k, P, M, w, gn), $(C + k, P, M, w, gn), $(C, P - k, M, w, gn), $(C, P + k, M, w, gn);
    }
  }), d.moon.o > 0.01) {
    const p = Math.max(1.5, d.moon.d * ie * 0.37), I = d.moon.x * ie, w = d.moon.y * ie + (X && vn > 0.4 ? -1 : 0), C = I + 0.547 * p, P = w - 0.503 * p, R = 0.82 * p, V = We(ne.moon, "#ffffff", 0.6);
    qe(I, w, p, (k, M, Se, nt) => {
      if (Se * Se + nt * nt > p * p) return;
      const fn = k + 0.5 - C, Tt = M + 0.5 - P;
      fn * fn + Tt * Tt <= R * R || $(k, M, Vn((nt + p) / (2 * p) * 1.1 - 0.1) > Dt(k, M) ? ne.moon : V, d.moon.o, cr);
    });
  }
  const ut = Math.max(2, Math.round(15.65 * ie)), Wn = Math.max(1, Math.round(5.87 * ie * 0.5));
  zo.forEach((p, I) => {
    const w = d.rain[I];
    let C = w.dy, P = w.o;
    if (P < 0.01) return;
    if (X) {
      const k = (je / 950 + I / 3) % 1;
      C += -5 + k * 14, P *= k < 0.18 ? k / 0.18 : k > 0.72 ? (1 - k) / 0.28 : 1;
    }
    const R = (p[0] + 3 + zt) * ie, V = (p[1] + C) * ie;
    for (let k = 0; k < ut; k++) for (let M = 0; M < Wn; M++) $(Math.floor(R - 0.208 * k) + M, Math.floor(V) + k, ne.rain, P, ur);
  });
  const qt = Math.max(0, Math.round(7.34 * ie / 2.6));
  if (qo.forEach((p, I) => {
    const w = d.snow[I];
    let C = w.dy, P = 0, R = w.o;
    if (R < 0.01) return;
    if (X) {
      const M = (je / 3200 + I / 5) % 1;
      C += -6 + M * 14, P = 1.5 * Ue(et * (M * 1.5 + I / 5)), R *= M < 0.2 ? M / 0.2 : M > 0.75 ? (1 - M) / 0.25 : 1;
    }
    const V = Math.floor((p[0] + 3.67 + P + zt) * ie), k = Math.floor((p[1] + 3.67 + C) * ie);
    $(V, k, ne.snow, R, Qe);
    for (let M = 1; M <= qt; M++)
      $(V - M, k, ne.snow, R, Qe), $(V + M, k, ne.snow, R, Qe), $(V, k - M, ne.snow, R, Qe), $(V, k + M, ne.snow, R, Qe), qt > 1 && M < qt && ($(V - M, k - M, ne.snow, R, Qe), $(V + M, k - M, ne.snow, R, Qe), $(V - M, k + M, ne.snow, R, Qe), $(V + M, k + M, ne.snow, R, Qe));
  }), d.bolt.o > 0.01)
    if (U >= 30) {
      const p = 39 + zt, I = 50 + d.bolt.dy;
      for (let w = Math.floor(I * ie); w <= (I + 28) * ie; w++) for (let C = Math.floor(p * ie); C <= (p + 13) * ie; C++)
        $s(Js, (C + 0.5) / ie - p, (w + 0.5) / ie - I) && $(C, w, ne.sun, d.bolt.o, Ai);
    } else {
      const p = U / 18, I = 7, w = 10 + Math.round(d.bolt.dy * 0.2);
      Xs.forEach((C, P) => C.split("").forEach((R, V) => {
        if (R !== "#") return;
        const k = Math.floor((I + V) * p), M = Math.floor((w + P) * p);
        for (let Se = M; Se < Math.max(M + 1, Math.floor((w + P + 1) * p)); Se++) for (let nt = k; nt < Math.max(k + 1, Math.floor((I + V + 1) * p)); nt++) $(nt, Se, ne.sun, d.bolt.o, Ai);
      }));
    }
  if (d.cloud.o > 0.01) {
    const p = Math.max(3, d.cloud.w * ie), I = p * 0.6665, w = (d.cloud.x + zt) * ie - p / 2, C = (d.cloud.y + Bi) * ie - I / 2, P = We(ne.cloudDay, ne.cloudNight, Math.round(d.cloud.f * 4) / 4), R = We(P, "#000000", 0.16);
    for (let V = Math.max(0, Math.floor(C) - 1); V <= Math.min(U - 1, C + I + 1); V++) for (let k = Math.max(0, Math.floor(w) - 1); k <= Math.min(U - 1, w + p + 1); k++) {
      const M = (k + 0.5 - w) / p, Se = (V + 0.5 - C) / p;
      gr(M, Se) && $(k, V, !gr(M, Se + 1 / p) || Vn((Se - 0.42) / 0.25) * 0.8 > Dt(k, V) ? R : P, d.cloud.o, pr);
    }
  }
  const tt = new Uint8ClampedArray(U * U * 4), Q = Io(z), Y = Io(le);
  for (let p = 0; p < U; p++) for (let I = 0; I < U; I++) {
    const w = p * U + I, C = ct[w];
    let P = Io(Ct[w]);
    if (H) {
      let R;
      C === ur || C === mr ? R = !0 : C === Qe ? R = !d.night : C === gn || C === Ai ? R = !1 : R = Math.round((0.2126 * P[0] + 0.7152 * P[1] + 0.0722 * P[2]) / 255 * 4) / 4 <= Dt(I, p), (C === dr || C === cr || C === pr || C === Ai) && (I > 0 && ct[w - 1] !== C || I < U - 1 && ct[w + 1] !== C || p > 0 && ct[w - U] !== C || p < U - 1 && ct[w + U] !== C) && (R = !0), P = R ? Q : Y;
    }
    tt[w * 4] = P[0], tt[w * 4 + 1] = P[1], tt[w * 4 + 2] = P[2], tt[w * 4 + 3] = 255;
  }
  return { w: U, h: U, data: tt };
}
function el(d, g) {
  var ir, or, ar, rr;
  const o = (e) => d.getElementById(e), H = o("workoutView"), E = o("workoutNameInput");
  let z = !0;
  const le = o("homeClock");
  function Ne() {
    le && (le.textContent = new Intl.DateTimeFormat(void 0, { hour: "2-digit", minute: "2-digit" }).format(/* @__PURE__ */ new Date()));
  }
  Ne(), setInterval(Ne, 15e3);
  const X = o("createFlow"), ne = o("createMovementsSlot"), Ue = o("createTimingSlot"), et = o("createFinishSlot"), U = o("movementStepSummary"), ie = o("timingStepSummary"), je = o("finishStepSummary"), hn = o("continueToTiming"), zt = o("continueToFinish"), Bi = o("finishMoveButton");
  let vn = !1, dt = [];
  function Fi(e) {
    !e || dt.some((t) => t.node === e) || dt.push({ node: e, parent: e.parentNode, next: e.nextSibling });
  }
  function Ct(e, t) {
    e && (Fi(e), t.appendChild(e));
  }
  function ct() {
    [...dt].reverse().forEach(({ node: e, parent: t, next: n }) => {
      t && (n && n.parentNode === t ? t.insertBefore(e, n) : t.appendChild(e));
    }), dt = [];
  }
  function $(e) {
    d.querySelectorAll(".createStep").forEach((t) => {
      t.classList.toggle("active", t.dataset.createStep === e);
    }), e === "timing" && (vn = !0), qe();
  }
  function qe() {
    var h, v;
    if (!ce) return;
    _[G];
    const e = Be.filter((c) => !c.hidden), t = e.filter((c) => c.kind !== "rest").length, n = e.filter((c) => c.kind === "rest").length;
    U.textContent = t ? t + " movement" + (t === 1 ? "" : "s") + (n ? " · " + n + " rest" + (n === 1 ? "" : "s") : "") : "No movements yet";
    const i = t > 0, a = d.querySelector('[data-open-step="timing"]'), r = d.querySelector('[data-open-step="finish"]');
    a.disabled = !i, hn.disabled = !i, ie.textContent = i ? Lt(Q.value) + " · " + Te(Y.value) + " movement · " + Te(p.value) + " rest" : "Add a movement first", r.disabled = !(i && vn);
    const s = ((E == null ? void 0 : E.value) || "").trim(), l = [];
    (h = o("includeWarmupPreset")) != null && h.checked && l.push("warm-up"), (v = o("includeCooldownPreset")) != null && v.checked && l.push("cooldown"), je.textContent = s ? s + (l.length ? " · " + l.join(" + ") : "") : l.length ? l.join(" + ") : "Name and optional extras";
  }
  function pt() {
    var S, q, x;
    X.hidden = !1, vn = !1;
    const e = d.querySelector(".editNameRow"), t = o("createMoveOptions"), n = d.querySelector(".timeTiles"), i = o("routineSummaryModal"), a = d.querySelector(".tempoRevealRow"), r = o("tempoExperiment"), s = (S = o("warmupList")) == null ? void 0 : S.closest("section"), l = o("movementCreatorLaunch"), h = o("movementCreator"), v = (q = o("strengthList")) == null ? void 0 : q.closest("section"), c = (x = o("cooldownList")) == null ? void 0 : x.closest("section");
    [t == null ? void 0 : t.querySelector(".createExtras"), s, l, h, v, c].forEach((f) => f && Ct(f, ne)), [t, n, i, a, r].forEach((f) => Ct(f, Ue)), Ct(e, et), $("movements"), qe();
  }
  function Ii() {
    ct(), X.hidden = !0, d.querySelectorAll(".createStep").forEach((e) => e.classList.remove("active"));
  }
  d.querySelectorAll("[data-open-step]").forEach((e) => e.addEventListener("click", () => {
    e.disabled || $(e.dataset.openStep);
  })), hn.addEventListener("click", () => {
    hn.disabled || $("timing");
  }), zt.addEventListener("click", () => $("finish")), Bi.addEventListener("click", () => o("saveWorkoutEdit").click());
  const ut = { home: o("homeView"), workout: o("workoutView"), settings: o("settingsView") }, Wn = o("homeNav"), qt = o("settingsNav");
  function tt(e) {
    Object.entries(ut).forEach(([t, n]) => n.classList.toggle("active", t === e)), Wn.classList.toggle("active", e === "home"), qt.classList.toggle("active", e === "settings"), e === "home" && setTimeout(Qi, 400), e === "settings" && (requestAnimationFrame(() => On(d.querySelector(".tab.active"), !1)), bi());
  }
  const Q = o("totalTime"), Y = o("workTime"), p = o("restTime"), I = o("totalOut"), w = o("workOut"), C = o("restOut"), P = o("totalFill"), R = o("workFill"), V = o("restFill"), k = o("roundsInput"), M = o("roundsFill"), Se = o("roundsOut"), nt = o("totalLabel"), fn = o("routineSummaryModal"), Tt = [
    { id: "standing-reach", name: "Standing reach", group: "Warm-up", kind: "warmup", hidden: !1 },
    { id: "arm-circles", name: "Arm circles", group: "Warm-up", kind: "warmup", hidden: !1 },
    { id: "hip-hinge", name: "Hip hinge drill", group: "Warm-up", kind: "warmup", hidden: !1 }
  ];
  let _e = Tt.map((e) => ({ ...e })), Be = [
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
  const jn = [
    { id: "hip-flexor", name: "Hip flexor stretch", group: "Cooldown", kind: "cooldown", hidden: !1 },
    { id: "chest-opener", name: "Chest opener", group: "Cooldown", kind: "cooldown", hidden: !1 },
    { id: "hamstring", name: "Hamstring stretch", group: "Cooldown", kind: "cooldown", hidden: !1 },
    { id: "slow-breathing", name: "Slow breathing", group: "Cooldown", kind: "cooldown", hidden: !1 }
  ];
  let Oe = jn.map((e) => ({ ...e }));
  const vr = {
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
  }, W = _o(g.data), _ = W.profiles;
  let G = _[W.selected] ? W.selected : W.order.find((e) => _[e]) || "kettlebell";
  function _o(e) {
    const t = e && typeof e == "object" ? JSON.parse(JSON.stringify(e)) : {}, n = t.profiles && Object.keys(t.profiles).length ? t.profiles : JSON.parse(JSON.stringify(vr)), i = (Array.isArray(t.order) ? t.order : Object.keys(n)).filter((a) => n[a]);
    return Object.keys(n).forEach((a) => {
      i.includes(a) || i.push(a);
    }), {
      v: 1,
      profiles: n,
      order: i,
      selected: t.selected || i[0],
      history: Array.isArray(t.history) ? t.history : [],
      checkins: (Array.isArray(t.checkins) ? t.checkins : fr(t.energy)).map(Oo),
      settings: { ...t.settings || {} }
    };
  }
  function fr(e) {
    if (!Array.isArray(e)) return [];
    const t = ["Drained", "Low", "Okay", "Good", "Energised", "Great"], n = [];
    return e.forEach((i) => {
      const a = new Date(i.at);
      if (isNaN(a)) return;
      const r = a.getFullYear() + "-" + String(a.getMonth() + 1).padStart(2, "0") + "-" + String(a.getDate()).padStart(2, "0"), s = a.getHours() < 14 ? "morning" : "evening";
      if (n.some((h) => h.date === r && h.slot === s)) return;
      const l = t.indexOf(i.value) + 1;
      l > 0 && n.push({ date: r, slot: s, mood: null, energy: l, at: i.at });
    }), n;
  }
  function Oo(e) {
    if (e.scale === 100) return e;
    const t = (n) => n == null ? null : Math.round((Number(n) - 1) / 5 * 100);
    return { ...e, mood: t(e.mood), energy: t(e.energy), scale: 100 };
  }
  function Ke() {
    ce || (W.selected = G, W.order = W.order.filter((e) => _[e] && e !== Mt), g.save(W));
  }
  function K() {
    return W.settings;
  }
  function Ze(e) {
    const t = _[e];
    if (!t) return;
    G = e;
    const n = o("workoutNameInput");
    if (n && (n.value = t.name), Q.value = t.total, Y.value = t.work, p.value = t.rest, k.value = t.rounds || 1, t.customSequence) {
      const i = (t.sequence || []).map((r) => ({ ...r })), a = (r) => i.filter((s) => s.presetRole === r).map(({ presetRole: s, ...l }) => l);
      _e = (t.warmup || a("warmup")).map((r) => ({ ...r })), Oe = (t.cooldown || a("cooldown")).map((r) => ({ ...r })), Be = i.filter((r) => !r.presetRole), zi(t.preset || "movement", !1);
    } else
      Q.min = 3, Q.max = 40, Q.step = 1, Y.min = 20, Y.max = 60, Y.step = 5, p.min = 5, p.max = 30, p.step = 5, _e = (t.warmup || Tt).map((i) => ({ ...i })), Oe = (t.cooldown || jn).map((i) => ({ ...i })), Be = t.strength.map((i) => Array.isArray(i) ? (([a, r, s, l = !1]) => ({ id: a, name: r, group: s, kind: "work", hidden: !!l }))(i) : { ...i });
    d.querySelectorAll(".workoutPanel[data-workout]").forEach((i) => i.classList.toggle("active", i.dataset.workout === e)), ee();
  }
  function br(e, t, n) {
    const i = e.getBoundingClientRect(), a = i.width / 2, r = i.height / 2, s = t - a, l = n - r;
    let h = 1 / 0, v = 1 / 0;
    s !== 0 && (h = a / Math.abs(s)), l !== 0 && (v = r / Math.abs(l));
    const c = Math.min(Math.max(1 / Math.min(h, v), 0), 1);
    let m = Math.atan2(l, s) * (180 / Math.PI) + 90;
    return m < 0 && (m += 360), { edge: c, angle: m };
  }
  function Pi(e, t, n = !1) {
    const i = e.getBoundingClientRect(), a = t.clientX - i.left, r = t.clientY - i.top, { edge: s, angle: l } = br(e, a, r), h = n ? 100 : s * 100;
    e.style.setProperty("--edge-proximity", h.toFixed(3)), e.style.setProperty("--cursor-angle", l.toFixed(3) + "deg"), e.classList.toggle("borderGlowActive", n || h >= 30);
  }
  function Go(e) {
    e.addEventListener("pointermove", (n) => Pi(e, n, !1)), e.addEventListener("pointerenter", (n) => Pi(e, n, !1)), e.addEventListener("pointerdown", (n) => Pi(e, n, !0));
    const t = () => {
      e.classList.remove("borderGlowActive"), e.style.setProperty("--edge-proximity", "0");
    };
    e.addEventListener("pointerleave", t), e.addEventListener("pointerup", t), e.addEventListener("pointercancel", t);
  }
  Go(o("addWorkoutPanel"));
  let ce = !1, Mt = null;
  function D(e) {
    return String(e ?? "").replace(/[&<>"']/g, (t) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[t]);
  }
  function xr(e) {
    return e.summary ? e.summary : e.customSequence ? Lt(e.total) + " · custom move" : Lt(e.total) + " · " + Te(e.work) + " / " + Te(e.rest) + " · warm-up + cooldown";
  }
  function Hi(e, t) {
    var r;
    const n = document.createElement("article");
    n.className = "workoutPanel", n.dataset.workout = e, n.tabIndex = 0;
    const i = t.activityCount ?? (((r = t.sequence) == null ? void 0 : r.length) || 0);
    n.innerHTML = '<span class="edgeLight" aria-hidden="true"></span><div class="panelExpanded"><div><div class="workoutPanelTop"><div><div class="workoutName">' + D(t.name) + '</div><div class="sub">' + D(xr(t)) + '</div><span class="sourceTag">' + D(t.source || "Custom move") + '</span></div><button class="pill seeWorkoutBtn" type="button">Edit</button></div></div><div class="workoutFooter"><div><strong class="activityCount">' + (i ? i + " activities" + ((t.rounds || 1) > 1 ? " × " + t.rounds : "") : "—") + '</strong></div><div class="workoutPanelActions"><button class="primary startWorkoutBtn" type="button">Start move</button></div></div></div><div class="panelCollapsed"><div class="panelCollapsedText">' + D(t.name) + "</div></div>";
    const a = o("addWorkoutPanel");
    return o("workoutGallery").insertBefore(n, a), Go(n), n.addEventListener("click", (s) => {
      s.target.closest("button") || Ze(e);
    }), n.addEventListener("keydown", (s) => {
      (s.key === "Enter" || s.key === " ") && !s.target.closest("button") && (s.preventDefault(), Ze(e));
    }), n.querySelector(".seeWorkoutBtn").addEventListener("click", (s) => {
      s.stopPropagation(), Ze(e), fa(!1);
    }), n.querySelector(".startWorkoutBtn").addEventListener("click", (s) => {
      s.stopPropagation(), Ze(e), as();
    }), n;
  }
  function Vo() {
    d.querySelectorAll(".workoutPanel[data-workout]").forEach((e) => e.remove()), W.order.forEach((e) => {
      _[e] && Hi(e, _[e]);
    }), d.querySelectorAll(".workoutPanel[data-workout]").forEach((e) => e.classList.toggle("active", e.dataset.workout === G));
  }
  Vo(), o("addWorkoutPanel").addEventListener("keydown", (e) => {
    (e.key === "Enter" || e.key === " ") && (e.preventDefault(), o("addWorkoutPanel").click());
  }), o("addWorkoutPanel").addEventListener("click", () => {
    ce = !0, Mt = "custom-" + Date.now(), _[Mt] = {
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
    }, Ze(Mt), fa(!0);
  });
  let y = [], F = 0, Me = 0, bn = 1, Ye = !1, me = null, Yn = null, Ce = !1, _t = W.settings.upcomingCount ?? "all", Wo = "movement";
  function Un(e, t, n) {
    return (Number(e) - t) / (n - t) * 100;
  }
  function Te(e) {
    const t = Math.max(0, Number(e) || 0);
    return t >= 3600 && t % 3600 === 0 ? t / 3600 + " hr" : t >= 60 && t % 60 === 0 ? t / 60 + " min" : t >= 60 ? Math.round(t / 60) + " min" : Math.round(t) + " sec";
  }
  function Lt(e) {
    const t = Math.max(0, Number(e) || 0);
    return t >= 60 && t % 60 === 0 ? t / 60 + " hr" : t >= 60 ? Math.floor(t / 60) + " hr " + t % 60 + " min" : t + " min";
  }
  function Kn() {
    P.style.width = Un(Q.value, Number(Q.min), Number(Q.max)) + "%", R.style.width = Un(Y.value, Number(Y.min), Number(Y.max)) + "%", V.style.width = Un(p.value, Number(p.min), Number(p.max)) + "%", w.textContent = Te(Y.value), C.textContent = Te(p.value);
    const e = Number(k.value) || 1;
    M.style.width = Un(e, 1, 10) + "%", nt.textContent = e > 1 ? "Time per round" : "Total time";
  }
  function Di(e) {
    return e.filter((t) => !t.hidden);
  }
  function xn(e) {
    const t = Math.max(0, Math.round(Number(e) || 0)), n = Math.floor(t / 3600), i = Math.floor(t % 3600 / 60), a = t % 60;
    return (n ? n + ":" + String(i).padStart(2, "0") : i) + ":" + String(a).padStart(2, "0");
  }
  function wr(e) {
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
        const l = t.pathname.match(/^\/(embed|shorts|live|v)\/([^/?#]+)/);
        l && (i = l[2]);
      }
    if (!i || !/^[\w-]{11}$/.test(i)) return null;
    const a = (l) => {
      if (!l) return 0;
      if (/^\d+$/.test(l)) return Number(l);
      const h = l.match(/^(?:(\d+)h)?(?:(\d+)m)?(?:(\d+)s)?$/);
      return h ? (Number(h[1]) || 0) * 3600 + (Number(h[2]) || 0) * 60 + (Number(h[3]) || 0) : 0;
    }, r = a(t.searchParams.get("t") || t.searchParams.get("start")), s = a(t.searchParams.get("end"));
    return { id: i, start: r, end: s > r ? s : null };
  }
  function wn(e, t) {
    if (e.useVideoLength === !1) return Math.max(5, Number(e.duration) || t || 300);
    const n = Number(e.start) || 0, i = Number(e.end) || Number(e.videoDuration) || 0;
    return i > n ? Math.round(i - n) : Number(e.duration) || 300;
  }
  function Zn(e, t) {
    const n = Math.max(0, Number(e) || 0);
    return Math.round(t === "hour" ? n * 3600 : t === "min" ? n * 60 : n);
  }
  function zi(e, t = !0) {
    Wo = e, d.querySelectorAll(".createPresetBtn").forEach((i) => i.classList.toggle("active", i.dataset.movePreset === e));
    const n = _[G];
    n && (n.preset = e), e === "work" ? (Q.min = 30, Q.max = 480, Q.step = 30, Y.min = 300, Y.max = 7200, Y.step = 300, p.min = 60, p.max = 1800, p.step = 60, t && (Q.value = 60, Y.value = 1500, p.value = 300), o("addMovementUnit").value = "min", o("addMovementDuration").value = 25, o("addRestUnit").value = "min", o("addRestDuration").value = 5) : (Q.min = 3, Q.max = 40, Q.step = 1, Y.min = 20, Y.max = 60, Y.step = 5, p.min = 5, p.max = 30, p.step = 5, t && (Q.value = 20, Y.value = 45, p.value = 15), o("addMovementUnit").value = "sec", o("addMovementDuration").value = 45, o("addRestUnit").value = "sec", o("addRestDuration").value = 30), Kn();
  }
  function jo(e, t) {
    const n = Wo === "work";
    return e.map((i, a) => ({ ...i, id: t + "-" + a + "-" + Date.now().toString(36), useGlobalTiming: !n, duration: n ? 60 : Number(Y.value) }));
  }
  function qi() {
    const e = _[G];
    e != null && e.customSequence && (e.includeWarmup = o("includeWarmupPreset").checked, e.includeCooldown = o("includeCooldownPreset").checked, e.includeWarmup && !_e.length && (_e = jo(Tt, "warm")), e.includeCooldown && !Oe.length && (Oe = jo(jn, "cool")), ee());
  }
  function yr() {
    const e = o("upcomingCountSetting");
    if (!e) return;
    const t = Math.max(1, y.length - 1), n = _t;
    e.innerHTML = "";
    for (let r = 1; r <= t; r++) {
      const s = document.createElement("option");
      s.value = String(r), s.textContent = String(r), e.appendChild(s);
    }
    const i = document.createElement("option");
    i.value = "all", i.textContent = "All", e.appendChild(i);
    const a = n === "all" ? "all" : String(Math.min(Number(n) || 1, t));
    e.value = a, _t = a === "all" ? "all" : Number(a);
  }
  function ee() {
    Number(Q.value) * 60;
    const e = Number(Y.value), t = Number(p.value), n = _[G], i = !!(n != null && n.customSequence), a = (i ? !n.includeWarmup : n != null && n.warmupOff) ? [] : Di(_e), r = Di(Be), s = i && !n.includeCooldown ? [] : Di(Oe);
    if (n && (n.total = Number(Q.value), n.work = e, n.rest = t, n.rounds = Number(k.value) || 1, n.customSequence ? (n.sequence = Be.map((u) => ({ ...u })), n.warmup = _e.map((u) => ({ ...u })), n.cooldown = Oe.map((u) => ({ ...u }))) : (n.strength = Be.map((u) => ({ ...u })), n.warmup = _e.map((u) => ({ ...u })), n.cooldown = Oe.map((u) => ({ ...u })))), n != null && n.customSequence) {
      const u = [...a.map((N) => ({ ...N, section: "warmup" })), ...r, ...s.map((N) => ({ ...N, section: "cooldown" }))].map((N) => {
        if (N.kind === "video") return { ...N, duration: wn(N, e), rest: 0 };
        if (N.kind === "rest") {
          const ve = N.useGlobalTiming === !0 ? t : Number(N.duration) || t;
          return { ...N, duration: ve, rest: 0 };
        }
        const he = N.useGlobalTiming === !1 && Number(N.duration) || e;
        return { ...N, duration: he, rest: 0 };
      });
      n.autoRest && Number(n.autoRestDuration) > 0 ? (y = [], u.forEach((N, he) => {
        y.push(N);
        const ve = u[he + 1];
        N.kind !== "rest" && ve && ve.kind !== "rest" && y.push({
          id: "auto-rest-" + he,
          name: "Rest",
          group: "Rest",
          kind: "rest",
          hidden: !1,
          duration: Number(n.autoRestDuration),
          rest: 0,
          autoGenerated: !0
        });
      })) : y = u;
    } else
      y = [...a.map((u) => ({ ...u, section: "warmup" })), ...r, ...s.map((u) => ({ ...u, section: "cooldown" }))].map((u) => u.kind === "video" ? { ...u, duration: wn(u, e), rest: 0 } : u.kind === "rest" ? { ...u, duration: u.useGlobalTiming === !0 ? t : Number(u.duration) || t, rest: 0 } : { ...u, duration: u.useGlobalTiming === !1 && Number(u.duration) || e, rest: t }), y.forEach((u, N) => {
        var he;
        ((he = y[N + 1]) == null ? void 0 : he.kind) === "rest" && (u.rest = 0);
      }), y.length && (y[y.length - 1].rest = 0);
    const l = Math.max(1, Math.min(10, Number(k.value) || 1)), h = y, v = (u) => l <= 1 ? null : u.section === "warmup" || u.presetRole === "warmup" ? "first" : u.section === "cooldown" || u.presetRole === "cooldown" ? "last" : u.kind === "video" && (u.videoRounds === "first" || u.videoRounds === "last") ? u.videoRounds : null, c = (u) => !!v(u), m = h.filter((u) => !c(u)), S = h.filter(c), q = m.length, x = m.reduce((u, N) => u + N.duration + N.rest, 0), f = S.reduce((u, N) => u + N.duration + N.rest, 0), b = [
      S.some((u) => u.section === "warmup" || u.presetRole === "warmup") && "warm-up",
      S.some((u) => u.section === "cooldown" || u.presetRole === "cooldown") && "cooldown",
      S.some((u) => u.kind === "video" && !u.section && !u.presetRole) && "video"
    ].filter(Boolean), A = b.length > 1 ? b.slice(0, -1).join(", ") + " & " + b[b.length - 1] : b[0] || "";
    y = [];
    const ue = (u, N) => {
      const he = v(u);
      return !he || (he === "first" ? N === 1 : N === l);
    };
    for (let u = 1; u <= l; u++)
      if (h.filter((N) => ue(N, u)).forEach((N, he) => y.push({ ...N, id: N.id + (l > 1 ? "-r" + u : ""), round: u, roundIndex: he })), u < l && q)
        if (n != null && n.customSequence)
          y.push({ id: "round-break-" + u, name: "Rest", group: "Round " + (u + 1) + " next", kind: "rest", hidden: !1, duration: t, rest: 0, round: u, roundIndex: q, roundBreak: !0 });
        else {
          const N = y[y.length - 1];
          N.rest = t, N.roundBreakAfter = !0;
        }
    Kn();
    const T = y.reduce((u, N) => u + N.duration + N.rest, 0), j = Math.round(x / 60), ae = Math.round(T / 60), ge = l > 1 ? Lt(j) + " × " + l + " rounds" + (f ? " + " + Te(f) + " " + A : "") + " (" + Lt(ae) + ")" : Lt(ae), J = [a.length ? "warm-up" : "", s.length ? "cooldown" : ""].filter(Boolean), be = n != null && n.customSequence ? ge + " · " + q + " items" + (J.length && !(l > 1 && f) ? " · " + J.join(" + ") : "") : ge + " · " + Te(e) + " / " + Te(t) + (J.length && !(l > 1 && f) ? " · " + J.join(" + ") : "");
    I.textContent = Te(x);
    const ke = y.filter((u) => !u.roundBreak).length, de = l > 1 ? ke + " activities · " + l + " rounds" : q + " activities";
    Se.textContent = l > 1 ? l + " rounds · " + Lt(ae) + " total" : "1 round", o("roundsCount").textContent = l, d.querySelectorAll("[data-rounds-step]").forEach((u) => {
      u.disabled = Number(u.dataset.roundsStep) < 0 ? l <= 1 : l >= 10;
    }), n && (n.summary = be, n.activityCount = q);
    const kt = d.querySelector(".workoutPanel.active .sub");
    kt && (kt.textContent = be), fn.textContent = be, Yi(), d.querySelectorAll(".workoutPanel.active .activityCount").forEach((u) => u.textContent = de), Kn(), Gi(), Ki(), Mn(), yr(), ce && qe(), ut.workout.classList.contains("active") && !me && ho();
  }
  const yn = '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><g fill="currentColor"><circle cx="9" cy="6" r="1.6"/><circle cx="15" cy="6" r="1.6"/><circle cx="9" cy="12" r="1.6"/><circle cx="15" cy="12" r="1.6"/><circle cx="9" cy="18" r="1.6"/><circle cx="15" cy="18" r="1.6"/></g></svg>', kr = '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6z"/></svg>', Sr = {
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
    add: '<path d="M5 12H19"/><path d="M12 5V19"/>',
    play: '<path d="M8 5.5V18.5L18.5 12L8 5.5Z"/>',
    pause: '<path d="M9 6V18"/><path d="M15 6V18"/>'
  }, it = (e) => '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">' + (Sr[e] || "") + "</svg>";
  d.querySelectorAll("[data-icon]").forEach((e) => {
    e.innerHTML = it(e.dataset.icon);
  });
  let Fe = null, Ge = null;
  function Cr(e) {
    return e = Math.max(1, Number(e) || 0), e >= 3600 && e % 3600 === 0 ? { value: e / 3600, unit: "hour" } : e >= 60 && e % 60 === 0 ? { value: e / 60, unit: "min" } : { value: e, unit: "sec" };
  }
  function Yo(e = !1) {
    const t = d.querySelector(".moveEditForm input[data-f=url],.moveEditForm input[data-f=name]");
    t && (t.focus({ preventScroll: !0 }), e && t.select());
  }
  function _i(e, t, n = {}) {
    const i = e.kind === "rest", a = e.kind === "video", r = a ? e.useVideoLength !== !1 : i ? e.useGlobalTiming === !0 : e.useGlobalTiming !== !1, s = Number(i ? p.value : Y.value), l = Cr(a ? e.useVideoLength === !1 ? e.duration : wn({ ...e, useVideoLength: !0 }) : r ? s : e.duration || s), h = a && (Number(e.videoDuration) > 0 || Number(e.end) > 0), v = a ? '<label class="moveEditWide"><span>YouTube link</span><input class="addInput" data-f="url" type="url" inputmode="url" autocomplete="off" value="' + D(e.url || "") + '" placeholder="Paste a YouTube link"></label><label><span>Name</span><input class="addInput" data-f="name" type="text" value="' + D(e.autoName ? "" : e.name) + '" placeholder="Uses the video’s title"></label><label><span>Plays in</span><select class="creatorUnitSelect" data-f="rounds">' + [["every", "Every round"], ["first", "The first round only"], ["last", "The last round only"]].map(([T, j]) => '<option value="' + T + '"' + ((e.videoRounds || "every") === T ? " selected" : "") + ">" + j + "</option>").join("") + '</select></label><p class="fieldError" data-f="urlError" hidden>That isn’t a YouTube link. Copy it from the Share button on YouTube.</p>' : '<label><span>Name</span><input class="addInput" data-f="name" type="text" value="' + D(e.name) + '" placeholder="' + (i ? "Rest" : "Name this movement") + '"></label><label><span>Type / group</span><input class="addInput" data-f="group" type="text" value="' + D(e.group) + '" placeholder="' + (i ? "Rest" : "e.g. Glutes + legs") + '"></label>', c = a ? "Play the whole " + (Number(e.start) > 0 || Number(e.end) > 0 ? "clip" : "video") + (h ? " · " + xn(wn({ ...e, useVideoLength: !0 })) : "") : "Use global timing · " + Te(s), m = document.createElement("div");
    m.className = "moveRow editing" + (n.sheet ? " inSheet" : ""), m.dataset.index = t, m.dataset.id = e.id;
    const S = n.isNew ?? (Ge == null ? void 0 : Ge.item) === e, q = n.sheet ? '<div class="moveEditActions sheetActions">' + (S ? "" : '<div class="sheetSecondary"><button class="hideBtn" type="button" data-a="hide">' + (e.hidden ? "Show" : "Hide") + '</button><button class="removeBtn" type="button" data-a="remove" aria-label="Hold to remove ' + D(e.name) + '"><span class="removeFill"></span><span class="removeLabel">Remove</span></button></div>') + '<div class="sheetPrimary"><button class="pill" type="button" data-a="cancel">Cancel</button><button class="primary" type="button" data-a="save">' + (S ? "Add" : "Save") + "</button></div></div>" : '<div class="moveEditActions"><button class="pill" type="button" data-a="cancel">Cancel</button><button class="primary" type="button" data-a="save">Save</button></div>';
    m.innerHTML = '<div class="moveEditForm"><div class="moveEditFields' + (a ? " videoFields" : "") + '">' + v + '</div><div class="moveEditTiming"><label class="globalTimingToggle"><input type="checkbox" data-f="global"' + (r ? " checked" : "") + '><span class="toggleTrack" aria-hidden="true"><span class="toggleThumb"></span></span><span class="toggleLabel">' + D(c) + '</span></label><div class="creatorDurationRow"><input class="addInput creatorNumber" data-f="dur" type="number" min="1" max="3600" step="1" value="' + l.value + '" aria-label="Duration"><select class="creatorUnitSelect" data-f="unit" aria-label="Duration unit">' + ["sec", "min", "hour"].map((T) => '<option value="' + T + '"' + (T === l.unit ? " selected" : "") + ">" + { sec: "seconds", min: "minutes", hour: "hours" }[T] + "</option>").join("") + "</select></div></div>" + q + "</div>";
    const x = (T) => m.querySelector("[data-f=" + T + "]"), f = () => {
      const T = x("global").checked;
      x("dur").disabled = T, x("unit").disabled = T, m.querySelector(".creatorDurationRow").classList.toggle("isDisabled", T);
    };
    x("global").addEventListener("change", f), f();
    const b = () => {
      var T;
      if (n.sheet) {
        (T = n.onCancel) == null || T.call(n);
        return;
      }
      S && Jn(), Fe = null, ee();
    }, A = () => {
      var ae;
      if (a) {
        ue();
        return;
      }
      const T = x("name").value.trim();
      if (!T) {
        x("name").focus();
        return;
      }
      e.name = T, e.group = x("group").value.trim() || (i ? "Rest" : "Movement");
      const j = x("global").checked;
      if (e.useGlobalTiming = j, j || (e.duration = Math.max(i ? 5 : 1, Zn(x("dur").value, x("unit").value))), n.sheet) {
        (ae = n.onSaved) == null || ae.call(n);
        return;
      }
      S && (Ge = null), Fe = null, ee(), re(S ? i ? "Rest added" : "Movement added" : "Movement updated");
    }, ue = () => {
      var J;
      const T = x("url").value.trim(), j = wr(T);
      if (!j) {
        x("urlError").hidden = !1, x("url").classList.add("invalid"), x("url").focus();
        return;
      }
      const ae = j.id !== e.videoId;
      e.url = T, e.videoId = j.id, e.start = j.start, e.end = j.end, ae && (e.videoDuration = null, e.videoError = null);
      const ge = x("name").value.trim();
      e.autoName = !ge, e.name = ge || (ae ? "" : e.name) || e.videoTitle || "YouTube video", e.group = "Video", e.videoRounds = x("rounds").value, e.useVideoLength = x("global").checked, e.useVideoLength || (e.duration = Math.max(5, Zn(x("dur").value, x("unit").value))), n.sheet ? (J = n.onSaved) == null || J.call(n) : (S && (Ge = null), Fe = null, ee(), re(S ? "Video added" : "Video updated")), (ae || !e.videoDuration || e.autoName && !e.videoTitle) && fs(e);
    };
    if (a && x("url").addEventListener("input", () => {
      x("urlError").hidden = !0, x("url").classList.remove("invalid");
    }), m.querySelector("[data-a=cancel]").addEventListener("click", b), m.querySelector("[data-a=save]").addEventListener("click", A), n.sheet && !S) {
      m.querySelector("[data-a=hide]").addEventListener("click", () => {
        var j;
        return (j = n.onHide) == null ? void 0 : j.call(n);
      });
      const T = m.querySelector("[data-a=remove]");
      _n(T, T.querySelector(".removeFill"), 1200, () => {
        var j;
        return (j = n.onRemove) == null ? void 0 : j.call(n);
      });
    }
    return m.addEventListener("keydown", (T) => {
      T.key === "Escape" && (T.preventDefault(), T.stopPropagation(), b()), T.key === "Enter" && T.target.matches("input") && (T.preventDefault(), A());
    }), m;
  }
  function Oi(e, t) {
    const n = o(t);
    n.innerHTML = "", e.forEach((i, a) => {
      if (i === Fe && !Tn()) {
        n.appendChild(_i(i, a));
        return;
      }
      const r = document.createElement("div");
      r.className = "moveRow" + (i.hidden ? " hidden" : "") + (i.kind === "rest" ? " restItem" : "") + (i.kind === "video" ? " videoItem" : "") + (yo(i) ? " noMeta" : ""), r.dataset.index = a, r.dataset.id = i.id;
      const s = i.kind === "rest" ? i.useGlobalTiming === !0 ? "Global timing" : Te(i.duration) : i.useGlobalTiming === !1 ? Te(i.duration) : "Global timing", l = i.kind === "video" ? '<span class="moveKindBadge">Video</span>' : "", h = i.kind === "video" ? i.videoError ? "YouTube · can’t play outside YouTube" : "YouTube · " + (i.useVideoLength === !1 ? "stops after " + Te(i.duration) : Number(i.videoDuration) > 0 || Number(i.end) > 0 ? xn(wn(i)) : "plays to the end") + (i.videoRounds === "first" ? " · first round only" : i.videoRounds === "last" ? " · last round only" : "") : i.group + " · " + s, v = '<button class="dragHandle" type="button" title="Drag to reorder" aria-label="Reorder ' + D(i.name) + '. Drag, or use the up and down arrow keys">' + yn + "</button>", c = '<div class="moveText"><div class="moveItemName">' + D(i.name) + l + '</div><div class="moveMeta">' + D(h) + "</div></div>", m = (x) => x.addEventListener("keydown", (f) => {
        var ue, T;
        if (f.key !== "ArrowUp" && f.key !== "ArrowDown") return;
        f.preventDefault();
        const b = e.indexOf(i), A = b + (f.key === "ArrowUp" ? -1 : 1);
        A < 0 || A >= e.length || (e.splice(b, 1), e.splice(A, 0, i), ee(), (T = (ue = o(t).children[A]) == null ? void 0 : ue.querySelector(".dragHandle")) == null || T.focus());
      });
      if (Tn()) {
        r.classList.add("phoneRow"), r.tabIndex = 0, r.setAttribute("role", "button"), r.setAttribute("aria-label", "Edit " + (i.name || "step")), r.innerHTML = v + c + '<span class="rowChevron" aria-hidden="true">›</span>';
        const x = r.querySelector(".dragHandle");
        x.addEventListener("pointerdown", (f) => Uo(f, r, n, e)), m(x), r.addEventListener("click", (f) => {
          f.target.closest(".dragHandle") || ia(i, e);
        }), r.addEventListener("keydown", (f) => {
          f.key === "Enter" && f.target === r && (f.preventDefault(), ia(i, e));
        }), n.appendChild(r);
        return;
      }
      r.innerHTML = v + c + '<div class="moveActions seg"><button class="hideBtn editBtn segBtn" type="button" aria-label="Edit ' + D(i.name) + '">Edit</button><button class="hideBtn segBtn" type="button">' + (i.hidden ? "Show" : "Hide") + '</button><button class="removeBtn segBtn" type="button" title="Hold to remove" aria-label="Hold to remove ' + D(i.name) + '"><span class="removeFill"></span><span class="removeLabel">' + kr + "</span></button></div>", r.querySelector(".editBtn").addEventListener("click", () => {
        Jn(), Fe = i, ee(), Yo();
      }), r.querySelector(".hideBtn:not(.editBtn)").addEventListener("click", () => {
        i.hidden = !i.hidden, ee();
      });
      const S = r.querySelector(".removeBtn");
      _n(S, S.querySelector(".removeFill"), 1200, () => {
        const x = e.indexOf(i);
        x < 0 || (e.splice(x, 1), ee(), re("Removed " + i.name, { label: "Undo", run: () => {
          e.splice(Math.min(x, e.length), 0, i), ee();
        } }));
      });
      const q = r.querySelector(".dragHandle");
      q.addEventListener("pointerdown", (x) => Uo(x, r, n, e)), m(q), n.appendChild(r);
    });
  }
  const mt = () => {
    var e;
    return (e = window.matchMedia) == null ? void 0 : e.call(window, "(prefers-reduced-motion: reduce)").matches;
  }, Xn = (e) => {
    var t;
    try {
      (t = navigator.vibrate) == null || t.call(navigator, e);
    } catch {
    }
  };
  function Uo(e, t, n, i) {
    if (e.button !== void 0 && e.button !== 0) return;
    e.preventDefault();
    const a = e.currentTarget, r = e.pointerId, s = !mt();
    try {
      a.setPointerCapture(r);
    } catch {
    }
    const l = t.closest(".exerciseScroller") || Vi(t), h = n.style.position;
    n.style.position = "relative";
    const v = [...n.children].filter((B) => B.classList.contains("moveRow")), c = v.indexOf(t), m = parseFloat(getComputedStyle(n).rowGap) || 8, S = t.offsetHeight, q = S + m, x = v.map((B) => B.offsetTop), f = v.map((B) => B.offsetHeight), b = () => n.getBoundingClientRect().top, A = n.getBoundingClientRect().width, ue = e.clientY - (b() + x[c]), T = e.clientX;
    let j = e.clientY, ae = e.clientX, ge = b() + x[c], J = 0, be = 0, ke = 0, de = 1, kt = 0, u = c, N = !1, he = 0, ve = !1, Li = !1, un = x[c];
    n.classList.add("reordering"), t.classList.add("dragging"), t.style.transition = "none", Xn(8);
    const Ei = () => {
      const B = j - ue + S / 2 - b();
      let O = 0;
      return v.forEach((te, Ae) => {
        Ae !== c && B > x[Ae] + f[Ae] / 2 && O++;
      }), O;
    }, Ri = () => {
      v.forEach((B, O) => {
        if (O === c) return;
        const te = c < u && O > c && O <= u ? -q : c > u && O >= u && O < c ? q : 0;
        B.style.transform = te ? "translateY(" + te + "px)" : "";
      });
    }, Gn = () => {
      const B = n.getBoundingClientRect(), O = Math.abs(ae - T) > Math.max(80, A * 0.3) || ae < B.left - 24 || ae > B.right + 24;
      O !== N && (N = O, t.classList.toggle("willReturn", O), Xn(O ? 10 : 4));
      const te = N ? c : Ei();
      te !== u && (u = te, Ri(), N || Xn(4));
    }, St = () => {
      if (u === c) return x[c];
      const B = v.filter((te, Ae) => Ae !== c);
      let O = x[0];
      for (let te = 0; te < u; te++) O += B[te].offsetHeight + m;
      return O;
    }, mn = () => {
      const B = s ? Math.min(Math.abs(J) / 40, 1) : 0, O = s && !ve ? Math.max(-3, Math.min(3, ke * 0.6)) : 0;
      t.style.transform = "translate(" + be.toFixed(2) + "px," + (ge - (b() + x[c])).toFixed(2) + "px) rotate(" + O.toFixed(2) + "deg) scale(" + (de * (1 - 0.04 * B)).toFixed(4) + "," + (de * (1 + 0.06 * B)).toFixed(4) + ")";
    }, L = () => {
      he = requestAnimationFrame(L);
      const B = ae - T, O = ve ? b() + un : j - ue, te = ve ? 0 : N ? B * 0.9 : Math.max(-22, Math.min(22, B * 0.22)), Ae = ve ? 1 : N ? 0.97 : 1.035;
      if (!s) {
        ge = O, be = ve ? 0 : te, de = 1, mn(), ve && se();
        return;
      }
      const _s = ve ? 0.24 : 0.2, Os = ve ? 0.62 : 0.68;
      J = (J + (O - ge) * _s) * Os, ge += J, ke = (ke + (te - be) * 0.16) * 0.7, be += ke, kt = (kt + (Ae - de) * 0.22) * 0.6, de += kt, mn(), ve && Math.abs(J) < 0.15 && Math.abs(O - ge) < 0.5 && Math.abs(be) < 0.5 && Math.abs(de - 1) < 3e-3 && se();
    }, Z = setInterval(() => {
      if (!l || ve) return;
      const B = l.getBoundingClientRect(), O = 56, te = j < B.top + O ? -10 : j > B.bottom - O ? 10 : 0;
      te && (l.scrollTop += te, Gn());
    }, 30);
    function se() {
      if (Li) return;
      Li = !0, cancelAnimationFrame(he);
      const B = u !== c, O = t.dataset.id;
      if (n.classList.remove("reordering"), v.forEach((Ae) => {
        Ae.style.transition = "none", Ae.style.transform = "";
      }), t.classList.remove("dragging", "willReturn"), n.style.position = h, B) {
        const [Ae] = i.splice(c, 1);
        i.splice(u, 0, Ae);
      }
      ee();
      const te = O && n.querySelector('.moveRow[data-id="' + O + '"]');
      te && s && te.animate([{ transform: "scale(1.02,.95)" }, { transform: "scale(.995,1.012)" }, { transform: "none" }], { duration: 340, easing: "ease-out" }), B && re("Order saved");
    }
    const fe = (B) => {
      if (B.pointerId === r) {
        if (B.pointerType === "mouse" && B.buttons === 0) {
          ze();
          return;
        }
        j = B.clientY, ae = B.clientX, Gn();
      }
    }, Re = (B) => {
      B.pointerId === r && ze();
    };
    function ze() {
      ve || (window.removeEventListener("pointermove", fe, !0), window.removeEventListener("pointerup", Re, !0), window.removeEventListener("pointercancel", Re, !0), a.removeEventListener("lostpointercapture", ze), clearInterval(Z), N && u !== c && (u = c, Ri()), un = St(), ve = !0, Xn(6), setTimeout(se, 800));
    }
    window.addEventListener("pointermove", fe, !0), window.addEventListener("pointerup", Re, !0), window.addEventListener("pointercancel", Re, !0), a.addEventListener("lostpointercapture", ze), he = requestAnimationFrame(L), mn();
  }
  function Gi() {
    var a, r, s, l;
    const e = _[G], t = (a = o("warmupList")) == null ? void 0 : a.closest("section"), n = (r = o("cooldownList")) == null ? void 0 : r.closest("section"), i = (l = (s = o("strengthList")) == null ? void 0 : s.closest("section")) == null ? void 0 : l.querySelector(".sectionTitle");
    e != null && e.customSequence ? (t && (t.hidden = !e.includeWarmup), n && (n.hidden = !e.includeCooldown), i && (i.textContent = "Move sequence")) : (t && (t.hidden = !!(e != null && e.warmupOff)), n && (n.hidden = !1), i && (i.textContent = "Kettlebell work")), Oi(_e, "warmupList"), Oi(Be, "strengthList"), Oi(Oe, "cooldownList");
  }
  function Jn() {
    if (!Ge) return;
    const { item: e, arr: t } = Ge;
    Ge = null;
    const n = t.indexOf(e);
    n >= 0 && t.splice(n, 1), Fe === e && (Fe = null);
  }
  function kn(e) {
    return e.id === "warmupList" ? { arr: _e, kind: "warmup", group: "Warm-up" } : e.id === "cooldownList" ? { arr: Oe, kind: "cooldown", group: "Cooldown" } : { arr: Be, kind: "work", group: "" };
  }
  function Ko(e, t) {
    const n = kn(t), i = Date.now().toString(36);
    return e === "video" ? { id: "video-" + i, name: "", group: "Video", kind: "video", hidden: !1, url: "", videoId: "", start: 0, end: null, videoDuration: null, useVideoLength: !0, autoName: !0, duration: 300 } : e === "rest" ? { id: "rest-" + i, name: "Rest", group: "Rest", kind: "rest", hidden: !1, useGlobalTiming: !0, duration: Number(p.value) } : { id: "movement-" + i, name: "", group: n.group, kind: n.kind, hidden: !1, useGlobalTiming: !0, duration: Number(Y.value) };
  }
  const Zo = "cubic-bezier(.34,1.46,.64,1)";
  function Xo(e, t) {
    if (mt() || !e) {
      t();
      return;
    }
    const n = (r) => {
      var s;
      return ((s = r.dataset) == null ? void 0 : s.id) || r;
    }, i = () => [...e.querySelectorAll(".moveRow,.sectionTitle,.movementCreatorLaunch")], a = new Map(i().map((r) => [n(r), r.getBoundingClientRect().top]));
    t(), i().forEach((r) => {
      const s = a.get(n(r));
      if (s === void 0) return;
      const l = s - r.getBoundingClientRect().top;
      Math.abs(l) < 0.5 || r.animate([{ transform: "translateY(" + l + "px)" }, { transform: "none" }], { duration: 440, easing: Zo });
    });
  }
  function Jo(e, t) {
    if (!e || mt()) return;
    const n = e.offsetHeight, i = Math.max(0, n - (t || 0));
    e.animate([{ clipPath: "inset(0 0 " + i + "px 0 round 20.8px)" }, { clipPath: "inset(0 0 0 0 round 20.8px)" }], { duration: 460, easing: Zo });
  }
  function $o(e, t, n, i) {
    const { arr: a } = kn(t), r = Ko(e, t);
    a.splice(Math.max(0, Math.min(n, a.length)), 0, r), Ge = { item: r, arr: a }, Fe = r, Xo(t.closest(".exerciseScroller,.createStepSlot") || t, () => ee());
    const s = t.querySelector(".moveRow.editing");
    return Jo(s, i), Yo(e === "rest"), s;
  }
  function Vi(e) {
    for (let t = e; t && t.nodeType === 1; t = t.parentElement) {
      const n = getComputedStyle(t).overflowY;
      if (/(auto|scroll)/.test(n) && t.scrollHeight > t.clientHeight) return t;
    }
    return null;
  }
  const Qo = { movement: ["New movement", "Drop to add, then name it"], rest: ["Rest", "Rest · Global timing"], video: ["New video", "Drop to add, then paste a YouTube link"] };
  function ea(e, t) {
    const n = document.createElement("div");
    return n.className = "addGhost" + (e === "movement" ? "" : " rest"), n.innerHTML = '<span class="addGhostGrip">' + yn + '</span><span class="addGhostText"><strong>' + D(t[0]) + "</strong><small>" + D(t[1]) + "</small></span>", o("workoutModal").appendChild(n), n;
  }
  function Sn(e) {
    e.classList.add("leaving"), setTimeout(() => e.remove(), 180);
  }
  function Tr(e, t, n, i) {
    (Fe || Ge) && (Jn(), Fe = null, ee());
    const a = e.getBoundingClientRect(), r = ea(t, Qo[t]);
    r.setAttribute("aria-hidden", "true"), r.style.width = a.width + "px", r.style.height = a.height + "px", r.style.transform = "translate(" + a.left + "px," + a.top + "px)", e.classList.add("lifting");
    const s = Vi(e);
    return ta({
      ghost: r,
      origin: a,
      sx: n,
      sy: i,
      scroller: s,
      column: e.closest(".exerciseScroller,.createFlow") || s,
      home: () => e.getBoundingClientRect(),
      onDrop: (l, h, v) => {
        Sn(r), e.classList.remove("lifting"), $o(t, l, h, v);
      },
      onReturn: () => {
        Sn(r), e.classList.remove("lifting");
      }
    });
  }
  function ta({ ghost: e, origin: t, sx: n, sy: i, scroller: a, column: r, home: s, onDrop: l, onReturn: h, rowLook: v = !1 }) {
    var mn;
    const c = !mt(), m = ((mn = d.querySelector(".moveList .moveRow:not(.editing)")) == null ? void 0 : mn.offsetHeight) || 80, S = n - t.left, q = i - t.top, x = 44;
    let f = n, b = i, A = t.left, ue = t.top, T = 0, j = 0, ae = !c, ge = null, J = null, be = -1, ke = 0, de = null;
    const kt = () => ["warmupList", "strengthList", "cooldownList"].map((L) => o(L)).filter((L) => L && L.getClientRects().length && !L.closest("[hidden]")), u = (L) => {
      if (L === ge) return;
      ge = L, e.classList.toggle("overList", !!L || v);
      const Z = L ? L.getBoundingClientRect().width : t.width;
      e.style.width = Z + "px", e.style.height = (L ? m : t.height) + "px";
    }, N = (L) => {
      L.classList.add("leaving"), L.style.height = "0px", L.style.marginTop = "-8px", setTimeout(() => L.remove(), c ? 320 : 0);
    }, he = (L, Z, se) => {
      if (J && J.parentNode === L && be === se || (J && (N(J), J = null, be = -1), !L)) return;
      const fe = document.createElement("div");
      fe.className = "dropSlot", L.insertBefore(fe, Z), J = fe, be = se, fe.getBoundingClientRect(), fe.style.height = m + "px", fe.style.marginTop = "0px";
    }, ve = () => {
      let L = null, Z = 1 / 0;
      for (const ze of kt()) {
        const B = ze.getBoundingClientRect();
        if (f < B.left - 48 || f > B.right + 48) continue;
        const O = B.top - 28, te = B.bottom + 28, Ae = b < O ? O - b : b > te ? b - te : 0;
        Ae < Z && (Z = Ae, L = ze);
      }
      const se = r == null ? void 0 : r.getBoundingClientRect(), Re = se && f >= se.left && f <= se.right && b >= se.top && b <= se.bottom || Z === 0 ? L : null;
      if (Re) {
        const ze = [...Re.children].filter((O) => O.classList.contains("moveRow"));
        let B = ze.findIndex((O) => {
          const te = O.getBoundingClientRect();
          return b < te.top + te.height / 2;
        });
        B < 0 && (B = ze.length), he(Re, ze[B] || null, B);
      } else he(null);
      u(Re);
    }, Li = () => {
      if (de) return de.aim();
      if (ge) {
        const L = ge.getBoundingClientRect();
        let Z = b - m / 2;
        return J && (Z = Z * 0.6 + J.getBoundingClientRect().top * 0.4), { x: L.left, y: Z };
      }
      return { x: f - S, y: b - q };
    }, un = (L, Z, se, fe) => {
      e.style.transform = "translate(" + A + "px," + ue + "px) rotate(" + L + "deg) rotate(" + Z + "rad) scale(" + se + "," + fe + ") rotate(" + -Z + "rad)";
    }, Ei = () => {
      if (ke = requestAnimationFrame(Ei), !ae) {
        const B = f - n, O = b - i, te = Math.min(Math.hypot(B, O) / x, 1);
        A = t.left + B * 0.35, ue = t.top + O * 0.35, un(0, Math.atan2(O, B), 1 + 0.155 * te, 1 - 0.1 * te);
        return;
      }
      const L = Li();
      if (!c) {
        A = L.x, ue = L.y, un(0, 0, 1, 1), de && (cancelAnimationFrame(ke), de.done());
        return;
      }
      const Z = de ? de.k : 0.17, se = de ? de.d : 0.7;
      T = (T + (L.x - A) * Z) * se, j = (j + (L.y - ue) * Z) * se, A += T, ue += j;
      const fe = Math.hypot(T, j), Re = Math.min(fe / 48, 1), ze = ge || de ? 0 : Math.max(-5, Math.min(5, T * 0.32));
      un(ze, Math.atan2(j, T), 1 + 0.1 * Re, 1 - 0.063 * Re), de && fe < 0.15 && Math.hypot(L.x - A, L.y - ue) < 0.6 && (cancelAnimationFrame(ke), de.done());
    }, Ri = setInterval(() => {
      if (!a || de) return;
      const L = a.getBoundingClientRect(), Z = 64, se = b < L.top + Z ? -(L.top + Z - b) / 4 : b > L.bottom - Z ? (b - (L.bottom - Z)) / 4 : 0;
      se && (a.scrollTop += Math.max(-18, Math.min(18, se)), ve());
    }, 30);
    ke = requestAnimationFrame(Ei);
    let Gn = !1;
    const St = (L, Z) => {
      if (Gn) return;
      Gn = !0, cancelAnimationFrame(ke);
      const se = J ? J.offsetHeight : m;
      !L && J && (J.remove(), J = null), L ? l(L, Z, se) : h();
    };
    return {
      move(L, Z) {
        f = L, b = Z, !ae && Math.hypot(f - n, b - i) > x && (ae = !0, T = (f - n) * 0.085, j = (b - i) * 0.085), ae && ve();
      },
      drop(L) {
        clearInterval(Ri);
        const Z = ge, se = be;
        if (!L && Z && J) {
          const fe = J;
          de = { k: 0.24, d: 0.62, aim: () => {
            const Re = fe.getBoundingClientRect();
            return { x: Re.left, y: Re.top };
          }, done: () => St(Z, se) }, setTimeout(() => St(Z, se), 650), c || (cancelAnimationFrame(ke), St(Z, se));
          return;
        }
        he(null), u(null), de = { k: 0.2, d: 0.66, aim: () => {
          const fe = s();
          return { x: fe.left, y: fe.top };
        }, done: () => St(null) }, setTimeout(() => St(null), 650), c || (cancelAnimationFrame(ke), St(null));
      }
    };
  }
  function Wi(e, t) {
    let n = !1;
    e.addEventListener("click", (i) => {
      if (n) {
        n = !1, i.preventDefault();
        return;
      }
      if (Tn()) {
        oa(t);
        return;
      }
      const a = o("strengthList"), r = $o(t, a, kn(a).arr.length, 0);
      r == null || r.scrollIntoView({ block: "nearest", behavior: mt() ? "auto" : "smooth" });
    }), e.addEventListener("pointerdown", (i) => {
      if (i.button !== void 0 && i.button !== 0) return;
      const a = i.pointerId, r = i.clientX, s = i.clientY;
      let l = null, h = !1;
      try {
        e.setPointerCapture(a);
      } catch {
      }
      const v = (b) => {
        if (b.pointerId === a) {
          if (b.pointerType === "mouse" && b.buttons === 0) {
            f(!1);
            return;
          }
          if (!l) {
            if (Math.hypot(b.clientX - r, b.clientY - s) < 6) return;
            l = Tr(e, t, r, s);
          }
          l.move(b.clientX, b.clientY);
        }
      }, c = (b) => {
        b.pointerId === a && f(!1);
      }, m = (b) => {
        b.pointerId === a && f(!0);
      }, S = () => f(!1), q = () => f(!0), x = (b) => {
        b.key === "Escape" && l && (b.preventDefault(), b.stopPropagation(), f(!0));
      };
      function f(b) {
        if (!h && (h = !0, window.removeEventListener("pointermove", v, !0), window.removeEventListener("pointerup", c, !0), window.removeEventListener("pointercancel", m, !0), window.removeEventListener("keydown", x, !0), window.removeEventListener("blur", q), e.removeEventListener("lostpointercapture", S), l)) {
          const A = l;
          l = null, n = !0, setTimeout(() => {
            n = !1;
          }, 0), A.drop(b);
        }
      }
      window.addEventListener("pointermove", v, !0), window.addEventListener("pointerup", c, !0), window.addEventListener("pointercancel", m, !0), window.addEventListener("keydown", x, !0), window.addEventListener("blur", q), e.addEventListener("lostpointercapture", S);
    });
  }
  const Cn = (ir = window.matchMedia) == null ? void 0 : ir.call(window, "(max-width: 620px)");
  function Tn() {
    var e;
    return !!((e = window.matchMedia) != null && e.call(window, "(max-width: 620px)").matches);
  }
  const na = (e) => e.charAt(0).toUpperCase() + e.slice(1), $n = (e) => e.kind === "rest" ? "rest" : e.kind === "video" ? "video" : "movement";
  let ji = null, pe = null;
  function Qn(e, t, n, i) {
    Ie(), o("sheetTitle").textContent = e;
    const a = o("sheetBody");
    a.innerHTML = "", a.appendChild(t), ji = n || null, o("sheet").setAttribute("aria-hidden", "false"), o("sheetScrim").classList.add("open"), o("sheet").classList.add("open"), setTimeout(() => {
      if (!o("sheet").classList.contains("open") || !a.contains(t)) return;
      const r = i ? a.querySelector("input[data-f=url],input[data-f=name]") : a.querySelector("button,input,select");
      r == null || r.focus({ preventScroll: !0 });
    }, mt() ? 0 : 360);
  }
  function Ie() {
    const e = o("sheet");
    if (!e.classList.contains("open")) return;
    e.classList.remove("open"), o("sheetScrim").classList.remove("open"), e.setAttribute("aria-hidden", "true"), e.contains(d.activeElement) && d.activeElement.blur();
    const t = ji;
    ji = null, t == null || t(), setTimeout(Et, 0);
  }
  o("sheetScrim").addEventListener("click", Ie), o("sheet").addEventListener("keydown", (e) => {
    e.key === "Escape" && (e.preventDefault(), Ie());
  });
  function ia(e, t) {
    const n = _i(e, t.indexOf(e), {
      sheet: !0,
      isNew: !1,
      onSaved() {
        Ie(), ee(), re(na($n(e)) + " updated");
      },
      onCancel: Ie,
      onHide() {
        e.hidden = !e.hidden, Ie(), ee(), re((e.hidden ? "Hidden: " : "Showing: ") + e.name);
      },
      onRemove() {
        Ie();
        const i = t.indexOf(e);
        i < 0 || (t.splice(i, 1), ee(), re("Removed " + e.name, { label: "Undo", run: () => {
          t.splice(Math.min(i, t.length), 0, e), ee();
        } }));
      }
    });
    Qn("Edit " + $n(e), n, null, !1);
  }
  function Mr() {
    const e = document.createElement("div");
    e.className = "sheetChoices", [["movement", "activity", "Movement", "Name it, then drag it into place"], ["rest", "pause", "Rest", "A pause between movements"], ["video", "play", "Video", "Paste a YouTube link"]].forEach(([t, n, i, a]) => {
      const r = document.createElement("button");
      r.type = "button", r.className = "sheetChoice", r.innerHTML = '<span class="timeIcon" aria-hidden="true">' + it(n) + "</span><span><strong>" + i + "</strong><small>" + a + "</small></span>", r.addEventListener("click", () => oa(t)), e.appendChild(r);
    }), Qn("Add to the move", e, null, !1);
  }
  function oa(e) {
    pe && ti();
    const t = Ko(e, o("strengthList")), n = _i(t, -1, {
      sheet: !0,
      isNew: !0,
      onSaved() {
        Ie(), Er(t, e);
      },
      onCancel: Ie
    });
    Qn("New " + $n(t), n, null, !0);
  }
  const ei = o("workoutModal").querySelector(".modalStatic"), aa = { parent: ei.parentNode, next: ei.nextSibling };
  function Lr() {
    const e = document.createElement("div");
    e.className = "sheetSetup", e.appendChild(ei);
    const t = document.createElement("button");
    t.type = "button", t.className = "primary sheetDone", t.textContent = "Done", t.addEventListener("click", Ie), e.appendChild(t), Qn("Setup", e, () => {
      aa.parent.insertBefore(ei, aa.next), Yi();
    }, !1);
  }
  function Yi() {
    var t, n;
    const e = o("setupSummaryName");
    e && (e.textContent = (((t = o("workoutNameInput")) == null ? void 0 : t.value) || "").trim() || ((n = _[G]) == null ? void 0 : n.name) || "Move", o("setupSummaryMeta").textContent = fn.textContent);
  }
  o("setupSummary").addEventListener("click", Lr), o("addFab").addEventListener("click", Mr);
  function ra() {
    const e = o("strengthList");
    return Vi(e) || e.closest(".exerciseScroller");
  }
  function Ui() {
    const e = o("strengthList").getBoundingClientRect(), t = (ra() || o("strengthList")).getBoundingClientRect(), n = (pe == null ? void 0 : pe.ghost.offsetHeight) || 64;
    return { left: e.left, top: Math.max(t.top + 12, Math.min(t.bottom - n - 96, t.top + t.height * 0.55 - n / 2)), width: e.width, height: n };
  }
  function Er(e, t) {
    var l;
    const n = ea(t, [e.name || Qo[t][0], "Drag into place"]);
    n.classList.add("overList", "hovering"), n.setAttribute("aria-label", (e.name || "New step") + ". Drag it into place in the list, or add it at the end.");
    const i = document.createElement("span");
    i.className = "addGhostActions", i.innerHTML = '<button class="hideBtn" type="button" data-a="end">Add at end</button><button class="hideBtn ghostDiscard" type="button" data-a="discard" aria-label="Discard ' + D(e.name) + '">✕</button>', n.appendChild(i), pe = { item: e, type: t, ghost: n };
    const a = ((l = d.querySelector(".moveList .moveRow:not(.editing)")) == null ? void 0 : l.offsetHeight) || 64;
    n.style.width = o("strengthList").getBoundingClientRect().width + "px", n.style.height = a + "px";
    const r = Ui(), s = Le.querySelector(".modal").getBoundingClientRect().bottom;
    n.style.transform = "translate(" + r.left + "px," + s + "px)", n.getBoundingClientRect(), mt() || (n.classList.add("rising"), setTimeout(() => n.classList.remove("rising"), 650)), n.style.transform = "translate(" + r.left + "px," + r.top + "px)", i.querySelector("[data-a=end]").addEventListener("click", ti), i.querySelector("[data-a=discard]").addEventListener("click", Ar), n.addEventListener("pointerdown", Rr);
  }
  function Rr(e) {
    if (!pe || e.target.closest("button") || e.button !== void 0 && e.button !== 0) return;
    e.preventDefault();
    const { item: t, ghost: n } = pe, i = e.pointerId;
    try {
      n.setPointerCapture(i);
    } catch {
    }
    n.classList.remove("hovering", "rising"), n.classList.add("held");
    const a = n.getBoundingClientRect(), r = ra(), s = ta({
      ghost: n,
      origin: { left: a.left, top: a.top, width: a.width, height: a.height },
      sx: e.clientX,
      sy: e.clientY,
      scroller: r,
      column: o("strengthList").closest(".exerciseScroller,.createFlow") || r,
      rowLook: !0,
      home: Ui,
      onDrop: (f, b, A) => {
        pe = null, Sn(n), sa(t, f, b, A);
      },
      onReturn: () => {
        n.classList.remove("held"), n.classList.add("hovering");
      }
    });
    let l = !1;
    const h = (f) => {
      if (f.pointerId === i) {
        if (f.pointerType === "mouse" && f.buttons === 0) {
          x(!1);
          return;
        }
        s.move(f.clientX, f.clientY);
      }
    }, v = (f) => {
      f.pointerId === i && x(!1);
    }, c = (f) => {
      f.pointerId === i && x(!0);
    }, m = () => x(!1), S = () => x(!0), q = (f) => {
      f.key === "Escape" && (f.preventDefault(), x(!0));
    };
    function x(f) {
      l || (l = !0, window.removeEventListener("pointermove", h, !0), window.removeEventListener("pointerup", v, !0), window.removeEventListener("pointercancel", c, !0), window.removeEventListener("keydown", q, !0), window.removeEventListener("blur", S), n.removeEventListener("lostpointercapture", m), s.drop(f));
    }
    window.addEventListener("pointermove", h, !0), window.addEventListener("pointerup", v, !0), window.addEventListener("pointercancel", c, !0), window.addEventListener("keydown", q, !0), window.addEventListener("blur", S), n.addEventListener("lostpointercapture", m);
  }
  function sa(e, t, n, i) {
    const a = kn(t);
    e.kind !== "rest" && e.kind !== "video" && (e.kind = a.kind, a.group && (!e.group || e.group === "Movement") && (e.group = a.group)), a.arr.splice(Math.max(0, Math.min(n, a.arr.length)), 0, e), Xo(t.closest(".exerciseScroller,.createStepSlot") || t, () => ee()), Jo(t.querySelector('.moveRow[data-id="' + e.id + '"]'), i), re(na($n(e)) + " added");
  }
  function ti() {
    var i;
    if (!pe) return;
    const { item: e, ghost: t } = pe;
    pe = null, Sn(t);
    const n = o("strengthList");
    sa(e, n, kn(n).arr.length, 0), (i = n.querySelector('.moveRow[data-id="' + e.id + '"]')) == null || i.scrollIntoView({ block: "nearest", behavior: mt() ? "auto" : "smooth" });
  }
  function Ar() {
    if (!pe) return;
    const e = pe.ghost;
    pe = null, Sn(e), re("Discarded");
  }
  function la() {
    pe && (pe.ghost.remove(), pe = null);
  }
  window.addEventListener("resize", () => {
    if (pe != null && pe.ghost.classList.contains("hovering")) {
      const e = Ui();
      pe.ghost.style.width = e.width + "px", pe.ghost.style.transform = "translate(" + e.left + "px," + e.top + "px)";
    }
  }), (or = Cn == null ? void 0 : Cn.addEventListener) == null || or.call(Cn, "change", () => {
    Ie(), pe && !Tn() && ti(), Gi();
  });
  {
    const e = o("workoutModal").querySelector(".modal");
    e.addEventListener("scroll", () => {
      (e.scrollTop || e.scrollLeft) && (e.scrollTop = 0, e.scrollLeft = 0);
    });
  }
  function Et() {
    const e = o("workoutModal"), t = window.visualViewport;
    if (!e.classList.contains("open") || !Tn()) {
      da();
      return;
    }
    const n = t ? t.offsetTop : 0, i = t ? t.offsetLeft : 0, a = t ? t.width : window.innerWidth, r = t ? t.height : window.innerHeight;
    Object.assign(e.style, { right: "auto", bottom: "auto", width: a + "px", height: r + "px", top: n + "px", left: i + "px" });
    const s = e.getBoundingClientRect();
    Math.abs(s.top - n) > 0.5 && (e.style.top = 2 * n - s.top + "px"), Math.abs(s.left - i) > 0.5 && (e.style.left = 2 * i - s.left + "px");
  }
  function da() {
    ["top", "left", "right", "bottom", "width", "height"].forEach((e) => o("workoutModal").style.removeProperty(e));
  }
  (ar = window.visualViewport) == null || ar.addEventListener("resize", Et), (rr = window.visualViewport) == null || rr.addEventListener("scroll", Et), window.addEventListener("resize", Et), window.addEventListener("scroll", Et, { passive: !0 }), window.addEventListener("orientationchange", () => setTimeout(Et, 250));
  function Ki() {
    Be.length > 0;
    const e = o("addMovementBtn"), t = o("addRestBtn");
    e && (e.innerHTML = yn + "<span>Add movement</span>"), t && (t.innerHTML = yn + "<span>Add rest</span>");
    const n = o("addVideoBtn");
    n && (n.innerHTML = yn + "<span>Add video</span>");
  }
  function Mn() {
    const e = o("useGlobalTiming").checked, t = o("addMovementDuration"), n = o("addMovementUnit");
    t.disabled = e, n.disabled = e, t.parentElement.style.opacity = e ? ".38" : "1", o("globalTimingValue").textContent = "Use global timing · " + Te(Y.value);
    const i = o("useGlobalRestTiming").checked, a = o("addRestDuration"), r = o("addRestUnit");
    a.disabled = i, r.disabled = i, a.parentElement.style.opacity = i ? ".38" : "1", o("globalRestTimingValue").textContent = "Use global timing · " + Te(p.value);
  }
  let ca = "movement";
  function Nr(e) {
    ca = e;
    const t = o("movementFields"), n = o("restFields");
    t.hidden = e !== "movement", n.hidden = e !== "rest", o("movementCreatorHeading").textContent = "Add movement", o("movementCreator").setAttribute("aria-label", "Create movement"), Mn();
  }
  function Zi() {
    _[G];
    const e = ce ? !0 : o("useGlobalTiming").checked, t = e ? Number(Y.value) : Zn(
      o("addMovementDuration").value,
      o("addMovementUnit").value
    ), n = ce ? !0 : o("useGlobalRestTiming").checked, i = n ? Number(p.value) : Zn(
      o("addRestDuration").value,
      o("addRestUnit").value
    );
    if (ca === "rest") {
      const a = o("addRestTitle").value.trim() || "Rest", r = o("addRestGroup").value.trim() || "Rest";
      Be.push({
        id: "rest-" + Date.now(),
        name: a,
        group: r,
        kind: "rest",
        hidden: !1,
        useGlobalTiming: n,
        duration: Math.max(5, i || Number(p.value))
      }), ee(), o("movementCreator").hidden = !0, o("addRestTitle").value = "Rest", o("addRestGroup").value = "Rest", re("Rest added"), ce && ($("movements"), qe());
    } else {
      const a = o("addMovementInput").value.trim();
      if (!a) return;
      const r = o("addMovementGroup").value.trim() || "Movement";
      Be.push({
        id: "movement-" + Date.now(),
        name: a,
        group: r,
        kind: "work",
        hidden: !1,
        useGlobalTiming: e,
        duration: Math.max(5, t || Number(Y.value))
      }), o("addMovementInput").value = "", o("addMovementGroup").value = "", ee(), o("movementCreator").hidden = !0, re("Movement added"), ce && ($("movements"), qe());
    }
    Ki();
  }
  let Xi = null;
  function re(e, t) {
    const n = o("toast");
    n.innerHTML = "";
    const i = document.createElement("span");
    if (i.textContent = e, n.appendChild(i), t) {
      const a = document.createElement("button");
      a.type = "button", a.className = "toastAction", a.textContent = t.label, a.addEventListener("click", () => {
        t.run(), n.classList.remove("show", "withAction"), clearTimeout(Xi);
      }), n.appendChild(a);
    }
    n.classList.toggle("withAction", !!t), n.classList.add("show"), clearTimeout(Xi), Xi = setTimeout(() => n.classList.remove("show", "withAction"), t ? 5e3 : 2200);
  }
  const Br = ["Terrible", "Poor", "Meh", "Okay", "Good", "Great"], Fr = ["#6E63A8", "#5878A8", "#6F8B8A", "#5F9B72", "#D5A53E", "#D56B54"];
  function pa(e) {
    return Math.max(0, Math.min(5, Math.floor(Number(e) / 100 * 6)));
  }
  function Ot(e, t) {
    return Br[pa(t)];
  }
  function Ir(e) {
    return Fr[pa(e)];
  }
  function xe(e) {
    return e.getFullYear() + "-" + String(e.getMonth() + 1).padStart(2, "0") + "-" + String(e.getDate()).padStart(2, "0");
  }
  function gt() {
    return { morning: K().morningTime || "08:00", evening: K().eveningTime || "19:00" };
  }
  function Gt(e) {
    const [t, n] = String(e).split(":").map(Number);
    return (t || 0) * 60 + (n || 0);
  }
  function Pr(e) {
    const t = gt();
    return e.getHours() * 60 + e.getMinutes() >= Gt(t.evening) ? "evening" : "morning";
  }
  function ni(e, t) {
    return W.checkins.find((n) => n.date === e && n.slot === t);
  }
  function ii(e) {
    return !!(e && e.mood != null && e.energy != null);
  }
  function oi() {
    const e = /* @__PURE__ */ new Date(), t = xe(e), n = Pr(e), i = gt(), a = e.getHours() * 60 + e.getMinutes();
    return n === "morning" && a < Gt(i.morning) || ii(ni(t, n)) ? null : n;
  }
  const ht = o("checkinModal"), vt = o("checkinTab"), Hr = o("checkinBadge"), ft = { mood: { input: o("moodInput"), fill: o("moodFill") }, energy: { input: o("energyLevelInput"), fill: o("energyLevelFill") } };
  function ua(e) {
    const { input: t, fill: n } = ft[e];
    n.style.width = t.value + "%", t.setAttribute("aria-valuetext", Ot(e, t.value));
  }
  Object.keys(ft).forEach((e) => ft[e].input.addEventListener("input", () => ua(e)));
  let Xe = null;
  function ma() {
    const e = gt(), t = /* @__PURE__ */ new Date(), n = t.getHours() * 60 + t.getMinutes();
    return n < Gt(e.morning) ? "Next check-in at " + e.morning : n < Gt(e.evening) ? "Next check-in at " + e.evening : "Next check-in tomorrow at " + e.morning;
  }
  function Dr() {
    const e = gt(), t = /* @__PURE__ */ new Date(), n = t.getHours() * 60 + t.getMinutes(), i = (a, r) => {
      const [s, l] = a.split(":").map(Number);
      return new Date(t.getFullYear(), t.getMonth(), t.getDate() + (r ? 1 : 0), s, l);
    };
    return n < Gt(e.morning) ? { date: i(e.morning), time: e.morning } : n < Gt(e.evening) ? { date: i(e.evening), time: e.evening } : { date: i(e.morning, !0), time: e.morning };
  }
  let Ji = null, $i = null;
  function ga() {
    if (oi()) {
      ai(), Rt();
      return;
    }
    const e = Dr(), t = Math.max(0, Math.round((e.date - Date.now()) / 1e3)), n = Math.floor(t / 3600), i = Math.floor(t % 3600 / 60), a = t % 60;
    o("peekCountdown").textContent = n + ":" + String(i).padStart(2, "0") + ":" + String(a).padStart(2, "0"), o("peekAt").textContent = "Available at " + e.time;
  }
  function zr() {
    ga(), vt.classList.add("peek"), clearInterval($i), $i = setInterval(ga, 1e3), clearTimeout(Ji), Ji = setTimeout(ai, 6e3);
  }
  function ai() {
    vt.classList.remove("peek"), clearInterval($i), clearTimeout(Ji);
  }
  function ha() {
    const e = oi();
    if (!e) {
      vt.classList.contains("peek") ? ai() : zr();
      return;
    }
    Xe = { date: xe(/* @__PURE__ */ new Date()), slot: e };
    const n = ni(Xe.date, e), i = W.checkins.find((a) => ii(a));
    Object.keys(ft).forEach((a) => {
      ft[a].input.value = (n == null ? void 0 : n[a]) ?? (i == null ? void 0 : i[a]) ?? 50, ua(a);
    }), o("checkinTitle").textContent = e === "morning" ? "Morning check-in" : "Evening check-in", ht.classList.add("open"), ht.setAttribute("aria-hidden", "false"), requestAnimationFrame(() => ft.mood.input.focus());
  }
  function Ln() {
    ht.classList.remove("open"), ht.setAttribute("aria-hidden", "true"), Xe && (En = Xe.date + "-" + Xe.slot);
    try {
      localStorage.setItem("move-assistant-dismissed", En);
    } catch {
    }
    Xe = null, Rt();
  }
  function qr() {
    if (!Xe) return;
    if (ii(ni(Xe.date, Xe.slot))) {
      Ln();
      return;
    }
    const { date: e, slot: t } = Xe;
    let n = ni(e, t);
    n || (n = { date: e, slot: t }, W.checkins.unshift(n), W.checkins = W.checkins.slice(0, 2e3)), n.mood = Number(ft.mood.input.value), n.energy = Number(ft.energy.input.value), n.scale = 100, n.at = (/* @__PURE__ */ new Date()).toISOString(), Ke(), g.fire("checkin", { slot: t, mood: n.mood, energy: n.energy, mood_label: Ot("mood", n.mood), energy_label: Ot("energy", n.energy) }), re((t === "morning" ? "Morning" : "Evening") + " check-in saved"), Ln(), ri(), Rn(), It(), lt();
  }
  let En = "";
  try {
    En = localStorage.getItem("move-assistant-dismissed") || "";
  } catch {
  }
  function Rt() {
    const e = oi();
    Hr.hidden = !e, vt.hidden = !e, e || ai(), vt.classList.toggle("due", !!e), vt.setAttribute("aria-label", e ? (e === "morning" ? "Morning" : "Evening") + " check-in is due" : ma()), vt.title = e ? "Check in now" : ma();
  }
  function Qi() {
    Rt();
    const e = oi();
    !e || ht.classList.contains("open") || K().checkinAutoOpen !== !1 && (!ut.home.classList.contains("active") || Le.classList.contains("open") || En !== xe(/* @__PURE__ */ new Date()) + "-" + e && ha());
  }
  vt.addEventListener("click", ha), o("checkinLater").addEventListener("click", Ln), o("checkinSave").addEventListener("click", qr), ht.addEventListener("click", (e) => {
    e.target === ht && Ln();
  }), ht.addEventListener("keydown", (e) => {
    e.key === "Escape" && (e.preventDefault(), Ln());
  }), setInterval(Qi, 3e4);
  function ri() {
    const e = xe(/* @__PURE__ */ new Date()), t = (n) => W.checkins.find((i) => i.date === e && i[n] != null);
    [["mood", "moodMeta"], ["energy", "energyLevelMeta"]].forEach(([n, i]) => {
      const a = t(n);
      o(i).textContent = a ? Ot(n, a[n]) : "—";
    });
  }
  function Rn() {
    const e = o("feelCard");
    if (!e) return;
    const t = /* @__PURE__ */ new Date(), n = new Date(t.getFullYear(), t.getMonth(), t.getDate() - (t.getDay() + 6) % 7), i = [...Array(7)].map((v, c) => {
      const m = new Date(n.getFullYear(), n.getMonth(), n.getDate() + c), S = xe(m), q = W.checkins.filter((f) => f.date === S), x = (f) => {
        const b = q.map((A) => A[f]).filter((A) => A != null);
        return b.length ? b.reduce((A, ue) => A + ue, 0) / b.length : null;
      };
      return { d: m, key: S, mood: x("mood"), energy: x("energy"), count: q.filter(ii).length, future: m > t && S !== xe(t) };
    }), a = (v) => {
      const c = i.map((m) => m[v]).filter((m) => m != null);
      return c.length ? c.reduce((m, S) => m + S, 0) / c.length : null;
    }, r = a("mood"), s = a("energy"), l = (v, c) => '<div class="feelMeter"><div class="feelMeterTop"><span>' + v + "</span><span>" + (c == null ? "—" : D(Ot("", c))) + '</span></div><div class="feelTrack"><span style="width:' + (c == null ? 0 : Math.max(4, c)) + "%;background:" + (c == null ? "transparent" : Ir(c)) + '"></span></div></div>', h = i.filter((v) => v.mood != null && v.energy != null).sort((v, c) => c.mood + c.energy - (v.mood + v.energy))[0];
    e.innerHTML = '<div class="feelTop"><div class="feelSummary"><div class="feelHeadline">' + (r == null ? "No check-ins yet" : D(Ot("", (r + s) / 2))) + '</div><div class="weekCopy">' + (r == null ? "Your first check-in will appear here." : "on average this week" + (h ? " · best day " + D(new Intl.DateTimeFormat(void 0, { weekday: "long" }).format(h.d)) : "")) + '</div></div></div><div class="feelDays">' + i.map(
      (v) => '<div class="weekChip feelDay' + (v.future ? " future" : "") + (v.key === xe(t) ? " today" : "") + '"><div class="weekChipTop"><strong>' + D(new Intl.DateTimeFormat(void 0, { weekday: "short" }).format(v.d)) + "</strong>" + (v.count >= 2 ? '<span class="weekTick">' + it("check") + "</span>" : '<span class="feelDots">' + "●".repeat(v.count) + "</span>") + "</div>" + l("Mood", v.mood) + l("Energy", v.energy) + "</div>"
    ).join("") + "</div>";
  }
  const si = o("upcomingCountSetting");
  si.addEventListener("change", () => {
    _t = si.value === "all" ? "all" : Number(si.value), Ra();
  });
  const An = o("tempoRevealBtn"), eo = o("tempoExperiment"), Je = o("tempoQuad"), Vt = o("tempoDot"), _r = o("tempoEstimate"), Or = o("tempoReadout");
  let Wt = { x: 0.5, y: 0.5 }, Nn = !1, li = { total: 20, work: 45, rest: 15 };
  function to(e, t, n, i) {
    const a = Math.max(t, Math.min(n, e));
    return Math.round((a - t) / i) * i + t;
  }
  function Gr(e, t) {
    const n = (e - 0.5) * 2, i = (t - 0.5) * 2, a = to(
      li.total + n * 5 + i * 8,
      Number(Q.min),
      Number(Q.max),
      Number(Q.step)
    ), r = to(
      li.work + n * 10 + i * 8,
      Number(Y.min),
      Number(Y.max),
      Number(Y.step)
    ), s = to(
      li.rest + n * 6 + i * 6,
      Number(p.min),
      Number(p.max),
      Number(p.step)
    );
    return Q.value = a, Y.value = r, p.value = s, w.textContent = r + " sec", C.textContent = s + " sec", Kn(), { total: a, work: r, rest: s };
  }
  function no(e, t) {
    const n = e < 0.34 ? "Low" : e > 0.66 ? "Hard" : "Medium", i = t < 0.34 ? "Fast" : t > 0.66 ? "Slow" : "Balanced", a = Gr(e, t);
    Or.textContent = n + " + " + i, _r.textContent = a.total + " min", Je.setAttribute("aria-valuetext", n + " and " + i + ", estimated " + a.total + " minutes");
  }
  function io(e) {
    const t = Je.getBoundingClientRect(), n = Math.max(0, Math.min(1, (e.clientX - t.left) / t.width)), i = Math.max(0, Math.min(1, (e.clientY - t.top) / t.height));
    Wt = { x: n, y: i }, Vt.style.left = n * 100 + "%", Vt.style.top = i * 100 + "%", no(n, i);
  }
  An.addEventListener("click", () => {
    const e = eo.hidden;
    eo.hidden = !e, An.setAttribute("aria-expanded", e ? "true" : "false"), An.textContent = e ? "Now close this" : "Don’t try this!", e && (li = {
      total: Number(Q.value),
      work: Number(Y.value),
      rest: Number(p.value)
    }, Wt = { x: 0.5, y: 0.5 }, Vt.style.left = "50%", Vt.style.top = "50%", no(Wt.x, Wt.y));
  }), d.querySelectorAll("[data-feedback-rating]").forEach((e) => e.addEventListener("click", () => {
    Number(e.dataset.feedbackRating), d.querySelectorAll("[data-feedback-rating]").forEach((t) => t.classList.toggle("selected", t === e));
  }));
  const di = o("testingFeedbackForm"), va = o("testingFeedbackThanks"), Vr = o("testingFeedbackAgain");
  di.addEventListener("submit", (e) => {
    e.preventDefault(), di.hidden = !0, va.hidden = !1, re("Feedback captured for prototype");
  }), Vr.addEventListener("click", (e) => {
    e.preventDefault(), di.reset(), d.querySelectorAll("[data-feedback-rating]").forEach((t) => t.classList.remove("selected")), va.hidden = !0, di.hidden = !1;
  }), Je.addEventListener("pointerdown", (e) => {
    var t;
    Nn = !0, io(e);
    try {
      (t = Je.setPointerCapture) == null || t.call(Je, e.pointerId);
    } catch {
    }
  }), Je.addEventListener("pointermove", (e) => {
    Nn && io(e);
  }), Je.addEventListener("pointerup", (e) => {
    Nn && (Nn = !1, io(e), ee());
  }), Je.addEventListener("pointercancel", () => Nn = !1), Je.addEventListener("keydown", (e) => {
    let { x: t, y: n } = Wt, i = !0;
    e.key === "ArrowLeft" ? t -= 0.05 : e.key === "ArrowRight" ? t += 0.05 : e.key === "ArrowUp" ? n -= 0.05 : e.key === "ArrowDown" ? n += 0.05 : i = !1, i && (e.preventDefault(), t = Math.max(0, Math.min(1, t)), n = Math.max(0, Math.min(1, n)), Wt = { x: t, y: n }, Vt.style.left = t * 100 + "%", Vt.style.top = n * 100 + "%", no(t, n), ee());
  });
  const Le = o("workoutModal");
  let Bn = null;
  function jt(e) {
    return e.map((t) => ({ ...t }));
  }
  function Wr() {
    const e = _[G];
    return {
      key: G,
      profile: e ? JSON.parse(JSON.stringify(e)) : null,
      warmup: jt(_e),
      strength: jt(Be),
      cooldown: jt(Oe),
      total: Number(Q.value),
      work: Number(Y.value),
      rest: Number(p.value),
      rounds: Number(k.value) || 1
    };
  }
  function fa(e = !1) {
    ce = !!e, Fe = null, Ge = null, Ie(), la(), Bn = Wr(), o("moveEditorTitle").textContent = ce ? "Create new move" : "Edit move", o("moveEditorSubtitle").textContent = "Build the sequence first, then set timing, then finish the move.", o("moveEditorSubtitle").hidden = !ce, o("warmupRow").hidden = ce, o("deleteMoveOpen").hidden = ce;
    const t = o("createMoveOptions");
    t.hidden = !ce;
    {
      const n = _[G];
      o("includeWarmupPreset").checked = !!(n != null && n.includeWarmup), o("includeCooldownPreset").checked = !!(n != null && n.includeCooldown);
    }
    if (ba(), ce) {
      o("useGlobalTiming").checked = !0, o("useGlobalRestTiming").checked = !0;
      const n = _[G];
      zi((n == null ? void 0 : n.preset) || "movement", !1);
    }
    o("movementCreator").hidden = !0, Nr("movement"), Ki(), Mn(), eo.hidden = !0, An.setAttribute("aria-expanded", "false"), An.textContent = "Don’t try this!", Le.classList.toggle("createMode", ce), Le.querySelector(".modal").classList.toggle("createMode", ce), Le.classList.add("open"), Le.setAttribute("aria-hidden", "false"), Et(), ce && pt();
  }
  function jr() {
    const e = _[G];
    return e != null && e.customSequence ? !!e.includeWarmup : !(e != null && e.warmupOff);
  }
  function ba() {
    const e = jr(), t = o("warmupSwitch");
    t.classList.toggle("on", e), t.setAttribute("aria-checked", String(e));
  }
  o("warmupSwitch").addEventListener("click", () => {
    const e = _[G];
    e && (e.customSequence ? (o("includeWarmupPreset").checked = !e.includeWarmup, qi()) : (e.warmupOff = !e.warmupOff, ee()), ba());
  });
  function ci() {
    Ie(), la(), da(), Ge = null, Fe = null, Le.classList.contains("createMode") && Ii(), Le.classList.remove("createMode"), Le.querySelector(".modal").classList.remove("createMode"), Le.classList.remove("open"), Le.setAttribute("aria-hidden", "true");
  }
  function xa() {
    if (!Bn) return;
    const e = Bn;
    e.profile && (_[e.key] = JSON.parse(JSON.stringify(e.profile))), G = e.key, _e = jt(e.warmup), Be = jt(e.strength), Oe = jt(e.cooldown), Q.value = e.total, Y.value = e.work, p.value = e.rest, k.value = e.rounds || 1;
    const t = _[G];
    if (t) {
      d.querySelectorAll(".workoutPanel[data-workout]").forEach((i) => i.classList.toggle("active", i.dataset.workout === G));
      const n = d.querySelector(".workoutPanel.active");
      if (n) {
        const i = n.querySelector(".workoutName");
        i && (i.textContent = t.name);
        const a = n.querySelector(".panelCollapsedText");
        a && (a.textContent = t.name);
        const r = n.querySelector(".sourceTag");
        r && (r.textContent = t.source);
      }
      E.value = t.name;
    }
    ee();
  }
  o("cancelWorkoutEdit").addEventListener("click", () => {
    if (ce) {
      const e = G;
      delete _[e], ce = !1, Mt = null, Ze(W.order.find((t) => _[t]) || Object.keys(_)[0]);
    } else
      xa();
    ci();
  }), o("saveWorkoutEdit").addEventListener("click", () => {
    Ie(), pe && ti();
    const e = _[G], t = E.value.trim() || "New move";
    if (e && (e.name = t), Jn(), Fe = null, ee(), ce && e)
      Hi(G, e), d.querySelectorAll(".workoutPanel[data-workout]").forEach((n) => n.classList.toggle("active", n.dataset.workout === G)), ce = !1, Mt = null, W.order.includes(G) || W.order.push(G), re("Move created");
    else {
      const n = d.querySelector(".workoutPanel.active");
      if (n) {
        const i = n.querySelector(".workoutName");
        i && (i.textContent = t);
        const a = n.querySelector(".panelCollapsedText");
        a && (a.textContent = t);
      }
      re("Move saved");
    }
    Bn = null, ci(), Ke();
  }), Le.addEventListener("click", (e) => {
    if (e.target === Le) {
      if (ce) {
        const t = G;
        delete _[t], ce = !1, Mt = null, Ze(W.order.find((n) => _[n]) || Object.keys(_)[0]);
      } else
        xa();
      ci();
    }
  }), Wi(o("addMovementBtn"), "movement"), Wi(o("addRestBtn"), "rest"), Wi(o("addVideoBtn"), "video"), o("closeMovementCreator").addEventListener("click", () => {
    o("movementCreator").hidden = !0;
  }), o("useGlobalTiming").addEventListener("change", Mn), o("useGlobalRestTiming").addEventListener("change", Mn), d.querySelectorAll(".createPresetBtn").forEach((e) => e.addEventListener("click", () => {
    zi(e.dataset.movePreset, !0), ee();
  })), o("includeWarmupPreset").addEventListener("change", qi), o("includeCooldownPreset").addEventListener("change", qi), o("includeWarmupPreset").addEventListener("change", qe), o("includeCooldownPreset").addEventListener("change", qe), E.addEventListener("input", qe), E.addEventListener("input", Yi), o("confirmAddMovement").addEventListener("click", Zi), o("confirmAddRest").addEventListener("click", Zi), o("addMovementInput").addEventListener("keydown", (e) => {
    e.key === "Enter" && Zi();
  });
  const Fn = o("countdown"), oo = o("countNum"), ot = o("countdownPixelCanvas");
  let In = null, ao = "appear";
  class Yr {
    constructor(t, n, i, a, r, s, l) {
      this.width = t.width, this.height = t.height, this.ctx = n, this.x = i, this.y = a, this.color = r, this.speed = (Math.random() * 0.8 + 0.1) * s, this.size = 0, this.sizeStep = Math.random() * 0.4, this.minSize = 0.5, this.maxSizeInteger = 2, this.maxSize = Math.random() * (this.maxSizeInteger - this.minSize) + this.minSize, this.delay = l, this.counter = 0, this.counterStep = Math.random() * 4 + (this.width + this.height) * 0.01, this.isIdle = !1, this.isReverse = !1, this.isShimmer = !1;
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
  let ro = [], wa = 1, ya = 1;
  function At() {
    const e = parseFloat(getComputedStyle(o("app")).zoom);
    return Number.isFinite(e) && e > 0 ? e : 1;
  }
  function Ur() {
    var v;
    if (!ot) return;
    const e = At(), t = Math.max(1, window.innerWidth / e), n = Math.max(1, window.innerHeight / e);
    wa = t, ya = n;
    const i = Math.min(window.devicePixelRatio || 1, 2);
    ot.width = Math.floor(t * i), ot.height = Math.floor(n * i), ot.style.width = t + "px", ot.style.height = n + "px";
    const a = ot.getContext("2d");
    a.setTransform(i, 0, 0, i, 0, 0);
    const r = ["#f2fbff", "#d4effc", "#a9e0fa", "#6cc8f6"], s = 12, l = (v = window.matchMedia) == null ? void 0 : v.call(window, "(prefers-reduced-motion: reduce)").matches, h = l ? 0 : 0.055;
    ro = [];
    for (let c = 0; c < t; c += s)
      for (let m = 0; m < n; m += s) {
        const S = c - t / 2, q = m - n / 2, x = Math.sqrt(S * S + q * q), f = l ? 0 : Math.random() * 75 + x * 0.05, b = new Yr({ width: t, height: n }, a, c, m, r[Math.floor(Math.random() * r.length)], h, f);
        b.maxSizeInteger = 4, b.maxSize = Math.random() * 3.2 + 0.8, b.sizeStep = 0.35 + Math.random() * 0.45, ro.push(b);
      }
  }
  function ka(e) {
    cancelAnimationFrame(In), ao = e;
    const t = ot == null ? void 0 : ot.getContext("2d");
    if (!t) return;
    function n() {
      t.clearRect(0, 0, wa, ya);
      let i = !0;
      ro.forEach((a) => {
        a[ao](), a.isIdle || (i = !1);
      }), ao === "disappear" && i || (In = requestAnimationFrame(n));
    }
    In = requestAnimationFrame(n);
  }
  function pi() {
    cancelAnimationFrame(In), Ur(), ka("appear"), setTimeout(() => ka("disappear"), 560);
  }
  window.addEventListener("resize", () => {
    Fn.classList.contains("active") && pi();
  });
  const Pn = o("pixelTrailCanvas"), Yt = Pn.getContext("2d");
  let at = !0, Ut = 0.7, Kt = 600, Hn = [], Zt = null, bt = { x: 0, y: 0, ready: !1 };
  function Sa() {
    const e = H.getBoundingClientRect(), t = At(), n = Math.min(window.devicePixelRatio || 1, 2), i = Math.max(1, e.width / t), a = Math.max(1, e.height / t);
    Pn.width = Math.max(1, Math.floor(i * n)), Pn.height = Math.max(1, Math.floor(a * n)), Pn.style.width = i + "px", Pn.style.height = a + "px", Yt.setTransform(n, 0, 0, n, 0, 0);
  }
  function Kr(e, t) {
    if (!at) return;
    const n = performance.now();
    bt.ready || (bt = { x: e, y: t, ready: !0 });
    const i = 7;
    for (let a = 1; a <= i; a++) {
      const r = a / i;
      Hn.push({
        x: bt.x + (e - bt.x) * r,
        y: bt.y + (t - bt.y) * r,
        born: n - (i - a) * 10
      });
    }
    bt = { x: e, y: t, ready: !0 };
  }
  function ui(e) {
    if (Zt = null, !z) return;
    if (!ut.workout.classList.contains("active")) {
      Zt = requestAnimationFrame(ui);
      return;
    }
    const t = H.getBoundingClientRect(), n = At();
    Yt.clearRect(0, 0, t.width / n, t.height / n), at && (Hn = Hn.filter((a) => e - a.born < Kt), Yt.fillStyle = o("app").classList.contains("light") ? "#03A9F4" : "#f4f4f4", Hn.forEach((a) => {
      const r = (e - a.born) / Kt, s = (1 - r) * Ut, l = Math.round(a.x / 14) * 14, h = Math.round(a.y / 14) * 14;
      Yt.globalAlpha = Math.max(0, s);
      const v = 2 + 5 * (1 - r) * Ut;
      Yt.fillRect(l - v / 2, h - v / 2, v, v);
    }), Yt.globalAlpha = 1), Zt = requestAnimationFrame(ui);
  }
  H.addEventListener("pointermove", (e) => {
    const t = H.getBoundingClientRect(), n = At();
    Kr((e.clientX - t.left) / n, (e.clientY - t.top) / n);
  }), H.addEventListener("pointerleave", () => bt.ready = !1), new ResizeObserver(Sa).observe(H), Sa(), Zt = requestAnimationFrame(ui);
  const xt = o("movementRippleCanvas"), Xt = xt.getContext("2d");
  let Nt = !0, Jt = null, Zr = performance.now();
  function Ca() {
    const e = xt.parentElement.getBoundingClientRect(), t = At(), n = Math.max(1, e.width / t), i = Math.max(1, e.height / t), a = Math.min(window.devicePixelRatio || 1, 2);
    xt.width = Math.max(1, Math.floor(n * a)), xt.height = Math.max(1, Math.floor(i * a)), xt.style.width = n + "px", xt.style.height = i + "px", Xt.setTransform(a, 0, 0, a, 0, 0);
  }
  function Ta() {
    var e;
    return Ce || ((e = y[F]) == null ? void 0 : e.kind) === "rest";
  }
  function Xr() {
    const e = y[F];
    return Ta() ? 2200 : e ? e.kind === "warmup" || e.kind === "cooldown" ? 2400 : 1350 : 1600;
  }
  function mi(e) {
    if (Jt = null, !z) return;
    if (!ut.workout.classList.contains("active")) {
      Jt = requestAnimationFrame(mi);
      return;
    }
    const t = xt.parentElement.getBoundingClientRect(), n = At(), i = Math.max(1, t.width / n), a = Math.max(1, t.height / n);
    if (Xt.clearRect(0, 0, i, a), Nt) {
      const r = Xr(), s = (e - Zr) % r / r, l = 15, h = Math.max(8, Math.round(l * a / Math.max(1, i))), v = i / (l + 1), c = a / (h + 1), m = i * 0.5, S = a * 0.52, q = Math.hypot(m, S), f = o("app").classList.contains("light") ? "34,34,34" : "244,244,244";
      for (let b = 1; b <= h; b++)
        for (let A = 1; A <= l; A++) {
          const ue = A * v, T = b * c, j = Math.hypot(ue - m, T - S) / q, ae = Ta(), ge = ae ? Math.exp(-Math.pow((j - (s * 0.82 + 0.08) % 1 * 1.18) * 5.5, 2)) : 0, J = Math.exp(-Math.pow((j - s * 1.25) * 7, 2)), be = ae ? ge : J, ke = ae ? 0.5 + 0.5 * Math.sin(s * Math.PI * 2 - j * 3) ** 2 : 0.35 + 0.65 * Math.sin(s * Math.PI * 2 - j * 5) ** 2, de = ae ? 1.4 + be * 4.2 * ke : 1.2 + be * 5 * ke;
          Xt.beginPath(), Xt.arc(ue, T, de, 0, Math.PI * 2), Xt.fillStyle = `rgba(${f},${ae ? 0.08 + be * 0.48 : 0.05 + be * 0.55})`, Xt.fill();
        }
    }
    Jt = requestAnimationFrame(mi);
  }
  new ResizeObserver(Ca).observe(xt.parentElement), Ca(), Jt = requestAnimationFrame(mi);
  const Dn = o("exerciseTitle"), rt = o("exerciseMeta"), so = o("stepLabel"), lo = o("digits"), Ma = o("fill"), $t = o("progress"), co = o("pause"), Jr = o("nextName"), $r = o("nextMeta"), Qr = o("nextIcon"), gi = o("skipNextSession");
  let He = null;
  function De(e) {
    for (let t = Math.max(0, e); t < y.length; t++)
      if (!y[t].sessionHidden) return t;
    return -1;
  }
  function es() {
    const e = y[F];
    if (!e) return { name: "Complete", meta: "Move finished", icon: "check" };
    if (Ce) {
      const i = De(F + 1), a = i >= 0 ? y[i] : null;
      return a ? { name: a.name, meta: uo(a), icon: po(a) } : { name: "Complete", meta: "Move finished", icon: "check" };
    }
    if (e.rest > 0) return { name: "Rest", meta: e.rest + " sec · " + (e.roundBreakAfter ? "round " + (e.round + 1) + " next" : "recovery"), icon: "pause" };
    const t = De(F + 1), n = t >= 0 ? y[t] : null;
    return n ? { name: n.name, meta: uo(n), icon: po(n) } : { name: "Complete", meta: "Move finished", icon: "check" };
  }
  function ts() {
    if (!y[F]) return y.length;
    const t = De(F + 1);
    return t < 0 ? y.length : t + 1;
  }
  function po(e) {
    return e.kind === "video" ? "play" : "clock";
  }
  function uo(e) {
    return e.kind === "video" ? "YouTube · " + xn(e.duration) : e.group + " · " + e.duration + " sec";
  }
  function hi() {
    return y.length && y[y.length - 1].round || 1;
  }
  function La(e) {
    const t = y[e];
    if (!t) return "";
    const n = hi();
    if (n <= 1) return "Step " + (e + 1) + " of " + y.length;
    if (t.roundBreak) return "Round " + t.round + " of " + n + " · Rest";
    const i = y.filter((a) => a.round === t.round && !a.roundBreak).length;
    return "Round " + t.round + " of " + n + " · Step " + (t.roundIndex + 1) + " of " + i;
  }
  function Ea() {
    return $t.querySelector('[data-step="' + F + '"]');
  }
  function ns() {
    y[F] && Number($t.dataset.round) !== (y[F].round || 1) && ho(), [...$t.children].forEach((e) => {
      const t = Number(e.dataset.step);
      e.classList.toggle("done", t < F), e.classList.toggle("active", t === F), e.classList.toggle("rewindable", t <= F), e.disabled = t > F, t === F && e.style.setProperty("--segment-progress", "0%");
    }), y[F] && (so.textContent = La(F), Ft());
  }
  function is(e) {
    const t = y.indexOf(e);
    t < 0 || t <= F || (e.sessionHidden = !e.sessionHidden, Bt(), re((e.sessionHidden ? "Hidden " : "Included ") + e.name + " for this session"));
  }
  function Ra() {
    const e = o("upcomingList");
    if (!e) return;
    e.innerHTML = "";
    const t = ts(), n = y.slice(t);
    (_t === "all" ? n : n.slice(0, Math.max(1, Number(_t) || 1))).forEach((a) => {
      const r = document.createElement("section");
      r.className = "upcomingCard" + (a.sessionHidden ? " sessionHidden" : "") + (yo(a) ? " noMeta" : ""), r.innerHTML = '<div class="upcomingInfo"><div class="upcomingIcon" aria-hidden="true">' + it(po(a)) + '</div><div><div class="upcomingName">' + D(a.name) + '</div><div class="upcomingMeta">' + D(uo(a)) + (hi() > 1 ? " · round " + a.round : "") + '</div></div></div><button class="skipSessionBtn" type="button">' + (a.sessionHidden ? "Include this session" : "Skip this session") + "</button>", r.querySelector(".skipSessionBtn").addEventListener("click", () => is(a)), e.appendChild(r);
    });
  }
  function Bt() {
    var t;
    const e = es();
    Jr.textContent = e.name, $r.textContent = e.meta, Qr.innerHTML = it(e.icon);
    {
      const n = Ce ? y[De(F + 1)] : ((t = y[F]) == null ? void 0 : t.rest) > 0 ? { kind: "rest" } : y[De(F + 1)];
      d.querySelector(".nextCard").classList.toggle("noMeta", !!(n && yo(n)));
    }
    if (He = null, Ce) {
      const n = De(F + 1);
      n >= 0 && (He = y[n]);
    } else {
      const n = y[F];
      if (n && n.rest > 0)
        He = null;
      else {
        const i = De(F + 1);
        i >= 0 && (He = y[i]);
      }
    }
    gi && (gi.hidden = !He, gi.textContent = He != null && He.sessionHidden ? "Include this session" : "Skip this session"), Ra();
  }
  gi.addEventListener("click", () => {
    He && (He.sessionHidden = !He.sessionHidden, re((He.sessionHidden ? "Hidden " : "Included ") + He.name + " for this session"), Bt());
  });
  let $e = null, mo = null;
  function zn(e, t = {}) {
    const n = _[G];
    g.fire(e, { move: (n == null ? void 0 : n.name) || "", move_id: G, ...t });
  }
  function os() {
    const e = _[G];
    $e = { key: G, name: (e == null ? void 0 : e.name) || "Move", startedAt: Date.now(), active: 0 }, clearInterval(mo), mo = setInterval(() => {
      $e && !Ye && $e.active++;
    }, 1e3), zn("started", { steps: y.length });
  }
  function Aa(e) {
    if (clearInterval(mo), !$e) return;
    const t = $e;
    $e = null, zn(e ? "completed" : "ended", { seconds: t.active }), !(t.active < 30) && (W.history.unshift({ id: "h-" + t.startedAt, move_id: t.key, name: t.name, start: new Date(t.startedAt).toISOString(), seconds: t.active, completed: e }), W.history = W.history.slice(0, 1e3), Ke(), It(), lt());
  }
  function as() {
    tt("workout"), rs();
    const e = De(0);
    e >= 0 && y[e].kind === "video" && Pa(y[e]);
  }
  function go() {
    fi(), Aa(!1), clearInterval(me), clearInterval(Yn), Ce = !1, st(!1), o("app").classList.remove("resting"), Fn.classList.remove("active"), tt("home");
  }
  function rs() {
    Fn.classList.add("active");
    let e = 5;
    oo.textContent = e, requestAnimationFrame(pi), clearInterval(Yn), Yn = setInterval(() => {
      e--, e > 0 ? (oo.textContent = e, pi()) : (clearInterval(Yn), oo.textContent = "GO", pi(), setTimeout(() => {
        Fn.classList.remove("active"), cancelAnimationFrame(In), ls();
      }, 650));
    }, 1e3);
  }
  function ho() {
    var t;
    $t.innerHTML = "";
    const e = ((t = y[Math.max(0, F)] || y[0]) == null ? void 0 : t.round) || 1;
    $t.dataset.round = e, y.forEach((n, i) => {
      if ((n.round || 1) !== e) return;
      const a = document.createElement("button");
      a.dataset.step = i, a.type = "button", a.className = "progressSegment", a.setAttribute("aria-label", "Go to " + n.name), a.addEventListener("click", () => {
        i <= F && ss(i);
      }), $t.appendChild(a);
    });
  }
  function st(e) {
    e = !!e;
    const t = Ye !== e;
    if (Ye = e, co.textContent = e ? "Resume" : "Pause", o("app").classList.toggle("paused", e), Ee && oe)
      try {
        e ? oe.pauseVideo() : oe.playVideo();
      } catch {
      }
    t && $e && zn(e ? "paused" : "resumed");
  }
  function ss(e) {
    e < 0 || e >= y.length || e > F || (clearInterval(me), Ce = !1, o("app").classList.remove("resting"), F = e, st(!1), an(), me = setInterval(wt, 1e3));
  }
  function ls() {
    if (F = De(0), st(!1), ho(), F < 0) {
      Dn.textContent = "No activities", rt.textContent = "Open Edit and enable or add a movement", rt.hidden = !1;
      return;
    }
    os(), an(), clearInterval(me), me = setInterval(wt, 1e3);
  }
  const Na = o("videoStage"), Qt = o("videoSound"), ds = 0, en = 1, cs = 2;
  let Ba = 0, tn = null, nn = null, oe = null, on = null, vi = 0, vo = !1, Ee = null, fo = null;
  function Fa() {
    var e;
    return (e = window.YT) != null && e.Player ? Promise.resolve(window.YT) : tn || (tn = new Promise((t, n) => {
      const i = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        try {
          i == null || i();
        } catch {
        }
      };
      const a = setInterval(() => {
        var s;
        (s = window.YT) != null && s.Player && (clearInterval(a), clearTimeout(r), t(window.YT));
      }, 100), r = setTimeout(() => {
        clearInterval(a), tn = null, n(new Error("YouTube did not load"));
      }, 15e3);
      if (!document.querySelector('script[src*="youtube.com/iframe_api"]')) {
        const s = document.createElement("script");
        s.src = "https://www.youtube.com/iframe_api", s.async = !0, s.onerror = () => {
          clearInterval(a), clearTimeout(r), tn = null, n(new Error("YouTube did not load"));
        }, document.head.appendChild(s);
      }
    }), tn);
  }
  function Ia() {
    return nn || (nn = Fa().then((e) => new Promise((t) => {
      const n = document.createElement("div");
      o("videoFrame").appendChild(n), oe = new e.Player(n, {
        width: "100%",
        height: "100%",
        playerVars: { playsinline: 1, rel: 0, iv_load_policy: 3, modestbranding: 1 },
        events: { onReady: () => t(oe), onStateChange: (i) => us(i.data), onError: (i) => ms(i.data) }
      });
    })), nn.catch(() => {
      nn = null;
    }), nn);
  }
  function Pa(e) {
    !(e != null && e.videoId) || e.videoError || Ia().then((t) => {
      Ee || on === e.videoId || (on = e.videoId, vi = Number(e.start) || 0, vo = !1, t.mute(), t.loadVideoById({ videoId: e.videoId, startSeconds: vi }));
    }).catch(() => {
    });
  }
  function ps() {
    const e = De(F + 1);
    e >= 0 && y[e].kind === "video" && Pa(y[e]);
  }
  function us(e) {
    if (!Ee) {
      e === en && !vo && (vo = !0, oe.pauseVideo(), oe.seekTo(vi, !0));
      return;
    }
    Na.classList.toggle("playing", e === en), y[F] === Ee && performance.now() > Ba && (e === en && Ye ? st(!1) : e === cs && !Ye && st(!0)), e === en && za(Ee.videoId, oe.getDuration()) && Ke(), e === ds && qn();
  }
  function ms(e) {
    const t = Ee;
    if (!t) {
      on = null;
      return;
    }
    e === 101 || e === 150 ? (vs(t.videoId), re("That video can’t play outside YouTube, so it was skipped")) : re("The video couldn’t play, so it was skipped"), qn();
  }
  function gs(e) {
    if (o("app").classList.add("videoStep"), Qt.hidden = !0, Ee = e, clearTimeout(fo), !e.videoId) {
      re("This video step has no link yet, so it was skipped"), setTimeout(() => qn(), 0);
      return;
    }
    Ia().then((t) => {
      if (Ee !== e) return;
      Ba = performance.now() + 1500;
      const n = Number(e.start) || 0;
      on !== e.videoId ? (on = e.videoId, vi = n, t.loadVideoById({ videoId: e.videoId, startSeconds: n })) : (t.seekTo(n, !0), t.playVideo()), t.unMute(), Ye && t.pauseVideo(), fo = setTimeout(() => {
        Ee !== e || Ye || (t.getPlayerState() !== en ? (t.mute(), t.playVideo(), Qt.hidden = !1) : t.isMuted() && (Qt.hidden = !1));
      }, 1600);
    }).catch(() => {
      Ee === e && (re("YouTube didn’t load, so the video was skipped"), qn());
    });
  }
  function Ha() {
    if (!o("app").classList.contains("videoStep")) return;
    const e = d.querySelector(".workGrid"), t = d.querySelector(".sessionControlRow"), n = e.getBoundingClientRect().top, i = (t == null ? void 0 : t.offsetHeight) || 42, a = window.innerHeight - n - 16 - i - 84;
    e.style.setProperty("--theater-h", Math.max(240, Math.round(a)) + "px");
  }
  window.addEventListener("resize", Ha);
  function fi() {
    clearTimeout(fo);
    const e = Ee;
    if (Ee = null, o("app").classList.remove("videoStep"), Na.classList.remove("playing"), Qt.hidden = !0, e && oe) {
      try {
        oe.pauseVideo();
      } catch {
      }
      on = null;
    }
  }
  function qn() {
    const e = Ee;
    !e || y[F] !== e || (fi(), clearInterval(me), rn(), me = setInterval(wt, 1e3));
  }
  Qt.addEventListener("click", () => {
    oe && (oe.unMute(), oe.playVideo()), Qt.hidden = !0;
  });
  function hs(e) {
    var i;
    const t = Number(e.start) || 0;
    if (e.useVideoLength === !1) return t + (Number(e.duration) || 300);
    const n = oe && Ee === e && Number((i = oe.getDuration) == null ? void 0 : i.call(oe)) || 0;
    return Number(e.end) || n || Number(e.videoDuration) || t + (Number(e.duration) || 300);
  }
  function Da(e, t) {
    const n = _[G];
    [_e, Be, Oe, n == null ? void 0 : n.warmup, n == null ? void 0 : n.strength, n == null ? void 0 : n.cooldown, n == null ? void 0 : n.sequence].forEach((i) => (Array.isArray(i) ? i : []).forEach((a) => {
      a && a.kind === "video" && a.videoId === e && t(a);
    }));
  }
  function za(e, t) {
    t = Math.round(Number(t) || 0);
    let n = !1;
    return e && t > 0 && Da(e, (i) => {
      i.videoDuration !== t && (i.videoDuration = t, n = !0);
    }), n;
  }
  function vs(e) {
    Da(e, (t) => {
      t.videoError = "embed";
    }), Ke();
  }
  function fs(e) {
    const t = e.videoId;
    if (!t) return;
    const n = () => {
      Le.classList.contains("open") ? Fe || ee() : (ee(), Ke());
    };
    fetch("https://www.youtube.com/oembed?format=json&url=" + encodeURIComponent("https://www.youtube.com/watch?v=" + t)).then((i) => i.ok ? i.json() : Promise.reject(i.status)).then((i) => {
      e.videoId === t && (e.videoTitle = i.title || "", e.autoName && i.title && (e.name = i.title), n());
    }).catch((i) => {
      e.videoId === t && i === 401 && (e.videoError = "embed", n());
    }), bs(t).then((i) => {
      za(t, i) && n();
    }).catch((i) => {
      i === "embed" && e.videoId === t && (e.videoError = "embed", n());
    });
  }
  function bs(e) {
    return Fa().then((t) => new Promise((n, i) => {
      const a = document.createElement("div");
      a.className = "videoProbe", a.setAttribute("aria-hidden", "true");
      const r = document.createElement("div");
      a.appendChild(r), o("app").appendChild(a);
      let s = null, l = !1;
      const h = (m, S) => {
        l || (l = !0, clearTimeout(v), setTimeout(() => {
          try {
            s == null || s.destroy();
          } catch {
          }
          a.remove();
        }, 0), S ? i(S) : n(m));
      }, v = setTimeout(() => h(0), 2e4), c = () => {
        var S;
        const m = Number((S = s == null ? void 0 : s.getDuration) == null ? void 0 : S.call(s)) || 0;
        return m > 0 && h(m), m > 0;
      };
      s = new t.Player(r, {
        width: 320,
        height: 180,
        videoId: e,
        playerVars: { playsinline: 1, mute: 1, controls: 0 },
        events: {
          onReady: () => {
            c() || (s.mute(), s.playVideo());
          },
          onStateChange: () => c(),
          onError: (m) => h(0, m.data === 101 || m.data === 150 ? "embed" : "error")
        }
      });
    }));
  }
  function an() {
    Ce = !1;
    const e = y[F];
    o("app").classList.toggle("resting", e.kind === "rest"), e.kind === "video" ? gs(e) : fi(), Me = e.duration, bn = e.duration, Dn.textContent = e.name, rt.textContent = e.group, rt.hidden = !0, so.textContent = La(F), $e && zn("step", { name: e.name, group: e.group, kind: e.kind, step: F + 1, of: y.length, round: e.round || 1, rounds: hi(), duration: e.duration }), Bt(), ns(), ps(), e.kind === "video" && setTimeout(Ha, 0);
  }
  function Ft() {
    var a;
    const e = ((a = y[F]) == null ? void 0 : a.kind) === "video" && !Ce, t = e && Me >= 60;
    lo.textContent = t ? xn(Me) : Me, lo.classList.toggle("long", t), e && (o("videoClock").textContent = xn(Me) + " left");
    const n = Me / bn * 100;
    Ma.style.width = n + "%";
    const i = Ea();
    if (i && !Ce) {
      const r = 100 - n;
      i.style.setProperty("--segment-progress", r + "%");
    }
  }
  function wt() {
    var t, n;
    if (Ye) return;
    const e = y[F];
    if ((e == null ? void 0 : e.kind) === "video" && !Ce && Ee === e) {
      const i = Number((t = oe == null ? void 0 : oe.getCurrentTime) == null ? void 0 : t.call(oe)) || 0, a = Number(e.start) || 0, r = hs(e);
      bn = Math.max(1, r - a), (i > a || ((n = oe == null ? void 0 : oe.getPlayerState) == null ? void 0 : n.call(oe)) === en) && (Me = Math.max(0, Math.ceil(r - i))), Ft(), i > a && i >= r - 0.25 && qn();
      return;
    }
    Me--, Ft(), Me <= 0 && (e.rest > 0 ? qa(e.rest) : rn());
  }
  function qa(e) {
    var n;
    Ce = !0, o("app").classList.add("resting");
    const t = Ea();
    t && t.style.setProperty("--segment-progress", "100%"), clearInterval(me), Me = e, bn = e, $e && zn("rest", { duration: e }), Dn.textContent = "Rest", rt.textContent = (n = y[F]) != null && n.roundBreakAfter ? "Round " + (y[F].round + 1) + " next" : "Recovery", Bt(), Ft(), me = setInterval(() => {
      Ye || (Me--, Ft(), Me <= 0 && (clearInterval(me), rn(), me = setInterval(wt, 1e3)));
    }, 1e3);
  }
  function rn() {
    Ce = !1;
    const e = De(F + 1);
    if (e >= 0)
      F = e, an();
    else {
      clearInterval(me), fi(), st(!1), o("app").classList.remove("resting"), Dn.textContent = "Complete", rt.textContent = "Move finished", rt.hidden = !1, lo.textContent = "✓";
      {
        const t = hi();
        so.textContent = t > 1 ? t + " rounds done" : y.filter((n) => !n.roundBreak).length + " steps done";
      }
      Aa(!0);
      {
        const t = Za(7).reduce((n, i) => n + i.minutes, 0);
        rt.textContent = "Move finished · " + t + " min in the last 7 days";
      }
      Ma.style.width = "100%", Bt();
    }
  }
  o("skipExercise").addEventListener("click", () => {
    xs(), st(!1);
  });
  function xs() {
    clearInterval(me);
    const e = y[F];
    if (Ce) {
      Ce = !1, o("app").classList.remove("resting");
      const n = De(F + 1);
      n >= 0 ? (F = n, an(), me = setInterval(wt, 1e3)) : rn();
      return;
    }
    if (e && e.rest > 0) {
      qa(e.rest);
      return;
    }
    const t = De(F + 1);
    t >= 0 ? (F = t, an(), me = setInterval(wt, 1e3)) : rn();
  }
  o("restartSegment").addEventListener("click", () => {
    if (clearInterval(me), st(!1), Ce) {
      const e = y[F];
      Me = e.rest, bn = e.rest, Dn.textContent = "Rest", rt.textContent = "Recovery", o("app").classList.add("resting"), Bt(), Ft();
    } else
      an();
    me = setInterval(Ce ? () => {
      Ye || (Me--, Ft(), Me <= 0 && (clearInterval(me), rn(), me = setInterval(wt, 1e3)));
    } : wt, 1e3);
  });
  function _n(e, t, n, i) {
    let a = 0, r = null, s = !1;
    function l() {
      r && cancelAnimationFrame(r), r = null, a = 0, s = !1, t.style.width = "0%", e.classList.remove("holding");
    }
    function h(m) {
      if (!s) return;
      a || (a = m);
      const S = Math.min(1, (m - a) / n);
      if (t.style.width = S * 100 + "%", S >= 1) {
        s = !1, r && cancelAnimationFrame(r), r = null, t.style.width = "100%", setTimeout(() => t.style.width = "0%", 90), i();
        return;
      }
      r = requestAnimationFrame(h);
    }
    function v(m) {
      var S;
      if (!(m && m.button !== void 0 && m.button !== 0)) {
        m == null || m.preventDefault(), l(), s = !0, e.classList.add("holding");
        try {
          (S = e.setPointerCapture) == null || S.call(e, m.pointerId);
        } catch {
        }
        r = requestAnimationFrame(h);
      }
    }
    function c() {
      s && l();
    }
    e.addEventListener("pointerdown", v), e.addEventListener("pointerup", c), e.addEventListener("pointercancel", c), e.addEventListener("lostpointercapture", c), e.addEventListener("keydown", (m) => {
      (m.key === " " || m.key === "Enter") && !m.repeat && v(m);
    }), e.addEventListener("keyup", (m) => {
      (m.key === " " || m.key === "Enter") && c();
    });
  }
  const ws = o("endWorkout");
  _n(ws, o("holdEndFill"), 1500, go);
  const sn = o("deleteMoveConfirm");
  o("deleteMoveOpen").addEventListener("click", () => {
    sn.classList.add("open"), sn.setAttribute("aria-hidden", "false");
  }), o("deleteMoveCancel").addEventListener("click", () => {
    sn.classList.remove("open"), sn.setAttribute("aria-hidden", "true");
  });
  function ys() {
    const e = G, t = d.querySelector('.workoutPanel[data-workout="' + e + '"]');
    t && t.remove(), delete _[e], W.order = W.order.filter((i) => i !== e);
    let n = d.querySelector(".workoutPanel[data-workout]");
    if (!n) {
      const i = "custom-" + Date.now();
      _[i] = { name: "New move", source: "Custom routine", total: 20, work: 45, rest: 15, customSequence: !0, preset: "movement", sequence: [], strength: [] }, W.order.push(i), n = Hi(i, _[i]);
    }
    sn.classList.remove("open"), sn.setAttribute("aria-hidden", "true"), Bn = null, ci(), Ze(n.dataset.workout), Ke(), re("Move deleted");
  }
  _n(o("deleteMoveYes"), o("deleteMoveFill"), 1500, ys);
  const bo = d.querySelector(".rubberTabs"), ln = o("rubberIndicator");
  function On(e, t = !0) {
    if (!e || !bo || !ln) return;
    const n = bo.getBoundingClientRect(), i = e.getBoundingClientRect();
    ln.style.transition = t ? "left .34s cubic-bezier(.2,1.35,.4,1),width .34s cubic-bezier(.2,1.35,.4,1),transform .18s ease" : "none";
    const a = At();
    ln.style.left = (i.left - n.left) / a + bo.scrollLeft + "px", ln.style.width = i.width / a + "px", t && (ln.style.transform = "scaleX(1.08)", setTimeout(() => ln.style.transform = "scaleX(1)", 180));
  }
  d.querySelectorAll(".tab").forEach((e) => e.addEventListener("click", () => {
    e.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "smooth" }), d.querySelectorAll(".tab").forEach((t) => t.classList.remove("active")), d.querySelectorAll(".settingsPane").forEach((t) => t.classList.remove("active")), e.classList.add("active"), o(e.dataset.pane).classList.add("active"), On(e, !0);
  })), requestAnimationFrame(() => On(d.querySelector(".tab.active"), !1)), window.addEventListener("resize", () => On(d.querySelector(".tab.active"), !1));
  const xo = o("pixelTrailToggle"), wo = o("rippleToggle"), dn = o("trailStrength"), cn = o("trailLife");
  function Pe(e, t) {
    K()[e] = t, Ke();
  }
  const _a = ["Warm-up", "Movement", "Cooldown", "Rest", "Video"];
  function Oa(e) {
    return e.kind === "rest" ? "rest" : e.kind === "video" ? "video" : "g:" + String(e.group || "").trim().toLowerCase();
  }
  function yo(e) {
    var t;
    return !!((t = K().hideMeta) != null && t[Oa(e)]);
  }
  function ks() {
    const e = /* @__PURE__ */ new Map(), t = (n, i, a) => {
      if (!n) return;
      Array.isArray(n) && (n = { name: n[1], group: n[2], kind: "work" });
      const r = Oa(n);
      let s = e.get(r);
      s || (s = { key: r, label: r === "rest" ? "Rest" : r === "video" ? "Video" : String(n.group || "").trim() || "No type", kinds: /* @__PURE__ */ new Set(), moves: /* @__PURE__ */ new Set(), count: 0 }, e.set(r, s)), s.kinds.add(r === "rest" ? "Rest" : r === "video" ? "Video" : i), s.moves.add(a), s.count++;
    };
    return Object.values(_).forEach((n) => {
      const i = n.name || "Move";
      (n.warmup || (n.customSequence ? [] : Tt)).forEach((a) => t(a, "Warm-up", i)), (n.customSequence ? n.sequence || [] : n.strength || []).forEach((a) => t(a, a.presetRole === "warmup" ? "Warm-up" : a.presetRole === "cooldown" ? "Cooldown" : "Movement", i)), (n.cooldown || (n.customSequence ? [] : jn)).forEach((a) => t(a, "Cooldown", i));
    }), [["rest", "Rest"], ["video", "Video"]].forEach(([n, i]) => {
      e.has(n) || e.set(n, { key: n, label: i, kinds: /* @__PURE__ */ new Set([i]), moves: /* @__PURE__ */ new Set(), count: 0 });
    }), [...e.values()].map((n) => ({ ...n, kind: n.kinds.has("Movement") ? "Movement" : [...n.kinds][0], moves: [...n.moves] })).sort((n, i) => _a.indexOf(n.kind) - _a.indexOf(i.kind) || n.label.localeCompare(i.label));
  }
  let ko = "all";
  function So() {
    const e = o("metaSearch").value.trim().toLowerCase();
    return ks().filter((t) => (ko === "all" || t.kind === ko) && (!e || t.label.toLowerCase().includes(e) || t.moves.some((n) => n.toLowerCase().includes(e))));
  }
  function bi() {
    const e = o("metaTableBody");
    if (!e) return;
    const t = K().hideMeta || {}, n = So();
    e.innerHTML = n.length ? "" : '<tr class="metaEmpty"><td colspan="4">No types match</td></tr>', n.forEach((a) => {
      const r = !t[a.key], s = a.count ? (a.moves.length > 2 ? a.moves.slice(0, 2).join(", ") + " + " + (a.moves.length - 2) + " more" : a.moves.join(", ")) + " · " + a.count + " step" + (a.count === 1 ? "" : "s") : "Not used yet", l = document.createElement("tr");
      l.className = r ? "" : "off", l.innerHTML = '<td><div class="metaType">' + D(a.label) + '</div><div class="metaSub">' + D(a.kind + " · " + s) + '</div></td><td class="metaKindCol">' + D(a.kind) + '</td><td class="metaUsedCol">' + D(s) + '</td><td class="metaSwitchCol"><button class="switch' + (r ? " on" : "") + '" type="button" role="switch" aria-checked="' + r + '" aria-label="Second line for ' + D(a.label) + ' on phones"></button></td>', l.querySelector(".switch").addEventListener("click", () => Co([a.key], r)), e.appendChild(l);
    });
    const i = n.filter((a) => t[a.key]).length;
    o("metaCount").textContent = n.length ? n.length + " type" + (n.length === 1 ? "" : "s") + (i ? " · " + i + " hidden on phones" : "") : "";
  }
  function Co(e, t) {
    const n = { ...K().hideMeta || {} };
    e.forEach((i) => {
      t ? n[i] = !0 : delete n[i];
    }), Pe("hideMeta", n), bi(), Gi(), Bt();
  }
  o("metaSearch").addEventListener("input", bi), o("metaKinds").querySelectorAll(".kindChip").forEach((e) => e.addEventListener("click", () => {
    ko = e.dataset.kind, o("metaKinds").querySelectorAll(".kindChip").forEach((t) => t.classList.toggle("active", t === e)), bi();
  })), o("metaHideAll").addEventListener("click", () => Co(So().map((e) => e.key), !0)), o("metaShowAll").addEventListener("click", () => Co(So().map((e) => e.key), !1));
  const yt = { feel: !0, steps: !0, mood: !0, energyLevel: !0, weather: !0, ...K().toggles || {} };
  function Ga() {
    d.querySelectorAll("[data-toggle]").forEach((n) => n.classList.toggle("on", yt[n.dataset.toggle] !== !1)), d.querySelector(".feelSection").hidden = !0, [["steps", "stepsRow"], ["mood", "moodRow"], ["energyLevel", "energyLevelRow"]].forEach(([n, i]) => {
      o(i).hidden = yt[n] === !1;
    });
    const e = ["steps", "mood", "energyLevel"].some((n) => yt[n] !== !1);
    d.querySelector(".activityCard").hidden = !e, o("weatherCard").hidden = yt.weather === !1;
    const t = d.querySelector("#homeView .grid");
    t.classList.toggle("noActivity", !e), t.classList.toggle("noWeather", yt.weather === !1);
  }
  d.querySelectorAll("[data-toggle]").forEach((e) => e.addEventListener("click", () => {
    yt[e.dataset.toggle] = yt[e.dataset.toggle] === !1, Ga(), Pe("toggles", { ...yt });
  })), Ga();
  function Ss() {
    xo.classList.toggle("on", at), wo.classList.toggle("on", Nt), dn.value = Math.round(Ut * 100), o("trailStrengthValue").textContent = dn.value + "%", cn.value = Kt, o("trailLifeValue").textContent = cn.value + " ms";
  }
  K().trailEnabled !== void 0 && (at = K().trailEnabled), K().rippleEnabled !== void 0 && (Nt = K().rippleEnabled), K().trailStrength !== void 0 && (Ut = K().trailStrength), K().trailMaxAge !== void 0 && (Kt = K().trailMaxAge), Ss(), xo.addEventListener("click", () => {
    at = !at, xo.classList.toggle("on", at), at || (Hn = []), Pe("trailEnabled", at);
  }), wo.addEventListener("click", () => {
    Nt = !Nt, wo.classList.toggle("on", Nt), Pe("rippleEnabled", Nt);
  }), dn.addEventListener("input", () => {
    Ut = Number(dn.value) / 100, o("trailStrengthValue").textContent = dn.value + "%";
  }), dn.addEventListener("change", () => Pe("trailStrength", Ut)), cn.addEventListener("input", () => {
    Kt = Number(cn.value), o("trailLifeValue").textContent = cn.value + " ms";
  }), cn.addEventListener("change", () => Pe("trailMaxAge", Kt)), si.addEventListener("change", () => Pe("upcomingCount", _t));
  function Va(e) {
    d.querySelectorAll(".themeBtn").forEach((n) => n.classList.toggle("active", n.dataset.theme === e));
    const t = e === "light";
    o("app").classList.toggle("light", t), g.setLight(t), yi(d);
  }
  Va(K().theme || "dark"), d.querySelectorAll(".themeBtn").forEach((e) => e.addEventListener("click", () => {
    Va(e.dataset.theme), Pe("theme", e.dataset.theme);
  }));
  const we = { steps: null, weather: null, ...K().entities || {} };
  let ye = null, To = {};
  function Cs(e) {
    const t = Object.values(e).filter((l) => l.entity_id.startsWith("sensor.") || l.entity_id.startsWith("input_number.")), n = (l) => l.attributes.friendly_name || l.entity_id, i = t.filter((l) => /step/i.test(l.entity_id) || /step/i.test(n(l)) || ["steps", "step"].includes(String(l.attributes.unit_of_measurement || "").toLowerCase())), a = t.filter((l) => !i.includes(l)), r = (l, h) => n(l).localeCompare(n(h)), s = (l, h) => /health_steps/.test(h.entity_id) - /health_steps/.test(l.entity_id) || r(l, h);
    return { suggested: i.sort(s), rest: a.sort(r), label: n };
  }
  function Wa(e) {
    const t = o("stepsEntity");
    if (!t || t.matches(":focus")) return;
    const { suggested: n, rest: i, label: a } = Cs(e), r = (h) => '<option value="' + D(h.entity_id) + '">' + D(a(h)) + "</option>";
    t.innerHTML = '<option value="">Not connected</option>' + (n.length ? '<optgroup label="Suggested">' + n.map(r).join("") + "</optgroup>" : "") + (i.length ? '<optgroup label="All sensors">' + i.map(r).join("") + "</optgroup>" : ""), t.value = we.steps || "";
    const s = o("stepsStatus"), l = we.steps && e[we.steps];
    s.textContent = l ? "Connected · " + a(l) : s.dataset.empty;
  }
  o("stepsEntity").addEventListener("change", () => {
    we.steps = o("stepsEntity").value || null, Pe("entities", { ...we }), To = {}, Ka(), ye && (Wa(ye), Ya(ye));
  });
  function Ts(e, t = 0) {
    return new Intl.NumberFormat(void 0, { maximumFractionDigits: t }).format(e);
  }
  function ja() {
    const e = we.steps && (ye == null ? void 0 : ye[we.steps]), t = Number(e == null ? void 0 : e.state);
    return Number.isFinite(t) ? t : null;
  }
  function Ya(e) {
    var i;
    const t = we.steps, n = t ? Number((i = e[t]) == null ? void 0 : i.state) : NaN;
    o("stepsMeta").textContent = t ? Number.isFinite(n) ? Ts(n) : "—" : "Set up in Settings";
  }
  let Ua = 0;
  async function Ka() {
    const e = we.steps;
    if (!e || !g.ws) return;
    Ua = Date.now();
    const t = /* @__PURE__ */ new Date(), n = new Date(t.getFullYear(), t.getMonth(), t.getDate() - 30);
    try {
      const i = await g.ws({ type: "recorder/statistics_during_period", start_time: n.toISOString(), end_time: t.toISOString(), statistic_ids: [e], period: "day", types: ["max"] }), a = (i == null ? void 0 : i[e]) || [], r = {};
      if (a.forEach((s) => {
        Number.isFinite(s.max) && (r[xe(new Date(s.start))] = s.max);
      }), !Object.keys(r).length) {
        const s = await g.ws({ type: "history/history_during_period", start_time: n.toISOString(), end_time: t.toISOString(), entity_ids: [e], minimal_response: !0, no_attributes: !0, significant_changes_only: !1 });
        ((s == null ? void 0 : s[e]) || []).forEach((l) => {
          const h = Number(l.s ?? l.state), v = l.lu ? l.lu * 1e3 : Date.parse(l.last_updated || l.last_changed);
          if (!Number.isFinite(h) || !v) return;
          const c = xe(new Date(v));
          r[c] = Math.max(r[c] || 0, h);
        });
      }
      To = r, lt();
    } catch {
    }
  }
  function It() {
    lt();
  }
  It(), setInterval(() => {
    It(), Rn(), Rt();
  }, 10 * 60 * 1e3);
  function Za(e) {
    const t = {}, n = {};
    W.history.forEach((s) => {
      const l = xe(new Date(s.start));
      t[l] = (t[l] || 0) + (s.seconds || 0) / 60, n[l] = (n[l] || 0) + 1;
    });
    const i = /* @__PURE__ */ new Date(), a = xe(i), r = [];
    for (let s = e - 1; s >= 0; s--) {
      const l = new Date(i.getFullYear(), i.getMonth(), i.getDate() - s), h = xe(l), v = W.checkins.filter((m) => m.date === h), c = (m) => {
        const S = v.map((q) => q[m]).filter(Boolean);
        return S.length ? S.reduce((q, x) => q + x, 0) / S.length : null;
      };
      r.push({
        key: h,
        date: l,
        minutes: Math.round(t[h] || 0),
        moves: n[h] || 0,
        steps: h === a && ja() != null ? ja() : To[h] ?? null,
        mood: c("mood"),
        energy: c("energy")
      });
    }
    return r;
  }
  function Ms(e) {
    let t = e.length - 1;
    e[t] && !e[t].minutes && t--;
    let n = 0;
    for (; t >= 0 && e[t].minutes > 0; )
      n++, t--;
    return n;
  }
  function lt() {
    const e = o("insightCard");
    if (!e) return;
    const t = Za(30), n = Ms(t), i = t.reduce((v, c) => v + c.minutes, 0), a = /* @__PURE__ */ new Date(), r = xe(a), s = xe(new Date(a.getFullYear(), a.getMonth(), a.getDate() - (a.getDay() + 6) % 7)), l = t.filter((v) => v.key >= s && v.key <= r).reduce((v, c) => v + c.minutes, 0), h = (v, c, m) => '<div class="activityRow"><div class="activityRowIcon" aria-hidden="true">' + v + '</div><div><div class="activityRowName">' + D(c) + '</div><div class="activityRowMeta">' + D(m) + "</div></div></div>";
    e.innerHTML = '<div class="activityHeader"><div class="activityIcon" aria-hidden="true">' + it("move") + '</div><div class="activityTitle">Movement</div></div><div class="activityRows jointRows">' + h(it("clock"), "This week", l + " min") + h(it("streak"), "Streak", n + " day" + (n === 1 ? "" : "s")) + h(it("calendar"), "30 days", i + " min") + "</div>";
  }
  const Ls = {
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
  }, Es = (e) => e === "sunny" ? "clear" : e === "clear-night" ? "night" : e === "partlycloudy" ? "partly" : ["rainy", "pouring", "lightning", "lightning-rainy", "hail"].includes(e) ? "rain" : ["snowy", "snowy-rainy"].includes(e) ? "snow" : "cloudy", pn = { s: "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", sp: "M41.025 27.045C40.5181 24.4943 39.142 22.1985 37.1315 20.5491C35.121 18.8996 32.6005 17.9987 30 18C25.665 18 21.9 20.46 20.025 24.045C17.8191 24.2867 15.7801 25.3344 14.2991 26.987C12.8181 28.6396 11.9994 30.7809 12 33C12 35.3869 12.9482 37.6761 14.636 39.364C16.3239 41.0518 18.6131 42 21 42H40.5C41.4849 42 42.4602 41.806 43.3701 41.4291C44.2801 41.0522 45.1069 40.4997 45.8033 39.8033C46.4997 39.1069 47.0522 38.2801 47.4291 37.3701C47.806 36.4602 48 35.4849 48 34.5C48 30.54 44.925 27.33 41.025 27.045Z", lp: "M70.8016 48.008C69.9751 43.8493 67.7316 40.1062 64.4536 37.4168C61.1755 34.7275 57.0661 33.2587 52.8261 33.2607C45.7581 33.2607 39.6196 37.2716 36.5625 43.1167C32.9659 43.5108 29.6414 45.219 27.2267 47.9135C24.8121 50.608 23.4772 54.0991 23.4783 57.7173C23.4783 61.609 25.0243 65.3414 27.7761 68.0933C30.528 70.8452 34.2604 72.3912 38.1522 72.3912H69.9456C71.5515 72.3912 73.1416 72.0749 74.6252 71.4604C76.1088 70.8458 77.4568 69.9451 78.5923 68.8096C79.7278 67.6741 80.6286 66.3261 81.2431 64.8425C81.8576 63.3589 82.1739 61.7688 82.1739 60.1629C82.1739 53.7064 77.1603 48.4727 70.8016 48.008Z", lc: "M65.3723 37.5398C64.4356 32.8266 61.8929 28.5843 58.1778 25.5364C54.4627 22.4885 49.8054 20.8238 45 20.8262C36.9897 20.8262 30.0326 25.3718 26.5679 31.9963C22.4918 32.4429 18.724 34.3788 15.9874 37.4326C13.2508 40.4864 11.738 44.443 11.7391 48.5436C11.7391 52.9542 13.4913 57.1842 16.6101 60.3031C19.7289 63.4219 23.9589 65.174 28.3696 65.174H64.4022C66.2221 65.174 68.0243 64.8155 69.7057 64.1191C71.3871 63.4226 72.9149 62.4018 74.2018 61.1149C75.4887 59.828 76.5095 58.3002 77.2059 56.6188C77.9024 54.9374 78.2609 53.1353 78.2609 51.3153C78.2609 43.9979 72.5788 38.0664 65.3723 37.5398Z", lr: "M62.9755 28.4431C62.149 24.2844 59.9055 20.5412 56.6275 17.8519C53.3494 15.1626 49.24 13.6937 45 13.6958C37.9321 13.6958 31.7935 17.7067 28.7364 23.5518C25.1398 23.9459 21.8153 25.654 19.4006 28.3485C16.986 31.043 15.6511 34.5342 15.6522 38.1523C15.6522 42.0441 17.1982 45.7765 19.9501 48.5284C22.7019 51.2802 26.4343 52.8262 30.3261 52.8262H62.1196C63.7254 52.8262 65.3155 52.5099 66.7991 51.8954C68.2827 51.2809 69.6307 50.3802 70.7662 49.2447C71.9017 48.1092 72.8025 46.7611 73.417 45.2775C74.0315 43.7939 74.3478 42.2038 74.3478 40.598C74.3478 34.1415 69.3342 28.9078 62.9755 28.4431Z" }, xi = {
    s: ["M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", 6.11, 40],
    l: ["M41.1747 11.959C37.7298 16.5251 35.6875 22.2086 35.6874 28.3691C35.6874 43.4321 47.8979 55.6435 62.9608 55.6436C68.3701 55.6436 73.411 54.0676 77.6512 51.3516C74.6865 66.6826 61.197 78.2607 44.9999 78.2607C26.6305 78.2607 11.7391 63.3694 11.7391 45C11.7392 27.9244 24.6071 13.8562 41.1747 11.959Z", 11.96, 78.26],
    sp: ["M16.6201 5.0791C15.3771 6.72655 14.6397 8.7772 14.6396 11C14.6396 16.4345 19.046 20.8398 24.4805 20.8398C26.4326 20.8398 28.2502 20.2686 29.7803 19.2881C28.7119 24.821 23.8449 29 18 29C11.3726 29 6 23.6274 6 17C6 10.8393 10.6426 5.76349 16.6201 5.0791Z", 5.08, 29],
    lp: ["M32.5175 9.93848C30.0859 13.1616 28.6435 17.1729 28.6434 21.5215C28.6434 32.1541 37.2628 40.7733 47.8954 40.7734C51.7136 40.7734 55.2724 39.6622 58.2655 37.7451C56.1724 48.5666 46.6506 56.7391 35.2177 56.7393C22.251 56.7393 11.7391 46.2274 11.7391 33.2607C11.7393 21.2073 20.8226 11.2776 32.5175 9.93848Z", 9.94, 56.74]
  };
  let Rs = 0;
  const Mo = (e, t) => '<path class="' + t + '" d="' + e + '"/>', Ve = (e, t, n, i) => {
    const a = n * 0.2687;
    return '<path fill="#fff"' + (i < 1 ? ' opacity="' + i + '"' : "") + ' d="M' + e + " " + (t - n) + "L" + (e + a) + " " + (t - a) + "L" + (e + n) + " " + t + "L" + (e + a) + " " + (t + a) + "L" + e + " " + (t + n) + "L" + (e - a) + " " + (t + a) + "L" + (e - n) + " " + t + "L" + (e - a) + " " + (t - a) + 'Z"/>';
  }, Xa = ([e, t, n], i) => '<path d="' + e + '" fill="url(#' + i + ')"/><defs><linearGradient id="' + i + '" x1="0" y1="' + t + '" x2="0" y2="' + n + '" gradientUnits="userSpaceOnUse"><stop stop-color="#FFF4C7"/><stop offset="1" stop-color="#F2C95E"/></linearGradient></defs>', As = (e, t) => t ? '<circle cx="45" cy="45" r="33.26" fill="url(#' + e + ')"/><defs><linearGradient id="' + e + '" x1="12" y1="8.5" x2="67" y2="73.5" gradientUnits="userSpaceOnUse"><stop offset=".653" stop-color="#FFE100"/><stop offset="1" stop-color="#F2C159"/></linearGradient></defs>' : '<circle cx="23" cy="23" r="17" fill="url(#' + e + ')"/><defs><linearGradient id="' + e + '" x1="23" y1="6" x2="23" y2="40" gradientUnits="userSpaceOnUse"><stop offset=".606" stop-color="#FFE100"/><stop offset="1" stop-color="#FFAA00"/></linearGradient></defs>', Ns = (e) => (e ? ["29.35", "43.04", "56.74"].map((t) => '<rect class="wxAccent" x="' + t + '" y="60.65" width="5.87" height="15.65" rx="2.93" transform="rotate(12 ' + t + ' 60.65)"/>') : [19, 26, 33].map((t) => '<rect class="wxAccent" width="3.03" height="9.41" rx="1.51" transform="matrix(0.9698 0.244 -0.1768 0.9843 ' + t + ' 38)"/>')).join(""), Bs = (e) => (e ? [[33.67, 67.67], [47.67, 64.67], [61.67, 67.67], [40.67, 77.67], [54.67, 77.67]] : [[21.2, 42.2], [29.2, 40.2], [37.2, 42.2], [25.2, 48.2], [33.2, 48.2]]).map(([t, n]) => '<circle cx="' + t + '" cy="' + n + '" r="' + (e ? 3.67 : 2.2) + '" fill="#fff"/>').join("");
  function Fs(e, t, n, i) {
    return e === "clear" ? t ? Xa(n ? xi.l : xi.s, i) + (n ? Ve(70, 20, 5.83, 1) + Ve(78.33, 41.67, 3.75, 0.8) + Ve(60, 71.67, 3.33, 0.6) : Ve(42, 12, 3.5, 1) + Ve(47, 25, 2.25, 0.8) + Ve(36, 43, 2, 0.6)) : As(i, n) : e === "partly" ? (t ? Xa(n ? xi.lp : xi.sp, i) : n ? '<circle cx="35.22" cy="33.26" r="23.48" fill="#FFE100"/>' : '<circle cx="18" cy="17" r="12" fill="#FFE100"/>') + Mo(n ? pn.lp : pn.sp, t ? "wxCloudLight" : "wxBright") + (t ? n ? Ve(73.33, 16.67, 4.17, 0.9) : Ve(44, 10, 2.5, 0.9) : "") : e === "cloudy" ? Mo(n ? pn.lc : pn.s, t ? "wxCloudLight" : "wxBright") + (t ? n ? Ve(15, 15, 3.75, 0.8) + Ve(76.67, 13.33, 2.92, 0.6) : Ve(9, 9, 2.25, 0.8) + Ve(46, 8, 1.75, 0.6) : "") : Mo(n ? pn.lr : pn.s, "wxCloudLight") + (e === "rain" ? Ns(n) : Bs(n));
  }
  const Is = () => {
    var e;
    return ((e = ye == null ? void 0 : ye["sun.sun"]) == null ? void 0 : e.state) === "below_horizon";
  };
  let wi = K().weatherStyle || "bitmap";
  function Pt(e, t, n, i = wi) {
    let a = Es(e);
    const r = a === "night" || !!n && Is();
    a === "night" && (a = "clear");
    const s = t ? 90 : 54;
    return i !== "smooth" ? '<span class="wxIcon pixels' + (t ? " large" : "") + '" aria-hidden="true"><canvas data-wx="' + js(e, r) + '" data-wx-style="' + i + '" data-wx-size="' + s + '"></canvas></span>' : '<span class="wxIcon ' + a + (r ? " night" : "") + (t ? " large" : "") + '" aria-hidden="true"><svg viewBox="0 0 ' + s + " " + s + '">' + Fs(a, r, t, "wxg" + ++Rs) + "</svg></span>";
  }
  function Ps() {
    const e = o("app"), t = getComputedStyle(e), n = (l) => t.getPropertyValue(l).trim(), i = {};
    [["skyClearDay", "--wx-clear"], ["skyClearNight", "--wx-night"], ["skyCloudyDay", "--wx-cloudy"], ["cloudDay", "--wx-cloud-bright"], ["cloudNight", "--wx-cloudy"], ["rain", "--color-accent-primary"]].forEach(([l, h]) => {
      n(h) && (i[l] = n(h));
    });
    const a = n("--color-text-primary") || "#f1f1f1", r = n("--color-bg-card") || "#222222", s = e.classList.contains("light");
    return { colors: i, ink: s ? a : r, paper: s ? r : a };
  }
  function yi(e) {
    const t = e.querySelectorAll("canvas[data-wx]");
    if (!t.length) return;
    const n = Ps();
    t.forEach((i) => {
      var r;
      const a = Qs(Us(i.dataset.wx, n.colors), { size: Number(i.dataset.wxSize) || 54, px: 2, oneBit: i.dataset.wxStyle === "onebit", colors: n.colors, ink: n.ink, paper: n.paper });
      i.width = a.w, i.height = a.h, (r = i.getContext("2d")) == null || r.putImageData(new ImageData(a.data, a.w, a.h), 0, 0);
    });
  }
  let Lo = [], ki, Si = null, Eo = !1;
  function Hs(e) {
    return Object.values(e).filter((t) => t.entity_id.startsWith("weather.")).sort((t, n) => (t.attributes.friendly_name || t.entity_id).localeCompare(n.attributes.friendly_name || n.entity_id));
  }
  function Ja(e) {
    const t = o("weatherEntity");
    if (!t || t.matches(":focus")) return;
    const n = Hs(e);
    t.innerHTML = '<option value="">Not connected</option>' + n.map((a) => '<option value="' + D(a.entity_id) + '">' + D(a.attributes.friendly_name || a.entity_id) + "</option>").join(""), t.value = we.weather || "";
    const i = we.weather && e[we.weather];
    o("weatherStatus").textContent = i ? "Connected · " + (i.attributes.friendly_name || i.entity_id) : o("weatherStatus").dataset.empty;
  }
  function $a() {
    const e = we.weather || null;
    if (e === ki) return;
    ki = e, Lo = [], Eo = !1;
    const t = Si;
    if (Si = null, t == null || t.then((n) => typeof n == "function" && n()).catch(() => {
    }), !e || !g.subscribe) {
      Ht();
      return;
    }
    Si = g.subscribe({ type: "weather/subscribe_forecast", forecast_type: "daily", entity_id: e }, (n) => {
      ki === e && (Lo = Array.isArray(n == null ? void 0 : n.forecast) ? n.forecast : [], Ht());
    }), Si.catch(() => {
      ki === e && (Eo = !0, Ht());
    }), Ht();
  }
  o("weatherEntity").addEventListener("change", () => {
    we.weather = o("weatherEntity").value || null, Pe("entities", { ...we }), ye && Ja(ye), $a();
  });
  function Ht() {
    const e = o("weatherCard");
    if (!e) return;
    const t = we.weather, n = t && (ye == null ? void 0 : ye[t]);
    if (!n) {
      e.innerHTML = '<div class="activityHeader"><div class="activityTitle">Weather</div></div><div class="activityRows"><div class="activityRow">' + Pt("cloudy") + '<div><div class="activityRowName">Forecast</div><div class="activityRowMeta">' + (t ? "Not available" : "Set up in Settings") + "</div></div></div></div>", yi(e);
      return;
    }
    const i = n.attributes || {}, a = i.temperature_unit || "°", r = (A) => Number.isFinite(Number(A)) ? Math.round(Number(A)) + "°" : "—", s = (i.friendly_name || "").replace(/^forecast\s+/i, "") || "Weather", l = Ls[n.state] || (n.state ? n.state.charAt(0).toUpperCase() + n.state.slice(1) : "—"), h = xe(/* @__PURE__ */ new Date()), v = Lo.slice(0, 7), c = v.find((A) => xe(new Date(A.datetime)) === h) || null, m = v.filter((A) => xe(new Date(A.datetime)) >= h).slice(0, 6), S = m.find((A) => xe(new Date(A.datetime)) > h), q = c ? "H " + r(c.temperature) + "&ensp; L " + r(c.templow) : "", x = (A) => new Intl.DateTimeFormat(void 0, { weekday: "short" }).format(new Date(A.datetime)), f = Number.isFinite(Number(i.temperature)) ? Math.round(Number(i.temperature)) : "—", b = (A, ue, T) => '<div class="activityRow">' + A + '<div><div class="activityRowName">' + D(ue) + '</div><div class="activityRowMeta">' + T + "</div></div></div>";
    e.innerHTML = '<div class="wxWide"><div class="wxNow"><div class="wxCurrent">' + Pt(n.state, !0, !0) + '<div class="wxTempBlock"><div class="wxTemp"><span class="wxDeg">' + D(String(f)) + '</span><span class="wxUnit">' + D(a) + '</span></div><div class="wxPlace">' + D(s) + '</div></div></div><div class="wxCondition"><div class="wxCondName">' + D(l) + "</div>" + (q ? '<div class="wxRange">' + q + "</div>" : "") + "</div></div>" + (m.length ? '<div class="wxDays">' + m.map((A) => '<div class="wxDay"><div class="wxDayName">' + D(x(A)) + "</div>" + Pt(A.condition) + '<div class="wxTemps"><div class="wxHigh">' + r(A.temperature) + '</div><div class="wxLow">' + r(A.templow) + "</div></div></div>").join("") + "</div>" : '<div class="wxNoDays">' + (Eo ? "This weather service has no daily forecast" : "Loading the forecast…") + "</div>") + '</div><div class="wxCompact"><div class="activityRows">' + b(Pt(n.state, !1, !0), "Now · " + s, D(f + "° " + l)) + (c ? b(Pt(c.condition), "Today", r(c.temperature) + " / " + r(c.templow)) : "") + (S ? b(Pt(S.condition), "Tomorrow", r(S.temperature) + " / " + r(S.templow)) : "") + "</div></div>", yi(e);
  }
  Ht();
  const Ci = o("wxStyleChoice");
  function Ds() {
    Ci.querySelectorAll(".wxStyleBtn").forEach((e) => {
      e.setAttribute("aria-pressed", String(e.dataset.wxStyle === wi)), e.querySelector(".wxStylePreview").innerHTML = ["sunny", "partlycloudy", "rainy", "clear-night"].map((t) => Pt(t, !1, !1, e.dataset.wxStyle)).join("");
    }), yi(Ci);
  }
  Ci.querySelectorAll(".wxStyleBtn").forEach((e) => e.addEventListener("click", () => {
    wi = e.dataset.wxStyle, Pe("weatherStyle", wi), Ci.querySelectorAll(".wxStyleBtn").forEach((t) => t.setAttribute("aria-pressed", String(t === e))), Ht();
  })), Ds();
  const Qa = o("tvNav");
  g.fullscreenSupported || (Qa.hidden = !0), Qa.addEventListener("click", () => g.toggleFullscreen()), d.addEventListener("keydown", (e) => {
    !ut.workout.classList.contains("active") || Fn.classList.contains("active") || e.target.closest("input,select,textarea,.holdEnd") || (e.key === "MediaPlayPause" || e.key === " " && !e.target.closest("button") ? (e.preventDefault(), co.click()) : e.key === "MediaTrackNext" ? (e.preventDefault(), o("skipExercise").click()) : e.key === "MediaTrackPrevious" && (e.preventDefault(), o("restartSegment").click()));
  }), d.querySelectorAll("[data-rounds-step]").forEach((e) => e.addEventListener("click", () => {
    const t = Math.max(1, Math.min(10, (Number(k.value) || 1) + Number(e.dataset.roundsStep)));
    String(t) !== k.value && (k.value = t, k.dispatchEvent(new Event("input", { bubbles: !0 })));
  })), [Q, Y, p, k].forEach((e) => e.addEventListener("input", () => {
    const t = _[G];
    t && (t.total = Number(Q.value), t.work = Number(Y.value), t.rest = Number(p.value)), ee();
  })), Wn.addEventListener("click", go), qt.addEventListener("click", () => tt("settings")), o("settingsBack").addEventListener("click", go), co.addEventListener("click", () => st(!Ye)), Ze(G), ri(), Rn(), lt(), o("healthHelpOpen").addEventListener("click", () => d.querySelector(".tab[data-pane=helpPane]").click()), _n(o("resetStats"), o("resetStatsFill"), 1500, () => {
    W.history = [], W.checkins = [], En = "";
    try {
      localStorage.removeItem("move-assistant-dismissed");
    } catch {
    }
    Ke(), It(), Rn(), ri(), lt(), Rt(), re("Stats reset");
  });
  const Ro = o("morningTime"), Ao = o("eveningTime"), No = o("checkinAutoOpen");
  Ro.value = gt().morning, Ao.value = gt().evening, No.classList.toggle("on", K().checkinAutoOpen !== !1), [["morningTime", Ro], ["eveningTime", Ao]].forEach(([e, t]) => t.addEventListener("change", () => {
    t.value && (Pe(e, t.value), Rt());
  })), No.addEventListener("click", () => {
    const e = K().checkinAutoOpen === !1;
    No.classList.toggle("on", e), Pe("checkinAutoOpen", e);
  }), setTimeout(Qi, 800);
  const er = o("checkinNotify"), Ti = o("checkinNotifyTarget"), tr = o("checkinNotifyStatus"), zs = tr.textContent;
  function nr() {
    const e = g.notifyServices(), t = e.filter((a) => a.startsWith("mobile_app_")), n = t.length ? t : e, i = (a) => a.replace(/^mobile_app_/, "").replace(/_/g, " ");
    Ti.innerHTML = n.map((a) => '<option value="' + D(a) + '">' + D(i(a)) + "</option>").join(""), !K().notifyTarget && n[0] && (K().notifyTarget = n[0]), Ti.value = K().notifyTarget || "";
  }
  function Mi() {
    const e = !!K().notifyOn;
    er.classList.toggle("on", e), o("checkinNotifyTargetRow").hidden = !e;
    const t = gt();
    tr.textContent = e ? "Sends at " + t.morning + " and " + t.evening : zs;
  }
  async function Bo() {
    const e = !!K().notifyOn;
    try {
      return await g.setReminderAutomation(e ? { target: K().notifyTarget, times: gt() } : null), !0;
    } catch {
      return re("Couldn't update the reminder in Home Assistant"), !1;
    }
  }
  er.addEventListener("click", async () => {
    const e = !K().notifyOn;
    if (e && (nr(), !K().notifyTarget)) {
      re("Install the Companion app on your phone first");
      return;
    }
    K().notifyOn = e, Mi(), await Bo() ? (Ke(), re(e ? "Check-in notifications on" : "Check-in notifications off")) : (K().notifyOn = !e, Mi());
  }), Ti.addEventListener("change", () => {
    Pe("notifyTarget", Ti.value), K().notifyOn && Bo();
  }), [Ro, Ao].forEach((e) => e.addEventListener("change", () => {
    Mi(), K().notifyOn && Bo();
  })), nr(), Mi();
  let Fo = null;
  function qs() {
    Fo || (Fo = setTimeout(() => {
      Fo = null, lt();
    }, 3e4));
  }
  return {
    updateStates(e) {
      var n, i;
      const t = !ye || ye[we.weather] !== e[we.weather] || ((n = ye["sun.sun"]) == null ? void 0 : n.state) !== ((i = e["sun.sun"]) == null ? void 0 : i.state);
      ye = e, Wa(e), Ja(e), Ya(e), $a(), t && Ht(), Date.now() - Ua > 60 * 60 * 1e3 && Ka(), qs();
    },
    applyRemoteData(e) {
      if (e && (Array.isArray(e.history) && (W.history = e.history, It()), Array.isArray(e.history) && lt(), Array.isArray(e.checkins) && (W.checkins = e.checkins.map(Oo), Rt(), ri(), Rn(), It(), lt()), e.profiles && !Le.classList.contains("open") && !$e)) {
        const t = _o(e);
        Object.keys(_).forEach((n) => delete _[n]), Object.assign(_, t.profiles), W.order = t.order, _[G] || (G = W.order[0]), Vo(), Ze(G);
      }
    },
    suspend() {
      z = !1;
    },
    resume() {
      z || (z = !0, Zt || (Zt = requestAnimationFrame(ui)), Jt || (Jt = requestAnimationFrame(mi)), On(d.querySelector(".tab.active"), !1));
    }
  };
}
const tl = "0.39.0", Po = "move_assistant", nl = "move_assistant", hr = "move_assistant_checkin_reminder";
function il() {
  if (document.getElementById("move-assistant-inter")) return;
  const d = document.createElement("link");
  d.id = "move-assistant-inter", d.rel = "stylesheet", d.href = "https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600&family=Inter:ital,wght@0,400;0,500;0,600;0,700;0,800;1,500&display=swap", document.head.appendChild(d);
}
class ol extends HTMLElement {
  setConfig(g) {
    this._config = g || {};
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
  set hass(g) {
    const o = !this._hass;
    if (this._hass = g, o) {
      this._init();
      return;
    }
    this._app && g.states !== this._lastStates && (this._lastStates = g.states, this._app.updateStates(g.states));
  }
  connectedCallback() {
    var g;
    (g = this._app) == null || g.resume();
  }
  disconnectedCallback() {
    var g;
    (g = this._app) == null || g.suspend();
  }
  async _init() {
    il();
    const g = this.shadowRoot || this.attachShadow({ mode: "open" });
    g.innerHTML = `<style>${Gs}</style>${Vs}`;
    const o = g.getElementById("app");
    o.style.opacity = "0";
    let H = null;
    try {
      const E = await this._hass.callWS({
        type: "frontend/get_user_data",
        key: Po
      });
      H = (E == null ? void 0 : E.value) ?? null;
    } catch {
    }
    this._lastSaved = JSON.stringify(H), this._app = el(g, {
      data: H,
      save: (E) => this._save(E),
      fire: (E, z) => this._fire(E, z),
      ws: (E) => this._hass.callWS(E),
      subscribe: (E, z) => {
        var le, Ne;
        return (Ne = (le = this._hass) == null ? void 0 : le.connection) != null && Ne.subscribeMessage ? this._hass.connection.subscribeMessage(z, E) : Promise.reject(new Error("no connection"));
      },
      notifyServices: () => {
        var E, z;
        return Object.keys(((z = (E = this._hass) == null ? void 0 : E.services) == null ? void 0 : z.notify) || {}).sort();
      },
      setReminderAutomation: (E) => this._setReminderAutomation(E),
      setLight: (E) => this.classList.toggle("lightBody", E),
      fullscreenSupported: !!(this.requestFullscreen || this.webkitRequestFullscreen),
      toggleFullscreen: () => this._toggleFullscreen()
    }), this._lastStates = this._hass.states, this._app.updateStates(this._hass.states), this.isConnected || this._app.suspend(), o.style.transition = "opacity .2s ease", o.style.opacity = "", this._subscribe();
  }
  _subscribe() {
    var o;
    const g = (o = this._hass) == null ? void 0 : o.connection;
    g != null && g.subscribeMessage && g.subscribeMessage(
      (H) => {
        var z;
        const E = JSON.stringify((H == null ? void 0 : H.value) ?? null);
        E === this._lastSaved || E === this._pendingJson || (this._lastSaved = E, (z = this._app) == null || z.applyRemoteData(H.value));
      },
      { type: "frontend/subscribe_user_data", key: Po }
    ).catch(() => {
    });
  }
  _save(g) {
    this._pendingJson = JSON.stringify(g), clearTimeout(this._saveTimer), this._saveTimer = setTimeout(async () => {
      const o = this._pendingJson;
      try {
        await this._hass.callWS({
          type: "frontend/set_user_data",
          key: Po,
          value: JSON.parse(o)
        }), this._lastSaved = o;
      } catch {
        this._toast("Couldn't save to Home Assistant");
      }
    }, 400);
  }
  _fire(g, o = {}) {
    var H, E;
    ((H = this._config) == null ? void 0 : H.events) !== !1 && ((E = this._hass) == null || E.callWS({
      type: "fire_event",
      event_type: nl,
      event_data: { action: g, ...o }
    }).catch(() => {
    }));
  }
  // Keeps one Home Assistant automation in sync with the check-in times.
  // Passing null removes it.
  async _setReminderAutomation(g) {
    const o = `config/automation/config/${hr}`;
    if (!g) {
      try {
        await this._hass.callApi("DELETE", o);
      } catch (z) {
        if ((z == null ? void 0 : z.status_code) !== 404 && (z == null ? void 0 : z.status) !== 404) throw z;
      }
      return;
    }
    const H = (z) => `${z}:00`, E = window.location.pathname;
    await this._hass.callApi("POST", o, {
      id: hr,
      alias: "Move Assistant check-in reminder",
      description: "Created by Move Assistant. Change it in Move Assistant → Settings → Check-in.",
      mode: "single",
      triggers: [
        { trigger: "time", at: H(g.times.morning), id: "morning" },
        { trigger: "time", at: H(g.times.evening), id: "evening" }
      ],
      conditions: [],
      actions: [
        {
          action: `notify.${g.target}`,
          data: {
            title: "Move Assistant",
            message: "{{ 'Morning' if trigger.id == 'morning' else 'Evening' }} check-in is ready",
            data: { url: E, clickAction: E }
          }
        }
      ]
    });
  }
  _toggleFullscreen() {
    const g = document;
    if (g.fullscreenElement || g.webkitFullscreenElement) {
      (g.exitFullscreen || g.webkitExitFullscreen).call(g);
      return;
    }
    const o = this.requestFullscreen || this.webkitRequestFullscreen;
    Promise.resolve(o.call(this)).catch(
      () => this._toast("Full screen isn't available here")
    );
  }
  _toast(g) {
    var H;
    const o = (H = this.shadowRoot) == null ? void 0 : H.getElementById("toast");
    o && (o.textContent = g, o.classList.add("show"), setTimeout(() => o.classList.remove("show"), 2600));
  }
}
customElements.get("move-assistant-card") || (customElements.define("move-assistant-card", ol), window.customCards = window.customCards || [], window.customCards.push({
  type: "move-assistant-card",
  name: "Move Assistant",
  description: "Guided movement timer with your Home Assistant activity data.",
  preview: !1
}), console.info(`%c MOVE ASSISTANT %c ${tl} `, "background:#D0FF00;color:#090909;font-weight:700", ""));
