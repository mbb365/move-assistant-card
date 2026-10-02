const Vi = ':host{display:flex;flex-direction:column;min-height:calc(100dvh - var(--header-height,0px));position:relative;background:#050505;color-scheme:dark;--bg:#050505;--page:#090909;--card:#1d1d1d;--card2:#242424;--muted:#969696;--text:#f4f4f4;--line:#3f3f3f;--lineb:#252525;--r:36px;--gap:20px}*{box-sizing:border-box}#app{color:var(--text);font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif;transition:background .25s ease,color .25s ease;zoom:.8;-webkit-font-smoothing:antialiased}[hidden]{display:none!important}button,input{font:inherit}#app{flex:1;display:flex;flex-direction:column;width:100%;margin:0;padding:0;background:var(--bg);font-size:16px;line-height:normal;text-align:left}.shell{flex:1;display:flex;flex-direction:column;position:relative;width:100%;background:var(--page);border-radius:0;overflow:visible;transition:background .28s ease}#app.resting .shell{background:#1f7a4d}#app.paused .shell{background:#3458d4}#app.light.paused .shell{background:#7f96e8}#app.light{--bg:#EEEDED;--page:#EEEDED;--card:rgba(255,255,255,.8);--card2:rgba(255,255,255,.8);--muted:#222222;--text:#222222;--line:#ffffff;--lineb:#ffffff}#app.light,#app.light *{color:#222!important}#app.light .pill{background:transparent;color:#222!important;border:0}#app.light .tab,#app.light .back,#app.light .navBtn,#app.light .primary,#app.light .themeBtn{background:#ffffffe0;color:#222!important;border-color:#fff}#app.light .holdEnd{background:#ffffffe0;border:.4px solid #fff;text-decoration:none}#app.light .energyBtn,#app.light .activityRow,#app.light .integration,#app.light .toggleRow,#app.light .weekChip,#app.light .sourceTag,#app.light .timeTile,#app.light .moveRow,#app.light .routineSummary,#app.light .workoutPanel{background:#fffc;color:#222!important}#app.light .timerCard,#app.light .movementCard,#app.light .nextCard{background:#fffc}#app.light .activityRow:nth-child(1) .activityRowIcon{background:#dfe4ff;color:#596de4!important}#app.light .activityRow:nth-child(2) .activityRowIcon{background:#ffe8c8;color:#c8741f!important}#app.light .activityRow:nth-child(3) .activityRowIcon{background:#d9f4e6;color:#2e8b63!important}#app.light .activityIcon{background:#e8e1ff;color:#7859c9!important}#app.light .energyBtn{color:#222!important;background:#ffffffb8}#app.light .energyBtn:hover,#app.light .energyBtn:focus-visible,#app.light .energyBtn.selected{background:color-mix(in srgb,var(--feeling-color) 34%,white);color:#222!important}:host(.lightBody){background:#eeeded;color-scheme:light}#app.light,#app.light .shell{background:#eeeded}#app.light .modal{background:#fffffff0;border-color:#fff}#app.light .modalStatic{background:#fffffff0;border-bottom-color:#fff}#app.light .exerciseScroller{background:transparent;border-color:#ffffffe6}#app.light .addInput,#app.light .editNameInput{background:#ffffffeb;color:#222!important;border-color:#fff}#app.light .rangeTrack{background:#d8d6d6;border-color:#fff}#app.light .rangeFill{background:#aeb9ff}#app.light .timerCard,#app.light .movementCard,#app.light .upcomingTile{background:#fffc;border-color:#fff}#app.light .fill{background:#c9d0ff}#app.light .progress{background:transparent}#app.light .progressSegment{background:#c8c6c6}#app.light .progressSegment.active:after{background:#9aa8ff}#app.light .progressSegment.done{background:transparent;opacity:0}#app.light .sourceTag,#app.light .activityRow,#app.light .weekChip,#app.light .integration,#app.light .toggleRow,#app.light .moveRow,#app.light .timeTile,#app.light .routineSummary{border-color:#fff}#app.light .countdown{background:#eeeded}#app.light .toast{background:#222;color:#eeeded!important}#app.light.resting .shell{background:#7dbb98}.view{display:none;width:100%;max-width:1480px;margin:0 auto;padding:28px 28px 96px}.view.active{display:block;flex:1 0 auto}.card,.panel,.tile{position:relative;background:var(--card);border-radius:36px;padding:28px;border-top:.4px solid var(--line);border-left:.4px solid var(--line);border-right:.4px solid var(--line);border-bottom:.2px solid var(--lineb)}.grid{display:grid;grid-template-columns:repeat(12,minmax(0,1fr));gap:20px}.eyebrow{font-size:12px;text-transform:uppercase;letter-spacing:.14em;color:var(--muted);font-weight:760}.title{font-size:clamp(52px,6vw,84px);font-weight:790;letter-spacing:-.06em;line-height:.9}.sub{font-size:15px;color:var(--muted);margin-top:8px;line-height:1.45}.pill,.primary,.navBtn,.tab,.back,.hideBtn,.addBtn{cursor:pointer}.pill{min-height:0;padding:4px 0;border:0;border-radius:0;background:transparent;color:var(--text);text-decoration-line:underline;text-decoration-thickness:1px;text-underline-offset:4px}.tab,.back{border-radius:999px;min-height:52px;padding:0 20px;background:#171717;border:.4px solid var(--line);color:#fff}.primary{border-radius:999px;min-height:52px;padding:0 22px;border:0;background:#f2f2f2;color:#090909;font-weight:780}.topbar{display:flex;justify-content:space-between;gap:20px;align-items:flex-start;margin-bottom:24px}.activityCard,.weekly{grid-column:span 6}.energySection{grid-column:span 12;margin-top:20px}.activityCard,.weekly{min-height:360px}.wellness{width:100%}.sourceTag{display:inline-flex;margin-top:14px;padding:8px 12px;border-radius:999px;background:#292929;font-size:13px;color:#cfcfcf}.workoutFooter{display:flex;justify-content:space-between;align-items:end;gap:28px;flex-wrap:wrap;margin-top:28px;width:100%;box-sizing:border-box}.workoutGallery{grid-column:span 12;display:flex;gap:20px;height:360px;overflow:hidden}.workoutPanel{position:relative;height:360px;flex:1 1 90px;min-width:88px;background:var(--card);border-radius:36px;padding:28px;border-top:.4px solid var(--line);border-left:.4px solid var(--line);border-right:.4px solid var(--line);border-bottom:.2px solid var(--lineb);overflow:hidden;box-sizing:border-box;transition:flex .32s ease;cursor:pointer}.workoutPanel.active{flex:7 1 0;min-width:0;cursor:default}.workoutPanel.addPanel{flex:0 0 92px;min-width:92px;display:flex;align-items:center;justify-content:center;padding:18px}.workoutPanel{--edge-proximity:0;--cursor-angle:45deg;--edge-sensitivity:36;--color-sensitivity:56;--cone-spread:25;--fill-opacity:.18;--glow-color:hsl(205deg 90% 82% / 100%);--glow-color-60:hsl(205deg 90% 82% / 60%);--glow-color-50:hsl(205deg 90% 82% / 50%);--glow-color-40:hsl(205deg 90% 82% / 40%);--glow-color-30:hsl(205deg 90% 82% / 30%);--glow-color-20:hsl(205deg 90% 82% / 20%);--glow-color-10:hsl(205deg 90% 82% / 10%);--gradient-one:radial-gradient(at 80% 55%,#c084fc 0px,transparent 50%);--gradient-two:radial-gradient(at 69% 34%,#f472b6 0px,transparent 50%);--gradient-three:radial-gradient(at 8% 6%,#38bdf8 0px,transparent 50%);--gradient-four:radial-gradient(at 41% 38%,#c084fc 0px,transparent 50%);--gradient-five:radial-gradient(at 86% 85%,#f472b6 0px,transparent 50%);--gradient-six:radial-gradient(at 82% 18%,#38bdf8 0px,transparent 50%);--gradient-seven:radial-gradient(at 51% 4%,#f472b6 0px,transparent 50%);isolation:isolate}.workoutPanel:before,.workoutPanel:after,.workoutPanel>.edgeLight{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:36px;pointer-events:none;transition:opacity .18s ease-out}.workoutPanel:before{z-index:2;border:1px solid transparent;background:linear-gradient(var(--card) 0 100%) padding-box,linear-gradient(#fff0 0,#fff0) border-box,var(--gradient-one) border-box,var(--gradient-two) border-box,var(--gradient-three) border-box,var(--gradient-four) border-box,var(--gradient-five) border-box,var(--gradient-six) border-box,var(--gradient-seven) border-box;opacity:clamp(0,calc(.72 * (var(--edge-proximity) - var(--color-sensitivity)) / (100 - var(--color-sensitivity))),.72);-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,black calc(var(--cone-spread) * 1%),transparent calc((var(--cone-spread) + 15) * 1%),transparent calc((100 - var(--cone-spread) - 15) * 1%),black calc((100 - var(--cone-spread)) * 1%));mask-image:conic-gradient(from var(--cursor-angle) at center,black calc(var(--cone-spread) * 1%),transparent calc((var(--cone-spread) + 15) * 1%),transparent calc((100 - var(--cone-spread) - 15) * 1%),black calc((100 - var(--cone-spread)) * 1%))}.workoutPanel:after{z-index:1;border:1px solid transparent;background:var(--gradient-one) padding-box,var(--gradient-two) padding-box,var(--gradient-three) padding-box,var(--gradient-four) padding-box,var(--gradient-five) padding-box,var(--gradient-six) padding-box,var(--gradient-seven) padding-box;opacity:clamp(0,calc(var(--fill-opacity) * (var(--edge-proximity) - var(--color-sensitivity)) / (100 - var(--color-sensitivity))),.18);mix-blend-mode:soft-light;-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,transparent 5%,black 15%,black 85%,transparent 95%);mask-image:conic-gradient(from var(--cursor-angle) at center,transparent 5%,black 15%,black 85%,transparent 95%)}.workoutPanel>.edgeLight{top:-24px;right:-24px;bottom:-24px;left:-24px;z-index:3;opacity:clamp(0,calc(.62 * (var(--edge-proximity) - var(--edge-sensitivity)) / (100 - var(--edge-sensitivity))),.62);mix-blend-mode:plus-lighter;-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,black 2.5%,transparent 10%,transparent 90%,black 97.5%);mask-image:conic-gradient(from var(--cursor-angle) at center,black 2.5%,transparent 10%,transparent 90%,black 97.5%)}.workoutPanel>.edgeLight:before{content:"";position:absolute;top:24px;right:24px;bottom:24px;left:24px;border-radius:36px;box-shadow:inset 0 0 0 1px var(--glow-color-60),inset 0 0 3px 0 var(--glow-color-40),inset 0 0 8px 0 var(--glow-color-30),inset 0 0 16px 0 var(--glow-color-20),0 0 3px 0 var(--glow-color-40),0 0 8px 0 var(--glow-color-30),0 0 16px 0 var(--glow-color-20),0 0 28px 2px var(--glow-color-10)}.workoutPanel:not(.borderGlowActive):before,.workoutPanel:not(.borderGlowActive):after,.workoutPanel:not(.borderGlowActive)>.edgeLight{opacity:0;transition:opacity .35s ease-out}#app.light .workoutPanel{--glow-color:hsl(224deg 80% 55% / 100%);--glow-color-50:hsl(224deg 80% 55% / 50%);--glow-color-40:hsl(224deg 80% 55% / 40%);--glow-color-30:hsl(224deg 80% 55% / 30%);--glow-color-20:hsl(224deg 80% 55% / 20%);--glow-color-10:hsl(224deg 80% 55% / 10%)}.workoutPanel:not(.active):not(.addPanel) .panelExpanded{opacity:0;filter:blur(10px);pointer-events:none}.workoutPanel:not(.active):not(.addPanel) .panelCollapsed{opacity:1;filter:blur(0)}.workoutPanel.active .panelExpanded{opacity:1;filter:blur(0);pointer-events:auto}.workoutPanel.active .panelCollapsed{opacity:0;filter:blur(8px);pointer-events:none}.panelExpanded{position:relative;z-index:4;width:100%;height:100%;min-width:0;box-sizing:border-box;display:flex;flex-direction:column;justify-content:space-between;transition:opacity .22s ease,filter .22s ease}.panelCollapsed{position:absolute;top:0;right:0;bottom:0;left:0;z-index:4;display:flex;align-items:center;justify-content:center;opacity:0;filter:blur(8px);transition:opacity .22s ease,filter .22s ease}.panelCollapsedText{writing-mode:vertical-rl;transform:rotate(180deg);white-space:nowrap;font-size:18px;font-weight:720;letter-spacing:-.02em}.workoutPanelTop{display:flex;justify-content:space-between;align-items:flex-start;gap:28px;width:100%;min-width:0;box-sizing:border-box}.workoutName{font-size:clamp(54px,7vw,92px);line-height:.9;letter-spacing:-.06em;font-weight:790}.workoutPanelActions{display:flex;gap:28px;flex-wrap:wrap;align-items:center;justify-content:flex-end;margin-left:auto}.startWorkoutBtn{background:#d0ff00!important;color:#090909!important}.startWorkoutBtn:hover{filter:brightness(1.04)}#app.light .startWorkoutBtn{background:#d0ff00!important;color:#090909!important}.addPanelPlus{position:relative;z-index:4;font-size:34px;line-height:1}.addPanelLabel{position:absolute;z-index:4;bottom:20px;writing-mode:vertical-rl;transform:rotate(180deg);font-size:13px;color:var(--muted);letter-spacing:.04em}@media (max-height:820px) and (min-width:621px){.modalStatic{padding:22px 28px}.timeTile{min-height:156px}}@media (max-width:900px){.weekCopy{white-space:normal}.workoutGallery{overflow-x:auto;scroll-snap-type:x mandatory;padding-bottom:4px}.workoutPanel,.workoutPanel.active{height:360px;flex:0 0 min(86vw,680px);min-width:min(86vw,680px);scroll-snap-align:start}.workoutPanel.addPanel{flex-basis:100px;min-width:100px}.panelCollapsed{display:none}}.moveActions{display:flex;gap:28px;flex-wrap:wrap}.energyFloat{padding:28px;background:transparent;border:0}.energyQuestion{font-size:48px;font-weight:780;letter-spacing:-.035em;line-height:1}#app.light .energyFloat{background:transparent}.energyScale{display:grid;grid-template-columns:repeat(6,minmax(0,1fr));gap:12px;margin-top:22px}.energyBtn{--feeling-color:#8f8f8f;--feeling-glow:rgba(255,255,255,.14);position:relative;isolation:isolate;overflow:hidden;width:100%;min-height:54px;padding:0 12px;white-space:nowrap;border-radius:16px;background:#282828;border:.4px solid var(--line);color:#fff;cursor:pointer;transition:color .18s ease,border-color .18s ease,background .18s ease}.energyBtn>span{position:relative;z-index:2}.energyBtn:before{content:"";position:absolute;top:-18%;right:-18%;bottom:-18%;left:-18%;z-index:-2;opacity:0;background:radial-gradient(ellipse at var(--feel-x,50%) var(--feel-y,50%),color-mix(in srgb,var(--feeling-color) 88%,transparent) 0%,color-mix(in srgb,var(--feeling-color) 54%,transparent) 34%,transparent 72%);transform:scale(.82) skew(-3deg);filter:saturate(1.08) blur(1px);transition:opacity .18s ease,transform .28s cubic-bezier(.2,.8,.2,1)}.energyBtn:after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;z-index:-1;opacity:0;pointer-events:none;background:repeating-linear-gradient(to bottom,rgba(255,255,255,.07) 0,rgba(255,255,255,.07) 1px,transparent 1px,transparent 4px),linear-gradient(90deg,transparent 0%,color-mix(in srgb,var(--feeling-color) 34%,transparent) var(--feel-x,50%),transparent 100%);mix-blend-mode:screen}.energyBtn:hover:before,.energyBtn:focus-visible:before,.energyBtn.selected:before{opacity:.92;transform:translate(var(--feel-shift-x,0px),var(--feel-shift-y,0px)) scale(1.08) skew(2deg);animation:feelingWarp 1.45s ease-in-out infinite alternate}.energyBtn:hover:after,.energyBtn:focus-visible:after,.energyBtn.selected:after{opacity:.55;animation:feelingScan .9s linear infinite}.energyBtn:hover,.energyBtn:focus-visible,.energyBtn.selected{background:color-mix(in srgb,var(--feeling-color) 42%,#171717);border-color:color-mix(in srgb,var(--feeling-color) 72%,#ffffff 10%);color:#fff}.energyBtn.selected{box-shadow:inset 0 0 0 1px color-mix(in srgb,var(--feeling-color) 58%,transparent),0 0 18px color-mix(in srgb,var(--feeling-color) 24%,transparent)}.energyBtn[data-energy=Drained]{--feeling-color:#6E63A8}.energyBtn[data-energy=Low]{--feeling-color:#5878A8}.energyBtn[data-energy=Okay]{--feeling-color:#6F8B8A}.energyBtn[data-energy=Good]{--feeling-color:#5F9B72}.energyBtn[data-energy=Energised]{--feeling-color:#D5A53E}.energyBtn[data-energy=Great]{--feeling-color:#D56B54}@keyframes feelingWarp{0%{transform:scale(1.03) skew(-2deg) translate(-1.5%);filter:saturate(1.02) blur(.8px)}50%{transform:scale(1.12) skew(1deg) translate(1%);filter:saturate(1.22) blur(1.5px)}to{transform:scale(1.06) skew(3deg) translate(-.5%);filter:saturate(1.1) blur(.6px)}}@keyframes feelingScan{0%{background-position:0 0,-80% 0}to{background-position:0 8px,180% 0}}@media (prefers-reduced-motion: reduce){.energyBtn:before,.energyBtn:after{animation:none!important}}.energyHistory{display:grid;gap:8px;margin-top:12px}.energyLog{display:flex;justify-content:space-between;gap:12px;padding:10px 12px;border-radius:20px;background:#252525;font-size:13px}.energyLog span:last-child{color:#999}.tempoExperiment{margin-top:18px;padding-top:20px;border-top:.4px solid var(--line)}.tempoExperimentHead{display:flex;justify-content:space-between;align-items:flex-start;gap:20px;margin-bottom:16px}.tempoEstimate{font-size:18px;font-weight:680;white-space:nowrap}.tempoQuad{position:relative;width:min(360px,100%);aspect-ratio:1/1;border-radius:36px;background:#ffffff06;border-top:.4px solid var(--line);border-left:.4px solid var(--line);border-right:.4px solid var(--line);border-bottom:.2px solid var(--lineb);overflow:hidden;touch-action:none;cursor:crosshair}.tempoCross{position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none;background:linear-gradient(to right,transparent calc(50% - .5px),rgba(255,255,255,.12) 50%,transparent calc(50% + .5px)),linear-gradient(to bottom,transparent calc(50% - .5px),rgba(255,255,255,.12) 50%,transparent calc(50% + .5px))}.tempoDot{position:absolute;left:50%;top:50%;width:22px;height:22px;border-radius:50%;background:var(--text);transform:translate(-50%,-50%);pointer-events:none;box-shadow:0 0 0 6px #ffffff12}.tempoPole{position:absolute;pointer-events:none;color:var(--muted);font-size:12px}.tempoFast{top:12px;left:50%;transform:translate(-50%)}.tempoSlow{bottom:12px;left:50%;transform:translate(-50%)}.tempoHard{right:12px;top:50%;transform:translateY(-50%)}.tempoLow{left:12px;top:50%;transform:translateY(-50%)}.tempoReadout{margin-top:12px;font-size:13px;color:var(--muted)}.tempoRevealRow{margin-top:14px}.tempoRevealBtn{font-size:13px;color:#b8bcc6;text-decoration-color:#6d7480}.editTempoExperiment{margin-top:14px}.editTempoExperiment[hidden]{display:none}.testingZone{position:relative;overflow:hidden;border-radius:28px;background:#202226;border:1px solid #4a4f58;box-shadow:none}.testingZoneInner{position:relative;padding:24px;background:linear-gradient(rgba(176,186,199,.045) 1px,transparent 1px),linear-gradient(90deg,rgba(176,186,199,.045) 1px,transparent 1px),#202226;background-size:20px 20px}.testingZoneTitleBlock{max-width:760px;margin-bottom:24px}.testingZoneTitleRow{display:flex;justify-content:space-between;align-items:center;gap:20px}.testingZoneTitleRow strong{color:#d6d9df;font-size:18px;font-weight:650}.testingZone .tempoEstimate{color:#aeb4bf;font-weight:560}.testingZoneExplanation{margin:10px 0 0;color:#9ea5b0;font-size:13px;line-height:1.5;text-align:left}.testingZoneLayout{display:grid;grid-template-columns:minmax(280px,360px) minmax(0,1fr);grid-template-areas:"controller feedback";gap:32px;align-items:start}.testingFeedbackForm{grid-area:feedback;display:grid;gap:18px;min-width:0;padding:20px;border:.4px solid var(--line);border-radius:20px;background:#252525}.testingFeedbackHeading{color:#d6d9df;font-size:15px;font-weight:650}.testingFeedbackField{display:grid;gap:8px;color:#9ea5b0;font-size:12px}.testingFeedbackField select,.testingFeedbackField textarea{width:100%;border:.4px solid var(--line);background:#171717;color:#d6d9df;border-radius:14px;padding:10px 12px;font:inherit}.testingFeedbackField textarea{resize:vertical;min-height:82px}.testingRating{display:grid;grid-template-columns:repeat(5,1fr);gap:6px}.testingRating button{min-height:38px;border-radius:12px;border:.4px solid var(--line);background:#171717;color:#c7ccd5;cursor:pointer}.testingRating button.selected{border-color:#c7ccd5;background:#343434}.testingFeedbackSubmit{justify-self:start;min-height:42px;padding:0 16px;border-radius:14px;border:0;background:#ffffffe0;color:#111;cursor:pointer}.testingZoneControllerWrap{grid-area:controller;display:flex;flex-direction:column;align-items:center;justify-content:flex-start}.tempoQuadFrame{width:min(320px,100%);aspect-ratio:1/1;padding:0;background:linear-gradient(rgba(176,186,199,.075) 1px,transparent 1px),linear-gradient(90deg,rgba(176,186,199,.075) 1px,transparent 1px),#202226;background-size:20px 20px,20px 20px,auto;border-radius:20px}.testingZone .tempoQuad{width:100%;height:100%;border-radius:20px;background:#202226;border:1px solid #5a606a;box-shadow:none}.testingZone .tempoCross{background:linear-gradient(to right,transparent calc(50% - .5px),rgba(176,186,199,.2) 50%,transparent calc(50% + .5px)),linear-gradient(to bottom,transparent calc(50% - .5px),rgba(176,186,199,.2) 50%,transparent calc(50% + .5px))}.testingZone .tempoDot{width:18px;height:18px;background:transparent;border:1px solid #c4cad4;box-shadow:0 0 0 4px #c4cad40d}.testingZone .tempoPole{color:#8e96a2}.testingZone .tempoReadout{width:min(320px,100%);color:#9ea5b0;text-align:center;margin-top:12px}.testingZone button,.testingZone input,.testingZone select,.testingZone textarea{transition:opacity .14s ease,border-color .14s ease,color .14s ease,background .14s ease}.testingZone button:hover,.testingZone button:focus-visible{filter:none;opacity:.88}@media (max-width:900px){.testingZoneLayout{grid-template-columns:1fr;grid-template-areas:"controller" "feedback"}}#app.light .testingZone{background:#202226;border-color:#4a4f58}#app.light .testingZoneInner{background:linear-gradient(rgba(176,186,199,.045) 1px,transparent 1px),linear-gradient(90deg,rgba(176,186,199,.045) 1px,transparent 1px),#202226}#app.light .testingZone,#app.light .testingZone *{color:#d6d9df!important}#app.light .testingZone .testingFeedbackField,#app.light .testingZone .testingZoneExplanation,#app.light .testingZone .tempoReadout{color:#9ea5b0!important}#app.light .testingZone .tempoQuad{background:#202226;border-color:#5a606a}#app.light .testingZone .tempoDot{background:transparent;border-color:#c4cad4}#app.light .testingFeedbackForm{background:#2a2a2a;border-color:#4a4f58}#app.light .testingFeedbackField select,#app.light .testingFeedbackField textarea,#app.light .testingRating button{background:#171717;border-color:#4a4f58}#app.light .testingRating button.selected{background:#343434}#app.light .testingFeedbackSubmit{background:#ffffffe0;color:#111!important}#app.light .tempoQuad{background:#ffffff7a;border-color:#fff}#app.light .tempoDot{background:#222;box-shadow:0 0 0 6px #0000000d}.activityHeader{display:flex;align-items:center;gap:14px;margin-bottom:20px}.activityIcon{width:44px;height:44px;border-radius:17px;background:#2e2e2e;display:grid;place-items:center;font-size:20px}.activityTitle{font-size:30px;font-weight:720;letter-spacing:-.035em}.activityRows{display:grid;gap:12px}.activityRow{display:grid;grid-template-columns:54px minmax(0,1fr);align-items:center;gap:14px;background:#292929;border-radius:30px;padding:16px 18px}.activityRowIcon{width:54px;height:54px;border-radius:20px;background:#3a3a3a;display:grid;place-items:center;font-size:20px}.activityRowName{font-size:19px;font-weight:690}.activityRowMeta{font-size:14px;color:#b4b4b4;margin-top:3px}.toast{position:absolute;right:26px;top:26px;z-index:60;background:#efefef;color:#090909;border-radius:999px;padding:11px 16px;font-size:13px;font-weight:680;opacity:0;transform:translateY(-8px);pointer-events:none;transition:opacity .18s ease,transform .18s ease}.toast.show{opacity:1;transform:none}.weekHero{display:block}.weekMetric{font-size:clamp(72px,8vw,112px);font-weight:820;letter-spacing:-.075em;line-height:.82}.weekCopy{font-size:clamp(15px,1.4vw,18px);color:var(--muted);margin-top:12px;line-height:1.2;max-width:none;white-space:nowrap}.weekChips{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:10px;margin-top:24px}.weekChip{background:#292929;border-radius:16px;min-height:76px;padding:12px 14px;display:flex;flex-direction:column;justify-content:space-between;gap:8px}.weekChipTop{display:flex;justify-content:space-between;align-items:center;gap:8px}.weekChipTop strong{font-size:13px;font-weight:680}.weekChipTime{font-size:16px;font-weight:700}.weekChipMeta{font-size:11px;color:#888}.weekTick{font-size:14px;font-weight:800;line-height:1}.weekChip.total{background:#242424}.weekChip.total .weekChipTime{font-size:20px}.workoutSurface{position:relative;overflow:hidden;isolation:isolate}.workoutContent{position:relative;z-index:2}.pixelTrailCanvas{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;z-index:1;pointer-events:none}#app.light .pixelTrailCanvas{opacity:.46}.sessionHead{display:flex;justify-content:space-between;align-items:flex-start;gap:20px}.sessionActions{display:flex;gap:28px;align-items:center;flex-wrap:wrap;justify-content:flex-end}.holdEnd{position:relative;overflow:hidden;min-width:138px;min-height:52px;padding:0 20px;border-radius:999px;border:.4px solid var(--line);background:#171717;text-decoration:none;user-select:none;-webkit-user-select:none;touch-action:none}.holdEndFill{position:absolute;inset:0 auto 0 0;width:0;background:#efefef;pointer-events:none}.holdEndLabel{position:relative;z-index:1;mix-blend-mode:difference;color:#fff}.holdEnd.holding{border-color:#666}#stepLabel{font-size:12px!important;line-height:1.2;letter-spacing:.14em;font-weight:760}.exerciseTitle{font-size:clamp(56px,7vw,94px);line-height:.88;letter-spacing:-.065em;font-weight:790;margin-top:6px;color:#d0ff00}.meta{font-size:18px;color:#969696;margin-top:6px}.progress{height:58px;padding:0;background:transparent;border-radius:22px;display:flex;gap:4px;margin-top:24px;overflow:hidden}.progressSegment{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:0;padding:0;display:block;flex:1;min-width:0;background:#3f3f3f;border-radius:22px;position:relative;overflow:hidden;cursor:default}.progressSegment:after{content:"";position:absolute;inset:0 auto 0 0;width:0;background:#efefef;transition:width .2s linear}.progressSegment.done{background:transparent;opacity:0;pointer-events:none}.progressSegment.done:after{display:none}.progressSegment.active:after{width:var(--segment-progress,0%)}#app.resting .progressSegment:not(.done):not(.active),#app.paused .progressSegment:not(.done):not(.active){background:#fff}#app.light.resting .progressSegment:not(.done):not(.active),#app.light.paused .progressSegment:not(.done):not(.active){background:#fff}.progressSegment.rewindable{cursor:pointer}.progressSegment.rewindable:hover{filter:brightness(1.08)}.progressSegment:focus-visible{outline:2px solid var(--periwinkle);outline-offset:-3px}.workGrid{display:grid;grid-template-columns:minmax(0,2fr) minmax(300px,1fr);gap:20px;margin-top:20px}.timerCard,.movementCard,.nextCard{position:relative;border-radius:36px;border-top:.4px solid var(--line);border-left:.4px solid var(--line);border-right:.4px solid var(--line);border-bottom:.2px solid var(--lineb)}.timerCard{min-height:430px;background:#0d0d0d;overflow:hidden}.fill{position:absolute;inset:0 auto 0 0;width:100%;background:#f2f2f2;transition:width .2s linear}.digits{position:absolute;top:0;right:0;bottom:0;left:0;display:flex;align-items:center;justify-content:center;font-size:clamp(190px,28vw,390px);font-weight:850;letter-spacing:-.11em;color:#fff;mix-blend-mode:difference;font-variant-numeric:tabular-nums}.movementCard{background:#151515;min-height:430px;display:grid;place-items:center;padding:28px}.movementMark{font-size:20px;font-weight:760;color:#d5d5d5;text-align:center}.movementCard{overflow:hidden}.movementRippleCanvas{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;z-index:0}.movementMark{position:relative;z-index:2}.nextCard{background:#1d1d1d;padding:28px;display:flex;justify-content:space-between;align-items:center;gap:20px;min-height:146px}.nextIcon{width:66px;height:66px;border-radius:24px;background:#2d2d2d;display:grid;place-items:center;font-size:26px;flex:0 0 auto}.sectionLabel{font-size:18px;font-weight:400;letter-spacing:-.015em;line-height:1.2;margin:0 0 10px 28px}.moveSection{grid-column:span 12}.moveSection .workoutGallery{width:100%}.nextWrap{margin-top:20px}.nextLabel{font-size:18px;font-weight:760;margin:0 0 10px 28px}.nextCard{background:var(--card);padding:28px;display:flex;justify-content:space-between;align-items:center;gap:28px;min-height:108px;border-radius:36px;border-top:.4px solid var(--line);border-left:.4px solid var(--line);border-right:.4px solid var(--line);border-bottom:.2px solid var(--lineb)}.nextMain{display:flex;align-items:center;gap:18px;min-width:0}.nextIcon{width:54px;height:54px;border-radius:16px;background:#2d2d2d;display:grid;place-items:center;font-size:20px;flex:0 0 auto}.nextName{font-size:24px;font-weight:400;letter-spacing:-.025em;line-height:1.05}.sessionControlRow{display:flex;justify-content:flex-end;gap:28px;align-items:center;margin-top:20px}.nextActions{display:flex;gap:28px;align-items:center;flex:0 0 auto}.skipBtn{min-width:150px;min-height:52px;padding:0 18px;border:1px solid var(--line);background:transparent;color:var(--text);text-decoration:none;font-weight:680}.pause{min-width:150px;min-height:52px;padding:0 18px;font-size:16px}#app.light .nextCard{background:#fffc;border-color:#fff}#app.light .nextIcon{background:#ffe6ef;color:#bd4b7a!important}#app.light .skipBtn{background:transparent;color:#222!important;border-color:#fff}.upcomingList{display:grid;gap:12px;margin-top:12px}.upcomingCard{--future-opacity:1;display:flex;align-items:center;justify-content:space-between;gap:28px;min-height:108px;padding:28px;border-radius:36px;background:var(--card);border-top:.4px solid var(--line);border-left:.4px solid var(--line);border-right:.4px solid var(--line);border-bottom:.2px solid var(--lineb);opacity:var(--future-opacity);transition:opacity .22s ease}.upcomingCard:nth-child(-n+3){--future-opacity:1}.upcomingCard:nth-child(4){--future-opacity:.72}.upcomingCard:nth-child(5){--future-opacity:.48}.upcomingCard:nth-child(6){--future-opacity:.3}.upcomingCard:nth-child(n+7){--future-opacity:.16}.upcomingCard.sessionHidden{--future-opacity:.24!important;filter:saturate(.15)}.upcomingCard.sessionHidden .upcomingName{text-decoration:line-through}.upcomingCard.sessionHidden .upcomingIcon{opacity:.45}.upcomingCard.sessionHidden .upcomingMeta{opacity:.55}.upcomingInfo{display:flex;align-items:center;gap:18px;min-width:0}.upcomingIcon{width:54px;height:54px;flex:0 0 auto;border-radius:16px;background:#2d2d2d;display:grid;place-items:center;font-size:20px}.upcomingName{font-size:24px;font-weight:400;letter-spacing:-.025em;line-height:1.05}.upcomingMeta{font-size:14px;color:var(--muted);margin-top:5px}.skipSessionBtn{flex:0 0 auto;min-height:52px;padding:0 18px;border:1px solid var(--line);background:transparent;color:var(--text);font-weight:680}#app.light .upcomingCard{background:#fffc;border-color:#fff}#app.light .upcomingIcon{background:#ece7ff;color:#715bd0!important}#app.light .skipSessionBtn{border-color:#fff;color:#222!important}@media (max-width:900px){.weekCopy{white-space:normal}.nextCard{align-items:flex-start;flex-direction:column}.sessionControlRow{width:100%}.skipBtn,.pause{flex:1;min-width:0}.upcomingCard{align-items:flex-start;flex-direction:column}.skipSessionBtn{width:100%}}.countdown{display:none;position:fixed;top:0;right:0;bottom:0;left:0;width:125vw;height:125dvh;background:#090909;z-index:300;align-items:center;justify-content:center;flex-direction:column;text-align:center;overflow:hidden}.countdown.active{display:flex}.pixelCanvas{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;display:block;z-index:1}.countdown:before{content:"";position:absolute;top:0;right:0;bottom:0;left:0;background:radial-gradient(circle at center,rgba(174,185,255,.14),transparent 58%);pointer-events:none}.countNum{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);z-index:3}.countNum{font-size:clamp(180px,32vw,430px);font-weight:850;line-height:.75;letter-spacing:-.1em}.modalBackdrop{display:none;position:fixed;top:0;right:0;bottom:0;left:0;width:125vw;height:125dvh;z-index:145;background:#000000a8;padding:35px;box-sizing:border-box;align-items:center;justify-content:center}.modalBackdrop.open{display:flex}.modal{width:min(1480px,100%);height:100%;max-width:1480px;max-height:none;overflow:hidden;background:#202020;border-radius:36px;padding:0;display:flex;flex-direction:column;box-sizing:border-box;border-top:.4px solid var(--line);border-left:.4px solid var(--line);border-right:.4px solid var(--line);border-bottom:.2px solid var(--lineb)}.modalStatic{flex:0 0 auto;padding:28px;background:#202020;border-bottom:.4px solid #343434}.modalHead{display:flex;justify-content:space-between;align-items:flex-start;gap:20px;margin-bottom:16px}.modalHeaderActions{display:flex;gap:28px;align-items:center;flex:0 0 auto}.modalHead h2{font-size:38px;letter-spacing:-.045em;line-height:1;margin:3px 0 0}.editNameRow{display:grid;gap:8px;margin-bottom:14px}.editNameLabel{font-size:13px;color:var(--muted)}.editNameInput{min-height:58px;border-radius:22px;border:.4px solid var(--line);background:#151515;color:var(--text);padding:0 18px;font-size:22px;font-weight:680;letter-spacing:-.02em}#app.light .editNameInput{background:#ffffffe0;color:#222!important;border-color:#fff}.timeTiles{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin-bottom:14px}.timeTile{background:#252525;min-height:186px;padding:20px;display:flex;flex-direction:column;justify-content:space-between}.timeHeader{display:flex;align-items:center;gap:18px}.timeIcon{width:58px;height:58px;border-radius:20px;background:#313131;display:grid;place-items:center;flex:0 0 auto;font-size:22px;font-weight:760}.timeCopy{min-width:0}.timeLabel{font-size:20px;line-height:1;font-weight:760;letter-spacing:-.025em}.timeValue{font-size:20px;line-height:1.15;font-weight:450;letter-spacing:-.02em;color:#cfcfcf;margin-top:7px}.rangeTrack{height:58px;border-radius:22px;background:#151515;overflow:hidden;position:relative;border-top:.4px solid var(--line);border-left:.4px solid var(--line);border-right:.4px solid var(--line);border-bottom:.2px solid var(--lineb)}.rangeFill{position:absolute;inset:0 auto 0 0;background:#efefef;border-radius:22px 0 0 22px}.rangeInput{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;opacity:0;cursor:pointer}.exerciseScroller{min-height:0;overflow-y:auto;padding:4px 20px 22px 28px;border-top:.2px solid #303030;scrollbar-gutter:stable}.exerciseScroller::-webkit-scrollbar{width:8px}.exerciseScroller::-webkit-scrollbar-track{background:transparent}.exerciseScroller::-webkit-scrollbar-thumb{background:#4a4a4a;border-radius:999px}.sectionTitle{font-size:13px;text-transform:uppercase;letter-spacing:.12em;color:#999;margin:18px 0 10px}.moveList{display:grid;gap:10px}.moveRow{display:flex;justify-content:space-between;align-items:center;gap:28px;background:#2a2a2a;border-radius:26px;padding:28px}.moveRow.hidden{opacity:.46}.moveRow.hidden .moveItemName{text-decoration:line-through}.moveItemName{font-size:20px;line-height:1.15;font-weight:720;letter-spacing:-.02em}.moveMeta{font-size:13px;color:#999;margin-top:5px}.hideBtn{border-radius:999px;min-height:40px;padding:0 14px;border:.4px solid var(--line);background:#1b1b1b;color:#fff}.removeBtn{position:relative;overflow:hidden;border-radius:999px;min-height:40px;padding:0 14px;border:.4px solid var(--line);background:#1b1b1b;color:#fff;cursor:pointer}.removeFill{position:absolute;inset:0 auto 0 0;width:0;background:var(--danger);pointer-events:none;transition:width 0s linear}.removeLabel{position:relative;z-index:1}.addRow{display:grid;grid-template-columns:1fr auto;gap:10px;margin-top:18px}.addInput{min-height:52px;border-radius:999px;border:.4px solid var(--line);background:#151515;color:#fff;padding:0 18px;font-size:16px}.addBtn{border-radius:999px;min-height:52px;padding:0 18px;border:0;background:#efefef;color:#090909;font-weight:760}.routineSummary{margin-top:18px;background:#171717;border-radius:26px;padding:16px 18px;color:#cfcfcf}.settingsHeader{display:flex;align-items:center;gap:16px;margin-bottom:30px}.back{width:58px;padding:0;font-size:30px}.settingsTitle{font-size:clamp(46px,5vw,72px);font-weight:790;letter-spacing:-.05em}.tabs.rubberTabs{position:relative;display:inline-flex;gap:0;padding:4px;margin-bottom:22px;border-radius:16px;background:#171717;border:.4px solid var(--line);overflow:hidden}.rubberIndicator{position:absolute;top:4px;left:4px;height:calc(100% - 8px);width:0;border-radius:16px;background:#efefef;transition:left .34s cubic-bezier(.2,1.35,.4,1),width .34s cubic-bezier(.2,1.35,.4,1),transform .18s ease;transform-origin:center;z-index:0}.tabs.rubberTabs .tab{position:relative;z-index:1;min-height:52px;padding:0 20px;border:0;background:transparent;color:var(--text);font-weight:680}.tabs.rubberTabs .tab.active{color:#090909}#app.light .tabs.rubberTabs{background:#ffffffb3;border-color:#fff}#app.light .rubberIndicator{background:#222}#app.light .tabs.rubberTabs .tab.active{color:#fff!important}.settingsPane{display:none}.settingsPane.active{display:block}.integrationList,.toggleList{display:grid;gap:12px}.integration,.toggleRow{display:flex;justify-content:space-between;align-items:center;gap:18px;background:#282828;border-radius:28px;padding:18px 20px}.integration strong,.toggleRow strong{font-size:20px}.status{font-size:13px;color:#999;margin-top:4px}.note{color:#999;line-height:1.5;max-width:860px}.switch{position:relative;width:58px;height:34px;border-radius:999px;background:#444;border:.4px solid var(--line);flex:0 0 auto;cursor:pointer}.switch:after{content:"";position:absolute;width:26px;height:26px;border-radius:999px;top:3px;left:3px;background:#ddd;transition:left .18s ease}.switch.on{background:#eee}.switch.on:after{left:28px;background:#111}.themeChoice{display:flex;gap:12px;flex-wrap:wrap;align-items:center;margin:0}.themeBtn{min-height:40px;padding:0 14px;border:.4px solid var(--line);background:#1b1b1b;color:var(--text);cursor:pointer}.themeBtn.active{background:#efefef;color:#090909}.settingsSelect{min-width:120px;min-height:40px;padding:0 34px 0 12px;border-radius:16px;border:.4px solid var(--line);background:#1b1b1b;color:var(--text);font:inherit}#app.light .settingsSelect{background:#ffffffe0;color:#222;border-color:#fff}.motionControlRow{align-items:center}.motionRangeWrap{display:flex;align-items:center;justify-content:flex-end;gap:12px;min-width:230px}.motionRangeWrap input{width:160px}.motionRangeWrap span{font-size:13px;color:var(--muted);min-width:64px;text-align:right}#app.light .themeBtn.active{background:#222;color:#fff!important}.dangerText{color:#f77}.confirmBackdrop{display:none;position:fixed;top:0;right:0;bottom:0;left:0;z-index:80;padding:28px;background:#000000a8;align-items:center;justify-content:center}.confirmBackdrop.open{display:flex}.confirmCard{width:min(560px,100%);background:var(--card);border-radius:36px;padding:28px;border-top:.4px solid var(--line);border-left:.4px solid var(--line);border-right:.4px solid var(--line);border-bottom:.2px solid var(--lineb)}.confirmTitle{font-size:34px;line-height:1.02;font-weight:760;letter-spacing:-.04em}.confirmActions{display:flex;justify-content:flex-end;align-items:center;gap:28px;margin-top:28px}.holdDelete{position:relative;overflow:hidden;min-width:110px;min-height:52px;padding:0 22px;border:1px solid #8c2e2e;border-radius:16px;background:#311313;color:#fff;font-weight:780;cursor:pointer}.holdDeleteFill{position:absolute;inset:0 auto 0 0;width:0;background:#d53d3d;pointer-events:none}.holdDeleteLabel{position:relative;z-index:1;color:#fff}#app.light .confirmCard{background:#fffffff0;border-color:#fff}#app.light .holdDelete{background:#f5dede;border-color:#e3a0a0;color:#222}.bottomNav{position:sticky;bottom:28px;display:flex;gap:28px;z-index:100;width:max-content;margin:-82px 0 0 28px}.navBtn{width:54px;height:54px;padding:0;border-radius:20px;background:#171717;border:.4px solid var(--line);color:#fff}.navBtn.active{background:#eee;color:#090909}@media (max-width:900px){.weekCopy{white-space:normal}.moveOption,.addMoveCard{flex-basis:180px}.weekHero{display:block}.grid{grid-template-columns:1fr}.moveSection,.activityCard,.weekly,.energySection{grid-column:auto}.workGrid{grid-template-columns:1fr}.timerCard,.movementCard{min-height:320px}.weekChips{grid-template-columns:repeat(4,minmax(0,1fr))}.timeTiles{grid-template-columns:1fr}}@media (max-width:620px){.modal{width:100%;height:100%;max-height:100%}#app{padding:0}.shell{border-radius:0}.view{padding:18px 18px 94px}.card,.timerCard,.movementCard,.nextCard,.modal,.tile{border-radius:30px}.title{font-size:50px}.exerciseTitle{font-size:58px}.timerCard{min-height:280px}.digits{font-size:180px}.weekChips{grid-template-columns:repeat(2,minmax(0,1fr))}.modalBackdrop{padding:12px}.modal{height:100%}.modalStatic{padding:18px}.exerciseScroller{padding:4px 12px 18px 18px}.addRow{grid-template-columns:1fr}}button,.primary,.tab,.back,.navBtn,.themeBtn,.energyBtn,.hideBtn,.addBtn,.removeBtn,.skipBtn,.holdEnd,.switch,.editNameInput,.addInput,.rangeTrack,.progress,.progressSegment{border-radius:16px!important}.card,.panel,.tile,.workoutPanel,.timerCard,.movementCard,.nextCard,.modal{border-radius:36px}.movementCreatorLaunch{display:flex;gap:12px;align-items:center;margin:4px 0 18px}.movementCreatorOpen,.restAddBtn{min-height:44px;padding:0 16px;border-radius:16px;font-weight:680;cursor:pointer}.movementCreatorOpen{border:0;background:#efefef;color:#090909}.restAddBtn{border:.4px solid var(--line);background:#1b1b1b;color:var(--text)}.movementCreator{position:relative;margin:0 0 18px;padding:24px 28px;border-radius:28px;background:#1d1d1d;border-top:.4px solid var(--line);border-left:.4px solid var(--line);border-right:.4px solid var(--line);border-bottom:.2px solid var(--lineb)}.movementCreator[hidden]{display:none}.movementCreatorHead{display:flex;align-items:center;justify-content:space-between;gap:20px;margin-bottom:22px}.movementCreatorHead h3{margin:0;font-size:20px;line-height:1;font-weight:720;letter-spacing:-.025em}.movementCreatorClose{position:static;font-size:13px}.movementCreatorFields{display:grid;grid-template-columns:minmax(0,1.45fr) minmax(0,.85fr);gap:20px 24px}.movementCreatorFields[hidden]{display:none!important}.movementCreatorFields>label{display:grid;gap:8px;min-width:0;font-size:13px;color:var(--text);font-weight:620}.movementTimingRow{grid-column:1/-1;display:grid;grid-template-columns:minmax(300px,440px) minmax(260px,1fr) auto;gap:22px;align-items:end}.durationStack{display:grid;gap:8px;font-size:13px;color:var(--text);font-weight:620}.creatorDurationRow{display:grid;grid-template-columns:minmax(120px,1fr) minmax(130px,1fr);gap:16px;align-items:center}.creatorNumber{width:100%;min-width:0}.creatorUnitSelect{min-height:52px;width:100%;padding:0 14px;border-radius:16px;border:.4px solid var(--line);background:#151515;color:var(--text);font:inherit}.globalTimingToggle{display:flex!important;align-items:center;gap:10px!important;min-height:52px;cursor:pointer;color:var(--text)!important;font-size:13px!important;font-weight:600;white-space:nowrap}.globalTimingToggle input{position:absolute;opacity:0;pointer-events:none}.toggleTrack{position:relative;width:48px;height:28px;border-radius:999px;background:#484848;border:.4px solid var(--line);flex:0 0 auto;transition:background .16s ease}.toggleThumb{position:absolute;width:22px;height:22px;top:2px;left:2px;border-radius:50%;background:#a9a9a9;transition:left .16s ease,background .16s ease}.globalTimingToggle input:checked+.toggleTrack{background:#efefef}.globalTimingToggle input:checked+.toggleTrack .toggleThumb{left:22px;background:#111}.toggleLabel{color:#ddd}.creatorAddButton{min-width:122px;min-height:52px;align-self:end}#app.light .movementCreator{background:#ffffffdb;border-color:#fff}@media (max-width:900px){.movementCreatorFields{grid-template-columns:1fr}.movementTimingRow{grid-column:auto;grid-template-columns:1fr;align-items:stretch}.globalTimingToggle{min-height:44px}.creatorAddButton{width:100%}}.moveRow.restItem{background:#22252a;border-style:dashed}.moveRow.restItem .moveItemName{font-weight:560}.moveKindBadge{display:inline-flex;margin-left:8px;padding:3px 7px;border:1px solid #555b65;border-radius:999px;font-size:10px;color:#9da5b2;vertical-align:middle}#app.light .movementCreator{background:#ffffffd1;border-color:#fff}#app.light .restAddBtn{background:#ffffffb8;color:#222;border-color:#fff}#app.light .toggleTrack{border-color:#fff}@media (max-width:900px){.movementCreatorFields,.movementCreatorFields.restFields{grid-template-columns:1fr;padding-right:0}.movementCreatorClose{position:static;margin-left:auto;display:block;margin-bottom:16px}}.createMoveOptions{margin:0 0 18px;padding:18px;border-radius:24px;background:#242424;border:.4px solid var(--line)}.createMoveOptions[hidden]{display:none}.createOptionLabel{font-size:12px;text-transform:uppercase;letter-spacing:.12em;color:var(--muted);margin-bottom:10px}.createPresetChoice{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}.createPresetBtn{min-height:76px;padding:14px 16px;border-radius:18px;border:1px solid var(--line);background:transparent;color:var(--text);text-align:left;cursor:pointer}.createPresetBtn strong{display:block;font-size:15px}.createPresetBtn span{display:block;color:var(--muted);font-size:12px;margin-top:4px}.createPresetBtn.active{background:#efefef;color:#090909;border-color:#efefef}.createPresetBtn.active span{color:#575757}.createExtras{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px;margin-top:12px}.createExtraToggle{display:flex;align-items:flex-start;gap:10px;padding:12px 14px;border:1px solid var(--line);border-radius:18px;cursor:pointer}.createExtraToggle input{margin-top:3px}.createExtraToggle span{display:grid;gap:3px}.createExtraToggle strong{font-size:14px}.createExtraToggle small{font-size:11px;color:var(--muted)}.creatorUnitSelect{min-height:52px;padding:0 12px;border-radius:16px;border:.4px solid var(--line);background:#171717;color:var(--text);font:inherit}.autoRestSummary{display:inline-flex;align-items:center;gap:8px;margin-left:8px;color:#9da5b2;font-size:11px}#app.light .createMoveOptions{background:#fffc;border-color:#fff}#app.light .createPresetBtn,#app.light .createExtraToggle{border-color:#fff;color:#222}#app.light .creatorUnitSelect{background:#fff;color:#222;border-color:#fff}@media (max-width:900px){.createPresetChoice,.createExtras{grid-template-columns:1fr}}.movementDurationField{display:grid;gap:8px}.movementTimingHead{display:flex;align-items:center;justify-content:space-between;gap:12px;font-size:13px;color:var(--muted)}.globalTimingToggle{display:inline-flex!important;grid-template-columns:none!important;align-items:center;gap:7px!important;color:var(--text)!important;white-space:nowrap}.globalTimingToggle input{margin:0}.globalTimingValue{min-height:52px;display:flex;align-items:center;padding:0 14px;border-radius:16px;border:.4px solid var(--line);background:#1b1b1b;color:var(--muted);font-size:13px}.movementTypeBtn:disabled{opacity:.32;cursor:not-allowed}#app.light .globalTimingValue{background:#ffffffc2;border-color:#fff}.createFlow{display:grid;gap:12px;padding:4px 0 10px}.createFlow[hidden]{display:none}.createStep{border-radius:28px;background:#222;border-top:.4px solid var(--line);border-left:.4px solid var(--line);border-right:.4px solid var(--line);border-bottom:.2px solid var(--lineb);overflow:hidden}.createStepHeader{width:100%;min-height:72px;padding:18px 22px;border:0;background:transparent;color:var(--text);display:flex;align-items:center;justify-content:space-between;gap:24px;text-align:left;cursor:pointer}.createStepHeader:disabled{cursor:not-allowed;opacity:.42}.createStepIdentity{display:flex;align-items:center;gap:12px}.createStepIdentity strong{font-size:18px;letter-spacing:-.02em}.createStepNumber{width:28px;height:28px;border-radius:999px;display:grid;place-items:center;border:.4px solid var(--line);color:var(--muted);font-size:12px}.createStepSummary{min-width:0;color:var(--muted);font-size:13px;text-align:right}.createStepBody{display:none;padding:0 18px 18px}.createStep.active .createStepBody{display:block}.createStep.active .createStepHeader{border-bottom:.4px solid #343434}.createStepSlot{display:grid;gap:14px}.createStepFooter{display:flex;justify-content:flex-end;margin-top:18px}.createStepFooter .primary:disabled{opacity:.35;cursor:not-allowed}.modal.createMode .movementTimingRow{display:none}.modal.createMode .movementCreator{margin-bottom:10px}.modal.createMode .movementCreatorFields{grid-template-columns:minmax(0,1.4fr) minmax(0,1fr)}.modal.createMode .movementCreatorFields.restFields{grid-template-columns:1fr}.modal.createMode .movementCreatorActions{margin-top:18px}.modal.createMode .movementCreatorLaunch{margin-top:0}.modal.createMode .sectionTitle{margin-top:12px}.modal.createMode .modalStatic{padding-bottom:18px}.modal:not(.createMode) .createFlow{display:none!important}#app.light .createStep{background:#ffffffbd;border-color:#fff}#app.light .createStep.active .createStepHeader{border-bottom-color:#fff}#app.resting .movementCard{background:#ffffff0e}#app.resting .movementRippleCanvas{opacity:1}#app.light.resting .movementCard{background:#ffffff38}.nextCard .skipSessionBtn{margin-left:auto}.modal:not(.createMode) .movementCreatorLaunch{margin-top:32px}.testingFeedbackThanks{grid-area:feedback;min-height:220px;padding:24px;border:.4px solid var(--line);border-radius:20px;background:#252525;display:flex;flex-direction:column;justify-content:center;align-items:flex-start;gap:8px}.testingFeedbackThanks[hidden]{display:none}.testingFeedbackThanks strong{font-size:24px;color:#f0f0f0}.testingFeedbackThanks p{margin:0;color:#9ea5b0;font-size:13px}.testingFeedbackThanks a{color:#d6d9df;text-underline-offset:3px}#app.light .testingFeedbackThanks{background:#2a2a2a;border-color:#4a4f58}:host(:fullscreen){overflow:auto;width:100vw;height:100vh}.entitySelect{max-width:min(320px,46vw);text-overflow:ellipsis}.integration .status code{font-size:12px;padding:1px 6px;border-radius:6px;background:#ffffff14}#app.light .integration .status code{background:#0000000f}.integration .pill[disabled]{cursor:default;opacity:.7}#app :focus{outline:none}#app :focus-visible{outline:3px solid #D0FF00;outline-offset:3px}#app .workoutPanel:focus-visible{outline-offset:-3px}#app.light :focus-visible{outline-color:#3458d4}@media (max-width:620px){.bottomNav{margin-left:18px}}.shell:has(.countdown.active) .bottomNav{visibility:hidden}@media (max-width:900px){.workoutPanel:not(.active):not(.addPanel) .panelExpanded{opacity:1;filter:none;pointer-events:auto}}.grid>*{min-width:0}.energyBtn[data-level="1"]{--feeling-color:#6E63A8}.energyBtn[data-level="2"]{--feeling-color:#5878A8}.energyBtn[data-level="3"]{--feeling-color:#6F8B8A}.energyBtn[data-level="4"]{--feeling-color:#5F9B72}.energyBtn[data-level="5"]{--feeling-color:#D5A53E}.energyBtn[data-level="6"]{--feeling-color:#D56B54}.checkinQuestion+.checkinQuestion{margin-top:36px}.checkinStatus{margin-top:22px;font-size:15px;color:var(--muted)}.checkinStatus.done{color:var(--text)}.checkinStatus.done:before{content:"✓  ";font-weight:800}.insightSection{grid-column:span 12;margin-top:20px}.insightCard{display:grid;gap:28px}.insightTop{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:28px;align-items:end}.insightBig{font-size:clamp(56px,6vw,88px);font-weight:820;letter-spacing:-.07em;line-height:.85}.insightStats{display:grid;grid-auto-flow:column;grid-auto-columns:minmax(130px,1fr);gap:10px}.insightBody{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1.3fr);gap:28px;align-items:end}.insightLines{display:grid;gap:12px}.insightLine{font-size:20px;line-height:1.3;letter-spacing:-.015em}.insightLine strong{font-weight:780}.insightLine.muted{font-size:15px;color:var(--muted);line-height:1.45}.dayStrip{display:grid;grid-template-columns:repeat(14,minmax(0,1fr));gap:6px;align-items:end}.day{display:grid;gap:8px;justify-items:center}.dayBars{position:relative;width:100%;height:120px;border-radius:12px;background:#ffffff0a;overflow:hidden}.stepBar,.moveBar{position:absolute;bottom:0;border-radius:10px}.stepBar{left:0;right:0;background:#ffffff1f}.moveBar{left:22%;right:22%;background:#d0ff00}.day.today .dayBars{box-shadow:inset 0 0 0 1px #ffffff59}.dayDots{display:flex;gap:3px}.dayDot{width:8px;height:8px;border-radius:50%}.dayDot.empty{box-shadow:inset 0 0 0 1px #555}.dayLabel{font-size:11px;color:var(--muted)}.day.today .dayLabel{color:var(--text);font-weight:760}.chartLegend{display:flex;gap:18px;flex-wrap:wrap;margin-top:14px;font-size:12px;color:var(--muted)}.chartLegend i{display:inline-block;width:10px;height:10px;border-radius:3px;margin-right:6px;vertical-align:-1px}.lgMove{background:#d0ff00}.lgSteps{background:#ffffff38}.lgDot{background:linear-gradient(90deg,#5f9b72 50%,#d5a53e 50%);border-radius:50%!important}#app.light .dayBars{background:#0000000a}#app.light .stepBar{background:#0000001a}#app.light .moveBar,#app.light .lgMove{background:#9aa8ff}#app.light .lgSteps{background:#00000024}#app.light .day.today .dayBars{box-shadow:inset 0 0 0 1px #00000040}#app.light .dayDot.empty{box-shadow:inset 0 0 0 1px #bbb}@media (max-width:900px){.insightSection{grid-column:auto}.insightTop,.insightBody{grid-template-columns:1fr}.insightStats{grid-auto-flow:row;grid-template-columns:repeat(auto-fit,minmax(120px,1fr))}.dayBars{height:90px}}#app.light .energyLog{background:#fffc}#app.light .energyLog span:last-child{color:#666!important}@media (max-width:900px){.energyScale{grid-template-columns:repeat(3,minmax(0,1fr))}}', Ui = `<main id="app"><div class="shell">
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
        <div class="activityRow" id="moodRow">
          <div class="activityRowIcon">☺</div>
          <div><div class="activityRowName">Mood</div><div class="activityRowMeta" id="moodMeta">Not checked in yet today</div></div>
        </div>
        <div class="activityRow" id="energyLevelRow">
          <div class="activityRowIcon">ϟ</div>
          <div><div class="activityRowName">Energy</div><div class="activityRowMeta" id="energyLevelMeta">Not checked in yet today</div></div>
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
      <div class="sectionLabel" id="checkinLabel">Morning check-in</div>
      <section class="wellness energyFloat">
      <div class="checkinQuestion">
        <div class="energyQuestion">How's your mood?</div>
        <div class="energyScale" data-scale="mood">
        <button class="energyBtn" data-scale="mood" data-level="1" data-energy="Rough"><span>Rough</span></button>
        <button class="energyBtn" data-scale="mood" data-level="2" data-energy="Low"><span>Low</span></button>
        <button class="energyBtn" data-scale="mood" data-level="3" data-energy="Flat"><span>Flat</span></button>
        <button class="energyBtn" data-scale="mood" data-level="4" data-energy="Okay"><span>Okay</span></button>
        <button class="energyBtn" data-scale="mood" data-level="5" data-energy="Good"><span>Good</span></button>
        <button class="energyBtn" data-scale="mood" data-level="6" data-energy="Great"><span>Great</span></button>
        </div>
      </div>
      <div class="checkinQuestion">
        <div class="energyQuestion">How's your energy?</div>
        <div class="energyScale" data-scale="energy">
        <button class="energyBtn" data-scale="energy" data-level="1" data-energy="Drained"><span>Drained</span></button>
        <button class="energyBtn" data-scale="energy" data-level="2" data-energy="Low"><span>Low</span></button>
        <button class="energyBtn" data-scale="energy" data-level="3" data-energy="Okay"><span>Okay</span></button>
        <button class="energyBtn" data-scale="energy" data-level="4" data-energy="Good"><span>Good</span></button>
        <button class="energyBtn" data-scale="energy" data-level="5" data-energy="Energised"><span>Energised</span></button>
        <button class="energyBtn" data-scale="energy" data-level="6" data-energy="Great"><span>Great</span></button>
        </div>
      </div>
      <div class="checkinStatus" id="checkinStatus"></div>
      <div class="energyHistory" id="energyHistory"></div>
      </section>
    </div>

    <div class="insightSection">
      <div class="sectionLabel">Movement &amp; you</div>
      <section class="card insightCard" id="insightCard"></section>
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
      <p class="note">Move Assistant can work on its own. Pick your step sensor so general movement counts alongside your moves.</p>
      <div class="integrationList">
        <div class="integration"><div><strong>Steps</strong><div class="status" id="stepsStatus" data-empty="Your phone's step sensor from the Companion app">Your phone's step sensor from the Companion app</div></div><select class="settingsSelect entitySelect" id="stepsEntity" data-kind="steps" aria-label="Steps sensor"></select></div>
        <div class="integration"><div><strong>Home Assistant</strong><div class="status">Moves send a <code>move_assistant</code> event on start, each step, rest, pause and finish — use it in automations for lights, sound and displays</div></div><button class="pill" type="button" disabled>Connected</button></div>
      </div>
    </section>
  </div>

  <div class="settingsPane" id="dataPane">
    <section class="card">
      <h2 style="font-size:34px;margin:0 0 12px">What you see</h2>
      <p class="note">Choose what appears in Move Assistant. Turning these off does not affect move playback.</p>
      <div class="toggleList">
        <div class="toggleRow"><div><strong>Check-in</strong><div class="status">Morning and evening mood and energy check-in</div></div><button class="switch on" data-toggle="checkin"></button></div>
        <div class="toggleRow"><div><strong>Movement &amp; you</strong><div class="status">Streak, recent days and how movement relates to how you feel</div></div><button class="switch on" data-toggle="insights"></button></div>
        <div class="toggleRow"><div><strong>Steps</strong><div class="status">Daily step count</div></div><button class="switch on" data-toggle="steps"></button></div>
        <div class="toggleRow"><div><strong>Mood</strong><div class="status">Latest mood in the Activity card</div></div><button class="switch on" data-toggle="mood"></button></div>
        <div class="toggleRow"><div><strong>Energy</strong><div class="status">Latest energy in the Activity card</div></div><button class="switch on" data-toggle="energyLevel"></button></div>
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
function Ki(u, m) {
  const i = (e) => u.getElementById(e), R = i("workoutView"), L = i("workoutNameInput");
  let V = !0;
  const Yt = i("homeClock");
  function Qt() {
    Yt && (Yt.textContent = new Intl.DateTimeFormat(void 0, { hour: "2-digit", minute: "2-digit" }).format(/* @__PURE__ */ new Date()));
  }
  Qt(), setInterval(Qt, 15e3);
  const Jt = i("createFlow"), Gn = i("createMovementsSlot"), Wn = i("createTimingSlot"), Xt = i("createFinishSlot"), jn = i("movementStepSummary"), Zn = i("timingStepSummary"), Vn = i("finishStepSummary"), bt = i("continueToTiming"), Un = i("continueToFinish"), Kn = i("finishMoveButton");
  let yt = !1, tt = [];
  function Yn(e) {
    !e || tt.some((t) => t.node === e) || tt.push({ node: e, parent: e.parentNode, next: e.nextSibling });
  }
  function nt(e, t) {
    e && (Yn(e), t.appendChild(e));
  }
  function Qn() {
    [...tt].reverse().forEach(({ node: e, parent: t, next: n }) => {
      t && (n && n.parentNode === t ? t.insertBefore(e, n) : t.appendChild(e));
    }), tt = [];
  }
  function xe(e) {
    u.querySelectorAll(".createStep").forEach((t) => {
      t.classList.toggle("active", t.dataset.createStep === e);
    }), e === "timing" && (yt = !0), ie();
  }
  function ie() {
    var c, v;
    if (!F) return;
    b[w];
    const e = P.filter((k) => !k.hidden), t = e.filter((k) => k.kind !== "rest").length, n = e.filter((k) => k.kind === "rest").length;
    jn.textContent = t ? t + " movement" + (t === 1 ? "" : "s") + (n ? " · " + n + " rest" + (n === 1 ? "" : "s") : "") : "No movements yet";
    const o = t > 0, a = u.querySelector('[data-open-step="timing"]'), r = u.querySelector('[data-open-step="finish"]');
    a.disabled = !o, bt.disabled = !o, Zn.textContent = o ? ye(C.value) + " · " + G(y.value) + " movement · " + G(S.value) + " rest" : "Add a movement first", r.disabled = !(o && yt);
    const s = ((L == null ? void 0 : L.value) || "").trim(), l = [];
    (c = i("includeWarmupPreset")) != null && c.checked && l.push("warm-up"), (v = i("includeCooldownPreset")) != null && v.checked && l.push("cooldown"), Vn.textContent = s ? s + (l.length ? " · " + l.join(" + ") : "") : l.length ? l.join(" + ") : "Name and optional extras";
  }
  function Jn() {
    var f, E, A;
    Jt.hidden = !1, yt = !1;
    const e = u.querySelector(".editNameRow"), t = i("createMoveOptions"), n = u.querySelector(".timeTiles"), o = i("routineSummaryModal"), a = u.querySelector(".tempoRevealRow"), r = i("tempoExperiment"), s = (f = i("warmupList")) == null ? void 0 : f.closest("section"), l = i("movementCreatorLaunch"), c = i("movementCreator"), v = (E = i("strengthList")) == null ? void 0 : E.closest("section"), k = (A = i("cooldownList")) == null ? void 0 : A.closest("section");
    [s, l, c, v, k].forEach((D) => nt(D, Gn)), [t, n, o, a, r].forEach((D) => nt(D, Wn)), nt(e, Xt);
    const d = t == null ? void 0 : t.querySelector(".createExtras");
    d && nt(d, Xt), xe("movements"), ie();
  }
  function Xn() {
    Qn(), Jt.hidden = !0, u.querySelectorAll(".createStep").forEach((e) => e.classList.remove("active"));
  }
  u.querySelectorAll("[data-open-step]").forEach((e) => e.addEventListener("click", () => {
    e.disabled || xe(e.dataset.openStep);
  })), bt.addEventListener("click", () => {
    bt.disabled || xe("timing");
  }), Un.addEventListener("click", () => xe("finish")), Kn.addEventListener("click", () => i("saveWorkoutEdit").click());
  const _e = { home: i("homeView"), workout: i("workoutView"), settings: i("settingsView") }, $t = i("homeNav"), en = i("settingsNav");
  function wt(e) {
    Object.entries(_e).forEach(([t, n]) => n.classList.toggle("active", t === e)), $t.classList.toggle("active", e === "home"), en.classList.toggle("active", e === "settings"), e === "settings" && requestAnimationFrame(() => et(u.querySelector(".tab.active"), !1));
  }
  const C = i("totalTime"), y = i("workTime"), S = i("restTime"), tn = i("totalOut"), nn = i("workOut"), on = i("restOut"), $n = i("totalFill"), ei = i("workFill"), ti = i("restFill"), ni = i("routineSummaryModal"), kt = [
    { id: "standing-reach", name: "Standing reach", group: "Warm-up", kind: "warmup", hidden: !1 },
    { id: "arm-circles", name: "Arm circles", group: "Warm-up", kind: "warmup", hidden: !1 },
    { id: "hip-hinge", name: "Hip hinge drill", group: "Warm-up", kind: "warmup", hidden: !1 }
  ];
  let de = kt.map((e) => ({ ...e })), P = [
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
  const St = [
    { id: "hip-flexor", name: "Hip flexor stretch", group: "Cooldown", kind: "cooldown", hidden: !1 },
    { id: "chest-opener", name: "Chest opener", group: "Cooldown", kind: "cooldown", hidden: !1 },
    { id: "hamstring", name: "Hamstring stretch", group: "Cooldown", kind: "cooldown", hidden: !1 },
    { id: "slow-breathing", name: "Slow breathing", group: "Cooldown", kind: "cooldown", hidden: !1 }
  ];
  let ce = St.map((e) => ({ ...e }));
  const ii = {
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
  }, x = an(m.data), b = x.profiles;
  let w = b[x.selected] ? x.selected : x.order.find((e) => b[e]) || "kettlebell";
  function an(e) {
    const t = e && typeof e == "object" ? JSON.parse(JSON.stringify(e)) : {}, n = t.profiles && Object.keys(t.profiles).length ? t.profiles : JSON.parse(JSON.stringify(ii)), o = (Array.isArray(t.order) ? t.order : Object.keys(n)).filter((a) => n[a]);
    return Object.keys(n).forEach((a) => {
      o.includes(a) || o.push(a);
    }), {
      v: 1,
      profiles: n,
      order: o,
      selected: t.selected || o[0],
      history: Array.isArray(t.history) ? t.history : [],
      checkins: Array.isArray(t.checkins) ? t.checkins : oi(t.energy),
      settings: { ...t.settings || {} }
    };
  }
  function oi(e) {
    if (!Array.isArray(e)) return [];
    const t = ["Drained", "Low", "Okay", "Good", "Energised", "Great"], n = [];
    return e.forEach((o) => {
      const a = new Date(o.at);
      if (isNaN(a)) return;
      const r = a.getFullYear() + "-" + String(a.getMonth() + 1).padStart(2, "0") + "-" + String(a.getDate()).padStart(2, "0"), s = a.getHours() < 14 ? "morning" : "evening";
      if (n.some((c) => c.date === r && c.slot === s)) return;
      const l = t.indexOf(o.value) + 1;
      l > 0 && n.push({ date: r, slot: s, mood: null, energy: l, at: o.at });
    }), n;
  }
  function Ge() {
    F || (x.selected = w, x.order = x.order.filter((e) => b[e] && e !== pe), m.save(x));
  }
  function _() {
    return x.settings;
  }
  function J(e) {
    const t = b[e];
    if (!t) return;
    w = e;
    const n = i("workoutNameInput");
    n && (n.value = t.name), C.value = t.total, y.value = t.work, S.value = t.rest, t.customSequence ? (de = [], ce = [], P = (t.sequence || []).map((o) => ({ ...o })), Et(t.preset || "movement", !1)) : (C.min = 10, C.max = 40, C.step = 5, y.min = 20, y.max = 60, y.step = 5, S.min = 5, S.max = 30, S.step = 5, de = (t.warmup || kt).map((o) => ({ ...o })), ce = (t.cooldown || St).map((o) => ({ ...o })), P = t.strength.map(([o, a, r, s = !1]) => ({ id: o, name: a, group: r, kind: "work", hidden: !!s }))), u.querySelectorAll(".workoutPanel[data-workout]").forEach((o) => o.classList.toggle("active", o.dataset.workout === e)), q();
  }
  function ai(e, t, n) {
    const o = e.getBoundingClientRect(), a = o.width / 2, r = o.height / 2, s = t - a, l = n - r;
    let c = 1 / 0, v = 1 / 0;
    s !== 0 && (c = a / Math.abs(s)), l !== 0 && (v = r / Math.abs(l));
    const k = Math.min(Math.max(1 / Math.min(c, v), 0), 1);
    let d = Math.atan2(l, s) * (180 / Math.PI) + 90;
    return d < 0 && (d += 360), { edge: k, angle: d };
  }
  function Ct(e, t, n = !1) {
    const o = e.getBoundingClientRect(), a = t.clientX - o.left, r = t.clientY - o.top, { edge: s, angle: l } = ai(e, a, r), c = n ? 100 : s * 100;
    e.style.setProperty("--edge-proximity", c.toFixed(3)), e.style.setProperty("--cursor-angle", l.toFixed(3) + "deg"), e.classList.toggle("borderGlowActive", n || c >= 30);
  }
  function sn(e) {
    e.addEventListener("pointermove", (n) => Ct(e, n, !1)), e.addEventListener("pointerenter", (n) => Ct(e, n, !1)), e.addEventListener("pointerdown", (n) => Ct(e, n, !0));
    const t = () => {
      e.classList.remove("borderGlowActive"), e.style.setProperty("--edge-proximity", "0");
    };
    e.addEventListener("pointerleave", t), e.addEventListener("pointerup", t), e.addEventListener("pointercancel", t);
  }
  sn(i("addWorkoutPanel"));
  let F = !1, pe = null;
  function B(e) {
    return String(e ?? "").replace(/[&<>"']/g, (t) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[t]);
  }
  function si(e) {
    return e.summary ? e.summary : e.customSequence ? ye(e.total) + " · custom move" : ye(e.total) + " · " + G(e.work) + " / " + G(e.rest) + " · warm-up + cooldown";
  }
  function Mt(e, t) {
    var s;
    const n = document.createElement("article");
    n.className = "workoutPanel", n.dataset.workout = e, n.tabIndex = 0;
    const o = t.eyebrow === void 0 ? "Movement" : t.eyebrow, a = t.activityCount ?? (((s = t.sequence) == null ? void 0 : s.length) || 0);
    n.innerHTML = '<span class="edgeLight" aria-hidden="true"></span><div class="panelExpanded"><div><div class="workoutPanelTop"><div>' + (o ? '<div class="eyebrow">' + B(o) + "</div>" : "") + '<div class="workoutName">' + B(t.name) + '</div><div class="sub">' + B(si(t)) + '</div><span class="sourceTag">' + B(t.source || "Custom move") + '</span></div><button class="pill seeWorkoutBtn" type="button">Edit</button></div></div><div class="workoutFooter"><div><strong class="activityCount">' + (a ? a + " activities" : "—") + '</strong></div><div class="workoutPanelActions"><button class="primary startWorkoutBtn" type="button">Start move</button></div></div></div><div class="panelCollapsed"><div class="panelCollapsedText">' + B(t.name) + "</div></div>";
    const r = i("addWorkoutPanel");
    return i("workoutGallery").insertBefore(n, r), sn(n), n.addEventListener("click", (l) => {
      l.target.closest("button") || J(e);
    }), n.addEventListener("keydown", (l) => {
      (l.key === "Enter" || l.key === " ") && !l.target.closest("button") && (l.preventDefault(), J(e));
    }), n.querySelector(".seeWorkoutBtn").addEventListener("click", (l) => {
      l.stopPropagation(), J(e), mn(!1);
    }), n.querySelector(".startWorkoutBtn").addEventListener("click", (l) => {
      l.stopPropagation(), J(e), Ni();
    }), n;
  }
  function rn() {
    u.querySelectorAll(".workoutPanel[data-workout]").forEach((e) => e.remove()), x.order.forEach((e) => {
      b[e] && Mt(e, b[e]);
    }), u.querySelectorAll(".workoutPanel[data-workout]").forEach((e) => e.classList.toggle("active", e.dataset.workout === w));
  }
  rn(), i("addWorkoutPanel").addEventListener("keydown", (e) => {
    (e.key === "Enter" || e.key === " ") && (e.preventDefault(), i("addWorkoutPanel").click());
  }), i("addWorkoutPanel").addEventListener("click", () => {
    F = !0, pe = "custom-" + Date.now(), b[pe] = {
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
    }, J(pe), mn(!0);
  });
  let g = [], h = 0, j = 0, it = 1, I = !1, z = null, ot = null, N = !1, be = x.settings.upcomingCount ?? "all";
  function Tt(e, t, n) {
    return (Number(e) - t) / (n - t) * 100;
  }
  function G(e) {
    const t = Math.max(0, Number(e) || 0);
    return t >= 3600 && t % 3600 === 0 ? t / 3600 + " hr" : t >= 60 && t % 60 === 0 ? t / 60 + " min" : t >= 60 ? Math.round(t / 60) + " min" : Math.round(t) + " sec";
  }
  function ye(e) {
    const t = Math.max(0, Number(e) || 0);
    return t >= 60 && t % 60 === 0 ? t / 60 + " hr" : t >= 60 ? Math.floor(t / 60) + " hr " + t % 60 + " min" : t + " min";
  }
  function at() {
    $n.style.width = Tt(C.value, Number(C.min), Number(C.max)) + "%", ei.style.width = Tt(y.value, Number(y.min), Number(y.max)) + "%", ti.style.width = Tt(S.value, Number(S.min), Number(S.max)) + "%", tn.textContent = ye(C.value), nn.textContent = G(y.value), on.textContent = G(S.value);
  }
  function Lt(e) {
    return e.filter((t) => !t.hidden);
  }
  function ln(e, t) {
    const n = Math.max(0, Number(e) || 0);
    return Math.round(t === "hour" ? n * 3600 : t === "min" ? n * 60 : n);
  }
  function Et(e, t = !0) {
    u.querySelectorAll(".createPresetBtn").forEach((o) => o.classList.toggle("active", o.dataset.movePreset === e));
    const n = b[w];
    n && (n.preset = e), e === "work" ? (C.min = 30, C.max = 480, C.step = 30, y.min = 300, y.max = 7200, y.step = 300, S.min = 60, S.max = 1800, S.step = 60, t && (C.value = 60, y.value = 1500, S.value = 300), i("addMovementUnit").value = "min", i("addMovementDuration").value = 25, i("addRestUnit").value = "min", i("addRestDuration").value = 5) : (C.min = 10, C.max = 40, C.step = 5, y.min = 20, y.max = 60, y.step = 5, S.min = 5, S.max = 30, S.step = 5, t && (C.value = 20, y.value = 45, S.value = 15), i("addMovementUnit").value = "sec", i("addMovementDuration").value = 45, i("addRestUnit").value = "sec", i("addRestDuration").value = 30), at();
  }
  function dn() {
    const e = b[w];
    if (e != null && e.customSequence) {
      if (P = P.filter((t) => !t.presetRole), i("includeWarmupPreset").checked ? (P = [...kt.map((n, o) => ({ ...n, id: "preset-warm-" + o + "-" + Date.now(), kind: "work", duration: Number(y.value), presetRole: "warmup" })), ...P], e.includeWarmup = !0) : e.includeWarmup = !1, i("includeCooldownPreset").checked) {
        const t = St.map((n, o) => ({ ...n, id: "preset-cool-" + o + "-" + Date.now(), kind: "work", duration: Number(y.value), presetRole: "cooldown" }));
        P = [...P, ...t], e.includeCooldown = !0;
      } else e.includeCooldown = !1;
      q();
    }
  }
  function ri() {
    const e = i("upcomingCountSetting");
    if (!e) return;
    const t = Math.max(1, g.length - 1), n = be;
    e.innerHTML = "";
    for (let r = 1; r <= t; r++) {
      const s = document.createElement("option");
      s.value = String(r), s.textContent = String(r), e.appendChild(s);
    }
    const o = document.createElement("option");
    o.value = "all", o.textContent = "All", e.appendChild(o);
    const a = n === "all" ? "all" : String(Math.min(Number(n) || 1, t));
    e.value = a, be = a === "all" ? "all" : Number(a);
  }
  function q() {
    const e = Number(C.value) * 60, t = Number(y.value), n = Number(S.value), o = Lt(de), a = Lt(P), r = Lt(ce), s = b[w];
    if (s && (s.total = Number(C.value), s.work = t, s.rest = n, s.customSequence ? s.sequence = P.map((d) => ({ ...d })) : (s.strength = P.map((d) => [d.id, d.name, d.group, !!d.hidden]), s.warmup = de.map((d) => ({ ...d })), s.cooldown = ce.map((d) => ({ ...d })))), s != null && s.customSequence) {
      const d = a.map((f) => {
        if (f.kind === "rest") {
          const A = f.useGlobalTiming === !0 ? n : Number(f.duration) || n;
          return { ...f, duration: A, rest: 0 };
        }
        const E = f.useGlobalTiming === !1 && Number(f.duration) || t;
        return { ...f, duration: E, rest: 0 };
      });
      s.autoRest && Number(s.autoRestDuration) > 0 ? (g = [], d.forEach((f, E) => {
        g.push(f);
        const A = d[E + 1];
        f.kind !== "rest" && A && A.kind !== "rest" && g.push({
          id: "auto-rest-" + E,
          name: "Rest",
          group: "Rest",
          kind: "rest",
          hidden: !1,
          duration: Number(s.autoRestDuration),
          rest: 0,
          autoGenerated: !0
        });
      })) : g = d;
    } else {
      const d = o.length + r.length;
      let f = a.length ? 1 : 0, E = 1 / 0;
      const A = 80;
      for (let M = a.length ? 1 : 0; M <= A; M++) {
        const H = d + M;
        if (H <= 0) continue;
        const p = H * t + Math.max(0, H - 1) * n, T = e - p, Z = t + T;
        Z < 15 || Z > 120 || Math.abs(T) < Math.abs(E) && (E = T, f = M);
      }
      if (E === 1 / 0) {
        const M = Math.max(d + (a.length ? 1 : 0), Math.round((e + n) / (t + n)));
        f = Math.max(a.length ? 1 : 0, M - d);
      }
      const D = [];
      for (let M = 0; M < f; M++) {
        const H = a[M % Math.max(1, a.length)];
        H && D.push({ ...H, duration: t, rest: n });
      }
      if (g = [
        ...o.map((M) => ({ ...M, duration: t, rest: n })),
        ...D,
        ...r.map((M) => ({ ...M, duration: t, rest: n }))
      ], g.length) {
        const M = g.reduce((p, T) => p + T.duration, 0) + Math.max(0, g.length - 1) * n, H = e - M;
        g[g.length - 1].duration = Math.max(15, g[g.length - 1].duration + H), g.forEach((p, T) => p.rest = T < g.length - 1 ? n : 0);
      }
    }
    at();
    const l = g.reduce((d, f) => d + f.duration + f.rest, 0), c = Math.round(l / 60), v = s != null && s.customSequence ? ye(c) + " · " + g.length + " items" : ye(c) + " · " + G(t) + " / " + G(n) + " · warm-up + cooldown";
    s && (s.summary = v, s.activityCount = g.length);
    const k = u.querySelector(".workoutPanel.active .sub");
    k && (k.textContent = v), ni.textContent = v, u.querySelectorAll(".workoutPanel.active .activityCount").forEach((d) => d.textContent = g.length + " activities"), at(), li(), Ft(), we(), ri(), F && ie(), _e.workout.classList.contains("active") && !z && Tn();
  }
  function Rt(e, t) {
    const n = i(t);
    n.innerHTML = "", e.forEach((o) => {
      const a = document.createElement("div");
      a.className = "moveRow" + (o.hidden ? " hidden" : "") + (o.kind === "rest" ? " restItem" : "");
      const s = " · " + (o.kind === "rest" ? o.useGlobalTiming === !0 ? "Global timing" : G(o.duration) : o.useGlobalTiming === !1 ? G(o.duration) : "Global timing"), l = o.kind === "rest" ? '<span class="moveKindBadge">Rest</span>' : "";
      a.innerHTML = '<div><div class="moveItemName">' + o.name + l + '</div><div class="moveMeta">' + o.group + s + '</div></div><div style="display:flex;gap:8px"><button class="hideBtn">' + (o.hidden ? "Show" : "Hide") + '</button><button class="removeBtn" type="button" aria-label="Hold to remove ' + B(o.name) + '"><span class="removeFill"></span><span class="removeLabel">Remove</span></button></div>', a.querySelector(".hideBtn").addEventListener("click", () => {
        o.hidden = !o.hidden, q();
      });
      const c = a.querySelector(".removeBtn");
      Wt(c, c.querySelector(".removeFill"), 1500, () => {
        const v = e.indexOf(o);
        v > -1 && e.splice(v, 1), q(), U("Removed " + o.name);
      }), n.appendChild(a);
    });
  }
  function li() {
    var a, r, s, l;
    const e = b[w], t = (a = i("warmupList")) == null ? void 0 : a.closest("section"), n = (r = i("cooldownList")) == null ? void 0 : r.closest("section"), o = (l = (s = i("strengthList")) == null ? void 0 : s.closest("section")) == null ? void 0 : l.querySelector(".sectionTitle");
    e != null && e.customSequence ? (t && (t.hidden = !0), n && (n.hidden = !0), o && (o.textContent = "Move sequence")) : (t && (t.hidden = !1), n && (n.hidden = !1), o && (o.textContent = "Kettlebell work")), Rt(de, "warmupList"), Rt(P, "strengthList"), Rt(ce, "cooldownList");
  }
  function Ft() {
    P.length > 0;
    const e = i("addMovementBtn"), t = i("addRestBtn");
    e && (e.textContent = "Add movement"), t && (t.textContent = "Add rest");
  }
  function we() {
    const e = i("useGlobalTiming").checked, t = i("addMovementDuration"), n = i("addMovementUnit");
    t.disabled = e, n.disabled = e, t.parentElement.style.opacity = e ? ".38" : "1", i("globalTimingValue").textContent = "Use global timing · " + G(y.value);
    const o = i("useGlobalRestTiming").checked, a = i("addRestDuration"), r = i("addRestUnit");
    a.disabled = o, r.disabled = o, a.parentElement.style.opacity = o ? ".38" : "1", i("globalRestTimingValue").textContent = "Use global timing · " + G(S.value);
  }
  let cn = "movement";
  function Bt(e) {
    cn = e;
    const t = i("movementFields"), n = i("restFields");
    t.hidden = e !== "movement", n.hidden = e !== "rest", i("movementCreatorHeading").textContent = e === "rest" ? "Add rest" : "Add movement", i("movementCreator").setAttribute("aria-label", e === "rest" ? "Create rest" : "Create movement"), we();
  }
  function Pt() {
    b[w];
    const e = F ? !0 : i("useGlobalTiming").checked, t = e ? Number(y.value) : ln(
      i("addMovementDuration").value,
      i("addMovementUnit").value
    ), n = F ? !0 : i("useGlobalRestTiming").checked, o = n ? Number(S.value) : ln(
      i("addRestDuration").value,
      i("addRestUnit").value
    );
    if (cn === "rest") {
      const a = i("addRestTitle").value.trim() || "Rest", r = i("addRestGroup").value.trim() || "Rest";
      P.push({
        id: "rest-" + Date.now(),
        name: a,
        group: r,
        kind: "rest",
        hidden: !1,
        useGlobalTiming: n,
        duration: Math.max(5, o || Number(S.value))
      }), q(), i("movementCreator").hidden = !0, i("addRestTitle").value = "Rest", i("addRestGroup").value = "Rest", U("Rest added"), F && (xe("movements"), ie());
    } else {
      const a = i("addMovementInput").value.trim();
      if (!a) return;
      const r = i("addMovementGroup").value.trim() || "Movement";
      P.push({
        id: "movement-" + Date.now(),
        name: a,
        group: r,
        kind: "work",
        hidden: !1,
        useGlobalTiming: e,
        duration: Math.max(5, t || Number(y.value))
      }), i("addMovementInput").value = "", i("addMovementGroup").value = "", q(), i("movementCreator").hidden = !0, U("Movement added"), F && (xe("movements"), ie());
    }
    Ft();
  }
  let pn = null;
  function U(e) {
    const t = i("toast");
    t.textContent = e, t.classList.add("show"), clearTimeout(pn), pn = setTimeout(() => t.classList.remove("show"), 2200);
  }
  const di = {
    mood: ["Rough", "Low", "Flat", "Okay", "Good", "Great"],
    energy: ["Drained", "Low", "Okay", "Good", "Energised", "Great"]
  }, ci = ["#6E63A8", "#5878A8", "#6F8B8A", "#5F9B72", "#D5A53E", "#D56B54"], pi = 14;
  function ue(e) {
    return e.getFullYear() + "-" + String(e.getMonth() + 1).padStart(2, "0") + "-" + String(e.getDate()).padStart(2, "0");
  }
  function st(e) {
    return e.getHours() < pi ? "morning" : "evening";
  }
  function X(e, t) {
    return di[e][Math.max(1, Math.min(6, Math.round(t))) - 1];
  }
  function zt(e) {
    const t = /* @__PURE__ */ new Date(), n = ue(t), o = st(t);
    let a = x.checkins.find((r) => r.date === n && r.slot === o);
    return !a && e && (a = { date: n, slot: o, mood: null, energy: null, at: t.toISOString() }, x.checkins.unshift(a), x.checkins = x.checkins.slice(0, 2e3)), a;
  }
  function ui(e) {
    e.style.setProperty("--feel-x", "50%"), e.style.setProperty("--feel-y", "50%"), e.style.setProperty("--feel-shift-x", "0px"), e.style.setProperty("--feel-shift-y", "0px");
  }
  function gi(e, t) {
    const n = zt(!0);
    n[e] = t, n.at = (/* @__PURE__ */ new Date()).toISOString(), Ge(), m.fire("checkin", { slot: n.slot, mood: n.mood, energy: n.energy, mood_label: n.mood ? X("mood", n.mood) : null, energy_label: n.energy ? X("energy", n.energy) : null }), U((e === "mood" ? "Mood" : "Energy") + " · " + X(e, t)), rt(), lt(), ve();
  }
  function rt() {
    const e = zt(!1), t = st(/* @__PURE__ */ new Date());
    i("checkinLabel").textContent = t === "morning" ? "Morning check-in" : "Evening check-in", u.querySelectorAll(".energyBtn[data-scale]").forEach((r) => {
      const s = e && e[r.dataset.scale] === Number(r.dataset.level);
      r.classList.toggle("selected", !!s), s || ui(r);
    });
    const n = i("checkinStatus"), o = e == null ? void 0 : e.mood, a = e == null ? void 0 : e.energy;
    n.classList.toggle("done", !!(o && a)), n.textContent = o && a ? t === "morning" ? "Morning check-in done. Evening check-in opens at 2pm." : "Evening check-in done. See you tomorrow morning." : o ? "Now your energy." : a ? "Now your mood." : "Two taps. How are you right now?", mi();
  }
  function mi() {
    const e = i("energyHistory");
    e.innerHTML = "";
    const t = ue(/* @__PURE__ */ new Date()), n = zt(!1);
    x.checkins.filter((o) => o !== n && (o.mood || o.energy)).slice(0, 2).forEach((o) => {
      const a = (o.date === t ? "Today" : new Intl.DateTimeFormat(void 0, { weekday: "short" }).format(/* @__PURE__ */ new Date(o.date + "T12:00"))) + " · " + o.slot, r = [o.mood ? X("mood", o.mood) + " mood" : "", o.energy ? X("energy", o.energy) + " energy" : ""].filter(Boolean).join(" · "), s = document.createElement("div");
      s.className = "energyLog", s.innerHTML = "<span>" + B(r) + "</span><span>" + B(a) + "</span>", e.appendChild(s);
    });
  }
  function lt() {
    const e = ue(/* @__PURE__ */ new Date()), t = (n) => x.checkins.find((o) => o.date === e && o[n]);
    [["mood", "moodMeta"], ["energy", "energyLevelMeta"]].forEach(([n, o]) => {
      const a = t(n);
      i(o).textContent = a ? X(n, a[n]) + " · this " + a.slot : "Not checked in yet today";
    });
  }
  let un = st(/* @__PURE__ */ new Date());
  setInterval(() => {
    const e = st(/* @__PURE__ */ new Date());
    e !== un && (un = e, rt(), lt());
  }, 6e4), u.querySelectorAll(".energyBtn").forEach((e) => {
    const t = (n) => {
      const o = e.getBoundingClientRect(), a = Math.max(0, Math.min(1, (n.clientX - o.left) / o.width)), r = Math.max(0, Math.min(1, (n.clientY - o.top) / o.height));
      e.style.setProperty("--feel-x", (a * 100).toFixed(2) + "%"), e.style.setProperty("--feel-y", (r * 100).toFixed(2) + "%"), e.style.setProperty("--feel-shift-x", ((a - 0.5) * 8).toFixed(2) + "px"), e.style.setProperty("--feel-shift-y", ((r - 0.5) * 5).toFixed(2) + "px");
    };
    e.addEventListener("pointermove", t), e.addEventListener("pointerenter", t), e.addEventListener("pointerdown", t), e.addEventListener("pointerleave", () => {
      e.classList.contains("selected") || (e.style.setProperty("--feel-x", "50%"), e.style.setProperty("--feel-y", "50%"), e.style.setProperty("--feel-shift-x", "0px"), e.style.setProperty("--feel-shift-y", "0px"));
    }), e.addEventListener("click", () => gi(e.dataset.scale, Number(e.dataset.level)));
  });
  const dt = i("upcomingCountSetting");
  dt.addEventListener("change", () => {
    be = dt.value === "all" ? "all" : Number(dt.value), Cn();
  });
  const We = i("tempoRevealBtn"), Nt = i("tempoExperiment"), K = i("tempoQuad"), ke = i("tempoDot"), fi = i("tempoEstimate"), hi = i("tempoReadout");
  let Se = { x: 0.5, y: 0.5 }, je = !1, ct = { total: 20, work: 45, rest: 15 };
  function At(e, t, n, o) {
    const a = Math.max(t, Math.min(n, e));
    return Math.round((a - t) / o) * o + t;
  }
  function vi(e, t) {
    const n = (e - 0.5) * 2, o = (t - 0.5) * 2, a = At(
      ct.total + n * 5 + o * 8,
      Number(C.min),
      Number(C.max),
      Number(C.step)
    ), r = At(
      ct.work + n * 10 + o * 8,
      Number(y.min),
      Number(y.max),
      Number(y.step)
    ), s = At(
      ct.rest + n * 6 + o * 6,
      Number(S.min),
      Number(S.max),
      Number(S.step)
    );
    return C.value = a, y.value = r, S.value = s, tn.textContent = a + " min", nn.textContent = r + " sec", on.textContent = s + " sec", at(), { total: a, work: r, rest: s };
  }
  function It(e, t) {
    const n = e < 0.34 ? "Low" : e > 0.66 ? "Hard" : "Medium", o = t < 0.34 ? "Fast" : t > 0.66 ? "Slow" : "Balanced", a = vi(e, t);
    hi.textContent = n + " + " + o, fi.textContent = a.total + " min", K.setAttribute("aria-valuetext", n + " and " + o + ", estimated " + a.total + " minutes");
  }
  function Dt(e) {
    const t = K.getBoundingClientRect(), n = Math.max(0, Math.min(1, (e.clientX - t.left) / t.width)), o = Math.max(0, Math.min(1, (e.clientY - t.top) / t.height));
    Se = { x: n, y: o }, ke.style.left = n * 100 + "%", ke.style.top = o * 100 + "%", It(n, o);
  }
  We.addEventListener("click", () => {
    const e = Nt.hidden;
    Nt.hidden = !e, We.setAttribute("aria-expanded", e ? "true" : "false"), We.textContent = e ? "Now close this" : "Don’t try this!", e && (ct = {
      total: Number(C.value),
      work: Number(y.value),
      rest: Number(S.value)
    }, Se = { x: 0.5, y: 0.5 }, ke.style.left = "50%", ke.style.top = "50%", It(Se.x, Se.y));
  }), u.querySelectorAll("[data-feedback-rating]").forEach((e) => e.addEventListener("click", () => {
    Number(e.dataset.feedbackRating), u.querySelectorAll("[data-feedback-rating]").forEach((t) => t.classList.toggle("selected", t === e));
  }));
  const pt = i("testingFeedbackForm"), gn = i("testingFeedbackThanks"), xi = i("testingFeedbackAgain");
  pt.addEventListener("submit", (e) => {
    e.preventDefault(), pt.hidden = !0, gn.hidden = !1, U("Feedback captured for prototype");
  }), xi.addEventListener("click", (e) => {
    e.preventDefault(), pt.reset(), u.querySelectorAll("[data-feedback-rating]").forEach((t) => t.classList.remove("selected")), gn.hidden = !0, pt.hidden = !1;
  }), K.addEventListener("pointerdown", (e) => {
    var t;
    je = !0, Dt(e);
    try {
      (t = K.setPointerCapture) == null || t.call(K, e.pointerId);
    } catch {
    }
  }), K.addEventListener("pointermove", (e) => {
    je && Dt(e);
  }), K.addEventListener("pointerup", (e) => {
    je && (je = !1, Dt(e), q());
  }), K.addEventListener("pointercancel", () => je = !1), K.addEventListener("keydown", (e) => {
    let { x: t, y: n } = Se, o = !0;
    e.key === "ArrowLeft" ? t -= 0.05 : e.key === "ArrowRight" ? t += 0.05 : e.key === "ArrowUp" ? n -= 0.05 : e.key === "ArrowDown" ? n += 0.05 : o = !1, o && (e.preventDefault(), t = Math.max(0, Math.min(1, t)), n = Math.max(0, Math.min(1, n)), Se = { x: t, y: n }, ke.style.left = t * 100 + "%", ke.style.top = n * 100 + "%", It(t, n), q());
  });
  const Y = i("workoutModal");
  let Ze = null;
  function Ce(e) {
    return e.map((t) => ({ ...t }));
  }
  function bi() {
    const e = b[w];
    return {
      key: w,
      profile: e ? JSON.parse(JSON.stringify(e)) : null,
      warmup: Ce(de),
      strength: Ce(P),
      cooldown: Ce(ce),
      total: Number(C.value),
      work: Number(y.value),
      rest: Number(S.value)
    };
  }
  function mn(e = !1) {
    F = !!e, Ze = bi(), i("moveEditorTitle").textContent = F ? "Create new move" : "Edit move", i("moveEditorSubtitle").textContent = F ? "Build the sequence first, then set timing, then finish the move." : "Adjust timing and choose which movements are included today.", i("deleteMoveOpen").hidden = F;
    const t = i("createMoveOptions");
    if (t.hidden = !F, F) {
      i("useGlobalTiming").checked = !0, i("useGlobalRestTiming").checked = !0;
      const n = b[w];
      i("includeWarmupPreset").checked = !!(n != null && n.includeWarmup), i("includeCooldownPreset").checked = !!(n != null && n.includeCooldown), Et((n == null ? void 0 : n.preset) || "movement", !1);
    }
    i("movementCreator").hidden = !0, Bt("movement"), Ft(), we(), Nt.hidden = !0, We.setAttribute("aria-expanded", "false"), We.textContent = "Don’t try this!", Y.classList.toggle("createMode", F), Y.classList.add("open"), Y.setAttribute("aria-hidden", "false"), F && Jn();
  }
  function ut() {
    Y.classList.contains("createMode") && Xn(), Y.classList.remove("createMode"), Y.classList.remove("open"), Y.setAttribute("aria-hidden", "true");
  }
  function fn() {
    if (!Ze) return;
    const e = Ze;
    e.profile && (b[e.key] = JSON.parse(JSON.stringify(e.profile))), w = e.key, de = Ce(e.warmup), P = Ce(e.strength), ce = Ce(e.cooldown), C.value = e.total, y.value = e.work, S.value = e.rest;
    const t = b[w];
    if (t) {
      u.querySelectorAll(".workoutPanel[data-workout]").forEach((o) => o.classList.toggle("active", o.dataset.workout === w));
      const n = u.querySelector(".workoutPanel.active");
      if (n) {
        const o = n.querySelector(".workoutName");
        o && (o.textContent = t.name);
        const a = n.querySelector(".panelCollapsedText");
        a && (a.textContent = t.name);
        const r = n.querySelector(".sourceTag");
        r && (r.textContent = t.source);
      }
      L.value = t.name;
    }
    q();
  }
  i("cancelWorkoutEdit").addEventListener("click", () => {
    if (F) {
      const e = w;
      delete b[e], F = !1, pe = null, J(x.order.find((t) => b[t]) || Object.keys(b)[0]);
    } else
      fn();
    ut();
  }), i("saveWorkoutEdit").addEventListener("click", () => {
    const e = b[w], t = L.value.trim() || "New move";
    if (e && (e.name = t), q(), F && e)
      Mt(w, e), u.querySelectorAll(".workoutPanel[data-workout]").forEach((n) => n.classList.toggle("active", n.dataset.workout === w)), F = !1, pe = null, x.order.includes(w) || x.order.push(w), U("Move created");
    else {
      const n = u.querySelector(".workoutPanel.active");
      if (n) {
        const o = n.querySelector(".workoutName");
        o && (o.textContent = t);
        const a = n.querySelector(".panelCollapsedText");
        a && (a.textContent = t);
      }
      U("Move saved");
    }
    Ze = null, ut(), Ge();
  }), Y.addEventListener("click", (e) => {
    if (e.target === Y) {
      if (F) {
        const t = w;
        delete b[t], F = !1, pe = null, J(x.order.find((n) => b[n]) || Object.keys(b)[0]);
      } else
        fn();
      ut();
    }
  }), i("addMovementBtn").addEventListener("click", () => {
    const e = i("movementCreator");
    e.hidden = !1, Bt("movement"), we(), i("addMovementInput").focus();
  }), i("addRestBtn").addEventListener("click", () => {
    const e = i("movementCreator");
    e.hidden = !1, Bt("rest"), i("addRestTitle").focus();
  }), i("closeMovementCreator").addEventListener("click", () => {
    i("movementCreator").hidden = !0;
  }), i("useGlobalTiming").addEventListener("change", we), i("useGlobalRestTiming").addEventListener("change", we), u.querySelectorAll(".createPresetBtn").forEach((e) => e.addEventListener("click", () => {
    Et(e.dataset.movePreset, !0), q();
  })), i("includeWarmupPreset").addEventListener("change", dn), i("includeCooldownPreset").addEventListener("change", dn), i("includeWarmupPreset").addEventListener("change", ie), i("includeCooldownPreset").addEventListener("change", ie), L.addEventListener("input", ie), i("confirmAddMovement").addEventListener("click", Pt), i("confirmAddRest").addEventListener("click", Pt), i("addMovementInput").addEventListener("keydown", (e) => {
    e.key === "Enter" && Pt();
  });
  const Ve = i("countdown"), Ht = i("countNum"), $ = i("countdownPixelCanvas");
  let Ue = null, qt = "appear";
  class yi {
    constructor(t, n, o, a, r, s, l) {
      this.width = t.width, this.height = t.height, this.ctx = n, this.x = o, this.y = a, this.color = r, this.speed = (Math.random() * 0.8 + 0.1) * s, this.size = 0, this.sizeStep = Math.random() * 0.4, this.minSize = 0.5, this.maxSizeInteger = 2, this.maxSize = Math.random() * (this.maxSizeInteger - this.minSize) + this.minSize, this.delay = l, this.counter = 0, this.counterStep = Math.random() * 4 + (this.width + this.height) * 0.01, this.isIdle = !1, this.isReverse = !1, this.isShimmer = !1;
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
  let Ot = [], hn = 1, vn = 1;
  function ge() {
    const e = parseFloat(getComputedStyle(i("app")).zoom);
    return Number.isFinite(e) && e > 0 ? e : 1;
  }
  function wi() {
    var v;
    if (!$) return;
    const e = ge(), t = Math.max(1, window.innerWidth / e), n = Math.max(1, window.innerHeight / e);
    hn = t, vn = n;
    const o = Math.min(window.devicePixelRatio || 1, 2);
    $.width = Math.floor(t * o), $.height = Math.floor(n * o), $.style.width = t + "px", $.style.height = n + "px";
    const a = $.getContext("2d");
    a.setTransform(o, 0, 0, o, 0, 0);
    const r = ["#f4f5ff", "#dfe3ff", "#c9d0ff", "#aeb9ff"], s = 12, l = (v = window.matchMedia) == null ? void 0 : v.call(window, "(prefers-reduced-motion: reduce)").matches, c = l ? 0 : 0.055;
    Ot = [];
    for (let k = 0; k < t; k += s)
      for (let d = 0; d < n; d += s) {
        const f = k - t / 2, E = d - n / 2, A = Math.sqrt(f * f + E * E), D = l ? 0 : Math.random() * 75 + A * 0.05, M = new yi({ width: t, height: n }, a, k, d, r[Math.floor(Math.random() * r.length)], c, D);
        M.maxSizeInteger = 4, M.maxSize = Math.random() * 3.2 + 0.8, M.sizeStep = 0.35 + Math.random() * 0.45, Ot.push(M);
      }
  }
  function xn(e) {
    cancelAnimationFrame(Ue), qt = e;
    const t = $ == null ? void 0 : $.getContext("2d");
    if (!t) return;
    function n() {
      t.clearRect(0, 0, hn, vn);
      let o = !0;
      Ot.forEach((a) => {
        a[qt](), a.isIdle || (o = !1);
      }), qt === "disappear" && o || (Ue = requestAnimationFrame(n));
    }
    Ue = requestAnimationFrame(n);
  }
  function gt() {
    cancelAnimationFrame(Ue), wi(), xn("appear"), setTimeout(() => xn("disappear"), 560);
  }
  window.addEventListener("resize", () => {
    Ve.classList.contains("active") && gt();
  });
  const Ke = i("pixelTrailCanvas"), Me = Ke.getContext("2d");
  let ee = !0, Te = 0.7, Le = 600, Ye = [], Ee = null, oe = { x: 0, y: 0, ready: !1 };
  function bn() {
    const e = R.getBoundingClientRect(), t = ge(), n = Math.min(window.devicePixelRatio || 1, 2), o = Math.max(1, e.width / t), a = Math.max(1, e.height / t);
    Ke.width = Math.max(1, Math.floor(o * n)), Ke.height = Math.max(1, Math.floor(a * n)), Ke.style.width = o + "px", Ke.style.height = a + "px", Me.setTransform(n, 0, 0, n, 0, 0);
  }
  function ki(e, t) {
    if (!ee) return;
    const n = performance.now();
    oe.ready || (oe = { x: e, y: t, ready: !0 });
    const o = 7;
    for (let a = 1; a <= o; a++) {
      const r = a / o;
      Ye.push({
        x: oe.x + (e - oe.x) * r,
        y: oe.y + (t - oe.y) * r,
        born: n - (o - a) * 10
      });
    }
    oe = { x: e, y: t, ready: !0 };
  }
  function mt(e) {
    if (Ee = null, !V) return;
    if (!_e.workout.classList.contains("active")) {
      Ee = requestAnimationFrame(mt);
      return;
    }
    const t = R.getBoundingClientRect(), n = ge();
    Me.clearRect(0, 0, t.width / n, t.height / n), ee && (Ye = Ye.filter((a) => e - a.born < Le), Me.fillStyle = i("app").classList.contains("light") ? "#7c89d8" : "#f4f4f4", Ye.forEach((a) => {
      const r = (e - a.born) / Le, s = (1 - r) * Te, l = Math.round(a.x / 14) * 14, c = Math.round(a.y / 14) * 14;
      Me.globalAlpha = Math.max(0, s);
      const v = 2 + 5 * (1 - r) * Te;
      Me.fillRect(l - v / 2, c - v / 2, v, v);
    }), Me.globalAlpha = 1), Ee = requestAnimationFrame(mt);
  }
  R.addEventListener("pointermove", (e) => {
    const t = R.getBoundingClientRect(), n = ge();
    ki((e.clientX - t.left) / n, (e.clientY - t.top) / n);
  }), R.addEventListener("pointerleave", () => oe.ready = !1), new ResizeObserver(bn).observe(R), bn(), Ee = requestAnimationFrame(mt);
  const ae = i("movementRippleCanvas"), Re = ae.getContext("2d");
  let me = !0, Fe = null, Si = performance.now();
  function yn() {
    const e = ae.parentElement.getBoundingClientRect(), t = ge(), n = Math.max(1, e.width / t), o = Math.max(1, e.height / t), a = Math.min(window.devicePixelRatio || 1, 2);
    ae.width = Math.max(1, Math.floor(n * a)), ae.height = Math.max(1, Math.floor(o * a)), ae.style.width = n + "px", ae.style.height = o + "px", Re.setTransform(a, 0, 0, a, 0, 0);
  }
  function Ci() {
    const e = g[h];
    return N ? 2200 : e ? e.kind === "warmup" || e.kind === "cooldown" ? 2400 : 1350 : 1600;
  }
  function ft(e) {
    if (Fe = null, !V) return;
    if (!_e.workout.classList.contains("active")) {
      Fe = requestAnimationFrame(ft);
      return;
    }
    const t = ae.parentElement.getBoundingClientRect(), n = ge(), o = Math.max(1, t.width / n), a = Math.max(1, t.height / n);
    if (Re.clearRect(0, 0, o, a), me) {
      const r = Ci(), s = (e - Si) % r / r, l = 15, c = Math.max(8, Math.round(l * a / Math.max(1, o))), v = o / (l + 1), k = a / (c + 1), d = o * 0.5, f = a * 0.52, E = Math.hypot(d, f), D = i("app").classList.contains("light") ? "34,34,34" : "244,244,244";
      for (let M = 1; M <= c; M++)
        for (let H = 1; H <= l; H++) {
          const p = H * v, T = M * k, Z = Math.hypot(p - d, T - f) / E, qe = N ? Math.exp(-Math.pow((Z - (s * 0.82 + 0.08) % 1 * 1.18) * 5.5, 2)) : 0, W = Math.exp(-Math.pow((Z - s * 1.25) * 7, 2)), Oe = N ? qe : W, _n = N ? 0.5 + 0.5 * Math.sin(s * Math.PI * 2 - Z * 3) ** 2 : 0.35 + 0.65 * Math.sin(s * Math.PI * 2 - Z * 5) ** 2, Zi = N ? 1.4 + Oe * 4.2 * _n : 1.2 + Oe * 5 * _n;
          Re.beginPath(), Re.arc(p, T, Zi, 0, Math.PI * 2), Re.fillStyle = `rgba(${D},${N ? 0.08 + Oe * 0.48 : 0.05 + Oe * 0.55})`, Re.fill();
        }
    }
    Fe = requestAnimationFrame(ft);
  }
  new ResizeObserver(yn).observe(ae.parentElement), yn(), Fe = requestAnimationFrame(ft);
  const Qe = i("exerciseTitle"), Be = i("exerciseMeta"), wn = i("stepLabel"), kn = i("digits"), Sn = i("fill"), Je = i("progress"), se = i("pause"), Mi = i("nextName"), Ti = i("nextMeta"), Li = i("nextIcon"), ht = i("skipNextSession");
  let O = null;
  function te(e) {
    for (let t = Math.max(0, e); t < g.length; t++)
      if (!g[t].sessionHidden) return t;
    return -1;
  }
  function Ei() {
    const e = g[h];
    if (!e) return { name: "Complete", meta: "Move finished", icon: "✓" };
    if (N) {
      const o = te(h + 1), a = o >= 0 ? g[o] : null;
      return a ? { name: a.name, meta: a.group + " · " + a.duration + " sec", icon: a.kind === "cooldown" ? "↘" : a.kind === "warmup" ? "↗" : "●" } : { name: "Complete", meta: "Move finished", icon: "✓" };
    }
    if (e.rest > 0) return { name: "Rest", meta: e.rest + " sec · recovery", icon: "Ⅱ" };
    const t = te(h + 1), n = t >= 0 ? g[t] : null;
    return n ? { name: n.name, meta: n.group + " · " + n.duration + " sec", icon: n.kind === "cooldown" ? "↘" : n.kind === "warmup" ? "↗" : "●" } : { name: "Complete", meta: "Move finished", icon: "✓" };
  }
  function Ri() {
    if (!g[h]) return g.length;
    const t = te(h + 1);
    return t < 0 ? g.length : t + 1;
  }
  function Fi(e) {
    return e.kind === "cooldown" ? "↘" : e.kind === "warmup" ? "↗" : "●";
  }
  function Bi() {
    [...Je.children].forEach((e, t) => {
      e.classList.toggle("done", t < h), e.classList.toggle("active", t === h), e.classList.toggle("rewindable", t <= h), e.disabled = t > h, t === h && e.style.setProperty("--segment-progress", "0%");
    }), g[h] && (wn.textContent = "Step " + (h + 1) + " of " + g.length, Ne());
  }
  function Pi(e) {
    const t = g.indexOf(e);
    t < 0 || t <= h || (e.sessionHidden = !e.sessionHidden, Pe(), U((e.sessionHidden ? "Hidden " : "Included ") + e.name + " for this session"));
  }
  function Cn() {
    const e = i("upcomingList");
    if (!e) return;
    e.innerHTML = "";
    const t = Ri(), n = g.slice(t);
    (be === "all" ? n : n.slice(0, Math.max(1, Number(be) || 1))).forEach((a) => {
      const r = document.createElement("section");
      r.className = "upcomingCard" + (a.sessionHidden ? " sessionHidden" : ""), r.innerHTML = '<div class="upcomingInfo"><div class="upcomingIcon" aria-hidden="true">' + Fi(a) + '</div><div><div class="upcomingName">' + B(a.name) + '</div><div class="upcomingMeta">' + B(a.group) + " · " + a.duration + ' sec</div></div></div><button class="skipSessionBtn" type="button">' + (a.sessionHidden ? "Include this session" : "Skip this session") + "</button>", r.querySelector(".skipSessionBtn").addEventListener("click", () => Pi(a)), e.appendChild(r);
    });
  }
  function Pe() {
    const e = Ei();
    if (Mi.textContent = e.name, Ti.textContent = e.meta, Li.textContent = e.icon, O = null, N) {
      const t = te(h + 1);
      t >= 0 && (O = g[t]);
    } else {
      const t = g[h];
      if (t && t.rest > 0)
        O = null;
      else {
        const n = te(h + 1);
        n >= 0 && (O = g[n]);
      }
    }
    ht && (ht.hidden = !O, ht.textContent = O != null && O.sessionHidden ? "Include this session" : "Skip this session"), Cn();
  }
  ht.addEventListener("click", () => {
    O && (O.sessionHidden = !O.sessionHidden, U((O.sessionHidden ? "Hidden " : "Included ") + O.name + " for this session"), Pe());
  });
  let Q = null, _t = null;
  function Xe(e, t = {}) {
    const n = b[w];
    m.fire(e, { move: (n == null ? void 0 : n.name) || "", move_id: w, ...t });
  }
  function zi() {
    const e = b[w];
    Q = { key: w, name: (e == null ? void 0 : e.name) || "Move", startedAt: Date.now(), active: 0 }, clearInterval(_t), _t = setInterval(() => {
      Q && !I && Q.active++;
    }, 1e3), Xe("started", { steps: g.length });
  }
  function Mn(e) {
    if (clearInterval(_t), !Q) return;
    const t = Q;
    Q = null, Xe(e ? "completed" : "ended", { seconds: t.active }), !(t.active < 30) && (x.history.unshift({ id: "h-" + t.startedAt, move_id: t.key, name: t.name, start: new Date(t.startedAt).toISOString(), seconds: t.active, completed: e }), x.history = x.history.slice(0, 1e3), Ge(), xt(), ve());
  }
  function Ni() {
    wt("workout"), Ai();
  }
  function Gt() {
    Mn(!1), clearInterval(z), clearInterval(ot), N = !1, I = !1, se.textContent = "Pause", i("app").classList.remove("resting", "paused"), Ve.classList.remove("active"), wt("home");
  }
  function Ai() {
    Ve.classList.add("active");
    let e = 5;
    Ht.textContent = e, requestAnimationFrame(gt), clearInterval(ot), ot = setInterval(() => {
      e--, e > 0 ? (Ht.textContent = e, gt()) : (clearInterval(ot), Ht.textContent = "GO", gt(), setTimeout(() => {
        Ve.classList.remove("active"), cancelAnimationFrame(Ue), Di();
      }, 650));
    }, 1e3);
  }
  function Tn() {
    Je.innerHTML = "", g.forEach((e, t) => {
      const n = document.createElement("button");
      n.type = "button", n.className = "progressSegment", n.setAttribute("aria-label", "Go to " + e.name), n.addEventListener("click", () => {
        t <= h && Ii(t);
      }), Je.appendChild(n);
    });
  }
  function Ii(e) {
    e < 0 || e >= g.length || e > h || (clearInterval(z), N = !1, i("app").classList.remove("resting"), h = e, I = !1, i("app").classList.remove("paused"), se.textContent = "Pause", ze(), z = setInterval(fe, 1e3));
  }
  function Di() {
    if (h = te(0), I = !1, i("app").classList.remove("paused"), se.textContent = "Pause", Tn(), h < 0) {
      Qe.textContent = "No activities", Be.textContent = "Open Edit and enable or add a movement";
      return;
    }
    zi(), ze(), clearInterval(z), z = setInterval(fe, 1e3);
  }
  function ze() {
    N = !1, i("app").classList.remove("resting");
    const e = g[h];
    j = e.duration, it = e.duration, Qe.textContent = e.name, Be.textContent = e.group, wn.textContent = "Step " + (h + 1) + " of " + g.length, Q && Xe("step", { name: e.name, group: e.group, kind: e.kind, step: h + 1, of: g.length, duration: e.duration }), Pe(), Bi();
  }
  function Ne() {
    kn.textContent = j;
    const e = j / it * 100;
    Sn.style.width = e + "%";
    const t = [...Je.children][h];
    if (t && !N) {
      const n = 100 - e;
      t.style.setProperty("--segment-progress", n + "%");
    }
  }
  function fe() {
    if (!I && (j--, Ne(), j <= 0)) {
      const e = g[h];
      e.rest > 0 ? Ln(e.rest) : $e();
    }
  }
  function Ln(e) {
    N = !0, i("app").classList.add("resting");
    const t = [...Je.children][h];
    t && t.style.setProperty("--segment-progress", "100%"), clearInterval(z), j = e, it = e, Q && Xe("rest", { duration: e }), Qe.textContent = "Rest", Be.textContent = "Recovery", Pe(), Ne(), z = setInterval(() => {
      I || (j--, Ne(), j <= 0 && (clearInterval(z), $e(), z = setInterval(fe, 1e3)));
    }, 1e3);
  }
  function $e() {
    N = !1;
    const e = te(h + 1);
    if (e >= 0)
      h = e, ze();
    else {
      I = !1, se.textContent = "Pause", i("app").classList.remove("resting", "paused"), clearInterval(z), Qe.textContent = "Complete", Be.textContent = "Move finished", kn.textContent = "✓", Mn(!0);
      {
        const t = In(7).reduce((n, o) => n + o.minutes, 0);
        Be.textContent = "Move finished · " + t + " min in the last 7 days";
      }
      Sn.style.width = "100%", Pe();
    }
  }
  i("skipExercise").addEventListener("click", () => {
    clearInterval(z);
    const e = g[h];
    if (N) {
      N = !1, i("app").classList.remove("resting");
      const n = te(h + 1);
      n >= 0 ? (h = n, ze(), z = setInterval(fe, 1e3)) : $e();
      return;
    }
    if (e && e.rest > 0) {
      Ln(e.rest);
      return;
    }
    const t = te(h + 1);
    t >= 0 ? (h = t, ze(), z = setInterval(fe, 1e3)) : $e();
  }), i("restartSegment").addEventListener("click", () => {
    if (clearInterval(z), I = !1, i("app").classList.remove("paused"), se.textContent = "Pause", N) {
      const e = g[h];
      j = e.rest, it = e.rest, Qe.textContent = "Rest", Be.textContent = "Recovery", i("app").classList.add("resting"), Pe(), Ne();
    } else
      ze();
    z = setInterval(N ? () => {
      I || (j--, Ne(), j <= 0 && (clearInterval(z), $e(), z = setInterval(fe, 1e3)));
    } : fe, 1e3);
  });
  function Wt(e, t, n, o) {
    let a = 0, r = null, s = !1;
    function l() {
      r && cancelAnimationFrame(r), r = null, a = 0, s = !1, t.style.width = "0%", e.classList.remove("holding");
    }
    function c(d) {
      if (!s) return;
      a || (a = d);
      const f = Math.min(1, (d - a) / n);
      if (t.style.width = f * 100 + "%", f >= 1) {
        s = !1, r && cancelAnimationFrame(r), r = null, t.style.width = "100%", setTimeout(() => t.style.width = "0%", 90), o();
        return;
      }
      r = requestAnimationFrame(c);
    }
    function v(d) {
      var f;
      if (!(d && d.button !== void 0 && d.button !== 0)) {
        d == null || d.preventDefault(), l(), s = !0, e.classList.add("holding");
        try {
          (f = e.setPointerCapture) == null || f.call(e, d.pointerId);
        } catch {
        }
        r = requestAnimationFrame(c);
      }
    }
    function k() {
      s && l();
    }
    e.addEventListener("pointerdown", v), e.addEventListener("pointerup", k), e.addEventListener("pointercancel", k), e.addEventListener("lostpointercapture", k), e.addEventListener("keydown", (d) => {
      (d.key === " " || d.key === "Enter") && !d.repeat && v(d);
    }), e.addEventListener("keyup", (d) => {
      (d.key === " " || d.key === "Enter") && k();
    });
  }
  const Hi = i("endWorkout");
  Wt(Hi, i("holdEndFill"), 1500, Gt);
  const Ae = i("deleteMoveConfirm");
  i("deleteMoveOpen").addEventListener("click", () => {
    Ae.classList.add("open"), Ae.setAttribute("aria-hidden", "false");
  }), i("deleteMoveCancel").addEventListener("click", () => {
    Ae.classList.remove("open"), Ae.setAttribute("aria-hidden", "true");
  });
  function qi() {
    const e = w, t = u.querySelector('.workoutPanel[data-workout="' + e + '"]');
    t && t.remove(), delete b[e], x.order = x.order.filter((o) => o !== e);
    let n = u.querySelector(".workoutPanel[data-workout]");
    if (!n) {
      const o = "custom-" + Date.now();
      b[o] = { name: "New move", source: "Custom routine", total: 20, work: 45, rest: 15, customSequence: !0, preset: "movement", sequence: [], strength: [] }, x.order.push(o), n = Mt(o, b[o]);
    }
    Ae.classList.remove("open"), Ae.setAttribute("aria-hidden", "true"), Ze = null, ut(), J(n.dataset.workout), Ge(), U("Move deleted");
  }
  Wt(i("deleteMoveYes"), i("deleteMoveFill"), 1500, qi);
  const En = u.querySelector(".rubberTabs"), Ie = i("rubberIndicator");
  function et(e, t = !0) {
    if (!e || !En || !Ie) return;
    const n = En.getBoundingClientRect(), o = e.getBoundingClientRect();
    Ie.style.transition = t ? "left .34s cubic-bezier(.2,1.35,.4,1),width .34s cubic-bezier(.2,1.35,.4,1),transform .18s ease" : "none";
    const a = ge();
    Ie.style.left = (o.left - n.left) / a + "px", Ie.style.width = o.width / a + "px", t && (Ie.style.transform = "scaleX(1.08)", setTimeout(() => Ie.style.transform = "scaleX(1)", 180));
  }
  u.querySelectorAll(".tab").forEach((e) => e.addEventListener("click", () => {
    u.querySelectorAll(".tab").forEach((t) => t.classList.remove("active")), u.querySelectorAll(".settingsPane").forEach((t) => t.classList.remove("active")), e.classList.add("active"), i(e.dataset.pane).classList.add("active"), et(e, !0);
  })), requestAnimationFrame(() => et(u.querySelector(".tab.active"), !1)), window.addEventListener("resize", () => et(u.querySelector(".tab.active"), !1));
  const jt = i("pixelTrailToggle"), Zt = i("rippleToggle"), De = i("trailStrength"), He = i("trailLife");
  function re(e, t) {
    _()[e] = t, Ge();
  }
  const le = { checkin: !0, insights: !0, steps: !0, mood: !0, energyLevel: !0, ..._().toggles || {} };
  function Rn() {
    u.querySelectorAll("[data-toggle]").forEach((t) => t.classList.toggle("on", le[t.dataset.toggle] !== !1)), u.querySelector(".energySection").hidden = le.checkin === !1, u.querySelector(".insightSection").hidden = le.insights === !1, [["steps", "stepsRow"], ["mood", "moodRow"], ["energyLevel", "energyLevelRow"]].forEach(([t, n]) => {
      i(n).hidden = le[t] === !1;
    });
    const e = ["steps", "mood", "energyLevel"].some((t) => le[t] !== !1);
    u.querySelector(".activityCard").hidden = !e, u.querySelector(".weekly").style.gridColumn = e ? "" : "span 12";
  }
  u.querySelectorAll("[data-toggle]").forEach((e) => e.addEventListener("click", () => {
    le[e.dataset.toggle] = le[e.dataset.toggle] === !1, Rn(), re("toggles", { ...le });
  })), Rn();
  function Oi() {
    jt.classList.toggle("on", ee), Zt.classList.toggle("on", me), De.value = Math.round(Te * 100), i("trailStrengthValue").textContent = De.value + "%", He.value = Le, i("trailLifeValue").textContent = He.value + " ms";
  }
  _().trailEnabled !== void 0 && (ee = _().trailEnabled), _().rippleEnabled !== void 0 && (me = _().rippleEnabled), _().trailStrength !== void 0 && (Te = _().trailStrength), _().trailMaxAge !== void 0 && (Le = _().trailMaxAge), Oi(), jt.addEventListener("click", () => {
    ee = !ee, jt.classList.toggle("on", ee), ee || (Ye = []), re("trailEnabled", ee);
  }), Zt.addEventListener("click", () => {
    me = !me, Zt.classList.toggle("on", me), re("rippleEnabled", me);
  }), De.addEventListener("input", () => {
    Te = Number(De.value) / 100, i("trailStrengthValue").textContent = De.value + "%";
  }), De.addEventListener("change", () => re("trailStrength", Te)), He.addEventListener("input", () => {
    Le = Number(He.value), i("trailLifeValue").textContent = He.value + " ms";
  }), He.addEventListener("change", () => re("trailMaxAge", Le)), dt.addEventListener("change", () => re("upcomingCount", be));
  function Fn(e) {
    u.querySelectorAll(".themeBtn").forEach((n) => n.classList.toggle("active", n.dataset.theme === e));
    const t = e === "light";
    i("app").classList.toggle("light", t), m.setLight(t);
  }
  Fn(_().theme || "dark"), u.querySelectorAll(".themeBtn").forEach((e) => e.addEventListener("click", () => {
    Fn(e.dataset.theme), re("theme", e.dataset.theme);
  }));
  const ne = { steps: null, ..._().entities || {} };
  let he = null, Vt = {};
  function _i(e) {
    const t = Object.values(e).filter((s) => s.entity_id.startsWith("sensor.") || s.entity_id.startsWith("input_number.")), n = (s) => s.attributes.friendly_name || s.entity_id, o = t.filter((s) => /step/i.test(s.entity_id) || /step/i.test(n(s)) || ["steps", "step"].includes(String(s.attributes.unit_of_measurement || "").toLowerCase())), a = t.filter((s) => !o.includes(s)), r = (s, l) => n(s).localeCompare(n(l));
    return { suggested: o.sort(r), rest: a.sort(r), label: n };
  }
  function Bn(e) {
    const t = i("stepsEntity");
    if (!t || t.matches(":focus")) return;
    const { suggested: n, rest: o, label: a } = _i(e), r = (c) => '<option value="' + B(c.entity_id) + '">' + B(a(c)) + "</option>";
    t.innerHTML = '<option value="">Not connected</option>' + (n.length ? '<optgroup label="Suggested">' + n.map(r).join("") + "</optgroup>" : "") + (o.length ? '<optgroup label="All sensors">' + o.map(r).join("") + "</optgroup>" : ""), t.value = ne.steps || "";
    const s = i("stepsStatus"), l = ne.steps && e[ne.steps];
    s.textContent = l ? "Connected · " + a(l) : s.dataset.empty;
  }
  i("stepsEntity").addEventListener("change", () => {
    ne.steps = i("stepsEntity").value || null, re("entities", { ...ne }), Vt = {}, An(), he && (Bn(he), zn(he));
  });
  function vt(e, t = 0) {
    return new Intl.NumberFormat(void 0, { maximumFractionDigits: t }).format(e);
  }
  function Pn() {
    const e = ne.steps && (he == null ? void 0 : he[ne.steps]), t = Number(e == null ? void 0 : e.state);
    return Number.isFinite(t) ? t : null;
  }
  function zn(e) {
    var o;
    const t = ne.steps, n = t ? Number((o = e[t]) == null ? void 0 : o.state) : NaN;
    i("stepsMeta").textContent = t ? Number.isFinite(n) ? vt(n) + " · today" : "No reading yet" : "Choose a sensor in Settings";
  }
  let Nn = 0;
  async function An() {
    const e = ne.steps;
    if (!e || !m.ws) return;
    Nn = Date.now();
    const t = /* @__PURE__ */ new Date(), n = new Date(t.getFullYear(), t.getMonth(), t.getDate() - 30);
    try {
      const o = await m.ws({ type: "recorder/statistics_during_period", start_time: n.toISOString(), end_time: t.toISOString(), statistic_ids: [e], period: "day", types: ["max"] }), a = (o == null ? void 0 : o[e]) || [], r = {};
      a.forEach((s) => {
        Number.isFinite(s.max) && (r[ue(new Date(s.start))] = s.max);
      }), Vt = r, ve();
    } catch {
    }
  }
  function xt() {
    const e = /* @__PURE__ */ new Date(), t = new Date(e.getFullYear(), e.getMonth(), e.getDate() - (e.getDay() + 6) % 7), n = [0, 0, 0, 0, 0, 0, 0];
    x.history.forEach((l) => {
      const c = new Date(l.start), v = Math.floor((new Date(c.getFullYear(), c.getMonth(), c.getDate()) - t) / 864e5);
      v >= 0 && v < 7 && (n[v] += l.seconds || 0);
    });
    const o = n.map((l) => Math.round(l / 60)), a = o.reduce((l, c) => l + c, 0);
    u.querySelector(".weekMetric").textContent = a;
    const r = [...Array(7)].map((l, c) => new Intl.DateTimeFormat(void 0, { weekday: "short" }).format(new Date(t.getFullYear(), t.getMonth(), t.getDate() + c))), s = u.querySelector(".weekChips");
    s.innerHTML = o.map(
      (l, c) => '<div class="weekChip' + (l ? " done" : "") + '"><div class="weekChipTop"><strong>' + B(r[c]) + "</strong>" + (l ? '<span class="weekTick">✓</span>' : "<span></span>") + '</div><div class="weekChipTime">' + l + ' min</div><div class="weekChipMeta">moved</div></div>'
    ).join("") + '<div class="weekChip total"><div class="weekChipTop"><strong>To date</strong>' + (a ? '<span class="weekTick">✓</span>' : "<span></span>") + '</div><div class="weekChipTime">' + a + ' min</div><div class="weekChipMeta">this week</div></div>';
  }
  xt(), setInterval(xt, 10 * 60 * 1e3);
  function In(e) {
    const t = {}, n = {};
    x.history.forEach((s) => {
      const l = ue(new Date(s.start));
      t[l] = (t[l] || 0) + (s.seconds || 0) / 60, n[l] = (n[l] || 0) + 1;
    });
    const o = /* @__PURE__ */ new Date(), a = ue(o), r = [];
    for (let s = e - 1; s >= 0; s--) {
      const l = new Date(o.getFullYear(), o.getMonth(), o.getDate() - s), c = ue(l), v = x.checkins.filter((d) => d.date === c), k = (d) => {
        const f = v.map((E) => E[d]).filter(Boolean);
        return f.length ? f.reduce((E, A) => E + A, 0) / f.length : null;
      };
      r.push({
        key: c,
        date: l,
        minutes: Math.round(t[c] || 0),
        moves: n[c] || 0,
        steps: c === a && Pn() != null ? Pn() : Vt[c] ?? null,
        mood: k("mood"),
        energy: k("energy")
      });
    }
    return r;
  }
  function Gi(e) {
    let t = e.length - 1;
    e[t] && !e[t].minutes && t--;
    let n = 0;
    for (; t >= 0 && e[t].minutes > 0; )
      n++, t--;
    return n;
  }
  function Dn(e) {
    return e.length ? e.reduce((t, n) => t + n, 0) / e.length : null;
  }
  function Hn(e, t, n) {
    const o = e.filter((s) => s[n] != null), a = o.filter(t).map((s) => s[n]), r = o.filter((s) => !t(s)).map((s) => s[n]);
    return a.length < 3 || r.length < 3 ? null : { on: Dn(a), off: Dn(r), onDays: a.length, offDays: r.length };
  }
  function Wi(e, t) {
    const n = e[e.length - 1], o = e.slice(-7).reduce((r, s) => r + s.minutes, 0), a = e.reduce((r, s) => r + s.minutes, 0);
    return n.minutes ? { big: n.minutes + " min", line: "already moved today. Why stop now?" } : t > 1 ? { big: t + " days", line: "in a row. Keep the streak alive today." } : o ? { big: o + " min", line: "moved in the last 7 days. One more move?" } : a ? { big: a + " min", line: "moved this month. Pick it back up today." } : { big: "Day one", line: "Every move counts. Start with one today." };
  }
  function qn(e, t, n, o) {
    const a = e.on - e.off, r = X(t, e.on), s = X(t, e.off);
    return Math.abs(a) < 0.25 ? "Whether you " + B(n) + " or not, your " + t + " is about the same (" + B(r) + ")." : "On days you " + n + ", your " + t + " averages <strong>" + B(r) + "</strong>" + (r === s ? " (a little higher)" : "") + ", vs " + B(s) + " on days you " + o + ".";
  }
  function ve() {
    const e = i("insightCard");
    if (!e) return;
    const t = In(30), n = Gi(t), o = Wi(t, n), a = t.reduce((p, T) => p + T.minutes, 0), r = t.reduce((p, T) => p + T.moves, 0), s = t[t.length - 1], l = (p) => p.minutes > 0, c = [];
    ["energy", "mood"].forEach((p) => {
      const T = Hn(t, l, p);
      T && c.push(qn(T, p, "do a move", "don't"));
    });
    const v = t.filter((p) => p.steps != null && (p.mood != null || p.energy != null));
    if (v.length >= 6) {
      const p = v.map((W) => W.steps).sort((W, Oe) => W - Oe), T = p[Math.floor(p.length / 2)], Z = (W) => W.steps != null && W.steps >= T, qe = Hn(t.filter((W) => W.steps != null), Z, "energy");
      qe && c.push(qn(qe, "energy", "walk " + vt(Math.round(T / 100) * 100) + "+ steps", "walk less"));
    }
    const k = t.filter((p) => p.mood != null || p.energy != null).length, d = c.length ? c.map((p) => '<div class="insightLine">' + p + "</div>").join("") : `<div class="insightLine muted">Keep checking in. After a few days with moves and a few without, you'll see how moving changes your mood and energy here.` + (k ? " (" + k + " day" + (k === 1 ? "" : "s") + " so far)" : "") + "</div>", f = t.slice(-14), E = Math.max(10, ...f.map((p) => p.minutes)), A = Math.max(1, ...f.map((p) => p.steps || 0)), D = f.some((p) => p.steps != null), M = (p, T) => '<span class="dayDot' + (T == null ? " empty" : "") + '" style="' + (T == null ? "" : "background:" + ci[Math.round(T) - 1]) + '" title="' + (T == null ? "No " + p + " check-in" : X(p, T) + " " + p) + '"></span>', H = f.map((p, T) => {
      const Z = T === f.length - 1, qe = new Intl.DateTimeFormat(void 0, { weekday: "narrow" }).format(p.date), W = new Intl.DateTimeFormat(void 0, { weekday: "short", day: "numeric", month: "short" }).format(p.date) + " · " + p.minutes + " min" + (p.steps != null ? " · " + vt(p.steps) + " steps" : "");
      return '<div class="day' + (Z ? " today" : "") + '" title="' + B(W) + '"><div class="dayBars">' + (D ? '<span class="stepBar" style="height:' + (p.steps ? Math.max(3, p.steps / A * 100) : 0) + '%"></span>' : "") + '<span class="moveBar" style="height:' + (p.minutes ? Math.max(4, p.minutes / E * 100) : 0) + '%"></span></div><div class="dayDots">' + M("mood", p.mood) + M("energy", p.energy) + '</div><div class="dayLabel">' + B(qe) + "</div></div>";
    }).join("");
    e.innerHTML = '<div class="insightTop"><div class="insightHero"><div class="insightBig">' + B(o.big) + '</div><div class="weekCopy">' + B(o.line) + '</div></div><div class="insightStats"><div class="weekChip"><div class="weekChipTop"><strong>Streak</strong></div><div class="weekChipTime">' + n + " day" + (n === 1 ? "" : "s") + '</div><div class="weekChipMeta">in a row</div></div><div class="weekChip"><div class="weekChipTop"><strong>30 days</strong></div><div class="weekChipTime">' + a + ' min</div><div class="weekChipMeta">' + r + " move" + (r === 1 ? "" : "s") + "</div></div>" + (D ? '<div class="weekChip"><div class="weekChipTop"><strong>Today</strong></div><div class="weekChipTime">' + (s.steps != null ? vt(s.steps) : "—") + '</div><div class="weekChipMeta">steps</div></div>' : "") + '</div></div><div class="insightBody"><div class="insightLines">' + d + '</div><div class="insightChart"><div class="dayStrip">' + H + '</div><div class="chartLegend"><span><i class="lgMove"></i>Move minutes</span>' + (D ? '<span><i class="lgSteps"></i>Steps</span>' : "") + '<span><i class="lgDot"></i>Mood · energy</span></div></div></div>';
  }
  const On = i("tvNav");
  m.fullscreenSupported || (On.hidden = !0), On.addEventListener("click", () => m.toggleFullscreen()), u.addEventListener("keydown", (e) => {
    !_e.workout.classList.contains("active") || Ve.classList.contains("active") || e.target.closest("input,select,textarea,.holdEnd") || (e.key === "MediaPlayPause" || e.key === " " && !e.target.closest("button") ? (e.preventDefault(), se.click()) : e.key === "MediaTrackNext" ? (e.preventDefault(), i("skipExercise").click()) : e.key === "MediaTrackPrevious" && (e.preventDefault(), i("restartSegment").click()));
  }), [C, y, S].forEach((e) => e.addEventListener("input", () => {
    const t = b[w];
    t && (t.total = Number(C.value), t.work = Number(y.value), t.rest = Number(S.value)), q();
  })), $t.addEventListener("click", Gt), en.addEventListener("click", () => wt("settings")), i("settingsBack").addEventListener("click", Gt), se.addEventListener("click", () => {
    I = !I, Q && Xe(I ? "paused" : "resumed"), se.textContent = I ? "Resume" : "Pause", i("app").classList.toggle("paused", I);
  }), q(), rt(), lt(), ve();
  let Ut = null;
  function ji() {
    Ut || (Ut = setTimeout(() => {
      Ut = null, ve();
    }, 3e4));
  }
  return {
    updateStates(e) {
      he = e, Bn(e), zn(e), Date.now() - Nn > 60 * 60 * 1e3 && An(), ji();
    },
    applyRemoteData(e) {
      if (e && (Array.isArray(e.history) && (x.history = e.history, xt()), Array.isArray(e.history) && ve(), Array.isArray(e.checkins) && (x.checkins = e.checkins, rt(), lt(), ve()), e.profiles && !Y.classList.contains("open") && !Q)) {
        const t = an(e);
        Object.keys(b).forEach((n) => delete b[n]), Object.assign(b, t.profiles), x.order = t.order, b[w] || (w = x.order[0]), rn(), J(w);
      }
    },
    suspend() {
      V = !1;
    },
    resume() {
      V || (V = !0, Ee || (Ee = requestAnimationFrame(mt)), Fe || (Fe = requestAnimationFrame(ft)), et(u.querySelector(".tab.active"), !1));
    }
  };
}
const Yi = "0.2.0", Kt = "move_assistant", Qi = "move_assistant";
class Ji extends HTMLElement {
  setConfig(m) {
    this._config = m || {};
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
  set hass(m) {
    const i = !this._hass;
    if (this._hass = m, i) {
      this._init();
      return;
    }
    this._app && m.states !== this._lastStates && (this._lastStates = m.states, this._app.updateStates(m.states));
  }
  connectedCallback() {
    var m;
    (m = this._app) == null || m.resume();
  }
  disconnectedCallback() {
    var m;
    (m = this._app) == null || m.suspend();
  }
  async _init() {
    const m = this.shadowRoot || this.attachShadow({ mode: "open" });
    m.innerHTML = `<style>${Vi}</style>${Ui}`;
    const i = m.getElementById("app");
    i.style.opacity = "0";
    let R = null;
    try {
      const L = await this._hass.callWS({
        type: "frontend/get_user_data",
        key: Kt
      });
      R = (L == null ? void 0 : L.value) ?? null;
    } catch {
    }
    this._lastSaved = JSON.stringify(R), this._app = Ki(m, {
      data: R,
      save: (L) => this._save(L),
      fire: (L, V) => this._fire(L, V),
      ws: (L) => this._hass.callWS(L),
      setLight: (L) => this.classList.toggle("lightBody", L),
      fullscreenSupported: !!(this.requestFullscreen || this.webkitRequestFullscreen),
      toggleFullscreen: () => this._toggleFullscreen()
    }), this._lastStates = this._hass.states, this._app.updateStates(this._hass.states), this.isConnected || this._app.suspend(), i.style.transition = "opacity .2s ease", i.style.opacity = "", this._subscribe();
  }
  _subscribe() {
    var i;
    const m = (i = this._hass) == null ? void 0 : i.connection;
    m != null && m.subscribeMessage && m.subscribeMessage(
      (R) => {
        var V;
        const L = JSON.stringify((R == null ? void 0 : R.value) ?? null);
        L === this._lastSaved || L === this._pendingJson || (this._lastSaved = L, (V = this._app) == null || V.applyRemoteData(R.value));
      },
      { type: "frontend/subscribe_user_data", key: Kt }
    ).catch(() => {
    });
  }
  _save(m) {
    this._pendingJson = JSON.stringify(m), clearTimeout(this._saveTimer), this._saveTimer = setTimeout(async () => {
      const i = this._pendingJson;
      try {
        await this._hass.callWS({
          type: "frontend/set_user_data",
          key: Kt,
          value: JSON.parse(i)
        }), this._lastSaved = i;
      } catch {
        this._toast("Couldn't save to Home Assistant");
      }
    }, 400);
  }
  _fire(m, i = {}) {
    var R, L;
    ((R = this._config) == null ? void 0 : R.events) !== !1 && ((L = this._hass) == null || L.callWS({
      type: "fire_event",
      event_type: Qi,
      event_data: { action: m, ...i }
    }).catch(() => {
    }));
  }
  _toggleFullscreen() {
    const m = document;
    if (m.fullscreenElement || m.webkitFullscreenElement) {
      (m.exitFullscreen || m.webkitExitFullscreen).call(m);
      return;
    }
    const i = this.requestFullscreen || this.webkitRequestFullscreen;
    Promise.resolve(i.call(this)).catch(
      () => this._toast("Full screen isn't available here")
    );
  }
  _toast(m) {
    var R;
    const i = (R = this.shadowRoot) == null ? void 0 : R.getElementById("toast");
    i && (i.textContent = m, i.classList.add("show"), setTimeout(() => i.classList.remove("show"), 2600));
  }
}
customElements.get("move-assistant-card") || (customElements.define("move-assistant-card", Ji), window.customCards = window.customCards || [], window.customCards.push({
  type: "move-assistant-card",
  name: "Move Assistant",
  description: "Guided movement timer with your Home Assistant activity data.",
  preview: !1
}), console.info(`%c MOVE ASSISTANT %c ${Yi} `, "background:#D0FF00;color:#090909;font-weight:700", ""));
