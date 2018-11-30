(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{282:function(e,t,l){"use strict";l.r(t);var s={head:{title:"Flex"},data:function(){return{flexOrderExample:[{class:"example p-01",text:"Item 1"},{class:"example p-01",text:"Item 2"},{class:"example p-01",text:"Item 3"},{class:"example p-01",text:"Item 4"}],flexWrapExample:[{class:"example w-25 p-01",text:"Item 1"},{class:"example w-25 p-01",text:"Item 2"},{class:"example w-25 p-01",text:"Item 3"},{class:"example w-25 p-01",text:"Item 4"},{class:"example w-25 p-01",text:"Item 5"},{class:"example w-25 p-01",text:"Item 6"},{class:"example w-25 p-01",text:"Item 7"}],flexFillExample:[{class:"example p-01",text:"1",value:!0},{class:"example p-01",text:"2",value:!0},{class:"example p-01",text:"3",value:!0}],flexGrowExample:[{class:"example p-01",text:"1"},{class:"example p-01",value:!0},{class:"example p-01",text:"Lorem"}],flexShrinkExample:[{class:"example p-01",text:"1"},{class:"example p-01",text:"Lorem ipsum, dolor sit amet",value:!0},{class:"example p-01",text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae ab ipsam sapiente ut, voluptas possimus perferendis ea nesciunt rerum quasi."}],flexJustifyExample:[{class:"example p-01",text:"1"},{class:"example p-01",text:"2"},{class:"example p-01",text:"3"}],flexAlignExample:[{class:"example p-01",text:"1"},{class:"example p-01",text:"2"},{class:"example p-01",text:"3"}],flexAlignContentExample:[{class:"example w-25 p-01",text:"Item 1"},{class:"example w-25 p-01",text:"Item 2"},{class:"example w-25 p-01",text:"Item 3"},{class:"example w-25 p-01",text:"Item 4"},{class:"example w-25 p-01",text:"Item 5"},{class:"example w-25 p-01",text:"Item 6"},{class:"example w-25 p-01",text:"Item 7"}],flexAlignSelfExample:[{class:"example p-01",text:"1"},{class:"example p-01",value:!0},{class:"example p-01",text:"3"}],orderExample:[{class:"example p-01 order-1",text:"1"},{class:"example p-01",value:!0},{class:"example p-01 order-2",text:"2"},{class:"example p-01 order-3",text:"3"},{class:"example p-01 order-4",text:"4"},{class:"example p-01 order-5",text:"5"},{class:"example p-01 order-6",text:"6"},{class:"example p-01 order-7",text:"7"},{class:"example p-01 order-8",text:"8"},{class:"example p-01 order-9",text:"9"},{class:"example p-01 order-10",text:"10"},{class:"example p-01 order-11",text:"11"}]}},mounted:function(){this.buildTOC()}},a=l(4),i=Object(a.a)(s,function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("main",{},[l("h1",{staticClass:"mb-01"},[e._v("Flex")]),e._v(" "),e._m(0),e._v(" "),l("p",[e._v("To enable flexbox layout use "),l("nuxt-link",{attrs:{to:"/display"}},[e._v("display utilities")]),e._v(" like "),l("code",[e._v(".d-flex")]),e._v(", "),l("code",[e._v(".d-inline-flex")]),e._v(" and their responsive variations.")],1),e._v(" "),l("source-code",{attrs:{height:4}},[l("code",{staticClass:"html"},[e._v('<div class="d-flex">\n    I\'m a flexbox container!\n    All children inside me will behave in according to flexbox.\n</div>')])]),e._v(" "),l("Header",{attrs:{level:2,name:"flex-container"}},[e._v("Flex container's classes")]),e._v(" "),l("Header",{attrs:{level:3,name:"direction"}},[e._v("Direction")]),e._v(" "),e._m(1),e._v(" "),l("format-table",{attrs:{items:e.$store.state.classes.flex.flexOrder,initial:[0,0,2],example:e.flexOrderExample,wrapper:{class:"d-flex",value:!0},interactive:""}}),e._v(" "),l("Header",{attrs:{level:3,name:"wrap"}},[e._v("Wrap")]),e._v(" "),l("format-table",{attrs:{items:e.$store.state.classes.flex.flexWrap,example:e.flexWrapExample,wrapper:{class:"d-flex",value:!0},interactive:""}}),e._v(" "),l("Header",{attrs:{level:3,name:"justify-content"}},[e._v("Justify content")]),e._v(" "),l("format-table",{attrs:{items:e.$store.state.classes.flex.flexJustify,initial:[0,0,3],example:e.flexJustifyExample,wrapper:{class:"d-flex",value:!0},interactive:""}}),e._v(" "),l("Header",{attrs:{level:3,name:"align-items"}},[e._v("Align items")]),e._v(" "),l("format-table",{attrs:{items:e.$store.state.classes.flex.flexAlign,initial:[0,0,2],example:e.flexAlignExample,wrapper:{class:"d-flex hi-row",value:!0},interactive:""}}),e._v(" "),l("Header",{attrs:{level:3,name:"align-content"}},[e._v("Align content")]),e._v(" "),e._m(2),e._v(" "),l("format-table",{attrs:{items:e.$store.state.classes.flex.flexAlignContent,initial:[0,0,1],example:e.flexAlignContentExample,wrapper:{class:"d-flex hi-row flex-wrap",value:!0},interactive:""}}),e._v(" "),l("Header",{attrs:{level:2,name:"flex-items"}},[e._v("Children's classes")]),e._v(" "),l("Header",{attrs:{level:3,name:"fill"}},[e._v("Fill")]),e._v(" "),l("div",{staticClass:"row"},[l("div",{staticClass:"col-auto"},[l("format-table",{staticClass:"mt-0",attrs:{items:e.$store.state.classes.flex.flexFill}})],1)]),e._v(" "),e._m(3),e._v(" "),e._m(4),e._v(" "),l("source-code",{attrs:{height:5}},[l("code",{staticClass:"html"},[e._v('<div class="d-flex">\n  <div class="p-2 example">No fill</div>\n  <div class="p-2 flex-fill example">Equal</div>\n  <div class="p-2 flex-fill example">Equal</div>\n</div>')])]),e._v(" "),l("Header",{attrs:{level:3,name:"grow-and-shrink"}},[e._v("\n            Grow and shrink\n        ")]),e._v(" "),e._m(5),e._v(" "),l("format-table",{attrs:{items:e.$store.state.classes.flex.flexGrow,example:e.flexGrowExample,wrapper:{class:"d-flex"},interactive:""}}),e._v(" "),e._m(6),e._v(" "),l("format-table",{staticClass:"mt-1",attrs:{items:e.$store.state.classes.flex.flexShrink,example:e.flexShrinkExample,wrapper:{class:"d-flex"},interactive:""}}),e._v(" "),l("Header",{attrs:{level:3,name:"align-self"}},[e._v("Align self")]),e._v(" "),l("format-table",{attrs:{items:e.$store.state.classes.flex.flexAlignSelf,initial:[0,0,2],example:e.flexAlignSelfExample,wrapper:{class:"d-flex hi-row"},interactive:""}}),e._v(" "),l("Header",{attrs:{level:3,name:"order"}},[e._v("Order")]),e._v(" "),l("p",[e._v("Change the visual order of specific flex items with order utilities. With this classes you can also "),l("nuxt-link",{attrs:{to:"/grid#order-classes"}},[e._v("change order of grid columns")]),e._v(" since Setka's grid build with flexbox layout.")],1),e._v(" "),l("format-table",{attrs:{items:e.$store.state.classes.flex.order,example:e.orderExample,wrapper:{class:"d-flex flex-wrap"},interactive:""}})],1)},[function(){var e=this.$createElement,t=this._self._c||e;return t("p",{staticClass:"subheader mt-0"},[this._v("Quickly manage the layout, alignment, and sizing of grid columns and other elements. For more complex implementations, custom CSS may be necessary. To learn flexbox read a "),t("a",{attrs:{href:"https://css-tricks.com/snippets/css/a-guide-to-flexbox/#flexbox-background",target:"_blank"}},[this._v("flexbox guide")]),this._v(".")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Set the direction of flex items in a flex container. In most cases you can omit the horizontal class here as the browser default is "),t("code",[this._v("row")]),this._v(". However, you may encounter situations where you needed to explicitly set this value (like responsive layouts).")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("\n            This property has "),t("strong",[this._v("no effect on single rows")]),this._v(" of flex items. To demonstrate these utilities, we’ve enforced "),t("code",[this._v("flex-wrap: wrap")]),this._v(" and increased the number of flex items.\n        ")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",{staticClass:"mt-0"},[this._v("Use the "),t("code",[this._v(".flex-fill")]),this._v(" class on a series of sibling elements to force them into equal widths while taking up all available horizontal space.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"d-flex"},[t("div",{staticClass:"p-01 example"},[this._v("No fill")]),this._v(" "),t("div",{staticClass:"p-01 flex-fill example"},[this._v("Equal")]),this._v(" "),t("div",{staticClass:"p-01 flex-fill example"},[this._v("Equal")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Use "),t("code",[this._v(".flex-grow-*")]),this._v(" utilities to toggle a flex item’s ability to grow to fill available space.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Use "),t("code",[this._v(".flex-shrink-*")]),this._v(" utilities to toggle a flex item’s ability to shrink if necessary.")])}],!1,null,null,null);i.options.__file="flex.vue";t.default=i.exports}}]);