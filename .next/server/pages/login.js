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
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ({

/***/ 14:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("gMHI");


/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "6f9I":
/***/ (function(module, exports) {

module.exports = require("next-i18next");

/***/ }),

/***/ "HtuO":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"layout": "styles_layout__3ts2z",
	"layout_content": "styles_layout_content__1qNZZ",
	"layout_img": "styles_layout_img__OYgC4",
	"layout_link": "styles_layout_link__jRNeq"
};


/***/ }),

/***/ "Rk7g":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrationLayout; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("k7Sn");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("HtuO");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function RegistrationLayout({
  children
}) {
  return __jsx("div", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.layout
  }, __jsx("div", {
    className: "container"
  }, __jsx("div", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.layout_content
  }, __jsx(_i18n__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    href: "/"
  }, __jsx("a", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.layout_img
  }, __jsx("img", {
    src: "/h_logo.svg",
    alt: "#"
  }))), __jsx("main", null, children), __jsx("footer", null, __jsx(_i18n__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    href: "/"
  }, __jsx("a", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.layout_link
  }, "\u0413\u043B\u0430\u0432\u043D\u0430\u044F")), __jsx(_i18n__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    href: "/news"
  }, __jsx("a", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.layout_link
  }, "\u041D\u043E\u0432\u043E\u0441\u0442\u0438")), __jsx(_i18n__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    href: "/project"
  }, __jsx("a", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.layout_link
  }, "\u041F\u0440\u043E\u0435\u043A\u0442\u044B ")), __jsx(_i18n__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    href: "/webinars"
  }, __jsx("a", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.layout_link
  }, "\u0412\u0435\u0431\u0438\u043D\u0430\u0440\u044B "))))));
}

/***/ }),

/***/ "XA9Y":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"login": "styles_login__2dm7A",
	"login_active": "styles_login_active__2TQGk",
	"login_btn": "styles_login_btn__KW_yo",
	"login_bg": "styles_login_bg__Ho1-6",
	"login_download": "styles_login_download__3VaxZ",
	"login_forgot": "styles_login_forgot__1EE-4",
	"login_reg": "styles_login_reg__1vzDw"
};


/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cOYy":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"input": "styles_input__2v3X9"
};


/***/ }),

/***/ "dYMV":
/***/ (function(module, exports) {

module.exports = require("clsx");

/***/ }),

/***/ "gMHI":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("xnum");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_RegistrationLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Rk7g");
/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("wEaX");
/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_cookie__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("XA9Y");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("dYMV");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_InputComponent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("sl4n");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("k7Sn");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_i18n__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









const cookies = new react_cookie__WEBPACK_IMPORTED_MODULE_3__["Cookies"]();

function Login({}) {
  const route = Object(next_router__WEBPACK_IMPORTED_MODULE_8__["useRouter"])();
  const [activeItem, setActiveItem] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(0);
  const [login, setLogin] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState('');
  const [password, setPassword] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState('');
  const btnText = ['ЭЦП', 'Логин'];

  const onSelectItem = id => {
    setActiveItem(id);
  };

  async function signIn() {
    const BASE_URL = "https://taxparser.crocos.kz/";
    const formdata = new FormData();
    formdata.append("username", login);
    formdata.append("password", password);
    const data = await fetch(`${BASE_URL}/api/login`, {
      method: 'POST',
      body: formdata
    });
    const loginResponse = await data.json();

    if (loginResponse.content !== null) {
      cookies.set("token", loginResponse.content);
      setLogin('');
      setPassword('');
      route.push('/');
    } else {
      alert("Error man");
    }
  }

  return __jsx(_components_RegistrationLayout__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, __jsx("title", null, "Tourism: Online")), __jsx("div", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.login
  }, __jsx("h6", null, "\u0412\u0445\u043E\u0434 \u0432 \u0441\u0438\u0441\u0442\u0435\u043C\u0443"), __jsx("div", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.login_btn
  }, btnText && btnText.map((el, i) => __jsx("button", {
    className: clsx__WEBPACK_IMPORTED_MODULE_5___default()(activeItem === i ? _styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.login_active : ''),
    onClick: () => activeItem !== i ? onSelectItem(i) : '',
    key: i
  }, el))), activeItem === 0 ? __jsx("div", {
    className: clsx__WEBPACK_IMPORTED_MODULE_5___default()(_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.login_bg, 'border-radius')
  }, __jsx("div", {
    className: clsx__WEBPACK_IMPORTED_MODULE_5___default()(_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.login_download, 'border-radius')
  }, __jsx("div", null, __jsx("img", {
    src: "/download.svg",
    alt: "#"
  }), "\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C"))) : __jsx("div", {
    className: clsx__WEBPACK_IMPORTED_MODULE_5___default()(_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.login_bg, 'border-radius')
  }, __jsx("form", null, __jsx(_components_InputComponent__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {
    type: 'text',
    place: 'Логин',
    value: login,
    onChange: setLogin
  }), __jsx(_components_InputComponent__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {
    type: 'password',
    place: 'Пароль',
    value: password,
    onChange: setPassword
  }), __jsx(_components_InputComponent__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {
    onClick: signIn,
    className: 'submit',
    type: 'button',
    place: '',
    value: 'Вход'
  })), __jsx(_i18n__WEBPACK_IMPORTED_MODULE_7__["Link"], {
    href: "/"
  }, __jsx("a", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.login_forgot
  }, "\u0417\u0430\u0431\u044B\u043B\u0438 \u043F\u0430\u0440\u043E\u043B\u044C \u0438\u043B\u0438 \u043B\u043E\u0433\u0438\u043D?")), __jsx(_i18n__WEBPACK_IMPORTED_MODULE_7__["Link"], {
    href: "/regis"
  }, __jsx("a", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.login_reg
  }, "\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F")))));
}

/* harmony default export */ __webpack_exports__["default"] = (Login);

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

/***/ "sl4n":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return inputComponent; });
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("dYMV");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("cOYy");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



function inputComponent({
  type,
  place,
  value,
  className,
  onClick,
  onChange
}) {
  return __jsx("input", {
    className: clsx__WEBPACK_IMPORTED_MODULE_0___default()(_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.input, className, 'border-radius'),
    onClick: onClick,
    onChange: e => onChange(e.target.value),
    type: type,
    placeholder: place,
    value: value,
    required: true
  });
}

/***/ }),

/***/ "wEaX":
/***/ (function(module, exports) {

module.exports = require("react-cookie");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });