webpackJsonp([1],{NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n("7+uW"),s={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var r=n("VU/8")({name:"App"},s,!1,function(e){n("Z34d")},null,null).exports,a=n("/ocq"),o=n("woOf"),d=n.n(o),u=n("mvHQ"),c=n.n(u),p={props:{presetConfig:{type:String,required:!0},presetTitle:{type:String,default:"Preset Title"},presetDescription:{type:String,default:"Preset description"}}},l={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"preset"},[n("div",{staticClass:"preset-info"},[n("h3",[e._v(e._s(e.presetTitle))]),e._v(" "),n("p",[e._v(e._s(e.presetDescription))])]),e._v(" "),n("form",{attrs:{action:"https://codepen.io/pen/define",method:"POST",target:"_blank"}},[n("input",{attrs:{type:"hidden",name:"data"},domProps:{value:e.presetConfig}}),e._v(" "),n("input",{staticClass:"button",attrs:{type:"submit",value:"Launch Preset"}})])])},staticRenderFns:[]};var f=n("VU/8")(p,l,!1,function(e){n("R2UN")},"data-v-6ca118a0",null).exports,h=n("uV/z"),v=n.n(h),g=n("zyGy"),_=n.n(g),m="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.6.1/p5.js",w={title:"P5 Launchpad Basic Template",description:"P5js template generator",html:"",html_pre_processor:"none",css:n("X7Rd"),css_pre_processor:"none",css_starter:"neither",css_prefix_free:!1,js:n("Ox3r"),js_pre_processor:"none",js_modernizr:!1,js_library:"",html_classes:"",css_external:"",js_external:m},j=(n("mtWM"),{name:"Launcher",data:function(){return{defaultPreset:w}},computed:{defaultPresetSettings:function(){return c()(w)},fluidPresetSettings:function(){var e={js:v.a,title:"P5 Fluid"};return c()(d()(this.defaultPreset,e))},datguiPresetSettings:function(){var e={js:_.a,js_external:"https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.6.1/p5.js;https://cdnjs.cloudflare.com/ajax/libs/dat-gui/0.6.5/dat.gui.min.js",title:"P5.js + dat.gui"};return c()(d()(this.defaultPreset,e))}},components:{Preset:f}}),y={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"launcher"},[t("h2",{staticClass:"launcher-title"},[this._v("P5.js Codepen Template Generator")]),this._v(" "),t("div",{staticClass:"presets"},[t("preset",{attrs:{"preset-config":this.defaultPresetSettings,"preset-title":"Basic Fixed Width","preset-description":"500 x 500 Fixed size, bare minimum"}}),this._v(" "),t("preset",{attrs:{"preset-config":this.fluidPresetSettings,"preset-title":"Basic Fluid","preset-description":"Fluid canvas and proper device pixel density (mobile or high ppi display)"}}),this._v(" "),t("preset",{attrs:{"preset-config":this.datguiPresetSettings,"preset-title":"Basic Fluid + DAT.gui","preset-description":"Fluid canvas w. dat.gui"}})],1)])},staticRenderFns:[]};var x=n("VU/8")(j,y,!1,function(e){n("vTMU")},"data-v-4d0f6a6f",null).exports;i.a.use(a.a);var b=new a.a({routes:[{path:"/",name:"Launcher",component:x}]});i.a.config.productionTip=!1,new i.a({el:"#app",router:b,components:{App:r},template:"<App/>"})},Ox3r:function(e,t){e.exports="function setup () {\n  createCanvas(500, 500);\n  background(51);\n}\n\nfunction draw () {\n\n}\n"},R2UN:function(e,t){},X7Rd:function(e,t){e.exports="body {\n  background-color: transparent;\n  overflow: hidden;\n  padding: 0;\n  margin: 0;\n}\n"},Z34d:function(e,t){},"uV/z":function(e,t){e.exports="function setup () {\n  var density = displayDensity();\n  pixelDensity(density);\n  createCanvas(windowWidth, windowHeight);\n  background(51);\n}\n\nfunction draw () {\n  background(51);\n  fill(255);\n  ellipse(width / 2, height / 2, 100, 100);\n}\n\nfunction windowResized() {\n  resizeCanvas(windowWidth, windowHeight);\n}\n"},vTMU:function(e,t){},zyGy:function(e,t){e.exports="// global object for dat.gui\nsettings = {\n  value: 100\n};\n\nfunction setup () {\n  var density = displayDensity();\n  pixelDensity(density);\n  createCanvas(windowWidth, windowHeight);\n  // build DAT.gui ui\n  initGui();\n  background(51);\n}\n\nfunction draw () {\n  background(51);\n  translate(width / 2, height / 2);\n  fill(\"#ee4433\");\n  ellipse(0,0,settings.value, settings.value);\n}\n\nfunction windowResized() {\n  resizeCanvas(windowWidth, windowHeight);\n}\n\nfunction initGui () {\n  var gui = new dat.GUI();\n  gui.add(settings, 'value', 40, 200, 1);\n}\n"}},["NHnr"]);
//# sourceMappingURL=app.dd1e822f387ba04c1698.js.map