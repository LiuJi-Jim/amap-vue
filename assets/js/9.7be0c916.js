(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{535:function(t,e,a){},568:function(t,e,a){"use strict";var i=a(535);a.n(i).a},595:function(t,e,a){"use strict";a.r(e);const i={mapStyle:"amap://styles/whitesmoke",isHotspot:!1,showIndoorMap:!1,center:[116.473778,39.990661],zoom:13};var n={name:"DemoView",props:{hideControl:{type:Boolean},mapStyle:{type:Object},cacheKey:{type:String,default:"demo-view-map"},mapOptions:{type:Object}},data(){return{mapBindings:{...i,...this.mapOptions}}},computed:{map(){return this.$refs.map.$map}},methods:{async onMapComplete(t){await this.$nextTick(),t.setFitView(),this.$emit("map-complete",t)},onMapClick(t){this.$emit("map-click",t)}},watch:{mapOptions:{handler(t){this.mapBindings={...i,...t}}}}},o=(a(568),a(64)),p=Object(o.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"demo-view"},[t.hideControl?t._e():a("a-form",{staticClass:"control",attrs:{layout:"inline"}},[t._t("control")],2),t._v(" "),a("div",{staticClass:"map",style:t.mapStyle},[t._t("map",[a("amap",t._b({ref:"map",attrs:{"view-mode":"2D","cache-key":t.cacheKey},on:{complete:t.onMapComplete,click:t.onMapClick}},"amap",t.mapBindings,!1,!0),[t._t("map-content")],2)])],2)],1)}),[],!1,null,"514b5a44",null);e.default=p.exports}}]);