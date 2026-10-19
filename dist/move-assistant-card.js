const os = ':host{display:flex;flex-direction:column;min-height:calc(100dvh - var(--header-height,0px));position:relative;background:#050505;color-scheme:dark;--color-bg-ground:#090909;--color-bg-card:#222222;--color-bg-tile:#2b2b2b;--color-fill-bright:#f1f1f1;--color-text-primary:#f1f1f1;--color-text-muted:#969696;--color-text-on-bright:#090909;--color-line:rgba(255,255,255,.14);--color-border-focus:#03a9f4;--color-accent-primary:#03a9f4;--color-accent-secondary:#d0ff00;--color-text-accent:#d0ff00;--color-text-on-accent:#090909;--color-bg-resting:#1f7a4d;--color-bg-danger:#311313;--color-bg-danger-fill:#d53d3d;--color-border-danger:#8c2e2e;--color-text-danger:#ff7777;--color-text-on-danger:#ffffff;--color-state-hover:rgba(255,255,255,.08);--color-state-pressed:rgba(255,255,255,.14);--color-state-hover-on-bright:rgba(0,0,0,.06);--color-state-pressed-on-bright:rgba(0,0,0,.12);--scrim:rgba(0,0,0,.66);--lift:rgba(0,0,0,.5);--r:36px;--gap:20px}*{box-sizing:border-box}#app{color:var(--text);font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif;transition:background .25s ease,color .25s ease;-webkit-font-smoothing:antialiased}[hidden]{display:none!important}button,input{font:inherit}#app{flex:1;display:flex;flex-direction:column;width:100%;margin:0;padding:0;background:var(--bg);text-align:left}#app{--bg:var(--color-bg-ground);--page:var(--color-bg-ground);--card:var(--color-bg-card);--card2:var(--color-bg-card);--modal:var(--color-bg-card);--timer:var(--color-bg-card);--tile:var(--color-bg-tile);--tile-2:var(--color-bg-tile);--row:var(--color-bg-tile);--row-rest:var(--color-bg-tile);--raised:var(--color-bg-tile);--chip:var(--color-bg-tile);--segment:var(--color-bg-tile);--seg-on:var(--color-bg-tile);--scroll-thumb:var(--color-bg-tile);--checkin-due:var(--color-bg-tile);--control:var(--color-bg-ground);--control-2:var(--color-bg-ground);--sunken:var(--color-bg-ground);--input:var(--color-bg-ground);--track:var(--color-bg-ground);--bar-track:var(--color-bg-ground);--icon-bg:var(--color-bg-ground);--seg-bg:var(--color-bg-ground);--switch-off:var(--color-bg-ground);--stage:var(--color-bg-ground);--primary-tint:var(--color-bg-ground);--text:var(--color-text-primary);--soft:var(--color-text-primary);--muted:var(--color-text-muted);--accent-text:var(--color-text-accent);--border-hover:var(--color-text-muted);--knob-off:var(--color-text-muted);--today-ring:var(--color-text-muted);--dot-empty:var(--color-text-muted);--primary-ink:var(--color-text-muted);--line:var(--color-line);--lineb:var(--color-line);--field-line:var(--color-line);--divider:var(--color-line);--bright:var(--color-fill-bright);--slider-fill:var(--color-fill-bright);--segment-fill:var(--color-fill-bright);--timer-fill:var(--color-fill-bright);--on-bright:var(--color-text-on-bright);--hover:var(--color-state-hover);--wash:var(--color-state-hover);--wash-2:var(--color-state-hover);--wash-3:var(--color-state-pressed);--wash-4:var(--color-state-pressed);--danger:var(--color-text-danger);--danger-bg:var(--color-bg-danger);--danger-line:var(--color-border-danger);--danger-fill:var(--color-bg-danger-fill);--on-danger-fill:var(--color-text-on-danger);--primary:var(--color-accent-primary);--secondary:var(--color-accent-secondary)}.shell{flex:1;display:flex;flex-direction:column;position:relative;width:100%;background:var(--page);border-radius:0;overflow:visible;transition:background .28s ease}#app.resting .shell{background:var(--color-bg-resting)}#app.paused .shell{background:var(--primary)}#app.light.paused .shell{background:color-mix(in srgb,var(--primary) 55%,white)}#app.light{--color-bg-ground:#eeeded;--color-bg-card:#ffffff;--color-bg-tile:#f4f3f3;--color-fill-bright:#222222;--color-text-primary:#222222;--color-text-muted:#3f3f3f;--color-text-on-bright:#ffffff;--color-line:rgba(0,0,0,.12);--color-text-accent:#222222;--color-bg-resting:#7dbb98;--color-bg-danger:#f5dede;--color-border-danger:#e3a0a0;--color-text-danger:#c62f2f;--color-state-hover:rgba(0,0,0,.06);--color-state-pressed:rgba(0,0,0,.12);--scrim:rgba(20,20,20,.32);--lift:rgba(0,0,0,.16)}#app.light .energyBtn:hover,#app.light .energyBtn:focus-visible,#app.light .energyBtn.selected{background:color-mix(in srgb,var(--feeling-color) 34%,white);color:#222!important}:host(.lightBody){background:#eeeded;color-scheme:light}.view{display:none;width:100%;max-width:1184px;margin:0 auto;padding:22px 22px 76.8px}.view.active{display:block;flex:1 0 auto}.card,.panel,.tile{position:relative;background:var(--card);border-radius:36px;padding:22px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.grid{display:grid;grid-template-columns:repeat(12,minmax(0,1fr));gap:16px}.eyebrow{text-transform:uppercase;color:var(--muted)}.sub{color:var(--muted);margin-top:6.4px}.pill,.primary,.navBtn,.tab,.back,.hideBtn,.addBtn{cursor:pointer}.pill{min-height:0;padding:3.2px 0;border:0;border-radius:0;background:transparent;color:var(--text);text-decoration-line:underline;text-decoration-thickness:.8px;text-underline-offset:3.2px}.tab,.back{border-radius:799.2px;min-height:41.6px;padding:0 16px;background:var(--control);border:.32px solid var(--line);color:var(--text)}.primary{border-radius:799.2px;min-height:41.6px;padding:0 17.6px;border:0;background:var(--bright);color:var(--on-bright)}.topbar{display:flex;justify-content:space-between;gap:16px;align-items:flex-start;margin-bottom:19.2px}.activityCard,.weekly{grid-column:span 6}.energySection{grid-column:span 12;margin-top:16px}.activityCard,.weekly{min-height:288px}.wellness{width:100%}.sourceTag{display:inline-flex;margin-top:11.2px;padding:6.4px 9.6px;border-radius:799.2px;background:var(--chip);color:var(--soft)}.workoutFooter{display:flex;justify-content:space-between;align-items:end;gap:22.4px;flex-wrap:wrap;margin-top:22.4px;width:100%;box-sizing:border-box}.workoutGallery{grid-column:span 12;display:flex;gap:16px;height:288px;overflow:hidden}.workoutPanel{position:relative;height:288px;flex:1 1 72px;min-width:70.4px;background:var(--card);border-radius:28.8px;padding:22.4px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);overflow:hidden;box-sizing:border-box;transition:flex .32s ease;cursor:pointer}.workoutPanel.active{flex:7 1 0;min-width:0;cursor:default}.workoutPanel.addPanel{flex:0 0 73.6px;min-width:73.6px;display:flex;align-items:center;justify-content:center;padding:14.4px}.workoutPanel{--edge-proximity:0;--cursor-angle:45deg;--edge-sensitivity:36;--color-sensitivity:56;--cone-spread:25;--fill-opacity:.18;--glow-color:hsl(199deg 97% 68% / 100%);--glow-color-60:hsl(199deg 97% 68% / 60%);--glow-color-50:hsl(199deg 97% 68% / 50%);--glow-color-40:hsl(199deg 97% 68% / 40%);--glow-color-30:hsl(199deg 97% 68% / 30%);--glow-color-20:hsl(199deg 97% 68% / 20%);--glow-color-10:hsl(199deg 97% 68% / 10%);--gradient-one:radial-gradient(at 80% 55%,#c084fc 0px,transparent 50%);--gradient-two:radial-gradient(at 69% 34%,#f472b6 0px,transparent 50%);--gradient-three:radial-gradient(at 8% 6%,#38bdf8 0px,transparent 50%);--gradient-four:radial-gradient(at 41% 38%,#c084fc 0px,transparent 50%);--gradient-five:radial-gradient(at 86% 85%,#f472b6 0px,transparent 50%);--gradient-six:radial-gradient(at 82% 18%,#38bdf8 0px,transparent 50%);--gradient-seven:radial-gradient(at 51% 4%,#f472b6 0px,transparent 50%);isolation:isolate}.workoutPanel:before,.workoutPanel:after,.workoutPanel>.edgeLight{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;pointer-events:none;transition:opacity .18s ease-out}.workoutPanel:before{z-index:2;border:.8px solid transparent;background:linear-gradient(var(--card) 0 100%) padding-box,linear-gradient(#fff0 0,#fff0) border-box,var(--gradient-one) border-box,var(--gradient-two) border-box,var(--gradient-three) border-box,var(--gradient-four) border-box,var(--gradient-five) border-box,var(--gradient-six) border-box,var(--gradient-seven) border-box;opacity:clamp(0,calc(.72 * (var(--edge-proximity) - var(--color-sensitivity)) / (100 - var(--color-sensitivity))),.72);-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,black calc(var(--cone-spread) * 1%),transparent calc((var(--cone-spread) + 15) * 1%),transparent calc((100 - var(--cone-spread) - 15) * 1%),black calc((100 - var(--cone-spread)) * 1%));mask-image:conic-gradient(from var(--cursor-angle) at center,black calc(var(--cone-spread) * 1%),transparent calc((var(--cone-spread) + 15) * 1%),transparent calc((100 - var(--cone-spread) - 15) * 1%),black calc((100 - var(--cone-spread)) * 1%))}.workoutPanel:after{z-index:1;border:.8px solid transparent;background:var(--gradient-one) padding-box,var(--gradient-two) padding-box,var(--gradient-three) padding-box,var(--gradient-four) padding-box,var(--gradient-five) padding-box,var(--gradient-six) padding-box,var(--gradient-seven) padding-box;opacity:clamp(0,calc(var(--fill-opacity) * (var(--edge-proximity) - var(--color-sensitivity)) / (100 - var(--color-sensitivity))),.18);mix-blend-mode:soft-light;-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,transparent 5%,black 15%,black 85%,transparent 95%);mask-image:conic-gradient(from var(--cursor-angle) at center,transparent 5%,black 15%,black 85%,transparent 95%)}.workoutPanel>.edgeLight{top:-19.2px;right:-19.2px;bottom:-19.2px;left:-19.2px;z-index:3;opacity:clamp(0,calc(.62 * (var(--edge-proximity) - var(--edge-sensitivity)) / (100 - var(--edge-sensitivity))),.62);mix-blend-mode:plus-lighter;-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,black 2.5%,transparent 10%,transparent 90%,black 97.5%);mask-image:conic-gradient(from var(--cursor-angle) at center,black 2.5%,transparent 10%,transparent 90%,black 97.5%)}.workoutPanel>.edgeLight:before{content:"";position:absolute;top:19.2px;right:19.2px;bottom:19.2px;left:19.2px;border-radius:inherit;box-shadow:inset 0 0 0 .8px var(--glow-color-60),inset 0 0 2.4px 0 var(--glow-color-40),inset 0 0 6.4px 0 var(--glow-color-30),inset 0 0 12.8px 0 var(--glow-color-20),0 0 2.4px 0 var(--glow-color-40),0 0 6.4px 0 var(--glow-color-30),0 0 12.8px 0 var(--glow-color-20),0 0 22.4px 1.6px var(--glow-color-10)}.workoutPanel:not(.borderGlowActive):before,.workoutPanel:not(.borderGlowActive):after,.workoutPanel:not(.borderGlowActive)>.edgeLight{opacity:0;transition:opacity .35s ease-out}#app.light .workoutPanel{--glow-color:hsl(199deg 97% 48% / 100%);--glow-color-50:hsl(199deg 97% 48% / 50%);--glow-color-40:hsl(199deg 97% 48% / 40%);--glow-color-30:hsl(199deg 97% 48% / 30%);--glow-color-20:hsl(199deg 97% 48% / 20%);--glow-color-10:hsl(199deg 97% 48% / 10%)}.workoutPanel:not(.active):not(.addPanel) .panelExpanded{opacity:0;filter:blur(8px);pointer-events:none}.workoutPanel:not(.active):not(.addPanel) .panelCollapsed{opacity:1;filter:blur(0)}.workoutPanel.active .panelExpanded{opacity:1;filter:blur(0);pointer-events:auto}.workoutPanel.active .panelCollapsed{opacity:0;filter:blur(6.4px);pointer-events:none}.panelExpanded{position:relative;z-index:4;width:100%;height:100%;min-width:0;box-sizing:border-box;display:flex;flex-direction:column;justify-content:space-between;transition:opacity .22s ease,filter .22s ease}.panelCollapsed{position:absolute;top:0;right:0;bottom:0;left:0;z-index:4;display:flex;align-items:center;justify-content:center;opacity:0;filter:blur(6.4px);transition:opacity .22s ease,filter .22s ease}.panelCollapsedText{writing-mode:vertical-rl;transform:rotate(180deg);white-space:nowrap}.workoutPanelTop{display:flex;justify-content:space-between;align-items:flex-start;gap:22.4px;width:100%;min-width:0;box-sizing:border-box}.workoutPanelActions{display:flex;gap:22.4px;flex-wrap:wrap;align-items:center;justify-content:flex-end;margin-left:auto}.startWorkoutBtn{background:var(--primary)!important;color:#090909!important}.startWorkoutBtn:hover{filter:brightness(1.04)}.addPanelPlus{position:relative;z-index:4;font-size:27.2px;line-height:1}.addPanelLabel{position:absolute;z-index:4;bottom:16px;writing-mode:vertical-rl;transform:rotate(180deg);color:var(--muted)}@media (max-height:820px) and (min-width:621px){.modalStatic{padding:17.6px 22.4px}.timeTile{min-height:124.8px}}@media (max-width:900px){.weekCopy{white-space:normal}.workoutGallery{overflow-x:auto;scroll-snap-type:x mandatory;padding-bottom:3.2px}.workoutPanel,.workoutPanel.active{height:288px;flex:0 0 min(68.8vw,544px);min-width:min(68.8vw,544px);scroll-snap-align:start}.workoutPanel.addPanel{flex-basis:80px;min-width:80px}.panelCollapsed{display:none}}.moveActions{display:flex;gap:22.4px;flex-wrap:wrap}.energyFloat{padding:22.4px;background:transparent;border:0}.energyScale{display:grid;grid-template-columns:repeat(6,minmax(0,1fr));gap:9.6px;margin-top:17.6px}.energyBtn{--feeling-color:#8f8f8f;--feeling-glow:rgba(255,255,255,.14);position:relative;isolation:isolate;overflow:hidden;width:100%;min-height:43.2px;padding:0 9.6px;white-space:nowrap;border-radius:12.8px;background:var(--raised);border:.32px solid var(--line);color:var(--text);cursor:pointer;transition:color .18s ease,border-color .18s ease,background .18s ease}.energyBtn>span{position:relative;z-index:2}.energyBtn:before{content:"";position:absolute;top:-18%;right:-18%;bottom:-18%;left:-18%;z-index:-2;opacity:0;background:radial-gradient(ellipse at var(--feel-x,50%) var(--feel-y,50%),color-mix(in srgb,var(--feeling-color) 88%,transparent) 0%,color-mix(in srgb,var(--feeling-color) 54%,transparent) 34%,transparent 72%);transform:scale(.82) skew(-3deg);filter:saturate(1.08) blur(.8px);transition:opacity .18s ease,transform .28s cubic-bezier(.2,.8,.2,1)}.energyBtn:after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;z-index:-1;opacity:0;pointer-events:none;background:repeating-linear-gradient(to bottom,rgba(255,255,255,.07) 0,rgba(255,255,255,.07) .8px,transparent .8px,transparent 3.2px),linear-gradient(90deg,transparent 0%,color-mix(in srgb,var(--feeling-color) 34%,transparent) var(--feel-x,50%),transparent 100%);mix-blend-mode:screen}.energyBtn:hover:before,.energyBtn:focus-visible:before,.energyBtn.selected:before{opacity:.92;transform:translate(var(--feel-shift-x,0px),var(--feel-shift-y,0px)) scale(1.08) skew(2deg);animation:feelingWarp 1.45s ease-in-out infinite alternate}.energyBtn:hover:after,.energyBtn:focus-visible:after,.energyBtn.selected:after{opacity:.55;animation:feelingScan .9s linear infinite}.energyBtn:hover,.energyBtn:focus-visible,.energyBtn.selected{background:color-mix(in srgb,var(--feeling-color) 42%,#171717);border-color:color-mix(in srgb,var(--feeling-color) 72%,#ffffff 10%);color:#f4f4f4}.energyBtn.selected{box-shadow:inset 0 0 0 .8px color-mix(in srgb,var(--feeling-color) 58%,transparent),0 0 14.4px color-mix(in srgb,var(--feeling-color) 24%,transparent)}.energyBtn[data-energy=Drained]{--feeling-color:#6E63A8}.energyBtn[data-energy=Low]{--feeling-color:#5878A8}.energyBtn[data-energy=Okay]{--feeling-color:#6F8B8A}.energyBtn[data-energy=Good]{--feeling-color:#5F9B72}.energyBtn[data-energy=Energised]{--feeling-color:#D5A53E}.energyBtn[data-energy=Great]{--feeling-color:#D56B54}@keyframes feelingWarp{0%{transform:scale(1.03) skew(-2deg) translate(-1.5%);filter:saturate(1.02) blur(.8px)}50%{transform:scale(1.12) skew(1deg) translate(1%);filter:saturate(1.22) blur(1.5px)}to{transform:scale(1.06) skew(3deg) translate(-.5%);filter:saturate(1.1) blur(.6px)}}@keyframes feelingScan{0%{background-position:0 0,-80% 0}to{background-position:0 8px,180% 0}}@media (prefers-reduced-motion: reduce){.energyBtn:before,.energyBtn:after{animation:none!important}}.energyHistory{display:grid;gap:6.4px;margin-top:9.6px}.energyLog{display:flex;justify-content:space-between;gap:9.6px;padding:8px 9.6px;border-radius:16px;background:var(--tile)}.energyLog span:last-child{color:var(--muted)}.tempoExperiment{margin-top:14.4px;padding-top:16px;border-top:.32px solid var(--line)}.tempoExperimentHead{display:flex;justify-content:space-between;align-items:flex-start;gap:16px;margin-bottom:12.8px}.tempoEstimate{white-space:nowrap}.tempoQuad{position:relative;width:min(288px,100%);aspect-ratio:1/1;border-radius:28.8px;background:#ffffff06;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);overflow:hidden;touch-action:none;cursor:crosshair}.tempoCross{position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none;background:linear-gradient(to right,transparent calc(50% - .4px),rgba(255,255,255,.12) 50%,transparent calc(50% + .4px)),linear-gradient(to bottom,transparent calc(50% - .4px),rgba(255,255,255,.12) 50%,transparent calc(50% + .4px))}.tempoDot{position:absolute;left:50%;top:50%;width:17.6px;height:17.6px;border-radius:50%;background:var(--text);transform:translate(-50%,-50%);pointer-events:none;box-shadow:0 0 0 4.8px #ffffff12}.tempoPole{position:absolute;pointer-events:none;color:var(--muted)}.tempoFast{top:9.6px;left:50%;transform:translate(-50%)}.tempoSlow{bottom:9.6px;left:50%;transform:translate(-50%)}.tempoHard{right:9.6px;top:50%;transform:translateY(-50%)}.tempoLow{left:9.6px;top:50%;transform:translateY(-50%)}.tempoReadout{margin-top:9.6px;color:var(--muted)}.tempoRevealRow{margin-top:11.2px}.tempoRevealBtn{color:var(--muted);text-decoration-color:var(--muted)}.editTempoExperiment{margin-top:11.2px}.editTempoExperiment[hidden]{display:none}.testingZone{position:relative;overflow:hidden;border-radius:22.4px;background:#202226;border:.8px solid #4a4f58;box-shadow:none;--text:#d6d9df;--soft:#c7ccd5;--muted:#9ea5b0;--line:#4a4f58;--lineb:#4a4f58;--field-line:#4a4f58;color:var(--text)}.testingZoneInner{position:relative;padding:19.2px;background:linear-gradient(rgba(176,186,199,.045) .8px,transparent .8px),linear-gradient(90deg,rgba(176,186,199,.045) .8px,transparent .8px),#202226;background-size:16px 16px}.testingZoneTitleBlock{max-width:608px;margin-bottom:19.2px}.testingZoneTitleRow{display:flex;justify-content:space-between;align-items:center;gap:16px}.testingZoneTitleRow strong{color:#d6d9df}.testingZone .tempoEstimate{color:#aeb4bf}.testingZoneExplanation{margin:8px 0 0;color:#9ea5b0;text-align:left}.testingZoneLayout{display:grid;grid-template-columns:minmax(224px,288px) minmax(0,1fr);grid-template-areas:"controller feedback";gap:25.6px;align-items:start}.testingFeedbackForm{grid-area:feedback;display:grid;gap:14.4px;min-width:0;padding:16px;border:.32px solid var(--line);border-radius:16px;background:#252525}.testingFeedbackHeading{color:#d6d9df}.testingFeedbackField{display:grid;gap:6.4px;color:#9ea5b0}.testingFeedbackField select,.testingFeedbackField textarea{width:100%;border:.32px solid var(--line);background:#171717;color:#d6d9df;border-radius:11.2px;padding:8px 9.6px;font:inherit}.testingFeedbackField textarea{resize:vertical;min-height:65.6px}.testingRating{display:grid;grid-template-columns:repeat(5,1fr);gap:4.8px}.testingRating button{min-height:30.4px;border-radius:9.6px;border:.32px solid var(--line);background:#171717;color:#c7ccd5;cursor:pointer}.testingRating button.selected{border-color:#c7ccd5;background:#343434}.testingFeedbackSubmit{justify-self:start;min-height:33.6px;padding:0 12.8px;border-radius:11.2px;border:0;background:#ffffffe0;color:#111;cursor:pointer}.testingZoneControllerWrap{grid-area:controller;display:flex;flex-direction:column;align-items:center;justify-content:flex-start}.tempoQuadFrame{width:min(256px,100%);aspect-ratio:1/1;padding:0;background:linear-gradient(rgba(176,186,199,.075) .8px,transparent .8px),linear-gradient(90deg,rgba(176,186,199,.075) .8px,transparent .8px),#202226;background-size:16px 16px,16px 16px,auto;border-radius:16px}.testingZone .tempoQuad{width:100%;height:100%;border-radius:16px;background:#202226;border:.8px solid #5a606a;box-shadow:none}.testingZone .tempoCross{background:linear-gradient(to right,transparent calc(50% - .4px),rgba(176,186,199,.2) 50%,transparent calc(50% + .4px)),linear-gradient(to bottom,transparent calc(50% - .4px),rgba(176,186,199,.2) 50%,transparent calc(50% + .4px))}.testingZone .tempoDot{width:14.4px;height:14.4px;background:transparent;border:.8px solid #c4cad4;box-shadow:0 0 0 3.2px #c4cad40d}.testingZone .tempoPole{color:#8e96a2}.testingZone .tempoReadout{width:min(256px,100%);color:#9ea5b0;text-align:center;margin-top:9.6px}.testingZone button,.testingZone input,.testingZone select,.testingZone textarea{transition:opacity .14s ease,border-color .14s ease,color .14s ease,background .14s ease}.testingZone button:hover,.testingZone button:focus-visible{filter:none;opacity:.88}@media (max-width:900px){.testingZoneLayout{grid-template-columns:1fr;grid-template-areas:"controller" "feedback"}}.activityHeader{display:flex;align-items:center;gap:11.2px;margin-bottom:16px}.activityIcon{width:35.2px;height:35.2px;border-radius:13.6px;background:var(--icon-bg);display:grid;place-items:center;font-size:16px}.activityRows{display:grid;gap:9.6px}.activityRow{display:grid;grid-template-columns:43.2px minmax(0,1fr);align-items:center;gap:11.2px;background:var(--tile-2);border-radius:24px;padding:12px 14px}.activityRowIcon{width:43.2px;height:43.2px;border-radius:16px;background:var(--icon-bg);display:grid;place-items:center;font-size:16px}.activityRowMeta{color:var(--soft);margin-top:2.4px}.toast{position:absolute;right:20.8px;top:20.8px;z-index:60;background:var(--bright);color:var(--on-bright);border-radius:799.2px;padding:8.8px 12.8px;opacity:0;transform:translateY(-6.4px);pointer-events:none;transition:opacity .18s ease,transform .18s ease}.toast.show{opacity:1;transform:none}.weekHero{display:block}.weekCopy{color:var(--muted);margin-top:9.6px;max-width:none;white-space:nowrap}.weekChips{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:8px;margin-top:19.2px}.weekChip{background:var(--tile-2);border-radius:12.8px;min-height:60.8px;padding:9.6px 11.2px;display:flex;flex-direction:column;justify-content:space-between;gap:6.4px}.weekChipTop{display:flex;justify-content:space-between;align-items:center;gap:6.4px}.weekChipMeta{color:var(--muted)}.weekTick{font-size:11.2px;font-weight:800;line-height:1}.weekChip.total{background:var(--card2)}.workoutSurface{position:relative;overflow:hidden;isolation:isolate}.workoutContent{position:relative;z-index:2}.pixelTrailCanvas{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;z-index:1;pointer-events:none}#app.light .pixelTrailCanvas{opacity:.46}.sessionHead{display:flex;justify-content:space-between;align-items:flex-start;gap:16px}.sessionActions{display:flex;gap:22.4px;align-items:center;flex-wrap:wrap;justify-content:flex-end}.holdEnd{position:relative;overflow:hidden;min-width:110.4px;min-height:41.6px;padding:0 16px;border-radius:799.2px;border:.32px solid var(--line);background:var(--control);text-decoration:none;user-select:none;-webkit-user-select:none;touch-action:none}.holdEndFill{position:absolute;inset:0 auto 0 0;width:0;background:var(--bright);pointer-events:none}.holdEndLabel{position:relative;z-index:1;mix-blend-mode:difference;color:#fff}.holdEnd.holding{border-color:var(--muted)}.exerciseTitle{margin-top:4.8px;color:var(--accent-text)}.meta{color:var(--muted);margin-top:4.8px}.progress{height:46.4px;padding:0;background:transparent;border-radius:17.6px;display:flex;gap:3.2px;margin-top:19.2px;overflow:hidden}.progressSegment{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:0;padding:0;display:block;flex:1;min-width:0;background:var(--segment);border-radius:17.6px;position:relative;overflow:hidden;cursor:default}.progressSegment:after{content:"";position:absolute;inset:0 auto 0 0;width:0;background:var(--segment-fill);transition:width .2s linear}.progressSegment.done{background:transparent;opacity:0;pointer-events:none}.progressSegment.done:after{display:none}.progressSegment.active:after{width:var(--segment-progress,0%)}#app.resting .progressSegment:not(.done):not(.active),#app.paused .progressSegment:not(.done):not(.active){background:#fff}.progressSegment.rewindable{cursor:pointer}.progressSegment.rewindable:hover{filter:brightness(1.08)}.progressSegment:focus-visible{outline:1.6px solid var(--primary);outline-offset:-2.4px}.workGrid{display:grid;grid-template-columns:minmax(0,2fr) minmax(240px,1fr);gap:16px;margin-top:16px}.timerCard,.movementCard,.nextCard{position:relative;border-radius:28.8px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.timerCard{min-height:344px;background:var(--timer);overflow:hidden}.fill{position:absolute;inset:0 auto 0 0;width:100%;background:var(--timer-fill);transition:width .2s linear}.digits{position:absolute;top:0;right:0;bottom:0;left:0;display:flex;align-items:center;justify-content:center;font-size:clamp(152px,22.4vw,312px);font-weight:850;letter-spacing:-.11em;color:#fff;mix-blend-mode:difference;font-variant-numeric:tabular-nums}.movementCard{background:var(--stage);min-height:344px;display:grid;place-items:center;padding:22.4px}.movementMark{font-size:16px;font-weight:760;color:var(--soft);text-align:center}.movementCard{overflow:hidden}.movementRippleCanvas{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;z-index:0}.movementMark{position:relative;z-index:2}.nextCard{background:var(--card);padding:22.4px;display:flex;justify-content:space-between;align-items:center;gap:16px;min-height:116.8px}.nextIcon{width:52.8px;height:52.8px;border-radius:19.2px;background:var(--icon-bg);display:grid;place-items:center;font-size:20.8px;flex:0 0 auto}.sectionLabel{margin:0 0 8px 22.4px}.moveSection{grid-column:span 12}.moveSection .workoutGallery{width:100%}.nextWrap{margin-top:16px}.nextLabel{margin:0 0 8px 22.4px}.nextCard{background:var(--card);padding:22.4px;display:flex;justify-content:space-between;align-items:center;gap:22.4px;min-height:86.4px;border-radius:28.8px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.nextMain{display:flex;align-items:center;gap:14.4px;min-width:0}.nextIcon{width:43.2px;height:43.2px;border-radius:12.8px;background:var(--icon-bg);display:grid;place-items:center;font-size:16px;flex:0 0 auto}.sessionControlRow{display:flex;justify-content:flex-end;gap:22.4px;align-items:center;margin-top:16px}.nextActions{display:flex;gap:22.4px;align-items:center;flex:0 0 auto}.skipBtn{min-width:120px;min-height:41.6px;padding:0 14.4px;border:.8px solid var(--line);background:transparent;color:var(--text);text-decoration:none}.pause{min-width:120px;min-height:41.6px;padding:0 14.4px}.upcomingList{display:grid;gap:9.6px;margin-top:9.6px}.upcomingCard{--future-opacity:1;display:flex;align-items:center;justify-content:space-between;gap:22.4px;min-height:86.4px;padding:22.4px;border-radius:28.8px;background:var(--card);border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);opacity:var(--future-opacity);transition:opacity .22s ease}.upcomingCard:nth-child(-n+3){--future-opacity:1}.upcomingCard:nth-child(4){--future-opacity:.72}.upcomingCard:nth-child(5){--future-opacity:.48}.upcomingCard:nth-child(6){--future-opacity:.3}.upcomingCard:nth-child(n+7){--future-opacity:.16}.upcomingCard.sessionHidden{--future-opacity:.24!important;filter:saturate(.15)}.upcomingCard.sessionHidden .upcomingName{text-decoration:line-through}.upcomingCard.sessionHidden .upcomingIcon{opacity:.45}.upcomingCard.sessionHidden .upcomingMeta{opacity:.55}.upcomingInfo{display:flex;align-items:center;gap:14.4px;min-width:0}.upcomingIcon{width:43.2px;height:43.2px;flex:0 0 auto;border-radius:12.8px;background:var(--icon-bg);display:grid;place-items:center;font-size:16px}.upcomingMeta{color:var(--muted);margin-top:4px}.skipSessionBtn{flex:0 0 auto;min-height:41.6px;padding:0 14.4px;border:.8px solid var(--line);background:transparent;color:var(--text)}@media (max-width:900px){.weekCopy{white-space:normal}.nextCard{align-items:flex-start;flex-direction:column}.sessionControlRow{width:100%}.skipBtn,.pause{flex:1;min-width:0}.upcomingCard{align-items:flex-start;flex-direction:column}.skipSessionBtn{width:100%}}.countdown{display:none;position:fixed;top:0;right:0;bottom:0;left:0;width:100vw;height:100dvh;background:var(--page);z-index:300;align-items:center;justify-content:center;flex-direction:column;text-align:center;overflow:hidden}.countdown.active{display:flex}.pixelCanvas{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;display:block;z-index:1}.countdown:before{content:"";position:absolute;top:0;right:0;bottom:0;left:0;background:radial-gradient(circle at center,color-mix(in srgb,var(--primary) 16%,transparent),transparent 58%);pointer-events:none}.countNum{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);z-index:3}.countNum{font-size:clamp(144px,25.6vw,344px);font-weight:850;line-height:.75;letter-spacing:-.1em}.modalBackdrop{display:none;position:fixed;top:0;right:0;bottom:0;left:0;width:100vw;height:100dvh;z-index:145;background:var(--scrim);padding:28px;box-sizing:border-box;align-items:center;justify-content:center}.modalBackdrop.open{display:flex}.modal{width:min(1184px,100%);height:100%;max-width:1184px;max-height:none;overflow:hidden;background:var(--modal);border-radius:28.8px;padding:0;display:flex;flex-direction:column;box-sizing:border-box;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.modalStatic{flex:0 0 auto;padding:22.4px;background:var(--modal);border-bottom:.32px solid var(--divider)}.modalHead{display:flex;justify-content:space-between;align-items:flex-start;gap:16px;margin-bottom:12.8px}.modalHeaderActions{display:flex;gap:22.4px;align-items:center;flex:0 0 auto}.modalHead h2{margin:2.4px 0 0}.editNameRow{display:grid;gap:6.4px;margin-bottom:11.2px}.editNameLabel{color:var(--muted)}.editNameInput{min-height:46.4px;border-radius:17.6px;border:.32px solid var(--field-line);background:var(--input);color:var(--text);padding:0 14.4px}.timeTiles{display:grid;grid-auto-flow:column;grid-auto-columns:minmax(0,1fr);gap:11.2px;margin-bottom:11.2px}.timeTile{background:var(--tile);min-height:148.8px;padding:16px;display:flex;flex-direction:column;justify-content:space-between}.timeHeader{display:flex;align-items:center;gap:14.4px}.timeIcon{width:46.4px;height:46.4px;border-radius:16px;background:var(--icon-bg);display:grid;place-items:center;flex:0 0 auto;font-size:17.6px;font-weight:760}.timeCopy{min-width:0}.timeValue{color:var(--soft);margin-top:5.6px}.rangeTrack{height:46.4px;border-radius:17.6px;background:var(--track);overflow:hidden;position:relative;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.rangeFill{position:absolute;inset:0 auto 0 0;background:var(--slider-fill);border-radius:17.6px 0 0 17.6px}.rangeInput{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;opacity:0;cursor:pointer}.exerciseScroller{min-height:0;overflow-y:auto;padding:3.2px 16px 17.6px 22.4px;border-top:.16px solid var(--divider);scrollbar-gutter:stable}.exerciseScroller::-webkit-scrollbar{width:6.4px}.exerciseScroller::-webkit-scrollbar-track{background:transparent}.exerciseScroller::-webkit-scrollbar-thumb{background:var(--scroll-thumb);border-radius:799.2px}.sectionTitle{text-transform:uppercase;color:var(--muted);margin:14.4px 0 8px}.moveList{display:grid;gap:8px}.moveRow{display:flex;justify-content:space-between;align-items:center;gap:22.4px;background:var(--row);border-radius:20.8px;padding:22.4px}.moveRow.hidden{opacity:.46}.moveRow.hidden .moveItemName{text-decoration:line-through}.moveMeta{color:var(--muted);margin-top:4px}.hideBtn{border-radius:799.2px;min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text)}.removeBtn{position:relative;overflow:hidden;border-radius:799.2px;min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);cursor:pointer}.removeFill{position:absolute;inset:0 auto 0 0;width:0;background:var(--danger-fill);pointer-events:none;transition:width 0s linear}.addRow{display:grid;grid-template-columns:1fr auto;gap:8px;margin-top:14.4px}.addInput{min-height:41.6px;border-radius:799.2px;border:.32px solid var(--field-line);background:var(--input);color:var(--text);padding:0 14.4px}.addBtn{border-radius:799.2px;min-height:41.6px;padding:0 14.4px;border:0;background:var(--bright);color:var(--on-bright)}.routineSummary{margin-top:14.4px;background:var(--sunken);border-radius:20.8px;padding:12.8px 14.4px;color:var(--soft)}.settingsHeader{display:flex;align-items:center;gap:12.8px;margin-bottom:24px}.back{width:46.4px;padding:0;font-size:24px}.tabs.rubberTabs{position:relative;display:inline-flex;gap:0;padding:3.2px;margin-bottom:17.6px;border-radius:12.8px;background:var(--control);border:.32px solid var(--line);overflow:hidden}.rubberIndicator{position:absolute;top:3.2px;left:3.2px;height:calc(100% - 6.4px);width:0;border-radius:12.8px;background:var(--bright);transition:left .34s cubic-bezier(.2,1.35,.4,1),width .34s cubic-bezier(.2,1.35,.4,1),transform .18s ease;transform-origin:center;z-index:0}.tabs.rubberTabs .tab{position:relative;z-index:1;min-height:41.6px;padding:0 16px;border:0;background:transparent;color:var(--text)}.tabs.rubberTabs .tab.active{color:var(--on-bright)}.settingsPane{display:none}.settingsPane.active{display:block}.integrationList,.toggleList{display:grid;gap:9.6px}.integration,.toggleRow{display:flex;justify-content:space-between;align-items:center;gap:14.4px;background:var(--raised);border-radius:22.4px;padding:14.4px 16px}.status{color:var(--muted);margin-top:3.2px}.note{color:var(--muted);line-height:1.5;max-width:688px}.switch{position:relative;width:50px;height:28px;padding:0;border-radius:var(--r-icon);background:var(--track);border:.4px solid var(--line);opacity:.6;flex:0 0 auto;cursor:pointer;transition:background .18s ease,opacity .18s ease}.switch:after{content:"";position:absolute;width:24px;height:24px;top:50%;left:1.6px;border-radius:6px var(--r-fine) var(--r-fine) 6px;background:var(--muted);transform:translateY(-50%);transition:left .18s ease,border-radius .18s ease,background .18s ease}.switch.on{background:var(--bright);opacity:1}.switch.on:after{left:calc(100% - 25.6px);border-radius:var(--r-fine) 6px 6px var(--r-fine);background:var(--on-bright)}.themeChoice{display:flex;gap:9.6px;flex-wrap:wrap;align-items:center;margin:0}.themeBtn{min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);cursor:pointer}.themeBtn.active{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.settingsSelect{min-width:96px;min-height:32px;padding:0 27.2px 0 9.6px;border-radius:12.8px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);font:inherit}.motionControlRow{align-items:center}.motionRangeWrap{display:flex;align-items:center;justify-content:flex-end;gap:9.6px;min-width:184px}.motionRangeWrap input{width:128px}.motionRangeWrap span{color:var(--muted);min-width:51.2px;text-align:right}.dangerText{color:var(--danger)}.confirmBackdrop{display:none;position:fixed;top:0;right:0;bottom:0;left:0;z-index:80;padding:22.4px;background:var(--scrim);align-items:center;justify-content:center}.confirmBackdrop.open{display:flex}.confirmCard{width:min(448px,100%);background:var(--card);border-radius:28.8px;padding:22.4px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.confirmActions{display:flex;justify-content:flex-end;align-items:center;gap:22.4px;margin-top:22.4px}.holdDelete{position:relative;overflow:hidden;min-width:88px;min-height:41.6px;padding:0 17.6px;border:.8px solid var(--danger-line);border-radius:12.8px;background:var(--danger-bg);color:var(--text);cursor:pointer}.holdDeleteFill{position:absolute;inset:0 auto 0 0;width:0;background:var(--danger-fill);pointer-events:none}.holdDeleteLabel{position:relative;z-index:1;color:var(--text)}.holdDelete.holding .holdDeleteLabel,.removeBtn.holding .removeLabel{color:#fff}.bottomNav{position:sticky;bottom:22.4px;display:flex;gap:22.4px;z-index:100;width:max-content;margin:-65.6px 0 0 22.4px}.navBtn{width:43.2px;height:43.2px;padding:0;border-radius:16px;background:var(--control);border:.32px solid var(--line);color:var(--text)}.navBtn.active{background:var(--bright);color:var(--on-bright)}@media (max-width:900px){.weekCopy{white-space:normal}.moveOption,.addMoveCard{flex-basis:144px}.weekHero{display:block}.grid{grid-template-columns:1fr}.moveSection,.activityCard,.weekly,.energySection{grid-column:auto}.workGrid{grid-template-columns:1fr}.timerCard,.movementCard{min-height:256px}.weekChips{grid-template-columns:repeat(4,minmax(0,1fr))}.timeTiles{grid-auto-flow:row;grid-template-columns:1fr}}@media (max-width:620px){.modal{width:100%;height:100%;max-height:100%}#app{padding:0}.shell{border-radius:0}.view{padding:14.4px 14.4px 75.2px}.timerCard{min-height:224px}.digits{font-size:144px}.weekChips{grid-template-columns:repeat(2,minmax(0,1fr))}.modalBackdrop{padding:9.6px}.modal{height:100%}.modalStatic{padding:14.4px}.exerciseScroller{padding:3.2px 9.6px 14.4px 14.4px}.addRow{grid-template-columns:1fr}}:is(button,.primary,.tab,.back,.navBtn,.themeBtn,.energyBtn,.hideBtn,.addBtn,.removeBtn,.skipBtn,.holdEnd,.editNameInput,.addInput,.rangeTrack,.progress,.progressSegment):not(.segBtn,.switch,.dragHandle,.navBtn,.createPresetBtn,.sheetChoice,.setupSummary){border-radius:var(--r-control)!important}.card,.panel,.tile,.workoutPanel,.timerCard,.movementCard,.nextCard,.modal{border-radius:var(--r-card)}.movementCreatorLaunch{display:flex;gap:9.6px;align-items:center;margin:3.2px 0 14.4px}.movementCreatorOpen,.restAddBtn{min-height:35.2px;padding:0 12.8px;border-radius:12.8px;cursor:pointer}.movementCreatorOpen{border:0;background:var(--bright);color:var(--on-bright)}.restAddBtn{border:.32px solid var(--field-line);background:var(--control-2);color:var(--text)}.movementCreator{position:relative;margin:0 0 14.4px;padding:19.2px 22.4px;border-radius:22.4px;background:var(--card);border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.movementCreator[hidden]{display:none}.movementCreatorHead{display:flex;align-items:center;justify-content:space-between;gap:16px;margin-bottom:17.6px}.movementCreatorHead h3{margin:0}.movementCreatorClose{position:static}.movementCreatorFields{display:grid;grid-template-columns:minmax(0,1.45fr) minmax(0,.85fr);gap:16px 19.2px}.movementCreatorFields[hidden]{display:none!important}.movementCreatorFields>label{display:grid;gap:6.4px;min-width:0;color:var(--text)}.movementTimingRow{grid-column:1/-1;display:grid;grid-template-columns:minmax(240px,352px) minmax(208px,1fr) auto;gap:17.6px;align-items:end}.durationStack{display:grid;gap:6.4px;color:var(--text)}.creatorDurationRow{display:grid;grid-template-columns:minmax(96px,1fr) minmax(104px,1fr);gap:12.8px;align-items:center}.creatorNumber{width:100%;min-width:0}.creatorUnitSelect{min-height:41.6px;width:100%;padding:0 11.2px;border-radius:12.8px;border:.32px solid var(--field-line);background:var(--input);color:var(--text);font:inherit}.globalTimingToggle{display:flex!important;align-items:center;gap:8px!important;min-height:41.6px;cursor:pointer;color:var(--text)!important;white-space:nowrap}.globalTimingToggle input{position:absolute;opacity:0;pointer-events:none}.toggleTrack{position:relative;width:38.4px;height:22.4px;border-radius:799.2px;background:var(--switch-off);border:.32px solid var(--field-line);flex:0 0 auto;transition:background .16s ease}.toggleThumb{position:absolute;width:17.6px;height:17.6px;top:1.6px;left:1.6px;border-radius:50%;background:var(--knob-off);transition:left .16s ease,background .16s ease}.globalTimingToggle input:checked+.toggleTrack{background:var(--bright)}.globalTimingToggle input:checked+.toggleTrack .toggleThumb{left:17.6px;background:var(--on-bright)}.toggleLabel{color:var(--soft)}.creatorAddButton{min-width:97.6px;min-height:41.6px;align-self:end}@media (max-width:900px){.movementCreatorFields{grid-template-columns:1fr}.movementTimingRow{grid-column:auto;grid-template-columns:1fr;align-items:stretch}.globalTimingToggle{min-height:35.2px}.creatorAddButton{width:100%}}.moveRow.restItem{background:var(--row-rest)}.moveKindBadge{display:inline-flex;margin-left:6.4px;padding:2.4px 5.6px;border:.8px solid var(--field-line);border-radius:799.2px;color:var(--muted);vertical-align:middle}@media (max-width:900px){.movementCreatorFields,.movementCreatorFields.restFields{grid-template-columns:1fr;padding-right:0}.movementCreatorClose{position:static;margin-left:auto;display:block;margin-bottom:12.8px}}.createMoveOptions{margin:0 0 14.4px;padding:14.4px;border-radius:19.2px;background:var(--card2);border:.32px solid var(--line)}.createMoveOptions[hidden]{display:none}.createOptionLabel{text-transform:uppercase;color:var(--muted);margin-bottom:8px}.createPresetChoice{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}.createPresetBtn{min-height:60.8px;padding:11.2px 12.8px;border-radius:14.4px;border:.8px solid var(--field-line);background:transparent;color:var(--text);text-align:left;cursor:pointer}.createPresetBtn strong{display:block}.createPresetBtn span{display:block;color:var(--muted);margin-top:3.2px}.createPresetBtn.active{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.createPresetBtn.active span{color:var(--on-bright);opacity:.68}.createExtras{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px;margin-top:9.6px}.createExtraToggle{display:flex;align-items:flex-start;gap:8px;padding:9.6px 11.2px;border:.8px solid var(--field-line);border-radius:14.4px;cursor:pointer}.createExtraToggle input{margin-top:2.4px}.createExtraToggle span{display:grid;gap:2.4px}.createExtraToggle small{color:var(--muted)}.creatorUnitSelect{min-height:41.6px;padding:0 9.6px;border-radius:12.8px;border:.32px solid var(--field-line);background:var(--input);color:var(--text);font:inherit}.autoRestSummary{display:inline-flex;align-items:center;gap:6.4px;margin-left:6.4px;color:var(--muted)}@media (max-width:900px){.createPresetChoice,.createExtras{grid-template-columns:1fr}}.movementDurationField{display:grid;gap:6.4px}.movementTimingHead{display:flex;align-items:center;justify-content:space-between;gap:9.6px;color:var(--muted)}.globalTimingToggle{display:inline-flex!important;grid-template-columns:none!important;align-items:center;gap:5.6px!important;color:var(--text)!important;white-space:nowrap}.globalTimingToggle input{margin:0}.globalTimingValue{min-height:41.6px;display:flex;align-items:center;padding:0 11.2px;border-radius:12.8px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--muted)}.movementTypeBtn:disabled{opacity:.32;cursor:not-allowed}.createFlow{display:grid;gap:9.6px;padding:3.2px 0 8px}.createFlow[hidden]{display:none}.createStep{border-radius:22.4px;background:var(--tile);border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);overflow:hidden}.createStepHeader{width:100%;min-height:57.6px;padding:14.4px 17.6px;border:0;background:transparent;color:var(--text);display:flex;align-items:center;justify-content:space-between;gap:19.2px;text-align:left;cursor:pointer}.createStepHeader:disabled{cursor:not-allowed;opacity:.42}.createStepIdentity{display:flex;align-items:center;gap:9.6px}.createStepNumber{width:22.4px;height:22.4px;border-radius:799.2px;display:grid;place-items:center;border:.32px solid var(--line);color:var(--muted)}.createStepSummary{min-width:0;color:var(--muted);text-align:right}.createStepBody{display:none;padding:0 14.4px 14.4px}.createStep.active .createStepBody{display:block}.createStep.active .createStepHeader{border-bottom:.32px solid var(--divider)}.createStepSlot{display:grid;gap:11.2px}.createStepFooter{display:flex;justify-content:flex-end;margin-top:14.4px}.createStepFooter .primary:disabled{opacity:.35;cursor:not-allowed}.modal.createMode .movementTimingRow{display:none}.modal.createMode .movementCreator{margin-bottom:8px}.modal.createMode .movementCreatorFields{grid-template-columns:minmax(0,1.4fr) minmax(0,1fr)}.modal.createMode .movementCreatorFields.restFields{grid-template-columns:1fr}.modal.createMode .movementCreatorActions{margin-top:14.4px}.modal.createMode .movementCreatorLaunch{margin-top:0}.modal.createMode .sectionTitle{margin-top:9.6px}.modal.createMode .modalStatic{padding-bottom:14.4px}.modal:not(.createMode) .createFlow{display:none!important}#app.resting .movementCard{background:#ffffff0e}#app.resting .movementRippleCanvas{opacity:1}#app.light.resting .movementCard{background:#ffffff38}.nextCard .skipSessionBtn{margin-left:auto}.modal:not(.createMode) .movementCreatorLaunch{margin-top:25.6px}.testingFeedbackThanks{grid-area:feedback;min-height:176px;padding:19.2px;border:.32px solid var(--line);border-radius:16px;background:#252525;display:flex;flex-direction:column;justify-content:center;align-items:flex-start;gap:6.4px}.testingFeedbackThanks[hidden]{display:none}.testingFeedbackThanks strong{color:#f0f0f0}.testingFeedbackThanks p{margin:0;color:#9ea5b0}.testingFeedbackThanks a{color:#d6d9df;text-underline-offset:2.4px}:host(:fullscreen){overflow:auto;width:100vw;height:100vh}.entitySelect{max-width:min(256px,36.8vw);text-overflow:ellipsis}.integration .status code{padding:.8px 4.8px;border-radius:4.8px;background:var(--wash-2)}.integration .pill[disabled]{cursor:default;opacity:.7}#app :focus{outline:none}#app :focus-visible{outline:2.4px solid var(--primary);outline-offset:2.4px}#app .workoutPanel:focus-visible{outline-offset:-2.4px}@media (max-width:620px){.bottomNav{margin-left:14.4px}}.shell:has(.countdown.active) .bottomNav{visibility:hidden}@media (max-width:900px){.workoutPanel:not(.active):not(.addPanel) .panelExpanded{opacity:1;filter:none;pointer-events:auto}}.grid>*{min-width:0}.energyBtn[data-level="1"]{--feeling-color:#6E63A8}.energyBtn[data-level="2"]{--feeling-color:#5878A8}.energyBtn[data-level="3"]{--feeling-color:#6F8B8A}.energyBtn[data-level="4"]{--feeling-color:#5F9B72}.energyBtn[data-level="5"]{--feeling-color:#D5A53E}.energyBtn[data-level="6"]{--feeling-color:#D56B54}.checkinQuestion+.checkinQuestion{margin-top:28.8px}.checkinStatus{margin-top:17.6px;color:var(--muted)}.checkinStatus.done{color:var(--text)}.checkinStatus.done:before{content:"✓  "}.insightSection{grid-column:span 12;margin-top:16px}.insightCard{display:grid;gap:22.4px}.insightTop{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:22.4px;align-items:end}.insightStats{display:grid;grid-auto-flow:column;grid-auto-columns:minmax(104px,1fr);gap:8px}.insightBody{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1.3fr);gap:22.4px;align-items:end}.insightLines{display:grid;gap:9.6px}.insightLine.muted{color:var(--muted)}.dayStrip{display:grid;grid-template-columns:repeat(14,minmax(0,1fr));gap:4.8px;align-items:end}.day{display:grid;gap:6.4px;justify-items:center}.dayBars{position:relative;width:100%;height:96px;border-radius:9.6px;background:var(--wash);overflow:hidden}.stepBar,.moveBar{position:absolute;bottom:0;border-radius:8px}.stepBar{left:0;right:0;background:var(--wash-3)}.moveBar{left:22%;right:22%;background:var(--primary)}.day.today .dayBars{box-shadow:inset 0 0 0 .8px var(--today-ring)}.dayDots{display:flex;gap:2.4px}.dayDot{width:6.4px;height:6.4px;border-radius:50%}.dayDot.empty{box-shadow:inset 0 0 0 .8px var(--dot-empty)}.dayLabel{color:var(--muted)}.day.today .dayLabel{color:var(--text)}.chartLegend{display:flex;gap:14.4px;flex-wrap:wrap;margin-top:11.2px;color:var(--muted)}.chartLegend i{display:inline-block;width:8px;height:8px;border-radius:2.4px;margin-right:4.8px;vertical-align:-.8px}.lgMove{background:var(--primary)}.lgSteps{background:var(--wash-4)}.lgDot{background:linear-gradient(90deg,#5f9b72 50%,#d5a53e 50%);border-radius:50%!important}@media (max-width:900px){.insightSection{grid-column:auto}.insightTop,.insightBody{grid-template-columns:1fr}.insightStats{grid-auto-flow:row;grid-template-columns:repeat(auto-fit,minmax(96px,1fr))}.dayBars{height:72px}}@media (max-width:900px){.energyScale{grid-template-columns:repeat(3,minmax(0,1fr))}}.checkinBackdrop{z-index:160}.checkinCard{width:min(576px,100%)}.checkinCard .sub{margin-top:8px}.checkinSliders{display:grid;gap:11.2px;margin-top:19.2px}.checkinTile{min-height:0;gap:14.4px}.scaleEnds{display:flex;justify-content:space-between;margin-top:6.4px;color:var(--muted)}.rangeTrack:focus-within{outline:2.4px solid var(--primary);outline-offset:2.4px}.checkinTab{position:fixed;right:0;top:50%;transform:translateY(-50%);z-index:120;display:flex;flex-direction:column;align-items:center;gap:9.6px;padding:14.4px 9.6px;border:.32px solid var(--line);border-right:0;border-radius:12.8px 0 0 12.8px!important;background:var(--control);color:var(--text);cursor:pointer;transition:padding .18s ease,background .18s ease}.checkinTab:hover{padding-right:12.8px}.checkinTabIcon{font-size:16px;line-height:1}.checkinTabLabel{writing-mode:vertical-rl;transform:rotate(180deg)}.checkinBadge{position:absolute;top:8px;left:8px;width:8px;height:8px;border-radius:50%;background:var(--secondary);box-shadow:0 0 0 2.4px var(--control),0 0 9.6px color-mix(in srgb,var(--secondary) 70%,transparent);animation:checkinPulse 1.8s ease-in-out infinite}.checkinTab.due{background:var(--checkin-due)}@keyframes checkinPulse{50%{box-shadow:0 0 0 3px var(--control),0 0 2px color-mix(in srgb,var(--secondary) 20%,transparent)}}@media (prefers-reduced-motion: reduce){.checkinBadge{animation:none}}.shell:has(#workoutView.active) .checkinTab,.shell:has(.countdown.active) .checkinTab{display:none}#app.light .checkinBadge{background:var(--primary);box-shadow:0 0 0 2.4px #fff,0 0 9.6px color-mix(in srgb,var(--primary) 50%,transparent)}.feelSection{grid-column:span 12;margin-top:16px}.feelCard{display:grid;gap:19.2px}.feelTop{display:grid;grid-template-columns:minmax(0,1fr) minmax(208px,336px);gap:22.4px;align-items:end}.feelTotals{display:grid;gap:9.6px}.feelCount{color:var(--muted)}.feelDays{display:grid;grid-template-columns:repeat(7,minmax(0,1fr));gap:8px}.feelDay{min-height:0;gap:9.6px}.feelDay.future{opacity:.4}.feelDay.today{box-shadow:inset 0 0 0 .8px var(--today-ring)}.feelDots{font-size:6.4px;letter-spacing:1.6px;color:var(--muted)}.feelMeter{display:grid;gap:4.8px}.feelMeterTop{display:flex;justify-content:space-between;gap:6.4px;color:var(--muted)}.feelMeterTop span:last-child{color:var(--text)}.feelTrack{height:6.4px;border-radius:799.2px;background:var(--wash-2);overflow:hidden}.feelTrack span{display:block;height:100%;border-radius:799.2px}.feelTotals .feelTrack{height:9.6px}@media (max-width:900px){.feelSection{grid-column:auto}.feelTop{grid-template-columns:1fr}.feelDays{grid-template-columns:repeat(4,minmax(0,1fr))}}@media (max-width:620px){.feelDays{grid-template-columns:repeat(2,minmax(0,1fr))}}.checkinTile .timeHeader{align-items:center}.checkinTab:not(.due){opacity:.6}.checkinTab:not(.due):hover{opacity:1}.activityCard{grid-column:span 3}.weekly{grid-column:span 9;cursor:pointer;transition:border-color .18s ease,background .18s ease}.weekly:hover{border-color:var(--border-hover)}.weeklyExpand{position:absolute;top:19.2px;right:22.4px;font-size:16px;color:var(--muted);transition:transform .18s ease}.weekly:hover .weeklyExpand{transform:scale(1.15)}.weekChips{grid-template-columns:repeat(8,minmax(0,1fr))}.weekChipBottom{display:flex;justify-content:space-between;align-items:flex-end;gap:4.8px}.face{width:20.8px;height:20.8px;flex:0 0 auto;display:block}.face.empty circle{fill:none;stroke:var(--dot-empty);stroke-width:1.2;stroke-dasharray:2.5 2.5}.weekChip.total .face{width:24px;height:24px}.insightBackdrop{z-index:155}.insightModalCard{width:min(992px,100%);max-height:calc(100dvh - 56px);overflow:auto}.insightModalHead{display:flex;justify-content:space-between;align-items:center;margin-bottom:9.6px}.insightModalHead .sectionLabel{margin:0}.insightModalCard .dayBars{height:160px}.insightBody.chartOnly{grid-template-columns:1fr}.dayFace .face{width:17.6px;height:17.6px}.chartLegend span{display:inline-flex;align-items:center}.chartLegend .face{width:9.6px;height:9.6px;margin-right:4.8px}@media (max-width:1200px){.activityCard{grid-column:span 4}.weekly{grid-column:span 8}.weekChips{grid-template-columns:repeat(4,minmax(0,1fr))}}@media (max-width:900px){.activityCard,.weekly{grid-column:auto}.insightModalCard .dayBars{height:88px}.dayFace .face{width:12.8px;height:12.8px}}.weekChipTime{white-space:nowrap}.insightCard{grid-column:span 9;align-content:start}.insightEyebrow{margin-bottom:-11.2px}.insightStats{grid-auto-columns:minmax(88px,1fr)}.insightCard .dayBars{height:120px}@media (max-width:1200px){.insightCard{grid-column:span 8}.insightTop{grid-template-columns:1fr}}@media (max-width:900px){.insightCard{grid-column:auto}.insightCard .dayBars{height:80px}}.helpBackdrop{z-index:170}.helpCard .helpSteps,.helpCard .helpNote{max-width:688px}.helpHead{display:flex;justify-content:space-between;align-items:flex-start;gap:16px}.helpCard .note{margin:0}.helpSteps{margin:19.2px 0 0;padding:0;list-style:none;counter-reset:help;display:grid;gap:9.6px}.helpSteps li{counter-increment:help;display:grid;gap:4.8px;position:relative;padding:14.4px 16px 14.4px 52.8px;border-radius:20.8px;background:var(--tile);color:var(--muted)}.helpSteps li:before{content:counter(help);position:absolute;left:14.4px;top:12.8px;width:25.6px;height:25.6px;border-radius:9.6px;display:grid;place-items:center;background:var(--icon-bg);color:var(--text)}.helpSteps strong,.helpSteps b,.helpNote b{color:var(--text)}.helpAction{display:block;padding:8px 9.6px;border-radius:11.2px;background:var(--control-2);border:.32px solid var(--field-line);color:var(--text)}.helpCard code{padding:.8px 4.8px;border-radius:4.8px;background:var(--wash-2)}.helpNote{display:grid;gap:3.2px;margin-top:9.6px;padding:12.8px 16px;border-radius:17.6px;border:.32px solid var(--field-line);color:var(--muted)}.helpNote strong{color:var(--text)}.rowLabel{grid-column:1/-1;margin-top:16px;margin-bottom:-8px}.checkinTab{flex-direction:row;align-items:center;gap:0}.checkinTabMain{display:flex;flex-direction:column;align-items:center;gap:9.6px}.checkinPeek{display:grid;gap:3.2px;justify-items:start;white-space:nowrap;overflow:hidden;max-width:0;opacity:0;margin-right:0;transition:max-width .32s cubic-bezier(.2,1.2,.4,1),opacity .2s ease,margin-right .32s ease}.checkinTab.peek{padding-left:17.6px;opacity:1}.checkinTab.peek .checkinPeek{max-width:176px;opacity:1;margin-right:14.4px}.peekCountdown{font-size:24px;font-weight:800;letter-spacing:-.04em;line-height:1;font-variant-numeric:tabular-nums}.peekAt{color:var(--muted)}@media (prefers-reduced-motion: reduce){.checkinPeek{transition:none}}.activityRowMeta{color:var(--text);margin-top:1.6px;font-variant-numeric:tabular-nums}.feelTop{grid-template-columns:1fr}:host{--primary:#03A9F4;--secondary:#D0FF00;--primary-tint:color-mix(in srgb,var(--primary) 16%,white);--primary-ink:color-mix(in srgb,var(--primary) 75%,black);--font:Inter,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;--font-tile:Geist,var(--font);--w-regular:400;--w-medium:500;--w-semibold:600;--w-bold:700;--w-heavy:800;--t-display:52px;--t-title:22px;--t-value:16px;--t-section:18px;--t-strong:14px;--t-body:12px;--t-caption:12px;--lh-display:1.05;--lh-title:1;--t-wx-temp:64px;--t-wx-range:24px;--t-tile-title:14px;--lh-tile-title:22.4px;--t-tile-detail:22px;--lh-tile-detail:20px;--r-card:40px;--r-tile:24px;--r-inner:8px;--r-fine:4px;--r-group:var(--r-tile);--r-icon:var(--r-inner);--r-control:var(--r-inner);--r-seg:var(--r-fine);--inset:16px;--card-pad:var(--inset);--card-gap:22px;--gutter:22px;--grid-gap:16px;--tile-pad:var(--inset);--tile-min:78px;--tile-gap:14px;--tile-action-gap:16px;--chip-size:46px;--glyph-size:34px}@media (max-width:620px){:host{--t-display:46px;--t-title:20px;--t-value:20px;--t-section:16px;--t-strong:15px;--t-body:14px;--t-caption:11px;--lh-display:.92;--lh-title:1.05}}#app{font-family:var(--font);font-size:var(--t-body);font-weight:var(--w-regular);line-height:1.4}#app button,#app input,#app select,#app textarea{font-family:inherit}#app strong,#app b{font-weight:var(--w-bold)}.title,.workoutName,.exerciseTitle,.insightBig,.feelHeadline,.settingsTitle,.weekMetric{font-size:var(--t-display);font-weight:var(--w-heavy);line-height:var(--lh-display);letter-spacing:-.055em}.activityTitle,.confirmTitle,.sheetTitle,.modalHead h2,.paneTitle,.movementCreatorHead h3,.testingFeedbackThanks strong{font-size:var(--t-title);font-weight:var(--w-medium);font-style:italic;line-height:var(--lh-title);letter-spacing:-.03em}.paneTitle{margin:0 0 10px}.activityRowMeta,.nextName,.upcomingName,.editNameInput,.videoClock{font-size:var(--t-value);font-weight:var(--w-regular);line-height:1.15;letter-spacing:-.02em}.insightLine strong{font-weight:var(--w-bold)}.sectionLabel,.nextLabel{font-size:var(--t-section);font-weight:var(--w-regular);line-height:1.2;letter-spacing:-.01em}.activityRowName,.timeLabel,.moveItemName,.setupSummaryText strong,.sheetChoice strong,.createPresetBtn strong,.createExtraToggle strong{font-family:var(--font-tile);font-size:var(--t-tile-title);font-weight:var(--w-semibold);line-height:var(--lh-tile-title);letter-spacing:0}.moveMeta,.timeValue,.setupSummaryText small,.sheetChoice small,.createPresetBtn span,.createExtraToggle small{font-family:var(--font-tile);font-size:var(--t-tile-detail);font-weight:var(--w-regular);line-height:var(--lh-tile-detail);letter-spacing:0}.integration strong,.toggleRow strong,.setupName,.weekChipTop strong,.weekChipTime,.panelCollapsedText,.activityCount,.metaType,.kindChip,.helpSteps strong,.addGhost strong,.helpNote strong,.createStepIdentity strong,.testingZoneTitleRow strong,.testingFeedbackHeading,.tempoEstimate,.primary,.tab,.skipBtn,.skipSessionBtn,.hideBtn,.removeBtn,.addBtn,.themeBtn,.holdEnd,.holdDelete,.energyBtn,.movementCreatorOpen,.restAddBtn,.creatorAddButton,.testingFeedbackSubmit,.testingRating button,.toast,.checkinTabLabel{font-size:var(--t-strong);font-weight:var(--w-semibold);line-height:1.25;letter-spacing:-.01em}.status,.setupValue,.sub,.meta,.note,.weekCopy,.addInput,.settingsSelect,.pill,.checkinStatus,.routineSummary,.helpSteps li,.helpNote,.createStepSummary,.insightLine{font-size:var(--t-body);font-weight:var(--w-regular);line-height:1.4;letter-spacing:0}.setupCaption,.moveEditForm label>span,.addGhostText small,.setupSummaryAction,.metaTable th,.metaSub,.eyebrow,#stepLabel,.sourceTag,.addPanelLabel,.motionRangeWrap span,.sectionTitle,.editNameLabel,.dayLabel,.scaleEnds,.peekAt,.upcomingMeta,.energyLog,.tempoPole,.tempoReadout,.tempoRevealBtn,.testingFeedbackField,.testingZoneExplanation,.testingFeedbackThanks p,.movementCreatorClose,.movementCreatorFields>label,.durationStack,.globalTimingToggle,.toggleLabel,.moveKindBadge,.createOptionLabel,.autoRestSummary,.fieldError,.movementTimingHead,.globalTimingValue,.createStepNumber,.weekChipMeta,.feelMeterTop,.feelCount,.chartLegend,#app code{font-size:var(--t-caption);font-weight:var(--w-regular);line-height:1.35;letter-spacing:0}.eyebrow,#stepLabel,.sectionTitle,.setupCaption{letter-spacing:.1em}.globalTimingToggle{font-size:var(--t-caption)!important}.workoutGallery,.workoutPanel{height:340px}@media (max-width:900px){.workoutPanel,.workoutPanel.active{height:320px}}@media (max-width:900px){.workoutGallery{height:auto}.workoutPanel,.workoutPanel.active{height:auto;min-height:320px}}@media (max-width:620px){.view{padding-left:0;padding-right:0}.topbar,.settingsHeader,.sessionHead,.sessionControlRow{margin-left:16px;margin-right:16px}.tabs.rubberTabs,.sectionLabel,.rowLabel{margin-left:16px}.grid{gap:8px}.rowLabel,.feelSection{margin-top:16px}.rowLabel{margin-bottom:-4px}.sectionLabel{margin-bottom:8px}.workoutGallery{gap:8px}.workoutPanel,.workoutPanel.active{flex:0 0 100%;min-width:100%}.workoutPanel.addPanel{flex:0 0 100%;min-width:100%;min-height:120px}.card,.workoutPanel,.timerCard,.movementCard,.nextCard,.upcomingCard,.confirmCard{padding:16px}.activityRows,.insightCard,.feelCard{gap:8px}.activityRow,.weekChip{padding:10px 12px}.insightStats,.feelDays{gap:8px}.workGrid{gap:8px;margin-top:8px}.nextWrap,.sessionControlRow{margin-top:8px}.upcomingList{gap:8px}}.tabs.rubberTabs .tab{white-space:nowrap}@media (max-width:620px){.tabs.rubberTabs{display:flex;width:max-content;max-width:calc(100% - 32px);overflow-x:auto;scrollbar-width:none}.tabs.rubberTabs::-webkit-scrollbar{display:none}.tabs.rubberTabs .tab{flex:0 0 auto}}.insightCard{display:flex;flex-direction:column;gap:0}@media (max-width:1200px) and (min-width:901px){.timeTiles{grid-auto-flow:row;grid-template-columns:repeat(2,1fr)}}#stepLabel{margin-top:9.6px}#exerciseMeta{margin-top:4px}.moveRow{justify-content:flex-start;gap:12.8px}.moveText{flex:1;min-width:0}.moveActions{display:flex;gap:6.4px;flex:0 0 auto}.dragHandle{flex:0 0 auto;display:grid;place-items:center;width:32px;height:40px;margin:-8px 0 -8px -9.6px;padding:0;border:0;border-radius:12px;background:transparent;color:var(--muted);cursor:grab;touch-action:none}.dragHandle:hover{background:var(--hover);color:var(--text)}.moveRow.dragging{box-shadow:0 10px 30px var(--lift),inset 0 0 0 1.5px var(--primary);position:relative;z-index:2}.moveRow.dragging .dragHandle{cursor:grabbing;color:var(--text)}.removeBtn:hover,.hideBtn:hover{border-color:var(--muted)}.toast{position:fixed;z-index:400;display:flex;align-items:center;gap:12.8px}.toast.withAction{pointer-events:auto}.toastAction{border:0;padding:0;background:none;color:inherit;font:inherit;text-decoration:underline;text-underline-offset:3px;cursor:pointer}.modalTop{flex:0 0 auto;padding:22px 22px 0}.modalTop .modalHead{margin-bottom:0;padding-bottom:16px}@media (min-width:901px){.modal:not(.createMode){display:grid;grid-template-columns:minmax(340px,420px) minmax(0,1fr);grid-template-rows:auto minmax(0,1fr)}.modal:not(.createMode) .modalTop{grid-column:1/-1;border-bottom:.32px solid var(--divider)}.modal:not(.createMode) .modalStatic{grid-column:1;grid-row:2;overflow-y:auto;border-bottom:0;border-right:.32px solid var(--divider)}.modal:not(.createMode) .exerciseScroller{grid-column:2;grid-row:2;border-top:0;padding-top:12px}.modal:not(.createMode) .timeTiles{grid-auto-flow:row;grid-template-columns:minmax(0,1fr)}}.timeTiles{align-items:start}.timingGroup{min-height:0;padding:0;justify-content:flex-start;gap:0}.timingGroup .timeRow{display:grid;gap:12.8px;padding:16px}.timingGroup .timeRow+.timeRow{border-top:.32px solid var(--divider)}.timingGroup .timeTotal{padding-bottom:14px}.removeLabel{position:relative;z-index:1}.removeBtn.holding{border-color:var(--danger-fill)}#deleteMoveConfirm{z-index:200}.moveRow{will-change:transform}.moveRow.dragging{box-shadow:0 18px 40px var(--lift),inset 0 0 0 1.5px var(--primary);z-index:3;transform-origin:center}.moveRow.editing{display:block;padding:16px;box-shadow:inset 0 0 0 1.5px var(--primary)}.moveEditForm{display:grid;gap:14.4px}.moveEditFields{display:grid;grid-template-columns:minmax(0,1.4fr) minmax(0,1fr);gap:12.8px}.moveEditForm label:not(.globalTimingToggle){display:grid;gap:6.4px;min-width:0}.moveEditForm .addInput{width:100%;min-width:0}.moveEditTiming{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:12.8px}.moveEditTiming .creatorDurationRow{display:grid;grid-template-columns:96px 128px;gap:9.6px}.creatorDurationRow.isDisabled{opacity:.38}.moveEditActions{display:flex;justify-content:flex-end;align-items:center;gap:22.4px}@media (max-width:620px){.moveEditFields{grid-template-columns:1fr}}#app.light .digits{mix-blend-mode:normal;color:var(--text)}.integration .status code{color:var(--soft)}#app.resting :is(.sessionHead,.nextLabel,.sessionControlRow){--muted:#f4f4f4;color:var(--text)}#app.paused :is(.sessionHead,.nextLabel,.sessionControlRow){--text:#090909;--muted:rgba(9,9,9,.8);--accent-text:#090909;--line:rgba(9,9,9,.3);color:var(--text)}#app.light:is(.resting,.paused) :is(.sessionHead,.nextLabel,.sessionControlRow){--text:#222222;--muted:rgba(34,34,34,.85);--accent-text:#222222;--line:rgba(34,34,34,.25);color:var(--text)}.moveList{display:flex;flex-direction:column}.movementCreatorOpen,.restAddBtn{display:inline-flex;align-items:center;gap:6px;touch-action:none;user-select:none;-webkit-user-select:none;cursor:grab;transition:transform .42s cubic-bezier(.34,1.46,.64,1),opacity .2s ease}.movementCreatorOpen svg,.restAddBtn svg{width:14px;height:14px;margin-left:-3px;opacity:.55;flex:0 0 auto}.movementCreatorOpen.lifting,.restAddBtn.lifting{transform:scale(.92);opacity:.4;cursor:grabbing;transition:transform .16s ease,opacity .16s ease}.addGhost{position:fixed;left:0;top:0;z-index:20;pointer-events:none;box-sizing:border-box;display:flex;align-items:center;gap:8px;padding:0 12.8px;overflow:hidden;white-space:nowrap;border-radius:12px;background:var(--bright);color:var(--on-bright);box-shadow:0 12px 30px var(--lift);will-change:transform;transition:width .4s cubic-bezier(.34,1.46,.64,1),height .4s cubic-bezier(.34,1.46,.64,1),border-radius .3s ease,padding .3s ease,background .2s ease,color .2s ease,box-shadow .25s ease,opacity .18s ease}.addGhost.rest{background:var(--control-2);color:var(--text);box-shadow:inset 0 0 0 .5px var(--field-line),0 12px 30px var(--lift)}.addGhostGrip{display:grid;place-items:center;flex:0 0 auto;opacity:.55}.addGhostGrip svg{width:14px;height:14px;transition:width .3s ease,height .3s ease}.addGhostText{display:grid;min-width:0}.addGhostText small{color:var(--muted);max-height:0;opacity:0;transition:max-height .3s ease,opacity .2s ease}.addGhost.overList{border-radius:20.8px;gap:12.8px;padding:0 22.4px 0 12.8px;background:var(--row);color:var(--text);box-shadow:inset 0 0 0 1.5px var(--primary),0 16px 36px var(--lift)}.addGhost.overList .addGhostGrip svg{width:18px;height:18px}.addGhost.overList .addGhostText small{max-height:20px;opacity:1;margin-top:4px}.addGhost.leaving{opacity:0}.dropSlot{flex:0 0 auto;height:0;margin-top:-8px;border-radius:20.8px;background:color-mix(in srgb,var(--primary) 9%,transparent);box-shadow:inset 0 0 0 1.5px color-mix(in srgb,var(--primary) 40%,transparent);transition:height .42s cubic-bezier(.34,1.46,.64,1),margin-top .42s cubic-bezier(.34,1.46,.64,1),opacity .2s ease}.dropSlot.leaving{opacity:0;transition:height .26s cubic-bezier(.4,0,.2,1),margin-top .26s cubic-bezier(.4,0,.2,1),opacity .16s ease}@media (prefers-reduced-motion: reduce){.addGhost,.dropSlot,.movementCreatorOpen,.restAddBtn{transition:none}}.exerciseScroller,.modalStatic,.createFlow{overflow-anchor:none}.videoStage{position:absolute;top:0;right:0;bottom:0;left:0;z-index:3;display:grid;place-items:center;background:#000;opacity:0;pointer-events:none;transition:opacity .3s ease}#app.videoStep .videoStage{opacity:1;pointer-events:auto}.videoStage{container-type:size}.videoFrame{width:min(100cqw,calc(100cqh * 16 / 9));aspect-ratio:16/9}.videoFrame>*{display:block;width:100%;height:100%;border:0}.videoSound{position:absolute;left:50%;bottom:16px;transform:translate(-50%);z-index:2}.videoProbe{position:fixed;left:-10000px;top:0;width:320px;height:180px;opacity:0;pointer-events:none}.digits.long{font-size:clamp(96px,12.8vw,200px)}.moveEditFields.videoFields{grid-template-columns:minmax(0,1fr)}.fieldError{margin:0;color:var(--danger)}.addInput.invalid{border-color:var(--danger)}@media (prefers-reduced-motion: reduce){.videoStage{transition:none}}.workGrid{transition:grid-template-columns .55s cubic-bezier(.2,.8,.2,1),gap .55s cubic-bezier(.2,.8,.2,1)}.timerCard{transition:opacity .25s ease}#app.videoStep .timerCard{opacity:0;min-width:0;pointer-events:none}.workGrid{container-type:inline-size}#app.videoStep .movementCard{height:min(56.25cqw,var(--theater-h,60vh));min-height:240px;padding:0}#app.videoStep .exerciseTitle{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}@media (min-width:901px){#app.videoStep .workGrid{grid-template-columns:minmax(0,0fr) minmax(240px,1fr);gap:0}}@media (max-width:900px){#app.videoStep .timerCard{display:none}#app.videoStep .movementCard{min-height:0}}.videoClock{display:none;margin-right:auto;font-variant-numeric:tabular-nums}#app.videoStep .videoClock{display:block}@media (prefers-reduced-motion: reduce){.workGrid,.timerCard{transition:none}}.metaCard{margin-top:16px}.metaFilters{display:flex;flex-wrap:wrap;gap:9.6px;align-items:center;margin:14.4px 0 11.2px}.metaSearch{flex:1 1 200px;min-width:0}.metaKinds{display:flex;flex-wrap:wrap;gap:6.4px}.kindChip{min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);border-radius:12px;background:var(--control-2);color:var(--text);cursor:pointer}.kindChip.active{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.metaTableWrap{overflow-x:auto;border-radius:22.4px;background:var(--raised)}.metaTable{width:100%;border-collapse:collapse}.metaTable th{text-align:left;color:var(--muted);padding:12px 16px;border-bottom:.32px solid var(--divider);text-transform:uppercase;letter-spacing:.1em}.metaTable td{padding:12px 16px;border-top:.32px solid var(--divider);vertical-align:middle;color:var(--soft)}.metaTable tbody tr:first-child td{border-top:0}.metaTable .metaSwitchCol{width:1%;white-space:nowrap;text-align:right}.metaTable .metaSwitchCol .switch{display:inline-block;vertical-align:middle}.metaType{color:var(--text)}.metaTable tr.off .metaType{color:var(--muted)}.metaSub{display:none;margin-top:2px;color:var(--muted)}.metaEmpty td{text-align:center;color:var(--muted)}.metaBulk{display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap;margin-top:11.2px}.metaBulkActions{display:flex;gap:22.4px}@media (max-width:620px){.metaKindCol,.metaUsedCol{display:none}.metaSub{display:block}}@media (max-width:620px){.moveRow.noMeta .moveMeta,.upcomingCard.noMeta .upcomingMeta,.nextCard.noMeta #nextMeta{display:none}}.setupSummary,.addFab{display:none}.modal{position:relative}.setupSummary{align-items:center;justify-content:space-between;gap:12px;width:100%;margin:6.4px 0 4px;padding:12px 14px;border:0;border-radius:20.8px;background:var(--tile);color:var(--text);text-align:left;cursor:pointer}.setupSummaryText{display:grid;gap:2px;min-width:0}.setupSummaryText small{color:var(--muted)}.setupSummaryAction{flex:0 0 auto;color:var(--muted)}.rowChevron{flex:0 0 auto;color:var(--muted);font-size:22px;line-height:1}.addFab{position:absolute;right:16px;bottom:calc(16px + env(safe-area-inset-bottom,0px));z-index:12;place-items:center;width:56px;height:56px;padding:0;border:0;background:var(--bright);color:var(--on-bright);font-size:30px;font-weight:300;line-height:1;box-shadow:0 10px 24px var(--lift);cursor:pointer}.sheetScrim{position:absolute;top:0;right:0;bottom:0;left:0;z-index:30;background:var(--scrim);opacity:0;pointer-events:none;transition:opacity .25s ease}.sheetScrim.open{opacity:1;pointer-events:auto}.sheet{position:absolute;left:0;right:0;bottom:0;z-index:31;display:grid;gap:14px;max-height:88%;overflow-y:auto;overscroll-behavior:contain;padding:10px 16px calc(22px + env(safe-area-inset-bottom,0px));border-radius:var(--r-card) var(--r-card) 0 0;background:var(--modal);box-shadow:0 -.5px 0 var(--divider),0 -18px 40px var(--lift);transform:translateY(105%);visibility:hidden;transition:transform .42s cubic-bezier(.2,.9,.25,1.06),visibility 0s linear .42s}.sheet.open{transform:none;visibility:visible;transition:transform .42s cubic-bezier(.2,.9,.25,1.06)}.sheetGrab{justify-self:center;width:38px;height:5px;border-radius:99px;background:var(--field-line)}.sheetTitle{margin:0}.sheet .moveRow.editing{display:block;padding:0;background:none;box-shadow:none;border-radius:0}.sheetActions{justify-content:space-between;flex-wrap:wrap;gap:12.8px}.sheetSecondary,.sheetPrimary{display:flex;align-items:center;gap:6.4px}.sheetPrimary{gap:22.4px;margin-left:auto}.sheetChoices{display:grid;gap:8px}.sheetChoice{display:flex;align-items:center;gap:14px;width:100%;padding:12px;border:0;border-radius:20.8px;background:var(--row);color:var(--text);text-align:left;cursor:pointer}.sheetChoice small{display:block;margin-top:2px;color:var(--muted)}.sheetSetup .modalStatic{padding:0;background:none;border:0;overflow:visible}.sheetDone{width:100%;margin-top:14.4px}.addGhostActions{display:none;align-items:center;gap:6.4px;margin-left:auto;flex:0 0 auto}.addGhost.hovering{pointer-events:auto;cursor:grab;touch-action:none;animation:ghostWait 1.8s ease-in-out infinite}.addGhost.held{pointer-events:auto;cursor:grabbing;touch-action:none}.addGhost.hovering .addGhostActions{display:flex}.addGhost.rising{transition:transform .6s cubic-bezier(.34,1.46,.64,1),opacity .2s ease}.ghostDiscard{padding:0 10px}@keyframes ghostWait{50%{box-shadow:inset 0 0 0 1.5px var(--primary),0 22px 44px var(--lift),0 0 0 5px color-mix(in srgb,var(--primary) 22%,transparent)}}@media (max-width:620px){.modal:not(.createMode)>.modalStatic{display:none}.modal:not(.createMode) .setupSummary{display:flex}.addFab{display:grid}.movementCreatorLaunch{display:none}.exerciseScroller{padding-bottom:104px}.moveRow.phoneRow{gap:8px;min-height:60px;padding:12px 12px 12px 14px;cursor:pointer}}@media (prefers-reduced-motion: reduce){.sheet,.sheetScrim{transition:none}.addGhost.hovering{animation:none}}.modal{overflow:clip}.moveList.reordering>.moveRow:not(.dragging){transition:transform .44s cubic-bezier(.34,1.46,.64,1)}.moveRow.dragging.willReturn{opacity:.62;box-shadow:0 10px 24px var(--lift),inset 0 0 0 1.5px var(--field-line)}@media (prefers-reduced-motion: reduce){.moveList.reordering>.moveRow{transition:none}}.card,.panel,.confirmCard,.nextCard,.workoutPanel.active{padding:var(--card-pad)}.confirmCard,.nextCard,.upcomingCard{border-radius:var(--r-card)}.upcomingCard{padding:var(--card-pad)}.workoutPanel{border-radius:var(--r-tile);padding:var(--tile-pad)}.workoutPanel.active{border-radius:var(--r-card)}.workoutPanel.addPanel{padding:var(--tile-pad)}.activityRow,.moveRow,.timeTile,.createPresetBtn,.createExtraToggle,.sheetChoice,.setupSummary{border-radius:var(--r-tile)}.activityRow,.moveRow{min-height:var(--tile-min);padding:var(--tile-pad);gap:var(--tile-gap)}.activityRow{grid-template-columns:var(--chip-size) minmax(0,1fr)}.activityRows{gap:12px}.timeTile{padding:var(--tile-pad);gap:var(--tile-action-gap)}.timeHeader{gap:var(--tile-gap)}.createPresetBtn,.createExtraToggle{padding:var(--tile-pad)}.moveMeta,.timeValue,.activityRowMeta,.setupSummaryText small,.sheetChoice small,.createExtraToggle small{color:var(--text)}.createPresetBtn.active span{color:var(--on-bright)}.moveMeta,.timeValue,.activityRowMeta{margin-top:0}.activityRowIcon,.activityIcon,.timeIcon,.nextIcon,.upcomingIcon{width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-icon);font-size:20px}.navBtn{width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-icon)}.moveRow.editing{padding:var(--tile-pad)}.moveRow.phoneRow{min-height:0;padding:var(--inset);gap:12px}.dragHandle{width:var(--chip-size);height:var(--chip-size);margin:0;border-radius:var(--r-icon);background:var(--icon-bg);color:var(--muted)}.dragHandle svg{width:var(--glyph-size);height:var(--glyph-size)}.moveRow.restItem .dragHandle{background:transparent}.dragHandle:hover{background:color-mix(in srgb,var(--icon-bg) 80%,var(--text))}.moveRow.restItem .dragHandle:hover{background:var(--hover)}.addGhost.overList,.dropSlot{border-radius:var(--r-tile)}.seg{display:flex;align-items:center;gap:4px;padding:4px;border-radius:var(--r-inner);background:var(--seg-bg);flex:0 0 auto}.segBtn{min-height:38px;padding:0 20px;border:0;border-radius:var(--r-seg);background:transparent;color:var(--text);cursor:pointer}.segBtn:hover{background:var(--hover)}.moveActions.seg{gap:4px}.moveActions .segBtn{min-width:100px}.moveActions .editBtn{background:var(--seg-on)}.moveActions .editBtn:hover{background:color-mix(in srgb,var(--seg-on) 88%,var(--text))}.moveActions .removeBtn{display:grid;place-items:center;width:40px;min-width:40px;padding:0;border:0;background:var(--danger-fill);color:var(--on-danger-fill)}.moveActions .removeBtn:hover{background:color-mix(in srgb,var(--danger-fill) 88%,white);border:0}.moveActions .removeBtn svg{display:block;width:24px;height:24px}.moveActions .removeFill{background:color-mix(in srgb,var(--on-danger-fill) 45%,transparent)}.moveActions .removeBtn.holding{color:#fff}@media (max-width:1100px){.moveActions .segBtn:not(.removeBtn){min-width:0;padding:0 14px}}.tabs.rubberTabs{padding:4px;border:0;border-radius:var(--r-inner);background:var(--seg-bg)}.rubberIndicator{top:4px;left:4px;height:calc(100% - 8px);border-radius:var(--r-seg);background:var(--seg-on)}.tabs.rubberTabs .tab{min-height:38px;padding:0 20px}.tabs.rubberTabs .tab.active{color:var(--text)}#app.light .rubberIndicator{box-shadow:0 1px 3px var(--lift)}.toggleTrack{width:50px;height:28px;border-radius:var(--r-icon);background:var(--track);border:.4px solid var(--line);opacity:.6;transition:background .16s ease,opacity .16s ease}.toggleThumb{width:24px;height:24px;top:50%;left:1.6px;border-radius:6px var(--r-fine) var(--r-fine) 6px;background:var(--muted);transform:translateY(-50%);transition:left .16s ease,border-radius .16s ease,background .16s ease}.globalTimingToggle input:checked+.toggleTrack{background:var(--bright);opacity:1}.globalTimingToggle input:checked+.toggleTrack .toggleThumb{left:calc(100% - 25.6px);border-radius:var(--r-fine) 6px 6px var(--r-fine);background:var(--on-bright)}@media (max-width:900px){.workoutPanel:not(.addPanel){border-radius:var(--r-card);padding:var(--card-pad)}}@media (max-width:620px){:host{--inset:12px;--card-pad:var(--inset);--tile-pad:var(--inset);--tile-min:70px;--card-gap:16px;--r-card:32px;--r-tile:20px;--gutter:0px;--grid-gap:8px}}@media (max-width:620px){.modalBackdrop{padding:0}.modal,.modal:not(.createMode){width:100%;height:100%;max-height:none;border-radius:0;border:0}.modalTop{padding-top:calc(16px + env(safe-area-inset-top,0px))}.modal:not(.createMode) .exerciseScroller{padding-bottom:calc(104px + env(safe-area-inset-bottom,0px))}}:host{--group-bg:var(--card)}.modal,.sheet{--group-bg:var(--tile)}.view{padding-left:var(--gutter);padding-right:var(--gutter)}.grid{gap:var(--grid-gap)}.setupCaption{display:block;padding:0 4px 8px;color:var(--muted);text-transform:uppercase}.setupGroup,#settingsView .integrationList,#settingsView .toggleList{display:grid;gap:0;border-radius:var(--r-group);background:var(--group-bg);overflow:hidden}.setupRow,#settingsView .integration,#settingsView .toggleRow{position:relative;display:flex;align-items:center;justify-content:space-between;gap:16px;min-height:56px;padding:12px 16px;border-radius:0;background:transparent}:is(.setupRow,#settingsView .integration,#settingsView .toggleRow):not([hidden])~:is(.setupRow,.integration,.toggleRow):before{content:"";position:absolute;top:0;left:16px;right:0;border-top:.5px solid var(--divider)}.setupRow.withSlider{display:grid;grid-template-columns:minmax(0,1fr);gap:10px;align-items:stretch}.setupRowTop{display:flex;justify-content:space-between;align-items:center;gap:16px}.setupText{display:grid;gap:2px;min-width:0}.setupValue,#settingsView .status{color:var(--muted);margin-top:0;font-variant-numeric:tabular-nums}.setupRow .rangeTrack[hidden]{display:none}.rangeTrack.setupSlider{height:28px;margin:0 2px;border:0;border-radius:0!important;background:transparent;overflow:visible}.rangeTrack.setupSlider:before{content:"";position:absolute;left:0;right:0;top:50%;height:6px;border-radius:99px;background:var(--track);transform:translateY(-50%)}.setupSlider .rangeFill{top:50%;bottom:auto;height:6px;border-radius:99px;transform:translateY(-50%)}.setupSlider .rangeFill:after{content:"";position:absolute;right:-11px;top:50%;width:22px;height:22px;border-radius:50%;background:var(--slider-fill);box-shadow:0 1px 4px var(--lift);transform:translateY(-50%)}.setupSlider:focus-within{outline:0}.setupSlider:focus-within .rangeFill:after{box-shadow:0 0 0 3px color-mix(in srgb,var(--primary) 45%,transparent)}.stepper{display:flex;align-items:center;gap:2px;padding:3px;border-radius:var(--r-control);background:var(--seg-bg);flex:0 0 auto}.stepBtn{width:36px;height:32px;padding:0;border:0;border-radius:var(--r-fine)!important;background:transparent;color:var(--text);font:600 18px/1 var(--font);cursor:pointer}.stepBtn:hover:not(:disabled){background:var(--hover)}.stepBtn:disabled{opacity:.35;cursor:default}.stepCount{min-width:24px;text-align:center;font:600 16px/1 var(--font);font-variant-numeric:tabular-nums}.timeTiles.setupBlock,.modal:not(.createMode) .timeTiles.setupBlock{display:block;margin-bottom:12px}.editNameLabel{text-transform:uppercase;letter-spacing:.1em;padding:0 4px}.routineSummary{margin:0 0 4px;padding:0 4px;background:none;border-radius:0;color:var(--muted)}#settingsView .card{display:grid;gap:12px;padding:0;border:0;border-radius:0;background:none}#settingsView .card+.card{margin-top:36px}#settingsView .paneTitle{margin:0 4px}#settingsView .note{margin:0 4px 4px}#settingsView .integration>div:first-child,#settingsView .toggleRow>div:first-child{display:grid;gap:2px;min-width:0}#settingsView .helpSteps{gap:0;border-radius:var(--r-group);background:var(--group-bg);overflow:hidden}#settingsView .helpSteps li{border-radius:0;background:transparent}#settingsView .helpSteps li+li:after{content:"";position:absolute;top:0;left:52.8px;right:0;border-top:.5px solid var(--divider)}#settingsView .metaTableWrap{border-radius:var(--r-group);background:var(--group-bg)}.activityCard,.insightCard{grid-column:span 3}.weatherCard,.grid.noWeather .activityCard,.grid.noWeather .insightCard,.grid.noActivity .insightCard{grid-column:span 6}.grid.noActivity.noWeather .insightCard{grid-column:span 12}@media (max-width:1199px) and (min-width:901px){.activityCard,.insightCard{grid-column:span 6}.weatherCard,.grid.noActivity .insightCard{grid-column:span 12}}@media (max-width:900px){.activityCard,.insightCard,.weatherCard,.grid .insightCard{grid-column:auto}}.jointRows{gap:0;border-radius:var(--r-tile);background:var(--tile)}.jointRows>.activityRow{background:transparent}.insightCard .jointRows{flex:1;align-content:space-evenly}.weatherCard{display:flex;flex-direction:column}.wxWide{flex:1;display:flex;flex-direction:column;gap:var(--card-gap)}.wxNow{display:flex;justify-content:space-between;align-items:center;gap:16px}.wxCurrent{display:flex;align-items:center;gap:16px;min-width:0}.wxTempBlock{display:grid;gap:4px;min-width:0}.wxTemp{display:flex;align-items:flex-start;gap:2px}.wxPlace{color:var(--primary);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.wxCondition{display:grid;gap:2px;padding:var(--tile-pad);border-radius:var(--r-tile);background:var(--tile);flex:0 0 auto}.wxDays{flex:1;display:grid;grid-template-columns:repeat(6,minmax(0,1fr));gap:8px}.wxDay{display:flex;flex-direction:column;align-items:center;justify-content:space-between;gap:var(--tile-action-gap);min-width:0;padding:16px 8px;border-radius:var(--r-tile);background:var(--tile)}.wxTemps{display:grid;justify-items:center;gap:2px}.wxLow{color:var(--muted)}.wxNoDays{flex:1;display:grid;place-items:center;padding:16px;border-radius:var(--r-tile);background:var(--tile);color:var(--muted)}.wxCompact{display:none}@media (max-width:620px){.wxWide{display:none}.wxCompact{display:grid;gap:var(--card-gap)}}.wxIcon{position:relative;display:block;flex:0 0 auto;width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-icon);background:var(--icon-bg);overflow:hidden}.wxIcon.large{width:90px;height:90px;border-radius:var(--r-tile)}.wxSun{position:absolute;left:13%;top:13%;width:74%;height:74%;border-radius:50%;background:var(--muted)}.wxCloud,.wxMoon{position:absolute;left:13%;top:13%;width:74%;height:74%;fill:var(--muted)}.wxIcon.partly .wxSun{left:12%;top:10%;width:52%;height:52%}.wxIcon.partly .wxCloud{left:26%;top:28%;width:66%;height:66%}.wxIcon.rain .wxCloud,.wxIcon.snow .wxCloud{top:2%}.wxDrops{position:absolute;left:30%;right:30%;bottom:16%;display:flex;justify-content:space-between}.wxDrops i{display:block;width:7%;min-width:3px;height:16%;min-height:7px;border-radius:2px;background:var(--muted);transform:rotate(12deg)}.wxDrops.snow i{height:auto;min-height:0;aspect-ratio:1;min-width:5px;border-radius:50%;transform:none;background:var(--muted)}.weatherCard .activityRow>.wxIcon{width:var(--chip-size)}.activityHeader>.wxIcon{width:var(--chip-size);height:var(--chip-size)}.wxDeg{font-family:var(--font-tile);font-size:var(--t-wx-temp);font-weight:var(--w-medium);line-height:1;letter-spacing:-.02em}.wxUnit,.wxRange{font-family:var(--font-tile);font-size:var(--t-wx-range);font-weight:300;line-height:1.25;letter-spacing:0}.wxPlace,.wxCondName,.wxHigh{font-family:var(--font-tile);font-size:var(--t-tile-title);font-weight:var(--w-semibold);line-height:var(--lh-tile-title);letter-spacing:0}.wxDayName,.wxLow,.wxNoDays{font-family:var(--font-tile);font-size:var(--t-tile-detail);font-weight:var(--w-regular);line-height:var(--lh-tile-detail);letter-spacing:0}.segBtn{transition:background .15s ease,transform .18s cubic-bezier(.34,1.46,.64,1),box-shadow .15s ease,color .15s ease}.segBtn:hover{background:transparent}@media (hover:hover){.segBtn:hover{background:var(--color-state-hover)}}.tabs.rubberTabs .tab.active:hover{background:transparent}.segBtn:active{background:var(--color-state-pressed);transform:scale(.97)}.segBtn:focus-visible{outline:none;box-shadow:inset 0 0 0 2px var(--color-border-focus)}.segBtn:disabled{opacity:.4;cursor:default}.moveActions.seg{background:transparent;transition:background .18s ease}.moveActions.seg:focus-within{background:var(--seg-bg)}@media (hover:hover){.moveActions.seg:hover{background:var(--seg-bg)}}.moveActions .editBtn,.moveActions .editBtn:hover{background:transparent}.moveActions .removeBtn,.moveActions .removeBtn:hover{background:transparent;color:var(--text)}@media (hover:hover){.moveActions .editBtn:hover{background:var(--color-state-hover)}.moveActions .removeBtn:hover{background:var(--danger-fill);color:var(--color-text-on-danger)}}.moveActions .removeBtn:active{background:linear-gradient(var(--color-state-pressed-on-bright),var(--color-state-pressed-on-bright)),var(--danger-fill);color:var(--color-text-on-danger)}.moveActions .removeBtn.holding{background:var(--danger-bg);color:var(--color-text-on-danger)}.moveActions .removeFill{background:var(--danger-fill)}.activityRowIcon,.activityIcon,.timeIcon,.nextIcon,.upcomingIcon{color:var(--muted)}', rs = `<main id="app"><div class="shell">
<div class="toast" id="toast" aria-live="polite"></div>

<!-- HOME -->
<section class="view active" id="homeView">
  <div class="grid">
    <div class="moveSection">
      <div class="sectionLabel">Today’s movement</div>
      <section class="workoutGallery" id="workoutGallery" aria-label="Move choices">
      <article class="workoutPanel addPanel" id="addWorkoutPanel" tabindex="0" role="button" aria-label="Add move">
        <span class="edgeLight" aria-hidden="true"></span>
        <div class="addPanelPlus">＋</div>
        <div class="addPanelLabel">Add move</div>
      </article>
    </section>
    </div>
    <div class="sectionLabel rowLabel" id="movementLabel">Movement &amp; you</div>
    <section class="card activityCard">
      <div class="activityHeader">
        <div class="activityIcon">⌁</div>
        <div class="activityTitle">Activity</div>
      </div>
      <div class="activityRows">
        <div class="activityRow" id="stepsRow">
          <div class="activityRowIcon">↟</div>
          <div><div class="activityRowName">Steps</div><div class="activityRowMeta" id="stepsMeta">Set up in Settings</div></div>
        </div>
        <div class="activityRow" id="moodRow">
          <div class="activityRowIcon">☺</div>
          <div><div class="activityRowName">Mood</div><div class="activityRowMeta" id="moodMeta">—</div></div>
        </div>
        <div class="activityRow" id="energyLevelRow">
          <div class="activityRowIcon">ϟ</div>
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
        <div class="nextIcon" id="nextIcon" aria-hidden="true">↗</div>
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
  <div class="settingsHeader"><button class="back" id="settingsBack">‹</button><div class="settingsTitle">Move Assistant</div></div>
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
    <div class="eyebrow" id="checkinEyebrow">Morning</div>
    <div class="confirmTitle" id="checkinTitle">Morning check-in</div>
    <div class="sub">How are you right now?</div>
    <div class="checkinSliders">
        <section class="tile timeTile checkinTile">
          <div class="timeHeader">
            <div class="timeIcon" aria-hidden="true">☺</div>
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
            <div class="timeIcon" aria-hidden="true">ϟ</div>
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
    <span class="checkinTabIcon" aria-hidden="true">☺</span>
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
  <button class="navBtn active" id="homeNav" title="Home">⌂</button>
  <button class="navBtn" id="settingsNav" title="Settings">⚙</button>
  <button class="navBtn" id="tvNav" title="TV mode (full screen)">⛶</button>
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
    <button class="addFab" id="addFab" type="button" aria-label="Add a step">+</button>
    <div class="sheetScrim" id="sheetScrim"></div>
    <section class="sheet" id="sheet" role="dialog" aria-modal="true" aria-labelledby="sheetTitle" aria-hidden="true">
      <div class="sheetGrab" aria-hidden="true"></div>
      <h3 class="sheetTitle" id="sheetTitle">Edit</h3>
      <div class="sheetBody" id="sheetBody"></div>
    </section>
  </section>
</div>
`;
function ss(x, w) {
  var bo, xo, wo, yo;
  const a = (e) => x.getElementById(e), K = a("workoutView"), N = a("workoutNameInput");
  let Z = !0;
  const Pt = a("homeClock");
  function Dt() {
    Pt && (Pt.textContent = new Intl.DateTimeFormat(void 0, { hour: "2-digit", minute: "2-digit" }).format(/* @__PURE__ */ new Date()));
  }
  Dt(), setInterval(Dt, 15e3);
  const Zi = a("createFlow"), So = a("createMovementsSlot"), Co = a("createTimingSlot"), To = a("createFinishSlot"), Lo = a("movementStepSummary"), Eo = a("timingStepSummary"), Mo = a("finishStepSummary"), Yn = a("continueToTiming"), Ro = a("continueToFinish"), Ao = a("finishMoveButton");
  let Un = !1, ln = [];
  function Bo(e) {
    !e || ln.some((t) => t.node === e) || ln.push({ node: e, parent: e.parentNode, next: e.nextSibling });
  }
  function Kn(e, t) {
    e && (Bo(e), t.appendChild(e));
  }
  function No() {
    [...ln].reverse().forEach(({ node: e, parent: t, next: n }) => {
      t && (n && n.parentNode === t ? t.insertBefore(e, n) : t.appendChild(e));
    }), ln = [];
  }
  function ot(e) {
    x.querySelectorAll(".createStep").forEach((t) => {
      t.classList.toggle("active", t.dataset.createStep === e);
    }), e === "timing" && (Un = !0), qe();
  }
  function qe() {
    var m, u;
    if (!J) return;
    R[F];
    const e = ve.filter((p) => !p.hidden), t = e.filter((p) => p.kind !== "rest").length, n = e.filter((p) => p.kind === "rest").length;
    Lo.textContent = t ? t + " movement" + (t === 1 ? "" : "s") + (n ? " · " + n + " rest" + (n === 1 ? "" : "s") : "") : "No movements yet";
    const i = t > 0, o = x.querySelector('[data-open-step="timing"]'), r = x.querySelector('[data-open-step="finish"]');
    o.disabled = !i, Yn.disabled = !i, Eo.textContent = i ? Je(W.value) + " · " + le(D.value) + " movement · " + le(z.value) + " rest" : "Add a movement first", r.disabled = !(i && Un);
    const s = ((N == null ? void 0 : N.value) || "").trim(), d = [];
    (m = a("includeWarmupPreset")) != null && m.checked && d.push("warm-up"), (u = a("includeCooldownPreset")) != null && u.checked && d.push("cooldown"), Mo.textContent = s ? s + (d.length ? " · " + d.join(" + ") : "") : d.length ? d.join(" + ") : "Name and optional extras";
  }
  function Fo() {
    var b, E, h;
    Zi.hidden = !1, Un = !1;
    const e = x.querySelector(".editNameRow"), t = a("createMoveOptions"), n = x.querySelector(".timeTiles"), i = a("routineSummaryModal"), o = x.querySelector(".tempoRevealRow"), r = a("tempoExperiment"), s = (b = a("warmupList")) == null ? void 0 : b.closest("section"), d = a("movementCreatorLaunch"), m = a("movementCreator"), u = (E = a("strengthList")) == null ? void 0 : E.closest("section"), p = (h = a("cooldownList")) == null ? void 0 : h.closest("section");
    [t == null ? void 0 : t.querySelector(".createExtras"), s, d, m, u, p].forEach((g) => g && Kn(g, So)), [t, n, i, o, r].forEach((g) => Kn(g, Co)), Kn(e, To), ot("movements"), qe();
  }
  function Io() {
    No(), Zi.hidden = !0, x.querySelectorAll(".createStep").forEach((e) => e.classList.remove("active"));
  }
  x.querySelectorAll("[data-open-step]").forEach((e) => e.addEventListener("click", () => {
    e.disabled || ot(e.dataset.openStep);
  })), Yn.addEventListener("click", () => {
    Yn.disabled || ot("timing");
  }), Ro.addEventListener("click", () => ot("finish")), Ao.addEventListener("click", () => a("saveWorkoutEdit").click());
  const rt = { home: a("homeView"), workout: a("workoutView"), settings: a("settingsView") }, Xi = a("homeNav"), Ji = a("settingsNav");
  function Zn(e) {
    Object.entries(rt).forEach(([t, n]) => n.classList.toggle("active", t === e)), Xi.classList.toggle("active", e === "home"), Ji.classList.toggle("active", e === "settings"), e === "home" && setTimeout(gi, 400), e === "settings" && (requestAnimationFrame(() => sn(x.querySelector(".tab.active"), !1)), zn());
  }
  const W = a("totalTime"), D = a("workTime"), z = a("restTime"), Po = a("totalOut"), $i = a("workOut"), Qi = a("restOut"), Do = a("totalFill"), Ho = a("workFill"), zo = a("restFill"), Le = a("roundsInput"), qo = a("roundsFill"), _o = a("roundsOut"), Go = a("totalLabel"), ea = a("routineSummaryModal"), cn = [
    { id: "standing-reach", name: "Standing reach", group: "Warm-up", kind: "warmup", hidden: !1 },
    { id: "arm-circles", name: "Arm circles", group: "Warm-up", kind: "warmup", hidden: !1 },
    { id: "hip-hinge", name: "Hip hinge drill", group: "Warm-up", kind: "warmup", hidden: !1 }
  ];
  let Se = cn.map((e) => ({ ...e })), ve = [
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
  const pn = [
    { id: "hip-flexor", name: "Hip flexor stretch", group: "Cooldown", kind: "cooldown", hidden: !1 },
    { id: "chest-opener", name: "Chest opener", group: "Cooldown", kind: "cooldown", hidden: !1 },
    { id: "hamstring", name: "Hamstring stretch", group: "Cooldown", kind: "cooldown", hidden: !1 },
    { id: "slow-breathing", name: "Slow breathing", group: "Cooldown", kind: "cooldown", hidden: !1 }
  ];
  let Ce = pn.map((e) => ({ ...e }));
  const Oo = {
    kettlebell: {
      name: "Kettlebell full body",
      eyebrow: "",
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
  }, I = ta(w.data), R = I.profiles;
  let F = R[I.selected] ? I.selected : I.order.find((e) => R[e]) || "kettlebell";
  function ta(e) {
    const t = e && typeof e == "object" ? JSON.parse(JSON.stringify(e)) : {}, n = t.profiles && Object.keys(t.profiles).length ? t.profiles : JSON.parse(JSON.stringify(Oo)), i = (Array.isArray(t.order) ? t.order : Object.keys(n)).filter((o) => n[o]);
    return Object.keys(n).forEach((o) => {
      i.includes(o) || i.push(o);
    }), {
      v: 1,
      profiles: n,
      order: i,
      selected: t.selected || i[0],
      history: Array.isArray(t.history) ? t.history : [],
      checkins: (Array.isArray(t.checkins) ? t.checkins : Wo(t.energy)).map(na),
      settings: { ...t.settings || {} }
    };
  }
  function Wo(e) {
    if (!Array.isArray(e)) return [];
    const t = ["Drained", "Low", "Okay", "Good", "Energised", "Great"], n = [];
    return e.forEach((i) => {
      const o = new Date(i.at);
      if (isNaN(o)) return;
      const r = o.getFullYear() + "-" + String(o.getMonth() + 1).padStart(2, "0") + "-" + String(o.getDate()).padStart(2, "0"), s = o.getHours() < 14 ? "morning" : "evening";
      if (n.some((m) => m.date === r && m.slot === s)) return;
      const d = t.indexOf(i.value) + 1;
      d > 0 && n.push({ date: r, slot: s, mood: null, energy: d, at: i.at });
    }), n;
  }
  function na(e) {
    if (e.scale === 100) return e;
    const t = (n) => n == null ? null : Math.round((Number(n) - 1) / 5 * 100);
    return { ...e, mood: t(e.mood), energy: t(e.energy), scale: 100 };
  }
  function Me() {
    J || (I.selected = F, I.order = I.order.filter((e) => R[e] && e !== Xe), w.save(I));
  }
  function q() {
    return I.settings;
  }
  function Re(e) {
    const t = R[e];
    if (!t) return;
    F = e;
    const n = a("workoutNameInput");
    if (n && (n.value = t.name), W.value = t.total, D.value = t.work, z.value = t.rest, Le.value = t.rounds || 1, t.customSequence) {
      const i = (t.sequence || []).map((r) => ({ ...r })), o = (r) => i.filter((s) => s.presetRole === r).map(({ presetRole: s, ...d }) => d);
      Se = (t.warmup || o("warmup")).map((r) => ({ ...r })), Ce = (t.cooldown || o("cooldown")).map((r) => ({ ...r })), ve = i.filter((r) => !r.presetRole), Qn(t.preset || "movement", !1);
    } else
      W.min = 3, W.max = 40, W.step = 1, D.min = 20, D.max = 60, D.step = 5, z.min = 5, z.max = 30, z.step = 5, Se = (t.warmup || cn).map((i) => ({ ...i })), Ce = (t.cooldown || pn).map((i) => ({ ...i })), ve = t.strength.map((i) => Array.isArray(i) ? (([o, r, s, d = !1]) => ({ id: o, name: r, group: s, kind: "work", hidden: !!d }))(i) : { ...i });
    x.querySelectorAll(".workoutPanel[data-workout]").forEach((i) => i.classList.toggle("active", i.dataset.workout === e)), G();
  }
  function Vo(e, t, n) {
    const i = e.getBoundingClientRect(), o = i.width / 2, r = i.height / 2, s = t - o, d = n - r;
    let m = 1 / 0, u = 1 / 0;
    s !== 0 && (m = o / Math.abs(s)), d !== 0 && (u = r / Math.abs(d));
    const p = Math.min(Math.max(1 / Math.min(m, u), 0), 1);
    let l = Math.atan2(d, s) * (180 / Math.PI) + 90;
    return l < 0 && (l += 360), { edge: p, angle: l };
  }
  function Xn(e, t, n = !1) {
    const i = e.getBoundingClientRect(), o = t.clientX - i.left, r = t.clientY - i.top, { edge: s, angle: d } = Vo(e, o, r), m = n ? 100 : s * 100;
    e.style.setProperty("--edge-proximity", m.toFixed(3)), e.style.setProperty("--cursor-angle", d.toFixed(3) + "deg"), e.classList.toggle("borderGlowActive", n || m >= 30);
  }
  function ia(e) {
    e.addEventListener("pointermove", (n) => Xn(e, n, !1)), e.addEventListener("pointerenter", (n) => Xn(e, n, !1)), e.addEventListener("pointerdown", (n) => Xn(e, n, !0));
    const t = () => {
      e.classList.remove("borderGlowActive"), e.style.setProperty("--edge-proximity", "0");
    };
    e.addEventListener("pointerleave", t), e.addEventListener("pointerup", t), e.addEventListener("pointercancel", t);
  }
  ia(a("addWorkoutPanel"));
  let J = !1, Xe = null;
  function L(e) {
    return String(e ?? "").replace(/[&<>"']/g, (t) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[t]);
  }
  function jo(e) {
    return e.summary ? e.summary : e.customSequence ? Je(e.total) + " · custom move" : Je(e.total) + " · " + le(e.work) + " / " + le(e.rest) + " · warm-up + cooldown";
  }
  function Jn(e, t) {
    var s;
    const n = document.createElement("article");
    n.className = "workoutPanel", n.dataset.workout = e, n.tabIndex = 0;
    const i = t.eyebrow === void 0 ? "Movement" : t.eyebrow, o = t.activityCount ?? (((s = t.sequence) == null ? void 0 : s.length) || 0);
    n.innerHTML = '<span class="edgeLight" aria-hidden="true"></span><div class="panelExpanded"><div><div class="workoutPanelTop"><div>' + (i ? '<div class="eyebrow">' + L(i) + "</div>" : "") + '<div class="workoutName">' + L(t.name) + '</div><div class="sub">' + L(jo(t)) + '</div><span class="sourceTag">' + L(t.source || "Custom move") + '</span></div><button class="pill seeWorkoutBtn" type="button">Edit</button></div></div><div class="workoutFooter"><div><strong class="activityCount">' + (o ? o + " activities" + ((t.rounds || 1) > 1 ? " × " + t.rounds : "") : "—") + '</strong></div><div class="workoutPanelActions"><button class="primary startWorkoutBtn" type="button">Start move</button></div></div></div><div class="panelCollapsed"><div class="panelCollapsedText">' + L(t.name) + "</div></div>";
    const r = a("addWorkoutPanel");
    return a("workoutGallery").insertBefore(n, r), ia(n), n.addEventListener("click", (d) => {
      d.target.closest("button") || Re(e);
    }), n.addEventListener("keydown", (d) => {
      (d.key === "Enter" || d.key === " ") && !d.target.closest("button") && (d.preventDefault(), Re(e));
    }), n.querySelector(".seeWorkoutBtn").addEventListener("click", (d) => {
      d.stopPropagation(), Re(e), Na(!1);
    }), n.querySelector(".startWorkoutBtn").addEventListener("click", (d) => {
      d.stopPropagation(), Re(e), Ar();
    }), n;
  }
  function aa() {
    x.querySelectorAll(".workoutPanel[data-workout]").forEach((e) => e.remove()), I.order.forEach((e) => {
      R[e] && Jn(e, R[e]);
    }), x.querySelectorAll(".workoutPanel[data-workout]").forEach((e) => e.classList.toggle("active", e.dataset.workout === F));
  }
  aa(), a("addWorkoutPanel").addEventListener("keydown", (e) => {
    (e.key === "Enter" || e.key === " ") && (e.preventDefault(), a("addWorkoutPanel").click());
  }), a("addWorkoutPanel").addEventListener("click", () => {
    J = !0, Xe = "custom-" + Date.now(), R[Xe] = {
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
    }, Re(Xe), Na(!0);
  });
  let f = [], T = 0, ce = 0, Ht = 1, Ee = !1, Q = null, un = null, de = !1, st = I.settings.upcomingCount ?? "all", oa = "movement";
  function mn(e, t, n) {
    return (Number(e) - t) / (n - t) * 100;
  }
  function le(e) {
    const t = Math.max(0, Number(e) || 0);
    return t >= 3600 && t % 3600 === 0 ? t / 3600 + " hr" : t >= 60 && t % 60 === 0 ? t / 60 + " min" : t >= 60 ? Math.round(t / 60) + " min" : Math.round(t) + " sec";
  }
  function Je(e) {
    const t = Math.max(0, Number(e) || 0);
    return t >= 60 && t % 60 === 0 ? t / 60 + " hr" : t >= 60 ? Math.floor(t / 60) + " hr " + t % 60 + " min" : t + " min";
  }
  function gn() {
    Do.style.width = mn(W.value, Number(W.min), Number(W.max)) + "%", Ho.style.width = mn(D.value, Number(D.min), Number(D.max)) + "%", zo.style.width = mn(z.value, Number(z.min), Number(z.max)) + "%", $i.textContent = le(D.value), Qi.textContent = le(z.value);
    const e = Number(Le.value) || 1;
    qo.style.width = mn(e, 1, 10) + "%", Go.textContent = e > 1 ? "Time per round" : "Total time";
  }
  function $n(e) {
    return e.filter((t) => !t.hidden);
  }
  function zt(e) {
    const t = Math.max(0, Math.round(Number(e) || 0)), n = Math.floor(t / 3600), i = Math.floor(t % 3600 / 60), o = t % 60;
    return (n ? n + ":" + String(i).padStart(2, "0") : i) + ":" + String(o).padStart(2, "0");
  }
  function Yo(e) {
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
        const d = t.pathname.match(/^\/(embed|shorts|live|v)\/([^/?#]+)/);
        d && (i = d[2]);
      }
    if (!i || !/^[\w-]{11}$/.test(i)) return null;
    const o = (d) => {
      if (!d) return 0;
      if (/^\d+$/.test(d)) return Number(d);
      const m = d.match(/^(?:(\d+)h)?(?:(\d+)m)?(?:(\d+)s)?$/);
      return m ? (Number(m[1]) || 0) * 3600 + (Number(m[2]) || 0) * 60 + (Number(m[3]) || 0) : 0;
    }, r = o(t.searchParams.get("t") || t.searchParams.get("start")), s = o(t.searchParams.get("end"));
    return { id: i, start: r, end: s > r ? s : null };
  }
  function qt(e, t) {
    if (e.useVideoLength === !1) return Math.max(5, Number(e.duration) || t || 300);
    const n = Number(e.start) || 0, i = Number(e.end) || Number(e.videoDuration) || 0;
    return i > n ? Math.round(i - n) : Number(e.duration) || 300;
  }
  function vn(e, t) {
    const n = Math.max(0, Number(e) || 0);
    return Math.round(t === "hour" ? n * 3600 : t === "min" ? n * 60 : n);
  }
  function Qn(e, t = !0) {
    oa = e, x.querySelectorAll(".createPresetBtn").forEach((i) => i.classList.toggle("active", i.dataset.movePreset === e));
    const n = R[F];
    n && (n.preset = e), e === "work" ? (W.min = 30, W.max = 480, W.step = 30, D.min = 300, D.max = 7200, D.step = 300, z.min = 60, z.max = 1800, z.step = 60, t && (W.value = 60, D.value = 1500, z.value = 300), a("addMovementUnit").value = "min", a("addMovementDuration").value = 25, a("addRestUnit").value = "min", a("addRestDuration").value = 5) : (W.min = 3, W.max = 40, W.step = 1, D.min = 20, D.max = 60, D.step = 5, z.min = 5, z.max = 30, z.step = 5, t && (W.value = 20, D.value = 45, z.value = 15), a("addMovementUnit").value = "sec", a("addMovementDuration").value = 45, a("addRestUnit").value = "sec", a("addRestDuration").value = 30), gn();
  }
  function ra(e, t) {
    const n = oa === "work";
    return e.map((i, o) => ({ ...i, id: t + "-" + o + "-" + Date.now().toString(36), useGlobalTiming: !n, duration: n ? 60 : Number(D.value) }));
  }
  function ei() {
    const e = R[F];
    e != null && e.customSequence && (e.includeWarmup = a("includeWarmupPreset").checked, e.includeCooldown = a("includeCooldownPreset").checked, e.includeWarmup && !Se.length && (Se = ra(cn, "warm")), e.includeCooldown && !Ce.length && (Ce = ra(pn, "cool")), G());
  }
  function Uo() {
    const e = a("upcomingCountSetting");
    if (!e) return;
    const t = Math.max(1, f.length - 1), n = st;
    e.innerHTML = "";
    for (let r = 1; r <= t; r++) {
      const s = document.createElement("option");
      s.value = String(r), s.textContent = String(r), e.appendChild(s);
    }
    const i = document.createElement("option");
    i.value = "all", i.textContent = "All", e.appendChild(i);
    const o = n === "all" ? "all" : String(Math.min(Number(n) || 1, t));
    e.value = o, st = o === "all" ? "all" : Number(o);
  }
  function G() {
    Number(W.value) * 60;
    const e = Number(D.value), t = Number(z.value), n = R[F], i = !!(n != null && n.customSequence), o = (i ? !n.includeWarmup : n != null && n.warmupOff) ? [] : $n(Se), r = $n(ve), s = i && !n.includeCooldown ? [] : $n(Ce);
    if (n && (n.total = Number(W.value), n.work = e, n.rest = t, n.rounds = Number(Le.value) || 1, n.customSequence ? (n.sequence = ve.map((c) => ({ ...c })), n.warmup = Se.map((c) => ({ ...c })), n.cooldown = Ce.map((c) => ({ ...c }))) : (n.strength = ve.map((c) => ({ ...c })), n.warmup = Se.map((c) => ({ ...c })), n.cooldown = Ce.map((c) => ({ ...c })))), n != null && n.customSequence) {
      const c = [...o.map((S) => ({ ...S, section: "warmup" })), ...r, ...s.map((S) => ({ ...S, section: "cooldown" }))].map((S) => {
        if (S.kind === "video") return { ...S, duration: qt(S, e), rest: 0 };
        if (S.kind === "rest") {
          const ne = S.useGlobalTiming === !0 ? t : Number(S.duration) || t;
          return { ...S, duration: ne, rest: 0 };
        }
        const te = S.useGlobalTiming === !1 && Number(S.duration) || e;
        return { ...S, duration: te, rest: 0 };
      });
      n.autoRest && Number(n.autoRestDuration) > 0 ? (f = [], c.forEach((S, te) => {
        f.push(S);
        const ne = c[te + 1];
        S.kind !== "rest" && ne && ne.kind !== "rest" && f.push({
          id: "auto-rest-" + te,
          name: "Rest",
          group: "Rest",
          kind: "rest",
          hidden: !1,
          duration: Number(n.autoRestDuration),
          rest: 0,
          autoGenerated: !0
        });
      })) : f = c;
    } else
      f = [...o.map((c) => ({ ...c, section: "warmup" })), ...r, ...s.map((c) => ({ ...c, section: "cooldown" }))].map((c) => c.kind === "video" ? { ...c, duration: qt(c, e), rest: 0 } : c.kind === "rest" ? { ...c, duration: c.useGlobalTiming === !0 ? t : Number(c.duration) || t, rest: 0 } : { ...c, duration: c.useGlobalTiming === !1 && Number(c.duration) || e, rest: t }), f.forEach((c, S) => {
        var te;
        ((te = f[S + 1]) == null ? void 0 : te.kind) === "rest" && (c.rest = 0);
      }), f.length && (f[f.length - 1].rest = 0);
    const d = Math.max(1, Math.min(10, Number(Le.value) || 1)), m = f, u = (c) => d <= 1 ? null : c.section === "warmup" || c.presetRole === "warmup" ? "first" : c.section === "cooldown" || c.presetRole === "cooldown" ? "last" : c.kind === "video" && (c.videoRounds === "first" || c.videoRounds === "last") ? c.videoRounds : null, p = (c) => !!u(c), l = m.filter((c) => !p(c)), b = m.filter(p), E = l.length, h = l.reduce((c, S) => c + S.duration + S.rest, 0), g = b.reduce((c, S) => c + S.duration + S.rest, 0), v = [
      b.some((c) => c.section === "warmup" || c.presetRole === "warmup") && "warm-up",
      b.some((c) => c.section === "cooldown" || c.presetRole === "cooldown") && "cooldown",
      b.some((c) => c.kind === "video" && !c.section && !c.presetRole) && "video"
    ].filter(Boolean), P = v.length > 1 ? v.slice(0, -1).join(", ") + " & " + v[v.length - 1] : v[0] || "";
    f = [];
    const M = (c, S) => {
      const te = u(c);
      return !te || (te === "first" ? S === 1 : S === d);
    };
    for (let c = 1; c <= d; c++)
      if (m.filter((S) => M(S, c)).forEach((S, te) => f.push({ ...S, id: S.id + (d > 1 ? "-r" + c : ""), round: c, roundIndex: te })), c < d && E)
        if (n != null && n.customSequence)
          f.push({ id: "round-break-" + c, name: "Rest", group: "Round " + (c + 1) + " next", kind: "rest", hidden: !1, duration: t, rest: 0, round: c, roundIndex: E, roundBreak: !0 });
        else {
          const S = f[f.length - 1];
          S.rest = t, S.roundBreakAfter = !0;
        }
    gn();
    const y = f.reduce((c, S) => c + S.duration + S.rest, 0), B = Math.round(h / 60), j = Math.round(y / 60), ee = d > 1 ? Je(B) + " × " + d + " rounds" + (g ? " + " + le(g) + " " + P : "") + " (" + Je(j) + ")" : Je(j), _ = [o.length ? "warm-up" : "", s.length ? "cooldown" : ""].filter(Boolean), ae = n != null && n.customSequence ? ee + " · " + E + " items" + (_.length && !(d > 1 && g) ? " · " + _.join(" + ") : "") : ee + " · " + le(e) + " / " + le(t) + (_.length && !(d > 1 && g) ? " · " + _.join(" + ") : "");
    Po.textContent = le(h);
    const se = f.filter((c) => !c.roundBreak).length, X = d > 1 ? se + " activities · " + d + " rounds" : E + " activities";
    _o.textContent = d > 1 ? d + " rounds · " + Je(j) + " total" : "1 round", a("roundsCount").textContent = d, x.querySelectorAll("[data-rounds-step]").forEach((c) => {
      c.disabled = Number(c.dataset.roundsStep) < 0 ? d <= 1 : d >= 10;
    }), n && (n.summary = ae, n.activityCount = E);
    const Ke = x.querySelector(".workoutPanel.active .sub");
    Ke && (Ke.textContent = ae), ea.textContent = ae, si(), x.querySelectorAll(".workoutPanel.active .activityCount").forEach((c) => c.textContent = X), gn(), ii(), li(), jt(), Uo(), J && qe(), rt.workout.classList.contains("active") && !Q && Ri();
  }
  const _t = '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><g fill="currentColor"><circle cx="9" cy="6" r="1.6"/><circle cx="15" cy="6" r="1.6"/><circle cx="9" cy="12" r="1.6"/><circle cx="15" cy="12" r="1.6"/><circle cx="9" cy="18" r="1.6"/><circle cx="15" cy="18" r="1.6"/></g></svg>', Ko = '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6z"/></svg>';
  let he = null, Te = null;
  function Zo(e) {
    return e = Math.max(1, Number(e) || 0), e >= 3600 && e % 3600 === 0 ? { value: e / 3600, unit: "hour" } : e >= 60 && e % 60 === 0 ? { value: e / 60, unit: "min" } : { value: e, unit: "sec" };
  }
  function sa(e = !1) {
    const t = x.querySelector(".moveEditForm input[data-f=url],.moveEditForm input[data-f=name]");
    t && (t.focus({ preventScroll: !0 }), e && t.select());
  }
  function ti(e, t, n = {}) {
    const i = e.kind === "rest", o = e.kind === "video", r = o ? e.useVideoLength !== !1 : i ? e.useGlobalTiming === !0 : e.useGlobalTiming !== !1, s = Number(i ? z.value : D.value), d = Zo(o ? e.useVideoLength === !1 ? e.duration : qt({ ...e, useVideoLength: !0 }) : r ? s : e.duration || s), m = o && (Number(e.videoDuration) > 0 || Number(e.end) > 0), u = o ? '<label class="moveEditWide"><span>YouTube link</span><input class="addInput" data-f="url" type="url" inputmode="url" autocomplete="off" value="' + L(e.url || "") + '" placeholder="Paste a YouTube link"></label><label><span>Name</span><input class="addInput" data-f="name" type="text" value="' + L(e.autoName ? "" : e.name) + '" placeholder="Uses the video’s title"></label><label><span>Plays in</span><select class="creatorUnitSelect" data-f="rounds">' + [["every", "Every round"], ["first", "The first round only"], ["last", "The last round only"]].map(([y, B]) => '<option value="' + y + '"' + ((e.videoRounds || "every") === y ? " selected" : "") + ">" + B + "</option>").join("") + '</select></label><p class="fieldError" data-f="urlError" hidden>That isn’t a YouTube link. Copy it from the Share button on YouTube.</p>' : '<label><span>Name</span><input class="addInput" data-f="name" type="text" value="' + L(e.name) + '" placeholder="' + (i ? "Rest" : "Name this movement") + '"></label><label><span>Type / group</span><input class="addInput" data-f="group" type="text" value="' + L(e.group) + '" placeholder="' + (i ? "Rest" : "e.g. Glutes + legs") + '"></label>', p = o ? "Play the whole " + (Number(e.start) > 0 || Number(e.end) > 0 ? "clip" : "video") + (m ? " · " + zt(qt({ ...e, useVideoLength: !0 })) : "") : "Use global timing · " + le(s), l = document.createElement("div");
    l.className = "moveRow editing" + (n.sheet ? " inSheet" : ""), l.dataset.index = t, l.dataset.id = e.id;
    const b = n.isNew ?? (Te == null ? void 0 : Te.item) === e, E = n.sheet ? '<div class="moveEditActions sheetActions">' + (b ? "" : '<div class="sheetSecondary"><button class="hideBtn" type="button" data-a="hide">' + (e.hidden ? "Show" : "Hide") + '</button><button class="removeBtn" type="button" data-a="remove" aria-label="Hold to remove ' + L(e.name) + '"><span class="removeFill"></span><span class="removeLabel">Remove</span></button></div>') + '<div class="sheetPrimary"><button class="pill" type="button" data-a="cancel">Cancel</button><button class="primary" type="button" data-a="save">' + (b ? "Add" : "Save") + "</button></div></div>" : '<div class="moveEditActions"><button class="pill" type="button" data-a="cancel">Cancel</button><button class="primary" type="button" data-a="save">Save</button></div>';
    l.innerHTML = '<div class="moveEditForm"><div class="moveEditFields' + (o ? " videoFields" : "") + '">' + u + '</div><div class="moveEditTiming"><label class="globalTimingToggle"><input type="checkbox" data-f="global"' + (r ? " checked" : "") + '><span class="toggleTrack" aria-hidden="true"><span class="toggleThumb"></span></span><span class="toggleLabel">' + L(p) + '</span></label><div class="creatorDurationRow"><input class="addInput creatorNumber" data-f="dur" type="number" min="1" max="3600" step="1" value="' + d.value + '" aria-label="Duration"><select class="creatorUnitSelect" data-f="unit" aria-label="Duration unit">' + ["sec", "min", "hour"].map((y) => '<option value="' + y + '"' + (y === d.unit ? " selected" : "") + ">" + { sec: "seconds", min: "minutes", hour: "hours" }[y] + "</option>").join("") + "</select></div></div>" + E + "</div>";
    const h = (y) => l.querySelector("[data-f=" + y + "]"), g = () => {
      const y = h("global").checked;
      h("dur").disabled = y, h("unit").disabled = y, l.querySelector(".creatorDurationRow").classList.toggle("isDisabled", y);
    };
    h("global").addEventListener("change", g), g();
    const v = () => {
      var y;
      if (n.sheet) {
        (y = n.onCancel) == null || y.call(n);
        return;
      }
      b && fn(), he = null, G();
    }, P = () => {
      var j;
      if (o) {
        M();
        return;
      }
      const y = h("name").value.trim();
      if (!y) {
        h("name").focus();
        return;
      }
      e.name = y, e.group = h("group").value.trim() || (i ? "Rest" : "Movement");
      const B = h("global").checked;
      if (e.useGlobalTiming = B, B || (e.duration = Math.max(i ? 5 : 1, vn(h("dur").value, h("unit").value))), n.sheet) {
        (j = n.onSaved) == null || j.call(n);
        return;
      }
      b && (Te = null), he = null, G(), Y(b ? i ? "Rest added" : "Movement added" : "Movement updated");
    }, M = () => {
      var _;
      const y = h("url").value.trim(), B = Yo(y);
      if (!B) {
        h("urlError").hidden = !1, h("url").classList.add("invalid"), h("url").focus();
        return;
      }
      const j = B.id !== e.videoId;
      e.url = y, e.videoId = B.id, e.start = B.start, e.end = B.end, j && (e.videoDuration = null, e.videoError = null);
      const ee = h("name").value.trim();
      e.autoName = !ee, e.name = ee || (j ? "" : e.name) || e.videoTitle || "YouTube video", e.group = "Video", e.videoRounds = h("rounds").value, e.useVideoLength = h("global").checked, e.useVideoLength || (e.duration = Math.max(5, vn(h("dur").value, h("unit").value))), n.sheet ? (_ = n.onSaved) == null || _.call(n) : (b && (Te = null), he = null, G(), Y(b ? "Video added" : "Video updated")), (j || !e.videoDuration || e.autoName && !e.videoTitle) && Or(e);
    };
    if (o && h("url").addEventListener("input", () => {
      h("urlError").hidden = !0, h("url").classList.remove("invalid");
    }), l.querySelector("[data-a=cancel]").addEventListener("click", v), l.querySelector("[data-a=save]").addEventListener("click", P), n.sheet && !b) {
      l.querySelector("[data-a=hide]").addEventListener("click", () => {
        var B;
        return (B = n.onHide) == null ? void 0 : B.call(n);
      });
      const y = l.querySelector("[data-a=remove]");
      rn(y, y.querySelector(".removeFill"), 1200, () => {
        var B;
        return (B = n.onRemove) == null ? void 0 : B.call(n);
      });
    }
    return l.addEventListener("keydown", (y) => {
      y.key === "Escape" && (y.preventDefault(), y.stopPropagation(), v()), y.key === "Enter" && y.target.matches("input") && (y.preventDefault(), P());
    }), l;
  }
  function ni(e, t) {
    const n = a(t);
    n.innerHTML = "", e.forEach((i, o) => {
      if (i === he && !Vt()) {
        n.appendChild(ti(i, o));
        return;
      }
      const r = document.createElement("div");
      r.className = "moveRow" + (i.hidden ? " hidden" : "") + (i.kind === "rest" ? " restItem" : "") + (i.kind === "video" ? " videoItem" : "") + (Pi(i) ? " noMeta" : ""), r.dataset.index = o, r.dataset.id = i.id;
      const s = i.kind === "rest" ? i.useGlobalTiming === !0 ? "Global timing" : le(i.duration) : i.useGlobalTiming === !1 ? le(i.duration) : "Global timing", d = i.kind === "video" ? '<span class="moveKindBadge">Video</span>' : "", m = i.kind === "video" ? i.videoError ? "YouTube · can’t play outside YouTube" : "YouTube · " + (i.useVideoLength === !1 ? "stops after " + le(i.duration) : Number(i.videoDuration) > 0 || Number(i.end) > 0 ? zt(qt(i)) : "plays to the end") + (i.videoRounds === "first" ? " · first round only" : i.videoRounds === "last" ? " · last round only" : "") : i.group + " · " + s, u = '<button class="dragHandle" type="button" title="Drag to reorder" aria-label="Reorder ' + L(i.name) + '. Drag, or use the up and down arrow keys">' + _t + "</button>", p = '<div class="moveText"><div class="moveItemName">' + L(i.name) + d + '</div><div class="moveMeta">' + L(m) + "</div></div>", l = (h) => h.addEventListener("keydown", (g) => {
        var M, y;
        if (g.key !== "ArrowUp" && g.key !== "ArrowDown") return;
        g.preventDefault();
        const v = e.indexOf(i), P = v + (g.key === "ArrowUp" ? -1 : 1);
        P < 0 || P >= e.length || (e.splice(v, 1), e.splice(P, 0, i), G(), (y = (M = a(t).children[P]) == null ? void 0 : M.querySelector(".dragHandle")) == null || y.focus());
      });
      if (Vt()) {
        r.classList.add("phoneRow"), r.tabIndex = 0, r.setAttribute("role", "button"), r.setAttribute("aria-label", "Edit " + (i.name || "step")), r.innerHTML = u + p + '<span class="rowChevron" aria-hidden="true">›</span>';
        const h = r.querySelector(".dragHandle");
        h.addEventListener("pointerdown", (g) => da(g, r, n, e)), l(h), r.addEventListener("click", (g) => {
          g.target.closest(".dragHandle") || ba(i, e);
        }), r.addEventListener("keydown", (g) => {
          g.key === "Enter" && g.target === r && (g.preventDefault(), ba(i, e));
        }), n.appendChild(r);
        return;
      }
      r.innerHTML = u + p + '<div class="moveActions seg"><button class="hideBtn editBtn segBtn" type="button" aria-label="Edit ' + L(i.name) + '">Edit</button><button class="hideBtn segBtn" type="button">' + (i.hidden ? "Show" : "Hide") + '</button><button class="removeBtn segBtn" type="button" title="Hold to remove" aria-label="Hold to remove ' + L(i.name) + '"><span class="removeFill"></span><span class="removeLabel">' + Ko + "</span></button></div>", r.querySelector(".editBtn").addEventListener("click", () => {
        fn(), he = i, G(), sa();
      }), r.querySelector(".hideBtn:not(.editBtn)").addEventListener("click", () => {
        i.hidden = !i.hidden, G();
      });
      const b = r.querySelector(".removeBtn");
      rn(b, b.querySelector(".removeFill"), 1200, () => {
        const h = e.indexOf(i);
        h < 0 || (e.splice(h, 1), G(), Y("Removed " + i.name, { label: "Undo", run: () => {
          e.splice(Math.min(h, e.length), 0, i), G();
        } }));
      });
      const E = r.querySelector(".dragHandle");
      E.addEventListener("pointerdown", (h) => da(h, r, n, e)), l(E), n.appendChild(r);
    });
  }
  const _e = () => {
    var e;
    return (e = window.matchMedia) == null ? void 0 : e.call(window, "(prefers-reduced-motion: reduce)").matches;
  }, hn = (e) => {
    var t;
    try {
      (t = navigator.vibrate) == null || t.call(navigator, e);
    } catch {
    }
  };
  function da(e, t, n, i) {
    if (e.button !== void 0 && e.button !== 0) return;
    e.preventDefault();
    const o = e.currentTarget, r = e.pointerId, s = !_e();
    try {
      o.setPointerCapture(r);
    } catch {
    }
    const d = t.closest(".exerciseScroller") || ai(t), m = n.style.position;
    n.style.position = "relative";
    const u = [...n.children].filter((C) => C.classList.contains("moveRow")), p = u.indexOf(t), l = parseFloat(getComputedStyle(n).rowGap) || 8, b = t.offsetHeight, E = b + l, h = u.map((C) => C.offsetTop), g = u.map((C) => C.offsetHeight), v = () => n.getBoundingClientRect().top, P = n.getBoundingClientRect().width, M = e.clientY - (v() + h[p]), y = e.clientX;
    let B = e.clientY, j = e.clientX, ee = v() + h[p], _ = 0, ae = 0, se = 0, X = 1, Ke = 0, c = p, S = !1, te = 0, ne = !1, Wn = !1, Ft = h[p];
    n.classList.add("reordering"), t.classList.add("dragging"), t.style.transition = "none", hn(8);
    const Vn = () => {
      const C = B - M + b / 2 - v();
      let A = 0;
      return u.forEach((O, ge) => {
        ge !== p && C > h[ge] + g[ge] / 2 && A++;
      }), A;
    }, jn = () => {
      u.forEach((C, A) => {
        if (A === p) return;
        const O = p < c && A > p && A <= c ? -E : p > c && A >= c && A < p ? E : 0;
        C.style.transform = O ? "translateY(" + O + "px)" : "";
      });
    }, dn = () => {
      const C = n.getBoundingClientRect(), A = Math.abs(j - y) > Math.max(80, P * 0.3) || j < C.left - 24 || j > C.right + 24;
      A !== S && (S = A, t.classList.toggle("willReturn", A), hn(A ? 10 : 4));
      const O = S ? p : Vn();
      O !== c && (c = O, jn(), S || hn(4));
    }, Ze = () => {
      if (c === p) return h[p];
      const C = u.filter((O, ge) => ge !== p);
      let A = h[0];
      for (let O = 0; O < c; O++) A += C[O].offsetHeight + l;
      return A;
    }, It = () => {
      const C = s ? Math.min(Math.abs(_) / 40, 1) : 0, A = s && !ne ? Math.max(-3, Math.min(3, se * 0.6)) : 0;
      t.style.transform = "translate(" + ae.toFixed(2) + "px," + (ee - (v() + h[p])).toFixed(2) + "px) rotate(" + A.toFixed(2) + "deg) scale(" + (X * (1 - 0.04 * C)).toFixed(4) + "," + (X * (1 + 0.06 * C)).toFixed(4) + ")";
    }, k = () => {
      te = requestAnimationFrame(k);
      const C = j - y, A = ne ? v() + Ft : B - M, O = ne ? 0 : S ? C * 0.9 : Math.max(-22, Math.min(22, C * 0.22)), ge = ne ? 1 : S ? 0.97 : 1.035;
      if (!s) {
        ee = A, ae = ne ? 0 : O, X = 1, It(), ne && U();
        return;
      }
      const is = ne ? 0.24 : 0.2, as = ne ? 0.62 : 0.68;
      _ = (_ + (A - ee) * is) * as, ee += _, se = (se + (O - ae) * 0.16) * 0.7, ae += se, Ke = (Ke + (ge - X) * 0.22) * 0.6, X += Ke, It(), ne && Math.abs(_) < 0.15 && Math.abs(A - ee) < 0.5 && Math.abs(ae) < 0.5 && Math.abs(X - 1) < 3e-3 && U();
    }, H = setInterval(() => {
      if (!d || ne) return;
      const C = d.getBoundingClientRect(), A = 56, O = B < C.top + A ? -10 : B > C.bottom - A ? 10 : 0;
      O && (d.scrollTop += O, dn());
    }, 30);
    function U() {
      if (Wn) return;
      Wn = !0, cancelAnimationFrame(te);
      const C = c !== p, A = t.dataset.id;
      if (n.classList.remove("reordering"), u.forEach((ge) => {
        ge.style.transition = "none", ge.style.transform = "";
      }), t.classList.remove("dragging", "willReturn"), n.style.position = m, C) {
        const [ge] = i.splice(p, 1);
        i.splice(c, 0, ge);
      }
      G();
      const O = A && n.querySelector('.moveRow[data-id="' + A + '"]');
      O && s && O.animate([{ transform: "scale(1.02,.95)" }, { transform: "scale(.995,1.012)" }, { transform: "none" }], { duration: 340, easing: "ease-out" }), C && Y("Order saved");
    }
    const ie = (C) => {
      if (C.pointerId === r) {
        if (C.pointerType === "mouse" && C.buttons === 0) {
          ke();
          return;
        }
        B = C.clientY, j = C.clientX, dn();
      }
    }, me = (C) => {
      C.pointerId === r && ke();
    };
    function ke() {
      ne || (window.removeEventListener("pointermove", ie, !0), window.removeEventListener("pointerup", me, !0), window.removeEventListener("pointercancel", me, !0), o.removeEventListener("lostpointercapture", ke), clearInterval(H), S && c !== p && (c = p, jn()), Ft = Ze(), ne = !0, hn(6), setTimeout(U, 800));
    }
    window.addEventListener("pointermove", ie, !0), window.addEventListener("pointerup", me, !0), window.addEventListener("pointercancel", me, !0), o.addEventListener("lostpointercapture", ke), te = requestAnimationFrame(k), It();
  }
  function ii() {
    var o, r, s, d;
    const e = R[F], t = (o = a("warmupList")) == null ? void 0 : o.closest("section"), n = (r = a("cooldownList")) == null ? void 0 : r.closest("section"), i = (d = (s = a("strengthList")) == null ? void 0 : s.closest("section")) == null ? void 0 : d.querySelector(".sectionTitle");
    e != null && e.customSequence ? (t && (t.hidden = !e.includeWarmup), n && (n.hidden = !e.includeCooldown), i && (i.textContent = "Move sequence")) : (t && (t.hidden = !!(e != null && e.warmupOff)), n && (n.hidden = !1), i && (i.textContent = "Kettlebell work")), ni(Se, "warmupList"), ni(ve, "strengthList"), ni(Ce, "cooldownList");
  }
  function fn() {
    if (!Te) return;
    const { item: e, arr: t } = Te;
    Te = null;
    const n = t.indexOf(e);
    n >= 0 && t.splice(n, 1), he === e && (he = null);
  }
  function Gt(e) {
    return e.id === "warmupList" ? { arr: Se, kind: "warmup", group: "Warm-up" } : e.id === "cooldownList" ? { arr: Ce, kind: "cooldown", group: "Cooldown" } : { arr: ve, kind: "work", group: "" };
  }
  function la(e, t) {
    const n = Gt(t), i = Date.now().toString(36);
    return e === "video" ? { id: "video-" + i, name: "", group: "Video", kind: "video", hidden: !1, url: "", videoId: "", start: 0, end: null, videoDuration: null, useVideoLength: !0, autoName: !0, duration: 300 } : e === "rest" ? { id: "rest-" + i, name: "Rest", group: "Rest", kind: "rest", hidden: !1, useGlobalTiming: !0, duration: Number(z.value) } : { id: "movement-" + i, name: "", group: n.group, kind: n.kind, hidden: !1, useGlobalTiming: !0, duration: Number(D.value) };
  }
  const ca = "cubic-bezier(.34,1.46,.64,1)";
  function pa(e, t) {
    if (_e() || !e) {
      t();
      return;
    }
    const n = (r) => {
      var s;
      return ((s = r.dataset) == null ? void 0 : s.id) || r;
    }, i = () => [...e.querySelectorAll(".moveRow,.sectionTitle,.movementCreatorLaunch")], o = new Map(i().map((r) => [n(r), r.getBoundingClientRect().top]));
    t(), i().forEach((r) => {
      const s = o.get(n(r));
      if (s === void 0) return;
      const d = s - r.getBoundingClientRect().top;
      Math.abs(d) < 0.5 || r.animate([{ transform: "translateY(" + d + "px)" }, { transform: "none" }], { duration: 440, easing: ca });
    });
  }
  function ua(e, t) {
    if (!e || _e()) return;
    const n = e.offsetHeight, i = Math.max(0, n - (t || 0));
    e.animate([{ clipPath: "inset(0 0 " + i + "px 0 round 20.8px)" }, { clipPath: "inset(0 0 0 0 round 20.8px)" }], { duration: 460, easing: ca });
  }
  function ma(e, t, n, i) {
    const { arr: o } = Gt(t), r = la(e, t);
    o.splice(Math.max(0, Math.min(n, o.length)), 0, r), Te = { item: r, arr: o }, he = r, pa(t.closest(".exerciseScroller,.createStepSlot") || t, () => G());
    const s = t.querySelector(".moveRow.editing");
    return ua(s, i), sa(e === "rest"), s;
  }
  function ai(e) {
    for (let t = e; t && t.nodeType === 1; t = t.parentElement) {
      const n = getComputedStyle(t).overflowY;
      if (/(auto|scroll)/.test(n) && t.scrollHeight > t.clientHeight) return t;
    }
    return null;
  }
  const ga = { movement: ["New movement", "Drop to add, then name it"], rest: ["Rest", "Rest · Global timing"], video: ["New video", "Drop to add, then paste a YouTube link"] };
  function va(e, t) {
    const n = document.createElement("div");
    return n.className = "addGhost" + (e === "movement" ? "" : " rest"), n.innerHTML = '<span class="addGhostGrip">' + _t + '</span><span class="addGhostText"><strong>' + L(t[0]) + "</strong><small>" + L(t[1]) + "</small></span>", a("workoutModal").appendChild(n), n;
  }
  function Ot(e) {
    e.classList.add("leaving"), setTimeout(() => e.remove(), 180);
  }
  function Xo(e, t, n, i) {
    (he || Te) && (fn(), he = null, G());
    const o = e.getBoundingClientRect(), r = va(t, ga[t]);
    r.setAttribute("aria-hidden", "true"), r.style.width = o.width + "px", r.style.height = o.height + "px", r.style.transform = "translate(" + o.left + "px," + o.top + "px)", e.classList.add("lifting");
    const s = ai(e);
    return ha({
      ghost: r,
      origin: o,
      sx: n,
      sy: i,
      scroller: s,
      column: e.closest(".exerciseScroller,.createFlow") || s,
      home: () => e.getBoundingClientRect(),
      onDrop: (d, m, u) => {
        Ot(r), e.classList.remove("lifting"), ma(t, d, m, u);
      },
      onReturn: () => {
        Ot(r), e.classList.remove("lifting");
      }
    });
  }
  function ha({ ghost: e, origin: t, sx: n, sy: i, scroller: o, column: r, home: s, onDrop: d, onReturn: m, rowLook: u = !1 }) {
    var It;
    const p = !_e(), l = ((It = x.querySelector(".moveList .moveRow:not(.editing)")) == null ? void 0 : It.offsetHeight) || 80, b = n - t.left, E = i - t.top, h = 44;
    let g = n, v = i, P = t.left, M = t.top, y = 0, B = 0, j = !p, ee = null, _ = null, ae = -1, se = 0, X = null;
    const Ke = () => ["warmupList", "strengthList", "cooldownList"].map((k) => a(k)).filter((k) => k && k.getClientRects().length && !k.closest("[hidden]")), c = (k) => {
      if (k === ee) return;
      ee = k, e.classList.toggle("overList", !!k || u);
      const H = k ? k.getBoundingClientRect().width : t.width;
      e.style.width = H + "px", e.style.height = (k ? l : t.height) + "px";
    }, S = (k) => {
      k.classList.add("leaving"), k.style.height = "0px", k.style.marginTop = "-8px", setTimeout(() => k.remove(), p ? 320 : 0);
    }, te = (k, H, U) => {
      if (_ && _.parentNode === k && ae === U || (_ && (S(_), _ = null, ae = -1), !k)) return;
      const ie = document.createElement("div");
      ie.className = "dropSlot", k.insertBefore(ie, H), _ = ie, ae = U, ie.getBoundingClientRect(), ie.style.height = l + "px", ie.style.marginTop = "0px";
    }, ne = () => {
      let k = null, H = 1 / 0;
      for (const ke of Ke()) {
        const C = ke.getBoundingClientRect();
        if (g < C.left - 48 || g > C.right + 48) continue;
        const A = C.top - 28, O = C.bottom + 28, ge = v < A ? A - v : v > O ? v - O : 0;
        ge < H && (H = ge, k = ke);
      }
      const U = r == null ? void 0 : r.getBoundingClientRect(), me = U && g >= U.left && g <= U.right && v >= U.top && v <= U.bottom || H === 0 ? k : null;
      if (me) {
        const ke = [...me.children].filter((A) => A.classList.contains("moveRow"));
        let C = ke.findIndex((A) => {
          const O = A.getBoundingClientRect();
          return v < O.top + O.height / 2;
        });
        C < 0 && (C = ke.length), te(me, ke[C] || null, C);
      } else te(null);
      c(me);
    }, Wn = () => {
      if (X) return X.aim();
      if (ee) {
        const k = ee.getBoundingClientRect();
        let H = v - l / 2;
        return _ && (H = H * 0.6 + _.getBoundingClientRect().top * 0.4), { x: k.left, y: H };
      }
      return { x: g - b, y: v - E };
    }, Ft = (k, H, U, ie) => {
      e.style.transform = "translate(" + P + "px," + M + "px) rotate(" + k + "deg) rotate(" + H + "rad) scale(" + U + "," + ie + ") rotate(" + -H + "rad)";
    }, Vn = () => {
      if (se = requestAnimationFrame(Vn), !j) {
        const C = g - n, A = v - i, O = Math.min(Math.hypot(C, A) / h, 1);
        P = t.left + C * 0.35, M = t.top + A * 0.35, Ft(0, Math.atan2(A, C), 1 + 0.155 * O, 1 - 0.1 * O);
        return;
      }
      const k = Wn();
      if (!p) {
        P = k.x, M = k.y, Ft(0, 0, 1, 1), X && (cancelAnimationFrame(se), X.done());
        return;
      }
      const H = X ? X.k : 0.17, U = X ? X.d : 0.7;
      y = (y + (k.x - P) * H) * U, B = (B + (k.y - M) * H) * U, P += y, M += B;
      const ie = Math.hypot(y, B), me = Math.min(ie / 48, 1), ke = ee || X ? 0 : Math.max(-5, Math.min(5, y * 0.32));
      Ft(ke, Math.atan2(B, y), 1 + 0.1 * me, 1 - 0.063 * me), X && ie < 0.15 && Math.hypot(k.x - P, k.y - M) < 0.6 && (cancelAnimationFrame(se), X.done());
    }, jn = setInterval(() => {
      if (!o || X) return;
      const k = o.getBoundingClientRect(), H = 64, U = v < k.top + H ? -(k.top + H - v) / 4 : v > k.bottom - H ? (v - (k.bottom - H)) / 4 : 0;
      U && (o.scrollTop += Math.max(-18, Math.min(18, U)), ne());
    }, 30);
    se = requestAnimationFrame(Vn);
    let dn = !1;
    const Ze = (k, H) => {
      if (dn) return;
      dn = !0, cancelAnimationFrame(se);
      const U = _ ? _.offsetHeight : l;
      !k && _ && (_.remove(), _ = null), k ? d(k, H, U) : m();
    };
    return {
      move(k, H) {
        g = k, v = H, !j && Math.hypot(g - n, v - i) > h && (j = !0, y = (g - n) * 0.085, B = (v - i) * 0.085), j && ne();
      },
      drop(k) {
        clearInterval(jn);
        const H = ee, U = ae;
        if (!k && H && _) {
          const ie = _;
          X = { k: 0.24, d: 0.62, aim: () => {
            const me = ie.getBoundingClientRect();
            return { x: me.left, y: me.top };
          }, done: () => Ze(H, U) }, setTimeout(() => Ze(H, U), 650), p || (cancelAnimationFrame(se), Ze(H, U));
          return;
        }
        te(null), c(null), X = { k: 0.2, d: 0.66, aim: () => {
          const ie = s();
          return { x: ie.left, y: ie.top };
        }, done: () => Ze(null) }, setTimeout(() => Ze(null), 650), p || (cancelAnimationFrame(se), Ze(null));
      }
    };
  }
  function oi(e, t) {
    let n = !1;
    e.addEventListener("click", (i) => {
      if (n) {
        n = !1, i.preventDefault();
        return;
      }
      if (Vt()) {
        xa(t);
        return;
      }
      const o = a("strengthList"), r = ma(t, o, Gt(o).arr.length, 0);
      r == null || r.scrollIntoView({ block: "nearest", behavior: _e() ? "auto" : "smooth" });
    }), e.addEventListener("pointerdown", (i) => {
      if (i.button !== void 0 && i.button !== 0) return;
      const o = i.pointerId, r = i.clientX, s = i.clientY;
      let d = null, m = !1;
      try {
        e.setPointerCapture(o);
      } catch {
      }
      const u = (v) => {
        if (v.pointerId === o) {
          if (v.pointerType === "mouse" && v.buttons === 0) {
            g(!1);
            return;
          }
          if (!d) {
            if (Math.hypot(v.clientX - r, v.clientY - s) < 6) return;
            d = Xo(e, t, r, s);
          }
          d.move(v.clientX, v.clientY);
        }
      }, p = (v) => {
        v.pointerId === o && g(!1);
      }, l = (v) => {
        v.pointerId === o && g(!0);
      }, b = () => g(!1), E = () => g(!0), h = (v) => {
        v.key === "Escape" && d && (v.preventDefault(), v.stopPropagation(), g(!0));
      };
      function g(v) {
        if (!m && (m = !0, window.removeEventListener("pointermove", u, !0), window.removeEventListener("pointerup", p, !0), window.removeEventListener("pointercancel", l, !0), window.removeEventListener("keydown", h, !0), window.removeEventListener("blur", E), e.removeEventListener("lostpointercapture", b), d)) {
          const P = d;
          d = null, n = !0, setTimeout(() => {
            n = !1;
          }, 0), P.drop(v);
        }
      }
      window.addEventListener("pointermove", u, !0), window.addEventListener("pointerup", p, !0), window.addEventListener("pointercancel", l, !0), window.addEventListener("keydown", h, !0), window.addEventListener("blur", E), e.addEventListener("lostpointercapture", b);
    });
  }
  const Wt = (bo = window.matchMedia) == null ? void 0 : bo.call(window, "(max-width: 620px)");
  function Vt() {
    var e;
    return !!((e = window.matchMedia) != null && e.call(window, "(max-width: 620px)").matches);
  }
  const fa = (e) => e.charAt(0).toUpperCase() + e.slice(1), bn = (e) => e.kind === "rest" ? "rest" : e.kind === "video" ? "video" : "movement";
  let ri = null, $ = null;
  function xn(e, t, n, i) {
    fe(), a("sheetTitle").textContent = e;
    const o = a("sheetBody");
    o.innerHTML = "", o.appendChild(t), ri = n || null, a("sheet").setAttribute("aria-hidden", "false"), a("sheetScrim").classList.add("open"), a("sheet").classList.add("open"), setTimeout(() => {
      if (!a("sheet").classList.contains("open") || !o.contains(t)) return;
      const r = i ? o.querySelector("input[data-f=url],input[data-f=name]") : o.querySelector("button,input,select");
      r == null || r.focus({ preventScroll: !0 });
    }, _e() ? 0 : 360);
  }
  function fe() {
    const e = a("sheet");
    if (!e.classList.contains("open")) return;
    e.classList.remove("open"), a("sheetScrim").classList.remove("open"), e.setAttribute("aria-hidden", "true"), e.contains(x.activeElement) && x.activeElement.blur();
    const t = ri;
    ri = null, t == null || t(), setTimeout($e, 0);
  }
  a("sheetScrim").addEventListener("click", fe), a("sheet").addEventListener("keydown", (e) => {
    e.key === "Escape" && (e.preventDefault(), fe());
  });
  function ba(e, t) {
    const n = ti(e, t.indexOf(e), {
      sheet: !0,
      isNew: !1,
      onSaved() {
        fe(), G(), Y(fa(bn(e)) + " updated");
      },
      onCancel: fe,
      onHide() {
        e.hidden = !e.hidden, fe(), G(), Y((e.hidden ? "Hidden: " : "Showing: ") + e.name);
      },
      onRemove() {
        fe();
        const i = t.indexOf(e);
        i < 0 || (t.splice(i, 1), G(), Y("Removed " + e.name, { label: "Undo", run: () => {
          t.splice(Math.min(i, t.length), 0, e), G();
        } }));
      }
    });
    xn("Edit " + bn(e), n, null, !1);
  }
  function Jo() {
    const e = document.createElement("div");
    e.className = "sheetChoices", [["movement", "●", "Movement", "Name it, then drag it into place"], ["rest", "Ⅱ", "Rest", "A pause between movements"], ["video", "▶", "Video", "Paste a YouTube link"]].forEach(([t, n, i, o]) => {
      const r = document.createElement("button");
      r.type = "button", r.className = "sheetChoice", r.innerHTML = '<span class="timeIcon" aria-hidden="true">' + n + "</span><span><strong>" + i + "</strong><small>" + o + "</small></span>", r.addEventListener("click", () => xa(t)), e.appendChild(r);
    }), xn("Add to the move", e, null, !1);
  }
  function xa(e) {
    $ && yn();
    const t = la(e, a("strengthList")), n = ti(t, -1, {
      sheet: !0,
      isNew: !0,
      onSaved() {
        fe(), Qo(t, e);
      },
      onCancel: fe
    });
    xn("New " + bn(t), n, null, !0);
  }
  const wn = a("workoutModal").querySelector(".modalStatic"), wa = { parent: wn.parentNode, next: wn.nextSibling };
  function $o() {
    const e = document.createElement("div");
    e.className = "sheetSetup", e.appendChild(wn);
    const t = document.createElement("button");
    t.type = "button", t.className = "primary sheetDone", t.textContent = "Done", t.addEventListener("click", fe), e.appendChild(t), xn("Setup", e, () => {
      wa.parent.insertBefore(wn, wa.next), si();
    }, !1);
  }
  function si() {
    var t, n;
    const e = a("setupSummaryName");
    e && (e.textContent = (((t = a("workoutNameInput")) == null ? void 0 : t.value) || "").trim() || ((n = R[F]) == null ? void 0 : n.name) || "Move", a("setupSummaryMeta").textContent = ea.textContent);
  }
  a("setupSummary").addEventListener("click", $o), a("addFab").addEventListener("click", Jo);
  function ya() {
    const e = a("strengthList");
    return ai(e) || e.closest(".exerciseScroller");
  }
  function di() {
    const e = a("strengthList").getBoundingClientRect(), t = (ya() || a("strengthList")).getBoundingClientRect(), n = ($ == null ? void 0 : $.ghost.offsetHeight) || 64;
    return { left: e.left, top: Math.max(t.top + 12, Math.min(t.bottom - n - 96, t.top + t.height * 0.55 - n / 2)), width: e.width, height: n };
  }
  function Qo(e, t) {
    var d;
    const n = va(t, [e.name || ga[t][0], "Drag into place"]);
    n.classList.add("overList", "hovering"), n.setAttribute("aria-label", (e.name || "New step") + ". Drag it into place in the list, or add it at the end.");
    const i = document.createElement("span");
    i.className = "addGhostActions", i.innerHTML = '<button class="hideBtn" type="button" data-a="end">Add at end</button><button class="hideBtn ghostDiscard" type="button" data-a="discard" aria-label="Discard ' + L(e.name) + '">✕</button>', n.appendChild(i), $ = { item: e, type: t, ghost: n };
    const o = ((d = x.querySelector(".moveList .moveRow:not(.editing)")) == null ? void 0 : d.offsetHeight) || 64;
    n.style.width = a("strengthList").getBoundingClientRect().width + "px", n.style.height = o + "px";
    const r = di(), s = pe.querySelector(".modal").getBoundingClientRect().bottom;
    n.style.transform = "translate(" + r.left + "px," + s + "px)", n.getBoundingClientRect(), _e() || (n.classList.add("rising"), setTimeout(() => n.classList.remove("rising"), 650)), n.style.transform = "translate(" + r.left + "px," + r.top + "px)", i.querySelector("[data-a=end]").addEventListener("click", yn), i.querySelector("[data-a=discard]").addEventListener("click", tr), n.addEventListener("pointerdown", er);
  }
  function er(e) {
    if (!$ || e.target.closest("button") || e.button !== void 0 && e.button !== 0) return;
    e.preventDefault();
    const { item: t, ghost: n } = $, i = e.pointerId;
    try {
      n.setPointerCapture(i);
    } catch {
    }
    n.classList.remove("hovering", "rising"), n.classList.add("held");
    const o = n.getBoundingClientRect(), r = ya(), s = ha({
      ghost: n,
      origin: { left: o.left, top: o.top, width: o.width, height: o.height },
      sx: e.clientX,
      sy: e.clientY,
      scroller: r,
      column: a("strengthList").closest(".exerciseScroller,.createFlow") || r,
      rowLook: !0,
      home: di,
      onDrop: (g, v, P) => {
        $ = null, Ot(n), ka(t, g, v, P);
      },
      onReturn: () => {
        n.classList.remove("held"), n.classList.add("hovering");
      }
    });
    let d = !1;
    const m = (g) => {
      if (g.pointerId === i) {
        if (g.pointerType === "mouse" && g.buttons === 0) {
          h(!1);
          return;
        }
        s.move(g.clientX, g.clientY);
      }
    }, u = (g) => {
      g.pointerId === i && h(!1);
    }, p = (g) => {
      g.pointerId === i && h(!0);
    }, l = () => h(!1), b = () => h(!0), E = (g) => {
      g.key === "Escape" && (g.preventDefault(), h(!0));
    };
    function h(g) {
      d || (d = !0, window.removeEventListener("pointermove", m, !0), window.removeEventListener("pointerup", u, !0), window.removeEventListener("pointercancel", p, !0), window.removeEventListener("keydown", E, !0), window.removeEventListener("blur", b), n.removeEventListener("lostpointercapture", l), s.drop(g));
    }
    window.addEventListener("pointermove", m, !0), window.addEventListener("pointerup", u, !0), window.addEventListener("pointercancel", p, !0), window.addEventListener("keydown", E, !0), window.addEventListener("blur", b), n.addEventListener("lostpointercapture", l);
  }
  function ka(e, t, n, i) {
    const o = Gt(t);
    e.kind !== "rest" && e.kind !== "video" && (e.kind = o.kind, o.group && (!e.group || e.group === "Movement") && (e.group = o.group)), o.arr.splice(Math.max(0, Math.min(n, o.arr.length)), 0, e), pa(t.closest(".exerciseScroller,.createStepSlot") || t, () => G()), ua(t.querySelector('.moveRow[data-id="' + e.id + '"]'), i), Y(fa(bn(e)) + " added");
  }
  function yn() {
    var i;
    if (!$) return;
    const { item: e, ghost: t } = $;
    $ = null, Ot(t);
    const n = a("strengthList");
    ka(e, n, Gt(n).arr.length, 0), (i = n.querySelector('.moveRow[data-id="' + e.id + '"]')) == null || i.scrollIntoView({ block: "nearest", behavior: _e() ? "auto" : "smooth" });
  }
  function tr() {
    if (!$) return;
    const e = $.ghost;
    $ = null, Ot(e), Y("Discarded");
  }
  function Sa() {
    $ && ($.ghost.remove(), $ = null);
  }
  window.addEventListener("resize", () => {
    if ($ != null && $.ghost.classList.contains("hovering")) {
      const e = di();
      $.ghost.style.width = e.width + "px", $.ghost.style.transform = "translate(" + e.left + "px," + e.top + "px)";
    }
  }), (xo = Wt == null ? void 0 : Wt.addEventListener) == null || xo.call(Wt, "change", () => {
    fe(), $ && !Vt() && yn(), ii();
  });
  {
    const e = a("workoutModal").querySelector(".modal");
    e.addEventListener("scroll", () => {
      (e.scrollTop || e.scrollLeft) && (e.scrollTop = 0, e.scrollLeft = 0);
    });
  }
  function $e() {
    const e = a("workoutModal"), t = window.visualViewport;
    if (!e.classList.contains("open") || !Vt()) {
      Ca();
      return;
    }
    const n = t ? t.offsetTop : 0, i = t ? t.offsetLeft : 0, o = t ? t.width : window.innerWidth, r = t ? t.height : window.innerHeight;
    Object.assign(e.style, { right: "auto", bottom: "auto", width: o + "px", height: r + "px", top: n + "px", left: i + "px" });
    const s = e.getBoundingClientRect();
    Math.abs(s.top - n) > 0.5 && (e.style.top = 2 * n - s.top + "px"), Math.abs(s.left - i) > 0.5 && (e.style.left = 2 * i - s.left + "px");
  }
  function Ca() {
    ["top", "left", "right", "bottom", "width", "height"].forEach((e) => a("workoutModal").style.removeProperty(e));
  }
  (wo = window.visualViewport) == null || wo.addEventListener("resize", $e), (yo = window.visualViewport) == null || yo.addEventListener("scroll", $e), window.addEventListener("resize", $e), window.addEventListener("scroll", $e, { passive: !0 }), window.addEventListener("orientationchange", () => setTimeout($e, 250));
  function li() {
    ve.length > 0;
    const e = a("addMovementBtn"), t = a("addRestBtn");
    e && (e.innerHTML = _t + "<span>Add movement</span>"), t && (t.innerHTML = _t + "<span>Add rest</span>");
    const n = a("addVideoBtn");
    n && (n.innerHTML = _t + "<span>Add video</span>");
  }
  function jt() {
    const e = a("useGlobalTiming").checked, t = a("addMovementDuration"), n = a("addMovementUnit");
    t.disabled = e, n.disabled = e, t.parentElement.style.opacity = e ? ".38" : "1", a("globalTimingValue").textContent = "Use global timing · " + le(D.value);
    const i = a("useGlobalRestTiming").checked, o = a("addRestDuration"), r = a("addRestUnit");
    o.disabled = i, r.disabled = i, o.parentElement.style.opacity = i ? ".38" : "1", a("globalRestTimingValue").textContent = "Use global timing · " + le(z.value);
  }
  let Ta = "movement";
  function nr(e) {
    Ta = e;
    const t = a("movementFields"), n = a("restFields");
    t.hidden = e !== "movement", n.hidden = e !== "rest", a("movementCreatorHeading").textContent = "Add movement", a("movementCreator").setAttribute("aria-label", "Create movement"), jt();
  }
  function ci() {
    R[F];
    const e = J ? !0 : a("useGlobalTiming").checked, t = e ? Number(D.value) : vn(
      a("addMovementDuration").value,
      a("addMovementUnit").value
    ), n = J ? !0 : a("useGlobalRestTiming").checked, i = n ? Number(z.value) : vn(
      a("addRestDuration").value,
      a("addRestUnit").value
    );
    if (Ta === "rest") {
      const o = a("addRestTitle").value.trim() || "Rest", r = a("addRestGroup").value.trim() || "Rest";
      ve.push({
        id: "rest-" + Date.now(),
        name: o,
        group: r,
        kind: "rest",
        hidden: !1,
        useGlobalTiming: n,
        duration: Math.max(5, i || Number(z.value))
      }), G(), a("movementCreator").hidden = !0, a("addRestTitle").value = "Rest", a("addRestGroup").value = "Rest", Y("Rest added"), J && (ot("movements"), qe());
    } else {
      const o = a("addMovementInput").value.trim();
      if (!o) return;
      const r = a("addMovementGroup").value.trim() || "Movement";
      ve.push({
        id: "movement-" + Date.now(),
        name: o,
        group: r,
        kind: "work",
        hidden: !1,
        useGlobalTiming: e,
        duration: Math.max(5, t || Number(D.value))
      }), a("addMovementInput").value = "", a("addMovementGroup").value = "", G(), a("movementCreator").hidden = !0, Y("Movement added"), J && (ot("movements"), qe());
    }
    li();
  }
  let pi = null;
  function Y(e, t) {
    const n = a("toast");
    n.innerHTML = "";
    const i = document.createElement("span");
    if (i.textContent = e, n.appendChild(i), t) {
      const o = document.createElement("button");
      o.type = "button", o.className = "toastAction", o.textContent = t.label, o.addEventListener("click", () => {
        t.run(), n.classList.remove("show", "withAction"), clearTimeout(pi);
      }), n.appendChild(o);
    }
    n.classList.toggle("withAction", !!t), n.classList.add("show"), clearTimeout(pi), pi = setTimeout(() => n.classList.remove("show", "withAction"), t ? 5e3 : 2200);
  }
  const ir = ["Terrible", "Poor", "Meh", "Okay", "Good", "Great"], ar = ["#6E63A8", "#5878A8", "#6F8B8A", "#5F9B72", "#D5A53E", "#D56B54"];
  function La(e) {
    return Math.max(0, Math.min(5, Math.floor(Number(e) / 100 * 6)));
  }
  function dt(e, t) {
    return ir[La(t)];
  }
  function or(e) {
    return ar[La(e)];
  }
  function oe(e) {
    return e.getFullYear() + "-" + String(e.getMonth() + 1).padStart(2, "0") + "-" + String(e.getDate()).padStart(2, "0");
  }
  function Fe() {
    return { morning: q().morningTime || "08:00", evening: q().eveningTime || "19:00" };
  }
  function lt(e) {
    const [t, n] = String(e).split(":").map(Number);
    return (t || 0) * 60 + (n || 0);
  }
  function rr(e) {
    const t = Fe();
    return e.getHours() * 60 + e.getMinutes() >= lt(t.evening) ? "evening" : "morning";
  }
  function kn(e, t) {
    return I.checkins.find((n) => n.date === e && n.slot === t);
  }
  function Sn(e) {
    return !!(e && e.mood != null && e.energy != null);
  }
  function Cn() {
    const e = /* @__PURE__ */ new Date(), t = oe(e), n = rr(e), i = Fe(), o = e.getHours() * 60 + e.getMinutes();
    return n === "morning" && o < lt(i.morning) || Sn(kn(t, n)) ? null : n;
  }
  const Ge = a("checkinModal"), Oe = a("checkinTab"), sr = a("checkinBadge"), We = { mood: { input: a("moodInput"), fill: a("moodFill") }, energy: { input: a("energyLevelInput"), fill: a("energyLevelFill") } };
  function Ea(e) {
    const { input: t, fill: n } = We[e];
    n.style.width = t.value + "%", t.setAttribute("aria-valuetext", dt(e, t.value));
  }
  Object.keys(We).forEach((e) => We[e].input.addEventListener("input", () => Ea(e)));
  let Ae = null;
  function Ma() {
    const e = Fe(), t = /* @__PURE__ */ new Date(), n = t.getHours() * 60 + t.getMinutes();
    return n < lt(e.morning) ? "Next check-in at " + e.morning : n < lt(e.evening) ? "Next check-in at " + e.evening : "Next check-in tomorrow at " + e.morning;
  }
  function dr() {
    const e = Fe(), t = /* @__PURE__ */ new Date(), n = t.getHours() * 60 + t.getMinutes(), i = (o, r) => {
      const [s, d] = o.split(":").map(Number);
      return new Date(t.getFullYear(), t.getMonth(), t.getDate() + (r ? 1 : 0), s, d);
    };
    return n < lt(e.morning) ? { date: i(e.morning), time: e.morning } : n < lt(e.evening) ? { date: i(e.evening), time: e.evening } : { date: i(e.morning, !0), time: e.morning };
  }
  let ui = null, mi = null;
  function Ra() {
    if (Cn()) {
      Tn(), Qe();
      return;
    }
    const e = dr(), t = Math.max(0, Math.round((e.date - Date.now()) / 1e3)), n = Math.floor(t / 3600), i = Math.floor(t % 3600 / 60), o = t % 60;
    a("peekCountdown").textContent = n + ":" + String(i).padStart(2, "0") + ":" + String(o).padStart(2, "0"), a("peekAt").textContent = "Available at " + e.time;
  }
  function lr() {
    Ra(), Oe.classList.add("peek"), clearInterval(mi), mi = setInterval(Ra, 1e3), clearTimeout(ui), ui = setTimeout(Tn, 6e3);
  }
  function Tn() {
    Oe.classList.remove("peek"), clearInterval(mi), clearTimeout(ui);
  }
  function Aa() {
    const e = Cn();
    if (!e) {
      Oe.classList.contains("peek") ? Tn() : lr();
      return;
    }
    Ae = { date: oe(/* @__PURE__ */ new Date()), slot: e };
    const n = kn(Ae.date, e), i = I.checkins.find((r) => Sn(r));
    Object.keys(We).forEach((r) => {
      We[r].input.value = (n == null ? void 0 : n[r]) ?? (i == null ? void 0 : i[r]) ?? 50, Ea(r);
    });
    const o = Fe()[e];
    a("checkinEyebrow").textContent = (e === "morning" ? "Morning" : "Evening") + " · " + o, a("checkinTitle").textContent = e === "morning" ? "Morning check-in" : "Evening check-in", Ge.classList.add("open"), Ge.setAttribute("aria-hidden", "false"), requestAnimationFrame(() => We.mood.input.focus());
  }
  function Yt() {
    Ge.classList.remove("open"), Ge.setAttribute("aria-hidden", "true"), Ae && (Ut = Ae.date + "-" + Ae.slot);
    try {
      localStorage.setItem("move-assistant-dismissed", Ut);
    } catch {
    }
    Ae = null, Qe();
  }
  function cr() {
    if (!Ae) return;
    if (Sn(kn(Ae.date, Ae.slot))) {
      Yt();
      return;
    }
    const { date: e, slot: t } = Ae;
    let n = kn(e, t);
    n || (n = { date: e, slot: t }, I.checkins.unshift(n), I.checkins = I.checkins.slice(0, 2e3)), n.mood = Number(We.mood.input.value), n.energy = Number(We.energy.input.value), n.scale = 100, n.at = (/* @__PURE__ */ new Date()).toISOString(), Me(), w.fire("checkin", { slot: t, mood: n.mood, energy: n.energy, mood_label: dt("mood", n.mood), energy_label: dt("energy", n.energy) }), Y((t === "morning" ? "Morning" : "Evening") + " check-in saved"), Yt(), Ln(), Kt(), at(), ze();
  }
  let Ut = "";
  try {
    Ut = localStorage.getItem("move-assistant-dismissed") || "";
  } catch {
  }
  function Qe() {
    const e = Cn();
    sr.hidden = !e, Oe.hidden = !e, e || Tn(), Oe.classList.toggle("due", !!e), Oe.setAttribute("aria-label", e ? (e === "morning" ? "Morning" : "Evening") + " check-in is due" : Ma()), Oe.title = e ? "Check in now" : Ma();
  }
  function gi() {
    Qe();
    const e = Cn();
    !e || Ge.classList.contains("open") || q().checkinAutoOpen !== !1 && (!rt.home.classList.contains("active") || pe.classList.contains("open") || Ut !== oe(/* @__PURE__ */ new Date()) + "-" + e && Aa());
  }
  Oe.addEventListener("click", Aa), a("checkinLater").addEventListener("click", Yt), a("checkinSave").addEventListener("click", cr), Ge.addEventListener("click", (e) => {
    e.target === Ge && Yt();
  }), Ge.addEventListener("keydown", (e) => {
    e.key === "Escape" && (e.preventDefault(), Yt());
  }), setInterval(gi, 3e4);
  function Ln() {
    const e = oe(/* @__PURE__ */ new Date()), t = (n) => I.checkins.find((i) => i.date === e && i[n] != null);
    [["mood", "moodMeta"], ["energy", "energyLevelMeta"]].forEach(([n, i]) => {
      const o = t(n);
      a(i).textContent = o ? dt(n, o[n]) : "—";
    });
  }
  function Kt() {
    const e = a("feelCard");
    if (!e) return;
    const t = /* @__PURE__ */ new Date(), n = new Date(t.getFullYear(), t.getMonth(), t.getDate() - (t.getDay() + 6) % 7), i = [...Array(7)].map((u, p) => {
      const l = new Date(n.getFullYear(), n.getMonth(), n.getDate() + p), b = oe(l), E = I.checkins.filter((g) => g.date === b), h = (g) => {
        const v = E.map((P) => P[g]).filter((P) => P != null);
        return v.length ? v.reduce((P, M) => P + M, 0) / v.length : null;
      };
      return { d: l, key: b, mood: h("mood"), energy: h("energy"), count: E.filter(Sn).length, future: l > t && b !== oe(t) };
    }), o = (u) => {
      const p = i.map((l) => l[u]).filter((l) => l != null);
      return p.length ? p.reduce((l, b) => l + b, 0) / p.length : null;
    }, r = o("mood"), s = o("energy"), d = (u, p) => '<div class="feelMeter"><div class="feelMeterTop"><span>' + u + "</span><span>" + (p == null ? "—" : L(dt("", p))) + '</span></div><div class="feelTrack"><span style="width:' + (p == null ? 0 : Math.max(4, p)) + "%;background:" + (p == null ? "transparent" : or(p)) + '"></span></div></div>', m = i.filter((u) => u.mood != null && u.energy != null).sort((u, p) => p.mood + p.energy - (u.mood + u.energy))[0];
    e.innerHTML = '<div class="feelTop"><div class="feelSummary"><div class="feelHeadline">' + (r == null ? "No check-ins yet" : L(dt("", (r + s) / 2))) + '</div><div class="weekCopy">' + (r == null ? "Your first check-in will appear here." : "on average this week" + (m ? " · best day " + L(new Intl.DateTimeFormat(void 0, { weekday: "long" }).format(m.d)) : "")) + '</div></div></div><div class="feelDays">' + i.map(
      (u) => '<div class="weekChip feelDay' + (u.future ? " future" : "") + (u.key === oe(t) ? " today" : "") + '"><div class="weekChipTop"><strong>' + L(new Intl.DateTimeFormat(void 0, { weekday: "short" }).format(u.d)) + "</strong>" + (u.count >= 2 ? '<span class="weekTick">✓</span>' : '<span class="feelDots">' + "●".repeat(u.count) + "</span>") + "</div>" + d("Mood", u.mood) + d("Energy", u.energy) + "</div>"
    ).join("") + "</div>";
  }
  const En = a("upcomingCountSetting");
  En.addEventListener("change", () => {
    st = En.value === "all" ? "all" : Number(En.value), Va();
  });
  const Zt = a("tempoRevealBtn"), vi = a("tempoExperiment"), Be = a("tempoQuad"), ct = a("tempoDot"), pr = a("tempoEstimate"), ur = a("tempoReadout");
  let pt = { x: 0.5, y: 0.5 }, Xt = !1, Mn = { total: 20, work: 45, rest: 15 };
  function hi(e, t, n, i) {
    const o = Math.max(t, Math.min(n, e));
    return Math.round((o - t) / i) * i + t;
  }
  function mr(e, t) {
    const n = (e - 0.5) * 2, i = (t - 0.5) * 2, o = hi(
      Mn.total + n * 5 + i * 8,
      Number(W.min),
      Number(W.max),
      Number(W.step)
    ), r = hi(
      Mn.work + n * 10 + i * 8,
      Number(D.min),
      Number(D.max),
      Number(D.step)
    ), s = hi(
      Mn.rest + n * 6 + i * 6,
      Number(z.min),
      Number(z.max),
      Number(z.step)
    );
    return W.value = o, D.value = r, z.value = s, $i.textContent = r + " sec", Qi.textContent = s + " sec", gn(), { total: o, work: r, rest: s };
  }
  function fi(e, t) {
    const n = e < 0.34 ? "Low" : e > 0.66 ? "Hard" : "Medium", i = t < 0.34 ? "Fast" : t > 0.66 ? "Slow" : "Balanced", o = mr(e, t);
    ur.textContent = n + " + " + i, pr.textContent = o.total + " min", Be.setAttribute("aria-valuetext", n + " and " + i + ", estimated " + o.total + " minutes");
  }
  function bi(e) {
    const t = Be.getBoundingClientRect(), n = Math.max(0, Math.min(1, (e.clientX - t.left) / t.width)), i = Math.max(0, Math.min(1, (e.clientY - t.top) / t.height));
    pt = { x: n, y: i }, ct.style.left = n * 100 + "%", ct.style.top = i * 100 + "%", fi(n, i);
  }
  Zt.addEventListener("click", () => {
    const e = vi.hidden;
    vi.hidden = !e, Zt.setAttribute("aria-expanded", e ? "true" : "false"), Zt.textContent = e ? "Now close this" : "Don’t try this!", e && (Mn = {
      total: Number(W.value),
      work: Number(D.value),
      rest: Number(z.value)
    }, pt = { x: 0.5, y: 0.5 }, ct.style.left = "50%", ct.style.top = "50%", fi(pt.x, pt.y));
  }), x.querySelectorAll("[data-feedback-rating]").forEach((e) => e.addEventListener("click", () => {
    Number(e.dataset.feedbackRating), x.querySelectorAll("[data-feedback-rating]").forEach((t) => t.classList.toggle("selected", t === e));
  }));
  const Rn = a("testingFeedbackForm"), Ba = a("testingFeedbackThanks"), gr = a("testingFeedbackAgain");
  Rn.addEventListener("submit", (e) => {
    e.preventDefault(), Rn.hidden = !0, Ba.hidden = !1, Y("Feedback captured for prototype");
  }), gr.addEventListener("click", (e) => {
    e.preventDefault(), Rn.reset(), x.querySelectorAll("[data-feedback-rating]").forEach((t) => t.classList.remove("selected")), Ba.hidden = !0, Rn.hidden = !1;
  }), Be.addEventListener("pointerdown", (e) => {
    var t;
    Xt = !0, bi(e);
    try {
      (t = Be.setPointerCapture) == null || t.call(Be, e.pointerId);
    } catch {
    }
  }), Be.addEventListener("pointermove", (e) => {
    Xt && bi(e);
  }), Be.addEventListener("pointerup", (e) => {
    Xt && (Xt = !1, bi(e), G());
  }), Be.addEventListener("pointercancel", () => Xt = !1), Be.addEventListener("keydown", (e) => {
    let { x: t, y: n } = pt, i = !0;
    e.key === "ArrowLeft" ? t -= 0.05 : e.key === "ArrowRight" ? t += 0.05 : e.key === "ArrowUp" ? n -= 0.05 : e.key === "ArrowDown" ? n += 0.05 : i = !1, i && (e.preventDefault(), t = Math.max(0, Math.min(1, t)), n = Math.max(0, Math.min(1, n)), pt = { x: t, y: n }, ct.style.left = t * 100 + "%", ct.style.top = n * 100 + "%", fi(t, n), G());
  });
  const pe = a("workoutModal");
  let Jt = null;
  function ut(e) {
    return e.map((t) => ({ ...t }));
  }
  function vr() {
    const e = R[F];
    return {
      key: F,
      profile: e ? JSON.parse(JSON.stringify(e)) : null,
      warmup: ut(Se),
      strength: ut(ve),
      cooldown: ut(Ce),
      total: Number(W.value),
      work: Number(D.value),
      rest: Number(z.value),
      rounds: Number(Le.value) || 1
    };
  }
  function Na(e = !1) {
    J = !!e, he = null, Te = null, fe(), Sa(), Jt = vr(), a("moveEditorTitle").textContent = J ? "Create new move" : "Edit move", a("moveEditorSubtitle").textContent = "Build the sequence first, then set timing, then finish the move.", a("moveEditorSubtitle").hidden = !J, a("warmupRow").hidden = J, a("deleteMoveOpen").hidden = J;
    const t = a("createMoveOptions");
    t.hidden = !J;
    {
      const n = R[F];
      a("includeWarmupPreset").checked = !!(n != null && n.includeWarmup), a("includeCooldownPreset").checked = !!(n != null && n.includeCooldown);
    }
    if (Fa(), J) {
      a("useGlobalTiming").checked = !0, a("useGlobalRestTiming").checked = !0;
      const n = R[F];
      Qn((n == null ? void 0 : n.preset) || "movement", !1);
    }
    a("movementCreator").hidden = !0, nr("movement"), li(), jt(), vi.hidden = !0, Zt.setAttribute("aria-expanded", "false"), Zt.textContent = "Don’t try this!", pe.classList.toggle("createMode", J), pe.querySelector(".modal").classList.toggle("createMode", J), pe.classList.add("open"), pe.setAttribute("aria-hidden", "false"), $e(), J && Fo();
  }
  function hr() {
    const e = R[F];
    return e != null && e.customSequence ? !!e.includeWarmup : !(e != null && e.warmupOff);
  }
  function Fa() {
    const e = hr(), t = a("warmupSwitch");
    t.classList.toggle("on", e), t.setAttribute("aria-checked", String(e));
  }
  a("warmupSwitch").addEventListener("click", () => {
    const e = R[F];
    e && (e.customSequence ? (a("includeWarmupPreset").checked = !e.includeWarmup, ei()) : (e.warmupOff = !e.warmupOff, G()), Fa());
  });
  function An() {
    fe(), Sa(), Ca(), Te = null, he = null, pe.classList.contains("createMode") && Io(), pe.classList.remove("createMode"), pe.querySelector(".modal").classList.remove("createMode"), pe.classList.remove("open"), pe.setAttribute("aria-hidden", "true");
  }
  function Ia() {
    if (!Jt) return;
    const e = Jt;
    e.profile && (R[e.key] = JSON.parse(JSON.stringify(e.profile))), F = e.key, Se = ut(e.warmup), ve = ut(e.strength), Ce = ut(e.cooldown), W.value = e.total, D.value = e.work, z.value = e.rest, Le.value = e.rounds || 1;
    const t = R[F];
    if (t) {
      x.querySelectorAll(".workoutPanel[data-workout]").forEach((i) => i.classList.toggle("active", i.dataset.workout === F));
      const n = x.querySelector(".workoutPanel.active");
      if (n) {
        const i = n.querySelector(".workoutName");
        i && (i.textContent = t.name);
        const o = n.querySelector(".panelCollapsedText");
        o && (o.textContent = t.name);
        const r = n.querySelector(".sourceTag");
        r && (r.textContent = t.source);
      }
      N.value = t.name;
    }
    G();
  }
  a("cancelWorkoutEdit").addEventListener("click", () => {
    if (J) {
      const e = F;
      delete R[e], J = !1, Xe = null, Re(I.order.find((t) => R[t]) || Object.keys(R)[0]);
    } else
      Ia();
    An();
  }), a("saveWorkoutEdit").addEventListener("click", () => {
    fe(), $ && yn();
    const e = R[F], t = N.value.trim() || "New move";
    if (e && (e.name = t), fn(), he = null, G(), J && e)
      Jn(F, e), x.querySelectorAll(".workoutPanel[data-workout]").forEach((n) => n.classList.toggle("active", n.dataset.workout === F)), J = !1, Xe = null, I.order.includes(F) || I.order.push(F), Y("Move created");
    else {
      const n = x.querySelector(".workoutPanel.active");
      if (n) {
        const i = n.querySelector(".workoutName");
        i && (i.textContent = t);
        const o = n.querySelector(".panelCollapsedText");
        o && (o.textContent = t);
      }
      Y("Move saved");
    }
    Jt = null, An(), Me();
  }), pe.addEventListener("click", (e) => {
    if (e.target === pe) {
      if (J) {
        const t = F;
        delete R[t], J = !1, Xe = null, Re(I.order.find((n) => R[n]) || Object.keys(R)[0]);
      } else
        Ia();
      An();
    }
  }), oi(a("addMovementBtn"), "movement"), oi(a("addRestBtn"), "rest"), oi(a("addVideoBtn"), "video"), a("closeMovementCreator").addEventListener("click", () => {
    a("movementCreator").hidden = !0;
  }), a("useGlobalTiming").addEventListener("change", jt), a("useGlobalRestTiming").addEventListener("change", jt), x.querySelectorAll(".createPresetBtn").forEach((e) => e.addEventListener("click", () => {
    Qn(e.dataset.movePreset, !0), G();
  })), a("includeWarmupPreset").addEventListener("change", ei), a("includeCooldownPreset").addEventListener("change", ei), a("includeWarmupPreset").addEventListener("change", qe), a("includeCooldownPreset").addEventListener("change", qe), N.addEventListener("input", qe), N.addEventListener("input", si), a("confirmAddMovement").addEventListener("click", ci), a("confirmAddRest").addEventListener("click", ci), a("addMovementInput").addEventListener("keydown", (e) => {
    e.key === "Enter" && ci();
  });
  const $t = a("countdown"), xi = a("countNum"), Ie = a("countdownPixelCanvas");
  let Qt = null, wi = "appear";
  class fr {
    constructor(t, n, i, o, r, s, d) {
      this.width = t.width, this.height = t.height, this.ctx = n, this.x = i, this.y = o, this.color = r, this.speed = (Math.random() * 0.8 + 0.1) * s, this.size = 0, this.sizeStep = Math.random() * 0.4, this.minSize = 0.5, this.maxSizeInteger = 2, this.maxSize = Math.random() * (this.maxSizeInteger - this.minSize) + this.minSize, this.delay = d, this.counter = 0, this.counterStep = Math.random() * 4 + (this.width + this.height) * 0.01, this.isIdle = !1, this.isReverse = !1, this.isShimmer = !1;
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
  let yi = [], Pa = 1, Da = 1;
  function et() {
    const e = parseFloat(getComputedStyle(a("app")).zoom);
    return Number.isFinite(e) && e > 0 ? e : 1;
  }
  function br() {
    var u;
    if (!Ie) return;
    const e = et(), t = Math.max(1, window.innerWidth / e), n = Math.max(1, window.innerHeight / e);
    Pa = t, Da = n;
    const i = Math.min(window.devicePixelRatio || 1, 2);
    Ie.width = Math.floor(t * i), Ie.height = Math.floor(n * i), Ie.style.width = t + "px", Ie.style.height = n + "px";
    const o = Ie.getContext("2d");
    o.setTransform(i, 0, 0, i, 0, 0);
    const r = ["#f2fbff", "#d4effc", "#a9e0fa", "#6cc8f6"], s = 12, d = (u = window.matchMedia) == null ? void 0 : u.call(window, "(prefers-reduced-motion: reduce)").matches, m = d ? 0 : 0.055;
    yi = [];
    for (let p = 0; p < t; p += s)
      for (let l = 0; l < n; l += s) {
        const b = p - t / 2, E = l - n / 2, h = Math.sqrt(b * b + E * E), g = d ? 0 : Math.random() * 75 + h * 0.05, v = new fr({ width: t, height: n }, o, p, l, r[Math.floor(Math.random() * r.length)], m, g);
        v.maxSizeInteger = 4, v.maxSize = Math.random() * 3.2 + 0.8, v.sizeStep = 0.35 + Math.random() * 0.45, yi.push(v);
      }
  }
  function Ha(e) {
    cancelAnimationFrame(Qt), wi = e;
    const t = Ie == null ? void 0 : Ie.getContext("2d");
    if (!t) return;
    function n() {
      t.clearRect(0, 0, Pa, Da);
      let i = !0;
      yi.forEach((o) => {
        o[wi](), o.isIdle || (i = !1);
      }), wi === "disappear" && i || (Qt = requestAnimationFrame(n));
    }
    Qt = requestAnimationFrame(n);
  }
  function Bn() {
    cancelAnimationFrame(Qt), br(), Ha("appear"), setTimeout(() => Ha("disappear"), 560);
  }
  window.addEventListener("resize", () => {
    $t.classList.contains("active") && Bn();
  });
  const en = a("pixelTrailCanvas"), mt = en.getContext("2d");
  let Pe = !0, gt = 0.7, vt = 600, tn = [], ht = null, Ve = { x: 0, y: 0, ready: !1 };
  function za() {
    const e = K.getBoundingClientRect(), t = et(), n = Math.min(window.devicePixelRatio || 1, 2), i = Math.max(1, e.width / t), o = Math.max(1, e.height / t);
    en.width = Math.max(1, Math.floor(i * n)), en.height = Math.max(1, Math.floor(o * n)), en.style.width = i + "px", en.style.height = o + "px", mt.setTransform(n, 0, 0, n, 0, 0);
  }
  function xr(e, t) {
    if (!Pe) return;
    const n = performance.now();
    Ve.ready || (Ve = { x: e, y: t, ready: !0 });
    const i = 7;
    for (let o = 1; o <= i; o++) {
      const r = o / i;
      tn.push({
        x: Ve.x + (e - Ve.x) * r,
        y: Ve.y + (t - Ve.y) * r,
        born: n - (i - o) * 10
      });
    }
    Ve = { x: e, y: t, ready: !0 };
  }
  function Nn(e) {
    if (ht = null, !Z) return;
    if (!rt.workout.classList.contains("active")) {
      ht = requestAnimationFrame(Nn);
      return;
    }
    const t = K.getBoundingClientRect(), n = et();
    mt.clearRect(0, 0, t.width / n, t.height / n), Pe && (tn = tn.filter((o) => e - o.born < vt), mt.fillStyle = a("app").classList.contains("light") ? "#03A9F4" : "#f4f4f4", tn.forEach((o) => {
      const r = (e - o.born) / vt, s = (1 - r) * gt, d = Math.round(o.x / 14) * 14, m = Math.round(o.y / 14) * 14;
      mt.globalAlpha = Math.max(0, s);
      const u = 2 + 5 * (1 - r) * gt;
      mt.fillRect(d - u / 2, m - u / 2, u, u);
    }), mt.globalAlpha = 1), ht = requestAnimationFrame(Nn);
  }
  K.addEventListener("pointermove", (e) => {
    const t = K.getBoundingClientRect(), n = et();
    xr((e.clientX - t.left) / n, (e.clientY - t.top) / n);
  }), K.addEventListener("pointerleave", () => Ve.ready = !1), new ResizeObserver(za).observe(K), za(), ht = requestAnimationFrame(Nn);
  const je = a("movementRippleCanvas"), ft = je.getContext("2d");
  let tt = !0, bt = null, wr = performance.now();
  function qa() {
    const e = je.parentElement.getBoundingClientRect(), t = et(), n = Math.max(1, e.width / t), i = Math.max(1, e.height / t), o = Math.min(window.devicePixelRatio || 1, 2);
    je.width = Math.max(1, Math.floor(n * o)), je.height = Math.max(1, Math.floor(i * o)), je.style.width = n + "px", je.style.height = i + "px", ft.setTransform(o, 0, 0, o, 0, 0);
  }
  function _a() {
    var e;
    return de || ((e = f[T]) == null ? void 0 : e.kind) === "rest";
  }
  function yr() {
    const e = f[T];
    return _a() ? 2200 : e ? e.kind === "warmup" || e.kind === "cooldown" ? 2400 : 1350 : 1600;
  }
  function Fn(e) {
    if (bt = null, !Z) return;
    if (!rt.workout.classList.contains("active")) {
      bt = requestAnimationFrame(Fn);
      return;
    }
    const t = je.parentElement.getBoundingClientRect(), n = et(), i = Math.max(1, t.width / n), o = Math.max(1, t.height / n);
    if (ft.clearRect(0, 0, i, o), tt) {
      const r = yr(), s = (e - wr) % r / r, d = 15, m = Math.max(8, Math.round(d * o / Math.max(1, i))), u = i / (d + 1), p = o / (m + 1), l = i * 0.5, b = o * 0.52, E = Math.hypot(l, b), g = a("app").classList.contains("light") ? "34,34,34" : "244,244,244";
      for (let v = 1; v <= m; v++)
        for (let P = 1; P <= d; P++) {
          const M = P * u, y = v * p, B = Math.hypot(M - l, y - b) / E, j = _a(), ee = j ? Math.exp(-Math.pow((B - (s * 0.82 + 0.08) % 1 * 1.18) * 5.5, 2)) : 0, _ = Math.exp(-Math.pow((B - s * 1.25) * 7, 2)), ae = j ? ee : _, se = j ? 0.5 + 0.5 * Math.sin(s * Math.PI * 2 - B * 3) ** 2 : 0.35 + 0.65 * Math.sin(s * Math.PI * 2 - B * 5) ** 2, X = j ? 1.4 + ae * 4.2 * se : 1.2 + ae * 5 * se;
          ft.beginPath(), ft.arc(M, y, X, 0, Math.PI * 2), ft.fillStyle = `rgba(${g},${j ? 0.08 + ae * 0.48 : 0.05 + ae * 0.55})`, ft.fill();
        }
    }
    bt = requestAnimationFrame(Fn);
  }
  new ResizeObserver(qa).observe(je.parentElement), qa(), bt = requestAnimationFrame(Fn);
  const nn = a("exerciseTitle"), De = a("exerciseMeta"), ki = a("stepLabel"), Si = a("digits"), Ga = a("fill"), xt = a("progress"), Ci = a("pause"), kr = a("nextName"), Sr = a("nextMeta"), Cr = a("nextIcon"), In = a("skipNextSession");
  let xe = null;
  function we(e) {
    for (let t = Math.max(0, e); t < f.length; t++)
      if (!f[t].sessionHidden) return t;
    return -1;
  }
  function Tr() {
    const e = f[T];
    if (!e) return { name: "Complete", meta: "Move finished", icon: "✓" };
    if (de) {
      const i = we(T + 1), o = i >= 0 ? f[i] : null;
      return o ? { name: o.name, meta: Li(o), icon: Ti(o) } : { name: "Complete", meta: "Move finished", icon: "✓" };
    }
    if (e.rest > 0) return { name: "Rest", meta: e.rest + " sec · " + (e.roundBreakAfter ? "round " + (e.round + 1) + " next" : "recovery"), icon: "Ⅱ" };
    const t = we(T + 1), n = t >= 0 ? f[t] : null;
    return n ? { name: n.name, meta: Li(n), icon: Ti(n) } : { name: "Complete", meta: "Move finished", icon: "✓" };
  }
  function Lr() {
    if (!f[T]) return f.length;
    const t = we(T + 1);
    return t < 0 ? f.length : t + 1;
  }
  function Ti(e) {
    return e.kind === "video" ? "▶" : e.kind === "cooldown" ? "↘" : e.kind === "warmup" ? "↗" : "●";
  }
  function Li(e) {
    return e.kind === "video" ? "YouTube · " + zt(e.duration) : e.group + " · " + e.duration + " sec";
  }
  function Pn() {
    return f.length && f[f.length - 1].round || 1;
  }
  function Oa(e) {
    const t = f[e];
    if (!t) return "";
    const n = Pn();
    if (n <= 1) return "Step " + (e + 1) + " of " + f.length;
    if (t.roundBreak) return "Round " + t.round + " of " + n + " · Rest";
    const i = f.filter((o) => o.round === t.round && !o.roundBreak).length;
    return "Round " + t.round + " of " + n + " · Step " + (t.roundIndex + 1) + " of " + i;
  }
  function Wa() {
    return xt.querySelector('[data-step="' + T + '"]');
  }
  function Er() {
    f[T] && Number(xt.dataset.round) !== (f[T].round || 1) && Ri(), [...xt.children].forEach((e) => {
      const t = Number(e.dataset.step);
      e.classList.toggle("done", t < T), e.classList.toggle("active", t === T), e.classList.toggle("rewindable", t <= T), e.disabled = t > T, t === T && e.style.setProperty("--segment-progress", "0%");
    }), f[T] && (ki.textContent = Oa(T), it());
  }
  function Mr(e) {
    const t = f.indexOf(e);
    t < 0 || t <= T || (e.sessionHidden = !e.sessionHidden, nt(), Y((e.sessionHidden ? "Hidden " : "Included ") + e.name + " for this session"));
  }
  function Va() {
    const e = a("upcomingList");
    if (!e) return;
    e.innerHTML = "";
    const t = Lr(), n = f.slice(t);
    (st === "all" ? n : n.slice(0, Math.max(1, Number(st) || 1))).forEach((o) => {
      const r = document.createElement("section");
      r.className = "upcomingCard" + (o.sessionHidden ? " sessionHidden" : "") + (Pi(o) ? " noMeta" : ""), r.innerHTML = '<div class="upcomingInfo"><div class="upcomingIcon" aria-hidden="true">' + Ti(o) + '</div><div><div class="upcomingName">' + L(o.name) + '</div><div class="upcomingMeta">' + L(Li(o)) + (Pn() > 1 ? " · round " + o.round : "") + '</div></div></div><button class="skipSessionBtn" type="button">' + (o.sessionHidden ? "Include this session" : "Skip this session") + "</button>", r.querySelector(".skipSessionBtn").addEventListener("click", () => Mr(o)), e.appendChild(r);
    });
  }
  function nt() {
    var t;
    const e = Tr();
    kr.textContent = e.name, Sr.textContent = e.meta, Cr.textContent = e.icon;
    {
      const n = de ? f[we(T + 1)] : ((t = f[T]) == null ? void 0 : t.rest) > 0 ? { kind: "rest" } : f[we(T + 1)];
      x.querySelector(".nextCard").classList.toggle("noMeta", !!(n && Pi(n)));
    }
    if (xe = null, de) {
      const n = we(T + 1);
      n >= 0 && (xe = f[n]);
    } else {
      const n = f[T];
      if (n && n.rest > 0)
        xe = null;
      else {
        const i = we(T + 1);
        i >= 0 && (xe = f[i]);
      }
    }
    In && (In.hidden = !xe, In.textContent = xe != null && xe.sessionHidden ? "Include this session" : "Skip this session"), Va();
  }
  In.addEventListener("click", () => {
    xe && (xe.sessionHidden = !xe.sessionHidden, Y((xe.sessionHidden ? "Hidden " : "Included ") + xe.name + " for this session"), nt());
  });
  let Ne = null, Ei = null;
  function an(e, t = {}) {
    const n = R[F];
    w.fire(e, { move: (n == null ? void 0 : n.name) || "", move_id: F, ...t });
  }
  function Rr() {
    const e = R[F];
    Ne = { key: F, name: (e == null ? void 0 : e.name) || "Move", startedAt: Date.now(), active: 0 }, clearInterval(Ei), Ei = setInterval(() => {
      Ne && !Ee && Ne.active++;
    }, 1e3), an("started", { steps: f.length });
  }
  function ja(e) {
    if (clearInterval(Ei), !Ne) return;
    const t = Ne;
    Ne = null, an(e ? "completed" : "ended", { seconds: t.active }), !(t.active < 30) && (I.history.unshift({ id: "h-" + t.startedAt, move_id: t.key, name: t.name, start: new Date(t.startedAt).toISOString(), seconds: t.active, completed: e }), I.history = I.history.slice(0, 1e3), Me(), at(), ze());
  }
  function Ar() {
    Zn("workout"), Br();
    const e = we(0);
    e >= 0 && f[e].kind === "video" && Xa(f[e]);
  }
  function Mi() {
    Hn(), ja(!1), clearInterval(Q), clearInterval(un), de = !1, He(!1), a("app").classList.remove("resting"), $t.classList.remove("active"), Zn("home");
  }
  function Br() {
    $t.classList.add("active");
    let e = 5;
    xi.textContent = e, requestAnimationFrame(Bn), clearInterval(un), un = setInterval(() => {
      e--, e > 0 ? (xi.textContent = e, Bn()) : (clearInterval(un), xi.textContent = "GO", Bn(), setTimeout(() => {
        $t.classList.remove("active"), cancelAnimationFrame(Qt), Fr();
      }, 650));
    }, 1e3);
  }
  function Ri() {
    var t;
    xt.innerHTML = "";
    const e = ((t = f[Math.max(0, T)] || f[0]) == null ? void 0 : t.round) || 1;
    xt.dataset.round = e, f.forEach((n, i) => {
      if ((n.round || 1) !== e) return;
      const o = document.createElement("button");
      o.dataset.step = i, o.type = "button", o.className = "progressSegment", o.setAttribute("aria-label", "Go to " + n.name), o.addEventListener("click", () => {
        i <= T && Nr(i);
      }), xt.appendChild(o);
    });
  }
  function He(e) {
    e = !!e;
    const t = Ee !== e;
    if (Ee = e, Ci.textContent = e ? "Resume" : "Pause", a("app").classList.toggle("paused", e), ue && V)
      try {
        e ? V.pauseVideo() : V.playVideo();
      } catch {
      }
    t && Ne && an(e ? "paused" : "resumed");
  }
  function Nr(e) {
    e < 0 || e >= f.length || e > T || (clearInterval(Q), de = !1, a("app").classList.remove("resting"), T = e, He(!1), Tt(), Q = setInterval(Ye, 1e3));
  }
  function Fr() {
    if (T = we(0), He(!1), Ri(), T < 0) {
      nn.textContent = "No activities", De.textContent = "Open Edit and enable or add a movement", De.hidden = !1;
      return;
    }
    Rr(), Tt(), clearInterval(Q), Q = setInterval(Ye, 1e3);
  }
  const Ya = a("videoStage"), wt = a("videoSound"), Ir = 0, yt = 1, Pr = 2;
  let Ua = 0, kt = null, St = null, V = null, Ct = null, Dn = 0, Ai = !1, ue = null, Bi = null;
  function Ka() {
    var e;
    return (e = window.YT) != null && e.Player ? Promise.resolve(window.YT) : kt || (kt = new Promise((t, n) => {
      const i = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        try {
          i == null || i();
        } catch {
        }
      };
      const o = setInterval(() => {
        var s;
        (s = window.YT) != null && s.Player && (clearInterval(o), clearTimeout(r), t(window.YT));
      }, 100), r = setTimeout(() => {
        clearInterval(o), kt = null, n(new Error("YouTube did not load"));
      }, 15e3);
      if (!document.querySelector('script[src*="youtube.com/iframe_api"]')) {
        const s = document.createElement("script");
        s.src = "https://www.youtube.com/iframe_api", s.async = !0, s.onerror = () => {
          clearInterval(o), clearTimeout(r), kt = null, n(new Error("YouTube did not load"));
        }, document.head.appendChild(s);
      }
    }), kt);
  }
  function Za() {
    return St || (St = Ka().then((e) => new Promise((t) => {
      const n = document.createElement("div");
      a("videoFrame").appendChild(n), V = new e.Player(n, {
        width: "100%",
        height: "100%",
        playerVars: { playsinline: 1, rel: 0, iv_load_policy: 3, modestbranding: 1 },
        events: { onReady: () => t(V), onStateChange: (i) => Hr(i.data), onError: (i) => zr(i.data) }
      });
    })), St.catch(() => {
      St = null;
    }), St);
  }
  function Xa(e) {
    !(e != null && e.videoId) || e.videoError || Za().then((t) => {
      ue || Ct === e.videoId || (Ct = e.videoId, Dn = Number(e.start) || 0, Ai = !1, t.mute(), t.loadVideoById({ videoId: e.videoId, startSeconds: Dn }));
    }).catch(() => {
    });
  }
  function Dr() {
    const e = we(T + 1);
    e >= 0 && f[e].kind === "video" && Xa(f[e]);
  }
  function Hr(e) {
    if (!ue) {
      e === yt && !Ai && (Ai = !0, V.pauseVideo(), V.seekTo(Dn, !0));
      return;
    }
    Ya.classList.toggle("playing", e === yt), f[T] === ue && performance.now() > Ua && (e === yt && Ee ? He(!1) : e === Pr && !Ee && He(!0)), e === yt && Qa(ue.videoId, V.getDuration()) && Me(), e === Ir && on();
  }
  function zr(e) {
    const t = ue;
    if (!t) {
      Ct = null;
      return;
    }
    e === 101 || e === 150 ? (Gr(t.videoId), Y("That video can’t play outside YouTube, so it was skipped")) : Y("The video couldn’t play, so it was skipped"), on();
  }
  function qr(e) {
    if (a("app").classList.add("videoStep"), wt.hidden = !0, ue = e, clearTimeout(Bi), !e.videoId) {
      Y("This video step has no link yet, so it was skipped"), setTimeout(() => on(), 0);
      return;
    }
    Za().then((t) => {
      if (ue !== e) return;
      Ua = performance.now() + 1500;
      const n = Number(e.start) || 0;
      Ct !== e.videoId ? (Ct = e.videoId, Dn = n, t.loadVideoById({ videoId: e.videoId, startSeconds: n })) : (t.seekTo(n, !0), t.playVideo()), t.unMute(), Ee && t.pauseVideo(), Bi = setTimeout(() => {
        ue !== e || Ee || (t.getPlayerState() !== yt ? (t.mute(), t.playVideo(), wt.hidden = !1) : t.isMuted() && (wt.hidden = !1));
      }, 1600);
    }).catch(() => {
      ue === e && (Y("YouTube didn’t load, so the video was skipped"), on());
    });
  }
  function Ja() {
    if (!a("app").classList.contains("videoStep")) return;
    const e = x.querySelector(".workGrid"), t = x.querySelector(".sessionControlRow"), n = e.getBoundingClientRect().top, i = (t == null ? void 0 : t.offsetHeight) || 42, o = window.innerHeight - n - 16 - i - 84;
    e.style.setProperty("--theater-h", Math.max(240, Math.round(o)) + "px");
  }
  window.addEventListener("resize", Ja);
  function Hn() {
    clearTimeout(Bi);
    const e = ue;
    if (ue = null, a("app").classList.remove("videoStep"), Ya.classList.remove("playing"), wt.hidden = !0, e && V) {
      try {
        V.pauseVideo();
      } catch {
      }
      Ct = null;
    }
  }
  function on() {
    const e = ue;
    !e || f[T] !== e || (Hn(), clearInterval(Q), Lt(), Q = setInterval(Ye, 1e3));
  }
  wt.addEventListener("click", () => {
    V && (V.unMute(), V.playVideo()), wt.hidden = !0;
  });
  function _r(e) {
    var i;
    const t = Number(e.start) || 0;
    if (e.useVideoLength === !1) return t + (Number(e.duration) || 300);
    const n = V && ue === e && Number((i = V.getDuration) == null ? void 0 : i.call(V)) || 0;
    return Number(e.end) || n || Number(e.videoDuration) || t + (Number(e.duration) || 300);
  }
  function $a(e, t) {
    const n = R[F];
    [Se, ve, Ce, n == null ? void 0 : n.warmup, n == null ? void 0 : n.strength, n == null ? void 0 : n.cooldown, n == null ? void 0 : n.sequence].forEach((i) => (Array.isArray(i) ? i : []).forEach((o) => {
      o && o.kind === "video" && o.videoId === e && t(o);
    }));
  }
  function Qa(e, t) {
    t = Math.round(Number(t) || 0);
    let n = !1;
    return e && t > 0 && $a(e, (i) => {
      i.videoDuration !== t && (i.videoDuration = t, n = !0);
    }), n;
  }
  function Gr(e) {
    $a(e, (t) => {
      t.videoError = "embed";
    }), Me();
  }
  function Or(e) {
    const t = e.videoId;
    if (!t) return;
    const n = () => {
      pe.classList.contains("open") ? he || G() : (G(), Me());
    };
    fetch("https://www.youtube.com/oembed?format=json&url=" + encodeURIComponent("https://www.youtube.com/watch?v=" + t)).then((i) => i.ok ? i.json() : Promise.reject(i.status)).then((i) => {
      e.videoId === t && (e.videoTitle = i.title || "", e.autoName && i.title && (e.name = i.title), n());
    }).catch((i) => {
      e.videoId === t && i === 401 && (e.videoError = "embed", n());
    }), Wr(t).then((i) => {
      Qa(t, i) && n();
    }).catch((i) => {
      i === "embed" && e.videoId === t && (e.videoError = "embed", n());
    });
  }
  function Wr(e) {
    return Ka().then((t) => new Promise((n, i) => {
      const o = document.createElement("div");
      o.className = "videoProbe", o.setAttribute("aria-hidden", "true");
      const r = document.createElement("div");
      o.appendChild(r), a("app").appendChild(o);
      let s = null, d = !1;
      const m = (l, b) => {
        d || (d = !0, clearTimeout(u), setTimeout(() => {
          try {
            s == null || s.destroy();
          } catch {
          }
          o.remove();
        }, 0), b ? i(b) : n(l));
      }, u = setTimeout(() => m(0), 2e4), p = () => {
        var b;
        const l = Number((b = s == null ? void 0 : s.getDuration) == null ? void 0 : b.call(s)) || 0;
        return l > 0 && m(l), l > 0;
      };
      s = new t.Player(r, {
        width: 320,
        height: 180,
        videoId: e,
        playerVars: { playsinline: 1, mute: 1, controls: 0 },
        events: {
          onReady: () => {
            p() || (s.mute(), s.playVideo());
          },
          onStateChange: () => p(),
          onError: (l) => m(0, l.data === 101 || l.data === 150 ? "embed" : "error")
        }
      });
    }));
  }
  function Tt() {
    de = !1;
    const e = f[T];
    a("app").classList.toggle("resting", e.kind === "rest"), e.kind === "video" ? qr(e) : Hn(), ce = e.duration, Ht = e.duration, nn.textContent = e.name, De.textContent = e.group, De.hidden = !0, ki.textContent = Oa(T), Ne && an("step", { name: e.name, group: e.group, kind: e.kind, step: T + 1, of: f.length, round: e.round || 1, rounds: Pn(), duration: e.duration }), nt(), Er(), Dr(), e.kind === "video" && setTimeout(Ja, 0);
  }
  function it() {
    var o;
    const e = ((o = f[T]) == null ? void 0 : o.kind) === "video" && !de, t = e && ce >= 60;
    Si.textContent = t ? zt(ce) : ce, Si.classList.toggle("long", t), e && (a("videoClock").textContent = zt(ce) + " left");
    const n = ce / Ht * 100;
    Ga.style.width = n + "%";
    const i = Wa();
    if (i && !de) {
      const r = 100 - n;
      i.style.setProperty("--segment-progress", r + "%");
    }
  }
  function Ye() {
    var t, n;
    if (Ee) return;
    const e = f[T];
    if ((e == null ? void 0 : e.kind) === "video" && !de && ue === e) {
      const i = Number((t = V == null ? void 0 : V.getCurrentTime) == null ? void 0 : t.call(V)) || 0, o = Number(e.start) || 0, r = _r(e);
      Ht = Math.max(1, r - o), (i > o || ((n = V == null ? void 0 : V.getPlayerState) == null ? void 0 : n.call(V)) === yt) && (ce = Math.max(0, Math.ceil(r - i))), it(), i > o && i >= r - 0.25 && on();
      return;
    }
    ce--, it(), ce <= 0 && (e.rest > 0 ? eo(e.rest) : Lt());
  }
  function eo(e) {
    var n;
    de = !0, a("app").classList.add("resting");
    const t = Wa();
    t && t.style.setProperty("--segment-progress", "100%"), clearInterval(Q), ce = e, Ht = e, Ne && an("rest", { duration: e }), nn.textContent = "Rest", De.textContent = (n = f[T]) != null && n.roundBreakAfter ? "Round " + (f[T].round + 1) + " next" : "Recovery", nt(), it(), Q = setInterval(() => {
      Ee || (ce--, it(), ce <= 0 && (clearInterval(Q), Lt(), Q = setInterval(Ye, 1e3)));
    }, 1e3);
  }
  function Lt() {
    de = !1;
    const e = we(T + 1);
    if (e >= 0)
      T = e, Tt();
    else {
      clearInterval(Q), Hn(), He(!1), a("app").classList.remove("resting"), nn.textContent = "Complete", De.textContent = "Move finished", De.hidden = !1, Si.textContent = "✓";
      {
        const t = Pn();
        ki.textContent = t > 1 ? t + " rounds done" : f.filter((n) => !n.roundBreak).length + " steps done";
      }
      ja(!0);
      {
        const t = po(7).reduce((n, i) => n + i.minutes, 0);
        De.textContent = "Move finished · " + t + " min in the last 7 days";
      }
      Ga.style.width = "100%", nt();
    }
  }
  a("skipExercise").addEventListener("click", () => {
    Vr(), He(!1);
  });
  function Vr() {
    clearInterval(Q);
    const e = f[T];
    if (de) {
      de = !1, a("app").classList.remove("resting");
      const n = we(T + 1);
      n >= 0 ? (T = n, Tt(), Q = setInterval(Ye, 1e3)) : Lt();
      return;
    }
    if (e && e.rest > 0) {
      eo(e.rest);
      return;
    }
    const t = we(T + 1);
    t >= 0 ? (T = t, Tt(), Q = setInterval(Ye, 1e3)) : Lt();
  }
  a("restartSegment").addEventListener("click", () => {
    if (clearInterval(Q), He(!1), de) {
      const e = f[T];
      ce = e.rest, Ht = e.rest, nn.textContent = "Rest", De.textContent = "Recovery", a("app").classList.add("resting"), nt(), it();
    } else
      Tt();
    Q = setInterval(de ? () => {
      Ee || (ce--, it(), ce <= 0 && (clearInterval(Q), Lt(), Q = setInterval(Ye, 1e3)));
    } : Ye, 1e3);
  });
  function rn(e, t, n, i) {
    let o = 0, r = null, s = !1;
    function d() {
      r && cancelAnimationFrame(r), r = null, o = 0, s = !1, t.style.width = "0%", e.classList.remove("holding");
    }
    function m(l) {
      if (!s) return;
      o || (o = l);
      const b = Math.min(1, (l - o) / n);
      if (t.style.width = b * 100 + "%", b >= 1) {
        s = !1, r && cancelAnimationFrame(r), r = null, t.style.width = "100%", setTimeout(() => t.style.width = "0%", 90), i();
        return;
      }
      r = requestAnimationFrame(m);
    }
    function u(l) {
      var b;
      if (!(l && l.button !== void 0 && l.button !== 0)) {
        l == null || l.preventDefault(), d(), s = !0, e.classList.add("holding");
        try {
          (b = e.setPointerCapture) == null || b.call(e, l.pointerId);
        } catch {
        }
        r = requestAnimationFrame(m);
      }
    }
    function p() {
      s && d();
    }
    e.addEventListener("pointerdown", u), e.addEventListener("pointerup", p), e.addEventListener("pointercancel", p), e.addEventListener("lostpointercapture", p), e.addEventListener("keydown", (l) => {
      (l.key === " " || l.key === "Enter") && !l.repeat && u(l);
    }), e.addEventListener("keyup", (l) => {
      (l.key === " " || l.key === "Enter") && p();
    });
  }
  const jr = a("endWorkout");
  rn(jr, a("holdEndFill"), 1500, Mi);
  const Et = a("deleteMoveConfirm");
  a("deleteMoveOpen").addEventListener("click", () => {
    Et.classList.add("open"), Et.setAttribute("aria-hidden", "false");
  }), a("deleteMoveCancel").addEventListener("click", () => {
    Et.classList.remove("open"), Et.setAttribute("aria-hidden", "true");
  });
  function Yr() {
    const e = F, t = x.querySelector('.workoutPanel[data-workout="' + e + '"]');
    t && t.remove(), delete R[e], I.order = I.order.filter((i) => i !== e);
    let n = x.querySelector(".workoutPanel[data-workout]");
    if (!n) {
      const i = "custom-" + Date.now();
      R[i] = { name: "New move", source: "Custom routine", total: 20, work: 45, rest: 15, customSequence: !0, preset: "movement", sequence: [], strength: [] }, I.order.push(i), n = Jn(i, R[i]);
    }
    Et.classList.remove("open"), Et.setAttribute("aria-hidden", "true"), Jt = null, An(), Re(n.dataset.workout), Me(), Y("Move deleted");
  }
  rn(a("deleteMoveYes"), a("deleteMoveFill"), 1500, Yr);
  const Ni = x.querySelector(".rubberTabs"), Mt = a("rubberIndicator");
  function sn(e, t = !0) {
    if (!e || !Ni || !Mt) return;
    const n = Ni.getBoundingClientRect(), i = e.getBoundingClientRect();
    Mt.style.transition = t ? "left .34s cubic-bezier(.2,1.35,.4,1),width .34s cubic-bezier(.2,1.35,.4,1),transform .18s ease" : "none";
    const o = et();
    Mt.style.left = (i.left - n.left) / o + Ni.scrollLeft + "px", Mt.style.width = i.width / o + "px", t && (Mt.style.transform = "scaleX(1.08)", setTimeout(() => Mt.style.transform = "scaleX(1)", 180));
  }
  x.querySelectorAll(".tab").forEach((e) => e.addEventListener("click", () => {
    e.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "smooth" }), x.querySelectorAll(".tab").forEach((t) => t.classList.remove("active")), x.querySelectorAll(".settingsPane").forEach((t) => t.classList.remove("active")), e.classList.add("active"), a(e.dataset.pane).classList.add("active"), sn(e, !0);
  })), requestAnimationFrame(() => sn(x.querySelector(".tab.active"), !1)), window.addEventListener("resize", () => sn(x.querySelector(".tab.active"), !1));
  const Fi = a("pixelTrailToggle"), Ii = a("rippleToggle"), Rt = a("trailStrength"), At = a("trailLife");
  function ye(e, t) {
    q()[e] = t, Me();
  }
  const to = ["Warm-up", "Movement", "Cooldown", "Rest", "Video"];
  function no(e) {
    return e.kind === "rest" ? "rest" : e.kind === "video" ? "video" : "g:" + String(e.group || "").trim().toLowerCase();
  }
  function Pi(e) {
    var t;
    return !!((t = q().hideMeta) != null && t[no(e)]);
  }
  function Ur() {
    const e = /* @__PURE__ */ new Map(), t = (n, i, o) => {
      if (!n) return;
      Array.isArray(n) && (n = { name: n[1], group: n[2], kind: "work" });
      const r = no(n);
      let s = e.get(r);
      s || (s = { key: r, label: r === "rest" ? "Rest" : r === "video" ? "Video" : String(n.group || "").trim() || "No type", kinds: /* @__PURE__ */ new Set(), moves: /* @__PURE__ */ new Set(), count: 0 }, e.set(r, s)), s.kinds.add(r === "rest" ? "Rest" : r === "video" ? "Video" : i), s.moves.add(o), s.count++;
    };
    return Object.values(R).forEach((n) => {
      const i = n.name || "Move";
      (n.warmup || (n.customSequence ? [] : cn)).forEach((o) => t(o, "Warm-up", i)), (n.customSequence ? n.sequence || [] : n.strength || []).forEach((o) => t(o, o.presetRole === "warmup" ? "Warm-up" : o.presetRole === "cooldown" ? "Cooldown" : "Movement", i)), (n.cooldown || (n.customSequence ? [] : pn)).forEach((o) => t(o, "Cooldown", i));
    }), [["rest", "Rest"], ["video", "Video"]].forEach(([n, i]) => {
      e.has(n) || e.set(n, { key: n, label: i, kinds: /* @__PURE__ */ new Set([i]), moves: /* @__PURE__ */ new Set(), count: 0 });
    }), [...e.values()].map((n) => ({ ...n, kind: n.kinds.has("Movement") ? "Movement" : [...n.kinds][0], moves: [...n.moves] })).sort((n, i) => to.indexOf(n.kind) - to.indexOf(i.kind) || n.label.localeCompare(i.label));
  }
  let Di = "all";
  function Hi() {
    const e = a("metaSearch").value.trim().toLowerCase();
    return Ur().filter((t) => (Di === "all" || t.kind === Di) && (!e || t.label.toLowerCase().includes(e) || t.moves.some((n) => n.toLowerCase().includes(e))));
  }
  function zn() {
    const e = a("metaTableBody");
    if (!e) return;
    const t = q().hideMeta || {}, n = Hi();
    e.innerHTML = n.length ? "" : '<tr class="metaEmpty"><td colspan="4">No types match</td></tr>', n.forEach((o) => {
      const r = !t[o.key], s = o.count ? (o.moves.length > 2 ? o.moves.slice(0, 2).join(", ") + " + " + (o.moves.length - 2) + " more" : o.moves.join(", ")) + " · " + o.count + " step" + (o.count === 1 ? "" : "s") : "Not used yet", d = document.createElement("tr");
      d.className = r ? "" : "off", d.innerHTML = '<td><div class="metaType">' + L(o.label) + '</div><div class="metaSub">' + L(o.kind + " · " + s) + '</div></td><td class="metaKindCol">' + L(o.kind) + '</td><td class="metaUsedCol">' + L(s) + '</td><td class="metaSwitchCol"><button class="switch' + (r ? " on" : "") + '" type="button" role="switch" aria-checked="' + r + '" aria-label="Second line for ' + L(o.label) + ' on phones"></button></td>', d.querySelector(".switch").addEventListener("click", () => zi([o.key], r)), e.appendChild(d);
    });
    const i = n.filter((o) => t[o.key]).length;
    a("metaCount").textContent = n.length ? n.length + " type" + (n.length === 1 ? "" : "s") + (i ? " · " + i + " hidden on phones" : "") : "";
  }
  function zi(e, t) {
    const n = { ...q().hideMeta || {} };
    e.forEach((i) => {
      t ? n[i] = !0 : delete n[i];
    }), ye("hideMeta", n), zn(), ii(), nt();
  }
  a("metaSearch").addEventListener("input", zn), a("metaKinds").querySelectorAll(".kindChip").forEach((e) => e.addEventListener("click", () => {
    Di = e.dataset.kind, a("metaKinds").querySelectorAll(".kindChip").forEach((t) => t.classList.toggle("active", t === e)), zn();
  })), a("metaHideAll").addEventListener("click", () => zi(Hi().map((e) => e.key), !0)), a("metaShowAll").addEventListener("click", () => zi(Hi().map((e) => e.key), !1));
  const Ue = { feel: !0, steps: !0, mood: !0, energyLevel: !0, weather: !0, ...q().toggles || {} };
  function io() {
    x.querySelectorAll("[data-toggle]").forEach((n) => n.classList.toggle("on", Ue[n.dataset.toggle] !== !1)), x.querySelector(".feelSection").hidden = !0, [["steps", "stepsRow"], ["mood", "moodRow"], ["energyLevel", "energyLevelRow"]].forEach(([n, i]) => {
      a(i).hidden = Ue[n] === !1;
    });
    const e = ["steps", "mood", "energyLevel"].some((n) => Ue[n] !== !1);
    x.querySelector(".activityCard").hidden = !e, a("weatherCard").hidden = Ue.weather === !1;
    const t = x.querySelector("#homeView .grid");
    t.classList.toggle("noActivity", !e), t.classList.toggle("noWeather", Ue.weather === !1);
  }
  x.querySelectorAll("[data-toggle]").forEach((e) => e.addEventListener("click", () => {
    Ue[e.dataset.toggle] = Ue[e.dataset.toggle] === !1, io(), ye("toggles", { ...Ue });
  })), io();
  function Kr() {
    Fi.classList.toggle("on", Pe), Ii.classList.toggle("on", tt), Rt.value = Math.round(gt * 100), a("trailStrengthValue").textContent = Rt.value + "%", At.value = vt, a("trailLifeValue").textContent = At.value + " ms";
  }
  q().trailEnabled !== void 0 && (Pe = q().trailEnabled), q().rippleEnabled !== void 0 && (tt = q().rippleEnabled), q().trailStrength !== void 0 && (gt = q().trailStrength), q().trailMaxAge !== void 0 && (vt = q().trailMaxAge), Kr(), Fi.addEventListener("click", () => {
    Pe = !Pe, Fi.classList.toggle("on", Pe), Pe || (tn = []), ye("trailEnabled", Pe);
  }), Ii.addEventListener("click", () => {
    tt = !tt, Ii.classList.toggle("on", tt), ye("rippleEnabled", tt);
  }), Rt.addEventListener("input", () => {
    gt = Number(Rt.value) / 100, a("trailStrengthValue").textContent = Rt.value + "%";
  }), Rt.addEventListener("change", () => ye("trailStrength", gt)), At.addEventListener("input", () => {
    vt = Number(At.value), a("trailLifeValue").textContent = At.value + " ms";
  }), At.addEventListener("change", () => ye("trailMaxAge", vt)), En.addEventListener("change", () => ye("upcomingCount", st));
  function ao(e) {
    x.querySelectorAll(".themeBtn").forEach((n) => n.classList.toggle("active", n.dataset.theme === e));
    const t = e === "light";
    a("app").classList.toggle("light", t), w.setLight(t);
  }
  ao(q().theme || "dark"), x.querySelectorAll(".themeBtn").forEach((e) => e.addEventListener("click", () => {
    ao(e.dataset.theme), ye("theme", e.dataset.theme);
  }));
  const re = { steps: null, weather: null, ...q().entities || {} };
  let be = null, qi = {};
  function Zr(e) {
    const t = Object.values(e).filter((d) => d.entity_id.startsWith("sensor.") || d.entity_id.startsWith("input_number.")), n = (d) => d.attributes.friendly_name || d.entity_id, i = t.filter((d) => /step/i.test(d.entity_id) || /step/i.test(n(d)) || ["steps", "step"].includes(String(d.attributes.unit_of_measurement || "").toLowerCase())), o = t.filter((d) => !i.includes(d)), r = (d, m) => n(d).localeCompare(n(m)), s = (d, m) => /health_steps/.test(m.entity_id) - /health_steps/.test(d.entity_id) || r(d, m);
    return { suggested: i.sort(s), rest: o.sort(r), label: n };
  }
  function oo(e) {
    const t = a("stepsEntity");
    if (!t || t.matches(":focus")) return;
    const { suggested: n, rest: i, label: o } = Zr(e), r = (m) => '<option value="' + L(m.entity_id) + '">' + L(o(m)) + "</option>";
    t.innerHTML = '<option value="">Not connected</option>' + (n.length ? '<optgroup label="Suggested">' + n.map(r).join("") + "</optgroup>" : "") + (i.length ? '<optgroup label="All sensors">' + i.map(r).join("") + "</optgroup>" : ""), t.value = re.steps || "";
    const s = a("stepsStatus"), d = re.steps && e[re.steps];
    s.textContent = d ? "Connected · " + o(d) : s.dataset.empty;
  }
  a("stepsEntity").addEventListener("change", () => {
    re.steps = a("stepsEntity").value || null, ye("entities", { ...re }), qi = {}, co(), be && (oo(be), so(be));
  });
  function Xr(e, t = 0) {
    return new Intl.NumberFormat(void 0, { maximumFractionDigits: t }).format(e);
  }
  function ro() {
    const e = re.steps && (be == null ? void 0 : be[re.steps]), t = Number(e == null ? void 0 : e.state);
    return Number.isFinite(t) ? t : null;
  }
  function so(e) {
    var i;
    const t = re.steps, n = t ? Number((i = e[t]) == null ? void 0 : i.state) : NaN;
    a("stepsMeta").textContent = t ? Number.isFinite(n) ? Xr(n) : "—" : "Set up in Settings";
  }
  let lo = 0;
  async function co() {
    const e = re.steps;
    if (!e || !w.ws) return;
    lo = Date.now();
    const t = /* @__PURE__ */ new Date(), n = new Date(t.getFullYear(), t.getMonth(), t.getDate() - 30);
    try {
      const i = await w.ws({ type: "recorder/statistics_during_period", start_time: n.toISOString(), end_time: t.toISOString(), statistic_ids: [e], period: "day", types: ["max"] }), o = (i == null ? void 0 : i[e]) || [], r = {};
      if (o.forEach((s) => {
        Number.isFinite(s.max) && (r[oe(new Date(s.start))] = s.max);
      }), !Object.keys(r).length) {
        const s = await w.ws({ type: "history/history_during_period", start_time: n.toISOString(), end_time: t.toISOString(), entity_ids: [e], minimal_response: !0, no_attributes: !0, significant_changes_only: !1 });
        ((s == null ? void 0 : s[e]) || []).forEach((d) => {
          const m = Number(d.s ?? d.state), u = d.lu ? d.lu * 1e3 : Date.parse(d.last_updated || d.last_changed);
          if (!Number.isFinite(m) || !u) return;
          const p = oe(new Date(u));
          r[p] = Math.max(r[p] || 0, m);
        });
      }
      qi = r, ze();
    } catch {
    }
  }
  function at() {
    ze();
  }
  at(), setInterval(() => {
    at(), Kt(), Qe();
  }, 10 * 60 * 1e3);
  function po(e) {
    const t = {}, n = {};
    I.history.forEach((s) => {
      const d = oe(new Date(s.start));
      t[d] = (t[d] || 0) + (s.seconds || 0) / 60, n[d] = (n[d] || 0) + 1;
    });
    const i = /* @__PURE__ */ new Date(), o = oe(i), r = [];
    for (let s = e - 1; s >= 0; s--) {
      const d = new Date(i.getFullYear(), i.getMonth(), i.getDate() - s), m = oe(d), u = I.checkins.filter((l) => l.date === m), p = (l) => {
        const b = u.map((E) => E[l]).filter(Boolean);
        return b.length ? b.reduce((E, h) => E + h, 0) / b.length : null;
      };
      r.push({
        key: m,
        date: d,
        minutes: Math.round(t[m] || 0),
        moves: n[m] || 0,
        steps: m === o && ro() != null ? ro() : qi[m] ?? null,
        mood: p("mood"),
        energy: p("energy")
      });
    }
    return r;
  }
  function Jr(e) {
    let t = e.length - 1;
    e[t] && !e[t].minutes && t--;
    let n = 0;
    for (; t >= 0 && e[t].minutes > 0; )
      n++, t--;
    return n;
  }
  function ze() {
    const e = a("insightCard");
    if (!e) return;
    const t = po(30), n = Jr(t), i = t.reduce((u, p) => u + p.minutes, 0), o = /* @__PURE__ */ new Date(), r = oe(o), s = oe(new Date(o.getFullYear(), o.getMonth(), o.getDate() - (o.getDay() + 6) % 7)), d = t.filter((u) => u.key >= s && u.key <= r).reduce((u, p) => u + p.minutes, 0), m = (u, p, l) => '<div class="activityRow"><div class="activityRowIcon" aria-hidden="true">' + u + '</div><div><div class="activityRowName">' + L(p) + '</div><div class="activityRowMeta">' + L(l) + "</div></div></div>";
    e.innerHTML = '<div class="activityHeader"><div class="activityIcon" aria-hidden="true">↗</div><div class="activityTitle">Movement</div></div><div class="activityRows jointRows">' + m("◷", "This week", d + " min") + m("↯", "Streak", n + " day" + (n === 1 ? "" : "s")) + m("▦", "30 days", i + " min") + "</div>";
  }
  const $r = {
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
  }, Qr = (e) => e === "sunny" ? "clear" : e === "clear-night" ? "night" : e === "partlycloudy" ? "partly" : ["rainy", "pouring", "lightning", "lightning-rainy", "hail"].includes(e) ? "rain" : ["snowy", "snowy-rainy"].includes(e) ? "snow" : "cloudy", _i = '<svg class="wxCloud" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 19h10.5a4.5 4.5 0 0 0 .6-8.96A6.5 6.5 0 0 0 5.6 8.6 5.2 5.2 0 0 0 7 19z"/></svg>';
  function Bt(e, t) {
    const n = Qr(e), i = n === "clear" ? '<span class="wxSun"></span>' : n === "night" ? '<svg class="wxMoon" viewBox="0 0 24 24" aria-hidden="true"><path d="M15.5 3.2A9 9 0 1 0 20.8 17 7.4 7.4 0 0 1 15.5 3.2z"/></svg>' : n === "partly" ? '<span class="wxSun"></span>' + _i : n === "rain" || n === "snow" ? _i + '<span class="wxDrops ' + n + '"><i></i><i></i><i></i></span>' : _i;
    return '<span class="wxIcon ' + n + (t ? " large" : "") + '" aria-hidden="true">' + i + "</span>";
  }
  let Gi = [], qn, _n = null, Oi = !1;
  function es(e) {
    return Object.values(e).filter((t) => t.entity_id.startsWith("weather.")).sort((t, n) => (t.attributes.friendly_name || t.entity_id).localeCompare(n.attributes.friendly_name || n.entity_id));
  }
  function uo(e) {
    const t = a("weatherEntity");
    if (!t || t.matches(":focus")) return;
    const n = es(e);
    t.innerHTML = '<option value="">Not connected</option>' + n.map((o) => '<option value="' + L(o.entity_id) + '">' + L(o.attributes.friendly_name || o.entity_id) + "</option>").join(""), t.value = re.weather || "";
    const i = re.weather && e[re.weather];
    a("weatherStatus").textContent = i ? "Connected · " + (i.attributes.friendly_name || i.entity_id) : a("weatherStatus").dataset.empty;
  }
  function mo() {
    const e = re.weather || null;
    if (e === qn) return;
    qn = e, Gi = [], Oi = !1;
    const t = _n;
    if (_n = null, t == null || t.then((n) => typeof n == "function" && n()).catch(() => {
    }), !e || !w.subscribe) {
      Nt();
      return;
    }
    _n = w.subscribe({ type: "weather/subscribe_forecast", forecast_type: "daily", entity_id: e }, (n) => {
      qn === e && (Gi = Array.isArray(n == null ? void 0 : n.forecast) ? n.forecast : [], Nt());
    }), _n.catch(() => {
      qn === e && (Oi = !0, Nt());
    }), Nt();
  }
  a("weatherEntity").addEventListener("change", () => {
    re.weather = a("weatherEntity").value || null, ye("entities", { ...re }), be && uo(be), mo();
  });
  function Nt() {
    const e = a("weatherCard");
    if (!e) return;
    const t = re.weather, n = t && (be == null ? void 0 : be[t]), i = (M) => '<div class="activityHeader">' + M + '<div class="activityTitle">Weather</div></div>';
    if (!n) {
      e.innerHTML = i(Bt("cloudy")) + '<div class="activityRows"><div class="activityRow"><div class="activityRowIcon" aria-hidden="true">☁</div><div><div class="activityRowName">Forecast</div><div class="activityRowMeta">' + (t ? "Not available" : "Set up in Settings") + "</div></div></div></div>";
      return;
    }
    const o = n.attributes || {}, r = o.temperature_unit || "°", s = (M) => Number.isFinite(Number(M)) ? Math.round(Number(M)) + "°" : "—", d = (o.friendly_name || "").replace(/^forecast\s+/i, "") || "Weather", m = $r[n.state] || (n.state ? n.state.charAt(0).toUpperCase() + n.state.slice(1) : "—"), u = oe(/* @__PURE__ */ new Date()), p = Gi.slice(0, 7), l = p.find((M) => oe(new Date(M.datetime)) === u) || null, b = p.filter((M) => oe(new Date(M.datetime)) >= u).slice(0, 6), E = b.find((M) => oe(new Date(M.datetime)) > u), h = l ? "H " + s(l.temperature) + "&ensp; L " + s(l.templow) : "", g = (M) => new Intl.DateTimeFormat(void 0, { weekday: "short" }).format(new Date(M.datetime)), v = Number.isFinite(Number(o.temperature)) ? Math.round(Number(o.temperature)) : "—", P = (M, y, B) => '<div class="activityRow">' + M + '<div><div class="activityRowName">' + L(y) + '</div><div class="activityRowMeta">' + B + "</div></div></div>";
    e.innerHTML = '<div class="wxWide"><div class="wxNow"><div class="wxCurrent">' + Bt(n.state, !0) + '<div class="wxTempBlock"><div class="wxTemp"><span class="wxDeg">' + L(String(v)) + '</span><span class="wxUnit">' + L(r) + '</span></div><div class="wxPlace">' + L(d) + '</div></div></div><div class="wxCondition"><div class="wxCondName">' + L(m) + "</div>" + (h ? '<div class="wxRange">' + h + "</div>" : "") + "</div></div>" + (b.length ? '<div class="wxDays">' + b.map((M) => '<div class="wxDay"><div class="wxDayName">' + L(g(M)) + "</div>" + Bt(M.condition) + '<div class="wxTemps"><div class="wxHigh">' + s(M.temperature) + '</div><div class="wxLow">' + s(M.templow) + "</div></div></div>").join("") + "</div>" : '<div class="wxNoDays">' + (Oi ? "This weather service has no daily forecast" : "Loading the forecast…") + "</div>") + '</div><div class="wxCompact"><div class="activityRows">' + P(Bt(n.state), "Now · " + d, L(v + "° " + m)) + (l ? P(Bt(l.condition), "Today", s(l.temperature) + " / " + s(l.templow)) : "") + (E ? P(Bt(E.condition), "Tomorrow", s(E.temperature) + " / " + s(E.templow)) : "") + "</div></div>";
  }
  Nt();
  const go = a("tvNav");
  w.fullscreenSupported || (go.hidden = !0), go.addEventListener("click", () => w.toggleFullscreen()), x.addEventListener("keydown", (e) => {
    !rt.workout.classList.contains("active") || $t.classList.contains("active") || e.target.closest("input,select,textarea,.holdEnd") || (e.key === "MediaPlayPause" || e.key === " " && !e.target.closest("button") ? (e.preventDefault(), Ci.click()) : e.key === "MediaTrackNext" ? (e.preventDefault(), a("skipExercise").click()) : e.key === "MediaTrackPrevious" && (e.preventDefault(), a("restartSegment").click()));
  }), x.querySelectorAll("[data-rounds-step]").forEach((e) => e.addEventListener("click", () => {
    const t = Math.max(1, Math.min(10, (Number(Le.value) || 1) + Number(e.dataset.roundsStep)));
    String(t) !== Le.value && (Le.value = t, Le.dispatchEvent(new Event("input", { bubbles: !0 })));
  })), [W, D, z, Le].forEach((e) => e.addEventListener("input", () => {
    const t = R[F];
    t && (t.total = Number(W.value), t.work = Number(D.value), t.rest = Number(z.value)), G();
  })), Xi.addEventListener("click", Mi), Ji.addEventListener("click", () => Zn("settings")), a("settingsBack").addEventListener("click", Mi), Ci.addEventListener("click", () => He(!Ee)), Re(F), Ln(), Kt(), ze(), a("healthHelpOpen").addEventListener("click", () => x.querySelector(".tab[data-pane=helpPane]").click()), rn(a("resetStats"), a("resetStatsFill"), 1500, () => {
    I.history = [], I.checkins = [], Ut = "";
    try {
      localStorage.removeItem("move-assistant-dismissed");
    } catch {
    }
    Me(), at(), Kt(), Ln(), ze(), Qe(), Y("Stats reset");
  });
  const Wi = a("morningTime"), Vi = a("eveningTime"), ji = a("checkinAutoOpen");
  Wi.value = Fe().morning, Vi.value = Fe().evening, ji.classList.toggle("on", q().checkinAutoOpen !== !1), [["morningTime", Wi], ["eveningTime", Vi]].forEach(([e, t]) => t.addEventListener("change", () => {
    t.value && (ye(e, t.value), Qe());
  })), ji.addEventListener("click", () => {
    const e = q().checkinAutoOpen === !1;
    ji.classList.toggle("on", e), ye("checkinAutoOpen", e);
  }), setTimeout(gi, 800);
  const vo = a("checkinNotify"), Gn = a("checkinNotifyTarget"), ho = a("checkinNotifyStatus"), ts = ho.textContent;
  function fo() {
    const e = w.notifyServices(), t = e.filter((o) => o.startsWith("mobile_app_")), n = t.length ? t : e, i = (o) => o.replace(/^mobile_app_/, "").replace(/_/g, " ");
    Gn.innerHTML = n.map((o) => '<option value="' + L(o) + '">' + L(i(o)) + "</option>").join(""), !q().notifyTarget && n[0] && (q().notifyTarget = n[0]), Gn.value = q().notifyTarget || "";
  }
  function On() {
    const e = !!q().notifyOn;
    vo.classList.toggle("on", e), a("checkinNotifyTargetRow").hidden = !e;
    const t = Fe();
    ho.textContent = e ? "Sends at " + t.morning + " and " + t.evening : ts;
  }
  async function Yi() {
    const e = !!q().notifyOn;
    try {
      return await w.setReminderAutomation(e ? { target: q().notifyTarget, times: Fe() } : null), !0;
    } catch {
      return Y("Couldn't update the reminder in Home Assistant"), !1;
    }
  }
  vo.addEventListener("click", async () => {
    const e = !q().notifyOn;
    if (e && (fo(), !q().notifyTarget)) {
      Y("Install the Companion app on your phone first");
      return;
    }
    q().notifyOn = e, On(), await Yi() ? (Me(), Y(e ? "Check-in notifications on" : "Check-in notifications off")) : (q().notifyOn = !e, On());
  }), Gn.addEventListener("change", () => {
    ye("notifyTarget", Gn.value), q().notifyOn && Yi();
  }), [Wi, Vi].forEach((e) => e.addEventListener("change", () => {
    On(), q().notifyOn && Yi();
  })), fo(), On();
  let Ui = null;
  function ns() {
    Ui || (Ui = setTimeout(() => {
      Ui = null, ze();
    }, 3e4));
  }
  return {
    updateStates(e) {
      const t = !be || be[re.weather] !== e[re.weather];
      be = e, oo(e), uo(e), so(e), mo(), t && Nt(), Date.now() - lo > 60 * 60 * 1e3 && co(), ns();
    },
    applyRemoteData(e) {
      if (e && (Array.isArray(e.history) && (I.history = e.history, at()), Array.isArray(e.history) && ze(), Array.isArray(e.checkins) && (I.checkins = e.checkins.map(na), Qe(), Ln(), Kt(), at(), ze()), e.profiles && !pe.classList.contains("open") && !Ne)) {
        const t = ta(e);
        Object.keys(R).forEach((n) => delete R[n]), Object.assign(R, t.profiles), I.order = t.order, R[F] || (F = I.order[0]), aa(), Re(F);
      }
    },
    suspend() {
      Z = !1;
    },
    resume() {
      Z || (Z = !0, ht || (ht = requestAnimationFrame(Nn)), bt || (bt = requestAnimationFrame(Fn)), sn(x.querySelector(".tab.active"), !1));
    }
  };
}
const ds = "0.30.0", Ki = "move_assistant", ls = "move_assistant", ko = "move_assistant_checkin_reminder";
function cs() {
  if (document.getElementById("move-assistant-inter")) return;
  const x = document.createElement("link");
  x.id = "move-assistant-inter", x.rel = "stylesheet", x.href = "https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600&family=Inter:ital,wght@0,400;0,500;0,600;0,700;0,800;1,500&display=swap", document.head.appendChild(x);
}
class ps extends HTMLElement {
  setConfig(w) {
    this._config = w || {};
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
  set hass(w) {
    const a = !this._hass;
    if (this._hass = w, a) {
      this._init();
      return;
    }
    this._app && w.states !== this._lastStates && (this._lastStates = w.states, this._app.updateStates(w.states));
  }
  connectedCallback() {
    var w;
    (w = this._app) == null || w.resume();
  }
  disconnectedCallback() {
    var w;
    (w = this._app) == null || w.suspend();
  }
  async _init() {
    cs();
    const w = this.shadowRoot || this.attachShadow({ mode: "open" });
    w.innerHTML = `<style>${os}</style>${rs}`;
    const a = w.getElementById("app");
    a.style.opacity = "0";
    let K = null;
    try {
      const N = await this._hass.callWS({
        type: "frontend/get_user_data",
        key: Ki
      });
      K = (N == null ? void 0 : N.value) ?? null;
    } catch {
    }
    this._lastSaved = JSON.stringify(K), this._app = ss(w, {
      data: K,
      save: (N) => this._save(N),
      fire: (N, Z) => this._fire(N, Z),
      ws: (N) => this._hass.callWS(N),
      subscribe: (N, Z) => {
        var Pt, Dt;
        return (Dt = (Pt = this._hass) == null ? void 0 : Pt.connection) != null && Dt.subscribeMessage ? this._hass.connection.subscribeMessage(Z, N) : Promise.reject(new Error("no connection"));
      },
      notifyServices: () => {
        var N, Z;
        return Object.keys(((Z = (N = this._hass) == null ? void 0 : N.services) == null ? void 0 : Z.notify) || {}).sort();
      },
      setReminderAutomation: (N) => this._setReminderAutomation(N),
      setLight: (N) => this.classList.toggle("lightBody", N),
      fullscreenSupported: !!(this.requestFullscreen || this.webkitRequestFullscreen),
      toggleFullscreen: () => this._toggleFullscreen()
    }), this._lastStates = this._hass.states, this._app.updateStates(this._hass.states), this.isConnected || this._app.suspend(), a.style.transition = "opacity .2s ease", a.style.opacity = "", this._subscribe();
  }
  _subscribe() {
    var a;
    const w = (a = this._hass) == null ? void 0 : a.connection;
    w != null && w.subscribeMessage && w.subscribeMessage(
      (K) => {
        var Z;
        const N = JSON.stringify((K == null ? void 0 : K.value) ?? null);
        N === this._lastSaved || N === this._pendingJson || (this._lastSaved = N, (Z = this._app) == null || Z.applyRemoteData(K.value));
      },
      { type: "frontend/subscribe_user_data", key: Ki }
    ).catch(() => {
    });
  }
  _save(w) {
    this._pendingJson = JSON.stringify(w), clearTimeout(this._saveTimer), this._saveTimer = setTimeout(async () => {
      const a = this._pendingJson;
      try {
        await this._hass.callWS({
          type: "frontend/set_user_data",
          key: Ki,
          value: JSON.parse(a)
        }), this._lastSaved = a;
      } catch {
        this._toast("Couldn't save to Home Assistant");
      }
    }, 400);
  }
  _fire(w, a = {}) {
    var K, N;
    ((K = this._config) == null ? void 0 : K.events) !== !1 && ((N = this._hass) == null || N.callWS({
      type: "fire_event",
      event_type: ls,
      event_data: { action: w, ...a }
    }).catch(() => {
    }));
  }
  // Keeps one Home Assistant automation in sync with the check-in times.
  // Passing null removes it.
  async _setReminderAutomation(w) {
    const a = `config/automation/config/${ko}`;
    if (!w) {
      try {
        await this._hass.callApi("DELETE", a);
      } catch (Z) {
        if ((Z == null ? void 0 : Z.status_code) !== 404 && (Z == null ? void 0 : Z.status) !== 404) throw Z;
      }
      return;
    }
    const K = (Z) => `${Z}:00`, N = window.location.pathname;
    await this._hass.callApi("POST", a, {
      id: ko,
      alias: "Move Assistant check-in reminder",
      description: "Created by Move Assistant. Change it in Move Assistant → Settings → Check-in.",
      mode: "single",
      triggers: [
        { trigger: "time", at: K(w.times.morning), id: "morning" },
        { trigger: "time", at: K(w.times.evening), id: "evening" }
      ],
      conditions: [],
      actions: [
        {
          action: `notify.${w.target}`,
          data: {
            title: "Move Assistant",
            message: "{{ 'Morning' if trigger.id == 'morning' else 'Evening' }} check-in is ready",
            data: { url: N, clickAction: N }
          }
        }
      ]
    });
  }
  _toggleFullscreen() {
    const w = document;
    if (w.fullscreenElement || w.webkitFullscreenElement) {
      (w.exitFullscreen || w.webkitExitFullscreen).call(w);
      return;
    }
    const a = this.requestFullscreen || this.webkitRequestFullscreen;
    Promise.resolve(a.call(this)).catch(
      () => this._toast("Full screen isn't available here")
    );
  }
  _toast(w) {
    var K;
    const a = (K = this.shadowRoot) == null ? void 0 : K.getElementById("toast");
    a && (a.textContent = w, a.classList.add("show"), setTimeout(() => a.classList.remove("show"), 2600));
  }
}
customElements.get("move-assistant-card") || (customElements.define("move-assistant-card", ps), window.customCards = window.customCards || [], window.customCards.push({
  type: "move-assistant-card",
  name: "Move Assistant",
  description: "Guided movement timer with your Home Assistant activity data.",
  preview: !1
}), console.info(`%c MOVE ASSISTANT %c ${ds} `, "background:#D0FF00;color:#090909;font-weight:700", ""));
