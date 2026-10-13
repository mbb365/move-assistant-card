const Ba = ':host{display:flex;flex-direction:column;min-height:calc(100dvh - var(--header-height,0px));position:relative;background:#050505;color-scheme:dark;--bg:#050505;--page:#090909;--card:#1d1d1d;--card2:#242424;--muted:#969696;--text:#f4f4f4;--line:#3f3f3f;--lineb:#252525;--r:36px;--gap:20px}*{box-sizing:border-box}#app{color:var(--text);font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif;transition:background .25s ease,color .25s ease;-webkit-font-smoothing:antialiased}[hidden]{display:none!important}button,input{font:inherit}#app{flex:1;display:flex;flex-direction:column;width:100%;margin:0;padding:0;background:var(--bg);text-align:left}.shell{flex:1;display:flex;flex-direction:column;position:relative;width:100%;background:var(--page);border-radius:0;overflow:visible;transition:background .28s ease}#app.resting .shell{background:#1f7a4d}#app.paused .shell{background:var(--primary)}#app.light.paused .shell{background:color-mix(in srgb,var(--primary) 55%,white)}#app.light{--bg:#EEEDED;--page:#EEEDED;--card:rgba(255,255,255,.8);--card2:rgba(255,255,255,.8);--muted:#222222;--text:#222222;--line:#ffffff;--lineb:#ffffff}#app.light,#app.light *{color:#222!important}#app.light .pill{background:transparent;color:#222!important;border:0}#app.light .tab,#app.light .back,#app.light .navBtn,#app.light .primary,#app.light .themeBtn{background:#ffffffe0;color:#222!important;border-color:#fff}#app.light .holdEnd{background:#ffffffe0;border:.32px solid #fff;text-decoration:none}#app.light .energyBtn,#app.light .activityRow,#app.light .integration,#app.light .toggleRow,#app.light .weekChip,#app.light .sourceTag,#app.light .timeTile,#app.light .moveRow,#app.light .routineSummary,#app.light .workoutPanel{background:#fffc;color:#222!important}#app.light .timerCard,#app.light .movementCard,#app.light .nextCard{background:#fffc}#app.light .activityRow:nth-child(1) .activityRowIcon{background:var(--primary-tint);color:var(--primary-ink)!important}#app.light .activityRow:nth-child(2) .activityRowIcon{background:#ffe8c8;color:#c8741f!important}#app.light .activityRow:nth-child(3) .activityRowIcon{background:#d9f4e6;color:#2e8b63!important}#app.light .activityIcon{background:#e8e1ff;color:#7859c9!important}#app.light .energyBtn{color:#222!important;background:#ffffffb8}#app.light .energyBtn:hover,#app.light .energyBtn:focus-visible,#app.light .energyBtn.selected{background:color-mix(in srgb,var(--feeling-color) 34%,white);color:#222!important}:host(.lightBody){background:#eeeded;color-scheme:light}#app.light,#app.light .shell{background:#eeeded}#app.light .modal{background:#fffffff0;border-color:#fff}#app.light .modalStatic{background:#fffffff0;border-bottom-color:#fff}#app.light .exerciseScroller{background:transparent;border-color:#ffffffe6}#app.light .addInput,#app.light .editNameInput{background:#ffffffeb;color:#222!important;border-color:#fff}#app.light .rangeTrack{background:#d8d6d6;border-color:#fff}#app.light .rangeFill{background:color-mix(in srgb,var(--primary) 45%,white)}#app.light .timerCard,#app.light .movementCard,#app.light .upcomingTile{background:#fffc;border-color:#fff}#app.light .fill{background:color-mix(in srgb,var(--primary) 30%,white)}#app.light .progress{background:transparent}#app.light .progressSegment{background:#c8c6c6}#app.light .progressSegment.active:after{background:var(--primary)}#app.light .progressSegment.done{background:transparent;opacity:0}#app.light .sourceTag,#app.light .activityRow,#app.light .weekChip,#app.light .integration,#app.light .toggleRow,#app.light .moveRow,#app.light .timeTile,#app.light .routineSummary{border-color:#fff}#app.light .countdown{background:#eeeded}#app.light .toast{background:#222;color:#eeeded!important}#app.light.resting .shell{background:#7dbb98}.view{display:none;width:100%;max-width:1184px;margin:0 auto;padding:22px 22px 76.8px}.view.active{display:block;flex:1 0 auto}.card,.panel,.tile{position:relative;background:var(--card);border-radius:36px;padding:22px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.grid{display:grid;grid-template-columns:repeat(12,minmax(0,1fr));gap:16px}.eyebrow{text-transform:uppercase;color:var(--muted)}.sub{color:var(--muted);margin-top:6.4px}.pill,.primary,.navBtn,.tab,.back,.hideBtn,.addBtn{cursor:pointer}.pill{min-height:0;padding:3.2px 0;border:0;border-radius:0;background:transparent;color:var(--text);text-decoration-line:underline;text-decoration-thickness:.8px;text-underline-offset:3.2px}.tab,.back{border-radius:799.2px;min-height:41.6px;padding:0 16px;background:#171717;border:.32px solid var(--line);color:#fff}.primary{border-radius:799.2px;min-height:41.6px;padding:0 17.6px;border:0;background:#f2f2f2;color:#090909}.topbar{display:flex;justify-content:space-between;gap:16px;align-items:flex-start;margin-bottom:19.2px}.activityCard,.weekly{grid-column:span 6}.energySection{grid-column:span 12;margin-top:16px}.activityCard,.weekly{min-height:288px}.wellness{width:100%}.sourceTag{display:inline-flex;margin-top:11.2px;padding:6.4px 9.6px;border-radius:799.2px;background:#292929;color:#cfcfcf}.workoutFooter{display:flex;justify-content:space-between;align-items:end;gap:22.4px;flex-wrap:wrap;margin-top:22.4px;width:100%;box-sizing:border-box}.workoutGallery{grid-column:span 12;display:flex;gap:16px;height:288px;overflow:hidden}.workoutPanel{position:relative;height:288px;flex:1 1 72px;min-width:70.4px;background:var(--card);border-radius:28.8px;padding:22.4px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);overflow:hidden;box-sizing:border-box;transition:flex .32s ease;cursor:pointer}.workoutPanel.active{flex:7 1 0;min-width:0;cursor:default}.workoutPanel.addPanel{flex:0 0 73.6px;min-width:73.6px;display:flex;align-items:center;justify-content:center;padding:14.4px}.workoutPanel{--edge-proximity:0;--cursor-angle:45deg;--edge-sensitivity:36;--color-sensitivity:56;--cone-spread:25;--fill-opacity:.18;--glow-color:hsl(199deg 97% 68% / 100%);--glow-color-60:hsl(199deg 97% 68% / 60%);--glow-color-50:hsl(199deg 97% 68% / 50%);--glow-color-40:hsl(199deg 97% 68% / 40%);--glow-color-30:hsl(199deg 97% 68% / 30%);--glow-color-20:hsl(199deg 97% 68% / 20%);--glow-color-10:hsl(199deg 97% 68% / 10%);--gradient-one:radial-gradient(at 80% 55%,#c084fc 0px,transparent 50%);--gradient-two:radial-gradient(at 69% 34%,#f472b6 0px,transparent 50%);--gradient-three:radial-gradient(at 8% 6%,#38bdf8 0px,transparent 50%);--gradient-four:radial-gradient(at 41% 38%,#c084fc 0px,transparent 50%);--gradient-five:radial-gradient(at 86% 85%,#f472b6 0px,transparent 50%);--gradient-six:radial-gradient(at 82% 18%,#38bdf8 0px,transparent 50%);--gradient-seven:radial-gradient(at 51% 4%,#f472b6 0px,transparent 50%);isolation:isolate}.workoutPanel:before,.workoutPanel:after,.workoutPanel>.edgeLight{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:28.8px;pointer-events:none;transition:opacity .18s ease-out}.workoutPanel:before{z-index:2;border:.8px solid transparent;background:linear-gradient(var(--card) 0 100%) padding-box,linear-gradient(#fff0 0,#fff0) border-box,var(--gradient-one) border-box,var(--gradient-two) border-box,var(--gradient-three) border-box,var(--gradient-four) border-box,var(--gradient-five) border-box,var(--gradient-six) border-box,var(--gradient-seven) border-box;opacity:clamp(0,calc(.72 * (var(--edge-proximity) - var(--color-sensitivity)) / (100 - var(--color-sensitivity))),.72);-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,black calc(var(--cone-spread) * 1%),transparent calc((var(--cone-spread) + 15) * 1%),transparent calc((100 - var(--cone-spread) - 15) * 1%),black calc((100 - var(--cone-spread)) * 1%));mask-image:conic-gradient(from var(--cursor-angle) at center,black calc(var(--cone-spread) * 1%),transparent calc((var(--cone-spread) + 15) * 1%),transparent calc((100 - var(--cone-spread) - 15) * 1%),black calc((100 - var(--cone-spread)) * 1%))}.workoutPanel:after{z-index:1;border:.8px solid transparent;background:var(--gradient-one) padding-box,var(--gradient-two) padding-box,var(--gradient-three) padding-box,var(--gradient-four) padding-box,var(--gradient-five) padding-box,var(--gradient-six) padding-box,var(--gradient-seven) padding-box;opacity:clamp(0,calc(var(--fill-opacity) * (var(--edge-proximity) - var(--color-sensitivity)) / (100 - var(--color-sensitivity))),.18);mix-blend-mode:soft-light;-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,transparent 5%,black 15%,black 85%,transparent 95%);mask-image:conic-gradient(from var(--cursor-angle) at center,transparent 5%,black 15%,black 85%,transparent 95%)}.workoutPanel>.edgeLight{top:-19.2px;right:-19.2px;bottom:-19.2px;left:-19.2px;z-index:3;opacity:clamp(0,calc(.62 * (var(--edge-proximity) - var(--edge-sensitivity)) / (100 - var(--edge-sensitivity))),.62);mix-blend-mode:plus-lighter;-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,black 2.5%,transparent 10%,transparent 90%,black 97.5%);mask-image:conic-gradient(from var(--cursor-angle) at center,black 2.5%,transparent 10%,transparent 90%,black 97.5%)}.workoutPanel>.edgeLight:before{content:"";position:absolute;top:19.2px;right:19.2px;bottom:19.2px;left:19.2px;border-radius:28.8px;box-shadow:inset 0 0 0 .8px var(--glow-color-60),inset 0 0 2.4px 0 var(--glow-color-40),inset 0 0 6.4px 0 var(--glow-color-30),inset 0 0 12.8px 0 var(--glow-color-20),0 0 2.4px 0 var(--glow-color-40),0 0 6.4px 0 var(--glow-color-30),0 0 12.8px 0 var(--glow-color-20),0 0 22.4px 1.6px var(--glow-color-10)}.workoutPanel:not(.borderGlowActive):before,.workoutPanel:not(.borderGlowActive):after,.workoutPanel:not(.borderGlowActive)>.edgeLight{opacity:0;transition:opacity .35s ease-out}#app.light .workoutPanel{--glow-color:hsl(199deg 97% 48% / 100%);--glow-color-50:hsl(199deg 97% 48% / 50%);--glow-color-40:hsl(199deg 97% 48% / 40%);--glow-color-30:hsl(199deg 97% 48% / 30%);--glow-color-20:hsl(199deg 97% 48% / 20%);--glow-color-10:hsl(199deg 97% 48% / 10%)}.workoutPanel:not(.active):not(.addPanel) .panelExpanded{opacity:0;filter:blur(8px);pointer-events:none}.workoutPanel:not(.active):not(.addPanel) .panelCollapsed{opacity:1;filter:blur(0)}.workoutPanel.active .panelExpanded{opacity:1;filter:blur(0);pointer-events:auto}.workoutPanel.active .panelCollapsed{opacity:0;filter:blur(6.4px);pointer-events:none}.panelExpanded{position:relative;z-index:4;width:100%;height:100%;min-width:0;box-sizing:border-box;display:flex;flex-direction:column;justify-content:space-between;transition:opacity .22s ease,filter .22s ease}.panelCollapsed{position:absolute;top:0;right:0;bottom:0;left:0;z-index:4;display:flex;align-items:center;justify-content:center;opacity:0;filter:blur(6.4px);transition:opacity .22s ease,filter .22s ease}.panelCollapsedText{writing-mode:vertical-rl;transform:rotate(180deg);white-space:nowrap}.workoutPanelTop{display:flex;justify-content:space-between;align-items:flex-start;gap:22.4px;width:100%;min-width:0;box-sizing:border-box}.workoutPanelActions{display:flex;gap:22.4px;flex-wrap:wrap;align-items:center;justify-content:flex-end;margin-left:auto}.startWorkoutBtn{background:var(--primary)!important;color:#090909!important}.startWorkoutBtn:hover{filter:brightness(1.04)}#app.light .startWorkoutBtn{background:var(--primary)!important;color:#090909!important}.addPanelPlus{position:relative;z-index:4;font-size:27.2px;line-height:1}.addPanelLabel{position:absolute;z-index:4;bottom:16px;writing-mode:vertical-rl;transform:rotate(180deg);color:var(--muted)}@media (max-height:820px) and (min-width:621px){.modalStatic{padding:17.6px 22.4px}.timeTile{min-height:124.8px}}@media (max-width:900px){.weekCopy{white-space:normal}.workoutGallery{overflow-x:auto;scroll-snap-type:x mandatory;padding-bottom:3.2px}.workoutPanel,.workoutPanel.active{height:288px;flex:0 0 min(68.8vw,544px);min-width:min(68.8vw,544px);scroll-snap-align:start}.workoutPanel.addPanel{flex-basis:80px;min-width:80px}.panelCollapsed{display:none}}.moveActions{display:flex;gap:22.4px;flex-wrap:wrap}.energyFloat{padding:22.4px;background:transparent;border:0}#app.light .energyFloat{background:transparent}.energyScale{display:grid;grid-template-columns:repeat(6,minmax(0,1fr));gap:9.6px;margin-top:17.6px}.energyBtn{--feeling-color:#8f8f8f;--feeling-glow:rgba(255,255,255,.14);position:relative;isolation:isolate;overflow:hidden;width:100%;min-height:43.2px;padding:0 9.6px;white-space:nowrap;border-radius:12.8px;background:#282828;border:.32px solid var(--line);color:#fff;cursor:pointer;transition:color .18s ease,border-color .18s ease,background .18s ease}.energyBtn>span{position:relative;z-index:2}.energyBtn:before{content:"";position:absolute;top:-18%;right:-18%;bottom:-18%;left:-18%;z-index:-2;opacity:0;background:radial-gradient(ellipse at var(--feel-x,50%) var(--feel-y,50%),color-mix(in srgb,var(--feeling-color) 88%,transparent) 0%,color-mix(in srgb,var(--feeling-color) 54%,transparent) 34%,transparent 72%);transform:scale(.82) skew(-3deg);filter:saturate(1.08) blur(.8px);transition:opacity .18s ease,transform .28s cubic-bezier(.2,.8,.2,1)}.energyBtn:after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;z-index:-1;opacity:0;pointer-events:none;background:repeating-linear-gradient(to bottom,rgba(255,255,255,.07) 0,rgba(255,255,255,.07) .8px,transparent .8px,transparent 3.2px),linear-gradient(90deg,transparent 0%,color-mix(in srgb,var(--feeling-color) 34%,transparent) var(--feel-x,50%),transparent 100%);mix-blend-mode:screen}.energyBtn:hover:before,.energyBtn:focus-visible:before,.energyBtn.selected:before{opacity:.92;transform:translate(var(--feel-shift-x,0px),var(--feel-shift-y,0px)) scale(1.08) skew(2deg);animation:feelingWarp 1.45s ease-in-out infinite alternate}.energyBtn:hover:after,.energyBtn:focus-visible:after,.energyBtn.selected:after{opacity:.55;animation:feelingScan .9s linear infinite}.energyBtn:hover,.energyBtn:focus-visible,.energyBtn.selected{background:color-mix(in srgb,var(--feeling-color) 42%,#171717);border-color:color-mix(in srgb,var(--feeling-color) 72%,#ffffff 10%);color:#fff}.energyBtn.selected{box-shadow:inset 0 0 0 .8px color-mix(in srgb,var(--feeling-color) 58%,transparent),0 0 14.4px color-mix(in srgb,var(--feeling-color) 24%,transparent)}.energyBtn[data-energy=Drained]{--feeling-color:#6E63A8}.energyBtn[data-energy=Low]{--feeling-color:#5878A8}.energyBtn[data-energy=Okay]{--feeling-color:#6F8B8A}.energyBtn[data-energy=Good]{--feeling-color:#5F9B72}.energyBtn[data-energy=Energised]{--feeling-color:#D5A53E}.energyBtn[data-energy=Great]{--feeling-color:#D56B54}@keyframes feelingWarp{0%{transform:scale(1.03) skew(-2deg) translate(-1.5%);filter:saturate(1.02) blur(.8px)}50%{transform:scale(1.12) skew(1deg) translate(1%);filter:saturate(1.22) blur(1.5px)}to{transform:scale(1.06) skew(3deg) translate(-.5%);filter:saturate(1.1) blur(.6px)}}@keyframes feelingScan{0%{background-position:0 0,-80% 0}to{background-position:0 8px,180% 0}}@media (prefers-reduced-motion: reduce){.energyBtn:before,.energyBtn:after{animation:none!important}}.energyHistory{display:grid;gap:6.4px;margin-top:9.6px}.energyLog{display:flex;justify-content:space-between;gap:9.6px;padding:8px 9.6px;border-radius:16px;background:#252525}.energyLog span:last-child{color:#999}.tempoExperiment{margin-top:14.4px;padding-top:16px;border-top:.32px solid var(--line)}.tempoExperimentHead{display:flex;justify-content:space-between;align-items:flex-start;gap:16px;margin-bottom:12.8px}.tempoEstimate{white-space:nowrap}.tempoQuad{position:relative;width:min(288px,100%);aspect-ratio:1/1;border-radius:28.8px;background:#ffffff06;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);overflow:hidden;touch-action:none;cursor:crosshair}.tempoCross{position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none;background:linear-gradient(to right,transparent calc(50% - .4px),rgba(255,255,255,.12) 50%,transparent calc(50% + .4px)),linear-gradient(to bottom,transparent calc(50% - .4px),rgba(255,255,255,.12) 50%,transparent calc(50% + .4px))}.tempoDot{position:absolute;left:50%;top:50%;width:17.6px;height:17.6px;border-radius:50%;background:var(--text);transform:translate(-50%,-50%);pointer-events:none;box-shadow:0 0 0 4.8px #ffffff12}.tempoPole{position:absolute;pointer-events:none;color:var(--muted)}.tempoFast{top:9.6px;left:50%;transform:translate(-50%)}.tempoSlow{bottom:9.6px;left:50%;transform:translate(-50%)}.tempoHard{right:9.6px;top:50%;transform:translateY(-50%)}.tempoLow{left:9.6px;top:50%;transform:translateY(-50%)}.tempoReadout{margin-top:9.6px;color:var(--muted)}.tempoRevealRow{margin-top:11.2px}.tempoRevealBtn{color:#b8bcc6;text-decoration-color:#6d7480}.editTempoExperiment{margin-top:11.2px}.editTempoExperiment[hidden]{display:none}.testingZone{position:relative;overflow:hidden;border-radius:22.4px;background:#202226;border:.8px solid #4a4f58;box-shadow:none}.testingZoneInner{position:relative;padding:19.2px;background:linear-gradient(rgba(176,186,199,.045) .8px,transparent .8px),linear-gradient(90deg,rgba(176,186,199,.045) .8px,transparent .8px),#202226;background-size:16px 16px}.testingZoneTitleBlock{max-width:608px;margin-bottom:19.2px}.testingZoneTitleRow{display:flex;justify-content:space-between;align-items:center;gap:16px}.testingZoneTitleRow strong{color:#d6d9df}.testingZone .tempoEstimate{color:#aeb4bf}.testingZoneExplanation{margin:8px 0 0;color:#9ea5b0;text-align:left}.testingZoneLayout{display:grid;grid-template-columns:minmax(224px,288px) minmax(0,1fr);grid-template-areas:"controller feedback";gap:25.6px;align-items:start}.testingFeedbackForm{grid-area:feedback;display:grid;gap:14.4px;min-width:0;padding:16px;border:.32px solid var(--line);border-radius:16px;background:#252525}.testingFeedbackHeading{color:#d6d9df}.testingFeedbackField{display:grid;gap:6.4px;color:#9ea5b0}.testingFeedbackField select,.testingFeedbackField textarea{width:100%;border:.32px solid var(--line);background:#171717;color:#d6d9df;border-radius:11.2px;padding:8px 9.6px;font:inherit}.testingFeedbackField textarea{resize:vertical;min-height:65.6px}.testingRating{display:grid;grid-template-columns:repeat(5,1fr);gap:4.8px}.testingRating button{min-height:30.4px;border-radius:9.6px;border:.32px solid var(--line);background:#171717;color:#c7ccd5;cursor:pointer}.testingRating button.selected{border-color:#c7ccd5;background:#343434}.testingFeedbackSubmit{justify-self:start;min-height:33.6px;padding:0 12.8px;border-radius:11.2px;border:0;background:#ffffffe0;color:#111;cursor:pointer}.testingZoneControllerWrap{grid-area:controller;display:flex;flex-direction:column;align-items:center;justify-content:flex-start}.tempoQuadFrame{width:min(256px,100%);aspect-ratio:1/1;padding:0;background:linear-gradient(rgba(176,186,199,.075) .8px,transparent .8px),linear-gradient(90deg,rgba(176,186,199,.075) .8px,transparent .8px),#202226;background-size:16px 16px,16px 16px,auto;border-radius:16px}.testingZone .tempoQuad{width:100%;height:100%;border-radius:16px;background:#202226;border:.8px solid #5a606a;box-shadow:none}.testingZone .tempoCross{background:linear-gradient(to right,transparent calc(50% - .4px),rgba(176,186,199,.2) 50%,transparent calc(50% + .4px)),linear-gradient(to bottom,transparent calc(50% - .4px),rgba(176,186,199,.2) 50%,transparent calc(50% + .4px))}.testingZone .tempoDot{width:14.4px;height:14.4px;background:transparent;border:.8px solid #c4cad4;box-shadow:0 0 0 3.2px #c4cad40d}.testingZone .tempoPole{color:#8e96a2}.testingZone .tempoReadout{width:min(256px,100%);color:#9ea5b0;text-align:center;margin-top:9.6px}.testingZone button,.testingZone input,.testingZone select,.testingZone textarea{transition:opacity .14s ease,border-color .14s ease,color .14s ease,background .14s ease}.testingZone button:hover,.testingZone button:focus-visible{filter:none;opacity:.88}@media (max-width:900px){.testingZoneLayout{grid-template-columns:1fr;grid-template-areas:"controller" "feedback"}}#app.light .testingZone{background:#202226;border-color:#4a4f58}#app.light .testingZoneInner{background:linear-gradient(rgba(176,186,199,.045) .8px,transparent .8px),linear-gradient(90deg,rgba(176,186,199,.045) .8px,transparent .8px),#202226}#app.light .testingZone,#app.light .testingZone *{color:#d6d9df!important}#app.light .testingZone .testingFeedbackField,#app.light .testingZone .testingZoneExplanation,#app.light .testingZone .tempoReadout{color:#9ea5b0!important}#app.light .testingZone .tempoQuad{background:#202226;border-color:#5a606a}#app.light .testingZone .tempoDot{background:transparent;border-color:#c4cad4}#app.light .testingFeedbackForm{background:#2a2a2a;border-color:#4a4f58}#app.light .testingFeedbackField select,#app.light .testingFeedbackField textarea,#app.light .testingRating button{background:#171717;border-color:#4a4f58}#app.light .testingRating button.selected{background:#343434}#app.light .testingFeedbackSubmit{background:#ffffffe0;color:#111!important}#app.light .tempoQuad{background:#ffffff7a;border-color:#fff}#app.light .tempoDot{background:#222;box-shadow:0 0 0 4.8px #0000000d}.activityHeader{display:flex;align-items:center;gap:11.2px;margin-bottom:16px}.activityIcon{width:35.2px;height:35.2px;border-radius:13.6px;background:#2e2e2e;display:grid;place-items:center;font-size:16px}.activityRows{display:grid;gap:9.6px}.activityRow{display:grid;grid-template-columns:43.2px minmax(0,1fr);align-items:center;gap:11.2px;background:#292929;border-radius:24px;padding:12px 14px}.activityRowIcon{width:43.2px;height:43.2px;border-radius:16px;background:#3a3a3a;display:grid;place-items:center;font-size:16px}.activityRowMeta{color:#b4b4b4;margin-top:2.4px}.toast{position:absolute;right:20.8px;top:20.8px;z-index:60;background:#efefef;color:#090909;border-radius:799.2px;padding:8.8px 12.8px;opacity:0;transform:translateY(-6.4px);pointer-events:none;transition:opacity .18s ease,transform .18s ease}.toast.show{opacity:1;transform:none}.weekHero{display:block}.weekCopy{color:var(--muted);margin-top:9.6px;max-width:none;white-space:nowrap}.weekChips{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:8px;margin-top:19.2px}.weekChip{background:#292929;border-radius:12.8px;min-height:60.8px;padding:9.6px 11.2px;display:flex;flex-direction:column;justify-content:space-between;gap:6.4px}.weekChipTop{display:flex;justify-content:space-between;align-items:center;gap:6.4px}.weekChipMeta{color:#888}.weekTick{font-size:11.2px;font-weight:800;line-height:1}.weekChip.total{background:#242424}.workoutSurface{position:relative;overflow:hidden;isolation:isolate}.workoutContent{position:relative;z-index:2}.pixelTrailCanvas{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;z-index:1;pointer-events:none}#app.light .pixelTrailCanvas{opacity:.46}.sessionHead{display:flex;justify-content:space-between;align-items:flex-start;gap:16px}.sessionActions{display:flex;gap:22.4px;align-items:center;flex-wrap:wrap;justify-content:flex-end}.holdEnd{position:relative;overflow:hidden;min-width:110.4px;min-height:41.6px;padding:0 16px;border-radius:799.2px;border:.32px solid var(--line);background:#171717;text-decoration:none;user-select:none;-webkit-user-select:none;touch-action:none}.holdEndFill{position:absolute;inset:0 auto 0 0;width:0;background:#efefef;pointer-events:none}.holdEndLabel{position:relative;z-index:1;mix-blend-mode:difference;color:#fff}.holdEnd.holding{border-color:#666}.exerciseTitle{margin-top:4.8px;color:var(--secondary)}.meta{color:#969696;margin-top:4.8px}.progress{height:46.4px;padding:0;background:transparent;border-radius:17.6px;display:flex;gap:3.2px;margin-top:19.2px;overflow:hidden}.progressSegment{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:0;padding:0;display:block;flex:1;min-width:0;background:#3f3f3f;border-radius:17.6px;position:relative;overflow:hidden;cursor:default}.progressSegment:after{content:"";position:absolute;inset:0 auto 0 0;width:0;background:#efefef;transition:width .2s linear}.progressSegment.done{background:transparent;opacity:0;pointer-events:none}.progressSegment.done:after{display:none}.progressSegment.active:after{width:var(--segment-progress,0%)}#app.resting .progressSegment:not(.done):not(.active),#app.paused .progressSegment:not(.done):not(.active){background:#fff}#app.light.resting .progressSegment:not(.done):not(.active),#app.light.paused .progressSegment:not(.done):not(.active){background:#fff}.progressSegment.rewindable{cursor:pointer}.progressSegment.rewindable:hover{filter:brightness(1.08)}.progressSegment:focus-visible{outline:1.6px solid var(--primary);outline-offset:-2.4px}.workGrid{display:grid;grid-template-columns:minmax(0,2fr) minmax(240px,1fr);gap:16px;margin-top:16px}.timerCard,.movementCard,.nextCard{position:relative;border-radius:28.8px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.timerCard{min-height:344px;background:#0d0d0d;overflow:hidden}.fill{position:absolute;inset:0 auto 0 0;width:100%;background:#f2f2f2;transition:width .2s linear}.digits{position:absolute;top:0;right:0;bottom:0;left:0;display:flex;align-items:center;justify-content:center;font-size:clamp(152px,22.4vw,312px);font-weight:850;letter-spacing:-.11em;color:#fff;mix-blend-mode:difference;font-variant-numeric:tabular-nums}.movementCard{background:#151515;min-height:344px;display:grid;place-items:center;padding:22.4px}.movementMark{font-size:16px;font-weight:760;color:#d5d5d5;text-align:center}.movementCard{overflow:hidden}.movementRippleCanvas{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;z-index:0}.movementMark{position:relative;z-index:2}.nextCard{background:#1d1d1d;padding:22.4px;display:flex;justify-content:space-between;align-items:center;gap:16px;min-height:116.8px}.nextIcon{width:52.8px;height:52.8px;border-radius:19.2px;background:#2d2d2d;display:grid;place-items:center;font-size:20.8px;flex:0 0 auto}.sectionLabel{margin:0 0 8px 22.4px}.moveSection{grid-column:span 12}.moveSection .workoutGallery{width:100%}.nextWrap{margin-top:16px}.nextLabel{margin:0 0 8px 22.4px}.nextCard{background:var(--card);padding:22.4px;display:flex;justify-content:space-between;align-items:center;gap:22.4px;min-height:86.4px;border-radius:28.8px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.nextMain{display:flex;align-items:center;gap:14.4px;min-width:0}.nextIcon{width:43.2px;height:43.2px;border-radius:12.8px;background:#2d2d2d;display:grid;place-items:center;font-size:16px;flex:0 0 auto}.sessionControlRow{display:flex;justify-content:flex-end;gap:22.4px;align-items:center;margin-top:16px}.nextActions{display:flex;gap:22.4px;align-items:center;flex:0 0 auto}.skipBtn{min-width:120px;min-height:41.6px;padding:0 14.4px;border:.8px solid var(--line);background:transparent;color:var(--text);text-decoration:none}.pause{min-width:120px;min-height:41.6px;padding:0 14.4px}#app.light .nextCard{background:#fffc;border-color:#fff}#app.light .nextIcon{background:#ffe6ef;color:#bd4b7a!important}#app.light .skipBtn{background:transparent;color:#222!important;border-color:#fff}.upcomingList{display:grid;gap:9.6px;margin-top:9.6px}.upcomingCard{--future-opacity:1;display:flex;align-items:center;justify-content:space-between;gap:22.4px;min-height:86.4px;padding:22.4px;border-radius:28.8px;background:var(--card);border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);opacity:var(--future-opacity);transition:opacity .22s ease}.upcomingCard:nth-child(-n+3){--future-opacity:1}.upcomingCard:nth-child(4){--future-opacity:.72}.upcomingCard:nth-child(5){--future-opacity:.48}.upcomingCard:nth-child(6){--future-opacity:.3}.upcomingCard:nth-child(n+7){--future-opacity:.16}.upcomingCard.sessionHidden{--future-opacity:.24!important;filter:saturate(.15)}.upcomingCard.sessionHidden .upcomingName{text-decoration:line-through}.upcomingCard.sessionHidden .upcomingIcon{opacity:.45}.upcomingCard.sessionHidden .upcomingMeta{opacity:.55}.upcomingInfo{display:flex;align-items:center;gap:14.4px;min-width:0}.upcomingIcon{width:43.2px;height:43.2px;flex:0 0 auto;border-radius:12.8px;background:#2d2d2d;display:grid;place-items:center;font-size:16px}.upcomingMeta{color:var(--muted);margin-top:4px}.skipSessionBtn{flex:0 0 auto;min-height:41.6px;padding:0 14.4px;border:.8px solid var(--line);background:transparent;color:var(--text)}#app.light .upcomingCard{background:#fffc;border-color:#fff}#app.light .upcomingIcon{background:var(--primary-tint);color:var(--primary-ink)!important}#app.light .skipSessionBtn{border-color:#fff;color:#222!important}@media (max-width:900px){.weekCopy{white-space:normal}.nextCard{align-items:flex-start;flex-direction:column}.sessionControlRow{width:100%}.skipBtn,.pause{flex:1;min-width:0}.upcomingCard{align-items:flex-start;flex-direction:column}.skipSessionBtn{width:100%}}.countdown{display:none;position:fixed;top:0;right:0;bottom:0;left:0;width:100vw;height:100dvh;background:#090909;z-index:300;align-items:center;justify-content:center;flex-direction:column;text-align:center;overflow:hidden}.countdown.active{display:flex}.pixelCanvas{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;display:block;z-index:1}.countdown:before{content:"";position:absolute;top:0;right:0;bottom:0;left:0;background:radial-gradient(circle at center,color-mix(in srgb,var(--primary) 16%,transparent),transparent 58%);pointer-events:none}.countNum{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);z-index:3}.countNum{font-size:clamp(144px,25.6vw,344px);font-weight:850;line-height:.75;letter-spacing:-.1em}.modalBackdrop{display:none;position:fixed;top:0;right:0;bottom:0;left:0;width:100vw;height:100dvh;z-index:145;background:#000000a8;padding:28px;box-sizing:border-box;align-items:center;justify-content:center}.modalBackdrop.open{display:flex}.modal{width:min(1184px,100%);height:100%;max-width:1184px;max-height:none;overflow:hidden;background:#202020;border-radius:28.8px;padding:0;display:flex;flex-direction:column;box-sizing:border-box;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.modalStatic{flex:0 0 auto;padding:22.4px;background:#202020;border-bottom:.32px solid #343434}.modalHead{display:flex;justify-content:space-between;align-items:flex-start;gap:16px;margin-bottom:12.8px}.modalHeaderActions{display:flex;gap:22.4px;align-items:center;flex:0 0 auto}.modalHead h2{margin:2.4px 0 0}.editNameRow{display:grid;gap:6.4px;margin-bottom:11.2px}.editNameLabel{color:var(--muted)}.editNameInput{min-height:46.4px;border-radius:17.6px;border:.32px solid var(--line);background:#151515;color:var(--text);padding:0 14.4px}#app.light .editNameInput{background:#ffffffe0;color:#222!important;border-color:#fff}.timeTiles{display:grid;grid-auto-flow:column;grid-auto-columns:minmax(0,1fr);gap:11.2px;margin-bottom:11.2px}.timeTile{background:#252525;min-height:148.8px;padding:16px;display:flex;flex-direction:column;justify-content:space-between}.timeHeader{display:flex;align-items:center;gap:14.4px}.timeIcon{width:46.4px;height:46.4px;border-radius:16px;background:#313131;display:grid;place-items:center;flex:0 0 auto;font-size:17.6px;font-weight:760}.timeCopy{min-width:0}.timeValue{color:#cfcfcf;margin-top:5.6px}.rangeTrack{height:46.4px;border-radius:17.6px;background:#151515;overflow:hidden;position:relative;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.rangeFill{position:absolute;inset:0 auto 0 0;background:#efefef;border-radius:17.6px 0 0 17.6px}.rangeInput{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;opacity:0;cursor:pointer}.exerciseScroller{min-height:0;overflow-y:auto;padding:3.2px 16px 17.6px 22.4px;border-top:.16px solid #303030;scrollbar-gutter:stable}.exerciseScroller::-webkit-scrollbar{width:6.4px}.exerciseScroller::-webkit-scrollbar-track{background:transparent}.exerciseScroller::-webkit-scrollbar-thumb{background:#4a4a4a;border-radius:799.2px}.sectionTitle{text-transform:uppercase;color:#999;margin:14.4px 0 8px}.moveList{display:grid;gap:8px}.moveRow{display:flex;justify-content:space-between;align-items:center;gap:22.4px;background:#2a2a2a;border-radius:20.8px;padding:22.4px}.moveRow.hidden{opacity:.46}.moveRow.hidden .moveItemName{text-decoration:line-through}.moveMeta{color:#999;margin-top:4px}.hideBtn{border-radius:799.2px;min-height:32px;padding:0 11.2px;border:.32px solid var(--line);background:#1b1b1b;color:#fff}.removeBtn{position:relative;overflow:hidden;border-radius:799.2px;min-height:32px;padding:0 11.2px;border:.32px solid var(--line);background:#1b1b1b;color:#fff;cursor:pointer}.removeFill{position:absolute;inset:0 auto 0 0;width:0;background:var(--danger);pointer-events:none;transition:width 0s linear}.removeLabel{position:relative;z-index:1}.addRow{display:grid;grid-template-columns:1fr auto;gap:8px;margin-top:14.4px}.addInput{min-height:41.6px;border-radius:799.2px;border:.32px solid var(--line);background:#151515;color:#fff;padding:0 14.4px}.addBtn{border-radius:799.2px;min-height:41.6px;padding:0 14.4px;border:0;background:#efefef;color:#090909}.routineSummary{margin-top:14.4px;background:#171717;border-radius:20.8px;padding:12.8px 14.4px;color:#cfcfcf}.settingsHeader{display:flex;align-items:center;gap:12.8px;margin-bottom:24px}.back{width:46.4px;padding:0;font-size:24px}.tabs.rubberTabs{position:relative;display:inline-flex;gap:0;padding:3.2px;margin-bottom:17.6px;border-radius:12.8px;background:#171717;border:.32px solid var(--line);overflow:hidden}.rubberIndicator{position:absolute;top:3.2px;left:3.2px;height:calc(100% - 6.4px);width:0;border-radius:12.8px;background:#efefef;transition:left .34s cubic-bezier(.2,1.35,.4,1),width .34s cubic-bezier(.2,1.35,.4,1),transform .18s ease;transform-origin:center;z-index:0}.tabs.rubberTabs .tab{position:relative;z-index:1;min-height:41.6px;padding:0 16px;border:0;background:transparent;color:var(--text)}.tabs.rubberTabs .tab.active{color:#090909}#app.light .tabs.rubberTabs{background:#ffffffb3;border-color:#fff}#app.light .rubberIndicator{background:#222}#app.light .tabs.rubberTabs .tab.active{color:#fff!important}.settingsPane{display:none}.settingsPane.active{display:block}.integrationList,.toggleList{display:grid;gap:9.6px}.integration,.toggleRow{display:flex;justify-content:space-between;align-items:center;gap:14.4px;background:#282828;border-radius:22.4px;padding:14.4px 16px}.status{color:#999;margin-top:3.2px}.note{color:#999;line-height:1.5;max-width:688px}.switch{position:relative;width:46.4px;height:27.2px;border-radius:799.2px;background:#444;border:.32px solid var(--line);flex:0 0 auto;cursor:pointer}.switch:after{content:"";position:absolute;width:20.8px;height:20.8px;border-radius:799.2px;top:2.4px;left:2.4px;background:#ddd;transition:left .18s ease}.switch.on{background:#eee}.switch.on:after{left:22.4px;background:#111}.themeChoice{display:flex;gap:9.6px;flex-wrap:wrap;align-items:center;margin:0}.themeBtn{min-height:32px;padding:0 11.2px;border:.32px solid var(--line);background:#1b1b1b;color:var(--text);cursor:pointer}.themeBtn.active{background:#efefef;color:#090909}.settingsSelect{min-width:96px;min-height:32px;padding:0 27.2px 0 9.6px;border-radius:12.8px;border:.32px solid var(--line);background:#1b1b1b;color:var(--text);font:inherit}#app.light .settingsSelect{background:#ffffffe0;color:#222;border-color:#fff}.motionControlRow{align-items:center}.motionRangeWrap{display:flex;align-items:center;justify-content:flex-end;gap:9.6px;min-width:184px}.motionRangeWrap input{width:128px}.motionRangeWrap span{color:var(--muted);min-width:51.2px;text-align:right}#app.light .themeBtn.active{background:#222;color:#fff!important}.dangerText{color:#f77}.confirmBackdrop{display:none;position:fixed;top:0;right:0;bottom:0;left:0;z-index:80;padding:22.4px;background:#000000a8;align-items:center;justify-content:center}.confirmBackdrop.open{display:flex}.confirmCard{width:min(448px,100%);background:var(--card);border-radius:28.8px;padding:22.4px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.confirmActions{display:flex;justify-content:flex-end;align-items:center;gap:22.4px;margin-top:22.4px}.holdDelete{position:relative;overflow:hidden;min-width:88px;min-height:41.6px;padding:0 17.6px;border:.8px solid #8c2e2e;border-radius:12.8px;background:#311313;color:#fff;cursor:pointer}.holdDeleteFill{position:absolute;inset:0 auto 0 0;width:0;background:#d53d3d;pointer-events:none}.holdDeleteLabel{position:relative;z-index:1;color:#fff}#app.light .confirmCard{background:#fffffff0;border-color:#fff}#app.light .holdDelete{background:#f5dede;border-color:#e3a0a0;color:#222}.bottomNav{position:sticky;bottom:22.4px;display:flex;gap:22.4px;z-index:100;width:max-content;margin:-65.6px 0 0 22.4px}.navBtn{width:43.2px;height:43.2px;padding:0;border-radius:16px;background:#171717;border:.32px solid var(--line);color:#fff}.navBtn.active{background:#eee;color:#090909}@media (max-width:900px){.weekCopy{white-space:normal}.moveOption,.addMoveCard{flex-basis:144px}.weekHero{display:block}.grid{grid-template-columns:1fr}.moveSection,.activityCard,.weekly,.energySection{grid-column:auto}.workGrid{grid-template-columns:1fr}.timerCard,.movementCard{min-height:256px}.weekChips{grid-template-columns:repeat(4,minmax(0,1fr))}.timeTiles{grid-auto-flow:row;grid-template-columns:1fr}}@media (max-width:620px){.modal{width:100%;height:100%;max-height:100%}#app{padding:0}.shell{border-radius:0}.view{padding:14.4px 14.4px 75.2px}.card,.timerCard,.movementCard,.nextCard,.modal,.tile{border-radius:24px}.timerCard{min-height:224px}.digits{font-size:144px}.weekChips{grid-template-columns:repeat(2,minmax(0,1fr))}.modalBackdrop{padding:9.6px}.modal{height:100%}.modalStatic{padding:14.4px}.exerciseScroller{padding:3.2px 9.6px 14.4px 14.4px}.addRow{grid-template-columns:1fr}}button,.primary,.tab,.back,.navBtn,.themeBtn,.energyBtn,.hideBtn,.addBtn,.removeBtn,.skipBtn,.holdEnd,.switch,.editNameInput,.addInput,.rangeTrack,.progress,.progressSegment{border-radius:12px!important}.card,.panel,.tile,.workoutPanel,.timerCard,.movementCard,.nextCard,.modal{border-radius:36px}.movementCreatorLaunch{display:flex;gap:9.6px;align-items:center;margin:3.2px 0 14.4px}.movementCreatorOpen,.restAddBtn{min-height:35.2px;padding:0 12.8px;border-radius:12.8px;cursor:pointer}.movementCreatorOpen{border:0;background:#efefef;color:#090909}.restAddBtn{border:.32px solid var(--line);background:#1b1b1b;color:var(--text)}.movementCreator{position:relative;margin:0 0 14.4px;padding:19.2px 22.4px;border-radius:22.4px;background:#1d1d1d;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.movementCreator[hidden]{display:none}.movementCreatorHead{display:flex;align-items:center;justify-content:space-between;gap:16px;margin-bottom:17.6px}.movementCreatorHead h3{margin:0}.movementCreatorClose{position:static}.movementCreatorFields{display:grid;grid-template-columns:minmax(0,1.45fr) minmax(0,.85fr);gap:16px 19.2px}.movementCreatorFields[hidden]{display:none!important}.movementCreatorFields>label{display:grid;gap:6.4px;min-width:0;color:var(--text)}.movementTimingRow{grid-column:1/-1;display:grid;grid-template-columns:minmax(240px,352px) minmax(208px,1fr) auto;gap:17.6px;align-items:end}.durationStack{display:grid;gap:6.4px;color:var(--text)}.creatorDurationRow{display:grid;grid-template-columns:minmax(96px,1fr) minmax(104px,1fr);gap:12.8px;align-items:center}.creatorNumber{width:100%;min-width:0}.creatorUnitSelect{min-height:41.6px;width:100%;padding:0 11.2px;border-radius:12.8px;border:.32px solid var(--line);background:#151515;color:var(--text);font:inherit}.globalTimingToggle{display:flex!important;align-items:center;gap:8px!important;min-height:41.6px;cursor:pointer;color:var(--text)!important;white-space:nowrap}.globalTimingToggle input{position:absolute;opacity:0;pointer-events:none}.toggleTrack{position:relative;width:38.4px;height:22.4px;border-radius:799.2px;background:#484848;border:.32px solid var(--line);flex:0 0 auto;transition:background .16s ease}.toggleThumb{position:absolute;width:17.6px;height:17.6px;top:1.6px;left:1.6px;border-radius:50%;background:#a9a9a9;transition:left .16s ease,background .16s ease}.globalTimingToggle input:checked+.toggleTrack{background:#efefef}.globalTimingToggle input:checked+.toggleTrack .toggleThumb{left:17.6px;background:#111}.toggleLabel{color:#ddd}.creatorAddButton{min-width:97.6px;min-height:41.6px;align-self:end}#app.light .movementCreator{background:#ffffffdb;border-color:#fff}@media (max-width:900px){.movementCreatorFields{grid-template-columns:1fr}.movementTimingRow{grid-column:auto;grid-template-columns:1fr;align-items:stretch}.globalTimingToggle{min-height:35.2px}.creatorAddButton{width:100%}}.moveRow.restItem{background:#22252a;border-style:dashed}.moveKindBadge{display:inline-flex;margin-left:6.4px;padding:2.4px 5.6px;border:.8px solid #555b65;border-radius:799.2px;color:#9da5b2;vertical-align:middle}#app.light .movementCreator{background:#ffffffd1;border-color:#fff}#app.light .restAddBtn{background:#ffffffb8;color:#222;border-color:#fff}#app.light .toggleTrack{border-color:#fff}@media (max-width:900px){.movementCreatorFields,.movementCreatorFields.restFields{grid-template-columns:1fr;padding-right:0}.movementCreatorClose{position:static;margin-left:auto;display:block;margin-bottom:12.8px}}.createMoveOptions{margin:0 0 14.4px;padding:14.4px;border-radius:19.2px;background:#242424;border:.32px solid var(--line)}.createMoveOptions[hidden]{display:none}.createOptionLabel{text-transform:uppercase;color:var(--muted);margin-bottom:8px}.createPresetChoice{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}.createPresetBtn{min-height:60.8px;padding:11.2px 12.8px;border-radius:14.4px;border:.8px solid var(--line);background:transparent;color:var(--text);text-align:left;cursor:pointer}.createPresetBtn strong{display:block}.createPresetBtn span{display:block;color:var(--muted);margin-top:3.2px}.createPresetBtn.active{background:#efefef;color:#090909;border-color:#efefef}.createPresetBtn.active span{color:#575757}.createExtras{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px;margin-top:9.6px}.createExtraToggle{display:flex;align-items:flex-start;gap:8px;padding:9.6px 11.2px;border:.8px solid var(--line);border-radius:14.4px;cursor:pointer}.createExtraToggle input{margin-top:2.4px}.createExtraToggle span{display:grid;gap:2.4px}.createExtraToggle small{color:var(--muted)}.creatorUnitSelect{min-height:41.6px;padding:0 9.6px;border-radius:12.8px;border:.32px solid var(--line);background:#171717;color:var(--text);font:inherit}.autoRestSummary{display:inline-flex;align-items:center;gap:6.4px;margin-left:6.4px;color:#9da5b2}#app.light .createMoveOptions{background:#fffc;border-color:#fff}#app.light .createPresetBtn,#app.light .createExtraToggle{border-color:#fff;color:#222}#app.light .creatorUnitSelect{background:#fff;color:#222;border-color:#fff}@media (max-width:900px){.createPresetChoice,.createExtras{grid-template-columns:1fr}}.movementDurationField{display:grid;gap:6.4px}.movementTimingHead{display:flex;align-items:center;justify-content:space-between;gap:9.6px;color:var(--muted)}.globalTimingToggle{display:inline-flex!important;grid-template-columns:none!important;align-items:center;gap:5.6px!important;color:var(--text)!important;white-space:nowrap}.globalTimingToggle input{margin:0}.globalTimingValue{min-height:41.6px;display:flex;align-items:center;padding:0 11.2px;border-radius:12.8px;border:.32px solid var(--line);background:#1b1b1b;color:var(--muted)}.movementTypeBtn:disabled{opacity:.32;cursor:not-allowed}#app.light .globalTimingValue{background:#ffffffc2;border-color:#fff}.createFlow{display:grid;gap:9.6px;padding:3.2px 0 8px}.createFlow[hidden]{display:none}.createStep{border-radius:22.4px;background:#222;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);overflow:hidden}.createStepHeader{width:100%;min-height:57.6px;padding:14.4px 17.6px;border:0;background:transparent;color:var(--text);display:flex;align-items:center;justify-content:space-between;gap:19.2px;text-align:left;cursor:pointer}.createStepHeader:disabled{cursor:not-allowed;opacity:.42}.createStepIdentity{display:flex;align-items:center;gap:9.6px}.createStepNumber{width:22.4px;height:22.4px;border-radius:799.2px;display:grid;place-items:center;border:.32px solid var(--line);color:var(--muted)}.createStepSummary{min-width:0;color:var(--muted);text-align:right}.createStepBody{display:none;padding:0 14.4px 14.4px}.createStep.active .createStepBody{display:block}.createStep.active .createStepHeader{border-bottom:.32px solid #343434}.createStepSlot{display:grid;gap:11.2px}.createStepFooter{display:flex;justify-content:flex-end;margin-top:14.4px}.createStepFooter .primary:disabled{opacity:.35;cursor:not-allowed}.modal.createMode .movementTimingRow{display:none}.modal.createMode .movementCreator{margin-bottom:8px}.modal.createMode .movementCreatorFields{grid-template-columns:minmax(0,1.4fr) minmax(0,1fr)}.modal.createMode .movementCreatorFields.restFields{grid-template-columns:1fr}.modal.createMode .movementCreatorActions{margin-top:14.4px}.modal.createMode .movementCreatorLaunch{margin-top:0}.modal.createMode .sectionTitle{margin-top:9.6px}.modal.createMode .modalStatic{padding-bottom:14.4px}.modal:not(.createMode) .createFlow{display:none!important}#app.light .createStep{background:#ffffffbd;border-color:#fff}#app.light .createStep.active .createStepHeader{border-bottom-color:#fff}#app.resting .movementCard{background:#ffffff0e}#app.resting .movementRippleCanvas{opacity:1}#app.light.resting .movementCard{background:#ffffff38}.nextCard .skipSessionBtn{margin-left:auto}.modal:not(.createMode) .movementCreatorLaunch{margin-top:25.6px}.testingFeedbackThanks{grid-area:feedback;min-height:176px;padding:19.2px;border:.32px solid var(--line);border-radius:16px;background:#252525;display:flex;flex-direction:column;justify-content:center;align-items:flex-start;gap:6.4px}.testingFeedbackThanks[hidden]{display:none}.testingFeedbackThanks strong{color:#f0f0f0}.testingFeedbackThanks p{margin:0;color:#9ea5b0}.testingFeedbackThanks a{color:#d6d9df;text-underline-offset:2.4px}#app.light .testingFeedbackThanks{background:#2a2a2a;border-color:#4a4f58}:host(:fullscreen){overflow:auto;width:100vw;height:100vh}.entitySelect{max-width:min(256px,36.8vw);text-overflow:ellipsis}.integration .status code{padding:.8px 4.8px;border-radius:4.8px;background:#ffffff14}#app.light .integration .status code{background:#0000000f}.integration .pill[disabled]{cursor:default;opacity:.7}#app :focus{outline:none}#app :focus-visible{outline:2.4px solid var(--primary);outline-offset:2.4px}#app .workoutPanel:focus-visible{outline-offset:-2.4px}@media (max-width:620px){.bottomNav{margin-left:14.4px}}.shell:has(.countdown.active) .bottomNav{visibility:hidden}@media (max-width:900px){.workoutPanel:not(.active):not(.addPanel) .panelExpanded{opacity:1;filter:none;pointer-events:auto}}.grid>*{min-width:0}.energyBtn[data-level="1"]{--feeling-color:#6E63A8}.energyBtn[data-level="2"]{--feeling-color:#5878A8}.energyBtn[data-level="3"]{--feeling-color:#6F8B8A}.energyBtn[data-level="4"]{--feeling-color:#5F9B72}.energyBtn[data-level="5"]{--feeling-color:#D5A53E}.energyBtn[data-level="6"]{--feeling-color:#D56B54}.checkinQuestion+.checkinQuestion{margin-top:28.8px}.checkinStatus{margin-top:17.6px;color:var(--muted)}.checkinStatus.done{color:var(--text)}.checkinStatus.done:before{content:"✓  "}.insightSection{grid-column:span 12;margin-top:16px}.insightCard{display:grid;gap:22.4px}.insightTop{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:22.4px;align-items:end}.insightStats{display:grid;grid-auto-flow:column;grid-auto-columns:minmax(104px,1fr);gap:8px}.insightBody{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1.3fr);gap:22.4px;align-items:end}.insightLines{display:grid;gap:9.6px}.insightLine.muted{color:var(--muted)}.dayStrip{display:grid;grid-template-columns:repeat(14,minmax(0,1fr));gap:4.8px;align-items:end}.day{display:grid;gap:6.4px;justify-items:center}.dayBars{position:relative;width:100%;height:96px;border-radius:9.6px;background:#ffffff0a;overflow:hidden}.stepBar,.moveBar{position:absolute;bottom:0;border-radius:8px}.stepBar{left:0;right:0;background:#ffffff1f}.moveBar{left:22%;right:22%;background:var(--primary)}.day.today .dayBars{box-shadow:inset 0 0 0 .8px #ffffff59}.dayDots{display:flex;gap:2.4px}.dayDot{width:6.4px;height:6.4px;border-radius:50%}.dayDot.empty{box-shadow:inset 0 0 0 .8px #555}.dayLabel{color:var(--muted)}.day.today .dayLabel{color:var(--text)}.chartLegend{display:flex;gap:14.4px;flex-wrap:wrap;margin-top:11.2px;color:var(--muted)}.chartLegend i{display:inline-block;width:8px;height:8px;border-radius:2.4px;margin-right:4.8px;vertical-align:-.8px}.lgMove{background:var(--primary)}.lgSteps{background:#ffffff38}.lgDot{background:linear-gradient(90deg,#5f9b72 50%,#d5a53e 50%);border-radius:50%!important}#app.light .dayBars{background:#0000000a}#app.light .stepBar{background:#0000001a}#app.light .lgSteps{background:#00000024}#app.light .day.today .dayBars{box-shadow:inset 0 0 0 .8px #00000040}#app.light .dayDot.empty{box-shadow:inset 0 0 0 .8px #bbb}@media (max-width:900px){.insightSection{grid-column:auto}.insightTop,.insightBody{grid-template-columns:1fr}.insightStats{grid-auto-flow:row;grid-template-columns:repeat(auto-fit,minmax(96px,1fr))}.dayBars{height:72px}}#app.light .energyLog{background:#fffc}#app.light .energyLog span:last-child{color:#666!important}@media (max-width:900px){.energyScale{grid-template-columns:repeat(3,minmax(0,1fr))}}.checkinBackdrop{z-index:160}.checkinCard{width:min(576px,100%)}.checkinCard .sub{margin-top:8px}.checkinSliders{display:grid;gap:11.2px;margin-top:19.2px}.checkinTile{min-height:0;gap:14.4px}.scaleEnds{display:flex;justify-content:space-between;margin-top:6.4px;color:var(--muted)}.rangeTrack:focus-within{outline:2.4px solid var(--primary);outline-offset:2.4px}.checkinTab{position:fixed;right:0;top:50%;transform:translateY(-50%);z-index:120;display:flex;flex-direction:column;align-items:center;gap:9.6px;padding:14.4px 9.6px;border:.32px solid var(--line);border-right:0;border-radius:12.8px 0 0 12.8px!important;background:#171717;color:var(--text);cursor:pointer;transition:padding .18s ease,background .18s ease}.checkinTab:hover{padding-right:12.8px}.checkinTabIcon{font-size:16px;line-height:1}.checkinTabLabel{writing-mode:vertical-rl;transform:rotate(180deg)}.checkinBadge{position:absolute;top:8px;left:8px;width:8px;height:8px;border-radius:50%;background:var(--secondary);box-shadow:0 0 0 2.4px #171717,0 0 9.6px color-mix(in srgb,var(--secondary) 70%,transparent);animation:checkinPulse 1.8s ease-in-out infinite}.checkinTab.due{background:#232323}@keyframes checkinPulse{50%{box-shadow:0 0 0 3px #171717,0 0 2px color-mix(in srgb,var(--secondary) 20%,transparent)}}@media (prefers-reduced-motion: reduce){.checkinBadge{animation:none}}.shell:has(#workoutView.active) .checkinTab,.shell:has(.countdown.active) .checkinTab{display:none}#app.light .checkinTab{background:#ffffffe0;border-color:#fff}#app.light .checkinBadge{background:var(--primary);box-shadow:0 0 0 2.4px #fff,0 0 9.6px color-mix(in srgb,var(--primary) 50%,transparent)}.feelSection{grid-column:span 12;margin-top:16px}.feelCard{display:grid;gap:19.2px}.feelTop{display:grid;grid-template-columns:minmax(0,1fr) minmax(208px,336px);gap:22.4px;align-items:end}.feelTotals{display:grid;gap:9.6px}.feelCount{color:var(--muted)}.feelDays{display:grid;grid-template-columns:repeat(7,minmax(0,1fr));gap:8px}.feelDay{min-height:0;gap:9.6px}.feelDay.future{opacity:.4}.feelDay.today{box-shadow:inset 0 0 0 .8px #ffffff4d}#app.light .feelDay.today{box-shadow:inset 0 0 0 .8px #0003}.feelDots{font-size:6.4px;letter-spacing:1.6px;color:var(--muted)}.feelMeter{display:grid;gap:4.8px}.feelMeterTop{display:flex;justify-content:space-between;gap:6.4px;color:var(--muted)}.feelMeterTop span:last-child{color:var(--text)}.feelTrack{height:6.4px;border-radius:799.2px;background:#ffffff14;overflow:hidden}.feelTrack span{display:block;height:100%;border-radius:799.2px}#app.light .feelTrack{background:#00000014}.feelTotals .feelTrack{height:9.6px}@media (max-width:900px){.feelSection{grid-column:auto}.feelTop{grid-template-columns:1fr}.feelDays{grid-template-columns:repeat(4,minmax(0,1fr))}}@media (max-width:620px){.feelDays{grid-template-columns:repeat(2,minmax(0,1fr))}}.checkinTile .timeHeader{align-items:center}.checkinTab:not(.due){opacity:.6}.checkinTab:not(.due):hover{opacity:1}.activityCard{grid-column:span 3}.weekly{grid-column:span 9;cursor:pointer;transition:border-color .18s ease,background .18s ease}.weekly:hover{border-color:#5a5a5a}#app.light .weekly:hover{border-color:#fff;background:#ffffffeb}.weeklyExpand{position:absolute;top:19.2px;right:22.4px;font-size:16px;color:var(--muted);transition:transform .18s ease}.weekly:hover .weeklyExpand{transform:scale(1.15)}.weekChips{grid-template-columns:repeat(8,minmax(0,1fr))}.weekChipBottom{display:flex;justify-content:space-between;align-items:flex-end;gap:4.8px}.face{width:20.8px;height:20.8px;flex:0 0 auto;display:block}.face.empty circle{fill:none;stroke:#4a4a4a;stroke-width:1.2;stroke-dasharray:2.5 2.5}#app.light .face.empty circle{stroke:#c4c4c4}.weekChip.total .face{width:24px;height:24px}.insightBackdrop{z-index:155}.insightModalCard{width:min(992px,100%);max-height:calc(100dvh - 56px);overflow:auto}.insightModalHead{display:flex;justify-content:space-between;align-items:center;margin-bottom:9.6px}.insightModalHead .sectionLabel{margin:0}.insightModalCard .dayBars{height:160px}.insightBody.chartOnly{grid-template-columns:1fr}.dayFace .face{width:17.6px;height:17.6px}.chartLegend span{display:inline-flex;align-items:center}.chartLegend .face{width:9.6px;height:9.6px;margin-right:4.8px}@media (max-width:1200px){.activityCard{grid-column:span 4}.weekly{grid-column:span 8}.weekChips{grid-template-columns:repeat(4,minmax(0,1fr))}}@media (max-width:900px){.activityCard,.weekly{grid-column:auto}.insightModalCard .dayBars{height:88px}.dayFace .face{width:12.8px;height:12.8px}}.weekChipTime{white-space:nowrap}.insightCard{grid-column:span 9;align-content:start}.insightEyebrow{margin-bottom:-11.2px}.insightStats{grid-auto-columns:minmax(88px,1fr)}.insightCard .dayBars{height:120px}@media (max-width:1200px){.insightCard{grid-column:span 8}.insightTop{grid-template-columns:1fr}}@media (max-width:900px){.insightCard{grid-column:auto}.insightCard .dayBars{height:80px}}.helpBackdrop{z-index:170}.helpCard .helpSteps,.helpCard .helpNote{max-width:688px}.helpHead{display:flex;justify-content:space-between;align-items:flex-start;gap:16px}.helpCard .note{margin:0}.helpSteps{margin:19.2px 0 0;padding:0;list-style:none;counter-reset:help;display:grid;gap:9.6px}.helpSteps li{counter-increment:help;display:grid;gap:4.8px;position:relative;padding:14.4px 16px 14.4px 52.8px;border-radius:20.8px;background:#252525;color:var(--muted)}.helpSteps li:before{content:counter(help);position:absolute;left:14.4px;top:12.8px;width:25.6px;height:25.6px;border-radius:9.6px;display:grid;place-items:center;background:#313131;color:var(--text)}.helpSteps strong,.helpSteps b,.helpNote b{color:var(--text)}.helpAction{display:block;padding:8px 9.6px;border-radius:11.2px;background:#1b1b1b;color:var(--text)}.helpCard code{padding:.8px 4.8px;border-radius:4.8px;background:#ffffff14}.helpNote{display:grid;gap:3.2px;margin-top:9.6px;padding:12.8px 16px;border-radius:17.6px;border:.32px solid var(--line);color:var(--muted)}.helpNote strong{color:var(--text)}#app.light .helpSteps li{background:#fffc}#app.light .helpSteps li:before{background:var(--primary-tint)}#app.light .helpAction{background:#eeeded}#app.light .helpCard code{background:#0000000f}#app.light .helpNote{border-color:#fff}.rowLabel{grid-column:1/-1;margin-top:16px;margin-bottom:-8px}.checkinTab{flex-direction:row;align-items:center;gap:0}.checkinTabMain{display:flex;flex-direction:column;align-items:center;gap:9.6px}.checkinPeek{display:grid;gap:3.2px;justify-items:start;white-space:nowrap;overflow:hidden;max-width:0;opacity:0;margin-right:0;transition:max-width .32s cubic-bezier(.2,1.2,.4,1),opacity .2s ease,margin-right .32s ease}.checkinTab.peek{padding-left:17.6px;opacity:1}.checkinTab.peek .checkinPeek{max-width:176px;opacity:1;margin-right:14.4px}.peekCountdown{font-size:24px;font-weight:800;letter-spacing:-.04em;line-height:1;font-variant-numeric:tabular-nums}.peekAt{color:var(--muted)}@media (prefers-reduced-motion: reduce){.checkinPeek{transition:none}}.activityRowMeta{color:var(--text);margin-top:1.6px;font-variant-numeric:tabular-nums}.feelTop{grid-template-columns:1fr}:host{--primary:#03A9F4;--secondary:#D0FF00;--primary-tint:color-mix(in srgb,var(--primary) 16%,white);--primary-ink:color-mix(in srgb,var(--primary) 75%,black);--font:Inter,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;--w-regular:400;--w-medium:500;--w-semibold:600;--w-bold:700;--w-heavy:800;--t-display:64px;--t-title:22px;--t-value:22px;--t-section:18px;--t-strong:16px;--t-body:14px;--t-caption:12px;--lh-display:1.05;--lh-title:1}@media (max-width:620px){:host{--t-display:46px;--t-title:20px;--t-value:20px;--t-section:16px;--t-strong:15px;--t-body:14px;--t-caption:11px;--lh-display:.92;--lh-title:1.05}}#app{font-family:var(--font);font-size:var(--t-body);font-weight:var(--w-regular);line-height:1.4}#app button,#app input,#app select,#app textarea{font-family:inherit}#app strong,#app b{font-weight:var(--w-bold)}.title,.workoutName,.exerciseTitle,.insightBig,.feelHeadline,.settingsTitle,.weekMetric{font-size:var(--t-display);font-weight:var(--w-heavy);line-height:var(--lh-display);letter-spacing:-.055em}.activityTitle,.confirmTitle,.modalHead h2,.paneTitle,.movementCreatorHead h3,.testingFeedbackThanks strong{font-size:var(--t-title);font-weight:var(--w-medium);font-style:italic;line-height:var(--lh-title);letter-spacing:-.03em}.paneTitle{margin:0 0 10px}.activityRowMeta,.nextName,.upcomingName,.editNameInput{font-size:var(--t-value);font-weight:var(--w-regular);line-height:1.15;letter-spacing:-.02em}.insightLine strong{font-weight:var(--w-bold)}.sectionLabel,.nextLabel{font-size:var(--t-section);font-weight:var(--w-regular);line-height:1.2;letter-spacing:-.01em}.activityRowName,.integration strong,.toggleRow strong,.timeLabel,.moveItemName,.weekChipTop strong,.weekChipTime,.panelCollapsedText,.activityCount,.helpSteps strong,.helpNote strong,.createStepIdentity strong,.createPresetBtn strong,.createExtraToggle strong,.testingZoneTitleRow strong,.testingFeedbackHeading,.tempoEstimate,.primary,.tab,.skipBtn,.skipSessionBtn,.hideBtn,.removeBtn,.addBtn,.themeBtn,.holdEnd,.holdDelete,.energyBtn,.movementCreatorOpen,.restAddBtn,.creatorAddButton,.testingFeedbackSubmit,.testingRating button,.toast,.checkinTabLabel{font-size:var(--t-strong);font-weight:var(--w-semibold);line-height:1.25;letter-spacing:-.01em}.sub,.meta,.note,.weekCopy,.timeValue,.addInput,.settingsSelect,.pill,.checkinStatus,.routineSummary,.helpSteps li,.helpNote,.createStepSummary,.insightLine{font-size:var(--t-body);font-weight:var(--w-regular);line-height:1.4;letter-spacing:0}.eyebrow,#stepLabel,.sourceTag,.addPanelLabel,.status,.motionRangeWrap span,.moveMeta,.sectionTitle,.editNameLabel,.dayLabel,.scaleEnds,.peekAt,.upcomingMeta,.energyLog,.tempoPole,.tempoReadout,.tempoRevealBtn,.testingFeedbackField,.testingZoneExplanation,.testingFeedbackThanks p,.movementCreatorClose,.movementCreatorFields>label,.durationStack,.globalTimingToggle,.toggleLabel,.moveKindBadge,.createOptionLabel,.createPresetBtn span,.createExtraToggle small,.autoRestSummary,.movementTimingHead,.globalTimingValue,.createStepNumber,.weekChipMeta,.feelMeterTop,.feelCount,.chartLegend,#app code{font-size:var(--t-caption);font-weight:var(--w-regular);line-height:1.35;letter-spacing:0}.eyebrow,#stepLabel,.sectionTitle{letter-spacing:.1em}.globalTimingToggle{font-size:var(--t-caption)!important}.workoutGallery,.workoutPanel{height:340px}@media (max-width:900px){.workoutPanel,.workoutPanel.active{height:320px}}@media (max-width:900px){.workoutGallery{height:auto}.workoutPanel,.workoutPanel.active{height:auto;min-height:320px}}@media (max-width:620px){.view{padding-left:0;padding-right:0}.topbar,.settingsHeader,.sessionHead,.sessionControlRow{margin-left:16px;margin-right:16px}.tabs.rubberTabs,.sectionLabel,.rowLabel{margin-left:16px}.grid{gap:8px}.rowLabel,.feelSection{margin-top:16px}.rowLabel{margin-bottom:-4px}.sectionLabel{margin-bottom:8px}.workoutGallery{gap:8px}.workoutPanel,.workoutPanel.active{flex:0 0 100%;min-width:100%}.workoutPanel.addPanel{flex:0 0 100%;min-width:100%;min-height:120px}.card,.workoutPanel,.timerCard,.movementCard,.nextCard,.upcomingCard,.confirmCard{padding:16px}.activityRows,.insightCard,.feelCard{gap:8px}.activityRow,.weekChip{padding:10px 12px}.insightStats,.feelDays{gap:8px}.workGrid{gap:8px;margin-top:8px}.nextWrap,.sessionControlRow{margin-top:8px}.upcomingList{gap:8px}}.tabs.rubberTabs .tab{white-space:nowrap}@media (max-width:620px){.tabs.rubberTabs{display:flex;width:max-content;max-width:calc(100% - 32px);overflow-x:auto;scrollbar-width:none}.tabs.rubberTabs::-webkit-scrollbar{display:none}.tabs.rubberTabs .tab{flex:0 0 auto}}#app.light .timeIcon{background:var(--primary-tint);color:var(--primary-ink)!important}.insightCard{display:flex;flex-direction:column;gap:0}.movementReadings{grid-template-columns:repeat(3,minmax(0,1fr))}.weekBars{flex:1;display:grid;grid-template-columns:repeat(7,minmax(0,1fr));gap:9.6px;margin-top:16px;min-height:150px}.weekBar{display:grid;grid-template-rows:1fr auto;gap:8px;justify-items:center;min-height:0}.weekBarTrack{position:relative;width:100%;height:100%;min-height:110px;border-radius:24px;background:#292929;overflow:hidden}.weekBarTrack span{position:absolute;left:0;right:0;bottom:0;border-radius:24px;background:var(--primary)}.weekBar.today .weekBarTrack{box-shadow:inset 0 0 0 1.5px var(--primary)}.weekBar.today .dayLabel{color:var(--text);font-weight:var(--w-bold)}.weekBar.future{opacity:.35}#app.light .weekBarTrack{background:#fffc}#app.light .insightCard .activityRow:nth-child(1) .activityRowIcon{background:var(--primary-tint);color:var(--primary-ink)!important}@media (max-width:900px){.movementReadings{grid-template-columns:1fr}.weekBarTrack{min-height:90px}}@media (max-width:1200px) and (min-width:901px){.timeTiles{grid-auto-flow:row;grid-template-columns:repeat(2,1fr)}}#stepLabel{margin-top:9.6px}#exerciseMeta{margin-top:4px}', Aa = `<main id="app"><div class="shell">
<div class="toast" id="toast" aria-live="polite"></div>

<!-- HOME -->
<section class="view active" id="homeView">
  <div class="topbar">
    <div><div class="title" id="homeClock">--:--</div></div>
  </div>

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
    <div class="modalStatic">
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

      <div class="timeTiles">
      <section class="tile timeTile">
        <div class="timeHeader">
          <div class="timeIcon" aria-hidden="true">◷</div>
          <div class="timeCopy">
            <div class="timeLabel" id="totalLabel">Total time</div>
            <div class="timeValue" id="totalOut">20 min</div>
          </div>
        </div>
        <div class="rangeTrack">
          <div class="rangeFill" id="totalFill"></div>
          <input class="rangeInput" id="totalTime" type="range" min="3" max="40" step="1" value="20" aria-label="Time per round in minutes">
        </div>
      </section>

      <section class="tile timeTile">
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
      </section>

      <section class="tile timeTile">
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
function Fa(h, g) {
  const i = (e) => h.getElementById(e), E = i("workoutView"), x = i("workoutNameInput");
  let B = !0;
  const Sn = i("homeClock");
  function Cn() {
    Sn && (Sn.textContent = new Intl.DateTimeFormat(void 0, { hour: "2-digit", minute: "2-digit" }).format(/* @__PURE__ */ new Date()));
  }
  Cn(), setInterval(Cn, 15e3);
  const Tn = i("createFlow"), ki = i("createMovementsSlot"), wi = i("createTimingSlot"), Ln = i("createFinishSlot"), Si = i("movementStepSummary"), Ci = i("timingStepSummary"), Ti = i("finishStepSummary"), zt = i("continueToTiming"), Li = i("continueToFinish"), Mi = i("finishMoveButton");
  let Ot = !1, ht = [];
  function Ei(e) {
    !e || ht.some((t) => t.node === e) || ht.push({ node: e, parent: e.parentNode, next: e.nextSibling });
  }
  function ft(e, t) {
    e && (Ei(e), t.appendChild(e));
  }
  function Ri() {
    [...ht].reverse().forEach(({ node: e, parent: t, next: n }) => {
      t && (n && n.parentNode === t ? t.insertBefore(e, n) : t.appendChild(e));
    }), ht = [];
  }
  function Ae(e) {
    h.querySelectorAll(".createStep").forEach((t) => {
      t.classList.toggle("active", t.dataset.createStep === e);
    }), e === "timing" && (Ot = !0), pe();
  }
  function pe() {
    var u, p;
    if (!A) return;
    y[S];
    const e = N.filter((m) => !m.hidden), t = e.filter((m) => m.kind !== "rest").length, n = e.filter((m) => m.kind === "rest").length;
    Si.textContent = t ? t + " movement" + (t === 1 ? "" : "s") + (n ? " · " + n + " rest" + (n === 1 ? "" : "s") : "") : "No movements yet";
    const a = t > 0, o = h.querySelector('[data-open-step="timing"]'), l = h.querySelector('[data-open-step="finish"]');
    o.disabled = !a, zt.disabled = !a, Ci.textContent = a ? ue(T.value) + " · " + U(w.value) + " movement · " + U(C.value) + " rest" : "Add a movement first", l.disabled = !(a && Ot);
    const r = ((x == null ? void 0 : x.value) || "").trim(), s = [];
    (u = i("includeWarmupPreset")) != null && u.checked && s.push("warm-up"), (p = i("includeCooldownPreset")) != null && p.checked && s.push("cooldown"), Ti.textContent = r ? r + (s.length ? " · " + s.join(" + ") : "") : s.length ? s.join(" + ") : "Name and optional extras";
  }
  function Bi() {
    var k, R, I;
    Tn.hidden = !1, Ot = !1;
    const e = h.querySelector(".editNameRow"), t = i("createMoveOptions"), n = h.querySelector(".timeTiles"), a = i("routineSummaryModal"), o = h.querySelector(".tempoRevealRow"), l = i("tempoExperiment"), r = (k = i("warmupList")) == null ? void 0 : k.closest("section"), s = i("movementCreatorLaunch"), u = i("movementCreator"), p = (R = i("strengthList")) == null ? void 0 : R.closest("section"), m = (I = i("cooldownList")) == null ? void 0 : I.closest("section");
    [r, s, u, p, m].forEach((D) => ft(D, ki)), [t, n, a, o, l].forEach((D) => ft(D, wi)), ft(e, Ln);
    const d = t == null ? void 0 : t.querySelector(".createExtras");
    d && ft(d, Ln), Ae("movements"), pe();
  }
  function Ai() {
    Ri(), Tn.hidden = !0, h.querySelectorAll(".createStep").forEach((e) => e.classList.remove("active"));
  }
  h.querySelectorAll("[data-open-step]").forEach((e) => e.addEventListener("click", () => {
    e.disabled || Ae(e.dataset.openStep);
  })), zt.addEventListener("click", () => {
    zt.disabled || Ae("timing");
  }), Li.addEventListener("click", () => Ae("finish")), Mi.addEventListener("click", () => i("saveWorkoutEdit").click());
  const Fe = { home: i("homeView"), workout: i("workoutView"), settings: i("settingsView") }, Mn = i("homeNav"), En = i("settingsNav");
  function qt(e) {
    Object.entries(Fe).forEach(([t, n]) => n.classList.toggle("active", t === e)), Mn.classList.toggle("active", e === "home"), En.classList.toggle("active", e === "settings"), e === "home" && setTimeout(en, 400), e === "settings" && requestAnimationFrame(() => mt(h.querySelector(".tab.active"), !1));
  }
  const T = i("totalTime"), w = i("workTime"), C = i("restTime"), Rn = i("totalOut"), Bn = i("workOut"), An = i("restOut"), Fi = i("totalFill"), Ni = i("workFill"), Pi = i("restFill"), ye = i("roundsInput"), Ii = i("roundsFill"), Di = i("roundsOut"), Hi = i("totalLabel"), _i = i("routineSummaryModal"), Wt = [
    { id: "standing-reach", name: "Standing reach", group: "Warm-up", kind: "warmup", hidden: !1 },
    { id: "arm-circles", name: "Arm circles", group: "Warm-up", kind: "warmup", hidden: !1 },
    { id: "hip-hinge", name: "Hip hinge drill", group: "Warm-up", kind: "warmup", hidden: !1 }
  ];
  let ke = Wt.map((e) => ({ ...e })), N = [
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
  const Gt = [
    { id: "hip-flexor", name: "Hip flexor stretch", group: "Cooldown", kind: "cooldown", hidden: !1 },
    { id: "chest-opener", name: "Chest opener", group: "Cooldown", kind: "cooldown", hidden: !1 },
    { id: "hamstring", name: "Hamstring stretch", group: "Cooldown", kind: "cooldown", hidden: !1 },
    { id: "slow-breathing", name: "Slow breathing", group: "Cooldown", kind: "cooldown", hidden: !1 }
  ];
  let we = Gt.map((e) => ({ ...e }));
  const zi = {
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
  }, b = Fn(g.data), y = b.profiles;
  let S = y[b.selected] ? b.selected : b.order.find((e) => y[e]) || "kettlebell";
  function Fn(e) {
    const t = e && typeof e == "object" ? JSON.parse(JSON.stringify(e)) : {}, n = t.profiles && Object.keys(t.profiles).length ? t.profiles : JSON.parse(JSON.stringify(zi)), a = (Array.isArray(t.order) ? t.order : Object.keys(n)).filter((o) => n[o]);
    return Object.keys(n).forEach((o) => {
      a.includes(o) || a.push(o);
    }), {
      v: 1,
      profiles: n,
      order: a,
      selected: t.selected || a[0],
      history: Array.isArray(t.history) ? t.history : [],
      checkins: (Array.isArray(t.checkins) ? t.checkins : Oi(t.energy)).map(Nn),
      settings: { ...t.settings || {} }
    };
  }
  function Oi(e) {
    if (!Array.isArray(e)) return [];
    const t = ["Drained", "Low", "Okay", "Good", "Energised", "Great"], n = [];
    return e.forEach((a) => {
      const o = new Date(a.at);
      if (isNaN(o)) return;
      const l = o.getFullYear() + "-" + String(o.getMonth() + 1).padStart(2, "0") + "-" + String(o.getDate()).padStart(2, "0"), r = o.getHours() < 14 ? "morning" : "evening";
      if (n.some((u) => u.date === l && u.slot === r)) return;
      const s = t.indexOf(a.value) + 1;
      s > 0 && n.push({ date: l, slot: r, mood: null, energy: s, at: a.at });
    }), n;
  }
  function Nn(e) {
    if (e.scale === 100) return e;
    const t = (n) => n == null ? null : Math.round((Number(n) - 1) / 5 * 100);
    return { ...e, mood: t(e.mood), energy: t(e.energy), scale: 100 };
  }
  function Se() {
    A || (b.selected = S, b.order = b.order.filter((e) => y[e] && e !== Ce), g.save(b));
  }
  function L() {
    return b.settings;
  }
  function X(e) {
    const t = y[e];
    if (!t) return;
    S = e;
    const n = i("workoutNameInput");
    n && (n.value = t.name), T.value = t.total, w.value = t.work, C.value = t.rest, ye.value = t.rounds || 1, t.customSequence ? (ke = [], we = [], N = (t.sequence || []).map((a) => ({ ...a })), Ut(t.preset || "movement", !1)) : (T.min = 3, T.max = 40, T.step = 1, w.min = 20, w.max = 60, w.step = 5, C.min = 5, C.max = 30, C.step = 5, ke = (t.warmup || Wt).map((a) => ({ ...a })), we = (t.cooldown || Gt).map((a) => ({ ...a })), N = t.strength.map(([a, o, l, r = !1]) => ({ id: a, name: o, group: l, kind: "work", hidden: !!r }))), h.querySelectorAll(".workoutPanel[data-workout]").forEach((a) => a.classList.toggle("active", a.dataset.workout === e)), Y();
  }
  function qi(e, t, n) {
    const a = e.getBoundingClientRect(), o = a.width / 2, l = a.height / 2, r = t - o, s = n - l;
    let u = 1 / 0, p = 1 / 0;
    r !== 0 && (u = o / Math.abs(r)), s !== 0 && (p = l / Math.abs(s));
    const m = Math.min(Math.max(1 / Math.min(u, p), 0), 1);
    let d = Math.atan2(s, r) * (180 / Math.PI) + 90;
    return d < 0 && (d += 360), { edge: m, angle: d };
  }
  function jt(e, t, n = !1) {
    const a = e.getBoundingClientRect(), o = t.clientX - a.left, l = t.clientY - a.top, { edge: r, angle: s } = qi(e, o, l), u = n ? 100 : r * 100;
    e.style.setProperty("--edge-proximity", u.toFixed(3)), e.style.setProperty("--cursor-angle", s.toFixed(3) + "deg"), e.classList.toggle("borderGlowActive", n || u >= 30);
  }
  function Pn(e) {
    e.addEventListener("pointermove", (n) => jt(e, n, !1)), e.addEventListener("pointerenter", (n) => jt(e, n, !1)), e.addEventListener("pointerdown", (n) => jt(e, n, !0));
    const t = () => {
      e.classList.remove("borderGlowActive"), e.style.setProperty("--edge-proximity", "0");
    };
    e.addEventListener("pointerleave", t), e.addEventListener("pointerup", t), e.addEventListener("pointercancel", t);
  }
  Pn(i("addWorkoutPanel"));
  let A = !1, Ce = null;
  function F(e) {
    return String(e ?? "").replace(/[&<>"']/g, (t) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[t]);
  }
  function Wi(e) {
    return e.summary ? e.summary : e.customSequence ? ue(e.total) + " · custom move" : ue(e.total) + " · " + U(e.work) + " / " + U(e.rest) + " · warm-up + cooldown";
  }
  function Zt(e, t) {
    var r;
    const n = document.createElement("article");
    n.className = "workoutPanel", n.dataset.workout = e, n.tabIndex = 0;
    const a = t.eyebrow === void 0 ? "Movement" : t.eyebrow, o = t.activityCount ?? (((r = t.sequence) == null ? void 0 : r.length) || 0);
    n.innerHTML = '<span class="edgeLight" aria-hidden="true"></span><div class="panelExpanded"><div><div class="workoutPanelTop"><div>' + (a ? '<div class="eyebrow">' + F(a) + "</div>" : "") + '<div class="workoutName">' + F(t.name) + '</div><div class="sub">' + F(Wi(t)) + '</div><span class="sourceTag">' + F(t.source || "Custom move") + '</span></div><button class="pill seeWorkoutBtn" type="button">Edit</button></div></div><div class="workoutFooter"><div><strong class="activityCount">' + (o ? o + " activities" + ((t.rounds || 1) > 1 ? " × " + t.rounds : "") : "—") + '</strong></div><div class="workoutPanelActions"><button class="primary startWorkoutBtn" type="button">Start move</button></div></div></div><div class="panelCollapsed"><div class="panelCollapsedText">' + F(t.name) + "</div></div>";
    const l = i("addWorkoutPanel");
    return i("workoutGallery").insertBefore(n, l), Pn(n), n.addEventListener("click", (s) => {
      s.target.closest("button") || X(e);
    }), n.addEventListener("keydown", (s) => {
      (s.key === "Enter" || s.key === " ") && !s.target.closest("button") && (s.preventDefault(), X(e));
    }), n.querySelector(".seeWorkoutBtn").addEventListener("click", (s) => {
      s.stopPropagation(), X(e), Vn(!1);
    }), n.querySelector(".startWorkoutBtn").addEventListener("click", (s) => {
      s.stopPropagation(), X(e), ba();
    }), n;
  }
  function In() {
    h.querySelectorAll(".workoutPanel[data-workout]").forEach((e) => e.remove()), b.order.forEach((e) => {
      y[e] && Zt(e, y[e]);
    }), h.querySelectorAll(".workoutPanel[data-workout]").forEach((e) => e.classList.toggle("active", e.dataset.workout === S));
  }
  In(), i("addWorkoutPanel").addEventListener("keydown", (e) => {
    (e.key === "Enter" || e.key === " ") && (e.preventDefault(), i("addWorkoutPanel").click());
  }), i("addWorkoutPanel").addEventListener("click", () => {
    A = !0, Ce = "custom-" + Date.now(), y[Ce] = {
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
    }, X(Ce), Vn(!0);
  });
  let c = [], f = 0, Q = 0, vt = 1, O = !1, P = null, bt = null, G = !1, Ne = b.settings.upcomingCount ?? "all";
  function xt(e, t, n) {
    return (Number(e) - t) / (n - t) * 100;
  }
  function U(e) {
    const t = Math.max(0, Number(e) || 0);
    return t >= 3600 && t % 3600 === 0 ? t / 3600 + " hr" : t >= 60 && t % 60 === 0 ? t / 60 + " min" : t >= 60 ? Math.round(t / 60) + " min" : Math.round(t) + " sec";
  }
  function ue(e) {
    const t = Math.max(0, Number(e) || 0);
    return t >= 60 && t % 60 === 0 ? t / 60 + " hr" : t >= 60 ? Math.floor(t / 60) + " hr " + t % 60 + " min" : t + " min";
  }
  function yt() {
    Fi.style.width = xt(T.value, Number(T.min), Number(T.max)) + "%", Ni.style.width = xt(w.value, Number(w.min), Number(w.max)) + "%", Pi.style.width = xt(C.value, Number(C.min), Number(C.max)) + "%", Rn.textContent = ue(T.value), Bn.textContent = U(w.value), An.textContent = U(C.value);
    const e = Number(ye.value) || 1;
    Ii.style.width = xt(e, 1, 10) + "%", Hi.textContent = e > 1 ? "Time per round" : "Total time";
  }
  function Vt(e) {
    return e.filter((t) => !t.hidden);
  }
  function Dn(e, t) {
    const n = Math.max(0, Number(e) || 0);
    return Math.round(t === "hour" ? n * 3600 : t === "min" ? n * 60 : n);
  }
  function Ut(e, t = !0) {
    h.querySelectorAll(".createPresetBtn").forEach((a) => a.classList.toggle("active", a.dataset.movePreset === e));
    const n = y[S];
    n && (n.preset = e), e === "work" ? (T.min = 30, T.max = 480, T.step = 30, w.min = 300, w.max = 7200, w.step = 300, C.min = 60, C.max = 1800, C.step = 60, t && (T.value = 60, w.value = 1500, C.value = 300), i("addMovementUnit").value = "min", i("addMovementDuration").value = 25, i("addRestUnit").value = "min", i("addRestDuration").value = 5) : (T.min = 3, T.max = 40, T.step = 1, w.min = 20, w.max = 60, w.step = 5, C.min = 5, C.max = 30, C.step = 5, t && (T.value = 20, w.value = 45, C.value = 15), i("addMovementUnit").value = "sec", i("addMovementDuration").value = 45, i("addRestUnit").value = "sec", i("addRestDuration").value = 30), yt();
  }
  function Hn() {
    const e = y[S];
    if (e != null && e.customSequence) {
      if (N = N.filter((t) => !t.presetRole), i("includeWarmupPreset").checked ? (N = [...Wt.map((n, a) => ({ ...n, id: "preset-warm-" + a + "-" + Date.now(), kind: "work", duration: Number(w.value), presetRole: "warmup" })), ...N], e.includeWarmup = !0) : e.includeWarmup = !1, i("includeCooldownPreset").checked) {
        const t = Gt.map((n, a) => ({ ...n, id: "preset-cool-" + a + "-" + Date.now(), kind: "work", duration: Number(w.value), presetRole: "cooldown" }));
        N = [...N, ...t], e.includeCooldown = !0;
      } else e.includeCooldown = !1;
      Y();
    }
  }
  function Gi() {
    const e = i("upcomingCountSetting");
    if (!e) return;
    const t = Math.max(1, c.length - 1), n = Ne;
    e.innerHTML = "";
    for (let l = 1; l <= t; l++) {
      const r = document.createElement("option");
      r.value = String(l), r.textContent = String(l), e.appendChild(r);
    }
    const a = document.createElement("option");
    a.value = "all", a.textContent = "All", e.appendChild(a);
    const o = n === "all" ? "all" : String(Math.min(Number(n) || 1, t));
    e.value = o, Ne = o === "all" ? "all" : Number(o);
  }
  function Y() {
    const e = Number(T.value) * 60, t = Number(w.value), n = Number(C.value), a = Vt(ke), o = Vt(N), l = Vt(we), r = y[S];
    if (r && (r.total = Number(T.value), r.work = t, r.rest = n, r.rounds = Number(ye.value) || 1, r.customSequence ? r.sequence = N.map((v) => ({ ...v })) : (r.strength = N.map((v) => [v.id, v.name, v.group, !!v.hidden]), r.warmup = ke.map((v) => ({ ...v })), r.cooldown = we.map((v) => ({ ...v })))), r != null && r.customSequence) {
      const v = o.map((M) => {
        if (M.kind === "rest") {
          const J = M.useGlobalTiming === !0 ? n : Number(M.duration) || n;
          return { ...M, duration: J, rest: 0 };
        }
        const z = M.useGlobalTiming === !1 && Number(M.duration) || t;
        return { ...M, duration: z, rest: 0 };
      });
      r.autoRest && Number(r.autoRestDuration) > 0 ? (c = [], v.forEach((M, z) => {
        c.push(M);
        const J = v[z + 1];
        M.kind !== "rest" && J && J.kind !== "rest" && c.push({
          id: "auto-rest-" + z,
          name: "Rest",
          group: "Rest",
          kind: "rest",
          hidden: !1,
          duration: Number(r.autoRestDuration),
          rest: 0,
          autoGenerated: !0
        });
      })) : c = v;
    } else {
      const v = a.length + l.length;
      let M = o.length ? 1 : 0, z = 1 / 0;
      const J = 80;
      for (let H = o.length ? 1 : 0; H <= J; H++) {
        const V = v + H;
        if (V <= 0) continue;
        const xe = V * t + Math.max(0, V - 1) * n, ce = e - xe, xi = t + ce;
        xi < 15 || xi > 120 || Math.abs(ce) < Math.abs(z) && (z = ce, M = H);
      }
      if (z === 1 / 0) {
        const H = Math.max(v + (o.length ? 1 : 0), Math.round((e + n) / (t + n)));
        M = Math.max(o.length ? 1 : 0, H - v);
      }
      const _t = [];
      for (let H = 0; H < M; H++) {
        const V = o[H % Math.max(1, o.length)];
        V && _t.push({ ...V, duration: t, rest: n });
      }
      if (c = [
        ...a.map((H) => ({ ...H, duration: t, rest: n })),
        ..._t,
        ...l.map((H) => ({ ...H, duration: t, rest: n }))
      ], c.length) {
        const H = c.reduce((xe, ce) => xe + ce.duration, 0) + Math.max(0, c.length - 1) * n, V = e - H;
        c[c.length - 1].duration = Math.max(15, c[c.length - 1].duration + V), c.forEach((xe, ce) => xe.rest = ce < c.length - 1 ? n : 0);
      }
    }
    const s = Math.max(1, Math.min(10, Number(ye.value) || 1)), u = c, p = u.length, m = u.reduce((v, M) => v + M.duration + M.rest, 0);
    c = [];
    for (let v = 1; v <= s; v++)
      if (u.forEach((M, z) => c.push({ ...M, id: M.id + (s > 1 ? "-r" + v : ""), round: v, roundIndex: z })), v < s && p)
        if (r != null && r.customSequence)
          c.push({ id: "round-break-" + v, name: "Rest", group: "Round " + (v + 1) + " next", kind: "rest", hidden: !1, duration: n, rest: 0, round: v, roundIndex: p, roundBreak: !0 });
        else {
          const M = c[c.length - 1];
          M.rest = n, M.roundBreakAfter = !0;
        }
    yt();
    const d = c.reduce((v, M) => v + M.duration + M.rest, 0), k = Math.round(m / 60), R = Math.round(d / 60), I = s > 1 ? ue(k) + " × " + s + " rounds (" + ue(R) + ")" : ue(R), D = r != null && r.customSequence ? I + " · " + p + " items" : I + " · " + U(t) + " / " + U(n) + " · warm-up + cooldown", _ = p + " activities" + (s > 1 ? " × " + s : "");
    T.closest(".timeTile").hidden = !!(r != null && r.customSequence), Di.textContent = s > 1 ? s + " rounds · " + ue(R) + " total" : "1 round", r && (r.summary = D, r.activityCount = p);
    const K = h.querySelector(".workoutPanel.active .sub");
    K && (K.textContent = D), _i.textContent = D, h.querySelectorAll(".workoutPanel.active .activityCount").forEach((v) => v.textContent = _), yt(), ji(), Kt(), Pe(), Gi(), A && pe(), Fe.workout.classList.contains("active") && !P && un();
  }
  function Yt(e, t) {
    const n = i(t);
    n.innerHTML = "", e.forEach((a) => {
      const o = document.createElement("div");
      o.className = "moveRow" + (a.hidden ? " hidden" : "") + (a.kind === "rest" ? " restItem" : "");
      const r = " · " + (a.kind === "rest" ? a.useGlobalTiming === !0 ? "Global timing" : U(a.duration) : a.useGlobalTiming === !1 ? U(a.duration) : "Global timing"), s = a.kind === "rest" ? '<span class="moveKindBadge">Rest</span>' : "";
      o.innerHTML = '<div><div class="moveItemName">' + a.name + s + '</div><div class="moveMeta">' + a.group + r + '</div></div><div style="display:flex;gap:6.4px"><button class="hideBtn">' + (a.hidden ? "Show" : "Hide") + '</button><button class="removeBtn" type="button" aria-label="Hold to remove ' + F(a.name) + '"><span class="removeFill"></span><span class="removeLabel">Remove</span></button></div>', o.querySelector(".hideBtn").addEventListener("click", () => {
        a.hidden = !a.hidden, Y();
      });
      const u = o.querySelector(".removeBtn");
      It(u, u.querySelector(".removeFill"), 1500, () => {
        const p = e.indexOf(a);
        p > -1 && e.splice(p, 1), Y(), q("Removed " + a.name);
      }), n.appendChild(o);
    });
  }
  function ji() {
    var o, l, r, s;
    const e = y[S], t = (o = i("warmupList")) == null ? void 0 : o.closest("section"), n = (l = i("cooldownList")) == null ? void 0 : l.closest("section"), a = (s = (r = i("strengthList")) == null ? void 0 : r.closest("section")) == null ? void 0 : s.querySelector(".sectionTitle");
    e != null && e.customSequence ? (t && (t.hidden = !0), n && (n.hidden = !0), a && (a.textContent = "Move sequence")) : (t && (t.hidden = !1), n && (n.hidden = !1), a && (a.textContent = "Kettlebell work")), Yt(ke, "warmupList"), Yt(N, "strengthList"), Yt(we, "cooldownList");
  }
  function Kt() {
    N.length > 0;
    const e = i("addMovementBtn"), t = i("addRestBtn");
    e && (e.textContent = "Add movement"), t && (t.textContent = "Add rest");
  }
  function Pe() {
    const e = i("useGlobalTiming").checked, t = i("addMovementDuration"), n = i("addMovementUnit");
    t.disabled = e, n.disabled = e, t.parentElement.style.opacity = e ? ".38" : "1", i("globalTimingValue").textContent = "Use global timing · " + U(w.value);
    const a = i("useGlobalRestTiming").checked, o = i("addRestDuration"), l = i("addRestUnit");
    o.disabled = a, l.disabled = a, o.parentElement.style.opacity = a ? ".38" : "1", i("globalRestTimingValue").textContent = "Use global timing · " + U(C.value);
  }
  let _n = "movement";
  function Jt(e) {
    _n = e;
    const t = i("movementFields"), n = i("restFields");
    t.hidden = e !== "movement", n.hidden = e !== "rest", i("movementCreatorHeading").textContent = e === "rest" ? "Add rest" : "Add movement", i("movementCreator").setAttribute("aria-label", e === "rest" ? "Create rest" : "Create movement"), Pe();
  }
  function Qt() {
    y[S];
    const e = A ? !0 : i("useGlobalTiming").checked, t = e ? Number(w.value) : Dn(
      i("addMovementDuration").value,
      i("addMovementUnit").value
    ), n = A ? !0 : i("useGlobalRestTiming").checked, a = n ? Number(C.value) : Dn(
      i("addRestDuration").value,
      i("addRestUnit").value
    );
    if (_n === "rest") {
      const o = i("addRestTitle").value.trim() || "Rest", l = i("addRestGroup").value.trim() || "Rest";
      N.push({
        id: "rest-" + Date.now(),
        name: o,
        group: l,
        kind: "rest",
        hidden: !1,
        useGlobalTiming: n,
        duration: Math.max(5, a || Number(C.value))
      }), Y(), i("movementCreator").hidden = !0, i("addRestTitle").value = "Rest", i("addRestGroup").value = "Rest", q("Rest added"), A && (Ae("movements"), pe());
    } else {
      const o = i("addMovementInput").value.trim();
      if (!o) return;
      const l = i("addMovementGroup").value.trim() || "Movement";
      N.push({
        id: "movement-" + Date.now(),
        name: o,
        group: l,
        kind: "work",
        hidden: !1,
        useGlobalTiming: e,
        duration: Math.max(5, t || Number(w.value))
      }), i("addMovementInput").value = "", i("addMovementGroup").value = "", Y(), i("movementCreator").hidden = !0, q("Movement added"), A && (Ae("movements"), pe());
    }
    Kt();
  }
  let zn = null;
  function q(e) {
    const t = i("toast");
    t.textContent = e, t.classList.add("show"), clearTimeout(zn), zn = setTimeout(() => t.classList.remove("show"), 2200);
  }
  const Zi = ["Terrible", "Poor", "Meh", "Okay", "Good", "Great"], Vi = ["#6E63A8", "#5878A8", "#6F8B8A", "#5F9B72", "#D5A53E", "#D56B54"];
  function On(e) {
    return Math.max(0, Math.min(5, Math.floor(Number(e) / 100 * 6)));
  }
  function Ie(e, t) {
    return Zi[On(t)];
  }
  function Ui(e) {
    return Vi[On(e)];
  }
  function W(e) {
    return e.getFullYear() + "-" + String(e.getMonth() + 1).padStart(2, "0") + "-" + String(e.getDate()).padStart(2, "0");
  }
  function ie() {
    return { morning: L().morningTime || "08:00", evening: L().eveningTime || "19:00" };
  }
  function De(e) {
    const [t, n] = String(e).split(":").map(Number);
    return (t || 0) * 60 + (n || 0);
  }
  function Yi(e) {
    const t = ie();
    return e.getHours() * 60 + e.getMinutes() >= De(t.evening) ? "evening" : "morning";
  }
  function kt(e, t) {
    return b.checkins.find((n) => n.date === e && n.slot === t);
  }
  function wt(e) {
    return !!(e && e.mood != null && e.energy != null);
  }
  function St() {
    const e = /* @__PURE__ */ new Date(), t = W(e), n = Yi(e), a = ie(), o = e.getHours() * 60 + e.getMinutes();
    return n === "morning" && o < De(a.morning) || wt(kt(t, n)) ? null : n;
  }
  const ge = i("checkinModal"), me = i("checkinTab"), Ki = i("checkinBadge"), he = { mood: { input: i("moodInput"), fill: i("moodFill") }, energy: { input: i("energyLevelInput"), fill: i("energyLevelFill") } };
  function qn(e) {
    const { input: t, fill: n } = he[e];
    n.style.width = t.value + "%", t.setAttribute("aria-valuetext", Ie(e, t.value));
  }
  Object.keys(he).forEach((e) => he[e].input.addEventListener("input", () => qn(e)));
  let ee = null;
  function Wn() {
    const e = ie(), t = /* @__PURE__ */ new Date(), n = t.getHours() * 60 + t.getMinutes();
    return n < De(e.morning) ? "Next check-in at " + e.morning : n < De(e.evening) ? "Next check-in at " + e.evening : "Next check-in tomorrow at " + e.morning;
  }
  function Ji() {
    const e = ie(), t = /* @__PURE__ */ new Date(), n = t.getHours() * 60 + t.getMinutes(), a = (o, l) => {
      const [r, s] = o.split(":").map(Number);
      return new Date(t.getFullYear(), t.getMonth(), t.getDate() + (l ? 1 : 0), r, s);
    };
    return n < De(e.morning) ? { date: a(e.morning), time: e.morning } : n < De(e.evening) ? { date: a(e.evening), time: e.evening } : { date: a(e.morning, !0), time: e.morning };
  }
  let $t = null, Xt = null;
  function Gn() {
    if (St()) {
      Ct(), Te();
      return;
    }
    const e = Ji(), t = Math.max(0, Math.round((e.date - Date.now()) / 1e3)), n = Math.floor(t / 3600), a = Math.floor(t % 3600 / 60), o = t % 60;
    i("peekCountdown").textContent = n + ":" + String(a).padStart(2, "0") + ":" + String(o).padStart(2, "0"), i("peekAt").textContent = "Available at " + e.time;
  }
  function Qi() {
    Gn(), me.classList.add("peek"), clearInterval(Xt), Xt = setInterval(Gn, 1e3), clearTimeout($t), $t = setTimeout(Ct, 6e3);
  }
  function Ct() {
    me.classList.remove("peek"), clearInterval(Xt), clearTimeout($t);
  }
  function jn() {
    const e = St();
    if (!e) {
      me.classList.contains("peek") ? Ct() : Qi();
      return;
    }
    ee = { date: W(/* @__PURE__ */ new Date()), slot: e };
    const n = kt(ee.date, e), a = b.checkins.find((l) => wt(l));
    Object.keys(he).forEach((l) => {
      he[l].input.value = (n == null ? void 0 : n[l]) ?? (a == null ? void 0 : a[l]) ?? 50, qn(l);
    });
    const o = ie()[e];
    i("checkinEyebrow").textContent = (e === "morning" ? "Morning" : "Evening") + " · " + o, i("checkinTitle").textContent = e === "morning" ? "Morning check-in" : "Evening check-in", ge.classList.add("open"), ge.setAttribute("aria-hidden", "false"), requestAnimationFrame(() => he.mood.input.focus());
  }
  function tt() {
    ge.classList.remove("open"), ge.setAttribute("aria-hidden", "true"), ee && (nt = ee.date + "-" + ee.slot);
    try {
      localStorage.setItem("move-assistant-dismissed", nt);
    } catch {
    }
    ee = null, Te();
  }
  function $i() {
    if (!ee) return;
    if (wt(kt(ee.date, ee.slot))) {
      tt();
      return;
    }
    const { date: e, slot: t } = ee;
    let n = kt(e, t);
    n || (n = { date: e, slot: t }, b.checkins.unshift(n), b.checkins = b.checkins.slice(0, 2e3)), n.mood = Number(he.mood.input.value), n.energy = Number(he.energy.input.value), n.scale = 100, n.at = (/* @__PURE__ */ new Date()).toISOString(), Se(), g.fire("checkin", { slot: t, mood: n.mood, energy: n.energy, mood_label: Ie("mood", n.mood), energy_label: Ie("energy", n.energy) }), q((t === "morning" ? "Morning" : "Evening") + " check-in saved"), tt(), Tt(), it(), Be(), de();
  }
  let nt = "";
  try {
    nt = localStorage.getItem("move-assistant-dismissed") || "";
  } catch {
  }
  function Te() {
    const e = St();
    Ki.hidden = !e, me.hidden = !e, e || Ct(), me.classList.toggle("due", !!e), me.setAttribute("aria-label", e ? (e === "morning" ? "Morning" : "Evening") + " check-in is due" : Wn()), me.title = e ? "Check in now" : Wn();
  }
  function en() {
    Te();
    const e = St();
    !e || ge.classList.contains("open") || L().checkinAutoOpen !== !1 && (!Fe.home.classList.contains("active") || j.classList.contains("open") || nt !== W(/* @__PURE__ */ new Date()) + "-" + e && jn());
  }
  me.addEventListener("click", jn), i("checkinLater").addEventListener("click", tt), i("checkinSave").addEventListener("click", $i), ge.addEventListener("click", (e) => {
    e.target === ge && tt();
  }), ge.addEventListener("keydown", (e) => {
    e.key === "Escape" && (e.preventDefault(), tt());
  }), setInterval(en, 3e4);
  function Tt() {
    const e = W(/* @__PURE__ */ new Date()), t = (n) => b.checkins.find((a) => a.date === e && a[n] != null);
    [["mood", "moodMeta"], ["energy", "energyLevelMeta"]].forEach(([n, a]) => {
      const o = t(n);
      i(a).textContent = o ? Ie(n, o[n]) : "—";
    });
  }
  function it() {
    const e = i("feelCard");
    if (!e) return;
    const t = /* @__PURE__ */ new Date(), n = new Date(t.getFullYear(), t.getMonth(), t.getDate() - (t.getDay() + 6) % 7), a = [...Array(7)].map((p, m) => {
      const d = new Date(n.getFullYear(), n.getMonth(), n.getDate() + m), k = W(d), R = b.checkins.filter((D) => D.date === k), I = (D) => {
        const _ = R.map((K) => K[D]).filter((K) => K != null);
        return _.length ? _.reduce((K, v) => K + v, 0) / _.length : null;
      };
      return { d, key: k, mood: I("mood"), energy: I("energy"), count: R.filter(wt).length, future: d > t && k !== W(t) };
    }), o = (p) => {
      const m = a.map((d) => d[p]).filter((d) => d != null);
      return m.length ? m.reduce((d, k) => d + k, 0) / m.length : null;
    }, l = o("mood"), r = o("energy"), s = (p, m) => '<div class="feelMeter"><div class="feelMeterTop"><span>' + p + "</span><span>" + (m == null ? "—" : F(Ie("", m))) + '</span></div><div class="feelTrack"><span style="width:' + (m == null ? 0 : Math.max(4, m)) + "%;background:" + (m == null ? "transparent" : Ui(m)) + '"></span></div></div>', u = a.filter((p) => p.mood != null && p.energy != null).sort((p, m) => m.mood + m.energy - (p.mood + p.energy))[0];
    e.innerHTML = '<div class="feelTop"><div class="feelSummary"><div class="feelHeadline">' + (l == null ? "No check-ins yet" : F(Ie("", (l + r) / 2))) + '</div><div class="weekCopy">' + (l == null ? "Your first check-in will appear here." : "on average this week" + (u ? " · best day " + F(new Intl.DateTimeFormat(void 0, { weekday: "long" }).format(u.d)) : "")) + '</div></div></div><div class="feelDays">' + a.map(
      (p) => '<div class="weekChip feelDay' + (p.future ? " future" : "") + (p.key === W(t) ? " today" : "") + '"><div class="weekChipTop"><strong>' + F(new Intl.DateTimeFormat(void 0, { weekday: "short" }).format(p.d)) + "</strong>" + (p.count >= 2 ? '<span class="weekTick">✓</span>' : '<span class="feelDots">' + "●".repeat(p.count) + "</span>") + "</div>" + s("Mood", p.mood) + s("Energy", p.energy) + "</div>"
    ).join("") + "</div>";
  }
  const Lt = i("upcomingCountSetting");
  Lt.addEventListener("change", () => {
    Ne = Lt.value === "all" ? "all" : Number(Lt.value), ai();
  });
  const at = i("tempoRevealBtn"), tn = i("tempoExperiment"), te = i("tempoQuad"), He = i("tempoDot"), Xi = i("tempoEstimate"), ea = i("tempoReadout");
  let _e = { x: 0.5, y: 0.5 }, ot = !1, Mt = { total: 20, work: 45, rest: 15 };
  function nn(e, t, n, a) {
    const o = Math.max(t, Math.min(n, e));
    return Math.round((o - t) / a) * a + t;
  }
  function ta(e, t) {
    const n = (e - 0.5) * 2, a = (t - 0.5) * 2, o = nn(
      Mt.total + n * 5 + a * 8,
      Number(T.min),
      Number(T.max),
      Number(T.step)
    ), l = nn(
      Mt.work + n * 10 + a * 8,
      Number(w.min),
      Number(w.max),
      Number(w.step)
    ), r = nn(
      Mt.rest + n * 6 + a * 6,
      Number(C.min),
      Number(C.max),
      Number(C.step)
    );
    return T.value = o, w.value = l, C.value = r, Rn.textContent = o + " min", Bn.textContent = l + " sec", An.textContent = r + " sec", yt(), { total: o, work: l, rest: r };
  }
  function an(e, t) {
    const n = e < 0.34 ? "Low" : e > 0.66 ? "Hard" : "Medium", a = t < 0.34 ? "Fast" : t > 0.66 ? "Slow" : "Balanced", o = ta(e, t);
    ea.textContent = n + " + " + a, Xi.textContent = o.total + " min", te.setAttribute("aria-valuetext", n + " and " + a + ", estimated " + o.total + " minutes");
  }
  function on(e) {
    const t = te.getBoundingClientRect(), n = Math.max(0, Math.min(1, (e.clientX - t.left) / t.width)), a = Math.max(0, Math.min(1, (e.clientY - t.top) / t.height));
    _e = { x: n, y: a }, He.style.left = n * 100 + "%", He.style.top = a * 100 + "%", an(n, a);
  }
  at.addEventListener("click", () => {
    const e = tn.hidden;
    tn.hidden = !e, at.setAttribute("aria-expanded", e ? "true" : "false"), at.textContent = e ? "Now close this" : "Don’t try this!", e && (Mt = {
      total: Number(T.value),
      work: Number(w.value),
      rest: Number(C.value)
    }, _e = { x: 0.5, y: 0.5 }, He.style.left = "50%", He.style.top = "50%", an(_e.x, _e.y));
  }), h.querySelectorAll("[data-feedback-rating]").forEach((e) => e.addEventListener("click", () => {
    Number(e.dataset.feedbackRating), h.querySelectorAll("[data-feedback-rating]").forEach((t) => t.classList.toggle("selected", t === e));
  }));
  const Et = i("testingFeedbackForm"), Zn = i("testingFeedbackThanks"), na = i("testingFeedbackAgain");
  Et.addEventListener("submit", (e) => {
    e.preventDefault(), Et.hidden = !0, Zn.hidden = !1, q("Feedback captured for prototype");
  }), na.addEventListener("click", (e) => {
    e.preventDefault(), Et.reset(), h.querySelectorAll("[data-feedback-rating]").forEach((t) => t.classList.remove("selected")), Zn.hidden = !0, Et.hidden = !1;
  }), te.addEventListener("pointerdown", (e) => {
    var t;
    ot = !0, on(e);
    try {
      (t = te.setPointerCapture) == null || t.call(te, e.pointerId);
    } catch {
    }
  }), te.addEventListener("pointermove", (e) => {
    ot && on(e);
  }), te.addEventListener("pointerup", (e) => {
    ot && (ot = !1, on(e), Y());
  }), te.addEventListener("pointercancel", () => ot = !1), te.addEventListener("keydown", (e) => {
    let { x: t, y: n } = _e, a = !0;
    e.key === "ArrowLeft" ? t -= 0.05 : e.key === "ArrowRight" ? t += 0.05 : e.key === "ArrowUp" ? n -= 0.05 : e.key === "ArrowDown" ? n += 0.05 : a = !1, a && (e.preventDefault(), t = Math.max(0, Math.min(1, t)), n = Math.max(0, Math.min(1, n)), _e = { x: t, y: n }, He.style.left = t * 100 + "%", He.style.top = n * 100 + "%", an(t, n), Y());
  });
  const j = i("workoutModal");
  let rt = null;
  function ze(e) {
    return e.map((t) => ({ ...t }));
  }
  function ia() {
    const e = y[S];
    return {
      key: S,
      profile: e ? JSON.parse(JSON.stringify(e)) : null,
      warmup: ze(ke),
      strength: ze(N),
      cooldown: ze(we),
      total: Number(T.value),
      work: Number(w.value),
      rest: Number(C.value),
      rounds: Number(ye.value) || 1
    };
  }
  function Vn(e = !1) {
    A = !!e, rt = ia(), i("moveEditorTitle").textContent = A ? "Create new move" : "Edit move", i("moveEditorSubtitle").textContent = A ? "Build the sequence first, then set timing, then finish the move." : "Adjust timing and choose which movements are included today.", i("deleteMoveOpen").hidden = A;
    const t = i("createMoveOptions");
    if (t.hidden = !A, A) {
      i("useGlobalTiming").checked = !0, i("useGlobalRestTiming").checked = !0;
      const n = y[S];
      i("includeWarmupPreset").checked = !!(n != null && n.includeWarmup), i("includeCooldownPreset").checked = !!(n != null && n.includeCooldown), Ut((n == null ? void 0 : n.preset) || "movement", !1);
    }
    i("movementCreator").hidden = !0, Jt("movement"), Kt(), Pe(), tn.hidden = !0, at.setAttribute("aria-expanded", "false"), at.textContent = "Don’t try this!", j.classList.toggle("createMode", A), j.querySelector(".modal").classList.toggle("createMode", A), j.classList.add("open"), j.setAttribute("aria-hidden", "false"), A && Bi();
  }
  function Rt() {
    j.classList.contains("createMode") && Ai(), j.classList.remove("createMode"), j.querySelector(".modal").classList.remove("createMode"), j.classList.remove("open"), j.setAttribute("aria-hidden", "true");
  }
  function Un() {
    if (!rt) return;
    const e = rt;
    e.profile && (y[e.key] = JSON.parse(JSON.stringify(e.profile))), S = e.key, ke = ze(e.warmup), N = ze(e.strength), we = ze(e.cooldown), T.value = e.total, w.value = e.work, C.value = e.rest, ye.value = e.rounds || 1;
    const t = y[S];
    if (t) {
      h.querySelectorAll(".workoutPanel[data-workout]").forEach((a) => a.classList.toggle("active", a.dataset.workout === S));
      const n = h.querySelector(".workoutPanel.active");
      if (n) {
        const a = n.querySelector(".workoutName");
        a && (a.textContent = t.name);
        const o = n.querySelector(".panelCollapsedText");
        o && (o.textContent = t.name);
        const l = n.querySelector(".sourceTag");
        l && (l.textContent = t.source);
      }
      x.value = t.name;
    }
    Y();
  }
  i("cancelWorkoutEdit").addEventListener("click", () => {
    if (A) {
      const e = S;
      delete y[e], A = !1, Ce = null, X(b.order.find((t) => y[t]) || Object.keys(y)[0]);
    } else
      Un();
    Rt();
  }), i("saveWorkoutEdit").addEventListener("click", () => {
    const e = y[S], t = x.value.trim() || "New move";
    if (e && (e.name = t), Y(), A && e)
      Zt(S, e), h.querySelectorAll(".workoutPanel[data-workout]").forEach((n) => n.classList.toggle("active", n.dataset.workout === S)), A = !1, Ce = null, b.order.includes(S) || b.order.push(S), q("Move created");
    else {
      const n = h.querySelector(".workoutPanel.active");
      if (n) {
        const a = n.querySelector(".workoutName");
        a && (a.textContent = t);
        const o = n.querySelector(".panelCollapsedText");
        o && (o.textContent = t);
      }
      q("Move saved");
    }
    rt = null, Rt(), Se();
  }), j.addEventListener("click", (e) => {
    if (e.target === j) {
      if (A) {
        const t = S;
        delete y[t], A = !1, Ce = null, X(b.order.find((n) => y[n]) || Object.keys(y)[0]);
      } else
        Un();
      Rt();
    }
  }), i("addMovementBtn").addEventListener("click", () => {
    const e = i("movementCreator");
    e.hidden = !1, Jt("movement"), Pe(), i("addMovementInput").focus();
  }), i("addRestBtn").addEventListener("click", () => {
    const e = i("movementCreator");
    e.hidden = !1, Jt("rest"), i("addRestTitle").focus();
  }), i("closeMovementCreator").addEventListener("click", () => {
    i("movementCreator").hidden = !0;
  }), i("useGlobalTiming").addEventListener("change", Pe), i("useGlobalRestTiming").addEventListener("change", Pe), h.querySelectorAll(".createPresetBtn").forEach((e) => e.addEventListener("click", () => {
    Ut(e.dataset.movePreset, !0), Y();
  })), i("includeWarmupPreset").addEventListener("change", Hn), i("includeCooldownPreset").addEventListener("change", Hn), i("includeWarmupPreset").addEventListener("change", pe), i("includeCooldownPreset").addEventListener("change", pe), x.addEventListener("input", pe), i("confirmAddMovement").addEventListener("click", Qt), i("confirmAddRest").addEventListener("click", Qt), i("addMovementInput").addEventListener("keydown", (e) => {
    e.key === "Enter" && Qt();
  });
  const st = i("countdown"), rn = i("countNum"), ae = i("countdownPixelCanvas");
  let lt = null, sn = "appear";
  class aa {
    constructor(t, n, a, o, l, r, s) {
      this.width = t.width, this.height = t.height, this.ctx = n, this.x = a, this.y = o, this.color = l, this.speed = (Math.random() * 0.8 + 0.1) * r, this.size = 0, this.sizeStep = Math.random() * 0.4, this.minSize = 0.5, this.maxSizeInteger = 2, this.maxSize = Math.random() * (this.maxSizeInteger - this.minSize) + this.minSize, this.delay = s, this.counter = 0, this.counterStep = Math.random() * 4 + (this.width + this.height) * 0.01, this.isIdle = !1, this.isReverse = !1, this.isShimmer = !1;
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
  let ln = [], Yn = 1, Kn = 1;
  function Le() {
    const e = parseFloat(getComputedStyle(i("app")).zoom);
    return Number.isFinite(e) && e > 0 ? e : 1;
  }
  function oa() {
    var p;
    if (!ae) return;
    const e = Le(), t = Math.max(1, window.innerWidth / e), n = Math.max(1, window.innerHeight / e);
    Yn = t, Kn = n;
    const a = Math.min(window.devicePixelRatio || 1, 2);
    ae.width = Math.floor(t * a), ae.height = Math.floor(n * a), ae.style.width = t + "px", ae.style.height = n + "px";
    const o = ae.getContext("2d");
    o.setTransform(a, 0, 0, a, 0, 0);
    const l = ["#f2fbff", "#d4effc", "#a9e0fa", "#6cc8f6"], r = 12, s = (p = window.matchMedia) == null ? void 0 : p.call(window, "(prefers-reduced-motion: reduce)").matches, u = s ? 0 : 0.055;
    ln = [];
    for (let m = 0; m < t; m += r)
      for (let d = 0; d < n; d += r) {
        const k = m - t / 2, R = d - n / 2, I = Math.sqrt(k * k + R * R), D = s ? 0 : Math.random() * 75 + I * 0.05, _ = new aa({ width: t, height: n }, o, m, d, l[Math.floor(Math.random() * l.length)], u, D);
        _.maxSizeInteger = 4, _.maxSize = Math.random() * 3.2 + 0.8, _.sizeStep = 0.35 + Math.random() * 0.45, ln.push(_);
      }
  }
  function Jn(e) {
    cancelAnimationFrame(lt), sn = e;
    const t = ae == null ? void 0 : ae.getContext("2d");
    if (!t) return;
    function n() {
      t.clearRect(0, 0, Yn, Kn);
      let a = !0;
      ln.forEach((o) => {
        o[sn](), o.isIdle || (a = !1);
      }), sn === "disappear" && a || (lt = requestAnimationFrame(n));
    }
    lt = requestAnimationFrame(n);
  }
  function Bt() {
    cancelAnimationFrame(lt), oa(), Jn("appear"), setTimeout(() => Jn("disappear"), 560);
  }
  window.addEventListener("resize", () => {
    st.classList.contains("active") && Bt();
  });
  const dt = i("pixelTrailCanvas"), Oe = dt.getContext("2d");
  let oe = !0, qe = 0.7, We = 600, ct = [], Ge = null, fe = { x: 0, y: 0, ready: !1 };
  function Qn() {
    const e = E.getBoundingClientRect(), t = Le(), n = Math.min(window.devicePixelRatio || 1, 2), a = Math.max(1, e.width / t), o = Math.max(1, e.height / t);
    dt.width = Math.max(1, Math.floor(a * n)), dt.height = Math.max(1, Math.floor(o * n)), dt.style.width = a + "px", dt.style.height = o + "px", Oe.setTransform(n, 0, 0, n, 0, 0);
  }
  function ra(e, t) {
    if (!oe) return;
    const n = performance.now();
    fe.ready || (fe = { x: e, y: t, ready: !0 });
    const a = 7;
    for (let o = 1; o <= a; o++) {
      const l = o / a;
      ct.push({
        x: fe.x + (e - fe.x) * l,
        y: fe.y + (t - fe.y) * l,
        born: n - (a - o) * 10
      });
    }
    fe = { x: e, y: t, ready: !0 };
  }
  function At(e) {
    if (Ge = null, !B) return;
    if (!Fe.workout.classList.contains("active")) {
      Ge = requestAnimationFrame(At);
      return;
    }
    const t = E.getBoundingClientRect(), n = Le();
    Oe.clearRect(0, 0, t.width / n, t.height / n), oe && (ct = ct.filter((o) => e - o.born < We), Oe.fillStyle = i("app").classList.contains("light") ? "#03A9F4" : "#f4f4f4", ct.forEach((o) => {
      const l = (e - o.born) / We, r = (1 - l) * qe, s = Math.round(o.x / 14) * 14, u = Math.round(o.y / 14) * 14;
      Oe.globalAlpha = Math.max(0, r);
      const p = 2 + 5 * (1 - l) * qe;
      Oe.fillRect(s - p / 2, u - p / 2, p, p);
    }), Oe.globalAlpha = 1), Ge = requestAnimationFrame(At);
  }
  E.addEventListener("pointermove", (e) => {
    const t = E.getBoundingClientRect(), n = Le();
    ra((e.clientX - t.left) / n, (e.clientY - t.top) / n);
  }), E.addEventListener("pointerleave", () => fe.ready = !1), new ResizeObserver(Qn).observe(E), Qn(), Ge = requestAnimationFrame(At);
  const ve = i("movementRippleCanvas"), je = ve.getContext("2d");
  let Me = !0, Ze = null, sa = performance.now();
  function $n() {
    const e = ve.parentElement.getBoundingClientRect(), t = Le(), n = Math.max(1, e.width / t), a = Math.max(1, e.height / t), o = Math.min(window.devicePixelRatio || 1, 2);
    ve.width = Math.max(1, Math.floor(n * o)), ve.height = Math.max(1, Math.floor(a * o)), ve.style.width = n + "px", ve.style.height = a + "px", je.setTransform(o, 0, 0, o, 0, 0);
  }
  function Xn() {
    var e;
    return G || ((e = c[f]) == null ? void 0 : e.kind) === "rest";
  }
  function la() {
    const e = c[f];
    return Xn() ? 2200 : e ? e.kind === "warmup" || e.kind === "cooldown" ? 2400 : 1350 : 1600;
  }
  function Ft(e) {
    if (Ze = null, !B) return;
    if (!Fe.workout.classList.contains("active")) {
      Ze = requestAnimationFrame(Ft);
      return;
    }
    const t = ve.parentElement.getBoundingClientRect(), n = Le(), a = Math.max(1, t.width / n), o = Math.max(1, t.height / n);
    if (je.clearRect(0, 0, a, o), Me) {
      const l = la(), r = (e - sa) % l / l, s = 15, u = Math.max(8, Math.round(s * o / Math.max(1, a))), p = a / (s + 1), m = o / (u + 1), d = a * 0.5, k = o * 0.52, R = Math.hypot(d, k), D = i("app").classList.contains("light") ? "34,34,34" : "244,244,244";
      for (let _ = 1; _ <= u; _++)
        for (let K = 1; K <= s; K++) {
          const v = K * p, M = _ * m, z = Math.hypot(v - d, M - k) / R, J = Xn(), _t = J ? Math.exp(-Math.pow((z - (r * 0.82 + 0.08) % 1 * 1.18) * 5.5, 2)) : 0, H = Math.exp(-Math.pow((z - r * 1.25) * 7, 2)), V = J ? _t : H, xe = J ? 0.5 + 0.5 * Math.sin(r * Math.PI * 2 - z * 3) ** 2 : 0.35 + 0.65 * Math.sin(r * Math.PI * 2 - z * 5) ** 2, ce = J ? 1.4 + V * 4.2 * xe : 1.2 + V * 5 * xe;
          je.beginPath(), je.arc(v, M, ce, 0, Math.PI * 2), je.fillStyle = `rgba(${D},${J ? 0.08 + V * 0.48 : 0.05 + V * 0.55})`, je.fill();
        }
    }
    Ze = requestAnimationFrame(Ft);
  }
  new ResizeObserver($n).observe(ve.parentElement), $n(), Ze = requestAnimationFrame(Ft);
  const pt = i("exerciseTitle"), re = i("exerciseMeta"), dn = i("stepLabel"), ei = i("digits"), ti = i("fill"), Ve = i("progress"), be = i("pause"), da = i("nextName"), ca = i("nextMeta"), pa = i("nextIcon"), Nt = i("skipNextSession");
  let Z = null;
  function se(e) {
    for (let t = Math.max(0, e); t < c.length; t++)
      if (!c[t].sessionHidden) return t;
    return -1;
  }
  function ua() {
    const e = c[f];
    if (!e) return { name: "Complete", meta: "Move finished", icon: "✓" };
    if (G) {
      const a = se(f + 1), o = a >= 0 ? c[a] : null;
      return o ? { name: o.name, meta: o.group + " · " + o.duration + " sec", icon: o.kind === "cooldown" ? "↘" : o.kind === "warmup" ? "↗" : "●" } : { name: "Complete", meta: "Move finished", icon: "✓" };
    }
    if (e.rest > 0) return { name: "Rest", meta: e.rest + " sec · " + (e.roundBreakAfter ? "round " + (e.round + 1) + " next" : "recovery"), icon: "Ⅱ" };
    const t = se(f + 1), n = t >= 0 ? c[t] : null;
    return n ? { name: n.name, meta: n.group + " · " + n.duration + " sec", icon: n.kind === "cooldown" ? "↘" : n.kind === "warmup" ? "↗" : "●" } : { name: "Complete", meta: "Move finished", icon: "✓" };
  }
  function ga() {
    if (!c[f]) return c.length;
    const t = se(f + 1);
    return t < 0 ? c.length : t + 1;
  }
  function ma(e) {
    return e.kind === "cooldown" ? "↘" : e.kind === "warmup" ? "↗" : "●";
  }
  function Pt() {
    return c.length && c[c.length - 1].round || 1;
  }
  function ni(e) {
    const t = c[e];
    if (!t) return "";
    const n = Pt();
    if (n <= 1) return "Step " + (e + 1) + " of " + c.length;
    if (t.roundBreak) return "Round " + t.round + " of " + n + " · Rest";
    const a = c.filter((o) => o.round === t.round && !o.roundBreak).length;
    return "Round " + t.round + " of " + n + " · Step " + (t.roundIndex + 1) + " of " + a;
  }
  function ii() {
    return Ve.querySelector('[data-step="' + f + '"]');
  }
  function ha() {
    c[f] && Number(Ve.dataset.round) !== (c[f].round || 1) && un(), [...Ve.children].forEach((e) => {
      const t = Number(e.dataset.step);
      e.classList.toggle("done", t < f), e.classList.toggle("active", t === f), e.classList.toggle("rewindable", t <= f), e.disabled = t > f, t === f && e.style.setProperty("--segment-progress", "0%");
    }), c[f] && (dn.textContent = ni(f), Ke());
  }
  function fa(e) {
    const t = c.indexOf(e);
    t < 0 || t <= f || (e.sessionHidden = !e.sessionHidden, Ue(), q((e.sessionHidden ? "Hidden " : "Included ") + e.name + " for this session"));
  }
  function ai() {
    const e = i("upcomingList");
    if (!e) return;
    e.innerHTML = "";
    const t = ga(), n = c.slice(t);
    (Ne === "all" ? n : n.slice(0, Math.max(1, Number(Ne) || 1))).forEach((o) => {
      const l = document.createElement("section");
      l.className = "upcomingCard" + (o.sessionHidden ? " sessionHidden" : ""), l.innerHTML = '<div class="upcomingInfo"><div class="upcomingIcon" aria-hidden="true">' + ma(o) + '</div><div><div class="upcomingName">' + F(o.name) + '</div><div class="upcomingMeta">' + F(o.group) + " · " + o.duration + " sec" + (Pt() > 1 ? " · round " + o.round : "") + '</div></div></div><button class="skipSessionBtn" type="button">' + (o.sessionHidden ? "Include this session" : "Skip this session") + "</button>", l.querySelector(".skipSessionBtn").addEventListener("click", () => fa(o)), e.appendChild(l);
    });
  }
  function Ue() {
    const e = ua();
    if (da.textContent = e.name, ca.textContent = e.meta, pa.textContent = e.icon, Z = null, G) {
      const t = se(f + 1);
      t >= 0 && (Z = c[t]);
    } else {
      const t = c[f];
      if (t && t.rest > 0)
        Z = null;
      else {
        const n = se(f + 1);
        n >= 0 && (Z = c[n]);
      }
    }
    Nt && (Nt.hidden = !Z, Nt.textContent = Z != null && Z.sessionHidden ? "Include this session" : "Skip this session"), ai();
  }
  Nt.addEventListener("click", () => {
    Z && (Z.sessionHidden = !Z.sessionHidden, q((Z.sessionHidden ? "Hidden " : "Included ") + Z.name + " for this session"), Ue());
  });
  let ne = null, cn = null;
  function ut(e, t = {}) {
    const n = y[S];
    g.fire(e, { move: (n == null ? void 0 : n.name) || "", move_id: S, ...t });
  }
  function va() {
    const e = y[S];
    ne = { key: S, name: (e == null ? void 0 : e.name) || "Move", startedAt: Date.now(), active: 0 }, clearInterval(cn), cn = setInterval(() => {
      ne && !O && ne.active++;
    }, 1e3), ut("started", { steps: c.length });
  }
  function oi(e) {
    if (clearInterval(cn), !ne) return;
    const t = ne;
    ne = null, ut(e ? "completed" : "ended", { seconds: t.active }), !(t.active < 30) && (b.history.unshift({ id: "h-" + t.startedAt, move_id: t.key, name: t.name, start: new Date(t.startedAt).toISOString(), seconds: t.active, completed: e }), b.history = b.history.slice(0, 1e3), Se(), Be(), de());
  }
  function ba() {
    qt("workout"), xa();
  }
  function pn() {
    oi(!1), clearInterval(P), clearInterval(bt), G = !1, O = !1, be.textContent = "Pause", i("app").classList.remove("resting", "paused"), st.classList.remove("active"), qt("home");
  }
  function xa() {
    st.classList.add("active");
    let e = 5;
    rn.textContent = e, requestAnimationFrame(Bt), clearInterval(bt), bt = setInterval(() => {
      e--, e > 0 ? (rn.textContent = e, Bt()) : (clearInterval(bt), rn.textContent = "GO", Bt(), setTimeout(() => {
        st.classList.remove("active"), cancelAnimationFrame(lt), ka();
      }, 650));
    }, 1e3);
  }
  function un() {
    var t;
    Ve.innerHTML = "";
    const e = ((t = c[Math.max(0, f)] || c[0]) == null ? void 0 : t.round) || 1;
    Ve.dataset.round = e, c.forEach((n, a) => {
      if ((n.round || 1) !== e) return;
      const o = document.createElement("button");
      o.dataset.step = a, o.type = "button", o.className = "progressSegment", o.setAttribute("aria-label", "Go to " + n.name), o.addEventListener("click", () => {
        a <= f && ya(a);
      }), Ve.appendChild(o);
    });
  }
  function ya(e) {
    e < 0 || e >= c.length || e > f || (clearInterval(P), G = !1, i("app").classList.remove("resting"), f = e, O = !1, i("app").classList.remove("paused"), be.textContent = "Pause", Ye(), P = setInterval(Ee, 1e3));
  }
  function ka() {
    if (f = se(0), O = !1, i("app").classList.remove("paused"), be.textContent = "Pause", un(), f < 0) {
      pt.textContent = "No activities", re.textContent = "Open Edit and enable or add a movement", re.hidden = !1;
      return;
    }
    va(), Ye(), clearInterval(P), P = setInterval(Ee, 1e3);
  }
  function Ye() {
    G = !1;
    const e = c[f];
    i("app").classList.toggle("resting", e.kind === "rest"), Q = e.duration, vt = e.duration, pt.textContent = e.name, re.textContent = e.group, re.hidden = !0, dn.textContent = ni(f), ne && ut("step", { name: e.name, group: e.group, kind: e.kind, step: f + 1, of: c.length, round: e.round || 1, rounds: Pt(), duration: e.duration }), Ue(), ha();
  }
  function Ke() {
    ei.textContent = Q;
    const e = Q / vt * 100;
    ti.style.width = e + "%";
    const t = ii();
    if (t && !G) {
      const n = 100 - e;
      t.style.setProperty("--segment-progress", n + "%");
    }
  }
  function Ee() {
    if (!O && (Q--, Ke(), Q <= 0)) {
      const e = c[f];
      e.rest > 0 ? ri(e.rest) : gt();
    }
  }
  function ri(e) {
    var n;
    G = !0, i("app").classList.add("resting");
    const t = ii();
    t && t.style.setProperty("--segment-progress", "100%"), clearInterval(P), Q = e, vt = e, ne && ut("rest", { duration: e }), pt.textContent = "Rest", re.textContent = (n = c[f]) != null && n.roundBreakAfter ? "Round " + (c[f].round + 1) + " next" : "Recovery", Ue(), Ke(), P = setInterval(() => {
      O || (Q--, Ke(), Q <= 0 && (clearInterval(P), gt(), P = setInterval(Ee, 1e3)));
    }, 1e3);
  }
  function gt() {
    G = !1;
    const e = se(f + 1);
    if (e >= 0)
      f = e, Ye();
    else {
      O = !1, be.textContent = "Pause", i("app").classList.remove("resting", "paused"), clearInterval(P), pt.textContent = "Complete", re.textContent = "Move finished", re.hidden = !1, ei.textContent = "✓";
      {
        const t = Pt();
        dn.textContent = t > 1 ? t + " rounds done" : c.filter((n) => !n.roundBreak).length + " steps done";
      }
      oi(!0);
      {
        const t = mi(7).reduce((n, a) => n + a.minutes, 0);
        re.textContent = "Move finished · " + t + " min in the last 7 days";
      }
      ti.style.width = "100%", Ue();
    }
  }
  i("skipExercise").addEventListener("click", () => {
    clearInterval(P);
    const e = c[f];
    if (G) {
      G = !1, i("app").classList.remove("resting");
      const n = se(f + 1);
      n >= 0 ? (f = n, Ye(), P = setInterval(Ee, 1e3)) : gt();
      return;
    }
    if (e && e.rest > 0) {
      ri(e.rest);
      return;
    }
    const t = se(f + 1);
    t >= 0 ? (f = t, Ye(), P = setInterval(Ee, 1e3)) : gt();
  }), i("restartSegment").addEventListener("click", () => {
    if (clearInterval(P), O = !1, i("app").classList.remove("paused"), be.textContent = "Pause", G) {
      const e = c[f];
      Q = e.rest, vt = e.rest, pt.textContent = "Rest", re.textContent = "Recovery", i("app").classList.add("resting"), Ue(), Ke();
    } else
      Ye();
    P = setInterval(G ? () => {
      O || (Q--, Ke(), Q <= 0 && (clearInterval(P), gt(), P = setInterval(Ee, 1e3)));
    } : Ee, 1e3);
  });
  function It(e, t, n, a) {
    let o = 0, l = null, r = !1;
    function s() {
      l && cancelAnimationFrame(l), l = null, o = 0, r = !1, t.style.width = "0%", e.classList.remove("holding");
    }
    function u(d) {
      if (!r) return;
      o || (o = d);
      const k = Math.min(1, (d - o) / n);
      if (t.style.width = k * 100 + "%", k >= 1) {
        r = !1, l && cancelAnimationFrame(l), l = null, t.style.width = "100%", setTimeout(() => t.style.width = "0%", 90), a();
        return;
      }
      l = requestAnimationFrame(u);
    }
    function p(d) {
      var k;
      if (!(d && d.button !== void 0 && d.button !== 0)) {
        d == null || d.preventDefault(), s(), r = !0, e.classList.add("holding");
        try {
          (k = e.setPointerCapture) == null || k.call(e, d.pointerId);
        } catch {
        }
        l = requestAnimationFrame(u);
      }
    }
    function m() {
      r && s();
    }
    e.addEventListener("pointerdown", p), e.addEventListener("pointerup", m), e.addEventListener("pointercancel", m), e.addEventListener("lostpointercapture", m), e.addEventListener("keydown", (d) => {
      (d.key === " " || d.key === "Enter") && !d.repeat && p(d);
    }), e.addEventListener("keyup", (d) => {
      (d.key === " " || d.key === "Enter") && m();
    });
  }
  const wa = i("endWorkout");
  It(wa, i("holdEndFill"), 1500, pn);
  const Je = i("deleteMoveConfirm");
  i("deleteMoveOpen").addEventListener("click", () => {
    Je.classList.add("open"), Je.setAttribute("aria-hidden", "false");
  }), i("deleteMoveCancel").addEventListener("click", () => {
    Je.classList.remove("open"), Je.setAttribute("aria-hidden", "true");
  });
  function Sa() {
    const e = S, t = h.querySelector('.workoutPanel[data-workout="' + e + '"]');
    t && t.remove(), delete y[e], b.order = b.order.filter((a) => a !== e);
    let n = h.querySelector(".workoutPanel[data-workout]");
    if (!n) {
      const a = "custom-" + Date.now();
      y[a] = { name: "New move", source: "Custom routine", total: 20, work: 45, rest: 15, customSequence: !0, preset: "movement", sequence: [], strength: [] }, b.order.push(a), n = Zt(a, y[a]);
    }
    Je.classList.remove("open"), Je.setAttribute("aria-hidden", "true"), rt = null, Rt(), X(n.dataset.workout), Se(), q("Move deleted");
  }
  It(i("deleteMoveYes"), i("deleteMoveFill"), 1500, Sa);
  const gn = h.querySelector(".rubberTabs"), Qe = i("rubberIndicator");
  function mt(e, t = !0) {
    if (!e || !gn || !Qe) return;
    const n = gn.getBoundingClientRect(), a = e.getBoundingClientRect();
    Qe.style.transition = t ? "left .34s cubic-bezier(.2,1.35,.4,1),width .34s cubic-bezier(.2,1.35,.4,1),transform .18s ease" : "none";
    const o = Le();
    Qe.style.left = (a.left - n.left) / o + gn.scrollLeft + "px", Qe.style.width = a.width / o + "px", t && (Qe.style.transform = "scaleX(1.08)", setTimeout(() => Qe.style.transform = "scaleX(1)", 180));
  }
  h.querySelectorAll(".tab").forEach((e) => e.addEventListener("click", () => {
    e.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "smooth" }), h.querySelectorAll(".tab").forEach((t) => t.classList.remove("active")), h.querySelectorAll(".settingsPane").forEach((t) => t.classList.remove("active")), e.classList.add("active"), i(e.dataset.pane).classList.add("active"), mt(e, !0);
  })), requestAnimationFrame(() => mt(h.querySelector(".tab.active"), !1)), window.addEventListener("resize", () => mt(h.querySelector(".tab.active"), !1));
  const mn = i("pixelTrailToggle"), hn = i("rippleToggle"), $e = i("trailStrength"), Xe = i("trailLife");
  function $(e, t) {
    L()[e] = t, Se();
  }
  const et = { feel: !0, steps: !0, mood: !0, energyLevel: !0, ...L().toggles || {} };
  function si() {
    h.querySelectorAll("[data-toggle]").forEach((t) => t.classList.toggle("on", et[t.dataset.toggle] !== !1)), h.querySelector(".feelSection").hidden = !0, [["steps", "stepsRow"], ["mood", "moodRow"], ["energyLevel", "energyLevelRow"]].forEach(([t, n]) => {
      i(n).hidden = et[t] === !1;
    });
    const e = ["steps", "mood", "energyLevel"].some((t) => et[t] !== !1);
    h.querySelector(".activityCard").hidden = !e, i("insightCard").style.gridColumn = e ? "" : "span 12";
  }
  h.querySelectorAll("[data-toggle]").forEach((e) => e.addEventListener("click", () => {
    et[e.dataset.toggle] = et[e.dataset.toggle] === !1, si(), $("toggles", { ...et });
  })), si();
  function Ca() {
    mn.classList.toggle("on", oe), hn.classList.toggle("on", Me), $e.value = Math.round(qe * 100), i("trailStrengthValue").textContent = $e.value + "%", Xe.value = We, i("trailLifeValue").textContent = Xe.value + " ms";
  }
  L().trailEnabled !== void 0 && (oe = L().trailEnabled), L().rippleEnabled !== void 0 && (Me = L().rippleEnabled), L().trailStrength !== void 0 && (qe = L().trailStrength), L().trailMaxAge !== void 0 && (We = L().trailMaxAge), Ca(), mn.addEventListener("click", () => {
    oe = !oe, mn.classList.toggle("on", oe), oe || (ct = []), $("trailEnabled", oe);
  }), hn.addEventListener("click", () => {
    Me = !Me, hn.classList.toggle("on", Me), $("rippleEnabled", Me);
  }), $e.addEventListener("input", () => {
    qe = Number($e.value) / 100, i("trailStrengthValue").textContent = $e.value + "%";
  }), $e.addEventListener("change", () => $("trailStrength", qe)), Xe.addEventListener("input", () => {
    We = Number(Xe.value), i("trailLifeValue").textContent = Xe.value + " ms";
  }), Xe.addEventListener("change", () => $("trailMaxAge", We)), Lt.addEventListener("change", () => $("upcomingCount", Ne));
  function li(e) {
    h.querySelectorAll(".themeBtn").forEach((n) => n.classList.toggle("active", n.dataset.theme === e));
    const t = e === "light";
    i("app").classList.toggle("light", t), g.setLight(t);
  }
  li(L().theme || "dark"), h.querySelectorAll(".themeBtn").forEach((e) => e.addEventListener("click", () => {
    li(e.dataset.theme), $("theme", e.dataset.theme);
  }));
  const le = { steps: null, ...L().entities || {} };
  let Re = null, fn = {};
  function Ta(e) {
    const t = Object.values(e).filter((s) => s.entity_id.startsWith("sensor.") || s.entity_id.startsWith("input_number.")), n = (s) => s.attributes.friendly_name || s.entity_id, a = t.filter((s) => /step/i.test(s.entity_id) || /step/i.test(n(s)) || ["steps", "step"].includes(String(s.attributes.unit_of_measurement || "").toLowerCase())), o = t.filter((s) => !a.includes(s)), l = (s, u) => n(s).localeCompare(n(u)), r = (s, u) => /health_steps/.test(u.entity_id) - /health_steps/.test(s.entity_id) || l(s, u);
    return { suggested: a.sort(r), rest: o.sort(l), label: n };
  }
  function di(e) {
    const t = i("stepsEntity");
    if (!t || t.matches(":focus")) return;
    const { suggested: n, rest: a, label: o } = Ta(e), l = (u) => '<option value="' + F(u.entity_id) + '">' + F(o(u)) + "</option>";
    t.innerHTML = '<option value="">Not connected</option>' + (n.length ? '<optgroup label="Suggested">' + n.map(l).join("") + "</optgroup>" : "") + (a.length ? '<optgroup label="All sensors">' + a.map(l).join("") + "</optgroup>" : ""), t.value = le.steps || "";
    const r = i("stepsStatus"), s = le.steps && e[le.steps];
    r.textContent = s ? "Connected · " + o(s) : r.dataset.empty;
  }
  i("stepsEntity").addEventListener("change", () => {
    le.steps = i("stepsEntity").value || null, $("entities", { ...le }), fn = {}, gi(), Re && (di(Re), pi(Re));
  });
  function La(e, t = 0) {
    return new Intl.NumberFormat(void 0, { maximumFractionDigits: t }).format(e);
  }
  function ci() {
    const e = le.steps && (Re == null ? void 0 : Re[le.steps]), t = Number(e == null ? void 0 : e.state);
    return Number.isFinite(t) ? t : null;
  }
  function pi(e) {
    var a;
    const t = le.steps, n = t ? Number((a = e[t]) == null ? void 0 : a.state) : NaN;
    i("stepsMeta").textContent = t ? Number.isFinite(n) ? La(n) : "—" : "Set up in Settings";
  }
  let ui = 0;
  async function gi() {
    const e = le.steps;
    if (!e || !g.ws) return;
    ui = Date.now();
    const t = /* @__PURE__ */ new Date(), n = new Date(t.getFullYear(), t.getMonth(), t.getDate() - 30);
    try {
      const a = await g.ws({ type: "recorder/statistics_during_period", start_time: n.toISOString(), end_time: t.toISOString(), statistic_ids: [e], period: "day", types: ["max"] }), o = (a == null ? void 0 : a[e]) || [], l = {};
      if (o.forEach((r) => {
        Number.isFinite(r.max) && (l[W(new Date(r.start))] = r.max);
      }), !Object.keys(l).length) {
        const r = await g.ws({ type: "history/history_during_period", start_time: n.toISOString(), end_time: t.toISOString(), entity_ids: [e], minimal_response: !0, no_attributes: !0, significant_changes_only: !1 });
        ((r == null ? void 0 : r[e]) || []).forEach((s) => {
          const u = Number(s.s ?? s.state), p = s.lu ? s.lu * 1e3 : Date.parse(s.last_updated || s.last_changed);
          if (!Number.isFinite(u) || !p) return;
          const m = W(new Date(p));
          l[m] = Math.max(l[m] || 0, u);
        });
      }
      fn = l, de();
    } catch {
    }
  }
  function Be() {
    de();
  }
  Be(), setInterval(() => {
    Be(), it(), Te();
  }, 10 * 60 * 1e3);
  function mi(e) {
    const t = {}, n = {};
    b.history.forEach((r) => {
      const s = W(new Date(r.start));
      t[s] = (t[s] || 0) + (r.seconds || 0) / 60, n[s] = (n[s] || 0) + 1;
    });
    const a = /* @__PURE__ */ new Date(), o = W(a), l = [];
    for (let r = e - 1; r >= 0; r--) {
      const s = new Date(a.getFullYear(), a.getMonth(), a.getDate() - r), u = W(s), p = b.checkins.filter((d) => d.date === u), m = (d) => {
        const k = p.map((R) => R[d]).filter(Boolean);
        return k.length ? k.reduce((R, I) => R + I, 0) / k.length : null;
      };
      l.push({
        key: u,
        date: s,
        minutes: Math.round(t[u] || 0),
        moves: n[u] || 0,
        steps: u === o && ci() != null ? ci() : fn[u] ?? null,
        mood: m("mood"),
        energy: m("energy")
      });
    }
    return l;
  }
  function Ma(e) {
    let t = e.length - 1;
    e[t] && !e[t].minutes && t--;
    let n = 0;
    for (; t >= 0 && e[t].minutes > 0; )
      n++, t--;
    return n;
  }
  function de() {
    const e = i("insightCard");
    if (!e) return;
    const t = mi(30), n = Ma(t), a = t.reduce((d, k) => d + k.minutes, 0), o = /* @__PURE__ */ new Date(), l = W(o), r = new Date(o.getFullYear(), o.getMonth(), o.getDate() - (o.getDay() + 6) % 7), s = [...Array(7)].map((d, k) => {
      const R = new Date(r.getFullYear(), r.getMonth(), r.getDate() + k), I = W(R), D = t.find((_) => _.key === I);
      return { d: R, k: I, minutes: D ? D.minutes : 0, today: I === l, future: I > l };
    }), u = s.reduce((d, k) => d + k.minutes, 0), p = Math.max(10, ...s.map((d) => d.minutes)), m = (d, k, R) => '<div class="activityRow"><div class="activityRowIcon" aria-hidden="true">' + d + '</div><div><div class="activityRowName">' + F(k) + '</div><div class="activityRowMeta">' + F(R) + "</div></div></div>";
    e.innerHTML = '<div class="activityHeader"><div class="activityIcon" aria-hidden="true">↗</div><div class="activityTitle">Movement</div></div><div class="activityRows movementReadings">' + m("◷", "This week", u + " min") + m("↯", "Streak", n + " day" + (n === 1 ? "" : "s")) + m("▦", "30 days", a + " min") + '</div><div class="weekBars">' + s.map(
      (d) => '<div class="weekBar' + (d.today ? " today" : "") + (d.future ? " future" : "") + '" title="' + F(d.minutes + " min") + '"><div class="weekBarTrack"><span style="height:' + (d.minutes ? Math.max(6, d.minutes / p * 100) : 0) + '%"></span></div><div class="dayLabel">' + F(new Intl.DateTimeFormat(void 0, { weekday: "short" }).format(d.d)) + "</div></div>"
    ).join("") + "</div>";
  }
  const hi = i("tvNav");
  g.fullscreenSupported || (hi.hidden = !0), hi.addEventListener("click", () => g.toggleFullscreen()), h.addEventListener("keydown", (e) => {
    !Fe.workout.classList.contains("active") || st.classList.contains("active") || e.target.closest("input,select,textarea,.holdEnd") || (e.key === "MediaPlayPause" || e.key === " " && !e.target.closest("button") ? (e.preventDefault(), be.click()) : e.key === "MediaTrackNext" ? (e.preventDefault(), i("skipExercise").click()) : e.key === "MediaTrackPrevious" && (e.preventDefault(), i("restartSegment").click()));
  }), [T, w, C, ye].forEach((e) => e.addEventListener("input", () => {
    const t = y[S];
    t && (t.total = Number(T.value), t.work = Number(w.value), t.rest = Number(C.value)), Y();
  })), Mn.addEventListener("click", pn), En.addEventListener("click", () => qt("settings")), i("settingsBack").addEventListener("click", pn), be.addEventListener("click", () => {
    O = !O, ne && ut(O ? "paused" : "resumed"), be.textContent = O ? "Resume" : "Pause", i("app").classList.toggle("paused", O);
  }), X(S), Tt(), it(), de(), i("healthHelpOpen").addEventListener("click", () => h.querySelector(".tab[data-pane=helpPane]").click()), It(i("resetStats"), i("resetStatsFill"), 1500, () => {
    b.history = [], b.checkins = [], nt = "";
    try {
      localStorage.removeItem("move-assistant-dismissed");
    } catch {
    }
    Se(), Be(), it(), Tt(), de(), Te(), q("Stats reset");
  });
  const vn = i("morningTime"), bn = i("eveningTime"), xn = i("checkinAutoOpen");
  vn.value = ie().morning, bn.value = ie().evening, xn.classList.toggle("on", L().checkinAutoOpen !== !1), [["morningTime", vn], ["eveningTime", bn]].forEach(([e, t]) => t.addEventListener("change", () => {
    t.value && ($(e, t.value), Te());
  })), xn.addEventListener("click", () => {
    const e = L().checkinAutoOpen === !1;
    xn.classList.toggle("on", e), $("checkinAutoOpen", e);
  }), setTimeout(en, 800);
  const fi = i("checkinNotify"), Dt = i("checkinNotifyTarget"), vi = i("checkinNotifyStatus"), Ea = vi.textContent;
  function bi() {
    const e = g.notifyServices(), t = e.filter((o) => o.startsWith("mobile_app_")), n = t.length ? t : e, a = (o) => o.replace(/^mobile_app_/, "").replace(/_/g, " ");
    Dt.innerHTML = n.map((o) => '<option value="' + F(o) + '">' + F(a(o)) + "</option>").join(""), !L().notifyTarget && n[0] && (L().notifyTarget = n[0]), Dt.value = L().notifyTarget || "";
  }
  function Ht() {
    const e = !!L().notifyOn;
    fi.classList.toggle("on", e), i("checkinNotifyTargetRow").hidden = !e;
    const t = ie();
    vi.textContent = e ? "Sends at " + t.morning + " and " + t.evening : Ea;
  }
  async function yn() {
    const e = !!L().notifyOn;
    try {
      return await g.setReminderAutomation(e ? { target: L().notifyTarget, times: ie() } : null), !0;
    } catch {
      return q("Couldn't update the reminder in Home Assistant"), !1;
    }
  }
  fi.addEventListener("click", async () => {
    const e = !L().notifyOn;
    if (e && (bi(), !L().notifyTarget)) {
      q("Install the Companion app on your phone first");
      return;
    }
    L().notifyOn = e, Ht(), await yn() ? (Se(), q(e ? "Check-in notifications on" : "Check-in notifications off")) : (L().notifyOn = !e, Ht());
  }), Dt.addEventListener("change", () => {
    $("notifyTarget", Dt.value), L().notifyOn && yn();
  }), [vn, bn].forEach((e) => e.addEventListener("change", () => {
    Ht(), L().notifyOn && yn();
  })), bi(), Ht();
  let kn = null;
  function Ra() {
    kn || (kn = setTimeout(() => {
      kn = null, de();
    }, 3e4));
  }
  return {
    updateStates(e) {
      Re = e, di(e), pi(e), Date.now() - ui > 60 * 60 * 1e3 && gi(), Ra();
    },
    applyRemoteData(e) {
      if (e && (Array.isArray(e.history) && (b.history = e.history, Be()), Array.isArray(e.history) && de(), Array.isArray(e.checkins) && (b.checkins = e.checkins.map(Nn), Te(), Tt(), it(), Be(), de()), e.profiles && !j.classList.contains("open") && !ne)) {
        const t = Fn(e);
        Object.keys(y).forEach((n) => delete y[n]), Object.assign(y, t.profiles), b.order = t.order, y[S] || (S = b.order[0]), In(), X(S);
      }
    },
    suspend() {
      B = !1;
    },
    resume() {
      B || (B = !0, Ge || (Ge = requestAnimationFrame(At)), Ze || (Ze = requestAnimationFrame(Ft)), mt(h.querySelector(".tab.active"), !1));
    }
  };
}
const Na = "0.12.0", wn = "move_assistant", Pa = "move_assistant", yi = "move_assistant_checkin_reminder";
function Ia() {
  if (document.getElementById("move-assistant-inter")) return;
  const h = document.createElement("link");
  h.id = "move-assistant-inter", h.rel = "stylesheet", h.href = "https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,400;0,500;0,600;0,700;0,800;1,500&display=swap", document.head.appendChild(h);
}
class Da extends HTMLElement {
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
    const i = !this._hass;
    if (this._hass = g, i) {
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
    Ia();
    const g = this.shadowRoot || this.attachShadow({ mode: "open" });
    g.innerHTML = `<style>${Ba}</style>${Aa}`;
    const i = g.getElementById("app");
    i.style.opacity = "0";
    let E = null;
    try {
      const x = await this._hass.callWS({
        type: "frontend/get_user_data",
        key: wn
      });
      E = (x == null ? void 0 : x.value) ?? null;
    } catch {
    }
    this._lastSaved = JSON.stringify(E), this._app = Fa(g, {
      data: E,
      save: (x) => this._save(x),
      fire: (x, B) => this._fire(x, B),
      ws: (x) => this._hass.callWS(x),
      notifyServices: () => {
        var x, B;
        return Object.keys(((B = (x = this._hass) == null ? void 0 : x.services) == null ? void 0 : B.notify) || {}).sort();
      },
      setReminderAutomation: (x) => this._setReminderAutomation(x),
      setLight: (x) => this.classList.toggle("lightBody", x),
      fullscreenSupported: !!(this.requestFullscreen || this.webkitRequestFullscreen),
      toggleFullscreen: () => this._toggleFullscreen()
    }), this._lastStates = this._hass.states, this._app.updateStates(this._hass.states), this.isConnected || this._app.suspend(), i.style.transition = "opacity .2s ease", i.style.opacity = "", this._subscribe();
  }
  _subscribe() {
    var i;
    const g = (i = this._hass) == null ? void 0 : i.connection;
    g != null && g.subscribeMessage && g.subscribeMessage(
      (E) => {
        var B;
        const x = JSON.stringify((E == null ? void 0 : E.value) ?? null);
        x === this._lastSaved || x === this._pendingJson || (this._lastSaved = x, (B = this._app) == null || B.applyRemoteData(E.value));
      },
      { type: "frontend/subscribe_user_data", key: wn }
    ).catch(() => {
    });
  }
  _save(g) {
    this._pendingJson = JSON.stringify(g), clearTimeout(this._saveTimer), this._saveTimer = setTimeout(async () => {
      const i = this._pendingJson;
      try {
        await this._hass.callWS({
          type: "frontend/set_user_data",
          key: wn,
          value: JSON.parse(i)
        }), this._lastSaved = i;
      } catch {
        this._toast("Couldn't save to Home Assistant");
      }
    }, 400);
  }
  _fire(g, i = {}) {
    var E, x;
    ((E = this._config) == null ? void 0 : E.events) !== !1 && ((x = this._hass) == null || x.callWS({
      type: "fire_event",
      event_type: Pa,
      event_data: { action: g, ...i }
    }).catch(() => {
    }));
  }
  // Keeps one Home Assistant automation in sync with the check-in times.
  // Passing null removes it.
  async _setReminderAutomation(g) {
    const i = `config/automation/config/${yi}`;
    if (!g) {
      try {
        await this._hass.callApi("DELETE", i);
      } catch (B) {
        if ((B == null ? void 0 : B.status_code) !== 404 && (B == null ? void 0 : B.status) !== 404) throw B;
      }
      return;
    }
    const E = (B) => `${B}:00`, x = window.location.pathname;
    await this._hass.callApi("POST", i, {
      id: yi,
      alias: "Move Assistant check-in reminder",
      description: "Created by Move Assistant. Change it in Move Assistant → Settings → Check-in.",
      mode: "single",
      triggers: [
        { trigger: "time", at: E(g.times.morning), id: "morning" },
        { trigger: "time", at: E(g.times.evening), id: "evening" }
      ],
      conditions: [],
      actions: [
        {
          action: `notify.${g.target}`,
          data: {
            title: "Move Assistant",
            message: "{{ 'Morning' if trigger.id == 'morning' else 'Evening' }} check-in is ready",
            data: { url: x, clickAction: x }
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
    const i = this.requestFullscreen || this.webkitRequestFullscreen;
    Promise.resolve(i.call(this)).catch(
      () => this._toast("Full screen isn't available here")
    );
  }
  _toast(g) {
    var E;
    const i = (E = this.shadowRoot) == null ? void 0 : E.getElementById("toast");
    i && (i.textContent = g, i.classList.add("show"), setTimeout(() => i.classList.remove("show"), 2600));
  }
}
customElements.get("move-assistant-card") || (customElements.define("move-assistant-card", Da), window.customCards = window.customCards || [], window.customCards.push({
  type: "move-assistant-card",
  name: "Move Assistant",
  description: "Guided movement timer with your Home Assistant activity data.",
  preview: !1
}), console.info(`%c MOVE ASSISTANT %c ${Na} `, "background:#D0FF00;color:#090909;font-weight:700", ""));
