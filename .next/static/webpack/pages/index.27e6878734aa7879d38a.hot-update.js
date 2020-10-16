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

  var changeLang = function changeLang() {
    _i18n__WEBPACK_IMPORTED_MODULE_6__["i18n"].changeLanguage(activeLang);
  };

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
      lineNumber: 49,
      columnNumber: 3
    }
  }, __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 5
    }
  }, __jsx("nav", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.header_content,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }
  }, __jsx("a", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.header_bold,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: "/h_logo.svg",
    alt: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }
  }))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 9
    }
  }, __jsx("a", {
    className: router.pathname == '/' ? _styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.active : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 11
    }
  }, t('h1'))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/news",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 9
    }
  }, __jsx("a", {
    className: router.pathname == '/news' ? _styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.active : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 11
    }
  }, "\u041D\u043E\u0432\u043E\u0441\u0442\u0438")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/project",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 9
    }
  }, __jsx("a", {
    className: router.pathname == '/project' ? _styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.active : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 11
    }
  }, "\u041F\u0440\u043E\u0435\u043A\u0442\u044B")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/webinars",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 9
    }
  }, __jsx("a", {
    className: router.pathname == '/webinars' ? _styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.active : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 11
    }
  }, "\u0412\u0435\u0431\u0438\u043D\u0430\u0440\u044B")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/login",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 9
    }
  }, __jsx("a", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.header_bold,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 11
    }
  }, "\u0412\u043E\u0439\u0442\u0438 ", __jsx("img", {
    src: "/login.svg",
    alt: "login",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 51
    }
  }))), __jsx("div", {
    ref: langRef,
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.header_lang,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 9
    }
  }, __jsx("span", {
    onClick: toggleVisible,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 11
    }
  }, activeLang, " ", __jsx("img", {
    src: "/dd.svg",
    alt: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 54
    }
  })), visiblePopup && __jsx("ul", {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_5__["default"])(_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.header_langs, 'border-radius'),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 13
    }
  }, allLang && allLang.map(function (name, index) {
    return __jsx("li", {
      onClick: (function () {
        return activeItem !== index ? onSelectItem(index) : '';
      }, changeLang),
      className: Object(clsx__WEBPACK_IMPORTED_MODULE_5__["default"])(activeItem === index ? _styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.active : ''),
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 19
      }
    }, name);
  }))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/regis",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 9
    }
  }, __jsx("a", {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_5__["default"])(_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.registration, 'border-radius'),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyL2luZGV4LmpzeCJdLCJuYW1lcyI6WyJIZWFkZXIiLCJ0Iiwicm91dGVyIiwidXNlUm91dGVyIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInZpc2libGVQb3B1cCIsInNldFZpc2libGVQb3B1cCIsImFjdGl2ZUl0ZW0iLCJzZXRBY3RpdmVJdGVtIiwibGFuZ1JlZiIsInVzZVJlZiIsImFsbExhbmciLCJhY3RpdmVMYW5nIiwiY2hhbmdlTGFuZyIsImkxOG4iLCJjaGFuZ2VMYW5ndWFnZSIsInRvZ2dsZVZpc2libGUiLCJoYW5kbGVPdXRzaWRlQ2xpY2siLCJlIiwicGF0aCIsImluY2x1ZGVzIiwiY3VycmVudCIsInVzZUVmZmVjdCIsImRvY3VtZW50IiwiYm9keSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwib25TZWxlY3RJdGVtIiwiaWQiLCJzdHlsZXMiLCJoZWFkZXIiLCJoZWFkZXJfY29udGVudCIsImhlYWRlcl9ib2xkIiwicGF0aG5hbWUiLCJhY3RpdmUiLCJoZWFkZXJfbGFuZyIsImNsc3giLCJoZWFkZXJfbGFuZ3MiLCJtYXAiLCJuYW1lIiwiaW5kZXgiLCJyZWdpc3RyYXRpb24iLCJ3aXRoVHJhbnNsYXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUdBLFNBQVNBLE1BQVQsT0FBcUI7QUFBQTs7QUFBQTs7QUFBQSxNQUFKQyxDQUFJLFFBQUpBLENBQUk7QUFFbkIsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4Qjs7QUFGbUIsd0JBR3FCQyw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsS0FBZixDQUhyQjtBQUFBO0FBQUEsTUFHWkMsWUFIWTtBQUFBLE1BR0VDLGVBSEY7O0FBQUEseUJBSWlCSCw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsQ0FBZixDQUpqQjtB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Q1AsMERBQU0sQ0FBQ1EsWUFBUixFQUFzQixlQUF0QixDQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0cxQixPQUFPLElBQ05BLE9BQU8sQ0FBQzJCLEdBQVIsQ0FBWSxVQUFDQyxJQUFELEVBQU9DLEtBQVA7QUFBQSxXQUNWO0FBQ0UsYUFBTyxHQUFFO0FBQUEsZUFBTWpDLFVBQVUsS0FBS2lDLEtBQWYsR0FBdUJiLFlBQVksQ0FBQ2EsS0FBRCxDQUFuQyxHQUE2QyxFQUFuRDtBQUFBLFNBQXVEM0IsVUFBekQsQ0FEVDtBQUVFLGVBQVMsRUFBRXVCLG9EQUFJLENBQUM3QixVQUFVLEtBQUtpQyxLQUFmLEdBQXVCWCwwREFBTSxDQUFDSyxNQUE5QixHQUF1QyxFQUF4QyxDQUZqQjtBQUdFLFNBQUcsRUFBRU0sS0FIUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BSUdELElBSkgsQ0FEVTtBQUFBLEdBQVosQ0FGSixDQUhKLENBckJGLEVBc0NFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsUUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxhQUFTLEVBQUVILG9EQUFJLENBQUNQLDBEQUFNLENBQUNZLFlBQVIsRUFBc0IsZUFBdEIsQ0FBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwRUFERixDQXRDRixDQURGLENBREYsQ0FEQTtBQWlERDs7R0F2RlExQyxNO1VBRVFHLHFEOzs7S0FGUkgsTTtBQTBGTTJDLDRIQUFlLENBQUMsUUFBRCxDQUFmLENBQTBCM0MsTUFBMUIsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4yN2U2ODc4NzM0YWE3ODc5ZDM4YS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy5tb2R1bGUuc2NzcydcclxuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCdcclxuXHJcbmltcG9ydCB7IHdpdGhUcmFuc2xhdGlvbiwgaTE4biB9IGZyb20gJy4uLy4uLy4uL2kxOG4nXHJcblxyXG5cclxuZnVuY3Rpb24gSGVhZGVyKHt0fSkge1xyXG5cclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gIGNvbnN0IFt2aXNpYmxlUG9wdXAsIHNldFZpc2libGVQb3B1cF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2FjdGl2ZUl0ZW0sIHNldEFjdGl2ZUl0ZW1dID0gUmVhY3QudXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgbGFuZ1JlZiA9IFJlYWN0LnVzZVJlZigpXHJcblxyXG4gIGNvbnN0IGFsbExhbmcgPSBbJ3J1JywgJ2t6J11cclxuICBjb25zdCBhY3RpdmVMYW5nID0gYWxsTGFuZ1thY3RpdmVJdGVtXVxyXG4gIFxyXG4gIGNvbnN0IGNoYW5nZUxhbmcgPSAoKSA9PiB7XHJcbiAgICBpMThuLmNoYW5nZUxhbmd1YWdlKGFjdGl2ZUxhbmcpO1xyXG4gIH1cclxuICBcclxuXHJcbiAgY29uc3QgdG9nZ2xlVmlzaWJsZSA9ICgpID0+IHtcclxuICAgIHNldFZpc2libGVQb3B1cCghdmlzaWJsZVBvcHVwKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlT3V0c2lkZUNsaWNrID0gZSA9PiB7XHJcbiAgICBpZighZS5wYXRoLmluY2x1ZGVzKGxhbmdSZWYuY3VycmVudCkpIHtcclxuICAgICAgc2V0VmlzaWJsZVBvcHVwKGZhbHNlKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVPdXRzaWRlQ2xpY2spXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlT3V0c2lkZUNsaWNrKVxyXG4gICAgfVxyXG4gIH0sIFtdKVxyXG5cclxuICBjb25zdCBvblNlbGVjdEl0ZW0gPSBpZCA9PiB7XHJcbiAgICBzZXRBY3RpdmVJdGVtKGlkKVxyXG4gICAgc2V0VmlzaWJsZVBvcHVwKGZhbHNlKVxyXG4gIH1cclxuXHJcblxyXG4gIHJldHVybiAoXHJcbiAgPGhlYWRlciBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJ9PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgPG5hdiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJfY29udGVudH0+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgIDxhIGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcl9ib2xkfT5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCIvaF9sb2dvLnN2Z1wiIGFsdD1cIiNcIi8+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICA8YSBjbGFzc05hbWU9e3JvdXRlci5wYXRobmFtZSA9PSAnLycgPyBzdHlsZXMuYWN0aXZlIDogJyd9Pnt0KCdoMScpfTwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9uZXdzXCI+XHJcbiAgICAgICAgICA8YSBjbGFzc05hbWU9e3JvdXRlci5wYXRobmFtZSA9PSAnL25ld3MnID8gc3R5bGVzLmFjdGl2ZSA6ICcnfT7QndC+0LLQvtGB0YLQuDwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9qZWN0XCI+XHJcbiAgICAgICAgICA8YSBjbGFzc05hbWU9e3JvdXRlci5wYXRobmFtZSA9PSAnL3Byb2plY3QnID8gc3R5bGVzLmFjdGl2ZSA6ICcnfT7Qn9GA0L7QtdC60YLRizwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi93ZWJpbmFyc1wiPlxyXG4gICAgICAgICAgPGEgY2xhc3NOYW1lPXtyb3V0ZXIucGF0aG5hbWUgPT0gJy93ZWJpbmFycycgPyBzdHlsZXMuYWN0aXZlIDogJyd9PtCS0LXQsdC40L3QsNGA0Ys8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvbG9naW5cIj5cclxuICAgICAgICAgIDxhIGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcl9ib2xkfT7QktC+0LnRgtC4IDxpbWcgc3JjPVwiL2xvZ2luLnN2Z1wiIGFsdD1cImxvZ2luXCIgLz48L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDxkaXYgcmVmPXtsYW5nUmVmfSBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJfbGFuZ30+XHJcbiAgICAgICAgICA8c3BhbiBvbkNsaWNrPXt0b2dnbGVWaXNpYmxlfT57YWN0aXZlTGFuZ30gPGltZyBzcmM9XCIvZGQuc3ZnXCIgYWx0PVwiI1wiLz48L3NwYW4+XHJcbiAgICAgICAgICB7dmlzaWJsZVBvcHVwICYmIChcclxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT17Y2xzeChzdHlsZXMuaGVhZGVyX2xhbmdzLCAnYm9yZGVyLXJhZGl1cycpfT5cclxuICAgICAgICAgICAgICB7YWxsTGFuZyAmJlxyXG4gICAgICAgICAgICAgICAgYWxsTGFuZy5tYXAoKG5hbWUsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgIDxsaVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGFjdGl2ZUl0ZW0gIT09IGluZGV4ID8gb25TZWxlY3RJdGVtKGluZGV4KSA6ICcnLCBjaGFuZ2VMYW5nfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xzeChhY3RpdmVJdGVtID09PSBpbmRleCA/IHN0eWxlcy5hY3RpdmUgOiAnJyl9XHJcbiAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAge25hbWV9XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9yZWdpc1wiPlxyXG4gICAgICAgICAgPGEgY2xhc3NOYW1lPXtjbHN4KHN0eWxlcy5yZWdpc3RyYXRpb24sICdib3JkZXItcmFkaXVzJyl9PtCg0LXQs9C40YHRgtGA0LDRhtC40Lg8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICA8L25hdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvaGVhZGVyPlxyXG4gIClcclxuXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoVHJhbnNsYXRpb24oJ2hlYWRlcicpKEhlYWRlcilcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==