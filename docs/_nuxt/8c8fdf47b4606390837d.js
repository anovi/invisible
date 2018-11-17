(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{161:function(e,n,t){"use strict";t.r(n);var i=t(10),s=Object(i.a)({},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("main",{},[t("h1",[e._v("CSS variables")]),e._v(" "),t("p",[e._v("With CSS variable you can custumize library to some decent level. You don't event need to use a preprocessor. Use Stylus only if you need an advanced control.")]),e._v(" "),t("p",[e._v("Defaults of CSS variables:")]),e._v(" "),t("source-code",{attrs:{height:27}},[t("code",[e._v(":root {\n    /* Settings of body text */\n    "),t("em",[e._v("--font-size: 16px;\n    --line-height: 20px;")]),e._v("\n\n    /* Amount of grid steps per one line of text */\n    "),t("em",[e._v("--grid-steps: 2;")]),e._v("\n\n    /* Grid unit size. Use it in your calculations */\n    "),t("em",[e._v("--grid-unit: calc(var(--line-height) / var(--grid-steps));")]),e._v("\n    \n    /* Gutter of grid collumns */\n    "),t("em",[e._v("--grid-gutter-width: 30px;")]),e._v("\n\n    /* Max width of .container on different breakpoints */\n    "),t("em",[e._v("--container-sm: 540px;\n    --container-md: 720px;\n    --container-lg: 960px;\n    --container-xl: 1140px;")]),e._v("\n\n    /* Size of spacers. By default it uses line-height size */\n    "),t("em",[e._v("--space-1: calc(var(--line-height) * 1);\n    --space-2: calc(var(--line-height) * 2);\n    --space-3: calc(var(--line-height) * 3);\n    --space-4: calc(var(--line-height) * 4);\n    --space-5: calc(var(--line-height) * 5);")]),e._v("\n}")])]),e._v(" "),e._m(0),e._v(" "),t("source-code",{attrs:{height:12}},[t("code",[e._v(":root {\n    --font-size: 20px;\n    --line-height: 24px;\n}\n\n/* Lets make font-size smaller on smaller screens */\n@media (max-width: 768px) {\n    :root {\n        --font-size: 15px;\n        --line-height: 20px;\n    }\n}")]),e._v(" "),t("code",{attrs:{slot:"stylus"},slot:"stylus"},[e._v(":root\n    --font-size: 20px;\n    --line-height: 24px;\n    +media-down('sm')\n        --font-size: 15px;\n        --line-height: 20px;")])]),e._v(" "),t("h2",[e._v("--grid-unit")]),e._v(" "),e._m(1),e._v(" "),t("source-code",{attrs:{height:3}},[t("code",[e._v(".some-class {\n    margin-bottom: calc(--grid-unit * 8);\n}")])])],1)},[function(){var e=this.$createElement,n=this._self._c||e;return n("p",[this._v("Library uses theese variables as values of css-rules and inside "),n("code",[this._v("calc()")]),this._v(" function. Great thing is that you can have different values on different screen sizes:")])},function(){var e=this.$createElement,n=this._self._c||e;return n("p",[this._v("This variable depends from other parameters: "),n("code",[this._v("--line-height")]),this._v(" and "),n("code",[this._v("--grid-steps")]),this._v(". Use it in your calculations, for example you want bottom margin is equal to 8 grid units:")])}],!1,null,null,null);s.options.__file="css-vars.vue";n.default=s.exports}}]);