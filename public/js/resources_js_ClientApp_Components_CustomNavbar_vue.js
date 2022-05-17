"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_ClientApp_Components_CustomNavbar_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/ClientApp/Components/CustomNavbar.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/ClientApp/Components/CustomNavbar.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "CustomNavbar",
  data: function data() {
    return {
      show: true,
      errors: {},
      form: {
        email: "",
        password: ""
      }
    };
  },
  components: {},
  computed: {},
  watch: {},
  methods: {
    logOut: function logOut(event) {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();
                _context.prev = 1;
                console.log("trying");
                _context.next = 5;
                return _this.$store.dispatch("logout");

              case 5:
                _this.$router.push("/login");

                _context.next = 12;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](1);
                console.log(_context.t0);
                _this.errors = _context.t0; //

              case 12:
                _context.prev = 12;
                console.log("Whoops");
                return _context.finish(12);

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[1, 8, 12, 15]]);
      }))();
    }
  }
});

/***/ }),

/***/ "./resources/js/ClientApp/Components/CustomNavbar.vue":
/*!************************************************************!*\
  !*** ./resources/js/ClientApp/Components/CustomNavbar.vue ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CustomNavbar_vue_vue_type_template_id_21aa8d5a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CustomNavbar.vue?vue&type=template&id=21aa8d5a& */ "./resources/js/ClientApp/Components/CustomNavbar.vue?vue&type=template&id=21aa8d5a&");
/* harmony import */ var _CustomNavbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CustomNavbar.vue?vue&type=script&lang=js& */ "./resources/js/ClientApp/Components/CustomNavbar.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CustomNavbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CustomNavbar_vue_vue_type_template_id_21aa8d5a___WEBPACK_IMPORTED_MODULE_0__.render,
  _CustomNavbar_vue_vue_type_template_id_21aa8d5a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/ClientApp/Components/CustomNavbar.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/ClientApp/Components/CustomNavbar.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/ClientApp/Components/CustomNavbar.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomNavbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CustomNavbar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/ClientApp/Components/CustomNavbar.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomNavbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/ClientApp/Components/CustomNavbar.vue?vue&type=template&id=21aa8d5a&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/ClientApp/Components/CustomNavbar.vue?vue&type=template&id=21aa8d5a& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomNavbar_vue_vue_type_template_id_21aa8d5a___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomNavbar_vue_vue_type_template_id_21aa8d5a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomNavbar_vue_vue_type_template_id_21aa8d5a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CustomNavbar.vue?vue&type=template&id=21aa8d5a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/ClientApp/Components/CustomNavbar.vue?vue&type=template&id=21aa8d5a&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/ClientApp/Components/CustomNavbar.vue?vue&type=template&id=21aa8d5a&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/ClientApp/Components/CustomNavbar.vue?vue&type=template&id=21aa8d5a& ***!
  \**********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "b-navbar",
    { attrs: { toggleable: "lg", type: "dark", variant: "dark" } },
    [
      _c("b-navbar-brand", { attrs: { to: "/" } }, [_vm._v("IND")]),
      _vm._v(" "),
      _c("b-navbar-toggle", { attrs: { target: "nav-collapse" } }),
      _vm._v(" "),
      _c(
        "b-collapse",
        { attrs: { id: "nav-collapse", "is-nav": "" } },
        [
          _c(
            "b-navbar-nav",
            [
              _vm.$store.getters.isLogged
                ? _c("b-nav-item", { attrs: { to: "/userentities" } }, [
                    _vm._v("Entities\n            "),
                  ])
                : _vm._e(),
              _vm._v(" "),
              _vm.$store.getters.isLogged
                ? _c("b-nav-item", { attrs: { to: "/userbookmarks" } }, [
                    _vm._v("Bookmarks\n            "),
                  ])
                : _vm._e(),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-navbar-nav",
            { staticClass: "ml-auto" },
            [
              _c(
                "b-nav-form",
                [
                  _c("b-form-input", {
                    staticClass: "mr-sm-2",
                    attrs: { size: "sm", placeholder: "Search" },
                  }),
                  _vm._v(" "),
                  _c(
                    "b-button",
                    {
                      staticClass: "my-2 my-sm-0",
                      attrs: { size: "sm", type: "submit" },
                    },
                    [_vm._v("Search")]
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-nav-item-dropdown",
                { attrs: { text: "Lang", right: "" } },
                [
                  _c("b-dropdown-item", { attrs: { href: "#" } }, [
                    _vm._v("EN"),
                  ]),
                  _vm._v(" "),
                  _c("b-dropdown-item", { attrs: { href: "#" } }, [
                    _vm._v("ES"),
                  ]),
                  _vm._v(" "),
                  _c("b-dropdown-item", { attrs: { href: "#" } }, [
                    _vm._v("RU"),
                  ]),
                  _vm._v(" "),
                  _c("b-dropdown-item", { attrs: { href: "#" } }, [
                    _vm._v("FA"),
                  ]),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-nav-item-dropdown",
                {
                  attrs: { right: "" },
                  scopedSlots: _vm._u([
                    {
                      key: "button-content",
                      fn: function () {
                        return [
                          _c("em", [
                            _vm._v(
                              _vm._s(_vm.$store.state.user.name || "User")
                            ),
                          ]),
                        ]
                      },
                      proxy: true,
                    },
                  ]),
                },
                [
                  _vm._v(" "),
                  _c("b-dropdown-item", { attrs: { to: "/profile" } }, [
                    _vm._v("Profile"),
                  ]),
                  _vm._v(" "),
                  _c("b-dropdown-item", { attrs: { to: "/settings" } }, [
                    _vm._v("Settings"),
                  ]),
                  _vm._v(" "),
                  _c("b-dropdown-item", { on: { click: _vm.logOut } }, [
                    _vm._v("Sign Out"),
                  ]),
                ],
                1
              ),
            ],
            1
          ),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);