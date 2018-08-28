(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{149:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._m(3),t._v(" "),t._m(4),t._m(5),t._v(" "),a("p",[t._v("The second parameter allows you to provide custom options to the color picker:")]),t._v(" "),t._m(6),t._m(7),t._v(" "),a("p",[t._v("When creating a new color picker you can customise it by providing a list of options:")]),t._v(" "),t._m(8),t._m(9),t._v(" "),a("table",[t._m(10),t._v(" "),a("tbody",[a("tr",[t._m(11),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Set the default color from any "),a("router-link",{attrs:{to:"/color_api.html#Supported-Color-Formats"}},[t._v("supported color format")]),t._v(", or even an instance of "),a("router-link",{attrs:{to:"/color_api.html"}},[t._v("iro.Color")]),t._v(".")],1),t._v(" "),t._m(12)]),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),t._m(18),t._v(" "),t._m(19),t._v(" "),t._m(20),t._v(" "),t._m(21),t._v(" "),t._m(22),t._v(" "),a("tr",[t._m(23),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("If set to "),a("code",[t._v("false")]),t._v(", the color wheel will not fade to black as the color's lightness decreases. This is not recommended, for reasons noted in "),a("a",{attrs:{href:"https://github.com/jaames/iro.js/issues/9#issuecomment-336628451",target:"_blank",rel:"noopener noreferrer"}},[t._v("this issue thread"),a("OutboundLink")],1)]),t._v(" "),t._m(24)]),t._v(" "),t._m(25)])]),t._v(" "),t._m(26),t._v(" "),a("p",[t._v("Each color picker instance has a "),a("router-link",{attrs:{to:"/color_api.html"}},[a("code",[t._v("color")])]),t._v(" object which stores the current color.")],1),t._v(" "),t._m(27),t._v(" "),t._m(28),t._v(" "),t._m(29),t._v(" "),t._m(30),t._m(31),t._v(" "),t._m(32),t._v(" "),t._m(33),t._v(" "),a("p",[t._v("Each color picker has an event system that can be used to listen to certain events, like when the user starts interacting with the color picker. Event listers are added with the "),a("router-link",{attrs:{to:"/colorPicker_api.html#on"}},[a("code",[t._v("on")])]),t._v(" method, and can be removed with the "),a("router-link",{attrs:{to:"/colorPicker_api.html#off"}},[a("code",[t._v("off")])]),t._v(" method.")],1),t._v(" "),t._m(34),t._v(" "),t._m(35),t._m(36),t._v(" "),t._m(37),t._v(" "),a("p",[t._v("Fired when the colorPicker's UI has been mounted to the DOM and is ready for user interaction.\nA reference to the colorPicker object is passed to this event's callback function.")]),t._v(" "),t._m(38),t._v(" "),t._m(39),t._v(" "),t._m(40),t._v(" "),t._m(41),t._v(" "),t._m(42),t._v(" "),a("p",[t._v("Fired whenever the color changes -- either when the user interacts with the controls, or when it is set via code.\nThis event's callback function gets passed two values:")]),t._v(" "),t._m(43),t._v(" "),a("p",[t._v("For example:")]),t._v(" "),t._m(44),t._m(45),t._v(" "),t._m(46),t._v(" "),t._m(47),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("color:change")]),t._v(" event will fire "),a("em",[t._v("very")]),t._v(" quickly as the user drags the controls around. To slow it down you may want to try "),a("a",{attrs:{href:"https://davidwalsh.name/javascript-debounce-function",target:"_blank",rel:"noopener noreferrer"}},[t._v("debouncing"),a("OutboundLink")],1),t._v(" your callback function.")])]),t._v(" "),t._m(48),t._v(" "),a("p",[t._v('With the Dynamic CSS feature you can automatically write CSS styles and update them as the selected color changes. All you need to do is provide a CSS "template" when creating the color picker:')]),t._v(" "),t._m(49),t._m(50),t._v(" "),t._m(51)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"getting-started"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#getting-started","aria-hidden":"true"}},[this._v("#")]),this._v(" Getting Started")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("In your HTML, create an element to act as a container for the color picker. This container element needs to have a unique identifier such as an "),s("code",[this._v("id")]),this._v(" attribute:")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("id")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("color-picker-container"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Now in JavaScript, create a new "),s("code",[this._v("iro.ColorPicker")]),this._v(" and attach it to the container by providing a matching CSS selector:")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" demoColorPicker "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("iro"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ColorPicker")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"#color-picker-container"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("TIP")]),this._v(" "),s("p",[this._v("You can also use a DOM object instead of a CSS selector if needed -- this might be more suitable if you're integrating iro.js into an application created with a frontend framework such as Vue or React.")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" demoColorPicker "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("iro"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ColorPicker")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"#color-picker-container"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token comment"}},[t._v("// Set the size of the color picker UI")]),t._v("\n  width"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("320")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  height"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("320")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token comment"}},[t._v("// Set the initial color to red")]),t._v("\n  color"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"#f00"')]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"color-picker-options"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#color-picker-options","aria-hidden":"true"}},[this._v("#")]),this._v(" Color Picker Options")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" demoColorPicker "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("iro"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ColorPicker")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"#color-picker-container"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  width"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("320")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  height"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("320")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  color"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("r"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("255")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" g"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  markerRadius"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("8")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  padding"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("4")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  sliderMargin"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("24")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  sliderHeight"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("36")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  borderWidth"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("2")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  borderColor"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"#fff"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  anticlockwise"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"available-options"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#available-options","aria-hidden":"true"}},[this._v("#")]),this._v(" Available Options")])},function(){var t=this.$createElement,s=this._self._c||t;return s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[this._v("Name")]),this._v(" "),s("th",{staticStyle:{"text-align":"left"}},[this._v("Description")]),this._v(" "),s("th",{staticStyle:{"text-align":"left"}},[this._v("Default")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("td",{staticStyle:{"text-align":"left"}},[s("code",[this._v("color")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("td",{staticStyle:{"text-align":"left"}},[s("code",[this._v('"#fff"')])])},function(){var t=this.$createElement,s=this._self._c||t;return s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[this._v("width")])]),this._v(" "),s("td",{staticStyle:{"text-align":"left"}},[this._v("Total width of the control UI")]),this._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("code",[this._v("320")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[this._v("height")])]),this._v(" "),s("td",{staticStyle:{"text-align":"left"}},[this._v("Total height of the control UI")]),this._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("code",[this._v("320")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[this._v("padding")])]),this._v(" "),s("td",{staticStyle:{"text-align":"left"}},[this._v("Padding between the markers and the edge of the controls.")]),this._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("code",[this._v("6")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[this._v("markerRadius")])]),this._v(" "),s("td",{staticStyle:{"text-align":"left"}},[this._v("Radius of the control markers.")]),this._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("code",[this._v("8")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[this._v("sliderMargin")])]),this._v(" "),s("td",{staticStyle:{"text-align":"left"}},[this._v("Distance between the hue/saturation wheel and the slider controls.")]),this._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("code",[this._v("24")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[this._v("sliderHeight")])]),this._v(" "),s("td",{staticStyle:{"text-align":"left"}},[this._v("Slider control height (by default this will be calculated automatically).")]),this._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("code",[this._v("undefined")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[this._v("borderWidth")])]),this._v(" "),s("td",{staticStyle:{"text-align":"left"}},[this._v("Width of the border around the controls. Defaults to 0 (no border).")]),this._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("code",[this._v("0")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[this._v("borderColor")])]),this._v(" "),s("td",{staticStyle:{"text-align":"left"}},[this._v("Color of the border, any valid CSS color is supported.")]),this._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("code",[this._v('"#fff"')])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[this._v("display")])]),this._v(" "),s("td",{staticStyle:{"text-align":"left"}},[this._v("SVG element's CSS display property value.")]),this._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("code",[this._v('"block"')])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[this._v("anticlockwise")])]),this._v(" "),s("td",{staticStyle:{"text-align":"left"}},[this._v("If set to "),s("code",[this._v("true")]),this._v(", the color wheel will be drawn in the other direction, with blues and purples towards the lower half of the wheel.")]),this._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("code",[this._v("false")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("td",{staticStyle:{"text-align":"left"}},[s("code",[this._v("wheelLightness")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("td",{staticStyle:{"text-align":"left"}},[s("code",[this._v("undefined")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[this._v("css")])]),this._v(" "),s("td",{staticStyle:{"text-align":"left"}},[this._v("The CSS template used for the "),s("a",{attrs:{href:"#Dynamic-CSS"}},[this._v("Dynamic CSS")]),this._v(" feature.")]),this._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("code",[this._v("{}")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"using-the-selected-color"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#using-the-selected-color","aria-hidden":"true"}},[this._v("#")]),this._v(" Using the Selected Color")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"getting-and-setting-the-color"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#getting-and-setting-the-color","aria-hidden":"true"}},[this._v("#")]),this._v(" Getting and Setting the Color")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("The color object has a few properties that can be used to both get and set the selected color in different formats such as RGB and HSL. When the color is set this way, the UI will update and the "),s("a",{attrs:{href:"#color:change"}},[s("code",[this._v("color:change")])]),this._v(" event will fire.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("For example, here's how we can get and set the color's "),s("code",[this._v("rgb")]),this._v(" property:")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// Get the color's RGB value")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" rgb "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" demoColorPicker"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("color"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("rgb"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// rgb = { r: 255, g: 255, b: 0 }")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// Set the color to another value")]),t._v("\ndemoColorPicker"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("color"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("rgb "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" r"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("255")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" g"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"property-list"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#property-list","aria-hidden":"true"}},[this._v("#")]),this._v(" Property List")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("Name")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Example Format")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("hsv")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("{ h: 360, s: 100, v: 100 }")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("rgb")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("{ r: 255, g: 0, b: 0 }")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("hsl")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("{ h: 360, s: 100, l: 50 }")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("rgbString")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v('"rgb(255, 0, 0)"')])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("hexString")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v('"#FF0000"')])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("hslString")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v('"hsl(360, 100%, 50%)"')])])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"events"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#events","aria-hidden":"true"}},[this._v("#")]),this._v(" Events")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Here's an example showing what adding and then removing a listener to the "),s("code",[this._v("input:start")]),this._v(" event might look like:")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// Listen to the input:start event")]),t._v("\ndemoColorPicker"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("on")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"input:start"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("onInputStart")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token comment"}},[t._v("// do something...")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// Remove a previously added event listener")]),t._v("\ndemoColorPicker"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("off")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"input:start"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" onInputStart"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"event-types"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#event-types","aria-hidden":"true"}},[this._v("#")]),this._v(" Event Types")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"mount"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mount","aria-hidden":"true"}},[this._v("#")]),this._v(" mount")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"input-start"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#input-start","aria-hidden":"true"}},[this._v("#")]),this._v(" input:start")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Fired whenever the users starts interacting with the color picker controls.\nThe colorPicker's "),s("code",[this._v("color")]),this._v(" object is passed to this event's callback function.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"input-end"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#input-end","aria-hidden":"true"}},[this._v("#")]),this._v(" input:end")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Fired whenever the user stops interacting with the color picker controls.\nThe colorPicker's "),s("code",[this._v("color")]),this._v(" object is passed to this event's callback function.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"color-change"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#color-change","aria-hidden":"true"}},[this._v("#")]),this._v(" color:change")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[s("code",[this._v("color")]),this._v(": the colorPicker's "),s("code",[this._v("color")]),this._v(" object")]),this._v(" "),s("li",[s("code",[this._v("changes")]),this._v(": an object showing which HSV channels have changed since the last time the event was fired")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("demoColorPicker"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("on")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"color:change"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("color"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" changes"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token comment"}},[t._v("// Log the color's hex RGB value to the dev console")]),t._v("\n  console"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("color"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hexString"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token comment"}},[t._v('// If the "H" channel has changed, log the color\'s HSV value too')]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("changes"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("h"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("color"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hsv"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("It's also possible to "),s("em",[this._v("set")]),this._v(" the color to a new value within a callback function, should you want to make adjustments. The color picker controls will automatically update, and you're also protected from infinite color:set callback loops.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("For example, if you wanted to force the color's hue channel to always be "),s("code",[this._v("360")]),this._v(":")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("demoColorPicker"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("on")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"color:change"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("color"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" changes"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token comment"}},[t._v("// Get the color's HSV value")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" hsv "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" color"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hsv"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token comment"}},[t._v("// Set the H channel to 360")]),t._v("\n  hsv"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("h "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("360")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token comment"}},[t._v("// Set the color with the new HSV value")]),t._v("\n  color"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hsv "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" hsv"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"dynamic-css"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dynamic-css","aria-hidden":"true"}},[this._v("#")]),this._v(" Dynamic CSS")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" demoColorPicker "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("iro"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ColorPicker")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"#color-picker-container"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n  css"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token string"}},[t._v('"body"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{attrs:{class:"token string"}},[t._v('"background-color"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"$color"')]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token string"}},[t._v('"input, button"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{attrs:{class:"token string"}},[t._v('"border-color"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"$color"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{attrs:{class:"token string"}},[t._v('"color"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"$color"')]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("$color")]),this._v(" is treated as a variable representing the currently selected color. To demonstrate, let's say the currently selected color is "),s("code",[this._v("rgb(255, 0, 0)")]),this._v(" (pure red). Using the template above, the CSS applied to the page would look something like this:")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{attrs:{class:"token selector"}},[t._v("body")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v("background-color")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("rgb")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("255, 0, 0"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{attrs:{class:"token selector"}},[t._v("input, button")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v("border-color")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("rgb")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("255, 0, 0"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v("color")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("rgb")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("255, 0, 0"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])}],!1,null,null,null);e.options.__file="guide.md";s.default=e.exports}}]);