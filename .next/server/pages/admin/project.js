module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/tk0":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"news": "styles_news__3xnug",
	"news_head": "styles_news_head__1SrZS",
	"news_btn": "styles_news_btn__2KjHB",
	"news_link": "styles_news_link__2vFD0",
	"news_wrapper": "styles_news_wrapper__39FhP",
	"news_content": "styles_news_content__YCOh_",
	"news_content_head": "styles_news_content_head___nbJ-",
	"news_content_body": "styles_news_content_body__3Jyfv",
	"news_content_btns": "styles_news_content_btns__2nIFP",
	"news_pagination": "styles_news_pagination__26HTo",
	"news_green": "styles_news_green__2PQE-",
	"news_blue": "styles_news_blue__2Wes3",
	"news_red": "styles_news_red__Kt8Rd"
};


/***/ }),

/***/ "3rPB":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"layout_content": "styles_layout_content__1RRlk",
	"layout_link": "styles_layout_link__1lfQm",
	"layout": "styles_layout__kRM7M"
};


/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("zU/5");


/***/ }),

/***/ "5L3L":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"sidebar": "styles_sidebar__1vO8O",
	"sidebar_content": "styles_sidebar_content__3PCaf",
	"sidebar_menu": "styles_sidebar_menu__2nwUD",
	"sidebar_feedback": "styles_sidebar_feedback__13_7g",
	"sidebar_link": "styles_sidebar_link__2Ftuc",
	"active": "styles_active__JDGQe"
};


/***/ }),

/***/ "6f9I":
/***/ (function(module, exports) {

module.exports = require("next-i18next");

/***/ }),

/***/ "TA7y":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"header": "styles_header__3jo50",
	"header_content": "styles_header_content__3lkA1",
	"header_bold": "styles_header_bold__vlNGD",
	"active": "styles_active__1pJxi",
	"registration": "styles_registration__YZ5_9",
	"header_lang": "styles_header_lang__3bSQT",
	"header_langs": "styles_header_langs__uUaJH"
};


/***/ }),

/***/ "VYX8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminNewsComponent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("k7Sn");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("wEaX");
/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_cookie__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("/tk0");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("dYMV");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_4__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const cookies = new react_cookie__WEBPACK_IMPORTED_MODULE_2__["Cookies"]();
function AdminNewsComponent({
  title,
  smalltitle,
  link = "/admin",
  bool,
  data
}) {
  console.log("AdminNewsComponent -> data", data);

  async function deletedContent(id) {
    const token = cookies.get('token');
    const BASE_URL = "https://taxparser.crocos.kz/";
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);
    const requestOptions = {
      method: 'DELETE',
      headers: myHeaders,
      redirected: true
    };
    const res = await fetch(`${BASE_URL}/api/news/${id}`, requestOptions);
  }

  return __jsx("div", {
    className: clsx__WEBPACK_IMPORTED_MODULE_4___default()(_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.news)
  }, __jsx("div", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.news_head
  }, __jsx("h6", null, title), __jsx(_i18n__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    href: `admin/${data.data[0].link}/new`
  }, __jsx("a", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.news_btn
  }, __jsx("button", null, __jsx("img", {
    src: "/plus-circle.svg",
    alt: "svg"
  }), "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043D\u043E\u0432\u0443\u044E ", smalltitle))), __jsx(_i18n__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    href: link
  }, bool === true ? __jsx("a", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.news_link
  }, "\u0412\u0441\u0435 ", __jsx("img", {
    src: "/chevron-left.svg",
    alt: "#"
  })) : __jsx("a", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.news_link
  }, __jsx("img", {
    src: "/chevron-right.svg",
    alt: "#"
  }), " \u041D\u0430\u0437\u0430\u0434"))), __jsx("div", {
    className: clsx__WEBPACK_IMPORTED_MODULE_4___default()(_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.news_wrapper, 'border-radius')
  }, __jsx("div", {
    className: clsx__WEBPACK_IMPORTED_MODULE_4___default()(_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.news_content, 'border-radius')
  }, __jsx("div", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.news_content_head
  }, __jsx("h6", null, "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A \u043D\u043E\u0432\u043E\u0441\u0442\u0435\u0439"), __jsx("h6", null, "\u0414\u0430\u0442\u0430 \u043E\u043F\u0443\u0431\u043B\u0438\u043A\u043E\u0432\u0430\u043D\u0438\u044F"), __jsx("h6", null, "\u0421\u0442\u0430\u0442\u0443\u0441"), __jsx("h6", null, "\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u044F")), data.data.map((el, id) => __jsx("div", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.news_content_body,
    key: id
  }, __jsx("p", null, el.heading_ru), __jsx("span", null, el.date), el.status.id === 1 ? __jsx("span", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.news_blue
  }, el.status.name_ru) : __jsx("span", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.news_green
  }, el.status.name_ru), __jsx("div", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.news_content_btns
  }, __jsx(_i18n__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    href: `/admin/${el.link}/${el.id}`
  }, __jsx("a", null, __jsx("button", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.news_blue
  }, "\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435"))), __jsx("a", null, __jsx("button", {
    onClick: () => deletedContent(el.id),
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.news_red
  }, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C")))))), __jsx("div", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.news_pagination
  }, __jsx("p", null, "\u041F\u043E\u043A\u0430\u0437\u0430\u043D\u043E \u0441\u0442\u0440\u0430\u043D\u0438\u0446 1-3 \u0438\u0437 5 \u0442\u0430\u0431\u043B\u0438\u0446"))));
}

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "dYMV":
/***/ (function(module, exports) {

module.exports = require("clsx");

/***/ }),

/***/ "k7Sn":
/***/ (function(module, exports, __webpack_require__) {

const NextI18Next = __webpack_require__("6f9I").default;

const path = __webpack_require__("oyvS");

module.exports = new NextI18Next({
  defaultLanguage: 'ru',
  otherLanguages: ['kz'],
  localeSubpaths: {
    kz: 'kz'
  },
  shallowRender: true,
  localePath: path.resolve('./public/static')
});

/***/ }),

/***/ "oyvS":
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "ro8X":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ AdminLayout; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./i18n.js
var i18n = __webpack_require__("k7Sn");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: ./src/components/AdminSidebar/styles.module.scss
var styles_module = __webpack_require__("5L3L");
var styles_module_default = /*#__PURE__*/__webpack_require__.n(styles_module);

// EXTERNAL MODULE: external "clsx"
var external_clsx_ = __webpack_require__("dYMV");
var external_clsx_default = /*#__PURE__*/__webpack_require__.n(external_clsx_);

// CONCATENATED MODULE: ./src/components/AdminSidebar/index.jsx
var __jsx = external_react_default.a.createElement;






function AdminSidebar() {
  const router = Object(router_["useRouter"])();
  return __jsx("div", {
    className: styles_module_default.a.sidebar
  }, __jsx("div", {
    className: styles_module_default.a.sidebar_content
  }, __jsx(i18n["Link"], {
    href: "/admin"
  }, __jsx("a", {
    className: external_clsx_default()(styles_module_default.a.sidebar_link, router.pathname == '/admin' ? styles_module_default.a.active : '')
  }, __jsx("svg", {
    width: "32",
    height: "32",
    viewBox: "0 0 32 32",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, __jsx("path", {
    d: "M4 12L16 2.66666L28 12V26.6667C28 27.3739 27.719 28.0522 27.219 28.5523C26.7189 29.0524 26.0406 29.3333 25.3333 29.3333H6.66667C5.95942 29.3333 5.28115 29.0524 4.78105 28.5523C4.28095 28.0522 4 27.3739 4 26.6667V12Z",
    stroke: "white",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), __jsx("path", {
    d: "M12 29.3333V16H20V29.3333",
    stroke: "white",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })))), __jsx(i18n["Link"], {
    href: "/admin/news"
  }, __jsx("a", {
    className: external_clsx_default()(styles_module_default.a.sidebar_link, router.pathname == '/admin/news' ? styles_module_default.a.active : '')
  }, __jsx("svg", {
    width: "32",
    height: "32",
    viewBox: "0 0 32 32",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, __jsx("path", {
    d: "M28 20C28 20.7072 27.719 21.3855 27.219 21.8856C26.7189 22.3857 26.0406 22.6667 25.3333 22.6667H9.33333L4 28V6.66667C4 5.95942 4.28095 5.28115 4.78105 4.78105C5.28115 4.28095 5.95942 4 6.66667 4H25.3333C26.0406 4 26.7189 4.28095 27.219 4.78105C27.719 5.28115 28 5.95942 28 6.66667V20Z",
    stroke: "white",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })))), __jsx(i18n["Link"], {
    href: "/admin/project"
  }, __jsx("a", {
    className: external_clsx_default()(styles_module_default.a.sidebar_link, router.pathname == '/admin/project' ? styles_module_default.a.active : '')
  }, __jsx("svg", {
    width: "32",
    height: "32",
    viewBox: "0 0 32 32",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, __jsx("path", {
    d: "M18.6666 2.66666H7.99998C7.29274 2.66666 6.61446 2.94761 6.11436 3.4477C5.61426 3.9478 5.33331 4.62608 5.33331 5.33332V26.6667C5.33331 27.3739 5.61426 28.0522 6.11436 28.5523C6.61446 29.0524 7.29274 29.3333 7.99998 29.3333H24C24.7072 29.3333 25.3855 29.0524 25.8856 28.5523C26.3857 28.0522 26.6666 27.3739 26.6666 26.6667V10.6667L18.6666 2.66666Z",
    stroke: "white",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), __jsx("path", {
    d: "M18.6667 2.66666V10.6667H26.6667",
    stroke: "white",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), __jsx("path", {
    d: "M21.3334 17.3333H10.6667",
    stroke: "white",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), __jsx("path", {
    d: "M21.3334 22.6667H10.6667",
    stroke: "white",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), __jsx("path", {
    d: "M13.3334 12H12H10.6667",
    stroke: "white",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })))), __jsx(i18n["Link"], {
    href: "/admin/webinars"
  }, __jsx("a", {
    className: external_clsx_default()(styles_module_default.a.sidebar_link, router.pathname == '/admin/webinars' ? styles_module_default.a.active : '')
  }, __jsx("svg", {
    width: "32",
    height: "32",
    viewBox: "0 0 32 32",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, __jsx("path", {
    d: "M16 29.3333C23.3638 29.3333 29.3334 23.3638 29.3334 16C29.3334 8.63621 23.3638 2.66667 16 2.66667C8.63622 2.66667 2.66669 8.63621 2.66669 16C2.66669 23.3638 8.63622 29.3333 16 29.3333Z",
    stroke: "white",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), __jsx("path", {
    d: "M13.3333 10.6667L21.3333 16L13.3333 21.3333V10.6667Z",
    stroke: "white",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))))));
}

/* harmony default export */ var components_AdminSidebar = (AdminSidebar);
// EXTERNAL MODULE: ./src/components/AdminHeader/styles.module.scss
var AdminHeader_styles_module = __webpack_require__("TA7y");
var AdminHeader_styles_module_default = /*#__PURE__*/__webpack_require__.n(AdminHeader_styles_module);

// CONCATENATED MODULE: ./src/components/AdminHeader/index.jsx
var AdminHeader_jsx = external_react_default.a.createElement;




function AdminHeader() {
  return AdminHeader_jsx("header", {
    className: AdminHeader_styles_module_default.a.header
  }, AdminHeader_jsx("div", {
    className: "container"
  }, AdminHeader_jsx("nav", {
    className: AdminHeader_styles_module_default.a.header_content
  }, AdminHeader_jsx(i18n["Link"], {
    href: "/"
  }, AdminHeader_jsx("a", {
    className: AdminHeader_styles_module_default.a.header_bold
  }, AdminHeader_jsx("img", {
    src: "/h_logo.svg",
    alt: "#"
  }))), AdminHeader_jsx("div", {
    className: ""
  }, AdminHeader_jsx("img", {
    src: "/bell.svg",
    alt: "#"
  })), AdminHeader_jsx("div", {
    className: AdminHeader_styles_module_default.a.header_bold
  }, "\u041A\u0438\u0446\u0435\u043D\u043A\u043E \u0410\u0440\u0442\u0451\u043C", AdminHeader_jsx("img", {
    src: "/adminUser.svg",
    alt: "user",
    style: {
      marginLeft: '20px'
    }
  })))));
}

/* harmony default export */ var components_AdminHeader = (AdminHeader);
// EXTERNAL MODULE: ./src/components/AdminLayout/styles.module.scss
var AdminLayout_styles_module = __webpack_require__("3rPB");
var AdminLayout_styles_module_default = /*#__PURE__*/__webpack_require__.n(AdminLayout_styles_module);

// CONCATENATED MODULE: ./src/components/AdminLayout/index.jsx
var AdminLayout_jsx = external_react_default.a.createElement;






function AdminLayout({
  children
}) {
  return AdminLayout_jsx("div", {
    className: external_clsx_default()(AdminLayout_styles_module_default.a.layout, 'home')
  }, AdminLayout_jsx("main", {
    className: "flex"
  }, AdminLayout_jsx(components_AdminSidebar, null), AdminLayout_jsx("div", {
    className: "content"
  }, AdminLayout_jsx(components_AdminHeader, null), children, AdminLayout_jsx("footer", null, AdminLayout_jsx("div", {
    className: "container"
  }, AdminLayout_jsx("div", {
    className: AdminLayout_styles_module_default.a.layout_content
  }, AdminLayout_jsx(i18n["Link"], {
    href: "/"
  }, AdminLayout_jsx("a", {
    className: AdminLayout_styles_module_default.a.layout_link
  }, "\u041F\u0430\u043D\u0435\u043B\u044C \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F")), AdminLayout_jsx(i18n["Link"], {
    href: "/news"
  }, AdminLayout_jsx("a", {
    className: AdminLayout_styles_module_default.a.layout_link
  }, "\u041D\u043E\u0432\u043E\u0441\u0442\u0438")), AdminLayout_jsx(i18n["Link"], {
    href: "/project"
  }, AdminLayout_jsx("a", {
    className: AdminLayout_styles_module_default.a.layout_link
  }, "\u041F\u0440\u043E\u0435\u043A\u0442\u044B ")), AdminLayout_jsx(i18n["Link"], {
    href: "/webinars"
  }, AdminLayout_jsx("a", {
    className: AdminLayout_styles_module_default.a.layout_link
  }, "\u0412\u0435\u0431\u0438\u043D\u0430\u0440\u044B "))))))));
}

/***/ }),

/***/ "wEaX":
/***/ (function(module, exports) {

module.exports = require("react-cookie");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "zU/5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AdminProject; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("xnum");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_AdminLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("ro8X");
/* harmony import */ var _components_AdminNewsComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("VYX8");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function AdminProject() {
  return __jsx(_components_AdminLayout__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, __jsx("title", null, "Tourism: AdminPanel")), __jsx("div", {
    className: "container"
  }, __jsx(_components_AdminNewsComponent__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    title: 'Публикации',
    smalltitle: 'публикацию'
  })));
}

/***/ })

/******/ });