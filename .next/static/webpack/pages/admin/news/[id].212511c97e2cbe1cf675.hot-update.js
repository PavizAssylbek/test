webpackHotUpdate_N_E("pages/admin/news/[id]",{

/***/ "./src/components/AdminEditsComponent/index.jsx":
/*!******************************************************!*\
  !*** ./src/components/AdminEditsComponent/index.jsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AdminEditsComponent; });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_input_mask__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-input-mask */ "./node_modules/react-input-mask/index.js");
/* harmony import */ var react_input_mask__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_input_mask__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles.module.scss */ "./src/components/AdminEditsComponent/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");


var _jsxFileName = "C:\\Users\\meehr\\Desktop\\front\\tourism-online\\src\\components\\AdminEditsComponent\\index.jsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





function AdminEditsComponent(_ref) {
  _s();

  var _data$data,
      _data$data2,
      _data$data3,
      _data$data4,
      _data$data5,
      _data$data6,
      _data$data7,
      _data$data8,
      _data$data8$status,
      _data$data9,
      _data$data9$photo,
      _this = this;

  var _ref$title = _ref.title,
      title = _ref$title === void 0 ? 'Title' : _ref$title,
      link = _ref.link,
      save = _ref.save,
      data = _ref.data;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(true),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      visiblePopup = _React$useState2[0],
      setVisiblePopup = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(0),
      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState3, 2),
      activeItem = _React$useState4[0],
      setActiveItem = _React$useState4[1];

  var fileInput = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createRef();
  var imgFile = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createRef();

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(data === null || data === void 0 ? void 0 : (_data$data = data.data) === null || _data$data === void 0 ? void 0 : _data$data.heading_ru),
      _React$useState6 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState5, 2),
      headerValueRu = _React$useState6[0],
      setHeaderValueRu = _React$useState6[1];

  var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(data === null || data === void 0 ? void 0 : (_data$data2 = data.data) === null || _data$data2 === void 0 ? void 0 : _data$data2.heading_kz),
      _React$useState8 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState7, 2),
      headerValueKz = _React$useState8[0],
      setHeaderValueKz = _React$useState8[1];

  var _React$useState9 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(data === null || data === void 0 ? void 0 : (_data$data3 = data.data) === null || _data$data3 === void 0 ? void 0 : _data$data3.date),
      _React$useState10 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState9, 2),
      date = _React$useState10[0],
      setDate = _React$useState10[1];

  var _React$useState11 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(data === null || data === void 0 ? void 0 : (_data$data4 = data.data) === null || _data$data4 === void 0 ? void 0 : _data$data4.description_ru),
      _React$useState12 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState11, 2),
      descripRu = _React$useState12[0],
      setDescripRu = _React$useState12[1];

  var _React$useState13 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(data === null || data === void 0 ? void 0 : (_data$data5 = data.data) === null || _data$data5 === void 0 ? void 0 : _data$data5.description_kz),
      _React$useState14 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState13, 2),
      descripKz = _React$useState14[0],
      setDescripKz = _React$useState14[1];

  var _React$useState15 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(data === null || data === void 0 ? void 0 : (_data$data6 = data.data) === null || _data$data6 === void 0 ? void 0 : _data$data6.content_ru),
      _React$useState16 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState15, 2),
      contentRu = _React$useState16[0],
      setContentRu = _React$useState16[1];

  var _React$useState17 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(data === null || data === void 0 ? void 0 : (_data$data7 = data.data) === null || _data$data7 === void 0 ? void 0 : _data$data7.content_kz),
      _React$useState18 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState17, 2),
      contentKz = _React$useState18[0],
      setContentKz = _React$useState18[1];

  var _React$useState19 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(data === null || data === void 0 ? void 0 : (_data$data8 = data.data) === null || _data$data8 === void 0 ? void 0 : (_data$data8$status = _data$data8.status) === null || _data$data8$status === void 0 ? void 0 : _data$data8$status.id),
      _React$useState20 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState19, 2),
      status = _React$useState20[0],
      setStatus = _React$useState20[1];

  var _React$useState21 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(data === null || data === void 0 ? void 0 : (_data$data9 = data.data) === null || _data$data9 === void 0 ? void 0 : (_data$data9$photo = _data$data9.photo) === null || _data$data9$photo === void 0 ? void 0 : _data$data9$photo.photo),
      _React$useState22 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState21, 2),
      photo = _React$useState22[0],
      setPhoto = _React$useState22[1];

  var allLang = ['RU', 'KZ'];

  var onSelectItem = function onSelectItem(id) {
    setActiveItem(id);
    setVisiblePopup(!visiblePopup);
  };

  var addImgFile = function addImgFile() {
    var reader = new FileReader();

    reader.onload = function (e) {
      imgFile.current.src = e.target.result;
    };

    reader.readAsDataURL(fileInput.current.files[0]);
  };

  var statusChange = function statusChange(e) {
    if (e === 2) {
      setStatus(1);
    } else {
      setStatus(2);
    }
  };

  var postData = function postData() {};

  return __jsx("div", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.edits,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.edits_head,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 9
    }
  }, title), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: link,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 9
    }
  }, __jsx("a", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.edits_link,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 11
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 44
    }
  }, "\u041D\u0430\u0437\u0430\u0434"), " ", __jsx("img", {
    src: "/back.png",
    alt: "back",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 63
    }
  })))), __jsx("div", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.edits_btn,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }
  }, allLang.map(function (el, id) {
    return __jsx("button", {
      onClick: function onClick() {
        return activeItem !== id ? onSelectItem(id) : '';
      },
      className: Object(clsx__WEBPACK_IMPORTED_MODULE_5__["default"])(activeItem === id ? _styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.edits_btn_active : ''),
      key: id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 11
      }
    }, el);
  })), __jsx("form", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 7
    }
  }, visiblePopup === true ? __jsx("div", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.edits_content,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.edits_content__left,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 13
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 15
    }
  }, "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A"), __jsx("label", {
    htmlFor: "title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 15
    }
  }, __jsx("input", {
    onChange: function onChange(e) {
      return setHeaderValueRu(e.target.value);
    },
    type: "text",
    id: "title",
    placeholder: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A",
    value: headerValueRu,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 17
    }
  })), __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 15
    }
  }, "\u0414\u0430\u0442\u0430"), __jsx("label", {
    htmlFor: "data",
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.data,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 15
    }
  }, __jsx(react_input_mask__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "data",
    mask: "9999.99.99",
    value: date,
    onChange: function onChange(e) {
      return setDate(e.target.value);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 17
    }
  })), __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 15
    }
  }, "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435"), __jsx("label", {
    htmlFor: "text",
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.text,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 15
    }
  }, __jsx("textarea", {
    id: "text",
    value: descripRu,
    onChange: function onChange(e) {
      return setDescripRu(e.target.value);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 15
    }
  })), __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 15
    }
  }, "\u0421\u043E\u0434\u0435\u0440\u0436\u0438\u043C\u043E\u0435"), __jsx("label", {
    htmlFor: "textinfo",
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.textinfo,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 15
    }
  }, __jsx("textarea", {
    value: contentRu,
    onChange: function onChange(e) {
      return setContentRu(e.target.value);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 17
    }
  }))), __jsx("div", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.edits_content__right,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 13
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 15
    }
  }, "\u0413\u043B\u0430\u0432\u043D\u043E\u0435 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435"), __jsx("img", {
    ref: imgFile,
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.edits_newimg,
    src: "".concat("http://127.0.0.1:8000", "/storage/").concat(photo),
    alt: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 15
    }
  }), __jsx("label", {
    htmlFor: "btn_file",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "/btn_file.jpg",
    alt: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 17
    }
  }), "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435", __jsx("input", {
    type: "file",
    hidden: true,
    id: "btn_file",
    accept: ".jpg, .jpeg, .png",
    ref: fileInput,
    onChange: addImgFile,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 17
    }
  })))) : __jsx("div", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.edits_content,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.edits_content__left,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 13
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 15
    }
  }, "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A"), __jsx("label", {
    htmlFor: "title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 15
    }
  }, __jsx("input", {
    value: headerValueKz,
    onChange: function onChange(e) {
      return setHeaderValueKz(e.target.value);
    },
    type: "text",
    id: "title",
    placeholder: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 17
    }
  })), __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 15
    }
  }, "\u0414\u0430\u0442\u0430"), __jsx("label", {
    htmlFor: "data",
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.data,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 15
    }
  }, __jsx(react_input_mask__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "data",
    mask: "9999.99.99",
    value: date,
    onChange: function onChange(e) {
      return setDate(e.target.value);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 17
    }
  })), __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 15
    }
  }, "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435"), __jsx("label", {
    htmlFor: "text",
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.text,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 15
    }
  }, __jsx("textarea", {
    id: "text",
    value: descripKz,
    onChange: function onChange(e) {
      return setDescripKz(e.target.value);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 15
    }
  })), __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 15
    }
  }, "\u0421\u043E\u0434\u0435\u0440\u0436\u0438\u043C\u043E\u0435"), __jsx("label", {
    htmlFor: "textinfo",
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.textinfo,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 15
    }
  }, __jsx("textarea", {
    value: contentKz,
    onChange: function onChange(e) {
      return setContentKz(e.target.value);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 17
    }
  })))), __jsx("div", {
    style: {
      marginBottom: "15px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 7
    }
  }, __jsx("input", {
    onChange: function onChange() {
      return statusChange(status);
    },
    checked: status === 2 ? true : false,
    type: "checkbox",
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.edits_custom_checkbox,
    id: "checkBox1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 9
    }
  }), __jsx("label", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.edits_checkbox,
    htmlFor: "checkBox1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 9
    }
  }, "\u041E\u043F\u0443\u0431\u043B\u0438\u043A\u043E\u0432\u0430\u0442\u044C")), save && __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 9
    }
  }, __jsx("input", {
    type: "checkbox",
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.edits_custom_checkbox,
    id: "checkBox2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 11
    }
  }), __jsx("label", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.edits_checkbox,
    htmlFor: "checkBox2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 11
    }
  }, "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0432\u0435\u0431\u0438\u043D\u0430\u0440 \u043D\u0430 \u0441\u0430\u0439\u0442\u0435 \u043F\u043E\u0441\u043B\u0435 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u0438\u044F")), __jsx("input", {
    type: "submit",
    value: 'Соханить',
    onClick: postData,
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_5__["default"])(_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.edits_submit, 'border-radius'),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 7
    }
  })));
}

_s(AdminEditsComponent, "/MOOsD0qnYeSNUgClaXTkrTjUjg=");

_c = AdminEditsComponent;

var _c;

$RefreshReg$(_c, "AdminEditsComponent");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQWRtaW5FZGl0c0NvbXBvbmVudC9pbmRleC5qc3giXSwibmFtZXMiOlsiQWRtaW5FZGl0c0NvbXBvbmVudCIsInRpdGxlIiwibGluayIsInNhdmUiLCJkYXRhIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInZpc2libGVQb3B1cCIsInNldFZpc2libGVQb3B1cCIsImFjdGl2ZUl0ZW0iLCJzZXRBY3RpdmVJdGVtIiwiZmlsZUlucHV0IiwiY3JlYXRlUmVmIiwiaW1nRmlsZSIsImhlYWRpbmdfcnUiLCJoZWFkZXJWYWx1ZVJ1Iiwic2V0SGVhZGVyVmFsdWVSdSIsImhlYWRpbmdfa3oiLCJoZWFkZXJWYWx1ZUt6Iiwic2V0SGVhZGVyVmFsdWVLeiIsImRhdGUiLCJzZXREYXRlIiwiZGVzY3JpcHRpb25fcnUiLCJkZXNjcmlwUnUiLCJzZXREZXNjcmlwUnUiLCJkZXNjcmlwdGlvbl9reiIsImRlc2NyaXBLeiIsInNldERlc2NyaXBLeiIsImNvbnRlbnRfcnUiLCJjb250ZW50UnUiLCJzZXRDb250ZW50UnUiLCJjb250ZW50X2t6IiwiY29udGVudEt6Iiwic2V0Q29udGVudEt6Iiwic3RhdHVzIiwiaWQiLCJzZXRTdGF0dXMiLCJwaG90byIsInNldFBob3RvIiwiYWxsTGFuZyIsIm9uU2VsZWN0SXRlbSIsImFkZEltZ0ZpbGUiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwib25sb2FkIiwiZSIsImN1cnJlbnQiLCJzcmMiLCJ0YXJnZXQiLCJyZXN1bHQiLCJyZWFkQXNEYXRhVVJMIiwiZmlsZXMiLCJzdGF0dXNDaGFuZ2UiLCJwb3N0RGF0YSIsInN0eWxlcyIsImVkaXRzIiwiZWRpdHNfaGVhZCIsImVkaXRzX2xpbmsiLCJlZGl0c19idG4iLCJtYXAiLCJlbCIsImNsc3giLCJlZGl0c19idG5fYWN0aXZlIiwiZWRpdHNfY29udGVudCIsImVkaXRzX2NvbnRlbnRfX2xlZnQiLCJ2YWx1ZSIsInRleHQiLCJ0ZXh0aW5mbyIsImVkaXRzX2NvbnRlbnRfX3JpZ2h0IiwiZWRpdHNfbmV3aW1nIiwicHJvY2VzcyIsIm1hcmdpbkJvdHRvbSIsImVkaXRzX2N1c3RvbV9jaGVja2JveCIsImVkaXRzX2NoZWNrYm94IiwiZWRpdHNfc3VibWl0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUdlLFNBQVNBLG1CQUFULE9BQWtFO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBLHdCQUFwQ0MsS0FBb0M7QUFBQSxNQUFwQ0EsS0FBb0MsMkJBQTVCLE9BQTRCO0FBQUEsTUFBbkJDLElBQW1CLFFBQW5CQSxJQUFtQjtBQUFBLE1BQWJDLElBQWEsUUFBYkEsSUFBYTtBQUFBLE1BQVBDLElBQU8sUUFBUEEsSUFBTzs7QUFBQSx3QkFFdkNDLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxJQUFmLENBRnVDO0FBQUE7QUFBQSxNQUV4RUMsWUFGd0U7QUFBQSxNQUUxREMsZUFGMEQ7O0FBQUEseUJBRzNDSCw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsQ0FBZixDQUgyQztBQUFBO0FBQUEsTUFHeEVHLFVBSHdFO0FBQUEsTUFHNURDLGFBSDREOztBQUkvRSxNQUFNQyxTQUFTLGdCQUFHTiw0Q0FBSyxDQUFDTyxTQUFOLEVBQWxCO0FBQ0EsTUFBTUMsT0FBTyxnQkFBR1IsNENBQUssQ0FBQ08sU0FBTixFQUFoQjs7QUFMK0UseUJBT3JDUCw0Q0FBSyxDQUFDQyxRQUFOLENBQWVGLElBQWYsYUFBZUEsSUFBZixxQ0FBZUEsSUFBSSxDQUFFQSxJQUFyQiwrQ0FBZSxXQUFZVSxVQUEzQixDQVBxQztBQUFBO0FBQUEsTUFPeEVDLGFBUHdFO0FBQUEsTUFPekRDLGdCQVB5RDs7QUFBQSx5QkFRckNYLDRDQUFLLENBQUNDLFFBQU4sQ0FBZUYsSUFBZixhQUFlQSxJQUFmLHNDQUFlQSxJQUFJLENBQUVBLElB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SyxFQUFFLFVBQTVCO0FBQXdDLFdBQU8sRUFBRXBCLFFBQWpEO0FBQTJELGFBQVMsRUFBRVEsb0RBQUksQ0FBQ1AsMERBQU0sQ0FBQ29CLFlBQVIsRUFBc0IsZUFBdEIsQ0FBMUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQTNGQSxDQWpCRixDQURGO0FBaUhEOztHQW5LdUIxRSxtQjs7S0FBQUEsbUIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWRtaW4vbmV3cy9baWRdLjIxMjUxMWM5N2UyY2JlMWNmNjc1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IElucHV0TWFzayBmcm9tICdyZWFjdC1pbnB1dC1tYXNrJztcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMubW9kdWxlLnNjc3MnXHJcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWRtaW5FZGl0c0NvbXBvbmVudCh7dGl0bGUgPSAnVGl0bGUnLCBsaW5rLCBzYXZlLCBkYXRhfSkge1xyXG5cclxuICBjb25zdCBbdmlzaWJsZVBvcHVwLCBzZXRWaXNpYmxlUG9wdXBdID0gUmVhY3QudXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgW2FjdGl2ZUl0ZW0sIHNldEFjdGl2ZUl0ZW1dID0gUmVhY3QudXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgZmlsZUlucHV0ID0gUmVhY3QuY3JlYXRlUmVmKClcclxuICBjb25zdCBpbWdGaWxlID0gUmVhY3QuY3JlYXRlUmVmKClcclxuXHJcbiAgY29uc3QgW2hlYWRlclZhbHVlUnUsIHNldEhlYWRlclZhbHVlUnVdID0gUmVhY3QudXNlU3RhdGUoZGF0YT8uZGF0YT8uaGVhZGluZ19ydSlcclxuICBjb25zdCBbaGVhZGVyVmFsdWVLeiwgc2V0SGVhZGVyVmFsdWVLel0gPSBSZWFjdC51c2VTdGF0ZShkYXRhPy5kYXRhPy5oZWFkaW5nX2t6KVxyXG5cclxuICBjb25zdCBbZGF0ZSwgc2V0RGF0ZV0gPSBSZWFjdC51c2VTdGF0ZShkYXRhPy5kYXRhPy5kYXRlKVxyXG5cclxuICBjb25zdCBbZGVzY3JpcFJ1LCBzZXREZXNjcmlwUnVdID0gUmVhY3QudXNlU3RhdGUoZGF0YT8uZGF0YT8uZGVzY3JpcHRpb25fcnUpXHJcbiAgY29uc3QgW2Rlc2NyaXBLeiwgc2V0RGVzY3JpcEt6XSA9IFJlYWN0LnVzZVN0YXRlKGRhdGE/LmRhdGE/LmRlc2NyaXB0aW9uX2t6KVxyXG5cclxuICBjb25zdCBbY29udGVudFJ1LCBzZXRDb250ZW50UnVdID0gUmVhY3QudXNlU3RhdGUoZGF0YT8uZGF0YT8uY29udGVudF9ydSlcclxuICBjb25zdCBbY29udGVudEt6LCBzZXRDb250ZW50S3pdID0gUmVhY3QudXNlU3RhdGUoZGF0YT8uZGF0YT8uY29udGVudF9reilcclxuICBcclxuICBjb25zdCBbc3RhdHVzLCBzZXRTdGF0dXNdID0gUmVhY3QudXNlU3RhdGUoZGF0YT8uZGF0YT8uc3RhdHVzPy5pZClcclxuICBjb25zdCBbcGhvdG8sIHNldFBob3RvXSA9IFJlYWN0LnVzZVN0YXRlKGRhdGE/LmRhdGE/LnBob3RvPy5waG90bylcclxuXHJcbiAgY29uc3QgYWxsTGFuZyA9IFsnUlUnLCAnS1onXVxyXG5cclxuXHJcbiAgY29uc3Qgb25TZWxlY3RJdGVtID0gaWQgPT4ge1xyXG4gICAgc2V0QWN0aXZlSXRlbShpZClcclxuICAgIHNldFZpc2libGVQb3B1cCghdmlzaWJsZVBvcHVwKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgYWRkSW1nRmlsZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcbiAgICByZWFkZXIub25sb2FkID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgaW1nRmlsZS5jdXJyZW50LnNyYyA9IGUudGFyZ2V0LnJlc3VsdDtcclxuICAgIH07XHJcbiAgICByZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlSW5wdXQuY3VycmVudC5maWxlc1swXSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBzdGF0dXNDaGFuZ2UgPSBlID0+e1xyXG4gICAgaWYoZSA9PT0gMikge1xyXG4gICAgICBzZXRTdGF0dXMoMSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldFN0YXR1cygyKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIGNvbnN0IHBvc3REYXRhID0gKCkgPT4ge1xyXG4gICAgXHJcbiAgfVxyXG5cclxuICByZXR1cm4oXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmVkaXRzfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5lZGl0c19oZWFkfT5cclxuICAgICAgICA8aDI+e3RpdGxlfTwvaDI+XHJcbiAgICAgICAgPExpbmsgaHJlZj17bGlua30+XHJcbiAgICAgICAgICA8YSBjbGFzc05hbWU9e3N0eWxlcy5lZGl0c19saW5rfT48c3Bhbj7QndCw0LfQsNC0PC9zcGFuPiA8aW1nIHNyYz1cIi9iYWNrLnBuZ1wiIGFsdD1cImJhY2tcIi8+PC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZWRpdHNfYnRufT5cclxuICAgICAgICB7YWxsTGFuZy5tYXAoKGVsLGlkKSA9PiAoXHJcbiAgICAgICAgICA8YnV0dG9uIFxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBhY3RpdmVJdGVtICE9PSBpZCA/IG9uU2VsZWN0SXRlbShpZCkgOiAnJ31cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbHN4KGFjdGl2ZUl0ZW0gPT09IGlkID8gc3R5bGVzLmVkaXRzX2J0bl9hY3RpdmUgOiAnJyl9XHJcbiAgICAgICAgICAgIGtleT17aWR9PlxyXG4gICAgICAgICAgICB7ZWx9XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxmb3JtPlxyXG4gICAgICB7dmlzaWJsZVBvcHVwID09PSB0cnVlIFxyXG4gICAgICAgID8gKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5lZGl0c19jb250ZW50fT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5lZGl0c19jb250ZW50X19sZWZ0fT5cclxuICAgICAgICAgICAgICA8aDI+0JfQsNCz0L7Qu9C+0LLQvtC6PC9oMj5cclxuICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldEhlYWRlclZhbHVlUnUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgIGlkPVwidGl0bGVcIiBcclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLQndCw0LfQstCw0L3QuNC1INC30LDQs9C+0LvQvtCy0L7QulwiIFxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17aGVhZGVyVmFsdWVSdX0vPlxyXG4gICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPGgyPtCU0LDRgtCwPC9oMj5cclxuICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImRhdGFcIiBjbGFzc05hbWU9e3N0eWxlcy5kYXRhfT5cclxuICAgICAgICAgICAgICAgIDxJbnB1dE1hc2sgXHJcbiAgICAgICAgICAgICAgICAgIGlkPVwiZGF0YVwiIFxyXG4gICAgICAgICAgICAgICAgICBtYXNrPVwiOTk5OS45OS45OVwiIFxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17ZGF0ZX0gXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldERhdGUoZS50YXJnZXQudmFsdWUpfSBcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8aDI+0J7Qv9C40YHQsNC90LjQtTwvaDI+XHJcbiAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ0ZXh0XCIgY2xhc3NOYW1lPXtzdHlsZXMudGV4dH0+XHJcbiAgICAgICAgICAgICAgPHRleHRhcmVhIGlkPVwidGV4dFwiIHZhbHVlPXtkZXNjcmlwUnV9IG9uQ2hhbmdlPXtlID0+IHNldERlc2NyaXBSdShlLnRhcmdldC52YWx1ZSl9PjwvdGV4dGFyZWE+XHJcbiAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8aDI+0KHQvtC00LXRgNC20LjQvNC+0LU8L2gyPlxyXG4gICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidGV4dGluZm9cIiBjbGFzc05hbWU9e3N0eWxlcy50ZXh0aW5mb30+XHJcbiAgICAgICAgICAgICAgICA8dGV4dGFyZWEgdmFsdWU9e2NvbnRlbnRSdX0gb25DaGFuZ2U9e2UgPT4gc2V0Q29udGVudFJ1KGUudGFyZ2V0LnZhbHVlKX0+PC90ZXh0YXJlYT5cclxuICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5lZGl0c19jb250ZW50X19yaWdodH0+XHJcbiAgICAgICAgICAgICAgPGgyPtCT0LvQsNCy0L3QvtC1INC40LfQvtCx0YDQsNC20LXQvdC40LU8L2gyPlxyXG4gICAgICAgICAgICAgIDxpbWcgcmVmPXtpbWdGaWxlfSBjbGFzc05hbWU9e3N0eWxlcy5lZGl0c19uZXdpbWd9IHNyYz17YCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQkFTRV9VUkx9L3N0b3JhZ2UvJHtwaG90b31gfSBhbHQ9XCJcIi8+XHJcbiAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJidG5fZmlsZVwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvYnRuX2ZpbGUuanBnXCIgYWx0PVwiI1wiLz5cclxuICAgICAgICAgICAgICAgINCU0L7QsdCw0LLQuNGC0Ywg0LjQt9C+0LHRgNCw0LbQtdC90LjQtVxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgaGlkZGVuIGlkPVwiYnRuX2ZpbGVcIiBhY2NlcHQ9XCIuanBnLCAuanBlZywgLnBuZ1wiIHJlZj17ZmlsZUlucHV0fSBvbkNoYW5nZT17YWRkSW1nRmlsZX0vPlxyXG4gICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgICAgIDogKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5lZGl0c19jb250ZW50fT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5lZGl0c19jb250ZW50X19sZWZ0fT5cclxuICAgICAgICAgICAgICA8aDI+0JfQsNCz0L7Qu9C+0LLQvtC6PC9oMj5cclxuICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtoZWFkZXJWYWx1ZUt6fVxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRIZWFkZXJWYWx1ZUt6KGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIiBcclxuICAgICAgICAgICAgICAgICAgaWQ9XCJ0aXRsZVwiIFxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cItCd0LDQt9Cy0LDQvdC40LUg0LfQsNCz0L7Qu9C+0LLQvtC6XCIgIC8+XHJcbiAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8aDI+0JTQsNGC0LA8L2gyPlxyXG4gICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZGF0YVwiIGNsYXNzTmFtZT17c3R5bGVzLmRhdGF9PlxyXG4gICAgICAgICAgICAgICAgPElucHV0TWFzayBcclxuICAgICAgICAgICAgICAgICAgICBpZD1cImRhdGFcIiBcclxuICAgICAgICAgICAgICAgICAgICBtYXNrPVwiOTk5OS45OS45OVwiIFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkYXRlfSBcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXREYXRlKGUudGFyZ2V0LnZhbHVlKX0gXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8aDI+0J7Qv9C40YHQsNC90LjQtTwvaDI+XHJcbiAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ0ZXh0XCIgY2xhc3NOYW1lPXtzdHlsZXMudGV4dH0+XHJcbiAgICAgICAgICAgICAgPHRleHRhcmVhIGlkPVwidGV4dFwiIHZhbHVlPXtkZXNjcmlwS3p9IG9uQ2hhbmdlPXtlID0+IHNldERlc2NyaXBLeihlLnRhcmdldC52YWx1ZSl9PjwvdGV4dGFyZWE+XHJcbiAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8aDI+0KHQvtC00LXRgNC20LjQvNC+0LU8L2gyPlxyXG4gICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidGV4dGluZm9cIiBjbGFzc05hbWU9e3N0eWxlcy50ZXh0aW5mb30+XHJcbiAgICAgICAgICAgICAgICA8dGV4dGFyZWEgdmFsdWU9e2NvbnRlbnRLen0gb25DaGFuZ2U9e2UgPT4gc2V0Q29udGVudEt6KGUudGFyZ2V0LnZhbHVlKX0+PC90ZXh0YXJlYT5cclxuICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgICAgfVxyXG4gICAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luQm90dG9tOiBcIjE1cHhcIn19PlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgb25DaGFuZ2U9eygpID0+IHN0YXR1c0NoYW5nZShzdGF0dXMpfVxyXG4gICAgICAgICAgY2hlY2tlZD17c3RhdHVzID09PSAyID8gdHJ1ZSA6IGZhbHNlfVxyXG4gICAgICAgICAgdHlwZT1cImNoZWNrYm94XCIgXHJcbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5lZGl0c19jdXN0b21fY2hlY2tib3h9IFxyXG4gICAgICAgICAgaWQ9XCJjaGVja0JveDFcIiAvPlxyXG4gICAgICAgIDxsYWJlbCBjbGFzc05hbWU9e3N0eWxlcy5lZGl0c19jaGVja2JveH0gaHRtbEZvcj1cImNoZWNrQm94MVwiPtCe0L/Rg9Cx0LvQuNC60L7QstCw0YLRjDwvbGFiZWw+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7c2F2ZSAmJiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzc05hbWU9e3N0eWxlcy5lZGl0c19jdXN0b21fY2hlY2tib3h9IGlkPVwiY2hlY2tCb3gyXCIgLz5cclxuICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9e3N0eWxlcy5lZGl0c19jaGVja2JveH0gaHRtbEZvcj1cImNoZWNrQm94MlwiPtCh0L7RhdGA0LDQvdC40YLRjCDQstC10LHQuNC90LDRgCDQvdCwINGB0LDQudGC0LUg0L/QvtGB0LvQtSDQt9Cw0LLQtdGA0YjQtdC90LjRjzwvbGFiZWw+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG4gICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPXsn0KHQvtGF0LDQvdC40YLRjCd9IG9uQ2xpY2s9e3Bvc3REYXRhfSBjbGFzc05hbWU9e2Nsc3goc3R5bGVzLmVkaXRzX3N1Ym1pdCwgJ2JvcmRlci1yYWRpdXMnKX0vPlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9