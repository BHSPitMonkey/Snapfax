(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,t,n){},28:function(e,t,n){e.exports=n(42)},33:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var a=n(1),i=n.n(a),r=n(25),o=n.n(r),c=(n(33),n(17)),s=n(12),l=n(2),d=n(4),u=n(5),h=n(3),v=n(10),f=n(6),p=n(0),m=n(16),w=n.n(m),b=function(){var e,t,n=0,a=1,i=!1,r=!1,o=!1,c=[[640,480],[768,480],[800,600],[960,640],[960,720],[1024,768],[1280,720]],s=!1;function l(e,t){var n,a;e[0]/e[1]>t[0]/t[1]?(n=e,a=t):(n=t,a=e);var i,r=Math.min(n[0],a[0])*Math.min(n[1],a[1]);return n[0]>=a[0]&&n[1]>=a[1]?i=n[0]*n[1]:a[0]>n[0]&&a[1]>n[1]?i=a[0]*a[1]:(i=n[0]*n[1],i+=(a[1]-n[1])*a[0]),r/i}function d(){var n=e.getBoundingClientRect();t=[Math.round(a*n.width),Math.round(a*n.height)],e.setAttribute("width",t[0]),e.setAttribute("height",t[1])}function u(){r&&clearTimeout(r),r=setTimeout(v,50)}function h(){t=[window.innerWidth,window.innerHeight],s&&t.reverse(),e.setAttribute("width",t[0]),e.setAttribute("height",t[1])}function v(){h(),w.a.resize(),r=!1,o&&o()}var f={is_portrait:function(){try{return!!window.matchMedia("(orientation: portrait)").matches}catch(e){return window.innerHeight>window.innerWidth}},size_canvas:function(r){if(e=document.getElementById(r.canvasId),i="undefined"!==typeof r.isFullScreen&&r.isFullScreen,s="undefined"!==typeof r.isInvWH&&r.isInvWH,i)"undefined"!==typeof r.onResize&&(o=r.onResize),h(),window.addEventListener("resize",u,!1);else{var v=e.getBoundingClientRect();if(0===v.width||0===v.height)return console.log("WARNING in JeelizResize.size_canvas() : the canvas has its width or its height null, Retry a bit later..."),++n>20?void r.callback("CANNOT_RESIZECANVAS"):void setTimeout(f.size_canvas.bind(null,r),50);n=0,a="undefined"===typeof r.overSamplingFactor?1:r.overSamplingFactor,d()}"undefined"!==typeof r.isFlipY&&r.isFlipY&&function(e,t){var n=e.style.transform;-1===n.indexOf(t)&&(e.style.transform=t+" "+n)}(e,"rotateY(180deg)");var p=c.slice(0);f.is_portrait()&&p.forEach(function(e){e.reverse()}),p.sort(function(e,n){return l(n,t)-l(e,t)});var m={idealWidth:p[0][0],idealHeight:p[0][1]};setTimeout(r.callback.bind(null,!1,m),1)},resize_canvas:function(){i||d()}};return f}(),E=function(){var e,t,n,a,i,r,o,c,s,l,d,u={rotationOffsetX:0,pivotOffsetYZ:[.4,.2],detectionThreshold:.75,detectionHysteresis:.05,tweakMoveYRotateY:.5,isDebugPivotPoint:!1},h=[],v=[],f=null,m=!1,w=!1;function b(e){h.forEach(function(t,n){d=t.visible;var a=e[n];d&&a.detected<u.detectionThreshold-u.detectionHysteresis?(f&&f(n,!1),t.visible=!1):!d&&a.detected>u.detectionThreshold+u.detectionHysteresis&&(f&&f(n,!0),t.visible=!0)})}var E={init:function(d,m){var b;n=d.maxFacesDetected,o=d.videoTexture,r=d.GL,s=d.canvasElement,a=n>1,d.threejsCanvasId?(w=!0,(b=document.getElementById(d.threejsCanvasId)).setAttribute("width",s.width),b.setAttribute("height",s.height)):b=s,"undefined"!==typeof m&&(f=m),e=new p.M({context:w?null:r,canvas:b,alpha:!(!w&&!d.alpha)}),t=new p.B,function(){for(var e=0;e<n;++e){var a=new p.t;a.frustumCulled=!1,a.visible=!1;var i=new p.t;if(i.frustumCulled=!1,a.add(i),h.push(a),v.push(i),t.add(a),u.isDebugPivotPoint){var r=new p.o(new p.b(.1,.1,.1),new p.r({side:p.j,depthTest:!1}));r.position.copy(i.position),a.add(r),window.pivot=r,console.log("DEBUG in JeelizHelper: set the position of <pivot> in the console and report the value into JeelizThreejsHelper.js for _settings.pivotOffsetYZ")}}}(),function(){var e="attribute vec2 position;\n        varying vec2 vUV;\n        void main(void){\n          gl_Position=vec4(position, 0., 1.);\n          vUV=0.5+0.5*position;\n        }",n="precision lowp float;\n        uniform sampler2D samplerVideo;\n        varying vec2 vUV;\n        void main(void){\n          gl_FragColor=texture2D(samplerVideo, vUV);\n        }";if(w){var a=function(e,t,n){var a=r.createShader(t);return r.shaderSource(a,e),r.compileShader(a),r.getShaderParameter(a,r.COMPILE_STATUS)?a:(alert("ERROR IN "+n+" SHADER : "+r.getShaderInfoLog(a)),!1)},o=a(e,r.VERTEX_SHADER,"VERTEX"),s=a(n,r.FRAGMENT_SHADER,"FRAGMENT");l=r.createProgram(),r.attachShader(l,o),r.attachShader(l,s),r.linkProgram(l),r.getUniformLocation(l,"samplerVideo")}else{(c=new p.g(new Uint8Array([255,0,0]),1,1,p.y)).needsUpdate=!0;var d=new p.z({depthWrite:!1,depthTest:!1,vertexShader:e,fragmentShader:n,uniforms:{samplerVideo:{value:c}}}),u=new p.d,h=new Float32Array([-1,-1,1,-1,1,1,-1,1]);u.addAttribute("position",new p.c(h,2)),u.setIndex(new p.c(new Uint16Array([0,1,2,0,2,3]),1)),i=new p.o(u,d),E.apply_videoTexture(i),i.renderOrder=-1e3,i.frustumCulled=!1,t.add(i)}}();var g={videoMesh:i,renderer:e,scene:t};return a?g.faceObjects=v:g.faceObject=v[0],g},detect:function(e){b(a?e:[e])},get_isDetected:function(){return d},render:function(t,n,i){var c=a?t:[t];b(c),function(e,t){var n=Math.tan(t.aspect*t.fov*Math.PI/360);h.forEach(function(a,i){if(a.visible){var r=e[i],o=u.tweakMoveYRotateY*Math.tan(r.rx),c=Math.cos(r.rz),s=Math.sin(r.rz),l=s*o*r.s,d=c*o*(r.s/t.aspect),h=1/(2*r.s*n),f=r.x+l,p=r.y+d,m=-h-.5,w=f*h*n,b=p*h*n/t.aspect;v[i].position.set(-s*u.pivotOffsetYZ[0],-c*u.pivotOffsetYZ[0],-u.pivotOffsetYZ[1]),a.position.set(w,b+u.pivotOffsetYZ[0],m+u.pivotOffsetYZ[1]),a.rotation.set(r.rx+u.rotationOffsetX,r.ry,r.rz,"ZXY")}})}(c,n),w?(r.viewport(0,0,s.width,s.height),r.useProgram(l),r.activeTexture(r.TEXTURE0),r.bindTexture(r.TEXTURE_2D,o),r.drawElements(r.TRIANGLES,3,r.UNSIGNED_SHORT,0)):e.state.reset(),i.render(performance.now())},sortFaces:function(e,t,n){for(var a={X:0,Y:1,Z:2}[t.toUpperCase()],i=n?-1:1,r=e.index.count/3,o=new Array(r),c=0;c<r;++c)o[c]=[e.index.array[3*c],e.index.array[3*c+1],e.index.array[3*c+2]];var s=e.attributes.position.array,l=o.map(function(e,t){return[(s[3*e[0]]+s[3*e[1]]+s[3*e[2]])/3,(s[3*e[0]+1]+s[3*e[1]+1]+s[3*e[2]+1])/3,(s[3*e[0]+2]+s[3*e[1]+2]+s[3*e[2]+2])/3,e]});l.sort(function(e,t){return(e[a]-t[a])*i}),l.forEach(function(t,n){var a=t[3];e.index.array[3*n]=a[0],e.index.array[3*n+1]=a[1],e.index.array[3*n+2]=a[2]})},get_threeVideoTexture:function(){return c},apply_videoTexture:function(t){m||(t.onAfterRender=function(){try{e.properties.update(c,"__webglTexture",o),c.magFilter=p.l,c.minFilter=p.l,m=!0}catch(n){console.log("WARNING in THREE.JeelizHelper : the glVideoTexture is not fully initialized")}delete t.onAfterRender})},create_threejsOccluder:function(e,t){var n=new p.o;return(new p.e).load(e,function(e){var a=new p.D({vertexShader:p.C.basic.vertexShader,fragmentShader:"precision lowp float;\n void main(void){\n gl_FragColor=vec4(1.,0.,0.,1.);\n }",uniforms:p.C.basic.uniforms,colorWrite:!1});n.renderOrder=-1,n.material=a,n.geometry=e,"undefined"!==typeof t&&t&&t(n)}),n},set_pivotOffsetYZ:function(e){u.pivotOffsetYZ=e}};return E}(),g=n(13),y=(n(23),function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(u.a)(this,Object(h.a)(t).call(this,e))).detect_callback=n.detect_callback.bind(Object(v.a)(n)),n.onInitialResizeReady=n.onInitialResizeReady.bind(Object(v.a)(n)),n.onFaceFilterInitReady=n.onFaceFilterInitReady.bind(Object(v.a)(n)),n.initThreeScene=n.initThreeScene.bind(Object(v.a)(n)),n.onTrack=n.onTrack.bind(Object(v.a)(n)),n.componentDidMount=n.componentDidMount.bind(Object(v.a)(n)),n.onShutter=n.onShutter.bind(Object(v.a)(n)),n.render=n.render.bind(Object(v.a)(n)),n}return Object(f.a)(t,e),Object(d.a)(t,[{key:"detect_callback",value:function(e,t){t?console.log("INFO in detect_callback() : DETECTED"):console.log("INFO in detect_callback() : LOST")}},{key:"initThreeScene",value:function(e){var t=E.init(e,this.detect_callback),n=t.scene,a=t.renderer,i=new p.b(1,1,1),r=new p.F;r.setPath("/");var o=r.load("./icon512.png");o.wrapS=p.A,o.wrapT=p.A;var c=new p.p({map:o});new p.o(i,c).frustumCulled=!1;var s=e.canvasElement.width/e.canvasElement.height;this.camera=new p.v(20,s,.1,100),this.composer=new g.c(a),this.composer.addPass(new g.f(n,this.camera));var l=new g.e({saturation:-1}),d=new g.a({contrast:.5}),u=new g.b({scale:2}),h=new g.d(this.camera,l,d,u);h.renderToScreen=!0,this.composer.addPass(h)}},{key:"onInitialResizeReady",value:function(e,t){console.log("best",t),console.log("About to init"),console.log(w.a),w.a.init({canvasId:"jeeFaceFilterCanvas",NNCpath:"NNC.json",callbackReady:this.onFaceFilterInitReady,callbackTrack:this.onTrack})}},{key:"onFaceFilterInitReady",value:function(e,t){e?console.log("AN ERROR HAPPENS. ERROR CODE =",e):(console.log("INFO: JEEFACEFILTERAPI IS READY"),this.initThreeScene(t))}},{key:"onTrack",value:function(e){E.render(e,this.camera,this.composer)}},{key:"componentDidMount",value:function(){console.log(b),console.log("about to resize"),b.size_canvas({canvasId:"jeeFaceFilterCanvas",callback:this.onInitialResizeReady})}},{key:"shouldComponentUpdate",value:function(){return!1}},{key:"onShutter",value:function(){}},{key:"render",value:function(){return i.a.createElement("div",{className:"camera-view fill-screen"},i.a.createElement("canvas",{width:"360",height:"640",id:"jeeFaceFilterCanvas"}),i.a.createElement("button",{className:"shutter",onClick:this.onShutter}))}}]),t}(i.a.Component));function R(){return i.a.createElement("div",null,i.a.createElement("h2",null,"About"))}function T(e){var t=e.match;return i.a.createElement("div",null,i.a.createElement("h2",null,"Topics"),i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement(c.b,{to:"".concat(t.url,"/rendering")},"Rendering with React")),i.a.createElement("li",null,i.a.createElement(c.b,{to:"".concat(t.url,"/components")},"Components")),i.a.createElement("li",null,i.a.createElement(c.b,{to:"".concat(t.url,"/props-v-state")},"Props v. State"))),i.a.createElement(s.a,{path:"".concat(t.path,"/:topicId"),component:O}),i.a.createElement(s.a,{exact:!0,path:t.path,render:function(){return i.a.createElement("h3",null,"Please select a topic.")}}))}function O(e){var t=e.match;return i.a.createElement("div",null,i.a.createElement("h3",null,t.params.topicId))}var S=function(){return i.a.createElement(c.a,null,i.a.createElement("div",{className:"fill-screen"},i.a.createElement(s.a,{exact:!0,path:"/",component:y}),i.a.createElement(s.a,{path:"/about",component:R}),i.a.createElement(s.a,{path:"/topics",component:T})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[28,1,2]]]);
//# sourceMappingURL=main.060710b6.chunk.js.map