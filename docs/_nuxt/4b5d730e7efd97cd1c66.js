(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{278:function(e,t,s){"use strict";s.r(t);var i={head:{title:"Overview"},mounted:function(){this.buildTOC()}},n=s(4),a=Object(n.a)(i,function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("main",{},[s("h1",{staticClass:"mb-01",attrs:{id:"content"}},[e._v("Overview")]),e._v(" "),s("p",{staticClass:"subheader mt-0"},[e._v("Options for laying out your Setka project, including wrapping containers, a powerful grid system, and responsive utility classes.")]),e._v(" "),s("Header",{attrs:{level:2,name:"containers"}},[e._v("Containers")]),e._v(" "),e._m(0),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),s("source-code",{attrs:{height:3}},[s("code",{staticClass:"html"},[e._v('<div class="container">\n    \x3c!-- Content here --\x3e\n</div>')])]),e._v(" "),e._m(3),e._v(" "),e._m(4),e._v(" "),s("source-code",{attrs:{height:3}},[s("code",{staticClass:"html"},[e._v('<div class="container-fluid">\n    ...\n</div>')])]),e._v(" "),s("Header",{attrs:{level:2,name:"responsive-breakpoints"}},[e._v("Responsive breakpoints")]),e._v(" "),e._m(5),e._v(" "),e._m(6),e._v(" "),s("p",[e._v("Setka primarily uses the following media query ranges—or breakpoints—in our source Stylus files for grid system and utilities.")]),e._v(" "),s("source-code",{attrs:{height:14}},[s("code",{staticClass:"css"},[e._v("/* Extra small devices (portrait phones, less than 576px) */\n/* No media query since this is the default in Setka */\n\n/* Small devices (landscape phones, 576px and up) */\n@media (min-width: 576px) { ... }\n\n/* Medium devices (tablets, 768px and up) */\n@media (min-width: 768px) { ... }\n\n/* Large devices (desktops, 992px and up) */\n@media (min-width: 992px) { ... }\n\n/* Extra large devices (large desktops, 1200px and up) */\n@media (min-width: 1200px) { ... }")]),e._v(" "),s("code",{staticClass:"stylus",attrs:{slot:"stylus"},slot:"stylus"},[e._v("+media-up('xs') { ... }\n+media-up('sm') { ... }\n+media-up('md') { ... }\n+media-up('lg') { ... }\n+media-up('xl') { ... }\n\n// Example usage:\n+media-up('sm')\n    .some-class\n        display: block\n\n")])]),e._v(" "),e._m(7),e._v(" "),s("source-code",{attrs:{height:14}},[s("code",{staticClass:"css"},[e._v("/* Extra small devices (portrait phones, less than 576px) */\n@media (max-width: 575.98px) { ... }\n\n/* Small devices (landscape phones, less than 768px) */\n@media (max-width: 767.98px) { ... }\n\n/* Medium devices (tablets, less than 992px) */\n@media (max-width: 991.98px) { ... }\n\n/* Large devices (desktops, less than 1200px) */\n@media (max-width: 1199.98px) { ... }\n\n/* Extra large devices (large desktops) */\n/* No media query since the extra-large breakpoint has no upper bound on its width */")]),e._v(" "),s("code",{staticClass:"stylus",attrs:{slot:"stylus"},slot:"stylus"},[e._v("+media-down('xs') { ... }\n+media-down('sm') { ... }\n+media-down('md') { ... }\n+media-down('lg') { ... }")])]),e._v(" "),e._m(8),e._v(" "),s("p",[e._v("There are also media queries and mixins for targeting a single segment of screen sizes using the minimum and maximum breakpoint widths.")]),e._v(" "),s("source-code",{attrs:{height:14}},[s("code",{staticClass:"css"},[e._v("/* Extra small devices (portrait phones, less than 576px) */\n@media (max-width: 575.98px) { ... }\n\n/* Small devices (landscape phones, 576px and up) */\n@media (min-width: 576px) and (max-width: 767.98px) { ... }\n\n/* Medium devices (tablets, 768px and up) */\n@media (min-width: 768px) and (max-width: 991.98px) { ... }\n\n/* Large devices (desktops, 992px and up) */\n@media (min-width: 992px) and (max-width: 1199.98px) { ... }\n\n/* Extra large devices (large desktops, 1200px and up) */\n@media (min-width: 1200px) { ... }")]),e._v(" "),s("code",{staticClass:"stylus",attrs:{slot:"stylus"},slot:"stylus"},[e._v("+media-only('xs') { ... }\n+media-only('sm') { ... }\n+media-only('md') { ... }\n+media-only('lg') { ... }\n+media-only('xl') { ... }")])]),e._v(" "),s("p",[e._v("Similarly, media queries may span multiple breakpoint widths:")]),e._v(" "),s("source-code",{attrs:{height:3}},[s("code",{staticClass:"css"},[e._v("/* Example */\n/* Apply styles starting from medium devices and up to extra large devices */\n@media (min-width: 768px) and (max-width: 1199.98px) { ... }")]),e._v(" "),s("code",{staticClass:"stylus",attrs:{slot:"stylus"},slot:"stylus"},[e._v("+media-between('md', 'xl') { ... }")])])],1)},[function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Containers are the most basic layout element in Setka and are "),t("strong",[this._v("required when using our default grid system")]),this._v(". Choose from a responsive, fixed-width container (meaning its "),t("code",[this._v("max-width")]),this._v(" changes at each breakpoint) or fluid-width (meaning it’s "),t("code",[this._v("100%")]),this._v(" wide all the time).")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("While containers "),t("em",[this._v("can")]),this._v(" be nested, most layouts do not require a nested container.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"bd-example"},[t("div",{staticClass:"container w-75 example"},[this._v("\n                Container\n            ")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Use "),t("code",[this._v(".container-fluid")]),this._v(" for a full width container, spanning the entire width of the viewport.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"bd-example"},[t("div",{staticClass:"container-fluid example"},[this._v("\n                Fluid container\n            ")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("table",{staticClass:"table-bordered table-content"},[s("thead",[s("tr",[s("th",[e._v("Breakpoint")]),e._v(" "),s("th",[e._v("xs")]),e._v(" "),s("th",[e._v("sm")]),e._v(" "),s("th",[e._v("md")]),e._v(" "),s("th",[e._v("lg")]),e._v(" "),s("th",[e._v("xl")])])]),e._v(" "),s("tbody",[s("tr",[s("td",[e._v("Viewport size")]),e._v(" "),s("td",[e._v("all sizes")]),e._v(" "),s("td",[e._v("\n                        ≥ 576px\n                    ")]),e._v(" "),s("td",[e._v("\n                        ≥ 768px\n                    ")]),e._v(" "),s("td",[e._v("\n                        ≥ 992px\n                    ")]),e._v(" "),s("td",[e._v("\n                        ≥ 1200px\n                    ")])]),e._v(" "),s("tr",[s("td",[e._v("Classname")]),e._v(" "),s("td",[e._v("–")]),e._v(" "),s("td",[s("code",[e._v(".*-sm-*")])]),e._v(" "),s("td",[s("code",[e._v(".*-md-*")])]),e._v(" "),s("td",[s("code",[e._v(".*-lg-*")])]),e._v(" "),s("td",[s("code",[e._v(".*-xl-*")])])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Since Setka is mobile first, it uses "),t("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries"}},[this._v("media queries")]),this._v(" to create sensible breakpoints for our layouts. These breakpoints are mostly based on minimum viewport widths and allow us to scale up elements as the viewport changes.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("We occasionally use media queries that go in the other direction (the given screen size "),t("em",[this._v("or smaller")]),this._v("):")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"bd-callout bd-callout-info"},[s("p",[e._v("\n                Note that since browsers do not currently support "),s("a",{attrs:{href:"https://www.w3.org/TR/mediaqueries-4/#range-context"}},[e._v("range context queries")]),e._v(", we work around the limitations of "),s("a",{attrs:{href:"https://www.w3.org/TR/mediaqueries-4/#mq-min-max"}},[s("code",[e._v("min-")]),e._v(" and "),s("code",[e._v("max-")]),e._v(" prefixes")]),e._v(" and viewports with fractional widths (which can occur under certain conditions on high-dpi devices, for instance) by using values with higher precision for these comparisons.\n            ")])])}],!1,null,null,null);a.options.__file="overview.vue";t.default=a.exports}}]);