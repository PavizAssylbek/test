(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[5],{"3rPB":function(e,t,n){e.exports={layout_content:"styles_layout_content__1RRlk",layout_link:"styles_layout_link__1lfQm",layout:"styles_layout__kRM7M"}},"5L3L":function(e,t,n){e.exports={sidebar:"styles_sidebar__1vO8O",sidebar_content:"styles_sidebar_content__3PCaf",sidebar_menu:"styles_sidebar_menu__2nwUD",sidebar_feedback:"styles_sidebar_feedback__13_7g",sidebar_link:"styles_sidebar_link__2Ftuc",active:"styles_active__JDGQe"}},"7ICr":function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var a=n("ODXe"),s=n("q1tI"),o=n.n(s),r=n("YFqc"),i=n.n(r),l=n("82Mt"),u=n.n(l),c=n("hmUU"),d=n.n(c),h=n("iuhU"),f=o.a.createElement;function p(e){var t=e.title,n=void 0===t?"Title":t,s=e.link,r=e.save,l=o.a.useState(!0),c=Object(a.a)(l,2),p=c[0],m=c[1],v=o.a.useState(0),_=Object(a.a)(v,2),g=_[0],k=_[1],w=o.a.createRef(),b=o.a.createRef(),y=function(){var e=new FileReader;e.onload=function(e){b.current.src=e.target.result},e.readAsDataURL(w.current.files[0])};return f("div",{className:d.a.edits},f("div",{className:d.a.edits_head},f("h2",null,n),f(i.a,{href:s},f("a",{className:d.a.edits_link},f("span",null,"\u041d\u0430\u0437\u0430\u0434")," ",f("img",{src:"/back.png",alt:"back"})))),f("div",{className:d.a.edits_btn},["RU","KZ"].map((function(e,t){return f("button",{onClick:function(){return g!==t?function(e){k(e),m(!p)}(t):""},className:Object(h.a)(g===t?d.a.edits_btn_active:""),key:t},e)}))),f("form",null,f("div",{className:d.a.edits_content},f("div",{className:d.a.edits_content__left},f("h2",null,"\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a"),f("label",{htmlFor:"title"},f("input",{type:"text",id:"title",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a"})),f("h2",null,"\u0414\u0430\u0442\u0430"),f("label",{htmlFor:"data",className:d.a.data},f(u.a,{id:"data",mask:"99.99.9999"})),f("h2",null,"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"),f("label",{htmlFor:"text",className:d.a.text},f("textarea",{id:"text"})),f("h2",null,"\u0421\u043e\u0434\u0435\u0440\u0436\u0438\u043c\u043e\u0435"),f("label",{htmlFor:"textinfo",className:d.a.textinfo},f("textarea",null))),f("div",{className:d.a.edits_content__right},f("h2",null,"\u0413\u043b\u0430\u0432\u043d\u043e\u0435 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435"),f("img",{ref:b,className:d.a.edits_newimg,src:"",alt:""}),f("label",{htmlFor:"btn_file"},f("img",{src:"/btn_file.jpg",alt:"#"}),"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435",f("input",{type:"file",hidden:!0,id:"btn_file",accept:".jpg, .jpeg, .png",ref:w,onChange:y})))),f("div",{style:{marginBottom:"15px"}},f("input",{type:"checkbox",className:d.a.edits_custom_checkbox,id:"checkBox1"}),f("label",{className:d.a.edits_checkbox,htmlFor:"checkBox1"},"\u041e\u043f\u0443\u0431\u043b\u0438\u043a\u043e\u0432\u0430\u0442\u044c")),r&&f("div",null,f("input",{type:"checkbox",className:d.a.edits_custom_checkbox,id:"checkBox2"}),f("label",{className:d.a.edits_checkbox,htmlFor:"checkBox2"},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0432\u0435\u0431\u0438\u043d\u0430\u0440 \u043d\u0430 \u0441\u0430\u0439\u0442\u0435 \u043f\u043e\u0441\u043b\u0435 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u0438\u044f")),f("input",{type:"submit",value:"\u0421\u043e\u0445\u0430\u043d\u0438\u0442\u044c",className:Object(h.a)(d.a.edits_submit,"border-radius")})))}},"82Mt":function(e,t,n){e.exports=n("L37t")},L37t:function(e,t,n){"use strict";var a,s=(a=n("q1tI"))&&"object"==typeof a&&"default"in a?a.default:a,o=n("i8i4");function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function i(e,t){e.prototype=Object.create(t.prototype),function(e,t){for(var n=Object.getOwnPropertyNames(t),a=0;a<n.length;a++){var s=n[a],o=Object.getOwnPropertyDescriptor(t,s);o&&o.configurable&&void 0===e[s]&&Object.defineProperty(e,s,o)}}(e.prototype.constructor=e,t)}function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var u=function(e,t,n,a,s,o,r,i){if(!e){var l;if(void 0===t)l=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[n,a,s,o,r,i],c=0;(l=new Error(t.replace(/%s/g,(function(){return u[c++]})))).name="Invariant Violation"}throw l.framesToPop=1,l}};function c(e,t,n){if("selectionStart"in e&&"selectionEnd"in e)e.selectionStart=t,e.selectionEnd=n;else{var a=e.createTextRange();a.collapse(!0),a.moveStart("character",t),a.moveEnd("character",n-t),a.select()}}var d={9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"};function h(e,t,n){var a="",s="",o=null,r=[];if(void 0===t&&(t="_"),null==n&&(n=d),!e||"string"!=typeof e)return{maskChar:t,formatChars:n,mask:null,prefix:null,lastEditablePosition:null,permanents:[]};var i=!1;return e.split("").forEach((function(e){i=!i&&"\\"===e||(i||!n[e]?(r.push(a.length),a.length===r.length-1&&(s+=e)):o=a.length+1,a+=e,!1)})),{maskChar:t,formatChars:n,prefix:s,mask:a,lastEditablePosition:o,permanents:r}}function f(e,t){return-1!==e.permanents.indexOf(t)}function p(e,t,n){var a=e.mask,s=e.formatChars;if(!n)return!1;if(f(e,t))return a[t]===n;var o=s[a[t]];return new RegExp(o).test(n)}function m(e,t){return t.split("").every((function(t,n){return f(e,n)||!p(e,n,t)}))}function v(e,t){var n=e.maskChar,a=e.prefix;if(!n){for(;t.length>a.length&&f(e,t.length-1);)t=t.slice(0,t.length-1);return t.length}for(var s=a.length,o=t.length;o>=a.length;o--){var r=t[o];if(!f(e,o)&&p(e,o,r)){s=o+1;break}}return s}function _(e,t){return v(e,t)===e.mask.length}function g(e,t){var n=e.maskChar,a=e.mask,s=e.prefix;if(!n){for((t=k(e,"",t,0)).length<s.length&&(t=s);t.length<a.length&&f(e,t.length);)t+=a[t.length];return t}if(t)return k(e,g(e,""),t,0);for(var o=0;o<a.length;o++)f(e,o)?t+=a[o]:t+=n;return t}function k(e,t,n,a){var s=e.mask,o=e.maskChar,r=e.prefix,i=n.split(""),l=_(e,t);return!o&&a>t.length&&(t+=s.slice(t.length,a)),i.every((function(n){for(;c=n,f(e,u=a)&&c!==s[u];){if(a>=t.length&&(t+=s[a]),i=n,o&&f(e,a)&&i===o)return!0;if(++a>=s.length)return!1}var i,u,c;return!p(e,a,n)&&n!==o||(a<t.length?t=o||l||a<r.length?t.slice(0,a)+n+t.slice(a+1):(t=t.slice(0,a)+n+t.slice(a),g(e,t)):o||(t+=n),++a<s.length)})),t}function w(e,t){for(var n=e.mask,a=t;a<n.length;++a)if(!f(e,a))return a;return null}function b(e){return e||0===e?e+"":""}function y(e,t,n,a,s){var o=e.mask,r=e.prefix,i=e.lastEditablePosition,l=t,u="",c=0,d=0,h=Math.min(s.start,n.start);return n.end>s.start?d=(c=function(e,t,n,a){var s=e.mask,o=e.maskChar,r=n.split(""),i=a;return r.every((function(t){for(;r=t,f(e,n=a)&&r!==s[n];)if(++a>=s.length)return!1;var n,r;return(p(e,a,t)||t===o)&&a++,a<s.length})),a-i}(e,0,u=l.slice(s.start,n.end),h))?s.length:0:l.length<a.length&&(d=a.length-l.length),l=a,d&&(1!==d||s.length||(h=s.start===n.start?w(e,n.start):function(e,t){for(var n=t;0<=n;--n)if(!f(e,n))return n;return null}(e,n.start)),l=function(e,t,n,a){var s=n+a,o=e.maskChar,r=e.mask,i=e.prefix,l=t.split("");if(o)return l.map((function(t,a){return a<n||s<=a?t:f(e,a)?r[a]:o})).join("");for(var u=s;u<l.length;u++)f(e,u)&&(l[u]="");return n=Math.max(i.length,n),l.splice(n,s-n),t=l.join(""),g(e,t)}(e,l,h,d)),l=k(e,l,u,h),(h+=c)>=o.length?h=o.length:h<r.length&&!c?h=r.length:h>=r.length&&h<i&&c&&(h=w(e,h)),u||(u=null),{value:l=g(e,l),enteredString:u,selection:{start:h,end:h}}}function C(e){return"function"==typeof e}function S(){return window.cancelAnimationFrame||window.webkitCancelRequestAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame}function O(e){return(S()?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame:function(){return setTimeout(e,1e3/60)})(e)}function x(e){(S()||clearTimeout)(e)}var M=function(e){function t(t){var n=e.call(this,t)||this;n.focused=!1,n.mounted=!1,n.previousSelection=null,n.selectionDeferId=null,n.saveSelectionLoopDeferId=null,n.saveSelectionLoop=function(){n.previousSelection=n.getSelection(),n.saveSelectionLoopDeferId=O(n.saveSelectionLoop)},n.runSaveSelectionLoop=function(){null===n.saveSelectionLoopDeferId&&n.saveSelectionLoop()},n.stopSaveSelectionLoop=function(){null!==n.saveSelectionLoopDeferId&&(x(n.saveSelectionLoopDeferId),n.saveSelectionLoopDeferId=null,n.previousSelection=null)},n.getInputDOMNode=function(){if(!n.mounted)return null;var e=o.findDOMNode(l(l(n))),t="undefined"!=typeof window&&e instanceof window.Element;if(e&&!t)return null;if("INPUT"!==e.nodeName&&(e=e.querySelector("input")),!e)throw new Error("react-input-mask: inputComponent doesn't contain input node");return e},n.getInputValue=function(){var e=n.getInputDOMNode();return e?e.value:null},n.setInputValue=function(e){var t=n.getInputDOMNode();t&&(n.value=e,t.value=e)},n.setCursorToEnd=function(){var e=v(n.maskOptions,n.value),t=w(n.maskOptions,e);null!==t&&n.setCursorPosition(t)},n.setSelection=function(e,t,a){void 0===a&&(a={});var s=n.getInputDOMNode(),o=n.isFocused();s&&o&&(a.deferred||c(s,e,t),null!==n.selectionDeferId&&x(n.selectionDeferId),n.selectionDeferId=O((function(){n.selectionDeferId=null,c(s,e,t)})),n.previousSelection={start:e,end:t,length:Math.abs(t-e)})},n.getSelection=function(){return function(e){var t=0,n=0;if("selectionStart"in e&&"selectionEnd"in e)t=e.selectionStart,n=e.selectionEnd;else{var a=document.selection.createRange();a.parentElement()===e&&(t=-a.moveStart("character",-e.value.length),n=-a.moveEnd("character",-e.value.length))}return{start:t,end:n,length:n-t}}(n.getInputDOMNode())},n.getCursorPosition=function(){return n.getSelection().start},n.setCursorPosition=function(e){n.setSelection(e,e)},n.isFocused=function(){return n.focused},n.getBeforeMaskedValueChangeConfig=function(){var e=n.maskOptions,t=e.mask,a=e.maskChar,s=e.permanents,o=e.formatChars;return{mask:t,maskChar:a,permanents:s,alwaysShowMask:!!n.props.alwaysShowMask,formatChars:o}},n.isInputAutofilled=function(e,t,a,s){var o=n.getInputDOMNode();try{if(o.matches(":-webkit-autofill"))return!0}catch(u){}return!n.focused||s.end<a.length&&t.end===e.length},n.onChange=function(e){var t=l(l(n)).beforePasteState,a=l(l(n)).previousSelection,s=n.props.beforeMaskedValueChange,o=n.getInputValue(),r=n.value,i=n.getSelection();n.isInputAutofilled(o,i,r,a)&&(r=g(n.maskOptions,""),a={start:0,end:0,length:0}),t&&(a=t.selection,r=t.value,i={start:a.start+o.length,end:a.start+o.length,length:0},o=r.slice(0,a.start)+o+r.slice(a.end),n.beforePasteState=null);var u=y(n.maskOptions,o,i,r,a),c=u.enteredString,d=u.selection,h=u.value;if(C(s)){var f=s({value:h,selection:d},{value:r,selection:a},c,n.getBeforeMaskedValueChangeConfig());h=f.value,d=f.selection}n.setInputValue(h),C(n.props.onChange)&&n.props.onChange(e),n.isWindowsPhoneBrowser?n.setSelection(d.start,d.end,{deferred:!0}):n.setSelection(d.start,d.end)},n.onFocus=function(e){var t=n.props.beforeMaskedValueChange,a=n.maskOptions,s=a.mask,o=a.prefix;if(n.focused=!0,n.mounted=!0,s){if(n.value)v(n.maskOptions,n.value)<n.maskOptions.mask.length&&n.setCursorToEnd();else{var r=g(n.maskOptions,o),i=g(n.maskOptions,r),l=v(n.maskOptions,i),u=w(n.maskOptions,l),c={start:u,end:u};if(C(t)){var d=t({value:i,selection:c},{value:n.value,selection:null},null,n.getBeforeMaskedValueChangeConfig());i=d.value,c=d.selection}var h=i!==n.getInputValue();h&&n.setInputValue(i),h&&C(n.props.onChange)&&n.props.onChange(e),n.setSelection(c.start,c.end)}n.runSaveSelectionLoop()}C(n.props.onFocus)&&n.props.onFocus(e)},n.onBlur=function(e){var t=n.props.beforeMaskedValueChange,a=n.maskOptions.mask;if(n.stopSaveSelectionLoop(),n.focused=!1,a&&!n.props.alwaysShowMask&&m(n.maskOptions,n.value)){var s="";C(t)&&(s=t({value:s,selection:null},{value:n.value,selection:n.previousSelection},null,n.getBeforeMaskedValueChangeConfig()).value);var o=s!==n.getInputValue();o&&n.setInputValue(s),o&&C(n.props.onChange)&&n.props.onChange(e)}C(n.props.onBlur)&&n.props.onBlur(e)},n.onMouseDown=function(e){if(!n.focused&&document.addEventListener){n.mouseDownX=e.clientX,n.mouseDownY=e.clientY,n.mouseDownTime=(new Date).getTime();document.addEventListener("mouseup",(function e(t){if(document.removeEventListener("mouseup",e),n.focused){var a=Math.abs(t.clientX-n.mouseDownX),s=Math.abs(t.clientY-n.mouseDownY),o=Math.max(a,s),r=(new Date).getTime()-n.mouseDownTime;(o<=10&&r<=200||o<=5&&r<=300)&&n.setCursorToEnd()}}))}C(n.props.onMouseDown)&&n.props.onMouseDown(e)},n.onPaste=function(e){C(n.props.onPaste)&&n.props.onPaste(e),e.defaultPrevented||(n.beforePasteState={value:n.getInputValue(),selection:n.getSelection()},n.setInputValue(""))},n.handleRef=function(e){null==n.props.children&&C(n.props.inputRef)&&n.props.inputRef(e)};var a=t.mask,s=t.maskChar,r=t.formatChars,i=t.alwaysShowMask,u=t.beforeMaskedValueChange,d=t.defaultValue,f=t.value;n.maskOptions=h(a,s,r),null==d&&(d=""),null==f&&(f=d);var p=b(f);if(n.maskOptions.mask&&(i||p)&&(p=g(n.maskOptions,p),C(u))){var _=t.value;null==t.value&&(_=d),p=u({value:p,selection:null},{value:_=b(_),selection:null},null,n.getBeforeMaskedValueChangeConfig()).value}return n.value=p,n}i(t,e);var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.getInputDOMNode()&&(this.isWindowsPhoneBrowser=function(){var e=new RegExp("windows","i"),t=new RegExp("phone","i"),n=navigator.userAgent;return e.test(n)&&t.test(n)}(),this.maskOptions.mask&&this.getInputValue()!==this.value&&this.setInputValue(this.value))},n.componentDidUpdate=function(){var e=this.previousSelection,t=this.props,n=t.beforeMaskedValueChange,a=t.alwaysShowMask,s=t.mask,o=t.maskChar,r=t.formatChars,i=this.maskOptions,l=a||this.isFocused(),u=null!=this.props.value,c=u?b(this.props.value):this.value,d=e?e.start:null;if(this.maskOptions=h(s,o,r),this.maskOptions.mask){!i.mask&&this.isFocused()&&this.runSaveSelectionLoop();var f=this.maskOptions.mask&&this.maskOptions.mask!==i.mask;if(i.mask||u||(c=this.getInputValue()),(f||this.maskOptions.mask&&(c||l))&&(c=g(this.maskOptions,c)),f){var p=v(this.maskOptions,c);(null===d||p<d)&&(d=_(this.maskOptions,c)?p:w(this.maskOptions,p))}!this.maskOptions.mask||!m(this.maskOptions,c)||l||u&&this.props.value||(c="");var k={start:d,end:d};if(C(n)){var y=n({value:c,selection:k},{value:this.value,selection:this.previousSelection},null,this.getBeforeMaskedValueChangeConfig());c=y.value,k=y.selection}this.value=c;var S=this.getInputValue()!==this.value;S?(this.setInputValue(this.value),this.forceUpdate()):f&&this.forceUpdate();var O=!1;null!=k.start&&null!=k.end&&(O=!e||e.start!==k.start||e.end!==k.end),(O||S)&&this.setSelection(k.start,k.end)}else i.mask&&(this.stopSaveSelectionLoop(),this.forceUpdate())},n.componentWillUnmount=function(){this.mounted=!1,null!==this.selectionDeferId&&x(this.selectionDeferId),this.stopSaveSelectionLoop()},n.render=function(){var e,t=this.props,n=(t.mask,t.alwaysShowMask,t.maskChar,t.formatChars,t.inputRef,t.beforeMaskedValueChange,t.children),a=function(e,t){if(null==e)return{};var n,a,s={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],0<=t.indexOf(n)||(s[n]=e[n]);return s}(t,["mask","alwaysShowMask","maskChar","formatChars","inputRef","beforeMaskedValueChange","children"]);if(n){C(n)||u(!1);var o=["onChange","onPaste","onMouseDown","onFocus","onBlur","value","disabled","readOnly"],i=r({},a);o.forEach((function(e){return delete i[e]})),e=n(i),o.filter((function(t){return null!=e.props[t]&&e.props[t]!==a[t]})).length&&u(!1)}else e=s.createElement("input",r({ref:this.handleRef},a));var l={onFocus:this.onFocus,onBlur:this.onBlur};return this.maskOptions.mask&&(a.disabled||a.readOnly||(l.onChange=this.onChange,l.onPaste=this.onPaste,l.onMouseDown=this.onMouseDown),null!=a.value&&(l.value=this.value)),e=s.cloneElement(e,l)},t}(s.Component);e.exports=M},ODXe:function(e,t,n){"use strict";function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],a=!0,s=!1,o=void 0;try{for(var r,i=e[Symbol.iterator]();!(a=(r=i.next()).done)&&(n.push(r.value),!t||n.length!==t);a=!0);}catch(l){s=!0,o=l}finally{try{a||null==i.return||i.return()}finally{if(s)throw o}}return n}}(e,t)||function(e,t){if(e){if("string"===typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(t,"a",(function(){return s}))},TA7y:function(e,t,n){e.exports={header:"styles_header__3jo50",header_content:"styles_header_content__3lkA1",header_bold:"styles_header_bold__vlNGD",active:"styles_active__1pJxi",registration:"styles_registration__YZ5_9",header_lang:"styles_header_lang__3bSQT",header_langs:"styles_header_langs__uUaJH"}},hmUU:function(e,t,n){e.exports={edits:"styles_edits__PmaB7",edits_head:"styles_edits_head__1-SMr",edits_link:"styles_edits_link__1WgIA",edits_btn:"styles_edits_btn__25BIT",edits_btn_active:"styles_edits_btn_active__2SILh",edits_content:"styles_edits_content__38A6d",edits_content__left:"styles_edits_content__left__1fHCy",data:"styles_data__36uVD",text:"styles_text__1APgk",textinfo:"styles_textinfo__2qCG7",edits_content__right:"styles_edits_content__right__3cLnV",edits_newimg:"styles_edits_newimg__3HquN",edits_checkbox:"styles_edits_checkbox__1V2Wp",edits_custom_checkbox:"styles_edits_custom_checkbox__13c4f",edits_submit:"styles_edits_submit__26e-E"}},ro8X:function(e,t,n){"use strict";n.d(t,"a",(function(){return w}));var a=n("q1tI"),s=n.n(a),o=n("YFqc"),r=n.n(o),i=n("nOHt"),l=n("5L3L"),u=n.n(l),c=n("iuhU"),d=s.a.createElement;var h=function(){var e=Object(i.useRouter)();return d("div",{className:u.a.sidebar},d("div",{className:u.a.sidebar_content},d(r.a,{href:"/admin"},d("a",{className:Object(c.a)(u.a.sidebar_link,"/admin"==e.pathname?u.a.active:"")},d("svg",{width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg"},d("path",{d:"M4 12L16 2.66666L28 12V26.6667C28 27.3739 27.719 28.0522 27.219 28.5523C26.7189 29.0524 26.0406 29.3333 25.3333 29.3333H6.66667C5.95942 29.3333 5.28115 29.0524 4.78105 28.5523C4.28095 28.0522 4 27.3739 4 26.6667V12Z",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),d("path",{d:"M12 29.3333V16H20V29.3333",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})))),d(r.a,{href:"/admin/news"},d("a",{className:Object(c.a)(u.a.sidebar_link,"/admin/news"==e.pathname?u.a.active:"")},d("svg",{width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg"},d("path",{d:"M28 20C28 20.7072 27.719 21.3855 27.219 21.8856C26.7189 22.3857 26.0406 22.6667 25.3333 22.6667H9.33333L4 28V6.66667C4 5.95942 4.28095 5.28115 4.78105 4.78105C5.28115 4.28095 5.95942 4 6.66667 4H25.3333C26.0406 4 26.7189 4.28095 27.219 4.78105C27.719 5.28115 28 5.95942 28 6.66667V20Z",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})))),d(r.a,{href:"/admin/project"},d("a",{className:Object(c.a)(u.a.sidebar_link,"/admin/project"==e.pathname?u.a.active:"")},d("svg",{width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg"},d("path",{d:"M18.6666 2.66666H7.99998C7.29274 2.66666 6.61446 2.94761 6.11436 3.4477C5.61426 3.9478 5.33331 4.62608 5.33331 5.33332V26.6667C5.33331 27.3739 5.61426 28.0522 6.11436 28.5523C6.61446 29.0524 7.29274 29.3333 7.99998 29.3333H24C24.7072 29.3333 25.3855 29.0524 25.8856 28.5523C26.3857 28.0522 26.6666 27.3739 26.6666 26.6667V10.6667L18.6666 2.66666Z",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),d("path",{d:"M18.6667 2.66666V10.6667H26.6667",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),d("path",{d:"M21.3334 17.3333H10.6667",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),d("path",{d:"M21.3334 22.6667H10.6667",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),d("path",{d:"M13.3334 12H12H10.6667",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})))),d(r.a,{href:"/admin/webinars"},d("a",{className:Object(c.a)(u.a.sidebar_link,"/admin/webinars"==e.pathname?u.a.active:"")},d("svg",{width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg"},d("path",{d:"M16 29.3333C23.3638 29.3333 29.3334 23.3638 29.3334 16C29.3334 8.63621 23.3638 2.66667 16 2.66667C8.63622 2.66667 2.66669 8.63621 2.66669 16C2.66669 23.3638 8.63622 29.3333 16 29.3333Z",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),d("path",{d:"M13.3333 10.6667L21.3333 16L13.3333 21.3333V10.6667Z",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))))))},f=n("TA7y"),p=n.n(f),m=s.a.createElement;var v=function(){return m("header",{className:p.a.header},m("div",{className:"container"},m("nav",{className:p.a.header_content},m(r.a,{href:"/"},m("a",{className:p.a.header_bold},m("img",{src:"/h_logo.svg",alt:"#"}))),m("div",{className:""},m("img",{src:"/bell.svg",alt:"#"})),m("div",{className:p.a.header_bold},"\u041a\u0438\u0446\u0435\u043d\u043a\u043e \u0410\u0440\u0442\u0451\u043c",m("img",{src:"/adminUser.svg",alt:"user",style:{marginLeft:"20px"}})))))},_=n("3rPB"),g=n.n(_),k=s.a.createElement;function w(e){var t=e.children;return k("div",{className:Object(c.a)(g.a.layout,"home")},k("main",{className:"flex"},k(h,null),k("div",{className:"content"},k(v,null),t,k("footer",null,k("div",{className:"container"},k("div",{className:g.a.layout_content},k(r.a,{href:"/"},k("a",{className:g.a.layout_link},"\u041f\u0430\u043d\u0435\u043b\u044c \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f")),k(r.a,{href:"/news"},k("a",{className:g.a.layout_link},"\u041d\u043e\u0432\u043e\u0441\u0442\u0438")),k(r.a,{href:"/project"},k("a",{className:g.a.layout_link},"\u041f\u0440\u043e\u0435\u043a\u0442\u044b ")),k(r.a,{href:"/webinars"},k("a",{className:g.a.layout_link},"\u0412\u0435\u0431\u0438\u043d\u0430\u0440\u044b "))))))))}}}]);