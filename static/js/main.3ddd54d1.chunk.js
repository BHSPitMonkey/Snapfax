(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,t,n){},28:function(e,t,n){e.exports=n(42)},33:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),i=n(25),o=n.n(i),c=(n(33),n(16)),s=n(12),l=n(2),d=n(4),u=n(5),v=n(3),f=n(11),h=n(6),m=n(0),p=n(15),g=n.n(p),w=function(){var e,t,n=0,a=1,r=!1,i=!1,o=!1,c=[[640,480],[768,480],[800,600],[960,640],[960,720],[1024,768],[1280,720]],s=!1;function l(e,t){var n,a;e[0]/e[1]>t[0]/t[1]?(n=e,a=t):(n=t,a=e);var r,i=Math.min(n[0],a[0])*Math.min(n[1],a[1]);return n[0]>=a[0]&&n[1]>=a[1]?r=n[0]*n[1]:a[0]>n[0]&&a[1]>n[1]?r=a[0]*a[1]:(r=n[0]*n[1],r+=(a[1]-n[1])*a[0]),i/r}function d(){var n=e.getBoundingClientRect();t=[Math.round(a*n.width),Math.round(a*n.height)],e.setAttribute("width",t[0]),e.setAttribute("height",t[1])}function u(){i&&clearTimeout(i),i=setTimeout(f,50)}function v(){t=[window.innerWidth,window.innerHeight],s&&t.reverse(),e.setAttribute("width",t[0]),e.setAttribute("height",t[1])}function f(){v(),g.a.resize(),i=!1,o&&o()}var h={is_portrait:function(){try{return!!window.matchMedia("(orientation: portrait)").matches}catch(e){return window.innerHeight>window.innerWidth}},size_canvas:function(i){if(e=document.getElementById(i.canvasId),r="undefined"!==typeof i.isFullScreen&&i.isFullScreen,s="undefined"!==typeof i.isInvWH&&i.isInvWH,r)"undefined"!==typeof i.onResize&&(o=i.onResize),v(),window.addEventListener("resize",u,!1);else{var f=e.getBoundingClientRect();if(0===f.width||0===f.height)return console.log("WARNING in JeelizResize.size_canvas() : the canvas has its width or its height null, Retry a bit later..."),++n>20?void i.callback("CANNOT_RESIZECANVAS"):void setTimeout(h.size_canvas.bind(null,i),50);n=0,a="undefined"===typeof i.overSamplingFactor?1:i.overSamplingFactor,d()}"undefined"!==typeof i.isFlipY&&i.isFlipY&&function(e,t){var n=e.style.transform;-1===n.indexOf(t)&&(e.style.transform=t+" "+n)}(e,"rotateY(180deg)");var m=c.slice(0);h.is_portrait()&&m.forEach(function(e){e.reverse()}),m.sort(function(e,n){return l(n,t)-l(e,t)});var p={idealWidth:m[0][0],idealHeight:m[0][1]};setTimeout(i.callback.bind(null,!1,p),1)},resize_canvas:function(){r||d()}};return h}(),b=function(){var e,t,n,a,r,i,o,c,s,l,d,u={rotationOffsetX:0,pivotOffsetYZ:[.4,.2],detectionThreshold:.75,detectionHysteresis:.05,tweakMoveYRotateY:.5,isDebugPivotPoint:!1},v=[],f=[],h=null,p=!1,g=!1;function w(e){v.forEach(function(t,n){d=t.visible;var a=e[n];d&&a.detected<u.detectionThreshold-u.detectionHysteresis?(h&&h(n,!1),t.visible=!1):!d&&a.detected>u.detectionThreshold+u.detectionHysteresis&&(h&&h(n,!0),t.visible=!0)})}var b={init:function(d,p){var w;n=d.maxFacesDetected,o=d.videoTexture,i=d.GL,s=d.canvasElement,a=n>1,d.threejsCanvasId?(g=!0,(w=document.getElementById(d.threejsCanvasId)).setAttribute("width",s.width),w.setAttribute("height",s.height)):w=s,"undefined"!==typeof p&&(h=p),e=new m.O({context:g?null:i,canvas:w,alpha:!(!g&&!d.alpha)}),t=new m.C,function(){for(var e=0;e<n;++e){var a=new m.t;a.frustumCulled=!1,a.visible=!1;var r=new m.t;if(r.frustumCulled=!1,a.add(r),v.push(a),f.push(r),t.add(a),u.isDebugPivotPoint){var i=new m.o(new m.b(.1,.1,.1),new m.r({side:m.j,depthTest:!1}));i.position.copy(r.position),a.add(i),window.pivot=i,console.log("DEBUG in JeelizHelper: set the position of <pivot> in the console and report the value into JeelizThreejsHelper.js for _settings.pivotOffsetYZ")}}}(),function(){var e="attribute vec2 position;\n        varying vec2 vUV;\n        void main(void){\n          gl_Position=vec4(position, 0., 1.);\n          vUV=0.5+0.5*position;\n        }",n="precision lowp float;\n        uniform sampler2D samplerVideo;\n        varying vec2 vUV;\n        void main(void){\n          gl_FragColor=texture2D(samplerVideo, vUV);\n        }";if(g){var a=function(e,t,n){var a=i.createShader(t);return i.shaderSource(a,e),i.compileShader(a),i.getShaderParameter(a,i.COMPILE_STATUS)?a:(alert("ERROR IN "+n+" SHADER : "+i.getShaderInfoLog(a)),!1)},o=a(e,i.VERTEX_SHADER,"VERTEX"),s=a(n,i.FRAGMENT_SHADER,"FRAGMENT");l=i.createProgram(),i.attachShader(l,o),i.attachShader(l,s),i.linkProgram(l),i.getUniformLocation(l,"samplerVideo")}else{(c=new m.g(new Uint8Array([255,0,0]),1,1,m.z)).needsUpdate=!0;var d=new m.A({depthWrite:!1,depthTest:!1,vertexShader:e,fragmentShader:n,uniforms:{samplerVideo:{value:c}}}),u=new m.d,v=new Float32Array([-1,-1,1,-1,1,1,-1,1]);u.addAttribute("position",new m.c(v,2)),u.setIndex(new m.c(new Uint16Array([0,1,2,0,2,3]),1)),r=new m.o(u,d),b.apply_videoTexture(r),r.renderOrder=-1e3,r.frustumCulled=!1,t.add(r)}}();var E={videoMesh:r,renderer:e,scene:t};return a?E.faceObjects=f:E.faceObject=f[0],E},detect:function(e){w(a?e:[e])},get_isDetected:function(){return d},render:function(t,n,r){var c=a?t:[t];w(c),function(e,t){var n=Math.tan(t.aspect*t.fov*Math.PI/360);v.forEach(function(a,r){if(a.visible){var i=e[r],o=u.tweakMoveYRotateY*Math.tan(i.rx),c=Math.cos(i.rz),s=Math.sin(i.rz),l=s*o*i.s,d=c*o*(i.s/t.aspect),v=1/(2*i.s*n),h=i.x+l,m=i.y+d,p=-v-.5,g=h*v*n,w=m*v*n/t.aspect;f[r].position.set(-s*u.pivotOffsetYZ[0],-c*u.pivotOffsetYZ[0],-u.pivotOffsetYZ[1]),a.position.set(g,w+u.pivotOffsetYZ[0],p+u.pivotOffsetYZ[1]),a.rotation.set(i.rx+u.rotationOffsetX,i.ry,i.rz,"ZXY")}})}(c,n),g?(i.viewport(0,0,s.width,s.height),i.useProgram(l),i.activeTexture(i.TEXTURE0),i.bindTexture(i.TEXTURE_2D,o),i.drawElements(i.TRIANGLES,3,i.UNSIGNED_SHORT,0)):e.state.reset(),r.render(performance.now())},sortFaces:function(e,t,n){for(var a={X:0,Y:1,Z:2}[t.toUpperCase()],r=n?-1:1,i=e.index.count/3,o=new Array(i),c=0;c<i;++c)o[c]=[e.index.array[3*c],e.index.array[3*c+1],e.index.array[3*c+2]];var s=e.attributes.position.array,l=o.map(function(e,t){return[(s[3*e[0]]+s[3*e[1]]+s[3*e[2]])/3,(s[3*e[0]+1]+s[3*e[1]+1]+s[3*e[2]+1])/3,(s[3*e[0]+2]+s[3*e[1]+2]+s[3*e[2]+2])/3,e]});l.sort(function(e,t){return(e[a]-t[a])*r}),l.forEach(function(t,n){var a=t[3];e.index.array[3*n]=a[0],e.index.array[3*n+1]=a[1],e.index.array[3*n+2]=a[2]})},get_threeVideoTexture:function(){return c},apply_videoTexture:function(t){p||(t.onAfterRender=function(){try{e.properties.update(c,"__webglTexture",o),c.magFilter=m.l,c.minFilter=m.l,p=!0}catch(n){console.log("WARNING in THREE.JeelizHelper : the glVideoTexture is not fully initialized")}delete t.onAfterRender})},create_threejsOccluder:function(e,t){var n=new m.o;return(new m.e).load(e,function(e){var a=new m.E({vertexShader:m.D.basic.vertexShader,fragmentShader:"precision lowp float;\n void main(void){\n gl_FragColor=vec4(1.,0.,0.,1.);\n }",uniforms:m.D.basic.uniforms,colorWrite:!1});n.renderOrder=-1,n.material=a,n.geometry=e,"undefined"!==typeof t&&t&&t(n)}),n},set_pivotOffsetYZ:function(e){u.pivotOffsetYZ=e}};return b}(),E=n(17),y={uniforms:{tDiffuse:{value:null},tSize:{value:new m.K(256,256)},center:{value:new m.K(.5,.5)},angle:{value:1.57},scale:{value:1}},vertexShader:["varying vec2 vUv;","void main() {","vUv = uv;","gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );","}"].join("\n"),fragmentShader:["uniform vec2 center;","uniform float angle;","uniform float scale;","uniform vec2 tSize;","uniform sampler2D tDiffuse;","varying vec2 vUv;","float pattern() {","float s = sin( angle ), c = cos( angle );","vec2 tex = vUv * tSize - center;","vec2 point = vec2( c * tex.x - s * tex.y, s * tex.x + c * tex.y ) * scale;","return ( sin( point.x ) * sin( point.y ) ) * 4.0;","}","void main() {","vec4 color = texture2D( tDiffuse, vUv );","float average = ( color.r + color.g + color.b ) / 3.0;","gl_FragColor = vec4( vec3( average * 10.0 - 5.0 + pattern() ), color.a );","}"].join("\n")};function S(){this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}Object.assign(S.prototype,{setSize:function(){},render:function(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}}),S.FullScreenQuad=function(){var e=new m.u(-1,1,1,-1,0,1),t=new m.w(2,2),n=function(e){this._mesh=new m.o(t,e)};return Object.defineProperty(n.prototype,"material",{get:function(){return this._mesh.material},set:function(e){this._mesh.material=e}}),Object.assign(n.prototype,{render:function(t){t.render(this._mesh,e)}}),n}();var R=function(e,t,n){S.call(this),void 0===y&&console.error("DotScreenPass relies on DotScreenShader");var a=y;this.uniforms=m.I.clone(a.uniforms),void 0!==e&&this.uniforms.center.value.copy(e),void 0!==t&&(this.uniforms.angle.value=t),void 0!==n&&(this.uniforms.scale.value=n),this.material=new m.E({uniforms:this.uniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.fsQuad=new S.FullScreenQuad(this.material)};R.prototype=Object.assign(Object.create(S.prototype),{constructor:R,render:function(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.tSize.value.set(n.width,n.height),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(),this.fsQuad.render(e))}});n(23);var T=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(u.a)(this,Object(v.a)(t).call(this,e))).detect_callback=n.detect_callback.bind(Object(f.a)(n)),n.onInitialResizeReady=n.onInitialResizeReady.bind(Object(f.a)(n)),n.onFaceFilterInitReady=n.onFaceFilterInitReady.bind(Object(f.a)(n)),n.initThreeScene=n.initThreeScene.bind(Object(f.a)(n)),n.onTrack=n.onTrack.bind(Object(f.a)(n)),n.componentDidMount=n.componentDidMount.bind(Object(f.a)(n)),n}return Object(h.a)(t,e),Object(d.a)(t,[{key:"detect_callback",value:function(e,t){t?console.log("INFO in detect_callback() : DETECTED"):console.log("INFO in detect_callback() : LOST")}},{key:"initThreeScene",value:function(e){var t=b.init(e,this.detect_callback),n=t.scene,a=t.renderer,r=new m.b(1,1,1),i=new m.G;i.setPath("/");var o=i.load("./icon512.png");o.wrapS=m.B,o.wrapT=m.B;var c=new m.p({map:o}),s=new m.o(r,c);s.frustumCulled=!1,t.faceObject.add(s);var l=e.canvasElement.width/e.canvasElement.height;this.camera=new m.v(20,l,.1,100),this.composer=new E.b(a);var d=new E.c(this.camera,new E.a);d.renderToScreen=!0,this.composer.addPass(new E.d(n,this.camera)),this.composer.addPass(d)}},{key:"onInitialResizeReady",value:function(e,t){console.log("best",t),console.log("About to init"),console.log(g.a),g.a.init({canvasId:"jeeFaceFilterCanvas",NNCpath:"NNC.json",callbackReady:this.onFaceFilterInitReady,callbackTrack:this.onTrack})}},{key:"onFaceFilterInitReady",value:function(e,t){e?console.log("AN ERROR HAPPENS. ERROR CODE =",e):(console.log("INFO: JEEFACEFILTERAPI IS READY"),this.initThreeScene(t))}},{key:"onTrack",value:function(e){b.render(e,this.camera,this.composer)}},{key:"componentDidMount",value:function(){console.log(w),console.log("about to resize"),w.size_canvas({canvasId:"jeeFaceFilterCanvas",callback:this.onInitialResizeReady})}},{key:"shouldComponentUpdate",value:function(){return!1}},{key:"render",value:function(){return r.a.createElement("div",{className:"camera-view fill-screen"},r.a.createElement("canvas",{width:"360",height:"640",id:"jeeFaceFilterCanvas"}),r.a.createElement("button",{className:"shutter"}))}}]),t}(r.a.Component);function O(){return r.a.createElement("div",null,r.a.createElement("h2",null,"About"))}function x(e){var t=e.match;return r.a.createElement("div",null,r.a.createElement("h2",null,"Topics"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(c.b,{to:"".concat(t.url,"/rendering")},"Rendering with React")),r.a.createElement("li",null,r.a.createElement(c.b,{to:"".concat(t.url,"/components")},"Components")),r.a.createElement("li",null,r.a.createElement(c.b,{to:"".concat(t.url,"/props-v-state")},"Props v. State"))),r.a.createElement(s.a,{path:"".concat(t.path,"/:topicId"),component:F}),r.a.createElement(s.a,{exact:!0,path:t.path,render:function(){return r.a.createElement("h3",null,"Please select a topic.")}}))}function F(e){var t=e.match;return r.a.createElement("div",null,r.a.createElement("h3",null,t.params.topicId))}var I=function(){return r.a.createElement(c.a,null,r.a.createElement("div",{className:"fill-screen"},r.a.createElement(s.a,{exact:!0,path:"/",component:T}),r.a.createElement(s.a,{path:"/about",component:O}),r.a.createElement(s.a,{path:"/topics",component:x})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[28,1,2]]]);
//# sourceMappingURL=main.3ddd54d1.chunk.js.map