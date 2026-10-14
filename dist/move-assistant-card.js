const Ia = ':host{display:flex;flex-direction:column;min-height:calc(100dvh - var(--header-height,0px));position:relative;background:#050505;color-scheme:dark;--bg:#050505;--page:#090909;--card:#1d1d1d;--card2:#242424;--muted:#969696;--text:#f4f4f4;--line:#3f3f3f;--lineb:#252525;--r:36px;--gap:20px}*{box-sizing:border-box}#app{color:var(--text);font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif;transition:background .25s ease,color .25s ease;-webkit-font-smoothing:antialiased}[hidden]{display:none!important}button,input{font:inherit}#app{flex:1;display:flex;flex-direction:column;width:100%;margin:0;padding:0;background:var(--bg);text-align:left}.shell{flex:1;display:flex;flex-direction:column;position:relative;width:100%;background:var(--page);border-radius:0;overflow:visible;transition:background .28s ease}#app.resting .shell{background:#1f7a4d}#app.paused .shell{background:var(--primary)}#app.light.paused .shell{background:color-mix(in srgb,var(--primary) 55%,white)}#app.light{--bg:#EEEDED;--page:#EEEDED;--card:rgba(255,255,255,.8);--card2:rgba(255,255,255,.8);--muted:#222222;--text:#222222;--line:#ffffff;--lineb:#ffffff}#app.light,#app.light *{color:#222!important}#app.light .pill{background:transparent;color:#222!important;border:0}#app.light .tab,#app.light .back,#app.light .navBtn,#app.light .primary,#app.light .themeBtn{background:#ffffffe0;color:#222!important;border-color:#fff}#app.light .holdEnd{background:#ffffffe0;border:.32px solid #fff;text-decoration:none}#app.light .energyBtn,#app.light .activityRow,#app.light .integration,#app.light .toggleRow,#app.light .weekChip,#app.light .sourceTag,#app.light .timeTile,#app.light .moveRow,#app.light .routineSummary,#app.light .workoutPanel{background:#fffc;color:#222!important}#app.light .timerCard,#app.light .movementCard,#app.light .nextCard{background:#fffc}#app.light .activityRow:nth-child(1) .activityRowIcon{background:var(--primary-tint);color:var(--primary-ink)!important}#app.light .activityRow:nth-child(2) .activityRowIcon{background:#ffe8c8;color:#c8741f!important}#app.light .activityRow:nth-child(3) .activityRowIcon{background:#d9f4e6;color:#2e8b63!important}#app.light .activityIcon{background:#e8e1ff;color:#7859c9!important}#app.light .energyBtn{color:#222!important;background:#ffffffb8}#app.light .energyBtn:hover,#app.light .energyBtn:focus-visible,#app.light .energyBtn.selected{background:color-mix(in srgb,var(--feeling-color) 34%,white);color:#222!important}:host(.lightBody){background:#eeeded;color-scheme:light}#app.light,#app.light .shell{background:#eeeded}#app.light .modal{background:#fffffff0;border-color:#fff}#app.light .modalStatic{background:#fffffff0;border-bottom-color:#fff}#app.light .exerciseScroller{background:transparent;border-color:#ffffffe6}#app.light .addInput,#app.light .editNameInput{background:#ffffffeb;color:#222!important;border-color:#fff}#app.light .rangeTrack{background:#d8d6d6;border-color:#fff}#app.light .rangeFill{background:color-mix(in srgb,var(--primary) 45%,white)}#app.light .timerCard,#app.light .movementCard,#app.light .upcomingTile{background:#fffc;border-color:#fff}#app.light .fill{background:color-mix(in srgb,var(--primary) 30%,white)}#app.light .progress{background:transparent}#app.light .progressSegment{background:#c8c6c6}#app.light .progressSegment.active:after{background:var(--primary)}#app.light .progressSegment.done{background:transparent;opacity:0}#app.light .sourceTag,#app.light .activityRow,#app.light .weekChip,#app.light .integration,#app.light .toggleRow,#app.light .moveRow,#app.light .timeTile,#app.light .routineSummary{border-color:#fff}#app.light .countdown{background:#eeeded}#app.light .toast{background:#222;color:#eeeded!important}#app.light.resting .shell{background:#7dbb98}.view{display:none;width:100%;max-width:1184px;margin:0 auto;padding:22px 22px 76.8px}.view.active{display:block;flex:1 0 auto}.card,.panel,.tile{position:relative;background:var(--card);border-radius:36px;padding:22px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.grid{display:grid;grid-template-columns:repeat(12,minmax(0,1fr));gap:16px}.eyebrow{text-transform:uppercase;color:var(--muted)}.sub{color:var(--muted);margin-top:6.4px}.pill,.primary,.navBtn,.tab,.back,.hideBtn,.addBtn{cursor:pointer}.pill{min-height:0;padding:3.2px 0;border:0;border-radius:0;background:transparent;color:var(--text);text-decoration-line:underline;text-decoration-thickness:.8px;text-underline-offset:3.2px}.tab,.back{border-radius:799.2px;min-height:41.6px;padding:0 16px;background:#171717;border:.32px solid var(--line);color:#fff}.primary{border-radius:799.2px;min-height:41.6px;padding:0 17.6px;border:0;background:#f2f2f2;color:#090909}.topbar{display:flex;justify-content:space-between;gap:16px;align-items:flex-start;margin-bottom:19.2px}.activityCard,.weekly{grid-column:span 6}.energySection{grid-column:span 12;margin-top:16px}.activityCard,.weekly{min-height:288px}.wellness{width:100%}.sourceTag{display:inline-flex;margin-top:11.2px;padding:6.4px 9.6px;border-radius:799.2px;background:#292929;color:#cfcfcf}.workoutFooter{display:flex;justify-content:space-between;align-items:end;gap:22.4px;flex-wrap:wrap;margin-top:22.4px;width:100%;box-sizing:border-box}.workoutGallery{grid-column:span 12;display:flex;gap:16px;height:288px;overflow:hidden}.workoutPanel{position:relative;height:288px;flex:1 1 72px;min-width:70.4px;background:var(--card);border-radius:28.8px;padding:22.4px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);overflow:hidden;box-sizing:border-box;transition:flex .32s ease;cursor:pointer}.workoutPanel.active{flex:7 1 0;min-width:0;cursor:default}.workoutPanel.addPanel{flex:0 0 73.6px;min-width:73.6px;display:flex;align-items:center;justify-content:center;padding:14.4px}.workoutPanel{--edge-proximity:0;--cursor-angle:45deg;--edge-sensitivity:36;--color-sensitivity:56;--cone-spread:25;--fill-opacity:.18;--glow-color:hsl(199deg 97% 68% / 100%);--glow-color-60:hsl(199deg 97% 68% / 60%);--glow-color-50:hsl(199deg 97% 68% / 50%);--glow-color-40:hsl(199deg 97% 68% / 40%);--glow-color-30:hsl(199deg 97% 68% / 30%);--glow-color-20:hsl(199deg 97% 68% / 20%);--glow-color-10:hsl(199deg 97% 68% / 10%);--gradient-one:radial-gradient(at 80% 55%,#c084fc 0px,transparent 50%);--gradient-two:radial-gradient(at 69% 34%,#f472b6 0px,transparent 50%);--gradient-three:radial-gradient(at 8% 6%,#38bdf8 0px,transparent 50%);--gradient-four:radial-gradient(at 41% 38%,#c084fc 0px,transparent 50%);--gradient-five:radial-gradient(at 86% 85%,#f472b6 0px,transparent 50%);--gradient-six:radial-gradient(at 82% 18%,#38bdf8 0px,transparent 50%);--gradient-seven:radial-gradient(at 51% 4%,#f472b6 0px,transparent 50%);isolation:isolate}.workoutPanel:before,.workoutPanel:after,.workoutPanel>.edgeLight{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:28.8px;pointer-events:none;transition:opacity .18s ease-out}.workoutPanel:before{z-index:2;border:.8px solid transparent;background:linear-gradient(var(--card) 0 100%) padding-box,linear-gradient(#fff0 0,#fff0) border-box,var(--gradient-one) border-box,var(--gradient-two) border-box,var(--gradient-three) border-box,var(--gradient-four) border-box,var(--gradient-five) border-box,var(--gradient-six) border-box,var(--gradient-seven) border-box;opacity:clamp(0,calc(.72 * (var(--edge-proximity) - var(--color-sensitivity)) / (100 - var(--color-sensitivity))),.72);-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,black calc(var(--cone-spread) * 1%),transparent calc((var(--cone-spread) + 15) * 1%),transparent calc((100 - var(--cone-spread) - 15) * 1%),black calc((100 - var(--cone-spread)) * 1%));mask-image:conic-gradient(from var(--cursor-angle) at center,black calc(var(--cone-spread) * 1%),transparent calc((var(--cone-spread) + 15) * 1%),transparent calc((100 - var(--cone-spread) - 15) * 1%),black calc((100 - var(--cone-spread)) * 1%))}.workoutPanel:after{z-index:1;border:.8px solid transparent;background:var(--gradient-one) padding-box,var(--gradient-two) padding-box,var(--gradient-three) padding-box,var(--gradient-four) padding-box,var(--gradient-five) padding-box,var(--gradient-six) padding-box,var(--gradient-seven) padding-box;opacity:clamp(0,calc(var(--fill-opacity) * (var(--edge-proximity) - var(--color-sensitivity)) / (100 - var(--color-sensitivity))),.18);mix-blend-mode:soft-light;-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,transparent 5%,black 15%,black 85%,transparent 95%);mask-image:conic-gradient(from var(--cursor-angle) at center,transparent 5%,black 15%,black 85%,transparent 95%)}.workoutPanel>.edgeLight{top:-19.2px;right:-19.2px;bottom:-19.2px;left:-19.2px;z-index:3;opacity:clamp(0,calc(.62 * (var(--edge-proximity) - var(--edge-sensitivity)) / (100 - var(--edge-sensitivity))),.62);mix-blend-mode:plus-lighter;-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,black 2.5%,transparent 10%,transparent 90%,black 97.5%);mask-image:conic-gradient(from var(--cursor-angle) at center,black 2.5%,transparent 10%,transparent 90%,black 97.5%)}.workoutPanel>.edgeLight:before{content:"";position:absolute;top:19.2px;right:19.2px;bottom:19.2px;left:19.2px;border-radius:28.8px;box-shadow:inset 0 0 0 .8px var(--glow-color-60),inset 0 0 2.4px 0 var(--glow-color-40),inset 0 0 6.4px 0 var(--glow-color-30),inset 0 0 12.8px 0 var(--glow-color-20),0 0 2.4px 0 var(--glow-color-40),0 0 6.4px 0 var(--glow-color-30),0 0 12.8px 0 var(--glow-color-20),0 0 22.4px 1.6px var(--glow-color-10)}.workoutPanel:not(.borderGlowActive):before,.workoutPanel:not(.borderGlowActive):after,.workoutPanel:not(.borderGlowActive)>.edgeLight{opacity:0;transition:opacity .35s ease-out}#app.light .workoutPanel{--glow-color:hsl(199deg 97% 48% / 100%);--glow-color-50:hsl(199deg 97% 48% / 50%);--glow-color-40:hsl(199deg 97% 48% / 40%);--glow-color-30:hsl(199deg 97% 48% / 30%);--glow-color-20:hsl(199deg 97% 48% / 20%);--glow-color-10:hsl(199deg 97% 48% / 10%)}.workoutPanel:not(.active):not(.addPanel) .panelExpanded{opacity:0;filter:blur(8px);pointer-events:none}.workoutPanel:not(.active):not(.addPanel) .panelCollapsed{opacity:1;filter:blur(0)}.workoutPanel.active .panelExpanded{opacity:1;filter:blur(0);pointer-events:auto}.workoutPanel.active .panelCollapsed{opacity:0;filter:blur(6.4px);pointer-events:none}.panelExpanded{position:relative;z-index:4;width:100%;height:100%;min-width:0;box-sizing:border-box;display:flex;flex-direction:column;justify-content:space-between;transition:opacity .22s ease,filter .22s ease}.panelCollapsed{position:absolute;top:0;right:0;bottom:0;left:0;z-index:4;display:flex;align-items:center;justify-content:center;opacity:0;filter:blur(6.4px);transition:opacity .22s ease,filter .22s ease}.panelCollapsedText{writing-mode:vertical-rl;transform:rotate(180deg);white-space:nowrap}.workoutPanelTop{display:flex;justify-content:space-between;align-items:flex-start;gap:22.4px;width:100%;min-width:0;box-sizing:border-box}.workoutPanelActions{display:flex;gap:22.4px;flex-wrap:wrap;align-items:center;justify-content:flex-end;margin-left:auto}.startWorkoutBtn{background:var(--primary)!important;color:#090909!important}.startWorkoutBtn:hover{filter:brightness(1.04)}#app.light .startWorkoutBtn{background:var(--primary)!important;color:#090909!important}.addPanelPlus{position:relative;z-index:4;font-size:27.2px;line-height:1}.addPanelLabel{position:absolute;z-index:4;bottom:16px;writing-mode:vertical-rl;transform:rotate(180deg);color:var(--muted)}@media (max-height:820px) and (min-width:621px){.modalStatic{padding:17.6px 22.4px}.timeTile{min-height:124.8px}}@media (max-width:900px){.weekCopy{white-space:normal}.workoutGallery{overflow-x:auto;scroll-snap-type:x mandatory;padding-bottom:3.2px}.workoutPanel,.workoutPanel.active{height:288px;flex:0 0 min(68.8vw,544px);min-width:min(68.8vw,544px);scroll-snap-align:start}.workoutPanel.addPanel{flex-basis:80px;min-width:80px}.panelCollapsed{display:none}}.moveActions{display:flex;gap:22.4px;flex-wrap:wrap}.energyFloat{padding:22.4px;background:transparent;border:0}#app.light .energyFloat{background:transparent}.energyScale{display:grid;grid-template-columns:repeat(6,minmax(0,1fr));gap:9.6px;margin-top:17.6px}.energyBtn{--feeling-color:#8f8f8f;--feeling-glow:rgba(255,255,255,.14);position:relative;isolation:isolate;overflow:hidden;width:100%;min-height:43.2px;padding:0 9.6px;white-space:nowrap;border-radius:12.8px;background:#282828;border:.32px solid var(--line);color:#fff;cursor:pointer;transition:color .18s ease,border-color .18s ease,background .18s ease}.energyBtn>span{position:relative;z-index:2}.energyBtn:before{content:"";position:absolute;top:-18%;right:-18%;bottom:-18%;left:-18%;z-index:-2;opacity:0;background:radial-gradient(ellipse at var(--feel-x,50%) var(--feel-y,50%),color-mix(in srgb,var(--feeling-color) 88%,transparent) 0%,color-mix(in srgb,var(--feeling-color) 54%,transparent) 34%,transparent 72%);transform:scale(.82) skew(-3deg);filter:saturate(1.08) blur(.8px);transition:opacity .18s ease,transform .28s cubic-bezier(.2,.8,.2,1)}.energyBtn:after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;z-index:-1;opacity:0;pointer-events:none;background:repeating-linear-gradient(to bottom,rgba(255,255,255,.07) 0,rgba(255,255,255,.07) .8px,transparent .8px,transparent 3.2px),linear-gradient(90deg,transparent 0%,color-mix(in srgb,var(--feeling-color) 34%,transparent) var(--feel-x,50%),transparent 100%);mix-blend-mode:screen}.energyBtn:hover:before,.energyBtn:focus-visible:before,.energyBtn.selected:before{opacity:.92;transform:translate(var(--feel-shift-x,0px),var(--feel-shift-y,0px)) scale(1.08) skew(2deg);animation:feelingWarp 1.45s ease-in-out infinite alternate}.energyBtn:hover:after,.energyBtn:focus-visible:after,.energyBtn.selected:after{opacity:.55;animation:feelingScan .9s linear infinite}.energyBtn:hover,.energyBtn:focus-visible,.energyBtn.selected{background:color-mix(in srgb,var(--feeling-color) 42%,#171717);border-color:color-mix(in srgb,var(--feeling-color) 72%,#ffffff 10%);color:#fff}.energyBtn.selected{box-shadow:inset 0 0 0 .8px color-mix(in srgb,var(--feeling-color) 58%,transparent),0 0 14.4px color-mix(in srgb,var(--feeling-color) 24%,transparent)}.energyBtn[data-energy=Drained]{--feeling-color:#6E63A8}.energyBtn[data-energy=Low]{--feeling-color:#5878A8}.energyBtn[data-energy=Okay]{--feeling-color:#6F8B8A}.energyBtn[data-energy=Good]{--feeling-color:#5F9B72}.energyBtn[data-energy=Energised]{--feeling-color:#D5A53E}.energyBtn[data-energy=Great]{--feeling-color:#D56B54}@keyframes feelingWarp{0%{transform:scale(1.03) skew(-2deg) translate(-1.5%);filter:saturate(1.02) blur(.8px)}50%{transform:scale(1.12) skew(1deg) translate(1%);filter:saturate(1.22) blur(1.5px)}to{transform:scale(1.06) skew(3deg) translate(-.5%);filter:saturate(1.1) blur(.6px)}}@keyframes feelingScan{0%{background-position:0 0,-80% 0}to{background-position:0 8px,180% 0}}@media (prefers-reduced-motion: reduce){.energyBtn:before,.energyBtn:after{animation:none!important}}.energyHistory{display:grid;gap:6.4px;margin-top:9.6px}.energyLog{display:flex;justify-content:space-between;gap:9.6px;padding:8px 9.6px;border-radius:16px;background:#252525}.energyLog span:last-child{color:#999}.tempoExperiment{margin-top:14.4px;padding-top:16px;border-top:.32px solid var(--line)}.tempoExperimentHead{display:flex;justify-content:space-between;align-items:flex-start;gap:16px;margin-bottom:12.8px}.tempoEstimate{white-space:nowrap}.tempoQuad{position:relative;width:min(288px,100%);aspect-ratio:1/1;border-radius:28.8px;background:#ffffff06;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);overflow:hidden;touch-action:none;cursor:crosshair}.tempoCross{position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none;background:linear-gradient(to right,transparent calc(50% - .4px),rgba(255,255,255,.12) 50%,transparent calc(50% + .4px)),linear-gradient(to bottom,transparent calc(50% - .4px),rgba(255,255,255,.12) 50%,transparent calc(50% + .4px))}.tempoDot{position:absolute;left:50%;top:50%;width:17.6px;height:17.6px;border-radius:50%;background:var(--text);transform:translate(-50%,-50%);pointer-events:none;box-shadow:0 0 0 4.8px #ffffff12}.tempoPole{position:absolute;pointer-events:none;color:var(--muted)}.tempoFast{top:9.6px;left:50%;transform:translate(-50%)}.tempoSlow{bottom:9.6px;left:50%;transform:translate(-50%)}.tempoHard{right:9.6px;top:50%;transform:translateY(-50%)}.tempoLow{left:9.6px;top:50%;transform:translateY(-50%)}.tempoReadout{margin-top:9.6px;color:var(--muted)}.tempoRevealRow{margin-top:11.2px}.tempoRevealBtn{color:#b8bcc6;text-decoration-color:#6d7480}.editTempoExperiment{margin-top:11.2px}.editTempoExperiment[hidden]{display:none}.testingZone{position:relative;overflow:hidden;border-radius:22.4px;background:#202226;border:.8px solid #4a4f58;box-shadow:none}.testingZoneInner{position:relative;padding:19.2px;background:linear-gradient(rgba(176,186,199,.045) .8px,transparent .8px),linear-gradient(90deg,rgba(176,186,199,.045) .8px,transparent .8px),#202226;background-size:16px 16px}.testingZoneTitleBlock{max-width:608px;margin-bottom:19.2px}.testingZoneTitleRow{display:flex;justify-content:space-between;align-items:center;gap:16px}.testingZoneTitleRow strong{color:#d6d9df}.testingZone .tempoEstimate{color:#aeb4bf}.testingZoneExplanation{margin:8px 0 0;color:#9ea5b0;text-align:left}.testingZoneLayout{display:grid;grid-template-columns:minmax(224px,288px) minmax(0,1fr);grid-template-areas:"controller feedback";gap:25.6px;align-items:start}.testingFeedbackForm{grid-area:feedback;display:grid;gap:14.4px;min-width:0;padding:16px;border:.32px solid var(--line);border-radius:16px;background:#252525}.testingFeedbackHeading{color:#d6d9df}.testingFeedbackField{display:grid;gap:6.4px;color:#9ea5b0}.testingFeedbackField select,.testingFeedbackField textarea{width:100%;border:.32px solid var(--line);background:#171717;color:#d6d9df;border-radius:11.2px;padding:8px 9.6px;font:inherit}.testingFeedbackField textarea{resize:vertical;min-height:65.6px}.testingRating{display:grid;grid-template-columns:repeat(5,1fr);gap:4.8px}.testingRating button{min-height:30.4px;border-radius:9.6px;border:.32px solid var(--line);background:#171717;color:#c7ccd5;cursor:pointer}.testingRating button.selected{border-color:#c7ccd5;background:#343434}.testingFeedbackSubmit{justify-self:start;min-height:33.6px;padding:0 12.8px;border-radius:11.2px;border:0;background:#ffffffe0;color:#111;cursor:pointer}.testingZoneControllerWrap{grid-area:controller;display:flex;flex-direction:column;align-items:center;justify-content:flex-start}.tempoQuadFrame{width:min(256px,100%);aspect-ratio:1/1;padding:0;background:linear-gradient(rgba(176,186,199,.075) .8px,transparent .8px),linear-gradient(90deg,rgba(176,186,199,.075) .8px,transparent .8px),#202226;background-size:16px 16px,16px 16px,auto;border-radius:16px}.testingZone .tempoQuad{width:100%;height:100%;border-radius:16px;background:#202226;border:.8px solid #5a606a;box-shadow:none}.testingZone .tempoCross{background:linear-gradient(to right,transparent calc(50% - .4px),rgba(176,186,199,.2) 50%,transparent calc(50% + .4px)),linear-gradient(to bottom,transparent calc(50% - .4px),rgba(176,186,199,.2) 50%,transparent calc(50% + .4px))}.testingZone .tempoDot{width:14.4px;height:14.4px;background:transparent;border:.8px solid #c4cad4;box-shadow:0 0 0 3.2px #c4cad40d}.testingZone .tempoPole{color:#8e96a2}.testingZone .tempoReadout{width:min(256px,100%);color:#9ea5b0;text-align:center;margin-top:9.6px}.testingZone button,.testingZone input,.testingZone select,.testingZone textarea{transition:opacity .14s ease,border-color .14s ease,color .14s ease,background .14s ease}.testingZone button:hover,.testingZone button:focus-visible{filter:none;opacity:.88}@media (max-width:900px){.testingZoneLayout{grid-template-columns:1fr;grid-template-areas:"controller" "feedback"}}#app.light .testingZone{background:#202226;border-color:#4a4f58}#app.light .testingZoneInner{background:linear-gradient(rgba(176,186,199,.045) .8px,transparent .8px),linear-gradient(90deg,rgba(176,186,199,.045) .8px,transparent .8px),#202226}#app.light .testingZone,#app.light .testingZone *{color:#d6d9df!important}#app.light .testingZone .testingFeedbackField,#app.light .testingZone .testingZoneExplanation,#app.light .testingZone .tempoReadout{color:#9ea5b0!important}#app.light .testingZone .tempoQuad{background:#202226;border-color:#5a606a}#app.light .testingZone .tempoDot{background:transparent;border-color:#c4cad4}#app.light .testingFeedbackForm{background:#2a2a2a;border-color:#4a4f58}#app.light .testingFeedbackField select,#app.light .testingFeedbackField textarea,#app.light .testingRating button{background:#171717;border-color:#4a4f58}#app.light .testingRating button.selected{background:#343434}#app.light .testingFeedbackSubmit{background:#ffffffe0;color:#111!important}#app.light .tempoQuad{background:#ffffff7a;border-color:#fff}#app.light .tempoDot{background:#222;box-shadow:0 0 0 4.8px #0000000d}.activityHeader{display:flex;align-items:center;gap:11.2px;margin-bottom:16px}.activityIcon{width:35.2px;height:35.2px;border-radius:13.6px;background:#2e2e2e;display:grid;place-items:center;font-size:16px}.activityRows{display:grid;gap:9.6px}.activityRow{display:grid;grid-template-columns:43.2px minmax(0,1fr);align-items:center;gap:11.2px;background:#292929;border-radius:24px;padding:12px 14px}.activityRowIcon{width:43.2px;height:43.2px;border-radius:16px;background:#3a3a3a;display:grid;place-items:center;font-size:16px}.activityRowMeta{color:#b4b4b4;margin-top:2.4px}.toast{position:absolute;right:20.8px;top:20.8px;z-index:60;background:#efefef;color:#090909;border-radius:799.2px;padding:8.8px 12.8px;opacity:0;transform:translateY(-6.4px);pointer-events:none;transition:opacity .18s ease,transform .18s ease}.toast.show{opacity:1;transform:none}.weekHero{display:block}.weekCopy{color:var(--muted);margin-top:9.6px;max-width:none;white-space:nowrap}.weekChips{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:8px;margin-top:19.2px}.weekChip{background:#292929;border-radius:12.8px;min-height:60.8px;padding:9.6px 11.2px;display:flex;flex-direction:column;justify-content:space-between;gap:6.4px}.weekChipTop{display:flex;justify-content:space-between;align-items:center;gap:6.4px}.weekChipMeta{color:#888}.weekTick{font-size:11.2px;font-weight:800;line-height:1}.weekChip.total{background:#242424}.workoutSurface{position:relative;overflow:hidden;isolation:isolate}.workoutContent{position:relative;z-index:2}.pixelTrailCanvas{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;z-index:1;pointer-events:none}#app.light .pixelTrailCanvas{opacity:.46}.sessionHead{display:flex;justify-content:space-between;align-items:flex-start;gap:16px}.sessionActions{display:flex;gap:22.4px;align-items:center;flex-wrap:wrap;justify-content:flex-end}.holdEnd{position:relative;overflow:hidden;min-width:110.4px;min-height:41.6px;padding:0 16px;border-radius:799.2px;border:.32px solid var(--line);background:#171717;text-decoration:none;user-select:none;-webkit-user-select:none;touch-action:none}.holdEndFill{position:absolute;inset:0 auto 0 0;width:0;background:#efefef;pointer-events:none}.holdEndLabel{position:relative;z-index:1;mix-blend-mode:difference;color:#fff}.holdEnd.holding{border-color:#666}.exerciseTitle{margin-top:4.8px;color:var(--secondary)}.meta{color:#969696;margin-top:4.8px}.progress{height:46.4px;padding:0;background:transparent;border-radius:17.6px;display:flex;gap:3.2px;margin-top:19.2px;overflow:hidden}.progressSegment{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:0;padding:0;display:block;flex:1;min-width:0;background:#3f3f3f;border-radius:17.6px;position:relative;overflow:hidden;cursor:default}.progressSegment:after{content:"";position:absolute;inset:0 auto 0 0;width:0;background:#efefef;transition:width .2s linear}.progressSegment.done{background:transparent;opacity:0;pointer-events:none}.progressSegment.done:after{display:none}.progressSegment.active:after{width:var(--segment-progress,0%)}#app.resting .progressSegment:not(.done):not(.active),#app.paused .progressSegment:not(.done):not(.active){background:#fff}#app.light.resting .progressSegment:not(.done):not(.active),#app.light.paused .progressSegment:not(.done):not(.active){background:#fff}.progressSegment.rewindable{cursor:pointer}.progressSegment.rewindable:hover{filter:brightness(1.08)}.progressSegment:focus-visible{outline:1.6px solid var(--primary);outline-offset:-2.4px}.workGrid{display:grid;grid-template-columns:minmax(0,2fr) minmax(240px,1fr);gap:16px;margin-top:16px}.timerCard,.movementCard,.nextCard{position:relative;border-radius:28.8px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.timerCard{min-height:344px;background:#0d0d0d;overflow:hidden}.fill{position:absolute;inset:0 auto 0 0;width:100%;background:#f2f2f2;transition:width .2s linear}.digits{position:absolute;top:0;right:0;bottom:0;left:0;display:flex;align-items:center;justify-content:center;font-size:clamp(152px,22.4vw,312px);font-weight:850;letter-spacing:-.11em;color:#fff;mix-blend-mode:difference;font-variant-numeric:tabular-nums}.movementCard{background:#151515;min-height:344px;display:grid;place-items:center;padding:22.4px}.movementMark{font-size:16px;font-weight:760;color:#d5d5d5;text-align:center}.movementCard{overflow:hidden}.movementRippleCanvas{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;z-index:0}.movementMark{position:relative;z-index:2}.nextCard{background:#1d1d1d;padding:22.4px;display:flex;justify-content:space-between;align-items:center;gap:16px;min-height:116.8px}.nextIcon{width:52.8px;height:52.8px;border-radius:19.2px;background:#2d2d2d;display:grid;place-items:center;font-size:20.8px;flex:0 0 auto}.sectionLabel{margin:0 0 8px 22.4px}.moveSection{grid-column:span 12}.moveSection .workoutGallery{width:100%}.nextWrap{margin-top:16px}.nextLabel{margin:0 0 8px 22.4px}.nextCard{background:var(--card);padding:22.4px;display:flex;justify-content:space-between;align-items:center;gap:22.4px;min-height:86.4px;border-radius:28.8px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.nextMain{display:flex;align-items:center;gap:14.4px;min-width:0}.nextIcon{width:43.2px;height:43.2px;border-radius:12.8px;background:#2d2d2d;display:grid;place-items:center;font-size:16px;flex:0 0 auto}.sessionControlRow{display:flex;justify-content:flex-end;gap:22.4px;align-items:center;margin-top:16px}.nextActions{display:flex;gap:22.4px;align-items:center;flex:0 0 auto}.skipBtn{min-width:120px;min-height:41.6px;padding:0 14.4px;border:.8px solid var(--line);background:transparent;color:var(--text);text-decoration:none}.pause{min-width:120px;min-height:41.6px;padding:0 14.4px}#app.light .nextCard{background:#fffc;border-color:#fff}#app.light .nextIcon{background:#ffe6ef;color:#bd4b7a!important}#app.light .skipBtn{background:transparent;color:#222!important;border-color:#fff}.upcomingList{display:grid;gap:9.6px;margin-top:9.6px}.upcomingCard{--future-opacity:1;display:flex;align-items:center;justify-content:space-between;gap:22.4px;min-height:86.4px;padding:22.4px;border-radius:28.8px;background:var(--card);border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);opacity:var(--future-opacity);transition:opacity .22s ease}.upcomingCard:nth-child(-n+3){--future-opacity:1}.upcomingCard:nth-child(4){--future-opacity:.72}.upcomingCard:nth-child(5){--future-opacity:.48}.upcomingCard:nth-child(6){--future-opacity:.3}.upcomingCard:nth-child(n+7){--future-opacity:.16}.upcomingCard.sessionHidden{--future-opacity:.24!important;filter:saturate(.15)}.upcomingCard.sessionHidden .upcomingName{text-decoration:line-through}.upcomingCard.sessionHidden .upcomingIcon{opacity:.45}.upcomingCard.sessionHidden .upcomingMeta{opacity:.55}.upcomingInfo{display:flex;align-items:center;gap:14.4px;min-width:0}.upcomingIcon{width:43.2px;height:43.2px;flex:0 0 auto;border-radius:12.8px;background:#2d2d2d;display:grid;place-items:center;font-size:16px}.upcomingMeta{color:var(--muted);margin-top:4px}.skipSessionBtn{flex:0 0 auto;min-height:41.6px;padding:0 14.4px;border:.8px solid var(--line);background:transparent;color:var(--text)}#app.light .upcomingCard{background:#fffc;border-color:#fff}#app.light .upcomingIcon{background:var(--primary-tint);color:var(--primary-ink)!important}#app.light .skipSessionBtn{border-color:#fff;color:#222!important}@media (max-width:900px){.weekCopy{white-space:normal}.nextCard{align-items:flex-start;flex-direction:column}.sessionControlRow{width:100%}.skipBtn,.pause{flex:1;min-width:0}.upcomingCard{align-items:flex-start;flex-direction:column}.skipSessionBtn{width:100%}}.countdown{display:none;position:fixed;top:0;right:0;bottom:0;left:0;width:100vw;height:100dvh;background:#090909;z-index:300;align-items:center;justify-content:center;flex-direction:column;text-align:center;overflow:hidden}.countdown.active{display:flex}.pixelCanvas{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;display:block;z-index:1}.countdown:before{content:"";position:absolute;top:0;right:0;bottom:0;left:0;background:radial-gradient(circle at center,color-mix(in srgb,var(--primary) 16%,transparent),transparent 58%);pointer-events:none}.countNum{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);z-index:3}.countNum{font-size:clamp(144px,25.6vw,344px);font-weight:850;line-height:.75;letter-spacing:-.1em}.modalBackdrop{display:none;position:fixed;top:0;right:0;bottom:0;left:0;width:100vw;height:100dvh;z-index:145;background:#000000a8;padding:28px;box-sizing:border-box;align-items:center;justify-content:center}.modalBackdrop.open{display:flex}.modal{width:min(1184px,100%);height:100%;max-width:1184px;max-height:none;overflow:hidden;background:#202020;border-radius:28.8px;padding:0;display:flex;flex-direction:column;box-sizing:border-box;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.modalStatic{flex:0 0 auto;padding:22.4px;background:#202020;border-bottom:.32px solid #343434}.modalHead{display:flex;justify-content:space-between;align-items:flex-start;gap:16px;margin-bottom:12.8px}.modalHeaderActions{display:flex;gap:22.4px;align-items:center;flex:0 0 auto}.modalHead h2{margin:2.4px 0 0}.editNameRow{display:grid;gap:6.4px;margin-bottom:11.2px}.editNameLabel{color:var(--muted)}.editNameInput{min-height:46.4px;border-radius:17.6px;border:.32px solid var(--line);background:#151515;color:var(--text);padding:0 14.4px}#app.light .editNameInput{background:#ffffffe0;color:#222!important;border-color:#fff}.timeTiles{display:grid;grid-auto-flow:column;grid-auto-columns:minmax(0,1fr);gap:11.2px;margin-bottom:11.2px}.timeTile{background:#252525;min-height:148.8px;padding:16px;display:flex;flex-direction:column;justify-content:space-between}.timeHeader{display:flex;align-items:center;gap:14.4px}.timeIcon{width:46.4px;height:46.4px;border-radius:16px;background:#313131;display:grid;place-items:center;flex:0 0 auto;font-size:17.6px;font-weight:760}.timeCopy{min-width:0}.timeValue{color:#cfcfcf;margin-top:5.6px}.rangeTrack{height:46.4px;border-radius:17.6px;background:#151515;overflow:hidden;position:relative;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.rangeFill{position:absolute;inset:0 auto 0 0;background:#efefef;border-radius:17.6px 0 0 17.6px}.rangeInput{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;opacity:0;cursor:pointer}.exerciseScroller{min-height:0;overflow-y:auto;padding:3.2px 16px 17.6px 22.4px;border-top:.16px solid #303030;scrollbar-gutter:stable}.exerciseScroller::-webkit-scrollbar{width:6.4px}.exerciseScroller::-webkit-scrollbar-track{background:transparent}.exerciseScroller::-webkit-scrollbar-thumb{background:#4a4a4a;border-radius:799.2px}.sectionTitle{text-transform:uppercase;color:#999;margin:14.4px 0 8px}.moveList{display:grid;gap:8px}.moveRow{display:flex;justify-content:space-between;align-items:center;gap:22.4px;background:#2a2a2a;border-radius:20.8px;padding:22.4px}.moveRow.hidden{opacity:.46}.moveRow.hidden .moveItemName{text-decoration:line-through}.moveMeta{color:#999;margin-top:4px}.hideBtn{border-radius:799.2px;min-height:32px;padding:0 11.2px;border:.32px solid var(--line);background:#1b1b1b;color:#fff}.removeBtn{position:relative;overflow:hidden;border-radius:799.2px;min-height:32px;padding:0 11.2px;border:.32px solid var(--line);background:#1b1b1b;color:#fff;cursor:pointer}.removeFill{position:absolute;inset:0 auto 0 0;width:0;background:#d53d3d;pointer-events:none;transition:width 0s linear}.addRow{display:grid;grid-template-columns:1fr auto;gap:8px;margin-top:14.4px}.addInput{min-height:41.6px;border-radius:799.2px;border:.32px solid var(--line);background:#151515;color:#fff;padding:0 14.4px}.addBtn{border-radius:799.2px;min-height:41.6px;padding:0 14.4px;border:0;background:#efefef;color:#090909}.routineSummary{margin-top:14.4px;background:#171717;border-radius:20.8px;padding:12.8px 14.4px;color:#cfcfcf}.settingsHeader{display:flex;align-items:center;gap:12.8px;margin-bottom:24px}.back{width:46.4px;padding:0;font-size:24px}.tabs.rubberTabs{position:relative;display:inline-flex;gap:0;padding:3.2px;margin-bottom:17.6px;border-radius:12.8px;background:#171717;border:.32px solid var(--line);overflow:hidden}.rubberIndicator{position:absolute;top:3.2px;left:3.2px;height:calc(100% - 6.4px);width:0;border-radius:12.8px;background:#efefef;transition:left .34s cubic-bezier(.2,1.35,.4,1),width .34s cubic-bezier(.2,1.35,.4,1),transform .18s ease;transform-origin:center;z-index:0}.tabs.rubberTabs .tab{position:relative;z-index:1;min-height:41.6px;padding:0 16px;border:0;background:transparent;color:var(--text)}.tabs.rubberTabs .tab.active{color:#090909}#app.light .tabs.rubberTabs{background:#ffffffb3;border-color:#fff}#app.light .rubberIndicator{background:#222}#app.light .tabs.rubberTabs .tab.active{color:#fff!important}.settingsPane{display:none}.settingsPane.active{display:block}.integrationList,.toggleList{display:grid;gap:9.6px}.integration,.toggleRow{display:flex;justify-content:space-between;align-items:center;gap:14.4px;background:#282828;border-radius:22.4px;padding:14.4px 16px}.status{color:#999;margin-top:3.2px}.note{color:#999;line-height:1.5;max-width:688px}.switch{position:relative;width:46.4px;height:27.2px;border-radius:799.2px;background:#444;border:.32px solid var(--line);flex:0 0 auto;cursor:pointer}.switch:after{content:"";position:absolute;width:20.8px;height:20.8px;border-radius:799.2px;top:2.4px;left:2.4px;background:#ddd;transition:left .18s ease}.switch.on{background:#eee}.switch.on:after{left:22.4px;background:#111}.themeChoice{display:flex;gap:9.6px;flex-wrap:wrap;align-items:center;margin:0}.themeBtn{min-height:32px;padding:0 11.2px;border:.32px solid var(--line);background:#1b1b1b;color:var(--text);cursor:pointer}.themeBtn.active{background:#efefef;color:#090909}.settingsSelect{min-width:96px;min-height:32px;padding:0 27.2px 0 9.6px;border-radius:12.8px;border:.32px solid var(--line);background:#1b1b1b;color:var(--text);font:inherit}#app.light .settingsSelect{background:#ffffffe0;color:#222;border-color:#fff}.motionControlRow{align-items:center}.motionRangeWrap{display:flex;align-items:center;justify-content:flex-end;gap:9.6px;min-width:184px}.motionRangeWrap input{width:128px}.motionRangeWrap span{color:var(--muted);min-width:51.2px;text-align:right}#app.light .themeBtn.active{background:#222;color:#fff!important}.dangerText{color:#f77}.confirmBackdrop{display:none;position:fixed;top:0;right:0;bottom:0;left:0;z-index:80;padding:22.4px;background:#000000a8;align-items:center;justify-content:center}.confirmBackdrop.open{display:flex}.confirmCard{width:min(448px,100%);background:var(--card);border-radius:28.8px;padding:22.4px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.confirmActions{display:flex;justify-content:flex-end;align-items:center;gap:22.4px;margin-top:22.4px}.holdDelete{position:relative;overflow:hidden;min-width:88px;min-height:41.6px;padding:0 17.6px;border:.8px solid #8c2e2e;border-radius:12.8px;background:#311313;color:#fff;cursor:pointer}.holdDeleteFill{position:absolute;inset:0 auto 0 0;width:0;background:#d53d3d;pointer-events:none}.holdDeleteLabel{position:relative;z-index:1;color:#fff}#app.light .confirmCard{background:#fffffff0;border-color:#fff}#app.light .holdDelete{background:#f5dede;border-color:#e3a0a0;color:#222}.bottomNav{position:sticky;bottom:22.4px;display:flex;gap:22.4px;z-index:100;width:max-content;margin:-65.6px 0 0 22.4px}.navBtn{width:43.2px;height:43.2px;padding:0;border-radius:16px;background:#171717;border:.32px solid var(--line);color:#fff}.navBtn.active{background:#eee;color:#090909}@media (max-width:900px){.weekCopy{white-space:normal}.moveOption,.addMoveCard{flex-basis:144px}.weekHero{display:block}.grid{grid-template-columns:1fr}.moveSection,.activityCard,.weekly,.energySection{grid-column:auto}.workGrid{grid-template-columns:1fr}.timerCard,.movementCard{min-height:256px}.weekChips{grid-template-columns:repeat(4,minmax(0,1fr))}.timeTiles{grid-auto-flow:row;grid-template-columns:1fr}}@media (max-width:620px){.modal{width:100%;height:100%;max-height:100%}#app{padding:0}.shell{border-radius:0}.view{padding:14.4px 14.4px 75.2px}.card,.timerCard,.movementCard,.nextCard,.modal,.tile{border-radius:24px}.timerCard{min-height:224px}.digits{font-size:144px}.weekChips{grid-template-columns:repeat(2,minmax(0,1fr))}.modalBackdrop{padding:9.6px}.modal{height:100%}.modalStatic{padding:14.4px}.exerciseScroller{padding:3.2px 9.6px 14.4px 14.4px}.addRow{grid-template-columns:1fr}}button,.primary,.tab,.back,.navBtn,.themeBtn,.energyBtn,.hideBtn,.addBtn,.removeBtn,.skipBtn,.holdEnd,.switch,.editNameInput,.addInput,.rangeTrack,.progress,.progressSegment{border-radius:12px!important}.card,.panel,.tile,.workoutPanel,.timerCard,.movementCard,.nextCard,.modal{border-radius:36px}.movementCreatorLaunch{display:flex;gap:9.6px;align-items:center;margin:3.2px 0 14.4px}.movementCreatorOpen,.restAddBtn{min-height:35.2px;padding:0 12.8px;border-radius:12.8px;cursor:pointer}.movementCreatorOpen{border:0;background:#efefef;color:#090909}.restAddBtn{border:.32px solid var(--line);background:#1b1b1b;color:var(--text)}.movementCreator{position:relative;margin:0 0 14.4px;padding:19.2px 22.4px;border-radius:22.4px;background:#1d1d1d;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.movementCreator[hidden]{display:none}.movementCreatorHead{display:flex;align-items:center;justify-content:space-between;gap:16px;margin-bottom:17.6px}.movementCreatorHead h3{margin:0}.movementCreatorClose{position:static}.movementCreatorFields{display:grid;grid-template-columns:minmax(0,1.45fr) minmax(0,.85fr);gap:16px 19.2px}.movementCreatorFields[hidden]{display:none!important}.movementCreatorFields>label{display:grid;gap:6.4px;min-width:0;color:var(--text)}.movementTimingRow{grid-column:1/-1;display:grid;grid-template-columns:minmax(240px,352px) minmax(208px,1fr) auto;gap:17.6px;align-items:end}.durationStack{display:grid;gap:6.4px;color:var(--text)}.creatorDurationRow{display:grid;grid-template-columns:minmax(96px,1fr) minmax(104px,1fr);gap:12.8px;align-items:center}.creatorNumber{width:100%;min-width:0}.creatorUnitSelect{min-height:41.6px;width:100%;padding:0 11.2px;border-radius:12.8px;border:.32px solid var(--line);background:#151515;color:var(--text);font:inherit}.globalTimingToggle{display:flex!important;align-items:center;gap:8px!important;min-height:41.6px;cursor:pointer;color:var(--text)!important;white-space:nowrap}.globalTimingToggle input{position:absolute;opacity:0;pointer-events:none}.toggleTrack{position:relative;width:38.4px;height:22.4px;border-radius:799.2px;background:#484848;border:.32px solid var(--line);flex:0 0 auto;transition:background .16s ease}.toggleThumb{position:absolute;width:17.6px;height:17.6px;top:1.6px;left:1.6px;border-radius:50%;background:#a9a9a9;transition:left .16s ease,background .16s ease}.globalTimingToggle input:checked+.toggleTrack{background:#efefef}.globalTimingToggle input:checked+.toggleTrack .toggleThumb{left:17.6px;background:#111}.toggleLabel{color:#ddd}.creatorAddButton{min-width:97.6px;min-height:41.6px;align-self:end}#app.light .movementCreator{background:#ffffffdb;border-color:#fff}@media (max-width:900px){.movementCreatorFields{grid-template-columns:1fr}.movementTimingRow{grid-column:auto;grid-template-columns:1fr;align-items:stretch}.globalTimingToggle{min-height:35.2px}.creatorAddButton{width:100%}}.moveRow.restItem{background:#22252a}.moveKindBadge{display:inline-flex;margin-left:6.4px;padding:2.4px 5.6px;border:.8px solid #555b65;border-radius:799.2px;color:#9da5b2;vertical-align:middle}#app.light .movementCreator{background:#ffffffd1;border-color:#fff}#app.light .restAddBtn{background:#ffffffb8;color:#222;border-color:#fff}#app.light .toggleTrack{border-color:#fff}@media (max-width:900px){.movementCreatorFields,.movementCreatorFields.restFields{grid-template-columns:1fr;padding-right:0}.movementCreatorClose{position:static;margin-left:auto;display:block;margin-bottom:12.8px}}.createMoveOptions{margin:0 0 14.4px;padding:14.4px;border-radius:19.2px;background:#242424;border:.32px solid var(--line)}.createMoveOptions[hidden]{display:none}.createOptionLabel{text-transform:uppercase;color:var(--muted);margin-bottom:8px}.createPresetChoice{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}.createPresetBtn{min-height:60.8px;padding:11.2px 12.8px;border-radius:14.4px;border:.8px solid var(--line);background:transparent;color:var(--text);text-align:left;cursor:pointer}.createPresetBtn strong{display:block}.createPresetBtn span{display:block;color:var(--muted);margin-top:3.2px}.createPresetBtn.active{background:#efefef;color:#090909;border-color:#efefef}.createPresetBtn.active span{color:#575757}.createExtras{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px;margin-top:9.6px}.createExtraToggle{display:flex;align-items:flex-start;gap:8px;padding:9.6px 11.2px;border:.8px solid var(--line);border-radius:14.4px;cursor:pointer}.createExtraToggle input{margin-top:2.4px}.createExtraToggle span{display:grid;gap:2.4px}.createExtraToggle small{color:var(--muted)}.creatorUnitSelect{min-height:41.6px;padding:0 9.6px;border-radius:12.8px;border:.32px solid var(--line);background:#171717;color:var(--text);font:inherit}.autoRestSummary{display:inline-flex;align-items:center;gap:6.4px;margin-left:6.4px;color:#9da5b2}#app.light .createMoveOptions{background:#fffc;border-color:#fff}#app.light .createPresetBtn,#app.light .createExtraToggle{border-color:#fff;color:#222}#app.light .creatorUnitSelect{background:#fff;color:#222;border-color:#fff}@media (max-width:900px){.createPresetChoice,.createExtras{grid-template-columns:1fr}}.movementDurationField{display:grid;gap:6.4px}.movementTimingHead{display:flex;align-items:center;justify-content:space-between;gap:9.6px;color:var(--muted)}.globalTimingToggle{display:inline-flex!important;grid-template-columns:none!important;align-items:center;gap:5.6px!important;color:var(--text)!important;white-space:nowrap}.globalTimingToggle input{margin:0}.globalTimingValue{min-height:41.6px;display:flex;align-items:center;padding:0 11.2px;border-radius:12.8px;border:.32px solid var(--line);background:#1b1b1b;color:var(--muted)}.movementTypeBtn:disabled{opacity:.32;cursor:not-allowed}#app.light .globalTimingValue{background:#ffffffc2;border-color:#fff}.createFlow{display:grid;gap:9.6px;padding:3.2px 0 8px}.createFlow[hidden]{display:none}.createStep{border-radius:22.4px;background:#222;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);overflow:hidden}.createStepHeader{width:100%;min-height:57.6px;padding:14.4px 17.6px;border:0;background:transparent;color:var(--text);display:flex;align-items:center;justify-content:space-between;gap:19.2px;text-align:left;cursor:pointer}.createStepHeader:disabled{cursor:not-allowed;opacity:.42}.createStepIdentity{display:flex;align-items:center;gap:9.6px}.createStepNumber{width:22.4px;height:22.4px;border-radius:799.2px;display:grid;place-items:center;border:.32px solid var(--line);color:var(--muted)}.createStepSummary{min-width:0;color:var(--muted);text-align:right}.createStepBody{display:none;padding:0 14.4px 14.4px}.createStep.active .createStepBody{display:block}.createStep.active .createStepHeader{border-bottom:.32px solid #343434}.createStepSlot{display:grid;gap:11.2px}.createStepFooter{display:flex;justify-content:flex-end;margin-top:14.4px}.createStepFooter .primary:disabled{opacity:.35;cursor:not-allowed}.modal.createMode .movementTimingRow{display:none}.modal.createMode .movementCreator{margin-bottom:8px}.modal.createMode .movementCreatorFields{grid-template-columns:minmax(0,1.4fr) minmax(0,1fr)}.modal.createMode .movementCreatorFields.restFields{grid-template-columns:1fr}.modal.createMode .movementCreatorActions{margin-top:14.4px}.modal.createMode .movementCreatorLaunch{margin-top:0}.modal.createMode .sectionTitle{margin-top:9.6px}.modal.createMode .modalStatic{padding-bottom:14.4px}.modal:not(.createMode) .createFlow{display:none!important}#app.light .createStep{background:#ffffffbd;border-color:#fff}#app.light .createStep.active .createStepHeader{border-bottom-color:#fff}#app.resting .movementCard{background:#ffffff0e}#app.resting .movementRippleCanvas{opacity:1}#app.light.resting .movementCard{background:#ffffff38}.nextCard .skipSessionBtn{margin-left:auto}.modal:not(.createMode) .movementCreatorLaunch{margin-top:25.6px}.testingFeedbackThanks{grid-area:feedback;min-height:176px;padding:19.2px;border:.32px solid var(--line);border-radius:16px;background:#252525;display:flex;flex-direction:column;justify-content:center;align-items:flex-start;gap:6.4px}.testingFeedbackThanks[hidden]{display:none}.testingFeedbackThanks strong{color:#f0f0f0}.testingFeedbackThanks p{margin:0;color:#9ea5b0}.testingFeedbackThanks a{color:#d6d9df;text-underline-offset:2.4px}#app.light .testingFeedbackThanks{background:#2a2a2a;border-color:#4a4f58}:host(:fullscreen){overflow:auto;width:100vw;height:100vh}.entitySelect{max-width:min(256px,36.8vw);text-overflow:ellipsis}.integration .status code{padding:.8px 4.8px;border-radius:4.8px;background:#ffffff14}#app.light .integration .status code{background:#0000000f}.integration .pill[disabled]{cursor:default;opacity:.7}#app :focus{outline:none}#app :focus-visible{outline:2.4px solid var(--primary);outline-offset:2.4px}#app .workoutPanel:focus-visible{outline-offset:-2.4px}@media (max-width:620px){.bottomNav{margin-left:14.4px}}.shell:has(.countdown.active) .bottomNav{visibility:hidden}@media (max-width:900px){.workoutPanel:not(.active):not(.addPanel) .panelExpanded{opacity:1;filter:none;pointer-events:auto}}.grid>*{min-width:0}.energyBtn[data-level="1"]{--feeling-color:#6E63A8}.energyBtn[data-level="2"]{--feeling-color:#5878A8}.energyBtn[data-level="3"]{--feeling-color:#6F8B8A}.energyBtn[data-level="4"]{--feeling-color:#5F9B72}.energyBtn[data-level="5"]{--feeling-color:#D5A53E}.energyBtn[data-level="6"]{--feeling-color:#D56B54}.checkinQuestion+.checkinQuestion{margin-top:28.8px}.checkinStatus{margin-top:17.6px;color:var(--muted)}.checkinStatus.done{color:var(--text)}.checkinStatus.done:before{content:"✓  "}.insightSection{grid-column:span 12;margin-top:16px}.insightCard{display:grid;gap:22.4px}.insightTop{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:22.4px;align-items:end}.insightStats{display:grid;grid-auto-flow:column;grid-auto-columns:minmax(104px,1fr);gap:8px}.insightBody{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1.3fr);gap:22.4px;align-items:end}.insightLines{display:grid;gap:9.6px}.insightLine.muted{color:var(--muted)}.dayStrip{display:grid;grid-template-columns:repeat(14,minmax(0,1fr));gap:4.8px;align-items:end}.day{display:grid;gap:6.4px;justify-items:center}.dayBars{position:relative;width:100%;height:96px;border-radius:9.6px;background:#ffffff0a;overflow:hidden}.stepBar,.moveBar{position:absolute;bottom:0;border-radius:8px}.stepBar{left:0;right:0;background:#ffffff1f}.moveBar{left:22%;right:22%;background:var(--primary)}.day.today .dayBars{box-shadow:inset 0 0 0 .8px #ffffff59}.dayDots{display:flex;gap:2.4px}.dayDot{width:6.4px;height:6.4px;border-radius:50%}.dayDot.empty{box-shadow:inset 0 0 0 .8px #555}.dayLabel{color:var(--muted)}.day.today .dayLabel{color:var(--text)}.chartLegend{display:flex;gap:14.4px;flex-wrap:wrap;margin-top:11.2px;color:var(--muted)}.chartLegend i{display:inline-block;width:8px;height:8px;border-radius:2.4px;margin-right:4.8px;vertical-align:-.8px}.lgMove{background:var(--primary)}.lgSteps{background:#ffffff38}.lgDot{background:linear-gradient(90deg,#5f9b72 50%,#d5a53e 50%);border-radius:50%!important}#app.light .dayBars{background:#0000000a}#app.light .stepBar{background:#0000001a}#app.light .lgSteps{background:#00000024}#app.light .day.today .dayBars{box-shadow:inset 0 0 0 .8px #00000040}#app.light .dayDot.empty{box-shadow:inset 0 0 0 .8px #bbb}@media (max-width:900px){.insightSection{grid-column:auto}.insightTop,.insightBody{grid-template-columns:1fr}.insightStats{grid-auto-flow:row;grid-template-columns:repeat(auto-fit,minmax(96px,1fr))}.dayBars{height:72px}}#app.light .energyLog{background:#fffc}#app.light .energyLog span:last-child{color:#666!important}@media (max-width:900px){.energyScale{grid-template-columns:repeat(3,minmax(0,1fr))}}.checkinBackdrop{z-index:160}.checkinCard{width:min(576px,100%)}.checkinCard .sub{margin-top:8px}.checkinSliders{display:grid;gap:11.2px;margin-top:19.2px}.checkinTile{min-height:0;gap:14.4px}.scaleEnds{display:flex;justify-content:space-between;margin-top:6.4px;color:var(--muted)}.rangeTrack:focus-within{outline:2.4px solid var(--primary);outline-offset:2.4px}.checkinTab{position:fixed;right:0;top:50%;transform:translateY(-50%);z-index:120;display:flex;flex-direction:column;align-items:center;gap:9.6px;padding:14.4px 9.6px;border:.32px solid var(--line);border-right:0;border-radius:12.8px 0 0 12.8px!important;background:#171717;color:var(--text);cursor:pointer;transition:padding .18s ease,background .18s ease}.checkinTab:hover{padding-right:12.8px}.checkinTabIcon{font-size:16px;line-height:1}.checkinTabLabel{writing-mode:vertical-rl;transform:rotate(180deg)}.checkinBadge{position:absolute;top:8px;left:8px;width:8px;height:8px;border-radius:50%;background:var(--secondary);box-shadow:0 0 0 2.4px #171717,0 0 9.6px color-mix(in srgb,var(--secondary) 70%,transparent);animation:checkinPulse 1.8s ease-in-out infinite}.checkinTab.due{background:#232323}@keyframes checkinPulse{50%{box-shadow:0 0 0 3px #171717,0 0 2px color-mix(in srgb,var(--secondary) 20%,transparent)}}@media (prefers-reduced-motion: reduce){.checkinBadge{animation:none}}.shell:has(#workoutView.active) .checkinTab,.shell:has(.countdown.active) .checkinTab{display:none}#app.light .checkinTab{background:#ffffffe0;border-color:#fff}#app.light .checkinBadge{background:var(--primary);box-shadow:0 0 0 2.4px #fff,0 0 9.6px color-mix(in srgb,var(--primary) 50%,transparent)}.feelSection{grid-column:span 12;margin-top:16px}.feelCard{display:grid;gap:19.2px}.feelTop{display:grid;grid-template-columns:minmax(0,1fr) minmax(208px,336px);gap:22.4px;align-items:end}.feelTotals{display:grid;gap:9.6px}.feelCount{color:var(--muted)}.feelDays{display:grid;grid-template-columns:repeat(7,minmax(0,1fr));gap:8px}.feelDay{min-height:0;gap:9.6px}.feelDay.future{opacity:.4}.feelDay.today{box-shadow:inset 0 0 0 .8px #ffffff4d}#app.light .feelDay.today{box-shadow:inset 0 0 0 .8px #0003}.feelDots{font-size:6.4px;letter-spacing:1.6px;color:var(--muted)}.feelMeter{display:grid;gap:4.8px}.feelMeterTop{display:flex;justify-content:space-between;gap:6.4px;color:var(--muted)}.feelMeterTop span:last-child{color:var(--text)}.feelTrack{height:6.4px;border-radius:799.2px;background:#ffffff14;overflow:hidden}.feelTrack span{display:block;height:100%;border-radius:799.2px}#app.light .feelTrack{background:#00000014}.feelTotals .feelTrack{height:9.6px}@media (max-width:900px){.feelSection{grid-column:auto}.feelTop{grid-template-columns:1fr}.feelDays{grid-template-columns:repeat(4,minmax(0,1fr))}}@media (max-width:620px){.feelDays{grid-template-columns:repeat(2,minmax(0,1fr))}}.checkinTile .timeHeader{align-items:center}.checkinTab:not(.due){opacity:.6}.checkinTab:not(.due):hover{opacity:1}.activityCard{grid-column:span 3}.weekly{grid-column:span 9;cursor:pointer;transition:border-color .18s ease,background .18s ease}.weekly:hover{border-color:#5a5a5a}#app.light .weekly:hover{border-color:#fff;background:#ffffffeb}.weeklyExpand{position:absolute;top:19.2px;right:22.4px;font-size:16px;color:var(--muted);transition:transform .18s ease}.weekly:hover .weeklyExpand{transform:scale(1.15)}.weekChips{grid-template-columns:repeat(8,minmax(0,1fr))}.weekChipBottom{display:flex;justify-content:space-between;align-items:flex-end;gap:4.8px}.face{width:20.8px;height:20.8px;flex:0 0 auto;display:block}.face.empty circle{fill:none;stroke:#4a4a4a;stroke-width:1.2;stroke-dasharray:2.5 2.5}#app.light .face.empty circle{stroke:#c4c4c4}.weekChip.total .face{width:24px;height:24px}.insightBackdrop{z-index:155}.insightModalCard{width:min(992px,100%);max-height:calc(100dvh - 56px);overflow:auto}.insightModalHead{display:flex;justify-content:space-between;align-items:center;margin-bottom:9.6px}.insightModalHead .sectionLabel{margin:0}.insightModalCard .dayBars{height:160px}.insightBody.chartOnly{grid-template-columns:1fr}.dayFace .face{width:17.6px;height:17.6px}.chartLegend span{display:inline-flex;align-items:center}.chartLegend .face{width:9.6px;height:9.6px;margin-right:4.8px}@media (max-width:1200px){.activityCard{grid-column:span 4}.weekly{grid-column:span 8}.weekChips{grid-template-columns:repeat(4,minmax(0,1fr))}}@media (max-width:900px){.activityCard,.weekly{grid-column:auto}.insightModalCard .dayBars{height:88px}.dayFace .face{width:12.8px;height:12.8px}}.weekChipTime{white-space:nowrap}.insightCard{grid-column:span 9;align-content:start}.insightEyebrow{margin-bottom:-11.2px}.insightStats{grid-auto-columns:minmax(88px,1fr)}.insightCard .dayBars{height:120px}@media (max-width:1200px){.insightCard{grid-column:span 8}.insightTop{grid-template-columns:1fr}}@media (max-width:900px){.insightCard{grid-column:auto}.insightCard .dayBars{height:80px}}.helpBackdrop{z-index:170}.helpCard .helpSteps,.helpCard .helpNote{max-width:688px}.helpHead{display:flex;justify-content:space-between;align-items:flex-start;gap:16px}.helpCard .note{margin:0}.helpSteps{margin:19.2px 0 0;padding:0;list-style:none;counter-reset:help;display:grid;gap:9.6px}.helpSteps li{counter-increment:help;display:grid;gap:4.8px;position:relative;padding:14.4px 16px 14.4px 52.8px;border-radius:20.8px;background:#252525;color:var(--muted)}.helpSteps li:before{content:counter(help);position:absolute;left:14.4px;top:12.8px;width:25.6px;height:25.6px;border-radius:9.6px;display:grid;place-items:center;background:#313131;color:var(--text)}.helpSteps strong,.helpSteps b,.helpNote b{color:var(--text)}.helpAction{display:block;padding:8px 9.6px;border-radius:11.2px;background:#1b1b1b;color:var(--text)}.helpCard code{padding:.8px 4.8px;border-radius:4.8px;background:#ffffff14}.helpNote{display:grid;gap:3.2px;margin-top:9.6px;padding:12.8px 16px;border-radius:17.6px;border:.32px solid var(--line);color:var(--muted)}.helpNote strong{color:var(--text)}#app.light .helpSteps li{background:#fffc}#app.light .helpSteps li:before{background:var(--primary-tint)}#app.light .helpAction{background:#eeeded}#app.light .helpCard code{background:#0000000f}#app.light .helpNote{border-color:#fff}.rowLabel{grid-column:1/-1;margin-top:16px;margin-bottom:-8px}.checkinTab{flex-direction:row;align-items:center;gap:0}.checkinTabMain{display:flex;flex-direction:column;align-items:center;gap:9.6px}.checkinPeek{display:grid;gap:3.2px;justify-items:start;white-space:nowrap;overflow:hidden;max-width:0;opacity:0;margin-right:0;transition:max-width .32s cubic-bezier(.2,1.2,.4,1),opacity .2s ease,margin-right .32s ease}.checkinTab.peek{padding-left:17.6px;opacity:1}.checkinTab.peek .checkinPeek{max-width:176px;opacity:1;margin-right:14.4px}.peekCountdown{font-size:24px;font-weight:800;letter-spacing:-.04em;line-height:1;font-variant-numeric:tabular-nums}.peekAt{color:var(--muted)}@media (prefers-reduced-motion: reduce){.checkinPeek{transition:none}}.activityRowMeta{color:var(--text);margin-top:1.6px;font-variant-numeric:tabular-nums}.feelTop{grid-template-columns:1fr}:host{--primary:#03A9F4;--secondary:#D0FF00;--primary-tint:color-mix(in srgb,var(--primary) 16%,white);--primary-ink:color-mix(in srgb,var(--primary) 75%,black);--font:Inter,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;--w-regular:400;--w-medium:500;--w-semibold:600;--w-bold:700;--w-heavy:800;--t-display:64px;--t-title:22px;--t-value:22px;--t-section:18px;--t-strong:16px;--t-body:14px;--t-caption:12px;--lh-display:1.05;--lh-title:1}@media (max-width:620px){:host{--t-display:46px;--t-title:20px;--t-value:20px;--t-section:16px;--t-strong:15px;--t-body:14px;--t-caption:11px;--lh-display:.92;--lh-title:1.05}}#app{font-family:var(--font);font-size:var(--t-body);font-weight:var(--w-regular);line-height:1.4}#app button,#app input,#app select,#app textarea{font-family:inherit}#app strong,#app b{font-weight:var(--w-bold)}.title,.workoutName,.exerciseTitle,.insightBig,.feelHeadline,.settingsTitle,.weekMetric{font-size:var(--t-display);font-weight:var(--w-heavy);line-height:var(--lh-display);letter-spacing:-.055em}.activityTitle,.confirmTitle,.modalHead h2,.paneTitle,.movementCreatorHead h3,.testingFeedbackThanks strong{font-size:var(--t-title);font-weight:var(--w-medium);font-style:italic;line-height:var(--lh-title);letter-spacing:-.03em}.paneTitle{margin:0 0 10px}.activityRowMeta,.nextName,.upcomingName,.editNameInput{font-size:var(--t-value);font-weight:var(--w-regular);line-height:1.15;letter-spacing:-.02em}.insightLine strong{font-weight:var(--w-bold)}.sectionLabel,.nextLabel{font-size:var(--t-section);font-weight:var(--w-regular);line-height:1.2;letter-spacing:-.01em}.activityRowName,.integration strong,.toggleRow strong,.setupSwitchRow strong,.timeLabel,.moveItemName,.weekChipTop strong,.weekChipTime,.panelCollapsedText,.activityCount,.helpSteps strong,.helpNote strong,.createStepIdentity strong,.createPresetBtn strong,.createExtraToggle strong,.testingZoneTitleRow strong,.testingFeedbackHeading,.tempoEstimate,.primary,.tab,.skipBtn,.skipSessionBtn,.hideBtn,.removeBtn,.addBtn,.themeBtn,.holdEnd,.holdDelete,.energyBtn,.movementCreatorOpen,.restAddBtn,.creatorAddButton,.testingFeedbackSubmit,.testingRating button,.toast,.checkinTabLabel{font-size:var(--t-strong);font-weight:var(--w-semibold);line-height:1.25;letter-spacing:-.01em}.sub,.meta,.note,.weekCopy,.timeValue,.addInput,.settingsSelect,.pill,.checkinStatus,.routineSummary,.helpSteps li,.helpNote,.createStepSummary,.insightLine{font-size:var(--t-body);font-weight:var(--w-regular);line-height:1.4;letter-spacing:0}.eyebrow,#stepLabel,.sourceTag,.addPanelLabel,.status,.motionRangeWrap span,.moveMeta,.sectionTitle,.editNameLabel,.dayLabel,.scaleEnds,.peekAt,.upcomingMeta,.energyLog,.tempoPole,.tempoReadout,.tempoRevealBtn,.testingFeedbackField,.testingZoneExplanation,.testingFeedbackThanks p,.movementCreatorClose,.movementCreatorFields>label,.durationStack,.globalTimingToggle,.toggleLabel,.moveKindBadge,.createOptionLabel,.createPresetBtn span,.createExtraToggle small,.autoRestSummary,.movementTimingHead,.globalTimingValue,.createStepNumber,.weekChipMeta,.feelMeterTop,.feelCount,.chartLegend,#app code{font-size:var(--t-caption);font-weight:var(--w-regular);line-height:1.35;letter-spacing:0}.eyebrow,#stepLabel,.sectionTitle{letter-spacing:.1em}.globalTimingToggle{font-size:var(--t-caption)!important}.workoutGallery,.workoutPanel{height:340px}@media (max-width:900px){.workoutPanel,.workoutPanel.active{height:320px}}@media (max-width:900px){.workoutGallery{height:auto}.workoutPanel,.workoutPanel.active{height:auto;min-height:320px}}@media (max-width:620px){.view{padding-left:0;padding-right:0}.topbar,.settingsHeader,.sessionHead,.sessionControlRow{margin-left:16px;margin-right:16px}.tabs.rubberTabs,.sectionLabel,.rowLabel{margin-left:16px}.grid{gap:8px}.rowLabel,.feelSection{margin-top:16px}.rowLabel{margin-bottom:-4px}.sectionLabel{margin-bottom:8px}.workoutGallery{gap:8px}.workoutPanel,.workoutPanel.active{flex:0 0 100%;min-width:100%}.workoutPanel.addPanel{flex:0 0 100%;min-width:100%;min-height:120px}.card,.workoutPanel,.timerCard,.movementCard,.nextCard,.upcomingCard,.confirmCard{padding:16px}.activityRows,.insightCard,.feelCard{gap:8px}.activityRow,.weekChip{padding:10px 12px}.insightStats,.feelDays{gap:8px}.workGrid{gap:8px;margin-top:8px}.nextWrap,.sessionControlRow{margin-top:8px}.upcomingList{gap:8px}}.tabs.rubberTabs .tab{white-space:nowrap}@media (max-width:620px){.tabs.rubberTabs{display:flex;width:max-content;max-width:calc(100% - 32px);overflow-x:auto;scrollbar-width:none}.tabs.rubberTabs::-webkit-scrollbar{display:none}.tabs.rubberTabs .tab{flex:0 0 auto}}#app.light .timeIcon{background:var(--primary-tint);color:var(--primary-ink)!important}.insightCard{display:flex;flex-direction:column;gap:0}.movementReadings{grid-template-columns:repeat(3,minmax(0,1fr))}.weekBars{flex:1;display:grid;grid-template-columns:repeat(7,minmax(0,1fr));gap:9.6px;margin-top:16px;min-height:150px}.weekBar{display:grid;grid-template-rows:1fr auto;gap:8px;justify-items:center;min-height:0}.weekBarTrack{position:relative;width:100%;height:100%;min-height:110px;border-radius:24px;background:#292929;overflow:hidden}.weekBarTrack span{position:absolute;left:0;right:0;bottom:0;border-radius:24px;background:var(--primary)}.weekBar.today .weekBarTrack{box-shadow:inset 0 0 0 1.5px var(--primary)}.weekBar.today .dayLabel{color:var(--text);font-weight:var(--w-bold)}.weekBar.future{opacity:.35}#app.light .weekBarTrack{background:#fffc}#app.light .insightCard .activityRow:nth-child(1) .activityRowIcon{background:var(--primary-tint);color:var(--primary-ink)!important}@media (max-width:900px){.movementReadings{grid-template-columns:1fr}.weekBarTrack{min-height:90px}}@media (max-width:1200px) and (min-width:901px){.timeTiles{grid-auto-flow:row;grid-template-columns:repeat(2,1fr)}}#stepLabel{margin-top:9.6px}#exerciseMeta{margin-top:4px}.moveRow{justify-content:flex-start;gap:12.8px}.moveText{flex:1;min-width:0}.moveActions{display:flex;gap:6.4px;flex:0 0 auto}.dragHandle{flex:0 0 auto;display:grid;place-items:center;width:32px;height:40px;margin:-8px 0 -8px -9.6px;padding:0;border:0;border-radius:12px;background:transparent;color:var(--muted);cursor:grab;touch-action:none}.dragHandle:hover{background:#ffffff0f;color:var(--text)}#app.light .dragHandle:hover{background:#0000000d}.moveRow.dragging{box-shadow:0 10px 30px #00000073,inset 0 0 0 1.5px var(--primary);position:relative;z-index:2}.moveRow.dragging .dragHandle{cursor:grabbing;color:var(--text)}.removeBtn:hover,.hideBtn:hover{border-color:var(--muted)}.toast{position:fixed;z-index:400;display:flex;align-items:center;gap:12.8px}.toast.withAction{pointer-events:auto}.toastAction{border:0;padding:0;background:none;color:inherit;font:inherit;text-decoration:underline;text-underline-offset:3px;cursor:pointer}#app.light .toastAction{color:#eeeded!important}.modalTop{flex:0 0 auto;padding:22px 22px 0}.modalTop .modalHead{margin-bottom:0;padding-bottom:16px}@media (min-width:901px){.modal:not(.createMode){display:grid;grid-template-columns:minmax(340px,420px) minmax(0,1fr);grid-template-rows:auto minmax(0,1fr)}.modal:not(.createMode) .modalTop{grid-column:1/-1;border-bottom:.32px solid #343434}.modal:not(.createMode) .modalStatic{grid-column:1;grid-row:2;overflow-y:auto;border-bottom:0;border-right:.32px solid #343434}.modal:not(.createMode) .exerciseScroller{grid-column:2;grid-row:2;border-top:0;padding-top:12px}.modal:not(.createMode) .timeTiles{grid-auto-flow:row;grid-template-columns:minmax(0,1fr)}}#app.light .modalTop{border-color:#fff}#app.light .modal:not(.createMode) .modalStatic{border-right-color:#fff}.timeTiles{align-items:start}.timingGroup{min-height:0;padding:0;justify-content:flex-start;gap:0}.timingGroup .timeRow{display:grid;gap:12.8px;padding:16px}.timingGroup .timeRow+.timeRow{border-top:.32px solid var(--line)}.timingGroup .timeTotal{padding-bottom:14px}#app.light .timingGroup .timeRow+.timeRow{border-top-color:#eeeded}.setupSwitchRow{display:flex;align-items:center;justify-content:space-between;gap:12.8px;margin-bottom:11.2px;padding:12px 14px;border-radius:24px;background:#252525}#app.light .setupSwitchRow{background:#fffc}.removeLabel{position:relative;z-index:1}.removeBtn.holding{border-color:#d53d3d}#deleteMoveConfirm{z-index:200}.moveRow{will-change:transform}.moveRow.dragging{box-shadow:0 14px 34px #00000080,inset 0 0 0 1.5px var(--primary);z-index:3}', Da = `<main id="app"><div class="shell">
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
  <div class="workGrid"><section class="timerCard"><div class="fill" id="fill"></div><div class="digits" id="digits">30</div></section><section class="movementCard"><canvas id="movementRippleCanvas" class="movementRippleCanvas" aria-hidden="true"></canvas></section></div>

  <div class="sessionControlRow">
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
    <button class="tab active" data-pane="integrationsPane">Integrations</button>
    <button class="tab" data-pane="dataPane">Data</button>
    <button class="tab" data-pane="checkinPane">Check-in</button>
    <button class="tab" data-pane="appearancePane">Appearance</button>
    <button class="tab" data-pane="helpPane">Help</button>
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

      <div class="setupSwitchRow" id="warmupRow">
        <strong>Warm-up</strong>
        <button class="switch on" id="warmupSwitch" type="button" role="switch" aria-checked="true" aria-label="Warm-up"></button>
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

      <div class="timeTiles">
      <section class="tile timeTile timingGroup">
        <div class="timeRow timeTotal">
          <div class="timeHeader">
            <div class="timeIcon" aria-hidden="true">◷</div>
            <div class="timeCopy">
              <div class="timeLabel" id="totalLabel">Total time</div>
              <div class="timeValue" id="totalOut">20 min</div>
            </div>
          </div>
          <div class="rangeTrack" hidden>
            <div class="rangeFill" id="totalFill"></div>
            <input class="rangeInput" id="totalTime" type="range" min="3" max="40" step="1" value="20" aria-label="Time per round in minutes" tabindex="-1">
          </div>
        </div>
        <div class="timeRow">
          <div class="timeHeader">
            <div class="timeIcon" aria-hidden="true">▶</div>
            <div class="timeCopy">
              <div class="timeLabel">Work</div>
              <div class="timeValue" id="workOut">45 sec</div>
            </div>
          </div>
          <div class="rangeTrack">
            <div class="rangeFill" id="workFill"></div>
            <input class="rangeInput" id="workTime" type="range" min="20" max="60" step="5" value="45" aria-label="Work interval">
          </div>
        </div>
        <div class="timeRow">
          <div class="timeHeader">
            <div class="timeIcon" aria-hidden="true">Ⅱ</div>
            <div class="timeCopy">
              <div class="timeLabel">Rest</div>
              <div class="timeValue" id="restOut">15 sec</div>
            </div>
          </div>
          <div class="rangeTrack">
            <div class="rangeFill" id="restFill"></div>
            <input class="rangeInput" id="restTime" type="range" min="5" max="30" step="5" value="15" aria-label="Rest interval">
          </div>
        </div>
      </section>

      <section class="tile timeTile" id="roundsTile">
        <div class="timeHeader">
          <div class="timeIcon" aria-hidden="true">↻</div>
          <div class="timeCopy">
            <div class="timeLabel">Rounds</div>
            <div class="timeValue" id="roundsOut">1 round</div>
          </div>
        </div>
        <div class="rangeTrack">
          <div class="rangeFill" id="roundsFill"></div>
          <input class="rangeInput" id="roundsInput" type="range" min="1" max="10" step="1" value="1" aria-label="How many times to repeat the move">
        </div>
      </section>
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

  </section>
</div>
`;
function Ha(f, h) {
  const i = (e) => f.getElementById(e), F = i("workoutView"), S = i("workoutNameInput");
  let D = !0;
  const wn = i("homeClock");
  function kn() {
    wn && (wn.textContent = new Intl.DateTimeFormat(void 0, { hour: "2-digit", minute: "2-digit" }).format(/* @__PURE__ */ new Date()));
  }
  kn(), setInterval(kn, 15e3);
  const Sn = i("createFlow"), xi = i("createMovementsSlot"), yi = i("createTimingSlot"), Cn = i("createFinishSlot"), wi = i("movementStepSummary"), ki = i("timingStepSummary"), Si = i("finishStepSummary"), It = i("continueToTiming"), Ci = i("continueToFinish"), Ti = i("finishMoveButton");
  let Dt = !1, pt = [];
  function Li(e) {
    !e || pt.some((t) => t.node === e) || pt.push({ node: e, parent: e.parentNode, next: e.nextSibling });
  }
  function ut(e, t) {
    e && (Li(e), t.appendChild(e));
  }
  function Mi() {
    [...pt].reverse().forEach(({ node: e, parent: t, next: n }) => {
      t && (n && n.parentNode === t ? t.insertBefore(e, n) : t.appendChild(e));
    }), pt = [];
  }
  function Me(e) {
    f.querySelectorAll(".createStep").forEach((t) => {
      t.classList.toggle("active", t.dataset.createStep === e);
    }), e === "timing" && (Dt = !0), le();
  }
  function le() {
    var u, g;
    if (!P) return;
    x[w];
    const e = H.filter((c) => !c.hidden), t = e.filter((c) => c.kind !== "rest").length, n = e.filter((c) => c.kind === "rest").length;
    wi.textContent = t ? t + " movement" + (t === 1 ? "" : "s") + (n ? " · " + n + " rest" + (n === 1 ? "" : "s") : "") : "No movements yet";
    const a = t > 0, o = f.querySelector('[data-open-step="timing"]'), r = f.querySelector('[data-open-step="finish"]');
    o.disabled = !a, It.disabled = !a, ki.textContent = a ? ye(R.value) + " · " + j(T.value) + " movement · " + j(L.value) + " rest" : "Add a movement first", r.disabled = !(a && Dt);
    const l = ((S == null ? void 0 : S.value) || "").trim(), s = [];
    (u = i("includeWarmupPreset")) != null && u.checked && s.push("warm-up"), (g = i("includeCooldownPreset")) != null && g.checked && s.push("cooldown"), Si.textContent = l ? l + (s.length ? " · " + s.join(" + ") : "") : s.length ? s.join(" + ") : "Name and optional extras";
  }
  function Ei() {
    var v, E, A;
    Sn.hidden = !1, Dt = !1;
    const e = f.querySelector(".editNameRow"), t = i("createMoveOptions"), n = f.querySelector(".timeTiles"), a = i("routineSummaryModal"), o = f.querySelector(".tempoRevealRow"), r = i("tempoExperiment"), l = (v = i("warmupList")) == null ? void 0 : v.closest("section"), s = i("movementCreatorLaunch"), u = i("movementCreator"), g = (E = i("strengthList")) == null ? void 0 : E.closest("section"), c = (A = i("cooldownList")) == null ? void 0 : A.closest("section");
    [l, s, u, g, c].forEach((C) => ut(C, xi)), [t, n, a, o, r].forEach((C) => ut(C, yi)), ut(e, Cn);
    const d = t == null ? void 0 : t.querySelector(".createExtras");
    d && ut(d, Cn), Me("movements"), le();
  }
  function Ri() {
    Mi(), Sn.hidden = !0, f.querySelectorAll(".createStep").forEach((e) => e.classList.remove("active"));
  }
  f.querySelectorAll("[data-open-step]").forEach((e) => e.addEventListener("click", () => {
    e.disabled || Me(e.dataset.openStep);
  })), It.addEventListener("click", () => {
    It.disabled || Me("timing");
  }), Ci.addEventListener("click", () => Me("finish")), Ti.addEventListener("click", () => i("saveWorkoutEdit").click());
  const Ee = { home: i("homeView"), workout: i("workoutView"), settings: i("settingsView") }, Tn = i("homeNav"), Ln = i("settingsNav");
  function Ht(e) {
    Object.entries(Ee).forEach(([t, n]) => n.classList.toggle("active", t === e)), Tn.classList.toggle("active", e === "home"), Ln.classList.toggle("active", e === "settings"), e === "home" && setTimeout($t, 400), e === "settings" && requestAnimationFrame(() => ct(f.querySelector(".tab.active"), !1));
  }
  const R = i("totalTime"), T = i("workTime"), L = i("restTime"), Bi = i("totalOut"), Mn = i("workOut"), En = i("restOut"), Ai = i("totalFill"), Fi = i("workFill"), Pi = i("restFill"), he = i("roundsInput"), Ni = i("roundsFill"), Ii = i("roundsOut"), Di = i("totalLabel"), Hi = i("routineSummaryModal"), Ot = [
    { id: "standing-reach", name: "Standing reach", group: "Warm-up", kind: "warmup", hidden: !1 },
    { id: "arm-circles", name: "Arm circles", group: "Warm-up", kind: "warmup", hidden: !1 },
    { id: "hip-hinge", name: "Hip hinge drill", group: "Warm-up", kind: "warmup", hidden: !1 }
  ];
  let fe = Ot.map((e) => ({ ...e })), H = [
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
  const _t = [
    { id: "hip-flexor", name: "Hip flexor stretch", group: "Cooldown", kind: "cooldown", hidden: !1 },
    { id: "chest-opener", name: "Chest opener", group: "Cooldown", kind: "cooldown", hidden: !1 },
    { id: "hamstring", name: "Hamstring stretch", group: "Cooldown", kind: "cooldown", hidden: !1 },
    { id: "slow-breathing", name: "Slow breathing", group: "Cooldown", kind: "cooldown", hidden: !1 }
  ];
  let ve = _t.map((e) => ({ ...e }));
  const Oi = {
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
  }, y = Rn(h.data), x = y.profiles;
  let w = x[y.selected] ? y.selected : y.order.find((e) => x[e]) || "kettlebell";
  function Rn(e) {
    const t = e && typeof e == "object" ? JSON.parse(JSON.stringify(e)) : {}, n = t.profiles && Object.keys(t.profiles).length ? t.profiles : JSON.parse(JSON.stringify(Oi)), a = (Array.isArray(t.order) ? t.order : Object.keys(n)).filter((o) => n[o]);
    return Object.keys(n).forEach((o) => {
      a.includes(o) || a.push(o);
    }), {
      v: 1,
      profiles: n,
      order: a,
      selected: t.selected || a[0],
      history: Array.isArray(t.history) ? t.history : [],
      checkins: (Array.isArray(t.checkins) ? t.checkins : _i(t.energy)).map(Bn),
      settings: { ...t.settings || {} }
    };
  }
  function _i(e) {
    if (!Array.isArray(e)) return [];
    const t = ["Drained", "Low", "Okay", "Good", "Energised", "Great"], n = [];
    return e.forEach((a) => {
      const o = new Date(a.at);
      if (isNaN(o)) return;
      const r = o.getFullYear() + "-" + String(o.getMonth() + 1).padStart(2, "0") + "-" + String(o.getDate()).padStart(2, "0"), l = o.getHours() < 14 ? "morning" : "evening";
      if (n.some((u) => u.date === r && u.slot === l)) return;
      const s = t.indexOf(a.value) + 1;
      s > 0 && n.push({ date: r, slot: l, mood: null, energy: s, at: a.at });
    }), n;
  }
  function Bn(e) {
    if (e.scale === 100) return e;
    const t = (n) => n == null ? null : Math.round((Number(n) - 1) / 5 * 100);
    return { ...e, mood: t(e.mood), energy: t(e.energy), scale: 100 };
  }
  function be() {
    P || (y.selected = w, y.order = y.order.filter((e) => x[e] && e !== xe), h.save(y));
  }
  function M() {
    return y.settings;
  }
  function J(e) {
    const t = x[e];
    if (!t) return;
    w = e;
    const n = i("workoutNameInput");
    n && (n.value = t.name), R.value = t.total, T.value = t.work, L.value = t.rest, he.value = t.rounds || 1, t.customSequence ? (fe = [], ve = [], H = (t.sequence || []).map((a) => ({ ...a })), Gt(t.preset || "movement", !1)) : (R.min = 3, R.max = 40, R.step = 1, T.min = 20, T.max = 60, T.step = 5, L.min = 5, L.max = 30, L.step = 5, fe = (t.warmup || Ot).map((a) => ({ ...a })), ve = (t.cooldown || _t).map((a) => ({ ...a })), H = t.strength.map(([a, o, r, l = !1]) => ({ id: a, name: o, group: r, kind: "work", hidden: !!l }))), f.querySelectorAll(".workoutPanel[data-workout]").forEach((a) => a.classList.toggle("active", a.dataset.workout === e)), _();
  }
  function zi(e, t, n) {
    const a = e.getBoundingClientRect(), o = a.width / 2, r = a.height / 2, l = t - o, s = n - r;
    let u = 1 / 0, g = 1 / 0;
    l !== 0 && (u = o / Math.abs(l)), s !== 0 && (g = r / Math.abs(s));
    const c = Math.min(Math.max(1 / Math.min(u, g), 0), 1);
    let d = Math.atan2(s, l) * (180 / Math.PI) + 90;
    return d < 0 && (d += 360), { edge: c, angle: d };
  }
  function zt(e, t, n = !1) {
    const a = e.getBoundingClientRect(), o = t.clientX - a.left, r = t.clientY - a.top, { edge: l, angle: s } = zi(e, o, r), u = n ? 100 : l * 100;
    e.style.setProperty("--edge-proximity", u.toFixed(3)), e.style.setProperty("--cursor-angle", s.toFixed(3) + "deg"), e.classList.toggle("borderGlowActive", n || u >= 30);
  }
  function An(e) {
    e.addEventListener("pointermove", (n) => zt(e, n, !1)), e.addEventListener("pointerenter", (n) => zt(e, n, !1)), e.addEventListener("pointerdown", (n) => zt(e, n, !0));
    const t = () => {
      e.classList.remove("borderGlowActive"), e.style.setProperty("--edge-proximity", "0");
    };
    e.addEventListener("pointerleave", t), e.addEventListener("pointerup", t), e.addEventListener("pointercancel", t);
  }
  An(i("addWorkoutPanel"));
  let P = !1, xe = null;
  function N(e) {
    return String(e ?? "").replace(/[&<>"']/g, (t) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[t]);
  }
  function qi(e) {
    return e.summary ? e.summary : e.customSequence ? ye(e.total) + " · custom move" : ye(e.total) + " · " + j(e.work) + " / " + j(e.rest) + " · warm-up + cooldown";
  }
  function qt(e, t) {
    var l;
    const n = document.createElement("article");
    n.className = "workoutPanel", n.dataset.workout = e, n.tabIndex = 0;
    const a = t.eyebrow === void 0 ? "Movement" : t.eyebrow, o = t.activityCount ?? (((l = t.sequence) == null ? void 0 : l.length) || 0);
    n.innerHTML = '<span class="edgeLight" aria-hidden="true"></span><div class="panelExpanded"><div><div class="workoutPanelTop"><div>' + (a ? '<div class="eyebrow">' + N(a) + "</div>" : "") + '<div class="workoutName">' + N(t.name) + '</div><div class="sub">' + N(qi(t)) + '</div><span class="sourceTag">' + N(t.source || "Custom move") + '</span></div><button class="pill seeWorkoutBtn" type="button">Edit</button></div></div><div class="workoutFooter"><div><strong class="activityCount">' + (o ? o + " activities" + ((t.rounds || 1) > 1 ? " × " + t.rounds : "") : "—") + '</strong></div><div class="workoutPanelActions"><button class="primary startWorkoutBtn" type="button">Start move</button></div></div></div><div class="panelCollapsed"><div class="panelCollapsedText">' + N(t.name) + "</div></div>";
    const r = i("addWorkoutPanel");
    return i("workoutGallery").insertBefore(n, r), An(n), n.addEventListener("click", (s) => {
      s.target.closest("button") || J(e);
    }), n.addEventListener("keydown", (s) => {
      (s.key === "Enter" || s.key === " ") && !s.target.closest("button") && (s.preventDefault(), J(e));
    }), n.querySelector(".seeWorkoutBtn").addEventListener("click", (s) => {
      s.stopPropagation(), J(e), Gn(!1);
    }), n.querySelector(".startWorkoutBtn").addEventListener("click", (s) => {
      s.stopPropagation(), J(e), ya();
    }), n;
  }
  function Fn() {
    f.querySelectorAll(".workoutPanel[data-workout]").forEach((e) => e.remove()), y.order.forEach((e) => {
      x[e] && qt(e, x[e]);
    }), f.querySelectorAll(".workoutPanel[data-workout]").forEach((e) => e.classList.toggle("active", e.dataset.workout === w));
  }
  Fn(), i("addWorkoutPanel").addEventListener("keydown", (e) => {
    (e.key === "Enter" || e.key === " ") && (e.preventDefault(), i("addWorkoutPanel").click());
  }), i("addWorkoutPanel").addEventListener("click", () => {
    P = !0, xe = "custom-" + Date.now(), x[xe] = {
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
    }, J(xe), Gn(!0);
  });
  let m = [], b = 0, Y = 0, gt = 1, q = !1, O = null, mt = null, G = !1, Re = y.settings.upcomingCount ?? "all";
  function ht(e, t, n) {
    return (Number(e) - t) / (n - t) * 100;
  }
  function j(e) {
    const t = Math.max(0, Number(e) || 0);
    return t >= 3600 && t % 3600 === 0 ? t / 3600 + " hr" : t >= 60 && t % 60 === 0 ? t / 60 + " min" : t >= 60 ? Math.round(t / 60) + " min" : Math.round(t) + " sec";
  }
  function ye(e) {
    const t = Math.max(0, Number(e) || 0);
    return t >= 60 && t % 60 === 0 ? t / 60 + " hr" : t >= 60 ? Math.floor(t / 60) + " hr " + t % 60 + " min" : t + " min";
  }
  function ft() {
    Ai.style.width = ht(R.value, Number(R.min), Number(R.max)) + "%", Fi.style.width = ht(T.value, Number(T.min), Number(T.max)) + "%", Pi.style.width = ht(L.value, Number(L.min), Number(L.max)) + "%", Mn.textContent = j(T.value), En.textContent = j(L.value);
    const e = Number(he.value) || 1;
    Ni.style.width = ht(e, 1, 10) + "%", Di.textContent = e > 1 ? "Time per round" : "Total time";
  }
  function Wt(e) {
    return e.filter((t) => !t.hidden);
  }
  function Pn(e, t) {
    const n = Math.max(0, Number(e) || 0);
    return Math.round(t === "hour" ? n * 3600 : t === "min" ? n * 60 : n);
  }
  function Gt(e, t = !0) {
    f.querySelectorAll(".createPresetBtn").forEach((a) => a.classList.toggle("active", a.dataset.movePreset === e));
    const n = x[w];
    n && (n.preset = e), e === "work" ? (R.min = 30, R.max = 480, R.step = 30, T.min = 300, T.max = 7200, T.step = 300, L.min = 60, L.max = 1800, L.step = 60, t && (R.value = 60, T.value = 1500, L.value = 300), i("addMovementUnit").value = "min", i("addMovementDuration").value = 25, i("addRestUnit").value = "min", i("addRestDuration").value = 5) : (R.min = 3, R.max = 40, R.step = 1, T.min = 20, T.max = 60, T.step = 5, L.min = 5, L.max = 30, L.step = 5, t && (R.value = 20, T.value = 45, L.value = 15), i("addMovementUnit").value = "sec", i("addMovementDuration").value = 45, i("addRestUnit").value = "sec", i("addRestDuration").value = 30), ft();
  }
  function jt() {
    const e = x[w];
    if (e != null && e.customSequence) {
      if (H = H.filter((t) => !t.presetRole), i("includeWarmupPreset").checked ? (H = [...Ot.map((n, a) => ({ ...n, id: "preset-warm-" + a + "-" + Date.now(), kind: "work", duration: Number(T.value), presetRole: "warmup" })), ...H], e.includeWarmup = !0) : e.includeWarmup = !1, i("includeCooldownPreset").checked) {
        const t = _t.map((n, a) => ({ ...n, id: "preset-cool-" + a + "-" + Date.now(), kind: "work", duration: Number(T.value), presetRole: "cooldown" }));
        H = [...H, ...t], e.includeCooldown = !0;
      } else e.includeCooldown = !1;
      _();
    }
  }
  function Wi() {
    const e = i("upcomingCountSetting");
    if (!e) return;
    const t = Math.max(1, m.length - 1), n = Re;
    e.innerHTML = "";
    for (let r = 1; r <= t; r++) {
      const l = document.createElement("option");
      l.value = String(r), l.textContent = String(r), e.appendChild(l);
    }
    const a = document.createElement("option");
    a.value = "all", a.textContent = "All", e.appendChild(a);
    const o = n === "all" ? "all" : String(Math.min(Number(n) || 1, t));
    e.value = o, Re = o === "all" ? "all" : Number(o);
  }
  function _() {
    Number(R.value) * 60;
    const e = Number(T.value), t = Number(L.value), n = x[w], a = n != null && n.warmupOff ? [] : Wt(fe), o = Wt(H), r = Wt(ve);
    if (n && (n.total = Number(R.value), n.work = e, n.rest = t, n.rounds = Number(he.value) || 1, n.customSequence ? n.sequence = H.map((p) => ({ ...p })) : (n.strength = H.map((p) => [p.id, p.name, p.group, !!p.hidden]), n.warmup = fe.map((p) => ({ ...p })), n.cooldown = ve.map((p) => ({ ...p })))), n != null && n.customSequence) {
      const p = o.map((k) => {
        if (k.kind === "rest") {
          const ee = k.useGlobalTiming === !0 ? t : Number(k.duration) || t;
          return { ...k, duration: ee, rest: 0 };
        }
        const K = k.useGlobalTiming === !1 && Number(k.duration) || e;
        return { ...k, duration: K, rest: 0 };
      });
      n.autoRest && Number(n.autoRestDuration) > 0 ? (m = [], p.forEach((k, K) => {
        m.push(k);
        const ee = p[K + 1];
        k.kind !== "rest" && ee && ee.kind !== "rest" && m.push({
          id: "auto-rest-" + K,
          name: "Rest",
          group: "Rest",
          kind: "rest",
          hidden: !1,
          duration: Number(n.autoRestDuration),
          rest: 0,
          autoGenerated: !0
        });
      })) : m = p;
    } else
      m = [...a, ...o, ...r].map((p) => ({ ...p, duration: e, rest: t })), m.length && (m[m.length - 1].rest = 0);
    const l = Math.max(1, Math.min(10, Number(he.value) || 1)), s = m, u = s.length, g = s.reduce((p, k) => p + k.duration + k.rest, 0);
    m = [];
    for (let p = 1; p <= l; p++)
      if (s.forEach((k, K) => m.push({ ...k, id: k.id + (l > 1 ? "-r" + p : ""), round: p, roundIndex: K })), p < l && u)
        if (n != null && n.customSequence)
          m.push({ id: "round-break-" + p, name: "Rest", group: "Round " + (p + 1) + " next", kind: "rest", hidden: !1, duration: t, rest: 0, round: p, roundIndex: u, roundBreak: !0 });
        else {
          const k = m[m.length - 1];
          k.rest = t, k.roundBreakAfter = !0;
        }
    ft();
    const c = m.reduce((p, k) => p + k.duration + k.rest, 0), d = Math.round(g / 60), v = Math.round(c / 60), E = l > 1 ? ye(d) + " × " + l + " rounds (" + ye(v) + ")" : ye(v), A = [a.length ? "warm-up" : "", r.length ? "cooldown" : ""].filter(Boolean), C = n != null && n.customSequence ? E + " · " + u + " items" : E + " · " + j(e) + " / " + j(t) + (A.length ? " · " + A.join(" + ") : "");
    Bi.textContent = j(g);
    const B = u + " activities" + (l > 1 ? " × " + l : "");
    Ii.textContent = l > 1 ? l + " rounds · " + ye(v) + " total" : "1 round", n && (n.summary = C, n.activityCount = u);
    const I = f.querySelector(".workoutPanel.active .sub");
    I && (I.textContent = C), Hi.textContent = C, f.querySelectorAll(".workoutPanel.active .activityCount").forEach((p) => p.textContent = B), ft(), Zi(), Vt(), Be(), Wi(), P && le(), Ee.workout.classList.contains("active") && !O && cn();
  }
  const Gi = '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><g fill="currentColor"><circle cx="9" cy="6" r="1.6"/><circle cx="15" cy="6" r="1.6"/><circle cx="9" cy="12" r="1.6"/><circle cx="15" cy="12" r="1.6"/><circle cx="9" cy="18" r="1.6"/><circle cx="15" cy="18" r="1.6"/></g></svg>';
  function Zt(e, t) {
    const n = i(t);
    n.innerHTML = "", e.forEach((a, o) => {
      const r = document.createElement("div");
      r.className = "moveRow" + (a.hidden ? " hidden" : "") + (a.kind === "rest" ? " restItem" : ""), r.dataset.index = o;
      const l = a.kind === "rest" ? a.useGlobalTiming === !0 ? "Global timing" : j(a.duration) : a.useGlobalTiming === !1 ? j(a.duration) : "Global timing", s = a.kind === "rest" ? '<span class="moveKindBadge">Rest</span>' : "";
      r.innerHTML = '<button class="dragHandle" type="button" title="Drag to reorder" aria-label="Reorder ' + N(a.name) + '. Drag, or use the up and down arrow keys">' + Gi + '</button><div class="moveText"><div class="moveItemName">' + N(a.name) + s + '</div><div class="moveMeta">' + N(a.group) + " · " + N(l) + '</div></div><div class="moveActions"><button class="hideBtn" type="button">' + (a.hidden ? "Show" : "Hide") + '</button><button class="removeBtn" type="button" aria-label="Hold to remove ' + N(a.name) + '"><span class="removeFill"></span><span class="removeLabel">Remove</span></button></div>', r.querySelector(".hideBtn").addEventListener("click", () => {
        a.hidden = !a.hidden, _();
      });
      const u = r.querySelector(".removeBtn");
      At(u, u.querySelector(".removeFill"), 1200, () => {
        const c = e.indexOf(a);
        c < 0 || (e.splice(c, 1), _(), z("Removed " + a.name, { label: "Undo", run: () => {
          e.splice(Math.min(c, e.length), 0, a), _();
        } }));
      });
      const g = r.querySelector(".dragHandle");
      g.addEventListener("pointerdown", (c) => ji(c, r, n, e)), g.addEventListener("keydown", (c) => {
        var E, A;
        if (c.key !== "ArrowUp" && c.key !== "ArrowDown") return;
        c.preventDefault();
        const d = e.indexOf(a), v = d + (c.key === "ArrowUp" ? -1 : 1);
        v < 0 || v >= e.length || (e.splice(d, 1), e.splice(v, 0, a), _(), (A = (E = i(t).children[v]) == null ? void 0 : E.querySelector(".dragHandle")) == null || A.focus());
      }), n.appendChild(r);
    });
  }
  const Nn = () => {
    var e;
    return (e = window.matchMedia) == null ? void 0 : e.call(window, "(prefers-reduced-motion: reduce)").matches;
  }, In = "transform .24s cubic-bezier(.2,.8,.2,1)";
  function ji(e, t, n, a) {
    if (e.button !== void 0 && e.button !== 0) return;
    e.preventDefault();
    const o = e.currentTarget;
    try {
      o.setPointerCapture(e.pointerId);
    } catch {
    }
    const r = t.closest(".exerciseScroller"), l = e.clientY - t.getBoundingClientRect().top;
    let s = e.clientY, u = null;
    t.classList.add("dragging"), t.style.transition = "none";
    const g = () => {
      t.style.transform = "";
      const C = t.getBoundingClientRect().top;
      t.style.transform = "translateY(" + (s - l - C) + "px) scale(1.015)";
    }, c = (C) => {
      const B = [...n.children].filter((p) => p !== t), I = new Map(B.map((p) => [p, p.getBoundingClientRect().top]));
      C(), !Nn() && B.forEach((p) => {
        p.style.transition = "none", p.style.transform = "";
        const k = I.get(p) - p.getBoundingClientRect().top;
        k && (p.style.transform = "translateY(" + k + "px)", p.getBoundingClientRect(), p.style.transition = In, p.style.transform = "");
      });
    }, d = () => {
      const C = [...n.children].filter((p) => p !== t), B = s - l + t.offsetHeight / 2, I = C.find((p) => {
        const k = p.getBoundingClientRect();
        return B < k.top + k.height / 2;
      });
      I ? t.nextElementSibling !== I && c(() => n.insertBefore(t, I)) : n.lastElementChild !== t && c(() => n.appendChild(t)), g();
    }, v = () => {
      if (!r) return;
      const C = r.getBoundingClientRect(), B = 56, I = s < C.top + B ? -10 : s > C.bottom - B ? 10 : 0;
      I && (r.scrollTop += I, d());
    }, E = (C) => {
      s = C.clientY, d();
    }, A = () => {
      clearInterval(u), o.removeEventListener("pointermove", E), o.removeEventListener("pointerup", A), o.removeEventListener("pointercancel", A);
      const C = [...n.children].map((p) => Number(p.dataset.index)), B = C.some((p, k) => p !== k), I = () => {
        if (t.classList.remove("dragging"), t.style.transition = "", t.style.transform = "", B) {
          const p = C.map((k) => a[k]);
          a.splice(0, a.length, ...p);
        }
        _(), B && z("Order saved");
      };
      if (Nn()) {
        I();
        return;
      }
      t.style.transition = In, t.style.transform = "", setTimeout(I, 250);
    };
    o.addEventListener("pointermove", E), o.addEventListener("pointerup", A), o.addEventListener("pointercancel", A), u = setInterval(v, 30), g();
  }
  function Zi() {
    var o, r, l, s;
    const e = x[w], t = (o = i("warmupList")) == null ? void 0 : o.closest("section"), n = (r = i("cooldownList")) == null ? void 0 : r.closest("section"), a = (s = (l = i("strengthList")) == null ? void 0 : l.closest("section")) == null ? void 0 : s.querySelector(".sectionTitle");
    e != null && e.customSequence ? (t && (t.hidden = !0), n && (n.hidden = !0), a && (a.textContent = "Move sequence")) : (t && (t.hidden = !!(e != null && e.warmupOff)), n && (n.hidden = !1), a && (a.textContent = "Kettlebell work")), Zt(fe, "warmupList"), Zt(H, "strengthList"), Zt(ve, "cooldownList");
  }
  function Vt() {
    H.length > 0;
    const e = i("addMovementBtn"), t = i("addRestBtn");
    e && (e.textContent = "Add movement"), t && (t.textContent = "Add rest");
  }
  function Be() {
    const e = i("useGlobalTiming").checked, t = i("addMovementDuration"), n = i("addMovementUnit");
    t.disabled = e, n.disabled = e, t.parentElement.style.opacity = e ? ".38" : "1", i("globalTimingValue").textContent = "Use global timing · " + j(T.value);
    const a = i("useGlobalRestTiming").checked, o = i("addRestDuration"), r = i("addRestUnit");
    o.disabled = a, r.disabled = a, o.parentElement.style.opacity = a ? ".38" : "1", i("globalRestTimingValue").textContent = "Use global timing · " + j(L.value);
  }
  let Dn = "movement";
  function Yt(e) {
    Dn = e;
    const t = i("movementFields"), n = i("restFields");
    t.hidden = e !== "movement", n.hidden = e !== "rest", i("movementCreatorHeading").textContent = e === "rest" ? "Add rest" : "Add movement", i("movementCreator").setAttribute("aria-label", e === "rest" ? "Create rest" : "Create movement"), Be();
  }
  function Ut() {
    x[w];
    const e = P ? !0 : i("useGlobalTiming").checked, t = e ? Number(T.value) : Pn(
      i("addMovementDuration").value,
      i("addMovementUnit").value
    ), n = P ? !0 : i("useGlobalRestTiming").checked, a = n ? Number(L.value) : Pn(
      i("addRestDuration").value,
      i("addRestUnit").value
    );
    if (Dn === "rest") {
      const o = i("addRestTitle").value.trim() || "Rest", r = i("addRestGroup").value.trim() || "Rest";
      H.push({
        id: "rest-" + Date.now(),
        name: o,
        group: r,
        kind: "rest",
        hidden: !1,
        useGlobalTiming: n,
        duration: Math.max(5, a || Number(L.value))
      }), _(), i("movementCreator").hidden = !0, i("addRestTitle").value = "Rest", i("addRestGroup").value = "Rest", z("Rest added"), P && (Me("movements"), le());
    } else {
      const o = i("addMovementInput").value.trim();
      if (!o) return;
      const r = i("addMovementGroup").value.trim() || "Movement";
      H.push({
        id: "movement-" + Date.now(),
        name: o,
        group: r,
        kind: "work",
        hidden: !1,
        useGlobalTiming: e,
        duration: Math.max(5, t || Number(T.value))
      }), i("addMovementInput").value = "", i("addMovementGroup").value = "", _(), i("movementCreator").hidden = !0, z("Movement added"), P && (Me("movements"), le());
    }
    Vt();
  }
  let Kt = null;
  function z(e, t) {
    const n = i("toast");
    n.innerHTML = "";
    const a = document.createElement("span");
    if (a.textContent = e, n.appendChild(a), t) {
      const o = document.createElement("button");
      o.type = "button", o.className = "toastAction", o.textContent = t.label, o.addEventListener("click", () => {
        t.run(), n.classList.remove("show", "withAction"), clearTimeout(Kt);
      }), n.appendChild(o);
    }
    n.classList.toggle("withAction", !!t), n.classList.add("show"), clearTimeout(Kt), Kt = setTimeout(() => n.classList.remove("show", "withAction"), t ? 5e3 : 2200);
  }
  const Vi = ["Terrible", "Poor", "Meh", "Okay", "Good", "Great"], Yi = ["#6E63A8", "#5878A8", "#6F8B8A", "#5F9B72", "#D5A53E", "#D56B54"];
  function Hn(e) {
    return Math.max(0, Math.min(5, Math.floor(Number(e) / 100 * 6)));
  }
  function Ae(e, t) {
    return Vi[Hn(t)];
  }
  function Ui(e) {
    return Yi[Hn(e)];
  }
  function W(e) {
    return e.getFullYear() + "-" + String(e.getMonth() + 1).padStart(2, "0") + "-" + String(e.getDate()).padStart(2, "0");
  }
  function te() {
    return { morning: M().morningTime || "08:00", evening: M().eveningTime || "19:00" };
  }
  function Fe(e) {
    const [t, n] = String(e).split(":").map(Number);
    return (t || 0) * 60 + (n || 0);
  }
  function Ki(e) {
    const t = te();
    return e.getHours() * 60 + e.getMinutes() >= Fe(t.evening) ? "evening" : "morning";
  }
  function vt(e, t) {
    return y.checkins.find((n) => n.date === e && n.slot === t);
  }
  function bt(e) {
    return !!(e && e.mood != null && e.energy != null);
  }
  function xt() {
    const e = /* @__PURE__ */ new Date(), t = W(e), n = Ki(e), a = te(), o = e.getHours() * 60 + e.getMinutes();
    return n === "morning" && o < Fe(a.morning) || bt(vt(t, n)) ? null : n;
  }
  const de = i("checkinModal"), ce = i("checkinTab"), Ji = i("checkinBadge"), pe = { mood: { input: i("moodInput"), fill: i("moodFill") }, energy: { input: i("energyLevelInput"), fill: i("energyLevelFill") } };
  function On(e) {
    const { input: t, fill: n } = pe[e];
    n.style.width = t.value + "%", t.setAttribute("aria-valuetext", Ae(e, t.value));
  }
  Object.keys(pe).forEach((e) => pe[e].input.addEventListener("input", () => On(e)));
  let Q = null;
  function _n() {
    const e = te(), t = /* @__PURE__ */ new Date(), n = t.getHours() * 60 + t.getMinutes();
    return n < Fe(e.morning) ? "Next check-in at " + e.morning : n < Fe(e.evening) ? "Next check-in at " + e.evening : "Next check-in tomorrow at " + e.morning;
  }
  function Qi() {
    const e = te(), t = /* @__PURE__ */ new Date(), n = t.getHours() * 60 + t.getMinutes(), a = (o, r) => {
      const [l, s] = o.split(":").map(Number);
      return new Date(t.getFullYear(), t.getMonth(), t.getDate() + (r ? 1 : 0), l, s);
    };
    return n < Fe(e.morning) ? { date: a(e.morning), time: e.morning } : n < Fe(e.evening) ? { date: a(e.evening), time: e.evening } : { date: a(e.morning, !0), time: e.morning };
  }
  let Jt = null, Qt = null;
  function zn() {
    if (xt()) {
      yt(), we();
      return;
    }
    const e = Qi(), t = Math.max(0, Math.round((e.date - Date.now()) / 1e3)), n = Math.floor(t / 3600), a = Math.floor(t % 3600 / 60), o = t % 60;
    i("peekCountdown").textContent = n + ":" + String(a).padStart(2, "0") + ":" + String(o).padStart(2, "0"), i("peekAt").textContent = "Available at " + e.time;
  }
  function $i() {
    zn(), ce.classList.add("peek"), clearInterval(Qt), Qt = setInterval(zn, 1e3), clearTimeout(Jt), Jt = setTimeout(yt, 6e3);
  }
  function yt() {
    ce.classList.remove("peek"), clearInterval(Qt), clearTimeout(Jt);
  }
  function qn() {
    const e = xt();
    if (!e) {
      ce.classList.contains("peek") ? yt() : $i();
      return;
    }
    Q = { date: W(/* @__PURE__ */ new Date()), slot: e };
    const n = vt(Q.date, e), a = y.checkins.find((r) => bt(r));
    Object.keys(pe).forEach((r) => {
      pe[r].input.value = (n == null ? void 0 : n[r]) ?? (a == null ? void 0 : a[r]) ?? 50, On(r);
    });
    const o = te()[e];
    i("checkinEyebrow").textContent = (e === "morning" ? "Morning" : "Evening") + " · " + o, i("checkinTitle").textContent = e === "morning" ? "Morning check-in" : "Evening check-in", de.classList.add("open"), de.setAttribute("aria-hidden", "false"), requestAnimationFrame(() => pe.mood.input.focus());
  }
  function Qe() {
    de.classList.remove("open"), de.setAttribute("aria-hidden", "true"), Q && ($e = Q.date + "-" + Q.slot);
    try {
      localStorage.setItem("move-assistant-dismissed", $e);
    } catch {
    }
    Q = null, we();
  }
  function Xi() {
    if (!Q) return;
    if (bt(vt(Q.date, Q.slot))) {
      Qe();
      return;
    }
    const { date: e, slot: t } = Q;
    let n = vt(e, t);
    n || (n = { date: e, slot: t }, y.checkins.unshift(n), y.checkins = y.checkins.slice(0, 2e3)), n.mood = Number(pe.mood.input.value), n.energy = Number(pe.energy.input.value), n.scale = 100, n.at = (/* @__PURE__ */ new Date()).toISOString(), be(), h.fire("checkin", { slot: t, mood: n.mood, energy: n.energy, mood_label: Ae("mood", n.mood), energy_label: Ae("energy", n.energy) }), z((t === "morning" ? "Morning" : "Evening") + " check-in saved"), Qe(), wt(), Xe(), Le(), se();
  }
  let $e = "";
  try {
    $e = localStorage.getItem("move-assistant-dismissed") || "";
  } catch {
  }
  function we() {
    const e = xt();
    Ji.hidden = !e, ce.hidden = !e, e || yt(), ce.classList.toggle("due", !!e), ce.setAttribute("aria-label", e ? (e === "morning" ? "Morning" : "Evening") + " check-in is due" : _n()), ce.title = e ? "Check in now" : _n();
  }
  function $t() {
    we();
    const e = xt();
    !e || de.classList.contains("open") || M().checkinAutoOpen !== !1 && (!Ee.home.classList.contains("active") || Z.classList.contains("open") || $e !== W(/* @__PURE__ */ new Date()) + "-" + e && qn());
  }
  ce.addEventListener("click", qn), i("checkinLater").addEventListener("click", Qe), i("checkinSave").addEventListener("click", Xi), de.addEventListener("click", (e) => {
    e.target === de && Qe();
  }), de.addEventListener("keydown", (e) => {
    e.key === "Escape" && (e.preventDefault(), Qe());
  }), setInterval($t, 3e4);
  function wt() {
    const e = W(/* @__PURE__ */ new Date()), t = (n) => y.checkins.find((a) => a.date === e && a[n] != null);
    [["mood", "moodMeta"], ["energy", "energyLevelMeta"]].forEach(([n, a]) => {
      const o = t(n);
      i(a).textContent = o ? Ae(n, o[n]) : "—";
    });
  }
  function Xe() {
    const e = i("feelCard");
    if (!e) return;
    const t = /* @__PURE__ */ new Date(), n = new Date(t.getFullYear(), t.getMonth(), t.getDate() - (t.getDay() + 6) % 7), a = [...Array(7)].map((g, c) => {
      const d = new Date(n.getFullYear(), n.getMonth(), n.getDate() + c), v = W(d), E = y.checkins.filter((C) => C.date === v), A = (C) => {
        const B = E.map((I) => I[C]).filter((I) => I != null);
        return B.length ? B.reduce((I, p) => I + p, 0) / B.length : null;
      };
      return { d, key: v, mood: A("mood"), energy: A("energy"), count: E.filter(bt).length, future: d > t && v !== W(t) };
    }), o = (g) => {
      const c = a.map((d) => d[g]).filter((d) => d != null);
      return c.length ? c.reduce((d, v) => d + v, 0) / c.length : null;
    }, r = o("mood"), l = o("energy"), s = (g, c) => '<div class="feelMeter"><div class="feelMeterTop"><span>' + g + "</span><span>" + (c == null ? "—" : N(Ae("", c))) + '</span></div><div class="feelTrack"><span style="width:' + (c == null ? 0 : Math.max(4, c)) + "%;background:" + (c == null ? "transparent" : Ui(c)) + '"></span></div></div>', u = a.filter((g) => g.mood != null && g.energy != null).sort((g, c) => c.mood + c.energy - (g.mood + g.energy))[0];
    e.innerHTML = '<div class="feelTop"><div class="feelSummary"><div class="feelHeadline">' + (r == null ? "No check-ins yet" : N(Ae("", (r + l) / 2))) + '</div><div class="weekCopy">' + (r == null ? "Your first check-in will appear here." : "on average this week" + (u ? " · best day " + N(new Intl.DateTimeFormat(void 0, { weekday: "long" }).format(u.d)) : "")) + '</div></div></div><div class="feelDays">' + a.map(
      (g) => '<div class="weekChip feelDay' + (g.future ? " future" : "") + (g.key === W(t) ? " today" : "") + '"><div class="weekChipTop"><strong>' + N(new Intl.DateTimeFormat(void 0, { weekday: "short" }).format(g.d)) + "</strong>" + (g.count >= 2 ? '<span class="weekTick">✓</span>' : '<span class="feelDots">' + "●".repeat(g.count) + "</span>") + "</div>" + s("Mood", g.mood) + s("Energy", g.energy) + "</div>"
    ).join("") + "</div>";
  }
  const kt = i("upcomingCountSetting");
  kt.addEventListener("change", () => {
    Re = kt.value === "all" ? "all" : Number(kt.value), ni();
  });
  const et = i("tempoRevealBtn"), Xt = i("tempoExperiment"), $ = i("tempoQuad"), Pe = i("tempoDot"), ea = i("tempoEstimate"), ta = i("tempoReadout");
  let Ne = { x: 0.5, y: 0.5 }, tt = !1, St = { total: 20, work: 45, rest: 15 };
  function en(e, t, n, a) {
    const o = Math.max(t, Math.min(n, e));
    return Math.round((o - t) / a) * a + t;
  }
  function na(e, t) {
    const n = (e - 0.5) * 2, a = (t - 0.5) * 2, o = en(
      St.total + n * 5 + a * 8,
      Number(R.min),
      Number(R.max),
      Number(R.step)
    ), r = en(
      St.work + n * 10 + a * 8,
      Number(T.min),
      Number(T.max),
      Number(T.step)
    ), l = en(
      St.rest + n * 6 + a * 6,
      Number(L.min),
      Number(L.max),
      Number(L.step)
    );
    return R.value = o, T.value = r, L.value = l, Mn.textContent = r + " sec", En.textContent = l + " sec", ft(), { total: o, work: r, rest: l };
  }
  function tn(e, t) {
    const n = e < 0.34 ? "Low" : e > 0.66 ? "Hard" : "Medium", a = t < 0.34 ? "Fast" : t > 0.66 ? "Slow" : "Balanced", o = na(e, t);
    ta.textContent = n + " + " + a, ea.textContent = o.total + " min", $.setAttribute("aria-valuetext", n + " and " + a + ", estimated " + o.total + " minutes");
  }
  function nn(e) {
    const t = $.getBoundingClientRect(), n = Math.max(0, Math.min(1, (e.clientX - t.left) / t.width)), a = Math.max(0, Math.min(1, (e.clientY - t.top) / t.height));
    Ne = { x: n, y: a }, Pe.style.left = n * 100 + "%", Pe.style.top = a * 100 + "%", tn(n, a);
  }
  et.addEventListener("click", () => {
    const e = Xt.hidden;
    Xt.hidden = !e, et.setAttribute("aria-expanded", e ? "true" : "false"), et.textContent = e ? "Now close this" : "Don’t try this!", e && (St = {
      total: Number(R.value),
      work: Number(T.value),
      rest: Number(L.value)
    }, Ne = { x: 0.5, y: 0.5 }, Pe.style.left = "50%", Pe.style.top = "50%", tn(Ne.x, Ne.y));
  }), f.querySelectorAll("[data-feedback-rating]").forEach((e) => e.addEventListener("click", () => {
    Number(e.dataset.feedbackRating), f.querySelectorAll("[data-feedback-rating]").forEach((t) => t.classList.toggle("selected", t === e));
  }));
  const Ct = i("testingFeedbackForm"), Wn = i("testingFeedbackThanks"), ia = i("testingFeedbackAgain");
  Ct.addEventListener("submit", (e) => {
    e.preventDefault(), Ct.hidden = !0, Wn.hidden = !1, z("Feedback captured for prototype");
  }), ia.addEventListener("click", (e) => {
    e.preventDefault(), Ct.reset(), f.querySelectorAll("[data-feedback-rating]").forEach((t) => t.classList.remove("selected")), Wn.hidden = !0, Ct.hidden = !1;
  }), $.addEventListener("pointerdown", (e) => {
    var t;
    tt = !0, nn(e);
    try {
      (t = $.setPointerCapture) == null || t.call($, e.pointerId);
    } catch {
    }
  }), $.addEventListener("pointermove", (e) => {
    tt && nn(e);
  }), $.addEventListener("pointerup", (e) => {
    tt && (tt = !1, nn(e), _());
  }), $.addEventListener("pointercancel", () => tt = !1), $.addEventListener("keydown", (e) => {
    let { x: t, y: n } = Ne, a = !0;
    e.key === "ArrowLeft" ? t -= 0.05 : e.key === "ArrowRight" ? t += 0.05 : e.key === "ArrowUp" ? n -= 0.05 : e.key === "ArrowDown" ? n += 0.05 : a = !1, a && (e.preventDefault(), t = Math.max(0, Math.min(1, t)), n = Math.max(0, Math.min(1, n)), Ne = { x: t, y: n }, Pe.style.left = t * 100 + "%", Pe.style.top = n * 100 + "%", tn(t, n), _());
  });
  const Z = i("workoutModal");
  let nt = null;
  function Ie(e) {
    return e.map((t) => ({ ...t }));
  }
  function aa() {
    const e = x[w];
    return {
      key: w,
      profile: e ? JSON.parse(JSON.stringify(e)) : null,
      warmup: Ie(fe),
      strength: Ie(H),
      cooldown: Ie(ve),
      total: Number(R.value),
      work: Number(T.value),
      rest: Number(L.value),
      rounds: Number(he.value) || 1
    };
  }
  function Gn(e = !1) {
    P = !!e, nt = aa(), i("moveEditorTitle").textContent = P ? "Create new move" : "Edit move", i("moveEditorSubtitle").textContent = "Build the sequence first, then set timing, then finish the move.", i("moveEditorSubtitle").hidden = !P, i("warmupRow").hidden = P, i("deleteMoveOpen").hidden = P;
    const t = i("createMoveOptions");
    t.hidden = !P;
    {
      const n = x[w];
      i("includeWarmupPreset").checked = !!(n != null && n.includeWarmup), i("includeCooldownPreset").checked = !!(n != null && n.includeCooldown);
    }
    if (jn(), P) {
      i("useGlobalTiming").checked = !0, i("useGlobalRestTiming").checked = !0;
      const n = x[w];
      Gt((n == null ? void 0 : n.preset) || "movement", !1);
    }
    i("movementCreator").hidden = !0, Yt("movement"), Vt(), Be(), Xt.hidden = !0, et.setAttribute("aria-expanded", "false"), et.textContent = "Don’t try this!", Z.classList.toggle("createMode", P), Z.querySelector(".modal").classList.toggle("createMode", P), Z.classList.add("open"), Z.setAttribute("aria-hidden", "false"), P && Ei();
  }
  function oa() {
    const e = x[w];
    return e != null && e.customSequence ? !!e.includeWarmup : !(e != null && e.warmupOff);
  }
  function jn() {
    const e = oa(), t = i("warmupSwitch");
    t.classList.toggle("on", e), t.setAttribute("aria-checked", String(e));
  }
  i("warmupSwitch").addEventListener("click", () => {
    const e = x[w];
    e && (e.customSequence ? (i("includeWarmupPreset").checked = !e.includeWarmup, jt()) : (e.warmupOff = !e.warmupOff, _()), jn());
  });
  function Tt() {
    Z.classList.contains("createMode") && Ri(), Z.classList.remove("createMode"), Z.querySelector(".modal").classList.remove("createMode"), Z.classList.remove("open"), Z.setAttribute("aria-hidden", "true");
  }
  function Zn() {
    if (!nt) return;
    const e = nt;
    e.profile && (x[e.key] = JSON.parse(JSON.stringify(e.profile))), w = e.key, fe = Ie(e.warmup), H = Ie(e.strength), ve = Ie(e.cooldown), R.value = e.total, T.value = e.work, L.value = e.rest, he.value = e.rounds || 1;
    const t = x[w];
    if (t) {
      f.querySelectorAll(".workoutPanel[data-workout]").forEach((a) => a.classList.toggle("active", a.dataset.workout === w));
      const n = f.querySelector(".workoutPanel.active");
      if (n) {
        const a = n.querySelector(".workoutName");
        a && (a.textContent = t.name);
        const o = n.querySelector(".panelCollapsedText");
        o && (o.textContent = t.name);
        const r = n.querySelector(".sourceTag");
        r && (r.textContent = t.source);
      }
      S.value = t.name;
    }
    _();
  }
  i("cancelWorkoutEdit").addEventListener("click", () => {
    if (P) {
      const e = w;
      delete x[e], P = !1, xe = null, J(y.order.find((t) => x[t]) || Object.keys(x)[0]);
    } else
      Zn();
    Tt();
  }), i("saveWorkoutEdit").addEventListener("click", () => {
    const e = x[w], t = S.value.trim() || "New move";
    if (e && (e.name = t), _(), P && e)
      qt(w, e), f.querySelectorAll(".workoutPanel[data-workout]").forEach((n) => n.classList.toggle("active", n.dataset.workout === w)), P = !1, xe = null, y.order.includes(w) || y.order.push(w), z("Move created");
    else {
      const n = f.querySelector(".workoutPanel.active");
      if (n) {
        const a = n.querySelector(".workoutName");
        a && (a.textContent = t);
        const o = n.querySelector(".panelCollapsedText");
        o && (o.textContent = t);
      }
      z("Move saved");
    }
    nt = null, Tt(), be();
  }), Z.addEventListener("click", (e) => {
    if (e.target === Z) {
      if (P) {
        const t = w;
        delete x[t], P = !1, xe = null, J(y.order.find((n) => x[n]) || Object.keys(x)[0]);
      } else
        Zn();
      Tt();
    }
  }), i("addMovementBtn").addEventListener("click", () => {
    const e = i("movementCreator");
    e.hidden = !1, Yt("movement"), Be(), i("addMovementInput").focus();
  }), i("addRestBtn").addEventListener("click", () => {
    const e = i("movementCreator");
    e.hidden = !1, Yt("rest"), i("addRestTitle").focus();
  }), i("closeMovementCreator").addEventListener("click", () => {
    i("movementCreator").hidden = !0;
  }), i("useGlobalTiming").addEventListener("change", Be), i("useGlobalRestTiming").addEventListener("change", Be), f.querySelectorAll(".createPresetBtn").forEach((e) => e.addEventListener("click", () => {
    Gt(e.dataset.movePreset, !0), _();
  })), i("includeWarmupPreset").addEventListener("change", jt), i("includeCooldownPreset").addEventListener("change", jt), i("includeWarmupPreset").addEventListener("change", le), i("includeCooldownPreset").addEventListener("change", le), S.addEventListener("input", le), i("confirmAddMovement").addEventListener("click", Ut), i("confirmAddRest").addEventListener("click", Ut), i("addMovementInput").addEventListener("keydown", (e) => {
    e.key === "Enter" && Ut();
  });
  const it = i("countdown"), an = i("countNum"), ne = i("countdownPixelCanvas");
  let at = null, on = "appear";
  class ra {
    constructor(t, n, a, o, r, l, s) {
      this.width = t.width, this.height = t.height, this.ctx = n, this.x = a, this.y = o, this.color = r, this.speed = (Math.random() * 0.8 + 0.1) * l, this.size = 0, this.sizeStep = Math.random() * 0.4, this.minSize = 0.5, this.maxSizeInteger = 2, this.maxSize = Math.random() * (this.maxSizeInteger - this.minSize) + this.minSize, this.delay = s, this.counter = 0, this.counterStep = Math.random() * 4 + (this.width + this.height) * 0.01, this.isIdle = !1, this.isReverse = !1, this.isShimmer = !1;
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
  let rn = [], Vn = 1, Yn = 1;
  function ke() {
    const e = parseFloat(getComputedStyle(i("app")).zoom);
    return Number.isFinite(e) && e > 0 ? e : 1;
  }
  function sa() {
    var g;
    if (!ne) return;
    const e = ke(), t = Math.max(1, window.innerWidth / e), n = Math.max(1, window.innerHeight / e);
    Vn = t, Yn = n;
    const a = Math.min(window.devicePixelRatio || 1, 2);
    ne.width = Math.floor(t * a), ne.height = Math.floor(n * a), ne.style.width = t + "px", ne.style.height = n + "px";
    const o = ne.getContext("2d");
    o.setTransform(a, 0, 0, a, 0, 0);
    const r = ["#f2fbff", "#d4effc", "#a9e0fa", "#6cc8f6"], l = 12, s = (g = window.matchMedia) == null ? void 0 : g.call(window, "(prefers-reduced-motion: reduce)").matches, u = s ? 0 : 0.055;
    rn = [];
    for (let c = 0; c < t; c += l)
      for (let d = 0; d < n; d += l) {
        const v = c - t / 2, E = d - n / 2, A = Math.sqrt(v * v + E * E), C = s ? 0 : Math.random() * 75 + A * 0.05, B = new ra({ width: t, height: n }, o, c, d, r[Math.floor(Math.random() * r.length)], u, C);
        B.maxSizeInteger = 4, B.maxSize = Math.random() * 3.2 + 0.8, B.sizeStep = 0.35 + Math.random() * 0.45, rn.push(B);
      }
  }
  function Un(e) {
    cancelAnimationFrame(at), on = e;
    const t = ne == null ? void 0 : ne.getContext("2d");
    if (!t) return;
    function n() {
      t.clearRect(0, 0, Vn, Yn);
      let a = !0;
      rn.forEach((o) => {
        o[on](), o.isIdle || (a = !1);
      }), on === "disappear" && a || (at = requestAnimationFrame(n));
    }
    at = requestAnimationFrame(n);
  }
  function Lt() {
    cancelAnimationFrame(at), sa(), Un("appear"), setTimeout(() => Un("disappear"), 560);
  }
  window.addEventListener("resize", () => {
    it.classList.contains("active") && Lt();
  });
  const ot = i("pixelTrailCanvas"), De = ot.getContext("2d");
  let ie = !0, He = 0.7, Oe = 600, rt = [], _e = null, ue = { x: 0, y: 0, ready: !1 };
  function Kn() {
    const e = F.getBoundingClientRect(), t = ke(), n = Math.min(window.devicePixelRatio || 1, 2), a = Math.max(1, e.width / t), o = Math.max(1, e.height / t);
    ot.width = Math.max(1, Math.floor(a * n)), ot.height = Math.max(1, Math.floor(o * n)), ot.style.width = a + "px", ot.style.height = o + "px", De.setTransform(n, 0, 0, n, 0, 0);
  }
  function la(e, t) {
    if (!ie) return;
    const n = performance.now();
    ue.ready || (ue = { x: e, y: t, ready: !0 });
    const a = 7;
    for (let o = 1; o <= a; o++) {
      const r = o / a;
      rt.push({
        x: ue.x + (e - ue.x) * r,
        y: ue.y + (t - ue.y) * r,
        born: n - (a - o) * 10
      });
    }
    ue = { x: e, y: t, ready: !0 };
  }
  function Mt(e) {
    if (_e = null, !D) return;
    if (!Ee.workout.classList.contains("active")) {
      _e = requestAnimationFrame(Mt);
      return;
    }
    const t = F.getBoundingClientRect(), n = ke();
    De.clearRect(0, 0, t.width / n, t.height / n), ie && (rt = rt.filter((o) => e - o.born < Oe), De.fillStyle = i("app").classList.contains("light") ? "#03A9F4" : "#f4f4f4", rt.forEach((o) => {
      const r = (e - o.born) / Oe, l = (1 - r) * He, s = Math.round(o.x / 14) * 14, u = Math.round(o.y / 14) * 14;
      De.globalAlpha = Math.max(0, l);
      const g = 2 + 5 * (1 - r) * He;
      De.fillRect(s - g / 2, u - g / 2, g, g);
    }), De.globalAlpha = 1), _e = requestAnimationFrame(Mt);
  }
  F.addEventListener("pointermove", (e) => {
    const t = F.getBoundingClientRect(), n = ke();
    la((e.clientX - t.left) / n, (e.clientY - t.top) / n);
  }), F.addEventListener("pointerleave", () => ue.ready = !1), new ResizeObserver(Kn).observe(F), Kn(), _e = requestAnimationFrame(Mt);
  const ge = i("movementRippleCanvas"), ze = ge.getContext("2d");
  let Se = !0, qe = null, da = performance.now();
  function Jn() {
    const e = ge.parentElement.getBoundingClientRect(), t = ke(), n = Math.max(1, e.width / t), a = Math.max(1, e.height / t), o = Math.min(window.devicePixelRatio || 1, 2);
    ge.width = Math.max(1, Math.floor(n * o)), ge.height = Math.max(1, Math.floor(a * o)), ge.style.width = n + "px", ge.style.height = a + "px", ze.setTransform(o, 0, 0, o, 0, 0);
  }
  function Qn() {
    var e;
    return G || ((e = m[b]) == null ? void 0 : e.kind) === "rest";
  }
  function ca() {
    const e = m[b];
    return Qn() ? 2200 : e ? e.kind === "warmup" || e.kind === "cooldown" ? 2400 : 1350 : 1600;
  }
  function Et(e) {
    if (qe = null, !D) return;
    if (!Ee.workout.classList.contains("active")) {
      qe = requestAnimationFrame(Et);
      return;
    }
    const t = ge.parentElement.getBoundingClientRect(), n = ke(), a = Math.max(1, t.width / n), o = Math.max(1, t.height / n);
    if (ze.clearRect(0, 0, a, o), Se) {
      const r = ca(), l = (e - da) % r / r, s = 15, u = Math.max(8, Math.round(s * o / Math.max(1, a))), g = a / (s + 1), c = o / (u + 1), d = a * 0.5, v = o * 0.52, E = Math.hypot(d, v), C = i("app").classList.contains("light") ? "34,34,34" : "244,244,244";
      for (let B = 1; B <= u; B++)
        for (let I = 1; I <= s; I++) {
          const p = I * g, k = B * c, K = Math.hypot(p - d, k - v) / E, ee = Qn(), Fa = ee ? Math.exp(-Math.pow((K - (l * 0.82 + 0.08) % 1 * 1.18) * 5.5, 2)) : 0, Pa = Math.exp(-Math.pow((K - l * 1.25) * 7, 2)), Nt = ee ? Fa : Pa, vi = ee ? 0.5 + 0.5 * Math.sin(l * Math.PI * 2 - K * 3) ** 2 : 0.35 + 0.65 * Math.sin(l * Math.PI * 2 - K * 5) ** 2, Na = ee ? 1.4 + Nt * 4.2 * vi : 1.2 + Nt * 5 * vi;
          ze.beginPath(), ze.arc(p, k, Na, 0, Math.PI * 2), ze.fillStyle = `rgba(${C},${ee ? 0.08 + Nt * 0.48 : 0.05 + Nt * 0.55})`, ze.fill();
        }
    }
    qe = requestAnimationFrame(Et);
  }
  new ResizeObserver(Jn).observe(ge.parentElement), Jn(), qe = requestAnimationFrame(Et);
  const st = i("exerciseTitle"), ae = i("exerciseMeta"), sn = i("stepLabel"), $n = i("digits"), Xn = i("fill"), We = i("progress"), me = i("pause"), pa = i("nextName"), ua = i("nextMeta"), ga = i("nextIcon"), Rt = i("skipNextSession");
  let V = null;
  function oe(e) {
    for (let t = Math.max(0, e); t < m.length; t++)
      if (!m[t].sessionHidden) return t;
    return -1;
  }
  function ma() {
    const e = m[b];
    if (!e) return { name: "Complete", meta: "Move finished", icon: "✓" };
    if (G) {
      const a = oe(b + 1), o = a >= 0 ? m[a] : null;
      return o ? { name: o.name, meta: o.group + " · " + o.duration + " sec", icon: o.kind === "cooldown" ? "↘" : o.kind === "warmup" ? "↗" : "●" } : { name: "Complete", meta: "Move finished", icon: "✓" };
    }
    if (e.rest > 0) return { name: "Rest", meta: e.rest + " sec · " + (e.roundBreakAfter ? "round " + (e.round + 1) + " next" : "recovery"), icon: "Ⅱ" };
    const t = oe(b + 1), n = t >= 0 ? m[t] : null;
    return n ? { name: n.name, meta: n.group + " · " + n.duration + " sec", icon: n.kind === "cooldown" ? "↘" : n.kind === "warmup" ? "↗" : "●" } : { name: "Complete", meta: "Move finished", icon: "✓" };
  }
  function ha() {
    if (!m[b]) return m.length;
    const t = oe(b + 1);
    return t < 0 ? m.length : t + 1;
  }
  function fa(e) {
    return e.kind === "cooldown" ? "↘" : e.kind === "warmup" ? "↗" : "●";
  }
  function Bt() {
    return m.length && m[m.length - 1].round || 1;
  }
  function ei(e) {
    const t = m[e];
    if (!t) return "";
    const n = Bt();
    if (n <= 1) return "Step " + (e + 1) + " of " + m.length;
    if (t.roundBreak) return "Round " + t.round + " of " + n + " · Rest";
    const a = m.filter((o) => o.round === t.round && !o.roundBreak).length;
    return "Round " + t.round + " of " + n + " · Step " + (t.roundIndex + 1) + " of " + a;
  }
  function ti() {
    return We.querySelector('[data-step="' + b + '"]');
  }
  function va() {
    m[b] && Number(We.dataset.round) !== (m[b].round || 1) && cn(), [...We.children].forEach((e) => {
      const t = Number(e.dataset.step);
      e.classList.toggle("done", t < b), e.classList.toggle("active", t === b), e.classList.toggle("rewindable", t <= b), e.disabled = t > b, t === b && e.style.setProperty("--segment-progress", "0%");
    }), m[b] && (sn.textContent = ei(b), Ze());
  }
  function ba(e) {
    const t = m.indexOf(e);
    t < 0 || t <= b || (e.sessionHidden = !e.sessionHidden, Ge(), z((e.sessionHidden ? "Hidden " : "Included ") + e.name + " for this session"));
  }
  function ni() {
    const e = i("upcomingList");
    if (!e) return;
    e.innerHTML = "";
    const t = ha(), n = m.slice(t);
    (Re === "all" ? n : n.slice(0, Math.max(1, Number(Re) || 1))).forEach((o) => {
      const r = document.createElement("section");
      r.className = "upcomingCard" + (o.sessionHidden ? " sessionHidden" : ""), r.innerHTML = '<div class="upcomingInfo"><div class="upcomingIcon" aria-hidden="true">' + fa(o) + '</div><div><div class="upcomingName">' + N(o.name) + '</div><div class="upcomingMeta">' + N(o.group) + " · " + o.duration + " sec" + (Bt() > 1 ? " · round " + o.round : "") + '</div></div></div><button class="skipSessionBtn" type="button">' + (o.sessionHidden ? "Include this session" : "Skip this session") + "</button>", r.querySelector(".skipSessionBtn").addEventListener("click", () => ba(o)), e.appendChild(r);
    });
  }
  function Ge() {
    const e = ma();
    if (pa.textContent = e.name, ua.textContent = e.meta, ga.textContent = e.icon, V = null, G) {
      const t = oe(b + 1);
      t >= 0 && (V = m[t]);
    } else {
      const t = m[b];
      if (t && t.rest > 0)
        V = null;
      else {
        const n = oe(b + 1);
        n >= 0 && (V = m[n]);
      }
    }
    Rt && (Rt.hidden = !V, Rt.textContent = V != null && V.sessionHidden ? "Include this session" : "Skip this session"), ni();
  }
  Rt.addEventListener("click", () => {
    V && (V.sessionHidden = !V.sessionHidden, z((V.sessionHidden ? "Hidden " : "Included ") + V.name + " for this session"), Ge());
  });
  let X = null, ln = null;
  function lt(e, t = {}) {
    const n = x[w];
    h.fire(e, { move: (n == null ? void 0 : n.name) || "", move_id: w, ...t });
  }
  function xa() {
    const e = x[w];
    X = { key: w, name: (e == null ? void 0 : e.name) || "Move", startedAt: Date.now(), active: 0 }, clearInterval(ln), ln = setInterval(() => {
      X && !q && X.active++;
    }, 1e3), lt("started", { steps: m.length });
  }
  function ii(e) {
    if (clearInterval(ln), !X) return;
    const t = X;
    X = null, lt(e ? "completed" : "ended", { seconds: t.active }), !(t.active < 30) && (y.history.unshift({ id: "h-" + t.startedAt, move_id: t.key, name: t.name, start: new Date(t.startedAt).toISOString(), seconds: t.active, completed: e }), y.history = y.history.slice(0, 1e3), be(), Le(), se());
  }
  function ya() {
    Ht("workout"), wa();
  }
  function dn() {
    ii(!1), clearInterval(O), clearInterval(mt), G = !1, q = !1, me.textContent = "Pause", i("app").classList.remove("resting", "paused"), it.classList.remove("active"), Ht("home");
  }
  function wa() {
    it.classList.add("active");
    let e = 5;
    an.textContent = e, requestAnimationFrame(Lt), clearInterval(mt), mt = setInterval(() => {
      e--, e > 0 ? (an.textContent = e, Lt()) : (clearInterval(mt), an.textContent = "GO", Lt(), setTimeout(() => {
        it.classList.remove("active"), cancelAnimationFrame(at), Sa();
      }, 650));
    }, 1e3);
  }
  function cn() {
    var t;
    We.innerHTML = "";
    const e = ((t = m[Math.max(0, b)] || m[0]) == null ? void 0 : t.round) || 1;
    We.dataset.round = e, m.forEach((n, a) => {
      if ((n.round || 1) !== e) return;
      const o = document.createElement("button");
      o.dataset.step = a, o.type = "button", o.className = "progressSegment", o.setAttribute("aria-label", "Go to " + n.name), o.addEventListener("click", () => {
        a <= b && ka(a);
      }), We.appendChild(o);
    });
  }
  function ka(e) {
    e < 0 || e >= m.length || e > b || (clearInterval(O), G = !1, i("app").classList.remove("resting"), b = e, q = !1, i("app").classList.remove("paused"), me.textContent = "Pause", je(), O = setInterval(Ce, 1e3));
  }
  function Sa() {
    if (b = oe(0), q = !1, i("app").classList.remove("paused"), me.textContent = "Pause", cn(), b < 0) {
      st.textContent = "No activities", ae.textContent = "Open Edit and enable or add a movement", ae.hidden = !1;
      return;
    }
    xa(), je(), clearInterval(O), O = setInterval(Ce, 1e3);
  }
  function je() {
    G = !1;
    const e = m[b];
    i("app").classList.toggle("resting", e.kind === "rest"), Y = e.duration, gt = e.duration, st.textContent = e.name, ae.textContent = e.group, ae.hidden = !0, sn.textContent = ei(b), X && lt("step", { name: e.name, group: e.group, kind: e.kind, step: b + 1, of: m.length, round: e.round || 1, rounds: Bt(), duration: e.duration }), Ge(), va();
  }
  function Ze() {
    $n.textContent = Y;
    const e = Y / gt * 100;
    Xn.style.width = e + "%";
    const t = ti();
    if (t && !G) {
      const n = 100 - e;
      t.style.setProperty("--segment-progress", n + "%");
    }
  }
  function Ce() {
    if (!q && (Y--, Ze(), Y <= 0)) {
      const e = m[b];
      e.rest > 0 ? ai(e.rest) : dt();
    }
  }
  function ai(e) {
    var n;
    G = !0, i("app").classList.add("resting");
    const t = ti();
    t && t.style.setProperty("--segment-progress", "100%"), clearInterval(O), Y = e, gt = e, X && lt("rest", { duration: e }), st.textContent = "Rest", ae.textContent = (n = m[b]) != null && n.roundBreakAfter ? "Round " + (m[b].round + 1) + " next" : "Recovery", Ge(), Ze(), O = setInterval(() => {
      q || (Y--, Ze(), Y <= 0 && (clearInterval(O), dt(), O = setInterval(Ce, 1e3)));
    }, 1e3);
  }
  function dt() {
    G = !1;
    const e = oe(b + 1);
    if (e >= 0)
      b = e, je();
    else {
      q = !1, me.textContent = "Pause", i("app").classList.remove("resting", "paused"), clearInterval(O), st.textContent = "Complete", ae.textContent = "Move finished", ae.hidden = !1, $n.textContent = "✓";
      {
        const t = Bt();
        sn.textContent = t > 1 ? t + " rounds done" : m.filter((n) => !n.roundBreak).length + " steps done";
      }
      ii(!0);
      {
        const t = ui(7).reduce((n, a) => n + a.minutes, 0);
        ae.textContent = "Move finished · " + t + " min in the last 7 days";
      }
      Xn.style.width = "100%", Ge();
    }
  }
  i("skipExercise").addEventListener("click", () => {
    clearInterval(O);
    const e = m[b];
    if (G) {
      G = !1, i("app").classList.remove("resting");
      const n = oe(b + 1);
      n >= 0 ? (b = n, je(), O = setInterval(Ce, 1e3)) : dt();
      return;
    }
    if (e && e.rest > 0) {
      ai(e.rest);
      return;
    }
    const t = oe(b + 1);
    t >= 0 ? (b = t, je(), O = setInterval(Ce, 1e3)) : dt();
  }), i("restartSegment").addEventListener("click", () => {
    if (clearInterval(O), q = !1, i("app").classList.remove("paused"), me.textContent = "Pause", G) {
      const e = m[b];
      Y = e.rest, gt = e.rest, st.textContent = "Rest", ae.textContent = "Recovery", i("app").classList.add("resting"), Ge(), Ze();
    } else
      je();
    O = setInterval(G ? () => {
      q || (Y--, Ze(), Y <= 0 && (clearInterval(O), dt(), O = setInterval(Ce, 1e3)));
    } : Ce, 1e3);
  });
  function At(e, t, n, a) {
    let o = 0, r = null, l = !1;
    function s() {
      r && cancelAnimationFrame(r), r = null, o = 0, l = !1, t.style.width = "0%", e.classList.remove("holding");
    }
    function u(d) {
      if (!l) return;
      o || (o = d);
      const v = Math.min(1, (d - o) / n);
      if (t.style.width = v * 100 + "%", v >= 1) {
        l = !1, r && cancelAnimationFrame(r), r = null, t.style.width = "100%", setTimeout(() => t.style.width = "0%", 90), a();
        return;
      }
      r = requestAnimationFrame(u);
    }
    function g(d) {
      var v;
      if (!(d && d.button !== void 0 && d.button !== 0)) {
        d == null || d.preventDefault(), s(), l = !0, e.classList.add("holding");
        try {
          (v = e.setPointerCapture) == null || v.call(e, d.pointerId);
        } catch {
        }
        r = requestAnimationFrame(u);
      }
    }
    function c() {
      l && s();
    }
    e.addEventListener("pointerdown", g), e.addEventListener("pointerup", c), e.addEventListener("pointercancel", c), e.addEventListener("lostpointercapture", c), e.addEventListener("keydown", (d) => {
      (d.key === " " || d.key === "Enter") && !d.repeat && g(d);
    }), e.addEventListener("keyup", (d) => {
      (d.key === " " || d.key === "Enter") && c();
    });
  }
  const Ca = i("endWorkout");
  At(Ca, i("holdEndFill"), 1500, dn);
  const Ve = i("deleteMoveConfirm");
  i("deleteMoveOpen").addEventListener("click", () => {
    Ve.classList.add("open"), Ve.setAttribute("aria-hidden", "false");
  }), i("deleteMoveCancel").addEventListener("click", () => {
    Ve.classList.remove("open"), Ve.setAttribute("aria-hidden", "true");
  });
  function Ta() {
    const e = w, t = f.querySelector('.workoutPanel[data-workout="' + e + '"]');
    t && t.remove(), delete x[e], y.order = y.order.filter((a) => a !== e);
    let n = f.querySelector(".workoutPanel[data-workout]");
    if (!n) {
      const a = "custom-" + Date.now();
      x[a] = { name: "New move", source: "Custom routine", total: 20, work: 45, rest: 15, customSequence: !0, preset: "movement", sequence: [], strength: [] }, y.order.push(a), n = qt(a, x[a]);
    }
    Ve.classList.remove("open"), Ve.setAttribute("aria-hidden", "true"), nt = null, Tt(), J(n.dataset.workout), be(), z("Move deleted");
  }
  At(i("deleteMoveYes"), i("deleteMoveFill"), 1500, Ta);
  const pn = f.querySelector(".rubberTabs"), Ye = i("rubberIndicator");
  function ct(e, t = !0) {
    if (!e || !pn || !Ye) return;
    const n = pn.getBoundingClientRect(), a = e.getBoundingClientRect();
    Ye.style.transition = t ? "left .34s cubic-bezier(.2,1.35,.4,1),width .34s cubic-bezier(.2,1.35,.4,1),transform .18s ease" : "none";
    const o = ke();
    Ye.style.left = (a.left - n.left) / o + pn.scrollLeft + "px", Ye.style.width = a.width / o + "px", t && (Ye.style.transform = "scaleX(1.08)", setTimeout(() => Ye.style.transform = "scaleX(1)", 180));
  }
  f.querySelectorAll(".tab").forEach((e) => e.addEventListener("click", () => {
    e.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "smooth" }), f.querySelectorAll(".tab").forEach((t) => t.classList.remove("active")), f.querySelectorAll(".settingsPane").forEach((t) => t.classList.remove("active")), e.classList.add("active"), i(e.dataset.pane).classList.add("active"), ct(e, !0);
  })), requestAnimationFrame(() => ct(f.querySelector(".tab.active"), !1)), window.addEventListener("resize", () => ct(f.querySelector(".tab.active"), !1));
  const un = i("pixelTrailToggle"), gn = i("rippleToggle"), Ue = i("trailStrength"), Ke = i("trailLife");
  function U(e, t) {
    M()[e] = t, be();
  }
  const Je = { feel: !0, steps: !0, mood: !0, energyLevel: !0, ...M().toggles || {} };
  function oi() {
    f.querySelectorAll("[data-toggle]").forEach((t) => t.classList.toggle("on", Je[t.dataset.toggle] !== !1)), f.querySelector(".feelSection").hidden = !0, [["steps", "stepsRow"], ["mood", "moodRow"], ["energyLevel", "energyLevelRow"]].forEach(([t, n]) => {
      i(n).hidden = Je[t] === !1;
    });
    const e = ["steps", "mood", "energyLevel"].some((t) => Je[t] !== !1);
    f.querySelector(".activityCard").hidden = !e, i("insightCard").style.gridColumn = e ? "" : "span 12";
  }
  f.querySelectorAll("[data-toggle]").forEach((e) => e.addEventListener("click", () => {
    Je[e.dataset.toggle] = Je[e.dataset.toggle] === !1, oi(), U("toggles", { ...Je });
  })), oi();
  function La() {
    un.classList.toggle("on", ie), gn.classList.toggle("on", Se), Ue.value = Math.round(He * 100), i("trailStrengthValue").textContent = Ue.value + "%", Ke.value = Oe, i("trailLifeValue").textContent = Ke.value + " ms";
  }
  M().trailEnabled !== void 0 && (ie = M().trailEnabled), M().rippleEnabled !== void 0 && (Se = M().rippleEnabled), M().trailStrength !== void 0 && (He = M().trailStrength), M().trailMaxAge !== void 0 && (Oe = M().trailMaxAge), La(), un.addEventListener("click", () => {
    ie = !ie, un.classList.toggle("on", ie), ie || (rt = []), U("trailEnabled", ie);
  }), gn.addEventListener("click", () => {
    Se = !Se, gn.classList.toggle("on", Se), U("rippleEnabled", Se);
  }), Ue.addEventListener("input", () => {
    He = Number(Ue.value) / 100, i("trailStrengthValue").textContent = Ue.value + "%";
  }), Ue.addEventListener("change", () => U("trailStrength", He)), Ke.addEventListener("input", () => {
    Oe = Number(Ke.value), i("trailLifeValue").textContent = Ke.value + " ms";
  }), Ke.addEventListener("change", () => U("trailMaxAge", Oe)), kt.addEventListener("change", () => U("upcomingCount", Re));
  function ri(e) {
    f.querySelectorAll(".themeBtn").forEach((n) => n.classList.toggle("active", n.dataset.theme === e));
    const t = e === "light";
    i("app").classList.toggle("light", t), h.setLight(t);
  }
  ri(M().theme || "dark"), f.querySelectorAll(".themeBtn").forEach((e) => e.addEventListener("click", () => {
    ri(e.dataset.theme), U("theme", e.dataset.theme);
  }));
  const re = { steps: null, ...M().entities || {} };
  let Te = null, mn = {};
  function Ma(e) {
    const t = Object.values(e).filter((s) => s.entity_id.startsWith("sensor.") || s.entity_id.startsWith("input_number.")), n = (s) => s.attributes.friendly_name || s.entity_id, a = t.filter((s) => /step/i.test(s.entity_id) || /step/i.test(n(s)) || ["steps", "step"].includes(String(s.attributes.unit_of_measurement || "").toLowerCase())), o = t.filter((s) => !a.includes(s)), r = (s, u) => n(s).localeCompare(n(u)), l = (s, u) => /health_steps/.test(u.entity_id) - /health_steps/.test(s.entity_id) || r(s, u);
    return { suggested: a.sort(l), rest: o.sort(r), label: n };
  }
  function si(e) {
    const t = i("stepsEntity");
    if (!t || t.matches(":focus")) return;
    const { suggested: n, rest: a, label: o } = Ma(e), r = (u) => '<option value="' + N(u.entity_id) + '">' + N(o(u)) + "</option>";
    t.innerHTML = '<option value="">Not connected</option>' + (n.length ? '<optgroup label="Suggested">' + n.map(r).join("") + "</optgroup>" : "") + (a.length ? '<optgroup label="All sensors">' + a.map(r).join("") + "</optgroup>" : ""), t.value = re.steps || "";
    const l = i("stepsStatus"), s = re.steps && e[re.steps];
    l.textContent = s ? "Connected · " + o(s) : l.dataset.empty;
  }
  i("stepsEntity").addEventListener("change", () => {
    re.steps = i("stepsEntity").value || null, U("entities", { ...re }), mn = {}, pi(), Te && (si(Te), di(Te));
  });
  function Ea(e, t = 0) {
    return new Intl.NumberFormat(void 0, { maximumFractionDigits: t }).format(e);
  }
  function li() {
    const e = re.steps && (Te == null ? void 0 : Te[re.steps]), t = Number(e == null ? void 0 : e.state);
    return Number.isFinite(t) ? t : null;
  }
  function di(e) {
    var a;
    const t = re.steps, n = t ? Number((a = e[t]) == null ? void 0 : a.state) : NaN;
    i("stepsMeta").textContent = t ? Number.isFinite(n) ? Ea(n) : "—" : "Set up in Settings";
  }
  let ci = 0;
  async function pi() {
    const e = re.steps;
    if (!e || !h.ws) return;
    ci = Date.now();
    const t = /* @__PURE__ */ new Date(), n = new Date(t.getFullYear(), t.getMonth(), t.getDate() - 30);
    try {
      const a = await h.ws({ type: "recorder/statistics_during_period", start_time: n.toISOString(), end_time: t.toISOString(), statistic_ids: [e], period: "day", types: ["max"] }), o = (a == null ? void 0 : a[e]) || [], r = {};
      if (o.forEach((l) => {
        Number.isFinite(l.max) && (r[W(new Date(l.start))] = l.max);
      }), !Object.keys(r).length) {
        const l = await h.ws({ type: "history/history_during_period", start_time: n.toISOString(), end_time: t.toISOString(), entity_ids: [e], minimal_response: !0, no_attributes: !0, significant_changes_only: !1 });
        ((l == null ? void 0 : l[e]) || []).forEach((s) => {
          const u = Number(s.s ?? s.state), g = s.lu ? s.lu * 1e3 : Date.parse(s.last_updated || s.last_changed);
          if (!Number.isFinite(u) || !g) return;
          const c = W(new Date(g));
          r[c] = Math.max(r[c] || 0, u);
        });
      }
      mn = r, se();
    } catch {
    }
  }
  function Le() {
    se();
  }
  Le(), setInterval(() => {
    Le(), Xe(), we();
  }, 10 * 60 * 1e3);
  function ui(e) {
    const t = {}, n = {};
    y.history.forEach((l) => {
      const s = W(new Date(l.start));
      t[s] = (t[s] || 0) + (l.seconds || 0) / 60, n[s] = (n[s] || 0) + 1;
    });
    const a = /* @__PURE__ */ new Date(), o = W(a), r = [];
    for (let l = e - 1; l >= 0; l--) {
      const s = new Date(a.getFullYear(), a.getMonth(), a.getDate() - l), u = W(s), g = y.checkins.filter((d) => d.date === u), c = (d) => {
        const v = g.map((E) => E[d]).filter(Boolean);
        return v.length ? v.reduce((E, A) => E + A, 0) / v.length : null;
      };
      r.push({
        key: u,
        date: s,
        minutes: Math.round(t[u] || 0),
        moves: n[u] || 0,
        steps: u === o && li() != null ? li() : mn[u] ?? null,
        mood: c("mood"),
        energy: c("energy")
      });
    }
    return r;
  }
  function Ra(e) {
    let t = e.length - 1;
    e[t] && !e[t].minutes && t--;
    let n = 0;
    for (; t >= 0 && e[t].minutes > 0; )
      n++, t--;
    return n;
  }
  function se() {
    const e = i("insightCard");
    if (!e) return;
    const t = ui(30), n = Ra(t), a = t.reduce((d, v) => d + v.minutes, 0), o = /* @__PURE__ */ new Date(), r = W(o), l = new Date(o.getFullYear(), o.getMonth(), o.getDate() - (o.getDay() + 6) % 7), s = [...Array(7)].map((d, v) => {
      const E = new Date(l.getFullYear(), l.getMonth(), l.getDate() + v), A = W(E), C = t.find((B) => B.key === A);
      return { d: E, k: A, minutes: C ? C.minutes : 0, today: A === r, future: A > r };
    }), u = s.reduce((d, v) => d + v.minutes, 0), g = Math.max(10, ...s.map((d) => d.minutes)), c = (d, v, E) => '<div class="activityRow"><div class="activityRowIcon" aria-hidden="true">' + d + '</div><div><div class="activityRowName">' + N(v) + '</div><div class="activityRowMeta">' + N(E) + "</div></div></div>";
    e.innerHTML = '<div class="activityHeader"><div class="activityIcon" aria-hidden="true">↗</div><div class="activityTitle">Movement</div></div><div class="activityRows movementReadings">' + c("◷", "This week", u + " min") + c("↯", "Streak", n + " day" + (n === 1 ? "" : "s")) + c("▦", "30 days", a + " min") + '</div><div class="weekBars">' + s.map(
      (d) => '<div class="weekBar' + (d.today ? " today" : "") + (d.future ? " future" : "") + '" title="' + N(d.minutes + " min") + '"><div class="weekBarTrack"><span style="height:' + (d.minutes ? Math.max(6, d.minutes / g * 100) : 0) + '%"></span></div><div class="dayLabel">' + N(new Intl.DateTimeFormat(void 0, { weekday: "short" }).format(d.d)) + "</div></div>"
    ).join("") + "</div>";
  }
  const gi = i("tvNav");
  h.fullscreenSupported || (gi.hidden = !0), gi.addEventListener("click", () => h.toggleFullscreen()), f.addEventListener("keydown", (e) => {
    !Ee.workout.classList.contains("active") || it.classList.contains("active") || e.target.closest("input,select,textarea,.holdEnd") || (e.key === "MediaPlayPause" || e.key === " " && !e.target.closest("button") ? (e.preventDefault(), me.click()) : e.key === "MediaTrackNext" ? (e.preventDefault(), i("skipExercise").click()) : e.key === "MediaTrackPrevious" && (e.preventDefault(), i("restartSegment").click()));
  }), [R, T, L, he].forEach((e) => e.addEventListener("input", () => {
    const t = x[w];
    t && (t.total = Number(R.value), t.work = Number(T.value), t.rest = Number(L.value)), _();
  })), Tn.addEventListener("click", dn), Ln.addEventListener("click", () => Ht("settings")), i("settingsBack").addEventListener("click", dn), me.addEventListener("click", () => {
    q = !q, X && lt(q ? "paused" : "resumed"), me.textContent = q ? "Resume" : "Pause", i("app").classList.toggle("paused", q);
  }), J(w), wt(), Xe(), se(), i("healthHelpOpen").addEventListener("click", () => f.querySelector(".tab[data-pane=helpPane]").click()), At(i("resetStats"), i("resetStatsFill"), 1500, () => {
    y.history = [], y.checkins = [], $e = "";
    try {
      localStorage.removeItem("move-assistant-dismissed");
    } catch {
    }
    be(), Le(), Xe(), wt(), se(), we(), z("Stats reset");
  });
  const hn = i("morningTime"), fn = i("eveningTime"), vn = i("checkinAutoOpen");
  hn.value = te().morning, fn.value = te().evening, vn.classList.toggle("on", M().checkinAutoOpen !== !1), [["morningTime", hn], ["eveningTime", fn]].forEach(([e, t]) => t.addEventListener("change", () => {
    t.value && (U(e, t.value), we());
  })), vn.addEventListener("click", () => {
    const e = M().checkinAutoOpen === !1;
    vn.classList.toggle("on", e), U("checkinAutoOpen", e);
  }), setTimeout($t, 800);
  const mi = i("checkinNotify"), Ft = i("checkinNotifyTarget"), hi = i("checkinNotifyStatus"), Ba = hi.textContent;
  function fi() {
    const e = h.notifyServices(), t = e.filter((o) => o.startsWith("mobile_app_")), n = t.length ? t : e, a = (o) => o.replace(/^mobile_app_/, "").replace(/_/g, " ");
    Ft.innerHTML = n.map((o) => '<option value="' + N(o) + '">' + N(a(o)) + "</option>").join(""), !M().notifyTarget && n[0] && (M().notifyTarget = n[0]), Ft.value = M().notifyTarget || "";
  }
  function Pt() {
    const e = !!M().notifyOn;
    mi.classList.toggle("on", e), i("checkinNotifyTargetRow").hidden = !e;
    const t = te();
    hi.textContent = e ? "Sends at " + t.morning + " and " + t.evening : Ba;
  }
  async function bn() {
    const e = !!M().notifyOn;
    try {
      return await h.setReminderAutomation(e ? { target: M().notifyTarget, times: te() } : null), !0;
    } catch {
      return z("Couldn't update the reminder in Home Assistant"), !1;
    }
  }
  mi.addEventListener("click", async () => {
    const e = !M().notifyOn;
    if (e && (fi(), !M().notifyTarget)) {
      z("Install the Companion app on your phone first");
      return;
    }
    M().notifyOn = e, Pt(), await bn() ? (be(), z(e ? "Check-in notifications on" : "Check-in notifications off")) : (M().notifyOn = !e, Pt());
  }), Ft.addEventListener("change", () => {
    U("notifyTarget", Ft.value), M().notifyOn && bn();
  }), [hn, fn].forEach((e) => e.addEventListener("change", () => {
    Pt(), M().notifyOn && bn();
  })), fi(), Pt();
  let xn = null;
  function Aa() {
    xn || (xn = setTimeout(() => {
      xn = null, se();
    }, 3e4));
  }
  return {
    updateStates(e) {
      Te = e, si(e), di(e), Date.now() - ci > 60 * 60 * 1e3 && pi(), Aa();
    },
    applyRemoteData(e) {
      if (e && (Array.isArray(e.history) && (y.history = e.history, Le()), Array.isArray(e.history) && se(), Array.isArray(e.checkins) && (y.checkins = e.checkins.map(Bn), we(), wt(), Xe(), Le(), se()), e.profiles && !Z.classList.contains("open") && !X)) {
        const t = Rn(e);
        Object.keys(x).forEach((n) => delete x[n]), Object.assign(x, t.profiles), y.order = t.order, x[w] || (w = y.order[0]), Fn(), J(w);
      }
    },
    suspend() {
      D = !1;
    },
    resume() {
      D || (D = !0, _e || (_e = requestAnimationFrame(Mt)), qe || (qe = requestAnimationFrame(Et)), ct(f.querySelector(".tab.active"), !1));
    }
  };
}
const Oa = "0.14.0", yn = "move_assistant", _a = "move_assistant", bi = "move_assistant_checkin_reminder";
function za() {
  if (document.getElementById("move-assistant-inter")) return;
  const f = document.createElement("link");
  f.id = "move-assistant-inter", f.rel = "stylesheet", f.href = "https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,400;0,500;0,600;0,700;0,800;1,500&display=swap", document.head.appendChild(f);
}
class qa extends HTMLElement {
  setConfig(h) {
    this._config = h || {};
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
  set hass(h) {
    const i = !this._hass;
    if (this._hass = h, i) {
      this._init();
      return;
    }
    this._app && h.states !== this._lastStates && (this._lastStates = h.states, this._app.updateStates(h.states));
  }
  connectedCallback() {
    var h;
    (h = this._app) == null || h.resume();
  }
  disconnectedCallback() {
    var h;
    (h = this._app) == null || h.suspend();
  }
  async _init() {
    za();
    const h = this.shadowRoot || this.attachShadow({ mode: "open" });
    h.innerHTML = `<style>${Ia}</style>${Da}`;
    const i = h.getElementById("app");
    i.style.opacity = "0";
    let F = null;
    try {
      const S = await this._hass.callWS({
        type: "frontend/get_user_data",
        key: yn
      });
      F = (S == null ? void 0 : S.value) ?? null;
    } catch {
    }
    this._lastSaved = JSON.stringify(F), this._app = Ha(h, {
      data: F,
      save: (S) => this._save(S),
      fire: (S, D) => this._fire(S, D),
      ws: (S) => this._hass.callWS(S),
      notifyServices: () => {
        var S, D;
        return Object.keys(((D = (S = this._hass) == null ? void 0 : S.services) == null ? void 0 : D.notify) || {}).sort();
      },
      setReminderAutomation: (S) => this._setReminderAutomation(S),
      setLight: (S) => this.classList.toggle("lightBody", S),
      fullscreenSupported: !!(this.requestFullscreen || this.webkitRequestFullscreen),
      toggleFullscreen: () => this._toggleFullscreen()
    }), this._lastStates = this._hass.states, this._app.updateStates(this._hass.states), this.isConnected || this._app.suspend(), i.style.transition = "opacity .2s ease", i.style.opacity = "", this._subscribe();
  }
  _subscribe() {
    var i;
    const h = (i = this._hass) == null ? void 0 : i.connection;
    h != null && h.subscribeMessage && h.subscribeMessage(
      (F) => {
        var D;
        const S = JSON.stringify((F == null ? void 0 : F.value) ?? null);
        S === this._lastSaved || S === this._pendingJson || (this._lastSaved = S, (D = this._app) == null || D.applyRemoteData(F.value));
      },
      { type: "frontend/subscribe_user_data", key: yn }
    ).catch(() => {
    });
  }
  _save(h) {
    this._pendingJson = JSON.stringify(h), clearTimeout(this._saveTimer), this._saveTimer = setTimeout(async () => {
      const i = this._pendingJson;
      try {
        await this._hass.callWS({
          type: "frontend/set_user_data",
          key: yn,
          value: JSON.parse(i)
        }), this._lastSaved = i;
      } catch {
        this._toast("Couldn't save to Home Assistant");
      }
    }, 400);
  }
  _fire(h, i = {}) {
    var F, S;
    ((F = this._config) == null ? void 0 : F.events) !== !1 && ((S = this._hass) == null || S.callWS({
      type: "fire_event",
      event_type: _a,
      event_data: { action: h, ...i }
    }).catch(() => {
    }));
  }
  // Keeps one Home Assistant automation in sync with the check-in times.
  // Passing null removes it.
  async _setReminderAutomation(h) {
    const i = `config/automation/config/${bi}`;
    if (!h) {
      try {
        await this._hass.callApi("DELETE", i);
      } catch (D) {
        if ((D == null ? void 0 : D.status_code) !== 404 && (D == null ? void 0 : D.status) !== 404) throw D;
      }
      return;
    }
    const F = (D) => `${D}:00`, S = window.location.pathname;
    await this._hass.callApi("POST", i, {
      id: bi,
      alias: "Move Assistant check-in reminder",
      description: "Created by Move Assistant. Change it in Move Assistant → Settings → Check-in.",
      mode: "single",
      triggers: [
        { trigger: "time", at: F(h.times.morning), id: "morning" },
        { trigger: "time", at: F(h.times.evening), id: "evening" }
      ],
      conditions: [],
      actions: [
        {
          action: `notify.${h.target}`,
          data: {
            title: "Move Assistant",
            message: "{{ 'Morning' if trigger.id == 'morning' else 'Evening' }} check-in is ready",
            data: { url: S, clickAction: S }
          }
        }
      ]
    });
  }
  _toggleFullscreen() {
    const h = document;
    if (h.fullscreenElement || h.webkitFullscreenElement) {
      (h.exitFullscreen || h.webkitExitFullscreen).call(h);
      return;
    }
    const i = this.requestFullscreen || this.webkitRequestFullscreen;
    Promise.resolve(i.call(this)).catch(
      () => this._toast("Full screen isn't available here")
    );
  }
  _toast(h) {
    var F;
    const i = (F = this.shadowRoot) == null ? void 0 : F.getElementById("toast");
    i && (i.textContent = h, i.classList.add("show"), setTimeout(() => i.classList.remove("show"), 2600));
  }
}
customElements.get("move-assistant-card") || (customElements.define("move-assistant-card", qa), window.customCards = window.customCards || [], window.customCards.push({
  type: "move-assistant-card",
  name: "Move Assistant",
  description: "Guided movement timer with your Home Assistant activity data.",
  preview: !1
}), console.info(`%c MOVE ASSISTANT %c ${Oa} `, "background:#D0FF00;color:#090909;font-weight:700", ""));
