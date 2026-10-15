const fo = ':host{display:flex;flex-direction:column;min-height:calc(100dvh - var(--header-height,0px));position:relative;background:#050505;color-scheme:dark;--bg:#050505;--page:#090909;--card:#1d1d1d;--card2:#242424;--tile:#252525;--tile-2:#292929;--row:#2a2a2a;--row-rest:#22252a;--raised:#282828;--chip:#292929;--bar-track:#292929;--control:#171717;--control-2:#1b1b1b;--sunken:#171717;--input:#151515;--track:#151515;--modal:#202020;--icon-bg:#313131;--text:#f4f4f4;--soft:#cfcfcf;--muted:#969696;--accent-text:var(--secondary);--line:#3f3f3f;--lineb:#252525;--field-line:#3f3f3f;--divider:#343434;--border-hover:#5a5a5a;--bright:#efefef;--on-bright:#090909;--switch-off:#444;--knob-off:#ddd;--slider-fill:#efefef;--segment:#3f3f3f;--segment-fill:#efefef;--timer:#0d0d0d;--timer-fill:#f2f2f2;--stage:#151515;--hover:rgba(255,255,255,.06);--wash:rgba(255,255,255,.04);--wash-2:rgba(255,255,255,.08);--wash-3:rgba(255,255,255,.12);--wash-4:rgba(255,255,255,.22);--today-ring:rgba(255,255,255,.35);--dot-empty:#555;--scroll-thumb:#4a4a4a;--checkin-due:#232323;--danger:#ff7777;--danger-bg:#311313;--danger-line:#8c2e2e;--danger-fill:#D53D3D;--scrim:rgba(0,0,0,.66);--lift:rgba(0,0,0,.5);--r:36px;--gap:20px}*{box-sizing:border-box}#app{color:var(--text);font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif;transition:background .25s ease,color .25s ease;-webkit-font-smoothing:antialiased}[hidden]{display:none!important}button,input{font:inherit}#app{flex:1;display:flex;flex-direction:column;width:100%;margin:0;padding:0;background:var(--bg);text-align:left}.shell{flex:1;display:flex;flex-direction:column;position:relative;width:100%;background:var(--page);border-radius:0;overflow:visible;transition:background .28s ease}#app.resting .shell{background:#1f7a4d}#app.paused .shell{background:var(--primary)}#app.light.paused .shell{background:color-mix(in srgb,var(--primary) 55%,white)}#app.light{--bg:#EEEDED;--page:#EEEDED;--card:#FFFFFF;--card2:#F7F6F6;--tile:#F4F3F3;--tile-2:#F4F3F3;--row:#F4F3F3;--row-rest:#ECF1F6;--raised:#F4F3F3;--chip:#EEEDED;--bar-track:#EEEDED;--control:#FFFFFF;--control-2:#FFFFFF;--sunken:#F4F3F3;--input:#FFFFFF;--track:#E3E1E1;--modal:#FFFFFF;--icon-bg:var(--primary-tint);--text:#222222;--soft:#3F3F3F;--muted:#6B6B6B;--accent-text:#5B7A00;--line:#FFFFFF;--lineb:#FFFFFF;--field-line:#DAD8D8;--divider:#E6E4E4;--border-hover:#C9C7C7;--bright:#222222;--on-bright:#FFFFFF;--switch-off:#D8D6D6;--knob-off:#FFFFFF;--slider-fill:color-mix(in srgb,var(--primary) 45%,white);--segment:#D3D1D1;--segment-fill:var(--primary);--timer:#FFFFFF;--timer-fill:color-mix(in srgb,var(--primary) 30%,white);--stage:#FFFFFF;--hover:rgba(0,0,0,.05);--wash:rgba(0,0,0,.04);--wash-2:rgba(0,0,0,.06);--wash-3:rgba(0,0,0,.1);--wash-4:rgba(0,0,0,.14);--today-ring:rgba(0,0,0,.25);--dot-empty:#bbb;--scroll-thumb:#CFCDCD;--checkin-due:#FFFFFF;--danger:#C62F2F;--danger-bg:#F5DEDE;--danger-line:#E3A0A0;--scrim:rgba(20,20,20,.32);--lift:rgba(0,0,0,.16)}#app.light .activityRow:nth-child(1) .activityRowIcon{background:var(--primary-tint);color:var(--primary-ink)!important}#app.light .activityRow:nth-child(2) .activityRowIcon{background:#ffe8c8;color:#c8741f!important}#app.light .activityRow:nth-child(3) .activityRowIcon{background:#d9f4e6;color:#2e8b63!important}#app.light .activityIcon{background:#e8e1ff;color:#7859c9!important}#app.light .energyBtn:hover,#app.light .energyBtn:focus-visible,#app.light .energyBtn.selected{background:color-mix(in srgb,var(--feeling-color) 34%,white);color:#222!important}:host(.lightBody){background:#eeeded;color-scheme:light}#app.light.resting .shell{background:#7dbb98}.view{display:none;width:100%;max-width:1184px;margin:0 auto;padding:22px 22px 76.8px}.view.active{display:block;flex:1 0 auto}.card,.panel,.tile{position:relative;background:var(--card);border-radius:36px;padding:22px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.grid{display:grid;grid-template-columns:repeat(12,minmax(0,1fr));gap:16px}.eyebrow{text-transform:uppercase;color:var(--muted)}.sub{color:var(--muted);margin-top:6.4px}.pill,.primary,.navBtn,.tab,.back,.hideBtn,.addBtn{cursor:pointer}.pill{min-height:0;padding:3.2px 0;border:0;border-radius:0;background:transparent;color:var(--text);text-decoration-line:underline;text-decoration-thickness:.8px;text-underline-offset:3.2px}.tab,.back{border-radius:799.2px;min-height:41.6px;padding:0 16px;background:var(--control);border:.32px solid var(--line);color:var(--text)}.primary{border-radius:799.2px;min-height:41.6px;padding:0 17.6px;border:0;background:var(--bright);color:var(--on-bright)}.topbar{display:flex;justify-content:space-between;gap:16px;align-items:flex-start;margin-bottom:19.2px}.activityCard,.weekly{grid-column:span 6}.energySection{grid-column:span 12;margin-top:16px}.activityCard,.weekly{min-height:288px}.wellness{width:100%}.sourceTag{display:inline-flex;margin-top:11.2px;padding:6.4px 9.6px;border-radius:799.2px;background:var(--chip);color:var(--soft)}.workoutFooter{display:flex;justify-content:space-between;align-items:end;gap:22.4px;flex-wrap:wrap;margin-top:22.4px;width:100%;box-sizing:border-box}.workoutGallery{grid-column:span 12;display:flex;gap:16px;height:288px;overflow:hidden}.workoutPanel{position:relative;height:288px;flex:1 1 72px;min-width:70.4px;background:var(--card);border-radius:28.8px;padding:22.4px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);overflow:hidden;box-sizing:border-box;transition:flex .32s ease;cursor:pointer}.workoutPanel.active{flex:7 1 0;min-width:0;cursor:default}.workoutPanel.addPanel{flex:0 0 73.6px;min-width:73.6px;display:flex;align-items:center;justify-content:center;padding:14.4px}.workoutPanel{--edge-proximity:0;--cursor-angle:45deg;--edge-sensitivity:36;--color-sensitivity:56;--cone-spread:25;--fill-opacity:.18;--glow-color:hsl(199deg 97% 68% / 100%);--glow-color-60:hsl(199deg 97% 68% / 60%);--glow-color-50:hsl(199deg 97% 68% / 50%);--glow-color-40:hsl(199deg 97% 68% / 40%);--glow-color-30:hsl(199deg 97% 68% / 30%);--glow-color-20:hsl(199deg 97% 68% / 20%);--glow-color-10:hsl(199deg 97% 68% / 10%);--gradient-one:radial-gradient(at 80% 55%,#c084fc 0px,transparent 50%);--gradient-two:radial-gradient(at 69% 34%,#f472b6 0px,transparent 50%);--gradient-three:radial-gradient(at 8% 6%,#38bdf8 0px,transparent 50%);--gradient-four:radial-gradient(at 41% 38%,#c084fc 0px,transparent 50%);--gradient-five:radial-gradient(at 86% 85%,#f472b6 0px,transparent 50%);--gradient-six:radial-gradient(at 82% 18%,#38bdf8 0px,transparent 50%);--gradient-seven:radial-gradient(at 51% 4%,#f472b6 0px,transparent 50%);isolation:isolate}.workoutPanel:before,.workoutPanel:after,.workoutPanel>.edgeLight{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:28.8px;pointer-events:none;transition:opacity .18s ease-out}.workoutPanel:before{z-index:2;border:.8px solid transparent;background:linear-gradient(var(--card) 0 100%) padding-box,linear-gradient(#fff0 0,#fff0) border-box,var(--gradient-one) border-box,var(--gradient-two) border-box,var(--gradient-three) border-box,var(--gradient-four) border-box,var(--gradient-five) border-box,var(--gradient-six) border-box,var(--gradient-seven) border-box;opacity:clamp(0,calc(.72 * (var(--edge-proximity) - var(--color-sensitivity)) / (100 - var(--color-sensitivity))),.72);-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,black calc(var(--cone-spread) * 1%),transparent calc((var(--cone-spread) + 15) * 1%),transparent calc((100 - var(--cone-spread) - 15) * 1%),black calc((100 - var(--cone-spread)) * 1%));mask-image:conic-gradient(from var(--cursor-angle) at center,black calc(var(--cone-spread) * 1%),transparent calc((var(--cone-spread) + 15) * 1%),transparent calc((100 - var(--cone-spread) - 15) * 1%),black calc((100 - var(--cone-spread)) * 1%))}.workoutPanel:after{z-index:1;border:.8px solid transparent;background:var(--gradient-one) padding-box,var(--gradient-two) padding-box,var(--gradient-three) padding-box,var(--gradient-four) padding-box,var(--gradient-five) padding-box,var(--gradient-six) padding-box,var(--gradient-seven) padding-box;opacity:clamp(0,calc(var(--fill-opacity) * (var(--edge-proximity) - var(--color-sensitivity)) / (100 - var(--color-sensitivity))),.18);mix-blend-mode:soft-light;-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,transparent 5%,black 15%,black 85%,transparent 95%);mask-image:conic-gradient(from var(--cursor-angle) at center,transparent 5%,black 15%,black 85%,transparent 95%)}.workoutPanel>.edgeLight{top:-19.2px;right:-19.2px;bottom:-19.2px;left:-19.2px;z-index:3;opacity:clamp(0,calc(.62 * (var(--edge-proximity) - var(--edge-sensitivity)) / (100 - var(--edge-sensitivity))),.62);mix-blend-mode:plus-lighter;-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,black 2.5%,transparent 10%,transparent 90%,black 97.5%);mask-image:conic-gradient(from var(--cursor-angle) at center,black 2.5%,transparent 10%,transparent 90%,black 97.5%)}.workoutPanel>.edgeLight:before{content:"";position:absolute;top:19.2px;right:19.2px;bottom:19.2px;left:19.2px;border-radius:28.8px;box-shadow:inset 0 0 0 .8px var(--glow-color-60),inset 0 0 2.4px 0 var(--glow-color-40),inset 0 0 6.4px 0 var(--glow-color-30),inset 0 0 12.8px 0 var(--glow-color-20),0 0 2.4px 0 var(--glow-color-40),0 0 6.4px 0 var(--glow-color-30),0 0 12.8px 0 var(--glow-color-20),0 0 22.4px 1.6px var(--glow-color-10)}.workoutPanel:not(.borderGlowActive):before,.workoutPanel:not(.borderGlowActive):after,.workoutPanel:not(.borderGlowActive)>.edgeLight{opacity:0;transition:opacity .35s ease-out}#app.light .workoutPanel{--glow-color:hsl(199deg 97% 48% / 100%);--glow-color-50:hsl(199deg 97% 48% / 50%);--glow-color-40:hsl(199deg 97% 48% / 40%);--glow-color-30:hsl(199deg 97% 48% / 30%);--glow-color-20:hsl(199deg 97% 48% / 20%);--glow-color-10:hsl(199deg 97% 48% / 10%)}.workoutPanel:not(.active):not(.addPanel) .panelExpanded{opacity:0;filter:blur(8px);pointer-events:none}.workoutPanel:not(.active):not(.addPanel) .panelCollapsed{opacity:1;filter:blur(0)}.workoutPanel.active .panelExpanded{opacity:1;filter:blur(0);pointer-events:auto}.workoutPanel.active .panelCollapsed{opacity:0;filter:blur(6.4px);pointer-events:none}.panelExpanded{position:relative;z-index:4;width:100%;height:100%;min-width:0;box-sizing:border-box;display:flex;flex-direction:column;justify-content:space-between;transition:opacity .22s ease,filter .22s ease}.panelCollapsed{position:absolute;top:0;right:0;bottom:0;left:0;z-index:4;display:flex;align-items:center;justify-content:center;opacity:0;filter:blur(6.4px);transition:opacity .22s ease,filter .22s ease}.panelCollapsedText{writing-mode:vertical-rl;transform:rotate(180deg);white-space:nowrap}.workoutPanelTop{display:flex;justify-content:space-between;align-items:flex-start;gap:22.4px;width:100%;min-width:0;box-sizing:border-box}.workoutPanelActions{display:flex;gap:22.4px;flex-wrap:wrap;align-items:center;justify-content:flex-end;margin-left:auto}.startWorkoutBtn{background:var(--primary)!important;color:#090909!important}.startWorkoutBtn:hover{filter:brightness(1.04)}.addPanelPlus{position:relative;z-index:4;font-size:27.2px;line-height:1}.addPanelLabel{position:absolute;z-index:4;bottom:16px;writing-mode:vertical-rl;transform:rotate(180deg);color:var(--muted)}@media (max-height:820px) and (min-width:621px){.modalStatic{padding:17.6px 22.4px}.timeTile{min-height:124.8px}}@media (max-width:900px){.weekCopy{white-space:normal}.workoutGallery{overflow-x:auto;scroll-snap-type:x mandatory;padding-bottom:3.2px}.workoutPanel,.workoutPanel.active{height:288px;flex:0 0 min(68.8vw,544px);min-width:min(68.8vw,544px);scroll-snap-align:start}.workoutPanel.addPanel{flex-basis:80px;min-width:80px}.panelCollapsed{display:none}}.moveActions{display:flex;gap:22.4px;flex-wrap:wrap}.energyFloat{padding:22.4px;background:transparent;border:0}.energyScale{display:grid;grid-template-columns:repeat(6,minmax(0,1fr));gap:9.6px;margin-top:17.6px}.energyBtn{--feeling-color:#8f8f8f;--feeling-glow:rgba(255,255,255,.14);position:relative;isolation:isolate;overflow:hidden;width:100%;min-height:43.2px;padding:0 9.6px;white-space:nowrap;border-radius:12.8px;background:var(--raised);border:.32px solid var(--line);color:var(--text);cursor:pointer;transition:color .18s ease,border-color .18s ease,background .18s ease}.energyBtn>span{position:relative;z-index:2}.energyBtn:before{content:"";position:absolute;top:-18%;right:-18%;bottom:-18%;left:-18%;z-index:-2;opacity:0;background:radial-gradient(ellipse at var(--feel-x,50%) var(--feel-y,50%),color-mix(in srgb,var(--feeling-color) 88%,transparent) 0%,color-mix(in srgb,var(--feeling-color) 54%,transparent) 34%,transparent 72%);transform:scale(.82) skew(-3deg);filter:saturate(1.08) blur(.8px);transition:opacity .18s ease,transform .28s cubic-bezier(.2,.8,.2,1)}.energyBtn:after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;z-index:-1;opacity:0;pointer-events:none;background:repeating-linear-gradient(to bottom,rgba(255,255,255,.07) 0,rgba(255,255,255,.07) .8px,transparent .8px,transparent 3.2px),linear-gradient(90deg,transparent 0%,color-mix(in srgb,var(--feeling-color) 34%,transparent) var(--feel-x,50%),transparent 100%);mix-blend-mode:screen}.energyBtn:hover:before,.energyBtn:focus-visible:before,.energyBtn.selected:before{opacity:.92;transform:translate(var(--feel-shift-x,0px),var(--feel-shift-y,0px)) scale(1.08) skew(2deg);animation:feelingWarp 1.45s ease-in-out infinite alternate}.energyBtn:hover:after,.energyBtn:focus-visible:after,.energyBtn.selected:after{opacity:.55;animation:feelingScan .9s linear infinite}.energyBtn:hover,.energyBtn:focus-visible,.energyBtn.selected{background:color-mix(in srgb,var(--feeling-color) 42%,#171717);border-color:color-mix(in srgb,var(--feeling-color) 72%,#ffffff 10%);color:#f4f4f4}.energyBtn.selected{box-shadow:inset 0 0 0 .8px color-mix(in srgb,var(--feeling-color) 58%,transparent),0 0 14.4px color-mix(in srgb,var(--feeling-color) 24%,transparent)}.energyBtn[data-energy=Drained]{--feeling-color:#6E63A8}.energyBtn[data-energy=Low]{--feeling-color:#5878A8}.energyBtn[data-energy=Okay]{--feeling-color:#6F8B8A}.energyBtn[data-energy=Good]{--feeling-color:#5F9B72}.energyBtn[data-energy=Energised]{--feeling-color:#D5A53E}.energyBtn[data-energy=Great]{--feeling-color:#D56B54}@keyframes feelingWarp{0%{transform:scale(1.03) skew(-2deg) translate(-1.5%);filter:saturate(1.02) blur(.8px)}50%{transform:scale(1.12) skew(1deg) translate(1%);filter:saturate(1.22) blur(1.5px)}to{transform:scale(1.06) skew(3deg) translate(-.5%);filter:saturate(1.1) blur(.6px)}}@keyframes feelingScan{0%{background-position:0 0,-80% 0}to{background-position:0 8px,180% 0}}@media (prefers-reduced-motion: reduce){.energyBtn:before,.energyBtn:after{animation:none!important}}.energyHistory{display:grid;gap:6.4px;margin-top:9.6px}.energyLog{display:flex;justify-content:space-between;gap:9.6px;padding:8px 9.6px;border-radius:16px;background:var(--tile)}.energyLog span:last-child{color:var(--muted)}.tempoExperiment{margin-top:14.4px;padding-top:16px;border-top:.32px solid var(--line)}.tempoExperimentHead{display:flex;justify-content:space-between;align-items:flex-start;gap:16px;margin-bottom:12.8px}.tempoEstimate{white-space:nowrap}.tempoQuad{position:relative;width:min(288px,100%);aspect-ratio:1/1;border-radius:28.8px;background:#ffffff06;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);overflow:hidden;touch-action:none;cursor:crosshair}.tempoCross{position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none;background:linear-gradient(to right,transparent calc(50% - .4px),rgba(255,255,255,.12) 50%,transparent calc(50% + .4px)),linear-gradient(to bottom,transparent calc(50% - .4px),rgba(255,255,255,.12) 50%,transparent calc(50% + .4px))}.tempoDot{position:absolute;left:50%;top:50%;width:17.6px;height:17.6px;border-radius:50%;background:var(--text);transform:translate(-50%,-50%);pointer-events:none;box-shadow:0 0 0 4.8px #ffffff12}.tempoPole{position:absolute;pointer-events:none;color:var(--muted)}.tempoFast{top:9.6px;left:50%;transform:translate(-50%)}.tempoSlow{bottom:9.6px;left:50%;transform:translate(-50%)}.tempoHard{right:9.6px;top:50%;transform:translateY(-50%)}.tempoLow{left:9.6px;top:50%;transform:translateY(-50%)}.tempoReadout{margin-top:9.6px;color:var(--muted)}.tempoRevealRow{margin-top:11.2px}.tempoRevealBtn{color:var(--muted);text-decoration-color:var(--muted)}.editTempoExperiment{margin-top:11.2px}.editTempoExperiment[hidden]{display:none}.testingZone{position:relative;overflow:hidden;border-radius:22.4px;background:#202226;border:.8px solid #4a4f58;box-shadow:none;--text:#d6d9df;--soft:#c7ccd5;--muted:#9ea5b0;--line:#4a4f58;--lineb:#4a4f58;--field-line:#4a4f58;color:var(--text)}.testingZoneInner{position:relative;padding:19.2px;background:linear-gradient(rgba(176,186,199,.045) .8px,transparent .8px),linear-gradient(90deg,rgba(176,186,199,.045) .8px,transparent .8px),#202226;background-size:16px 16px}.testingZoneTitleBlock{max-width:608px;margin-bottom:19.2px}.testingZoneTitleRow{display:flex;justify-content:space-between;align-items:center;gap:16px}.testingZoneTitleRow strong{color:#d6d9df}.testingZone .tempoEstimate{color:#aeb4bf}.testingZoneExplanation{margin:8px 0 0;color:#9ea5b0;text-align:left}.testingZoneLayout{display:grid;grid-template-columns:minmax(224px,288px) minmax(0,1fr);grid-template-areas:"controller feedback";gap:25.6px;align-items:start}.testingFeedbackForm{grid-area:feedback;display:grid;gap:14.4px;min-width:0;padding:16px;border:.32px solid var(--line);border-radius:16px;background:#252525}.testingFeedbackHeading{color:#d6d9df}.testingFeedbackField{display:grid;gap:6.4px;color:#9ea5b0}.testingFeedbackField select,.testingFeedbackField textarea{width:100%;border:.32px solid var(--line);background:#171717;color:#d6d9df;border-radius:11.2px;padding:8px 9.6px;font:inherit}.testingFeedbackField textarea{resize:vertical;min-height:65.6px}.testingRating{display:grid;grid-template-columns:repeat(5,1fr);gap:4.8px}.testingRating button{min-height:30.4px;border-radius:9.6px;border:.32px solid var(--line);background:#171717;color:#c7ccd5;cursor:pointer}.testingRating button.selected{border-color:#c7ccd5;background:#343434}.testingFeedbackSubmit{justify-self:start;min-height:33.6px;padding:0 12.8px;border-radius:11.2px;border:0;background:#ffffffe0;color:#111;cursor:pointer}.testingZoneControllerWrap{grid-area:controller;display:flex;flex-direction:column;align-items:center;justify-content:flex-start}.tempoQuadFrame{width:min(256px,100%);aspect-ratio:1/1;padding:0;background:linear-gradient(rgba(176,186,199,.075) .8px,transparent .8px),linear-gradient(90deg,rgba(176,186,199,.075) .8px,transparent .8px),#202226;background-size:16px 16px,16px 16px,auto;border-radius:16px}.testingZone .tempoQuad{width:100%;height:100%;border-radius:16px;background:#202226;border:.8px solid #5a606a;box-shadow:none}.testingZone .tempoCross{background:linear-gradient(to right,transparent calc(50% - .4px),rgba(176,186,199,.2) 50%,transparent calc(50% + .4px)),linear-gradient(to bottom,transparent calc(50% - .4px),rgba(176,186,199,.2) 50%,transparent calc(50% + .4px))}.testingZone .tempoDot{width:14.4px;height:14.4px;background:transparent;border:.8px solid #c4cad4;box-shadow:0 0 0 3.2px #c4cad40d}.testingZone .tempoPole{color:#8e96a2}.testingZone .tempoReadout{width:min(256px,100%);color:#9ea5b0;text-align:center;margin-top:9.6px}.testingZone button,.testingZone input,.testingZone select,.testingZone textarea{transition:opacity .14s ease,border-color .14s ease,color .14s ease,background .14s ease}.testingZone button:hover,.testingZone button:focus-visible{filter:none;opacity:.88}@media (max-width:900px){.testingZoneLayout{grid-template-columns:1fr;grid-template-areas:"controller" "feedback"}}.activityHeader{display:flex;align-items:center;gap:11.2px;margin-bottom:16px}.activityIcon{width:35.2px;height:35.2px;border-radius:13.6px;background:var(--icon-bg);display:grid;place-items:center;font-size:16px}.activityRows{display:grid;gap:9.6px}.activityRow{display:grid;grid-template-columns:43.2px minmax(0,1fr);align-items:center;gap:11.2px;background:var(--tile-2);border-radius:24px;padding:12px 14px}.activityRowIcon{width:43.2px;height:43.2px;border-radius:16px;background:var(--icon-bg);display:grid;place-items:center;font-size:16px}.activityRowMeta{color:var(--soft);margin-top:2.4px}.toast{position:absolute;right:20.8px;top:20.8px;z-index:60;background:var(--bright);color:var(--on-bright);border-radius:799.2px;padding:8.8px 12.8px;opacity:0;transform:translateY(-6.4px);pointer-events:none;transition:opacity .18s ease,transform .18s ease}.toast.show{opacity:1;transform:none}.weekHero{display:block}.weekCopy{color:var(--muted);margin-top:9.6px;max-width:none;white-space:nowrap}.weekChips{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:8px;margin-top:19.2px}.weekChip{background:var(--tile-2);border-radius:12.8px;min-height:60.8px;padding:9.6px 11.2px;display:flex;flex-direction:column;justify-content:space-between;gap:6.4px}.weekChipTop{display:flex;justify-content:space-between;align-items:center;gap:6.4px}.weekChipMeta{color:var(--muted)}.weekTick{font-size:11.2px;font-weight:800;line-height:1}.weekChip.total{background:var(--card2)}.workoutSurface{position:relative;overflow:hidden;isolation:isolate}.workoutContent{position:relative;z-index:2}.pixelTrailCanvas{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;z-index:1;pointer-events:none}#app.light .pixelTrailCanvas{opacity:.46}.sessionHead{display:flex;justify-content:space-between;align-items:flex-start;gap:16px}.sessionActions{display:flex;gap:22.4px;align-items:center;flex-wrap:wrap;justify-content:flex-end}.holdEnd{position:relative;overflow:hidden;min-width:110.4px;min-height:41.6px;padding:0 16px;border-radius:799.2px;border:.32px solid var(--line);background:var(--control);text-decoration:none;user-select:none;-webkit-user-select:none;touch-action:none}.holdEndFill{position:absolute;inset:0 auto 0 0;width:0;background:var(--bright);pointer-events:none}.holdEndLabel{position:relative;z-index:1;mix-blend-mode:difference;color:#fff}.holdEnd.holding{border-color:var(--muted)}.exerciseTitle{margin-top:4.8px;color:var(--accent-text)}.meta{color:var(--muted);margin-top:4.8px}.progress{height:46.4px;padding:0;background:transparent;border-radius:17.6px;display:flex;gap:3.2px;margin-top:19.2px;overflow:hidden}.progressSegment{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:0;padding:0;display:block;flex:1;min-width:0;background:var(--segment);border-radius:17.6px;position:relative;overflow:hidden;cursor:default}.progressSegment:after{content:"";position:absolute;inset:0 auto 0 0;width:0;background:var(--segment-fill);transition:width .2s linear}.progressSegment.done{background:transparent;opacity:0;pointer-events:none}.progressSegment.done:after{display:none}.progressSegment.active:after{width:var(--segment-progress,0%)}#app.resting .progressSegment:not(.done):not(.active),#app.paused .progressSegment:not(.done):not(.active){background:#fff}.progressSegment.rewindable{cursor:pointer}.progressSegment.rewindable:hover{filter:brightness(1.08)}.progressSegment:focus-visible{outline:1.6px solid var(--primary);outline-offset:-2.4px}.workGrid{display:grid;grid-template-columns:minmax(0,2fr) minmax(240px,1fr);gap:16px;margin-top:16px}.timerCard,.movementCard,.nextCard{position:relative;border-radius:28.8px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.timerCard{min-height:344px;background:var(--timer);overflow:hidden}.fill{position:absolute;inset:0 auto 0 0;width:100%;background:var(--timer-fill);transition:width .2s linear}.digits{position:absolute;top:0;right:0;bottom:0;left:0;display:flex;align-items:center;justify-content:center;font-size:clamp(152px,22.4vw,312px);font-weight:850;letter-spacing:-.11em;color:#fff;mix-blend-mode:difference;font-variant-numeric:tabular-nums}.movementCard{background:var(--stage);min-height:344px;display:grid;place-items:center;padding:22.4px}.movementMark{font-size:16px;font-weight:760;color:var(--soft);text-align:center}.movementCard{overflow:hidden}.movementRippleCanvas{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;z-index:0}.movementMark{position:relative;z-index:2}.nextCard{background:var(--card);padding:22.4px;display:flex;justify-content:space-between;align-items:center;gap:16px;min-height:116.8px}.nextIcon{width:52.8px;height:52.8px;border-radius:19.2px;background:var(--icon-bg);display:grid;place-items:center;font-size:20.8px;flex:0 0 auto}.sectionLabel{margin:0 0 8px 22.4px}.moveSection{grid-column:span 12}.moveSection .workoutGallery{width:100%}.nextWrap{margin-top:16px}.nextLabel{margin:0 0 8px 22.4px}.nextCard{background:var(--card);padding:22.4px;display:flex;justify-content:space-between;align-items:center;gap:22.4px;min-height:86.4px;border-radius:28.8px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.nextMain{display:flex;align-items:center;gap:14.4px;min-width:0}.nextIcon{width:43.2px;height:43.2px;border-radius:12.8px;background:var(--icon-bg);display:grid;place-items:center;font-size:16px;flex:0 0 auto}.sessionControlRow{display:flex;justify-content:flex-end;gap:22.4px;align-items:center;margin-top:16px}.nextActions{display:flex;gap:22.4px;align-items:center;flex:0 0 auto}.skipBtn{min-width:120px;min-height:41.6px;padding:0 14.4px;border:.8px solid var(--line);background:transparent;color:var(--text);text-decoration:none}.pause{min-width:120px;min-height:41.6px;padding:0 14.4px}#app.light .nextIcon{background:#ffe6ef;color:#bd4b7a!important}.upcomingList{display:grid;gap:9.6px;margin-top:9.6px}.upcomingCard{--future-opacity:1;display:flex;align-items:center;justify-content:space-between;gap:22.4px;min-height:86.4px;padding:22.4px;border-radius:28.8px;background:var(--card);border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);opacity:var(--future-opacity);transition:opacity .22s ease}.upcomingCard:nth-child(-n+3){--future-opacity:1}.upcomingCard:nth-child(4){--future-opacity:.72}.upcomingCard:nth-child(5){--future-opacity:.48}.upcomingCard:nth-child(6){--future-opacity:.3}.upcomingCard:nth-child(n+7){--future-opacity:.16}.upcomingCard.sessionHidden{--future-opacity:.24!important;filter:saturate(.15)}.upcomingCard.sessionHidden .upcomingName{text-decoration:line-through}.upcomingCard.sessionHidden .upcomingIcon{opacity:.45}.upcomingCard.sessionHidden .upcomingMeta{opacity:.55}.upcomingInfo{display:flex;align-items:center;gap:14.4px;min-width:0}.upcomingIcon{width:43.2px;height:43.2px;flex:0 0 auto;border-radius:12.8px;background:var(--icon-bg);display:grid;place-items:center;font-size:16px}.upcomingMeta{color:var(--muted);margin-top:4px}.skipSessionBtn{flex:0 0 auto;min-height:41.6px;padding:0 14.4px;border:.8px solid var(--line);background:transparent;color:var(--text)}#app.light .upcomingIcon{background:var(--primary-tint);color:var(--primary-ink)!important}@media (max-width:900px){.weekCopy{white-space:normal}.nextCard{align-items:flex-start;flex-direction:column}.sessionControlRow{width:100%}.skipBtn,.pause{flex:1;min-width:0}.upcomingCard{align-items:flex-start;flex-direction:column}.skipSessionBtn{width:100%}}.countdown{display:none;position:fixed;top:0;right:0;bottom:0;left:0;width:100vw;height:100dvh;background:var(--page);z-index:300;align-items:center;justify-content:center;flex-direction:column;text-align:center;overflow:hidden}.countdown.active{display:flex}.pixelCanvas{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;display:block;z-index:1}.countdown:before{content:"";position:absolute;top:0;right:0;bottom:0;left:0;background:radial-gradient(circle at center,color-mix(in srgb,var(--primary) 16%,transparent),transparent 58%);pointer-events:none}.countNum{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);z-index:3}.countNum{font-size:clamp(144px,25.6vw,344px);font-weight:850;line-height:.75;letter-spacing:-.1em}.modalBackdrop{display:none;position:fixed;top:0;right:0;bottom:0;left:0;width:100vw;height:100dvh;z-index:145;background:var(--scrim);padding:28px;box-sizing:border-box;align-items:center;justify-content:center}.modalBackdrop.open{display:flex}.modal{width:min(1184px,100%);height:100%;max-width:1184px;max-height:none;overflow:hidden;background:var(--modal);border-radius:28.8px;padding:0;display:flex;flex-direction:column;box-sizing:border-box;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.modalStatic{flex:0 0 auto;padding:22.4px;background:var(--modal);border-bottom:.32px solid var(--divider)}.modalHead{display:flex;justify-content:space-between;align-items:flex-start;gap:16px;margin-bottom:12.8px}.modalHeaderActions{display:flex;gap:22.4px;align-items:center;flex:0 0 auto}.modalHead h2{margin:2.4px 0 0}.editNameRow{display:grid;gap:6.4px;margin-bottom:11.2px}.editNameLabel{color:var(--muted)}.editNameInput{min-height:46.4px;border-radius:17.6px;border:.32px solid var(--field-line);background:var(--input);color:var(--text);padding:0 14.4px}.timeTiles{display:grid;grid-auto-flow:column;grid-auto-columns:minmax(0,1fr);gap:11.2px;margin-bottom:11.2px}.timeTile{background:var(--tile);min-height:148.8px;padding:16px;display:flex;flex-direction:column;justify-content:space-between}.timeHeader{display:flex;align-items:center;gap:14.4px}.timeIcon{width:46.4px;height:46.4px;border-radius:16px;background:var(--icon-bg);display:grid;place-items:center;flex:0 0 auto;font-size:17.6px;font-weight:760}.timeCopy{min-width:0}.timeValue{color:var(--soft);margin-top:5.6px}.rangeTrack{height:46.4px;border-radius:17.6px;background:var(--track);overflow:hidden;position:relative;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.rangeFill{position:absolute;inset:0 auto 0 0;background:var(--slider-fill);border-radius:17.6px 0 0 17.6px}.rangeInput{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;opacity:0;cursor:pointer}.exerciseScroller{min-height:0;overflow-y:auto;padding:3.2px 16px 17.6px 22.4px;border-top:.16px solid var(--divider);scrollbar-gutter:stable}.exerciseScroller::-webkit-scrollbar{width:6.4px}.exerciseScroller::-webkit-scrollbar-track{background:transparent}.exerciseScroller::-webkit-scrollbar-thumb{background:var(--scroll-thumb);border-radius:799.2px}.sectionTitle{text-transform:uppercase;color:var(--muted);margin:14.4px 0 8px}.moveList{display:grid;gap:8px}.moveRow{display:flex;justify-content:space-between;align-items:center;gap:22.4px;background:var(--row);border-radius:20.8px;padding:22.4px}.moveRow.hidden{opacity:.46}.moveRow.hidden .moveItemName{text-decoration:line-through}.moveMeta{color:var(--muted);margin-top:4px}.hideBtn{border-radius:799.2px;min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text)}.removeBtn{position:relative;overflow:hidden;border-radius:799.2px;min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);cursor:pointer}.removeFill{position:absolute;inset:0 auto 0 0;width:0;background:var(--danger-fill);pointer-events:none;transition:width 0s linear}.addRow{display:grid;grid-template-columns:1fr auto;gap:8px;margin-top:14.4px}.addInput{min-height:41.6px;border-radius:799.2px;border:.32px solid var(--field-line);background:var(--input);color:var(--text);padding:0 14.4px}.addBtn{border-radius:799.2px;min-height:41.6px;padding:0 14.4px;border:0;background:var(--bright);color:var(--on-bright)}.routineSummary{margin-top:14.4px;background:var(--sunken);border-radius:20.8px;padding:12.8px 14.4px;color:var(--soft)}.settingsHeader{display:flex;align-items:center;gap:12.8px;margin-bottom:24px}.back{width:46.4px;padding:0;font-size:24px}.tabs.rubberTabs{position:relative;display:inline-flex;gap:0;padding:3.2px;margin-bottom:17.6px;border-radius:12.8px;background:var(--control);border:.32px solid var(--line);overflow:hidden}.rubberIndicator{position:absolute;top:3.2px;left:3.2px;height:calc(100% - 6.4px);width:0;border-radius:12.8px;background:var(--bright);transition:left .34s cubic-bezier(.2,1.35,.4,1),width .34s cubic-bezier(.2,1.35,.4,1),transform .18s ease;transform-origin:center;z-index:0}.tabs.rubberTabs .tab{position:relative;z-index:1;min-height:41.6px;padding:0 16px;border:0;background:transparent;color:var(--text)}.tabs.rubberTabs .tab.active{color:var(--on-bright)}.settingsPane{display:none}.settingsPane.active{display:block}.integrationList,.toggleList{display:grid;gap:9.6px}.integration,.toggleRow{display:flex;justify-content:space-between;align-items:center;gap:14.4px;background:var(--raised);border-radius:22.4px;padding:14.4px 16px}.status{color:var(--muted);margin-top:3.2px}.note{color:var(--muted);line-height:1.5;max-width:688px}.switch{position:relative;width:46.4px;height:27.2px;border-radius:799.2px;background:var(--switch-off);border:.32px solid var(--field-line);flex:0 0 auto;cursor:pointer}.switch:after{content:"";position:absolute;width:20.8px;height:20.8px;border-radius:799.2px;top:2.4px;left:2.4px;background:var(--knob-off);transition:left .18s ease}.switch.on{background:var(--bright)}.switch.on:after{left:22.4px;background:var(--on-bright)}.themeChoice{display:flex;gap:9.6px;flex-wrap:wrap;align-items:center;margin:0}.themeBtn{min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);cursor:pointer}.themeBtn.active{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.settingsSelect{min-width:96px;min-height:32px;padding:0 27.2px 0 9.6px;border-radius:12.8px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);font:inherit}.motionControlRow{align-items:center}.motionRangeWrap{display:flex;align-items:center;justify-content:flex-end;gap:9.6px;min-width:184px}.motionRangeWrap input{width:128px}.motionRangeWrap span{color:var(--muted);min-width:51.2px;text-align:right}.dangerText{color:var(--danger)}.confirmBackdrop{display:none;position:fixed;top:0;right:0;bottom:0;left:0;z-index:80;padding:22.4px;background:var(--scrim);align-items:center;justify-content:center}.confirmBackdrop.open{display:flex}.confirmCard{width:min(448px,100%);background:var(--card);border-radius:28.8px;padding:22.4px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.confirmActions{display:flex;justify-content:flex-end;align-items:center;gap:22.4px;margin-top:22.4px}.holdDelete{position:relative;overflow:hidden;min-width:88px;min-height:41.6px;padding:0 17.6px;border:.8px solid var(--danger-line);border-radius:12.8px;background:var(--danger-bg);color:var(--text);cursor:pointer}.holdDeleteFill{position:absolute;inset:0 auto 0 0;width:0;background:var(--danger-fill);pointer-events:none}.holdDeleteLabel{position:relative;z-index:1;color:var(--text)}.holdDelete.holding .holdDeleteLabel,.removeBtn.holding .removeLabel{color:#fff}.bottomNav{position:sticky;bottom:22.4px;display:flex;gap:22.4px;z-index:100;width:max-content;margin:-65.6px 0 0 22.4px}.navBtn{width:43.2px;height:43.2px;padding:0;border-radius:16px;background:var(--control);border:.32px solid var(--line);color:var(--text)}.navBtn.active{background:var(--bright);color:var(--on-bright)}@media (max-width:900px){.weekCopy{white-space:normal}.moveOption,.addMoveCard{flex-basis:144px}.weekHero{display:block}.grid{grid-template-columns:1fr}.moveSection,.activityCard,.weekly,.energySection{grid-column:auto}.workGrid{grid-template-columns:1fr}.timerCard,.movementCard{min-height:256px}.weekChips{grid-template-columns:repeat(4,minmax(0,1fr))}.timeTiles{grid-auto-flow:row;grid-template-columns:1fr}}@media (max-width:620px){.modal{width:100%;height:100%;max-height:100%}#app{padding:0}.shell{border-radius:0}.view{padding:14.4px 14.4px 75.2px}.card,.timerCard,.movementCard,.nextCard,.modal,.tile{border-radius:24px}.timerCard{min-height:224px}.digits{font-size:144px}.weekChips{grid-template-columns:repeat(2,minmax(0,1fr))}.modalBackdrop{padding:9.6px}.modal{height:100%}.modalStatic{padding:14.4px}.exerciseScroller{padding:3.2px 9.6px 14.4px 14.4px}.addRow{grid-template-columns:1fr}}button,.primary,.tab,.back,.navBtn,.themeBtn,.energyBtn,.hideBtn,.addBtn,.removeBtn,.skipBtn,.holdEnd,.switch,.editNameInput,.addInput,.rangeTrack,.progress,.progressSegment{border-radius:12px!important}.card,.panel,.tile,.workoutPanel,.timerCard,.movementCard,.nextCard,.modal{border-radius:36px}.movementCreatorLaunch{display:flex;gap:9.6px;align-items:center;margin:3.2px 0 14.4px}.movementCreatorOpen,.restAddBtn{min-height:35.2px;padding:0 12.8px;border-radius:12.8px;cursor:pointer}.movementCreatorOpen{border:0;background:var(--bright);color:var(--on-bright)}.restAddBtn{border:.32px solid var(--field-line);background:var(--control-2);color:var(--text)}.movementCreator{position:relative;margin:0 0 14.4px;padding:19.2px 22.4px;border-radius:22.4px;background:var(--card);border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.movementCreator[hidden]{display:none}.movementCreatorHead{display:flex;align-items:center;justify-content:space-between;gap:16px;margin-bottom:17.6px}.movementCreatorHead h3{margin:0}.movementCreatorClose{position:static}.movementCreatorFields{display:grid;grid-template-columns:minmax(0,1.45fr) minmax(0,.85fr);gap:16px 19.2px}.movementCreatorFields[hidden]{display:none!important}.movementCreatorFields>label{display:grid;gap:6.4px;min-width:0;color:var(--text)}.movementTimingRow{grid-column:1/-1;display:grid;grid-template-columns:minmax(240px,352px) minmax(208px,1fr) auto;gap:17.6px;align-items:end}.durationStack{display:grid;gap:6.4px;color:var(--text)}.creatorDurationRow{display:grid;grid-template-columns:minmax(96px,1fr) minmax(104px,1fr);gap:12.8px;align-items:center}.creatorNumber{width:100%;min-width:0}.creatorUnitSelect{min-height:41.6px;width:100%;padding:0 11.2px;border-radius:12.8px;border:.32px solid var(--field-line);background:var(--input);color:var(--text);font:inherit}.globalTimingToggle{display:flex!important;align-items:center;gap:8px!important;min-height:41.6px;cursor:pointer;color:var(--text)!important;white-space:nowrap}.globalTimingToggle input{position:absolute;opacity:0;pointer-events:none}.toggleTrack{position:relative;width:38.4px;height:22.4px;border-radius:799.2px;background:var(--switch-off);border:.32px solid var(--field-line);flex:0 0 auto;transition:background .16s ease}.toggleThumb{position:absolute;width:17.6px;height:17.6px;top:1.6px;left:1.6px;border-radius:50%;background:var(--knob-off);transition:left .16s ease,background .16s ease}.globalTimingToggle input:checked+.toggleTrack{background:var(--bright)}.globalTimingToggle input:checked+.toggleTrack .toggleThumb{left:17.6px;background:var(--on-bright)}.toggleLabel{color:var(--soft)}.creatorAddButton{min-width:97.6px;min-height:41.6px;align-self:end}@media (max-width:900px){.movementCreatorFields{grid-template-columns:1fr}.movementTimingRow{grid-column:auto;grid-template-columns:1fr;align-items:stretch}.globalTimingToggle{min-height:35.2px}.creatorAddButton{width:100%}}.moveRow.restItem{background:var(--row-rest)}.moveKindBadge{display:inline-flex;margin-left:6.4px;padding:2.4px 5.6px;border:.8px solid var(--field-line);border-radius:799.2px;color:var(--muted);vertical-align:middle}@media (max-width:900px){.movementCreatorFields,.movementCreatorFields.restFields{grid-template-columns:1fr;padding-right:0}.movementCreatorClose{position:static;margin-left:auto;display:block;margin-bottom:12.8px}}.createMoveOptions{margin:0 0 14.4px;padding:14.4px;border-radius:19.2px;background:var(--card2);border:.32px solid var(--line)}.createMoveOptions[hidden]{display:none}.createOptionLabel{text-transform:uppercase;color:var(--muted);margin-bottom:8px}.createPresetChoice{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}.createPresetBtn{min-height:60.8px;padding:11.2px 12.8px;border-radius:14.4px;border:.8px solid var(--field-line);background:transparent;color:var(--text);text-align:left;cursor:pointer}.createPresetBtn strong{display:block}.createPresetBtn span{display:block;color:var(--muted);margin-top:3.2px}.createPresetBtn.active{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.createPresetBtn.active span{color:var(--on-bright);opacity:.68}.createExtras{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px;margin-top:9.6px}.createExtraToggle{display:flex;align-items:flex-start;gap:8px;padding:9.6px 11.2px;border:.8px solid var(--field-line);border-radius:14.4px;cursor:pointer}.createExtraToggle input{margin-top:2.4px}.createExtraToggle span{display:grid;gap:2.4px}.createExtraToggle small{color:var(--muted)}.creatorUnitSelect{min-height:41.6px;padding:0 9.6px;border-radius:12.8px;border:.32px solid var(--field-line);background:var(--input);color:var(--text);font:inherit}.autoRestSummary{display:inline-flex;align-items:center;gap:6.4px;margin-left:6.4px;color:var(--muted)}@media (max-width:900px){.createPresetChoice,.createExtras{grid-template-columns:1fr}}.movementDurationField{display:grid;gap:6.4px}.movementTimingHead{display:flex;align-items:center;justify-content:space-between;gap:9.6px;color:var(--muted)}.globalTimingToggle{display:inline-flex!important;grid-template-columns:none!important;align-items:center;gap:5.6px!important;color:var(--text)!important;white-space:nowrap}.globalTimingToggle input{margin:0}.globalTimingValue{min-height:41.6px;display:flex;align-items:center;padding:0 11.2px;border-radius:12.8px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--muted)}.movementTypeBtn:disabled{opacity:.32;cursor:not-allowed}.createFlow{display:grid;gap:9.6px;padding:3.2px 0 8px}.createFlow[hidden]{display:none}.createStep{border-radius:22.4px;background:var(--tile);border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);overflow:hidden}.createStepHeader{width:100%;min-height:57.6px;padding:14.4px 17.6px;border:0;background:transparent;color:var(--text);display:flex;align-items:center;justify-content:space-between;gap:19.2px;text-align:left;cursor:pointer}.createStepHeader:disabled{cursor:not-allowed;opacity:.42}.createStepIdentity{display:flex;align-items:center;gap:9.6px}.createStepNumber{width:22.4px;height:22.4px;border-radius:799.2px;display:grid;place-items:center;border:.32px solid var(--line);color:var(--muted)}.createStepSummary{min-width:0;color:var(--muted);text-align:right}.createStepBody{display:none;padding:0 14.4px 14.4px}.createStep.active .createStepBody{display:block}.createStep.active .createStepHeader{border-bottom:.32px solid var(--divider)}.createStepSlot{display:grid;gap:11.2px}.createStepFooter{display:flex;justify-content:flex-end;margin-top:14.4px}.createStepFooter .primary:disabled{opacity:.35;cursor:not-allowed}.modal.createMode .movementTimingRow{display:none}.modal.createMode .movementCreator{margin-bottom:8px}.modal.createMode .movementCreatorFields{grid-template-columns:minmax(0,1.4fr) minmax(0,1fr)}.modal.createMode .movementCreatorFields.restFields{grid-template-columns:1fr}.modal.createMode .movementCreatorActions{margin-top:14.4px}.modal.createMode .movementCreatorLaunch{margin-top:0}.modal.createMode .sectionTitle{margin-top:9.6px}.modal.createMode .modalStatic{padding-bottom:14.4px}.modal:not(.createMode) .createFlow{display:none!important}#app.resting .movementCard{background:#ffffff0e}#app.resting .movementRippleCanvas{opacity:1}#app.light.resting .movementCard{background:#ffffff38}.nextCard .skipSessionBtn{margin-left:auto}.modal:not(.createMode) .movementCreatorLaunch{margin-top:25.6px}.testingFeedbackThanks{grid-area:feedback;min-height:176px;padding:19.2px;border:.32px solid var(--line);border-radius:16px;background:#252525;display:flex;flex-direction:column;justify-content:center;align-items:flex-start;gap:6.4px}.testingFeedbackThanks[hidden]{display:none}.testingFeedbackThanks strong{color:#f0f0f0}.testingFeedbackThanks p{margin:0;color:#9ea5b0}.testingFeedbackThanks a{color:#d6d9df;text-underline-offset:2.4px}:host(:fullscreen){overflow:auto;width:100vw;height:100vh}.entitySelect{max-width:min(256px,36.8vw);text-overflow:ellipsis}.integration .status code{padding:.8px 4.8px;border-radius:4.8px;background:var(--wash-2)}.integration .pill[disabled]{cursor:default;opacity:.7}#app :focus{outline:none}#app :focus-visible{outline:2.4px solid var(--primary);outline-offset:2.4px}#app .workoutPanel:focus-visible{outline-offset:-2.4px}@media (max-width:620px){.bottomNav{margin-left:14.4px}}.shell:has(.countdown.active) .bottomNav{visibility:hidden}@media (max-width:900px){.workoutPanel:not(.active):not(.addPanel) .panelExpanded{opacity:1;filter:none;pointer-events:auto}}.grid>*{min-width:0}.energyBtn[data-level="1"]{--feeling-color:#6E63A8}.energyBtn[data-level="2"]{--feeling-color:#5878A8}.energyBtn[data-level="3"]{--feeling-color:#6F8B8A}.energyBtn[data-level="4"]{--feeling-color:#5F9B72}.energyBtn[data-level="5"]{--feeling-color:#D5A53E}.energyBtn[data-level="6"]{--feeling-color:#D56B54}.checkinQuestion+.checkinQuestion{margin-top:28.8px}.checkinStatus{margin-top:17.6px;color:var(--muted)}.checkinStatus.done{color:var(--text)}.checkinStatus.done:before{content:"✓  "}.insightSection{grid-column:span 12;margin-top:16px}.insightCard{display:grid;gap:22.4px}.insightTop{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:22.4px;align-items:end}.insightStats{display:grid;grid-auto-flow:column;grid-auto-columns:minmax(104px,1fr);gap:8px}.insightBody{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1.3fr);gap:22.4px;align-items:end}.insightLines{display:grid;gap:9.6px}.insightLine.muted{color:var(--muted)}.dayStrip{display:grid;grid-template-columns:repeat(14,minmax(0,1fr));gap:4.8px;align-items:end}.day{display:grid;gap:6.4px;justify-items:center}.dayBars{position:relative;width:100%;height:96px;border-radius:9.6px;background:var(--wash);overflow:hidden}.stepBar,.moveBar{position:absolute;bottom:0;border-radius:8px}.stepBar{left:0;right:0;background:var(--wash-3)}.moveBar{left:22%;right:22%;background:var(--primary)}.day.today .dayBars{box-shadow:inset 0 0 0 .8px var(--today-ring)}.dayDots{display:flex;gap:2.4px}.dayDot{width:6.4px;height:6.4px;border-radius:50%}.dayDot.empty{box-shadow:inset 0 0 0 .8px var(--dot-empty)}.dayLabel{color:var(--muted)}.day.today .dayLabel{color:var(--text)}.chartLegend{display:flex;gap:14.4px;flex-wrap:wrap;margin-top:11.2px;color:var(--muted)}.chartLegend i{display:inline-block;width:8px;height:8px;border-radius:2.4px;margin-right:4.8px;vertical-align:-.8px}.lgMove{background:var(--primary)}.lgSteps{background:var(--wash-4)}.lgDot{background:linear-gradient(90deg,#5f9b72 50%,#d5a53e 50%);border-radius:50%!important}@media (max-width:900px){.insightSection{grid-column:auto}.insightTop,.insightBody{grid-template-columns:1fr}.insightStats{grid-auto-flow:row;grid-template-columns:repeat(auto-fit,minmax(96px,1fr))}.dayBars{height:72px}}@media (max-width:900px){.energyScale{grid-template-columns:repeat(3,minmax(0,1fr))}}.checkinBackdrop{z-index:160}.checkinCard{width:min(576px,100%)}.checkinCard .sub{margin-top:8px}.checkinSliders{display:grid;gap:11.2px;margin-top:19.2px}.checkinTile{min-height:0;gap:14.4px}.scaleEnds{display:flex;justify-content:space-between;margin-top:6.4px;color:var(--muted)}.rangeTrack:focus-within{outline:2.4px solid var(--primary);outline-offset:2.4px}.checkinTab{position:fixed;right:0;top:50%;transform:translateY(-50%);z-index:120;display:flex;flex-direction:column;align-items:center;gap:9.6px;padding:14.4px 9.6px;border:.32px solid var(--line);border-right:0;border-radius:12.8px 0 0 12.8px!important;background:var(--control);color:var(--text);cursor:pointer;transition:padding .18s ease,background .18s ease}.checkinTab:hover{padding-right:12.8px}.checkinTabIcon{font-size:16px;line-height:1}.checkinTabLabel{writing-mode:vertical-rl;transform:rotate(180deg)}.checkinBadge{position:absolute;top:8px;left:8px;width:8px;height:8px;border-radius:50%;background:var(--secondary);box-shadow:0 0 0 2.4px var(--control),0 0 9.6px color-mix(in srgb,var(--secondary) 70%,transparent);animation:checkinPulse 1.8s ease-in-out infinite}.checkinTab.due{background:var(--checkin-due)}@keyframes checkinPulse{50%{box-shadow:0 0 0 3px var(--control),0 0 2px color-mix(in srgb,var(--secondary) 20%,transparent)}}@media (prefers-reduced-motion: reduce){.checkinBadge{animation:none}}.shell:has(#workoutView.active) .checkinTab,.shell:has(.countdown.active) .checkinTab{display:none}#app.light .checkinBadge{background:var(--primary);box-shadow:0 0 0 2.4px #fff,0 0 9.6px color-mix(in srgb,var(--primary) 50%,transparent)}.feelSection{grid-column:span 12;margin-top:16px}.feelCard{display:grid;gap:19.2px}.feelTop{display:grid;grid-template-columns:minmax(0,1fr) minmax(208px,336px);gap:22.4px;align-items:end}.feelTotals{display:grid;gap:9.6px}.feelCount{color:var(--muted)}.feelDays{display:grid;grid-template-columns:repeat(7,minmax(0,1fr));gap:8px}.feelDay{min-height:0;gap:9.6px}.feelDay.future{opacity:.4}.feelDay.today{box-shadow:inset 0 0 0 .8px var(--today-ring)}.feelDots{font-size:6.4px;letter-spacing:1.6px;color:var(--muted)}.feelMeter{display:grid;gap:4.8px}.feelMeterTop{display:flex;justify-content:space-between;gap:6.4px;color:var(--muted)}.feelMeterTop span:last-child{color:var(--text)}.feelTrack{height:6.4px;border-radius:799.2px;background:var(--wash-2);overflow:hidden}.feelTrack span{display:block;height:100%;border-radius:799.2px}.feelTotals .feelTrack{height:9.6px}@media (max-width:900px){.feelSection{grid-column:auto}.feelTop{grid-template-columns:1fr}.feelDays{grid-template-columns:repeat(4,minmax(0,1fr))}}@media (max-width:620px){.feelDays{grid-template-columns:repeat(2,minmax(0,1fr))}}.checkinTile .timeHeader{align-items:center}.checkinTab:not(.due){opacity:.6}.checkinTab:not(.due):hover{opacity:1}.activityCard{grid-column:span 3}.weekly{grid-column:span 9;cursor:pointer;transition:border-color .18s ease,background .18s ease}.weekly:hover{border-color:var(--border-hover)}.weeklyExpand{position:absolute;top:19.2px;right:22.4px;font-size:16px;color:var(--muted);transition:transform .18s ease}.weekly:hover .weeklyExpand{transform:scale(1.15)}.weekChips{grid-template-columns:repeat(8,minmax(0,1fr))}.weekChipBottom{display:flex;justify-content:space-between;align-items:flex-end;gap:4.8px}.face{width:20.8px;height:20.8px;flex:0 0 auto;display:block}.face.empty circle{fill:none;stroke:var(--dot-empty);stroke-width:1.2;stroke-dasharray:2.5 2.5}.weekChip.total .face{width:24px;height:24px}.insightBackdrop{z-index:155}.insightModalCard{width:min(992px,100%);max-height:calc(100dvh - 56px);overflow:auto}.insightModalHead{display:flex;justify-content:space-between;align-items:center;margin-bottom:9.6px}.insightModalHead .sectionLabel{margin:0}.insightModalCard .dayBars{height:160px}.insightBody.chartOnly{grid-template-columns:1fr}.dayFace .face{width:17.6px;height:17.6px}.chartLegend span{display:inline-flex;align-items:center}.chartLegend .face{width:9.6px;height:9.6px;margin-right:4.8px}@media (max-width:1200px){.activityCard{grid-column:span 4}.weekly{grid-column:span 8}.weekChips{grid-template-columns:repeat(4,minmax(0,1fr))}}@media (max-width:900px){.activityCard,.weekly{grid-column:auto}.insightModalCard .dayBars{height:88px}.dayFace .face{width:12.8px;height:12.8px}}.weekChipTime{white-space:nowrap}.insightCard{grid-column:span 9;align-content:start}.insightEyebrow{margin-bottom:-11.2px}.insightStats{grid-auto-columns:minmax(88px,1fr)}.insightCard .dayBars{height:120px}@media (max-width:1200px){.insightCard{grid-column:span 8}.insightTop{grid-template-columns:1fr}}@media (max-width:900px){.insightCard{grid-column:auto}.insightCard .dayBars{height:80px}}.helpBackdrop{z-index:170}.helpCard .helpSteps,.helpCard .helpNote{max-width:688px}.helpHead{display:flex;justify-content:space-between;align-items:flex-start;gap:16px}.helpCard .note{margin:0}.helpSteps{margin:19.2px 0 0;padding:0;list-style:none;counter-reset:help;display:grid;gap:9.6px}.helpSteps li{counter-increment:help;display:grid;gap:4.8px;position:relative;padding:14.4px 16px 14.4px 52.8px;border-radius:20.8px;background:var(--tile);color:var(--muted)}.helpSteps li:before{content:counter(help);position:absolute;left:14.4px;top:12.8px;width:25.6px;height:25.6px;border-radius:9.6px;display:grid;place-items:center;background:var(--icon-bg);color:var(--text)}.helpSteps strong,.helpSteps b,.helpNote b{color:var(--text)}.helpAction{display:block;padding:8px 9.6px;border-radius:11.2px;background:var(--control-2);border:.32px solid var(--field-line);color:var(--text)}.helpCard code{padding:.8px 4.8px;border-radius:4.8px;background:var(--wash-2)}.helpNote{display:grid;gap:3.2px;margin-top:9.6px;padding:12.8px 16px;border-radius:17.6px;border:.32px solid var(--field-line);color:var(--muted)}.helpNote strong{color:var(--text)}.rowLabel{grid-column:1/-1;margin-top:16px;margin-bottom:-8px}.checkinTab{flex-direction:row;align-items:center;gap:0}.checkinTabMain{display:flex;flex-direction:column;align-items:center;gap:9.6px}.checkinPeek{display:grid;gap:3.2px;justify-items:start;white-space:nowrap;overflow:hidden;max-width:0;opacity:0;margin-right:0;transition:max-width .32s cubic-bezier(.2,1.2,.4,1),opacity .2s ease,margin-right .32s ease}.checkinTab.peek{padding-left:17.6px;opacity:1}.checkinTab.peek .checkinPeek{max-width:176px;opacity:1;margin-right:14.4px}.peekCountdown{font-size:24px;font-weight:800;letter-spacing:-.04em;line-height:1;font-variant-numeric:tabular-nums}.peekAt{color:var(--muted)}@media (prefers-reduced-motion: reduce){.checkinPeek{transition:none}}.activityRowMeta{color:var(--text);margin-top:1.6px;font-variant-numeric:tabular-nums}.feelTop{grid-template-columns:1fr}:host{--primary:#03A9F4;--secondary:#D0FF00;--primary-tint:color-mix(in srgb,var(--primary) 16%,white);--primary-ink:color-mix(in srgb,var(--primary) 75%,black);--font:Inter,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;--w-regular:400;--w-medium:500;--w-semibold:600;--w-bold:700;--w-heavy:800;--t-display:64px;--t-title:22px;--t-value:22px;--t-section:18px;--t-strong:16px;--t-body:14px;--t-caption:12px;--lh-display:1.05;--lh-title:1}@media (max-width:620px){:host{--t-display:46px;--t-title:20px;--t-value:20px;--t-section:16px;--t-strong:15px;--t-body:14px;--t-caption:11px;--lh-display:.92;--lh-title:1.05}}#app{font-family:var(--font);font-size:var(--t-body);font-weight:var(--w-regular);line-height:1.4}#app button,#app input,#app select,#app textarea{font-family:inherit}#app strong,#app b{font-weight:var(--w-bold)}.title,.workoutName,.exerciseTitle,.insightBig,.feelHeadline,.settingsTitle,.weekMetric{font-size:var(--t-display);font-weight:var(--w-heavy);line-height:var(--lh-display);letter-spacing:-.055em}.activityTitle,.confirmTitle,.modalHead h2,.paneTitle,.movementCreatorHead h3,.testingFeedbackThanks strong{font-size:var(--t-title);font-weight:var(--w-medium);font-style:italic;line-height:var(--lh-title);letter-spacing:-.03em}.paneTitle{margin:0 0 10px}.activityRowMeta,.nextName,.upcomingName,.editNameInput{font-size:var(--t-value);font-weight:var(--w-regular);line-height:1.15;letter-spacing:-.02em}.insightLine strong{font-weight:var(--w-bold)}.sectionLabel,.nextLabel{font-size:var(--t-section);font-weight:var(--w-regular);line-height:1.2;letter-spacing:-.01em}.activityRowName,.integration strong,.toggleRow strong,.setupSwitchRow strong,.timeLabel,.moveItemName,.weekChipTop strong,.weekChipTime,.panelCollapsedText,.activityCount,.helpSteps strong,.addGhost strong,.helpNote strong,.createStepIdentity strong,.createPresetBtn strong,.createExtraToggle strong,.testingZoneTitleRow strong,.testingFeedbackHeading,.tempoEstimate,.primary,.tab,.skipBtn,.skipSessionBtn,.hideBtn,.removeBtn,.addBtn,.themeBtn,.holdEnd,.holdDelete,.energyBtn,.movementCreatorOpen,.restAddBtn,.creatorAddButton,.testingFeedbackSubmit,.testingRating button,.toast,.checkinTabLabel{font-size:var(--t-strong);font-weight:var(--w-semibold);line-height:1.25;letter-spacing:-.01em}.sub,.meta,.note,.weekCopy,.timeValue,.addInput,.settingsSelect,.pill,.checkinStatus,.routineSummary,.helpSteps li,.helpNote,.createStepSummary,.insightLine{font-size:var(--t-body);font-weight:var(--w-regular);line-height:1.4;letter-spacing:0}.moveEditForm label>span,.addGhostText small,.eyebrow,#stepLabel,.sourceTag,.addPanelLabel,.status,.motionRangeWrap span,.moveMeta,.sectionTitle,.editNameLabel,.dayLabel,.scaleEnds,.peekAt,.upcomingMeta,.energyLog,.tempoPole,.tempoReadout,.tempoRevealBtn,.testingFeedbackField,.testingZoneExplanation,.testingFeedbackThanks p,.movementCreatorClose,.movementCreatorFields>label,.durationStack,.globalTimingToggle,.toggleLabel,.moveKindBadge,.createOptionLabel,.createPresetBtn span,.createExtraToggle small,.autoRestSummary,.movementTimingHead,.globalTimingValue,.createStepNumber,.weekChipMeta,.feelMeterTop,.feelCount,.chartLegend,#app code{font-size:var(--t-caption);font-weight:var(--w-regular);line-height:1.35;letter-spacing:0}.eyebrow,#stepLabel,.sectionTitle{letter-spacing:.1em}.globalTimingToggle{font-size:var(--t-caption)!important}.workoutGallery,.workoutPanel{height:340px}@media (max-width:900px){.workoutPanel,.workoutPanel.active{height:320px}}@media (max-width:900px){.workoutGallery{height:auto}.workoutPanel,.workoutPanel.active{height:auto;min-height:320px}}@media (max-width:620px){.view{padding-left:0;padding-right:0}.topbar,.settingsHeader,.sessionHead,.sessionControlRow{margin-left:16px;margin-right:16px}.tabs.rubberTabs,.sectionLabel,.rowLabel{margin-left:16px}.grid{gap:8px}.rowLabel,.feelSection{margin-top:16px}.rowLabel{margin-bottom:-4px}.sectionLabel{margin-bottom:8px}.workoutGallery{gap:8px}.workoutPanel,.workoutPanel.active{flex:0 0 100%;min-width:100%}.workoutPanel.addPanel{flex:0 0 100%;min-width:100%;min-height:120px}.card,.workoutPanel,.timerCard,.movementCard,.nextCard,.upcomingCard,.confirmCard{padding:16px}.activityRows,.insightCard,.feelCard{gap:8px}.activityRow,.weekChip{padding:10px 12px}.insightStats,.feelDays{gap:8px}.workGrid{gap:8px;margin-top:8px}.nextWrap,.sessionControlRow{margin-top:8px}.upcomingList{gap:8px}}.tabs.rubberTabs .tab{white-space:nowrap}@media (max-width:620px){.tabs.rubberTabs{display:flex;width:max-content;max-width:calc(100% - 32px);overflow-x:auto;scrollbar-width:none}.tabs.rubberTabs::-webkit-scrollbar{display:none}.tabs.rubberTabs .tab{flex:0 0 auto}}#app.light .timeIcon{background:var(--primary-tint);color:var(--primary-ink)!important}.insightCard{display:flex;flex-direction:column;gap:0}.movementReadings{grid-template-columns:repeat(3,minmax(0,1fr))}.weekBars{flex:1;display:grid;grid-template-columns:repeat(7,minmax(0,1fr));gap:9.6px;margin-top:16px;min-height:150px}.weekBar{display:grid;grid-template-rows:1fr auto;gap:8px;justify-items:center;min-height:0}.weekBarTrack{position:relative;width:100%;height:100%;min-height:110px;border-radius:24px;background:var(--bar-track);overflow:hidden}.weekBarTrack span{position:absolute;left:0;right:0;bottom:0;border-radius:24px;background:var(--primary)}.weekBar.today .weekBarTrack{box-shadow:inset 0 0 0 1.5px var(--primary)}.weekBar.today .dayLabel{color:var(--text);font-weight:var(--w-bold)}.weekBar.future{opacity:.35}#app.light .insightCard .activityRow:nth-child(1) .activityRowIcon{background:var(--primary-tint);color:var(--primary-ink)!important}@media (max-width:900px){.movementReadings{grid-template-columns:1fr}.weekBarTrack{min-height:90px}}@media (max-width:1200px) and (min-width:901px){.timeTiles{grid-auto-flow:row;grid-template-columns:repeat(2,1fr)}}#stepLabel{margin-top:9.6px}#exerciseMeta{margin-top:4px}.moveRow{justify-content:flex-start;gap:12.8px}.moveText{flex:1;min-width:0}.moveActions{display:flex;gap:6.4px;flex:0 0 auto}.dragHandle{flex:0 0 auto;display:grid;place-items:center;width:32px;height:40px;margin:-8px 0 -8px -9.6px;padding:0;border:0;border-radius:12px;background:transparent;color:var(--muted);cursor:grab;touch-action:none}.dragHandle:hover{background:var(--hover);color:var(--text)}.moveRow.dragging{box-shadow:0 10px 30px var(--lift),inset 0 0 0 1.5px var(--primary);position:relative;z-index:2}.moveRow.dragging .dragHandle{cursor:grabbing;color:var(--text)}.removeBtn:hover,.hideBtn:hover{border-color:var(--muted)}.toast{position:fixed;z-index:400;display:flex;align-items:center;gap:12.8px}.toast.withAction{pointer-events:auto}.toastAction{border:0;padding:0;background:none;color:inherit;font:inherit;text-decoration:underline;text-underline-offset:3px;cursor:pointer}.modalTop{flex:0 0 auto;padding:22px 22px 0}.modalTop .modalHead{margin-bottom:0;padding-bottom:16px}@media (min-width:901px){.modal:not(.createMode){display:grid;grid-template-columns:minmax(340px,420px) minmax(0,1fr);grid-template-rows:auto minmax(0,1fr)}.modal:not(.createMode) .modalTop{grid-column:1/-1;border-bottom:.32px solid var(--divider)}.modal:not(.createMode) .modalStatic{grid-column:1;grid-row:2;overflow-y:auto;border-bottom:0;border-right:.32px solid var(--divider)}.modal:not(.createMode) .exerciseScroller{grid-column:2;grid-row:2;border-top:0;padding-top:12px}.modal:not(.createMode) .timeTiles{grid-auto-flow:row;grid-template-columns:minmax(0,1fr)}}.timeTiles{align-items:start}.timingGroup{min-height:0;padding:0;justify-content:flex-start;gap:0}.timingGroup .timeRow{display:grid;gap:12.8px;padding:16px}.timingGroup .timeRow+.timeRow{border-top:.32px solid var(--divider)}.timingGroup .timeTotal{padding-bottom:14px}.setupSwitchRow{display:flex;align-items:center;justify-content:space-between;gap:12.8px;margin-bottom:11.2px;padding:12px 14px;border-radius:24px;background:var(--tile)}.removeLabel{position:relative;z-index:1}.removeBtn.holding{border-color:var(--danger-fill)}#deleteMoveConfirm{z-index:200}.moveRow{will-change:transform}.moveRow.dragging{box-shadow:0 14px 34px var(--lift),inset 0 0 0 1.5px var(--primary);z-index:3}.moveRow.editing{display:block;padding:16px;box-shadow:inset 0 0 0 1.5px var(--primary)}.moveEditForm{display:grid;gap:14.4px}.moveEditFields{display:grid;grid-template-columns:minmax(0,1.4fr) minmax(0,1fr);gap:12.8px}.moveEditForm label:not(.globalTimingToggle){display:grid;gap:6.4px;min-width:0}.moveEditForm .addInput{width:100%;min-width:0}.moveEditTiming{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:12.8px}.moveEditTiming .creatorDurationRow{display:grid;grid-template-columns:96px 128px;gap:9.6px}.creatorDurationRow.isDisabled{opacity:.38}.moveEditActions{display:flex;justify-content:flex-end;align-items:center;gap:22.4px}@media (max-width:620px){.moveEditFields{grid-template-columns:1fr}}#app.light .digits{mix-blend-mode:normal;color:var(--text)}.integration .status code{color:var(--soft)}#app.resting :is(.sessionHead,.nextLabel,.sessionControlRow){--muted:#f4f4f4;color:var(--text)}#app.paused :is(.sessionHead,.nextLabel,.sessionControlRow){--text:#090909;--muted:rgba(9,9,9,.8);--accent-text:#090909;--line:rgba(9,9,9,.3);color:var(--text)}#app.light:is(.resting,.paused) :is(.sessionHead,.nextLabel,.sessionControlRow){--text:#222222;--muted:rgba(34,34,34,.85);--accent-text:#222222;--line:rgba(34,34,34,.25);color:var(--text)}.moveList{display:flex;flex-direction:column}.movementCreatorOpen,.restAddBtn{display:inline-flex;align-items:center;gap:6px;touch-action:none;user-select:none;-webkit-user-select:none;cursor:grab;transition:transform .42s cubic-bezier(.34,1.46,.64,1),opacity .2s ease}.movementCreatorOpen svg,.restAddBtn svg{width:14px;height:14px;margin-left:-3px;opacity:.55;flex:0 0 auto}.movementCreatorOpen.lifting,.restAddBtn.lifting{transform:scale(.92);opacity:.4;cursor:grabbing;transition:transform .16s ease,opacity .16s ease}.addGhost{position:fixed;left:0;top:0;z-index:20;pointer-events:none;box-sizing:border-box;display:flex;align-items:center;gap:8px;padding:0 12.8px;overflow:hidden;white-space:nowrap;border-radius:12px;background:var(--bright);color:var(--on-bright);box-shadow:0 12px 30px var(--lift);will-change:transform;transition:width .4s cubic-bezier(.34,1.46,.64,1),height .4s cubic-bezier(.34,1.46,.64,1),border-radius .3s ease,padding .3s ease,background .2s ease,color .2s ease,box-shadow .25s ease,opacity .18s ease}.addGhost.rest{background:var(--control-2);color:var(--text);box-shadow:inset 0 0 0 .5px var(--field-line),0 12px 30px var(--lift)}.addGhostGrip{display:grid;place-items:center;flex:0 0 auto;opacity:.55}.addGhostGrip svg{width:14px;height:14px;transition:width .3s ease,height .3s ease}.addGhostText{display:grid;min-width:0}.addGhostText small{color:var(--muted);max-height:0;opacity:0;transition:max-height .3s ease,opacity .2s ease}.addGhost.overList{border-radius:20.8px;gap:12.8px;padding:0 22.4px 0 12.8px;background:var(--row);color:var(--text);box-shadow:inset 0 0 0 1.5px var(--primary),0 16px 36px var(--lift)}.addGhost.overList .addGhostGrip svg{width:18px;height:18px}.addGhost.overList .addGhostText small{max-height:20px;opacity:1;margin-top:4px}.addGhost.leaving{opacity:0}.dropSlot{flex:0 0 auto;height:0;margin-top:-8px;border-radius:20.8px;background:color-mix(in srgb,var(--primary) 9%,transparent);box-shadow:inset 0 0 0 1.5px color-mix(in srgb,var(--primary) 40%,transparent);transition:height .42s cubic-bezier(.34,1.46,.64,1),margin-top .42s cubic-bezier(.34,1.46,.64,1),opacity .2s ease}.dropSlot.leaving{opacity:0;transition:height .26s cubic-bezier(.4,0,.2,1),margin-top .26s cubic-bezier(.4,0,.2,1),opacity .16s ease}@media (prefers-reduced-motion: reduce){.addGhost,.dropSlot,.movementCreatorOpen,.restAddBtn{transition:none}}.exerciseScroller,.modalStatic,.createFlow{overflow-anchor:none}', xo = `<main id="app"><div class="shell">
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
function bo(x, f) {
  const i = (e) => x.getElementById(e), H = i("workoutView"), M = i("workoutNameInput");
  let O = !0;
  const Wn = i("homeClock");
  function jn() {
    Wn && (Wn.textContent = new Intl.DateTimeFormat(void 0, { hour: "2-digit", minute: "2-digit" }).format(/* @__PURE__ */ new Date()));
  }
  jn(), setInterval(jn, 15e3);
  const Yn = i("createFlow"), Ui = i("createMovementsSlot"), Zi = i("createTimingSlot"), Vn = i("createFinishSlot"), Ki = i("movementStepSummary"), Ji = i("timingStepSummary"), Qi = i("finishStepSummary"), en = i("continueToTiming"), Xi = i("continueToFinish"), $i = i("finishMoveButton");
  let tn = !1, Et = [];
  function ea(e) {
    !e || Et.some((t) => t.node === e) || Et.push({ node: e, parent: e.parentNode, next: e.nextSibling });
  }
  function Mt(e, t) {
    e && (ea(e), t.appendChild(e));
  }
  function ta() {
    [...Et].reverse().forEach(({ node: e, parent: t, next: n }) => {
      t && (n && n.parentNode === t ? t.insertBefore(e, n) : t.appendChild(e));
    }), Et = [];
  }
  function _e(e) {
    x.querySelectorAll(".createStep").forEach((t) => {
      t.classList.toggle("active", t.dataset.createStep === e);
    }), e === "timing" && (tn = !0), be();
  }
  function be() {
    var c, p;
    if (!z) return;
    T[E];
    const e = W.filter((m) => !m.hidden), t = e.filter((m) => m.kind !== "rest").length, n = e.filter((m) => m.kind === "rest").length;
    Ki.textContent = t ? t + " movement" + (t === 1 ? "" : "s") + (n ? " · " + n + " rest" + (n === 1 ? "" : "s") : "") : "No movements yet";
    const a = t > 0, o = x.querySelector('[data-open-step="timing"]'), r = x.querySelector('[data-open-step="finish"]');
    o.disabled = !a, en.disabled = !a, Ji.textContent = a ? Ne(I.value) + " · " + K(F.value) + " movement · " + K(B.value) + " rest" : "Add a movement first", r.disabled = !(a && tn);
    const l = ((M == null ? void 0 : M.value) || "").trim(), s = [];
    (c = i("includeWarmupPreset")) != null && c.checked && s.push("warm-up"), (p = i("includeCooldownPreset")) != null && p.checked && s.push("cooldown"), Qi.textContent = l ? l + (s.length ? " · " + s.join(" + ") : "") : s.length ? s.join(" + ") : "Name and optional extras";
  }
  function na() {
    var g, k, y;
    Yn.hidden = !1, tn = !1;
    const e = x.querySelector(".editNameRow"), t = i("createMoveOptions"), n = x.querySelector(".timeTiles"), a = i("routineSummaryModal"), o = x.querySelector(".tempoRevealRow"), r = i("tempoExperiment"), l = (g = i("warmupList")) == null ? void 0 : g.closest("section"), s = i("movementCreatorLaunch"), c = i("movementCreator"), p = (k = i("strengthList")) == null ? void 0 : k.closest("section"), m = (y = i("cooldownList")) == null ? void 0 : y.closest("section");
    [l, s, c, p, m].forEach((w) => Mt(w, Ui)), [t, n, a, o, r].forEach((w) => Mt(w, Zi)), Mt(e, Vn);
    const d = t == null ? void 0 : t.querySelector(".createExtras");
    d && Mt(d, Vn), _e("movements"), be();
  }
  function ia() {
    ta(), Yn.hidden = !0, x.querySelectorAll(".createStep").forEach((e) => e.classList.remove("active"));
  }
  x.querySelectorAll("[data-open-step]").forEach((e) => e.addEventListener("click", () => {
    e.disabled || _e(e.dataset.openStep);
  })), en.addEventListener("click", () => {
    en.disabled || _e("timing");
  }), Xi.addEventListener("click", () => _e("finish")), $i.addEventListener("click", () => i("saveWorkoutEdit").click());
  const qe = { home: i("homeView"), workout: i("workoutView"), settings: i("settingsView") }, Un = i("homeNav"), Zn = i("settingsNav");
  function nn(e) {
    Object.entries(qe).forEach(([t, n]) => n.classList.toggle("active", t === e)), Un.classList.toggle("active", e === "home"), Zn.classList.toggle("active", e === "settings"), e === "home" && setTimeout(bn, 400), e === "settings" && requestAnimationFrame(() => Lt(x.querySelector(".tab.active"), !1));
  }
  const I = i("totalTime"), F = i("workTime"), B = i("restTime"), aa = i("totalOut"), Kn = i("workOut"), Jn = i("restOut"), oa = i("totalFill"), ra = i("workFill"), sa = i("restFill"), Re = i("roundsInput"), la = i("roundsFill"), da = i("roundsOut"), ca = i("totalLabel"), pa = i("routineSummaryModal"), an = [
    { id: "standing-reach", name: "Standing reach", group: "Warm-up", kind: "warmup", hidden: !1 },
    { id: "arm-circles", name: "Arm circles", group: "Warm-up", kind: "warmup", hidden: !1 },
    { id: "hip-hinge", name: "Hip hinge drill", group: "Warm-up", kind: "warmup", hidden: !1 }
  ];
  let ye = an.map((e) => ({ ...e })), W = [
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
  const on = [
    { id: "hip-flexor", name: "Hip flexor stretch", group: "Cooldown", kind: "cooldown", hidden: !1 },
    { id: "chest-opener", name: "Chest opener", group: "Cooldown", kind: "cooldown", hidden: !1 },
    { id: "hamstring", name: "Hamstring stretch", group: "Cooldown", kind: "cooldown", hidden: !1 },
    { id: "slow-breathing", name: "Slow breathing", group: "Cooldown", kind: "cooldown", hidden: !1 }
  ];
  let we = on.map((e) => ({ ...e }));
  const ua = {
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
  }, L = Qn(f.data), T = L.profiles;
  let E = T[L.selected] ? L.selected : L.order.find((e) => T[e]) || "kettlebell";
  function Qn(e) {
    const t = e && typeof e == "object" ? JSON.parse(JSON.stringify(e)) : {}, n = t.profiles && Object.keys(t.profiles).length ? t.profiles : JSON.parse(JSON.stringify(ua)), a = (Array.isArray(t.order) ? t.order : Object.keys(n)).filter((o) => n[o]);
    return Object.keys(n).forEach((o) => {
      a.includes(o) || a.push(o);
    }), {
      v: 1,
      profiles: n,
      order: a,
      selected: t.selected || a[0],
      history: Array.isArray(t.history) ? t.history : [],
      checkins: (Array.isArray(t.checkins) ? t.checkins : ma(t.energy)).map(Xn),
      settings: { ...t.settings || {} }
    };
  }
  function ma(e) {
    if (!Array.isArray(e)) return [];
    const t = ["Drained", "Low", "Okay", "Good", "Energised", "Great"], n = [];
    return e.forEach((a) => {
      const o = new Date(a.at);
      if (isNaN(o)) return;
      const r = o.getFullYear() + "-" + String(o.getMonth() + 1).padStart(2, "0") + "-" + String(o.getDate()).padStart(2, "0"), l = o.getHours() < 14 ? "morning" : "evening";
      if (n.some((c) => c.date === r && c.slot === l)) return;
      const s = t.indexOf(a.value) + 1;
      s > 0 && n.push({ date: r, slot: l, mood: null, energy: s, at: a.at });
    }), n;
  }
  function Xn(e) {
    if (e.scale === 100) return e;
    const t = (n) => n == null ? null : Math.round((Number(n) - 1) / 5 * 100);
    return { ...e, mood: t(e.mood), energy: t(e.energy), scale: 100 };
  }
  function Be() {
    z || (L.selected = E, L.order = L.order.filter((e) => T[e] && e !== Ae), f.save(L));
  }
  function N() {
    return L.settings;
  }
  function oe(e) {
    const t = T[e];
    if (!t) return;
    E = e;
    const n = i("workoutNameInput");
    n && (n.value = t.name), I.value = t.total, F.value = t.work, B.value = t.rest, Re.value = t.rounds || 1, t.customSequence ? (ye = [], we = [], W = (t.sequence || []).map((a) => ({ ...a })), cn(t.preset || "movement", !1)) : (I.min = 3, I.max = 40, I.step = 1, F.min = 20, F.max = 60, F.step = 5, B.min = 5, B.max = 30, B.step = 5, ye = (t.warmup || an).map((a) => ({ ...a })), we = (t.cooldown || on).map((a) => ({ ...a })), W = t.strength.map((a) => Array.isArray(a) ? (([o, r, l, s = !1]) => ({ id: o, name: r, group: l, kind: "work", hidden: !!s }))(a) : { ...a })), x.querySelectorAll(".workoutPanel[data-workout]").forEach((a) => a.classList.toggle("active", a.dataset.workout === e)), q();
  }
  function ga(e, t, n) {
    const a = e.getBoundingClientRect(), o = a.width / 2, r = a.height / 2, l = t - o, s = n - r;
    let c = 1 / 0, p = 1 / 0;
    l !== 0 && (c = o / Math.abs(l)), s !== 0 && (p = r / Math.abs(s));
    const m = Math.min(Math.max(1 / Math.min(c, p), 0), 1);
    let d = Math.atan2(s, l) * (180 / Math.PI) + 90;
    return d < 0 && (d += 360), { edge: m, angle: d };
  }
  function rn(e, t, n = !1) {
    const a = e.getBoundingClientRect(), o = t.clientX - a.left, r = t.clientY - a.top, { edge: l, angle: s } = ga(e, o, r), c = n ? 100 : l * 100;
    e.style.setProperty("--edge-proximity", c.toFixed(3)), e.style.setProperty("--cursor-angle", s.toFixed(3) + "deg"), e.classList.toggle("borderGlowActive", n || c >= 30);
  }
  function $n(e) {
    e.addEventListener("pointermove", (n) => rn(e, n, !1)), e.addEventListener("pointerenter", (n) => rn(e, n, !1)), e.addEventListener("pointerdown", (n) => rn(e, n, !0));
    const t = () => {
      e.classList.remove("borderGlowActive"), e.style.setProperty("--edge-proximity", "0");
    };
    e.addEventListener("pointerleave", t), e.addEventListener("pointerup", t), e.addEventListener("pointercancel", t);
  }
  $n(i("addWorkoutPanel"));
  let z = !1, Ae = null;
  function P(e) {
    return String(e ?? "").replace(/[&<>"']/g, (t) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[t]);
  }
  function va(e) {
    return e.summary ? e.summary : e.customSequence ? Ne(e.total) + " · custom move" : Ne(e.total) + " · " + K(e.work) + " / " + K(e.rest) + " · warm-up + cooldown";
  }
  function sn(e, t) {
    var l;
    const n = document.createElement("article");
    n.className = "workoutPanel", n.dataset.workout = e, n.tabIndex = 0;
    const a = t.eyebrow === void 0 ? "Movement" : t.eyebrow, o = t.activityCount ?? (((l = t.sequence) == null ? void 0 : l.length) || 0);
    n.innerHTML = '<span class="edgeLight" aria-hidden="true"></span><div class="panelExpanded"><div><div class="workoutPanelTop"><div>' + (a ? '<div class="eyebrow">' + P(a) + "</div>" : "") + '<div class="workoutName">' + P(t.name) + '</div><div class="sub">' + P(va(t)) + '</div><span class="sourceTag">' + P(t.source || "Custom move") + '</span></div><button class="pill seeWorkoutBtn" type="button">Edit</button></div></div><div class="workoutFooter"><div><strong class="activityCount">' + (o ? o + " activities" + ((t.rounds || 1) > 1 ? " × " + t.rounds : "") : "—") + '</strong></div><div class="workoutPanelActions"><button class="primary startWorkoutBtn" type="button">Start move</button></div></div></div><div class="panelCollapsed"><div class="panelCollapsedText">' + P(t.name) + "</div></div>";
    const r = i("addWorkoutPanel");
    return i("workoutGallery").insertBefore(n, r), $n(n), n.addEventListener("click", (s) => {
      s.target.closest("button") || oe(e);
    }), n.addEventListener("keydown", (s) => {
      (s.key === "Enter" || s.key === " ") && !s.target.closest("button") && (s.preventDefault(), oe(e));
    }), n.querySelector(".seeWorkoutBtn").addEventListener("click", (s) => {
      s.stopPropagation(), oe(e), mi(!1);
    }), n.querySelector(".startWorkoutBtn").addEventListener("click", (s) => {
      s.stopPropagation(), oe(e), to();
    }), n;
  }
  function ei() {
    x.querySelectorAll(".workoutPanel[data-workout]").forEach((e) => e.remove()), L.order.forEach((e) => {
      T[e] && sn(e, T[e]);
    }), x.querySelectorAll(".workoutPanel[data-workout]").forEach((e) => e.classList.toggle("active", e.dataset.workout === E));
  }
  ei(), i("addWorkoutPanel").addEventListener("keydown", (e) => {
    (e.key === "Enter" || e.key === " ") && (e.preventDefault(), i("addWorkoutPanel").click());
  }), i("addWorkoutPanel").addEventListener("click", () => {
    z = !0, Ae = "custom-" + Date.now(), T[Ae] = {
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
    }, oe(Ae), mi(!0);
  });
  let v = [], C = 0, ne = 0, Ft = 1, Z = !1, Y = null, Rt = null, Q = !1, Ge = L.settings.upcomingCount ?? "all";
  function Bt(e, t, n) {
    return (Number(e) - t) / (n - t) * 100;
  }
  function K(e) {
    const t = Math.max(0, Number(e) || 0);
    return t >= 3600 && t % 3600 === 0 ? t / 3600 + " hr" : t >= 60 && t % 60 === 0 ? t / 60 + " min" : t >= 60 ? Math.round(t / 60) + " min" : Math.round(t) + " sec";
  }
  function Ne(e) {
    const t = Math.max(0, Number(e) || 0);
    return t >= 60 && t % 60 === 0 ? t / 60 + " hr" : t >= 60 ? Math.floor(t / 60) + " hr " + t % 60 + " min" : t + " min";
  }
  function At() {
    oa.style.width = Bt(I.value, Number(I.min), Number(I.max)) + "%", ra.style.width = Bt(F.value, Number(F.min), Number(F.max)) + "%", sa.style.width = Bt(B.value, Number(B.min), Number(B.max)) + "%", Kn.textContent = K(F.value), Jn.textContent = K(B.value);
    const e = Number(Re.value) || 1;
    la.style.width = Bt(e, 1, 10) + "%", ca.textContent = e > 1 ? "Time per round" : "Total time";
  }
  function ln(e) {
    return e.filter((t) => !t.hidden);
  }
  function dn(e, t) {
    const n = Math.max(0, Number(e) || 0);
    return Math.round(t === "hour" ? n * 3600 : t === "min" ? n * 60 : n);
  }
  function cn(e, t = !0) {
    x.querySelectorAll(".createPresetBtn").forEach((a) => a.classList.toggle("active", a.dataset.movePreset === e));
    const n = T[E];
    n && (n.preset = e), e === "work" ? (I.min = 30, I.max = 480, I.step = 30, F.min = 300, F.max = 7200, F.step = 300, B.min = 60, B.max = 1800, B.step = 60, t && (I.value = 60, F.value = 1500, B.value = 300), i("addMovementUnit").value = "min", i("addMovementDuration").value = 25, i("addRestUnit").value = "min", i("addRestDuration").value = 5) : (I.min = 3, I.max = 40, I.step = 1, F.min = 20, F.max = 60, F.step = 5, B.min = 5, B.max = 30, B.step = 5, t && (I.value = 20, F.value = 45, B.value = 15), i("addMovementUnit").value = "sec", i("addMovementDuration").value = 45, i("addRestUnit").value = "sec", i("addRestDuration").value = 30), At();
  }
  function pn() {
    const e = T[E];
    if (e != null && e.customSequence) {
      if (W = W.filter((t) => !t.presetRole), i("includeWarmupPreset").checked ? (W = [...an.map((n, a) => ({ ...n, id: "preset-warm-" + a + "-" + Date.now(), kind: "work", duration: Number(F.value), presetRole: "warmup" })), ...W], e.includeWarmup = !0) : e.includeWarmup = !1, i("includeCooldownPreset").checked) {
        const t = on.map((n, a) => ({ ...n, id: "preset-cool-" + a + "-" + Date.now(), kind: "work", duration: Number(F.value), presetRole: "cooldown" }));
        W = [...W, ...t], e.includeCooldown = !0;
      } else e.includeCooldown = !1;
      q();
    }
  }
  function ha() {
    const e = i("upcomingCountSetting");
    if (!e) return;
    const t = Math.max(1, v.length - 1), n = Ge;
    e.innerHTML = "";
    for (let r = 1; r <= t; r++) {
      const l = document.createElement("option");
      l.value = String(r), l.textContent = String(r), e.appendChild(l);
    }
    const a = document.createElement("option");
    a.value = "all", a.textContent = "All", e.appendChild(a);
    const o = n === "all" ? "all" : String(Math.min(Number(n) || 1, t));
    e.value = o, Ge = o === "all" ? "all" : Number(o);
  }
  function q() {
    Number(I.value) * 60;
    const e = Number(F.value), t = Number(B.value), n = T[E], a = n != null && n.warmupOff ? [] : ln(ye), o = ln(W), r = ln(we);
    if (n && (n.total = Number(I.value), n.work = e, n.rest = t, n.rounds = Number(Re.value) || 1, n.customSequence ? n.sequence = W.map((u) => ({ ...u })) : (n.strength = W.map((u) => ({ ...u })), n.warmup = ye.map((u) => ({ ...u })), n.cooldown = we.map((u) => ({ ...u })))), n != null && n.customSequence) {
      const u = o.map((S) => {
        if (S.kind === "rest") {
          const D = S.useGlobalTiming === !0 ? t : Number(S.duration) || t;
          return { ...S, duration: D, rest: 0 };
        }
        const G = S.useGlobalTiming === !1 && Number(S.duration) || e;
        return { ...S, duration: G, rest: 0 };
      });
      n.autoRest && Number(n.autoRestDuration) > 0 ? (v = [], u.forEach((S, G) => {
        v.push(S);
        const D = u[G + 1];
        S.kind !== "rest" && D && D.kind !== "rest" && v.push({
          id: "auto-rest-" + G,
          name: "Rest",
          group: "Rest",
          kind: "rest",
          hidden: !1,
          duration: Number(n.autoRestDuration),
          rest: 0,
          autoGenerated: !0
        });
      })) : v = u;
    } else
      v = [...a, ...o, ...r].map((u) => u.kind === "rest" ? { ...u, duration: u.useGlobalTiming === !0 ? t : Number(u.duration) || t, rest: 0 } : { ...u, duration: u.useGlobalTiming === !1 && Number(u.duration) || e, rest: t }), v.forEach((u, S) => {
        var G;
        ((G = v[S + 1]) == null ? void 0 : G.kind) === "rest" && (u.rest = 0);
      }), v.length && (v[v.length - 1].rest = 0);
    const l = Math.max(1, Math.min(10, Number(Re.value) || 1)), s = v, c = s.length, p = s.reduce((u, S) => u + S.duration + S.rest, 0);
    v = [];
    for (let u = 1; u <= l; u++)
      if (s.forEach((S, G) => v.push({ ...S, id: S.id + (l > 1 ? "-r" + u : ""), round: u, roundIndex: G })), u < l && c)
        if (n != null && n.customSequence)
          v.push({ id: "round-break-" + u, name: "Rest", group: "Round " + (u + 1) + " next", kind: "rest", hidden: !1, duration: t, rest: 0, round: u, roundIndex: c, roundBreak: !0 });
        else {
          const S = v[v.length - 1];
          S.rest = t, S.roundBreakAfter = !0;
        }
    At();
    const m = v.reduce((u, S) => u + S.duration + S.rest, 0), d = Math.round(p / 60), g = Math.round(m / 60), k = l > 1 ? Ne(d) + " × " + l + " rounds (" + Ne(g) + ")" : Ne(g), y = [a.length ? "warm-up" : "", r.length ? "cooldown" : ""].filter(Boolean), w = n != null && n.customSequence ? k + " · " + c + " items" : k + " · " + K(e) + " / " + K(t) + (y.length ? " · " + y.join(" + ") : "");
    aa.textContent = K(p);
    const h = c + " activities" + (l > 1 ? " × " + l : "");
    da.textContent = l > 1 ? l + " rounds · " + Ne(g) + " total" : "1 round", n && (n.summary = w, n.activityCount = c);
    const R = x.querySelector(".workoutPanel.active .sub");
    R && (R.textContent = w), pa.textContent = w, x.querySelectorAll(".workoutPanel.active .activityCount").forEach((u) => u.textContent = h), At(), ya(), gn(), ut(), ha(), z && be(), qe.workout.classList.contains("active") && !Y && Rn();
  }
  const Nt = '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><g fill="currentColor"><circle cx="9" cy="6" r="1.6"/><circle cx="15" cy="6" r="1.6"/><circle cx="9" cy="12" r="1.6"/><circle cx="15" cy="12" r="1.6"/><circle cx="9" cy="18" r="1.6"/><circle cx="15" cy="18" r="1.6"/></g></svg>';
  let te = null, ie = null;
  function fa(e) {
    return e = Math.max(1, Number(e) || 0), e >= 3600 && e % 3600 === 0 ? { value: e / 3600, unit: "hour" } : e >= 60 && e % 60 === 0 ? { value: e / 60, unit: "min" } : { value: e, unit: "sec" };
  }
  function ti(e = !1) {
    const t = x.querySelector(".moveEditForm input[data-f=name]");
    t && (t.focus({ preventScroll: !0 }), e && t.select());
  }
  function xa(e, t) {
    const n = e.kind === "rest", a = n ? e.useGlobalTiming === !0 : e.useGlobalTiming !== !1, o = Number(n ? B.value : F.value), r = fa(a ? o : e.duration || o), l = document.createElement("div");
    l.className = "moveRow editing", l.dataset.index = t, l.dataset.id = e.id;
    const s = (ie == null ? void 0 : ie.item) === e;
    l.innerHTML = '<div class="moveEditForm"><div class="moveEditFields"><label><span>Name</span><input class="addInput" data-f="name" type="text" value="' + P(e.name) + '" placeholder="' + (n ? "Rest" : "Name this movement") + '"></label><label><span>Type / group</span><input class="addInput" data-f="group" type="text" value="' + P(e.group) + '" placeholder="' + (n ? "Rest" : "e.g. Glutes + legs") + '"></label></div><div class="moveEditTiming"><label class="globalTimingToggle"><input type="checkbox" data-f="global"' + (a ? " checked" : "") + '><span class="toggleTrack" aria-hidden="true"><span class="toggleThumb"></span></span><span class="toggleLabel">Use global timing · ' + P(K(o)) + '</span></label><div class="creatorDurationRow"><input class="addInput creatorNumber" data-f="dur" type="number" min="1" max="3600" step="1" value="' + r.value + '" aria-label="Duration"><select class="creatorUnitSelect" data-f="unit" aria-label="Duration unit">' + ["sec", "min", "hour"].map((g) => '<option value="' + g + '"' + (g === r.unit ? " selected" : "") + ">" + { sec: "seconds", min: "minutes", hour: "hours" }[g] + "</option>").join("") + '</select></div></div><div class="moveEditActions"><button class="pill" type="button" data-a="cancel">Cancel</button><button class="primary" type="button" data-a="save">Save</button></div></div>';
    const c = (g) => l.querySelector("[data-f=" + g + "]"), p = () => {
      const g = c("global").checked;
      c("dur").disabled = g, c("unit").disabled = g, l.querySelector(".creatorDurationRow").classList.toggle("isDisabled", g);
    };
    c("global").addEventListener("change", p), p();
    const m = () => {
      s && Pt(), te = null, q();
    }, d = () => {
      const g = c("name").value.trim();
      if (!g) {
        c("name").focus();
        return;
      }
      e.name = g, e.group = c("group").value.trim() || (n ? "Rest" : "Movement");
      const k = c("global").checked;
      e.useGlobalTiming = k, k || (e.duration = Math.max(n ? 5 : 1, dn(c("dur").value, c("unit").value))), s && (ie = null), te = null, q(), U(s ? n ? "Rest added" : "Movement added" : "Movement updated");
    };
    return l.querySelector("[data-a=cancel]").addEventListener("click", m), l.querySelector("[data-a=save]").addEventListener("click", d), l.addEventListener("keydown", (g) => {
      g.key === "Escape" && (g.preventDefault(), g.stopPropagation(), m()), g.key === "Enter" && g.target.matches("input") && (g.preventDefault(), d());
    }), l;
  }
  function un(e, t) {
    const n = i(t);
    n.innerHTML = "", e.forEach((a, o) => {
      if (a === te) {
        n.appendChild(xa(a, o));
        return;
      }
      const r = document.createElement("div");
      r.className = "moveRow" + (a.hidden ? " hidden" : "") + (a.kind === "rest" ? " restItem" : ""), r.dataset.index = o, r.dataset.id = a.id;
      const l = a.kind === "rest" ? a.useGlobalTiming === !0 ? "Global timing" : K(a.duration) : a.useGlobalTiming === !1 ? K(a.duration) : "Global timing", s = a.kind === "rest" ? '<span class="moveKindBadge">Rest</span>' : "";
      r.innerHTML = '<button class="dragHandle" type="button" title="Drag to reorder" aria-label="Reorder ' + P(a.name) + '. Drag, or use the up and down arrow keys">' + Nt + '</button><div class="moveText"><div class="moveItemName">' + P(a.name) + s + '</div><div class="moveMeta">' + P(a.group) + " · " + P(l) + '</div></div><div class="moveActions"><button class="hideBtn editBtn" type="button" aria-label="Edit ' + P(a.name) + '">Edit</button><button class="hideBtn" type="button">' + (a.hidden ? "Show" : "Hide") + '</button><button class="removeBtn" type="button" aria-label="Hold to remove ' + P(a.name) + '"><span class="removeFill"></span><span class="removeLabel">Remove</span></button></div>', r.querySelector(".editBtn").addEventListener("click", () => {
        Pt(), te = a, q(), ti();
      }), r.querySelector(".hideBtn:not(.editBtn)").addEventListener("click", () => {
        a.hidden = !a.hidden, q();
      });
      const c = r.querySelector(".removeBtn");
      Kt(c, c.querySelector(".removeFill"), 1200, () => {
        const m = e.indexOf(a);
        m < 0 || (e.splice(m, 1), q(), U("Removed " + a.name, { label: "Undo", run: () => {
          e.splice(Math.min(m, e.length), 0, a), q();
        } }));
      });
      const p = r.querySelector(".dragHandle");
      p.addEventListener("pointerdown", (m) => ba(m, r, n, e)), p.addEventListener("keydown", (m) => {
        var k, y;
        if (m.key !== "ArrowUp" && m.key !== "ArrowDown") return;
        m.preventDefault();
        const d = e.indexOf(a), g = d + (m.key === "ArrowUp" ? -1 : 1);
        g < 0 || g >= e.length || (e.splice(d, 1), e.splice(g, 0, a), q(), (y = (k = i(t).children[g]) == null ? void 0 : k.querySelector(".dragHandle")) == null || y.focus());
      }), n.appendChild(r);
    });
  }
  const We = () => {
    var e;
    return (e = window.matchMedia) == null ? void 0 : e.call(window, "(prefers-reduced-motion: reduce)").matches;
  }, ni = "transform .24s cubic-bezier(.2,.8,.2,1)";
  function ba(e, t, n, a) {
    if (e.button !== void 0 && e.button !== 0) return;
    e.preventDefault();
    const o = e.currentTarget;
    try {
      o.setPointerCapture(e.pointerId);
    } catch {
    }
    const r = t.closest(".exerciseScroller"), l = e.clientY - t.getBoundingClientRect().top;
    let s = e.clientY, c = null;
    t.classList.add("dragging"), t.style.transition = "none";
    const p = () => {
      t.style.transform = "";
      const w = t.getBoundingClientRect().top;
      t.style.transform = "translateY(" + (s - l - w) + "px) scale(1.015)";
    }, m = (w) => {
      const h = [...n.children].filter((u) => u !== t), R = new Map(h.map((u) => [u, u.getBoundingClientRect().top]));
      w(), !We() && h.forEach((u) => {
        u.style.transition = "none", u.style.transform = "";
        const S = R.get(u) - u.getBoundingClientRect().top;
        S && (u.style.transform = "translateY(" + S + "px)", u.getBoundingClientRect(), u.style.transition = ni, u.style.transform = "");
      });
    }, d = () => {
      const w = [...n.children].filter((u) => u !== t), h = s - l + t.offsetHeight / 2, R = w.find((u) => {
        const S = u.getBoundingClientRect();
        return h < S.top + S.height / 2;
      });
      R ? t.nextElementSibling !== R && m(() => n.insertBefore(t, R)) : n.lastElementChild !== t && m(() => n.appendChild(t)), p();
    }, g = () => {
      if (!r) return;
      const w = r.getBoundingClientRect(), h = 56, R = s < w.top + h ? -10 : s > w.bottom - h ? 10 : 0;
      R && (r.scrollTop += R, d());
    }, k = (w) => {
      s = w.clientY, d();
    }, y = () => {
      clearInterval(c), o.removeEventListener("pointermove", k), o.removeEventListener("pointerup", y), o.removeEventListener("pointercancel", y);
      const w = [...n.children].map((u) => Number(u.dataset.index)), h = w.some((u, S) => u !== S), R = () => {
        if (t.classList.remove("dragging"), t.style.transition = "", t.style.transform = "", h) {
          const u = w.map((S) => a[S]);
          a.splice(0, a.length, ...u);
        }
        q(), h && U("Order saved");
      };
      if (We()) {
        R();
        return;
      }
      t.style.transition = ni, t.style.transform = "", setTimeout(R, 250);
    };
    o.addEventListener("pointermove", k), o.addEventListener("pointerup", y), o.addEventListener("pointercancel", y), c = setInterval(g, 30), p();
  }
  function ya() {
    var o, r, l, s;
    const e = T[E], t = (o = i("warmupList")) == null ? void 0 : o.closest("section"), n = (r = i("cooldownList")) == null ? void 0 : r.closest("section"), a = (s = (l = i("strengthList")) == null ? void 0 : l.closest("section")) == null ? void 0 : s.querySelector(".sectionTitle");
    e != null && e.customSequence ? (t && (t.hidden = !0), n && (n.hidden = !0), a && (a.textContent = "Move sequence")) : (t && (t.hidden = !!(e != null && e.warmupOff)), n && (n.hidden = !1), a && (a.textContent = "Kettlebell work")), un(ye, "warmupList"), un(W, "strengthList"), un(we, "cooldownList");
  }
  function Pt() {
    if (!ie) return;
    const { item: e, arr: t } = ie;
    ie = null;
    const n = t.indexOf(e);
    n >= 0 && t.splice(n, 1), te === e && (te = null);
  }
  function mn(e) {
    return e.id === "warmupList" ? { arr: ye, kind: "warmup", group: "Warm-up" } : e.id === "cooldownList" ? { arr: we, kind: "cooldown", group: "Cooldown" } : { arr: W, kind: "work", group: "" };
  }
  function wa(e, t) {
    const n = mn(t), a = Date.now().toString(36);
    return e === "rest" ? { id: "rest-" + a, name: "Rest", group: "Rest", kind: "rest", hidden: !1, useGlobalTiming: !0, duration: Number(B.value) } : { id: "movement-" + a, name: "", group: n.group, kind: n.kind, hidden: !1, useGlobalTiming: !0, duration: Number(F.value) };
  }
  const ii = "cubic-bezier(.34,1.46,.64,1)";
  function ka(e, t) {
    if (We() || !e) {
      t();
      return;
    }
    const n = (r) => {
      var l;
      return ((l = r.dataset) == null ? void 0 : l.id) || r;
    }, a = () => [...e.querySelectorAll(".moveRow,.sectionTitle,.movementCreatorLaunch")], o = new Map(a().map((r) => [n(r), r.getBoundingClientRect().top]));
    t(), a().forEach((r) => {
      const l = o.get(n(r));
      if (l === void 0) return;
      const s = l - r.getBoundingClientRect().top;
      Math.abs(s) < 0.5 || r.animate([{ transform: "translateY(" + s + "px)" }, { transform: "none" }], { duration: 440, easing: ii });
    });
  }
  function Sa(e, t) {
    if (!e || We()) return;
    const n = e.offsetHeight, a = Math.max(0, n - (t || 0));
    e.animate([{ clipPath: "inset(0 0 " + a + "px 0 round 20.8px)" }, { clipPath: "inset(0 0 0 0 round 20.8px)" }], { duration: 460, easing: ii });
  }
  function ai(e, t, n, a) {
    const { arr: o } = mn(t), r = wa(e, t);
    o.splice(Math.max(0, Math.min(n, o.length)), 0, r), ie = { item: r, arr: o }, te = r, ka(t.closest(".exerciseScroller,.createStepSlot") || t, () => q());
    const l = t.querySelector(".moveRow.editing");
    return Sa(l, a), ti(e === "rest"), l;
  }
  function Ca(e) {
    for (let t = e; t && t.nodeType === 1; t = t.parentElement) {
      const n = getComputedStyle(t).overflowY;
      if (/(auto|scroll)/.test(n) && t.scrollHeight > t.clientHeight) return t;
    }
    return null;
  }
  function Ta(e, t, n, a) {
    var ji;
    (te || ie) && (Pt(), te = null, q());
    const o = !We(), r = e.getBoundingClientRect(), l = ((ji = x.querySelector(".moveList .moveRow:not(.editing)")) == null ? void 0 : ji.offsetHeight) || 80, s = Ca(e), c = e.closest(".exerciseScroller,.createFlow") || s, p = document.createElement("div");
    p.className = "addGhost" + (t === "rest" ? " rest" : ""), p.setAttribute("aria-hidden", "true"), p.innerHTML = '<span class="addGhostGrip">' + Nt + '</span><span class="addGhostText"><strong>' + (t === "rest" ? "Rest" : "New movement") + "</strong><small>" + (t === "rest" ? "Rest · Global timing" : "Drop to add, then name it") + "</small></span>", p.style.width = r.width + "px", p.style.height = r.height + "px", p.style.transform = "translate(" + r.left + "px," + r.top + "px)", i("workoutModal").appendChild(p), e.classList.add("lifting");
    const m = n - r.left, d = a - r.top, g = 44;
    let k = n, y = a, w = r.left, h = r.top, R = 0, u = 0, S = !o, G = null, D = null, ct = -1, xe = 0, j = null;
    const Xt = () => ["warmupList", "strengthList", "cooldownList"].map((b) => i(b)).filter((b) => b && b.getClientRects().length && !b.closest("[hidden]")), $t = (b) => {
      if (b === G) return;
      G = b, p.classList.toggle("overList", !!b);
      const A = b ? b.getBoundingClientRect().width : r.width;
      p.style.width = A + "px", p.style.height = (b ? l : r.height) + "px";
    }, go = (b) => {
      b.classList.add("leaving"), b.style.height = "0px", b.style.marginTop = "-8px", setTimeout(() => b.remove(), o ? 320 : 0);
    }, _n = (b, A, _) => {
      if (D && D.parentNode === b && ct === _ || (D && (go(D), D = null, ct = -1), !b)) return;
      const V = document.createElement("div");
      V.className = "dropSlot", b.insertBefore(V, A), D = V, ct = _, V.getBoundingClientRect(), V.style.height = l + "px", V.style.marginTop = "0px";
    }, qi = () => {
      let b = null, A = 1 / 0;
      for (const Me of Xt()) {
        const ee = Me.getBoundingClientRect();
        if (k < ee.left - 48 || k > ee.right + 48) continue;
        const ce = ee.top - 28, Fe = ee.bottom + 28, Yi = y < ce ? ce - y : y > Fe ? y - Fe : 0;
        Yi < A && (A = Yi, b = Me);
      }
      const _ = c == null ? void 0 : c.getBoundingClientRect(), de = _ && k >= _.left && k <= _.right && y >= _.top && y <= _.bottom || A === 0 ? b : null;
      if (de) {
        const Me = [...de.children].filter((ce) => ce.classList.contains("moveRow"));
        let ee = Me.findIndex((ce) => {
          const Fe = ce.getBoundingClientRect();
          return y < Fe.top + Fe.height / 2;
        });
        ee < 0 && (ee = Me.length), _n(de, Me[ee] || null, ee);
      } else _n(null);
      $t(de);
    }, vo = () => {
      if (j) return j.aim();
      if (G) {
        const b = G.getBoundingClientRect();
        let A = y - l / 2;
        return D && (A = A * 0.6 + D.getBoundingClientRect().top * 0.4), { x: b.left, y: A };
      }
      return { x: k - m, y: y - d };
    }, qn = (b, A, _, V) => {
      p.style.transform = "translate(" + w + "px," + h + "px) rotate(" + b + "deg) rotate(" + A + "rad) scale(" + _ + "," + V + ") rotate(" + -A + "rad)";
    }, Gi = () => {
      if (xe = requestAnimationFrame(Gi), !S) {
        const ee = k - n, ce = y - a, Fe = Math.min(Math.hypot(ee, ce) / g, 1);
        w = r.left + ee * 0.35, h = r.top + ce * 0.35, qn(0, Math.atan2(ce, ee), 1 + 0.155 * Fe, 1 - 0.1 * Fe);
        return;
      }
      const b = vo();
      if (!o) {
        w = b.x, h = b.y, qn(0, 0, 1, 1), j && (cancelAnimationFrame(xe), j.done());
        return;
      }
      const A = j ? j.k : 0.17, _ = j ? j.d : 0.7;
      R = (R + (b.x - w) * A) * _, u = (u + (b.y - h) * A) * _, w += R, h += u;
      const V = Math.hypot(R, u), de = Math.min(V / 48, 1), Me = G || j ? 0 : Math.max(-5, Math.min(5, R * 0.32));
      qn(Me, Math.atan2(u, R), 1 + 0.1 * de, 1 - 0.063 * de), j && V < 0.15 && Math.hypot(b.x - w, b.y - h) < 0.6 && (cancelAnimationFrame(xe), j.done());
    }, ho = setInterval(() => {
      if (!s || j) return;
      const b = s.getBoundingClientRect(), A = 64, _ = y < b.top + A ? -(b.top + A - y) / 4 : y > b.bottom - A ? (y - (b.bottom - A)) / 4 : 0;
      _ && (s.scrollTop += Math.max(-18, Math.min(18, _)), qi());
    }, 30);
    xe = requestAnimationFrame(Gi);
    let Wi = !1;
    const pt = (b, A) => {
      if (Wi) return;
      Wi = !0, cancelAnimationFrame(xe);
      const _ = D ? D.offsetHeight : l;
      !b && D && (D.remove(), D = null), p.classList.add("leaving"), setTimeout(() => p.remove(), 180), e.classList.remove("lifting"), b && ai(t, b, A, _);
    };
    return {
      move(b, A) {
        k = b, y = A, !S && Math.hypot(k - n, y - a) > g && (S = !0, R = (k - n) * 0.085, u = (y - a) * 0.085), S && qi();
      },
      drop(b) {
        clearInterval(ho);
        const A = G, _ = ct;
        if (!b && A && D) {
          const V = D;
          j = { k: 0.24, d: 0.62, aim: () => {
            const de = V.getBoundingClientRect();
            return { x: de.left, y: de.top };
          }, done: () => pt(A, _) }, setTimeout(() => pt(A, _), 650), o || (cancelAnimationFrame(xe), pt(A, _));
          return;
        }
        _n(null), $t(null), j = { k: 0.2, d: 0.66, aim: () => {
          const V = e.getBoundingClientRect();
          return { x: V.left, y: V.top };
        }, done: () => pt(null) }, setTimeout(() => pt(null), 650), o || (cancelAnimationFrame(xe), pt(null));
      }
    };
  }
  function oi(e, t) {
    let n = !1;
    e.addEventListener("click", (a) => {
      if (n) {
        n = !1, a.preventDefault();
        return;
      }
      const o = i("strengthList"), r = ai(t, o, mn(o).arr.length, 0);
      r == null || r.scrollIntoView({ block: "nearest", behavior: We() ? "auto" : "smooth" });
    }), e.addEventListener("pointerdown", (a) => {
      if (a.button !== void 0 && a.button !== 0) return;
      const o = a.pointerId, r = a.clientX, l = a.clientY;
      let s = null, c = !1;
      try {
        e.setPointerCapture(o);
      } catch {
      }
      const p = (h) => {
        if (h.pointerId === o) {
          if (h.pointerType === "mouse" && h.buttons === 0) {
            w(!1);
            return;
          }
          if (!s) {
            if (Math.hypot(h.clientX - r, h.clientY - l) < 6) return;
            s = Ta(e, t, r, l);
          }
          s.move(h.clientX, h.clientY);
        }
      }, m = (h) => {
        h.pointerId === o && w(!1);
      }, d = (h) => {
        h.pointerId === o && w(!0);
      }, g = () => w(!1), k = () => w(!0), y = (h) => {
        h.key === "Escape" && s && (h.preventDefault(), h.stopPropagation(), w(!0));
      };
      function w(h) {
        if (!c && (c = !0, window.removeEventListener("pointermove", p, !0), window.removeEventListener("pointerup", m, !0), window.removeEventListener("pointercancel", d, !0), window.removeEventListener("keydown", y, !0), window.removeEventListener("blur", k), e.removeEventListener("lostpointercapture", g), s)) {
          const R = s;
          s = null, n = !0, setTimeout(() => {
            n = !1;
          }, 0), R.drop(h);
        }
      }
      window.addEventListener("pointermove", p, !0), window.addEventListener("pointerup", m, !0), window.addEventListener("pointercancel", d, !0), window.addEventListener("keydown", y, !0), window.addEventListener("blur", k), e.addEventListener("lostpointercapture", g);
    });
  }
  function gn() {
    W.length > 0;
    const e = i("addMovementBtn"), t = i("addRestBtn");
    e && (e.innerHTML = Nt + "<span>Add movement</span>"), t && (t.innerHTML = Nt + "<span>Add rest</span>");
  }
  function ut() {
    const e = i("useGlobalTiming").checked, t = i("addMovementDuration"), n = i("addMovementUnit");
    t.disabled = e, n.disabled = e, t.parentElement.style.opacity = e ? ".38" : "1", i("globalTimingValue").textContent = "Use global timing · " + K(F.value);
    const a = i("useGlobalRestTiming").checked, o = i("addRestDuration"), r = i("addRestUnit");
    o.disabled = a, r.disabled = a, o.parentElement.style.opacity = a ? ".38" : "1", i("globalRestTimingValue").textContent = "Use global timing · " + K(B.value);
  }
  let ri = "movement";
  function La(e) {
    ri = e;
    const t = i("movementFields"), n = i("restFields");
    t.hidden = e !== "movement", n.hidden = e !== "rest", i("movementCreatorHeading").textContent = "Add movement", i("movementCreator").setAttribute("aria-label", "Create movement"), ut();
  }
  function vn() {
    T[E];
    const e = z ? !0 : i("useGlobalTiming").checked, t = e ? Number(F.value) : dn(
      i("addMovementDuration").value,
      i("addMovementUnit").value
    ), n = z ? !0 : i("useGlobalRestTiming").checked, a = n ? Number(B.value) : dn(
      i("addRestDuration").value,
      i("addRestUnit").value
    );
    if (ri === "rest") {
      const o = i("addRestTitle").value.trim() || "Rest", r = i("addRestGroup").value.trim() || "Rest";
      W.push({
        id: "rest-" + Date.now(),
        name: o,
        group: r,
        kind: "rest",
        hidden: !1,
        useGlobalTiming: n,
        duration: Math.max(5, a || Number(B.value))
      }), q(), i("movementCreator").hidden = !0, i("addRestTitle").value = "Rest", i("addRestGroup").value = "Rest", U("Rest added"), z && (_e("movements"), be());
    } else {
      const o = i("addMovementInput").value.trim();
      if (!o) return;
      const r = i("addMovementGroup").value.trim() || "Movement";
      W.push({
        id: "movement-" + Date.now(),
        name: o,
        group: r,
        kind: "work",
        hidden: !1,
        useGlobalTiming: e,
        duration: Math.max(5, t || Number(F.value))
      }), i("addMovementInput").value = "", i("addMovementGroup").value = "", q(), i("movementCreator").hidden = !0, U("Movement added"), z && (_e("movements"), be());
    }
    gn();
  }
  let hn = null;
  function U(e, t) {
    const n = i("toast");
    n.innerHTML = "";
    const a = document.createElement("span");
    if (a.textContent = e, n.appendChild(a), t) {
      const o = document.createElement("button");
      o.type = "button", o.className = "toastAction", o.textContent = t.label, o.addEventListener("click", () => {
        t.run(), n.classList.remove("show", "withAction"), clearTimeout(hn);
      }), n.appendChild(o);
    }
    n.classList.toggle("withAction", !!t), n.classList.add("show"), clearTimeout(hn), hn = setTimeout(() => n.classList.remove("show", "withAction"), t ? 5e3 : 2200);
  }
  const Ea = ["Terrible", "Poor", "Meh", "Okay", "Good", "Great"], Ma = ["#6E63A8", "#5878A8", "#6F8B8A", "#5F9B72", "#D5A53E", "#D56B54"];
  function si(e) {
    return Math.max(0, Math.min(5, Math.floor(Number(e) / 100 * 6)));
  }
  function je(e, t) {
    return Ea[si(t)];
  }
  function Fa(e) {
    return Ma[si(e)];
  }
  function J(e) {
    return e.getFullYear() + "-" + String(e.getMonth() + 1).padStart(2, "0") + "-" + String(e.getDate()).padStart(2, "0");
  }
  function pe() {
    return { morning: N().morningTime || "08:00", evening: N().eveningTime || "19:00" };
  }
  function Ye(e) {
    const [t, n] = String(e).split(":").map(Number);
    return (t || 0) * 60 + (n || 0);
  }
  function Ra(e) {
    const t = pe();
    return e.getHours() * 60 + e.getMinutes() >= Ye(t.evening) ? "evening" : "morning";
  }
  function It(e, t) {
    return L.checkins.find((n) => n.date === e && n.slot === t);
  }
  function Dt(e) {
    return !!(e && e.mood != null && e.energy != null);
  }
  function Ht() {
    const e = /* @__PURE__ */ new Date(), t = J(e), n = Ra(e), a = pe(), o = e.getHours() * 60 + e.getMinutes();
    return n === "morning" && o < Ye(a.morning) || Dt(It(t, n)) ? null : n;
  }
  const ke = i("checkinModal"), Se = i("checkinTab"), Ba = i("checkinBadge"), Ce = { mood: { input: i("moodInput"), fill: i("moodFill") }, energy: { input: i("energyLevelInput"), fill: i("energyLevelFill") } };
  function li(e) {
    const { input: t, fill: n } = Ce[e];
    n.style.width = t.value + "%", t.setAttribute("aria-valuetext", je(e, t.value));
  }
  Object.keys(Ce).forEach((e) => Ce[e].input.addEventListener("input", () => li(e)));
  let re = null;
  function di() {
    const e = pe(), t = /* @__PURE__ */ new Date(), n = t.getHours() * 60 + t.getMinutes();
    return n < Ye(e.morning) ? "Next check-in at " + e.morning : n < Ye(e.evening) ? "Next check-in at " + e.evening : "Next check-in tomorrow at " + e.morning;
  }
  function Aa() {
    const e = pe(), t = /* @__PURE__ */ new Date(), n = t.getHours() * 60 + t.getMinutes(), a = (o, r) => {
      const [l, s] = o.split(":").map(Number);
      return new Date(t.getFullYear(), t.getMonth(), t.getDate() + (r ? 1 : 0), l, s);
    };
    return n < Ye(e.morning) ? { date: a(e.morning), time: e.morning } : n < Ye(e.evening) ? { date: a(e.evening), time: e.evening } : { date: a(e.morning, !0), time: e.morning };
  }
  let fn = null, xn = null;
  function ci() {
    if (Ht()) {
      zt(), Pe();
      return;
    }
    const e = Aa(), t = Math.max(0, Math.round((e.date - Date.now()) / 1e3)), n = Math.floor(t / 3600), a = Math.floor(t % 3600 / 60), o = t % 60;
    i("peekCountdown").textContent = n + ":" + String(a).padStart(2, "0") + ":" + String(o).padStart(2, "0"), i("peekAt").textContent = "Available at " + e.time;
  }
  function Na() {
    ci(), Se.classList.add("peek"), clearInterval(xn), xn = setInterval(ci, 1e3), clearTimeout(fn), fn = setTimeout(zt, 6e3);
  }
  function zt() {
    Se.classList.remove("peek"), clearInterval(xn), clearTimeout(fn);
  }
  function pi() {
    const e = Ht();
    if (!e) {
      Se.classList.contains("peek") ? zt() : Na();
      return;
    }
    re = { date: J(/* @__PURE__ */ new Date()), slot: e };
    const n = It(re.date, e), a = L.checkins.find((r) => Dt(r));
    Object.keys(Ce).forEach((r) => {
      Ce[r].input.value = (n == null ? void 0 : n[r]) ?? (a == null ? void 0 : a[r]) ?? 50, li(r);
    });
    const o = pe()[e];
    i("checkinEyebrow").textContent = (e === "morning" ? "Morning" : "Evening") + " · " + o, i("checkinTitle").textContent = e === "morning" ? "Morning check-in" : "Evening check-in", ke.classList.add("open"), ke.setAttribute("aria-hidden", "false"), requestAnimationFrame(() => Ce.mood.input.focus());
  }
  function mt() {
    ke.classList.remove("open"), ke.setAttribute("aria-hidden", "true"), re && (gt = re.date + "-" + re.slot);
    try {
      localStorage.setItem("move-assistant-dismissed", gt);
    } catch {
    }
    re = null, Pe();
  }
  function Pa() {
    if (!re) return;
    if (Dt(It(re.date, re.slot))) {
      mt();
      return;
    }
    const { date: e, slot: t } = re;
    let n = It(e, t);
    n || (n = { date: e, slot: t }, L.checkins.unshift(n), L.checkins = L.checkins.slice(0, 2e3)), n.mood = Number(Ce.mood.input.value), n.energy = Number(Ce.energy.input.value), n.scale = 100, n.at = (/* @__PURE__ */ new Date()).toISOString(), Be(), f.fire("checkin", { slot: t, mood: n.mood, energy: n.energy, mood_label: je("mood", n.mood), energy_label: je("energy", n.energy) }), U((t === "morning" ? "Morning" : "Evening") + " check-in saved"), mt(), Ot(), vt(), Oe(), fe();
  }
  let gt = "";
  try {
    gt = localStorage.getItem("move-assistant-dismissed") || "";
  } catch {
  }
  function Pe() {
    const e = Ht();
    Ba.hidden = !e, Se.hidden = !e, e || zt(), Se.classList.toggle("due", !!e), Se.setAttribute("aria-label", e ? (e === "morning" ? "Morning" : "Evening") + " check-in is due" : di()), Se.title = e ? "Check in now" : di();
  }
  function bn() {
    Pe();
    const e = Ht();
    !e || ke.classList.contains("open") || N().checkinAutoOpen !== !1 && (!qe.home.classList.contains("active") || X.classList.contains("open") || gt !== J(/* @__PURE__ */ new Date()) + "-" + e && pi());
  }
  Se.addEventListener("click", pi), i("checkinLater").addEventListener("click", mt), i("checkinSave").addEventListener("click", Pa), ke.addEventListener("click", (e) => {
    e.target === ke && mt();
  }), ke.addEventListener("keydown", (e) => {
    e.key === "Escape" && (e.preventDefault(), mt());
  }), setInterval(bn, 3e4);
  function Ot() {
    const e = J(/* @__PURE__ */ new Date()), t = (n) => L.checkins.find((a) => a.date === e && a[n] != null);
    [["mood", "moodMeta"], ["energy", "energyLevelMeta"]].forEach(([n, a]) => {
      const o = t(n);
      i(a).textContent = o ? je(n, o[n]) : "—";
    });
  }
  function vt() {
    const e = i("feelCard");
    if (!e) return;
    const t = /* @__PURE__ */ new Date(), n = new Date(t.getFullYear(), t.getMonth(), t.getDate() - (t.getDay() + 6) % 7), a = [...Array(7)].map((p, m) => {
      const d = new Date(n.getFullYear(), n.getMonth(), n.getDate() + m), g = J(d), k = L.checkins.filter((w) => w.date === g), y = (w) => {
        const h = k.map((R) => R[w]).filter((R) => R != null);
        return h.length ? h.reduce((R, u) => R + u, 0) / h.length : null;
      };
      return { d, key: g, mood: y("mood"), energy: y("energy"), count: k.filter(Dt).length, future: d > t && g !== J(t) };
    }), o = (p) => {
      const m = a.map((d) => d[p]).filter((d) => d != null);
      return m.length ? m.reduce((d, g) => d + g, 0) / m.length : null;
    }, r = o("mood"), l = o("energy"), s = (p, m) => '<div class="feelMeter"><div class="feelMeterTop"><span>' + p + "</span><span>" + (m == null ? "—" : P(je("", m))) + '</span></div><div class="feelTrack"><span style="width:' + (m == null ? 0 : Math.max(4, m)) + "%;background:" + (m == null ? "transparent" : Fa(m)) + '"></span></div></div>', c = a.filter((p) => p.mood != null && p.energy != null).sort((p, m) => m.mood + m.energy - (p.mood + p.energy))[0];
    e.innerHTML = '<div class="feelTop"><div class="feelSummary"><div class="feelHeadline">' + (r == null ? "No check-ins yet" : P(je("", (r + l) / 2))) + '</div><div class="weekCopy">' + (r == null ? "Your first check-in will appear here." : "on average this week" + (c ? " · best day " + P(new Intl.DateTimeFormat(void 0, { weekday: "long" }).format(c.d)) : "")) + '</div></div></div><div class="feelDays">' + a.map(
      (p) => '<div class="weekChip feelDay' + (p.future ? " future" : "") + (p.key === J(t) ? " today" : "") + '"><div class="weekChipTop"><strong>' + P(new Intl.DateTimeFormat(void 0, { weekday: "short" }).format(p.d)) + "</strong>" + (p.count >= 2 ? '<span class="weekTick">✓</span>' : '<span class="feelDots">' + "●".repeat(p.count) + "</span>") + "</div>" + s("Mood", p.mood) + s("Energy", p.energy) + "</div>"
    ).join("") + "</div>";
  }
  const _t = i("upcomingCountSetting");
  _t.addEventListener("change", () => {
    Ge = _t.value === "all" ? "all" : Number(_t.value), Li();
  });
  const ht = i("tempoRevealBtn"), yn = i("tempoExperiment"), se = i("tempoQuad"), Ve = i("tempoDot"), Ia = i("tempoEstimate"), Da = i("tempoReadout");
  let Ue = { x: 0.5, y: 0.5 }, ft = !1, qt = { total: 20, work: 45, rest: 15 };
  function wn(e, t, n, a) {
    const o = Math.max(t, Math.min(n, e));
    return Math.round((o - t) / a) * a + t;
  }
  function Ha(e, t) {
    const n = (e - 0.5) * 2, a = (t - 0.5) * 2, o = wn(
      qt.total + n * 5 + a * 8,
      Number(I.min),
      Number(I.max),
      Number(I.step)
    ), r = wn(
      qt.work + n * 10 + a * 8,
      Number(F.min),
      Number(F.max),
      Number(F.step)
    ), l = wn(
      qt.rest + n * 6 + a * 6,
      Number(B.min),
      Number(B.max),
      Number(B.step)
    );
    return I.value = o, F.value = r, B.value = l, Kn.textContent = r + " sec", Jn.textContent = l + " sec", At(), { total: o, work: r, rest: l };
  }
  function kn(e, t) {
    const n = e < 0.34 ? "Low" : e > 0.66 ? "Hard" : "Medium", a = t < 0.34 ? "Fast" : t > 0.66 ? "Slow" : "Balanced", o = Ha(e, t);
    Da.textContent = n + " + " + a, Ia.textContent = o.total + " min", se.setAttribute("aria-valuetext", n + " and " + a + ", estimated " + o.total + " minutes");
  }
  function Sn(e) {
    const t = se.getBoundingClientRect(), n = Math.max(0, Math.min(1, (e.clientX - t.left) / t.width)), a = Math.max(0, Math.min(1, (e.clientY - t.top) / t.height));
    Ue = { x: n, y: a }, Ve.style.left = n * 100 + "%", Ve.style.top = a * 100 + "%", kn(n, a);
  }
  ht.addEventListener("click", () => {
    const e = yn.hidden;
    yn.hidden = !e, ht.setAttribute("aria-expanded", e ? "true" : "false"), ht.textContent = e ? "Now close this" : "Don’t try this!", e && (qt = {
      total: Number(I.value),
      work: Number(F.value),
      rest: Number(B.value)
    }, Ue = { x: 0.5, y: 0.5 }, Ve.style.left = "50%", Ve.style.top = "50%", kn(Ue.x, Ue.y));
  }), x.querySelectorAll("[data-feedback-rating]").forEach((e) => e.addEventListener("click", () => {
    Number(e.dataset.feedbackRating), x.querySelectorAll("[data-feedback-rating]").forEach((t) => t.classList.toggle("selected", t === e));
  }));
  const Gt = i("testingFeedbackForm"), ui = i("testingFeedbackThanks"), za = i("testingFeedbackAgain");
  Gt.addEventListener("submit", (e) => {
    e.preventDefault(), Gt.hidden = !0, ui.hidden = !1, U("Feedback captured for prototype");
  }), za.addEventListener("click", (e) => {
    e.preventDefault(), Gt.reset(), x.querySelectorAll("[data-feedback-rating]").forEach((t) => t.classList.remove("selected")), ui.hidden = !0, Gt.hidden = !1;
  }), se.addEventListener("pointerdown", (e) => {
    var t;
    ft = !0, Sn(e);
    try {
      (t = se.setPointerCapture) == null || t.call(se, e.pointerId);
    } catch {
    }
  }), se.addEventListener("pointermove", (e) => {
    ft && Sn(e);
  }), se.addEventListener("pointerup", (e) => {
    ft && (ft = !1, Sn(e), q());
  }), se.addEventListener("pointercancel", () => ft = !1), se.addEventListener("keydown", (e) => {
    let { x: t, y: n } = Ue, a = !0;
    e.key === "ArrowLeft" ? t -= 0.05 : e.key === "ArrowRight" ? t += 0.05 : e.key === "ArrowUp" ? n -= 0.05 : e.key === "ArrowDown" ? n += 0.05 : a = !1, a && (e.preventDefault(), t = Math.max(0, Math.min(1, t)), n = Math.max(0, Math.min(1, n)), Ue = { x: t, y: n }, Ve.style.left = t * 100 + "%", Ve.style.top = n * 100 + "%", kn(t, n), q());
  });
  const X = i("workoutModal");
  let xt = null;
  function Ze(e) {
    return e.map((t) => ({ ...t }));
  }
  function Oa() {
    const e = T[E];
    return {
      key: E,
      profile: e ? JSON.parse(JSON.stringify(e)) : null,
      warmup: Ze(ye),
      strength: Ze(W),
      cooldown: Ze(we),
      total: Number(I.value),
      work: Number(F.value),
      rest: Number(B.value),
      rounds: Number(Re.value) || 1
    };
  }
  function mi(e = !1) {
    z = !!e, te = null, ie = null, xt = Oa(), i("moveEditorTitle").textContent = z ? "Create new move" : "Edit move", i("moveEditorSubtitle").textContent = "Build the sequence first, then set timing, then finish the move.", i("moveEditorSubtitle").hidden = !z, i("warmupRow").hidden = z, i("deleteMoveOpen").hidden = z;
    const t = i("createMoveOptions");
    t.hidden = !z;
    {
      const n = T[E];
      i("includeWarmupPreset").checked = !!(n != null && n.includeWarmup), i("includeCooldownPreset").checked = !!(n != null && n.includeCooldown);
    }
    if (gi(), z) {
      i("useGlobalTiming").checked = !0, i("useGlobalRestTiming").checked = !0;
      const n = T[E];
      cn((n == null ? void 0 : n.preset) || "movement", !1);
    }
    i("movementCreator").hidden = !0, La("movement"), gn(), ut(), yn.hidden = !0, ht.setAttribute("aria-expanded", "false"), ht.textContent = "Don’t try this!", X.classList.toggle("createMode", z), X.querySelector(".modal").classList.toggle("createMode", z), X.classList.add("open"), X.setAttribute("aria-hidden", "false"), z && na();
  }
  function _a() {
    const e = T[E];
    return e != null && e.customSequence ? !!e.includeWarmup : !(e != null && e.warmupOff);
  }
  function gi() {
    const e = _a(), t = i("warmupSwitch");
    t.classList.toggle("on", e), t.setAttribute("aria-checked", String(e));
  }
  i("warmupSwitch").addEventListener("click", () => {
    const e = T[E];
    e && (e.customSequence ? (i("includeWarmupPreset").checked = !e.includeWarmup, pn()) : (e.warmupOff = !e.warmupOff, q()), gi());
  });
  function Wt() {
    ie = null, te = null, X.classList.contains("createMode") && ia(), X.classList.remove("createMode"), X.querySelector(".modal").classList.remove("createMode"), X.classList.remove("open"), X.setAttribute("aria-hidden", "true");
  }
  function vi() {
    if (!xt) return;
    const e = xt;
    e.profile && (T[e.key] = JSON.parse(JSON.stringify(e.profile))), E = e.key, ye = Ze(e.warmup), W = Ze(e.strength), we = Ze(e.cooldown), I.value = e.total, F.value = e.work, B.value = e.rest, Re.value = e.rounds || 1;
    const t = T[E];
    if (t) {
      x.querySelectorAll(".workoutPanel[data-workout]").forEach((a) => a.classList.toggle("active", a.dataset.workout === E));
      const n = x.querySelector(".workoutPanel.active");
      if (n) {
        const a = n.querySelector(".workoutName");
        a && (a.textContent = t.name);
        const o = n.querySelector(".panelCollapsedText");
        o && (o.textContent = t.name);
        const r = n.querySelector(".sourceTag");
        r && (r.textContent = t.source);
      }
      M.value = t.name;
    }
    q();
  }
  i("cancelWorkoutEdit").addEventListener("click", () => {
    if (z) {
      const e = E;
      delete T[e], z = !1, Ae = null, oe(L.order.find((t) => T[t]) || Object.keys(T)[0]);
    } else
      vi();
    Wt();
  }), i("saveWorkoutEdit").addEventListener("click", () => {
    const e = T[E], t = M.value.trim() || "New move";
    if (e && (e.name = t), Pt(), te = null, q(), z && e)
      sn(E, e), x.querySelectorAll(".workoutPanel[data-workout]").forEach((n) => n.classList.toggle("active", n.dataset.workout === E)), z = !1, Ae = null, L.order.includes(E) || L.order.push(E), U("Move created");
    else {
      const n = x.querySelector(".workoutPanel.active");
      if (n) {
        const a = n.querySelector(".workoutName");
        a && (a.textContent = t);
        const o = n.querySelector(".panelCollapsedText");
        o && (o.textContent = t);
      }
      U("Move saved");
    }
    xt = null, Wt(), Be();
  }), X.addEventListener("click", (e) => {
    if (e.target === X) {
      if (z) {
        const t = E;
        delete T[t], z = !1, Ae = null, oe(L.order.find((n) => T[n]) || Object.keys(T)[0]);
      } else
        vi();
      Wt();
    }
  }), oi(i("addMovementBtn"), "movement"), oi(i("addRestBtn"), "rest"), i("closeMovementCreator").addEventListener("click", () => {
    i("movementCreator").hidden = !0;
  }), i("useGlobalTiming").addEventListener("change", ut), i("useGlobalRestTiming").addEventListener("change", ut), x.querySelectorAll(".createPresetBtn").forEach((e) => e.addEventListener("click", () => {
    cn(e.dataset.movePreset, !0), q();
  })), i("includeWarmupPreset").addEventListener("change", pn), i("includeCooldownPreset").addEventListener("change", pn), i("includeWarmupPreset").addEventListener("change", be), i("includeCooldownPreset").addEventListener("change", be), M.addEventListener("input", be), i("confirmAddMovement").addEventListener("click", vn), i("confirmAddRest").addEventListener("click", vn), i("addMovementInput").addEventListener("keydown", (e) => {
    e.key === "Enter" && vn();
  });
  const bt = i("countdown"), Cn = i("countNum"), ue = i("countdownPixelCanvas");
  let yt = null, Tn = "appear";
  class qa {
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
  let Ln = [], hi = 1, fi = 1;
  function Ie() {
    const e = parseFloat(getComputedStyle(i("app")).zoom);
    return Number.isFinite(e) && e > 0 ? e : 1;
  }
  function Ga() {
    var p;
    if (!ue) return;
    const e = Ie(), t = Math.max(1, window.innerWidth / e), n = Math.max(1, window.innerHeight / e);
    hi = t, fi = n;
    const a = Math.min(window.devicePixelRatio || 1, 2);
    ue.width = Math.floor(t * a), ue.height = Math.floor(n * a), ue.style.width = t + "px", ue.style.height = n + "px";
    const o = ue.getContext("2d");
    o.setTransform(a, 0, 0, a, 0, 0);
    const r = ["#f2fbff", "#d4effc", "#a9e0fa", "#6cc8f6"], l = 12, s = (p = window.matchMedia) == null ? void 0 : p.call(window, "(prefers-reduced-motion: reduce)").matches, c = s ? 0 : 0.055;
    Ln = [];
    for (let m = 0; m < t; m += l)
      for (let d = 0; d < n; d += l) {
        const g = m - t / 2, k = d - n / 2, y = Math.sqrt(g * g + k * k), w = s ? 0 : Math.random() * 75 + y * 0.05, h = new qa({ width: t, height: n }, o, m, d, r[Math.floor(Math.random() * r.length)], c, w);
        h.maxSizeInteger = 4, h.maxSize = Math.random() * 3.2 + 0.8, h.sizeStep = 0.35 + Math.random() * 0.45, Ln.push(h);
      }
  }
  function xi(e) {
    cancelAnimationFrame(yt), Tn = e;
    const t = ue == null ? void 0 : ue.getContext("2d");
    if (!t) return;
    function n() {
      t.clearRect(0, 0, hi, fi);
      let a = !0;
      Ln.forEach((o) => {
        o[Tn](), o.isIdle || (a = !1);
      }), Tn === "disappear" && a || (yt = requestAnimationFrame(n));
    }
    yt = requestAnimationFrame(n);
  }
  function jt() {
    cancelAnimationFrame(yt), Ga(), xi("appear"), setTimeout(() => xi("disappear"), 560);
  }
  window.addEventListener("resize", () => {
    bt.classList.contains("active") && jt();
  });
  const wt = i("pixelTrailCanvas"), Ke = wt.getContext("2d");
  let me = !0, Je = 0.7, Qe = 600, kt = [], Xe = null, Te = { x: 0, y: 0, ready: !1 };
  function bi() {
    const e = H.getBoundingClientRect(), t = Ie(), n = Math.min(window.devicePixelRatio || 1, 2), a = Math.max(1, e.width / t), o = Math.max(1, e.height / t);
    wt.width = Math.max(1, Math.floor(a * n)), wt.height = Math.max(1, Math.floor(o * n)), wt.style.width = a + "px", wt.style.height = o + "px", Ke.setTransform(n, 0, 0, n, 0, 0);
  }
  function Wa(e, t) {
    if (!me) return;
    const n = performance.now();
    Te.ready || (Te = { x: e, y: t, ready: !0 });
    const a = 7;
    for (let o = 1; o <= a; o++) {
      const r = o / a;
      kt.push({
        x: Te.x + (e - Te.x) * r,
        y: Te.y + (t - Te.y) * r,
        born: n - (a - o) * 10
      });
    }
    Te = { x: e, y: t, ready: !0 };
  }
  function Yt(e) {
    if (Xe = null, !O) return;
    if (!qe.workout.classList.contains("active")) {
      Xe = requestAnimationFrame(Yt);
      return;
    }
    const t = H.getBoundingClientRect(), n = Ie();
    Ke.clearRect(0, 0, t.width / n, t.height / n), me && (kt = kt.filter((o) => e - o.born < Qe), Ke.fillStyle = i("app").classList.contains("light") ? "#03A9F4" : "#f4f4f4", kt.forEach((o) => {
      const r = (e - o.born) / Qe, l = (1 - r) * Je, s = Math.round(o.x / 14) * 14, c = Math.round(o.y / 14) * 14;
      Ke.globalAlpha = Math.max(0, l);
      const p = 2 + 5 * (1 - r) * Je;
      Ke.fillRect(s - p / 2, c - p / 2, p, p);
    }), Ke.globalAlpha = 1), Xe = requestAnimationFrame(Yt);
  }
  H.addEventListener("pointermove", (e) => {
    const t = H.getBoundingClientRect(), n = Ie();
    Wa((e.clientX - t.left) / n, (e.clientY - t.top) / n);
  }), H.addEventListener("pointerleave", () => Te.ready = !1), new ResizeObserver(bi).observe(H), bi(), Xe = requestAnimationFrame(Yt);
  const Le = i("movementRippleCanvas"), $e = Le.getContext("2d");
  let De = !0, et = null, ja = performance.now();
  function yi() {
    const e = Le.parentElement.getBoundingClientRect(), t = Ie(), n = Math.max(1, e.width / t), a = Math.max(1, e.height / t), o = Math.min(window.devicePixelRatio || 1, 2);
    Le.width = Math.max(1, Math.floor(n * o)), Le.height = Math.max(1, Math.floor(a * o)), Le.style.width = n + "px", Le.style.height = a + "px", $e.setTransform(o, 0, 0, o, 0, 0);
  }
  function wi() {
    var e;
    return Q || ((e = v[C]) == null ? void 0 : e.kind) === "rest";
  }
  function Ya() {
    const e = v[C];
    return wi() ? 2200 : e ? e.kind === "warmup" || e.kind === "cooldown" ? 2400 : 1350 : 1600;
  }
  function Vt(e) {
    if (et = null, !O) return;
    if (!qe.workout.classList.contains("active")) {
      et = requestAnimationFrame(Vt);
      return;
    }
    const t = Le.parentElement.getBoundingClientRect(), n = Ie(), a = Math.max(1, t.width / n), o = Math.max(1, t.height / n);
    if ($e.clearRect(0, 0, a, o), De) {
      const r = Ya(), l = (e - ja) % r / r, s = 15, c = Math.max(8, Math.round(s * o / Math.max(1, a))), p = a / (s + 1), m = o / (c + 1), d = a * 0.5, g = o * 0.52, k = Math.hypot(d, g), w = i("app").classList.contains("light") ? "34,34,34" : "244,244,244";
      for (let h = 1; h <= c; h++)
        for (let R = 1; R <= s; R++) {
          const u = R * p, S = h * m, G = Math.hypot(u - d, S - g) / k, D = wi(), ct = D ? Math.exp(-Math.pow((G - (l * 0.82 + 0.08) % 1 * 1.18) * 5.5, 2)) : 0, xe = Math.exp(-Math.pow((G - l * 1.25) * 7, 2)), j = D ? ct : xe, Xt = D ? 0.5 + 0.5 * Math.sin(l * Math.PI * 2 - G * 3) ** 2 : 0.35 + 0.65 * Math.sin(l * Math.PI * 2 - G * 5) ** 2, $t = D ? 1.4 + j * 4.2 * Xt : 1.2 + j * 5 * Xt;
          $e.beginPath(), $e.arc(u, S, $t, 0, Math.PI * 2), $e.fillStyle = `rgba(${w},${D ? 0.08 + j * 0.48 : 0.05 + j * 0.55})`, $e.fill();
        }
    }
    et = requestAnimationFrame(Vt);
  }
  new ResizeObserver(yi).observe(Le.parentElement), yi(), et = requestAnimationFrame(Vt);
  const St = i("exerciseTitle"), ge = i("exerciseMeta"), En = i("stepLabel"), ki = i("digits"), Si = i("fill"), tt = i("progress"), Ee = i("pause"), Va = i("nextName"), Ua = i("nextMeta"), Za = i("nextIcon"), Ut = i("skipNextSession");
  let $ = null;
  function ve(e) {
    for (let t = Math.max(0, e); t < v.length; t++)
      if (!v[t].sessionHidden) return t;
    return -1;
  }
  function Ka() {
    const e = v[C];
    if (!e) return { name: "Complete", meta: "Move finished", icon: "✓" };
    if (Q) {
      const a = ve(C + 1), o = a >= 0 ? v[a] : null;
      return o ? { name: o.name, meta: o.group + " · " + o.duration + " sec", icon: o.kind === "cooldown" ? "↘" : o.kind === "warmup" ? "↗" : "●" } : { name: "Complete", meta: "Move finished", icon: "✓" };
    }
    if (e.rest > 0) return { name: "Rest", meta: e.rest + " sec · " + (e.roundBreakAfter ? "round " + (e.round + 1) + " next" : "recovery"), icon: "Ⅱ" };
    const t = ve(C + 1), n = t >= 0 ? v[t] : null;
    return n ? { name: n.name, meta: n.group + " · " + n.duration + " sec", icon: n.kind === "cooldown" ? "↘" : n.kind === "warmup" ? "↗" : "●" } : { name: "Complete", meta: "Move finished", icon: "✓" };
  }
  function Ja() {
    if (!v[C]) return v.length;
    const t = ve(C + 1);
    return t < 0 ? v.length : t + 1;
  }
  function Qa(e) {
    return e.kind === "cooldown" ? "↘" : e.kind === "warmup" ? "↗" : "●";
  }
  function Zt() {
    return v.length && v[v.length - 1].round || 1;
  }
  function Ci(e) {
    const t = v[e];
    if (!t) return "";
    const n = Zt();
    if (n <= 1) return "Step " + (e + 1) + " of " + v.length;
    if (t.roundBreak) return "Round " + t.round + " of " + n + " · Rest";
    const a = v.filter((o) => o.round === t.round && !o.roundBreak).length;
    return "Round " + t.round + " of " + n + " · Step " + (t.roundIndex + 1) + " of " + a;
  }
  function Ti() {
    return tt.querySelector('[data-step="' + C + '"]');
  }
  function Xa() {
    v[C] && Number(tt.dataset.round) !== (v[C].round || 1) && Rn(), [...tt.children].forEach((e) => {
      const t = Number(e.dataset.step);
      e.classList.toggle("done", t < C), e.classList.toggle("active", t === C), e.classList.toggle("rewindable", t <= C), e.disabled = t > C, t === C && e.style.setProperty("--segment-progress", "0%");
    }), v[C] && (En.textContent = Ci(C), at());
  }
  function $a(e) {
    const t = v.indexOf(e);
    t < 0 || t <= C || (e.sessionHidden = !e.sessionHidden, nt(), U((e.sessionHidden ? "Hidden " : "Included ") + e.name + " for this session"));
  }
  function Li() {
    const e = i("upcomingList");
    if (!e) return;
    e.innerHTML = "";
    const t = Ja(), n = v.slice(t);
    (Ge === "all" ? n : n.slice(0, Math.max(1, Number(Ge) || 1))).forEach((o) => {
      const r = document.createElement("section");
      r.className = "upcomingCard" + (o.sessionHidden ? " sessionHidden" : ""), r.innerHTML = '<div class="upcomingInfo"><div class="upcomingIcon" aria-hidden="true">' + Qa(o) + '</div><div><div class="upcomingName">' + P(o.name) + '</div><div class="upcomingMeta">' + P(o.group) + " · " + o.duration + " sec" + (Zt() > 1 ? " · round " + o.round : "") + '</div></div></div><button class="skipSessionBtn" type="button">' + (o.sessionHidden ? "Include this session" : "Skip this session") + "</button>", r.querySelector(".skipSessionBtn").addEventListener("click", () => $a(o)), e.appendChild(r);
    });
  }
  function nt() {
    const e = Ka();
    if (Va.textContent = e.name, Ua.textContent = e.meta, Za.textContent = e.icon, $ = null, Q) {
      const t = ve(C + 1);
      t >= 0 && ($ = v[t]);
    } else {
      const t = v[C];
      if (t && t.rest > 0)
        $ = null;
      else {
        const n = ve(C + 1);
        n >= 0 && ($ = v[n]);
      }
    }
    Ut && (Ut.hidden = !$, Ut.textContent = $ != null && $.sessionHidden ? "Include this session" : "Skip this session"), Li();
  }
  Ut.addEventListener("click", () => {
    $ && ($.sessionHidden = !$.sessionHidden, U(($.sessionHidden ? "Hidden " : "Included ") + $.name + " for this session"), nt());
  });
  let le = null, Mn = null;
  function Ct(e, t = {}) {
    const n = T[E];
    f.fire(e, { move: (n == null ? void 0 : n.name) || "", move_id: E, ...t });
  }
  function eo() {
    const e = T[E];
    le = { key: E, name: (e == null ? void 0 : e.name) || "Move", startedAt: Date.now(), active: 0 }, clearInterval(Mn), Mn = setInterval(() => {
      le && !Z && le.active++;
    }, 1e3), Ct("started", { steps: v.length });
  }
  function Ei(e) {
    if (clearInterval(Mn), !le) return;
    const t = le;
    le = null, Ct(e ? "completed" : "ended", { seconds: t.active }), !(t.active < 30) && (L.history.unshift({ id: "h-" + t.startedAt, move_id: t.key, name: t.name, start: new Date(t.startedAt).toISOString(), seconds: t.active, completed: e }), L.history = L.history.slice(0, 1e3), Be(), Oe(), fe());
  }
  function to() {
    nn("workout"), no();
  }
  function Fn() {
    Ei(!1), clearInterval(Y), clearInterval(Rt), Q = !1, Z = !1, Ee.textContent = "Pause", i("app").classList.remove("resting", "paused"), bt.classList.remove("active"), nn("home");
  }
  function no() {
    bt.classList.add("active");
    let e = 5;
    Cn.textContent = e, requestAnimationFrame(jt), clearInterval(Rt), Rt = setInterval(() => {
      e--, e > 0 ? (Cn.textContent = e, jt()) : (clearInterval(Rt), Cn.textContent = "GO", jt(), setTimeout(() => {
        bt.classList.remove("active"), cancelAnimationFrame(yt), ao();
      }, 650));
    }, 1e3);
  }
  function Rn() {
    var t;
    tt.innerHTML = "";
    const e = ((t = v[Math.max(0, C)] || v[0]) == null ? void 0 : t.round) || 1;
    tt.dataset.round = e, v.forEach((n, a) => {
      if ((n.round || 1) !== e) return;
      const o = document.createElement("button");
      o.dataset.step = a, o.type = "button", o.className = "progressSegment", o.setAttribute("aria-label", "Go to " + n.name), o.addEventListener("click", () => {
        a <= C && io(a);
      }), tt.appendChild(o);
    });
  }
  function io(e) {
    e < 0 || e >= v.length || e > C || (clearInterval(Y), Q = !1, i("app").classList.remove("resting"), C = e, Z = !1, i("app").classList.remove("paused"), Ee.textContent = "Pause", it(), Y = setInterval(He, 1e3));
  }
  function ao() {
    if (C = ve(0), Z = !1, i("app").classList.remove("paused"), Ee.textContent = "Pause", Rn(), C < 0) {
      St.textContent = "No activities", ge.textContent = "Open Edit and enable or add a movement", ge.hidden = !1;
      return;
    }
    eo(), it(), clearInterval(Y), Y = setInterval(He, 1e3);
  }
  function it() {
    Q = !1;
    const e = v[C];
    i("app").classList.toggle("resting", e.kind === "rest"), ne = e.duration, Ft = e.duration, St.textContent = e.name, ge.textContent = e.group, ge.hidden = !0, En.textContent = Ci(C), le && Ct("step", { name: e.name, group: e.group, kind: e.kind, step: C + 1, of: v.length, round: e.round || 1, rounds: Zt(), duration: e.duration }), nt(), Xa();
  }
  function at() {
    ki.textContent = ne;
    const e = ne / Ft * 100;
    Si.style.width = e + "%";
    const t = Ti();
    if (t && !Q) {
      const n = 100 - e;
      t.style.setProperty("--segment-progress", n + "%");
    }
  }
  function He() {
    if (!Z && (ne--, at(), ne <= 0)) {
      const e = v[C];
      e.rest > 0 ? Mi(e.rest) : Tt();
    }
  }
  function Mi(e) {
    var n;
    Q = !0, i("app").classList.add("resting");
    const t = Ti();
    t && t.style.setProperty("--segment-progress", "100%"), clearInterval(Y), ne = e, Ft = e, le && Ct("rest", { duration: e }), St.textContent = "Rest", ge.textContent = (n = v[C]) != null && n.roundBreakAfter ? "Round " + (v[C].round + 1) + " next" : "Recovery", nt(), at(), Y = setInterval(() => {
      Z || (ne--, at(), ne <= 0 && (clearInterval(Y), Tt(), Y = setInterval(He, 1e3)));
    }, 1e3);
  }
  function Tt() {
    Q = !1;
    const e = ve(C + 1);
    if (e >= 0)
      C = e, it();
    else {
      Z = !1, Ee.textContent = "Pause", i("app").classList.remove("resting", "paused"), clearInterval(Y), St.textContent = "Complete", ge.textContent = "Move finished", ge.hidden = !1, ki.textContent = "✓";
      {
        const t = Zt();
        En.textContent = t > 1 ? t + " rounds done" : v.filter((n) => !n.roundBreak).length + " steps done";
      }
      Ei(!0);
      {
        const t = Di(7).reduce((n, a) => n + a.minutes, 0);
        ge.textContent = "Move finished · " + t + " min in the last 7 days";
      }
      Si.style.width = "100%", nt();
    }
  }
  i("skipExercise").addEventListener("click", () => {
    clearInterval(Y);
    const e = v[C];
    if (Q) {
      Q = !1, i("app").classList.remove("resting");
      const n = ve(C + 1);
      n >= 0 ? (C = n, it(), Y = setInterval(He, 1e3)) : Tt();
      return;
    }
    if (e && e.rest > 0) {
      Mi(e.rest);
      return;
    }
    const t = ve(C + 1);
    t >= 0 ? (C = t, it(), Y = setInterval(He, 1e3)) : Tt();
  }), i("restartSegment").addEventListener("click", () => {
    if (clearInterval(Y), Z = !1, i("app").classList.remove("paused"), Ee.textContent = "Pause", Q) {
      const e = v[C];
      ne = e.rest, Ft = e.rest, St.textContent = "Rest", ge.textContent = "Recovery", i("app").classList.add("resting"), nt(), at();
    } else
      it();
    Y = setInterval(Q ? () => {
      Z || (ne--, at(), ne <= 0 && (clearInterval(Y), Tt(), Y = setInterval(He, 1e3)));
    } : He, 1e3);
  });
  function Kt(e, t, n, a) {
    let o = 0, r = null, l = !1;
    function s() {
      r && cancelAnimationFrame(r), r = null, o = 0, l = !1, t.style.width = "0%", e.classList.remove("holding");
    }
    function c(d) {
      if (!l) return;
      o || (o = d);
      const g = Math.min(1, (d - o) / n);
      if (t.style.width = g * 100 + "%", g >= 1) {
        l = !1, r && cancelAnimationFrame(r), r = null, t.style.width = "100%", setTimeout(() => t.style.width = "0%", 90), a();
        return;
      }
      r = requestAnimationFrame(c);
    }
    function p(d) {
      var g;
      if (!(d && d.button !== void 0 && d.button !== 0)) {
        d == null || d.preventDefault(), s(), l = !0, e.classList.add("holding");
        try {
          (g = e.setPointerCapture) == null || g.call(e, d.pointerId);
        } catch {
        }
        r = requestAnimationFrame(c);
      }
    }
    function m() {
      l && s();
    }
    e.addEventListener("pointerdown", p), e.addEventListener("pointerup", m), e.addEventListener("pointercancel", m), e.addEventListener("lostpointercapture", m), e.addEventListener("keydown", (d) => {
      (d.key === " " || d.key === "Enter") && !d.repeat && p(d);
    }), e.addEventListener("keyup", (d) => {
      (d.key === " " || d.key === "Enter") && m();
    });
  }
  const oo = i("endWorkout");
  Kt(oo, i("holdEndFill"), 1500, Fn);
  const ot = i("deleteMoveConfirm");
  i("deleteMoveOpen").addEventListener("click", () => {
    ot.classList.add("open"), ot.setAttribute("aria-hidden", "false");
  }), i("deleteMoveCancel").addEventListener("click", () => {
    ot.classList.remove("open"), ot.setAttribute("aria-hidden", "true");
  });
  function ro() {
    const e = E, t = x.querySelector('.workoutPanel[data-workout="' + e + '"]');
    t && t.remove(), delete T[e], L.order = L.order.filter((a) => a !== e);
    let n = x.querySelector(".workoutPanel[data-workout]");
    if (!n) {
      const a = "custom-" + Date.now();
      T[a] = { name: "New move", source: "Custom routine", total: 20, work: 45, rest: 15, customSequence: !0, preset: "movement", sequence: [], strength: [] }, L.order.push(a), n = sn(a, T[a]);
    }
    ot.classList.remove("open"), ot.setAttribute("aria-hidden", "true"), xt = null, Wt(), oe(n.dataset.workout), Be(), U("Move deleted");
  }
  Kt(i("deleteMoveYes"), i("deleteMoveFill"), 1500, ro);
  const Bn = x.querySelector(".rubberTabs"), rt = i("rubberIndicator");
  function Lt(e, t = !0) {
    if (!e || !Bn || !rt) return;
    const n = Bn.getBoundingClientRect(), a = e.getBoundingClientRect();
    rt.style.transition = t ? "left .34s cubic-bezier(.2,1.35,.4,1),width .34s cubic-bezier(.2,1.35,.4,1),transform .18s ease" : "none";
    const o = Ie();
    rt.style.left = (a.left - n.left) / o + Bn.scrollLeft + "px", rt.style.width = a.width / o + "px", t && (rt.style.transform = "scaleX(1.08)", setTimeout(() => rt.style.transform = "scaleX(1)", 180));
  }
  x.querySelectorAll(".tab").forEach((e) => e.addEventListener("click", () => {
    e.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "smooth" }), x.querySelectorAll(".tab").forEach((t) => t.classList.remove("active")), x.querySelectorAll(".settingsPane").forEach((t) => t.classList.remove("active")), e.classList.add("active"), i(e.dataset.pane).classList.add("active"), Lt(e, !0);
  })), requestAnimationFrame(() => Lt(x.querySelector(".tab.active"), !1)), window.addEventListener("resize", () => Lt(x.querySelector(".tab.active"), !1));
  const An = i("pixelTrailToggle"), Nn = i("rippleToggle"), st = i("trailStrength"), lt = i("trailLife");
  function ae(e, t) {
    N()[e] = t, Be();
  }
  const dt = { feel: !0, steps: !0, mood: !0, energyLevel: !0, ...N().toggles || {} };
  function Fi() {
    x.querySelectorAll("[data-toggle]").forEach((t) => t.classList.toggle("on", dt[t.dataset.toggle] !== !1)), x.querySelector(".feelSection").hidden = !0, [["steps", "stepsRow"], ["mood", "moodRow"], ["energyLevel", "energyLevelRow"]].forEach(([t, n]) => {
      i(n).hidden = dt[t] === !1;
    });
    const e = ["steps", "mood", "energyLevel"].some((t) => dt[t] !== !1);
    x.querySelector(".activityCard").hidden = !e, i("insightCard").style.gridColumn = e ? "" : "span 12";
  }
  x.querySelectorAll("[data-toggle]").forEach((e) => e.addEventListener("click", () => {
    dt[e.dataset.toggle] = dt[e.dataset.toggle] === !1, Fi(), ae("toggles", { ...dt });
  })), Fi();
  function so() {
    An.classList.toggle("on", me), Nn.classList.toggle("on", De), st.value = Math.round(Je * 100), i("trailStrengthValue").textContent = st.value + "%", lt.value = Qe, i("trailLifeValue").textContent = lt.value + " ms";
  }
  N().trailEnabled !== void 0 && (me = N().trailEnabled), N().rippleEnabled !== void 0 && (De = N().rippleEnabled), N().trailStrength !== void 0 && (Je = N().trailStrength), N().trailMaxAge !== void 0 && (Qe = N().trailMaxAge), so(), An.addEventListener("click", () => {
    me = !me, An.classList.toggle("on", me), me || (kt = []), ae("trailEnabled", me);
  }), Nn.addEventListener("click", () => {
    De = !De, Nn.classList.toggle("on", De), ae("rippleEnabled", De);
  }), st.addEventListener("input", () => {
    Je = Number(st.value) / 100, i("trailStrengthValue").textContent = st.value + "%";
  }), st.addEventListener("change", () => ae("trailStrength", Je)), lt.addEventListener("input", () => {
    Qe = Number(lt.value), i("trailLifeValue").textContent = lt.value + " ms";
  }), lt.addEventListener("change", () => ae("trailMaxAge", Qe)), _t.addEventListener("change", () => ae("upcomingCount", Ge));
  function Ri(e) {
    x.querySelectorAll(".themeBtn").forEach((n) => n.classList.toggle("active", n.dataset.theme === e));
    const t = e === "light";
    i("app").classList.toggle("light", t), f.setLight(t);
  }
  Ri(N().theme || "dark"), x.querySelectorAll(".themeBtn").forEach((e) => e.addEventListener("click", () => {
    Ri(e.dataset.theme), ae("theme", e.dataset.theme);
  }));
  const he = { steps: null, ...N().entities || {} };
  let ze = null, Pn = {};
  function lo(e) {
    const t = Object.values(e).filter((s) => s.entity_id.startsWith("sensor.") || s.entity_id.startsWith("input_number.")), n = (s) => s.attributes.friendly_name || s.entity_id, a = t.filter((s) => /step/i.test(s.entity_id) || /step/i.test(n(s)) || ["steps", "step"].includes(String(s.attributes.unit_of_measurement || "").toLowerCase())), o = t.filter((s) => !a.includes(s)), r = (s, c) => n(s).localeCompare(n(c)), l = (s, c) => /health_steps/.test(c.entity_id) - /health_steps/.test(s.entity_id) || r(s, c);
    return { suggested: a.sort(l), rest: o.sort(r), label: n };
  }
  function Bi(e) {
    const t = i("stepsEntity");
    if (!t || t.matches(":focus")) return;
    const { suggested: n, rest: a, label: o } = lo(e), r = (c) => '<option value="' + P(c.entity_id) + '">' + P(o(c)) + "</option>";
    t.innerHTML = '<option value="">Not connected</option>' + (n.length ? '<optgroup label="Suggested">' + n.map(r).join("") + "</optgroup>" : "") + (a.length ? '<optgroup label="All sensors">' + a.map(r).join("") + "</optgroup>" : ""), t.value = he.steps || "";
    const l = i("stepsStatus"), s = he.steps && e[he.steps];
    l.textContent = s ? "Connected · " + o(s) : l.dataset.empty;
  }
  i("stepsEntity").addEventListener("change", () => {
    he.steps = i("stepsEntity").value || null, ae("entities", { ...he }), Pn = {}, Ii(), ze && (Bi(ze), Ni(ze));
  });
  function co(e, t = 0) {
    return new Intl.NumberFormat(void 0, { maximumFractionDigits: t }).format(e);
  }
  function Ai() {
    const e = he.steps && (ze == null ? void 0 : ze[he.steps]), t = Number(e == null ? void 0 : e.state);
    return Number.isFinite(t) ? t : null;
  }
  function Ni(e) {
    var a;
    const t = he.steps, n = t ? Number((a = e[t]) == null ? void 0 : a.state) : NaN;
    i("stepsMeta").textContent = t ? Number.isFinite(n) ? co(n) : "—" : "Set up in Settings";
  }
  let Pi = 0;
  async function Ii() {
    const e = he.steps;
    if (!e || !f.ws) return;
    Pi = Date.now();
    const t = /* @__PURE__ */ new Date(), n = new Date(t.getFullYear(), t.getMonth(), t.getDate() - 30);
    try {
      const a = await f.ws({ type: "recorder/statistics_during_period", start_time: n.toISOString(), end_time: t.toISOString(), statistic_ids: [e], period: "day", types: ["max"] }), o = (a == null ? void 0 : a[e]) || [], r = {};
      if (o.forEach((l) => {
        Number.isFinite(l.max) && (r[J(new Date(l.start))] = l.max);
      }), !Object.keys(r).length) {
        const l = await f.ws({ type: "history/history_during_period", start_time: n.toISOString(), end_time: t.toISOString(), entity_ids: [e], minimal_response: !0, no_attributes: !0, significant_changes_only: !1 });
        ((l == null ? void 0 : l[e]) || []).forEach((s) => {
          const c = Number(s.s ?? s.state), p = s.lu ? s.lu * 1e3 : Date.parse(s.last_updated || s.last_changed);
          if (!Number.isFinite(c) || !p) return;
          const m = J(new Date(p));
          r[m] = Math.max(r[m] || 0, c);
        });
      }
      Pn = r, fe();
    } catch {
    }
  }
  function Oe() {
    fe();
  }
  Oe(), setInterval(() => {
    Oe(), vt(), Pe();
  }, 10 * 60 * 1e3);
  function Di(e) {
    const t = {}, n = {};
    L.history.forEach((l) => {
      const s = J(new Date(l.start));
      t[s] = (t[s] || 0) + (l.seconds || 0) / 60, n[s] = (n[s] || 0) + 1;
    });
    const a = /* @__PURE__ */ new Date(), o = J(a), r = [];
    for (let l = e - 1; l >= 0; l--) {
      const s = new Date(a.getFullYear(), a.getMonth(), a.getDate() - l), c = J(s), p = L.checkins.filter((d) => d.date === c), m = (d) => {
        const g = p.map((k) => k[d]).filter(Boolean);
        return g.length ? g.reduce((k, y) => k + y, 0) / g.length : null;
      };
      r.push({
        key: c,
        date: s,
        minutes: Math.round(t[c] || 0),
        moves: n[c] || 0,
        steps: c === o && Ai() != null ? Ai() : Pn[c] ?? null,
        mood: m("mood"),
        energy: m("energy")
      });
    }
    return r;
  }
  function po(e) {
    let t = e.length - 1;
    e[t] && !e[t].minutes && t--;
    let n = 0;
    for (; t >= 0 && e[t].minutes > 0; )
      n++, t--;
    return n;
  }
  function fe() {
    const e = i("insightCard");
    if (!e) return;
    const t = Di(30), n = po(t), a = t.reduce((d, g) => d + g.minutes, 0), o = /* @__PURE__ */ new Date(), r = J(o), l = new Date(o.getFullYear(), o.getMonth(), o.getDate() - (o.getDay() + 6) % 7), s = [...Array(7)].map((d, g) => {
      const k = new Date(l.getFullYear(), l.getMonth(), l.getDate() + g), y = J(k), w = t.find((h) => h.key === y);
      return { d: k, k: y, minutes: w ? w.minutes : 0, today: y === r, future: y > r };
    }), c = s.reduce((d, g) => d + g.minutes, 0), p = Math.max(10, ...s.map((d) => d.minutes)), m = (d, g, k) => '<div class="activityRow"><div class="activityRowIcon" aria-hidden="true">' + d + '</div><div><div class="activityRowName">' + P(g) + '</div><div class="activityRowMeta">' + P(k) + "</div></div></div>";
    e.innerHTML = '<div class="activityHeader"><div class="activityIcon" aria-hidden="true">↗</div><div class="activityTitle">Movement</div></div><div class="activityRows movementReadings">' + m("◷", "This week", c + " min") + m("↯", "Streak", n + " day" + (n === 1 ? "" : "s")) + m("▦", "30 days", a + " min") + '</div><div class="weekBars">' + s.map(
      (d) => '<div class="weekBar' + (d.today ? " today" : "") + (d.future ? " future" : "") + '" title="' + P(d.minutes + " min") + '"><div class="weekBarTrack"><span style="height:' + (d.minutes ? Math.max(6, d.minutes / p * 100) : 0) + '%"></span></div><div class="dayLabel">' + P(new Intl.DateTimeFormat(void 0, { weekday: "short" }).format(d.d)) + "</div></div>"
    ).join("") + "</div>";
  }
  const Hi = i("tvNav");
  f.fullscreenSupported || (Hi.hidden = !0), Hi.addEventListener("click", () => f.toggleFullscreen()), x.addEventListener("keydown", (e) => {
    !qe.workout.classList.contains("active") || bt.classList.contains("active") || e.target.closest("input,select,textarea,.holdEnd") || (e.key === "MediaPlayPause" || e.key === " " && !e.target.closest("button") ? (e.preventDefault(), Ee.click()) : e.key === "MediaTrackNext" ? (e.preventDefault(), i("skipExercise").click()) : e.key === "MediaTrackPrevious" && (e.preventDefault(), i("restartSegment").click()));
  }), [I, F, B, Re].forEach((e) => e.addEventListener("input", () => {
    const t = T[E];
    t && (t.total = Number(I.value), t.work = Number(F.value), t.rest = Number(B.value)), q();
  })), Un.addEventListener("click", Fn), Zn.addEventListener("click", () => nn("settings")), i("settingsBack").addEventListener("click", Fn), Ee.addEventListener("click", () => {
    Z = !Z, le && Ct(Z ? "paused" : "resumed"), Ee.textContent = Z ? "Resume" : "Pause", i("app").classList.toggle("paused", Z);
  }), oe(E), Ot(), vt(), fe(), i("healthHelpOpen").addEventListener("click", () => x.querySelector(".tab[data-pane=helpPane]").click()), Kt(i("resetStats"), i("resetStatsFill"), 1500, () => {
    L.history = [], L.checkins = [], gt = "";
    try {
      localStorage.removeItem("move-assistant-dismissed");
    } catch {
    }
    Be(), Oe(), vt(), Ot(), fe(), Pe(), U("Stats reset");
  });
  const In = i("morningTime"), Dn = i("eveningTime"), Hn = i("checkinAutoOpen");
  In.value = pe().morning, Dn.value = pe().evening, Hn.classList.toggle("on", N().checkinAutoOpen !== !1), [["morningTime", In], ["eveningTime", Dn]].forEach(([e, t]) => t.addEventListener("change", () => {
    t.value && (ae(e, t.value), Pe());
  })), Hn.addEventListener("click", () => {
    const e = N().checkinAutoOpen === !1;
    Hn.classList.toggle("on", e), ae("checkinAutoOpen", e);
  }), setTimeout(bn, 800);
  const zi = i("checkinNotify"), Jt = i("checkinNotifyTarget"), Oi = i("checkinNotifyStatus"), uo = Oi.textContent;
  function _i() {
    const e = f.notifyServices(), t = e.filter((o) => o.startsWith("mobile_app_")), n = t.length ? t : e, a = (o) => o.replace(/^mobile_app_/, "").replace(/_/g, " ");
    Jt.innerHTML = n.map((o) => '<option value="' + P(o) + '">' + P(a(o)) + "</option>").join(""), !N().notifyTarget && n[0] && (N().notifyTarget = n[0]), Jt.value = N().notifyTarget || "";
  }
  function Qt() {
    const e = !!N().notifyOn;
    zi.classList.toggle("on", e), i("checkinNotifyTargetRow").hidden = !e;
    const t = pe();
    Oi.textContent = e ? "Sends at " + t.morning + " and " + t.evening : uo;
  }
  async function zn() {
    const e = !!N().notifyOn;
    try {
      return await f.setReminderAutomation(e ? { target: N().notifyTarget, times: pe() } : null), !0;
    } catch {
      return U("Couldn't update the reminder in Home Assistant"), !1;
    }
  }
  zi.addEventListener("click", async () => {
    const e = !N().notifyOn;
    if (e && (_i(), !N().notifyTarget)) {
      U("Install the Companion app on your phone first");
      return;
    }
    N().notifyOn = e, Qt(), await zn() ? (Be(), U(e ? "Check-in notifications on" : "Check-in notifications off")) : (N().notifyOn = !e, Qt());
  }), Jt.addEventListener("change", () => {
    ae("notifyTarget", Jt.value), N().notifyOn && zn();
  }), [In, Dn].forEach((e) => e.addEventListener("change", () => {
    Qt(), N().notifyOn && zn();
  })), _i(), Qt();
  let On = null;
  function mo() {
    On || (On = setTimeout(() => {
      On = null, fe();
    }, 3e4));
  }
  return {
    updateStates(e) {
      ze = e, Bi(e), Ni(e), Date.now() - Pi > 60 * 60 * 1e3 && Ii(), mo();
    },
    applyRemoteData(e) {
      if (e && (Array.isArray(e.history) && (L.history = e.history, Oe()), Array.isArray(e.history) && fe(), Array.isArray(e.checkins) && (L.checkins = e.checkins.map(Xn), Pe(), Ot(), vt(), Oe(), fe()), e.profiles && !X.classList.contains("open") && !le)) {
        const t = Qn(e);
        Object.keys(T).forEach((n) => delete T[n]), Object.assign(T, t.profiles), L.order = t.order, T[E] || (E = L.order[0]), ei(), oe(E);
      }
    },
    suspend() {
      O = !1;
    },
    resume() {
      O || (O = !0, Xe || (Xe = requestAnimationFrame(Yt)), et || (et = requestAnimationFrame(Vt)), Lt(x.querySelector(".tab.active"), !1));
    }
  };
}
const yo = "0.17.1", Gn = "move_assistant", wo = "move_assistant", Vi = "move_assistant_checkin_reminder";
function ko() {
  if (document.getElementById("move-assistant-inter")) return;
  const x = document.createElement("link");
  x.id = "move-assistant-inter", x.rel = "stylesheet", x.href = "https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,400;0,500;0,600;0,700;0,800;1,500&display=swap", document.head.appendChild(x);
}
class So extends HTMLElement {
  setConfig(f) {
    this._config = f || {};
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
  set hass(f) {
    const i = !this._hass;
    if (this._hass = f, i) {
      this._init();
      return;
    }
    this._app && f.states !== this._lastStates && (this._lastStates = f.states, this._app.updateStates(f.states));
  }
  connectedCallback() {
    var f;
    (f = this._app) == null || f.resume();
  }
  disconnectedCallback() {
    var f;
    (f = this._app) == null || f.suspend();
  }
  async _init() {
    ko();
    const f = this.shadowRoot || this.attachShadow({ mode: "open" });
    f.innerHTML = `<style>${fo}</style>${xo}`;
    const i = f.getElementById("app");
    i.style.opacity = "0";
    let H = null;
    try {
      const M = await this._hass.callWS({
        type: "frontend/get_user_data",
        key: Gn
      });
      H = (M == null ? void 0 : M.value) ?? null;
    } catch {
    }
    this._lastSaved = JSON.stringify(H), this._app = bo(f, {
      data: H,
      save: (M) => this._save(M),
      fire: (M, O) => this._fire(M, O),
      ws: (M) => this._hass.callWS(M),
      notifyServices: () => {
        var M, O;
        return Object.keys(((O = (M = this._hass) == null ? void 0 : M.services) == null ? void 0 : O.notify) || {}).sort();
      },
      setReminderAutomation: (M) => this._setReminderAutomation(M),
      setLight: (M) => this.classList.toggle("lightBody", M),
      fullscreenSupported: !!(this.requestFullscreen || this.webkitRequestFullscreen),
      toggleFullscreen: () => this._toggleFullscreen()
    }), this._lastStates = this._hass.states, this._app.updateStates(this._hass.states), this.isConnected || this._app.suspend(), i.style.transition = "opacity .2s ease", i.style.opacity = "", this._subscribe();
  }
  _subscribe() {
    var i;
    const f = (i = this._hass) == null ? void 0 : i.connection;
    f != null && f.subscribeMessage && f.subscribeMessage(
      (H) => {
        var O;
        const M = JSON.stringify((H == null ? void 0 : H.value) ?? null);
        M === this._lastSaved || M === this._pendingJson || (this._lastSaved = M, (O = this._app) == null || O.applyRemoteData(H.value));
      },
      { type: "frontend/subscribe_user_data", key: Gn }
    ).catch(() => {
    });
  }
  _save(f) {
    this._pendingJson = JSON.stringify(f), clearTimeout(this._saveTimer), this._saveTimer = setTimeout(async () => {
      const i = this._pendingJson;
      try {
        await this._hass.callWS({
          type: "frontend/set_user_data",
          key: Gn,
          value: JSON.parse(i)
        }), this._lastSaved = i;
      } catch {
        this._toast("Couldn't save to Home Assistant");
      }
    }, 400);
  }
  _fire(f, i = {}) {
    var H, M;
    ((H = this._config) == null ? void 0 : H.events) !== !1 && ((M = this._hass) == null || M.callWS({
      type: "fire_event",
      event_type: wo,
      event_data: { action: f, ...i }
    }).catch(() => {
    }));
  }
  // Keeps one Home Assistant automation in sync with the check-in times.
  // Passing null removes it.
  async _setReminderAutomation(f) {
    const i = `config/automation/config/${Vi}`;
    if (!f) {
      try {
        await this._hass.callApi("DELETE", i);
      } catch (O) {
        if ((O == null ? void 0 : O.status_code) !== 404 && (O == null ? void 0 : O.status) !== 404) throw O;
      }
      return;
    }
    const H = (O) => `${O}:00`, M = window.location.pathname;
    await this._hass.callApi("POST", i, {
      id: Vi,
      alias: "Move Assistant check-in reminder",
      description: "Created by Move Assistant. Change it in Move Assistant → Settings → Check-in.",
      mode: "single",
      triggers: [
        { trigger: "time", at: H(f.times.morning), id: "morning" },
        { trigger: "time", at: H(f.times.evening), id: "evening" }
      ],
      conditions: [],
      actions: [
        {
          action: `notify.${f.target}`,
          data: {
            title: "Move Assistant",
            message: "{{ 'Morning' if trigger.id == 'morning' else 'Evening' }} check-in is ready",
            data: { url: M, clickAction: M }
          }
        }
      ]
    });
  }
  _toggleFullscreen() {
    const f = document;
    if (f.fullscreenElement || f.webkitFullscreenElement) {
      (f.exitFullscreen || f.webkitExitFullscreen).call(f);
      return;
    }
    const i = this.requestFullscreen || this.webkitRequestFullscreen;
    Promise.resolve(i.call(this)).catch(
      () => this._toast("Full screen isn't available here")
    );
  }
  _toast(f) {
    var H;
    const i = (H = this.shadowRoot) == null ? void 0 : H.getElementById("toast");
    i && (i.textContent = f, i.classList.add("show"), setTimeout(() => i.classList.remove("show"), 2600));
  }
}
customElements.get("move-assistant-card") || (customElements.define("move-assistant-card", So), window.customCards = window.customCards || [], window.customCards.push({
  type: "move-assistant-card",
  name: "Move Assistant",
  description: "Guided movement timer with your Home Assistant activity data.",
  preview: !1
}), console.info(`%c MOVE ASSISTANT %c ${yo} `, "background:#D0FF00;color:#090909;font-weight:700", ""));
