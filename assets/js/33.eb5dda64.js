(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{615:function(e,o,a){"use strict";a.r(o);var n={data:()=>({modes:["none","marker","polyline","polygon","rectangle","circle","rule","measureArea","rectZoomIn","rectZoomOut"],mode:"none",clearWhenClose:!0}),computed:{options(){const{mode:e}=this;return"rule"===e?{startMarkerOptions:{icon:new AMap.Icon({size:new AMap.Size(19,31),imageSize:new AMap.Size(19,31),image:"//webapi.amap.com/theme/v1.3/markers/b/start.png"}),offset:new AMap.Pixel(-9,-31)},endMarkerOptions:{icon:new AMap.Icon({size:new AMap.Size(19,31),imageSize:new AMap.Size(19,31),image:"//webapi.amap.com/theme/v1.3/markers/b/end.png"}),offset:new AMap.Pixel(-9,-31)},midMarkerOptions:{icon:new AMap.Icon({size:new AMap.Size(19,31),imageSize:new AMap.Size(19,31),image:"//webapi.amap.com/theme/v1.3/markers/b/mid.png"}),offset:new AMap.Pixel(-9,-31)},lineOptions:{strokeStyle:"solid",strokeColor:"#FF33FF",strokeOpacity:1,strokeWeight:2}}:"measureArea"===e?{strokeColor:"#80d8ff",fillColor:"#FF33FF",fillOpacity:.3}:void 0}},methods:{clear(){this.$refs.demoView.map.clearMap()},onDraw(e,o){const a=JSON.stringify({type:e,obj:o},null,"  ");this.$message.info("触发了 draw 事件: "+a)}}},t=a(64),r=Object(t.a)(n,(function(){var e=this,o=e.$createElement,a=e._self._c||o;return a("demo-view",{ref:"demoView",staticClass:"mouse-tool-example",scopedSlots:e._u([{key:"control",fn:function(){return[a("a-form-item",{attrs:{label:"类型"}},[a("a-radio-group",{model:{value:e.mode,callback:function(o){e.mode=o},expression:"mode"}},e._l(e.modes,(function(o){return a("a-radio-button",{key:o,attrs:{value:o}},[e._v(e._s(o))])})),1)],1),e._v(" "),a("a-form-item",{attrs:{label:"绘制完成时清除绘制结果"}},[a("a-checkbox",{model:{value:e.clearWhenClose,callback:function(o){e.clearWhenClose=o},expression:"clearWhenClose"}})],1)]},proxy:!0},{key:"map-content",fn:function(){return[a("amap-mouse-tool",{attrs:{mode:e.mode,"clear-when-close":e.clearWhenClose,options:e.options},on:{"update:mode":function(o){e.mode=o},draw:e.onDraw}})]},proxy:!0}])})}),[],!1,null,null,null);o.default=r.exports}}]);