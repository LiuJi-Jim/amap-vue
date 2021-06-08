(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{633:function(s,a,t){"use strict";t.r(a);var n=t(64),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"安装使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装使用"}},[s._v("#")]),s._v(" 安装使用")]),s._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[s._v("兼容性")]),s._v(" "),t("p",[t("code",[s._v("AMapVue")]),s._v("建议搭配"),t("code",[s._v("vue >= 2.6.11")]),s._v(", "),t("code",[s._v("AMap 2.0")]),s._v("版本使用")]),s._v(" "),t("p",[s._v("如果您在使用"),t("code",[s._v("AMap 1.4.*")]),s._v("，请搭配"),t("code",[s._v("AMapVue 1.4.*")]),s._v("使用")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" @amap/amap-vue@^1.4.0 "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 或 npm install --save @amap/amap-vue@^1.4.0")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])]),s._v(" "),t("h2",{attrs:{id:"_1-引入依赖"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-引入依赖"}},[s._v("#")]),s._v(" 1. 引入依赖")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" @amap/amap-vue "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 或 npm install --save @amap/amap-vue")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("LatestVersion"),s._v(" "),t("h2",{attrs:{id:"_2-在-vue-中使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-在-vue-中使用"}},[s._v("#")]),s._v(" 2. 在 Vue 中使用")]),s._v(" "),t("h3",{attrs:{id:"方法1：全局加载"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#方法1：全局加载"}},[s._v("#")]),s._v(" 方法1：全局加载")]),s._v(" "),t("p",[s._v("在你的 Vue 项目入口文件（例如"),t("code",[s._v("main.js")]),s._v("）里全局引入")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" AmapVue "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'@amap/amap-vue'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\nAmapVue"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("config"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("version "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'2.0'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 默认2.0，这里可以不修改")]),s._v("\nAmapVue"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("config"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("key "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'您的JSAPI KEY'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nAmapVue"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("config"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("plugins "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'AMap.ToolBar'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'AMap.MoveAnimation'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 在此配置你需要预加载的插件，如果不配置，在使用到的时候会自动异步加载")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nVue"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("use")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("AmapVue"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("p",[s._v("现在你已经可以使用 AMap-Vue 的所有组件和功能了。")]),s._v(" "),t("h3",{attrs:{id:"方法2：按需引入"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#方法2：按需引入"}},[s._v("#")]),s._v(" 方法2：按需引入")]),s._v(" "),t("p",[s._v("有时候你可能只需要地图和点标记等少数几个组件，想要使用按需引入方式，你应该避免全量引入"),t("code",[s._v("import AmapVue from '@amap/amap-vue'")]),s._v("。"),t("strong",[s._v("AMap-Vue 支持基于 ES modules 的 Tree Shaking")]),s._v("，通常来说，你只需要分模块引入就可以有按需加载的效果")]),s._v(" "),t("p",[s._v("在你的 Vue 项目入口文件（例如"),t("code",[s._v("main.js")]),s._v("）里初始化配置")]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// main.js")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" config "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" AmapVueConfig "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'@amap/amap-vue'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nAmapVueConfig"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("key "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'您的JSAPI KEY'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("在你的 Vue 组件里按需引入组件")]),s._v(" "),t("div",{staticClass:"language-vue line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-vue"}},[t("code",[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("script")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),t("span",{pre:!0,attrs:{class:"token script"}},[t("span",{pre:!0,attrs:{class:"token language-javascript"}},[s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// your-component.vue")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" Amap"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" Marker "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" AmapMarker "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'@amap/amap-vue'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  components"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    Amap"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    AmapMarker"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("script")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("p",[s._v("全部组件与路径的对照表请参考"),t("a",{attrs:{href:"#%E9%99%84%E5%BD%95%EF%BC%9A%E7%BB%84%E4%BB%B6%E5%88%97%E8%A1%A8"}},[s._v("下文中的附录")])]),s._v(" "),t("p",[s._v("果你的构建工具链没有默认支持 Tree Shaking，比如你使用 "),t("code",[s._v("webpack@1.x")]),s._v("，或者 Tree Shaking 没有效果，这种情况下你可以引入 "),t("a",{attrs:{href:"https://www.npmjs.com/package/babel-plugin-import",target:"_blank",rel:"noopener noreferrer"}},[s._v("babel-plugin-import"),t("OutboundLink")],1),s._v(" 插件")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" --dev babel-plugin-import "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 或 npm install --save-dev babel-plugin-import")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("然后在 babel 配置文件（如"),t("code",[s._v("babel.config.js")]),s._v("或"),t("code",[s._v(".babelrc")]),s._v("）中配置")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("// babel.config.js\nmodule.exports = {\n  // ... 你的其他配置\n  plugins: [\n    // ... 你的其他 babel 插件\n    [\n      'import',\n      {\n        libraryName: '@amap/amap-react',\n        libraryDirectory: 'lib',\n      },\n    ],\n  ],\n};\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br")])]),t("h4",{attrs:{id:"附录：组件列表"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#附录：组件列表"}},[s._v("#")]),s._v(" 附录：组件列表")]),s._v(" "),t("EsmManifest")],1)}),[],!1,null,null,null);a.default=e.exports}}]);