const jr = ':host{display:flex;flex-direction:column;min-height:calc(100dvh - var(--header-height,0px));position:relative;background:#050505;color-scheme:dark;--bg:#050505;--page:#090909;--card:#1d1d1d;--card2:#242424;--tile:#252525;--tile-2:#292929;--row:#2a2a2a;--row-rest:#22252a;--raised:#282828;--chip:#292929;--bar-track:#292929;--control:#171717;--control-2:#1b1b1b;--sunken:#171717;--input:#151515;--track:#151515;--modal:#202020;--icon-bg:#313131;--text:#f4f4f4;--soft:#cfcfcf;--muted:#969696;--accent-text:var(--secondary);--line:#3f3f3f;--lineb:#252525;--field-line:#3f3f3f;--divider:#343434;--border-hover:#5a5a5a;--bright:#efefef;--on-bright:#090909;--switch-off:#444;--knob-off:#ddd;--slider-fill:#efefef;--segment:#3f3f3f;--segment-fill:#efefef;--timer:#0d0d0d;--timer-fill:#f2f2f2;--stage:#151515;--hover:rgba(255,255,255,.06);--wash:rgba(255,255,255,.04);--wash-2:rgba(255,255,255,.08);--wash-3:rgba(255,255,255,.12);--wash-4:rgba(255,255,255,.22);--today-ring:rgba(255,255,255,.35);--dot-empty:#555;--scroll-thumb:#4a4a4a;--checkin-due:#232323;--danger:#ff7777;--danger-bg:#311313;--danger-line:#8c2e2e;--danger-fill:#D53D3D;--scrim:rgba(0,0,0,.66);--lift:rgba(0,0,0,.5);--r:36px;--gap:20px}*{box-sizing:border-box}#app{color:var(--text);font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif;transition:background .25s ease,color .25s ease;-webkit-font-smoothing:antialiased}[hidden]{display:none!important}button,input{font:inherit}#app{flex:1;display:flex;flex-direction:column;width:100%;margin:0;padding:0;background:var(--bg);text-align:left}.shell{flex:1;display:flex;flex-direction:column;position:relative;width:100%;background:var(--page);border-radius:0;overflow:visible;transition:background .28s ease}#app.resting .shell{background:#1f7a4d}#app.paused .shell{background:var(--primary)}#app.light.paused .shell{background:color-mix(in srgb,var(--primary) 55%,white)}#app.light{--bg:#EEEDED;--page:#EEEDED;--card:#FFFFFF;--card2:#F7F6F6;--tile:#F4F3F3;--tile-2:#F4F3F3;--row:#F4F3F3;--row-rest:#ECF1F6;--raised:#F4F3F3;--chip:#EEEDED;--bar-track:#EEEDED;--control:#FFFFFF;--control-2:#FFFFFF;--sunken:#F4F3F3;--input:#FFFFFF;--track:#E3E1E1;--modal:#FFFFFF;--icon-bg:var(--primary-tint);--text:#222222;--soft:#3F3F3F;--muted:#6B6B6B;--accent-text:#5B7A00;--line:#FFFFFF;--lineb:#FFFFFF;--field-line:#DAD8D8;--divider:#E6E4E4;--border-hover:#C9C7C7;--bright:#222222;--on-bright:#FFFFFF;--switch-off:#D8D6D6;--knob-off:#FFFFFF;--slider-fill:color-mix(in srgb,var(--primary) 45%,white);--segment:#D3D1D1;--segment-fill:var(--primary);--timer:#FFFFFF;--timer-fill:color-mix(in srgb,var(--primary) 30%,white);--stage:#FFFFFF;--hover:rgba(0,0,0,.05);--wash:rgba(0,0,0,.04);--wash-2:rgba(0,0,0,.06);--wash-3:rgba(0,0,0,.1);--wash-4:rgba(0,0,0,.14);--today-ring:rgba(0,0,0,.25);--dot-empty:#bbb;--scroll-thumb:#CFCDCD;--checkin-due:#FFFFFF;--danger:#C62F2F;--danger-bg:#F5DEDE;--danger-line:#E3A0A0;--scrim:rgba(20,20,20,.32);--lift:rgba(0,0,0,.16)}#app.light .activityRow:nth-child(1) .activityRowIcon{background:var(--primary-tint);color:var(--primary-ink)!important}#app.light .activityRow:nth-child(2) .activityRowIcon{background:#ffe8c8;color:#c8741f!important}#app.light .activityRow:nth-child(3) .activityRowIcon{background:#d9f4e6;color:#2e8b63!important}#app.light .activityIcon{background:#e8e1ff;color:#7859c9!important}#app.light .energyBtn:hover,#app.light .energyBtn:focus-visible,#app.light .energyBtn.selected{background:color-mix(in srgb,var(--feeling-color) 34%,white);color:#222!important}:host(.lightBody){background:#eeeded;color-scheme:light}#app.light.resting .shell{background:#7dbb98}.view{display:none;width:100%;max-width:1184px;margin:0 auto;padding:22px 22px 76.8px}.view.active{display:block;flex:1 0 auto}.card,.panel,.tile{position:relative;background:var(--card);border-radius:36px;padding:22px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.grid{display:grid;grid-template-columns:repeat(12,minmax(0,1fr));gap:16px}.eyebrow{text-transform:uppercase;color:var(--muted)}.sub{color:var(--muted);margin-top:6.4px}.pill,.primary,.navBtn,.tab,.back,.hideBtn,.addBtn{cursor:pointer}.pill{min-height:0;padding:3.2px 0;border:0;border-radius:0;background:transparent;color:var(--text);text-decoration-line:underline;text-decoration-thickness:.8px;text-underline-offset:3.2px}.tab,.back{border-radius:799.2px;min-height:41.6px;padding:0 16px;background:var(--control);border:.32px solid var(--line);color:var(--text)}.primary{border-radius:799.2px;min-height:41.6px;padding:0 17.6px;border:0;background:var(--bright);color:var(--on-bright)}.topbar{display:flex;justify-content:space-between;gap:16px;align-items:flex-start;margin-bottom:19.2px}.activityCard,.weekly{grid-column:span 6}.energySection{grid-column:span 12;margin-top:16px}.activityCard,.weekly{min-height:288px}.wellness{width:100%}.sourceTag{display:inline-flex;margin-top:11.2px;padding:6.4px 9.6px;border-radius:799.2px;background:var(--chip);color:var(--soft)}.workoutFooter{display:flex;justify-content:space-between;align-items:end;gap:22.4px;flex-wrap:wrap;margin-top:22.4px;width:100%;box-sizing:border-box}.workoutGallery{grid-column:span 12;display:flex;gap:16px;height:288px;overflow:hidden}.workoutPanel{position:relative;height:288px;flex:1 1 72px;min-width:70.4px;background:var(--card);border-radius:28.8px;padding:22.4px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);overflow:hidden;box-sizing:border-box;transition:flex .32s ease;cursor:pointer}.workoutPanel.active{flex:7 1 0;min-width:0;cursor:default}.workoutPanel.addPanel{flex:0 0 73.6px;min-width:73.6px;display:flex;align-items:center;justify-content:center;padding:14.4px}.workoutPanel{--edge-proximity:0;--cursor-angle:45deg;--edge-sensitivity:36;--color-sensitivity:56;--cone-spread:25;--fill-opacity:.18;--glow-color:hsl(199deg 97% 68% / 100%);--glow-color-60:hsl(199deg 97% 68% / 60%);--glow-color-50:hsl(199deg 97% 68% / 50%);--glow-color-40:hsl(199deg 97% 68% / 40%);--glow-color-30:hsl(199deg 97% 68% / 30%);--glow-color-20:hsl(199deg 97% 68% / 20%);--glow-color-10:hsl(199deg 97% 68% / 10%);--gradient-one:radial-gradient(at 80% 55%,#c084fc 0px,transparent 50%);--gradient-two:radial-gradient(at 69% 34%,#f472b6 0px,transparent 50%);--gradient-three:radial-gradient(at 8% 6%,#38bdf8 0px,transparent 50%);--gradient-four:radial-gradient(at 41% 38%,#c084fc 0px,transparent 50%);--gradient-five:radial-gradient(at 86% 85%,#f472b6 0px,transparent 50%);--gradient-six:radial-gradient(at 82% 18%,#38bdf8 0px,transparent 50%);--gradient-seven:radial-gradient(at 51% 4%,#f472b6 0px,transparent 50%);isolation:isolate}.workoutPanel:before,.workoutPanel:after,.workoutPanel>.edgeLight{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:28.8px;pointer-events:none;transition:opacity .18s ease-out}.workoutPanel:before{z-index:2;border:.8px solid transparent;background:linear-gradient(var(--card) 0 100%) padding-box,linear-gradient(#fff0 0,#fff0) border-box,var(--gradient-one) border-box,var(--gradient-two) border-box,var(--gradient-three) border-box,var(--gradient-four) border-box,var(--gradient-five) border-box,var(--gradient-six) border-box,var(--gradient-seven) border-box;opacity:clamp(0,calc(.72 * (var(--edge-proximity) - var(--color-sensitivity)) / (100 - var(--color-sensitivity))),.72);-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,black calc(var(--cone-spread) * 1%),transparent calc((var(--cone-spread) + 15) * 1%),transparent calc((100 - var(--cone-spread) - 15) * 1%),black calc((100 - var(--cone-spread)) * 1%));mask-image:conic-gradient(from var(--cursor-angle) at center,black calc(var(--cone-spread) * 1%),transparent calc((var(--cone-spread) + 15) * 1%),transparent calc((100 - var(--cone-spread) - 15) * 1%),black calc((100 - var(--cone-spread)) * 1%))}.workoutPanel:after{z-index:1;border:.8px solid transparent;background:var(--gradient-one) padding-box,var(--gradient-two) padding-box,var(--gradient-three) padding-box,var(--gradient-four) padding-box,var(--gradient-five) padding-box,var(--gradient-six) padding-box,var(--gradient-seven) padding-box;opacity:clamp(0,calc(var(--fill-opacity) * (var(--edge-proximity) - var(--color-sensitivity)) / (100 - var(--color-sensitivity))),.18);mix-blend-mode:soft-light;-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,transparent 5%,black 15%,black 85%,transparent 95%);mask-image:conic-gradient(from var(--cursor-angle) at center,transparent 5%,black 15%,black 85%,transparent 95%)}.workoutPanel>.edgeLight{top:-19.2px;right:-19.2px;bottom:-19.2px;left:-19.2px;z-index:3;opacity:clamp(0,calc(.62 * (var(--edge-proximity) - var(--edge-sensitivity)) / (100 - var(--edge-sensitivity))),.62);mix-blend-mode:plus-lighter;-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,black 2.5%,transparent 10%,transparent 90%,black 97.5%);mask-image:conic-gradient(from var(--cursor-angle) at center,black 2.5%,transparent 10%,transparent 90%,black 97.5%)}.workoutPanel>.edgeLight:before{content:"";position:absolute;top:19.2px;right:19.2px;bottom:19.2px;left:19.2px;border-radius:28.8px;box-shadow:inset 0 0 0 .8px var(--glow-color-60),inset 0 0 2.4px 0 var(--glow-color-40),inset 0 0 6.4px 0 var(--glow-color-30),inset 0 0 12.8px 0 var(--glow-color-20),0 0 2.4px 0 var(--glow-color-40),0 0 6.4px 0 var(--glow-color-30),0 0 12.8px 0 var(--glow-color-20),0 0 22.4px 1.6px var(--glow-color-10)}.workoutPanel:not(.borderGlowActive):before,.workoutPanel:not(.borderGlowActive):after,.workoutPanel:not(.borderGlowActive)>.edgeLight{opacity:0;transition:opacity .35s ease-out}#app.light .workoutPanel{--glow-color:hsl(199deg 97% 48% / 100%);--glow-color-50:hsl(199deg 97% 48% / 50%);--glow-color-40:hsl(199deg 97% 48% / 40%);--glow-color-30:hsl(199deg 97% 48% / 30%);--glow-color-20:hsl(199deg 97% 48% / 20%);--glow-color-10:hsl(199deg 97% 48% / 10%)}.workoutPanel:not(.active):not(.addPanel) .panelExpanded{opacity:0;filter:blur(8px);pointer-events:none}.workoutPanel:not(.active):not(.addPanel) .panelCollapsed{opacity:1;filter:blur(0)}.workoutPanel.active .panelExpanded{opacity:1;filter:blur(0);pointer-events:auto}.workoutPanel.active .panelCollapsed{opacity:0;filter:blur(6.4px);pointer-events:none}.panelExpanded{position:relative;z-index:4;width:100%;height:100%;min-width:0;box-sizing:border-box;display:flex;flex-direction:column;justify-content:space-between;transition:opacity .22s ease,filter .22s ease}.panelCollapsed{position:absolute;top:0;right:0;bottom:0;left:0;z-index:4;display:flex;align-items:center;justify-content:center;opacity:0;filter:blur(6.4px);transition:opacity .22s ease,filter .22s ease}.panelCollapsedText{writing-mode:vertical-rl;transform:rotate(180deg);white-space:nowrap}.workoutPanelTop{display:flex;justify-content:space-between;align-items:flex-start;gap:22.4px;width:100%;min-width:0;box-sizing:border-box}.workoutPanelActions{display:flex;gap:22.4px;flex-wrap:wrap;align-items:center;justify-content:flex-end;margin-left:auto}.startWorkoutBtn{background:var(--primary)!important;color:#090909!important}.startWorkoutBtn:hover{filter:brightness(1.04)}.addPanelPlus{position:relative;z-index:4;font-size:27.2px;line-height:1}.addPanelLabel{position:absolute;z-index:4;bottom:16px;writing-mode:vertical-rl;transform:rotate(180deg);color:var(--muted)}@media (max-height:820px) and (min-width:621px){.modalStatic{padding:17.6px 22.4px}.timeTile{min-height:124.8px}}@media (max-width:900px){.weekCopy{white-space:normal}.workoutGallery{overflow-x:auto;scroll-snap-type:x mandatory;padding-bottom:3.2px}.workoutPanel,.workoutPanel.active{height:288px;flex:0 0 min(68.8vw,544px);min-width:min(68.8vw,544px);scroll-snap-align:start}.workoutPanel.addPanel{flex-basis:80px;min-width:80px}.panelCollapsed{display:none}}.moveActions{display:flex;gap:22.4px;flex-wrap:wrap}.energyFloat{padding:22.4px;background:transparent;border:0}.energyScale{display:grid;grid-template-columns:repeat(6,minmax(0,1fr));gap:9.6px;margin-top:17.6px}.energyBtn{--feeling-color:#8f8f8f;--feeling-glow:rgba(255,255,255,.14);position:relative;isolation:isolate;overflow:hidden;width:100%;min-height:43.2px;padding:0 9.6px;white-space:nowrap;border-radius:12.8px;background:var(--raised);border:.32px solid var(--line);color:var(--text);cursor:pointer;transition:color .18s ease,border-color .18s ease,background .18s ease}.energyBtn>span{position:relative;z-index:2}.energyBtn:before{content:"";position:absolute;top:-18%;right:-18%;bottom:-18%;left:-18%;z-index:-2;opacity:0;background:radial-gradient(ellipse at var(--feel-x,50%) var(--feel-y,50%),color-mix(in srgb,var(--feeling-color) 88%,transparent) 0%,color-mix(in srgb,var(--feeling-color) 54%,transparent) 34%,transparent 72%);transform:scale(.82) skew(-3deg);filter:saturate(1.08) blur(.8px);transition:opacity .18s ease,transform .28s cubic-bezier(.2,.8,.2,1)}.energyBtn:after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;z-index:-1;opacity:0;pointer-events:none;background:repeating-linear-gradient(to bottom,rgba(255,255,255,.07) 0,rgba(255,255,255,.07) .8px,transparent .8px,transparent 3.2px),linear-gradient(90deg,transparent 0%,color-mix(in srgb,var(--feeling-color) 34%,transparent) var(--feel-x,50%),transparent 100%);mix-blend-mode:screen}.energyBtn:hover:before,.energyBtn:focus-visible:before,.energyBtn.selected:before{opacity:.92;transform:translate(var(--feel-shift-x,0px),var(--feel-shift-y,0px)) scale(1.08) skew(2deg);animation:feelingWarp 1.45s ease-in-out infinite alternate}.energyBtn:hover:after,.energyBtn:focus-visible:after,.energyBtn.selected:after{opacity:.55;animation:feelingScan .9s linear infinite}.energyBtn:hover,.energyBtn:focus-visible,.energyBtn.selected{background:color-mix(in srgb,var(--feeling-color) 42%,#171717);border-color:color-mix(in srgb,var(--feeling-color) 72%,#ffffff 10%);color:#f4f4f4}.energyBtn.selected{box-shadow:inset 0 0 0 .8px color-mix(in srgb,var(--feeling-color) 58%,transparent),0 0 14.4px color-mix(in srgb,var(--feeling-color) 24%,transparent)}.energyBtn[data-energy=Drained]{--feeling-color:#6E63A8}.energyBtn[data-energy=Low]{--feeling-color:#5878A8}.energyBtn[data-energy=Okay]{--feeling-color:#6F8B8A}.energyBtn[data-energy=Good]{--feeling-color:#5F9B72}.energyBtn[data-energy=Energised]{--feeling-color:#D5A53E}.energyBtn[data-energy=Great]{--feeling-color:#D56B54}@keyframes feelingWarp{0%{transform:scale(1.03) skew(-2deg) translate(-1.5%);filter:saturate(1.02) blur(.8px)}50%{transform:scale(1.12) skew(1deg) translate(1%);filter:saturate(1.22) blur(1.5px)}to{transform:scale(1.06) skew(3deg) translate(-.5%);filter:saturate(1.1) blur(.6px)}}@keyframes feelingScan{0%{background-position:0 0,-80% 0}to{background-position:0 8px,180% 0}}@media (prefers-reduced-motion: reduce){.energyBtn:before,.energyBtn:after{animation:none!important}}.energyHistory{display:grid;gap:6.4px;margin-top:9.6px}.energyLog{display:flex;justify-content:space-between;gap:9.6px;padding:8px 9.6px;border-radius:16px;background:var(--tile)}.energyLog span:last-child{color:var(--muted)}.tempoExperiment{margin-top:14.4px;padding-top:16px;border-top:.32px solid var(--line)}.tempoExperimentHead{display:flex;justify-content:space-between;align-items:flex-start;gap:16px;margin-bottom:12.8px}.tempoEstimate{white-space:nowrap}.tempoQuad{position:relative;width:min(288px,100%);aspect-ratio:1/1;border-radius:28.8px;background:#ffffff06;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);overflow:hidden;touch-action:none;cursor:crosshair}.tempoCross{position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none;background:linear-gradient(to right,transparent calc(50% - .4px),rgba(255,255,255,.12) 50%,transparent calc(50% + .4px)),linear-gradient(to bottom,transparent calc(50% - .4px),rgba(255,255,255,.12) 50%,transparent calc(50% + .4px))}.tempoDot{position:absolute;left:50%;top:50%;width:17.6px;height:17.6px;border-radius:50%;background:var(--text);transform:translate(-50%,-50%);pointer-events:none;box-shadow:0 0 0 4.8px #ffffff12}.tempoPole{position:absolute;pointer-events:none;color:var(--muted)}.tempoFast{top:9.6px;left:50%;transform:translate(-50%)}.tempoSlow{bottom:9.6px;left:50%;transform:translate(-50%)}.tempoHard{right:9.6px;top:50%;transform:translateY(-50%)}.tempoLow{left:9.6px;top:50%;transform:translateY(-50%)}.tempoReadout{margin-top:9.6px;color:var(--muted)}.tempoRevealRow{margin-top:11.2px}.tempoRevealBtn{color:var(--muted);text-decoration-color:var(--muted)}.editTempoExperiment{margin-top:11.2px}.editTempoExperiment[hidden]{display:none}.testingZone{position:relative;overflow:hidden;border-radius:22.4px;background:#202226;border:.8px solid #4a4f58;box-shadow:none;--text:#d6d9df;--soft:#c7ccd5;--muted:#9ea5b0;--line:#4a4f58;--lineb:#4a4f58;--field-line:#4a4f58;color:var(--text)}.testingZoneInner{position:relative;padding:19.2px;background:linear-gradient(rgba(176,186,199,.045) .8px,transparent .8px),linear-gradient(90deg,rgba(176,186,199,.045) .8px,transparent .8px),#202226;background-size:16px 16px}.testingZoneTitleBlock{max-width:608px;margin-bottom:19.2px}.testingZoneTitleRow{display:flex;justify-content:space-between;align-items:center;gap:16px}.testingZoneTitleRow strong{color:#d6d9df}.testingZone .tempoEstimate{color:#aeb4bf}.testingZoneExplanation{margin:8px 0 0;color:#9ea5b0;text-align:left}.testingZoneLayout{display:grid;grid-template-columns:minmax(224px,288px) minmax(0,1fr);grid-template-areas:"controller feedback";gap:25.6px;align-items:start}.testingFeedbackForm{grid-area:feedback;display:grid;gap:14.4px;min-width:0;padding:16px;border:.32px solid var(--line);border-radius:16px;background:#252525}.testingFeedbackHeading{color:#d6d9df}.testingFeedbackField{display:grid;gap:6.4px;color:#9ea5b0}.testingFeedbackField select,.testingFeedbackField textarea{width:100%;border:.32px solid var(--line);background:#171717;color:#d6d9df;border-radius:11.2px;padding:8px 9.6px;font:inherit}.testingFeedbackField textarea{resize:vertical;min-height:65.6px}.testingRating{display:grid;grid-template-columns:repeat(5,1fr);gap:4.8px}.testingRating button{min-height:30.4px;border-radius:9.6px;border:.32px solid var(--line);background:#171717;color:#c7ccd5;cursor:pointer}.testingRating button.selected{border-color:#c7ccd5;background:#343434}.testingFeedbackSubmit{justify-self:start;min-height:33.6px;padding:0 12.8px;border-radius:11.2px;border:0;background:#ffffffe0;color:#111;cursor:pointer}.testingZoneControllerWrap{grid-area:controller;display:flex;flex-direction:column;align-items:center;justify-content:flex-start}.tempoQuadFrame{width:min(256px,100%);aspect-ratio:1/1;padding:0;background:linear-gradient(rgba(176,186,199,.075) .8px,transparent .8px),linear-gradient(90deg,rgba(176,186,199,.075) .8px,transparent .8px),#202226;background-size:16px 16px,16px 16px,auto;border-radius:16px}.testingZone .tempoQuad{width:100%;height:100%;border-radius:16px;background:#202226;border:.8px solid #5a606a;box-shadow:none}.testingZone .tempoCross{background:linear-gradient(to right,transparent calc(50% - .4px),rgba(176,186,199,.2) 50%,transparent calc(50% + .4px)),linear-gradient(to bottom,transparent calc(50% - .4px),rgba(176,186,199,.2) 50%,transparent calc(50% + .4px))}.testingZone .tempoDot{width:14.4px;height:14.4px;background:transparent;border:.8px solid #c4cad4;box-shadow:0 0 0 3.2px #c4cad40d}.testingZone .tempoPole{color:#8e96a2}.testingZone .tempoReadout{width:min(256px,100%);color:#9ea5b0;text-align:center;margin-top:9.6px}.testingZone button,.testingZone input,.testingZone select,.testingZone textarea{transition:opacity .14s ease,border-color .14s ease,color .14s ease,background .14s ease}.testingZone button:hover,.testingZone button:focus-visible{filter:none;opacity:.88}@media (max-width:900px){.testingZoneLayout{grid-template-columns:1fr;grid-template-areas:"controller" "feedback"}}.activityHeader{display:flex;align-items:center;gap:11.2px;margin-bottom:16px}.activityIcon{width:35.2px;height:35.2px;border-radius:13.6px;background:var(--icon-bg);display:grid;place-items:center;font-size:16px}.activityRows{display:grid;gap:9.6px}.activityRow{display:grid;grid-template-columns:43.2px minmax(0,1fr);align-items:center;gap:11.2px;background:var(--tile-2);border-radius:24px;padding:12px 14px}.activityRowIcon{width:43.2px;height:43.2px;border-radius:16px;background:var(--icon-bg);display:grid;place-items:center;font-size:16px}.activityRowMeta{color:var(--soft);margin-top:2.4px}.toast{position:absolute;right:20.8px;top:20.8px;z-index:60;background:var(--bright);color:var(--on-bright);border-radius:799.2px;padding:8.8px 12.8px;opacity:0;transform:translateY(-6.4px);pointer-events:none;transition:opacity .18s ease,transform .18s ease}.toast.show{opacity:1;transform:none}.weekHero{display:block}.weekCopy{color:var(--muted);margin-top:9.6px;max-width:none;white-space:nowrap}.weekChips{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:8px;margin-top:19.2px}.weekChip{background:var(--tile-2);border-radius:12.8px;min-height:60.8px;padding:9.6px 11.2px;display:flex;flex-direction:column;justify-content:space-between;gap:6.4px}.weekChipTop{display:flex;justify-content:space-between;align-items:center;gap:6.4px}.weekChipMeta{color:var(--muted)}.weekTick{font-size:11.2px;font-weight:800;line-height:1}.weekChip.total{background:var(--card2)}.workoutSurface{position:relative;overflow:hidden;isolation:isolate}.workoutContent{position:relative;z-index:2}.pixelTrailCanvas{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;z-index:1;pointer-events:none}#app.light .pixelTrailCanvas{opacity:.46}.sessionHead{display:flex;justify-content:space-between;align-items:flex-start;gap:16px}.sessionActions{display:flex;gap:22.4px;align-items:center;flex-wrap:wrap;justify-content:flex-end}.holdEnd{position:relative;overflow:hidden;min-width:110.4px;min-height:41.6px;padding:0 16px;border-radius:799.2px;border:.32px solid var(--line);background:var(--control);text-decoration:none;user-select:none;-webkit-user-select:none;touch-action:none}.holdEndFill{position:absolute;inset:0 auto 0 0;width:0;background:var(--bright);pointer-events:none}.holdEndLabel{position:relative;z-index:1;mix-blend-mode:difference;color:#fff}.holdEnd.holding{border-color:var(--muted)}.exerciseTitle{margin-top:4.8px;color:var(--accent-text)}.meta{color:var(--muted);margin-top:4.8px}.progress{height:46.4px;padding:0;background:transparent;border-radius:17.6px;display:flex;gap:3.2px;margin-top:19.2px;overflow:hidden}.progressSegment{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:0;padding:0;display:block;flex:1;min-width:0;background:var(--segment);border-radius:17.6px;position:relative;overflow:hidden;cursor:default}.progressSegment:after{content:"";position:absolute;inset:0 auto 0 0;width:0;background:var(--segment-fill);transition:width .2s linear}.progressSegment.done{background:transparent;opacity:0;pointer-events:none}.progressSegment.done:after{display:none}.progressSegment.active:after{width:var(--segment-progress,0%)}#app.resting .progressSegment:not(.done):not(.active),#app.paused .progressSegment:not(.done):not(.active){background:#fff}.progressSegment.rewindable{cursor:pointer}.progressSegment.rewindable:hover{filter:brightness(1.08)}.progressSegment:focus-visible{outline:1.6px solid var(--primary);outline-offset:-2.4px}.workGrid{display:grid;grid-template-columns:minmax(0,2fr) minmax(240px,1fr);gap:16px;margin-top:16px}.timerCard,.movementCard,.nextCard{position:relative;border-radius:28.8px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.timerCard{min-height:344px;background:var(--timer);overflow:hidden}.fill{position:absolute;inset:0 auto 0 0;width:100%;background:var(--timer-fill);transition:width .2s linear}.digits{position:absolute;top:0;right:0;bottom:0;left:0;display:flex;align-items:center;justify-content:center;font-size:clamp(152px,22.4vw,312px);font-weight:850;letter-spacing:-.11em;color:#fff;mix-blend-mode:difference;font-variant-numeric:tabular-nums}.movementCard{background:var(--stage);min-height:344px;display:grid;place-items:center;padding:22.4px}.movementMark{font-size:16px;font-weight:760;color:var(--soft);text-align:center}.movementCard{overflow:hidden}.movementRippleCanvas{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;z-index:0}.movementMark{position:relative;z-index:2}.nextCard{background:var(--card);padding:22.4px;display:flex;justify-content:space-between;align-items:center;gap:16px;min-height:116.8px}.nextIcon{width:52.8px;height:52.8px;border-radius:19.2px;background:var(--icon-bg);display:grid;place-items:center;font-size:20.8px;flex:0 0 auto}.sectionLabel{margin:0 0 8px 22.4px}.moveSection{grid-column:span 12}.moveSection .workoutGallery{width:100%}.nextWrap{margin-top:16px}.nextLabel{margin:0 0 8px 22.4px}.nextCard{background:var(--card);padding:22.4px;display:flex;justify-content:space-between;align-items:center;gap:22.4px;min-height:86.4px;border-radius:28.8px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.nextMain{display:flex;align-items:center;gap:14.4px;min-width:0}.nextIcon{width:43.2px;height:43.2px;border-radius:12.8px;background:var(--icon-bg);display:grid;place-items:center;font-size:16px;flex:0 0 auto}.sessionControlRow{display:flex;justify-content:flex-end;gap:22.4px;align-items:center;margin-top:16px}.nextActions{display:flex;gap:22.4px;align-items:center;flex:0 0 auto}.skipBtn{min-width:120px;min-height:41.6px;padding:0 14.4px;border:.8px solid var(--line);background:transparent;color:var(--text);text-decoration:none}.pause{min-width:120px;min-height:41.6px;padding:0 14.4px}#app.light .nextIcon{background:#ffe6ef;color:#bd4b7a!important}.upcomingList{display:grid;gap:9.6px;margin-top:9.6px}.upcomingCard{--future-opacity:1;display:flex;align-items:center;justify-content:space-between;gap:22.4px;min-height:86.4px;padding:22.4px;border-radius:28.8px;background:var(--card);border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);opacity:var(--future-opacity);transition:opacity .22s ease}.upcomingCard:nth-child(-n+3){--future-opacity:1}.upcomingCard:nth-child(4){--future-opacity:.72}.upcomingCard:nth-child(5){--future-opacity:.48}.upcomingCard:nth-child(6){--future-opacity:.3}.upcomingCard:nth-child(n+7){--future-opacity:.16}.upcomingCard.sessionHidden{--future-opacity:.24!important;filter:saturate(.15)}.upcomingCard.sessionHidden .upcomingName{text-decoration:line-through}.upcomingCard.sessionHidden .upcomingIcon{opacity:.45}.upcomingCard.sessionHidden .upcomingMeta{opacity:.55}.upcomingInfo{display:flex;align-items:center;gap:14.4px;min-width:0}.upcomingIcon{width:43.2px;height:43.2px;flex:0 0 auto;border-radius:12.8px;background:var(--icon-bg);display:grid;place-items:center;font-size:16px}.upcomingMeta{color:var(--muted);margin-top:4px}.skipSessionBtn{flex:0 0 auto;min-height:41.6px;padding:0 14.4px;border:.8px solid var(--line);background:transparent;color:var(--text)}#app.light .upcomingIcon{background:var(--primary-tint);color:var(--primary-ink)!important}@media (max-width:900px){.weekCopy{white-space:normal}.nextCard{align-items:flex-start;flex-direction:column}.sessionControlRow{width:100%}.skipBtn,.pause{flex:1;min-width:0}.upcomingCard{align-items:flex-start;flex-direction:column}.skipSessionBtn{width:100%}}.countdown{display:none;position:fixed;top:0;right:0;bottom:0;left:0;width:100vw;height:100dvh;background:var(--page);z-index:300;align-items:center;justify-content:center;flex-direction:column;text-align:center;overflow:hidden}.countdown.active{display:flex}.pixelCanvas{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;display:block;z-index:1}.countdown:before{content:"";position:absolute;top:0;right:0;bottom:0;left:0;background:radial-gradient(circle at center,color-mix(in srgb,var(--primary) 16%,transparent),transparent 58%);pointer-events:none}.countNum{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);z-index:3}.countNum{font-size:clamp(144px,25.6vw,344px);font-weight:850;line-height:.75;letter-spacing:-.1em}.modalBackdrop{display:none;position:fixed;top:0;right:0;bottom:0;left:0;width:100vw;height:100dvh;z-index:145;background:var(--scrim);padding:28px;box-sizing:border-box;align-items:center;justify-content:center}.modalBackdrop.open{display:flex}.modal{width:min(1184px,100%);height:100%;max-width:1184px;max-height:none;overflow:hidden;background:var(--modal);border-radius:28.8px;padding:0;display:flex;flex-direction:column;box-sizing:border-box;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.modalStatic{flex:0 0 auto;padding:22.4px;background:var(--modal);border-bottom:.32px solid var(--divider)}.modalHead{display:flex;justify-content:space-between;align-items:flex-start;gap:16px;margin-bottom:12.8px}.modalHeaderActions{display:flex;gap:22.4px;align-items:center;flex:0 0 auto}.modalHead h2{margin:2.4px 0 0}.editNameRow{display:grid;gap:6.4px;margin-bottom:11.2px}.editNameLabel{color:var(--muted)}.editNameInput{min-height:46.4px;border-radius:17.6px;border:.32px solid var(--field-line);background:var(--input);color:var(--text);padding:0 14.4px}.timeTiles{display:grid;grid-auto-flow:column;grid-auto-columns:minmax(0,1fr);gap:11.2px;margin-bottom:11.2px}.timeTile{background:var(--tile);min-height:148.8px;padding:16px;display:flex;flex-direction:column;justify-content:space-between}.timeHeader{display:flex;align-items:center;gap:14.4px}.timeIcon{width:46.4px;height:46.4px;border-radius:16px;background:var(--icon-bg);display:grid;place-items:center;flex:0 0 auto;font-size:17.6px;font-weight:760}.timeCopy{min-width:0}.timeValue{color:var(--soft);margin-top:5.6px}.rangeTrack{height:46.4px;border-radius:17.6px;background:var(--track);overflow:hidden;position:relative;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.rangeFill{position:absolute;inset:0 auto 0 0;background:var(--slider-fill);border-radius:17.6px 0 0 17.6px}.rangeInput{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;opacity:0;cursor:pointer}.exerciseScroller{min-height:0;overflow-y:auto;padding:3.2px 16px 17.6px 22.4px;border-top:.16px solid var(--divider);scrollbar-gutter:stable}.exerciseScroller::-webkit-scrollbar{width:6.4px}.exerciseScroller::-webkit-scrollbar-track{background:transparent}.exerciseScroller::-webkit-scrollbar-thumb{background:var(--scroll-thumb);border-radius:799.2px}.sectionTitle{text-transform:uppercase;color:var(--muted);margin:14.4px 0 8px}.moveList{display:grid;gap:8px}.moveRow{display:flex;justify-content:space-between;align-items:center;gap:22.4px;background:var(--row);border-radius:20.8px;padding:22.4px}.moveRow.hidden{opacity:.46}.moveRow.hidden .moveItemName{text-decoration:line-through}.moveMeta{color:var(--muted);margin-top:4px}.hideBtn{border-radius:799.2px;min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text)}.removeBtn{position:relative;overflow:hidden;border-radius:799.2px;min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);cursor:pointer}.removeFill{position:absolute;inset:0 auto 0 0;width:0;background:var(--danger-fill);pointer-events:none;transition:width 0s linear}.addRow{display:grid;grid-template-columns:1fr auto;gap:8px;margin-top:14.4px}.addInput{min-height:41.6px;border-radius:799.2px;border:.32px solid var(--field-line);background:var(--input);color:var(--text);padding:0 14.4px}.addBtn{border-radius:799.2px;min-height:41.6px;padding:0 14.4px;border:0;background:var(--bright);color:var(--on-bright)}.routineSummary{margin-top:14.4px;background:var(--sunken);border-radius:20.8px;padding:12.8px 14.4px;color:var(--soft)}.settingsHeader{display:flex;align-items:center;gap:12.8px;margin-bottom:24px}.back{width:46.4px;padding:0;font-size:24px}.tabs.rubberTabs{position:relative;display:inline-flex;gap:0;padding:3.2px;margin-bottom:17.6px;border-radius:12.8px;background:var(--control);border:.32px solid var(--line);overflow:hidden}.rubberIndicator{position:absolute;top:3.2px;left:3.2px;height:calc(100% - 6.4px);width:0;border-radius:12.8px;background:var(--bright);transition:left .34s cubic-bezier(.2,1.35,.4,1),width .34s cubic-bezier(.2,1.35,.4,1),transform .18s ease;transform-origin:center;z-index:0}.tabs.rubberTabs .tab{position:relative;z-index:1;min-height:41.6px;padding:0 16px;border:0;background:transparent;color:var(--text)}.tabs.rubberTabs .tab.active{color:var(--on-bright)}.settingsPane{display:none}.settingsPane.active{display:block}.integrationList,.toggleList{display:grid;gap:9.6px}.integration,.toggleRow{display:flex;justify-content:space-between;align-items:center;gap:14.4px;background:var(--raised);border-radius:22.4px;padding:14.4px 16px}.status{color:var(--muted);margin-top:3.2px}.note{color:var(--muted);line-height:1.5;max-width:688px}.switch{position:relative;width:46.4px;height:27.2px;border-radius:799.2px;background:var(--switch-off);border:.32px solid var(--field-line);flex:0 0 auto;cursor:pointer}.switch:after{content:"";position:absolute;width:20.8px;height:20.8px;border-radius:799.2px;top:2.4px;left:2.4px;background:var(--knob-off);transition:left .18s ease}.switch.on{background:var(--bright)}.switch.on:after{left:22.4px;background:var(--on-bright)}.themeChoice{display:flex;gap:9.6px;flex-wrap:wrap;align-items:center;margin:0}.themeBtn{min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);cursor:pointer}.themeBtn.active{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.settingsSelect{min-width:96px;min-height:32px;padding:0 27.2px 0 9.6px;border-radius:12.8px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);font:inherit}.motionControlRow{align-items:center}.motionRangeWrap{display:flex;align-items:center;justify-content:flex-end;gap:9.6px;min-width:184px}.motionRangeWrap input{width:128px}.motionRangeWrap span{color:var(--muted);min-width:51.2px;text-align:right}.dangerText{color:var(--danger)}.confirmBackdrop{display:none;position:fixed;top:0;right:0;bottom:0;left:0;z-index:80;padding:22.4px;background:var(--scrim);align-items:center;justify-content:center}.confirmBackdrop.open{display:flex}.confirmCard{width:min(448px,100%);background:var(--card);border-radius:28.8px;padding:22.4px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.confirmActions{display:flex;justify-content:flex-end;align-items:center;gap:22.4px;margin-top:22.4px}.holdDelete{position:relative;overflow:hidden;min-width:88px;min-height:41.6px;padding:0 17.6px;border:.8px solid var(--danger-line);border-radius:12.8px;background:var(--danger-bg);color:var(--text);cursor:pointer}.holdDeleteFill{position:absolute;inset:0 auto 0 0;width:0;background:var(--danger-fill);pointer-events:none}.holdDeleteLabel{position:relative;z-index:1;color:var(--text)}.holdDelete.holding .holdDeleteLabel,.removeBtn.holding .removeLabel{color:#fff}.bottomNav{position:sticky;bottom:22.4px;display:flex;gap:22.4px;z-index:100;width:max-content;margin:-65.6px 0 0 22.4px}.navBtn{width:43.2px;height:43.2px;padding:0;border-radius:16px;background:var(--control);border:.32px solid var(--line);color:var(--text)}.navBtn.active{background:var(--bright);color:var(--on-bright)}@media (max-width:900px){.weekCopy{white-space:normal}.moveOption,.addMoveCard{flex-basis:144px}.weekHero{display:block}.grid{grid-template-columns:1fr}.moveSection,.activityCard,.weekly,.energySection{grid-column:auto}.workGrid{grid-template-columns:1fr}.timerCard,.movementCard{min-height:256px}.weekChips{grid-template-columns:repeat(4,minmax(0,1fr))}.timeTiles{grid-auto-flow:row;grid-template-columns:1fr}}@media (max-width:620px){.modal{width:100%;height:100%;max-height:100%}#app{padding:0}.shell{border-radius:0}.view{padding:14.4px 14.4px 75.2px}.card,.timerCard,.movementCard,.nextCard,.modal,.tile{border-radius:24px}.timerCard{min-height:224px}.digits{font-size:144px}.weekChips{grid-template-columns:repeat(2,minmax(0,1fr))}.modalBackdrop{padding:9.6px}.modal{height:100%}.modalStatic{padding:14.4px}.exerciseScroller{padding:3.2px 9.6px 14.4px 14.4px}.addRow{grid-template-columns:1fr}}button,.primary,.tab,.back,.navBtn,.themeBtn,.energyBtn,.hideBtn,.addBtn,.removeBtn,.skipBtn,.holdEnd,.switch,.editNameInput,.addInput,.rangeTrack,.progress,.progressSegment{border-radius:12px!important}.card,.panel,.tile,.workoutPanel,.timerCard,.movementCard,.nextCard,.modal{border-radius:36px}.movementCreatorLaunch{display:flex;gap:9.6px;align-items:center;margin:3.2px 0 14.4px}.movementCreatorOpen,.restAddBtn{min-height:35.2px;padding:0 12.8px;border-radius:12.8px;cursor:pointer}.movementCreatorOpen{border:0;background:var(--bright);color:var(--on-bright)}.restAddBtn{border:.32px solid var(--field-line);background:var(--control-2);color:var(--text)}.movementCreator{position:relative;margin:0 0 14.4px;padding:19.2px 22.4px;border-radius:22.4px;background:var(--card);border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.movementCreator[hidden]{display:none}.movementCreatorHead{display:flex;align-items:center;justify-content:space-between;gap:16px;margin-bottom:17.6px}.movementCreatorHead h3{margin:0}.movementCreatorClose{position:static}.movementCreatorFields{display:grid;grid-template-columns:minmax(0,1.45fr) minmax(0,.85fr);gap:16px 19.2px}.movementCreatorFields[hidden]{display:none!important}.movementCreatorFields>label{display:grid;gap:6.4px;min-width:0;color:var(--text)}.movementTimingRow{grid-column:1/-1;display:grid;grid-template-columns:minmax(240px,352px) minmax(208px,1fr) auto;gap:17.6px;align-items:end}.durationStack{display:grid;gap:6.4px;color:var(--text)}.creatorDurationRow{display:grid;grid-template-columns:minmax(96px,1fr) minmax(104px,1fr);gap:12.8px;align-items:center}.creatorNumber{width:100%;min-width:0}.creatorUnitSelect{min-height:41.6px;width:100%;padding:0 11.2px;border-radius:12.8px;border:.32px solid var(--field-line);background:var(--input);color:var(--text);font:inherit}.globalTimingToggle{display:flex!important;align-items:center;gap:8px!important;min-height:41.6px;cursor:pointer;color:var(--text)!important;white-space:nowrap}.globalTimingToggle input{position:absolute;opacity:0;pointer-events:none}.toggleTrack{position:relative;width:38.4px;height:22.4px;border-radius:799.2px;background:var(--switch-off);border:.32px solid var(--field-line);flex:0 0 auto;transition:background .16s ease}.toggleThumb{position:absolute;width:17.6px;height:17.6px;top:1.6px;left:1.6px;border-radius:50%;background:var(--knob-off);transition:left .16s ease,background .16s ease}.globalTimingToggle input:checked+.toggleTrack{background:var(--bright)}.globalTimingToggle input:checked+.toggleTrack .toggleThumb{left:17.6px;background:var(--on-bright)}.toggleLabel{color:var(--soft)}.creatorAddButton{min-width:97.6px;min-height:41.6px;align-self:end}@media (max-width:900px){.movementCreatorFields{grid-template-columns:1fr}.movementTimingRow{grid-column:auto;grid-template-columns:1fr;align-items:stretch}.globalTimingToggle{min-height:35.2px}.creatorAddButton{width:100%}}.moveRow.restItem{background:var(--row-rest)}.moveKindBadge{display:inline-flex;margin-left:6.4px;padding:2.4px 5.6px;border:.8px solid var(--field-line);border-radius:799.2px;color:var(--muted);vertical-align:middle}@media (max-width:900px){.movementCreatorFields,.movementCreatorFields.restFields{grid-template-columns:1fr;padding-right:0}.movementCreatorClose{position:static;margin-left:auto;display:block;margin-bottom:12.8px}}.createMoveOptions{margin:0 0 14.4px;padding:14.4px;border-radius:19.2px;background:var(--card2);border:.32px solid var(--line)}.createMoveOptions[hidden]{display:none}.createOptionLabel{text-transform:uppercase;color:var(--muted);margin-bottom:8px}.createPresetChoice{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}.createPresetBtn{min-height:60.8px;padding:11.2px 12.8px;border-radius:14.4px;border:.8px solid var(--field-line);background:transparent;color:var(--text);text-align:left;cursor:pointer}.createPresetBtn strong{display:block}.createPresetBtn span{display:block;color:var(--muted);margin-top:3.2px}.createPresetBtn.active{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.createPresetBtn.active span{color:var(--on-bright);opacity:.68}.createExtras{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px;margin-top:9.6px}.createExtraToggle{display:flex;align-items:flex-start;gap:8px;padding:9.6px 11.2px;border:.8px solid var(--field-line);border-radius:14.4px;cursor:pointer}.createExtraToggle input{margin-top:2.4px}.createExtraToggle span{display:grid;gap:2.4px}.createExtraToggle small{color:var(--muted)}.creatorUnitSelect{min-height:41.6px;padding:0 9.6px;border-radius:12.8px;border:.32px solid var(--field-line);background:var(--input);color:var(--text);font:inherit}.autoRestSummary{display:inline-flex;align-items:center;gap:6.4px;margin-left:6.4px;color:var(--muted)}@media (max-width:900px){.createPresetChoice,.createExtras{grid-template-columns:1fr}}.movementDurationField{display:grid;gap:6.4px}.movementTimingHead{display:flex;align-items:center;justify-content:space-between;gap:9.6px;color:var(--muted)}.globalTimingToggle{display:inline-flex!important;grid-template-columns:none!important;align-items:center;gap:5.6px!important;color:var(--text)!important;white-space:nowrap}.globalTimingToggle input{margin:0}.globalTimingValue{min-height:41.6px;display:flex;align-items:center;padding:0 11.2px;border-radius:12.8px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--muted)}.movementTypeBtn:disabled{opacity:.32;cursor:not-allowed}.createFlow{display:grid;gap:9.6px;padding:3.2px 0 8px}.createFlow[hidden]{display:none}.createStep{border-radius:22.4px;background:var(--tile);border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);overflow:hidden}.createStepHeader{width:100%;min-height:57.6px;padding:14.4px 17.6px;border:0;background:transparent;color:var(--text);display:flex;align-items:center;justify-content:space-between;gap:19.2px;text-align:left;cursor:pointer}.createStepHeader:disabled{cursor:not-allowed;opacity:.42}.createStepIdentity{display:flex;align-items:center;gap:9.6px}.createStepNumber{width:22.4px;height:22.4px;border-radius:799.2px;display:grid;place-items:center;border:.32px solid var(--line);color:var(--muted)}.createStepSummary{min-width:0;color:var(--muted);text-align:right}.createStepBody{display:none;padding:0 14.4px 14.4px}.createStep.active .createStepBody{display:block}.createStep.active .createStepHeader{border-bottom:.32px solid var(--divider)}.createStepSlot{display:grid;gap:11.2px}.createStepFooter{display:flex;justify-content:flex-end;margin-top:14.4px}.createStepFooter .primary:disabled{opacity:.35;cursor:not-allowed}.modal.createMode .movementTimingRow{display:none}.modal.createMode .movementCreator{margin-bottom:8px}.modal.createMode .movementCreatorFields{grid-template-columns:minmax(0,1.4fr) minmax(0,1fr)}.modal.createMode .movementCreatorFields.restFields{grid-template-columns:1fr}.modal.createMode .movementCreatorActions{margin-top:14.4px}.modal.createMode .movementCreatorLaunch{margin-top:0}.modal.createMode .sectionTitle{margin-top:9.6px}.modal.createMode .modalStatic{padding-bottom:14.4px}.modal:not(.createMode) .createFlow{display:none!important}#app.resting .movementCard{background:#ffffff0e}#app.resting .movementRippleCanvas{opacity:1}#app.light.resting .movementCard{background:#ffffff38}.nextCard .skipSessionBtn{margin-left:auto}.modal:not(.createMode) .movementCreatorLaunch{margin-top:25.6px}.testingFeedbackThanks{grid-area:feedback;min-height:176px;padding:19.2px;border:.32px solid var(--line);border-radius:16px;background:#252525;display:flex;flex-direction:column;justify-content:center;align-items:flex-start;gap:6.4px}.testingFeedbackThanks[hidden]{display:none}.testingFeedbackThanks strong{color:#f0f0f0}.testingFeedbackThanks p{margin:0;color:#9ea5b0}.testingFeedbackThanks a{color:#d6d9df;text-underline-offset:2.4px}:host(:fullscreen){overflow:auto;width:100vw;height:100vh}.entitySelect{max-width:min(256px,36.8vw);text-overflow:ellipsis}.integration .status code{padding:.8px 4.8px;border-radius:4.8px;background:var(--wash-2)}.integration .pill[disabled]{cursor:default;opacity:.7}#app :focus{outline:none}#app :focus-visible{outline:2.4px solid var(--primary);outline-offset:2.4px}#app .workoutPanel:focus-visible{outline-offset:-2.4px}@media (max-width:620px){.bottomNav{margin-left:14.4px}}.shell:has(.countdown.active) .bottomNav{visibility:hidden}@media (max-width:900px){.workoutPanel:not(.active):not(.addPanel) .panelExpanded{opacity:1;filter:none;pointer-events:auto}}.grid>*{min-width:0}.energyBtn[data-level="1"]{--feeling-color:#6E63A8}.energyBtn[data-level="2"]{--feeling-color:#5878A8}.energyBtn[data-level="3"]{--feeling-color:#6F8B8A}.energyBtn[data-level="4"]{--feeling-color:#5F9B72}.energyBtn[data-level="5"]{--feeling-color:#D5A53E}.energyBtn[data-level="6"]{--feeling-color:#D56B54}.checkinQuestion+.checkinQuestion{margin-top:28.8px}.checkinStatus{margin-top:17.6px;color:var(--muted)}.checkinStatus.done{color:var(--text)}.checkinStatus.done:before{content:"✓  "}.insightSection{grid-column:span 12;margin-top:16px}.insightCard{display:grid;gap:22.4px}.insightTop{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:22.4px;align-items:end}.insightStats{display:grid;grid-auto-flow:column;grid-auto-columns:minmax(104px,1fr);gap:8px}.insightBody{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1.3fr);gap:22.4px;align-items:end}.insightLines{display:grid;gap:9.6px}.insightLine.muted{color:var(--muted)}.dayStrip{display:grid;grid-template-columns:repeat(14,minmax(0,1fr));gap:4.8px;align-items:end}.day{display:grid;gap:6.4px;justify-items:center}.dayBars{position:relative;width:100%;height:96px;border-radius:9.6px;background:var(--wash);overflow:hidden}.stepBar,.moveBar{position:absolute;bottom:0;border-radius:8px}.stepBar{left:0;right:0;background:var(--wash-3)}.moveBar{left:22%;right:22%;background:var(--primary)}.day.today .dayBars{box-shadow:inset 0 0 0 .8px var(--today-ring)}.dayDots{display:flex;gap:2.4px}.dayDot{width:6.4px;height:6.4px;border-radius:50%}.dayDot.empty{box-shadow:inset 0 0 0 .8px var(--dot-empty)}.dayLabel{color:var(--muted)}.day.today .dayLabel{color:var(--text)}.chartLegend{display:flex;gap:14.4px;flex-wrap:wrap;margin-top:11.2px;color:var(--muted)}.chartLegend i{display:inline-block;width:8px;height:8px;border-radius:2.4px;margin-right:4.8px;vertical-align:-.8px}.lgMove{background:var(--primary)}.lgSteps{background:var(--wash-4)}.lgDot{background:linear-gradient(90deg,#5f9b72 50%,#d5a53e 50%);border-radius:50%!important}@media (max-width:900px){.insightSection{grid-column:auto}.insightTop,.insightBody{grid-template-columns:1fr}.insightStats{grid-auto-flow:row;grid-template-columns:repeat(auto-fit,minmax(96px,1fr))}.dayBars{height:72px}}@media (max-width:900px){.energyScale{grid-template-columns:repeat(3,minmax(0,1fr))}}.checkinBackdrop{z-index:160}.checkinCard{width:min(576px,100%)}.checkinCard .sub{margin-top:8px}.checkinSliders{display:grid;gap:11.2px;margin-top:19.2px}.checkinTile{min-height:0;gap:14.4px}.scaleEnds{display:flex;justify-content:space-between;margin-top:6.4px;color:var(--muted)}.rangeTrack:focus-within{outline:2.4px solid var(--primary);outline-offset:2.4px}.checkinTab{position:fixed;right:0;top:50%;transform:translateY(-50%);z-index:120;display:flex;flex-direction:column;align-items:center;gap:9.6px;padding:14.4px 9.6px;border:.32px solid var(--line);border-right:0;border-radius:12.8px 0 0 12.8px!important;background:var(--control);color:var(--text);cursor:pointer;transition:padding .18s ease,background .18s ease}.checkinTab:hover{padding-right:12.8px}.checkinTabIcon{font-size:16px;line-height:1}.checkinTabLabel{writing-mode:vertical-rl;transform:rotate(180deg)}.checkinBadge{position:absolute;top:8px;left:8px;width:8px;height:8px;border-radius:50%;background:var(--secondary);box-shadow:0 0 0 2.4px var(--control),0 0 9.6px color-mix(in srgb,var(--secondary) 70%,transparent);animation:checkinPulse 1.8s ease-in-out infinite}.checkinTab.due{background:var(--checkin-due)}@keyframes checkinPulse{50%{box-shadow:0 0 0 3px var(--control),0 0 2px color-mix(in srgb,var(--secondary) 20%,transparent)}}@media (prefers-reduced-motion: reduce){.checkinBadge{animation:none}}.shell:has(#workoutView.active) .checkinTab,.shell:has(.countdown.active) .checkinTab{display:none}#app.light .checkinBadge{background:var(--primary);box-shadow:0 0 0 2.4px #fff,0 0 9.6px color-mix(in srgb,var(--primary) 50%,transparent)}.feelSection{grid-column:span 12;margin-top:16px}.feelCard{display:grid;gap:19.2px}.feelTop{display:grid;grid-template-columns:minmax(0,1fr) minmax(208px,336px);gap:22.4px;align-items:end}.feelTotals{display:grid;gap:9.6px}.feelCount{color:var(--muted)}.feelDays{display:grid;grid-template-columns:repeat(7,minmax(0,1fr));gap:8px}.feelDay{min-height:0;gap:9.6px}.feelDay.future{opacity:.4}.feelDay.today{box-shadow:inset 0 0 0 .8px var(--today-ring)}.feelDots{font-size:6.4px;letter-spacing:1.6px;color:var(--muted)}.feelMeter{display:grid;gap:4.8px}.feelMeterTop{display:flex;justify-content:space-between;gap:6.4px;color:var(--muted)}.feelMeterTop span:last-child{color:var(--text)}.feelTrack{height:6.4px;border-radius:799.2px;background:var(--wash-2);overflow:hidden}.feelTrack span{display:block;height:100%;border-radius:799.2px}.feelTotals .feelTrack{height:9.6px}@media (max-width:900px){.feelSection{grid-column:auto}.feelTop{grid-template-columns:1fr}.feelDays{grid-template-columns:repeat(4,minmax(0,1fr))}}@media (max-width:620px){.feelDays{grid-template-columns:repeat(2,minmax(0,1fr))}}.checkinTile .timeHeader{align-items:center}.checkinTab:not(.due){opacity:.6}.checkinTab:not(.due):hover{opacity:1}.activityCard{grid-column:span 3}.weekly{grid-column:span 9;cursor:pointer;transition:border-color .18s ease,background .18s ease}.weekly:hover{border-color:var(--border-hover)}.weeklyExpand{position:absolute;top:19.2px;right:22.4px;font-size:16px;color:var(--muted);transition:transform .18s ease}.weekly:hover .weeklyExpand{transform:scale(1.15)}.weekChips{grid-template-columns:repeat(8,minmax(0,1fr))}.weekChipBottom{display:flex;justify-content:space-between;align-items:flex-end;gap:4.8px}.face{width:20.8px;height:20.8px;flex:0 0 auto;display:block}.face.empty circle{fill:none;stroke:var(--dot-empty);stroke-width:1.2;stroke-dasharray:2.5 2.5}.weekChip.total .face{width:24px;height:24px}.insightBackdrop{z-index:155}.insightModalCard{width:min(992px,100%);max-height:calc(100dvh - 56px);overflow:auto}.insightModalHead{display:flex;justify-content:space-between;align-items:center;margin-bottom:9.6px}.insightModalHead .sectionLabel{margin:0}.insightModalCard .dayBars{height:160px}.insightBody.chartOnly{grid-template-columns:1fr}.dayFace .face{width:17.6px;height:17.6px}.chartLegend span{display:inline-flex;align-items:center}.chartLegend .face{width:9.6px;height:9.6px;margin-right:4.8px}@media (max-width:1200px){.activityCard{grid-column:span 4}.weekly{grid-column:span 8}.weekChips{grid-template-columns:repeat(4,minmax(0,1fr))}}@media (max-width:900px){.activityCard,.weekly{grid-column:auto}.insightModalCard .dayBars{height:88px}.dayFace .face{width:12.8px;height:12.8px}}.weekChipTime{white-space:nowrap}.insightCard{grid-column:span 9;align-content:start}.insightEyebrow{margin-bottom:-11.2px}.insightStats{grid-auto-columns:minmax(88px,1fr)}.insightCard .dayBars{height:120px}@media (max-width:1200px){.insightCard{grid-column:span 8}.insightTop{grid-template-columns:1fr}}@media (max-width:900px){.insightCard{grid-column:auto}.insightCard .dayBars{height:80px}}.helpBackdrop{z-index:170}.helpCard .helpSteps,.helpCard .helpNote{max-width:688px}.helpHead{display:flex;justify-content:space-between;align-items:flex-start;gap:16px}.helpCard .note{margin:0}.helpSteps{margin:19.2px 0 0;padding:0;list-style:none;counter-reset:help;display:grid;gap:9.6px}.helpSteps li{counter-increment:help;display:grid;gap:4.8px;position:relative;padding:14.4px 16px 14.4px 52.8px;border-radius:20.8px;background:var(--tile);color:var(--muted)}.helpSteps li:before{content:counter(help);position:absolute;left:14.4px;top:12.8px;width:25.6px;height:25.6px;border-radius:9.6px;display:grid;place-items:center;background:var(--icon-bg);color:var(--text)}.helpSteps strong,.helpSteps b,.helpNote b{color:var(--text)}.helpAction{display:block;padding:8px 9.6px;border-radius:11.2px;background:var(--control-2);border:.32px solid var(--field-line);color:var(--text)}.helpCard code{padding:.8px 4.8px;border-radius:4.8px;background:var(--wash-2)}.helpNote{display:grid;gap:3.2px;margin-top:9.6px;padding:12.8px 16px;border-radius:17.6px;border:.32px solid var(--field-line);color:var(--muted)}.helpNote strong{color:var(--text)}.rowLabel{grid-column:1/-1;margin-top:16px;margin-bottom:-8px}.checkinTab{flex-direction:row;align-items:center;gap:0}.checkinTabMain{display:flex;flex-direction:column;align-items:center;gap:9.6px}.checkinPeek{display:grid;gap:3.2px;justify-items:start;white-space:nowrap;overflow:hidden;max-width:0;opacity:0;margin-right:0;transition:max-width .32s cubic-bezier(.2,1.2,.4,1),opacity .2s ease,margin-right .32s ease}.checkinTab.peek{padding-left:17.6px;opacity:1}.checkinTab.peek .checkinPeek{max-width:176px;opacity:1;margin-right:14.4px}.peekCountdown{font-size:24px;font-weight:800;letter-spacing:-.04em;line-height:1;font-variant-numeric:tabular-nums}.peekAt{color:var(--muted)}@media (prefers-reduced-motion: reduce){.checkinPeek{transition:none}}.activityRowMeta{color:var(--text);margin-top:1.6px;font-variant-numeric:tabular-nums}.feelTop{grid-template-columns:1fr}:host{--primary:#03A9F4;--secondary:#D0FF00;--primary-tint:color-mix(in srgb,var(--primary) 16%,white);--primary-ink:color-mix(in srgb,var(--primary) 75%,black);--font:Inter,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;--w-regular:400;--w-medium:500;--w-semibold:600;--w-bold:700;--w-heavy:800;--t-display:64px;--t-title:22px;--t-value:22px;--t-section:18px;--t-strong:16px;--t-body:14px;--t-caption:12px;--lh-display:1.05;--lh-title:1}@media (max-width:620px){:host{--t-display:46px;--t-title:20px;--t-value:20px;--t-section:16px;--t-strong:15px;--t-body:14px;--t-caption:11px;--lh-display:.92;--lh-title:1.05}}#app{font-family:var(--font);font-size:var(--t-body);font-weight:var(--w-regular);line-height:1.4}#app button,#app input,#app select,#app textarea{font-family:inherit}#app strong,#app b{font-weight:var(--w-bold)}.title,.workoutName,.exerciseTitle,.insightBig,.feelHeadline,.settingsTitle,.weekMetric{font-size:var(--t-display);font-weight:var(--w-heavy);line-height:var(--lh-display);letter-spacing:-.055em}.activityTitle,.confirmTitle,.sheetTitle,.modalHead h2,.paneTitle,.movementCreatorHead h3,.testingFeedbackThanks strong{font-size:var(--t-title);font-weight:var(--w-medium);font-style:italic;line-height:var(--lh-title);letter-spacing:-.03em}.paneTitle{margin:0 0 10px}.activityRowMeta,.nextName,.upcomingName,.editNameInput,.videoClock{font-size:var(--t-value);font-weight:var(--w-regular);line-height:1.15;letter-spacing:-.02em}.insightLine strong{font-weight:var(--w-bold)}.sectionLabel,.nextLabel{font-size:var(--t-section);font-weight:var(--w-regular);line-height:1.2;letter-spacing:-.01em}.activityRowName,.integration strong,.toggleRow strong,.setupSwitchRow strong,.timeLabel,.moveItemName,.weekChipTop strong,.weekChipTime,.panelCollapsedText,.activityCount,.metaType,.setupSummaryText strong,.sheetChoice strong,.kindChip,.helpSteps strong,.addGhost strong,.helpNote strong,.createStepIdentity strong,.createPresetBtn strong,.createExtraToggle strong,.testingZoneTitleRow strong,.testingFeedbackHeading,.tempoEstimate,.primary,.tab,.skipBtn,.skipSessionBtn,.hideBtn,.removeBtn,.addBtn,.themeBtn,.holdEnd,.holdDelete,.energyBtn,.movementCreatorOpen,.restAddBtn,.creatorAddButton,.testingFeedbackSubmit,.testingRating button,.toast,.checkinTabLabel{font-size:var(--t-strong);font-weight:var(--w-semibold);line-height:1.25;letter-spacing:-.01em}.sub,.meta,.note,.weekCopy,.timeValue,.addInput,.settingsSelect,.pill,.checkinStatus,.routineSummary,.helpSteps li,.helpNote,.createStepSummary,.insightLine{font-size:var(--t-body);font-weight:var(--w-regular);line-height:1.4;letter-spacing:0}.moveEditForm label>span,.addGhostText small,.setupSummaryText small,.setupSummaryAction,.sheetChoice small,.metaTable th,.metaSub,.eyebrow,#stepLabel,.sourceTag,.addPanelLabel,.status,.motionRangeWrap span,.moveMeta,.sectionTitle,.editNameLabel,.dayLabel,.scaleEnds,.peekAt,.upcomingMeta,.energyLog,.tempoPole,.tempoReadout,.tempoRevealBtn,.testingFeedbackField,.testingZoneExplanation,.testingFeedbackThanks p,.movementCreatorClose,.movementCreatorFields>label,.durationStack,.globalTimingToggle,.toggleLabel,.moveKindBadge,.createOptionLabel,.createPresetBtn span,.createExtraToggle small,.autoRestSummary,.fieldError,.movementTimingHead,.globalTimingValue,.createStepNumber,.weekChipMeta,.feelMeterTop,.feelCount,.chartLegend,#app code{font-size:var(--t-caption);font-weight:var(--w-regular);line-height:1.35;letter-spacing:0}.eyebrow,#stepLabel,.sectionTitle{letter-spacing:.1em}.globalTimingToggle{font-size:var(--t-caption)!important}.workoutGallery,.workoutPanel{height:340px}@media (max-width:900px){.workoutPanel,.workoutPanel.active{height:320px}}@media (max-width:900px){.workoutGallery{height:auto}.workoutPanel,.workoutPanel.active{height:auto;min-height:320px}}@media (max-width:620px){.view{padding-left:0;padding-right:0}.topbar,.settingsHeader,.sessionHead,.sessionControlRow{margin-left:16px;margin-right:16px}.tabs.rubberTabs,.sectionLabel,.rowLabel{margin-left:16px}.grid{gap:8px}.rowLabel,.feelSection{margin-top:16px}.rowLabel{margin-bottom:-4px}.sectionLabel{margin-bottom:8px}.workoutGallery{gap:8px}.workoutPanel,.workoutPanel.active{flex:0 0 100%;min-width:100%}.workoutPanel.addPanel{flex:0 0 100%;min-width:100%;min-height:120px}.card,.workoutPanel,.timerCard,.movementCard,.nextCard,.upcomingCard,.confirmCard{padding:16px}.activityRows,.insightCard,.feelCard{gap:8px}.activityRow,.weekChip{padding:10px 12px}.insightStats,.feelDays{gap:8px}.workGrid{gap:8px;margin-top:8px}.nextWrap,.sessionControlRow{margin-top:8px}.upcomingList{gap:8px}}.tabs.rubberTabs .tab{white-space:nowrap}@media (max-width:620px){.tabs.rubberTabs{display:flex;width:max-content;max-width:calc(100% - 32px);overflow-x:auto;scrollbar-width:none}.tabs.rubberTabs::-webkit-scrollbar{display:none}.tabs.rubberTabs .tab{flex:0 0 auto}}#app.light .timeIcon{background:var(--primary-tint);color:var(--primary-ink)!important}.insightCard{display:flex;flex-direction:column;gap:0}.movementReadings{grid-template-columns:repeat(3,minmax(0,1fr))}.weekBars{flex:1;display:grid;grid-template-columns:repeat(7,minmax(0,1fr));gap:9.6px;margin-top:16px;min-height:150px}.weekBar{display:grid;grid-template-rows:1fr auto;gap:8px;justify-items:center;min-height:0}.weekBarTrack{position:relative;width:100%;height:100%;min-height:110px;border-radius:24px;background:var(--bar-track);overflow:hidden}.weekBarTrack span{position:absolute;left:0;right:0;bottom:0;border-radius:24px;background:var(--primary)}.weekBar.today .weekBarTrack{box-shadow:inset 0 0 0 1.5px var(--primary)}.weekBar.today .dayLabel{color:var(--text);font-weight:var(--w-bold)}.weekBar.future{opacity:.35}#app.light .insightCard .activityRow:nth-child(1) .activityRowIcon{background:var(--primary-tint);color:var(--primary-ink)!important}@media (max-width:900px){.movementReadings{grid-template-columns:1fr}.weekBarTrack{min-height:90px}}@media (max-width:1200px) and (min-width:901px){.timeTiles{grid-auto-flow:row;grid-template-columns:repeat(2,1fr)}}#stepLabel{margin-top:9.6px}#exerciseMeta{margin-top:4px}.moveRow{justify-content:flex-start;gap:12.8px}.moveText{flex:1;min-width:0}.moveActions{display:flex;gap:6.4px;flex:0 0 auto}.dragHandle{flex:0 0 auto;display:grid;place-items:center;width:32px;height:40px;margin:-8px 0 -8px -9.6px;padding:0;border:0;border-radius:12px;background:transparent;color:var(--muted);cursor:grab;touch-action:none}.dragHandle:hover{background:var(--hover);color:var(--text)}.moveRow.dragging{box-shadow:0 10px 30px var(--lift),inset 0 0 0 1.5px var(--primary);position:relative;z-index:2}.moveRow.dragging .dragHandle{cursor:grabbing;color:var(--text)}.removeBtn:hover,.hideBtn:hover{border-color:var(--muted)}.toast{position:fixed;z-index:400;display:flex;align-items:center;gap:12.8px}.toast.withAction{pointer-events:auto}.toastAction{border:0;padding:0;background:none;color:inherit;font:inherit;text-decoration:underline;text-underline-offset:3px;cursor:pointer}.modalTop{flex:0 0 auto;padding:22px 22px 0}.modalTop .modalHead{margin-bottom:0;padding-bottom:16px}@media (min-width:901px){.modal:not(.createMode){display:grid;grid-template-columns:minmax(340px,420px) minmax(0,1fr);grid-template-rows:auto minmax(0,1fr)}.modal:not(.createMode) .modalTop{grid-column:1/-1;border-bottom:.32px solid var(--divider)}.modal:not(.createMode) .modalStatic{grid-column:1;grid-row:2;overflow-y:auto;border-bottom:0;border-right:.32px solid var(--divider)}.modal:not(.createMode) .exerciseScroller{grid-column:2;grid-row:2;border-top:0;padding-top:12px}.modal:not(.createMode) .timeTiles{grid-auto-flow:row;grid-template-columns:minmax(0,1fr)}}.timeTiles{align-items:start}.timingGroup{min-height:0;padding:0;justify-content:flex-start;gap:0}.timingGroup .timeRow{display:grid;gap:12.8px;padding:16px}.timingGroup .timeRow+.timeRow{border-top:.32px solid var(--divider)}.timingGroup .timeTotal{padding-bottom:14px}.setupSwitchRow{display:flex;align-items:center;justify-content:space-between;gap:12.8px;margin-bottom:11.2px;padding:12px 14px;border-radius:24px;background:var(--tile)}.removeLabel{position:relative;z-index:1}.removeBtn.holding{border-color:var(--danger-fill)}#deleteMoveConfirm{z-index:200}.moveRow{will-change:transform}.moveRow.dragging{box-shadow:0 18px 40px var(--lift),inset 0 0 0 1.5px var(--primary);z-index:3;transform-origin:center}.moveRow.editing{display:block;padding:16px;box-shadow:inset 0 0 0 1.5px var(--primary)}.moveEditForm{display:grid;gap:14.4px}.moveEditFields{display:grid;grid-template-columns:minmax(0,1.4fr) minmax(0,1fr);gap:12.8px}.moveEditForm label:not(.globalTimingToggle){display:grid;gap:6.4px;min-width:0}.moveEditForm .addInput{width:100%;min-width:0}.moveEditTiming{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:12.8px}.moveEditTiming .creatorDurationRow{display:grid;grid-template-columns:96px 128px;gap:9.6px}.creatorDurationRow.isDisabled{opacity:.38}.moveEditActions{display:flex;justify-content:flex-end;align-items:center;gap:22.4px}@media (max-width:620px){.moveEditFields{grid-template-columns:1fr}}#app.light .digits{mix-blend-mode:normal;color:var(--text)}.integration .status code{color:var(--soft)}#app.resting :is(.sessionHead,.nextLabel,.sessionControlRow){--muted:#f4f4f4;color:var(--text)}#app.paused :is(.sessionHead,.nextLabel,.sessionControlRow){--text:#090909;--muted:rgba(9,9,9,.8);--accent-text:#090909;--line:rgba(9,9,9,.3);color:var(--text)}#app.light:is(.resting,.paused) :is(.sessionHead,.nextLabel,.sessionControlRow){--text:#222222;--muted:rgba(34,34,34,.85);--accent-text:#222222;--line:rgba(34,34,34,.25);color:var(--text)}.moveList{display:flex;flex-direction:column}.movementCreatorOpen,.restAddBtn{display:inline-flex;align-items:center;gap:6px;touch-action:none;user-select:none;-webkit-user-select:none;cursor:grab;transition:transform .42s cubic-bezier(.34,1.46,.64,1),opacity .2s ease}.movementCreatorOpen svg,.restAddBtn svg{width:14px;height:14px;margin-left:-3px;opacity:.55;flex:0 0 auto}.movementCreatorOpen.lifting,.restAddBtn.lifting{transform:scale(.92);opacity:.4;cursor:grabbing;transition:transform .16s ease,opacity .16s ease}.addGhost{position:fixed;left:0;top:0;z-index:20;pointer-events:none;box-sizing:border-box;display:flex;align-items:center;gap:8px;padding:0 12.8px;overflow:hidden;white-space:nowrap;border-radius:12px;background:var(--bright);color:var(--on-bright);box-shadow:0 12px 30px var(--lift);will-change:transform;transition:width .4s cubic-bezier(.34,1.46,.64,1),height .4s cubic-bezier(.34,1.46,.64,1),border-radius .3s ease,padding .3s ease,background .2s ease,color .2s ease,box-shadow .25s ease,opacity .18s ease}.addGhost.rest{background:var(--control-2);color:var(--text);box-shadow:inset 0 0 0 .5px var(--field-line),0 12px 30px var(--lift)}.addGhostGrip{display:grid;place-items:center;flex:0 0 auto;opacity:.55}.addGhostGrip svg{width:14px;height:14px;transition:width .3s ease,height .3s ease}.addGhostText{display:grid;min-width:0}.addGhostText small{color:var(--muted);max-height:0;opacity:0;transition:max-height .3s ease,opacity .2s ease}.addGhost.overList{border-radius:20.8px;gap:12.8px;padding:0 22.4px 0 12.8px;background:var(--row);color:var(--text);box-shadow:inset 0 0 0 1.5px var(--primary),0 16px 36px var(--lift)}.addGhost.overList .addGhostGrip svg{width:18px;height:18px}.addGhost.overList .addGhostText small{max-height:20px;opacity:1;margin-top:4px}.addGhost.leaving{opacity:0}.dropSlot{flex:0 0 auto;height:0;margin-top:-8px;border-radius:20.8px;background:color-mix(in srgb,var(--primary) 9%,transparent);box-shadow:inset 0 0 0 1.5px color-mix(in srgb,var(--primary) 40%,transparent);transition:height .42s cubic-bezier(.34,1.46,.64,1),margin-top .42s cubic-bezier(.34,1.46,.64,1),opacity .2s ease}.dropSlot.leaving{opacity:0;transition:height .26s cubic-bezier(.4,0,.2,1),margin-top .26s cubic-bezier(.4,0,.2,1),opacity .16s ease}@media (prefers-reduced-motion: reduce){.addGhost,.dropSlot,.movementCreatorOpen,.restAddBtn{transition:none}}.exerciseScroller,.modalStatic,.createFlow{overflow-anchor:none}.videoStage{position:absolute;top:0;right:0;bottom:0;left:0;z-index:3;display:grid;place-items:center;background:#000;opacity:0;pointer-events:none;transition:opacity .3s ease}#app.videoStep .videoStage{opacity:1;pointer-events:auto}.videoStage{container-type:size}.videoFrame{width:min(100cqw,calc(100cqh * 16 / 9));aspect-ratio:16/9}.videoFrame>*{display:block;width:100%;height:100%;border:0}.videoSound{position:absolute;left:50%;bottom:16px;transform:translate(-50%);z-index:2}.videoProbe{position:fixed;left:-10000px;top:0;width:320px;height:180px;opacity:0;pointer-events:none}.digits.long{font-size:clamp(96px,12.8vw,200px)}.moveEditFields.videoFields{grid-template-columns:minmax(0,1fr)}.fieldError{margin:0;color:var(--danger)}.addInput.invalid{border-color:var(--danger)}@media (prefers-reduced-motion: reduce){.videoStage{transition:none}}.workGrid{transition:grid-template-columns .55s cubic-bezier(.2,.8,.2,1),gap .55s cubic-bezier(.2,.8,.2,1)}.timerCard{transition:opacity .25s ease}#app.videoStep .timerCard{opacity:0;min-width:0;pointer-events:none}.workGrid{container-type:inline-size}#app.videoStep .movementCard{height:min(56.25cqw,var(--theater-h,60vh));min-height:240px;padding:0}#app.videoStep .exerciseTitle{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}@media (min-width:901px){#app.videoStep .workGrid{grid-template-columns:minmax(0,0fr) minmax(240px,1fr);gap:0}}@media (max-width:900px){#app.videoStep .timerCard{display:none}#app.videoStep .movementCard{min-height:0}}.videoClock{display:none;margin-right:auto;font-variant-numeric:tabular-nums}#app.videoStep .videoClock{display:block}@media (prefers-reduced-motion: reduce){.workGrid,.timerCard{transition:none}}.metaCard{margin-top:16px}.metaFilters{display:flex;flex-wrap:wrap;gap:9.6px;align-items:center;margin:14.4px 0 11.2px}.metaSearch{flex:1 1 200px;min-width:0}.metaKinds{display:flex;flex-wrap:wrap;gap:6.4px}.kindChip{min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);border-radius:12px;background:var(--control-2);color:var(--text);cursor:pointer}.kindChip.active{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.metaTableWrap{overflow-x:auto;border-radius:22.4px;background:var(--raised)}.metaTable{width:100%;border-collapse:collapse}.metaTable th{text-align:left;color:var(--muted);padding:12px 16px;border-bottom:.32px solid var(--divider);text-transform:uppercase;letter-spacing:.1em}.metaTable td{padding:12px 16px;border-top:.32px solid var(--divider);vertical-align:middle;color:var(--soft)}.metaTable tbody tr:first-child td{border-top:0}.metaTable .metaSwitchCol{width:1%;white-space:nowrap;text-align:right}.metaTable .metaSwitchCol .switch{display:inline-block;vertical-align:middle}.metaType{color:var(--text)}.metaTable tr.off .metaType{color:var(--muted)}.metaSub{display:none;margin-top:2px;color:var(--muted)}.metaEmpty td{text-align:center;color:var(--muted)}.metaBulk{display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap;margin-top:11.2px}.metaBulkActions{display:flex;gap:22.4px}@media (max-width:620px){.metaKindCol,.metaUsedCol{display:none}.metaSub{display:block}}@media (max-width:620px){.moveRow.noMeta .moveMeta,.upcomingCard.noMeta .upcomingMeta,.nextCard.noMeta #nextMeta{display:none}}.setupSummary,.addFab{display:none}.modal{position:relative}.setupSummary{align-items:center;justify-content:space-between;gap:12px;width:100%;margin:6.4px 0 4px;padding:12px 14px;border:0;border-radius:20.8px;background:var(--tile);color:var(--text);text-align:left;cursor:pointer}.setupSummaryText{display:grid;gap:2px;min-width:0}.setupSummaryText small{color:var(--muted)}.setupSummaryAction{flex:0 0 auto;color:var(--muted)}.rowChevron{flex:0 0 auto;color:var(--muted);font-size:22px;line-height:1}.addFab{position:absolute;right:16px;bottom:calc(16px + env(safe-area-inset-bottom,0px));z-index:12;place-items:center;width:56px;height:56px;padding:0;border:0;background:var(--bright);color:var(--on-bright);font-size:30px;font-weight:300;line-height:1;box-shadow:0 10px 24px var(--lift);cursor:pointer}.sheetScrim{position:absolute;top:0;right:0;bottom:0;left:0;z-index:30;background:var(--scrim);opacity:0;pointer-events:none;transition:opacity .25s ease}.sheetScrim.open{opacity:1;pointer-events:auto}.sheet{position:absolute;left:0;right:0;bottom:0;z-index:31;display:grid;gap:14px;max-height:88%;overflow-y:auto;overscroll-behavior:contain;padding:10px 16px calc(22px + env(safe-area-inset-bottom,0px));border-radius:28px 28px 0 0;background:var(--modal);box-shadow:0 -.5px 0 var(--divider),0 -18px 40px var(--lift);transform:translateY(105%);visibility:hidden;transition:transform .42s cubic-bezier(.2,.9,.25,1.06),visibility 0s linear .42s}.sheet.open{transform:none;visibility:visible;transition:transform .42s cubic-bezier(.2,.9,.25,1.06)}.sheetGrab{justify-self:center;width:38px;height:5px;border-radius:99px;background:var(--field-line)}.sheetTitle{margin:0}.sheet .moveRow.editing{display:block;padding:0;background:none;box-shadow:none;border-radius:0}.sheetActions{justify-content:space-between;flex-wrap:wrap;gap:12.8px}.sheetSecondary,.sheetPrimary{display:flex;align-items:center;gap:6.4px}.sheetPrimary{gap:22.4px;margin-left:auto}.sheetChoices{display:grid;gap:8px}.sheetChoice{display:flex;align-items:center;gap:14px;width:100%;padding:12px;border:0;border-radius:20.8px;background:var(--row);color:var(--text);text-align:left;cursor:pointer}.sheetChoice small{display:block;margin-top:2px;color:var(--muted)}.sheetSetup .modalStatic{padding:0;background:none;border:0;overflow:visible}.sheetDone{width:100%;margin-top:14.4px}.addGhostActions{display:none;align-items:center;gap:6.4px;margin-left:auto;flex:0 0 auto}.addGhost.hovering{pointer-events:auto;cursor:grab;touch-action:none;animation:ghostWait 1.8s ease-in-out infinite}.addGhost.held{pointer-events:auto;cursor:grabbing;touch-action:none}.addGhost.hovering .addGhostActions{display:flex}.addGhost.rising{transition:transform .6s cubic-bezier(.34,1.46,.64,1),opacity .2s ease}.ghostDiscard{padding:0 10px}@keyframes ghostWait{50%{box-shadow:inset 0 0 0 1.5px var(--primary),0 22px 44px var(--lift),0 0 0 5px color-mix(in srgb,var(--primary) 22%,transparent)}}@media (max-width:620px){.modal:not(.createMode)>.modalStatic{display:none}.modal:not(.createMode) .setupSummary{display:flex}.addFab{display:grid}.movementCreatorLaunch{display:none}.exerciseScroller{padding-bottom:104px}.moveRow.phoneRow{gap:8px;min-height:60px;padding:12px 12px 12px 14px;cursor:pointer}}@media (prefers-reduced-motion: reduce){.sheet,.sheetScrim{transition:none}.addGhost.hovering{animation:none}}.modal{overflow:clip}.moveList.reordering>.moveRow:not(.dragging){transition:transform .44s cubic-bezier(.34,1.46,.64,1)}.moveRow.dragging.willReturn{opacity:.62;box-shadow:0 10px 24px var(--lift),inset 0 0 0 1.5px var(--field-line)}@media (prefers-reduced-motion: reduce){.moveList.reordering>.moveRow{transition:none}}', Yr = `<main id="app"><div class="shell">
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
function Ur(x, y) {
  var so, lo, co, po;
  const a = (e) => x.getElementById(e), U = a("workoutView"), N = a("workoutNameInput");
  let J = !0;
  const _i = a("homeClock");
  function Gi() {
    _i && (_i.textContent = new Intl.DateTimeFormat(void 0, { hour: "2-digit", minute: "2-digit" }).format(/* @__PURE__ */ new Date()));
  }
  Gi(), setInterval(Gi, 15e3);
  const Oi = a("createFlow"), mo = a("createMovementsSlot"), go = a("createTimingSlot"), ho = a("createFinishSlot"), vo = a("movementStepSummary"), fo = a("timingStepSummary"), bo = a("finishStepSummary"), zn = a("continueToTiming"), xo = a("continueToFinish"), yo = a("finishMoveButton");
  let _n = !1, an = [];
  function wo(e) {
    !e || an.some((t) => t.node === e) || an.push({ node: e, parent: e.parentNode, next: e.nextSibling });
  }
  function Gn(e, t) {
    e && (wo(e), t.appendChild(e));
  }
  function ko() {
    [...an].reverse().forEach(({ node: e, parent: t, next: n }) => {
      t && (n && n.parentNode === t ? t.insertBefore(e, n) : t.appendChild(e));
    }), an = [];
  }
  function it(e) {
    x.querySelectorAll(".createStep").forEach((t) => {
      t.classList.toggle("active", t.dataset.createStep === e);
    }), e === "timing" && (_n = !0), He();
  }
  function He() {
    var u, m;
    if (!Z) return;
    E[R];
    const e = me.filter((p) => !p.hidden), t = e.filter((p) => p.kind !== "rest").length, n = e.filter((p) => p.kind === "rest").length;
    vo.textContent = t ? t + " movement" + (t === 1 ? "" : "s") + (n ? " · " + n + " rest" + (n === 1 ? "" : "s") : "") : "No movements yet";
    const i = t > 0, o = x.querySelector('[data-open-step="timing"]'), r = x.querySelector('[data-open-step="finish"]');
    o.disabled = !i, zn.disabled = !i, fo.textContent = i ? Ze(O.value) + " · " + se(I.value) + " movement · " + se(D.value) + " rest" : "Add a movement first", r.disabled = !(i && _n);
    const d = ((N == null ? void 0 : N.value) || "").trim(), s = [];
    (u = a("includeWarmupPreset")) != null && u.checked && s.push("warm-up"), (m = a("includeCooldownPreset")) != null && m.checked && s.push("cooldown"), bo.textContent = d ? d + (s.length ? " · " + s.join(" + ") : "") : s.length ? s.join(" + ") : "Name and optional extras";
  }
  function So() {
    var b, L, g;
    Oi.hidden = !1, _n = !1;
    const e = x.querySelector(".editNameRow"), t = a("createMoveOptions"), n = x.querySelector(".timeTiles"), i = a("routineSummaryModal"), o = x.querySelector(".tempoRevealRow"), r = a("tempoExperiment"), d = (b = a("warmupList")) == null ? void 0 : b.closest("section"), s = a("movementCreatorLaunch"), u = a("movementCreator"), m = (L = a("strengthList")) == null ? void 0 : L.closest("section"), p = (g = a("cooldownList")) == null ? void 0 : g.closest("section");
    [t == null ? void 0 : t.querySelector(".createExtras"), d, s, u, m, p].forEach((h) => h && Gn(h, mo)), [t, n, i, o, r].forEach((h) => Gn(h, go)), Gn(e, ho), it("movements"), He();
  }
  function Co() {
    ko(), Oi.hidden = !0, x.querySelectorAll(".createStep").forEach((e) => e.classList.remove("active"));
  }
  x.querySelectorAll("[data-open-step]").forEach((e) => e.addEventListener("click", () => {
    e.disabled || it(e.dataset.openStep);
  })), zn.addEventListener("click", () => {
    zn.disabled || it("timing");
  }), xo.addEventListener("click", () => it("finish")), yo.addEventListener("click", () => a("saveWorkoutEdit").click());
  const at = { home: a("homeView"), workout: a("workoutView"), settings: a("settingsView") }, Wi = a("homeNav"), Vi = a("settingsNav");
  function On(e) {
    Object.entries(at).forEach(([t, n]) => n.classList.toggle("active", t === e)), Wi.classList.toggle("active", e === "home"), Vi.classList.toggle("active", e === "settings"), e === "home" && setTimeout(di, 400), e === "settings" && (requestAnimationFrame(() => tn(x.querySelector(".tab.active"), !1)), Nn());
  }
  const O = a("totalTime"), I = a("workTime"), D = a("restTime"), To = a("totalOut"), ji = a("workOut"), Yi = a("restOut"), Lo = a("totalFill"), Eo = a("workFill"), Mo = a("restFill"), Ue = a("roundsInput"), Fo = a("roundsFill"), Ro = a("roundsOut"), Ao = a("totalLabel"), Ui = a("routineSummaryModal"), on = [
    { id: "standing-reach", name: "Standing reach", group: "Warm-up", kind: "warmup", hidden: !1 },
    { id: "arm-circles", name: "Arm circles", group: "Warm-up", kind: "warmup", hidden: !1 },
    { id: "hip-hinge", name: "Hip hinge drill", group: "Warm-up", kind: "warmup", hidden: !1 }
  ];
  let ye = on.map((e) => ({ ...e })), me = [
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
  const rn = [
    { id: "hip-flexor", name: "Hip flexor stretch", group: "Cooldown", kind: "cooldown", hidden: !1 },
    { id: "chest-opener", name: "Chest opener", group: "Cooldown", kind: "cooldown", hidden: !1 },
    { id: "hamstring", name: "Hamstring stretch", group: "Cooldown", kind: "cooldown", hidden: !1 },
    { id: "slow-breathing", name: "Slow breathing", group: "Cooldown", kind: "cooldown", hidden: !1 }
  ];
  let we = rn.map((e) => ({ ...e }));
  const Bo = {
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
  }, A = Ki(y.data), E = A.profiles;
  let R = E[A.selected] ? A.selected : A.order.find((e) => E[e]) || "kettlebell";
  function Ki(e) {
    const t = e && typeof e == "object" ? JSON.parse(JSON.stringify(e)) : {}, n = t.profiles && Object.keys(t.profiles).length ? t.profiles : JSON.parse(JSON.stringify(Bo)), i = (Array.isArray(t.order) ? t.order : Object.keys(n)).filter((o) => n[o]);
    return Object.keys(n).forEach((o) => {
      i.includes(o) || i.push(o);
    }), {
      v: 1,
      profiles: n,
      order: i,
      selected: t.selected || i[0],
      history: Array.isArray(t.history) ? t.history : [],
      checkins: (Array.isArray(t.checkins) ? t.checkins : No(t.energy)).map(Zi),
      settings: { ...t.settings || {} }
    };
  }
  function No(e) {
    if (!Array.isArray(e)) return [];
    const t = ["Drained", "Low", "Okay", "Good", "Energised", "Great"], n = [];
    return e.forEach((i) => {
      const o = new Date(i.at);
      if (isNaN(o)) return;
      const r = o.getFullYear() + "-" + String(o.getMonth() + 1).padStart(2, "0") + "-" + String(o.getDate()).padStart(2, "0"), d = o.getHours() < 14 ? "morning" : "evening";
      if (n.some((u) => u.date === r && u.slot === d)) return;
      const s = t.indexOf(i.value) + 1;
      s > 0 && n.push({ date: r, slot: d, mood: null, energy: s, at: i.at });
    }), n;
  }
  function Zi(e) {
    if (e.scale === 100) return e;
    const t = (n) => n == null ? null : Math.round((Number(n) - 1) / 5 * 100);
    return { ...e, mood: t(e.mood), energy: t(e.energy), scale: 100 };
  }
  function Te() {
    Z || (A.selected = R, A.order = A.order.filter((e) => E[e] && e !== Ke), y.save(A));
  }
  function H() {
    return A.settings;
  }
  function Le(e) {
    const t = E[e];
    if (!t) return;
    R = e;
    const n = a("workoutNameInput");
    if (n && (n.value = t.name), O.value = t.total, I.value = t.work, D.value = t.rest, Ue.value = t.rounds || 1, t.customSequence) {
      const i = (t.sequence || []).map((r) => ({ ...r })), o = (r) => i.filter((d) => d.presetRole === r).map(({ presetRole: d, ...s }) => s);
      ye = (t.warmup || o("warmup")).map((r) => ({ ...r })), we = (t.cooldown || o("cooldown")).map((r) => ({ ...r })), me = i.filter((r) => !r.presetRole), Yn(t.preset || "movement", !1);
    } else
      O.min = 3, O.max = 40, O.step = 1, I.min = 20, I.max = 60, I.step = 5, D.min = 5, D.max = 30, D.step = 5, ye = (t.warmup || on).map((i) => ({ ...i })), we = (t.cooldown || rn).map((i) => ({ ...i })), me = t.strength.map((i) => Array.isArray(i) ? (([o, r, d, s = !1]) => ({ id: o, name: r, group: d, kind: "work", hidden: !!s }))(i) : { ...i });
    x.querySelectorAll(".workoutPanel[data-workout]").forEach((i) => i.classList.toggle("active", i.dataset.workout === e)), _();
  }
  function Io(e, t, n) {
    const i = e.getBoundingClientRect(), o = i.width / 2, r = i.height / 2, d = t - o, s = n - r;
    let u = 1 / 0, m = 1 / 0;
    d !== 0 && (u = o / Math.abs(d)), s !== 0 && (m = r / Math.abs(s));
    const p = Math.min(Math.max(1 / Math.min(u, m), 0), 1);
    let l = Math.atan2(s, d) * (180 / Math.PI) + 90;
    return l < 0 && (l += 360), { edge: p, angle: l };
  }
  function Wn(e, t, n = !1) {
    const i = e.getBoundingClientRect(), o = t.clientX - i.left, r = t.clientY - i.top, { edge: d, angle: s } = Io(e, o, r), u = n ? 100 : d * 100;
    e.style.setProperty("--edge-proximity", u.toFixed(3)), e.style.setProperty("--cursor-angle", s.toFixed(3) + "deg"), e.classList.toggle("borderGlowActive", n || u >= 30);
  }
  function Xi(e) {
    e.addEventListener("pointermove", (n) => Wn(e, n, !1)), e.addEventListener("pointerenter", (n) => Wn(e, n, !1)), e.addEventListener("pointerdown", (n) => Wn(e, n, !0));
    const t = () => {
      e.classList.remove("borderGlowActive"), e.style.setProperty("--edge-proximity", "0");
    };
    e.addEventListener("pointerleave", t), e.addEventListener("pointerup", t), e.addEventListener("pointercancel", t);
  }
  Xi(a("addWorkoutPanel"));
  let Z = !1, Ke = null;
  function F(e) {
    return String(e ?? "").replace(/[&<>"']/g, (t) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[t]);
  }
  function Po(e) {
    return e.summary ? e.summary : e.customSequence ? Ze(e.total) + " · custom move" : Ze(e.total) + " · " + se(e.work) + " / " + se(e.rest) + " · warm-up + cooldown";
  }
  function Vn(e, t) {
    var d;
    const n = document.createElement("article");
    n.className = "workoutPanel", n.dataset.workout = e, n.tabIndex = 0;
    const i = t.eyebrow === void 0 ? "Movement" : t.eyebrow, o = t.activityCount ?? (((d = t.sequence) == null ? void 0 : d.length) || 0);
    n.innerHTML = '<span class="edgeLight" aria-hidden="true"></span><div class="panelExpanded"><div><div class="workoutPanelTop"><div>' + (i ? '<div class="eyebrow">' + F(i) + "</div>" : "") + '<div class="workoutName">' + F(t.name) + '</div><div class="sub">' + F(Po(t)) + '</div><span class="sourceTag">' + F(t.source || "Custom move") + '</span></div><button class="pill seeWorkoutBtn" type="button">Edit</button></div></div><div class="workoutFooter"><div><strong class="activityCount">' + (o ? o + " activities" + ((t.rounds || 1) > 1 ? " × " + t.rounds : "") : "—") + '</strong></div><div class="workoutPanelActions"><button class="primary startWorkoutBtn" type="button">Start move</button></div></div></div><div class="panelCollapsed"><div class="panelCollapsedText">' + F(t.name) + "</div></div>";
    const r = a("addWorkoutPanel");
    return a("workoutGallery").insertBefore(n, r), Xi(n), n.addEventListener("click", (s) => {
      s.target.closest("button") || Le(e);
    }), n.addEventListener("keydown", (s) => {
      (s.key === "Enter" || s.key === " ") && !s.target.closest("button") && (s.preventDefault(), Le(e));
    }), n.querySelector(".seeWorkoutBtn").addEventListener("click", (s) => {
      s.stopPropagation(), Le(e), Ca(!1);
    }), n.querySelector(".startWorkoutBtn").addEventListener("click", (s) => {
      s.stopPropagation(), Le(e), xr();
    }), n;
  }
  function Ji() {
    x.querySelectorAll(".workoutPanel[data-workout]").forEach((e) => e.remove()), A.order.forEach((e) => {
      E[e] && Vn(e, E[e]);
    }), x.querySelectorAll(".workoutPanel[data-workout]").forEach((e) => e.classList.toggle("active", e.dataset.workout === R));
  }
  Ji(), a("addWorkoutPanel").addEventListener("keydown", (e) => {
    (e.key === "Enter" || e.key === " ") && (e.preventDefault(), a("addWorkoutPanel").click());
  }), a("addWorkoutPanel").addEventListener("click", () => {
    Z = !0, Ke = "custom-" + Date.now(), E[Ke] = {
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
    }, Le(Ke), Ca(!0);
  });
  let f = [], T = 0, de = 0, Bt = 1, Ce = !1, Q = null, sn = null, re = !1, ot = A.settings.upcomingCount ?? "all", $i = "movement";
  function dn(e, t, n) {
    return (Number(e) - t) / (n - t) * 100;
  }
  function se(e) {
    const t = Math.max(0, Number(e) || 0);
    return t >= 3600 && t % 3600 === 0 ? t / 3600 + " hr" : t >= 60 && t % 60 === 0 ? t / 60 + " min" : t >= 60 ? Math.round(t / 60) + " min" : Math.round(t) + " sec";
  }
  function Ze(e) {
    const t = Math.max(0, Number(e) || 0);
    return t >= 60 && t % 60 === 0 ? t / 60 + " hr" : t >= 60 ? Math.floor(t / 60) + " hr " + t % 60 + " min" : t + " min";
  }
  function ln() {
    Lo.style.width = dn(O.value, Number(O.min), Number(O.max)) + "%", Eo.style.width = dn(I.value, Number(I.min), Number(I.max)) + "%", Mo.style.width = dn(D.value, Number(D.min), Number(D.max)) + "%", ji.textContent = se(I.value), Yi.textContent = se(D.value);
    const e = Number(Ue.value) || 1;
    Fo.style.width = dn(e, 1, 10) + "%", Ao.textContent = e > 1 ? "Time per round" : "Total time";
  }
  function jn(e) {
    return e.filter((t) => !t.hidden);
  }
  function Nt(e) {
    const t = Math.max(0, Math.round(Number(e) || 0)), n = Math.floor(t / 3600), i = Math.floor(t % 3600 / 60), o = t % 60;
    return (n ? n + ":" + String(i).padStart(2, "0") : i) + ":" + String(o).padStart(2, "0");
  }
  function Do(e) {
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
        const s = t.pathname.match(/^\/(embed|shorts|live|v)\/([^/?#]+)/);
        s && (i = s[2]);
      }
    if (!i || !/^[\w-]{11}$/.test(i)) return null;
    const o = (s) => {
      if (!s) return 0;
      if (/^\d+$/.test(s)) return Number(s);
      const u = s.match(/^(?:(\d+)h)?(?:(\d+)m)?(?:(\d+)s)?$/);
      return u ? (Number(u[1]) || 0) * 3600 + (Number(u[2]) || 0) * 60 + (Number(u[3]) || 0) : 0;
    }, r = o(t.searchParams.get("t") || t.searchParams.get("start")), d = o(t.searchParams.get("end"));
    return { id: i, start: r, end: d > r ? d : null };
  }
  function It(e, t) {
    if (e.useVideoLength === !1) return Math.max(5, Number(e.duration) || t || 300);
    const n = Number(e.start) || 0, i = Number(e.end) || Number(e.videoDuration) || 0;
    return i > n ? Math.round(i - n) : Number(e.duration) || 300;
  }
  function cn(e, t) {
    const n = Math.max(0, Number(e) || 0);
    return Math.round(t === "hour" ? n * 3600 : t === "min" ? n * 60 : n);
  }
  function Yn(e, t = !0) {
    $i = e, x.querySelectorAll(".createPresetBtn").forEach((i) => i.classList.toggle("active", i.dataset.movePreset === e));
    const n = E[R];
    n && (n.preset = e), e === "work" ? (O.min = 30, O.max = 480, O.step = 30, I.min = 300, I.max = 7200, I.step = 300, D.min = 60, D.max = 1800, D.step = 60, t && (O.value = 60, I.value = 1500, D.value = 300), a("addMovementUnit").value = "min", a("addMovementDuration").value = 25, a("addRestUnit").value = "min", a("addRestDuration").value = 5) : (O.min = 3, O.max = 40, O.step = 1, I.min = 20, I.max = 60, I.step = 5, D.min = 5, D.max = 30, D.step = 5, t && (O.value = 20, I.value = 45, D.value = 15), a("addMovementUnit").value = "sec", a("addMovementDuration").value = 45, a("addRestUnit").value = "sec", a("addRestDuration").value = 30), ln();
  }
  function Qi(e, t) {
    const n = $i === "work";
    return e.map((i, o) => ({ ...i, id: t + "-" + o + "-" + Date.now().toString(36), useGlobalTiming: !n, duration: n ? 60 : Number(I.value) }));
  }
  function Un() {
    const e = E[R];
    e != null && e.customSequence && (e.includeWarmup = a("includeWarmupPreset").checked, e.includeCooldown = a("includeCooldownPreset").checked, e.includeWarmup && !ye.length && (ye = Qi(on, "warm")), e.includeCooldown && !we.length && (we = Qi(rn, "cool")), _());
  }
  function Ho() {
    const e = a("upcomingCountSetting");
    if (!e) return;
    const t = Math.max(1, f.length - 1), n = ot;
    e.innerHTML = "";
    for (let r = 1; r <= t; r++) {
      const d = document.createElement("option");
      d.value = String(r), d.textContent = String(r), e.appendChild(d);
    }
    const i = document.createElement("option");
    i.value = "all", i.textContent = "All", e.appendChild(i);
    const o = n === "all" ? "all" : String(Math.min(Number(n) || 1, t));
    e.value = o, ot = o === "all" ? "all" : Number(o);
  }
  function _() {
    Number(O.value) * 60;
    const e = Number(I.value), t = Number(D.value), n = E[R], i = !!(n != null && n.customSequence), o = (i ? !n.includeWarmup : n != null && n.warmupOff) ? [] : jn(ye), r = jn(me), d = i && !n.includeCooldown ? [] : jn(we);
    if (n && (n.total = Number(O.value), n.work = e, n.rest = t, n.rounds = Number(Ue.value) || 1, n.customSequence ? (n.sequence = me.map((c) => ({ ...c })), n.warmup = ye.map((c) => ({ ...c })), n.cooldown = we.map((c) => ({ ...c }))) : (n.strength = me.map((c) => ({ ...c })), n.warmup = ye.map((c) => ({ ...c })), n.cooldown = we.map((c) => ({ ...c })))), n != null && n.customSequence) {
      const c = [...o.map((S) => ({ ...S, section: "warmup" })), ...r, ...d.map((S) => ({ ...S, section: "cooldown" }))].map((S) => {
        if (S.kind === "video") return { ...S, duration: It(S, e), rest: 0 };
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
      f = [...o.map((c) => ({ ...c, section: "warmup" })), ...r, ...d.map((c) => ({ ...c, section: "cooldown" }))].map((c) => c.kind === "video" ? { ...c, duration: It(c, e), rest: 0 } : c.kind === "rest" ? { ...c, duration: c.useGlobalTiming === !0 ? t : Number(c.duration) || t, rest: 0 } : { ...c, duration: c.useGlobalTiming === !1 && Number(c.duration) || e, rest: t }), f.forEach((c, S) => {
        var te;
        ((te = f[S + 1]) == null ? void 0 : te.kind) === "rest" && (c.rest = 0);
      }), f.length && (f[f.length - 1].rest = 0);
    const s = Math.max(1, Math.min(10, Number(Ue.value) || 1)), u = f, m = (c) => s <= 1 ? null : c.section === "warmup" || c.presetRole === "warmup" ? "first" : c.section === "cooldown" || c.presetRole === "cooldown" ? "last" : c.kind === "video" && (c.videoRounds === "first" || c.videoRounds === "last") ? c.videoRounds : null, p = (c) => !!m(c), l = u.filter((c) => !p(c)), b = u.filter(p), L = l.length, g = l.reduce((c, S) => c + S.duration + S.rest, 0), h = b.reduce((c, S) => c + S.duration + S.rest, 0), v = [
      b.some((c) => c.section === "warmup" || c.presetRole === "warmup") && "warm-up",
      b.some((c) => c.section === "cooldown" || c.presetRole === "cooldown") && "cooldown",
      b.some((c) => c.kind === "video" && !c.section && !c.presetRole) && "video"
    ].filter(Boolean), q = v.length > 1 ? v.slice(0, -1).join(", ") + " & " + v[v.length - 1] : v[0] || "";
    f = [];
    const $ = (c, S) => {
      const te = m(c);
      return !te || (te === "first" ? S === 1 : S === s);
    };
    for (let c = 1; c <= s; c++)
      if (u.filter((S) => $(S, c)).forEach((S, te) => f.push({ ...S, id: S.id + (s > 1 ? "-r" + c : ""), round: c, roundIndex: te })), c < s && L)
        if (n != null && n.customSequence)
          f.push({ id: "round-break-" + c, name: "Rest", group: "Round " + (c + 1) + " next", kind: "rest", hidden: !1, duration: t, rest: 0, round: c, roundIndex: L, roundBreak: !0 });
        else {
          const S = f[f.length - 1];
          S.rest = t, S.roundBreakAfter = !0;
        }
    ln();
    const k = f.reduce((c, S) => c + S.duration + S.rest, 0), B = Math.round(g / 60), V = Math.round(k / 60), ee = s > 1 ? Ze(B) + " × " + s + " rounds" + (h ? " + " + se(h) + " " + q : "") + " (" + Ze(V) + ")" : Ze(V), z = [o.length ? "warm-up" : "", d.length ? "cooldown" : ""].filter(Boolean), ae = n != null && n.customSequence ? ee + " · " + L + " items" + (z.length && !(s > 1 && h) ? " · " + z.join(" + ") : "") : ee + " · " + se(e) + " / " + se(t) + (z.length && !(s > 1 && h) ? " · " + z.join(" + ") : "");
    To.textContent = se(g);
    const oe = f.filter((c) => !c.roundBreak).length, K = s > 1 ? oe + " activities · " + s + " rounds" : L + " activities";
    Ro.textContent = s > 1 ? s + " rounds · " + Ze(V) + " total" : "1 round", n && (n.summary = ae, n.activityCount = L);
    const je = x.querySelector(".workoutPanel.active .sub");
    je && (je.textContent = ae), Ui.textContent = ae, ei(), x.querySelectorAll(".workoutPanel.active .activityCount").forEach((c) => c.textContent = K), ln(), Xn(), ii(), _t(), Ho(), Z && He(), at.workout.classList.contains("active") && !Q && Si();
  }
  const Pt = '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><g fill="currentColor"><circle cx="9" cy="6" r="1.6"/><circle cx="15" cy="6" r="1.6"/><circle cx="9" cy="12" r="1.6"/><circle cx="15" cy="12" r="1.6"/><circle cx="9" cy="18" r="1.6"/><circle cx="15" cy="18" r="1.6"/></g></svg>';
  let ge = null, ke = null;
  function qo(e) {
    return e = Math.max(1, Number(e) || 0), e >= 3600 && e % 3600 === 0 ? { value: e / 3600, unit: "hour" } : e >= 60 && e % 60 === 0 ? { value: e / 60, unit: "min" } : { value: e, unit: "sec" };
  }
  function ea(e = !1) {
    const t = x.querySelector(".moveEditForm input[data-f=url],.moveEditForm input[data-f=name]");
    t && (t.focus({ preventScroll: !0 }), e && t.select());
  }
  function Kn(e, t, n = {}) {
    const i = e.kind === "rest", o = e.kind === "video", r = o ? e.useVideoLength !== !1 : i ? e.useGlobalTiming === !0 : e.useGlobalTiming !== !1, d = Number(i ? D.value : I.value), s = qo(o ? e.useVideoLength === !1 ? e.duration : It({ ...e, useVideoLength: !0 }) : r ? d : e.duration || d), u = o && (Number(e.videoDuration) > 0 || Number(e.end) > 0), m = o ? '<label class="moveEditWide"><span>YouTube link</span><input class="addInput" data-f="url" type="url" inputmode="url" autocomplete="off" value="' + F(e.url || "") + '" placeholder="Paste a YouTube link"></label><label><span>Name</span><input class="addInput" data-f="name" type="text" value="' + F(e.autoName ? "" : e.name) + '" placeholder="Uses the video’s title"></label><label><span>Plays in</span><select class="creatorUnitSelect" data-f="rounds">' + [["every", "Every round"], ["first", "The first round only"], ["last", "The last round only"]].map(([k, B]) => '<option value="' + k + '"' + ((e.videoRounds || "every") === k ? " selected" : "") + ">" + B + "</option>").join("") + '</select></label><p class="fieldError" data-f="urlError" hidden>That isn’t a YouTube link. Copy it from the Share button on YouTube.</p>' : '<label><span>Name</span><input class="addInput" data-f="name" type="text" value="' + F(e.name) + '" placeholder="' + (i ? "Rest" : "Name this movement") + '"></label><label><span>Type / group</span><input class="addInput" data-f="group" type="text" value="' + F(e.group) + '" placeholder="' + (i ? "Rest" : "e.g. Glutes + legs") + '"></label>', p = o ? "Play the whole " + (Number(e.start) > 0 || Number(e.end) > 0 ? "clip" : "video") + (u ? " · " + Nt(It({ ...e, useVideoLength: !0 })) : "") : "Use global timing · " + se(d), l = document.createElement("div");
    l.className = "moveRow editing" + (n.sheet ? " inSheet" : ""), l.dataset.index = t, l.dataset.id = e.id;
    const b = n.isNew ?? (ke == null ? void 0 : ke.item) === e, L = n.sheet ? '<div class="moveEditActions sheetActions">' + (b ? "" : '<div class="sheetSecondary"><button class="hideBtn" type="button" data-a="hide">' + (e.hidden ? "Show" : "Hide") + '</button><button class="removeBtn" type="button" data-a="remove" aria-label="Hold to remove ' + F(e.name) + '"><span class="removeFill"></span><span class="removeLabel">Remove</span></button></div>') + '<div class="sheetPrimary"><button class="pill" type="button" data-a="cancel">Cancel</button><button class="primary" type="button" data-a="save">' + (b ? "Add" : "Save") + "</button></div></div>" : '<div class="moveEditActions"><button class="pill" type="button" data-a="cancel">Cancel</button><button class="primary" type="button" data-a="save">Save</button></div>';
    l.innerHTML = '<div class="moveEditForm"><div class="moveEditFields' + (o ? " videoFields" : "") + '">' + m + '</div><div class="moveEditTiming"><label class="globalTimingToggle"><input type="checkbox" data-f="global"' + (r ? " checked" : "") + '><span class="toggleTrack" aria-hidden="true"><span class="toggleThumb"></span></span><span class="toggleLabel">' + F(p) + '</span></label><div class="creatorDurationRow"><input class="addInput creatorNumber" data-f="dur" type="number" min="1" max="3600" step="1" value="' + s.value + '" aria-label="Duration"><select class="creatorUnitSelect" data-f="unit" aria-label="Duration unit">' + ["sec", "min", "hour"].map((k) => '<option value="' + k + '"' + (k === s.unit ? " selected" : "") + ">" + { sec: "seconds", min: "minutes", hour: "hours" }[k] + "</option>").join("") + "</select></div></div>" + L + "</div>";
    const g = (k) => l.querySelector("[data-f=" + k + "]"), h = () => {
      const k = g("global").checked;
      g("dur").disabled = k, g("unit").disabled = k, l.querySelector(".creatorDurationRow").classList.toggle("isDisabled", k);
    };
    g("global").addEventListener("change", h), h();
    const v = () => {
      var k;
      if (n.sheet) {
        (k = n.onCancel) == null || k.call(n);
        return;
      }
      b && un(), ge = null, _();
    }, q = () => {
      var V;
      if (o) {
        $();
        return;
      }
      const k = g("name").value.trim();
      if (!k) {
        g("name").focus();
        return;
      }
      e.name = k, e.group = g("group").value.trim() || (i ? "Rest" : "Movement");
      const B = g("global").checked;
      if (e.useGlobalTiming = B, B || (e.duration = Math.max(i ? 5 : 1, cn(g("dur").value, g("unit").value))), n.sheet) {
        (V = n.onSaved) == null || V.call(n);
        return;
      }
      b && (ke = null), ge = null, _(), j(b ? i ? "Rest added" : "Movement added" : "Movement updated");
    }, $ = () => {
      var z;
      const k = g("url").value.trim(), B = Do(k);
      if (!B) {
        g("urlError").hidden = !1, g("url").classList.add("invalid"), g("url").focus();
        return;
      }
      const V = B.id !== e.videoId;
      e.url = k, e.videoId = B.id, e.start = B.start, e.end = B.end, V && (e.videoDuration = null, e.videoError = null);
      const ee = g("name").value.trim();
      e.autoName = !ee, e.name = ee || (V ? "" : e.name) || e.videoTitle || "YouTube video", e.group = "Video", e.videoRounds = g("rounds").value, e.useVideoLength = g("global").checked, e.useVideoLength || (e.duration = Math.max(5, cn(g("dur").value, g("unit").value))), n.sheet ? (z = n.onSaved) == null || z.call(n) : (b && (ke = null), ge = null, _(), j(b ? "Video added" : "Video updated")), (V || !e.videoDuration || e.autoName && !e.videoTitle) && Ar(e);
    };
    if (o && g("url").addEventListener("input", () => {
      g("urlError").hidden = !0, g("url").classList.remove("invalid");
    }), l.querySelector("[data-a=cancel]").addEventListener("click", v), l.querySelector("[data-a=save]").addEventListener("click", q), n.sheet && !b) {
      l.querySelector("[data-a=hide]").addEventListener("click", () => {
        var B;
        return (B = n.onHide) == null ? void 0 : B.call(n);
      });
      const k = l.querySelector("[data-a=remove]");
      en(k, k.querySelector(".removeFill"), 1200, () => {
        var B;
        return (B = n.onRemove) == null ? void 0 : B.call(n);
      });
    }
    return l.addEventListener("keydown", (k) => {
      k.key === "Escape" && (k.preventDefault(), k.stopPropagation(), v()), k.key === "Enter" && k.target.matches("input") && (k.preventDefault(), q());
    }), l;
  }
  function Zn(e, t) {
    const n = a(t);
    n.innerHTML = "", e.forEach((i, o) => {
      if (i === ge && !zt()) {
        n.appendChild(Kn(i, o));
        return;
      }
      const r = document.createElement("div");
      r.className = "moveRow" + (i.hidden ? " hidden" : "") + (i.kind === "rest" ? " restItem" : "") + (i.kind === "video" ? " videoItem" : "") + (Fi(i) ? " noMeta" : ""), r.dataset.index = o, r.dataset.id = i.id;
      const d = i.kind === "rest" ? i.useGlobalTiming === !0 ? "Global timing" : se(i.duration) : i.useGlobalTiming === !1 ? se(i.duration) : "Global timing", s = i.kind === "video" ? '<span class="moveKindBadge">Video</span>' : "", u = i.kind === "video" ? i.videoError ? "YouTube · can’t play outside YouTube" : "YouTube · " + (i.useVideoLength === !1 ? "stops after " + se(i.duration) : Number(i.videoDuration) > 0 || Number(i.end) > 0 ? Nt(It(i)) : "plays to the end") + (i.videoRounds === "first" ? " · first round only" : i.videoRounds === "last" ? " · last round only" : "") : i.group + " · " + d, m = '<button class="dragHandle" type="button" title="Drag to reorder" aria-label="Reorder ' + F(i.name) + '. Drag, or use the up and down arrow keys">' + Pt + "</button>", p = '<div class="moveText"><div class="moveItemName">' + F(i.name) + s + '</div><div class="moveMeta">' + F(u) + "</div></div>", l = (g) => g.addEventListener("keydown", (h) => {
        var $, k;
        if (h.key !== "ArrowUp" && h.key !== "ArrowDown") return;
        h.preventDefault();
        const v = e.indexOf(i), q = v + (h.key === "ArrowUp" ? -1 : 1);
        q < 0 || q >= e.length || (e.splice(v, 1), e.splice(q, 0, i), _(), (k = ($ = a(t).children[q]) == null ? void 0 : $.querySelector(".dragHandle")) == null || k.focus());
      });
      if (zt()) {
        r.classList.add("phoneRow"), r.tabIndex = 0, r.setAttribute("role", "button"), r.setAttribute("aria-label", "Edit " + (i.name || "step")), r.innerHTML = m + p + '<span class="rowChevron" aria-hidden="true">›</span>';
        const g = r.querySelector(".dragHandle");
        g.addEventListener("pointerdown", (h) => ta(h, r, n, e)), l(g), r.addEventListener("click", (h) => {
          h.target.closest(".dragHandle") || pa(i, e);
        }), r.addEventListener("keydown", (h) => {
          h.key === "Enter" && h.target === r && (h.preventDefault(), pa(i, e));
        }), n.appendChild(r);
        return;
      }
      r.innerHTML = m + p + '<div class="moveActions"><button class="hideBtn editBtn" type="button" aria-label="Edit ' + F(i.name) + '">Edit</button><button class="hideBtn" type="button">' + (i.hidden ? "Show" : "Hide") + '</button><button class="removeBtn" type="button" aria-label="Hold to remove ' + F(i.name) + '"><span class="removeFill"></span><span class="removeLabel">Remove</span></button></div>', r.querySelector(".editBtn").addEventListener("click", () => {
        un(), ge = i, _(), ea();
      }), r.querySelector(".hideBtn:not(.editBtn)").addEventListener("click", () => {
        i.hidden = !i.hidden, _();
      });
      const b = r.querySelector(".removeBtn");
      en(b, b.querySelector(".removeFill"), 1200, () => {
        const g = e.indexOf(i);
        g < 0 || (e.splice(g, 1), _(), j("Removed " + i.name, { label: "Undo", run: () => {
          e.splice(Math.min(g, e.length), 0, i), _();
        } }));
      });
      const L = r.querySelector(".dragHandle");
      L.addEventListener("pointerdown", (g) => ta(g, r, n, e)), l(L), n.appendChild(r);
    });
  }
  const qe = () => {
    var e;
    return (e = window.matchMedia) == null ? void 0 : e.call(window, "(prefers-reduced-motion: reduce)").matches;
  }, pn = (e) => {
    var t;
    try {
      (t = navigator.vibrate) == null || t.call(navigator, e);
    } catch {
    }
  };
  function ta(e, t, n, i) {
    if (e.button !== void 0 && e.button !== 0) return;
    e.preventDefault();
    const o = e.currentTarget, r = e.pointerId, d = !qe();
    try {
      o.setPointerCapture(r);
    } catch {
    }
    const s = t.closest(".exerciseScroller") || Jn(t), u = n.style.position;
    n.style.position = "relative";
    const m = [...n.children].filter((C) => C.classList.contains("moveRow")), p = m.indexOf(t), l = parseFloat(getComputedStyle(n).rowGap) || 8, b = t.offsetHeight, L = b + l, g = m.map((C) => C.offsetTop), h = m.map((C) => C.offsetHeight), v = () => n.getBoundingClientRect().top, q = n.getBoundingClientRect().width, $ = e.clientY - (v() + g[p]), k = e.clientX;
    let B = e.clientY, V = e.clientX, ee = v() + g[p], z = 0, ae = 0, oe = 0, K = 1, je = 0, c = p, S = !1, te = 0, ne = !1, Dn = !1, Rt = g[p];
    n.classList.add("reordering"), t.classList.add("dragging"), t.style.transition = "none", pn(8);
    const Hn = () => {
      const C = B - $ + b / 2 - v();
      let M = 0;
      return m.forEach((G, ue) => {
        ue !== p && C > g[ue] + h[ue] / 2 && M++;
      }), M;
    }, qn = () => {
      m.forEach((C, M) => {
        if (M === p) return;
        const G = p < c && M > p && M <= c ? -L : p > c && M >= c && M < p ? L : 0;
        C.style.transform = G ? "translateY(" + G + "px)" : "";
      });
    }, nn = () => {
      const C = n.getBoundingClientRect(), M = Math.abs(V - k) > Math.max(80, q * 0.3) || V < C.left - 24 || V > C.right + 24;
      M !== S && (S = M, t.classList.toggle("willReturn", M), pn(M ? 10 : 4));
      const G = S ? p : Hn();
      G !== c && (c = G, qn(), S || pn(4));
    }, Ye = () => {
      if (c === p) return g[p];
      const C = m.filter((G, ue) => ue !== p);
      let M = g[0];
      for (let G = 0; G < c; G++) M += C[G].offsetHeight + l;
      return M;
    }, At = () => {
      const C = d ? Math.min(Math.abs(z) / 40, 1) : 0, M = d && !ne ? Math.max(-3, Math.min(3, oe * 0.6)) : 0;
      t.style.transform = "translate(" + ae.toFixed(2) + "px," + (ee - (v() + g[p])).toFixed(2) + "px) rotate(" + M.toFixed(2) + "deg) scale(" + (K * (1 - 0.04 * C)).toFixed(4) + "," + (K * (1 + 0.06 * C)).toFixed(4) + ")";
    }, w = () => {
      te = requestAnimationFrame(w);
      const C = V - k, M = ne ? v() + Rt : B - $, G = ne ? 0 : S ? C * 0.9 : Math.max(-22, Math.min(22, C * 0.22)), ue = ne ? 1 : S ? 0.97 : 1.035;
      if (!d) {
        ee = M, ae = ne ? 0 : G, K = 1, At(), ne && Y();
        return;
      }
      const Wr = ne ? 0.24 : 0.2, Vr = ne ? 0.62 : 0.68;
      z = (z + (M - ee) * Wr) * Vr, ee += z, oe = (oe + (G - ae) * 0.16) * 0.7, ae += oe, je = (je + (ue - K) * 0.22) * 0.6, K += je, At(), ne && Math.abs(z) < 0.15 && Math.abs(M - ee) < 0.5 && Math.abs(ae) < 0.5 && Math.abs(K - 1) < 3e-3 && Y();
    }, P = setInterval(() => {
      if (!s || ne) return;
      const C = s.getBoundingClientRect(), M = 56, G = B < C.top + M ? -10 : B > C.bottom - M ? 10 : 0;
      G && (s.scrollTop += G, nn());
    }, 30);
    function Y() {
      if (Dn) return;
      Dn = !0, cancelAnimationFrame(te);
      const C = c !== p, M = t.dataset.id;
      if (n.classList.remove("reordering"), m.forEach((ue) => {
        ue.style.transition = "none", ue.style.transform = "";
      }), t.classList.remove("dragging", "willReturn"), n.style.position = u, C) {
        const [ue] = i.splice(p, 1);
        i.splice(c, 0, ue);
      }
      _();
      const G = M && n.querySelector('.moveRow[data-id="' + M + '"]');
      G && d && G.animate([{ transform: "scale(1.02,.95)" }, { transform: "scale(.995,1.012)" }, { transform: "none" }], { duration: 340, easing: "ease-out" }), C && j("Order saved");
    }
    const ie = (C) => {
      if (C.pointerId === r) {
        if (C.pointerType === "mouse" && C.buttons === 0) {
          xe();
          return;
        }
        B = C.clientY, V = C.clientX, nn();
      }
    }, pe = (C) => {
      C.pointerId === r && xe();
    };
    function xe() {
      ne || (window.removeEventListener("pointermove", ie, !0), window.removeEventListener("pointerup", pe, !0), window.removeEventListener("pointercancel", pe, !0), o.removeEventListener("lostpointercapture", xe), clearInterval(P), S && c !== p && (c = p, qn()), Rt = Ye(), ne = !0, pn(6), setTimeout(Y, 800));
    }
    window.addEventListener("pointermove", ie, !0), window.addEventListener("pointerup", pe, !0), window.addEventListener("pointercancel", pe, !0), o.addEventListener("lostpointercapture", xe), te = requestAnimationFrame(w), At();
  }
  function Xn() {
    var o, r, d, s;
    const e = E[R], t = (o = a("warmupList")) == null ? void 0 : o.closest("section"), n = (r = a("cooldownList")) == null ? void 0 : r.closest("section"), i = (s = (d = a("strengthList")) == null ? void 0 : d.closest("section")) == null ? void 0 : s.querySelector(".sectionTitle");
    e != null && e.customSequence ? (t && (t.hidden = !e.includeWarmup), n && (n.hidden = !e.includeCooldown), i && (i.textContent = "Move sequence")) : (t && (t.hidden = !!(e != null && e.warmupOff)), n && (n.hidden = !1), i && (i.textContent = "Kettlebell work")), Zn(ye, "warmupList"), Zn(me, "strengthList"), Zn(we, "cooldownList");
  }
  function un() {
    if (!ke) return;
    const { item: e, arr: t } = ke;
    ke = null;
    const n = t.indexOf(e);
    n >= 0 && t.splice(n, 1), ge === e && (ge = null);
  }
  function Dt(e) {
    return e.id === "warmupList" ? { arr: ye, kind: "warmup", group: "Warm-up" } : e.id === "cooldownList" ? { arr: we, kind: "cooldown", group: "Cooldown" } : { arr: me, kind: "work", group: "" };
  }
  function na(e, t) {
    const n = Dt(t), i = Date.now().toString(36);
    return e === "video" ? { id: "video-" + i, name: "", group: "Video", kind: "video", hidden: !1, url: "", videoId: "", start: 0, end: null, videoDuration: null, useVideoLength: !0, autoName: !0, duration: 300 } : e === "rest" ? { id: "rest-" + i, name: "Rest", group: "Rest", kind: "rest", hidden: !1, useGlobalTiming: !0, duration: Number(D.value) } : { id: "movement-" + i, name: "", group: n.group, kind: n.kind, hidden: !1, useGlobalTiming: !0, duration: Number(I.value) };
  }
  const ia = "cubic-bezier(.34,1.46,.64,1)";
  function aa(e, t) {
    if (qe() || !e) {
      t();
      return;
    }
    const n = (r) => {
      var d;
      return ((d = r.dataset) == null ? void 0 : d.id) || r;
    }, i = () => [...e.querySelectorAll(".moveRow,.sectionTitle,.movementCreatorLaunch")], o = new Map(i().map((r) => [n(r), r.getBoundingClientRect().top]));
    t(), i().forEach((r) => {
      const d = o.get(n(r));
      if (d === void 0) return;
      const s = d - r.getBoundingClientRect().top;
      Math.abs(s) < 0.5 || r.animate([{ transform: "translateY(" + s + "px)" }, { transform: "none" }], { duration: 440, easing: ia });
    });
  }
  function oa(e, t) {
    if (!e || qe()) return;
    const n = e.offsetHeight, i = Math.max(0, n - (t || 0));
    e.animate([{ clipPath: "inset(0 0 " + i + "px 0 round 20.8px)" }, { clipPath: "inset(0 0 0 0 round 20.8px)" }], { duration: 460, easing: ia });
  }
  function ra(e, t, n, i) {
    const { arr: o } = Dt(t), r = na(e, t);
    o.splice(Math.max(0, Math.min(n, o.length)), 0, r), ke = { item: r, arr: o }, ge = r, aa(t.closest(".exerciseScroller,.createStepSlot") || t, () => _());
    const d = t.querySelector(".moveRow.editing");
    return oa(d, i), ea(e === "rest"), d;
  }
  function Jn(e) {
    for (let t = e; t && t.nodeType === 1; t = t.parentElement) {
      const n = getComputedStyle(t).overflowY;
      if (/(auto|scroll)/.test(n) && t.scrollHeight > t.clientHeight) return t;
    }
    return null;
  }
  const sa = { movement: ["New movement", "Drop to add, then name it"], rest: ["Rest", "Rest · Global timing"], video: ["New video", "Drop to add, then paste a YouTube link"] };
  function da(e, t) {
    const n = document.createElement("div");
    return n.className = "addGhost" + (e === "movement" ? "" : " rest"), n.innerHTML = '<span class="addGhostGrip">' + Pt + '</span><span class="addGhostText"><strong>' + F(t[0]) + "</strong><small>" + F(t[1]) + "</small></span>", a("workoutModal").appendChild(n), n;
  }
  function Ht(e) {
    e.classList.add("leaving"), setTimeout(() => e.remove(), 180);
  }
  function zo(e, t, n, i) {
    (ge || ke) && (un(), ge = null, _());
    const o = e.getBoundingClientRect(), r = da(t, sa[t]);
    r.setAttribute("aria-hidden", "true"), r.style.width = o.width + "px", r.style.height = o.height + "px", r.style.transform = "translate(" + o.left + "px," + o.top + "px)", e.classList.add("lifting");
    const d = Jn(e);
    return la({
      ghost: r,
      origin: o,
      sx: n,
      sy: i,
      scroller: d,
      column: e.closest(".exerciseScroller,.createFlow") || d,
      home: () => e.getBoundingClientRect(),
      onDrop: (s, u, m) => {
        Ht(r), e.classList.remove("lifting"), ra(t, s, u, m);
      },
      onReturn: () => {
        Ht(r), e.classList.remove("lifting");
      }
    });
  }
  function la({ ghost: e, origin: t, sx: n, sy: i, scroller: o, column: r, home: d, onDrop: s, onReturn: u, rowLook: m = !1 }) {
    var At;
    const p = !qe(), l = ((At = x.querySelector(".moveList .moveRow:not(.editing)")) == null ? void 0 : At.offsetHeight) || 80, b = n - t.left, L = i - t.top, g = 44;
    let h = n, v = i, q = t.left, $ = t.top, k = 0, B = 0, V = !p, ee = null, z = null, ae = -1, oe = 0, K = null;
    const je = () => ["warmupList", "strengthList", "cooldownList"].map((w) => a(w)).filter((w) => w && w.getClientRects().length && !w.closest("[hidden]")), c = (w) => {
      if (w === ee) return;
      ee = w, e.classList.toggle("overList", !!w || m);
      const P = w ? w.getBoundingClientRect().width : t.width;
      e.style.width = P + "px", e.style.height = (w ? l : t.height) + "px";
    }, S = (w) => {
      w.classList.add("leaving"), w.style.height = "0px", w.style.marginTop = "-8px", setTimeout(() => w.remove(), p ? 320 : 0);
    }, te = (w, P, Y) => {
      if (z && z.parentNode === w && ae === Y || (z && (S(z), z = null, ae = -1), !w)) return;
      const ie = document.createElement("div");
      ie.className = "dropSlot", w.insertBefore(ie, P), z = ie, ae = Y, ie.getBoundingClientRect(), ie.style.height = l + "px", ie.style.marginTop = "0px";
    }, ne = () => {
      let w = null, P = 1 / 0;
      for (const xe of je()) {
        const C = xe.getBoundingClientRect();
        if (h < C.left - 48 || h > C.right + 48) continue;
        const M = C.top - 28, G = C.bottom + 28, ue = v < M ? M - v : v > G ? v - G : 0;
        ue < P && (P = ue, w = xe);
      }
      const Y = r == null ? void 0 : r.getBoundingClientRect(), pe = Y && h >= Y.left && h <= Y.right && v >= Y.top && v <= Y.bottom || P === 0 ? w : null;
      if (pe) {
        const xe = [...pe.children].filter((M) => M.classList.contains("moveRow"));
        let C = xe.findIndex((M) => {
          const G = M.getBoundingClientRect();
          return v < G.top + G.height / 2;
        });
        C < 0 && (C = xe.length), te(pe, xe[C] || null, C);
      } else te(null);
      c(pe);
    }, Dn = () => {
      if (K) return K.aim();
      if (ee) {
        const w = ee.getBoundingClientRect();
        let P = v - l / 2;
        return z && (P = P * 0.6 + z.getBoundingClientRect().top * 0.4), { x: w.left, y: P };
      }
      return { x: h - b, y: v - L };
    }, Rt = (w, P, Y, ie) => {
      e.style.transform = "translate(" + q + "px," + $ + "px) rotate(" + w + "deg) rotate(" + P + "rad) scale(" + Y + "," + ie + ") rotate(" + -P + "rad)";
    }, Hn = () => {
      if (oe = requestAnimationFrame(Hn), !V) {
        const C = h - n, M = v - i, G = Math.min(Math.hypot(C, M) / g, 1);
        q = t.left + C * 0.35, $ = t.top + M * 0.35, Rt(0, Math.atan2(M, C), 1 + 0.155 * G, 1 - 0.1 * G);
        return;
      }
      const w = Dn();
      if (!p) {
        q = w.x, $ = w.y, Rt(0, 0, 1, 1), K && (cancelAnimationFrame(oe), K.done());
        return;
      }
      const P = K ? K.k : 0.17, Y = K ? K.d : 0.7;
      k = (k + (w.x - q) * P) * Y, B = (B + (w.y - $) * P) * Y, q += k, $ += B;
      const ie = Math.hypot(k, B), pe = Math.min(ie / 48, 1), xe = ee || K ? 0 : Math.max(-5, Math.min(5, k * 0.32));
      Rt(xe, Math.atan2(B, k), 1 + 0.1 * pe, 1 - 0.063 * pe), K && ie < 0.15 && Math.hypot(w.x - q, w.y - $) < 0.6 && (cancelAnimationFrame(oe), K.done());
    }, qn = setInterval(() => {
      if (!o || K) return;
      const w = o.getBoundingClientRect(), P = 64, Y = v < w.top + P ? -(w.top + P - v) / 4 : v > w.bottom - P ? (v - (w.bottom - P)) / 4 : 0;
      Y && (o.scrollTop += Math.max(-18, Math.min(18, Y)), ne());
    }, 30);
    oe = requestAnimationFrame(Hn);
    let nn = !1;
    const Ye = (w, P) => {
      if (nn) return;
      nn = !0, cancelAnimationFrame(oe);
      const Y = z ? z.offsetHeight : l;
      !w && z && (z.remove(), z = null), w ? s(w, P, Y) : u();
    };
    return {
      move(w, P) {
        h = w, v = P, !V && Math.hypot(h - n, v - i) > g && (V = !0, k = (h - n) * 0.085, B = (v - i) * 0.085), V && ne();
      },
      drop(w) {
        clearInterval(qn);
        const P = ee, Y = ae;
        if (!w && P && z) {
          const ie = z;
          K = { k: 0.24, d: 0.62, aim: () => {
            const pe = ie.getBoundingClientRect();
            return { x: pe.left, y: pe.top };
          }, done: () => Ye(P, Y) }, setTimeout(() => Ye(P, Y), 650), p || (cancelAnimationFrame(oe), Ye(P, Y));
          return;
        }
        te(null), c(null), K = { k: 0.2, d: 0.66, aim: () => {
          const ie = d();
          return { x: ie.left, y: ie.top };
        }, done: () => Ye(null) }, setTimeout(() => Ye(null), 650), p || (cancelAnimationFrame(oe), Ye(null));
      }
    };
  }
  function $n(e, t) {
    let n = !1;
    e.addEventListener("click", (i) => {
      if (n) {
        n = !1, i.preventDefault();
        return;
      }
      if (zt()) {
        ua(t);
        return;
      }
      const o = a("strengthList"), r = ra(t, o, Dt(o).arr.length, 0);
      r == null || r.scrollIntoView({ block: "nearest", behavior: qe() ? "auto" : "smooth" });
    }), e.addEventListener("pointerdown", (i) => {
      if (i.button !== void 0 && i.button !== 0) return;
      const o = i.pointerId, r = i.clientX, d = i.clientY;
      let s = null, u = !1;
      try {
        e.setPointerCapture(o);
      } catch {
      }
      const m = (v) => {
        if (v.pointerId === o) {
          if (v.pointerType === "mouse" && v.buttons === 0) {
            h(!1);
            return;
          }
          if (!s) {
            if (Math.hypot(v.clientX - r, v.clientY - d) < 6) return;
            s = zo(e, t, r, d);
          }
          s.move(v.clientX, v.clientY);
        }
      }, p = (v) => {
        v.pointerId === o && h(!1);
      }, l = (v) => {
        v.pointerId === o && h(!0);
      }, b = () => h(!1), L = () => h(!0), g = (v) => {
        v.key === "Escape" && s && (v.preventDefault(), v.stopPropagation(), h(!0));
      };
      function h(v) {
        if (!u && (u = !0, window.removeEventListener("pointermove", m, !0), window.removeEventListener("pointerup", p, !0), window.removeEventListener("pointercancel", l, !0), window.removeEventListener("keydown", g, !0), window.removeEventListener("blur", L), e.removeEventListener("lostpointercapture", b), s)) {
          const q = s;
          s = null, n = !0, setTimeout(() => {
            n = !1;
          }, 0), q.drop(v);
        }
      }
      window.addEventListener("pointermove", m, !0), window.addEventListener("pointerup", p, !0), window.addEventListener("pointercancel", l, !0), window.addEventListener("keydown", g, !0), window.addEventListener("blur", L), e.addEventListener("lostpointercapture", b);
    });
  }
  const qt = (so = window.matchMedia) == null ? void 0 : so.call(window, "(max-width: 620px)");
  function zt() {
    var e;
    return !!((e = window.matchMedia) != null && e.call(window, "(max-width: 620px)").matches);
  }
  const ca = (e) => e.charAt(0).toUpperCase() + e.slice(1), mn = (e) => e.kind === "rest" ? "rest" : e.kind === "video" ? "video" : "movement";
  let Qn = null, X = null;
  function gn(e, t, n, i) {
    he(), a("sheetTitle").textContent = e;
    const o = a("sheetBody");
    o.innerHTML = "", o.appendChild(t), Qn = n || null, a("sheet").setAttribute("aria-hidden", "false"), a("sheetScrim").classList.add("open"), a("sheet").classList.add("open"), setTimeout(() => {
      if (!a("sheet").classList.contains("open") || !o.contains(t)) return;
      const r = i ? o.querySelector("input[data-f=url],input[data-f=name]") : o.querySelector("button,input,select");
      r == null || r.focus({ preventScroll: !0 });
    }, qe() ? 0 : 360);
  }
  function he() {
    const e = a("sheet");
    if (!e.classList.contains("open")) return;
    e.classList.remove("open"), a("sheetScrim").classList.remove("open"), e.setAttribute("aria-hidden", "true"), e.contains(x.activeElement) && x.activeElement.blur();
    const t = Qn;
    Qn = null, t == null || t(), setTimeout(ni, 0);
  }
  a("sheetScrim").addEventListener("click", he), a("sheet").addEventListener("keydown", (e) => {
    e.key === "Escape" && (e.preventDefault(), he());
  });
  function pa(e, t) {
    const n = Kn(e, t.indexOf(e), {
      sheet: !0,
      isNew: !1,
      onSaved() {
        he(), _(), j(ca(mn(e)) + " updated");
      },
      onCancel: he,
      onHide() {
        e.hidden = !e.hidden, he(), _(), j((e.hidden ? "Hidden: " : "Showing: ") + e.name);
      },
      onRemove() {
        he();
        const i = t.indexOf(e);
        i < 0 || (t.splice(i, 1), _(), j("Removed " + e.name, { label: "Undo", run: () => {
          t.splice(Math.min(i, t.length), 0, e), _();
        } }));
      }
    });
    gn("Edit " + mn(e), n, null, !1);
  }
  function _o() {
    const e = document.createElement("div");
    e.className = "sheetChoices", [["movement", "●", "Movement", "Name it, then drag it into place"], ["rest", "Ⅱ", "Rest", "A pause between movements"], ["video", "▶", "Video", "Paste a YouTube link"]].forEach(([t, n, i, o]) => {
      const r = document.createElement("button");
      r.type = "button", r.className = "sheetChoice", r.innerHTML = '<span class="timeIcon" aria-hidden="true">' + n + "</span><span><strong>" + i + "</strong><small>" + o + "</small></span>", r.addEventListener("click", () => ua(t)), e.appendChild(r);
    }), gn("Add to the move", e, null, !1);
  }
  function ua(e) {
    X && vn();
    const t = na(e, a("strengthList")), n = Kn(t, -1, {
      sheet: !0,
      isNew: !0,
      onSaved() {
        he(), Oo(t, e);
      },
      onCancel: he
    });
    gn("New " + mn(t), n, null, !0);
  }
  const hn = a("workoutModal").querySelector(".modalStatic"), ma = { parent: hn.parentNode, next: hn.nextSibling };
  function Go() {
    const e = document.createElement("div");
    e.className = "sheetSetup", e.appendChild(hn);
    const t = document.createElement("button");
    t.type = "button", t.className = "primary sheetDone", t.textContent = "Done", t.addEventListener("click", he), e.appendChild(t), gn("Setup", e, () => {
      ma.parent.insertBefore(hn, ma.next), ei();
    }, !1);
  }
  function ei() {
    var t, n;
    const e = a("setupSummaryName");
    e && (e.textContent = (((t = a("workoutNameInput")) == null ? void 0 : t.value) || "").trim() || ((n = E[R]) == null ? void 0 : n.name) || "Move", a("setupSummaryMeta").textContent = Ui.textContent);
  }
  a("setupSummary").addEventListener("click", Go), a("addFab").addEventListener("click", _o);
  function ga() {
    const e = a("strengthList");
    return Jn(e) || e.closest(".exerciseScroller");
  }
  function ti() {
    const e = a("strengthList").getBoundingClientRect(), t = (ga() || a("strengthList")).getBoundingClientRect(), n = (X == null ? void 0 : X.ghost.offsetHeight) || 64;
    return { left: e.left, top: Math.max(t.top + 12, Math.min(t.bottom - n - 96, t.top + t.height * 0.55 - n / 2)), width: e.width, height: n };
  }
  function Oo(e, t) {
    var s;
    const n = da(t, [e.name || sa[t][0], "Drag into place"]);
    n.classList.add("overList", "hovering"), n.setAttribute("aria-label", (e.name || "New step") + ". Drag it into place in the list, or add it at the end.");
    const i = document.createElement("span");
    i.className = "addGhostActions", i.innerHTML = '<button class="hideBtn" type="button" data-a="end">Add at end</button><button class="hideBtn ghostDiscard" type="button" data-a="discard" aria-label="Discard ' + F(e.name) + '">✕</button>', n.appendChild(i), X = { item: e, type: t, ghost: n };
    const o = ((s = x.querySelector(".moveList .moveRow:not(.editing)")) == null ? void 0 : s.offsetHeight) || 64;
    n.style.width = a("strengthList").getBoundingClientRect().width + "px", n.style.height = o + "px";
    const r = ti(), d = le.querySelector(".modal").getBoundingClientRect().bottom;
    n.style.transform = "translate(" + r.left + "px," + d + "px)", n.getBoundingClientRect(), qe() || (n.classList.add("rising"), setTimeout(() => n.classList.remove("rising"), 650)), n.style.transform = "translate(" + r.left + "px," + r.top + "px)", i.querySelector("[data-a=end]").addEventListener("click", vn), i.querySelector("[data-a=discard]").addEventListener("click", Vo), n.addEventListener("pointerdown", Wo);
  }
  function Wo(e) {
    if (!X || e.target.closest("button") || e.button !== void 0 && e.button !== 0) return;
    e.preventDefault();
    const { item: t, ghost: n } = X, i = e.pointerId;
    try {
      n.setPointerCapture(i);
    } catch {
    }
    n.classList.remove("hovering", "rising"), n.classList.add("held");
    const o = n.getBoundingClientRect(), r = ga(), d = la({
      ghost: n,
      origin: { left: o.left, top: o.top, width: o.width, height: o.height },
      sx: e.clientX,
      sy: e.clientY,
      scroller: r,
      column: a("strengthList").closest(".exerciseScroller,.createFlow") || r,
      rowLook: !0,
      home: ti,
      onDrop: (h, v, q) => {
        X = null, Ht(n), ha(t, h, v, q);
      },
      onReturn: () => {
        n.classList.remove("held"), n.classList.add("hovering");
      }
    });
    let s = !1;
    const u = (h) => {
      if (h.pointerId === i) {
        if (h.pointerType === "mouse" && h.buttons === 0) {
          g(!1);
          return;
        }
        d.move(h.clientX, h.clientY);
      }
    }, m = (h) => {
      h.pointerId === i && g(!1);
    }, p = (h) => {
      h.pointerId === i && g(!0);
    }, l = () => g(!1), b = () => g(!0), L = (h) => {
      h.key === "Escape" && (h.preventDefault(), g(!0));
    };
    function g(h) {
      s || (s = !0, window.removeEventListener("pointermove", u, !0), window.removeEventListener("pointerup", m, !0), window.removeEventListener("pointercancel", p, !0), window.removeEventListener("keydown", L, !0), window.removeEventListener("blur", b), n.removeEventListener("lostpointercapture", l), d.drop(h));
    }
    window.addEventListener("pointermove", u, !0), window.addEventListener("pointerup", m, !0), window.addEventListener("pointercancel", p, !0), window.addEventListener("keydown", L, !0), window.addEventListener("blur", b), n.addEventListener("lostpointercapture", l);
  }
  function ha(e, t, n, i) {
    const o = Dt(t);
    e.kind !== "rest" && e.kind !== "video" && (e.kind = o.kind, o.group && (!e.group || e.group === "Movement") && (e.group = o.group)), o.arr.splice(Math.max(0, Math.min(n, o.arr.length)), 0, e), aa(t.closest(".exerciseScroller,.createStepSlot") || t, () => _()), oa(t.querySelector('.moveRow[data-id="' + e.id + '"]'), i), j(ca(mn(e)) + " added");
  }
  function vn() {
    var i;
    if (!X) return;
    const { item: e, ghost: t } = X;
    X = null, Ht(t);
    const n = a("strengthList");
    ha(e, n, Dt(n).arr.length, 0), (i = n.querySelector('.moveRow[data-id="' + e.id + '"]')) == null || i.scrollIntoView({ block: "nearest", behavior: qe() ? "auto" : "smooth" });
  }
  function Vo() {
    if (!X) return;
    const e = X.ghost;
    X = null, Ht(e), j("Discarded");
  }
  function va() {
    X && (X.ghost.remove(), X = null);
  }
  window.addEventListener("resize", () => {
    if (X != null && X.ghost.classList.contains("hovering")) {
      const e = ti();
      X.ghost.style.width = e.width + "px", X.ghost.style.transform = "translate(" + e.left + "px," + e.top + "px)";
    }
  }), (lo = qt == null ? void 0 : qt.addEventListener) == null || lo.call(qt, "change", () => {
    he(), X && !zt() && vn(), Xn();
  });
  {
    const e = a("workoutModal").querySelector(".modal");
    e.addEventListener("scroll", () => {
      (e.scrollTop || e.scrollLeft) && (e.scrollTop = 0, e.scrollLeft = 0);
    });
  }
  function ni() {
    const e = a("workoutModal"), t = window.visualViewport;
    if (!(t && e.classList.contains("open") && zt() && (t.height < window.innerHeight - 1 || t.offsetTop > 0))) {
      ["top", "bottom", "height"].forEach((i) => e.style.removeProperty(i));
      return;
    }
    e.style.top = t.offsetTop + "px", e.style.bottom = "auto", e.style.height = t.height + "px";
  }
  (co = window.visualViewport) == null || co.addEventListener("resize", ni), (po = window.visualViewport) == null || po.addEventListener("scroll", ni);
  function ii() {
    me.length > 0;
    const e = a("addMovementBtn"), t = a("addRestBtn");
    e && (e.innerHTML = Pt + "<span>Add movement</span>"), t && (t.innerHTML = Pt + "<span>Add rest</span>");
    const n = a("addVideoBtn");
    n && (n.innerHTML = Pt + "<span>Add video</span>");
  }
  function _t() {
    const e = a("useGlobalTiming").checked, t = a("addMovementDuration"), n = a("addMovementUnit");
    t.disabled = e, n.disabled = e, t.parentElement.style.opacity = e ? ".38" : "1", a("globalTimingValue").textContent = "Use global timing · " + se(I.value);
    const i = a("useGlobalRestTiming").checked, o = a("addRestDuration"), r = a("addRestUnit");
    o.disabled = i, r.disabled = i, o.parentElement.style.opacity = i ? ".38" : "1", a("globalRestTimingValue").textContent = "Use global timing · " + se(D.value);
  }
  let fa = "movement";
  function jo(e) {
    fa = e;
    const t = a("movementFields"), n = a("restFields");
    t.hidden = e !== "movement", n.hidden = e !== "rest", a("movementCreatorHeading").textContent = "Add movement", a("movementCreator").setAttribute("aria-label", "Create movement"), _t();
  }
  function ai() {
    E[R];
    const e = Z ? !0 : a("useGlobalTiming").checked, t = e ? Number(I.value) : cn(
      a("addMovementDuration").value,
      a("addMovementUnit").value
    ), n = Z ? !0 : a("useGlobalRestTiming").checked, i = n ? Number(D.value) : cn(
      a("addRestDuration").value,
      a("addRestUnit").value
    );
    if (fa === "rest") {
      const o = a("addRestTitle").value.trim() || "Rest", r = a("addRestGroup").value.trim() || "Rest";
      me.push({
        id: "rest-" + Date.now(),
        name: o,
        group: r,
        kind: "rest",
        hidden: !1,
        useGlobalTiming: n,
        duration: Math.max(5, i || Number(D.value))
      }), _(), a("movementCreator").hidden = !0, a("addRestTitle").value = "Rest", a("addRestGroup").value = "Rest", j("Rest added"), Z && (it("movements"), He());
    } else {
      const o = a("addMovementInput").value.trim();
      if (!o) return;
      const r = a("addMovementGroup").value.trim() || "Movement";
      me.push({
        id: "movement-" + Date.now(),
        name: o,
        group: r,
        kind: "work",
        hidden: !1,
        useGlobalTiming: e,
        duration: Math.max(5, t || Number(I.value))
      }), a("addMovementInput").value = "", a("addMovementGroup").value = "", _(), a("movementCreator").hidden = !0, j("Movement added"), Z && (it("movements"), He());
    }
    ii();
  }
  let oi = null;
  function j(e, t) {
    const n = a("toast");
    n.innerHTML = "";
    const i = document.createElement("span");
    if (i.textContent = e, n.appendChild(i), t) {
      const o = document.createElement("button");
      o.type = "button", o.className = "toastAction", o.textContent = t.label, o.addEventListener("click", () => {
        t.run(), n.classList.remove("show", "withAction"), clearTimeout(oi);
      }), n.appendChild(o);
    }
    n.classList.toggle("withAction", !!t), n.classList.add("show"), clearTimeout(oi), oi = setTimeout(() => n.classList.remove("show", "withAction"), t ? 5e3 : 2200);
  }
  const Yo = ["Terrible", "Poor", "Meh", "Okay", "Good", "Great"], Uo = ["#6E63A8", "#5878A8", "#6F8B8A", "#5F9B72", "#D5A53E", "#D56B54"];
  function ba(e) {
    return Math.max(0, Math.min(5, Math.floor(Number(e) / 100 * 6)));
  }
  function rt(e, t) {
    return Yo[ba(t)];
  }
  function Ko(e) {
    return Uo[ba(e)];
  }
  function ve(e) {
    return e.getFullYear() + "-" + String(e.getMonth() + 1).padStart(2, "0") + "-" + String(e.getDate()).padStart(2, "0");
  }
  function Re() {
    return { morning: H().morningTime || "08:00", evening: H().eveningTime || "19:00" };
  }
  function st(e) {
    const [t, n] = String(e).split(":").map(Number);
    return (t || 0) * 60 + (n || 0);
  }
  function Zo(e) {
    const t = Re();
    return e.getHours() * 60 + e.getMinutes() >= st(t.evening) ? "evening" : "morning";
  }
  function fn(e, t) {
    return A.checkins.find((n) => n.date === e && n.slot === t);
  }
  function bn(e) {
    return !!(e && e.mood != null && e.energy != null);
  }
  function xn() {
    const e = /* @__PURE__ */ new Date(), t = ve(e), n = Zo(e), i = Re(), o = e.getHours() * 60 + e.getMinutes();
    return n === "morning" && o < st(i.morning) || bn(fn(t, n)) ? null : n;
  }
  const ze = a("checkinModal"), _e = a("checkinTab"), Xo = a("checkinBadge"), Ge = { mood: { input: a("moodInput"), fill: a("moodFill") }, energy: { input: a("energyLevelInput"), fill: a("energyLevelFill") } };
  function xa(e) {
    const { input: t, fill: n } = Ge[e];
    n.style.width = t.value + "%", t.setAttribute("aria-valuetext", rt(e, t.value));
  }
  Object.keys(Ge).forEach((e) => Ge[e].input.addEventListener("input", () => xa(e)));
  let Ee = null;
  function ya() {
    const e = Re(), t = /* @__PURE__ */ new Date(), n = t.getHours() * 60 + t.getMinutes();
    return n < st(e.morning) ? "Next check-in at " + e.morning : n < st(e.evening) ? "Next check-in at " + e.evening : "Next check-in tomorrow at " + e.morning;
  }
  function Jo() {
    const e = Re(), t = /* @__PURE__ */ new Date(), n = t.getHours() * 60 + t.getMinutes(), i = (o, r) => {
      const [d, s] = o.split(":").map(Number);
      return new Date(t.getFullYear(), t.getMonth(), t.getDate() + (r ? 1 : 0), d, s);
    };
    return n < st(e.morning) ? { date: i(e.morning), time: e.morning } : n < st(e.evening) ? { date: i(e.evening), time: e.evening } : { date: i(e.morning, !0), time: e.morning };
  }
  let ri = null, si = null;
  function wa() {
    if (xn()) {
      yn(), Xe();
      return;
    }
    const e = Jo(), t = Math.max(0, Math.round((e.date - Date.now()) / 1e3)), n = Math.floor(t / 3600), i = Math.floor(t % 3600 / 60), o = t % 60;
    a("peekCountdown").textContent = n + ":" + String(i).padStart(2, "0") + ":" + String(o).padStart(2, "0"), a("peekAt").textContent = "Available at " + e.time;
  }
  function $o() {
    wa(), _e.classList.add("peek"), clearInterval(si), si = setInterval(wa, 1e3), clearTimeout(ri), ri = setTimeout(yn, 6e3);
  }
  function yn() {
    _e.classList.remove("peek"), clearInterval(si), clearTimeout(ri);
  }
  function ka() {
    const e = xn();
    if (!e) {
      _e.classList.contains("peek") ? yn() : $o();
      return;
    }
    Ee = { date: ve(/* @__PURE__ */ new Date()), slot: e };
    const n = fn(Ee.date, e), i = A.checkins.find((r) => bn(r));
    Object.keys(Ge).forEach((r) => {
      Ge[r].input.value = (n == null ? void 0 : n[r]) ?? (i == null ? void 0 : i[r]) ?? 50, xa(r);
    });
    const o = Re()[e];
    a("checkinEyebrow").textContent = (e === "morning" ? "Morning" : "Evening") + " · " + o, a("checkinTitle").textContent = e === "morning" ? "Morning check-in" : "Evening check-in", ze.classList.add("open"), ze.setAttribute("aria-hidden", "false"), requestAnimationFrame(() => Ge.mood.input.focus());
  }
  function Gt() {
    ze.classList.remove("open"), ze.setAttribute("aria-hidden", "true"), Ee && (Ot = Ee.date + "-" + Ee.slot);
    try {
      localStorage.setItem("move-assistant-dismissed", Ot);
    } catch {
    }
    Ee = null, Xe();
  }
  function Qo() {
    if (!Ee) return;
    if (bn(fn(Ee.date, Ee.slot))) {
      Gt();
      return;
    }
    const { date: e, slot: t } = Ee;
    let n = fn(e, t);
    n || (n = { date: e, slot: t }, A.checkins.unshift(n), A.checkins = A.checkins.slice(0, 2e3)), n.mood = Number(Ge.mood.input.value), n.energy = Number(Ge.energy.input.value), n.scale = 100, n.at = (/* @__PURE__ */ new Date()).toISOString(), Te(), y.fire("checkin", { slot: t, mood: n.mood, energy: n.energy, mood_label: rt("mood", n.mood), energy_label: rt("energy", n.energy) }), j((t === "morning" ? "Morning" : "Evening") + " check-in saved"), Gt(), wn(), Wt(), nt(), De();
  }
  let Ot = "";
  try {
    Ot = localStorage.getItem("move-assistant-dismissed") || "";
  } catch {
  }
  function Xe() {
    const e = xn();
    Xo.hidden = !e, _e.hidden = !e, e || yn(), _e.classList.toggle("due", !!e), _e.setAttribute("aria-label", e ? (e === "morning" ? "Morning" : "Evening") + " check-in is due" : ya()), _e.title = e ? "Check in now" : ya();
  }
  function di() {
    Xe();
    const e = xn();
    !e || ze.classList.contains("open") || H().checkinAutoOpen !== !1 && (!at.home.classList.contains("active") || le.classList.contains("open") || Ot !== ve(/* @__PURE__ */ new Date()) + "-" + e && ka());
  }
  _e.addEventListener("click", ka), a("checkinLater").addEventListener("click", Gt), a("checkinSave").addEventListener("click", Qo), ze.addEventListener("click", (e) => {
    e.target === ze && Gt();
  }), ze.addEventListener("keydown", (e) => {
    e.key === "Escape" && (e.preventDefault(), Gt());
  }), setInterval(di, 3e4);
  function wn() {
    const e = ve(/* @__PURE__ */ new Date()), t = (n) => A.checkins.find((i) => i.date === e && i[n] != null);
    [["mood", "moodMeta"], ["energy", "energyLevelMeta"]].forEach(([n, i]) => {
      const o = t(n);
      a(i).textContent = o ? rt(n, o[n]) : "—";
    });
  }
  function Wt() {
    const e = a("feelCard");
    if (!e) return;
    const t = /* @__PURE__ */ new Date(), n = new Date(t.getFullYear(), t.getMonth(), t.getDate() - (t.getDay() + 6) % 7), i = [...Array(7)].map((m, p) => {
      const l = new Date(n.getFullYear(), n.getMonth(), n.getDate() + p), b = ve(l), L = A.checkins.filter((h) => h.date === b), g = (h) => {
        const v = L.map((q) => q[h]).filter((q) => q != null);
        return v.length ? v.reduce((q, $) => q + $, 0) / v.length : null;
      };
      return { d: l, key: b, mood: g("mood"), energy: g("energy"), count: L.filter(bn).length, future: l > t && b !== ve(t) };
    }), o = (m) => {
      const p = i.map((l) => l[m]).filter((l) => l != null);
      return p.length ? p.reduce((l, b) => l + b, 0) / p.length : null;
    }, r = o("mood"), d = o("energy"), s = (m, p) => '<div class="feelMeter"><div class="feelMeterTop"><span>' + m + "</span><span>" + (p == null ? "—" : F(rt("", p))) + '</span></div><div class="feelTrack"><span style="width:' + (p == null ? 0 : Math.max(4, p)) + "%;background:" + (p == null ? "transparent" : Ko(p)) + '"></span></div></div>', u = i.filter((m) => m.mood != null && m.energy != null).sort((m, p) => p.mood + p.energy - (m.mood + m.energy))[0];
    e.innerHTML = '<div class="feelTop"><div class="feelSummary"><div class="feelHeadline">' + (r == null ? "No check-ins yet" : F(rt("", (r + d) / 2))) + '</div><div class="weekCopy">' + (r == null ? "Your first check-in will appear here." : "on average this week" + (u ? " · best day " + F(new Intl.DateTimeFormat(void 0, { weekday: "long" }).format(u.d)) : "")) + '</div></div></div><div class="feelDays">' + i.map(
      (m) => '<div class="weekChip feelDay' + (m.future ? " future" : "") + (m.key === ve(t) ? " today" : "") + '"><div class="weekChipTop"><strong>' + F(new Intl.DateTimeFormat(void 0, { weekday: "short" }).format(m.d)) + "</strong>" + (m.count >= 2 ? '<span class="weekTick">✓</span>' : '<span class="feelDots">' + "●".repeat(m.count) + "</span>") + "</div>" + s("Mood", m.mood) + s("Energy", m.energy) + "</div>"
    ).join("") + "</div>";
  }
  const kn = a("upcomingCountSetting");
  kn.addEventListener("change", () => {
    ot = kn.value === "all" ? "all" : Number(kn.value), Da();
  });
  const Vt = a("tempoRevealBtn"), li = a("tempoExperiment"), Me = a("tempoQuad"), dt = a("tempoDot"), er = a("tempoEstimate"), tr = a("tempoReadout");
  let lt = { x: 0.5, y: 0.5 }, jt = !1, Sn = { total: 20, work: 45, rest: 15 };
  function ci(e, t, n, i) {
    const o = Math.max(t, Math.min(n, e));
    return Math.round((o - t) / i) * i + t;
  }
  function nr(e, t) {
    const n = (e - 0.5) * 2, i = (t - 0.5) * 2, o = ci(
      Sn.total + n * 5 + i * 8,
      Number(O.min),
      Number(O.max),
      Number(O.step)
    ), r = ci(
      Sn.work + n * 10 + i * 8,
      Number(I.min),
      Number(I.max),
      Number(I.step)
    ), d = ci(
      Sn.rest + n * 6 + i * 6,
      Number(D.min),
      Number(D.max),
      Number(D.step)
    );
    return O.value = o, I.value = r, D.value = d, ji.textContent = r + " sec", Yi.textContent = d + " sec", ln(), { total: o, work: r, rest: d };
  }
  function pi(e, t) {
    const n = e < 0.34 ? "Low" : e > 0.66 ? "Hard" : "Medium", i = t < 0.34 ? "Fast" : t > 0.66 ? "Slow" : "Balanced", o = nr(e, t);
    tr.textContent = n + " + " + i, er.textContent = o.total + " min", Me.setAttribute("aria-valuetext", n + " and " + i + ", estimated " + o.total + " minutes");
  }
  function ui(e) {
    const t = Me.getBoundingClientRect(), n = Math.max(0, Math.min(1, (e.clientX - t.left) / t.width)), i = Math.max(0, Math.min(1, (e.clientY - t.top) / t.height));
    lt = { x: n, y: i }, dt.style.left = n * 100 + "%", dt.style.top = i * 100 + "%", pi(n, i);
  }
  Vt.addEventListener("click", () => {
    const e = li.hidden;
    li.hidden = !e, Vt.setAttribute("aria-expanded", e ? "true" : "false"), Vt.textContent = e ? "Now close this" : "Don’t try this!", e && (Sn = {
      total: Number(O.value),
      work: Number(I.value),
      rest: Number(D.value)
    }, lt = { x: 0.5, y: 0.5 }, dt.style.left = "50%", dt.style.top = "50%", pi(lt.x, lt.y));
  }), x.querySelectorAll("[data-feedback-rating]").forEach((e) => e.addEventListener("click", () => {
    Number(e.dataset.feedbackRating), x.querySelectorAll("[data-feedback-rating]").forEach((t) => t.classList.toggle("selected", t === e));
  }));
  const Cn = a("testingFeedbackForm"), Sa = a("testingFeedbackThanks"), ir = a("testingFeedbackAgain");
  Cn.addEventListener("submit", (e) => {
    e.preventDefault(), Cn.hidden = !0, Sa.hidden = !1, j("Feedback captured for prototype");
  }), ir.addEventListener("click", (e) => {
    e.preventDefault(), Cn.reset(), x.querySelectorAll("[data-feedback-rating]").forEach((t) => t.classList.remove("selected")), Sa.hidden = !0, Cn.hidden = !1;
  }), Me.addEventListener("pointerdown", (e) => {
    var t;
    jt = !0, ui(e);
    try {
      (t = Me.setPointerCapture) == null || t.call(Me, e.pointerId);
    } catch {
    }
  }), Me.addEventListener("pointermove", (e) => {
    jt && ui(e);
  }), Me.addEventListener("pointerup", (e) => {
    jt && (jt = !1, ui(e), _());
  }), Me.addEventListener("pointercancel", () => jt = !1), Me.addEventListener("keydown", (e) => {
    let { x: t, y: n } = lt, i = !0;
    e.key === "ArrowLeft" ? t -= 0.05 : e.key === "ArrowRight" ? t += 0.05 : e.key === "ArrowUp" ? n -= 0.05 : e.key === "ArrowDown" ? n += 0.05 : i = !1, i && (e.preventDefault(), t = Math.max(0, Math.min(1, t)), n = Math.max(0, Math.min(1, n)), lt = { x: t, y: n }, dt.style.left = t * 100 + "%", dt.style.top = n * 100 + "%", pi(t, n), _());
  });
  const le = a("workoutModal");
  let Yt = null;
  function ct(e) {
    return e.map((t) => ({ ...t }));
  }
  function ar() {
    const e = E[R];
    return {
      key: R,
      profile: e ? JSON.parse(JSON.stringify(e)) : null,
      warmup: ct(ye),
      strength: ct(me),
      cooldown: ct(we),
      total: Number(O.value),
      work: Number(I.value),
      rest: Number(D.value),
      rounds: Number(Ue.value) || 1
    };
  }
  function Ca(e = !1) {
    Z = !!e, ge = null, ke = null, he(), va(), Yt = ar(), a("moveEditorTitle").textContent = Z ? "Create new move" : "Edit move", a("moveEditorSubtitle").textContent = "Build the sequence first, then set timing, then finish the move.", a("moveEditorSubtitle").hidden = !Z, a("warmupRow").hidden = Z, a("deleteMoveOpen").hidden = Z;
    const t = a("createMoveOptions");
    t.hidden = !Z;
    {
      const n = E[R];
      a("includeWarmupPreset").checked = !!(n != null && n.includeWarmup), a("includeCooldownPreset").checked = !!(n != null && n.includeCooldown);
    }
    if (Ta(), Z) {
      a("useGlobalTiming").checked = !0, a("useGlobalRestTiming").checked = !0;
      const n = E[R];
      Yn((n == null ? void 0 : n.preset) || "movement", !1);
    }
    a("movementCreator").hidden = !0, jo("movement"), ii(), _t(), li.hidden = !0, Vt.setAttribute("aria-expanded", "false"), Vt.textContent = "Don’t try this!", le.classList.toggle("createMode", Z), le.querySelector(".modal").classList.toggle("createMode", Z), le.classList.add("open"), le.setAttribute("aria-hidden", "false"), Z && So();
  }
  function or() {
    const e = E[R];
    return e != null && e.customSequence ? !!e.includeWarmup : !(e != null && e.warmupOff);
  }
  function Ta() {
    const e = or(), t = a("warmupSwitch");
    t.classList.toggle("on", e), t.setAttribute("aria-checked", String(e));
  }
  a("warmupSwitch").addEventListener("click", () => {
    const e = E[R];
    e && (e.customSequence ? (a("includeWarmupPreset").checked = !e.includeWarmup, Un()) : (e.warmupOff = !e.warmupOff, _()), Ta());
  });
  function Tn() {
    he(), va(), ["top", "bottom", "height"].forEach((e) => a("workoutModal").style.removeProperty(e)), ke = null, ge = null, le.classList.contains("createMode") && Co(), le.classList.remove("createMode"), le.querySelector(".modal").classList.remove("createMode"), le.classList.remove("open"), le.setAttribute("aria-hidden", "true");
  }
  function La() {
    if (!Yt) return;
    const e = Yt;
    e.profile && (E[e.key] = JSON.parse(JSON.stringify(e.profile))), R = e.key, ye = ct(e.warmup), me = ct(e.strength), we = ct(e.cooldown), O.value = e.total, I.value = e.work, D.value = e.rest, Ue.value = e.rounds || 1;
    const t = E[R];
    if (t) {
      x.querySelectorAll(".workoutPanel[data-workout]").forEach((i) => i.classList.toggle("active", i.dataset.workout === R));
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
    _();
  }
  a("cancelWorkoutEdit").addEventListener("click", () => {
    if (Z) {
      const e = R;
      delete E[e], Z = !1, Ke = null, Le(A.order.find((t) => E[t]) || Object.keys(E)[0]);
    } else
      La();
    Tn();
  }), a("saveWorkoutEdit").addEventListener("click", () => {
    he(), X && vn();
    const e = E[R], t = N.value.trim() || "New move";
    if (e && (e.name = t), un(), ge = null, _(), Z && e)
      Vn(R, e), x.querySelectorAll(".workoutPanel[data-workout]").forEach((n) => n.classList.toggle("active", n.dataset.workout === R)), Z = !1, Ke = null, A.order.includes(R) || A.order.push(R), j("Move created");
    else {
      const n = x.querySelector(".workoutPanel.active");
      if (n) {
        const i = n.querySelector(".workoutName");
        i && (i.textContent = t);
        const o = n.querySelector(".panelCollapsedText");
        o && (o.textContent = t);
      }
      j("Move saved");
    }
    Yt = null, Tn(), Te();
  }), le.addEventListener("click", (e) => {
    if (e.target === le) {
      if (Z) {
        const t = R;
        delete E[t], Z = !1, Ke = null, Le(A.order.find((n) => E[n]) || Object.keys(E)[0]);
      } else
        La();
      Tn();
    }
  }), $n(a("addMovementBtn"), "movement"), $n(a("addRestBtn"), "rest"), $n(a("addVideoBtn"), "video"), a("closeMovementCreator").addEventListener("click", () => {
    a("movementCreator").hidden = !0;
  }), a("useGlobalTiming").addEventListener("change", _t), a("useGlobalRestTiming").addEventListener("change", _t), x.querySelectorAll(".createPresetBtn").forEach((e) => e.addEventListener("click", () => {
    Yn(e.dataset.movePreset, !0), _();
  })), a("includeWarmupPreset").addEventListener("change", Un), a("includeCooldownPreset").addEventListener("change", Un), a("includeWarmupPreset").addEventListener("change", He), a("includeCooldownPreset").addEventListener("change", He), N.addEventListener("input", He), N.addEventListener("input", ei), a("confirmAddMovement").addEventListener("click", ai), a("confirmAddRest").addEventListener("click", ai), a("addMovementInput").addEventListener("keydown", (e) => {
    e.key === "Enter" && ai();
  });
  const Ut = a("countdown"), mi = a("countNum"), Ae = a("countdownPixelCanvas");
  let Kt = null, gi = "appear";
  class rr {
    constructor(t, n, i, o, r, d, s) {
      this.width = t.width, this.height = t.height, this.ctx = n, this.x = i, this.y = o, this.color = r, this.speed = (Math.random() * 0.8 + 0.1) * d, this.size = 0, this.sizeStep = Math.random() * 0.4, this.minSize = 0.5, this.maxSizeInteger = 2, this.maxSize = Math.random() * (this.maxSizeInteger - this.minSize) + this.minSize, this.delay = s, this.counter = 0, this.counterStep = Math.random() * 4 + (this.width + this.height) * 0.01, this.isIdle = !1, this.isReverse = !1, this.isShimmer = !1;
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
  let hi = [], Ea = 1, Ma = 1;
  function Je() {
    const e = parseFloat(getComputedStyle(a("app")).zoom);
    return Number.isFinite(e) && e > 0 ? e : 1;
  }
  function sr() {
    var m;
    if (!Ae) return;
    const e = Je(), t = Math.max(1, window.innerWidth / e), n = Math.max(1, window.innerHeight / e);
    Ea = t, Ma = n;
    const i = Math.min(window.devicePixelRatio || 1, 2);
    Ae.width = Math.floor(t * i), Ae.height = Math.floor(n * i), Ae.style.width = t + "px", Ae.style.height = n + "px";
    const o = Ae.getContext("2d");
    o.setTransform(i, 0, 0, i, 0, 0);
    const r = ["#f2fbff", "#d4effc", "#a9e0fa", "#6cc8f6"], d = 12, s = (m = window.matchMedia) == null ? void 0 : m.call(window, "(prefers-reduced-motion: reduce)").matches, u = s ? 0 : 0.055;
    hi = [];
    for (let p = 0; p < t; p += d)
      for (let l = 0; l < n; l += d) {
        const b = p - t / 2, L = l - n / 2, g = Math.sqrt(b * b + L * L), h = s ? 0 : Math.random() * 75 + g * 0.05, v = new rr({ width: t, height: n }, o, p, l, r[Math.floor(Math.random() * r.length)], u, h);
        v.maxSizeInteger = 4, v.maxSize = Math.random() * 3.2 + 0.8, v.sizeStep = 0.35 + Math.random() * 0.45, hi.push(v);
      }
  }
  function Fa(e) {
    cancelAnimationFrame(Kt), gi = e;
    const t = Ae == null ? void 0 : Ae.getContext("2d");
    if (!t) return;
    function n() {
      t.clearRect(0, 0, Ea, Ma);
      let i = !0;
      hi.forEach((o) => {
        o[gi](), o.isIdle || (i = !1);
      }), gi === "disappear" && i || (Kt = requestAnimationFrame(n));
    }
    Kt = requestAnimationFrame(n);
  }
  function Ln() {
    cancelAnimationFrame(Kt), sr(), Fa("appear"), setTimeout(() => Fa("disappear"), 560);
  }
  window.addEventListener("resize", () => {
    Ut.classList.contains("active") && Ln();
  });
  const Zt = a("pixelTrailCanvas"), pt = Zt.getContext("2d");
  let Be = !0, ut = 0.7, mt = 600, Xt = [], gt = null, Oe = { x: 0, y: 0, ready: !1 };
  function Ra() {
    const e = U.getBoundingClientRect(), t = Je(), n = Math.min(window.devicePixelRatio || 1, 2), i = Math.max(1, e.width / t), o = Math.max(1, e.height / t);
    Zt.width = Math.max(1, Math.floor(i * n)), Zt.height = Math.max(1, Math.floor(o * n)), Zt.style.width = i + "px", Zt.style.height = o + "px", pt.setTransform(n, 0, 0, n, 0, 0);
  }
  function dr(e, t) {
    if (!Be) return;
    const n = performance.now();
    Oe.ready || (Oe = { x: e, y: t, ready: !0 });
    const i = 7;
    for (let o = 1; o <= i; o++) {
      const r = o / i;
      Xt.push({
        x: Oe.x + (e - Oe.x) * r,
        y: Oe.y + (t - Oe.y) * r,
        born: n - (i - o) * 10
      });
    }
    Oe = { x: e, y: t, ready: !0 };
  }
  function En(e) {
    if (gt = null, !J) return;
    if (!at.workout.classList.contains("active")) {
      gt = requestAnimationFrame(En);
      return;
    }
    const t = U.getBoundingClientRect(), n = Je();
    pt.clearRect(0, 0, t.width / n, t.height / n), Be && (Xt = Xt.filter((o) => e - o.born < mt), pt.fillStyle = a("app").classList.contains("light") ? "#03A9F4" : "#f4f4f4", Xt.forEach((o) => {
      const r = (e - o.born) / mt, d = (1 - r) * ut, s = Math.round(o.x / 14) * 14, u = Math.round(o.y / 14) * 14;
      pt.globalAlpha = Math.max(0, d);
      const m = 2 + 5 * (1 - r) * ut;
      pt.fillRect(s - m / 2, u - m / 2, m, m);
    }), pt.globalAlpha = 1), gt = requestAnimationFrame(En);
  }
  U.addEventListener("pointermove", (e) => {
    const t = U.getBoundingClientRect(), n = Je();
    dr((e.clientX - t.left) / n, (e.clientY - t.top) / n);
  }), U.addEventListener("pointerleave", () => Oe.ready = !1), new ResizeObserver(Ra).observe(U), Ra(), gt = requestAnimationFrame(En);
  const We = a("movementRippleCanvas"), ht = We.getContext("2d");
  let $e = !0, vt = null, lr = performance.now();
  function Aa() {
    const e = We.parentElement.getBoundingClientRect(), t = Je(), n = Math.max(1, e.width / t), i = Math.max(1, e.height / t), o = Math.min(window.devicePixelRatio || 1, 2);
    We.width = Math.max(1, Math.floor(n * o)), We.height = Math.max(1, Math.floor(i * o)), We.style.width = n + "px", We.style.height = i + "px", ht.setTransform(o, 0, 0, o, 0, 0);
  }
  function Ba() {
    var e;
    return re || ((e = f[T]) == null ? void 0 : e.kind) === "rest";
  }
  function cr() {
    const e = f[T];
    return Ba() ? 2200 : e ? e.kind === "warmup" || e.kind === "cooldown" ? 2400 : 1350 : 1600;
  }
  function Mn(e) {
    if (vt = null, !J) return;
    if (!at.workout.classList.contains("active")) {
      vt = requestAnimationFrame(Mn);
      return;
    }
    const t = We.parentElement.getBoundingClientRect(), n = Je(), i = Math.max(1, t.width / n), o = Math.max(1, t.height / n);
    if (ht.clearRect(0, 0, i, o), $e) {
      const r = cr(), d = (e - lr) % r / r, s = 15, u = Math.max(8, Math.round(s * o / Math.max(1, i))), m = i / (s + 1), p = o / (u + 1), l = i * 0.5, b = o * 0.52, L = Math.hypot(l, b), h = a("app").classList.contains("light") ? "34,34,34" : "244,244,244";
      for (let v = 1; v <= u; v++)
        for (let q = 1; q <= s; q++) {
          const $ = q * m, k = v * p, B = Math.hypot($ - l, k - b) / L, V = Ba(), ee = V ? Math.exp(-Math.pow((B - (d * 0.82 + 0.08) % 1 * 1.18) * 5.5, 2)) : 0, z = Math.exp(-Math.pow((B - d * 1.25) * 7, 2)), ae = V ? ee : z, oe = V ? 0.5 + 0.5 * Math.sin(d * Math.PI * 2 - B * 3) ** 2 : 0.35 + 0.65 * Math.sin(d * Math.PI * 2 - B * 5) ** 2, K = V ? 1.4 + ae * 4.2 * oe : 1.2 + ae * 5 * oe;
          ht.beginPath(), ht.arc($, k, K, 0, Math.PI * 2), ht.fillStyle = `rgba(${h},${V ? 0.08 + ae * 0.48 : 0.05 + ae * 0.55})`, ht.fill();
        }
    }
    vt = requestAnimationFrame(Mn);
  }
  new ResizeObserver(Aa).observe(We.parentElement), Aa(), vt = requestAnimationFrame(Mn);
  const Jt = a("exerciseTitle"), Ne = a("exerciseMeta"), vi = a("stepLabel"), fi = a("digits"), Na = a("fill"), ft = a("progress"), bi = a("pause"), pr = a("nextName"), ur = a("nextMeta"), mr = a("nextIcon"), Fn = a("skipNextSession");
  let fe = null;
  function be(e) {
    for (let t = Math.max(0, e); t < f.length; t++)
      if (!f[t].sessionHidden) return t;
    return -1;
  }
  function gr() {
    const e = f[T];
    if (!e) return { name: "Complete", meta: "Move finished", icon: "✓" };
    if (re) {
      const i = be(T + 1), o = i >= 0 ? f[i] : null;
      return o ? { name: o.name, meta: yi(o), icon: xi(o) } : { name: "Complete", meta: "Move finished", icon: "✓" };
    }
    if (e.rest > 0) return { name: "Rest", meta: e.rest + " sec · " + (e.roundBreakAfter ? "round " + (e.round + 1) + " next" : "recovery"), icon: "Ⅱ" };
    const t = be(T + 1), n = t >= 0 ? f[t] : null;
    return n ? { name: n.name, meta: yi(n), icon: xi(n) } : { name: "Complete", meta: "Move finished", icon: "✓" };
  }
  function hr() {
    if (!f[T]) return f.length;
    const t = be(T + 1);
    return t < 0 ? f.length : t + 1;
  }
  function xi(e) {
    return e.kind === "video" ? "▶" : e.kind === "cooldown" ? "↘" : e.kind === "warmup" ? "↗" : "●";
  }
  function yi(e) {
    return e.kind === "video" ? "YouTube · " + Nt(e.duration) : e.group + " · " + e.duration + " sec";
  }
  function Rn() {
    return f.length && f[f.length - 1].round || 1;
  }
  function Ia(e) {
    const t = f[e];
    if (!t) return "";
    const n = Rn();
    if (n <= 1) return "Step " + (e + 1) + " of " + f.length;
    if (t.roundBreak) return "Round " + t.round + " of " + n + " · Rest";
    const i = f.filter((o) => o.round === t.round && !o.roundBreak).length;
    return "Round " + t.round + " of " + n + " · Step " + (t.roundIndex + 1) + " of " + i;
  }
  function Pa() {
    return ft.querySelector('[data-step="' + T + '"]');
  }
  function vr() {
    f[T] && Number(ft.dataset.round) !== (f[T].round || 1) && Si(), [...ft.children].forEach((e) => {
      const t = Number(e.dataset.step);
      e.classList.toggle("done", t < T), e.classList.toggle("active", t === T), e.classList.toggle("rewindable", t <= T), e.disabled = t > T, t === T && e.style.setProperty("--segment-progress", "0%");
    }), f[T] && (vi.textContent = Ia(T), et());
  }
  function fr(e) {
    const t = f.indexOf(e);
    t < 0 || t <= T || (e.sessionHidden = !e.sessionHidden, Qe(), j((e.sessionHidden ? "Hidden " : "Included ") + e.name + " for this session"));
  }
  function Da() {
    const e = a("upcomingList");
    if (!e) return;
    e.innerHTML = "";
    const t = hr(), n = f.slice(t);
    (ot === "all" ? n : n.slice(0, Math.max(1, Number(ot) || 1))).forEach((o) => {
      const r = document.createElement("section");
      r.className = "upcomingCard" + (o.sessionHidden ? " sessionHidden" : "") + (Fi(o) ? " noMeta" : ""), r.innerHTML = '<div class="upcomingInfo"><div class="upcomingIcon" aria-hidden="true">' + xi(o) + '</div><div><div class="upcomingName">' + F(o.name) + '</div><div class="upcomingMeta">' + F(yi(o)) + (Rn() > 1 ? " · round " + o.round : "") + '</div></div></div><button class="skipSessionBtn" type="button">' + (o.sessionHidden ? "Include this session" : "Skip this session") + "</button>", r.querySelector(".skipSessionBtn").addEventListener("click", () => fr(o)), e.appendChild(r);
    });
  }
  function Qe() {
    var t;
    const e = gr();
    pr.textContent = e.name, ur.textContent = e.meta, mr.textContent = e.icon;
    {
      const n = re ? f[be(T + 1)] : ((t = f[T]) == null ? void 0 : t.rest) > 0 ? { kind: "rest" } : f[be(T + 1)];
      x.querySelector(".nextCard").classList.toggle("noMeta", !!(n && Fi(n)));
    }
    if (fe = null, re) {
      const n = be(T + 1);
      n >= 0 && (fe = f[n]);
    } else {
      const n = f[T];
      if (n && n.rest > 0)
        fe = null;
      else {
        const i = be(T + 1);
        i >= 0 && (fe = f[i]);
      }
    }
    Fn && (Fn.hidden = !fe, Fn.textContent = fe != null && fe.sessionHidden ? "Include this session" : "Skip this session"), Da();
  }
  Fn.addEventListener("click", () => {
    fe && (fe.sessionHidden = !fe.sessionHidden, j((fe.sessionHidden ? "Hidden " : "Included ") + fe.name + " for this session"), Qe());
  });
  let Fe = null, wi = null;
  function $t(e, t = {}) {
    const n = E[R];
    y.fire(e, { move: (n == null ? void 0 : n.name) || "", move_id: R, ...t });
  }
  function br() {
    const e = E[R];
    Fe = { key: R, name: (e == null ? void 0 : e.name) || "Move", startedAt: Date.now(), active: 0 }, clearInterval(wi), wi = setInterval(() => {
      Fe && !Ce && Fe.active++;
    }, 1e3), $t("started", { steps: f.length });
  }
  function Ha(e) {
    if (clearInterval(wi), !Fe) return;
    const t = Fe;
    Fe = null, $t(e ? "completed" : "ended", { seconds: t.active }), !(t.active < 30) && (A.history.unshift({ id: "h-" + t.startedAt, move_id: t.key, name: t.name, start: new Date(t.startedAt).toISOString(), seconds: t.active, completed: e }), A.history = A.history.slice(0, 1e3), Te(), nt(), De());
  }
  function xr() {
    On("workout"), yr();
    const e = be(0);
    e >= 0 && f[e].kind === "video" && Oa(f[e]);
  }
  function ki() {
    Bn(), Ha(!1), clearInterval(Q), clearInterval(sn), re = !1, Ie(!1), a("app").classList.remove("resting"), Ut.classList.remove("active"), On("home");
  }
  function yr() {
    Ut.classList.add("active");
    let e = 5;
    mi.textContent = e, requestAnimationFrame(Ln), clearInterval(sn), sn = setInterval(() => {
      e--, e > 0 ? (mi.textContent = e, Ln()) : (clearInterval(sn), mi.textContent = "GO", Ln(), setTimeout(() => {
        Ut.classList.remove("active"), cancelAnimationFrame(Kt), kr();
      }, 650));
    }, 1e3);
  }
  function Si() {
    var t;
    ft.innerHTML = "";
    const e = ((t = f[Math.max(0, T)] || f[0]) == null ? void 0 : t.round) || 1;
    ft.dataset.round = e, f.forEach((n, i) => {
      if ((n.round || 1) !== e) return;
      const o = document.createElement("button");
      o.dataset.step = i, o.type = "button", o.className = "progressSegment", o.setAttribute("aria-label", "Go to " + n.name), o.addEventListener("click", () => {
        i <= T && wr(i);
      }), ft.appendChild(o);
    });
  }
  function Ie(e) {
    e = !!e;
    const t = Ce !== e;
    if (Ce = e, bi.textContent = e ? "Resume" : "Pause", a("app").classList.toggle("paused", e), ce && W)
      try {
        e ? W.pauseVideo() : W.playVideo();
      } catch {
      }
    t && Fe && $t(e ? "paused" : "resumed");
  }
  function wr(e) {
    e < 0 || e >= f.length || e > T || (clearInterval(Q), re = !1, a("app").classList.remove("resting"), T = e, Ie(!1), St(), Q = setInterval(Ve, 1e3));
  }
  function kr() {
    if (T = be(0), Ie(!1), Si(), T < 0) {
      Jt.textContent = "No activities", Ne.textContent = "Open Edit and enable or add a movement", Ne.hidden = !1;
      return;
    }
    br(), St(), clearInterval(Q), Q = setInterval(Ve, 1e3);
  }
  const qa = a("videoStage"), bt = a("videoSound"), Sr = 0, xt = 1, Cr = 2;
  let za = 0, yt = null, wt = null, W = null, kt = null, An = 0, Ci = !1, ce = null, Ti = null;
  function _a() {
    var e;
    return (e = window.YT) != null && e.Player ? Promise.resolve(window.YT) : yt || (yt = new Promise((t, n) => {
      const i = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        try {
          i == null || i();
        } catch {
        }
      };
      const o = setInterval(() => {
        var d;
        (d = window.YT) != null && d.Player && (clearInterval(o), clearTimeout(r), t(window.YT));
      }, 100), r = setTimeout(() => {
        clearInterval(o), yt = null, n(new Error("YouTube did not load"));
      }, 15e3);
      if (!document.querySelector('script[src*="youtube.com/iframe_api"]')) {
        const d = document.createElement("script");
        d.src = "https://www.youtube.com/iframe_api", d.async = !0, d.onerror = () => {
          clearInterval(o), clearTimeout(r), yt = null, n(new Error("YouTube did not load"));
        }, document.head.appendChild(d);
      }
    }), yt);
  }
  function Ga() {
    return wt || (wt = _a().then((e) => new Promise((t) => {
      const n = document.createElement("div");
      a("videoFrame").appendChild(n), W = new e.Player(n, {
        width: "100%",
        height: "100%",
        playerVars: { playsinline: 1, rel: 0, iv_load_policy: 3, modestbranding: 1 },
        events: { onReady: () => t(W), onStateChange: (i) => Lr(i.data), onError: (i) => Er(i.data) }
      });
    })), wt.catch(() => {
      wt = null;
    }), wt);
  }
  function Oa(e) {
    !(e != null && e.videoId) || e.videoError || Ga().then((t) => {
      ce || kt === e.videoId || (kt = e.videoId, An = Number(e.start) || 0, Ci = !1, t.mute(), t.loadVideoById({ videoId: e.videoId, startSeconds: An }));
    }).catch(() => {
    });
  }
  function Tr() {
    const e = be(T + 1);
    e >= 0 && f[e].kind === "video" && Oa(f[e]);
  }
  function Lr(e) {
    if (!ce) {
      e === xt && !Ci && (Ci = !0, W.pauseVideo(), W.seekTo(An, !0));
      return;
    }
    qa.classList.toggle("playing", e === xt), f[T] === ce && performance.now() > za && (e === xt && Ce ? Ie(!1) : e === Cr && !Ce && Ie(!0)), e === xt && ja(ce.videoId, W.getDuration()) && Te(), e === Sr && Qt();
  }
  function Er(e) {
    const t = ce;
    if (!t) {
      kt = null;
      return;
    }
    e === 101 || e === 150 ? (Rr(t.videoId), j("That video can’t play outside YouTube, so it was skipped")) : j("The video couldn’t play, so it was skipped"), Qt();
  }
  function Mr(e) {
    if (a("app").classList.add("videoStep"), bt.hidden = !0, ce = e, clearTimeout(Ti), !e.videoId) {
      j("This video step has no link yet, so it was skipped"), setTimeout(() => Qt(), 0);
      return;
    }
    Ga().then((t) => {
      if (ce !== e) return;
      za = performance.now() + 1500;
      const n = Number(e.start) || 0;
      kt !== e.videoId ? (kt = e.videoId, An = n, t.loadVideoById({ videoId: e.videoId, startSeconds: n })) : (t.seekTo(n, !0), t.playVideo()), t.unMute(), Ce && t.pauseVideo(), Ti = setTimeout(() => {
        ce !== e || Ce || (t.getPlayerState() !== xt ? (t.mute(), t.playVideo(), bt.hidden = !1) : t.isMuted() && (bt.hidden = !1));
      }, 1600);
    }).catch(() => {
      ce === e && (j("YouTube didn’t load, so the video was skipped"), Qt());
    });
  }
  function Wa() {
    if (!a("app").classList.contains("videoStep")) return;
    const e = x.querySelector(".workGrid"), t = x.querySelector(".sessionControlRow"), n = e.getBoundingClientRect().top, i = (t == null ? void 0 : t.offsetHeight) || 42, o = window.innerHeight - n - 16 - i - 84;
    e.style.setProperty("--theater-h", Math.max(240, Math.round(o)) + "px");
  }
  window.addEventListener("resize", Wa);
  function Bn() {
    clearTimeout(Ti);
    const e = ce;
    if (ce = null, a("app").classList.remove("videoStep"), qa.classList.remove("playing"), bt.hidden = !0, e && W) {
      try {
        W.pauseVideo();
      } catch {
      }
      kt = null;
    }
  }
  function Qt() {
    const e = ce;
    !e || f[T] !== e || (Bn(), clearInterval(Q), Ct(), Q = setInterval(Ve, 1e3));
  }
  bt.addEventListener("click", () => {
    W && (W.unMute(), W.playVideo()), bt.hidden = !0;
  });
  function Fr(e) {
    var i;
    const t = Number(e.start) || 0;
    if (e.useVideoLength === !1) return t + (Number(e.duration) || 300);
    const n = W && ce === e && Number((i = W.getDuration) == null ? void 0 : i.call(W)) || 0;
    return Number(e.end) || n || Number(e.videoDuration) || t + (Number(e.duration) || 300);
  }
  function Va(e, t) {
    const n = E[R];
    [ye, me, we, n == null ? void 0 : n.warmup, n == null ? void 0 : n.strength, n == null ? void 0 : n.cooldown, n == null ? void 0 : n.sequence].forEach((i) => (Array.isArray(i) ? i : []).forEach((o) => {
      o && o.kind === "video" && o.videoId === e && t(o);
    }));
  }
  function ja(e, t) {
    t = Math.round(Number(t) || 0);
    let n = !1;
    return e && t > 0 && Va(e, (i) => {
      i.videoDuration !== t && (i.videoDuration = t, n = !0);
    }), n;
  }
  function Rr(e) {
    Va(e, (t) => {
      t.videoError = "embed";
    }), Te();
  }
  function Ar(e) {
    const t = e.videoId;
    if (!t) return;
    const n = () => {
      le.classList.contains("open") ? ge || _() : (_(), Te());
    };
    fetch("https://www.youtube.com/oembed?format=json&url=" + encodeURIComponent("https://www.youtube.com/watch?v=" + t)).then((i) => i.ok ? i.json() : Promise.reject(i.status)).then((i) => {
      e.videoId === t && (e.videoTitle = i.title || "", e.autoName && i.title && (e.name = i.title), n());
    }).catch((i) => {
      e.videoId === t && i === 401 && (e.videoError = "embed", n());
    }), Br(t).then((i) => {
      ja(t, i) && n();
    }).catch((i) => {
      i === "embed" && e.videoId === t && (e.videoError = "embed", n());
    });
  }
  function Br(e) {
    return _a().then((t) => new Promise((n, i) => {
      const o = document.createElement("div");
      o.className = "videoProbe", o.setAttribute("aria-hidden", "true");
      const r = document.createElement("div");
      o.appendChild(r), a("app").appendChild(o);
      let d = null, s = !1;
      const u = (l, b) => {
        s || (s = !0, clearTimeout(m), setTimeout(() => {
          try {
            d == null || d.destroy();
          } catch {
          }
          o.remove();
        }, 0), b ? i(b) : n(l));
      }, m = setTimeout(() => u(0), 2e4), p = () => {
        var b;
        const l = Number((b = d == null ? void 0 : d.getDuration) == null ? void 0 : b.call(d)) || 0;
        return l > 0 && u(l), l > 0;
      };
      d = new t.Player(r, {
        width: 320,
        height: 180,
        videoId: e,
        playerVars: { playsinline: 1, mute: 1, controls: 0 },
        events: {
          onReady: () => {
            p() || (d.mute(), d.playVideo());
          },
          onStateChange: () => p(),
          onError: (l) => u(0, l.data === 101 || l.data === 150 ? "embed" : "error")
        }
      });
    }));
  }
  function St() {
    re = !1;
    const e = f[T];
    a("app").classList.toggle("resting", e.kind === "rest"), e.kind === "video" ? Mr(e) : Bn(), de = e.duration, Bt = e.duration, Jt.textContent = e.name, Ne.textContent = e.group, Ne.hidden = !0, vi.textContent = Ia(T), Fe && $t("step", { name: e.name, group: e.group, kind: e.kind, step: T + 1, of: f.length, round: e.round || 1, rounds: Rn(), duration: e.duration }), Qe(), vr(), Tr(), e.kind === "video" && setTimeout(Wa, 0);
  }
  function et() {
    var o;
    const e = ((o = f[T]) == null ? void 0 : o.kind) === "video" && !re, t = e && de >= 60;
    fi.textContent = t ? Nt(de) : de, fi.classList.toggle("long", t), e && (a("videoClock").textContent = Nt(de) + " left");
    const n = de / Bt * 100;
    Na.style.width = n + "%";
    const i = Pa();
    if (i && !re) {
      const r = 100 - n;
      i.style.setProperty("--segment-progress", r + "%");
    }
  }
  function Ve() {
    var t, n;
    if (Ce) return;
    const e = f[T];
    if ((e == null ? void 0 : e.kind) === "video" && !re && ce === e) {
      const i = Number((t = W == null ? void 0 : W.getCurrentTime) == null ? void 0 : t.call(W)) || 0, o = Number(e.start) || 0, r = Fr(e);
      Bt = Math.max(1, r - o), (i > o || ((n = W == null ? void 0 : W.getPlayerState) == null ? void 0 : n.call(W)) === xt) && (de = Math.max(0, Math.ceil(r - i))), et(), i > o && i >= r - 0.25 && Qt();
      return;
    }
    de--, et(), de <= 0 && (e.rest > 0 ? Ya(e.rest) : Ct());
  }
  function Ya(e) {
    var n;
    re = !0, a("app").classList.add("resting");
    const t = Pa();
    t && t.style.setProperty("--segment-progress", "100%"), clearInterval(Q), de = e, Bt = e, Fe && $t("rest", { duration: e }), Jt.textContent = "Rest", Ne.textContent = (n = f[T]) != null && n.roundBreakAfter ? "Round " + (f[T].round + 1) + " next" : "Recovery", Qe(), et(), Q = setInterval(() => {
      Ce || (de--, et(), de <= 0 && (clearInterval(Q), Ct(), Q = setInterval(Ve, 1e3)));
    }, 1e3);
  }
  function Ct() {
    re = !1;
    const e = be(T + 1);
    if (e >= 0)
      T = e, St();
    else {
      clearInterval(Q), Bn(), Ie(!1), a("app").classList.remove("resting"), Jt.textContent = "Complete", Ne.textContent = "Move finished", Ne.hidden = !1, fi.textContent = "✓";
      {
        const t = Rn();
        vi.textContent = t > 1 ? t + " rounds done" : f.filter((n) => !n.roundBreak).length + " steps done";
      }
      Ha(!0);
      {
        const t = no(7).reduce((n, i) => n + i.minutes, 0);
        Ne.textContent = "Move finished · " + t + " min in the last 7 days";
      }
      Na.style.width = "100%", Qe();
    }
  }
  a("skipExercise").addEventListener("click", () => {
    Nr(), Ie(!1);
  });
  function Nr() {
    clearInterval(Q);
    const e = f[T];
    if (re) {
      re = !1, a("app").classList.remove("resting");
      const n = be(T + 1);
      n >= 0 ? (T = n, St(), Q = setInterval(Ve, 1e3)) : Ct();
      return;
    }
    if (e && e.rest > 0) {
      Ya(e.rest);
      return;
    }
    const t = be(T + 1);
    t >= 0 ? (T = t, St(), Q = setInterval(Ve, 1e3)) : Ct();
  }
  a("restartSegment").addEventListener("click", () => {
    if (clearInterval(Q), Ie(!1), re) {
      const e = f[T];
      de = e.rest, Bt = e.rest, Jt.textContent = "Rest", Ne.textContent = "Recovery", a("app").classList.add("resting"), Qe(), et();
    } else
      St();
    Q = setInterval(re ? () => {
      Ce || (de--, et(), de <= 0 && (clearInterval(Q), Ct(), Q = setInterval(Ve, 1e3)));
    } : Ve, 1e3);
  });
  function en(e, t, n, i) {
    let o = 0, r = null, d = !1;
    function s() {
      r && cancelAnimationFrame(r), r = null, o = 0, d = !1, t.style.width = "0%", e.classList.remove("holding");
    }
    function u(l) {
      if (!d) return;
      o || (o = l);
      const b = Math.min(1, (l - o) / n);
      if (t.style.width = b * 100 + "%", b >= 1) {
        d = !1, r && cancelAnimationFrame(r), r = null, t.style.width = "100%", setTimeout(() => t.style.width = "0%", 90), i();
        return;
      }
      r = requestAnimationFrame(u);
    }
    function m(l) {
      var b;
      if (!(l && l.button !== void 0 && l.button !== 0)) {
        l == null || l.preventDefault(), s(), d = !0, e.classList.add("holding");
        try {
          (b = e.setPointerCapture) == null || b.call(e, l.pointerId);
        } catch {
        }
        r = requestAnimationFrame(u);
      }
    }
    function p() {
      d && s();
    }
    e.addEventListener("pointerdown", m), e.addEventListener("pointerup", p), e.addEventListener("pointercancel", p), e.addEventListener("lostpointercapture", p), e.addEventListener("keydown", (l) => {
      (l.key === " " || l.key === "Enter") && !l.repeat && m(l);
    }), e.addEventListener("keyup", (l) => {
      (l.key === " " || l.key === "Enter") && p();
    });
  }
  const Ir = a("endWorkout");
  en(Ir, a("holdEndFill"), 1500, ki);
  const Tt = a("deleteMoveConfirm");
  a("deleteMoveOpen").addEventListener("click", () => {
    Tt.classList.add("open"), Tt.setAttribute("aria-hidden", "false");
  }), a("deleteMoveCancel").addEventListener("click", () => {
    Tt.classList.remove("open"), Tt.setAttribute("aria-hidden", "true");
  });
  function Pr() {
    const e = R, t = x.querySelector('.workoutPanel[data-workout="' + e + '"]');
    t && t.remove(), delete E[e], A.order = A.order.filter((i) => i !== e);
    let n = x.querySelector(".workoutPanel[data-workout]");
    if (!n) {
      const i = "custom-" + Date.now();
      E[i] = { name: "New move", source: "Custom routine", total: 20, work: 45, rest: 15, customSequence: !0, preset: "movement", sequence: [], strength: [] }, A.order.push(i), n = Vn(i, E[i]);
    }
    Tt.classList.remove("open"), Tt.setAttribute("aria-hidden", "true"), Yt = null, Tn(), Le(n.dataset.workout), Te(), j("Move deleted");
  }
  en(a("deleteMoveYes"), a("deleteMoveFill"), 1500, Pr);
  const Li = x.querySelector(".rubberTabs"), Lt = a("rubberIndicator");
  function tn(e, t = !0) {
    if (!e || !Li || !Lt) return;
    const n = Li.getBoundingClientRect(), i = e.getBoundingClientRect();
    Lt.style.transition = t ? "left .34s cubic-bezier(.2,1.35,.4,1),width .34s cubic-bezier(.2,1.35,.4,1),transform .18s ease" : "none";
    const o = Je();
    Lt.style.left = (i.left - n.left) / o + Li.scrollLeft + "px", Lt.style.width = i.width / o + "px", t && (Lt.style.transform = "scaleX(1.08)", setTimeout(() => Lt.style.transform = "scaleX(1)", 180));
  }
  x.querySelectorAll(".tab").forEach((e) => e.addEventListener("click", () => {
    e.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "smooth" }), x.querySelectorAll(".tab").forEach((t) => t.classList.remove("active")), x.querySelectorAll(".settingsPane").forEach((t) => t.classList.remove("active")), e.classList.add("active"), a(e.dataset.pane).classList.add("active"), tn(e, !0);
  })), requestAnimationFrame(() => tn(x.querySelector(".tab.active"), !1)), window.addEventListener("resize", () => tn(x.querySelector(".tab.active"), !1));
  const Ei = a("pixelTrailToggle"), Mi = a("rippleToggle"), Et = a("trailStrength"), Mt = a("trailLife");
  function Se(e, t) {
    H()[e] = t, Te();
  }
  const Ua = ["Warm-up", "Movement", "Cooldown", "Rest", "Video"];
  function Ka(e) {
    return e.kind === "rest" ? "rest" : e.kind === "video" ? "video" : "g:" + String(e.group || "").trim().toLowerCase();
  }
  function Fi(e) {
    var t;
    return !!((t = H().hideMeta) != null && t[Ka(e)]);
  }
  function Dr() {
    const e = /* @__PURE__ */ new Map(), t = (n, i, o) => {
      if (!n) return;
      Array.isArray(n) && (n = { name: n[1], group: n[2], kind: "work" });
      const r = Ka(n);
      let d = e.get(r);
      d || (d = { key: r, label: r === "rest" ? "Rest" : r === "video" ? "Video" : String(n.group || "").trim() || "No type", kinds: /* @__PURE__ */ new Set(), moves: /* @__PURE__ */ new Set(), count: 0 }, e.set(r, d)), d.kinds.add(r === "rest" ? "Rest" : r === "video" ? "Video" : i), d.moves.add(o), d.count++;
    };
    return Object.values(E).forEach((n) => {
      const i = n.name || "Move";
      (n.warmup || (n.customSequence ? [] : on)).forEach((o) => t(o, "Warm-up", i)), (n.customSequence ? n.sequence || [] : n.strength || []).forEach((o) => t(o, o.presetRole === "warmup" ? "Warm-up" : o.presetRole === "cooldown" ? "Cooldown" : "Movement", i)), (n.cooldown || (n.customSequence ? [] : rn)).forEach((o) => t(o, "Cooldown", i));
    }), [["rest", "Rest"], ["video", "Video"]].forEach(([n, i]) => {
      e.has(n) || e.set(n, { key: n, label: i, kinds: /* @__PURE__ */ new Set([i]), moves: /* @__PURE__ */ new Set(), count: 0 });
    }), [...e.values()].map((n) => ({ ...n, kind: n.kinds.has("Movement") ? "Movement" : [...n.kinds][0], moves: [...n.moves] })).sort((n, i) => Ua.indexOf(n.kind) - Ua.indexOf(i.kind) || n.label.localeCompare(i.label));
  }
  let Ri = "all";
  function Ai() {
    const e = a("metaSearch").value.trim().toLowerCase();
    return Dr().filter((t) => (Ri === "all" || t.kind === Ri) && (!e || t.label.toLowerCase().includes(e) || t.moves.some((n) => n.toLowerCase().includes(e))));
  }
  function Nn() {
    const e = a("metaTableBody");
    if (!e) return;
    const t = H().hideMeta || {}, n = Ai();
    e.innerHTML = n.length ? "" : '<tr class="metaEmpty"><td colspan="4">No types match</td></tr>', n.forEach((o) => {
      const r = !t[o.key], d = o.count ? (o.moves.length > 2 ? o.moves.slice(0, 2).join(", ") + " + " + (o.moves.length - 2) + " more" : o.moves.join(", ")) + " · " + o.count + " step" + (o.count === 1 ? "" : "s") : "Not used yet", s = document.createElement("tr");
      s.className = r ? "" : "off", s.innerHTML = '<td><div class="metaType">' + F(o.label) + '</div><div class="metaSub">' + F(o.kind + " · " + d) + '</div></td><td class="metaKindCol">' + F(o.kind) + '</td><td class="metaUsedCol">' + F(d) + '</td><td class="metaSwitchCol"><button class="switch' + (r ? " on" : "") + '" type="button" role="switch" aria-checked="' + r + '" aria-label="Second line for ' + F(o.label) + ' on phones"></button></td>', s.querySelector(".switch").addEventListener("click", () => Bi([o.key], r)), e.appendChild(s);
    });
    const i = n.filter((o) => t[o.key]).length;
    a("metaCount").textContent = n.length ? n.length + " type" + (n.length === 1 ? "" : "s") + (i ? " · " + i + " hidden on phones" : "") : "";
  }
  function Bi(e, t) {
    const n = { ...H().hideMeta || {} };
    e.forEach((i) => {
      t ? n[i] = !0 : delete n[i];
    }), Se("hideMeta", n), Nn(), Xn(), Qe();
  }
  a("metaSearch").addEventListener("input", Nn), a("metaKinds").querySelectorAll(".kindChip").forEach((e) => e.addEventListener("click", () => {
    Ri = e.dataset.kind, a("metaKinds").querySelectorAll(".kindChip").forEach((t) => t.classList.toggle("active", t === e)), Nn();
  })), a("metaHideAll").addEventListener("click", () => Bi(Ai().map((e) => e.key), !0)), a("metaShowAll").addEventListener("click", () => Bi(Ai().map((e) => e.key), !1));
  const Ft = { feel: !0, steps: !0, mood: !0, energyLevel: !0, ...H().toggles || {} };
  function Za() {
    x.querySelectorAll("[data-toggle]").forEach((t) => t.classList.toggle("on", Ft[t.dataset.toggle] !== !1)), x.querySelector(".feelSection").hidden = !0, [["steps", "stepsRow"], ["mood", "moodRow"], ["energyLevel", "energyLevelRow"]].forEach(([t, n]) => {
      a(n).hidden = Ft[t] === !1;
    });
    const e = ["steps", "mood", "energyLevel"].some((t) => Ft[t] !== !1);
    x.querySelector(".activityCard").hidden = !e, a("insightCard").style.gridColumn = e ? "" : "span 12";
  }
  x.querySelectorAll("[data-toggle]").forEach((e) => e.addEventListener("click", () => {
    Ft[e.dataset.toggle] = Ft[e.dataset.toggle] === !1, Za(), Se("toggles", { ...Ft });
  })), Za();
  function Hr() {
    Ei.classList.toggle("on", Be), Mi.classList.toggle("on", $e), Et.value = Math.round(ut * 100), a("trailStrengthValue").textContent = Et.value + "%", Mt.value = mt, a("trailLifeValue").textContent = Mt.value + " ms";
  }
  H().trailEnabled !== void 0 && (Be = H().trailEnabled), H().rippleEnabled !== void 0 && ($e = H().rippleEnabled), H().trailStrength !== void 0 && (ut = H().trailStrength), H().trailMaxAge !== void 0 && (mt = H().trailMaxAge), Hr(), Ei.addEventListener("click", () => {
    Be = !Be, Ei.classList.toggle("on", Be), Be || (Xt = []), Se("trailEnabled", Be);
  }), Mi.addEventListener("click", () => {
    $e = !$e, Mi.classList.toggle("on", $e), Se("rippleEnabled", $e);
  }), Et.addEventListener("input", () => {
    ut = Number(Et.value) / 100, a("trailStrengthValue").textContent = Et.value + "%";
  }), Et.addEventListener("change", () => Se("trailStrength", ut)), Mt.addEventListener("input", () => {
    mt = Number(Mt.value), a("trailLifeValue").textContent = Mt.value + " ms";
  }), Mt.addEventListener("change", () => Se("trailMaxAge", mt)), kn.addEventListener("change", () => Se("upcomingCount", ot));
  function Xa(e) {
    x.querySelectorAll(".themeBtn").forEach((n) => n.classList.toggle("active", n.dataset.theme === e));
    const t = e === "light";
    a("app").classList.toggle("light", t), y.setLight(t);
  }
  Xa(H().theme || "dark"), x.querySelectorAll(".themeBtn").forEach((e) => e.addEventListener("click", () => {
    Xa(e.dataset.theme), Se("theme", e.dataset.theme);
  }));
  const Pe = { steps: null, ...H().entities || {} };
  let tt = null, Ni = {};
  function qr(e) {
    const t = Object.values(e).filter((s) => s.entity_id.startsWith("sensor.") || s.entity_id.startsWith("input_number.")), n = (s) => s.attributes.friendly_name || s.entity_id, i = t.filter((s) => /step/i.test(s.entity_id) || /step/i.test(n(s)) || ["steps", "step"].includes(String(s.attributes.unit_of_measurement || "").toLowerCase())), o = t.filter((s) => !i.includes(s)), r = (s, u) => n(s).localeCompare(n(u)), d = (s, u) => /health_steps/.test(u.entity_id) - /health_steps/.test(s.entity_id) || r(s, u);
    return { suggested: i.sort(d), rest: o.sort(r), label: n };
  }
  function Ja(e) {
    const t = a("stepsEntity");
    if (!t || t.matches(":focus")) return;
    const { suggested: n, rest: i, label: o } = qr(e), r = (u) => '<option value="' + F(u.entity_id) + '">' + F(o(u)) + "</option>";
    t.innerHTML = '<option value="">Not connected</option>' + (n.length ? '<optgroup label="Suggested">' + n.map(r).join("") + "</optgroup>" : "") + (i.length ? '<optgroup label="All sensors">' + i.map(r).join("") + "</optgroup>" : ""), t.value = Pe.steps || "";
    const d = a("stepsStatus"), s = Pe.steps && e[Pe.steps];
    d.textContent = s ? "Connected · " + o(s) : d.dataset.empty;
  }
  a("stepsEntity").addEventListener("change", () => {
    Pe.steps = a("stepsEntity").value || null, Se("entities", { ...Pe }), Ni = {}, to(), tt && (Ja(tt), Qa(tt));
  });
  function zr(e, t = 0) {
    return new Intl.NumberFormat(void 0, { maximumFractionDigits: t }).format(e);
  }
  function $a() {
    const e = Pe.steps && (tt == null ? void 0 : tt[Pe.steps]), t = Number(e == null ? void 0 : e.state);
    return Number.isFinite(t) ? t : null;
  }
  function Qa(e) {
    var i;
    const t = Pe.steps, n = t ? Number((i = e[t]) == null ? void 0 : i.state) : NaN;
    a("stepsMeta").textContent = t ? Number.isFinite(n) ? zr(n) : "—" : "Set up in Settings";
  }
  let eo = 0;
  async function to() {
    const e = Pe.steps;
    if (!e || !y.ws) return;
    eo = Date.now();
    const t = /* @__PURE__ */ new Date(), n = new Date(t.getFullYear(), t.getMonth(), t.getDate() - 30);
    try {
      const i = await y.ws({ type: "recorder/statistics_during_period", start_time: n.toISOString(), end_time: t.toISOString(), statistic_ids: [e], period: "day", types: ["max"] }), o = (i == null ? void 0 : i[e]) || [], r = {};
      if (o.forEach((d) => {
        Number.isFinite(d.max) && (r[ve(new Date(d.start))] = d.max);
      }), !Object.keys(r).length) {
        const d = await y.ws({ type: "history/history_during_period", start_time: n.toISOString(), end_time: t.toISOString(), entity_ids: [e], minimal_response: !0, no_attributes: !0, significant_changes_only: !1 });
        ((d == null ? void 0 : d[e]) || []).forEach((s) => {
          const u = Number(s.s ?? s.state), m = s.lu ? s.lu * 1e3 : Date.parse(s.last_updated || s.last_changed);
          if (!Number.isFinite(u) || !m) return;
          const p = ve(new Date(m));
          r[p] = Math.max(r[p] || 0, u);
        });
      }
      Ni = r, De();
    } catch {
    }
  }
  function nt() {
    De();
  }
  nt(), setInterval(() => {
    nt(), Wt(), Xe();
  }, 10 * 60 * 1e3);
  function no(e) {
    const t = {}, n = {};
    A.history.forEach((d) => {
      const s = ve(new Date(d.start));
      t[s] = (t[s] || 0) + (d.seconds || 0) / 60, n[s] = (n[s] || 0) + 1;
    });
    const i = /* @__PURE__ */ new Date(), o = ve(i), r = [];
    for (let d = e - 1; d >= 0; d--) {
      const s = new Date(i.getFullYear(), i.getMonth(), i.getDate() - d), u = ve(s), m = A.checkins.filter((l) => l.date === u), p = (l) => {
        const b = m.map((L) => L[l]).filter(Boolean);
        return b.length ? b.reduce((L, g) => L + g, 0) / b.length : null;
      };
      r.push({
        key: u,
        date: s,
        minutes: Math.round(t[u] || 0),
        moves: n[u] || 0,
        steps: u === o && $a() != null ? $a() : Ni[u] ?? null,
        mood: p("mood"),
        energy: p("energy")
      });
    }
    return r;
  }
  function _r(e) {
    let t = e.length - 1;
    e[t] && !e[t].minutes && t--;
    let n = 0;
    for (; t >= 0 && e[t].minutes > 0; )
      n++, t--;
    return n;
  }
  function De() {
    const e = a("insightCard");
    if (!e) return;
    const t = no(30), n = _r(t), i = t.reduce((l, b) => l + b.minutes, 0), o = /* @__PURE__ */ new Date(), r = ve(o), d = new Date(o.getFullYear(), o.getMonth(), o.getDate() - (o.getDay() + 6) % 7), s = [...Array(7)].map((l, b) => {
      const L = new Date(d.getFullYear(), d.getMonth(), d.getDate() + b), g = ve(L), h = t.find((v) => v.key === g);
      return { d: L, k: g, minutes: h ? h.minutes : 0, today: g === r, future: g > r };
    }), u = s.reduce((l, b) => l + b.minutes, 0), m = Math.max(10, ...s.map((l) => l.minutes)), p = (l, b, L) => '<div class="activityRow"><div class="activityRowIcon" aria-hidden="true">' + l + '</div><div><div class="activityRowName">' + F(b) + '</div><div class="activityRowMeta">' + F(L) + "</div></div></div>";
    e.innerHTML = '<div class="activityHeader"><div class="activityIcon" aria-hidden="true">↗</div><div class="activityTitle">Movement</div></div><div class="activityRows movementReadings">' + p("◷", "This week", u + " min") + p("↯", "Streak", n + " day" + (n === 1 ? "" : "s")) + p("▦", "30 days", i + " min") + '</div><div class="weekBars">' + s.map(
      (l) => '<div class="weekBar' + (l.today ? " today" : "") + (l.future ? " future" : "") + '" title="' + F(l.minutes + " min") + '"><div class="weekBarTrack"><span style="height:' + (l.minutes ? Math.max(6, l.minutes / m * 100) : 0) + '%"></span></div><div class="dayLabel">' + F(new Intl.DateTimeFormat(void 0, { weekday: "short" }).format(l.d)) + "</div></div>"
    ).join("") + "</div>";
  }
  const io = a("tvNav");
  y.fullscreenSupported || (io.hidden = !0), io.addEventListener("click", () => y.toggleFullscreen()), x.addEventListener("keydown", (e) => {
    !at.workout.classList.contains("active") || Ut.classList.contains("active") || e.target.closest("input,select,textarea,.holdEnd") || (e.key === "MediaPlayPause" || e.key === " " && !e.target.closest("button") ? (e.preventDefault(), bi.click()) : e.key === "MediaTrackNext" ? (e.preventDefault(), a("skipExercise").click()) : e.key === "MediaTrackPrevious" && (e.preventDefault(), a("restartSegment").click()));
  }), [O, I, D, Ue].forEach((e) => e.addEventListener("input", () => {
    const t = E[R];
    t && (t.total = Number(O.value), t.work = Number(I.value), t.rest = Number(D.value)), _();
  })), Wi.addEventListener("click", ki), Vi.addEventListener("click", () => On("settings")), a("settingsBack").addEventListener("click", ki), bi.addEventListener("click", () => Ie(!Ce)), Le(R), wn(), Wt(), De(), a("healthHelpOpen").addEventListener("click", () => x.querySelector(".tab[data-pane=helpPane]").click()), en(a("resetStats"), a("resetStatsFill"), 1500, () => {
    A.history = [], A.checkins = [], Ot = "";
    try {
      localStorage.removeItem("move-assistant-dismissed");
    } catch {
    }
    Te(), nt(), Wt(), wn(), De(), Xe(), j("Stats reset");
  });
  const Ii = a("morningTime"), Pi = a("eveningTime"), Di = a("checkinAutoOpen");
  Ii.value = Re().morning, Pi.value = Re().evening, Di.classList.toggle("on", H().checkinAutoOpen !== !1), [["morningTime", Ii], ["eveningTime", Pi]].forEach(([e, t]) => t.addEventListener("change", () => {
    t.value && (Se(e, t.value), Xe());
  })), Di.addEventListener("click", () => {
    const e = H().checkinAutoOpen === !1;
    Di.classList.toggle("on", e), Se("checkinAutoOpen", e);
  }), setTimeout(di, 800);
  const ao = a("checkinNotify"), In = a("checkinNotifyTarget"), oo = a("checkinNotifyStatus"), Gr = oo.textContent;
  function ro() {
    const e = y.notifyServices(), t = e.filter((o) => o.startsWith("mobile_app_")), n = t.length ? t : e, i = (o) => o.replace(/^mobile_app_/, "").replace(/_/g, " ");
    In.innerHTML = n.map((o) => '<option value="' + F(o) + '">' + F(i(o)) + "</option>").join(""), !H().notifyTarget && n[0] && (H().notifyTarget = n[0]), In.value = H().notifyTarget || "";
  }
  function Pn() {
    const e = !!H().notifyOn;
    ao.classList.toggle("on", e), a("checkinNotifyTargetRow").hidden = !e;
    const t = Re();
    oo.textContent = e ? "Sends at " + t.morning + " and " + t.evening : Gr;
  }
  async function Hi() {
    const e = !!H().notifyOn;
    try {
      return await y.setReminderAutomation(e ? { target: H().notifyTarget, times: Re() } : null), !0;
    } catch {
      return j("Couldn't update the reminder in Home Assistant"), !1;
    }
  }
  ao.addEventListener("click", async () => {
    const e = !H().notifyOn;
    if (e && (ro(), !H().notifyTarget)) {
      j("Install the Companion app on your phone first");
      return;
    }
    H().notifyOn = e, Pn(), await Hi() ? (Te(), j(e ? "Check-in notifications on" : "Check-in notifications off")) : (H().notifyOn = !e, Pn());
  }), In.addEventListener("change", () => {
    Se("notifyTarget", In.value), H().notifyOn && Hi();
  }), [Ii, Pi].forEach((e) => e.addEventListener("change", () => {
    Pn(), H().notifyOn && Hi();
  })), ro(), Pn();
  let qi = null;
  function Or() {
    qi || (qi = setTimeout(() => {
      qi = null, De();
    }, 3e4));
  }
  return {
    updateStates(e) {
      tt = e, Ja(e), Qa(e), Date.now() - eo > 60 * 60 * 1e3 && to(), Or();
    },
    applyRemoteData(e) {
      if (e && (Array.isArray(e.history) && (A.history = e.history, nt()), Array.isArray(e.history) && De(), Array.isArray(e.checkins) && (A.checkins = e.checkins.map(Zi), Xe(), wn(), Wt(), nt(), De()), e.profiles && !le.classList.contains("open") && !Fe)) {
        const t = Ki(e);
        Object.keys(E).forEach((n) => delete E[n]), Object.assign(E, t.profiles), A.order = t.order, E[R] || (R = A.order[0]), Ji(), Le(R);
      }
    },
    suspend() {
      J = !1;
    },
    resume() {
      J || (J = !0, gt || (gt = requestAnimationFrame(En)), vt || (vt = requestAnimationFrame(Mn)), tn(x.querySelector(".tab.active"), !1));
    }
  };
}
const Kr = "0.23.3", zi = "move_assistant", Zr = "move_assistant", uo = "move_assistant_checkin_reminder";
function Xr() {
  if (document.getElementById("move-assistant-inter")) return;
  const x = document.createElement("link");
  x.id = "move-assistant-inter", x.rel = "stylesheet", x.href = "https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,400;0,500;0,600;0,700;0,800;1,500&display=swap", document.head.appendChild(x);
}
class Jr extends HTMLElement {
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
    Xr();
    const y = this.shadowRoot || this.attachShadow({ mode: "open" });
    y.innerHTML = `<style>${jr}</style>${Yr}`;
    const a = y.getElementById("app");
    a.style.opacity = "0";
    let U = null;
    try {
      const N = await this._hass.callWS({
        type: "frontend/get_user_data",
        key: zi
      });
      U = (N == null ? void 0 : N.value) ?? null;
    } catch {
    }
    this._lastSaved = JSON.stringify(U), this._app = Ur(y, {
      data: U,
      save: (N) => this._save(N),
      fire: (N, J) => this._fire(N, J),
      ws: (N) => this._hass.callWS(N),
      notifyServices: () => {
        var N, J;
        return Object.keys(((J = (N = this._hass) == null ? void 0 : N.services) == null ? void 0 : J.notify) || {}).sort();
      },
      setReminderAutomation: (N) => this._setReminderAutomation(N),
      setLight: (N) => this.classList.toggle("lightBody", N),
      fullscreenSupported: !!(this.requestFullscreen || this.webkitRequestFullscreen),
      toggleFullscreen: () => this._toggleFullscreen()
    }), this._lastStates = this._hass.states, this._app.updateStates(this._hass.states), this.isConnected || this._app.suspend(), a.style.transition = "opacity .2s ease", a.style.opacity = "", this._subscribe();
  }
  _subscribe() {
    var a;
    const y = (a = this._hass) == null ? void 0 : a.connection;
    y != null && y.subscribeMessage && y.subscribeMessage(
      (U) => {
        var J;
        const N = JSON.stringify((U == null ? void 0 : U.value) ?? null);
        N === this._lastSaved || N === this._pendingJson || (this._lastSaved = N, (J = this._app) == null || J.applyRemoteData(U.value));
      },
      { type: "frontend/subscribe_user_data", key: zi }
    ).catch(() => {
    });
  }
  _save(y) {
    this._pendingJson = JSON.stringify(y), clearTimeout(this._saveTimer), this._saveTimer = setTimeout(async () => {
      const a = this._pendingJson;
      try {
        await this._hass.callWS({
          type: "frontend/set_user_data",
          key: zi,
          value: JSON.parse(a)
        }), this._lastSaved = a;
      } catch {
        this._toast("Couldn't save to Home Assistant");
      }
    }, 400);
  }
  _fire(y, a = {}) {
    var U, N;
    ((U = this._config) == null ? void 0 : U.events) !== !1 && ((N = this._hass) == null || N.callWS({
      type: "fire_event",
      event_type: Zr,
      event_data: { action: y, ...a }
    }).catch(() => {
    }));
  }
  // Keeps one Home Assistant automation in sync with the check-in times.
  // Passing null removes it.
  async _setReminderAutomation(y) {
    const a = `config/automation/config/${uo}`;
    if (!y) {
      try {
        await this._hass.callApi("DELETE", a);
      } catch (J) {
        if ((J == null ? void 0 : J.status_code) !== 404 && (J == null ? void 0 : J.status) !== 404) throw J;
      }
      return;
    }
    const U = (J) => `${J}:00`, N = window.location.pathname;
    await this._hass.callApi("POST", a, {
      id: uo,
      alias: "Move Assistant check-in reminder",
      description: "Created by Move Assistant. Change it in Move Assistant → Settings → Check-in.",
      mode: "single",
      triggers: [
        { trigger: "time", at: U(y.times.morning), id: "morning" },
        { trigger: "time", at: U(y.times.evening), id: "evening" }
      ],
      conditions: [],
      actions: [
        {
          action: `notify.${y.target}`,
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
    var U;
    const a = (U = this.shadowRoot) == null ? void 0 : U.getElementById("toast");
    a && (a.textContent = y, a.classList.add("show"), setTimeout(() => a.classList.remove("show"), 2600));
  }
}
customElements.get("move-assistant-card") || (customElements.define("move-assistant-card", Jr), window.customCards = window.customCards || [], window.customCards.push({
  type: "move-assistant-card",
  name: "Move Assistant",
  description: "Guided movement timer with your Home Assistant activity data.",
  preview: !1
}), console.info(`%c MOVE ASSISTANT %c ${Kr} `, "background:#D0FF00;color:#090909;font-weight:700", ""));
