const Bp = ':host{display:flex;flex-direction:column;min-height:calc(100dvh - var(--header-height,0px));position:relative;background:#050505;color-scheme:dark;--color-bg-ground:#090909;--color-bg-card:#222222;--color-bg-tile:#2b2b2b;--color-fill-bright:#f1f1f1;--color-text-primary:#d9d9d9;--color-text-muted:#969696;--color-text-on-bright:#090909;--color-line:rgba(255,255,255,.14);--color-border-focus:#03a9f4;--color-accent-primary:#03a9f4;--color-accent-secondary:#d0ff00;--color-text-accent:#d0ff00;--color-text-on-accent:#090909;--color-bg-resting:#1f7a4d;--color-bg-danger:#311313;--color-bg-danger-fill:#d53d3d;--color-border-danger:#8c2e2e;--color-text-danger:#ff7777;--color-text-on-danger:#ffffff;--color-state-hover:rgba(255,255,255,.08);--color-bg-chip:#090909;--color-fill-selected:#f1f1f1;--color-text-on-selected:#090909;--color-bg-segment-selected:#2b2b2b;--wx-clear:#03a9f4;--wx-cloudy:#d8d6d6;--wx-night:#1d2b4f;--wx-cloud-bright:#f1f1f1;--color-state-pressed:rgba(255,255,255,.14);--color-state-hover-on-bright:rgba(0,0,0,.06);--color-state-pressed-on-bright:rgba(0,0,0,.12);--scrim:rgba(0,0,0,.66);--lift:rgba(0,0,0,.5)}*{box-sizing:border-box}#app{color:var(--text);font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif;transition:background .25s ease,color .25s ease;-webkit-font-smoothing:antialiased}[hidden]{display:none!important}button,input{font:inherit}#app{flex:1;display:flex;flex-direction:column;width:100%;margin:0;padding:0;background:var(--bg);text-align:left}#app{--bg:var(--color-bg-ground);--page:var(--color-bg-ground);--card:var(--color-bg-card);--card2:var(--color-bg-card);--modal:var(--color-bg-card);--timer:var(--color-bg-ground);--tile:var(--color-bg-tile);--tile-2:var(--color-bg-tile);--row:var(--color-bg-tile);--row-rest:var(--color-bg-tile);--raised:var(--color-bg-tile);--chip:var(--color-bg-tile);--segment:var(--color-bg-tile);--seg-on:var(--color-bg-segment-selected);--scroll-thumb:var(--color-bg-tile);--control:var(--color-bg-ground);--control-2:var(--color-bg-ground);--sunken:var(--color-bg-ground);--input:var(--color-bg-ground);--track:var(--color-bg-ground);--icon-bg:var(--color-bg-chip);--seg-bg:var(--color-bg-ground);--switch-off:var(--color-bg-ground);--stage:var(--color-bg-ground);--text:var(--color-text-primary);--soft:var(--color-text-primary);--muted:var(--color-text-muted);--accent-text:var(--color-text-accent);--border-hover:var(--color-text-muted);--knob-off:var(--color-text-muted);--today-ring:var(--color-text-muted);--line:var(--color-line);--lineb:var(--color-line);--field-line:var(--color-line);--divider:var(--color-line);--bright:var(--color-fill-bright);--slider-fill:var(--color-fill-bright);--segment-fill:var(--color-fill-bright);--timer-fill:var(--color-fill-bright);--on-bright:var(--color-text-on-bright);--hover:var(--color-state-hover);--wash-2:var(--color-state-hover);--danger:var(--color-text-danger);--danger-bg:var(--color-bg-danger);--danger-line:var(--color-border-danger);--danger-fill:var(--color-bg-danger-fill);--on-danger-fill:var(--color-text-on-danger);--primary:var(--color-accent-primary);--secondary:var(--color-accent-secondary)}.shell{flex:1;display:flex;flex-direction:column;position:relative;width:100%;background:var(--page);border-radius:0;overflow:visible;transition:background .28s ease}#app.resting .shell{background:var(--color-bg-resting)}#app.paused .shell{background:var(--primary)}#app.light.paused .shell{background:color-mix(in srgb,var(--primary) 55%,var(--color-bg-card))}#app.light{--color-bg-ground:#eeebe8;--color-bg-card:#fbf9f6;--color-bg-tile:#f3efea;--color-fill-bright:#26221e;--color-text-primary:#26221e;--color-text-muted:#6a625a;--color-text-on-bright:#fbf9f6;--color-text-on-accent:#26221e;--color-line:rgba(38,34,30,.12);--color-text-accent:#26221e;--color-accent-secondary:#03a9f4;--color-bg-resting:#7dbb98;--color-bg-danger:#f5dede;--color-border-danger:#e3a0a0;--color-text-danger:#b42a2a;--color-state-hover:rgba(38,34,30,.06);--color-state-pressed:rgba(38,34,30,.12);--color-bg-chip:#fbf9f6;--color-fill-selected:#26221e;--color-text-on-selected:#fbf9f6;--color-bg-segment-selected:#fbf9f6;--color-accent-primary:#0288d1;--color-border-focus:#0288d1;--scrim:rgba(38,34,30,.32);--lift:rgba(38,34,30,.16)}:host(.lightBody){background:#eeebe8;color-scheme:light}.view{display:none;width:100%;max-width:1184px;margin:0 auto;padding:22px 22px 76.8px}.view.active{display:block;flex:1 0 auto}.card,.panel,.tile{position:relative;background:var(--card);border-radius:36px;padding:22px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.grid{display:grid;grid-template-columns:repeat(12,minmax(0,1fr));gap:16px}.eyebrow{text-transform:uppercase;color:var(--muted)}.sub{color:var(--muted);margin-top:6.4px}.pill,.primary,.navBtn,.tab,.back,.hideBtn,.addBtn{cursor:pointer}.pill{min-height:0;padding:3.2px 0;border:0;border-radius:0;background:transparent;color:var(--text);text-decoration-line:underline;text-decoration-thickness:.8px;text-underline-offset:3.2px}.tab,.back{border-radius:799.2px;min-height:41.6px;padding:0 16px;background:var(--control);border:.32px solid var(--line);color:var(--text)}.primary{border-radius:799.2px;min-height:41.6px;padding:0 16px;border:0;background:var(--bright);color:var(--on-bright)}.activityCard,.weekly{grid-column:span 6}.activityCard,.weekly{min-height:288px}.sourceTag{display:inline-flex;margin-top:11.2px;padding:4px;border-radius:799.2px;background:var(--chip);color:var(--soft)}.workoutFooter{display:flex;justify-content:space-between;align-items:end;gap:22.4px;flex-wrap:wrap;margin-top:22.4px;width:100%;box-sizing:border-box}.workoutGallery{grid-column:span 12;display:flex;gap:16px;height:288px;overflow:hidden}.workoutPanel{position:relative;height:288px;flex:1 1 72px;min-width:70.4px;background:var(--card);border-radius:28.8px;padding:22.4px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);overflow:hidden;box-sizing:border-box;transition:flex .32s ease;cursor:pointer}.workoutPanel.active{flex:7 1 0;min-width:0;cursor:default}.workoutPanel.addPanel{flex:0 0 73.6px;min-width:73.6px;display:flex;align-items:center;justify-content:center;padding:14.4px}.workoutPanel{--edge-proximity:0;--cursor-angle:45deg;--edge-sensitivity:36;--color-sensitivity:56;--cone-spread:25;--fill-opacity:.18;--glow-color-60:hsl(199deg 97% 68% / 60%);--glow-color-40:hsl(199deg 97% 68% / 40%);--glow-color-30:hsl(199deg 97% 68% / 30%);--glow-color-20:hsl(199deg 97% 68% / 20%);--glow-color-10:hsl(199deg 97% 68% / 10%);--gradient-one:radial-gradient(at 80% 55%,#c084fc 0px,transparent 50%);--gradient-two:radial-gradient(at 69% 34%,#f472b6 0px,transparent 50%);--gradient-three:radial-gradient(at 8% 6%,#38bdf8 0px,transparent 50%);--gradient-four:radial-gradient(at 41% 38%,#c084fc 0px,transparent 50%);--gradient-five:radial-gradient(at 86% 85%,#f472b6 0px,transparent 50%);--gradient-six:radial-gradient(at 82% 18%,#38bdf8 0px,transparent 50%);--gradient-seven:radial-gradient(at 51% 4%,#f472b6 0px,transparent 50%);isolation:isolate}.workoutPanel:before,.workoutPanel:after,.workoutPanel>.edgeLight{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;pointer-events:none;transition:opacity .18s ease-out}.workoutPanel:before{z-index:2;border:.8px solid transparent;background:linear-gradient(var(--card) 0 100%) padding-box,linear-gradient(#fff0 0,#fff0) border-box,var(--gradient-one) border-box,var(--gradient-two) border-box,var(--gradient-three) border-box,var(--gradient-four) border-box,var(--gradient-five) border-box,var(--gradient-six) border-box,var(--gradient-seven) border-box;opacity:clamp(0,calc(.72 * (var(--edge-proximity) - var(--color-sensitivity)) / (100 - var(--color-sensitivity))),.72);-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,black calc(var(--cone-spread) * 1%),transparent calc((var(--cone-spread) + 15) * 1%),transparent calc((100 - var(--cone-spread) - 15) * 1%),black calc((100 - var(--cone-spread)) * 1%));mask-image:conic-gradient(from var(--cursor-angle) at center,black calc(var(--cone-spread) * 1%),transparent calc((var(--cone-spread) + 15) * 1%),transparent calc((100 - var(--cone-spread) - 15) * 1%),black calc((100 - var(--cone-spread)) * 1%))}.workoutPanel:after{z-index:1;border:.8px solid transparent;background:var(--gradient-one) padding-box,var(--gradient-two) padding-box,var(--gradient-three) padding-box,var(--gradient-four) padding-box,var(--gradient-five) padding-box,var(--gradient-six) padding-box,var(--gradient-seven) padding-box;opacity:clamp(0,calc(var(--fill-opacity) * (var(--edge-proximity) - var(--color-sensitivity)) / (100 - var(--color-sensitivity))),.18);mix-blend-mode:soft-light;-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,transparent 5%,black 15%,black 85%,transparent 95%);mask-image:conic-gradient(from var(--cursor-angle) at center,transparent 5%,black 15%,black 85%,transparent 95%)}.workoutPanel>.edgeLight{top:-19.2px;right:-19.2px;bottom:-19.2px;left:-19.2px;z-index:3;opacity:clamp(0,calc(.62 * (var(--edge-proximity) - var(--edge-sensitivity)) / (100 - var(--edge-sensitivity))),.62);mix-blend-mode:plus-lighter;-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,black 2.5%,transparent 10%,transparent 90%,black 97.5%);mask-image:conic-gradient(from var(--cursor-angle) at center,black 2.5%,transparent 10%,transparent 90%,black 97.5%)}.workoutPanel>.edgeLight:before{content:"";position:absolute;top:19.2px;right:19.2px;bottom:19.2px;left:19.2px;border-radius:inherit;box-shadow:inset 0 0 0 .8px var(--glow-color-60),inset 0 0 2.4px 0 var(--glow-color-40),inset 0 0 6.4px 0 var(--glow-color-30),inset 0 0 12.8px 0 var(--glow-color-20),0 0 2.4px 0 var(--glow-color-40),0 0 6.4px 0 var(--glow-color-30),0 0 12.8px 0 var(--glow-color-20),0 0 22.4px 1.6px var(--glow-color-10)}.workoutPanel:not(.borderGlowActive):before,.workoutPanel:not(.borderGlowActive):after,.workoutPanel:not(.borderGlowActive)>.edgeLight{opacity:0;transition:opacity .35s ease-out}#app.light .workoutPanel{--glow-color-40:hsl(199deg 97% 48% / 40%);--glow-color-30:hsl(199deg 97% 48% / 30%);--glow-color-20:hsl(199deg 97% 48% / 20%);--glow-color-10:hsl(199deg 97% 48% / 10%)}.workoutPanel:not(.active):not(.addPanel) .panelExpanded{opacity:0;filter:blur(8px);pointer-events:none}.workoutPanel:not(.active):not(.addPanel) .panelCollapsed{opacity:1;filter:blur(0)}.workoutPanel.active .panelExpanded{opacity:1;filter:blur(0);pointer-events:auto}.workoutPanel.active .panelCollapsed{opacity:0;filter:blur(6.4px);pointer-events:none}.panelExpanded{position:relative;z-index:4;width:100%;height:100%;min-width:0;box-sizing:border-box;display:flex;flex-direction:column;justify-content:space-between;transition:opacity .22s ease,filter .22s ease}.panelCollapsed{position:absolute;top:0;right:0;bottom:0;left:0;z-index:4;display:flex;align-items:center;justify-content:center;opacity:0;filter:blur(6.4px);transition:opacity .22s ease,filter .22s ease}.panelCollapsedText{writing-mode:vertical-rl;transform:rotate(180deg);white-space:nowrap}.workoutPanelTop{display:flex;justify-content:space-between;align-items:flex-start;gap:22.4px;width:100%;min-width:0;box-sizing:border-box}.workoutPanelActions{display:flex;gap:22.4px;flex-wrap:wrap;align-items:center;justify-content:flex-end;margin-left:auto}.startWorkoutBtn{background:var(--primary)!important;color:var(--color-text-on-accent)!important}.startWorkoutBtn:hover{filter:brightness(1.04)}.addPanelPlus{position:relative;z-index:4;font-size:27.2px;line-height:1}.addPanelLabel{position:absolute;z-index:4;bottom:16px;writing-mode:vertical-rl;transform:rotate(180deg);color:var(--muted)}@media (max-height:820px) and (min-width:621px){.modalStatic{padding:17.6px 22.4px}.timeTile{min-height:124.8px}}@media (max-width:900px){.weekCopy{white-space:normal}.workoutGallery{overflow-x:auto;scroll-snap-type:x mandatory;padding-bottom:3.2px}.workoutPanel,.workoutPanel.active{height:288px;flex:0 0 min(68.8vw,544px);min-width:min(68.8vw,544px);scroll-snap-align:start}.workoutPanel.addPanel{flex-basis:80px;min-width:80px}.panelCollapsed{display:none}}.moveActions{display:flex;gap:22.4px;flex-wrap:wrap}@keyframes feelingWarp{0%{transform:scale(1.03) skew(-2deg) translate(-1.5%);filter:saturate(1.02) blur(.8px)}50%{transform:scale(1.12) skew(1deg) translate(1%);filter:saturate(1.22) blur(1.5px)}to{transform:scale(1.06) skew(3deg) translate(-.5%);filter:saturate(1.1) blur(.6px)}}@keyframes feelingScan{0%{background-position:0 0,-80% 0}to{background-position:0 8px,180% 0}}.tempoExperiment{margin-top:14.4px;padding-top:16px;border-top:.32px solid var(--line)}.tempoEstimate{white-space:nowrap}.tempoQuad{position:relative;width:min(288px,100%);aspect-ratio:1/1;border-radius:28.8px;background:#ffffff06;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);overflow:hidden;touch-action:none;cursor:crosshair}.tempoCross{position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none;background:linear-gradient(to right,transparent calc(50% - .4px),rgba(255,255,255,.12) 50%,transparent calc(50% + .4px)),linear-gradient(to bottom,transparent calc(50% - .4px),rgba(255,255,255,.12) 50%,transparent calc(50% + .4px))}.tempoDot{position:absolute;left:50%;top:50%;width:17.6px;height:17.6px;border-radius:50%;background:var(--text);transform:translate(-50%,-50%);pointer-events:none;box-shadow:0 0 0 4.8px #ffffff12}.tempoPole{position:absolute;pointer-events:none;color:var(--muted)}.tempoFast{top:9.6px;left:50%;transform:translate(-50%)}.tempoSlow{bottom:9.6px;left:50%;transform:translate(-50%)}.tempoHard{right:9.6px;top:50%;transform:translateY(-50%)}.tempoLow{left:9.6px;top:50%;transform:translateY(-50%)}.tempoReadout{margin-top:9.6px;color:var(--muted)}.tempoRevealRow{margin-top:11.2px}.tempoRevealBtn{color:var(--muted);text-decoration-color:var(--muted)}.editTempoExperiment{margin-top:11.2px}.editTempoExperiment[hidden]{display:none}.testingZone{position:relative;overflow:hidden;border-radius:22.4px;background:#202226;border:.8px solid #4a4f58;box-shadow:none;--text:#d6d9df;--soft:#c7ccd5;--muted:#9ea5b0;--line:#4a4f58;--lineb:#4a4f58;--field-line:#4a4f58;color:var(--text)}.testingZoneInner{position:relative;padding:19.2px;background:linear-gradient(rgba(176,186,199,.045) .8px,transparent .8px),linear-gradient(90deg,rgba(176,186,199,.045) .8px,transparent .8px),#202226;background-size:16px 16px}.testingZoneTitleBlock{max-width:608px;margin-bottom:19.2px}.testingZoneTitleRow{display:flex;justify-content:space-between;align-items:center;gap:16px}.testingZoneTitleRow strong{color:#d6d9df}.testingZone .tempoEstimate{color:#aeb4bf}.testingZoneExplanation{margin:8px 0 0;color:#9ea5b0;text-align:left}.testingZoneLayout{display:grid;grid-template-columns:minmax(224px,288px) minmax(0,1fr);grid-template-areas:"controller feedback";gap:25.6px;align-items:start}.testingFeedbackForm{grid-area:feedback;display:grid;gap:14.4px;min-width:0;padding:16px;border:.32px solid var(--line);border-radius:16px;background:#252525}.testingFeedbackHeading{color:#d6d9df}.testingFeedbackField{display:grid;gap:6.4px;color:#9ea5b0}.testingFeedbackField select,.testingFeedbackField textarea{width:100%;border:.32px solid var(--line);background:#171717;color:#d6d9df;border-radius:11.2px;padding:8px 9.6px;font:inherit}.testingFeedbackField textarea{resize:vertical;min-height:65.6px}.testingRating{display:grid;grid-template-columns:repeat(5,1fr);gap:4.8px}.testingRating button{min-height:30.4px;border-radius:9.6px;border:.32px solid var(--line);background:#171717;color:#c7ccd5;cursor:pointer}.testingRating button.selected{border-color:#c7ccd5;background:#343434}.testingFeedbackSubmit{justify-self:start;min-height:33.6px;padding:0 12.8px;border-radius:11.2px;border:0;background:#ffffffe0;color:#111;cursor:pointer}.testingZoneControllerWrap{grid-area:controller;display:flex;flex-direction:column;align-items:center;justify-content:flex-start}.tempoQuadFrame{width:min(256px,100%);aspect-ratio:1/1;padding:0;background:linear-gradient(rgba(176,186,199,.075) .8px,transparent .8px),linear-gradient(90deg,rgba(176,186,199,.075) .8px,transparent .8px),#202226;background-size:16px 16px,16px 16px,auto;border-radius:16px}.testingZone .tempoQuad{width:100%;height:100%;border-radius:16px;background:#202226;border:.8px solid #5a606a;box-shadow:none}.testingZone .tempoCross{background:linear-gradient(to right,transparent calc(50% - .4px),rgba(176,186,199,.2) 50%,transparent calc(50% + .4px)),linear-gradient(to bottom,transparent calc(50% - .4px),rgba(176,186,199,.2) 50%,transparent calc(50% + .4px))}.testingZone .tempoDot{width:14.4px;height:14.4px;background:transparent;border:.8px solid #c4cad4;box-shadow:0 0 0 3.2px #c4cad40d}.testingZone .tempoPole{color:#8e96a2}.testingZone .tempoReadout{width:min(256px,100%);color:#9ea5b0;text-align:center;margin-top:9.6px}.testingZone button,.testingZone input,.testingZone select,.testingZone textarea{transition:opacity .14s ease,border-color .14s ease,color .14s ease,background .14s ease}.testingZone button:hover,.testingZone button:focus-visible{filter:none;opacity:.88}@media (max-width:900px){.testingZoneLayout{grid-template-columns:1fr;grid-template-areas:"controller" "feedback"}}.activityHeader{display:flex;align-items:center;gap:var(--inset);margin-bottom:var(--inset)}.activityIcon{display:grid;place-items:center}.icon{width:var(--glyph-size);height:var(--glyph-size);flex:none;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}.icon *{vector-effect:non-scaling-stroke}.addPanelPlus .icon,.addFab .icon{width:24px;height:24px}.checkinTabIcon .icon{width:18px;height:18px}.weekTick .icon{width:1em;height:1em}.activityRows{display:grid;gap:9.6px}.activityRow{display:grid;grid-template-columns:43.2px minmax(0,1fr);align-items:center;gap:11.2px;background:var(--tile-2);border-radius:24px;padding:12px 14px}.activityRowIcon{width:43.2px;height:43.2px;border-radius:16px;background:var(--icon-bg);display:grid;place-items:center;font-size:16px}.activityRowMeta{color:var(--soft);margin-top:2.4px}.toast{position:absolute;right:20.8px;top:20.8px;z-index:60;background:var(--bright);color:var(--on-bright);border-radius:799.2px;padding:8.8px 12.8px;opacity:0;transform:translateY(-6.4px);pointer-events:none;transition:opacity .18s ease,transform .18s ease}.toast.show{opacity:1;transform:none}.weekCopy{color:var(--muted);margin-top:9.6px;max-width:none;white-space:nowrap}.weekChip{background:var(--tile-2);border-radius:12.8px;min-height:60.8px;padding:9.6px 11.2px;display:flex;flex-direction:column;justify-content:space-between;gap:6.4px}.weekChipTop{display:flex;justify-content:space-between;align-items:center;gap:6.4px}.weekTick{font-size:11.2px;font-weight:800;line-height:1}.weekChip.total{background:var(--card2)}.workoutSurface{position:relative;overflow:hidden;isolation:isolate}.workoutContent{position:relative;z-index:2}.pixelTrailCanvas{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;z-index:1;pointer-events:none}#app.light .pixelTrailCanvas{opacity:.46}.sessionHead{display:flex;justify-content:space-between;align-items:flex-start;gap:16px}.sessionActions{display:flex;gap:22.4px;align-items:center;flex-wrap:wrap;justify-content:flex-end}.holdEnd{position:relative;overflow:hidden;min-width:110.4px;min-height:41.6px;padding:0 16px;border-radius:799.2px;border:.32px solid var(--line);background:var(--control);text-decoration:none;user-select:none;-webkit-user-select:none;touch-action:none}.holdEndFill{position:absolute;inset:0 auto 0 0;width:0;background:var(--bright);pointer-events:none}.holdEndLabel{position:relative;z-index:1;mix-blend-mode:difference;color:#fff}.holdEnd.holding{border-color:var(--muted)}.exerciseTitle{margin-top:4.8px;color:var(--accent-text)}.meta{color:var(--muted);margin-top:4.8px}.progress{height:46.4px;padding:0;background:transparent;border-radius:17.6px;display:flex;gap:3.2px;margin-top:19.2px;overflow:hidden}.progressSegment{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:0;padding:0;display:block;flex:1;min-width:0;background:var(--segment);border-radius:17.6px;position:relative;overflow:hidden;cursor:default}.progressSegment:after{content:"";position:absolute;inset:0 auto 0 0;width:0;background:var(--segment-fill);transition:width .2s linear}.progressSegment.done{background:transparent;opacity:0;pointer-events:none}.progressSegment.done:after{display:none}.progressSegment.active:after{width:var(--segment-progress,0%)}#app.resting .progressSegment:not(.done):not(.active),#app.paused .progressSegment:not(.done):not(.active){background:#fff}.progressSegment.rewindable{cursor:pointer}.progressSegment.rewindable:hover{filter:brightness(1.08)}.progressSegment:focus-visible{outline:1.6px solid var(--primary);outline-offset:-2.4px}.workGrid{display:grid;grid-template-columns:minmax(0,2fr) minmax(240px,1fr);gap:16px;margin-top:16px}.timerCard,.movementCard,.nextCard{position:relative;border-radius:28.8px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.timerCard{min-height:344px;background:var(--timer);overflow:hidden}.fill{position:absolute;inset:0 auto 0 0;width:100%;background:var(--timer-fill);transition:width .2s linear}.digits{position:absolute;top:0;right:0;bottom:0;left:0;display:flex;align-items:center;justify-content:center;font-size:clamp(152px,22.4vw,312px);font-weight:850;letter-spacing:-.11em;color:#fff;mix-blend-mode:difference;font-variant-numeric:tabular-nums}.movementCard{background:var(--stage);min-height:344px;display:grid;place-items:center;padding:22.4px}.movementCard{overflow:hidden}.movementRippleCanvas{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;z-index:0}.nextCard{background:var(--card);padding:22.4px;display:flex;justify-content:space-between;align-items:center;gap:16px;min-height:116.8px}.nextIcon{width:52.8px;height:52.8px;border-radius:19.2px;background:var(--icon-bg);display:grid;place-items:center;font-size:20.8px;flex:0 0 auto}.sectionLabel{margin:0 0 8px 22.4px}.moveSection{grid-column:span 12}.moveSection .workoutGallery{width:100%}.nextWrap{margin-top:16px}.nextLabel{margin:0 0 8px 22.4px}.nextCard{background:var(--card);padding:22.4px;display:flex;justify-content:space-between;align-items:center;gap:22.4px;min-height:86.4px;border-radius:28.8px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.nextMain{display:flex;align-items:center;gap:14.4px;min-width:0}.nextIcon{width:43.2px;height:43.2px;border-radius:12.8px;background:var(--icon-bg);display:grid;place-items:center;font-size:16px;flex:0 0 auto}.sessionControlRow{display:flex;justify-content:flex-end;gap:22.4px;align-items:center;margin-top:16px}.skipBtn{min-width:120px;min-height:41.6px;padding:0 14.4px;border:.8px solid var(--line);background:transparent;color:var(--text);text-decoration:none}.pause{min-width:120px;min-height:41.6px;padding:0 16px}.upcomingList{display:grid;gap:9.6px;margin-top:9.6px}.upcomingCard{--future-opacity:1;display:flex;align-items:center;justify-content:space-between;gap:22.4px;min-height:86.4px;padding:22.4px;border-radius:28.8px;background:var(--card);border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);opacity:var(--future-opacity);transition:opacity .22s ease}.upcomingCard:nth-child(-n+3){--future-opacity:1}.upcomingCard:nth-child(4){--future-opacity:.72}.upcomingCard:nth-child(5){--future-opacity:.48}.upcomingCard:nth-child(6){--future-opacity:.3}.upcomingCard:nth-child(n+7){--future-opacity:.16}.upcomingCard.sessionHidden{--future-opacity:.24!important;filter:saturate(.15)}.upcomingCard.sessionHidden .upcomingName{text-decoration:line-through}.upcomingCard.sessionHidden .upcomingIcon{opacity:.45}.upcomingCard.sessionHidden .upcomingMeta{opacity:.55}.upcomingInfo{display:flex;align-items:center;gap:14.4px;min-width:0}.upcomingIcon{width:43.2px;height:43.2px;flex:0 0 auto;border-radius:12.8px;background:var(--icon-bg);display:grid;place-items:center;font-size:16px}.upcomingMeta{color:var(--muted);margin-top:4px}.skipSessionBtn{flex:0 0 auto;min-height:41.6px;padding:0 14.4px;border:.8px solid var(--line);background:transparent;color:var(--text)}@media (max-width:900px){.weekCopy{white-space:normal}.nextCard{align-items:flex-start;flex-direction:column}.sessionControlRow{width:100%}.skipBtn,.pause{flex:1;min-width:0}.upcomingCard{align-items:flex-start;flex-direction:column}.skipSessionBtn{width:100%}}.countdown{display:none;position:fixed;top:0;right:0;bottom:0;left:0;width:100vw;height:100dvh;background:var(--page);z-index:300;align-items:center;justify-content:center;flex-direction:column;text-align:center;overflow:hidden}.countdown.active{display:flex}.pixelCanvas{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;display:block;z-index:1}.countdown:before{content:"";position:absolute;top:0;right:0;bottom:0;left:0;background:radial-gradient(circle at center,color-mix(in srgb,var(--primary) 16%,transparent),transparent 58%);pointer-events:none}.countNum{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);z-index:3}.countNum{font-size:clamp(144px,25.6vw,344px);font-weight:850;line-height:.75;letter-spacing:-.1em}.modalBackdrop{display:none;position:fixed;top:0;right:0;bottom:0;left:0;width:100vw;height:100dvh;z-index:145;background:var(--scrim);padding:28px;box-sizing:border-box;align-items:center;justify-content:center}.modalBackdrop.open{display:flex}.modal{width:min(1184px,100%);height:100%;max-width:1184px;max-height:none;overflow:hidden;background:var(--modal);border-radius:28.8px;padding:0;display:flex;flex-direction:column;box-sizing:border-box;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.modalStatic{flex:0 0 auto;padding:22.4px;background:var(--modal);border-bottom:.32px solid var(--divider)}.modalHead{display:flex;justify-content:space-between;align-items:flex-start;gap:16px;margin-bottom:12.8px}.modalHeaderActions{display:flex;gap:22.4px;align-items:center;flex:0 0 auto}.modalHead h2{margin:2.4px 0 0}.editNameRow{display:grid;gap:6.4px;margin-bottom:11.2px}.editNameLabel{color:var(--muted)}.editNameInput{min-height:42px;border-radius:var(--r-inner);border:.32px solid var(--field-line);background:var(--input);color:var(--text);padding:0 16px}.timeTiles{display:grid;grid-auto-flow:column;grid-auto-columns:minmax(0,1fr);gap:11.2px;margin-bottom:11.2px}.timeTile{background:var(--tile);min-height:148.8px;padding:16px;display:flex;flex-direction:column;justify-content:space-between}.timeHeader{display:flex;align-items:center;gap:14.4px}.timeIcon{width:46.4px;height:46.4px;border-radius:16px;background:var(--icon-bg);display:grid;place-items:center;flex:0 0 auto;font-size:17.6px;font-weight:760}.timeCopy{min-width:0}.rangeTrack{height:46.4px;border-radius:17.6px;background:var(--track);overflow:hidden;position:relative;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.rangeFill{position:absolute;inset:0 auto 0 0;background:var(--slider-fill);border-radius:17.6px 0 0 17.6px}.rangeInput{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;opacity:0;cursor:pointer}.exerciseScroller{min-height:0;overflow-y:auto;padding:3.2px 16px 17.6px 22.4px;border-top:.16px solid var(--divider);scrollbar-gutter:stable}.exerciseScroller::-webkit-scrollbar{width:6.4px}.exerciseScroller::-webkit-scrollbar-track{background:transparent}.exerciseScroller::-webkit-scrollbar-thumb{background:var(--scroll-thumb);border-radius:799.2px}.sectionTitle{text-transform:uppercase;color:var(--muted);margin:14.4px 0 8px}.moveList{display:grid;gap:8px}.moveRow{display:flex;justify-content:space-between;align-items:center;gap:22.4px;background:var(--row);border-radius:20.8px;padding:22.4px}.moveRow.hidden{opacity:.46}.moveRow.hidden .moveItemName{text-decoration:line-through}.moveMeta{color:var(--muted);margin-top:4px}.hideBtn{border-radius:799.2px;min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text)}.removeBtn{position:relative;overflow:hidden;border-radius:799.2px;min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);cursor:pointer}.removeFill{position:absolute;inset:0 auto 0 0;width:0;background:var(--danger-fill);pointer-events:none;transition:width 0s linear}.addInput{min-height:41.6px;border-radius:799.2px;border:.32px solid var(--field-line);background:var(--input);color:var(--text);padding:0 14.4px}.addBtn{border-radius:799.2px;min-height:42px;padding:0 16px;border:0;background:var(--bright);color:var(--on-bright)}.routineSummary{margin-top:14.4px;background:var(--sunken);border-radius:20.8px;padding:12.8px 14.4px;color:var(--soft)}.settingsHeader{display:flex;align-items:center;gap:12.8px;margin-bottom:24px}.back{width:46.4px;padding:0;font-size:24px}.tabs.rubberTabs{position:relative;display:inline-flex;gap:0;padding:3.2px;margin-bottom:17.6px;border-radius:12.8px;background:var(--control);border:.32px solid var(--line);overflow:hidden}.rubberIndicator{position:absolute;top:3.2px;left:3.2px;height:calc(100% - 6.4px);width:0;border-radius:12.8px;background:var(--bright);transition:left .34s cubic-bezier(.2,1.35,.4,1),width .34s cubic-bezier(.2,1.35,.4,1),transform .18s ease;transform-origin:center;z-index:0}.tabs.rubberTabs .tab{position:relative;z-index:1;min-height:41.6px;padding:0 16px;border:0;background:transparent;color:var(--text)}.tabs.rubberTabs .tab.active{color:var(--on-bright)}.settingsPane{display:none}.settingsPane.active{display:block}.integrationList,.toggleList{display:grid;gap:9.6px}.integration,.toggleRow{display:flex;justify-content:space-between;align-items:center;gap:14.4px;background:var(--raised);border-radius:22.4px;padding:14.4px 16px}.status{color:var(--muted);margin-top:3.2px}.note{color:var(--muted);line-height:1.5;max-width:688px}.switch{position:relative;width:50px;height:28px;padding:0;border-radius:var(--r-inner);background:var(--line);border:.4px solid var(--line);opacity:1;flex:0 0 auto;cursor:pointer;transition:background .18s ease,opacity .18s ease}.switch:after{content:"";position:absolute;width:24px;height:24px;top:50%;left:1.6px;border-radius:12px 4px 4px 12px;background:var(--text);transform:translateY(-50%);transition:left .18s ease,border-radius .18s ease,background .18s ease}.switch.on{background:var(--color-accent-primary);opacity:1}.switch.on:after{left:calc(100% - 25.6px);border-radius:4px 12px 12px 4px;background:var(--color-text-on-accent)}.themeChoice{display:flex;gap:9.6px;flex-wrap:wrap;align-items:center;margin:0}.themeBtn{min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);cursor:pointer}.themeBtn.active{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.wxLayoutBtn{min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);cursor:pointer}.wxLayoutBtn[aria-pressed=true]{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.settingsSelect{min-width:96px;min-height:32px;padding:0 27.2px 0 12px;border-radius:var(--r-inner);border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);font:inherit}.motionControlRow{align-items:center}.motionRangeWrap{display:flex;align-items:center;justify-content:flex-end;gap:9.6px;min-width:184px}.motionRangeWrap input{width:128px}.motionRangeWrap span{color:var(--muted);min-width:51.2px;text-align:right}.dangerText{color:var(--danger)}.confirmBackdrop{display:none;position:fixed;top:0;right:0;bottom:0;left:0;z-index:80;padding:22.4px;background:var(--scrim);align-items:center;justify-content:center}.confirmBackdrop.open{display:flex}.confirmCard{width:min(448px,100%);background:var(--card);border-radius:28.8px;padding:22.4px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.confirmActions{display:flex;justify-content:flex-end;align-items:center;gap:22.4px;margin-top:22.4px}.holdDelete{position:relative;overflow:hidden;min-width:88px;min-height:41.6px;padding:0 17.6px;border:.8px solid var(--danger-line);border-radius:12.8px;background:var(--danger-bg);color:var(--text);cursor:pointer}.holdDeleteFill{position:absolute;inset:0 auto 0 0;width:0;background:var(--danger-fill);pointer-events:none}.holdDeleteLabel{position:relative;z-index:1;color:var(--text)}.holdDelete.holding .holdDeleteLabel,.removeBtn.holding .removeLabel{color:#fff}.bottomNav{position:sticky;bottom:22.4px;display:flex;gap:22.4px;z-index:100;width:max-content;margin:-65.6px 0 0 22.4px}.navBtn{width:43.2px;height:43.2px;padding:0;border-radius:16px;background:var(--control);border:.32px solid var(--line);color:var(--text)}.navBtn.active{background:var(--color-fill-selected);color:var(--color-text-on-selected)}@media (max-width:900px){.weekCopy{white-space:normal}.grid{grid-template-columns:1fr}.moveSection,.activityCard,.weekly{grid-column:auto}.workGrid{grid-template-columns:1fr}.timerCard,.movementCard{min-height:256px}.timeTiles{grid-auto-flow:row;grid-template-columns:1fr}}@media (max-width:620px){.modal{width:100%;height:100%;max-height:100%}#app{padding:0}.shell{border-radius:0}.view{padding:14.4px 14.4px 75.2px}.timerCard{min-height:224px}.digits{font-size:144px}.modalBackdrop{padding:9.6px}.modal{height:100%}.modalStatic{padding:14.4px}.exerciseScroller{padding:3.2px 9.6px 14.4px 14.4px}}:is(button,.primary,.tab,.back,.navBtn,.themeBtn,.energyBtn,.hideBtn,.addBtn,.removeBtn,.skipBtn,.holdEnd,.editNameInput,.addInput,.rangeTrack,.progress,.progressSegment):not(.segBtn,.stepBtn,.checkinTab,.switch,.dragHandle,.navBtn,.createPresetBtn,.sheetChoice,.setupSummary,.wxStyleBtn,.tfSeg>button){border-radius:var(--r-inner)!important}.card,.panel,.tile,.timerCard,.movementCard,.nextCard,.modal{border-radius:var(--r-card)}.movementCreatorLaunch{display:flex;gap:9.6px;align-items:center;margin:3.2px 0 14.4px}.movementCreatorOpen,.restAddBtn{min-height:35.2px;padding:0 12.8px;border-radius:12.8px;cursor:pointer}.movementCreatorOpen{border:0;background:var(--bright);color:var(--on-bright)}.restAddBtn{border:.32px solid var(--field-line);background:var(--control-2);color:var(--text)}.movementCreator{position:relative;margin:0 0 14.4px;padding:19.2px 22.4px;border-radius:22.4px;background:var(--card);border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.movementCreator[hidden]{display:none}.movementCreatorHead{display:flex;align-items:center;justify-content:space-between;gap:16px;margin-bottom:17.6px}.movementCreatorHead h3{margin:0}.movementCreatorClose{position:static}.movementCreatorFields{display:grid;grid-template-columns:minmax(0,1.45fr) minmax(0,.85fr);gap:16px 19.2px}.movementCreatorFields[hidden]{display:none!important}.movementCreatorFields>label{display:grid;gap:6.4px;min-width:0;color:var(--text)}.movementTimingRow{grid-column:1/-1;display:grid;grid-template-columns:minmax(240px,352px) minmax(208px,1fr) auto;gap:17.6px;align-items:end}.durationStack{display:grid;gap:6.4px;color:var(--text)}.creatorDurationRow{display:grid;grid-template-columns:minmax(96px,1fr) minmax(104px,1fr);gap:12.8px;align-items:center}.creatorNumber{width:100%;min-width:0}.creatorUnitSelect{min-height:41.6px;width:100%;padding:0 11.2px;border-radius:12.8px;border:.32px solid var(--field-line);background:var(--input);color:var(--text);font:inherit}.globalTimingToggle{display:flex!important;align-items:center;gap:8px!important;min-height:41.6px;cursor:pointer;color:var(--text)!important;white-space:nowrap}.globalTimingToggle input{position:absolute;opacity:0;pointer-events:none}.toggleTrack{position:relative;width:38.4px;height:22.4px;border-radius:799.2px;background:var(--switch-off);border:.32px solid var(--field-line);flex:0 0 auto;transition:background .16s ease}.toggleThumb{position:absolute;width:17.6px;height:17.6px;top:1.6px;left:1.6px;border-radius:50%;background:var(--knob-off);transition:left .16s ease,background .16s ease}.globalTimingToggle input:checked+.toggleTrack{background:var(--bright)}.globalTimingToggle input:checked+.toggleTrack .toggleThumb{left:17.6px;background:var(--on-bright)}.toggleLabel{color:var(--soft)}.creatorAddButton{min-width:97.6px;min-height:41.6px;align-self:end}@media (max-width:900px){.movementCreatorFields{grid-template-columns:1fr}.movementTimingRow{grid-column:auto;grid-template-columns:1fr;align-items:stretch}.globalTimingToggle{min-height:35.2px}.creatorAddButton{width:100%}}.moveRow.restItem{background:var(--row-rest)}.moveKindBadge{display:inline-flex;margin-left:6.4px;padding:2.4px 5.6px;border:.8px solid var(--field-line);border-radius:799.2px;color:var(--muted);vertical-align:middle}@media (max-width:900px){.movementCreatorFields,.movementCreatorFields.restFields{grid-template-columns:1fr;padding-right:0}.movementCreatorClose{position:static;margin-left:auto;display:block;margin-bottom:12.8px}}.createMoveOptions{margin:0 0 14.4px;padding:14.4px;border-radius:19.2px;background:var(--card2);border:.32px solid var(--line)}.createMoveOptions[hidden]{display:none}.createOptionLabel{text-transform:uppercase;color:var(--muted);margin-bottom:8px}.createPresetChoice{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}.createPresetBtn{min-height:60.8px;padding:11.2px 12.8px;border-radius:14.4px;border:.8px solid var(--field-line);background:transparent;color:var(--text);text-align:left;cursor:pointer}.createPresetBtn strong{display:block}.createPresetBtn span{display:block;color:var(--muted);margin-top:3.2px}.createPresetBtn.active{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.createPresetBtn.active span{color:var(--on-bright);opacity:.68}.createExtras{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px;margin-top:9.6px}.createExtraToggle{display:flex;align-items:flex-start;gap:8px;padding:9.6px 11.2px;border:.8px solid var(--field-line);border-radius:14.4px;cursor:pointer}.createExtraToggle input{margin-top:2.4px}.createExtraToggle span{display:grid;gap:2.4px}.createExtraToggle small{color:var(--muted)}.creatorUnitSelect{min-height:41.6px;padding:0 9.6px;border-radius:12.8px;border:.32px solid var(--field-line);background:var(--input);color:var(--text);font:inherit}@media (max-width:900px){.createPresetChoice,.createExtras{grid-template-columns:1fr}}.globalTimingToggle{display:inline-flex!important;grid-template-columns:none!important;align-items:center;gap:5.6px!important;color:var(--text)!important;white-space:nowrap}.globalTimingToggle input{margin:0}.globalTimingValue{min-height:41.6px;display:flex;align-items:center;padding:0 11.2px;border-radius:12.8px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--muted)}.createFlow{display:grid;gap:9.6px;padding:3.2px 0 8px}.createFlow[hidden]{display:none}.createStep{border-radius:22.4px;background:var(--tile);border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);overflow:hidden}.createStepHeader{width:100%;min-height:57.6px;padding:14.4px 17.6px;border:0;background:transparent;color:var(--text);display:flex;align-items:center;justify-content:space-between;gap:19.2px;text-align:left;cursor:pointer}.createStepHeader:disabled{cursor:not-allowed;opacity:.42}.createStepIdentity{display:flex;align-items:center;gap:9.6px}.createStepNumber{width:22.4px;height:22.4px;border-radius:799.2px;display:grid;place-items:center;border:.32px solid var(--line);color:var(--muted)}.createStepSummary{min-width:0;color:var(--muted);text-align:right}.createStepBody{display:none;padding:0 14.4px 14.4px}.createStep.active .createStepBody{display:block}.createStep.active .createStepHeader{border-bottom:.32px solid var(--divider)}.createStepSlot{display:grid;gap:11.2px}.createStepFooter{display:flex;justify-content:flex-end;margin-top:14.4px}.createStepFooter .primary:disabled{opacity:.35;cursor:not-allowed}.modal.createMode .movementTimingRow{display:none}.modal.createMode .movementCreator{margin-bottom:8px}.modal.createMode .movementCreatorFields{grid-template-columns:minmax(0,1.4fr) minmax(0,1fr)}.modal.createMode .movementCreatorFields.restFields{grid-template-columns:1fr}.modal.createMode .movementCreatorLaunch{margin-top:0}.modal.createMode .sectionTitle{margin-top:9.6px}.modal.createMode .modalStatic{padding-bottom:14.4px}.modal:not(.createMode) .createFlow{display:none!important}#app.resting .movementCard{background:#ffffff0e}#app.resting .movementRippleCanvas{opacity:1}#app.light.resting .movementCard{background:#fbf9f638}.nextCard .skipSessionBtn{margin-left:auto}.modal:not(.createMode) .movementCreatorLaunch{margin-top:25.6px}.testingFeedbackThanks{grid-area:feedback;min-height:176px;padding:19.2px;border:.32px solid var(--line);border-radius:16px;background:#252525;display:flex;flex-direction:column;justify-content:center;align-items:flex-start;gap:6.4px}.testingFeedbackThanks[hidden]{display:none}.testingFeedbackThanks strong{color:#f0f0f0}.testingFeedbackThanks p{margin:0;color:#9ea5b0}.testingFeedbackThanks a{color:#d6d9df;text-underline-offset:2.4px}:host(:fullscreen){overflow:auto;width:100vw;height:100vh}.entitySelect{max-width:min(256px,36.8vw);text-overflow:ellipsis;field-sizing:content}.integration .status code{padding:.8px 4.8px;border-radius:4.8px;background:var(--wash-2)}.integration .pill[disabled]{cursor:default;opacity:.7}#app :focus{outline:none}#app :focus-visible{outline:2.4px solid var(--primary);outline-offset:2.4px}#app .workoutPanel:focus-visible{outline-offset:-2.4px}@media (max-width:620px){.bottomNav{margin-left:14.4px}}.shell:has(.countdown.active) .bottomNav{visibility:hidden}@media (max-width:900px){.workoutPanel:not(.active):not(.addPanel) .panelExpanded{opacity:1;filter:none;pointer-events:auto}}.grid>*{min-width:0}.insightCard{display:grid;gap:22.4px}.day{display:grid;gap:6.4px;justify-items:center}.checkinBackdrop{z-index:160}.checkinCard{width:min(576px,100%)}.checkinCard .sub{margin-top:8px}.checkinSliders{display:grid;gap:11.2px;margin-top:19.2px}.checkinTile{min-height:0;gap:var(--inset);border:0}.scaleEnds{display:flex;justify-content:space-between;margin-top:6.4px;color:var(--muted)}.rangeTrack:focus-within{outline:2.4px solid var(--primary);outline-offset:2.4px}.checkinTab{position:fixed;right:0;top:50%;transform:translateY(-50%);z-index:120;display:flex;flex-direction:column;align-items:center;gap:4px;padding:16px 4px;border:.32px solid var(--line);border-right:0;border-radius:var(--r-fine) 0 0 var(--r-fine)!important;background:var(--control);color:var(--text);cursor:pointer;transition:padding .18s ease,background .18s ease}.checkinTab:hover{padding-right:12.8px}.checkinTabIcon{font-size:16px;line-height:1}.checkinTabLabel{writing-mode:vertical-rl;transform:rotate(180deg)}.checkinBadge{position:absolute;top:8px;left:8px;width:8px;height:8px;border-radius:50%;background:var(--secondary);box-shadow:0 0 0 2.4px var(--control),0 0 9.6px color-mix(in srgb,var(--secondary) 70%,transparent);animation:checkinPulse 1.8s ease-in-out infinite}@keyframes checkinPulse{50%{box-shadow:0 0 0 3px var(--control),0 0 2px color-mix(in srgb,var(--secondary) 20%,transparent)}}@media (prefers-reduced-motion: reduce){.checkinBadge{animation:none}}.shell:has(#workoutView.active) .checkinTab,.shell:has(.countdown.active) .checkinTab{display:none}#app.light .checkinBadge{box-shadow:0 0 0 2.4px var(--color-bg-ground),0 0 9.6px color-mix(in srgb,var(--primary) 50%,transparent)}.feelSection{grid-column:span 12;margin-top:16px}.feelCard{display:grid;gap:19.2px}.feelTop{display:grid;grid-template-columns:minmax(0,1fr) minmax(208px,336px);gap:22.4px;align-items:end}.feelDays{display:grid;grid-template-columns:repeat(7,minmax(0,1fr));gap:8px}.feelDay{min-height:0;gap:9.6px}.feelDay.future{opacity:.4}.feelDay.today{box-shadow:inset 0 0 0 .8px var(--today-ring)}.feelDots{font-size:6.4px;letter-spacing:1.6px;color:var(--muted)}.feelMeter{display:grid;gap:4.8px}.feelMeterTop{display:flex;justify-content:space-between;gap:6.4px;color:var(--muted)}.feelMeterTop span:last-child{color:var(--text)}.feelTrack{height:6.4px;border-radius:799.2px;background:var(--wash-2);overflow:hidden}.feelTrack span{display:block;height:100%;border-radius:799.2px}@media (max-width:900px){.feelSection{grid-column:auto}.feelTop{grid-template-columns:1fr}.feelDays{grid-template-columns:repeat(4,minmax(0,1fr))}}@media (max-width:620px){.feelDays{grid-template-columns:repeat(2,minmax(0,1fr))}}.checkinTile .timeHeader{align-items:center}.checkinTab:not(.due){opacity:.6}.checkinTab:not(.due):hover{opacity:1}.activityCard{grid-column:span 3}.weekly{grid-column:span 9;cursor:pointer;transition:border-color .18s ease,background .18s ease}.weekly:hover{border-color:var(--border-hover)}@media (max-width:1200px){.activityCard{grid-column:span 4}.weekly{grid-column:span 8}}@media (max-width:900px){.activityCard,.weekly{grid-column:auto}}.insightCard{grid-column:span 9;align-content:start}@media (max-width:1200px){.insightCard{grid-column:span 8}}@media (max-width:900px){.insightCard{grid-column:auto}}.helpCard .helpSteps,.helpCard .helpNote{max-width:688px}.helpCard .note{margin:0}.helpSteps{margin:19.2px 0 0;padding:0;list-style:none;counter-reset:help;display:grid;gap:9.6px}.helpSteps li{counter-increment:help;display:grid;gap:4.8px;position:relative;padding:14.4px 16px 14.4px 52.8px;border-radius:20.8px;background:var(--tile);color:var(--muted)}.helpSteps li:before{content:counter(help);position:absolute;left:14.4px;top:12.8px;width:25.6px;height:25.6px;border-radius:9.6px;display:grid;place-items:center;background:var(--icon-bg);color:var(--text)}.helpSteps strong,.helpSteps b,.helpNote b{color:var(--text)}.helpCard code{padding:.8px 4.8px;border-radius:4.8px;background:var(--wash-2)}.helpNote{display:grid;gap:3.2px;margin-top:9.6px;padding:12.8px 16px;border-radius:17.6px;border:.32px solid var(--field-line);color:var(--muted)}.helpNote strong{color:var(--text)}.rowLabel{grid-column:1/-1;margin-top:16px;margin-bottom:-8px}.checkinTab{flex-direction:row;align-items:center;gap:0}.checkinTabMain{display:flex;flex-direction:column;align-items:center;gap:4px}.checkinPeek{display:grid;gap:3.2px;justify-items:start;white-space:nowrap;overflow:hidden;max-width:0;opacity:0;margin-right:0;transition:max-width .32s cubic-bezier(.2,1.2,.4,1),opacity .2s ease,margin-right .32s ease}.checkinTab.peek{padding-left:17.6px;opacity:1}.checkinTab.peek .checkinPeek{max-width:176px;opacity:1;margin-right:14.4px}.peekCountdown{font-size:24px;font-weight:800;letter-spacing:-.04em;line-height:1;font-variant-numeric:tabular-nums}.peekAt{color:var(--muted)}@media (prefers-reduced-motion: reduce){.checkinPeek{transition:none}}.activityRowMeta{color:var(--text);margin-top:1.6px;font-variant-numeric:tabular-nums}.feelTop{grid-template-columns:1fr}:host{--primary:#03A9F4;--secondary:#D0FF00;--font:Inter,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;--font-tile:Geist,var(--font);--w-regular:400;--w-medium:500;--w-semibold:600;--w-bold:700;--w-heavy:800;--t-display:52px;--t-title:22px;--t-card-title:18px;--t-value:16px;--t-section:18px;--t-strong:14px;--t-body:12px;--t-caption:12px;--lh-display:1.05;--lh-title:1;--t-wx-temp:64px;--t-wx-range:24px;--t-tile-title:14px;--lh-tile-title:20px;--t-tile-detail:16px;--lh-tile-detail:20px;--inset:10px;--r-card:34px;--r-tile:24px;--r-inner:16px;--r-fine:12px;--tile-min:60px;--chip-size:40px;--glyph-size:34px;--gutter:22px;--grid-gap:16px}@media (max-width:620px){:host{--t-display:46px;--t-title:20px;--t-value:20px;--t-section:16px;--t-strong:15px;--t-body:14px;--t-caption:11px;--lh-display:.92;--lh-title:1.05}}#app{font-family:var(--font);font-size:var(--t-body);font-weight:var(--w-regular);line-height:1.4}#app button,#app input,#app select,#app textarea{font-family:inherit}:where(#app) strong,:where(#app) b{font-weight:var(--w-bold)}.title,.workoutName,.exerciseTitle,.feelHeadline,.settingsTitle{font-size:var(--t-display);font-weight:var(--w-heavy);line-height:var(--lh-display);letter-spacing:-.055em}.confirmTitle,.sheetTitle,.modalHead h2,.paneTitle,.movementCreatorHead h3,.testingFeedbackThanks strong{font-size:var(--t-title);font-weight:var(--w-medium);font-style:italic;line-height:var(--lh-title);letter-spacing:-.03em}.activityTitle{font-size:var(--t-card-title);font-weight:var(--w-medium);font-style:italic;line-height:1.1;letter-spacing:-.02em;text-box:trim-both cap alphabetic}.paneTitle{margin:0 0 10px}.activityRowMeta,.nextName,.upcomingName,.editNameInput,.videoClock{font-size:var(--t-value);font-weight:var(--w-regular);line-height:1.15;letter-spacing:-.02em}.sectionLabel,.nextLabel{font-size:var(--t-section);font-weight:var(--w-regular);line-height:1.2;letter-spacing:-.01em}.activityRowName,.timeLabel,.moveItemName,.setupSummaryText strong,.sheetChoice strong,.createPresetBtn strong,.createExtraToggle strong{font-family:var(--font-tile);font-size:var(--t-tile-title);font-weight:var(--w-semibold);line-height:var(--lh-tile-title);letter-spacing:0}.moveMeta,.setupSummaryText small,.sheetChoice small,.createPresetBtn span,.createExtraToggle small{font-family:var(--font-tile);font-size:var(--t-tile-detail);font-weight:var(--w-regular);line-height:var(--lh-tile-detail);letter-spacing:0}.integration strong,.toggleRow strong,.setupName,.weekChipTop strong,.panelCollapsedText,.activityCount,.metaType,.kindChip,.helpSteps strong,.addGhost strong,.helpNote strong,.createStepIdentity strong,.testingZoneTitleRow strong,.testingFeedbackHeading,.tempoEstimate,.primary,.tab,.skipBtn,.skipSessionBtn,.hideBtn,.removeBtn,.addBtn,.themeBtn,.wxLayoutBtn,.holdEnd,.holdDelete,.movementCreatorOpen,.restAddBtn,.creatorAddButton,.testingFeedbackSubmit,.testingRating button,.toast,.checkinTabLabel{font-size:var(--t-strong);font-weight:var(--w-semibold);line-height:1.25;letter-spacing:-.01em}.status,.setupValue,.sub,.meta,.note,.weekCopy,.addInput,.settingsSelect,.pill,.routineSummary,.helpSteps li,.helpNote,.createStepSummary{font-size:var(--t-body);font-weight:var(--w-regular);line-height:1.4;letter-spacing:0}.setupCaption,.moveEditForm label>span,.addGhostText small,.setupSummaryAction,.metaTable th,.metaSub,.eyebrow,#stepLabel,.sourceTag,.addPanelLabel,.motionRangeWrap span,.sectionTitle,.editNameLabel,.scaleEnds,.peekAt,.upcomingMeta,.tempoPole,.tempoReadout,.tempoRevealBtn,.testingFeedbackField,.testingZoneExplanation,.testingFeedbackThanks p,.movementCreatorClose,.movementCreatorFields>label,.durationStack,.globalTimingToggle,.toggleLabel,.moveKindBadge,.createOptionLabel,.fieldError,.globalTimingValue,.createStepNumber,.feelMeterTop,#app code{font-size:var(--t-caption);font-weight:var(--w-regular);line-height:1.35;letter-spacing:0}.eyebrow,#stepLabel,.sectionTitle,.setupCaption{letter-spacing:.1em}.globalTimingToggle{font-size:var(--t-caption)!important}.workoutGallery,.workoutPanel{height:340px}@media (max-width:900px){.workoutPanel,.workoutPanel.active{height:320px}}@media (max-width:900px){.workoutGallery{height:auto}.workoutPanel,.workoutPanel.active{height:auto;min-height:320px}}@media (max-width:620px){.view{padding-left:0;padding-right:0}.settingsHeader,.sessionHead,.sessionControlRow{margin-left:16px;margin-right:16px}.tabs.rubberTabs,.sectionLabel,.rowLabel{margin-left:16px}.grid{gap:8px}.rowLabel,.feelSection{margin-top:16px}.rowLabel{margin-bottom:-4px}.sectionLabel{margin-bottom:8px}.workoutGallery{gap:8px}.workoutPanel,.workoutPanel.active{flex:0 0 100%;min-width:100%}.workoutPanel.addPanel{flex:0 0 100%;min-width:100%;min-height:120px}.card,.workoutPanel,.timerCard,.movementCard,.nextCard,.upcomingCard,.confirmCard{padding:16px}.activityRows,.insightCard,.feelCard{gap:8px}.activityRow,.weekChip{padding:10px 12px}.feelDays{gap:8px}.workGrid{gap:8px;margin-top:8px}.nextWrap,.sessionControlRow{margin-top:8px}.upcomingList{gap:8px}}.tabs.rubberTabs .tab{white-space:nowrap}@media (max-width:620px){.tabs.rubberTabs{display:flex;width:max-content;max-width:calc(100% - 32px);overflow-x:auto;scrollbar-width:none}.tabs.rubberTabs::-webkit-scrollbar{display:none}.tabs.rubberTabs .tab{flex:0 0 auto}}.insightCard{display:flex;flex-direction:column;gap:0}@media (max-width:1200px) and (min-width:901px){.timeTiles{grid-auto-flow:row;grid-template-columns:repeat(2,1fr)}}#stepLabel{margin-top:9.6px}#exerciseMeta{margin-top:4px}.moveRow{justify-content:flex-start;gap:12.8px}.moveText{flex:1;min-width:0}.moveActions{display:flex;gap:6.4px;flex:0 0 auto}.dragHandle{flex:0 0 auto;display:grid;place-items:center;width:32px;height:40px;margin:-8px 0 -8px -9.6px;padding:0;border:0;border-radius:12px;background:transparent;color:var(--muted);cursor:grab;touch-action:none}.dragHandle:hover{background:var(--hover);color:var(--text)}.moveRow.dragging{box-shadow:0 10px 30px var(--lift),inset 0 0 0 1.5px var(--primary);position:relative;z-index:2}.moveRow.dragging .dragHandle{cursor:grabbing;color:var(--text)}.removeBtn:hover,.hideBtn:hover{border-color:var(--muted)}.toast{position:fixed;z-index:400;display:flex;align-items:center;gap:12.8px}.toast.withAction{pointer-events:auto}.toastAction{border:0;padding:0;background:none;color:inherit;font:inherit;text-decoration:underline;text-underline-offset:3px;cursor:pointer}.modalTop{flex:0 0 auto;padding:22px 22px 0}.modalTop .modalHead{margin-bottom:0;padding-bottom:16px}@media (min-width:901px){.modal:not(.createMode){display:grid;grid-template-columns:minmax(340px,420px) minmax(0,1fr);grid-template-rows:auto minmax(0,1fr)}.modal:not(.createMode) .modalTop{grid-column:1/-1;border-bottom:.32px solid var(--divider)}.modal:not(.createMode) .modalStatic{grid-column:1;grid-row:2;overflow-y:auto;border-bottom:0;border-right:.32px solid var(--divider)}.modal:not(.createMode) .exerciseScroller{grid-column:2;grid-row:2;border-top:0;padding-top:12px}.modal:not(.createMode) .timeTiles{grid-auto-flow:row;grid-template-columns:minmax(0,1fr)}}.timeTiles{align-items:start}.removeLabel{position:relative;z-index:1}.removeBtn.holding{border-color:var(--danger-fill)}#deleteMoveConfirm{z-index:200}.moveRow{will-change:transform}.moveRow.dragging{box-shadow:0 18px 40px var(--lift),inset 0 0 0 1.5px var(--primary);z-index:3;transform-origin:center}.moveRow.editing{display:block;padding:16px;box-shadow:inset 0 0 0 1.5px var(--primary)}.moveEditForm{display:grid;gap:14.4px}.moveEditFields{display:grid;grid-template-columns:minmax(0,1.4fr) minmax(0,1fr);gap:12.8px}.moveEditForm label:not(.globalTimingToggle){display:grid;gap:6.4px;min-width:0}.moveEditForm .addInput{width:100%;min-width:0}.moveEditTiming{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:12.8px}.moveEditTiming .creatorDurationRow{display:grid;grid-template-columns:96px 128px;gap:9.6px}.creatorDurationRow.isDisabled{opacity:.38}.moveEditActions{display:flex;justify-content:flex-end;align-items:center;gap:22.4px}@media (max-width:620px){.moveEditFields{grid-template-columns:1fr}}.integration .status code{color:var(--soft)}#app.resting :is(.sessionHead,.nextLabel,.sessionControlRow){--muted:#f4f4f4;color:var(--text)}#app.paused :is(.sessionHead,.nextLabel,.sessionControlRow){--text:#090909;--muted:rgba(9,9,9,.8);--accent-text:#090909;--line:rgba(9,9,9,.3);color:var(--text)}#app.light:is(.resting,.paused) :is(.sessionHead,.nextLabel,.sessionControlRow){--text:#26221e;--muted:rgba(38,34,30,.85);--accent-text:#26221e;--line:rgba(38,34,30,.25);color:var(--text)}.moveList{display:flex;flex-direction:column}.movementCreatorOpen,.restAddBtn{display:inline-flex;align-items:center;gap:6px;touch-action:none;user-select:none;-webkit-user-select:none;cursor:grab;transition:transform .42s cubic-bezier(.34,1.46,.64,1),opacity .2s ease}.movementCreatorOpen svg,.restAddBtn svg{width:14px;height:14px;margin-left:-3px;opacity:.55;flex:0 0 auto}.movementCreatorOpen.lifting,.restAddBtn.lifting{transform:scale(.92);opacity:.4;cursor:grabbing;transition:transform .16s ease,opacity .16s ease}.addGhost{position:fixed;left:0;top:0;z-index:20;pointer-events:none;box-sizing:border-box;display:flex;align-items:center;gap:8px;padding:0 12.8px;overflow:hidden;white-space:nowrap;border-radius:12px;background:var(--bright);color:var(--on-bright);box-shadow:0 12px 30px var(--lift);will-change:transform;transition:width .4s cubic-bezier(.34,1.46,.64,1),height .4s cubic-bezier(.34,1.46,.64,1),border-radius .3s ease,padding .3s ease,background .2s ease,color .2s ease,box-shadow .25s ease,opacity .18s ease}.addGhost.rest{background:var(--control-2);color:var(--text);box-shadow:inset 0 0 0 .5px var(--field-line),0 12px 30px var(--lift)}.addGhostGrip{display:grid;place-items:center;flex:0 0 auto;opacity:.55}.addGhostGrip svg{width:14px;height:14px;transition:width .3s ease,height .3s ease}.addGhostText{display:grid;min-width:0}.addGhostText small{color:var(--muted);max-height:0;opacity:0;transition:max-height .3s ease,opacity .2s ease}.addGhost.overList{border-radius:20.8px;gap:12.8px;padding:0 22.4px 0 12.8px;background:var(--row);color:var(--text);box-shadow:inset 0 0 0 1.5px var(--primary),0 16px 36px var(--lift)}.addGhost.overList .addGhostGrip svg{width:18px;height:18px}.addGhost.overList .addGhostText small{max-height:20px;opacity:1;margin-top:4px}.addGhost.leaving{opacity:0}.dropSlot{flex:0 0 auto;height:0;margin-top:-8px;border-radius:20.8px;background:color-mix(in srgb,var(--primary) 9%,transparent);box-shadow:inset 0 0 0 1.5px color-mix(in srgb,var(--primary) 40%,transparent);transition:height .42s cubic-bezier(.34,1.46,.64,1),margin-top .42s cubic-bezier(.34,1.46,.64,1),opacity .2s ease}.dropSlot.leaving{opacity:0;transition:height .26s cubic-bezier(.4,0,.2,1),margin-top .26s cubic-bezier(.4,0,.2,1),opacity .16s ease}@media (prefers-reduced-motion: reduce){.addGhost,.dropSlot,.movementCreatorOpen,.restAddBtn{transition:none}}.exerciseScroller,.modalStatic,.createFlow{overflow-anchor:none}.videoStage{position:absolute;top:0;right:0;bottom:0;left:0;z-index:3;display:grid;place-items:center;background:#000;opacity:0;pointer-events:none;transition:opacity .3s ease}#app.videoStep .videoStage{opacity:1;pointer-events:auto}.videoStage{container-type:size}.videoFrame{width:min(100cqw,calc(100cqh * 16 / 9));aspect-ratio:16/9}.videoFrame>*{display:block;width:100%;height:100%;border:0}.videoSound{position:absolute;left:50%;bottom:16px;transform:translate(-50%);z-index:2}.videoProbe{position:fixed;left:-10000px;top:0;width:320px;height:180px;opacity:0;pointer-events:none}.digits.long{font-size:clamp(96px,12.8vw,200px)}.moveEditFields.videoFields{grid-template-columns:minmax(0,1fr)}.fieldError{margin:0;color:var(--danger)}.addInput.invalid{border-color:var(--danger)}@media (prefers-reduced-motion: reduce){.videoStage{transition:none}}.workGrid{transition:grid-template-columns .55s cubic-bezier(.2,.8,.2,1),gap .55s cubic-bezier(.2,.8,.2,1)}.timerCard{transition:opacity .25s ease}#app.videoStep .timerCard{opacity:0;min-width:0;pointer-events:none}.workGrid{container-type:inline-size}#app.videoStep .movementCard{height:min(56.25cqw,var(--theater-h,60vh));min-height:240px;padding:0}#app.videoStep .exerciseTitle{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}@media (min-width:901px){#app.videoStep .workGrid{grid-template-columns:minmax(0,0fr) minmax(240px,1fr);gap:0}}@media (max-width:900px){#app.videoStep .timerCard{display:none}#app.videoStep .movementCard{min-height:0}}.videoClock{display:none;margin-right:auto;font-variant-numeric:tabular-nums}#app.videoStep .videoClock{display:block}@media (prefers-reduced-motion: reduce){.workGrid,.timerCard{transition:none}}.metaCard{margin-top:16px}.metaFilters{display:flex;flex-wrap:wrap;gap:9.6px;align-items:center;margin:14.4px 0 11.2px}.metaSearch{flex:1 1 200px;min-width:0}.metaKinds{display:flex;flex-wrap:wrap;gap:6.4px}.kindChip{min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);border-radius:12px;background:var(--control-2);color:var(--text);cursor:pointer}.kindChip.active{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.metaTableWrap{overflow-x:auto}.metaTable{width:100%;border-collapse:collapse}.metaTable th{text-align:left;color:var(--muted);padding:12px 16px;border-bottom:.32px solid var(--divider);text-transform:uppercase;letter-spacing:.1em}.metaTable td{padding:12px 16px;border-top:.32px solid var(--divider);vertical-align:middle;color:var(--soft)}.metaTable tbody tr:first-child td{border-top:0}.metaTable :is(th,td):first-child{padding-left:4px}.metaTable :is(th,td):last-child{padding-right:4px}.metaTable .metaSwitchCol{width:1%;white-space:nowrap;text-align:right}.metaTable .metaSwitchCol .switch{display:inline-block;vertical-align:middle}.metaType{color:var(--text)}.metaTable tr.off .metaType{color:var(--muted)}.metaSub{display:none;margin-top:2px;color:var(--muted)}.metaEmpty td{text-align:center;color:var(--muted)}.metaBulk{display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap;margin-top:11.2px}.metaBulkActions{display:flex;gap:22.4px}@media (max-width:620px){.metaKindCol,.metaUsedCol{display:none}.metaSub{display:block}}@media (max-width:620px){.moveRow.noMeta .moveMeta,.upcomingCard.noMeta .upcomingMeta,.nextCard.noMeta #nextMeta{display:none}}.setupSummary,.addFab{display:none}.modal{position:relative}.setupSummary{align-items:center;justify-content:space-between;gap:12px;width:100%;margin:6.4px 0 4px;padding:12px 14px;border:0;border-radius:20.8px;background:var(--tile);color:var(--text);text-align:left;cursor:pointer}.setupSummaryText{display:grid;gap:2px;min-width:0}.setupSummaryText small{color:var(--muted)}.setupSummaryAction{flex:0 0 auto;color:var(--muted)}.rowChevron{flex:0 0 auto;color:var(--muted);font-size:22px;line-height:1}.addFab{position:absolute;right:16px;bottom:calc(16px + env(safe-area-inset-bottom,0px));z-index:12;place-items:center;width:56px;height:56px;padding:0;border:0;background:var(--bright);color:var(--on-bright);font-size:30px;font-weight:300;line-height:1;box-shadow:0 10px 24px var(--lift);cursor:pointer}.sheetScrim{position:absolute;top:0;right:0;bottom:0;left:0;z-index:30;background:var(--scrim);opacity:0;pointer-events:none;transition:opacity .25s ease}.sheetScrim.open{opacity:1;pointer-events:auto}.sheet{position:absolute;left:0;right:0;bottom:0;z-index:31;display:grid;gap:14px;max-height:88%;overflow-y:auto;overscroll-behavior:contain;padding:10px 16px calc(22px + env(safe-area-inset-bottom,0px));border-radius:var(--r-card) var(--r-card) 0 0;background:var(--modal);box-shadow:0 -.5px 0 var(--divider),0 -18px 40px var(--lift);transform:translateY(105%);visibility:hidden;transition:transform .42s cubic-bezier(.2,.9,.25,1.06),visibility 0s linear .42s}.sheet.open{transform:none;visibility:visible;transition:transform .42s cubic-bezier(.2,.9,.25,1.06)}.sheetGrab{justify-self:center;width:38px;height:5px;border-radius:99px;background:var(--field-line)}.sheetTitle{margin:0}.sheet .moveRow.editing{display:block;padding:0;background:none;box-shadow:none;border-radius:0}.sheetActions{justify-content:space-between;flex-wrap:wrap;gap:12.8px}.sheetSecondary,.sheetPrimary{display:flex;align-items:center;gap:6.4px}.sheetPrimary{gap:22.4px;margin-left:auto}.sheetChoices{display:grid;gap:8px}.sheetChoice{display:flex;align-items:center;gap:14px;width:100%;padding:12px;border:0;border-radius:20.8px;background:var(--row);color:var(--text);text-align:left;cursor:pointer}.sheetChoice small{display:block;margin-top:2px;color:var(--muted)}.sheetSetup .modalStatic{padding:0;background:none;border:0;overflow:visible}.sheetDone{width:100%;margin-top:14.4px}.addGhostActions{display:none;align-items:center;gap:6.4px;margin-left:auto;flex:0 0 auto}.addGhost.hovering{pointer-events:auto;cursor:grab;touch-action:none;animation:ghostWait 1.8s ease-in-out infinite}.addGhost.held{pointer-events:auto;cursor:grabbing;touch-action:none}.addGhost.hovering .addGhostActions{display:flex}.addGhost.rising{transition:transform .6s cubic-bezier(.34,1.46,.64,1),opacity .2s ease}.ghostDiscard{padding:0 10px}@keyframes ghostWait{50%{box-shadow:inset 0 0 0 1.5px var(--primary),0 22px 44px var(--lift),0 0 0 5px color-mix(in srgb,var(--primary) 22%,transparent)}}@media (max-width:620px){.modal:not(.createMode)>.modalStatic{display:none}.modal:not(.createMode) .setupSummary{display:flex}.addFab{display:grid}.movementCreatorLaunch{display:none}.exerciseScroller{padding-bottom:104px}.moveRow.phoneRow{gap:8px;min-height:60px;padding:12px 12px 12px 14px;cursor:pointer}}@media (prefers-reduced-motion: reduce){.sheet,.sheetScrim{transition:none}.addGhost.hovering{animation:none}}.modal{overflow:clip}.moveList.reordering>.moveRow:not(.dragging){transition:transform .44s cubic-bezier(.34,1.46,.64,1)}.moveRow.dragging.willReturn{opacity:.62;box-shadow:0 10px 24px var(--lift),inset 0 0 0 1.5px var(--field-line)}@media (prefers-reduced-motion: reduce){.moveList.reordering>.moveRow{transition:none}}.card,.panel,.confirmCard,.nextCard,.workoutPanel.active{padding:var(--inset)}.confirmCard,.nextCard,.upcomingCard{border-radius:var(--r-card)}.upcomingCard{padding:var(--inset)}.workoutPanel{border-radius:var(--r-tile);padding:var(--inset)}.workoutPanel.active{border-radius:var(--r-tile)}.workoutPanel.addPanel{padding:var(--inset)}.activityRow,.moveRow,.timeTile,.createPresetBtn,.createExtraToggle,.sheetChoice,.setupSummary{border-radius:var(--r-tile)}.activityRow,.moveRow{min-height:var(--tile-min);padding:var(--inset);gap:var(--inset)}.activityRow{grid-template-columns:var(--chip-size) minmax(0,1fr)}.activityRows{gap:12px}.timeTile{padding:var(--inset);gap:var(--inset)}.timeHeader{gap:var(--inset)}.createPresetBtn,.createExtraToggle{padding:var(--inset)}.moveMeta,.activityRowMeta,.setupSummaryText small,.sheetChoice small,.createExtraToggle small{color:var(--text)}.createPresetBtn.active span{color:var(--on-bright)}.moveMeta,.activityRowMeta{margin-top:0}.activityRowIcon,.activityIcon,.timeIcon,.nextIcon,.upcomingIcon{width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);font-size:20px}.navBtn,.back{display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);min-height:0;padding:0;border-radius:var(--r-inner)}.moveRow.editing{padding:var(--inset)}.moveRow.phoneRow{min-height:0;padding:var(--inset);gap:var(--inset)}.dragHandle{width:var(--chip-size);height:var(--chip-size);margin:0;border-radius:var(--r-inner);background:var(--icon-bg);color:var(--muted)}.dragHandle svg{width:var(--glyph-size);height:var(--glyph-size)}.moveRow.restItem .dragHandle{background:transparent}.dragHandle:hover{background:color-mix(in srgb,var(--icon-bg) 80%,var(--text))}.moveRow.restItem .dragHandle:hover{background:var(--hover)}.addGhost.overList,.dropSlot{border-radius:var(--r-tile)}.seg{display:flex;align-items:center;gap:4px;padding:4px;border-radius:var(--r-inner);background:var(--seg-bg);flex:0 0 auto}.segBtn{min-height:38px;padding:0 20px;border:0;border-radius:var(--r-fine);background:transparent;color:var(--text);cursor:pointer}.segBtn:hover{background:var(--hover)}.moveActions.seg{gap:4px}.moveActions .segBtn{min-width:100px}.moveActions .editBtn{background:var(--seg-on)}.moveActions .editBtn:hover{background:color-mix(in srgb,var(--seg-on) 88%,var(--text))}.moveActions .removeBtn{display:grid;place-items:center;width:40px;min-width:40px;padding:0;border:0;background:var(--danger-fill);color:var(--on-danger-fill)}.moveActions .removeBtn:hover{background:color-mix(in srgb,var(--danger-fill) 88%,white);border:0}.moveActions .removeBtn svg{display:block;width:24px;height:24px}.moveActions .removeFill{background:color-mix(in srgb,var(--on-danger-fill) 45%,transparent)}.moveActions .removeBtn.holding{color:#fff}@media (max-width:1100px){.moveActions .segBtn:not(.removeBtn){min-width:0;padding:0 14px}}.tabs.rubberTabs{padding:4px;gap:4px;border:0;border-radius:var(--r-inner);background:var(--seg-bg)}.rubberIndicator{top:4px;left:4px;height:calc(100% - 8px);border-radius:var(--r-fine);background:var(--seg-on)}.tabs.rubberTabs .tab{min-height:38px;padding:0 20px}.tabs.rubberTabs .tab.active{color:var(--text)}#app.light .rubberIndicator{box-shadow:0 1px 3px var(--lift)}.toggleTrack{width:50px;height:28px;border-radius:var(--r-inner);background:var(--line);border:.4px solid var(--line);opacity:1;transition:background .16s ease,opacity .16s ease}.toggleThumb{width:24px;height:24px;top:50%;left:1.6px;border-radius:12px 4px 4px 12px;background:var(--text);transform:translateY(-50%);transition:left .16s ease,border-radius .16s ease,background .16s ease}.globalTimingToggle input:checked+.toggleTrack{background:var(--color-accent-primary);opacity:1}.globalTimingToggle input:checked+.toggleTrack .toggleThumb{left:calc(100% - 25.6px);border-radius:4px 12px 12px 4px;background:var(--color-text-on-accent)}@media (max-width:900px){.workoutPanel:not(.addPanel){border-radius:var(--r-tile);padding:var(--inset)}}@media (max-width:620px){:host{--gutter:0px;--grid-gap:8px}}@media (max-width:620px){.modalBackdrop{padding:0}.modal,.modal:not(.createMode){width:100%;height:100%;max-height:none;border-radius:0;border:0}.modalTop{padding-top:calc(16px + env(safe-area-inset-top,0px))}.modal:not(.createMode) .exerciseScroller{padding-bottom:calc(104px + env(safe-area-inset-bottom,0px))}}#app{--group-bg:var(--card)}.modal,.sheet{--group-bg:var(--tile)}.view{padding-left:var(--gutter);padding-right:var(--gutter)}.grid{gap:var(--grid-gap)}.setupCaption{display:block;padding:0 4px 8px;color:var(--muted);text-transform:uppercase}.setupGroup,#settingsView .integrationList,#settingsView .toggleList{display:grid;gap:0;border-radius:var(--r-tile);background:var(--group-bg);overflow:hidden}.setupRow,#settingsView .integration,#settingsView .toggleRow{position:relative;display:flex;align-items:center;justify-content:space-between;gap:16px;min-height:56px;padding:12px 16px;border-radius:0;background:transparent}:is(.setupRow,#settingsView .integration,#settingsView .toggleRow):not([hidden])~:is(.setupRow,.integration,.toggleRow):before{content:"";position:absolute;top:0;left:16px;right:0;border-top:.5px solid var(--divider)}.setupRow.withSlider{display:grid;grid-template-columns:minmax(0,1fr);gap:10px;align-items:stretch}.setupRowTop{display:flex;justify-content:space-between;align-items:center;gap:16px}.setupText{display:grid;gap:2px;min-width:0}.setupValue,#settingsView .status{color:var(--muted);margin-top:0;font-variant-numeric:tabular-nums}.setupRow .rangeTrack[hidden]{display:none}.rangeTrack.setupSlider{height:28px;margin:0 2px;border:0;border-radius:0!important;background:transparent;overflow:visible}.rangeTrack.setupSlider:before{content:"";position:absolute;left:0;right:0;top:50%;height:6px;border-radius:99px;background:var(--track);transform:translateY(-50%)}.setupSlider .rangeFill{top:50%;bottom:auto;height:6px;border-radius:99px;transform:translateY(-50%)}.setupSlider .rangeFill:after{content:"";position:absolute;right:-11px;top:50%;width:22px;height:22px;border-radius:50%;background:var(--slider-fill);box-shadow:0 1px 4px var(--lift);transform:translateY(-50%)}.setupSlider:focus-within{outline:0}.setupSlider:focus-within .rangeFill:after{box-shadow:0 0 0 3px color-mix(in srgb,var(--primary) 45%,transparent)}.stepper{display:flex;align-items:center;gap:2px;padding:4px;border-radius:var(--r-inner);background:var(--seg-bg);flex:0 0 auto}.stepBtn{width:36px;height:32px;padding:0;border:0;border-radius:var(--r-fine)!important;background:transparent;color:var(--text);font:600 18px/1 var(--font);cursor:pointer}.stepBtn:hover:not(:disabled){background:var(--hover)}.stepBtn:disabled{opacity:.35;cursor:default}.stepCount{min-width:24px;text-align:center;font:600 var(--t-strong)/1 var(--font);font-variant-numeric:tabular-nums}.timeTiles.setupBlock,.modal:not(.createMode) .timeTiles.setupBlock{display:block;margin-bottom:12px}.editNameLabel{padding:0 4px}.routineSummary{margin:0 0 4px;padding:0 4px;background:none;border-radius:0;color:var(--muted)}#settingsView .card{display:grid;gap:12px;padding:0;border:0;border-radius:0;background:none}#settingsView .card+.card{margin-top:36px}#settingsView .paneTitle{margin:0 4px}#settingsView .note{margin:0 4px 4px}#settingsView .integration>div:first-child,#settingsView .toggleRow>div:first-child{display:grid;gap:2px;min-width:0}#settingsView .helpSteps{gap:0;border-radius:var(--r-tile);background:var(--group-bg);overflow:hidden}#settingsView .helpSteps li{border-radius:0;background:transparent}#settingsView .helpSteps li+li:after{content:"";position:absolute;top:0;left:52.8px;right:0;border-top:.5px solid var(--divider)}.activityCard,.insightCard{grid-column:span 3}.weatherCard,.grid.noWeather .activityCard,.grid.noWeather .insightCard,.grid.noActivity .insightCard{grid-column:span 6}.grid.noActivity.noWeather .insightCard{grid-column:span 12}@media (max-width:1199px) and (min-width:901px){.activityCard,.insightCard{grid-column:span 6}.weatherCard,.grid.noActivity .insightCard{grid-column:span 12}}@media (max-width:900px){.activityCard,.insightCard,.weatherCard,.grid .insightCard{grid-column:auto}}.jointRows{gap:0;padding:4px 0;border-radius:var(--r-tile);background:var(--tile)}.jointRows>.activityRow{background:transparent}.insightCard .jointRows{flex:1;align-content:space-evenly}.weatherCard{display:flex;flex-direction:column}.wxWide{flex:1;display:flex;flex-direction:column;gap:var(--inset)}.wxNow{display:flex;justify-content:space-between;align-items:flex-start;gap:16px}.wxCurrent{display:flex;align-items:flex-start;gap:16px;min-width:0}.wxTempBlock{display:grid;gap:4px;min-width:0}.wxTemp{display:flex;align-items:flex-start;gap:2px}.wxPlace{color:var(--muted);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.wxCondition{display:grid;gap:2px;padding:var(--inset);border-radius:var(--r-tile);background:var(--tile);flex:0 0 auto}.wxNoDays{flex:1;display:grid;place-items:center;padding:16px;border-radius:var(--r-tile);background:var(--tile);color:var(--muted)}.wxIcon{position:relative;display:block;flex:0 0 auto;width:54px;height:54px;border-radius:var(--r-inner);background:var(--icon-bg);overflow:hidden}.wxIcon>svg,.wxLayer>svg{display:block;width:100%;height:100%}:is(.wxIcon,.wxLayer).clear,:is(.wxIcon,.wxLayer).partly{background:var(--wx-clear)}:is(.wxIcon,.wxLayer).cloudy{background:var(--wx-cloudy)}:is(.wxIcon,.wxLayer).rain,:is(.wxIcon,.wxLayer).snow{background:var(--color-text-muted)}:is(.wxIcon,.wxLayer).night{background:var(--wx-night)}.wxIcon .wxBright{fill:var(--wx-cloud-bright)}.wxIcon .wxCloudLight{fill:var(--wx-cloudy)}.wxIcon .wxAccent{fill:var(--color-accent-primary)}.wxIcon.large{width:90px;height:90px;border-radius:var(--r-tile)}.wxIcon>canvas{display:block;width:100%;height:100%;image-rendering:pixelated}.wxIcon :is(.wxSunDisc,.wxMoonPath,.wxBright,.wxCloudLight,.wxDrop,.wxFlake,.wxTwinkle){transform-box:fill-box;transform-origin:center}#app.wxMotion .wxIcon .wxSunDisc{animation:wxBreathe 3.6s ease-in-out infinite}#app.wxMotion .wxIcon .wxMoonPath{animation:wxBob 5.2s ease-in-out infinite}#app.wxMotion .wxIcon :is(.wxBright,.wxCloudLight){animation:wxDrift 6.4s ease-in-out infinite}#app.wxMotion .wxIcon .wxDrop{animation:wxFall .95s linear infinite}#app.wxMotion .wxIcon .wxFlake{animation:wxSnow 3.2s linear infinite}#app.wxMotion .wxIcon .wxTwinkle{animation:wxTwinkle 2.4s ease-in-out infinite}@keyframes wxBreathe{50%{transform:scale(1.03)}}@keyframes wxBob{50%{transform:translateY(-1px)}}@keyframes wxDrift{0%,to{transform:translate(-1.5px)}50%{transform:translate(1.5px)}}@keyframes wxFall{0%{transform:translateY(-5px);opacity:0}18%,72%{opacity:1}to{transform:translateY(9px);opacity:0}}@keyframes wxSnow{0%{transform:translateY(-6px);opacity:0}20%,75%{opacity:1}to{transform:translate(1.5px,8px);opacity:0}}@keyframes wxTwinkle{50%{opacity:.35}}.wxLayer{position:absolute;top:0;right:0;bottom:0;left:0;display:block}.wxLayer.wxOut{animation:wxFadeOut .7s cubic-bezier(.3,0,1,1) forwards}@keyframes wxFadeOut{to{opacity:0}}.wxDeg{font-family:var(--font-tile);font-size:var(--t-wx-temp);font-weight:var(--w-medium);line-height:1;letter-spacing:-.02em}.wxUnit,.wxRange{font-family:var(--font-tile);font-size:var(--t-wx-range);font-weight:300;line-height:1.25;letter-spacing:0}.wxPlace,.wxCondName{font-family:var(--font-tile);font-size:var(--t-tile-title);font-weight:var(--w-semibold);line-height:var(--lh-tile-title);letter-spacing:0}.wxNoDays{font-family:var(--font-tile);font-size:var(--t-tile-detail);font-weight:var(--w-regular);line-height:var(--lh-tile-detail);letter-spacing:0}.wxNow[role=button],.wxDayTile{cursor:pointer;border-radius:var(--r-tile)}:is(.wxNow,.wxDayTile,.wxStripDay):focus-visible{outline:2px solid var(--color-border-focus);outline-offset:2px}.wxStrip{position:relative;flex:1;display:flex}.wxStripDays{flex:1;display:grid;grid-template-columns:repeat(6,minmax(0,1fr))}.wxStripDay{display:flex;flex-direction:column;align-items:center;justify-content:space-between;gap:var(--inset);min-width:0;padding:var(--inset) 0;border-radius:var(--r-tile);cursor:pointer}@media (hover:hover){.wxStripDay:hover{background:var(--color-state-hover)}}.wxStripGap{align-self:stretch;height:90px}.wxStripDay .wxTemps{display:grid;justify-items:center;gap:8px}.wxStripSky{position:absolute;left:0;top:calc(var(--inset) * 2 + var(--lh-tile-detail));width:100%;height:90px;border-radius:var(--r-inner);pointer-events:none;image-rendering:pixelated}.wxStripDay .wxDayName,.wxStripDay .wxHigh,.wxGraphDays{font-family:var(--font-tile);font-size:var(--t-tile-detail);font-weight:var(--w-regular);line-height:var(--lh-tile-detail);letter-spacing:0}.wxStripDay .wxLow{font-family:var(--font-tile);font-size:var(--t-tile-title);font-weight:var(--w-semibold);line-height:var(--lh-tile-title);color:var(--muted)}.wxBackdrop{z-index:170}.wxDialogCard{width:min(860px,100%);display:grid;gap:var(--inset)}.wxDialogHead{display:flex;align-items:center;justify-content:space-between;gap:var(--inset);padding-left:var(--inset)}.wxDialogHead .activityTitle{margin:0}.wxDialogClose{background:transparent}.wxGraph{display:grid;gap:8px;touch-action:pan-y;cursor:ew-resize;border-radius:var(--r-tile);user-select:none;-webkit-user-select:none}.wxGraph:focus{outline:none}.wxGraph:focus-visible{outline:2px solid var(--color-border-focus);outline-offset:4px}.wxGraphDays{display:grid;grid-template-columns:repeat(6,minmax(0,1fr));text-align:center;color:var(--muted)}.wxGraphSky{position:relative;height:200px;border-radius:var(--r-tile);overflow:hidden;background:var(--tile)}.wxGraphSky>canvas{display:block;width:100%;height:100%;image-rendering:pixelated}.wxGraphLine{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;overflow:visible;pointer-events:none}.wxLineLabel{font-family:var(--font-tile);font-size:14px;font-weight:var(--w-semibold);text-anchor:middle;paint-order:stroke;stroke-width:3px;stroke-linejoin:round}@media (max-width:620px){.wxGraphSky{height:160px}.wxDialogNow{flex-wrap:wrap}}.segBtn{transition:background .15s ease,transform .18s cubic-bezier(.34,1.46,.64,1),box-shadow .15s ease,color .15s ease}.segBtn:hover{background:transparent}@media (hover:hover){.segBtn:hover{background:var(--color-state-hover)}}.tabs.rubberTabs .tab.active:hover{background:transparent}.segBtn:active{background:var(--color-state-pressed);transform:scale(.97)}.segBtn:focus-visible{outline:none;box-shadow:inset 0 0 0 2px var(--color-border-focus)}.segBtn:disabled{opacity:.4;cursor:default}.moveActions.seg{background:transparent;transition:background .18s ease}.moveActions.seg:focus-within{background:var(--seg-bg)}@media (hover:hover){.moveActions.seg:hover{background:var(--seg-bg)}}.moveActions .editBtn,.moveActions .editBtn:hover{background:transparent}.moveActions .removeBtn,.moveActions .removeBtn:hover{background:transparent;color:var(--text)}@media (hover:hover){.moveActions .editBtn:hover{background:var(--color-state-hover)}.moveActions .removeBtn:hover{background:var(--danger-fill);color:var(--color-text-on-danger)}}.moveActions .removeBtn:active{background:linear-gradient(var(--color-state-pressed-on-bright),var(--color-state-pressed-on-bright)),var(--danger-fill);color:var(--color-text-on-danger)}.moveActions .removeBtn.holding{background:var(--danger-bg);color:var(--color-text-on-danger)}.moveActions .removeFill{background:var(--danger-fill)}.activityIcon{color:var(--muted)}.activityRowIcon,.timeIcon,.nextIcon,.upcomingIcon{color:var(--text)}.wxTempBlock{padding-top:6px}.motionRangeWrap input[type=range]{accent-color:var(--bright);background:transparent}', Rp = '#app{--hc-on-accent:#f4f3f3;--hc-open-edge:rgba(255,255,255,.1);--hc-hair:inset 0 0 0 .2px var(--line),inset 0 -.2px 0 var(--line);--hc-hair-all:inset 0 0 0 .4px var(--line)}#app.light{--hc-open-edge:#e3e3e3}#homeView .card{padding:var(--inset);border-radius:var(--r-card);box-shadow:var(--hc-hair)}#homeView .card:has(>.activityHeader){padding-top:14px;box-shadow:var(--hc-hair-all)}#homeView .activityCard{min-height:0}#homeView .activityHeader{height:28px;padding:0 18px;gap:22px;margin-bottom:10px}#homeView .activityHeader .activityIcon{display:none}:is(#homeView,.tfMoreBackdrop,.tfEditTray,.tfMiniPhone) .activityTitle{font:500 18px/1.2 var(--font-tile);font-style:normal;letter-spacing:-.01em;text-box:none}#homeView .card .activityRows{gap:0}#homeView .card .jointRows{padding:0;background:transparent}#homeView .card .activityRow{min-height:var(--tile-min);padding:var(--inset);gap:12px;border-radius:var(--r-tile);grid-template-columns:var(--chip-size) minmax(0,1fr);background:transparent}#homeView .activityRowIcon{width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);background:var(--primary);color:var(--hc-on-accent)}#homeView .activityRowName{font:600 14px/20px var(--font-tile)}#homeView .activityRowMeta{font:400 16px/1.15 var(--font);margin:0}#homeView .card .activityRow.tap{cursor:pointer}#homeView .card .activityRow:is(.tap,:has(.tfName)){transition:background .15s ease,box-shadow .15s ease}#homeView .card .activityRow:is(.tap,:has(.tfName)):hover{background:var(--tile);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line)}#homeView .weatherCard{padding:20px}#homeView .wxWide{gap:16px}#homeView .wxIcon.large{border-radius:28px}#homeView .wxCondition{display:flex;flex-direction:column;justify-content:space-between;gap:10px;padding:10px 16px;border-radius:28px}#homeView .wxCondName{font:400 18px/1.2 var(--font)}#homeView .weatherCard .activityRow .wxIcon{width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner)}@media (max-width:620px){#homeView .weatherCard{padding:var(--inset)}#homeView .wxIcon.large{width:60px;height:60px;border-radius:20px}#homeView .wxDeg{font-size:46px}#homeView .wxRange{font-size:20px}}.tfLabel{grid-column:1/-1}.tfCard{grid-column:span 6;align-self:start;display:flex;flex-direction:column}.tfIcon{display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);flex:none;--mdc-icon-size:var(--glyph-size)}#app.house{--hc-icon:#3a3a3a;--hc-icon-ink:var(--muted)}#app.house.light{--hc-icon:#e6e6e6}#app.house #homeView .activityRowIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}@media (max-width:620px){#app.house{--grid-gap:16px}#app.house .settingsTitle{font-size:32px}#app.house .tfAreaHead .back{margin-block:calc((32px * .92 - 40px) / 2)}#app.house .tfAreaHead .back svg{width:24px;height:24px}}@container wb-bento (width < 652px){#app.house .wbBento{gap:var(--grid-gap)}#app.house .wbItem[data-size=tile]{width:calc((100% - var(--grid-gap)) / 2)}}#app.house #homeView{overflow-anchor:none}:is(.tfCard .activityRow,.tfOpenHead) .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfCard .activityRow{display:grid;align-items:center}#homeView section.tfCard.open:has(>.activityHeader){padding:var(--inset)}.tfCard.open>.activityHeader{display:none}.tfOpen{flex:1;display:flex;flex-direction:column;gap:10px;padding:var(--inset);border-radius:28px;background:var(--tile);box-shadow:inset 0 0 0 .4px var(--hc-open-edge)}.tfOpenHead{display:flex;align-items:center;gap:12px}.tfOpenHead>div:nth-child(2){flex:1;min-width:0}.tfBack{display:grid;place-items:center;width:34px;height:34px;padding:0;border:0;background:transparent;color:var(--text);cursor:pointer}.tfBack .icon{width:34px;height:34px}.tfGraph{display:block;width:100%;flex:1;min-height:80px}.tfGraph text{fill:var(--muted);font:400 11px var(--font)}.tfAction{display:flex;flex-direction:column;gap:14px;padding:18px;border-radius:28px;background:var(--card);box-shadow:var(--hc-hair)}.tfActionHead{display:flex;align-items:center;gap:12px;min-width:0}.tfAction>.tfActionHead{margin-bottom:auto}.tfActionHead>:is(div,.tfName){min-width:0}.tfAction .tfIcon{border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer}.tfAction.on[data-light] .tfIcon{background:var(--light);color:var(--light-ink)}.tfBar{position:relative;height:46px;border-radius:16px;background:var(--tile);overflow:hidden;cursor:pointer;touch-action:pan-y;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none}:is(.tfBar,.tfTilt).held{outline:2px solid var(--primary);outline-offset:-2px}.tfBar i{position:absolute;inset:0 auto 0 0;background:linear-gradient(90deg,#ffc247,#fa0)}.tfBar .was{position:absolute;top:12px;bottom:12px;width:2px;margin-left:-1px;border-radius:1px;background:var(--text);opacity:.22}.tfBar:focus-visible{outline:2px solid var(--primary);outline-offset:2px}.tfBlock{grid-column:span 6;align-self:start;display:grid;align-content:start;min-width:0;container-type:inline-size}.tfActions{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:10px}.tfAction{grid-column:span 2}@container (max-width:289px){.tfActions{grid-template-columns:1fr}.tfAction{grid-column:auto}}.tfBar:after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;box-shadow:var(--hc-hair-all);pointer-events:none}.tfAction :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#app.house .moveSection{display:none}#app.house #settingsView :is(.rubberTabs:not(.houseTabs),.settingsPane:not(#housePane)){display:none}#app.house #housePane{display:block}#housePane .houseTab{display:none}#housePane .houseTab.active{display:block}#housePane .toggleRow:has(>.switch){flex-direction:row-reverse;justify-content:flex-end}#housePane .toggleRow:has(>.switch)>div:first-child{flex:1}#housePane .settingsSelect{flex:none;width:220px}@media (max-width:620px){#housePane .settingsSelect{width:150px}}#housePane .wxLayoutBtn:disabled{opacity:.4;cursor:default}.tfTableNote{margin:0 0 12px;padding:10px 14px;border-radius:var(--r-inner);background:color-mix(in srgb,var(--primary) 14%,transparent);color:var(--text)}.tfLightTable td{white-space:nowrap}.tfLightTable td strong{font:600 14px/20px var(--font-tile)}.tfLightTable .settingsSelect{min-width:150px}.tfLightTable .settingsSelect:disabled{opacity:.4}.tfDacPad{min-width:0}.tfDacPad>dual-controller-v3{display:block}#app.house #homeView .grid>:is(#movementLabel,.activityCard,.insightCard,.feelSection){display:none}#app.house .checkinTab,#app.houseBento #weatherCard{display:none}.tfBento{grid-column:1/-1;min-width:0}.tfIcon.art{background-size:cover;background-position:center}.tfBar.ct{background:linear-gradient(90deg,#ff9e45,#ffd3a3 32%,#fff7ee 55%,#d7e7ff)}.tfBar.hue{background:linear-gradient(90deg,red,#ff0 17%,#0f0 33%,#0ff,#00f 67%,#f0f 83%,red)}.tfBar b{position:absolute;top:8px;bottom:8px;width:4px;margin-left:-2px;border-radius:2px;background:#fff;box-shadow:0 0 0 .5px #0006,0 1px 3px #00000040}.tfAction:not(.on) .tfBar:is(.ct,.hue){opacity:.45}.tfBar:is(.pos,.vol) i{background:var(--primary)}:is(.tfStep,.tfSeg,.tfBlocks,.tfTilt,.tfChips){font-family:var(--font-tile)}.tfStep{display:flex;align-items:center;height:46px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all)}.tfStep button{flex:0 1 46px;min-width:32px;height:46px;min-height:0;padding:0;border:0;border-radius:16px;background:transparent;color:var(--text);cursor:pointer}.tfStep svg{display:block;width:22px;height:22px;margin:auto;fill:currentColor}.tfStep output{flex:1 0 auto;white-space:nowrap;text-align:center;font:500 20px/1.2 var(--font-tile);font-variant-numeric:tabular-nums}.tfSeg{display:flex;gap:4px;height:46px;padding:4px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all)}.tfSeg button{flex:1;min-width:0;min-height:0;padding:0 6px;border:0;border-radius:12px;background:transparent;color:var(--muted);font:600 14px/20px var(--font-tile);cursor:pointer;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfSeg button[aria-pressed=true]{background:var(--bright);color:var(--on-bright)}.tfSeg button:not([aria-pressed]){color:var(--text)}.tfSeg button:disabled{opacity:.4;cursor:default}.tfSeg svg{display:block;width:22px;height:22px;margin:auto;fill:currentColor}.tfChips{display:flex;flex-wrap:wrap;gap:8px}.tfChips button{height:40px;min-height:0;padding:0 14px;border:0;border-radius:16px;background:var(--tile);color:var(--text);font:600 14px/20px var(--font-tile);cursor:pointer;box-shadow:var(--hc-hair-all)}.tfChips button[aria-pressed=true]{background:var(--bright);color:var(--on-bright)}.tfCard .tfPlug .tfIcon{border:0;padding:0;cursor:pointer}.tfCardGraph{height:120px;padding:0 var(--inset)}.tfCardGraph .tfGraph{height:100%}.tfAction.on[data-tone=alarm] .tfIcon{background:#e53935;color:#fff}.tfName{flex:1;display:block;min-width:0;min-height:0;padding:0;border:0;border-radius:0;background:none;color:inherit;font:inherit;text-align:left;cursor:pointer}.tfName>span{display:block}.tfTitleBtn{min-height:0;padding:0;border:0;border-radius:0;background:none;color:inherit;text-align:left;cursor:pointer}.tfAreas{grid-column:1/-1;min-width:0}.tfAreaPanel .workoutPanelTop>div{min-width:0}.tfAreaPanel .sourceTag{margin-right:4px}.tfBlocks{position:relative;display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:4px;height:46px;padding:4px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all);cursor:pointer;touch-action:none;-webkit-user-select:none;user-select:none;container:blocks/inline-size}.tfBlocks>span{position:relative;display:grid;place-items:center;overflow:hidden;border-radius:4px;transition:background .12s}.tfBlocks>span:first-child{border-radius:12px 4px 4px 12px}.tfBlocks>span:nth-child(4){border-radius:4px 12px 12px 4px}.tfBlocks:not(.fine)>span:hover{background:color-mix(in srgb,var(--text) 7%,transparent)}.tfBlocks i{position:absolute;inset:0 auto 0 0;border-radius:inherit;background:var(--primary)}.tfBlocks b{position:relative;color:var(--text);font:600 14px/1 var(--font-tile);transition:opacity .15s}.tfBlocks b small{font:inherit}@container blocks (width < 164px){.tfBlocks b small{display:none}}.tfBlocks b.lit{color:#fff}.tfBlocks.fine b{opacity:0}.tfTip{position:absolute;bottom:calc(100% + 8px);z-index:2;transform:translate(-50%);padding:3px 8px;border-radius:7px;background:var(--text);color:var(--card);font:700 12px/16px var(--font-tile);white-space:nowrap;pointer-events:none;opacity:0;transition:opacity .12s}.tfBlocks.fine .tfTip{opacity:1}.tfTilt{position:relative;display:flex;align-items:center;justify-content:space-between;height:46px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all);cursor:pointer;touch-action:pan-y;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none}.tfTilt i{position:absolute;top:4px;bottom:4px;left:4px;border-radius:12px;background:var(--primary)}.tfTilt span{position:relative;padding:0 16px;color:var(--text);font:600 14px/1 var(--font-tile)}.tfTilt span.lit{color:#fff}:is(.tfBlocks,.tfTilt):focus-visible{outline:2px solid var(--primary);outline-offset:2px}.tfCoverBtns svg{fill:none}.tfCoverArt{align-self:center;width:min(294px,100%,max(150px,100vh - 520px));aspect-ratio:1;border-radius:24px;touch-action:none;-webkit-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent}.tfCoverArt.x{cursor:ew-resize}.tfCoverArt.y{cursor:ns-resize}.tfCoverArt:focus-visible{outline:none;box-shadow:0 0 0 3px var(--primary)}.tfCoverArt svg{display:block;width:100%;height:100%}.tfSide{grid-column:1/-1;align-self:start;min-width:0}.tfSideLabel{display:flex;align-items:baseline;justify-content:space-between;gap:16px;margin-right:22.4px}#homeView .tfSide.tfSums .card .activityRows{grid-template-columns:repeat(auto-fill,minmax(min(150px,calc(50% - 10px)),1fr))}#homeView .tfSide.tfFavs .card .activityRows{grid-template-columns:repeat(auto-fill,minmax(min(240px,calc(50% - 10px)),1fr))}#homeView .tfSum .tfIcon{background:var(--sum,var(--hc-icon));color:var(--sum-ink,var(--hc-icon-ink))}.tfSide :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfSide .activityRow>div{min-width:0}:is(.tfCard,.tfMoreList,.tfMoreActions) .tfPlug.on[data-light] .tfIcon{background:var(--light);color:var(--light-ink)}:is(.tfCard,.tfMoreList,.tfMoreActions) .tfPlug.on[data-tone=alarm] .tfIcon{background:#e53935;color:#fff}.tfMoreList{display:flex;flex-direction:column;gap:14px}.tfMoreGroupName{margin:0 0 4px 10px;color:var(--muted);font:500 13px/18px var(--font)}.tfMoreTiles{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}.tfMoreTiles.single{grid-template-columns:1fr}.tfMoreList .activityRow{display:grid;grid-template-columns:var(--chip-size) minmax(0,1fr);align-items:center;gap:12px;min-height:var(--tile-min);padding:var(--inset);border-radius:var(--r-tile);transition:background .15s ease}.tfMoreList .activityRow:hover{background:var(--tile)}.tfMoreList .activityRow .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfMoreList .tfPlug .tfIcon{border:0;padding:0;cursor:pointer}.tfMoreList .tfPick{grid-template-columns:var(--chip-size) minmax(0,1fr) auto}.tfMoreList :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfStar{display:grid;place-items:center;width:34px;height:34px;min-height:0;padding:0;border:0;background:none;color:var(--muted);cursor:pointer}.tfStar[aria-pressed=true]{color:#fa0}.tfStar svg{width:24px;height:24px}.tfMoreHead .activityTitle{flex:1;min-width:0}.tfMoreBackdrop{position:fixed;top:0;right:0;bottom:0;left:0;z-index:180;display:grid;place-items:center;padding:16px;background:#00000073}.tfMoreBackdrop,.tfMore,.tfMoreSideInner,.tfMoreSideBody{overscroll-behavior:contain}.tfMoreBackdrop[hidden]{display:none}.tfMore{flex:none;width:440px;max-width:100%;min-height:0;overflow:auto;display:flex;flex-direction:column;gap:14px;padding:20px;border-radius:var(--r-card);background:var(--card);box-shadow:var(--hc-hair-all)}.tfMoreHead{display:flex;align-items:center;justify-content:space-between;gap:12px;min-height:34px}.tfMoreState{font:500 28px/1.15 var(--font-tile);letter-spacing:-.01em}.tfMoreSub{margin-top:3px;color:var(--muted);font:500 13px/18px var(--font)}.tfMoreState.live{color:var(--primary)}.tfMoreRows{display:flex;flex-direction:column}.tfMoreRow{display:flex;justify-content:space-between;gap:16px;padding:10px 0;box-shadow:inset 0 -.4px 0 var(--line);font:400 14px/20px var(--font)}.tfMoreRow span:first-child{color:var(--muted)}.tfMoreNote{color:var(--muted);font:400 12px/16px var(--font)}@media (max-width:620px){.tfMoreBackdrop{place-items:end stretch;padding:0}.tfMorePair{width:100%;max-height:85vh}.tfMore{width:100%;border-radius:var(--r-card) var(--r-card) 0 0}}@media (max-width:1199px) and (min-width:901px){.tfCard{grid-column:span 6}.tfBlock{grid-column:span 12}}@media (max-width:900px){.tfCard,.tfBlock{grid-column:auto}}#app.showDensity #homeView :is(.card,.tfAction){position:relative;outline:1px dashed color-mix(in srgb,var(--primary) 70%,transparent);outline-offset:-1px}#app.showDensity #homeView :is(.card,.tfAction):after{content:attr(data-h);position:absolute;top:6px;right:12px;z-index:5;padding:2px 8px;border-radius:99px;background:var(--primary);color:#fff;font:600 11px/16px var(--font);pointer-events:none}.densityBadge{position:fixed;left:50%;bottom:calc(16px + env(safe-area-inset-bottom,0px));z-index:80;transform:translate(-50%);display:flex;align-items:center;gap:10px;padding:8px 16px;border-radius:99px;background:var(--bright);color:var(--on-bright);font:600 13px/18px var(--font);box-shadow:0 6px 20px #00000040;pointer-events:none;white-space:nowrap}.densityBadge[hidden]{display:none}.densityBadge b{font-variant-numeric:tabular-nums}.densityBadge small{font-weight:400;opacity:.75}#homeView .card:is(.activityCard,.insightCard,.tfCard,.weatherCard){container-type:inline-size}#homeView .card:is(.activityCard,.insightCard,.tfCard,.weatherCard) .activityRows{grid-template-columns:repeat(2,minmax(0,1fr));gap:0}@container (max-width:279px){#homeView .card .activityRows{grid-template-columns:1fr}}@media (min-width:1200px){#homeView .grid>.card:is(.activityCard,.insightCard){grid-column:span 6}#homeView .grid>.weatherCard{grid-column:span 6}}.tfMorePair{position:relative;display:flex;align-items:stretch;max-width:100%;max-height:calc(100vh - 32px);max-height:calc(100dvh - 32px)}#app[data-more=sheet] .tfMoreBackdrop{place-items:end center;padding:0}#app[data-more=sheet] .tfMorePair{max-height:85vh;animation:tfSheetIn .28s cubic-bezier(.2,.7,.3,1)}#app[data-more=sheet] .tfMorePair.still{animation:none}#app[data-more=sheet] .tfMore{width:min(640px,100vw)}#app[data-more=sheet] :is(.tfMore,.tfMoreSideInner){border-radius:var(--r-card) var(--r-card) 0 0}@keyframes tfSheetIn{0%{transform:translateY(100%)}}.tfDetailsBtn{display:flex;flex:none;align-items:center;justify-content:space-between;gap:12px;width:100%;height:46px;min-height:0;padding:0 12px 0 16px;border:0;border-radius:16px;background:var(--tile);color:var(--text);font:600 14px/20px var(--font-tile);cursor:pointer}.tfDetailsBtn svg{width:20px;height:20px;transition:transform .2s ease}.tfDetailsBtn[aria-expanded=true] svg{transform:rotate(180deg)}.tfMoreSide{position:absolute;top:0;bottom:0;left:100%;width:0;overflow:hidden;visibility:hidden;transition:width .28s cubic-bezier(.2,.7,.3,1),visibility 0s linear .28s}.tfMorePair.details .tfMoreSide{width:312px;visibility:visible;transition:width .28s cubic-bezier(.2,.7,.3,1)}.tfMoreSideInner{box-sizing:border-box;display:flex;flex-direction:column;gap:14px;width:300px;height:100%;margin-left:12px;padding:20px;overflow:auto;border-radius:var(--r-card);background:var(--card);box-shadow:var(--hc-hair-all)}.tfMoreSideInner .tfMoreHead{justify-content:flex-start}.tfMorePair.over .tfMoreSide{position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;width:auto;transform:translate(24px);opacity:0;transition:transform .25s cubic-bezier(.2,.7,.3,1),opacity .2s ease,visibility 0s linear .25s}.tfMorePair.over.details .tfMoreSide{width:auto;transform:none;opacity:1;transition:transform .25s cubic-bezier(.2,.7,.3,1),opacity .2s ease}.tfMorePair.over .tfMoreSideInner{width:100%;margin:0}@media (max-width:620px){.tfMoreSideInner{border-radius:var(--r-card) var(--r-card) 0 0}}@media (prefers-reduced-motion:reduce){.tfMorePair,.tfMoreSide{animation:none!important;transition:none!important}}#homeView .workoutPanel.tfAreaPanel{padding:18px 18px 10px}.tfAreaPanel .workoutPanelTop{justify-content:flex-start;gap:14px;padding:0}.tfAreaPanel .panelExpanded{justify-content:flex-start;gap:16px}.tfAreaPanel .icon{width:22px;height:22px}.tfATitle{display:flex;flex-direction:column;align-items:flex-start;min-width:0}#app .tfAName{max-width:100%;min-height:0;padding:0;border:0;border-radius:6px;background:none;color:var(--text);font:700 24px/1.2 var(--font-tile);letter-spacing:-.01em;text-align:start;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;cursor:pointer}.tfAreaIcon{flex:none;border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);--mdc-icon-size:22px}button.tfAreaIcon{cursor:pointer}.tfAreaGlyph{display:grid;place-items:center}.tfAreaHead{grid-column:1/-1;margin-bottom:0}#app.tfAreaOpen:not(.tfWeatherOpen) #homeView .grid>.tfBento{display:none}#app.tfWeatherOpen #homeView .grid>.tfBento .wbBento{margin:0;padding:0;justify-content:flex-start}#app.tfWeatherOpen .tfBento.tfPegs .wbBento{display:grid;grid-template-columns:repeat(var(--peg-n),var(--peg-w));grid-auto-rows:60px;grid-auto-flow:row dense;align-items:stretch;gap:16px;max-width:none}#app.tfWeatherOpen .tfBento.tfPegs .wbItem{width:auto;min-height:0;align-self:stretch;display:flex;flex-direction:column}#app.tfWeatherOpen .tfBento.tfPegs .wbItem>*{flex:1;min-height:0}#app.tfWeatherOpen .tfBento.tfPegs .wbItem[data-size=wide]{grid-column:span 2;grid-row:span 5}#app.tfWeatherOpen .tfBento.tfPegs .wbItem[data-size=double]{grid-column:span 2;grid-row:span 4}#app.tfWeatherOpen .tfBento.tfPegs .wbItem[data-size=tile]{grid-column:span 1;grid-row:span 4}#app.tfWeatherOpen .tfBento.tfPegs .wbCard.wbSquare{aspect-ratio:auto}#app.tfWeatherOpen .tfBento.tfPegs .wbWeather .wbNow{margin-bottom:auto}#app.tfWeatherOpen .tfBento.tfPegs :is(.wbStripScroll,.wbBars .wbDayBars,.wbBars.wbTabbed .wbDayBars){min-height:0}.tfABig{display:flex;flex-direction:column;align-items:flex-start;gap:4px;margin-top:auto;min-height:0;height:auto;padding:0;border:0;border-radius:8px;background:none;color:var(--text);text-align:start;cursor:pointer}.tfABigMain{font:500 64px/1 var(--font-tile);letter-spacing:-.03em;white-space:nowrap}.tfABigMain.long{font-size:40px}.tfABigUnit{margin-inline-start:6px;font-size:24px;letter-spacing:0}.tfABigSub{color:var(--muted);font:400 16px/1.2 var(--font)}.tfATiles{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}.tfATile{display:grid;grid-template-columns:var(--chip-size) minmax(0,1fr);align-items:center;gap:12px;min-height:var(--tile-min);padding:var(--inset);border-radius:var(--r-tile)}.tfATile>:is(div,.tfName):last-child{min-width:0}.tfATile .tfIcon{border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer}.tfATile.on[data-light] .tfIcon{background:var(--light);color:var(--light-ink)}.tfATile :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfACollapsed{flex-direction:column;justify-content:space-between;padding:18px 0 10px;container-type:inline-size}.tfACTop{display:flex;flex-direction:column;align-items:center;gap:6px;max-width:calc(100% - 20px)}.tfACMain{max-width:calc(100% - 20px);font:200 32px/1.2 var(--font-tile);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfACName{max-width:100%;font:600 16px/17.5px var(--font);letter-spacing:-.1px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfACTiles{display:grid;grid-template-columns:repeat(2,60px);min-height:60px}.tfACTiles:has(>:nth-child(3)){margin-top:-60px}.tfACTile{display:grid;place-items:center;width:60px;height:60px}.tfACTile .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfACTile .tfIcon[data-light]{background:var(--light);color:var(--light-ink)}.tfACTile .tfIcon.alert{background:#e53935;color:#fff}@container (max-width:119px){.tfACTiles{grid-template-columns:60px}.tfACTile:nth-child(n+3){display:none}.tfACTiles:has(>:nth-child(2)){margin-top:-60px}}.tfMore.wide{width:min(1040px,100vw - 32px);padding:40px;gap:28px;background:var(--bg)}#app[data-more=sheet] .tfMore.wide{width:min(1040px,100vw)}.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreSideInner{gap:28px;padding:40px;background:var(--bg)}#app :is(.tfMore.wide>.tfMoreHead,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreHead){margin:-20px -20px 0 0}#app :is(.tfMore.wide>.tfMoreHead,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreHead) .activityTitle{font-size:24px}@media (max-width:620px){#app :is(.tfMore.wide>.tfMoreHead,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreHead){margin:0}}@media (min-width:621px){#app:not([data-more=sheet]) .tfMoreBackdrop.wide{place-items:start center}}.tfMoreNowRow{display:flex;align-items:center;justify-content:space-between;gap:16px}.tfMore.wide .tfMoreGroup{display:flex;flex-direction:column;gap:14px}.tfMore.wide .tfMoreGroupName{margin:0;color:var(--text);font:400 18px/1.2 var(--font);letter-spacing:-.01em}.tfMoreActions{display:grid;grid-template-columns:repeat(auto-fill,minmax(min(260px,100%),1fr));gap:20px}.tfMoreActions .tfAction{grid-column:auto}.tfMoreActions>.activityRow{display:grid;grid-auto-flow:column;grid-template-columns:auto minmax(0,1fr);align-items:center;align-content:start;gap:12px;min-width:0;padding:18px;border-radius:28px;background:var(--card);box-shadow:var(--hc-hair)}.tfMoreActions>.activityRow .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfMoreActions>.tfPlug .tfIcon{border:0;padding:0;cursor:pointer}.tfMoreActions>.activityRow :is(.activityRowName,.activityRowMeta){display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfMoreActions>.activityRow.alert .activityRowMeta{color:var(--danger)}@media (max-width:620px){.tfMore.wide,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreSideInner{width:100%;padding:20px 16px;gap:20px}}#app.tfDash #homeView{max-width:none;container:tfdash/inline-size}#app.tfDash #homeView .grid{display:flex;flex-wrap:wrap;align-items:flex-start;align-content:flex-start}#app.tfDash .tfDashTitle{order:1!important;flex:0 0 100%;margin:0}#app.tfDash .tfDashBarRow{order:2!important;flex:0 0 100%;display:flex;min-width:0}#app.tfDash .tfDash-wx{order:var(--o,3)!important}#app.tfDash .tfAreas{order:var(--o,4)!important}#app.tfDash .tfDash-favs{order:var(--o,5)!important}#app.tfDash .tfDash-act{order:var(--o,6)!important}#app.tfDash .tfDash-energy{order:var(--o,7)!important}#app.tfDash .tfDash-avg{order:var(--o,8)!important}#app.tfDash :is(.tfDash-aq,.tfDash-pollen,.tfDash-radar){order:var(--o,8)!important}#app.tfDash .tfDashTiles>*{order:var(--o,9)}#app.tfDash :is(.tfDash-wx,.tfDash-favs,.tfDash-act,.tfDash-energy,.tfDash-avg){flex:1 1 460px;max-width:520px;min-width:0}@container tfdash (width < 640px){#app.tfDash :is(.tfDash-wx,.tfDash-favs,.tfDash-act,.tfDash-energy,.tfDash-avg){flex-basis:100%;max-width:none}}#app .tfNotAdded{display:none!important}#app.tfDash .tfAreas{flex:none;width:min(var(--areas-w,1131px),100%)}@media (min-width:901px){#app.tfDash .tfAreaGallery{overflow-x:auto;scrollbar-width:none}#app.tfDash .tfAreaGallery::-webkit-scrollbar{display:none}#app.tfDash .tfAreaPanel.active{flex:1 0 409px}#app.tfDash .tfAreaPanel:not(.active){flex:0 0 128px}}#app.tfDash .tfDash-bar{flex:none;max-width:100%}#app.tfDash #homeView .card.tfDash-bar{container-type:normal}#homeView .card.tfDash-bar .activityRows{display:grid;grid-template-columns:repeat(var(--bar-cols,6),auto)}#homeView .card.tfDash-bar .activityRow{min-width:200px}#app.tfDash .tfDash-bar :is(.activityRowName,.activityRowMeta){overflow:visible;text-overflow:clip}@container tfdash (width < 640px){#app.tfDash .tfDash-bar{width:100%}#homeView .card.tfDash-bar .activityRows{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}#homeView .card.tfDash-bar .activityRow{min-width:0}#app.tfDash .tfDash-bar :is(.activityRowName,.activityRowMeta){overflow:hidden;text-overflow:ellipsis}#app.tfDash .tfDashTitle{padding:0 16px;box-sizing:border-box}}#app.tfDash .tfDashCard:not(.tfDash-bar){container-type:inline-size}#homeView .card.tfDash-act .activityRows{grid-template-columns:minmax(0,1fr)}#homeView .card.tfDash-act>.activityRows{flex:none;margin-top:auto;max-height:300px;overflow-y:auto;overscroll-behavior:contain;scroll-snap-type:y mandatory;scroll-behavior:smooth;scrollbar-width:thin;scrollbar-color:color-mix(in srgb,var(--text) 25%,transparent) transparent}#homeView .card.tfDash-act>.activityRows>.activityRow{scroll-snap-align:start}#homeView .card.tfDash-energy .activityRows{grid-template-columns:repeat(auto-fit,minmax(140px,1fr))}.tfDashCard :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfDashCard .activityRow>*{min-width:0}.tfDashNone{margin:0;padding:var(--inset) 18px;color:var(--muted)}.tfDashBento{display:flex;flex-direction:column;min-width:0}#app:not(.tfDash) .tfDashBento{display:none}.tfDashBento:not(:has(.wbItem:not([hidden]))){display:none}.tfDashBento .wb{flex:1;display:flex;flex-direction:column;min-width:0}.tfDashBento .wbBento{flex:1;max-width:none;margin:0;padding:0;display:flex;align-items:stretch}#app .tfDashBento .wbItem{width:100%;align-self:stretch;display:flex;flex-direction:column}#app.house .tfDashBento .wbItem[data-size]{width:100%}#app .tfDashBento .wbItem>.wbCard{flex:1;min-height:0}.tfDash-wx .wbCondition{display:none}#app.tfDash .tfDashTiles{display:contents}.tfDashTiles>:is(.tfAction,.tfDac){flex:none;align-self:stretch;width:calc((100% - var(--grid-gap,8px)) / 2);min-width:0;grid-column:auto}#app.tfBoard #homeView .grid{display:block;position:relative}#app.tfBoard .tfBoardItem{position:absolute;z-index:1;margin:0;max-width:none;min-height:0;box-sizing:border-box}#app.tfEditing.tfBoardReady .tfBoardItem{transition:left .25s cubic-bezier(.2,.7,.3,1),top .25s cubic-bezier(.2,.7,.3,1),height .25s cubic-bezier(.2,.7,.3,1)}#app.tfBoard .tfBoardHidden{display:none!important}#app.tfBoard .tfDashBento .wbWeather .wbNow{margin-bottom:auto}#app.tfBoard .tfDashBento .wbCard.wbSquare{aspect-ratio:auto}#app.tfBoard .tfAreas .workoutGallery,#app.tfBoard .tfAreas .workoutPanel{height:100%;min-height:0}.tfBoardCells{position:absolute;top:0;left:0;z-index:0;display:grid;grid-auto-rows:60px;gap:16px;pointer-events:none}.tfBoardCells i{border-radius:var(--r-inner);background:color-mix(in srgb,var(--text) 7%,transparent)}#app.tfEditing .tfBoardItem:not(.tfDashTitle,.tfDashBarRow,.tfDashBento){outline:1.5px solid var(--primary);outline-offset:-1.5px;border-radius:var(--r-card)}#app.tfEditing .tfBoardItem:is(.tfAction,.tfDac){border-radius:28px}#app.tfEditing .tfAreas{border-radius:24px}#app.tfEditing .tfDashBento .wbCard{outline:1.5px solid var(--primary);outline-offset:-1.5px}#app.tfEditing .tfBoardItem:not(.tfDashTitle,.tfDashBarRow){cursor:grab;overflow:visible;-webkit-user-select:none;user-select:none;touch-action:none}.tfEditChips{position:absolute;inset:-8px -8px auto -8px;z-index:5;height:40px;display:flex;justify-content:flex-end;pointer-events:none}.tfEditGrip{position:absolute;top:-10px;left:50%;display:grid;place-items:center;width:80px;height:40px;border-radius:var(--r-inner);background:var(--text);color:var(--card);transform:translate(-50%);pointer-events:auto;cursor:grab}.tfEditGrip svg{width:24px;height:24px;fill:currentColor}.tfEditChip{display:grid;place-items:center;width:28px;height:28px;min-height:0;padding:0;border:0;border-radius:50%;background:var(--text);color:var(--card);pointer-events:auto;cursor:pointer}.tfEditChip svg{width:18px;height:18px;fill:currentColor}.tfEditChip:focus-visible{outline:2px solid var(--primary);outline-offset:2px}#app.tfEditing .tfBoardItem.tfDragging{z-index:20;transition:none!important;scale:1.02;cursor:grabbing;filter:drop-shadow(0 10px 30px rgba(0,0,0,.35))}.tfBoardLand{position:absolute;z-index:1;box-sizing:border-box;border:1.5px dashed var(--primary);border-radius:28px;background:color-mix(in srgb,var(--primary) 8%,transparent);pointer-events:none;transition:left .2s,top .2s,width .2s,height .2s}.tfBoardMenu{position:absolute;z-index:30;display:grid;gap:2px;min-width:200px;padding:6px;border-radius:var(--r-tile);background:var(--card);box-shadow:var(--hc-hair-all),0 10px 30px #00000059}.tfBoardMenu button{display:flex;align-items:center;min-height:40px;padding:0 12px;border:0;border-radius:var(--r-inner);background:transparent;color:var(--text);font:500 14px/20px var(--font);text-align:start;cursor:pointer}.tfBoardMenu button:hover:not(:disabled),.tfBoardMenu button:focus-visible{background:var(--tile);outline:none}.tfBoardMenu button:disabled{opacity:.4;cursor:default}.tfHeight{display:grid;gap:6px;padding:6px 6px 8px}.tfHeightLabel{padding:0 6px;color:var(--muted);font:500 12px/16px var(--font)}.tfHeightTabs{display:grid;grid-template-columns:repeat(5,1fr);gap:2px;padding:4px;border-radius:var(--r-inner);background:var(--tile)}.tfBoardMenu .tfHeightTabs button{justify-content:center;min-height:32px;padding:0 4px;border-radius:12px;font-size:13px}.tfBoardMenu .tfHeightTabs button[aria-checked=true]{background:var(--text);color:var(--card)}.tfBoardMenu .tfHeightTabs button:disabled{opacity:.35}#app.tfBoard .tfBoardItem:is(.tfDash-favs,.tfDash-act)>.activityRows{grid-auto-rows:var(--fill-row,60px);margin-top:0}#app.tfBoard .tfBoardItem:is(.tfDash-favs,.tfDash-act)>.activityRows>.activityRow{min-height:0;height:var(--fill-row,60px);box-sizing:border-box}#app.tfBoard .tfBoardItem.tfDashCard[data-rows="1"]{padding:0;gap:0}#app.tfBoard .tfBoardItem.tfDashCard[data-rows="1"]>.activityHeader,#app.tfBoard .tfBoardItem.tfDashCard[data-rows="1"]>.tfDashGraph{display:none}#app.tfBoard .tfBoardItem.tfDashCard[data-rows="1"]>.activityRows{margin:0;flex:1}#app.tfBoard .tfBoardItem.tfAction[data-rows="1"],#app.tfBoard .tfDashBento[data-rows="1"] .wbCard{padding:10px;border-radius:24px}#app.tfBoard .tfDashBento[data-rows="1"] .wbVisual{display:none}#app.tfBoard .tfDash-wx[data-rows="1"] .wbNow{margin:0}#app.tfBoard .tfDash-wx[data-rows="1"] .wbWx.wbS90{width:40px;height:40px;border-radius:12px}#app.tfBoard .tfDashBento[data-rows] :is(.wb,.wbBento,.wbItem){height:100%;min-height:0}#app.tfBoard .tfDashBento[data-rows] .wbCard{height:100%;min-height:0;box-sizing:border-box;aspect-ratio:auto}#app.tfBoard .tfDash-wx[data-rows="1"] .wbDeg{font-size:20px;letter-spacing:0;line-height:22px}#app.tfBoard .tfDash-wx[data-rows="1"] .wbPlace{font-size:13px;line-height:18px}#app.tfBoard .tfDash-wx[data-rows="1"] .wbTempBlock{gap:0}#app.tfBoard .tfDash-wx[data-rows="1"] .wbUnit{font-size:14px;line-height:22px}#app.tfBoard .tfDash-wx:is([data-rows="1"],[data-rows="2"],[data-rows="4"]) .wbSummary{display:none}#app.tfBoard .tfDash-wx:is([data-rows="1"],[data-rows="2"],[data-rows="3"]) :is(.wbColumns,.wbHalves){display:none}#app.tfBoard .tfDash-wx[data-rows="4"] .wbColumns{flex:1 1 0;height:auto;min-height:0;margin-top:12px}#app.tfBoard .tfDash-wx[data-rows="4"] .wbHalves>:nth-child(n+5){display:none}#app.tfBoard .tfDash-energy[data-rows="2"] .tfDashGraph{display:none}#app.tfBoard .tfDash-energy:is([data-rows="1"],[data-rows="2"],[data-rows="3"]) .activityRows{grid-template-columns:none;grid-auto-flow:column;grid-auto-columns:minmax(0,1fr)}#app.tfBoard .tfDash-energy[data-rows="3"] .tfDashGraph{min-height:0}#app.tfBoard .tfDashBento[data-rows="2"] .wbBaseRows{display:none}#app.tfBoard .tfDashBento[data-rows="2"] :is(.wbRadar,.wbCompareBars,.wbCompareWords,.wbCompareTemps){display:none}#app.tfBoard .tfDashBento[data-rows="3"] :is(.wbCompareWords,.wbCompareTemps){display:none}#app.tfBoard .tfAreas[data-rows="1"] .workoutPanel.tfAreaPanel{padding:10px}#app.tfBoard .tfAreas[data-rows="1"] .panelExpanded{display:grid;grid-template-columns:40px minmax(0,1fr);gap:0 12px;align-content:center}#app.tfBoard .tfAreas[data-rows="1"] :is(.panelExpanded>.workoutPanelTop,.tfACTop){display:contents}#app.tfBoard .tfAreas[data-rows="1"] .panelExpanded .tfAreaIcon{grid-row:span 2}#app.tfBoard .tfAreas[data-rows="1"] .tfATitle .tfAName{font-size:14px;line-height:20px;height:auto}#app.tfBoard .tfAreas[data-rows="1"] .tfABig{margin:0;flex-direction:row}#app.tfBoard .tfAreas[data-rows="1"] .tfABigMain{font-size:14px;line-height:18px;letter-spacing:0}#app.tfBoard .tfAreas[data-rows="1"] :is(.tfABigUnit){font-size:14px}#app.tfBoard .tfAreas[data-rows="1"] :is(.tfABigSub,.tfATiles,.tfACTiles,.sourceTag){display:none}#app.tfBoard .tfAreas[data-rows="1"] .tfACollapsed{display:grid;grid-template-columns:40px minmax(0,1fr);column-gap:12px;align-content:center;padding:0}#app.tfBoard .tfAreas[data-rows="1"] .tfACollapsed .tfAreaIcon{grid-row:span 2}#app.tfBoard .tfAreas[data-rows="1"] :is(.tfACName,.tfACMain){margin:0;font-size:14px;line-height:18px;text-align:start;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#app.tfBoard .tfAreas:is([data-rows="2"],[data-rows="3"],[data-rows="4"]) .tfABig{display:none}#app.tfBoard .tfAreas:is([data-rows="2"],[data-rows="3"],[data-rows="4"]) .tfATiles{margin-top:auto}#app.tfBoard .tfAreas[data-rows="2"] .tfATile:nth-child(n+3),#app.tfBoard .tfAreas:is([data-rows="3"],[data-rows="4"]) .tfATile:nth-child(n+5){display:none}#app.tfBoard .tfAreas[data-rows="2"] .tfACTiles{display:none}#app.tfBoard .tfAreas:is([data-rows="3"],[data-rows="4"]) .tfACTile:nth-child(n+3){display:none}#app.tfBoard .tfAreas:is([data-rows="3"],[data-rows="4"]) .tfACollapsed{justify-content:flex-start;gap:10px}#app.tfBoard .tfAreas:is([data-rows="3"],[data-rows="4"]) .tfACTiles{margin-top:auto}.tfEditTray{position:fixed;top:calc(var(--header-height,0px) + env(safe-area-inset-top,0px));right:0;bottom:0;z-index:160;display:flex;width:360px;max-width:calc(100vw - 56px);transform:translate(100%);transition:transform .25s cubic-bezier(.2,.7,.3,1);pointer-events:none}.tfEditTray.open{transform:none}.tfEditTray.open.tucked{transform:translate(100%)}.tfEditTray.open :is(.tfTrayInner,.tfTrayTuck){pointer-events:auto}.tfTrayTuck{position:absolute;top:20px;left:-40px;display:grid;place-items:center;width:40px;height:56px;min-height:0;padding:0;border:0;border-radius:16px 0 0 16px;background:var(--card);color:var(--text);box-shadow:var(--hc-hair-all);cursor:pointer;--mdc-icon-size:22px}.tfTrayTuck svg{width:22px;height:22px}.tfEditTray:not(.open) .tfTrayTuck{visibility:hidden}.tfTrayInner{flex:1;min-width:0;display:flex;flex-direction:column;gap:20px;overflow:auto;overscroll-behavior:contain;padding:20px;border-radius:var(--r-card) 0 0 var(--r-card);background:var(--card);box-shadow:var(--hc-hair-all),0 0 40px #0000004d}.tfTrayHead{display:flex;align-items:center;justify-content:space-between;gap:12px}.tfTraySection{display:flex;flex-direction:column;gap:8px}.tfTraySection .sectionLabel{margin:0}.tfTrayNote{margin:0;color:var(--muted);font:400 14px/1.3 var(--font)}.tfTrayCards{display:flex;flex-direction:column;gap:6px}.tfTrayCard{display:flex;align-items:center;gap:10px;min-height:var(--tile-min);padding:0 14px 0 10px;border:0;border-radius:var(--r-tile);background:var(--tile);color:var(--text);font:600 14px/20px var(--font-tile);text-align:start;cursor:grab;touch-action:none}.tfTrayList{display:flex;flex-direction:column;margin:0;padding:0;list-style:none}.tfTrayFav{display:grid;grid-template-columns:22px var(--chip-size) minmax(0,1fr) 36px 36px;align-items:center;gap:8px;min-height:var(--tile-min);padding:0 4px 0 6px;border-radius:var(--r-tile)}.tfTrayFav.off{cursor:grab;touch-action:none}.tfTrayFav.off :is(.tfIcon,.tfTrayName){opacity:.5}.tfTrayFav.moving{background:var(--tile)}.tfTrayGrip{display:grid;place-items:center;color:var(--muted);cursor:grab;touch-action:none}.tfTrayGrip svg{width:20px;height:20px;fill:currentColor}:is(.tfTrayFav,.tfTrayPickItem) .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfTrayName{display:flex;flex-direction:column;min-width:0}.tfTrayName>*{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfTrayBtn{display:grid;place-items:center;width:36px;height:36px;min-height:0;padding:0;border:0;border-radius:12px;background:none;color:var(--text);cursor:pointer}.tfTrayBtn svg{width:20px;height:20px;fill:currentColor}.tfTrayBtn:hover{background:var(--tile)}.tfTrayAdd{align-self:flex-start}.tfTrayPick{display:flex;flex-direction:column;gap:6px}.tfTrayPick[hidden]{display:none}.tfTrayPickItem{display:grid;grid-template-columns:var(--chip-size) minmax(0,1fr);align-items:center;gap:12px;width:100%;min-height:var(--tile-min);padding:0 10px;border:0;border-radius:var(--r-tile);background:none;color:var(--text);text-align:start;cursor:pointer}.tfTrayPickItem:hover{background:var(--tile)}.tfTraySuggest{margin-top:8px}.tfMiniPhone{position:fixed;top:calc(var(--header-height,0px) + env(safe-area-inset-top,0px) + 20px);bottom:20px;left:max(16px,calc(100vw - min(360px,100vw - 56px) - 380px));z-index:160;display:flex;flex-direction:column;gap:8px;width:324px;padding:12px;border-radius:44px;background:var(--card);box-shadow:var(--hc-hair-all),0 0 40px #0000004d;opacity:0;transform:translate(16px);transition:opacity .2s ease,transform .25s cubic-bezier(.2,.7,.3,1);pointer-events:none}.tfMiniPhone.open{opacity:1;transform:none;pointer-events:auto}.tfPhoneHead{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:8px 4px 0 12px}.tfMiniPhone>.tfTrayNote{padding:0 12px 4px}.tfLinkBtn{min-height:0;padding:0;border:0;background:none;color:var(--primary);font:inherit;text-decoration:underline;cursor:pointer}.tfPhoneScreen{flex:1;min-height:0;overflow:auto;overscroll-behavior:contain;scrollbar-width:thin;border-radius:34px;background:var(--bg);box-shadow:var(--hc-hair-all);padding:14px 0 24px}.tfPhoneList{display:flex;flex-wrap:wrap;gap:12.8px}.tfPhoneTitle{width:100%;padding:0 12.8px;color:var(--text);font:800 25.6px/1 var(--font);letter-spacing:-.055em;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfPhoneBlock{display:flex;align-items:flex-start;gap:10px;width:100%;min-height:0;padding:12px;border:0;border-radius:27px;background:var(--card);box-shadow:var(--hc-hair);color:var(--text);font:600 14px/20px var(--font-tile);text-align:start;cursor:grab;touch-action:none;-webkit-user-select:none;user-select:none}.tfPhoneBlock.tile{width:calc((100% - 12.8px)/2);border-radius:22.4px}.tfPhoneBlock.fixed{align-items:center;color:var(--muted);cursor:default}.tfPhoneBlock.moving{box-shadow:var(--hc-hair),0 0 0 2px var(--primary);cursor:grabbing}.tfPhoneBlock:focus-visible{outline:2px solid var(--primary);outline-offset:2px}.tfPhoneBlock .tfIcon{width:32px;height:32px;border-radius:13px;background:var(--hc-icon);color:var(--hc-icon-ink);--mdc-icon-size:22px}.tfPhoneName{min-width:0;padding-top:6px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.tfTrayGhost{position:fixed;top:0;left:0;z-index:200;margin:0;pointer-events:none;opacity:.9;background:var(--tile);border-radius:var(--r-tile);box-shadow:0 8px 24px #00000059}.tfFavDrop{position:fixed;z-index:200;width:4px;border-radius:2px;background:var(--primary);pointer-events:none}.tfFavHides{position:absolute;top:0;right:0;bottom:0;left:0;z-index:4;pointer-events:none}.tfFavHide{position:absolute;display:grid;place-items:center;width:32px;height:32px;min-height:0;padding:0;border:0;border-radius:12px;background:var(--card);color:var(--text);box-shadow:var(--hc-hair-all);cursor:pointer;pointer-events:auto}.tfFavHide svg{width:18px;height:18px;fill:currentColor}.tfDash-energy .tfDashGraph{flex:1;min-height:80px;height:auto;margin:var(--inset) 0 0}.tfDash-energy.graphAbove>.activityHeader{order:-2}.tfDash-energy.graphAbove>.tfDashGraph{order:-1;margin:0 0 var(--inset)}#homeView .card.tfDash-energy .activityRow.picked{background:var(--tile);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line)}.toast.tfToast{top:auto;right:auto;max-width:calc(100vw - 32px);transform:translate(-50%,6px)}.toast.tfToast.show{transform:translate(-50%)}.tfDash-act .activityRow.alert .activityRowName{color:var(--danger)}.activityRow .tfIcon.alert{background:#e53935;color:#fff}.tfGraph.tfDay{flex:none;height:62px;min-height:0}.tfGraph.tfDay text{font-size:10px}#housePane .rubberIndicator{background:var(--bright)}#housePane .tab.active{color:var(--on-bright)}#app.light .tfBar i{box-shadow:inset -2px 0 0 var(--text)}#app.house :is(.settingsSelect,.addInput){border:1px solid var(--muted)}#app.house .addInput::placeholder{color:var(--muted);opacity:1}#app .activityRows :focus-visible{outline-offset:-2.4px}#app.house :is(button,a,input,select,[tabindex]){scroll-margin-bottom:96px}@media (max-width:620px){#app.house :is(.activityRowName,.activityRowMeta){white-space:normal;text-overflow:clip;overflow:visible;overflow-wrap:break-word;-webkit-hyphens:auto;hyphens:auto}}.tfTooltip{position:fixed;z-index:500;max-width:min(320px,calc(100vw - 16px));padding:6px 10px;border-radius:10px;background:var(--bright);color:var(--on-bright);font:500 14px/18px var(--font);overflow-wrap:break-word;box-shadow:0 4px 16px #00000040}.tfTooltip[hidden]{display:none}.tfDashGraph rect{transform-box:fill-box;transform-origin:50% 100%}#app.house:is([data-names=cut],[data-names=scroll]) :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis;overflow-wrap:normal}#app.house[data-names=wrap] :is(.activityRowName,.activityRowMeta){display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;white-space:normal;overflow:hidden;text-overflow:ellipsis;overflow-wrap:break-word;-webkit-hyphens:auto;hyphens:auto}#app.tfBoard .tfDash-favs>.activityRows{min-height:0;overflow-y:auto;scrollbar-width:thin}', Np = `.wb{container:wb-bento/inline-size;display:block;color:var(--text);font-family:var(--font);-webkit-font-smoothing:antialiased}.wbBento{box-sizing:content-box;display:flex;flex-wrap:wrap;align-items:flex-start;justify-content:center;gap:16px;max-width:1056px;margin:0 auto;padding:10px}.wbItem{container:wb-card/inline-size;min-width:0}.wbItem[hidden]{display:none!important}.wbItem[data-size=wide]{width:520px;align-self:stretch;display:flex;flex-direction:column}.wbItem[data-size=wide]>*{flex:1}.wbItem[data-size=wide]>.wbWeather{flex:none}.wbItem[data-size=tile]{width:252px}.wbItem[data-size=double]{width:520px}@container wb-bento (width < 652px){.wbBento{gap:10px;padding:10px}.wbItem:is([data-size=wide],[data-size=double]){width:100%}.wbItem[data-size=tile]{width:calc(50% - 5px)}}.wbCard{position:relative;display:block;box-sizing:border-box;border:0;border-radius:var(--r-card);background:var(--card);color:var(--text);font-family:var(--font);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line);transition:all .3s ease-out}.wbCard.wbHc{display:flex;flex-direction:column;gap:10px;padding:14px var(--inset) var(--inset);box-shadow:var(--hc-hair-all)}.wbHeader{display:flex;align-items:center;justify-content:space-between;gap:12px;min-height:28px;padding:0 18px}.wbTitle{margin:0;font:500 18px/1.2 var(--font-tile);letter-spacing:-.18px;color:var(--text);white-space:nowrap}.wbIcon{display:block;flex:none;width:var(--wb-icon,24px);height:var(--wb-icon,24px);fill:currentColor;pointer-events:none}.wbTile{display:flex;align-items:center;gap:12px;min-width:0;min-height:var(--tile-min);box-sizing:border-box;padding:var(--inset);border:0;border-radius:var(--r-tile);background:transparent;color:inherit;font:inherit;text-align:start}.wb button.wbTile{border-radius:var(--r-tile)!important;cursor:pointer;transition:background-color .15s ease,box-shadow .15s ease}.wb button.wbTile:hover{background:var(--tile);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line)}.wb button.wbTile:focus-visible{outline:2px solid var(--primary)!important;outline-offset:2px!important}.wbChip{flex:none;display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);background:var(--primary);color:var(--hc-on-accent);--wb-icon:24px}.wbChip.wbPlain{background:var(--icon-bg);color:var(--text)}.wbText{display:flex;flex-direction:column;justify-content:center;flex:1;min-width:0;align-self:stretch;overflow:hidden;white-space:nowrap}.wbName{font:600 14px/20px var(--font-tile);overflow:hidden;text-overflow:ellipsis}.wbSub{font:400 16px/1.15 var(--font);letter-spacing:-.32px;overflow:hidden;text-overflow:ellipsis}.wbCard.wbSquare{display:flex;flex-direction:column;gap:14px;aspect-ratio:1;--wb-k:1;box-sizing:border-box;padding:18px;border-radius:28px;overflow:hidden}.wbHead{display:flex;align-items:flex-start;gap:12px;min-width:0}.wbSquare .wbChip{width:40px;height:40px;border-radius:16px}.wbSquare .wbName{font-size:14px;line-height:1.4}.wbSquare .wbSub{font-size:16px}.wbVisual{position:relative;flex:1;min-height:0;display:flex;flex-direction:column;justify-content:center;gap:10px}.wbCard.wbSquare.wbDouble{aspect-ratio:520/252;--wb-k:.4846;border-radius:34px}.wbVisual>svg{display:block;width:100%;height:100%;min-height:0}.wbVisual svg text{font-family:var(--font-tile)}.wbValue{display:flex;align-items:flex-start;gap:2px;white-space:nowrap}.wbValue .wbNum{font:500 clamp(30px,calc(17.5cqw * var(--wb-k,1)),44px)/1 var(--font-tile);letter-spacing:-.02em;font-variant-numeric:tabular-nums}.wbValue .wbUnitV{font:300 clamp(13px,calc(7.1cqw * var(--wb-k,1)),18px)/1.25 var(--font-tile);color:var(--muted)}.wbScaleNote{display:flex;justify-content:space-between;color:var(--muted);font:400 clamp(10px,calc(4.4cqw * var(--wb-k,1)),12px)/1.3 var(--font)}.wbCard.wbSquare.wbHasBackdrop{position:relative;isolation:isolate}.wbBackdrop{position:absolute;top:0;right:0;bottom:0;left:0;z-index:0;overflow:hidden;border-radius:inherit;pointer-events:none}.wbBackdrop~*{position:relative;z-index:1}.wbGraph{position:relative;display:flex;flex-direction:column;justify-content:center;height:120px;box-sizing:border-box;padding:12px 16px;border-radius:10px 10px 18px 18px;background:var(--tile);overflow:hidden;--wb-scale-edge:var(--tile)}.wbChart{display:block;width:100%;height:100%;overflow:visible}.wbChart .wbLine{fill:none;stroke:var(--primary);stroke-width:2.5;stroke-linecap:round;stroke-linejoin:round}.wbChart .wbArea{fill:var(--primary);opacity:.14}.wbChart .wbBar{fill:var(--muted);opacity:.45}.wbChart .wbBar.wbNowBar{fill:var(--primary);opacity:1}.wbChart .wbGuide{stroke:var(--muted);stroke-width:1;stroke-dasharray:2 4}.wbChart text{fill:var(--muted);font:400 11px var(--font)}.wbGraphNote{display:flex;justify-content:space-between;gap:8px;color:var(--muted);font:400 12px/1.4 var(--font)}.wbDayChart{flex:1;min-height:0;display:grid;grid-template-columns:38px minmax(0,1fr);grid-template-rows:20px minmax(0,1fr) 18px;grid-template-areas:". sun" "y plot" ". x";column-gap:6px;color:var(--muted);font:400 11px/14px var(--font);font-variant-numeric:tabular-nums}.wbDcSun,.wbDcX,.wbDcY,.wbDcPlot{position:relative;min-width:0}.wbDcSun{grid-area:sun}.wbDcY{grid-area:y}.wbDcPlot{grid-area:plot}.wbDcX{grid-area:x}.wbDcSunMark,.wbDcX span{position:absolute;bottom:0;transform:translate(-50%);white-space:nowrap}.wbDcSunMark{display:flex;align-items:center;gap:2px;bottom:4px;--wb-icon:14px}.wbDcSunMark .wbIcon{fill:#fea916}.wbDcX span{top:4px;bottom:auto}.wbDcY span{position:absolute;right:0;transform:translateY(-50%);white-space:nowrap}.wbDcPlot svg{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;overflow:visible}.wbDcNight{fill:var(--page);opacity:.6}.wbDcGrid{stroke:var(--line);stroke-width:1}.wbDcSunLine{stroke:#fea916;stroke-width:1;stroke-dasharray:2 4;opacity:.7}.wbDcNow{stroke:var(--text);stroke-width:1;opacity:.4}.wbDcLine,.wbDcPast{fill:none;stroke:var(--primary);stroke-width:2.5;stroke-linecap:round;stroke-linejoin:round}.wbDcPast{stroke:var(--muted);stroke-width:2}.wbDcArea{fill:var(--primary);opacity:.14}.wbDcBar{position:absolute;bottom:0;min-height:3px;border-radius:4px 4px 1px 1px;background:var(--primary)}.wbDcDot{position:absolute;width:10px;height:10px;margin:-5px 0 0 -5px;border-radius:50%;background:var(--primary);box-shadow:0 0 0 2px var(--card)}.wbDcPeak{position:absolute;transform:translate(-50%,calc(-100% - 6px));color:var(--text);font-weight:500;white-space:nowrap}.wbDcNote{position:absolute;top:0;right:0;bottom:0;left:0;display:grid;place-items:center;padding:0 8px;text-align:center;color:var(--muted);font:400 13px/1.4 var(--font)}.wbOpen{flex:1;display:flex;flex-direction:column;gap:10px;padding:var(--inset);border-radius:28px;background:var(--tile);box-shadow:inset 0 0 0 .4px var(--hc-open-edge)}.wbOpenHead{display:flex;align-items:center;gap:12px}.wbBack{flex:none;display:grid;place-items:center;width:34px;height:34px;padding:0;border:0;border-radius:var(--r-fine);background:transparent;color:var(--text);cursor:pointer;--wb-icon:24px}.wb button.wbBack{border-radius:var(--r-fine)!important}.wbBack:hover{background:var(--hover)}.wbOpen .wbGraph{flex:1;height:auto;min-height:152.2px;background:var(--card);--wb-scale-edge:var(--tile)}.wbSegments{display:inline-flex;gap:0;padding:4px;border-radius:var(--r-inner);background:var(--page)}.wbSegments button{padding:4px 12px;border:0;border-radius:var(--r-fine);background:transparent;color:var(--muted);font:600 14px/20px var(--font-tile);cursor:pointer}.wb .wbSegments button{border-radius:var(--r-fine)!important;font-family:var(--font-tile)!important}.wbSegments button[aria-pressed=true]{background:var(--tile);color:var(--text)}.wbWx{position:relative;display:block;flex:none;width:40px;height:40px;border-radius:var(--r-inner);background:var(--icon-bg);overflow:hidden}.wbWx>svg,.wbWx>canvas{display:block;width:100%;height:100%}.wbWx>canvas{image-rendering:pixelated}.wbWx.wbS60{width:60px;height:60px;border-radius:20px}.wbWx.wbS90{width:90px;height:90px;border-radius:28px}.wb[data-style=smooth] :is(.wbWx,.wbSky):after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;border-radius:inherit;pointer-events:none;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n' color-interpolation-filters='sRGB'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix values='1.3 0 0 0 -.15 1.3 0 0 0 -.15 1.3 0 0 0 -.15 0 0 0 0 1'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");background-size:140px 140px;mix-blend-mode:overlay;opacity:.3}.wbBaseRows{display:flex;flex-direction:column;gap:4px;width:100%}.wbBaseRow{display:flex;justify-content:space-between;gap:12px;color:var(--muted);font:400 14px/20px var(--font)}.wbBaseRow>span:last-child{color:var(--text);white-space:nowrap}.wbBaseRow>span:first-child{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.wbRadar{position:relative;flex:1;align-self:stretch;min-height:80px;border-radius:var(--r-inner);overflow:hidden;background-color:var(--tile);background-image:linear-gradient(color-mix(in srgb,var(--text) 7%,transparent) 1px,transparent 1px),linear-gradient(90deg,color-mix(in srgb,var(--text) 7%,transparent) 1px,transparent 1px);background-size:24px 24px;background-position:center}.wbRadarRing{position:absolute;left:50%;top:50%;width:64%;aspect-ratio:1;transform:translate(-50%,-50%);border-radius:50%;box-shadow:0 0 0 1px color-mix(in srgb,var(--text) 20%,transparent)}.wbRadarRing:after{content:"";position:absolute;top:25%;right:25%;bottom:25%;left:25%;border-radius:50%;box-shadow:0 0 0 1px color-mix(in srgb,var(--text) 14%,transparent)}.wbRadarHome{position:absolute;left:50%;top:50%;width:10px;height:10px;margin:-5px 0 0 -5px;border-radius:50%;background:var(--primary);box-shadow:0 0 0 3px var(--tile)}.wbWx.wbLineIcon{display:grid;place-items:center;background:var(--tile);color:var(--text)}.wbWx.wbLineIcon>svg{width:64%;height:64%}.wbWx.wbClear,.wbWx.wbPartly{background:var(--wx-clear)}.wbWx.wbCloudy{background:var(--wx-cloudy)}.wbWx.wbRain,.wbWx.wbSnow{background:#969696}.wbWx.wbNight{background:var(--wx-night)}.wbWx .wbBright{fill:var(--wx-cloud-bright)}.wbWx .wbCloudLight{fill:var(--wx-cloudy)}.wbWx .wbAccent{fill:var(--primary)}.wbWx :is(.wbSunDisc,.wbMoonPath,.wbBright,.wbCloudLight,.wbDrop,.wbFlake,.wbTwinkle){transform-box:fill-box;transform-origin:center}.wbMotion .wbWx .wbSunDisc{animation:wxBreathe 3.6s ease-in-out infinite}.wbMotion .wbWx .wbMoonPath{animation:wxBob 5.2s ease-in-out infinite}.wbMotion .wbWx :is(.wbBright,.wbCloudLight){animation:wxDrift 6.4s ease-in-out infinite}.wbMotion .wbWx .wbDrop{animation:wxFall .95s linear infinite}.wbMotion .wbWx .wbFlake{animation:wxSnow 3.2s linear infinite}.wbMotion .wbWx .wbTwinkle{animation:wxTwinkle 2.4s ease-in-out infinite}.wbCard.wbWeather{position:relative;display:flex;flex-direction:column;gap:12px;padding:18px}.wbClosed{display:contents}.wbWeather.wbIsOpen .wbClosed{visibility:hidden}.wbWeather .wbOpen{position:absolute;top:10px;right:10px;bottom:10px;left:10px;min-height:0}.wbWeather .wbOpen .wbGraph{min-height:0;padding:8px 14px 6px 8px}.wbDayTabs{display:flex}.wbNow{display:flex;align-items:flex-start;justify-content:space-between;gap:16px}.wbCurrent{display:flex;align-items:flex-start;gap:16px;min-width:0}.wb button.wbOpenPage{padding:0;border:0;border-radius:var(--r-tile)!important;background:none;color:inherit;font:inherit;text-align:start;cursor:pointer}.wb button.wbOpenPage:focus-visible{outline:2px solid var(--primary)!important;outline-offset:4px!important}.wbTempBlock{display:flex;flex-direction:column;gap:4px;min-width:0}.wbTemp{display:flex;align-items:flex-start;gap:2px;white-space:nowrap}.wbDeg{font:500 64px/1 var(--font-tile);letter-spacing:-1.28px}.wbUnit,.wbRange{font:300 24px/1.25 var(--font-tile);white-space:nowrap}.wbPlace{color:var(--muted);font:600 14px/20px var(--font-tile);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.wbCondition{flex:none;align-self:stretch;display:flex;flex-direction:column;justify-content:space-between;padding:10px 16px;border-radius:var(--r-tile);background:var(--tile)}.wbCondName{font:400 18px/1.2 var(--font);letter-spacing:-.18px;white-space:nowrap}.wbColumns{display:flex;height:185px;border-radius:28px;overflow:hidden}.wbColumn{flex:1 0 0;min-width:0;display:flex;flex-direction:column;align-items:center;justify-content:space-between;padding:16px 0;border:0;border-radius:var(--r-tile);background:var(--tile);color:var(--text);font:inherit;cursor:pointer}.wb button.wbColumn{border-radius:var(--r-tile)!important}.wbColumn:hover{background:var(--hover);box-shadow:inset 0 0 0 .4px var(--line)}.wb button.wbColumn:focus-visible{outline:2px solid var(--primary)!important;outline-offset:-2px!important}.wbDay{font:400 14px/1.4 var(--font);white-space:nowrap}.wbTemps{display:flex;flex-direction:column;align-items:center;gap:8px}.wbHi{font:400 18px/20px var(--font-tile)}.wbLo{color:var(--muted);font:400 18px/1.2 var(--font);letter-spacing:-.18px}.wbHalves{display:none;grid-template-columns:repeat(2,minmax(0,1fr))}.wbSummary{position:relative;flex:1 1 0;min-height:0;margin-top:-12px;container:wbsum/size}.wbSummaryText{position:absolute;top:12px;left:0;right:0;margin:0;color:var(--text);font:400 16px/22px var(--font);display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden}@container wbsum (height < 56px){.wbSummaryText{-webkit-line-clamp:1}}@container wbsum (height < 34px){.wbSummaryText{display:none}}@container wb-card (width < 480px){.wbColumn .wbWx.wbS60{width:48px;height:48px;border-radius:16px}}@container wb-card (width < 400px){.wbSummary{display:none}.wbCard.wbWeather{gap:16px;padding:18px 18px 10px}.wbWeather .wbWx.wbS90{width:60px;height:60px;border-radius:20px}.wbDeg{font-size:46px;letter-spacing:-.92px}.wbRange{font-size:20px}.wbCondition{align-self:flex-start;gap:0;border-radius:28px}.wbColumns{display:none}.wbHalves{display:grid}.wbWeather .wbDcX .wbMinor{display:none}}@container wb-card (width < 280px){.wbHalves{grid-template-columns:1fr}}.wbCard.wbHourly{flex:1}.wbTabs{padding:0 18px}.wbStripScroll{flex:1;min-height:160px;display:flex;overflow-x:auto;overflow-y:hidden;scrollbar-width:none;border-radius:var(--r-tile);-webkit-user-select:none;user-select:none}.wbStripScroll::-webkit-scrollbar{display:none}.wbStripScroll.wbDragging{cursor:grabbing}.wbStrip{flex:none;display:flex;flex-direction:column;gap:8px;min-width:100%;box-sizing:border-box;padding:0 10px}.wbRow{position:relative;flex:none}.wbTimes{height:20px}.wbValues{height:44px}.wbMark{position:absolute;top:0;display:flex;flex-direction:column;align-items:center;transform:translate(-50%);white-space:nowrap}.wbMark.wbFirst{align-items:flex-start;transform:none}.wbTimes .wbMark{font:400 14px/20px var(--font);font-variant-numeric:tabular-nums}.wbTimes .wbMark.wbFirst{font:600 14px/20px var(--font-tile)}.wbSky{position:relative;flex:1;min-height:72px;border-radius:var(--r-inner);overflow:hidden}.wbStripScroll.wbPaged{container-type:inline-size;scroll-snap-type:x mandatory;overscroll-behavior-x:contain}.wbStripScroll.wbPaged.wbHeld{scroll-snap-type:none}.wbPaged .wbStrip{position:relative;min-width:0;padding:0}.wbSnap{position:absolute;top:0;width:1px;height:1px;scroll-snap-align:start;pointer-events:none}.wbMark.wbLast{align-items:flex-end;transform:translate(-100%)}.wbPaged .wbTimes .wbMark.wbFirst{font:400 14px/20px var(--font)}.wbPaged .wbTimes .wbMark.wbNowMark{font:600 14px/20px var(--font-tile)}.wbSky .wbPast{position:absolute;top:0;bottom:0;left:0;background:var(--card);opacity:.45;pointer-events:none}.wbSky .wbNowLine{position:absolute;top:0;bottom:0;width:2px;margin-left:-1px;background:var(--text);opacity:.55;pointer-events:none}.wbSky.wbLineSky{background:var(--tile);color:var(--text)}.wbLineArt{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;overflow:visible}.wbLineArt .wbLineArc{fill:none;stroke:var(--text);stroke-width:1.5;stroke-linejoin:round;vector-effect:non-scaling-stroke;opacity:.7}.wbLineArt .wbLineHorizon{stroke:var(--text);stroke-width:1;vector-effect:non-scaling-stroke;opacity:.35}.wbLineArt .wbLineNight{fill:var(--text);opacity:.07}.wbLineArt .wbLineEdge{stroke:var(--text);stroke-width:1;vector-effect:non-scaling-stroke;opacity:.3}.wbLineTime{position:absolute;top:calc(80% + 4px);transform:translate(-50%);color:var(--muted);font:400 11px/14px var(--font);font-variant-numeric:tabular-nums;white-space:nowrap;pointer-events:none}.wbLineNow{position:absolute;width:26px;height:26px;transform:translate(-50%,-50%);border-radius:50%;background:var(--tile);pointer-events:none}.wbLineNow>svg,.wbLineGlyph>svg{display:block;width:100%;height:100%}.wbLineGlyph{position:absolute;top:calc(50% - 14px);width:28px;height:28px;transform:translate(-50%);pointer-events:none}.wbLineGlyph.wbFirst{transform:none}.wbLineGlyph.wbLast{transform:translate(-100%)}.wbSky .wbMidnight{position:absolute;top:0;bottom:0;width:0;border-left:1.5px dashed var(--text);opacity:.5;pointer-events:none}.wbDays{position:absolute;top:36px;left:0;z-index:1;display:flex;pointer-events:none}.wbDaySpan{flex:none;min-width:0}.wbDayName{position:sticky;left:8px;margin-left:8px;height:26px;min-height:0;padding:0 10px;border:0;background:color-mix(in srgb,var(--card) 82%,transparent);color:var(--text);font:600 13px/26px var(--font-tile);white-space:nowrap;cursor:pointer;pointer-events:auto}.wb .wbDayName{border-radius:13px!important;font-family:var(--font-tile)!important}.wbViews button{padding:2px 10px;font-size:13px}.wbBars .wbDayBars{flex:1 1 0;min-height:160px;display:flex;flex-direction:column;padding:0 18px;overflow-y:auto;overscroll-behavior:contain;scrollbar-width:thin}.wbBars.wbTabbed .wbDayBars{min-height:206px}.wbDayBar{flex:1 0 auto;display:grid;grid-template-columns:minmax(56px,auto) 40px 36px minmax(0,1fr) 36px;align-items:center;column-gap:12px;min-height:48px;box-shadow:inset 0 -.4px 0 var(--line)}.wbDayBar:last-child{box-shadow:none}.wbRangeDay{color:var(--text);font:600 14px/20px var(--font-tile);white-space:nowrap}.wbRangeLo{color:var(--muted);text-align:right;font:400 16px/20px var(--font);font-variant-numeric:tabular-nums}.wbRangeHi{color:var(--text);text-align:right;font:400 16px/20px var(--font-tile);font-variant-numeric:tabular-nums}.wbRangeTrack{position:relative;height:6px;border-radius:3px;background:var(--tile)}.wbRangeFill{position:absolute;top:0;right:0;bottom:0;left:0;border-radius:3px}.wbRangeNow{position:absolute;top:50%;width:10px;height:10px;margin:-5px 0 0 -5px;border-radius:50%;background:#fff;box-shadow:0 0 0 2px var(--card)}.wbSkyArt{position:absolute;top:0;height:100%}.wbSkyArt>canvas{display:block;width:100%;height:100%}.wbSkyArt>canvas.wbPixels{image-rendering:pixelated}.wbPrimaryV{font:400 18px/20px var(--font-tile);font-variant-numeric:tabular-nums}.wbSecondary{min-height:20px;color:var(--muted);font:400 15px/20px var(--font)}@container wb-card (width < 480px){.wbHourly :is(.wbHeader,.wbTabs){padding:0 8px}.wbBars .wbDayBars{padding:0 8px;min-height:380px}.wbBars.wbTabbed .wbDayBars{min-height:426px}.wbDayBar{column-gap:8px}.wbStripScroll{min-height:380px}}.wbSunSky{flex:1;min-height:0;display:flex;border-radius:16px;overflow:hidden;transition:background 1s ease}.wbSunSky svg{display:block;width:100%;height:100%;overflow:visible}.wbSunPath{fill:none;stroke:var(--wb-sun-line);stroke-opacity:.4;stroke-width:28.3}.wbHorizon{stroke:var(--wb-sun-line);stroke-opacity:.3;stroke-width:1}.wbSunTime{fill:var(--wb-sun-line);font-size:13px;font-weight:600;text-anchor:middle}.wbSunTime.wbNoon{dominant-baseline:central}.wbMoonBox{flex:1;min-height:0;display:flex;justify-content:center}.wbMoonArt{display:block;flex:none;width:auto;height:100%;max-width:100%}.wbMoonCaption{gap:8px}.wbMoonCaption span:first-child{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.wbMoonCaption span:last-child{flex:none}.wbMaria{fill:#7d7d78}.wbCrater{fill:#00000017}.wbRays{stroke:#fff;stroke-width:1.2;stroke-linecap:round;opacity:.16}.wbBrightSpots{fill:#fff;opacity:.25}.wbBrightCenter{fill:#f6f6f2;opacity:.75}.wbMottle{opacity:.3;mix-blend-mode:multiply}.wbGrain{opacity:.12;mix-blend-mode:multiply}.wbMoonNight{fill:#0a0a0ebf}.wbWind .wbVisual>svg{overflow:visible}.wbTick{stroke:var(--muted);stroke-width:2.5;stroke-linecap:round}.wbTick.wbMajor{stroke:var(--text);stroke-width:3}.wbLetter{fill:var(--muted);font-size:15px;font-weight:600;text-anchor:middle;dominant-baseline:central}.wbLetter.wbNorth{fill:var(--text)}.wbMarker{fill:var(--primary)}.wbDisc{fill:var(--text)}.wbSpeed{fill:var(--card);font-size:34px;font-weight:500;letter-spacing:-.5px;text-anchor:middle;dominant-baseline:central}.wbSpeedUnit{fill:var(--card);font-size:12px;font-weight:600;text-anchor:middle;dominant-baseline:central;opacity:.7}.wbWater{position:absolute;left:0;right:0;bottom:0;transition:height 1.2s ease}.wbWater .wbBody{position:absolute;top:0;right:0;bottom:0;left:0;background:linear-gradient(180deg,#b2e5fc2e,#81d4fa52,#4fc3f76b 70%,#03a9f48c);-webkit-mask-image:linear-gradient(180deg,transparent,#000 26px);mask-image:linear-gradient(180deg,transparent,#000 26px)}.wbWater .wbMist{position:absolute;left:-10%;right:-10%;bottom:calc(100% - 26px);height:60px;background:radial-gradient(ellipse at 50% 100%,#b2e5fc4d,#b2e5fc00 70%);filter:blur(8px)}.wbWater .wbHaze{position:absolute;width:80%;height:45%;border-radius:50%;background:radial-gradient(closest-side,#ffffff38,#fff0);filter:blur(10px);animation:wbDrift 16s ease-in-out infinite alternate}.wbWater .wbHaze.wbOne{left:-15%;top:8%}.wbWater .wbHaze.wbTwo{right:-20%;top:40%;animation-duration:21s;animation-direction:alternate-reverse}@keyframes wbDrift{0%{transform:translate(-12%)}to{transform:translate(18%)}}.wbWaterValue{flex:1;display:flex;align-items:flex-end}.wbSea{position:relative;flex:1;min-height:0;border-radius:16px;overflow:hidden;--wb-sea-inset:clamp(8.88px,calc(4.76cqw * var(--wb-k,1)),12px)}.wbSeaArt{position:absolute;top:0;right:0;bottom:0;left:0;display:block;width:100%;height:100%;image-rendering:pixelated}.wbSeaFact{position:absolute;top:clamp(7px,calc(3.97cqw * var(--wb-k,1)),10px);inset-inline:var(--wb-sea-inset);color:#26221e;font:600 clamp(9.44px,calc(5.47cqw * var(--wb-k,1)),13.78px)/1.23 var(--font-tile)}.wbSeaValue{position:absolute;bottom:var(--wb-sea-inset);inset-inline-start:var(--wb-sea-inset);color:#fff;text-shadow:0 0 2px rgba(0,0,0,.6),0 1px 3px rgba(0,0,0,.5)}.wbSeaValue .wbUnitV{color:inherit}.wbVu{display:block;width:100%;height:100%;min-height:0;overflow:visible}.wbVuZone{fill:none;stroke-width:12.3;stroke-linecap:butt}.wbVuTick{stroke:var(--muted);stroke-width:.95;stroke-linecap:round}.wbVuTick.wbMajor{stroke:var(--text);stroke-width:1.9}.wbVisual svg text.wbVuLabel{fill:var(--muted);font-family:"Alfarn",var(--font-tile);font-size:18.9px;font-weight:600;letter-spacing:.08em;text-anchor:middle;dominant-baseline:central}.wbVuNeedle{transform-box:view-box;transform-origin:100px 130px;transform:rotate(var(--wb-angle));animation:wbSwing 1.4s cubic-bezier(.3,1.6,.5,1);transition:transform 1s cubic-bezier(.3,1.6,.5,1)}.wbVuNeedle line{stroke:#e0574d;stroke-width:2;stroke-linecap:round}@keyframes wbSwing{0%{transform:rotate(-48deg)}}.wbVuHousing{fill:var(--tile)}.wbVuValue{fill:var(--text);font-size:30.2px;font-weight:600;text-anchor:middle;dominant-baseline:central}@media (prefers-reduced-motion:reduce){.wbWater .wbHaze,.wbVuNeedle{animation:none}}.wbTapeRow{flex:1;min-height:0;display:flex;align-items:stretch;gap:8px}.wbTapeValue{flex:1;display:flex;flex-direction:column;justify-content:center;min-width:0}.wbTapeUnit{color:var(--muted);font:300 clamp(13px,7.1cqw,18px)/1.25 var(--font-tile)}.wbTape{flex:none;width:40%;height:100%}.wbTapeTick{stroke:var(--text);stroke-width:2;stroke-linecap:round}.wbTapeLabel{fill:var(--text);font-size:15px;dominant-baseline:central}.wbTapeEnd{fill:var(--muted);font-size:14px;font-weight:600;text-anchor:middle;dominant-baseline:central}.wbTapeMarker{stroke:#e0574d;stroke-width:4;stroke-linecap:round}.wbCompare{flex:1;min-height:0;display:grid;grid-template-columns:minmax(0,1fr) calc(50% - 28px * var(--wb-k));grid-template-rows:minmax(0,1fr);gap:16px;align-items:stretch}.wbCompareText{display:flex;flex-direction:column;justify-content:flex-end;gap:4px;min-width:0}.wbCompareNumber{font:500 calc(26.4cqw * var(--wb-k)) / 1 var(--font-tile);letter-spacing:-.02em;white-space:nowrap}.wbCompareWords{color:var(--muted);font:300 clamp(14px,calc(7.1cqw * var(--wb-k)),18px) / 1.25 var(--font-tile)}.wbCompareTemps{margin-top:6px;font:400 clamp(12px,calc(5.6cqw * var(--wb-k)),14px) / 1.4 var(--font)}.wbCompareBars{display:block;width:100%;height:100%;min-height:0}.wbAvgValue{fill:var(--muted);font-size:10px;text-anchor:middle}.wbAvgValue.wbToday{fill:var(--text);font-size:12px;font-weight:600}.wbAvgBar{fill:var(--muted);opacity:.45}.wbAvgBar.wbToday{fill:var(--primary);opacity:1}.wbAvgDay{fill:var(--muted);font-size:11px;text-anchor:middle}.wbAvgDay.wbToday{fill:var(--text);font-weight:600}.wbAvgLine{stroke:var(--text);stroke-width:1;stroke-dasharray:3 4;opacity:.6}.wbCard.wbHc.wbAqOpen{padding:var(--inset);min-height:243px}.wbAqTiles{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}@container wb-card (width < 280px){.wbAqTiles{grid-template-columns:1fr}}.wbAq .wbGraph{gap:10px}.wbScale{position:relative;height:4px;border-radius:9999px}.wbScale i{position:absolute;top:50%;box-sizing:content-box;width:10px;height:10px;border-radius:50%;background-color:var(--text);border:2px solid var(--wb-scale-edge);transform:translate(-50%,-50%)}`, Pp = `<main id="app"><div class="shell">
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
`, rn = {
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
}, on = (n) => n < 0 ? 0 : n > 1 ? 1 : n, tc = (n, l, o) => n + (l - n) * o, Bd = (n) => {
  const l = String(n || "#000000").trim().replace("#", ""), o = l.length === 3 ? l.split("").map((c) => c + c).join("") : l;
  return [0, 2, 4].map((c) => parseInt(o.slice(c, c + 2), 16) || 0);
}, Ip = (n) => "#" + n.map((l) => Math.round(Math.max(0, Math.min(255, l))).toString(16).padStart(2, "0")).join(""), ac = {}, Qt = (n, l, o) => {
  const c = n + l + o;
  return ac[c] || (ac[c] = Ip(Bd(n).map((m, v) => m + (Bd(l)[v] - m) * o)));
}, nc = {}, Wl = (n) => nc[n] || (nc[n] = Bd(n)), hd = (n, l, o, c) => (m) => {
  if (m <= 0) return 0;
  if (m >= 1) return 1;
  let v = 0, w = 1, A = m;
  for (let y = 0; y < 18; y++)
    A = (v + w) / 2, 3 * (1 - A) * (1 - A) * A * n + 3 * (1 - A) * A * A * o + A * A * A < m ? v = A : w = A;
  return 3 * (1 - A) * (1 - A) * A * l + 3 * (1 - A) * A * A * c + A * A * A;
}, Hp = { std: hd(0.2, 0, 0, 1), acc: hd(0.3, 0, 1, 1), dec: hd(0, 0, 0, 1) };
function Zl(n, l) {
  const o = String(n || "");
  return (o === "sunny" || o === "clear-night" ? "clear" : o === "partlycloudy" ? "partly" : o === "fog" ? "fog" : o === "lightning" || o === "lightning-rainy" ? "storm" : o === "snowy" || o === "snowy-rainy" ? "snow" : o === "rainy" || o === "pouring" || o === "hail" ? "rain" : "cloudy") + "/" + (o === "clear-night" || l ? "night" : "day");
}
function Jc(n) {
  const l = { clear: [n.skyClearDay, n.skyClearNight], cloudy: [n.skyCloudyDay, n.skyCloudyNight], rain: [n.skyRainDay, n.skyRainNight], snow: [n.skySnowDay, n.skySnowNight], fog: [n.skyFogDay, n.skyFogNight] };
  return l.partly = [Qt(l.clear[0], l.cloudy[0], 0.12), Qt(l.clear[1], l.cloudy[1], 0.12)], l.storm = [Qt(l.rain[0], "#000000", 0.22), Qt(l.rain[1], "#000000", 0.22)], l;
}
const Rd = [[61, 29, 4.4], [73, 16, 2.9], [79, 57, 3.3], [21, 77, 2.5], [13, 20, 2.3]], Nd = [[29.35, 60.65], [43.04, 60.65], [56.74, 60.65]], Pd = [[30, 64], [44, 61], [58, 64], [37, 74], [51, 74]];
function Id(n, l = rn) {
  const o = { ...rn, ...l }, c = Jc(o), m = String(n).split("/"), v = c[m[0]] ? m[0] : "clear", w = m[1] === "night", A = c[v][w ? 1 : 0], y = {
    night: w,
    clearness: v === "clear" ? 1 : v === "partly" ? 0.7 : 0.25,
    sky: A,
    skyStops: [A],
    skyT: 0,
    sun: { x: 45, y: w ? 134 : 45, r: 33.26, o: 0 },
    moon: { x: 45, y: w ? 45 : 134, d: 64, o: 0 },
    cloud: { x: 134, y: 52.83, w: 58.7, o: 0, f: w ? 1 : 0 },
    stars: Rd.map(() => ({ o: 0 })),
    rain: Nd.map(() => ({ o: 0, dy: -16 })),
    snow: Pd.map(() => ({ o: 0, dy: -16 })),
    bolt: { o: 0, dy: -10 }
  }, B = (ge) => Rd.map(() => ({ o: ge }));
  return v === "clear" ? w ? (y.moon.o = 1, y.stars = B(1)) : y.sun.o = 1 : v === "partly" ? (y.cloud = { x: 52.83, y: 52.83, w: 58.7, o: 1, f: w ? 1 : 0 }, w ? (y.moon = { x: 34, y: 33, d: 48, o: 1 }, y.stars = B(0.7)) : y.sun = { x: 35.22, y: 33.26, r: 23.48, o: 1 }) : v === "cloudy" || v === "fog" ? (y.cloud = { x: 45, y: 42.99, w: 66.52, o: 1, f: w ? 1 : 0 }, w ? y.moon = { x: 40, y: 36, d: 40, o: 0 } : y.sun = { x: 40, y: 36, r: 20, o: 0 }) : (y.cloud = { x: 45, y: 33.26, w: 58.7, o: 1, f: 1 }, w ? y.moon = { x: 38, y: 28, d: 36, o: 0 } : y.sun = { x: 38, y: 28, r: 18, o: 0 }, v === "snow" ? y.snow = Pd.map(() => ({ o: 1, dy: 0 })) : y.rain = Nd.map((ge, oe) => ({ o: v === "storm" && oe === 1 ? 0 : 1, dy: 0 })), v === "storm" && (y.bolt = { o: 1, dy: 0 })), y;
}
const oc = {
  cloud: { enter: [0, 0.55, "dec"], leave: [0.25, 0.8, "acc"], stay: [0.1, 0.75, "std"] },
  body: { enter: [0.35, 0.9, "dec"], leave: [0.15, 0.65, "acc"], stay: [0.1, 0.75, "std"] },
  fx: { enter: [0.55, 1, "dec"], leave: [0, 0.35, "acc"], stay: [0.1, 0.75, "std"] },
  sky: [0.1, 0.8, "std"]
};
function Fp(n, l, o, c = rn, m = !1) {
  const v = { ...rn, ...c }, w = (U, K) => U > 0.01 && K > 0.01 ? "stay" : U > 0.01 ? "leave" : K > 0.01 ? "enter" : "none", A = (U, K, ae, Y) => {
    const G = U[0] + K * Y, W = U[1] - (ae - 1 - K) * Y;
    return Hp[U[2]](on((o - G) / Math.max(1e-3, W - G)));
  }, y = (U, K, ae, Y = 0, G = 1, W = 0) => {
    const pe = w(U.o, K.o);
    if (pe === "none") return { ...K, o: 0 };
    const Q = A(oc[ae][pe], Y, G, W), ue = {};
    for (const X in K) ue[X] = m && pe !== "stay" && X !== "o" ? pe === "leave" ? U[X] : K[X] : tc(U[X], K[X], Q);
    return ue;
  }, B = A(oc.sky, 0, 1, 0);
  let ge, oe;
  if (n.night !== l.night) {
    const U = Math.min(n.clearness, l.clearness), K = Qt(Qt(n.sky, l.sky, 0.5), v.dusk, 0.6 * U);
    ge = B < 0.5 ? Qt(n.sky, K, B * 2) : Qt(K, l.sky, B * 2 - 1), oe = U > 0.5 ? [n.sky, v.dusk, l.sky] : [n.sky, l.sky];
  } else
    ge = Qt(n.sky, l.sky, B), oe = [n.sky, l.sky];
  return {
    night: o < 0.5 ? n.night : l.night,
    clearness: tc(n.clearness, l.clearness, o),
    sky: ge,
    skyStops: oe,
    skyT: B,
    sun: y(n.sun, l.sun, "body"),
    moon: y(n.moon, l.moon, "body"),
    cloud: y(n.cloud, l.cloud, "cloud"),
    stars: l.stars.map((U, K) => y(n.stars[K], U, "fx", K, l.stars.length, 0.05)),
    rain: l.rain.map((U, K) => y(n.rain[K], U, "fx", K, l.rain.length, 0.05)),
    snow: l.snow.map((U, K) => y(n.snow[K], U, "fx", K, l.snow.length, 0.05)),
    bolt: y(n.bolt, l.bolt, "fx")
  };
}
const Op = [
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
], nn = (n, l) => (Op[(l & 7) * 8 + (n & 7)] + 0.5) / 64, Wp = 0, Od = 1, Wd = 2, qd = 3, zd = 4, an = 5, Jr = 6, Di = 7, jd = 8, jl = (n, l) => l <= 0.6665 && ((n - 0.5) * (n - 0.5) + (l - 0.2877) * (l - 0.2877) <= 0.0824 || (n - 0.25) * (n - 0.25) + (l - 0.416) * (l - 0.416) <= 0.0625 || (n - 0.791) * (n - 0.791) + (l - 0.458) * (l - 0.458) <= 0.0437 || n >= 0.25 && n <= 0.791 && l >= 0.416), qp = ["...##", "..##.", ".##..", "#####", "..##.", ".##..", ".#..."], zp = [[7, 0], [0, 13], [5, 13], [2, 24], [11, 9], [6, 9], [9, 0]].map((n) => [n[0] * 13 / 11, n[1] * 28 / 24]), Qc = (n, l, o) => {
  let c = !1;
  for (let m = 0, v = n.length - 1; m < n.length; v = m++) {
    const w = n[m], A = n[v];
    w[1] > o != A[1] > o && l < (A[0] - w[0]) * (o - w[1]) / (A[1] - w[1]) + w[0] && (c = !c);
  }
  return c;
};
function ep(n, { size: l = 90, px: o = 2, oneBit: c = !1, colors: m = rn, ink: v = "#26221e", paper: w = "#fbf9f6", clock: A = 0, idle: y = !1 } = {}) {
  const B = { ...rn, ...m }, ge = Math.sin, oe = Math.PI * 2, U = Math.max(6, Math.round(l / o)), K = U / 90, ae = y ? Math.floor(A / 100) * 100 : 0, Y = y ? ge(oe * ae / 3600) : 0, G = y ? 1.8 * ge(oe * ae / 6400) : 0, W = y ? 0.9 * ge(oe * ae / 4100) : 0, pe = y ? 0.8 * ge(oe * ae / 5200) : 0, Q = ae / 3400 % 1, ue = y && n.bolt.o > 0.5 && (Q < 0.04 || Q > 0.08 && Q < 0.11), X = new Array(U * U), E = new Uint8Array(U * U), N = (M, _, C, P, fe) => {
    C == null || M < 0 || _ < 0 || M >= U || _ >= U || (P >= 1 || P > nn(M + 5, _ + 3)) && (X[_ * U + M] = C, E[_ * U + M] = fe);
  }, ie = (M, _, C, P) => {
    for (let fe = Math.max(0, Math.floor(_ - C) - 1); fe <= Math.min(U - 1, _ + C + 1); fe++) for (let q = Math.max(0, Math.floor(M - C) - 1); q <= Math.min(U - 1, M + C + 1); q++) P(q, fe, q + 0.5 - M, fe + 0.5 - _);
  }, Ae = n.skyStops || [n.sky], I = n.skyT || 0;
  for (let M = 0; M < U; M++) {
    const _ = n.night ? on(1 - (M + 0.5) / (U * 0.7)) * 0.85 : on(((M + 0.5) / U - 0.35) / 0.65) * 0.85;
    for (let C = 0; C < U; C++) {
      let P = Ae[0];
      if (Ae.length > 1) {
        const fe = I * (Ae.length - 1), q = Math.min(Ae.length - 2, Math.floor(fe));
        P = fe - q > nn(C, M) ? Ae[q + 1] : Ae[q];
      }
      _ > nn(C + 2, M + 5) && (P = n.night ? Qt(P, "#000000", 0.28) : Qt(P, "#ffffff", 0.2)), X[M * U + C] = ue ? Qt(P, "#ffffff", 0.25) : P;
    }
  }
  if (n.sun.o > 0.01) {
    const M = n.sun.x * K, _ = n.sun.y * K, C = Math.max(1, n.sun.r * K);
    if (y) {
      const P = C * (1.45 + 0.06 * Y), fe = Qt(B.sun, "#ffffff", 0.55);
      if (ie(M, _, P, (q, se, me, ye) => {
        const $e = Math.sqrt(me * me + ye * ye);
        $e > C && $e < P && N(q, se, fe, 0.26 * (1 - ($e - C) / (P - C)) * n.sun.o, Wp);
      }), n.sun.o > 0.5) {
        const q = Math.floor(ae / 500) % 2, se = Math.max(1, C * 0.22);
        for (let me = 0; me < 8; me++) if (me % 2 === q) for (let ye = C + 1.5; ye < C + 1.5 + se; ye += 0.7) N(Math.floor(M + Math.cos(me * Math.PI / 4) * ye), Math.floor(_ + Math.sin(me * Math.PI / 4) * ye), B.sun, n.sun.o, jd);
      }
    }
    ie(M, _, C, (P, fe, q, se) => {
      if (q * q + se * se > C * C) return;
      const me = ((q * 0.643 + se * 0.766) / C + 1) / 2;
      N(P, fe, on((me - 0.62) / 0.38) > nn(P, fe) ? B.sunEdge : B.sun, n.sun.o, Od);
    });
  }
  if (Rd.forEach((M, _) => {
    const C = n.stars[_].o;
    if (C < 0.01) return;
    const P = Math.floor(M[0] * K), fe = Math.floor(M[1] * K), q = y ? (Math.floor(ae / 300) + _ * 3) % 6 : 0;
    if (q === 5) return;
    const se = Math.round(M[2] * K * (q === 4 ? 0.3 : q < 2 ? 1 : 0.6));
    N(P, fe, B.star, C, Di);
    for (let me = 1; me <= se; me++) {
      const ye = me === se && se > 1 ? Qt(B.star, n.sky, 0.5) : B.star;
      N(P - me, fe, ye, C, Di), N(P + me, fe, ye, C, Di), N(P, fe - me, ye, C, Di), N(P, fe + me, ye, C, Di);
    }
  }), n.moon.o > 0.01) {
    const M = Math.max(1.5, n.moon.d * K * 0.37), _ = n.moon.x * K, C = n.moon.y * K + (y && pe > 0.4 ? -1 : 0), P = _ + 0.547 * M, fe = C - 0.503 * M, q = 0.82 * M, se = Qt(B.moon, "#ffffff", 0.6);
    ie(_, C, M, (me, ye, $e, st) => {
      if ($e * $e + st * st > M * M) return;
      const _t = me + 0.5 - P, ya = ye + 0.5 - fe;
      _t * _t + ya * ya <= q * q || N(me, ye, on((st + M) / (2 * M) * 1.1 - 0.1) > nn(me, ye) ? B.moon : se, n.moon.o, Wd);
    });
  }
  const Ie = Math.max(2, Math.round(15.65 * K)), V = Math.max(1, Math.round(5.87 * K * 0.5));
  Nd.forEach((M, _) => {
    const C = n.rain[_];
    let P = C.dy, fe = C.o;
    if (fe < 0.01) return;
    if (y) {
      const me = (ae / 950 + _ / 3) % 1;
      P += -5 + me * 14, fe *= me < 0.18 ? me / 0.18 : me > 0.72 ? (1 - me) / 0.28 : 1;
    }
    const q = (M[0] + 3 + G) * K, se = (M[1] + P) * K;
    for (let me = 0; me < Ie; me++) for (let ye = 0; ye < V; ye++) N(Math.floor(q - 0.208 * me) + ye, Math.floor(se) + me, B.rain, fe, zd);
  });
  const qe = Math.max(0, Math.round(7.34 * K / 2.6));
  if (Pd.forEach((M, _) => {
    const C = n.snow[_];
    let P = C.dy, fe = 0, q = C.o;
    if (q < 0.01) return;
    if (y) {
      const ye = (ae / 3200 + _ / 5) % 1;
      P += -6 + ye * 14, fe = 1.5 * ge(oe * (ye * 1.5 + _ / 5)), q *= ye < 0.2 ? ye / 0.2 : ye > 0.75 ? (1 - ye) / 0.25 : 1;
    }
    const se = Math.floor((M[0] + 3.67 + fe + G) * K), me = Math.floor((M[1] + 3.67 + P) * K);
    N(se, me, B.snow, q, an);
    for (let ye = 1; ye <= qe; ye++)
      N(se - ye, me, B.snow, q, an), N(se + ye, me, B.snow, q, an), N(se, me - ye, B.snow, q, an), N(se, me + ye, B.snow, q, an), qe > 1 && ye < qe && (N(se - ye, me - ye, B.snow, q, an), N(se + ye, me - ye, B.snow, q, an), N(se - ye, me + ye, B.snow, q, an), N(se + ye, me + ye, B.snow, q, an));
  }), n.bolt.o > 0.01)
    if (U >= 30) {
      const M = 39 + G, _ = 50 + n.bolt.dy;
      for (let C = Math.floor(_ * K); C <= (_ + 28) * K; C++) for (let P = Math.floor(M * K); P <= (M + 13) * K; P++)
        Qc(zp, (P + 0.5) / K - M, (C + 0.5) / K - _) && N(P, C, B.sun, n.bolt.o, Jr);
    } else {
      const M = U / 18, _ = 7, C = 10 + Math.round(n.bolt.dy * 0.2);
      qp.forEach((P, fe) => P.split("").forEach((q, se) => {
        if (q !== "#") return;
        const me = Math.floor((_ + se) * M), ye = Math.floor((C + fe) * M);
        for (let $e = ye; $e < Math.max(ye + 1, Math.floor((C + fe + 1) * M)); $e++) for (let st = me; st < Math.max(me + 1, Math.floor((_ + se + 1) * M)); st++) N(st, $e, B.sun, n.bolt.o, Jr);
      }));
    }
  if (n.cloud.o > 0.01) {
    const M = Math.max(3, n.cloud.w * K), _ = M * 0.6665, C = (n.cloud.x + G) * K - M / 2, P = (n.cloud.y + W) * K - _ / 2, fe = Qt(B.cloudDay, B.cloudNight, Math.round(n.cloud.f * 4) / 4), q = Qt(fe, "#000000", 0.16);
    for (let se = Math.max(0, Math.floor(P) - 1); se <= Math.min(U - 1, P + _ + 1); se++) for (let me = Math.max(0, Math.floor(C) - 1); me <= Math.min(U - 1, C + M + 1); me++) {
      const ye = (me + 0.5 - C) / M, $e = (se + 0.5 - P) / M;
      jl(ye, $e) && N(me, se, !jl(ye, $e + 1 / M) || on(($e - 0.42) / 0.25) * 0.8 > nn(me, se) ? q : fe, n.cloud.o, qd);
    }
  }
  return tp(X, E, U, U, { oneBit: c, ink: v, paper: w, snowInk: !n.night });
}
function tp(n, l, o, c, { oneBit: m, ink: v, paper: w, snowInk: A }) {
  const y = new Uint8ClampedArray(o * c * 4), B = Wl(v), ge = Wl(w);
  for (let oe = 0; oe < c; oe++) for (let U = 0; U < o; U++) {
    const K = oe * o + U, ae = l[K];
    if (n[K] == null) continue;
    let Y = Wl(n[K]);
    if (m) {
      let G;
      ae === zd || ae === jd ? G = !0 : ae === an ? G = A : ae === Di || ae === Jr ? G = !1 : G = Math.round((0.2126 * Y[0] + 0.7152 * Y[1] + 0.0722 * Y[2]) / 255 * 4) / 4 <= nn(U, oe), (ae === Od || ae === Wd || ae === qd || ae === Jr) && (U > 0 && l[K - 1] !== ae || U < o - 1 && l[K + 1] !== ae || oe > 0 && l[K - o] !== ae || oe < c - 1 && l[K + o] !== ae) && (G = !0), Y = G ? B : ge;
    }
    y[K * 4] = Y[0], y[K * 4 + 1] = Y[1], y[K * 4 + 2] = Y[2], y[K * 4 + 3] = 255;
  }
  return { w: o, h: c, data: y };
}
const jp = { clear: 0, partly: 0.35, cloudy: 0.85, fog: 0.9, rain: 1, storm: 1, snow: 0.9 }, Vp = (n) => Zl(n, !1).split("/")[0], fd = (n) => () => {
  n |= 0, n = n + 1831565813 | 0;
  let l = Math.imul(n ^ n >>> 15, 1 | n);
  return l = l + Math.imul(l ^ l >>> 7, 61 | l) ^ l, ((l ^ l >>> 14) >>> 0) / 4294967296;
}, Gp = "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", Up = "M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", Yp = "M0 -1L0.2687 -0.2687L1 0L0.2687 0.2687L0 1L-0.2687 0.2687L-1 0L-0.2687 -0.2687Z", Zp = "M7 0L0 13L5 13L2 24L11 9L6 9L9 0Z", Kp = [[7, 0], [0, 13], [5, 13], [2, 24], [11, 9], [6, 9], [9, 0]], $p = [".##", "##.", ".#.", "#.."];
function ap(n, { width: l, height: o, colors: c, wave: m = 0.38, soft: v = 6, glow: w = 0.6 }) {
  const A = { ...rn, dawn: "#e5a77e", ...c }, y = Jc(A), B = l, ge = o, oe = B / 6, U = oe / 2, K = Math.PI * 2, ae = n.length ? n : [{ cond: "cloudy", night: !1 }], Y = [...Array(12)].map((Q, ue) => {
    const X = ae[Math.min(ue, ae.length - 1)], E = Vp(X.cond), N = ue % 2 === 1;
    return { cond: X.cond, k: E, night: N, sky: y[E][N ? 1 : 0], cover: jp[E] };
  }), G = (Q) => ge * (0.5 - m * Math.cos(K * (Q / oe - 0.25)));
  return { C: A, S: Y, W: B, H: ge, cw: oe, sw: U, TAU: K, yb: G, side: (Q, ue, X) => {
    const E = (Q ? G(ue) - X : X - G(ue)) / Math.max(3, v * 1.4) + 0.5;
    return E <= 0 ? 0 : E >= 1 ? 1 : E;
  }, glowAt: (Q) => {
    const ue = ((Q / oe - 0.25) % 1 + 1) % 1, X = Math.max(0, Math.min(5, Math.round(Q / oe - 0.25))), E = Math.max(0, Math.min(5, Math.round(Q / oe - 0.75))), N = 1 - (Y[2 * X].cover + Y[2 * E + 1].cover) / 2, ie = Math.sin(Math.PI * Math.min(1, Math.max(0, G(Q) / ge)));
    return { c: ue < 0.5 ? A.dusk : A.dawn, a: w * (0.2 + 0.8 * N) * ie * ie };
  }, soft: v, tw: oe * 0.3, sy: ge / 90 };
}
function np(n, { clock: l = 0, ambient: o = !1, seed: c = 1 }) {
  const { S: m, sw: v, side: w, C: A, TAU: y, sy: B } = n, ge = l, oe = { stars: [], suns: [], moons: [], clouds: [], drops: [], flakes: [], fogs: [], bolts: [] };
  return m.forEach((U, K) => {
    const ae = fd(c * 977 + K * 131 + 7), Y = (K + 0.5) * v, G = U.night ? { clear: 9, partly: 5, cloudy: 2, fog: 0, rain: 0, storm: 0, snow: 1 }[U.k] : 0;
    for (let W = 0; W < G; W++) {
      const pe = Y + (ae() - 0.5) * v * 1.6, Q = (6 + ae() * 76) * B, ue = ae() < 0.35, X = 1.8 + ae() * 1.6, E = w(!0, pe, Q) * (ue ? 0.95 : 0.7) * (o ? 0.6 + 0.4 * Math.sin(y * ge / 2600 + W * 1.7 + K) : 1);
      E >= 0.03 && oe.stars.push({ x: pe, y: Q, big: ue, size: X, o: E });
    }
    if (!U.night && (U.k === "clear" || U.k === "partly")) {
      const W = Y + (ae() - 0.5) * v * 0.3, pe = Math.min(15, v * 0.29);
      oe.suns.push({ x: W, y: 32 * B, rad: pe, halo: pe * 2.8 * (o ? 1 + 0.07 * Math.sin(y * ge / 3600 + K) : 1) });
    }
    if (U.night && (U.k === "clear" || U.k === "partly")) {
      const W = Math.min(0.78, v * 0.55 / 34), pe = Y - 23 * W + (ae() - 0.5) * v * 0.2;
      oe.moons.push({ x: pe + 23 * W, y: (4 + (o ? 0.8 * Math.sin(y * ge / 5200 + K) : 0)) * B + 23 * W, d: 46 * W });
    }
  }), m.forEach((U, K) => {
    const ae = { clear: 0, partly: 1, cloudy: 3, fog: 0, rain: 3, storm: 3, snow: 2 }[U.k];
    if (!ae) return;
    const Y = fd(c * 577 + K * 71 + 3), G = (K + 0.5) * v, W = U.k === "rain" || U.k === "storm" || U.night ? A.cloudNight : A.cloudDay, pe = U.night ? 0.82 : U.k === "storm" ? 0.75 : 1;
    for (let Q = 0; Q < ae; Q++) {
      const ue = v / 46 * (U.k === "partly" ? 0.85 : 0.75 + Y() * 0.55), X = G + (U.k === "partly" ? v * 0.12 : (Y() - 0.5) * v * 1.05), E = (U.k === "partly" ? 40 : 6 + Y() * 26) * B, N = o ? 2.5 * Math.sin(y * ge / 9e3 + K * 1.3 + Q * 2.1) : 0, ie = o ? 0.9 * Math.sin(y * ge / 6100 + K + Q) : 0;
      oe.clouds.push({ x: X - 23 * ue + N, y: E - 15.33 * ue + ie, w: 46 * ue, h: 30.66 * ue, fill: W, o: pe * (ae > 1 && Q === 0 ? 0.85 : 1) });
    }
  }), m.forEach((U, K) => {
    const ae = fd(c * 313 + K * 29 + 11), Y = (K + 0.5) * v, G = U.cond === "pouring" ? 16 : U.cond === "rainy" || U.cond === "hail" ? 9 : U.cond === "lightning-rainy" ? 12 : U.cond === "snowy-rainy" ? 5 : 0;
    for (let pe = 0; pe < G; pe++) {
      let Q = Y + (ae() - 0.5) * v * 1.05, ue = 44 + ae() * 36, X = 1;
      if (o) {
        const N = ((ue - 44 + ge * 0.04) % 36 + 36) % 36;
        Q -= 0.21 * (N - (ue - 44)), ue = 44 + N, X = Math.min(1, N / 6, (36 - N) / 6);
      }
      ue *= B;
      const E = w(U.night, Q, ue) * X;
      E >= 0.05 && oe.drops.push({ x: Q, y: ue, o: E });
    }
    const W = U.cond === "snowy" ? 11 : U.cond === "snowy-rainy" ? 6 : 0;
    for (let pe = 0; pe < W; pe++) {
      let Q = Y + (ae() - 0.5) * v * 1.05, ue = 40 + ae() * 44, X = 1;
      if (o) {
        const N = ((ue - 40 + ge * 9e-3) % 44 + 44) % 44;
        ue = 40 + N, Q += 1.6 * Math.sin(y * ge / 2800 + pe * 1.9 + K), X = Math.min(1, N / 6, (44 - N) / 6);
      }
      ue *= B;
      const E = w(U.night, Q, ue) * X;
      E >= 0.05 && oe.flakes.push({ x: Q, y: ue, o: E });
    }
    if (U.k === "fog") {
      const pe = U.night ? "#c8ccd6" : "#ffffff", Q = U.night ? 0.28 : 0.62, ue = o ? 4 * Math.sin(y * ge / 8e3 + K) : 0;
      for (let X = 0; X < 4; X++) oe.fogs.push({ x: Y - v * 0.75 + X % 2 * v * 0.18 + (X % 2 ? ue : -ue), y: (30 + X * 13) * B, w: v * 1.3, c: pe, a: Q });
    }
    if (U.k === "storm") {
      const pe = (ge / 3400 + K * 0.37) % 1;
      oe.bolts.push({ x: Y + (ae() - 0.5) * v * 0.3 - 5, y: 36 * B, o: o && !(pe < 0.05 || pe > 0.09 && pe < 0.12) ? 0.8 : 1 });
    }
  }), oe;
}
function Xp(n, l, o, c, m, v, w, A) {
  const { S: y, C: B, cw: ge, yb: oe, glowAt: U, soft: K, tw: ae, sy: Y } = n, G = new Array(o * c), W = new Uint8Array(o * c), pe = new Uint8Array(o * c), Q = (M, _, C, P, fe) => {
    C == null || M < 0 || _ < 0 || M >= o || _ >= c || (P >= 1 || P > nn(M + 5, _ + 3)) && (G[_ * o + M] = C, W[_ * o + M] = fe);
  }, ue = (M, _, C, P) => {
    for (let fe = Math.max(0, Math.floor(_ - C) - 1); fe <= Math.min(c - 1, _ + C + 1); fe++) for (let q = Math.max(0, Math.floor(M - C) - 1); q <= Math.min(o - 1, M + C + 1); q++) P(q, fe, q + 0.5 - M, fe + 0.5 - _);
  }, X = (M, _, C) => {
    for (let fe = 0; fe < M.length - 1; fe++) {
      const q = (fe + _) * ge;
      if (C < q - ae / 2) return [M[fe], M[fe], 0];
      if (C <= q + ae / 2) return [M[fe], M[fe + 1], (C - q + ae / 2) / ae];
    }
    const P = M[M.length - 1];
    return [P, P, 0];
  }, E = y.filter((M) => !M.night).map((M) => M.sky), N = y.filter((M) => M.night).map((M) => M.sky), ie = K / v, Ae = 16 * Y / v;
  for (let M = 0; M < o; M++) {
    const _ = (M + 0.5) * m, C = oe(_) / v, P = X(E, 0.75, _), fe = X(N, 1.25, _), q = U(_);
    for (let se = 0; se < c; se++) {
      const me = nn(M, se), ye = se + 0.5 - C, $e = (ie > 0.01 ? on(0.5 + ye / ie) : ye > 0 ? 1 : 0) > me;
      let st = $e ? P[2] > me ? P[1] : P[0] : fe[2] > me ? fe[1] : fe[0];
      ($e ? on(((se + 0.5) / c - 0.45) / 0.55) * 0.7 : on(1 - (se + 0.5) / (c * 0.55)) * 0.7) > nn(M + 2, se + 5) && (st = $e ? Qt(st, "#ffffff", 0.18) : Qt(st, "#000000", 0.25)), $e && ye >= 0 && ye < Ae && q.a * 1.3 * (1 - ye / Ae) > nn(M + 6, se + 1) && (st = q.c), G[se * o + M] = st, pe[se * o + M] = $e ? 0 : 1;
    }
  }
  const I = Qt(B.sun, "#ffffff", 0.55), Ie = Qt(B.moon, "#ffffff", 0.6);
  l.stars.forEach((M) => {
    const _ = Math.floor(M.x / m), C = Math.floor(M.y / v);
    if (_ < 0 || C < 0 || _ >= o || C >= c || !pe[C * o + _] || M.o < 0.15) return;
    const P = M.o > 0.45 ? B.star : Qt(B.star, G[C * o + _], 0.5), fe = M.big && M.o > 0.6 ? Math.floor(M.size / m) : 0;
    Q(_, C, P, 1, Di);
    for (let q = 1; q <= fe; q++) [[_ - q, C], [_ + q, C], [_, C - q], [_, C + q]].forEach((se) => {
      se[0] >= 0 && se[1] >= 0 && se[0] < o && se[1] < c && pe[se[1] * o + se[0]] && Q(se[0], se[1], P, 1, Di);
    });
  }), l.suns.forEach((M) => {
    const _ = Math.max(1.5, M.rad / m), C = M.x / m, P = M.y / v, fe = M.halo / m * 0.85;
    if (ue(C, P, fe, (q, se, me, ye) => {
      const $e = Math.sqrt(me * me + ye * ye);
      $e > _ && $e < fe && !pe[se * o + q] && Q(q, se, I, 0.3 * (1 - ($e - _) / (fe - _)), 0);
    }), A) {
      const q = Math.floor(w / 500) % 2, se = Math.max(1, _ * 0.3);
      for (let me = 0; me < 8; me++) if (me % 2 === q) for (let ye = _ + 1.2; ye < _ + 1.2 + se; ye += 0.7) Q(Math.floor(C + Math.cos(me * Math.PI / 4) * ye), Math.floor(P + Math.sin(me * Math.PI / 4) * ye), B.sun, 1, jd);
    }
    ue(C, P, _, (q, se, me, ye) => {
      me * me + ye * ye <= _ * _ && Q(q, se, on(((ye / _ + 1) / 2 - 0.6) / 0.4) > nn(q, se) ? B.sunEdge : B.sun, 1, Od);
    });
  }), l.moons.forEach((M) => {
    const _ = Math.max(1.5, M.d * 0.37 / m), C = M.x / m, P = M.y / v, fe = C + 0.547 * _, q = P - 0.503 * _, se = 0.82 * _;
    ue(C, P, _, (me, ye, $e, st) => {
      if ($e * $e + st * st > _ * _) return;
      const _t = me + 0.5 - fe, ya = ye + 0.5 - q;
      _t * _t + ya * ya > se * se && Q(me, ye, on((st + _) / (2 * _) * 1.1 - 0.1) > nn(me, ye) ? B.moon : Ie, 1, Wd);
    });
  }), l.clouds.forEach((M) => {
    const _ = Math.max(3, M.w / m), C = _ * 0.6665, P = M.x / m, fe = M.y / v, q = Qt(M.fill, "#000000", 0.16);
    for (let se = Math.max(0, Math.floor(fe) - 1); se <= Math.min(c - 1, fe + C + 1); se++) for (let me = Math.max(0, Math.floor(P) - 1); me <= Math.min(o - 1, P + _ + 1); me++) {
      const ye = (me + 0.5 - P) / _, $e = (se + 0.5 - fe) / _;
      jl(ye, $e) && Q(me, se, !jl(ye, $e + 1 / _) || on(($e - 0.42) / 0.25) * 0.8 > nn(me, se) ? q : M.fill, M.o, qd);
    }
  }), l.fogs.forEach((M) => {
    const _ = Math.floor(M.y / v), C = Math.max(_, Math.floor((M.y + 6 * Y) / v) - 1), P = Math.floor(M.x / m), fe = Math.floor((M.x + M.w) / m);
    for (let q = _; q <= C; q++) for (let se = P; se <= fe; se++) {
      const me = (se - P) / Math.max(1, fe - P);
      Q(se, q, M.c, M.a * (me < 0.25 ? me / 0.25 : me > 0.75 ? (1 - me) / 0.25 : 1), 0);
    }
  });
  const V = Math.max(2, Math.round(9 / v));
  l.drops.forEach((M) => {
    const _ = M.x / m, C = Math.floor(M.y / v);
    for (let P = 0; P < V; P++) Q(Math.floor(_ - 0.208 * P * v / m), C + P, B.rain, M.o, zd);
  });
  const qe = Math.max(0, Math.round(4.4 / m / 2.6));
  return l.flakes.forEach((M) => {
    const _ = Math.floor(M.x / m), C = Math.floor(M.y / v);
    Q(_, C, B.snow, M.o, an);
    for (let P = 1; P <= qe; P++)
      Q(_ - P, C, B.snow, M.o, an), Q(_ + P, C, B.snow, M.o, an), Q(_, C - P, B.snow, M.o, an), Q(_, C + P, B.snow, M.o, an);
  }), l.bolts.forEach((M) => {
    if (m <= 3.5)
      for (let _ = Math.floor(M.y / v); _ <= (M.y + 24) / v; _++) for (let C = Math.floor(M.x / m); C <= (M.x + 11) / m; C++)
        Qc(Kp, (C + 0.5) * m - M.x, (_ + 0.5) * v - M.y) && Q(C, _, B.sun, 1, Jr);
    else {
      const _ = Math.round(M.x / m), C = Math.round(M.y / v);
      $p.forEach((P, fe) => P.split("").forEach((q, se) => {
        q === "#" && Q(_ + se, C + fe, B.sun, 1, Jr);
      }));
    }
  }), { col: G, ids: W };
}
function Jp(n, l) {
  const o = l.px, c = Math.max(6, Math.round(l.width / o)), m = Math.max(6, Math.round(l.height / o)), v = l.width / c, w = l.height / m, A = l.ambient ? Math.floor((l.clock || 0) / 100) * 100 : 0, y = (K) => {
    const ae = ap(K, l);
    return Xp(ae, np(ae, { clock: A, ambient: l.ambient, seed: l.seed }), c, m, v, w, A, l.ambient);
  }, B = y(n), ge = l.reveal == null ? 1 : on(l.reveal);
  let oe = B.col, U = B.ids;
  if (ge < 1) {
    const K = l.prev ? y(l.prev) : null, ae = ge * (c + 12);
    oe = new Array(c * m), U = new Uint8Array(c * m);
    for (let Y = 0; Y < c * m; Y++) {
      const G = Y % c, W = Y / c | 0;
      (l.reduce ? ge : on((ae - G) / 12)) > nn(G, W) ? (oe[Y] = B.col[Y], U[Y] = B.ids[Y]) : K ? (oe[Y] = K.col[Y], U[Y] = K.ids[Y]) : (oe[Y] = null, U[Y] = 255);
    }
  }
  return tp(oe, U, c, m, { oneBit: l.oneBit, ink: l.ink, paper: l.paper, snowInk: !1 });
}
function Qp(n, l, o) {
  const c = o.width, m = o.height, v = o.reveal == null ? 1 : on(o.reveal), w = (U, K) => {
    const ae = ap(K, o);
    eu(U, ae, np(ae, o));
  };
  if (n.clearRect(0, 0, c, m), v >= 1) {
    w(n, l);
    return;
  }
  if (o.prev && w(n, o.prev), o.reduce) {
    n.save(), n.globalAlpha = v, w(n, l), n.restore();
    return;
  }
  const A = n.canvas, y = A.__wxOff || (A.__wxOff = document.createElement("canvas"));
  (y.width !== A.width || y.height !== A.height) && (y.width = A.width, y.height = A.height);
  const B = y.getContext("2d");
  B.setTransform(n.getTransform()), B.clearRect(0, 0, c, m), w(B, l);
  const ge = v * (c + 64) - 64, oe = B.createLinearGradient(ge, 0, ge + 64, 0);
  oe.addColorStop(0, "rgba(0,0,0,1)"), oe.addColorStop(1, "rgba(0,0,0,0)"), B.globalCompositeOperation = "destination-in", B.fillStyle = oe, B.fillRect(0, 0, c, m), B.globalCompositeOperation = "source-over", n.save(), n.setTransform(1, 0, 0, 1, 0, 0), n.drawImage(y, 0, 0), n.restore();
}
function eu(n, l, o) {
  const { W: c, H: m, S: v, C: w, cw: A, yb: y, glowAt: B, soft: ge, tw: oe, sy: U } = l, K = (I, Ie) => {
    const V = Wl(I);
    return "rgba(" + V[0] + "," + V[1] + "," + V[2] + "," + Math.max(0, Math.min(1, Ie)).toFixed(3) + ")";
  }, ae = (I, Ie) => {
    const V = n.createLinearGradient(0, 0, c, 0);
    V.addColorStop(0, I[0]);
    for (let qe = 0; qe < I.length - 1; qe++) {
      const M = (qe + Ie) * A, _ = (M - oe / 2) / c, C = (M + oe / 2) / c;
      _ > 0 && _ < 1 && V.addColorStop(_, I[qe]), C > 0 && C < 1 && V.addColorStop(C, I[qe + 1]);
    }
    return V.addColorStop(1, I[I.length - 1]), V;
  }, Y = Math.max(24, Math.ceil(c / 4)), G = (I, Ie) => {
    n.beginPath();
    for (let V = 0; V <= Y; V++) {
      const qe = c * V / Y, M = I == null ? 0 : y(qe) + I;
      V ? n.lineTo(qe, M) : n.moveTo(qe, M);
    }
    for (let V = Y; V >= 0; V--) {
      const qe = c * V / Y;
      n.lineTo(qe, y(qe) + Ie);
    }
    n.closePath(), n.fill();
  };
  n.save(), n.fillStyle = ae(v.filter((I) => !I.night).map((I) => I.sky), 0.75), n.fillRect(0, 0, c, m);
  const W = n.createLinearGradient(0, 0, c, 0);
  for (let I = 0; I <= 64; I++) {
    const Ie = B(c * I / 64);
    W.addColorStop(I / 64, K(Ie.c, Math.min(1, Ie.a)));
  }
  n.fillStyle = W;
  for (let I = 0; I < 8; I++)
    n.globalAlpha = 1 - I / 8, G(I * 2 * U, (I + 1) * 2 * U);
  n.fillStyle = ae(v.filter((I) => I.night).map((I) => I.sky), 1.25);
  const pe = Math.max(0.5, ge), Q = 6;
  n.globalAlpha = 1, G(null, -pe);
  for (let I = 0; I < Q; I++)
    n.globalAlpha = 1 - (I + 0.5) / Q, G(-pe + 2 * pe * I / Q, -pe + 2 * pe * (I + 1) / Q);
  n.globalAlpha = 1;
  const ue = new Path2D(Yp), X = new Path2D(Up), E = new Path2D(Gp), N = new Path2D(Zp);
  n.fillStyle = w.star, o.stars.forEach((I) => {
    n.globalAlpha = I.o, I.big ? (n.save(), n.translate(I.x, I.y), n.scale(I.size, I.size), n.fill(ue), n.restore()) : (n.beginPath(), n.arc(I.x, I.y, 0.8, 0, Math.PI * 2), n.fill());
  }), n.globalAlpha = 1;
  const ie = Qt(w.sun, "#ffffff", 0.55);
  o.suns.forEach((I) => {
    const Ie = n.createRadialGradient(I.x, I.y, 0, I.x, I.y, I.halo);
    Ie.addColorStop(0, K(ie, 0.42)), Ie.addColorStop(0.7, K(ie, 0)), n.fillStyle = Ie, n.beginPath(), n.arc(I.x, I.y, I.halo, 0, Math.PI * 2), n.fill();
    const V = n.createLinearGradient(0, I.y - I.rad, 0, I.y + I.rad);
    V.addColorStop(0.6, w.sun), V.addColorStop(1, w.sunEdge), n.fillStyle = V, n.beginPath(), n.arc(I.x, I.y, I.rad, 0, Math.PI * 2), n.fill();
  });
  const Ae = Qt(w.moon, "#ffffff", 0.6);
  o.moons.forEach((I) => {
    n.save(), n.translate(I.x - I.d / 2, I.y - I.d / 2), n.scale(I.d / 46, I.d / 46);
    const Ie = n.createLinearGradient(0, 6, 0, 40);
    Ie.addColorStop(0, Ae), Ie.addColorStop(1, w.moon), n.fillStyle = Ie, n.fill(X), n.restore();
  }), o.clouds.forEach((I) => {
    n.save(), n.globalAlpha = I.o, n.translate(I.x, I.y), n.scale(I.w / 46, I.h / 30.66), n.translate(-4, -9.67), n.fillStyle = I.fill, n.fill(E), n.restore();
  }), o.fogs.forEach((I) => {
    const Ie = n.createLinearGradient(I.x, 0, I.x + I.w, 0);
    Ie.addColorStop(0, K(I.c, 0)), Ie.addColorStop(0.25, K(I.c, I.a)), Ie.addColorStop(0.75, K(I.c, I.a)), Ie.addColorStop(1, K(I.c, 0)), n.fillStyle = Ie, n.fillRect(I.x, I.y, I.w, 6 * U);
  }), n.fillStyle = w.rain, o.drops.forEach((I) => {
    n.save(), n.globalAlpha = I.o, n.translate(I.x, I.y), n.rotate(12 * Math.PI / 180), n.fillRect(-1.5, 0, 3, 9), n.restore();
  }), n.fillStyle = w.snow, o.flakes.forEach((I) => {
    n.globalAlpha = I.o, n.beginPath(), n.arc(I.x, I.y, 2.2, 0, Math.PI * 2), n.fill();
  }), n.fillStyle = w.sun, o.bolts.forEach((I) => {
    n.save(), n.globalAlpha = I.o, n.translate(I.x, I.y), n.fill(N), n.restore();
  }), n.restore();
}
function tu(n, l) {
  var Zd, Kd, $d, Xd, Jd, Qd, ec;
  const o = (t) => n.getElementById(t), c = o("workoutView"), m = o("workoutNameInput");
  let v = !0;
  const w = o("homeClock");
  function A() {
    w && (w.textContent = new Intl.DateTimeFormat(void 0, { hour: "2-digit", minute: "2-digit" }).format(/* @__PURE__ */ new Date()));
  }
  A(), setInterval(A, 15e3);
  const y = o("createFlow"), B = o("createMovementsSlot"), ge = o("createTimingSlot"), oe = o("createFinishSlot"), U = o("movementStepSummary"), K = o("timingStepSummary"), ae = o("finishStepSummary"), Y = o("continueToTiming"), G = o("continueToFinish"), W = o("finishMoveButton");
  let pe = !1, Q = [];
  function ue(t) {
    !t || Q.some((r) => r.node === t) || Q.push({ node: t, parent: t.parentNode, next: t.nextSibling });
  }
  function X(t, r) {
    t && (ue(t), r.appendChild(t));
  }
  function E() {
    [...Q].reverse().forEach(({ node: t, parent: r, next: s }) => {
      r && (s && s.parentNode === r ? r.insertBefore(t, s) : r.appendChild(t));
    }), Q = [];
  }
  function N(t) {
    n.querySelectorAll(".createStep").forEach((r) => {
      r.classList.toggle("active", r.dataset.createStep === t);
    }), t === "timing" && (pe = !0), ie();
  }
  function ie() {
    var le, he;
    if (!ke) return;
    Ke[xt];
    const t = Je.filter((ne) => !ne.hidden), r = t.filter((ne) => ne.kind !== "rest").length, s = t.filter((ne) => ne.kind === "rest").length;
    U.textContent = r ? r + " movement" + (r === 1 ? "" : "s") + (s ? " · " + s + " rest" + (s === 1 ? "" : "s") : "") : "No movements yet";
    const p = r > 0, g = n.querySelector('[data-open-step="timing"]'), T = n.querySelector('[data-open-step="finish"]');
    g.disabled = !p, Y.disabled = !p, K.textContent = p ? On(_.value) + " · " + Ut(C.value) + " movement · " + Ut(P.value) + " rest" : "Add a movement first", T.disabled = !(p && pe);
    const R = ((m == null ? void 0 : m.value) || "").trim(), j = [];
    (le = o("includeWarmupPreset")) != null && le.checked && j.push("warm-up"), (he = o("includeCooldownPreset")) != null && he.checked && j.push("cooldown"), ae.textContent = R ? R + (j.length ? " · " + j.join(" + ") : "") : j.length ? j.join(" + ") : "Name and optional extras";
  }
  function Ae() {
    var Ee, Qe, We;
    y.hidden = !1, pe = !1;
    const t = n.querySelector(".editNameRow"), r = o("createMoveOptions"), s = n.querySelector(".timeTiles"), p = o("routineSummaryModal"), g = n.querySelector(".tempoRevealRow"), T = o("tempoExperiment"), R = (Ee = o("warmupList")) == null ? void 0 : Ee.closest("section"), j = o("movementCreatorLaunch"), le = o("movementCreator"), he = (Qe = o("strengthList")) == null ? void 0 : Qe.closest("section"), ne = (We = o("cooldownList")) == null ? void 0 : We.closest("section");
    [r == null ? void 0 : r.querySelector(".createExtras"), R, j, le, he, ne].forEach((_e) => _e && X(_e, B)), [r, s, p, g, T].forEach((_e) => X(_e, ge)), X(t, oe), N("movements"), ie();
  }
  function I() {
    E(), y.hidden = !0, n.querySelectorAll(".createStep").forEach((t) => t.classList.remove("active"));
  }
  n.querySelectorAll("[data-open-step]").forEach((t) => t.addEventListener("click", () => {
    t.disabled || N(t.dataset.openStep);
  })), Y.addEventListener("click", () => {
    Y.disabled || N("timing");
  }), G.addEventListener("click", () => N("finish")), W.addEventListener("click", () => o("saveWorkoutEdit").click());
  const Ie = { home: o("homeView"), workout: o("workoutView"), settings: o("settingsView") }, V = o("homeNav"), qe = o("settingsNav");
  function M(t) {
    Object.entries(Ie).forEach(([r, s]) => s.classList.toggle("active", r === t)), V.classList.toggle("active", t === "home"), qe.classList.toggle("active", t === "settings"), t === "home" && setTimeout(Ui, 400), t === "settings" && (requestAnimationFrame(() => vi(n.querySelector(".tab.active"), !1)), mo());
  }
  const _ = o("totalTime"), C = o("workTime"), P = o("restTime"), fe = o("totalOut"), q = o("workOut"), se = o("restOut"), me = o("totalFill"), ye = o("workFill"), $e = o("restFill"), st = o("roundsInput"), _t = o("roundsFill"), ya = o("roundsOut"), Ha = o("totalLabel"), mt = o("routineSummaryModal"), Xe = [
    { id: "standing-reach", name: "Standing reach", group: "Warm-up", kind: "warmup", hidden: !1 },
    { id: "arm-circles", name: "Arm circles", group: "Warm-up", kind: "warmup", hidden: !1 },
    { id: "hip-hinge", name: "Hip hinge drill", group: "Warm-up", kind: "warmup", hidden: !1 }
  ];
  let At = Xe.map((t) => ({ ...t })), Je = [
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
  const va = [
    { id: "hip-flexor", name: "Hip flexor stretch", group: "Cooldown", kind: "cooldown", hidden: !1 },
    { id: "chest-opener", name: "Chest opener", group: "Cooldown", kind: "cooldown", hidden: !1 },
    { id: "hamstring", name: "Hamstring stretch", group: "Cooldown", kind: "cooldown", hidden: !1 },
    { id: "slow-breathing", name: "Slow breathing", group: "Cooldown", kind: "cooldown", hidden: !1 }
  ];
  let _a = va.map((t) => ({ ...t }));
  const mr = {
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
  }, lt = yo(l.data), Ke = lt.profiles;
  let xt = Ke[lt.selected] ? lt.selected : lt.order.find((t) => Ke[t]) || "kettlebell";
  function yo(t) {
    const r = t && typeof t == "object" ? JSON.parse(JSON.stringify(t)) : {}, s = r.profiles && Object.keys(r.profiles).length ? r.profiles : JSON.parse(JSON.stringify(mr)), p = (Array.isArray(r.order) ? r.order : Object.keys(s)).filter((g) => s[g]);
    return Object.keys(s).forEach((g) => {
      p.includes(g) || p.push(g);
    }), {
      v: 1,
      profiles: s,
      order: p,
      selected: r.selected || p[0],
      history: Array.isArray(r.history) ? r.history : [],
      checkins: (Array.isArray(r.checkins) ? r.checkins : gr(r.energy)).map(Bi),
      settings: { ...r.settings || {} }
    };
  }
  function gr(t) {
    if (!Array.isArray(t)) return [];
    const r = ["Drained", "Low", "Okay", "Good", "Energised", "Great"], s = [];
    return t.forEach((p) => {
      const g = new Date(p.at);
      if (isNaN(g)) return;
      const T = g.getFullYear() + "-" + String(g.getMonth() + 1).padStart(2, "0") + "-" + String(g.getDate()).padStart(2, "0"), R = g.getHours() < 14 ? "morning" : "evening";
      if (s.some((le) => le.date === T && le.slot === R)) return;
      const j = r.indexOf(p.value) + 1;
      j > 0 && s.push({ date: T, slot: R, mood: null, energy: j, at: p.at });
    }), s;
  }
  function Bi(t) {
    if (t.scale === 100) return t;
    const r = (s) => s == null ? null : Math.round((Number(s) - 1) / 5 * 100);
    return { ...t, mood: r(t.mood), energy: r(t.energy), scale: 100 };
  }
  function ka() {
    ke || (lt.selected = xt, lt.order = lt.order.filter((t) => Ke[t] && t !== jt), l.save(lt));
  }
  function ut() {
    return lt.settings;
  }
  function zt(t) {
    const r = Ke[t];
    if (!r) return;
    xt = t;
    const s = o("workoutNameInput");
    if (s && (s.value = r.name), _.value = r.total, C.value = r.work, P.value = r.rest, st.value = r.rounds || 1, r.customSequence) {
      const p = (r.sequence || []).map((T) => ({ ...T })), g = (T) => p.filter((R) => R.presetRole === T).map(({ presetRole: R, ...j }) => j);
      At = (r.warmup || g("warmup")).map((T) => ({ ...T })), _a = (r.cooldown || g("cooldown")).map((T) => ({ ...T })), Je = p.filter((T) => !T.presetRole), Ko(r.preset || "movement", !1);
    } else
      _.min = 3, _.max = 40, _.step = 1, C.min = 20, C.max = 60, C.step = 5, P.min = 5, P.max = 30, P.step = 5, At = (r.warmup || Xe).map((p) => ({ ...p })), _a = (r.cooldown || va).map((p) => ({ ...p })), Je = r.strength.map((p) => Array.isArray(p) ? (([g, T, R, j = !1]) => ({ id: g, name: T, group: R, kind: "work", hidden: !!j }))(p) : { ...p });
    n.querySelectorAll(".workoutPanel[data-workout]").forEach((p) => p.classList.toggle("active", p.dataset.workout === t)), Mt();
  }
  function vr(t, r, s) {
    const p = t.getBoundingClientRect(), g = p.width / 2, T = p.height / 2, R = r - g, j = s - T;
    let le = 1 / 0, he = 1 / 0;
    R !== 0 && (le = g / Math.abs(R)), j !== 0 && (he = T / Math.abs(j));
    const ne = Math.min(Math.max(1 / Math.min(le, he), 0), 1);
    let te = Math.atan2(j, R) * (180 / Math.PI) + 90;
    return te < 0 && (te += 360), { edge: ne, angle: te };
  }
  function Yo(t, r, s = !1) {
    const p = t.getBoundingClientRect(), g = r.clientX - p.left, T = r.clientY - p.top, { edge: R, angle: j } = vr(t, g, T), le = s ? 100 : R * 100;
    t.style.setProperty("--edge-proximity", le.toFixed(3)), t.style.setProperty("--cursor-angle", j.toFixed(3) + "deg"), t.classList.toggle("borderGlowActive", s || le >= 30);
  }
  function kt(t) {
    t.addEventListener("pointermove", (s) => Yo(t, s, !1)), t.addEventListener("pointerenter", (s) => Yo(t, s, !1)), t.addEventListener("pointerdown", (s) => Yo(t, s, !0));
    const r = () => {
      t.classList.remove("borderGlowActive"), t.style.setProperty("--edge-proximity", "0");
    };
    t.addEventListener("pointerleave", r), t.addEventListener("pointerup", r), t.addEventListener("pointercancel", r);
  }
  kt(o("addWorkoutPanel"));
  let ke = !1, jt = null;
  function Oe(t) {
    return String(t ?? "").replace(/[&<>"']/g, (r) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[r]);
  }
  function Fa(t) {
    return t.summary ? t.summary : t.customSequence ? On(t.total) + " · custom move" : On(t.total) + " · " + Ut(t.work) + " / " + Ut(t.rest) + " · warm-up + cooldown";
  }
  function In(t, r) {
    var T;
    const s = document.createElement("article");
    s.className = "workoutPanel", s.dataset.workout = t, s.tabIndex = 0;
    const p = r.activityCount ?? (((T = r.sequence) == null ? void 0 : T.length) || 0);
    s.innerHTML = '<span class="edgeLight" aria-hidden="true"></span><div class="panelExpanded"><div><div class="workoutPanelTop"><div><div class="workoutName">' + Oe(r.name) + '</div><div class="sub">' + Oe(Fa(r)) + '</div><span class="sourceTag">' + Oe(r.source || "Custom move") + '</span></div><button class="pill seeWorkoutBtn" type="button">Edit</button></div></div><div class="workoutFooter"><div><strong class="activityCount">' + (p ? p + " activities" + ((r.rounds || 1) > 1 ? " × " + r.rounds : "") : "—") + '</strong></div><div class="workoutPanelActions"><button class="primary startWorkoutBtn" type="button">Start move</button></div></div></div><div class="panelCollapsed"><div class="panelCollapsedText">' + Oe(r.name) + "</div></div>";
    const g = o("addWorkoutPanel");
    return o("workoutGallery").insertBefore(s, g), kt(s), s.addEventListener("click", (R) => {
      R.target.closest("button") || zt(t);
    }), s.addEventListener("keydown", (R) => {
      (R.key === "Enter" || R.key === " ") && !R.target.closest("button") && (R.preventDefault(), zt(t));
    }), s.querySelector(".seeWorkoutBtn").addEventListener("click", (R) => {
      R.stopPropagation(), zt(t), is(!1);
    }), s.querySelector(".startWorkoutBtn").addEventListener("click", (R) => {
      R.stopPropagation(), zt(t), od();
    }), s;
  }
  function Ri() {
    n.querySelectorAll(".workoutPanel[data-workout]").forEach((t) => t.remove()), lt.order.forEach((t) => {
      Ke[t] && In(t, Ke[t]);
    }), n.querySelectorAll(".workoutPanel[data-workout]").forEach((t) => t.classList.toggle("active", t.dataset.workout === xt));
  }
  Ri(), o("addWorkoutPanel").addEventListener("keydown", (t) => {
    (t.key === "Enter" || t.key === " ") && (t.preventDefault(), o("addWorkoutPanel").click());
  }), o("addWorkoutPanel").addEventListener("click", () => {
    ke = !0, jt = "custom-" + Date.now(), Ke[jt] = {
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
    }, zt(jt), is(!0);
  });
  let Ge = [], ot = 0, ea = 0, ko = 1, Oa = !1, ta = null, Zo = null, ra = !1, Hn = lt.settings.upcomingCount ?? "all", Fn = "movement";
  function Mo(t, r, s) {
    return (Number(t) - r) / (s - r) * 100;
  }
  function Ut(t) {
    const r = Math.max(0, Number(t) || 0);
    return r >= 3600 && r % 3600 === 0 ? r / 3600 + " hr" : r >= 60 && r % 60 === 0 ? r / 60 + " min" : r >= 60 ? Math.round(r / 60) + " min" : Math.round(r) + " sec";
  }
  function On(t) {
    const r = Math.max(0, Number(t) || 0);
    return r >= 60 && r % 60 === 0 ? r / 60 + " hr" : r >= 60 ? Math.floor(r / 60) + " hr " + r % 60 + " min" : r + " min";
  }
  function Wa() {
    me.style.width = Mo(_.value, Number(_.min), Number(_.max)) + "%", ye.style.width = Mo(C.value, Number(C.min), Number(C.max)) + "%", $e.style.width = Mo(P.value, Number(P.min), Number(P.max)) + "%", q.textContent = Ut(C.value), se.textContent = Ut(P.value);
    const t = Number(st.value) || 1;
    _t.style.width = Mo(t, 1, 10) + "%", Ha.textContent = t > 1 ? "Time per round" : "Total time";
  }
  function Wn(t) {
    return t.filter((r) => !r.hidden);
  }
  function ao(t) {
    const r = Math.max(0, Math.round(Number(t) || 0)), s = Math.floor(r / 3600), p = Math.floor(r % 3600 / 60), g = r % 60;
    return (s ? s + ":" + String(p).padStart(2, "0") : p) + ":" + String(g).padStart(2, "0");
  }
  function oa(t) {
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
        const j = r.pathname.match(/^\/(embed|shorts|live|v)\/([^/?#]+)/);
        j && (p = j[2]);
      }
    if (!p || !/^[\w-]{11}$/.test(p)) return null;
    const g = (j) => {
      if (!j) return 0;
      if (/^\d+$/.test(j)) return Number(j);
      const le = j.match(/^(?:(\d+)h)?(?:(\d+)m)?(?:(\d+)s)?$/);
      return le ? (Number(le[1]) || 0) * 3600 + (Number(le[2]) || 0) * 60 + (Number(le[3]) || 0) : 0;
    }, T = g(r.searchParams.get("t") || r.searchParams.get("start")), R = g(r.searchParams.get("end"));
    return { id: p, start: T, end: R > T ? R : null };
  }
  function qn(t, r) {
    if (t.useVideoLength === !1) return Math.max(5, Number(t.duration) || r || 300);
    const s = Number(t.start) || 0, p = Number(t.end) || Number(t.videoDuration) || 0;
    return p > s ? Math.round(p - s) : Number(t.duration) || 300;
  }
  function sn(t, r) {
    const s = Math.max(0, Number(t) || 0);
    return Math.round(r === "hour" ? s * 3600 : r === "min" ? s * 60 : s);
  }
  function Ko(t, r = !0) {
    Fn = t, n.querySelectorAll(".createPresetBtn").forEach((p) => p.classList.toggle("active", p.dataset.movePreset === t));
    const s = Ke[xt];
    s && (s.preset = t), t === "work" ? (_.min = 30, _.max = 480, _.step = 30, C.min = 300, C.max = 7200, C.step = 300, P.min = 60, P.max = 1800, P.step = 60, r && (_.value = 60, C.value = 1500, P.value = 300), o("addMovementUnit").value = "min", o("addMovementDuration").value = 25, o("addRestUnit").value = "min", o("addRestDuration").value = 5) : (_.min = 3, _.max = 40, _.step = 1, C.min = 20, C.max = 60, C.step = 5, P.min = 5, P.max = 30, P.step = 5, r && (_.value = 20, C.value = 45, P.value = 15), o("addMovementUnit").value = "sec", o("addMovementDuration").value = 45, o("addRestUnit").value = "sec", o("addRestDuration").value = 30), Wa();
  }
  function Ni(t, r) {
    const s = Fn === "work";
    return t.map((p, g) => ({ ...p, id: r + "-" + g + "-" + Date.now().toString(36), useGlobalTiming: !s, duration: s ? 60 : Number(C.value) }));
  }
  function Pi() {
    const t = Ke[xt];
    t != null && t.customSequence && (t.includeWarmup = o("includeWarmupPreset").checked, t.includeCooldown = o("includeCooldownPreset").checked, t.includeWarmup && !At.length && (At = Ni(Xe, "warm")), t.includeCooldown && !_a.length && (_a = Ni(va, "cool")), Mt());
  }
  function Qr() {
    const t = o("upcomingCountSetting");
    if (!t) return;
    const r = Math.max(1, Ge.length - 1), s = Hn;
    t.innerHTML = "";
    for (let T = 1; T <= r; T++) {
      const R = document.createElement("option");
      R.value = String(T), R.textContent = String(T), t.appendChild(R);
    }
    const p = document.createElement("option");
    p.value = "all", p.textContent = "All", t.appendChild(p);
    const g = s === "all" ? "all" : String(Math.min(Number(s) || 1, r));
    t.value = g, Hn = g === "all" ? "all" : Number(g);
  }
  function Mt() {
    Number(_.value) * 60;
    const t = Number(C.value), r = Number(P.value), s = Ke[xt], p = !!(s != null && s.customSequence), g = (p ? !s.includeWarmup : s != null && s.warmupOff) ? [] : Wn(At), T = Wn(Je), R = p && !s.includeCooldown ? [] : Wn(_a);
    if (s && (s.total = Number(_.value), s.work = t, s.rest = r, s.rounds = Number(st.value) || 1, s.customSequence ? (s.sequence = Je.map((Le) => ({ ...Le })), s.warmup = At.map((Le) => ({ ...Le })), s.cooldown = _a.map((Le) => ({ ...Le }))) : (s.strength = Je.map((Le) => ({ ...Le })), s.warmup = At.map((Le) => ({ ...Le })), s.cooldown = _a.map((Le) => ({ ...Le })))), s != null && s.customSequence) {
      const Le = [...g.map((ct) => ({ ...ct, section: "warmup" })), ...T, ...R.map((ct) => ({ ...ct, section: "cooldown" }))].map((ct) => {
        if (ct.kind === "video") return { ...ct, duration: qn(ct, t), rest: 0 };
        if (ct.kind === "rest") {
          const ha = ct.useGlobalTiming === !0 ? r : Number(ct.duration) || r;
          return { ...ct, duration: ha, rest: 0 };
        }
        const ua = ct.useGlobalTiming === !1 && Number(ct.duration) || t;
        return { ...ct, duration: ua, rest: 0 };
      });
      s.autoRest && Number(s.autoRestDuration) > 0 ? (Ge = [], Le.forEach((ct, ua) => {
        Ge.push(ct);
        const ha = Le[ua + 1];
        ct.kind !== "rest" && ha && ha.kind !== "rest" && Ge.push({
          id: "auto-rest-" + ua,
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
      Ge = [...g.map((Le) => ({ ...Le, section: "warmup" })), ...T, ...R.map((Le) => ({ ...Le, section: "cooldown" }))].map((Le) => Le.kind === "video" ? { ...Le, duration: qn(Le, t), rest: 0 } : Le.kind === "rest" ? { ...Le, duration: Le.useGlobalTiming === !0 ? r : Number(Le.duration) || r, rest: 0 } : { ...Le, duration: Le.useGlobalTiming === !1 && Number(Le.duration) || t, rest: r }), Ge.forEach((Le, ct) => {
        var ua;
        ((ua = Ge[ct + 1]) == null ? void 0 : ua.kind) === "rest" && (Le.rest = 0);
      }), Ge.length && (Ge[Ge.length - 1].rest = 0);
    const j = Math.max(1, Math.min(10, Number(st.value) || 1)), le = Ge, he = (Le) => j <= 1 ? null : Le.section === "warmup" || Le.presetRole === "warmup" ? "first" : Le.section === "cooldown" || Le.presetRole === "cooldown" ? "last" : Le.kind === "video" && (Le.videoRounds === "first" || Le.videoRounds === "last") ? Le.videoRounds : null, ne = (Le) => !!he(Le), te = le.filter((Le) => !ne(Le)), Ee = le.filter(ne), Qe = te.length, We = te.reduce((Le, ct) => Le + ct.duration + ct.rest, 0), _e = Ee.reduce((Le, ct) => Le + ct.duration + ct.rest, 0), Me = [
      Ee.some((Le) => Le.section === "warmup" || Le.presetRole === "warmup") && "warm-up",
      Ee.some((Le) => Le.section === "cooldown" || Le.presetRole === "cooldown") && "cooldown",
      Ee.some((Le) => Le.kind === "video" && !Le.section && !Le.presetRole) && "video"
    ].filter(Boolean), ft = Me.length > 1 ? Me.slice(0, -1).join(", ") + " & " + Me[Me.length - 1] : Me[0] || "";
    Ge = [];
    const vt = (Le, ct) => {
      const ua = he(Le);
      return !ua || (ua === "first" ? ct === 1 : ct === j);
    };
    for (let Le = 1; Le <= j; Le++)
      if (le.filter((ct) => vt(ct, Le)).forEach((ct, ua) => Ge.push({ ...ct, id: ct.id + (j > 1 ? "-r" + Le : ""), round: Le, roundIndex: ua })), Le < j && Qe)
        if (s != null && s.customSequence)
          Ge.push({ id: "round-break-" + Le, name: "Rest", group: "Round " + (Le + 1) + " next", kind: "rest", hidden: !1, duration: r, rest: 0, round: Le, roundIndex: Qe, roundBreak: !0 });
        else {
          const ct = Ge[Ge.length - 1];
          ct.rest = r, ct.roundBreakAfter = !0;
        }
    Wa();
    const ze = Ge.reduce((Le, ct) => Le + ct.duration + ct.rest, 0), wt = Math.round(We / 60), Et = Math.round(ze / 60), rt = j > 1 ? On(wt) + " × " + j + " rounds" + (_e ? " + " + Ut(_e) + " " + ft : "") + " (" + On(Et) + ")" : On(Et), nt = [g.length ? "warm-up" : "", R.length ? "cooldown" : ""].filter(Boolean), da = s != null && s.customSequence ? rt + " · " + Qe + " items" + (nt.length && !(j > 1 && _e) ? " · " + nt.join(" + ") : "") : rt + " · " + Ut(t) + " / " + Ut(r) + (nt.length && !(j > 1 && _e) ? " · " + nt.join(" + ") : "");
    fe.textContent = Ut(We);
    const Aa = Ge.filter((Le) => !Le.roundBreak).length, Yt = j > 1 ? Aa + " activities · " + j + " rounds" : Qe + " activities";
    ya.textContent = j > 1 ? j + " rounds · " + On(Et) + " total" : "1 round", o("roundsCount").textContent = j, n.querySelectorAll("[data-rounds-step]").forEach((Le) => {
      Le.disabled = Number(Le.dataset.roundsStep) < 0 ? j <= 1 : j >= 10;
    }), s && (s.summary = da, s.activityCount = Qe);
    const Ti = n.querySelector(".workoutPanel.active .sub");
    Ti && (Ti.textContent = da), mt.textContent = da, Pe(), n.querySelectorAll(".workoutPanel.active .activityCount").forEach((Le) => Le.textContent = Yt), Wa(), Xo(), zn(), Tn(), Qr(), ke && ie(), Ie.workout.classList.contains("active") && !ta && Bo();
  }
  const qa = '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><g fill="currentColor"><circle cx="9" cy="6" r="1.6"/><circle cx="15" cy="6" r="1.6"/><circle cx="9" cy="12" r="1.6"/><circle cx="15" cy="12" r="1.6"/><circle cx="9" cy="18" r="1.6"/><circle cx="15" cy="18" r="1.6"/></g></svg>', Ii = '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6z"/></svg>', Hi = {
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
  }, Ea = (t) => '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">' + (Hi[t] || "") + "</svg>";
  n.querySelectorAll("[data-icon]").forEach((t) => {
    t.innerHTML = Ea(t.dataset.icon);
  });
  let Bt = null, ia = null;
  function Ct(t) {
    return t = Math.max(1, Number(t) || 0), t >= 3600 && t % 3600 === 0 ? { value: t / 3600, unit: "hour" } : t >= 60 && t % 60 === 0 ? { value: t / 60, unit: "min" } : { value: t, unit: "sec" };
  }
  function no(t = !1) {
    const r = n.querySelector(".moveEditForm input[data-f=url],.moveEditForm input[data-f=name]");
    r && (r.focus({ preventScroll: !0 }), t && r.select());
  }
  function Cn(t, r, s = {}) {
    const p = t.kind === "rest", g = t.kind === "video", T = g ? t.useVideoLength !== !1 : p ? t.useGlobalTiming === !0 : t.useGlobalTiming !== !1, R = Number(p ? P.value : C.value), j = Ct(g ? t.useVideoLength === !1 ? t.duration : qn({ ...t, useVideoLength: !0 }) : T ? R : t.duration || R), le = g && (Number(t.videoDuration) > 0 || Number(t.end) > 0), he = g ? '<label class="moveEditWide"><span>YouTube link</span><input class="addInput" data-f="url" type="url" inputmode="url" autocomplete="off" value="' + Oe(t.url || "") + '" placeholder="Paste a YouTube link"></label><label><span>Name</span><input class="addInput" data-f="name" type="text" value="' + Oe(t.autoName ? "" : t.name) + '" placeholder="Uses the video’s title"></label><label><span>Plays in</span><select class="creatorUnitSelect" data-f="rounds">' + [["every", "Every round"], ["first", "The first round only"], ["last", "The last round only"]].map(([ze, wt]) => '<option value="' + ze + '"' + ((t.videoRounds || "every") === ze ? " selected" : "") + ">" + wt + "</option>").join("") + '</select></label><p class="fieldError" data-f="urlError" hidden>That isn’t a YouTube link. Copy it from the Share button on YouTube.</p>' : '<label><span>Name</span><input class="addInput" data-f="name" type="text" value="' + Oe(t.name) + '" placeholder="' + (p ? "Rest" : "Name this movement") + '"></label><label><span>Type / group</span><input class="addInput" data-f="group" type="text" value="' + Oe(t.group) + '" placeholder="' + (p ? "Rest" : "e.g. Glutes + legs") + '"></label>', ne = g ? "Play the whole " + (Number(t.start) > 0 || Number(t.end) > 0 ? "clip" : "video") + (le ? " · " + ao(qn({ ...t, useVideoLength: !0 })) : "") : "Use global timing · " + Ut(R), te = document.createElement("div");
    te.className = "moveRow editing" + (s.sheet ? " inSheet" : ""), te.dataset.index = r, te.dataset.id = t.id;
    const Ee = s.isNew ?? (ia == null ? void 0 : ia.item) === t, Qe = s.sheet ? '<div class="moveEditActions sheetActions">' + (Ee ? "" : '<div class="sheetSecondary"><button class="hideBtn" type="button" data-a="hide">' + (t.hidden ? "Show" : "Hide") + '</button><button class="removeBtn" type="button" data-a="remove" aria-label="Hold to remove ' + Oe(t.name) + '"><span class="removeFill"></span><span class="removeLabel">Remove</span></button></div>') + '<div class="sheetPrimary"><button class="pill" type="button" data-a="cancel">Cancel</button><button class="primary" type="button" data-a="save">' + (Ee ? "Add" : "Save") + "</button></div></div>" : '<div class="moveEditActions"><button class="pill" type="button" data-a="cancel">Cancel</button><button class="primary" type="button" data-a="save">Save</button></div>';
    te.innerHTML = '<div class="moveEditForm"><div class="moveEditFields' + (g ? " videoFields" : "") + '">' + he + '</div><div class="moveEditTiming"><label class="globalTimingToggle"><input type="checkbox" data-f="global"' + (T ? " checked" : "") + '><span class="toggleTrack" aria-hidden="true"><span class="toggleThumb"></span></span><span class="toggleLabel">' + Oe(ne) + '</span></label><div class="creatorDurationRow"><input class="addInput creatorNumber" data-f="dur" type="number" min="1" max="3600" step="1" value="' + j.value + '" aria-label="Duration"><select class="creatorUnitSelect" data-f="unit" aria-label="Duration unit">' + ["sec", "min", "hour"].map((ze) => '<option value="' + ze + '"' + (ze === j.unit ? " selected" : "") + ">" + { sec: "seconds", min: "minutes", hour: "hours" }[ze] + "</option>").join("") + "</select></div></div>" + Qe + "</div>";
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
      Ee && gn(), Bt = null, Mt();
    }, ft = () => {
      var Et;
      if (g) {
        vt();
        return;
      }
      const ze = We("name").value.trim();
      if (!ze) {
        We("name").focus();
        return;
      }
      t.name = ze, t.group = We("group").value.trim() || (p ? "Rest" : "Movement");
      const wt = We("global").checked;
      if (t.useGlobalTiming = wt, wt || (t.duration = Math.max(p ? 5 : 1, sn(We("dur").value, We("unit").value))), s.sheet) {
        (Et = s.onSaved) == null || Et.call(s);
        return;
      }
      Ee && (ia = null), Bt = null, Mt(), Gt(Ee ? p ? "Rest added" : "Movement added" : "Movement updated");
    }, vt = () => {
      var nt;
      const ze = We("url").value.trim(), wt = oa(ze);
      if (!wt) {
        We("urlError").hidden = !1, We("url").classList.add("invalid"), We("url").focus();
        return;
      }
      const Et = wt.id !== t.videoId;
      t.url = ze, t.videoId = wt.id, t.start = wt.start, t.end = wt.end, Et && (t.videoDuration = null, t.videoError = null);
      const rt = We("name").value.trim();
      t.autoName = !rt, t.name = rt || (Et ? "" : t.name) || t.videoTitle || "YouTube video", t.group = "Video", t.videoRounds = We("rounds").value, t.useVideoLength = We("global").checked, t.useVideoLength || (t.duration = Math.max(5, sn(We("dur").value, We("unit").value))), s.sheet ? (nt = s.onSaved) == null || nt.call(s) : (Ee && (ia = null), Bt = null, Mt(), Gt(Ee ? "Video added" : "Video updated")), (Et || !t.videoDuration || t.autoName && !t.videoTitle) && gl(t);
    };
    if (g && We("url").addEventListener("input", () => {
      We("urlError").hidden = !0, We("url").classList.remove("invalid");
    }), te.querySelector("[data-a=cancel]").addEventListener("click", Me), te.querySelector("[data-a=save]").addEventListener("click", ft), s.sheet && !Ee) {
      te.querySelector("[data-a=hide]").addEventListener("click", () => {
        var wt;
        return (wt = s.onHide) == null ? void 0 : wt.call(s);
      });
      const ze = te.querySelector("[data-a=remove]");
      mi(ze, ze.querySelector(".removeFill"), 1200, () => {
        var wt;
        return (wt = s.onRemove) == null ? void 0 : wt.call(s);
      });
    }
    return te.addEventListener("keydown", (ze) => {
      ze.key === "Escape" && (ze.preventDefault(), ze.stopPropagation(), Me()), ze.key === "Enter" && ze.target.matches("input") && (ze.preventDefault(), ft());
    }), te;
  }
  function So(t, r) {
    const s = o(r);
    s.innerHTML = "", t.forEach((p, g) => {
      if (p === Bt && !ve()) {
        s.appendChild(Cn(p, g));
        return;
      }
      const T = document.createElement("div");
      T.className = "moveRow" + (p.hidden ? " hidden" : "") + (p.kind === "rest" ? " restItem" : "") + (p.kind === "video" ? " videoItem" : "") + (Ms(p) ? " noMeta" : ""), T.dataset.index = g, T.dataset.id = p.id;
      const R = p.kind === "rest" ? p.useGlobalTiming === !0 ? "Global timing" : Ut(p.duration) : p.useGlobalTiming === !1 ? Ut(p.duration) : "Global timing", j = p.kind === "video" ? '<span class="moveKindBadge">Video</span>' : "", le = p.kind === "video" ? p.videoError ? "YouTube · can’t play outside YouTube" : "YouTube · " + (p.useVideoLength === !1 ? "stops after " + Ut(p.duration) : Number(p.videoDuration) > 0 || Number(p.end) > 0 ? ao(qn(p)) : "plays to the end") + (p.videoRounds === "first" ? " · first round only" : p.videoRounds === "last" ? " · last round only" : "") : p.group + " · " + R, he = '<button class="dragHandle" type="button" title="Drag to reorder" aria-label="Reorder ' + Oe(p.name) + '. Drag, or use the up and down arrow keys">' + qa + "</button>", ne = '<div class="moveText"><div class="moveItemName">' + Oe(p.name) + j + '</div><div class="moveMeta">' + Oe(le) + "</div></div>", te = (We) => We.addEventListener("keydown", (_e) => {
        var vt, ze;
        if (_e.key !== "ArrowUp" && _e.key !== "ArrowDown") return;
        _e.preventDefault();
        const Me = t.indexOf(p), ft = Me + (_e.key === "ArrowUp" ? -1 : 1);
        ft < 0 || ft >= t.length || (t.splice(Me, 1), t.splice(ft, 0, p), Mt(), (ze = (vt = o(r).children[ft]) == null ? void 0 : vt.querySelector(".dragHandle")) == null || ze.focus());
      });
      if (ve()) {
        T.classList.add("phoneRow"), T.tabIndex = 0, T.setAttribute("role", "button"), T.setAttribute("aria-label", "Edit " + (p.name || "step")), T.innerHTML = he + ne + '<span class="rowChevron" aria-hidden="true">›</span>';
        const We = T.querySelector(".dragHandle");
        We.addEventListener("pointerdown", (_e) => $o(_e, T, s, t)), te(We), T.addEventListener("click", (_e) => {
          _e.target.closest(".dragHandle") || Ve(p, t);
        }), T.addEventListener("keydown", (_e) => {
          _e.key === "Enter" && _e.target === T && (_e.preventDefault(), Ve(p, t));
        }), s.appendChild(T);
        return;
      }
      T.innerHTML = he + ne + '<div class="moveActions seg"><button class="hideBtn editBtn segBtn" type="button" aria-label="Edit ' + Oe(p.name) + '">Edit</button><button class="hideBtn segBtn" type="button">' + (p.hidden ? "Show" : "Hide") + '</button><button class="removeBtn segBtn" type="button" title="Hold to remove" aria-label="Hold to remove ' + Oe(p.name) + '"><span class="removeFill"></span><span class="removeLabel">' + Ii + "</span></button></div>", T.querySelector(".editBtn").addEventListener("click", () => {
        gn(), Bt = p, Mt(), no();
      }), T.querySelector(".hideBtn:not(.editBtn)").addEventListener("click", () => {
        p.hidden = !p.hidden, Mt();
      });
      const Ee = T.querySelector(".removeBtn");
      mi(Ee, Ee.querySelector(".removeFill"), 1200, () => {
        const We = t.indexOf(p);
        We < 0 || (t.splice(We, 1), Mt(), Gt("Removed " + p.name, { label: "Undo", run: () => {
          t.splice(Math.min(We, t.length), 0, p), Mt();
        } }));
      });
      const Qe = T.querySelector(".dragHandle");
      Qe.addEventListener("pointerdown", (We) => $o(We, T, s, t)), te(Qe), s.appendChild(T);
    });
  }
  const Da = () => {
    var t;
    return (t = window.matchMedia) == null ? void 0 : t.call(window, "(prefers-reduced-motion: reduce)").matches;
  }, Ba = (t) => {
    var r;
    try {
      (r = navigator.vibrate) == null || r.call(navigator, t);
    } catch {
    }
  };
  function $o(t, r, s, p) {
    if (t.button !== void 0 && t.button !== 0) return;
    t.preventDefault();
    const g = t.currentTarget, T = t.pointerId, R = !Da();
    try {
      g.setPointerCapture(T);
    } catch {
    }
    const j = r.closest(".exerciseScroller") || x(r), le = s.style.position;
    s.style.position = "relative";
    const he = [...s.children].filter((pt) => pt.classList.contains("moveRow")), ne = he.indexOf(r), te = parseFloat(getComputedStyle(s).rowGap) || 8, Ee = r.offsetHeight, Qe = Ee + te, We = he.map((pt) => pt.offsetTop), _e = he.map((pt) => pt.offsetHeight), Me = () => s.getBoundingClientRect().top, ft = s.getBoundingClientRect().width, vt = t.clientY - (Me() + We[ne]), ze = t.clientX;
    let wt = t.clientY, Et = t.clientX, rt = Me() + We[ne], nt = 0, da = 0, Aa = 0, Yt = 1, Ti = 0, Le = ne, ct = !1, ua = 0, ha = !1, Al = !1, Vr = We[ne];
    s.classList.add("reordering"), r.classList.add("dragging"), r.style.transition = "none", Ba(8);
    const _l = () => {
      const pt = wt - vt + Ee / 2 - Me();
      let St = 0;
      return he.forEach((Wt, en) => {
        en !== ne && pt > We[en] + _e[en] / 2 && St++;
      }), St;
    }, El = () => {
      he.forEach((pt, St) => {
        if (St === ne) return;
        const Wt = ne < Le && St > ne && St <= Le ? -Qe : ne > Le && St >= Le && St < ne ? Qe : 0;
        pt.style.transform = Wt ? "translateY(" + Wt + "px)" : "";
      });
    }, qs = () => {
      const pt = s.getBoundingClientRect(), St = Math.abs(Et - ze) > Math.max(80, ft * 0.3) || Et < pt.left - 24 || Et > pt.right + 24;
      St !== ct && (ct = St, r.classList.toggle("willReturn", St), Ba(St ? 10 : 4));
      const Wt = ct ? ne : _l();
      Wt !== Le && (Le = Wt, El(), ct || Ba(4));
    }, Li = () => {
      if (Le === ne) return We[ne];
      const pt = he.filter((Wt, en) => en !== ne);
      let St = We[0];
      for (let Wt = 0; Wt < Le; Wt++) St += pt[Wt].offsetHeight + te;
      return St;
    }, Gr = () => {
      const pt = R ? Math.min(Math.abs(nt) / 40, 1) : 0, St = R && !ha ? Math.max(-3, Math.min(3, Aa * 0.6)) : 0;
      r.style.transform = "translate(" + da.toFixed(2) + "px," + (rt - (Me() + We[ne])).toFixed(2) + "px) rotate(" + St.toFixed(2) + "deg) scale(" + (Yt * (1 - 0.04 * pt)).toFixed(4) + "," + (Yt * (1 + 0.06 * pt)).toFixed(4) + ")";
    }, it = () => {
      ua = requestAnimationFrame(it);
      const pt = Et - ze, St = ha ? Me() + Vr : wt - vt, Wt = ha ? 0 : ct ? pt * 0.9 : Math.max(-22, Math.min(22, pt * 0.22)), en = ha ? 1 : ct ? 0.97 : 1.035;
      if (!R) {
        rt = St, da = ha ? 0 : Wt, Yt = 1, Gr(), ha && Kt();
        return;
      }
      const Ep = ha ? 0.24 : 0.2, Dp = ha ? 0.62 : 0.68;
      nt = (nt + (St - rt) * Ep) * Dp, rt += nt, Aa = (Aa + (Wt - da) * 0.16) * 0.7, da += Aa, Ti = (Ti + (en - Yt) * 0.22) * 0.6, Yt += Ti, Gr(), ha && Math.abs(nt) < 0.15 && Math.abs(St - rt) < 0.5 && Math.abs(da) < 0.5 && Math.abs(Yt - 1) < 3e-3 && Kt();
    }, Rt = setInterval(() => {
      if (!j || ha) return;
      const pt = j.getBoundingClientRect(), St = 56, Wt = wt < pt.top + St ? -10 : wt > pt.bottom - St ? 10 : 0;
      Wt && (j.scrollTop += Wt, qs());
    }, 30);
    function Kt() {
      if (Al) return;
      Al = !0, cancelAnimationFrame(ua);
      const pt = Le !== ne, St = r.dataset.id;
      if (s.classList.remove("reordering"), he.forEach((en) => {
        en.style.transition = "none", en.style.transform = "";
      }), r.classList.remove("dragging", "willReturn"), s.style.position = le, pt) {
        const [en] = p.splice(ne, 1);
        p.splice(Le, 0, en);
      }
      Mt();
      const Wt = St && s.querySelector('.moveRow[data-id="' + St + '"]');
      Wt && R && Wt.animate([{ transform: "scale(1.02,.95)" }, { transform: "scale(.995,1.012)" }, { transform: "none" }], { duration: 340, easing: "ease-out" }), pt && Gt("Order saved");
    }
    const fa = (pt) => {
      if (pt.pointerId === T) {
        if (pt.pointerType === "mouse" && pt.buttons === 0) {
          Sn();
          return;
        }
        wt = pt.clientY, Et = pt.clientX, qs();
      }
    }, Qa = (pt) => {
      pt.pointerId === T && Sn();
    };
    function Sn() {
      ha || (window.removeEventListener("pointermove", fa, !0), window.removeEventListener("pointerup", Qa, !0), window.removeEventListener("pointercancel", Qa, !0), g.removeEventListener("lostpointercapture", Sn), clearInterval(Rt), ct && Le !== ne && (Le = ne, El()), Vr = Li(), ha = !0, Ba(6), setTimeout(Kt, 800));
    }
    window.addEventListener("pointermove", fa, !0), window.addEventListener("pointerup", Qa, !0), window.addEventListener("pointercancel", Qa, !0), g.addEventListener("lostpointercapture", Sn), ua = requestAnimationFrame(it), Gr();
  }
  function Xo() {
    var g, T, R, j;
    const t = Ke[xt], r = (g = o("warmupList")) == null ? void 0 : g.closest("section"), s = (T = o("cooldownList")) == null ? void 0 : T.closest("section"), p = (j = (R = o("strengthList")) == null ? void 0 : R.closest("section")) == null ? void 0 : j.querySelector(".sectionTitle");
    t != null && t.customSequence ? (r && (r.hidden = !t.includeWarmup), s && (s.hidden = !t.includeCooldown), p && (p.textContent = "Move sequence")) : (r && (r.hidden = !!(t != null && t.warmupOff)), s && (s.hidden = !1), p && (p.textContent = "Kettlebell work")), So(At, "warmupList"), So(Je, "strengthList"), So(_a, "cooldownList");
  }
  function gn() {
    if (!ia) return;
    const { item: t, arr: r } = ia;
    ia = null;
    const s = r.indexOf(t);
    s >= 0 && r.splice(s, 1), Bt === t && (Bt = null);
  }
  function ln(t) {
    return t.id === "warmupList" ? { arr: At, kind: "warmup", group: "Warm-up" } : t.id === "cooldownList" ? { arr: _a, kind: "cooldown", group: "Cooldown" } : { arr: Je, kind: "work", group: "" };
  }
  function Ua(t, r) {
    const s = ln(r), p = Date.now().toString(36);
    return t === "video" ? { id: "video-" + p, name: "", group: "Video", kind: "video", hidden: !1, url: "", videoId: "", start: 0, end: null, videoDuration: null, useVideoLength: !0, autoName: !0, duration: 300 } : t === "rest" ? { id: "rest-" + p, name: "Rest", group: "Rest", kind: "rest", hidden: !1, useGlobalTiming: !0, duration: Number(P.value) } : { id: "movement-" + p, name: "", group: s.group, kind: s.kind, hidden: !1, useGlobalTiming: !0, duration: Number(C.value) };
  }
  const Fi = "cubic-bezier(.34,1.46,.64,1)";
  function Co(t, r) {
    if (Da() || !t) {
      r();
      return;
    }
    const s = (T) => {
      var R;
      return ((R = T.dataset) == null ? void 0 : R.id) || T;
    }, p = () => [...t.querySelectorAll(".moveRow,.sectionTitle,.movementCreatorLaunch")], g = new Map(p().map((T) => [s(T), T.getBoundingClientRect().top]));
    r(), p().forEach((T) => {
      const R = g.get(s(T));
      if (R === void 0) return;
      const j = R - T.getBoundingClientRect().top;
      Math.abs(j) < 0.5 || T.animate([{ transform: "translateY(" + j + "px)" }, { transform: "none" }], { duration: 440, easing: Fi });
    });
  }
  function Jo(t, r) {
    if (!t || Da()) return;
    const s = t.offsetHeight, p = Math.max(0, s - (r || 0));
    t.animate([{ clipPath: "inset(0 0 " + p + "px 0 round 20.8px)" }, { clipPath: "inset(0 0 0 0 round 20.8px)" }], { duration: 460, easing: Fi });
  }
  function vn(t, r, s, p) {
    const { arr: g } = ln(r), T = Ua(t, r);
    g.splice(Math.max(0, Math.min(s, g.length)), 0, T), ia = { item: T, arr: g }, Bt = T, Co(r.closest(".exerciseScroller,.createStepSlot") || r, () => Mt());
    const R = r.querySelector(".moveRow.editing");
    return Jo(R, p), no(t === "rest"), R;
  }
  function x(t) {
    for (let r = t; r && r.nodeType === 1; r = r.parentElement) {
      const s = getComputedStyle(r).overflowY;
      if (/(auto|scroll)/.test(s) && r.scrollHeight > r.clientHeight) return r;
    }
    return null;
  }
  const S = { movement: ["New movement", "Drop to add, then name it"], rest: ["Rest", "Rest · Global timing"], video: ["New video", "Drop to add, then paste a YouTube link"] };
  function L(t, r) {
    const s = document.createElement("div");
    return s.className = "addGhost" + (t === "movement" ? "" : " rest"), s.innerHTML = '<span class="addGhostGrip">' + qa + '</span><span class="addGhostText"><strong>' + Oe(r[0]) + "</strong><small>" + Oe(r[1]) + "</small></span>", o("workoutModal").appendChild(s), s;
  }
  function F(t) {
    t.classList.add("leaving"), setTimeout(() => t.remove(), 180);
  }
  function Z(t, r, s, p) {
    (Bt || ia) && (gn(), Bt = null, Mt());
    const g = t.getBoundingClientRect(), T = L(r, S[r]);
    T.setAttribute("aria-hidden", "true"), T.style.width = g.width + "px", T.style.height = g.height + "px", T.style.transform = "translate(" + g.left + "px," + g.top + "px)", t.classList.add("lifting");
    const R = x(t);
    return J({
      ghost: T,
      origin: g,
      sx: s,
      sy: p,
      scroller: R,
      column: t.closest(".exerciseScroller,.createFlow") || R,
      home: () => t.getBoundingClientRect(),
      onDrop: (j, le, he) => {
        F(T), t.classList.remove("lifting"), vn(r, j, le, he);
      },
      onReturn: () => {
        F(T), t.classList.remove("lifting");
      }
    });
  }
  function J({ ghost: t, origin: r, sx: s, sy: p, scroller: g, column: T, home: R, onDrop: j, onReturn: le, rowLook: he = !1 }) {
    var Gr;
    const ne = !Da(), te = ((Gr = n.querySelector(".moveList .moveRow:not(.editing)")) == null ? void 0 : Gr.offsetHeight) || 80, Ee = s - r.left, Qe = p - r.top, We = 44;
    let _e = s, Me = p, ft = r.left, vt = r.top, ze = 0, wt = 0, Et = !ne, rt = null, nt = null, da = -1, Aa = 0, Yt = null;
    const Ti = () => ["warmupList", "strengthList", "cooldownList"].map((it) => o(it)).filter((it) => it && it.getClientRects().length && !it.closest("[hidden]")), Le = (it) => {
      if (it === rt) return;
      rt = it, t.classList.toggle("overList", !!it || he);
      const Rt = it ? it.getBoundingClientRect().width : r.width;
      t.style.width = Rt + "px", t.style.height = (it ? te : r.height) + "px";
    }, ct = (it) => {
      it.classList.add("leaving"), it.style.height = "0px", it.style.marginTop = "-8px", setTimeout(() => it.remove(), ne ? 320 : 0);
    }, ua = (it, Rt, Kt) => {
      if (nt && nt.parentNode === it && da === Kt || (nt && (ct(nt), nt = null, da = -1), !it)) return;
      const fa = document.createElement("div");
      fa.className = "dropSlot", it.insertBefore(fa, Rt), nt = fa, da = Kt, fa.getBoundingClientRect(), fa.style.height = te + "px", fa.style.marginTop = "0px";
    }, ha = () => {
      let it = null, Rt = 1 / 0;
      for (const Sn of Ti()) {
        const pt = Sn.getBoundingClientRect();
        if (_e < pt.left - 48 || _e > pt.right + 48) continue;
        const St = pt.top - 28, Wt = pt.bottom + 28, en = Me < St ? St - Me : Me > Wt ? Me - Wt : 0;
        en < Rt && (Rt = en, it = Sn);
      }
      const Kt = T == null ? void 0 : T.getBoundingClientRect(), Qa = Kt && _e >= Kt.left && _e <= Kt.right && Me >= Kt.top && Me <= Kt.bottom || Rt === 0 ? it : null;
      if (Qa) {
        const Sn = [...Qa.children].filter((St) => St.classList.contains("moveRow"));
        let pt = Sn.findIndex((St) => {
          const Wt = St.getBoundingClientRect();
          return Me < Wt.top + Wt.height / 2;
        });
        pt < 0 && (pt = Sn.length), ua(Qa, Sn[pt] || null, pt);
      } else ua(null);
      Le(Qa);
    }, Al = () => {
      if (Yt) return Yt.aim();
      if (rt) {
        const it = rt.getBoundingClientRect();
        let Rt = Me - te / 2;
        return nt && (Rt = Rt * 0.6 + nt.getBoundingClientRect().top * 0.4), { x: it.left, y: Rt };
      }
      return { x: _e - Ee, y: Me - Qe };
    }, Vr = (it, Rt, Kt, fa) => {
      t.style.transform = "translate(" + ft + "px," + vt + "px) rotate(" + it + "deg) rotate(" + Rt + "rad) scale(" + Kt + "," + fa + ") rotate(" + -Rt + "rad)";
    }, _l = () => {
      if (Aa = requestAnimationFrame(_l), !Et) {
        const pt = _e - s, St = Me - p, Wt = Math.min(Math.hypot(pt, St) / We, 1);
        ft = r.left + pt * 0.35, vt = r.top + St * 0.35, Vr(0, Math.atan2(St, pt), 1 + 0.155 * Wt, 1 - 0.1 * Wt);
        return;
      }
      const it = Al();
      if (!ne) {
        ft = it.x, vt = it.y, Vr(0, 0, 1, 1), Yt && (cancelAnimationFrame(Aa), Yt.done());
        return;
      }
      const Rt = Yt ? Yt.k : 0.17, Kt = Yt ? Yt.d : 0.7;
      ze = (ze + (it.x - ft) * Rt) * Kt, wt = (wt + (it.y - vt) * Rt) * Kt, ft += ze, vt += wt;
      const fa = Math.hypot(ze, wt), Qa = Math.min(fa / 48, 1), Sn = rt || Yt ? 0 : Math.max(-5, Math.min(5, ze * 0.32));
      Vr(Sn, Math.atan2(wt, ze), 1 + 0.1 * Qa, 1 - 0.063 * Qa), Yt && fa < 0.15 && Math.hypot(it.x - ft, it.y - vt) < 0.6 && (cancelAnimationFrame(Aa), Yt.done());
    }, El = setInterval(() => {
      if (!g || Yt) return;
      const it = g.getBoundingClientRect(), Rt = 64, Kt = Me < it.top + Rt ? -(it.top + Rt - Me) / 4 : Me > it.bottom - Rt ? (Me - (it.bottom - Rt)) / 4 : 0;
      Kt && (g.scrollTop += Math.max(-18, Math.min(18, Kt)), ha());
    }, 30);
    Aa = requestAnimationFrame(_l);
    let qs = !1;
    const Li = (it, Rt) => {
      if (qs) return;
      qs = !0, cancelAnimationFrame(Aa);
      const Kt = nt ? nt.offsetHeight : te;
      !it && nt && (nt.remove(), nt = null), it ? j(it, Rt, Kt) : le();
    };
    return {
      move(it, Rt) {
        _e = it, Me = Rt, !Et && Math.hypot(_e - s, Me - p) > We && (Et = !0, ze = (_e - s) * 0.085, wt = (Me - p) * 0.085), Et && ha();
      },
      drop(it) {
        clearInterval(El);
        const Rt = rt, Kt = da;
        if (!it && Rt && nt) {
          const fa = nt;
          Yt = { k: 0.24, d: 0.62, aim: () => {
            const Qa = fa.getBoundingClientRect();
            return { x: Qa.left, y: Qa.top };
          }, done: () => Li(Rt, Kt) }, setTimeout(() => Li(Rt, Kt), 650), ne || (cancelAnimationFrame(Aa), Li(Rt, Kt));
          return;
        }
        ua(null), Le(null), Yt = { k: 0.2, d: 0.66, aim: () => {
          const fa = R();
          return { x: fa.left, y: fa.top };
        }, done: () => Li(null) }, setTimeout(() => Li(null), 650), ne || (cancelAnimationFrame(Aa), Li(null));
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
      if (ve()) {
        Re(r);
        return;
      }
      const g = o("strengthList"), T = vn(r, g, ln(g).arr.length, 0);
      T == null || T.scrollIntoView({ block: "nearest", behavior: Da() ? "auto" : "smooth" });
    }), t.addEventListener("pointerdown", (p) => {
      if (p.button !== void 0 && p.button !== 0) return;
      const g = p.pointerId, T = p.clientX, R = p.clientY;
      let j = null, le = !1;
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
          if (!j) {
            if (Math.hypot(Me.clientX - T, Me.clientY - R) < 6) return;
            j = Z(t, r, T, R);
          }
          j.move(Me.clientX, Me.clientY);
        }
      }, ne = (Me) => {
        Me.pointerId === g && _e(!1);
      }, te = (Me) => {
        Me.pointerId === g && _e(!0);
      }, Ee = () => _e(!1), Qe = () => _e(!0), We = (Me) => {
        Me.key === "Escape" && j && (Me.preventDefault(), Me.stopPropagation(), _e(!0));
      };
      function _e(Me) {
        if (!le && (le = !0, window.removeEventListener("pointermove", he, !0), window.removeEventListener("pointerup", ne, !0), window.removeEventListener("pointercancel", te, !0), window.removeEventListener("keydown", We, !0), window.removeEventListener("blur", Qe), t.removeEventListener("lostpointercapture", Ee), j)) {
          const ft = j;
          j = null, s = !0, setTimeout(() => {
            s = !1;
          }, 0), ft.drop(Me);
        }
      }
      window.addEventListener("pointermove", he, !0), window.addEventListener("pointerup", ne, !0), window.addEventListener("pointercancel", te, !0), window.addEventListener("keydown", We, !0), window.addEventListener("blur", Qe), t.addEventListener("lostpointercapture", Ee);
    });
  }
  const we = (Zd = window.matchMedia) == null ? void 0 : Zd.call(window, "(max-width: 620px)");
  function ve() {
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
      const T = p ? g.querySelector("input[data-f=url],input[data-f=name]") : g.querySelector("button,input,select");
      T == null || T.focus({ preventScroll: !0 });
    }, Da() ? 0 : 360);
  }
  function Te() {
    const t = o("sheet");
    if (!t.classList.contains("open")) return;
    t.classList.remove("open"), o("sheetScrim").classList.remove("open"), t.setAttribute("aria-hidden", "true"), t.contains(n.activeElement) && n.activeElement.blur();
    const r = De;
    De = null, r == null || r(), setTimeout(sa, 0);
  }
  o("sheetScrim").addEventListener("click", Te), o("sheet").addEventListener("keydown", (t) => {
    t.key === "Escape" && (t.preventDefault(), Te());
  });
  function Ve(t, r) {
    const s = Cn(t, r.indexOf(t), {
      sheet: !0,
      isNew: !1,
      onSaved() {
        Te(), Mt(), Gt(He(Ce(t)) + " updated");
      },
      onCancel: Te,
      onHide() {
        t.hidden = !t.hidden, Te(), Mt(), Gt((t.hidden ? "Hidden: " : "Showing: ") + t.name);
      },
      onRemove() {
        Te();
        const p = r.indexOf(t);
        p < 0 || (r.splice(p, 1), Mt(), Gt("Removed " + t.name, { label: "Undo", run: () => {
          r.splice(Math.min(p, r.length), 0, t), Mt();
        } }));
      }
    });
    Fe("Edit " + Ce(t), s, null, !1);
  }
  function tt() {
    const t = document.createElement("div");
    t.className = "sheetChoices", [["movement", "activity", "Movement", "Name it, then drag it into place"], ["rest", "pause", "Rest", "A pause between movements"], ["video", "play", "Video", "Paste a YouTube link"]].forEach(([r, s, p, g]) => {
      const T = document.createElement("button");
      T.type = "button", T.className = "sheetChoice", T.innerHTML = '<span class="timeIcon" aria-hidden="true">' + Ea(s) + "</span><span><strong>" + p + "</strong><small>" + g + "</small></span>", T.addEventListener("click", () => Re(r)), t.appendChild(T);
    }), Fe("Add to the move", t, null, !1);
  }
  function Re(t) {
    Be && wn();
    const r = Ua(t, o("strengthList")), s = Cn(r, -1, {
      sheet: !0,
      isNew: !0,
      onSaved() {
        Te(), dn(r, t);
      },
      onCancel: Te
    });
    Fe("New " + Ce(r), s, null, !0);
  }
  const et = o("workoutModal").querySelector(".modalStatic"), at = { parent: et.parentNode, next: et.nextSibling };
  function Zt() {
    const t = document.createElement("div");
    t.className = "sheetSetup", t.appendChild(et);
    const r = document.createElement("button");
    r.type = "button", r.className = "primary sheetDone", r.textContent = "Done", r.addEventListener("click", Te), t.appendChild(r), Fe("Setup", t, () => {
      at.parent.insertBefore(et, at.next), Pe();
    }, !1);
  }
  function Pe() {
    var r, s;
    const t = o("setupSummaryName");
    t && (t.textContent = (((r = o("workoutNameInput")) == null ? void 0 : r.value) || "").trim() || ((s = Ke[xt]) == null ? void 0 : s.name) || "Move", o("setupSummaryMeta").textContent = mt.textContent);
  }
  o("setupSummary").addEventListener("click", Zt), o("addFab").addEventListener("click", tt);
  function Nt() {
    const t = o("strengthList");
    return x(t) || t.closest(".exerciseScroller");
  }
  function Vt() {
    const t = o("strengthList").getBoundingClientRect(), r = (Nt() || o("strengthList")).getBoundingClientRect(), s = (Be == null ? void 0 : Be.ghost.offsetHeight) || 64;
    return { left: t.left, top: Math.max(r.top + 12, Math.min(r.bottom - s - 96, r.top + r.height * 0.55 - s / 2)), width: t.width, height: s };
  }
  function dn(t, r) {
    var j;
    const s = L(r, [t.name || S[r][0], "Drag into place"]);
    s.classList.add("overList", "hovering"), s.setAttribute("aria-label", (t.name || "New step") + ". Drag it into place in the list, or add it at the end.");
    const p = document.createElement("span");
    p.className = "addGhostActions", p.innerHTML = '<button class="hideBtn" type="button" data-a="end">Add at end</button><button class="hideBtn ghostDiscard" type="button" data-a="discard" aria-label="Discard ' + Oe(t.name) + '">✕</button>', s.appendChild(p), Be = { item: t, type: r, ghost: s };
    const g = ((j = n.querySelector(".moveList .moveRow:not(.editing)")) == null ? void 0 : j.offsetHeight) || 64;
    s.style.width = o("strengthList").getBoundingClientRect().width + "px", s.style.height = g + "px";
    const T = Vt(), R = Na.querySelector(".modal").getBoundingClientRect().bottom;
    s.style.transform = "translate(" + T.left + "px," + R + "px)", s.getBoundingClientRect(), Da() || (s.classList.add("rising"), setTimeout(() => s.classList.remove("rising"), 650)), s.style.transform = "translate(" + T.left + "px," + T.top + "px)", p.querySelector("[data-a=end]").addEventListener("click", wn), p.querySelector("[data-a=discard]").addEventListener("click", br), s.addEventListener("pointerdown", bn);
  }
  function bn(t) {
    if (!Be || t.target.closest("button") || t.button !== void 0 && t.button !== 0) return;
    t.preventDefault();
    const { item: r, ghost: s } = Be, p = t.pointerId;
    try {
      s.setPointerCapture(p);
    } catch {
    }
    s.classList.remove("hovering", "rising"), s.classList.add("held");
    const g = s.getBoundingClientRect(), T = Nt(), R = J({
      ghost: s,
      origin: { left: g.left, top: g.top, width: g.width, height: g.height },
      sx: t.clientX,
      sy: t.clientY,
      scroller: T,
      column: o("strengthList").closest(".exerciseScroller,.createFlow") || T,
      rowLook: !0,
      home: Vt,
      onDrop: (_e, Me, ft) => {
        Be = null, F(s), Oi(r, _e, Me, ft);
      },
      onReturn: () => {
        s.classList.remove("held"), s.classList.add("hovering");
      }
    });
    let j = !1;
    const le = (_e) => {
      if (_e.pointerId === p) {
        if (_e.pointerType === "mouse" && _e.buttons === 0) {
          We(!1);
          return;
        }
        R.move(_e.clientX, _e.clientY);
      }
    }, he = (_e) => {
      _e.pointerId === p && We(!1);
    }, ne = (_e) => {
      _e.pointerId === p && We(!0);
    }, te = () => We(!1), Ee = () => We(!0), Qe = (_e) => {
      _e.key === "Escape" && (_e.preventDefault(), We(!0));
    };
    function We(_e) {
      j || (j = !0, window.removeEventListener("pointermove", le, !0), window.removeEventListener("pointerup", he, !0), window.removeEventListener("pointercancel", ne, !0), window.removeEventListener("keydown", Qe, !0), window.removeEventListener("blur", Ee), s.removeEventListener("lostpointercapture", te), R.drop(_e));
    }
    window.addEventListener("pointermove", le, !0), window.addEventListener("pointerup", he, !0), window.addEventListener("pointercancel", ne, !0), window.addEventListener("keydown", Qe, !0), window.addEventListener("blur", Ee), s.addEventListener("lostpointercapture", te);
  }
  function Oi(t, r, s, p) {
    const g = ln(r);
    t.kind !== "rest" && t.kind !== "video" && (t.kind = g.kind, g.group && (!t.group || t.group === "Movement") && (t.group = g.group)), g.arr.splice(Math.max(0, Math.min(s, g.arr.length)), 0, t), Co(r.closest(".exerciseScroller,.createStepSlot") || r, () => Mt()), Jo(r.querySelector('.moveRow[data-id="' + t.id + '"]'), p), Gt(He(Ce(t)) + " added");
  }
  function wn() {
    var p;
    if (!Be) return;
    const { item: t, ghost: r } = Be;
    Be = null, F(r);
    const s = o("strengthList");
    Oi(t, s, ln(s).arr.length, 0), (p = s.querySelector('.moveRow[data-id="' + t.id + '"]')) == null || p.scrollIntoView({ block: "nearest", behavior: Da() ? "auto" : "smooth" });
  }
  function br() {
    if (!Be) return;
    const t = Be.ghost;
    Be = null, F(t), Gt("Discarded");
  }
  function ht() {
    Be && (Be.ghost.remove(), Be = null);
  }
  window.addEventListener("resize", () => {
    if (Be != null && Be.ghost.classList.contains("hovering")) {
      const t = Vt();
      Be.ghost.style.width = t.width + "px", Be.ghost.style.transform = "translate(" + t.left + "px," + t.top + "px)";
    }
  }), (Kd = we == null ? void 0 : we.addEventListener) == null || Kd.call(we, "change", () => {
    Te(), Be && !ve() && wn(), Xo();
  });
  {
    const t = o("workoutModal").querySelector(".modal");
    t.addEventListener("scroll", () => {
      (t.scrollTop || t.scrollLeft) && (t.scrollTop = 0, t.scrollLeft = 0);
    });
  }
  function sa() {
    const t = o("workoutModal"), r = window.visualViewport;
    if (!t.classList.contains("open") || !ve()) {
      Ya();
      return;
    }
    const s = r ? r.offsetTop : 0, p = r ? r.offsetLeft : 0, g = r ? r.width : window.innerWidth, T = r ? r.height : window.innerHeight;
    Object.assign(t.style, { right: "auto", bottom: "auto", width: g + "px", height: T + "px", top: s + "px", left: p + "px" });
    const R = t.getBoundingClientRect();
    Math.abs(R.top - s) > 0.5 && (t.style.top = 2 * s - R.top + "px"), Math.abs(R.left - p) > 0.5 && (t.style.left = 2 * p - R.left + "px");
  }
  function Ya() {
    ["top", "left", "right", "bottom", "width", "height"].forEach((t) => o("workoutModal").style.removeProperty(t));
  }
  ($d = window.visualViewport) == null || $d.addEventListener("resize", sa), (Xd = window.visualViewport) == null || Xd.addEventListener("scroll", sa), window.addEventListener("resize", sa), window.addEventListener("scroll", sa, { passive: !0 }), window.addEventListener("orientationchange", () => setTimeout(sa, 250));
  function zn() {
    Je.length > 0;
    const t = o("addMovementBtn"), r = o("addRestBtn");
    t && (t.innerHTML = qa + "<span>Add movement</span>"), r && (r.innerHTML = qa + "<span>Add rest</span>");
    const s = o("addVideoBtn");
    s && (s.innerHTML = qa + "<span>Add video</span>");
  }
  function Tn() {
    const t = o("useGlobalTiming").checked, r = o("addMovementDuration"), s = o("addMovementUnit");
    r.disabled = t, s.disabled = t, r.parentElement.style.opacity = t ? ".38" : "1", o("globalTimingValue").textContent = "Use global timing · " + Ut(C.value);
    const p = o("useGlobalRestTiming").checked, g = o("addRestDuration"), T = o("addRestUnit");
    g.disabled = p, T.disabled = p, g.parentElement.style.opacity = p ? ".38" : "1", o("globalRestTimingValue").textContent = "Use global timing · " + Ut(P.value);
  }
  let Wi = "movement";
  function Qo(t) {
    Wi = t;
    const r = o("movementFields"), s = o("restFields");
    r.hidden = t !== "movement", s.hidden = t !== "rest", o("movementCreatorHeading").textContent = "Add movement", o("movementCreator").setAttribute("aria-label", "Create movement"), Tn();
  }
  function ba() {
    Ke[xt];
    const t = ke ? !0 : o("useGlobalTiming").checked, r = t ? Number(C.value) : sn(
      o("addMovementDuration").value,
      o("addMovementUnit").value
    ), s = ke ? !0 : o("useGlobalRestTiming").checked, p = s ? Number(P.value) : sn(
      o("addRestDuration").value,
      o("addRestUnit").value
    );
    if (Wi === "rest") {
      const g = o("addRestTitle").value.trim() || "Rest", T = o("addRestGroup").value.trim() || "Rest";
      Je.push({
        id: "rest-" + Date.now(),
        name: g,
        group: T,
        kind: "rest",
        hidden: !1,
        useGlobalTiming: s,
        duration: Math.max(5, p || Number(P.value))
      }), Mt(), o("movementCreator").hidden = !0, o("addRestTitle").value = "Rest", o("addRestGroup").value = "Rest", Gt("Rest added"), ke && (N("movements"), ie());
    } else {
      const g = o("addMovementInput").value.trim();
      if (!g) return;
      const T = o("addMovementGroup").value.trim() || "Movement";
      Je.push({
        id: "movement-" + Date.now(),
        name: g,
        group: T,
        kind: "work",
        hidden: !1,
        useGlobalTiming: t,
        duration: Math.max(5, r || Number(C.value))
      }), o("addMovementInput").value = "", o("addMovementGroup").value = "", Mt(), o("movementCreator").hidden = !0, Gt("Movement added"), ke && (N("movements"), ie());
    }
    zn();
  }
  let es = null;
  function Gt(t, r) {
    const s = o("toast");
    s.innerHTML = "";
    const p = document.createElement("span");
    if (p.textContent = t, s.appendChild(p), r) {
      const g = document.createElement("button");
      g.type = "button", g.className = "toastAction", g.textContent = r.label, g.addEventListener("click", () => {
        r.run(), s.classList.remove("show", "withAction"), clearTimeout(es);
      }), s.appendChild(g);
    }
    s.classList.toggle("withAction", !!r), s.classList.add("show"), clearTimeout(es), es = setTimeout(() => s.classList.remove("show", "withAction"), r ? 5e3 : 2200);
  }
  const Zs = ["Terrible", "Poor", "Meh", "Okay", "Good", "Great"], Ks = ["#6E63A8", "#5878A8", "#6F8B8A", "#5F9B72", "#D5A53E", "#D56B54"];
  function $s(t) {
    return Math.max(0, Math.min(5, Math.floor(Number(t) / 100 * 6)));
  }
  function ei(t, r) {
    return Zs[$s(r)];
  }
  function Kl(t) {
    return Ks[$s(t)];
  }
  function It(t) {
    return t.getFullYear() + "-" + String(t.getMonth() + 1).padStart(2, "0") + "-" + String(t.getDate()).padStart(2, "0");
  }
  function jn() {
    return { morning: ut().morningTime || "08:00", evening: ut().eveningTime || "19:00" };
  }
  function ti(t) {
    const [r, s] = String(t).split(":").map(Number);
    return (r || 0) * 60 + (s || 0);
  }
  function qi(t) {
    const r = jn();
    return t.getHours() * 60 + t.getMinutes() >= ti(r.evening) ? "evening" : "morning";
  }
  function Ra(t, r) {
    return lt.checkins.find((s) => s.date === t && s.slot === r);
  }
  function wr(t) {
    return !!(t && t.mood != null && t.energy != null);
  }
  function zi() {
    const t = /* @__PURE__ */ new Date(), r = It(t), s = qi(t), p = jn(), g = t.getHours() * 60 + t.getMinutes();
    return s === "morning" && g < ti(p.morning) || wr(Ra(r, s)) ? null : s;
  }
  const Vn = o("checkinModal"), xn = o("checkinTab"), $l = o("checkinBadge"), oo = { mood: { input: o("moodInput"), fill: o("moodFill") }, energy: { input: o("energyLevelInput"), fill: o("energyLevelFill") } };
  function xr(t) {
    const { input: r, fill: s } = oo[t];
    s.style.width = r.value + "%", r.setAttribute("aria-valuetext", ei(t, r.value));
  }
  Object.keys(oo).forEach((t) => oo[t].input.addEventListener("input", () => xr(t)));
  let yn = null;
  function Xs() {
    const t = jn(), r = /* @__PURE__ */ new Date(), s = r.getHours() * 60 + r.getMinutes();
    return s < ti(t.morning) ? "Next check-in at " + t.morning : s < ti(t.evening) ? "Next check-in at " + t.evening : "Next check-in tomorrow at " + t.morning;
  }
  function Xl() {
    const t = jn(), r = /* @__PURE__ */ new Date(), s = r.getHours() * 60 + r.getMinutes(), p = (g, T) => {
      const [R, j] = g.split(":").map(Number);
      return new Date(r.getFullYear(), r.getMonth(), r.getDate() + (T ? 1 : 0), R, j);
    };
    return s < ti(t.morning) ? { date: p(t.morning), time: t.morning } : s < ti(t.evening) ? { date: p(t.evening), time: t.evening } : { date: p(t.morning, !0), time: t.morning };
  }
  let ts = null, ji = null;
  function Js() {
    if (zi()) {
      yr(), kn();
      return;
    }
    const t = Xl(), r = Math.max(0, Math.round((t.date - Date.now()) / 1e3)), s = Math.floor(r / 3600), p = Math.floor(r % 3600 / 60), g = r % 60;
    o("peekCountdown").textContent = s + ":" + String(p).padStart(2, "0") + ":" + String(g).padStart(2, "0"), o("peekAt").textContent = "Available at " + t.time;
  }
  function Qs() {
    Js(), xn.classList.add("peek"), clearInterval(ji), ji = setInterval(Js, 1e3), clearTimeout(ts), ts = setTimeout(yr, 6e3);
  }
  function yr() {
    xn.classList.remove("peek"), clearInterval(ji), clearTimeout(ts);
  }
  function as() {
    const t = zi();
    if (!t) {
      xn.classList.contains("peek") ? yr() : Qs();
      return;
    }
    yn = { date: It(/* @__PURE__ */ new Date()), slot: t };
    const s = Ra(yn.date, t), p = lt.checkins.find((g) => wr(g));
    Object.keys(oo).forEach((g) => {
      oo[g].input.value = (s == null ? void 0 : s[g]) ?? (p == null ? void 0 : p[g]) ?? 50, xr(g);
    }), o("checkinTitle").textContent = t === "morning" ? "Morning check-in" : "Evening check-in", Vn.classList.add("open"), Vn.setAttribute("aria-hidden", "false"), requestAnimationFrame(() => oo.mood.input.focus());
  }
  function Vi() {
    Vn.classList.remove("open"), Vn.setAttribute("aria-hidden", "true"), yn && (Gi = yn.date + "-" + yn.slot);
    try {
      localStorage.setItem("move-assistant-dismissed", Gi);
    } catch {
    }
    yn = null, kn();
  }
  function el() {
    if (!yn) return;
    if (wr(Ra(yn.date, yn.slot))) {
      Vi();
      return;
    }
    const { date: t, slot: r } = yn;
    let s = Ra(t, r);
    s || (s = { date: t, slot: r }, lt.checkins.unshift(s), lt.checkins = lt.checkins.slice(0, 2e3)), s.mood = Number(oo.mood.input.value), s.energy = Number(oo.energy.input.value), s.scale = 100, s.at = (/* @__PURE__ */ new Date()).toISOString(), ka(), l.fire("checkin", { slot: r, mood: s.mood, energy: s.energy, mood_label: ei("mood", s.mood), energy_label: ei("energy", s.energy) }), Gt((r === "morning" ? "Morning" : "Evening") + " check-in saved"), Vi(), ai(), ni(), $n(), Jn();
  }
  let Gi = "";
  try {
    Gi = localStorage.getItem("move-assistant-dismissed") || "";
  } catch {
  }
  function kn() {
    const t = zi();
    $l.hidden = !t, xn.hidden = !t, t || yr(), xn.classList.toggle("due", !!t), xn.setAttribute("aria-label", t ? (t === "morning" ? "Morning" : "Evening") + " check-in is due" : Xs()), xn.title = t ? "Check in now" : Xs();
  }
  function Ui() {
    kn();
    const t = zi();
    !t || Vn.classList.contains("open") || ut().checkinAutoOpen !== !1 && (o("app").classList.contains("house") || !Ie.home.classList.contains("active") || Na.classList.contains("open") || Gi !== It(/* @__PURE__ */ new Date()) + "-" + t && as());
  }
  xn.addEventListener("click", as), o("checkinLater").addEventListener("click", Vi), o("checkinSave").addEventListener("click", el), Vn.addEventListener("click", (t) => {
    t.target === Vn && Vi();
  }), Vn.addEventListener("keydown", (t) => {
    t.key === "Escape" && (t.preventDefault(), Vi());
  }), setInterval(Ui, 3e4);
  function ai() {
    const t = It(/* @__PURE__ */ new Date()), r = (s) => lt.checkins.find((p) => p.date === t && p[s] != null);
    [["mood", "moodMeta"], ["energy", "energyLevelMeta"]].forEach(([s, p]) => {
      const g = r(s);
      o(p).textContent = g ? ei(s, g[s]) : "—";
    });
  }
  function ni() {
    const t = o("feelCard");
    if (!t) return;
    const r = /* @__PURE__ */ new Date(), s = new Date(r.getFullYear(), r.getMonth(), r.getDate() - (r.getDay() + 6) % 7), p = [...Array(7)].map((he, ne) => {
      const te = new Date(s.getFullYear(), s.getMonth(), s.getDate() + ne), Ee = It(te), Qe = lt.checkins.filter((_e) => _e.date === Ee), We = (_e) => {
        const Me = Qe.map((ft) => ft[_e]).filter((ft) => ft != null);
        return Me.length ? Me.reduce((ft, vt) => ft + vt, 0) / Me.length : null;
      };
      return { d: te, key: Ee, mood: We("mood"), energy: We("energy"), count: Qe.filter(wr).length, future: te > r && Ee !== It(r) };
    }), g = (he) => {
      const ne = p.map((te) => te[he]).filter((te) => te != null);
      return ne.length ? ne.reduce((te, Ee) => te + Ee, 0) / ne.length : null;
    }, T = g("mood"), R = g("energy"), j = (he, ne) => '<div class="feelMeter"><div class="feelMeterTop"><span>' + he + "</span><span>" + (ne == null ? "—" : Oe(ei("", ne))) + '</span></div><div class="feelTrack"><span style="width:' + (ne == null ? 0 : Math.max(4, ne)) + "%;background:" + (ne == null ? "transparent" : Kl(ne)) + '"></span></div></div>', le = p.filter((he) => he.mood != null && he.energy != null).sort((he, ne) => ne.mood + ne.energy - (he.mood + he.energy))[0];
    t.innerHTML = '<div class="feelTop"><div class="feelSummary"><div class="feelHeadline">' + (T == null ? "No check-ins yet" : Oe(ei("", (T + R) / 2))) + '</div><div class="weekCopy">' + (T == null ? "Your first check-in will appear here." : "on average this week" + (le ? " · best day " + Oe(new Intl.DateTimeFormat(void 0, { weekday: "long" }).format(le.d)) : "")) + '</div></div></div><div class="feelDays">' + p.map(
      (he) => '<div class="weekChip feelDay' + (he.future ? " future" : "") + (he.key === It(r) ? " today" : "") + '"><div class="weekChipTop"><strong>' + Oe(new Intl.DateTimeFormat(void 0, { weekday: "short" }).format(he.d)) + "</strong>" + (he.count >= 2 ? '<span class="weekTick">' + Ea("check") + "</span>" : '<span class="feelDots">' + "●".repeat(he.count) + "</span>") + "</div>" + j("Mood", he.mood) + j("Energy", he.energy) + "</div>"
    ).join("") + "</div>";
  }
  const oi = o("upcomingCountSetting");
  oi.addEventListener("change", () => {
    Hn = oi.value === "all" ? "all" : Number(oi.value), Er();
  });
  const Yi = o("tempoRevealBtn"), ns = o("tempoExperiment"), Ln = o("tempoQuad"), ii = o("tempoDot"), Jl = o("tempoEstimate"), Zi = o("tempoReadout");
  let To = { x: 0.5, y: 0.5 }, Ki = !1, kr = { total: 20, work: 45, rest: 15 };
  function io(t, r, s, p) {
    const g = Math.max(r, Math.min(s, t));
    return Math.round((g - r) / p) * p + r;
  }
  function tl(t, r) {
    const s = (t - 0.5) * 2, p = (r - 0.5) * 2, g = io(
      kr.total + s * 5 + p * 8,
      Number(_.min),
      Number(_.max),
      Number(_.step)
    ), T = io(
      kr.work + s * 10 + p * 8,
      Number(C.min),
      Number(C.max),
      Number(C.step)
    ), R = io(
      kr.rest + s * 6 + p * 6,
      Number(P.min),
      Number(P.max),
      Number(P.step)
    );
    return _.value = g, C.value = T, P.value = R, q.textContent = T + " sec", se.textContent = R + " sec", Wa(), { total: g, work: T, rest: R };
  }
  function Mr(t, r) {
    const s = t < 0.34 ? "Low" : t > 0.66 ? "Hard" : "Medium", p = r < 0.34 ? "Fast" : r > 0.66 ? "Slow" : "Balanced", g = tl(t, r);
    Zi.textContent = s + " + " + p, Jl.textContent = g.total + " min", Ln.setAttribute("aria-valuetext", s + " and " + p + ", estimated " + g.total + " minutes");
  }
  function Sr(t) {
    const r = Ln.getBoundingClientRect(), s = Math.max(0, Math.min(1, (t.clientX - r.left) / r.width)), p = Math.max(0, Math.min(1, (t.clientY - r.top) / r.height));
    To = { x: s, y: p }, ii.style.left = s * 100 + "%", ii.style.top = p * 100 + "%", Mr(s, p);
  }
  Yi.addEventListener("click", () => {
    const t = ns.hidden;
    ns.hidden = !t, Yi.setAttribute("aria-expanded", t ? "true" : "false"), Yi.textContent = t ? "Now close this" : "Don’t try this!", t && (kr = {
      total: Number(_.value),
      work: Number(C.value),
      rest: Number(P.value)
    }, To = { x: 0.5, y: 0.5 }, ii.style.left = "50%", ii.style.top = "50%", Mr(To.x, To.y));
  }), n.querySelectorAll("[data-feedback-rating]").forEach((t) => t.addEventListener("click", () => {
    Number(t.dataset.feedbackRating), n.querySelectorAll("[data-feedback-rating]").forEach((r) => r.classList.toggle("selected", r === t));
  }));
  const $i = o("testingFeedbackForm"), os = o("testingFeedbackThanks"), Ql = o("testingFeedbackAgain");
  $i.addEventListener("submit", (t) => {
    t.preventDefault(), $i.hidden = !0, os.hidden = !1, Gt("Feedback captured for prototype");
  }), Ql.addEventListener("click", (t) => {
    t.preventDefault(), $i.reset(), n.querySelectorAll("[data-feedback-rating]").forEach((r) => r.classList.remove("selected")), os.hidden = !0, $i.hidden = !1;
  }), Ln.addEventListener("pointerdown", (t) => {
    var r;
    Ki = !0, Sr(t);
    try {
      (r = Ln.setPointerCapture) == null || r.call(Ln, t.pointerId);
    } catch {
    }
  }), Ln.addEventListener("pointermove", (t) => {
    Ki && Sr(t);
  }), Ln.addEventListener("pointerup", (t) => {
    Ki && (Ki = !1, Sr(t), Mt());
  }), Ln.addEventListener("pointercancel", () => Ki = !1), Ln.addEventListener("keydown", (t) => {
    let { x: r, y: s } = To, p = !0;
    t.key === "ArrowLeft" ? r -= 0.05 : t.key === "ArrowRight" ? r += 0.05 : t.key === "ArrowUp" ? s -= 0.05 : t.key === "ArrowDown" ? s += 0.05 : p = !1, p && (t.preventDefault(), r = Math.max(0, Math.min(1, r)), s = Math.max(0, Math.min(1, s)), To = { x: r, y: s }, ii.style.left = r * 100 + "%", ii.style.top = s * 100 + "%", Mr(r, s), Mt());
  });
  const Na = o("workoutModal");
  let Xi = null;
  function ri(t) {
    return t.map((r) => ({ ...r }));
  }
  function Cr() {
    const t = Ke[xt];
    return {
      key: xt,
      profile: t ? JSON.parse(JSON.stringify(t)) : null,
      warmup: ri(At),
      strength: ri(Je),
      cooldown: ri(_a),
      total: Number(_.value),
      work: Number(C.value),
      rest: Number(P.value),
      rounds: Number(st.value) || 1
    };
  }
  function is(t = !1) {
    ke = !!t, Bt = null, ia = null, Te(), ht(), Xi = Cr(), o("moveEditorTitle").textContent = ke ? "Create new move" : "Edit move", o("moveEditorSubtitle").textContent = "Build the sequence first, then set timing, then finish the move.", o("moveEditorSubtitle").hidden = !ke, o("warmupRow").hidden = ke, o("deleteMoveOpen").hidden = ke;
    const r = o("createMoveOptions");
    r.hidden = !ke;
    {
      const s = Ke[xt];
      o("includeWarmupPreset").checked = !!(s != null && s.includeWarmup), o("includeCooldownPreset").checked = !!(s != null && s.includeCooldown);
    }
    if (ss(), ke) {
      o("useGlobalTiming").checked = !0, o("useGlobalRestTiming").checked = !0;
      const s = Ke[xt];
      Ko((s == null ? void 0 : s.preset) || "movement", !1);
    }
    o("movementCreator").hidden = !0, Qo("movement"), zn(), Tn(), ns.hidden = !0, Yi.setAttribute("aria-expanded", "false"), Yi.textContent = "Don’t try this!", Na.classList.toggle("createMode", ke), Na.querySelector(".modal").classList.toggle("createMode", ke), Na.classList.add("open"), Na.setAttribute("aria-hidden", "false"), sa(), ke && Ae();
  }
  function rs() {
    const t = Ke[xt];
    return t != null && t.customSequence ? !!t.includeWarmup : !(t != null && t.warmupOff);
  }
  function ss() {
    const t = rs(), r = o("warmupSwitch");
    r.classList.toggle("on", t), r.setAttribute("aria-checked", String(t));
  }
  o("warmupSwitch").addEventListener("click", () => {
    const t = Ke[xt];
    t && (t.customSequence ? (o("includeWarmupPreset").checked = !t.includeWarmup, Pi()) : (t.warmupOff = !t.warmupOff, Mt()), ss());
  });
  function Ji() {
    Te(), ht(), Ya(), ia = null, Bt = null, Na.classList.contains("createMode") && I(), Na.classList.remove("createMode"), Na.querySelector(".modal").classList.remove("createMode"), Na.classList.remove("open"), Na.setAttribute("aria-hidden", "true");
  }
  function al() {
    if (!Xi) return;
    const t = Xi;
    t.profile && (Ke[t.key] = JSON.parse(JSON.stringify(t.profile))), xt = t.key, At = ri(t.warmup), Je = ri(t.strength), _a = ri(t.cooldown), _.value = t.total, C.value = t.work, P.value = t.rest, st.value = t.rounds || 1;
    const r = Ke[xt];
    if (r) {
      n.querySelectorAll(".workoutPanel[data-workout]").forEach((p) => p.classList.toggle("active", p.dataset.workout === xt));
      const s = n.querySelector(".workoutPanel.active");
      if (s) {
        const p = s.querySelector(".workoutName");
        p && (p.textContent = r.name);
        const g = s.querySelector(".panelCollapsedText");
        g && (g.textContent = r.name);
        const T = s.querySelector(".sourceTag");
        T && (T.textContent = r.source);
      }
      m.value = r.name;
    }
    Mt();
  }
  o("cancelWorkoutEdit").addEventListener("click", () => {
    if (ke) {
      const t = xt;
      delete Ke[t], ke = !1, jt = null, zt(lt.order.find((r) => Ke[r]) || Object.keys(Ke)[0]);
    } else
      al();
    Ji();
  }), o("saveWorkoutEdit").addEventListener("click", () => {
    Te(), Be && wn();
    const t = Ke[xt], r = m.value.trim() || "New move";
    if (t && (t.name = r), gn(), Bt = null, Mt(), ke && t)
      In(xt, t), n.querySelectorAll(".workoutPanel[data-workout]").forEach((s) => s.classList.toggle("active", s.dataset.workout === xt)), ke = !1, jt = null, lt.order.includes(xt) || lt.order.push(xt), Gt("Move created");
    else {
      const s = n.querySelector(".workoutPanel.active");
      if (s) {
        const p = s.querySelector(".workoutName");
        p && (p.textContent = r);
        const g = s.querySelector(".panelCollapsedText");
        g && (g.textContent = r);
      }
      Gt("Move saved");
    }
    Xi = null, Ji(), ka();
  }), Na.addEventListener("click", (t) => {
    if (t.target === Na) {
      if (ke) {
        const r = xt;
        delete Ke[r], ke = !1, jt = null, zt(lt.order.find((s) => Ke[s]) || Object.keys(Ke)[0]);
      } else
        al();
      Ji();
    }
  }), de(o("addMovementBtn"), "movement"), de(o("addRestBtn"), "rest"), de(o("addVideoBtn"), "video"), o("closeMovementCreator").addEventListener("click", () => {
    o("movementCreator").hidden = !0;
  }), o("useGlobalTiming").addEventListener("change", Tn), o("useGlobalRestTiming").addEventListener("change", Tn), n.querySelectorAll(".createPresetBtn").forEach((t) => t.addEventListener("click", () => {
    Ko(t.dataset.movePreset, !0), Mt();
  })), o("includeWarmupPreset").addEventListener("change", Pi), o("includeCooldownPreset").addEventListener("change", Pi), o("includeWarmupPreset").addEventListener("change", ie), o("includeCooldownPreset").addEventListener("change", ie), m.addEventListener("input", ie), m.addEventListener("input", Pe), o("confirmAddMovement").addEventListener("click", ba), o("confirmAddRest").addEventListener("click", ba), o("addMovementInput").addEventListener("keydown", (t) => {
    t.key === "Enter" && ba();
  });
  const Qi = o("countdown"), Tr = o("countNum"), Gn = o("countdownPixelCanvas");
  let ro = null, $t = "appear";
  class ed {
    constructor(r, s, p, g, T, R, j) {
      this.width = r.width, this.height = r.height, this.ctx = s, this.x = p, this.y = g, this.color = T, this.speed = (Math.random() * 0.8 + 0.1) * R, this.size = 0, this.sizeStep = Math.random() * 0.4, this.minSize = 0.5, this.maxSizeInteger = 2, this.maxSize = Math.random() * (this.maxSizeInteger - this.minSize) + this.minSize, this.delay = j, this.counter = 0, this.counterStep = Math.random() * 4 + (this.width + this.height) * 0.01, this.isIdle = !1, this.isReverse = !1, this.isShimmer = !1;
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
  let ls = [], nl = 1, so = 1;
  function Lo() {
    const t = parseFloat(getComputedStyle(o("app")).zoom);
    return Number.isFinite(t) && t > 0 ? t : 1;
  }
  function td() {
    var he;
    if (!Gn) return;
    const t = Lo(), r = Math.max(1, window.innerWidth / t), s = Math.max(1, window.innerHeight / t);
    nl = r, so = s;
    const p = Math.min(window.devicePixelRatio || 1, 2);
    Gn.width = Math.floor(r * p), Gn.height = Math.floor(s * p), Gn.style.width = r + "px", Gn.style.height = s + "px";
    const g = Gn.getContext("2d");
    g.setTransform(p, 0, 0, p, 0, 0);
    const T = ["#f2fbff", "#d4effc", "#a9e0fa", "#6cc8f6"], R = 12, j = (he = window.matchMedia) == null ? void 0 : he.call(window, "(prefers-reduced-motion: reduce)").matches, le = j ? 0 : 0.055;
    ls = [];
    for (let ne = 0; ne < r; ne += R)
      for (let te = 0; te < s; te += R) {
        const Ee = ne - r / 2, Qe = te - s / 2, We = Math.sqrt(Ee * Ee + Qe * Qe), _e = j ? 0 : Math.random() * 75 + We * 0.05, Me = new ed({ width: r, height: s }, g, ne, te, T[Math.floor(Math.random() * T.length)], le, _e);
        Me.maxSizeInteger = 4, Me.maxSize = Math.random() * 3.2 + 0.8, Me.sizeStep = 0.35 + Math.random() * 0.45, ls.push(Me);
      }
  }
  function ol(t) {
    cancelAnimationFrame(ro), $t = t;
    const r = Gn == null ? void 0 : Gn.getContext("2d");
    if (!r) return;
    function s() {
      r.clearRect(0, 0, nl, so);
      let p = !0;
      ls.forEach((g) => {
        g[$t](), g.isIdle || (p = !1);
      }), $t === "disappear" && p || (ro = requestAnimationFrame(s));
    }
    ro = requestAnimationFrame(s);
  }
  function er() {
    cancelAnimationFrame(ro), td(), ol("appear"), setTimeout(() => ol("disappear"), 560);
  }
  window.addEventListener("resize", () => {
    Qi.classList.contains("active") && er();
  });
  const Ao = o("pixelTrailCanvas"), si = Ao.getContext("2d");
  let An = !0, _n = 0.7, li = 600, tr = [], di = null, wa = { x: 0, y: 0, ready: !1 };
  function il() {
    const t = c.getBoundingClientRect(), r = Lo(), s = Math.min(window.devicePixelRatio || 1, 2), p = Math.max(1, t.width / r), g = Math.max(1, t.height / r);
    Ao.width = Math.max(1, Math.floor(p * s)), Ao.height = Math.max(1, Math.floor(g * s)), Ao.style.width = p + "px", Ao.style.height = g + "px", si.setTransform(s, 0, 0, s, 0, 0);
  }
  function ad(t, r) {
    if (!An) return;
    const s = performance.now();
    wa.ready || (wa = { x: t, y: r, ready: !0 });
    const p = 7;
    for (let g = 1; g <= p; g++) {
      const T = g / p;
      tr.push({
        x: wa.x + (t - wa.x) * T,
        y: wa.y + (r - wa.y) * T,
        born: s - (p - g) * 10
      });
    }
    wa = { x: t, y: r, ready: !0 };
  }
  function Ma(t) {
    if (di = null, !v) return;
    if (!Ie.workout.classList.contains("active")) {
      di = requestAnimationFrame(Ma);
      return;
    }
    const r = c.getBoundingClientRect(), s = Lo();
    si.clearRect(0, 0, r.width / s, r.height / s), An && (tr = tr.filter((g) => t - g.born < li), si.fillStyle = o("app").classList.contains("light") ? "#03A9F4" : "#f4f4f4", tr.forEach((g) => {
      const T = (t - g.born) / li, R = (1 - T) * _n, j = Math.round(g.x / 14) * 14, le = Math.round(g.y / 14) * 14;
      si.globalAlpha = Math.max(0, R);
      const he = 2 + 5 * (1 - T) * _n;
      si.fillRect(j - he / 2, le - he / 2, he, he);
    }), si.globalAlpha = 1), di = requestAnimationFrame(Ma);
  }
  c.addEventListener("pointermove", (t) => {
    const r = c.getBoundingClientRect(), s = Lo();
    ad((t.clientX - r.left) / s, (t.clientY - r.top) / s);
  }), c.addEventListener("pointerleave", () => wa.ready = !1), new ResizeObserver(il).observe(c), il(), di = requestAnimationFrame(Ma);
  const yt = o("movementRippleCanvas"), Pa = yt.getContext("2d");
  let Un = !0, cn = null, Lr = performance.now();
  function Yn() {
    const t = yt.parentElement.getBoundingClientRect(), r = Lo(), s = Math.max(1, t.width / r), p = Math.max(1, t.height / r), g = Math.min(window.devicePixelRatio || 1, 2);
    yt.width = Math.max(1, Math.floor(s * g)), yt.height = Math.max(1, Math.floor(p * g)), yt.style.width = s + "px", yt.style.height = p + "px", Pa.setTransform(g, 0, 0, g, 0, 0);
  }
  function _o() {
    var t;
    return ra || ((t = Ge[ot]) == null ? void 0 : t.kind) === "rest";
  }
  function Eo() {
    const t = Ge[ot];
    return _o() ? 2200 : t ? t.kind === "warmup" || t.kind === "cooldown" ? 2400 : 1350 : 1600;
  }
  function Ft(t) {
    if (cn = null, !v) return;
    if (!Ie.workout.classList.contains("active")) {
      cn = requestAnimationFrame(Ft);
      return;
    }
    const r = yt.parentElement.getBoundingClientRect(), s = Lo(), p = Math.max(1, r.width / s), g = Math.max(1, r.height / s);
    if (Pa.clearRect(0, 0, p, g), Un) {
      const T = Eo(), R = (t - Lr) % T / T, j = 15, le = Math.max(8, Math.round(j * g / Math.max(1, p))), he = p / (j + 1), ne = g / (le + 1), te = p * 0.5, Ee = g * 0.52, Qe = Math.hypot(te, Ee), _e = o("app").classList.contains("light") ? "34,34,34" : "244,244,244";
      for (let Me = 1; Me <= le; Me++)
        for (let ft = 1; ft <= j; ft++) {
          const vt = ft * he, ze = Me * ne, wt = Math.hypot(vt - te, ze - Ee) / Qe, Et = _o(), rt = Et ? Math.exp(-Math.pow((wt - (R * 0.82 + 0.08) % 1 * 1.18) * 5.5, 2)) : 0, nt = Math.exp(-Math.pow((wt - R * 1.25) * 7, 2)), da = Et ? rt : nt, Aa = Et ? 0.5 + 0.5 * Math.sin(R * Math.PI * 2 - wt * 3) ** 2 : 0.35 + 0.65 * Math.sin(R * Math.PI * 2 - wt * 5) ** 2, Yt = Et ? 1.4 + da * 4.2 * Aa : 1.2 + da * 5 * Aa;
          Pa.beginPath(), Pa.arc(vt, ze, Yt, 0, Math.PI * 2), Pa.fillStyle = `rgba(${_e},${Et ? 0.08 + da * 0.48 : 0.05 + da * 0.55})`, Pa.fill();
        }
    }
    cn = requestAnimationFrame(Ft);
  }
  new ResizeObserver(Yn).observe(yt.parentElement), Yn(), cn = requestAnimationFrame(Ft);
  const lo = o("exerciseTitle"), Za = o("exerciseMeta"), Ar = o("stepLabel"), _r = o("digits"), ds = o("fill"), ci = o("progress"), ar = o("pause"), nd = o("nextName"), rl = o("nextMeta"), pi = o("nextIcon"), xa = o("skipNextSession");
  let Sa = null;
  function za(t) {
    for (let r = Math.max(0, t); r < Ge.length; r++)
      if (!Ge[r].sessionHidden) return r;
    return -1;
  }
  function sl() {
    const t = Ge[ot];
    if (!t) return { name: "Complete", meta: "Move finished", icon: "check" };
    if (ra) {
      const p = za(ot + 1), g = p >= 0 ? Ge[p] : null;
      return g ? { name: g.name, meta: ps(g), icon: nr(g) } : { name: "Complete", meta: "Move finished", icon: "check" };
    }
    if (t.rest > 0) return { name: "Rest", meta: t.rest + " sec · " + (t.roundBreakAfter ? "round " + (t.round + 1) + " next" : "recovery"), icon: "pause" };
    const r = za(ot + 1), s = r >= 0 ? Ge[r] : null;
    return s ? { name: s.name, meta: ps(s), icon: nr(s) } : { name: "Complete", meta: "Move finished", icon: "check" };
  }
  function cs() {
    if (!Ge[ot]) return Ge.length;
    const r = za(ot + 1);
    return r < 0 ? Ge.length : r + 1;
  }
  function nr(t) {
    return t.kind === "video" ? "play" : "clock";
  }
  function ps(t) {
    return t.kind === "video" ? "YouTube · " + ao(t.duration) : t.group + " · " + t.duration + " sec";
  }
  function pn() {
    return Ge.length && Ge[Ge.length - 1].round || 1;
  }
  function co(t) {
    const r = Ge[t];
    if (!r) return "";
    const s = pn();
    if (s <= 1) return "Step " + (t + 1) + " of " + Ge.length;
    if (r.roundBreak) return "Round " + r.round + " of " + s + " · Rest";
    const p = Ge.filter((g) => g.round === r.round && !g.roundBreak).length;
    return "Round " + r.round + " of " + s + " · Step " + (r.roundIndex + 1) + " of " + p;
  }
  function ll() {
    return ci.querySelector('[data-step="' + ot + '"]');
  }
  function dl() {
    Ge[ot] && Number(ci.dataset.round) !== (Ge[ot].round || 1) && Bo(), [...ci.children].forEach((t) => {
      const r = Number(t.dataset.step);
      t.classList.toggle("done", r < ot), t.classList.toggle("active", r === ot), t.classList.toggle("rewindable", r <= ot), t.disabled = r > ot, r === ot && t.style.setProperty("--segment-progress", "0%");
    }), Ge[ot] && (Ar.textContent = co(ot), Io());
  }
  function us(t) {
    const r = Ge.indexOf(t);
    r < 0 || r <= ot || (t.sessionHidden = !t.sessionHidden, po(), Gt((t.sessionHidden ? "Hidden " : "Included ") + t.name + " for this session"));
  }
  function Er() {
    const t = o("upcomingList");
    if (!t) return;
    t.innerHTML = "";
    const r = cs(), s = Ge.slice(r);
    (Hn === "all" ? s : s.slice(0, Math.max(1, Number(Hn) || 1))).forEach((g) => {
      const T = document.createElement("section");
      T.className = "upcomingCard" + (g.sessionHidden ? " sessionHidden" : "") + (Ms(g) ? " noMeta" : ""), T.innerHTML = '<div class="upcomingInfo"><div class="upcomingIcon" aria-hidden="true">' + Ea(nr(g)) + '</div><div><div class="upcomingName">' + Oe(g.name) + '</div><div class="upcomingMeta">' + Oe(ps(g)) + (pn() > 1 ? " · round " + g.round : "") + '</div></div></div><button class="skipSessionBtn" type="button">' + (g.sessionHidden ? "Include this session" : "Skip this session") + "</button>", T.querySelector(".skipSessionBtn").addEventListener("click", () => us(g)), t.appendChild(T);
    });
  }
  function po() {
    var r;
    const t = sl();
    nd.textContent = t.name, rl.textContent = t.meta, pi.innerHTML = Ea(t.icon);
    {
      const s = ra ? Ge[za(ot + 1)] : ((r = Ge[ot]) == null ? void 0 : r.rest) > 0 ? { kind: "rest" } : Ge[za(ot + 1)];
      n.querySelector(".nextCard").classList.toggle("noMeta", !!(s && Ms(s)));
    }
    if (Sa = null, ra) {
      const s = za(ot + 1);
      s >= 0 && (Sa = Ge[s]);
    } else {
      const s = Ge[ot];
      if (s && s.rest > 0)
        Sa = null;
      else {
        const p = za(ot + 1);
        p >= 0 && (Sa = Ge[p]);
      }
    }
    xa && (xa.hidden = !Sa, xa.textContent = Sa != null && Sa.sessionHidden ? "Include this session" : "Skip this session"), Er();
  }
  xa.addEventListener("click", () => {
    Sa && (Sa.sessionHidden = !Sa.sessionHidden, Gt((Sa.sessionHidden ? "Hidden " : "Included ") + Sa.name + " for this session"), po());
  });
  let En = null, hs = null;
  function Do(t, r = {}) {
    const s = Ke[xt];
    l.fire(t, { move: (s == null ? void 0 : s.name) || "", move_id: xt, ...r });
  }
  function Mn() {
    const t = Ke[xt];
    En = { key: xt, name: (t == null ? void 0 : t.name) || "Move", startedAt: Date.now(), active: 0 }, clearInterval(hs), hs = setInterval(() => {
      En && !Oa && En.active++;
    }, 1e3), Do("started", { steps: Ge.length });
  }
  function cl(t) {
    if (clearInterval(hs), !En) return;
    const r = En;
    En = null, Do(t ? "completed" : "ended", { seconds: r.active }), !(r.active < 30) && (lt.history.unshift({ id: "h-" + r.startedAt, move_id: r.key, name: r.name, start: new Date(r.startedAt).toISOString(), seconds: r.active, completed: t }), lt.history = lt.history.slice(0, 1e3), ka(), $n(), Jn());
  }
  function od() {
    M("workout"), Dr();
    const t = za(0);
    t >= 0 && Ge[t].kind === "video" && Ta(Ge[t]);
  }
  function Ca() {
    or(), cl(!1), clearInterval(ta), clearInterval(Zo), ra = !1, ja(!1), o("app").classList.remove("resting"), Qi.classList.remove("active"), M("home");
  }
  function Dr() {
    Qi.classList.add("active");
    let t = 5;
    Tr.textContent = t, requestAnimationFrame(er), clearInterval(Zo), Zo = setInterval(() => {
      t--, t > 0 ? (Tr.textContent = t, er()) : (clearInterval(Zo), Tr.textContent = "GO", er(), setTimeout(() => {
        Qi.classList.remove("active"), cancelAnimationFrame(ro), fs();
      }, 650));
    }, 1e3);
  }
  function Bo() {
    var r;
    ci.innerHTML = "";
    const t = ((r = Ge[Math.max(0, ot)] || Ge[0]) == null ? void 0 : r.round) || 1;
    ci.dataset.round = t, Ge.forEach((s, p) => {
      if ((s.round || 1) !== t) return;
      const g = document.createElement("button");
      g.dataset.step = p, g.type = "button", g.className = "progressSegment", g.setAttribute("aria-label", "Go to " + s.name), g.addEventListener("click", () => {
        p <= ot && pl(p);
      }), ci.appendChild(g);
    });
  }
  function ja(t) {
    t = !!t;
    const r = Oa !== t;
    if (Oa = t, ar.textContent = t ? "Resume" : "Pause", o("app").classList.toggle("paused", t), gt && Pt)
      try {
        t ? Pt.pauseVideo() : Pt.playVideo();
      } catch {
      }
    r && En && Do(t ? "paused" : "resumed");
  }
  function pl(t) {
    t < 0 || t >= Ge.length || t > ot || (clearInterval(ta), ra = !1, o("app").classList.remove("resting"), ot = t, ja(!1), Po(), ta = setInterval(ho, 1e3));
  }
  function fs() {
    if (ot = za(0), ja(!1), Bo(), ot < 0) {
      lo.textContent = "No activities", Za.textContent = "Open Edit and enable or add a movement", Za.hidden = !1;
      return;
    }
    Mn(), Po(), clearInterval(ta), ta = setInterval(ho, 1e3);
  }
  const ul = o("videoStage"), Ro = o("videoSound"), Br = 0, Zn = 1, ms = 2;
  let Rr = 0, No = null, uo = null, Pt = null, ui = null, Nr = 0, gs = !1, gt = null, un = null;
  function Dn() {
    var t;
    return (t = window.YT) != null && t.Player ? Promise.resolve(window.YT) : No || (No = new Promise((r, s) => {
      const p = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        try {
          p == null || p();
        } catch {
        }
      };
      const g = setInterval(() => {
        var R;
        (R = window.YT) != null && R.Player && (clearInterval(g), clearTimeout(T), r(window.YT));
      }, 100), T = setTimeout(() => {
        clearInterval(g), No = null, s(new Error("YouTube did not load"));
      }, 15e3);
      if (!document.querySelector('script[src*="youtube.com/iframe_api"]')) {
        const R = document.createElement("script");
        R.src = "https://www.youtube.com/iframe_api", R.async = !0, R.onerror = () => {
          clearInterval(g), clearTimeout(T), No = null, s(new Error("YouTube did not load"));
        }, document.head.appendChild(R);
      }
    }), No);
  }
  function Bn() {
    return uo || (uo = Dn().then((t) => new Promise((r) => {
      const s = document.createElement("div");
      o("videoFrame").appendChild(s), Pt = new t.Player(s, {
        width: "100%",
        height: "100%",
        playerVars: { playsinline: 1, rel: 0, iv_load_policy: 3, modestbranding: 1 },
        events: { onReady: () => r(Pt), onStateChange: (p) => vs(p.data), onError: (p) => hi(p.data) }
      });
    })), uo.catch(() => {
      uo = null;
    }), uo);
  }
  function Ta(t) {
    !(t != null && t.videoId) || t.videoError || Bn().then((r) => {
      gt || ui === t.videoId || (ui = t.videoId, Nr = Number(t.start) || 0, gs = !1, r.mute(), r.loadVideoById({ videoId: t.videoId, startSeconds: Nr }));
    }).catch(() => {
    });
  }
  function Kn() {
    const t = za(ot + 1);
    t >= 0 && Ge[t].kind === "video" && Ta(Ge[t]);
  }
  function vs(t) {
    if (!gt) {
      t === Zn && !gs && (gs = !0, Pt.pauseVideo(), Pt.seekTo(Nr, !0));
      return;
    }
    ul.classList.toggle("playing", t === Zn), Ge[ot] === gt && performance.now() > Rr && (t === Zn && Oa ? ja(!1) : t === ms && !Oa && ja(!0)), t === Zn && ml(gt.videoId, Pt.getDuration()) && ka(), t === Br && aa();
  }
  function hi(t) {
    const r = gt;
    if (!r) {
      ui = null;
      return;
    }
    t === 101 || t === 150 ? (id(r.videoId), Gt("That video can’t play outside YouTube, so it was skipped")) : Gt("The video couldn’t play, so it was skipped"), aa();
  }
  function hl(t) {
    if (o("app").classList.add("videoStep"), Ro.hidden = !0, gt = t, clearTimeout(un), !t.videoId) {
      Gt("This video step has no link yet, so it was skipped"), setTimeout(() => aa(), 0);
      return;
    }
    Bn().then((r) => {
      if (gt !== t) return;
      Rr = performance.now() + 1500;
      const s = Number(t.start) || 0;
      ui !== t.videoId ? (ui = t.videoId, Nr = s, r.loadVideoById({ videoId: t.videoId, startSeconds: s })) : (r.seekTo(s, !0), r.playVideo()), r.unMute(), Oa && r.pauseVideo(), un = setTimeout(() => {
        gt !== t || Oa || (r.getPlayerState() !== Zn ? (r.mute(), r.playVideo(), Ro.hidden = !1) : r.isMuted() && (Ro.hidden = !1));
      }, 1600);
    }).catch(() => {
      gt === t && (Gt("YouTube didn’t load, so the video was skipped"), aa());
    });
  }
  function fl() {
    if (!o("app").classList.contains("videoStep")) return;
    const t = n.querySelector(".workGrid"), r = n.querySelector(".sessionControlRow"), s = t.getBoundingClientRect().top, p = (r == null ? void 0 : r.offsetHeight) || 42, g = window.innerHeight - s - 16 - p - 84;
    t.style.setProperty("--theater-h", Math.max(240, Math.round(g)) + "px");
  }
  window.addEventListener("resize", fl);
  function or() {
    clearTimeout(un);
    const t = gt;
    if (gt = null, o("app").classList.remove("videoStep"), ul.classList.remove("playing"), Ro.hidden = !0, t && Pt) {
      try {
        Pt.pauseVideo();
      } catch {
      }
      ui = null;
    }
  }
  function aa() {
    const t = gt;
    !t || Ge[ot] !== t || (or(), clearInterval(ta), la(), ta = setInterval(ho, 1e3));
  }
  Ro.addEventListener("click", () => {
    Pt && (Pt.unMute(), Pt.playVideo()), Ro.hidden = !0;
  });
  function fi(t) {
    var p;
    const r = Number(t.start) || 0;
    if (t.useVideoLength === !1) return r + (Number(t.duration) || 300);
    const s = Pt && gt === t && Number((p = Pt.getDuration) == null ? void 0 : p.call(Pt)) || 0;
    return Number(t.end) || s || Number(t.videoDuration) || r + (Number(t.duration) || 300);
  }
  function bs(t, r) {
    const s = Ke[xt];
    [At, Je, _a, s == null ? void 0 : s.warmup, s == null ? void 0 : s.strength, s == null ? void 0 : s.cooldown, s == null ? void 0 : s.sequence].forEach((p) => (Array.isArray(p) ? p : []).forEach((g) => {
      g && g.kind === "video" && g.videoId === t && r(g);
    }));
  }
  function ml(t, r) {
    r = Math.round(Number(r) || 0);
    let s = !1;
    return t && r > 0 && bs(t, (p) => {
      p.videoDuration !== r && (p.videoDuration = r, s = !0);
    }), s;
  }
  function id(t) {
    bs(t, (r) => {
      r.videoError = "embed";
    }), ka();
  }
  function gl(t) {
    const r = t.videoId;
    if (!r) return;
    const s = () => {
      Na.classList.contains("open") ? Bt || Mt() : (Mt(), ka());
    };
    fetch("https://www.youtube.com/oembed?format=json&url=" + encodeURIComponent("https://www.youtube.com/watch?v=" + r)).then((p) => p.ok ? p.json() : Promise.reject(p.status)).then((p) => {
      t.videoId === r && (t.videoTitle = p.title || "", t.autoName && p.title && (t.name = p.title), s());
    }).catch((p) => {
      t.videoId === r && p === 401 && (t.videoError = "embed", s());
    }), vl(r).then((p) => {
      ml(r, p) && s();
    }).catch((p) => {
      p === "embed" && t.videoId === r && (t.videoError = "embed", s());
    });
  }
  function vl(t) {
    return Dn().then((r) => new Promise((s, p) => {
      const g = document.createElement("div");
      g.className = "videoProbe", g.setAttribute("aria-hidden", "true");
      const T = document.createElement("div");
      g.appendChild(T), o("app").appendChild(g);
      let R = null, j = !1;
      const le = (te, Ee) => {
        j || (j = !0, clearTimeout(he), setTimeout(() => {
          try {
            R == null || R.destroy();
          } catch {
          }
          g.remove();
        }, 0), Ee ? p(Ee) : s(te));
      }, he = setTimeout(() => le(0), 2e4), ne = () => {
        var Ee;
        const te = Number((Ee = R == null ? void 0 : R.getDuration) == null ? void 0 : Ee.call(R)) || 0;
        return te > 0 && le(te), te > 0;
      };
      R = new r.Player(T, {
        width: 320,
        height: 180,
        videoId: t,
        playerVars: { playsinline: 1, mute: 1, controls: 0 },
        events: {
          onReady: () => {
            ne() || (R.mute(), R.playVideo());
          },
          onStateChange: () => ne(),
          onError: (te) => le(0, te.data === 101 || te.data === 150 ? "embed" : "error")
        }
      });
    }));
  }
  function Po() {
    ra = !1;
    const t = Ge[ot];
    o("app").classList.toggle("resting", t.kind === "rest"), t.kind === "video" ? hl(t) : or(), ea = t.duration, ko = t.duration, lo.textContent = t.name, Za.textContent = t.group, Za.hidden = !0, Ar.textContent = co(ot), En && Do("step", { name: t.name, group: t.group, kind: t.kind, step: ot + 1, of: Ge.length, round: t.round || 1, rounds: pn(), duration: t.duration }), po(), dl(), Kn(), t.kind === "video" && setTimeout(fl, 0);
  }
  function Io() {
    var g;
    const t = ((g = Ge[ot]) == null ? void 0 : g.kind) === "video" && !ra, r = t && ea >= 60;
    _r.textContent = r ? ao(ea) : ea, _r.classList.toggle("long", r), t && (o("videoClock").textContent = ao(ea) + " left");
    const s = ea / ko * 100;
    ds.style.width = s + "%";
    const p = ll();
    if (p && !ra) {
      const T = 100 - s;
      p.style.setProperty("--segment-progress", T + "%");
    }
  }
  function ho() {
    var r, s;
    if (Oa) return;
    const t = Ge[ot];
    if ((t == null ? void 0 : t.kind) === "video" && !ra && gt === t) {
      const p = Number((r = Pt == null ? void 0 : Pt.getCurrentTime) == null ? void 0 : r.call(Pt)) || 0, g = Number(t.start) || 0, T = fi(t);
      ko = Math.max(1, T - g), (p > g || ((s = Pt == null ? void 0 : Pt.getPlayerState) == null ? void 0 : s.call(Pt)) === Zn) && (ea = Math.max(0, Math.ceil(T - p))), Io(), p > g && p >= T - 0.25 && aa();
      return;
    }
    ea--, Io(), ea <= 0 && (t.rest > 0 ? bl(t.rest) : la());
  }
  function bl(t) {
    var s;
    ra = !0, o("app").classList.add("resting");
    const r = ll();
    r && r.style.setProperty("--segment-progress", "100%"), clearInterval(ta), ea = t, ko = t, En && Do("rest", { duration: t }), lo.textContent = "Rest", Za.textContent = (s = Ge[ot]) != null && s.roundBreakAfter ? "Round " + (Ge[ot].round + 1) + " next" : "Recovery", po(), Io(), ta = setInterval(() => {
      Oa || (ea--, Io(), ea <= 0 && (clearInterval(ta), la(), ta = setInterval(ho, 1e3)));
    }, 1e3);
  }
  function la() {
    ra = !1;
    const t = za(ot + 1);
    if (t >= 0)
      ot = t, Po();
    else {
      clearInterval(ta), or(), ja(!1), o("app").classList.remove("resting"), lo.textContent = "Complete", Za.textContent = "Move finished", Za.hidden = !1, _r.textContent = "✓";
      {
        const r = pn();
        Ar.textContent = r > 1 ? r + " rounds done" : Ge.filter((s) => !s.roundBreak).length + " steps done";
      }
      cl(!0);
      {
        const r = Xn(7).reduce((s, p) => s + p.minutes, 0);
        Za.textContent = "Move finished · " + r + " min in the last 7 days";
      }
      ds.style.width = "100%", po();
    }
  }
  o("skipExercise").addEventListener("click", () => {
    ws(), ja(!1);
  });
  function ws() {
    clearInterval(ta);
    const t = Ge[ot];
    if (ra) {
      ra = !1, o("app").classList.remove("resting");
      const s = za(ot + 1);
      s >= 0 ? (ot = s, Po(), ta = setInterval(ho, 1e3)) : la();
      return;
    }
    if (t && t.rest > 0) {
      bl(t.rest);
      return;
    }
    const r = za(ot + 1);
    r >= 0 ? (ot = r, Po(), ta = setInterval(ho, 1e3)) : la();
  }
  o("restartSegment").addEventListener("click", () => {
    if (clearInterval(ta), ja(!1), ra) {
      const t = Ge[ot];
      ea = t.rest, ko = t.rest, lo.textContent = "Rest", Za.textContent = "Recovery", o("app").classList.add("resting"), po(), Io();
    } else
      Po();
    ta = setInterval(ra ? () => {
      Oa || (ea--, Io(), ea <= 0 && (clearInterval(ta), la(), ta = setInterval(ho, 1e3)));
    } : ho, 1e3);
  });
  function mi(t, r, s, p) {
    let g = 0, T = null, R = !1;
    function j() {
      T && cancelAnimationFrame(T), T = null, g = 0, R = !1, r.style.width = "0%", t.classList.remove("holding");
    }
    function le(te) {
      if (!R) return;
      g || (g = te);
      const Ee = Math.min(1, (te - g) / s);
      if (r.style.width = Ee * 100 + "%", Ee >= 1) {
        R = !1, T && cancelAnimationFrame(T), T = null, r.style.width = "100%", setTimeout(() => r.style.width = "0%", 90), p();
        return;
      }
      T = requestAnimationFrame(le);
    }
    function he(te) {
      var Ee;
      if (!(te && te.button !== void 0 && te.button !== 0)) {
        te == null || te.preventDefault(), j(), R = !0, t.classList.add("holding");
        try {
          (Ee = t.setPointerCapture) == null || Ee.call(t, te.pointerId);
        } catch {
        }
        T = requestAnimationFrame(le);
      }
    }
    function ne() {
      R && j();
    }
    t.addEventListener("pointerdown", he), t.addEventListener("pointerup", ne), t.addEventListener("pointercancel", ne), t.addEventListener("lostpointercapture", ne), t.addEventListener("keydown", (te) => {
      (te.key === " " || te.key === "Enter") && !te.repeat && he(te);
    }), t.addEventListener("keyup", (te) => {
      (te.key === " " || te.key === "Enter") && ne();
    });
  }
  const wl = o("endWorkout");
  mi(wl, o("holdEndFill"), 1500, Ca);
  const fo = o("deleteMoveConfirm");
  o("deleteMoveOpen").addEventListener("click", () => {
    fo.classList.add("open"), fo.setAttribute("aria-hidden", "false");
  }), o("deleteMoveCancel").addEventListener("click", () => {
    fo.classList.remove("open"), fo.setAttribute("aria-hidden", "true");
  });
  function rd() {
    const t = xt, r = n.querySelector('.workoutPanel[data-workout="' + t + '"]');
    r && r.remove(), delete Ke[t], lt.order = lt.order.filter((p) => p !== t);
    let s = n.querySelector(".workoutPanel[data-workout]");
    if (!s) {
      const p = "custom-" + Date.now();
      Ke[p] = { name: "New move", source: "Custom routine", total: 20, work: 45, rest: 15, customSequence: !0, preset: "movement", sequence: [], strength: [] }, lt.order.push(p), s = In(p, Ke[p]);
    }
    fo.classList.remove("open"), fo.setAttribute("aria-hidden", "true"), Xi = null, Ji(), zt(s.dataset.workout), ka(), Gt("Move deleted");
  }
  mi(o("deleteMoveYes"), o("deleteMoveFill"), 1500, rd);
  const xs = n.querySelector(".rubberTabs"), gi = o("rubberIndicator");
  function vi(t, r = !0) {
    if (!t || !xs || !gi) return;
    const s = xs.getBoundingClientRect(), p = t.getBoundingClientRect();
    gi.style.transition = r ? "left .34s cubic-bezier(.2,1.35,.4,1),width .34s cubic-bezier(.2,1.35,.4,1),transform .18s ease" : "none";
    const g = Lo();
    gi.style.left = (p.left - s.left) / g + xs.scrollLeft + "px", gi.style.width = p.width / g + "px", r && (gi.style.transform = "scaleX(1.08)", setTimeout(() => gi.style.transform = "scaleX(1)", 180));
  }
  n.querySelectorAll(".tab").forEach((t) => t.addEventListener("click", () => {
    t.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "smooth" }), n.querySelectorAll(".tab").forEach((r) => r.classList.remove("active")), n.querySelectorAll(".settingsPane").forEach((r) => r.classList.remove("active")), t.classList.add("active"), o(t.dataset.pane).classList.add("active"), vi(t, !0);
  })), requestAnimationFrame(() => vi(n.querySelector(".tab.active"), !1)), window.addEventListener("resize", () => vi(n.querySelector(".tab.active"), !1));
  const Pr = o("pixelTrailToggle"), ys = o("rippleToggle"), Ho = o("trailStrength"), Fo = o("trailLife");
  function Ka(t, r) {
    ut()[t] = r, ka();
  }
  const ks = ["Warm-up", "Movement", "Cooldown", "Rest", "Video"];
  function bi(t) {
    return t.kind === "rest" ? "rest" : t.kind === "video" ? "video" : "g:" + String(t.group || "").trim().toLowerCase();
  }
  function Ms(t) {
    var r;
    return !!((r = ut().hideMeta) != null && r[bi(t)]);
  }
  function Ss() {
    const t = /* @__PURE__ */ new Map(), r = (s, p, g) => {
      if (!s) return;
      Array.isArray(s) && (s = { name: s[1], group: s[2], kind: "work" });
      const T = bi(s);
      let R = t.get(T);
      R || (R = { key: T, label: T === "rest" ? "Rest" : T === "video" ? "Video" : String(s.group || "").trim() || "No type", kinds: /* @__PURE__ */ new Set(), moves: /* @__PURE__ */ new Set(), count: 0 }, t.set(T, R)), R.kinds.add(T === "rest" ? "Rest" : T === "video" ? "Video" : p), R.moves.add(g), R.count++;
    };
    return Object.values(Ke).forEach((s) => {
      const p = s.name || "Move";
      (s.warmup || (s.customSequence ? [] : Xe)).forEach((g) => r(g, "Warm-up", p)), (s.customSequence ? s.sequence || [] : s.strength || []).forEach((g) => r(g, g.presetRole === "warmup" ? "Warm-up" : g.presetRole === "cooldown" ? "Cooldown" : "Movement", p)), (s.cooldown || (s.customSequence ? [] : va)).forEach((g) => r(g, "Cooldown", p));
    }), [["rest", "Rest"], ["video", "Video"]].forEach(([s, p]) => {
      t.has(s) || t.set(s, { key: s, label: p, kinds: /* @__PURE__ */ new Set([p]), moves: /* @__PURE__ */ new Set(), count: 0 });
    }), [...t.values()].map((s) => ({ ...s, kind: s.kinds.has("Movement") ? "Movement" : [...s.kinds][0], moves: [...s.moves] })).sort((s, p) => ks.indexOf(s.kind) - ks.indexOf(p.kind) || s.label.localeCompare(p.label));
  }
  let Cs = "all";
  function Ir() {
    const t = o("metaSearch").value.trim().toLowerCase();
    return Ss().filter((r) => (Cs === "all" || r.kind === Cs) && (!t || r.label.toLowerCase().includes(t) || r.moves.some((s) => s.toLowerCase().includes(t))));
  }
  function mo() {
    const t = o("metaTableBody");
    if (!t) return;
    const r = ut().hideMeta || {}, s = Ir();
    t.innerHTML = s.length ? "" : '<tr class="metaEmpty"><td colspan="4">No types match</td></tr>', s.forEach((g) => {
      const T = !r[g.key], R = g.count ? (g.moves.length > 2 ? g.moves.slice(0, 2).join(", ") + " + " + (g.moves.length - 2) + " more" : g.moves.join(", ")) + " · " + g.count + " step" + (g.count === 1 ? "" : "s") : "Not used yet", j = document.createElement("tr");
      j.className = T ? "" : "off", j.innerHTML = '<td><div class="metaType">' + Oe(g.label) + '</div><div class="metaSub">' + Oe(g.kind + " · " + R) + '</div></td><td class="metaKindCol">' + Oe(g.kind) + '</td><td class="metaUsedCol">' + Oe(R) + '</td><td class="metaSwitchCol"><button class="switch' + (T ? " on" : "") + '" type="button" role="switch" aria-checked="' + T + '" aria-label="Second line for ' + Oe(g.label) + ' on phones"></button></td>', j.querySelector(".switch").addEventListener("click", () => Hr([g.key], T)), t.appendChild(j);
    });
    const p = s.filter((g) => r[g.key]).length;
    o("metaCount").textContent = s.length ? s.length + " type" + (s.length === 1 ? "" : "s") + (p ? " · " + p + " hidden on phones" : "") : "";
  }
  function Hr(t, r) {
    const s = { ...ut().hideMeta || {} };
    t.forEach((p) => {
      r ? s[p] = !0 : delete s[p];
    }), Ka("hideMeta", s), mo(), Xo(), po();
  }
  o("metaSearch").addEventListener("input", mo), o("metaKinds").querySelectorAll(".kindChip").forEach((t) => t.addEventListener("click", () => {
    Cs = t.dataset.kind, o("metaKinds").querySelectorAll(".kindChip").forEach((r) => r.classList.toggle("active", r === t)), mo();
  })), o("metaHideAll").addEventListener("click", () => Hr(Ir().map((t) => t.key), !0)), o("metaShowAll").addEventListener("click", () => Hr(Ir().map((t) => t.key), !1));
  const $a = { feel: !0, steps: !0, mood: !0, energyLevel: !0, weather: !0, ...ut().toggles || {} };
  function Ts() {
    n.querySelectorAll("[data-toggle]").forEach((s) => s.classList.toggle("on", $a[s.dataset.toggle] !== !1)), n.querySelector(".feelSection").hidden = !0, [["steps", "stepsRow"], ["mood", "moodRow"], ["energyLevel", "energyLevelRow"]].forEach(([s, p]) => {
      o(p).hidden = $a[s] === !1;
    });
    const t = ["steps", "mood", "energyLevel"].some((s) => $a[s] !== !1);
    n.querySelector(".activityCard").hidden = !t, o("weatherCard").hidden = !0;
    const r = n.querySelector("#homeView .grid");
    r.classList.toggle("noActivity", !t), r.classList.toggle("noWeather", !0);
  }
  n.querySelectorAll("[data-toggle]").forEach((t) => t.addEventListener("click", () => {
    $a[t.dataset.toggle] = $a[t.dataset.toggle] === !1, Ts(), Ka("toggles", { ...$a });
  })), Ts();
  function Ls() {
    Pr.classList.toggle("on", An), ys.classList.toggle("on", Un), Ho.value = Math.round(_n * 100), o("trailStrengthValue").textContent = Ho.value + "%", Fo.value = li, o("trailLifeValue").textContent = Fo.value + " ms";
  }
  ut().trailEnabled !== void 0 && (An = ut().trailEnabled), ut().rippleEnabled !== void 0 && (Un = ut().rippleEnabled), ut().trailStrength !== void 0 && (_n = ut().trailStrength), ut().trailMaxAge !== void 0 && (li = ut().trailMaxAge), Ls(), Pr.addEventListener("click", () => {
    An = !An, Pr.classList.toggle("on", An), An || (tr = []), Ka("trailEnabled", An);
  }), ys.addEventListener("click", () => {
    Un = !Un, ys.classList.toggle("on", Un), Ka("rippleEnabled", Un);
  }), Ho.addEventListener("input", () => {
    _n = Number(Ho.value) / 100, o("trailStrengthValue").textContent = Ho.value + "%";
  }), Ho.addEventListener("change", () => Ka("trailStrength", _n)), Fo.addEventListener("input", () => {
    li = Number(Fo.value), o("trailLifeValue").textContent = Fo.value + " ms";
  }), Fo.addEventListener("change", () => Ka("trailMaxAge", li)), oi.addEventListener("change", () => Ka("upcomingCount", Hn));
  function Fr(t) {
    n.querySelectorAll(".themeBtn").forEach((s) => s.classList.toggle("active", s.dataset.theme === t));
    const r = t === "light";
    o("app").classList.toggle("light", r), l.setLight(r), vo(n);
  }
  Fr(ut().theme || "dark"), n.querySelectorAll(".themeBtn").forEach((t) => t.addEventListener("click", () => {
    Fr(t.dataset.theme), Ka("theme", t.dataset.theme);
  }));
  const Xa = { steps: null, weather: null, ...ut().entities || {} };
  let Tt = null, As = {};
  function _s(t) {
    const r = Object.values(t).filter((j) => j.entity_id.startsWith("sensor.") || j.entity_id.startsWith("input_number.")), s = (j) => j.attributes.friendly_name || j.entity_id, p = r.filter((j) => /step/i.test(j.entity_id) || /step/i.test(s(j)) || ["steps", "step"].includes(String(j.attributes.unit_of_measurement || "").toLowerCase())), g = r.filter((j) => !p.includes(j)), T = (j, le) => s(j).localeCompare(s(le)), R = (j, le) => /health_steps/.test(le.entity_id) - /health_steps/.test(j.entity_id) || T(j, le);
    return { suggested: p.sort(R), rest: g.sort(T), label: s };
  }
  function xl(t) {
    const r = o("stepsEntity");
    if (!r || r.matches(":focus")) return;
    const { suggested: s, rest: p, label: g } = _s(t), T = (le) => '<option value="' + Oe(le.entity_id) + '">' + Oe(g(le)) + "</option>";
    r.innerHTML = '<option value="">Not connected</option>' + (s.length ? '<optgroup label="Suggested">' + s.map(T).join("") + "</optgroup>" : "") + (p.length ? '<optgroup label="All sensors">' + p.map(T).join("") + "</optgroup>" : ""), r.value = Xa.steps || "";
    const R = o("stepsStatus"), j = Xa.steps && t[Xa.steps];
    R.textContent = j ? "Connected · " + g(j) : R.dataset.empty;
  }
  o("stepsEntity").addEventListener("change", () => {
    Xa.steps = o("stepsEntity").value || null, Ka("entities", { ...Xa }), As = {}, wi(), Tt && (xl(Tt), dt(Tt));
  });
  function sd(t, r = 0) {
    return new Intl.NumberFormat(void 0, { maximumFractionDigits: r }).format(t);
  }
  function yl() {
    const t = Xa.steps && (Tt == null ? void 0 : Tt[Xa.steps]), r = Number(t == null ? void 0 : t.state);
    return Number.isFinite(r) ? r : null;
  }
  function dt(t) {
    var p;
    const r = Xa.steps, s = r ? Number((p = t[r]) == null ? void 0 : p.state) : NaN;
    o("stepsMeta").textContent = r ? Number.isFinite(s) ? sd(s) : "—" : "Set up in Settings";
  }
  let Es = 0;
  async function wi() {
    const t = Xa.steps;
    if (!t || !l.ws) return;
    Es = Date.now();
    const r = /* @__PURE__ */ new Date(), s = new Date(r.getFullYear(), r.getMonth(), r.getDate() - 30);
    try {
      const p = await l.ws({ type: "recorder/statistics_during_period", start_time: s.toISOString(), end_time: r.toISOString(), statistic_ids: [t], period: "day", types: ["max"] }), g = (p == null ? void 0 : p[t]) || [], T = {};
      if (g.forEach((R) => {
        Number.isFinite(R.max) && (T[It(new Date(R.start))] = R.max);
      }), !Object.keys(T).length) {
        const R = await l.ws({ type: "history/history_during_period", start_time: s.toISOString(), end_time: r.toISOString(), entity_ids: [t], minimal_response: !0, no_attributes: !0, significant_changes_only: !1 });
        ((R == null ? void 0 : R[t]) || []).forEach((j) => {
          const le = Number(j.s ?? j.state), he = j.lu ? j.lu * 1e3 : Date.parse(j.last_updated || j.last_changed);
          if (!Number.isFinite(le) || !he) return;
          const ne = It(new Date(he));
          T[ne] = Math.max(T[ne] || 0, le);
        });
      }
      As = T, Jn();
    } catch {
    }
  }
  function $n() {
    Jn();
  }
  $n(), setInterval(() => {
    $n(), ni(), kn();
  }, 10 * 60 * 1e3);
  function Xn(t) {
    const r = {}, s = {};
    lt.history.forEach((R) => {
      const j = It(new Date(R.start));
      r[j] = (r[j] || 0) + (R.seconds || 0) / 60, s[j] = (s[j] || 0) + 1;
    });
    const p = /* @__PURE__ */ new Date(), g = It(p), T = [];
    for (let R = t - 1; R >= 0; R--) {
      const j = new Date(p.getFullYear(), p.getMonth(), p.getDate() - R), le = It(j), he = lt.checkins.filter((te) => te.date === le), ne = (te) => {
        const Ee = he.map((Qe) => Qe[te]).filter(Boolean);
        return Ee.length ? Ee.reduce((Qe, We) => Qe + We, 0) / Ee.length : null;
      };
      T.push({
        key: le,
        date: j,
        minutes: Math.round(r[le] || 0),
        moves: s[le] || 0,
        steps: le === g && yl() != null ? yl() : As[le] ?? null,
        mood: ne("mood"),
        energy: ne("energy")
      });
    }
    return T;
  }
  function kl(t) {
    let r = t.length - 1;
    t[r] && !t[r].minutes && r--;
    let s = 0;
    for (; r >= 0 && t[r].minutes > 0; )
      s++, r--;
    return s;
  }
  function Jn() {
    const t = o("insightCard");
    if (!t) return;
    const r = Xn(30), s = kl(r), p = r.reduce((he, ne) => he + ne.minutes, 0), g = /* @__PURE__ */ new Date(), T = It(g), R = It(new Date(g.getFullYear(), g.getMonth(), g.getDate() - (g.getDay() + 6) % 7)), j = r.filter((he) => he.key >= R && he.key <= T).reduce((he, ne) => he + ne.minutes, 0), le = (he, ne, te) => '<div class="activityRow"><div class="activityRowIcon" aria-hidden="true">' + he + '</div><div><div class="activityRowName">' + Oe(ne) + '</div><div class="activityRowMeta">' + Oe(te) + "</div></div></div>";
    t.innerHTML = '<div class="activityHeader"><div class="activityIcon" aria-hidden="true">' + Ea("move") + '</div><div class="activityTitle">Movement</div></div><div class="activityRows jointRows">' + le(Ea("clock"), "This week", j + " min") + le(Ea("streak"), "Streak", s + " day" + (s === 1 ? "" : "s")) + le(Ea("calendar"), "30 days", p + " min") + "</div>";
  }
  const Or = {
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
  }, Ds = (t) => t === "sunny" ? "clear" : t === "clear-night" ? "night" : t === "partlycloudy" ? "partly" : ["rainy", "pouring", "lightning", "lightning-rainy", "hail"].includes(t) ? "rain" : ["snowy", "snowy-rainy"].includes(t) ? "snow" : "cloudy", go = { s: "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", sp: "M41.025 27.045C40.5181 24.4943 39.142 22.1985 37.1315 20.5491C35.121 18.8996 32.6005 17.9987 30 18C25.665 18 21.9 20.46 20.025 24.045C17.8191 24.2867 15.7801 25.3344 14.2991 26.987C12.8181 28.6396 11.9994 30.7809 12 33C12 35.3869 12.9482 37.6761 14.636 39.364C16.3239 41.0518 18.6131 42 21 42H40.5C41.4849 42 42.4602 41.806 43.3701 41.4291C44.2801 41.0522 45.1069 40.4997 45.8033 39.8033C46.4997 39.1069 47.0522 38.2801 47.4291 37.3701C47.806 36.4602 48 35.4849 48 34.5C48 30.54 44.925 27.33 41.025 27.045Z", lp: "M70.8016 48.008C69.9751 43.8493 67.7316 40.1062 64.4536 37.4168C61.1755 34.7275 57.0661 33.2587 52.8261 33.2607C45.7581 33.2607 39.6196 37.2716 36.5625 43.1167C32.9659 43.5108 29.6414 45.219 27.2267 47.9135C24.8121 50.608 23.4772 54.0991 23.4783 57.7173C23.4783 61.609 25.0243 65.3414 27.7761 68.0933C30.528 70.8452 34.2604 72.3912 38.1522 72.3912H69.9456C71.5515 72.3912 73.1416 72.0749 74.6252 71.4604C76.1088 70.8458 77.4568 69.9451 78.5923 68.8096C79.7278 67.6741 80.6286 66.3261 81.2431 64.8425C81.8576 63.3589 82.1739 61.7688 82.1739 60.1629C82.1739 53.7064 77.1603 48.4727 70.8016 48.008Z", lc: "M65.3723 37.5398C64.4356 32.8266 61.8929 28.5843 58.1778 25.5364C54.4627 22.4885 49.8054 20.8238 45 20.8262C36.9897 20.8262 30.0326 25.3718 26.5679 31.9963C22.4918 32.4429 18.724 34.3788 15.9874 37.4326C13.2508 40.4864 11.738 44.443 11.7391 48.5436C11.7391 52.9542 13.4913 57.1842 16.6101 60.3031C19.7289 63.4219 23.9589 65.174 28.3696 65.174H64.4022C66.2221 65.174 68.0243 64.8155 69.7057 64.1191C71.3871 63.4226 72.9149 62.4018 74.2018 61.1149C75.4887 59.828 76.5095 58.3002 77.2059 56.6188C77.9024 54.9374 78.2609 53.1353 78.2609 51.3153C78.2609 43.9979 72.5788 38.0664 65.3723 37.5398Z", lr: "M62.9755 28.4431C62.149 24.2844 59.9055 20.5412 56.6275 17.8519C53.3494 15.1626 49.24 13.6937 45 13.6958C37.9321 13.6958 31.7935 17.7067 28.7364 23.5518C25.1398 23.9459 21.8153 25.654 19.4006 28.3485C16.986 31.043 15.6511 34.5342 15.6522 38.1523C15.6522 42.0441 17.1982 45.7765 19.9501 48.5284C22.7019 51.2802 26.4343 52.8262 30.3261 52.8262H62.1196C63.7254 52.8262 65.3155 52.5099 66.7991 51.8954C68.2827 51.2809 69.6307 50.3802 70.7662 49.2447C71.9017 48.1092 72.8025 46.7611 73.417 45.2775C74.0315 43.7939 74.3478 42.2038 74.3478 40.598C74.3478 34.1415 69.3342 28.9078 62.9755 28.4431Z" }, Oo = {
    s: ["M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", 6.11, 40],
    l: ["M41.1747 11.959C37.7298 16.5251 35.6875 22.2086 35.6874 28.3691C35.6874 43.4321 47.8979 55.6435 62.9608 55.6436C68.3701 55.6436 73.411 54.0676 77.6512 51.3516C74.6865 66.6826 61.197 78.2607 44.9999 78.2607C26.6305 78.2607 11.7391 63.3694 11.7391 45C11.7392 27.9244 24.6071 13.8562 41.1747 11.959Z", 11.96, 78.26],
    sp: ["M16.6201 5.0791C15.3771 6.72655 14.6397 8.7772 14.6396 11C14.6396 16.4345 19.046 20.8398 24.4805 20.8398C26.4326 20.8398 28.2502 20.2686 29.7803 19.2881C28.7119 24.821 23.8449 29 18 29C11.3726 29 6 23.6274 6 17C6 10.8393 10.6426 5.76349 16.6201 5.0791Z", 5.08, 29],
    lp: ["M32.5175 9.93848C30.0859 13.1616 28.6435 17.1729 28.6434 21.5215C28.6434 32.1541 37.2628 40.7733 47.8954 40.7734C51.7136 40.7734 55.2724 39.6622 58.2655 37.7451C56.1724 48.5666 46.6506 56.7391 35.2177 56.7393C22.251 56.7393 11.7391 46.2274 11.7391 33.2607C11.7393 21.2073 20.8226 11.2776 32.5175 9.93848Z", 9.94, 56.74]
  };
  let Wr = 0;
  const qr = (t, r) => '<path class="' + r + '" d="' + t + '"/>', Bs = (t, r) => ' style="animation-delay:-' + Math.round(t * 137 % r) + 'ms"', Ja = (t, r, s, p) => {
    const g = s * 0.2687;
    return '<path class="wxTwinkle" fill="#fff"' + (p < 1 ? ' opacity="' + p + '"' : "") + Bs(t, 2400) + ' d="M' + t + " " + (r - s) + "L" + (t + g) + " " + (r - g) + "L" + (t + s) + " " + r + "L" + (t + g) + " " + (r + g) + "L" + t + " " + (r + s) + "L" + (t - g) + " " + (r + g) + "L" + (t - s) + " " + r + "L" + (t - g) + " " + (r - g) + 'Z"/>';
  }, xi = ([t, r, s], p) => '<path class="wxMoonPath" d="' + t + '" fill="url(#' + p + ')"/><defs><linearGradient id="' + p + '" x1="0" y1="' + r + '" x2="0" y2="' + s + '" gradientUnits="userSpaceOnUse"><stop stop-color="#FFF4C7"/><stop offset="1" stop-color="#F2C95E"/></linearGradient></defs>', Rs = (t, r) => r ? '<circle class="wxSunDisc" cx="45" cy="45" r="33.26" fill="url(#' + t + ')"/><defs><linearGradient id="' + t + '" x1="12" y1="8.5" x2="67" y2="73.5" gradientUnits="userSpaceOnUse"><stop offset=".653" stop-color="#FFE100"/><stop offset="1" stop-color="#F2C159"/></linearGradient></defs>' : '<circle class="wxSunDisc" cx="23" cy="23" r="17" fill="url(#' + t + ')"/><defs><linearGradient id="' + t + '" x1="23" y1="6" x2="23" y2="40" gradientUnits="userSpaceOnUse"><stop offset=".606" stop-color="#FFE100"/><stop offset="1" stop-color="#FFAA00"/></linearGradient></defs>', Ns = (t) => (t ? ["29.35", "43.04", "56.74"].map((r, s) => '<g class="wxDrop" style="animation-delay:-' + s * 317 + 'ms"><rect class="wxAccent" x="' + r + '" y="60.65" width="5.87" height="15.65" rx="2.93" transform="rotate(12 ' + r + ' 60.65)"/></g>') : [19, 26, 33].map((r, s) => '<g class="wxDrop" style="animation-delay:-' + s * 317 + 'ms"><rect class="wxAccent" width="3.03" height="9.41" rx="1.51" transform="matrix(0.9698 0.244 -0.1768 0.9843 ' + r + ' 38)"/></g>')).join(""), Ml = (t) => (t ? [[33.67, 67.67], [47.67, 64.67], [61.67, 67.67], [40.67, 77.67], [54.67, 77.67]] : [[21.2, 42.2], [29.2, 40.2], [37.2, 42.2], [25.2, 48.2], [33.2, 48.2]]).map(([r, s], p) => '<circle class="wxFlake" style="animation-delay:-' + p * 640 + 'ms" cx="' + r + '" cy="' + s + '" r="' + (t ? 3.67 : 2.2) + '" fill="#fff"/>').join("");
  function ir(t, r, s, p) {
    return t === "clear" ? r ? xi(s ? Oo.l : Oo.s, p) + (s ? Ja(70, 20, 5.83, 1) + Ja(78.33, 41.67, 3.75, 0.8) + Ja(60, 71.67, 3.33, 0.6) : Ja(42, 12, 3.5, 1) + Ja(47, 25, 2.25, 0.8) + Ja(36, 43, 2, 0.6)) : Rs(p, s) : t === "partly" ? (r ? xi(s ? Oo.lp : Oo.sp, p) : s ? '<circle class="wxSunDisc" cx="35.22" cy="33.26" r="23.48" fill="#FFE100"/>' : '<circle class="wxSunDisc" cx="18" cy="17" r="12" fill="#FFE100"/>') + qr(s ? go.lp : go.sp, r ? "wxCloudLight" : "wxBright") + (r ? s ? Ja(73.33, 16.67, 4.17, 0.9) : Ja(44, 10, 2.5, 0.9) : "") : t === "cloudy" ? qr(s ? go.lc : go.s, r ? "wxCloudLight" : "wxBright") + (r ? s ? Ja(15, 15, 3.75, 0.8) + Ja(76.67, 13.33, 2.92, 0.6) : Ja(9, 9, 2.25, 0.8) + Ja(46, 8, 1.75, 0.6) : "") : qr(s ? go.lr : go.s, "wxCloudLight") + (t === "rain" ? Ns(s) : Ml(s));
  }
  const Ps = () => {
    var t;
    return ((t = Tt == null ? void 0 : Tt["sun.sun"]) == null ? void 0 : t.state) === "below_horizon";
  };
  let Va = ut().weatherStyle || "bitmap", Sl = ut().weatherLayout === "strip" ? "strip" : "tiles", ld = ut().weatherMotion !== !1;
  const yi = () => ld && !Da(), rr = /* @__PURE__ */ new Map(), Is = 700, dd = (t) => {
    const [r, s] = t.split("/");
    return { k: r === "fog" ? "cloudy" : r === "storm" ? "rain" : r, night: s === "night" };
  };
  function zr(t, r, s, p = Va, g, T) {
    let R = Ds(t);
    const j = R === "night" || (T != null ? !!T : !!s && Ps());
    R === "night" && (R = "clear");
    const le = r ? 90 : 54, he = Zl(t, j), ne = performance.now();
    let te = g ? rr.get(g) : null;
    if (g && !te ? rr.set(g, te = { key: he, t0: -1e9 }) : te && te.key !== he && (te.fromKey = te.key, te.from = te.last || null, te.key = he, te.t0 = ne), p !== "smooth") return '<span class="wxIcon pixels' + (r ? " large" : "") + '" aria-hidden="true"><canvas data-wx="' + he + '"' + (g ? ' data-wx-slot="' + g + '"' : "") + ' data-wx-style="' + p + '" data-wx-size="' + le + '"></canvas></span>';
    let Ee = "";
    if (te && ne - te.t0 < Is && (yi() || Da())) {
      const Qe = dd(te.fromKey);
      Ee = '<span class="wxLayer wxOut ' + Qe.k + (Qe.night ? " night" : "") + '" style="animation-delay:' + Math.round(te.t0 - ne) + 'ms"><svg viewBox="0 0 ' + le + " " + le + '">' + ir(Qe.k, Qe.night, r, "wxg" + ++Wr) + "</svg></span>";
    }
    return '<span class="wxIcon ' + R + (j ? " night" : "") + (r ? " large" : "") + '" aria-hidden="true"><svg viewBox="0 0 ' + le + " " + le + '">' + ir(R, j, r, "wxg" + ++Wr) + "</svg>" + Ee + "</span>";
  }
  function ki() {
    const t = o("app"), r = getComputedStyle(t), s = (j) => r.getPropertyValue(j).trim(), p = {};
    [["skyClearDay", "--wx-clear"], ["skyClearNight", "--wx-night"], ["skyCloudyDay", "--wx-cloudy"], ["cloudDay", "--wx-cloud-bright"], ["cloudNight", "--wx-cloudy"], ["rain", "--color-accent-primary"]].forEach(([j, le]) => {
      s(le) && (p[j] = s(le));
    });
    const g = s("--color-text-primary") || "#f1f1f1", T = s("--color-bg-card") || "#222222", R = t.classList.contains("light");
    return { colors: p, ink: R ? g : T, paper: R ? T : g };
  }
  function vo(t, r = performance.now()) {
    const s = t.querySelectorAll("canvas[data-wx]");
    if (!s.length) return;
    const p = ki(), g = yi(), T = Da();
    s.forEach((R) => {
      var te;
      const j = R.dataset.wx, le = R.dataset.wxSlot ? rr.get(R.dataset.wxSlot) : null;
      let he = Id(j, p.colors);
      if (le && le.key === j) {
        const Ee = (r - le.t0) / Is;
        Ee < 1 && (g || T) && (he = Fp(le.from || Id(le.fromKey, p.colors), he, Math.max(0, Ee), p.colors, T)), le.last = he;
      }
      const ne = ep(he, { size: Number(R.dataset.wxSize) || 54, px: 2, oneBit: R.dataset.wxStyle === "onebit", colors: p.colors, ink: p.ink, paper: p.paper, clock: r, idle: g });
      R.width !== ne.w && (R.width = ne.w), R.height !== ne.h && (R.height = ne.h), (te = R.getContext("2d")) == null || te.putImageData(new ImageData(ne.data, ne.w, ne.h), 0, 0);
    });
  }
  let jr = null, Hs = -1;
  function sr(t) {
    if (jr = null, !v) return;
    const r = yi(), s = Math.floor(t / 100), p = [...rr.values()].some((le) => t - le.t0 < Is), g = [...lr.values()].some((le) => t - le.t0 < le.dur), T = Ie.home.classList.contains("active"), R = f.classList.contains("open"), j = r && Va === "smooth" && (R || T && Sl === "strip");
    !document.hidden && (p || g || j || r && s !== Hs) && (Hs = s, T && (vo(o("weatherCard"), t), a(o("weatherCard"), t)), R && (vo(f, t), a(f, t))), (r || p || g) && (jr = requestAnimationFrame(sr));
  }
  function Qn() {
    o("app").classList.toggle("wxMotion", yi()), !jr && v && (jr = requestAnimationFrame(sr));
  }
  let Mi = [];
  const na = 36e5, cd = /* @__PURE__ */ new Set(["rainy", "pouring", "lightning", "lightning-rainy", "hail", "snowy", "snowy-rainy"]);
  function Rn() {
    const t = /* @__PURE__ */ new Date(), r = (T, R) => new Date(t.getFullYear(), t.getMonth(), t.getDate() + T, R), s = [], p = [], g = [...Array(6)].map((T, R) => {
      const j = r(R, 6), le = r(R, 18), he = r(R + 1, 6), ne = Mi.find((Ee) => It(new Date(Ee.datetime)) === It(j)), te = (Ee, Qe, We) => {
        const _e = s.filter((vt) => vt.t >= +Ee && vt.t < +Qe);
        if (_e.length) {
          const vt = {};
          return _e.forEach((ze) => {
            vt[ze.c] = (vt[ze.c] || 0) + (cd.has(ze.c) ? 2 : 1);
          }), Object.entries(vt).sort((ze, wt) => wt[1] - ze[1])[0][0];
        }
        const Me = p.find((vt) => {
          const ze = +new Date(vt.datetime);
          return ze >= +Ee - 3 * na && ze < +Qe && (vt.is_daytime == null || !!vt.is_daytime == !We);
        });
        if (Me) return Me.condition;
        const ft = (ne == null ? void 0 : ne.condition) || "cloudy";
        return We && ft === "sunny" ? "clear-night" : ft;
      };
      return { start: +j, end: +he, day: te(j, le, !1), night: te(le, he, !0), hi: Number(ne == null ? void 0 : ne.temperature), lo: Number(ne == null ? void 0 : ne.templow) };
    });
    return { days: g, hours: s, start: g[0].start, end: g[5].end };
  }
  const Fs = (t, r) => {
    const s = t.days.findIndex((g) => r < g.end);
    if (s < 0) return 1;
    const p = t.days[s];
    return Math.max(0, (s + (r - p.start) / (p.end - p.start)) / 6);
  }, Os = (t, r) => {
    const s = Math.max(0, Math.min(0.99999, r)) * 6, p = Math.floor(s), g = t.days[p];
    return g.start + (s - p) * (g.end - g.start);
  };
  function Si(t, r) {
    const s = Math.max(0, t.days.findIndex((le) => r < le.end)), p = t.days[s], g = (r - p.start) / (p.end - p.start) >= 0.5;
    let T = g ? p.night : p.day, R = NaN;
    const j = t.hours;
    if (j.length && r >= j[0].t - na && r <= j[j.length - 1].t + na) {
      let le = j.findIndex((te) => te.t > r);
      le < 0 && (le = j.length);
      const he = j[Math.max(0, le - 1)], ne = j[Math.min(j.length - 1, le)];
      T = he.c || T, R = ne.t > he.t ? he.temp + (ne.temp - he.temp) * Math.max(0, Math.min(1, (r - he.t) / (ne.t - he.t))) : he.temp;
    }
    if (!Number.isFinite(R)) {
      const le = [];
      if (t.days.forEach((he) => {
        Number.isFinite(he.lo) && le.push([he.start - na, he.lo]), Number.isFinite(he.hi) && le.push([he.start + 9 * na, he.hi]);
      }), le.length) {
        R = r <= le[0][0] ? le[0][1] : le[le.length - 1][1];
        for (let he = 1; he < le.length; he++) if (r <= le[he][0] && r > le[he - 1][0]) {
          const [ne, te] = le[he - 1], [Ee, Qe] = le[he];
          R = te + (Qe - te) * (1 - Math.cos(Math.PI * (r - ne) / (Ee - ne))) / 2;
          break;
        }
      }
    }
    return { cond: g && T === "sunny" ? "clear-night" : T, temp: R, night: g, day: p };
  }
  const Ci = (t) => It(new Date(t)) === It(/* @__PURE__ */ new Date()) ? "Today" : new Intl.DateTimeFormat(void 0, { weekday: "short" }).format(new Date(t)), lr = /* @__PURE__ */ new Map(), Cl = 900, Tl = 700;
  let dr = null;
  const e = typeof ResizeObserver == "function" ? new ResizeObserver((t) => t.forEach((r) => {
    a(r.target.parentElement), r.target.closest("#wxDialog") && xe();
  })) : null;
  function a(t, r = performance.now()) {
    const s = t.querySelectorAll("canvas[data-wx-strip]");
    if (!s.length) return;
    const p = Rn(), g = p.days.flatMap((te) => [{ cond: te.day, night: !1 }, { cond: te.night, night: !0 }]), T = g.map((te) => te.cond).join(), R = ki(), j = yi(), le = Da(), he = Number(It(new Date(p.start)).replace(/\D/g, "")) % 9973;
    let ne = !1;
    s.forEach((te) => {
      var vt;
      const Ee = te.clientWidth, Qe = te.clientHeight;
      if (!Ee || !Qe) return;
      const We = te.dataset.wxStrip;
      let _e = lr.get(We);
      _e ? _e.sig !== T && (_e.prev = _e.segs, _e.sig = T, _e.segs = g, _e.t0 = r, _e.dur = Tl) : lr.set(We, _e = { sig: T, segs: g, prev: null, t0: r, dur: Cl });
      const Me = j || le ? Math.min(1, Math.max(0, (r - _e.t0) / _e.dur)) : 1;
      Me < 1 && (ne = !0);
      const ft = { width: Ee, height: Qe, colors: R.colors, clock: r, ambient: j, seed: he, reveal: le ? Me : 1 - Math.pow(1 - Me, 3), prev: Me < 1 ? _e.prev : null, reduce: le };
      if (Va === "smooth") {
        const ze = Math.min(2, window.devicePixelRatio || 1), wt = Math.round(Ee * ze), Et = Math.round(Qe * ze);
        te.width !== wt && (te.width = wt), te.height !== Et && (te.height = Et);
        const rt = te.getContext("2d");
        if (!rt) return;
        rt.setTransform(ze, 0, 0, ze, 0, 0), Qp(rt, g, ft);
      } else {
        const ze = Jp(g, { ...ft, px: 2, oneBit: Va === "onebit", ink: R.ink, paper: R.paper });
        te.width !== ze.w && (te.width = ze.w), te.height !== ze.h && (te.height = ze.h), (vt = te.getContext("2d")) == null || vt.putImageData(new ImageData(ze.data, ze.w, ze.h), 0, 0);
      }
    }), ne && Qn();
  }
  function i() {
    const t = o("weatherCard");
    if (!t || t.hidden) return;
    const r = Xa.weather, s = r && (Tt == null ? void 0 : Tt[r]);
    if (!s) {
      t.innerHTML = '<div class="activityHeader"><div class="activityTitle">Weather</div></div><div class="activityRows"><div class="activityRow">' + zr("cloudy") + '<div><div class="activityRowName">Forecast</div><div class="activityRowMeta">' + (r ? "Not available" : "Set up in Settings") + "</div></div></div></div>", vo(t);
      return;
    }
    const p = s.attributes || {}, g = p.temperature_unit || "°", T = (rt) => Number.isFinite(Number(rt)) ? Math.round(Number(rt)) + "°" : "—", R = (p.friendly_name || "").replace(/^forecast\s+/i, "") || "Weather", j = Or[s.state] || (s.state ? s.state.charAt(0).toUpperCase() + s.state.slice(1) : "—"), le = It(/* @__PURE__ */ new Date()), he = Mi.slice(0, 7), ne = he.find((rt) => It(new Date(rt.datetime)) === le) || null, te = he.filter((rt) => It(new Date(rt.datetime)) >= le).slice(0, 6), Ee = /* @__PURE__ */ new Date(), Qe = It(new Date(Ee.getFullYear(), Ee.getMonth(), Ee.getDate() + 1)), We = ne ? "H " + T(ne.temperature) + "&ensp; L " + T(ne.templow) : "", _e = (rt) => {
      const nt = It(new Date(rt.datetime));
      return nt === le ? "Today" : nt === Qe ? "Tomorrow" : new Intl.DateTimeFormat(void 0, { weekday: "short" }).format(new Date(rt.datetime));
    }, Me = Number.isFinite(Number(p.temperature)) ? Math.round(Number(p.temperature)) : "—", ft = (rt) => {
      const nt = new Date(rt.datetime);
      return Math.round((new Date(nt.getFullYear(), nt.getMonth(), nt.getDate()) - new Date(Ee.getFullYear(), Ee.getMonth(), Ee.getDate())) / 864e5);
    }, vt = (rt) => (Or[rt] || rt || "").toLowerCase(), ze = (rt, nt) => '<div class="activityRow wxDayTile" role="button" tabindex="0" data-wx-day="' + ft(rt) + '" aria-label="' + Oe(_e(rt) + ": " + vt(rt.condition) + ", " + T(rt.temperature) + " / " + T(rt.templow) + ". Open the forecast") + '">' + zr(rt.condition, !1, !1, Va, "day" + nt) + '<div><div class="activityRowName">' + Oe(_e(rt)) + '</div><div class="activityRowMeta">' + T(rt.temperature) + " / " + T(rt.templow) + "</div></div></div>", wt = () => '<div class="wxStrip"><div class="wxStripDays">' + Rn().days.map((nt, da) => {
      const Yt = new Intl.DateTimeFormat(void 0, { weekday: "long" }).format(new Date(nt.start)) + ": " + vt(nt.day) + (vt(nt.day) === vt(nt.night) ? " all day and night" : ", then " + vt(nt.night) + " overnight") + (Number.isFinite(nt.hi) ? ". High " + T(nt.hi) : "") + (Number.isFinite(nt.lo) ? ", low " + T(nt.lo) : "") + ". Open the forecast";
      return '<div class="wxStripDay" role="button" tabindex="0" data-wx-day="' + da + '" aria-label="' + Oe(Yt) + '"><span class="wxDayName">' + Oe(Ci(nt.start)) + '</span><span class="wxStripGap" aria-hidden="true"></span><span class="wxTemps" aria-hidden="true"><span class="wxHigh">' + T(nt.hi) + '</span><span class="wxLow">' + T(nt.lo) + "</span></span></div>";
    }).join("") + '</div><canvas class="wxStripSky" data-wx-strip="inline" aria-hidden="true"></canvas></div>';
    t.innerHTML = '<div class="wxWide"><div class="wxNow" role="button" tabindex="0" data-wx-open="now" aria-label="' + Oe("Now in " + R + ": " + Me + "°, " + vt(s.state) + ". Open the forecast") + '"><div class="wxCurrent">' + zr(s.state, !0, !0, Va, "now") + '<div class="wxTempBlock"><div class="wxTemp"><span class="wxDeg">' + Oe(String(Me)) + '</span><span class="wxUnit">' + Oe(g) + '</span></div><div class="wxPlace">' + Oe(R) + '</div></div></div><div class="wxCondition"><div class="wxCondName">' + Oe(j) + "</div>" + (We ? '<div class="wxRange">' + We + "</div>" : "") + "</div></div>" + // the days are tiles under Now, like every card of readings (Figma "Weather in halves · proposal"), or the sky strip
    (te.length ? Sl === "strip" ? wt() : '<div class="activityRows wxDays">' + te.map(ze).join("") + "</div>" : '<div class="wxNoDays">Loading the forecast…</div>') + "</div>", vo(t);
    const Et = t.querySelector("canvas[data-wx-strip]");
    dr && dr !== Et && (e == null || e.unobserve(dr)), dr = Et, Et && (e == null || e.observe(Et), a(t)), Qn(), Ne();
  }
  const d = o("weatherCard"), u = (t) => {
    const r = t.closest("[data-wx-day]");
    if (r) {
      const p = /* @__PURE__ */ new Date();
      ce(+new Date(p.getFullYear(), p.getMonth(), p.getDate() + Number(r.dataset.wxDay), 12), r);
      return;
    }
    const s = t.closest("[data-wx-open]");
    s && ce(Date.now(), s);
  };
  d.addEventListener("click", (t) => u(t.target)), d.addEventListener("keydown", (t) => {
    (t.key === "Enter" || t.key === " ") && t.target.matches("[data-wx-day],[data-wx-open]") && (t.preventDefault(), u(t.target));
  });
  const f = o("wxDialog"), h = o("wxGraph"), b = o("wxGraphWrap");
  let k = Date.now(), D = null, H = !1, O = null;
  function ce(t, r) {
    const s = Rn();
    D = r || null, k = Math.max(s.start, Math.min(s.end - na, t)), lr.delete("dialog"), rr.delete("scrub"), f.classList.add("open"), f.setAttribute("aria-hidden", "false"), Ne(), e == null || e.observe(f.querySelector("canvas[data-wx-strip]")), h.focus({ preventScroll: !0 }), Qn();
  }
  function Se() {
    var t;
    f.classList.remove("open"), f.setAttribute("aria-hidden", "true"), e == null || e.unobserve(f.querySelector("canvas[data-wx-strip]")), (t = D == null ? void 0 : D.focus) == null || t.call(D, { preventScroll: !0 }), D = null;
  }
  function Ne() {
    if (!f.classList.contains("open")) return;
    const t = Rn();
    o("wxGraphDays").innerHTML = t.days.map((r) => "<span>" + Oe(Ci(r.start)) + "</span>").join(""), xe(t), ee(t), a(f);
  }
  function ee(t = Rn()) {
    const r = Si(t, k), s = Tt == null ? void 0 : Tt[Xa.weather], p = (s == null ? void 0 : s.attributes) || {}, g = p.temperature_unit || "°", T = Math.abs(k - Date.now()) < na / 2, R = T && s ? s.state : r.cond, j = T && Number.isFinite(Number(p.temperature)) ? Math.round(Number(p.temperature)) : Number.isFinite(r.temp) ? Math.round(r.temp) : "—", le = Or[R] || (R ? R.charAt(0).toUpperCase() + R.slice(1) : "—"), he = T ? "Now" : new Intl.DateTimeFormat(void 0, { weekday: "short", hour: "2-digit", minute: "2-digit" }).format(new Date(Math.round(k / na) * na)), ne = r.day, te = (Number.isFinite(ne.hi) ? "H " + Math.round(ne.hi) + "°" : "") + (Number.isFinite(ne.lo) ? "&ensp; L " + Math.round(ne.lo) + "°" : "");
    o("wxDialogNow").innerHTML = '<div class="wxCurrent">' + zr(R, !0, T, Va, "scrub", T ? void 0 : r.night) + '<div class="wxTempBlock"><div class="wxTemp"><span class="wxDeg">' + Oe(String(j)) + '</span><span class="wxUnit">' + Oe(g) + '</span></div><div class="wxPlace">' + Oe(he) + '</div></div></div><div class="wxCondition"><div class="wxCondName">' + Oe(le) + "</div>" + (te ? '<div class="wxRange">' + te + "</div>" : "") + "</div>", vo(o("wxDialogNow")), h.setAttribute("aria-valuenow", String(Math.round((k - t.start) / na))), h.setAttribute("aria-valuetext", he + ", " + le.toLowerCase() + ", " + j + "°"), z(t), Qn();
  }
  function xe(t = Rn()) {
    const r = o("wxGraphLine"), s = b.clientWidth, p = b.clientHeight;
    if (!s || !p) return;
    const g = [];
    for (let Me = t.start; Me <= t.end; Me += na) {
      const ft = Si(t, Me).temp;
      Number.isFinite(ft) && g.push([Fs(t, Me) * s, ft]);
    }
    if (r.setAttribute("viewBox", "0 0 " + s + " " + p), g.length < 2) {
      r.innerHTML = '<g id="wxCursorMark"></g>', O = null, z(t);
      return;
    }
    const T = g.map((Me) => Me[1]), R = Math.min(...T), j = Math.max(...T), le = Math.max(4, j - R), he = Va !== "smooth", ne = (Me) => he ? Math.round(Me / 2) * 2 : Math.round(Me * 10) / 10;
    O = (Me) => p * 0.84 - (Me - R) / le * p * 0.62;
    const te = ki(), Ee = Va === "onebit" ? te.paper : "#ffffff", Qe = Va === "onebit" ? te.ink : "rgba(0,0,0,.28)", We = "M" + g.map((Me) => ne(Me[0]) + " " + ne(O(Me[1]))).join(" L"), _e = (Me, ft) => {
      const vt = g.find((ze) => ze[1] === Me);
      return '<text class="wxLineLabel" x="' + ne(Math.min(s - 14, Math.max(14, vt[0]))) + '" y="' + ne(O(Me) + (ft ? 18 : -10)) + '" fill="' + Ee + '" stroke="' + Qe + '">' + Math.round(Me) + "°</text>";
    };
    r.setAttribute("shape-rendering", he ? "crispEdges" : "auto"), r.innerHTML = '<path d="' + We + '" fill="none" stroke="' + Qe + '" stroke-width="' + (he ? 4 : 5) + '" stroke-linejoin="round"/><path d="' + We + '" fill="none" stroke="' + Ee + '" stroke-width="2" stroke-linejoin="round"/>' + _e(j, !1) + _e(R, !0) + '<g id="wxCursorMark"></g>', z(t);
  }
  function z(t = Rn()) {
    const r = o("wxGraphLine").querySelector("#wxCursorMark");
    if (!r) return;
    const s = b.clientWidth, p = b.clientHeight, g = Va !== "smooth", T = (Ee) => g ? Math.round(Ee / 2) * 2 : Ee, R = T(Fs(t, k) * s), j = Si(t, k).temp, le = ki(), he = Va === "onebit" ? le.paper : "#ffffff", ne = Va === "onebit" ? le.ink : "rgba(0,0,0,.28)", te = O && Number.isFinite(j) ? T(O(j)) : null;
    r.innerHTML = '<rect x="' + (R - 2) + '" y="0" width="4" height="' + p + '" fill="' + ne + '"/><rect x="' + (R - 1) + '" y="0" width="2" height="' + p + '" fill="' + he + '"/>' + (te == null ? "" : g ? '<rect x="' + (R - 5) + '" y="' + (te - 5) + '" width="10" height="10" fill="' + he + '" stroke="' + ne + '" stroke-width="2"/>' : '<circle cx="' + R + '" cy="' + te + '" r="6" fill="' + he + '" stroke="' + ne + '" stroke-width="2"/>');
  }
  const be = (t) => {
    const r = b.getBoundingClientRect();
    r.width && (k = Os(Rn(), (t - r.left) / r.width), ee());
  };
  h.addEventListener("pointerdown", (t) => {
    if (t.button === 0) {
      H = !0;
      try {
        h.setPointerCapture(t.pointerId);
      } catch {
      }
      be(t.clientX);
    }
  }), h.addEventListener("pointermove", (t) => {
    H && be(t.clientX);
  }), ["pointerup", "pointercancel", "lostpointercapture"].forEach((t) => h.addEventListener(t, () => {
    H = !1;
  })), h.addEventListener("keydown", (t) => {
    const r = Rn(), s = { ArrowLeft: -na, ArrowRight: na, ArrowDown: -na, ArrowUp: na, PageUp: -24 * na, PageDown: 24 * na }[t.key];
    s ? (t.preventDefault(), k = Math.max(r.start, Math.min(r.end - na, Math.round(k / na) * na + s)), ee(r)) : (t.key === "Home" || t.key === "End") && (t.preventDefault(), k = t.key === "Home" ? r.start : r.end - na, ee(r));
  }), o("wxDialogClose").addEventListener("click", Se), f.addEventListener("click", (t) => {
    t.target === f && Se();
  }), f.addEventListener("keydown", (t) => {
    t.key === "Escape" && (t.preventDefault(), Se());
  }), i(), (ec = (Jd = window.matchMedia) == null ? void 0 : (Qd = Jd.call(window, "(prefers-reduced-motion: reduce)")).addEventListener) == null || ec.call(Qd, "change", () => {
    Qn(), vo(n);
  }), Qn();
  const $ = o("tvNav");
  l.fullscreenSupported || ($.hidden = !0), $.addEventListener("click", () => l.toggleFullscreen()), n.addEventListener("keydown", (t) => {
    !Ie.workout.classList.contains("active") || Qi.classList.contains("active") || t.target.closest("input,select,textarea,.holdEnd") || (t.key === "MediaPlayPause" || t.key === " " && !t.target.closest("button") ? (t.preventDefault(), ar.click()) : t.key === "MediaTrackNext" ? (t.preventDefault(), o("skipExercise").click()) : t.key === "MediaTrackPrevious" && (t.preventDefault(), o("restartSegment").click()));
  }), n.querySelectorAll("[data-rounds-step]").forEach((t) => t.addEventListener("click", () => {
    const r = Math.max(1, Math.min(10, (Number(st.value) || 1) + Number(t.dataset.roundsStep)));
    String(r) !== st.value && (st.value = r, st.dispatchEvent(new Event("input", { bubbles: !0 })));
  })), [_, C, P, st].forEach((t) => t.addEventListener("input", () => {
    const r = Ke[xt];
    r && (r.total = Number(_.value), r.work = Number(C.value), r.rest = Number(P.value)), Mt();
  })), V.addEventListener("click", Ca), qe.addEventListener("click", () => M("settings")), o("settingsBack").addEventListener("click", Ca), ar.addEventListener("click", () => ja(!Oa)), zt(xt), ai(), ni(), Jn(), o("healthHelpOpen").addEventListener("click", () => n.querySelector(".tab[data-pane=helpPane]").click()), mi(o("resetStats"), o("resetStatsFill"), 1500, () => {
    lt.history = [], lt.checkins = [], Gi = "";
    try {
      localStorage.removeItem("move-assistant-dismissed");
    } catch {
    }
    ka(), $n(), ni(), ai(), Jn(), kn(), Gt("Stats reset");
  });
  const Ue = o("morningTime"), Ht = o("eveningTime"), bt = o("checkinAutoOpen");
  Ue.value = jn().morning, Ht.value = jn().evening, bt.classList.toggle("on", ut().checkinAutoOpen !== !1), [["morningTime", Ue], ["eveningTime", Ht]].forEach(([t, r]) => r.addEventListener("change", () => {
    r.value && (Ka(t, r.value), kn());
  })), bt.addEventListener("click", () => {
    const t = ut().checkinAutoOpen === !1;
    bt.classList.toggle("on", t), Ka("checkinAutoOpen", t);
  }), setTimeout(Ui, 800);
  const La = o("checkinNotify"), Ze = o("checkinNotifyTarget"), Ot = o("checkinNotifyStatus"), Ws = Ot.textContent;
  function Yd() {
    const t = l.notifyServices(), r = t.filter((g) => g.startsWith("mobile_app_")), s = r.length ? r : t, p = (g) => g.replace(/^mobile_app_/, "").replace(/_/g, " ");
    Ze.innerHTML = s.map((g) => '<option value="' + Oe(g) + '">' + Oe(p(g)) + "</option>").join(""), !ut().notifyTarget && s[0] && (ut().notifyTarget = s[0]), Ze.value = ut().notifyTarget || "";
  }
  function Ll() {
    const t = !!ut().notifyOn;
    La.classList.toggle("on", t), o("checkinNotifyTargetRow").hidden = !t;
    const r = jn();
    Ot.textContent = t ? "Sends at " + r.morning + " and " + r.evening : Ws;
  }
  async function pd() {
    const t = !!ut().notifyOn;
    try {
      return await l.setReminderAutomation(t ? { target: ut().notifyTarget, times: jn() } : null), !0;
    } catch {
      return Gt("Couldn't update the reminder in Home Assistant"), !1;
    }
  }
  La.addEventListener("click", async () => {
    const t = !ut().notifyOn;
    if (t && (Yd(), !ut().notifyTarget)) {
      Gt("Install the Companion app on your phone first");
      return;
    }
    ut().notifyOn = t, Ll(), await pd() ? (ka(), Gt(t ? "Check-in notifications on" : "Check-in notifications off")) : (ut().notifyOn = !t, Ll());
  }), Ze.addEventListener("change", () => {
    Ka("notifyTarget", Ze.value), ut().notifyOn && pd();
  }), [Ue, Ht].forEach((t) => t.addEventListener("change", () => {
    Ll(), ut().notifyOn && pd();
  })), Yd(), Ll();
  let ud = null;
  function _p() {
    ud || (ud = setTimeout(() => {
      ud = null, Jn();
    }, 3e4));
  }
  return {
    updateStates(t) {
      var s, p;
      const r = !Tt || Tt[Xa.weather] !== t[Xa.weather] || ((s = Tt["sun.sun"]) == null ? void 0 : s.state) !== ((p = t["sun.sun"]) == null ? void 0 : p.state);
      Tt = t, xl(t), dt(t), r && i(), Date.now() - Es > 60 * 60 * 1e3 && wi(), _p();
    },
    applyRemoteData(t) {
      if (t && (Array.isArray(t.history) && (lt.history = t.history, $n()), Array.isArray(t.history) && Jn(), Array.isArray(t.checkins) && (lt.checkins = t.checkins.map(Bi), kn(), ai(), ni(), $n(), Jn()), t.profiles && !Na.classList.contains("open") && !En)) {
        const r = yo(t);
        Object.keys(Ke).forEach((s) => delete Ke[s]), Object.assign(Ke, r.profiles), lt.order = r.order, Ke[xt] || (xt = lt.order[0]), Ri(), zt(xt);
      }
    },
    suspend() {
      v = !1;
    },
    resume() {
      v || (v = !0, di || (di = requestAnimationFrame(Ma)), cn || (cn = requestAnimationFrame(Ft)), Qn(), vi(n.querySelector(".tab.active"), !1));
    }
  };
}
const au = /* @__PURE__ */ new Set(["roaming", "test_area"]), nu = {
  living_room: { climate: !0, cover: ["Curtains", "curtain", 62], temperature: 20.5, humidity: 44, motion: "Living room motion", plant: ["Monstera", 32, 4200, 21.4, 580] },
  kitchen: { temperature: 21.2, humidity: 48, door: "Back door", plant: ["Basil", 55, 900, 22.1, 910] },
  balcony: { solar: !0, door: "Balcony door", doorOpen: !0, valve: "Watering", plant: ["Tomatoes", 61, 18500, 14.2, 1240] },
  bedroom: { cover: ["Roller blind", "shade", 0], humidifier: !0, temperature: 18.9, humidity: 38, window: "Bedroom window" },
  office: { cover: ["Blinds", "blind", 60, 45], vacuum: !0, temperature: 21.8, humidity: 41, plant: ["Pothos", 47, 2600, 21.6, 640] },
  bathroom: { temperature: 22.4, humidity: 62 }
}, zs = { moisture: [40, 70], light: [1500, 6e4], temperature: [10, 32], fertility: [350, 2e3] }, ma = "made_up_", cr = (n) => {
  var l;
  return (l = String(n).split(".")[1]) == null ? void 0 : l.startsWith(ma);
}, Dl = (n) => n.toLowerCase().replace(/[^a-z0-9]+/g, "_");
function Vd(n) {
  const l = n.getHours() + n.getMinutes() / 60, o = Math.max(0, Math.sin((l - 7) / 13 * Math.PI));
  return 2.4 * o * o;
}
function ou(n) {
  const l = new Date(n.getFullYear(), n.getMonth(), n.getDate());
  let o = 0;
  for (let c = +l; c < +n; c += 10 * 60 * 1e3) o += Vd(new Date(c)) / 6;
  return o;
}
function ic(n = /* @__PURE__ */ new Date()) {
  const l = [];
  for (let o = 0; o <= 96; o++) {
    const c = +n - (96 - o) * 15 * 60 * 1e3;
    l.push([c, Vd(new Date(c))]);
  }
  return l;
}
function iu({ onChange: n }) {
  const l = {}, o = {}, c = (G, W, pe, Q) => {
    l[G] = { entity_id: G, state: pe, attributes: Q, last_changed: new Date(Date.now() - 18e6).toISOString() }, o[G] = W;
  }, m = (G, W, pe) => {
    const Q = l[G], ue = W ?? Q.state;
    l[G] = { ...Q, state: ue, attributes: { ...Q.attributes, ...pe }, last_changed: ue === Q.state ? Q.last_changed : (/* @__PURE__ */ new Date()).toISOString() };
  }, v = (G, W, pe, Q) => c("binary_sensor." + ma + (G ? G + "_" : "") + Dl(W), G, Q ? "on" : "off", { friendly_name: W, device_class: pe });
  Object.entries(nu).forEach(([G, W]) => {
    if (W.temperature != null && c("sensor." + ma + G + "_temperature", G, String(W.temperature), { friendly_name: "Temperature", device_class: "temperature", state_class: "measurement", unit_of_measurement: "°C" }), W.humidity != null && c("sensor." + ma + G + "_humidity", G, String(W.humidity), { friendly_name: "Humidity", device_class: "humidity", state_class: "measurement", unit_of_measurement: "%" }), W.vacuum && c("vacuum." + ma + "robot", G, "docked", { friendly_name: "Robot vacuum", battery_level: 100, fan_speed: "standard", rooms: [] }), W.climate && c("climate." + ma + G, G, "heat", { friendly_name: "Thermostat", hvac_modes: ["off", "heat", "cool", "auto"], hvac_action: "heating", current_temperature: W.temperature, temperature: 21, min_temp: 7, max_temp: 30, target_temp_step: 0.5 }), W.cover) {
      const [pe, Q, ue, X] = W.cover;
      c("cover." + ma + G + "_" + Dl(pe), G, ue ? "open" : "closed", { friendly_name: pe, device_class: Q, current_position: ue, ...X != null ? { current_tilt_position: X } : {} });
    }
    if (W.humidifier && c("humidifier." + ma + G, G, "on", { friendly_name: "Humidifier", device_class: "humidifier", humidity: 45, current_humidity: W.humidity, action: "humidifying", mode: "normal", available_modes: ["normal", "eco", "sleep", "boost"], min_humidity: 30, max_humidity: 70 }), W.solar && (c("sensor." + ma + G + "_solar_power", G, "0", { friendly_name: "Solar now", device_class: "power", state_class: "measurement", unit_of_measurement: "kW" }), c("sensor." + ma + G + "_solar_today", G, "0", { friendly_name: "Solar today", device_class: "energy", state_class: "total_increasing", unit_of_measurement: "kWh" })), W.valve && c("valve." + ma + G + "_" + Dl(W.valve), G, "closed", { friendly_name: W.valve, device_class: "water" }), W.door && v(G, W.door, "door", W.doorOpen), W.window && v(G, W.window, "window", !1), W.motion && v(G, W.motion, "motion", !1), W.plant) {
      const [pe, Q, ue, X, E] = W.plant, N = ma + Dl(pe), ie = (I, Ie, V, qe, M) => c("sensor." + N + "_" + I, G, String(V), { friendly_name: Ie, device_class: M, state_class: "measurement", unit_of_measurement: qe, plant_low: V < zs[I][0], plant_high: V > zs[I][1], icon: { moisture: "mdi:water", light: "mdi:white-balance-sunny", temperature: "mdi:thermometer", fertility: "mdi:emoticon-poop" }[I] });
      ie("moisture", "Moisture", Q, "%", "moisture"), ie("light", "Light", ue, "lx", "illuminance"), ie("temperature", "Temperature", X, "°C", "temperature"), ie("fertility", "Fertility", E, "µS/cm", "conductivity");
      const Ae = Object.entries({ moisture: Q, light: ue, temperature: X, fertility: E }).filter(([I, Ie]) => Ie < zs[I][0] || Ie > zs[I][1]).map(([I, Ie]) => I + (Ie < zs[I][0] ? " low" : " high"));
      c("plant." + N, G, Ae.length ? "problem" : "ok", { friendly_name: pe, moisture: Q, brightness: ue, temperature: X, conductivity: E, problem: Ae.join(", ") || "none" });
    }
  }), c("alarm_control_panel." + ma + "house", null, "disarmed", { friendly_name: "Alarm", supported_features: 7, code_format: null, changed_by: "Matt" }), v(null, "Front door", "door", !1), v(null, "Smoke alarm", "smoke", !1), c("sensor." + ma + "doorbell", null, "", { friendly_name: "Doorbell", device_class: "timestamp", rang: Date.now() - 47 * 60 * 1e3 });
  const w = {}, A = {};
  let y = null;
  function B() {
    const G = /* @__PURE__ */ new Date();
    Object.keys(l).forEach((W) => {
      W.endsWith("_solar_power") && (l[W] = { ...l[W], state: Vd(G).toFixed(2) }), W.endsWith("_solar_today") && (l[W] = { ...l[W], state: ou(G).toFixed(1) });
    });
  }
  B();
  let ge = 0;
  function oe() {
    let G = !1;
    const W = ++ge % 10 === 0, pe = (X, E, N) => {
      m(X, E, N), G = !0;
    };
    Object.entries(w).forEach(([X, E]) => {
      const N = l[X].attributes.current_position, ie = N < E ? Math.min(E, N + 10) : Math.max(E, N - 10);
      ie === E && delete w[X], pe(X, ie === E ? ie === 0 ? "closed" : "open" : E > N ? "opening" : "closing", { current_position: ie });
    }), Object.entries(A).forEach(([X, E]) => {
      const N = l[X].attributes.current_tilt_position, ie = N < E ? Math.min(E, N + 25) : Math.max(E, N - 25);
      ie === E && delete A[X], pe(X, null, { current_tilt_position: ie });
    }), Object.keys(l).filter((X) => X.startsWith("climate.")).forEach((X) => {
      const E = l[X], N = E.attributes, ie = N.current_temperature, Ae = (E.state === "heat" || E.state === "auto") && ie < N.temperature - 0.05, I = (E.state === "cool" || E.state === "auto") && ie > N.temperature + 0.05, Ie = E.state === "off" ? "off" : Ae ? "heating" : I ? "cooling" : "idle", V = W ? Math.round((ie + (Ae ? 0.1 : I ? -0.1 : 0)) * 10) / 10 : ie;
      (V !== ie || Ie !== N.hvac_action) && pe(X, null, { current_temperature: V, hvac_action: Ie });
    }), Object.keys(l).filter((X) => X.startsWith("humidifier.")).forEach((X) => {
      const E = l[X], N = E.attributes, ie = N.current_humidity, Ae = E.state === "on" && ie < N.humidity, I = Ae && W ? ie + 1 : ie, Ie = E.state !== "on" ? "off" : Ae ? "humidifying" : "idle";
      if (I !== ie || Ie !== N.action) {
        pe(X, null, { current_humidity: I, action: Ie });
        const V = "sensor." + ma + o[X] + "_humidity";
        l[V] && pe(V, String(I));
      }
    });
    const Q = l["vacuum." + ma + "robot"], ue = Q.attributes;
    Q.state === "cleaning" && W && pe(Q.entity_id, null, { battery_level: Math.max(5, ue.battery_level - 1) }), Q.state === "returning" && pe(Q.entity_id, "docked", {}), Q.state === "docked" && ue.battery_level < 100 && pe(Q.entity_id, null, { battery_level: Math.min(100, ue.battery_level + 2) }), y && Date.now() - y.at > 5e3 && (pe("alarm_control_panel." + ma + "house", "armed_" + y.mode, {}), y = null), G && n();
  }
  const U = setInterval(oe, 1e3), K = setInterval(() => {
    B(), n();
  }, 60 * 1e3);
  function ae(G, W, pe) {
    const Q = pe == null ? void 0 : pe.entity_id;
    if (!l[Q]) return !1;
    const ue = l[Q], X = ue.attributes, E = (N, ie) => m(Q, N, ie);
    if (G === "climate" && (W === "set_temperature" && E(null, { temperature: Math.max(X.min_temp, Math.min(X.max_temp, pe.temperature)) }), W === "set_hvac_mode" && E(pe.hvac_mode, pe.hvac_mode === "off" ? { hvac_action: "off" } : {}), W === "toggle" && E(ue.state === "off" ? "heat" : "off", ue.state === "off" ? {} : { hvac_action: "off" })), G === "cover") {
      const N = W === "open_cover" ? 100 : W === "close_cover" ? 0 : W === "set_cover_position" ? pe.position : W === "toggle" ? X.current_position > 0 ? 0 : 100 : null;
      W === "stop_cover" && (delete w[Q], delete A[Q], E(X.current_position === 0 ? "closed" : "open")), N != null && N !== X.current_position && (w[Q] = N, E(N > X.current_position ? "opening" : "closing"));
      const ie = W === "open_cover_tilt" ? 100 : W === "close_cover_tilt" ? 0 : W === "set_cover_tilt_position" ? pe.tilt_position : null;
      W === "stop_cover_tilt" && delete A[Q], ie != null && X.current_tilt_position != null && ie !== X.current_tilt_position && (A[Q] = ie);
    }
    if (G === "humidifier" && (W === "set_humidity" && E(null, { humidity: Math.max(X.min_humidity, Math.min(X.max_humidity, pe.humidity)) }), W === "set_mode" && E(null, { mode: pe.mode }), W === "turn_on" || W === "turn_off" || W === "toggle")) {
      const N = W === "turn_on" || W === "toggle" && ue.state !== "on";
      E(N ? "on" : "off", { action: N ? "idle" : "off" });
    }
    if (G === "vacuum" && (W === "start" && E("cleaning", { rooms: pe.rooms || X.rooms }), W === "pause" && E("paused"), W === "return_to_base" && E("returning", { rooms: [] }), W === "locate" && E(null, { located: Date.now() }), W === "set_rooms" && E(null, { rooms: pe.rooms })), G === "valve") {
      const N = W === "open_valve" || W === "toggle" && ue.state !== "open";
      ["open_valve", "close_valve", "toggle"].includes(W) && E(N ? "open" : "closed");
    }
    if (G === "alarm_control_panel") {
      W === "alarm_disarm" && (y = null, E("disarmed", { changed_by: "Matt" }));
      const N = { alarm_arm_home: "home", alarm_arm_away: "away", alarm_arm_night: "night" }[W];
      N && (y = { mode: N, at: Date.now() }, E("arming", { changed_by: "Matt" }));
    }
    return n(), !0;
  }
  function Y(G) {
    const W = (G == null ? void 0 : G.states) || {}, pe = (G == null ? void 0 : G.entities) || {}, Q = (G == null ? void 0 : G.devices) || {}, ue = (C) => {
      var fe;
      const P = pe[C];
      return P && (P.area_id || P.device_id && ((fe = Q[P.device_id]) == null ? void 0 : fe.area_id)) || null;
    }, X = (C) => {
      const P = pe[C];
      return W[C] && W[C].state !== "unavailable" && !(P != null && P.hidden) && !(P != null && P.entity_category);
    }, E = {};
    Object.keys(W).forEach((C) => {
      const P = ue(C);
      P && X(C) && (E[P] || (E[P] = [])).push(C);
    });
    const N = { ...W, ...l }, ie = (C) => {
      var P, fe;
      return (fe = (P = N[C]) == null ? void 0 : P.attributes) == null ? void 0 : fe.device_class;
    }, Ae = ["door", "window", "garage_door", "opening", "motion", "occupancy", "smoke", "gas"], I = Object.keys(W).filter((C) => C.startsWith("vacuum.") && X(C)), Ie = Object.values((G == null ? void 0 : G.areas) || {}).filter((C) => !au.has(C.area_id)).map((C) => {
      const P = C.area_id, fe = E[P] || [], q = (Xe) => fe.filter((At) => At.startsWith(Xe + ".")), se = (Xe) => q("sensor").filter((At) => ie(At) === Xe), me = (Xe) => Object.keys(l).filter((At) => o[At] === P && Xe(At)), ye = (Xe, At) => Xe.length ? Xe : me(At), $e = ye(se("temperature"), (Xe) => Xe.endsWith(P + "_temperature")), st = ye(se("humidity"), (Xe) => Xe.endsWith(P + "_humidity")), _t = se("power").filter((Xe) => /^(W|kW)$/.test(N[Xe].attributes.unit_of_measurement || "")), ya = q("binary_sensor").filter((Xe) => ie(Xe) === "moisture"), Ha = ye(q("plant"), (Xe) => Xe.startsWith("plant.")).map((Xe) => ({ id: Xe, readings: me((At) => At.startsWith("sensor." + Xe.split(".")[1] + "_")) })), mt = [...q("binary_sensor").filter((Xe) => Ae.includes(ie(Xe))), ...me((Xe) => Xe.startsWith("binary_sensor."))];
      return {
        id: P,
        name: C.name,
        icon: C.icon,
        readings: [...$e.slice(0, 1), ...st.slice(0, 1), ...ya],
        power: _t.length ? _t.reduce((Xe, At) => Xe + Number(N[At].state) * (N[At].attributes.unit_of_measurement === "kW" ? 1e3 : 1), 0) : null,
        plugs: q("switch"),
        lights: q("light"),
        actions: [...q("light"), ...ye(q("climate"), (Xe) => Xe.startsWith("climate.")), ...ye(q("cover"), (Xe) => Xe.startsWith("cover.")), ...ye(q("humidifier"), (Xe) => Xe.startsWith("humidifier.")), ...ye(q("valve"), (Xe) => Xe.startsWith("valve.")), ...q("media_player"), ...q("vacuum"), ...I.length ? [] : me((Xe) => Xe.startsWith("vacuum."))],
        solar: me((Xe) => Xe.includes("_solar_")),
        plants: Ha,
        openings: mt,
        alerts: [...ya, ...mt].filter((Xe) => {
          var At;
          return ((At = N[Xe]) == null ? void 0 : At.state) === "on";
        })
      };
    }).filter((C) => C.readings.length || C.plugs.length || C.actions.length || C.solar.length || C.plants.length), V = Object.keys(W).find((C) => /^sensor\..*(p1_meter_power|grid_power)$/.test(C) && W[C].state !== "unavailable") || null, qe = (C) => Object.keys(W).filter((P) => P.startsWith(C + ".") && X(P)), M = qe("alarm_control_panel"), _ = I.length ? I : ["vacuum." + ma + "robot"];
    return {
      states: N,
      rooms: Ie,
      grid: V,
      // any device's room, hidden ones too (Maintenance's batteries are mostly diagnostic)
      areaOf: (C) => l[C] ? o[C] : ue(C),
      vacuums: _,
      homeVacuums: _.filter((C) => !Ie.some((P) => P.actions.includes(C))),
      security: {
        alarms: M.length ? M : ["alarm_control_panel." + ma + "house"],
        locks: qe("lock"),
        openings: [...Object.keys(l).filter((C) => C.startsWith("binary_sensor.")), "sensor." + ma + "doorbell"]
      }
    };
  }
  return { model: Y, call: ae, stop() {
    clearInterval(U), clearInterval(K);
  } };
}
const Vo = (n) => n < 0 ? 0 : n > 1 ? 1 : n, Hd = (n) => {
  const l = String(n || "#000000").trim().replace("#", ""), o = l.length === 3 ? l.split("").map((c) => c + c).join("") : l;
  return [0, 2, 4].map((c) => parseInt(o.slice(c, c + 2), 16) || 0);
}, ru = (n) => "#" + n.map((l) => Math.round(Math.max(0, Math.min(255, l))).toString(16).padStart(2, "0")).join(""), rc = {}, Pn = (n, l, o) => {
  const c = n + l + o;
  return rc[c] || (rc[c] = ru(Hd(n).map((m, v) => m + (Hd(l)[v] - m) * o)));
}, sc = {}, ql = (n) => sc[n] || (sc[n] = Hd(n));
function su(n) {
  const l = { clear: [n.skyClearDay, n.skyClearNight], cloudy: [n.skyCloudyDay, n.skyCloudyNight], rain: [n.skyRainDay, n.skyRainNight], snow: [n.skySnowDay, n.skySnowNight], fog: [n.skyFogDay, n.skyFogNight] };
  return l.partly = [Pn(l.clear[0], l.cloudy[0], 0.12), Pn(l.clear[1], l.cloudy[1], 0.12)], l.storm = [Pn(l.rain[0], "#000000", 0.22), Pn(l.rain[1], "#000000", 0.22)], l;
}
const lu = [
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
], jo = (n, l) => (lu[(l & 7) * 8 + (n & 7)] + 0.5) / 64, op = 1, ip = 2, rp = 3, sp = 4, Zr = 5, Vl = 6, Fd = 7, lp = 8, lc = (n, l) => l <= 0.6665 && ((n - 0.5) * (n - 0.5) + (l - 0.2877) * (l - 0.2877) <= 0.0824 || (n - 0.25) * (n - 0.25) + (l - 0.416) * (l - 0.416) <= 0.0625 || (n - 0.791) * (n - 0.791) + (l - 0.458) * (l - 0.458) <= 0.0437 || n >= 0.25 && n <= 0.791 && l >= 0.416), du = (n, l, o) => {
  let c = !1;
  for (let m = 0, v = n.length - 1; m < n.length; v = m++) {
    const w = n[m], A = n[v];
    w[1] > o != A[1] > o && l < (A[0] - w[0]) * (o - w[1]) / (A[1] - w[1]) + w[0] && (c = !c);
  }
  return c;
};
function cu(n, l, o, c, { oneBit: m, ink: v, paper: w, snowInk: A }) {
  const y = new Uint8ClampedArray(o * c * 4), B = ql(v), ge = ql(w);
  for (let oe = 0; oe < c; oe++) for (let U = 0; U < o; U++) {
    const K = oe * o + U, ae = l[K];
    if (n[K] == null) continue;
    let Y = ql(n[K]);
    if (m) {
      let G;
      ae === sp || ae === lp ? G = !0 : ae === Zr ? G = A : ae === Fd || ae === Vl ? G = !1 : G = Math.round((0.2126 * Y[0] + 0.7152 * Y[1] + 0.0722 * Y[2]) / 255 * 4) / 4 <= jo(U, oe), (ae === op || ae === ip || ae === rp || ae === Vl) && (U > 0 && l[K - 1] !== ae || U < o - 1 && l[K + 1] !== ae || oe > 0 && l[K - o] !== ae || oe < c - 1 && l[K + o] !== ae) && (G = !0), Y = G ? B : ge;
    }
    y[K * 4] = Y[0], y[K * 4 + 1] = Y[1], y[K * 4 + 2] = Y[2], y[K * 4 + 3] = 255;
  }
  return { w: o, h: c, data: y };
}
const pu = { clear: 0, partly: 0.35, cloudy: 0.85, fog: 0.9, rain: 1, storm: 1, snow: 0.9 }, uu = (n) => Zl(n, !1).split("/")[0], md = (n) => () => {
  n |= 0, n = n + 1831565813 | 0;
  let l = Math.imul(n ^ n >>> 15, 1 | n);
  return l = l + Math.imul(l ^ l >>> 7, 61 | l) ^ l, ((l ^ l >>> 14) >>> 0) / 4294967296;
}, hu = "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", fu = "M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", mu = "M0 -1L0.2687 -0.2687L1 0L0.2687 0.2687L0 1L-0.2687 0.2687L-1 0L-0.2687 -0.2687Z", gu = "M7 0L0 13L5 13L2 24L11 9L6 9L9 0Z", vu = [[7, 0], [0, 13], [5, 13], [2, 24], [11, 9], [6, 9], [9, 0]], bu = [".##", "##.", ".#.", "#.."];
function dp(n, { width: l, height: o, colors: c, wave: m = 0.38, soft: v = 6, glow: w = 0.6, columns: A = 6 }) {
  const y = { ...rn, dawn: "#e5a77e", ...c }, B = su(y), ge = l, oe = o, U = ge / A, K = U / 2, ae = Math.PI * 2, Y = n.length ? n : [{ cond: "cloudy", night: !1 }], G = [...Array(A * 2)].map((ue, X) => {
    const E = Y[Math.min(X, Y.length - 1)], N = uu(E.cond), ie = X % 2 === 1;
    return { cond: E.cond, k: N, night: ie, sky: B[N][ie ? 1 : 0], cover: pu[N] };
  }), W = (ue) => oe * (0.5 - m * Math.cos(ae * (ue / U - 0.25)));
  return { C: y, S: G, W: ge, H: oe, cw: U, sw: K, TAU: ae, yb: W, side: (ue, X, E) => {
    const N = (ue ? W(X) - E : E - W(X)) / Math.max(3, v * 1.4) + 0.5;
    return N <= 0 ? 0 : N >= 1 ? 1 : N;
  }, glowAt: (ue) => {
    const X = ((ue / U - 0.25) % 1 + 1) % 1, E = Math.max(0, Math.min(A - 1, Math.round(ue / U - 0.25))), N = Math.max(0, Math.min(A - 1, Math.round(ue / U - 0.75))), ie = 1 - (G[2 * E].cover + G[2 * N + 1].cover) / 2, Ae = Math.sin(Math.PI * Math.min(1, Math.max(0, W(ue) / oe)));
    return { c: X < 0.5 ? y.dusk : y.dawn, a: w * (0.2 + 0.8 * ie) * Ae * Ae };
  }, soft: v, tw: U * 0.3, sy: oe / 90 };
}
function cp(n, { clock: l = 0, ambient: o = !1, seed: c = 1 }) {
  const { S: m, sw: v, side: w, C: A, TAU: y, sy: B, H: ge } = n, oe = l, U = { stars: [], suns: [], moons: [], clouds: [], drops: [], flakes: [], fogs: [], bolts: [] };
  m.forEach((Y, G) => {
    const W = md(c * 977 + G * 131 + 7), pe = (G + 0.5) * v, Q = Y.night ? { clear: 9, partly: 5, cloudy: 2, fog: 0, rain: 0, storm: 0, snow: 1 }[Y.k] : 0;
    for (let ue = 0; ue < Q; ue++) {
      const X = pe + (W() - 0.5) * v * 1.6, E = (6 + W() * 76) * B, N = W() < 0.35, ie = 1.8 + W() * 1.6, Ae = w(!0, X, E) * (N ? 0.95 : 0.7) * (o ? 0.6 + 0.4 * Math.sin(y * oe / 2600 + ue * 1.7 + G) : 1);
      Ae >= 0.03 && U.stars.push({ x: X, y: E, big: N, size: ie, o: Ae });
    }
    if (!Y.night && (Y.k === "clear" || Y.k === "partly")) {
      const ue = pe + (W() - 0.5) * v * 0.3, X = Math.min(15, v * 0.29);
      U.suns.push({ x: ue, y: 32 * B, rad: X, halo: X * 2.8 * (o ? 1 + 0.07 * Math.sin(y * oe / 3600 + G) : 1) });
    }
    if (Y.night && (Y.k === "clear" || Y.k === "partly")) {
      const ue = Math.min(0.78, v * 0.55 / 34), X = pe - 23 * ue + (W() - 0.5) * v * 0.2;
      U.moons.push({ x: X + 23 * ue, y: (4 + (o ? 0.8 * Math.sin(y * oe / 5200 + G) : 0)) * B + 23 * ue, d: 46 * ue });
    }
  });
  const K = Math.max(56, Math.min(100, ge * 0.45)), ae = Math.max(1, v / (K * 2.4));
  return m.forEach((Y, G) => {
    const W = { clear: 0, partly: 1, cloudy: 3, fog: 0, rain: 3, storm: 3, snow: 2 }[Y.k];
    if (!W) return;
    const pe = Y.k === "partly" ? 1 : Math.round(W * ae), Q = md(c * 577 + G * 71 + 3), ue = (G + 0.5) * v, X = Y.k === "rain" || Y.k === "storm" || Y.night ? A.cloudNight : A.cloudDay, E = Y.night ? 0.82 : Y.k === "storm" ? 0.75 : 1;
    for (let N = 0; N < pe; N++) {
      const ie = K / 46 * (Y.k === "partly" ? 1 : 0.8 + Q() * 0.4), Ae = ue + (Y.k === "partly" ? v * 0.12 : ((N + 0.5) / pe - 0.5) * v * 0.95 + (Q() - 0.5) * v * 0.5 / pe), I = (Y.k === "partly" ? 40 : 6 + Q() * 26) * B, Ie = o ? 2.5 * Math.sin(y * oe / 9e3 + G * 1.3 + N * 2.1) : 0, V = o ? 0.9 * Math.sin(y * oe / 6100 + G + N) : 0;
      U.clouds.push({ x: Ae - 23 * ie + Ie, y: I - 15.33 * ie + V, w: 46 * ie, h: 30.66 * ie, fill: X, o: E * (pe > 1 && N === 0 ? 0.85 : 1) });
    }
  }), m.forEach((Y, G) => {
    const W = md(c * 313 + G * 29 + 11), pe = (G + 0.5) * v, Q = Y.cond === "pouring" ? 16 : Y.cond === "rainy" || Y.cond === "hail" ? 9 : Y.cond === "lightning-rainy" ? 12 : Y.cond === "snowy-rainy" ? 5 : 0;
    for (let X = 0; X < Q; X++) {
      let E = pe + (W() - 0.5) * v * 1.05, N = 44 + W() * 36, ie = 1;
      if (o) {
        const I = ((N - 44 + oe * 0.04) % 36 + 36) % 36;
        E -= 0.21 * (I - (N - 44)), N = 44 + I, ie = Math.min(1, I / 6, (36 - I) / 6);
      }
      N *= B;
      const Ae = w(Y.night, E, N) * ie;
      Ae >= 0.05 && U.drops.push({ x: E, y: N, o: Ae });
    }
    const ue = Y.cond === "snowy" ? 11 : Y.cond === "snowy-rainy" ? 6 : 0;
    for (let X = 0; X < ue; X++) {
      let E = pe + (W() - 0.5) * v * 1.05, N = 40 + W() * 44, ie = 1;
      if (o) {
        const I = ((N - 40 + oe * 9e-3) % 44 + 44) % 44;
        N = 40 + I, E += 1.6 * Math.sin(y * oe / 2800 + X * 1.9 + G), ie = Math.min(1, I / 6, (44 - I) / 6);
      }
      N *= B;
      const Ae = w(Y.night, E, N) * ie;
      Ae >= 0.05 && U.flakes.push({ x: E, y: N, o: Ae });
    }
    if (Y.k === "fog") {
      const X = Y.night ? "#c8ccd6" : "#ffffff", E = Y.night ? 0.28 : 0.62, N = o ? 4 * Math.sin(y * oe / 8e3 + G) : 0;
      for (let ie = 0; ie < 4; ie++) U.fogs.push({ x: pe - v * 0.75 + ie % 2 * v * 0.18 + (ie % 2 ? N : -N), y: (30 + ie * 13) * B, w: v * 1.3, c: X, a: E });
    }
    if (Y.k === "storm") {
      const X = (oe / 3400 + G * 0.37) % 1;
      U.bolts.push({ x: pe + (W() - 0.5) * v * 0.3 - 5, y: 36 * B, o: o && !(X < 0.05 || X > 0.09 && X < 0.12) ? 0.8 : 1 });
    }
  }), U;
}
function wu(n, l, o, c, m, v, w, A) {
  const { S: y, C: B, cw: ge, yb: oe, glowAt: U, soft: K, tw: ae, sy: Y } = n, G = new Array(o * c), W = new Uint8Array(o * c), pe = new Uint8Array(o * c), Q = (M, _, C, P, fe) => {
    C == null || M < 0 || _ < 0 || M >= o || _ >= c || (P >= 1 || P > jo(M + 5, _ + 3)) && (G[_ * o + M] = C, W[_ * o + M] = fe);
  }, ue = (M, _, C, P) => {
    for (let fe = Math.max(0, Math.floor(_ - C) - 1); fe <= Math.min(c - 1, _ + C + 1); fe++) for (let q = Math.max(0, Math.floor(M - C) - 1); q <= Math.min(o - 1, M + C + 1); q++) P(q, fe, q + 0.5 - M, fe + 0.5 - _);
  }, X = (M, _, C) => {
    for (let fe = 0; fe < M.length - 1; fe++) {
      const q = (fe + _) * ge;
      if (C < q - ae / 2) return [M[fe], M[fe], 0];
      if (C <= q + ae / 2) return [M[fe], M[fe + 1], (C - q + ae / 2) / ae];
    }
    const P = M[M.length - 1];
    return [P, P, 0];
  }, E = y.filter((M) => !M.night).map((M) => M.sky), N = y.filter((M) => M.night).map((M) => M.sky), ie = K / v, Ae = 16 * Y / v;
  for (let M = 0; M < o; M++) {
    const _ = (M + 0.5) * m, C = oe(_) / v, P = X(E, 0.75, _), fe = X(N, 1.25, _), q = U(_);
    for (let se = 0; se < c; se++) {
      const me = jo(M, se), ye = se + 0.5 - C, $e = (ie > 0.01 ? Vo(0.5 + ye / ie) : ye > 0 ? 1 : 0) > me;
      let st = $e ? P[2] > me ? P[1] : P[0] : fe[2] > me ? fe[1] : fe[0];
      ($e ? Vo(((se + 0.5) / c - 0.45) / 0.55) * 0.7 : Vo(1 - (se + 0.5) / (c * 0.55)) * 0.7) > jo(M + 2, se + 5) && (st = $e ? Pn(st, "#ffffff", 0.18) : Pn(st, "#000000", 0.25)), $e && ye >= 0 && ye < Ae && q.a * 1.3 * (1 - ye / Ae) > jo(M + 6, se + 1) && (st = q.c), G[se * o + M] = st, pe[se * o + M] = $e ? 0 : 1;
    }
  }
  const I = Pn(B.sun, "#ffffff", 0.55), Ie = Pn(B.moon, "#ffffff", 0.6);
  l.stars.forEach((M) => {
    const _ = Math.floor(M.x / m), C = Math.floor(M.y / v);
    if (_ < 0 || C < 0 || _ >= o || C >= c || !pe[C * o + _] || M.o < 0.15) return;
    const P = M.o > 0.45 ? B.star : Pn(B.star, G[C * o + _], 0.5), fe = M.big && M.o > 0.6 ? Math.floor(M.size / m) : 0;
    Q(_, C, P, 1, Fd);
    for (let q = 1; q <= fe; q++) [[_ - q, C], [_ + q, C], [_, C - q], [_, C + q]].forEach((se) => {
      se[0] >= 0 && se[1] >= 0 && se[0] < o && se[1] < c && pe[se[1] * o + se[0]] && Q(se[0], se[1], P, 1, Fd);
    });
  }), l.suns.forEach((M) => {
    const _ = Math.max(1.5, M.rad / m), C = M.x / m, P = M.y / v, fe = M.halo / m * 0.85;
    if (ue(C, P, fe, (q, se, me, ye) => {
      const $e = Math.sqrt(me * me + ye * ye);
      $e > _ && $e < fe && !pe[se * o + q] && Q(q, se, I, 0.3 * (1 - ($e - _) / (fe - _)), 0);
    }), A) {
      const q = Math.floor(w / 500) % 2, se = Math.max(1, _ * 0.3);
      for (let me = 0; me < 8; me++) if (me % 2 === q) for (let ye = _ + 1.2; ye < _ + 1.2 + se; ye += 0.7) Q(Math.floor(C + Math.cos(me * Math.PI / 4) * ye), Math.floor(P + Math.sin(me * Math.PI / 4) * ye), B.sun, 1, lp);
    }
    ue(C, P, _, (q, se, me, ye) => {
      me * me + ye * ye <= _ * _ && Q(q, se, Vo(((ye / _ + 1) / 2 - 0.6) / 0.4) > jo(q, se) ? B.sunEdge : B.sun, 1, op);
    });
  }), l.moons.forEach((M) => {
    const _ = Math.max(1.5, M.d * 0.37 / m), C = M.x / m, P = M.y / v, fe = C + 0.547 * _, q = P - 0.503 * _, se = 0.82 * _;
    ue(C, P, _, (me, ye, $e, st) => {
      if ($e * $e + st * st > _ * _) return;
      const _t = me + 0.5 - fe, ya = ye + 0.5 - q;
      _t * _t + ya * ya > se * se && Q(me, ye, Vo((st + _) / (2 * _) * 1.1 - 0.1) > jo(me, ye) ? B.moon : Ie, 1, ip);
    });
  }), l.clouds.forEach((M) => {
    const _ = Math.max(3, M.w / m), C = _ * 0.6665, P = M.x / m, fe = M.y / v, q = Pn(M.fill, "#000000", 0.16);
    for (let se = Math.max(0, Math.floor(fe) - 1); se <= Math.min(c - 1, fe + C + 1); se++) for (let me = Math.max(0, Math.floor(P) - 1); me <= Math.min(o - 1, P + _ + 1); me++) {
      const ye = (me + 0.5 - P) / _, $e = (se + 0.5 - fe) / _;
      lc(ye, $e) && Q(me, se, !lc(ye, $e + 1 / _) || Vo(($e - 0.42) / 0.25) * 0.8 > jo(me, se) ? q : M.fill, M.o, rp);
    }
  }), l.fogs.forEach((M) => {
    const _ = Math.floor(M.y / v), C = Math.max(_, Math.floor((M.y + 6 * Y) / v) - 1), P = Math.floor(M.x / m), fe = Math.floor((M.x + M.w) / m);
    for (let q = _; q <= C; q++) for (let se = P; se <= fe; se++) {
      const me = (se - P) / Math.max(1, fe - P);
      Q(se, q, M.c, M.a * (me < 0.25 ? me / 0.25 : me > 0.75 ? (1 - me) / 0.25 : 1), 0);
    }
  });
  const V = Math.max(2, Math.round(9 / v));
  l.drops.forEach((M) => {
    const _ = M.x / m, C = Math.floor(M.y / v);
    for (let P = 0; P < V; P++) Q(Math.floor(_ - 0.208 * P * v / m), C + P, B.rain, M.o, sp);
  });
  const qe = Math.max(0, Math.round(4.4 / m / 2.6));
  return l.flakes.forEach((M) => {
    const _ = Math.floor(M.x / m), C = Math.floor(M.y / v);
    Q(_, C, B.snow, M.o, Zr);
    for (let P = 1; P <= qe; P++)
      Q(_ - P, C, B.snow, M.o, Zr), Q(_ + P, C, B.snow, M.o, Zr), Q(_, C - P, B.snow, M.o, Zr), Q(_, C + P, B.snow, M.o, Zr);
  }), l.bolts.forEach((M) => {
    if (m <= 3.5)
      for (let _ = Math.floor(M.y / v); _ <= (M.y + 24) / v; _++) for (let C = Math.floor(M.x / m); C <= (M.x + 11) / m; C++)
        du(vu, (C + 0.5) * m - M.x, (_ + 0.5) * v - M.y) && Q(C, _, B.sun, 1, Vl);
    else {
      const _ = Math.round(M.x / m), C = Math.round(M.y / v);
      bu.forEach((P, fe) => P.split("").forEach((q, se) => {
        q === "#" && Q(_ + se, C + fe, B.sun, 1, Vl);
      }));
    }
  }), { col: G, ids: W };
}
function xu(n, l) {
  const o = l.px, c = Math.max(6, Math.round(l.width / o)), m = Math.max(6, Math.round(l.height / o)), v = l.width / c, w = l.height / m, A = l.ambient ? Math.floor((l.clock || 0) / 100) * 100 : 0, y = (K) => {
    const ae = dp(K, l);
    return wu(ae, cp(ae, { clock: A, ambient: l.ambient, seed: l.seed }), c, m, v, w, A, l.ambient);
  }, B = y(n), ge = l.reveal == null ? 1 : Vo(l.reveal);
  let oe = B.col, U = B.ids;
  if (ge < 1) {
    const K = l.prev ? y(l.prev) : null, ae = ge * (c + 12);
    oe = new Array(c * m), U = new Uint8Array(c * m);
    for (let Y = 0; Y < c * m; Y++) {
      const G = Y % c, W = Y / c | 0;
      (l.reduce ? ge : Vo((ae - G) / 12)) > jo(G, W) ? (oe[Y] = B.col[Y], U[Y] = B.ids[Y]) : K ? (oe[Y] = K.col[Y], U[Y] = K.ids[Y]) : (oe[Y] = null, U[Y] = 255);
    }
  }
  return cu(oe, U, c, m, { oneBit: l.oneBit, ink: l.ink || "#26221e", paper: l.paper || "#fbf9f6", snowInk: !1 });
}
function yu(n, l, o) {
  const c = o.width, m = o.height, v = o.reveal == null ? 1 : Vo(o.reveal), w = (U, K) => {
    const ae = dp(K, o);
    ku(U, ae, cp(ae, o));
  };
  if (n.clearRect(0, 0, c, m), v >= 1) {
    w(n, l);
    return;
  }
  if (o.prev && w(n, o.prev), o.reduce) {
    n.save(), n.globalAlpha = v, w(n, l), n.restore();
    return;
  }
  const A = n.canvas, y = A.__wxOff || (A.__wxOff = document.createElement("canvas"));
  (y.width !== A.width || y.height !== A.height) && (y.width = A.width, y.height = A.height);
  const B = y.getContext("2d");
  B.setTransform(n.getTransform()), B.clearRect(0, 0, c, m), w(B, l);
  const ge = v * (c + 64) - 64, oe = B.createLinearGradient(ge, 0, ge + 64, 0);
  oe.addColorStop(0, "rgba(0,0,0,1)"), oe.addColorStop(1, "rgba(0,0,0,0)"), B.globalCompositeOperation = "destination-in", B.fillStyle = oe, B.fillRect(0, 0, c, m), B.globalCompositeOperation = "source-over", n.save(), n.setTransform(1, 0, 0, 1, 0, 0), n.drawImage(y, 0, 0), n.restore();
}
function ku(n, l, o) {
  const { W: c, H: m, S: v, C: w, cw: A, yb: y, glowAt: B, soft: ge, tw: oe, sy: U } = l, K = n.getTransform().a || 1, ae = (V) => {
    n.shadowColor = V ? "rgba(28,18,8,.22)" : "transparent", n.shadowBlur = V ? 4 * K : 0, n.shadowOffsetY = V ? 1.5 * K : 0;
  }, Y = (V, qe) => {
    const M = ql(V);
    return "rgba(" + M[0] + "," + M[1] + "," + M[2] + "," + Math.max(0, Math.min(1, qe)).toFixed(3) + ")";
  }, G = (V, qe) => {
    const M = n.createLinearGradient(0, 0, c, 0);
    M.addColorStop(0, V[0]);
    for (let _ = 0; _ < V.length - 1; _++) {
      const C = (_ + qe) * A, P = (C - oe / 2) / c, fe = (C + oe / 2) / c;
      P > 0 && P < 1 && M.addColorStop(P, V[_]), fe > 0 && fe < 1 && M.addColorStop(fe, V[_ + 1]);
    }
    return M.addColorStop(1, V[V.length - 1]), M;
  }, W = Math.max(24, Math.ceil(c / 4)), pe = (V, qe) => {
    n.beginPath();
    for (let M = 0; M <= W; M++) {
      const _ = c * M / W, C = V == null ? 0 : y(_) + V;
      M ? n.lineTo(_, C) : n.moveTo(_, C);
    }
    for (let M = W; M >= 0; M--) {
      const _ = c * M / W;
      n.lineTo(_, y(_) + qe);
    }
    n.closePath(), n.fill();
  };
  n.save(), n.fillStyle = G(v.filter((V) => !V.night).map((V) => V.sky), 0.75), n.fillRect(0, 0, c, m);
  const Q = n.createLinearGradient(0, 0, c, 0);
  for (let V = 0; V <= 64; V++) {
    const qe = B(c * V / 64);
    Q.addColorStop(V / 64, Y(qe.c, Math.min(1, qe.a)));
  }
  n.fillStyle = Q;
  for (let V = 0; V < 8; V++)
    n.globalAlpha = 1 - V / 8, pe(V * 2 * U, (V + 1) * 2 * U);
  n.fillStyle = G(v.filter((V) => V.night).map((V) => V.sky), 1.25);
  const ue = Math.max(0.5, ge), X = 6;
  n.globalAlpha = 1, pe(null, -ue);
  for (let V = 0; V < X; V++)
    n.globalAlpha = 1 - (V + 0.5) / X, pe(-ue + 2 * ue * V / X, -ue + 2 * ue * (V + 1) / X);
  n.globalAlpha = 1;
  const E = new Path2D(mu), N = new Path2D(fu), ie = new Path2D(hu), Ae = new Path2D(gu);
  n.fillStyle = w.star, o.stars.forEach((V) => {
    n.globalAlpha = V.o, V.big ? (n.save(), n.translate(V.x, V.y), n.scale(V.size, V.size), n.fill(E), n.restore()) : (n.beginPath(), n.arc(V.x, V.y, 0.8, 0, Math.PI * 2), n.fill());
  }), n.globalAlpha = 1;
  const I = Pn(w.sun, "#ffffff", 0.55);
  o.suns.forEach((V) => {
    const qe = n.createRadialGradient(V.x, V.y, 0, V.x, V.y, V.halo);
    qe.addColorStop(0, Y(I, 0.42)), qe.addColorStop(0.7, Y(I, 0)), n.fillStyle = qe, n.beginPath(), n.arc(V.x, V.y, V.halo, 0, Math.PI * 2), n.fill();
    const M = n.createLinearGradient(0, V.y - V.rad, 0, V.y + V.rad);
    M.addColorStop(0.6, w.sun), M.addColorStop(1, w.sunEdge), n.fillStyle = M, ae(!0), n.beginPath(), n.arc(V.x, V.y, V.rad, 0, Math.PI * 2), n.fill(), ae(!1);
  });
  const Ie = Pn(w.moon, "#ffffff", 0.6);
  o.moons.forEach((V) => {
    n.save(), n.translate(V.x - V.d / 2, V.y - V.d / 2), n.scale(V.d / 46, V.d / 46);
    const qe = n.createLinearGradient(0, 6, 0, 40);
    qe.addColorStop(0, Ie), qe.addColorStop(1, w.moon), n.fillStyle = qe, ae(!0), n.fill(N), ae(!1), n.restore();
  }), o.clouds.forEach((V) => {
    n.save(), n.globalAlpha = V.o, n.translate(V.x, V.y), n.scale(V.w / 46, V.h / 30.66), n.translate(-4, -9.67), n.fillStyle = V.fill, ae(!0), n.fill(ie), ae(!1), n.restore();
  }), o.fogs.forEach((V) => {
    const qe = n.createLinearGradient(V.x, 0, V.x + V.w, 0);
    qe.addColorStop(0, Y(V.c, 0)), qe.addColorStop(0.25, Y(V.c, V.a)), qe.addColorStop(0.75, Y(V.c, V.a)), qe.addColorStop(1, Y(V.c, 0)), n.fillStyle = qe, n.fillRect(V.x, V.y, V.w, 6 * U);
  }), n.fillStyle = w.rain, o.drops.forEach((V) => {
    n.save(), n.globalAlpha = V.o, n.translate(V.x, V.y), n.rotate(12 * Math.PI / 180), n.fillRect(-1.5, 0, 3, 9), n.restore();
  }), n.fillStyle = w.snow, o.flakes.forEach((V) => {
    n.globalAlpha = V.o, n.beginPath(), n.arc(V.x, V.y, 2.2, 0, Math.PI * 2), n.fill();
  }), n.fillStyle = w.sun, o.bolts.forEach((V) => {
    n.save(), n.globalAlpha = V.o, n.translate(V.x, V.y), n.fill(Ae), n.restore();
  }), n.restore();
}
const Mu = (n) => n === "sunny" ? "clear" : n === "clear-night" ? "night" : n === "partlycloudy" ? "partly" : ["rainy", "pouring", "lightning", "lightning-rainy", "hail"].includes(n) ? "rain" : ["snowy", "snowy-rainy"].includes(n) ? "snow" : "cloudy", Ur = { s: "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", sp: "M41.025 27.045C40.5181 24.4943 39.142 22.1985 37.1315 20.5491C35.121 18.8996 32.6005 17.9987 30 18C25.665 18 21.9 20.46 20.025 24.045C17.8191 24.2867 15.7801 25.3344 14.2991 26.987C12.8181 28.6396 11.9994 30.7809 12 33C12 35.3869 12.9482 37.6761 14.636 39.364C16.3239 41.0518 18.6131 42 21 42H40.5C41.4849 42 42.4602 41.806 43.3701 41.4291C44.2801 41.0522 45.1069 40.4997 45.8033 39.8033C46.4997 39.1069 47.0522 38.2801 47.4291 37.3701C47.806 36.4602 48 35.4849 48 34.5C48 30.54 44.925 27.33 41.025 27.045Z", lp: "M70.8016 48.008C69.9751 43.8493 67.7316 40.1062 64.4536 37.4168C61.1755 34.7275 57.0661 33.2587 52.8261 33.2607C45.7581 33.2607 39.6196 37.2716 36.5625 43.1167C32.9659 43.5108 29.6414 45.219 27.2267 47.9135C24.8121 50.608 23.4772 54.0991 23.4783 57.7173C23.4783 61.609 25.0243 65.3414 27.7761 68.0933C30.528 70.8452 34.2604 72.3912 38.1522 72.3912H69.9456C71.5515 72.3912 73.1416 72.0749 74.6252 71.4604C76.1088 70.8458 77.4568 69.9451 78.5923 68.8096C79.7278 67.6741 80.6286 66.3261 81.2431 64.8425C81.8576 63.3589 82.1739 61.7688 82.1739 60.1629C82.1739 53.7064 77.1603 48.4727 70.8016 48.008Z", lc: "M65.3723 37.5398C64.4356 32.8266 61.8929 28.5843 58.1778 25.5364C54.4627 22.4885 49.8054 20.8238 45 20.8262C36.9897 20.8262 30.0326 25.3718 26.5679 31.9963C22.4918 32.4429 18.724 34.3788 15.9874 37.4326C13.2508 40.4864 11.738 44.443 11.7391 48.5436C11.7391 52.9542 13.4913 57.1842 16.6101 60.3031C19.7289 63.4219 23.9589 65.174 28.3696 65.174H64.4022C66.2221 65.174 68.0243 64.8155 69.7057 64.1191C71.3871 63.4226 72.9149 62.4018 74.2018 61.1149C75.4887 59.828 76.5095 58.3002 77.2059 56.6188C77.9024 54.9374 78.2609 53.1353 78.2609 51.3153C78.2609 43.9979 72.5788 38.0664 65.3723 37.5398Z", lr: "M62.9755 28.4431C62.149 24.2844 59.9055 20.5412 56.6275 17.8519C53.3494 15.1626 49.24 13.6937 45 13.6958C37.9321 13.6958 31.7935 17.7067 28.7364 23.5518C25.1398 23.9459 21.8153 25.654 19.4006 28.3485C16.986 31.043 15.6511 34.5342 15.6522 38.1523C15.6522 42.0441 17.1982 45.7765 19.9501 48.5284C22.7019 51.2802 26.4343 52.8262 30.3261 52.8262H62.1196C63.7254 52.8262 65.3155 52.5099 66.7991 51.8954C68.2827 51.2809 69.6307 50.3802 70.7662 49.2447C71.9017 48.1092 72.8025 46.7611 73.417 45.2775C74.0315 43.7939 74.3478 42.2038 74.3478 40.598C74.3478 34.1415 69.3342 28.9078 62.9755 28.4431Z" }, Bl = {
  s: ["M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", 6.11, 40],
  l: ["M41.1747 11.959C37.7298 16.5251 35.6875 22.2086 35.6874 28.3691C35.6874 43.4321 47.8979 55.6435 62.9608 55.6436C68.3701 55.6436 73.411 54.0676 77.6512 51.3516C74.6865 66.6826 61.197 78.2607 44.9999 78.2607C26.6305 78.2607 11.7391 63.3694 11.7391 45C11.7392 27.9244 24.6071 13.8562 41.1747 11.959Z", 11.96, 78.26],
  sp: ["M16.6201 5.0791C15.3771 6.72655 14.6397 8.7772 14.6396 11C14.6396 16.4345 19.046 20.8398 24.4805 20.8398C26.4326 20.8398 28.2502 20.2686 29.7803 19.2881C28.7119 24.821 23.8449 29 18 29C11.3726 29 6 23.6274 6 17C6 10.8393 10.6426 5.76349 16.6201 5.0791Z", 5.08, 29],
  lp: ["M32.5175 9.93848C30.0859 13.1616 28.6435 17.1729 28.6434 21.5215C28.6434 32.1541 37.2628 40.7733 47.8954 40.7734C51.7136 40.7734 55.2724 39.6622 58.2655 37.7451C56.1724 48.5666 46.6506 56.7391 35.2177 56.7393C22.251 56.7393 11.7391 46.2274 11.7391 33.2607C11.7393 21.2073 20.8226 11.2776 32.5175 9.93848Z", 9.94, 56.74]
}, gd = (n, l) => '<path class="' + l + '" d="' + n + '"/>', Su = (n, l) => ' style="animation-delay:-' + Math.round(n * 137 % l) + 'ms"', Nn = (n, l, o, c) => {
  const m = o * 0.2687;
  return '<path class="wbTwinkle" fill="#fff"' + (c < 1 ? ' opacity="' + c + '"' : "") + Su(n, 2400) + ' d="M' + n + " " + (l - o) + "L" + (n + m) + " " + (l - m) + "L" + (n + o) + " " + l + "L" + (n + m) + " " + (l + m) + "L" + n + " " + (l + o) + "L" + (n - m) + " " + (l + m) + "L" + (n - o) + " " + l + "L" + (n - m) + " " + (l - m) + 'Z"/>';
}, dc = ([n, l, o], c) => '<path class="wbMoonPath" d="' + n + '" fill="url(#' + c + ')"/><defs><linearGradient id="' + c + '" x1="0" y1="' + l + '" x2="0" y2="' + o + '" gradientUnits="userSpaceOnUse"><stop stop-color="#FFF4C7"/><stop offset="1" stop-color="#F2C95E"/></linearGradient></defs>', Cu = (n, l) => l ? '<circle class="wbSunDisc" cx="45" cy="45" r="33.26" fill="url(#' + n + ')"/><defs><linearGradient id="' + n + '" x1="12" y1="8.5" x2="67" y2="73.5" gradientUnits="userSpaceOnUse"><stop offset=".653" stop-color="#FFE100"/><stop offset="1" stop-color="#F2C159"/></linearGradient></defs>' : '<circle class="wbSunDisc" cx="23" cy="23" r="17" fill="url(#' + n + ')"/><defs><linearGradient id="' + n + '" x1="23" y1="6" x2="23" y2="40" gradientUnits="userSpaceOnUse"><stop offset=".606" stop-color="#FFE100"/><stop offset="1" stop-color="#FFAA00"/></linearGradient></defs>', Tu = (n) => (n ? ["29.35", "43.04", "56.74"].map((l, o) => '<g class="wbDrop" style="animation-delay:-' + o * 317 + 'ms"><rect class="wbAccent" x="' + l + '" y="60.65" width="5.87" height="15.65" rx="2.93" transform="rotate(12 ' + l + ' 60.65)"/></g>') : [19, 26, 33].map((l, o) => '<g class="wbDrop" style="animation-delay:-' + o * 317 + 'ms"><rect class="wbAccent" width="3.03" height="9.41" rx="1.51" transform="matrix(0.9698 0.244 -0.1768 0.9843 ' + l + ' 38)"/></g>')).join(""), Lu = (n) => (n ? [[33.67, 67.67], [47.67, 64.67], [61.67, 67.67], [40.67, 77.67], [54.67, 77.67]] : [[21.2, 42.2], [29.2, 40.2], [37.2, 42.2], [25.2, 48.2], [33.2, 48.2]]).map(([l, o], c) => '<circle class="wbFlake" style="animation-delay:-' + c * 640 + 'ms" cx="' + l + '" cy="' + o + '" r="' + (n ? 3.67 : 2.2) + '" fill="#fff"/>').join("");
function Au(n, l, o, c) {
  const m = (v) => '<g filter="url(#' + c + '-sh)">' + v + "</g>";
  return n === "clear" ? l ? m(dc(o ? Bl.l : Bl.s, c)) + (o ? Nn(70, 20, 5.83, 1) + Nn(78.33, 41.67, 3.75, 0.8) + Nn(60, 71.67, 3.33, 0.6) : Nn(42, 12, 3.5, 1) + Nn(47, 25, 2.25, 0.8) + Nn(36, 43, 2, 0.6)) : m(Cu(c, o)) : n === "partly" ? m(l ? dc(o ? Bl.lp : Bl.sp, c) : o ? '<circle class="wbSunDisc" cx="35.22" cy="33.26" r="23.48" fill="#FFE100"/>' : '<circle class="wbSunDisc" cx="18" cy="17" r="12" fill="#FFE100"/>') + m(gd(o ? Ur.lp : Ur.sp, l ? "wbCloudLight" : "wbBright")) + (l ? o ? Nn(73.33, 16.67, 4.17, 0.9) : Nn(44, 10, 2.5, 0.9) : "") : n === "cloudy" ? m(gd(o ? Ur.lc : Ur.s, l ? "wbCloudLight" : "wbBright")) + (l ? o ? Nn(15, 15, 3.75, 0.8) + Nn(76.67, 13.33, 2.92, 0.6) : Nn(9, 9, 2.25, 0.8) + Nn(46, 8, 1.75, 0.6) : "") : m(gd(o ? Ur.lr : Ur.s, "wbCloudLight")) + (n === "rain" ? Tu(o) : Lu(o));
}
const _u = (n, l) => '<defs><filter id="' + n + '-sh" x="-25%" y="-25%" width="150%" height="160%"><feDropShadow dx="0" dy="' + (l ? 1.6 : 1) + '" stdDeviation="' + (l ? 1.8 : 1.1) + '" flood-color="#1c1208" flood-opacity=".22"/></filter></defs>';
function Eu(n, l, o, c) {
  let m = Mu(n);
  const v = m === "night" || !!o;
  m === "night" && (m = "clear");
  const w = l ? 90 : 54;
  return { k: m, night: v, svg: '<svg viewBox="0 0 ' + w + " " + w + '">' + _u(c, l) + Au(m, v, l, c) + "</svg>" };
}
const Du = [
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
], Rl = (n, l) => (Du[l % 8 * 8 + n % 8] + 0.5) / 64, to = (n) => [parseInt(n.slice(1, 3), 16), parseInt(n.slice(3, 5), 16), parseInt(n.slice(5, 7), 16)], Ga = (n, l, o) => [Math.round(n[0] + (l[0] - n[0]) * o), Math.round(n[1] + (l[1] - n[1]) * o), Math.round(n[2] + (l[2] - n[2]) * o)], js = (n) => n < 0 ? 0 : n > 1 ? 1 : n, cc = (n, l) => {
  let o = n * 374761393 + l * 668265263 ^ 1540483477;
  return o = Math.imul(o ^ o >>> 13, 1274126177), ((o ^ o >>> 16) >>> 0) / 4294967296;
}, hr = [255, 255, 255], tn = to("#26221e"), pc = to("#0288d1"), Bu = to("#01579b"), vd = to(rn.cloudDay), bd = to(rn.cloudNight), Nl = to(rn.dusk), wd = to(rn.sunEdge), Ru = to(rn.sun), Nu = 10, uc = 0.3, Go = 56, pp = 21;
function Pu(n) {
  const l = Array.from({ length: pp }, () => new Array(Go).fill(void 0)), o = (w, A, y) => {
    l[A][w] = y;
  }, c = Ga(Nl, tn, 0.35), m = Ga(tn, hr, 0.22);
  for (let w = 0; w <= 6; w++) {
    const A = w < 2 ? Go - 2 : Go - 1;
    for (let y = 6 - w; y <= A; y++) o(y, w, w < 2 ? c : w === 6 ? m : tn);
  }
  const v = [Nl, wd, bd, to(rn.skyRainDay), Ga(Nl, tn, 0.2), Ga(n, tn, 0.35)];
  [2, 3, 2, 3, 3].forEach((w, A) => {
    const y = 9 + A * 6;
    for (let B = 0; B < w; B++) {
      const ge = v[(A * 2 + B * 3) % v.length];
      for (let oe = y; oe < y + 5; oe++)
        o(oe, 7 + B * 2, Ga(ge, tn, 0.12)), o(oe, 8 + B * 2, B === w - 1 ? Ga(ge, hr, 0.3) : ge);
      o(y + 5, 7 + B * 2, tn), o(y + 5, 8 + B * 2, tn);
    }
  });
  for (let w = 7; w <= 12; w++) o(5, w, tn);
  o(5, 13, wd);
  for (let w = 7; w <= 14; w++) for (let A = 42; A <= 51; A++) o(A, w, A === 51 ? bd : vd);
  for (let w = 43; w <= 50; w += 2)
    o(w, 12, tn), o(w, 9, Ga(tn, vd, 0.4));
  for (let w = 40; w <= 53; w++) o(w, 14, w === 40 || w === 53 ? bd : vd);
  for (let w = 15; w <= 18; w++) for (let A = 46; A <= 49; A++) o(A, w, w === 18 ? tn : w === 16 ? wd : Nl);
  for (let w = 15; w <= 19; w++) o(44, w, tn);
  return o(44, 20, Ru), l;
}
function Iu(n, l, o, c) {
  const m = Math.max(1, Math.round(n)), v = Math.max(1, Math.round(l)), w = new Uint8ClampedArray(m * v * 4), A = to(c.skyClearDay), y = to(c.skyFogDay), B = Pu(A), ge = Math.round(v * 0.55), oe = js(1 - Math.log(o / uc) / Math.log(Nu / uc)), U = Ga(A, y, oe), K = (W) => js((W - 0.1) / 0.9), ae = js((1 - Math.exp(-2 / o) - 0.2) / 0.8), Y = Math.round(m / 2 - Go / 2), G = ge + 3;
  for (let W = 0; W < v; W++) {
    const pe = G - 1 - W, Q = W - G;
    for (let ue = 0; ue < m; ue++) {
      const X = ue - Y;
      let E, N;
      const ie = pe >= 0 && pe < pp && X >= 0 && X < Go ? B[pe][X] : void 0;
      if (ie)
        E = ie, N = ae;
      else if (pe >= 0 && pe <= 1 && X >= 4 - pe && X <= 5 - pe)
        E = Ga(hr, pc, 0.15), N = ae;
      else if (W < ge) {
        const Ie = js(((W + 0.5) / ge - 0.15) / 0.85) * 3, V = Math.min(3, Math.floor(Ie + Rl(ue + 2, W + 5)));
        E = Ga(U, hr, V * 0.1), N = oe * 0.95;
      } else {
        const Ie = (W - ge + 0.5) / (v - ge), V = Math.min(1.5, 6e-3 / (Ie * Ie)), qe = js(Ie * 1.4) * 3, M = Math.min(3, Math.floor(qe + Rl(ue + 1, W + 6)));
        E = Ga(pc, Bu, M / 3);
        const _ = 1 + Math.round(Ie * 7), C = Math.floor(ue / (_ * 3)), P = 0.06 + 0.16 * Ie, fe = ue % (_ * 3) < _;
        fe && cc(C, W) < P ? E = Ga(E, hr, 0.18 + 0.1 * (1 - Ie)) : fe && Ie > 0.5 && cc(C, W - 1) < P && (E = Ga(E, tn, 0.12)), N = K(1 - Math.exp(-V / o)), Q === 0 && X >= 3 && X <= 8 ? (E = Ga(E, hr, X < 6 ? 0.8 : 0.45), N = ae) : Q >= 0 && Q <= 2 && X >= Go && X < Go + 40 ? ((1 - (X - Go) / 40) * (Q === 1 ? 0.9 : 0.5) > Rl(ue, W + 3) && (E = Ga(E, hr, 0.5)), N = ae) : Q === 0 && X >= 6 && X < Go && (E = Ga(E, tn, X % 2 === 0 ? 0.35 : 0.2), N = ae);
      }
      const Ae = N > Rl(ue, W) ? y : E, I = (W * m + ue) * 4;
      w[I] = Ae[0], w[I + 1] = Ae[1], w[I + 2] = Ae[2], w[I + 3] = 255;
    }
  }
  return { data: w, w: m, h: v };
}
const Hu = {
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
}, Fu = 1.6;
function Ou(n, l) {
  const o = n ? Hu[String(n).toUpperCase()] : void 0;
  if (!o || !(l > 0)) return;
  const c = (v) => Math.abs(Math.log(v[2] / l)), m = o.reduce((v, w) => c(w) < c(v) ? w : v);
  return c(m) <= Math.log(Fu) ? { from: m[0], to: m[1], km: m[2] } : void 0;
}
const Wu = (n, l) => l === "mi" ? n * 1.609344 : l === "m" ? n / 1e3 : l === "ft" ? n * 3048e-7 : l === "yd" ? n * 9144e-7 : n, qu = (n) => n < 1 ? "very_poor" : n < 4 ? "poor" : n < 10 ? "moderate" : n < 20 ? "good" : n < 40 ? "very_good" : "excellent", eo = 6e4, qt = 36e5, wo = 864e5, Us = 1440, zu = 6, ju = 10 * eo, hc = 3, Vu = 3, fc = { day: [6, 22], waking: [7, 23], all: [0, 24] }, Gu = [[-5, [91, 141, 239]], [5, [79, 195, 230]], [12, [95, 211, 160]], [18, [255, 211, 77]], [24, [255, 159, 67]], [30, [255, 91, 79]]], Uu = "M6.5 18.5h11a4 4 0 0 0 .4-7.98 5.5 5.5 0 0 0-10.6-1.1A4.5 4.5 0 0 0 6.5 18.5Z", mc = (n, l, o, c) => '<circle cx="' + n + '" cy="' + l + '" r="' + o + '"/><path d="' + [0, 45, 90, 135, 180, 225, 270, 315].map((m) => {
  const v = Math.cos(m * Math.PI / 180), w = Math.sin(m * Math.PI / 180), A = o + 2, y = o + 2 + c;
  return "M" + (n + v * A).toFixed(2) + " " + (l + w * A).toFixed(2) + "L" + (n + v * y).toFixed(2) + " " + (l + w * y).toFixed(2);
}).join("") + '"/>', Wo = (n) => '<path d="' + Uu + '"' + (n ? ' transform="' + n + '"' : "") + "/>", qo = (n) => '<path d="' + n + '"/>', gc = '<path d="M19.5 14.5A7.5 7.5 0 1 1 9.5 4.5a6 6 0 0 0 10 10Z"/>';
function Yu(n, l) {
  const o = "translate(0,-3)";
  switch (n) {
    case "sunny":
      return l ? gc : mc(12, 12, 4, 2.5);
    case "clear-night":
      return gc;
    case "partlycloudy":
      return (l ? '<path d="M11.5 9.5A4.5 4.5 0 1 1 6 4a3.6 3.6 0 0 0 5.5 5.5Z"/>' : mc(7.5, 7.5, 2.6, 1.4)) + Wo("translate(3.6,3) scale(.85)");
    case "cloudy":
      return Wo();
    case "fog":
      return qo("M4 8.5h16M3 12.5h18M5 16.5h14");
    case "rainy":
      return Wo(o) + qo("M8.5 18.5 7.5 21M12.5 18.5l-1 2.5M16.5 18.5l-1 2.5");
    case "pouring":
      return Wo(o) + qo("M7.5 18.5 6 22M11 18.5 9.5 22M14.5 18.5 13 22M18 18.5 16.5 22");
    case "snowy":
      return Wo(o) + qo("M8 20h.01M12 21.5h.01M16 20h.01");
    case "snowy-rainy":
      return Wo(o) + qo("M8.5 18.5 7.5 21M12 21h.01M16.5 18.5l-1 2.5");
    case "hail":
      return Wo(o) + '<circle cx="8" cy="20.5" r="1"/><circle cx="12" cy="21.5" r="1"/><circle cx="16" cy="20.5" r="1"/>';
    case "lightning":
      return Wo(o) + qo("M12.5 16 10.5 19.5h3l-2 3");
    case "lightning-rainy":
      return Wo(o) + qo("M12.5 16 10.5 19.5h3l-2 3M7.5 18.5l-1 2.5M17.5 18.5l-1 2.5");
    case "windy":
    case "windy-variant":
      return qo("M3 8.5h10.5a2.5 2.5 0 1 0-2.5-2.5M3 12h15.5a2.5 2.5 0 1 1-2.5 2.5M3 15.5h8");
    default:
      return '<circle cx="12" cy="12" r="8"/>' + qo("M12 8v5M12 16h.01");
  }
}
const xd = (n, l) => '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + Yu(n, l) + "</svg>", Zu = /* @__PURE__ */ new Set(["rainy", "pouring", "lightning", "lightning-rainy", "hail", "snowy", "snowy-rainy"]), Ku = 30 * eo, $u = 7, Xu = 3, vc = 1, Ju = eo, Qu = 15 * eo, eh = 5, ga = {
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
}, th = {
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
}, ah = ["n", "nne", "ne", "ene", "e", "ese", "se", "sse", "s", "ssw", "sw", "wsw", "w", "wnw", "nw", "nnw"], nh = Object.keys(Ye.phases), Pl = { low: "var(--success-color, #43a047)", moderate: "var(--warning-color, #ffa600)", high: "var(--orange-color, #ff9800)", very_high: "var(--error-color, #db4437)" }, oh = { good: "var(--success-color, #43a047)", fair: "var(--lime-color, #cddc39)", moderate: "var(--warning-color, #ffa600)", poor: "var(--orange-color, #ff9800)", very_poor: "var(--error-color, #db4437)", extremely_poor: "var(--purple-color, #926bc7)" }, up = [["good", 15], ["fair", 25], ["moderate", 37.5], ["poor", 50], ["very_poor", 75], ["extremely_poor", 1 / 0]], Il = 100, bc = "µg/m³", ih = "weather_alerts.air_quality_pollen", Gl = ["aqi", "pm25", "pm10", "nitrogen_dioxide", "ozone"], rh = { "m/s": 1, "km/h": 1 / 3.6, mph: 0.44704, kn: 0.514444, "ft/s": 0.3048 }, sh = [0.5, 1.6, 3.4, 5.5, 8, 10.8, 13.9, 17.2, 20.8, 24.5, 28.5, 32.7], lh = { hPa: 1, mbar: 1, kPa: 10, inHg: 33.8639, mmHg: 1.33322 }, dh = { daily: 1, hourly: 2 }, je = (n) => String(n ?? "").replace(/[&<>"']/g, (l) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[l]), Ia = (n, l) => n.replace(/\{(\w+)\}/g, (o, c) => l[c] ?? ""), Kr = (n) => '<svg class="wbIcon" viewBox="0 0 24 24" aria-hidden="true"><path d="' + n + '"/></svg>', wc = /* @__PURE__ */ new Map();
function ch(n) {
  let l = wc.get(n);
  if (l === void 0) {
    const o = "http://www.w3.org/2000/svg", c = document.createElementNS(o, "svg"), m = document.createElementNS(o, "path");
    c.setAttribute("viewBox", "0 0 24 24"), c.style.cssText = "position:absolute;width:24px;height:24px;visibility:hidden;pointer-events:none", m.setAttribute("d", n), c.append(m), document.body.append(c);
    const v = m.getBBox();
    c.remove();
    const w = Math.max(v.width, v.height), A = w ? 26 * 24 / w : 0, y = A / 24;
    l = w ? "width:" + A.toFixed(2) + "px;height:" + A.toFixed(2) + "px;translate:" + ((12 - v.x - v.width / 2) * y).toFixed(2) + "px " + ((12 - v.y - v.height / 2) * y).toFixed(2) + "px" : "", wc.set(n, l);
  }
  return l ? '<svg class="wbIcon" viewBox="0 0 24 24" aria-hidden="true" style="' + l + '"><path d="' + n + '"/></svg>' : Kr(n);
}
const ph = () => {
  var n;
  return !!((n = window.matchMedia) != null && n.call(window, "(prefers-reduced-motion: reduce)").matches);
}, Xt = (n) => n != null && n !== "" && Number.isFinite(Number(n)), xc = /* @__PURE__ */ new Map(), yc = /* @__PURE__ */ new Map(), yd = /* @__PURE__ */ new WeakMap(), uh = (n) => {
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
function pa(n, l, o) {
  const c = Number(n);
  if (Number.isNaN(c)) return String(n);
  const m = (l == null ? void 0 : l.number_format) === "none", v = { maximumFractionDigits: 2, ...o, ...m ? { useGrouping: !1 } : {} }, w = m ? "en-US" : uh(l), A = JSON.stringify([w, v]);
  let y = xc.get(A);
  if (!y) {
    try {
      y = new Intl.NumberFormat(w, v);
    } catch {
      y = new Intl.NumberFormat(void 0, v);
    }
    xc.set(A, y);
  }
  return y.format(c);
}
const Gd = (n) => {
  var l;
  return ((l = n == null ? void 0 : n.locale) == null ? void 0 : l.language) || (n == null ? void 0 : n.language) || void 0;
};
function hh(n) {
  if (!n) return (/* @__PURE__ */ new Date("January 1, 2023 22:00:00")).toLocaleString().includes("10");
  if (yd.has(n)) return yd.get(n);
  const l = n.time_format, o = l === "language" || l === "system" || !l ? (/* @__PURE__ */ new Date("January 1, 2023 22:00:00")).toLocaleString(l === "language" ? n.language : void 0).includes("10") : l === "12";
  return yd.set(n, o), o;
}
const hp = (n) => {
  var l, o;
  return ((l = n == null ? void 0 : n.locale) == null ? void 0 : l.time_zone) === "server" && ((o = n == null ? void 0 : n.config) != null && o.time_zone) ? n.config.time_zone : void 0;
};
function fp(n, l) {
  const o = JSON.stringify([n, l]);
  let c = yc.get(o);
  if (!c) {
    try {
      c = new Intl.DateTimeFormat(n, l);
    } catch {
      c = new Intl.DateTimeFormat(void 0, { ...l, timeZone: void 0 });
    }
    yc.set(o, c);
  }
  return c;
}
const zo = (n, l) => fp(Gd(l), { hour: "numeric", minute: "2-digit", hourCycle: hh(l == null ? void 0 : l.locale) ? "h12" : "h23", timeZone: hp(l) }).format(n), kc = (n, l) => fp(Gd(l), { weekday: "short", timeZone: hp(l) }).format(n), fh = (n, l) => n.toLocaleDateString(Gd(l), { weekday: "narrow" }), ca = (n, l) => Xt(l) ? pa(Math.round(Number(l)), n.locale) + "°" : "–", $r = (n) => {
  const l = new Date(n);
  return l.setHours(0, 0, 0, 0), l;
}, Yr = (n, l) => n.getFullYear() === l.getFullYear() && n.getMonth() === l.getMonth() && n.getDate() === l.getDate(), mn = Math.PI / 180, mh = 2440588, gh = 2451545, Ul = mn * 23.4397, vh = 149598e3, bh = -0.833 * mn, wh = 0.133 * mn, Mc = 5 * eo, mp = (n) => n.getTime() / wo - 0.5 + mh - gh, gp = (n, l) => Math.atan2(Math.sin(n) * Math.cos(Ul) - Math.tan(l) * Math.sin(Ul), Math.cos(n)), vp = (n, l) => Math.asin(Math.sin(l) * Math.cos(Ul) + Math.cos(l) * Math.sin(Ul) * Math.sin(n)), xh = (n, l) => mn * (280.16 + 360.9856235 * n) - l, yh = (n, l, o) => Math.asin(Math.sin(l) * Math.sin(o) + Math.cos(l) * Math.cos(o) * Math.cos(n));
function bp(n) {
  const l = mn * (357.5291 + 0.98560028 * n), o = mn * (1.9148 * Math.sin(l) + 0.02 * Math.sin(2 * l) + 3e-4 * Math.sin(3 * l)), c = l + o + mn * 102.9372 + Math.PI;
  return { ra: gp(c, 0), dec: vp(c, 0), dist: vh };
}
function wp(n) {
  const l = mn * (218.316 + 13.176396 * n), o = mn * (134.963 + 13.064993 * n), c = mn * (93.272 + 13.22935 * n), m = l + mn * 6.289 * Math.sin(o), v = mn * 5.128 * Math.sin(c);
  return { ra: gp(m, v), dec: vp(m, v), dist: 385001 - 20905 * Math.cos(o) };
}
const xp = (n, l, o, c) => {
  const m = mp(l), v = n(m);
  return yh(xh(m, mn * -c) - v.ra, mn * o, v.dec);
}, Ud = (n, l, o) => xp(bp, n, l, o), kh = (n, l, o) => xp(wp, n, l, o);
function yp(n, l, o, c) {
  const m = {};
  let v = o.getTime(), w = n(o) - l;
  for (let A = v + Mc; A <= c.getTime(); A += Mc) {
    const y = n(new Date(A)) - l;
    if (w < 0 != y < 0) {
      const B = new Date(v + (A - v) * w / (w - y));
      y > 0 ? m.rise ?? (m.rise = B) : m.set ?? (m.set = B);
    }
    v = A, w = y;
  }
  return m;
}
const kp = (n) => {
  const l = $r(n);
  return [l, new Date(l.getTime() + wo)];
}, Mh = (n, l, o) => yp((c) => Ud(c, l, o), bh, ...kp(n)), Sh = (n, l, o) => yp((c) => kh(c, l, o), wh, ...kp(n));
function Ch(n) {
  const l = mp(n), o = bp(l), c = wp(l), m = Math.acos(Math.sin(o.dec) * Math.sin(c.dec) + Math.cos(o.dec) * Math.cos(c.dec) * Math.cos(o.ra - c.ra)), v = Math.atan2(o.dist * Math.sin(m), c.dist - o.dist * Math.cos(m)), w = Math.atan2(Math.cos(o.dec) * Math.sin(o.ra - c.ra), Math.sin(o.dec) * Math.cos(c.dec) - Math.cos(o.dec) * Math.sin(c.dec) * Math.cos(o.ra - c.ra));
  return { fraction: (1 + Math.cos(v)) / 2, phase: 0.5 + 0.5 * v * (w < 0 ? -1 : 1) / Math.PI };
}
const Th = (n) => {
  const l = n * 28;
  return l < 0.5 || l > 27.5 ? "new_moon" : l < 6.5 ? "waxing_crescent" : l < 7.5 ? "first_quarter" : l < 13.5 ? "waxing_gibbous" : l < 14.5 ? "full_moon" : l < 20.5 ? "waning_gibbous" : l < 21.5 ? "last_quarter" : "waning_crescent";
}, Yl = (n) => {
  const l = n == null ? void 0 : n.config;
  return l && Xt(l.latitude) && Xt(l.longitude) ? { lat: Number(l.latitude), lon: Number(l.longitude) } : null;
};
function kd(n, l) {
  var B, ge, oe;
  const o = Yl(n), c = o ? Mh(l, o.lat, o.lon) : {}, m = (B = n == null ? void 0 : n.states) == null ? void 0 : B["sun.sun"], v = $r(l).getTime(), w = (U) => {
    const K = U ? new Date(U) : null;
    return K && Number.isFinite(K.getTime()) && $r(K).getTime() === v ? K : null;
  }, A = w((ge = m == null ? void 0 : m.attributes) == null ? void 0 : ge.next_rising), y = w((oe = m == null ? void 0 : m.attributes) == null ? void 0 : oe.next_setting);
  return A && (c.rise = A), y && (c.set = y), c;
}
function Lh(n) {
  var c;
  const l = (c = n == null ? void 0 : n.states) == null ? void 0 : c["sun.sun"];
  if ((l == null ? void 0 : l.state) === "below_horizon" || (l == null ? void 0 : l.state) === "above_horizon") return l.state === "below_horizon";
  const o = Yl(n);
  return o ? Ud(/* @__PURE__ */ new Date(), o.lat, o.lon) < 0 : !1;
}
const fr = (n) => !!n && n.state !== "unavailable" && n.state !== "unknown", Xr = (n, l) => {
  var c;
  const o = (c = n.entities) == null ? void 0 : c[l];
  return !o || !o.hidden && !o.entity_category;
}, hn = (n, l, o) => {
  var c, m;
  for (const v of l) {
    const w = (c = n.states) == null ? void 0 : c[v];
    if (!fr(w)) continue;
    const A = (m = w.attributes) == null ? void 0 : m[o];
    if (A != null && A !== "") return { stateObj: w, value: A };
  }
}, Ah = (n, l) => l.map((o) => {
  var c;
  return (c = n.states) == null ? void 0 : c[o];
}).find(fr), _h = (n, l, o) => l.map((c) => {
  var m;
  return (m = n.states) == null ? void 0 : m[c];
}).find((c) => {
  var m;
  return fr(c) && (((m = c.attributes) == null ? void 0 : m.supported_features) == null || Number(c.attributes.supported_features) & dh[o]);
});
function ur(n, l, o) {
  var v, w, A, y;
  const c = ((w = (v = n.config) == null ? void 0 : v.unit_system) == null ? void 0 : w.length) || "", m = (l == null ? void 0 : l.attributes) || {};
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
      return m.temperature_unit || ((y = (A = n.config) == null ? void 0 : A.unit_system) == null ? void 0 : y.temperature) || "";
  }
}
function zl(n, l, o, c) {
  try {
    if (typeof n.formatEntityAttributeValueToParts == "function") {
      const [m, ...v] = n.formatEntityAttributeValueToParts(l, o, c).map((w) => w.value);
      return { number: m, unit: v.join("").trim() };
    }
  } catch {
  }
  return { number: pa(c, n.locale), unit: ur(n, l, o) };
}
function Eh(n, l, o, c) {
  try {
    if (typeof n.formatEntityAttributeValue == "function") return n.formatEntityAttributeValue(l, o, c);
  } catch {
  }
  const m = zl(n, l, o, c);
  return (m.number + " " + m.unit).trim();
}
function pr(n, l) {
  var c;
  try {
    if (typeof n.formatEntityState == "function") return n.formatEntityState(l);
  } catch {
  }
  const o = (c = l.attributes) == null ? void 0 : c.unit_of_measurement;
  return th[l.state] || (o && Xt(l.state) ? pa(l.state, n.locale) + " " + o : l.state);
}
function Vs(n, l) {
  var o;
  try {
    if (typeof n.formatEntityName == "function") return n.formatEntityName(l, { type: "entity" });
  } catch {
  }
  return ((o = l.attributes) == null ? void 0 : o.friendly_name) || l.entity_id;
}
const Dh = (n) => n < 3 ? "low" : n < 6 ? "moderate" : n < 8 ? "high" : n < 11 ? "very_high" : "extreme", Sc = (n) => up.find(([, l]) => n <= l)[0];
function Bh(n, l) {
  if (l === "Beaufort") return Math.round(n);
  const o = l ? rh[l] : void 0;
  if (o === void 0) return;
  const c = sh.findIndex((m) => n * o < m);
  return c === -1 ? 12 : c;
}
const Cc = (n, l) => {
  const o = l ? lh[l] : void 0;
  return o === void 0 ? void 0 : n * o;
}, Tc = (n) => Object.keys(n.states || {}).find((l) => {
  var o, c;
  return l.startsWith("sensor.") && ((c = (o = n.entities) == null ? void 0 : o[l]) == null ? void 0 : c.platform) === "moon";
}), Md = (n) => Object.values(n.states || {}).filter((l) => {
  var o, c;
  return l.entity_id.startsWith("sensor.") && ((o = l.attributes) == null ? void 0 : o.device_class) === "precipitation" && ["total", "total_increasing"].includes(((c = l.attributes) == null ? void 0 : c.state_class) ?? "") && Xr(n, l.entity_id);
}).map((l) => l.entity_id).sort()[0];
function Rh(n) {
  var o;
  const l = {};
  for (const [c, m] of Object.entries(((o = n == null ? void 0 : n.core) == null ? void 0 : o.integration) ?? {})) {
    if (m && "integration_type" in m) {
      l[c] = m.categories;
      continue;
    }
    for (const [v, w] of Object.entries((m == null ? void 0 : m.integrations) ?? {})) l[v] = w == null ? void 0 : w.categories;
  }
  return l;
}
const Mp = (n, l, o) => {
  var m, v, w;
  const c = (v = (m = n.entities) == null ? void 0 : m[o]) == null ? void 0 : v.platform;
  return !!c && !!((w = l[c]) != null && w.includes(ih));
};
function Nh(n, l) {
  const o = /* @__PURE__ */ new Map();
  return Object.values(n.states || {}).filter((c) => {
    var m;
    return c.entity_id.startsWith("sensor.") && Gl.includes(((m = c.attributes) == null ? void 0 : m.device_class) ?? "") && Xr(n, c.entity_id) && Mp(n, l, c.entity_id);
  }).sort((c, m) => c.entity_id.localeCompare(m.entity_id)).forEach((c) => {
    o.has(c.attributes.device_class) || o.set(c.attributes.device_class, c.entity_id);
  }), Gl.map((c) => o.get(c)).filter(Boolean);
}
const Ph = (n, l) => Object.values(n.states || {}).filter((o) => {
  var c, m;
  return o.entity_id.startsWith("sensor.") && Xr(n, o.entity_id) && Mp(n, l, o.entity_id) && (((m = (c = n.entities) == null ? void 0 : c[o.entity_id]) == null ? void 0 : m.translation_key) ?? o.entity_id).toLowerCase().includes("pollen");
}).map((o) => o.entity_id).sort();
function Lc(n, l, o) {
  const c = Math.max(l - n, 1e-6), m = o[o.length - 1], v = o.find((B) => c / B <= 4) ?? m * Math.ceil(c / (4 * m)), w = Math.floor(n / v) * v;
  let A = Math.ceil(l / v) * v;
  A === w && (A = w + v);
  const y = [];
  for (let B = w; B <= A + v / 1e3; B += v) y.push(B);
  return { min: w, max: A, ticks: y };
}
const Gs = (n, l, o) => {
  const c = (w) => [1, 3, 5].map((A) => parseInt(w.slice(A, A + 2), 16)), m = c(n), v = c(l);
  return "rgb(" + m.map((w, A) => Math.round(w + (v[A] - w) * o)).join(", ") + ")";
}, Ih = (n, l, o, c) => {
  const m = o * Math.abs(1 - 2 * c), v = c < 0.5 ? 0 : 1;
  return "M " + n + " " + (l - o) + " A " + o + " " + o + " 0 0 0 " + n + " " + (l + o) + " A " + m + " " + o + " 0 0 " + v + " " + n + " " + (l - o) + " Z";
}, fn = ({ icon: n, name: l, sub: o, visual: c, double: m, backdrop: v, cls: w }) => '<div class="wbCard wbSquare' + (m ? " wbDouble" : "") + (v ? " wbHasBackdrop" : "") + (w ? " " + w : "") + '">' + (v ? '<div class="wbBackdrop" aria-hidden="true">' + v + "</div>" : "") + '<div class="wbHead"><div class="wbChip wbPlain">' + ch(n) + '</div><div class="wbText"><span class="wbName">' + je(l) + "</span>" + (o ? '<span class="wbSub">' + je(o) + "</span>" : "") + '</div></div><div class="wbVisual">' + c + "</div></div>", Ai = (n, l) => '<div class="wbValue"><span class="wbNum">' + je(n) + "</span>" + (l ? '<span class="wbUnitV">' + je(l) + "</span>" : "") + "</div>";
function Hh(n) {
  const l = n.max - n.min || 1, o = (A) => 100 - (Math.min(n.max, Math.max(n.min, A)) - n.min) / l * 100, c = (A) => A / Us * 100 + "%", m = (A) => A.map((y) => y.t + "," + o(y.v)).join(" "), v = n.kind === "line" ? n.points : [];
  let w = '<div class="wbDayChart"><div class="wbDcSun">' + n.sun.map((A) => '<span class="wbDcSunMark" style="left:' + c(A.t) + '">' + Kr(A.rise ? ga.sunsetUp : ga.sunsetDown) + je(A.label) + "</span>").join("") + "</div>";
  return w += '<div class="wbDcY">' + n.ticks.map((A) => '<span style="top:' + o(A) + '%">' + je(n.format(A)) + "</span>").join("") + "</div>", w += '<div class="wbDcPlot"><svg viewBox="0 0 ' + Us + ' 100" preserveAspectRatio="none">' + n.night.map(([A, y]) => '<rect class="wbDcNight" x="' + A + '" y="0" width="' + (y - A) + '" height="100"></rect>').join("") + n.ticks.map((A) => '<line class="wbDcGrid" x1="0" x2="' + Us + '" y1="' + o(A) + '" y2="' + o(A) + '" vector-effect="non-scaling-stroke"></line>').join("") + n.sun.map((A) => '<line class="wbDcSunLine" x1="' + A.t + '" x2="' + A.t + '" y1="0" y2="100" vector-effect="non-scaling-stroke"></line>').join("") + (n.past && n.past.length > 1 ? '<polyline class="wbDcPast" points="' + m(n.past) + '" vector-effect="non-scaling-stroke"></polyline>' : "") + (v.length > 1 ? '<polygon class="wbDcArea" points="' + v[0].t + ",100 " + m(v) + " " + v[v.length - 1].t + ',100"></polygon><polyline class="wbDcLine" points="' + m(v) + '" vector-effect="non-scaling-stroke"></polyline>' : "") + (n.now ? '<line class="wbDcNow" x1="' + n.now.t + '" x2="' + n.now.t + '" y1="0" y2="100" vector-effect="non-scaling-stroke"></line>' : "") + "</svg>" + (n.kind === "bars" ? n.points.filter((A) => A.v > 0).map((A) => '<i class="wbDcBar" style="left:' + c(A.t + 12) + ";width:" + c(36) + ";height:" + (100 - o(A.v)) + '%"></i>').join("") : "") + (n.now && n.kind === "line" ? '<i class="wbDcDot" style="left:' + c(n.now.t) + ";top:" + o(n.now.v) + '%"></i>' : "") + (n.peak ? '<span class="wbDcPeak" style="left:' + c(n.peak.t) + ";top:" + o(n.peak.v) + '%">' + je(n.peak.label) + "</span>" : "") + (n.note ? '<span class="wbDcNote">' + je(n.note) + "</span>" : "") + "</div>", w += '<div class="wbDcX">' + n.hours.map((A) => '<span class="' + (A.minor ? "wbMinor" : "") + '" style="left:' + c(A.t) + '">' + je(A.label) + "</span>").join("") + "</div></div>", w;
}
function Fh(n, l) {
  const w = n.map((G) => G.value), A = Math.min(...w), y = Math.max(...w), B = y - A || 1, ge = (G) => G / (n.length - 1) * 300, oe = (G) => 18 + (1 - (G - A) / B) * 84, U = n.map((G, W) => ge(W) + "," + oe(G.value)).join(" "), K = w.indexOf(y), ae = w.indexOf(A), Y = (G) => G === 0 ? "start" : G === n.length - 1 ? "end" : "middle";
  return '<svg class="wbChart" viewBox="0 0 300 120" aria-hidden="true"><polygon class="wbArea" points="0,102 ' + U + ' 300,102"></polygon><polyline class="wbLine" points="' + U + '" vector-effect="non-scaling-stroke"></polyline><text x="' + ge(K) + '" y="' + (oe(y) - 6) + '" text-anchor="' + Y(K) + '">' + je(l(y)) + '</text><text x="' + ge(ae) + '" y="' + (oe(A) + 14) + '" text-anchor="' + Y(ae) + '">' + je(l(A)) + '</text><text x="0" y="120" text-anchor="start">' + je(n[0].label) + '</text><text x="300" y="120" text-anchor="end">' + je(n[n.length - 1].label) + "</text></svg>";
}
function Oh(n, l) {
  const v = n.map((oe) => oe.value).concat([]), w = Math.min(...v) - 2, A = Math.max(...v) + 1, y = A - w || 1, B = 300 / n.length, ge = (oe) => (1 - (oe - w) / y) * 104;
  return '<svg class="wbChart" viewBox="0 0 300 120" aria-hidden="true">' + n.map((oe, U) => '<rect class="wbBar' + (oe.now ? " wbNowBar" : "") + '" x="' + (U * B + B * 0.2) + '" y="' + ge(oe.value) + '" width="' + B * 0.6 + '" height="' + (104 - ge(oe.value)) + '" rx="6"></rect><text x="' + (U * B + B / 2) + '" y="120" text-anchor="middle">' + je(oe.label) + "</text>").join("") + "</svg>";
}
const Wh = [
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
], qh = [[60, 92, 2.2], [72, 98, 1.6], [48, 100, 1.5], [85, 88, 1.8], [38, 92, 1.3], [66, 84, 1.2], [95, 80, 1.3], [25, 40, 1.4], [82, 30, 1.3], [55, 108, 1.2]], Ac = [[54.4, 95, 1.8], [44.5, 56.6, 1.5], [33.5, 56.6, 1.1], [23.7, 40.1, 1.1]], zh = [[30, 62], [48, 48], [72, 60], [96, 82], [86, 112], [30, 108], [16, 86]];
let jh = 0;
function _c(n, { getHass: l, entityId: o, style: c = "bitmap", motion: m = !0, cards: v, onOpen: w, hoursWindow: A } = {}) {
  var Jo, vn;
  const y = "wb" + ++jh + "-", B = document.createElement("div");
  B.className = "wb", B.dataset.style = c;
  const ge = document.createElement("div");
  ge.className = "wbBento", B.appendChild(ge), n.replaceChildren(B);
  const oe = ["aq_tile", "pollen_tile", "radar_tile"], U = ["current", "hourly", "sun", "moon", "wind", "uv_index", "compared_to_average", "humidity", "pressure", "precipitation", "visibility", "air_quality", ...oe].filter((x) => !v || v.includes(x)), K = { current: "wide", hourly: "wide", compared_to_average: "double" }, ae = {};
  U.forEach((x) => {
    const S = document.createElement("div");
    S.className = "wbItem", S.dataset.card = x, S.dataset.size = K[x] || "tile", S.hidden = !0, ge.appendChild(S), ae[x] = { el: S, html: null };
  });
  let Y = !1, G = null, W = 0, pe = -1, Q = !1, ue = null;
  const X = "homecore-next-view", N = { openDay: void 0, opener: void 0, dayMode: "temperature", hourlyMode: "temperature", hourlyView: (() => {
    try {
      return localStorage.getItem(X);
    } catch {
      return null;
    }
  })() === "bars" ? "bars" : "strip", aq: void 0 }, ie = { todayHistory: void 0, rain: void 0, temperatureHistory: void 0, pressureHistory: void 0, aqHistory: void 0, categories: void 0, lastFetch: 0 };
  let Ae = /* @__PURE__ */ new Date(), I = /* @__PURE__ */ new Date();
  const Ie = {}, V = {}, qe = {}, M = (x) => {
    var S;
    return ((S = qe[x]) == null ? void 0 : S.forecast) ?? [];
  }, _ = (x, S) => {
    var L;
    return qe[S] ? (L = x.states) == null ? void 0 : L[qe[S].entityId] : void 0;
  };
  function C(x) {
    const S = V[x];
    S && (S.unsub.then((L) => {
      typeof L == "function" && L();
    }).catch(() => {
    }), delete V[x]), qe[x] && delete qe[x];
  }
  function P(x, S, L) {
    var Z;
    if (typeof ((Z = x.connection) == null ? void 0 : Z.subscribeMessage) != "function") return;
    const F = { entityId: L };
    try {
      F.unsub = Promise.resolve(x.connection.subscribeMessage((J) => {
        Y || V[S] !== F || (J != null && J.forecast ? qe[S] = { entityId: L, forecast: J.forecast } : delete qe[S], qa());
      }, { type: "weather/subscribe_forecast", forecast_type: S, entity_id: L }));
    } catch (J) {
      F.unsub = Promise.reject(J);
    }
    F.unsub.catch(() => {
      V[S] === F && delete V[S];
    }), V[S] = F;
  }
  function fe(x, S) {
    var L;
    for (const F of ["daily", "hourly"]) {
      const Z = _h(x, S, F);
      ((L = V[F]) == null ? void 0 : L.entityId) !== (Z == null ? void 0 : Z.entity_id) && (C(F), Z && P(x, F, Z.entity_id));
    }
  }
  const q = (x, S, L, F = !1) => x.callWS({
    type: "history/history_during_period",
    start_time: L.toISOString(),
    end_time: (/* @__PURE__ */ new Date()).toISOString(),
    entity_ids: [S],
    minimal_response: F,
    no_attributes: F,
    significant_changes_only: !1
  });
  async function se(x, S) {
    var de, we, ve;
    const L = hn(x, S, "pressure");
    if (!L) return;
    const F = L.stateObj.entity_id, Z = await q(x, F, new Date(Date.now() - 3 * qt)), J = (ve = (we = (de = Z == null ? void 0 : Z[F]) == null ? void 0 : de.find((He) => {
      var Ce;
      return typeof ((Ce = He.a) == null ? void 0 : Ce.pressure) == "number";
    })) == null ? void 0 : we.a) == null ? void 0 : ve.pressure;
    ie.pressureHistory = typeof J == "number" ? { entityId: F, value: J } : void 0;
  }
  async function me(x, S) {
    var we;
    const L = hn(x, S, "temperature");
    if (!L) return;
    const F = L.stateObj.entity_id, Z = $r(/* @__PURE__ */ new Date()), J = await q(x, F, new Date(Z.getTime() - $u * wo)), de = /* @__PURE__ */ new Map();
    for (const ve of (J == null ? void 0 : J[F]) ?? []) {
      const He = (we = ve.a) == null ? void 0 : we.temperature, Ce = new Date((ve.lc ?? ve.lu) * 1e3);
      if (typeof He != "number" || Ce >= Z) continue;
      const De = Ce.toDateString();
      de.set(De, Math.max(de.get(De) ?? -1 / 0, He));
    }
    ie.temperatureHistory = { entityId: F, dailyHighs: [...de.values()], days: [...de.entries()].map(([ve, He]) => ({ date: new Date(ve), high: He })) };
  }
  async function ye(x) {
    const S = Md(x);
    if (!S) return;
    const L = await x.callWS({ type: "recorder/statistic_during_period", statistic_id: S, rolling_window: { duration: { hours: 24 } } });
    ie.rain = { entityId: S, change: (L == null ? void 0 : L.change) ?? void 0 };
  }
  function $e() {
    const x = l == null ? void 0 : l();
    if (!x || Y || typeof x.callWS != "function") return;
    const S = Ha(x);
    ie.lastFetch = Date.now(), [se(x, S), me(x, S), ye(x)].forEach((L) => L.then(() => qa(), () => {
    }));
  }
  async function st() {
    const x = l == null ? void 0 : l();
    if (!x) return;
    const S = hn(x, Ha(x), "temperature");
    if (!S) return;
    const L = S.stateObj.entity_id, F = $r(/* @__PURE__ */ new Date());
    try {
      const Z = await q(x, L, F), J = (de) => ((Z == null ? void 0 : Z[L]) ?? []).map((we) => {
        var ve;
        return { time: we.lu * 1e3, value: (ve = we.a) == null ? void 0 : ve[de] };
      }).filter((we) => typeof we.value == "number");
      ie.todayHistory = { day: F.toDateString(), fetched: Date.now(), temperature: J("temperature"), humidity: J("humidity") }, qa();
    } catch {
    }
  }
  async function _t(x) {
    const S = l == null ? void 0 : l();
    if (S)
      try {
        const L = await q(S, x, new Date(Date.now() - 24 * qt), !0), F = ((L == null ? void 0 : L[x]) ?? []).filter((J) => Xt(J.s)), Z = Math.max(1, Math.ceil(F.length / 48));
        ie.aqHistory = { entityId: x, points: F.filter((J, de) => de % Z === 0).map((J) => ({ label: zo(new Date(J.lu * 1e3), S), value: Number(J.s) })) }, qa();
      } catch {
      }
  }
  function ya(x) {
    ie.categories === void 0 && (ie.categories = null, Promise.resolve().then(() => x.callWS({ type: "integration/descriptions" })).then((S) => {
      ie.categories = Rh(S);
    }, () => {
      ie.categories = {};
    }).then(() => qa()));
  }
  function Ha(x) {
    var L;
    const S = Object.keys(x.states || {}).filter((F) => F.startsWith("weather.") && Xr(x, F)).sort();
    return o && ((L = x.states) != null && L[o]) ? [o, ...S.filter((F) => F !== o)] : S;
  }
  const mt = (x) => ie.categories ? { air: Nh(x, ie.categories), pollen: Ph(x, ie.categories) } : { air: [], pollen: [] };
  function Xe(x, S, L, F) {
    if (c === "line") return '<span class="wbWx wbS' + S + ' wbLineIcon" aria-hidden="true">' + xd(x, L || x === "clear-night") + "</span>";
    if (c === "smooth") {
      const Z = Eu(x, S === 90, L, y + "g-" + F);
      return '<span class="wbWx wbS' + S + " wb" + Z.k[0].toUpperCase() + Z.k.slice(1) + (Z.night ? " wbNight" : "") + '" aria-hidden="true">' + Z.svg + "</span>";
    }
    return '<span class="wbWx wbS' + S + '" aria-hidden="true"><canvas data-wb-wx="' + je(Zl(x, L)) + '" data-size="' + S + '"></canvas></span>';
  }
  const At = () => M("daily").filter((x) => x.templow != null).slice(0, zu);
  function Je(x, S) {
    const L = new Date(S.datetime), F = /* @__PURE__ */ new Date();
    return Yr(L, F) ? Ye.today : Yr(L, new Date(F.getTime() + wo)) ? Ye.tomorrow : kc(L, x);
  }
  const va = (x, S, L) => L === 0 ? Je(x, S) : kc(new Date(S.datetime), x);
  function _a(x, S) {
    var Ce, De, Be, Fe;
    const L = Ah(x, S);
    if (!L) return "";
    const F = At(), Z = N.openDay !== void 0 ? F[N.openDay] : void 0, J = hn(x, S, "temperature"), de = F[0], we = de && Yr(new Date(de.datetime), /* @__PURE__ */ new Date()), ve = ((De = (Ce = x.config) == null ? void 0 : Ce.unit_system) == null ? void 0 : De.temperature) || ((Be = L.attributes) == null ? void 0 : Be.temperature_unit) || "";
    let He = '<div class="wbCard wbWeather' + (Z ? " wbIsOpen" : "") + '"><div class="wbClosed"' + (Z ? " inert" : "") + '><div class="wbNow">' + (w ? '<button class="wbCurrent wbOpenPage" data-wb="open-page" data-wb-focus="open-page" aria-label="' + je(Ye.openPage) + '">' : '<div class="wbCurrent">') + Xe(L.state, 90, Lh(x), "now") + '<div class="wbTempBlock">' + (J && Xt(J.value) ? '<div class="wbTemp"><span class="wbDeg">' + je(pa(Math.round(Number(J.value)), x.locale)) + '</span><span class="wbUnit">' + je(ve) + "</span></div>" : "") + '<div class="wbPlace">' + je(((Fe = x.config) == null ? void 0 : Fe.location_name) ?? "") + "</div></div>" + (w ? "</button>" : "</div>") + '<div class="wbCondition"><div class="wbCondName">' + je(pr(x, L)) + "</div>" + (we && de.templow != null ? '<div class="wbRange">' + je(Ia(Ye.range, { high: ca(x, de.temperature), low: ca(x, de.templow) })) + "</div>" : "") + "</div></div>";
    return He += xt(x), F.length && (He += '<div class="wbColumns" role="list">' + F.map((Te, Ve) => '<button class="wbColumn" role="listitem" data-wb="day" data-index="' + Ve + '" data-wb-focus="col-' + Ve + '"><span class="wbDay">' + je(va(x, Te, Ve)) + "</span>" + Xe(Te.condition ?? "cloudy", 60, !1, "col" + Ve) + '<span class="wbTemps"><span class="wbHi">' + je(ca(x, Te.temperature)) + '</span><span class="wbLo">' + je(ca(x, Te.templow)) + "</span></span></button>").join("") + "</div>", He += '<div class="wbHalves" role="list">' + F.map((Te, Ve) => '<button class="wbTile" role="listitem" data-wb="day" data-index="' + Ve + '" data-wb-focus="half-' + Ve + '">' + Xe(Te.condition ?? "cloudy", 40, !1, "half" + Ve) + '<span class="wbText"><span class="wbName">' + je(Je(x, Te)) + '</span><span class="wbSub">' + je(Ia(Ye.highLow, { high: ca(x, Te.temperature), low: ca(x, Te.templow) })) + "</span></span></button>").join("") + "</div>"), He + "</div>" + (Z ? Bi(x, S, Z) : "") + "</div>";
  }
  const mr = {
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
  function Ke(x) {
    const S = Date.now(), L = M("hourly").filter((De) => new Date(De.datetime).getTime() > S - qt).slice(0, 13);
    if (L.length < 2) return "";
    const F = (De) => zo(new Date(De.datetime), x), Z = (De) => mr[De.condition] || "", J = (De) => lt[De.condition] || De.condition;
    let de = Z(L[0]);
    if (!de) return "";
    let we = L[0], ve = 0;
    for (const De of L.slice(1))
      ve === 2 || J(De) === J(we) || !Z(De) || (de += (ve ? " and " : ", ") + Z(De) + " from " + F(De), we = De, ve++);
    const He = Number(L[0].temperature), Ce = L.filter((De) => Xt(De.temperature));
    if (Xt(He) && Ce.length) {
      const De = Ce.reduce((Fe, Te) => Number(Te.temperature) < Number(Fe.temperature) ? Te : Fe), Be = Ce.reduce((Fe, Te) => Number(Te.temperature) > Number(Fe.temperature) ? Te : Fe);
      He - Number(De.temperature) >= 3 ? de += ", down to " + ca(x, De.temperature) + " by " + F(De) : Number(Be.temperature) - He >= 3 && (de += ", up to " + ca(x, Be.temperature) + " by " + F(Be));
    }
    return de[0].toUpperCase() + de.slice(1) + ".";
  }
  const xt = (x) => {
    const S = Ke(x);
    return S ? '<div class="wbSummary"><p class="wbSummaryText">' + je(S) + "</p></div>" : "";
  };
  function yo(x) {
    const S = x.getTime(), L = Date.now() - qt;
    return M("hourly").filter((F) => {
      const Z = new Date(F.datetime).getTime();
      return Z >= S && Z < S + wo && Z > L;
    });
  }
  function gr(x) {
    if (!x.length) return ["temperature"];
    const S = ["temperature"];
    return x.some((L) => L.precipitation != null || L.precipitation_probability != null) && S.push("precipitation"), x.some((L) => L.humidity != null) && S.push("humidity"), S;
  }
  function Bi(x, S, L) {
    const F = $r(new Date(L.datetime)), Z = yo(F), J = gr(Z), de = J.includes(N.dayMode) ? N.dayMode : "temperature", we = (ve) => ve === "humidity" ? Ye.humidity : Ye.modes[ve];
    return '<div class="wbOpen" data-wb-open="day"><div class="wbOpenHead">' + Xe(L.condition ?? "cloudy", 40, !1, "open") + '<div class="wbText"><span class="wbName">' + je(Je(x, L)) + '</span><span class="wbSub">' + je(Ia(Ye.highLow, { high: ca(x, L.temperature), low: ca(x, L.templow) })) + '</span></div><button class="wbBack" title="' + je(Ye.back) + '" data-wb="close-day" data-wb-focus="back-day">' + Kr(ga.back) + "</button></div>" + (J.length > 1 ? '<div class="wbDayTabs"><div class="wbSegments" role="group">' + J.map((ve) => '<button aria-pressed="' + (ve === de) + '" data-wb="day-mode" data-mode="' + ve + '" data-wb-focus="day-mode-' + ve + '">' + je(we(ve)) + "</button>").join("") + "</div></div>" : "") + '<div class="wbGraph">' + Hh(ka(x, S, F, Z, de)) + "</div></div>";
  }
  function ka(x, S, L, F, Z) {
    var br;
    const J = L.getTime(), de = Date.now(), we = Yr(L, /* @__PURE__ */ new Date()), ve = (ht) => (ht - J) / eo, He = (ht) => zo(new Date(ht), x), Ce = (ht) => new Date(ht.datetime).getTime(), De = [0, 3, 6, 9, 12, 15, 18, 21].map((ht) => ({ t: ht * 60, label: He(J + ht * qt), minor: ht % 6 !== 0 })), { rise: Be, set: Fe } = kd(x, L), Te = [], Ve = [];
    Be && (Te.push({ t: ve(Be.getTime()), label: He(Be.getTime()), rise: !0 }), Ve.push([0, ve(Be.getTime())])), Fe && (Te.push({ t: ve(Fe.getTime()), label: He(Fe.getTime()), rise: !1 }), Ve.push([ve(Fe.getTime()), Us]));
    const tt = Yl(x);
    !Be && !Fe && tt && Ud(new Date(J + wo / 2), tt.lat, tt.lon) < 0 && Ve.push([0, Us]);
    const Re = we ? ve(de) : void 0, et = { hours: De, sun: Te, night: Ve };
    if (!F.length && !we) return { ...et, kind: "line", points: [], min: 0, max: 1, ticks: [], format: String, note: Ye.noHourly };
    if (Z === "precipitation") {
      const ht = F.some((ba) => ba.precipitation_probability != null), sa = F.map((ba) => ({ t: ve(Ce(ba)), v: Number((ht ? ba.precipitation_probability : ba.precipitation) ?? 0) })), Ya = ur(x, _(x, "hourly"), "precipitation"), zn = Math.max(0, ...sa.map((ba) => ba.v)), Tn = ht ? 100 : Lc(0, Math.max(zn, 1), [0.5, 1, 2, 5, 10]).max, Wi = (ba) => ht ? pa(ba, x.locale) + "%" : pa(ba, x.locale, { maximumFractionDigits: 1 }) + " " + Ya, Qo = sa.find((ba) => ba.v === zn);
      return {
        ...et,
        kind: "bars",
        points: sa,
        min: 0,
        max: Tn,
        ticks: [0, Tn / 2, Tn],
        format: Wi,
        now: Re !== void 0 ? { t: Re, v: 0 } : void 0,
        peak: Qo && zn > 0 ? { t: Qo.t + 30, v: Qo.v, label: Wi(Qo.v) } : void 0,
        note: zn > 0 ? void 0 : Ye.noRain
      };
    }
    const at = Z === "humidity" ? "humidity" : "temperature", Zt = F.filter((ht) => ht[at] != null && (!we || Ce(ht) >= de)).map((ht) => ({ t: ve(Ce(ht)), v: Number(ht[at]) }));
    let Pe, Nt = [];
    if (Re !== void 0) {
      const ht = hn(x, S, at);
      ht && Xt(ht.value) && (Pe = { t: Re, v: Number(ht.value) }, Zt.unshift(Pe)), Nt = (((br = ie.todayHistory) == null ? void 0 : br.day) === L.toDateString() ? ie.todayHistory[at] : []).filter((Ya) => Ya.time <= de).map((Ya) => ({ t: Math.max(0, ve(Ya.time)), v: Ya.value })), Pe && Nt.length && Nt.push(Pe);
    }
    const Vt = [...Nt, ...Zt];
    if (!Vt.length) return { ...et, kind: "line", points: [], min: 0, max: 1, ticks: [], format: String, note: Ye.noHourly };
    const dn = Vt.map((ht) => ht.v), bn = Lc(Math.min(...dn), Math.max(...dn), at === "humidity" ? [5, 10, 20, 25] : [1, 2, 5, 10]);
    at === "humidity" && (bn.min = Math.max(0, bn.min), bn.max = Math.min(100, bn.max), bn.ticks = bn.ticks.filter((ht) => ht >= 0 && ht <= 100));
    const Oi = at === "humidity" ? (ht) => pa(ht, x.locale) + "%" : (ht) => ca(x, ht), wn = at === "temperature" ? Vt.reduce((ht, sa) => sa.v > ht.v ? sa : ht) : void 0;
    return { ...et, kind: "line", points: Zt, past: Nt, ...bn, format: Oi, now: Pe, peak: wn ? { ...wn, label: Oi(wn.v) } : void 0 };
  }
  function ut(x) {
    const S = ["temperature"];
    return x.some((L) => L.precipitation_probability != null || L.precipitation != null) && S.push("precipitation"), x.some((L) => L.wind_speed != null) && S.push("wind"), S;
  }
  function zt(x, S, L = hc) {
    var J, de;
    const F = M("daily"), Z = [];
    for (let we = 0; we < L; we++) for (const ve of [!1, !0]) {
      const He = x.getTime() + (we * 24 + (ve ? 12 : 0)) * qt, Ce = He + 12 * qt, De = {};
      S.forEach((Fe) => {
        const Te = new Date(Fe.datetime).getTime();
        Fe.condition && Te >= He && Te < Ce && (De[Fe.condition] = (De[Fe.condition] ?? 0) + (Zu.has(Fe.condition) ? 2 : 1));
      });
      let Be = (J = Object.entries(De).sort((Fe, Te) => Te[1] - Fe[1])[0]) == null ? void 0 : J[0];
      if (!Be) {
        const Fe = new Date(He).toDateString();
        Be = ((de = F.find((Te) => new Date(Te.datetime).toDateString() === Fe)) == null ? void 0 : de.condition) ?? "cloudy";
      }
      Z.push({ cond: ve && Be === "sunny" ? "clear-night" : Be, night: ve });
    }
    return Z;
  }
  function vr(x, S, L) {
    const F = _(x, "hourly"), Z = S.precipitation_probability != null ? pa(S.precipitation_probability, x.locale) + "%" : "", J = S.precipitation ? pa(S.precipitation, x.locale) + " " + ur(x, F, "precipitation") : "";
    switch (L) {
      case "precipitation":
        return Z ? [Z, J] : [J || "–", ""];
      case "wind":
        return S.wind_speed != null ? [pa(Math.round(S.wind_speed), x.locale), ur(x, F, "wind_speed")] : ["–", ""];
      default:
        return [ca(x, S.temperature), (S.precipitation_probability ?? 0) >= 20 ? Z : ""];
    }
  }
  function Yo(x, S, L) {
    const [F, Z] = fc[A == null ? void 0 : A()] || fc.day, J = [];
    for (let de = 0; de < 4 && J.length < 3; de++) {
      const we = /* @__PURE__ */ new Date();
      we.setHours(0, 0, 0, 0), we.setDate(we.getDate() + de);
      const ve = new Date(we);
      ve.setHours(Z, 0, 0, 0), we.setHours(F, 0, 0, 0), !(ve.getTime() <= L || !S.some((He) => {
        const Ce = new Date(He.datetime).getTime();
        return Ce >= we.getTime() && Ce <= ve.getTime();
      })) && J.push({ a: we.getTime(), b: ve.getTime(), label: Je(x, { datetime: we.toISOString() }) });
    }
    return J;
  }
  function kt(x, S, L, F, Z, J) {
    const de = (L.b - S.a) / qt, we = (Re) => ((Re - S.a) / qt).toFixed(3), ve = 80, He = 32, Ce = [];
    for (const Re = new Date(S.a - wo); Re.getTime() < L.b + wo; Re.setDate(Re.getDate() + 1)) {
      const { rise: et, set: at } = kd(x, new Date(Re));
      et && at && Ce.push({ rise: et.getTime(), set: at.getTime() });
    }
    const De = (Re, et) => ve - (ve - He) * Math.sin(Math.PI * (et - Re.rise) / (Re.set - Re.rise)), Be = (Re) => !Ce.some((et) => Re >= et.rise && Re <= et.set);
    let Fe = "", Te = "", Ve = "";
    Ce.forEach((Re, et) => {
      const at = [];
      for (let Pe = Re.rise; Pe <= Re.set; Pe += 15 * eo) at.push(we(Pe) + "," + De(Re, Pe).toFixed(2));
      at.push(we(Re.set) + "," + ve), Fe += '<polyline class="wbLineArc" points="' + at.join(" ") + '"/>';
      const Zt = Ce[et + 1];
      Zt && (Fe += '<rect class="wbLineNight" x="' + we(Re.set) + '" y="0" width="' + ((Zt.rise - Re.set) / qt).toFixed(3) + '" height="100"/>'), [[Re.rise, "↑"], [Re.set, "↓"]].forEach(([Pe, Nt]) => {
        Pe < S.a || Pe > L.b || (Te += '<line class="wbLineEdge" x1="' + we(Pe) + '" x2="' + we(Pe) + '" y1="0" y2="100"/>', Ve += '<span class="wbLineTime" style="left:' + J(Pe) + '">' + Nt + " " + je(zo(new Date(Pe), x)) + "</span>");
      });
    });
    const tt = Ce.find((Re) => Z >= Re.rise && Z <= Re.set);
    return '<svg class="wbLineArt" viewBox="0 0 ' + de + ' 100" preserveAspectRatio="none" aria-hidden="true">' + Fe + Te + '<line class="wbLineHorizon" x1="0" x2="' + de + '" y1="' + ve + '" y2="' + ve + '"/></svg>' + Ve + (tt ? '<span class="wbLineNow" style="left:' + J(Z) + ";top:" + De(tt, Z) + '%">' + xd("sunny", !1) + "</span>" : "") + F.filter((Re) => Re.entry && !Re.now).map((Re) => '<span class="wbLineGlyph' + Re.edge + '" style="left:' + J(Re.t) + '">' + xd(Re.entry.condition ?? "cloudy", Be(Re.t)) + "</span>").join("");
  }
  function ke(x, S) {
    delete Ie.hourly;
    const L = N.hourlyView === "bars" ? "bars" : "strip", F = '<div class="wbHeader"><h2 class="wbTitle">' + je(L === "bars" ? Ye.nextDays : Ye.nextHours) + '</h2><div class="wbSegments wbViews" role="group" aria-label="' + je(Ye.showAs) + '">' + ["strip", "bars"].map((Pe) => '<button aria-pressed="' + (Pe === L) + '" data-wb="hourly-view" data-view="' + Pe + '" data-wb-focus="hourly-view-' + Pe + '">' + je(Ye.views[Pe]) + "</button>").join("") + "</div></div>";
    if (L === "bars") return Oe(x, S, F);
    const Z = M("hourly"), J = Math.floor(Date.now() / eo) * eo, de = Z.filter((Pe) => new Date(Pe.datetime).getTime() > J - qt);
    if (!de.length) return "";
    const we = ut(de), ve = we.includes(N.hourlyMode) ? N.hourlyMode : "temperature", He = Yo(x, Z, J);
    if (!He.length) return "";
    const Ce = He[0], De = He[He.length - 1], Be = (Ce.b - Ce.a) / qt, Fe = (Pe) => "calc(var(--wb-u) * " + ((Pe - Ce.a) / qt).toFixed(3) + ")", Te = new Date(Ce.a);
    Te.setHours(6, 0, 0, 0), Te.getTime() > Ce.a && Te.setDate(Te.getDate() - 1);
    const Ve = Math.ceil((De.b - Te.getTime()) / wo);
    c !== "line" && (Ie.hourly = { segs: zt(Te, Z, Ve), seed: Te.getDate(), columns: Ve });
    const tt = (Pe) => Pe === Ce.a ? " wbFirst" : Pe === De.b ? " wbLast" : "", Re = [];
    for (let Pe = Ce.a; Pe < De.b; ) {
      const Nt = new Date(Pe);
      Nt.setHours(24, 0, 0, 0);
      const Vt = Math.min(Nt.getTime(), De.b);
      Re.push({ a: Pe, b: Vt, label: Je(x, { datetime: new Date(Pe).toISOString() }), page: He.find((dn) => dn.a >= Pe && dn.a < Vt) || He.find((dn) => dn.a < Vt && dn.b > Pe) }), Pe = Vt;
    }
    const et = J > Ce.a && J < De.b ? Math.floor((J - Ce.a) / (2 * qt)) * 2 : 0, at = [];
    for (let Pe = Ce.a; Pe <= De.b; Pe += qt) {
      const Nt = new Date(Pe), Vt = tt(Pe);
      !Vt && Nt.getHours() % Vu || !Vt && (Math.abs(Ce.a - Pe) < 2 * qt || Math.abs(De.b - Pe) < 2 * qt) || J >= Ce.a && Math.abs(Pe - J) < 1.5 * qt && !Vt || at.push({ t: Pe, edge: Vt, label: zo(Nt, x), entry: Pe >= J - qt ? Z.find((dn) => new Date(dn.datetime).getTime() === Pe) : void 0 });
    }
    J > Ce.a && J < Ce.b && at.push({ t: J, edge: J - Ce.a < qt ? " wbFirst" : Ce.b - J < qt ? " wbLast" : "", label: Ye.now, entry: de[0], now: !0 });
    const Zt = (Pe, Nt) => '<span class="wbMark' + Pe.edge + (Pe.now ? " wbNowMark" : "") + '" style="left:' + Fe(Pe.t) + '">' + Nt + "</span>";
    return '<div class="wbCard wbHc wbHourly">' + F + (we.length > 1 ? '<div class="wbTabs"><div class="wbSegments" role="group">' + we.map((Pe) => '<button aria-pressed="' + (Pe === ve) + '" data-wb="hourly-mode" data-mode="' + Pe + '" data-wb-focus="hourly-mode-' + Pe + '">' + je(Ye.modes[Pe]) + "</button>").join("") + "</div></div>" : "") + '<div class="wbStripScroll wbPaged" tabindex="0" aria-label="' + je(Ye.nextHours) + '" data-span="' + Be + '" data-start="' + et + '"><div class="wbStrip" style="--wb-u:calc(100cqw / ' + Be + ");width:calc(var(--wb-u) * " + (De.b - Ce.a) / qt + ')">' + // a stop every two hours (Matt, 1 Nov): a swipe settles on one, a flick runs on past several
    [...Array(Math.floor((De.b - Ce.a) / (2 * qt)) + 1)].map((Pe, Nt) => '<i class="wbSnap" style="left:' + Fe(Ce.a + Nt * 2 * qt) + '"></i>').join("") + '<div class="wbDays">' + Re.map((Pe, Nt) => {
      var Vt;
      return '<span class="wbDaySpan" style="width:calc(var(--wb-u) * ' + ((Pe.b - Pe.a) / qt).toFixed(3) + ')"><button class="wbDayName" data-wb="hours-day" data-hours="' + (Nt === 0 ? et : ((((Vt = Pe.page) == null ? void 0 : Vt.a) ?? Pe.a) - Ce.a) / qt) + '" data-wb-focus="hours-day-' + Nt + '">' + je(Pe.label) + "</button></span>";
    }).join("") + '</div><div class="wbRow wbTimes">' + at.map((Pe) => Zt(Pe, je(Pe.label))).join("") + "</div>" + (c === "line" ? '<div class="wbSky wbLineSky">' + kt(x, Ce, De, at, J, Fe) : '<div class="wbSky"><div class="wbSkyArt" style="left:' + Fe(Te.getTime()) + ";width:calc(var(--wb-u) * " + Ve * 24 + ')"><canvas data-wb-strip="hourly"' + (c === "smooth" ? "" : ' class="wbPixels"') + "></canvas></div>") + (J > Ce.a ? '<i class="wbPast" style="width:' + Fe(Math.min(J, De.b)) + '"></i><i class="wbNowLine" style="left:' + Fe(J) + '"></i>' : "") + Re.slice(1).map((Pe) => '<i class="wbMidnight" style="left:' + Fe(Pe.a) + '"></i>').join("") + '</div><div class="wbRow wbValues">' + at.map((Pe) => {
      if (!Pe.entry) return "";
      const [Nt, Vt] = vr(x, Pe.entry, ve);
      return Zt(Pe, '<span class="wbPrimaryV">' + je(Nt) + '</span><span class="wbSecondary">' + je(Vt) + "</span>");
    }).join("") + "</div></div></div></div>";
  }
  function jt(x) {
    const S = Gu, L = S.findIndex(([ve]) => ve >= x);
    if (L <= 0) return "rgb(" + S[L < 0 ? S.length - 1 : 0][1].join(",") + ")";
    const [F, Z] = S[L - 1], [J, de] = S[L], we = (x - F) / (J - F);
    return "rgb(" + Z.map((ve, He) => Math.round(ve + (de[He] - ve) * we)).join(",") + ")";
  }
  function Oe(x, S, L) {
    var Fe;
    const F = M("daily").filter((Te) => Xt(Te.templow) && Xt(Te.temperature)).slice(0, 7);
    if (!F.length) return "";
    const Z = Math.min(...F.map((Te) => Number(Te.templow))), J = Math.max(...F.map((Te) => Number(Te.temperature))), de = Math.max(1, J - Z), we = (Te) => Math.max(0, Math.min(100, (Te - Z) / de * 100)).toFixed(2), ve = /F/.test(ur(x, _(x, "daily"), "temperature")), He = (Te) => ve ? (Te - 32) / 1.8 : Te, Ce = "linear-gradient(90deg," + [0, 0.25, 0.5, 0.75, 1].map((Te) => jt(He(Z + Te * de)) + " " + Te * 100 + "%").join(",") + ")", De = (Fe = hn(x, S, "temperature")) == null ? void 0 : Fe.value;
    return '<div class="wbCard wbHc wbHourly wbBars' + (ut(M("hourly").filter((Te) => new Date(Te.datetime).getTime() > Date.now() - qt)).length > 1 ? " wbTabbed" : "") + '">' + L + '<div class="wbDayBars" role="list">' + F.map((Te, Ve) => {
      const tt = Je(x, Te), Re = Yr(new Date(Te.datetime), /* @__PURE__ */ new Date()), et = Number(Te.templow), at = Number(Te.temperature);
      return '<div class="wbDayBar" role="listitem" aria-label="' + je(Ia(Ye.rangeRow, { day: tt, low: ca(x, et), high: ca(x, at) })) + '"><span class="wbRangeDay">' + je(tt) + "</span>" + Xe(Te.condition, 40, !1, "r" + Ve) + '<span class="wbRangeLo">' + je(ca(x, et)) + '</span><span class="wbRangeTrack"><i class="wbRangeFill" style="background:' + Ce + ";clip-path:inset(0 " + (100 - we(at)) + "% 0 " + we(et) + '% round 4px)"></i>' + (Re && Xt(De) ? '<i class="wbRangeNow" style="left:' + we(Number(De)) + '%"></i>' : "") + '</span><span class="wbRangeHi">' + je(ca(x, at)) + "</span></div>";
    }).join("") + "</div></div>";
  }
  function Fa(x) {
    const S = Ae, { rise: L, set: F } = kd(x, S), Z = L && F ? Math.round((F.getTime() - L.getTime()) / eo) : 0, J = Math.floor(Z / 60), de = Z % 60, we = L && F ? (S.getTime() - L.getTime()) / (F.getTime() - L.getTime()) : -1, ve = we >= 0 && we <= 1, He = Math.PI * (1 - Math.min(1, Math.max(0, we))), Ce = 100 + 74 * Math.cos(He), De = 100 - 74 * Math.sin(He), Be = ve ? Math.sin(Math.PI * we) : 0, Fe = ve ? Gs("#2e0a0d", "#43180a", Be) : "#0e0507", Te = ve ? Gs("#7a1d12", "#8f400f", Be) : "#1c0709", Ve = Gs("#f60c08", "#ff8f00", Be), tt = Gs("#fd9b07", "#ffd84a", Be), Re = ve ? Gs("#fd9b07", "#ffd84a", Be) : "#6b3a2a", et = (Zt) => Zt ? zo(Zt, x) : "–", at = L && F ? new Date((L.getTime() + F.getTime()) / 2) : null;
    return fn({
      icon: ga.sunny,
      name: Ye.sun,
      sub: Z ? Ia(Ye.daylightShort, { hours: J, minutes: de }) : void 0,
      visual: '<div class="wbSunSky" style="background:linear-gradient(180deg, ' + Fe + ", " + Te + ");--wb-sun-line:" + Re + '"><svg viewBox="0 0 200 124" aria-hidden="true"><defs><radialGradient id="' + y + 'sun-glow"><stop offset="0" stop-color="' + Ve + '"></stop><stop offset="0.45" stop-color="' + Ve + '"></stop><stop offset="1" stop-color="' + tt + '"></stop></radialGradient><clipPath id="' + y + 'above-horizon"><rect x="0" y="0" width="200" height="100"></rect></clipPath></defs><path class="wbSunPath" d="M 26 100 A 74 74 0 0 1 174 100"></path><line class="wbHorizon" x1="0" x2="200" y1="100" y2="100"></line>' + (ve ? '<circle cx="' + Ce + '" cy="' + De + '" r="14" fill="url(#' + y + 'sun-glow)" clip-path="url(#' + y + 'above-horizon)"></circle>' : "") + (at ? '<text class="wbSunTime wbNoon" x="100" y="1">' + je(et(at)) + "</text>" : "") + '<text class="wbSunTime" x="26" y="117">' + je(et(L)) + '</text><text class="wbSunTime" x="174" y="117">' + je(et(F)) + "</text></svg></div>"
    });
  }
  function In(x, S, L) {
    const F = (de) => y + "moon-" + de, Z = x > 0.995 ? "" : '<path class="wbMoonNight" filter="url(#' + F("terminator") + ')" d="' + Ih(61, 61, 57.9, x) + '"' + (S ? ' transform="translate(122 0) scale(-1 1)"' : "") + "></path>", J = (de, we, ve, He, Ce, De) => '<filter id="' + F(de) + '" x="0" y="0" width="100%" height="100%"><feTurbulence type="fractalNoise" baseFrequency="' + we + '" numOctaves="' + ve + '" seed="' + He + '"></feTurbulence><feColorMatrix values="0.33 0.33 0.33 0 0 0.33 0.33 0.33 0 0 0.33 0.33 0.33 0 0 0 0 0 0 1"></feColorMatrix><feComponentTransfer>' + ["R", "G", "B"].map((Be) => "<feFunc" + Be + ' type="linear" slope="' + Ce + '" intercept="' + De + '"></feFunc' + Be + ">").join("") + "</feComponentTransfer></filter>";
    return '<svg class="wbMoonArt" width="122" height="122" viewBox="0 0 122 122" aria-hidden="true"><defs><radialGradient id="' + F("fill") + '" cx="0.42" cy="0.38" r="0.68"><stop offset="0" stop-color="#ECECE8"></stop><stop offset="0.7" stop-color="#D2D2CD"></stop><stop offset="1" stop-color="#ACACA7"></stop></radialGradient><clipPath id="' + F("clip") + '"><circle cx="61" cy="61" r="54.9"></circle></clipPath><filter id="' + F("soften") + '" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="2.6"></feGaussianBlur></filter><filter id="' + F("glow") + '" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="1.2"></feGaussianBlur></filter><filter id="' + F("terminator") + '" x="-10%" y="-10%" width="120%" height="120%"><feGaussianBlur stdDeviation="1"></feGaussianBlur></filter>' + J("mottle", "0.045", 4, 3, 1.8, -0.4) + J("grain", "1.2", 2, 7, 2, -0.5) + '</defs><g clip-path="url(#' + F("clip") + ')"><circle cx="61" cy="61" r="54.9" fill="url(#' + F("fill") + ')"></circle><g' + (L ? ' transform="rotate(180 61 61)"' : "") + '><g class="wbMaria" filter="url(#' + F("soften") + ')">' + Wh.map(([de, we, ve, He, Ce, De]) => '<ellipse cx="' + de + '" cy="' + we + '" rx="' + ve + '" ry="' + He + '" fill-opacity="' + De + '" transform="rotate(' + Ce + " " + de + " " + we + ')"></ellipse>').join("") + "</g>" + qh.map(([de, we, ve]) => '<circle class="wbCrater" cx="' + de + '" cy="' + we + '" r="' + ve + '"></circle>').join("") + '<g class="wbRays" filter="url(#' + F("glow") + ')">' + zh.map(([de, we]) => '<line x1="54.4" y1="95" x2="' + de + '" y2="' + we + '"></line>').join("") + '</g><g class="wbBrightSpots" filter="url(#' + F("glow") + ')">' + Ac.map(([de, we, ve]) => '<circle cx="' + de + '" cy="' + we + '" r="' + ve * 2 + '"></circle>').join("") + "</g>" + Ac.map(([de, we, ve]) => '<circle class="wbBrightCenter" cx="' + de + '" cy="' + we + '" r="' + ve + '"></circle>').join("") + '</g><rect class="wbMottle" width="122" height="122" filter="url(#' + F("mottle") + ')"></rect><rect class="wbGrain" width="122" height="122" filter="url(#' + F("grain") + ')"></rect>' + Z + '</g><circle cx="61" cy="61" r="54.9" fill="none" stroke="#B4B4B4" stroke-width="0.2"></circle></svg>';
  }
  function Ri(x) {
    const S = I, L = Yl(x), F = (L == null ? void 0 : L.lat) ?? 0, Z = Ch(S), J = Tc(x), de = J ? x.states[J] : void 0, we = fr(de) && nh.includes(de.state) ? de.state : Th(Z.phase), { rise: ve, set: He } = L ? Sh(S, L.lat, L.lon) : {}, Ce = Z.phase > 0.5 != F < 0, De = pa(Math.round(Z.fraction * 100), x.locale) + "%", Be = ve ?? He, Fe = Be ? zo(Be, x) : void 0;
    return fn({
      icon: ga.night,
      name: Ye.moon,
      sub: Ye.phases[we],
      visual: '<div class="wbMoonBox">' + In(Z.fraction, Ce, F < 0) + '</div><div class="wbScaleNote wbMoonCaption"><span>' + (Fe ? je(Ia(ve ? Ye.moonriseAt : Ye.moonsetAt, { time: Fe })) : "") + "</span><span>" + je(Ia(Ye.lit, { illumination: De })) + "</span></div>"
    });
  }
  function Ge(x, S) {
    var Te;
    const L = hn(x, S, "wind_speed");
    if (!L || !Xt(L.value)) return "";
    const F = hn(x, S, "wind_gust_speed"), Z = hn(x, S, "wind_bearing"), J = Z && Xt(Z.value) ? Number(Z.value) : void 0, de = Bh(Number(L.value), (Te = L.stateObj.attributes) == null ? void 0 : Te.wind_speed_unit), we = zl(x, L.stateObj, "wind_speed", L.value), ve = J !== void 0 ? Ye.cardinal[ah[((J + 11.25) / 22.5 | 0) % 16]] : void 0, He = F ? Eh(x, F.stateObj, "wind_gust_speed", F.value) : void 0, Ce = [ve ? Ia(Ye.windFrom, { direction: ve }) : void 0, de !== void 0 ? de + " " + Ye.beaufort : void 0].filter(Boolean).join(" · ") || He, De = (Ve, tt) => {
      const Re = (Ve - 90) * Math.PI / 180;
      return [100 + tt * Math.cos(Re), 100 + tt * Math.sin(Re)];
    }, Be = Array.from({ length: 36 }, (Ve, tt) => tt * 10).map((Ve) => {
      const tt = Ve % 90 === 0, [Re, et] = De(Ve, 97), [at, Zt] = De(Ve, tt ? 83 : 89);
      return '<line class="wbTick' + (tt ? " wbMajor" : "") + '" x1="' + Re + '" y1="' + et + '" x2="' + at + '" y2="' + Zt + '"></line>';
    }).join(""), Fe = [["n", 0], ["e", 90], ["s", 180], ["w", 270]].map(([Ve, tt]) => {
      const [Re, et] = De(tt, 64);
      return '<text class="wbLetter' + (Ve === "n" ? " wbNorth" : "") + '" x="' + Re + '" y="' + et + '">' + je(Ye.cardinal[Ve]) + "</text>";
    }).join("");
    return fn({ icon: ga.windy, name: Ye.wind, sub: Ce, cls: "wbWind", visual: '<svg viewBox="0 0 200 200" aria-hidden="true">' + Be + Fe + (J !== void 0 ? '<path class="wbMarker" transform="rotate(' + J + ' 100 100)" d="M 100 24 L 91 5 L 109 5 Z"></path>' : "") + '<circle class="wbDisc" cx="100" cy="100" r="46"></circle><text class="wbSpeed" x="100" y="102">' + je(we.number) + '</text><text class="wbSpeedUnit" x="100" y="124">' + je(we.unit) + "</text></svg>" });
  }
  function ot(x, S) {
    const L = hn(x, S, "uv_index");
    if (!L || !Xt(L.value)) return "";
    const F = Number(L.value), Z = Ye.uvLevel[Dh(F)], J = /* @__PURE__ */ new Date();
    J.setHours(23, 59, 59, 999);
    const de = M("hourly").filter((Ve) => Ve.uv_index != null && new Date(Ve.datetime) > /* @__PURE__ */ new Date() && new Date(Ve.datetime) <= J).reduce((Ve, tt) => !Ve || tt.uv_index > Ve.uv ? { uv: tt.uv_index, time: new Date(tt.datetime) } : Ve, void 0), we = 48, ve = 100, He = 130, Ce = (Ve) => -we + Math.min(Ve, 11) / 11 * 2 * we, De = (Ve, tt) => {
      const Re = Ve * Math.PI / 180;
      return [ve + tt * Math.sin(Re), He - tt * Math.cos(Re)];
    }, Be = (Ve, tt, Re) => {
      const [et, at] = De(Ce(Ve), Re), [Zt, Pe] = De(Ce(tt), Re);
      return "M " + et + " " + at + " A " + Re + " " + Re + " 0 0 1 " + Zt + " " + Pe;
    }, Te = '<svg class="wbVu" viewBox="0 0 200 134" preserveAspectRatio="xMidYMax meet" aria-hidden="true">' + [[0, 3, Pl.low], [3, 6, Pl.moderate], [6, 8, Pl.high], [8, 11, Pl.very_high]].map(([Ve, tt, Re]) => '<path class="wbVuZone" d="' + Be(Ve, tt, 96) + '" style="stroke:' + Re + '"></path>').join("") + Array.from({ length: 21 }, (Ve, tt) => ({ angle: -we + tt * (2 * we / 20), major: tt % 2 === 0 })).map(({ angle: Ve, major: tt }) => {
      const [Re, et] = De(Ve, 102), [at, Zt] = De(Ve, tt ? 114 : 108);
      return '<line class="wbVuTick' + (tt ? " wbMajor" : "") + '" x1="' + Re + '" y1="' + et + '" x2="' + at + '" y2="' + Zt + '"></line>';
    }).join("") + '<text class="wbVuLabel" x="100" y="70.1">UV</text><g class="wbVuNeedle" style="--wb-angle:' + Ce(F) + 'deg"><line x1="' + ve + '" y1="' + He + '" x2="' + ve + '" y2="' + (He - 116) + '"></line></g><path class="wbVuHousing" d="M 64 134 L 64 128 A 36 36 0 0 1 136 128 L 136 134 Z"></path><text class="wbVuValue" x="100" y="114.9">' + je(pa(Math.round(F), x.locale)) + "</text></svg>";
    return fn({
      icon: ga.sunnyAlert,
      name: Ye.metrics.uv_index,
      sub: de && de.uv > F ? Ia(Ye.uvPeak, { level: Z, uv_index: pa(Math.round(de.uv), x.locale), time: zo(de.time, x) }) : Z,
      visual: Te
    });
  }
  function ea(x) {
    const S = M("daily")[0], L = ie.temperatureHistory;
    if (!S || new Date(S.datetime).toDateString() !== (/* @__PURE__ */ new Date()).toDateString() || !Xt(S.temperature) || !L || L.dailyHighs.length < Xu) return "";
    const F = Number(S.temperature), Z = L.dailyHighs.reduce((at, Zt) => at + Zt, 0) / L.dailyHighs.length, J = Math.round(F - Z) || 0, de = J > 0 ? "above" : J < 0 ? "below" : "same", we = [...L.days, { date: /* @__PURE__ */ new Date(), high: F, today: !0 }], ve = 220, He = 158, Ce = 22, De = 20, Be = we.map((at) => at.high).concat(Z), Fe = Math.min(...Be) - 3, Te = Math.max(...Be) + 1, Ve = (at) => Ce + (1 - (at - Fe) / (Te - Fe)) * (He - Ce - De), tt = ve / we.length, Re = Math.min(18, tt * 0.6), et = '<svg class="wbCompareBars" viewBox="0 0 ' + ve + " " + He + '" aria-hidden="true"><line class="wbAvgLine" x1="0" x2="' + ve + '" y1="' + Ve(Z) + '" y2="' + Ve(Z) + '"></line>' + we.map((at, Zt) => {
      const Pe = Zt * tt + tt / 2, Nt = Ve(at.high), Vt = at.today ? " wbToday" : "";
      return '<rect class="wbAvgBar' + Vt + '" x="' + (Pe - Re / 2) + '" y="' + Nt + '" width="' + Re + '" height="' + (He - De - Nt) + '" rx="5"></rect><text class="wbAvgValue' + Vt + '" x="' + Pe + '" y="' + (Nt - 6) + '">' + je(ca(x, at.high)) + '</text><text class="wbAvgDay' + Vt + '" x="' + Pe + '" y="' + (He - 4) + '">' + je(fh(at.date, x)) + "</text>";
    }).join("") + "</svg>";
    return fn({
      icon: ga.chartLine,
      name: Ye.metrics.compared_to_average,
      double: !0,
      sub: Ia(Ye.highsLastDays, { days: L.days.length }),
      visual: '<div class="wbCompare"><div class="wbCompareText"><div class="wbCompareNumber">' + (J > 0 ? "+" : "") + je(ca(x, J)) + '</div><div class="wbCompareWords">' + je(Ye.average[de]) + '</div><div class="wbCompareTemps">' + je(Ia(Ye.todayVsAverage, { today: ca(x, F), average: ca(x, Z) })) + "</div></div>" + et + "</div>"
    });
  }
  function ko(x, S) {
    const L = hn(x, S, "humidity");
    if (!L || !Xt(L.value)) return "";
    const F = hn(x, S, "dew_point"), Z = Math.max(0, Math.min(100, Number(L.value)));
    return fn({
      icon: ga.waterPercent,
      name: Ye.metrics.humidity,
      sub: F && Xt(F.value) ? Ia(Ye.dewPoint, { dew_point: ca(x, F.value) }) : void 0,
      backdrop: '<div class="wbWater" style="height:' + Z + '%"><div class="wbMist"></div><div class="wbBody"></div><div class="wbHaze wbOne"></div><div class="wbHaze wbTwo"></div></div>',
      visual: '<div class="wbWaterValue">' + Ai(pa(Math.round(Number(L.value)), x.locale), "%") + "</div>"
    });
  }
  function Oa(x, S) {
    var He, Ce;
    const L = hn(x, S, "pressure");
    if (!L || !Xt(L.value)) return "";
    const F = Number(L.value), Z = (He = L.stateObj.attributes) == null ? void 0 : He.pressure_unit, J = Cc(F, Z), de = ((Ce = ie.pressureHistory) == null ? void 0 : Ce.entityId) === L.stateObj.entity_id ? Cc(ie.pressureHistory.value, Z) : void 0;
    let we;
    if (J !== void 0 && de !== void 0) {
      const De = J - de;
      we = De >= vc ? "rising" : De <= -vc ? "falling" : "steady";
    }
    const ve = zl(x, L.stateObj, "pressure", Math.round(F));
    return fn({
      icon: ga.gauge,
      name: Ye.metrics.pressure,
      sub: we ? Ye.pressure[we] : void 0,
      visual: '<div class="wbTapeRow"><div class="wbTapeValue">' + Ai(ve.number) + '<span class="wbTapeUnit">' + je(ve.unit) + "</span></div>" + (J !== void 0 ? ta(x, J) : "") + "</div>"
    });
  }
  function ta(x, S) {
    const Z = Math.floor(S) - 11;
    return '<svg class="wbTape" viewBox="0 0 76 200" preserveAspectRatio="xMaxYMid meet" aria-hidden="true">' + Array.from({ length: 24 }, (J, de) => Z + de).map((J) => {
      const de = 100 - (J - S) * 9;
      if (de < 22 || de > 178) return "";
      const we = J % 5 === 0;
      return '<g opacity="' + Math.max(0.15, 1 - Math.abs(de - 100) / 100) + '"><line class="wbTapeTick" x1="' + (we ? 2 : 8) + '" x2="26" y1="' + de + '" y2="' + de + '"></line>' + (we ? '<text class="wbTapeLabel" x="33" y="' + de + '">' + je(pa(J, x.locale, { useGrouping: !1 })) + "</text>" : "") + "</g>";
    }).join("") + '<text class="wbTapeEnd" x="14" y="8">' + je(Ye.high) + '</text><text class="wbTapeEnd" x="14" y="192">' + je(Ye.low) + '</text><line class="wbTapeMarker" x1="0" x2="30" y1="100" y2="100"></line></svg>';
  }
  function Zo(x) {
    var ve, He;
    const S = Md(x), L = S ? x.states[S] : void 0;
    if (!L || ((ve = ie.rain) == null ? void 0 : ve.entityId) !== S || !Xt(ie.rain.change)) return "";
    const F = ((He = L.attributes) == null ? void 0 : He.unit_of_measurement) ?? "", Z = _(x, "hourly"), J = Date.now() + wo, de = M("hourly").filter((Ce) => Ce.precipitation != null && new Date(Ce.datetime).getTime() <= J), we = de.reduce((Ce, De) => Ce + Number(De.precipitation), 0);
    return fn({
      icon: ga.rainy,
      name: Ye.metrics.precipitation,
      sub: Z && de.length ? Ia(Ye.rainExpected, { amount: pa(we, x.locale, { maximumFractionDigits: 1 }) + " " + ur(x, Z, "precipitation") }) : Ye.rainLast24h,
      visual: Ai(pa(ie.rain.change, x.locale, { maximumFractionDigits: 1 }), F) + (de.length > 1 ? Oh(de.map((Ce) => ({ label: "", value: Number(Ce.precipitation) }))) : "")
    });
  }
  function ra(x, S) {
    const L = hn(x, S, "visibility");
    if (!L || !Xt(L.value)) return "";
    const F = zl(x, L.stateObj, "visibility", L.value), Z = Wu(Number(L.value), ur(x, L.stateObj, "visibility"));
    return fn({
      icon: ga.eyeOutline,
      name: Ye.metrics.visibility,
      sub: Ye.visibilityLevel[qu(Z)],
      visual: '<div class="wbSea"><canvas class="wbSeaArt" data-wb-sea="' + Z + '" aria-hidden="true"></canvas><div class="wbSeaFact">' + je(Hn(x, Z)) + '</div><div class="wbSeaValue">' + Ai(F.number, F.unit) + "</div></div>"
    });
  }
  function Hn(x, S) {
    var J;
    const L = Ou((J = x.config) == null ? void 0 : J.country, S);
    if (L) return Ia(Ye.visibilityLandmarks, { from: L.from, to: L.to });
    const F = S / eh * 60;
    if (F < 60) {
      const de = F < 5 ? Math.max(1, Math.round(F)) : 5 * Math.round(F / 5);
      if (de < 60) return Ia(Ye.walkMinutes, { minutes: pa(de, x.locale) });
    }
    const Z = Math.max(1, Math.round(F / 30) / 2);
    return Z < 8 ? Ia(Ye.walkHours, { hours: pa(Z, x.locale) }) : Ye.walkDay;
  }
  function Fn(x) {
    ie.categories === void 0 && ya(x);
    const S = mt(x), L = (ve) => ve.map((He) => x.states[He]).filter(fr), F = L(S.air), Z = L(S.pollen);
    if (!F.length && !Z.length) return "";
    const J = [...F, ...Z], de = (ve) => Z.includes(ve) ? ga.flower : ga.airFilter, we = J.find((ve) => ve.entity_id === N.aq);
    return we ? Mo(x, we, de(we)) : '<div class="wbCard wbHc wbAq"><div class="wbHeader"><h2 class="wbTitle">' + je(Ye.airQuality) + '</h2></div><div class="wbAqTiles">' + J.map((ve) => '<button class="wbTile" data-wb="aq-open" data-entity="' + je(ve.entity_id) + '"><span class="wbChip">' + Kr(de(ve)) + '</span><span class="wbText"><span class="wbName">' + je(Vs(x, ve)) + '</span><span class="wbSub">' + je(pr(x, ve)) + "</span></span></button>").join("") + "</div></div>";
  }
  function Mo(x, S, L) {
    var Ce, De, Be;
    const F = ((Ce = S.attributes) == null ? void 0 : Ce.unit_of_measurement) ?? "", Z = ((De = S.attributes) == null ? void 0 : De.device_class) === "pm25" && F === bc && Xt(S.state), J = Number(S.state), de = Z ? Sc(J) : void 0, we = ((Be = ie.aqHistory) == null ? void 0 : Be.entityId) === S.entity_id ? ie.aqHistory.points : void 0, ve = (Fe) => Math.min(100, Math.max(0, Fe / Il * 100));
    let He;
    if (we && we.length > 1) He = Fh(we, (Fe) => (pa(Fe, x.locale, { maximumFractionDigits: 1 }) + " " + F).trim());
    else if (de) {
      let Fe = 0;
      const Te = up.map(([Ve, tt]) => {
        const Re = ve(Math.min(tt, Il)), et = oh[Ve] + " " + Fe + "% " + Re + "%";
        return Fe = Re, et;
      });
      He = '<div class="wbScale" role="meter" aria-label="' + je(Ye.fineParticles) + '" aria-valuemin="0" aria-valuemax="' + Il + '" aria-valuenow="' + J + '" style="background:linear-gradient(to right, ' + Te.join(", ") + ')"><i style="left:' + ve(J) + '%"></i></div><div class="wbGraphNote"><span>0</span><span>' + Il + " " + bc + "</span></div>";
    } else He = '<span class="wbGraphNote"><span>' + je(pr(x, S)) + "</span></span>";
    return '<div class="wbCard wbHc wbAq wbAqOpen"><div class="wbOpen"><div class="wbOpenHead"><span class="wbChip">' + Kr(L) + '</span><span class="wbText"><span class="wbName">' + je(Vs(x, S)) + '</span><span class="wbSub">' + je(pr(x, S)) + (de ? " · " + je(Ye.aqLevel[de]) : "") + '</span></span><button class="wbBack" title="' + je(Ye.back) + '" data-wb="aq-close">' + Kr(ga.back) + '</button></div><div class="wbGraph">' + He + "</div></div></div>";
  }
  const Ut = { good: "Good", fair: "Fair", moderate: "Moderate", poor: "Poor", very_poor: "Very poor", extremely_poor: "Extremely poor" }, On = (x) => x <= 50 ? "Good" : x <= 100 ? "Moderate" : x <= 150 ? "Unhealthy for some" : x <= 200 ? "Unhealthy" : x <= 300 ? "Very unhealthy" : "Hazardous";
  function Wa(x) {
    const S = /* @__PURE__ */ new Map();
    return Object.values(x.states || {}).filter((L) => {
      var F;
      return L.entity_id.startsWith("sensor.") && Gl.includes(((F = L.attributes) == null ? void 0 : F.device_class) ?? "") && fr(L) && Xr(x, L.entity_id);
    }).sort((L, F) => L.entity_id.localeCompare(F.entity_id)).forEach((L) => {
      S.has(L.attributes.device_class) || S.set(L.attributes.device_class, L);
    }), Gl.map((L) => S.get(L)).filter(Boolean);
  }
  const Wn = (x) => Object.values(x.states || {}).filter((S) => {
    var L, F;
    return S.entity_id.startsWith("sensor.") && fr(S) && Xr(x, S.entity_id) && (((F = (L = x.entities) == null ? void 0 : L[S.entity_id]) == null ? void 0 : F.translation_key) ?? S.entity_id).toLowerCase().includes("pollen");
  }), ao = ["none", "very_low", "low", "moderate", "high", "very_high"], oa = (x) => Xt(x.state) ? Number(x.state) : ao.indexOf(String(x.state).toLowerCase().replace(/ /g, "_")), qn = (x) => {
    const S = String(x).replace(/_/g, " ");
    return S[0].toUpperCase() + S.slice(1);
  }, sn = (x) => x.length ? '<div class="wbBaseRows">' + x.map(([S, L]) => '<span class="wbBaseRow"><span>' + je(S) + "</span><span>" + je(L) + "</span></span>").join("") + "</div>" : "";
  function Ko(x) {
    const S = Wa(x), L = S[0];
    if (!L) return fn({ icon: ga.airFilter, name: Ye.airQuality, sub: Ye.noAir, visual: Ai("–", ""), cls: "wbBase" });
    const F = L.attributes.device_class, Z = Number(L.state), J = Xt(L.state), de = F === "aqi" && J ? On(Z) : F === "pm25" && J ? Ut[Sc(Z)] : pr(x, L);
    return fn({
      icon: ga.airFilter,
      name: Ye.airQuality,
      sub: de,
      cls: "wbBase",
      visual: Ai(J ? pa(Math.round(Z), x.locale) : String(L.state), F === "aqi" ? "AQI" : L.attributes.unit_of_measurement || "") + sn(S.slice(1, 3).map((we) => [Vs(x, we), pr(x, we)]))
    });
  }
  function Ni(x) {
    const S = Wn(x).sort((Z, J) => oa(J) - oa(Z));
    if (!S.length) return fn({ icon: ga.flower, name: Ye.pollen, sub: Ye.noPollen, visual: Ai("–", ""), cls: "wbBase" });
    const L = S[0], F = (Z) => Xt(Z.state) ? pr(x, Z) : qn(Z.state);
    return fn({
      icon: ga.flower,
      name: Ye.pollen,
      sub: Vs(x, L) + " · " + F(L),
      cls: "wbBase",
      visual: Ai(F(L), "") + sn(S.slice(1, 3).map((Z) => [Vs(x, Z), F(Z)]))
    });
  }
  function Pi(x) {
    const S = Date.now(), L = M("hourly").filter((J) => {
      const de = new Date(J.datetime).getTime();
      return de > S - qt && de < S + 12 * qt;
    }), F = L.find((J) => (J.precipitation_probability ?? 0) >= 50 || (J.precipitation ?? 0) >= 0.2), Z = F ? Ia(Ye.rainFrom, { time: zo(new Date(Math.max(S, new Date(F.datetime).getTime())), x) }) : L.length ? Ye.noRain12 : void 0;
    return fn({ icon: ga.radar, name: Ye.rainRadar, sub: Z, cls: "wbBase", visual: '<div class="wbRadar" aria-hidden="true"><i class="wbRadarRing"></i><i class="wbRadarHome"></i></div>' });
  }
  const Qr = {
    current: _a,
    hourly: ke,
    sun: Fa,
    moon: Ri,
    wind: Ge,
    uv_index: ot,
    compared_to_average: ea,
    humidity: ko,
    pressure: Oa,
    precipitation: Zo,
    visibility: ra,
    air_quality: Fn,
    aq_tile: Ko,
    pollen_tile: Ni,
    radar_tile: Pi
  };
  function Mt(x) {
    var He, Ce, De;
    const S = l == null ? void 0 : l();
    if (!S || Y) return;
    const L = Ha(S);
    fe(S, L), ie.lastFetch || $e();
    const F = mt(S), Z = Tc(S), J = Md(S), de = [
      ...L.map((Be) => S.states[Be]),
      S.states["sun.sun"],
      Z && S.states[Z],
      J && S.states[J],
      ...F.air.map((Be) => S.states[Be]),
      ...F.pollen.map((Be) => S.states[Be]),
      ...U.some((Be) => oe.includes(Be)) ? [...Wa(S), ...Wn(S)] : [],
      S.locale,
      S.config,
      S.entities,
      Math.floor(Date.now() / eo)
    ];
    if (!x && G && de.length === G.length && de.every((Be, Fe) => Be === G[Fe])) return;
    G = de;
    const we = B.getRootNode(), ve = we.activeElement || document.activeElement;
    for (const Be of U) {
      const Fe = ae[Be];
      let Te = "";
      try {
        Te = Qr[Be](S, L) || "";
      } catch {
        Te = "";
      }
      if (Te === Fe.html) continue;
      const Ve = ve && Fe.el.contains(ve) ? (He = ve.dataset) == null ? void 0 : He.wbFocus : void 0, tt = Fe.el.querySelector(".wbStripScroll"), Re = tt ? tt.scrollLeft : null;
      Fe.html = Te, Fe.el.hidden = !Te, Fe.el.innerHTML = Te;
      const et = Fe.el.querySelector(".wbStripScroll");
      et && Re != null ? et.scrollTo({ left: Re }) : et != null && et.dataset.start && et.scrollTo({ left: Number(et.dataset.start) * et.clientWidth / Number(et.dataset.span) }), Ve && !ue && ((Ce = Fe.el.querySelector('[data-wb-focus="' + Ve + '"]')) == null || Ce.focus());
    }
    ue && ((De = B.querySelector('[data-wb-focus="' + ue + '"]')) == null || De.focus(), ue = null), Ct(performance.now());
  }
  function qa() {
    Q || Y || (Q = !0, queueMicrotask(() => {
      Q = !1, Mt(!0);
    }));
  }
  function Ii() {
    const x = getComputedStyle(B), S = (de) => x.getPropertyValue(de).trim(), L = {};
    [["skyClearDay", "--wx-clear"], ["skyClearNight", "--wx-night"], ["skyCloudyDay", "--wx-cloudy"], ["cloudDay", "--wx-cloud-bright"], ["cloudNight", "--wx-cloudy"], ["rain", "--primary"]].forEach(([de, we]) => {
      S(we) && (L[de] = S(we));
    });
    const F = S("--color-text-primary") || "#f1f1f1", Z = S("--color-bg-card") || "#222222", J = !!B.closest(".light");
    return { colors: { ...rn, ...L }, ink: J ? F : Z, paper: J ? Z : F };
  }
  const Hi = (x, S) => {
    var L;
    x.width !== S.w && (x.width = S.w), x.height !== S.h && (x.height = S.h), (L = x.getContext("2d")) == null || L.putImageData(new ImageData(S.data, S.w, S.h), 0, 0);
  }, Ea = () => m && !ph();
  function Bt(x, S) {
    B.querySelectorAll("canvas[data-wb-strip]").forEach((L) => ia(L, Ie[L.dataset.wbStrip], x, S));
  }
  function ia(x, S, L, F) {
    if (!S || !x.getClientRects().length) return;
    const Z = x.clientWidth, J = x.clientHeight;
    if (!Z || !J) return;
    const de = { width: Z, height: J, columns: S.columns || hc, colors: F.colors, clock: L, ambient: Ea(), seed: S.seed, soft: 1.5 };
    if (c === "smooth") {
      const we = Math.min(2, window.devicePixelRatio || 1), ve = Math.round(Z * we), He = Math.round(J * we);
      x.width !== ve && (x.width = ve), x.height !== He && (x.height = He);
      const Ce = x.getContext("2d");
      if (!Ce) return;
      Ce.setTransform(we, 0, 0, we, 0, 0), yu(Ce, S.segs, de);
    } else Hi(x, xu(S.segs, { ...de, px: 2, oneBit: c === "onebit", ink: F.ink, paper: F.paper }));
  }
  function Ct(x) {
    if (Y) return;
    const S = Ii();
    if (c !== "smooth") {
      const L = Ea();
      B.querySelectorAll("canvas[data-wb-wx]").forEach((F) => {
        F.getClientRects().length && Hi(F, ep(Id(F.dataset.wbWx, S.colors), { size: Number(F.dataset.size) || 40, px: 2, oneBit: c === "onebit", colors: S.colors, ink: S.ink, paper: S.paper, clock: x, idle: L }));
      });
    }
    B.querySelectorAll("canvas[data-wb-sea]").forEach((L) => {
      const F = L.clientWidth, Z = L.clientHeight, J = Number(L.dataset.wbSea), de = F + "x" + Z + ":" + J + ":" + S.colors.skyClearDay;
      !F || !Z || !(J > 0) || L.dataset.painted === de || (L.dataset.painted = de, Hi(L, Iu(F, Z, J, S.colors)));
    }), Bt(x, S);
  }
  function no(x) {
    if (W = 0, !(Y || !Ea())) {
      if (!document.hidden)
        if (c === "smooth") Bt(x, Ii());
        else {
          const S = Math.floor(x / 100);
          S !== pe && (pe = S, Ct(x));
        }
      W = requestAnimationFrame(no);
    }
  }
  function Cn() {
    B.classList.toggle("wbMotion", Ea()), !W && !Y && Ea() && (W = requestAnimationFrame(no));
  }
  function So(x) {
    var L, F;
    const S = (F = (L = x.target).closest) == null ? void 0 : F.call(L, "[data-wb]");
    if (!(!S || !B.contains(S))) {
      switch (S.dataset.wb) {
        case "day": {
          N.openDay = Number(S.dataset.index), N.opener = S.dataset.wbFocus, ue = "back-day";
          const Z = At()[N.openDay], J = !ie.todayHistory || ie.todayHistory.day !== (/* @__PURE__ */ new Date()).toDateString() || Date.now() - ie.todayHistory.fetched > ju;
          Z && Yr(new Date(Z.datetime), /* @__PURE__ */ new Date()) && J && st();
          break;
        }
        case "close-day":
          N.openDay = void 0, ue = N.opener, N.opener = void 0;
          break;
        case "open-page":
          w == null || w();
          return;
        case "day-mode":
          N.dayMode = S.dataset.mode;
          break;
        case "hourly-mode":
          N.hourlyMode = S.dataset.mode;
          break;
        case "hourly-view":
          N.hourlyView = S.dataset.view;
          try {
            localStorage.setItem(X, N.hourlyView);
          } catch {
          }
          break;
        case "hours-day": {
          const Z = B.querySelector(".wbStripScroll");
          Z && Z.scrollTo({ left: Number(S.dataset.hours) * Z.clientWidth / Number(Z.dataset.span), behavior: "smooth" });
          return;
        }
        case "aq-open":
          N.aq = S.dataset.entity, _t(N.aq);
          break;
        case "aq-close":
          N.aq = void 0;
          break;
        default:
          return;
      }
      Mt(!0);
    }
  }
  function Da(x) {
    var S, L;
    x.key === "Escape" && N.openDay !== void 0 && ((L = (S = x.target).closest) != null && L.call(S, '[data-wb-open="day"]')) && (N.openDay = void 0, ue = N.opener, N.opener = void 0, Mt(!0));
  }
  let Ba = null;
  function $o(x) {
    var L, F;
    const S = (F = (L = x.target).closest) == null ? void 0 : F.call(L, ".wbStripScroll");
    !S || x.button !== 0 || (Ba = { startX: x.pageX, left: S.scrollLeft, moved: !1 }, S.classList.add("wbHeld"), window.addEventListener("mousemove", Xo), window.addEventListener("mouseup", gn, { once: !0 }));
  }
  function Xo(x) {
    const S = B.querySelector(".wbStripScroll");
    if (!Ba || !S) return;
    const L = x.pageX - Ba.startX;
    !Ba.moved && Math.abs(L) > 1 && (Ba.moved = !0, S.classList.add("wbDragging")), S.scrollLeft = Ba.left - L;
  }
  function gn() {
    Ba = null, window.removeEventListener("mousemove", Xo);
    const x = B.querySelector(".wbStripScroll");
    if (!x) return;
    x.classList.remove("wbDragging", "wbHeld");
    const S = [...x.querySelectorAll(".wbSnap")];
    if (S.length) {
      const L = S.reduce((F, Z) => Math.abs(Z.offsetLeft - x.scrollLeft) < Math.abs(F.offsetLeft - x.scrollLeft) ? Z : F);
      x.scrollTo({ left: L.offsetLeft, behavior: "smooth" });
    }
  }
  B.addEventListener("click", So), B.addEventListener("keydown", Da), B.addEventListener("mousedown", $o);
  const ln = typeof ResizeObserver == "function" ? new ResizeObserver(() => Ct(performance.now())) : null;
  ln == null || ln.observe(B);
  const Ua = (Jo = window.matchMedia) == null ? void 0 : Jo.call(window, "(prefers-reduced-motion: reduce)"), Fi = () => {
    Cn(), Ct(performance.now());
  };
  (vn = Ua == null ? void 0 : Ua.addEventListener) == null || vn.call(Ua, "change", Fi);
  const Co = [
    setInterval(() => {
      Ae = /* @__PURE__ */ new Date(), Mt(!0);
    }, Ju),
    setInterval(() => {
      I = /* @__PURE__ */ new Date(), Mt(!0);
    }, Qu),
    setInterval($e, Ku)
  ];
  return Mt(!0), Cn(), {
    update() {
      Mt(!1);
    },
    // a choice in Settings changed (Next hours' window)
    refresh() {
      Mt(!0);
    },
    setStyle(x) {
      !x || x === c || (c = x, B.dataset.style = c, Mt(!0), Cn());
    },
    destroy() {
      var x;
      Y = !0, Co.forEach(clearInterval), W && cancelAnimationFrame(W), W = 0, ln == null || ln.disconnect(), (x = Ua == null ? void 0 : Ua.removeEventListener) == null || x.call(Ua, "change", Fi), gn(), B.removeEventListener("click", So), B.removeEventListener("keydown", Da), B.removeEventListener("mousedown", $o), ["daily", "hourly"].forEach(C), B.remove();
    }
  };
}
const Ys = "#E1E1E1", Ec = "#F7F4F0", Sd = "#03a9f4", Lt = 14, Dt = 172;
let Vh = 0;
const Jt = (n) => Math.round(n * 100) / 100, xo = (n, l, o) => Math.max(l, Math.min(o, n)), Uo = (n, l, o, c, m, v) => '<rect x="' + Jt(n) + '" y="' + Jt(l) + '" width="' + Jt(o) + '" height="' + Jt(c) + '" fill="' + m + '"' + (v != null ? ' opacity="' + v + '"' : "") + "/>", Cd = (n) => n.map((l, o) => (o ? "L" : "M") + Jt(l[0]) + " " + Jt(l[1])).join("");
function Td(n) {
  const l = (n == null ? void 0 : n.attributes) || {};
  return l.device_class === "curtain" ? "curtain" : l.device_class === "blind" || l.current_tilt_position != null ? "venetian" : "blind";
}
const _i = [
  [2, ["#070B16", "#0E2447", "#1B3A6B", "#0A1733", 0.9]],
  [6.5, ["#0B0F1C", "#2E7FD6", "#F2743B", "#F1B6C8", 0.95]],
  [9.5, ["#8FC4EC", "#4DA3E8", "#F4FAFF", "#2F7FCF", 0.7]],
  [13, ["#9ED3F6", "#3F97E6", "#FFFFFF", "#2B86D9", 0.65]],
  [17, ["#9FC2E4", "#4A8ED4", "#FFD9B8", "#5E8FD6", 0.75]],
  [19, ["#4B5E86", "#3B86E0", "#FF6A3D", "#B07CE8", 0.95]],
  [21.5, ["#1A2140", "#1F3F7A", "#B4506E", "#3E59A6", 0.8]],
  [26, ["#070B16", "#0E2447", "#1B3A6B", "#0A1733", 0.9]]
];
function Gh(n) {
  const l = n < 2 ? n + 24 : n;
  let o = _i[0], c = _i[_i.length - 1];
  for (let A = 0; A < _i.length - 1; A++) if (l >= _i[A][0] && l <= _i[A + 1][0]) {
    o = _i[A], c = _i[A + 1];
    break;
  }
  const m = (l - o[0]) / (c[0] - o[0]), v = m * m * (3 - 2 * m), w = (A, y) => {
    const B = parseInt(A.slice(1), 16), ge = parseInt(y.slice(1), 16);
    return "#" + [16, 8, 0].map((oe) => Math.round((B >> oe & 255) + ((ge >> oe & 255) - (B >> oe & 255)) * v).toString(16).padStart(2, "0")).join("");
  };
  return { top: w(o[1][0], c[1][0]), bot: w(o[1][1], c[1][1]), warm: w(o[1][2], c[1][2]), cool: w(o[1][3], c[1][3]), op: o[1][4] + (c[1][4] - o[1][4]) * v, t: l };
}
function Uh(n) {
  const l = parseInt(n.slice(1), 16), o = (l >> 16 & 255) / 255, c = (l >> 8 & 255) / 255, m = (l & 255) / 255, v = Math.max(o, c, m), w = Math.min(o, c, m);
  let A = 0, y = 0;
  const B = (v + w) / 2;
  if (v !== w) {
    const ge = v - w;
    y = B > 0.5 ? ge / (2 - v - w) : ge / (v + w), A = (v === o ? (c - m) / ge + (c < m ? 6 : 0) : v === c ? (m - o) / ge + 2 : (o - c) / ge + 4) / 6;
  }
  return [A * 360, y * 100, B * 100];
}
function Sp(n, l, o) {
  l = xo(l, 0, 100) / 100, o = xo(o, 0, 100) / 100;
  const c = (w) => (w + n / 30) % 12, m = l * Math.min(o, 1 - o), v = (w) => o - m * Math.max(-1, Math.min(c(w) - 3, Math.min(9 - c(w), 1)));
  return "#" + [v(0), v(8), v(4)].map((w) => Math.round(w * 255).toString(16).padStart(2, "0")).join("");
}
const [Cp, Tp, Lp] = Uh(Ys), Dc = Sp(Cp, Tp, Math.max(6, Lp - 14)), Yh = Sp(Cp, Tp, Math.min(96, Lp + 16));
function Zh(n, l, o, c, m) {
  const v = Dt / 2, w = Dt * 0.12, A = v - (v - w) * n, y = (ae) => ae ** 1.3, B = xo(o, -1.5, 1.5), ge = (ae) => -(Math.abs(B) * 4.6 * ae ** 1.5) * Math.sign(B), oe = n * 1.4, U = (ae, Y) => {
    const G = Math.min(4.8, Math.abs(o) * 2.6) * (Y ? 1 : -1) * Math.sign(o || 1), W = Y ? ae + A : ae, pe = Y ? ae : ae + A, Q = (Ae) => W + ge(Ae) + G * Math.sin(Ae * Math.PI * 1.2 + c) * y(Ae) * 1.4 + oe * Math.sin(Ae * Math.PI * 2 + c * 0.6) * y(Ae) * (Y ? 1 : -1), ue = [[pe, Lt]];
    for (let Ae = 0; Ae <= 12; Ae++) ue.push([Q(Ae / 12), Lt + Dt * Ae / 12]);
    ue.push([pe, Lt + Dt]);
    let X = '<path d="' + Cd(ue) + 'Z" fill="' + Ys + '"/>';
    if (m) return X;
    const E = 1.35 + ((Y ? o > 0 : o < 0) ? 0.35 : 0), N = (Ae) => {
      const I = Ae / 7, Ie = Y ? 1 - I : I, V = (1 - Ie) ** 1.3, qe = ae + A * I;
      return Array.from({ length: 13 }, (M, _) => {
        const C = _ / 12;
        return [qe + ge(C) * V + G * E * Math.sin(C * Math.PI * 1.2 + c - Ie * 3.2) * y(C) * 1.4 * V + oe * 1.6 * Math.sin(C * Math.PI * 2 + c * 0.6 - Ie * 2.5) * y(C) * n * (0.4 + 0.6 * V), Lt + Dt * C];
      });
    }, ie = [1, 2, 3, 4, 5, 6].map(N);
    for (let Ae = 0; Ae < 6; Ae += 2) X += '<path d="' + Cd(ie[Ae]) + Cd(ie[Ae + 1].slice().reverse()).replace("M", "L") + 'Z" fill="#fff"/>';
    return X;
  }, K = v - (v - w) * l;
  return { body: U(Lt, !0) + U(Lt + Dt - A, !1), rails: [{ x: Lt + K - 4, y: Lt, w: 4, h: Dt }, { x: Lt + Dt - K, y: Lt, w: 4, h: Dt }], head: 6.4 };
}
function Kh(n, l, o) {
  const c = Dt * (1 - n);
  let m = "";
  if (c > 1 && (m += Uo(Lt, Lt, Dt, c, Ys), !o))
    for (let v = 1; v < 7; v += 2) m += Uo(Lt + Dt * v / 7, Lt, Dt / 7, c, "#fff");
  return { body: m, rails: [{ x: Lt, y: Lt + Dt * (1 - l) - 7, w: Dt, h: 11 }], head: 10.4 };
}
function $h(n, l, o, c) {
  const m = 9 - 7 * (o / 100), v = Lt + Dt * (1 - n), w = Math.ceil(Dt / 10) + 1, A = Lt + m / 2, y = (Lt + Dt - m / 2 - A) / (w - 1), B = 0.8, ge = 0.6, oe = Array.from({ length: w }, (ae, Y) => Math.max(A + Y * ge, Math.min(A + Y * y, v - m / 2 - (w - 1 - Y) * ge))), U = oe.slice(0, -1).map((ae, Y) => xo((oe[Y + 1] - ae - ge) / (y - ge), 0, 1));
  U.push(U[w - 2]);
  let K = "";
  return oe.forEach((ae, Y) => {
    const G = B + (m - B) * U[Y], W = Math.max(0.5, G / 2), pe = Math.max(0.4, G * 0.114);
    K += Uo(Lt, ae - W, Dt, Math.max(1, G), Ys), !c && G > 2.2 && (K += Uo(Lt, ae + W - pe, Dt, pe, Dc) + Uo(Lt, ae - W, Dt, pe * 0.55, Yh, 0.75));
  }), c || [0.22, 0.78].forEach((ae) => {
    K += Uo(Lt + Dt * ae - 0.7, Lt, 1.4, Math.max(0, oe[w - 1] + 1 - Lt), Dc, 0.85);
  }), { body: K, rails: [{ x: Lt, y: Lt + Dt * (1 - l) - 8, w: Dt, h: 8 }], head: 8.8 };
}
const Bc = (n, l, o, c, m, v, w) => n === "curtain" ? Zh(l, o, m, v, w) : n === "venetian" ? $h(l, o, c, w) : Kh(l, o, w);
function Xh(n, l) {
  let o = "", c = "";
  return l.forEach((m) => {
    const v = m.w > m.h, w = xo(v ? Lt + Dt / 2 : m.x + m.w / 2, 17, 183), A = xo(v ? m.y + m.h / 2 : Lt + Dt / 2, 17, 183);
    o += v ? Uo(Lt, xo(m.y + m.h / 2, Lt, Lt + Dt) - 1, Dt, 2, Sd) : Uo(xo(m.x + m.w / 2, Lt, Lt + Dt) - 1, Lt, 2, Dt, Sd);
    const y = v ? "M" + Jt(w - 4) + " " + Jt(A - 3) + "l4 -3l4 3M" + Jt(w - 4) + " " + Jt(A + 3) + "l4 3l4 -3" : "M" + Jt(w - 3) + " " + Jt(A - 4) + "l-3 4l3 4M" + Jt(w + 3) + " " + Jt(A - 4) + "l3 4l-3 4";
    c += '<circle cx="' + Jt(w) + '" cy="' + Jt(A) + '" r="11" fill="' + Sd + '" filter="url(#' + n + 's)"/><path d="' + y + '" fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>';
  }), { lines: o, knobs: c };
}
function Jh(n, l) {
  const o = /* @__PURE__ */ new Date(), c = Gh(o.getHours() + o.getMinutes() / 60), m = 42 + 18 * Math.sin(c.t * 0.5), v = c.t >= 5 && c.t <= 20 ? 40 - 48 * Math.sin(Math.PI * (c.t - 5) / 15) : 80, w = Bc(l.kind, l.pos / 100, l.bar / 100, l.tilt, l.vel, l.ph, !1), A = l.ghostAlpha > 4e-3 && l.ghost != null ? Bc(l.kind, l.ghost / 100, l.ghost / 100, l.tilt, 0, 0, !0).body : "", y = l.grip > 4e-3 ? Xh(n, w.rails) : null, B = (ge) => Uo(Lt, Lt, Dt, Dt, ge);
  return '<svg viewBox="0 0 200 200" aria-hidden="true" focusable="false"><defs><clipPath id="' + n + 'c"><rect x="14" y="14" width="172" height="172" rx="8"/></clipPath><linearGradient id="' + n + 'l" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + c.top + '"/><stop offset="1" stop-color="' + c.bot + '"/></linearGradient><radialGradient id="' + n + 'w" cx="' + Jt(m) + '%" cy="' + Jt(v) + '%" r="58%"><stop offset="0" stop-color="' + c.warm + '" stop-opacity="' + Jt(c.op * 0.8) + '"/><stop offset="1" stop-color="' + c.warm + '" stop-opacity="0"/></radialGradient><radialGradient id="' + n + 'k" cx="' + Jt(100 - m * 0.8) + '%" cy="' + Jt(100 - v * 0.6) + '%" r="62%"><stop offset="0" stop-color="' + c.cool + '" stop-opacity="' + Jt(c.op * 0.64) + '"/><stop offset="1" stop-color="' + c.cool + '" stop-opacity="0"/></radialGradient><filter id="' + n + 's" x="-5%" y="-50%" width="110%" height="300%"><feDropShadow dx="0" dy="1.2" stdDeviation="1.2" flood-color="#000" flood-opacity=".18"/></filter></defs><rect x="6" y="6" width="188" height="188" rx="16" fill="' + Ec + '" stroke="#E3E3E3" stroke-width=".4"/><g clip-path="url(#' + n + 'c)">' + B("url(#" + n + "l)") + B("url(#" + n + "w)") + B("url(#" + n + "k)") + (A ? '<g opacity="' + Jt(l.ghostAlpha) + '">' + A + "</g>" : "") + w.body + '<rect x="14" y="14" width="172" height="' + w.head + '" fill="' + Ys + '" filter="url(#' + n + 's)"/></g>' + (y ? '<g clip-path="url(#' + n + 'c)" opacity="' + Jt(l.grip) + '">' + y.lines + "</g>" : "") + '<rect x="13.5" y="13.5" width="173" height="173" rx="8.5" fill="none" stroke="' + Ec + '" stroke-width="3"/>' + (y ? '<g opacity="' + Jt(l.grip) + '">' + y.knobs + "</g>" : "") + "</svg>";
}
function Qh({ onMove: n, onSet: l }) {
  var X;
  const o = "cv" + ++Vh, c = document.createElement("div");
  c.className = "tfCoverArt";
  const m = (X = window.matchMedia) == null ? void 0 : X.call(window, "(pointer: coarse)").matches;
  let v = null;
  const w = { pos: 0, tilt: 0, vel: 0, ph: 0, grip: 0, ghost: 0, gpos: null, last: 0 };
  let A = 0, y = !1, B = !1, ge = null, oe = 0, U = 0;
  const K = () => (v == null ? void 0 : v.kind) === "curtain" ? "x" : "y", ae = () => ge || y || B || v.moving || v.target != null ? 1 : m ? performance.now() < U ? 1 : 0.4 : 0, Y = () => {
    c.innerHTML = Jh(o, { kind: v.kind, pos: w.pos, bar: v.target ?? w.pos, tilt: w.tilt, vel: w.vel, ph: w.ph, ghost: w.gpos, ghostAlpha: w.ghost, grip: w.grip });
  };
  function G(E) {
    A = 0;
    const N = w.last ? Math.min(0.064, (E - w.last) / 1e3) : 1 / 60, ie = N * 60;
    w.last = E;
    const Ae = v.pos - w.pos, I = w.pos;
    w.pos += Math.sign(Ae) * Math.min(Math.abs(Ae), Math.max(10.5, Math.abs(Ae) * 1.4) * N), Math.abs(v.pos - w.pos) < 0.03 && (w.pos = v.pos), w.vel = w.vel * 0.86 + (w.pos - I) / ie * 0.14, Math.abs(w.vel) < 0.015 && w.pos === v.pos && (w.vel = 0), (w.pos !== I || w.vel) && (w.ph += (0.06 + Math.abs(w.vel) * 0.03) * ie);
    const Ie = v.tilt - w.tilt;
    w.tilt += Math.sign(Ie) * Math.min(Math.abs(Ie), Math.max(60, Math.abs(Ie) * 4) * N);
    const V = ae();
    w.grip += (V - w.grip) * Math.min(1, N * (V > w.grip ? 11 : 3.5)), Math.abs(V - w.grip) < 0.01 && (w.grip = V);
    const qe = v.target != null && Math.abs(v.target - w.pos) > 0.5 ? 0.22 : 0;
    v.target != null && (w.gpos = v.target), w.ghost += (qe - w.ghost) * Math.min(1, N * (qe > w.ghost ? 16 : 3)), Math.abs(qe - w.ghost) < 4e-3 && (w.ghost = qe), Y(), w.pos !== v.pos || w.vel || w.tilt !== v.tilt || w.grip !== V || w.ghost !== qe ? A = requestAnimationFrame(G) : w.last = 0;
  }
  const W = () => {
    v && !A && (A = requestAnimationFrame(G));
  }, pe = setInterval(() => {
    v && !A && Y();
  }, 60 * 1e3), Q = (E) => {
    const N = c.getBoundingClientRect();
    return K() === "x" ? (E.clientX - N.left) / N.width : (E.clientY - N.top) / N.height;
  };
  c.addEventListener("pointerdown", (E) => {
    var Ae;
    if (!(v != null && v.canSet) || E.button > 0) return;
    E.preventDefault(), (Ae = c.setPointerCapture) == null || Ae.call(c, E.pointerId);
    const N = v.target ?? v.pos, ie = c.getBoundingClientRect();
    ge = { p0: Q(E), from: N, x0: E.clientX, value: null, side: null }, v.kind === "curtain" && N > 0 && (ge.side = (E.clientX - ie.left) / ie.width < 0.5 ? "L" : "R"), W();
  }), c.addEventListener("pointermove", (E) => {
    if (!ge) return;
    let N;
    if (v.kind === "curtain") {
      if (!ge.side) {
        const Ae = E.clientX - ge.x0;
        if (Math.abs(Ae) < 4) return;
        ge.side = Ae < 0 ? "L" : "R";
      }
      const ie = (Dt / 2 - Dt * 0.12) / 200;
      N = ge.from + (ge.side === "L" ? -1 : 1) * ((Q(E) - ge.p0) / ie) * 100;
    } else N = ge.from - (Q(E) - ge.p0) / (Dt / 200) * 100;
    ge.value = xo(N, 0, 100), n(ge.value);
  });
  const ue = () => {
    if (!ge) return;
    const E = ge.value;
    ge = null, E != null && l(Math.round(E)), W();
  };
  return c.addEventListener("pointerup", ue), c.addEventListener("pointercancel", ue), c.addEventListener("lostpointercapture", ue), c.addEventListener("pointerenter", () => {
    y = !0, W();
  }), c.addEventListener("pointerleave", () => {
    y = !1, W();
  }), c.addEventListener("focus", () => {
    B = c.matches(":focus-visible"), W();
  }), c.addEventListener("blur", () => {
    B = !1, W();
  }), c.addEventListener("keydown", (E) => {
    if (!(v != null && v.canSet)) return;
    const N = Math.round(v.target ?? v.pos), ie = E.shiftKey ? 10 : 1, Ae = { ArrowUp: N + ie, ArrowRight: N + ie, ArrowDown: N - ie, ArrowLeft: N - ie, PageUp: N + 25, PageDown: N - 25, Home: 0, End: 100 }[E.key];
    if (Ae == null) return;
    E.preventDefault();
    const I = xo(Ae, 0, 100);
    n(I), clearTimeout(oe), oe = setTimeout(() => l(I), 500);
  }), {
    el: c,
    update(E) {
      const N = !v;
      v = E, N && (w.pos = v.pos, w.tilt = v.tilt, U = performance.now() + 1500, m && setTimeout(W, 1600)), c.classList.toggle("x", K() === "x"), c.classList.toggle("y", K() === "y"), v.canSet ? (c.tabIndex = 0, c.setAttribute("role", "slider"), c.setAttribute("aria-valuemin", "0"), c.setAttribute("aria-valuemax", "100"), c.setAttribute("aria-valuenow", String(Math.round(v.target ?? v.pos))), c.setAttribute("aria-orientation", K() === "x" ? "horizontal" : "vertical")) : c.setAttribute("role", "img"), c.setAttribute("aria-label", v.name + (v.canSet ? " position" : "")), c.setAttribute("aria-valuetext", v.text), W();
    },
    destroy() {
      cancelAnimationFrame(A), A = 0, clearInterval(pe), clearTimeout(oe), c.remove();
    }
  };
}
const Rc = "move-assistant-density", Ei = {
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
}, re = (n) => String(n ?? "").replace(/[&<>"']/g, (l) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[l]), Ld = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 12H5"/><path d="M12 19L5 12L12 5"/></svg>', Nc = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M15 18L9 12L15 6"/></svg>', ef = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6L18 18"/><path d="M18 6L6 18"/></svg>', Hl = {
  prev: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6h2v12H6zM9.5 12L18 18V6z"/></svg>',
  next: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16 6h2v12h-2zM6 18l8.5-6L6 6z"/></svg>',
  play: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>',
  pause: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 5h4v14H6zM14 5h4v14h-4z"/></svg>'
}, Pc = {
  down: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 11h14v2H5z"/></svg>',
  up: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11 5h2v6h6v2h-6v6h-2v-6H5v-2h6z"/></svg>'
}, Ic = 1, tf = 4, Hc = 16, Fc = 32, af = 128, nf = 256, Oc = 16384, of = 1, rf = 2, Wc = 4, sf = 8, lf = {
  open: '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 7l-5 5 5 5"/><path d="M16 7l5 5-5 5"/></svg>',
  stop: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="7" y="7" width="10" height="10" rx="2.5" fill="currentColor"/></svg>',
  close: '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7l5 5-5 5"/><path d="M21 7l-5 5 5 5"/></svg>'
}, qc = { curtain: ["mdi:curtains", "mdi:curtains-closed"], blind: ["mdi:roller-shade", "mdi:roller-shade-closed"], venetian: ["mdi:blinds-horizontal", "mdi:blinds-horizontal-closed"] }, df = { curtain: "curtains", blind: "blind", venetian: "blinds" }, Ad = {
  light: { name: "Lights", icon: "mdi:lightbulb", colour: "#ffc107" },
  climate: { name: "Climate", icon: "mdi:home-thermometer", colour: "#ff5722" },
  security: { name: "Security", icon: "mdi:security", colour: "#607d8b" },
  media_players: { name: "Media players", icon: "mdi:multimedia", colour: "#2196f3" },
  maintenance: { name: "Maintenance", icon: "mdi:wrench", colour: "#9e9e9e" },
  energy: { name: "Energy", icon: "mdi:lightning-bolt", colour: "#ffc107" }
}, zc = "move_assistant_house", jc = "move-assistant-house-used", cf = ["switch", "fan", "input_boolean", "automation"], Vc = "move-assistant-house-look", pf = [["popup", "Popup"], ["sheet", "Sheet"]], uf = [["auto", "Automatic"], ["cut", "Cut short"], ["wrap", "Two lines"], ["scroll", "Scroll"]], hf = [["day", "Daytime 06–22"], ["waking", "Waking 07–23"], ["all", "All day"]], ff = [["bitmap", "Pixel"], ["onebit", "1-bit"], ["smooth", "Smooth"], ["line", "Line"]], _d = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7,19V17H9V19H7M11,19V17H13V19H11M15,19V17H17V19H15M7,15V13H9V15H7M11,15V13H13V15H11M15,15V13H17V15H15M7,11V9H9V11H7M11,11V9H13V11H11M15,11V9H17V11H15M7,7V5H9V7H7M11,7V5H13V7H11M15,7V5H17V7H15Z"/></svg>', mf = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z"/></svg>', gf = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z"/></svg>', Gc = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11.83,9L15,12.16C15,12.11 15,12.05 15,12A3,3 0 0,0 12,9C11.94,9 11.89,9 11.83,9M7.53,9.8L9.08,11.35C9.03,11.56 9,11.77 9,12A3,3 0 0,0 12,15C12.22,15 12.44,14.97 12.65,14.92L14.2,16.47C13.53,16.8 12.79,17 12,17A5,5 0 0,1 7,12C7,11.21 7.2,10.47 7.53,9.8M2,4.27L4.28,6.55L4.73,7C3.08,8.3 1.78,10 1,12C2.73,16.39 7,19.5 12,19.5C13.55,19.5 15.03,19.2 16.38,18.66L16.81,19.08L19.73,22L21,20.73L3.27,3M12,7A5,5 0 0,1 17,12C17,12.64 16.87,13.26 16.64,13.82L19.57,16.75C21.07,15.5 22.27,13.86 23,12C21.27,7.61 17,4.5 12,4.5C10.6,4.5 9.26,4.75 8,5.2L10.17,7.35C10.74,7.13 11.35,7 12,7Z"/></svg>', Uc = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"/></svg>', Yc = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>', Ap = (n) => '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">' + n.map((l) => '<path d="' + l + '"/>').join("") + "</svg>", Zc = Ap(["M12 20H21", "M16.5 3.5C17.33 2.67 18.67 2.67 19.5 3.5C20.33 4.33 20.33 5.67 19.5 6.5L7 19L3 20L4 16L16.5 3.5Z"]), vf = Ap(["M20 6L9 17L4 12"]), bo = (n, l = "") => '<span class="tfAreaGlyph" data-icon-for="' + re(n || "") + '"' + (l ? ' data-icon-name="' + re(l) + '"' : "") + "></span>", bf = (n) => '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.8l2.8 6 6.6.6-5 4.4 1.5 6.5L12 17l-5.9 3.3 1.5-6.5-5-4.4 6.6-.6z" fill="' + (n ? "currentColor" : "none") + '" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>', wf = 1, xf = [["disarmed", "Off", "alarm_disarm", 0], ["armed_home", "Home", "alarm_arm_home", 1], ["armed_away", "Away", "alarm_arm_away", 2], ["armed_night", "Night", "alarm_arm_night", 4]], Kc = { disarmed: "Disarmed", armed_home: "Armed home", armed_away: "Armed away", armed_night: "Armed night", armed_vacation: "Armed vacation", arming: "Arming", pending: "Pending", triggered: "Triggered", disarming: "Disarming" }, Ed = ["hs", "xy", "rgb", "rgbw", "rgbww"], Fl = ["door", "window", "garage_door", "opening"], $c = { moisture: ["detected water", "dry"], smoke: ["detected smoke", "clear"], gas: ["detected gas", "clear"], carbon_monoxide: ["detected carbon monoxide", "clear"], safety: ["became unsafe", "safe"] }, Ol = ["light", "climate", "cover", "humidifier", "media_player", "vacuum", "lock", "alarm_control_panel", "valve"], yf = ["light", "switch", "fan", "lock", "cover", "climate", "humidifier", "media_player", "alarm_control_panel", "vacuum", "valve", "binary_sensor"], kf = 10, Mf = 20, Sf = { electricity: "mdi:lightning-bolt", solar: "mdi:solar-power-variant", gas: "mdi:fire", water: "mdi:water" }, Cf = ["living room", "bedroom", "office"];
function Tf(n, { config: l, getHass: o }) {
  var Cl, Tl, dr;
  const c = (e) => n.getElementById(e), m = c("app"), w = String((l || {}).layout || "").toLowerCase().replace("_", "-") === "test-focus";
  let A = Ei.get(Rc) === "1", y = {};
  const B = (e) => {
    var a;
    return (a = o()) == null ? void 0 : a.callWS(e);
  }, ge = (e, a, i) => B({ type: "call_service", domain: e, service: a, service_data: i }), oe = n.querySelector("#appearancePane .toggleList");
  oe && !c("densityToggle") && (oe.insertAdjacentHTML(
    "afterbegin",
    '<div class="toggleRow"><div><strong>Show density</strong><div class="status">Each card’s height, and how many readings fit on the screen.</div></div><button class="switch" id="densityToggle" type="button" aria-label="Show density"></button></div>'
  ), c("densityToggle").addEventListener("click", () => {
    A = !A, Ei.set(Rc, A ? "1" : "0"), X();
  }));
  const U = [
    ["weather", "Weather", "The forecast under Home.", (e) => e.startsWith("weather.")],
    ["grid", "Energy", "Power from the grid, for Energy.", (e) => e.startsWith("sensor.") && kt(e).device_class === "power" && /^(W|kW)$/.test(kt(e).unit_of_measurement || "")],
    ["alarm", "Alarm", "The alarm in the Security popup.", (e) => e.startsWith("alarm_control_panel.")]
  ], K = (e, a, i, d) => '<div class="themeChoice" id="' + e + '" role="group" aria-label="' + a + '">' + d.map(([u, f]) => '<button class="wxLayoutBtn" type="button" aria-pressed="false" ' + i + '="' + u + '">' + f + "</button>").join("") + "</div>", ae = (e, a, i, d) => '<div class="toggleRow"' + (d ? ' id="' + d + '"' : "") + "><div><strong>" + e + "</strong>" + (a ? '<div class="status">' + a + "</div>" : "") + "</div>" + i + "</div>";
  function Y() {
    var k, D, H, O, ce, Se;
    if (!w || c("housePane")) return;
    const e = c("settingsView");
    e.querySelector(".settingsTitle").textContent = "HomeCore";
    const a = [["look", "Appearance"], ["lights", "Lights"], ["sources", "Sources"], ["sums", "Summaries"]], i = (Ne, ee) => '<div class="houseTab' + (Ne === "look" ? " active" : "") + '" data-house-pane="' + Ne + '"><section class="card">' + ee + "</section></div>";
    e.querySelector(".rubberTabs").insertAdjacentHTML("afterend", '<div class="settingsPane active" id="housePane"><div class="tabs rubberTabs houseTabs"><div class="rubberIndicator" aria-hidden="true"></div>' + a.map(([Ne, ee]) => '<button class="tab segBtn' + (Ne === "look" ? " active" : "") + '" type="button" data-house-tab="' + Ne + '">' + ee + "</button>").join("") + "</div>" + i("look", '<div class="toggleList" id="houseLook"></div>') + i("lights", '<p class="note tfTableNote">This is an example of a table. It is not how to control features in lights.</p><div class="metaTableWrap"><table class="metaTable tfLightTable"><thead><tr><th>Light</th><th>Room</th><th>Now</th><th class="metaSwitchCol">Favourite</th><th>Tile</th><th>Pad</th></tr></thead><tbody id="lightRows"></tbody></table></div>') + i("sources", '<div class="toggleList">' + U.map(([Ne, ee, xe]) => ae(ee, xe, '<select class="settingsSelect" data-source="' + Ne + '" aria-label="' + ee + '"></select>')).join("") + "</div>") + i("sums", '<div class="toggleList">' + Object.entries(Ad).map(([Ne, ee]) => ae(ee.name, "", '<button class="switch" type="button" role="switch" data-sum-toggle="' + Ne + '" aria-label="' + ee.name + ' summary"></button>')).join("") + "</div>") + "</div>");
    const d = c("houseLook");
    [(k = e.querySelector(".themeBtn")) == null ? void 0 : k.closest(".toggleRow"), (D = c("densityToggle")) == null ? void 0 : D.closest(".toggleRow"), (H = c("moreInfoChoice")) == null ? void 0 : H.closest(".toggleRow"), (O = c("namesChoice")) == null ? void 0 : O.closest(".toggleRow"), (ce = c("hoursChoice")) == null ? void 0 : ce.closest(".toggleRow"), (Se = c("wxStyleChoice")) == null ? void 0 : Se.closest(".toggleRow")].forEach((Ne) => Ne && d.appendChild(Ne)), d.insertAdjacentHTML("beforeend", ae("Lights", "How lights show on the house page.", K("lightsChoice", "Lights", "data-lights", [["tile", "HomeCore tile"], ["dac", "Dual Axis Controller"]]), "lightsRow") + ae("Pad", "What the Dual Axis Controller’s pad sets on its tile.", K("dacPadChoice", "Pad", "data-dac-pad", [["temperature", "Temperature"], ["colour", "Colour"]]), "dacPadRow"));
    const u = c("housePane"), f = u.querySelector(".houseTabs"), h = f.querySelector(".rubberIndicator"), b = (Ne) => {
      const ee = f.querySelector(".tab.active");
      h.style.transition = Ne ? "" : "none", h.style.left = ee.offsetLeft + "px", h.style.width = ee.offsetWidth + "px", Ne && (h.style.transform = "scaleX(1.08)", setTimeout(() => h.style.transform = "", 180));
    };
    new ResizeObserver(() => b(!1)).observe(f), u.addEventListener("click", (Ne) => {
      const ee = Ne.target.closest("[data-house-tab]");
      if (ee) {
        f.querySelectorAll(".tab").forEach((be) => be.classList.toggle("active", be === ee)), u.querySelectorAll(".houseTab").forEach((be) => be.classList.toggle("active", be.dataset.housePane === ee.dataset.houseTab)), ee.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "smooth" }), b(!0);
        return;
      }
      const xe = Ne.target.closest("[data-light-fav]");
      if (xe) {
        Qs(xe.dataset.lightFav);
        return;
      }
      const z = Ne.target.closest("[data-lights],[data-dac-pad],[data-sum-toggle]");
      if (!(!z || z.disabled)) {
        if (z.dataset.lights && (mt.lights = z.dataset.lights), z.dataset.dacPad && (mt.dacPad = z.dataset.dacPad), (z.dataset.lights || z.dataset.dacPad) && (Xe(), Re.clear()), z.dataset.sumToggle) {
          const be = z.dataset.sumToggle, $ = new Set(q.hiddenSums || []);
          $.has(be) ? $.delete(be) : $.add(be), q = { ...q, hiddenSums: [...$] }, Ha();
        }
        $a();
      }
    }), u.addEventListener("change", (Ne) => {
      const ee = Ne.target;
      ee.dataset.source && (q = { ...q, sources: { ...q.sources || {}, [ee.dataset.source]: ee.value || void 0 } }, Ha());
      const xe = ee.dataset.lightStyle || ee.dataset.lightPad;
      if (xe) {
        const z = ee.dataset.lightStyle ? "lightStyles" : "lightPads", be = { ...mt[z] };
        ee.value ? be[xe] = ee.value : delete be[xe], mt[z] = be, Xe(), [...Re.keys()].filter(($) => $.endsWith(":" + xe)).forEach(($) => Re.delete($));
      }
      $a();
    });
  }
  function G() {
    var b, k;
    at() && tt();
    const e = c("housePane");
    if (!e) return;
    const a = !!customElements.get(Fe);
    e.querySelectorAll("[data-lights]").forEach((D) => D.setAttribute("aria-pressed", String(D.dataset.lights === mt.lights))), c("lightsRow").querySelector(".status").textContent = a || !at() ? "How lights show on the house page." : Ve === "failed" ? "The Dual Axis Controller didn't load. Check the connection, or install it from HACS." : "Getting the Dual Axis Controller…", e.querySelectorAll("[data-dac-pad]").forEach((D) => D.setAttribute("aria-pressed", String(D.dataset.dacPad === mt.dacPad))), c("dacPadRow").hidden = !at();
    for (const D of e.querySelectorAll("[data-source]")) {
      if (D === n.activeElement) continue;
      const [H] = U.find(([ce]) => ce === D.dataset.source), O = Object.keys(y).filter(U.find(([ce]) => ce === H)[3]).sort((ce, Se) => ke(ce).localeCompare(ke(Se)));
      D.dataset.sig !== O.join(",") && (D.innerHTML = '<option value="">Automatic</option>' + O.map((ce) => '<option value="' + re(ce) + '">' + re(ke(ce)) + "</option>").join(""), D.dataset.sig = O.join(",")), D.value = O.includes((b = q.sources) == null ? void 0 : b[H]) ? q.sources[H] : "";
    }
    e.querySelectorAll("[data-sum-toggle]").forEach((D) => {
      const H = !(q.hiddenSums || []).includes(D.dataset.sumToggle);
      D.classList.toggle("on", H), D.setAttribute("aria-checked", String(H));
    });
    const i = c("lightRows"), d = i != null && i.contains(n.activeElement) ? n.activeElement : null;
    if (!i || d != null && d.matches("select")) return;
    const u = new Set(Ra()), f = (D, H, O, ce) => '<option value="' + D + '"' + (D === O ? " selected" : "") + ">" + H + "</option>", h = Object.keys(y).filter((D) => D.startsWith("light.")).sort((D, H) => !_t.get(D) - !_t.get(H) || (_t.get(D) || "").localeCompare(_t.get(H) || "") || ke(D).localeCompare(ke(H))).map((D) => {
      const H = mt.lightStyles[D] || "", O = mt.lightPads[D] || "", ce = u.has(D), Se = re(ke(D));
      return "<tr><td><strong>" + Se + "</strong></td><td>" + re(_t.get(D) || "—") + "</td><td>" + re(oa(D)) + '</td><td class="metaSwitchCol"><button class="switch' + (ce ? " on" : "") + '" type="button" role="switch" aria-checked="' + ce + '" data-light-fav="' + re(D) + '" aria-label="' + Se + ' is a favourite"></button></td><td><select class="settingsSelect" data-light-style="' + re(D) + '" aria-label="' + Se + ' tile">' + f("", "Default", H) + f("tile", "HomeCore tile", H) + f("dac", "Dual Axis Controller", H) + '</select></td><td><select class="settingsSelect" data-light-pad="' + re(D) + '" aria-label="' + Se + ' pad"' + (et(D) ? "" : " disabled") + ">" + f("", "Default", O) + f("temperature", "Temperature", O) + f("colour", "Colour", O) + "</select></td></tr>";
    }).join("");
    i.dataset.html !== h && (i.innerHTML = h, i.dataset.html = h, d != null && d.dataset.lightFav && ((k = i.querySelector('[data-light-fav="' + CSS.escape(d.dataset.lightFav) + '"]')) == null || k.focus({ preventScroll: !0 })));
  }
  const W = document.createElement("div");
  W.className = "densityBadge", W.setAttribute("aria-live", "polite"), W.hidden = !0, m.appendChild(W);
  let pe = 0;
  function Q() {
    if (!A) return;
    const e = c("homeView"), a = (f) => f.offsetParent !== null && !f.closest("[hidden]");
    e.querySelectorAll(":scope .card, :scope .tfAction").forEach((f) => {
      a(f) && (f.dataset.h = Math.round(f.getBoundingClientRect().height) + " px");
    });
    const i = [...e.querySelectorAll(".activityRow, .tfAction, .wxNow")].filter(a), d = window.innerHeight, u = i.filter((f) => {
      const h = f.getBoundingClientRect();
      return h.height > 0 && h.top >= 0 && h.bottom <= d + 0.5;
    }).length;
    W.hidden = !e.classList.contains("active"), W.innerHTML = "<b>" + u + "</b><small>of " + i.length + " readings on screen</small>";
  }
  const ue = () => {
    A && requestAnimationFrame(Q);
  };
  function X() {
    var e;
    m.classList.toggle("showDensity", A), (e = c("densityToggle")) == null || e.classList.toggle("on", A), W.hidden = !A, clearInterval(pe), A && (pe = setInterval(Q, 1e3), Q());
  }
  window.addEventListener("scroll", ue, { capture: !0, passive: !0 }), window.addEventListener("resize", ue, { passive: !0 });
  const E = n.querySelector("#homeView .grid");
  let N = null, ie = null, Ae = null, I = null;
  const Ie = /* @__PURE__ */ new Map(), V = /* @__PURE__ */ new Map(), qe = /* @__PURE__ */ new Map(), M = 6;
  let _ = null;
  const C = /* @__PURE__ */ new Map(), P = /* @__PURE__ */ new Map(), fe = /* @__PURE__ */ new Map();
  let q = { favourites: null }, se = {}, me = {}, ye = [], $e = null;
  const st = (() => {
    try {
      return JSON.parse(Ei.get(jc)) || {};
    } catch {
      return {};
    }
  })();
  let _t = /* @__PURE__ */ new Map(), ya = 0;
  function Ha() {
    clearTimeout(ya), ya = setTimeout(() => Promise.resolve(B({ type: "frontend/set_user_data", key: zc, value: q })).catch(() => {
    }), 400);
  }
  const mt = (() => {
    let e = {};
    try {
      e = JSON.parse(Ei.get(Vc)) || {};
    } catch {
    }
    const a = (i, d) => Object.fromEntries(Object.entries(i || {}).filter(([, u]) => d.includes(u)));
    return {
      more: e.more === "sheet" ? "sheet" : "popup",
      names: e.namesPicked && ["auto", "cut", "wrap", "scroll"].includes(e.names) ? e.names : "scroll",
      namesPicked: !!e.namesPicked,
      hoursWindow: ["day", "waking", "all"].includes(e.hoursWindow) ? e.hoursWindow : "day",
      wxStyle: ["bitmap", "onebit", "smooth", "line"].includes(e.wxStyle) ? e.wxStyle : "bitmap",
      lights: e.lights === "dac" ? "dac" : "tile",
      dacPad: e.dacPad === "colour" ? "colour" : "temperature",
      lightStyles: a(e.lightStyles, ["tile", "dac"]),
      lightPads: a(e.lightPads, ["temperature", "colour"])
    };
  })(), Xe = () => Ei.set(Vc, JSON.stringify(mt)), At = () => {
    m.dataset.more = mt.more, m.dataset.names = mt.names, $n();
  };
  w && oe && !c("moreInfoChoice") && (c("densityToggle").closest(".toggleRow").insertAdjacentHTML(
    "afterend",
    '<div class="toggleRow"><div><strong>More info</strong><div class="status">How a device opens on the house page.</div></div><div class="themeChoice" id="moreInfoChoice" role="group" aria-label="More info">' + pf.map(([e, a]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (mt.more === e) + '" data-more-style="' + e + '">' + a + "</button>").join("") + "</div></div>"
  ), c("moreInfoChoice").addEventListener("click", (e) => {
    const a = e.target.closest("[data-more-style]");
    a && (mt.more = a.dataset.moreStyle, Xe(), At(), c("moreInfoChoice").querySelectorAll("[data-more-style]").forEach((i) => i.setAttribute("aria-pressed", String(i === a))));
  }), c("moreInfoChoice").closest(".toggleRow").insertAdjacentHTML(
    "afterend",
    '<div class="toggleRow"><div><strong>Long names</strong><div class="status">How a name or state too long for its space shows.</div></div><div class="themeChoice" id="namesChoice" role="group" aria-label="Long names">' + uf.map(([e, a]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (mt.names === e) + '" data-names-style="' + e + '">' + a + "</button>").join("") + "</div></div>"
  ), c("namesChoice").addEventListener("click", (e) => {
    const a = e.target.closest("[data-names-style]");
    a && (mt.names = a.dataset.namesStyle, mt.namesPicked = !0, Xe(), At(), c("namesChoice").querySelectorAll("[data-names-style]").forEach((i) => i.setAttribute("aria-pressed", String(i === a))));
  }), c("namesChoice").closest(".toggleRow").insertAdjacentHTML(
    "afterend",
    '<div class="toggleRow"><div><strong>Next hours</strong><div class="status">The hours each day shows on the Weather page.</div></div><div class="themeChoice" id="hoursChoice" role="group" aria-label="Next hours">' + hf.map(([e, a]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (mt.hoursWindow === e) + '" data-hours-window="' + e + '">' + a + "</button>").join("") + "</div></div>"
  ), c("hoursChoice").addEventListener("click", (e) => {
    const a = e.target.closest("[data-hours-window]");
    a && (mt.hoursWindow = a.dataset.hoursWindow, Xe(), Ke == null || Ke.refresh(), c("hoursChoice").querySelectorAll("[data-hours-window]").forEach((i) => i.setAttribute("aria-pressed", String(i === a))));
  }), c("hoursChoice").closest(".toggleRow").insertAdjacentHTML(
    "afterend",
    '<div class="toggleRow"><div><strong>Weather art</strong><div class="status">How the weather and the sky are drawn.</div></div><div class="themeChoice" id="wxStyleChoice" role="group" aria-label="Weather art">' + ff.map(([e, a]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (mt.wxStyle === e) + '" data-wx-style="' + e + '">' + a + "</button>").join("") + "</div></div>"
  ), c("wxStyleChoice").addEventListener("click", (e) => {
    const a = e.target.closest("[data-wx-style]");
    a && (mt.wxStyle = a.dataset.wxStyle, Xe(), Ke == null || Ke.setStyle(mt.wxStyle), zt == null || zt.forEach((i) => i.setStyle(mt.wxStyle)), c("wxStyleChoice").querySelectorAll("[data-wx-style]").forEach((i) => i.setAttribute("aria-pressed", String(i === a))));
  })), Y();
  let Je = { rooms: [], vacuums: [], homeVacuums: [], grid: null, security: { alarms: [], locks: [], openings: [] } };
  const va = /* @__PURE__ */ new Map();
  let _a = "";
  const mr = w ? iu({ onChange: () => Tt() }) : null;
  w && m.classList.add("house");
  const lt = Object.assign(document.createElement("div"), { className: "tfBento" });
  let Ke = null, xt = null, yo = !1;
  function gr(e) {
    const a = yn();
    if (m.classList.toggle("houseBento", !!a), Ke && (xt !== a || e == null) && (Ke.destroy(), Ke = null), !a || e == null) {
      lt.remove();
      return;
    }
    lt.isConnected || E.append(lt), lt.style.order = e, !Ke && !yo && (Ke = _c(lt, { getHass: o, entityId: a, style: mt.wxStyle, hoursWindow: () => mt.hoursWindow }), xt = a);
  }
  const Bi = [["wx", ["current"]], ["avg", ["compared_to_average"]], ["aq", ["aq_tile"]], ["pollen", ["pollen_tile"]], ["radar", ["radar_tile"]]], ka = ["aq", "pollen", "radar"], ut = Object.fromEntries(Bi.map(([e]) => [e, Object.assign(document.createElement("div"), { className: "tfDashBento tfDash-" + e })]));
  let zt = null, vr = null;
  function Yo(e) {
    const a = yn();
    zt && vr !== a && (zt.forEach((i) => i.destroy()), zt = null), Object.values(ut).forEach((i) => a ? !i.isConnected && E.append(i) : i.remove()), a && !zt && !yo && (zt = Bi.map(([i, d]) => _c(ut[i], { getHass: o, entityId: a, style: mt.wxStyle, cards: d, onOpen: i === "wx" ? () => ks("weather") : void 0 })), vr = a);
  }
  const kt = (e) => {
    var a;
    return ((a = y[e]) == null ? void 0 : a.attributes) || {};
  }, ke = (e) => kt(e).friendly_name || e, jt = (e, a) => cr(e) || (Number(kt(e).supported_features) & a) === a, Oe = (e) => {
    const a = String(e ?? "").replace(/_/g, " ");
    return a.charAt(0).toUpperCase() + a.slice(1);
  }, Fa = (e, a = 1) => Number(e).toLocaleString(void 0, { minimumFractionDigits: a, maximumFractionDigits: a }), In = (e) => (e == null ? void 0 : e.state) === "on" ? e.attributes.brightness != null ? Math.max(1, Math.round(e.attributes.brightness / 2.55)) : 100 : 0, Ri = (e) => kt(e).supported_color_modes || [], Ge = (e) => {
    const a = e / 100;
    return [a <= 66 ? 255 : 329.7 * Math.pow(a - 60, -0.1332), a <= 66 ? 99.47 * Math.log(a) - 161.12 : 288.12 * Math.pow(a - 60, -0.0755), a >= 66 ? 255 : a <= 19 ? 0 : 138.52 * Math.log(a - 10) - 305.04];
  }, ot = (e, a) => [5, 3, 1].map((i) => {
    const d = (i + e / 60) % 6;
    return 255 * (1 - a / 100 * Math.max(0, Math.min(d, 4 - d, 1)));
  }), ea = (e) => (e /= 255, e <= 0.03928 ? e / 12.92 : Math.pow((e + 0.055) / 1.055, 2.4)), ko = (e) => {
    const a = 0.2126 * ea(e[0]) + 0.7152 * ea(e[1]) + 0.0722 * ea(e[2]);
    return (a + 0.05) / 0.0664 > 1.05 / (a + 0.05);
  }, Oa = (e) => 0.2126 * ea(e[0]) + 0.7152 * ea(e[1]) + 0.0722 * ea(e[2]), ta = (e, a) => {
    const i = Oa(e), d = Oa(a);
    return (Math.max(i, d) + 0.05) / (Math.min(i, d) + 0.05);
  }, Zo = (e, a) => {
    const i = ko(e);
    for (let d = 0.1; d < 1; d += 0.02) {
      const u = e.map((f) => Math.round(i ? f * (1 - d) : f + (255 - f) * d));
      if (ta(u, e) >= a) return "rgb(" + u.join(",") + ")";
    }
    return i ? "#26221e" : "#ffffff";
  };
  function ra(e) {
    const a = kt(e), i = (a.rgb_color || (a.hs_color && a.color_mode !== "color_temp" ? ot(...a.hs_color) : a.color_temp_kelvin ? Ge(a.color_temp_kelvin) : [255, 170, 0])).map((d) => Math.round(Math.max(0, Math.min(255, d))));
    return "--light:rgb(" + i.join(",") + ");--light-ink:" + Zo(i, 3.5);
  }
  const Hn = (e) => {
    var a;
    return e.startsWith("light.") && ((a = y[e]) == null ? void 0 : a.state) === "on" ? ' data-light style="' + ra(e) + '"' : "";
  }, Fn = (e) => {
    const a = Ri(e);
    return a.length ? a.some((i) => i !== "onoff") : kt(e).brightness != null;
  }, Mo = (e) => [kt(e).min_color_temp_kelvin || 2e3, kt(e).max_color_temp_kelvin || 6500], Ut = (e) => new Date(e).toLocaleTimeString(void 0, { hour: "2-digit", minute: "2-digit" });
  function On(e) {
    const a = Math.max(1, Math.round((Date.now() - e) / 1e3));
    if (a < 10) return "Just now";
    if (a < 60) return a + " seconds ago";
    const i = Math.round(a / 60);
    if (i < 60) return i + (i === 1 ? " minute ago" : " minutes ago");
    const d = Math.round(i / 60);
    if (d < 24) return d + (d === 1 ? " hour ago" : " hours ago");
    const u = Math.round(d / 24);
    return u + (u === 1 ? " day ago" : " days ago");
  }
  const Wa = (e) => {
    var a;
    return kt(e).current_position ?? (((a = y[e]) == null ? void 0 : a.state) === "closed" ? 0 : 100);
  }, Wn = (e) => {
    var a;
    return ht("pos", e, ((a = C.get(e)) == null ? void 0 : a.pos) ?? Wa(e));
  }, ao = (e) => {
    var a;
    return ht("tilt", e, ((a = C.get(e)) == null ? void 0 : a.tilt) ?? kt(e).current_tilt_position);
  };
  function oa(e) {
    var h;
    const a = y[e];
    if (!a) return "Not found";
    if (a.state === "unavailable") return "Unavailable";
    const i = a.attributes, d = e.split(".")[0];
    if (d === "light") {
      if (a.state !== "on") return "Off";
      const b = i.color_temp_kelvin;
      return (Fn(e) ? In(a) + "%" : "On") + (i.color_mode === "color_temp" && b ? " · " + Number(b).toLocaleString() + "k" : Ed.includes(i.color_mode) ? " · Colour" : "");
    }
    if (d === "climate") return (a.state === "off" ? "Off" : Oe(i.hvac_action || a.state)) + " · " + Fa(i.current_temperature) + " °C now";
    if (d === "cover") {
      const b = Wa(e), k = i.current_tilt_position;
      return a.state === "opening" || a.state === "closing" ? Oe(a.state) + " - " + b + "%" : (b <= 0 ? "Closed" : b >= 100 ? "Open" : "Partially open") + (k > 0 && k < 100 ? " · tilted" : "");
    }
    if (d === "humidifier") return a.state !== "on" ? "Off" : Oe(i.action || "on") + " · " + i.current_humidity + "% now";
    if (d === "vacuum") return Oe(a.state) + (a.state === "cleaning" && ((h = i.rooms) != null && h.length) ? " · " + i.rooms.join(", ") : "") + (i.battery_level != null ? " · " + i.battery_level + "%" : "");
    if (d === "media_player") return a.state === "playing" || a.state === "paused" ? (a.state === "paused" ? "Paused · " : "") + (i.media_title || "Playing") : Oe(a.state);
    if (d === "alarm_control_panel") return Kc[a.state] || Oe(a.state);
    if (d === "lock" || d === "valve") return Oe(a.state);
    if (d === "switch") return a.state === "on" ? "On" : "Off";
    if (d === "plant") return a.state === "ok" ? "Healthy" : Oe(i.problem);
    if (d === "binary_sensor")
      return i.device_class === "battery" ? a.state === "on" ? "Low" : "Normal" : i.device_class === "problem" ? a.state === "on" ? "Problem" : "OK" : i.device_class === "moisture" ? a.state === "on" ? "Wet" : "Dry" : Fl.includes(i.device_class) ? a.state === "on" ? "Open" : "Closed" : a.state === "on" ? "Detected" : "Clear";
    if (i.rang) return "Rang at " + Ut(i.rang);
    const u = o();
    if (u != null && u.formatEntityState && !cr(e))
      try {
        return u.formatEntityState(a);
      } catch {
      }
    const f = Number(a.state);
    if (a.state !== "" && Number.isFinite(f)) {
      const b = Math.abs(f) >= 100 ? 0 : Math.abs(f) >= 10 ? 1 : 2, k = i.unit_of_measurement ? i.unit_of_measurement === "%" ? "%" : " " + i.unit_of_measurement : "";
      return f.toLocaleString(void 0, { maximumFractionDigits: b }) + k + (i.plant_low ? " · Low" : i.plant_high ? " · High" : "");
    }
    return Oe(a.state);
  }
  const qn = (e) => e >= 1e3 ? Fa(e / 1e3, 2) + " kW" : Math.round(e).toLocaleString() + " W";
  function sn(e) {
    var i, d;
    const a = o();
    e.querySelectorAll("[data-icon-for]").forEach((u) => {
      var b;
      const f = y[u.dataset.iconFor], h = u.dataset.iconName || "";
      if (customElements.get("ha-state-icon") && f && !h) {
        let k = u.firstElementChild;
        (!k || k.localName !== "ha-state-icon") && (u.textContent = "", k = document.createElement("ha-state-icon"), u.appendChild(k)), k.hass = a, k.stateObj = f;
      } else if (customElements.get("ha-icon")) {
        let k = u.firstElementChild;
        (!k || k.localName !== "ha-icon") && (u.textContent = "", k = document.createElement("ha-icon"), u.appendChild(k)), k.icon = h || ((b = f == null ? void 0 : f.attributes) == null ? void 0 : b.icon) || "mdi:circle-medium";
      } else u.textContent || (u.textContent = (u.dataset.letter || ke(u.dataset.iconFor) || "?").trim().charAt(0).toUpperCase());
    }), (i = e.querySelectorAll) == null || i.call(e, ".tfIcon").forEach(Ni), (d = e.classList) != null && d.contains("tfIcon") && Ni(e), Hi();
  }
  const Ko = /* @__PURE__ */ new Map();
  function Ni(e) {
    var f, h, b;
    const a = (((f = e.closest("[data-k]")) == null ? void 0 : f.dataset.k) || "") + "|" + (e.dataset.iconFor || ((h = e.querySelector("[data-icon-for]")) == null ? void 0 : h.dataset.iconFor) || e.getAttribute("aria-label") || ""), i = getComputedStyle(e), d = { backgroundColor: i.backgroundColor, color: i.color }, u = Ko.get(a);
    Ko.set(a, d), !(!u || u.backgroundColor === d.backgroundColor && u.color === d.color || (b = window.matchMedia) != null && b.call(window, "(prefers-reduced-motion: reduce)").matches) && e.animate([u, d], { duration: 180, easing: "ease" });
  }
  const Pi = "[data-icon-for]>:is(ha-state-icon,ha-icon),.tfIcon>svg", Qr = (e) => {
    const a = [e];
    for (; a.length; ) {
      const i = a.shift();
      if (i.localName === "svg") return i;
      i.shadowRoot && a.push(...i.shadowRoot.children), a.push(...i.children);
    }
    return null;
  };
  function Mt(e) {
    var Se, Ne, ee;
    const a = e.localName === "svg" ? e : Qr(e), i = a ? [...a.querySelectorAll("path,rect,circle,ellipse,polygon,polyline,line")] : [];
    if (!i.length) return !a;
    const d = (Se = e.closest(".tfIcon")) == null ? void 0 : Se.offsetWidth;
    if (d === void 0) return !0;
    if (!d) return !1;
    const u = d + "|" + i.map((xe) => xe.getAttribute("d") || xe.localName).join("|");
    if (e.dataset.fitted === u) return !0;
    let f = 1 / 0, h = 1 / 0, b = -1 / 0, k = -1 / 0;
    for (const xe of i) {
      const z = xe.getBBox(), be = getComputedStyle(xe), $ = be.stroke !== "none" ? (parseFloat(be.strokeWidth) || 0) / 2 : 0;
      !z.width && !z.height || (f = Math.min(f, z.x - $), h = Math.min(h, z.y - $), b = Math.max(b, z.x + z.width + $), k = Math.max(k, z.y + z.height + $));
    }
    if (!(b > f)) return !1;
    const D = (ee = (Ne = a.viewBox) == null ? void 0 : Ne.baseVal) != null && ee.width ? a.viewBox.baseVal : { x: 0, y: 0, width: 24, height: 24 }, H = d - 14, O = H * D.width / Math.max(b - f, k - h), ce = O / D.width;
    return e.localName === "svg" ? (e.style.width = O + "px", e.style.height = O + "px") : e.style.setProperty("--mdc-icon-size", O + "px"), a.style.translate = ((D.x + D.width / 2 - (f + b) / 2) * ce).toFixed(2) + "px " + ((D.y + D.height / 2 - (h + k) / 2) * ce).toFixed(2) + "px", e.dataset.fitted = u, !0;
  }
  let qa = 0;
  function Ii(e = 0) {
    clearTimeout(qa), [...n.querySelectorAll(Pi)].filter((i) => !Mt(i)).length && e < 5 && (qa = setTimeout(() => Ii(e + 1), 300));
  }
  function Hi() {
    clearTimeout(qa), qa = setTimeout(() => Ii(), 60);
  }
  const Ea = (e) => {
    var a, i, d;
    return e.startsWith("light.") && y[e] && !kt(e).icon && !((d = (i = (a = o()) == null ? void 0 : a.entities) == null ? void 0 : i[e]) != null && d.icon) ? "mdi:lightbulb" : "";
  }, Bt = (e, a, i) => (a = a || Ea(e), ' data-icon-for="' + re(e) + '"' + (a ? ' data-icon-name="' + re(a) + '"' : "") + (i ? ' data-letter="' + re(i) + '"' : "")), ia = (e) => e.endsWith("_solar_power") ? "mdi:solar-power-variant" : kt(e).rang ? "mdi:doorbell" : "", Ct = (e, a, i, d) => re([e, a, i, d ? JSON.stringify(d) : ""].join("|")), no = (e) => re(JSON.stringify(e));
  function Cn(e, a) {
    var u, f;
    const i = re(ke(a) + ", " + oa(a));
    return '<div class="activityRow' + (Number.isFinite(Number((u = y[a]) == null ? void 0 : u.state)) && ((f = y[a]) == null ? void 0 : f.state) !== "" ? ' tap" role="button" tabindex="0" data-open="' + re(e + "|" + a) + '" aria-label="' + i + '. Show the last 24 hours"' : '" aria-label="' + i + '"') + '><div class="tfIcon" aria-hidden="true"' + Bt(a, ia(a)) + '></div><div><div class="activityRowName">' + re(ke(a)) + '</div><div class="activityRowMeta">' + re(oa(a)) + "</div></div></div>";
  }
  const So = (e, a, i) => '<div class="activityRow" aria-label="' + re(e + ", " + a) + '"><div class="tfIcon" aria-hidden="true"' + Bt("", i, e) + '></div><div><div class="activityRowName">' + re(e) + '</div><div class="activityRowMeta">' + re(a) + "</div></div></div>";
  function Da(e) {
    var i;
    const a = ((i = y[e]) == null ? void 0 : i.state) === "on";
    return '<div class="activityRow tfPlug' + (a ? " on" : "") + '"><button class="tfIcon" type="button" data-act="' + Ct("switch", "toggle", e) + '" aria-label="Turn ' + re(ke(e)) + (a ? " off" : " on") + '"' + Bt(e) + '></button><button class="tfName" type="button" data-more="' + re(e) + '" aria-label="' + re(ke(e) + ", " + oa(e) + ". More info") + '"><span class="activityRowName">' + re(ke(e)) + '</span><span class="activityRowMeta">' + re(oa(e)) + "</span></button></div>";
  }
  const Ba = (e) => {
    var a;
    return ((a = V.get(e)) == null ? void 0 : a.name) ?? ke(e);
  }, $o = (e) => {
    var a;
    return ((a = V.get(e)) == null ? void 0 : a.text) ?? oa(e);
  };
  function Xo(e) {
    var i;
    const a = (i = V.get(e)) == null ? void 0 : i.icon;
    return '<div class="tfOpen"><div class="tfOpenHead"><div class="tfIcon" aria-hidden="true"' + (a ? Bt("", a, Ba(e)) : Bt(e, ia(e))) + '></div><div><div class="activityRowName">' + re(Ba(e)) + '</div><div class="activityRowMeta">' + re($o(e)) + '</div></div><button class="tfBack" type="button" data-close aria-label="Close ' + re(Ba(e)) + '’s last 24 hours">' + Ld + '</button></div><svg class="tfGraph" data-graph="' + re(e) + '" role="img" aria-label="' + re(Ba(e)) + ', last 24 hours"></svg></div>';
  }
  function gn(e, a, i, d, u = "", f = null, h = "") {
    const b = N && N.key === e;
    return '<section class="card tfCard' + (h ? " " + h : "") + (b ? " open" : "") + '" data-tf data-k="' + re(e) + '" style="order:' + a + (b && N.h ? ";min-height:" + N.h + "px" : "") + '" aria-label="' + re(i) + '"><div class="activityHeader">' + (f ? '<button class="activityTitle tfTitleBtn" type="button" data-more="' + re(f) + '" aria-label="' + re(i + (y[f] ? ", " + oa(f) : "") + ". More info") + '">' + re(i) + "</button>" : '<div class="activityTitle">' + re(i) + "</div>") + "</div>" + (b ? Xo(N.id) : '<div class="activityRows">' + d.join("") + "</div>" + u) + "</section>";
  }
  function ln(e, a) {
    const i = "readings:" + e.id, d = e.readings.map((u) => Cn(i, u));
    return e.power != null && d.push(So("Power now", qn(e.power), "mdi:flash")), gn(i, a, "Readings", d.concat(e.plugs.map(Da)));
  }
  function Ua(e, a) {
    var b;
    const i = "energy:" + e.id, [d, u] = [e.solar.find((k) => k.endsWith("_power")), e.solar.find((k) => k.endsWith("_today"))], f = [d, u].filter(Boolean).map((k) => Cn(i, k)), h = Number(((b = y[d]) == null ? void 0 : b.state) || 0) * 1e3;
    return Je.grid && (f.push(Cn(i, Je.grid)), f.push(So("House use", qn(h + Number(y[Je.grid].state)), "mdi:home-lightning-bolt"))), gn(i, a, "Energy", f, '<div class="tfCardGraph"><svg class="tfGraph" data-solar role="img" aria-label="Solar, last 24 hours"></svg></div>');
  }
  const Fi = (e, a) => gn("plant:" + e.id, a, ke(e.id), e.readings.map((i) => Cn("plant:" + e.id, i)), "", e.id);
  function Co(e, a, i, d, u, f, h = null) {
    const b = i == null ? null : Math.max(0, Math.min(1, i)), k = b == null ? 0 : Math.round(b * 100);
    return '<div class="tfBar ' + e + '" role="slider" tabindex="0" aria-label="' + re(d) + '" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + k + '"' + (u ? ' aria-valuetext="' + re(u) + '"' : "") + ' data-drag="' + re(e + "|" + a) + '">' + (h != null ? '<span class="was" aria-hidden="true" style="left:' + h + '%"></span>' : "") + (f ? b == null ? "" : '<b style="left:' + k + '%"></b>' : '<i style="width:' + k + '%"></i>') + "</div>";
  }
  const Jo = "move-assistant-house-last-bright", vn = (() => {
    try {
      return JSON.parse(Ei.get(Jo)) || {};
    } catch {
      return {};
    }
  })();
  let x = 0;
  const S = (e, a) => {
    !a || vn[e] === a || (vn[e] = a, clearTimeout(x), x = setTimeout(() => Ei.set(Jo, JSON.stringify(vn)), 500));
  }, L = (e, a, i, d) => '<div class="tfStep" role="group" aria-label="' + re(e) + '"><button type="button" data-act="' + i + '" aria-label="Lower ' + re(e.toLowerCase()) + '">' + Pc.down + "</button><output>" + re(a) + '</output><button type="button" data-act="' + d + '" aria-label="Raise ' + re(e.toLowerCase()) + '">' + Pc.up + "</button></div>", F = (e, a, i) => '<div class="' + e + '" role="group" aria-label="' + re(a) + '">' + i.filter(Boolean).map((d) => '<button type="button" data-act="' + d.act + '"' + (d.pressed != null ? ' aria-pressed="' + d.pressed + '"' : "") + (d.disabled ? " disabled" : "") + (d.aria ? ' aria-label="' + re(d.aria) + '"' : "") + ">" + (d.html || re(d.label)) + "</button>").join("") + "</div>", Z = (e, a) => "width:" + Math.round(Math.max(0, Math.min(1, (e - a * 25) / 25)) * 1e3) / 10 + "%;opacity:" + (0.6 + 0.4 * a / 3).toFixed(2), J = (e) => "left:calc(4px + " + e / 100 + " * (100% - 8px))", de = (e, a) => '<div class="tfBlocks" role="slider" tabindex="0" aria-label="' + re(ke(e)) + ' position" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + Math.round(a) + '" aria-valuetext="' + Math.round(a) + '% open" data-blocks="' + re(e) + '">' + [0, 1, 2, 3].map((i) => '<span><i style="' + Z(a, i) + '"></i><b' + (a >= (i + 1) * 25 - 12 ? ' class="lit"' : "") + ">" + (i + 1) * 25 + "<small>%</small></b></span>").join("") + '<output class="tfTip" aria-hidden="true" style="' + J(a) + '">' + Math.round(a) + "%</output></div>";
  function we(e, a) {
    e.querySelectorAll(":scope>span").forEach((d, u) => {
      d.firstElementChild.setAttribute("style", Z(a, u)), d.lastElementChild.classList.toggle("lit", a >= (u + 1) * 25 - 12);
    });
    const i = e.querySelector(".tfTip");
    i.setAttribute("style", J(a)), i.textContent = Math.round(a) + "%", e.setAttribute("aria-valuenow", String(Math.round(a))), e.setAttribute("aria-valuetext", Math.round(a) + "% open");
  }
  const ve = (e, a) => '<div class="tfTilt" role="slider" tabindex="0" aria-label="' + re(ke(e)) + ' tilt" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + Math.round(a) + '" aria-valuetext="' + Math.round(a) + '% open" data-drag="tilt|' + re(e) + '"><i style="width:calc((100% - 8px) * ' + a / 100 + ')"></i><span' + (a > 8 ? ' class="lit"' : "") + ">Shut</span><span" + (a > 92 ? ' class="lit"' : "") + ">Open</span></div>", He = (e, a, i) => '<div class="tfSeg tfCoverBtns" role="group" aria-label="' + re(ke(e)) + '">' + [
    jt(e, of) && ["open", "Open", "open_cover", a >= 100 && !i],
    jt(e, sf) && ["stop", "Stop", "stop_cover", !1],
    jt(e, rf) && ["close", "Close", "close_cover", a <= 0 && !i]
  ].filter(Boolean).map(([d, u, f, h]) => '<button type="button" data-act="' + Ct("cover", f, e) + '" aria-label="' + u + '"' + (h ? " disabled" : "") + ">" + lf[d] + "</button>").join("") + "</div>", Ce = (e, a) => '<button class="tfIcon' + (a.art ? " art" : "") + '" type="button" data-act="' + a.button.act + '" aria-label="' + re(a.button.label) + '"' + (a.art ? ' style="background-image:url(&quot;' + re(a.art) + '&quot;)"' : Bt(e, a.icon)) + "></button>", De = (e) => '<button class="tfName" type="button" data-more="' + re(e) + '" aria-label="' + re(ke(e) + ", " + oa(e) + ". More info") + '"><span class="activityRowName">' + re(ke(e)) + '</span><span class="activityRowMeta">' + re(oa(e)) + "</span></button>";
  function Be(e, a = !1, i = null) {
    const d = sa(e), u = e.startsWith("light.") && Zt(e) && !(i && _n(e) < 3), f = i || (a && e.startsWith("light.") ? ["bright"] : null), h = u ? ['<div class="tfDacPad" data-dac="' + (a ? "more:" : i ? "dash:" : "tile:") + re(e) + '"></div>'] : d.sections.map((b, k) => b && (!f || f.includes((d.parts || [])[k])) ? b : "").filter(Boolean);
    return '<div class="tfAction' + (u ? " tfDac" : "") + (d.on ? " on" : "") + '" data-k="' + re(e) + '"' + (d.tone ? ' data-tone="' + d.tone + '"' : "") + Hn(e) + '><div class="tfActionHead">' + Ce(e, d) + De(e) + "</div>" + h.join("") + "</div>";
  }
  const Fe = "dual-controller-v3", Te = "https://cdn.jsdelivr.net/gh/mbb365/Dual-Axis-Controller-v4@v9.0.5/dist/dual-axis-controller-v4.js";
  let Ve = null;
  async function tt() {
    if (Ve || customElements.get(Fe)) return;
    Ve = "loading";
    const e = await Promise.resolve().then(() => B({ type: "lovelace/resources" })).catch(() => null), a = Array.isArray(e) && e.some((d) => /dual-axis-controller/i.test(d.url || ""));
    if (await Promise.race([customElements.whenDefined(Fe), new Promise((d) => setTimeout(d, a ? 8e3 : 0))]), customElements.get(Fe)) return;
    const i = Object.assign(document.createElement("script"), { src: Te });
    i.onerror = () => {
      Ve = "failed", G();
    }, document.head.appendChild(i);
  }
  const Re = /* @__PURE__ */ new Map(), et = (e) => (mt.lightStyles[e] || mt.lights) === "dac", at = () => mt.lights === "dac" || Object.values(mt.lightStyles).includes("dac");
  function Zt(e) {
    return et(e) && !!customElements.get(Fe);
  }
  const Pe = (e) => mt.lightPads[e] || mt.dacPad, Nt = () => {
    const e = o();
    return e && {
      ...e,
      themes: { ...e.themes || {}, darkMode: !m.classList.contains("light") },
      callService: (a, i, d, ...u) => e.callService(a, ...Hs(a, i, d), ...u)
    };
  }, Vt = "ha-card,.hc.hcTile{padding:0!important;border:0!important;border-radius:0!important;background:none!important;box-shadow:none!important}.hcTileHead{display:none!important}.hc--dark{--hc-text:var(--color-text-primary,#f1f1f1)}.halo.is-size-tile .halo__pad-shell{height:var(--tf-dac-pad,198px)!important;transition:height .25s cubic-bezier(.2,.7,.3,1)}", dn = (e) => {
    !e.shadowRoot || e.shadowRoot.querySelector("style[data-tf]") || (e.shadowRoot.appendChild(Object.assign(document.createElement("style"), { textContent: Vt })).dataset.tf = "");
  }, bn = /* @__PURE__ */ new Map(), Oi = new ResizeObserver((e) => e.forEach(({ target: a }) => {
    const i = a.parentElement;
    !i || !a.offsetHeight || (i.style.removeProperty("min-height"), bn.set(i.dataset.dac, i.offsetHeight));
  }));
  function wn(e) {
    e.querySelectorAll("[data-dac]").forEach((a) => {
      const i = a.dataset.dac;
      let d = Re.get(i);
      if (!d) {
        const u = i.slice(i.indexOf(":") + 1);
        d = document.createElement(Fe), d.setConfig({ type: "custom:" + Fe, entity: u, pad: Pe(u), tap_action: { action: "none" } }), Re.set(i, d);
      }
      d.hass = Nt(), d.parentNode !== a && a.replaceChildren(d), !d.offsetHeight && bn.has(i) && (a.style.minHeight = bn.get(i) + "px"), Oi.observe(d), dn(d);
    });
  }
  function br() {
    const e = Nt();
    Re.forEach((a, i) => {
      a.isConnected ? a.hass = e : Re.delete(i);
    });
  }
  customElements.whenDefined(Fe).then(() => {
    w && (E != null && E.querySelector("[data-tf]")) && Hr($a);
  });
  const ht = (e, a, i) => qe.has(e + "|" + a) ? qe.get(e + "|" + a) : i;
  function sa(e) {
    var f;
    const a = y[e], i = a.attributes, d = e.split(".")[0], u = (h, b) => ({ act: Ct(h, "toggle", e), label: b });
    if (d === "light") {
      const h = a.state === "on", b = Ri(e), [k, D] = Mo(e), H = ht("bright", e, In(a));
      h && S(e, In(a));
      const O = ht("ct", e, h && i.color_mode === "color_temp" ? i.color_temp_kelvin : null), ce = ht("hue", e, h && Ed.includes(i.color_mode) && i.hs_color ? i.hs_color[0] : null);
      return { on: h, button: u("light", "Turn " + ke(e) + (h ? " off" : " on")), parts: ["bright", "ct", "hue"], sections: [
        Fn(e) && Co("bright", e, H / 100, ke(e) + " brightness", H + "%", !1, h ? null : vn[e] ?? null),
        b.includes("color_temp") && Co("ct", e, O == null ? null : (O - k) / (D - k), ke(e) + " warm to cool", O == null ? "" : Math.round(O) + " kelvin", !0),
        b.some((Se) => Ed.includes(Se)) && Co("hue", e, ce == null ? null : ce / 360, ke(e) + " colour", "", !0)
      ] };
    }
    if (d === "climate") {
      const h = i.target_temp_step || 0.5, b = Number(i.temperature);
      return { on: a.state !== "off", tone: a.state === "cool" || i.hvac_action === "cooling" ? "cool" : "heat", button: u("climate", "Turn " + ke(e) + (a.state === "off" ? " on" : " off")), parts: ["step", "modes"], sections: [
        Number.isFinite(b) && L("Target temperature", Fa(b) + " °C", Ct("climate", "set_temperature", e, { temperature: b - h }), Ct("climate", "set_temperature", e, { temperature: b + h })),
        F("tfSeg", "Mode", (i.hvac_modes || []).map((k) => ({ label: Oe(k), act: Ct("climate", "set_hvac_mode", e, { hvac_mode: k }), pressed: a.state === k })))
      ] };
    }
    if (d === "cover") {
      const h = a.state === "opening" || a.state === "closing", b = a.state === "closed", k = Wn(e), D = ao(e);
      return { on: !b, tone: "blue", icon: qc[Td(a)][b ? 1 : 0], button: u("cover", (b ? "Open " : "Close ") + ke(e)), parts: ["blocks", "tilt", "buttons"], sections: [
        jt(e, Wc) && de(e, k),
        D != null && ve(e, D),
        He(e, k, h)
      ] };
    }
    if (d === "humidifier") {
      const h = Number(i.humidity);
      return { on: a.state === "on", tone: "blue", icon: "mdi:air-humidifier", button: u("humidifier", "Turn " + ke(e) + (a.state === "on" ? " off" : " on")), parts: ["step", "modes"], sections: [
        Number.isFinite(h) && L("Target humidity", h + "%", Ct("humidifier", "set_humidity", e, { humidity: h - 1 }), Ct("humidifier", "set_humidity", e, { humidity: h + 1 })),
        ((f = i.available_modes) == null ? void 0 : f.length) && F("tfSeg", "Mode", i.available_modes.map((b) => ({ label: Oe(b), act: Ct("humidifier", "set_mode", e, { mode: b }), pressed: i.mode === b })))
      ] };
    }
    if (d === "media_player") {
      const h = a.state === "playing", b = a.state === "off" || a.state === "standby", k = ht("vol", e, i.volume_level), D = b ? { act: Ct("media_player", jt(e, af) ? "turn_on" : "toggle", e), label: "Turn " + ke(e) + " on" } : a.state === "playing" || a.state === "paused" ? { act: Ct("media_player", "media_play_pause", e), label: (h ? "Pause " : "Play ") + ke(e) } : { act: Ct("media_player", jt(e, nf) ? "turn_off" : "toggle", e), label: "Turn " + ke(e) + " off" };
      return { on: !b, tone: "blue", art: !b && i.entity_picture ? i.entity_picture : null, button: D, parts: ["playback", "volume"], sections: b ? [] : [
        (jt(e, Hc) || jt(e, Fc) || jt(e, Ic) || jt(e, Oc)) && F("tfSeg", "Playback", [
          { html: Hl.prev, aria: "Previous", act: Ct("media_player", "media_previous_track", e), disabled: !jt(e, Hc) },
          { html: h ? Hl.pause : Hl.play, aria: h ? "Pause" : "Play", act: Ct("media_player", "media_play_pause", e), disabled: !(jt(e, Ic) || jt(e, Oc)) },
          { html: Hl.next, aria: "Next", act: Ct("media_player", "media_next_track", e), disabled: !jt(e, Fc) }
        ]),
        jt(e, tf) && k != null && Co("vol", e, k, ke(e) + " volume", Math.round(k * 100) + "%")
      ] };
    }
    if (d === "vacuum") {
      const h = a.state === "cleaning", b = i.rooms || [], k = (H) => b.includes(H) ? b.filter((O) => O !== H) : b.concat(H), D = Ct("vacuum", h ? "pause" : "start", e, cr(e) ? { rooms: b } : null);
      return { on: h || a.state === "returning", tone: "blue", button: { act: D, label: (h ? "Pause " : "Start ") + ke(e) }, parts: ["controls", "rooms"], sections: [
        F("tfSeg", ke(e), [
          { label: h ? "Pause" : "Start", act: D },
          { label: "Dock", act: Ct("vacuum", "return_to_base", e), disabled: a.state === "docked" },
          { label: "Locate", act: Ct("vacuum", "locate", e) }
        ]),
        cr(e) && F("tfChips", "Rooms to clean", Je.rooms.filter((H) => H.id !== "balcony").map((H) => ({ label: H.name, act: Ct("vacuum", "set_rooms", e, { rooms: k(H.name) }), pressed: b.includes(H.name) })))
      ] };
    }
    if (d === "lock") {
      const h = a.state === "locked";
      return { on: !h, tone: "heat", button: { act: Ct("lock", h ? "unlock" : "lock", e), label: (h ? "Unlock " : "Lock ") + ke(e) }, parts: ["controls"], sections: [
        F("tfSeg", ke(e), [
          { label: "Lock", act: Ct("lock", "lock", e), pressed: h },
          { label: "Unlock", act: Ct("lock", "unlock", e), pressed: a.state === "unlocked" },
          jt(e, wf) && { label: "Open", act: Ct("lock", "open", e), pressed: a.state === "open" }
        ])
      ] };
    }
    if (d === "alarm_control_panel") {
      const h = a.state === "disarmed";
      return { on: !h, tone: a.state === "triggered" ? "alarm" : "blue", button: { act: Ct("alarm_control_panel", h ? "alarm_arm_away" : "alarm_disarm", e), label: h ? "Arm " + ke(e) + ", away" : "Disarm " + ke(e) }, parts: ["controls"], sections: [
        F("tfSeg", ke(e), xf.filter(([, , , b]) => !b || jt(e, b)).map(([b, k, D]) => ({ label: k, act: Ct("alarm_control_panel", D, e), pressed: a.state === b })))
      ] };
    }
    if (d === "valve") {
      const h = a.state === "open";
      return { on: h, tone: "blue", icon: "mdi:sprinkler-variant", button: u("valve", (h ? "Close " : "Open ") + ke(e)), parts: ["controls"], sections: [
        F("tfSeg", ke(e), [
          { label: "Open", act: Ct("valve", "open_valve", e), pressed: h },
          { label: "Close", act: Ct("valve", "close_valve", e), pressed: !h }
        ])
      ] };
    }
    return { on: !1, button: { act: "", label: ke(e) }, sections: [] };
  }
  const Ya = (e) => (Number.isInteger(Number(e)) ? String(Number(e)) : Fa(e)) + "°";
  function zn(e) {
    var xe;
    const a = (z) => e.readings.find((be) => kt(be).device_class === z), i = a("temperature"), d = a("humidity"), u = (z) => {
      var be;
      return Number((be = y[z]) == null ? void 0 : be.state);
    }, f = (z) => e.actions.filter((be) => z.test(be)), h = e.lights.filter((z) => {
      var be;
      return ((be = y[z]) == null ? void 0 : be.state) === "on";
    }), b = f(/^cover\./), k = b.filter((z) => {
      var be;
      return ((be = y[z]) == null ? void 0 : be.state) !== "closed";
    }), D = [...new Set(b.map((z) => Td(y[z])))], H = f(/^climate\./)[0], O = f(/^humidifier\./)[0], ce = f(/^media_player\./), Se = ce.find((z) => {
      var be;
      return ((be = y[z]) == null ? void 0 : be.state) === "playing";
    }) || ce.find((z) => {
      var be;
      return ((be = y[z]) == null ? void 0 : be.state) === "paused";
    }), Ne = e.plugs.filter((z) => {
      var be;
      return ((be = y[z]) == null ? void 0 : be.state) === "on";
    }), ee = [];
    if (i && Number.isFinite(u(i)) && ee.push({ key: "temp", id: i, kind: "reading", icon: bo(i), label: "Temperature", value: Fa(u(i)) + "°" }), d && Number.isFinite(u(d)) && ee.push({ key: "hum", id: d, kind: "reading", icon: bo(d), label: "Humidity", value: Math.round(u(d)) + "%" }), e.lights.length && ee.push({
      key: "lights",
      kind: "control",
      tone: "light",
      icon: bo("", "mdi:lightbulb"),
      label: "Lights",
      value: h.length ? h.length + " of " + e.lights.length + " on" : "All off",
      short: h.length ? h.length + " on" : "Off",
      on: h.length > 0,
      light: h.length ? ra(h[0]) : "",
      acts: e.lights.map((z) => ["light", h.length ? "turn_off" : "turn_on", z]),
      aria: (h.length ? "Turn off" : "Turn on") + " the lights in " + e.name
    }), b.length) {
      const z = D.length === 1 ? df[D[0]] : "covers", be = Math.round(b.reduce(($, Ue) => $ + Wa(Ue), 0) / b.length);
      ee.push({
        key: "covers",
        kind: "control",
        tone: "blue",
        icon: bo("", ((xe = qc[D[0]]) == null ? void 0 : xe[k.length ? 0 : 1]) || "mdi:window-shutter"),
        label: Oe(z),
        value: be <= 0 ? "Closed" : be >= 100 ? "Open" : be + "% open",
        short: be <= 0 ? "Closed" : be + "%",
        on: k.length > 0,
        acts: b.map(($) => ["cover", k.length ? "close_cover" : "open_cover", $]),
        aria: (k.length ? "Close the " : "Open the ") + z + " in " + e.name
      });
    }
    if (H) {
      const z = kt(H), be = y[H].state === "off";
      ee.push({
        key: "climate",
        kind: "control",
        tone: z.hvac_action === "cooling" ? "cool" : "heat",
        icon: bo(H),
        label: ke(H),
        value: be ? "Off" : Oe(z.hvac_action || y[H].state) + " · " + Ya(z.temperature),
        short: be ? "Off" : Ya(z.temperature),
        on: !be,
        acts: [["climate", "toggle", H]],
        aria: "Turn " + ke(H) + (be ? " on" : " off")
      });
    }
    if (O) {
      const z = y[O].state === "on";
      ee.push({
        key: "humidifier",
        kind: "control",
        tone: "blue",
        icon: bo("", "mdi:air-humidifier"),
        label: ke(O),
        value: z ? "On · " + kt(O).humidity + "%" : "Off",
        short: z ? kt(O).humidity + "%" : "Off",
        on: z,
        acts: [["humidifier", "toggle", O]],
        aria: "Turn " + ke(O) + (z ? " off" : " on")
      });
    }
    if (ce.length) {
      const z = Se || ce[0], be = y[z], $ = be.state === "playing";
      ee.push({
        key: "media",
        kind: "control",
        tone: "blue",
        icon: bo(z),
        label: ke(z),
        value: oa(z),
        short: $ ? "Playing" : be.state === "paused" ? "Paused" : Oe(be.state),
        on: $,
        acts: [["media_player", be.state === "playing" || be.state === "paused" ? "media_play_pause" : "toggle", z]],
        aria: ($ ? "Pause " : "Play ") + ke(z)
      });
    }
    return e.plugs.length && ee.push({
      key: "plugs",
      kind: "control",
      tone: "blue",
      icon: bo("", "mdi:power-plug"),
      label: "Plugs",
      value: Ne.length ? Ne.length + " of " + e.plugs.length + " on" : "All off",
      short: Ne.length ? Ne.length + " on" : "Off",
      on: Ne.length > 0,
      acts: e.plugs.map((z) => ["switch", Ne.length ? "turn_off" : "turn_on", z]),
      aria: (Ne.length ? "Turn off" : "Turn on") + " the plugs in " + e.name
    }), e.alerts.forEach((z) => ee.push(kt(z).device_class === "moisture" ? { key: "alert:" + z, kind: "alert", icon: bo(z), label: "Water leak" } : { key: "note:" + z, kind: "note", icon: bo(z), label: ke(z) + " " + oa(z).toLowerCase() })), ee;
  }
  const Tn = (e, a) => {
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
          var f;
          return ((f = y[u]) == null ? void 0 : f.state) === "playing";
        }) || d.find((u) => {
          var f;
          return ((f = y[u]) == null ? void 0 : f.state) === "paused";
        }) || d[0]].filter(Boolean);
      })()
    }[a] || [];
  }, Wi = (e, a, i) => '<button class="' + a + (e.on ? " on" : "") + '" type="button" data-tone="' + e.tone + '" data-acts="' + no(e.acts) + '" aria-label="' + re(e.aria) + '" aria-pressed="' + e.on + '">' + i + "</button>", Qo = (e) => '<button class="tfAName" type="button" data-go="' + re(e.id) + '" aria-label="Open ' + re(e.name) + '">' + re(e.name) + "</button>";
  function ba(e, a, i = !1) {
    const d = a.find((b) => b.key === "lights"), u = !!(d != null && d.on), f = "", h = '<span class="tfAreaGlyph"' + Bt("area:" + e.id, e.icon || "mdi:texture-box", e.name) + "></span>";
    return i || !d ? '<span class="tfIcon tfAreaIcon' + (u ? " on" : "") + '"' + f + ' aria-hidden="true">' + h + "</span>" : '<button class="tfIcon tfAreaIcon' + (u ? " on" : "") + '" type="button"' + f + ' data-acts="' + no(d.acts) + '" aria-label="' + re(d.aria) + '" aria-pressed="' + u + '">' + h + "</button>";
  }
  const es = (e) => e.filter((a) => a.kind === "alert" || a.kind === "note").map((a) => '<span class="sourceTag">' + re(a.label) + "</span>").join(" "), Gt = (e) => e.readings.find((a) => kt(a).device_class === "temperature") || [...e.readings, ...e.solar, ...e.openings, ...e.actions, ...e.plugs].find((a) => y[a]) || null, Zs = (e, a) => {
    const i = ke(a);
    return i.toLowerCase().startsWith(e.name.toLowerCase() + " ") ? Oe(i.slice(e.name.length + 1)) : i;
  };
  function Ks(e) {
    const a = y[e], i = kt(e), d = e.split(".")[0], u = Number(a.state);
    if (a.state === "unavailable") return { text: "Unavailable" };
    if (d === "sensor" && Number.isFinite(u)) {
      if (i.device_class === "temperature") return { text: Ya(u) };
      const f = i.unit_of_measurement || "";
      return f === "%" ? { text: Math.round(u) + "%" } : { text: Fa(u, Number.isInteger(u) ? 0 : 1), unit: f };
    }
    if (d === "climate" && (i.current_temperature ?? i.temperature) != null) return { text: Ya(i.current_temperature ?? i.temperature) };
    if (d === "light") return { text: a.state !== "on" ? "Off" : Fn(e) ? In(a) + "%" : "On" };
    if (d === "cover") {
      const f = Wa(e);
      return { text: f <= 0 ? "Closed" : f >= 100 ? "Open" : f + "%" };
    }
    return d === "humidifier" ? { text: a.state === "on" ? i.humidity + "%" : "Off" } : d === "media_player" ? { text: a.state === "playing" ? "Playing" : a.state === "paused" ? "Paused" : Oe(a.state) } : { text: oa(e) };
  }
  const $s = (e, a, i) => {
    const d = i.find((b) => b.key === "temp"), u = i.find((b) => b.key === "hum"), f = kt(a), h = y[a].state === "off";
    return a.startsWith("climate.") ? [Zs(e, a), h ? "Off" : Oe(f.hvac_action || y[a].state) + (f.temperature != null ? " · " + Ya(f.temperature) : ""), u && u.value + " humidity"].filter(Boolean).join(" · ") : [!(d && d.id === a) && Zs(e, a), d && d.id !== a && d.value, u && u.id !== a && u.value + " humidity"].filter(Boolean).join(" · ");
  };
  function ei(e, a, i) {
    const d = i && Ks(i), u = i ? $s(e, i, a) : "", f = (b) => {
      const k = Tn(e, b.key);
      return k.length === 1 ? k[0] : "group:" + e.id + ":" + b.key;
    }, h = a.filter((b) => b.kind === "control").slice(0, 4).map((b) => '<div class="tfATile' + (b.on ? " on" : "") + '" data-tone="' + b.tone + '"' + (b.light ? ' data-light style="' + b.light + '"' : "") + ">" + Wi(b, "tfIcon", b.icon) + '<button class="tfName" type="button" data-more="' + re(f(b)) + '" aria-label="' + re(e.name + " " + b.label.toLowerCase() + ", " + b.value + ". Open") + '"><span class="activityRowName">' + re(b.label) + '</span><span class="activityRowMeta">' + re(b.value) + "</span></button></div>");
    return '<div class="workoutPanelTop">' + ba(e, a) + '<div class="tfATitle">' + Qo(e) + es(a) + "</div></div>" + (i ? '<button class="tfABig" type="button" data-more="' + re(i) + '" aria-label="' + re(ke(i) + ", " + oa(i) + ". More info") + '"><span class="tfABigMain' + (d.text.length > 7 ? " long" : "") + '">' + re(d.text) + (d.unit ? '<span class="tfABigUnit">' + re(d.unit) + "</span>" : "") + "</span>" + (u ? '<span class="tfABigSub">' + re(u) + "</span>" : "") + "</button>" : "") + (h.length ? '<div class="tfATiles">' + h.join("") + "</div>" : "");
  }
  function Kl(e) {
    const a = e.id === ie, i = zn(e), d = Gt(e), u = d && Ks(d), f = [...i.filter((h) => h.kind === "control"), ...i.filter((h) => h.kind !== "control" && h.kind !== "reading")].slice(0, 4);
    return '<article class="workoutPanel tfAreaPanel' + (a ? " active" : "") + '" data-area="' + re(e.id) + '" tabindex="0" aria-expanded="' + a + '" aria-label="' + re(e.name) + '"><div class="panelExpanded"' + (a ? "" : " inert") + ">" + ei(e, i, d) + '</div><div class="panelCollapsed tfACollapsed"><div class="tfACTop">' + ba(e, i, !0) + '<span class="tfACName">' + re(e.name) + '</span></div><span class="tfACMain">' + (u ? re(u.text + (u.unit ? " " + u.unit : "")) : "") + '</span><span class="tfACTiles" aria-hidden="true">' + f.map((h) => '<span class="tfACTile"><span class="tfIcon' + (h.kind === "alert" ? " alert" : "") + '"' + (h.on && h.light ? ' data-light style="' + h.light + '"' : "") + ">" + h.icon + "</span></span>").join("") + "</span></div></article>";
  }
  let It = [];
  const jn = (e) => '<div class="tfAreas" data-tf data-k="areas" style="order:' + e + '"><section class="workoutGallery tfAreaGallery" aria-label="Areas">' + It.map(Kl).join("") + "</section></div>", ti = () => [
    { key: "home", name: "Home", ids: Je.homeVacuums },
    ...Je.rooms.map((e) => ({ key: "room:" + e.id, name: e.name, room: e, ids: e.actions }))
  ], qi = (e, a, i) => e + " " + (e === 1 ? a : i), Ra = () => (q.favourites ?? se.favorite_entities ?? []).filter((e) => y[e]);
  function wr() {
    if (!$e) {
      const a = Object.entries(st).sort((d, u) => u[1] - d[1]).map(([d]) => d), i = Je.rooms.flatMap((d) => d.actions);
      $e = [.../* @__PURE__ */ new Set([...ye, ...a, ...i.filter((d) => sa(d).on), ...i])];
    }
    const e = Ra();
    return $e.filter((a) => y[a] && y[a].state !== "unavailable" && !e.includes(a));
  }
  let zi = !1;
  function Vn() {
    if (!zi || q.favSeeded || !Je.rooms.length) return;
    const e = (i) => Object.keys(y).find((d) => cr(d) && i(d)), a = [e((i) => i.startsWith("climate.")), e((i) => i.startsWith("cover.") && /curtain/.test(i)), e((i) => i.startsWith("valve.")), Je.security.locks[0]];
    q = { ...q, favourites: [.../* @__PURE__ */ new Set([...q.favourites ?? se.favorite_entities ?? [], ...a.filter(Boolean)])], favSeeded: !0 }, Ha();
  }
  const xn = () => q.suggest ?? !se.hide_suggested_entities;
  function $l() {
    const e = new Set(q.favHidden || []), a = Ra().filter((d) => !e.has(d)), i = xn() ? wr().filter((d) => !e.has(d) && rs(d)) : [];
    return [...a, ...i].slice(0, kf);
  }
  const oo = (e) => {
    const a = Ra().includes(e);
    return '<button class="tfStar" type="button" data-star="' + re(e) + '" aria-pressed="' + a + '" aria-label="Favourite: ' + re(ke(e)) + '">' + bf(a) + "</button>";
  };
  function xr(e, { area: a = !1, star: i = !1, plain: d = !1, say: u = null, alert: f = !1 } = {}) {
    var Ne, ee, xe, z, be, $;
    const h = d && ((be = (Ne = o()) == null ? void 0 : Ne.devices) == null ? void 0 : be[(z = (xe = (ee = o()) == null ? void 0 : ee.entities) == null ? void 0 : xe[e]) == null ? void 0 : z.device_id]), b = h && (h.name_by_user || h.name) || ke(e), k = e.split(".")[0], D = !d && Ol.includes(k) ? sa(e) : null, H = D ? D.on : ["on", "open", "playing"].includes(($ = y[e]) == null ? void 0 : $.state), O = d ? null : D ? D.button : cf.includes(k) ? { act: Ct(k, "toggle", e), label: "Turn " + ke(e) + (H ? " off" : " on") } : k === "scene" || k === "script" ? { act: Ct(k, "turn_on", e), label: "Run " + ke(e) } : null, ce = (u ?? oa(e)) + (a && _t.get(e) ? " · " + _t.get(e) : ""), Se = (D == null ? void 0 : D.icon) || ia(e);
    return '<div class="activityRow' + (O ? " tfPlug" : "") + (H ? " on" : "") + (i ? " tfPick" : "") + (f ? " alert" : "") + '" data-k="' + re((a ? "fav:" : "row:") + e) + '" data-tone="' + (k === "light" ? "light" : (D == null ? void 0 : D.tone) || "blue") + '"' + Hn(e) + ">" + (O && !i ? '<button class="tfIcon" type="button" data-act="' + O.act + '" aria-label="' + re(O.label) + '"' + Bt(e, Se) + "></button>" : '<div class="tfIcon" aria-hidden="true"' + Bt(e, Se) + "></div>") + '<button class="tfName" type="button" data-more="' + re(e) + '" aria-label="' + re(b + ", " + ce + ". More info") + '"><span class="activityRowName">' + re(b) + '</span><span class="activityRowMeta">' + re(ce) + "</span></button>" + (i ? oo(e) : "") + "</div>";
  }
  const yn = () => {
    var e;
    return y[(e = q.sources) == null ? void 0 : e.weather] ? q.sources.weather : y["weather.forecast_home"] ? "weather.forecast_home" : Object.keys(y).find((a) => a.startsWith("weather."));
  };
  function Xs() {
    var i;
    const e = (d) => Object.keys(y).filter((u) => u.startsWith("binary_sensor.") && d.includes(kt(u).device_class));
    return ((i = me.alert_entities) != null && i.length ? me.alert_entities : [...e(["moisture", "smoke", "gas"]).map((d) => ({ entity: d, severity: "alert" })), ...e(Fl).map((d) => ({ entity: d, severity: "warning" }))]).filter((d) => y[d.entity]).map((d) => ({ ...d, on: ["on", "open", "unlocked", "triggered", "problem"].includes(y[d.entity].state) }));
  }
  function Xl() {
    const e = Object.keys(Ad), a = /* @__PURE__ */ new Set(), i = [];
    return (se.shortcuts || []).forEach((d) => {
      if (d.type === "summary") {
        if (!e.includes(d.key) || a.has(d.key)) return;
        a.add(d.key);
      }
      i.push(d);
    }), e.forEach((d) => {
      a.has(d) || i.push({ type: "summary", key: d });
    }), i;
  }
  function ts() {
    var xe;
    const e = ((xe = o()) == null ? void 0 : xe.entities) || {}, a = (z) => kt(z).device_class, i = Object.keys(y).filter((z) => z.startsWith("sensor.") && a(z) === "battery" || z.startsWith("binary_sensor.") && ["battery", "problem"].includes(a(z))), d = Je.rooms.flatMap((z) => z.plants.map((be) => be.id));
    if (!i.length && !d.length) return null;
    const u = (z) => {
      var $;
      const be = ($ = e[z]) == null ? void 0 : $.device_id;
      return !!be && Object.keys(y).some((Ue) => {
        var Ht;
        return Ue.startsWith("binary_sensor.") && ((Ht = e[Ue]) == null ? void 0 : Ht.device_id) === be && a(Ue) === "battery_charging" && y[Ue].state === "on";
      });
    }, f = (z) => z.startsWith("vacuum.") ? kt(z).battery_level <= 20 && y[z].state !== "docked" : z.startsWith("binary_sensor.") ? a(z) === "battery" && y[z].state === "on" : parseFloat(y[z].state) <= 20 && !u(z), h = [...i, ...Je.vacuums].filter((z) => y[z] && f(z)), b = [...i.filter((z) => a(z) === "problem" && y[z].state === "on"), ...d.filter((z) => {
      var be;
      return ((be = y[z]) == null ? void 0 : be.state) === "problem";
    })], k = i.filter((z) => y[z].state === "unavailable"), D = [.../* @__PURE__ */ new Set([...h, ...b, ...k])], H = (z) => {
      const be = parseFloat(y[z].state);
      return a(z) === "battery" && Number.isFinite(be) ? be : 101;
    }, O = [...d, ...Je.vacuums, ...[...i].sort((z, be) => H(z) - H(be))].filter((z) => y[z] && !D.includes(z)), ce = /* @__PURE__ */ new Map();
    O.forEach((z) => {
      var $;
      const be = (($ = Je.areaOf) == null ? void 0 : $.call(Je, z)) || "";
      ce.set(be, [...ce.get(be) || [], z]);
    });
    const Se = (z) => {
      const be = Je.rooms.findIndex(($) => $.id === z);
      return z === "" ? 1 / 0 : be < 0 ? Je.rooms.length : be;
    }, Ne = [...ce.keys()].sort((z, be) => Se(z) - Se(be)), ee = (z) => {
      var be, $, Ue, Ht;
      return ((be = Je.rooms.find((bt) => bt.id === z)) == null ? void 0 : be.name) || ((Ht = (Ue = ($ = o()) == null ? void 0 : $.areas) == null ? void 0 : Ue[z]) == null ? void 0 : Ht.name) || z;
    };
    return {
      value: [h.length && qi(h.length, "low battery", "low batteries"), b.length && qi(b.length, "problem", "problems"), k.length && qi(k.length, "unavailable device", "unavailable devices")].filter(Boolean).join(", ") || "All good",
      plain: !0,
      groups: [{ name: "Needs attention", ids: D, alert: !0 }, ...Ne.map((z) => ({ name: z ? ee(z) : Ne.length > 1 ? "Other devices" : "Devices", ids: ce.get(z) }))].filter((z) => z.ids.length)
    };
  }
  function ji() {
    var La;
    const e = Je.rooms, a = Je.security, i = (Ze, Ot) => Ze.actions.filter((Ws) => Ot.test(Ws)), d = (Ze) => e.map((Ot) => ({ name: Ot.name, ids: Ze(Ot) })).filter((Ot) => Ot.ids.length), u = e.flatMap((Ze) => Ze.lights), f = u.filter((Ze) => {
      var Ot;
      return ((Ot = y[Ze]) == null ? void 0 : Ot.state) === "on";
    }).length, h = e.map((Ze) => Ze.readings.find((Ot) => kt(Ot).device_class === "temperature")).filter(Boolean).map((Ze) => Number(y[Ze].state)).filter(Number.isFinite), [b, k] = [Fa(Math.min(...h)), Fa(Math.max(...h))], D = e.flatMap((Ze) => i(Ze, /^media_player\./)), H = D.filter((Ze) => {
      var Ot;
      return ((Ot = y[Ze]) == null ? void 0 : Ot.state) === "playing";
    }).length, O = Xs(), ce = O.filter((Ze) => Ze.severity === "warning" && Ze.on).length, Se = a.locks.filter((Ze) => {
      var Ot;
      return ["unlocked", "jammed", "open"].includes((Ot = y[Ze]) == null ? void 0 : Ot.state);
    }).length, Ne = a.alarms.filter((Ze) => {
      var Ot;
      return ((Ot = y[Ze]) == null ? void 0 : Ot.state) === "disarmed";
    }).length, ee = ce ? qi(ce, "warning", "warnings") : null, xe = Se ? Se + " unlocked" : Ne ? Ne + " disarmed" : ee ? null : "All secure", z = ts(), be = e.flatMap((Ze) => Ze.solar), $ = be.find((Ze) => Ze.endsWith("_power")), Ue = {
      light: u.length && { value: f ? f + " on" : "All off", groups: d((Ze) => Ze.lights) },
      climate: h.length && { value: b === k ? b + "°" : b + " - " + k + "°", groups: d((Ze) => [...Ze.readings.filter((Ot) => ["temperature", "humidity"].includes(kt(Ot).device_class)), ...i(Ze, /^(climate|humidifier)\./)]) },
      security: (a.alarms.length || a.locks.length) && { value: [ee, xe].filter(Boolean).join(", "), groups: [{ name: "Alarm and locks", ids: [...a.alarms, ...a.locks] }, { name: "Doors and windows", ids: a.openings }].filter((Ze) => Ze.ids.length) },
      media_players: D.length && { value: H ? H + " playing" : "No media playing", groups: d((Ze) => i(Ze, /^media_player\./)) },
      maintenance: z,
      energy: Je.grid && { value: qn(Number(((La = y[$]) == null ? void 0 : La.state) || 0) * 1e3 + Number(y[Je.grid].state)) + " now", groups: [{ name: "Energy", ids: [...be, Je.grid] }] }
    }, Ht = [], bt = O.filter((Ze) => Ze.severity !== "warning" && Ze.on);
    return bt.length && Ht.push({ key: "alerts", name: "Alerts", icon: "mdi:alarm-plus", colour: "#f44336", value: qi(bt.length, "active alert", "active alerts"), groups: [{ name: "Active", ids: bt.map((Ze) => Ze.entity) }] }), Xl().forEach((Ze) => {
      Ze.type !== "summary" ? Ht.push({ key: "path:" + Ze.path, name: Ze.label || Ze.path, icon: Ze.icon || "mdi:link-variant", colour: "", value: "" }) : !Ze.hidden && Ue[Ze.key] && !(q.hiddenSums || []).includes(Ze.key) && Ht.push({ key: Ze.key, ...Ad[Ze.key], ...Ue[Ze.key] });
    }), Ht;
  }
  const Js = (e) => '<div class="activityRow tap tfSum" role="button" tabindex="0" data-summary="' + re(e.key) + '" data-k="sum:' + re(e.key) + '" aria-label="' + re(e.name + (e.value ? ", " + e.value : "")) + '"' + (e.key === "alerts" ? ' style="--sum:' + e.colour + ';--sum-ink:#ffffff"' : "") + '><div class="tfIcon" aria-hidden="true"' + Bt(e.id || "", e.icon, e.name) + '></div><div><div class="activityRowName">' + re(e.name) + "</div>" + (e.value ? '<div class="activityRowMeta">' + re(e.value) + "</div>" : "") + "</div></div>";
  function Qs(e) {
    const a = Ra();
    q = { ...q, favourites: a.includes(e) ? a.filter((i) => i !== e) : [...a, e], favHidden: (q.favHidden || []).filter((i) => i !== e) }, Ha(), Tt();
  }
  function yr(e) {
    document.querySelector("home-assistant") && (Ie.pushState(null, "", e), window.dispatchEvent(new CustomEvent("location-changed", { detail: { replace: !1 } })));
  }
  function as(e, a) {
    if (e.startsWith("path:")) {
      yr(e.slice(5));
      return;
    }
    Rs("summary:" + e, a);
  }
  async function Vi() {
    const e = (h) => Promise.resolve().then(() => B(h)).catch(() => null), [a, i, d, u] = await Promise.all([
      e({ type: "frontend/get_user_data", key: zc }),
      e({ type: "frontend/get_system_data", key: "home" }),
      e({ type: "frontend/get_system_data", key: "security" }),
      e({ type: "usage_prediction/common_control" })
    ]), f = (a == null ? void 0 : a.value) || {};
    q = { favourites: f.favourites ?? null, sources: f.sources, hiddenSums: f.hiddenSums, dash: f.dash, named: f.named, favHidden: f.favHidden, suggest: f.suggest, favSeeded: f.favSeeded }, se = (i == null ? void 0 : i.value) || {}, me = (d == null ? void 0 : d.value) || {}, ye = Array.isArray(u == null ? void 0 : u.entities) ? u.entities : [], $e = null, Object.keys(y).length && Tt(), Gi(), zi = !0, Vn();
  }
  const el = "HomeCore";
  async function Gi() {
    var d, u, f;
    const e = location.pathname.split("/")[1], a = q.named || [];
    if (!((u = (d = o()) == null ? void 0 : d.user) != null && u.is_admin) || !e || a.includes(e)) return;
    const i = () => {
      q = { ...q, named: [...a, e] }, Ha();
    };
    try {
      const h = (f = await B({ type: "lovelace/dashboards/list" })) == null ? void 0 : f.find((D) => D.url_path === e);
      if (!h || h.mode === "yaml") return;
      if (h.title === el) {
        i();
        return;
      }
      const b = await B({ type: "lovelace/config", url_path: e }), k = ((b == null ? void 0 : b.views) || []).flatMap((D) => [...D.cards || [], ...(D.sections || []).flatMap((H) => H.cards || [])]);
      if (!k.length || !k.every((D) => (D == null ? void 0 : D.type) === "custom:move-assistant-card" && D.layout === "test-focus")) return;
      await B({ type: "lovelace/dashboards/update", dashboard_id: h.id, title: el }), i();
    } catch {
    }
  }
  let kn = null, Ui = 0, ai = !1;
  const ni = (e) => {
    const a = e.split(".")[0], i = kt(e).device_class;
    return yf.includes(a) && (a !== "binary_sensor" || Fl.includes(i) || !!$c[i]);
  }, oi = (e) => e.startsWith("binary_sensor.") ? $c[kt(e).device_class] : null;
  async function Yi() {
    var e;
    if (!(ai || Date.now() - Ui < 30 * 1e3)) {
      ai = !0, Ui = Date.now();
      try {
        const a = Object.keys(((e = o()) == null ? void 0 : e.states) || {}).filter(ni), i = a.length ? await B({ type: "logbook/get_events", start_time: new Date(Date.now() - 24 * 3600 * 1e3).toISOString(), end_time: (/* @__PURE__ */ new Date()).toISOString(), entity_ids: a }) : null;
        kn = Array.isArray(i) ? i.filter((d) => d.entity_id && d.state != null && d.when) : null;
      } catch {
        kn = null;
      }
      ai = !1, Tt();
    }
  }
  function ns() {
    const e = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map(), i = (u) => {
      if (!y[u.entity_id] || !ni(u.entity_id) || !rs(u.entity_id) || ["unavailable", "unknown"].includes(u.state)) return;
      if (oi(u.entity_id)) {
        const h = a.get(u.entity_id);
        u.state === "on" ? (!h || u.when > h.when + 1) && a.set(u.entity_id, { ...u, alarm: !0, cleared: null }) : h && !h.cleared && u.when > h.when && (h.cleared = u.when);
        return;
      }
      const f = e.get(u.entity_id);
      (!f || u.when > f.when + 1) && e.set(u.entity_id, u);
    };
    [...kn || []].sort((u, f) => u.when - f.when).forEach(i);
    const d = kn ? Ui / 1e3 - 5 : 0;
    return Object.keys(y).forEach((u) => {
      var b;
      const f = y[u], h = f.last_changed ? Date.parse(f.last_changed) / 1e3 : 0;
      h > d && i({ entity_id: u, state: f.state, when: h, context_user_id: (b = f.context) == null ? void 0 : b.user_id });
    }), [...e.values(), ...a.values()].sort((u, f) => f.when - u.when).slice(0, Mf);
  }
  function Ln(e) {
    var d;
    const a = e.context_user_id && Object.keys(y).find((u) => u.startsWith("person.") && kt(u).user_id === e.context_user_id);
    if (a) return ke(a);
    const i = (d = o()) == null ? void 0 : d.user;
    return i && e.context_user_id === i.id ? i.name : ["automation", "script"].includes(e.context_domain) || e.context_event_type === "automation_triggered" ? e.context_name || "Home Assistant" : "";
  }
  function ii(e) {
    const a = e.entity_id.split(".")[0], i = String(e.state);
    return a === "lock" ? { locked: "locked", unlocked: "unlocked", open: "opened", jammed: "jammed", locking: "locking", unlocking: "unlocking" }[i] || Oe(i).toLowerCase() : a === "cover" || a === "valve" ? { open: "opened", closed: "closed", opening: "opening", closing: "closing" }[i] || Oe(i).toLowerCase() : a === "binary_sensor" ? i === "on" ? "opened" : "closed" : a === "climate" ? i === "off" ? "turned off" : "set to " + Oe(i).toLowerCase() : a === "media_player" ? { playing: "started playing", paused: "paused", idle: "stopped", off: "turned off", standby: "turned off", on: "turned on" }[i] || Oe(i).toLowerCase() : a === "alarm_control_panel" ? (Kc[i] || Oe(i)).toLowerCase() : a === "vacuum" ? { cleaning: "started cleaning", docked: "docked", returning: "went home", paused: "paused", idle: "stopped" }[i] || Oe(i).toLowerCase() : i === "on" ? "turned on" : i === "off" ? "turned off" : Oe(i).toLowerCase();
  }
  function Jl(e) {
    const a = e.entity_id, i = e.alarm && oi(a), d = ke(a) + " " + (i ? i[0] : ii(e)), u = i ? Ut(e.when * 1e3) + (e.cleared ? " · " + i[1] + " since " + Ut(e.cleared * 1e3) : "") : [Ln(e), Ut(e.when * 1e3)].filter(Boolean).join(" · ");
    return '<div class="activityRow' + (i ? " alert" : "") + '"><div class="tfIcon' + (i ? " alert" : "") + '" aria-hidden="true"' + Bt(a, ia(a)) + '></div><button class="tfName" type="button" data-more="' + re(a) + '" data-at="' + Math.round(e.when * 1e3) + '" aria-label="' + re(d + ", " + u + ". More info") + '"><span class="activityRowName">' + re(d) + '</span><span class="activityRowMeta">' + re(u) + "</span></button></div>";
  }
  let Zi = null, To = 0;
  const Ki = [["electricity", "Electricity", 4.3, "kWh"], ["gas", "Gas", 0.21, "m³"], ["water", "Water", 0.2, "m³"]];
  async function kr() {
    var a;
    if (Date.now() - To < 5 * 60 * 1e3) return;
    To = Date.now();
    const e = [];
    try {
      const i = ((a = await B({ type: "energy/get_prefs" })) == null ? void 0 : a.energy_sources) || [], d = (u) => i.filter((f) => f.type === u).flatMap((f) => u === "grid" ? (f.flow_from || []).map((h) => h.stat_energy_from) : [f.stat_energy_from]).filter(Boolean);
      for (const [u, f, h] of [["electricity", "Electricity", d("grid")], ["solar", "Solar", d("solar")], ["gas", "Gas", d("gas")], ["water", "Water", d("water")]]) {
        if (!h.length) continue;
        const b = await Promise.all(h.map((k) => Promise.resolve(B({ type: "recorder/statistic_during_period", statistic_id: k, calendar: { period: "day" }, types: ["change"] })).then((D) => Number(D == null ? void 0 : D.change) || 0, () => 0)));
        e.push({ key: u, name: f, id: h[0], ids: h, value: b.reduce((k, D) => k + D, 0), unit: kt(h[0]).unit_of_measurement || (u === "gas" || u === "water" ? "m³" : "kWh") });
      }
    } catch {
    }
    Zi = e, Tt();
  }
  let io = null, tl = [];
  function Mr() {
    var f;
    const e = tl = Zi != null && Zi.length ? Zi : Ki.map(([h, b, k, D]) => {
      const H = "sensor.made_up_energy_" + h;
      return y[H] = { entity_id: H, state: String(k), last_changed: (/* @__PURE__ */ new Date()).toISOString(), attributes: { friendly_name: b + " today", unit_of_measurement: D, state_class: "total_increasing" } }, { key: h, name: b, id: H, value: k, unit: D };
    });
    V.clear(), e.some((h) => h.id === io) || (io = e[0].id);
    const a = e.map((h) => {
      const b = Number(h.value).toLocaleString(void 0, { maximumFractionDigits: h.value < 10 ? 2 : 1 }) + " " + h.unit, k = Sf[h.key], D = h.id === io;
      return V.set(h.id, { name: h.name, text: b, icon: k }), '<div class="activityRow tap' + (D ? " picked" : "") + '" role="button" tabindex="0" data-energy-pick="' + re(h.id) + '" aria-pressed="' + D + '" aria-label="' + re(h.name + ", " + b) + '. Show its day in the graph"><div class="tfIcon" aria-hidden="true"' + Bt("", k, h.name) + '></div><div><div class="activityRowName">' + re(h.name) + '</div><div class="activityRowMeta">' + re(b) + "</div></div></div>";
    }), i = e.find((h) => h.id === io), d = (((f = Ft().opts.energy) == null ? void 0 : f.graph) || "above") === "below", u = '<div class="tfCardGraph tfDashGraph"><svg class="tfGraph" data-graph="' + re(i.id) + '" role="img" aria-label="' + re(i.name) + ', last 24 hours"></svg></div>';
    return gn("dash:energy", 0, "Energy today", a, u, ji().some((h) => h.key === "energy") ? "summary:energy" : null, "tfDashCard tfDash-energy" + (d ? "" : " graphAbove"));
  }
  function Sr(e) {
    const a = E.querySelector(".tfDash-energy"), i = a == null ? void 0 : a.querySelector(".tfDashGraph svg");
    !i || e === io || (io = e, a.querySelectorAll("[data-energy-pick]").forEach((d) => {
      const u = d.dataset.energyPick === e;
      d.classList.toggle("picked", u), d.setAttribute("aria-pressed", String(u));
    }), i.dataset.graph = e, i.dataset.drawn = "", va.set("dash:energy", Mr()), vi(!0));
  }
  const $i = {
    electricity: [15, 12, 10, 10, 10, 12, 25, 45, 40, 30, 25, 30, 35, 30, 25, 25, 35, 60, 80, 70, 55, 45, 30, 20],
    gas: [2, 2, 2, 2, 3, 8, 18, 20, 12, 6, 4, 4, 4, 4, 4, 5, 8, 14, 16, 14, 10, 6, 3, 2],
    water: [0, 0, 0, 0, 0, 2, 12, 18, 8, 4, 3, 4, 6, 3, 2, 3, 4, 6, 10, 8, 5, 5, 3, 1]
  }, os = /* @__PURE__ */ new Map();
  async function Ql(e) {
    const a = /* @__PURE__ */ new Date(), i = new Date(a).setHours(0, 0, 0, 0), d = a.getHours(), u = a.getMinutes() / 60, f = Array.from({ length: 24 }, (b, k) => k <= d ? 0 : null);
    if (!e.ids) {
      const b = $i[e.key] || $i.electricity, k = b.map((H, O) => O < d ? H : O === d ? H * u : 0), D = k.reduce((H, O) => H + O, 0) || 1;
      return f.map((H, O) => H == null ? null : e.value * k[O] / D);
    }
    const h = os.get(e.id);
    if (h && h.day === i && Date.now() - h.at < 5 * 60 * 1e3) return h.hours;
    try {
      const b = await B({ type: "recorder/statistics_during_period", start_time: new Date(i).toISOString(), end_time: a.toISOString(), statistic_ids: e.ids, period: "hour", types: ["change"] });
      e.ids.forEach((H) => ((b == null ? void 0 : b[H]) || []).forEach((O) => {
        const ce = typeof O.start == "number" ? O.start : Date.parse(O.start), Se = new Date(ce).getHours();
        ce >= i && Se < d && (f[Se] += Number(O.change) || 0);
      }));
      const k = new Date(a).setMinutes(0, 0, 0), D = await Promise.all(e.ids.map((H) => Promise.resolve(B({ type: "recorder/statistic_during_period", statistic_id: H, fixed_period: { start_time: new Date(k).toISOString(), end_time: a.toISOString() }, types: ["change"] })).then((O) => Number(O == null ? void 0 : O.change) || 0, () => 0)));
      f[d] = D.reduce((H, O) => H + O, 0);
    } catch {
    }
    return os.set(e.id, { at: Date.now(), day: i, hours: f }), f;
  }
  async function Na(e, a) {
    const i = await Ql(a);
    if (!e.isConnected) return;
    const d = Math.max(120, e.clientWidth || 260), u = Math.max(60, e.clientHeight || 130), f = 18, h = u - 18, b = d / 24, k = b * 0.72, D = (/* @__PURE__ */ new Date()).getHours(), H = i.map((xe) => xe ?? 0), O = Math.max(0, ...H), ce = (xe) => h - (O > 0 ? xe / O * (h - f) : 0), Se = (xe) => xe.toLocaleString(void 0, { maximumFractionDigits: xe < 10 ? 2 : 1 }) + " " + a.unit, Ne = (xe) => String(xe).padStart(2, "0") + ":00", ee = O > 0 ? H.indexOf(O) : -1;
    e.setAttribute("viewBox", "0 0 " + d + " " + u), e.setAttribute("aria-label", a.name + " today by the hour: " + Se(a.value) + (ee >= 0 ? ", most " + Se(O) + " at " + Ne(ee) : "")), e.innerHTML = [f, (f + h) / 2, h].map((xe) => '<line x1="0" x2="' + d + '" y1="' + xe + '" y2="' + xe + '" stroke="var(--line)" stroke-width="1"/>').join("") + i.map((xe, z) => xe > 0 ? '<rect x="' + (z * b + (b - k) / 2).toFixed(1) + '" y="' + ce(xe).toFixed(1) + '" width="' + k.toFixed(1) + '" height="' + (h - ce(xe)).toFixed(1) + '" rx="2" fill="' + (z === D ? "var(--primary)" : "var(--text)") + '"' + (z === D ? "" : ' fill-opacity=".5"') + "/>" : "").join("") + [0, 6, 12, 18].map((xe) => '<text x="' + (xe * b).toFixed(1) + '" y="' + (u - 3) + '">' + String(xe).padStart(2, "0") + "</text>").join("") + (ee >= 0 ? '<text x="0" y="11">Most: ' + re(Se(O)) + " at " + Ne(ee) + "</text>" : "");
  }
  function Xi(e) {
    var a;
    (a = window.matchMedia) != null && a.call(window, "(prefers-reduced-motion: reduce)").matches || e.querySelectorAll("rect").forEach((i, d) => i.animate([{ transform: "scaleY(0)" }, { transform: "scaleY(1)" }], { duration: 500, delay: d * 18, easing: "cubic-bezier(.2,.7,.3,1)", fill: "backwards" }));
  }
  function ri(e) {
    var u;
    if ((u = window.matchMedia) != null && u.call(window, "(prefers-reduced-motion: reduce)").matches) return;
    const [a, i] = e.querySelectorAll("path");
    if (!(i != null && i.getTotalLength)) return;
    const d = i.getTotalLength();
    i.animate([{ strokeDasharray: d, strokeDashoffset: d }, { strokeDasharray: d, strokeDashoffset: 0 }], { duration: 700, easing: "cubic-bezier(.2,.7,.3,1)" }), a == null || a.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 500, delay: 200, easing: "ease-out", fill: "backwards" });
  }
  let Cr = null, is = 0;
  const rs = (e) => !e.startsWith("light.") || Cf.includes((_t.get(e) || "").toLowerCase()), ss = () => Math.max(2, Eo((E == null ? void 0 : E.clientWidth) || 0).n), Ji = (e) => {
    const a = sa(e);
    return a.sections.map((i, d) => i && (a.parts || [])[d]).filter(Boolean);
  }, al = (e) => Ji(e).slice(0, _n(e) - 1);
  function Qi(e) {
    const a = Ft().tiles;
    if (a) return a.filter((d) => y[d]);
    if (!Cr) {
      const d = (u) => {
        var f;
        return (((f = y[u]) == null ? void 0 : f.state) === "on" ? 1e6 : 0) + (st[u] || 0);
      };
      Cr = {
        lights: Je.rooms.flatMap((u) => u.lights).filter((u) => {
          var f;
          return rs(u) && ((f = y[u]) == null ? void 0 : f.state) !== "unavailable";
        }).sort((u, f) => d(f) - d(u) || ke(u).localeCompare(ke(f))),
        climates: Je.rooms.flatMap((u) => u.actions.filter((f) => f.startsWith("climate.")))
      };
    }
    const i = Cr.climates.filter((d) => y[d]).slice(0, e > 3 ? 2 : 1);
    return [...Cr.lights.filter((d) => y[d]).slice(0, Math.max(0, e - i.length)), ...i];
  }
  const Tr = (e, a, i, d) => (u) => '<section class="card tfCard tfDashCard ' + e + '" data-tf data-k="' + a + '" aria-label="' + i + '">' + (d ? '<div class="activityHeader">' + (a === "favs" ? '<button class="activityTitle tfTitleBtn" type="button" data-more="favourites" aria-label="Favourites. More info">' + i + "</button>" : '<div class="activityTitle">' + i + "</div>") + "</div>" : "") + '<div class="activityRows">' + u + "</div></section>";
  function Gn(e, a) {
    var f, h;
    e.dash = !0, e.push({ key: "dash:title", html: '<h1 class="settingsTitle tfDashTitle" data-tf data-k="dash:title">' + re(((h = (f = o()) == null ? void 0 : f.config) == null ? void 0 : h.location_name) || "Home") + "</h1>" }), a.length && e.push({ key: "sums", wrap: (b) => '<div class="tfDashBarRow" data-tf data-k="sums">' + Tr("tfDash-bar", "sums-bar", "Summaries", !1)(b).replace(" data-tf", "") + "</div>", tiles: a.map((b) => ({ key: "sum:" + b.key, html: Js(b) })) }), It.length && e.push({ key: "areas", html: jn(0) });
    const i = $l();
    i.length && e.push({ key: "favs", wrap: Tr("tfDash-favs", "favs", "Favourites", !0), tiles: i.map((b) => ({ key: "fav:" + b, html: xr(b, { area: !0 }) })) });
    const d = ns();
    e.push({ key: "dash:act", html: gn("dash:act", 0, "Activity", d.length ? d.map(Jl) : ['<p class="tfDashNone">Nothing has changed in the last day.</p>'], "", null, "tfDashCard tfDash-act") }), e.push({ key: "dash:energy", html: Mr() });
    const u = ss();
    return is = u, Qi(u >= 3 ? u : u * 2).forEach((b) => e.push({
      key: "dash:tile:" + b,
      wrap: (k) => '<div class="tfDashTiles" data-tf data-k="dash:tile:' + re(b) + '">' + k + "</div>",
      tiles: [{ key: b, html: Be(b, !1, al(b)) }]
    })), Yi(), kr(), e;
  }
  const ro = 252, $t = 16, ed = 200, ls = Math.round(ro * 1.25), nl = 60, so = nl + $t, Lo = 3, td = { title: "The name", sums: "Summaries", wx: "Weather", areas: "Areas", favs: "Favourites", act: "Activity", energy: "Energy today", avg: "Compared to average", aq: "Air quality", pollen: "Pollen", radar: "Rain radar" }, ol = ["wx", "favs", "act", "energy", "avg"], er = ["XS", "S", "M", "L", "XL"], Ao = er.length, si = { wx: 5, areas: 5, favs: 5, act: 5, energy: 4, avg: 4, aq: 4, pollen: 4, radar: 4 }, An = (e) => !e.includes(".") || e.startsWith("light.") && et(e) ? Ao : Math.min(Ao, Ji(e).length + 1), _n = (e) => {
    const a = Ft().opts[e] || {}, i = An(e), d = Number(a.h) || (a.tall ? 5 : si[e] || (i === Ao ? 4 : 2));
    return Math.max(1, Math.min(i, d));
  }, li = 2, tr = 90, di = 56, wa = (e) => td[e] || ke(e), il = 409, ad = 128;
  let Ma = !1, yt = null, Pa = null, Un = !1, cn = /* @__PURE__ */ new Map(), Lr = 0, Yn = 0;
  const _o = ["title", "sums"], Eo = (e) => {
    const a = Math.max(1, Math.floor((e + $t) / (ed + $t)));
    return { n: a, w: Math.max(1, Math.min(ls, Math.floor((e - (a - 1) * $t) / a))) };
  }, Ft = () => {
    const e = { cells: {}, spans: {}, hidden: [], opts: {}, ...q.dash || {} }, a = ka.filter((i) => !(e.known || []).includes(i) && !e.hidden.includes(i));
    return a.length ? { ...e, hidden: [...e.hidden, ...a] } : e;
  };
  function lo(e) {
    q = { ...q, dash: { ...e, known: ka } }, Ha();
  }
  function Za() {
    const e = (a) => E.querySelector(a);
    return [
      ["title", e(".tfDashTitle"), "full"],
      ["sums", e(".tfDashBarRow"), "full"],
      ["wx", ut.wx, 2],
      ["areas", e(".tfAreas"), "areas"],
      ["favs", e(".tfDash-favs"), 2],
      ["act", e(".tfDash-act"), 2],
      ["energy", e(".tfDash-energy"), 2],
      ["avg", ut.avg, 2],
      ...ka.map((a) => [a, ut[a], 1]),
      ...[...E.querySelectorAll(".tfDashTiles > [data-k]")].map((a) => [a.dataset.k, a, 1, !0])
    ].filter(([, a]) => a == null ? void 0 : a.isConnected).map(([a, i, d, u = !1]) => ({ key: a, el: i, span: d, tile: u }));
  }
  const Ar = (e, a, i) => e.span === "full" ? a : e.span === "areas" ? Math.min(a, Math.ceil((il + Math.max(0, It.length - 1) * (ad + $t) + $t) / (i + $t))) : Math.min(a, Ft().spans[e.key] ?? e.span), _r = (e) => _n(e.key);
  function ds(e, a, i = null) {
    const d = Ft().cells, u = e.every((b) => !d[b.key] || d[b.key].col + b.cols <= a), f = (b) => d[b.key] || { row: 1e9, col: 0 };
    return (() => {
      const b = /* @__PURE__ */ new Set(), k = /* @__PURE__ */ new Map(), D = (ee, xe, z, be) => {
        for (let $ = xe; $ < xe + be; $++) for (let Ue = ee; Ue < ee + z; Ue++) if (b.has(Ue + "," + $)) return !1;
        return !0;
      }, H = (ee, xe, z) => {
        for (let be = z; be < z + ee.rows; be++) for (let $ = xe; $ < xe + ee.cols; $++) b.add($ + "," + be);
        k.set(ee.key, { col: xe, row: z, cols: ee.cols, rows: ee.rows });
      }, O = (ee, xe, z) => {
        for (xe = Math.max(0, Math.min(a - ee.cols, xe)), z = Math.max(0, z); !D(xe, z, ee.cols, ee.rows); ) z++;
        H(ee, xe, z);
      }, ce = (ee) => {
        for (let xe = 0; ; xe++) for (let z = 0; z <= a - ee.cols; z++) if (D(z, xe, ee.cols, ee.rows)) {
          H(ee, z, xe);
          return;
        }
      };
      i && O(i, yt.col, yt.row);
      const Se = e.filter((ee) => ee !== i), Ne = (ee, xe) => f(ee).row - f(xe).row || f(ee).col - f(xe).col;
      return u ? (Se.filter((ee) => d[ee.key]).sort(Ne).forEach((ee) => O(ee, d[ee.key].col, d[ee.key].row)), Se.filter((ee) => !d[ee.key]).forEach(ce), k) : ([...Se].sort(Ne).forEach(ce), k);
    })();
  }
  function ci(e, a) {
    const i = /* @__PURE__ */ new Set(), d = /* @__PURE__ */ new Map(), u = (f, h, b) => {
      for (let k = h; k < h + b.rows; k++) for (let D = f; D < f + b.cols; D++) if (i.has(D + "," + k)) return !1;
      return !0;
    };
    return e.forEach((f) => {
      for (let h = 0; ; h++) {
        let b = 0;
        for (; b <= a - f.cols && !u(b, h, f); ) b++;
        if (!(b > a - f.cols)) {
          for (let k = h; k < h + f.rows; k++) for (let D = b; D < b + f.cols; D++) i.add(D + "," + k);
          d.set(f.key, { col: b, row: h, cols: f.cols, rows: f.rows });
          return;
        }
      }
    }), d;
  }
  function ar() {
    const e = Ft(), a = new Set(e.hidden), i = Za().filter((h) => !_o.includes(h.key));
    let d = cn;
    if (!d.size) {
      const h = e.pegs || 4, b = i.filter((k) => !a.has(k.key));
      b.forEach((k) => {
        k.cols = Ar(k, h, ro), k.rows = _r(k) ?? li;
      }), d = ds(b, h);
    }
    const u = (h) => !a.has(h.key) && d.get(h.key) || { row: 1e9, col: 0 };
    i.sort((h, b) => u(h).row - u(b).row || u(h).col - u(b).col);
    const f = (e.phone || []).map((h) => i.find((b) => b.key === h && !a.has(h))).filter(Boolean);
    return [...f, ...i.filter((h) => !f.includes(h))];
  }
  const nd = () => {
    const e = ar();
    e.forEach((a, i) => a.el.style.setProperty("--o", String(3 + i))), rl([...Za().filter((a) => _o.includes(a.key)), ...e].map((a) => a.el));
  };
  function rl(e) {
    if (yt) return;
    const a = n.activeElement;
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
    a && a !== n.activeElement && a.isConnected && a.focus({ preventScroll: !0 });
  }
  const pi = (e, a) => lo({ ...e, cells: a, pegs: Eo(E.clientWidth).n });
  function xa() {
    var be;
    if (!w || !E) return;
    const e = E.clientWidth, a = e < 2 * ro + $t, i = m.classList.contains("tfDash"), { n: d, w: u } = a ? { n: 2, w: Math.floor((e - $t) / 2) } : Eo(e);
    lt.classList.add("tfPegs"), lt.style.setProperty("--peg-n", d), lt.style.setProperty("--peg-w", u + "px");
    const f = new Set(Ft().hidden);
    ka.forEach(($) => {
      var Ue;
      return (Ue = ut[$]) == null ? void 0 : Ue.classList.toggle("tfNotAdded", f.has($) && !(yt != null && yt.fromTray && yt.key === $));
    }), m.classList.toggle("tfBoard", i), m.classList.toggle("tfEditing", i && Ma && !a);
    const h = c("dashEditNav");
    h && (h.hidden = !i || a, h.classList.toggle("active", Ma), h.setAttribute("aria-pressed", String(Ma)), h.setAttribute("aria-label", Ma ? "Done editing" : "Edit the dashboard"), h.title = Ma ? "Done" : "Edit", h.innerHTML = Ma ? vf : Zc);
    const b = i ? Za() : [];
    if (!i) {
      E.style.height = "", E.querySelectorAll(".tfBoardItem").forEach(($) => {
        $.classList.remove("tfBoardItem", "tfBoardHidden"), $.style.left = $.style.top = $.style.width = $.style.height = "";
      }), (be = E.querySelector(".tfDash-act > .activityRows")) == null || be.style.removeProperty("max-height"), sl(!1), m.classList.contains("tfDash") && nd(), aa();
      return;
    }
    E.style.setProperty("--peg-w", u + "px");
    const k = new Set(Ft().hidden), D = u + $t;
    yt != null && yt.fromTray && k.delete(yt.key), b.forEach(($) => $.el.classList.toggle("tfBoardHidden", k.has($.key)));
    const H = b.filter(($) => !k.has($.key) && getComputedStyle($.el).display !== "none");
    let O = 0;
    H.filter(($) => _o.includes($.key)).forEach(($) => {
      $.el.classList.add("tfBoardItem"), Object.assign($.el.style, { width: e + "px", height: "", left: "0px", top: O + "px" });
      const Ue = $.key === "sums" && $.el.querySelector(".tfDash-bar"), Ht = Ue ? Ue.querySelectorAll(".activityRow").length : 0;
      Ue && (Ue.style.maxWidth = "none");
      for (let bt = 1; Ue && bt <= Ht && (Ue.style.setProperty("--bar-cols", String(Math.ceil(Ht / bt))), !(Ue.offsetWidth <= e)); bt++)
        ;
      Ue && (Ue.style.maxWidth = ""), O += $.el.offsetHeight + $t;
    }), Yn = O;
    const ce = H.filter(($) => !_o.includes($.key));
    ce.forEach(($) => {
      $.cols = Ar($, d, u), $.el.classList.add("tfBoardItem"), $.el.style.width = ($.cols === d ? e : $.cols * u + ($.cols - 1) * $t) + "px", $.el.style.height = "", $.rows = _r($) ?? Math.max(1, Math.ceil(($.el.offsetHeight + $t - 6) / so));
    });
    const Se = yt && ce.find(($) => $.key === yt.key), Ne = a && ar().map(($) => $.key), ee = ($) => Ne.includes($.key) ? Ne.indexOf($.key) : -1, xe = a ? ci([...ce].sort(($, Ue) => ee($) - ee(Ue)), d) : ds(ce, d, Se);
    xe.forEach(($) => Object.assign($, { x: $.cols === d ? 0 : $.col * D, y: Yn + $.row * so, w: $.cols === d ? e : $.cols * u + ($.cols - 1) * $t, h: $.rows * so - $t })), ce.forEach(($) => {
      const Ue = xe.get($.key);
      $.el.style.height = Ue.h + "px", $.el.dataset.rows = _n($.key), $.el.classList.contains("tfDac") && $.el.style.setProperty("--tf-dac-pad", Ue.h - tr + "px"), !($ === Se && !yt.fromTray) && ($.el.style.left = Ue.x + "px", $.el.style.top = Ue.y + "px");
    }), a || (cn = xe), rl([...H.filter(($) => _o.includes($.key)), ...ce.slice().sort(($, Ue) => xe.get($.key).row - xe.get(Ue.key).row || xe.get($.key).col - xe.get(Ue.key).col)].map(($) => $.el)), [["favs", ".tfDash-favs"], ["act", ".tfDash-act"]].forEach(([$, Ue]) => {
      const Ht = xe.get($), bt = Ht && E.querySelector(Ue), La = bt == null ? void 0 : bt.querySelector(":scope > .activityRows"), Ze = bt == null ? void 0 : bt.querySelector(":scope > .activityHeader");
      if (!La || !Ze) return;
      const Ot = Ht.rows === 1 ? Ht.h : Ht.h - (Ze.offsetTop + Ze.offsetHeight + 10) - parseFloat(getComputedStyle(bt).paddingBottom), Ws = Math.max(1, Math.floor(Ot / di));
      La.style.setProperty("--fill-row", (Ot / Ws).toFixed(2) + "px"), La.style.maxHeight = Ot + "px";
    }), Lr = Math.max(0, ...[...xe.values()].map(($) => $.row + $.rows));
    let z = Yn + Lr * so - $t;
    z = sl(Ma && !a, ce, xe, z, d, u), E.style.height = z + "px", requestAnimationFrame(() => m.classList.add("tfBoardReady")), b.forEach(($) => za.observe($.el)), vi(), aa();
  }
  const Sa = () => {
    Un || (Un = !0, requestAnimationFrame(() => {
      Un = !1, xa();
    }));
  }, za = new ResizeObserver(() => {
    yt || Sa();
  });
  function sl(e, a = [], i = /* @__PURE__ */ new Map(), d = 0, u = 1, f = ro) {
    E.querySelectorAll(".tfEditChips").forEach((H) => {
      (!e || !H.closest(".tfBoardItem")) && H.remove();
    }), E.querySelectorAll(".tfFavHides").forEach((H) => H.remove()), E.querySelectorAll(".tfBoardItem").forEach((H) => [...H.children].forEach((O) => {
      O.classList.contains("tfEditChips") || O.toggleAttribute("inert", e);
    }));
    let h = E.querySelector(".tfBoardCells"), b = E.querySelector(".tfBoardLand");
    if (!e)
      return h == null || h.remove(), b == null || b.remove(), pn(), d;
    const k = Lr + Lo;
    if (h || (h = Object.assign(document.createElement("div"), { className: "tfBoardCells" }), h.setAttribute("aria-hidden", "true"), E.prepend(h)), h.style.top = Yn + "px", h.dataset.size !== u + "x" + k + "x" + f && (h.dataset.size = u + "x" + k + "x" + f, h.style.gridTemplateColumns = "repeat(" + u + "," + f + "px)", h.innerHTML = "<i></i>".repeat(u * k)), d = Math.max(d, Yn + k * so - $t), a.forEach((H) => {
      const O = H.el;
      !O || O.querySelector(":scope > .tfEditChips") || O.insertAdjacentHTML("beforeend", '<div class="tfEditChips"><span class="tfEditGrip" aria-hidden="true">' + _d + '</span><button class="tfEditChip" type="button" data-board-more="' + re(H.key) + '" aria-label="' + re(wa(H.key)) + ' options" aria-haspopup="menu">' + mf + "</button></div>");
    }), yt && i.has(yt.key)) {
      b || (b = Object.assign(document.createElement("div"), { className: "tfBoardLand" }), E.appendChild(b));
      const H = i.get(yt.key);
      Object.assign(b.style, { left: H.x + "px", top: H.y + "px", width: H.w + "px", height: H.h + "px" });
    } else b == null || b.remove();
    const D = E.querySelector(".tfDash-favs.tfBoardItem:not(.tfBoardHidden)");
    if (D) {
      const H = D.getBoundingClientRect();
      D.insertAdjacentHTML("beforeend", '<div class="tfFavHides">' + [...D.querySelectorAll('[data-k^="fav:"]')].map((O) => {
        const ce = O.getBoundingClientRect(), Se = O.dataset.k.slice(4);
        return '<button class="tfFavHide" type="button" data-fav-hide="' + re(Se) + '" aria-label="Hide ' + re(ke(Se)) + ' from the dashboard" style="left:' + Math.round(ce.right - H.left - 42) + "px;top:" + Math.round(ce.top - H.top + (ce.height - 32) / 2) + 'px">' + Gc + "</button>";
      }).join("") + "</div>");
    }
    return d;
  }
  let cs = "";
  function nr(e) {
    Ma = e, e || (yt = null, Dn = Bn = !1, pn()), xa(), e ? cs = JSON.stringify(q) : cs && JSON.stringify(q) !== cs && Mn("Changes saved");
  }
  function ps(e, a) {
    var Ne, ee;
    pn();
    const i = cn.get(e), { n: d } = Eo(E.clientWidth), u = Ft(), f = u.spans[e] ?? 2;
    if (!i) return;
    const h = i.cols >= d, b = (xe, z, be) => '<button type="button" role="menuitem" data-board-act="' + xe + '"' + (be ? " disabled" : "") + ">" + z + "</button>", k = Object.assign(document.createElement("div"), { className: "tfBoardMenu" });
    k.setAttribute("role", "menu"), k.setAttribute("aria-label", wa(e) + " options");
    const D = E.querySelector('.tfDashTiles > [data-k="' + CSS.escape(e) + '"]'), H = An(e), O = _n(e), ce = '<div class="tfHeight" role="group" aria-label="Height"><span class="tfHeightLabel" aria-hidden="true">Height</span><div class="tfHeightTabs">' + er.map((xe, z) => '<button type="button" role="menuitemradio" aria-checked="' + (z + 1 === O) + '" aria-label="' + xe + ", " + (z + 1) + (z ? " rows" : " row") + '" data-board-act="h:' + (z + 1) + '"' + (z < H ? "" : " disabled") + ">" + xe + "</button>").join("") + "</div></div>";
    k.innerHTML = ce + (ol.includes(e) ? b("size", f === 1 ? "Card size" : "Tile size") : "") + (e === "energy" ? b("graph", (((Ne = u.opts.energy) == null ? void 0 : Ne.graph) || "above") === "above" ? "Graph below" : "Graph above") : "") + b("left", "Move left", h || i.col === 0) + b("right", "Move right", h || i.col + i.cols >= d) + b("up", "Move up", i.row <= 0) + b("down", "Move down") + (D ? b("remove", "Remove") : b("hide", "Hide")), E.appendChild(k);
    const Se = Math.min(i.x + i.w - k.offsetWidth, E.clientWidth - k.offsetWidth);
    Object.assign(k.style, { left: Math.max(0, Se) + "px", top: i.y + 28 + "px" }), Pa = { key: e, menu: k, opener: a }, (ee = k.querySelector("button:not([disabled])")) == null || ee.focus();
  }
  function pn(e) {
    if (!Pa) return;
    const { menu: a, opener: i } = Pa;
    Pa = null, a.remove(), e && (i == null || i.focus());
  }
  const co = () => Object.fromEntries([...cn].map(([e, a]) => [e, { col: a.col, row: a.row }]));
  function ll(e, a) {
    var h, b;
    if (a === "remove") {
      pn(), hs(e);
      return;
    }
    const i = q, d = Ft(), u = co(), f = u[e] || { col: 0, row: 0 };
    a === "size" && (d.spans = { ...d.spans, [e]: (d.spans[e] ?? 2) === 1 ? 2 : 1 }), a.startsWith("h:") && (d.opts = { ...d.opts, [e]: { ...d.opts[e] || {}, h: Number(a.slice(2)), tall: void 0 } }), a === "graph" && (d.opts = { ...d.opts, energy: { ...d.opts.energy || {}, graph: (((h = d.opts.energy) == null ? void 0 : h.graph) || "above") === "above" ? "below" : "above" } }), a === "left" && (u[e] = { ...f, col: f.col - 1 }), a === "right" && (u[e] = { ...f, col: f.col + 1 }), a === "up" && (u[e] = { ...f, row: f.row - 1 }), a === "down" && (u[e] = { ...f, row: f.row + 1 }), a === "hide" && (d.hidden = [.../* @__PURE__ */ new Set([...d.hidden, e])]), ["left", "right", "up", "down"].includes(a) && (yt = { key: e, col: u[e].col, row: u[e].row }), pi(d, u), yt && (xa(), yt = null, pi(Ft(), co())), pn(), a === "graph" && (va.delete("dash:energy"), Tt()), a.startsWith("h:") && e.includes(".") && Tt(), xa(), a !== "hide" ? (b = E.querySelector('[data-board-more="' + CSS.escape(e) + '"]')) == null || b.focus() : Mn(wa(e) + " hidden", Pt(i));
  }
  const dl = (e) => {
    var a;
    return ka.includes(e) && !(((a = q.dash) == null ? void 0 : a.cells) || {})[e] ? " added" : " put back";
  };
  function us(e) {
    const a = Ft(), i = wa(e) + dl(e);
    lo({ ...a, hidden: a.hidden.filter((d) => d !== e) }), xa(), Mn(i);
  }
  const Er = () => Ft().tiles || [...E.querySelectorAll(".tfDashTiles > [data-k]")].map((e) => e.dataset.k).filter((e) => !Ft().hidden.includes(e));
  function po(e, a) {
    const i = Ft();
    pi({ ...i, tiles: e, hidden: i.hidden.filter((d) => !d.includes(".")) }, a), Tt(), aa();
  }
  const En = (e) => {
    po([...Er().filter((a) => a !== e), e], co()), Mn(ke(e) + " added"), ui(e);
  }, hs = (e) => {
    const a = q, i = co();
    delete i[e], po(Er().filter((d) => d !== e), i), Mn(ke(e) + " removed", Pt(a));
  };
  let Do = 0;
  function Mn(e, a = null) {
    var h;
    const i = c("toast");
    if (!i) return;
    if (i.replaceChildren(Object.assign(document.createElement("span"), { textContent: e })), a) {
      const b = Object.assign(document.createElement("button"), { type: "button", className: "toastAction", textContent: "Undo" });
      b.addEventListener("click", () => {
        clearTimeout(Do), i.classList.remove("show", "withAction"), a();
      }), i.appendChild(b);
    }
    const d = m.getBoundingClientRect(), u = (h = n.querySelector(".bottomNav")) == null ? void 0 : h.getBoundingClientRect(), f = gt.classList.contains("open") && !un ? Math.min(d.right, gt.getBoundingClientRect().left) : d.right;
    i.style.left = (d.left + f) / 2 + "px", i.style.bottom = (u != null && u.height ? window.innerHeight - u.top + 12 : 26) + "px", i.classList.add("tfToast", "show"), i.classList.toggle("withAction", !!a), clearTimeout(Do), Do = setTimeout(() => i.classList.remove("show", "withAction"), a ? 5e3 : 2200);
  }
  const cl = 700, od = 1e3, Ca = Object.assign(document.createElement("div"), { className: "tfTooltip", hidden: !0 });
  Ca.setAttribute("role", "tooltip"), Ca.setAttribute("aria-hidden", "true"), m.appendChild(Ca);
  let Dr = null, Bo = 0, ja = 0, pl = -1 / 0;
  const fs = (e) => {
    if (e.nodeType !== 1) return !1;
    const a = getComputedStyle(e);
    return a.textOverflow === "ellipsis" && e.scrollWidth > e.clientWidth + 1 || a.webkitLineClamp !== "none" && e.scrollHeight > e.clientHeight + 1;
  }, ul = (e) => {
    for (let a = e; a && a !== m; a = a.parentElement) if (fs(a)) return a;
    return null;
  };
  function Ro(e, a) {
    clearTimeout(Bo), clearTimeout(ja);
    const i = () => {
      if (!e.isConnected) return;
      Dr = e, Ca.textContent = a, Ca.hidden = !1;
      const d = e.getBoundingClientRect(), u = Ca.getBoundingClientRect(), f = d.top - u.height - 8 >= 8 ? d.top - u.height - 8 : d.bottom + 8;
      Ca.style.left = Math.max(8, Math.min(window.innerWidth - u.width - 8, d.left + d.width / 2 - u.width / 2)) + "px", Ca.style.top = f + "px";
    };
    !Ca.hidden || performance.now() - pl < od ? i() : Bo = setTimeout(i, cl);
  }
  function Br() {
    clearTimeout(Bo), clearTimeout(ja), Ca.hidden || (pl = performance.now()), Ca.hidden = !0, Dr = null;
  }
  n.addEventListener("pointerover", (e) => {
    if (e.pointerType === "touch") return;
    if (Ca.contains(e.target)) {
      clearTimeout(ja);
      return;
    }
    const a = ul(e.target);
    if (a && mt.names === "scroll" && a.matches(Zn)) {
      Rr(a);
      return;
    }
    if (a) {
      a !== Dr ? Ro(a, a.textContent.trim()) : clearTimeout(ja);
      return;
    }
    clearTimeout(Bo), clearTimeout(ja), ja = setTimeout(Br, 120);
  }), n.addEventListener("focusin", (e) => {
    var d;
    const a = e.target;
    if (!((d = a.matches) != null && d.call(a, ":focus-visible"))) return;
    let i = [a, ...a.querySelectorAll("*")].filter(fs);
    mt.names === "scroll" && (i.filter((u) => u.matches(Zn)).forEach(Rr), i = i.filter((u) => !u.matches(Zn))), i.length && Ro(a, i.map((u) => u.textContent.trim()).join(" · "));
  }), n.addEventListener("focusout", (e) => {
    e.target === Dr && Br();
  }), n.addEventListener("keydown", (e) => {
    e.key === "Escape" && !Ca.hidden && (e.stopPropagation(), Br());
  }, !0), window.addEventListener("scroll", () => {
    (!Ca.hidden || Bo) && Br();
  }, { capture: !0, passive: !0 });
  const Zn = ".activityRowName,.activityRowMeta", ms = /* @__PURE__ */ new WeakSet();
  function Rr(e) {
    var f;
    if (mt.names !== "scroll" || ms.has(e) || (f = window.matchMedia) != null && f.call(window, "(prefers-reduced-motion: reduce)").matches) return;
    const a = e.scrollWidth - e.clientWidth;
    if (a < 2) return;
    const i = a / 30 * 1e3, d = 600 + i + 1e3 + i;
    ms.add(e), e.style.textOverflow = "clip";
    const u = e.animate([
      { textIndent: "0px", offset: 0 },
      { textIndent: "0px", offset: 600 / d, easing: "ease-in-out" },
      { textIndent: -a + "px", offset: (600 + i) / d },
      { textIndent: -a + "px", offset: (1600 + i) / d, easing: "ease-in-out" },
      { textIndent: "0px", offset: 1 }
    ], { duration: d });
    u.onfinish = u.oncancel = () => {
      e.style.textOverflow = "", ms.delete(e);
    };
  }
  const No = new IntersectionObserver((e) => e.forEach((a) => {
    a.isIntersecting && (No.unobserve(a.target), Rr(a.target));
  }), { threshold: 1 });
  let uo = !1;
  new MutationObserver(() => {
    uo || mt.names !== "scroll" || (uo = !0, setTimeout(() => {
      uo = !1, n.querySelectorAll(Zn).forEach((e) => {
        !e.dataset.glided && fs(e) && (e.dataset.glided = "1", No.observe(e));
      });
    }, 300));
  }).observe(n, { childList: !0, subtree: !0 });
  const Pt = (e) => () => {
    q = e, Ha(), Tt(), xa(), aa();
  };
  function ui(e) {
    const a = () => E.querySelector('.tfDashTiles > [data-k="' + CSS.escape(e) + '"]');
    setTimeout(() => {
      var h;
      const i = a();
      if (!i) return;
      const d = (h = window.matchMedia) == null ? void 0 : h.call(window, "(prefers-reduced-motion: reduce)").matches, u = i.getBoundingClientRect();
      (u.top < 0 || u.bottom > window.innerHeight) && i.scrollIntoView({ behavior: d ? "auto" : "smooth", block: "center" });
      const f = (b) => "0 0 0 4px color-mix(in srgb,var(--primary) " + b + "%,transparent),0 0 24px color-mix(in srgb,var(--primary) " + b + "%,transparent)";
      i.animate([{ boxShadow: f(55) }, { boxShadow: f(0) }], { duration: 1500, easing: d ? "steps(1, end)" : "ease-out" });
    }, Nr(e) ? 260 : 0);
  }
  function Nr(e) {
    const a = cn.get(e);
    if (!a || !gt.classList.contains("open") || un) return !1;
    const { n: i, w: d } = Eo(E.clientWidth), u = gt.getBoundingClientRect().left - E.getBoundingClientRect().left, f = (k) => k * (d + $t) + a.cols * d + (a.cols - 1) * $t <= u;
    if (f(a.col)) return !1;
    const h = /* @__PURE__ */ new Set();
    cn.forEach((k, D) => {
      if (D !== e) for (let H = k.row; H < k.row + k.rows; H++) for (let O = k.col; O < k.col + k.cols; O++) h.add(O + "," + H);
    });
    const b = (k, D) => {
      for (let H = D; H < D + a.rows; H++) for (let O = k; O < k + a.cols; O++) if (h.has(O + "," + H)) return !1;
      return !0;
    };
    for (let k = 0; k <= Lr; k++) for (let D = 0; D + a.cols <= i && f(D); D++)
      if (b(D, k))
        return pi(Ft(), { ...co(), [e]: { col: D, row: k } }), xa(), !0;
    return !1;
  }
  const gs = /^(light|switch|cover|climate|fan|lock|valve|media_player|humidifier|vacuum|scene|script|alarm_control_panel|water_heater|input_boolean)\./, gt = Object.assign(document.createElement("aside"), { className: "tfEditTray" });
  gt.setAttribute("aria-label", "Edit the dashboard"), gt.innerHTML = '<button class="tfTrayTuck" type="button" data-tray-tuck></button><div class="tfTrayInner"><div class="tfTrayHead"><div class="activityTitle">Edit dashboard</div><button class="pill" type="button" data-tray-done>Done</button></div><section class="tfTraySection" data-tray="cards"></section><section class="tfTraySection"><div class="sectionLabel">Tiles</div><p class="tfTrayNote">Remove a tile from its ⋯.</p><button class="pill tfTrayAdd" type="button" data-tile-add aria-expanded="false">Add tile</button><div class="tfTrayPick" data-pick="tiles" hidden><input class="addInput" type="search" placeholder="Search devices" aria-label="Search devices" autocomplete="off" data-tile-search><ul class="tfTrayList" data-tray="tilepick"></ul></div></section><section class="tfTraySection" data-tray="phone"></section><section class="tfTraySection"><div class="sectionLabel">Favourites</div><ul class="tfTrayList" data-tray="favs"></ul><button class="pill tfTrayAdd" type="button" data-fav-add aria-expanded="false">Add favourite</button><div class="tfTrayPick" data-pick="favs" hidden><input class="addInput" type="search" placeholder="Search devices" aria-label="Search devices" autocomplete="off" data-fav-search><ul class="tfTrayList" data-tray="pick"></ul></div><div class="toggleRow tfTraySuggest" data-tray="suggest"></div></section></div>', m.appendChild(gt);
  let un = !1, Dn = !1, Bn = !1, Ta = null, Kn = !1;
  const vs = {}, hi = (e, a) => {
    if (vs[e] === a) return;
    vs[e] = a;
    const i = gt.querySelector('[data-tray="' + e + '"]');
    i.innerHTML = a, sn(i);
  }, hl = (e, a) => '<span class="tfTrayName"><span class="activityRowName">' + re(ke(e)) + '</span><span class="activityRowMeta">' + re(a) + "</span></span>", fl = (e, a, i) => '<li class="tfTrayFav' + (a ? " off" : "") + '" data-tray-fav="' + re(e) + '"><span class="tfTrayGrip" aria-hidden="true">' + _d + '</span><span class="tfIcon"' + Bt(e, ia(e)) + "></span>" + hl(e, a ? "Hidden" + (_t.get(e) ? " · " + _t.get(e) : "") : _t.get(e) || oa(e)) + '<button class="tfTrayBtn" type="button" data-fav-eye="' + re(e) + '" aria-pressed="' + !a + '" aria-label="' + (a ? "Show " : "Hide ") + re(ke(e)) + ' on the dashboard">' + (a ? Gc : gf) + "</button>" + (i ? '<button class="tfTrayBtn" type="button" data-fav-remove="' + re(e) + '" aria-label="Remove ' + re(ke(e)) + ' from favourites">' + Uc + "</button>" : "<span></span>") + "</li>";
  function or(e, a, i, d) {
    const u = e.trim().toLowerCase().split(/\s+/).filter(Boolean);
    return Object.keys(y).filter((h) => a(h) && !i.has(h) && y[h].state !== "unavailable").filter((h) => {
      const b = (ke(h) + " " + (_t.get(h) || "") + " " + h).toLowerCase();
      return u.every((k) => b.includes(k));
    }).sort((h, b) => (_t.get(h) || "~").localeCompare(_t.get(b) || "~") || ke(h).localeCompare(ke(b))).slice(0, 40).map((h) => '<li><button class="tfTrayPickItem" type="button" ' + d + '="' + re(h) + '"><span class="tfIcon"' + Bt(h, ia(h)) + "></span>" + hl(h, _t.get(h) || "—") + "</button></li>").join("") || '<li class="tfTrayNote">Nothing matches.</li>';
  }
  function aa() {
    const e = Ma && m.classList.contains("tfBoard");
    if (gt.classList.toggle("open", e), gt.classList.toggle("tucked", e && un), gt.toggleAttribute("inert", !e), e || (Kn = !1), mi(), !e) return;
    const a = gt.querySelector("[data-tray-tuck]");
    a.innerHTML = un ? Nc : Yc, a.setAttribute("aria-expanded", String(!un)), a.setAttribute("aria-label", un ? "Show the edit tray" : "Tuck the edit tray away");
    const i = Ft().hidden.filter((h) => Za().some((b) => b.key === h));
    hi("cards", '<div class="sectionLabel">Hidden and new cards</div>' + (i.length ? '<div class="tfTrayCards">' + i.map((h) => '<button class="tfTrayCard" type="button" data-tray-card="' + re(h) + '" aria-label="' + re(wa(h)) + ': drag it onto the board, or press to put it back"><span class="tfTrayGrip" aria-hidden="true">' + _d + "</span>" + re(wa(h)) + "</button>").join("") + "</div>" : '<p class="tfTrayNote">Cards you hide, and new ones, wait here.</p>')), hi("phone", '<div class="sectionLabel">Phone</div><p class="tfTrayNote">' + (Ft().phone ? "Phones have an order of their own." : "Phones follow the board's order.") + '</p><button class="pill tfTrayAdd" type="button" data-phone-toggle aria-pressed="' + Kn + '">' + (Kn ? "Hide the phone" : "Show the phone") + "</button>");
    const d = new Set(q.favHidden || []), u = Ra(), f = [...u, ...[...d].filter((h) => !u.includes(h) && y[h])];
    hi("favs", f.map((h) => fl(h, d.has(h), u.includes(h))).join("") || '<li class="tfTrayNote">No favourites yet.</li>'), gt.querySelector('[data-pick="tiles"]').hidden = !Bn, gt.querySelector("[data-tile-add]").setAttribute("aria-expanded", String(Bn)), Bn && hi("tilepick", or(gt.querySelector("[data-tile-search]").value, (h) => Ol.includes(h.split(".")[0]), new Set(Er()), "data-tile-pick")), gt.querySelector('[data-pick="favs"]').hidden = !Dn, gt.querySelector("[data-fav-add]").setAttribute("aria-expanded", String(Dn)), Dn && hi("pick", or(gt.querySelector("[data-fav-search]").value, (h) => gs.test(h), new Set(Ra()), "data-fav-pick")), hi("suggest", '<div><strong>Show suggestions</strong><div class="status">Fills the card after your favourites.</div></div><button class="switch' + (xn() ? " on" : "") + '" type="button" role="switch" aria-checked="' + xn() + '" data-fav-suggest aria-label="Show suggestions"></button>');
  }
  const fi = (e) => {
    q = { ...q, ...e }, Ha(), Tt(), aa();
  };
  function bs(e, a) {
    const i = q, d = new Set(q.favHidden || []);
    a ? d.delete(e) : d.add(e), fi({ favHidden: [...d] }), a ? Mn(ke(e) + " put back") : Mn(ke(e) + " hidden", Pt(i));
  }
  const ml = (e) => {
    const a = q;
    fi({ favourites: Ra().filter((i) => i !== e), favHidden: (q.favHidden || []).filter((i) => i !== e) }), Mn(ke(e) + " removed from favourites", Pt(a));
  }, id = (e) => {
    fi({ favourites: [...Ra().filter((a) => a !== e), e], favHidden: (q.favHidden || []).filter((a) => a !== e) }), Mn(ke(e) + " added to favourites");
  };
  gt.addEventListener("click", (e) => {
    var i;
    const a = e.target.closest("button");
    a && (a.hasAttribute("data-tray-done") ? nr(!1) : a.hasAttribute("data-tray-tuck") ? (un = !un, aa()) : a.hasAttribute("data-phone-toggle") ? (Kn = !Kn, aa(), Kn && ((i = la.querySelector("[data-phone-key]")) == null || i.focus({ preventScroll: !0 }))) : a.dataset.trayCard ? e.detail === 0 && (us(a.dataset.trayCard), aa()) : a.dataset.favEye ? bs(a.dataset.favEye, a.getAttribute("aria-pressed") !== "true") : a.dataset.favRemove ? ml(a.dataset.favRemove) : a.hasAttribute("data-fav-add") ? (Dn = !Dn, aa(), Dn && gt.querySelector("[data-fav-search]").focus({ preventScroll: !0 })) : a.dataset.favPick ? id(a.dataset.favPick) : a.hasAttribute("data-tile-add") ? (Bn = !Bn, aa(), Bn && gt.querySelector("[data-tile-search]").focus({ preventScroll: !0 })) : a.dataset.tilePick ? En(a.dataset.tilePick) : a.hasAttribute("data-fav-suggest") && fi({ suggest: !xn() }));
  }), gt.addEventListener("input", (e) => {
    e.target.matches("[data-fav-search],[data-tile-search]") && aa();
  }), gt.addEventListener("keydown", (e) => {
    var i, d;
    const a = !!((d = (i = e.target).closest) != null && d.call(i, '[data-pick="tiles"],[data-tile-add]'));
    e.key !== "Escape" || !(a ? Bn : Dn) || (e.stopPropagation(), a ? Bn = !1 : Dn = !1, aa(), gt.querySelector(a ? "[data-tile-add]" : "[data-fav-add]").focus({ preventScroll: !0 }));
  });
  function gl(e, a, i, d) {
    e.preventDefault();
    const u = e.clientX, f = e.clientY;
    let h = null, b = 0;
    const k = Object.assign(document.createElement("div"), { className: "tfFavDrop" }), D = (O) => {
      if (!h) {
        if (Math.hypot(O.clientX - u, O.clientY - f) < 4) return;
        h = a.cloneNode(!0), h.classList.add("tfTrayGhost"), h.style.width = a.offsetWidth + "px", m.appendChild(h);
      }
      h.style.transform = "translate(" + (O.clientX - 24) + "px," + (O.clientY - 24) + "px)";
      const ce = !un && O.clientX >= gt.getBoundingClientRect().left;
      if (i === "card") {
        const ee = E.getBoundingClientRect(), { w: xe } = Eo(E.clientWidth);
        yt = !ce && O.clientX >= ee.left && O.clientX <= ee.right && O.clientY >= ee.top + Yn ? { key: d, col: Math.max(0, Math.floor((O.clientX - ee.left) / (xe + $t))), row: Math.max(0, Math.floor((O.clientY - ee.top - Yn) / so)), fromTray: !0 } : null, b || (b = requestAnimationFrame(() => {
          b = 0, xa();
        }));
        return;
      }
      const Se = E.querySelector(".tfDash-favs"), Ne = Se == null ? void 0 : Se.getBoundingClientRect();
      if (Ta = null, Ne && !ce && O.clientX >= Ne.left && O.clientX <= Ne.right && O.clientY >= Ne.top && O.clientY <= Ne.bottom) {
        let ee = 1 / 0;
        Se.querySelectorAll('[data-k^="fav:"]').forEach((xe, z) => {
          const be = xe.getBoundingClientRect(), $ = Math.hypot(O.clientX - (be.left + be.width / 2), O.clientY - (be.top + be.height / 2));
          $ < ee && (ee = $, Ta = { i: z, r: be, after: O.clientX > be.left + be.width / 2 });
        }), Ta || (Ta = { i: 0, r: null, after: !1 });
      }
      Ta != null && Ta.r ? (k.isConnected || m.appendChild(k), Object.assign(k.style, { left: (Ta.after ? Ta.r.right : Ta.r.left) - 2 + "px", top: Ta.r.top + 8 + "px", height: Ta.r.height - 16 + "px" })) : k.remove();
    }, H = () => {
      if (window.removeEventListener("pointermove", D), window.removeEventListener("pointerup", H), window.removeEventListener("pointercancel", H), cancelAnimationFrame(b), h == null || h.remove(), k.remove(), i === "card") {
        if (!h) us(d);
        else if (yt != null && yt.fromTray) {
          xa();
          const ee = wa(d) + dl(d), xe = Ft(), z = co();
          yt = null, pi({ ...xe, hidden: xe.hidden.filter((be) => be !== d) }, z), Mn(ee);
        }
        yt = null, xa(), Tt(), aa();
        return;
      }
      if (!Ta) return;
      const O = new Set(q.favHidden || []);
      O.delete(d);
      const ce = Ra().filter((ee) => ee !== d), Se = ce.filter((ee) => !O.has(ee)), Ne = Se[Math.min(Ta.i + (Ta.after ? 1 : 0), Se.length)];
      ce.splice(Ne ? ce.indexOf(Ne) : ce.length, 0, d), Ta = null, fi({ favourites: ce, favHidden: [...O] }), Mn(ke(d) + " put back");
    };
    window.addEventListener("pointermove", D), window.addEventListener("pointerup", H), window.addEventListener("pointercancel", H);
  }
  const vl = { sums: 201, wx: 364, favs: 364, areas: 364, act: 364, energy: 288, avg: 288, aq: 288, pollen: 288, radar: 288 }, Po = 136, Io = 288, ho = 0.8, bl = { wx: "mdi:weather-partly-cloudy", areas: "mdi:home", favs: "mdi:star", act: "mdi:history", energy: "mdi:lightning-bolt", avg: "mdi:chart-line", aq: "mdi:air-filter", pollen: "mdi:flower-pollen", radar: "mdi:radar" }, la = Object.assign(document.createElement("aside"), { className: "tfMiniPhone" });
  la.setAttribute("aria-label", "Phone order"), la.innerHTML = '<div class="tfPhoneHead"><div class="activityTitle">Phone</div><button class="tfTrayBtn" type="button" data-phone-close aria-label="Close the phone">' + Uc + '</button></div><p class="tfTrayNote" data-phone="note"></p><div class="tfPhoneScreen"><div class="tfPhoneList" data-phone="list"></div></div>', m.appendChild(la);
  let ws = "";
  function mi() {
    var b;
    const e = Kn && Ma && m.classList.contains("tfBoard") && !un;
    if (la.classList.toggle("open", e), la.toggleAttribute("inert", !e), !e) return;
    const a = ar().filter((k) => !Ft().hidden.includes(k.key)), i = a.length, d = (k) => Math.round(k * ho * 10) / 10 + "px", u = (k, D) => {
      const H = k.el.classList.contains("tfDac"), O = k.tile ? H ? Io : Po : vl[k.key] || Po;
      return '<button class="tfPhoneBlock' + (k.tile ? " tile" : "") + '" type="button" data-phone-key="' + re(k.key) + '" style="min-height:' + d(O) + '" aria-label="' + re(wa(k.key) + ", " + (D + 1) + " of " + i + ". Drag, or use the arrow keys, to move it") + '"><span class="tfIcon"' + (k.tile ? Bt(k.key, ia(k.key)) : Bt(k.key, bl[k.key])) + '></span><span class="tfPhoneName">' + re(wa(k.key)) + "</span></button>";
    }, f = '<div class="tfPhoneTitle">' + re(((b = E.querySelector(".tfDashTitle")) == null ? void 0 : b.textContent) || "") + '</div><div class="tfPhoneBlock fixed" style="min-height:' + d(vl.sums) + '"><span class="tfPhoneName">' + re(wa("sums")) + "</span></div>" + a.map(u).join("");
    if (la.querySelector('[data-phone="note"]').innerHTML = Ft().phone ? 'Phones use this order. <button class="tfLinkBtn" type="button" data-phone-reset>Follow the board</button>' : "Phones follow the board. Drag a card to give them an order of their own.", f === ws) return;
    ws = f;
    const h = la.querySelector('[data-phone="list"]');
    h.innerHTML = f, sn(h);
  }
  function wl(e, a) {
    var i;
    lo({ ...Ft(), phone: e }), aa(), a && ((i = la.querySelector('[data-phone-key="' + CSS.escape(a) + '"]')) == null || i.focus({ preventScroll: !0 }));
  }
  const fo = () => [...la.querySelectorAll("[data-phone-key]")].map((e) => e.dataset.phoneKey);
  function rd(e, a) {
    e.preventDefault();
    const i = a.parentElement, d = la.querySelector(".tfPhoneScreen"), u = fo().join();
    a.classList.add("moving");
    const f = (b) => {
      const k = d.getBoundingClientRect();
      b.clientY > k.bottom - 40 ? d.scrollTop += 12 : b.clientY < k.top + 40 && (d.scrollTop -= 12);
      const D = [...i.querySelectorAll("[data-phone-key]")].find((ce) => {
        const Se = ce.getBoundingClientRect();
        return ce !== a && b.clientX >= Se.left && b.clientX <= Se.right && b.clientY >= Se.top && b.clientY <= Se.bottom;
      });
      if (!D) return;
      const H = D.getBoundingClientRect(), O = D.classList.contains("tile") ? b.clientX < H.left + H.width / 2 : b.clientY < H.top + H.height / 2;
      i.insertBefore(a, O ? D : D.nextSibling);
    }, h = () => {
      window.removeEventListener("pointermove", f), window.removeEventListener("pointerup", h), window.removeEventListener("pointercancel", h), a.classList.remove("moving");
      const b = fo();
      ws = "", b.join() !== u ? wl(b) : mi();
    };
    window.addEventListener("pointermove", f), window.addEventListener("pointerup", h), window.addEventListener("pointercancel", h);
  }
  la.addEventListener("pointerdown", (e) => {
    const a = e.target.closest("[data-phone-key]");
    a && e.button <= 0 && rd(e, a);
  }), la.addEventListener("click", (e) => {
    var i;
    const a = e.target.closest("button");
    if (a != null && a.hasAttribute("data-phone-close"))
      Kn = !1, aa(), (i = gt.querySelector("[data-phone-toggle]")) == null || i.focus({ preventScroll: !0 });
    else if (a != null && a.hasAttribute("data-phone-reset")) {
      const { phone: d, ...u } = Ft();
      lo(u), aa();
    }
  }), la.addEventListener("keydown", (e) => {
    var h, b, k, D;
    if (e.key === "Escape") {
      e.stopPropagation(), Kn = !1, aa(), (h = gt.querySelector("[data-phone-toggle]")) == null || h.focus({ preventScroll: !0 });
      return;
    }
    const a = (D = (k = (b = e.target).closest) == null ? void 0 : k.call(b, "[data-phone-key]")) == null ? void 0 : D.dataset.phoneKey, i = { ArrowUp: -1, ArrowLeft: -1, ArrowDown: 1, ArrowRight: 1 }[e.key];
    if (!a || !i) return;
    e.preventDefault();
    const d = fo(), u = d.indexOf(a), f = u + i;
    f < 0 || f >= d.length || ([d[u], d[f]] = [d[f], d[u]], wl(d, a));
  });
  function xs(e, a) {
    e.preventDefault();
    const i = a.parentElement;
    a.classList.add("moving");
    const d = (f) => {
      const h = [...i.children].find((b) => {
        const k = b.getBoundingClientRect();
        return b !== a && f.clientY >= k.top && f.clientY <= k.bottom;
      });
      if (h) {
        const b = h.getBoundingClientRect();
        i.insertBefore(a, f.clientY < b.top + b.height / 2 ? h : h.nextSibling);
      }
    }, u = () => {
      window.removeEventListener("pointermove", d), window.removeEventListener("pointerup", u), window.removeEventListener("pointercancel", u), a.classList.remove("moving");
      const f = new Set(Ra());
      vs.favs = null, fi({ favourites: [...i.children].map((h) => h.dataset.trayFav).filter((h) => f.has(h)) });
    };
    window.addEventListener("pointermove", d), window.addEventListener("pointerup", u), window.addEventListener("pointercancel", u);
  }
  gt.addEventListener("pointerdown", (e) => {
    if (e.button > 0) return;
    const a = e.target.closest("[data-tray-card]"), i = e.target.closest(".tfTrayFav");
    a ? gl(e, a, "card", a.dataset.trayCard) : i && e.target.closest(".tfTrayGrip") ? xs(e, i) : i != null && i.classList.contains("off") && !e.target.closest("button") && gl(e, i, "fav", i.dataset.trayFav);
  });
  function gi(e) {
    if (!Ma || e.button !== 0 || e.target.closest("[data-board-more],.tfBoardMenu,.tfFavHides")) return;
    const a = e.target.closest(".tfBoardItem"), i = a && Za().find((O) => O.el === a);
    if (!i || _o.includes(i.key)) return;
    const d = cn.get(i.key), { w: u } = Eo(E.clientWidth);
    if (!d) return;
    e.preventDefault(), pn();
    const f = e.clientX, h = e.clientY;
    let b = !1, k = 0;
    const D = (O) => {
      const ce = O.clientX - f, Se = O.clientY - h;
      if (!b) {
        if (Math.hypot(ce, Se) < 4) return;
        b = !0, yt = { key: i.key, col: d.col, row: d.row }, a.classList.add("tfDragging");
      }
      a.style.transform = "translate(" + ce + "px," + Se + "px)", yt.col = Math.round((d.x + ce) / (u + $t)), yt.row = Math.round((d.y + Se - Yn) / so), k || (k = requestAnimationFrame(() => {
        k = 0, xa();
      }));
    }, H = () => {
      window.removeEventListener("pointermove", D), window.removeEventListener("pointerup", H), window.removeEventListener("pointercancel", H), b && (cancelAnimationFrame(k), xa(), a.classList.remove("tfDragging"), a.style.transform = "", yt = null, pi(Ft(), co()), xa(), Tt());
    };
    window.addEventListener("pointermove", D), window.addEventListener("pointerup", H), window.addEventListener("pointercancel", H);
  }
  function vi(e = !1) {
    const a = E == null ? void 0 : E.querySelector(".tfDashGraph svg[data-graph]");
    if (!(a != null && a.clientWidth)) return;
    const i = a.dataset.graph + "@" + a.clientWidth + "x" + a.clientHeight + "@" + Math.floor(Date.now() / 3e5);
    if (a.dataset.drawn === i) return;
    const d = !a.dataset.drawn;
    a.dataset.drawn = i;
    const u = tl.find((f) => f.id === a.dataset.graph);
    u ? Na(a, u).then(() => {
      (e || d) && Xi(a);
    }) : ki(a.dataset.graph, a).then(() => {
      e && ri(a);
    });
  }
  function Pr() {
    var b, k, D;
    Je = mr.model(o()), Vn(), y = Je.states, y[(b = q.sources) == null ? void 0 : b.grid] && (Je.grid = q.sources.grid), y[(k = q.sources) == null ? void 0 : k.alarm] && (Je.security.alarms = [q.sources.alarm]), C.forEach((H, O) => {
      const ce = y[O], Se = (ce == null ? void 0 : ce.attributes) || {};
      if (!ce || Date.now() - H.at > 2 * 60 * 1e3) {
        C.delete(O);
        return;
      }
      H.pos != null && ce.state !== "opening" && ce.state !== "closing" && Math.abs(Wa(O) - H.pos) < 1 && delete H.pos, H.tilt != null && Math.abs((Se.current_tilt_position ?? -1) - H.tilt) < 1 && delete H.tilt, H.pos == null && H.tilt == null && C.delete(O);
    });
    const e = [];
    let a = 0;
    const i = ti();
    It = i.filter((H) => H.room).map((H) => H.room), It.some((H) => H.id === ie) || (ie = ((D = It[0]) == null ? void 0 : D.id) || null);
    const d = Ae === "weather" ? { key: "weather", name: "Weather" } : Ae && i.find((H) => H.key === Ae);
    if (d || (Ae = null), m.classList.toggle("tfAreaOpen", !!d), m.classList.toggle("tfWeatherOpen", (d == null ? void 0 : d.key) === "weather"), m.classList.toggle("tfDash", !d), _t = /* @__PURE__ */ new Map(), Je.rooms.forEach((H) => [...H.actions, ...H.plugs, ...H.readings, ...H.openings, ...H.solar, ...H.plants.flatMap((O) => [O.id, ...O.readings])].forEach((O) => _t.set(O, H.name))), !d) return Gn(e, ji());
    if (e.push({ key: "areahead", html: ys(d, ++a) }), d.key === "weather")
      return e.weather = ++a, e;
    const u = d.ids, f = d.room ? d.room.id : d.key, h = d.room;
    return h != null && h.solar.length && e.push({ key: "energy:" + h.id, html: Ua(h, ++a) }), h && (h.readings.length || h.plugs.length || h.power != null) && e.push({ key: "readings:" + h.id, html: ln(h, ++a) }), h == null || h.plants.forEach((H) => e.push({ key: "plant:" + H.id, html: Fi(H, ++a) })), u.length && e.push({ key: "block:" + f, order: ++a, tiles: u.map((H) => ({ key: H, html: Be(H) })) }), e;
  }
  const ys = (e, a) => '<div class="settingsHeader tfAreaHead" data-tf data-k="areahead" style="order:' + a + '"><button class="back" type="button" data-area-back aria-label="Back to the house">' + Nc + '</button><div class="settingsTitle">' + re(e.name) + "</div></div>";
  let Ho = 0, Fo = null;
  const Ka = (e) => e === "weather" ? ut.wx : E.querySelector(".tfAreas");
  function ks(e) {
    var a, i;
    Ae || (Ho = mo().scrollTop, Fo = ((a = Ka(e)) == null ? void 0 : a.getBoundingClientRect().top) ?? null), Ae = e, e.startsWith("room:") && (ie = e.slice(5)), $a(), mo().scrollTop = 0, (i = E.querySelector("[data-area-back]")) == null || i.focus({ preventScroll: !0 });
  }
  let bi = null;
  function Ms(e, a) {
    if (bi == null || bi(), a == null) return;
    const i = mo(), d = performance.now() + 1500, u = ["wheel", "touchstart", "pointerdown", "keydown"];
    let f = 0;
    const h = () => {
      cancelAnimationFrame(f), u.forEach((k) => window.removeEventListener(k, h, !0)), bi = null;
    }, b = () => {
      const k = e();
      if (k != null && k.isConnected) {
        const D = k.getBoundingClientRect().top - a;
        Math.abs(D) > 0.5 && (i.scrollTop += D);
      }
      performance.now() < d ? f = requestAnimationFrame(b) : h();
    };
    u.forEach((k) => window.addEventListener(k, h, { capture: !0, passive: !0 })), bi = h, b();
  }
  function Ss() {
    var i;
    const e = Ae;
    Ae = null, $a(), mo().scrollTop = Ho, Ms(() => Ka(e), Fo);
    const a = e.startsWith("room:") ? E.querySelector('.tfAreaPanel[data-area="' + CSS.escape(e.slice(5)) + '"]') : e === "weather" ? ut.wx.querySelector(".wbOpenPage") : E.querySelector('[data-k="sum:' + CSS.escape(e) + '"]');
    (i = (a == null ? void 0 : a.querySelector("[data-go]")) || a) == null || i.focus({ preventScroll: !0 });
  }
  const Cs = (e) => e.wrap ? e.wrap(e.tiles.map((a) => a.html).join(""), e) : '<div class="tfBlock" data-tf data-k="' + re(e.key) + '" style="order:' + e.order + '"><div class="tfActions">' + e.tiles.map((a) => a.html).join("") + "</div></div>", Ir = (e) => e.map((a) => a.key + (a.tiles ? "(" + a.tiles.map((i) => i.key).join(",") + ")" : "")).join(";");
  function mo() {
    for (let e = m.parentElement || m.getRootNode().host; e; e = e.parentElement || e.getRootNode().host) {
      const a = getComputedStyle(e).overflowY;
      if ((a === "auto" || a === "scroll") && e.scrollHeight > e.clientHeight) return e;
    }
    return document.scrollingElement;
  }
  function Hr(e) {
    const a = mo(), i = (b) => {
      const k = b.getBoundingClientRect();
      return k.height && k.bottom > 0 && k.top < window.innerHeight;
    }, d = [...E.children, ...E.querySelectorAll(".tfDashTiles > *")].find((b) => !b.matches(".tfDashTiles") && i(b)), u = d == null ? void 0 : d.dataset.k, f = d == null ? void 0 : d.getBoundingClientRect().top;
    e();
    const h = d != null && d.isConnected ? d : u && E.querySelector('[data-k="' + CSS.escape(u) + '"]');
    h != null && h.isConnected && f != null && (a.scrollTop += h.getBoundingClientRect().top - f);
  }
  function $a() {
    if (!w || !E) return;
    const e = Pr();
    E.querySelectorAll("[data-tf]").forEach((i) => i.remove()), va.clear();
    const a = document.createElement("div");
    a.innerHTML = e.map((i) => i.tiles ? Cs(i) : i.html).join(""), e.forEach((i) => i.tiles ? i.tiles.forEach((d) => va.set(d.key, d.html)) : va.set(i.key, i.html)), _a = Ir(e), E.append(...a.children), gr(e.weather), Yo(), za.disconnect(), xa(), sn(E), Wr(E), wn(E), G(), N && ki(N.id), vo(), xi(), Ja(), requestAnimationFrame(Q);
  }
  const Ts = (e) => {
    var i;
    const a = n.activeElement && e.contains(n.activeElement) ? n.activeElement : null;
    return a && { label: a.getAttribute("aria-label"), act: (i = a.dataset) == null ? void 0 : i.act };
  }, Ls = (e, a) => {
    var i;
    a && ((i = a.label && e.querySelector('[aria-label="' + CSS.escape(a.label) + '"]') || a.act && e.querySelector('[data-act="' + CSS.escape(a.act) + '"]')) == null || i.focus({ preventScroll: !0 }));
  };
  function Fr(e, a) {
    if (!e.querySelector(".tfDacPad"))
      return e.replaceWith(a), a;
    const i = e.matches(".tfDac") && e.querySelector(":scope > .tfDacPad"), d = a.querySelector(":scope > .tfDacPad");
    if (i)
      return (d == null ? void 0 : d.dataset.dac) !== i.dataset.dac ? (e.replaceWith(a), a) : (e.querySelector(":scope > .tfActionHead").replaceWith(a.querySelector(":scope > .tfActionHead")), e.classList.toggle("on", a.classList.contains("on")), ["data-light", "data-tone"].forEach((f) => a.hasAttribute(f) ? e.setAttribute(f, a.getAttribute(f)) : e.removeAttribute(f)), [...e.style].filter((f) => f.startsWith("--") && !f.startsWith("--tf-")).forEach((f) => e.style.removeProperty(f)), [...a.style].forEach((f) => e.style.setProperty(f, a.style.getPropertyValue(f))), e);
    if (e.tagName !== a.tagName || e.children.length !== a.children.length)
      return e.replaceWith(a), a;
    [...e.attributes].forEach((f) => {
      a.hasAttribute(f.name) || e.removeAttribute(f.name);
    }), [...a.attributes].forEach((f) => e.setAttribute(f.name, f.value));
    const u = [...a.children];
    return [...e.children].forEach((f, h) => Fr(f, u[h])), e;
  }
  function Xa(e, a) {
    const i = document.createElement("div");
    i.innerHTML = a;
    const d = Ts(e), u = Fr(e, i.firstElementChild);
    sn(u), Wr(u), wn(u), Ls(u, d);
  }
  function Tt() {
    !w || !E || yt || Hr(As);
  }
  function As() {
    if (!E.querySelector("[data-tf]")) {
      $a();
      return;
    }
    const e = Pr();
    if (Ir(e) !== _a) {
      $a();
      return;
    }
    const a = (i) => [...qe.keys()].some((d) => {
      const u = d.slice(d.indexOf("|") + 1);
      return i === u || i.endsWith(":" + u);
    });
    e.forEach((i) => (i.tiles || [i]).forEach((d) => {
      if (va.get(d.key) === d.html || a(d.key)) return;
      const u = E.querySelector('[data-k="' + CSS.escape(d.key) + '"]');
      if (u) {
        if (va.set(d.key, d.html), N && N.key === d.key && u.querySelector(".tfOpen")) {
          u.querySelector(".tfOpen .activityRowMeta").textContent = $o(N.id);
          return;
        }
        Xa(u, d.html), N && N.key === d.key && ki(N.id), d.key.startsWith("energy:") && vo();
      }
    })), xi(), Ja(), br(), G(), Ke == null || Ke.update(), zt == null || zt.forEach((i) => i.update()), m.classList.contains("tfDash") && Sa(), requestAnimationFrame(Q);
  }
  const _s = {
    light: (e) => [["Brightness", e.brightness != null ? Math.round(e.brightness / 2.55) + "%" : null], ["Colour temperature", e.color_temp_kelvin ? Number(e.color_temp_kelvin).toLocaleString() + " K" : null], ["Colour mode", e.color_mode && Oe(e.color_mode)]],
    climate: (e) => [["Current temperature", Fa(e.current_temperature) + " °C"], ["Target", Fa(e.temperature) + " °C"], ["Action", Oe(e.hvac_action)]],
    cover: (e) => [["Position", e.current_position != null ? e.current_position + "% open" : null], ["Tilt", e.current_tilt_position != null ? e.current_tilt_position + "% open" : null]],
    humidifier: (e) => [["Current humidity", e.current_humidity + "%"], ["Target", e.humidity + "%"], ["Mode", Oe(e.mode)]],
    media_player: (e) => [["Title", e.media_title], ["Artist", e.media_artist], ["Volume", e.volume_level != null ? Math.round(e.volume_level * 100) + "%" : null], ["Source", e.source]],
    vacuum: (e) => [["Battery", e.battery_level + "%"], ["Fan speed", Oe(e.fan_speed)], ["Rooms", (e.rooms || []).join(", ") || null]],
    lock: (e) => [["Changed by", e.changed_by]],
    alarm_control_panel: (e) => [["Changed by", e.changed_by]],
    valve: () => [],
    plant: (e) => [["Moisture", e.moisture + "%"], ["Light", Number(e.brightness).toLocaleString() + " lx"], ["Temperature", Fa(e.temperature) + " °C"], ["Fertility", e.conductivity + " µS/cm"], ["Problems", e.problem === "none" ? "None" : Oe(e.problem)]],
    weather: (e) => [["Temperature", e.temperature != null ? e.temperature + " " + (e.temperature_unit || "°C") : null], ["Humidity", e.humidity != null ? e.humidity + "%" : null], ["Wind", e.wind_speed != null ? e.wind_speed + " " + (e.wind_speed_unit || "km/h") : null], ["Pressure", e.pressure != null ? e.pressure + " " + (e.pressure_unit || "hPa") : null]]
  }, xl = (e) => {
    var i;
    const a = (((i = _s[e.split(".")[0]]) == null ? void 0 : i.call(_s, kt(e))) || []).filter(([, d]) => d != null && d !== "");
    return a.length ? '<div class="tfMoreRows">' + a.map(([d, u]) => '<div class="tfMoreRow"><span>' + re(d) + "</span><span>" + re(u) + "</span></div>").join("") + "</div>" : "";
  }, sd = (e) => cr(e) ? '<div class="tfMoreNote">Made up for this page</div>' : "";
  function yl(e, a = {}, i = !1) {
    return '<div class="tfMoreList">' + e.map((d) => '<div class="tfMoreGroup"><div class="tfMoreGroupName">' + re(d.name) + '</div><div class="tfMoreTiles' + (i ? " single" : "") + '">' + d.ids.map((u) => xr(u, a)).join("") + "</div></div>").join("") + "</div>";
  }
  const dt = document.createElement("div");
  dt.className = "tfMoreBackdrop", dt.hidden = !0, m.appendChild(dt);
  const Es = (e, a) => {
    for (let i = e; i && i !== dt; i = i.parentElement) {
      const d = getComputedStyle(i).overflowY;
      if ((d === "auto" || d === "scroll") && i.scrollHeight > i.clientHeight + 1 && (a < 0 ? i.scrollTop > 0 : i.scrollTop + i.clientHeight < i.scrollHeight - 1)) return !0;
    }
    return !1;
  };
  let wi = null;
  dt.addEventListener("touchstart", (e) => {
    wi = { x: e.touches[0].clientX, y: e.touches[0].clientY };
  }, { passive: !0 }), dt.addEventListener("touchmove", (e) => {
    var u, f;
    if (!wi || e.touches.length > 1 || (f = (u = e.target).closest) != null && f.call(u, "input,textarea,select")) return;
    const a = e.touches[0], i = wi.x - a.clientX, d = wi.y - a.clientY;
    wi = { x: a.clientX, y: a.clientY }, Math.abs(d) >= Math.abs(i) && !Es(e.target, d) && e.preventDefault();
  }, { passive: !1 }), dt.addEventListener("wheel", (e) => {
    Es(e.target, e.deltaY) || e.preventDefault();
  }, { passive: !1 });
  function $n() {
    const e = dt.querySelector(".tfMorePair"), a = dt.querySelector(".tfMore");
    e == null || e.classList.toggle("over", window.innerWidth <= 620 || (window.innerWidth - a.offsetWidth) / 2 < 328);
  }
  window.addEventListener("resize", $n, { passive: !0 }), w && At();
  let Xn = [];
  const kl = (e) => e === "favourites" || e.startsWith("summary:") || e.startsWith("group:");
  function Jn(e) {
    const a = (k, D = "") => '<div class="tfMoreHead">' + (I != null && I.back ? '<button class="tfBack" type="button" data-more-back aria-label="Back">' + Ld + "</button>" : "") + '<div class="activityTitle" id="tfMoreTitle">' + re(k) + "</div>" + D + '<button class="tfBack" type="button" data-more-close aria-label="Close">' + ef + "</button></div>", i = (k, D) => '<div class="tfMoreNow"><div class="tfMoreState">' + re(k) + "</div>" + (D ? '<div class="tfMoreSub">' + re(D) + "</div>" : "") + "</div>", d = yl;
    if (e === "favourites") {
      const k = Ra(), D = new Set(k), H = [{ name: "Starred", ids: k }, { name: "Home", ids: Je.homeVacuums }, { name: "Security", ids: [...Je.security.alarms, ...Je.security.locks] }, ...Je.rooms.map((O) => ({ name: O.name, ids: [...O.actions, ...O.plugs] }))].map((O, ce) => ce ? { ...O, ids: O.ids.filter((Se) => !D.has(Se)) } : O).filter((O) => O.ids.length);
      return [a("Favourites"), i(k.length ? k.length + " starred" : "None starred"), d(H, { star: !0 }, !0)];
    }
    const u = (k, { name: D = "", alert: H = !1, plain: O = !1 } = {}) => {
      const ce = O ? [] : k.filter((ee) => Ol.includes(ee.split(".")[0])), Se = k.filter((ee) => !ce.includes(ee)), Ne = (ee) => ee.startsWith("vacuum.") && kt(ee).battery_level != null ? kt(ee).battery_level + "%" : null;
      return '<div class="tfMoreGroup">' + (D ? '<div class="tfMoreGroupName">' + re(D) + "</div>" : "") + '<div class="tfMoreActions">' + ce.map((ee) => Be(ee, !0)).join("") + Se.map((ee) => xr(ee, { plain: O, alert: H, say: O ? Ne(ee) : null })).join("") + "</div></div>";
    };
    if (e.startsWith("summary:")) {
      const k = ji().find((ce) => ce.key === e.slice(8));
      if (!k) return null;
      const D = k.key === "light" ? (k.groups || []).flatMap((ce) => ce.ids) : [], H = D.some((ce) => {
        var Se;
        return ((Se = y[ce]) == null ? void 0 : Se.state) === "on";
      }), O = D.length ? '<button class="primary" type="button" data-acts="' + no(D.map((ce) => ["light", H ? "turn_off" : "turn_on", ce])) + '">' + (H ? "Turn all off" : "Turn all on") + "</button>" : "";
      return [a(k.name), '<div class="tfMoreNowRow">' + i(k.value) + O + "</div>", ...(k.groups || []).map((ce) => u(ce.ids, { name: ce.name === k.name ? "" : ce.name, alert: ce.alert, plain: k.plain }))];
    }
    if (e.startsWith("group:")) {
      const [, k, D] = e.split(":"), H = Je.rooms.find((Se) => Se.id === k), O = H && zn(H).find((Se) => Se.key === D);
      if (!O) return null;
      const ce = O.acts ? '<button class="primary" type="button" data-acts="' + no(O.acts) + '">' + (O.on ? "Turn all off" : "Turn all on") + "</button>" : "";
      return [a(H.name + " " + O.label.toLowerCase()), '<div class="tfMoreNowRow">' + i(O.value) + ce + "</div>", u(Tn(H, D))];
    }
    const f = e.split(".")[0], h = y[e], b = Ol.includes(f) ? sa(e) : { sections: [] };
    return [
      a(ke(e)),
      i(oa(e), h.last_changed && On(Date.parse(h.last_changed))),
      (I == null ? void 0 : I.at) && '<svg class="tfGraph tfDay" data-day="' + re(e) + '" role="img" aria-label="' + re(ke(e)) + ', last 24 hours"></svg>',
      f === "cover" && '<div data-cover-art="' + re(e) + '"></div>',
      ...b.sections.filter(Boolean),
      Or(e) && '<button class="tfDetailsBtn" type="button" data-details aria-expanded="' + !!(I != null && I.details) + '" aria-controls="tfMoreSide"><span>Details</span>' + Yc + "</button>"
    ].filter(Boolean);
  }
  const Or = (e) => kl(e) ? "" : xl(e) + sd(e);
  let Ds = "";
  function go(e) {
    var a;
    I && (I.details = e, xi(), (a = dt.querySelector(e ? "[data-details-close]" : "[data-details]")) == null || a.focus({ preventScroll: !0 }));
  }
  const Oo = (e) => {
    const a = y[e], i = Wa(e), d = Wn(e);
    return { kind: Td(a), name: ke(e), text: oa(e), pos: i, target: Math.abs(d - i) > 0.5 ? d : null, moving: a.state === "opening" || a.state === "closing", tilt: ao(e) ?? 100, canSet: jt(e, Wc) };
  };
  function Wr(e) {
    e.querySelectorAll("[data-cover-art]").forEach((a) => {
      const i = a.dataset.coverArt, d = a.dataset.artKey || "more:" + i;
      let u = P.get(d);
      u || (u = Qh({ onMove: (f) => Mi(i, f), onSet: (f) => {
        Mi(i, f), Ci("pos", i);
      } }), u.coverId = i, P.set(d, u)), a.replaceWith(u.el), u.update(Oo(i));
    });
  }
  const qr = (e) => [...P.values()].filter((a) => a.coverId === e), Bs = () => P.forEach((e) => {
    y[e.coverId] && e.update(Oo(e.coverId));
  }), Ja = () => {
    P.forEach((e, a) => {
      e.el.isConnected || (e.destroy(), P.delete(a));
    }), Bs();
  };
  function xi() {
    var f, h;
    if (!I || !(kl(I.id) || y[I.id])) {
      dt.hidden = !0;
      return;
    }
    if ([...qe.keys()].some((b) => b.endsWith("|" + I.id))) {
      Bs();
      return;
    }
    const e = Jn(I.id), a = dt.querySelector(".tfMore");
    if (!e) {
      ir();
      return;
    }
    const i = Ts(dt), d = Or(I.id), u = I.frame ? I.frame.wide : I.id.startsWith("summary:") || I.id.startsWith("group:");
    if (dt.hidden || !a || e.length !== Xn.length || a.classList.contains("wide") !== u) {
      const b = Ns ? I.scroll || 0 : !dt.hidden && a ? a.scrollTop : 0;
      dt.innerHTML = '<div class="tfMorePair' + (dt.hidden ? "" : " still") + '" role="dialog" aria-modal="true" aria-labelledby="tfMoreTitle"><section class="tfMore' + (u ? " wide" : "") + '"' + (I.frame ? ' style="height:' + I.frame.h + 'px"' : "") + ">" + e.join("") + "</section>" + (d ? '<aside class="tfMoreSide" id="tfMoreSide" aria-label="Details"><div class="tfMoreSideInner"><div class="tfMoreHead"><button class="tfBack" type="button" data-details-close aria-label="Back">' + Ld + '</button><div class="activityTitle">Details</div></div><div class="tfMoreSideBody">' + d + "</div></div></aside>" : "") + "</div>", Ds = d, dt.classList.toggle("wide", u), dt.hidden = !1, $n(), Wr(dt), wn(dt), sn(dt), dt.querySelectorAll("[data-day]").forEach((k) => dd(k.dataset.day, k, I.at)), b && (dt.querySelector(".tfMore").scrollTop = b), Ls(dt, i), dt.contains(n.activeElement) || (f = dt.querySelector("[data-more-close]")) == null || f.focus({ preventScroll: !0 });
    } else {
      if (e.forEach((b, k) => {
        var O, ce;
        if (b === Xn[k] || b.includes("data-cover-art") || a.children[k].contains((ce = (O = n.activeElement) == null ? void 0 : O.matches) != null && ce.call(O, "input,select") ? n.activeElement : null) || [...qe.keys()].some((Se) => a.children[k].querySelector('[data-drag="' + CSS.escape(Se) + '"]'))) return;
        const D = document.createElement("div");
        D.innerHTML = b;
        const H = Fr(a.children[k], D.firstElementChild);
        sn(H), wn(H);
      }), d !== Ds) {
        const b = dt.querySelector(".tfMoreSideBody");
        b && (b.innerHTML = d), Ds = d;
      }
      dt.contains(n.activeElement) || Ls(dt, i);
    }
    (h = dt.querySelector(".tfMorePair")) == null || h.classList.toggle("details", !!(I.details && d)), Xn = e, Bs();
  }
  setInterval(() => {
    I && xi();
  }, 15 * 1e3);
  function Rs(e, a) {
    var u;
    const i = !!(I && a && dt.contains(a)), d = i && dt.querySelector(".tfMore");
    i && (I.scroll = d.scrollTop), I = { id: e, opener: i ? I.opener : a, back: i ? I : null, frame: i ? I.frame || { wide: d.classList.contains("wide"), h: d.offsetHeight } : null, at: Number((u = a == null ? void 0 : a.dataset) == null ? void 0 : u.at) || null }, Ml();
  }
  let Ns = !1;
  function Ml() {
    Xn = [], Ns = !dt.hidden, P.forEach((e, a) => {
      a !== I.id && dt.contains(e.el) && (e.destroy(), P.delete(a));
    }), xi(), Ns = !1;
  }
  function ir() {
    var i, d, u, f, h, b;
    const e = I == null ? void 0 : I.opener;
    I = null, P.forEach((k, D) => {
      dt.contains(k.el) && (k.destroy(), P.delete(D));
    }), Re.forEach((k, D) => {
      D.startsWith("more:") && Re.delete(D);
    }), dt.hidden = !0, dt.innerHTML = "";
    const a = { preventScroll: !0 };
    e != null && e.isConnected ? e.focus(a) : (i = e == null ? void 0 : e.dataset) != null && i.more ? (d = E.querySelector('[data-more="' + CSS.escape(e.dataset.more) + '"]')) == null || d.focus(a) : (u = e == null ? void 0 : e.dataset) != null && u.summary ? (f = E.querySelector('[data-summary="' + CSS.escape(e.dataset.summary) + '"]')) == null || f.focus(a) : (h = e == null ? void 0 : e.hasAttribute) != null && h.call(e, "data-favs-edit") && ((b = E.querySelector("[data-favs-edit]")) == null || b.focus(a));
  }
  function Ps(e, a, i, d = {}) {
    const u = a.map((xe) => xe[1]), f = d.zero ? 0 : Math.min(...u), h = Math.max(...u), b = Math.max(120, e.clientWidth || 260), k = Math.max(60, e.clientHeight || 130), D = 8, H = k - 20, O = Date.now() - 24 * 3600 * 1e3, ce = 24 * 3600 * 1e3, Se = (xe) => Math.max(0, Math.min(b, (xe - O) / ce * b)), Ne = (xe) => h === f ? (D + H) / 2 : H - (xe - f) / (h - f) * (H - D);
    let ee = "M" + Se(a[0][0]).toFixed(1) + " " + Ne(a[0][1]).toFixed(1);
    for (let xe = 1; xe < a.length; xe++) ee += d.smooth ? "L" + Se(a[xe][0]).toFixed(1) + " " + Ne(a[xe][1]).toFixed(1) : "H" + Se(a[xe][0]).toFixed(1) + "V" + Ne(a[xe][1]).toFixed(1);
    e.setAttribute("viewBox", "0 0 " + b + " " + k), e.setAttribute("aria-label", i), e.innerHTML = '<path d="' + ee + "V" + H + "H" + Se(a[0][0]).toFixed(1) + 'Z" fill="' + (d.colour || "var(--primary)") + '" fill-opacity=".14"/><path d="' + ee + '" fill="none" stroke="' + (d.colour || "var(--primary)") + '" stroke-width="2" stroke-linejoin="round"/><text x="0" y="' + (k - 4) + '">24 h ago</text><text x="' + b + '" y="' + (k - 4) + '" text-anchor="end">Now</text>';
  }
  const Va = { lock: ["unlocked", "open", "opening"], cover: ["open", "opening", "closing"], valve: ["open", "opening", "closing"], vacuum: ["cleaning", "returning"] }, Sl = (e, a) => {
    const i = e.split(".")[0];
    return Va[i] ? Va[i].includes(a) : i === "alarm_control_panel" || i === "climate" || i === "media_player" ? !["off", "standby", "disarmed", "unavailable", "unknown"].includes(a) : a === "on";
  }, ld = (e) => {
    const a = e.split(".")[0], i = kt(e).device_class;
    return a === "binary_sensor" ? { moisture: "Wet", smoke: "Smoke", gas: "Gas", carbon_monoxide: "Carbon monoxide", safety: "Unsafe" }[i] || (Fl.includes(i) ? "Open" : "On") : { lock: "Unlocked", cover: "Open", valve: "Open", vacuum: "Cleaning", alarm_control_panel: "Armed" }[a] || "On";
  }, yi = /* @__PURE__ */ new Map();
  let rr = 0;
  async function Is(e) {
    let a = yi.get(e);
    if (!a || Date.now() - a.at > 60 * 1e3) {
      let u = [];
      try {
        const f = await B({ type: "history/history_during_period", start_time: new Date(Date.now() - 864e5).toISOString(), entity_ids: [e], minimal_response: !0, no_attributes: !0, significant_changes_only: !1 });
        u = ((f == null ? void 0 : f[e]) || []).map((h) => [h.lu != null ? h.lu * 1e3 : Date.parse(h.last_updated || h.last_changed), String(h.s ?? h.state)]).filter(([h]) => Number.isFinite(h));
      } catch {
      }
      u.length || (u = (kn || []).filter((f) => f.entity_id === e).map((f) => [f.when * 1e3, String(f.state)])), a = { at: Date.now(), pts: u }, yi.set(e, a);
    }
    const i = y[e], d = a.pts.slice().sort((u, f) => u[0] - f[0]);
    return i && (!d.length || d[d.length - 1][1] !== i.state) && d.push([Date.parse(i.last_changed) || Date.now(), i.state]), d;
  }
  async function dd(e, a, i) {
    const d = await Is(e);
    if (!a.isConnected) return;
    const u = d.map(([$, Ue]) => [$, Number(Ue)]);
    if (d.length > 1 && u.every(([, $]) => Number.isFinite($))) {
      Ps(a, u, ke(e) + ", last 24 hours");
      return;
    }
    const f = Date.now(), h = f - 864e5, b = Math.max(200, a.clientWidth || 360), k = 62, D = ($) => Math.max(0, Math.min(b, ($ - h) / 864e5 * b)), H = [];
    let O = null;
    d.forEach(([$, Ue]) => {
      const Ht = Sl(e, Ue);
      Ht && O == null ? O = Math.max($, h) : !Ht && O != null && (H.push([O, Math.max($, h)]), O = null);
    }), O != null && H.push([O, f]);
    const ce = oi(e) ? "var(--danger)" : e.startsWith("light.") ? "#ffaa00" : "var(--primary)", Se = ld(e), Ne = "tfDayClip" + ++rr, ee = H.map(([$, Ue]) => Se + (Ue >= f - 1e3 && $ <= h + 1e3 ? " all day" : Ue >= f - 1e3 ? " since " + Ut($) : $ <= h + 1e3 ? " until " + Ut(Ue) : " " + Ut($) + "–" + Ut(Ue)));
    let xe = "", z = -1 / 0;
    H.forEach(([$], Ue) => {
      const Ht = ee[Ue].length * 5.4, bt = Math.min(D($), b - Ht);
      bt < z + 8 || (xe += '<text x="' + bt.toFixed(1) + '" y="10">' + re(ee[Ue]) + "</text>", z = bt + Ht);
    });
    let be = '<text x="' + b + '" y="' + (k - 2) + '" text-anchor="end">Now</text>';
    [0, 6, 12, 18].forEach(($) => {
      let Ue = new Date(f).setHours($, 0, 0, 0);
      Ue > f && (Ue -= 864e5), D(Ue) > 8 && D(Ue) < b - 34 && (be += '<text x="' + D(Ue).toFixed(1) + '" y="' + (k - 2) + '" text-anchor="middle">' + String($).padStart(2, "0") + "</text>");
    }), a.setAttribute("viewBox", "0 0 " + b + " " + k), a.setAttribute("aria-label", ke(e) + ", last 24 hours: " + (ee.length ? ee.join(", ") : "no changes")), a.innerHTML = '<clipPath id="' + Ne + '"><rect x="0" y="18" width="' + b + '" height="26" rx="8"/></clipPath>' + xe + '<rect x="0" y="18" width="' + b + '" height="26" rx="8" fill="var(--text)" fill-opacity=".1"/><g clip-path="url(#' + Ne + ')">' + H.map(([$, Ue]) => '<rect x="' + D($).toFixed(1) + '" y="18" width="' + Math.max(2, D(Ue) - D($)).toFixed(1) + '" height="26" fill="' + ce + '"/>').join("") + "</g>" + (i && i >= h ? '<line x1="' + D(i).toFixed(1) + '" x2="' + D(i).toFixed(1) + '" y1="13" y2="49" stroke="var(--text)" stroke-width="2" stroke-linecap="round"/>' : "") + be;
  }
  function zr(e) {
    var d;
    const a = Number((d = y[e]) == null ? void 0 : d.state), i = Date.now();
    if (kt(e).state_class === "total_increasing") {
      const u = (/* @__PURE__ */ new Date()).setHours(0, 0, 0, 0), f = Math.max(1, i - u);
      return [...Array(49)].map((h, b) => u + f * b / 48).map((h) => [h, Math.round(a * Math.pow((h - u) / f, 1.3) * 100) / 100]);
    }
    return [...Array(48)].map((u, f) => [i - (48 - f) * 30 * 60 * 1e3, Math.round(a * (0.96 + 0.04 * Math.sin(f / 6)) * 10) / 10]);
  }
  async function ki(e, a) {
    var Se, Ne;
    let i = Ie.get(e);
    if (e.endsWith("_solar_power")) i = { at: Date.now(), points: ic() };
    else if (cr(e)) i = { at: Date.now(), points: zr(e) };
    else if (!i || Date.now() - i.at > 5 * 60 * 1e3) {
      try {
        const ee = new Date(Date.now() - 864e5).toISOString(), xe = await B({ type: "history/history_during_period", start_time: ee, entity_ids: [e], minimal_response: !0, no_attributes: !0, significant_changes_only: !1 }), z = ((xe == null ? void 0 : xe[e]) || []).map((be) => [be.lu != null ? be.lu * 1e3 : Date.parse(be.last_updated || be.last_changed), Number(be.s ?? be.state)]).filter(([be, $]) => Number.isFinite(be) && Number.isFinite($));
        i = { at: Date.now(), points: z };
      } catch {
        i = { at: Date.now(), points: [] };
      }
      Ie.set(e, i);
    }
    const d = a || E.querySelector('[data-graph="' + CSS.escape(e) + '"]');
    if (!d) return;
    const u = y[e], f = ((Se = u == null ? void 0 : u.attributes) == null ? void 0 : Se.unit_of_measurement) || "", h = i.points.slice(), b = Number(u == null ? void 0 : u.state);
    if (Number.isFinite(b) && !e.endsWith("_solar_power") && h.push([Date.now(), b]), h.length < 2) {
      d.setAttribute("aria-label", ke(e) + ": no history for the last 24 hours"), d.innerHTML = '<text x="0" y="16">No history for the last 24 hours</text>';
      return;
    }
    const k = h.map((ee) => ee[1]), D = Math.min(...k), H = Math.max(...k), O = (ee) => ee.toLocaleString(void 0, { maximumFractionDigits: Math.abs(ee) >= 100 ? 0 : 1 }), ce = ((Ne = u == null ? void 0 : u.attributes) == null ? void 0 : Ne.state_class) === "total_increasing";
    Ps(d, h, ke(e) + ", last 24 hours: " + (ce ? "+" + O(k[k.length - 1] - k[0]) : D === H ? O(D) : O(D) + " to " + O(H)) + (f ? " " + f : ""), { smooth: e.endsWith("_solar_power"), zero: e.endsWith("_solar_power") });
  }
  function vo() {
    const e = E == null ? void 0 : E.querySelector("[data-solar]");
    if (!e) return;
    const a = ic();
    Ps(e, a, "Solar, last 24 hours: up to " + Fa(Math.max(...a.map((i) => i[1])), 1) + " kW", { smooth: !0, zero: !0, colour: "#ffaa00" });
  }
  function jr(e, a) {
    const i = a.entity_id, d = C.get(i) || {}, u = { open_cover: 100, close_cover: 0, set_cover_position: a.position, toggle: Wa(i) > 0 ? 0 : 100 }[e], f = { open_cover_tilt: 100, close_cover_tilt: 0, set_cover_tilt_position: a.tilt_position }[e];
    u != null && (d.pos = u), f != null && (d.tilt = f), e === "stop_cover" && (delete d.pos, delete d.tilt), e === "stop_cover_tilt" && delete d.tilt, d.at = Date.now(), C.set(i, d);
  }
  function Hs(e, a, i) {
    var u;
    const d = i == null ? void 0 : i.entity_id;
    return e !== "light" || typeof d != "string" || !vn[d] || !Fn(d) || i.brightness_pct != null || i.brightness != null ? [a, i] : a !== "turn_on" && !(a === "toggle" && ((u = y[d]) == null ? void 0 : u.state) !== "on") ? [a, i] : ["turn_on", { ...i, brightness_pct: vn[d] }];
  }
  function sr(e, a, i, d) {
    let u = { entity_id: i, ...d || {} };
    return [a, u] = Hs(e, a, u), e === "cover" && jr(a, u), st[i] = (st[i] || 0) + 1, Ei.set(jc, JSON.stringify(st)), mr.call(e, a, u) ? Promise.resolve() : Promise.resolve(ge(e, a, u));
  }
  function Qn(e) {
    const [a, i, d, u] = e.split("|");
    sr(a, i, d, u ? JSON.parse(u) : null).catch(() => {
    });
  }
  function Mi(e, a) {
    qe.set("pos|" + e, a), va.delete(e), Xn = Xn.map(() => ""), [E, dt].forEach((d) => d.querySelectorAll('[data-blocks="' + CSS.escape(e) + '"]').forEach((u) => we(u, a)));
    const i = E.querySelector('.tfAction[data-k="' + CSS.escape(e) + '"] .tfName .activityRowMeta');
    if (i && (i.textContent = Math.round(a) + "%"), (I == null ? void 0 : I.id) === e) {
      const d = dt.querySelector(".tfMoreState"), u = dt.querySelector(".tfMoreSub");
      d && (d.textContent = Math.round(a) + "%", d.classList.add("live")), u && (u.textContent = "Currently " + Wa(e) + "%");
    }
    qr(e).forEach((d) => d.update(Oo(e)));
  }
  const na = (e, a) => {
    const i = e.shiftKey ? 10 : 1, d = { ArrowUp: a + i, ArrowRight: a + i, ArrowDown: a - i, ArrowLeft: a - i, PageUp: a + 25, PageDown: a - 25, Home: 0, End: 100 }[e.key];
    return d == null ? null : Math.max(0, Math.min(100, Math.round(d)));
  };
  function cd(e, a) {
    var ee;
    const i = e.dataset.blocks;
    (ee = e.setPointerCapture) == null || ee.call(e, a.pointerId);
    const d = (xe) => {
      const z = e.getBoundingClientRect();
      return Math.max(0, Math.min(100, (xe.clientX - z.left) / z.width * 100));
    }, u = d(a), f = a.clientX;
    let h = !1, b = Wn(i), k = u, D = 0;
    const H = () => {
      b = Math.abs(k - b) < 0.2 ? k : b + (k - b) * 0.14, Mi(i, b), D = requestAnimationFrame(H);
    }, O = () => {
      h || (h = !0, e.classList.add("fine"), D = requestAnimationFrame(H));
    }, ce = setTimeout(O, 350), Se = (xe) => {
      k = d(xe), Math.abs(xe.clientX - f) > 6 && (clearTimeout(ce), O());
    }, Ne = () => {
      clearTimeout(ce), cancelAnimationFrame(D), e.removeEventListener("pointermove", Se), e.removeEventListener("pointerup", Ne), e.removeEventListener("pointercancel", Ne), e.classList.remove("fine"), Mi(i, h ? Math.round(b) : (Math.min(3, Math.floor(u / 25)) + 1) * 25), Ci("pos", i);
    };
    e.addEventListener("pointermove", Se), e.addEventListener("pointerup", Ne), e.addEventListener("pointercancel", Ne);
  }
  function Rn(e) {
    var u;
    const [a, i] = e.dataset.open.split("|"), d = e.closest(".tfCard");
    N = { key: a, id: i, h: d ? Math.round(d.getBoundingClientRect().height) : 0 }, va.delete(a), Tt(), (u = E.querySelector(".tfOpen [data-close]")) == null || u.focus({ preventScroll: !0 });
  }
  function Fs(e) {
    var a;
    ie = e.dataset.area, E.querySelectorAll(".tfAreaPanel").forEach((i) => {
      var u;
      const d = i === e;
      i.classList.toggle("active", d), i.setAttribute("aria-expanded", String(d)), (u = i.querySelector(".panelExpanded")) == null || u.toggleAttribute("inert", !d);
    }), va.set("areas", jn(((a = E.querySelector('[data-k="areas"]')) == null ? void 0 : a.style.order) || 1));
  }
  const Os = {
    bright: { value: (e, a) => Math.round(a * 100), text: (e, a) => a ? a + "%" : "Off", send: (e, a) => a > 0 ? ["light", "turn_on", { brightness_pct: a }] : ["light", "turn_off", {}] },
    ct: { value: (e, a) => {
      const [i, d] = Mo(e);
      return Math.round(i + a * (d - i));
    }, text: (e, a) => a.toLocaleString() + "k", send: (e, a) => ["light", "turn_on", { color_temp_kelvin: a }] },
    hue: { value: (e, a) => Math.round(a * 360), text: () => "Colour", send: (e, a) => {
      var i;
      return ["light", "turn_on", { hs_color: [a, Math.max(60, ((i = kt(e).hs_color) == null ? void 0 : i[1]) || 100)] }];
    } },
    pos: { value: (e, a) => Math.round(a * 100), text: (e, a) => Math.round(a) + "%", send: (e, a) => ["cover", "set_cover_position", { position: Math.round(a) }] },
    tilt: { value: (e, a) => Math.round(a * 100), text: (e, a) => "Tilt " + a + "%", send: (e, a) => ["cover", "set_cover_tilt_position", { tilt_position: a }] },
    vol: { value: (e, a) => Math.round(a * 100) / 100, text: (e, a) => Math.round(a * 100) + "%", send: (e, a) => ["media_player", "volume_set", { volume_level: a }] }
  };
  function Si(e, a, i, d) {
    var k;
    const u = Os[a].value(i, d);
    qe.set(a + "|" + i, u);
    const f = Math.round(d * 100) + "%", h = e.querySelector("i");
    if (a === "tilt") {
      h.style.width = "calc((100% - 8px) * " + d + ")";
      const [D, H] = e.querySelectorAll("span");
      D.classList.toggle("lit", d > 0.08), H.classList.toggle("lit", d > 0.92), va.delete(i), Xn = Xn.map(() => ""), qr(i).forEach((O) => O.update(Oo(i)));
    } else if (h) h.style.width = f;
    else {
      let D = e.querySelector("b");
      D || (D = document.createElement("b"), e.appendChild(D)), D.style.left = f;
    }
    e.setAttribute("aria-valuenow", String(Math.round(d * 100)));
    const b = (k = e.closest(".tfAction") || e.closest(".tfMore")) == null ? void 0 : k.querySelector(".tfName .activityRowMeta, .tfMoreState");
    b && (b.textContent = Os[a].text(i, u));
  }
  function Ci(e, a) {
    const i = qe.get(e + "|" + a), [d, u, f] = Os[e].send(a, i), h = () => setTimeout(() => {
      qe.delete(e + "|" + a), Tt();
    }, 1500);
    sr(d, u, a, f).then(h, h);
  }
  function lr(e) {
    e.addEventListener("click", (a) => {
      var d, u;
      const i = a.target.closest("[data-open],[data-close],[data-act],[data-acts],[data-more],[data-more-close],[data-more-back],[data-details],[data-details-close],[data-go],[data-summary],[data-star],[data-favs-edit],[data-area-back],[data-board-more],[data-board-act],[data-board-show],[data-fav-hide],[data-energy-pick],.tfAreaPanel");
      if (Pa && !a.target.closest(".tfBoardMenu,[data-board-more]") && pn(), !(!i || !e.contains(i) || i.disabled))
        if (i.dataset.boardMore)
          (Pa == null ? void 0 : Pa.key) === i.dataset.boardMore ? pn(!0) : ps(i.dataset.boardMore, i);
        else if (i.dataset.boardAct) ll(Pa.key, i.dataset.boardAct);
        else if (i.dataset.boardShow) us(i.dataset.boardShow);
        else if (i.dataset.favHide) bs(i.dataset.favHide, !1);
        else if (i.dataset.energyPick) Sr(i.dataset.energyPick);
        else if (i.dataset.act) Qn(i.dataset.act);
        else if (i.hasAttribute("data-details")) go(!(I != null && I.details));
        else if (i.hasAttribute("data-details-close")) go(!1);
        else if (i.dataset.summary) as(i.dataset.summary, i);
        else if (i.dataset.star) Qs(i.dataset.star);
        else if (i.hasAttribute("data-more-back")) {
          const f = I.id;
          I = I.back, Ml(), (d = dt.querySelector('.tfMore [data-more="' + CSS.escape(f) + '"]')) == null || d.focus({ preventScroll: !0 });
        } else if (i.hasAttribute("data-favs-edit")) Rs("favourites", i);
        else if (i.dataset.acts) JSON.parse(i.dataset.acts).forEach(([f, h, b, k]) => sr(f, h, b, k).catch(() => {
        }));
        else if (i.dataset.more) Rs(i.dataset.more, i);
        else if (i.hasAttribute("data-more-close")) ir();
        else if (i.dataset.go) ks("room:" + i.dataset.go);
        else if (i.hasAttribute("data-area-back")) Ss();
        else if (i.dataset.open) Rn(i);
        else if (i.hasAttribute("data-close")) {
          const f = N;
          N = null, va.delete(f.key), Tt(), (u = E.querySelector('[data-open="' + CSS.escape(f.key + "|" + f.id) + '"]')) == null || u.focus({ preventScroll: !0 });
        } else i.classList.contains("tfAreaPanel") && !i.classList.contains("active") && Fs(i);
    }), e.addEventListener("keydown", (a) => {
      var d, u, f, h, b, k, D;
      const i = a.target;
      if ((d = i.dataset) != null && d.open && (a.key === "Enter" || a.key === " ") && (a.preventDefault(), Rn(i)), (u = i.dataset) != null && u.energyPick && (a.key === "Enter" || a.key === " ") && (a.preventDefault(), Sr(i.dataset.energyPick)), (f = i.classList) != null && f.contains("tfAreaPanel") && (a.key === "Enter" || a.key === " ") && (a.preventDefault(), Fs(i)), (h = i.dataset) != null && h.summary && (a.key === "Enter" || a.key === " ") && (a.preventDefault(), as(i.dataset.summary, i)), a.key === "Escape" && Pa && e === E) {
        a.preventDefault(), pn(!0);
        return;
      }
      if (a.key === "Escape" && Ma && e === E) {
        a.preventDefault(), nr(!1), (b = c("dashEditNav")) == null || b.focus();
        return;
      }
      if (a.key === "Escape" && Ae && e === E && (a.preventDefault(), Ss()), (k = i.dataset) != null && k.blocks) {
        const H = i.dataset.blocks, O = na(a, Math.round(Wn(H)));
        if (O == null) return;
        a.preventDefault(), Mi(H, O), clearTimeout(fe.get(H)), fe.set(H, setTimeout(() => Ci("pos", H), 500));
        return;
      }
      if ((D = i.dataset) != null && D.drag && ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"].includes(a.key)) {
        a.preventDefault();
        const [H, O] = i.dataset.drag.split("|"), ce = Number(i.getAttribute("aria-valuenow")) / 100, Se = a.key === "Home" ? 0 : a.key === "End" ? 1 : Math.max(0, Math.min(1, ce + (a.key === "ArrowLeft" || a.key === "ArrowDown" ? -0.05 : 0.05)));
        Si(i, H, O, Se), Ci(H, O);
      }
    }), e.addEventListener("pointerdown", (a) => {
      var Ht;
      const i = a.target.closest("[data-blocks]");
      if (i && a.button === 0) {
        a.preventDefault(), cd(i, a);
        return;
      }
      const d = a.target.closest("[data-drag]");
      if (!d || a.button > 0) return;
      const [u, f] = d.dataset.drag.split("|"), h = u === "bright" && !Fn(f), b = a.pointerType !== "mouse";
      if (h && !b) {
        Qn(Ct("light", "toggle", f));
        return;
      }
      const k = u === "bright" && ((Ht = y[f]) == null ? void 0 : Ht.state) !== "on", D = u === "tilt" ? 4 : 0, H = () => d.getBoundingClientRect().width - D * 2, O = (bt) => {
        const La = d.getBoundingClientRect();
        return Math.max(0, Math.min(1, (bt.clientX - La.left - D) / H()));
      };
      let ce = b ? "waiting" : k ? "pressed" : "dragging", Se = 0;
      const Ne = a.clientX, ee = a.clientY, xe = (bt, La) => Math.hypot(bt.clientX - Ne, bt.clientY - ee) > La, z = () => {
        try {
          d.setPointerCapture(a.pointerId);
        } catch {
        }
      };
      b || (a.preventDefault(), z()), ce === "dragging" && Si(d, u, f, O(a));
      const be = () => {
        var bt, La;
        ce = "sliding", _ = d, d.classList.add("held"), z(), (bt = navigator.userActivation) != null && bt.hasBeenActive && ((La = navigator.vibrate) == null || La.call(navigator, 8)), Se = k ? (vn[f] ?? 100) / 100 : Number(d.getAttribute("aria-valuenow")) / 100;
      }, $ = (bt) => {
        ce === "waiting" && xe(bt, M) ? !h && Math.abs(bt.clientX - Ne) > Math.abs(bt.clientY - ee) ? be() : ce = "gone" : ce === "pressed" && xe(bt, 4) && (ce = "dragging"), ce === "sliding" ? Si(d, u, f, Math.max(0, Math.min(1, Se + (bt.clientX - Ne) / H()))) : ce === "dragging" && Si(d, u, f, O(bt));
      }, Ue = (bt) => {
        ["pointermove", "pointerup", "pointercancel"].forEach((La, Ze) => d.removeEventListener(La, Ze ? Ue : $)), d.classList.remove("held"), _ === d && (_ = null), ce === "sliding" || ce === "dragging" ? Ci(u, f) : bt.type === "pointerup" && h ? Qn(Ct("light", "toggle", f)) : bt.type === "pointerup" && k && (ce === "waiting" || ce === "pressed") && sr("light", "turn_on", f).catch(() => {
        });
      };
      d.addEventListener("pointermove", $), d.addEventListener("pointerup", Ue), d.addEventListener("pointercancel", Ue);
    }), e.addEventListener("touchmove", (a) => {
      _ && a.cancelable && a.preventDefault();
    }, { passive: !1 });
  }
  return E && w && (Vi(), lr(E), lr(dt), dt.addEventListener("click", (e) => {
    e.target === dt && ir();
  }), (Cl = n.getElementById("homeNav")) == null || Cl.addEventListener("click", () => {
    Ae && Ss();
  }), (Tl = n.querySelector(".bottomNav")) == null || Tl.insertAdjacentHTML("beforeend", '<button class="navBtn" id="dashEditNav" type="button" title="Edit" aria-label="Edit the dashboard" aria-pressed="false" hidden>' + Zc + "</button>"), (dr = c("dashEditNav")) == null || dr.addEventListener("click", () => nr(!Ma)), E.addEventListener("pointerdown", gi), new ResizeObserver(() => {
    m.classList.contains("tfDash") && ss() !== is ? Tt() : Sa();
  }).observe(E), window.addEventListener("resize", Sa, { passive: !0 }), dt.addEventListener("keydown", (e) => {
    e.key === "Escape" && (e.stopPropagation(), I != null && I.details ? go(!1) : ir());
  })), X(), {
    update(e) {
      if (!w) return;
      const a = !Object.keys(y).length;
      y = e || {};
      for (const i in y) i.startsWith("light.") && y[i].state === "on" && Fn(i) && S(i, In(y[i]));
      a ? $a() : Tt();
    },
    // the bento's animation runs while it's mounted, so it goes while the card is away
    suspend() {
      yo = !0, Ke == null || Ke.destroy(), Ke = null, zt == null || zt.forEach((e) => e.destroy()), zt = null;
    },
    resume() {
      yo = !1, !(!w || !(E != null && E.querySelector("[data-tf]"))) && (lt.isConnected && gr(lt.style.order), Yo());
    }
  };
}
const Lf = "0.61.0", Dd = "move_assistant", Af = "move_assistant", Xc = "move_assistant_checkin_reminder";
function _f() {
  if (document.getElementById("move-assistant-inter")) return;
  const n = document.createElement("link");
  n.id = "move-assistant-inter", n.rel = "stylesheet", n.href = "https://fonts.googleapis.com/css2?family=Geist:wght@200;300;400;500;600;700&family=Inter:ital,wght@0,400;0,500;0,600;0,700;0,800;1,500&display=swap", document.head.appendChild(n);
}
class Ef extends HTMLElement {
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
    _f();
    const l = this.shadowRoot || this.attachShadow({ mode: "open" });
    l.innerHTML = `<style>${Bp}${Rp}${Np}</style>${Pp}`;
    const o = l.getElementById("app");
    o.style.opacity = "0";
    let c = null;
    try {
      const m = await this._hass.callWS({
        type: "frontend/get_user_data",
        key: Dd
      });
      c = (m == null ? void 0 : m.value) ?? null;
    } catch {
    }
    this._lastSaved = JSON.stringify(c), this._app = tu(l, {
      data: c,
      save: (m) => this._save(m),
      fire: (m, v) => this._fire(m, v),
      ws: (m) => this._hass.callWS(m),
      subscribe: (m, v) => {
        var w, A;
        return (A = (w = this._hass) == null ? void 0 : w.connection) != null && A.subscribeMessage ? this._hass.connection.subscribeMessage(v, m) : Promise.reject(new Error("no connection"));
      },
      notifyServices: () => {
        var m, v;
        return Object.keys(((v = (m = this._hass) == null ? void 0 : m.services) == null ? void 0 : v.notify) || {}).sort();
      },
      setReminderAutomation: (m) => this._setReminderAutomation(m),
      setLight: (m) => this.classList.toggle("lightBody", m),
      fullscreenSupported: !!(this.requestFullscreen || this.webkitRequestFullscreen),
      toggleFullscreen: () => this._toggleFullscreen()
    }), this._lastStates = this._hass.states, this._app.updateStates(this._hass.states), this._test = Tf(l, { config: this._config, getHass: () => this._hass }), this._test.update(this._hass.states), this.isConnected || (this._app.suspend(), this._test.suspend()), o.style.transition = "opacity .2s ease", o.style.opacity = "", this._subscribe();
  }
  _subscribe() {
    var o;
    const l = (o = this._hass) == null ? void 0 : o.connection;
    l != null && l.subscribeMessage && l.subscribeMessage(
      (c) => {
        var v;
        const m = JSON.stringify((c == null ? void 0 : c.value) ?? null);
        m === this._lastSaved || m === this._pendingJson || (this._lastSaved = m, (v = this._app) == null || v.applyRemoteData(c.value));
      },
      { type: "frontend/subscribe_user_data", key: Dd }
    ).catch(() => {
    });
  }
  _save(l) {
    this._pendingJson = JSON.stringify(l), clearTimeout(this._saveTimer), this._saveTimer = setTimeout(async () => {
      const o = this._pendingJson;
      try {
        await this._hass.callWS({
          type: "frontend/set_user_data",
          key: Dd,
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
      event_type: Af,
      event_data: { action: l, ...o }
    }).catch(() => {
    }));
  }
  // Keeps one Home Assistant automation in sync with the check-in times.
  // Passing null removes it.
  async _setReminderAutomation(l) {
    const o = `config/automation/config/${Xc}`;
    if (!l) {
      try {
        await this._hass.callApi("DELETE", o);
      } catch (v) {
        if ((v == null ? void 0 : v.status_code) !== 404 && (v == null ? void 0 : v.status) !== 404) throw v;
      }
      return;
    }
    const c = (v) => `${v}:00`, m = window.location.pathname;
    await this._hass.callApi("POST", o, {
      id: Xc,
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
customElements.get("move-assistant-card") || (customElements.define("move-assistant-card", Ef), window.customCards = window.customCards || [], window.customCards.push({
  type: "move-assistant-card",
  name: "Move Assistant",
  description: "Guided movement timer with your Home Assistant activity data.",
  preview: !1
}), console.info(`%c MOVE ASSISTANT %c ${Lf} `, "background:#D0FF00;color:#090909;font-weight:700", ""));
