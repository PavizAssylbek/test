webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/Header/index.jsx":
/*!*****************************************!*\
  !*** ./src/components/Header/index.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles.module.scss */ "./src/components/Header/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../i18n */ "./i18n.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_i18n__WEBPACK_IMPORTED_MODULE_6__);


var _jsxFileName = "C:\\Users\\meehr\\Desktop\\test\\src\\components\\Header\\index.jsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







function Header(_ref) {
  _s();

  var _this = this;

  var t = _ref.t;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      visiblePopup = _React$useState2[0],
      setVisiblePopup = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(0),
      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState3, 2),
      activeItem = _React$useState4[0],
      setActiveItem = _React$useState4[1];

  var langRef = react__WEBPACK_IMPORTED_MODULE_1___default.a.useRef();
  var allLang = ['ru', 'kz'];
  var activeLang = allLang[activeItem];

  var toggleVisible = function toggleVisible() {
    setVisiblePopup(!visiblePopup);
  };

  var handleOutsideClick = function handleOutsideClick(e) {
    if (!e.path.includes(langRef.current)) {
      setVisiblePopup(false);
    }
  };

  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(function () {
    document.body.addEventListener('click', handleOutsideClick);
    return function () {
      document.body.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  var onSelectItem = function onSelectItem(id) {
    setActiveItem(id);
    setVisiblePopup(false);
  };

  return __jsx("header", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.header,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 3
    }
  }, __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 5
    }
  }, __jsx("nav", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.header_content,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }
  }, __jsx("a", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.header_bold,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: "/h_logo.svg",
    alt: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }
  }))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }
  }, __jsx("a", {
    className: router.pathname == '/' ? _styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.active : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 11
    }
  }, t('main'))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/news",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }
  }, __jsx("a", {
    className: router.pathname == '/news' ? _styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.active : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 11
    }
  }, "\u041D\u043E\u0432\u043E\u0441\u0442\u0438")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/project",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 9
    }
  }, __jsx("a", {
    className: router.pathname == '/project' ? _styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.active : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 11
    }
  }, "\u041F\u0440\u043E\u0435\u043A\u0442\u044B")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/webinars",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 9
    }
  }, __jsx("a", {
    className: router.pathname == '/webinars' ? _styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.active : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 11
    }
  }, "\u0412\u0435\u0431\u0438\u043D\u0430\u0440\u044B")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/login",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 9
    }
  }, __jsx("a", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.header_bold,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 11
    }
  }, "\u0412\u043E\u0439\u0442\u0438 ", __jsx("img", {
    src: "/login.svg",
    alt: "login",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 51
    }
  }))), __jsx("div", {
    ref: langRef,
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.header_lang,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 9
    }
  }, __jsx("span", {
    onClick: toggleVisible,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 11
    }
  }, activeLang, " ", __jsx("img", {
    src: "/dd.svg",
    alt: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 54
    }
  })), visiblePopup && __jsx("ul", {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_5__["default"])(_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.header_langs, 'border-radius'),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 13
    }
  }, allLang && allLang.map(function (name, index) {
    return __jsx("li", {
      onClick: function onClick() {
        return activeItem !== index ? onSelectItem(index) : '';
      },
      className: Object(clsx__WEBPACK_IMPORTED_MODULE_5__["default"])(activeItem === index ? _styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.active : ''),
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 19
      }
    }, name);
  }))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/regis",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 9
    }
  }, __jsx("a", {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_5__["default"])(_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.registration, 'border-radius'),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 11
    }
  }, "\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438")))));
}

_s(Header, "WigltZyp4nkSES8vjJsx4tLjAOA=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"]];
});

_c = Header;
/* harmony default export */ __webpack_exports__["default"] = (Object(_i18n__WEBPACK_IMPORTED_MODULE_6__["withTranslation"])('header')(Header));

var _c;

$RefreshReg$(_c, "Header");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyL2luZGV4LmpzeCJdLCJuYW1lcyI6WyJIZWFkZXIiLCJ0Iiwicm91dGVyIiwidXNlUm91dGVyIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInZpc2libGVQb3B1cCIsInNldFZpc2libGVQb3B1cCIsImFjdGl2ZUl0ZW0iLCJzZXRBY3RpdmVJdGVtIiwibGFuZ1JlZiIsInVzZVJlZiIsImFsbExhbmciLCJhY3RpdmVMYW5nIiwidG9nZ2xlVmlzaWJsZSIsImhhbmRsZU91dHNpZGVDbGljayIsImUiLCJwYXRoIiwiaW5jbHVkZXMiLCJjdXJyZW50IiwidXNlRWZmZWN0IiwiZG9jdW1lbnQiLCJib2R5IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJvblNlbGVjdEl0ZW0iLCJpZCIsInN0eWxlcyIsImhlYWRlciIsImhlYWRlcl9jb250ZW50IiwiaGVhZGVyX2JvbGQiLCJwYXRobmFtZSIsImFjdGl2ZSIsImhlYWRlcl9sYW5nIiwiY2xzeCIsImhlYWRlcl9sYW5ncyIsIm1hcCIsIm5hbWUiLCJpbmRleCIsInJlZ2lzdHJhdGlvbiIsIndpdGhUcmFuc2xhdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBR0EsU0FBU0EsTUFBVCxPQUFxQjtBQUFBOztBQUFBOztBQUFBLE1BQUpDLENBQUksUUFBSkEsQ0FBSTtBQUVuQixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCOztBQUZtQix3QkFHcUJDLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxLQUFmLENBSHJCO0FBQUE7QUFBQSxNQUdaQyxZQUhZO0FBQUEsTUFHRUMsZUFIRjs7QUFBQSx5QkFJaUJILDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxDQUFmLENBSmpCO0FBQUE7QUFBQSxNQUlaRyxVQUpZO0FBQUEsTUFJQUMsYUFKQTs7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RCxFQUFPQyxLQUFQO0FBQUEsV0FDVjtBQUNFLGFBQU8sRUFBRTtBQUFBLGVBQU05QixVQUFVLEtBQUs4QixLQUFmLEdBQXVCYixZQUFZLENBQUNhLEtBQUQsQ0FBbkMsR0FBNkMsRUFBbkQ7QUFBQSxPQURYO0FBRUUsZUFBUyxFQUFFSixvREFBSSxDQUFDMUIsVUFBVSxLQUFLOEIsS0FBZixHQUF1QlgsMERBQU0sQ0FBQ0ssTUFBOUIsR0FBdUMsRUFBeEMsQ0FGakI7QUFHRSxTQUFHLEVBQUVNLEtBSFA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUlHRCxJQUpILENBRFU7QUFBQSxHQUFaLENBRkosQ0FISixDQXJCRixFQXNDRSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLFFBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsYUFBUyxFQUFFSCxvREFBSSxDQUFDUCwwREFBTSxDQUFDWSxZQUFSLEVBQXNCLGVBQXRCLENBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEVBREYsQ0F0Q0YsQ0FERixDQURGLENBREE7QUFpREQ7O0dBbkZRdkMsTTtVQUVRRyxxRDs7O0tBRlJILE07QUFzRk13Qyw0SEFBZSxDQUFDLFFBQUQsQ0FBZixDQUEwQnhDLE1BQTFCLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYTJjNDllZjlmOGRlOTk1Nzk1NTQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMubW9kdWxlLnNjc3MnXHJcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnXHJcblxyXG5pbXBvcnQgeyB3aXRoVHJhbnNsYXRpb24sIGkxOG4gfSBmcm9tICcuLi8uLi8uLi9pMThuJ1xyXG5cclxuXHJcbmZ1bmN0aW9uIEhlYWRlcih7dH0pIHtcclxuXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICBjb25zdCBbdmlzaWJsZVBvcHVwLCBzZXRWaXNpYmxlUG9wdXBdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFthY3RpdmVJdGVtLCBzZXRBY3RpdmVJdGVtXSA9IFJlYWN0LnVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IGxhbmdSZWYgPSBSZWFjdC51c2VSZWYoKVxyXG5cclxuICBjb25zdCBhbGxMYW5nID0gWydydScsICdreiddXHJcbiAgY29uc3QgYWN0aXZlTGFuZyA9IGFsbExhbmdbYWN0aXZlSXRlbV1cclxuICBcclxuXHJcbiAgY29uc3QgdG9nZ2xlVmlzaWJsZSA9ICgpID0+IHtcclxuICAgIHNldFZpc2libGVQb3B1cCghdmlzaWJsZVBvcHVwKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlT3V0c2lkZUNsaWNrID0gZSA9PiB7XHJcbiAgICBpZighZS5wYXRoLmluY2x1ZGVzKGxhbmdSZWYuY3VycmVudCkpIHtcclxuICAgICAgc2V0VmlzaWJsZVBvcHVwKGZhbHNlKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVPdXRzaWRlQ2xpY2spXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlT3V0c2lkZUNsaWNrKVxyXG4gICAgfVxyXG4gIH0sIFtdKVxyXG5cclxuICBjb25zdCBvblNlbGVjdEl0ZW0gPSBpZCA9PiB7XHJcbiAgICBzZXRBY3RpdmVJdGVtKGlkKVxyXG4gICAgc2V0VmlzaWJsZVBvcHVwKGZhbHNlKVxyXG4gIH1cclxuXHJcblxyXG4gIHJldHVybiAoXHJcbiAgPGhlYWRlciBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJ9PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgPG5hdiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJfY29udGVudH0+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgIDxhIGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcl9ib2xkfT5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCIvaF9sb2dvLnN2Z1wiIGFsdD1cIiNcIi8+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICA8YSBjbGFzc05hbWU9e3JvdXRlci5wYXRobmFtZSA9PSAnLycgPyBzdHlsZXMuYWN0aXZlIDogJyd9Pnt0KCdtYWluJyl9PC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgICA8TGluayBocmVmPVwiL25ld3NcIj5cclxuICAgICAgICAgIDxhIGNsYXNzTmFtZT17cm91dGVyLnBhdGhuYW1lID09ICcvbmV3cycgPyBzdHlsZXMuYWN0aXZlIDogJyd9PtCd0L7QstC+0YHRgtC4PC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgICA8TGluayBocmVmPVwiL3Byb2plY3RcIj5cclxuICAgICAgICAgIDxhIGNsYXNzTmFtZT17cm91dGVyLnBhdGhuYW1lID09ICcvcHJvamVjdCcgPyBzdHlsZXMuYWN0aXZlIDogJyd9PtCf0YDQvtC10LrRgtGLPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgICA8TGluayBocmVmPVwiL3dlYmluYXJzXCI+XHJcbiAgICAgICAgICA8YSBjbGFzc05hbWU9e3JvdXRlci5wYXRobmFtZSA9PSAnL3dlYmluYXJzJyA/IHN0eWxlcy5hY3RpdmUgOiAnJ30+0JLQtdCx0LjQvdCw0YDRizwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9sb2dpblwiPlxyXG4gICAgICAgICAgPGEgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyX2JvbGR9PtCS0L7QudGC0LggPGltZyBzcmM9XCIvbG9naW4uc3ZnXCIgYWx0PVwibG9naW5cIiAvPjwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPGRpdiByZWY9e2xhbmdSZWZ9IGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcl9sYW5nfT5cclxuICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9e3RvZ2dsZVZpc2libGV9PnthY3RpdmVMYW5nfSA8aW1nIHNyYz1cIi9kZC5zdmdcIiBhbHQ9XCIjXCIvPjwvc3Bhbj5cclxuICAgICAgICAgIHt2aXNpYmxlUG9wdXAgJiYgKFxyXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPXtjbHN4KHN0eWxlcy5oZWFkZXJfbGFuZ3MsICdib3JkZXItcmFkaXVzJyl9PlxyXG4gICAgICAgICAgICAgIHthbGxMYW5nICYmXHJcbiAgICAgICAgICAgICAgICBhbGxMYW5nLm1hcCgobmFtZSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgPGxpXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gYWN0aXZlSXRlbSAhPT0gaW5kZXggPyBvblNlbGVjdEl0ZW0oaW5kZXgpIDogJyd9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbHN4KGFjdGl2ZUl0ZW0gPT09IGluZGV4ID8gc3R5bGVzLmFjdGl2ZSA6ICcnKX1cclxuICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICB7bmFtZX1cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8TGluayBocmVmPVwiL3JlZ2lzXCI+XHJcbiAgICAgICAgICA8YSBjbGFzc05hbWU9e2Nsc3goc3R5bGVzLnJlZ2lzdHJhdGlvbiwgJ2JvcmRlci1yYWRpdXMnKX0+0KDQtdCz0LjRgdGC0YDQsNGG0LjQuDwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgIDwvbmF2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9oZWFkZXI+XHJcbiAgKVxyXG5cclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhUcmFuc2xhdGlvbignaGVhZGVyJykoSGVhZGVyKVxyXG4iXSwic291cmNlUm9vdCI6IiJ9