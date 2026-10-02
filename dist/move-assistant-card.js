const Ci = ':host{display:flex;flex-direction:column;min-height:calc(100dvh - var(--header-height,0px));position:relative;background:#050505;color-scheme:dark;--bg:#050505;--page:#090909;--card:#1d1d1d;--card2:#242424;--muted:#969696;--text:#f4f4f4;--line:#3f3f3f;--lineb:#252525;--r:36px;--gap:20px}*{box-sizing:border-box}#app{color:var(--text);font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif;transition:background .25s ease,color .25s ease;zoom:.8;-webkit-font-smoothing:antialiased}[hidden]{display:none!important}button,input{font:inherit}#app{flex:1;display:flex;flex-direction:column;width:100%;margin:0;padding:0;background:var(--bg);font-size:16px;line-height:normal;text-align:left}.shell{flex:1;display:flex;flex-direction:column;position:relative;width:100%;background:var(--page);border-radius:0;overflow:visible;transition:background .28s ease}#app.resting .shell{background:#1f7a4d}#app.paused .shell{background:#3458d4}#app.light.paused .shell{background:#7f96e8}#app.light{--bg:#EEEDED;--page:#EEEDED;--card:rgba(255,255,255,.8);--card2:rgba(255,255,255,.8);--muted:#222222;--text:#222222;--line:#ffffff;--lineb:#ffffff}#app.light,#app.light *{color:#222!important}#app.light .pill{background:transparent;color:#222!important;border:0}#app.light .tab,#app.light .back,#app.light .navBtn,#app.light .primary,#app.light .themeBtn{background:#ffffffe0;color:#222!important;border-color:#fff}#app.light .holdEnd{background:#ffffffe0;border:.4px solid #fff;text-decoration:none}#app.light .energyBtn,#app.light .activityRow,#app.light .integration,#app.light .toggleRow,#app.light .weekChip,#app.light .sourceTag,#app.light .timeTile,#app.light .moveRow,#app.light .routineSummary,#app.light .workoutPanel{background:#fffc;color:#222!important}#app.light .timerCard,#app.light .movementCard,#app.light .nextCard{background:#fffc}#app.light .activityRow:nth-child(1) .activityRowIcon{background:#dfe4ff;color:#596de4!important}#app.light .activityRow:nth-child(2) .activityRowIcon{background:#ffe8c8;color:#c8741f!important}#app.light .activityRow:nth-child(3) .activityRowIcon{background:#d9f4e6;color:#2e8b63!important}#app.light .activityIcon{background:#e8e1ff;color:#7859c9!important}#app.light .energyBtn{color:#222!important;background:#ffffffb8}#app.light .energyBtn:hover,#app.light .energyBtn:focus-visible,#app.light .energyBtn.selected{background:color-mix(in srgb,var(--feeling-color) 34%,white);color:#222!important}:host(.lightBody){background:#eeeded;color-scheme:light}#app.light,#app.light .shell{background:#eeeded}#app.light .modal{background:#fffffff0;border-color:#fff}#app.light .modalStatic{background:#fffffff0;border-bottom-color:#fff}#app.light .exerciseScroller{background:transparent;border-color:#ffffffe6}#app.light .addInput,#app.light .editNameInput{background:#ffffffeb;color:#222!important;border-color:#fff}#app.light .rangeTrack{background:#d8d6d6;border-color:#fff}#app.light .rangeFill{background:#aeb9ff}#app.light .timerCard,#app.light .movementCard,#app.light .upcomingTile{background:#fffc;border-color:#fff}#app.light .fill{background:#c9d0ff}#app.light .progress{background:transparent}#app.light .progressSegment{background:#c8c6c6}#app.light .progressSegment.active:after{background:#9aa8ff}#app.light .progressSegment.done{background:transparent;opacity:0}#app.light .sourceTag,#app.light .activityRow,#app.light .weekChip,#app.light .integration,#app.light .toggleRow,#app.light .moveRow,#app.light .timeTile,#app.light .routineSummary{border-color:#fff}#app.light .countdown{background:#eeeded}#app.light .toast{background:#222;color:#eeeded!important}#app.light.resting .shell{background:#7dbb98}.view{display:none;width:100%;max-width:1480px;margin:0 auto;padding:28px 28px 96px}.view.active{display:block;flex:1 0 auto}.card,.panel,.tile{position:relative;background:var(--card);border-radius:36px;padding:28px;border-top:.4px solid var(--line);border-left:.4px solid var(--line);border-right:.4px solid var(--line);border-bottom:.2px solid var(--lineb)}.grid{display:grid;grid-template-columns:repeat(12,minmax(0,1fr));gap:20px}.eyebrow{font-size:12px;text-transform:uppercase;letter-spacing:.14em;color:var(--muted);font-weight:760}.title{font-size:clamp(52px,6vw,84px);font-weight:790;letter-spacing:-.06em;line-height:.9}.sub{font-size:15px;color:var(--muted);margin-top:8px;line-height:1.45}.pill,.primary,.navBtn,.tab,.back,.hideBtn,.addBtn{cursor:pointer}.pill{min-height:0;padding:4px 0;border:0;border-radius:0;background:transparent;color:var(--text);text-decoration-line:underline;text-decoration-thickness:1px;text-underline-offset:4px}.tab,.back{border-radius:999px;min-height:52px;padding:0 20px;background:#171717;border:.4px solid var(--line);color:#fff}.primary{border-radius:999px;min-height:52px;padding:0 22px;border:0;background:#f2f2f2;color:#090909;font-weight:780}.topbar{display:flex;justify-content:space-between;gap:20px;align-items:flex-start;margin-bottom:24px}.activityCard,.weekly{grid-column:span 6}.energySection{grid-column:span 12;margin-top:20px}.activityCard,.weekly{min-height:360px}.wellness{width:100%}.sourceTag{display:inline-flex;margin-top:14px;padding:8px 12px;border-radius:999px;background:#292929;font-size:13px;color:#cfcfcf}.workoutFooter{display:flex;justify-content:space-between;align-items:end;gap:28px;flex-wrap:wrap;margin-top:28px;width:100%;box-sizing:border-box}.workoutGallery{grid-column:span 12;display:flex;gap:20px;height:360px;overflow:hidden}.workoutPanel{position:relative;height:360px;flex:1 1 90px;min-width:88px;background:var(--card);border-radius:36px;padding:28px;border-top:.4px solid var(--line);border-left:.4px solid var(--line);border-right:.4px solid var(--line);border-bottom:.2px solid var(--lineb);overflow:hidden;box-sizing:border-box;transition:flex .32s ease;cursor:pointer}.workoutPanel.active{flex:7 1 0;min-width:0;cursor:default}.workoutPanel.addPanel{flex:0 0 92px;min-width:92px;display:flex;align-items:center;justify-content:center;padding:18px}.workoutPanel{--edge-proximity:0;--cursor-angle:45deg;--edge-sensitivity:36;--color-sensitivity:56;--cone-spread:25;--fill-opacity:.18;--glow-color:hsl(205deg 90% 82% / 100%);--glow-color-60:hsl(205deg 90% 82% / 60%);--glow-color-50:hsl(205deg 90% 82% / 50%);--glow-color-40:hsl(205deg 90% 82% / 40%);--glow-color-30:hsl(205deg 90% 82% / 30%);--glow-color-20:hsl(205deg 90% 82% / 20%);--glow-color-10:hsl(205deg 90% 82% / 10%);--gradient-one:radial-gradient(at 80% 55%,#c084fc 0px,transparent 50%);--gradient-two:radial-gradient(at 69% 34%,#f472b6 0px,transparent 50%);--gradient-three:radial-gradient(at 8% 6%,#38bdf8 0px,transparent 50%);--gradient-four:radial-gradient(at 41% 38%,#c084fc 0px,transparent 50%);--gradient-five:radial-gradient(at 86% 85%,#f472b6 0px,transparent 50%);--gradient-six:radial-gradient(at 82% 18%,#38bdf8 0px,transparent 50%);--gradient-seven:radial-gradient(at 51% 4%,#f472b6 0px,transparent 50%);isolation:isolate}.workoutPanel:before,.workoutPanel:after,.workoutPanel>.edgeLight{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:36px;pointer-events:none;transition:opacity .18s ease-out}.workoutPanel:before{z-index:2;border:1px solid transparent;background:linear-gradient(var(--card) 0 100%) padding-box,linear-gradient(#fff0 0,#fff0) border-box,var(--gradient-one) border-box,var(--gradient-two) border-box,var(--gradient-three) border-box,var(--gradient-four) border-box,var(--gradient-five) border-box,var(--gradient-six) border-box,var(--gradient-seven) border-box;opacity:clamp(0,calc(.72 * (var(--edge-proximity) - var(--color-sensitivity)) / (100 - var(--color-sensitivity))),.72);-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,black calc(var(--cone-spread) * 1%),transparent calc((var(--cone-spread) + 15) * 1%),transparent calc((100 - var(--cone-spread) - 15) * 1%),black calc((100 - var(--cone-spread)) * 1%));mask-image:conic-gradient(from var(--cursor-angle) at center,black calc(var(--cone-spread) * 1%),transparent calc((var(--cone-spread) + 15) * 1%),transparent calc((100 - var(--cone-spread) - 15) * 1%),black calc((100 - var(--cone-spread)) * 1%))}.workoutPanel:after{z-index:1;border:1px solid transparent;background:var(--gradient-one) padding-box,var(--gradient-two) padding-box,var(--gradient-three) padding-box,var(--gradient-four) padding-box,var(--gradient-five) padding-box,var(--gradient-six) padding-box,var(--gradient-seven) padding-box;opacity:clamp(0,calc(var(--fill-opacity) * (var(--edge-proximity) - var(--color-sensitivity)) / (100 - var(--color-sensitivity))),.18);mix-blend-mode:soft-light;-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,transparent 5%,black 15%,black 85%,transparent 95%);mask-image:conic-gradient(from var(--cursor-angle) at center,transparent 5%,black 15%,black 85%,transparent 95%)}.workoutPanel>.edgeLight{top:-24px;right:-24px;bottom:-24px;left:-24px;z-index:3;opacity:clamp(0,calc(.62 * (var(--edge-proximity) - var(--edge-sensitivity)) / (100 - var(--edge-sensitivity))),.62);mix-blend-mode:plus-lighter;-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,black 2.5%,transparent 10%,transparent 90%,black 97.5%);mask-image:conic-gradient(from var(--cursor-angle) at center,black 2.5%,transparent 10%,transparent 90%,black 97.5%)}.workoutPanel>.edgeLight:before{content:"";position:absolute;top:24px;right:24px;bottom:24px;left:24px;border-radius:36px;box-shadow:inset 0 0 0 1px var(--glow-color-60),inset 0 0 3px 0 var(--glow-color-40),inset 0 0 8px 0 var(--glow-color-30),inset 0 0 16px 0 var(--glow-color-20),0 0 3px 0 var(--glow-color-40),0 0 8px 0 var(--glow-color-30),0 0 16px 0 var(--glow-color-20),0 0 28px 2px var(--glow-color-10)}.workoutPanel:not(.borderGlowActive):before,.workoutPanel:not(.borderGlowActive):after,.workoutPanel:not(.borderGlowActive)>.edgeLight{opacity:0;transition:opacity .35s ease-out}#app.light .workoutPanel{--glow-color:hsl(224deg 80% 55% / 100%);--glow-color-50:hsl(224deg 80% 55% / 50%);--glow-color-40:hsl(224deg 80% 55% / 40%);--glow-color-30:hsl(224deg 80% 55% / 30%);--glow-color-20:hsl(224deg 80% 55% / 20%);--glow-color-10:hsl(224deg 80% 55% / 10%)}.workoutPanel:not(.active):not(.addPanel) .panelExpanded{opacity:0;filter:blur(10px);pointer-events:none}.workoutPanel:not(.active):not(.addPanel) .panelCollapsed{opacity:1;filter:blur(0)}.workoutPanel.active .panelExpanded{opacity:1;filter:blur(0);pointer-events:auto}.workoutPanel.active .panelCollapsed{opacity:0;filter:blur(8px);pointer-events:none}.panelExpanded{position:relative;z-index:4;width:100%;height:100%;min-width:0;box-sizing:border-box;display:flex;flex-direction:column;justify-content:space-between;transition:opacity .22s ease,filter .22s ease}.panelCollapsed{position:absolute;top:0;right:0;bottom:0;left:0;z-index:4;display:flex;align-items:center;justify-content:center;opacity:0;filter:blur(8px);transition:opacity .22s ease,filter .22s ease}.panelCollapsedText{writing-mode:vertical-rl;transform:rotate(180deg);white-space:nowrap;font-size:18px;font-weight:720;letter-spacing:-.02em}.workoutPanelTop{display:flex;justify-content:space-between;align-items:flex-start;gap:28px;width:100%;min-width:0;box-sizing:border-box}.workoutName{font-size:clamp(54px,7vw,92px);line-height:.9;letter-spacing:-.06em;font-weight:790}.workoutPanelActions{display:flex;gap:28px;flex-wrap:wrap;align-items:center;justify-content:flex-end;margin-left:auto}.startWorkoutBtn{background:#d0ff00!important;color:#090909!important}.startWorkoutBtn:hover{filter:brightness(1.04)}#app.light .startWorkoutBtn{background:#d0ff00!important;color:#090909!important}.addPanelPlus{position:relative;z-index:4;font-size:34px;line-height:1}.addPanelLabel{position:absolute;z-index:4;bottom:20px;writing-mode:vertical-rl;transform:rotate(180deg);font-size:13px;color:var(--muted);letter-spacing:.04em}@media (max-height:820px) and (min-width:621px){.modalStatic{padding:22px 28px}.timeTile{min-height:156px}}@media (max-width:900px){.weekCopy{white-space:normal}.workoutGallery{overflow-x:auto;scroll-snap-type:x mandatory;padding-bottom:4px}.workoutPanel,.workoutPanel.active{height:360px;flex:0 0 min(86vw,680px);min-width:min(86vw,680px);scroll-snap-align:start}.workoutPanel.addPanel{flex-basis:100px;min-width:100px}.panelCollapsed{display:none}}.moveActions{display:flex;gap:28px;flex-wrap:wrap}.energyFloat{padding:28px;background:transparent;border:0}.energyQuestion{font-size:48px;font-weight:780;letter-spacing:-.035em;line-height:1}#app.light .energyFloat{background:transparent}.energyScale{display:grid;grid-template-columns:repeat(6,minmax(0,1fr));gap:12px;margin-top:22px}.energyBtn{--feeling-color:#8f8f8f;--feeling-glow:rgba(255,255,255,.14);position:relative;isolation:isolate;overflow:hidden;width:100%;min-height:54px;padding:0 12px;white-space:nowrap;border-radius:16px;background:#282828;border:.4px solid var(--line);color:#fff;cursor:pointer;transition:color .18s ease,border-color .18s ease,background .18s ease}.energyBtn>span{position:relative;z-index:2}.energyBtn:before{content:"";position:absolute;top:-18%;right:-18%;bottom:-18%;left:-18%;z-index:-2;opacity:0;background:radial-gradient(ellipse at var(--feel-x,50%) var(--feel-y,50%),color-mix(in srgb,var(--feeling-color) 88%,transparent) 0%,color-mix(in srgb,var(--feeling-color) 54%,transparent) 34%,transparent 72%);transform:scale(.82) skew(-3deg);filter:saturate(1.08) blur(1px);transition:opacity .18s ease,transform .28s cubic-bezier(.2,.8,.2,1)}.energyBtn:after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;z-index:-1;opacity:0;pointer-events:none;background:repeating-linear-gradient(to bottom,rgba(255,255,255,.07) 0,rgba(255,255,255,.07) 1px,transparent 1px,transparent 4px),linear-gradient(90deg,transparent 0%,color-mix(in srgb,var(--feeling-color) 34%,transparent) var(--feel-x,50%),transparent 100%);mix-blend-mode:screen}.energyBtn:hover:before,.energyBtn:focus-visible:before,.energyBtn.selected:before{opacity:.92;transform:translate(var(--feel-shift-x,0px),var(--feel-shift-y,0px)) scale(1.08) skew(2deg);animation:feelingWarp 1.45s ease-in-out infinite alternate}.energyBtn:hover:after,.energyBtn:focus-visible:after,.energyBtn.selected:after{opacity:.55;animation:feelingScan .9s linear infinite}.energyBtn:hover,.energyBtn:focus-visible,.energyBtn.selected{background:color-mix(in srgb,var(--feeling-color) 42%,#171717);border-color:color-mix(in srgb,var(--feeling-color) 72%,#ffffff 10%);color:#fff}.energyBtn.selected{box-shadow:inset 0 0 0 1px color-mix(in srgb,var(--feeling-color) 58%,transparent),0 0 18px color-mix(in srgb,var(--feeling-color) 24%,transparent)}.energyBtn[data-energy=Drained]{--feeling-color:#6E63A8}.energyBtn[data-energy=Low]{--feeling-color:#5878A8}.energyBtn[data-energy=Okay]{--feeling-color:#6F8B8A}.energyBtn[data-energy=Good]{--feeling-color:#5F9B72}.energyBtn[data-energy=Energised]{--feeling-color:#D5A53E}.energyBtn[data-energy=Great]{--feeling-color:#D56B54}@keyframes feelingWarp{0%{transform:scale(1.03) skew(-2deg) translate(-1.5%);filter:saturate(1.02) blur(.8px)}50%{transform:scale(1.12) skew(1deg) translate(1%);filter:saturate(1.22) blur(1.5px)}to{transform:scale(1.06) skew(3deg) translate(-.5%);filter:saturate(1.1) blur(.6px)}}@keyframes feelingScan{0%{background-position:0 0,-80% 0}to{background-position:0 8px,180% 0}}@media (prefers-reduced-motion: reduce){.energyBtn:before,.energyBtn:after{animation:none!important}}.energyHistory{display:grid;gap:8px;margin-top:12px}.energyLog{display:flex;justify-content:space-between;gap:12px;padding:10px 12px;border-radius:20px;background:#252525;font-size:13px}.energyLog span:last-child{color:#999}.tempoExperiment{margin-top:18px;padding-top:20px;border-top:.4px solid var(--line)}.tempoExperimentHead{display:flex;justify-content:space-between;align-items:flex-start;gap:20px;margin-bottom:16px}.tempoEstimate{font-size:18px;font-weight:680;white-space:nowrap}.tempoQuad{position:relative;width:min(360px,100%);aspect-ratio:1/1;border-radius:36px;background:#ffffff06;border-top:.4px solid var(--line);border-left:.4px solid var(--line);border-right:.4px solid var(--line);border-bottom:.2px solid var(--lineb);overflow:hidden;touch-action:none;cursor:crosshair}.tempoCross{position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none;background:linear-gradient(to right,transparent calc(50% - .5px),rgba(255,255,255,.12) 50%,transparent calc(50% + .5px)),linear-gradient(to bottom,transparent calc(50% - .5px),rgba(255,255,255,.12) 50%,transparent calc(50% + .5px))}.tempoDot{position:absolute;left:50%;top:50%;width:22px;height:22px;border-radius:50%;background:var(--text);transform:translate(-50%,-50%);pointer-events:none;box-shadow:0 0 0 6px #ffffff12}.tempoPole{position:absolute;pointer-events:none;color:var(--muted);font-size:12px}.tempoFast{top:12px;left:50%;transform:translate(-50%)}.tempoSlow{bottom:12px;left:50%;transform:translate(-50%)}.tempoHard{right:12px;top:50%;transform:translateY(-50%)}.tempoLow{left:12px;top:50%;transform:translateY(-50%)}.tempoReadout{margin-top:12px;font-size:13px;color:var(--muted)}.tempoRevealRow{margin-top:14px}.tempoRevealBtn{font-size:13px;color:#b8bcc6;text-decoration-color:#6d7480}.editTempoExperiment{margin-top:14px}.editTempoExperiment[hidden]{display:none}.testingZone{position:relative;overflow:hidden;border-radius:28px;background:#202226;border:1px solid #4a4f58;box-shadow:none}.testingZoneInner{position:relative;padding:24px;background:linear-gradient(rgba(176,186,199,.045) 1px,transparent 1px),linear-gradient(90deg,rgba(176,186,199,.045) 1px,transparent 1px),#202226;background-size:20px 20px}.testingZoneTitleBlock{max-width:760px;margin-bottom:24px}.testingZoneTitleRow{display:flex;justify-content:space-between;align-items:center;gap:20px}.testingZoneTitleRow strong{color:#d6d9df;font-size:18px;font-weight:650}.testingZone .tempoEstimate{color:#aeb4bf;font-weight:560}.testingZoneExplanation{margin:10px 0 0;color:#9ea5b0;font-size:13px;line-height:1.5;text-align:left}.testingZoneLayout{display:grid;grid-template-columns:minmax(280px,360px) minmax(0,1fr);grid-template-areas:"controller feedback";gap:32px;align-items:start}.testingFeedbackForm{grid-area:feedback;display:grid;gap:18px;min-width:0;padding:20px;border:.4px solid var(--line);border-radius:20px;background:#252525}.testingFeedbackHeading{color:#d6d9df;font-size:15px;font-weight:650}.testingFeedbackField{display:grid;gap:8px;color:#9ea5b0;font-size:12px}.testingFeedbackField select,.testingFeedbackField textarea{width:100%;border:.4px solid var(--line);background:#171717;color:#d6d9df;border-radius:14px;padding:10px 12px;font:inherit}.testingFeedbackField textarea{resize:vertical;min-height:82px}.testingRating{display:grid;grid-template-columns:repeat(5,1fr);gap:6px}.testingRating button{min-height:38px;border-radius:12px;border:.4px solid var(--line);background:#171717;color:#c7ccd5;cursor:pointer}.testingRating button.selected{border-color:#c7ccd5;background:#343434}.testingFeedbackSubmit{justify-self:start;min-height:42px;padding:0 16px;border-radius:14px;border:0;background:#ffffffe0;color:#111;cursor:pointer}.testingZoneControllerWrap{grid-area:controller;display:flex;flex-direction:column;align-items:center;justify-content:flex-start}.tempoQuadFrame{width:min(320px,100%);aspect-ratio:1/1;padding:0;background:linear-gradient(rgba(176,186,199,.075) 1px,transparent 1px),linear-gradient(90deg,rgba(176,186,199,.075) 1px,transparent 1px),#202226;background-size:20px 20px,20px 20px,auto;border-radius:20px}.testingZone .tempoQuad{width:100%;height:100%;border-radius:20px;background:#202226;border:1px solid #5a606a;box-shadow:none}.testingZone .tempoCross{background:linear-gradient(to right,transparent calc(50% - .5px),rgba(176,186,199,.2) 50%,transparent calc(50% + .5px)),linear-gradient(to bottom,transparent calc(50% - .5px),rgba(176,186,199,.2) 50%,transparent calc(50% + .5px))}.testingZone .tempoDot{width:18px;height:18px;background:transparent;border:1px solid #c4cad4;box-shadow:0 0 0 4px #c4cad40d}.testingZone .tempoPole{color:#8e96a2}.testingZone .tempoReadout{width:min(320px,100%);color:#9ea5b0;text-align:center;margin-top:12px}.testingZone button,.testingZone input,.testingZone select,.testingZone textarea{transition:opacity .14s ease,border-color .14s ease,color .14s ease,background .14s ease}.testingZone button:hover,.testingZone button:focus-visible{filter:none;opacity:.88}@media (max-width:900px){.testingZoneLayout{grid-template-columns:1fr;grid-template-areas:"controller" "feedback"}}#app.light .testingZone{background:#202226;border-color:#4a4f58}#app.light .testingZoneInner{background:linear-gradient(rgba(176,186,199,.045) 1px,transparent 1px),linear-gradient(90deg,rgba(176,186,199,.045) 1px,transparent 1px),#202226}#app.light .testingZone,#app.light .testingZone *{color:#d6d9df!important}#app.light .testingZone .testingFeedbackField,#app.light .testingZone .testingZoneExplanation,#app.light .testingZone .tempoReadout{color:#9ea5b0!important}#app.light .testingZone .tempoQuad{background:#202226;border-color:#5a606a}#app.light .testingZone .tempoDot{background:transparent;border-color:#c4cad4}#app.light .testingFeedbackForm{background:#2a2a2a;border-color:#4a4f58}#app.light .testingFeedbackField select,#app.light .testingFeedbackField textarea,#app.light .testingRating button{background:#171717;border-color:#4a4f58}#app.light .testingRating button.selected{background:#343434}#app.light .testingFeedbackSubmit{background:#ffffffe0;color:#111!important}#app.light .tempoQuad{background:#ffffff7a;border-color:#fff}#app.light .tempoDot{background:#222;box-shadow:0 0 0 6px #0000000d}.activityHeader{display:flex;align-items:center;gap:14px;margin-bottom:20px}.activityIcon{width:44px;height:44px;border-radius:17px;background:#2e2e2e;display:grid;place-items:center;font-size:20px}.activityTitle{font-size:30px;font-weight:720;letter-spacing:-.035em}.activityRows{display:grid;gap:12px}.activityRow{display:grid;grid-template-columns:54px minmax(0,1fr);align-items:center;gap:14px;background:#292929;border-radius:30px;padding:16px 18px}.activityRowIcon{width:54px;height:54px;border-radius:20px;background:#3a3a3a;display:grid;place-items:center;font-size:20px}.activityRowName{font-size:19px;font-weight:690}.activityRowMeta{font-size:14px;color:#b4b4b4;margin-top:3px}.toast{position:absolute;right:26px;top:26px;z-index:60;background:#efefef;color:#090909;border-radius:999px;padding:11px 16px;font-size:13px;font-weight:680;opacity:0;transform:translateY(-8px);pointer-events:none;transition:opacity .18s ease,transform .18s ease}.toast.show{opacity:1;transform:none}.weekHero{display:block}.weekMetric{font-size:clamp(72px,8vw,112px);font-weight:820;letter-spacing:-.075em;line-height:.82}.weekCopy{font-size:clamp(15px,1.4vw,18px);color:var(--muted);margin-top:12px;line-height:1.2;max-width:none;white-space:nowrap}.weekChips{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:10px;margin-top:24px}.weekChip{background:#292929;border-radius:16px;min-height:76px;padding:12px 14px;display:flex;flex-direction:column;justify-content:space-between;gap:8px}.weekChipTop{display:flex;justify-content:space-between;align-items:center;gap:8px}.weekChipTop strong{font-size:13px;font-weight:680}.weekChipTime{font-size:16px;font-weight:700}.weekChipMeta{font-size:11px;color:#888}.weekTick{font-size:14px;font-weight:800;line-height:1}.weekChip.total{background:#242424}.weekChip.total .weekChipTime{font-size:20px}.workoutSurface{position:relative;overflow:hidden;isolation:isolate}.workoutContent{position:relative;z-index:2}.pixelTrailCanvas{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;z-index:1;pointer-events:none}#app.light .pixelTrailCanvas{opacity:.46}.sessionHead{display:flex;justify-content:space-between;align-items:flex-start;gap:20px}.sessionActions{display:flex;gap:28px;align-items:center;flex-wrap:wrap;justify-content:flex-end}.holdEnd{position:relative;overflow:hidden;min-width:138px;min-height:52px;padding:0 20px;border-radius:999px;border:.4px solid var(--line);background:#171717;text-decoration:none;user-select:none;-webkit-user-select:none;touch-action:none}.holdEndFill{position:absolute;inset:0 auto 0 0;width:0;background:#efefef;pointer-events:none}.holdEndLabel{position:relative;z-index:1;mix-blend-mode:difference;color:#fff}.holdEnd.holding{border-color:#666}#stepLabel{font-size:12px!important;line-height:1.2;letter-spacing:.14em;font-weight:760}.exerciseTitle{font-size:clamp(56px,7vw,94px);line-height:.88;letter-spacing:-.065em;font-weight:790;margin-top:6px;color:#d0ff00}.meta{font-size:18px;color:#969696;margin-top:6px}.progress{height:58px;padding:0;background:transparent;border-radius:22px;display:flex;gap:4px;margin-top:24px;overflow:hidden}.progressSegment{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:0;padding:0;display:block;flex:1;min-width:0;background:#3f3f3f;border-radius:22px;position:relative;overflow:hidden;cursor:default}.progressSegment:after{content:"";position:absolute;inset:0 auto 0 0;width:0;background:#efefef;transition:width .2s linear}.progressSegment.done{background:transparent;opacity:0;pointer-events:none}.progressSegment.done:after{display:none}.progressSegment.active:after{width:var(--segment-progress,0%)}#app.resting .progressSegment:not(.done):not(.active),#app.paused .progressSegment:not(.done):not(.active){background:#fff}#app.light.resting .progressSegment:not(.done):not(.active),#app.light.paused .progressSegment:not(.done):not(.active){background:#fff}.progressSegment.rewindable{cursor:pointer}.progressSegment.rewindable:hover{filter:brightness(1.08)}.progressSegment:focus-visible{outline:2px solid var(--periwinkle);outline-offset:-3px}.workGrid{display:grid;grid-template-columns:minmax(0,2fr) minmax(300px,1fr);gap:20px;margin-top:20px}.timerCard,.movementCard,.nextCard{position:relative;border-radius:36px;border-top:.4px solid var(--line);border-left:.4px solid var(--line);border-right:.4px solid var(--line);border-bottom:.2px solid var(--lineb)}.timerCard{min-height:430px;background:#0d0d0d;overflow:hidden}.fill{position:absolute;inset:0 auto 0 0;width:100%;background:#f2f2f2;transition:width .2s linear}.digits{position:absolute;top:0;right:0;bottom:0;left:0;display:flex;align-items:center;justify-content:center;font-size:clamp(190px,28vw,390px);font-weight:850;letter-spacing:-.11em;color:#fff;mix-blend-mode:difference;font-variant-numeric:tabular-nums}.movementCard{background:#151515;min-height:430px;display:grid;place-items:center;padding:28px}.movementMark{font-size:20px;font-weight:760;color:#d5d5d5;text-align:center}.movementCard{overflow:hidden}.movementRippleCanvas{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;z-index:0}.movementMark{position:relative;z-index:2}.nextCard{background:#1d1d1d;padding:28px;display:flex;justify-content:space-between;align-items:center;gap:20px;min-height:146px}.nextIcon{width:66px;height:66px;border-radius:24px;background:#2d2d2d;display:grid;place-items:center;font-size:26px;flex:0 0 auto}.sectionLabel{font-size:18px;font-weight:400;letter-spacing:-.015em;line-height:1.2;margin:0 0 10px 28px}.moveSection{grid-column:span 12}.moveSection .workoutGallery{width:100%}.nextWrap{margin-top:20px}.nextLabel{font-size:18px;font-weight:760;margin:0 0 10px 28px}.nextCard{background:var(--card);padding:28px;display:flex;justify-content:space-between;align-items:center;gap:28px;min-height:108px;border-radius:36px;border-top:.4px solid var(--line);border-left:.4px solid var(--line);border-right:.4px solid var(--line);border-bottom:.2px solid var(--lineb)}.nextMain{display:flex;align-items:center;gap:18px;min-width:0}.nextIcon{width:54px;height:54px;border-radius:16px;background:#2d2d2d;display:grid;place-items:center;font-size:20px;flex:0 0 auto}.nextName{font-size:24px;font-weight:400;letter-spacing:-.025em;line-height:1.05}.sessionControlRow{display:flex;justify-content:flex-end;gap:28px;align-items:center;margin-top:20px}.nextActions{display:flex;gap:28px;align-items:center;flex:0 0 auto}.skipBtn{min-width:150px;min-height:52px;padding:0 18px;border:1px solid var(--line);background:transparent;color:var(--text);text-decoration:none;font-weight:680}.pause{min-width:150px;min-height:52px;padding:0 18px;font-size:16px}#app.light .nextCard{background:#fffc;border-color:#fff}#app.light .nextIcon{background:#ffe6ef;color:#bd4b7a!important}#app.light .skipBtn{background:transparent;color:#222!important;border-color:#fff}.upcomingList{display:grid;gap:12px;margin-top:12px}.upcomingCard{--future-opacity:1;display:flex;align-items:center;justify-content:space-between;gap:28px;min-height:108px;padding:28px;border-radius:36px;background:var(--card);border-top:.4px solid var(--line);border-left:.4px solid var(--line);border-right:.4px solid var(--line);border-bottom:.2px solid var(--lineb);opacity:var(--future-opacity);transition:opacity .22s ease}.upcomingCard:nth-child(-n+3){--future-opacity:1}.upcomingCard:nth-child(4){--future-opacity:.72}.upcomingCard:nth-child(5){--future-opacity:.48}.upcomingCard:nth-child(6){--future-opacity:.3}.upcomingCard:nth-child(n+7){--future-opacity:.16}.upcomingCard.sessionHidden{--future-opacity:.24!important;filter:saturate(.15)}.upcomingCard.sessionHidden .upcomingName{text-decoration:line-through}.upcomingCard.sessionHidden .upcomingIcon{opacity:.45}.upcomingCard.sessionHidden .upcomingMeta{opacity:.55}.upcomingInfo{display:flex;align-items:center;gap:18px;min-width:0}.upcomingIcon{width:54px;height:54px;flex:0 0 auto;border-radius:16px;background:#2d2d2d;display:grid;place-items:center;font-size:20px}.upcomingName{font-size:24px;font-weight:400;letter-spacing:-.025em;line-height:1.05}.upcomingMeta{font-size:14px;color:var(--muted);margin-top:5px}.skipSessionBtn{flex:0 0 auto;min-height:52px;padding:0 18px;border:1px solid var(--line);background:transparent;color:var(--text);font-weight:680}#app.light .upcomingCard{background:#fffc;border-color:#fff}#app.light .upcomingIcon{background:#ece7ff;color:#715bd0!important}#app.light .skipSessionBtn{border-color:#fff;color:#222!important}@media (max-width:900px){.weekCopy{white-space:normal}.nextCard{align-items:flex-start;flex-direction:column}.sessionControlRow{width:100%}.skipBtn,.pause{flex:1;min-width:0}.upcomingCard{align-items:flex-start;flex-direction:column}.skipSessionBtn{width:100%}}.countdown{display:none;position:fixed;top:0;right:0;bottom:0;left:0;width:125vw;height:125dvh;background:#090909;z-index:300;align-items:center;justify-content:center;flex-direction:column;text-align:center;overflow:hidden}.countdown.active{display:flex}.pixelCanvas{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;display:block;z-index:1}.countdown:before{content:"";position:absolute;top:0;right:0;bottom:0;left:0;background:radial-gradient(circle at center,rgba(174,185,255,.14),transparent 58%);pointer-events:none}.countNum{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);z-index:3}.countNum{font-size:clamp(180px,32vw,430px);font-weight:850;line-height:.75;letter-spacing:-.1em}.modalBackdrop{display:none;position:fixed;top:0;right:0;bottom:0;left:0;width:125vw;height:125dvh;z-index:145;background:#000000a8;padding:35px;box-sizing:border-box;align-items:center;justify-content:center}.modalBackdrop.open{display:flex}.modal{width:min(1480px,100%);height:100%;max-width:1480px;max-height:none;overflow:hidden;background:#202020;border-radius:36px;padding:0;display:flex;flex-direction:column;box-sizing:border-box;border-top:.4px solid var(--line);border-left:.4px solid var(--line);border-right:.4px solid var(--line);border-bottom:.2px solid var(--lineb)}.modalStatic{flex:0 0 auto;padding:28px;background:#202020;border-bottom:.4px solid #343434}.modalHead{display:flex;justify-content:space-between;align-items:flex-start;gap:20px;margin-bottom:16px}.modalHeaderActions{display:flex;gap:28px;align-items:center;flex:0 0 auto}.modalHead h2{font-size:38px;letter-spacing:-.045em;line-height:1;margin:3px 0 0}.editNameRow{display:grid;gap:8px;margin-bottom:14px}.editNameLabel{font-size:13px;color:var(--muted)}.editNameInput{min-height:58px;border-radius:22px;border:.4px solid var(--line);background:#151515;color:var(--text);padding:0 18px;font-size:22px;font-weight:680;letter-spacing:-.02em}#app.light .editNameInput{background:#ffffffe0;color:#222!important;border-color:#fff}.timeTiles{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin-bottom:14px}.timeTile{background:#252525;min-height:186px;padding:20px;display:flex;flex-direction:column;justify-content:space-between}.timeHeader{display:flex;align-items:center;gap:18px}.timeIcon{width:58px;height:58px;border-radius:20px;background:#313131;display:grid;place-items:center;flex:0 0 auto;font-size:22px;font-weight:760}.timeCopy{min-width:0}.timeLabel{font-size:20px;line-height:1;font-weight:760;letter-spacing:-.025em}.timeValue{font-size:20px;line-height:1.15;font-weight:450;letter-spacing:-.02em;color:#cfcfcf;margin-top:7px}.rangeTrack{height:58px;border-radius:22px;background:#151515;overflow:hidden;position:relative;border-top:.4px solid var(--line);border-left:.4px solid var(--line);border-right:.4px solid var(--line);border-bottom:.2px solid var(--lineb)}.rangeFill{position:absolute;inset:0 auto 0 0;background:#efefef;border-radius:22px 0 0 22px}.rangeInput{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;opacity:0;cursor:pointer}.exerciseScroller{min-height:0;overflow-y:auto;padding:4px 20px 22px 28px;border-top:.2px solid #303030;scrollbar-gutter:stable}.exerciseScroller::-webkit-scrollbar{width:8px}.exerciseScroller::-webkit-scrollbar-track{background:transparent}.exerciseScroller::-webkit-scrollbar-thumb{background:#4a4a4a;border-radius:999px}.sectionTitle{font-size:13px;text-transform:uppercase;letter-spacing:.12em;color:#999;margin:18px 0 10px}.moveList{display:grid;gap:10px}.moveRow{display:flex;justify-content:space-between;align-items:center;gap:28px;background:#2a2a2a;border-radius:26px;padding:28px}.moveRow.hidden{opacity:.46}.moveRow.hidden .moveItemName{text-decoration:line-through}.moveItemName{font-size:20px;line-height:1.15;font-weight:720;letter-spacing:-.02em}.moveMeta{font-size:13px;color:#999;margin-top:5px}.hideBtn{border-radius:999px;min-height:40px;padding:0 14px;border:.4px solid var(--line);background:#1b1b1b;color:#fff}.removeBtn{position:relative;overflow:hidden;border-radius:999px;min-height:40px;padding:0 14px;border:.4px solid var(--line);background:#1b1b1b;color:#fff;cursor:pointer}.removeFill{position:absolute;inset:0 auto 0 0;width:0;background:var(--danger);pointer-events:none;transition:width 0s linear}.removeLabel{position:relative;z-index:1}.addRow{display:grid;grid-template-columns:1fr auto;gap:10px;margin-top:18px}.addInput{min-height:52px;border-radius:999px;border:.4px solid var(--line);background:#151515;color:#fff;padding:0 18px;font-size:16px}.addBtn{border-radius:999px;min-height:52px;padding:0 18px;border:0;background:#efefef;color:#090909;font-weight:760}.routineSummary{margin-top:18px;background:#171717;border-radius:26px;padding:16px 18px;color:#cfcfcf}.settingsHeader{display:flex;align-items:center;gap:16px;margin-bottom:30px}.back{width:58px;padding:0;font-size:30px}.settingsTitle{font-size:clamp(46px,5vw,72px);font-weight:790;letter-spacing:-.05em}.tabs.rubberTabs{position:relative;display:inline-flex;gap:0;padding:4px;margin-bottom:22px;border-radius:16px;background:#171717;border:.4px solid var(--line);overflow:hidden}.rubberIndicator{position:absolute;top:4px;left:4px;height:calc(100% - 8px);width:0;border-radius:16px;background:#efefef;transition:left .34s cubic-bezier(.2,1.35,.4,1),width .34s cubic-bezier(.2,1.35,.4,1),transform .18s ease;transform-origin:center;z-index:0}.tabs.rubberTabs .tab{position:relative;z-index:1;min-height:52px;padding:0 20px;border:0;background:transparent;color:var(--text);font-weight:680}.tabs.rubberTabs .tab.active{color:#090909}#app.light .tabs.rubberTabs{background:#ffffffb3;border-color:#fff}#app.light .rubberIndicator{background:#222}#app.light .tabs.rubberTabs .tab.active{color:#fff!important}.settingsPane{display:none}.settingsPane.active{display:block}.integrationList,.toggleList{display:grid;gap:12px}.integration,.toggleRow{display:flex;justify-content:space-between;align-items:center;gap:18px;background:#282828;border-radius:28px;padding:18px 20px}.integration strong,.toggleRow strong{font-size:20px}.status{font-size:13px;color:#999;margin-top:4px}.note{color:#999;line-height:1.5;max-width:860px}.switch{position:relative;width:58px;height:34px;border-radius:999px;background:#444;border:.4px solid var(--line);flex:0 0 auto;cursor:pointer}.switch:after{content:"";position:absolute;width:26px;height:26px;border-radius:999px;top:3px;left:3px;background:#ddd;transition:left .18s ease}.switch.on{background:#eee}.switch.on:after{left:28px;background:#111}.themeChoice{display:flex;gap:12px;flex-wrap:wrap;align-items:center;margin:0}.themeBtn{min-height:40px;padding:0 14px;border:.4px solid var(--line);background:#1b1b1b;color:var(--text);cursor:pointer}.themeBtn.active{background:#efefef;color:#090909}.settingsSelect{min-width:120px;min-height:40px;padding:0 34px 0 12px;border-radius:16px;border:.4px solid var(--line);background:#1b1b1b;color:var(--text);font:inherit}#app.light .settingsSelect{background:#ffffffe0;color:#222;border-color:#fff}.motionControlRow{align-items:center}.motionRangeWrap{display:flex;align-items:center;justify-content:flex-end;gap:12px;min-width:230px}.motionRangeWrap input{width:160px}.motionRangeWrap span{font-size:13px;color:var(--muted);min-width:64px;text-align:right}#app.light .themeBtn.active{background:#222;color:#fff!important}.dangerText{color:#f77}.confirmBackdrop{display:none;position:fixed;top:0;right:0;bottom:0;left:0;z-index:80;padding:28px;background:#000000a8;align-items:center;justify-content:center}.confirmBackdrop.open{display:flex}.confirmCard{width:min(560px,100%);background:var(--card);border-radius:36px;padding:28px;border-top:.4px solid var(--line);border-left:.4px solid var(--line);border-right:.4px solid var(--line);border-bottom:.2px solid var(--lineb)}.confirmTitle{font-size:34px;line-height:1.02;font-weight:760;letter-spacing:-.04em}.confirmActions{display:flex;justify-content:flex-end;align-items:center;gap:28px;margin-top:28px}.holdDelete{position:relative;overflow:hidden;min-width:110px;min-height:52px;padding:0 22px;border:1px solid #8c2e2e;border-radius:16px;background:#311313;color:#fff;font-weight:780;cursor:pointer}.holdDeleteFill{position:absolute;inset:0 auto 0 0;width:0;background:#d53d3d;pointer-events:none}.holdDeleteLabel{position:relative;z-index:1;color:#fff}#app.light .confirmCard{background:#fffffff0;border-color:#fff}#app.light .holdDelete{background:#f5dede;border-color:#e3a0a0;color:#222}.bottomNav{position:sticky;bottom:28px;display:flex;gap:28px;z-index:100;width:max-content;margin:-82px 0 0 28px}.navBtn{width:54px;height:54px;padding:0;border-radius:20px;background:#171717;border:.4px solid var(--line);color:#fff}.navBtn.active{background:#eee;color:#090909}@media (max-width:900px){.weekCopy{white-space:normal}.moveOption,.addMoveCard{flex-basis:180px}.weekHero{display:block}.grid{grid-template-columns:1fr}.moveSection,.activityCard,.weekly,.energySection{grid-column:auto}.workGrid{grid-template-columns:1fr}.timerCard,.movementCard{min-height:320px}.weekChips{grid-template-columns:repeat(4,minmax(0,1fr))}.timeTiles{grid-template-columns:1fr}}@media (max-width:620px){.modal{width:100%;height:100%;max-height:100%}#app{padding:0}.shell{border-radius:0}.view{padding:18px 18px 94px}.card,.timerCard,.movementCard,.nextCard,.modal,.tile{border-radius:30px}.title{font-size:50px}.exerciseTitle{font-size:58px}.timerCard{min-height:280px}.digits{font-size:180px}.weekChips{grid-template-columns:repeat(2,minmax(0,1fr))}.modalBackdrop{padding:12px}.modal{height:100%}.modalStatic{padding:18px}.exerciseScroller{padding:4px 12px 18px 18px}.addRow{grid-template-columns:1fr}}button,.primary,.tab,.back,.navBtn,.themeBtn,.energyBtn,.hideBtn,.addBtn,.removeBtn,.skipBtn,.holdEnd,.switch,.editNameInput,.addInput,.rangeTrack,.progress,.progressSegment{border-radius:16px!important}.card,.panel,.tile,.workoutPanel,.timerCard,.movementCard,.nextCard,.modal{border-radius:36px}.movementCreatorLaunch{display:flex;gap:12px;align-items:center;margin:4px 0 18px}.movementCreatorOpen,.restAddBtn{min-height:44px;padding:0 16px;border-radius:16px;font-weight:680;cursor:pointer}.movementCreatorOpen{border:0;background:#efefef;color:#090909}.restAddBtn{border:.4px solid var(--line);background:#1b1b1b;color:var(--text)}.movementCreator{position:relative;margin:0 0 18px;padding:24px 28px;border-radius:28px;background:#1d1d1d;border-top:.4px solid var(--line);border-left:.4px solid var(--line);border-right:.4px solid var(--line);border-bottom:.2px solid var(--lineb)}.movementCreator[hidden]{display:none}.movementCreatorHead{display:flex;align-items:center;justify-content:space-between;gap:20px;margin-bottom:22px}.movementCreatorHead h3{margin:0;font-size:20px;line-height:1;font-weight:720;letter-spacing:-.025em}.movementCreatorClose{position:static;font-size:13px}.movementCreatorFields{display:grid;grid-template-columns:minmax(0,1.45fr) minmax(0,.85fr);gap:20px 24px}.movementCreatorFields[hidden]{display:none!important}.movementCreatorFields>label{display:grid;gap:8px;min-width:0;font-size:13px;color:var(--text);font-weight:620}.movementTimingRow{grid-column:1/-1;display:grid;grid-template-columns:minmax(300px,440px) minmax(260px,1fr) auto;gap:22px;align-items:end}.durationStack{display:grid;gap:8px;font-size:13px;color:var(--text);font-weight:620}.creatorDurationRow{display:grid;grid-template-columns:minmax(120px,1fr) minmax(130px,1fr);gap:16px;align-items:center}.creatorNumber{width:100%;min-width:0}.creatorUnitSelect{min-height:52px;width:100%;padding:0 14px;border-radius:16px;border:.4px solid var(--line);background:#151515;color:var(--text);font:inherit}.globalTimingToggle{display:flex!important;align-items:center;gap:10px!important;min-height:52px;cursor:pointer;color:var(--text)!important;font-size:13px!important;font-weight:600;white-space:nowrap}.globalTimingToggle input{position:absolute;opacity:0;pointer-events:none}.toggleTrack{position:relative;width:48px;height:28px;border-radius:999px;background:#484848;border:.4px solid var(--line);flex:0 0 auto;transition:background .16s ease}.toggleThumb{position:absolute;width:22px;height:22px;top:2px;left:2px;border-radius:50%;background:#a9a9a9;transition:left .16s ease,background .16s ease}.globalTimingToggle input:checked+.toggleTrack{background:#efefef}.globalTimingToggle input:checked+.toggleTrack .toggleThumb{left:22px;background:#111}.toggleLabel{color:#ddd}.creatorAddButton{min-width:122px;min-height:52px;align-self:end}#app.light .movementCreator{background:#ffffffdb;border-color:#fff}@media (max-width:900px){.movementCreatorFields{grid-template-columns:1fr}.movementTimingRow{grid-column:auto;grid-template-columns:1fr;align-items:stretch}.globalTimingToggle{min-height:44px}.creatorAddButton{width:100%}}.moveRow.restItem{background:#22252a;border-style:dashed}.moveRow.restItem .moveItemName{font-weight:560}.moveKindBadge{display:inline-flex;margin-left:8px;padding:3px 7px;border:1px solid #555b65;border-radius:999px;font-size:10px;color:#9da5b2;vertical-align:middle}#app.light .movementCreator{background:#ffffffd1;border-color:#fff}#app.light .restAddBtn{background:#ffffffb8;color:#222;border-color:#fff}#app.light .toggleTrack{border-color:#fff}@media (max-width:900px){.movementCreatorFields,.movementCreatorFields.restFields{grid-template-columns:1fr;padding-right:0}.movementCreatorClose{position:static;margin-left:auto;display:block;margin-bottom:16px}}.createMoveOptions{margin:0 0 18px;padding:18px;border-radius:24px;background:#242424;border:.4px solid var(--line)}.createMoveOptions[hidden]{display:none}.createOptionLabel{font-size:12px;text-transform:uppercase;letter-spacing:.12em;color:var(--muted);margin-bottom:10px}.createPresetChoice{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}.createPresetBtn{min-height:76px;padding:14px 16px;border-radius:18px;border:1px solid var(--line);background:transparent;color:var(--text);text-align:left;cursor:pointer}.createPresetBtn strong{display:block;font-size:15px}.createPresetBtn span{display:block;color:var(--muted);font-size:12px;margin-top:4px}.createPresetBtn.active{background:#efefef;color:#090909;border-color:#efefef}.createPresetBtn.active span{color:#575757}.createExtras{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px;margin-top:12px}.createExtraToggle{display:flex;align-items:flex-start;gap:10px;padding:12px 14px;border:1px solid var(--line);border-radius:18px;cursor:pointer}.createExtraToggle input{margin-top:3px}.createExtraToggle span{display:grid;gap:3px}.createExtraToggle strong{font-size:14px}.createExtraToggle small{font-size:11px;color:var(--muted)}.creatorUnitSelect{min-height:52px;padding:0 12px;border-radius:16px;border:.4px solid var(--line);background:#171717;color:var(--text);font:inherit}.autoRestSummary{display:inline-flex;align-items:center;gap:8px;margin-left:8px;color:#9da5b2;font-size:11px}#app.light .createMoveOptions{background:#fffc;border-color:#fff}#app.light .createPresetBtn,#app.light .createExtraToggle{border-color:#fff;color:#222}#app.light .creatorUnitSelect{background:#fff;color:#222;border-color:#fff}@media (max-width:900px){.createPresetChoice,.createExtras{grid-template-columns:1fr}}.movementDurationField{display:grid;gap:8px}.movementTimingHead{display:flex;align-items:center;justify-content:space-between;gap:12px;font-size:13px;color:var(--muted)}.globalTimingToggle{display:inline-flex!important;grid-template-columns:none!important;align-items:center;gap:7px!important;color:var(--text)!important;white-space:nowrap}.globalTimingToggle input{margin:0}.globalTimingValue{min-height:52px;display:flex;align-items:center;padding:0 14px;border-radius:16px;border:.4px solid var(--line);background:#1b1b1b;color:var(--muted);font-size:13px}.movementTypeBtn:disabled{opacity:.32;cursor:not-allowed}#app.light .globalTimingValue{background:#ffffffc2;border-color:#fff}.createFlow{display:grid;gap:12px;padding:4px 0 10px}.createFlow[hidden]{display:none}.createStep{border-radius:28px;background:#222;border-top:.4px solid var(--line);border-left:.4px solid var(--line);border-right:.4px solid var(--line);border-bottom:.2px solid var(--lineb);overflow:hidden}.createStepHeader{width:100%;min-height:72px;padding:18px 22px;border:0;background:transparent;color:var(--text);display:flex;align-items:center;justify-content:space-between;gap:24px;text-align:left;cursor:pointer}.createStepHeader:disabled{cursor:not-allowed;opacity:.42}.createStepIdentity{display:flex;align-items:center;gap:12px}.createStepIdentity strong{font-size:18px;letter-spacing:-.02em}.createStepNumber{width:28px;height:28px;border-radius:999px;display:grid;place-items:center;border:.4px solid var(--line);color:var(--muted);font-size:12px}.createStepSummary{min-width:0;color:var(--muted);font-size:13px;text-align:right}.createStepBody{display:none;padding:0 18px 18px}.createStep.active .createStepBody{display:block}.createStep.active .createStepHeader{border-bottom:.4px solid #343434}.createStepSlot{display:grid;gap:14px}.createStepFooter{display:flex;justify-content:flex-end;margin-top:18px}.createStepFooter .primary:disabled{opacity:.35;cursor:not-allowed}.modal.createMode .movementTimingRow{display:none}.modal.createMode .movementCreator{margin-bottom:10px}.modal.createMode .movementCreatorFields{grid-template-columns:minmax(0,1.4fr) minmax(0,1fr)}.modal.createMode .movementCreatorFields.restFields{grid-template-columns:1fr}.modal.createMode .movementCreatorActions{margin-top:18px}.modal.createMode .movementCreatorLaunch{margin-top:0}.modal.createMode .sectionTitle{margin-top:12px}.modal.createMode .modalStatic{padding-bottom:18px}.modal:not(.createMode) .createFlow{display:none!important}#app.light .createStep{background:#ffffffbd;border-color:#fff}#app.light .createStep.active .createStepHeader{border-bottom-color:#fff}#app.resting .movementCard{background:#ffffff0e}#app.resting .movementRippleCanvas{opacity:1}#app.light.resting .movementCard{background:#ffffff38}.nextCard .skipSessionBtn{margin-left:auto}.modal:not(.createMode) .movementCreatorLaunch{margin-top:32px}.testingFeedbackThanks{grid-area:feedback;min-height:220px;padding:24px;border:.4px solid var(--line);border-radius:20px;background:#252525;display:flex;flex-direction:column;justify-content:center;align-items:flex-start;gap:8px}.testingFeedbackThanks[hidden]{display:none}.testingFeedbackThanks strong{font-size:24px;color:#f0f0f0}.testingFeedbackThanks p{margin:0;color:#9ea5b0;font-size:13px}.testingFeedbackThanks a{color:#d6d9df;text-underline-offset:3px}#app.light .testingFeedbackThanks{background:#2a2a2a;border-color:#4a4f58}:host(:fullscreen){overflow:auto;width:100vw;height:100vh}.entitySelect{max-width:min(320px,46vw);text-overflow:ellipsis}.integration .status code{font-size:12px;padding:1px 6px;border-radius:6px;background:#ffffff14}#app.light .integration .status code{background:#0000000f}.integration .pill[disabled]{cursor:default;opacity:.7}#app :focus{outline:none}#app :focus-visible{outline:3px solid #D0FF00;outline-offset:3px}#app .workoutPanel:focus-visible{outline-offset:-3px}#app.light :focus-visible{outline-color:#3458d4}@media (max-width:620px){.bottomNav{margin-left:18px}}.shell:has(.countdown.active) .bottomNav{visibility:hidden}@media (max-width:900px){.workoutPanel:not(.active):not(.addPanel) .panelExpanded{opacity:1;filter:none;pointer-events:auto}}.grid>*{min-width:0}', Si = `<main id="app"><div class="shell">
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
    <section class="card activityCard">
      <div class="activityHeader">
        <div class="activityIcon">⌁</div>
        <div class="activityTitle">Activity</div>
      </div>
      <div class="activityRows">
        <div class="activityRow" id="stepsRow">
          <div class="activityRowIcon">↟</div>
          <div><div class="activityRowName">Steps</div><div class="activityRowMeta" id="stepsMeta">Choose a sensor in Settings</div></div>
        </div>
        <div class="activityRow" id="sleepRow">
          <div class="activityRowIcon">☾</div>
          <div><div class="activityRowName">Sleep</div><div class="activityRowMeta" id="sleepMeta">Choose a sensor in Settings</div></div>
        </div>
        <div class="activityRow" id="weightRow">
          <div class="activityRowIcon">◇</div>
          <div><div class="activityRowName">Weight</div><div class="activityRowMeta" id="weightMeta">Choose a sensor in Settings</div></div>
        </div>
      </div>
    </section>

    <section class="card weekly">
      <div class="weekHero">
        <div>
          <div class="weekMetric">0</div>
          <div class="weekCopy">minutes of intentional movement this week</div>
        </div>
      </div>
      <div class="weekChips">
        <div class="weekChip done"><div class="weekChipTop"><strong>Mon</strong><span class="weekTick">✓</span></div><div class="weekChipTime">20 min</div><div class="weekChipMeta">moved</div></div>
        <div class="weekChip done"><div class="weekChipTop"><strong>Tue</strong><span class="weekTick">✓</span></div><div class="weekChipTime">18 min</div><div class="weekChipMeta">moved</div></div>
        <div class="weekChip"><div class="weekChipTop"><strong>Wed</strong><span></span></div><div class="weekChipTime">0 min</div><div class="weekChipMeta">moved</div></div>
        <div class="weekChip done"><div class="weekChipTop"><strong>Thu</strong><span class="weekTick">✓</span></div><div class="weekChipTime">16 min</div><div class="weekChipMeta">moved</div></div>
        <div class="weekChip done"><div class="weekChipTop"><strong>Fri</strong><span class="weekTick">✓</span></div><div class="weekChipTime">20 min</div><div class="weekChipMeta">moved</div></div>
        <div class="weekChip"><div class="weekChipTop"><strong>Sat</strong><span></span></div><div class="weekChipTime">0 min</div><div class="weekChipMeta">moved</div></div>
        <div class="weekChip"><div class="weekChipTop"><strong>Sun</strong><span></span></div><div class="weekChipTime">0 min</div><div class="weekChipMeta">moved</div></div>
        <div class="weekChip total"><div class="weekChipTop"><strong>To date</strong><span class="weekTick">✓</span></div><div class="weekChipTime">74 min</div><div class="weekChipMeta">this week</div></div>
      </div>
    </section>

    <div class="energySection">
      <div class="sectionLabel">Personal Check-In</div>
      <section class="wellness energyFloat">
      <div class="energyQuestion">How do you feel?</div>
      <div class="energyScale" id="energyScale">
        <button class="energyBtn" data-energy="Drained"><span>Drained</span></button>
        <button class="energyBtn" data-energy="Low"><span>Low</span></button>
        <button class="energyBtn" data-energy="Okay"><span>Okay</span></button>
        <button class="energyBtn" data-energy="Good"><span>Good</span></button>
        <button class="energyBtn" data-energy="Energised"><span>Energised</span></button>
        <button class="energyBtn" data-energy="Great"><span>Great</span></button>
      </div>
<div class="energyHistory" id="energyHistory"></div>
    </section>
    </div>

  </div>
</section>

<!-- WORKOUT -->
<section class="view workoutSurface" id="workoutView"><canvas id="pixelTrailCanvas" class="pixelTrailCanvas" aria-hidden="true"></canvas><div class="workoutContent">
  <div class="countdown" id="countdown"><canvas class="pixelCanvas" id="countdownPixelCanvas" aria-hidden="true"></canvas><div class="countNum" id="countNum">5</div></div>
  <div class="sessionHead">
    <div><div class="eyebrow" id="stepLabel">Step</div><div class="exerciseTitle" id="exerciseTitle">Standing reach</div><div class="meta" id="exerciseMeta">Warm-up · controlled movement</div></div>
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
    <button class="tab" data-pane="appearancePane">Appearance</button>
  </div>

  <div class="settingsPane active" id="integrationsPane">
    <section class="card">
      <h2 style="font-size:34px;margin:0 0 12px">Connected sources</h2>
      <p class="note">Move Assistant can work on its own. Pick sensors from Home Assistant to fill the Activity card.</p>
      <div class="integrationList">
        <div class="integration"><div><strong>Steps</strong><div class="status" id="stepsStatus" data-empty="Your phone's step sensor from the Companion app">Your phone's step sensor from the Companion app</div></div><select class="settingsSelect entitySelect" id="stepsEntity" data-kind="steps" aria-label="Steps sensor"></select></div>
        <div class="integration"><div><strong>Sleep</strong><div class="status" id="sleepStatus" data-empty="Any sensor that reports sleep duration">Any sensor that reports sleep duration</div></div><select class="settingsSelect entitySelect" id="sleepEntity" data-kind="sleep" aria-label="Sleep sensor"></select></div>
        <div class="integration"><div><strong>Weight</strong><div class="status" id="weightStatus" data-empty="A smart scale or an input number you update">A smart scale or an input number you update</div></div><select class="settingsSelect entitySelect" id="weightEntity" data-kind="weight" aria-label="Weight sensor"></select></div>
        <div class="integration"><div><strong>Home Assistant</strong><div class="status">Moves send a <code>move_assistant</code> event on start, each step, rest, pause and finish — use it in automations for lights, sound and displays</div></div><button class="pill" type="button" disabled>Connected</button></div>
      </div>
    </section>
  </div>

  <div class="settingsPane" id="dataPane">
    <section class="card">
      <h2 style="font-size:34px;margin:0 0 12px">Wellness data</h2>
      <p class="note">Choose what appears in Move Assistant. Turning these off does not affect move playback.</p>
      <div class="toggleList">
        <div class="toggleRow"><div><strong>Energy check-in</strong><div class="status">Show subjective feeling tracking</div></div><button class="switch on" data-toggle="energy"></button></div>
        <div class="toggleRow"><div><strong>Steps</strong><div class="status">Daily step count</div></div><button class="switch on" data-toggle="steps"></button></div>
        <div class="toggleRow"><div><strong>Sleep</strong><div class="status">Latest sleep duration</div></div><button class="switch on" data-toggle="sleep"></button></div>
        <div class="toggleRow"><div><strong>Weight</strong><div class="status">Latest scale reading</div></div><button class="switch on" data-toggle="weight"></button></div>
      </div>
    </section>
  </div>

  <div class="settingsPane" id="appearancePane">
    <section class="card">
      <h2 style="font-size:34px;margin:0 0 12px">Appearance</h2>
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
            <div class="timeLabel">Total time</div>
            <div class="timeValue" id="totalOut">20 min</div>
          </div>
        </div>
        <div class="rangeTrack">
          <div class="rangeFill" id="totalFill"></div>
          <input class="rangeInput" id="totalTime" type="range" min="10" max="40" step="5" value="20" aria-label="Total move time">
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
function Ti(p, g) {
  const i = (e) => p.getElementById(e), M = i("workoutView"), S = i("workoutNameInput");
  let _ = !0;
  const qt = i("homeClock");
  function Ht() {
    qt && (qt.textContent = new Intl.DateTimeFormat(void 0, { hour: "2-digit", minute: "2-digit" }).format(/* @__PURE__ */ new Date()));
  }
  Ht(), setInterval(Ht, 15e3);
  const Wt = i("createFlow"), Sn = i("createMovementsSlot"), Tn = i("createTimingSlot"), _t = i("createFinishSlot"), Mn = i("movementStepSummary"), En = i("timingStepSummary"), Ln = i("finishStepSummary"), ct = i("continueToTiming"), Rn = i("continueToFinish"), Fn = i("finishMoveButton");
  let pt = !1, Ke = [];
  function Pn(e) {
    !e || Ke.some((t) => t.node === e) || Ke.push({ node: e, parent: e.parentNode, next: e.nextSibling });
  }
  function Ye(e, t) {
    e && (Pn(e), t.appendChild(e));
  }
  function Bn() {
    [...Ke].reverse().forEach(({ node: e, parent: t, next: n }) => {
      t && (n && n.parentNode === t ? t.insertBefore(e, n) : t.appendChild(e));
    }), Ke = [];
  }
  function ue(e) {
    p.querySelectorAll(".createStep").forEach((t) => {
      t.classList.toggle("active", t.dataset.createStep === e);
    }), e === "timing" && (pt = !0), X();
  }
  function X() {
    var d, v;
    if (!E) return;
    f[b];
    const e = L.filter((T) => !T.hidden), t = e.filter((T) => T.kind !== "rest").length, n = e.filter((T) => T.kind === "rest").length;
    Mn.textContent = t ? t + " movement" + (t === 1 ? "" : "s") + (n ? " · " + n + " rest" + (n === 1 ? "" : "s") : "") : "No movements yet";
    const a = t > 0, o = p.querySelector('[data-open-step="timing"]'), r = p.querySelector('[data-open-step="finish"]');
    o.disabled = !a, ct.disabled = !a, En.textContent = a ? me(k.value) + " · " + D(h.value) + " movement · " + D(w.value) + " rest" : "Add a movement first", r.disabled = !(a && pt);
    const s = ((S == null ? void 0 : S.value) || "").trim(), l = [];
    (d = i("includeWarmupPreset")) != null && d.checked && l.push("warm-up"), (v = i("includeCooldownPreset")) != null && v.checked && l.push("cooldown"), Ln.textContent = s ? s + (l.length ? " · " + l.join(" + ") : "") : l.length ? l.join(" + ") : "Name and optional extras";
  }
  function zn() {
    var x, P, q;
    Wt.hidden = !1, pt = !1;
    const e = p.querySelector(".editNameRow"), t = i("createMoveOptions"), n = p.querySelector(".timeTiles"), a = i("routineSummaryModal"), o = p.querySelector(".tempoRevealRow"), r = i("tempoExperiment"), s = (x = i("warmupList")) == null ? void 0 : x.closest("section"), l = i("movementCreatorLaunch"), d = i("movementCreator"), v = (P = i("strengthList")) == null ? void 0 : P.closest("section"), T = (q = i("cooldownList")) == null ? void 0 : q.closest("section");
    [s, l, d, v, T].forEach((V) => Ye(V, Sn)), [t, n, a, o, r].forEach((V) => Ye(V, Tn)), Ye(e, _t);
    const c = t == null ? void 0 : t.querySelector(".createExtras");
    c && Ye(c, _t), ue("movements"), X();
  }
  function An() {
    Bn(), Wt.hidden = !0, p.querySelectorAll(".createStep").forEach((e) => e.classList.remove("active"));
  }
  p.querySelectorAll("[data-open-step]").forEach((e) => e.addEventListener("click", () => {
    e.disabled || ue(e.dataset.openStep);
  })), ct.addEventListener("click", () => {
    ct.disabled || ue("timing");
  }), Rn.addEventListener("click", () => ue("finish")), Fn.addEventListener("click", () => i("saveWorkoutEdit").click());
  const ze = { home: i("homeView"), workout: i("workoutView"), settings: i("settingsView") }, Ot = i("homeNav"), Gt = i("settingsNav");
  function ut(e) {
    Object.entries(ze).forEach(([t, n]) => n.classList.toggle("active", t === e)), Ot.classList.toggle("active", e === "home"), Gt.classList.toggle("active", e === "settings"), e === "settings" && requestAnimationFrame(() => Ue(p.querySelector(".tab.active"), !1));
  }
  const k = i("totalTime"), h = i("workTime"), w = i("restTime"), jt = i("totalOut"), Zt = i("workOut"), Vt = i("restOut"), Nn = i("totalFill"), In = i("workFill"), Dn = i("restFill"), qn = i("routineSummaryModal"), gt = [
    { id: "standing-reach", name: "Standing reach", group: "Warm-up", kind: "warmup", hidden: !1 },
    { id: "arm-circles", name: "Arm circles", group: "Warm-up", kind: "warmup", hidden: !1 },
    { id: "hip-hinge", name: "Hip hinge drill", group: "Warm-up", kind: "warmup", hidden: !1 }
  ];
  let ae = gt.map((e) => ({ ...e })), L = [
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
  const mt = [
    { id: "hip-flexor", name: "Hip flexor stretch", group: "Cooldown", kind: "cooldown", hidden: !1 },
    { id: "chest-opener", name: "Chest opener", group: "Cooldown", kind: "cooldown", hidden: !1 },
    { id: "hamstring", name: "Hamstring stretch", group: "Cooldown", kind: "cooldown", hidden: !1 },
    { id: "slow-breathing", name: "Slow breathing", group: "Cooldown", kind: "cooldown", hidden: !1 }
  ];
  let oe = mt.map((e) => ({ ...e }));
  const Hn = {
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
  }, y = Ut(g.data), f = y.profiles;
  let b = f[y.selected] ? y.selected : y.order.find((e) => f[e]) || "kettlebell";
  function Ut(e) {
    const t = e && typeof e == "object" ? JSON.parse(JSON.stringify(e)) : {}, n = t.profiles && Object.keys(t.profiles).length ? t.profiles : JSON.parse(JSON.stringify(Hn)), a = (Array.isArray(t.order) ? t.order : Object.keys(n)).filter((o) => n[o]);
    return Object.keys(n).forEach((o) => {
      a.includes(o) || a.push(o);
    }), {
      v: 1,
      profiles: n,
      order: a,
      selected: t.selected || a[0],
      history: Array.isArray(t.history) ? t.history : [],
      energy: Array.isArray(t.energy) ? t.energy : [],
      settings: { ...t.settings || {} }
    };
  }
  function Ae() {
    E || (y.selected = b, y.order = y.order.filter((e) => f[e] && e !== re), g.save(y));
  }
  function I() {
    return y.settings;
  }
  function K(e) {
    const t = f[e];
    if (!t) return;
    b = e;
    const n = i("workoutNameInput");
    n && (n.value = t.name), k.value = t.total, h.value = t.work, w.value = t.rest, t.customSequence ? (ae = [], oe = [], L = (t.sequence || []).map((a) => ({ ...a })), bt(t.preset || "movement", !1)) : (k.min = 10, k.max = 40, k.step = 5, h.min = 20, h.max = 60, h.step = 5, w.min = 5, w.max = 30, w.step = 5, ae = (t.warmup || gt).map((a) => ({ ...a })), oe = (t.cooldown || mt).map((a) => ({ ...a })), L = t.strength.map(([a, o, r, s = !1]) => ({ id: a, name: o, group: r, kind: "work", hidden: !!s }))), p.querySelectorAll(".workoutPanel[data-workout]").forEach((a) => a.classList.toggle("active", a.dataset.workout === e)), A();
  }
  function Wn(e, t, n) {
    const a = e.getBoundingClientRect(), o = a.width / 2, r = a.height / 2, s = t - o, l = n - r;
    let d = 1 / 0, v = 1 / 0;
    s !== 0 && (d = o / Math.abs(s)), l !== 0 && (v = r / Math.abs(l));
    const T = Math.min(Math.max(1 / Math.min(d, v), 0), 1);
    let c = Math.atan2(l, s) * (180 / Math.PI) + 90;
    return c < 0 && (c += 360), { edge: T, angle: c };
  }
  function ft(e, t, n = !1) {
    const a = e.getBoundingClientRect(), o = t.clientX - a.left, r = t.clientY - a.top, { edge: s, angle: l } = Wn(e, o, r), d = n ? 100 : s * 100;
    e.style.setProperty("--edge-proximity", d.toFixed(3)), e.style.setProperty("--cursor-angle", l.toFixed(3) + "deg"), e.classList.toggle("borderGlowActive", n || d >= 30);
  }
  function Kt(e) {
    e.addEventListener("pointermove", (n) => ft(e, n, !1)), e.addEventListener("pointerenter", (n) => ft(e, n, !1)), e.addEventListener("pointerdown", (n) => ft(e, n, !0));
    const t = () => {
      e.classList.remove("borderGlowActive"), e.style.setProperty("--edge-proximity", "0");
    };
    e.addEventListener("pointerleave", t), e.addEventListener("pointerup", t), e.addEventListener("pointercancel", t);
  }
  Kt(i("addWorkoutPanel"));
  let E = !1, re = null;
  function z(e) {
    return String(e ?? "").replace(/[&<>"']/g, (t) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[t]);
  }
  function _n(e) {
    return e.summary ? e.summary : e.customSequence ? me(e.total) + " · custom move" : me(e.total) + " · " + D(e.work) + " / " + D(e.rest) + " · warm-up + cooldown";
  }
  function vt(e, t) {
    var s;
    const n = document.createElement("article");
    n.className = "workoutPanel", n.dataset.workout = e, n.tabIndex = 0;
    const a = t.eyebrow === void 0 ? "Movement" : t.eyebrow, o = t.activityCount ?? (((s = t.sequence) == null ? void 0 : s.length) || 0);
    n.innerHTML = '<span class="edgeLight" aria-hidden="true"></span><div class="panelExpanded"><div><div class="workoutPanelTop"><div>' + (a ? '<div class="eyebrow">' + z(a) + "</div>" : "") + '<div class="workoutName">' + z(t.name) + '</div><div class="sub">' + z(_n(t)) + '</div><span class="sourceTag">' + z(t.source || "Custom move") + '</span></div><button class="pill seeWorkoutBtn" type="button">Edit</button></div></div><div class="workoutFooter"><div><strong class="activityCount">' + (o ? o + " activities" : "—") + '</strong></div><div class="workoutPanelActions"><button class="primary startWorkoutBtn" type="button">Start move</button></div></div></div><div class="panelCollapsed"><div class="panelCollapsedText">' + z(t.name) + "</div></div>";
    const r = i("addWorkoutPanel");
    return i("workoutGallery").insertBefore(n, r), Kt(n), n.addEventListener("click", (l) => {
      l.target.closest("button") || K(e);
    }), n.addEventListener("keydown", (l) => {
      (l.key === "Enter" || l.key === " ") && !l.target.closest("button") && (l.preventDefault(), K(e));
    }), n.querySelector(".seeWorkoutBtn").addEventListener("click", (l) => {
      l.stopPropagation(), K(e), tn(!1);
    }), n.querySelector(".startWorkoutBtn").addEventListener("click", (l) => {
      l.stopPropagation(), K(e), ci();
    }), n;
  }
  function Yt() {
    p.querySelectorAll(".workoutPanel[data-workout]").forEach((e) => e.remove()), y.order.forEach((e) => {
      f[e] && vt(e, f[e]);
    }), p.querySelectorAll(".workoutPanel[data-workout]").forEach((e) => e.classList.toggle("active", e.dataset.workout === b));
  }
  Yt(), i("addWorkoutPanel").addEventListener("keydown", (e) => {
    (e.key === "Enter" || e.key === " ") && (e.preventDefault(), i("addWorkoutPanel").click());
  }), i("addWorkoutPanel").addEventListener("click", () => {
    E = !0, re = "custom-" + Date.now(), f[re] = {
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
    }, K(re), tn(!0);
  });
  let u = [], m = 0, W = 0, Je = 1, B = !1, R = null, Qe = null, F = !1, ge = y.settings.upcomingCount ?? "all";
  function ht(e, t, n) {
    return (Number(e) - t) / (n - t) * 100;
  }
  function D(e) {
    const t = Math.max(0, Number(e) || 0);
    return t >= 3600 && t % 3600 === 0 ? t / 3600 + " hr" : t >= 60 && t % 60 === 0 ? t / 60 + " min" : t >= 60 ? Math.round(t / 60) + " min" : Math.round(t) + " sec";
  }
  function me(e) {
    const t = Math.max(0, Number(e) || 0);
    return t >= 60 && t % 60 === 0 ? t / 60 + " hr" : t >= 60 ? Math.floor(t / 60) + " hr " + t % 60 + " min" : t + " min";
  }
  function Xe() {
    Nn.style.width = ht(k.value, Number(k.min), Number(k.max)) + "%", In.style.width = ht(h.value, Number(h.min), Number(h.max)) + "%", Dn.style.width = ht(w.value, Number(w.min), Number(w.max)) + "%", jt.textContent = me(k.value), Zt.textContent = D(h.value), Vt.textContent = D(w.value);
  }
  function xt(e) {
    return e.filter((t) => !t.hidden);
  }
  function Jt(e, t) {
    const n = Math.max(0, Number(e) || 0);
    return Math.round(t === "hour" ? n * 3600 : t === "min" ? n * 60 : n);
  }
  function bt(e, t = !0) {
    p.querySelectorAll(".createPresetBtn").forEach((a) => a.classList.toggle("active", a.dataset.movePreset === e));
    const n = f[b];
    n && (n.preset = e), e === "work" ? (k.min = 30, k.max = 480, k.step = 30, h.min = 300, h.max = 7200, h.step = 300, w.min = 60, w.max = 1800, w.step = 60, t && (k.value = 60, h.value = 1500, w.value = 300), i("addMovementUnit").value = "min", i("addMovementDuration").value = 25, i("addRestUnit").value = "min", i("addRestDuration").value = 5) : (k.min = 10, k.max = 40, k.step = 5, h.min = 20, h.max = 60, h.step = 5, w.min = 5, w.max = 30, w.step = 5, t && (k.value = 20, h.value = 45, w.value = 15), i("addMovementUnit").value = "sec", i("addMovementDuration").value = 45, i("addRestUnit").value = "sec", i("addRestDuration").value = 30), Xe();
  }
  function Qt() {
    const e = f[b];
    if (e != null && e.customSequence) {
      if (L = L.filter((t) => !t.presetRole), i("includeWarmupPreset").checked ? (L = [...gt.map((n, a) => ({ ...n, id: "preset-warm-" + a + "-" + Date.now(), kind: "work", duration: Number(h.value), presetRole: "warmup" })), ...L], e.includeWarmup = !0) : e.includeWarmup = !1, i("includeCooldownPreset").checked) {
        const t = mt.map((n, a) => ({ ...n, id: "preset-cool-" + a + "-" + Date.now(), kind: "work", duration: Number(h.value), presetRole: "cooldown" }));
        L = [...L, ...t], e.includeCooldown = !0;
      } else e.includeCooldown = !1;
      A();
    }
  }
  function On() {
    const e = i("upcomingCountSetting");
    if (!e) return;
    const t = Math.max(1, u.length - 1), n = ge;
    e.innerHTML = "";
    for (let r = 1; r <= t; r++) {
      const s = document.createElement("option");
      s.value = String(r), s.textContent = String(r), e.appendChild(s);
    }
    const a = document.createElement("option");
    a.value = "all", a.textContent = "All", e.appendChild(a);
    const o = n === "all" ? "all" : String(Math.min(Number(n) || 1, t));
    e.value = o, ge = o === "all" ? "all" : Number(o);
  }
  function A() {
    const e = Number(k.value) * 60, t = Number(h.value), n = Number(w.value), a = xt(ae), o = xt(L), r = xt(oe), s = f[b];
    if (s && (s.total = Number(k.value), s.work = t, s.rest = n, s.customSequence ? s.sequence = L.map((c) => ({ ...c })) : (s.strength = L.map((c) => [c.id, c.name, c.group, !!c.hidden]), s.warmup = ae.map((c) => ({ ...c })), s.cooldown = oe.map((c) => ({ ...c })))), s != null && s.customSequence) {
      const c = o.map((x) => {
        if (x.kind === "rest") {
          const q = x.useGlobalTiming === !0 ? n : Number(x.duration) || n;
          return { ...x, duration: q, rest: 0 };
        }
        const P = x.useGlobalTiming === !1 && Number(x.duration) || t;
        return { ...x, duration: P, rest: 0 };
      });
      s.autoRest && Number(s.autoRestDuration) > 0 ? (u = [], c.forEach((x, P) => {
        u.push(x);
        const q = c[P + 1];
        x.kind !== "rest" && q && q.kind !== "rest" && u.push({
          id: "auto-rest-" + P,
          name: "Rest",
          group: "Rest",
          kind: "rest",
          hidden: !1,
          duration: Number(s.autoRestDuration),
          rest: 0,
          autoGenerated: !0
        });
      })) : u = c;
    } else {
      const c = a.length + r.length;
      let x = o.length ? 1 : 0, P = 1 / 0;
      const q = 80;
      for (let C = o.length ? 1 : 0; C <= q; C++) {
        const H = c + C;
        if (H <= 0) continue;
        const ie = H * t + Math.max(0, H - 1) * n, U = e - ie, pe = t + U;
        pe < 15 || pe > 120 || Math.abs(U) < Math.abs(P) && (P = U, x = C);
      }
      if (P === 1 / 0) {
        const C = Math.max(c + (o.length ? 1 : 0), Math.round((e + n) / (t + n)));
        x = Math.max(o.length ? 1 : 0, C - c);
      }
      const V = [];
      for (let C = 0; C < x; C++) {
        const H = o[C % Math.max(1, o.length)];
        H && V.push({ ...H, duration: t, rest: n });
      }
      if (u = [
        ...a.map((C) => ({ ...C, duration: t, rest: n })),
        ...V,
        ...r.map((C) => ({ ...C, duration: t, rest: n }))
      ], u.length) {
        const C = u.reduce((ie, U) => ie + U.duration, 0) + Math.max(0, u.length - 1) * n, H = e - C;
        u[u.length - 1].duration = Math.max(15, u[u.length - 1].duration + H), u.forEach((ie, U) => ie.rest = U < u.length - 1 ? n : 0);
      }
    }
    Xe();
    const l = u.reduce((c, x) => c + x.duration + x.rest, 0), d = Math.round(l / 60), v = s != null && s.customSequence ? me(d) + " · " + u.length + " items" : me(d) + " · " + D(t) + " / " + D(n) + " · warm-up + cooldown";
    s && (s.summary = v, s.activityCount = u.length);
    const T = p.querySelector(".workoutPanel.active .sub");
    T && (T.textContent = v), qn.textContent = v, p.querySelectorAll(".workoutPanel.active .activityCount").forEach((c) => c.textContent = u.length + " activities"), Xe(), Gn(), yt(), fe(), On(), E && X(), ze.workout.classList.contains("active") && !R && mn();
  }
  function wt(e, t) {
    const n = i(t);
    n.innerHTML = "", e.forEach((a) => {
      const o = document.createElement("div");
      o.className = "moveRow" + (a.hidden ? " hidden" : "") + (a.kind === "rest" ? " restItem" : "");
      const s = " · " + (a.kind === "rest" ? a.useGlobalTiming === !0 ? "Global timing" : D(a.duration) : a.useGlobalTiming === !1 ? D(a.duration) : "Global timing"), l = a.kind === "rest" ? '<span class="moveKindBadge">Rest</span>' : "";
      o.innerHTML = '<div><div class="moveItemName">' + a.name + l + '</div><div class="moveMeta">' + a.group + s + '</div></div><div style="display:flex;gap:8px"><button class="hideBtn">' + (a.hidden ? "Show" : "Hide") + '</button><button class="removeBtn" type="button" aria-label="Hold to remove ' + z(a.name) + '"><span class="removeFill"></span><span class="removeLabel">Remove</span></button></div>', o.querySelector(".hideBtn").addEventListener("click", () => {
        a.hidden = !a.hidden, A();
      });
      const d = o.querySelector(".removeBtn");
      At(d, d.querySelector(".removeFill"), 1500, () => {
        const v = e.indexOf(a);
        v > -1 && e.splice(v, 1), A(), O("Removed " + a.name);
      }), n.appendChild(o);
    });
  }
  function Gn() {
    var o, r, s, l;
    const e = f[b], t = (o = i("warmupList")) == null ? void 0 : o.closest("section"), n = (r = i("cooldownList")) == null ? void 0 : r.closest("section"), a = (l = (s = i("strengthList")) == null ? void 0 : s.closest("section")) == null ? void 0 : l.querySelector(".sectionTitle");
    e != null && e.customSequence ? (t && (t.hidden = !0), n && (n.hidden = !0), a && (a.textContent = "Move sequence")) : (t && (t.hidden = !1), n && (n.hidden = !1), a && (a.textContent = "Kettlebell work")), wt(ae, "warmupList"), wt(L, "strengthList"), wt(oe, "cooldownList");
  }
  function yt() {
    L.length > 0;
    const e = i("addMovementBtn"), t = i("addRestBtn");
    e && (e.textContent = "Add movement"), t && (t.textContent = "Add rest");
  }
  function fe() {
    const e = i("useGlobalTiming").checked, t = i("addMovementDuration"), n = i("addMovementUnit");
    t.disabled = e, n.disabled = e, t.parentElement.style.opacity = e ? ".38" : "1", i("globalTimingValue").textContent = "Use global timing · " + D(h.value);
    const a = i("useGlobalRestTiming").checked, o = i("addRestDuration"), r = i("addRestUnit");
    o.disabled = a, r.disabled = a, o.parentElement.style.opacity = a ? ".38" : "1", i("globalRestTimingValue").textContent = "Use global timing · " + D(w.value);
  }
  let Xt = "movement";
  function kt(e) {
    Xt = e;
    const t = i("movementFields"), n = i("restFields");
    t.hidden = e !== "movement", n.hidden = e !== "rest", i("movementCreatorHeading").textContent = e === "rest" ? "Add rest" : "Add movement", i("movementCreator").setAttribute("aria-label", e === "rest" ? "Create rest" : "Create movement"), fe();
  }
  function Ct() {
    f[b];
    const e = E ? !0 : i("useGlobalTiming").checked, t = e ? Number(h.value) : Jt(
      i("addMovementDuration").value,
      i("addMovementUnit").value
    ), n = E ? !0 : i("useGlobalRestTiming").checked, a = n ? Number(w.value) : Jt(
      i("addRestDuration").value,
      i("addRestUnit").value
    );
    if (Xt === "rest") {
      const o = i("addRestTitle").value.trim() || "Rest", r = i("addRestGroup").value.trim() || "Rest";
      L.push({
        id: "rest-" + Date.now(),
        name: o,
        group: r,
        kind: "rest",
        hidden: !1,
        useGlobalTiming: n,
        duration: Math.max(5, a || Number(w.value))
      }), A(), i("movementCreator").hidden = !0, i("addRestTitle").value = "Rest", i("addRestGroup").value = "Rest", O("Rest added"), E && (ue("movements"), X());
    } else {
      const o = i("addMovementInput").value.trim();
      if (!o) return;
      const r = i("addMovementGroup").value.trim() || "Movement";
      L.push({
        id: "movement-" + Date.now(),
        name: o,
        group: r,
        kind: "work",
        hidden: !1,
        useGlobalTiming: e,
        duration: Math.max(5, t || Number(h.value))
      }), i("addMovementInput").value = "", i("addMovementGroup").value = "", A(), i("movementCreator").hidden = !0, O("Movement added"), E && (ue("movements"), X());
    }
    yt();
  }
  let $t = null;
  function O(e) {
    const t = i("toast");
    t.textContent = e, t.classList.add("show"), clearTimeout($t), $t = setTimeout(() => t.classList.remove("show"), 2200);
  }
  function jn(e, t) {
    p.querySelectorAll(".energyBtn").forEach((o) => {
      o.classList.remove("selected"), o !== t && (o.style.setProperty("--feel-x", "50%"), o.style.setProperty("--feel-y", "50%"), o.style.setProperty("--feel-shift-x", "0px"), o.style.setProperty("--feel-shift-y", "0px"));
    }), t && t.classList.add("selected");
    const n = /* @__PURE__ */ new Date(), a = new Intl.DateTimeFormat(void 0, { hour: "2-digit", minute: "2-digit" }).format(n);
    y.energy.unshift({ value: e, at: n.toISOString() }), y.energy = y.energy.slice(0, 1e3), Ae(), g.fire("energy", { value: e }), O(e + " logged · " + a), St();
  }
  function St() {
    const e = i("energyHistory");
    e.innerHTML = "";
    const t = (/* @__PURE__ */ new Date()).toDateString();
    y.energy.slice(0, 3).forEach((n) => {
      const a = new Date(n.at), o = new Intl.DateTimeFormat(void 0, a.toDateString() === t ? { hour: "2-digit", minute: "2-digit" } : { weekday: "short", hour: "2-digit", minute: "2-digit" }).format(a), r = document.createElement("div");
      r.className = "energyLog", r.innerHTML = "<span>" + z(n.value) + "</span><span>" + z(o) + "</span>", e.appendChild(r);
    });
  }
  St(), p.querySelectorAll(".energyBtn").forEach((e) => {
    const t = (n) => {
      const a = e.getBoundingClientRect(), o = Math.max(0, Math.min(1, (n.clientX - a.left) / a.width)), r = Math.max(0, Math.min(1, (n.clientY - a.top) / a.height));
      e.style.setProperty("--feel-x", (o * 100).toFixed(2) + "%"), e.style.setProperty("--feel-y", (r * 100).toFixed(2) + "%"), e.style.setProperty("--feel-shift-x", ((o - 0.5) * 8).toFixed(2) + "px"), e.style.setProperty("--feel-shift-y", ((r - 0.5) * 5).toFixed(2) + "px");
    };
    e.addEventListener("pointermove", t), e.addEventListener("pointerenter", t), e.addEventListener("pointerdown", t), e.addEventListener("pointerleave", () => {
      e.classList.contains("selected") || (e.style.setProperty("--feel-x", "50%"), e.style.setProperty("--feel-y", "50%"), e.style.setProperty("--feel-shift-x", "0px"), e.style.setProperty("--feel-shift-y", "0px"));
    }), e.addEventListener("click", () => jn(e.dataset.energy, e));
  });
  const $e = i("upcomingCountSetting");
  $e.addEventListener("change", () => {
    ge = $e.value === "all" ? "all" : Number($e.value), un();
  });
  const Ne = i("tempoRevealBtn"), Tt = i("tempoExperiment"), G = i("tempoQuad"), ve = i("tempoDot"), Zn = i("tempoEstimate"), Vn = i("tempoReadout");
  let he = { x: 0.5, y: 0.5 }, Ie = !1, et = { total: 20, work: 45, rest: 15 };
  function Mt(e, t, n, a) {
    const o = Math.max(t, Math.min(n, e));
    return Math.round((o - t) / a) * a + t;
  }
  function Un(e, t) {
    const n = (e - 0.5) * 2, a = (t - 0.5) * 2, o = Mt(
      et.total + n * 5 + a * 8,
      Number(k.min),
      Number(k.max),
      Number(k.step)
    ), r = Mt(
      et.work + n * 10 + a * 8,
      Number(h.min),
      Number(h.max),
      Number(h.step)
    ), s = Mt(
      et.rest + n * 6 + a * 6,
      Number(w.min),
      Number(w.max),
      Number(w.step)
    );
    return k.value = o, h.value = r, w.value = s, jt.textContent = o + " min", Zt.textContent = r + " sec", Vt.textContent = s + " sec", Xe(), { total: o, work: r, rest: s };
  }
  function Et(e, t) {
    const n = e < 0.34 ? "Low" : e > 0.66 ? "Hard" : "Medium", a = t < 0.34 ? "Fast" : t > 0.66 ? "Slow" : "Balanced", o = Un(e, t);
    Vn.textContent = n + " + " + a, Zn.textContent = o.total + " min", G.setAttribute("aria-valuetext", n + " and " + a + ", estimated " + o.total + " minutes");
  }
  function Lt(e) {
    const t = G.getBoundingClientRect(), n = Math.max(0, Math.min(1, (e.clientX - t.left) / t.width)), a = Math.max(0, Math.min(1, (e.clientY - t.top) / t.height));
    he = { x: n, y: a }, ve.style.left = n * 100 + "%", ve.style.top = a * 100 + "%", Et(n, a);
  }
  Ne.addEventListener("click", () => {
    const e = Tt.hidden;
    Tt.hidden = !e, Ne.setAttribute("aria-expanded", e ? "true" : "false"), Ne.textContent = e ? "Now close this" : "Don’t try this!", e && (et = {
      total: Number(k.value),
      work: Number(h.value),
      rest: Number(w.value)
    }, he = { x: 0.5, y: 0.5 }, ve.style.left = "50%", ve.style.top = "50%", Et(he.x, he.y));
  }), p.querySelectorAll("[data-feedback-rating]").forEach((e) => e.addEventListener("click", () => {
    Number(e.dataset.feedbackRating), p.querySelectorAll("[data-feedback-rating]").forEach((t) => t.classList.toggle("selected", t === e));
  }));
  const tt = i("testingFeedbackForm"), en = i("testingFeedbackThanks"), Kn = i("testingFeedbackAgain");
  tt.addEventListener("submit", (e) => {
    e.preventDefault(), tt.hidden = !0, en.hidden = !1, O("Feedback captured for prototype");
  }), Kn.addEventListener("click", (e) => {
    e.preventDefault(), tt.reset(), p.querySelectorAll("[data-feedback-rating]").forEach((t) => t.classList.remove("selected")), en.hidden = !0, tt.hidden = !1;
  }), G.addEventListener("pointerdown", (e) => {
    var t;
    Ie = !0, Lt(e);
    try {
      (t = G.setPointerCapture) == null || t.call(G, e.pointerId);
    } catch {
    }
  }), G.addEventListener("pointermove", (e) => {
    Ie && Lt(e);
  }), G.addEventListener("pointerup", (e) => {
    Ie && (Ie = !1, Lt(e), A());
  }), G.addEventListener("pointercancel", () => Ie = !1), G.addEventListener("keydown", (e) => {
    let { x: t, y: n } = he, a = !0;
    e.key === "ArrowLeft" ? t -= 0.05 : e.key === "ArrowRight" ? t += 0.05 : e.key === "ArrowUp" ? n -= 0.05 : e.key === "ArrowDown" ? n += 0.05 : a = !1, a && (e.preventDefault(), t = Math.max(0, Math.min(1, t)), n = Math.max(0, Math.min(1, n)), he = { x: t, y: n }, ve.style.left = t * 100 + "%", ve.style.top = n * 100 + "%", Et(t, n), A());
  });
  const j = i("workoutModal");
  let De = null;
  function xe(e) {
    return e.map((t) => ({ ...t }));
  }
  function Yn() {
    const e = f[b];
    return {
      key: b,
      profile: e ? JSON.parse(JSON.stringify(e)) : null,
      warmup: xe(ae),
      strength: xe(L),
      cooldown: xe(oe),
      total: Number(k.value),
      work: Number(h.value),
      rest: Number(w.value)
    };
  }
  function tn(e = !1) {
    E = !!e, De = Yn(), i("moveEditorTitle").textContent = E ? "Create new move" : "Edit move", i("moveEditorSubtitle").textContent = E ? "Build the sequence first, then set timing, then finish the move." : "Adjust timing and choose which movements are included today.", i("deleteMoveOpen").hidden = E;
    const t = i("createMoveOptions");
    if (t.hidden = !E, E) {
      i("useGlobalTiming").checked = !0, i("useGlobalRestTiming").checked = !0;
      const n = f[b];
      i("includeWarmupPreset").checked = !!(n != null && n.includeWarmup), i("includeCooldownPreset").checked = !!(n != null && n.includeCooldown), bt((n == null ? void 0 : n.preset) || "movement", !1);
    }
    i("movementCreator").hidden = !0, kt("movement"), yt(), fe(), Tt.hidden = !0, Ne.setAttribute("aria-expanded", "false"), Ne.textContent = "Don’t try this!", j.classList.toggle("createMode", E), j.classList.add("open"), j.setAttribute("aria-hidden", "false"), E && zn();
  }
  function nt() {
    j.classList.contains("createMode") && An(), j.classList.remove("createMode"), j.classList.remove("open"), j.setAttribute("aria-hidden", "true");
  }
  function nn() {
    if (!De) return;
    const e = De;
    e.profile && (f[e.key] = JSON.parse(JSON.stringify(e.profile))), b = e.key, ae = xe(e.warmup), L = xe(e.strength), oe = xe(e.cooldown), k.value = e.total, h.value = e.work, w.value = e.rest;
    const t = f[b];
    if (t) {
      p.querySelectorAll(".workoutPanel[data-workout]").forEach((a) => a.classList.toggle("active", a.dataset.workout === b));
      const n = p.querySelector(".workoutPanel.active");
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
    A();
  }
  i("cancelWorkoutEdit").addEventListener("click", () => {
    if (E) {
      const e = b;
      delete f[e], E = !1, re = null, K(y.order.find((t) => f[t]) || Object.keys(f)[0]);
    } else
      nn();
    nt();
  }), i("saveWorkoutEdit").addEventListener("click", () => {
    const e = f[b], t = S.value.trim() || "New move";
    if (e && (e.name = t), A(), E && e)
      vt(b, e), p.querySelectorAll(".workoutPanel[data-workout]").forEach((n) => n.classList.toggle("active", n.dataset.workout === b)), E = !1, re = null, y.order.includes(b) || y.order.push(b), O("Move created");
    else {
      const n = p.querySelector(".workoutPanel.active");
      if (n) {
        const a = n.querySelector(".workoutName");
        a && (a.textContent = t);
        const o = n.querySelector(".panelCollapsedText");
        o && (o.textContent = t);
      }
      O("Move saved");
    }
    De = null, nt(), Ae();
  }), j.addEventListener("click", (e) => {
    if (e.target === j) {
      if (E) {
        const t = b;
        delete f[t], E = !1, re = null, K(y.order.find((n) => f[n]) || Object.keys(f)[0]);
      } else
        nn();
      nt();
    }
  }), i("addMovementBtn").addEventListener("click", () => {
    const e = i("movementCreator");
    e.hidden = !1, kt("movement"), fe(), i("addMovementInput").focus();
  }), i("addRestBtn").addEventListener("click", () => {
    const e = i("movementCreator");
    e.hidden = !1, kt("rest"), i("addRestTitle").focus();
  }), i("closeMovementCreator").addEventListener("click", () => {
    i("movementCreator").hidden = !0;
  }), i("useGlobalTiming").addEventListener("change", fe), i("useGlobalRestTiming").addEventListener("change", fe), p.querySelectorAll(".createPresetBtn").forEach((e) => e.addEventListener("click", () => {
    bt(e.dataset.movePreset, !0), A();
  })), i("includeWarmupPreset").addEventListener("change", Qt), i("includeCooldownPreset").addEventListener("change", Qt), i("includeWarmupPreset").addEventListener("change", X), i("includeCooldownPreset").addEventListener("change", X), S.addEventListener("input", X), i("confirmAddMovement").addEventListener("click", Ct), i("confirmAddRest").addEventListener("click", Ct), i("addMovementInput").addEventListener("keydown", (e) => {
    e.key === "Enter" && Ct();
  });
  const qe = i("countdown"), Rt = i("countNum"), Y = i("countdownPixelCanvas");
  let He = null, Ft = "appear";
  class Jn {
    constructor(t, n, a, o, r, s, l) {
      this.width = t.width, this.height = t.height, this.ctx = n, this.x = a, this.y = o, this.color = r, this.speed = (Math.random() * 0.8 + 0.1) * s, this.size = 0, this.sizeStep = Math.random() * 0.4, this.minSize = 0.5, this.maxSizeInteger = 2, this.maxSize = Math.random() * (this.maxSizeInteger - this.minSize) + this.minSize, this.delay = l, this.counter = 0, this.counterStep = Math.random() * 4 + (this.width + this.height) * 0.01, this.isIdle = !1, this.isReverse = !1, this.isShimmer = !1;
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
  let Pt = [], an = 1, on = 1;
  function se() {
    const e = parseFloat(getComputedStyle(i("app")).zoom);
    return Number.isFinite(e) && e > 0 ? e : 1;
  }
  function Qn() {
    var v;
    if (!Y) return;
    const e = se(), t = Math.max(1, window.innerWidth / e), n = Math.max(1, window.innerHeight / e);
    an = t, on = n;
    const a = Math.min(window.devicePixelRatio || 1, 2);
    Y.width = Math.floor(t * a), Y.height = Math.floor(n * a), Y.style.width = t + "px", Y.style.height = n + "px";
    const o = Y.getContext("2d");
    o.setTransform(a, 0, 0, a, 0, 0);
    const r = ["#f4f5ff", "#dfe3ff", "#c9d0ff", "#aeb9ff"], s = 12, l = (v = window.matchMedia) == null ? void 0 : v.call(window, "(prefers-reduced-motion: reduce)").matches, d = l ? 0 : 0.055;
    Pt = [];
    for (let T = 0; T < t; T += s)
      for (let c = 0; c < n; c += s) {
        const x = T - t / 2, P = c - n / 2, q = Math.sqrt(x * x + P * P), V = l ? 0 : Math.random() * 75 + q * 0.05, C = new Jn({ width: t, height: n }, o, T, c, r[Math.floor(Math.random() * r.length)], d, V);
        C.maxSizeInteger = 4, C.maxSize = Math.random() * 3.2 + 0.8, C.sizeStep = 0.35 + Math.random() * 0.45, Pt.push(C);
      }
  }
  function rn(e) {
    cancelAnimationFrame(He), Ft = e;
    const t = Y == null ? void 0 : Y.getContext("2d");
    if (!t) return;
    function n() {
      t.clearRect(0, 0, an, on);
      let a = !0;
      Pt.forEach((o) => {
        o[Ft](), o.isIdle || (a = !1);
      }), Ft === "disappear" && a || (He = requestAnimationFrame(n));
    }
    He = requestAnimationFrame(n);
  }
  function it() {
    cancelAnimationFrame(He), Qn(), rn("appear"), setTimeout(() => rn("disappear"), 560);
  }
  window.addEventListener("resize", () => {
    qe.classList.contains("active") && it();
  });
  const We = i("pixelTrailCanvas"), be = We.getContext("2d");
  let J = !0, we = 0.7, ye = 600, _e = [], ke = null, $ = { x: 0, y: 0, ready: !1 };
  function sn() {
    const e = M.getBoundingClientRect(), t = se(), n = Math.min(window.devicePixelRatio || 1, 2), a = Math.max(1, e.width / t), o = Math.max(1, e.height / t);
    We.width = Math.max(1, Math.floor(a * n)), We.height = Math.max(1, Math.floor(o * n)), We.style.width = a + "px", We.style.height = o + "px", be.setTransform(n, 0, 0, n, 0, 0);
  }
  function Xn(e, t) {
    if (!J) return;
    const n = performance.now();
    $.ready || ($ = { x: e, y: t, ready: !0 });
    const a = 7;
    for (let o = 1; o <= a; o++) {
      const r = o / a;
      _e.push({
        x: $.x + (e - $.x) * r,
        y: $.y + (t - $.y) * r,
        born: n - (a - o) * 10
      });
    }
    $ = { x: e, y: t, ready: !0 };
  }
  function at(e) {
    if (ke = null, !_) return;
    if (!ze.workout.classList.contains("active")) {
      ke = requestAnimationFrame(at);
      return;
    }
    const t = M.getBoundingClientRect(), n = se();
    be.clearRect(0, 0, t.width / n, t.height / n), J && (_e = _e.filter((o) => e - o.born < ye), be.fillStyle = i("app").classList.contains("light") ? "#7c89d8" : "#f4f4f4", _e.forEach((o) => {
      const r = (e - o.born) / ye, s = (1 - r) * we, l = Math.round(o.x / 14) * 14, d = Math.round(o.y / 14) * 14;
      be.globalAlpha = Math.max(0, s);
      const v = 2 + 5 * (1 - r) * we;
      be.fillRect(l - v / 2, d - v / 2, v, v);
    }), be.globalAlpha = 1), ke = requestAnimationFrame(at);
  }
  M.addEventListener("pointermove", (e) => {
    const t = M.getBoundingClientRect(), n = se();
    Xn((e.clientX - t.left) / n, (e.clientY - t.top) / n);
  }), M.addEventListener("pointerleave", () => $.ready = !1), new ResizeObserver(sn).observe(M), sn(), ke = requestAnimationFrame(at);
  const ee = i("movementRippleCanvas"), Ce = ee.getContext("2d");
  let le = !0, Se = null, $n = performance.now();
  function ln() {
    const e = ee.parentElement.getBoundingClientRect(), t = se(), n = Math.max(1, e.width / t), a = Math.max(1, e.height / t), o = Math.min(window.devicePixelRatio || 1, 2);
    ee.width = Math.max(1, Math.floor(n * o)), ee.height = Math.max(1, Math.floor(a * o)), ee.style.width = n + "px", ee.style.height = a + "px", Ce.setTransform(o, 0, 0, o, 0, 0);
  }
  function ei() {
    const e = u[m];
    return F ? 2200 : e ? e.kind === "warmup" || e.kind === "cooldown" ? 2400 : 1350 : 1600;
  }
  function ot(e) {
    if (Se = null, !_) return;
    if (!ze.workout.classList.contains("active")) {
      Se = requestAnimationFrame(ot);
      return;
    }
    const t = ee.parentElement.getBoundingClientRect(), n = se(), a = Math.max(1, t.width / n), o = Math.max(1, t.height / n);
    if (Ce.clearRect(0, 0, a, o), le) {
      const r = ei(), s = (e - $n) % r / r, l = 15, d = Math.max(8, Math.round(l * o / Math.max(1, a))), v = a / (l + 1), T = o / (d + 1), c = a * 0.5, x = o * 0.52, P = Math.hypot(c, x), V = i("app").classList.contains("light") ? "34,34,34" : "244,244,244";
      for (let C = 1; C <= d; C++)
        for (let H = 1; H <= l; H++) {
          const ie = H * v, U = C * T, pe = Math.hypot(ie - c, U - x) / P, wi = F ? Math.exp(-Math.pow((pe - (s * 0.82 + 0.08) % 1 * 1.18) * 5.5, 2)) : 0, yi = Math.exp(-Math.pow((pe - s * 1.25) * 7, 2)), dt = F ? wi : yi, Cn = F ? 0.5 + 0.5 * Math.sin(s * Math.PI * 2 - pe * 3) ** 2 : 0.35 + 0.65 * Math.sin(s * Math.PI * 2 - pe * 5) ** 2, ki = F ? 1.4 + dt * 4.2 * Cn : 1.2 + dt * 5 * Cn;
          Ce.beginPath(), Ce.arc(ie, U, ki, 0, Math.PI * 2), Ce.fillStyle = `rgba(${V},${F ? 0.08 + dt * 0.48 : 0.05 + dt * 0.55})`, Ce.fill();
        }
    }
    Se = requestAnimationFrame(ot);
  }
  new ResizeObserver(ln).observe(ee.parentElement), ln(), Se = requestAnimationFrame(ot);
  const Oe = i("exerciseTitle"), Ge = i("exerciseMeta"), dn = i("stepLabel"), cn = i("digits"), pn = i("fill"), je = i("progress"), te = i("pause"), ti = i("nextName"), ni = i("nextMeta"), ii = i("nextIcon"), rt = i("skipNextSession");
  let N = null;
  function Q(e) {
    for (let t = Math.max(0, e); t < u.length; t++)
      if (!u[t].sessionHidden) return t;
    return -1;
  }
  function ai() {
    const e = u[m];
    if (!e) return { name: "Complete", meta: "Move finished", icon: "✓" };
    if (F) {
      const a = Q(m + 1), o = a >= 0 ? u[a] : null;
      return o ? { name: o.name, meta: o.group + " · " + o.duration + " sec", icon: o.kind === "cooldown" ? "↘" : o.kind === "warmup" ? "↗" : "●" } : { name: "Complete", meta: "Move finished", icon: "✓" };
    }
    if (e.rest > 0) return { name: "Rest", meta: e.rest + " sec · recovery", icon: "Ⅱ" };
    const t = Q(m + 1), n = t >= 0 ? u[t] : null;
    return n ? { name: n.name, meta: n.group + " · " + n.duration + " sec", icon: n.kind === "cooldown" ? "↘" : n.kind === "warmup" ? "↗" : "●" } : { name: "Complete", meta: "Move finished", icon: "✓" };
  }
  function oi() {
    if (!u[m]) return u.length;
    const t = Q(m + 1);
    return t < 0 ? u.length : t + 1;
  }
  function ri(e) {
    return e.kind === "cooldown" ? "↘" : e.kind === "warmup" ? "↗" : "●";
  }
  function si() {
    [...je.children].forEach((e, t) => {
      e.classList.toggle("done", t < m), e.classList.toggle("active", t === m), e.classList.toggle("rewindable", t <= m), e.disabled = t > m, t === m && e.style.setProperty("--segment-progress", "0%");
    }), u[m] && (dn.textContent = "Step " + (m + 1) + " of " + u.length, Ee());
  }
  function li(e) {
    const t = u.indexOf(e);
    t < 0 || t <= m || (e.sessionHidden = !e.sessionHidden, Te(), O((e.sessionHidden ? "Hidden " : "Included ") + e.name + " for this session"));
  }
  function un() {
    const e = i("upcomingList");
    if (!e) return;
    e.innerHTML = "";
    const t = oi(), n = u.slice(t);
    (ge === "all" ? n : n.slice(0, Math.max(1, Number(ge) || 1))).forEach((o) => {
      const r = document.createElement("section");
      r.className = "upcomingCard" + (o.sessionHidden ? " sessionHidden" : ""), r.innerHTML = '<div class="upcomingInfo"><div class="upcomingIcon" aria-hidden="true">' + ri(o) + '</div><div><div class="upcomingName">' + z(o.name) + '</div><div class="upcomingMeta">' + z(o.group) + " · " + o.duration + ' sec</div></div></div><button class="skipSessionBtn" type="button">' + (o.sessionHidden ? "Include this session" : "Skip this session") + "</button>", r.querySelector(".skipSessionBtn").addEventListener("click", () => li(o)), e.appendChild(r);
    });
  }
  function Te() {
    const e = ai();
    if (ti.textContent = e.name, ni.textContent = e.meta, ii.textContent = e.icon, N = null, F) {
      const t = Q(m + 1);
      t >= 0 && (N = u[t]);
    } else {
      const t = u[m];
      if (t && t.rest > 0)
        N = null;
      else {
        const n = Q(m + 1);
        n >= 0 && (N = u[n]);
      }
    }
    rt && (rt.hidden = !N, rt.textContent = N != null && N.sessionHidden ? "Include this session" : "Skip this session"), un();
  }
  rt.addEventListener("click", () => {
    N && (N.sessionHidden = !N.sessionHidden, O((N.sessionHidden ? "Hidden " : "Included ") + N.name + " for this session"), Te());
  });
  let Z = null, Bt = null;
  function Ze(e, t = {}) {
    const n = f[b];
    g.fire(e, { move: (n == null ? void 0 : n.name) || "", move_id: b, ...t });
  }
  function di() {
    const e = f[b];
    Z = { key: b, name: (e == null ? void 0 : e.name) || "Move", startedAt: Date.now(), active: 0 }, clearInterval(Bt), Bt = setInterval(() => {
      Z && !B && Z.active++;
    }, 1e3), Ze("started", { steps: u.length });
  }
  function gn(e) {
    if (clearInterval(Bt), !Z) return;
    const t = Z;
    Z = null, Ze(e ? "completed" : "ended", { seconds: t.active }), !(t.active < 30) && (y.history.unshift({ id: "h-" + t.startedAt, move_id: t.key, name: t.name, start: new Date(t.startedAt).toISOString(), seconds: t.active, completed: e }), y.history = y.history.slice(0, 1e3), Ae(), lt());
  }
  function ci() {
    ut("workout"), pi();
  }
  function zt() {
    gn(!1), clearInterval(R), clearInterval(Qe), F = !1, B = !1, te.textContent = "Pause", i("app").classList.remove("resting", "paused"), qe.classList.remove("active"), ut("home");
  }
  function pi() {
    qe.classList.add("active");
    let e = 5;
    Rt.textContent = e, requestAnimationFrame(it), clearInterval(Qe), Qe = setInterval(() => {
      e--, e > 0 ? (Rt.textContent = e, it()) : (clearInterval(Qe), Rt.textContent = "GO", it(), setTimeout(() => {
        qe.classList.remove("active"), cancelAnimationFrame(He), gi();
      }, 650));
    }, 1e3);
  }
  function mn() {
    je.innerHTML = "", u.forEach((e, t) => {
      const n = document.createElement("button");
      n.type = "button", n.className = "progressSegment", n.setAttribute("aria-label", "Go to " + e.name), n.addEventListener("click", () => {
        t <= m && ui(t);
      }), je.appendChild(n);
    });
  }
  function ui(e) {
    e < 0 || e >= u.length || e > m || (clearInterval(R), F = !1, i("app").classList.remove("resting"), m = e, B = !1, i("app").classList.remove("paused"), te.textContent = "Pause", Me(), R = setInterval(de, 1e3));
  }
  function gi() {
    if (m = Q(0), B = !1, i("app").classList.remove("paused"), te.textContent = "Pause", mn(), m < 0) {
      Oe.textContent = "No activities", Ge.textContent = "Open Edit and enable or add a movement";
      return;
    }
    di(), Me(), clearInterval(R), R = setInterval(de, 1e3);
  }
  function Me() {
    F = !1, i("app").classList.remove("resting");
    const e = u[m];
    W = e.duration, Je = e.duration, Oe.textContent = e.name, Ge.textContent = e.group, dn.textContent = "Step " + (m + 1) + " of " + u.length, Z && Ze("step", { name: e.name, group: e.group, kind: e.kind, step: m + 1, of: u.length, duration: e.duration }), Te(), si();
  }
  function Ee() {
    cn.textContent = W;
    const e = W / Je * 100;
    pn.style.width = e + "%";
    const t = [...je.children][m];
    if (t && !F) {
      const n = 100 - e;
      t.style.setProperty("--segment-progress", n + "%");
    }
  }
  function de() {
    if (!B && (W--, Ee(), W <= 0)) {
      const e = u[m];
      e.rest > 0 ? fn(e.rest) : Ve();
    }
  }
  function fn(e) {
    F = !0, i("app").classList.add("resting");
    const t = [...je.children][m];
    t && t.style.setProperty("--segment-progress", "100%"), clearInterval(R), W = e, Je = e, Z && Ze("rest", { duration: e }), Oe.textContent = "Rest", Ge.textContent = "Recovery", Te(), Ee(), R = setInterval(() => {
      B || (W--, Ee(), W <= 0 && (clearInterval(R), Ve(), R = setInterval(de, 1e3)));
    }, 1e3);
  }
  function Ve() {
    F = !1;
    const e = Q(m + 1);
    e >= 0 ? (m = e, Me()) : (B = !1, te.textContent = "Pause", i("app").classList.remove("resting", "paused"), clearInterval(R), Oe.textContent = "Complete", Ge.textContent = "Move finished", cn.textContent = "✓", gn(!0), pn.style.width = "100%", Te());
  }
  i("skipExercise").addEventListener("click", () => {
    clearInterval(R);
    const e = u[m];
    if (F) {
      F = !1, i("app").classList.remove("resting");
      const n = Q(m + 1);
      n >= 0 ? (m = n, Me(), R = setInterval(de, 1e3)) : Ve();
      return;
    }
    if (e && e.rest > 0) {
      fn(e.rest);
      return;
    }
    const t = Q(m + 1);
    t >= 0 ? (m = t, Me(), R = setInterval(de, 1e3)) : Ve();
  }), i("restartSegment").addEventListener("click", () => {
    if (clearInterval(R), B = !1, i("app").classList.remove("paused"), te.textContent = "Pause", F) {
      const e = u[m];
      W = e.rest, Je = e.rest, Oe.textContent = "Rest", Ge.textContent = "Recovery", i("app").classList.add("resting"), Te(), Ee();
    } else
      Me();
    R = setInterval(F ? () => {
      B || (W--, Ee(), W <= 0 && (clearInterval(R), Ve(), R = setInterval(de, 1e3)));
    } : de, 1e3);
  });
  function At(e, t, n, a) {
    let o = 0, r = null, s = !1;
    function l() {
      r && cancelAnimationFrame(r), r = null, o = 0, s = !1, t.style.width = "0%", e.classList.remove("holding");
    }
    function d(c) {
      if (!s) return;
      o || (o = c);
      const x = Math.min(1, (c - o) / n);
      if (t.style.width = x * 100 + "%", x >= 1) {
        s = !1, r && cancelAnimationFrame(r), r = null, t.style.width = "100%", setTimeout(() => t.style.width = "0%", 90), a();
        return;
      }
      r = requestAnimationFrame(d);
    }
    function v(c) {
      var x;
      if (!(c && c.button !== void 0 && c.button !== 0)) {
        c == null || c.preventDefault(), l(), s = !0, e.classList.add("holding");
        try {
          (x = e.setPointerCapture) == null || x.call(e, c.pointerId);
        } catch {
        }
        r = requestAnimationFrame(d);
      }
    }
    function T() {
      s && l();
    }
    e.addEventListener("pointerdown", v), e.addEventListener("pointerup", T), e.addEventListener("pointercancel", T), e.addEventListener("lostpointercapture", T), e.addEventListener("keydown", (c) => {
      (c.key === " " || c.key === "Enter") && !c.repeat && v(c);
    }), e.addEventListener("keyup", (c) => {
      (c.key === " " || c.key === "Enter") && T();
    });
  }
  const mi = i("endWorkout");
  At(mi, i("holdEndFill"), 1500, zt);
  const Le = i("deleteMoveConfirm");
  i("deleteMoveOpen").addEventListener("click", () => {
    Le.classList.add("open"), Le.setAttribute("aria-hidden", "false");
  }), i("deleteMoveCancel").addEventListener("click", () => {
    Le.classList.remove("open"), Le.setAttribute("aria-hidden", "true");
  });
  function fi() {
    const e = b, t = p.querySelector('.workoutPanel[data-workout="' + e + '"]');
    t && t.remove(), delete f[e], y.order = y.order.filter((a) => a !== e);
    let n = p.querySelector(".workoutPanel[data-workout]");
    if (!n) {
      const a = "custom-" + Date.now();
      f[a] = { name: "New move", source: "Custom routine", total: 20, work: 45, rest: 15, customSequence: !0, preset: "movement", sequence: [], strength: [] }, y.order.push(a), n = vt(a, f[a]);
    }
    Le.classList.remove("open"), Le.setAttribute("aria-hidden", "true"), De = null, nt(), K(n.dataset.workout), Ae(), O("Move deleted");
  }
  At(i("deleteMoveYes"), i("deleteMoveFill"), 1500, fi);
  const vn = p.querySelector(".rubberTabs"), Re = i("rubberIndicator");
  function Ue(e, t = !0) {
    if (!e || !vn || !Re) return;
    const n = vn.getBoundingClientRect(), a = e.getBoundingClientRect();
    Re.style.transition = t ? "left .34s cubic-bezier(.2,1.35,.4,1),width .34s cubic-bezier(.2,1.35,.4,1),transform .18s ease" : "none";
    const o = se();
    Re.style.left = (a.left - n.left) / o + "px", Re.style.width = a.width / o + "px", t && (Re.style.transform = "scaleX(1.08)", setTimeout(() => Re.style.transform = "scaleX(1)", 180));
  }
  p.querySelectorAll(".tab").forEach((e) => e.addEventListener("click", () => {
    p.querySelectorAll(".tab").forEach((t) => t.classList.remove("active")), p.querySelectorAll(".settingsPane").forEach((t) => t.classList.remove("active")), e.classList.add("active"), i(e.dataset.pane).classList.add("active"), Ue(e, !0);
  })), requestAnimationFrame(() => Ue(p.querySelector(".tab.active"), !1)), window.addEventListener("resize", () => Ue(p.querySelector(".tab.active"), !1));
  const Nt = i("pixelTrailToggle"), It = i("rippleToggle"), Fe = i("trailStrength"), Pe = i("trailLife");
  function ne(e, t) {
    I()[e] = t, Ae();
  }
  const ce = { energy: !0, steps: !0, sleep: !0, weight: !0, ...I().toggles || {} };
  function hn() {
    p.querySelectorAll("[data-toggle]").forEach((t) => t.classList.toggle("on", ce[t.dataset.toggle] !== !1)), p.querySelector(".energySection").hidden = ce.energy === !1, ["steps", "sleep", "weight"].forEach((t) => {
      const n = i(t + "Row");
      n && (n.hidden = ce[t] === !1);
    });
    const e = ["steps", "sleep", "weight"].some((t) => ce[t] !== !1);
    p.querySelector(".activityCard").hidden = !e, p.querySelector(".weekly").style.gridColumn = e ? "" : "span 12";
  }
  p.querySelectorAll("[data-toggle]").forEach((e) => e.addEventListener("click", () => {
    ce[e.dataset.toggle] = ce[e.dataset.toggle] === !1, hn(), ne("toggles", { ...ce });
  })), hn();
  function vi() {
    Nt.classList.toggle("on", J), It.classList.toggle("on", le), Fe.value = Math.round(we * 100), i("trailStrengthValue").textContent = Fe.value + "%", Pe.value = ye, i("trailLifeValue").textContent = Pe.value + " ms";
  }
  I().trailEnabled !== void 0 && (J = I().trailEnabled), I().rippleEnabled !== void 0 && (le = I().rippleEnabled), I().trailStrength !== void 0 && (we = I().trailStrength), I().trailMaxAge !== void 0 && (ye = I().trailMaxAge), vi(), Nt.addEventListener("click", () => {
    J = !J, Nt.classList.toggle("on", J), J || (_e = []), ne("trailEnabled", J);
  }), It.addEventListener("click", () => {
    le = !le, It.classList.toggle("on", le), ne("rippleEnabled", le);
  }), Fe.addEventListener("input", () => {
    we = Number(Fe.value) / 100, i("trailStrengthValue").textContent = Fe.value + "%";
  }), Fe.addEventListener("change", () => ne("trailStrength", we)), Pe.addEventListener("input", () => {
    ye = Number(Pe.value), i("trailLifeValue").textContent = Pe.value + " ms";
  }), Pe.addEventListener("change", () => ne("trailMaxAge", ye)), $e.addEventListener("change", () => ne("upcomingCount", ge));
  function xn(e) {
    p.querySelectorAll(".themeBtn").forEach((n) => n.classList.toggle("active", n.dataset.theme === e));
    const t = e === "light";
    i("app").classList.toggle("light", t), g.setLight(t);
  }
  xn(I().theme || "dark"), p.querySelectorAll(".themeBtn").forEach((e) => e.addEventListener("click", () => {
    xn(e.dataset.theme), ne("theme", e.dataset.theme);
  }));
  const hi = {
    steps: { match: /step/i, units: ["steps", "step"] },
    sleep: { match: /sleep/i, units: ["h", "min", "hours", "minutes"] },
    weight: { match: /weight|mass/i, units: ["kg", "lb", "lbs", "st"], deviceClass: "weight" }
  }, Be = { steps: null, sleep: null, weight: null, ...I().entities || {} };
  let st = null;
  function xi(e, t) {
    const n = hi[e], a = Object.values(t).filter((d) => d.entity_id.startsWith("sensor.") || d.entity_id.startsWith("input_number.")), o = (d) => d.attributes.friendly_name || d.entity_id, r = a.filter((d) => n.match.test(d.entity_id) || n.match.test(o(d)) || n.deviceClass && d.attributes.device_class === n.deviceClass || n.units.includes(String(d.attributes.unit_of_measurement || "").toLowerCase()) && e !== "sleep"), s = a.filter((d) => !r.includes(d)), l = (d, v) => o(d).localeCompare(o(v));
    return { suggested: r.sort(l), rest: s.sort(l), label: o };
  }
  function bn(e) {
    ["steps", "sleep", "weight"].forEach((t) => {
      const n = i(t + "Entity");
      if (!n || n.matches(":focus")) return;
      const { suggested: a, rest: o, label: r } = xi(t, e), s = (d) => '<option value="' + z(d.entity_id) + '">' + z(r(d)) + "</option>";
      n.innerHTML = '<option value="">Not connected</option>' + (a.length ? '<optgroup label="Suggested">' + a.map(s).join("") + "</optgroup>" : "") + (o.length ? '<optgroup label="All sensors">' + o.map(s).join("") + "</optgroup>" : ""), n.value = Be[t] || "";
      const l = i(t + "Status");
      if (l) {
        const d = Be[t] && e[Be[t]];
        l.textContent = d ? "Connected · " + r(d) : l.dataset.empty;
      }
    });
  }
  p.querySelectorAll(".entitySelect").forEach((e) => e.addEventListener("change", () => {
    Be[e.dataset.kind] = e.value || null, ne("entities", { ...Be }), st && (bn(st), yn(st));
  }));
  function wn(e, t = 0) {
    return new Intl.NumberFormat(void 0, { maximumFractionDigits: t }).format(e);
  }
  function bi(e, t) {
    if (!t || t.state === "unavailable" || t.state === "unknown") return null;
    const n = Number(t.state), a = t.attributes.unit_of_measurement || "";
    if (e === "steps") return Number.isFinite(n) ? wn(n) + " · today" : t.state;
    if (e === "sleep") {
      if (!Number.isFinite(n)) return t.state;
      const o = /^min/i.test(a) ? n : /^s$/i.test(a) ? n / 60 : n * 60;
      return Math.floor(o / 60) + "h " + String(Math.round(o % 60)).padStart(2, "0") + " · last night";
    }
    return (Number.isFinite(n) ? wn(n, 1) : t.state) + (a ? " " + a : "") + " · latest reading";
  }
  function yn(e) {
    ["steps", "sleep", "weight"].forEach((t) => {
      const n = i(t + "Meta");
      if (!n) return;
      const a = Be[t], o = a ? bi(t, e[a]) : null;
      n.textContent = o || (a ? "No reading yet" : "Choose a sensor in Settings");
    });
  }
  function lt() {
    const e = /* @__PURE__ */ new Date(), t = new Date(e.getFullYear(), e.getMonth(), e.getDate() - (e.getDay() + 6) % 7), n = [0, 0, 0, 0, 0, 0, 0];
    y.history.forEach((l) => {
      const d = new Date(l.start), v = Math.floor((new Date(d.getFullYear(), d.getMonth(), d.getDate()) - t) / 864e5);
      v >= 0 && v < 7 && (n[v] += l.seconds || 0);
    });
    const a = n.map((l) => Math.round(l / 60)), o = a.reduce((l, d) => l + d, 0);
    p.querySelector(".weekMetric").textContent = o;
    const r = [...Array(7)].map((l, d) => new Intl.DateTimeFormat(void 0, { weekday: "short" }).format(new Date(t.getFullYear(), t.getMonth(), t.getDate() + d))), s = p.querySelector(".weekChips");
    s.innerHTML = a.map(
      (l, d) => '<div class="weekChip' + (l ? " done" : "") + '"><div class="weekChipTop"><strong>' + z(r[d]) + "</strong>" + (l ? '<span class="weekTick">✓</span>' : "<span></span>") + '</div><div class="weekChipTime">' + l + ' min</div><div class="weekChipMeta">moved</div></div>'
    ).join("") + '<div class="weekChip total"><div class="weekChipTop"><strong>To date</strong>' + (o ? '<span class="weekTick">✓</span>' : "<span></span>") + '</div><div class="weekChipTime">' + o + ' min</div><div class="weekChipMeta">this week</div></div>';
  }
  lt(), setInterval(lt, 10 * 60 * 1e3);
  const kn = i("tvNav");
  return g.fullscreenSupported || (kn.hidden = !0), kn.addEventListener("click", () => g.toggleFullscreen()), p.addEventListener("keydown", (e) => {
    !ze.workout.classList.contains("active") || qe.classList.contains("active") || e.target.closest("input,select,textarea,.holdEnd") || (e.key === "MediaPlayPause" || e.key === " " && !e.target.closest("button") ? (e.preventDefault(), te.click()) : e.key === "MediaTrackNext" ? (e.preventDefault(), i("skipExercise").click()) : e.key === "MediaTrackPrevious" && (e.preventDefault(), i("restartSegment").click()));
  }), [k, h, w].forEach((e) => e.addEventListener("input", () => {
    const t = f[b];
    t && (t.total = Number(k.value), t.work = Number(h.value), t.rest = Number(w.value)), A();
  })), Ot.addEventListener("click", zt), Gt.addEventListener("click", () => ut("settings")), i("settingsBack").addEventListener("click", zt), te.addEventListener("click", () => {
    B = !B, Z && Ze(B ? "paused" : "resumed"), te.textContent = B ? "Resume" : "Pause", i("app").classList.toggle("paused", B);
  }), A(), {
    updateStates(e) {
      st = e, bn(e), yn(e);
    },
    applyRemoteData(e) {
      if (e && (Array.isArray(e.history) && (y.history = e.history, lt()), Array.isArray(e.energy) && (y.energy = e.energy, St()), e.profiles && !j.classList.contains("open") && !Z)) {
        const t = Ut(e);
        Object.keys(f).forEach((n) => delete f[n]), Object.assign(f, t.profiles), y.order = t.order, f[b] || (b = y.order[0]), Yt(), K(b);
      }
    },
    suspend() {
      _ = !1;
    },
    resume() {
      _ || (_ = !0, ke || (ke = requestAnimationFrame(at)), Se || (Se = requestAnimationFrame(ot)), Ue(p.querySelector(".tab.active"), !1));
    }
  };
}
const Mi = "0.1.0", Dt = "move_assistant", Ei = "move_assistant";
class Li extends HTMLElement {
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
    const g = this.shadowRoot || this.attachShadow({ mode: "open" });
    g.innerHTML = `<style>${Ci}</style>${Si}`;
    const i = g.getElementById("app");
    i.style.opacity = "0";
    let M = null;
    try {
      const S = await this._hass.callWS({
        type: "frontend/get_user_data",
        key: Dt
      });
      M = (S == null ? void 0 : S.value) ?? null;
    } catch {
    }
    this._lastSaved = JSON.stringify(M), this._app = Ti(g, {
      data: M,
      save: (S) => this._save(S),
      fire: (S, _) => this._fire(S, _),
      setLight: (S) => this.classList.toggle("lightBody", S),
      fullscreenSupported: !!(this.requestFullscreen || this.webkitRequestFullscreen),
      toggleFullscreen: () => this._toggleFullscreen()
    }), this._lastStates = this._hass.states, this._app.updateStates(this._hass.states), this.isConnected || this._app.suspend(), i.style.transition = "opacity .2s ease", i.style.opacity = "", this._subscribe();
  }
  _subscribe() {
    var i;
    const g = (i = this._hass) == null ? void 0 : i.connection;
    g != null && g.subscribeMessage && g.subscribeMessage(
      (M) => {
        var _;
        const S = JSON.stringify((M == null ? void 0 : M.value) ?? null);
        S === this._lastSaved || S === this._pendingJson || (this._lastSaved = S, (_ = this._app) == null || _.applyRemoteData(M.value));
      },
      { type: "frontend/subscribe_user_data", key: Dt }
    ).catch(() => {
    });
  }
  _save(g) {
    this._pendingJson = JSON.stringify(g), clearTimeout(this._saveTimer), this._saveTimer = setTimeout(async () => {
      const i = this._pendingJson;
      try {
        await this._hass.callWS({
          type: "frontend/set_user_data",
          key: Dt,
          value: JSON.parse(i)
        }), this._lastSaved = i;
      } catch {
        this._toast("Couldn't save to Home Assistant");
      }
    }, 400);
  }
  _fire(g, i = {}) {
    var M, S;
    ((M = this._config) == null ? void 0 : M.events) !== !1 && ((S = this._hass) == null || S.callWS({
      type: "fire_event",
      event_type: Ei,
      event_data: { action: g, ...i }
    }).catch(() => {
    }));
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
    var M;
    const i = (M = this.shadowRoot) == null ? void 0 : M.getElementById("toast");
    i && (i.textContent = g, i.classList.add("show"), setTimeout(() => i.classList.remove("show"), 2600));
  }
}
customElements.get("move-assistant-card") || (customElements.define("move-assistant-card", Li), window.customCards = window.customCards || [], window.customCards.push({
  type: "move-assistant-card",
  name: "Move Assistant",
  description: "Guided movement timer with your Home Assistant activity data.",
  preview: !1
}), console.info(`%c MOVE ASSISTANT %c ${Mi} `, "background:#D0FF00;color:#090909;font-weight:700", ""));
