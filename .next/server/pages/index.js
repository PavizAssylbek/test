module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
/******/ })
/************************************************************************/
/******/ ({

/***/ "0M3C":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"smallproject": "styles_smallproject__1lKln",
	"smallproject__img": "styles_smallproject__img__25pwj",
	"smallproject_view": "styles_smallproject_view__Osed1",
	"smallproject_text": "styles_smallproject_text__3m4Rl"
};


/***/ }),

/***/ 13:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("RXBc");


/***/ }),

/***/ "1nAM":
/***/ (function(module, exports) {

module.exports = require("swiper");

/***/ }),

/***/ "2/Zt":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ MainLayout; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./i18n.js
var i18n = __webpack_require__("k7Sn");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: external "react-cookie"
var external_react_cookie_ = __webpack_require__("wEaX");

// EXTERNAL MODULE: ./src/components/Sidebar/styles.module.scss
var styles_module = __webpack_require__("W9/q");
var styles_module_default = /*#__PURE__*/__webpack_require__.n(styles_module);

// EXTERNAL MODULE: external "clsx"
var external_clsx_ = __webpack_require__("dYMV");
var external_clsx_default = /*#__PURE__*/__webpack_require__.n(external_clsx_);

// CONCATENATED MODULE: ./src/components/Sidebar/index.jsx
var __jsx = external_react_default.a.createElement;






const cookies = new external_react_cookie_["Cookies"]();

function Sidebar() {
  const router = Object(router_["useRouter"])();
  const [vissible, setVissible] = external_react_default.a.useState(false);
  const vissibleBtn = Boolean(cookies.get('token') !== 'null');
  console.log("Sidebar -> vissibleBtn", vissibleBtn);

  const toggleVisible = () => {
    setVissible(!vissible);
  };

  return __jsx("div", {
    className: styles_module_default.a.sidebar
  }, __jsx("div", {
    className: styles_module_default.a.sidebar_content
  }, __jsx(i18n["Link"], {
    href: "/"
  }, __jsx("a", {
    className: external_clsx_default()(styles_module_default.a.sidebar_link, router.pathname == '/' ? styles_module_default.a.active : '')
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
    href: "/news"
  }, __jsx("a", {
    className: external_clsx_default()(styles_module_default.a.sidebar_link, router.pathname == '/news' ? styles_module_default.a.active : '')
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
    href: "/project"
  }, __jsx("a", {
    className: external_clsx_default()(styles_module_default.a.sidebar_link, router.pathname == '/project' ? styles_module_default.a.active : '')
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
    href: "/webinars"
  }, __jsx("a", {
    className: external_clsx_default()(styles_module_default.a.sidebar_link, router.pathname == '/webinars' ? styles_module_default.a.active : '')
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
  })))), vissibleBtn === true ? __jsx("div", {
    onClick: toggleVisible,
    className: external_clsx_default()(styles_module_default.a.sidebar_link, styles_module_default.a.sidebar_btn)
  }, vissible && __jsx("div", {
    className: external_clsx_default()(styles_module_default.a.sidebar_menu, 'border-radius')
  }, __jsx("p", null, "\u041A\u0438\u0446\u0435\u043D\u043A\u043E \u0410\u0440\u0442\u0451\u043C"), __jsx(i18n["Link"], {
    href: "/"
  }, __jsx("a", null, "\u041F\u0440\u043E\u0444\u0438\u043B\u044C")), __jsx(i18n["Link"], {
    href: "/"
  }, __jsx("a", null, "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438")), __jsx(i18n["Link"], {
    href: "/feedback"
  }, __jsx("a", {
    className: styles_module_default.a.sidebar_feedback
  }, "\u041E\u0431\u0440\u0430\u0442\u043D\u0430\u044F \u0441\u0432\u044F\u0437\u044C ", __jsx("sup", null, "2")))), __jsx("svg", {
    width: "51",
    height: "51",
    viewBox: "0 0 51 51",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, __jsx("circle", {
    cx: "25.5",
    cy: "25.5",
    r: "25.5",
    fill: "white"
  }), __jsx("path", {
    d: "M35.6666 38V35.3333C35.6666 33.9188 35.1047 32.5623 34.1045 31.5621C33.1044 30.5619 31.7478 30 30.3333 30H19.6666C18.2522 30 16.8956 30.5619 15.8954 31.5621C14.8952 32.5623 14.3333 33.9188 14.3333 35.3333V38",
    stroke: "#1AB7E2",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), __jsx("path", {
    d: "M25 24.6667C27.9455 24.6667 30.3334 22.2789 30.3334 19.3333C30.3334 16.3878 27.9455 14 25 14C22.0545 14 19.6667 16.3878 19.6667 19.3333C19.6667 22.2789 22.0545 24.6667 25 24.6667Z",
    stroke: "#1AB7E2",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))) : __jsx(external_react_default.a.Fragment, null)));
}

/* harmony default export */ var components_Sidebar = (Sidebar);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__("6f9I");

// EXTERNAL MODULE: ./src/components/Header/styles.module.scss
var Header_styles_module = __webpack_require__("JmTP");
var Header_styles_module_default = /*#__PURE__*/__webpack_require__.n(Header_styles_module);

// CONCATENATED MODULE: ./src/components/Header/index.jsx
var Header_jsx = external_react_default.a.createElement;








const Header_cookies = new external_react_cookie_["Cookies"]();

function Header({
  t
}) {
  const router = Object(router_["useRouter"])();
  const [visiblePopup, setVisiblePopup] = external_react_default.a.useState(false);
  const visibleToken = Boolean(Header_cookies.get('token') !== 'null');
  const langRef = external_react_default.a.useRef();
  const {
    i18n: {
      language
    }
  } = external_react_default.a.useContext(external_next_i18next_["I18nContext"]);

  const toggleVisible = () => {
    setVisiblePopup(!visiblePopup);
  };

  const handleOutsideClick = e => {
    if (!e.path.includes(langRef.current)) {
      setVisiblePopup(false);
    }
  };

  external_react_default.a.useEffect(() => {
    document.body.addEventListener('click', handleOutsideClick);
    return () => {
      document.body.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  const onSelectItem = lang => {
    i18n["i18n"].changeLanguage(lang);
    setVisiblePopup(false);
  };

  const singOut = () => {
    Header_cookies.set("token", 'null');
    router.push('/');
  };

  return Header_jsx("header", {
    className: Header_styles_module_default.a.header
  }, Header_jsx("div", {
    className: "container"
  }, Header_jsx("div", {
    className: Header_styles_module_default.a.header_content
  }, Header_jsx(i18n["Link"], {
    href: "/"
  }, Header_jsx("a", {
    className: Header_styles_module_default.a.header_bold
  }, Header_jsx("img", {
    src: "/h_logo.svg",
    alt: "#"
  }))), Header_jsx(i18n["Link"], {
    href: "/"
  }, Header_jsx("a", {
    className: router.pathname == '/' ? Header_styles_module_default.a.active : ''
  }, t('h1'))), Header_jsx(i18n["Link"], {
    href: "/news"
  }, Header_jsx("a", {
    className: router.pathname == '/news' ? Header_styles_module_default.a.active : ''
  }, "\u041D\u043E\u0432\u043E\u0441\u0442\u0438")), Header_jsx(i18n["Link"], {
    href: "/project"
  }, Header_jsx("a", {
    className: router.pathname == '/project' ? Header_styles_module_default.a.active : ''
  }, "\u041F\u0440\u043E\u0435\u043A\u0442\u044B")), Header_jsx(i18n["Link"], {
    href: "/webinars"
  }, Header_jsx("a", {
    className: router.pathname == '/webinars' ? Header_styles_module_default.a.active : ''
  }, "\u0412\u0435\u0431\u0438\u043D\u0430\u0440\u044B")), visibleToken === false ? Header_jsx(i18n["Link"], {
    href: "/login"
  }, Header_jsx("a", {
    className: Header_styles_module_default.a.header_bold
  }, "\u0412\u043E\u0439\u0442\u0438 ", Header_jsx("img", {
    src: "/login.svg",
    alt: "login"
  }))) : Header_jsx("a", {
    onClick: singOut,
    className: Header_styles_module_default.a.header_bold
  }, "\u0412\u044B\u0439\u0442\u0438 ", Header_jsx("img", {
    src: "/login.svg",
    alt: "login"
  })), Header_jsx("div", {
    ref: langRef,
    className: Header_styles_module_default.a.header_lang
  }, Header_jsx("span", {
    onClick: toggleVisible
  }, language, " ", Header_jsx("img", {
    src: "/dd.svg",
    alt: "#"
  })), visiblePopup && Header_jsx("ul", {
    className: external_clsx_default()(Header_styles_module_default.a.header_langs, 'border-radius')
  }, Header_jsx("li", {
    onClick: () => language !== 'ru' ? onSelectItem('ru') : '',
    className: external_clsx_default()(language === 'ru' ? Header_styles_module_default.a.active : '')
  }, "ru"), Header_jsx("li", {
    onClick: () => language !== 'kz' ? onSelectItem('kz') : '',
    className: external_clsx_default()(language === 'kz' ? Header_styles_module_default.a.active : '')
  }, "kz"))), visibleToken === false ? Header_jsx(i18n["Link"], {
    href: "/regis"
  }, Header_jsx("a", {
    className: external_clsx_default()(Header_styles_module_default.a.registration, 'border-radius')
  }, "\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438")) : Header_jsx(external_react_default.a.Fragment, null))));
}

/* harmony default export */ var components_Header = (Object(i18n["withTranslation"])('header')(Header));
// CONCATENATED MODULE: ./src/components/MainLayout/index.jsx
var MainLayout_jsx = external_react_default.a.createElement;




function MainLayout({
  children
}) {
  return MainLayout_jsx("div", {
    className: "home"
  }, MainLayout_jsx("main", {
    className: "flex"
  }, MainLayout_jsx(components_Sidebar, null), MainLayout_jsx("div", {
    className: "content"
  }, MainLayout_jsx(components_Header, null), children, MainLayout_jsx("section", {
    className: "footer-top"
  }, MainLayout_jsx("div", {
    className: "container"
  }, MainLayout_jsx("div", {
    className: "footer-top_flex"
  }, MainLayout_jsx(i18n["Link"], {
    href: "https://www.gov.kz/memleket/entities/mcs"
  }, MainLayout_jsx("a", {
    className: "flex",
    target: "_blank"
  }, MainLayout_jsx("img", {
    src: "/footer1.jpg",
    alt: "#"
  }), "\u041C\u0438\u043D\u0438\u0441\u0442\u0435\u0440\u0441\u0442\u0432\u043E \u043A\u0443\u043B\u044C\u0442\u0443\u0440\u044B \u0438 \u0441\u043F\u043E\u0440\u0442\u0430 \u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0438 \u041A\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043D")), MainLayout_jsx(i18n["Link"], {
    href: "https://qaztourism.kz/"
  }, MainLayout_jsx("a", {
    className: "flex",
    target: "_blank"
  }, MainLayout_jsx("img", {
    src: "/footer2.jpg",
    alt: "#"
  }), "\u041E\u0444\u0438\u0446\u0438\u0430\u043B\u044C\u043D\u044B\u0439 \u0432\u0435\u0431-\u0441\u0430\u0439\u0442 \u0410\u041E \"\u041D\u041A \"Kazakh Tourism\"")), MainLayout_jsx(i18n["Link"], {
    href: "https://tourstat.kz"
  }, MainLayout_jsx("a", {
    className: "flex",
    target: "_blank"
  }, MainLayout_jsx("img", {
    src: "/footer3.jpg",
    alt: "#"
  }), "\u041D\u0430\u0446\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0439 \u0442\u0443\u0440\u0438\u0441\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u043F\u043E\u0440\u0442\u0430\u043B")), MainLayout_jsx(i18n["Link"], {
    href: "https://kazakhstan.travel"
  }, MainLayout_jsx("a", {
    className: "flex",
    target: "_blank"
  }, MainLayout_jsx("img", {
    src: "/footer1.jpg",
    alt: "#"
  }), "\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u043E\u043D\u043D\u0430\u044F \u0441\u0438\u0441\u0442\u0435\u043C\u0430 \u0434\u043B\u044F \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044F \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 \"Tourstat\""))))), MainLayout_jsx("footer", {
    className: "footer"
  }, MainLayout_jsx("div", {
    className: "container"
  }, MainLayout_jsx("div", {
    className: "footer-flex"
  }, MainLayout_jsx("div", {
    className: "footer-img"
  }, MainLayout_jsx(i18n["Link"], {
    href: "/"
  }, MainLayout_jsx("a", null, MainLayout_jsx("img", {
    src: "/h_logo.svg",
    alt: "#"
  })))), MainLayout_jsx("div", {
    className: "footer-links"
  }, MainLayout_jsx(i18n["Link"], {
    href: "/"
  }, MainLayout_jsx("a", null, "\u0413\u043B\u0430\u0432\u043D\u0430\u044F")), MainLayout_jsx(i18n["Link"], {
    href: "/news"
  }, MainLayout_jsx("a", null, "\u041D\u043E\u0432\u043E\u0441\u0442\u0438")), MainLayout_jsx(i18n["Link"], {
    href: "/project"
  }, MainLayout_jsx("a", null, "\u041F\u0443\u0431\u043B\u0438\u043A\u0430\u0446\u0438\u0438")), MainLayout_jsx(i18n["Link"], {
    href: "/webinars"
  }, MainLayout_jsx("a", null, "\u0412\u0435\u0431\u0438\u043D\u0430\u0440\u044B")))))))));
}

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "6f9I":
/***/ (function(module, exports) {

module.exports = require("next-i18next");

/***/ }),

/***/ "JepZ":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"main_project": "styles_main_project__1ukLU",
	"main_project_head": "styles_main_project_head__ariJu",
	"main_project_sort": "styles_main_project_sort__3JOB9",
	"main_project_slide": "styles_main_project_slide__3jmDA",
	"main_project_link": "styles_main_project_link__3muMH",
	"main_project_buttons": "styles_main_project_buttons__2Lj-_",
	"main_project_prev": "styles_main_project_prev__Rpeca",
	"main_project_next": "styles_main_project_next__2Xrzh",
	"main_project_grid": "styles_main_project_grid__1o5ui"
};


/***/ }),

/***/ "JmTP":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"header": "styles_header__gNENU",
	"header_content": "styles_header_content__wqZ7X",
	"header_bold": "styles_header_bold__1DBrb",
	"active": "styles_active__3zqNB",
	"registration": "styles_registration__3iYNg",
	"header_lang": "styles_header_lang__aT7ry",
	"header_langs": "styles_header_langs__2Ys0O"
};


/***/ }),

/***/ "N+eV":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"mainwebinars": "styles_mainwebinars__1G01z",
	"mainwebinars_head": "styles_mainwebinars_head__2walL",
	"mainwebinars_link": "styles_mainwebinars_link__1yNc_",
	"mainwebinars_content": "styles_mainwebinars_content__2hUoz"
};


/***/ }),

/***/ "RXBc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return /* binding */ getServerSideProps; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: ./src/components/MainLayout/index.jsx + 2 modules
var MainLayout = __webpack_require__("2/Zt");

// EXTERNAL MODULE: ./src/components/MainSlider/styles.module.scss
var styles_module = __webpack_require__("t/eN");
var styles_module_default = /*#__PURE__*/__webpack_require__.n(styles_module);

// EXTERNAL MODULE: external "swiper"
var external_swiper_ = __webpack_require__("1nAM");
var external_swiper_default = /*#__PURE__*/__webpack_require__.n(external_swiper_);

// EXTERNAL MODULE: external "swiper/react"
var react_ = __webpack_require__("mNWG");

// EXTERNAL MODULE: external "clsx"
var external_clsx_ = __webpack_require__("dYMV");
var external_clsx_default = /*#__PURE__*/__webpack_require__.n(external_clsx_);

// EXTERNAL MODULE: ./src/components/MainSlider/Item/styles.module.scss
var Item_styles_module = __webpack_require__("w0IS");
var Item_styles_module_default = /*#__PURE__*/__webpack_require__.n(Item_styles_module);

// CONCATENATED MODULE: ./src/components/MainSlider/Item/index.jsx
var __jsx = external_react_default.a.createElement;




const MainSliderItem = ({
  images,
  text,
  bool
}) => {
  return __jsx("div", {
    className: external_clsx_default()(Item_styles_module_default.a.main_slider_item, bool ? Item_styles_module_default.a.bg : '', 'border-radius')
  }, images, __jsx("h3", null, text));
};

/* harmony default export */ var Item = (MainSliderItem);
// CONCATENATED MODULE: ./src/components/MainSlider/index.jsx
var MainSlider_jsx = external_react_default.a.createElement;






external_swiper_default.a.use([external_swiper_["Navigation"]]);

const MainSlider = () => {
  return MainSlider_jsx("section", {
    className: external_clsx_default()(styles_module_default.a.main_slider, 'container')
  }, MainSlider_jsx("h1", null, MainSlider_jsx("b", null, "\u0422\u0443\u0440\u0438\u0441\u0442\u0438\u0447\u0435\u0441\u043A\u0430\u044F"), MainSlider_jsx("br", null), "\u044D\u043A\u043E\u0441\u0438\u0441\u0442\u0435\u043C\u0430"), MainSlider_jsx("img", {
    className: styles_module_default.a.main_slider_img,
    src: "/main.png",
    alt: ""
  }), MainSlider_jsx("div", {
    className: styles_module_default.a.main_slider_wrapper
  }, MainSlider_jsx(react_["Swiper"], {
    speed: 1000,
    spaceBetween: 30,
    slidesPerView: "auto",
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  }, MainSlider_jsx(react_["SwiperSlide"], {
    className: styles_module_default.a.main_slider_grid
  }, MainSlider_jsx(Item, {
    images: MainSlider_jsx("img", {
      src: "/slide1.png",
      alt: "slide1"
    }),
    bool: false,
    text: "\u041E\u0431\u044A\u0435\u0434\u0438\u043D\u044F\u0435\u0442 \u0443\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u043E\u0432 \u0435\u0434\u0438\u043D\u043E\u0439 \u043A\u043E\u043C\u043C\u0443\u043D\u0438\u043A\u0430\u0446\u0438\u043E\u043D\u043D\u043E\u0439 \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u043E\u0439"
  })), MainSlider_jsx(react_["SwiperSlide"], {
    className: styles_module_default.a.main_slider_grid
  }, MainSlider_jsx(Item, {
    images: MainSlider_jsx("img", {
      src: "/slide2.png",
      alt: "slide2"
    }),
    bool: true,
    text: "\u0424\u043E\u0440\u043C\u0438\u0440\u0443\u0435\u0442 \u043B\u0443\u0447\u0448\u0438\u0439 \u043A\u043B\u0438\u0435\u043D\u0442\u0441\u043A\u0438\u0439 \u043E\u043F\u044B\u0442"
  })), MainSlider_jsx(react_["SwiperSlide"], {
    className: styles_module_default.a.main_slider_grid
  }, MainSlider_jsx(Item, {
    images: MainSlider_jsx("img", {
      src: "/slide1.png",
      alt: "slide1"
    }),
    bool: false,
    text: "\u041E\u0431\u044A\u0435\u0434\u0438\u043D\u044F\u0435\u0442 \u0443\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u043E\u0432 \u0435\u0434\u0438\u043D\u043E\u0439 \u043A\u043E\u043C\u043C\u0443\u043D\u0438\u043A\u0430\u0446\u0438\u043E\u043D\u043D\u043E\u0439 \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u043E\u0439"
  })), MainSlider_jsx(react_["SwiperSlide"], {
    className: styles_module_default.a.main_slider_grid
  }, MainSlider_jsx(Item, {
    images: MainSlider_jsx("img", {
      src: "/slide2.png",
      alt: "slide2"
    }),
    bool: true,
    text: "\u0424\u043E\u0440\u043C\u0438\u0440\u0443\u0435\u0442 \u043B\u0443\u0447\u0448\u0438\u0439 \u043A\u043B\u0438\u0435\u043D\u0442\u0441\u043A\u0438\u0439 \u043E\u043F\u044B\u0442"
  })), MainSlider_jsx("div", {
    className: styles_module_default.a.main_slider_buttons
  }, MainSlider_jsx("div", {
    className: external_clsx_default()(styles_module_default.a.main_slider_prev, "swiper-button-prev")
  }, MainSlider_jsx("svg", {
    height: "30",
    viewBox: "0 0 90 30",
    fill: "none"
  }, MainSlider_jsx("path", {
    d: "M1 7.99997L89 7",
    stroke: "#1AB7E2",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), MainSlider_jsx("path", {
    d: "M8 15L1 8L8 1",
    stroke: "#1AB7E2",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), MainSlider_jsx("div", {
    className: external_clsx_default()(styles_module_default.a.main_slider_next, "swiper-button-next")
  }, MainSlider_jsx("svg", {
    height: "30",
    viewBox: "0 0 90 30",
    fill: "none"
  }, MainSlider_jsx("path", {
    d: "M1 7.99997L89 7",
    stroke: "#1AB7E2",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), MainSlider_jsx("path", {
    d: "M82 0.999969L89 7.99997L82 15",
    stroke: "#1AB7E2",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })))))));
};

/* harmony default export */ var components_MainSlider = (MainSlider);
// EXTERNAL MODULE: ./i18n.js
var i18n = __webpack_require__("k7Sn");

// EXTERNAL MODULE: ./src/components/SmallNews/index.jsx
var SmallNews = __webpack_require__("aqq/");

// EXTERNAL MODULE: ./src/components/MainNews/styles.module.scss
var MainNews_styles_module = __webpack_require__("b4qI");
var MainNews_styles_module_default = /*#__PURE__*/__webpack_require__.n(MainNews_styles_module);

// CONCATENATED MODULE: ./src/components/MainNews/index.jsx
var MainNews_jsx = external_react_default.a.createElement;





function MainNews() {
  return MainNews_jsx("div", {
    className: external_clsx_default()(MainNews_styles_module_default.a.main_news, 'container')
  }, MainNews_jsx("div", {
    className: MainNews_styles_module_default.a.main_news_head
  }, MainNews_jsx("h2", null, "\u041D\u043E\u0432\u043E\u0441\u0442\u0438 \u0442\u0443\u0440\u0438\u0441\u0442\u0438\u0447\u0435\u0441\u043A\u043E\u0439 \u043E\u0442\u0440\u0430\u0441\u043B\u0438"), MainNews_jsx(i18n["Link"], {
    href: "/news"
  }, MainNews_jsx("a", {
    className: MainNews_styles_module_default.a.main_news_link
  }, MainNews_jsx("span", null, "\u0412\u0441\u0435 \u043D\u043E\u0432\u043E\u0441\u0442\u0438"), " ", MainNews_jsx("img", {
    src: "/front.png",
    alt: "back"
  })))), MainNews_jsx("div", {
    className: MainNews_styles_module_default.a.main_news_grid
  }, Array(4).fill(0).map((_, i) => MainNews_jsx(SmallNews["a" /* default */], {
    id: i,
    key: i
  }))));
}
// EXTERNAL MODULE: ./src/components/SmallProject/index.jsx
var SmallProject = __webpack_require__("w9WY");

// EXTERNAL MODULE: ./src/components/MainProject/styles.module.scss
var MainProject_styles_module = __webpack_require__("JepZ");
var MainProject_styles_module_default = /*#__PURE__*/__webpack_require__.n(MainProject_styles_module);

// CONCATENATED MODULE: ./src/components/MainProject/index.jsx
var MainProject_jsx = external_react_default.a.createElement;







external_swiper_default.a.use([external_swiper_["Navigation"]]);
function MainProject() {
  return MainProject_jsx("div", {
    className: external_clsx_default()(MainProject_styles_module_default.a.main_project)
  }, MainProject_jsx("div", {
    className: external_clsx_default()(MainProject_styles_module_default.a.main_project_head, 'container')
  }, MainProject_jsx("h2", null, "\u041F\u0440\u043E\u0435\u043A\u0442\u044B"), MainProject_jsx("div", {
    className: MainProject_styles_module_default.a.main_project_sort
  }, MainProject_jsx(i18n["Link"], {
    href: '/project'
  }, MainProject_jsx("a", null, "Kazakh Tourism")), MainProject_jsx(i18n["Link"], {
    href: '/'
  }, MainProject_jsx("a", null, "Travel-\u0434\u0430\u0439\u0434\u0436\u0435\u0441\u0442\u044B")), MainProject_jsx(i18n["Link"], {
    href: '/project/extrim'
  }, MainProject_jsx("a", null, "\u041C\u043D\u0435\u043D\u0438\u044F \u044D\u043A\u0441\u043F\u0435\u0440\u0442\u043E\u0432"))), MainProject_jsx(i18n["Link"], {
    href: "/project"
  }, MainProject_jsx("a", {
    className: MainProject_styles_module_default.a.main_project_link
  }, MainProject_jsx("span", null, "\u0412\u0441\u0435 \u043F\u0443\u0431\u043B\u0438\u043A\u0430\u0446\u0438\u0438"), " ", MainProject_jsx("img", {
    src: "/front.png",
    alt: "back"
  })))), MainProject_jsx(react_["Swiper"], {
    className: MainProject_styles_module_default.a.main_project_grid,
    spaceBetween: 35,
    slidesPerView: "auto",
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  }, Array(6).fill(0).map((_, i) => MainProject_jsx(react_["SwiperSlide"], {
    className: MainProject_styles_module_default.a.main_project_slide,
    key: i
  }, MainProject_jsx(SmallProject["a" /* default */], {
    id: i
  }))), MainProject_jsx("div", {
    className: "container"
  }, MainProject_jsx("div", {
    className: MainProject_styles_module_default.a.main_project_buttons
  }, MainProject_jsx("div", {
    className: external_clsx_default()(MainProject_styles_module_default.a.main_project_prev, "swiper-button-prev")
  }, MainProject_jsx("svg", {
    height: "30",
    viewBox: "0 0 90 30",
    fill: "none"
  }, MainProject_jsx("path", {
    d: "M1 7.99997L89 7",
    stroke: "#1AB7E2",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), MainProject_jsx("path", {
    d: "M8 15L1 8L8 1",
    stroke: "#1AB7E2",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), MainProject_jsx("div", {
    className: external_clsx_default()(MainProject_styles_module_default.a.main_project_next, "swiper-button-next")
  }, MainProject_jsx("svg", {
    height: "30",
    viewBox: "0 0 90 30",
    fill: "none"
  }, MainProject_jsx("path", {
    d: "M1 7.99997L89 7",
    stroke: "#1AB7E2",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), MainProject_jsx("path", {
    d: "M82 0.999969L89 7.99997L82 15",
    stroke: "#1AB7E2",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })))))));
}
// EXTERNAL MODULE: ./src/components/MainWebinars/styles.module.scss
var MainWebinars_styles_module = __webpack_require__("N+eV");
var MainWebinars_styles_module_default = /*#__PURE__*/__webpack_require__.n(MainWebinars_styles_module);

// EXTERNAL MODULE: ./src/components/SmallWebinars/index.jsx
var SmallWebinars = __webpack_require__("xgAM");

// CONCATENATED MODULE: ./src/components/MainWebinars/index.jsx
var MainWebinars_jsx = external_react_default.a.createElement;





function MainWebinars() {
  return MainWebinars_jsx("div", {
    className: external_clsx_default()(MainWebinars_styles_module_default.a.mainwebinars, 'container')
  }, MainWebinars_jsx("div", {
    className: MainWebinars_styles_module_default.a.mainwebinars_head
  }, MainWebinars_jsx("h2", null, "\u0412\u0435\u0431\u0438\u043D\u0430\u0440\u044B"), MainWebinars_jsx(i18n["Link"], {
    href: "/webinars"
  }, MainWebinars_jsx("a", {
    className: MainWebinars_styles_module_default.a.mainwebinars_link
  }, MainWebinars_jsx("span", null, "\u0412\u0441\u0435 \u0432\u0435\u0431\u0438\u043D\u0430\u0440\u044B"), " ", MainWebinars_jsx("img", {
    src: "/front.png",
    alt: "back"
  })))), MainWebinars_jsx("div", {
    className: MainWebinars_styles_module_default.a.mainwebinars_content
  }, MainWebinars_jsx(SmallWebinars["a" /* default */], {
    finish: false,
    id: 1
  }), MainWebinars_jsx(SmallWebinars["a" /* default */], {
    finish: true,
    id: 2
  }), MainWebinars_jsx(SmallWebinars["a" /* default */], {
    finish: true,
    id: 3
  }), MainWebinars_jsx(SmallWebinars["a" /* default */], {
    finish: true,
    id: 4
  }), MainWebinars_jsx(SmallWebinars["a" /* default */], {
    finish: true,
    id: 5
  })));
}
// CONCATENATED MODULE: ./src/pages/index.js
var pages_jsx = external_react_default.a.createElement;









const Home = ({
  t,
  data
}) => {
  return pages_jsx(MainLayout["a" /* default */], null, pages_jsx(head_default.a, null, pages_jsx("title", null, "Tourism: Online")), pages_jsx(components_MainSlider, null), pages_jsx(MainNews, null), pages_jsx(MainProject, null), pages_jsx(MainWebinars, null));
}; // Home.getInitialProps = async () => ({
//   namespacesRequired: ['common', 'header'],
// })


async function getServerSideProps(context) {
  const BASE_URL = "https://taxparser.crocos.kz/";
  const res = await fetch(`${BASE_URL}/api/projects`);
  const data = await res.json(); // Pass data to the page via props

  return {
    props: {
      data,
      namespacesRequired: ['common', 'header']
    }
  };
}
/* harmony default export */ var pages = __webpack_exports__["default"] = (Object(i18n["withTranslation"])('common')(Home));

/***/ }),

/***/ "W9/q":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"sidebar": "styles_sidebar__3NLqa",
	"sidebar_content": "styles_sidebar_content__2wb0w",
	"sidebar_menu": "styles_sidebar_menu__1zsjk",
	"sidebar_feedback": "styles_sidebar_feedback__2l9pY",
	"sidebar_link": "styles_sidebar_link__20ZNf",
	"sidebar_btn": "styles_sidebar_btn__2VjyV",
	"active": "styles_active__3WuXE"
};


/***/ }),

/***/ "aqq/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SmallNews; });
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("dYMV");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("k7Sn");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("o313");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_3__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




function SmallNews({
  id
}) {
  return __jsx(_i18n__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    href: `/news/${id}`
  }, __jsx("a", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.smallnews
  }, __jsx("img", {
    className: clsx__WEBPACK_IMPORTED_MODULE_0___default()(_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.smallnews__img, 'border-radius'),
    src: "/almaty.png",
    alt: "#"
  }), __jsx("div", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.smallnews_content
  }, __jsx("div", {
    className: "flex"
  }, __jsx("img", {
    src: "/eye.svg",
    alt: "#"
  }), __jsx("span", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.smallnews_view
  }, "222")), __jsx("p", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.smallnews_text
  }, "\u0411\u043E\u043B\u0435\u0435 20 \u043D\u043E\u0432\u044B\u0445 \u0442\u0443\u0440\u043E\u0431\u044A\u0435\u043A\u0442\u043E\u0432 \u043F\u043E\u044F\u0432\u044F\u0442\u0441\u044F \u0432 \u0410\u043B\u043C\u0430\u0442\u0438\u043D\u0441\u043A\u043E\u0439 \u043E\u0431\u043B\u0430\u0441\u0442\u0438 \u0434\u043E \u043A\u043E\u043D\u0446\u0430 \u0433\u043E\u0434\u0430"), __jsx("span", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.smallnews_data
  }, "21.09.2020"))));
}

/***/ }),

/***/ "b4qI":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"main_news": "styles_main_news__1FZAv",
	"main_news_head": "styles_main_news_head__1KdxR",
	"main_news_link": "styles_main_news_link__vZzko",
	"main_news_grid": "styles_main_news_grid__3Kmkf"
};


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

/***/ "ke3k":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"smallwebinars": "styles_smallwebinars__iegng",
	"smallwebinars_img": "styles_smallwebinars_img__1Bsls",
	"smallwebinars_content": "styles_smallwebinars_content__2Y2QH",
	"smallwebinars_finish": "styles_smallwebinars_finish__DyZ55",
	"smallwebinars_text": "styles_smallwebinars_text__3_DZc"
};


/***/ }),

/***/ "mNWG":
/***/ (function(module, exports) {

module.exports = require("swiper/react");

/***/ }),

/***/ "o313":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"smallnews": "styles_smallnews__2cH15",
	"smallnews__img": "styles_smallnews__img__U3zDL",
	"smallnews_view": "styles_smallnews_view__2tgCW",
	"smallnews_text": "styles_smallnews_text__1sbTI",
	"smallnews_data": "styles_smallnews_data__1FvZF"
};


/***/ }),

/***/ "oyvS":
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "t/eN":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"main_slider": "styles_main_slider__1nA9i",
	"main_slider_wrapper": "styles_main_slider_wrapper__qRGRP",
	"main_slider_buttons": "styles_main_slider_buttons__1yn7E",
	"main_slider_prev": "styles_main_slider_prev__4pyDS",
	"main_slider_next": "styles_main_slider_next__1vuoP",
	"main_slider_img": "styles_main_slider_img__2oQMt",
	"main_slider_grid": "styles_main_slider_grid__ZZ6RD"
};


/***/ }),

/***/ "w0IS":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"main_slider_item": "styles_main_slider_item__350sH",
	"bg": "styles_bg__2kp8H"
};


/***/ }),

/***/ "w9WY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SmallProject; });
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("dYMV");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("0M3C");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("k7Sn");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_i18n__WEBPACK_IMPORTED_MODULE_3__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




function SmallProject({
  id
}) {
  return __jsx(_i18n__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    href: `/project/${id}`
  }, __jsx("a", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.smallproject
  }, __jsx("img", {
    className: clsx__WEBPACK_IMPORTED_MODULE_0___default()(_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.smallproject__img, 'border-radius'),
    src: "/boa.png",
    alt: "#"
  }), __jsx("div", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.smallproject_content
  }, __jsx("div", {
    className: "flex"
  }, __jsx("img", {
    src: "/eye.svg",
    alt: "#"
  }), __jsx("span", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.smallproject_view
  }, "222")), __jsx("p", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.smallproject_text
  }, "\u0410\u043D\u0442\u0438-\u0412\u0430\u043B\u0435\u043D\u0442\u0438\u043D \u2014 \u0442\u043E\u043F-5 \u043C\u0435\u0441\u0442, \u0433\u0434\u0435 \u043C\u043E\u0436\u043D\u043E \u0438\u0437\u043B\u0435\u0447\u0438\u0442\u044C\u0441\u044F \u043E\u0442 \u043B\u044E\u0431\u0432\u0438"))));
}

/***/ }),

/***/ "wEaX":
/***/ (function(module, exports) {

module.exports = require("react-cookie");

/***/ }),

/***/ "xgAM":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SmallWebinars; });
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("dYMV");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("k7Sn");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("ke3k");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_3__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




function SmallWebinars({
  finish,
  id
}) {
  return __jsx(_i18n__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    href: `/webinars/${id}`
  }, __jsx("a", {
    className: clsx__WEBPACK_IMPORTED_MODULE_0___default()(_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.smallwebinars, 'border-radius')
  }, __jsx("img", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.smallwebinars_img,
    src: "/people.png",
    alt: "#"
  }), __jsx("div", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.smallwebinars_content
  }, __jsx("div", null, __jsx("img", {
    src: "/calendar2.svg",
    alt: "svg"
  }), __jsx("span", null, "21.09.2020")), __jsx("div", null, __jsx("img", {
    src: "/clock.svg",
    alt: "svg"
  }), __jsx("span", null, "12:00")), __jsx("img", {
    src: "/playcircle.svg",
    alt: "svg"
  })), __jsx("div", null, finish && __jsx("p", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.smallwebinars_finish
  }, __jsx("img", {
    src: "/finish.svg",
    alt: "#"
  }), " \u0417\u0430\u043A\u043E\u043D\u0447\u0438\u043B\u0441\u044F"), __jsx("p", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.smallwebinars_text
  }, "\u0421\u0435\u043C\u0435\u0439\u043D\u044B\u0439 \u043E\u0442\u0434\u044B\u0445 \u0432 \u0441\u0442\u0438\u043B\u0435 Blue Diamond"))));
}

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });