(this.webpackJsonpklipping=this.webpackJsonpklipping||[]).push([[0],{52:function(e,t,n){},98:function(e,t,n){"use strict";n.r(t);n(4);var a,c=n(1),i=n.n(c),r=n(17),o=n.n(r),s=(n(52),n(7)),l=n(9),u=n(0),d=n(6),b=n(3),f=n(2),p=n(8);!function(e){e.cutting="Cutting",e.metadata="Metadata",e.thumbnail="Thumbnail",e.finish="Finish"}(a||(a={}));var h,g={value:a.cutting},m=Object(p.c)({name:"mainMenuState",initialState:g,reducers:{setState:function(e,t){e.value=t.payload}}}),v=m.actions.setState,j=function(e){return e.mainMenuState.value},O=m.reducer,x=Object(p.c)({name:"finishState",initialState:{value:"Start processing",pageNumber:0},reducers:{setState:function(e,t){e.value=t.payload},setPageNumber:function(e,t){e.pageNumber=t.payload}}}),w=x.actions,y=w.setState,k=w.setPageNumber,S=function(e){return e.finishState.value},I=function(e){return e.finishState.pageNumber},C=x.reducer,D=n(10),P=n.n(D),T=n(13),N=n(42),A=n.n(N),E=window.location.origin,R=!0,M=!0,W=function(){var e=Object(T.a)(P.a.mark((function e(){var t,n,a;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z().then((function(e){e=H(e,!1,"src-server","from server settings file"),L(e)}));case 2:t=new URLSearchParams(window.location.search),n={},t.forEach((function(e,t){var a=n,c=t.split(".");c.slice(0,-1).forEach((function(e){e in a||(a[e]={}),a=a[e]})),a[c[c.length-1]]=e})),a=H(n,!0,"src-url","given as URL GET parameter"),L(a);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),L=function(e){for(var t in e)null!=e.mediaPackageId&&(h=e.mediaPackageId),"debugging"===t&&null!=e[t].ocUrl&&(E=e[t].ocUrl),"metadata"===t&&null!=e[t].show&&(R=e[t].show),"thumbnail"===t&&null!=e[t].show&&(M=e[t].show)},z=function(){var e=Object(T.a)(P.a.mark((function e(){var t,n,a,c,i,r;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(n="/").endsWith("/")||(n+="/"),a=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_SETTINGS_PATH||"editor-settings.toml",c=a.startsWith("/")?"":n,i="".concat(window.location.origin).concat(c).concat(a),e.prev=5,e.next=8,fetch(i);case 8:r=e.sent,e.next=15;break;case 11:return e.prev=11,e.t0=e.catch(5),console.warn("Could not access '".concat(a,"' due to network error!"),e.t0||""),e.abrupt("return",null);case 15:if(404!==r.status){e.next=20;break}return console.debug("'".concat(a,"' returned 404: ignoring")),e.abrupt("return",null);case 20:if(r.ok){e.next=23;break}return console.error("Fetching '".concat(a,"' failed: ").concat(r.status," ").concat(r.statusText)),e.abrupt("return",null);case 23:if(!(null===(t=r.headers.get("Content-Type"))||void 0===t?void 0:t.startsWith("text/html"))){e.next=26;break}return console.warn("'".concat(a,"' request has 'Content-Type: text/html' -> ignoring...")),e.abrupt("return",null);case 26:return e.prev=26,e.t1=A.a,e.next=30,r.text();case 30:return e.t2=e.sent,e.abrupt("return",(0,e.t1)(e.t2));case 34:throw e.prev=34,e.t3=e.catch(26),console.error("Could not parse '".concat(a,"' as TOML: "),e.t3),new SyntaxError("Could not parse '".concat(a,"' as TOML: ").concat(e.t3));case 38:case"end":return e.stop()}}),e,null,[[5,11],[26,34]])})));return function(){return e.apply(this,arguments)}}(),H=function(e,t,n,a){var c=function(e,t,n){return"function"===typeof e?i(e,t,n):r(e,t,n)},i=function(e,c,i){try{var r=e(c,t,n);return void 0===r?c:r}catch(o){return console.warn("Validation of setting '".concat(i,"' (").concat(a,") with value '").concat(c,"' failed: ")+"".concat(o,". Ignoring.")),null}},r=function(e,t,n){var i={};for(var r in t){var o=n?"".concat(n,".").concat(r):r;if(r in e){var s=c(e[r],t[r],o);null!==s&&(i[r]=s)}else console.warn("'".concat(o,"' (").concat(a,") is not a valid settings key. Ignoring."))}return i};return c(F,e,"")},B={string:function(e,t){if("string"!==typeof e)throw new Error("is not a string, but should be")},boolean:function(e,t){if("boolean"!==typeof e){if(t){if("true"===e)return!0;if("false"===e)return!1;throw new Error("can't be parsed as boolean")}throw new Error("is not a boolean")}}},F={mediaPackageId:B.string,debugging:{ocUrl:B.string},metadata:{show:B.boolean},thumbnail:{show:B.boolean}};var U=function(){return Object(u.c)(u.a,{styles:K})},K={name:"1bjjf7p",styles:"body{background-color:snow;font-size:medium;min-height:100vh;}"},q=Object(u.b)({borderRadius:"10px",cursor:"pointer",transitionDuration:"0.3s",transitionProperty:"transform","&:hover":{transform:"scale(1.1)"},"&:focus":{transform:"scale(1.1)"},"&:active":{transform:"scale(0.9)"},display:"flex",justifyContent:"center",alignItems:"center",gap:"10px",textAlign:"center"},""),G=Object(u.b)({display:"flex",flexDirection:"row",gap:"20px"},""),V={name:"8kxyvl",styles:"position:absolute;left:-99999px;height:1px;width:1px;overflow:hidden;"},_=n(46);function Y(e){return J.apply(this,arguments)}function J(){return(J=Object(T.a)(P.a.mark((function e(t){var n,a,c,i,r,o,s,u,d,b,f=arguments;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=f.length>1&&void 0!==f[1]?f[1]:{},a=n.body,c=Object(_.a)(n,["body"]),i={"Content-Type":"application/json"},r=btoa(unescape(encodeURIComponent("admin:opencast"))),o={Authorization:"Basic ".concat(r)},s=Object(l.a)(Object(l.a)({method:a?"POST":"GET"},c),{},{headers:Object(l.a)(Object(l.a)(Object(l.a)({},i),c.headers),o)}),a&&(s.body=JSON.stringify(a)),e.prev=6,e.next=9,window.fetch(t,s);case 9:return b=e.sent,e.next=12,b.text();case 12:if(d=e.sent,u=d.length?JSON.parse(d):"",!b.ok){e.next=16;break}return e.abrupt("return",u);case 16:throw new Error(b.statusText);case 19:return e.prev=19,e.t0=e.catch(6),e.abrupt("return",Promise.reject(e.t0.message?e.t0.message:u));case 22:case"end":return e.stop()}}),e,null,[[6,19]])})))).apply(this,arguments)}Y.get=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Y(e,Object(l.a)(Object(l.a)({},t),{},{method:"GET"}))},Y.post=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return Y(e,Object(l.a)(Object(l.a)({},n),{},{body:t}))};var X=function(e,t){var n=Math.pow(10,t);return Math.round((e+Number.EPSILON)*n)/n},Q=function(e){var t=new Date(e||0).toISOString().substr(11,2),n=new Date(e||0).toISOString().substr(14,2),a=new Date(e||0).toISOString().substr(17,2),c=[];return parseInt(t)>0&&c.push(t+" hours, "),(parseInt(n)>0||parseInt(t)>0)&&c.push(n+" minutes, "),c.push(a+" seconds"),c.join("")},Z={isPlaying:!1,isPlayPreview:!0,currentlyAt:0,segments:[{id:Object(p.d)(),start:0,end:1,deleted:!1}],tracks:[],activeSegmentIndex:0,selectedWorkflowIndex:0,previewTriggered:!1,videoURLs:[],videoCount:0,duration:0,title:"",presenters:[],workflows:[],status:"idle",error:void 0},$=Object(p.b)("video/fetchVideoInformation",function(){var e=Object(T.a)(P.a.mark((function e(t){var n;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Y.get("".concat(t.ocUrl,"/editor/").concat(t.mediaPackageId,"/edit.json"));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),ee=Object(p.c)({name:"videoState",initialState:Z,reducers:{setIsPlaying:function(e,t){e.isPlaying=t.payload},setIsPlayPreview:function(e,t){e.isPlayPreview=t.payload},setPreviewTriggered:function(e,t){e.previewTriggered=t.payload},setCurrentlyAt:function(e,t){e.currentlyAt=X(t.payload,0),te(e),ce(e)},setCurrentlyAtInSeconds:function(e,t){e.currentlyAt=X(1e3*t.payload,0),te(e),ce(e)},addSegment:function(e,t){e.segments.push(t.payload)},cut:function(e){if(e.segments[e.activeSegmentIndex].start===e.currentlyAt||e.segments[e.activeSegmentIndex].end===e.currentlyAt)return e;var t={id:Object(p.d)(),start:e.segments[e.activeSegmentIndex].start,end:e.currentlyAt,deleted:e.segments[e.activeSegmentIndex].deleted},n={id:Object(p.d)(),start:e.currentlyAt,end:e.segments[e.activeSegmentIndex].end,deleted:e.segments[e.activeSegmentIndex].deleted};e.segments.splice(e.activeSegmentIndex,1,t,n)},markAsDeletedOrAlive:function(e){e.segments[e.activeSegmentIndex].deleted=!e.segments[e.activeSegmentIndex].deleted},setSelectedWorkflowIndex:function(e,t){e.selectedWorkflowIndex=t.payload},mergeLeft:function(e){ae(e,e.activeSegmentIndex,e.activeSegmentIndex-1)},mergeRight:function(e){ae(e,e.activeSegmentIndex,e.activeSegmentIndex+1)}},extraReducers:function(e){e.addCase($.pending,(function(e,t){e.status="loading"})),e.addCase($.fulfilled,(function(e,t){e.status="success",e.videoURLs=t.payload.tracks.reduce((function(e,t){return e.push(t.uri),e}),[]),e.videoCount=t.payload.tracks.length,e.duration=t.payload.duration,e.title=t.payload.title,e.presenters=[],e.segments=ne(t.payload.segments,t.payload.duration),e.tracks=t.payload.tracks,e.workflows=t.payload.workflows.sort((function(e,t){return e.displayOrder>t.displayOrder?1:e.displayOrder<t.displayOrder?-1:0}))})),e.addCase($.rejected,(function(e,t){e.status="failed",e.error=t.error.message}))}}),te=function(e){e.activeSegmentIndex=e.segments.findIndex((function(t){return t.start<=e.currentlyAt&&t.end>=e.currentlyAt})),e.activeSegmentIndex<0&&(e.activeSegmentIndex=0)},ne=function(e,t){var n=[];return 0===e.length&&n.push({id:Object(p.d)(),start:0,end:t,deleted:!1}),e.forEach((function(e){n.push({id:Object(p.d)(),start:e.start,end:e.end,deleted:e.deleted})})),n},ae=function(e,t,n){n<0||n>e.segments.length-1||(e.segments[t].start=Math.min(e.segments[t].start,e.segments[n].start),e.segments[t].end=Math.max(e.segments[t].end,e.segments[n].end),e.segments.splice(n,1),te(e))},ce=function(e){if(e.isPlaying&&e.segments[e.activeSegmentIndex].deleted&&e.isPlayPreview){for(var t=e.segments[e.activeSegmentIndex].end,n=e.activeSegmentIndex;n<e.segments.length&&e.segments[n].deleted;)t=e.segments[n].end,n++;e.currentlyAt=t,e.previewTriggered=!0}},ie=ee.actions,re=ie.setIsPlaying,oe=ie.setIsPlayPreview,se=ie.setCurrentlyAt,le=ie.setCurrentlyAtInSeconds,ue=(ie.addSegment,ie.cut),de=ie.markAsDeletedOrAlive,be=ie.setSelectedWorkflowIndex,fe=ie.mergeLeft,pe=ie.mergeRight,he=ie.setPreviewTriggered,ge=function(e){return e.videoState.isPlaying},me=function(e){return e.videoState.isPlayPreview},ve=function(e){return e.videoState.previewTriggered},je=function(e){return e.videoState.currentlyAt},Oe=function(e){return e.videoState.currentlyAt/1e3},xe=function(e){return e.videoState.segments},we=function(e){return e.videoState.activeSegmentIndex},ye=function(e){return!e.videoState.segments[e.videoState.activeSegmentIndex].deleted},ke=function(e){return e.videoState.selectedWorkflowIndex},Se=function(e){return e.videoState.videoURLs},Ie=function(e){return e.videoState.videoCount},Ce=function(e){return e.videoState.duration},De=function(e){return e.videoState.duration/1e3},Pe=function(e){return e.videoState.title},Te=function(e){return e.videoState.presenters},Ne=function(e){return e.videoState.tracks},Ae=function(e){return e.videoState.workflows},Ee=ee.reducer,Re=function(e){var t=e.iconName,n=e.stateName,c=Object(f.b)(),i=Object(f.c)(j),r=function(){c(v(n)),n===a.finish&&c(k(0)),c(re(!1))},o=Object(u.b)(Object(l.a)(Object(l.a)({width:"100%",height:"100px"},i===n&&{backgroundColor:"#DDD"}),{},{flexDirection:"column"}),"");return Object(u.c)("li",{css:Object(s.a)([q,o],""),role:"menuitem",tabIndex:0,onClick:r,onKeyDown:function(e){"Enter"===e.key&&r()}},Object(u.c)(d.a,{icon:t,size:"2x"}),Object(u.c)("div",null,n))},Me=function(){var e=Object(u.b)({borderRight:"1px solid #BBB",width:"100px",display:"flex",flexDirection:"column",flexShrink:0,alignItems:"center",padding:"20px",gap:"30px"},"");return Object(u.c)("nav",{css:e,title:"Main Menu",role:"navigation","aria-label":"Main Navigation"},Object(u.c)(Re,{iconName:b.i,stateName:a.cutting}),R&&Object(u.c)(Re,{iconName:b.j,stateName:a.metadata}),M&&Object(u.c)(Re,{iconName:b.l,stateName:a.thumbnail}),Object(u.c)(Re,{iconName:b.p,stateName:a.finish}))},We=n(18),Le=n(43),ze=n.n(Le);var He=function(e){var t=e.url,n=e.isMuted,a=Object(f.b)(),i=Object(f.c)(ge),r=Object(f.c)(Oe),o=Object(f.c)(De),s=Object(f.c)(ve),l=Object(c.useRef)(null),d=Object(c.useState)(!1),b=Object(We.a)(d,2),p=b[0],h=b[1];return Object(c.useEffect)((function(){!i&&l.current&&p&&l.current.seekTo(r,"seconds"),s&&l.current&&p&&(l.current.seekTo(r,"seconds"),a(he(!1)))})),Object(u.c)(ze.a,{url:t,ref:l,width:"100%",height:"auto",playing:i,muted:n,onProgress:function(e){X(r,3)!==X(e.playedSeconds,3)&&a(le(e.playedSeconds))},progressInterval:100,onReady:function(){h(!0)},onEnded:function(){a(re(!1)),a(le(o))},tabIndex:-1,disablePictureInPicture:!0})},Be={name:"vyrci0",styles:"cursor:pointer;transition-duration:0.3s;transition-property:transform;&:hover{transform:scale(1.1);}&:active{transform:scale(0.9);}"},Fe={name:"1gnq0uh",styles:"cursor:pointer;transition-duration:0.3s;transition-property:transform;&:hover{transform:scale(1.05);}"},Ue={name:"1supqt3",styles:"display:flex;gap:10px;justify-content:center;align-items:center;"},Ke={name:"1jblnxu",styles:"display:inline-block;flex-wrap:nowrap;"},qe={name:"1r139wu",styles:"display:inline-block;width:110px;"},Ge=function(){var e=Object(f.b)(),t=Object(f.c)(ge),n=Object(f.c)(me),a=Object(f.c)(je),c=function(){e(oe(!n))},i=function(){e(re(!t))},r=Object(u.b)({display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",width:"100%",padding:"10px"},""),o=Object(u.b)({display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",width:"100%",padding:"10px",gap:"50px"},""),s=Be,l=Fe;return Object(u.c)("div",{css:r,title:"Video Controls"},Object(u.c)("div",{css:o,title:"Video Controls Top Row"},Object(u.c)("div",{css:Ue,title:"Skips deleted segments when playing the video. Currently "+(n?"on":"off")},Object(u.c)("div",{css:Ke},"Preview Mode"),Object(u.c)(d.a,{css:l,icon:n?b.v:b.u,size:"1x",role:"switch","aria-checked":n,tabIndex:0,"aria-hidden":!1,"aria-label":"Enable or disable preview mode.",onClick:c,onKeyDown:function(e){" "===e.key&&c()}})),Object(u.c)(d.a,{css:s,icon:t?b.k:b.m,size:"2x",title:"Play Button",role:"button","aria-pressed":t,tabIndex:0,"aria-hidden":!1,"aria-label":"Play Button",onClick:i,onKeyDown:function(e){" "!==e.key&&"Enter"!==e.key||i()}}),Object(u.c)("time",{css:qe,tabIndex:0,role:"timer"},new Date(a||0).toISOString().substr(11,12))))},Ve={name:"wnc553",styles:"display:inline-block;padding:15px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;max-width:500px;"},_e={name:"18kfia5",styles:"font-weight:bold;font-size:24px;vertical-align:-2.5px;"},Ye={name:"6xix1i",styles:"font-size:16px;"},Je=function(){var e,t=Object(f.c)(Pe),n=Object(f.c)(Te),a=Ve,c=_e;return n&&n.length&&(e=Object(u.c)("div",{css:a,title:"Video Presenters"},"by ",n.join(", "))),Object(u.c)("div",{title:"Video Area Header",css:Ye},Object(u.c)("div",{css:Object(s.a)([a,c],""),title:"Video Title"},t),e)},Xe=function(){var e,t=Object(f.b)(),n=Object(f.c)(Se),a=Object(f.c)(Ie),i=Object(f.c)((function(e){return e.videoState.status})),r=Object(f.c)((function(e){return e.videoState.error}));Object(c.useEffect)((function(){"idle"===i&&t($({mediaPackageId:h,ocUrl:E}))}),[i,t]),"loading"===i?e=Object(u.c)("div",{className:"loader"},"Loading..."):"success"===i?e="":"failed"===i&&(e=Object(u.c)("div",null,r));for(var o=[],s=0;s<a;s++)o.push(Object(u.c)(He,{key:s,url:n[s],isMuted:0!==s}));var l=Object(u.b)({display:"flex",width:"auto",flexDirection:"column",justifyContent:"center",alignItems:"center",padding:"0px",borderBottom:"1px solid #BBB"},""),d=Object(u.b)({backgroundColor:"black",display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",width:"100%"},"");return Object(u.c)("div",{css:l,title:"Video Area"},e,Object(u.c)(Je,null),Object(u.c)("div",{css:d,title:"Video Player Area"},o),Object(u.c)(Ge,null))},Qe=n(44),Ze=n.n(Qe),$e=n(45);function et(e){var t=this;this.audioContext=new AudioContext,this.oCanvas=document.createElement("canvas"),this.buffer={},this.WIDTH=0,this.HEIGHT=0,this.channelData=[],this.waveformImage="",this.audioBuffer=null,this.aveRMS=0,this.peakRMS=0,this.numberSamples=1e5,this.waveformType="img",this.drawWaveform=this.drawCanvasWaveform,e.width&&e.height&&this.setDimensions(e.width,e.height),e.samples&&(this.numberSamples=e.samples),e.type&&"svg"===e.type&&(this.waveformType="svg",this.drawWaveform=this.delegateToWorker,this.worker=null),e.media&&this.generateWaveform(e.media).then((function(){t.getAudioData(),t.drawWaveform(),"svg"!==t.waveformType&&n.forEach((function(e){e(t.waveformImage||t.svgPath,t.waveformType)}))})).catch((function(e){return console.log(e)}));var n=[];Object.defineProperty(this,"oncomplete",{get:function(){return n},set:function(e,t){if("function"==typeof e){if(this.waveformImage||this.svgPath)return void e(this.waveformImage||this.svgPath,this.svgLength);n.push(e)}}})}et.prototype={constructor:et,setDimensions:function(e,t){this.oCanvas.width=e,this.WIDTH=e,this.oCanvas.height=t,this.HEIGHT=t,this.ocCtx=this.oCanvas.getContext("2d")},decodeAudioData:function(e){var t=this;return new Promise((function(n,a){new Promise((function(t,n){if(e instanceof ArrayBuffer)t(e);else if(e instanceof Blob){var a=new FileReader;a.onload=function(){t(a.result)},a.readAsArrayBuffer(e)}})).then((function(e){t.audioContext.decodeAudioData(e).then((function(e){t.buffer=e,n()})).catch((function(e){a(e)}))})).catch((function(e){a(e)}))}))},getAudioData:function(e){e=e||this.buffer,this.channelData=this.dropSamples(e.getChannelData(0),this.numberSamples)},drawCanvasWaveform:function(e){var t=this;e=e||1,this.ocCtx.fillStyle="#FFFFFF00",this.ocCtx.fillRect(0,0,this.WIDTH,this.HEIGHT),this.ocCtx.lineWidth=1,this.ocCtx.strokeStyle="black";var n=1*this.WIDTH/this.channelData.length,a=0;this.ocCtx.beginPath(),this.ocCtx.moveTo(a,this.channelData[0]*this.HEIGHT/128/2),this.channelData.forEach((function(c){var i=c*e,r=t.HEIGHT*(1+i)/2;t.ocCtx.lineTo(a,r),t.aveRMS+=c*c,t.peakRMS=Math.max(c*c,t.peakRMS),a+=n})),this.ocCtx.lineTo(this.WIDTH,this.HEIGHT/2),this.ocCtx.stroke(),this.aveRMS=Math.sqrt(this.aveRMS/this.channelData.length),this.aveDBs=20*Math.log(this.aveRMS)/Math.log(10),this.waveformImage=this.oCanvas.toDataURL()},dropSamples:function(e,t){var n=Math.max(parseInt(e.length/t),1);return e.filter((function(e,t){return t%n===0}))},generateWaveform:function(e){return this.decodeAudioData(e)},delegateToWorker:function(){this.worker||(this.worker=new Worker("../util/svgworker.js"),this.worker.addEventListener("message",this.workerCommunication.bind(this),!1),this.worker.postMessage(this.channelData))},workerCommunication:function(e){switch(e.data.type){case"path":this.setSVGpath(e.data.path,e.data.length),this.worker.removeEventListener("message",this.workerCommunication.bind(this),!1),this.worker.terminate(),this.worker=null}},setSVGpath:function(e,t){var n=this;this.svgPath=document.createElementNS("http://www.w3.org/2000/svg","path"),this.svgLength=t,this.svgPath.setAttribute("d",e),this.svgPath.setAttribute("vector-effect","non-scaling-stroke"),this.svgPath.setAttribute("stroke-width","0.5px"),this.oncomplete.forEach((function(e){return e(n.svgPath,n.svgLength)}))}};var tt={name:"190c1k3",styles:"height:230px;"},nt={name:"2q5poe",styles:"transform:scaleY(1.5) rotate(90deg);padding:5px;"},at={name:"woscqz",styles:"width:0;height:0;border-left:7px solid transparent;border-right:7px solid transparent;border-bottom:7px solid black;"},ct={name:"17o39q1",styles:"width:0;height:0;border-left:7px solid transparent;border-right:7px solid transparent;border-top:7px solid black;"},it=function(e){var t=e.timelineWidth,n=Object(f.b)(),a=Object(f.c)(ge),r=Object(f.c)(je),o=Object(f.c)(Ce),s=Object(f.c)(we),l=Object(f.c)(xe),p=Object(c.useState)({x:0,y:0}),h=Object(We.a)(p,2),g=h[0],m=h[1],v=Object(c.useState)(!1),j=Object(We.a)(v,2),O=j[0],x=j[1],w=Object(c.useState)(1e3),y=Object(We.a)(w,2),k=y[0],S=y[1],I=Object(c.useRef)(0),C=i.a.useRef(null);Object(c.useEffect)((function(){r!==I.current&&(D(),I.current=r)})),Object(c.useEffect)((function(){r&&o&&m({x:r/o*t,y:0})}),[t]);var D=function(){var e=g.y;m({x:r/o*t,y:e})},P=Object(u.b)({backgroundColor:"black",height:"250px",width:"1px",position:"absolute",zIndex:2,boxShadow:"0 0 10px rgba(0, 0, 0, 0.3)",display:"flex",flexDirection:"column",justifyContent:"space-between",alignItems:"center"},""),T=Object(u.b)({backgroundColor:"rgba(255, 255, 255, 1)",borderRadius:"10px",height:"50px",display:"flex",justifyContent:"center",alignItems:"center",boxShadow:"0 0 10px rgba(0, 0, 0, 0.3)",cursor:O?"grabbing":"grab",transitionDuration:"0.3s",transitionProperty:"transform","&:hover":{transform:"scale(1.1)"},"&:active":{transform:"scale(0.9)"}},""),N=nt,A=at,E=ct;return Object(u.c)(Ze.a,{onStart:function(){x(!0)},onStop:function(e,a){var c=a.x,i=a.y;m({x:c,y:i}),n(se(c/t*o)),x(!1)},axis:"x",bounds:"parent",position:g,disabled:a,nodeRef:C},Object(u.c)("div",{ref:C,css:P,title:"Scrubber"},Object(u.c)("div",{css:E}),Object(u.c)("div",{css:T,title:"dragHandle","aria-grabbed":O,"aria-label":"Scrubber. "+Q(r)+". Active segment: "+s+". "+(l[s].deleted?"Deleted.":"Alive.")+". Controls: Alt+j and Alt+k to move the scrubber. Alt+i and Alt+k to increase/decrase the move delta.",tabIndex:0,onKeyDown:function(e){if(e.altKey)switch(e.key){case"j":n(se(Math.max(r-k,0)));break;case"l":n(se(Math.min(r+k,o)));break;case"i":S(Math.min(10*k,1e6));break;case"k":S(Math.max(k/10,1))}}},Object(u.c)(d.a,{css:N,icon:b.a,size:"1x"})),Object(u.c)("div",{css:A})))},rt=function(e){e.timelineWidth;var t=Object(f.c)(xe),n=Object(f.c)(Ce),a=Object(f.c)(we),c=Object(u.b)({display:"flex",flexDirection:"row",paddingTop:"10px"},"");return Object(u.c)("div",{css:c,title:"Segments"},t.map((function(e,t){return Object(u.c)("div",{key:e.id,title:"Segment "+t,"aria-label":"Segment "+t+". "+(e.deleted?"Deleted.":"Alive.")+" Start: "+Q(e.start)+". End: "+Q(e.end)+".",tabIndex:0,css:Object(s.a)({background:(c=e.deleted,i=a===t,c||i?c&&!i?"repeating-linear-gradient(\n                -45deg,\n                rgba(255, 45, 45, 0.4),\n                rgba(255, 45, 45, 0.4) 10px,\n                rgba(255, 0, 0, 0.4) 10px,\n                rgba(255, 0, 0, 0.4) 20px);":!c&&i?"rgba(0, 0, 200, 0.4)":c&&i?"repeating-linear-gradient(\n                -45deg,\n                rgba(200, 45, 45, 0.4),\n                rgba(200, 45, 45, 0.4) 10px,\n                rgba(200, 0, 0, 0.4) 10px,\n                rgba(200, 0, 0, 0.4) 20px);":void 0:"rgba(0, 0, 255, 0.4)"),borderRadius:"5px",borderStyle:a===t?"dashed":"solid",borderColor:"white",borderWidth:"1px",boxSizing:"border-box",width:(e.end-e.start)/n*100+"%",height:"230px",zIndex:1},"")});var c,i})))},ot={name:"e6zfwc",styles:"min-height:0;"},st=function(){var e=Object(f.c)(Se),t=Object(f.c)((function(e){return e.videoState.status})),n=Object(c.useState)([]),a=Object(We.a)(n,2),r=a[0],o=a[1],s=Object(u.b)(Object(l.a)(Object(l.a)({display:"flex",flexDirection:"column",position:"absolute",justifyContent:"center"},r.length<=0&&{alignItems:"center"}),{},{width:"100%",height:"230px",paddingTop:"10px"}),"");Object(c.useEffect)((function(){if("success"===t){var n=[],a=0;[e[0]].forEach((function(e,t,c){var i=null,r=new XMLHttpRequest;r.open("GET",e),r.responseType="blob",r.onload=function(){i=r.response,new et({type:"img",width:"2000",height:"230",samples:1e5,media:new File([i],i)}).oncomplete=function(e,t){n.push(e),++a===c.length&&o(n)}},r.send()}))}}),[t,e]);return Object(u.c)("div",{css:s,title:"WaveformDisplayTest"},r.length>0?r.map((function(e,t){return Object(u.c)("img",{key:t,alt:"Waveform",src:e||"",css:ot})})):Object(u.c)(i.a.Fragment,null,Object(u.c)(d.a,{icon:b.q,spin:!0,size:"3x"}),Object(u.c)("div",null,"Generating Waveform")))},lt=function(){var e=Object($e.a)(),t=e.ref,n=e.width,a=void 0===n?1:n,c=Object(u.b)({position:"relative",height:"250px",width:"100%"},"");return Object(u.c)("div",{ref:t,css:c,title:"Timeline"},Object(u.c)(it,{timelineWidth:a}),Object(u.c)("div",{css:tt},Object(u.c)(st,null),Object(u.c)(rt,{timelineWidth:a})))},ut={padding:"16px",boxShadow:"0 0 10px rgba(0, 0, 0, 0.3)"},dt=function(e){var t=e.iconName,n=e.actionName,a=e.action,c=e.tooltip,i=e.ariaLabelText,r=Object(f.b)(),o=function(){a&&r(a())};return Object(u.c)("div",{css:Object(s.a)([q,ut],""),title:c,role:"button",tabIndex:0,"aria-label":i,onClick:o,onKeyDown:function(e){" "!==e.key&&"Enter"!==e.key||o()}},Object(u.c)(d.a,{icon:t,size:"1x"}),Object(u.c)("span",null,n))},bt=function(){var e=Object(f.b)(),t=Object(f.c)(ye);return Object(u.c)("div",{css:Object(s.a)([q,ut],""),title:"Marks the segment at the current scrubber position as deleted or alive",role:"button",tabIndex:0,"aria-label":"Delete and Restore. Marks the segment at the current scrubber position as deleted or alive",onClick:function(){return e(de())}},Object(u.c)(d.a,{icon:t?b.x:b.y,size:"1x"}),Object(u.c)("div",null,t?"Delete":"Restore"))},ft=function(){var e=Object(u.b)({display:"flex",flexDirection:"row",justifyContent:"space-between",gap:"30px"},""),t=Object(u.b)({display:"flex",flexDirection:"row",gap:"30px"},"");return Object(u.c)("div",{css:e},Object(u.c)("div",{css:t},Object(u.c)(dt,{iconName:b.f,actionName:"Cut",action:ue,tooltip:"Splits the segment at the current scrubber position",ariaLabelText:"Cut. Splits the segment at the current scrubber position"}),Object(u.c)(bt,null),Object(u.c)(dt,{iconName:b.r,actionName:"Merge Left",action:fe,tooltip:"Combines the currently active segment with the segment to its left",ariaLabelText:"Merge Left. Combines the currently active segment with the segment to its left"}),Object(u.c)(dt,{iconName:b.s,actionName:"Merge Right",action:pe,tooltip:"Combines the currently active segment with the segment to its right",ariaLabelText:"Merge Right. Combines the currently active segment with the segment to its right"})),Object(u.c)("div",{css:t},Object(u.c)(dt,{iconName:b.n,actionName:"Reset changes",action:null,tooltip:"Not implemented",ariaLabelText:"Reset changes. Not implemented"}),Object(u.c)(dt,{iconName:b.n,actionName:"Undo",action:null,tooltip:"Not implemented",ariaLabelText:"Undo. Not implemented"})))},pt=function(e){var t=e.iconName,n=e.stateName,a=Object(f.b)(),c=function(){a(y(n)),a(k(1))},i=Object(u.b)({width:"250px",height:"220px",flexDirection:"column",fontSize:"x-large",gap:"30px",boxShadow:"0 0 10px rgba(0, 0, 0, 0.3)"},"");return Object(u.c)("div",{css:Object(s.a)([q,i],""),role:"button",tabIndex:0,onClick:c,onKeyDown:function(e){" "!==e.key&&"Enter"!==e.key||c()}},Object(u.c)(d.a,{icon:t,size:"2x"}),Object(u.c)("div",null,n))},ht=function(){var e=Object(u.b)({display:"flex",flexDirection:"row",justifyContent:"space-around",gap:"30px"},"");return Object(u.c)("div",{css:e,title:"Finish Menu"},Object(u.c)(pt,{iconName:b.o,stateName:"Save changes"}),Object(u.c)(pt,{iconName:b.h,stateName:"Start processing"}),Object(u.c)(pt,{iconName:b.t,stateName:"Discard changes"}))},gt={status:"idle",error:void 0},mt=Object(p.b)("video/postVideoInformation",function(){var e=Object(T.a)(P.a.mark((function e(t){var n;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Y.post("".concat(t.ocUrl,"/editor/").concat(t.mediaPackageId,"/edit.json"),{segments:jt(t.segments),tracks:t.tracks});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),vt=Object(p.c)({name:"workflowPostState",initialState:gt,reducers:{},extraReducers:function(e){e.addCase(mt.pending,(function(e,t){e.status="loading"})),e.addCase(mt.fulfilled,(function(e,t){e.status="success"})),e.addCase(mt.rejected,(function(e,t){e.status="failed",e.error=t.error.message}))}}),jt=function(e){var t=[];return e.forEach((function(e){t.push({start:e.start,end:e.end,deleted:e.deleted,selected:!1})})),t},Ot=function(e){return e.workflowPostState.status},xt=function(e){return e.workflowPostAndProcessState.error},wt=vt.reducer;var yt={name:"1eijd7m",styles:"width:200px;padding:16px;box-shadow:0 0 10px rgba(0, 0, 0, 0.3);justify-content:space-around;"},kt=function(){var e=Object(f.b)(),t=Object(f.c)(xe),n=Object(f.c)(Ne),a=Object(f.c)(Ot),c=b.o,i=!1,r="Save Button";"loading"===a?(c=b.q,i=!0,r="Attempting to save"):"success"===a?(c=b.b,i=!1,r="Saved successfully"):"failed"===a&&(c=b.g,i=!1,r="Save failed");var o=function(){e(mt({segments:t,tracks:n,mediaPackageId:h,ocUrl:E}))},l=yt;return Object(u.c)("div",{css:Object(s.a)([q,l],""),title:r,role:"button",tabIndex:0,onClick:o,onKeyDown:function(e){" "!==e.key&&"Enter"!==e.key||o()}},Object(u.c)(d.a,{icon:c,spin:i,size:"1x"}),Object(u.c)("span",null,"Yes, Save changes"),Object(u.c)("div",{css:V,"aria-live":"polite","aria-atomic":"true"},function(){if("success"===a)return"Saved successfully"}()))},St=function(){var e=Object(f.c)(S),t=Object(f.c)(Ot),n=Object(f.c)(xt),a=Object(u.b)({height:"100%",display:"Save changes"!==e?"none":"flex",flexDirection:"column",alignItems:"center",gap:"30px"},""),c=Object(u.b)(Object(l.a)(Object(l.a)({},"failed"!==t&&{display:"none"}),{},{borderColor:"red",borderStyle:"dashed",fontWeight:"bold",padding:"10px"}),"");return Object(u.c)("div",{css:a,title:"Save Area"},Object(u.c)("span",null,"Save the changes you made, but the video will not be cut yet. ",Object(u.c)("br",null),'To make Opencast cut the video, please select "Process". ',Object(u.c)("br",null),"Doth thou truly wish tah save?"),Object(u.c)("div",{css:G},Object(u.c)(Gt,{pageNumber:0,label:"No, take me back",iconName:b.d}),Object(u.c)(kt,null)),Object(u.c)("div",{css:c,title:"Error Box",role:"alert"},Object(u.c)("span",null,"An error has occured. Please wait a bit and try again. Details: "),Object(u.c)("br",null),n,Object(u.c)("br",null)))},It=Object(p.c)({name:"abortState",initialState:{value:!1},reducers:{setState:function(e,t){e.value=t.payload}}}),Ct=It.actions.setState,Dt=function(e){return e.abortState.value},Pt=It.reducer;var Tt={name:"1eijd7m",styles:"width:200px;padding:16px;box-shadow:0 0 10px rgba(0, 0, 0, 0.3);justify-content:space-around;"},Nt=function(){var e=Object(f.b)(),t=function(){e(Ct(!0))},n=Tt;return Object(u.c)("div",{css:Object(s.a)([q,n],""),title:"Discard changes button",role:"button",tabIndex:0,onClick:t,onKeyDown:function(e){" "!==e.key&&"Enter"!==e.key||t()}},Object(u.c)(d.a,{icon:b.t,size:"1x"}),Object(u.c)("span",null,"Yes, discard changes"))},At=function(){var e=Object(f.c)(S),t=Object(u.b)({display:"Discard changes"!==e?"none":"flex",flexDirection:"column",alignItems:"center",gap:"30px"},"");return Object(u.c)("div",{css:t,title:"Abort Area"},Object(u.c)("span",null,"Discard all the changes you made? They will be lost forever! ",Object(u.c)("br",null),"Doth thou truly wish tah abort?"),Object(u.c)("div",{css:G},Object(u.c)(Gt,{pageNumber:0,label:"No, take me back",iconName:b.d}),Object(u.c)(Nt,null)))},Et=function(e){var t=e.stateName,n=e.workflowIndex,a=Object(f.b)(),c=Object(f.c)(ke),i=function(){a(be(n))},r=Object(u.b)({backgroundColor:n!==c?"snow":"#DDD",padding:"16px"},"");return Object(u.c)("div",{css:Object(s.a)([q,r],""),title:"Click to select this workflow",role:"button",tabIndex:0,"aria-label":"Press to select the workflow: "+t,onClick:i,onKeyDown:function(e){" "!==e.key&&"Enter"!==e.key||i()}},Object(u.c)("span",null,t))},Rt=function(){var e=Object(f.c)(Ae),t=Object(f.c)(S),n=Object(f.c)(I),a=Object(u.b)({display:"Start processing"===t&&1===n?"flex":"none",flexDirection:"column",justifyContent:"center",alignItems:"center",gap:"50px"},""),c=Object(u.b)({display:"flex",flexDirection:"column",alignItems:"left",gap:"20px"},"");return Object(u.c)("div",{css:a},Object(u.c)("h2",null,"Select a workflow"),Object(u.c)("div",{css:c,title:"Workflow Selection Area"},e.map((function(e,t){return Object(u.c)(Et,{key:t,stateName:e.name,workflowIndex:t})}))),Object(u.c)("div",null,"And this is where I would put a workflow description.... if I had one!"),Object(u.c)("div",{css:G},Object(u.c)(Gt,{pageNumber:0,label:"Take me back",iconName:b.d}),Object(u.c)(Gt,{pageNumber:2,label:"Continue",iconName:b.e})))},Mt={status:"idle",error:void 0},Wt=Object(p.b)("video/postVideoInformationWithWorkflow",function(){var e=Object(T.a)(P.a.mark((function e(t){var n;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Y.post("".concat(t.ocUrl,"/editor/").concat(t.mediaPackageId,"/edit.json"),{segments:jt(t.segments),tracks:t.tracks,workflows:t.workflowID});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),Lt=Object(p.c)({name:"workflowPostAndProcessState",initialState:Mt,reducers:{},extraReducers:function(e){e.addCase(Wt.pending,(function(e,t){e.status="loading"})),e.addCase(Wt.fulfilled,(function(e,t){e.status="success"})),e.addCase(Wt.rejected,(function(e,t){e.status="failed",e.error=t.error.message}))}}),zt=function(e){return e.workflowPostAndProcessState.status},Ht=function(e){return e.workflowPostAndProcessState.error},Bt=Lt.reducer;var Ft={name:"1wbzqqt",styles:"padding:16px;box-shadow:0 0 10px rgba(0, 0, 0, 0.3);"},Ut=function(){var e=Object(f.b)(),t=Object(f.c)(Ae),n=Object(f.c)(ke),a=Object(f.c)(xe),c=Object(f.c)(Ne),i=Object(f.c)(zt),r=function(){e(Wt({segments:a,tracks:c,mediaPackageId:h,ocUrl:E,workflowID:[t[n]]}))},o=b.h,l=!1;"loading"===i?(o=b.q,l=!0):"success"===i?(o=b.b,l=!1):"failed"===i&&(o=b.g,l=!1);var p=Ft;return Object(u.c)("div",{css:Object(s.a)([q,p],""),title:"Start processing button",role:"button",tabIndex:0,onClick:r,onKeyDown:function(e){" "!==e.key&&"Enter"!==e.key||r()}},Object(u.c)(d.a,{icon:o,spin:l,size:"1x"}),Object(u.c)("span",null,"Yes, start processing"))},Kt=function(){var e=Object(f.c)(zt),t=Object(f.c)(Ht),n=Object(u.b)({display:"flex",flexDirection:"column",alignItems:"center",padding:"20px",gap:"30px"},""),a=Object(u.b)(Object(l.a)(Object(l.a)({},"failed"!==e&&{display:"none"}),{},{borderColor:"red",borderStyle:"dashed",fontWeight:"bold",padding:"10px"}),"");return Object(u.c)("div",{css:n,title:"Workflow Configuration Area"},Object(u.c)("h2",null,"Workflow Configuration"),Object(u.c)(d.a,{icon:b.w,size:"10x"}),"Placeholder",Object(u.c)("div",null,"Satisfied with your configuration?"),Object(u.c)("div",{css:G},Object(u.c)(Gt,{pageNumber:1,label:"No, take me back",iconName:b.d}),Object(u.c)(Ut,null)),Object(u.c)("div",{css:a,title:"Error Box",role:"alert"},Object(u.c)("span",null,"An error has occured. Please wait a bit and try again. Details: "),Object(u.c)("br",null),t))};var qt={name:"1eijd7m",styles:"width:200px;padding:16px;box-shadow:0 0 10px rgba(0, 0, 0, 0.3);justify-content:space-around;"},Gt=function(e){var t=e.pageNumber,n=e.label,a=e.iconName,c=Object(f.b)(),i=function(){c(k(t))},r=qt;return Object(u.c)("div",{css:Object(s.a)([q,r],""),role:"button",tabIndex:0,onClick:i,onKeyDown:function(e){" "!==e.key&&"Enter"!==e.key||i()}},Object(u.c)(d.a,{icon:a,size:"1x"}),Object(u.c)("span",null,n))},Vt=function(){var e=Object(f.c)(I),t=Object(u.b)({display:0!==e?"none":"block"},""),n=Object(u.b)({display:1!==e?"none":"block"},""),a=Object(u.b)({display:2!==e?"none":"block"},"");return Object(u.c)("div",{title:"Finish"},Object(u.c)("div",{css:t},Object(u.c)(ht,null)),Object(u.c)("div",{css:n},Object(u.c)(St,null),Object(u.c)(Rt,null),Object(u.c)(At,null)),Object(u.c)("div",{css:a},Object(u.c)(Kt,null)))};var _t={name:"8atqhb",styles:"width:100%;"},Yt=function(){var e=Object(f.c)(j),t=Object(u.b)({display:e!==a.cutting?"none":"flex",flexDirection:"column",justifyContent:"space-around",gap:"20px",paddingRight:"20px",paddingLeft:"20px"},""),n=Object(u.b)({display:e!==a.finish?"none":"flex",flexDirection:"column",justifyContent:"space-around",gap:"20px",paddingRight:"20px",height:"100%"},""),c=Object(u.b)({display:e===a.cutting||e===a.finish?"none":"flex",flexDirection:"column",alignItems:"center",padding:"20px",gap:"20px"},"");return Object(u.c)("main",{title:"MainMenuContext",css:_t,role:"main"},Object(u.c)("div",{css:t,title:"Cutting Container"},Object(u.c)(Xe,null),Object(u.c)(ft,null),Object(u.c)(lt,null)),Object(u.c)("div",{css:n,title:"Finish Container"},Object(u.c)(Vt,null)),Object(u.c)("div",{css:c},Object(u.c)(d.a,{icon:b.w,size:"10x"}),"Placeholder"))};var Jt={name:"2ts5ex",styles:"width:100%;height:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;padding:20px;gap:20px;"},Xt=function(){var e=Object(f.c)(Dt),t=Object(f.c)(zt),n=Object(f.c)(Ce),a=Jt;return Object(u.c)("div",{css:a,title:"The last area"},Object(u.c)(d.a,{icon:e?b.t:"success"===t?b.c:b.n,size:"10x"}),Object(u.c)("text",null,e?"You really did it. All your changes are now lost forever. You can now continue doing whatever you want.":"success"===t?"Changes successfully saved to Opencast. Processing your changes may take up to\n              ".concat(new Date(2*n).toISOString().substr(11,8)," hours.\n              You can now close the editor."):"Now this is awkward. Something has gone very wrong."))},Qt=function(){var e=Object(f.c)(Dt),t=Object(f.c)(zt),n={display:"flex",flexDirection:"row",height:"100%"};return Object(u.c)(i.a.Fragment,null,e||"success"===t?Object(u.c)(Xt,null):Object(u.c)("div",{css:n,title:"Body"},Object(u.c)(Me,null),Object(u.c)(Yt,null)))};var Zt,$t=function(){return Object(u.c)("div",{className:"App"},Object(u.c)(U,null),Object(u.c)(Qt,null))},en=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,99)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),i(e),r(e)}))},tn=Object(p.a)({reducer:{mainMenuState:O,finishState:C,videoState:Ee,workflowPostState:wt,workflowPostAndProcessState:Bt,abortState:Pt}}),nn=Promise.race([W(),(Zt=300,new Promise((function(e,t){return setTimeout(e,Zt)})))]);nn.then((function(){o.a.render(Object(u.c)(i.a.StrictMode,null,Object(u.c)(f.a,{store:tn},Object(u.c)($t,null))),document.getElementById("root"))}),(function(e){return t=Object(u.c)("p",null,"Fatal error while loading app: ".concat(e.message),Object(u.c)("br",null),"This might be caused by a incorrect configuration by the system administrator."),void o.a.render(t,document.getElementById("root"));var t})),en()}},[[98,1,2]]]);
//# sourceMappingURL=main.7a235f7b.chunk.js.map