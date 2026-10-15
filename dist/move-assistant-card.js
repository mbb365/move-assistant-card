const cr = ':host{display:flex;flex-direction:column;min-height:calc(100dvh - var(--header-height,0px));position:relative;background:#050505;color-scheme:dark;--bg:#050505;--page:#090909;--card:#1d1d1d;--card2:#242424;--tile:#252525;--tile-2:#292929;--row:#2a2a2a;--row-rest:#22252a;--raised:#282828;--chip:#292929;--bar-track:#292929;--control:#171717;--control-2:#1b1b1b;--sunken:#171717;--input:#151515;--track:#151515;--modal:#202020;--icon-bg:#313131;--text:#f4f4f4;--soft:#cfcfcf;--muted:#969696;--accent-text:var(--secondary);--line:#3f3f3f;--lineb:#252525;--field-line:#3f3f3f;--divider:#343434;--border-hover:#5a5a5a;--bright:#efefef;--on-bright:#090909;--switch-off:#444;--knob-off:#ddd;--slider-fill:#efefef;--segment:#3f3f3f;--segment-fill:#efefef;--timer:#0d0d0d;--timer-fill:#f2f2f2;--stage:#151515;--hover:rgba(255,255,255,.06);--wash:rgba(255,255,255,.04);--wash-2:rgba(255,255,255,.08);--wash-3:rgba(255,255,255,.12);--wash-4:rgba(255,255,255,.22);--today-ring:rgba(255,255,255,.35);--dot-empty:#555;--scroll-thumb:#4a4a4a;--checkin-due:#232323;--danger:#ff7777;--danger-bg:#311313;--danger-line:#8c2e2e;--danger-fill:#D53D3D;--scrim:rgba(0,0,0,.66);--lift:rgba(0,0,0,.5);--r:36px;--gap:20px}*{box-sizing:border-box}#app{color:var(--text);font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif;transition:background .25s ease,color .25s ease;-webkit-font-smoothing:antialiased}[hidden]{display:none!important}button,input{font:inherit}#app{flex:1;display:flex;flex-direction:column;width:100%;margin:0;padding:0;background:var(--bg);text-align:left}.shell{flex:1;display:flex;flex-direction:column;position:relative;width:100%;background:var(--page);border-radius:0;overflow:visible;transition:background .28s ease}#app.resting .shell{background:#1f7a4d}#app.paused .shell{background:var(--primary)}#app.light.paused .shell{background:color-mix(in srgb,var(--primary) 55%,white)}#app.light{--bg:#EEEDED;--page:#EEEDED;--card:#FFFFFF;--card2:#F7F6F6;--tile:#F4F3F3;--tile-2:#F4F3F3;--row:#F4F3F3;--row-rest:#ECF1F6;--raised:#F4F3F3;--chip:#EEEDED;--bar-track:#EEEDED;--control:#FFFFFF;--control-2:#FFFFFF;--sunken:#F4F3F3;--input:#FFFFFF;--track:#E3E1E1;--modal:#FFFFFF;--icon-bg:var(--primary-tint);--text:#222222;--soft:#3F3F3F;--muted:#6B6B6B;--accent-text:#5B7A00;--line:#FFFFFF;--lineb:#FFFFFF;--field-line:#DAD8D8;--divider:#E6E4E4;--border-hover:#C9C7C7;--bright:#222222;--on-bright:#FFFFFF;--switch-off:#D8D6D6;--knob-off:#FFFFFF;--slider-fill:color-mix(in srgb,var(--primary) 45%,white);--segment:#D3D1D1;--segment-fill:var(--primary);--timer:#FFFFFF;--timer-fill:color-mix(in srgb,var(--primary) 30%,white);--stage:#FFFFFF;--hover:rgba(0,0,0,.05);--wash:rgba(0,0,0,.04);--wash-2:rgba(0,0,0,.06);--wash-3:rgba(0,0,0,.1);--wash-4:rgba(0,0,0,.14);--today-ring:rgba(0,0,0,.25);--dot-empty:#bbb;--scroll-thumb:#CFCDCD;--checkin-due:#FFFFFF;--danger:#C62F2F;--danger-bg:#F5DEDE;--danger-line:#E3A0A0;--scrim:rgba(20,20,20,.32);--lift:rgba(0,0,0,.16)}#app.light .activityRow:nth-child(1) .activityRowIcon{background:var(--primary-tint);color:var(--primary-ink)!important}#app.light .activityRow:nth-child(2) .activityRowIcon{background:#ffe8c8;color:#c8741f!important}#app.light .activityRow:nth-child(3) .activityRowIcon{background:#d9f4e6;color:#2e8b63!important}#app.light .activityIcon{background:#e8e1ff;color:#7859c9!important}#app.light .energyBtn:hover,#app.light .energyBtn:focus-visible,#app.light .energyBtn.selected{background:color-mix(in srgb,var(--feeling-color) 34%,white);color:#222!important}:host(.lightBody){background:#eeeded;color-scheme:light}#app.light.resting .shell{background:#7dbb98}.view{display:none;width:100%;max-width:1184px;margin:0 auto;padding:22px 22px 76.8px}.view.active{display:block;flex:1 0 auto}.card,.panel,.tile{position:relative;background:var(--card);border-radius:36px;padding:22px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.grid{display:grid;grid-template-columns:repeat(12,minmax(0,1fr));gap:16px}.eyebrow{text-transform:uppercase;color:var(--muted)}.sub{color:var(--muted);margin-top:6.4px}.pill,.primary,.navBtn,.tab,.back,.hideBtn,.addBtn{cursor:pointer}.pill{min-height:0;padding:3.2px 0;border:0;border-radius:0;background:transparent;color:var(--text);text-decoration-line:underline;text-decoration-thickness:.8px;text-underline-offset:3.2px}.tab,.back{border-radius:799.2px;min-height:41.6px;padding:0 16px;background:var(--control);border:.32px solid var(--line);color:var(--text)}.primary{border-radius:799.2px;min-height:41.6px;padding:0 17.6px;border:0;background:var(--bright);color:var(--on-bright)}.topbar{display:flex;justify-content:space-between;gap:16px;align-items:flex-start;margin-bottom:19.2px}.activityCard,.weekly{grid-column:span 6}.energySection{grid-column:span 12;margin-top:16px}.activityCard,.weekly{min-height:288px}.wellness{width:100%}.sourceTag{display:inline-flex;margin-top:11.2px;padding:6.4px 9.6px;border-radius:799.2px;background:var(--chip);color:var(--soft)}.workoutFooter{display:flex;justify-content:space-between;align-items:end;gap:22.4px;flex-wrap:wrap;margin-top:22.4px;width:100%;box-sizing:border-box}.workoutGallery{grid-column:span 12;display:flex;gap:16px;height:288px;overflow:hidden}.workoutPanel{position:relative;height:288px;flex:1 1 72px;min-width:70.4px;background:var(--card);border-radius:28.8px;padding:22.4px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);overflow:hidden;box-sizing:border-box;transition:flex .32s ease;cursor:pointer}.workoutPanel.active{flex:7 1 0;min-width:0;cursor:default}.workoutPanel.addPanel{flex:0 0 73.6px;min-width:73.6px;display:flex;align-items:center;justify-content:center;padding:14.4px}.workoutPanel{--edge-proximity:0;--cursor-angle:45deg;--edge-sensitivity:36;--color-sensitivity:56;--cone-spread:25;--fill-opacity:.18;--glow-color:hsl(199deg 97% 68% / 100%);--glow-color-60:hsl(199deg 97% 68% / 60%);--glow-color-50:hsl(199deg 97% 68% / 50%);--glow-color-40:hsl(199deg 97% 68% / 40%);--glow-color-30:hsl(199deg 97% 68% / 30%);--glow-color-20:hsl(199deg 97% 68% / 20%);--glow-color-10:hsl(199deg 97% 68% / 10%);--gradient-one:radial-gradient(at 80% 55%,#c084fc 0px,transparent 50%);--gradient-two:radial-gradient(at 69% 34%,#f472b6 0px,transparent 50%);--gradient-three:radial-gradient(at 8% 6%,#38bdf8 0px,transparent 50%);--gradient-four:radial-gradient(at 41% 38%,#c084fc 0px,transparent 50%);--gradient-five:radial-gradient(at 86% 85%,#f472b6 0px,transparent 50%);--gradient-six:radial-gradient(at 82% 18%,#38bdf8 0px,transparent 50%);--gradient-seven:radial-gradient(at 51% 4%,#f472b6 0px,transparent 50%);isolation:isolate}.workoutPanel:before,.workoutPanel:after,.workoutPanel>.edgeLight{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:28.8px;pointer-events:none;transition:opacity .18s ease-out}.workoutPanel:before{z-index:2;border:.8px solid transparent;background:linear-gradient(var(--card) 0 100%) padding-box,linear-gradient(#fff0 0,#fff0) border-box,var(--gradient-one) border-box,var(--gradient-two) border-box,var(--gradient-three) border-box,var(--gradient-four) border-box,var(--gradient-five) border-box,var(--gradient-six) border-box,var(--gradient-seven) border-box;opacity:clamp(0,calc(.72 * (var(--edge-proximity) - var(--color-sensitivity)) / (100 - var(--color-sensitivity))),.72);-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,black calc(var(--cone-spread) * 1%),transparent calc((var(--cone-spread) + 15) * 1%),transparent calc((100 - var(--cone-spread) - 15) * 1%),black calc((100 - var(--cone-spread)) * 1%));mask-image:conic-gradient(from var(--cursor-angle) at center,black calc(var(--cone-spread) * 1%),transparent calc((var(--cone-spread) + 15) * 1%),transparent calc((100 - var(--cone-spread) - 15) * 1%),black calc((100 - var(--cone-spread)) * 1%))}.workoutPanel:after{z-index:1;border:.8px solid transparent;background:var(--gradient-one) padding-box,var(--gradient-two) padding-box,var(--gradient-three) padding-box,var(--gradient-four) padding-box,var(--gradient-five) padding-box,var(--gradient-six) padding-box,var(--gradient-seven) padding-box;opacity:clamp(0,calc(var(--fill-opacity) * (var(--edge-proximity) - var(--color-sensitivity)) / (100 - var(--color-sensitivity))),.18);mix-blend-mode:soft-light;-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,transparent 5%,black 15%,black 85%,transparent 95%);mask-image:conic-gradient(from var(--cursor-angle) at center,transparent 5%,black 15%,black 85%,transparent 95%)}.workoutPanel>.edgeLight{top:-19.2px;right:-19.2px;bottom:-19.2px;left:-19.2px;z-index:3;opacity:clamp(0,calc(.62 * (var(--edge-proximity) - var(--edge-sensitivity)) / (100 - var(--edge-sensitivity))),.62);mix-blend-mode:plus-lighter;-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,black 2.5%,transparent 10%,transparent 90%,black 97.5%);mask-image:conic-gradient(from var(--cursor-angle) at center,black 2.5%,transparent 10%,transparent 90%,black 97.5%)}.workoutPanel>.edgeLight:before{content:"";position:absolute;top:19.2px;right:19.2px;bottom:19.2px;left:19.2px;border-radius:28.8px;box-shadow:inset 0 0 0 .8px var(--glow-color-60),inset 0 0 2.4px 0 var(--glow-color-40),inset 0 0 6.4px 0 var(--glow-color-30),inset 0 0 12.8px 0 var(--glow-color-20),0 0 2.4px 0 var(--glow-color-40),0 0 6.4px 0 var(--glow-color-30),0 0 12.8px 0 var(--glow-color-20),0 0 22.4px 1.6px var(--glow-color-10)}.workoutPanel:not(.borderGlowActive):before,.workoutPanel:not(.borderGlowActive):after,.workoutPanel:not(.borderGlowActive)>.edgeLight{opacity:0;transition:opacity .35s ease-out}#app.light .workoutPanel{--glow-color:hsl(199deg 97% 48% / 100%);--glow-color-50:hsl(199deg 97% 48% / 50%);--glow-color-40:hsl(199deg 97% 48% / 40%);--glow-color-30:hsl(199deg 97% 48% / 30%);--glow-color-20:hsl(199deg 97% 48% / 20%);--glow-color-10:hsl(199deg 97% 48% / 10%)}.workoutPanel:not(.active):not(.addPanel) .panelExpanded{opacity:0;filter:blur(8px);pointer-events:none}.workoutPanel:not(.active):not(.addPanel) .panelCollapsed{opacity:1;filter:blur(0)}.workoutPanel.active .panelExpanded{opacity:1;filter:blur(0);pointer-events:auto}.workoutPanel.active .panelCollapsed{opacity:0;filter:blur(6.4px);pointer-events:none}.panelExpanded{position:relative;z-index:4;width:100%;height:100%;min-width:0;box-sizing:border-box;display:flex;flex-direction:column;justify-content:space-between;transition:opacity .22s ease,filter .22s ease}.panelCollapsed{position:absolute;top:0;right:0;bottom:0;left:0;z-index:4;display:flex;align-items:center;justify-content:center;opacity:0;filter:blur(6.4px);transition:opacity .22s ease,filter .22s ease}.panelCollapsedText{writing-mode:vertical-rl;transform:rotate(180deg);white-space:nowrap}.workoutPanelTop{display:flex;justify-content:space-between;align-items:flex-start;gap:22.4px;width:100%;min-width:0;box-sizing:border-box}.workoutPanelActions{display:flex;gap:22.4px;flex-wrap:wrap;align-items:center;justify-content:flex-end;margin-left:auto}.startWorkoutBtn{background:var(--primary)!important;color:#090909!important}.startWorkoutBtn:hover{filter:brightness(1.04)}.addPanelPlus{position:relative;z-index:4;font-size:27.2px;line-height:1}.addPanelLabel{position:absolute;z-index:4;bottom:16px;writing-mode:vertical-rl;transform:rotate(180deg);color:var(--muted)}@media (max-height:820px) and (min-width:621px){.modalStatic{padding:17.6px 22.4px}.timeTile{min-height:124.8px}}@media (max-width:900px){.weekCopy{white-space:normal}.workoutGallery{overflow-x:auto;scroll-snap-type:x mandatory;padding-bottom:3.2px}.workoutPanel,.workoutPanel.active{height:288px;flex:0 0 min(68.8vw,544px);min-width:min(68.8vw,544px);scroll-snap-align:start}.workoutPanel.addPanel{flex-basis:80px;min-width:80px}.panelCollapsed{display:none}}.moveActions{display:flex;gap:22.4px;flex-wrap:wrap}.energyFloat{padding:22.4px;background:transparent;border:0}.energyScale{display:grid;grid-template-columns:repeat(6,minmax(0,1fr));gap:9.6px;margin-top:17.6px}.energyBtn{--feeling-color:#8f8f8f;--feeling-glow:rgba(255,255,255,.14);position:relative;isolation:isolate;overflow:hidden;width:100%;min-height:43.2px;padding:0 9.6px;white-space:nowrap;border-radius:12.8px;background:var(--raised);border:.32px solid var(--line);color:var(--text);cursor:pointer;transition:color .18s ease,border-color .18s ease,background .18s ease}.energyBtn>span{position:relative;z-index:2}.energyBtn:before{content:"";position:absolute;top:-18%;right:-18%;bottom:-18%;left:-18%;z-index:-2;opacity:0;background:radial-gradient(ellipse at var(--feel-x,50%) var(--feel-y,50%),color-mix(in srgb,var(--feeling-color) 88%,transparent) 0%,color-mix(in srgb,var(--feeling-color) 54%,transparent) 34%,transparent 72%);transform:scale(.82) skew(-3deg);filter:saturate(1.08) blur(.8px);transition:opacity .18s ease,transform .28s cubic-bezier(.2,.8,.2,1)}.energyBtn:after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;z-index:-1;opacity:0;pointer-events:none;background:repeating-linear-gradient(to bottom,rgba(255,255,255,.07) 0,rgba(255,255,255,.07) .8px,transparent .8px,transparent 3.2px),linear-gradient(90deg,transparent 0%,color-mix(in srgb,var(--feeling-color) 34%,transparent) var(--feel-x,50%),transparent 100%);mix-blend-mode:screen}.energyBtn:hover:before,.energyBtn:focus-visible:before,.energyBtn.selected:before{opacity:.92;transform:translate(var(--feel-shift-x,0px),var(--feel-shift-y,0px)) scale(1.08) skew(2deg);animation:feelingWarp 1.45s ease-in-out infinite alternate}.energyBtn:hover:after,.energyBtn:focus-visible:after,.energyBtn.selected:after{opacity:.55;animation:feelingScan .9s linear infinite}.energyBtn:hover,.energyBtn:focus-visible,.energyBtn.selected{background:color-mix(in srgb,var(--feeling-color) 42%,#171717);border-color:color-mix(in srgb,var(--feeling-color) 72%,#ffffff 10%);color:#f4f4f4}.energyBtn.selected{box-shadow:inset 0 0 0 .8px color-mix(in srgb,var(--feeling-color) 58%,transparent),0 0 14.4px color-mix(in srgb,var(--feeling-color) 24%,transparent)}.energyBtn[data-energy=Drained]{--feeling-color:#6E63A8}.energyBtn[data-energy=Low]{--feeling-color:#5878A8}.energyBtn[data-energy=Okay]{--feeling-color:#6F8B8A}.energyBtn[data-energy=Good]{--feeling-color:#5F9B72}.energyBtn[data-energy=Energised]{--feeling-color:#D5A53E}.energyBtn[data-energy=Great]{--feeling-color:#D56B54}@keyframes feelingWarp{0%{transform:scale(1.03) skew(-2deg) translate(-1.5%);filter:saturate(1.02) blur(.8px)}50%{transform:scale(1.12) skew(1deg) translate(1%);filter:saturate(1.22) blur(1.5px)}to{transform:scale(1.06) skew(3deg) translate(-.5%);filter:saturate(1.1) blur(.6px)}}@keyframes feelingScan{0%{background-position:0 0,-80% 0}to{background-position:0 8px,180% 0}}@media (prefers-reduced-motion: reduce){.energyBtn:before,.energyBtn:after{animation:none!important}}.energyHistory{display:grid;gap:6.4px;margin-top:9.6px}.energyLog{display:flex;justify-content:space-between;gap:9.6px;padding:8px 9.6px;border-radius:16px;background:var(--tile)}.energyLog span:last-child{color:var(--muted)}.tempoExperiment{margin-top:14.4px;padding-top:16px;border-top:.32px solid var(--line)}.tempoExperimentHead{display:flex;justify-content:space-between;align-items:flex-start;gap:16px;margin-bottom:12.8px}.tempoEstimate{white-space:nowrap}.tempoQuad{position:relative;width:min(288px,100%);aspect-ratio:1/1;border-radius:28.8px;background:#ffffff06;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);overflow:hidden;touch-action:none;cursor:crosshair}.tempoCross{position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none;background:linear-gradient(to right,transparent calc(50% - .4px),rgba(255,255,255,.12) 50%,transparent calc(50% + .4px)),linear-gradient(to bottom,transparent calc(50% - .4px),rgba(255,255,255,.12) 50%,transparent calc(50% + .4px))}.tempoDot{position:absolute;left:50%;top:50%;width:17.6px;height:17.6px;border-radius:50%;background:var(--text);transform:translate(-50%,-50%);pointer-events:none;box-shadow:0 0 0 4.8px #ffffff12}.tempoPole{position:absolute;pointer-events:none;color:var(--muted)}.tempoFast{top:9.6px;left:50%;transform:translate(-50%)}.tempoSlow{bottom:9.6px;left:50%;transform:translate(-50%)}.tempoHard{right:9.6px;top:50%;transform:translateY(-50%)}.tempoLow{left:9.6px;top:50%;transform:translateY(-50%)}.tempoReadout{margin-top:9.6px;color:var(--muted)}.tempoRevealRow{margin-top:11.2px}.tempoRevealBtn{color:var(--muted);text-decoration-color:var(--muted)}.editTempoExperiment{margin-top:11.2px}.editTempoExperiment[hidden]{display:none}.testingZone{position:relative;overflow:hidden;border-radius:22.4px;background:#202226;border:.8px solid #4a4f58;box-shadow:none;--text:#d6d9df;--soft:#c7ccd5;--muted:#9ea5b0;--line:#4a4f58;--lineb:#4a4f58;--field-line:#4a4f58;color:var(--text)}.testingZoneInner{position:relative;padding:19.2px;background:linear-gradient(rgba(176,186,199,.045) .8px,transparent .8px),linear-gradient(90deg,rgba(176,186,199,.045) .8px,transparent .8px),#202226;background-size:16px 16px}.testingZoneTitleBlock{max-width:608px;margin-bottom:19.2px}.testingZoneTitleRow{display:flex;justify-content:space-between;align-items:center;gap:16px}.testingZoneTitleRow strong{color:#d6d9df}.testingZone .tempoEstimate{color:#aeb4bf}.testingZoneExplanation{margin:8px 0 0;color:#9ea5b0;text-align:left}.testingZoneLayout{display:grid;grid-template-columns:minmax(224px,288px) minmax(0,1fr);grid-template-areas:"controller feedback";gap:25.6px;align-items:start}.testingFeedbackForm{grid-area:feedback;display:grid;gap:14.4px;min-width:0;padding:16px;border:.32px solid var(--line);border-radius:16px;background:#252525}.testingFeedbackHeading{color:#d6d9df}.testingFeedbackField{display:grid;gap:6.4px;color:#9ea5b0}.testingFeedbackField select,.testingFeedbackField textarea{width:100%;border:.32px solid var(--line);background:#171717;color:#d6d9df;border-radius:11.2px;padding:8px 9.6px;font:inherit}.testingFeedbackField textarea{resize:vertical;min-height:65.6px}.testingRating{display:grid;grid-template-columns:repeat(5,1fr);gap:4.8px}.testingRating button{min-height:30.4px;border-radius:9.6px;border:.32px solid var(--line);background:#171717;color:#c7ccd5;cursor:pointer}.testingRating button.selected{border-color:#c7ccd5;background:#343434}.testingFeedbackSubmit{justify-self:start;min-height:33.6px;padding:0 12.8px;border-radius:11.2px;border:0;background:#ffffffe0;color:#111;cursor:pointer}.testingZoneControllerWrap{grid-area:controller;display:flex;flex-direction:column;align-items:center;justify-content:flex-start}.tempoQuadFrame{width:min(256px,100%);aspect-ratio:1/1;padding:0;background:linear-gradient(rgba(176,186,199,.075) .8px,transparent .8px),linear-gradient(90deg,rgba(176,186,199,.075) .8px,transparent .8px),#202226;background-size:16px 16px,16px 16px,auto;border-radius:16px}.testingZone .tempoQuad{width:100%;height:100%;border-radius:16px;background:#202226;border:.8px solid #5a606a;box-shadow:none}.testingZone .tempoCross{background:linear-gradient(to right,transparent calc(50% - .4px),rgba(176,186,199,.2) 50%,transparent calc(50% + .4px)),linear-gradient(to bottom,transparent calc(50% - .4px),rgba(176,186,199,.2) 50%,transparent calc(50% + .4px))}.testingZone .tempoDot{width:14.4px;height:14.4px;background:transparent;border:.8px solid #c4cad4;box-shadow:0 0 0 3.2px #c4cad40d}.testingZone .tempoPole{color:#8e96a2}.testingZone .tempoReadout{width:min(256px,100%);color:#9ea5b0;text-align:center;margin-top:9.6px}.testingZone button,.testingZone input,.testingZone select,.testingZone textarea{transition:opacity .14s ease,border-color .14s ease,color .14s ease,background .14s ease}.testingZone button:hover,.testingZone button:focus-visible{filter:none;opacity:.88}@media (max-width:900px){.testingZoneLayout{grid-template-columns:1fr;grid-template-areas:"controller" "feedback"}}.activityHeader{display:flex;align-items:center;gap:11.2px;margin-bottom:16px}.activityIcon{width:35.2px;height:35.2px;border-radius:13.6px;background:var(--icon-bg);display:grid;place-items:center;font-size:16px}.activityRows{display:grid;gap:9.6px}.activityRow{display:grid;grid-template-columns:43.2px minmax(0,1fr);align-items:center;gap:11.2px;background:var(--tile-2);border-radius:24px;padding:12px 14px}.activityRowIcon{width:43.2px;height:43.2px;border-radius:16px;background:var(--icon-bg);display:grid;place-items:center;font-size:16px}.activityRowMeta{color:var(--soft);margin-top:2.4px}.toast{position:absolute;right:20.8px;top:20.8px;z-index:60;background:var(--bright);color:var(--on-bright);border-radius:799.2px;padding:8.8px 12.8px;opacity:0;transform:translateY(-6.4px);pointer-events:none;transition:opacity .18s ease,transform .18s ease}.toast.show{opacity:1;transform:none}.weekHero{display:block}.weekCopy{color:var(--muted);margin-top:9.6px;max-width:none;white-space:nowrap}.weekChips{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:8px;margin-top:19.2px}.weekChip{background:var(--tile-2);border-radius:12.8px;min-height:60.8px;padding:9.6px 11.2px;display:flex;flex-direction:column;justify-content:space-between;gap:6.4px}.weekChipTop{display:flex;justify-content:space-between;align-items:center;gap:6.4px}.weekChipMeta{color:var(--muted)}.weekTick{font-size:11.2px;font-weight:800;line-height:1}.weekChip.total{background:var(--card2)}.workoutSurface{position:relative;overflow:hidden;isolation:isolate}.workoutContent{position:relative;z-index:2}.pixelTrailCanvas{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;z-index:1;pointer-events:none}#app.light .pixelTrailCanvas{opacity:.46}.sessionHead{display:flex;justify-content:space-between;align-items:flex-start;gap:16px}.sessionActions{display:flex;gap:22.4px;align-items:center;flex-wrap:wrap;justify-content:flex-end}.holdEnd{position:relative;overflow:hidden;min-width:110.4px;min-height:41.6px;padding:0 16px;border-radius:799.2px;border:.32px solid var(--line);background:var(--control);text-decoration:none;user-select:none;-webkit-user-select:none;touch-action:none}.holdEndFill{position:absolute;inset:0 auto 0 0;width:0;background:var(--bright);pointer-events:none}.holdEndLabel{position:relative;z-index:1;mix-blend-mode:difference;color:#fff}.holdEnd.holding{border-color:var(--muted)}.exerciseTitle{margin-top:4.8px;color:var(--accent-text)}.meta{color:var(--muted);margin-top:4.8px}.progress{height:46.4px;padding:0;background:transparent;border-radius:17.6px;display:flex;gap:3.2px;margin-top:19.2px;overflow:hidden}.progressSegment{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:0;padding:0;display:block;flex:1;min-width:0;background:var(--segment);border-radius:17.6px;position:relative;overflow:hidden;cursor:default}.progressSegment:after{content:"";position:absolute;inset:0 auto 0 0;width:0;background:var(--segment-fill);transition:width .2s linear}.progressSegment.done{background:transparent;opacity:0;pointer-events:none}.progressSegment.done:after{display:none}.progressSegment.active:after{width:var(--segment-progress,0%)}#app.resting .progressSegment:not(.done):not(.active),#app.paused .progressSegment:not(.done):not(.active){background:#fff}.progressSegment.rewindable{cursor:pointer}.progressSegment.rewindable:hover{filter:brightness(1.08)}.progressSegment:focus-visible{outline:1.6px solid var(--primary);outline-offset:-2.4px}.workGrid{display:grid;grid-template-columns:minmax(0,2fr) minmax(240px,1fr);gap:16px;margin-top:16px}.timerCard,.movementCard,.nextCard{position:relative;border-radius:28.8px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.timerCard{min-height:344px;background:var(--timer);overflow:hidden}.fill{position:absolute;inset:0 auto 0 0;width:100%;background:var(--timer-fill);transition:width .2s linear}.digits{position:absolute;top:0;right:0;bottom:0;left:0;display:flex;align-items:center;justify-content:center;font-size:clamp(152px,22.4vw,312px);font-weight:850;letter-spacing:-.11em;color:#fff;mix-blend-mode:difference;font-variant-numeric:tabular-nums}.movementCard{background:var(--stage);min-height:344px;display:grid;place-items:center;padding:22.4px}.movementMark{font-size:16px;font-weight:760;color:var(--soft);text-align:center}.movementCard{overflow:hidden}.movementRippleCanvas{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;z-index:0}.movementMark{position:relative;z-index:2}.nextCard{background:var(--card);padding:22.4px;display:flex;justify-content:space-between;align-items:center;gap:16px;min-height:116.8px}.nextIcon{width:52.8px;height:52.8px;border-radius:19.2px;background:var(--icon-bg);display:grid;place-items:center;font-size:20.8px;flex:0 0 auto}.sectionLabel{margin:0 0 8px 22.4px}.moveSection{grid-column:span 12}.moveSection .workoutGallery{width:100%}.nextWrap{margin-top:16px}.nextLabel{margin:0 0 8px 22.4px}.nextCard{background:var(--card);padding:22.4px;display:flex;justify-content:space-between;align-items:center;gap:22.4px;min-height:86.4px;border-radius:28.8px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.nextMain{display:flex;align-items:center;gap:14.4px;min-width:0}.nextIcon{width:43.2px;height:43.2px;border-radius:12.8px;background:var(--icon-bg);display:grid;place-items:center;font-size:16px;flex:0 0 auto}.sessionControlRow{display:flex;justify-content:flex-end;gap:22.4px;align-items:center;margin-top:16px}.nextActions{display:flex;gap:22.4px;align-items:center;flex:0 0 auto}.skipBtn{min-width:120px;min-height:41.6px;padding:0 14.4px;border:.8px solid var(--line);background:transparent;color:var(--text);text-decoration:none}.pause{min-width:120px;min-height:41.6px;padding:0 14.4px}#app.light .nextIcon{background:#ffe6ef;color:#bd4b7a!important}.upcomingList{display:grid;gap:9.6px;margin-top:9.6px}.upcomingCard{--future-opacity:1;display:flex;align-items:center;justify-content:space-between;gap:22.4px;min-height:86.4px;padding:22.4px;border-radius:28.8px;background:var(--card);border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);opacity:var(--future-opacity);transition:opacity .22s ease}.upcomingCard:nth-child(-n+3){--future-opacity:1}.upcomingCard:nth-child(4){--future-opacity:.72}.upcomingCard:nth-child(5){--future-opacity:.48}.upcomingCard:nth-child(6){--future-opacity:.3}.upcomingCard:nth-child(n+7){--future-opacity:.16}.upcomingCard.sessionHidden{--future-opacity:.24!important;filter:saturate(.15)}.upcomingCard.sessionHidden .upcomingName{text-decoration:line-through}.upcomingCard.sessionHidden .upcomingIcon{opacity:.45}.upcomingCard.sessionHidden .upcomingMeta{opacity:.55}.upcomingInfo{display:flex;align-items:center;gap:14.4px;min-width:0}.upcomingIcon{width:43.2px;height:43.2px;flex:0 0 auto;border-radius:12.8px;background:var(--icon-bg);display:grid;place-items:center;font-size:16px}.upcomingMeta{color:var(--muted);margin-top:4px}.skipSessionBtn{flex:0 0 auto;min-height:41.6px;padding:0 14.4px;border:.8px solid var(--line);background:transparent;color:var(--text)}#app.light .upcomingIcon{background:var(--primary-tint);color:var(--primary-ink)!important}@media (max-width:900px){.weekCopy{white-space:normal}.nextCard{align-items:flex-start;flex-direction:column}.sessionControlRow{width:100%}.skipBtn,.pause{flex:1;min-width:0}.upcomingCard{align-items:flex-start;flex-direction:column}.skipSessionBtn{width:100%}}.countdown{display:none;position:fixed;top:0;right:0;bottom:0;left:0;width:100vw;height:100dvh;background:var(--page);z-index:300;align-items:center;justify-content:center;flex-direction:column;text-align:center;overflow:hidden}.countdown.active{display:flex}.pixelCanvas{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;display:block;z-index:1}.countdown:before{content:"";position:absolute;top:0;right:0;bottom:0;left:0;background:radial-gradient(circle at center,color-mix(in srgb,var(--primary) 16%,transparent),transparent 58%);pointer-events:none}.countNum{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);z-index:3}.countNum{font-size:clamp(144px,25.6vw,344px);font-weight:850;line-height:.75;letter-spacing:-.1em}.modalBackdrop{display:none;position:fixed;top:0;right:0;bottom:0;left:0;width:100vw;height:100dvh;z-index:145;background:var(--scrim);padding:28px;box-sizing:border-box;align-items:center;justify-content:center}.modalBackdrop.open{display:flex}.modal{width:min(1184px,100%);height:100%;max-width:1184px;max-height:none;overflow:hidden;background:var(--modal);border-radius:28.8px;padding:0;display:flex;flex-direction:column;box-sizing:border-box;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.modalStatic{flex:0 0 auto;padding:22.4px;background:var(--modal);border-bottom:.32px solid var(--divider)}.modalHead{display:flex;justify-content:space-between;align-items:flex-start;gap:16px;margin-bottom:12.8px}.modalHeaderActions{display:flex;gap:22.4px;align-items:center;flex:0 0 auto}.modalHead h2{margin:2.4px 0 0}.editNameRow{display:grid;gap:6.4px;margin-bottom:11.2px}.editNameLabel{color:var(--muted)}.editNameInput{min-height:46.4px;border-radius:17.6px;border:.32px solid var(--field-line);background:var(--input);color:var(--text);padding:0 14.4px}.timeTiles{display:grid;grid-auto-flow:column;grid-auto-columns:minmax(0,1fr);gap:11.2px;margin-bottom:11.2px}.timeTile{background:var(--tile);min-height:148.8px;padding:16px;display:flex;flex-direction:column;justify-content:space-between}.timeHeader{display:flex;align-items:center;gap:14.4px}.timeIcon{width:46.4px;height:46.4px;border-radius:16px;background:var(--icon-bg);display:grid;place-items:center;flex:0 0 auto;font-size:17.6px;font-weight:760}.timeCopy{min-width:0}.timeValue{color:var(--soft);margin-top:5.6px}.rangeTrack{height:46.4px;border-radius:17.6px;background:var(--track);overflow:hidden;position:relative;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.rangeFill{position:absolute;inset:0 auto 0 0;background:var(--slider-fill);border-radius:17.6px 0 0 17.6px}.rangeInput{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;opacity:0;cursor:pointer}.exerciseScroller{min-height:0;overflow-y:auto;padding:3.2px 16px 17.6px 22.4px;border-top:.16px solid var(--divider);scrollbar-gutter:stable}.exerciseScroller::-webkit-scrollbar{width:6.4px}.exerciseScroller::-webkit-scrollbar-track{background:transparent}.exerciseScroller::-webkit-scrollbar-thumb{background:var(--scroll-thumb);border-radius:799.2px}.sectionTitle{text-transform:uppercase;color:var(--muted);margin:14.4px 0 8px}.moveList{display:grid;gap:8px}.moveRow{display:flex;justify-content:space-between;align-items:center;gap:22.4px;background:var(--row);border-radius:20.8px;padding:22.4px}.moveRow.hidden{opacity:.46}.moveRow.hidden .moveItemName{text-decoration:line-through}.moveMeta{color:var(--muted);margin-top:4px}.hideBtn{border-radius:799.2px;min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text)}.removeBtn{position:relative;overflow:hidden;border-radius:799.2px;min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);cursor:pointer}.removeFill{position:absolute;inset:0 auto 0 0;width:0;background:var(--danger-fill);pointer-events:none;transition:width 0s linear}.addRow{display:grid;grid-template-columns:1fr auto;gap:8px;margin-top:14.4px}.addInput{min-height:41.6px;border-radius:799.2px;border:.32px solid var(--field-line);background:var(--input);color:var(--text);padding:0 14.4px}.addBtn{border-radius:799.2px;min-height:41.6px;padding:0 14.4px;border:0;background:var(--bright);color:var(--on-bright)}.routineSummary{margin-top:14.4px;background:var(--sunken);border-radius:20.8px;padding:12.8px 14.4px;color:var(--soft)}.settingsHeader{display:flex;align-items:center;gap:12.8px;margin-bottom:24px}.back{width:46.4px;padding:0;font-size:24px}.tabs.rubberTabs{position:relative;display:inline-flex;gap:0;padding:3.2px;margin-bottom:17.6px;border-radius:12.8px;background:var(--control);border:.32px solid var(--line);overflow:hidden}.rubberIndicator{position:absolute;top:3.2px;left:3.2px;height:calc(100% - 6.4px);width:0;border-radius:12.8px;background:var(--bright);transition:left .34s cubic-bezier(.2,1.35,.4,1),width .34s cubic-bezier(.2,1.35,.4,1),transform .18s ease;transform-origin:center;z-index:0}.tabs.rubberTabs .tab{position:relative;z-index:1;min-height:41.6px;padding:0 16px;border:0;background:transparent;color:var(--text)}.tabs.rubberTabs .tab.active{color:var(--on-bright)}.settingsPane{display:none}.settingsPane.active{display:block}.integrationList,.toggleList{display:grid;gap:9.6px}.integration,.toggleRow{display:flex;justify-content:space-between;align-items:center;gap:14.4px;background:var(--raised);border-radius:22.4px;padding:14.4px 16px}.status{color:var(--muted);margin-top:3.2px}.note{color:var(--muted);line-height:1.5;max-width:688px}.switch{position:relative;width:46.4px;height:27.2px;border-radius:799.2px;background:var(--switch-off);border:.32px solid var(--field-line);flex:0 0 auto;cursor:pointer}.switch:after{content:"";position:absolute;width:20.8px;height:20.8px;border-radius:799.2px;top:2.4px;left:2.4px;background:var(--knob-off);transition:left .18s ease}.switch.on{background:var(--bright)}.switch.on:after{left:22.4px;background:var(--on-bright)}.themeChoice{display:flex;gap:9.6px;flex-wrap:wrap;align-items:center;margin:0}.themeBtn{min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);cursor:pointer}.themeBtn.active{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.settingsSelect{min-width:96px;min-height:32px;padding:0 27.2px 0 9.6px;border-radius:12.8px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);font:inherit}.motionControlRow{align-items:center}.motionRangeWrap{display:flex;align-items:center;justify-content:flex-end;gap:9.6px;min-width:184px}.motionRangeWrap input{width:128px}.motionRangeWrap span{color:var(--muted);min-width:51.2px;text-align:right}.dangerText{color:var(--danger)}.confirmBackdrop{display:none;position:fixed;top:0;right:0;bottom:0;left:0;z-index:80;padding:22.4px;background:var(--scrim);align-items:center;justify-content:center}.confirmBackdrop.open{display:flex}.confirmCard{width:min(448px,100%);background:var(--card);border-radius:28.8px;padding:22.4px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.confirmActions{display:flex;justify-content:flex-end;align-items:center;gap:22.4px;margin-top:22.4px}.holdDelete{position:relative;overflow:hidden;min-width:88px;min-height:41.6px;padding:0 17.6px;border:.8px solid var(--danger-line);border-radius:12.8px;background:var(--danger-bg);color:var(--text);cursor:pointer}.holdDeleteFill{position:absolute;inset:0 auto 0 0;width:0;background:var(--danger-fill);pointer-events:none}.holdDeleteLabel{position:relative;z-index:1;color:var(--text)}.holdDelete.holding .holdDeleteLabel,.removeBtn.holding .removeLabel{color:#fff}.bottomNav{position:sticky;bottom:22.4px;display:flex;gap:22.4px;z-index:100;width:max-content;margin:-65.6px 0 0 22.4px}.navBtn{width:43.2px;height:43.2px;padding:0;border-radius:16px;background:var(--control);border:.32px solid var(--line);color:var(--text)}.navBtn.active{background:var(--bright);color:var(--on-bright)}@media (max-width:900px){.weekCopy{white-space:normal}.moveOption,.addMoveCard{flex-basis:144px}.weekHero{display:block}.grid{grid-template-columns:1fr}.moveSection,.activityCard,.weekly,.energySection{grid-column:auto}.workGrid{grid-template-columns:1fr}.timerCard,.movementCard{min-height:256px}.weekChips{grid-template-columns:repeat(4,minmax(0,1fr))}.timeTiles{grid-auto-flow:row;grid-template-columns:1fr}}@media (max-width:620px){.modal{width:100%;height:100%;max-height:100%}#app{padding:0}.shell{border-radius:0}.view{padding:14.4px 14.4px 75.2px}.card,.timerCard,.movementCard,.nextCard,.modal,.tile{border-radius:24px}.timerCard{min-height:224px}.digits{font-size:144px}.weekChips{grid-template-columns:repeat(2,minmax(0,1fr))}.modalBackdrop{padding:9.6px}.modal{height:100%}.modalStatic{padding:14.4px}.exerciseScroller{padding:3.2px 9.6px 14.4px 14.4px}.addRow{grid-template-columns:1fr}}button,.primary,.tab,.back,.navBtn,.themeBtn,.energyBtn,.hideBtn,.addBtn,.removeBtn,.skipBtn,.holdEnd,.switch,.editNameInput,.addInput,.rangeTrack,.progress,.progressSegment{border-radius:12px!important}.card,.panel,.tile,.workoutPanel,.timerCard,.movementCard,.nextCard,.modal{border-radius:36px}.movementCreatorLaunch{display:flex;gap:9.6px;align-items:center;margin:3.2px 0 14.4px}.movementCreatorOpen,.restAddBtn{min-height:35.2px;padding:0 12.8px;border-radius:12.8px;cursor:pointer}.movementCreatorOpen{border:0;background:var(--bright);color:var(--on-bright)}.restAddBtn{border:.32px solid var(--field-line);background:var(--control-2);color:var(--text)}.movementCreator{position:relative;margin:0 0 14.4px;padding:19.2px 22.4px;border-radius:22.4px;background:var(--card);border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.movementCreator[hidden]{display:none}.movementCreatorHead{display:flex;align-items:center;justify-content:space-between;gap:16px;margin-bottom:17.6px}.movementCreatorHead h3{margin:0}.movementCreatorClose{position:static}.movementCreatorFields{display:grid;grid-template-columns:minmax(0,1.45fr) minmax(0,.85fr);gap:16px 19.2px}.movementCreatorFields[hidden]{display:none!important}.movementCreatorFields>label{display:grid;gap:6.4px;min-width:0;color:var(--text)}.movementTimingRow{grid-column:1/-1;display:grid;grid-template-columns:minmax(240px,352px) minmax(208px,1fr) auto;gap:17.6px;align-items:end}.durationStack{display:grid;gap:6.4px;color:var(--text)}.creatorDurationRow{display:grid;grid-template-columns:minmax(96px,1fr) minmax(104px,1fr);gap:12.8px;align-items:center}.creatorNumber{width:100%;min-width:0}.creatorUnitSelect{min-height:41.6px;width:100%;padding:0 11.2px;border-radius:12.8px;border:.32px solid var(--field-line);background:var(--input);color:var(--text);font:inherit}.globalTimingToggle{display:flex!important;align-items:center;gap:8px!important;min-height:41.6px;cursor:pointer;color:var(--text)!important;white-space:nowrap}.globalTimingToggle input{position:absolute;opacity:0;pointer-events:none}.toggleTrack{position:relative;width:38.4px;height:22.4px;border-radius:799.2px;background:var(--switch-off);border:.32px solid var(--field-line);flex:0 0 auto;transition:background .16s ease}.toggleThumb{position:absolute;width:17.6px;height:17.6px;top:1.6px;left:1.6px;border-radius:50%;background:var(--knob-off);transition:left .16s ease,background .16s ease}.globalTimingToggle input:checked+.toggleTrack{background:var(--bright)}.globalTimingToggle input:checked+.toggleTrack .toggleThumb{left:17.6px;background:var(--on-bright)}.toggleLabel{color:var(--soft)}.creatorAddButton{min-width:97.6px;min-height:41.6px;align-self:end}@media (max-width:900px){.movementCreatorFields{grid-template-columns:1fr}.movementTimingRow{grid-column:auto;grid-template-columns:1fr;align-items:stretch}.globalTimingToggle{min-height:35.2px}.creatorAddButton{width:100%}}.moveRow.restItem{background:var(--row-rest)}.moveKindBadge{display:inline-flex;margin-left:6.4px;padding:2.4px 5.6px;border:.8px solid var(--field-line);border-radius:799.2px;color:var(--muted);vertical-align:middle}@media (max-width:900px){.movementCreatorFields,.movementCreatorFields.restFields{grid-template-columns:1fr;padding-right:0}.movementCreatorClose{position:static;margin-left:auto;display:block;margin-bottom:12.8px}}.createMoveOptions{margin:0 0 14.4px;padding:14.4px;border-radius:19.2px;background:var(--card2);border:.32px solid var(--line)}.createMoveOptions[hidden]{display:none}.createOptionLabel{text-transform:uppercase;color:var(--muted);margin-bottom:8px}.createPresetChoice{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}.createPresetBtn{min-height:60.8px;padding:11.2px 12.8px;border-radius:14.4px;border:.8px solid var(--field-line);background:transparent;color:var(--text);text-align:left;cursor:pointer}.createPresetBtn strong{display:block}.createPresetBtn span{display:block;color:var(--muted);margin-top:3.2px}.createPresetBtn.active{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.createPresetBtn.active span{color:var(--on-bright);opacity:.68}.createExtras{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px;margin-top:9.6px}.createExtraToggle{display:flex;align-items:flex-start;gap:8px;padding:9.6px 11.2px;border:.8px solid var(--field-line);border-radius:14.4px;cursor:pointer}.createExtraToggle input{margin-top:2.4px}.createExtraToggle span{display:grid;gap:2.4px}.createExtraToggle small{color:var(--muted)}.creatorUnitSelect{min-height:41.6px;padding:0 9.6px;border-radius:12.8px;border:.32px solid var(--field-line);background:var(--input);color:var(--text);font:inherit}.autoRestSummary{display:inline-flex;align-items:center;gap:6.4px;margin-left:6.4px;color:var(--muted)}@media (max-width:900px){.createPresetChoice,.createExtras{grid-template-columns:1fr}}.movementDurationField{display:grid;gap:6.4px}.movementTimingHead{display:flex;align-items:center;justify-content:space-between;gap:9.6px;color:var(--muted)}.globalTimingToggle{display:inline-flex!important;grid-template-columns:none!important;align-items:center;gap:5.6px!important;color:var(--text)!important;white-space:nowrap}.globalTimingToggle input{margin:0}.globalTimingValue{min-height:41.6px;display:flex;align-items:center;padding:0 11.2px;border-radius:12.8px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--muted)}.movementTypeBtn:disabled{opacity:.32;cursor:not-allowed}.createFlow{display:grid;gap:9.6px;padding:3.2px 0 8px}.createFlow[hidden]{display:none}.createStep{border-radius:22.4px;background:var(--tile);border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);overflow:hidden}.createStepHeader{width:100%;min-height:57.6px;padding:14.4px 17.6px;border:0;background:transparent;color:var(--text);display:flex;align-items:center;justify-content:space-between;gap:19.2px;text-align:left;cursor:pointer}.createStepHeader:disabled{cursor:not-allowed;opacity:.42}.createStepIdentity{display:flex;align-items:center;gap:9.6px}.createStepNumber{width:22.4px;height:22.4px;border-radius:799.2px;display:grid;place-items:center;border:.32px solid var(--line);color:var(--muted)}.createStepSummary{min-width:0;color:var(--muted);text-align:right}.createStepBody{display:none;padding:0 14.4px 14.4px}.createStep.active .createStepBody{display:block}.createStep.active .createStepHeader{border-bottom:.32px solid var(--divider)}.createStepSlot{display:grid;gap:11.2px}.createStepFooter{display:flex;justify-content:flex-end;margin-top:14.4px}.createStepFooter .primary:disabled{opacity:.35;cursor:not-allowed}.modal.createMode .movementTimingRow{display:none}.modal.createMode .movementCreator{margin-bottom:8px}.modal.createMode .movementCreatorFields{grid-template-columns:minmax(0,1.4fr) minmax(0,1fr)}.modal.createMode .movementCreatorFields.restFields{grid-template-columns:1fr}.modal.createMode .movementCreatorActions{margin-top:14.4px}.modal.createMode .movementCreatorLaunch{margin-top:0}.modal.createMode .sectionTitle{margin-top:9.6px}.modal.createMode .modalStatic{padding-bottom:14.4px}.modal:not(.createMode) .createFlow{display:none!important}#app.resting .movementCard{background:#ffffff0e}#app.resting .movementRippleCanvas{opacity:1}#app.light.resting .movementCard{background:#ffffff38}.nextCard .skipSessionBtn{margin-left:auto}.modal:not(.createMode) .movementCreatorLaunch{margin-top:25.6px}.testingFeedbackThanks{grid-area:feedback;min-height:176px;padding:19.2px;border:.32px solid var(--line);border-radius:16px;background:#252525;display:flex;flex-direction:column;justify-content:center;align-items:flex-start;gap:6.4px}.testingFeedbackThanks[hidden]{display:none}.testingFeedbackThanks strong{color:#f0f0f0}.testingFeedbackThanks p{margin:0;color:#9ea5b0}.testingFeedbackThanks a{color:#d6d9df;text-underline-offset:2.4px}:host(:fullscreen){overflow:auto;width:100vw;height:100vh}.entitySelect{max-width:min(256px,36.8vw);text-overflow:ellipsis}.integration .status code{padding:.8px 4.8px;border-radius:4.8px;background:var(--wash-2)}.integration .pill[disabled]{cursor:default;opacity:.7}#app :focus{outline:none}#app :focus-visible{outline:2.4px solid var(--primary);outline-offset:2.4px}#app .workoutPanel:focus-visible{outline-offset:-2.4px}@media (max-width:620px){.bottomNav{margin-left:14.4px}}.shell:has(.countdown.active) .bottomNav{visibility:hidden}@media (max-width:900px){.workoutPanel:not(.active):not(.addPanel) .panelExpanded{opacity:1;filter:none;pointer-events:auto}}.grid>*{min-width:0}.energyBtn[data-level="1"]{--feeling-color:#6E63A8}.energyBtn[data-level="2"]{--feeling-color:#5878A8}.energyBtn[data-level="3"]{--feeling-color:#6F8B8A}.energyBtn[data-level="4"]{--feeling-color:#5F9B72}.energyBtn[data-level="5"]{--feeling-color:#D5A53E}.energyBtn[data-level="6"]{--feeling-color:#D56B54}.checkinQuestion+.checkinQuestion{margin-top:28.8px}.checkinStatus{margin-top:17.6px;color:var(--muted)}.checkinStatus.done{color:var(--text)}.checkinStatus.done:before{content:"✓  "}.insightSection{grid-column:span 12;margin-top:16px}.insightCard{display:grid;gap:22.4px}.insightTop{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:22.4px;align-items:end}.insightStats{display:grid;grid-auto-flow:column;grid-auto-columns:minmax(104px,1fr);gap:8px}.insightBody{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1.3fr);gap:22.4px;align-items:end}.insightLines{display:grid;gap:9.6px}.insightLine.muted{color:var(--muted)}.dayStrip{display:grid;grid-template-columns:repeat(14,minmax(0,1fr));gap:4.8px;align-items:end}.day{display:grid;gap:6.4px;justify-items:center}.dayBars{position:relative;width:100%;height:96px;border-radius:9.6px;background:var(--wash);overflow:hidden}.stepBar,.moveBar{position:absolute;bottom:0;border-radius:8px}.stepBar{left:0;right:0;background:var(--wash-3)}.moveBar{left:22%;right:22%;background:var(--primary)}.day.today .dayBars{box-shadow:inset 0 0 0 .8px var(--today-ring)}.dayDots{display:flex;gap:2.4px}.dayDot{width:6.4px;height:6.4px;border-radius:50%}.dayDot.empty{box-shadow:inset 0 0 0 .8px var(--dot-empty)}.dayLabel{color:var(--muted)}.day.today .dayLabel{color:var(--text)}.chartLegend{display:flex;gap:14.4px;flex-wrap:wrap;margin-top:11.2px;color:var(--muted)}.chartLegend i{display:inline-block;width:8px;height:8px;border-radius:2.4px;margin-right:4.8px;vertical-align:-.8px}.lgMove{background:var(--primary)}.lgSteps{background:var(--wash-4)}.lgDot{background:linear-gradient(90deg,#5f9b72 50%,#d5a53e 50%);border-radius:50%!important}@media (max-width:900px){.insightSection{grid-column:auto}.insightTop,.insightBody{grid-template-columns:1fr}.insightStats{grid-auto-flow:row;grid-template-columns:repeat(auto-fit,minmax(96px,1fr))}.dayBars{height:72px}}@media (max-width:900px){.energyScale{grid-template-columns:repeat(3,minmax(0,1fr))}}.checkinBackdrop{z-index:160}.checkinCard{width:min(576px,100%)}.checkinCard .sub{margin-top:8px}.checkinSliders{display:grid;gap:11.2px;margin-top:19.2px}.checkinTile{min-height:0;gap:14.4px}.scaleEnds{display:flex;justify-content:space-between;margin-top:6.4px;color:var(--muted)}.rangeTrack:focus-within{outline:2.4px solid var(--primary);outline-offset:2.4px}.checkinTab{position:fixed;right:0;top:50%;transform:translateY(-50%);z-index:120;display:flex;flex-direction:column;align-items:center;gap:9.6px;padding:14.4px 9.6px;border:.32px solid var(--line);border-right:0;border-radius:12.8px 0 0 12.8px!important;background:var(--control);color:var(--text);cursor:pointer;transition:padding .18s ease,background .18s ease}.checkinTab:hover{padding-right:12.8px}.checkinTabIcon{font-size:16px;line-height:1}.checkinTabLabel{writing-mode:vertical-rl;transform:rotate(180deg)}.checkinBadge{position:absolute;top:8px;left:8px;width:8px;height:8px;border-radius:50%;background:var(--secondary);box-shadow:0 0 0 2.4px var(--control),0 0 9.6px color-mix(in srgb,var(--secondary) 70%,transparent);animation:checkinPulse 1.8s ease-in-out infinite}.checkinTab.due{background:var(--checkin-due)}@keyframes checkinPulse{50%{box-shadow:0 0 0 3px var(--control),0 0 2px color-mix(in srgb,var(--secondary) 20%,transparent)}}@media (prefers-reduced-motion: reduce){.checkinBadge{animation:none}}.shell:has(#workoutView.active) .checkinTab,.shell:has(.countdown.active) .checkinTab{display:none}#app.light .checkinBadge{background:var(--primary);box-shadow:0 0 0 2.4px #fff,0 0 9.6px color-mix(in srgb,var(--primary) 50%,transparent)}.feelSection{grid-column:span 12;margin-top:16px}.feelCard{display:grid;gap:19.2px}.feelTop{display:grid;grid-template-columns:minmax(0,1fr) minmax(208px,336px);gap:22.4px;align-items:end}.feelTotals{display:grid;gap:9.6px}.feelCount{color:var(--muted)}.feelDays{display:grid;grid-template-columns:repeat(7,minmax(0,1fr));gap:8px}.feelDay{min-height:0;gap:9.6px}.feelDay.future{opacity:.4}.feelDay.today{box-shadow:inset 0 0 0 .8px var(--today-ring)}.feelDots{font-size:6.4px;letter-spacing:1.6px;color:var(--muted)}.feelMeter{display:grid;gap:4.8px}.feelMeterTop{display:flex;justify-content:space-between;gap:6.4px;color:var(--muted)}.feelMeterTop span:last-child{color:var(--text)}.feelTrack{height:6.4px;border-radius:799.2px;background:var(--wash-2);overflow:hidden}.feelTrack span{display:block;height:100%;border-radius:799.2px}.feelTotals .feelTrack{height:9.6px}@media (max-width:900px){.feelSection{grid-column:auto}.feelTop{grid-template-columns:1fr}.feelDays{grid-template-columns:repeat(4,minmax(0,1fr))}}@media (max-width:620px){.feelDays{grid-template-columns:repeat(2,minmax(0,1fr))}}.checkinTile .timeHeader{align-items:center}.checkinTab:not(.due){opacity:.6}.checkinTab:not(.due):hover{opacity:1}.activityCard{grid-column:span 3}.weekly{grid-column:span 9;cursor:pointer;transition:border-color .18s ease,background .18s ease}.weekly:hover{border-color:var(--border-hover)}.weeklyExpand{position:absolute;top:19.2px;right:22.4px;font-size:16px;color:var(--muted);transition:transform .18s ease}.weekly:hover .weeklyExpand{transform:scale(1.15)}.weekChips{grid-template-columns:repeat(8,minmax(0,1fr))}.weekChipBottom{display:flex;justify-content:space-between;align-items:flex-end;gap:4.8px}.face{width:20.8px;height:20.8px;flex:0 0 auto;display:block}.face.empty circle{fill:none;stroke:var(--dot-empty);stroke-width:1.2;stroke-dasharray:2.5 2.5}.weekChip.total .face{width:24px;height:24px}.insightBackdrop{z-index:155}.insightModalCard{width:min(992px,100%);max-height:calc(100dvh - 56px);overflow:auto}.insightModalHead{display:flex;justify-content:space-between;align-items:center;margin-bottom:9.6px}.insightModalHead .sectionLabel{margin:0}.insightModalCard .dayBars{height:160px}.insightBody.chartOnly{grid-template-columns:1fr}.dayFace .face{width:17.6px;height:17.6px}.chartLegend span{display:inline-flex;align-items:center}.chartLegend .face{width:9.6px;height:9.6px;margin-right:4.8px}@media (max-width:1200px){.activityCard{grid-column:span 4}.weekly{grid-column:span 8}.weekChips{grid-template-columns:repeat(4,minmax(0,1fr))}}@media (max-width:900px){.activityCard,.weekly{grid-column:auto}.insightModalCard .dayBars{height:88px}.dayFace .face{width:12.8px;height:12.8px}}.weekChipTime{white-space:nowrap}.insightCard{grid-column:span 9;align-content:start}.insightEyebrow{margin-bottom:-11.2px}.insightStats{grid-auto-columns:minmax(88px,1fr)}.insightCard .dayBars{height:120px}@media (max-width:1200px){.insightCard{grid-column:span 8}.insightTop{grid-template-columns:1fr}}@media (max-width:900px){.insightCard{grid-column:auto}.insightCard .dayBars{height:80px}}.helpBackdrop{z-index:170}.helpCard .helpSteps,.helpCard .helpNote{max-width:688px}.helpHead{display:flex;justify-content:space-between;align-items:flex-start;gap:16px}.helpCard .note{margin:0}.helpSteps{margin:19.2px 0 0;padding:0;list-style:none;counter-reset:help;display:grid;gap:9.6px}.helpSteps li{counter-increment:help;display:grid;gap:4.8px;position:relative;padding:14.4px 16px 14.4px 52.8px;border-radius:20.8px;background:var(--tile);color:var(--muted)}.helpSteps li:before{content:counter(help);position:absolute;left:14.4px;top:12.8px;width:25.6px;height:25.6px;border-radius:9.6px;display:grid;place-items:center;background:var(--icon-bg);color:var(--text)}.helpSteps strong,.helpSteps b,.helpNote b{color:var(--text)}.helpAction{display:block;padding:8px 9.6px;border-radius:11.2px;background:var(--control-2);border:.32px solid var(--field-line);color:var(--text)}.helpCard code{padding:.8px 4.8px;border-radius:4.8px;background:var(--wash-2)}.helpNote{display:grid;gap:3.2px;margin-top:9.6px;padding:12.8px 16px;border-radius:17.6px;border:.32px solid var(--field-line);color:var(--muted)}.helpNote strong{color:var(--text)}.rowLabel{grid-column:1/-1;margin-top:16px;margin-bottom:-8px}.checkinTab{flex-direction:row;align-items:center;gap:0}.checkinTabMain{display:flex;flex-direction:column;align-items:center;gap:9.6px}.checkinPeek{display:grid;gap:3.2px;justify-items:start;white-space:nowrap;overflow:hidden;max-width:0;opacity:0;margin-right:0;transition:max-width .32s cubic-bezier(.2,1.2,.4,1),opacity .2s ease,margin-right .32s ease}.checkinTab.peek{padding-left:17.6px;opacity:1}.checkinTab.peek .checkinPeek{max-width:176px;opacity:1;margin-right:14.4px}.peekCountdown{font-size:24px;font-weight:800;letter-spacing:-.04em;line-height:1;font-variant-numeric:tabular-nums}.peekAt{color:var(--muted)}@media (prefers-reduced-motion: reduce){.checkinPeek{transition:none}}.activityRowMeta{color:var(--text);margin-top:1.6px;font-variant-numeric:tabular-nums}.feelTop{grid-template-columns:1fr}:host{--primary:#03A9F4;--secondary:#D0FF00;--primary-tint:color-mix(in srgb,var(--primary) 16%,white);--primary-ink:color-mix(in srgb,var(--primary) 75%,black);--font:Inter,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;--w-regular:400;--w-medium:500;--w-semibold:600;--w-bold:700;--w-heavy:800;--t-display:64px;--t-title:22px;--t-value:22px;--t-section:18px;--t-strong:16px;--t-body:14px;--t-caption:12px;--lh-display:1.05;--lh-title:1}@media (max-width:620px){:host{--t-display:46px;--t-title:20px;--t-value:20px;--t-section:16px;--t-strong:15px;--t-body:14px;--t-caption:11px;--lh-display:.92;--lh-title:1.05}}#app{font-family:var(--font);font-size:var(--t-body);font-weight:var(--w-regular);line-height:1.4}#app button,#app input,#app select,#app textarea{font-family:inherit}#app strong,#app b{font-weight:var(--w-bold)}.title,.workoutName,.exerciseTitle,.insightBig,.feelHeadline,.settingsTitle,.weekMetric{font-size:var(--t-display);font-weight:var(--w-heavy);line-height:var(--lh-display);letter-spacing:-.055em}.activityTitle,.confirmTitle,.modalHead h2,.paneTitle,.movementCreatorHead h3,.testingFeedbackThanks strong{font-size:var(--t-title);font-weight:var(--w-medium);font-style:italic;line-height:var(--lh-title);letter-spacing:-.03em}.paneTitle{margin:0 0 10px}.activityRowMeta,.nextName,.upcomingName,.editNameInput,.videoClock{font-size:var(--t-value);font-weight:var(--w-regular);line-height:1.15;letter-spacing:-.02em}.insightLine strong{font-weight:var(--w-bold)}.sectionLabel,.nextLabel{font-size:var(--t-section);font-weight:var(--w-regular);line-height:1.2;letter-spacing:-.01em}.activityRowName,.integration strong,.toggleRow strong,.setupSwitchRow strong,.timeLabel,.moveItemName,.weekChipTop strong,.weekChipTime,.panelCollapsedText,.activityCount,.metaType,.kindChip,.helpSteps strong,.addGhost strong,.helpNote strong,.createStepIdentity strong,.createPresetBtn strong,.createExtraToggle strong,.testingZoneTitleRow strong,.testingFeedbackHeading,.tempoEstimate,.primary,.tab,.skipBtn,.skipSessionBtn,.hideBtn,.removeBtn,.addBtn,.themeBtn,.holdEnd,.holdDelete,.energyBtn,.movementCreatorOpen,.restAddBtn,.creatorAddButton,.testingFeedbackSubmit,.testingRating button,.toast,.checkinTabLabel{font-size:var(--t-strong);font-weight:var(--w-semibold);line-height:1.25;letter-spacing:-.01em}.sub,.meta,.note,.weekCopy,.timeValue,.addInput,.settingsSelect,.pill,.checkinStatus,.routineSummary,.helpSteps li,.helpNote,.createStepSummary,.insightLine{font-size:var(--t-body);font-weight:var(--w-regular);line-height:1.4;letter-spacing:0}.moveEditForm label>span,.addGhostText small,.metaTable th,.metaSub,.eyebrow,#stepLabel,.sourceTag,.addPanelLabel,.status,.motionRangeWrap span,.moveMeta,.sectionTitle,.editNameLabel,.dayLabel,.scaleEnds,.peekAt,.upcomingMeta,.energyLog,.tempoPole,.tempoReadout,.tempoRevealBtn,.testingFeedbackField,.testingZoneExplanation,.testingFeedbackThanks p,.movementCreatorClose,.movementCreatorFields>label,.durationStack,.globalTimingToggle,.toggleLabel,.moveKindBadge,.createOptionLabel,.createPresetBtn span,.createExtraToggle small,.autoRestSummary,.fieldError,.movementTimingHead,.globalTimingValue,.createStepNumber,.weekChipMeta,.feelMeterTop,.feelCount,.chartLegend,#app code{font-size:var(--t-caption);font-weight:var(--w-regular);line-height:1.35;letter-spacing:0}.eyebrow,#stepLabel,.sectionTitle{letter-spacing:.1em}.globalTimingToggle{font-size:var(--t-caption)!important}.workoutGallery,.workoutPanel{height:340px}@media (max-width:900px){.workoutPanel,.workoutPanel.active{height:320px}}@media (max-width:900px){.workoutGallery{height:auto}.workoutPanel,.workoutPanel.active{height:auto;min-height:320px}}@media (max-width:620px){.view{padding-left:0;padding-right:0}.topbar,.settingsHeader,.sessionHead,.sessionControlRow{margin-left:16px;margin-right:16px}.tabs.rubberTabs,.sectionLabel,.rowLabel{margin-left:16px}.grid{gap:8px}.rowLabel,.feelSection{margin-top:16px}.rowLabel{margin-bottom:-4px}.sectionLabel{margin-bottom:8px}.workoutGallery{gap:8px}.workoutPanel,.workoutPanel.active{flex:0 0 100%;min-width:100%}.workoutPanel.addPanel{flex:0 0 100%;min-width:100%;min-height:120px}.card,.workoutPanel,.timerCard,.movementCard,.nextCard,.upcomingCard,.confirmCard{padding:16px}.activityRows,.insightCard,.feelCard{gap:8px}.activityRow,.weekChip{padding:10px 12px}.insightStats,.feelDays{gap:8px}.workGrid{gap:8px;margin-top:8px}.nextWrap,.sessionControlRow{margin-top:8px}.upcomingList{gap:8px}}.tabs.rubberTabs .tab{white-space:nowrap}@media (max-width:620px){.tabs.rubberTabs{display:flex;width:max-content;max-width:calc(100% - 32px);overflow-x:auto;scrollbar-width:none}.tabs.rubberTabs::-webkit-scrollbar{display:none}.tabs.rubberTabs .tab{flex:0 0 auto}}#app.light .timeIcon{background:var(--primary-tint);color:var(--primary-ink)!important}.insightCard{display:flex;flex-direction:column;gap:0}.movementReadings{grid-template-columns:repeat(3,minmax(0,1fr))}.weekBars{flex:1;display:grid;grid-template-columns:repeat(7,minmax(0,1fr));gap:9.6px;margin-top:16px;min-height:150px}.weekBar{display:grid;grid-template-rows:1fr auto;gap:8px;justify-items:center;min-height:0}.weekBarTrack{position:relative;width:100%;height:100%;min-height:110px;border-radius:24px;background:var(--bar-track);overflow:hidden}.weekBarTrack span{position:absolute;left:0;right:0;bottom:0;border-radius:24px;background:var(--primary)}.weekBar.today .weekBarTrack{box-shadow:inset 0 0 0 1.5px var(--primary)}.weekBar.today .dayLabel{color:var(--text);font-weight:var(--w-bold)}.weekBar.future{opacity:.35}#app.light .insightCard .activityRow:nth-child(1) .activityRowIcon{background:var(--primary-tint);color:var(--primary-ink)!important}@media (max-width:900px){.movementReadings{grid-template-columns:1fr}.weekBarTrack{min-height:90px}}@media (max-width:1200px) and (min-width:901px){.timeTiles{grid-auto-flow:row;grid-template-columns:repeat(2,1fr)}}#stepLabel{margin-top:9.6px}#exerciseMeta{margin-top:4px}.moveRow{justify-content:flex-start;gap:12.8px}.moveText{flex:1;min-width:0}.moveActions{display:flex;gap:6.4px;flex:0 0 auto}.dragHandle{flex:0 0 auto;display:grid;place-items:center;width:32px;height:40px;margin:-8px 0 -8px -9.6px;padding:0;border:0;border-radius:12px;background:transparent;color:var(--muted);cursor:grab;touch-action:none}.dragHandle:hover{background:var(--hover);color:var(--text)}.moveRow.dragging{box-shadow:0 10px 30px var(--lift),inset 0 0 0 1.5px var(--primary);position:relative;z-index:2}.moveRow.dragging .dragHandle{cursor:grabbing;color:var(--text)}.removeBtn:hover,.hideBtn:hover{border-color:var(--muted)}.toast{position:fixed;z-index:400;display:flex;align-items:center;gap:12.8px}.toast.withAction{pointer-events:auto}.toastAction{border:0;padding:0;background:none;color:inherit;font:inherit;text-decoration:underline;text-underline-offset:3px;cursor:pointer}.modalTop{flex:0 0 auto;padding:22px 22px 0}.modalTop .modalHead{margin-bottom:0;padding-bottom:16px}@media (min-width:901px){.modal:not(.createMode){display:grid;grid-template-columns:minmax(340px,420px) minmax(0,1fr);grid-template-rows:auto minmax(0,1fr)}.modal:not(.createMode) .modalTop{grid-column:1/-1;border-bottom:.32px solid var(--divider)}.modal:not(.createMode) .modalStatic{grid-column:1;grid-row:2;overflow-y:auto;border-bottom:0;border-right:.32px solid var(--divider)}.modal:not(.createMode) .exerciseScroller{grid-column:2;grid-row:2;border-top:0;padding-top:12px}.modal:not(.createMode) .timeTiles{grid-auto-flow:row;grid-template-columns:minmax(0,1fr)}}.timeTiles{align-items:start}.timingGroup{min-height:0;padding:0;justify-content:flex-start;gap:0}.timingGroup .timeRow{display:grid;gap:12.8px;padding:16px}.timingGroup .timeRow+.timeRow{border-top:.32px solid var(--divider)}.timingGroup .timeTotal{padding-bottom:14px}.setupSwitchRow{display:flex;align-items:center;justify-content:space-between;gap:12.8px;margin-bottom:11.2px;padding:12px 14px;border-radius:24px;background:var(--tile)}.removeLabel{position:relative;z-index:1}.removeBtn.holding{border-color:var(--danger-fill)}#deleteMoveConfirm{z-index:200}.moveRow{will-change:transform}.moveRow.dragging{box-shadow:0 14px 34px var(--lift),inset 0 0 0 1.5px var(--primary);z-index:3}.moveRow.editing{display:block;padding:16px;box-shadow:inset 0 0 0 1.5px var(--primary)}.moveEditForm{display:grid;gap:14.4px}.moveEditFields{display:grid;grid-template-columns:minmax(0,1.4fr) minmax(0,1fr);gap:12.8px}.moveEditForm label:not(.globalTimingToggle){display:grid;gap:6.4px;min-width:0}.moveEditForm .addInput{width:100%;min-width:0}.moveEditTiming{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:12.8px}.moveEditTiming .creatorDurationRow{display:grid;grid-template-columns:96px 128px;gap:9.6px}.creatorDurationRow.isDisabled{opacity:.38}.moveEditActions{display:flex;justify-content:flex-end;align-items:center;gap:22.4px}@media (max-width:620px){.moveEditFields{grid-template-columns:1fr}}#app.light .digits{mix-blend-mode:normal;color:var(--text)}.integration .status code{color:var(--soft)}#app.resting :is(.sessionHead,.nextLabel,.sessionControlRow){--muted:#f4f4f4;color:var(--text)}#app.paused :is(.sessionHead,.nextLabel,.sessionControlRow){--text:#090909;--muted:rgba(9,9,9,.8);--accent-text:#090909;--line:rgba(9,9,9,.3);color:var(--text)}#app.light:is(.resting,.paused) :is(.sessionHead,.nextLabel,.sessionControlRow){--text:#222222;--muted:rgba(34,34,34,.85);--accent-text:#222222;--line:rgba(34,34,34,.25);color:var(--text)}.moveList{display:flex;flex-direction:column}.movementCreatorOpen,.restAddBtn{display:inline-flex;align-items:center;gap:6px;touch-action:none;user-select:none;-webkit-user-select:none;cursor:grab;transition:transform .42s cubic-bezier(.34,1.46,.64,1),opacity .2s ease}.movementCreatorOpen svg,.restAddBtn svg{width:14px;height:14px;margin-left:-3px;opacity:.55;flex:0 0 auto}.movementCreatorOpen.lifting,.restAddBtn.lifting{transform:scale(.92);opacity:.4;cursor:grabbing;transition:transform .16s ease,opacity .16s ease}.addGhost{position:fixed;left:0;top:0;z-index:20;pointer-events:none;box-sizing:border-box;display:flex;align-items:center;gap:8px;padding:0 12.8px;overflow:hidden;white-space:nowrap;border-radius:12px;background:var(--bright);color:var(--on-bright);box-shadow:0 12px 30px var(--lift);will-change:transform;transition:width .4s cubic-bezier(.34,1.46,.64,1),height .4s cubic-bezier(.34,1.46,.64,1),border-radius .3s ease,padding .3s ease,background .2s ease,color .2s ease,box-shadow .25s ease,opacity .18s ease}.addGhost.rest{background:var(--control-2);color:var(--text);box-shadow:inset 0 0 0 .5px var(--field-line),0 12px 30px var(--lift)}.addGhostGrip{display:grid;place-items:center;flex:0 0 auto;opacity:.55}.addGhostGrip svg{width:14px;height:14px;transition:width .3s ease,height .3s ease}.addGhostText{display:grid;min-width:0}.addGhostText small{color:var(--muted);max-height:0;opacity:0;transition:max-height .3s ease,opacity .2s ease}.addGhost.overList{border-radius:20.8px;gap:12.8px;padding:0 22.4px 0 12.8px;background:var(--row);color:var(--text);box-shadow:inset 0 0 0 1.5px var(--primary),0 16px 36px var(--lift)}.addGhost.overList .addGhostGrip svg{width:18px;height:18px}.addGhost.overList .addGhostText small{max-height:20px;opacity:1;margin-top:4px}.addGhost.leaving{opacity:0}.dropSlot{flex:0 0 auto;height:0;margin-top:-8px;border-radius:20.8px;background:color-mix(in srgb,var(--primary) 9%,transparent);box-shadow:inset 0 0 0 1.5px color-mix(in srgb,var(--primary) 40%,transparent);transition:height .42s cubic-bezier(.34,1.46,.64,1),margin-top .42s cubic-bezier(.34,1.46,.64,1),opacity .2s ease}.dropSlot.leaving{opacity:0;transition:height .26s cubic-bezier(.4,0,.2,1),margin-top .26s cubic-bezier(.4,0,.2,1),opacity .16s ease}@media (prefers-reduced-motion: reduce){.addGhost,.dropSlot,.movementCreatorOpen,.restAddBtn{transition:none}}.exerciseScroller,.modalStatic,.createFlow{overflow-anchor:none}.videoStage{position:absolute;top:0;right:0;bottom:0;left:0;z-index:3;display:grid;place-items:center;background:#000;opacity:0;pointer-events:none;transition:opacity .3s ease}#app.videoStep .videoStage{opacity:1;pointer-events:auto}.videoStage{container-type:size}.videoFrame{width:min(100cqw,calc(100cqh * 16 / 9));aspect-ratio:16/9}.videoFrame>*{display:block;width:100%;height:100%;border:0}.videoSound{position:absolute;left:50%;bottom:16px;transform:translate(-50%);z-index:2}.videoProbe{position:fixed;left:-10000px;top:0;width:320px;height:180px;opacity:0;pointer-events:none}.digits.long{font-size:clamp(96px,12.8vw,200px)}.moveEditFields.videoFields{grid-template-columns:minmax(0,1fr)}.fieldError{margin:0;color:var(--danger)}.addInput.invalid{border-color:var(--danger)}@media (prefers-reduced-motion: reduce){.videoStage{transition:none}}.workGrid{transition:grid-template-columns .55s cubic-bezier(.2,.8,.2,1),gap .55s cubic-bezier(.2,.8,.2,1)}.timerCard{transition:opacity .25s ease}#app.videoStep .timerCard{opacity:0;min-width:0;pointer-events:none}.workGrid{container-type:inline-size}#app.videoStep .movementCard{height:min(56.25cqw,var(--theater-h,60vh));min-height:240px;padding:0}#app.videoStep .exerciseTitle{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}@media (min-width:901px){#app.videoStep .workGrid{grid-template-columns:minmax(0,0fr) minmax(240px,1fr);gap:0}}@media (max-width:900px){#app.videoStep .timerCard{display:none}#app.videoStep .movementCard{min-height:0}}.videoClock{display:none;margin-right:auto;font-variant-numeric:tabular-nums}#app.videoStep .videoClock{display:block}@media (prefers-reduced-motion: reduce){.workGrid,.timerCard{transition:none}}.metaCard{margin-top:16px}.metaFilters{display:flex;flex-wrap:wrap;gap:9.6px;align-items:center;margin:14.4px 0 11.2px}.metaSearch{flex:1 1 200px;min-width:0}.metaKinds{display:flex;flex-wrap:wrap;gap:6.4px}.kindChip{min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);border-radius:12px;background:var(--control-2);color:var(--text);cursor:pointer}.kindChip.active{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.metaTableWrap{overflow-x:auto;border-radius:22.4px;background:var(--raised)}.metaTable{width:100%;border-collapse:collapse}.metaTable th{text-align:left;color:var(--muted);padding:12px 16px;border-bottom:.32px solid var(--divider);text-transform:uppercase;letter-spacing:.1em}.metaTable td{padding:12px 16px;border-top:.32px solid var(--divider);vertical-align:middle;color:var(--soft)}.metaTable tbody tr:first-child td{border-top:0}.metaTable .metaSwitchCol{width:1%;white-space:nowrap;text-align:right}.metaTable .metaSwitchCol .switch{display:inline-block;vertical-align:middle}.metaType{color:var(--text)}.metaTable tr.off .metaType{color:var(--muted)}.metaSub{display:none;margin-top:2px;color:var(--muted)}.metaEmpty td{text-align:center;color:var(--muted)}.metaBulk{display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap;margin-top:11.2px}.metaBulkActions{display:flex;gap:22.4px}@media (max-width:620px){.metaKindCol,.metaUsedCol{display:none}.metaSub{display:block}}@media (max-width:620px){.moveRow.noMeta .moveMeta,.upcomingCard.noMeta .upcomingMeta,.nextCard.noMeta #nextMeta{display:none}}', pr = `<main id="app"><div class="shell">
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
function ur(x, y) {
  const a = (e) => x.getElementById(e), q = a("workoutView"), R = a("workoutNameInput");
  let G = !0;
  const fi = a("homeClock");
  function bi() {
    fi && (fi.textContent = new Intl.DateTimeFormat(void 0, { hour: "2-digit", minute: "2-digit" }).format(/* @__PURE__ */ new Date()));
  }
  bi(), setInterval(bi, 15e3);
  const xi = a("createFlow"), Ra = a("createMovementsSlot"), Ba = a("createTimingSlot"), Aa = a("createFinishSlot"), Na = a("movementStepSummary"), Ia = a("timingStepSummary"), Pa = a("finishStepSummary"), wn = a("continueToTiming"), Da = a("continueToFinish"), Ha = a("finishMoveButton");
  let kn = !1, Yt = [];
  function qa(e) {
    !e || Yt.some((t) => t.node === e) || Yt.push({ node: e, parent: e.parentNode, next: e.nextSibling });
  }
  function Sn(e, t) {
    e && (qa(e), t.appendChild(e));
  }
  function za() {
    [...Yt].reverse().forEach(({ node: e, parent: t, next: n }) => {
      t && (n && n.parentNode === t ? t.insertBefore(e, n) : t.appendChild(e));
    }), Yt = [];
  }
  function Ze(e) {
    x.querySelectorAll(".createStep").forEach((t) => {
      t.classList.toggle("active", t.dataset.createStep === e);
    }), e === "timing" && (kn = !0), Re();
  }
  function Re() {
    var g, p;
    if (!_) return;
    E[F];
    const e = ne.filter((u) => !u.hidden), t = e.filter((u) => u.kind !== "rest").length, n = e.filter((u) => u.kind === "rest").length;
    Na.textContent = t ? t + " movement" + (t === 1 ? "" : "s") + (n ? " · " + n + " rest" + (n === 1 ? "" : "s") : "") : "No movements yet";
    const i = t > 0, o = x.querySelector('[data-open-step="timing"]'), r = x.querySelector('[data-open-step="finish"]');
    o.disabled = !i, wn.disabled = !i, Ia.textContent = i ? Oe(D.value) + " · " + J(A.value) + " movement · " + J(N.value) + " rest" : "Add a movement first", r.disabled = !(i && kn);
    const l = ((R == null ? void 0 : R.value) || "").trim(), s = [];
    (g = a("includeWarmupPreset")) != null && g.checked && s.push("warm-up"), (p = a("includeCooldownPreset")) != null && p.checked && s.push("cooldown"), Pa.textContent = l ? l + (s.length ? " · " + s.join(" + ") : "") : s.length ? s.join(" + ") : "Name and optional extras";
  }
  function _a() {
    var m, C, L;
    xi.hidden = !1, kn = !1;
    const e = x.querySelector(".editNameRow"), t = a("createMoveOptions"), n = x.querySelector(".timeTiles"), i = a("routineSummaryModal"), o = x.querySelector(".tempoRevealRow"), r = a("tempoExperiment"), l = (m = a("warmupList")) == null ? void 0 : m.closest("section"), s = a("movementCreatorLaunch"), g = a("movementCreator"), p = (C = a("strengthList")) == null ? void 0 : C.closest("section"), u = (L = a("cooldownList")) == null ? void 0 : L.closest("section");
    [t == null ? void 0 : t.querySelector(".createExtras"), l, s, g, p, u].forEach((h) => h && Sn(h, Ra)), [t, n, i, o, r].forEach((h) => Sn(h, Ba)), Sn(e, Aa), Ze("movements"), Re();
  }
  function Oa() {
    za(), xi.hidden = !0, x.querySelectorAll(".createStep").forEach((e) => e.classList.remove("active"));
  }
  x.querySelectorAll("[data-open-step]").forEach((e) => e.addEventListener("click", () => {
    e.disabled || Ze(e.dataset.openStep);
  })), wn.addEventListener("click", () => {
    wn.disabled || Ze("timing");
  }), Da.addEventListener("click", () => Ze("finish")), Ha.addEventListener("click", () => a("saveWorkoutEdit").click());
  const Je = { home: a("homeView"), workout: a("workoutView"), settings: a("settingsView") }, yi = a("homeNav"), wi = a("settingsNav");
  function Cn(e) {
    Object.entries(Je).forEach(([t, n]) => n.classList.toggle("active", t === e)), yi.classList.toggle("active", e === "home"), wi.classList.toggle("active", e === "settings"), e === "home" && setTimeout(qn, 400), e === "settings" && (requestAnimationFrame(() => Wt(x.querySelector(".tab.active"), !1)), bn());
  }
  const D = a("totalTime"), A = a("workTime"), N = a("restTime"), Ga = a("totalOut"), ki = a("workOut"), Si = a("restOut"), Wa = a("totalFill"), Va = a("workFill"), ja = a("restFill"), ze = a("roundsInput"), Ya = a("roundsFill"), Ua = a("roundsOut"), Ka = a("totalLabel"), Za = a("routineSummaryModal"), Ut = [
    { id: "standing-reach", name: "Standing reach", group: "Warm-up", kind: "warmup", hidden: !1 },
    { id: "arm-circles", name: "Arm circles", group: "Warm-up", kind: "warmup", hidden: !1 },
    { id: "hip-hinge", name: "Hip hinge drill", group: "Warm-up", kind: "warmup", hidden: !1 }
  ];
  let ce = Ut.map((e) => ({ ...e })), ne = [
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
  const Kt = [
    { id: "hip-flexor", name: "Hip flexor stretch", group: "Cooldown", kind: "cooldown", hidden: !1 },
    { id: "chest-opener", name: "Chest opener", group: "Cooldown", kind: "cooldown", hidden: !1 },
    { id: "hamstring", name: "Hamstring stretch", group: "Cooldown", kind: "cooldown", hidden: !1 },
    { id: "slow-breathing", name: "Slow breathing", group: "Cooldown", kind: "cooldown", hidden: !1 }
  ];
  let pe = Kt.map((e) => ({ ...e }));
  const Ja = {
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
  }, M = Ci(y.data), E = M.profiles;
  let F = E[M.selected] ? M.selected : M.order.find((e) => E[e]) || "kettlebell";
  function Ci(e) {
    const t = e && typeof e == "object" ? JSON.parse(JSON.stringify(e)) : {}, n = t.profiles && Object.keys(t.profiles).length ? t.profiles : JSON.parse(JSON.stringify(Ja)), i = (Array.isArray(t.order) ? t.order : Object.keys(n)).filter((o) => n[o]);
    return Object.keys(n).forEach((o) => {
      i.includes(o) || i.push(o);
    }), {
      v: 1,
      profiles: n,
      order: i,
      selected: t.selected || i[0],
      history: Array.isArray(t.history) ? t.history : [],
      checkins: (Array.isArray(t.checkins) ? t.checkins : $a(t.energy)).map(Ti),
      settings: { ...t.settings || {} }
    };
  }
  function $a(e) {
    if (!Array.isArray(e)) return [];
    const t = ["Drained", "Low", "Okay", "Good", "Energised", "Great"], n = [];
    return e.forEach((i) => {
      const o = new Date(i.at);
      if (isNaN(o)) return;
      const r = o.getFullYear() + "-" + String(o.getMonth() + 1).padStart(2, "0") + "-" + String(o.getDate()).padStart(2, "0"), l = o.getHours() < 14 ? "morning" : "evening";
      if (n.some((g) => g.date === r && g.slot === l)) return;
      const s = t.indexOf(i.value) + 1;
      s > 0 && n.push({ date: r, slot: l, mood: null, energy: s, at: i.at });
    }), n;
  }
  function Ti(e) {
    if (e.scale === 100) return e;
    const t = (n) => n == null ? null : Math.round((Number(n) - 1) / 5 * 100);
    return { ...e, mood: t(e.mood), energy: t(e.energy), scale: 100 };
  }
  function he() {
    _ || (M.selected = F, M.order = M.order.filter((e) => E[e] && e !== _e), y.save(M));
  }
  function I() {
    return M.settings;
  }
  function fe(e) {
    const t = E[e];
    if (!t) return;
    F = e;
    const n = a("workoutNameInput");
    if (n && (n.value = t.name), D.value = t.total, A.value = t.work, N.value = t.rest, ze.value = t.rounds || 1, t.customSequence) {
      const i = (t.sequence || []).map((r) => ({ ...r })), o = (r) => i.filter((l) => l.presetRole === r).map(({ presetRole: l, ...s }) => s);
      ce = (t.warmup || o("warmup")).map((r) => ({ ...r })), pe = (t.cooldown || o("cooldown")).map((r) => ({ ...r })), ne = i.filter((r) => !r.presetRole), Mn(t.preset || "movement", !1);
    } else
      D.min = 3, D.max = 40, D.step = 1, A.min = 20, A.max = 60, A.step = 5, N.min = 5, N.max = 30, N.step = 5, ce = (t.warmup || Ut).map((i) => ({ ...i })), pe = (t.cooldown || Kt).map((i) => ({ ...i })), ne = t.strength.map((i) => Array.isArray(i) ? (([o, r, l, s = !1]) => ({ id: o, name: r, group: l, kind: "work", hidden: !!s }))(i) : { ...i });
    x.querySelectorAll(".workoutPanel[data-workout]").forEach((i) => i.classList.toggle("active", i.dataset.workout === e)), O();
  }
  function Qa(e, t, n) {
    const i = e.getBoundingClientRect(), o = i.width / 2, r = i.height / 2, l = t - o, s = n - r;
    let g = 1 / 0, p = 1 / 0;
    l !== 0 && (g = o / Math.abs(l)), s !== 0 && (p = r / Math.abs(s));
    const u = Math.min(Math.max(1 / Math.min(g, p), 0), 1);
    let d = Math.atan2(s, l) * (180 / Math.PI) + 90;
    return d < 0 && (d += 360), { edge: u, angle: d };
  }
  function Tn(e, t, n = !1) {
    const i = e.getBoundingClientRect(), o = t.clientX - i.left, r = t.clientY - i.top, { edge: l, angle: s } = Qa(e, o, r), g = n ? 100 : l * 100;
    e.style.setProperty("--edge-proximity", g.toFixed(3)), e.style.setProperty("--cursor-angle", s.toFixed(3) + "deg"), e.classList.toggle("borderGlowActive", n || g >= 30);
  }
  function Li(e) {
    e.addEventListener("pointermove", (n) => Tn(e, n, !1)), e.addEventListener("pointerenter", (n) => Tn(e, n, !1)), e.addEventListener("pointerdown", (n) => Tn(e, n, !0));
    const t = () => {
      e.classList.remove("borderGlowActive"), e.style.setProperty("--edge-proximity", "0");
    };
    e.addEventListener("pointerleave", t), e.addEventListener("pointerup", t), e.addEventListener("pointercancel", t);
  }
  Li(a("addWorkoutPanel"));
  let _ = !1, _e = null;
  function B(e) {
    return String(e ?? "").replace(/[&<>"']/g, (t) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[t]);
  }
  function Xa(e) {
    return e.summary ? e.summary : e.customSequence ? Oe(e.total) + " · custom move" : Oe(e.total) + " · " + J(e.work) + " / " + J(e.rest) + " · warm-up + cooldown";
  }
  function Ln(e, t) {
    var l;
    const n = document.createElement("article");
    n.className = "workoutPanel", n.dataset.workout = e, n.tabIndex = 0;
    const i = t.eyebrow === void 0 ? "Movement" : t.eyebrow, o = t.activityCount ?? (((l = t.sequence) == null ? void 0 : l.length) || 0);
    n.innerHTML = '<span class="edgeLight" aria-hidden="true"></span><div class="panelExpanded"><div><div class="workoutPanelTop"><div>' + (i ? '<div class="eyebrow">' + B(i) + "</div>" : "") + '<div class="workoutName">' + B(t.name) + '</div><div class="sub">' + B(Xa(t)) + '</div><span class="sourceTag">' + B(t.source || "Custom move") + '</span></div><button class="pill seeWorkoutBtn" type="button">Edit</button></div></div><div class="workoutFooter"><div><strong class="activityCount">' + (o ? o + " activities" + ((t.rounds || 1) > 1 ? " × " + t.rounds : "") : "—") + '</strong></div><div class="workoutPanelActions"><button class="primary startWorkoutBtn" type="button">Start move</button></div></div></div><div class="panelCollapsed"><div class="panelCollapsedText">' + B(t.name) + "</div></div>";
    const r = a("addWorkoutPanel");
    return a("workoutGallery").insertBefore(n, r), Li(n), n.addEventListener("click", (s) => {
      s.target.closest("button") || fe(e);
    }), n.addEventListener("keydown", (s) => {
      (s.key === "Enter" || s.key === " ") && !s.target.closest("button") && (s.preventDefault(), fe(e));
    }), n.querySelector(".seeWorkoutBtn").addEventListener("click", (s) => {
      s.stopPropagation(), fe(e), Gi(!1);
    }), n.querySelector(".startWorkoutBtn").addEventListener("click", (s) => {
      s.stopPropagation(), fe(e), zo();
    }), n;
  }
  function Ei() {
    x.querySelectorAll(".workoutPanel[data-workout]").forEach((e) => e.remove()), M.order.forEach((e) => {
      E[e] && Ln(e, E[e]);
    }), x.querySelectorAll(".workoutPanel[data-workout]").forEach((e) => e.classList.toggle("active", e.dataset.workout === F));
  }
  Ei(), a("addWorkoutPanel").addEventListener("keydown", (e) => {
    (e.key === "Enter" || e.key === " ") && (e.preventDefault(), a("addWorkoutPanel").click());
  }), a("addWorkoutPanel").addEventListener("click", () => {
    _ = !0, _e = "custom-" + Date.now(), E[_e] = {
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
    }, fe(_e), Gi(!0);
  });
  let v = [], k = 0, X = 0, Tt = 1, ge = !1, j = null, Zt = null, Z = !1, $e = M.settings.upcomingCount ?? "all", Mi = "movement";
  function Jt(e, t, n) {
    return (Number(e) - t) / (n - t) * 100;
  }
  function J(e) {
    const t = Math.max(0, Number(e) || 0);
    return t >= 3600 && t % 3600 === 0 ? t / 3600 + " hr" : t >= 60 && t % 60 === 0 ? t / 60 + " min" : t >= 60 ? Math.round(t / 60) + " min" : Math.round(t) + " sec";
  }
  function Oe(e) {
    const t = Math.max(0, Number(e) || 0);
    return t >= 60 && t % 60 === 0 ? t / 60 + " hr" : t >= 60 ? Math.floor(t / 60) + " hr " + t % 60 + " min" : t + " min";
  }
  function $t() {
    Wa.style.width = Jt(D.value, Number(D.min), Number(D.max)) + "%", Va.style.width = Jt(A.value, Number(A.min), Number(A.max)) + "%", ja.style.width = Jt(N.value, Number(N.min), Number(N.max)) + "%", ki.textContent = J(A.value), Si.textContent = J(N.value);
    const e = Number(ze.value) || 1;
    Ya.style.width = Jt(e, 1, 10) + "%", Ka.textContent = e > 1 ? "Time per round" : "Total time";
  }
  function En(e) {
    return e.filter((t) => !t.hidden);
  }
  function Lt(e) {
    const t = Math.max(0, Math.round(Number(e) || 0)), n = Math.floor(t / 3600), i = Math.floor(t % 3600 / 60), o = t % 60;
    return (n ? n + ":" + String(i).padStart(2, "0") : i) + ":" + String(o).padStart(2, "0");
  }
  function eo(e) {
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
      const g = s.match(/^(?:(\d+)h)?(?:(\d+)m)?(?:(\d+)s)?$/);
      return g ? (Number(g[1]) || 0) * 3600 + (Number(g[2]) || 0) * 60 + (Number(g[3]) || 0) : 0;
    }, r = o(t.searchParams.get("t") || t.searchParams.get("start")), l = o(t.searchParams.get("end"));
    return { id: i, start: r, end: l > r ? l : null };
  }
  function Et(e, t) {
    if (e.useVideoLength === !1) return Math.max(5, Number(e.duration) || t || 300);
    const n = Number(e.start) || 0, i = Number(e.end) || Number(e.videoDuration) || 0;
    return i > n ? Math.round(i - n) : Number(e.duration) || 300;
  }
  function Qt(e, t) {
    const n = Math.max(0, Number(e) || 0);
    return Math.round(t === "hour" ? n * 3600 : t === "min" ? n * 60 : n);
  }
  function Mn(e, t = !0) {
    Mi = e, x.querySelectorAll(".createPresetBtn").forEach((i) => i.classList.toggle("active", i.dataset.movePreset === e));
    const n = E[F];
    n && (n.preset = e), e === "work" ? (D.min = 30, D.max = 480, D.step = 30, A.min = 300, A.max = 7200, A.step = 300, N.min = 60, N.max = 1800, N.step = 60, t && (D.value = 60, A.value = 1500, N.value = 300), a("addMovementUnit").value = "min", a("addMovementDuration").value = 25, a("addRestUnit").value = "min", a("addRestDuration").value = 5) : (D.min = 3, D.max = 40, D.step = 1, A.min = 20, A.max = 60, A.step = 5, N.min = 5, N.max = 30, N.step = 5, t && (D.value = 20, A.value = 45, N.value = 15), a("addMovementUnit").value = "sec", a("addMovementDuration").value = 45, a("addRestUnit").value = "sec", a("addRestDuration").value = 30), $t();
  }
  function Fi(e, t) {
    const n = Mi === "work";
    return e.map((i, o) => ({ ...i, id: t + "-" + o + "-" + Date.now().toString(36), useGlobalTiming: !n, duration: n ? 60 : Number(A.value) }));
  }
  function Fn() {
    const e = E[F];
    e != null && e.customSequence && (e.includeWarmup = a("includeWarmupPreset").checked, e.includeCooldown = a("includeCooldownPreset").checked, e.includeWarmup && !ce.length && (ce = Fi(Ut, "warm")), e.includeCooldown && !pe.length && (pe = Fi(Kt, "cool")), O());
  }
  function to() {
    const e = a("upcomingCountSetting");
    if (!e) return;
    const t = Math.max(1, v.length - 1), n = $e;
    e.innerHTML = "";
    for (let r = 1; r <= t; r++) {
      const l = document.createElement("option");
      l.value = String(r), l.textContent = String(r), e.appendChild(l);
    }
    const i = document.createElement("option");
    i.value = "all", i.textContent = "All", e.appendChild(i);
    const o = n === "all" ? "all" : String(Math.min(Number(n) || 1, t));
    e.value = o, $e = o === "all" ? "all" : Number(o);
  }
  function O() {
    Number(D.value) * 60;
    const e = Number(A.value), t = Number(N.value), n = E[F], i = !!(n != null && n.customSequence), o = (i ? !n.includeWarmup : n != null && n.warmupOff) ? [] : En(ce), r = En(ne), l = i && !n.includeCooldown ? [] : En(pe);
    if (n && (n.total = Number(D.value), n.work = e, n.rest = t, n.rounds = Number(ze.value) || 1, n.customSequence ? (n.sequence = ne.map((c) => ({ ...c })), n.warmup = ce.map((c) => ({ ...c })), n.cooldown = pe.map((c) => ({ ...c }))) : (n.strength = ne.map((c) => ({ ...c })), n.warmup = ce.map((c) => ({ ...c })), n.cooldown = pe.map((c) => ({ ...c })))), n != null && n.customSequence) {
      const c = [...o.map((T) => ({ ...T, section: "warmup" })), ...r, ...l.map((T) => ({ ...T, section: "cooldown" }))].map((T) => {
        if (T.kind === "video") return { ...T, duration: Et(T, e), rest: 0 };
        if (T.kind === "rest") {
          const St = T.useGlobalTiming === !0 ? t : Number(T.duration) || t;
          return { ...T, duration: St, rest: 0 };
        }
        const te = T.useGlobalTiming === !1 && Number(T.duration) || e;
        return { ...T, duration: te, rest: 0 };
      });
      n.autoRest && Number(n.autoRestDuration) > 0 ? (v = [], c.forEach((T, te) => {
        v.push(T);
        const St = c[te + 1];
        T.kind !== "rest" && St && St.kind !== "rest" && v.push({
          id: "auto-rest-" + te,
          name: "Rest",
          group: "Rest",
          kind: "rest",
          hidden: !1,
          duration: Number(n.autoRestDuration),
          rest: 0,
          autoGenerated: !0
        });
      })) : v = c;
    } else
      v = [...o.map((c) => ({ ...c, section: "warmup" })), ...r, ...l.map((c) => ({ ...c, section: "cooldown" }))].map((c) => c.kind === "video" ? { ...c, duration: Et(c, e), rest: 0 } : c.kind === "rest" ? { ...c, duration: c.useGlobalTiming === !0 ? t : Number(c.duration) || t, rest: 0 } : { ...c, duration: c.useGlobalTiming === !1 && Number(c.duration) || e, rest: t }), v.forEach((c, T) => {
        var te;
        ((te = v[T + 1]) == null ? void 0 : te.kind) === "rest" && (c.rest = 0);
      }), v.length && (v[v.length - 1].rest = 0);
    const s = Math.max(1, Math.min(10, Number(ze.value) || 1)), g = v, p = (c) => s <= 1 ? null : c.section === "warmup" || c.presetRole === "warmup" ? "first" : c.section === "cooldown" || c.presetRole === "cooldown" ? "last" : c.kind === "video" && (c.videoRounds === "first" || c.videoRounds === "last") ? c.videoRounds : null, u = (c) => !!p(c), d = g.filter((c) => !u(c)), m = g.filter(u), C = d.length, L = d.reduce((c, T) => c + T.duration + T.rest, 0), h = m.reduce((c, T) => c + T.duration + T.rest, 0), f = [
      m.some((c) => c.section === "warmup" || c.presetRole === "warmup") && "warm-up",
      m.some((c) => c.section === "cooldown" || c.presetRole === "cooldown") && "cooldown",
      m.some((c) => c.kind === "video" && !c.section && !c.presetRole) && "video"
    ].filter(Boolean), b = f.length > 1 ? f.slice(0, -1).join(", ") + " & " + f[f.length - 1] : f[0] || "";
    v = [];
    const w = (c, T) => {
      const te = p(c);
      return !te || (te === "first" ? T === 1 : T === s);
    };
    for (let c = 1; c <= s; c++)
      if (g.filter((T) => w(T, c)).forEach((T, te) => v.push({ ...T, id: T.id + (s > 1 ? "-r" + c : ""), round: c, roundIndex: te })), c < s && C)
        if (n != null && n.customSequence)
          v.push({ id: "round-break-" + c, name: "Rest", group: "Round " + (c + 1) + " next", kind: "rest", hidden: !1, duration: t, rest: 0, round: c, roundIndex: C, roundBreak: !0 });
        else {
          const T = v[v.length - 1];
          T.rest = t, T.roundBreakAfter = !0;
        }
    $t();
    const z = v.reduce((c, T) => c + T.duration + T.rest, 0), re = Math.round(L / 60), $ = Math.round(z / 60), Y = s > 1 ? Oe(re) + " × " + s + " rounds" + (h ? " + " + J(h) + " " + b : "") + " (" + Oe($) + ")" : Oe($), ve = [o.length ? "warm-up" : "", l.length ? "cooldown" : ""].filter(Boolean), Q = n != null && n.customSequence ? Y + " · " + C + " items" + (ve.length && !(s > 1 && h) ? " · " + ve.join(" + ") : "") : Y + " · " + J(e) + " / " + J(t) + (ve.length && !(s > 1 && h) ? " · " + ve.join(" + ") : "");
    Ga.textContent = J(L);
    const U = v.filter((c) => !c.roundBreak).length, Vt = s > 1 ? U + " activities · " + s + " rounds" : C + " activities";
    Ua.textContent = s > 1 ? s + " rounds · " + Oe($) + " total" : "1 round", n && (n.summary = Q, n.activityCount = C);
    const jt = x.querySelector(".workoutPanel.active .sub");
    jt && (jt.textContent = Q), Za.textContent = Q, x.querySelectorAll(".workoutPanel.active .activityCount").forEach((c) => c.textContent = Vt), $t(), Ai(), Nn(), Ft(), to(), _ && Re(), Je.workout.classList.contains("active") && !j && Xn();
  }
  const Mt = '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><g fill="currentColor"><circle cx="9" cy="6" r="1.6"/><circle cx="15" cy="6" r="1.6"/><circle cx="9" cy="12" r="1.6"/><circle cx="15" cy="12" r="1.6"/><circle cx="9" cy="18" r="1.6"/><circle cx="15" cy="18" r="1.6"/></g></svg>';
  let ie = null, ue = null;
  function no(e) {
    return e = Math.max(1, Number(e) || 0), e >= 3600 && e % 3600 === 0 ? { value: e / 3600, unit: "hour" } : e >= 60 && e % 60 === 0 ? { value: e / 60, unit: "min" } : { value: e, unit: "sec" };
  }
  function Ri(e = !1) {
    const t = x.querySelector(".moveEditForm input[data-f=url],.moveEditForm input[data-f=name]");
    t && (t.focus({ preventScroll: !0 }), e && t.select());
  }
  function io(e, t) {
    const n = e.kind === "rest", i = e.kind === "video", o = i ? e.useVideoLength !== !1 : n ? e.useGlobalTiming === !0 : e.useGlobalTiming !== !1, r = Number(n ? N.value : A.value), l = no(i ? e.useVideoLength === !1 ? e.duration : Et({ ...e, useVideoLength: !0 }) : o ? r : e.duration || r), s = i && (Number(e.videoDuration) > 0 || Number(e.end) > 0), g = i ? '<label class="moveEditWide"><span>YouTube link</span><input class="addInput" data-f="url" type="url" inputmode="url" autocomplete="off" value="' + B(e.url || "") + '" placeholder="Paste a YouTube link"></label><label><span>Name</span><input class="addInput" data-f="name" type="text" value="' + B(e.autoName ? "" : e.name) + '" placeholder="Uses the video’s title"></label><label><span>Plays in</span><select class="creatorUnitSelect" data-f="rounds">' + [["every", "Every round"], ["first", "The first round only"], ["last", "The last round only"]].map(([b, w]) => '<option value="' + b + '"' + ((e.videoRounds || "every") === b ? " selected" : "") + ">" + w + "</option>").join("") + '</select></label><p class="fieldError" data-f="urlError" hidden>That isn’t a YouTube link. Copy it from the Share button on YouTube.</p>' : '<label><span>Name</span><input class="addInput" data-f="name" type="text" value="' + B(e.name) + '" placeholder="' + (n ? "Rest" : "Name this movement") + '"></label><label><span>Type / group</span><input class="addInput" data-f="group" type="text" value="' + B(e.group) + '" placeholder="' + (n ? "Rest" : "e.g. Glutes + legs") + '"></label>', p = i ? "Play the whole " + (Number(e.start) > 0 || Number(e.end) > 0 ? "clip" : "video") + (s ? " · " + Lt(Et({ ...e, useVideoLength: !0 })) : "") : "Use global timing · " + J(r), u = document.createElement("div");
    u.className = "moveRow editing", u.dataset.index = t, u.dataset.id = e.id;
    const d = (ue == null ? void 0 : ue.item) === e;
    u.innerHTML = '<div class="moveEditForm"><div class="moveEditFields' + (i ? " videoFields" : "") + '">' + g + '</div><div class="moveEditTiming"><label class="globalTimingToggle"><input type="checkbox" data-f="global"' + (o ? " checked" : "") + '><span class="toggleTrack" aria-hidden="true"><span class="toggleThumb"></span></span><span class="toggleLabel">' + B(p) + '</span></label><div class="creatorDurationRow"><input class="addInput creatorNumber" data-f="dur" type="number" min="1" max="3600" step="1" value="' + l.value + '" aria-label="Duration"><select class="creatorUnitSelect" data-f="unit" aria-label="Duration unit">' + ["sec", "min", "hour"].map((b) => '<option value="' + b + '"' + (b === l.unit ? " selected" : "") + ">" + { sec: "seconds", min: "minutes", hour: "hours" }[b] + "</option>").join("") + '</select></div></div><div class="moveEditActions"><button class="pill" type="button" data-a="cancel">Cancel</button><button class="primary" type="button" data-a="save">Save</button></div></div>';
    const m = (b) => u.querySelector("[data-f=" + b + "]"), C = () => {
      const b = m("global").checked;
      m("dur").disabled = b, m("unit").disabled = b, u.querySelector(".creatorDurationRow").classList.toggle("isDisabled", b);
    };
    m("global").addEventListener("change", C), C();
    const L = () => {
      d && Xt(), ie = null, O();
    }, h = () => {
      if (i) {
        f();
        return;
      }
      const b = m("name").value.trim();
      if (!b) {
        m("name").focus();
        return;
      }
      e.name = b, e.group = m("group").value.trim() || (n ? "Rest" : "Movement");
      const w = m("global").checked;
      e.useGlobalTiming = w, w || (e.duration = Math.max(n ? 5 : 1, Qt(m("dur").value, m("unit").value))), d && (ue = null), ie = null, O(), V(d ? n ? "Rest added" : "Movement added" : "Movement updated");
    }, f = () => {
      const b = m("url").value.trim(), w = eo(b);
      if (!w) {
        m("urlError").hidden = !1, m("url").classList.add("invalid"), m("url").focus();
        return;
      }
      const z = w.id !== e.videoId;
      e.url = b, e.videoId = w.id, e.start = w.start, e.end = w.end, z && (e.videoDuration = null, e.videoError = null);
      const re = m("name").value.trim();
      e.autoName = !re, e.name = re || (z ? "" : e.name) || e.videoTitle || "YouTube video", e.group = "Video", e.videoRounds = m("rounds").value, e.useVideoLength = m("global").checked, e.useVideoLength || (e.duration = Math.max(5, Qt(m("dur").value, m("unit").value))), d && (ue = null), ie = null, O(), V(d ? "Video added" : "Video updated"), (z || !e.videoDuration || e.autoName && !e.videoTitle) && $o(e);
    };
    return i && m("url").addEventListener("input", () => {
      m("urlError").hidden = !0, m("url").classList.remove("invalid");
    }), u.querySelector("[data-a=cancel]").addEventListener("click", L), u.querySelector("[data-a=save]").addEventListener("click", h), u.addEventListener("keydown", (b) => {
      b.key === "Escape" && (b.preventDefault(), b.stopPropagation(), L()), b.key === "Enter" && b.target.matches("input") && (b.preventDefault(), h());
    }), u;
  }
  function Rn(e, t) {
    const n = a(t);
    n.innerHTML = "", e.forEach((i, o) => {
      if (i === ie) {
        n.appendChild(io(i, o));
        return;
      }
      const r = document.createElement("div");
      r.className = "moveRow" + (i.hidden ? " hidden" : "") + (i.kind === "rest" ? " restItem" : "") + (i.kind === "video" ? " videoItem" : "") + (oi(i) ? " noMeta" : ""), r.dataset.index = o, r.dataset.id = i.id;
      const l = i.kind === "rest" ? i.useGlobalTiming === !0 ? "Global timing" : J(i.duration) : i.useGlobalTiming === !1 ? J(i.duration) : "Global timing", s = i.kind === "video" ? '<span class="moveKindBadge">Video</span>' : "", g = i.kind === "video" ? i.videoError ? "YouTube · can’t play outside YouTube" : "YouTube · " + (i.useVideoLength === !1 ? "stops after " + J(i.duration) : Number(i.videoDuration) > 0 || Number(i.end) > 0 ? Lt(Et(i)) : "plays to the end") + (i.videoRounds === "first" ? " · first round only" : i.videoRounds === "last" ? " · last round only" : "") : i.group + " · " + l;
      r.innerHTML = '<button class="dragHandle" type="button" title="Drag to reorder" aria-label="Reorder ' + B(i.name) + '. Drag, or use the up and down arrow keys">' + Mt + '</button><div class="moveText"><div class="moveItemName">' + B(i.name) + s + '</div><div class="moveMeta">' + B(g) + '</div></div><div class="moveActions"><button class="hideBtn editBtn" type="button" aria-label="Edit ' + B(i.name) + '">Edit</button><button class="hideBtn" type="button">' + (i.hidden ? "Show" : "Hide") + '</button><button class="removeBtn" type="button" aria-label="Hold to remove ' + B(i.name) + '"><span class="removeFill"></span><span class="removeLabel">Remove</span></button></div>', r.querySelector(".editBtn").addEventListener("click", () => {
        Xt(), ie = i, O(), Ri();
      }), r.querySelector(".hideBtn:not(.editBtn)").addEventListener("click", () => {
        i.hidden = !i.hidden, O();
      });
      const p = r.querySelector(".removeBtn");
      fn(p, p.querySelector(".removeFill"), 1200, () => {
        const d = e.indexOf(i);
        d < 0 || (e.splice(d, 1), O(), V("Removed " + i.name, { label: "Undo", run: () => {
          e.splice(Math.min(d, e.length), 0, i), O();
        } }));
      });
      const u = r.querySelector(".dragHandle");
      u.addEventListener("pointerdown", (d) => ao(d, r, n, e)), u.addEventListener("keydown", (d) => {
        var L, h;
        if (d.key !== "ArrowUp" && d.key !== "ArrowDown") return;
        d.preventDefault();
        const m = e.indexOf(i), C = m + (d.key === "ArrowUp" ? -1 : 1);
        C < 0 || C >= e.length || (e.splice(m, 1), e.splice(C, 0, i), O(), (h = (L = a(t).children[C]) == null ? void 0 : L.querySelector(".dragHandle")) == null || h.focus());
      }), n.appendChild(r);
    });
  }
  const Qe = () => {
    var e;
    return (e = window.matchMedia) == null ? void 0 : e.call(window, "(prefers-reduced-motion: reduce)").matches;
  }, Bi = "transform .24s cubic-bezier(.2,.8,.2,1)";
  function ao(e, t, n, i) {
    if (e.button !== void 0 && e.button !== 0) return;
    e.preventDefault();
    const o = e.currentTarget;
    try {
      o.setPointerCapture(e.pointerId);
    } catch {
    }
    const r = t.closest(".exerciseScroller"), l = e.clientY - t.getBoundingClientRect().top;
    let s = e.clientY, g = null;
    t.classList.add("dragging"), t.style.transition = "none";
    const p = () => {
      t.style.transform = "";
      const h = t.getBoundingClientRect().top;
      t.style.transform = "translateY(" + (s - l - h) + "px) scale(1.015)";
    }, u = (h) => {
      const f = [...n.children].filter((w) => w !== t), b = new Map(f.map((w) => [w, w.getBoundingClientRect().top]));
      h(), !Qe() && f.forEach((w) => {
        w.style.transition = "none", w.style.transform = "";
        const z = b.get(w) - w.getBoundingClientRect().top;
        z && (w.style.transform = "translateY(" + z + "px)", w.getBoundingClientRect(), w.style.transition = Bi, w.style.transform = "");
      });
    }, d = () => {
      const h = [...n.children].filter((w) => w !== t), f = s - l + t.offsetHeight / 2, b = h.find((w) => {
        const z = w.getBoundingClientRect();
        return f < z.top + z.height / 2;
      });
      b ? t.nextElementSibling !== b && u(() => n.insertBefore(t, b)) : n.lastElementChild !== t && u(() => n.appendChild(t)), p();
    }, m = () => {
      if (!r) return;
      const h = r.getBoundingClientRect(), f = 56, b = s < h.top + f ? -10 : s > h.bottom - f ? 10 : 0;
      b && (r.scrollTop += b, d());
    }, C = (h) => {
      s = h.clientY, d();
    }, L = () => {
      clearInterval(g), o.removeEventListener("pointermove", C), o.removeEventListener("pointerup", L), o.removeEventListener("pointercancel", L);
      const h = [...n.children].map((w) => Number(w.dataset.index)), f = h.some((w, z) => w !== z), b = () => {
        if (t.classList.remove("dragging"), t.style.transition = "", t.style.transform = "", f) {
          const w = h.map((z) => i[z]);
          i.splice(0, i.length, ...w);
        }
        O(), f && V("Order saved");
      };
      if (Qe()) {
        b();
        return;
      }
      t.style.transition = Bi, t.style.transform = "", setTimeout(b, 250);
    };
    o.addEventListener("pointermove", C), o.addEventListener("pointerup", L), o.addEventListener("pointercancel", L), g = setInterval(m, 30), p();
  }
  function Ai() {
    var o, r, l, s;
    const e = E[F], t = (o = a("warmupList")) == null ? void 0 : o.closest("section"), n = (r = a("cooldownList")) == null ? void 0 : r.closest("section"), i = (s = (l = a("strengthList")) == null ? void 0 : l.closest("section")) == null ? void 0 : s.querySelector(".sectionTitle");
    e != null && e.customSequence ? (t && (t.hidden = !e.includeWarmup), n && (n.hidden = !e.includeCooldown), i && (i.textContent = "Move sequence")) : (t && (t.hidden = !!(e != null && e.warmupOff)), n && (n.hidden = !1), i && (i.textContent = "Kettlebell work")), Rn(ce, "warmupList"), Rn(ne, "strengthList"), Rn(pe, "cooldownList");
  }
  function Xt() {
    if (!ue) return;
    const { item: e, arr: t } = ue;
    ue = null;
    const n = t.indexOf(e);
    n >= 0 && t.splice(n, 1), ie === e && (ie = null);
  }
  function Bn(e) {
    return e.id === "warmupList" ? { arr: ce, kind: "warmup", group: "Warm-up" } : e.id === "cooldownList" ? { arr: pe, kind: "cooldown", group: "Cooldown" } : { arr: ne, kind: "work", group: "" };
  }
  function oo(e, t) {
    const n = Bn(t), i = Date.now().toString(36);
    return e === "video" ? { id: "video-" + i, name: "", group: "Video", kind: "video", hidden: !1, url: "", videoId: "", start: 0, end: null, videoDuration: null, useVideoLength: !0, autoName: !0, duration: 300 } : e === "rest" ? { id: "rest-" + i, name: "Rest", group: "Rest", kind: "rest", hidden: !1, useGlobalTiming: !0, duration: Number(N.value) } : { id: "movement-" + i, name: "", group: n.group, kind: n.kind, hidden: !1, useGlobalTiming: !0, duration: Number(A.value) };
  }
  const Ni = "cubic-bezier(.34,1.46,.64,1)";
  function ro(e, t) {
    if (Qe() || !e) {
      t();
      return;
    }
    const n = (r) => {
      var l;
      return ((l = r.dataset) == null ? void 0 : l.id) || r;
    }, i = () => [...e.querySelectorAll(".moveRow,.sectionTitle,.movementCreatorLaunch")], o = new Map(i().map((r) => [n(r), r.getBoundingClientRect().top]));
    t(), i().forEach((r) => {
      const l = o.get(n(r));
      if (l === void 0) return;
      const s = l - r.getBoundingClientRect().top;
      Math.abs(s) < 0.5 || r.animate([{ transform: "translateY(" + s + "px)" }, { transform: "none" }], { duration: 440, easing: Ni });
    });
  }
  function so(e, t) {
    if (!e || Qe()) return;
    const n = e.offsetHeight, i = Math.max(0, n - (t || 0));
    e.animate([{ clipPath: "inset(0 0 " + i + "px 0 round 20.8px)" }, { clipPath: "inset(0 0 0 0 round 20.8px)" }], { duration: 460, easing: Ni });
  }
  function Ii(e, t, n, i) {
    const { arr: o } = Bn(t), r = oo(e, t);
    o.splice(Math.max(0, Math.min(n, o.length)), 0, r), ue = { item: r, arr: o }, ie = r, ro(t.closest(".exerciseScroller,.createStepSlot") || t, () => O());
    const l = t.querySelector(".moveRow.editing");
    return so(l, i), Ri(e === "rest"), l;
  }
  function lo(e) {
    for (let t = e; t && t.nodeType === 1; t = t.parentElement) {
      const n = getComputedStyle(t).overflowY;
      if (/(auto|scroll)/.test(n) && t.scrollHeight > t.clientHeight) return t;
    }
    return null;
  }
  function co(e, t, n, i) {
    var Ea;
    (ie || ue) && (Xt(), ie = null, O());
    const o = !Qe(), r = e.getBoundingClientRect(), l = ((Ea = x.querySelector(".moveList .moveRow:not(.editing)")) == null ? void 0 : Ea.offsetHeight) || 80, s = lo(e), g = e.closest(".exerciseScroller,.createFlow") || s, p = document.createElement("div");
    p.className = "addGhost" + (t === "movement" ? "" : " rest"), p.setAttribute("aria-hidden", "true");
    const u = { movement: ["New movement", "Drop to add, then name it"], rest: ["Rest", "Rest · Global timing"], video: ["New video", "Drop to add, then paste a YouTube link"] }[t];
    p.innerHTML = '<span class="addGhostGrip">' + Mt + '</span><span class="addGhostText"><strong>' + u[0] + "</strong><small>" + u[1] + "</small></span>", p.style.width = r.width + "px", p.style.height = r.height + "px", p.style.transform = "translate(" + r.left + "px," + r.top + "px)", a("workoutModal").appendChild(p), e.classList.add("lifting");
    const d = n - r.left, m = i - r.top, C = 44;
    let L = n, h = i, f = r.left, b = r.top, w = 0, z = 0, re = !o, $ = null, Y = null, ve = -1, Q = 0, U = null;
    const Vt = () => ["warmupList", "strengthList", "cooldownList"].map((S) => a(S)).filter((S) => S && S.getClientRects().length && !S.closest("[hidden]")), jt = (S) => {
      if (S === $) return;
      $ = S, p.classList.toggle("overList", !!S);
      const P = S ? S.getBoundingClientRect().width : r.width;
      p.style.width = P + "px", p.style.height = (S ? l : r.height) + "px";
    }, c = (S) => {
      S.classList.add("leaving"), S.style.height = "0px", S.style.marginTop = "-8px", setTimeout(() => S.remove(), o ? 320 : 0);
    }, T = (S, P, W) => {
      if (Y && Y.parentNode === S && ve === W || (Y && (c(Y), Y = null, ve = -1), !S)) return;
      const K = document.createElement("div");
      K.className = "dropSlot", S.insertBefore(K, P), Y = K, ve = W, K.getBoundingClientRect(), K.style.height = l + "px", K.style.marginTop = "0px";
    }, te = () => {
      let S = null, P = 1 / 0;
      for (const He of Vt()) {
        const de = He.getBoundingClientRect();
        if (L < de.left - 48 || L > de.right + 48) continue;
        const ke = de.top - 28, qe = de.bottom + 28, Ma = h < ke ? ke - h : h > qe ? h - qe : 0;
        Ma < P && (P = Ma, S = He);
      }
      const W = g == null ? void 0 : g.getBoundingClientRect(), we = W && L >= W.left && L <= W.right && h >= W.top && h <= W.bottom || P === 0 ? S : null;
      if (we) {
        const He = [...we.children].filter((ke) => ke.classList.contains("moveRow"));
        let de = He.findIndex((ke) => {
          const qe = ke.getBoundingClientRect();
          return h < qe.top + qe.height / 2;
        });
        de < 0 && (de = He.length), T(we, He[de] || null, de);
      } else T(null);
      jt(we);
    }, St = () => {
      if (U) return U.aim();
      if ($) {
        const S = $.getBoundingClientRect();
        let P = h - l / 2;
        return Y && (P = P * 0.6 + Y.getBoundingClientRect().top * 0.4), { x: S.left, y: P };
      }
      return { x: L - d, y: h - m };
    }, vi = (S, P, W, K) => {
      p.style.transform = "translate(" + f + "px," + b + "px) rotate(" + S + "deg) rotate(" + P + "rad) scale(" + W + "," + K + ") rotate(" + -P + "rad)";
    }, Ta = () => {
      if (Q = requestAnimationFrame(Ta), !re) {
        const de = L - n, ke = h - i, qe = Math.min(Math.hypot(de, ke) / C, 1);
        f = r.left + de * 0.35, b = r.top + ke * 0.35, vi(0, Math.atan2(ke, de), 1 + 0.155 * qe, 1 - 0.1 * qe);
        return;
      }
      const S = St();
      if (!o) {
        f = S.x, b = S.y, vi(0, 0, 1, 1), U && (cancelAnimationFrame(Q), U.done());
        return;
      }
      const P = U ? U.k : 0.17, W = U ? U.d : 0.7;
      w = (w + (S.x - f) * P) * W, z = (z + (S.y - b) * P) * W, f += w, b += z;
      const K = Math.hypot(w, z), we = Math.min(K / 48, 1), He = $ || U ? 0 : Math.max(-5, Math.min(5, w * 0.32));
      vi(He, Math.atan2(z, w), 1 + 0.1 * we, 1 - 0.063 * we), U && K < 0.15 && Math.hypot(S.x - f, S.y - b) < 0.6 && (cancelAnimationFrame(Q), U.done());
    }, dr = setInterval(() => {
      if (!s || U) return;
      const S = s.getBoundingClientRect(), P = 64, W = h < S.top + P ? -(S.top + P - h) / 4 : h > S.bottom - P ? (h - (S.bottom - P)) / 4 : 0;
      W && (s.scrollTop += Math.max(-18, Math.min(18, W)), te());
    }, 30);
    Q = requestAnimationFrame(Ta);
    let La = !1;
    const Ct = (S, P) => {
      if (La) return;
      La = !0, cancelAnimationFrame(Q);
      const W = Y ? Y.offsetHeight : l;
      !S && Y && (Y.remove(), Y = null), p.classList.add("leaving"), setTimeout(() => p.remove(), 180), e.classList.remove("lifting"), S && Ii(t, S, P, W);
    };
    return {
      move(S, P) {
        L = S, h = P, !re && Math.hypot(L - n, h - i) > C && (re = !0, w = (L - n) * 0.085, z = (h - i) * 0.085), re && te();
      },
      drop(S) {
        clearInterval(dr);
        const P = $, W = ve;
        if (!S && P && Y) {
          const K = Y;
          U = { k: 0.24, d: 0.62, aim: () => {
            const we = K.getBoundingClientRect();
            return { x: we.left, y: we.top };
          }, done: () => Ct(P, W) }, setTimeout(() => Ct(P, W), 650), o || (cancelAnimationFrame(Q), Ct(P, W));
          return;
        }
        T(null), jt(null), U = { k: 0.2, d: 0.66, aim: () => {
          const K = e.getBoundingClientRect();
          return { x: K.left, y: K.top };
        }, done: () => Ct(null) }, setTimeout(() => Ct(null), 650), o || (cancelAnimationFrame(Q), Ct(null));
      }
    };
  }
  function An(e, t) {
    let n = !1;
    e.addEventListener("click", (i) => {
      if (n) {
        n = !1, i.preventDefault();
        return;
      }
      const o = a("strengthList"), r = Ii(t, o, Bn(o).arr.length, 0);
      r == null || r.scrollIntoView({ block: "nearest", behavior: Qe() ? "auto" : "smooth" });
    }), e.addEventListener("pointerdown", (i) => {
      if (i.button !== void 0 && i.button !== 0) return;
      const o = i.pointerId, r = i.clientX, l = i.clientY;
      let s = null, g = !1;
      try {
        e.setPointerCapture(o);
      } catch {
      }
      const p = (f) => {
        if (f.pointerId === o) {
          if (f.pointerType === "mouse" && f.buttons === 0) {
            h(!1);
            return;
          }
          if (!s) {
            if (Math.hypot(f.clientX - r, f.clientY - l) < 6) return;
            s = co(e, t, r, l);
          }
          s.move(f.clientX, f.clientY);
        }
      }, u = (f) => {
        f.pointerId === o && h(!1);
      }, d = (f) => {
        f.pointerId === o && h(!0);
      }, m = () => h(!1), C = () => h(!0), L = (f) => {
        f.key === "Escape" && s && (f.preventDefault(), f.stopPropagation(), h(!0));
      };
      function h(f) {
        if (!g && (g = !0, window.removeEventListener("pointermove", p, !0), window.removeEventListener("pointerup", u, !0), window.removeEventListener("pointercancel", d, !0), window.removeEventListener("keydown", L, !0), window.removeEventListener("blur", C), e.removeEventListener("lostpointercapture", m), s)) {
          const b = s;
          s = null, n = !0, setTimeout(() => {
            n = !1;
          }, 0), b.drop(f);
        }
      }
      window.addEventListener("pointermove", p, !0), window.addEventListener("pointerup", u, !0), window.addEventListener("pointercancel", d, !0), window.addEventListener("keydown", L, !0), window.addEventListener("blur", C), e.addEventListener("lostpointercapture", m);
    });
  }
  function Nn() {
    ne.length > 0;
    const e = a("addMovementBtn"), t = a("addRestBtn");
    e && (e.innerHTML = Mt + "<span>Add movement</span>"), t && (t.innerHTML = Mt + "<span>Add rest</span>");
    const n = a("addVideoBtn");
    n && (n.innerHTML = Mt + "<span>Add video</span>");
  }
  function Ft() {
    const e = a("useGlobalTiming").checked, t = a("addMovementDuration"), n = a("addMovementUnit");
    t.disabled = e, n.disabled = e, t.parentElement.style.opacity = e ? ".38" : "1", a("globalTimingValue").textContent = "Use global timing · " + J(A.value);
    const i = a("useGlobalRestTiming").checked, o = a("addRestDuration"), r = a("addRestUnit");
    o.disabled = i, r.disabled = i, o.parentElement.style.opacity = i ? ".38" : "1", a("globalRestTimingValue").textContent = "Use global timing · " + J(N.value);
  }
  let Pi = "movement";
  function po(e) {
    Pi = e;
    const t = a("movementFields"), n = a("restFields");
    t.hidden = e !== "movement", n.hidden = e !== "rest", a("movementCreatorHeading").textContent = "Add movement", a("movementCreator").setAttribute("aria-label", "Create movement"), Ft();
  }
  function In() {
    E[F];
    const e = _ ? !0 : a("useGlobalTiming").checked, t = e ? Number(A.value) : Qt(
      a("addMovementDuration").value,
      a("addMovementUnit").value
    ), n = _ ? !0 : a("useGlobalRestTiming").checked, i = n ? Number(N.value) : Qt(
      a("addRestDuration").value,
      a("addRestUnit").value
    );
    if (Pi === "rest") {
      const o = a("addRestTitle").value.trim() || "Rest", r = a("addRestGroup").value.trim() || "Rest";
      ne.push({
        id: "rest-" + Date.now(),
        name: o,
        group: r,
        kind: "rest",
        hidden: !1,
        useGlobalTiming: n,
        duration: Math.max(5, i || Number(N.value))
      }), O(), a("movementCreator").hidden = !0, a("addRestTitle").value = "Rest", a("addRestGroup").value = "Rest", V("Rest added"), _ && (Ze("movements"), Re());
    } else {
      const o = a("addMovementInput").value.trim();
      if (!o) return;
      const r = a("addMovementGroup").value.trim() || "Movement";
      ne.push({
        id: "movement-" + Date.now(),
        name: o,
        group: r,
        kind: "work",
        hidden: !1,
        useGlobalTiming: e,
        duration: Math.max(5, t || Number(A.value))
      }), a("addMovementInput").value = "", a("addMovementGroup").value = "", O(), a("movementCreator").hidden = !0, V("Movement added"), _ && (Ze("movements"), Re());
    }
    Nn();
  }
  let Pn = null;
  function V(e, t) {
    const n = a("toast");
    n.innerHTML = "";
    const i = document.createElement("span");
    if (i.textContent = e, n.appendChild(i), t) {
      const o = document.createElement("button");
      o.type = "button", o.className = "toastAction", o.textContent = t.label, o.addEventListener("click", () => {
        t.run(), n.classList.remove("show", "withAction"), clearTimeout(Pn);
      }), n.appendChild(o);
    }
    n.classList.toggle("withAction", !!t), n.classList.add("show"), clearTimeout(Pn), Pn = setTimeout(() => n.classList.remove("show", "withAction"), t ? 5e3 : 2200);
  }
  const uo = ["Terrible", "Poor", "Meh", "Okay", "Good", "Great"], mo = ["#6E63A8", "#5878A8", "#6F8B8A", "#5F9B72", "#D5A53E", "#D56B54"];
  function Di(e) {
    return Math.max(0, Math.min(5, Math.floor(Number(e) / 100 * 6)));
  }
  function Xe(e, t) {
    return uo[Di(t)];
  }
  function go(e) {
    return mo[Di(e)];
  }
  function ae(e) {
    return e.getFullYear() + "-" + String(e.getMonth() + 1).padStart(2, "0") + "-" + String(e.getDate()).padStart(2, "0");
  }
  function Se() {
    return { morning: I().morningTime || "08:00", evening: I().eveningTime || "19:00" };
  }
  function et(e) {
    const [t, n] = String(e).split(":").map(Number);
    return (t || 0) * 60 + (n || 0);
  }
  function vo(e) {
    const t = Se();
    return e.getHours() * 60 + e.getMinutes() >= et(t.evening) ? "evening" : "morning";
  }
  function en(e, t) {
    return M.checkins.find((n) => n.date === e && n.slot === t);
  }
  function tn(e) {
    return !!(e && e.mood != null && e.energy != null);
  }
  function nn() {
    const e = /* @__PURE__ */ new Date(), t = ae(e), n = vo(e), i = Se(), o = e.getHours() * 60 + e.getMinutes();
    return n === "morning" && o < et(i.morning) || tn(en(t, n)) ? null : n;
  }
  const Be = a("checkinModal"), Ae = a("checkinTab"), ho = a("checkinBadge"), Ne = { mood: { input: a("moodInput"), fill: a("moodFill") }, energy: { input: a("energyLevelInput"), fill: a("energyLevelFill") } };
  function Hi(e) {
    const { input: t, fill: n } = Ne[e];
    n.style.width = t.value + "%", t.setAttribute("aria-valuetext", Xe(e, t.value));
  }
  Object.keys(Ne).forEach((e) => Ne[e].input.addEventListener("input", () => Hi(e)));
  let be = null;
  function qi() {
    const e = Se(), t = /* @__PURE__ */ new Date(), n = t.getHours() * 60 + t.getMinutes();
    return n < et(e.morning) ? "Next check-in at " + e.morning : n < et(e.evening) ? "Next check-in at " + e.evening : "Next check-in tomorrow at " + e.morning;
  }
  function fo() {
    const e = Se(), t = /* @__PURE__ */ new Date(), n = t.getHours() * 60 + t.getMinutes(), i = (o, r) => {
      const [l, s] = o.split(":").map(Number);
      return new Date(t.getFullYear(), t.getMonth(), t.getDate() + (r ? 1 : 0), l, s);
    };
    return n < et(e.morning) ? { date: i(e.morning), time: e.morning } : n < et(e.evening) ? { date: i(e.evening), time: e.evening } : { date: i(e.morning, !0), time: e.morning };
  }
  let Dn = null, Hn = null;
  function zi() {
    if (nn()) {
      an(), Ge();
      return;
    }
    const e = fo(), t = Math.max(0, Math.round((e.date - Date.now()) / 1e3)), n = Math.floor(t / 3600), i = Math.floor(t % 3600 / 60), o = t % 60;
    a("peekCountdown").textContent = n + ":" + String(i).padStart(2, "0") + ":" + String(o).padStart(2, "0"), a("peekAt").textContent = "Available at " + e.time;
  }
  function bo() {
    zi(), Ae.classList.add("peek"), clearInterval(Hn), Hn = setInterval(zi, 1e3), clearTimeout(Dn), Dn = setTimeout(an, 6e3);
  }
  function an() {
    Ae.classList.remove("peek"), clearInterval(Hn), clearTimeout(Dn);
  }
  function _i() {
    const e = nn();
    if (!e) {
      Ae.classList.contains("peek") ? an() : bo();
      return;
    }
    be = { date: ae(/* @__PURE__ */ new Date()), slot: e };
    const n = en(be.date, e), i = M.checkins.find((r) => tn(r));
    Object.keys(Ne).forEach((r) => {
      Ne[r].input.value = (n == null ? void 0 : n[r]) ?? (i == null ? void 0 : i[r]) ?? 50, Hi(r);
    });
    const o = Se()[e];
    a("checkinEyebrow").textContent = (e === "morning" ? "Morning" : "Evening") + " · " + o, a("checkinTitle").textContent = e === "morning" ? "Morning check-in" : "Evening check-in", Be.classList.add("open"), Be.setAttribute("aria-hidden", "false"), requestAnimationFrame(() => Ne.mood.input.focus());
  }
  function Rt() {
    Be.classList.remove("open"), Be.setAttribute("aria-hidden", "true"), be && (Bt = be.date + "-" + be.slot);
    try {
      localStorage.setItem("move-assistant-dismissed", Bt);
    } catch {
    }
    be = null, Ge();
  }
  function xo() {
    if (!be) return;
    if (tn(en(be.date, be.slot))) {
      Rt();
      return;
    }
    const { date: e, slot: t } = be;
    let n = en(e, t);
    n || (n = { date: e, slot: t }, M.checkins.unshift(n), M.checkins = M.checkins.slice(0, 2e3)), n.mood = Number(Ne.mood.input.value), n.energy = Number(Ne.energy.input.value), n.scale = 100, n.at = (/* @__PURE__ */ new Date()).toISOString(), he(), y.fire("checkin", { slot: t, mood: n.mood, energy: n.energy, mood_label: Xe("mood", n.mood), energy_label: Xe("energy", n.energy) }), V((t === "morning" ? "Morning" : "Evening") + " check-in saved"), Rt(), on(), At(), Ke(), Fe();
  }
  let Bt = "";
  try {
    Bt = localStorage.getItem("move-assistant-dismissed") || "";
  } catch {
  }
  function Ge() {
    const e = nn();
    ho.hidden = !e, Ae.hidden = !e, e || an(), Ae.classList.toggle("due", !!e), Ae.setAttribute("aria-label", e ? (e === "morning" ? "Morning" : "Evening") + " check-in is due" : qi()), Ae.title = e ? "Check in now" : qi();
  }
  function qn() {
    Ge();
    const e = nn();
    !e || Be.classList.contains("open") || I().checkinAutoOpen !== !1 && (!Je.home.classList.contains("active") || oe.classList.contains("open") || Bt !== ae(/* @__PURE__ */ new Date()) + "-" + e && _i());
  }
  Ae.addEventListener("click", _i), a("checkinLater").addEventListener("click", Rt), a("checkinSave").addEventListener("click", xo), Be.addEventListener("click", (e) => {
    e.target === Be && Rt();
  }), Be.addEventListener("keydown", (e) => {
    e.key === "Escape" && (e.preventDefault(), Rt());
  }), setInterval(qn, 3e4);
  function on() {
    const e = ae(/* @__PURE__ */ new Date()), t = (n) => M.checkins.find((i) => i.date === e && i[n] != null);
    [["mood", "moodMeta"], ["energy", "energyLevelMeta"]].forEach(([n, i]) => {
      const o = t(n);
      a(i).textContent = o ? Xe(n, o[n]) : "—";
    });
  }
  function At() {
    const e = a("feelCard");
    if (!e) return;
    const t = /* @__PURE__ */ new Date(), n = new Date(t.getFullYear(), t.getMonth(), t.getDate() - (t.getDay() + 6) % 7), i = [...Array(7)].map((p, u) => {
      const d = new Date(n.getFullYear(), n.getMonth(), n.getDate() + u), m = ae(d), C = M.checkins.filter((h) => h.date === m), L = (h) => {
        const f = C.map((b) => b[h]).filter((b) => b != null);
        return f.length ? f.reduce((b, w) => b + w, 0) / f.length : null;
      };
      return { d, key: m, mood: L("mood"), energy: L("energy"), count: C.filter(tn).length, future: d > t && m !== ae(t) };
    }), o = (p) => {
      const u = i.map((d) => d[p]).filter((d) => d != null);
      return u.length ? u.reduce((d, m) => d + m, 0) / u.length : null;
    }, r = o("mood"), l = o("energy"), s = (p, u) => '<div class="feelMeter"><div class="feelMeterTop"><span>' + p + "</span><span>" + (u == null ? "—" : B(Xe("", u))) + '</span></div><div class="feelTrack"><span style="width:' + (u == null ? 0 : Math.max(4, u)) + "%;background:" + (u == null ? "transparent" : go(u)) + '"></span></div></div>', g = i.filter((p) => p.mood != null && p.energy != null).sort((p, u) => u.mood + u.energy - (p.mood + p.energy))[0];
    e.innerHTML = '<div class="feelTop"><div class="feelSummary"><div class="feelHeadline">' + (r == null ? "No check-ins yet" : B(Xe("", (r + l) / 2))) + '</div><div class="weekCopy">' + (r == null ? "Your first check-in will appear here." : "on average this week" + (g ? " · best day " + B(new Intl.DateTimeFormat(void 0, { weekday: "long" }).format(g.d)) : "")) + '</div></div></div><div class="feelDays">' + i.map(
      (p) => '<div class="weekChip feelDay' + (p.future ? " future" : "") + (p.key === ae(t) ? " today" : "") + '"><div class="weekChipTop"><strong>' + B(new Intl.DateTimeFormat(void 0, { weekday: "short" }).format(p.d)) + "</strong>" + (p.count >= 2 ? '<span class="weekTick">✓</span>' : '<span class="feelDots">' + "●".repeat(p.count) + "</span>") + "</div>" + s("Mood", p.mood) + s("Energy", p.energy) + "</div>"
    ).join("") + "</div>";
  }
  const rn = a("upcomingCountSetting");
  rn.addEventListener("change", () => {
    $e = rn.value === "all" ? "all" : Number(rn.value), ea();
  });
  const Nt = a("tempoRevealBtn"), zn = a("tempoExperiment"), xe = a("tempoQuad"), tt = a("tempoDot"), yo = a("tempoEstimate"), wo = a("tempoReadout");
  let nt = { x: 0.5, y: 0.5 }, It = !1, sn = { total: 20, work: 45, rest: 15 };
  function _n(e, t, n, i) {
    const o = Math.max(t, Math.min(n, e));
    return Math.round((o - t) / i) * i + t;
  }
  function ko(e, t) {
    const n = (e - 0.5) * 2, i = (t - 0.5) * 2, o = _n(
      sn.total + n * 5 + i * 8,
      Number(D.min),
      Number(D.max),
      Number(D.step)
    ), r = _n(
      sn.work + n * 10 + i * 8,
      Number(A.min),
      Number(A.max),
      Number(A.step)
    ), l = _n(
      sn.rest + n * 6 + i * 6,
      Number(N.min),
      Number(N.max),
      Number(N.step)
    );
    return D.value = o, A.value = r, N.value = l, ki.textContent = r + " sec", Si.textContent = l + " sec", $t(), { total: o, work: r, rest: l };
  }
  function On(e, t) {
    const n = e < 0.34 ? "Low" : e > 0.66 ? "Hard" : "Medium", i = t < 0.34 ? "Fast" : t > 0.66 ? "Slow" : "Balanced", o = ko(e, t);
    wo.textContent = n + " + " + i, yo.textContent = o.total + " min", xe.setAttribute("aria-valuetext", n + " and " + i + ", estimated " + o.total + " minutes");
  }
  function Gn(e) {
    const t = xe.getBoundingClientRect(), n = Math.max(0, Math.min(1, (e.clientX - t.left) / t.width)), i = Math.max(0, Math.min(1, (e.clientY - t.top) / t.height));
    nt = { x: n, y: i }, tt.style.left = n * 100 + "%", tt.style.top = i * 100 + "%", On(n, i);
  }
  Nt.addEventListener("click", () => {
    const e = zn.hidden;
    zn.hidden = !e, Nt.setAttribute("aria-expanded", e ? "true" : "false"), Nt.textContent = e ? "Now close this" : "Don’t try this!", e && (sn = {
      total: Number(D.value),
      work: Number(A.value),
      rest: Number(N.value)
    }, nt = { x: 0.5, y: 0.5 }, tt.style.left = "50%", tt.style.top = "50%", On(nt.x, nt.y));
  }), x.querySelectorAll("[data-feedback-rating]").forEach((e) => e.addEventListener("click", () => {
    Number(e.dataset.feedbackRating), x.querySelectorAll("[data-feedback-rating]").forEach((t) => t.classList.toggle("selected", t === e));
  }));
  const ln = a("testingFeedbackForm"), Oi = a("testingFeedbackThanks"), So = a("testingFeedbackAgain");
  ln.addEventListener("submit", (e) => {
    e.preventDefault(), ln.hidden = !0, Oi.hidden = !1, V("Feedback captured for prototype");
  }), So.addEventListener("click", (e) => {
    e.preventDefault(), ln.reset(), x.querySelectorAll("[data-feedback-rating]").forEach((t) => t.classList.remove("selected")), Oi.hidden = !0, ln.hidden = !1;
  }), xe.addEventListener("pointerdown", (e) => {
    var t;
    It = !0, Gn(e);
    try {
      (t = xe.setPointerCapture) == null || t.call(xe, e.pointerId);
    } catch {
    }
  }), xe.addEventListener("pointermove", (e) => {
    It && Gn(e);
  }), xe.addEventListener("pointerup", (e) => {
    It && (It = !1, Gn(e), O());
  }), xe.addEventListener("pointercancel", () => It = !1), xe.addEventListener("keydown", (e) => {
    let { x: t, y: n } = nt, i = !0;
    e.key === "ArrowLeft" ? t -= 0.05 : e.key === "ArrowRight" ? t += 0.05 : e.key === "ArrowUp" ? n -= 0.05 : e.key === "ArrowDown" ? n += 0.05 : i = !1, i && (e.preventDefault(), t = Math.max(0, Math.min(1, t)), n = Math.max(0, Math.min(1, n)), nt = { x: t, y: n }, tt.style.left = t * 100 + "%", tt.style.top = n * 100 + "%", On(t, n), O());
  });
  const oe = a("workoutModal");
  let Pt = null;
  function it(e) {
    return e.map((t) => ({ ...t }));
  }
  function Co() {
    const e = E[F];
    return {
      key: F,
      profile: e ? JSON.parse(JSON.stringify(e)) : null,
      warmup: it(ce),
      strength: it(ne),
      cooldown: it(pe),
      total: Number(D.value),
      work: Number(A.value),
      rest: Number(N.value),
      rounds: Number(ze.value) || 1
    };
  }
  function Gi(e = !1) {
    _ = !!e, ie = null, ue = null, Pt = Co(), a("moveEditorTitle").textContent = _ ? "Create new move" : "Edit move", a("moveEditorSubtitle").textContent = "Build the sequence first, then set timing, then finish the move.", a("moveEditorSubtitle").hidden = !_, a("warmupRow").hidden = _, a("deleteMoveOpen").hidden = _;
    const t = a("createMoveOptions");
    t.hidden = !_;
    {
      const n = E[F];
      a("includeWarmupPreset").checked = !!(n != null && n.includeWarmup), a("includeCooldownPreset").checked = !!(n != null && n.includeCooldown);
    }
    if (Wi(), _) {
      a("useGlobalTiming").checked = !0, a("useGlobalRestTiming").checked = !0;
      const n = E[F];
      Mn((n == null ? void 0 : n.preset) || "movement", !1);
    }
    a("movementCreator").hidden = !0, po("movement"), Nn(), Ft(), zn.hidden = !0, Nt.setAttribute("aria-expanded", "false"), Nt.textContent = "Don’t try this!", oe.classList.toggle("createMode", _), oe.querySelector(".modal").classList.toggle("createMode", _), oe.classList.add("open"), oe.setAttribute("aria-hidden", "false"), _ && _a();
  }
  function To() {
    const e = E[F];
    return e != null && e.customSequence ? !!e.includeWarmup : !(e != null && e.warmupOff);
  }
  function Wi() {
    const e = To(), t = a("warmupSwitch");
    t.classList.toggle("on", e), t.setAttribute("aria-checked", String(e));
  }
  a("warmupSwitch").addEventListener("click", () => {
    const e = E[F];
    e && (e.customSequence ? (a("includeWarmupPreset").checked = !e.includeWarmup, Fn()) : (e.warmupOff = !e.warmupOff, O()), Wi());
  });
  function dn() {
    ue = null, ie = null, oe.classList.contains("createMode") && Oa(), oe.classList.remove("createMode"), oe.querySelector(".modal").classList.remove("createMode"), oe.classList.remove("open"), oe.setAttribute("aria-hidden", "true");
  }
  function Vi() {
    if (!Pt) return;
    const e = Pt;
    e.profile && (E[e.key] = JSON.parse(JSON.stringify(e.profile))), F = e.key, ce = it(e.warmup), ne = it(e.strength), pe = it(e.cooldown), D.value = e.total, A.value = e.work, N.value = e.rest, ze.value = e.rounds || 1;
    const t = E[F];
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
      R.value = t.name;
    }
    O();
  }
  a("cancelWorkoutEdit").addEventListener("click", () => {
    if (_) {
      const e = F;
      delete E[e], _ = !1, _e = null, fe(M.order.find((t) => E[t]) || Object.keys(E)[0]);
    } else
      Vi();
    dn();
  }), a("saveWorkoutEdit").addEventListener("click", () => {
    const e = E[F], t = R.value.trim() || "New move";
    if (e && (e.name = t), Xt(), ie = null, O(), _ && e)
      Ln(F, e), x.querySelectorAll(".workoutPanel[data-workout]").forEach((n) => n.classList.toggle("active", n.dataset.workout === F)), _ = !1, _e = null, M.order.includes(F) || M.order.push(F), V("Move created");
    else {
      const n = x.querySelector(".workoutPanel.active");
      if (n) {
        const i = n.querySelector(".workoutName");
        i && (i.textContent = t);
        const o = n.querySelector(".panelCollapsedText");
        o && (o.textContent = t);
      }
      V("Move saved");
    }
    Pt = null, dn(), he();
  }), oe.addEventListener("click", (e) => {
    if (e.target === oe) {
      if (_) {
        const t = F;
        delete E[t], _ = !1, _e = null, fe(M.order.find((n) => E[n]) || Object.keys(E)[0]);
      } else
        Vi();
      dn();
    }
  }), An(a("addMovementBtn"), "movement"), An(a("addRestBtn"), "rest"), An(a("addVideoBtn"), "video"), a("closeMovementCreator").addEventListener("click", () => {
    a("movementCreator").hidden = !0;
  }), a("useGlobalTiming").addEventListener("change", Ft), a("useGlobalRestTiming").addEventListener("change", Ft), x.querySelectorAll(".createPresetBtn").forEach((e) => e.addEventListener("click", () => {
    Mn(e.dataset.movePreset, !0), O();
  })), a("includeWarmupPreset").addEventListener("change", Fn), a("includeCooldownPreset").addEventListener("change", Fn), a("includeWarmupPreset").addEventListener("change", Re), a("includeCooldownPreset").addEventListener("change", Re), R.addEventListener("input", Re), a("confirmAddMovement").addEventListener("click", In), a("confirmAddRest").addEventListener("click", In), a("addMovementInput").addEventListener("keydown", (e) => {
    e.key === "Enter" && In();
  });
  const Dt = a("countdown"), Wn = a("countNum"), Ce = a("countdownPixelCanvas");
  let Ht = null, Vn = "appear";
  class Lo {
    constructor(t, n, i, o, r, l, s) {
      this.width = t.width, this.height = t.height, this.ctx = n, this.x = i, this.y = o, this.color = r, this.speed = (Math.random() * 0.8 + 0.1) * l, this.size = 0, this.sizeStep = Math.random() * 0.4, this.minSize = 0.5, this.maxSizeInteger = 2, this.maxSize = Math.random() * (this.maxSizeInteger - this.minSize) + this.minSize, this.delay = s, this.counter = 0, this.counterStep = Math.random() * 4 + (this.width + this.height) * 0.01, this.isIdle = !1, this.isReverse = !1, this.isShimmer = !1;
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
  let jn = [], ji = 1, Yi = 1;
  function We() {
    const e = parseFloat(getComputedStyle(a("app")).zoom);
    return Number.isFinite(e) && e > 0 ? e : 1;
  }
  function Eo() {
    var p;
    if (!Ce) return;
    const e = We(), t = Math.max(1, window.innerWidth / e), n = Math.max(1, window.innerHeight / e);
    ji = t, Yi = n;
    const i = Math.min(window.devicePixelRatio || 1, 2);
    Ce.width = Math.floor(t * i), Ce.height = Math.floor(n * i), Ce.style.width = t + "px", Ce.style.height = n + "px";
    const o = Ce.getContext("2d");
    o.setTransform(i, 0, 0, i, 0, 0);
    const r = ["#f2fbff", "#d4effc", "#a9e0fa", "#6cc8f6"], l = 12, s = (p = window.matchMedia) == null ? void 0 : p.call(window, "(prefers-reduced-motion: reduce)").matches, g = s ? 0 : 0.055;
    jn = [];
    for (let u = 0; u < t; u += l)
      for (let d = 0; d < n; d += l) {
        const m = u - t / 2, C = d - n / 2, L = Math.sqrt(m * m + C * C), h = s ? 0 : Math.random() * 75 + L * 0.05, f = new Lo({ width: t, height: n }, o, u, d, r[Math.floor(Math.random() * r.length)], g, h);
        f.maxSizeInteger = 4, f.maxSize = Math.random() * 3.2 + 0.8, f.sizeStep = 0.35 + Math.random() * 0.45, jn.push(f);
      }
  }
  function Ui(e) {
    cancelAnimationFrame(Ht), Vn = e;
    const t = Ce == null ? void 0 : Ce.getContext("2d");
    if (!t) return;
    function n() {
      t.clearRect(0, 0, ji, Yi);
      let i = !0;
      jn.forEach((o) => {
        o[Vn](), o.isIdle || (i = !1);
      }), Vn === "disappear" && i || (Ht = requestAnimationFrame(n));
    }
    Ht = requestAnimationFrame(n);
  }
  function cn() {
    cancelAnimationFrame(Ht), Eo(), Ui("appear"), setTimeout(() => Ui("disappear"), 560);
  }
  window.addEventListener("resize", () => {
    Dt.classList.contains("active") && cn();
  });
  const qt = a("pixelTrailCanvas"), at = qt.getContext("2d");
  let Te = !0, ot = 0.7, rt = 600, zt = [], st = null, Ie = { x: 0, y: 0, ready: !1 };
  function Ki() {
    const e = q.getBoundingClientRect(), t = We(), n = Math.min(window.devicePixelRatio || 1, 2), i = Math.max(1, e.width / t), o = Math.max(1, e.height / t);
    qt.width = Math.max(1, Math.floor(i * n)), qt.height = Math.max(1, Math.floor(o * n)), qt.style.width = i + "px", qt.style.height = o + "px", at.setTransform(n, 0, 0, n, 0, 0);
  }
  function Mo(e, t) {
    if (!Te) return;
    const n = performance.now();
    Ie.ready || (Ie = { x: e, y: t, ready: !0 });
    const i = 7;
    for (let o = 1; o <= i; o++) {
      const r = o / i;
      zt.push({
        x: Ie.x + (e - Ie.x) * r,
        y: Ie.y + (t - Ie.y) * r,
        born: n - (i - o) * 10
      });
    }
    Ie = { x: e, y: t, ready: !0 };
  }
  function pn(e) {
    if (st = null, !G) return;
    if (!Je.workout.classList.contains("active")) {
      st = requestAnimationFrame(pn);
      return;
    }
    const t = q.getBoundingClientRect(), n = We();
    at.clearRect(0, 0, t.width / n, t.height / n), Te && (zt = zt.filter((o) => e - o.born < rt), at.fillStyle = a("app").classList.contains("light") ? "#03A9F4" : "#f4f4f4", zt.forEach((o) => {
      const r = (e - o.born) / rt, l = (1 - r) * ot, s = Math.round(o.x / 14) * 14, g = Math.round(o.y / 14) * 14;
      at.globalAlpha = Math.max(0, l);
      const p = 2 + 5 * (1 - r) * ot;
      at.fillRect(s - p / 2, g - p / 2, p, p);
    }), at.globalAlpha = 1), st = requestAnimationFrame(pn);
  }
  q.addEventListener("pointermove", (e) => {
    const t = q.getBoundingClientRect(), n = We();
    Mo((e.clientX - t.left) / n, (e.clientY - t.top) / n);
  }), q.addEventListener("pointerleave", () => Ie.ready = !1), new ResizeObserver(Ki).observe(q), Ki(), st = requestAnimationFrame(pn);
  const Pe = a("movementRippleCanvas"), lt = Pe.getContext("2d");
  let Ve = !0, dt = null, Fo = performance.now();
  function Zi() {
    const e = Pe.parentElement.getBoundingClientRect(), t = We(), n = Math.max(1, e.width / t), i = Math.max(1, e.height / t), o = Math.min(window.devicePixelRatio || 1, 2);
    Pe.width = Math.max(1, Math.floor(n * o)), Pe.height = Math.max(1, Math.floor(i * o)), Pe.style.width = n + "px", Pe.style.height = i + "px", lt.setTransform(o, 0, 0, o, 0, 0);
  }
  function Ji() {
    var e;
    return Z || ((e = v[k]) == null ? void 0 : e.kind) === "rest";
  }
  function Ro() {
    const e = v[k];
    return Ji() ? 2200 : e ? e.kind === "warmup" || e.kind === "cooldown" ? 2400 : 1350 : 1600;
  }
  function un(e) {
    if (dt = null, !G) return;
    if (!Je.workout.classList.contains("active")) {
      dt = requestAnimationFrame(un);
      return;
    }
    const t = Pe.parentElement.getBoundingClientRect(), n = We(), i = Math.max(1, t.width / n), o = Math.max(1, t.height / n);
    if (lt.clearRect(0, 0, i, o), Ve) {
      const r = Ro(), l = (e - Fo) % r / r, s = 15, g = Math.max(8, Math.round(s * o / Math.max(1, i))), p = i / (s + 1), u = o / (g + 1), d = i * 0.5, m = o * 0.52, C = Math.hypot(d, m), h = a("app").classList.contains("light") ? "34,34,34" : "244,244,244";
      for (let f = 1; f <= g; f++)
        for (let b = 1; b <= s; b++) {
          const w = b * p, z = f * u, re = Math.hypot(w - d, z - m) / C, $ = Ji(), Y = $ ? Math.exp(-Math.pow((re - (l * 0.82 + 0.08) % 1 * 1.18) * 5.5, 2)) : 0, ve = Math.exp(-Math.pow((re - l * 1.25) * 7, 2)), Q = $ ? Y : ve, U = $ ? 0.5 + 0.5 * Math.sin(l * Math.PI * 2 - re * 3) ** 2 : 0.35 + 0.65 * Math.sin(l * Math.PI * 2 - re * 5) ** 2, Vt = $ ? 1.4 + Q * 4.2 * U : 1.2 + Q * 5 * U;
          lt.beginPath(), lt.arc(w, z, Vt, 0, Math.PI * 2), lt.fillStyle = `rgba(${h},${$ ? 0.08 + Q * 0.48 : 0.05 + Q * 0.55})`, lt.fill();
        }
    }
    dt = requestAnimationFrame(un);
  }
  new ResizeObserver(Zi).observe(Pe.parentElement), Zi(), dt = requestAnimationFrame(un);
  const _t = a("exerciseTitle"), Le = a("exerciseMeta"), Yn = a("stepLabel"), Un = a("digits"), $i = a("fill"), ct = a("progress"), Kn = a("pause"), Bo = a("nextName"), Ao = a("nextMeta"), No = a("nextIcon"), mn = a("skipNextSession");
  let se = null;
  function le(e) {
    for (let t = Math.max(0, e); t < v.length; t++)
      if (!v[t].sessionHidden) return t;
    return -1;
  }
  function Io() {
    const e = v[k];
    if (!e) return { name: "Complete", meta: "Move finished", icon: "✓" };
    if (Z) {
      const i = le(k + 1), o = i >= 0 ? v[i] : null;
      return o ? { name: o.name, meta: Jn(o), icon: Zn(o) } : { name: "Complete", meta: "Move finished", icon: "✓" };
    }
    if (e.rest > 0) return { name: "Rest", meta: e.rest + " sec · " + (e.roundBreakAfter ? "round " + (e.round + 1) + " next" : "recovery"), icon: "Ⅱ" };
    const t = le(k + 1), n = t >= 0 ? v[t] : null;
    return n ? { name: n.name, meta: Jn(n), icon: Zn(n) } : { name: "Complete", meta: "Move finished", icon: "✓" };
  }
  function Po() {
    if (!v[k]) return v.length;
    const t = le(k + 1);
    return t < 0 ? v.length : t + 1;
  }
  function Zn(e) {
    return e.kind === "video" ? "▶" : e.kind === "cooldown" ? "↘" : e.kind === "warmup" ? "↗" : "●";
  }
  function Jn(e) {
    return e.kind === "video" ? "YouTube · " + Lt(e.duration) : e.group + " · " + e.duration + " sec";
  }
  function gn() {
    return v.length && v[v.length - 1].round || 1;
  }
  function Qi(e) {
    const t = v[e];
    if (!t) return "";
    const n = gn();
    if (n <= 1) return "Step " + (e + 1) + " of " + v.length;
    if (t.roundBreak) return "Round " + t.round + " of " + n + " · Rest";
    const i = v.filter((o) => o.round === t.round && !o.roundBreak).length;
    return "Round " + t.round + " of " + n + " · Step " + (t.roundIndex + 1) + " of " + i;
  }
  function Xi() {
    return ct.querySelector('[data-step="' + k + '"]');
  }
  function Do() {
    v[k] && Number(ct.dataset.round) !== (v[k].round || 1) && Xn(), [...ct.children].forEach((e) => {
      const t = Number(e.dataset.step);
      e.classList.toggle("done", t < k), e.classList.toggle("active", t === k), e.classList.toggle("rewindable", t <= k), e.disabled = t > k, t === k && e.style.setProperty("--segment-progress", "0%");
    }), v[k] && (Yn.textContent = Qi(k), Ye());
  }
  function Ho(e) {
    const t = v.indexOf(e);
    t < 0 || t <= k || (e.sessionHidden = !e.sessionHidden, je(), V((e.sessionHidden ? "Hidden " : "Included ") + e.name + " for this session"));
  }
  function ea() {
    const e = a("upcomingList");
    if (!e) return;
    e.innerHTML = "";
    const t = Po(), n = v.slice(t);
    ($e === "all" ? n : n.slice(0, Math.max(1, Number($e) || 1))).forEach((o) => {
      const r = document.createElement("section");
      r.className = "upcomingCard" + (o.sessionHidden ? " sessionHidden" : "") + (oi(o) ? " noMeta" : ""), r.innerHTML = '<div class="upcomingInfo"><div class="upcomingIcon" aria-hidden="true">' + Zn(o) + '</div><div><div class="upcomingName">' + B(o.name) + '</div><div class="upcomingMeta">' + B(Jn(o)) + (gn() > 1 ? " · round " + o.round : "") + '</div></div></div><button class="skipSessionBtn" type="button">' + (o.sessionHidden ? "Include this session" : "Skip this session") + "</button>", r.querySelector(".skipSessionBtn").addEventListener("click", () => Ho(o)), e.appendChild(r);
    });
  }
  function je() {
    var t;
    const e = Io();
    Bo.textContent = e.name, Ao.textContent = e.meta, No.textContent = e.icon;
    {
      const n = Z ? v[le(k + 1)] : ((t = v[k]) == null ? void 0 : t.rest) > 0 ? { kind: "rest" } : v[le(k + 1)];
      x.querySelector(".nextCard").classList.toggle("noMeta", !!(n && oi(n)));
    }
    if (se = null, Z) {
      const n = le(k + 1);
      n >= 0 && (se = v[n]);
    } else {
      const n = v[k];
      if (n && n.rest > 0)
        se = null;
      else {
        const i = le(k + 1);
        i >= 0 && (se = v[i]);
      }
    }
    mn && (mn.hidden = !se, mn.textContent = se != null && se.sessionHidden ? "Include this session" : "Skip this session"), ea();
  }
  mn.addEventListener("click", () => {
    se && (se.sessionHidden = !se.sessionHidden, V((se.sessionHidden ? "Hidden " : "Included ") + se.name + " for this session"), je());
  });
  let ye = null, $n = null;
  function Ot(e, t = {}) {
    const n = E[F];
    y.fire(e, { move: (n == null ? void 0 : n.name) || "", move_id: F, ...t });
  }
  function qo() {
    const e = E[F];
    ye = { key: F, name: (e == null ? void 0 : e.name) || "Move", startedAt: Date.now(), active: 0 }, clearInterval($n), $n = setInterval(() => {
      ye && !ge && ye.active++;
    }, 1e3), Ot("started", { steps: v.length });
  }
  function ta(e) {
    if (clearInterval($n), !ye) return;
    const t = ye;
    ye = null, Ot(e ? "completed" : "ended", { seconds: t.active }), !(t.active < 30) && (M.history.unshift({ id: "h-" + t.startedAt, move_id: t.key, name: t.name, start: new Date(t.startedAt).toISOString(), seconds: t.active, completed: e }), M.history = M.history.slice(0, 1e3), he(), Ke(), Fe());
  }
  function zo() {
    Cn("workout"), _o();
    const e = le(0);
    e >= 0 && v[e].kind === "video" && ra(v[e]);
  }
  function Qn() {
    hn(), ta(!1), clearInterval(j), clearInterval(Zt), Z = !1, Ee(!1), a("app").classList.remove("resting"), Dt.classList.remove("active"), Cn("home");
  }
  function _o() {
    Dt.classList.add("active");
    let e = 5;
    Wn.textContent = e, requestAnimationFrame(cn), clearInterval(Zt), Zt = setInterval(() => {
      e--, e > 0 ? (Wn.textContent = e, cn()) : (clearInterval(Zt), Wn.textContent = "GO", cn(), setTimeout(() => {
        Dt.classList.remove("active"), cancelAnimationFrame(Ht), Go();
      }, 650));
    }, 1e3);
  }
  function Xn() {
    var t;
    ct.innerHTML = "";
    const e = ((t = v[Math.max(0, k)] || v[0]) == null ? void 0 : t.round) || 1;
    ct.dataset.round = e, v.forEach((n, i) => {
      if ((n.round || 1) !== e) return;
      const o = document.createElement("button");
      o.dataset.step = i, o.type = "button", o.className = "progressSegment", o.setAttribute("aria-label", "Go to " + n.name), o.addEventListener("click", () => {
        i <= k && Oo(i);
      }), ct.appendChild(o);
    });
  }
  function Ee(e) {
    e = !!e;
    const t = ge !== e;
    if (ge = e, Kn.textContent = e ? "Resume" : "Pause", a("app").classList.toggle("paused", e), ee && H)
      try {
        e ? H.pauseVideo() : H.playVideo();
      } catch {
      }
    t && ye && Ot(e ? "paused" : "resumed");
  }
  function Oo(e) {
    e < 0 || e >= v.length || e > k || (clearInterval(j), Z = !1, a("app").classList.remove("resting"), k = e, Ee(!1), ht(), j = setInterval(De, 1e3));
  }
  function Go() {
    if (k = le(0), Ee(!1), Xn(), k < 0) {
      _t.textContent = "No activities", Le.textContent = "Open Edit and enable or add a movement", Le.hidden = !1;
      return;
    }
    qo(), ht(), clearInterval(j), j = setInterval(De, 1e3);
  }
  const na = a("videoStage"), pt = a("videoSound"), Wo = 0, ut = 1, Vo = 2;
  let ia = 0, mt = null, gt = null, H = null, vt = null, vn = 0, ei = !1, ee = null, ti = null;
  function aa() {
    var e;
    return (e = window.YT) != null && e.Player ? Promise.resolve(window.YT) : mt || (mt = new Promise((t, n) => {
      const i = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        try {
          i == null || i();
        } catch {
        }
      };
      const o = setInterval(() => {
        var l;
        (l = window.YT) != null && l.Player && (clearInterval(o), clearTimeout(r), t(window.YT));
      }, 100), r = setTimeout(() => {
        clearInterval(o), mt = null, n(new Error("YouTube did not load"));
      }, 15e3);
      if (!document.querySelector('script[src*="youtube.com/iframe_api"]')) {
        const l = document.createElement("script");
        l.src = "https://www.youtube.com/iframe_api", l.async = !0, l.onerror = () => {
          clearInterval(o), clearTimeout(r), mt = null, n(new Error("YouTube did not load"));
        }, document.head.appendChild(l);
      }
    }), mt);
  }
  function oa() {
    return gt || (gt = aa().then((e) => new Promise((t) => {
      const n = document.createElement("div");
      a("videoFrame").appendChild(n), H = new e.Player(n, {
        width: "100%",
        height: "100%",
        playerVars: { playsinline: 1, rel: 0, iv_load_policy: 3, modestbranding: 1 },
        events: { onReady: () => t(H), onStateChange: (i) => Yo(i.data), onError: (i) => Uo(i.data) }
      });
    })), gt.catch(() => {
      gt = null;
    }), gt);
  }
  function ra(e) {
    !(e != null && e.videoId) || e.videoError || oa().then((t) => {
      ee || vt === e.videoId || (vt = e.videoId, vn = Number(e.start) || 0, ei = !1, t.mute(), t.loadVideoById({ videoId: e.videoId, startSeconds: vn }));
    }).catch(() => {
    });
  }
  function jo() {
    const e = le(k + 1);
    e >= 0 && v[e].kind === "video" && ra(v[e]);
  }
  function Yo(e) {
    if (!ee) {
      e === ut && !ei && (ei = !0, H.pauseVideo(), H.seekTo(vn, !0));
      return;
    }
    na.classList.toggle("playing", e === ut), v[k] === ee && performance.now() > ia && (e === ut && ge ? Ee(!1) : e === Vo && !ge && Ee(!0)), e === ut && da(ee.videoId, H.getDuration()) && he(), e === Wo && Gt();
  }
  function Uo(e) {
    const t = ee;
    if (!t) {
      vt = null;
      return;
    }
    e === 101 || e === 150 ? (Jo(t.videoId), V("That video can’t play outside YouTube, so it was skipped")) : V("The video couldn’t play, so it was skipped"), Gt();
  }
  function Ko(e) {
    if (a("app").classList.add("videoStep"), pt.hidden = !0, ee = e, clearTimeout(ti), !e.videoId) {
      V("This video step has no link yet, so it was skipped"), setTimeout(() => Gt(), 0);
      return;
    }
    oa().then((t) => {
      if (ee !== e) return;
      ia = performance.now() + 1500;
      const n = Number(e.start) || 0;
      vt !== e.videoId ? (vt = e.videoId, vn = n, t.loadVideoById({ videoId: e.videoId, startSeconds: n })) : (t.seekTo(n, !0), t.playVideo()), t.unMute(), ge && t.pauseVideo(), ti = setTimeout(() => {
        ee !== e || ge || (t.getPlayerState() !== ut ? (t.mute(), t.playVideo(), pt.hidden = !1) : t.isMuted() && (pt.hidden = !1));
      }, 1600);
    }).catch(() => {
      ee === e && (V("YouTube didn’t load, so the video was skipped"), Gt());
    });
  }
  function sa() {
    if (!a("app").classList.contains("videoStep")) return;
    const e = x.querySelector(".workGrid"), t = x.querySelector(".sessionControlRow"), n = e.getBoundingClientRect().top, i = (t == null ? void 0 : t.offsetHeight) || 42, o = window.innerHeight - n - 16 - i - 84;
    e.style.setProperty("--theater-h", Math.max(240, Math.round(o)) + "px");
  }
  window.addEventListener("resize", sa);
  function hn() {
    clearTimeout(ti);
    const e = ee;
    if (ee = null, a("app").classList.remove("videoStep"), na.classList.remove("playing"), pt.hidden = !0, e && H) {
      try {
        H.pauseVideo();
      } catch {
      }
      vt = null;
    }
  }
  function Gt() {
    const e = ee;
    !e || v[k] !== e || (hn(), clearInterval(j), ft(), j = setInterval(De, 1e3));
  }
  pt.addEventListener("click", () => {
    H && (H.unMute(), H.playVideo()), pt.hidden = !0;
  });
  function Zo(e) {
    var i;
    const t = Number(e.start) || 0;
    if (e.useVideoLength === !1) return t + (Number(e.duration) || 300);
    const n = H && ee === e && Number((i = H.getDuration) == null ? void 0 : i.call(H)) || 0;
    return Number(e.end) || n || Number(e.videoDuration) || t + (Number(e.duration) || 300);
  }
  function la(e, t) {
    const n = E[F];
    [ce, ne, pe, n == null ? void 0 : n.warmup, n == null ? void 0 : n.strength, n == null ? void 0 : n.cooldown, n == null ? void 0 : n.sequence].forEach((i) => (Array.isArray(i) ? i : []).forEach((o) => {
      o && o.kind === "video" && o.videoId === e && t(o);
    }));
  }
  function da(e, t) {
    t = Math.round(Number(t) || 0);
    let n = !1;
    return e && t > 0 && la(e, (i) => {
      i.videoDuration !== t && (i.videoDuration = t, n = !0);
    }), n;
  }
  function Jo(e) {
    la(e, (t) => {
      t.videoError = "embed";
    }), he();
  }
  function $o(e) {
    const t = e.videoId;
    if (!t) return;
    const n = () => {
      oe.classList.contains("open") ? ie || O() : (O(), he());
    };
    fetch("https://www.youtube.com/oembed?format=json&url=" + encodeURIComponent("https://www.youtube.com/watch?v=" + t)).then((i) => i.ok ? i.json() : Promise.reject(i.status)).then((i) => {
      e.videoId === t && (e.videoTitle = i.title || "", e.autoName && i.title && (e.name = i.title), n());
    }).catch((i) => {
      e.videoId === t && i === 401 && (e.videoError = "embed", n());
    }), Qo(t).then((i) => {
      da(t, i) && n();
    }).catch((i) => {
      i === "embed" && e.videoId === t && (e.videoError = "embed", n());
    });
  }
  function Qo(e) {
    return aa().then((t) => new Promise((n, i) => {
      const o = document.createElement("div");
      o.className = "videoProbe", o.setAttribute("aria-hidden", "true");
      const r = document.createElement("div");
      o.appendChild(r), a("app").appendChild(o);
      let l = null, s = !1;
      const g = (d, m) => {
        s || (s = !0, clearTimeout(p), setTimeout(() => {
          try {
            l == null || l.destroy();
          } catch {
          }
          o.remove();
        }, 0), m ? i(m) : n(d));
      }, p = setTimeout(() => g(0), 2e4), u = () => {
        var m;
        const d = Number((m = l == null ? void 0 : l.getDuration) == null ? void 0 : m.call(l)) || 0;
        return d > 0 && g(d), d > 0;
      };
      l = new t.Player(r, {
        width: 320,
        height: 180,
        videoId: e,
        playerVars: { playsinline: 1, mute: 1, controls: 0 },
        events: {
          onReady: () => {
            u() || (l.mute(), l.playVideo());
          },
          onStateChange: () => u(),
          onError: (d) => g(0, d.data === 101 || d.data === 150 ? "embed" : "error")
        }
      });
    }));
  }
  function ht() {
    Z = !1;
    const e = v[k];
    a("app").classList.toggle("resting", e.kind === "rest"), e.kind === "video" ? Ko(e) : hn(), X = e.duration, Tt = e.duration, _t.textContent = e.name, Le.textContent = e.group, Le.hidden = !0, Yn.textContent = Qi(k), ye && Ot("step", { name: e.name, group: e.group, kind: e.kind, step: k + 1, of: v.length, round: e.round || 1, rounds: gn(), duration: e.duration }), je(), Do(), jo(), e.kind === "video" && setTimeout(sa, 0);
  }
  function Ye() {
    var o;
    const e = ((o = v[k]) == null ? void 0 : o.kind) === "video" && !Z, t = e && X >= 60;
    Un.textContent = t ? Lt(X) : X, Un.classList.toggle("long", t), e && (a("videoClock").textContent = Lt(X) + " left");
    const n = X / Tt * 100;
    $i.style.width = n + "%";
    const i = Xi();
    if (i && !Z) {
      const r = 100 - n;
      i.style.setProperty("--segment-progress", r + "%");
    }
  }
  function De() {
    var t, n;
    if (ge) return;
    const e = v[k];
    if ((e == null ? void 0 : e.kind) === "video" && !Z && ee === e) {
      const i = Number((t = H == null ? void 0 : H.getCurrentTime) == null ? void 0 : t.call(H)) || 0, o = Number(e.start) || 0, r = Zo(e);
      Tt = Math.max(1, r - o), (i > o || ((n = H == null ? void 0 : H.getPlayerState) == null ? void 0 : n.call(H)) === ut) && (X = Math.max(0, Math.ceil(r - i))), Ye(), i > o && i >= r - 0.25 && Gt();
      return;
    }
    X--, Ye(), X <= 0 && (e.rest > 0 ? ca(e.rest) : ft());
  }
  function ca(e) {
    var n;
    Z = !0, a("app").classList.add("resting");
    const t = Xi();
    t && t.style.setProperty("--segment-progress", "100%"), clearInterval(j), X = e, Tt = e, ye && Ot("rest", { duration: e }), _t.textContent = "Rest", Le.textContent = (n = v[k]) != null && n.roundBreakAfter ? "Round " + (v[k].round + 1) + " next" : "Recovery", je(), Ye(), j = setInterval(() => {
      ge || (X--, Ye(), X <= 0 && (clearInterval(j), ft(), j = setInterval(De, 1e3)));
    }, 1e3);
  }
  function ft() {
    Z = !1;
    const e = le(k + 1);
    if (e >= 0)
      k = e, ht();
    else {
      clearInterval(j), hn(), Ee(!1), a("app").classList.remove("resting"), _t.textContent = "Complete", Le.textContent = "Move finished", Le.hidden = !1, Un.textContent = "✓";
      {
        const t = gn();
        Yn.textContent = t > 1 ? t + " rounds done" : v.filter((n) => !n.roundBreak).length + " steps done";
      }
      ta(!0);
      {
        const t = ya(7).reduce((n, i) => n + i.minutes, 0);
        Le.textContent = "Move finished · " + t + " min in the last 7 days";
      }
      $i.style.width = "100%", je();
    }
  }
  a("skipExercise").addEventListener("click", () => {
    Xo(), Ee(!1);
  });
  function Xo() {
    clearInterval(j);
    const e = v[k];
    if (Z) {
      Z = !1, a("app").classList.remove("resting");
      const n = le(k + 1);
      n >= 0 ? (k = n, ht(), j = setInterval(De, 1e3)) : ft();
      return;
    }
    if (e && e.rest > 0) {
      ca(e.rest);
      return;
    }
    const t = le(k + 1);
    t >= 0 ? (k = t, ht(), j = setInterval(De, 1e3)) : ft();
  }
  a("restartSegment").addEventListener("click", () => {
    if (clearInterval(j), Ee(!1), Z) {
      const e = v[k];
      X = e.rest, Tt = e.rest, _t.textContent = "Rest", Le.textContent = "Recovery", a("app").classList.add("resting"), je(), Ye();
    } else
      ht();
    j = setInterval(Z ? () => {
      ge || (X--, Ye(), X <= 0 && (clearInterval(j), ft(), j = setInterval(De, 1e3)));
    } : De, 1e3);
  });
  function fn(e, t, n, i) {
    let o = 0, r = null, l = !1;
    function s() {
      r && cancelAnimationFrame(r), r = null, o = 0, l = !1, t.style.width = "0%", e.classList.remove("holding");
    }
    function g(d) {
      if (!l) return;
      o || (o = d);
      const m = Math.min(1, (d - o) / n);
      if (t.style.width = m * 100 + "%", m >= 1) {
        l = !1, r && cancelAnimationFrame(r), r = null, t.style.width = "100%", setTimeout(() => t.style.width = "0%", 90), i();
        return;
      }
      r = requestAnimationFrame(g);
    }
    function p(d) {
      var m;
      if (!(d && d.button !== void 0 && d.button !== 0)) {
        d == null || d.preventDefault(), s(), l = !0, e.classList.add("holding");
        try {
          (m = e.setPointerCapture) == null || m.call(e, d.pointerId);
        } catch {
        }
        r = requestAnimationFrame(g);
      }
    }
    function u() {
      l && s();
    }
    e.addEventListener("pointerdown", p), e.addEventListener("pointerup", u), e.addEventListener("pointercancel", u), e.addEventListener("lostpointercapture", u), e.addEventListener("keydown", (d) => {
      (d.key === " " || d.key === "Enter") && !d.repeat && p(d);
    }), e.addEventListener("keyup", (d) => {
      (d.key === " " || d.key === "Enter") && u();
    });
  }
  const er = a("endWorkout");
  fn(er, a("holdEndFill"), 1500, Qn);
  const bt = a("deleteMoveConfirm");
  a("deleteMoveOpen").addEventListener("click", () => {
    bt.classList.add("open"), bt.setAttribute("aria-hidden", "false");
  }), a("deleteMoveCancel").addEventListener("click", () => {
    bt.classList.remove("open"), bt.setAttribute("aria-hidden", "true");
  });
  function tr() {
    const e = F, t = x.querySelector('.workoutPanel[data-workout="' + e + '"]');
    t && t.remove(), delete E[e], M.order = M.order.filter((i) => i !== e);
    let n = x.querySelector(".workoutPanel[data-workout]");
    if (!n) {
      const i = "custom-" + Date.now();
      E[i] = { name: "New move", source: "Custom routine", total: 20, work: 45, rest: 15, customSequence: !0, preset: "movement", sequence: [], strength: [] }, M.order.push(i), n = Ln(i, E[i]);
    }
    bt.classList.remove("open"), bt.setAttribute("aria-hidden", "true"), Pt = null, dn(), fe(n.dataset.workout), he(), V("Move deleted");
  }
  fn(a("deleteMoveYes"), a("deleteMoveFill"), 1500, tr);
  const ni = x.querySelector(".rubberTabs"), xt = a("rubberIndicator");
  function Wt(e, t = !0) {
    if (!e || !ni || !xt) return;
    const n = ni.getBoundingClientRect(), i = e.getBoundingClientRect();
    xt.style.transition = t ? "left .34s cubic-bezier(.2,1.35,.4,1),width .34s cubic-bezier(.2,1.35,.4,1),transform .18s ease" : "none";
    const o = We();
    xt.style.left = (i.left - n.left) / o + ni.scrollLeft + "px", xt.style.width = i.width / o + "px", t && (xt.style.transform = "scaleX(1.08)", setTimeout(() => xt.style.transform = "scaleX(1)", 180));
  }
  x.querySelectorAll(".tab").forEach((e) => e.addEventListener("click", () => {
    e.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "smooth" }), x.querySelectorAll(".tab").forEach((t) => t.classList.remove("active")), x.querySelectorAll(".settingsPane").forEach((t) => t.classList.remove("active")), e.classList.add("active"), a(e.dataset.pane).classList.add("active"), Wt(e, !0);
  })), requestAnimationFrame(() => Wt(x.querySelector(".tab.active"), !1)), window.addEventListener("resize", () => Wt(x.querySelector(".tab.active"), !1));
  const ii = a("pixelTrailToggle"), ai = a("rippleToggle"), yt = a("trailStrength"), wt = a("trailLife");
  function me(e, t) {
    I()[e] = t, he();
  }
  const pa = ["Warm-up", "Movement", "Cooldown", "Rest", "Video"];
  function ua(e) {
    return e.kind === "rest" ? "rest" : e.kind === "video" ? "video" : "g:" + String(e.group || "").trim().toLowerCase();
  }
  function oi(e) {
    var t;
    return !!((t = I().hideMeta) != null && t[ua(e)]);
  }
  function nr() {
    const e = /* @__PURE__ */ new Map(), t = (n, i, o) => {
      if (!n) return;
      Array.isArray(n) && (n = { name: n[1], group: n[2], kind: "work" });
      const r = ua(n);
      let l = e.get(r);
      l || (l = { key: r, label: r === "rest" ? "Rest" : r === "video" ? "Video" : String(n.group || "").trim() || "No type", kinds: /* @__PURE__ */ new Set(), moves: /* @__PURE__ */ new Set(), count: 0 }, e.set(r, l)), l.kinds.add(r === "rest" ? "Rest" : r === "video" ? "Video" : i), l.moves.add(o), l.count++;
    };
    return Object.values(E).forEach((n) => {
      const i = n.name || "Move";
      (n.warmup || (n.customSequence ? [] : Ut)).forEach((o) => t(o, "Warm-up", i)), (n.customSequence ? n.sequence || [] : n.strength || []).forEach((o) => t(o, o.presetRole === "warmup" ? "Warm-up" : o.presetRole === "cooldown" ? "Cooldown" : "Movement", i)), (n.cooldown || (n.customSequence ? [] : Kt)).forEach((o) => t(o, "Cooldown", i));
    }), [["rest", "Rest"], ["video", "Video"]].forEach(([n, i]) => {
      e.has(n) || e.set(n, { key: n, label: i, kinds: /* @__PURE__ */ new Set([i]), moves: /* @__PURE__ */ new Set(), count: 0 });
    }), [...e.values()].map((n) => ({ ...n, kind: n.kinds.has("Movement") ? "Movement" : [...n.kinds][0], moves: [...n.moves] })).sort((n, i) => pa.indexOf(n.kind) - pa.indexOf(i.kind) || n.label.localeCompare(i.label));
  }
  let ri = "all";
  function si() {
    const e = a("metaSearch").value.trim().toLowerCase();
    return nr().filter((t) => (ri === "all" || t.kind === ri) && (!e || t.label.toLowerCase().includes(e) || t.moves.some((n) => n.toLowerCase().includes(e))));
  }
  function bn() {
    const e = a("metaTableBody");
    if (!e) return;
    const t = I().hideMeta || {}, n = si();
    e.innerHTML = n.length ? "" : '<tr class="metaEmpty"><td colspan="4">No types match</td></tr>', n.forEach((o) => {
      const r = !t[o.key], l = o.count ? (o.moves.length > 2 ? o.moves.slice(0, 2).join(", ") + " + " + (o.moves.length - 2) + " more" : o.moves.join(", ")) + " · " + o.count + " step" + (o.count === 1 ? "" : "s") : "Not used yet", s = document.createElement("tr");
      s.className = r ? "" : "off", s.innerHTML = '<td><div class="metaType">' + B(o.label) + '</div><div class="metaSub">' + B(o.kind + " · " + l) + '</div></td><td class="metaKindCol">' + B(o.kind) + '</td><td class="metaUsedCol">' + B(l) + '</td><td class="metaSwitchCol"><button class="switch' + (r ? " on" : "") + '" type="button" role="switch" aria-checked="' + r + '" aria-label="Second line for ' + B(o.label) + ' on phones"></button></td>', s.querySelector(".switch").addEventListener("click", () => li([o.key], r)), e.appendChild(s);
    });
    const i = n.filter((o) => t[o.key]).length;
    a("metaCount").textContent = n.length ? n.length + " type" + (n.length === 1 ? "" : "s") + (i ? " · " + i + " hidden on phones" : "") : "";
  }
  function li(e, t) {
    const n = { ...I().hideMeta || {} };
    e.forEach((i) => {
      t ? n[i] = !0 : delete n[i];
    }), me("hideMeta", n), bn(), Ai(), je();
  }
  a("metaSearch").addEventListener("input", bn), a("metaKinds").querySelectorAll(".kindChip").forEach((e) => e.addEventListener("click", () => {
    ri = e.dataset.kind, a("metaKinds").querySelectorAll(".kindChip").forEach((t) => t.classList.toggle("active", t === e)), bn();
  })), a("metaHideAll").addEventListener("click", () => li(si().map((e) => e.key), !0)), a("metaShowAll").addEventListener("click", () => li(si().map((e) => e.key), !1));
  const kt = { feel: !0, steps: !0, mood: !0, energyLevel: !0, ...I().toggles || {} };
  function ma() {
    x.querySelectorAll("[data-toggle]").forEach((t) => t.classList.toggle("on", kt[t.dataset.toggle] !== !1)), x.querySelector(".feelSection").hidden = !0, [["steps", "stepsRow"], ["mood", "moodRow"], ["energyLevel", "energyLevelRow"]].forEach(([t, n]) => {
      a(n).hidden = kt[t] === !1;
    });
    const e = ["steps", "mood", "energyLevel"].some((t) => kt[t] !== !1);
    x.querySelector(".activityCard").hidden = !e, a("insightCard").style.gridColumn = e ? "" : "span 12";
  }
  x.querySelectorAll("[data-toggle]").forEach((e) => e.addEventListener("click", () => {
    kt[e.dataset.toggle] = kt[e.dataset.toggle] === !1, ma(), me("toggles", { ...kt });
  })), ma();
  function ir() {
    ii.classList.toggle("on", Te), ai.classList.toggle("on", Ve), yt.value = Math.round(ot * 100), a("trailStrengthValue").textContent = yt.value + "%", wt.value = rt, a("trailLifeValue").textContent = wt.value + " ms";
  }
  I().trailEnabled !== void 0 && (Te = I().trailEnabled), I().rippleEnabled !== void 0 && (Ve = I().rippleEnabled), I().trailStrength !== void 0 && (ot = I().trailStrength), I().trailMaxAge !== void 0 && (rt = I().trailMaxAge), ir(), ii.addEventListener("click", () => {
    Te = !Te, ii.classList.toggle("on", Te), Te || (zt = []), me("trailEnabled", Te);
  }), ai.addEventListener("click", () => {
    Ve = !Ve, ai.classList.toggle("on", Ve), me("rippleEnabled", Ve);
  }), yt.addEventListener("input", () => {
    ot = Number(yt.value) / 100, a("trailStrengthValue").textContent = yt.value + "%";
  }), yt.addEventListener("change", () => me("trailStrength", ot)), wt.addEventListener("input", () => {
    rt = Number(wt.value), a("trailLifeValue").textContent = wt.value + " ms";
  }), wt.addEventListener("change", () => me("trailMaxAge", rt)), rn.addEventListener("change", () => me("upcomingCount", $e));
  function ga(e) {
    x.querySelectorAll(".themeBtn").forEach((n) => n.classList.toggle("active", n.dataset.theme === e));
    const t = e === "light";
    a("app").classList.toggle("light", t), y.setLight(t);
  }
  ga(I().theme || "dark"), x.querySelectorAll(".themeBtn").forEach((e) => e.addEventListener("click", () => {
    ga(e.dataset.theme), me("theme", e.dataset.theme);
  }));
  const Me = { steps: null, ...I().entities || {} };
  let Ue = null, di = {};
  function ar(e) {
    const t = Object.values(e).filter((s) => s.entity_id.startsWith("sensor.") || s.entity_id.startsWith("input_number.")), n = (s) => s.attributes.friendly_name || s.entity_id, i = t.filter((s) => /step/i.test(s.entity_id) || /step/i.test(n(s)) || ["steps", "step"].includes(String(s.attributes.unit_of_measurement || "").toLowerCase())), o = t.filter((s) => !i.includes(s)), r = (s, g) => n(s).localeCompare(n(g)), l = (s, g) => /health_steps/.test(g.entity_id) - /health_steps/.test(s.entity_id) || r(s, g);
    return { suggested: i.sort(l), rest: o.sort(r), label: n };
  }
  function va(e) {
    const t = a("stepsEntity");
    if (!t || t.matches(":focus")) return;
    const { suggested: n, rest: i, label: o } = ar(e), r = (g) => '<option value="' + B(g.entity_id) + '">' + B(o(g)) + "</option>";
    t.innerHTML = '<option value="">Not connected</option>' + (n.length ? '<optgroup label="Suggested">' + n.map(r).join("") + "</optgroup>" : "") + (i.length ? '<optgroup label="All sensors">' + i.map(r).join("") + "</optgroup>" : ""), t.value = Me.steps || "";
    const l = a("stepsStatus"), s = Me.steps && e[Me.steps];
    l.textContent = s ? "Connected · " + o(s) : l.dataset.empty;
  }
  a("stepsEntity").addEventListener("change", () => {
    Me.steps = a("stepsEntity").value || null, me("entities", { ...Me }), di = {}, xa(), Ue && (va(Ue), fa(Ue));
  });
  function or(e, t = 0) {
    return new Intl.NumberFormat(void 0, { maximumFractionDigits: t }).format(e);
  }
  function ha() {
    const e = Me.steps && (Ue == null ? void 0 : Ue[Me.steps]), t = Number(e == null ? void 0 : e.state);
    return Number.isFinite(t) ? t : null;
  }
  function fa(e) {
    var i;
    const t = Me.steps, n = t ? Number((i = e[t]) == null ? void 0 : i.state) : NaN;
    a("stepsMeta").textContent = t ? Number.isFinite(n) ? or(n) : "—" : "Set up in Settings";
  }
  let ba = 0;
  async function xa() {
    const e = Me.steps;
    if (!e || !y.ws) return;
    ba = Date.now();
    const t = /* @__PURE__ */ new Date(), n = new Date(t.getFullYear(), t.getMonth(), t.getDate() - 30);
    try {
      const i = await y.ws({ type: "recorder/statistics_during_period", start_time: n.toISOString(), end_time: t.toISOString(), statistic_ids: [e], period: "day", types: ["max"] }), o = (i == null ? void 0 : i[e]) || [], r = {};
      if (o.forEach((l) => {
        Number.isFinite(l.max) && (r[ae(new Date(l.start))] = l.max);
      }), !Object.keys(r).length) {
        const l = await y.ws({ type: "history/history_during_period", start_time: n.toISOString(), end_time: t.toISOString(), entity_ids: [e], minimal_response: !0, no_attributes: !0, significant_changes_only: !1 });
        ((l == null ? void 0 : l[e]) || []).forEach((s) => {
          const g = Number(s.s ?? s.state), p = s.lu ? s.lu * 1e3 : Date.parse(s.last_updated || s.last_changed);
          if (!Number.isFinite(g) || !p) return;
          const u = ae(new Date(p));
          r[u] = Math.max(r[u] || 0, g);
        });
      }
      di = r, Fe();
    } catch {
    }
  }
  function Ke() {
    Fe();
  }
  Ke(), setInterval(() => {
    Ke(), At(), Ge();
  }, 10 * 60 * 1e3);
  function ya(e) {
    const t = {}, n = {};
    M.history.forEach((l) => {
      const s = ae(new Date(l.start));
      t[s] = (t[s] || 0) + (l.seconds || 0) / 60, n[s] = (n[s] || 0) + 1;
    });
    const i = /* @__PURE__ */ new Date(), o = ae(i), r = [];
    for (let l = e - 1; l >= 0; l--) {
      const s = new Date(i.getFullYear(), i.getMonth(), i.getDate() - l), g = ae(s), p = M.checkins.filter((d) => d.date === g), u = (d) => {
        const m = p.map((C) => C[d]).filter(Boolean);
        return m.length ? m.reduce((C, L) => C + L, 0) / m.length : null;
      };
      r.push({
        key: g,
        date: s,
        minutes: Math.round(t[g] || 0),
        moves: n[g] || 0,
        steps: g === o && ha() != null ? ha() : di[g] ?? null,
        mood: u("mood"),
        energy: u("energy")
      });
    }
    return r;
  }
  function rr(e) {
    let t = e.length - 1;
    e[t] && !e[t].minutes && t--;
    let n = 0;
    for (; t >= 0 && e[t].minutes > 0; )
      n++, t--;
    return n;
  }
  function Fe() {
    const e = a("insightCard");
    if (!e) return;
    const t = ya(30), n = rr(t), i = t.reduce((d, m) => d + m.minutes, 0), o = /* @__PURE__ */ new Date(), r = ae(o), l = new Date(o.getFullYear(), o.getMonth(), o.getDate() - (o.getDay() + 6) % 7), s = [...Array(7)].map((d, m) => {
      const C = new Date(l.getFullYear(), l.getMonth(), l.getDate() + m), L = ae(C), h = t.find((f) => f.key === L);
      return { d: C, k: L, minutes: h ? h.minutes : 0, today: L === r, future: L > r };
    }), g = s.reduce((d, m) => d + m.minutes, 0), p = Math.max(10, ...s.map((d) => d.minutes)), u = (d, m, C) => '<div class="activityRow"><div class="activityRowIcon" aria-hidden="true">' + d + '</div><div><div class="activityRowName">' + B(m) + '</div><div class="activityRowMeta">' + B(C) + "</div></div></div>";
    e.innerHTML = '<div class="activityHeader"><div class="activityIcon" aria-hidden="true">↗</div><div class="activityTitle">Movement</div></div><div class="activityRows movementReadings">' + u("◷", "This week", g + " min") + u("↯", "Streak", n + " day" + (n === 1 ? "" : "s")) + u("▦", "30 days", i + " min") + '</div><div class="weekBars">' + s.map(
      (d) => '<div class="weekBar' + (d.today ? " today" : "") + (d.future ? " future" : "") + '" title="' + B(d.minutes + " min") + '"><div class="weekBarTrack"><span style="height:' + (d.minutes ? Math.max(6, d.minutes / p * 100) : 0) + '%"></span></div><div class="dayLabel">' + B(new Intl.DateTimeFormat(void 0, { weekday: "short" }).format(d.d)) + "</div></div>"
    ).join("") + "</div>";
  }
  const wa = a("tvNav");
  y.fullscreenSupported || (wa.hidden = !0), wa.addEventListener("click", () => y.toggleFullscreen()), x.addEventListener("keydown", (e) => {
    !Je.workout.classList.contains("active") || Dt.classList.contains("active") || e.target.closest("input,select,textarea,.holdEnd") || (e.key === "MediaPlayPause" || e.key === " " && !e.target.closest("button") ? (e.preventDefault(), Kn.click()) : e.key === "MediaTrackNext" ? (e.preventDefault(), a("skipExercise").click()) : e.key === "MediaTrackPrevious" && (e.preventDefault(), a("restartSegment").click()));
  }), [D, A, N, ze].forEach((e) => e.addEventListener("input", () => {
    const t = E[F];
    t && (t.total = Number(D.value), t.work = Number(A.value), t.rest = Number(N.value)), O();
  })), yi.addEventListener("click", Qn), wi.addEventListener("click", () => Cn("settings")), a("settingsBack").addEventListener("click", Qn), Kn.addEventListener("click", () => Ee(!ge)), fe(F), on(), At(), Fe(), a("healthHelpOpen").addEventListener("click", () => x.querySelector(".tab[data-pane=helpPane]").click()), fn(a("resetStats"), a("resetStatsFill"), 1500, () => {
    M.history = [], M.checkins = [], Bt = "";
    try {
      localStorage.removeItem("move-assistant-dismissed");
    } catch {
    }
    he(), Ke(), At(), on(), Fe(), Ge(), V("Stats reset");
  });
  const ci = a("morningTime"), pi = a("eveningTime"), ui = a("checkinAutoOpen");
  ci.value = Se().morning, pi.value = Se().evening, ui.classList.toggle("on", I().checkinAutoOpen !== !1), [["morningTime", ci], ["eveningTime", pi]].forEach(([e, t]) => t.addEventListener("change", () => {
    t.value && (me(e, t.value), Ge());
  })), ui.addEventListener("click", () => {
    const e = I().checkinAutoOpen === !1;
    ui.classList.toggle("on", e), me("checkinAutoOpen", e);
  }), setTimeout(qn, 800);
  const ka = a("checkinNotify"), xn = a("checkinNotifyTarget"), Sa = a("checkinNotifyStatus"), sr = Sa.textContent;
  function Ca() {
    const e = y.notifyServices(), t = e.filter((o) => o.startsWith("mobile_app_")), n = t.length ? t : e, i = (o) => o.replace(/^mobile_app_/, "").replace(/_/g, " ");
    xn.innerHTML = n.map((o) => '<option value="' + B(o) + '">' + B(i(o)) + "</option>").join(""), !I().notifyTarget && n[0] && (I().notifyTarget = n[0]), xn.value = I().notifyTarget || "";
  }
  function yn() {
    const e = !!I().notifyOn;
    ka.classList.toggle("on", e), a("checkinNotifyTargetRow").hidden = !e;
    const t = Se();
    Sa.textContent = e ? "Sends at " + t.morning + " and " + t.evening : sr;
  }
  async function mi() {
    const e = !!I().notifyOn;
    try {
      return await y.setReminderAutomation(e ? { target: I().notifyTarget, times: Se() } : null), !0;
    } catch {
      return V("Couldn't update the reminder in Home Assistant"), !1;
    }
  }
  ka.addEventListener("click", async () => {
    const e = !I().notifyOn;
    if (e && (Ca(), !I().notifyTarget)) {
      V("Install the Companion app on your phone first");
      return;
    }
    I().notifyOn = e, yn(), await mi() ? (he(), V(e ? "Check-in notifications on" : "Check-in notifications off")) : (I().notifyOn = !e, yn());
  }), xn.addEventListener("change", () => {
    me("notifyTarget", xn.value), I().notifyOn && mi();
  }), [ci, pi].forEach((e) => e.addEventListener("change", () => {
    yn(), I().notifyOn && mi();
  })), Ca(), yn();
  let gi = null;
  function lr() {
    gi || (gi = setTimeout(() => {
      gi = null, Fe();
    }, 3e4));
  }
  return {
    updateStates(e) {
      Ue = e, va(e), fa(e), Date.now() - ba > 60 * 60 * 1e3 && xa(), lr();
    },
    applyRemoteData(e) {
      if (e && (Array.isArray(e.history) && (M.history = e.history, Ke()), Array.isArray(e.history) && Fe(), Array.isArray(e.checkins) && (M.checkins = e.checkins.map(Ti), Ge(), on(), At(), Ke(), Fe()), e.profiles && !oe.classList.contains("open") && !ye)) {
        const t = Ci(e);
        Object.keys(E).forEach((n) => delete E[n]), Object.assign(E, t.profiles), M.order = t.order, E[F] || (F = M.order[0]), Ei(), fe(F);
      }
    },
    suspend() {
      G = !1;
    },
    resume() {
      G || (G = !0, st || (st = requestAnimationFrame(pn)), dt || (dt = requestAnimationFrame(un)), Wt(x.querySelector(".tab.active"), !1));
    }
  };
}
const mr = "0.22.0", hi = "move_assistant", gr = "move_assistant", Fa = "move_assistant_checkin_reminder";
function vr() {
  if (document.getElementById("move-assistant-inter")) return;
  const x = document.createElement("link");
  x.id = "move-assistant-inter", x.rel = "stylesheet", x.href = "https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,400;0,500;0,600;0,700;0,800;1,500&display=swap", document.head.appendChild(x);
}
class hr extends HTMLElement {
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
    vr();
    const y = this.shadowRoot || this.attachShadow({ mode: "open" });
    y.innerHTML = `<style>${cr}</style>${pr}`;
    const a = y.getElementById("app");
    a.style.opacity = "0";
    let q = null;
    try {
      const R = await this._hass.callWS({
        type: "frontend/get_user_data",
        key: hi
      });
      q = (R == null ? void 0 : R.value) ?? null;
    } catch {
    }
    this._lastSaved = JSON.stringify(q), this._app = ur(y, {
      data: q,
      save: (R) => this._save(R),
      fire: (R, G) => this._fire(R, G),
      ws: (R) => this._hass.callWS(R),
      notifyServices: () => {
        var R, G;
        return Object.keys(((G = (R = this._hass) == null ? void 0 : R.services) == null ? void 0 : G.notify) || {}).sort();
      },
      setReminderAutomation: (R) => this._setReminderAutomation(R),
      setLight: (R) => this.classList.toggle("lightBody", R),
      fullscreenSupported: !!(this.requestFullscreen || this.webkitRequestFullscreen),
      toggleFullscreen: () => this._toggleFullscreen()
    }), this._lastStates = this._hass.states, this._app.updateStates(this._hass.states), this.isConnected || this._app.suspend(), a.style.transition = "opacity .2s ease", a.style.opacity = "", this._subscribe();
  }
  _subscribe() {
    var a;
    const y = (a = this._hass) == null ? void 0 : a.connection;
    y != null && y.subscribeMessage && y.subscribeMessage(
      (q) => {
        var G;
        const R = JSON.stringify((q == null ? void 0 : q.value) ?? null);
        R === this._lastSaved || R === this._pendingJson || (this._lastSaved = R, (G = this._app) == null || G.applyRemoteData(q.value));
      },
      { type: "frontend/subscribe_user_data", key: hi }
    ).catch(() => {
    });
  }
  _save(y) {
    this._pendingJson = JSON.stringify(y), clearTimeout(this._saveTimer), this._saveTimer = setTimeout(async () => {
      const a = this._pendingJson;
      try {
        await this._hass.callWS({
          type: "frontend/set_user_data",
          key: hi,
          value: JSON.parse(a)
        }), this._lastSaved = a;
      } catch {
        this._toast("Couldn't save to Home Assistant");
      }
    }, 400);
  }
  _fire(y, a = {}) {
    var q, R;
    ((q = this._config) == null ? void 0 : q.events) !== !1 && ((R = this._hass) == null || R.callWS({
      type: "fire_event",
      event_type: gr,
      event_data: { action: y, ...a }
    }).catch(() => {
    }));
  }
  // Keeps one Home Assistant automation in sync with the check-in times.
  // Passing null removes it.
  async _setReminderAutomation(y) {
    const a = `config/automation/config/${Fa}`;
    if (!y) {
      try {
        await this._hass.callApi("DELETE", a);
      } catch (G) {
        if ((G == null ? void 0 : G.status_code) !== 404 && (G == null ? void 0 : G.status) !== 404) throw G;
      }
      return;
    }
    const q = (G) => `${G}:00`, R = window.location.pathname;
    await this._hass.callApi("POST", a, {
      id: Fa,
      alias: "Move Assistant check-in reminder",
      description: "Created by Move Assistant. Change it in Move Assistant → Settings → Check-in.",
      mode: "single",
      triggers: [
        { trigger: "time", at: q(y.times.morning), id: "morning" },
        { trigger: "time", at: q(y.times.evening), id: "evening" }
      ],
      conditions: [],
      actions: [
        {
          action: `notify.${y.target}`,
          data: {
            title: "Move Assistant",
            message: "{{ 'Morning' if trigger.id == 'morning' else 'Evening' }} check-in is ready",
            data: { url: R, clickAction: R }
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
    var q;
    const a = (q = this.shadowRoot) == null ? void 0 : q.getElementById("toast");
    a && (a.textContent = y, a.classList.add("show"), setTimeout(() => a.classList.remove("show"), 2600));
  }
}
customElements.get("move-assistant-card") || (customElements.define("move-assistant-card", hr), window.customCards = window.customCards || [], window.customCards.push({
  type: "move-assistant-card",
  name: "Move Assistant",
  description: "Guided movement timer with your Home Assistant activity data.",
  preview: !1
}), console.info(`%c MOVE ASSISTANT %c ${mr} `, "background:#D0FF00;color:#090909;font-weight:700", ""));
