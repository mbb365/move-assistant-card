const ua = ':host{display:flex;flex-direction:column;min-height:calc(100dvh - var(--header-height,0px));position:relative;background:#050505;color-scheme:dark;--bg:#050505;--page:#090909;--card:#1d1d1d;--card2:#242424;--muted:#969696;--text:#f4f4f4;--line:#3f3f3f;--lineb:#252525;--r:36px;--gap:20px}*{box-sizing:border-box}#app{color:var(--text);font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif;transition:background .25s ease,color .25s ease;zoom:.8;-webkit-font-smoothing:antialiased}[hidden]{display:none!important}button,input{font:inherit}#app{flex:1;display:flex;flex-direction:column;width:100%;margin:0;padding:0;background:var(--bg);font-size:16px;line-height:normal;text-align:left}.shell{flex:1;display:flex;flex-direction:column;position:relative;width:100%;background:var(--page);border-radius:0;overflow:visible;transition:background .28s ease}#app.resting .shell{background:#1f7a4d}#app.paused .shell{background:#3458d4}#app.light.paused .shell{background:#7f96e8}#app.light{--bg:#EEEDED;--page:#EEEDED;--card:rgba(255,255,255,.8);--card2:rgba(255,255,255,.8);--muted:#222222;--text:#222222;--line:#ffffff;--lineb:#ffffff}#app.light,#app.light *{color:#222!important}#app.light .pill{background:transparent;color:#222!important;border:0}#app.light .tab,#app.light .back,#app.light .navBtn,#app.light .primary,#app.light .themeBtn{background:#ffffffe0;color:#222!important;border-color:#fff}#app.light .holdEnd{background:#ffffffe0;border:.4px solid #fff;text-decoration:none}#app.light .energyBtn,#app.light .activityRow,#app.light .integration,#app.light .toggleRow,#app.light .weekChip,#app.light .sourceTag,#app.light .timeTile,#app.light .moveRow,#app.light .routineSummary,#app.light .workoutPanel{background:#fffc;color:#222!important}#app.light .timerCard,#app.light .movementCard,#app.light .nextCard{background:#fffc}#app.light .activityRow:nth-child(1) .activityRowIcon{background:#dfe4ff;color:#596de4!important}#app.light .activityRow:nth-child(2) .activityRowIcon{background:#ffe8c8;color:#c8741f!important}#app.light .activityRow:nth-child(3) .activityRowIcon{background:#d9f4e6;color:#2e8b63!important}#app.light .activityIcon{background:#e8e1ff;color:#7859c9!important}#app.light .energyBtn{color:#222!important;background:#ffffffb8}#app.light .energyBtn:hover,#app.light .energyBtn:focus-visible,#app.light .energyBtn.selected{background:color-mix(in srgb,var(--feeling-color) 34%,white);color:#222!important}:host(.lightBody){background:#eeeded;color-scheme:light}#app.light,#app.light .shell{background:#eeeded}#app.light .modal{background:#fffffff0;border-color:#fff}#app.light .modalStatic{background:#fffffff0;border-bottom-color:#fff}#app.light .exerciseScroller{background:transparent;border-color:#ffffffe6}#app.light .addInput,#app.light .editNameInput{background:#ffffffeb;color:#222!important;border-color:#fff}#app.light .rangeTrack{background:#d8d6d6;border-color:#fff}#app.light .rangeFill{background:#aeb9ff}#app.light .timerCard,#app.light .movementCard,#app.light .upcomingTile{background:#fffc;border-color:#fff}#app.light .fill{background:#c9d0ff}#app.light .progress{background:transparent}#app.light .progressSegment{background:#c8c6c6}#app.light .progressSegment.active:after{background:#9aa8ff}#app.light .progressSegment.done{background:transparent;opacity:0}#app.light .sourceTag,#app.light .activityRow,#app.light .weekChip,#app.light .integration,#app.light .toggleRow,#app.light .moveRow,#app.light .timeTile,#app.light .routineSummary{border-color:#fff}#app.light .countdown{background:#eeeded}#app.light .toast{background:#222;color:#eeeded!important}#app.light.resting .shell{background:#7dbb98}.view{display:none;width:100%;max-width:1480px;margin:0 auto;padding:28px 28px 96px}.view.active{display:block;flex:1 0 auto}.card,.panel,.tile{position:relative;background:var(--card);border-radius:36px;padding:28px;border-top:.4px solid var(--line);border-left:.4px solid var(--line);border-right:.4px solid var(--line);border-bottom:.2px solid var(--lineb)}.grid{display:grid;grid-template-columns:repeat(12,minmax(0,1fr));gap:20px}.eyebrow{font-size:12px;text-transform:uppercase;letter-spacing:.14em;color:var(--muted);font-weight:760}.title{font-size:clamp(52px,6vw,84px);font-weight:790;letter-spacing:-.06em;line-height:.9}.sub{font-size:15px;color:var(--muted);margin-top:8px;line-height:1.45}.pill,.primary,.navBtn,.tab,.back,.hideBtn,.addBtn{cursor:pointer}.pill{min-height:0;padding:4px 0;border:0;border-radius:0;background:transparent;color:var(--text);text-decoration-line:underline;text-decoration-thickness:1px;text-underline-offset:4px}.tab,.back{border-radius:999px;min-height:52px;padding:0 20px;background:#171717;border:.4px solid var(--line);color:#fff}.primary{border-radius:999px;min-height:52px;padding:0 22px;border:0;background:#f2f2f2;color:#090909;font-weight:780}.topbar{display:flex;justify-content:space-between;gap:20px;align-items:flex-start;margin-bottom:24px}.activityCard,.weekly{grid-column:span 6}.energySection{grid-column:span 12;margin-top:20px}.activityCard,.weekly{min-height:360px}.wellness{width:100%}.sourceTag{display:inline-flex;margin-top:14px;padding:8px 12px;border-radius:999px;background:#292929;font-size:13px;color:#cfcfcf}.workoutFooter{display:flex;justify-content:space-between;align-items:end;gap:28px;flex-wrap:wrap;margin-top:28px;width:100%;box-sizing:border-box}.workoutGallery{grid-column:span 12;display:flex;gap:20px;height:360px;overflow:hidden}.workoutPanel{position:relative;height:360px;flex:1 1 90px;min-width:88px;background:var(--card);border-radius:36px;padding:28px;border-top:.4px solid var(--line);border-left:.4px solid var(--line);border-right:.4px solid var(--line);border-bottom:.2px solid var(--lineb);overflow:hidden;box-sizing:border-box;transition:flex .32s ease;cursor:pointer}.workoutPanel.active{flex:7 1 0;min-width:0;cursor:default}.workoutPanel.addPanel{flex:0 0 92px;min-width:92px;display:flex;align-items:center;justify-content:center;padding:18px}.workoutPanel{--edge-proximity:0;--cursor-angle:45deg;--edge-sensitivity:36;--color-sensitivity:56;--cone-spread:25;--fill-opacity:.18;--glow-color:hsl(205deg 90% 82% / 100%);--glow-color-60:hsl(205deg 90% 82% / 60%);--glow-color-50:hsl(205deg 90% 82% / 50%);--glow-color-40:hsl(205deg 90% 82% / 40%);--glow-color-30:hsl(205deg 90% 82% / 30%);--glow-color-20:hsl(205deg 90% 82% / 20%);--glow-color-10:hsl(205deg 90% 82% / 10%);--gradient-one:radial-gradient(at 80% 55%,#c084fc 0px,transparent 50%);--gradient-two:radial-gradient(at 69% 34%,#f472b6 0px,transparent 50%);--gradient-three:radial-gradient(at 8% 6%,#38bdf8 0px,transparent 50%);--gradient-four:radial-gradient(at 41% 38%,#c084fc 0px,transparent 50%);--gradient-five:radial-gradient(at 86% 85%,#f472b6 0px,transparent 50%);--gradient-six:radial-gradient(at 82% 18%,#38bdf8 0px,transparent 50%);--gradient-seven:radial-gradient(at 51% 4%,#f472b6 0px,transparent 50%);isolation:isolate}.workoutPanel:before,.workoutPanel:after,.workoutPanel>.edgeLight{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:36px;pointer-events:none;transition:opacity .18s ease-out}.workoutPanel:before{z-index:2;border:1px solid transparent;background:linear-gradient(var(--card) 0 100%) padding-box,linear-gradient(#fff0 0,#fff0) border-box,var(--gradient-one) border-box,var(--gradient-two) border-box,var(--gradient-three) border-box,var(--gradient-four) border-box,var(--gradient-five) border-box,var(--gradient-six) border-box,var(--gradient-seven) border-box;opacity:clamp(0,calc(.72 * (var(--edge-proximity) - var(--color-sensitivity)) / (100 - var(--color-sensitivity))),.72);-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,black calc(var(--cone-spread) * 1%),transparent calc((var(--cone-spread) + 15) * 1%),transparent calc((100 - var(--cone-spread) - 15) * 1%),black calc((100 - var(--cone-spread)) * 1%));mask-image:conic-gradient(from var(--cursor-angle) at center,black calc(var(--cone-spread) * 1%),transparent calc((var(--cone-spread) + 15) * 1%),transparent calc((100 - var(--cone-spread) - 15) * 1%),black calc((100 - var(--cone-spread)) * 1%))}.workoutPanel:after{z-index:1;border:1px solid transparent;background:var(--gradient-one) padding-box,var(--gradient-two) padding-box,var(--gradient-three) padding-box,var(--gradient-four) padding-box,var(--gradient-five) padding-box,var(--gradient-six) padding-box,var(--gradient-seven) padding-box;opacity:clamp(0,calc(var(--fill-opacity) * (var(--edge-proximity) - var(--color-sensitivity)) / (100 - var(--color-sensitivity))),.18);mix-blend-mode:soft-light;-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,transparent 5%,black 15%,black 85%,transparent 95%);mask-image:conic-gradient(from var(--cursor-angle) at center,transparent 5%,black 15%,black 85%,transparent 95%)}.workoutPanel>.edgeLight{top:-24px;right:-24px;bottom:-24px;left:-24px;z-index:3;opacity:clamp(0,calc(.62 * (var(--edge-proximity) - var(--edge-sensitivity)) / (100 - var(--edge-sensitivity))),.62);mix-blend-mode:plus-lighter;-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,black 2.5%,transparent 10%,transparent 90%,black 97.5%);mask-image:conic-gradient(from var(--cursor-angle) at center,black 2.5%,transparent 10%,transparent 90%,black 97.5%)}.workoutPanel>.edgeLight:before{content:"";position:absolute;top:24px;right:24px;bottom:24px;left:24px;border-radius:36px;box-shadow:inset 0 0 0 1px var(--glow-color-60),inset 0 0 3px 0 var(--glow-color-40),inset 0 0 8px 0 var(--glow-color-30),inset 0 0 16px 0 var(--glow-color-20),0 0 3px 0 var(--glow-color-40),0 0 8px 0 var(--glow-color-30),0 0 16px 0 var(--glow-color-20),0 0 28px 2px var(--glow-color-10)}.workoutPanel:not(.borderGlowActive):before,.workoutPanel:not(.borderGlowActive):after,.workoutPanel:not(.borderGlowActive)>.edgeLight{opacity:0;transition:opacity .35s ease-out}#app.light .workoutPanel{--glow-color:hsl(224deg 80% 55% / 100%);--glow-color-50:hsl(224deg 80% 55% / 50%);--glow-color-40:hsl(224deg 80% 55% / 40%);--glow-color-30:hsl(224deg 80% 55% / 30%);--glow-color-20:hsl(224deg 80% 55% / 20%);--glow-color-10:hsl(224deg 80% 55% / 10%)}.workoutPanel:not(.active):not(.addPanel) .panelExpanded{opacity:0;filter:blur(10px);pointer-events:none}.workoutPanel:not(.active):not(.addPanel) .panelCollapsed{opacity:1;filter:blur(0)}.workoutPanel.active .panelExpanded{opacity:1;filter:blur(0);pointer-events:auto}.workoutPanel.active .panelCollapsed{opacity:0;filter:blur(8px);pointer-events:none}.panelExpanded{position:relative;z-index:4;width:100%;height:100%;min-width:0;box-sizing:border-box;display:flex;flex-direction:column;justify-content:space-between;transition:opacity .22s ease,filter .22s ease}.panelCollapsed{position:absolute;top:0;right:0;bottom:0;left:0;z-index:4;display:flex;align-items:center;justify-content:center;opacity:0;filter:blur(8px);transition:opacity .22s ease,filter .22s ease}.panelCollapsedText{writing-mode:vertical-rl;transform:rotate(180deg);white-space:nowrap;font-size:18px;font-weight:720;letter-spacing:-.02em}.workoutPanelTop{display:flex;justify-content:space-between;align-items:flex-start;gap:28px;width:100%;min-width:0;box-sizing:border-box}.workoutName{font-size:clamp(54px,7vw,92px);line-height:.9;letter-spacing:-.06em;font-weight:790}.workoutPanelActions{display:flex;gap:28px;flex-wrap:wrap;align-items:center;justify-content:flex-end;margin-left:auto}.startWorkoutBtn{background:#d0ff00!important;color:#090909!important}.startWorkoutBtn:hover{filter:brightness(1.04)}#app.light .startWorkoutBtn{background:#d0ff00!important;color:#090909!important}.addPanelPlus{position:relative;z-index:4;font-size:34px;line-height:1}.addPanelLabel{position:absolute;z-index:4;bottom:20px;writing-mode:vertical-rl;transform:rotate(180deg);font-size:13px;color:var(--muted);letter-spacing:.04em}@media (max-height:820px) and (min-width:621px){.modalStatic{padding:22px 28px}.timeTile{min-height:156px}}@media (max-width:900px){.weekCopy{white-space:normal}.workoutGallery{overflow-x:auto;scroll-snap-type:x mandatory;padding-bottom:4px}.workoutPanel,.workoutPanel.active{height:360px;flex:0 0 min(86vw,680px);min-width:min(86vw,680px);scroll-snap-align:start}.workoutPanel.addPanel{flex-basis:100px;min-width:100px}.panelCollapsed{display:none}}.moveActions{display:flex;gap:28px;flex-wrap:wrap}.energyFloat{padding:28px;background:transparent;border:0}.energyQuestion{font-size:48px;font-weight:780;letter-spacing:-.035em;line-height:1}#app.light .energyFloat{background:transparent}.energyScale{display:grid;grid-template-columns:repeat(6,minmax(0,1fr));gap:12px;margin-top:22px}.energyBtn{--feeling-color:#8f8f8f;--feeling-glow:rgba(255,255,255,.14);position:relative;isolation:isolate;overflow:hidden;width:100%;min-height:54px;padding:0 12px;white-space:nowrap;border-radius:16px;background:#282828;border:.4px solid var(--line);color:#fff;cursor:pointer;transition:color .18s ease,border-color .18s ease,background .18s ease}.energyBtn>span{position:relative;z-index:2}.energyBtn:before{content:"";position:absolute;top:-18%;right:-18%;bottom:-18%;left:-18%;z-index:-2;opacity:0;background:radial-gradient(ellipse at var(--feel-x,50%) var(--feel-y,50%),color-mix(in srgb,var(--feeling-color) 88%,transparent) 0%,color-mix(in srgb,var(--feeling-color) 54%,transparent) 34%,transparent 72%);transform:scale(.82) skew(-3deg);filter:saturate(1.08) blur(1px);transition:opacity .18s ease,transform .28s cubic-bezier(.2,.8,.2,1)}.energyBtn:after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;z-index:-1;opacity:0;pointer-events:none;background:repeating-linear-gradient(to bottom,rgba(255,255,255,.07) 0,rgba(255,255,255,.07) 1px,transparent 1px,transparent 4px),linear-gradient(90deg,transparent 0%,color-mix(in srgb,var(--feeling-color) 34%,transparent) var(--feel-x,50%),transparent 100%);mix-blend-mode:screen}.energyBtn:hover:before,.energyBtn:focus-visible:before,.energyBtn.selected:before{opacity:.92;transform:translate(var(--feel-shift-x,0px),var(--feel-shift-y,0px)) scale(1.08) skew(2deg);animation:feelingWarp 1.45s ease-in-out infinite alternate}.energyBtn:hover:after,.energyBtn:focus-visible:after,.energyBtn.selected:after{opacity:.55;animation:feelingScan .9s linear infinite}.energyBtn:hover,.energyBtn:focus-visible,.energyBtn.selected{background:color-mix(in srgb,var(--feeling-color) 42%,#171717);border-color:color-mix(in srgb,var(--feeling-color) 72%,#ffffff 10%);color:#fff}.energyBtn.selected{box-shadow:inset 0 0 0 1px color-mix(in srgb,var(--feeling-color) 58%,transparent),0 0 18px color-mix(in srgb,var(--feeling-color) 24%,transparent)}.energyBtn[data-energy=Drained]{--feeling-color:#6E63A8}.energyBtn[data-energy=Low]{--feeling-color:#5878A8}.energyBtn[data-energy=Okay]{--feeling-color:#6F8B8A}.energyBtn[data-energy=Good]{--feeling-color:#5F9B72}.energyBtn[data-energy=Energised]{--feeling-color:#D5A53E}.energyBtn[data-energy=Great]{--feeling-color:#D56B54}@keyframes feelingWarp{0%{transform:scale(1.03) skew(-2deg) translate(-1.5%);filter:saturate(1.02) blur(.8px)}50%{transform:scale(1.12) skew(1deg) translate(1%);filter:saturate(1.22) blur(1.5px)}to{transform:scale(1.06) skew(3deg) translate(-.5%);filter:saturate(1.1) blur(.6px)}}@keyframes feelingScan{0%{background-position:0 0,-80% 0}to{background-position:0 8px,180% 0}}@media (prefers-reduced-motion: reduce){.energyBtn:before,.energyBtn:after{animation:none!important}}.energyHistory{display:grid;gap:8px;margin-top:12px}.energyLog{display:flex;justify-content:space-between;gap:12px;padding:10px 12px;border-radius:20px;background:#252525;font-size:13px}.energyLog span:last-child{color:#999}.tempoExperiment{margin-top:18px;padding-top:20px;border-top:.4px solid var(--line)}.tempoExperimentHead{display:flex;justify-content:space-between;align-items:flex-start;gap:20px;margin-bottom:16px}.tempoEstimate{font-size:18px;font-weight:680;white-space:nowrap}.tempoQuad{position:relative;width:min(360px,100%);aspect-ratio:1/1;border-radius:36px;background:#ffffff06;border-top:.4px solid var(--line);border-left:.4px solid var(--line);border-right:.4px solid var(--line);border-bottom:.2px solid var(--lineb);overflow:hidden;touch-action:none;cursor:crosshair}.tempoCross{position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none;background:linear-gradient(to right,transparent calc(50% - .5px),rgba(255,255,255,.12) 50%,transparent calc(50% + .5px)),linear-gradient(to bottom,transparent calc(50% - .5px),rgba(255,255,255,.12) 50%,transparent calc(50% + .5px))}.tempoDot{position:absolute;left:50%;top:50%;width:22px;height:22px;border-radius:50%;background:var(--text);transform:translate(-50%,-50%);pointer-events:none;box-shadow:0 0 0 6px #ffffff12}.tempoPole{position:absolute;pointer-events:none;color:var(--muted);font-size:12px}.tempoFast{top:12px;left:50%;transform:translate(-50%)}.tempoSlow{bottom:12px;left:50%;transform:translate(-50%)}.tempoHard{right:12px;top:50%;transform:translateY(-50%)}.tempoLow{left:12px;top:50%;transform:translateY(-50%)}.tempoReadout{margin-top:12px;font-size:13px;color:var(--muted)}.tempoRevealRow{margin-top:14px}.tempoRevealBtn{font-size:13px;color:#b8bcc6;text-decoration-color:#6d7480}.editTempoExperiment{margin-top:14px}.editTempoExperiment[hidden]{display:none}.testingZone{position:relative;overflow:hidden;border-radius:28px;background:#202226;border:1px solid #4a4f58;box-shadow:none}.testingZoneInner{position:relative;padding:24px;background:linear-gradient(rgba(176,186,199,.045) 1px,transparent 1px),linear-gradient(90deg,rgba(176,186,199,.045) 1px,transparent 1px),#202226;background-size:20px 20px}.testingZoneTitleBlock{max-width:760px;margin-bottom:24px}.testingZoneTitleRow{display:flex;justify-content:space-between;align-items:center;gap:20px}.testingZoneTitleRow strong{color:#d6d9df;font-size:18px;font-weight:650}.testingZone .tempoEstimate{color:#aeb4bf;font-weight:560}.testingZoneExplanation{margin:10px 0 0;color:#9ea5b0;font-size:13px;line-height:1.5;text-align:left}.testingZoneLayout{display:grid;grid-template-columns:minmax(280px,360px) minmax(0,1fr);grid-template-areas:"controller feedback";gap:32px;align-items:start}.testingFeedbackForm{grid-area:feedback;display:grid;gap:18px;min-width:0;padding:20px;border:.4px solid var(--line);border-radius:20px;background:#252525}.testingFeedbackHeading{color:#d6d9df;font-size:15px;font-weight:650}.testingFeedbackField{display:grid;gap:8px;color:#9ea5b0;font-size:12px}.testingFeedbackField select,.testingFeedbackField textarea{width:100%;border:.4px solid var(--line);background:#171717;color:#d6d9df;border-radius:14px;padding:10px 12px;font:inherit}.testingFeedbackField textarea{resize:vertical;min-height:82px}.testingRating{display:grid;grid-template-columns:repeat(5,1fr);gap:6px}.testingRating button{min-height:38px;border-radius:12px;border:.4px solid var(--line);background:#171717;color:#c7ccd5;cursor:pointer}.testingRating button.selected{border-color:#c7ccd5;background:#343434}.testingFeedbackSubmit{justify-self:start;min-height:42px;padding:0 16px;border-radius:14px;border:0;background:#ffffffe0;color:#111;cursor:pointer}.testingZoneControllerWrap{grid-area:controller;display:flex;flex-direction:column;align-items:center;justify-content:flex-start}.tempoQuadFrame{width:min(320px,100%);aspect-ratio:1/1;padding:0;background:linear-gradient(rgba(176,186,199,.075) 1px,transparent 1px),linear-gradient(90deg,rgba(176,186,199,.075) 1px,transparent 1px),#202226;background-size:20px 20px,20px 20px,auto;border-radius:20px}.testingZone .tempoQuad{width:100%;height:100%;border-radius:20px;background:#202226;border:1px solid #5a606a;box-shadow:none}.testingZone .tempoCross{background:linear-gradient(to right,transparent calc(50% - .5px),rgba(176,186,199,.2) 50%,transparent calc(50% + .5px)),linear-gradient(to bottom,transparent calc(50% - .5px),rgba(176,186,199,.2) 50%,transparent calc(50% + .5px))}.testingZone .tempoDot{width:18px;height:18px;background:transparent;border:1px solid #c4cad4;box-shadow:0 0 0 4px #c4cad40d}.testingZone .tempoPole{color:#8e96a2}.testingZone .tempoReadout{width:min(320px,100%);color:#9ea5b0;text-align:center;margin-top:12px}.testingZone button,.testingZone input,.testingZone select,.testingZone textarea{transition:opacity .14s ease,border-color .14s ease,color .14s ease,background .14s ease}.testingZone button:hover,.testingZone button:focus-visible{filter:none;opacity:.88}@media (max-width:900px){.testingZoneLayout{grid-template-columns:1fr;grid-template-areas:"controller" "feedback"}}#app.light .testingZone{background:#202226;border-color:#4a4f58}#app.light .testingZoneInner{background:linear-gradient(rgba(176,186,199,.045) 1px,transparent 1px),linear-gradient(90deg,rgba(176,186,199,.045) 1px,transparent 1px),#202226}#app.light .testingZone,#app.light .testingZone *{color:#d6d9df!important}#app.light .testingZone .testingFeedbackField,#app.light .testingZone .testingZoneExplanation,#app.light .testingZone .tempoReadout{color:#9ea5b0!important}#app.light .testingZone .tempoQuad{background:#202226;border-color:#5a606a}#app.light .testingZone .tempoDot{background:transparent;border-color:#c4cad4}#app.light .testingFeedbackForm{background:#2a2a2a;border-color:#4a4f58}#app.light .testingFeedbackField select,#app.light .testingFeedbackField textarea,#app.light .testingRating button{background:#171717;border-color:#4a4f58}#app.light .testingRating button.selected{background:#343434}#app.light .testingFeedbackSubmit{background:#ffffffe0;color:#111!important}#app.light .tempoQuad{background:#ffffff7a;border-color:#fff}#app.light .tempoDot{background:#222;box-shadow:0 0 0 6px #0000000d}.activityHeader{display:flex;align-items:center;gap:14px;margin-bottom:20px}.activityIcon{width:44px;height:44px;border-radius:17px;background:#2e2e2e;display:grid;place-items:center;font-size:20px}.activityTitle{font-size:30px;font-weight:720;letter-spacing:-.035em}.activityRows{display:grid;gap:12px}.activityRow{display:grid;grid-template-columns:54px minmax(0,1fr);align-items:center;gap:14px;background:#292929;border-radius:30px;padding:16px 18px}.activityRowIcon{width:54px;height:54px;border-radius:20px;background:#3a3a3a;display:grid;place-items:center;font-size:20px}.activityRowName{font-size:19px;font-weight:690}.activityRowMeta{font-size:14px;color:#b4b4b4;margin-top:3px}.toast{position:absolute;right:26px;top:26px;z-index:60;background:#efefef;color:#090909;border-radius:999px;padding:11px 16px;font-size:13px;font-weight:680;opacity:0;transform:translateY(-8px);pointer-events:none;transition:opacity .18s ease,transform .18s ease}.toast.show{opacity:1;transform:none}.weekHero{display:block}.weekMetric{font-size:clamp(72px,8vw,112px);font-weight:820;letter-spacing:-.075em;line-height:.82}.weekCopy{font-size:clamp(15px,1.4vw,18px);color:var(--muted);margin-top:12px;line-height:1.2;max-width:none;white-space:nowrap}.weekChips{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:10px;margin-top:24px}.weekChip{background:#292929;border-radius:16px;min-height:76px;padding:12px 14px;display:flex;flex-direction:column;justify-content:space-between;gap:8px}.weekChipTop{display:flex;justify-content:space-between;align-items:center;gap:8px}.weekChipTop strong{font-size:13px;font-weight:680}.weekChipTime{font-size:16px;font-weight:700}.weekChipMeta{font-size:11px;color:#888}.weekTick{font-size:14px;font-weight:800;line-height:1}.weekChip.total{background:#242424}.weekChip.total .weekChipTime{font-size:20px}.workoutSurface{position:relative;overflow:hidden;isolation:isolate}.workoutContent{position:relative;z-index:2}.pixelTrailCanvas{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;z-index:1;pointer-events:none}#app.light .pixelTrailCanvas{opacity:.46}.sessionHead{display:flex;justify-content:space-between;align-items:flex-start;gap:20px}.sessionActions{display:flex;gap:28px;align-items:center;flex-wrap:wrap;justify-content:flex-end}.holdEnd{position:relative;overflow:hidden;min-width:138px;min-height:52px;padding:0 20px;border-radius:999px;border:.4px solid var(--line);background:#171717;text-decoration:none;user-select:none;-webkit-user-select:none;touch-action:none}.holdEndFill{position:absolute;inset:0 auto 0 0;width:0;background:#efefef;pointer-events:none}.holdEndLabel{position:relative;z-index:1;mix-blend-mode:difference;color:#fff}.holdEnd.holding{border-color:#666}#stepLabel{font-size:12px!important;line-height:1.2;letter-spacing:.14em;font-weight:760}.exerciseTitle{font-size:clamp(56px,7vw,94px);line-height:.88;letter-spacing:-.065em;font-weight:790;margin-top:6px;color:#d0ff00}.meta{font-size:18px;color:#969696;margin-top:6px}.progress{height:58px;padding:0;background:transparent;border-radius:22px;display:flex;gap:4px;margin-top:24px;overflow:hidden}.progressSegment{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:0;padding:0;display:block;flex:1;min-width:0;background:#3f3f3f;border-radius:22px;position:relative;overflow:hidden;cursor:default}.progressSegment:after{content:"";position:absolute;inset:0 auto 0 0;width:0;background:#efefef;transition:width .2s linear}.progressSegment.done{background:transparent;opacity:0;pointer-events:none}.progressSegment.done:after{display:none}.progressSegment.active:after{width:var(--segment-progress,0%)}#app.resting .progressSegment:not(.done):not(.active),#app.paused .progressSegment:not(.done):not(.active){background:#fff}#app.light.resting .progressSegment:not(.done):not(.active),#app.light.paused .progressSegment:not(.done):not(.active){background:#fff}.progressSegment.rewindable{cursor:pointer}.progressSegment.rewindable:hover{filter:brightness(1.08)}.progressSegment:focus-visible{outline:2px solid var(--periwinkle);outline-offset:-3px}.workGrid{display:grid;grid-template-columns:minmax(0,2fr) minmax(300px,1fr);gap:20px;margin-top:20px}.timerCard,.movementCard,.nextCard{position:relative;border-radius:36px;border-top:.4px solid var(--line);border-left:.4px solid var(--line);border-right:.4px solid var(--line);border-bottom:.2px solid var(--lineb)}.timerCard{min-height:430px;background:#0d0d0d;overflow:hidden}.fill{position:absolute;inset:0 auto 0 0;width:100%;background:#f2f2f2;transition:width .2s linear}.digits{position:absolute;top:0;right:0;bottom:0;left:0;display:flex;align-items:center;justify-content:center;font-size:clamp(190px,28vw,390px);font-weight:850;letter-spacing:-.11em;color:#fff;mix-blend-mode:difference;font-variant-numeric:tabular-nums}.movementCard{background:#151515;min-height:430px;display:grid;place-items:center;padding:28px}.movementMark{font-size:20px;font-weight:760;color:#d5d5d5;text-align:center}.movementCard{overflow:hidden}.movementRippleCanvas{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;z-index:0}.movementMark{position:relative;z-index:2}.nextCard{background:#1d1d1d;padding:28px;display:flex;justify-content:space-between;align-items:center;gap:20px;min-height:146px}.nextIcon{width:66px;height:66px;border-radius:24px;background:#2d2d2d;display:grid;place-items:center;font-size:26px;flex:0 0 auto}.sectionLabel{font-size:18px;font-weight:400;letter-spacing:-.015em;line-height:1.2;margin:0 0 10px 28px}.moveSection{grid-column:span 12}.moveSection .workoutGallery{width:100%}.nextWrap{margin-top:20px}.nextLabel{font-size:18px;font-weight:760;margin:0 0 10px 28px}.nextCard{background:var(--card);padding:28px;display:flex;justify-content:space-between;align-items:center;gap:28px;min-height:108px;border-radius:36px;border-top:.4px solid var(--line);border-left:.4px solid var(--line);border-right:.4px solid var(--line);border-bottom:.2px solid var(--lineb)}.nextMain{display:flex;align-items:center;gap:18px;min-width:0}.nextIcon{width:54px;height:54px;border-radius:16px;background:#2d2d2d;display:grid;place-items:center;font-size:20px;flex:0 0 auto}.nextName{font-size:24px;font-weight:400;letter-spacing:-.025em;line-height:1.05}.sessionControlRow{display:flex;justify-content:flex-end;gap:28px;align-items:center;margin-top:20px}.nextActions{display:flex;gap:28px;align-items:center;flex:0 0 auto}.skipBtn{min-width:150px;min-height:52px;padding:0 18px;border:1px solid var(--line);background:transparent;color:var(--text);text-decoration:none;font-weight:680}.pause{min-width:150px;min-height:52px;padding:0 18px;font-size:16px}#app.light .nextCard{background:#fffc;border-color:#fff}#app.light .nextIcon{background:#ffe6ef;color:#bd4b7a!important}#app.light .skipBtn{background:transparent;color:#222!important;border-color:#fff}.upcomingList{display:grid;gap:12px;margin-top:12px}.upcomingCard{--future-opacity:1;display:flex;align-items:center;justify-content:space-between;gap:28px;min-height:108px;padding:28px;border-radius:36px;background:var(--card);border-top:.4px solid var(--line);border-left:.4px solid var(--line);border-right:.4px solid var(--line);border-bottom:.2px solid var(--lineb);opacity:var(--future-opacity);transition:opacity .22s ease}.upcomingCard:nth-child(-n+3){--future-opacity:1}.upcomingCard:nth-child(4){--future-opacity:.72}.upcomingCard:nth-child(5){--future-opacity:.48}.upcomingCard:nth-child(6){--future-opacity:.3}.upcomingCard:nth-child(n+7){--future-opacity:.16}.upcomingCard.sessionHidden{--future-opacity:.24!important;filter:saturate(.15)}.upcomingCard.sessionHidden .upcomingName{text-decoration:line-through}.upcomingCard.sessionHidden .upcomingIcon{opacity:.45}.upcomingCard.sessionHidden .upcomingMeta{opacity:.55}.upcomingInfo{display:flex;align-items:center;gap:18px;min-width:0}.upcomingIcon{width:54px;height:54px;flex:0 0 auto;border-radius:16px;background:#2d2d2d;display:grid;place-items:center;font-size:20px}.upcomingName{font-size:24px;font-weight:400;letter-spacing:-.025em;line-height:1.05}.upcomingMeta{font-size:14px;color:var(--muted);margin-top:5px}.skipSessionBtn{flex:0 0 auto;min-height:52px;padding:0 18px;border:1px solid var(--line);background:transparent;color:var(--text);font-weight:680}#app.light .upcomingCard{background:#fffc;border-color:#fff}#app.light .upcomingIcon{background:#ece7ff;color:#715bd0!important}#app.light .skipSessionBtn{border-color:#fff;color:#222!important}@media (max-width:900px){.weekCopy{white-space:normal}.nextCard{align-items:flex-start;flex-direction:column}.sessionControlRow{width:100%}.skipBtn,.pause{flex:1;min-width:0}.upcomingCard{align-items:flex-start;flex-direction:column}.skipSessionBtn{width:100%}}.countdown{display:none;position:fixed;top:0;right:0;bottom:0;left:0;width:125vw;height:125dvh;background:#090909;z-index:300;align-items:center;justify-content:center;flex-direction:column;text-align:center;overflow:hidden}.countdown.active{display:flex}.pixelCanvas{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;display:block;z-index:1}.countdown:before{content:"";position:absolute;top:0;right:0;bottom:0;left:0;background:radial-gradient(circle at center,rgba(174,185,255,.14),transparent 58%);pointer-events:none}.countNum{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);z-index:3}.countNum{font-size:clamp(180px,32vw,430px);font-weight:850;line-height:.75;letter-spacing:-.1em}.modalBackdrop{display:none;position:fixed;top:0;right:0;bottom:0;left:0;width:125vw;height:125dvh;z-index:145;background:#000000a8;padding:35px;box-sizing:border-box;align-items:center;justify-content:center}.modalBackdrop.open{display:flex}.modal{width:min(1480px,100%);height:100%;max-width:1480px;max-height:none;overflow:hidden;background:#202020;border-radius:36px;padding:0;display:flex;flex-direction:column;box-sizing:border-box;border-top:.4px solid var(--line);border-left:.4px solid var(--line);border-right:.4px solid var(--line);border-bottom:.2px solid var(--lineb)}.modalStatic{flex:0 0 auto;padding:28px;background:#202020;border-bottom:.4px solid #343434}.modalHead{display:flex;justify-content:space-between;align-items:flex-start;gap:20px;margin-bottom:16px}.modalHeaderActions{display:flex;gap:28px;align-items:center;flex:0 0 auto}.modalHead h2{font-size:38px;letter-spacing:-.045em;line-height:1;margin:3px 0 0}.editNameRow{display:grid;gap:8px;margin-bottom:14px}.editNameLabel{font-size:13px;color:var(--muted)}.editNameInput{min-height:58px;border-radius:22px;border:.4px solid var(--line);background:#151515;color:var(--text);padding:0 18px;font-size:22px;font-weight:680;letter-spacing:-.02em}#app.light .editNameInput{background:#ffffffe0;color:#222!important;border-color:#fff}.timeTiles{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin-bottom:14px}.timeTile{background:#252525;min-height:186px;padding:20px;display:flex;flex-direction:column;justify-content:space-between}.timeHeader{display:flex;align-items:center;gap:18px}.timeIcon{width:58px;height:58px;border-radius:20px;background:#313131;display:grid;place-items:center;flex:0 0 auto;font-size:22px;font-weight:760}.timeCopy{min-width:0}.timeLabel{font-size:20px;line-height:1;font-weight:760;letter-spacing:-.025em}.timeValue{font-size:20px;line-height:1.15;font-weight:450;letter-spacing:-.02em;color:#cfcfcf;margin-top:7px}.rangeTrack{height:58px;border-radius:22px;background:#151515;overflow:hidden;position:relative;border-top:.4px solid var(--line);border-left:.4px solid var(--line);border-right:.4px solid var(--line);border-bottom:.2px solid var(--lineb)}.rangeFill{position:absolute;inset:0 auto 0 0;background:#efefef;border-radius:22px 0 0 22px}.rangeInput{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;opacity:0;cursor:pointer}.exerciseScroller{min-height:0;overflow-y:auto;padding:4px 20px 22px 28px;border-top:.2px solid #303030;scrollbar-gutter:stable}.exerciseScroller::-webkit-scrollbar{width:8px}.exerciseScroller::-webkit-scrollbar-track{background:transparent}.exerciseScroller::-webkit-scrollbar-thumb{background:#4a4a4a;border-radius:999px}.sectionTitle{font-size:13px;text-transform:uppercase;letter-spacing:.12em;color:#999;margin:18px 0 10px}.moveList{display:grid;gap:10px}.moveRow{display:flex;justify-content:space-between;align-items:center;gap:28px;background:#2a2a2a;border-radius:26px;padding:28px}.moveRow.hidden{opacity:.46}.moveRow.hidden .moveItemName{text-decoration:line-through}.moveItemName{font-size:20px;line-height:1.15;font-weight:720;letter-spacing:-.02em}.moveMeta{font-size:13px;color:#999;margin-top:5px}.hideBtn{border-radius:999px;min-height:40px;padding:0 14px;border:.4px solid var(--line);background:#1b1b1b;color:#fff}.removeBtn{position:relative;overflow:hidden;border-radius:999px;min-height:40px;padding:0 14px;border:.4px solid var(--line);background:#1b1b1b;color:#fff;cursor:pointer}.removeFill{position:absolute;inset:0 auto 0 0;width:0;background:var(--danger);pointer-events:none;transition:width 0s linear}.removeLabel{position:relative;z-index:1}.addRow{display:grid;grid-template-columns:1fr auto;gap:10px;margin-top:18px}.addInput{min-height:52px;border-radius:999px;border:.4px solid var(--line);background:#151515;color:#fff;padding:0 18px;font-size:16px}.addBtn{border-radius:999px;min-height:52px;padding:0 18px;border:0;background:#efefef;color:#090909;font-weight:760}.routineSummary{margin-top:18px;background:#171717;border-radius:26px;padding:16px 18px;color:#cfcfcf}.settingsHeader{display:flex;align-items:center;gap:16px;margin-bottom:30px}.back{width:58px;padding:0;font-size:30px}.settingsTitle{font-size:clamp(46px,5vw,72px);font-weight:790;letter-spacing:-.05em}.tabs.rubberTabs{position:relative;display:inline-flex;gap:0;padding:4px;margin-bottom:22px;border-radius:16px;background:#171717;border:.4px solid var(--line);overflow:hidden}.rubberIndicator{position:absolute;top:4px;left:4px;height:calc(100% - 8px);width:0;border-radius:16px;background:#efefef;transition:left .34s cubic-bezier(.2,1.35,.4,1),width .34s cubic-bezier(.2,1.35,.4,1),transform .18s ease;transform-origin:center;z-index:0}.tabs.rubberTabs .tab{position:relative;z-index:1;min-height:52px;padding:0 20px;border:0;background:transparent;color:var(--text);font-weight:680}.tabs.rubberTabs .tab.active{color:#090909}#app.light .tabs.rubberTabs{background:#ffffffb3;border-color:#fff}#app.light .rubberIndicator{background:#222}#app.light .tabs.rubberTabs .tab.active{color:#fff!important}.settingsPane{display:none}.settingsPane.active{display:block}.integrationList,.toggleList{display:grid;gap:12px}.integration,.toggleRow{display:flex;justify-content:space-between;align-items:center;gap:18px;background:#282828;border-radius:28px;padding:18px 20px}.integration strong,.toggleRow strong{font-size:20px}.status{font-size:13px;color:#999;margin-top:4px}.note{color:#999;line-height:1.5;max-width:860px}.switch{position:relative;width:58px;height:34px;border-radius:999px;background:#444;border:.4px solid var(--line);flex:0 0 auto;cursor:pointer}.switch:after{content:"";position:absolute;width:26px;height:26px;border-radius:999px;top:3px;left:3px;background:#ddd;transition:left .18s ease}.switch.on{background:#eee}.switch.on:after{left:28px;background:#111}.themeChoice{display:flex;gap:12px;flex-wrap:wrap;align-items:center;margin:0}.themeBtn{min-height:40px;padding:0 14px;border:.4px solid var(--line);background:#1b1b1b;color:var(--text);cursor:pointer}.themeBtn.active{background:#efefef;color:#090909}.settingsSelect{min-width:120px;min-height:40px;padding:0 34px 0 12px;border-radius:16px;border:.4px solid var(--line);background:#1b1b1b;color:var(--text);font:inherit}#app.light .settingsSelect{background:#ffffffe0;color:#222;border-color:#fff}.motionControlRow{align-items:center}.motionRangeWrap{display:flex;align-items:center;justify-content:flex-end;gap:12px;min-width:230px}.motionRangeWrap input{width:160px}.motionRangeWrap span{font-size:13px;color:var(--muted);min-width:64px;text-align:right}#app.light .themeBtn.active{background:#222;color:#fff!important}.dangerText{color:#f77}.confirmBackdrop{display:none;position:fixed;top:0;right:0;bottom:0;left:0;z-index:80;padding:28px;background:#000000a8;align-items:center;justify-content:center}.confirmBackdrop.open{display:flex}.confirmCard{width:min(560px,100%);background:var(--card);border-radius:36px;padding:28px;border-top:.4px solid var(--line);border-left:.4px solid var(--line);border-right:.4px solid var(--line);border-bottom:.2px solid var(--lineb)}.confirmTitle{font-size:34px;line-height:1.02;font-weight:760;letter-spacing:-.04em}.confirmActions{display:flex;justify-content:flex-end;align-items:center;gap:28px;margin-top:28px}.holdDelete{position:relative;overflow:hidden;min-width:110px;min-height:52px;padding:0 22px;border:1px solid #8c2e2e;border-radius:16px;background:#311313;color:#fff;font-weight:780;cursor:pointer}.holdDeleteFill{position:absolute;inset:0 auto 0 0;width:0;background:#d53d3d;pointer-events:none}.holdDeleteLabel{position:relative;z-index:1;color:#fff}#app.light .confirmCard{background:#fffffff0;border-color:#fff}#app.light .holdDelete{background:#f5dede;border-color:#e3a0a0;color:#222}.bottomNav{position:sticky;bottom:28px;display:flex;gap:28px;z-index:100;width:max-content;margin:-82px 0 0 28px}.navBtn{width:54px;height:54px;padding:0;border-radius:20px;background:#171717;border:.4px solid var(--line);color:#fff}.navBtn.active{background:#eee;color:#090909}@media (max-width:900px){.weekCopy{white-space:normal}.moveOption,.addMoveCard{flex-basis:180px}.weekHero{display:block}.grid{grid-template-columns:1fr}.moveSection,.activityCard,.weekly,.energySection{grid-column:auto}.workGrid{grid-template-columns:1fr}.timerCard,.movementCard{min-height:320px}.weekChips{grid-template-columns:repeat(4,minmax(0,1fr))}.timeTiles{grid-template-columns:1fr}}@media (max-width:620px){.modal{width:100%;height:100%;max-height:100%}#app{padding:0}.shell{border-radius:0}.view{padding:18px 18px 94px}.card,.timerCard,.movementCard,.nextCard,.modal,.tile{border-radius:30px}.title{font-size:50px}.exerciseTitle{font-size:58px}.timerCard{min-height:280px}.digits{font-size:180px}.weekChips{grid-template-columns:repeat(2,minmax(0,1fr))}.modalBackdrop{padding:12px}.modal{height:100%}.modalStatic{padding:18px}.exerciseScroller{padding:4px 12px 18px 18px}.addRow{grid-template-columns:1fr}}button,.primary,.tab,.back,.navBtn,.themeBtn,.energyBtn,.hideBtn,.addBtn,.removeBtn,.skipBtn,.holdEnd,.switch,.editNameInput,.addInput,.rangeTrack,.progress,.progressSegment{border-radius:16px!important}.card,.panel,.tile,.workoutPanel,.timerCard,.movementCard,.nextCard,.modal{border-radius:36px}.movementCreatorLaunch{display:flex;gap:12px;align-items:center;margin:4px 0 18px}.movementCreatorOpen,.restAddBtn{min-height:44px;padding:0 16px;border-radius:16px;font-weight:680;cursor:pointer}.movementCreatorOpen{border:0;background:#efefef;color:#090909}.restAddBtn{border:.4px solid var(--line);background:#1b1b1b;color:var(--text)}.movementCreator{position:relative;margin:0 0 18px;padding:24px 28px;border-radius:28px;background:#1d1d1d;border-top:.4px solid var(--line);border-left:.4px solid var(--line);border-right:.4px solid var(--line);border-bottom:.2px solid var(--lineb)}.movementCreator[hidden]{display:none}.movementCreatorHead{display:flex;align-items:center;justify-content:space-between;gap:20px;margin-bottom:22px}.movementCreatorHead h3{margin:0;font-size:20px;line-height:1;font-weight:720;letter-spacing:-.025em}.movementCreatorClose{position:static;font-size:13px}.movementCreatorFields{display:grid;grid-template-columns:minmax(0,1.45fr) minmax(0,.85fr);gap:20px 24px}.movementCreatorFields[hidden]{display:none!important}.movementCreatorFields>label{display:grid;gap:8px;min-width:0;font-size:13px;color:var(--text);font-weight:620}.movementTimingRow{grid-column:1/-1;display:grid;grid-template-columns:minmax(300px,440px) minmax(260px,1fr) auto;gap:22px;align-items:end}.durationStack{display:grid;gap:8px;font-size:13px;color:var(--text);font-weight:620}.creatorDurationRow{display:grid;grid-template-columns:minmax(120px,1fr) minmax(130px,1fr);gap:16px;align-items:center}.creatorNumber{width:100%;min-width:0}.creatorUnitSelect{min-height:52px;width:100%;padding:0 14px;border-radius:16px;border:.4px solid var(--line);background:#151515;color:var(--text);font:inherit}.globalTimingToggle{display:flex!important;align-items:center;gap:10px!important;min-height:52px;cursor:pointer;color:var(--text)!important;font-size:13px!important;font-weight:600;white-space:nowrap}.globalTimingToggle input{position:absolute;opacity:0;pointer-events:none}.toggleTrack{position:relative;width:48px;height:28px;border-radius:999px;background:#484848;border:.4px solid var(--line);flex:0 0 auto;transition:background .16s ease}.toggleThumb{position:absolute;width:22px;height:22px;top:2px;left:2px;border-radius:50%;background:#a9a9a9;transition:left .16s ease,background .16s ease}.globalTimingToggle input:checked+.toggleTrack{background:#efefef}.globalTimingToggle input:checked+.toggleTrack .toggleThumb{left:22px;background:#111}.toggleLabel{color:#ddd}.creatorAddButton{min-width:122px;min-height:52px;align-self:end}#app.light .movementCreator{background:#ffffffdb;border-color:#fff}@media (max-width:900px){.movementCreatorFields{grid-template-columns:1fr}.movementTimingRow{grid-column:auto;grid-template-columns:1fr;align-items:stretch}.globalTimingToggle{min-height:44px}.creatorAddButton{width:100%}}.moveRow.restItem{background:#22252a;border-style:dashed}.moveRow.restItem .moveItemName{font-weight:560}.moveKindBadge{display:inline-flex;margin-left:8px;padding:3px 7px;border:1px solid #555b65;border-radius:999px;font-size:10px;color:#9da5b2;vertical-align:middle}#app.light .movementCreator{background:#ffffffd1;border-color:#fff}#app.light .restAddBtn{background:#ffffffb8;color:#222;border-color:#fff}#app.light .toggleTrack{border-color:#fff}@media (max-width:900px){.movementCreatorFields,.movementCreatorFields.restFields{grid-template-columns:1fr;padding-right:0}.movementCreatorClose{position:static;margin-left:auto;display:block;margin-bottom:16px}}.createMoveOptions{margin:0 0 18px;padding:18px;border-radius:24px;background:#242424;border:.4px solid var(--line)}.createMoveOptions[hidden]{display:none}.createOptionLabel{font-size:12px;text-transform:uppercase;letter-spacing:.12em;color:var(--muted);margin-bottom:10px}.createPresetChoice{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}.createPresetBtn{min-height:76px;padding:14px 16px;border-radius:18px;border:1px solid var(--line);background:transparent;color:var(--text);text-align:left;cursor:pointer}.createPresetBtn strong{display:block;font-size:15px}.createPresetBtn span{display:block;color:var(--muted);font-size:12px;margin-top:4px}.createPresetBtn.active{background:#efefef;color:#090909;border-color:#efefef}.createPresetBtn.active span{color:#575757}.createExtras{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px;margin-top:12px}.createExtraToggle{display:flex;align-items:flex-start;gap:10px;padding:12px 14px;border:1px solid var(--line);border-radius:18px;cursor:pointer}.createExtraToggle input{margin-top:3px}.createExtraToggle span{display:grid;gap:3px}.createExtraToggle strong{font-size:14px}.createExtraToggle small{font-size:11px;color:var(--muted)}.creatorUnitSelect{min-height:52px;padding:0 12px;border-radius:16px;border:.4px solid var(--line);background:#171717;color:var(--text);font:inherit}.autoRestSummary{display:inline-flex;align-items:center;gap:8px;margin-left:8px;color:#9da5b2;font-size:11px}#app.light .createMoveOptions{background:#fffc;border-color:#fff}#app.light .createPresetBtn,#app.light .createExtraToggle{border-color:#fff;color:#222}#app.light .creatorUnitSelect{background:#fff;color:#222;border-color:#fff}@media (max-width:900px){.createPresetChoice,.createExtras{grid-template-columns:1fr}}.movementDurationField{display:grid;gap:8px}.movementTimingHead{display:flex;align-items:center;justify-content:space-between;gap:12px;font-size:13px;color:var(--muted)}.globalTimingToggle{display:inline-flex!important;grid-template-columns:none!important;align-items:center;gap:7px!important;color:var(--text)!important;white-space:nowrap}.globalTimingToggle input{margin:0}.globalTimingValue{min-height:52px;display:flex;align-items:center;padding:0 14px;border-radius:16px;border:.4px solid var(--line);background:#1b1b1b;color:var(--muted);font-size:13px}.movementTypeBtn:disabled{opacity:.32;cursor:not-allowed}#app.light .globalTimingValue{background:#ffffffc2;border-color:#fff}.createFlow{display:grid;gap:12px;padding:4px 0 10px}.createFlow[hidden]{display:none}.createStep{border-radius:28px;background:#222;border-top:.4px solid var(--line);border-left:.4px solid var(--line);border-right:.4px solid var(--line);border-bottom:.2px solid var(--lineb);overflow:hidden}.createStepHeader{width:100%;min-height:72px;padding:18px 22px;border:0;background:transparent;color:var(--text);display:flex;align-items:center;justify-content:space-between;gap:24px;text-align:left;cursor:pointer}.createStepHeader:disabled{cursor:not-allowed;opacity:.42}.createStepIdentity{display:flex;align-items:center;gap:12px}.createStepIdentity strong{font-size:18px;letter-spacing:-.02em}.createStepNumber{width:28px;height:28px;border-radius:999px;display:grid;place-items:center;border:.4px solid var(--line);color:var(--muted);font-size:12px}.createStepSummary{min-width:0;color:var(--muted);font-size:13px;text-align:right}.createStepBody{display:none;padding:0 18px 18px}.createStep.active .createStepBody{display:block}.createStep.active .createStepHeader{border-bottom:.4px solid #343434}.createStepSlot{display:grid;gap:14px}.createStepFooter{display:flex;justify-content:flex-end;margin-top:18px}.createStepFooter .primary:disabled{opacity:.35;cursor:not-allowed}.modal.createMode .movementTimingRow{display:none}.modal.createMode .movementCreator{margin-bottom:10px}.modal.createMode .movementCreatorFields{grid-template-columns:minmax(0,1.4fr) minmax(0,1fr)}.modal.createMode .movementCreatorFields.restFields{grid-template-columns:1fr}.modal.createMode .movementCreatorActions{margin-top:18px}.modal.createMode .movementCreatorLaunch{margin-top:0}.modal.createMode .sectionTitle{margin-top:12px}.modal.createMode .modalStatic{padding-bottom:18px}.modal:not(.createMode) .createFlow{display:none!important}#app.light .createStep{background:#ffffffbd;border-color:#fff}#app.light .createStep.active .createStepHeader{border-bottom-color:#fff}#app.resting .movementCard{background:#ffffff0e}#app.resting .movementRippleCanvas{opacity:1}#app.light.resting .movementCard{background:#ffffff38}.nextCard .skipSessionBtn{margin-left:auto}.modal:not(.createMode) .movementCreatorLaunch{margin-top:32px}.testingFeedbackThanks{grid-area:feedback;min-height:220px;padding:24px;border:.4px solid var(--line);border-radius:20px;background:#252525;display:flex;flex-direction:column;justify-content:center;align-items:flex-start;gap:8px}.testingFeedbackThanks[hidden]{display:none}.testingFeedbackThanks strong{font-size:24px;color:#f0f0f0}.testingFeedbackThanks p{margin:0;color:#9ea5b0;font-size:13px}.testingFeedbackThanks a{color:#d6d9df;text-underline-offset:3px}#app.light .testingFeedbackThanks{background:#2a2a2a;border-color:#4a4f58}:host(:fullscreen){overflow:auto;width:100vw;height:100vh}.entitySelect{max-width:min(320px,46vw);text-overflow:ellipsis}.integration .status code{font-size:12px;padding:1px 6px;border-radius:6px;background:#ffffff14}#app.light .integration .status code{background:#0000000f}.integration .pill[disabled]{cursor:default;opacity:.7}#app :focus{outline:none}#app :focus-visible{outline:3px solid #D0FF00;outline-offset:3px}#app .workoutPanel:focus-visible{outline-offset:-3px}#app.light :focus-visible{outline-color:#3458d4}@media (max-width:620px){.bottomNav{margin-left:18px}}.shell:has(.countdown.active) .bottomNav{visibility:hidden}@media (max-width:900px){.workoutPanel:not(.active):not(.addPanel) .panelExpanded{opacity:1;filter:none;pointer-events:auto}}.grid>*{min-width:0}.energyBtn[data-level="1"]{--feeling-color:#6E63A8}.energyBtn[data-level="2"]{--feeling-color:#5878A8}.energyBtn[data-level="3"]{--feeling-color:#6F8B8A}.energyBtn[data-level="4"]{--feeling-color:#5F9B72}.energyBtn[data-level="5"]{--feeling-color:#D5A53E}.energyBtn[data-level="6"]{--feeling-color:#D56B54}.checkinQuestion+.checkinQuestion{margin-top:36px}.checkinStatus{margin-top:22px;font-size:15px;color:var(--muted)}.checkinStatus.done{color:var(--text)}.checkinStatus.done:before{content:"✓  ";font-weight:800}.insightSection{grid-column:span 12;margin-top:20px}.insightCard{display:grid;gap:28px}.insightTop{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:28px;align-items:end}.insightBig{font-size:clamp(56px,6vw,88px);font-weight:820;letter-spacing:-.07em;line-height:.85}.insightStats{display:grid;grid-auto-flow:column;grid-auto-columns:minmax(130px,1fr);gap:10px}.insightBody{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1.3fr);gap:28px;align-items:end}.insightLines{display:grid;gap:12px}.insightLine{font-size:20px;line-height:1.3;letter-spacing:-.015em}.insightLine strong{font-weight:780}.insightLine.muted{font-size:15px;color:var(--muted);line-height:1.45}.dayStrip{display:grid;grid-template-columns:repeat(14,minmax(0,1fr));gap:6px;align-items:end}.day{display:grid;gap:8px;justify-items:center}.dayBars{position:relative;width:100%;height:120px;border-radius:12px;background:#ffffff0a;overflow:hidden}.stepBar,.moveBar{position:absolute;bottom:0;border-radius:10px}.stepBar{left:0;right:0;background:#ffffff1f}.moveBar{left:22%;right:22%;background:#d0ff00}.day.today .dayBars{box-shadow:inset 0 0 0 1px #ffffff59}.dayDots{display:flex;gap:3px}.dayDot{width:8px;height:8px;border-radius:50%}.dayDot.empty{box-shadow:inset 0 0 0 1px #555}.dayLabel{font-size:11px;color:var(--muted)}.day.today .dayLabel{color:var(--text);font-weight:760}.chartLegend{display:flex;gap:18px;flex-wrap:wrap;margin-top:14px;font-size:12px;color:var(--muted)}.chartLegend i{display:inline-block;width:10px;height:10px;border-radius:3px;margin-right:6px;vertical-align:-1px}.lgMove{background:#d0ff00}.lgSteps{background:#ffffff38}.lgDot{background:linear-gradient(90deg,#5f9b72 50%,#d5a53e 50%);border-radius:50%!important}#app.light .dayBars{background:#0000000a}#app.light .stepBar{background:#0000001a}#app.light .moveBar,#app.light .lgMove{background:#9aa8ff}#app.light .lgSteps{background:#00000024}#app.light .day.today .dayBars{box-shadow:inset 0 0 0 1px #00000040}#app.light .dayDot.empty{box-shadow:inset 0 0 0 1px #bbb}@media (max-width:900px){.insightSection{grid-column:auto}.insightTop,.insightBody{grid-template-columns:1fr}.insightStats{grid-auto-flow:row;grid-template-columns:repeat(auto-fit,minmax(120px,1fr))}.dayBars{height:90px}}#app.light .energyLog{background:#fffc}#app.light .energyLog span:last-child{color:#666!important}@media (max-width:900px){.energyScale{grid-template-columns:repeat(3,minmax(0,1fr))}}.checkinBackdrop{z-index:160}.checkinCard{width:min(720px,100%)}.checkinCard .sub{margin-top:10px}.checkinSliders{display:grid;gap:14px;margin-top:24px}.checkinTile{min-height:0;gap:18px}.scaleEnds{display:flex;justify-content:space-between;margin-top:8px;font-size:12px;color:var(--muted)}.rangeTrack:focus-within{outline:3px solid #D0FF00;outline-offset:3px}#app.light .rangeTrack:focus-within{outline-color:#3458d4}.checkinTab{position:fixed;right:0;top:50%;transform:translateY(-50%);z-index:120;display:flex;flex-direction:column;align-items:center;gap:12px;padding:18px 12px;border:.4px solid var(--line);border-right:0;border-radius:16px 0 0 16px!important;background:#171717;color:var(--text);cursor:pointer;transition:padding .18s ease,background .18s ease}.checkinTab:hover{padding-right:16px}.checkinTabIcon{font-size:20px;line-height:1}.checkinTabLabel{writing-mode:vertical-rl;transform:rotate(180deg);font-size:13px;font-weight:680;letter-spacing:.02em}.checkinBadge{position:absolute;top:10px;left:10px;width:10px;height:10px;border-radius:50%;background:#d0ff00;box-shadow:0 0 0 3px #171717,0 0 12px #d0ff00b3;animation:checkinPulse 1.8s ease-in-out infinite}.checkinTab.due{background:#232323}@keyframes checkinPulse{50%{box-shadow:0 0 0 3px #171717,0 0 2px #d0ff0033}}@media (prefers-reduced-motion: reduce){.checkinBadge{animation:none}}.shell:has(#workoutView.active) .checkinTab,.shell:has(.countdown.active) .checkinTab{display:none}#app.light .checkinTab{background:#ffffffe0;border-color:#fff}#app.light .checkinBadge{background:#3458d4;box-shadow:0 0 0 3px #fff,0 0 12px #3458d480}.feelSection{grid-column:span 12;margin-top:20px}.feelCard{display:grid;gap:24px}.feelTop{display:grid;grid-template-columns:minmax(0,1fr) minmax(260px,420px);gap:28px;align-items:end}.feelHeadline{font-size:clamp(56px,6vw,88px);font-weight:820;letter-spacing:-.07em;line-height:.85}.feelTotals{display:grid;gap:12px}.feelCount{font-size:13px;color:var(--muted)}.feelDays{display:grid;grid-template-columns:repeat(7,minmax(0,1fr));gap:10px}.feelDay{min-height:0;gap:12px}.feelDay.future{opacity:.4}.feelDay.today{box-shadow:inset 0 0 0 1px #ffffff4d}#app.light .feelDay.today{box-shadow:inset 0 0 0 1px #0003}.feelDots{font-size:8px;letter-spacing:2px;color:var(--muted)}.feelMeter{display:grid;gap:6px}.feelMeterTop{display:flex;justify-content:space-between;gap:8px;font-size:11px;color:var(--muted)}.feelMeterTop span:last-child{color:var(--text);font-weight:680}.feelTrack{height:8px;border-radius:999px;background:#ffffff14;overflow:hidden}.feelTrack span{display:block;height:100%;border-radius:999px}#app.light .feelTrack{background:#00000014}.feelTotals .feelMeterTop{font-size:13px}.feelTotals .feelTrack{height:12px}@media (max-width:900px){.feelSection{grid-column:auto}.feelTop{grid-template-columns:1fr}.feelDays{grid-template-columns:repeat(4,minmax(0,1fr))}}@media (max-width:620px){.feelDays{grid-template-columns:repeat(2,minmax(0,1fr))}}.checkinTile .timeHeader{align-items:center}.checkinTab:not(.due){opacity:.6}.checkinTab:not(.due):hover{opacity:1}.activityCard{grid-column:span 3}.weekly{grid-column:span 9;cursor:pointer;transition:border-color .18s ease,background .18s ease}.weekly:hover{border-color:#5a5a5a}#app.light .weekly:hover{border-color:#fff;background:#ffffffeb}.weeklyExpand{position:absolute;top:24px;right:28px;font-size:20px;color:var(--muted);transition:transform .18s ease}.weekly:hover .weeklyExpand{transform:scale(1.15)}.weekChips{grid-template-columns:repeat(8,minmax(0,1fr))}.weekChipBottom{display:flex;justify-content:space-between;align-items:flex-end;gap:6px}.face{width:26px;height:26px;flex:0 0 auto;display:block}.face.empty circle{fill:none;stroke:#4a4a4a;stroke-width:1.2;stroke-dasharray:2.5 2.5}#app.light .face.empty circle{stroke:#c4c4c4}.weekChip.total .face{width:30px;height:30px}.insightBackdrop{z-index:155}.insightModalCard{width:min(1240px,100%);max-height:calc(125dvh - 70px);overflow:auto}.insightModalHead{display:flex;justify-content:space-between;align-items:center;margin-bottom:12px}.insightModalHead .sectionLabel{margin:0}.insightModalCard .dayBars{height:200px}.insightBody.chartOnly{grid-template-columns:1fr}.dayFace .face{width:22px;height:22px}.chartLegend span{display:inline-flex;align-items:center}.chartLegend .face{width:12px;height:12px;margin-right:6px}@media (max-width:1200px){.activityCard{grid-column:span 4}.weekly{grid-column:span 8}.weekChips{grid-template-columns:repeat(4,minmax(0,1fr))}}@media (max-width:900px){.activityCard,.weekly{grid-column:auto}.insightModalCard .dayBars{height:110px}.dayFace .face{width:16px;height:16px}}.weekChipTime{white-space:nowrap}.weekChip.total .weekChipTime{font-size:16px}.insightCard{grid-column:span 9;align-content:start}.insightEyebrow{margin-bottom:-14px}.insightStats{grid-auto-columns:minmax(110px,1fr)}.insightCard .dayBars{height:150px}@media (max-width:1200px){.insightCard{grid-column:span 8}.insightTop{grid-template-columns:1fr}}@media (max-width:900px){.insightCard{grid-column:auto}.insightCard .dayBars{height:100px}}.helpBackdrop{z-index:170}.helpCard .helpSteps,.helpCard .helpNote{max-width:860px}.helpHead{display:flex;justify-content:space-between;align-items:flex-start;gap:20px}.helpCard .note{margin:0}.helpSteps{margin:24px 0 0;padding:0;list-style:none;counter-reset:help;display:grid;gap:12px}.helpSteps li{counter-increment:help;display:grid;gap:6px;position:relative;padding:18px 20px 18px 66px;border-radius:26px;background:#252525;font-size:14px;line-height:1.45;color:var(--muted)}.helpSteps li:before{content:counter(help);position:absolute;left:18px;top:16px;width:32px;height:32px;border-radius:12px;display:grid;place-items:center;background:#313131;color:var(--text);font-weight:760}.helpSteps strong{font-size:17px;color:var(--text);font-weight:720;letter-spacing:-.01em}.helpSteps b,.helpNote b{color:var(--text);font-weight:680}.helpAction{display:block;padding:10px 12px;border-radius:14px;background:#1b1b1b;color:var(--text)}.helpCard code{font-size:12px;padding:1px 6px;border-radius:6px;background:#ffffff14}.helpNote{display:grid;gap:4px;margin-top:12px;padding:16px 20px;border-radius:22px;border:.4px solid var(--line);font-size:14px;line-height:1.45;color:var(--muted)}.helpNote strong{color:var(--text);font-size:15px}#app.light .helpSteps li{background:#fffc}#app.light .helpSteps li:before{background:#ece7ff}#app.light .helpAction{background:#eeeded}#app.light .helpCard code{background:#0000000f}#app.light .helpNote{border-color:#fff}', ga = `<main id="app"><div class="shell">
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
    <button class="tab" data-pane="checkinPane">Check-in</button>
    <button class="tab" data-pane="appearancePane">Appearance</button>
    <button class="tab" data-pane="helpPane">Help</button>
  </div>

  <div class="settingsPane active" id="integrationsPane">
    <section class="card">
      <h2 style="font-size:34px;margin:0 0 12px">Connected sources</h2>
      <p class="note">Move Assistant can work on its own. Pick your step sensor so general movement counts alongside your moves.</p>
      <div class="integrationList">
        <div class="integration"><div><strong>Steps</strong><div class="status" id="stepsStatus" data-empty="Your phone's step sensor from the Companion app">Your phone's step sensor from the Companion app</div></div><select class="settingsSelect entitySelect" id="stepsEntity" data-kind="steps" aria-label="Steps sensor"></select></div>
        <div class="integration"><div><strong>Apple Health</strong><div class="status">Send steps and other Health data from your iPhone</div></div><button class="pill" id="healthHelpOpen" type="button">Help</button></div>
        <div class="integration"><div><strong>Home Assistant</strong><div class="status">Moves send a <code>move_assistant</code> event on start, each step, rest, pause and finish — use it in automations for lights, sound and displays</div></div><button class="pill" type="button" disabled>Connected</button></div>
      </div>
    </section>
  </div>

  <div class="settingsPane" id="dataPane">
    <section class="card">
      <h2 style="font-size:34px;margin:0 0 12px">What you see</h2>
      <p class="note">Choose what appears in Move Assistant. Turning these off does not affect move playback.</p>
      <div class="toggleList">
        <div class="toggleRow"><div><strong>How you've felt</strong><div class="status">Your mood and energy over the week</div></div><button class="switch on" data-toggle="feel"></button></div>
        <div class="toggleRow"><div><strong>Steps</strong><div class="status">Daily step count</div></div><button class="switch on" data-toggle="steps"></button></div>
        <div class="toggleRow"><div><strong>Mood</strong><div class="status">Latest mood in the Activity card</div></div><button class="switch on" data-toggle="mood"></button></div>
        <div class="toggleRow"><div><strong>Energy</strong><div class="status">Latest energy in the Activity card</div></div><button class="switch on" data-toggle="energyLevel"></button></div>
        <div class="toggleRow"><div><strong>Reset stats</strong><div class="status">Clears moves done and check-ins. Your moves and settings stay.</div></div><button class="holdDelete" id="resetStats" type="button" aria-label="Hold to reset stats"><span class="holdDeleteFill" id="resetStatsFill"></span><span class="holdDeleteLabel">Hold to reset</span></button></div>
      </div>
    </section>
  </div>

  <div class="settingsPane" id="checkinPane">
    <section class="card">
      <h2 style="font-size:34px;margin:0 0 12px">Check-in</h2>
      <p class="note">Twice a day, Move Assistant asks how your mood and energy are. When it's time, the check-in tab on the right shows a dot. You can only check in when one is due.</p>
      <div class="toggleList">
        <div class="toggleRow"><div><strong>Morning check-in</strong><div class="status">When the morning check-in becomes due</div></div><input class="settingsSelect timeInput" id="morningTime" type="time" value="08:00" aria-label="Morning check-in time"></div>
        <div class="toggleRow"><div><strong>Evening check-in</strong><div class="status">When the evening check-in becomes due</div></div><input class="settingsSelect timeInput" id="eveningTime" type="time" value="19:00" aria-label="Evening check-in time"></div>
        <div class="toggleRow"><div><strong>Open automatically</strong><div class="status">Show the check-in window when it's due, instead of just the dot</div></div><button class="switch on" id="checkinAutoOpen" aria-label="Open check-in automatically"></button></div>
      </div>
    </section>
  </div>

  <div class="settingsPane" id="helpPane">
    <section class="card helpCard">
      <h2 style="font-size:34px;margin:0 0 12px">Connect Apple Health</h2>
    <p class="note">Apple Health can't talk to Home Assistant directly. Your iPhone sends the numbers using the Shortcuts app and the Home Assistant Companion app. Set it up once and it runs by itself.</p>

    <ol class="helpSteps">
      <li>
        <strong>Make a place for the number in Home Assistant</strong>
        <span>Settings → Devices &amp; services → Helpers → Create helper → <b>Number</b>.</span>
        <span>Name it <b>Health steps</b>. Minimum 0, maximum 100000, step 1, unit <b>steps</b>, display mode <b>Input field</b>.</span>
      </li>
      <li>
        <strong>Build the shortcut on your iPhone</strong>
        <span>Open <b>Shortcuts</b> → Automation → <b>+</b> → <b>App</b> → choose Home Assistant → <b>Is opened</b> → <b>Run immediately</b>.</span>
        <span>Add these actions in order:</span>
        <span class="helpAction">Find Health Samples — Type <b>Steps</b>, Start date <b>is today</b>, Group by <b>Day</b>, Limit 1</span>
        <span class="helpAction">Get Details of Health Samples — <b>Value</b></span>
        <span class="helpAction">Home Assistant → <b>Call service</b> (or <b>Perform action</b>) — <code>input_number.set_value</code>, entity <code>input_number.health_steps</code>, value = the step count from above</span>
      </li>
      <li>
        <strong>Keep it fresh during the day</strong>
        <span>Add a few more automations with the same actions using <b>Time of day</b> (for example 10:00, 14:00, 18:00, 22:00), also set to <b>Run immediately</b>.</span>
      </li>
      <li>
        <strong>Pick it in Move Assistant</strong>
        <span>Settings → Integrations → Steps → <b>Health steps</b>.</span>
      </li>
    </ol>

    <div class="helpNote">
      <strong>Other Health data</strong>
      <span>Use the same recipe for anything in Health, for example exercise minutes, active energy or stand hours. Make one Number helper per value, then change the <b>Type</b> in Find Health Samples.</span>
    </div>
    <div class="helpNote">
      <strong>Check the number</strong>
      <span>Run the shortcut once by hand and compare it with the Health app. <b>Group by Day</b> stops your iPhone and Apple Watch steps being counted twice.</span>
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
  <span class="checkinTabIcon" aria-hidden="true">☺</span>
  <span class="checkinTabLabel">Check-in</span>
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
function ma(h, g) {
  const i = (e) => h.getElementById(e), B = i("workoutView"), E = i("workoutNameInput");
  let K = !0;
  const cn = i("homeClock");
  function pn() {
    cn && (cn.textContent = new Intl.DateTimeFormat(void 0, { hour: "2-digit", minute: "2-digit" }).format(/* @__PURE__ */ new Date()));
  }
  pn(), setInterval(pn, 15e3);
  const un = i("createFlow"), li = i("createMovementsSlot"), di = i("createTimingSlot"), gn = i("createFinishSlot"), ci = i("movementStepSummary"), pi = i("timingStepSummary"), ui = i("finishStepSummary"), Bt = i("continueToTiming"), gi = i("continueToFinish"), mi = i("finishMoveButton");
  let At = !1, ct = [];
  function hi(e) {
    !e || ct.some((t) => t.node === e) || ct.push({ node: e, parent: e.parentNode, next: e.nextSibling });
  }
  function pt(e, t) {
    e && (hi(e), t.appendChild(e));
  }
  function fi() {
    [...ct].reverse().forEach(({ node: e, parent: t, next: n }) => {
      t && (n && n.parentNode === t ? t.insertBefore(e, n) : t.appendChild(e));
    }), ct = [];
  }
  function ke(e) {
    h.querySelectorAll(".createStep").forEach((t) => {
      t.classList.toggle("active", t.dataset.createStep === e);
    }), e === "timing" && (At = !0), se();
  }
  function se() {
    var u, f;
    if (!A) return;
    w[S];
    const e = N.filter((x) => !x.hidden), t = e.filter((x) => x.kind !== "rest").length, n = e.filter((x) => x.kind === "rest").length;
    ci.textContent = t ? t + " movement" + (t === 1 ? "" : "s") + (n ? " · " + n + " rest" + (n === 1 ? "" : "s") : "") : "No movements yet";
    const a = t > 0, o = h.querySelector('[data-open-step="timing"]'), s = h.querySelector('[data-open-step="finish"]');
    o.disabled = !a, Bt.disabled = !a, pi.textContent = a ? Me(M.value) + " · " + Z(k.value) + " movement · " + Z(C.value) + " rest" : "Add a movement first", s.disabled = !(a && At);
    const r = ((E == null ? void 0 : E.value) || "").trim(), d = [];
    (u = i("includeWarmupPreset")) != null && u.checked && d.push("warm-up"), (f = i("includeCooldownPreset")) != null && f.checked && d.push("cooldown"), ui.textContent = r ? r + (d.length ? " · " + d.join(" + ") : "") : d.length ? d.join(" + ") : "Name and optional extras";
  }
  function vi() {
    var c, y, F;
    un.hidden = !1, At = !1;
    const e = h.querySelector(".editNameRow"), t = i("createMoveOptions"), n = h.querySelector(".timeTiles"), a = i("routineSummaryModal"), o = h.querySelector(".tempoRevealRow"), s = i("tempoExperiment"), r = (c = i("warmupList")) == null ? void 0 : c.closest("section"), d = i("movementCreatorLaunch"), u = i("movementCreator"), f = (y = i("strengthList")) == null ? void 0 : y.closest("section"), x = (F = i("cooldownList")) == null ? void 0 : F.closest("section");
    [r, d, u, f, x].forEach((H) => pt(H, li)), [t, n, a, o, s].forEach((H) => pt(H, di)), pt(e, gn);
    const l = t == null ? void 0 : t.querySelector(".createExtras");
    l && pt(l, gn), ke("movements"), se();
  }
  function bi() {
    fi(), un.hidden = !0, h.querySelectorAll(".createStep").forEach((e) => e.classList.remove("active"));
  }
  h.querySelectorAll("[data-open-step]").forEach((e) => e.addEventListener("click", () => {
    e.disabled || ke(e.dataset.openStep);
  })), Bt.addEventListener("click", () => {
    Bt.disabled || ke("timing");
  }), gi.addEventListener("click", () => ke("finish")), mi.addEventListener("click", () => i("saveWorkoutEdit").click());
  const Se = { home: i("homeView"), workout: i("workoutView"), settings: i("settingsView") }, mn = i("homeNav"), hn = i("settingsNav");
  function zt(e) {
    Object.entries(Se).forEach(([t, n]) => n.classList.toggle("active", t === e)), mn.classList.toggle("active", e === "home"), hn.classList.toggle("active", e === "settings"), e === "home" && setTimeout(Ut, 400), e === "settings" && requestAnimationFrame(() => lt(h.querySelector(".tab.active"), !1));
  }
  const M = i("totalTime"), k = i("workTime"), C = i("restTime"), fn = i("totalOut"), vn = i("workOut"), bn = i("restOut"), xi = i("totalFill"), yi = i("workFill"), wi = i("restFill"), ki = i("routineSummaryModal"), Nt = [
    { id: "standing-reach", name: "Standing reach", group: "Warm-up", kind: "warmup", hidden: !1 },
    { id: "arm-circles", name: "Arm circles", group: "Warm-up", kind: "warmup", hidden: !1 },
    { id: "hip-hinge", name: "Hip hinge drill", group: "Warm-up", kind: "warmup", hidden: !1 }
  ];
  let ge = Nt.map((e) => ({ ...e })), N = [
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
  const Pt = [
    { id: "hip-flexor", name: "Hip flexor stretch", group: "Cooldown", kind: "cooldown", hidden: !1 },
    { id: "chest-opener", name: "Chest opener", group: "Cooldown", kind: "cooldown", hidden: !1 },
    { id: "hamstring", name: "Hamstring stretch", group: "Cooldown", kind: "cooldown", hidden: !1 },
    { id: "slow-breathing", name: "Slow breathing", group: "Cooldown", kind: "cooldown", hidden: !1 }
  ];
  let me = Pt.map((e) => ({ ...e }));
  const Si = {
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
  }, v = xn(g.data), w = v.profiles;
  let S = w[v.selected] ? v.selected : v.order.find((e) => w[e]) || "kettlebell";
  function xn(e) {
    const t = e && typeof e == "object" ? JSON.parse(JSON.stringify(e)) : {}, n = t.profiles && Object.keys(t.profiles).length ? t.profiles : JSON.parse(JSON.stringify(Si)), a = (Array.isArray(t.order) ? t.order : Object.keys(n)).filter((o) => n[o]);
    return Object.keys(n).forEach((o) => {
      a.includes(o) || a.push(o);
    }), {
      v: 1,
      profiles: n,
      order: a,
      selected: t.selected || a[0],
      history: Array.isArray(t.history) ? t.history : [],
      checkins: (Array.isArray(t.checkins) ? t.checkins : Ci(t.energy)).map(yn),
      settings: { ...t.settings || {} }
    };
  }
  function Ci(e) {
    if (!Array.isArray(e)) return [];
    const t = ["Drained", "Low", "Okay", "Good", "Energised", "Great"], n = [];
    return e.forEach((a) => {
      const o = new Date(a.at);
      if (isNaN(o)) return;
      const s = o.getFullYear() + "-" + String(o.getMonth() + 1).padStart(2, "0") + "-" + String(o.getDate()).padStart(2, "0"), r = o.getHours() < 14 ? "morning" : "evening";
      if (n.some((u) => u.date === s && u.slot === r)) return;
      const d = t.indexOf(a.value) + 1;
      d > 0 && n.push({ date: s, slot: r, mood: null, energy: d, at: a.at });
    }), n;
  }
  function yn(e) {
    if (e.scale === 100) return e;
    const t = (n) => n == null ? null : Math.round((Number(n) - 1) / 5 * 100);
    return { ...e, mood: t(e.mood), energy: t(e.energy), scale: 100 };
  }
  function Ce() {
    A || (v.selected = S, v.order = v.order.filter((e) => w[e] && e !== he), g.save(v));
  }
  function D() {
    return v.settings;
  }
  function ee(e) {
    const t = w[e];
    if (!t) return;
    S = e;
    const n = i("workoutNameInput");
    n && (n.value = t.name), M.value = t.total, k.value = t.work, C.value = t.rest, t.customSequence ? (ge = [], me = [], N = (t.sequence || []).map((a) => ({ ...a })), _t(t.preset || "movement", !1)) : (M.min = 10, M.max = 40, M.step = 5, k.min = 20, k.max = 60, k.step = 5, C.min = 5, C.max = 30, C.step = 5, ge = (t.warmup || Nt).map((a) => ({ ...a })), me = (t.cooldown || Pt).map((a) => ({ ...a })), N = t.strength.map(([a, o, s, r = !1]) => ({ id: a, name: o, group: s, kind: "work", hidden: !!r }))), h.querySelectorAll(".workoutPanel[data-workout]").forEach((a) => a.classList.toggle("active", a.dataset.workout === e)), W();
  }
  function Ti(e, t, n) {
    const a = e.getBoundingClientRect(), o = a.width / 2, s = a.height / 2, r = t - o, d = n - s;
    let u = 1 / 0, f = 1 / 0;
    r !== 0 && (u = o / Math.abs(r)), d !== 0 && (f = s / Math.abs(d));
    const x = Math.min(Math.max(1 / Math.min(u, f), 0), 1);
    let l = Math.atan2(d, r) * (180 / Math.PI) + 90;
    return l < 0 && (l += 360), { edge: x, angle: l };
  }
  function It(e, t, n = !1) {
    const a = e.getBoundingClientRect(), o = t.clientX - a.left, s = t.clientY - a.top, { edge: r, angle: d } = Ti(e, o, s), u = n ? 100 : r * 100;
    e.style.setProperty("--edge-proximity", u.toFixed(3)), e.style.setProperty("--cursor-angle", d.toFixed(3) + "deg"), e.classList.toggle("borderGlowActive", n || u >= 30);
  }
  function wn(e) {
    e.addEventListener("pointermove", (n) => It(e, n, !1)), e.addEventListener("pointerenter", (n) => It(e, n, !1)), e.addEventListener("pointerdown", (n) => It(e, n, !0));
    const t = () => {
      e.classList.remove("borderGlowActive"), e.style.setProperty("--edge-proximity", "0");
    };
    e.addEventListener("pointerleave", t), e.addEventListener("pointerup", t), e.addEventListener("pointercancel", t);
  }
  wn(i("addWorkoutPanel"));
  let A = !1, he = null;
  function L(e) {
    return String(e ?? "").replace(/[&<>"']/g, (t) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[t]);
  }
  function Mi(e) {
    return e.summary ? e.summary : e.customSequence ? Me(e.total) + " · custom move" : Me(e.total) + " · " + Z(e.work) + " / " + Z(e.rest) + " · warm-up + cooldown";
  }
  function Dt(e, t) {
    var r;
    const n = document.createElement("article");
    n.className = "workoutPanel", n.dataset.workout = e, n.tabIndex = 0;
    const a = t.eyebrow === void 0 ? "Movement" : t.eyebrow, o = t.activityCount ?? (((r = t.sequence) == null ? void 0 : r.length) || 0);
    n.innerHTML = '<span class="edgeLight" aria-hidden="true"></span><div class="panelExpanded"><div><div class="workoutPanelTop"><div>' + (a ? '<div class="eyebrow">' + L(a) + "</div>" : "") + '<div class="workoutName">' + L(t.name) + '</div><div class="sub">' + L(Mi(t)) + '</div><span class="sourceTag">' + L(t.source || "Custom move") + '</span></div><button class="pill seeWorkoutBtn" type="button">Edit</button></div></div><div class="workoutFooter"><div><strong class="activityCount">' + (o ? o + " activities" : "—") + '</strong></div><div class="workoutPanelActions"><button class="primary startWorkoutBtn" type="button">Start move</button></div></div></div><div class="panelCollapsed"><div class="panelCollapsedText">' + L(t.name) + "</div></div>";
    const s = i("addWorkoutPanel");
    return i("workoutGallery").insertBefore(n, s), wn(n), n.addEventListener("click", (d) => {
      d.target.closest("button") || ee(e);
    }), n.addEventListener("keydown", (d) => {
      (d.key === "Enter" || d.key === " ") && !d.target.closest("button") && (d.preventDefault(), ee(e));
    }), n.querySelector(".seeWorkoutBtn").addEventListener("click", (d) => {
      d.stopPropagation(), ee(e), An(!1);
    }), n.querySelector(".startWorkoutBtn").addEventListener("click", (d) => {
      d.stopPropagation(), ee(e), $i();
    }), n;
  }
  function kn() {
    h.querySelectorAll(".workoutPanel[data-workout]").forEach((e) => e.remove()), v.order.forEach((e) => {
      w[e] && Dt(e, w[e]);
    }), h.querySelectorAll(".workoutPanel[data-workout]").forEach((e) => e.classList.toggle("active", e.dataset.workout === S));
  }
  kn(), i("addWorkoutPanel").addEventListener("keydown", (e) => {
    (e.key === "Enter" || e.key === " ") && (e.preventDefault(), i("addWorkoutPanel").click());
  }), i("addWorkoutPanel").addEventListener("click", () => {
    A = !0, he = "custom-" + Date.now(), w[he] = {
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
    }, ee(he), An(!0);
  });
  let m = [], b = 0, U = 0, ut = 1, _ = !1, P = null, gt = null, I = !1, Te = v.settings.upcomingCount ?? "all";
  function Ht(e, t, n) {
    return (Number(e) - t) / (n - t) * 100;
  }
  function Z(e) {
    const t = Math.max(0, Number(e) || 0);
    return t >= 3600 && t % 3600 === 0 ? t / 3600 + " hr" : t >= 60 && t % 60 === 0 ? t / 60 + " min" : t >= 60 ? Math.round(t / 60) + " min" : Math.round(t) + " sec";
  }
  function Me(e) {
    const t = Math.max(0, Number(e) || 0);
    return t >= 60 && t % 60 === 0 ? t / 60 + " hr" : t >= 60 ? Math.floor(t / 60) + " hr " + t % 60 + " min" : t + " min";
  }
  function mt() {
    xi.style.width = Ht(M.value, Number(M.min), Number(M.max)) + "%", yi.style.width = Ht(k.value, Number(k.min), Number(k.max)) + "%", wi.style.width = Ht(C.value, Number(C.min), Number(C.max)) + "%", fn.textContent = Me(M.value), vn.textContent = Z(k.value), bn.textContent = Z(C.value);
  }
  function Ot(e) {
    return e.filter((t) => !t.hidden);
  }
  function Sn(e, t) {
    const n = Math.max(0, Number(e) || 0);
    return Math.round(t === "hour" ? n * 3600 : t === "min" ? n * 60 : n);
  }
  function _t(e, t = !0) {
    h.querySelectorAll(".createPresetBtn").forEach((a) => a.classList.toggle("active", a.dataset.movePreset === e));
    const n = w[S];
    n && (n.preset = e), e === "work" ? (M.min = 30, M.max = 480, M.step = 30, k.min = 300, k.max = 7200, k.step = 300, C.min = 60, C.max = 1800, C.step = 60, t && (M.value = 60, k.value = 1500, C.value = 300), i("addMovementUnit").value = "min", i("addMovementDuration").value = 25, i("addRestUnit").value = "min", i("addRestDuration").value = 5) : (M.min = 10, M.max = 40, M.step = 5, k.min = 20, k.max = 60, k.step = 5, C.min = 5, C.max = 30, C.step = 5, t && (M.value = 20, k.value = 45, C.value = 15), i("addMovementUnit").value = "sec", i("addMovementDuration").value = 45, i("addRestUnit").value = "sec", i("addRestDuration").value = 30), mt();
  }
  function Cn() {
    const e = w[S];
    if (e != null && e.customSequence) {
      if (N = N.filter((t) => !t.presetRole), i("includeWarmupPreset").checked ? (N = [...Nt.map((n, a) => ({ ...n, id: "preset-warm-" + a + "-" + Date.now(), kind: "work", duration: Number(k.value), presetRole: "warmup" })), ...N], e.includeWarmup = !0) : e.includeWarmup = !1, i("includeCooldownPreset").checked) {
        const t = Pt.map((n, a) => ({ ...n, id: "preset-cool-" + a + "-" + Date.now(), kind: "work", duration: Number(k.value), presetRole: "cooldown" }));
        N = [...N, ...t], e.includeCooldown = !0;
      } else e.includeCooldown = !1;
      W();
    }
  }
  function Li() {
    const e = i("upcomingCountSetting");
    if (!e) return;
    const t = Math.max(1, m.length - 1), n = Te;
    e.innerHTML = "";
    for (let s = 1; s <= t; s++) {
      const r = document.createElement("option");
      r.value = String(s), r.textContent = String(s), e.appendChild(r);
    }
    const a = document.createElement("option");
    a.value = "all", a.textContent = "All", e.appendChild(a);
    const o = n === "all" ? "all" : String(Math.min(Number(n) || 1, t));
    e.value = o, Te = o === "all" ? "all" : Number(o);
  }
  function W() {
    const e = Number(M.value) * 60, t = Number(k.value), n = Number(C.value), a = Ot(ge), o = Ot(N), s = Ot(me), r = w[S];
    if (r && (r.total = Number(M.value), r.work = t, r.rest = n, r.customSequence ? r.sequence = N.map((l) => ({ ...l })) : (r.strength = N.map((l) => [l.id, l.name, l.group, !!l.hidden]), r.warmup = ge.map((l) => ({ ...l })), r.cooldown = me.map((l) => ({ ...l })))), r != null && r.customSequence) {
      const l = o.map((c) => {
        if (c.kind === "rest") {
          const F = c.useGlobalTiming === !0 ? n : Number(c.duration) || n;
          return { ...c, duration: F, rest: 0 };
        }
        const y = c.useGlobalTiming === !1 && Number(c.duration) || t;
        return { ...c, duration: y, rest: 0 };
      });
      r.autoRest && Number(r.autoRestDuration) > 0 ? (m = [], l.forEach((c, y) => {
        m.push(c);
        const F = l[y + 1];
        c.kind !== "rest" && F && F.kind !== "rest" && m.push({
          id: "auto-rest-" + y,
          name: "Rest",
          group: "Rest",
          kind: "rest",
          hidden: !1,
          duration: Number(r.autoRestDuration),
          rest: 0,
          autoGenerated: !0
        });
      })) : m = l;
    } else {
      const l = a.length + s.length;
      let c = o.length ? 1 : 0, y = 1 / 0;
      const F = 80;
      for (let T = o.length ? 1 : 0; T <= F; T++) {
        const z = l + T;
        if (z <= 0) continue;
        const q = z * t + Math.max(0, z - 1) * n, p = e - q, R = t + p;
        R < 15 || R > 120 || Math.abs(p) < Math.abs(y) && (y = p, c = T);
      }
      if (y === 1 / 0) {
        const T = Math.max(l + (o.length ? 1 : 0), Math.round((e + n) / (t + n)));
        c = Math.max(o.length ? 1 : 0, T - l);
      }
      const H = [];
      for (let T = 0; T < c; T++) {
        const z = o[T % Math.max(1, o.length)];
        z && H.push({ ...z, duration: t, rest: n });
      }
      if (m = [
        ...a.map((T) => ({ ...T, duration: t, rest: n })),
        ...H,
        ...s.map((T) => ({ ...T, duration: t, rest: n }))
      ], m.length) {
        const T = m.reduce((q, p) => q + p.duration, 0) + Math.max(0, m.length - 1) * n, z = e - T;
        m[m.length - 1].duration = Math.max(15, m[m.length - 1].duration + z), m.forEach((q, p) => q.rest = p < m.length - 1 ? n : 0);
      }
    }
    mt();
    const d = m.reduce((l, c) => l + c.duration + c.rest, 0), u = Math.round(d / 60), f = r != null && r.customSequence ? Me(u) + " · " + m.length + " items" : Me(u) + " · " + Z(t) + " / " + Z(n) + " · warm-up + cooldown";
    r && (r.summary = f, r.activityCount = m.length);
    const x = h.querySelector(".workoutPanel.active .sub");
    x && (x.textContent = f), ki.textContent = f, h.querySelectorAll(".workoutPanel.active .activityCount").forEach((l) => l.textContent = m.length + " activities"), mt(), Ei(), Wt(), Le(), Li(), A && se(), Se.workout.classList.contains("active") && !P && jn();
  }
  function qt(e, t) {
    const n = i(t);
    n.innerHTML = "", e.forEach((a) => {
      const o = document.createElement("div");
      o.className = "moveRow" + (a.hidden ? " hidden" : "") + (a.kind === "rest" ? " restItem" : "");
      const r = " · " + (a.kind === "rest" ? a.useGlobalTiming === !0 ? "Global timing" : Z(a.duration) : a.useGlobalTiming === !1 ? Z(a.duration) : "Global timing"), d = a.kind === "rest" ? '<span class="moveKindBadge">Rest</span>' : "";
      o.innerHTML = '<div><div class="moveItemName">' + a.name + d + '</div><div class="moveMeta">' + a.group + r + '</div></div><div style="display:flex;gap:8px"><button class="hideBtn">' + (a.hidden ? "Show" : "Hide") + '</button><button class="removeBtn" type="button" aria-label="Hold to remove ' + L(a.name) + '"><span class="removeFill"></span><span class="removeLabel">Remove</span></button></div>', o.querySelector(".hideBtn").addEventListener("click", () => {
        a.hidden = !a.hidden, W();
      });
      const u = o.querySelector(".removeBtn");
      Et(u, u.querySelector(".removeFill"), 1500, () => {
        const f = e.indexOf(a);
        f > -1 && e.splice(f, 1), W(), V("Removed " + a.name);
      }), n.appendChild(o);
    });
  }
  function Ei() {
    var o, s, r, d;
    const e = w[S], t = (o = i("warmupList")) == null ? void 0 : o.closest("section"), n = (s = i("cooldownList")) == null ? void 0 : s.closest("section"), a = (d = (r = i("strengthList")) == null ? void 0 : r.closest("section")) == null ? void 0 : d.querySelector(".sectionTitle");
    e != null && e.customSequence ? (t && (t.hidden = !0), n && (n.hidden = !0), a && (a.textContent = "Move sequence")) : (t && (t.hidden = !1), n && (n.hidden = !1), a && (a.textContent = "Kettlebell work")), qt(ge, "warmupList"), qt(N, "strengthList"), qt(me, "cooldownList");
  }
  function Wt() {
    N.length > 0;
    const e = i("addMovementBtn"), t = i("addRestBtn");
    e && (e.textContent = "Add movement"), t && (t.textContent = "Add rest");
  }
  function Le() {
    const e = i("useGlobalTiming").checked, t = i("addMovementDuration"), n = i("addMovementUnit");
    t.disabled = e, n.disabled = e, t.parentElement.style.opacity = e ? ".38" : "1", i("globalTimingValue").textContent = "Use global timing · " + Z(k.value);
    const a = i("useGlobalRestTiming").checked, o = i("addRestDuration"), s = i("addRestUnit");
    o.disabled = a, s.disabled = a, o.parentElement.style.opacity = a ? ".38" : "1", i("globalRestTimingValue").textContent = "Use global timing · " + Z(C.value);
  }
  let Tn = "movement";
  function Gt(e) {
    Tn = e;
    const t = i("movementFields"), n = i("restFields");
    t.hidden = e !== "movement", n.hidden = e !== "rest", i("movementCreatorHeading").textContent = e === "rest" ? "Add rest" : "Add movement", i("movementCreator").setAttribute("aria-label", e === "rest" ? "Create rest" : "Create movement"), Le();
  }
  function jt() {
    w[S];
    const e = A ? !0 : i("useGlobalTiming").checked, t = e ? Number(k.value) : Sn(
      i("addMovementDuration").value,
      i("addMovementUnit").value
    ), n = A ? !0 : i("useGlobalRestTiming").checked, a = n ? Number(C.value) : Sn(
      i("addRestDuration").value,
      i("addRestUnit").value
    );
    if (Tn === "rest") {
      const o = i("addRestTitle").value.trim() || "Rest", s = i("addRestGroup").value.trim() || "Rest";
      N.push({
        id: "rest-" + Date.now(),
        name: o,
        group: s,
        kind: "rest",
        hidden: !1,
        useGlobalTiming: n,
        duration: Math.max(5, a || Number(C.value))
      }), W(), i("movementCreator").hidden = !0, i("addRestTitle").value = "Rest", i("addRestGroup").value = "Rest", V("Rest added"), A && (ke("movements"), se());
    } else {
      const o = i("addMovementInput").value.trim();
      if (!o) return;
      const s = i("addMovementGroup").value.trim() || "Movement";
      N.push({
        id: "movement-" + Date.now(),
        name: o,
        group: s,
        kind: "work",
        hidden: !1,
        useGlobalTiming: e,
        duration: Math.max(5, t || Number(k.value))
      }), i("addMovementInput").value = "", i("addMovementGroup").value = "", W(), i("movementCreator").hidden = !0, V("Movement added"), A && (ke("movements"), se());
    }
    Wt();
  }
  let Mn = null;
  function V(e) {
    const t = i("toast");
    t.textContent = e, t.classList.add("show"), clearTimeout(Mn), Mn = setTimeout(() => t.classList.remove("show"), 2200);
  }
  const Fi = ["Terrible", "Poor", "Meh", "Okay", "Good", "Great"], Ri = ["#6E63A8", "#5878A8", "#6F8B8A", "#5F9B72", "#D5A53E", "#D56B54"];
  function Ln(e) {
    return Math.max(0, Math.min(5, Math.floor(Number(e) / 100 * 6)));
  }
  function te(e, t) {
    return Fi[Ln(t)];
  }
  function En(e) {
    return Ri[Ln(e)];
  }
  function G(e) {
    return e.getFullYear() + "-" + String(e.getMonth() + 1).padStart(2, "0") + "-" + String(e.getDate()).padStart(2, "0");
  }
  function Ee() {
    return { morning: D().morningTime || "08:00", evening: D().eveningTime || "19:00" };
  }
  function ht(e) {
    const [t, n] = String(e).split(":").map(Number);
    return (t || 0) * 60 + (n || 0);
  }
  function Bi(e) {
    const t = Ee();
    return e.getHours() * 60 + e.getMinutes() >= ht(t.evening) ? "evening" : "morning";
  }
  function ft(e, t) {
    return v.checkins.find((n) => n.date === e && n.slot === t);
  }
  function vt(e) {
    return !!(e && e.mood != null && e.energy != null);
  }
  function Zt() {
    const e = /* @__PURE__ */ new Date(), t = G(e), n = Bi(e), a = Ee(), o = e.getHours() * 60 + e.getMinutes();
    return n === "morning" && o < ht(a.morning) || vt(ft(t, n)) ? null : n;
  }
  const le = i("checkinModal"), bt = i("checkinTab"), Ai = i("checkinBadge"), de = { mood: { input: i("moodInput"), fill: i("moodFill") }, energy: { input: i("energyLevelInput"), fill: i("energyLevelFill") } };
  function Fn(e) {
    const { input: t, fill: n } = de[e];
    n.style.width = t.value + "%", t.setAttribute("aria-valuetext", te(e, t.value));
  }
  Object.keys(de).forEach((e) => de[e].input.addEventListener("input", () => Fn(e)));
  let J = null;
  function Vt() {
    const e = Ee(), t = /* @__PURE__ */ new Date(), n = t.getHours() * 60 + t.getMinutes();
    return n < ht(e.morning) ? "Next check-in at " + e.morning : n < ht(e.evening) ? "Next check-in at " + e.evening : "Next check-in tomorrow at " + e.morning;
  }
  function Rn() {
    const e = Zt();
    if (!e) {
      V(Vt());
      return;
    }
    J = { date: G(/* @__PURE__ */ new Date()), slot: e };
    const n = ft(J.date, e), a = v.checkins.find((s) => vt(s));
    Object.keys(de).forEach((s) => {
      de[s].input.value = (n == null ? void 0 : n[s]) ?? (a == null ? void 0 : a[s]) ?? 50, Fn(s);
    });
    const o = Ee()[e];
    i("checkinEyebrow").textContent = (e === "morning" ? "Morning" : "Evening") + " · " + o, i("checkinTitle").textContent = e === "morning" ? "Morning check-in" : "Evening check-in", le.classList.add("open"), le.setAttribute("aria-hidden", "false"), requestAnimationFrame(() => de.mood.input.focus());
  }
  function Ye() {
    le.classList.remove("open"), le.setAttribute("aria-hidden", "true"), J && (Ke = J.date + "-" + J.slot);
    try {
      localStorage.setItem("move-assistant-dismissed", Ke);
    } catch {
    }
    J = null, Fe();
  }
  function zi() {
    if (!J) return;
    if (vt(ft(J.date, J.slot))) {
      Ye();
      return;
    }
    const { date: e, slot: t } = J;
    let n = ft(e, t);
    n || (n = { date: e, slot: t }, v.checkins.unshift(n), v.checkins = v.checkins.slice(0, 2e3)), n.mood = Number(de.mood.input.value), n.energy = Number(de.energy.input.value), n.scale = 100, n.at = (/* @__PURE__ */ new Date()).toISOString(), Ce(), g.fire("checkin", { slot: t, mood: n.mood, energy: n.energy, mood_label: te("mood", n.mood), energy_label: te("energy", n.energy) }), V((t === "morning" ? "Morning" : "Evening") + " check-in saved"), Ye(), xt(), Je(), we(), re();
  }
  let Ke = "";
  try {
    Ke = localStorage.getItem("move-assistant-dismissed") || "";
  } catch {
  }
  function Fe() {
    const e = Zt();
    Ai.hidden = !e, bt.classList.toggle("due", !!e), bt.setAttribute("aria-label", e ? (e === "morning" ? "Morning" : "Evening") + " check-in is due" : Vt()), bt.title = e ? "Check in now" : Vt();
  }
  function Ut() {
    Fe();
    const e = Zt();
    !e || le.classList.contains("open") || D().checkinAutoOpen !== !1 && (!Se.home.classList.contains("active") || Y.classList.contains("open") || Ke !== G(/* @__PURE__ */ new Date()) + "-" + e && Rn());
  }
  bt.addEventListener("click", Rn), i("checkinLater").addEventListener("click", Ye), i("checkinSave").addEventListener("click", zi), le.addEventListener("click", (e) => {
    e.target === le && Ye();
  }), le.addEventListener("keydown", (e) => {
    e.key === "Escape" && (e.preventDefault(), Ye());
  }), setInterval(Ut, 3e4);
  function xt() {
    const e = G(/* @__PURE__ */ new Date()), t = (n) => v.checkins.find((a) => a.date === e && a[n] != null);
    [["mood", "moodMeta"], ["energy", "energyLevelMeta"]].forEach(([n, a]) => {
      const o = t(n);
      i(a).textContent = o ? te(n, o[n]) + " · this " + o.slot : "Not checked in yet today";
    });
  }
  function Je() {
    const e = i("feelCard");
    if (!e) return;
    const t = /* @__PURE__ */ new Date(), n = new Date(t.getFullYear(), t.getMonth(), t.getDate() - (t.getDay() + 6) % 7), a = [...Array(7)].map((l, c) => {
      const y = new Date(n.getFullYear(), n.getMonth(), n.getDate() + c), F = G(y), H = v.checkins.filter((z) => z.date === F), T = (z) => {
        const q = H.map((p) => p[z]).filter((p) => p != null);
        return q.length ? q.reduce((p, R) => p + R, 0) / q.length : null;
      };
      return { d: y, key: F, mood: T("mood"), energy: T("energy"), count: H.filter(vt).length, future: y > t && F !== G(t) };
    }), o = (l) => {
      const c = a.map((y) => y[l]).filter((y) => y != null);
      return c.length ? c.reduce((y, F) => y + F, 0) / c.length : null;
    }, s = o("mood"), r = o("energy"), d = a.reduce((l, c) => l + c.count, 0), u = a.filter((l) => !l.future).length * 2, f = (l, c) => '<div class="feelMeter"><div class="feelMeterTop"><span>' + l + "</span><span>" + (c == null ? "—" : L(te("", c))) + '</span></div><div class="feelTrack"><span style="width:' + (c == null ? 0 : Math.max(4, c)) + "%;background:" + (c == null ? "transparent" : En(c)) + '"></span></div></div>', x = a.filter((l) => l.mood != null && l.energy != null).sort((l, c) => c.mood + c.energy - (l.mood + l.energy))[0];
    e.innerHTML = '<div class="feelTop"><div class="feelSummary"><div class="feelHeadline">' + (s == null ? "No check-ins yet" : L(te("", (s + r) / 2))) + '</div><div class="weekCopy">' + (s == null ? "Your first check-in will appear here." : "on average this week" + (x ? " · best day " + L(new Intl.DateTimeFormat(void 0, { weekday: "long" }).format(x.d)) : "")) + '</div></div><div class="feelTotals">' + f("Mood", s) + f("Energy", r) + '<div class="feelCount">' + d + " of " + u + ' check-ins</div></div></div><div class="feelDays">' + a.map(
      (l) => '<div class="weekChip feelDay' + (l.future ? " future" : "") + (l.key === G(t) ? " today" : "") + '"><div class="weekChipTop"><strong>' + L(new Intl.DateTimeFormat(void 0, { weekday: "short" }).format(l.d)) + "</strong>" + (l.count >= 2 ? '<span class="weekTick">✓</span>' : '<span class="feelDots">' + "●".repeat(l.count) + "</span>") + "</div>" + f("Mood", l.mood) + f("Energy", l.energy) + "</div>"
    ).join("") + "</div>";
  }
  const yt = i("upcomingCountSetting");
  yt.addEventListener("change", () => {
    Te = yt.value === "all" ? "all" : Number(yt.value), Wn();
  });
  const Qe = i("tempoRevealBtn"), Yt = i("tempoExperiment"), Q = i("tempoQuad"), Re = i("tempoDot"), Ni = i("tempoEstimate"), Pi = i("tempoReadout");
  let Be = { x: 0.5, y: 0.5 }, Xe = !1, wt = { total: 20, work: 45, rest: 15 };
  function Kt(e, t, n, a) {
    const o = Math.max(t, Math.min(n, e));
    return Math.round((o - t) / a) * a + t;
  }
  function Ii(e, t) {
    const n = (e - 0.5) * 2, a = (t - 0.5) * 2, o = Kt(
      wt.total + n * 5 + a * 8,
      Number(M.min),
      Number(M.max),
      Number(M.step)
    ), s = Kt(
      wt.work + n * 10 + a * 8,
      Number(k.min),
      Number(k.max),
      Number(k.step)
    ), r = Kt(
      wt.rest + n * 6 + a * 6,
      Number(C.min),
      Number(C.max),
      Number(C.step)
    );
    return M.value = o, k.value = s, C.value = r, fn.textContent = o + " min", vn.textContent = s + " sec", bn.textContent = r + " sec", mt(), { total: o, work: s, rest: r };
  }
  function Jt(e, t) {
    const n = e < 0.34 ? "Low" : e > 0.66 ? "Hard" : "Medium", a = t < 0.34 ? "Fast" : t > 0.66 ? "Slow" : "Balanced", o = Ii(e, t);
    Pi.textContent = n + " + " + a, Ni.textContent = o.total + " min", Q.setAttribute("aria-valuetext", n + " and " + a + ", estimated " + o.total + " minutes");
  }
  function Qt(e) {
    const t = Q.getBoundingClientRect(), n = Math.max(0, Math.min(1, (e.clientX - t.left) / t.width)), a = Math.max(0, Math.min(1, (e.clientY - t.top) / t.height));
    Be = { x: n, y: a }, Re.style.left = n * 100 + "%", Re.style.top = a * 100 + "%", Jt(n, a);
  }
  Qe.addEventListener("click", () => {
    const e = Yt.hidden;
    Yt.hidden = !e, Qe.setAttribute("aria-expanded", e ? "true" : "false"), Qe.textContent = e ? "Now close this" : "Don’t try this!", e && (wt = {
      total: Number(M.value),
      work: Number(k.value),
      rest: Number(C.value)
    }, Be = { x: 0.5, y: 0.5 }, Re.style.left = "50%", Re.style.top = "50%", Jt(Be.x, Be.y));
  }), h.querySelectorAll("[data-feedback-rating]").forEach((e) => e.addEventListener("click", () => {
    Number(e.dataset.feedbackRating), h.querySelectorAll("[data-feedback-rating]").forEach((t) => t.classList.toggle("selected", t === e));
  }));
  const kt = i("testingFeedbackForm"), Bn = i("testingFeedbackThanks"), Di = i("testingFeedbackAgain");
  kt.addEventListener("submit", (e) => {
    e.preventDefault(), kt.hidden = !0, Bn.hidden = !1, V("Feedback captured for prototype");
  }), Di.addEventListener("click", (e) => {
    e.preventDefault(), kt.reset(), h.querySelectorAll("[data-feedback-rating]").forEach((t) => t.classList.remove("selected")), Bn.hidden = !0, kt.hidden = !1;
  }), Q.addEventListener("pointerdown", (e) => {
    var t;
    Xe = !0, Qt(e);
    try {
      (t = Q.setPointerCapture) == null || t.call(Q, e.pointerId);
    } catch {
    }
  }), Q.addEventListener("pointermove", (e) => {
    Xe && Qt(e);
  }), Q.addEventListener("pointerup", (e) => {
    Xe && (Xe = !1, Qt(e), W());
  }), Q.addEventListener("pointercancel", () => Xe = !1), Q.addEventListener("keydown", (e) => {
    let { x: t, y: n } = Be, a = !0;
    e.key === "ArrowLeft" ? t -= 0.05 : e.key === "ArrowRight" ? t += 0.05 : e.key === "ArrowUp" ? n -= 0.05 : e.key === "ArrowDown" ? n += 0.05 : a = !1, a && (e.preventDefault(), t = Math.max(0, Math.min(1, t)), n = Math.max(0, Math.min(1, n)), Be = { x: t, y: n }, Re.style.left = t * 100 + "%", Re.style.top = n * 100 + "%", Jt(t, n), W());
  });
  const Y = i("workoutModal");
  let $e = null;
  function Ae(e) {
    return e.map((t) => ({ ...t }));
  }
  function Hi() {
    const e = w[S];
    return {
      key: S,
      profile: e ? JSON.parse(JSON.stringify(e)) : null,
      warmup: Ae(ge),
      strength: Ae(N),
      cooldown: Ae(me),
      total: Number(M.value),
      work: Number(k.value),
      rest: Number(C.value)
    };
  }
  function An(e = !1) {
    A = !!e, $e = Hi(), i("moveEditorTitle").textContent = A ? "Create new move" : "Edit move", i("moveEditorSubtitle").textContent = A ? "Build the sequence first, then set timing, then finish the move." : "Adjust timing and choose which movements are included today.", i("deleteMoveOpen").hidden = A;
    const t = i("createMoveOptions");
    if (t.hidden = !A, A) {
      i("useGlobalTiming").checked = !0, i("useGlobalRestTiming").checked = !0;
      const n = w[S];
      i("includeWarmupPreset").checked = !!(n != null && n.includeWarmup), i("includeCooldownPreset").checked = !!(n != null && n.includeCooldown), _t((n == null ? void 0 : n.preset) || "movement", !1);
    }
    i("movementCreator").hidden = !0, Gt("movement"), Wt(), Le(), Yt.hidden = !0, Qe.setAttribute("aria-expanded", "false"), Qe.textContent = "Don’t try this!", Y.classList.toggle("createMode", A), Y.classList.add("open"), Y.setAttribute("aria-hidden", "false"), A && vi();
  }
  function St() {
    Y.classList.contains("createMode") && bi(), Y.classList.remove("createMode"), Y.classList.remove("open"), Y.setAttribute("aria-hidden", "true");
  }
  function zn() {
    if (!$e) return;
    const e = $e;
    e.profile && (w[e.key] = JSON.parse(JSON.stringify(e.profile))), S = e.key, ge = Ae(e.warmup), N = Ae(e.strength), me = Ae(e.cooldown), M.value = e.total, k.value = e.work, C.value = e.rest;
    const t = w[S];
    if (t) {
      h.querySelectorAll(".workoutPanel[data-workout]").forEach((a) => a.classList.toggle("active", a.dataset.workout === S));
      const n = h.querySelector(".workoutPanel.active");
      if (n) {
        const a = n.querySelector(".workoutName");
        a && (a.textContent = t.name);
        const o = n.querySelector(".panelCollapsedText");
        o && (o.textContent = t.name);
        const s = n.querySelector(".sourceTag");
        s && (s.textContent = t.source);
      }
      E.value = t.name;
    }
    W();
  }
  i("cancelWorkoutEdit").addEventListener("click", () => {
    if (A) {
      const e = S;
      delete w[e], A = !1, he = null, ee(v.order.find((t) => w[t]) || Object.keys(w)[0]);
    } else
      zn();
    St();
  }), i("saveWorkoutEdit").addEventListener("click", () => {
    const e = w[S], t = E.value.trim() || "New move";
    if (e && (e.name = t), W(), A && e)
      Dt(S, e), h.querySelectorAll(".workoutPanel[data-workout]").forEach((n) => n.classList.toggle("active", n.dataset.workout === S)), A = !1, he = null, v.order.includes(S) || v.order.push(S), V("Move created");
    else {
      const n = h.querySelector(".workoutPanel.active");
      if (n) {
        const a = n.querySelector(".workoutName");
        a && (a.textContent = t);
        const o = n.querySelector(".panelCollapsedText");
        o && (o.textContent = t);
      }
      V("Move saved");
    }
    $e = null, St(), Ce();
  }), Y.addEventListener("click", (e) => {
    if (e.target === Y) {
      if (A) {
        const t = S;
        delete w[t], A = !1, he = null, ee(v.order.find((n) => w[n]) || Object.keys(w)[0]);
      } else
        zn();
      St();
    }
  }), i("addMovementBtn").addEventListener("click", () => {
    const e = i("movementCreator");
    e.hidden = !1, Gt("movement"), Le(), i("addMovementInput").focus();
  }), i("addRestBtn").addEventListener("click", () => {
    const e = i("movementCreator");
    e.hidden = !1, Gt("rest"), i("addRestTitle").focus();
  }), i("closeMovementCreator").addEventListener("click", () => {
    i("movementCreator").hidden = !0;
  }), i("useGlobalTiming").addEventListener("change", Le), i("useGlobalRestTiming").addEventListener("change", Le), h.querySelectorAll(".createPresetBtn").forEach((e) => e.addEventListener("click", () => {
    _t(e.dataset.movePreset, !0), W();
  })), i("includeWarmupPreset").addEventListener("change", Cn), i("includeCooldownPreset").addEventListener("change", Cn), i("includeWarmupPreset").addEventListener("change", se), i("includeCooldownPreset").addEventListener("change", se), E.addEventListener("input", se), i("confirmAddMovement").addEventListener("click", jt), i("confirmAddRest").addEventListener("click", jt), i("addMovementInput").addEventListener("keydown", (e) => {
    e.key === "Enter" && jt();
  });
  const et = i("countdown"), Xt = i("countNum"), ne = i("countdownPixelCanvas");
  let tt = null, $t = "appear";
  class Oi {
    constructor(t, n, a, o, s, r, d) {
      this.width = t.width, this.height = t.height, this.ctx = n, this.x = a, this.y = o, this.color = s, this.speed = (Math.random() * 0.8 + 0.1) * r, this.size = 0, this.sizeStep = Math.random() * 0.4, this.minSize = 0.5, this.maxSizeInteger = 2, this.maxSize = Math.random() * (this.maxSizeInteger - this.minSize) + this.minSize, this.delay = d, this.counter = 0, this.counterStep = Math.random() * 4 + (this.width + this.height) * 0.01, this.isIdle = !1, this.isReverse = !1, this.isShimmer = !1;
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
  let en = [], Nn = 1, Pn = 1;
  function fe() {
    const e = parseFloat(getComputedStyle(i("app")).zoom);
    return Number.isFinite(e) && e > 0 ? e : 1;
  }
  function _i() {
    var f;
    if (!ne) return;
    const e = fe(), t = Math.max(1, window.innerWidth / e), n = Math.max(1, window.innerHeight / e);
    Nn = t, Pn = n;
    const a = Math.min(window.devicePixelRatio || 1, 2);
    ne.width = Math.floor(t * a), ne.height = Math.floor(n * a), ne.style.width = t + "px", ne.style.height = n + "px";
    const o = ne.getContext("2d");
    o.setTransform(a, 0, 0, a, 0, 0);
    const s = ["#f4f5ff", "#dfe3ff", "#c9d0ff", "#aeb9ff"], r = 12, d = (f = window.matchMedia) == null ? void 0 : f.call(window, "(prefers-reduced-motion: reduce)").matches, u = d ? 0 : 0.055;
    en = [];
    for (let x = 0; x < t; x += r)
      for (let l = 0; l < n; l += r) {
        const c = x - t / 2, y = l - n / 2, F = Math.sqrt(c * c + y * y), H = d ? 0 : Math.random() * 75 + F * 0.05, T = new Oi({ width: t, height: n }, o, x, l, s[Math.floor(Math.random() * s.length)], u, H);
        T.maxSizeInteger = 4, T.maxSize = Math.random() * 3.2 + 0.8, T.sizeStep = 0.35 + Math.random() * 0.45, en.push(T);
      }
  }
  function In(e) {
    cancelAnimationFrame(tt), $t = e;
    const t = ne == null ? void 0 : ne.getContext("2d");
    if (!t) return;
    function n() {
      t.clearRect(0, 0, Nn, Pn);
      let a = !0;
      en.forEach((o) => {
        o[$t](), o.isIdle || (a = !1);
      }), $t === "disappear" && a || (tt = requestAnimationFrame(n));
    }
    tt = requestAnimationFrame(n);
  }
  function Ct() {
    cancelAnimationFrame(tt), _i(), In("appear"), setTimeout(() => In("disappear"), 560);
  }
  window.addEventListener("resize", () => {
    et.classList.contains("active") && Ct();
  });
  const nt = i("pixelTrailCanvas"), ze = nt.getContext("2d");
  let ie = !0, Ne = 0.7, Pe = 600, it = [], Ie = null, ce = { x: 0, y: 0, ready: !1 };
  function Dn() {
    const e = B.getBoundingClientRect(), t = fe(), n = Math.min(window.devicePixelRatio || 1, 2), a = Math.max(1, e.width / t), o = Math.max(1, e.height / t);
    nt.width = Math.max(1, Math.floor(a * n)), nt.height = Math.max(1, Math.floor(o * n)), nt.style.width = a + "px", nt.style.height = o + "px", ze.setTransform(n, 0, 0, n, 0, 0);
  }
  function qi(e, t) {
    if (!ie) return;
    const n = performance.now();
    ce.ready || (ce = { x: e, y: t, ready: !0 });
    const a = 7;
    for (let o = 1; o <= a; o++) {
      const s = o / a;
      it.push({
        x: ce.x + (e - ce.x) * s,
        y: ce.y + (t - ce.y) * s,
        born: n - (a - o) * 10
      });
    }
    ce = { x: e, y: t, ready: !0 };
  }
  function Tt(e) {
    if (Ie = null, !K) return;
    if (!Se.workout.classList.contains("active")) {
      Ie = requestAnimationFrame(Tt);
      return;
    }
    const t = B.getBoundingClientRect(), n = fe();
    ze.clearRect(0, 0, t.width / n, t.height / n), ie && (it = it.filter((o) => e - o.born < Pe), ze.fillStyle = i("app").classList.contains("light") ? "#7c89d8" : "#f4f4f4", it.forEach((o) => {
      const s = (e - o.born) / Pe, r = (1 - s) * Ne, d = Math.round(o.x / 14) * 14, u = Math.round(o.y / 14) * 14;
      ze.globalAlpha = Math.max(0, r);
      const f = 2 + 5 * (1 - s) * Ne;
      ze.fillRect(d - f / 2, u - f / 2, f, f);
    }), ze.globalAlpha = 1), Ie = requestAnimationFrame(Tt);
  }
  B.addEventListener("pointermove", (e) => {
    const t = B.getBoundingClientRect(), n = fe();
    qi((e.clientX - t.left) / n, (e.clientY - t.top) / n);
  }), B.addEventListener("pointerleave", () => ce.ready = !1), new ResizeObserver(Dn).observe(B), Dn(), Ie = requestAnimationFrame(Tt);
  const pe = i("movementRippleCanvas"), De = pe.getContext("2d");
  let ve = !0, He = null, Wi = performance.now();
  function Hn() {
    const e = pe.parentElement.getBoundingClientRect(), t = fe(), n = Math.max(1, e.width / t), a = Math.max(1, e.height / t), o = Math.min(window.devicePixelRatio || 1, 2);
    pe.width = Math.max(1, Math.floor(n * o)), pe.height = Math.max(1, Math.floor(a * o)), pe.style.width = n + "px", pe.style.height = a + "px", De.setTransform(o, 0, 0, o, 0, 0);
  }
  function Gi() {
    const e = m[b];
    return I ? 2200 : e ? e.kind === "warmup" || e.kind === "cooldown" ? 2400 : 1350 : 1600;
  }
  function Mt(e) {
    if (He = null, !K) return;
    if (!Se.workout.classList.contains("active")) {
      He = requestAnimationFrame(Mt);
      return;
    }
    const t = pe.parentElement.getBoundingClientRect(), n = fe(), a = Math.max(1, t.width / n), o = Math.max(1, t.height / n);
    if (De.clearRect(0, 0, a, o), ve) {
      const s = Gi(), r = (e - Wi) % s / s, d = 15, u = Math.max(8, Math.round(d * o / Math.max(1, a))), f = a / (d + 1), x = o / (u + 1), l = a * 0.5, c = o * 0.52, y = Math.hypot(l, c), H = i("app").classList.contains("light") ? "34,34,34" : "244,244,244";
      for (let T = 1; T <= u; T++)
        for (let z = 1; z <= d; z++) {
          const q = z * f, p = T * x, R = Math.hypot(q - l, p - c) / y, dt = I ? Math.exp(-Math.pow((R - (r * 0.82 + 0.08) % 1 * 1.18) * 5.5, 2)) : 0, Ue = Math.exp(-Math.pow((R - r * 1.25) * 7, 2)), O = I ? dt : Ue, Rt = I ? 0.5 + 0.5 * Math.sin(r * Math.PI * 2 - R * 3) ** 2 : 0.35 + 0.65 * Math.sin(r * Math.PI * 2 - R * 5) ** 2, pa = I ? 1.4 + O * 4.2 * Rt : 1.2 + O * 5 * Rt;
          De.beginPath(), De.arc(q, p, pa, 0, Math.PI * 2), De.fillStyle = `rgba(${H},${I ? 0.08 + O * 0.48 : 0.05 + O * 0.55})`, De.fill();
        }
    }
    He = requestAnimationFrame(Mt);
  }
  new ResizeObserver(Hn).observe(pe.parentElement), Hn(), He = requestAnimationFrame(Mt);
  const at = i("exerciseTitle"), Oe = i("exerciseMeta"), On = i("stepLabel"), _n = i("digits"), qn = i("fill"), ot = i("progress"), ue = i("pause"), ji = i("nextName"), Zi = i("nextMeta"), Vi = i("nextIcon"), Lt = i("skipNextSession");
  let j = null;
  function ae(e) {
    for (let t = Math.max(0, e); t < m.length; t++)
      if (!m[t].sessionHidden) return t;
    return -1;
  }
  function Ui() {
    const e = m[b];
    if (!e) return { name: "Complete", meta: "Move finished", icon: "✓" };
    if (I) {
      const a = ae(b + 1), o = a >= 0 ? m[a] : null;
      return o ? { name: o.name, meta: o.group + " · " + o.duration + " sec", icon: o.kind === "cooldown" ? "↘" : o.kind === "warmup" ? "↗" : "●" } : { name: "Complete", meta: "Move finished", icon: "✓" };
    }
    if (e.rest > 0) return { name: "Rest", meta: e.rest + " sec · recovery", icon: "Ⅱ" };
    const t = ae(b + 1), n = t >= 0 ? m[t] : null;
    return n ? { name: n.name, meta: n.group + " · " + n.duration + " sec", icon: n.kind === "cooldown" ? "↘" : n.kind === "warmup" ? "↗" : "●" } : { name: "Complete", meta: "Move finished", icon: "✓" };
  }
  function Yi() {
    if (!m[b]) return m.length;
    const t = ae(b + 1);
    return t < 0 ? m.length : t + 1;
  }
  function Ki(e) {
    return e.kind === "cooldown" ? "↘" : e.kind === "warmup" ? "↗" : "●";
  }
  function Ji() {
    [...ot.children].forEach((e, t) => {
      e.classList.toggle("done", t < b), e.classList.toggle("active", t === b), e.classList.toggle("rewindable", t <= b), e.disabled = t > b, t === b && e.style.setProperty("--segment-progress", "0%");
    }), m[b] && (On.textContent = "Step " + (b + 1) + " of " + m.length, We());
  }
  function Qi(e) {
    const t = m.indexOf(e);
    t < 0 || t <= b || (e.sessionHidden = !e.sessionHidden, _e(), V((e.sessionHidden ? "Hidden " : "Included ") + e.name + " for this session"));
  }
  function Wn() {
    const e = i("upcomingList");
    if (!e) return;
    e.innerHTML = "";
    const t = Yi(), n = m.slice(t);
    (Te === "all" ? n : n.slice(0, Math.max(1, Number(Te) || 1))).forEach((o) => {
      const s = document.createElement("section");
      s.className = "upcomingCard" + (o.sessionHidden ? " sessionHidden" : ""), s.innerHTML = '<div class="upcomingInfo"><div class="upcomingIcon" aria-hidden="true">' + Ki(o) + '</div><div><div class="upcomingName">' + L(o.name) + '</div><div class="upcomingMeta">' + L(o.group) + " · " + o.duration + ' sec</div></div></div><button class="skipSessionBtn" type="button">' + (o.sessionHidden ? "Include this session" : "Skip this session") + "</button>", s.querySelector(".skipSessionBtn").addEventListener("click", () => Qi(o)), e.appendChild(s);
    });
  }
  function _e() {
    const e = Ui();
    if (ji.textContent = e.name, Zi.textContent = e.meta, Vi.textContent = e.icon, j = null, I) {
      const t = ae(b + 1);
      t >= 0 && (j = m[t]);
    } else {
      const t = m[b];
      if (t && t.rest > 0)
        j = null;
      else {
        const n = ae(b + 1);
        n >= 0 && (j = m[n]);
      }
    }
    Lt && (Lt.hidden = !j, Lt.textContent = j != null && j.sessionHidden ? "Include this session" : "Skip this session"), Wn();
  }
  Lt.addEventListener("click", () => {
    j && (j.sessionHidden = !j.sessionHidden, V((j.sessionHidden ? "Hidden " : "Included ") + j.name + " for this session"), _e());
  });
  let X = null, tn = null;
  function rt(e, t = {}) {
    const n = w[S];
    g.fire(e, { move: (n == null ? void 0 : n.name) || "", move_id: S, ...t });
  }
  function Xi() {
    const e = w[S];
    X = { key: S, name: (e == null ? void 0 : e.name) || "Move", startedAt: Date.now(), active: 0 }, clearInterval(tn), tn = setInterval(() => {
      X && !_ && X.active++;
    }, 1e3), rt("started", { steps: m.length });
  }
  function Gn(e) {
    if (clearInterval(tn), !X) return;
    const t = X;
    X = null, rt(e ? "completed" : "ended", { seconds: t.active }), !(t.active < 30) && (v.history.unshift({ id: "h-" + t.startedAt, move_id: t.key, name: t.name, start: new Date(t.startedAt).toISOString(), seconds: t.active, completed: e }), v.history = v.history.slice(0, 1e3), Ce(), we(), re());
  }
  function $i() {
    zt("workout"), ea();
  }
  function nn() {
    Gn(!1), clearInterval(P), clearInterval(gt), I = !1, _ = !1, ue.textContent = "Pause", i("app").classList.remove("resting", "paused"), et.classList.remove("active"), zt("home");
  }
  function ea() {
    et.classList.add("active");
    let e = 5;
    Xt.textContent = e, requestAnimationFrame(Ct), clearInterval(gt), gt = setInterval(() => {
      e--, e > 0 ? (Xt.textContent = e, Ct()) : (clearInterval(gt), Xt.textContent = "GO", Ct(), setTimeout(() => {
        et.classList.remove("active"), cancelAnimationFrame(tt), na();
      }, 650));
    }, 1e3);
  }
  function jn() {
    ot.innerHTML = "", m.forEach((e, t) => {
      const n = document.createElement("button");
      n.type = "button", n.className = "progressSegment", n.setAttribute("aria-label", "Go to " + e.name), n.addEventListener("click", () => {
        t <= b && ta(t);
      }), ot.appendChild(n);
    });
  }
  function ta(e) {
    e < 0 || e >= m.length || e > b || (clearInterval(P), I = !1, i("app").classList.remove("resting"), b = e, _ = !1, i("app").classList.remove("paused"), ue.textContent = "Pause", qe(), P = setInterval(be, 1e3));
  }
  function na() {
    if (b = ae(0), _ = !1, i("app").classList.remove("paused"), ue.textContent = "Pause", jn(), b < 0) {
      at.textContent = "No activities", Oe.textContent = "Open Edit and enable or add a movement";
      return;
    }
    Xi(), qe(), clearInterval(P), P = setInterval(be, 1e3);
  }
  function qe() {
    I = !1, i("app").classList.remove("resting");
    const e = m[b];
    U = e.duration, ut = e.duration, at.textContent = e.name, Oe.textContent = e.group, On.textContent = "Step " + (b + 1) + " of " + m.length, X && rt("step", { name: e.name, group: e.group, kind: e.kind, step: b + 1, of: m.length, duration: e.duration }), _e(), Ji();
  }
  function We() {
    _n.textContent = U;
    const e = U / ut * 100;
    qn.style.width = e + "%";
    const t = [...ot.children][b];
    if (t && !I) {
      const n = 100 - e;
      t.style.setProperty("--segment-progress", n + "%");
    }
  }
  function be() {
    if (!_ && (U--, We(), U <= 0)) {
      const e = m[b];
      e.rest > 0 ? Zn(e.rest) : st();
    }
  }
  function Zn(e) {
    I = !0, i("app").classList.add("resting");
    const t = [...ot.children][b];
    t && t.style.setProperty("--segment-progress", "100%"), clearInterval(P), U = e, ut = e, X && rt("rest", { duration: e }), at.textContent = "Rest", Oe.textContent = "Recovery", _e(), We(), P = setInterval(() => {
      _ || (U--, We(), U <= 0 && (clearInterval(P), st(), P = setInterval(be, 1e3)));
    }, 1e3);
  }
  function st() {
    I = !1;
    const e = ae(b + 1);
    if (e >= 0)
      b = e, qe();
    else {
      _ = !1, ue.textContent = "Pause", i("app").classList.remove("resting", "paused"), clearInterval(P), at.textContent = "Complete", Oe.textContent = "Move finished", _n.textContent = "✓", Gn(!0);
      {
        const t = ti(7).reduce((n, a) => n + a.minutes, 0);
        Oe.textContent = "Move finished · " + t + " min in the last 7 days";
      }
      qn.style.width = "100%", _e();
    }
  }
  i("skipExercise").addEventListener("click", () => {
    clearInterval(P);
    const e = m[b];
    if (I) {
      I = !1, i("app").classList.remove("resting");
      const n = ae(b + 1);
      n >= 0 ? (b = n, qe(), P = setInterval(be, 1e3)) : st();
      return;
    }
    if (e && e.rest > 0) {
      Zn(e.rest);
      return;
    }
    const t = ae(b + 1);
    t >= 0 ? (b = t, qe(), P = setInterval(be, 1e3)) : st();
  }), i("restartSegment").addEventListener("click", () => {
    if (clearInterval(P), _ = !1, i("app").classList.remove("paused"), ue.textContent = "Pause", I) {
      const e = m[b];
      U = e.rest, ut = e.rest, at.textContent = "Rest", Oe.textContent = "Recovery", i("app").classList.add("resting"), _e(), We();
    } else
      qe();
    P = setInterval(I ? () => {
      _ || (U--, We(), U <= 0 && (clearInterval(P), st(), P = setInterval(be, 1e3)));
    } : be, 1e3);
  });
  function Et(e, t, n, a) {
    let o = 0, s = null, r = !1;
    function d() {
      s && cancelAnimationFrame(s), s = null, o = 0, r = !1, t.style.width = "0%", e.classList.remove("holding");
    }
    function u(l) {
      if (!r) return;
      o || (o = l);
      const c = Math.min(1, (l - o) / n);
      if (t.style.width = c * 100 + "%", c >= 1) {
        r = !1, s && cancelAnimationFrame(s), s = null, t.style.width = "100%", setTimeout(() => t.style.width = "0%", 90), a();
        return;
      }
      s = requestAnimationFrame(u);
    }
    function f(l) {
      var c;
      if (!(l && l.button !== void 0 && l.button !== 0)) {
        l == null || l.preventDefault(), d(), r = !0, e.classList.add("holding");
        try {
          (c = e.setPointerCapture) == null || c.call(e, l.pointerId);
        } catch {
        }
        s = requestAnimationFrame(u);
      }
    }
    function x() {
      r && d();
    }
    e.addEventListener("pointerdown", f), e.addEventListener("pointerup", x), e.addEventListener("pointercancel", x), e.addEventListener("lostpointercapture", x), e.addEventListener("keydown", (l) => {
      (l.key === " " || l.key === "Enter") && !l.repeat && f(l);
    }), e.addEventListener("keyup", (l) => {
      (l.key === " " || l.key === "Enter") && x();
    });
  }
  const ia = i("endWorkout");
  Et(ia, i("holdEndFill"), 1500, nn);
  const Ge = i("deleteMoveConfirm");
  i("deleteMoveOpen").addEventListener("click", () => {
    Ge.classList.add("open"), Ge.setAttribute("aria-hidden", "false");
  }), i("deleteMoveCancel").addEventListener("click", () => {
    Ge.classList.remove("open"), Ge.setAttribute("aria-hidden", "true");
  });
  function aa() {
    const e = S, t = h.querySelector('.workoutPanel[data-workout="' + e + '"]');
    t && t.remove(), delete w[e], v.order = v.order.filter((a) => a !== e);
    let n = h.querySelector(".workoutPanel[data-workout]");
    if (!n) {
      const a = "custom-" + Date.now();
      w[a] = { name: "New move", source: "Custom routine", total: 20, work: 45, rest: 15, customSequence: !0, preset: "movement", sequence: [], strength: [] }, v.order.push(a), n = Dt(a, w[a]);
    }
    Ge.classList.remove("open"), Ge.setAttribute("aria-hidden", "true"), $e = null, St(), ee(n.dataset.workout), Ce(), V("Move deleted");
  }
  Et(i("deleteMoveYes"), i("deleteMoveFill"), 1500, aa);
  const Vn = h.querySelector(".rubberTabs"), je = i("rubberIndicator");
  function lt(e, t = !0) {
    if (!e || !Vn || !je) return;
    const n = Vn.getBoundingClientRect(), a = e.getBoundingClientRect();
    je.style.transition = t ? "left .34s cubic-bezier(.2,1.35,.4,1),width .34s cubic-bezier(.2,1.35,.4,1),transform .18s ease" : "none";
    const o = fe();
    je.style.left = (a.left - n.left) / o + "px", je.style.width = a.width / o + "px", t && (je.style.transform = "scaleX(1.08)", setTimeout(() => je.style.transform = "scaleX(1)", 180));
  }
  h.querySelectorAll(".tab").forEach((e) => e.addEventListener("click", () => {
    h.querySelectorAll(".tab").forEach((t) => t.classList.remove("active")), h.querySelectorAll(".settingsPane").forEach((t) => t.classList.remove("active")), e.classList.add("active"), i(e.dataset.pane).classList.add("active"), lt(e, !0);
  })), requestAnimationFrame(() => lt(h.querySelector(".tab.active"), !1)), window.addEventListener("resize", () => lt(h.querySelector(".tab.active"), !1));
  const an = i("pixelTrailToggle"), on = i("rippleToggle"), Ze = i("trailStrength"), Ve = i("trailLife");
  function $(e, t) {
    D()[e] = t, Ce();
  }
  const xe = { feel: !0, steps: !0, mood: !0, energyLevel: !0, ...D().toggles || {} };
  function Un() {
    h.querySelectorAll("[data-toggle]").forEach((t) => t.classList.toggle("on", xe[t.dataset.toggle] !== !1)), h.querySelector(".feelSection").hidden = xe.feel === !1, [["steps", "stepsRow"], ["mood", "moodRow"], ["energyLevel", "energyLevelRow"]].forEach(([t, n]) => {
      i(n).hidden = xe[t] === !1;
    });
    const e = ["steps", "mood", "energyLevel"].some((t) => xe[t] !== !1);
    h.querySelector(".activityCard").hidden = !e, i("insightCard").style.gridColumn = e ? "" : "span 12";
  }
  h.querySelectorAll("[data-toggle]").forEach((e) => e.addEventListener("click", () => {
    xe[e.dataset.toggle] = xe[e.dataset.toggle] === !1, Un(), $("toggles", { ...xe });
  })), Un();
  function oa() {
    an.classList.toggle("on", ie), on.classList.toggle("on", ve), Ze.value = Math.round(Ne * 100), i("trailStrengthValue").textContent = Ze.value + "%", Ve.value = Pe, i("trailLifeValue").textContent = Ve.value + " ms";
  }
  D().trailEnabled !== void 0 && (ie = D().trailEnabled), D().rippleEnabled !== void 0 && (ve = D().rippleEnabled), D().trailStrength !== void 0 && (Ne = D().trailStrength), D().trailMaxAge !== void 0 && (Pe = D().trailMaxAge), oa(), an.addEventListener("click", () => {
    ie = !ie, an.classList.toggle("on", ie), ie || (it = []), $("trailEnabled", ie);
  }), on.addEventListener("click", () => {
    ve = !ve, on.classList.toggle("on", ve), $("rippleEnabled", ve);
  }), Ze.addEventListener("input", () => {
    Ne = Number(Ze.value) / 100, i("trailStrengthValue").textContent = Ze.value + "%";
  }), Ze.addEventListener("change", () => $("trailStrength", Ne)), Ve.addEventListener("input", () => {
    Pe = Number(Ve.value), i("trailLifeValue").textContent = Ve.value + " ms";
  }), Ve.addEventListener("change", () => $("trailMaxAge", Pe)), yt.addEventListener("change", () => $("upcomingCount", Te));
  function Yn(e) {
    h.querySelectorAll(".themeBtn").forEach((n) => n.classList.toggle("active", n.dataset.theme === e));
    const t = e === "light";
    i("app").classList.toggle("light", t), g.setLight(t);
  }
  Yn(D().theme || "dark"), h.querySelectorAll(".themeBtn").forEach((e) => e.addEventListener("click", () => {
    Yn(e.dataset.theme), $("theme", e.dataset.theme);
  }));
  const oe = { steps: null, ...D().entities || {} };
  let ye = null, rn = {};
  function ra(e) {
    const t = Object.values(e).filter((r) => r.entity_id.startsWith("sensor.") || r.entity_id.startsWith("input_number.")), n = (r) => r.attributes.friendly_name || r.entity_id, a = t.filter((r) => /step/i.test(r.entity_id) || /step/i.test(n(r)) || ["steps", "step"].includes(String(r.attributes.unit_of_measurement || "").toLowerCase())), o = t.filter((r) => !a.includes(r)), s = (r, d) => n(r).localeCompare(n(d));
    return { suggested: a.sort(s), rest: o.sort(s), label: n };
  }
  function Kn(e) {
    const t = i("stepsEntity");
    if (!t || t.matches(":focus")) return;
    const { suggested: n, rest: a, label: o } = ra(e), s = (u) => '<option value="' + L(u.entity_id) + '">' + L(o(u)) + "</option>";
    t.innerHTML = '<option value="">Not connected</option>' + (n.length ? '<optgroup label="Suggested">' + n.map(s).join("") + "</optgroup>" : "") + (a.length ? '<optgroup label="All sensors">' + a.map(s).join("") + "</optgroup>" : ""), t.value = oe.steps || "";
    const r = i("stepsStatus"), d = oe.steps && e[oe.steps];
    r.textContent = d ? "Connected · " + o(d) : r.dataset.empty;
  }
  i("stepsEntity").addEventListener("change", () => {
    oe.steps = i("stepsEntity").value || null, $("entities", { ...oe }), rn = {}, $n(), ye && (Kn(ye), Qn(ye));
  });
  function Ft(e, t = 0) {
    return new Intl.NumberFormat(void 0, { maximumFractionDigits: t }).format(e);
  }
  function Jn() {
    const e = oe.steps && (ye == null ? void 0 : ye[oe.steps]), t = Number(e == null ? void 0 : e.state);
    return Number.isFinite(t) ? t : null;
  }
  function Qn(e) {
    var a;
    const t = oe.steps, n = t ? Number((a = e[t]) == null ? void 0 : a.state) : NaN;
    i("stepsMeta").textContent = t ? Number.isFinite(n) ? Ft(n) + " · today" : "No reading yet" : "Choose a sensor in Settings";
  }
  let Xn = 0;
  async function $n() {
    const e = oe.steps;
    if (!e || !g.ws) return;
    Xn = Date.now();
    const t = /* @__PURE__ */ new Date(), n = new Date(t.getFullYear(), t.getMonth(), t.getDate() - 30);
    try {
      const a = await g.ws({ type: "recorder/statistics_during_period", start_time: n.toISOString(), end_time: t.toISOString(), statistic_ids: [e], period: "day", types: ["max"] }), o = (a == null ? void 0 : a[e]) || [], s = {};
      if (o.forEach((r) => {
        Number.isFinite(r.max) && (s[G(new Date(r.start))] = r.max);
      }), !Object.keys(s).length) {
        const r = await g.ws({ type: "history/history_during_period", start_time: n.toISOString(), end_time: t.toISOString(), entity_ids: [e], minimal_response: !0, no_attributes: !0, significant_changes_only: !1 });
        ((r == null ? void 0 : r[e]) || []).forEach((d) => {
          const u = Number(d.s ?? d.state), f = d.lu ? d.lu * 1e3 : Date.parse(d.last_updated || d.last_changed);
          if (!Number.isFinite(u) || !f) return;
          const x = G(new Date(f));
          s[x] = Math.max(s[x] || 0, u);
        });
      }
      rn = s, re();
    } catch {
    }
  }
  function ei(e) {
    if (e == null) return '<svg class="face empty" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10.5"/></svg>';
    const t = (e - 50) / 50;
    return '<svg class="face" viewBox="0 0 24 24" role="img" aria-label="' + L(te("", e)) + '"><circle cx="12" cy="12" r="11" fill="' + En(e) + '"/><circle cx="8.5" cy="10" r="1.4" fill="#111"/><circle cx="15.5" cy="10" r="1.4" fill="#111"/><path d="M7.5 ' + (15.5 - t).toFixed(2) + " Q12 " + (15.5 + 4 * t).toFixed(2) + " 16.5 " + (15.5 - t).toFixed(2) + '" stroke="#111" stroke-width="1.7" fill="none" stroke-linecap="round"/></svg>';
  }
  function sa(e) {
    const t = [];
    return v.checkins.filter((n) => n.date === e).forEach((n) => {
      n.mood != null && t.push(n.mood), n.energy != null && t.push(n.energy);
    }), t.length ? t.reduce((n, a) => n + a, 0) / t.length : null;
  }
  function we() {
    re();
  }
  we(), setInterval(() => {
    we(), Je(), Fe();
  }, 10 * 60 * 1e3);
  function ti(e) {
    const t = {}, n = {};
    v.history.forEach((r) => {
      const d = G(new Date(r.start));
      t[d] = (t[d] || 0) + (r.seconds || 0) / 60, n[d] = (n[d] || 0) + 1;
    });
    const a = /* @__PURE__ */ new Date(), o = G(a), s = [];
    for (let r = e - 1; r >= 0; r--) {
      const d = new Date(a.getFullYear(), a.getMonth(), a.getDate() - r), u = G(d), f = v.checkins.filter((l) => l.date === u), x = (l) => {
        const c = f.map((y) => y[l]).filter(Boolean);
        return c.length ? c.reduce((y, F) => y + F, 0) / c.length : null;
      };
      s.push({
        key: u,
        date: d,
        minutes: Math.round(t[u] || 0),
        moves: n[u] || 0,
        steps: u === o && Jn() != null ? Jn() : rn[u] ?? null,
        mood: x("mood"),
        energy: x("energy")
      });
    }
    return s;
  }
  function la(e) {
    let t = e.length - 1;
    e[t] && !e[t].minutes && t--;
    let n = 0;
    for (; t >= 0 && e[t].minutes > 0; )
      n++, t--;
    return n;
  }
  function ni(e) {
    return e.length ? e.reduce((t, n) => t + n, 0) / e.length : null;
  }
  function ii(e, t, n) {
    const a = e.filter((r) => r[n] != null), o = a.filter(t).map((r) => r[n]), s = a.filter((r) => !t(r)).map((r) => r[n]);
    return o.length < 3 || s.length < 3 ? null : { on: ni(o), off: ni(s), onDays: o.length, offDays: s.length };
  }
  function da(e, t) {
    const n = e[e.length - 1], a = e.slice(-7).reduce((s, r) => s + r.minutes, 0), o = e.reduce((s, r) => s + r.minutes, 0);
    return n.minutes ? { big: n.minutes + " min", line: "already moved today. Why stop now?" } : t > 1 ? { big: t + " days", line: "in a row. Keep the streak alive today." } : a ? { big: a + " min", line: "moved in the last 7 days. One more move?" } : o ? { big: o + " min", line: "moved this month. Pick it back up today." } : { big: "Day one", line: "Every move counts. Start with one today." };
  }
  function ai(e, t, n, a) {
    const o = e.on - e.off, s = te(t, e.on), r = te(t, e.off);
    return Math.abs(o) < 5 ? "Whether you " + L(n) + " or not, your " + t + " is about the same (" + L(s) + ")." : s === r ? "Your " + t + " is <strong>a little " + (o > 0 ? "higher" : "lower") + "</strong> on days you " + L(n) + " (both around " + L(s) + ")." : "On days you " + L(n) + ", your " + t + " averages <strong>" + L(s) + "</strong>, vs " + L(r) + " on days you " + L(a) + ".";
  }
  function re() {
    const e = i("insightCard");
    if (!e) return;
    const t = ti(30), n = la(t), a = da(t, n), o = t.reduce((p, R) => p + R.minutes, 0), s = /* @__PURE__ */ new Date(), r = G(new Date(s.getFullYear(), s.getMonth(), s.getDate() - (s.getDay() + 6) % 7)), d = t.filter((p) => p.key >= r).reduce((p, R) => p + R.minutes, 0), u = t.reduce((p, R) => p + R.moves, 0), f = t[t.length - 1], x = (p) => p.minutes > 0, l = [];
    ["energy", "mood"].forEach((p) => {
      const R = ii(t, x, p);
      R && l.push(ai(R, p, "do a move", "don't"));
    });
    const c = t.filter((p) => p.steps != null && (p.mood != null || p.energy != null));
    if (c.length >= 6) {
      const p = c.map((O) => O.steps).sort((O, Rt) => O - Rt), R = p[Math.floor(p.length / 2)], dt = (O) => O.steps != null && O.steps >= R, Ue = ii(t.filter((O) => O.steps != null), dt, "energy");
      Ue && l.push(ai(Ue, "energy", "walk " + Ft(Math.round(R / 100) * 100) + "+ steps", "walk less"));
    }
    const y = l.map((p) => '<div class="insightLine">' + p + "</div>").join(""), F = t.slice(-14), H = Math.max(10, ...F.map((p) => p.minutes)), T = Math.max(1, ...F.map((p) => p.steps || 0)), z = F.some((p) => p.steps != null), q = F.map((p, R) => {
      const dt = R === F.length - 1, Ue = new Intl.DateTimeFormat(void 0, { weekday: "narrow" }).format(p.date), O = new Intl.DateTimeFormat(void 0, { weekday: "short", day: "numeric", month: "short" }).format(p.date) + " · " + p.minutes + " min" + (p.steps != null ? " · " + Ft(p.steps) + " steps" : "");
      return '<div class="day' + (dt ? " today" : "") + '" title="' + L(O) + '"><div class="dayBars">' + (z ? '<span class="stepBar" style="height:' + (p.steps ? Math.max(3, p.steps / T * 100) : 0) + '%"></span>' : "") + '<span class="moveBar" style="height:' + (p.minutes ? Math.max(4, p.minutes / H * 100) : 0) + '%"></span></div><div class="dayFace">' + ei(sa(p.key)) + '</div><div class="dayLabel">' + L(Ue) + "</div></div>";
    }).join("");
    e.innerHTML = '<div class="eyebrow insightEyebrow">Movement &amp; you</div><div class="insightTop"><div class="insightHero"><div class="insightBig">' + L(a.big) + '</div><div class="weekCopy">' + L(a.line) + '</div></div><div class="insightStats"><div class="weekChip"><div class="weekChipTop"><strong>This week</strong></div><div class="weekChipTime">' + d + ' min</div><div class="weekChipMeta">moved</div></div><div class="weekChip"><div class="weekChipTop"><strong>Streak</strong></div><div class="weekChipTime">' + n + " day" + (n === 1 ? "" : "s") + '</div><div class="weekChipMeta">in a row</div></div><div class="weekChip"><div class="weekChipTop"><strong>30 days</strong></div><div class="weekChipTime">' + o + ' min</div><div class="weekChipMeta">' + u + " move" + (u === 1 ? "" : "s") + "</div></div>" + (z ? '<div class="weekChip"><div class="weekChipTop"><strong>Today</strong></div><div class="weekChipTime">' + (f.steps != null ? Ft(f.steps) : "—") + '</div><div class="weekChipMeta">steps</div></div>' : "") + '</div></div><div class="insightBody' + (y ? "" : " chartOnly") + '">' + (y ? '<div class="insightLines">' + y + "</div>" : "") + '<div class="insightChart"><div class="dayStrip">' + q + '</div><div class="chartLegend"><span><i class="lgMove"></i>Move minutes</span>' + (z ? '<span><i class="lgSteps"></i>Steps</span>' : "") + "<span>" + ei(80) + "Feeling</span></div></div></div>";
  }
  const oi = i("tvNav");
  g.fullscreenSupported || (oi.hidden = !0), oi.addEventListener("click", () => g.toggleFullscreen()), h.addEventListener("keydown", (e) => {
    !Se.workout.classList.contains("active") || et.classList.contains("active") || e.target.closest("input,select,textarea,.holdEnd") || (e.key === "MediaPlayPause" || e.key === " " && !e.target.closest("button") ? (e.preventDefault(), ue.click()) : e.key === "MediaTrackNext" ? (e.preventDefault(), i("skipExercise").click()) : e.key === "MediaTrackPrevious" && (e.preventDefault(), i("restartSegment").click()));
  }), [M, k, C].forEach((e) => e.addEventListener("input", () => {
    const t = w[S];
    t && (t.total = Number(M.value), t.work = Number(k.value), t.rest = Number(C.value)), W();
  })), mn.addEventListener("click", nn), hn.addEventListener("click", () => zt("settings")), i("settingsBack").addEventListener("click", nn), ue.addEventListener("click", () => {
    _ = !_, X && rt(_ ? "paused" : "resumed"), ue.textContent = _ ? "Resume" : "Pause", i("app").classList.toggle("paused", _);
  }), W(), xt(), Je(), re(), i("healthHelpOpen").addEventListener("click", () => h.querySelector(".tab[data-pane=helpPane]").click()), Et(i("resetStats"), i("resetStatsFill"), 1500, () => {
    v.history = [], v.checkins = [], Ke = "";
    try {
      localStorage.removeItem("move-assistant-dismissed");
    } catch {
    }
    Ce(), we(), Je(), xt(), re(), Fe(), V("Stats reset");
  });
  const ri = i("morningTime"), si = i("eveningTime"), sn = i("checkinAutoOpen");
  ri.value = Ee().morning, si.value = Ee().evening, sn.classList.toggle("on", D().checkinAutoOpen !== !1), [["morningTime", ri], ["eveningTime", si]].forEach(([e, t]) => t.addEventListener("change", () => {
    t.value && ($(e, t.value), Fe());
  })), sn.addEventListener("click", () => {
    const e = D().checkinAutoOpen === !1;
    sn.classList.toggle("on", e), $("checkinAutoOpen", e);
  }), setTimeout(Ut, 800);
  let ln = null;
  function ca() {
    ln || (ln = setTimeout(() => {
      ln = null, re();
    }, 3e4));
  }
  return {
    updateStates(e) {
      ye = e, Kn(e), Qn(e), Date.now() - Xn > 60 * 60 * 1e3 && $n(), ca();
    },
    applyRemoteData(e) {
      if (e && (Array.isArray(e.history) && (v.history = e.history, we()), Array.isArray(e.history) && re(), Array.isArray(e.checkins) && (v.checkins = e.checkins.map(yn), Fe(), xt(), Je(), we(), re()), e.profiles && !Y.classList.contains("open") && !X)) {
        const t = xn(e);
        Object.keys(w).forEach((n) => delete w[n]), Object.assign(w, t.profiles), v.order = t.order, w[S] || (S = v.order[0]), kn(), ee(S);
      }
    },
    suspend() {
      K = !1;
    },
    resume() {
      K || (K = !0, Ie || (Ie = requestAnimationFrame(Tt)), He || (He = requestAnimationFrame(Mt)), lt(h.querySelector(".tab.active"), !1));
    }
  };
}
const ha = "0.5.0", dn = "move_assistant", fa = "move_assistant";
class va extends HTMLElement {
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
    g.innerHTML = `<style>${ua}</style>${ga}`;
    const i = g.getElementById("app");
    i.style.opacity = "0";
    let B = null;
    try {
      const E = await this._hass.callWS({
        type: "frontend/get_user_data",
        key: dn
      });
      B = (E == null ? void 0 : E.value) ?? null;
    } catch {
    }
    this._lastSaved = JSON.stringify(B), this._app = ma(g, {
      data: B,
      save: (E) => this._save(E),
      fire: (E, K) => this._fire(E, K),
      ws: (E) => this._hass.callWS(E),
      setLight: (E) => this.classList.toggle("lightBody", E),
      fullscreenSupported: !!(this.requestFullscreen || this.webkitRequestFullscreen),
      toggleFullscreen: () => this._toggleFullscreen()
    }), this._lastStates = this._hass.states, this._app.updateStates(this._hass.states), this.isConnected || this._app.suspend(), i.style.transition = "opacity .2s ease", i.style.opacity = "", this._subscribe();
  }
  _subscribe() {
    var i;
    const g = (i = this._hass) == null ? void 0 : i.connection;
    g != null && g.subscribeMessage && g.subscribeMessage(
      (B) => {
        var K;
        const E = JSON.stringify((B == null ? void 0 : B.value) ?? null);
        E === this._lastSaved || E === this._pendingJson || (this._lastSaved = E, (K = this._app) == null || K.applyRemoteData(B.value));
      },
      { type: "frontend/subscribe_user_data", key: dn }
    ).catch(() => {
    });
  }
  _save(g) {
    this._pendingJson = JSON.stringify(g), clearTimeout(this._saveTimer), this._saveTimer = setTimeout(async () => {
      const i = this._pendingJson;
      try {
        await this._hass.callWS({
          type: "frontend/set_user_data",
          key: dn,
          value: JSON.parse(i)
        }), this._lastSaved = i;
      } catch {
        this._toast("Couldn't save to Home Assistant");
      }
    }, 400);
  }
  _fire(g, i = {}) {
    var B, E;
    ((B = this._config) == null ? void 0 : B.events) !== !1 && ((E = this._hass) == null || E.callWS({
      type: "fire_event",
      event_type: fa,
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
    var B;
    const i = (B = this.shadowRoot) == null ? void 0 : B.getElementById("toast");
    i && (i.textContent = g, i.classList.add("show"), setTimeout(() => i.classList.remove("show"), 2600));
  }
}
customElements.get("move-assistant-card") || (customElements.define("move-assistant-card", va), window.customCards = window.customCards || [], window.customCards.push({
  type: "move-assistant-card",
  name: "Move Assistant",
  description: "Guided movement timer with your Home Assistant activity data.",
  preview: !1
}), console.info(`%c MOVE ASSISTANT %c ${ha} `, "background:#D0FF00;color:#090909;font-weight:700", ""));
