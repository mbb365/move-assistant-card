const Jo = ':host{display:flex;flex-direction:column;min-height:calc(100dvh - var(--header-height,0px));position:relative;background:#050505;color-scheme:dark;--bg:#050505;--page:#090909;--card:#1d1d1d;--card2:#242424;--tile:#252525;--tile-2:#292929;--row:#2a2a2a;--row-rest:#22252a;--raised:#282828;--chip:#292929;--bar-track:#292929;--control:#171717;--control-2:#1b1b1b;--sunken:#171717;--input:#151515;--track:#151515;--modal:#202020;--icon-bg:#313131;--text:#f4f4f4;--soft:#cfcfcf;--muted:#969696;--accent-text:var(--secondary);--line:#3f3f3f;--lineb:#252525;--field-line:#3f3f3f;--divider:#343434;--border-hover:#5a5a5a;--bright:#efefef;--on-bright:#090909;--switch-off:#444;--knob-off:#ddd;--slider-fill:#efefef;--segment:#3f3f3f;--segment-fill:#efefef;--timer:#0d0d0d;--timer-fill:#f2f2f2;--stage:#151515;--hover:rgba(255,255,255,.06);--wash:rgba(255,255,255,.04);--wash-2:rgba(255,255,255,.08);--wash-3:rgba(255,255,255,.12);--wash-4:rgba(255,255,255,.22);--today-ring:rgba(255,255,255,.35);--dot-empty:#555;--scroll-thumb:#4a4a4a;--checkin-due:#232323;--danger:#ff7777;--danger-bg:#311313;--danger-line:#8c2e2e;--danger-fill:#D53D3D;--scrim:rgba(0,0,0,.66);--lift:rgba(0,0,0,.5);--r:36px;--gap:20px}*{box-sizing:border-box}#app{color:var(--text);font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif;transition:background .25s ease,color .25s ease;-webkit-font-smoothing:antialiased}[hidden]{display:none!important}button,input{font:inherit}#app{flex:1;display:flex;flex-direction:column;width:100%;margin:0;padding:0;background:var(--bg);text-align:left}.shell{flex:1;display:flex;flex-direction:column;position:relative;width:100%;background:var(--page);border-radius:0;overflow:visible;transition:background .28s ease}#app.resting .shell{background:#1f7a4d}#app.paused .shell{background:var(--primary)}#app.light.paused .shell{background:color-mix(in srgb,var(--primary) 55%,white)}#app.light{--bg:#EEEDED;--page:#EEEDED;--card:#FFFFFF;--card2:#F7F6F6;--tile:#F4F3F3;--tile-2:#F4F3F3;--row:#F4F3F3;--row-rest:#ECF1F6;--raised:#F4F3F3;--chip:#EEEDED;--bar-track:#EEEDED;--control:#FFFFFF;--control-2:#FFFFFF;--sunken:#F4F3F3;--input:#FFFFFF;--track:#E3E1E1;--modal:#FFFFFF;--icon-bg:var(--primary-tint);--text:#222222;--soft:#3F3F3F;--muted:#6B6B6B;--accent-text:#5B7A00;--line:#FFFFFF;--lineb:#FFFFFF;--field-line:#DAD8D8;--divider:#E6E4E4;--border-hover:#C9C7C7;--bright:#222222;--on-bright:#FFFFFF;--switch-off:#D8D6D6;--knob-off:#FFFFFF;--slider-fill:color-mix(in srgb,var(--primary) 45%,white);--segment:#D3D1D1;--segment-fill:var(--primary);--timer:#FFFFFF;--timer-fill:color-mix(in srgb,var(--primary) 30%,white);--stage:#FFFFFF;--hover:rgba(0,0,0,.05);--wash:rgba(0,0,0,.04);--wash-2:rgba(0,0,0,.06);--wash-3:rgba(0,0,0,.1);--wash-4:rgba(0,0,0,.14);--today-ring:rgba(0,0,0,.25);--dot-empty:#bbb;--scroll-thumb:#CFCDCD;--checkin-due:#FFFFFF;--danger:#C62F2F;--danger-bg:#F5DEDE;--danger-line:#E3A0A0;--scrim:rgba(20,20,20,.32);--lift:rgba(0,0,0,.16)}#app.light .activityRow:nth-child(1) .activityRowIcon{background:var(--primary-tint);color:var(--primary-ink)!important}#app.light .activityRow:nth-child(2) .activityRowIcon{background:#ffe8c8;color:#c8741f!important}#app.light .activityRow:nth-child(3) .activityRowIcon{background:#d9f4e6;color:#2e8b63!important}#app.light .activityIcon{background:#e8e1ff;color:#7859c9!important}#app.light .energyBtn:hover,#app.light .energyBtn:focus-visible,#app.light .energyBtn.selected{background:color-mix(in srgb,var(--feeling-color) 34%,white);color:#222!important}:host(.lightBody){background:#eeeded;color-scheme:light}#app.light.resting .shell{background:#7dbb98}.view{display:none;width:100%;max-width:1184px;margin:0 auto;padding:22px 22px 76.8px}.view.active{display:block;flex:1 0 auto}.card,.panel,.tile{position:relative;background:var(--card);border-radius:36px;padding:22px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.grid{display:grid;grid-template-columns:repeat(12,minmax(0,1fr));gap:16px}.eyebrow{text-transform:uppercase;color:var(--muted)}.sub{color:var(--muted);margin-top:6.4px}.pill,.primary,.navBtn,.tab,.back,.hideBtn,.addBtn{cursor:pointer}.pill{min-height:0;padding:3.2px 0;border:0;border-radius:0;background:transparent;color:var(--text);text-decoration-line:underline;text-decoration-thickness:.8px;text-underline-offset:3.2px}.tab,.back{border-radius:799.2px;min-height:41.6px;padding:0 16px;background:var(--control);border:.32px solid var(--line);color:var(--text)}.primary{border-radius:799.2px;min-height:41.6px;padding:0 17.6px;border:0;background:var(--bright);color:var(--on-bright)}.topbar{display:flex;justify-content:space-between;gap:16px;align-items:flex-start;margin-bottom:19.2px}.activityCard,.weekly{grid-column:span 6}.energySection{grid-column:span 12;margin-top:16px}.activityCard,.weekly{min-height:288px}.wellness{width:100%}.sourceTag{display:inline-flex;margin-top:11.2px;padding:6.4px 9.6px;border-radius:799.2px;background:var(--chip);color:var(--soft)}.workoutFooter{display:flex;justify-content:space-between;align-items:end;gap:22.4px;flex-wrap:wrap;margin-top:22.4px;width:100%;box-sizing:border-box}.workoutGallery{grid-column:span 12;display:flex;gap:16px;height:288px;overflow:hidden}.workoutPanel{position:relative;height:288px;flex:1 1 72px;min-width:70.4px;background:var(--card);border-radius:28.8px;padding:22.4px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);overflow:hidden;box-sizing:border-box;transition:flex .32s ease;cursor:pointer}.workoutPanel.active{flex:7 1 0;min-width:0;cursor:default}.workoutPanel.addPanel{flex:0 0 73.6px;min-width:73.6px;display:flex;align-items:center;justify-content:center;padding:14.4px}.workoutPanel{--edge-proximity:0;--cursor-angle:45deg;--edge-sensitivity:36;--color-sensitivity:56;--cone-spread:25;--fill-opacity:.18;--glow-color:hsl(199deg 97% 68% / 100%);--glow-color-60:hsl(199deg 97% 68% / 60%);--glow-color-50:hsl(199deg 97% 68% / 50%);--glow-color-40:hsl(199deg 97% 68% / 40%);--glow-color-30:hsl(199deg 97% 68% / 30%);--glow-color-20:hsl(199deg 97% 68% / 20%);--glow-color-10:hsl(199deg 97% 68% / 10%);--gradient-one:radial-gradient(at 80% 55%,#c084fc 0px,transparent 50%);--gradient-two:radial-gradient(at 69% 34%,#f472b6 0px,transparent 50%);--gradient-three:radial-gradient(at 8% 6%,#38bdf8 0px,transparent 50%);--gradient-four:radial-gradient(at 41% 38%,#c084fc 0px,transparent 50%);--gradient-five:radial-gradient(at 86% 85%,#f472b6 0px,transparent 50%);--gradient-six:radial-gradient(at 82% 18%,#38bdf8 0px,transparent 50%);--gradient-seven:radial-gradient(at 51% 4%,#f472b6 0px,transparent 50%);isolation:isolate}.workoutPanel:before,.workoutPanel:after,.workoutPanel>.edgeLight{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:28.8px;pointer-events:none;transition:opacity .18s ease-out}.workoutPanel:before{z-index:2;border:.8px solid transparent;background:linear-gradient(var(--card) 0 100%) padding-box,linear-gradient(#fff0 0,#fff0) border-box,var(--gradient-one) border-box,var(--gradient-two) border-box,var(--gradient-three) border-box,var(--gradient-four) border-box,var(--gradient-five) border-box,var(--gradient-six) border-box,var(--gradient-seven) border-box;opacity:clamp(0,calc(.72 * (var(--edge-proximity) - var(--color-sensitivity)) / (100 - var(--color-sensitivity))),.72);-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,black calc(var(--cone-spread) * 1%),transparent calc((var(--cone-spread) + 15) * 1%),transparent calc((100 - var(--cone-spread) - 15) * 1%),black calc((100 - var(--cone-spread)) * 1%));mask-image:conic-gradient(from var(--cursor-angle) at center,black calc(var(--cone-spread) * 1%),transparent calc((var(--cone-spread) + 15) * 1%),transparent calc((100 - var(--cone-spread) - 15) * 1%),black calc((100 - var(--cone-spread)) * 1%))}.workoutPanel:after{z-index:1;border:.8px solid transparent;background:var(--gradient-one) padding-box,var(--gradient-two) padding-box,var(--gradient-three) padding-box,var(--gradient-four) padding-box,var(--gradient-five) padding-box,var(--gradient-six) padding-box,var(--gradient-seven) padding-box;opacity:clamp(0,calc(var(--fill-opacity) * (var(--edge-proximity) - var(--color-sensitivity)) / (100 - var(--color-sensitivity))),.18);mix-blend-mode:soft-light;-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,transparent 5%,black 15%,black 85%,transparent 95%);mask-image:conic-gradient(from var(--cursor-angle) at center,transparent 5%,black 15%,black 85%,transparent 95%)}.workoutPanel>.edgeLight{top:-19.2px;right:-19.2px;bottom:-19.2px;left:-19.2px;z-index:3;opacity:clamp(0,calc(.62 * (var(--edge-proximity) - var(--edge-sensitivity)) / (100 - var(--edge-sensitivity))),.62);mix-blend-mode:plus-lighter;-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,black 2.5%,transparent 10%,transparent 90%,black 97.5%);mask-image:conic-gradient(from var(--cursor-angle) at center,black 2.5%,transparent 10%,transparent 90%,black 97.5%)}.workoutPanel>.edgeLight:before{content:"";position:absolute;top:19.2px;right:19.2px;bottom:19.2px;left:19.2px;border-radius:28.8px;box-shadow:inset 0 0 0 .8px var(--glow-color-60),inset 0 0 2.4px 0 var(--glow-color-40),inset 0 0 6.4px 0 var(--glow-color-30),inset 0 0 12.8px 0 var(--glow-color-20),0 0 2.4px 0 var(--glow-color-40),0 0 6.4px 0 var(--glow-color-30),0 0 12.8px 0 var(--glow-color-20),0 0 22.4px 1.6px var(--glow-color-10)}.workoutPanel:not(.borderGlowActive):before,.workoutPanel:not(.borderGlowActive):after,.workoutPanel:not(.borderGlowActive)>.edgeLight{opacity:0;transition:opacity .35s ease-out}#app.light .workoutPanel{--glow-color:hsl(199deg 97% 48% / 100%);--glow-color-50:hsl(199deg 97% 48% / 50%);--glow-color-40:hsl(199deg 97% 48% / 40%);--glow-color-30:hsl(199deg 97% 48% / 30%);--glow-color-20:hsl(199deg 97% 48% / 20%);--glow-color-10:hsl(199deg 97% 48% / 10%)}.workoutPanel:not(.active):not(.addPanel) .panelExpanded{opacity:0;filter:blur(8px);pointer-events:none}.workoutPanel:not(.active):not(.addPanel) .panelCollapsed{opacity:1;filter:blur(0)}.workoutPanel.active .panelExpanded{opacity:1;filter:blur(0);pointer-events:auto}.workoutPanel.active .panelCollapsed{opacity:0;filter:blur(6.4px);pointer-events:none}.panelExpanded{position:relative;z-index:4;width:100%;height:100%;min-width:0;box-sizing:border-box;display:flex;flex-direction:column;justify-content:space-between;transition:opacity .22s ease,filter .22s ease}.panelCollapsed{position:absolute;top:0;right:0;bottom:0;left:0;z-index:4;display:flex;align-items:center;justify-content:center;opacity:0;filter:blur(6.4px);transition:opacity .22s ease,filter .22s ease}.panelCollapsedText{writing-mode:vertical-rl;transform:rotate(180deg);white-space:nowrap}.workoutPanelTop{display:flex;justify-content:space-between;align-items:flex-start;gap:22.4px;width:100%;min-width:0;box-sizing:border-box}.workoutPanelActions{display:flex;gap:22.4px;flex-wrap:wrap;align-items:center;justify-content:flex-end;margin-left:auto}.startWorkoutBtn{background:var(--primary)!important;color:#090909!important}.startWorkoutBtn:hover{filter:brightness(1.04)}.addPanelPlus{position:relative;z-index:4;font-size:27.2px;line-height:1}.addPanelLabel{position:absolute;z-index:4;bottom:16px;writing-mode:vertical-rl;transform:rotate(180deg);color:var(--muted)}@media (max-height:820px) and (min-width:621px){.modalStatic{padding:17.6px 22.4px}.timeTile{min-height:124.8px}}@media (max-width:900px){.weekCopy{white-space:normal}.workoutGallery{overflow-x:auto;scroll-snap-type:x mandatory;padding-bottom:3.2px}.workoutPanel,.workoutPanel.active{height:288px;flex:0 0 min(68.8vw,544px);min-width:min(68.8vw,544px);scroll-snap-align:start}.workoutPanel.addPanel{flex-basis:80px;min-width:80px}.panelCollapsed{display:none}}.moveActions{display:flex;gap:22.4px;flex-wrap:wrap}.energyFloat{padding:22.4px;background:transparent;border:0}.energyScale{display:grid;grid-template-columns:repeat(6,minmax(0,1fr));gap:9.6px;margin-top:17.6px}.energyBtn{--feeling-color:#8f8f8f;--feeling-glow:rgba(255,255,255,.14);position:relative;isolation:isolate;overflow:hidden;width:100%;min-height:43.2px;padding:0 9.6px;white-space:nowrap;border-radius:12.8px;background:var(--raised);border:.32px solid var(--line);color:var(--text);cursor:pointer;transition:color .18s ease,border-color .18s ease,background .18s ease}.energyBtn>span{position:relative;z-index:2}.energyBtn:before{content:"";position:absolute;top:-18%;right:-18%;bottom:-18%;left:-18%;z-index:-2;opacity:0;background:radial-gradient(ellipse at var(--feel-x,50%) var(--feel-y,50%),color-mix(in srgb,var(--feeling-color) 88%,transparent) 0%,color-mix(in srgb,var(--feeling-color) 54%,transparent) 34%,transparent 72%);transform:scale(.82) skew(-3deg);filter:saturate(1.08) blur(.8px);transition:opacity .18s ease,transform .28s cubic-bezier(.2,.8,.2,1)}.energyBtn:after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;z-index:-1;opacity:0;pointer-events:none;background:repeating-linear-gradient(to bottom,rgba(255,255,255,.07) 0,rgba(255,255,255,.07) .8px,transparent .8px,transparent 3.2px),linear-gradient(90deg,transparent 0%,color-mix(in srgb,var(--feeling-color) 34%,transparent) var(--feel-x,50%),transparent 100%);mix-blend-mode:screen}.energyBtn:hover:before,.energyBtn:focus-visible:before,.energyBtn.selected:before{opacity:.92;transform:translate(var(--feel-shift-x,0px),var(--feel-shift-y,0px)) scale(1.08) skew(2deg);animation:feelingWarp 1.45s ease-in-out infinite alternate}.energyBtn:hover:after,.energyBtn:focus-visible:after,.energyBtn.selected:after{opacity:.55;animation:feelingScan .9s linear infinite}.energyBtn:hover,.energyBtn:focus-visible,.energyBtn.selected{background:color-mix(in srgb,var(--feeling-color) 42%,#171717);border-color:color-mix(in srgb,var(--feeling-color) 72%,#ffffff 10%);color:#f4f4f4}.energyBtn.selected{box-shadow:inset 0 0 0 .8px color-mix(in srgb,var(--feeling-color) 58%,transparent),0 0 14.4px color-mix(in srgb,var(--feeling-color) 24%,transparent)}.energyBtn[data-energy=Drained]{--feeling-color:#6E63A8}.energyBtn[data-energy=Low]{--feeling-color:#5878A8}.energyBtn[data-energy=Okay]{--feeling-color:#6F8B8A}.energyBtn[data-energy=Good]{--feeling-color:#5F9B72}.energyBtn[data-energy=Energised]{--feeling-color:#D5A53E}.energyBtn[data-energy=Great]{--feeling-color:#D56B54}@keyframes feelingWarp{0%{transform:scale(1.03) skew(-2deg) translate(-1.5%);filter:saturate(1.02) blur(.8px)}50%{transform:scale(1.12) skew(1deg) translate(1%);filter:saturate(1.22) blur(1.5px)}to{transform:scale(1.06) skew(3deg) translate(-.5%);filter:saturate(1.1) blur(.6px)}}@keyframes feelingScan{0%{background-position:0 0,-80% 0}to{background-position:0 8px,180% 0}}@media (prefers-reduced-motion: reduce){.energyBtn:before,.energyBtn:after{animation:none!important}}.energyHistory{display:grid;gap:6.4px;margin-top:9.6px}.energyLog{display:flex;justify-content:space-between;gap:9.6px;padding:8px 9.6px;border-radius:16px;background:var(--tile)}.energyLog span:last-child{color:var(--muted)}.tempoExperiment{margin-top:14.4px;padding-top:16px;border-top:.32px solid var(--line)}.tempoExperimentHead{display:flex;justify-content:space-between;align-items:flex-start;gap:16px;margin-bottom:12.8px}.tempoEstimate{white-space:nowrap}.tempoQuad{position:relative;width:min(288px,100%);aspect-ratio:1/1;border-radius:28.8px;background:#ffffff06;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);overflow:hidden;touch-action:none;cursor:crosshair}.tempoCross{position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none;background:linear-gradient(to right,transparent calc(50% - .4px),rgba(255,255,255,.12) 50%,transparent calc(50% + .4px)),linear-gradient(to bottom,transparent calc(50% - .4px),rgba(255,255,255,.12) 50%,transparent calc(50% + .4px))}.tempoDot{position:absolute;left:50%;top:50%;width:17.6px;height:17.6px;border-radius:50%;background:var(--text);transform:translate(-50%,-50%);pointer-events:none;box-shadow:0 0 0 4.8px #ffffff12}.tempoPole{position:absolute;pointer-events:none;color:var(--muted)}.tempoFast{top:9.6px;left:50%;transform:translate(-50%)}.tempoSlow{bottom:9.6px;left:50%;transform:translate(-50%)}.tempoHard{right:9.6px;top:50%;transform:translateY(-50%)}.tempoLow{left:9.6px;top:50%;transform:translateY(-50%)}.tempoReadout{margin-top:9.6px;color:var(--muted)}.tempoRevealRow{margin-top:11.2px}.tempoRevealBtn{color:var(--muted);text-decoration-color:var(--muted)}.editTempoExperiment{margin-top:11.2px}.editTempoExperiment[hidden]{display:none}.testingZone{position:relative;overflow:hidden;border-radius:22.4px;background:#202226;border:.8px solid #4a4f58;box-shadow:none;--text:#d6d9df;--soft:#c7ccd5;--muted:#9ea5b0;--line:#4a4f58;--lineb:#4a4f58;--field-line:#4a4f58;color:var(--text)}.testingZoneInner{position:relative;padding:19.2px;background:linear-gradient(rgba(176,186,199,.045) .8px,transparent .8px),linear-gradient(90deg,rgba(176,186,199,.045) .8px,transparent .8px),#202226;background-size:16px 16px}.testingZoneTitleBlock{max-width:608px;margin-bottom:19.2px}.testingZoneTitleRow{display:flex;justify-content:space-between;align-items:center;gap:16px}.testingZoneTitleRow strong{color:#d6d9df}.testingZone .tempoEstimate{color:#aeb4bf}.testingZoneExplanation{margin:8px 0 0;color:#9ea5b0;text-align:left}.testingZoneLayout{display:grid;grid-template-columns:minmax(224px,288px) minmax(0,1fr);grid-template-areas:"controller feedback";gap:25.6px;align-items:start}.testingFeedbackForm{grid-area:feedback;display:grid;gap:14.4px;min-width:0;padding:16px;border:.32px solid var(--line);border-radius:16px;background:#252525}.testingFeedbackHeading{color:#d6d9df}.testingFeedbackField{display:grid;gap:6.4px;color:#9ea5b0}.testingFeedbackField select,.testingFeedbackField textarea{width:100%;border:.32px solid var(--line);background:#171717;color:#d6d9df;border-radius:11.2px;padding:8px 9.6px;font:inherit}.testingFeedbackField textarea{resize:vertical;min-height:65.6px}.testingRating{display:grid;grid-template-columns:repeat(5,1fr);gap:4.8px}.testingRating button{min-height:30.4px;border-radius:9.6px;border:.32px solid var(--line);background:#171717;color:#c7ccd5;cursor:pointer}.testingRating button.selected{border-color:#c7ccd5;background:#343434}.testingFeedbackSubmit{justify-self:start;min-height:33.6px;padding:0 12.8px;border-radius:11.2px;border:0;background:#ffffffe0;color:#111;cursor:pointer}.testingZoneControllerWrap{grid-area:controller;display:flex;flex-direction:column;align-items:center;justify-content:flex-start}.tempoQuadFrame{width:min(256px,100%);aspect-ratio:1/1;padding:0;background:linear-gradient(rgba(176,186,199,.075) .8px,transparent .8px),linear-gradient(90deg,rgba(176,186,199,.075) .8px,transparent .8px),#202226;background-size:16px 16px,16px 16px,auto;border-radius:16px}.testingZone .tempoQuad{width:100%;height:100%;border-radius:16px;background:#202226;border:.8px solid #5a606a;box-shadow:none}.testingZone .tempoCross{background:linear-gradient(to right,transparent calc(50% - .4px),rgba(176,186,199,.2) 50%,transparent calc(50% + .4px)),linear-gradient(to bottom,transparent calc(50% - .4px),rgba(176,186,199,.2) 50%,transparent calc(50% + .4px))}.testingZone .tempoDot{width:14.4px;height:14.4px;background:transparent;border:.8px solid #c4cad4;box-shadow:0 0 0 3.2px #c4cad40d}.testingZone .tempoPole{color:#8e96a2}.testingZone .tempoReadout{width:min(256px,100%);color:#9ea5b0;text-align:center;margin-top:9.6px}.testingZone button,.testingZone input,.testingZone select,.testingZone textarea{transition:opacity .14s ease,border-color .14s ease,color .14s ease,background .14s ease}.testingZone button:hover,.testingZone button:focus-visible{filter:none;opacity:.88}@media (max-width:900px){.testingZoneLayout{grid-template-columns:1fr;grid-template-areas:"controller" "feedback"}}.activityHeader{display:flex;align-items:center;gap:11.2px;margin-bottom:16px}.activityIcon{width:35.2px;height:35.2px;border-radius:13.6px;background:var(--icon-bg);display:grid;place-items:center;font-size:16px}.activityRows{display:grid;gap:9.6px}.activityRow{display:grid;grid-template-columns:43.2px minmax(0,1fr);align-items:center;gap:11.2px;background:var(--tile-2);border-radius:24px;padding:12px 14px}.activityRowIcon{width:43.2px;height:43.2px;border-radius:16px;background:var(--icon-bg);display:grid;place-items:center;font-size:16px}.activityRowMeta{color:var(--soft);margin-top:2.4px}.toast{position:absolute;right:20.8px;top:20.8px;z-index:60;background:var(--bright);color:var(--on-bright);border-radius:799.2px;padding:8.8px 12.8px;opacity:0;transform:translateY(-6.4px);pointer-events:none;transition:opacity .18s ease,transform .18s ease}.toast.show{opacity:1;transform:none}.weekHero{display:block}.weekCopy{color:var(--muted);margin-top:9.6px;max-width:none;white-space:nowrap}.weekChips{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:8px;margin-top:19.2px}.weekChip{background:var(--tile-2);border-radius:12.8px;min-height:60.8px;padding:9.6px 11.2px;display:flex;flex-direction:column;justify-content:space-between;gap:6.4px}.weekChipTop{display:flex;justify-content:space-between;align-items:center;gap:6.4px}.weekChipMeta{color:var(--muted)}.weekTick{font-size:11.2px;font-weight:800;line-height:1}.weekChip.total{background:var(--card2)}.workoutSurface{position:relative;overflow:hidden;isolation:isolate}.workoutContent{position:relative;z-index:2}.pixelTrailCanvas{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;z-index:1;pointer-events:none}#app.light .pixelTrailCanvas{opacity:.46}.sessionHead{display:flex;justify-content:space-between;align-items:flex-start;gap:16px}.sessionActions{display:flex;gap:22.4px;align-items:center;flex-wrap:wrap;justify-content:flex-end}.holdEnd{position:relative;overflow:hidden;min-width:110.4px;min-height:41.6px;padding:0 16px;border-radius:799.2px;border:.32px solid var(--line);background:var(--control);text-decoration:none;user-select:none;-webkit-user-select:none;touch-action:none}.holdEndFill{position:absolute;inset:0 auto 0 0;width:0;background:var(--bright);pointer-events:none}.holdEndLabel{position:relative;z-index:1;mix-blend-mode:difference;color:#fff}.holdEnd.holding{border-color:var(--muted)}.exerciseTitle{margin-top:4.8px;color:var(--accent-text)}.meta{color:var(--muted);margin-top:4.8px}.progress{height:46.4px;padding:0;background:transparent;border-radius:17.6px;display:flex;gap:3.2px;margin-top:19.2px;overflow:hidden}.progressSegment{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:0;padding:0;display:block;flex:1;min-width:0;background:var(--segment);border-radius:17.6px;position:relative;overflow:hidden;cursor:default}.progressSegment:after{content:"";position:absolute;inset:0 auto 0 0;width:0;background:var(--segment-fill);transition:width .2s linear}.progressSegment.done{background:transparent;opacity:0;pointer-events:none}.progressSegment.done:after{display:none}.progressSegment.active:after{width:var(--segment-progress,0%)}#app.resting .progressSegment:not(.done):not(.active),#app.paused .progressSegment:not(.done):not(.active){background:#fff}.progressSegment.rewindable{cursor:pointer}.progressSegment.rewindable:hover{filter:brightness(1.08)}.progressSegment:focus-visible{outline:1.6px solid var(--primary);outline-offset:-2.4px}.workGrid{display:grid;grid-template-columns:minmax(0,2fr) minmax(240px,1fr);gap:16px;margin-top:16px}.timerCard,.movementCard,.nextCard{position:relative;border-radius:28.8px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.timerCard{min-height:344px;background:var(--timer);overflow:hidden}.fill{position:absolute;inset:0 auto 0 0;width:100%;background:var(--timer-fill);transition:width .2s linear}.digits{position:absolute;top:0;right:0;bottom:0;left:0;display:flex;align-items:center;justify-content:center;font-size:clamp(152px,22.4vw,312px);font-weight:850;letter-spacing:-.11em;color:#fff;mix-blend-mode:difference;font-variant-numeric:tabular-nums}.movementCard{background:var(--stage);min-height:344px;display:grid;place-items:center;padding:22.4px}.movementMark{font-size:16px;font-weight:760;color:var(--soft);text-align:center}.movementCard{overflow:hidden}.movementRippleCanvas{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;z-index:0}.movementMark{position:relative;z-index:2}.nextCard{background:var(--card);padding:22.4px;display:flex;justify-content:space-between;align-items:center;gap:16px;min-height:116.8px}.nextIcon{width:52.8px;height:52.8px;border-radius:19.2px;background:var(--icon-bg);display:grid;place-items:center;font-size:20.8px;flex:0 0 auto}.sectionLabel{margin:0 0 8px 22.4px}.moveSection{grid-column:span 12}.moveSection .workoutGallery{width:100%}.nextWrap{margin-top:16px}.nextLabel{margin:0 0 8px 22.4px}.nextCard{background:var(--card);padding:22.4px;display:flex;justify-content:space-between;align-items:center;gap:22.4px;min-height:86.4px;border-radius:28.8px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.nextMain{display:flex;align-items:center;gap:14.4px;min-width:0}.nextIcon{width:43.2px;height:43.2px;border-radius:12.8px;background:var(--icon-bg);display:grid;place-items:center;font-size:16px;flex:0 0 auto}.sessionControlRow{display:flex;justify-content:flex-end;gap:22.4px;align-items:center;margin-top:16px}.nextActions{display:flex;gap:22.4px;align-items:center;flex:0 0 auto}.skipBtn{min-width:120px;min-height:41.6px;padding:0 14.4px;border:.8px solid var(--line);background:transparent;color:var(--text);text-decoration:none}.pause{min-width:120px;min-height:41.6px;padding:0 14.4px}#app.light .nextIcon{background:#ffe6ef;color:#bd4b7a!important}.upcomingList{display:grid;gap:9.6px;margin-top:9.6px}.upcomingCard{--future-opacity:1;display:flex;align-items:center;justify-content:space-between;gap:22.4px;min-height:86.4px;padding:22.4px;border-radius:28.8px;background:var(--card);border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);opacity:var(--future-opacity);transition:opacity .22s ease}.upcomingCard:nth-child(-n+3){--future-opacity:1}.upcomingCard:nth-child(4){--future-opacity:.72}.upcomingCard:nth-child(5){--future-opacity:.48}.upcomingCard:nth-child(6){--future-opacity:.3}.upcomingCard:nth-child(n+7){--future-opacity:.16}.upcomingCard.sessionHidden{--future-opacity:.24!important;filter:saturate(.15)}.upcomingCard.sessionHidden .upcomingName{text-decoration:line-through}.upcomingCard.sessionHidden .upcomingIcon{opacity:.45}.upcomingCard.sessionHidden .upcomingMeta{opacity:.55}.upcomingInfo{display:flex;align-items:center;gap:14.4px;min-width:0}.upcomingIcon{width:43.2px;height:43.2px;flex:0 0 auto;border-radius:12.8px;background:var(--icon-bg);display:grid;place-items:center;font-size:16px}.upcomingMeta{color:var(--muted);margin-top:4px}.skipSessionBtn{flex:0 0 auto;min-height:41.6px;padding:0 14.4px;border:.8px solid var(--line);background:transparent;color:var(--text)}#app.light .upcomingIcon{background:var(--primary-tint);color:var(--primary-ink)!important}@media (max-width:900px){.weekCopy{white-space:normal}.nextCard{align-items:flex-start;flex-direction:column}.sessionControlRow{width:100%}.skipBtn,.pause{flex:1;min-width:0}.upcomingCard{align-items:flex-start;flex-direction:column}.skipSessionBtn{width:100%}}.countdown{display:none;position:fixed;top:0;right:0;bottom:0;left:0;width:100vw;height:100dvh;background:var(--page);z-index:300;align-items:center;justify-content:center;flex-direction:column;text-align:center;overflow:hidden}.countdown.active{display:flex}.pixelCanvas{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;display:block;z-index:1}.countdown:before{content:"";position:absolute;top:0;right:0;bottom:0;left:0;background:radial-gradient(circle at center,color-mix(in srgb,var(--primary) 16%,transparent),transparent 58%);pointer-events:none}.countNum{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);z-index:3}.countNum{font-size:clamp(144px,25.6vw,344px);font-weight:850;line-height:.75;letter-spacing:-.1em}.modalBackdrop{display:none;position:fixed;top:0;right:0;bottom:0;left:0;width:100vw;height:100dvh;z-index:145;background:var(--scrim);padding:28px;box-sizing:border-box;align-items:center;justify-content:center}.modalBackdrop.open{display:flex}.modal{width:min(1184px,100%);height:100%;max-width:1184px;max-height:none;overflow:hidden;background:var(--modal);border-radius:28.8px;padding:0;display:flex;flex-direction:column;box-sizing:border-box;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.modalStatic{flex:0 0 auto;padding:22.4px;background:var(--modal);border-bottom:.32px solid var(--divider)}.modalHead{display:flex;justify-content:space-between;align-items:flex-start;gap:16px;margin-bottom:12.8px}.modalHeaderActions{display:flex;gap:22.4px;align-items:center;flex:0 0 auto}.modalHead h2{margin:2.4px 0 0}.editNameRow{display:grid;gap:6.4px;margin-bottom:11.2px}.editNameLabel{color:var(--muted)}.editNameInput{min-height:46.4px;border-radius:17.6px;border:.32px solid var(--field-line);background:var(--input);color:var(--text);padding:0 14.4px}.timeTiles{display:grid;grid-auto-flow:column;grid-auto-columns:minmax(0,1fr);gap:11.2px;margin-bottom:11.2px}.timeTile{background:var(--tile);min-height:148.8px;padding:16px;display:flex;flex-direction:column;justify-content:space-between}.timeHeader{display:flex;align-items:center;gap:14.4px}.timeIcon{width:46.4px;height:46.4px;border-radius:16px;background:var(--icon-bg);display:grid;place-items:center;flex:0 0 auto;font-size:17.6px;font-weight:760}.timeCopy{min-width:0}.timeValue{color:var(--soft);margin-top:5.6px}.rangeTrack{height:46.4px;border-radius:17.6px;background:var(--track);overflow:hidden;position:relative;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.rangeFill{position:absolute;inset:0 auto 0 0;background:var(--slider-fill);border-radius:17.6px 0 0 17.6px}.rangeInput{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;opacity:0;cursor:pointer}.exerciseScroller{min-height:0;overflow-y:auto;padding:3.2px 16px 17.6px 22.4px;border-top:.16px solid var(--divider);scrollbar-gutter:stable}.exerciseScroller::-webkit-scrollbar{width:6.4px}.exerciseScroller::-webkit-scrollbar-track{background:transparent}.exerciseScroller::-webkit-scrollbar-thumb{background:var(--scroll-thumb);border-radius:799.2px}.sectionTitle{text-transform:uppercase;color:var(--muted);margin:14.4px 0 8px}.moveList{display:grid;gap:8px}.moveRow{display:flex;justify-content:space-between;align-items:center;gap:22.4px;background:var(--row);border-radius:20.8px;padding:22.4px}.moveRow.hidden{opacity:.46}.moveRow.hidden .moveItemName{text-decoration:line-through}.moveMeta{color:var(--muted);margin-top:4px}.hideBtn{border-radius:799.2px;min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text)}.removeBtn{position:relative;overflow:hidden;border-radius:799.2px;min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);cursor:pointer}.removeFill{position:absolute;inset:0 auto 0 0;width:0;background:var(--danger-fill);pointer-events:none;transition:width 0s linear}.addRow{display:grid;grid-template-columns:1fr auto;gap:8px;margin-top:14.4px}.addInput{min-height:41.6px;border-radius:799.2px;border:.32px solid var(--field-line);background:var(--input);color:var(--text);padding:0 14.4px}.addBtn{border-radius:799.2px;min-height:41.6px;padding:0 14.4px;border:0;background:var(--bright);color:var(--on-bright)}.routineSummary{margin-top:14.4px;background:var(--sunken);border-radius:20.8px;padding:12.8px 14.4px;color:var(--soft)}.settingsHeader{display:flex;align-items:center;gap:12.8px;margin-bottom:24px}.back{width:46.4px;padding:0;font-size:24px}.tabs.rubberTabs{position:relative;display:inline-flex;gap:0;padding:3.2px;margin-bottom:17.6px;border-radius:12.8px;background:var(--control);border:.32px solid var(--line);overflow:hidden}.rubberIndicator{position:absolute;top:3.2px;left:3.2px;height:calc(100% - 6.4px);width:0;border-radius:12.8px;background:var(--bright);transition:left .34s cubic-bezier(.2,1.35,.4,1),width .34s cubic-bezier(.2,1.35,.4,1),transform .18s ease;transform-origin:center;z-index:0}.tabs.rubberTabs .tab{position:relative;z-index:1;min-height:41.6px;padding:0 16px;border:0;background:transparent;color:var(--text)}.tabs.rubberTabs .tab.active{color:var(--on-bright)}.settingsPane{display:none}.settingsPane.active{display:block}.integrationList,.toggleList{display:grid;gap:9.6px}.integration,.toggleRow{display:flex;justify-content:space-between;align-items:center;gap:14.4px;background:var(--raised);border-radius:22.4px;padding:14.4px 16px}.status{color:var(--muted);margin-top:3.2px}.note{color:var(--muted);line-height:1.5;max-width:688px}.switch{position:relative;width:46.4px;height:27.2px;border-radius:799.2px;background:var(--switch-off);border:.32px solid var(--field-line);flex:0 0 auto;cursor:pointer}.switch:after{content:"";position:absolute;width:20.8px;height:20.8px;border-radius:799.2px;top:2.4px;left:2.4px;background:var(--knob-off);transition:left .18s ease}.switch.on{background:var(--bright)}.switch.on:after{left:22.4px;background:var(--on-bright)}.themeChoice{display:flex;gap:9.6px;flex-wrap:wrap;align-items:center;margin:0}.themeBtn{min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);cursor:pointer}.themeBtn.active{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.settingsSelect{min-width:96px;min-height:32px;padding:0 27.2px 0 9.6px;border-radius:12.8px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);font:inherit}.motionControlRow{align-items:center}.motionRangeWrap{display:flex;align-items:center;justify-content:flex-end;gap:9.6px;min-width:184px}.motionRangeWrap input{width:128px}.motionRangeWrap span{color:var(--muted);min-width:51.2px;text-align:right}.dangerText{color:var(--danger)}.confirmBackdrop{display:none;position:fixed;top:0;right:0;bottom:0;left:0;z-index:80;padding:22.4px;background:var(--scrim);align-items:center;justify-content:center}.confirmBackdrop.open{display:flex}.confirmCard{width:min(448px,100%);background:var(--card);border-radius:28.8px;padding:22.4px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.confirmActions{display:flex;justify-content:flex-end;align-items:center;gap:22.4px;margin-top:22.4px}.holdDelete{position:relative;overflow:hidden;min-width:88px;min-height:41.6px;padding:0 17.6px;border:.8px solid var(--danger-line);border-radius:12.8px;background:var(--danger-bg);color:var(--text);cursor:pointer}.holdDeleteFill{position:absolute;inset:0 auto 0 0;width:0;background:var(--danger-fill);pointer-events:none}.holdDeleteLabel{position:relative;z-index:1;color:var(--text)}.holdDelete.holding .holdDeleteLabel,.removeBtn.holding .removeLabel{color:#fff}.bottomNav{position:sticky;bottom:22.4px;display:flex;gap:22.4px;z-index:100;width:max-content;margin:-65.6px 0 0 22.4px}.navBtn{width:43.2px;height:43.2px;padding:0;border-radius:16px;background:var(--control);border:.32px solid var(--line);color:var(--text)}.navBtn.active{background:var(--bright);color:var(--on-bright)}@media (max-width:900px){.weekCopy{white-space:normal}.moveOption,.addMoveCard{flex-basis:144px}.weekHero{display:block}.grid{grid-template-columns:1fr}.moveSection,.activityCard,.weekly,.energySection{grid-column:auto}.workGrid{grid-template-columns:1fr}.timerCard,.movementCard{min-height:256px}.weekChips{grid-template-columns:repeat(4,minmax(0,1fr))}.timeTiles{grid-auto-flow:row;grid-template-columns:1fr}}@media (max-width:620px){.modal{width:100%;height:100%;max-height:100%}#app{padding:0}.shell{border-radius:0}.view{padding:14.4px 14.4px 75.2px}.card,.timerCard,.movementCard,.nextCard,.modal,.tile{border-radius:24px}.timerCard{min-height:224px}.digits{font-size:144px}.weekChips{grid-template-columns:repeat(2,minmax(0,1fr))}.modalBackdrop{padding:9.6px}.modal{height:100%}.modalStatic{padding:14.4px}.exerciseScroller{padding:3.2px 9.6px 14.4px 14.4px}.addRow{grid-template-columns:1fr}}button,.primary,.tab,.back,.navBtn,.themeBtn,.energyBtn,.hideBtn,.addBtn,.removeBtn,.skipBtn,.holdEnd,.switch,.editNameInput,.addInput,.rangeTrack,.progress,.progressSegment{border-radius:12px!important}.card,.panel,.tile,.workoutPanel,.timerCard,.movementCard,.nextCard,.modal{border-radius:36px}.movementCreatorLaunch{display:flex;gap:9.6px;align-items:center;margin:3.2px 0 14.4px}.movementCreatorOpen,.restAddBtn{min-height:35.2px;padding:0 12.8px;border-radius:12.8px;cursor:pointer}.movementCreatorOpen{border:0;background:var(--bright);color:var(--on-bright)}.restAddBtn{border:.32px solid var(--field-line);background:var(--control-2);color:var(--text)}.movementCreator{position:relative;margin:0 0 14.4px;padding:19.2px 22.4px;border-radius:22.4px;background:var(--card);border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.movementCreator[hidden]{display:none}.movementCreatorHead{display:flex;align-items:center;justify-content:space-between;gap:16px;margin-bottom:17.6px}.movementCreatorHead h3{margin:0}.movementCreatorClose{position:static}.movementCreatorFields{display:grid;grid-template-columns:minmax(0,1.45fr) minmax(0,.85fr);gap:16px 19.2px}.movementCreatorFields[hidden]{display:none!important}.movementCreatorFields>label{display:grid;gap:6.4px;min-width:0;color:var(--text)}.movementTimingRow{grid-column:1/-1;display:grid;grid-template-columns:minmax(240px,352px) minmax(208px,1fr) auto;gap:17.6px;align-items:end}.durationStack{display:grid;gap:6.4px;color:var(--text)}.creatorDurationRow{display:grid;grid-template-columns:minmax(96px,1fr) minmax(104px,1fr);gap:12.8px;align-items:center}.creatorNumber{width:100%;min-width:0}.creatorUnitSelect{min-height:41.6px;width:100%;padding:0 11.2px;border-radius:12.8px;border:.32px solid var(--field-line);background:var(--input);color:var(--text);font:inherit}.globalTimingToggle{display:flex!important;align-items:center;gap:8px!important;min-height:41.6px;cursor:pointer;color:var(--text)!important;white-space:nowrap}.globalTimingToggle input{position:absolute;opacity:0;pointer-events:none}.toggleTrack{position:relative;width:38.4px;height:22.4px;border-radius:799.2px;background:var(--switch-off);border:.32px solid var(--field-line);flex:0 0 auto;transition:background .16s ease}.toggleThumb{position:absolute;width:17.6px;height:17.6px;top:1.6px;left:1.6px;border-radius:50%;background:var(--knob-off);transition:left .16s ease,background .16s ease}.globalTimingToggle input:checked+.toggleTrack{background:var(--bright)}.globalTimingToggle input:checked+.toggleTrack .toggleThumb{left:17.6px;background:var(--on-bright)}.toggleLabel{color:var(--soft)}.creatorAddButton{min-width:97.6px;min-height:41.6px;align-self:end}@media (max-width:900px){.movementCreatorFields{grid-template-columns:1fr}.movementTimingRow{grid-column:auto;grid-template-columns:1fr;align-items:stretch}.globalTimingToggle{min-height:35.2px}.creatorAddButton{width:100%}}.moveRow.restItem{background:var(--row-rest)}.moveKindBadge{display:inline-flex;margin-left:6.4px;padding:2.4px 5.6px;border:.8px solid var(--field-line);border-radius:799.2px;color:var(--muted);vertical-align:middle}@media (max-width:900px){.movementCreatorFields,.movementCreatorFields.restFields{grid-template-columns:1fr;padding-right:0}.movementCreatorClose{position:static;margin-left:auto;display:block;margin-bottom:12.8px}}.createMoveOptions{margin:0 0 14.4px;padding:14.4px;border-radius:19.2px;background:var(--card2);border:.32px solid var(--line)}.createMoveOptions[hidden]{display:none}.createOptionLabel{text-transform:uppercase;color:var(--muted);margin-bottom:8px}.createPresetChoice{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}.createPresetBtn{min-height:60.8px;padding:11.2px 12.8px;border-radius:14.4px;border:.8px solid var(--field-line);background:transparent;color:var(--text);text-align:left;cursor:pointer}.createPresetBtn strong{display:block}.createPresetBtn span{display:block;color:var(--muted);margin-top:3.2px}.createPresetBtn.active{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.createPresetBtn.active span{color:var(--on-bright);opacity:.68}.createExtras{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px;margin-top:9.6px}.createExtraToggle{display:flex;align-items:flex-start;gap:8px;padding:9.6px 11.2px;border:.8px solid var(--field-line);border-radius:14.4px;cursor:pointer}.createExtraToggle input{margin-top:2.4px}.createExtraToggle span{display:grid;gap:2.4px}.createExtraToggle small{color:var(--muted)}.creatorUnitSelect{min-height:41.6px;padding:0 9.6px;border-radius:12.8px;border:.32px solid var(--field-line);background:var(--input);color:var(--text);font:inherit}.autoRestSummary{display:inline-flex;align-items:center;gap:6.4px;margin-left:6.4px;color:var(--muted)}@media (max-width:900px){.createPresetChoice,.createExtras{grid-template-columns:1fr}}.movementDurationField{display:grid;gap:6.4px}.movementTimingHead{display:flex;align-items:center;justify-content:space-between;gap:9.6px;color:var(--muted)}.globalTimingToggle{display:inline-flex!important;grid-template-columns:none!important;align-items:center;gap:5.6px!important;color:var(--text)!important;white-space:nowrap}.globalTimingToggle input{margin:0}.globalTimingValue{min-height:41.6px;display:flex;align-items:center;padding:0 11.2px;border-radius:12.8px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--muted)}.movementTypeBtn:disabled{opacity:.32;cursor:not-allowed}.createFlow{display:grid;gap:9.6px;padding:3.2px 0 8px}.createFlow[hidden]{display:none}.createStep{border-radius:22.4px;background:var(--tile);border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);overflow:hidden}.createStepHeader{width:100%;min-height:57.6px;padding:14.4px 17.6px;border:0;background:transparent;color:var(--text);display:flex;align-items:center;justify-content:space-between;gap:19.2px;text-align:left;cursor:pointer}.createStepHeader:disabled{cursor:not-allowed;opacity:.42}.createStepIdentity{display:flex;align-items:center;gap:9.6px}.createStepNumber{width:22.4px;height:22.4px;border-radius:799.2px;display:grid;place-items:center;border:.32px solid var(--line);color:var(--muted)}.createStepSummary{min-width:0;color:var(--muted);text-align:right}.createStepBody{display:none;padding:0 14.4px 14.4px}.createStep.active .createStepBody{display:block}.createStep.active .createStepHeader{border-bottom:.32px solid var(--divider)}.createStepSlot{display:grid;gap:11.2px}.createStepFooter{display:flex;justify-content:flex-end;margin-top:14.4px}.createStepFooter .primary:disabled{opacity:.35;cursor:not-allowed}.modal.createMode .movementTimingRow{display:none}.modal.createMode .movementCreator{margin-bottom:8px}.modal.createMode .movementCreatorFields{grid-template-columns:minmax(0,1.4fr) minmax(0,1fr)}.modal.createMode .movementCreatorFields.restFields{grid-template-columns:1fr}.modal.createMode .movementCreatorActions{margin-top:14.4px}.modal.createMode .movementCreatorLaunch{margin-top:0}.modal.createMode .sectionTitle{margin-top:9.6px}.modal.createMode .modalStatic{padding-bottom:14.4px}.modal:not(.createMode) .createFlow{display:none!important}#app.resting .movementCard{background:#ffffff0e}#app.resting .movementRippleCanvas{opacity:1}#app.light.resting .movementCard{background:#ffffff38}.nextCard .skipSessionBtn{margin-left:auto}.modal:not(.createMode) .movementCreatorLaunch{margin-top:25.6px}.testingFeedbackThanks{grid-area:feedback;min-height:176px;padding:19.2px;border:.32px solid var(--line);border-radius:16px;background:#252525;display:flex;flex-direction:column;justify-content:center;align-items:flex-start;gap:6.4px}.testingFeedbackThanks[hidden]{display:none}.testingFeedbackThanks strong{color:#f0f0f0}.testingFeedbackThanks p{margin:0;color:#9ea5b0}.testingFeedbackThanks a{color:#d6d9df;text-underline-offset:2.4px}:host(:fullscreen){overflow:auto;width:100vw;height:100vh}.entitySelect{max-width:min(256px,36.8vw);text-overflow:ellipsis}.integration .status code{padding:.8px 4.8px;border-radius:4.8px;background:var(--wash-2)}.integration .pill[disabled]{cursor:default;opacity:.7}#app :focus{outline:none}#app :focus-visible{outline:2.4px solid var(--primary);outline-offset:2.4px}#app .workoutPanel:focus-visible{outline-offset:-2.4px}@media (max-width:620px){.bottomNav{margin-left:14.4px}}.shell:has(.countdown.active) .bottomNav{visibility:hidden}@media (max-width:900px){.workoutPanel:not(.active):not(.addPanel) .panelExpanded{opacity:1;filter:none;pointer-events:auto}}.grid>*{min-width:0}.energyBtn[data-level="1"]{--feeling-color:#6E63A8}.energyBtn[data-level="2"]{--feeling-color:#5878A8}.energyBtn[data-level="3"]{--feeling-color:#6F8B8A}.energyBtn[data-level="4"]{--feeling-color:#5F9B72}.energyBtn[data-level="5"]{--feeling-color:#D5A53E}.energyBtn[data-level="6"]{--feeling-color:#D56B54}.checkinQuestion+.checkinQuestion{margin-top:28.8px}.checkinStatus{margin-top:17.6px;color:var(--muted)}.checkinStatus.done{color:var(--text)}.checkinStatus.done:before{content:"✓  "}.insightSection{grid-column:span 12;margin-top:16px}.insightCard{display:grid;gap:22.4px}.insightTop{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:22.4px;align-items:end}.insightStats{display:grid;grid-auto-flow:column;grid-auto-columns:minmax(104px,1fr);gap:8px}.insightBody{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1.3fr);gap:22.4px;align-items:end}.insightLines{display:grid;gap:9.6px}.insightLine.muted{color:var(--muted)}.dayStrip{display:grid;grid-template-columns:repeat(14,minmax(0,1fr));gap:4.8px;align-items:end}.day{display:grid;gap:6.4px;justify-items:center}.dayBars{position:relative;width:100%;height:96px;border-radius:9.6px;background:var(--wash);overflow:hidden}.stepBar,.moveBar{position:absolute;bottom:0;border-radius:8px}.stepBar{left:0;right:0;background:var(--wash-3)}.moveBar{left:22%;right:22%;background:var(--primary)}.day.today .dayBars{box-shadow:inset 0 0 0 .8px var(--today-ring)}.dayDots{display:flex;gap:2.4px}.dayDot{width:6.4px;height:6.4px;border-radius:50%}.dayDot.empty{box-shadow:inset 0 0 0 .8px var(--dot-empty)}.dayLabel{color:var(--muted)}.day.today .dayLabel{color:var(--text)}.chartLegend{display:flex;gap:14.4px;flex-wrap:wrap;margin-top:11.2px;color:var(--muted)}.chartLegend i{display:inline-block;width:8px;height:8px;border-radius:2.4px;margin-right:4.8px;vertical-align:-.8px}.lgMove{background:var(--primary)}.lgSteps{background:var(--wash-4)}.lgDot{background:linear-gradient(90deg,#5f9b72 50%,#d5a53e 50%);border-radius:50%!important}@media (max-width:900px){.insightSection{grid-column:auto}.insightTop,.insightBody{grid-template-columns:1fr}.insightStats{grid-auto-flow:row;grid-template-columns:repeat(auto-fit,minmax(96px,1fr))}.dayBars{height:72px}}@media (max-width:900px){.energyScale{grid-template-columns:repeat(3,minmax(0,1fr))}}.checkinBackdrop{z-index:160}.checkinCard{width:min(576px,100%)}.checkinCard .sub{margin-top:8px}.checkinSliders{display:grid;gap:11.2px;margin-top:19.2px}.checkinTile{min-height:0;gap:14.4px}.scaleEnds{display:flex;justify-content:space-between;margin-top:6.4px;color:var(--muted)}.rangeTrack:focus-within{outline:2.4px solid var(--primary);outline-offset:2.4px}.checkinTab{position:fixed;right:0;top:50%;transform:translateY(-50%);z-index:120;display:flex;flex-direction:column;align-items:center;gap:9.6px;padding:14.4px 9.6px;border:.32px solid var(--line);border-right:0;border-radius:12.8px 0 0 12.8px!important;background:var(--control);color:var(--text);cursor:pointer;transition:padding .18s ease,background .18s ease}.checkinTab:hover{padding-right:12.8px}.checkinTabIcon{font-size:16px;line-height:1}.checkinTabLabel{writing-mode:vertical-rl;transform:rotate(180deg)}.checkinBadge{position:absolute;top:8px;left:8px;width:8px;height:8px;border-radius:50%;background:var(--secondary);box-shadow:0 0 0 2.4px var(--control),0 0 9.6px color-mix(in srgb,var(--secondary) 70%,transparent);animation:checkinPulse 1.8s ease-in-out infinite}.checkinTab.due{background:var(--checkin-due)}@keyframes checkinPulse{50%{box-shadow:0 0 0 3px var(--control),0 0 2px color-mix(in srgb,var(--secondary) 20%,transparent)}}@media (prefers-reduced-motion: reduce){.checkinBadge{animation:none}}.shell:has(#workoutView.active) .checkinTab,.shell:has(.countdown.active) .checkinTab{display:none}#app.light .checkinBadge{background:var(--primary);box-shadow:0 0 0 2.4px #fff,0 0 9.6px color-mix(in srgb,var(--primary) 50%,transparent)}.feelSection{grid-column:span 12;margin-top:16px}.feelCard{display:grid;gap:19.2px}.feelTop{display:grid;grid-template-columns:minmax(0,1fr) minmax(208px,336px);gap:22.4px;align-items:end}.feelTotals{display:grid;gap:9.6px}.feelCount{color:var(--muted)}.feelDays{display:grid;grid-template-columns:repeat(7,minmax(0,1fr));gap:8px}.feelDay{min-height:0;gap:9.6px}.feelDay.future{opacity:.4}.feelDay.today{box-shadow:inset 0 0 0 .8px var(--today-ring)}.feelDots{font-size:6.4px;letter-spacing:1.6px;color:var(--muted)}.feelMeter{display:grid;gap:4.8px}.feelMeterTop{display:flex;justify-content:space-between;gap:6.4px;color:var(--muted)}.feelMeterTop span:last-child{color:var(--text)}.feelTrack{height:6.4px;border-radius:799.2px;background:var(--wash-2);overflow:hidden}.feelTrack span{display:block;height:100%;border-radius:799.2px}.feelTotals .feelTrack{height:9.6px}@media (max-width:900px){.feelSection{grid-column:auto}.feelTop{grid-template-columns:1fr}.feelDays{grid-template-columns:repeat(4,minmax(0,1fr))}}@media (max-width:620px){.feelDays{grid-template-columns:repeat(2,minmax(0,1fr))}}.checkinTile .timeHeader{align-items:center}.checkinTab:not(.due){opacity:.6}.checkinTab:not(.due):hover{opacity:1}.activityCard{grid-column:span 3}.weekly{grid-column:span 9;cursor:pointer;transition:border-color .18s ease,background .18s ease}.weekly:hover{border-color:var(--border-hover)}.weeklyExpand{position:absolute;top:19.2px;right:22.4px;font-size:16px;color:var(--muted);transition:transform .18s ease}.weekly:hover .weeklyExpand{transform:scale(1.15)}.weekChips{grid-template-columns:repeat(8,minmax(0,1fr))}.weekChipBottom{display:flex;justify-content:space-between;align-items:flex-end;gap:4.8px}.face{width:20.8px;height:20.8px;flex:0 0 auto;display:block}.face.empty circle{fill:none;stroke:var(--dot-empty);stroke-width:1.2;stroke-dasharray:2.5 2.5}.weekChip.total .face{width:24px;height:24px}.insightBackdrop{z-index:155}.insightModalCard{width:min(992px,100%);max-height:calc(100dvh - 56px);overflow:auto}.insightModalHead{display:flex;justify-content:space-between;align-items:center;margin-bottom:9.6px}.insightModalHead .sectionLabel{margin:0}.insightModalCard .dayBars{height:160px}.insightBody.chartOnly{grid-template-columns:1fr}.dayFace .face{width:17.6px;height:17.6px}.chartLegend span{display:inline-flex;align-items:center}.chartLegend .face{width:9.6px;height:9.6px;margin-right:4.8px}@media (max-width:1200px){.activityCard{grid-column:span 4}.weekly{grid-column:span 8}.weekChips{grid-template-columns:repeat(4,minmax(0,1fr))}}@media (max-width:900px){.activityCard,.weekly{grid-column:auto}.insightModalCard .dayBars{height:88px}.dayFace .face{width:12.8px;height:12.8px}}.weekChipTime{white-space:nowrap}.insightCard{grid-column:span 9;align-content:start}.insightEyebrow{margin-bottom:-11.2px}.insightStats{grid-auto-columns:minmax(88px,1fr)}.insightCard .dayBars{height:120px}@media (max-width:1200px){.insightCard{grid-column:span 8}.insightTop{grid-template-columns:1fr}}@media (max-width:900px){.insightCard{grid-column:auto}.insightCard .dayBars{height:80px}}.helpBackdrop{z-index:170}.helpCard .helpSteps,.helpCard .helpNote{max-width:688px}.helpHead{display:flex;justify-content:space-between;align-items:flex-start;gap:16px}.helpCard .note{margin:0}.helpSteps{margin:19.2px 0 0;padding:0;list-style:none;counter-reset:help;display:grid;gap:9.6px}.helpSteps li{counter-increment:help;display:grid;gap:4.8px;position:relative;padding:14.4px 16px 14.4px 52.8px;border-radius:20.8px;background:var(--tile);color:var(--muted)}.helpSteps li:before{content:counter(help);position:absolute;left:14.4px;top:12.8px;width:25.6px;height:25.6px;border-radius:9.6px;display:grid;place-items:center;background:var(--icon-bg);color:var(--text)}.helpSteps strong,.helpSteps b,.helpNote b{color:var(--text)}.helpAction{display:block;padding:8px 9.6px;border-radius:11.2px;background:var(--control-2);border:.32px solid var(--field-line);color:var(--text)}.helpCard code{padding:.8px 4.8px;border-radius:4.8px;background:var(--wash-2)}.helpNote{display:grid;gap:3.2px;margin-top:9.6px;padding:12.8px 16px;border-radius:17.6px;border:.32px solid var(--field-line);color:var(--muted)}.helpNote strong{color:var(--text)}.rowLabel{grid-column:1/-1;margin-top:16px;margin-bottom:-8px}.checkinTab{flex-direction:row;align-items:center;gap:0}.checkinTabMain{display:flex;flex-direction:column;align-items:center;gap:9.6px}.checkinPeek{display:grid;gap:3.2px;justify-items:start;white-space:nowrap;overflow:hidden;max-width:0;opacity:0;margin-right:0;transition:max-width .32s cubic-bezier(.2,1.2,.4,1),opacity .2s ease,margin-right .32s ease}.checkinTab.peek{padding-left:17.6px;opacity:1}.checkinTab.peek .checkinPeek{max-width:176px;opacity:1;margin-right:14.4px}.peekCountdown{font-size:24px;font-weight:800;letter-spacing:-.04em;line-height:1;font-variant-numeric:tabular-nums}.peekAt{color:var(--muted)}@media (prefers-reduced-motion: reduce){.checkinPeek{transition:none}}.activityRowMeta{color:var(--text);margin-top:1.6px;font-variant-numeric:tabular-nums}.feelTop{grid-template-columns:1fr}:host{--primary:#03A9F4;--secondary:#D0FF00;--primary-tint:color-mix(in srgb,var(--primary) 16%,white);--primary-ink:color-mix(in srgb,var(--primary) 75%,black);--font:Inter,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;--w-regular:400;--w-medium:500;--w-semibold:600;--w-bold:700;--w-heavy:800;--t-display:64px;--t-title:22px;--t-value:22px;--t-section:18px;--t-strong:16px;--t-body:14px;--t-caption:12px;--lh-display:1.05;--lh-title:1}@media (max-width:620px){:host{--t-display:46px;--t-title:20px;--t-value:20px;--t-section:16px;--t-strong:15px;--t-body:14px;--t-caption:11px;--lh-display:.92;--lh-title:1.05}}#app{font-family:var(--font);font-size:var(--t-body);font-weight:var(--w-regular);line-height:1.4}#app button,#app input,#app select,#app textarea{font-family:inherit}#app strong,#app b{font-weight:var(--w-bold)}.title,.workoutName,.exerciseTitle,.insightBig,.feelHeadline,.settingsTitle,.weekMetric{font-size:var(--t-display);font-weight:var(--w-heavy);line-height:var(--lh-display);letter-spacing:-.055em}.activityTitle,.confirmTitle,.modalHead h2,.paneTitle,.movementCreatorHead h3,.testingFeedbackThanks strong{font-size:var(--t-title);font-weight:var(--w-medium);font-style:italic;line-height:var(--lh-title);letter-spacing:-.03em}.paneTitle{margin:0 0 10px}.activityRowMeta,.nextName,.upcomingName,.editNameInput,.videoClock{font-size:var(--t-value);font-weight:var(--w-regular);line-height:1.15;letter-spacing:-.02em}.insightLine strong{font-weight:var(--w-bold)}.sectionLabel,.nextLabel{font-size:var(--t-section);font-weight:var(--w-regular);line-height:1.2;letter-spacing:-.01em}.activityRowName,.integration strong,.toggleRow strong,.setupSwitchRow strong,.timeLabel,.moveItemName,.weekChipTop strong,.weekChipTime,.panelCollapsedText,.activityCount,.helpSteps strong,.addGhost strong,.helpNote strong,.createStepIdentity strong,.createPresetBtn strong,.createExtraToggle strong,.testingZoneTitleRow strong,.testingFeedbackHeading,.tempoEstimate,.primary,.tab,.skipBtn,.skipSessionBtn,.hideBtn,.removeBtn,.addBtn,.themeBtn,.holdEnd,.holdDelete,.energyBtn,.movementCreatorOpen,.restAddBtn,.creatorAddButton,.testingFeedbackSubmit,.testingRating button,.toast,.checkinTabLabel{font-size:var(--t-strong);font-weight:var(--w-semibold);line-height:1.25;letter-spacing:-.01em}.sub,.meta,.note,.weekCopy,.timeValue,.addInput,.settingsSelect,.pill,.checkinStatus,.routineSummary,.helpSteps li,.helpNote,.createStepSummary,.insightLine{font-size:var(--t-body);font-weight:var(--w-regular);line-height:1.4;letter-spacing:0}.moveEditForm label>span,.addGhostText small,.eyebrow,#stepLabel,.sourceTag,.addPanelLabel,.status,.motionRangeWrap span,.moveMeta,.sectionTitle,.editNameLabel,.dayLabel,.scaleEnds,.peekAt,.upcomingMeta,.energyLog,.tempoPole,.tempoReadout,.tempoRevealBtn,.testingFeedbackField,.testingZoneExplanation,.testingFeedbackThanks p,.movementCreatorClose,.movementCreatorFields>label,.durationStack,.globalTimingToggle,.toggleLabel,.moveKindBadge,.createOptionLabel,.createPresetBtn span,.createExtraToggle small,.autoRestSummary,.fieldError,.movementTimingHead,.globalTimingValue,.createStepNumber,.weekChipMeta,.feelMeterTop,.feelCount,.chartLegend,#app code{font-size:var(--t-caption);font-weight:var(--w-regular);line-height:1.35;letter-spacing:0}.eyebrow,#stepLabel,.sectionTitle{letter-spacing:.1em}.globalTimingToggle{font-size:var(--t-caption)!important}.workoutGallery,.workoutPanel{height:340px}@media (max-width:900px){.workoutPanel,.workoutPanel.active{height:320px}}@media (max-width:900px){.workoutGallery{height:auto}.workoutPanel,.workoutPanel.active{height:auto;min-height:320px}}@media (max-width:620px){.view{padding-left:0;padding-right:0}.topbar,.settingsHeader,.sessionHead,.sessionControlRow{margin-left:16px;margin-right:16px}.tabs.rubberTabs,.sectionLabel,.rowLabel{margin-left:16px}.grid{gap:8px}.rowLabel,.feelSection{margin-top:16px}.rowLabel{margin-bottom:-4px}.sectionLabel{margin-bottom:8px}.workoutGallery{gap:8px}.workoutPanel,.workoutPanel.active{flex:0 0 100%;min-width:100%}.workoutPanel.addPanel{flex:0 0 100%;min-width:100%;min-height:120px}.card,.workoutPanel,.timerCard,.movementCard,.nextCard,.upcomingCard,.confirmCard{padding:16px}.activityRows,.insightCard,.feelCard{gap:8px}.activityRow,.weekChip{padding:10px 12px}.insightStats,.feelDays{gap:8px}.workGrid{gap:8px;margin-top:8px}.nextWrap,.sessionControlRow{margin-top:8px}.upcomingList{gap:8px}}.tabs.rubberTabs .tab{white-space:nowrap}@media (max-width:620px){.tabs.rubberTabs{display:flex;width:max-content;max-width:calc(100% - 32px);overflow-x:auto;scrollbar-width:none}.tabs.rubberTabs::-webkit-scrollbar{display:none}.tabs.rubberTabs .tab{flex:0 0 auto}}#app.light .timeIcon{background:var(--primary-tint);color:var(--primary-ink)!important}.insightCard{display:flex;flex-direction:column;gap:0}.movementReadings{grid-template-columns:repeat(3,minmax(0,1fr))}.weekBars{flex:1;display:grid;grid-template-columns:repeat(7,minmax(0,1fr));gap:9.6px;margin-top:16px;min-height:150px}.weekBar{display:grid;grid-template-rows:1fr auto;gap:8px;justify-items:center;min-height:0}.weekBarTrack{position:relative;width:100%;height:100%;min-height:110px;border-radius:24px;background:var(--bar-track);overflow:hidden}.weekBarTrack span{position:absolute;left:0;right:0;bottom:0;border-radius:24px;background:var(--primary)}.weekBar.today .weekBarTrack{box-shadow:inset 0 0 0 1.5px var(--primary)}.weekBar.today .dayLabel{color:var(--text);font-weight:var(--w-bold)}.weekBar.future{opacity:.35}#app.light .insightCard .activityRow:nth-child(1) .activityRowIcon{background:var(--primary-tint);color:var(--primary-ink)!important}@media (max-width:900px){.movementReadings{grid-template-columns:1fr}.weekBarTrack{min-height:90px}}@media (max-width:1200px) and (min-width:901px){.timeTiles{grid-auto-flow:row;grid-template-columns:repeat(2,1fr)}}#stepLabel{margin-top:9.6px}#exerciseMeta{margin-top:4px}.moveRow{justify-content:flex-start;gap:12.8px}.moveText{flex:1;min-width:0}.moveActions{display:flex;gap:6.4px;flex:0 0 auto}.dragHandle{flex:0 0 auto;display:grid;place-items:center;width:32px;height:40px;margin:-8px 0 -8px -9.6px;padding:0;border:0;border-radius:12px;background:transparent;color:var(--muted);cursor:grab;touch-action:none}.dragHandle:hover{background:var(--hover);color:var(--text)}.moveRow.dragging{box-shadow:0 10px 30px var(--lift),inset 0 0 0 1.5px var(--primary);position:relative;z-index:2}.moveRow.dragging .dragHandle{cursor:grabbing;color:var(--text)}.removeBtn:hover,.hideBtn:hover{border-color:var(--muted)}.toast{position:fixed;z-index:400;display:flex;align-items:center;gap:12.8px}.toast.withAction{pointer-events:auto}.toastAction{border:0;padding:0;background:none;color:inherit;font:inherit;text-decoration:underline;text-underline-offset:3px;cursor:pointer}.modalTop{flex:0 0 auto;padding:22px 22px 0}.modalTop .modalHead{margin-bottom:0;padding-bottom:16px}@media (min-width:901px){.modal:not(.createMode){display:grid;grid-template-columns:minmax(340px,420px) minmax(0,1fr);grid-template-rows:auto minmax(0,1fr)}.modal:not(.createMode) .modalTop{grid-column:1/-1;border-bottom:.32px solid var(--divider)}.modal:not(.createMode) .modalStatic{grid-column:1;grid-row:2;overflow-y:auto;border-bottom:0;border-right:.32px solid var(--divider)}.modal:not(.createMode) .exerciseScroller{grid-column:2;grid-row:2;border-top:0;padding-top:12px}.modal:not(.createMode) .timeTiles{grid-auto-flow:row;grid-template-columns:minmax(0,1fr)}}.timeTiles{align-items:start}.timingGroup{min-height:0;padding:0;justify-content:flex-start;gap:0}.timingGroup .timeRow{display:grid;gap:12.8px;padding:16px}.timingGroup .timeRow+.timeRow{border-top:.32px solid var(--divider)}.timingGroup .timeTotal{padding-bottom:14px}.setupSwitchRow{display:flex;align-items:center;justify-content:space-between;gap:12.8px;margin-bottom:11.2px;padding:12px 14px;border-radius:24px;background:var(--tile)}.removeLabel{position:relative;z-index:1}.removeBtn.holding{border-color:var(--danger-fill)}#deleteMoveConfirm{z-index:200}.moveRow{will-change:transform}.moveRow.dragging{box-shadow:0 14px 34px var(--lift),inset 0 0 0 1.5px var(--primary);z-index:3}.moveRow.editing{display:block;padding:16px;box-shadow:inset 0 0 0 1.5px var(--primary)}.moveEditForm{display:grid;gap:14.4px}.moveEditFields{display:grid;grid-template-columns:minmax(0,1.4fr) minmax(0,1fr);gap:12.8px}.moveEditForm label:not(.globalTimingToggle){display:grid;gap:6.4px;min-width:0}.moveEditForm .addInput{width:100%;min-width:0}.moveEditTiming{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:12.8px}.moveEditTiming .creatorDurationRow{display:grid;grid-template-columns:96px 128px;gap:9.6px}.creatorDurationRow.isDisabled{opacity:.38}.moveEditActions{display:flex;justify-content:flex-end;align-items:center;gap:22.4px}@media (max-width:620px){.moveEditFields{grid-template-columns:1fr}}#app.light .digits{mix-blend-mode:normal;color:var(--text)}.integration .status code{color:var(--soft)}#app.resting :is(.sessionHead,.nextLabel,.sessionControlRow){--muted:#f4f4f4;color:var(--text)}#app.paused :is(.sessionHead,.nextLabel,.sessionControlRow){--text:#090909;--muted:rgba(9,9,9,.8);--accent-text:#090909;--line:rgba(9,9,9,.3);color:var(--text)}#app.light:is(.resting,.paused) :is(.sessionHead,.nextLabel,.sessionControlRow){--text:#222222;--muted:rgba(34,34,34,.85);--accent-text:#222222;--line:rgba(34,34,34,.25);color:var(--text)}.moveList{display:flex;flex-direction:column}.movementCreatorOpen,.restAddBtn{display:inline-flex;align-items:center;gap:6px;touch-action:none;user-select:none;-webkit-user-select:none;cursor:grab;transition:transform .42s cubic-bezier(.34,1.46,.64,1),opacity .2s ease}.movementCreatorOpen svg,.restAddBtn svg{width:14px;height:14px;margin-left:-3px;opacity:.55;flex:0 0 auto}.movementCreatorOpen.lifting,.restAddBtn.lifting{transform:scale(.92);opacity:.4;cursor:grabbing;transition:transform .16s ease,opacity .16s ease}.addGhost{position:fixed;left:0;top:0;z-index:20;pointer-events:none;box-sizing:border-box;display:flex;align-items:center;gap:8px;padding:0 12.8px;overflow:hidden;white-space:nowrap;border-radius:12px;background:var(--bright);color:var(--on-bright);box-shadow:0 12px 30px var(--lift);will-change:transform;transition:width .4s cubic-bezier(.34,1.46,.64,1),height .4s cubic-bezier(.34,1.46,.64,1),border-radius .3s ease,padding .3s ease,background .2s ease,color .2s ease,box-shadow .25s ease,opacity .18s ease}.addGhost.rest{background:var(--control-2);color:var(--text);box-shadow:inset 0 0 0 .5px var(--field-line),0 12px 30px var(--lift)}.addGhostGrip{display:grid;place-items:center;flex:0 0 auto;opacity:.55}.addGhostGrip svg{width:14px;height:14px;transition:width .3s ease,height .3s ease}.addGhostText{display:grid;min-width:0}.addGhostText small{color:var(--muted);max-height:0;opacity:0;transition:max-height .3s ease,opacity .2s ease}.addGhost.overList{border-radius:20.8px;gap:12.8px;padding:0 22.4px 0 12.8px;background:var(--row);color:var(--text);box-shadow:inset 0 0 0 1.5px var(--primary),0 16px 36px var(--lift)}.addGhost.overList .addGhostGrip svg{width:18px;height:18px}.addGhost.overList .addGhostText small{max-height:20px;opacity:1;margin-top:4px}.addGhost.leaving{opacity:0}.dropSlot{flex:0 0 auto;height:0;margin-top:-8px;border-radius:20.8px;background:color-mix(in srgb,var(--primary) 9%,transparent);box-shadow:inset 0 0 0 1.5px color-mix(in srgb,var(--primary) 40%,transparent);transition:height .42s cubic-bezier(.34,1.46,.64,1),margin-top .42s cubic-bezier(.34,1.46,.64,1),opacity .2s ease}.dropSlot.leaving{opacity:0;transition:height .26s cubic-bezier(.4,0,.2,1),margin-top .26s cubic-bezier(.4,0,.2,1),opacity .16s ease}@media (prefers-reduced-motion: reduce){.addGhost,.dropSlot,.movementCreatorOpen,.restAddBtn{transition:none}}.exerciseScroller,.modalStatic,.createFlow{overflow-anchor:none}.videoStage{position:absolute;top:0;right:0;bottom:0;left:0;z-index:3;display:grid;place-items:center;background:#000;opacity:0;pointer-events:none;transition:opacity .3s ease}#app.videoStep .videoStage{opacity:1;pointer-events:auto}.videoStage{container-type:size}.videoFrame{width:min(100cqw,calc(100cqh * 16 / 9));aspect-ratio:16/9}.videoFrame>*{display:block;width:100%;height:100%;border:0}.videoSound{position:absolute;left:50%;bottom:16px;transform:translate(-50%);z-index:2}.videoProbe{position:fixed;left:-10000px;top:0;width:320px;height:180px;opacity:0;pointer-events:none}.digits.long{font-size:clamp(96px,12.8vw,200px)}.moveEditFields.videoFields{grid-template-columns:minmax(0,1fr)}.fieldError{margin:0;color:var(--danger)}.addInput.invalid{border-color:var(--danger)}@media (prefers-reduced-motion: reduce){.videoStage{transition:none}}.workGrid{transition:grid-template-columns .55s cubic-bezier(.2,.8,.2,1),gap .55s cubic-bezier(.2,.8,.2,1)}.timerCard{transition:opacity .25s ease}#app.videoStep .timerCard{opacity:0;min-width:0;pointer-events:none}.workGrid{container-type:inline-size}#app.videoStep .movementCard{height:min(56.25cqw,var(--theater-h,60vh));min-height:240px;padding:0}#app.videoStep .exerciseTitle{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}@media (min-width:901px){#app.videoStep .workGrid{grid-template-columns:minmax(0,0fr) minmax(240px,1fr);gap:0}}@media (max-width:900px){#app.videoStep .timerCard{display:none}#app.videoStep .movementCard{min-height:0}}.videoClock{display:none;margin-right:auto;font-variant-numeric:tabular-nums}#app.videoStep .videoClock{display:block}@media (prefers-reduced-motion: reduce){.workGrid,.timerCard{transition:none}}', $o = `<main id="app"><div class="shell">
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

  </section>
</div>
`;
function Qo(x, y) {
  const a = (e) => x.getElementById(e), H = a("workoutView"), F = a("workoutNameInput");
  let q = !0;
  const si = a("homeClock");
  function li() {
    si && (si.textContent = new Intl.DateTimeFormat(void 0, { hour: "2-digit", minute: "2-digit" }).format(/* @__PURE__ */ new Date()));
  }
  li(), setInterval(li, 15e3);
  const di = a("createFlow"), fa = a("createMovementsSlot"), ba = a("createTimingSlot"), ci = a("createFinishSlot"), xa = a("movementStepSummary"), ya = a("timingStepSummary"), wa = a("finishStepSummary"), mn = a("continueToTiming"), ka = a("continueToFinish"), Sa = a("finishMoveButton");
  let gn = !1, qt = [];
  function Ca(e) {
    !e || qt.some((t) => t.node === e) || qt.push({ node: e, parent: e.parentNode, next: e.nextSibling });
  }
  function Ot(e, t) {
    e && (Ca(e), t.appendChild(e));
  }
  function Ta() {
    [...qt].reverse().forEach(({ node: e, parent: t, next: n }) => {
      t && (n && n.parentNode === t ? t.insertBefore(e, n) : t.appendChild(e));
    }), qt = [];
  }
  function Ve(e) {
    x.querySelectorAll(".createStep").forEach((t) => {
      t.classList.toggle("active", t.dataset.createStep === e);
    }), e === "timing" && (gn = !0), Te();
  }
  function Te() {
    var u, p;
    if (!z) return;
    L[M];
    const e = V.filter((m) => !m.hidden), t = e.filter((m) => m.kind !== "rest").length, n = e.filter((m) => m.kind === "rest").length;
    xa.textContent = t ? t + " movement" + (t === 1 ? "" : "s") + (n ? " · " + n + " rest" + (n === 1 ? "" : "s") : "") : "No movements yet";
    const i = t > 0, o = x.querySelector('[data-open-step="timing"]'), r = x.querySelector('[data-open-step="finish"]');
    o.disabled = !i, mn.disabled = !i, ya.textContent = i ? He(P.value) + " · " + X(R.value) + " movement · " + X(B.value) + " rest" : "Add a movement first", r.disabled = !(i && gn);
    const s = ((F == null ? void 0 : F.value) || "").trim(), l = [];
    (u = a("includeWarmupPreset")) != null && u.checked && l.push("warm-up"), (p = a("includeCooldownPreset")) != null && p.checked && l.push("cooldown"), wa.textContent = s ? s + (l.length ? " · " + l.join(" + ") : "") : l.length ? l.join(" + ") : "Name and optional extras";
  }
  function La() {
    var g, T, C;
    di.hidden = !1, gn = !1;
    const e = x.querySelector(".editNameRow"), t = a("createMoveOptions"), n = x.querySelector(".timeTiles"), i = a("routineSummaryModal"), o = x.querySelector(".tempoRevealRow"), r = a("tempoExperiment"), s = (g = a("warmupList")) == null ? void 0 : g.closest("section"), l = a("movementCreatorLaunch"), u = a("movementCreator"), p = (T = a("strengthList")) == null ? void 0 : T.closest("section"), m = (C = a("cooldownList")) == null ? void 0 : C.closest("section");
    [s, l, u, p, m].forEach((v) => Ot(v, fa)), [t, n, i, o, r].forEach((v) => Ot(v, ba)), Ot(e, ci);
    const d = t == null ? void 0 : t.querySelector(".createExtras");
    d && Ot(d, ci), Ve("movements"), Te();
  }
  function Ea() {
    Ta(), di.hidden = !0, x.querySelectorAll(".createStep").forEach((e) => e.classList.remove("active"));
  }
  x.querySelectorAll("[data-open-step]").forEach((e) => e.addEventListener("click", () => {
    e.disabled || Ve(e.dataset.openStep);
  })), mn.addEventListener("click", () => {
    mn.disabled || Ve("timing");
  }), ka.addEventListener("click", () => Ve("finish")), Sa.addEventListener("click", () => a("saveWorkoutEdit").click());
  const je = { home: a("homeView"), workout: a("workoutView"), settings: a("settingsView") }, pi = a("homeNav"), ui = a("settingsNav");
  function vn(e) {
    Object.entries(je).forEach(([t, n]) => n.classList.toggle("active", t === e)), pi.classList.toggle("active", e === "home"), ui.classList.toggle("active", e === "settings"), e === "home" && setTimeout(Bn, 400), e === "settings" && requestAnimationFrame(() => _t(x.querySelector(".tab.active"), !1));
  }
  const P = a("totalTime"), R = a("workTime"), B = a("restTime"), Ma = a("totalOut"), mi = a("workOut"), gi = a("restOut"), Fa = a("totalFill"), Ra = a("workFill"), Ba = a("restFill"), Pe = a("roundsInput"), Aa = a("roundsFill"), Na = a("roundsOut"), Ia = a("totalLabel"), Pa = a("routineSummaryModal"), hn = [
    { id: "standing-reach", name: "Standing reach", group: "Warm-up", kind: "warmup", hidden: !1 },
    { id: "arm-circles", name: "Arm circles", group: "Warm-up", kind: "warmup", hidden: !1 },
    { id: "hip-hinge", name: "Hip hinge drill", group: "Warm-up", kind: "warmup", hidden: !1 }
  ];
  let fe = hn.map((e) => ({ ...e })), V = [
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
  const fn = [
    { id: "hip-flexor", name: "Hip flexor stretch", group: "Cooldown", kind: "cooldown", hidden: !1 },
    { id: "chest-opener", name: "Chest opener", group: "Cooldown", kind: "cooldown", hidden: !1 },
    { id: "hamstring", name: "Hamstring stretch", group: "Cooldown", kind: "cooldown", hidden: !1 },
    { id: "slow-breathing", name: "Slow breathing", group: "Cooldown", kind: "cooldown", hidden: !1 }
  ];
  let be = fn.map((e) => ({ ...e }));
  const Da = {
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
  }, E = vi(y.data), L = E.profiles;
  let M = L[E.selected] ? E.selected : E.order.find((e) => L[e]) || "kettlebell";
  function vi(e) {
    const t = e && typeof e == "object" ? JSON.parse(JSON.stringify(e)) : {}, n = t.profiles && Object.keys(t.profiles).length ? t.profiles : JSON.parse(JSON.stringify(Da)), i = (Array.isArray(t.order) ? t.order : Object.keys(n)).filter((o) => n[o]);
    return Object.keys(n).forEach((o) => {
      i.includes(o) || i.push(o);
    }), {
      v: 1,
      profiles: n,
      order: i,
      selected: t.selected || i[0],
      history: Array.isArray(t.history) ? t.history : [],
      checkins: (Array.isArray(t.checkins) ? t.checkins : Ha(t.energy)).map(hi),
      settings: { ...t.settings || {} }
    };
  }
  function Ha(e) {
    if (!Array.isArray(e)) return [];
    const t = ["Drained", "Low", "Okay", "Good", "Energised", "Great"], n = [];
    return e.forEach((i) => {
      const o = new Date(i.at);
      if (isNaN(o)) return;
      const r = o.getFullYear() + "-" + String(o.getMonth() + 1).padStart(2, "0") + "-" + String(o.getDate()).padStart(2, "0"), s = o.getHours() < 14 ? "morning" : "evening";
      if (n.some((u) => u.date === r && u.slot === s)) return;
      const l = t.indexOf(i.value) + 1;
      l > 0 && n.push({ date: r, slot: s, mood: null, energy: l, at: i.at });
    }), n;
  }
  function hi(e) {
    if (e.scale === 100) return e;
    const t = (n) => n == null ? null : Math.round((Number(n) - 1) / 5 * 100);
    return { ...e, mood: t(e.mood), energy: t(e.energy), scale: 100 };
  }
  function ce() {
    z || (E.selected = M, E.order = E.order.filter((e) => L[e] && e !== De), y.save(E));
  }
  function N() {
    return E.settings;
  }
  function pe(e) {
    const t = L[e];
    if (!t) return;
    M = e;
    const n = a("workoutNameInput");
    n && (n.value = t.name), P.value = t.total, R.value = t.work, B.value = t.rest, Pe.value = t.rounds || 1, t.customSequence ? (fe = [], be = [], V = (t.sequence || []).map((i) => ({ ...i })), wn(t.preset || "movement", !1)) : (P.min = 3, P.max = 40, P.step = 1, R.min = 20, R.max = 60, R.step = 5, B.min = 5, B.max = 30, B.step = 5, fe = (t.warmup || hn).map((i) => ({ ...i })), be = (t.cooldown || fn).map((i) => ({ ...i })), V = t.strength.map((i) => Array.isArray(i) ? (([o, r, s, l = !1]) => ({ id: o, name: r, group: s, kind: "work", hidden: !!l }))(i) : { ...i })), x.querySelectorAll(".workoutPanel[data-workout]").forEach((i) => i.classList.toggle("active", i.dataset.workout === e)), _();
  }
  function za(e, t, n) {
    const i = e.getBoundingClientRect(), o = i.width / 2, r = i.height / 2, s = t - o, l = n - r;
    let u = 1 / 0, p = 1 / 0;
    s !== 0 && (u = o / Math.abs(s)), l !== 0 && (p = r / Math.abs(l));
    const m = Math.min(Math.max(1 / Math.min(u, p), 0), 1);
    let d = Math.atan2(l, s) * (180 / Math.PI) + 90;
    return d < 0 && (d += 360), { edge: m, angle: d };
  }
  function bn(e, t, n = !1) {
    const i = e.getBoundingClientRect(), o = t.clientX - i.left, r = t.clientY - i.top, { edge: s, angle: l } = za(e, o, r), u = n ? 100 : s * 100;
    e.style.setProperty("--edge-proximity", u.toFixed(3)), e.style.setProperty("--cursor-angle", l.toFixed(3) + "deg"), e.classList.toggle("borderGlowActive", n || u >= 30);
  }
  function fi(e) {
    e.addEventListener("pointermove", (n) => bn(e, n, !1)), e.addEventListener("pointerenter", (n) => bn(e, n, !1)), e.addEventListener("pointerdown", (n) => bn(e, n, !0));
    const t = () => {
      e.classList.remove("borderGlowActive"), e.style.setProperty("--edge-proximity", "0");
    };
    e.addEventListener("pointerleave", t), e.addEventListener("pointerup", t), e.addEventListener("pointercancel", t);
  }
  fi(a("addWorkoutPanel"));
  let z = !1, De = null;
  function I(e) {
    return String(e ?? "").replace(/[&<>"']/g, (t) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[t]);
  }
  function _a(e) {
    return e.summary ? e.summary : e.customSequence ? He(e.total) + " · custom move" : He(e.total) + " · " + X(e.work) + " / " + X(e.rest) + " · warm-up + cooldown";
  }
  function xn(e, t) {
    var s;
    const n = document.createElement("article");
    n.className = "workoutPanel", n.dataset.workout = e, n.tabIndex = 0;
    const i = t.eyebrow === void 0 ? "Movement" : t.eyebrow, o = t.activityCount ?? (((s = t.sequence) == null ? void 0 : s.length) || 0);
    n.innerHTML = '<span class="edgeLight" aria-hidden="true"></span><div class="panelExpanded"><div><div class="workoutPanelTop"><div>' + (i ? '<div class="eyebrow">' + I(i) + "</div>" : "") + '<div class="workoutName">' + I(t.name) + '</div><div class="sub">' + I(_a(t)) + '</div><span class="sourceTag">' + I(t.source || "Custom move") + '</span></div><button class="pill seeWorkoutBtn" type="button">Edit</button></div></div><div class="workoutFooter"><div><strong class="activityCount">' + (o ? o + " activities" + ((t.rounds || 1) > 1 ? " × " + t.rounds : "") : "—") + '</strong></div><div class="workoutPanelActions"><button class="primary startWorkoutBtn" type="button">Start move</button></div></div></div><div class="panelCollapsed"><div class="panelCollapsedText">' + I(t.name) + "</div></div>";
    const r = a("addWorkoutPanel");
    return a("workoutGallery").insertBefore(n, r), fi(n), n.addEventListener("click", (l) => {
      l.target.closest("button") || pe(e);
    }), n.addEventListener("keydown", (l) => {
      (l.key === "Enter" || l.key === " ") && !l.target.closest("button") && (l.preventDefault(), pe(e));
    }), n.querySelector(".seeWorkoutBtn").addEventListener("click", (l) => {
      l.stopPropagation(), pe(e), Ri(!1);
    }), n.querySelector(".startWorkoutBtn").addEventListener("click", (l) => {
      l.stopPropagation(), pe(e), Lo();
    }), n;
  }
  function bi() {
    x.querySelectorAll(".workoutPanel[data-workout]").forEach((e) => e.remove()), E.order.forEach((e) => {
      L[e] && xn(e, L[e]);
    }), x.querySelectorAll(".workoutPanel[data-workout]").forEach((e) => e.classList.toggle("active", e.dataset.workout === M));
  }
  bi(), a("addWorkoutPanel").addEventListener("keydown", (e) => {
    (e.key === "Enter" || e.key === " ") && (e.preventDefault(), a("addWorkoutPanel").click());
  }), a("addWorkoutPanel").addEventListener("click", () => {
    z = !0, De = "custom-" + Date.now(), L[De] = {
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
    }, pe(De), Ri(!0);
  });
  let h = [], S = 0, $ = 0, yt = 1, Y = !1, j = null, Gt = null, Q = !1, Ye = E.settings.upcomingCount ?? "all";
  function Wt(e, t, n) {
    return (Number(e) - t) / (n - t) * 100;
  }
  function X(e) {
    const t = Math.max(0, Number(e) || 0);
    return t >= 3600 && t % 3600 === 0 ? t / 3600 + " hr" : t >= 60 && t % 60 === 0 ? t / 60 + " min" : t >= 60 ? Math.round(t / 60) + " min" : Math.round(t) + " sec";
  }
  function He(e) {
    const t = Math.max(0, Number(e) || 0);
    return t >= 60 && t % 60 === 0 ? t / 60 + " hr" : t >= 60 ? Math.floor(t / 60) + " hr " + t % 60 + " min" : t + " min";
  }
  function Vt() {
    Fa.style.width = Wt(P.value, Number(P.min), Number(P.max)) + "%", Ra.style.width = Wt(R.value, Number(R.min), Number(R.max)) + "%", Ba.style.width = Wt(B.value, Number(B.min), Number(B.max)) + "%", mi.textContent = X(R.value), gi.textContent = X(B.value);
    const e = Number(Pe.value) || 1;
    Aa.style.width = Wt(e, 1, 10) + "%", Ia.textContent = e > 1 ? "Time per round" : "Total time";
  }
  function yn(e) {
    return e.filter((t) => !t.hidden);
  }
  function wt(e) {
    const t = Math.max(0, Math.round(Number(e) || 0)), n = Math.floor(t / 3600), i = Math.floor(t % 3600 / 60), o = t % 60;
    return (n ? n + ":" + String(i).padStart(2, "0") : i) + ":" + String(o).padStart(2, "0");
  }
  function qa(e) {
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
    const o = (l) => {
      if (!l) return 0;
      if (/^\d+$/.test(l)) return Number(l);
      const u = l.match(/^(?:(\d+)h)?(?:(\d+)m)?(?:(\d+)s)?$/);
      return u ? (Number(u[1]) || 0) * 3600 + (Number(u[2]) || 0) * 60 + (Number(u[3]) || 0) : 0;
    }, r = o(t.searchParams.get("t") || t.searchParams.get("start")), s = o(t.searchParams.get("end"));
    return { id: i, start: r, end: s > r ? s : null };
  }
  function kt(e, t) {
    if (e.useVideoLength === !1) return Math.max(5, Number(e.duration) || t || 300);
    const n = Number(e.start) || 0, i = Number(e.end) || Number(e.videoDuration) || 0;
    return i > n ? Math.round(i - n) : Number(e.duration) || 300;
  }
  function jt(e, t) {
    const n = Math.max(0, Number(e) || 0);
    return Math.round(t === "hour" ? n * 3600 : t === "min" ? n * 60 : n);
  }
  function wn(e, t = !0) {
    x.querySelectorAll(".createPresetBtn").forEach((i) => i.classList.toggle("active", i.dataset.movePreset === e));
    const n = L[M];
    n && (n.preset = e), e === "work" ? (P.min = 30, P.max = 480, P.step = 30, R.min = 300, R.max = 7200, R.step = 300, B.min = 60, B.max = 1800, B.step = 60, t && (P.value = 60, R.value = 1500, B.value = 300), a("addMovementUnit").value = "min", a("addMovementDuration").value = 25, a("addRestUnit").value = "min", a("addRestDuration").value = 5) : (P.min = 3, P.max = 40, P.step = 1, R.min = 20, R.max = 60, R.step = 5, B.min = 5, B.max = 30, B.step = 5, t && (P.value = 20, R.value = 45, B.value = 15), a("addMovementUnit").value = "sec", a("addMovementDuration").value = 45, a("addRestUnit").value = "sec", a("addRestDuration").value = 30), Vt();
  }
  function kn() {
    const e = L[M];
    if (e != null && e.customSequence) {
      if (V = V.filter((t) => !t.presetRole), a("includeWarmupPreset").checked ? (V = [...hn.map((n, i) => ({ ...n, id: "preset-warm-" + i + "-" + Date.now(), kind: "work", duration: Number(R.value), presetRole: "warmup" })), ...V], e.includeWarmup = !0) : e.includeWarmup = !1, a("includeCooldownPreset").checked) {
        const t = fn.map((n, i) => ({ ...n, id: "preset-cool-" + i + "-" + Date.now(), kind: "work", duration: Number(R.value), presetRole: "cooldown" }));
        V = [...V, ...t], e.includeCooldown = !0;
      } else e.includeCooldown = !1;
      _();
    }
  }
  function Oa() {
    const e = a("upcomingCountSetting");
    if (!e) return;
    const t = Math.max(1, h.length - 1), n = Ye;
    e.innerHTML = "";
    for (let r = 1; r <= t; r++) {
      const s = document.createElement("option");
      s.value = String(r), s.textContent = String(r), e.appendChild(s);
    }
    const i = document.createElement("option");
    i.value = "all", i.textContent = "All", e.appendChild(i);
    const o = n === "all" ? "all" : String(Math.min(Number(n) || 1, t));
    e.value = o, Ye = o === "all" ? "all" : Number(o);
  }
  function _() {
    Number(P.value) * 60;
    const e = Number(R.value), t = Number(B.value), n = L[M], i = n != null && n.warmupOff ? [] : yn(fe), o = yn(V), r = yn(be);
    if (n && (n.total = Number(P.value), n.work = e, n.rest = t, n.rounds = Number(Pe.value) || 1, n.customSequence ? n.sequence = V.map((c) => ({ ...c })) : (n.strength = V.map((c) => ({ ...c })), n.warmup = fe.map((c) => ({ ...c })), n.cooldown = be.map((c) => ({ ...c })))), n != null && n.customSequence) {
      const c = o.map((w) => {
        if (w.kind === "video") return { ...w, duration: kt(w, e), rest: 0 };
        if (w.kind === "rest") {
          const U = w.useGlobalTiming === !0 ? t : Number(w.duration) || t;
          return { ...w, duration: U, rest: 0 };
        }
        const O = w.useGlobalTiming === !1 && Number(w.duration) || e;
        return { ...w, duration: O, rest: 0 };
      });
      n.autoRest && Number(n.autoRestDuration) > 0 ? (h = [], c.forEach((w, O) => {
        h.push(w);
        const U = c[O + 1];
        w.kind !== "rest" && U && U.kind !== "rest" && h.push({
          id: "auto-rest-" + O,
          name: "Rest",
          group: "Rest",
          kind: "rest",
          hidden: !1,
          duration: Number(n.autoRestDuration),
          rest: 0,
          autoGenerated: !0
        });
      })) : h = c;
    } else
      h = [...i, ...o, ...r].map((c) => c.kind === "video" ? { ...c, duration: kt(c, e), rest: 0 } : c.kind === "rest" ? { ...c, duration: c.useGlobalTiming === !0 ? t : Number(c.duration) || t, rest: 0 } : { ...c, duration: c.useGlobalTiming === !1 && Number(c.duration) || e, rest: t }), h.forEach((c, w) => {
        var O;
        ((O = h[w + 1]) == null ? void 0 : O.kind) === "rest" && (c.rest = 0);
      }), h.length && (h[h.length - 1].rest = 0);
    const s = Math.max(1, Math.min(10, Number(Pe.value) || 1)), l = h, u = l.length, p = l.reduce((c, w) => c + w.duration + w.rest, 0);
    h = [];
    for (let c = 1; c <= s; c++)
      if (l.forEach((w, O) => h.push({ ...w, id: w.id + (s > 1 ? "-r" + c : ""), round: c, roundIndex: O })), c < s && u)
        if (n != null && n.customSequence)
          h.push({ id: "round-break-" + c, name: "Rest", group: "Round " + (c + 1) + " next", kind: "rest", hidden: !1, duration: t, rest: 0, round: c, roundIndex: u, roundBreak: !0 });
        else {
          const w = h[h.length - 1];
          w.rest = t, w.roundBreakAfter = !0;
        }
    Vt();
    const m = h.reduce((c, w) => c + w.duration + w.rest, 0), d = Math.round(p / 60), g = Math.round(m / 60), T = s > 1 ? He(d) + " × " + s + " rounds (" + He(g) + ")" : He(g), C = [i.length ? "warm-up" : "", r.length ? "cooldown" : ""].filter(Boolean), v = n != null && n.customSequence ? T + " · " + u + " items" : T + " · " + X(e) + " / " + X(t) + (C.length ? " · " + C.join(" + ") : "");
    Ma.textContent = X(p);
    const b = u + " activities" + (s > 1 ? " × " + s : "");
    Na.textContent = s > 1 ? s + " rounds · " + He(g) + " total" : "1 round", n && (n.summary = v, n.activityCount = u);
    const f = x.querySelector(".workoutPanel.active .sub");
    f && (f.textContent = v), Pa.textContent = v, x.querySelectorAll(".workoutPanel.active .activityCount").forEach((c) => c.textContent = b), Vt(), ja(), Ln(), Ct(), Oa(), z && Te(), je.workout.classList.contains("active") && !j && jn();
  }
  const St = '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><g fill="currentColor"><circle cx="9" cy="6" r="1.6"/><circle cx="15" cy="6" r="1.6"/><circle cx="9" cy="12" r="1.6"/><circle cx="15" cy="12" r="1.6"/><circle cx="9" cy="18" r="1.6"/><circle cx="15" cy="18" r="1.6"/></g></svg>';
  let ee = null, re = null;
  function Ga(e) {
    return e = Math.max(1, Number(e) || 0), e >= 3600 && e % 3600 === 0 ? { value: e / 3600, unit: "hour" } : e >= 60 && e % 60 === 0 ? { value: e / 60, unit: "min" } : { value: e, unit: "sec" };
  }
  function xi(e = !1) {
    const t = x.querySelector(".moveEditForm input[data-f=url],.moveEditForm input[data-f=name]");
    t && (t.focus({ preventScroll: !0 }), e && t.select());
  }
  function Wa(e, t) {
    const n = e.kind === "rest", i = e.kind === "video", o = i ? e.useVideoLength !== !1 : n ? e.useGlobalTiming === !0 : e.useGlobalTiming !== !1, r = Number(n ? B.value : R.value), s = Ga(i ? e.useVideoLength === !1 ? e.duration : kt({ ...e, useVideoLength: !0 }) : o ? r : e.duration || r), l = i && (Number(e.videoDuration) > 0 || Number(e.end) > 0), u = i ? '<label class="moveEditWide"><span>YouTube link</span><input class="addInput" data-f="url" type="url" inputmode="url" autocomplete="off" value="' + I(e.url || "") + '" placeholder="Paste a YouTube link"></label><label><span>Name</span><input class="addInput" data-f="name" type="text" value="' + I(e.autoName ? "" : e.name) + '" placeholder="Uses the video’s title"></label><p class="fieldError" data-f="urlError" hidden>That isn’t a YouTube link. Copy it from the Share button on YouTube.</p>' : '<label><span>Name</span><input class="addInput" data-f="name" type="text" value="' + I(e.name) + '" placeholder="' + (n ? "Rest" : "Name this movement") + '"></label><label><span>Type / group</span><input class="addInput" data-f="group" type="text" value="' + I(e.group) + '" placeholder="' + (n ? "Rest" : "e.g. Glutes + legs") + '"></label>', p = i ? "Play the whole " + (Number(e.start) > 0 || Number(e.end) > 0 ? "clip" : "video") + (l ? " · " + wt(kt({ ...e, useVideoLength: !0 })) : "") : "Use global timing · " + X(r), m = document.createElement("div");
    m.className = "moveRow editing", m.dataset.index = t, m.dataset.id = e.id;
    const d = (re == null ? void 0 : re.item) === e;
    m.innerHTML = '<div class="moveEditForm"><div class="moveEditFields' + (i ? " videoFields" : "") + '">' + u + '</div><div class="moveEditTiming"><label class="globalTimingToggle"><input type="checkbox" data-f="global"' + (o ? " checked" : "") + '><span class="toggleTrack" aria-hidden="true"><span class="toggleThumb"></span></span><span class="toggleLabel">' + I(p) + '</span></label><div class="creatorDurationRow"><input class="addInput creatorNumber" data-f="dur" type="number" min="1" max="3600" step="1" value="' + s.value + '" aria-label="Duration"><select class="creatorUnitSelect" data-f="unit" aria-label="Duration unit">' + ["sec", "min", "hour"].map((f) => '<option value="' + f + '"' + (f === s.unit ? " selected" : "") + ">" + { sec: "seconds", min: "minutes", hour: "hours" }[f] + "</option>").join("") + '</select></div></div><div class="moveEditActions"><button class="pill" type="button" data-a="cancel">Cancel</button><button class="primary" type="button" data-a="save">Save</button></div></div>';
    const g = (f) => m.querySelector("[data-f=" + f + "]"), T = () => {
      const f = g("global").checked;
      g("dur").disabled = f, g("unit").disabled = f, m.querySelector(".creatorDurationRow").classList.toggle("isDisabled", f);
    };
    g("global").addEventListener("change", T), T();
    const C = () => {
      d && Yt(), ee = null, _();
    }, v = () => {
      if (i) {
        b();
        return;
      }
      const f = g("name").value.trim();
      if (!f) {
        g("name").focus();
        return;
      }
      e.name = f, e.group = g("group").value.trim() || (n ? "Rest" : "Movement");
      const c = g("global").checked;
      e.useGlobalTiming = c, c || (e.duration = Math.max(n ? 5 : 1, jt(g("dur").value, g("unit").value))), d && (re = null), ee = null, _(), W(d ? n ? "Rest added" : "Movement added" : "Movement updated");
    }, b = () => {
      const f = g("url").value.trim(), c = qa(f);
      if (!c) {
        g("urlError").hidden = !1, g("url").classList.add("invalid"), g("url").focus();
        return;
      }
      const w = c.id !== e.videoId;
      e.url = f, e.videoId = c.id, e.start = c.start, e.end = c.end, w && (e.videoDuration = null, e.videoError = null);
      const O = g("name").value.trim();
      e.autoName = !O, e.name = O || (w ? "" : e.name) || e.videoTitle || "YouTube video", e.group = "Video", e.useVideoLength = g("global").checked, e.useVideoLength || (e.duration = Math.max(5, jt(g("dur").value, g("unit").value))), d && (re = null), ee = null, _(), W(d ? "Video added" : "Video updated"), (w || !e.videoDuration || e.autoName && !e.videoTitle) && Ho(e);
    };
    return i && g("url").addEventListener("input", () => {
      g("urlError").hidden = !0, g("url").classList.remove("invalid");
    }), m.querySelector("[data-a=cancel]").addEventListener("click", C), m.querySelector("[data-a=save]").addEventListener("click", v), m.addEventListener("keydown", (f) => {
      f.key === "Escape" && (f.preventDefault(), f.stopPropagation(), C()), f.key === "Enter" && f.target.matches("input") && (f.preventDefault(), v());
    }), m;
  }
  function Sn(e, t) {
    const n = a(t);
    n.innerHTML = "", e.forEach((i, o) => {
      if (i === ee) {
        n.appendChild(Wa(i, o));
        return;
      }
      const r = document.createElement("div");
      r.className = "moveRow" + (i.hidden ? " hidden" : "") + (i.kind === "rest" ? " restItem" : "") + (i.kind === "video" ? " videoItem" : ""), r.dataset.index = o, r.dataset.id = i.id;
      const s = i.kind === "rest" ? i.useGlobalTiming === !0 ? "Global timing" : X(i.duration) : i.useGlobalTiming === !1 ? X(i.duration) : "Global timing", l = i.kind === "rest" ? '<span class="moveKindBadge">Rest</span>' : i.kind === "video" ? '<span class="moveKindBadge">Video</span>' : "", u = i.kind === "video" ? i.videoError ? "YouTube · can’t play outside YouTube" : "YouTube · " + (i.useVideoLength === !1 ? "stops after " + X(i.duration) : Number(i.videoDuration) > 0 || Number(i.end) > 0 ? wt(kt(i)) : "plays to the end") : i.group + " · " + s;
      r.innerHTML = '<button class="dragHandle" type="button" title="Drag to reorder" aria-label="Reorder ' + I(i.name) + '. Drag, or use the up and down arrow keys">' + St + '</button><div class="moveText"><div class="moveItemName">' + I(i.name) + l + '</div><div class="moveMeta">' + I(u) + '</div></div><div class="moveActions"><button class="hideBtn editBtn" type="button" aria-label="Edit ' + I(i.name) + '">Edit</button><button class="hideBtn" type="button">' + (i.hidden ? "Show" : "Hide") + '</button><button class="removeBtn" type="button" aria-label="Hold to remove ' + I(i.name) + '"><span class="removeFill"></span><span class="removeLabel">Remove</span></button></div>', r.querySelector(".editBtn").addEventListener("click", () => {
        Yt(), ee = i, _(), xi();
      }), r.querySelector(".hideBtn:not(.editBtn)").addEventListener("click", () => {
        i.hidden = !i.hidden, _();
      });
      const p = r.querySelector(".removeBtn");
      cn(p, p.querySelector(".removeFill"), 1200, () => {
        const d = e.indexOf(i);
        d < 0 || (e.splice(d, 1), _(), W("Removed " + i.name, { label: "Undo", run: () => {
          e.splice(Math.min(d, e.length), 0, i), _();
        } }));
      });
      const m = r.querySelector(".dragHandle");
      m.addEventListener("pointerdown", (d) => Va(d, r, n, e)), m.addEventListener("keydown", (d) => {
        var C, v;
        if (d.key !== "ArrowUp" && d.key !== "ArrowDown") return;
        d.preventDefault();
        const g = e.indexOf(i), T = g + (d.key === "ArrowUp" ? -1 : 1);
        T < 0 || T >= e.length || (e.splice(g, 1), e.splice(T, 0, i), _(), (v = (C = a(t).children[T]) == null ? void 0 : C.querySelector(".dragHandle")) == null || v.focus());
      }), n.appendChild(r);
    });
  }
  const Ue = () => {
    var e;
    return (e = window.matchMedia) == null ? void 0 : e.call(window, "(prefers-reduced-motion: reduce)").matches;
  }, yi = "transform .24s cubic-bezier(.2,.8,.2,1)";
  function Va(e, t, n, i) {
    if (e.button !== void 0 && e.button !== 0) return;
    e.preventDefault();
    const o = e.currentTarget;
    try {
      o.setPointerCapture(e.pointerId);
    } catch {
    }
    const r = t.closest(".exerciseScroller"), s = e.clientY - t.getBoundingClientRect().top;
    let l = e.clientY, u = null;
    t.classList.add("dragging"), t.style.transition = "none";
    const p = () => {
      t.style.transform = "";
      const v = t.getBoundingClientRect().top;
      t.style.transform = "translateY(" + (l - s - v) + "px) scale(1.015)";
    }, m = (v) => {
      const b = [...n.children].filter((c) => c !== t), f = new Map(b.map((c) => [c, c.getBoundingClientRect().top]));
      v(), !Ue() && b.forEach((c) => {
        c.style.transition = "none", c.style.transform = "";
        const w = f.get(c) - c.getBoundingClientRect().top;
        w && (c.style.transform = "translateY(" + w + "px)", c.getBoundingClientRect(), c.style.transition = yi, c.style.transform = "");
      });
    }, d = () => {
      const v = [...n.children].filter((c) => c !== t), b = l - s + t.offsetHeight / 2, f = v.find((c) => {
        const w = c.getBoundingClientRect();
        return b < w.top + w.height / 2;
      });
      f ? t.nextElementSibling !== f && m(() => n.insertBefore(t, f)) : n.lastElementChild !== t && m(() => n.appendChild(t)), p();
    }, g = () => {
      if (!r) return;
      const v = r.getBoundingClientRect(), b = 56, f = l < v.top + b ? -10 : l > v.bottom - b ? 10 : 0;
      f && (r.scrollTop += f, d());
    }, T = (v) => {
      l = v.clientY, d();
    }, C = () => {
      clearInterval(u), o.removeEventListener("pointermove", T), o.removeEventListener("pointerup", C), o.removeEventListener("pointercancel", C);
      const v = [...n.children].map((c) => Number(c.dataset.index)), b = v.some((c, w) => c !== w), f = () => {
        if (t.classList.remove("dragging"), t.style.transition = "", t.style.transform = "", b) {
          const c = v.map((w) => i[w]);
          i.splice(0, i.length, ...c);
        }
        _(), b && W("Order saved");
      };
      if (Ue()) {
        f();
        return;
      }
      t.style.transition = yi, t.style.transform = "", setTimeout(f, 250);
    };
    o.addEventListener("pointermove", T), o.addEventListener("pointerup", C), o.addEventListener("pointercancel", C), u = setInterval(g, 30), p();
  }
  function ja() {
    var o, r, s, l;
    const e = L[M], t = (o = a("warmupList")) == null ? void 0 : o.closest("section"), n = (r = a("cooldownList")) == null ? void 0 : r.closest("section"), i = (l = (s = a("strengthList")) == null ? void 0 : s.closest("section")) == null ? void 0 : l.querySelector(".sectionTitle");
    e != null && e.customSequence ? (t && (t.hidden = !0), n && (n.hidden = !0), i && (i.textContent = "Move sequence")) : (t && (t.hidden = !!(e != null && e.warmupOff)), n && (n.hidden = !1), i && (i.textContent = "Kettlebell work")), Sn(fe, "warmupList"), Sn(V, "strengthList"), Sn(be, "cooldownList");
  }
  function Yt() {
    if (!re) return;
    const { item: e, arr: t } = re;
    re = null;
    const n = t.indexOf(e);
    n >= 0 && t.splice(n, 1), ee === e && (ee = null);
  }
  function Cn(e) {
    return e.id === "warmupList" ? { arr: fe, kind: "warmup", group: "Warm-up" } : e.id === "cooldownList" ? { arr: be, kind: "cooldown", group: "Cooldown" } : { arr: V, kind: "work", group: "" };
  }
  function Ya(e, t) {
    const n = Cn(t), i = Date.now().toString(36);
    return e === "video" ? { id: "video-" + i, name: "", group: "Video", kind: "video", hidden: !1, url: "", videoId: "", start: 0, end: null, videoDuration: null, useVideoLength: !0, autoName: !0, duration: 300 } : e === "rest" ? { id: "rest-" + i, name: "Rest", group: "Rest", kind: "rest", hidden: !1, useGlobalTiming: !0, duration: Number(B.value) } : { id: "movement-" + i, name: "", group: n.group, kind: n.kind, hidden: !1, useGlobalTiming: !0, duration: Number(R.value) };
  }
  const wi = "cubic-bezier(.34,1.46,.64,1)";
  function Ua(e, t) {
    if (Ue() || !e) {
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
      const l = s - r.getBoundingClientRect().top;
      Math.abs(l) < 0.5 || r.animate([{ transform: "translateY(" + l + "px)" }, { transform: "none" }], { duration: 440, easing: wi });
    });
  }
  function Za(e, t) {
    if (!e || Ue()) return;
    const n = e.offsetHeight, i = Math.max(0, n - (t || 0));
    e.animate([{ clipPath: "inset(0 0 " + i + "px 0 round 20.8px)" }, { clipPath: "inset(0 0 0 0 round 20.8px)" }], { duration: 460, easing: wi });
  }
  function ki(e, t, n, i) {
    const { arr: o } = Cn(t), r = Ya(e, t);
    o.splice(Math.max(0, Math.min(n, o.length)), 0, r), re = { item: r, arr: o }, ee = r, Ua(t.closest(".exerciseScroller,.createStepSlot") || t, () => _());
    const s = t.querySelector(".moveRow.editing");
    return Za(s, i), xi(e === "rest"), s;
  }
  function Ka(e) {
    for (let t = e; t && t.nodeType === 1; t = t.parentElement) {
      const n = getComputedStyle(t).overflowY;
      if (/(auto|scroll)/.test(n) && t.scrollHeight > t.clientHeight) return t;
    }
    return null;
  }
  function Ja(e, t, n, i) {
    var ga;
    (ee || re) && (Yt(), ee = null, _());
    const o = !Ue(), r = e.getBoundingClientRect(), s = ((ga = x.querySelector(".moveList .moveRow:not(.editing)")) == null ? void 0 : ga.offsetHeight) || 80, l = Ka(e), u = e.closest(".exerciseScroller,.createFlow") || l, p = document.createElement("div");
    p.className = "addGhost" + (t === "movement" ? "" : " rest"), p.setAttribute("aria-hidden", "true");
    const m = { movement: ["New movement", "Drop to add, then name it"], rest: ["Rest", "Rest · Global timing"], video: ["New video", "Drop to add, then paste a YouTube link"] }[t];
    p.innerHTML = '<span class="addGhostGrip">' + St + '</span><span class="addGhostText"><strong>' + m[0] + "</strong><small>" + m[1] + "</small></span>", p.style.width = r.width + "px", p.style.height = r.height + "px", p.style.transform = "translate(" + r.left + "px," + r.top + "px)", a("workoutModal").appendChild(p), e.classList.add("lifting");
    const d = n - r.left, g = i - r.top, T = 44;
    let C = n, v = i, b = r.left, f = r.top, c = 0, w = 0, O = !o, U = null, Z = null, bt = -1, se = 0, K = null;
    const ii = () => ["warmupList", "strengthList", "cooldownList"].map((k) => a(k)).filter((k) => k && k.getClientRects().length && !k.closest("[hidden]")), ca = (k) => {
      if (k === U) return;
      U = k, p.classList.toggle("overList", !!k);
      const A = k ? k.getBoundingClientRect().width : r.width;
      p.style.width = A + "px", p.style.height = (k ? s : r.height) + "px";
    }, Uo = (k) => {
      k.classList.add("leaving"), k.style.height = "0px", k.style.marginTop = "-8px", setTimeout(() => k.remove(), o ? 320 : 0);
    }, ai = (k, A, G) => {
      if (Z && Z.parentNode === k && bt === G || (Z && (Uo(Z), Z = null, bt = -1), !k)) return;
      const J = document.createElement("div");
      J.className = "dropSlot", k.insertBefore(J, A), Z = J, bt = G, J.getBoundingClientRect(), J.style.height = s + "px", J.style.marginTop = "0px";
    }, pa = () => {
      let k = null, A = 1 / 0;
      for (const Ne of ii()) {
        const oe = Ne.getBoundingClientRect();
        if (C < oe.left - 48 || C > oe.right + 48) continue;
        const he = oe.top - 28, Ie = oe.bottom + 28, va = v < he ? he - v : v > Ie ? v - Ie : 0;
        va < A && (A = va, k = Ne);
      }
      const G = u == null ? void 0 : u.getBoundingClientRect(), ve = G && C >= G.left && C <= G.right && v >= G.top && v <= G.bottom || A === 0 ? k : null;
      if (ve) {
        const Ne = [...ve.children].filter((he) => he.classList.contains("moveRow"));
        let oe = Ne.findIndex((he) => {
          const Ie = he.getBoundingClientRect();
          return v < Ie.top + Ie.height / 2;
        });
        oe < 0 && (oe = Ne.length), ai(ve, Ne[oe] || null, oe);
      } else ai(null);
      ca(ve);
    }, Zo = () => {
      if (K) return K.aim();
      if (U) {
        const k = U.getBoundingClientRect();
        let A = v - s / 2;
        return Z && (A = A * 0.6 + Z.getBoundingClientRect().top * 0.4), { x: k.left, y: A };
      }
      return { x: C - d, y: v - g };
    }, oi = (k, A, G, J) => {
      p.style.transform = "translate(" + b + "px," + f + "px) rotate(" + k + "deg) rotate(" + A + "rad) scale(" + G + "," + J + ") rotate(" + -A + "rad)";
    }, ua = () => {
      if (se = requestAnimationFrame(ua), !O) {
        const oe = C - n, he = v - i, Ie = Math.min(Math.hypot(oe, he) / T, 1);
        b = r.left + oe * 0.35, f = r.top + he * 0.35, oi(0, Math.atan2(he, oe), 1 + 0.155 * Ie, 1 - 0.1 * Ie);
        return;
      }
      const k = Zo();
      if (!o) {
        b = k.x, f = k.y, oi(0, 0, 1, 1), K && (cancelAnimationFrame(se), K.done());
        return;
      }
      const A = K ? K.k : 0.17, G = K ? K.d : 0.7;
      c = (c + (k.x - b) * A) * G, w = (w + (k.y - f) * A) * G, b += c, f += w;
      const J = Math.hypot(c, w), ve = Math.min(J / 48, 1), Ne = U || K ? 0 : Math.max(-5, Math.min(5, c * 0.32));
      oi(Ne, Math.atan2(w, c), 1 + 0.1 * ve, 1 - 0.063 * ve), K && J < 0.15 && Math.hypot(k.x - b, k.y - f) < 0.6 && (cancelAnimationFrame(se), K.done());
    }, Ko = setInterval(() => {
      if (!l || K) return;
      const k = l.getBoundingClientRect(), A = 64, G = v < k.top + A ? -(k.top + A - v) / 4 : v > k.bottom - A ? (v - (k.bottom - A)) / 4 : 0;
      G && (l.scrollTop += Math.max(-18, Math.min(18, G)), pa());
    }, 30);
    se = requestAnimationFrame(ua);
    let ma = !1;
    const xt = (k, A) => {
      if (ma) return;
      ma = !0, cancelAnimationFrame(se);
      const G = Z ? Z.offsetHeight : s;
      !k && Z && (Z.remove(), Z = null), p.classList.add("leaving"), setTimeout(() => p.remove(), 180), e.classList.remove("lifting"), k && ki(t, k, A, G);
    };
    return {
      move(k, A) {
        C = k, v = A, !O && Math.hypot(C - n, v - i) > T && (O = !0, c = (C - n) * 0.085, w = (v - i) * 0.085), O && pa();
      },
      drop(k) {
        clearInterval(Ko);
        const A = U, G = bt;
        if (!k && A && Z) {
          const J = Z;
          K = { k: 0.24, d: 0.62, aim: () => {
            const ve = J.getBoundingClientRect();
            return { x: ve.left, y: ve.top };
          }, done: () => xt(A, G) }, setTimeout(() => xt(A, G), 650), o || (cancelAnimationFrame(se), xt(A, G));
          return;
        }
        ai(null), ca(null), K = { k: 0.2, d: 0.66, aim: () => {
          const J = e.getBoundingClientRect();
          return { x: J.left, y: J.top };
        }, done: () => xt(null) }, setTimeout(() => xt(null), 650), o || (cancelAnimationFrame(se), xt(null));
      }
    };
  }
  function Tn(e, t) {
    let n = !1;
    e.addEventListener("click", (i) => {
      if (n) {
        n = !1, i.preventDefault();
        return;
      }
      const o = a("strengthList"), r = ki(t, o, Cn(o).arr.length, 0);
      r == null || r.scrollIntoView({ block: "nearest", behavior: Ue() ? "auto" : "smooth" });
    }), e.addEventListener("pointerdown", (i) => {
      if (i.button !== void 0 && i.button !== 0) return;
      const o = i.pointerId, r = i.clientX, s = i.clientY;
      let l = null, u = !1;
      try {
        e.setPointerCapture(o);
      } catch {
      }
      const p = (b) => {
        if (b.pointerId === o) {
          if (b.pointerType === "mouse" && b.buttons === 0) {
            v(!1);
            return;
          }
          if (!l) {
            if (Math.hypot(b.clientX - r, b.clientY - s) < 6) return;
            l = Ja(e, t, r, s);
          }
          l.move(b.clientX, b.clientY);
        }
      }, m = (b) => {
        b.pointerId === o && v(!1);
      }, d = (b) => {
        b.pointerId === o && v(!0);
      }, g = () => v(!1), T = () => v(!0), C = (b) => {
        b.key === "Escape" && l && (b.preventDefault(), b.stopPropagation(), v(!0));
      };
      function v(b) {
        if (!u && (u = !0, window.removeEventListener("pointermove", p, !0), window.removeEventListener("pointerup", m, !0), window.removeEventListener("pointercancel", d, !0), window.removeEventListener("keydown", C, !0), window.removeEventListener("blur", T), e.removeEventListener("lostpointercapture", g), l)) {
          const f = l;
          l = null, n = !0, setTimeout(() => {
            n = !1;
          }, 0), f.drop(b);
        }
      }
      window.addEventListener("pointermove", p, !0), window.addEventListener("pointerup", m, !0), window.addEventListener("pointercancel", d, !0), window.addEventListener("keydown", C, !0), window.addEventListener("blur", T), e.addEventListener("lostpointercapture", g);
    });
  }
  function Ln() {
    V.length > 0;
    const e = a("addMovementBtn"), t = a("addRestBtn");
    e && (e.innerHTML = St + "<span>Add movement</span>"), t && (t.innerHTML = St + "<span>Add rest</span>");
    const n = a("addVideoBtn");
    n && (n.innerHTML = St + "<span>Add video</span>");
  }
  function Ct() {
    const e = a("useGlobalTiming").checked, t = a("addMovementDuration"), n = a("addMovementUnit");
    t.disabled = e, n.disabled = e, t.parentElement.style.opacity = e ? ".38" : "1", a("globalTimingValue").textContent = "Use global timing · " + X(R.value);
    const i = a("useGlobalRestTiming").checked, o = a("addRestDuration"), r = a("addRestUnit");
    o.disabled = i, r.disabled = i, o.parentElement.style.opacity = i ? ".38" : "1", a("globalRestTimingValue").textContent = "Use global timing · " + X(B.value);
  }
  let Si = "movement";
  function $a(e) {
    Si = e;
    const t = a("movementFields"), n = a("restFields");
    t.hidden = e !== "movement", n.hidden = e !== "rest", a("movementCreatorHeading").textContent = "Add movement", a("movementCreator").setAttribute("aria-label", "Create movement"), Ct();
  }
  function En() {
    L[M];
    const e = z ? !0 : a("useGlobalTiming").checked, t = e ? Number(R.value) : jt(
      a("addMovementDuration").value,
      a("addMovementUnit").value
    ), n = z ? !0 : a("useGlobalRestTiming").checked, i = n ? Number(B.value) : jt(
      a("addRestDuration").value,
      a("addRestUnit").value
    );
    if (Si === "rest") {
      const o = a("addRestTitle").value.trim() || "Rest", r = a("addRestGroup").value.trim() || "Rest";
      V.push({
        id: "rest-" + Date.now(),
        name: o,
        group: r,
        kind: "rest",
        hidden: !1,
        useGlobalTiming: n,
        duration: Math.max(5, i || Number(B.value))
      }), _(), a("movementCreator").hidden = !0, a("addRestTitle").value = "Rest", a("addRestGroup").value = "Rest", W("Rest added"), z && (Ve("movements"), Te());
    } else {
      const o = a("addMovementInput").value.trim();
      if (!o) return;
      const r = a("addMovementGroup").value.trim() || "Movement";
      V.push({
        id: "movement-" + Date.now(),
        name: o,
        group: r,
        kind: "work",
        hidden: !1,
        useGlobalTiming: e,
        duration: Math.max(5, t || Number(R.value))
      }), a("addMovementInput").value = "", a("addMovementGroup").value = "", _(), a("movementCreator").hidden = !0, W("Movement added"), z && (Ve("movements"), Te());
    }
    Ln();
  }
  let Mn = null;
  function W(e, t) {
    const n = a("toast");
    n.innerHTML = "";
    const i = document.createElement("span");
    if (i.textContent = e, n.appendChild(i), t) {
      const o = document.createElement("button");
      o.type = "button", o.className = "toastAction", o.textContent = t.label, o.addEventListener("click", () => {
        t.run(), n.classList.remove("show", "withAction"), clearTimeout(Mn);
      }), n.appendChild(o);
    }
    n.classList.toggle("withAction", !!t), n.classList.add("show"), clearTimeout(Mn), Mn = setTimeout(() => n.classList.remove("show", "withAction"), t ? 5e3 : 2200);
  }
  const Qa = ["Terrible", "Poor", "Meh", "Okay", "Good", "Great"], Xa = ["#6E63A8", "#5878A8", "#6F8B8A", "#5F9B72", "#D5A53E", "#D56B54"];
  function Ci(e) {
    return Math.max(0, Math.min(5, Math.floor(Number(e) / 100 * 6)));
  }
  function Ze(e, t) {
    return Qa[Ci(t)];
  }
  function eo(e) {
    return Xa[Ci(e)];
  }
  function te(e) {
    return e.getFullYear() + "-" + String(e.getMonth() + 1).padStart(2, "0") + "-" + String(e.getDate()).padStart(2, "0");
  }
  function xe() {
    return { morning: N().morningTime || "08:00", evening: N().eveningTime || "19:00" };
  }
  function Ke(e) {
    const [t, n] = String(e).split(":").map(Number);
    return (t || 0) * 60 + (n || 0);
  }
  function to(e) {
    const t = xe();
    return e.getHours() * 60 + e.getMinutes() >= Ke(t.evening) ? "evening" : "morning";
  }
  function Ut(e, t) {
    return E.checkins.find((n) => n.date === e && n.slot === t);
  }
  function Zt(e) {
    return !!(e && e.mood != null && e.energy != null);
  }
  function Kt() {
    const e = /* @__PURE__ */ new Date(), t = te(e), n = to(e), i = xe(), o = e.getHours() * 60 + e.getMinutes();
    return n === "morning" && o < Ke(i.morning) || Zt(Ut(t, n)) ? null : n;
  }
  const Le = a("checkinModal"), Ee = a("checkinTab"), no = a("checkinBadge"), Me = { mood: { input: a("moodInput"), fill: a("moodFill") }, energy: { input: a("energyLevelInput"), fill: a("energyLevelFill") } };
  function Ti(e) {
    const { input: t, fill: n } = Me[e];
    n.style.width = t.value + "%", t.setAttribute("aria-valuetext", Ze(e, t.value));
  }
  Object.keys(Me).forEach((e) => Me[e].input.addEventListener("input", () => Ti(e)));
  let ue = null;
  function Li() {
    const e = xe(), t = /* @__PURE__ */ new Date(), n = t.getHours() * 60 + t.getMinutes();
    return n < Ke(e.morning) ? "Next check-in at " + e.morning : n < Ke(e.evening) ? "Next check-in at " + e.evening : "Next check-in tomorrow at " + e.morning;
  }
  function io() {
    const e = xe(), t = /* @__PURE__ */ new Date(), n = t.getHours() * 60 + t.getMinutes(), i = (o, r) => {
      const [s, l] = o.split(":").map(Number);
      return new Date(t.getFullYear(), t.getMonth(), t.getDate() + (r ? 1 : 0), s, l);
    };
    return n < Ke(e.morning) ? { date: i(e.morning), time: e.morning } : n < Ke(e.evening) ? { date: i(e.evening), time: e.evening } : { date: i(e.morning, !0), time: e.morning };
  }
  let Fn = null, Rn = null;
  function Ei() {
    if (Kt()) {
      Jt(), ze();
      return;
    }
    const e = io(), t = Math.max(0, Math.round((e.date - Date.now()) / 1e3)), n = Math.floor(t / 3600), i = Math.floor(t % 3600 / 60), o = t % 60;
    a("peekCountdown").textContent = n + ":" + String(i).padStart(2, "0") + ":" + String(o).padStart(2, "0"), a("peekAt").textContent = "Available at " + e.time;
  }
  function ao() {
    Ei(), Ee.classList.add("peek"), clearInterval(Rn), Rn = setInterval(Ei, 1e3), clearTimeout(Fn), Fn = setTimeout(Jt, 6e3);
  }
  function Jt() {
    Ee.classList.remove("peek"), clearInterval(Rn), clearTimeout(Fn);
  }
  function Mi() {
    const e = Kt();
    if (!e) {
      Ee.classList.contains("peek") ? Jt() : ao();
      return;
    }
    ue = { date: te(/* @__PURE__ */ new Date()), slot: e };
    const n = Ut(ue.date, e), i = E.checkins.find((r) => Zt(r));
    Object.keys(Me).forEach((r) => {
      Me[r].input.value = (n == null ? void 0 : n[r]) ?? (i == null ? void 0 : i[r]) ?? 50, Ti(r);
    });
    const o = xe()[e];
    a("checkinEyebrow").textContent = (e === "morning" ? "Morning" : "Evening") + " · " + o, a("checkinTitle").textContent = e === "morning" ? "Morning check-in" : "Evening check-in", Le.classList.add("open"), Le.setAttribute("aria-hidden", "false"), requestAnimationFrame(() => Me.mood.input.focus());
  }
  function Tt() {
    Le.classList.remove("open"), Le.setAttribute("aria-hidden", "true"), ue && (Lt = ue.date + "-" + ue.slot);
    try {
      localStorage.setItem("move-assistant-dismissed", Lt);
    } catch {
    }
    ue = null, ze();
  }
  function oo() {
    if (!ue) return;
    if (Zt(Ut(ue.date, ue.slot))) {
      Tt();
      return;
    }
    const { date: e, slot: t } = ue;
    let n = Ut(e, t);
    n || (n = { date: e, slot: t }, E.checkins.unshift(n), E.checkins = E.checkins.slice(0, 2e3)), n.mood = Number(Me.mood.input.value), n.energy = Number(Me.energy.input.value), n.scale = 100, n.at = (/* @__PURE__ */ new Date()).toISOString(), ce(), y.fire("checkin", { slot: t, mood: n.mood, energy: n.energy, mood_label: Ze("mood", n.mood), energy_label: Ze("energy", n.energy) }), W((t === "morning" ? "Morning" : "Evening") + " check-in saved"), Tt(), $t(), Et(), We(), Ce();
  }
  let Lt = "";
  try {
    Lt = localStorage.getItem("move-assistant-dismissed") || "";
  } catch {
  }
  function ze() {
    const e = Kt();
    no.hidden = !e, Ee.hidden = !e, e || Jt(), Ee.classList.toggle("due", !!e), Ee.setAttribute("aria-label", e ? (e === "morning" ? "Morning" : "Evening") + " check-in is due" : Li()), Ee.title = e ? "Check in now" : Li();
  }
  function Bn() {
    ze();
    const e = Kt();
    !e || Le.classList.contains("open") || N().checkinAutoOpen !== !1 && (!je.home.classList.contains("active") || ne.classList.contains("open") || Lt !== te(/* @__PURE__ */ new Date()) + "-" + e && Mi());
  }
  Ee.addEventListener("click", Mi), a("checkinLater").addEventListener("click", Tt), a("checkinSave").addEventListener("click", oo), Le.addEventListener("click", (e) => {
    e.target === Le && Tt();
  }), Le.addEventListener("keydown", (e) => {
    e.key === "Escape" && (e.preventDefault(), Tt());
  }), setInterval(Bn, 3e4);
  function $t() {
    const e = te(/* @__PURE__ */ new Date()), t = (n) => E.checkins.find((i) => i.date === e && i[n] != null);
    [["mood", "moodMeta"], ["energy", "energyLevelMeta"]].forEach(([n, i]) => {
      const o = t(n);
      a(i).textContent = o ? Ze(n, o[n]) : "—";
    });
  }
  function Et() {
    const e = a("feelCard");
    if (!e) return;
    const t = /* @__PURE__ */ new Date(), n = new Date(t.getFullYear(), t.getMonth(), t.getDate() - (t.getDay() + 6) % 7), i = [...Array(7)].map((p, m) => {
      const d = new Date(n.getFullYear(), n.getMonth(), n.getDate() + m), g = te(d), T = E.checkins.filter((v) => v.date === g), C = (v) => {
        const b = T.map((f) => f[v]).filter((f) => f != null);
        return b.length ? b.reduce((f, c) => f + c, 0) / b.length : null;
      };
      return { d, key: g, mood: C("mood"), energy: C("energy"), count: T.filter(Zt).length, future: d > t && g !== te(t) };
    }), o = (p) => {
      const m = i.map((d) => d[p]).filter((d) => d != null);
      return m.length ? m.reduce((d, g) => d + g, 0) / m.length : null;
    }, r = o("mood"), s = o("energy"), l = (p, m) => '<div class="feelMeter"><div class="feelMeterTop"><span>' + p + "</span><span>" + (m == null ? "—" : I(Ze("", m))) + '</span></div><div class="feelTrack"><span style="width:' + (m == null ? 0 : Math.max(4, m)) + "%;background:" + (m == null ? "transparent" : eo(m)) + '"></span></div></div>', u = i.filter((p) => p.mood != null && p.energy != null).sort((p, m) => m.mood + m.energy - (p.mood + p.energy))[0];
    e.innerHTML = '<div class="feelTop"><div class="feelSummary"><div class="feelHeadline">' + (r == null ? "No check-ins yet" : I(Ze("", (r + s) / 2))) + '</div><div class="weekCopy">' + (r == null ? "Your first check-in will appear here." : "on average this week" + (u ? " · best day " + I(new Intl.DateTimeFormat(void 0, { weekday: "long" }).format(u.d)) : "")) + '</div></div></div><div class="feelDays">' + i.map(
      (p) => '<div class="weekChip feelDay' + (p.future ? " future" : "") + (p.key === te(t) ? " today" : "") + '"><div class="weekChipTop"><strong>' + I(new Intl.DateTimeFormat(void 0, { weekday: "short" }).format(p.d)) + "</strong>" + (p.count >= 2 ? '<span class="weekTick">✓</span>' : '<span class="feelDots">' + "●".repeat(p.count) + "</span>") + "</div>" + l("Mood", p.mood) + l("Energy", p.energy) + "</div>"
    ).join("") + "</div>";
  }
  const Qt = a("upcomingCountSetting");
  Qt.addEventListener("change", () => {
    Ye = Qt.value === "all" ? "all" : Number(Qt.value), Gi();
  });
  const Mt = a("tempoRevealBtn"), An = a("tempoExperiment"), me = a("tempoQuad"), Je = a("tempoDot"), ro = a("tempoEstimate"), so = a("tempoReadout");
  let $e = { x: 0.5, y: 0.5 }, Ft = !1, Xt = { total: 20, work: 45, rest: 15 };
  function Nn(e, t, n, i) {
    const o = Math.max(t, Math.min(n, e));
    return Math.round((o - t) / i) * i + t;
  }
  function lo(e, t) {
    const n = (e - 0.5) * 2, i = (t - 0.5) * 2, o = Nn(
      Xt.total + n * 5 + i * 8,
      Number(P.min),
      Number(P.max),
      Number(P.step)
    ), r = Nn(
      Xt.work + n * 10 + i * 8,
      Number(R.min),
      Number(R.max),
      Number(R.step)
    ), s = Nn(
      Xt.rest + n * 6 + i * 6,
      Number(B.min),
      Number(B.max),
      Number(B.step)
    );
    return P.value = o, R.value = r, B.value = s, mi.textContent = r + " sec", gi.textContent = s + " sec", Vt(), { total: o, work: r, rest: s };
  }
  function In(e, t) {
    const n = e < 0.34 ? "Low" : e > 0.66 ? "Hard" : "Medium", i = t < 0.34 ? "Fast" : t > 0.66 ? "Slow" : "Balanced", o = lo(e, t);
    so.textContent = n + " + " + i, ro.textContent = o.total + " min", me.setAttribute("aria-valuetext", n + " and " + i + ", estimated " + o.total + " minutes");
  }
  function Pn(e) {
    const t = me.getBoundingClientRect(), n = Math.max(0, Math.min(1, (e.clientX - t.left) / t.width)), i = Math.max(0, Math.min(1, (e.clientY - t.top) / t.height));
    $e = { x: n, y: i }, Je.style.left = n * 100 + "%", Je.style.top = i * 100 + "%", In(n, i);
  }
  Mt.addEventListener("click", () => {
    const e = An.hidden;
    An.hidden = !e, Mt.setAttribute("aria-expanded", e ? "true" : "false"), Mt.textContent = e ? "Now close this" : "Don’t try this!", e && (Xt = {
      total: Number(P.value),
      work: Number(R.value),
      rest: Number(B.value)
    }, $e = { x: 0.5, y: 0.5 }, Je.style.left = "50%", Je.style.top = "50%", In($e.x, $e.y));
  }), x.querySelectorAll("[data-feedback-rating]").forEach((e) => e.addEventListener("click", () => {
    Number(e.dataset.feedbackRating), x.querySelectorAll("[data-feedback-rating]").forEach((t) => t.classList.toggle("selected", t === e));
  }));
  const en = a("testingFeedbackForm"), Fi = a("testingFeedbackThanks"), co = a("testingFeedbackAgain");
  en.addEventListener("submit", (e) => {
    e.preventDefault(), en.hidden = !0, Fi.hidden = !1, W("Feedback captured for prototype");
  }), co.addEventListener("click", (e) => {
    e.preventDefault(), en.reset(), x.querySelectorAll("[data-feedback-rating]").forEach((t) => t.classList.remove("selected")), Fi.hidden = !0, en.hidden = !1;
  }), me.addEventListener("pointerdown", (e) => {
    var t;
    Ft = !0, Pn(e);
    try {
      (t = me.setPointerCapture) == null || t.call(me, e.pointerId);
    } catch {
    }
  }), me.addEventListener("pointermove", (e) => {
    Ft && Pn(e);
  }), me.addEventListener("pointerup", (e) => {
    Ft && (Ft = !1, Pn(e), _());
  }), me.addEventListener("pointercancel", () => Ft = !1), me.addEventListener("keydown", (e) => {
    let { x: t, y: n } = $e, i = !0;
    e.key === "ArrowLeft" ? t -= 0.05 : e.key === "ArrowRight" ? t += 0.05 : e.key === "ArrowUp" ? n -= 0.05 : e.key === "ArrowDown" ? n += 0.05 : i = !1, i && (e.preventDefault(), t = Math.max(0, Math.min(1, t)), n = Math.max(0, Math.min(1, n)), $e = { x: t, y: n }, Je.style.left = t * 100 + "%", Je.style.top = n * 100 + "%", In(t, n), _());
  });
  const ne = a("workoutModal");
  let Rt = null;
  function Qe(e) {
    return e.map((t) => ({ ...t }));
  }
  function po() {
    const e = L[M];
    return {
      key: M,
      profile: e ? JSON.parse(JSON.stringify(e)) : null,
      warmup: Qe(fe),
      strength: Qe(V),
      cooldown: Qe(be),
      total: Number(P.value),
      work: Number(R.value),
      rest: Number(B.value),
      rounds: Number(Pe.value) || 1
    };
  }
  function Ri(e = !1) {
    z = !!e, ee = null, re = null, Rt = po(), a("moveEditorTitle").textContent = z ? "Create new move" : "Edit move", a("moveEditorSubtitle").textContent = "Build the sequence first, then set timing, then finish the move.", a("moveEditorSubtitle").hidden = !z, a("warmupRow").hidden = z, a("deleteMoveOpen").hidden = z;
    const t = a("createMoveOptions");
    t.hidden = !z;
    {
      const n = L[M];
      a("includeWarmupPreset").checked = !!(n != null && n.includeWarmup), a("includeCooldownPreset").checked = !!(n != null && n.includeCooldown);
    }
    if (Bi(), z) {
      a("useGlobalTiming").checked = !0, a("useGlobalRestTiming").checked = !0;
      const n = L[M];
      wn((n == null ? void 0 : n.preset) || "movement", !1);
    }
    a("movementCreator").hidden = !0, $a("movement"), Ln(), Ct(), An.hidden = !0, Mt.setAttribute("aria-expanded", "false"), Mt.textContent = "Don’t try this!", ne.classList.toggle("createMode", z), ne.querySelector(".modal").classList.toggle("createMode", z), ne.classList.add("open"), ne.setAttribute("aria-hidden", "false"), z && La();
  }
  function uo() {
    const e = L[M];
    return e != null && e.customSequence ? !!e.includeWarmup : !(e != null && e.warmupOff);
  }
  function Bi() {
    const e = uo(), t = a("warmupSwitch");
    t.classList.toggle("on", e), t.setAttribute("aria-checked", String(e));
  }
  a("warmupSwitch").addEventListener("click", () => {
    const e = L[M];
    e && (e.customSequence ? (a("includeWarmupPreset").checked = !e.includeWarmup, kn()) : (e.warmupOff = !e.warmupOff, _()), Bi());
  });
  function tn() {
    re = null, ee = null, ne.classList.contains("createMode") && Ea(), ne.classList.remove("createMode"), ne.querySelector(".modal").classList.remove("createMode"), ne.classList.remove("open"), ne.setAttribute("aria-hidden", "true");
  }
  function Ai() {
    if (!Rt) return;
    const e = Rt;
    e.profile && (L[e.key] = JSON.parse(JSON.stringify(e.profile))), M = e.key, fe = Qe(e.warmup), V = Qe(e.strength), be = Qe(e.cooldown), P.value = e.total, R.value = e.work, B.value = e.rest, Pe.value = e.rounds || 1;
    const t = L[M];
    if (t) {
      x.querySelectorAll(".workoutPanel[data-workout]").forEach((i) => i.classList.toggle("active", i.dataset.workout === M));
      const n = x.querySelector(".workoutPanel.active");
      if (n) {
        const i = n.querySelector(".workoutName");
        i && (i.textContent = t.name);
        const o = n.querySelector(".panelCollapsedText");
        o && (o.textContent = t.name);
        const r = n.querySelector(".sourceTag");
        r && (r.textContent = t.source);
      }
      F.value = t.name;
    }
    _();
  }
  a("cancelWorkoutEdit").addEventListener("click", () => {
    if (z) {
      const e = M;
      delete L[e], z = !1, De = null, pe(E.order.find((t) => L[t]) || Object.keys(L)[0]);
    } else
      Ai();
    tn();
  }), a("saveWorkoutEdit").addEventListener("click", () => {
    const e = L[M], t = F.value.trim() || "New move";
    if (e && (e.name = t), Yt(), ee = null, _(), z && e)
      xn(M, e), x.querySelectorAll(".workoutPanel[data-workout]").forEach((n) => n.classList.toggle("active", n.dataset.workout === M)), z = !1, De = null, E.order.includes(M) || E.order.push(M), W("Move created");
    else {
      const n = x.querySelector(".workoutPanel.active");
      if (n) {
        const i = n.querySelector(".workoutName");
        i && (i.textContent = t);
        const o = n.querySelector(".panelCollapsedText");
        o && (o.textContent = t);
      }
      W("Move saved");
    }
    Rt = null, tn(), ce();
  }), ne.addEventListener("click", (e) => {
    if (e.target === ne) {
      if (z) {
        const t = M;
        delete L[t], z = !1, De = null, pe(E.order.find((n) => L[n]) || Object.keys(L)[0]);
      } else
        Ai();
      tn();
    }
  }), Tn(a("addMovementBtn"), "movement"), Tn(a("addRestBtn"), "rest"), Tn(a("addVideoBtn"), "video"), a("closeMovementCreator").addEventListener("click", () => {
    a("movementCreator").hidden = !0;
  }), a("useGlobalTiming").addEventListener("change", Ct), a("useGlobalRestTiming").addEventListener("change", Ct), x.querySelectorAll(".createPresetBtn").forEach((e) => e.addEventListener("click", () => {
    wn(e.dataset.movePreset, !0), _();
  })), a("includeWarmupPreset").addEventListener("change", kn), a("includeCooldownPreset").addEventListener("change", kn), a("includeWarmupPreset").addEventListener("change", Te), a("includeCooldownPreset").addEventListener("change", Te), F.addEventListener("input", Te), a("confirmAddMovement").addEventListener("click", En), a("confirmAddRest").addEventListener("click", En), a("addMovementInput").addEventListener("keydown", (e) => {
    e.key === "Enter" && En();
  });
  const Bt = a("countdown"), Dn = a("countNum"), ye = a("countdownPixelCanvas");
  let At = null, Hn = "appear";
  class mo {
    constructor(t, n, i, o, r, s, l) {
      this.width = t.width, this.height = t.height, this.ctx = n, this.x = i, this.y = o, this.color = r, this.speed = (Math.random() * 0.8 + 0.1) * s, this.size = 0, this.sizeStep = Math.random() * 0.4, this.minSize = 0.5, this.maxSizeInteger = 2, this.maxSize = Math.random() * (this.maxSizeInteger - this.minSize) + this.minSize, this.delay = l, this.counter = 0, this.counterStep = Math.random() * 4 + (this.width + this.height) * 0.01, this.isIdle = !1, this.isReverse = !1, this.isShimmer = !1;
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
  let zn = [], Ni = 1, Ii = 1;
  function _e() {
    const e = parseFloat(getComputedStyle(a("app")).zoom);
    return Number.isFinite(e) && e > 0 ? e : 1;
  }
  function go() {
    var p;
    if (!ye) return;
    const e = _e(), t = Math.max(1, window.innerWidth / e), n = Math.max(1, window.innerHeight / e);
    Ni = t, Ii = n;
    const i = Math.min(window.devicePixelRatio || 1, 2);
    ye.width = Math.floor(t * i), ye.height = Math.floor(n * i), ye.style.width = t + "px", ye.style.height = n + "px";
    const o = ye.getContext("2d");
    o.setTransform(i, 0, 0, i, 0, 0);
    const r = ["#f2fbff", "#d4effc", "#a9e0fa", "#6cc8f6"], s = 12, l = (p = window.matchMedia) == null ? void 0 : p.call(window, "(prefers-reduced-motion: reduce)").matches, u = l ? 0 : 0.055;
    zn = [];
    for (let m = 0; m < t; m += s)
      for (let d = 0; d < n; d += s) {
        const g = m - t / 2, T = d - n / 2, C = Math.sqrt(g * g + T * T), v = l ? 0 : Math.random() * 75 + C * 0.05, b = new mo({ width: t, height: n }, o, m, d, r[Math.floor(Math.random() * r.length)], u, v);
        b.maxSizeInteger = 4, b.maxSize = Math.random() * 3.2 + 0.8, b.sizeStep = 0.35 + Math.random() * 0.45, zn.push(b);
      }
  }
  function Pi(e) {
    cancelAnimationFrame(At), Hn = e;
    const t = ye == null ? void 0 : ye.getContext("2d");
    if (!t) return;
    function n() {
      t.clearRect(0, 0, Ni, Ii);
      let i = !0;
      zn.forEach((o) => {
        o[Hn](), o.isIdle || (i = !1);
      }), Hn === "disappear" && i || (At = requestAnimationFrame(n));
    }
    At = requestAnimationFrame(n);
  }
  function nn() {
    cancelAnimationFrame(At), go(), Pi("appear"), setTimeout(() => Pi("disappear"), 560);
  }
  window.addEventListener("resize", () => {
    Bt.classList.contains("active") && nn();
  });
  const Nt = a("pixelTrailCanvas"), Xe = Nt.getContext("2d");
  let we = !0, et = 0.7, tt = 600, It = [], nt = null, Fe = { x: 0, y: 0, ready: !1 };
  function Di() {
    const e = H.getBoundingClientRect(), t = _e(), n = Math.min(window.devicePixelRatio || 1, 2), i = Math.max(1, e.width / t), o = Math.max(1, e.height / t);
    Nt.width = Math.max(1, Math.floor(i * n)), Nt.height = Math.max(1, Math.floor(o * n)), Nt.style.width = i + "px", Nt.style.height = o + "px", Xe.setTransform(n, 0, 0, n, 0, 0);
  }
  function vo(e, t) {
    if (!we) return;
    const n = performance.now();
    Fe.ready || (Fe = { x: e, y: t, ready: !0 });
    const i = 7;
    for (let o = 1; o <= i; o++) {
      const r = o / i;
      It.push({
        x: Fe.x + (e - Fe.x) * r,
        y: Fe.y + (t - Fe.y) * r,
        born: n - (i - o) * 10
      });
    }
    Fe = { x: e, y: t, ready: !0 };
  }
  function an(e) {
    if (nt = null, !q) return;
    if (!je.workout.classList.contains("active")) {
      nt = requestAnimationFrame(an);
      return;
    }
    const t = H.getBoundingClientRect(), n = _e();
    Xe.clearRect(0, 0, t.width / n, t.height / n), we && (It = It.filter((o) => e - o.born < tt), Xe.fillStyle = a("app").classList.contains("light") ? "#03A9F4" : "#f4f4f4", It.forEach((o) => {
      const r = (e - o.born) / tt, s = (1 - r) * et, l = Math.round(o.x / 14) * 14, u = Math.round(o.y / 14) * 14;
      Xe.globalAlpha = Math.max(0, s);
      const p = 2 + 5 * (1 - r) * et;
      Xe.fillRect(l - p / 2, u - p / 2, p, p);
    }), Xe.globalAlpha = 1), nt = requestAnimationFrame(an);
  }
  H.addEventListener("pointermove", (e) => {
    const t = H.getBoundingClientRect(), n = _e();
    vo((e.clientX - t.left) / n, (e.clientY - t.top) / n);
  }), H.addEventListener("pointerleave", () => Fe.ready = !1), new ResizeObserver(Di).observe(H), Di(), nt = requestAnimationFrame(an);
  const Re = a("movementRippleCanvas"), it = Re.getContext("2d");
  let qe = !0, at = null, ho = performance.now();
  function Hi() {
    const e = Re.parentElement.getBoundingClientRect(), t = _e(), n = Math.max(1, e.width / t), i = Math.max(1, e.height / t), o = Math.min(window.devicePixelRatio || 1, 2);
    Re.width = Math.max(1, Math.floor(n * o)), Re.height = Math.max(1, Math.floor(i * o)), Re.style.width = n + "px", Re.style.height = i + "px", it.setTransform(o, 0, 0, o, 0, 0);
  }
  function zi() {
    var e;
    return Q || ((e = h[S]) == null ? void 0 : e.kind) === "rest";
  }
  function fo() {
    const e = h[S];
    return zi() ? 2200 : e ? e.kind === "warmup" || e.kind === "cooldown" ? 2400 : 1350 : 1600;
  }
  function on(e) {
    if (at = null, !q) return;
    if (!je.workout.classList.contains("active")) {
      at = requestAnimationFrame(on);
      return;
    }
    const t = Re.parentElement.getBoundingClientRect(), n = _e(), i = Math.max(1, t.width / n), o = Math.max(1, t.height / n);
    if (it.clearRect(0, 0, i, o), qe) {
      const r = fo(), s = (e - ho) % r / r, l = 15, u = Math.max(8, Math.round(l * o / Math.max(1, i))), p = i / (l + 1), m = o / (u + 1), d = i * 0.5, g = o * 0.52, T = Math.hypot(d, g), v = a("app").classList.contains("light") ? "34,34,34" : "244,244,244";
      for (let b = 1; b <= u; b++)
        for (let f = 1; f <= l; f++) {
          const c = f * p, w = b * m, O = Math.hypot(c - d, w - g) / T, U = zi(), Z = U ? Math.exp(-Math.pow((O - (s * 0.82 + 0.08) % 1 * 1.18) * 5.5, 2)) : 0, bt = Math.exp(-Math.pow((O - s * 1.25) * 7, 2)), se = U ? Z : bt, K = U ? 0.5 + 0.5 * Math.sin(s * Math.PI * 2 - O * 3) ** 2 : 0.35 + 0.65 * Math.sin(s * Math.PI * 2 - O * 5) ** 2, ii = U ? 1.4 + se * 4.2 * K : 1.2 + se * 5 * K;
          it.beginPath(), it.arc(c, w, ii, 0, Math.PI * 2), it.fillStyle = `rgba(${v},${U ? 0.08 + se * 0.48 : 0.05 + se * 0.55})`, it.fill();
        }
    }
    at = requestAnimationFrame(on);
  }
  new ResizeObserver(Hi).observe(Re.parentElement), Hi(), at = requestAnimationFrame(on);
  const Pt = a("exerciseTitle"), ke = a("exerciseMeta"), _n = a("stepLabel"), qn = a("digits"), _i = a("fill"), ot = a("progress"), Be = a("pause"), bo = a("nextName"), xo = a("nextMeta"), yo = a("nextIcon"), rn = a("skipNextSession");
  let ae = null;
  function le(e) {
    for (let t = Math.max(0, e); t < h.length; t++)
      if (!h[t].sessionHidden) return t;
    return -1;
  }
  function wo() {
    const e = h[S];
    if (!e) return { name: "Complete", meta: "Move finished", icon: "✓" };
    if (Q) {
      const i = le(S + 1), o = i >= 0 ? h[i] : null;
      return o ? { name: o.name, meta: Gn(o), icon: On(o) } : { name: "Complete", meta: "Move finished", icon: "✓" };
    }
    if (e.rest > 0) return { name: "Rest", meta: e.rest + " sec · " + (e.roundBreakAfter ? "round " + (e.round + 1) + " next" : "recovery"), icon: "Ⅱ" };
    const t = le(S + 1), n = t >= 0 ? h[t] : null;
    return n ? { name: n.name, meta: Gn(n), icon: On(n) } : { name: "Complete", meta: "Move finished", icon: "✓" };
  }
  function ko() {
    if (!h[S]) return h.length;
    const t = le(S + 1);
    return t < 0 ? h.length : t + 1;
  }
  function On(e) {
    return e.kind === "video" ? "▶" : e.kind === "cooldown" ? "↘" : e.kind === "warmup" ? "↗" : "●";
  }
  function Gn(e) {
    return e.kind === "video" ? "YouTube · " + wt(e.duration) : e.group + " · " + e.duration + " sec";
  }
  function sn() {
    return h.length && h[h.length - 1].round || 1;
  }
  function qi(e) {
    const t = h[e];
    if (!t) return "";
    const n = sn();
    if (n <= 1) return "Step " + (e + 1) + " of " + h.length;
    if (t.roundBreak) return "Round " + t.round + " of " + n + " · Rest";
    const i = h.filter((o) => o.round === t.round && !o.roundBreak).length;
    return "Round " + t.round + " of " + n + " · Step " + (t.roundIndex + 1) + " of " + i;
  }
  function Oi() {
    return ot.querySelector('[data-step="' + S + '"]');
  }
  function So() {
    h[S] && Number(ot.dataset.round) !== (h[S].round || 1) && jn(), [...ot.children].forEach((e) => {
      const t = Number(e.dataset.step);
      e.classList.toggle("done", t < S), e.classList.toggle("active", t === S), e.classList.toggle("rewindable", t <= S), e.disabled = t > S, t === S && e.style.setProperty("--segment-progress", "0%");
    }), h[S] && (_n.textContent = qi(S), Oe());
  }
  function Co(e) {
    const t = h.indexOf(e);
    t < 0 || t <= S || (e.sessionHidden = !e.sessionHidden, rt(), W((e.sessionHidden ? "Hidden " : "Included ") + e.name + " for this session"));
  }
  function Gi() {
    const e = a("upcomingList");
    if (!e) return;
    e.innerHTML = "";
    const t = ko(), n = h.slice(t);
    (Ye === "all" ? n : n.slice(0, Math.max(1, Number(Ye) || 1))).forEach((o) => {
      const r = document.createElement("section");
      r.className = "upcomingCard" + (o.sessionHidden ? " sessionHidden" : ""), r.innerHTML = '<div class="upcomingInfo"><div class="upcomingIcon" aria-hidden="true">' + On(o) + '</div><div><div class="upcomingName">' + I(o.name) + '</div><div class="upcomingMeta">' + I(Gn(o)) + (sn() > 1 ? " · round " + o.round : "") + '</div></div></div><button class="skipSessionBtn" type="button">' + (o.sessionHidden ? "Include this session" : "Skip this session") + "</button>", r.querySelector(".skipSessionBtn").addEventListener("click", () => Co(o)), e.appendChild(r);
    });
  }
  function rt() {
    const e = wo();
    if (bo.textContent = e.name, xo.textContent = e.meta, yo.textContent = e.icon, ae = null, Q) {
      const t = le(S + 1);
      t >= 0 && (ae = h[t]);
    } else {
      const t = h[S];
      if (t && t.rest > 0)
        ae = null;
      else {
        const n = le(S + 1);
        n >= 0 && (ae = h[n]);
      }
    }
    rn && (rn.hidden = !ae, rn.textContent = ae != null && ae.sessionHidden ? "Include this session" : "Skip this session"), Gi();
  }
  rn.addEventListener("click", () => {
    ae && (ae.sessionHidden = !ae.sessionHidden, W((ae.sessionHidden ? "Hidden " : "Included ") + ae.name + " for this session"), rt());
  });
  let ge = null, Wn = null;
  function Dt(e, t = {}) {
    const n = L[M];
    y.fire(e, { move: (n == null ? void 0 : n.name) || "", move_id: M, ...t });
  }
  function To() {
    const e = L[M];
    ge = { key: M, name: (e == null ? void 0 : e.name) || "Move", startedAt: Date.now(), active: 0 }, clearInterval(Wn), Wn = setInterval(() => {
      ge && !Y && ge.active++;
    }, 1e3), Dt("started", { steps: h.length });
  }
  function Wi(e) {
    if (clearInterval(Wn), !ge) return;
    const t = ge;
    ge = null, Dt(e ? "completed" : "ended", { seconds: t.active }), !(t.active < 30) && (E.history.unshift({ id: "h-" + t.startedAt, move_id: t.key, name: t.name, start: new Date(t.startedAt).toISOString(), seconds: t.active, completed: e }), E.history = E.history.slice(0, 1e3), ce(), We(), Ce());
  }
  function Lo() {
    vn("workout"), Eo();
    const e = le(0);
    e >= 0 && h[e].kind === "video" && Ui(h[e]);
  }
  function Vn() {
    dn(), Wi(!1), clearInterval(j), clearInterval(Gt), Q = !1, Y = !1, Be.textContent = "Pause", a("app").classList.remove("resting", "paused"), Bt.classList.remove("active"), vn("home");
  }
  function Eo() {
    Bt.classList.add("active");
    let e = 5;
    Dn.textContent = e, requestAnimationFrame(nn), clearInterval(Gt), Gt = setInterval(() => {
      e--, e > 0 ? (Dn.textContent = e, nn()) : (clearInterval(Gt), Dn.textContent = "GO", nn(), setTimeout(() => {
        Bt.classList.remove("active"), cancelAnimationFrame(At), Fo();
      }, 650));
    }, 1e3);
  }
  function jn() {
    var t;
    ot.innerHTML = "";
    const e = ((t = h[Math.max(0, S)] || h[0]) == null ? void 0 : t.round) || 1;
    ot.dataset.round = e, h.forEach((n, i) => {
      if ((n.round || 1) !== e) return;
      const o = document.createElement("button");
      o.dataset.step = i, o.type = "button", o.className = "progressSegment", o.setAttribute("aria-label", "Go to " + n.name), o.addEventListener("click", () => {
        i <= S && Mo(i);
      }), ot.appendChild(o);
    });
  }
  function Mo(e) {
    e < 0 || e >= h.length || e > S || (clearInterval(j), Q = !1, a("app").classList.remove("resting"), S = e, Y = !1, a("app").classList.remove("paused"), Be.textContent = "Pause", pt(), j = setInterval(Ae, 1e3));
  }
  function Fo() {
    if (S = le(0), Y = !1, a("app").classList.remove("paused"), Be.textContent = "Pause", jn(), S < 0) {
      Pt.textContent = "No activities", ke.textContent = "Open Edit and enable or add a movement", ke.hidden = !1;
      return;
    }
    To(), pt(), clearInterval(j), j = setInterval(Ae, 1e3);
  }
  const Vi = a("videoStage"), st = a("videoSound"), Ro = 0, Ht = 1;
  let lt = null, dt = null, D = null, ct = null, ln = 0, Yn = !1, ie = null, Un = null;
  function ji() {
    var e;
    return (e = window.YT) != null && e.Player ? Promise.resolve(window.YT) : lt || (lt = new Promise((t, n) => {
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
        clearInterval(o), lt = null, n(new Error("YouTube did not load"));
      }, 15e3);
      if (!document.querySelector('script[src*="youtube.com/iframe_api"]')) {
        const s = document.createElement("script");
        s.src = "https://www.youtube.com/iframe_api", s.async = !0, s.onerror = () => {
          clearInterval(o), clearTimeout(r), lt = null, n(new Error("YouTube did not load"));
        }, document.head.appendChild(s);
      }
    }), lt);
  }
  function Yi() {
    return dt || (dt = ji().then((e) => new Promise((t) => {
      const n = document.createElement("div");
      a("videoFrame").appendChild(n), D = new e.Player(n, {
        width: "100%",
        height: "100%",
        playerVars: { playsinline: 1, rel: 0, iv_load_policy: 3, modestbranding: 1 },
        events: { onReady: () => t(D), onStateChange: (i) => Ao(i.data), onError: (i) => No(i.data) }
      });
    })), dt.catch(() => {
      dt = null;
    }), dt);
  }
  function Ui(e) {
    !(e != null && e.videoId) || e.videoError || Yi().then((t) => {
      ie || ct === e.videoId || (ct = e.videoId, ln = Number(e.start) || 0, Yn = !1, t.mute(), t.loadVideoById({ videoId: e.videoId, startSeconds: ln }));
    }).catch(() => {
    });
  }
  function Bo() {
    const e = le(S + 1);
    e >= 0 && h[e].kind === "video" && Ui(h[e]);
  }
  function Ao(e) {
    if (!ie) {
      e === Ht && !Yn && (Yn = !0, D.pauseVideo(), D.seekTo(ln, !0));
      return;
    }
    Vi.classList.toggle("playing", e === Ht), e === Ht && Ji(ie.videoId, D.getDuration()) && ce(), e === Ro && zt();
  }
  function No(e) {
    const t = ie;
    if (!t) {
      ct = null;
      return;
    }
    e === 101 || e === 150 ? (Do(t.videoId), W("That video can’t play outside YouTube, so it was skipped")) : W("The video couldn’t play, so it was skipped"), zt();
  }
  function Io(e) {
    if (a("app").classList.add("videoStep"), st.hidden = !0, ie = e, clearTimeout(Un), !e.videoId) {
      W("This video step has no link yet, so it was skipped"), setTimeout(() => zt(), 0);
      return;
    }
    Yi().then((t) => {
      if (ie !== e) return;
      const n = Number(e.start) || 0;
      ct !== e.videoId ? (ct = e.videoId, ln = n, t.loadVideoById({ videoId: e.videoId, startSeconds: n })) : (t.seekTo(n, !0), t.playVideo()), t.unMute(), Y && t.pauseVideo(), Un = setTimeout(() => {
        ie !== e || Y || (t.getPlayerState() !== Ht ? (t.mute(), t.playVideo(), st.hidden = !1) : t.isMuted() && (st.hidden = !1));
      }, 1600);
    }).catch(() => {
      ie === e && (W("YouTube didn’t load, so the video was skipped"), zt());
    });
  }
  function Zi() {
    if (!a("app").classList.contains("videoStep")) return;
    const e = x.querySelector(".workGrid"), t = x.querySelector(".sessionControlRow"), n = e.getBoundingClientRect().top, i = (t == null ? void 0 : t.offsetHeight) || 42, o = window.innerHeight - n - 16 - i - 84;
    e.style.setProperty("--theater-h", Math.max(240, Math.round(o)) + "px");
  }
  window.addEventListener("resize", Zi);
  function dn() {
    clearTimeout(Un);
    const e = ie;
    if (ie = null, a("app").classList.remove("videoStep"), Vi.classList.remove("playing"), st.hidden = !0, e && D) {
      try {
        D.pauseVideo();
      } catch {
      }
      ct = null;
    }
  }
  function zt() {
    const e = ie;
    !e || h[S] !== e || (dn(), clearInterval(j), ut(), j = setInterval(Ae, 1e3));
  }
  st.addEventListener("click", () => {
    D && (D.unMute(), D.playVideo()), st.hidden = !0;
  });
  function Po(e) {
    var i;
    const t = Number(e.start) || 0;
    if (e.useVideoLength === !1) return t + (Number(e.duration) || 300);
    const n = D && ie === e && Number((i = D.getDuration) == null ? void 0 : i.call(D)) || 0;
    return Number(e.end) || n || Number(e.videoDuration) || t + (Number(e.duration) || 300);
  }
  function Ki(e, t) {
    const n = L[M];
    [fe, V, be, n == null ? void 0 : n.warmup, n == null ? void 0 : n.strength, n == null ? void 0 : n.cooldown, n == null ? void 0 : n.sequence].forEach((i) => (Array.isArray(i) ? i : []).forEach((o) => {
      o && o.kind === "video" && o.videoId === e && t(o);
    }));
  }
  function Ji(e, t) {
    t = Math.round(Number(t) || 0);
    let n = !1;
    return e && t > 0 && Ki(e, (i) => {
      i.videoDuration !== t && (i.videoDuration = t, n = !0);
    }), n;
  }
  function Do(e) {
    Ki(e, (t) => {
      t.videoError = "embed";
    }), ce();
  }
  function Ho(e) {
    const t = e.videoId;
    if (!t) return;
    const n = () => {
      ne.classList.contains("open") ? ee || _() : (_(), ce());
    };
    fetch("https://www.youtube.com/oembed?format=json&url=" + encodeURIComponent("https://www.youtube.com/watch?v=" + t)).then((i) => i.ok ? i.json() : Promise.reject(i.status)).then((i) => {
      e.videoId === t && (e.videoTitle = i.title || "", e.autoName && i.title && (e.name = i.title), n());
    }).catch((i) => {
      e.videoId === t && i === 401 && (e.videoError = "embed", n());
    }), zo(t).then((i) => {
      Ji(t, i) && n();
    }).catch((i) => {
      i === "embed" && e.videoId === t && (e.videoError = "embed", n());
    });
  }
  function zo(e) {
    return ji().then((t) => new Promise((n, i) => {
      const o = document.createElement("div");
      o.className = "videoProbe", o.setAttribute("aria-hidden", "true");
      const r = document.createElement("div");
      o.appendChild(r), a("app").appendChild(o);
      let s = null, l = !1;
      const u = (d, g) => {
        l || (l = !0, clearTimeout(p), setTimeout(() => {
          try {
            s == null || s.destroy();
          } catch {
          }
          o.remove();
        }, 0), g ? i(g) : n(d));
      }, p = setTimeout(() => u(0), 2e4), m = () => {
        var g;
        const d = Number((g = s == null ? void 0 : s.getDuration) == null ? void 0 : g.call(s)) || 0;
        return d > 0 && u(d), d > 0;
      };
      s = new t.Player(r, {
        width: 320,
        height: 180,
        videoId: e,
        playerVars: { playsinline: 1, mute: 1, controls: 0 },
        events: {
          onReady: () => {
            m() || (s.mute(), s.playVideo());
          },
          onStateChange: () => m(),
          onError: (d) => u(0, d.data === 101 || d.data === 150 ? "embed" : "error")
        }
      });
    }));
  }
  function pt() {
    Q = !1;
    const e = h[S];
    a("app").classList.toggle("resting", e.kind === "rest"), e.kind === "video" ? Io(e) : dn(), $ = e.duration, yt = e.duration, Pt.textContent = e.name, ke.textContent = e.group, ke.hidden = !0, _n.textContent = qi(S), ge && Dt("step", { name: e.name, group: e.group, kind: e.kind, step: S + 1, of: h.length, round: e.round || 1, rounds: sn(), duration: e.duration }), rt(), So(), Bo(), e.kind === "video" && setTimeout(Zi, 0);
  }
  function Oe() {
    var o;
    const e = ((o = h[S]) == null ? void 0 : o.kind) === "video" && !Q, t = e && $ >= 60;
    qn.textContent = t ? wt($) : $, qn.classList.toggle("long", t), e && (a("videoClock").textContent = wt($) + " left");
    const n = $ / yt * 100;
    _i.style.width = n + "%";
    const i = Oi();
    if (i && !Q) {
      const r = 100 - n;
      i.style.setProperty("--segment-progress", r + "%");
    }
  }
  function Ae() {
    var t, n;
    if (Y) return;
    const e = h[S];
    if ((e == null ? void 0 : e.kind) === "video" && !Q && ie === e) {
      const i = Number((t = D == null ? void 0 : D.getCurrentTime) == null ? void 0 : t.call(D)) || 0, o = Number(e.start) || 0, r = Po(e);
      yt = Math.max(1, r - o), (i > o || ((n = D == null ? void 0 : D.getPlayerState) == null ? void 0 : n.call(D)) === Ht) && ($ = Math.max(0, Math.ceil(r - i))), Oe(), i > o && i >= r - 0.25 && zt();
      return;
    }
    $--, Oe(), $ <= 0 && (e.rest > 0 ? $i(e.rest) : ut());
  }
  function $i(e) {
    var n;
    Q = !0, a("app").classList.add("resting");
    const t = Oi();
    t && t.style.setProperty("--segment-progress", "100%"), clearInterval(j), $ = e, yt = e, ge && Dt("rest", { duration: e }), Pt.textContent = "Rest", ke.textContent = (n = h[S]) != null && n.roundBreakAfter ? "Round " + (h[S].round + 1) + " next" : "Recovery", rt(), Oe(), j = setInterval(() => {
      Y || ($--, Oe(), $ <= 0 && (clearInterval(j), ut(), j = setInterval(Ae, 1e3)));
    }, 1e3);
  }
  function ut() {
    Q = !1;
    const e = le(S + 1);
    if (e >= 0)
      S = e, pt();
    else {
      Y = !1, Be.textContent = "Pause", a("app").classList.remove("resting", "paused"), clearInterval(j), dn(), Pt.textContent = "Complete", ke.textContent = "Move finished", ke.hidden = !1, qn.textContent = "✓";
      {
        const t = sn();
        _n.textContent = t > 1 ? t + " rounds done" : h.filter((n) => !n.roundBreak).length + " steps done";
      }
      Wi(!0);
      {
        const t = oa(7).reduce((n, i) => n + i.minutes, 0);
        ke.textContent = "Move finished · " + t + " min in the last 7 days";
      }
      _i.style.width = "100%", rt();
    }
  }
  a("skipExercise").addEventListener("click", () => {
    clearInterval(j);
    const e = h[S];
    if (Q) {
      Q = !1, a("app").classList.remove("resting");
      const n = le(S + 1);
      n >= 0 ? (S = n, pt(), j = setInterval(Ae, 1e3)) : ut();
      return;
    }
    if (e && e.rest > 0) {
      $i(e.rest);
      return;
    }
    const t = le(S + 1);
    t >= 0 ? (S = t, pt(), j = setInterval(Ae, 1e3)) : ut();
  }), a("restartSegment").addEventListener("click", () => {
    if (clearInterval(j), Y = !1, a("app").classList.remove("paused"), Be.textContent = "Pause", Q) {
      const e = h[S];
      $ = e.rest, yt = e.rest, Pt.textContent = "Rest", ke.textContent = "Recovery", a("app").classList.add("resting"), rt(), Oe();
    } else
      pt();
    j = setInterval(Q ? () => {
      Y || ($--, Oe(), $ <= 0 && (clearInterval(j), ut(), j = setInterval(Ae, 1e3)));
    } : Ae, 1e3);
  });
  function cn(e, t, n, i) {
    let o = 0, r = null, s = !1;
    function l() {
      r && cancelAnimationFrame(r), r = null, o = 0, s = !1, t.style.width = "0%", e.classList.remove("holding");
    }
    function u(d) {
      if (!s) return;
      o || (o = d);
      const g = Math.min(1, (d - o) / n);
      if (t.style.width = g * 100 + "%", g >= 1) {
        s = !1, r && cancelAnimationFrame(r), r = null, t.style.width = "100%", setTimeout(() => t.style.width = "0%", 90), i();
        return;
      }
      r = requestAnimationFrame(u);
    }
    function p(d) {
      var g;
      if (!(d && d.button !== void 0 && d.button !== 0)) {
        d == null || d.preventDefault(), l(), s = !0, e.classList.add("holding");
        try {
          (g = e.setPointerCapture) == null || g.call(e, d.pointerId);
        } catch {
        }
        r = requestAnimationFrame(u);
      }
    }
    function m() {
      s && l();
    }
    e.addEventListener("pointerdown", p), e.addEventListener("pointerup", m), e.addEventListener("pointercancel", m), e.addEventListener("lostpointercapture", m), e.addEventListener("keydown", (d) => {
      (d.key === " " || d.key === "Enter") && !d.repeat && p(d);
    }), e.addEventListener("keyup", (d) => {
      (d.key === " " || d.key === "Enter") && m();
    });
  }
  const _o = a("endWorkout");
  cn(_o, a("holdEndFill"), 1500, Vn);
  const mt = a("deleteMoveConfirm");
  a("deleteMoveOpen").addEventListener("click", () => {
    mt.classList.add("open"), mt.setAttribute("aria-hidden", "false");
  }), a("deleteMoveCancel").addEventListener("click", () => {
    mt.classList.remove("open"), mt.setAttribute("aria-hidden", "true");
  });
  function qo() {
    const e = M, t = x.querySelector('.workoutPanel[data-workout="' + e + '"]');
    t && t.remove(), delete L[e], E.order = E.order.filter((i) => i !== e);
    let n = x.querySelector(".workoutPanel[data-workout]");
    if (!n) {
      const i = "custom-" + Date.now();
      L[i] = { name: "New move", source: "Custom routine", total: 20, work: 45, rest: 15, customSequence: !0, preset: "movement", sequence: [], strength: [] }, E.order.push(i), n = xn(i, L[i]);
    }
    mt.classList.remove("open"), mt.setAttribute("aria-hidden", "true"), Rt = null, tn(), pe(n.dataset.workout), ce(), W("Move deleted");
  }
  cn(a("deleteMoveYes"), a("deleteMoveFill"), 1500, qo);
  const Zn = x.querySelector(".rubberTabs"), gt = a("rubberIndicator");
  function _t(e, t = !0) {
    if (!e || !Zn || !gt) return;
    const n = Zn.getBoundingClientRect(), i = e.getBoundingClientRect();
    gt.style.transition = t ? "left .34s cubic-bezier(.2,1.35,.4,1),width .34s cubic-bezier(.2,1.35,.4,1),transform .18s ease" : "none";
    const o = _e();
    gt.style.left = (i.left - n.left) / o + Zn.scrollLeft + "px", gt.style.width = i.width / o + "px", t && (gt.style.transform = "scaleX(1.08)", setTimeout(() => gt.style.transform = "scaleX(1)", 180));
  }
  x.querySelectorAll(".tab").forEach((e) => e.addEventListener("click", () => {
    e.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "smooth" }), x.querySelectorAll(".tab").forEach((t) => t.classList.remove("active")), x.querySelectorAll(".settingsPane").forEach((t) => t.classList.remove("active")), e.classList.add("active"), a(e.dataset.pane).classList.add("active"), _t(e, !0);
  })), requestAnimationFrame(() => _t(x.querySelector(".tab.active"), !1)), window.addEventListener("resize", () => _t(x.querySelector(".tab.active"), !1));
  const Kn = a("pixelTrailToggle"), Jn = a("rippleToggle"), vt = a("trailStrength"), ht = a("trailLife");
  function de(e, t) {
    N()[e] = t, ce();
  }
  const ft = { feel: !0, steps: !0, mood: !0, energyLevel: !0, ...N().toggles || {} };
  function Qi() {
    x.querySelectorAll("[data-toggle]").forEach((t) => t.classList.toggle("on", ft[t.dataset.toggle] !== !1)), x.querySelector(".feelSection").hidden = !0, [["steps", "stepsRow"], ["mood", "moodRow"], ["energyLevel", "energyLevelRow"]].forEach(([t, n]) => {
      a(n).hidden = ft[t] === !1;
    });
    const e = ["steps", "mood", "energyLevel"].some((t) => ft[t] !== !1);
    x.querySelector(".activityCard").hidden = !e, a("insightCard").style.gridColumn = e ? "" : "span 12";
  }
  x.querySelectorAll("[data-toggle]").forEach((e) => e.addEventListener("click", () => {
    ft[e.dataset.toggle] = ft[e.dataset.toggle] === !1, Qi(), de("toggles", { ...ft });
  })), Qi();
  function Oo() {
    Kn.classList.toggle("on", we), Jn.classList.toggle("on", qe), vt.value = Math.round(et * 100), a("trailStrengthValue").textContent = vt.value + "%", ht.value = tt, a("trailLifeValue").textContent = ht.value + " ms";
  }
  N().trailEnabled !== void 0 && (we = N().trailEnabled), N().rippleEnabled !== void 0 && (qe = N().rippleEnabled), N().trailStrength !== void 0 && (et = N().trailStrength), N().trailMaxAge !== void 0 && (tt = N().trailMaxAge), Oo(), Kn.addEventListener("click", () => {
    we = !we, Kn.classList.toggle("on", we), we || (It = []), de("trailEnabled", we);
  }), Jn.addEventListener("click", () => {
    qe = !qe, Jn.classList.toggle("on", qe), de("rippleEnabled", qe);
  }), vt.addEventListener("input", () => {
    et = Number(vt.value) / 100, a("trailStrengthValue").textContent = vt.value + "%";
  }), vt.addEventListener("change", () => de("trailStrength", et)), ht.addEventListener("input", () => {
    tt = Number(ht.value), a("trailLifeValue").textContent = ht.value + " ms";
  }), ht.addEventListener("change", () => de("trailMaxAge", tt)), Qt.addEventListener("change", () => de("upcomingCount", Ye));
  function Xi(e) {
    x.querySelectorAll(".themeBtn").forEach((n) => n.classList.toggle("active", n.dataset.theme === e));
    const t = e === "light";
    a("app").classList.toggle("light", t), y.setLight(t);
  }
  Xi(N().theme || "dark"), x.querySelectorAll(".themeBtn").forEach((e) => e.addEventListener("click", () => {
    Xi(e.dataset.theme), de("theme", e.dataset.theme);
  }));
  const Se = { steps: null, ...N().entities || {} };
  let Ge = null, $n = {};
  function Go(e) {
    const t = Object.values(e).filter((l) => l.entity_id.startsWith("sensor.") || l.entity_id.startsWith("input_number.")), n = (l) => l.attributes.friendly_name || l.entity_id, i = t.filter((l) => /step/i.test(l.entity_id) || /step/i.test(n(l)) || ["steps", "step"].includes(String(l.attributes.unit_of_measurement || "").toLowerCase())), o = t.filter((l) => !i.includes(l)), r = (l, u) => n(l).localeCompare(n(u)), s = (l, u) => /health_steps/.test(u.entity_id) - /health_steps/.test(l.entity_id) || r(l, u);
    return { suggested: i.sort(s), rest: o.sort(r), label: n };
  }
  function ea(e) {
    const t = a("stepsEntity");
    if (!t || t.matches(":focus")) return;
    const { suggested: n, rest: i, label: o } = Go(e), r = (u) => '<option value="' + I(u.entity_id) + '">' + I(o(u)) + "</option>";
    t.innerHTML = '<option value="">Not connected</option>' + (n.length ? '<optgroup label="Suggested">' + n.map(r).join("") + "</optgroup>" : "") + (i.length ? '<optgroup label="All sensors">' + i.map(r).join("") + "</optgroup>" : ""), t.value = Se.steps || "";
    const s = a("stepsStatus"), l = Se.steps && e[Se.steps];
    s.textContent = l ? "Connected · " + o(l) : s.dataset.empty;
  }
  a("stepsEntity").addEventListener("change", () => {
    Se.steps = a("stepsEntity").value || null, de("entities", { ...Se }), $n = {}, aa(), Ge && (ea(Ge), na(Ge));
  });
  function Wo(e, t = 0) {
    return new Intl.NumberFormat(void 0, { maximumFractionDigits: t }).format(e);
  }
  function ta() {
    const e = Se.steps && (Ge == null ? void 0 : Ge[Se.steps]), t = Number(e == null ? void 0 : e.state);
    return Number.isFinite(t) ? t : null;
  }
  function na(e) {
    var i;
    const t = Se.steps, n = t ? Number((i = e[t]) == null ? void 0 : i.state) : NaN;
    a("stepsMeta").textContent = t ? Number.isFinite(n) ? Wo(n) : "—" : "Set up in Settings";
  }
  let ia = 0;
  async function aa() {
    const e = Se.steps;
    if (!e || !y.ws) return;
    ia = Date.now();
    const t = /* @__PURE__ */ new Date(), n = new Date(t.getFullYear(), t.getMonth(), t.getDate() - 30);
    try {
      const i = await y.ws({ type: "recorder/statistics_during_period", start_time: n.toISOString(), end_time: t.toISOString(), statistic_ids: [e], period: "day", types: ["max"] }), o = (i == null ? void 0 : i[e]) || [], r = {};
      if (o.forEach((s) => {
        Number.isFinite(s.max) && (r[te(new Date(s.start))] = s.max);
      }), !Object.keys(r).length) {
        const s = await y.ws({ type: "history/history_during_period", start_time: n.toISOString(), end_time: t.toISOString(), entity_ids: [e], minimal_response: !0, no_attributes: !0, significant_changes_only: !1 });
        ((s == null ? void 0 : s[e]) || []).forEach((l) => {
          const u = Number(l.s ?? l.state), p = l.lu ? l.lu * 1e3 : Date.parse(l.last_updated || l.last_changed);
          if (!Number.isFinite(u) || !p) return;
          const m = te(new Date(p));
          r[m] = Math.max(r[m] || 0, u);
        });
      }
      $n = r, Ce();
    } catch {
    }
  }
  function We() {
    Ce();
  }
  We(), setInterval(() => {
    We(), Et(), ze();
  }, 10 * 60 * 1e3);
  function oa(e) {
    const t = {}, n = {};
    E.history.forEach((s) => {
      const l = te(new Date(s.start));
      t[l] = (t[l] || 0) + (s.seconds || 0) / 60, n[l] = (n[l] || 0) + 1;
    });
    const i = /* @__PURE__ */ new Date(), o = te(i), r = [];
    for (let s = e - 1; s >= 0; s--) {
      const l = new Date(i.getFullYear(), i.getMonth(), i.getDate() - s), u = te(l), p = E.checkins.filter((d) => d.date === u), m = (d) => {
        const g = p.map((T) => T[d]).filter(Boolean);
        return g.length ? g.reduce((T, C) => T + C, 0) / g.length : null;
      };
      r.push({
        key: u,
        date: l,
        minutes: Math.round(t[u] || 0),
        moves: n[u] || 0,
        steps: u === o && ta() != null ? ta() : $n[u] ?? null,
        mood: m("mood"),
        energy: m("energy")
      });
    }
    return r;
  }
  function Vo(e) {
    let t = e.length - 1;
    e[t] && !e[t].minutes && t--;
    let n = 0;
    for (; t >= 0 && e[t].minutes > 0; )
      n++, t--;
    return n;
  }
  function Ce() {
    const e = a("insightCard");
    if (!e) return;
    const t = oa(30), n = Vo(t), i = t.reduce((d, g) => d + g.minutes, 0), o = /* @__PURE__ */ new Date(), r = te(o), s = new Date(o.getFullYear(), o.getMonth(), o.getDate() - (o.getDay() + 6) % 7), l = [...Array(7)].map((d, g) => {
      const T = new Date(s.getFullYear(), s.getMonth(), s.getDate() + g), C = te(T), v = t.find((b) => b.key === C);
      return { d: T, k: C, minutes: v ? v.minutes : 0, today: C === r, future: C > r };
    }), u = l.reduce((d, g) => d + g.minutes, 0), p = Math.max(10, ...l.map((d) => d.minutes)), m = (d, g, T) => '<div class="activityRow"><div class="activityRowIcon" aria-hidden="true">' + d + '</div><div><div class="activityRowName">' + I(g) + '</div><div class="activityRowMeta">' + I(T) + "</div></div></div>";
    e.innerHTML = '<div class="activityHeader"><div class="activityIcon" aria-hidden="true">↗</div><div class="activityTitle">Movement</div></div><div class="activityRows movementReadings">' + m("◷", "This week", u + " min") + m("↯", "Streak", n + " day" + (n === 1 ? "" : "s")) + m("▦", "30 days", i + " min") + '</div><div class="weekBars">' + l.map(
      (d) => '<div class="weekBar' + (d.today ? " today" : "") + (d.future ? " future" : "") + '" title="' + I(d.minutes + " min") + '"><div class="weekBarTrack"><span style="height:' + (d.minutes ? Math.max(6, d.minutes / p * 100) : 0) + '%"></span></div><div class="dayLabel">' + I(new Intl.DateTimeFormat(void 0, { weekday: "short" }).format(d.d)) + "</div></div>"
    ).join("") + "</div>";
  }
  const ra = a("tvNav");
  y.fullscreenSupported || (ra.hidden = !0), ra.addEventListener("click", () => y.toggleFullscreen()), x.addEventListener("keydown", (e) => {
    !je.workout.classList.contains("active") || Bt.classList.contains("active") || e.target.closest("input,select,textarea,.holdEnd") || (e.key === "MediaPlayPause" || e.key === " " && !e.target.closest("button") ? (e.preventDefault(), Be.click()) : e.key === "MediaTrackNext" ? (e.preventDefault(), a("skipExercise").click()) : e.key === "MediaTrackPrevious" && (e.preventDefault(), a("restartSegment").click()));
  }), [P, R, B, Pe].forEach((e) => e.addEventListener("input", () => {
    const t = L[M];
    t && (t.total = Number(P.value), t.work = Number(R.value), t.rest = Number(B.value)), _();
  })), pi.addEventListener("click", Vn), ui.addEventListener("click", () => vn("settings")), a("settingsBack").addEventListener("click", Vn), Be.addEventListener("click", () => {
    if (Y = !Y, ge && Dt(Y ? "paused" : "resumed"), Be.textContent = Y ? "Resume" : "Pause", a("app").classList.toggle("paused", Y), ie && D)
      try {
        Y ? D.pauseVideo() : D.playVideo();
      } catch {
      }
  }), pe(M), $t(), Et(), Ce(), a("healthHelpOpen").addEventListener("click", () => x.querySelector(".tab[data-pane=helpPane]").click()), cn(a("resetStats"), a("resetStatsFill"), 1500, () => {
    E.history = [], E.checkins = [], Lt = "";
    try {
      localStorage.removeItem("move-assistant-dismissed");
    } catch {
    }
    ce(), We(), Et(), $t(), Ce(), ze(), W("Stats reset");
  });
  const Qn = a("morningTime"), Xn = a("eveningTime"), ei = a("checkinAutoOpen");
  Qn.value = xe().morning, Xn.value = xe().evening, ei.classList.toggle("on", N().checkinAutoOpen !== !1), [["morningTime", Qn], ["eveningTime", Xn]].forEach(([e, t]) => t.addEventListener("change", () => {
    t.value && (de(e, t.value), ze());
  })), ei.addEventListener("click", () => {
    const e = N().checkinAutoOpen === !1;
    ei.classList.toggle("on", e), de("checkinAutoOpen", e);
  }), setTimeout(Bn, 800);
  const sa = a("checkinNotify"), pn = a("checkinNotifyTarget"), la = a("checkinNotifyStatus"), jo = la.textContent;
  function da() {
    const e = y.notifyServices(), t = e.filter((o) => o.startsWith("mobile_app_")), n = t.length ? t : e, i = (o) => o.replace(/^mobile_app_/, "").replace(/_/g, " ");
    pn.innerHTML = n.map((o) => '<option value="' + I(o) + '">' + I(i(o)) + "</option>").join(""), !N().notifyTarget && n[0] && (N().notifyTarget = n[0]), pn.value = N().notifyTarget || "";
  }
  function un() {
    const e = !!N().notifyOn;
    sa.classList.toggle("on", e), a("checkinNotifyTargetRow").hidden = !e;
    const t = xe();
    la.textContent = e ? "Sends at " + t.morning + " and " + t.evening : jo;
  }
  async function ti() {
    const e = !!N().notifyOn;
    try {
      return await y.setReminderAutomation(e ? { target: N().notifyTarget, times: xe() } : null), !0;
    } catch {
      return W("Couldn't update the reminder in Home Assistant"), !1;
    }
  }
  sa.addEventListener("click", async () => {
    const e = !N().notifyOn;
    if (e && (da(), !N().notifyTarget)) {
      W("Install the Companion app on your phone first");
      return;
    }
    N().notifyOn = e, un(), await ti() ? (ce(), W(e ? "Check-in notifications on" : "Check-in notifications off")) : (N().notifyOn = !e, un());
  }), pn.addEventListener("change", () => {
    de("notifyTarget", pn.value), N().notifyOn && ti();
  }), [Qn, Xn].forEach((e) => e.addEventListener("change", () => {
    un(), N().notifyOn && ti();
  })), da(), un();
  let ni = null;
  function Yo() {
    ni || (ni = setTimeout(() => {
      ni = null, Ce();
    }, 3e4));
  }
  return {
    updateStates(e) {
      Ge = e, ea(e), na(e), Date.now() - ia > 60 * 60 * 1e3 && aa(), Yo();
    },
    applyRemoteData(e) {
      if (e && (Array.isArray(e.history) && (E.history = e.history, We()), Array.isArray(e.history) && Ce(), Array.isArray(e.checkins) && (E.checkins = e.checkins.map(hi), ze(), $t(), Et(), We(), Ce()), e.profiles && !ne.classList.contains("open") && !ge)) {
        const t = vi(e);
        Object.keys(L).forEach((n) => delete L[n]), Object.assign(L, t.profiles), E.order = t.order, L[M] || (M = E.order[0]), bi(), pe(M);
      }
    },
    suspend() {
      q = !1;
    },
    resume() {
      q || (q = !0, nt || (nt = requestAnimationFrame(an)), at || (at = requestAnimationFrame(on)), _t(x.querySelector(".tab.active"), !1));
    }
  };
}
const Xo = "0.19.0", ri = "move_assistant", er = "move_assistant", ha = "move_assistant_checkin_reminder";
function tr() {
  if (document.getElementById("move-assistant-inter")) return;
  const x = document.createElement("link");
  x.id = "move-assistant-inter", x.rel = "stylesheet", x.href = "https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,400;0,500;0,600;0,700;0,800;1,500&display=swap", document.head.appendChild(x);
}
class nr extends HTMLElement {
  setConfig(y) {
    this._config = y || {};
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
  set hass(y) {
    const a = !this._hass;
    if (this._hass = y, a) {
      this._init();
      return;
    }
    this._app && y.states !== this._lastStates && (this._lastStates = y.states, this._app.updateStates(y.states));
  }
  connectedCallback() {
    var y;
    (y = this._app) == null || y.resume();
  }
  disconnectedCallback() {
    var y;
    (y = this._app) == null || y.suspend();
  }
  async _init() {
    tr();
    const y = this.shadowRoot || this.attachShadow({ mode: "open" });
    y.innerHTML = `<style>${Jo}</style>${$o}`;
    const a = y.getElementById("app");
    a.style.opacity = "0";
    let H = null;
    try {
      const F = await this._hass.callWS({
        type: "frontend/get_user_data",
        key: ri
      });
      H = (F == null ? void 0 : F.value) ?? null;
    } catch {
    }
    this._lastSaved = JSON.stringify(H), this._app = Qo(y, {
      data: H,
      save: (F) => this._save(F),
      fire: (F, q) => this._fire(F, q),
      ws: (F) => this._hass.callWS(F),
      notifyServices: () => {
        var F, q;
        return Object.keys(((q = (F = this._hass) == null ? void 0 : F.services) == null ? void 0 : q.notify) || {}).sort();
      },
      setReminderAutomation: (F) => this._setReminderAutomation(F),
      setLight: (F) => this.classList.toggle("lightBody", F),
      fullscreenSupported: !!(this.requestFullscreen || this.webkitRequestFullscreen),
      toggleFullscreen: () => this._toggleFullscreen()
    }), this._lastStates = this._hass.states, this._app.updateStates(this._hass.states), this.isConnected || this._app.suspend(), a.style.transition = "opacity .2s ease", a.style.opacity = "", this._subscribe();
  }
  _subscribe() {
    var a;
    const y = (a = this._hass) == null ? void 0 : a.connection;
    y != null && y.subscribeMessage && y.subscribeMessage(
      (H) => {
        var q;
        const F = JSON.stringify((H == null ? void 0 : H.value) ?? null);
        F === this._lastSaved || F === this._pendingJson || (this._lastSaved = F, (q = this._app) == null || q.applyRemoteData(H.value));
      },
      { type: "frontend/subscribe_user_data", key: ri }
    ).catch(() => {
    });
  }
  _save(y) {
    this._pendingJson = JSON.stringify(y), clearTimeout(this._saveTimer), this._saveTimer = setTimeout(async () => {
      const a = this._pendingJson;
      try {
        await this._hass.callWS({
          type: "frontend/set_user_data",
          key: ri,
          value: JSON.parse(a)
        }), this._lastSaved = a;
      } catch {
        this._toast("Couldn't save to Home Assistant");
      }
    }, 400);
  }
  _fire(y, a = {}) {
    var H, F;
    ((H = this._config) == null ? void 0 : H.events) !== !1 && ((F = this._hass) == null || F.callWS({
      type: "fire_event",
      event_type: er,
      event_data: { action: y, ...a }
    }).catch(() => {
    }));
  }
  // Keeps one Home Assistant automation in sync with the check-in times.
  // Passing null removes it.
  async _setReminderAutomation(y) {
    const a = `config/automation/config/${ha}`;
    if (!y) {
      try {
        await this._hass.callApi("DELETE", a);
      } catch (q) {
        if ((q == null ? void 0 : q.status_code) !== 404 && (q == null ? void 0 : q.status) !== 404) throw q;
      }
      return;
    }
    const H = (q) => `${q}:00`, F = window.location.pathname;
    await this._hass.callApi("POST", a, {
      id: ha,
      alias: "Move Assistant check-in reminder",
      description: "Created by Move Assistant. Change it in Move Assistant → Settings → Check-in.",
      mode: "single",
      triggers: [
        { trigger: "time", at: H(y.times.morning), id: "morning" },
        { trigger: "time", at: H(y.times.evening), id: "evening" }
      ],
      conditions: [],
      actions: [
        {
          action: `notify.${y.target}`,
          data: {
            title: "Move Assistant",
            message: "{{ 'Morning' if trigger.id == 'morning' else 'Evening' }} check-in is ready",
            data: { url: F, clickAction: F }
          }
        }
      ]
    });
  }
  _toggleFullscreen() {
    const y = document;
    if (y.fullscreenElement || y.webkitFullscreenElement) {
      (y.exitFullscreen || y.webkitExitFullscreen).call(y);
      return;
    }
    const a = this.requestFullscreen || this.webkitRequestFullscreen;
    Promise.resolve(a.call(this)).catch(
      () => this._toast("Full screen isn't available here")
    );
  }
  _toast(y) {
    var H;
    const a = (H = this.shadowRoot) == null ? void 0 : H.getElementById("toast");
    a && (a.textContent = y, a.classList.add("show"), setTimeout(() => a.classList.remove("show"), 2600));
  }
}
customElements.get("move-assistant-card") || (customElements.define("move-assistant-card", nr), window.customCards = window.customCards || [], window.customCards.push({
  type: "move-assistant-card",
  name: "Move Assistant",
  description: "Guided movement timer with your Home Assistant activity data.",
  preview: !1
}), console.info(`%c MOVE ASSISTANT %c ${Xo} `, "background:#D0FF00;color:#090909;font-weight:700", ""));
