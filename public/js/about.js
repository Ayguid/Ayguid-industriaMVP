"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["about"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/AdminApp/Components/forms/UserDetailsForm.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/AdminApp/Components/forms/UserDetailsForm.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************/
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
  name: "UserDetailsForm",
  data: function data() {
    return {
      busy: false,
      show: true,
      edit: false,
      errors: {},
      form: {
        email: "",
        name: ""
      }
    };
  },
  components: {},
  computed: {
    user: function user() {
      return this.$store.state.user;
    }
  },
  watch: {},
  methods: {
    onSubmit: function onSubmit(event) {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var newObj, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();
                _this.busy = true;
                _context.prev = 2;
                newObj = JSON.parse(JSON.stringify(_this.form));
                _context.next = 6;
                return _this.$store.dispatch("updateUserDetails", newObj);

              case 6:
                response = _context.sent;
                //console.log(response)
                _this.edit = false;
                _this.errors = {};

                _this.$bvToast.toast('Details changed successfully!', {
                  title: "Great:",
                  variant: "success",
                  solid: true
                }); //this.$router.push("/");


                _context.next = 16;
                break;

              case 12:
                _context.prev = 12;
                _context.t0 = _context["catch"](2);

                _this.$bvToast.toast(_context.t0.response.data.message, {
                  title: "Errors:",
                  variant: "danger",
                  solid: true
                });

                _this.errors = _context.t0.response.data.errors; //

              case 16:
                _context.prev = 16;
                _this.busy = false;
                return _context.finish(16);

              case 19:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[2, 12, 16, 19]]);
      }))();
    },
    onReset: function onReset(event) {
      var _this2 = this;

      event.preventDefault();
      this.edit = false;
      this.errors = {};
      this.form.email = this.user.email;
      this.form.name = this.user.name; // Reset our form values
      // Trick to reset/clear native browser form validation state

      this.show = false;
      this.$nextTick(function () {
        _this2.show = true;
      });
    }
  },
  mounted: function mounted() {
    this.form.email = this.user.email;
    this.form.name = this.user.name;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/AdminApp/Components/forms/UserPrivacyForm.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/AdminApp/Components/forms/UserPrivacyForm.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************/
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
  name: "UserPrivacyForm",
  data: function data() {
    return {
      busy: false,
      show: true,
      edit: false,
      errors: {},
      form: {
        oldPassword: "",
        password: "",
        passwordConfirm: ""
      }
    };
  },
  computed: {
    user: function user() {
      return this.$store.state.user;
    }
  },
  watch: {},
  methods: {
    onSubmit: function onSubmit(event) {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var newObj, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();
                _this.busy = true;
                _context.prev = 2;
                newObj = JSON.parse(JSON.stringify(_this.form));
                _context.next = 6;
                return _this.$store.dispatch("updatePassword", newObj);

              case 6:
                response = _context.sent;
                _this.edit = false;
                _this.errors = {};
                _this.form.oldPassword = "";
                _this.form.password = "";
                _this.form.passwordConfirm = ""; //console.log("1", response.data.message);

                _this.$bvToast.toast(response.data.message, {
                  title: "Great:",
                  variant: "success",
                  solid: true
                }); //this.$router.push("/");


                _context.next = 19;
                break;

              case 15:
                _context.prev = 15;
                _context.t0 = _context["catch"](2);

                _this.$bvToast.toast(_context.t0.response.data.message, {
                  title: "Errors:",
                  variant: "danger",
                  solid: true
                });

                _this.errors = _context.t0.response.data.errors; //

              case 19:
                _context.prev = 19;
                _this.busy = false;
                return _context.finish(19);

              case 22:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[2, 15, 19, 22]]);
      }))();
    },
    onReset: function onReset(event) {
      var _this2 = this;

      event.preventDefault();
      this.edit = false;
      this.errors = {};
      this.form.oldPassword = "";
      this.form.password = "";
      this.form.passwordConfirm = ""; // Reset our form values
      // Trick to reset/clear native browser form validation state

      this.show = false;
      this.$nextTick(function () {
        _this2.show = true;
      });
    }
  },
  mounted: function mounted() {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/AdminApp/Pages/Categories.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/AdminApp/Pages/Categories.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
//import { dfs } from "../helpers/iterator";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "parent_categories",
  data: function data() {
    return {
      alert: false,
      selections: [],
      mode: false,
      open: [],
      //1,2
      search: null,
      caseSensitive: false,
      valid: true,
      nameRules: [function (v) {
        return !!v || "Name is required";
      }, function (v) {
        return v && v.length <= 10 || "Name must be less than 10 characters";
      }],
      form: {
        id: false,
        name: "",
        parent_id: false
      },
      formChild: {
        name: "",
        parent_id: false
      } //no lleva id

    };
  },
  computed: {
    mainData: function mainData() {
      return this.$store.state.mainData;
    },
    filter: function filter() {
      return this.caseSensitive ? function (item, search, textKey) {
        return item[textKey].indexOf(search) > -1;
      } : undefined;
    }
  },
  methods: {
    /*
    getUpdatedTree() {
        console.log(this.$refs.treeview.getTreeData());
    },*/
    removeLastSelect: function removeLastSelect(event) {
      var _event$, _event$2, _event$3, _event$4;

      this.mode = false;

      if (this.selections.length > 1) {
        this.selections.shift();
      }

      if (this.selections.length == 0) {
        this.alert = false;
        this.mode = false;
      }

      this.formChild.name = "";
      this.formChild.parent_id = ((_event$ = event[0]) === null || _event$ === void 0 ? void 0 : _event$.id) || false;
      this.form.id = ((_event$2 = event[0]) === null || _event$2 === void 0 ? void 0 : _event$2.id) || "";
      this.form.name = ((_event$3 = event[0]) === null || _event$3 === void 0 ? void 0 : _event$3.name) || "";
      this.form.parent_id = ((_event$4 = event[0]) === null || _event$4 === void 0 ? void 0 : _event$4.parent_id) || false; //console.log(event);
      //this.formChild.parent_id = event[0]?.id || false;
    },
    imSelected: function imSelected(id) {
      var _this$selections$;

      if (id == ((_this$selections$ = this.selections[0]) === null || _this$selections$ === void 0 ? void 0 : _this$selections$.id)) {
        return true;
      }

      return false;
    },
    setMode: function setMode(mode) {
      //this.alert = true;
      if (this.mode == mode) {
        this.mode = false;
        this.alert = false;
      } else {
        this.alert = true;
        this.mode = mode;
      }
    },
    toAddChild: function toAddChild() {
      console.log("addChild : ");
    },
    validate: function validate() {
      this.$refs.form.validate();
    },
    reset: function reset() {
      this.$refs.form.reset();
      this.mode = false;
      this.selections = [];
      this.alert = false;
    },
    resetValidation: function resetValidation() {
      this.$refs.form.resetValidation();
    },
    onSubmit: function onSubmit(event) {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var formToSend, res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!_this.mode) {
                  _context.next = 37;
                  break;
                }

                console.log(_this.mode);
                formToSend = {};
                _context.t0 = _this.mode;
                _context.next = _context.t0 === "addParent" ? 6 : _context.t0 === "edit" ? 10 : _context.t0 === "addChild" ? 12 : 15;
                break;

              case 6:
                //redundante pero bueh, dsps limpiamos todo
                formToSend = JSON.parse(JSON.stringify(_this.form));
                formToSend.id = null;
                formToSend.parent_id = null;
                return _context.abrupt("break", 17);

              case 10:
                formToSend = JSON.parse(JSON.stringify(_this.form));
                return _context.abrupt("break", 17);

              case 12:
                //
                formToSend = JSON.parse(JSON.stringify(_this.formChild));
                formToSend.id = null;
                return _context.abrupt("break", 17);

              case 15:
                console.log("Sorry, unrecognized mode ".concat(expr, "."));
                return _context.abrupt("return");

              case 17:
                _context.prev = 17;

                if (formToSend.id) {
                  _context.next = 24;
                  break;
                }

                _context.next = 21;
                return _this.$store.dispatch("storeCategory", formToSend);

              case 21:
                res = _context.sent;
                _context.next = 27;
                break;

              case 24:
                _context.next = 26;
                return _this.$store.dispatch("updateCategory", formToSend);

              case 26:
                res = _context.sent;

              case 27:
                console.log(res);

                _this.reset();

                _this.$root.vtoast.show({
                  message: res.data.message
                });

                _context.next = 35;
                break;

              case 32:
                _context.prev = 32;
                _context.t1 = _context["catch"](17);
                console.log(_context.t1);

              case 35:
                _context.prev = 35;
                return _context.finish(35);

              case 37:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[17, 32, 35, 37]]);
      }))();
    }
  },
  mounted: function mounted() {
    /*
    let result = null;
     for (let obj of this.mainData.parent_categories) {
        result = dfs(obj, 9);
        if (result) {
            break;
        }
    }
    console.log(result);
    */
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/AdminApp/Pages/Materials.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/AdminApp/Pages/Materials.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
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
  name: "materiales",
  data: function data() {
    return {
      alert: false,
      selections: [],
      mode: false,
      open: [],
      //1,2
      search: null,
      caseSensitive: false,
      valid: true,
      nameRules: [function (v) {
        return !!v || "Name is required";
      }, function (v) {
        return v && v.length <= 10 || "Name must be less than 10 characters";
      }],
      form: {
        id: false,
        name: "",
        parent_id: false
      },
      formChild: {
        name: "",
        parent_id: false
      } //no lleva id

    };
  },
  computed: {
    mainData: function mainData() {
      return this.$store.state.mainData;
    },
    filter: function filter() {
      return this.caseSensitive ? function (item, search, textKey) {
        return item[textKey].indexOf(search) > -1;
      } : undefined;
    }
  },
  methods: {
    getUpdatedTree: function getUpdatedTree() {
      console.log(this.$refs.treeview.getTreeData());
    },
    removeLastSelect: function removeLastSelect(event) {
      var _event$, _event$2, _event$3, _event$4;

      this.mode = false;

      if (this.selections.length > 1) {
        this.selections.shift();
      }

      if (this.selections.length == 0) {
        this.alert = false;
        this.mode = false;
      }

      this.formChild.name = "";
      this.formChild.parent_id = ((_event$ = event[0]) === null || _event$ === void 0 ? void 0 : _event$.id) || false;
      this.form.id = ((_event$2 = event[0]) === null || _event$2 === void 0 ? void 0 : _event$2.id) || "";
      this.form.name = ((_event$3 = event[0]) === null || _event$3 === void 0 ? void 0 : _event$3.name) || "";
      this.form.parent_id = ((_event$4 = event[0]) === null || _event$4 === void 0 ? void 0 : _event$4.parent_id) || false; //console.log(event);
      //this.formChild.parent_id = event[0]?.id || false;
    },
    imSelected: function imSelected(id) {
      var _this$selections$;

      if (id == ((_this$selections$ = this.selections[0]) === null || _this$selections$ === void 0 ? void 0 : _this$selections$.id)) {
        return true;
      }

      return false;
    },
    setMode: function setMode(mode) {
      //this.alert = true;
      if (this.mode == mode) {
        this.mode = false;
        this.alert = false;
      } else {
        this.alert = true;
        this.mode = mode;
      }
    },
    toAddChild: function toAddChild() {
      console.log("addChild : ");
    },
    validate: function validate() {
      this.$refs.form.validate();
    },
    reset: function reset() {
      this.$refs.form.reset();
    },
    resetValidation: function resetValidation() {
      this.$refs.form.resetValidation();
      this.mode = false;
      this.selections = [];
      this.alert = false;
    },
    onSubmit: function onSubmit(event) {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var formToSend, res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!_this.mode) {
                  _context.next = 36;
                  break;
                }

                console.log(_this.mode);
                formToSend = {};
                _context.t0 = _this.mode;
                _context.next = _context.t0 === "addParent" ? 6 : _context.t0 === "edit" ? 10 : _context.t0 === "addChild" ? 12 : 15;
                break;

              case 6:
                //redundante pero bueh, dsps limpiamos todo
                formToSend = JSON.parse(JSON.stringify(_this.form));
                formToSend.id = null;
                formToSend.parent_id = null;
                return _context.abrupt("break", 17);

              case 10:
                formToSend = JSON.parse(JSON.stringify(_this.form));
                return _context.abrupt("break", 17);

              case 12:
                //
                formToSend = JSON.parse(JSON.stringify(_this.formChild));
                formToSend.id = null;
                return _context.abrupt("break", 17);

              case 15:
                console.log("Sorry, unrecognized mode ".concat(expr, "."));
                return _context.abrupt("return");

              case 17:
                _context.prev = 17;

                if (formToSend.id) {
                  _context.next = 24;
                  break;
                }

                _context.next = 21;
                return _this.$store.dispatch("storeMaterial", formToSend);

              case 21:
                res = _context.sent;
                _context.next = 27;
                break;

              case 24:
                _context.next = 26;
                return _this.$store.dispatch("updateMaterial", formToSend);

              case 26:
                res = _context.sent;

              case 27:
                _this.reset();

                _this.$root.vtoast.show({
                  message: res.data.message
                });

                _context.next = 34;
                break;

              case 31:
                _context.prev = 31;
                _context.t1 = _context["catch"](17);
                console.log(_context.t1);
                /*
                this.$bvToast.toast(ex.response, {
                    title: `Errors:`,
                    variant: "danger",
                    solid: true,
                });
                */

              case 34:
                _context.prev = 34;
                return _context.finish(34);

              case 36:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[17, 31, 34, 36]]);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/AdminApp/Pages/Processes.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/AdminApp/Pages/Processes.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
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
//import { dfs } from "../helpers/iterator";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "processes",
  data: function data() {
    return {
      alert: false,
      selections: [],
      mode: false,
      open: [],
      //1,2
      search: null,
      caseSensitive: false,
      valid: true,
      nameRules: [function (v) {
        return !!v || "Name is required";
      }, function (v) {
        return v && v.length <= 10 || "Name must be less than 10 characters";
      }],
      form: {
        id: false,
        name: "",
        parent_id: false
      },
      formChild: {
        name: "",
        parent_id: false
      } //no lleva id

    };
  },
  computed: {
    mainData: function mainData() {
      return this.$store.state.mainData;
    },
    filter: function filter() {
      return this.caseSensitive ? function (item, search, textKey) {
        return item[textKey].indexOf(search) > -1;
      } : undefined;
    }
  },
  methods: {
    /*
    getUpdatedTree() {
        console.log(this.$refs.treeview.getTreeData());
    },*/
    removeLastSelect: function removeLastSelect(event) {
      var _event$, _event$2, _event$3, _event$4;

      this.mode = false;

      if (this.selections.length > 1) {
        this.selections.shift();
      }

      if (this.selections.length == 0) {
        this.alert = false;
        this.mode = false;
      }

      this.formChild.name = "";
      this.formChild.parent_id = ((_event$ = event[0]) === null || _event$ === void 0 ? void 0 : _event$.id) || false;
      this.form.id = ((_event$2 = event[0]) === null || _event$2 === void 0 ? void 0 : _event$2.id) || "";
      this.form.name = ((_event$3 = event[0]) === null || _event$3 === void 0 ? void 0 : _event$3.name) || "";
      this.form.parent_id = ((_event$4 = event[0]) === null || _event$4 === void 0 ? void 0 : _event$4.parent_id) || false; //console.log(event);
      //this.formChild.parent_id = event[0]?.id || false;
    },
    imSelected: function imSelected(id) {
      var _this$selections$;

      if (id == ((_this$selections$ = this.selections[0]) === null || _this$selections$ === void 0 ? void 0 : _this$selections$.id)) {
        return true;
      }

      return false;
    },
    setMode: function setMode(mode) {
      //this.alert = true;
      if (this.mode == mode) {
        this.mode = false;
        this.alert = false;
      } else {
        this.alert = true;
        this.mode = mode;
      }
    },
    toAddChild: function toAddChild() {
      console.log("addChild : ");
    },
    validate: function validate() {
      this.$refs.form.validate();
    },
    reset: function reset() {
      this.$refs.form.reset();
      this.mode = false;
      this.selections = [];
      this.alert = false;
    },
    resetValidation: function resetValidation() {
      this.$refs.form.resetValidation();
    },
    onSubmit: function onSubmit(event) {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var formToSend, res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!_this.mode) {
                  _context.next = 37;
                  break;
                }

                console.log(_this.mode);
                formToSend = {};
                _context.t0 = _this.mode;
                _context.next = _context.t0 === "addParent" ? 6 : _context.t0 === "edit" ? 10 : _context.t0 === "addChild" ? 12 : 15;
                break;

              case 6:
                //redundante pero bueh, dsps limpiamos todo
                formToSend = JSON.parse(JSON.stringify(_this.form));
                formToSend.id = null;
                formToSend.parent_id = null;
                return _context.abrupt("break", 17);

              case 10:
                formToSend = JSON.parse(JSON.stringify(_this.form));
                return _context.abrupt("break", 17);

              case 12:
                //
                formToSend = JSON.parse(JSON.stringify(_this.formChild));
                formToSend.id = null;
                return _context.abrupt("break", 17);

              case 15:
                console.log("Sorry, unrecognized mode ".concat(expr, "."));
                return _context.abrupt("return");

              case 17:
                _context.prev = 17;

                if (formToSend.id) {
                  _context.next = 24;
                  break;
                }

                _context.next = 21;
                return _this.$store.dispatch("storeProcess", formToSend);

              case 21:
                res = _context.sent;
                _context.next = 27;
                break;

              case 24:
                _context.next = 26;
                return _this.$store.dispatch("updateProcess", formToSend);

              case 26:
                res = _context.sent;

              case 27:
                console.log(res);

                _this.reset();

                _this.$root.vtoast.show({
                  message: res.data.message
                });

                _context.next = 35;
                break;

              case 32:
                _context.prev = 32;
                _context.t1 = _context["catch"](17);
                console.log(_context.t1);

              case 35:
                _context.prev = 35;
                return _context.finish(35);

              case 37:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[17, 32, 35, 37]]);
      }))();
    }
  },
  mounted: function mounted() {
    /*
    let result = null;
     for (let obj of this.mainData.processes) {
        result = dfs(obj, 9);
        if (result) {
            break;
        }
    }
    console.log(result);
    */
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/AdminApp/Pages/Profile.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/AdminApp/Pages/Profile.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Components_forms_UserDetailsForm_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Components/forms/UserDetailsForm.vue */ "./resources/js/AdminApp/Components/forms/UserDetailsForm.vue");
/* harmony import */ var _Components_forms_UserPrivacyForm_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Components/forms/UserPrivacyForm.vue */ "./resources/js/AdminApp/Components/forms/UserPrivacyForm.vue");
//
//
//
//
//
//
//
//


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Profile",
  components: {
    UserDetailsForm: _Components_forms_UserDetailsForm_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    UserPrivacyForm: _Components_forms_UserPrivacyForm_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {};
  },
  computed: {
    user: function user() {
      return this.$store.state.user;
    }
  },
  watch: {},
  methods: {},
  mounted: function mounted() {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/ClientApp/Components/BookmarkIcon.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/ClientApp/Components/BookmarkIcon.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
  name: "BookmarkIcon",
  props: ["bookmarked"],
  data: function data() {
    return {};
  },
  components: {},
  computed: {},
  watch: {},
  methods: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/ClientApp/Components/EntityCard.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/ClientApp/Components/EntityCard.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _BookmarkIcon_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BookmarkIcon.vue */ "./resources/js/ClientApp/Components/BookmarkIcon.vue");


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
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "EntityCard",
  props: ["entity"],
  components: {
    //MainFilter,
    BookmarkIcon: _BookmarkIcon_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {//randomPicNum: "",
    };
  },
  methods: {
    bookmarkEntity: function bookmarkEntity() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var confirmation, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (_this.$store.getters.isLogged) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return", _this.$bvToast.toast("Please Login", {
                  title: "Errors:",
                  variant: "danger",
                  solid: true
                }));

              case 2:
                if (!(_this.$route.name == "UserBookmarks")) {
                  _context.next = 8;
                  break;
                }

                _context.next = 5;
                return _this.$bvModal.msgBoxConfirm("Are you sure?", {
                  title: "Errors:",
                  variant: "danger",
                  centered: true,
                  solid: true,
                  okTitle: "YES",
                  cancelTitle: "NO",
                  okVariant: "danger"
                });

              case 5:
                confirmation = _context.sent;

                if (confirmation) {
                  _context.next = 8;
                  break;
                }

                return _context.abrupt("return");

              case 8:
                //
                _this.entity.bookmarked = !_this.entity.bookmarked;
                _context.prev = 9;
                _context.next = 12;
                return _this.$store.dispatch("bookmarkEntity", _this.entity);

              case 12:
                response = _context.sent;
                _this.entity.bookmarks_count = response.data.bookmarks_count;
                console.log(response);
                _context.next = 21;
                break;

              case 17:
                _context.prev = 17;
                _context.t0 = _context["catch"](9);

                _this.$bvToast.toast(_context.t0.response.data.message, {
                  title: "Errors:",
                  variant: "danger",
                  solid: true
                });

                _this.errors = _context.t0.response.data.errors;

              case 21:
                _context.prev = 21;
                return _context.finish(21);

              case 23:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[9, 17, 21, 23]]);
      }))();
    }
  },
  computed: {},
  beforeMount: function beforeMount() {},
  mounted: function mounted() {//this.randomPicNum = Math.floor(Math.random() * (30 - 1 + 1) + 1);
    //console.log(this.$route.name == "UserBookmarks");
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/ClientApp/Components/InfiniteScroll.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/ClientApp/Components/InfiniteScroll.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//import axios from "axios";
//import { debounce } from "lodash";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "InfiniteScroll",
  //emits:['loadMore'],
  props: {
    loadMore: Function
  },
  data: function data() {
    return {
      loading: false
    };
  },
  mounted: function mounted() {
    var _this = this;

    window.addEventListener("scroll", _.debounce(function (e) {
      var pixelsFromBottom = document.documentElement.offsetHeight - document.documentElement.scrollTop - window.innerHeight;

      if (pixelsFromBottom < 200 && !_this.loading) {
        //console.log(this.myPostsAndFollowingPosts.next_page_url);
        //console.log(12);
        //this.$emit('loadMore');
        _this.loading = true;

        _this.loadMore()["finally"](function () {
          return _this.loading = false;
        });
      }
    }, 100));
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/ClientApp/Components/forms/EntityDetailsForm.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/ClientApp/Components/forms/EntityDetailsForm.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _LocationPartialForm_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LocationPartialForm.vue */ "./resources/js/ClientApp/Components/forms/LocationPartialForm.vue");


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
//import Treeselect from "@riophae/vue-treeselect";

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "EntityDetailsForm",
  props: ["entity"],
  components: {
    LocationPartialForm: _LocationPartialForm_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    var _this$entity, _this$entity2, _this$entity3, _this$entity4, _this$entity5, _this$entity6, _this$entity7, _this$entity8, _this$entity9, _this$entity10, _this$entity10$catego, _this$entity11, _this$entity12, _this$entity13, _this$entity14;

    return {
      busy: false,
      show: true,
      edit: _.isEmpty(this.entity) ? true : false,
      errors: {},
      form: {
        id: ((_this$entity = this.entity) === null || _this$entity === void 0 ? void 0 : _this$entity.id) || null,
        email: ((_this$entity2 = this.entity) === null || _this$entity2 === void 0 ? void 0 : _this$entity2.email) || "",
        username: ((_this$entity3 = this.entity) === null || _this$entity3 === void 0 ? void 0 : _this$entity3.username) || "",
        name: ((_this$entity4 = this.entity) === null || _this$entity4 === void 0 ? void 0 : _this$entity4.name) || "",
        description: ((_this$entity5 = this.entity) === null || _this$entity5 === void 0 ? void 0 : _this$entity5.description) || "",
        phone: ((_this$entity6 = this.entity) === null || _this$entity6 === void 0 ? void 0 : _this$entity6.phone) || "",
        cellphone: ((_this$entity7 = this.entity) === null || _this$entity7 === void 0 ? void 0 : _this$entity7.cellphone) || "",
        userOwnsEntity: ((_this$entity8 = this.entity) === null || _this$entity8 === void 0 ? void 0 : _this$entity8.created_by_user_id) == ((_this$entity9 = this.entity) === null || _this$entity9 === void 0 ? void 0 : _this$entity9.user_id) ? true : null,
        catIds: ((_this$entity10 = this.entity) === null || _this$entity10 === void 0 ? void 0 : (_this$entity10$catego = _this$entity10.categories) === null || _this$entity10$catego === void 0 ? void 0 : _this$entity10$catego.map(function (s) {
          return s.id;
        })) || [],
        country_id: ((_this$entity11 = this.entity) === null || _this$entity11 === void 0 ? void 0 : _this$entity11.country_id) || "",
        state_id: ((_this$entity12 = this.entity) === null || _this$entity12 === void 0 ? void 0 : _this$entity12.state_id) || "",
        city_id: ((_this$entity13 = this.entity) === null || _this$entity13 === void 0 ? void 0 : _this$entity13.city_id) || "" //location: null,

      },
      catSuggestions: [],
      selectedCats: ((_this$entity14 = this.entity) === null || _this$entity14 === void 0 ? void 0 : _this$entity14.categories) || [],
      //filterKey: "",
      options: [{
        value: null,
        text: "Do you own this entity?",
        disabled: true
      }, {
        value: true,
        text: "Yes"
      }, {
        value: false,
        text: "No"
      }]
    };
  },
  computed: {},
  watch: {
    // whenever selectedCats changes, this function will run
    selectedCats: function selectedCats(newCat, oldCat) {
      console.log("changed");
      this.form.catIds = this.selectedCats.map(function (s) {
        return s.id;
      }); //console.log(this.form.catIds);
    }
  },
  methods: {
    changeLocationsInForm: function changeLocationsInForm(event) {
      var _event$selectedCountr, _event$selectedState, _event$selectedCity;

      console.log(event);
      this.form.country_id = event === null || event === void 0 ? void 0 : (_event$selectedCountr = event.selectedCountry) === null || _event$selectedCountr === void 0 ? void 0 : _event$selectedCountr.id;
      this.form.state_id = event === null || event === void 0 ? void 0 : (_event$selectedState = event.selectedState) === null || _event$selectedState === void 0 ? void 0 : _event$selectedState.id;
      this.form.city_id = event === null || event === void 0 ? void 0 : (_event$selectedCity = event.selectedCity) === null || _event$selectedCity === void 0 ? void 0 : _event$selectedCity.id;
    },
    selectCat: function selectCat(category) {
      var found = this.selectedCats.find(function (cat) {
        return cat.id == category.id;
      });

      if (!found) {
        this.selectedCats.push(category);
      } else {
        this.selectedCats = this.selectedCats.filter(function (cat) {
          return cat.id != category.id;
        });
      }
    },
    removeCat: function removeCat(category) {
      this.selectedCats = this.selectedCats.filter(function (cat) {
        return cat.id != category.id;
      });
    },
    onSubmit: function onSubmit(event) {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var newObj, response, _response;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();
                _this.busy = true;
                _context.prev = 2;
                newObj = JSON.parse(JSON.stringify(_this.form));

                if (_.isEmpty(_this.entity)) {
                  _context.next = 10;
                  break;
                }

                _context.next = 7;
                return _this.$store.dispatch("updateEntity", newObj);

              case 7:
                response = _context.sent;
                _context.next = 13;
                break;

              case 10:
                _context.next = 12;
                return _this.$store.dispatch("storeEntity", newObj);

              case 12:
                _response = _context.sent;

              case 13:
                _this.edit = false;
                _this.errors = {};

                _this.$bvToast.toast("Details changed successfully!", {
                  title: "Great:",
                  variant: "success",
                  solid: true
                });

                _context.next = 22;
                break;

              case 18:
                _context.prev = 18;
                _context.t0 = _context["catch"](2);

                _this.$bvToast.toast(_context.t0.response.data.message, {
                  title: "Errors:",
                  variant: "danger",
                  solid: true
                });

                _this.errors = _context.t0.response.data.errors;

              case 22:
                _context.prev = 22;
                _this.busy = false;
                return _context.finish(22);

              case 25:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[2, 18, 22, 25]]);
      }))();
    },
    onReset: function onReset(event) {
      /*
      event.preventDefault();
      this.edit = false;
      this.errors = {};
      this.form.email = this.user.email;
      this.form.name = this.user.name;
      this.form.username = this.user.username;
      this.form.phone = this.user.phone;
      this.form.cellphone = this.user.cellphone;
      this.form.description = this.user.description;
      // Reset our form values
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
          this.show = true;
      });
      */
    },
    flattenArray: function flattenArray(array) {
      // aplanamos el array de feelings en el form
      var result = [];
      var obj = this;
      array.forEach(function (a) {
        result.push(a);

        if (Array.isArray(a.children)) {
          result = result.concat(obj.flattenArray(a.children));
        }
      });
      return result;
    },
    debounceInput: _.debounce(function (e) {
      //console.log(e);
      if (e == "" || e == null) {
        this.catSuggestions = [];
      }

      if (e.length < 2) return;
      this.catSuggestions = this.flattenArray(this.$store.state.mainData.categories).filter(function (el) {
        return el.name.toLowerCase().includes(e.toLowerCase());
      }); //console.log();
      //this.filterKey = e.target.value;
    }, 500)
  },
  mounted: function mounted() {
    /*
    this.form.email = this.user.email;
    this.form.name = this.user.name;
    this.form.username = this.user.username;
    this.form.phone = this.user.phone;
    this.form.cellphone = this.user.cellphone;
    this.form.description = this.user.description;
                        this.entity?.created_by_user_id == this.entity?.user_id
                    ? true
                    : null,
    */
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/ClientApp/Components/forms/FileInput.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/ClientApp/Components/forms/FileInput.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
  methods: {
    browse: function browse() {
      this.$refs.picker.click();
    },
    change: function change(event) {
      this.$emit("filesdAdded", event.target.files);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/ClientApp/Components/forms/LocationPartialForm.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/ClientApp/Components/forms/LocationPartialForm.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************/
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
  name: "LocationPartialForm",
  props: ["value", "entity"],
  data: function data() {
    var _this$entity, _this$entity2, _this$entity3;

    return {
      loading: false,
      optionsCountry: [],
      selectedCountry: ((_this$entity = this.entity) === null || _this$entity === void 0 ? void 0 : _this$entity.country) || "",
      optionsState: [],
      selectedState: ((_this$entity2 = this.entity) === null || _this$entity2 === void 0 ? void 0 : _this$entity2.state) || "",
      optionsCity: [],
      selectedCity: ((_this$entity3 = this.entity) === null || _this$entity3 === void 0 ? void 0 : _this$entity3.city) || ""
    };
  },
  watch: {},
  computed: {
    computedValue: {
      get: function get() {
        return this.value;
      },
      set: function set(newValue) {
        return newValue;
      }
    }
  },
  methods: {
    updateValue: function updateValue(value) {//this.$emit("input", value);
    },
    fetchCountries: function fetchCountries(e) {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                //console.log(e);
                _this.loading = true;
                _context.next = 3;
                return axios.get("/api/fetchCountries");

              case 3:
                res = _context.sent;
                _this.optionsCountry = res.data;
                _this.loading = false;

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    fetchStates: function fetchStates(e) {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this2.emitLocation();

                if (_this2.selectedCountry) {
                  _context2.next = 4;
                  break;
                }

                _this2.resetOptions();

                return _context2.abrupt("return");

              case 4:
                _this2.loading = true;
                _context2.next = 7;
                return axios.get("/api/fetchStates?parent_id=" + _this2.selectedCountry.id);

              case 7:
                res = _context2.sent;
                _this2.optionsState = res.data;
                _this2.loading = false;

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    fetchCities: function fetchCities(e) {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3() {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                console.log(e);

                _this3.emitLocation();

                if (_this3.selectedState) {
                  _context3.next = 5;
                  break;
                }

                _this3.resetOptions();

                return _context3.abrupt("return");

              case 5:
                _this3.loading = true;
                _context3.next = 8;
                return axios.get("/api/fetchCities?parent_id=" + _this3.selectedState.id);

              case 8:
                res = _context3.sent;
                _this3.optionsCity = res.data;
                _this3.loading = false;

              case 11:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    resetOptions: function resetOptions() {
      this.optionsCity = [];
      this.selectedCity = "";
      this.optionsState = [];
      this.selectedState = "";
      this.emitLocation();
    },
    emitLocation: function emitLocation() {
      this.$emit("locationChanged", {
        selectedCountry: this.selectedCountry,
        selectedState: this.selectedState,
        selectedCity: this.selectedCity
      });
    }
  },
  mounted: function mounted() {
    this.fetchCountries();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/ClientApp/Components/forms/PostCreateForm.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/ClientApp/Components/forms/PostCreateForm.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _FileInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FileInput */ "./resources/js/ClientApp/Components/forms/FileInput.vue");


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
//import Treeselect from "@riophae/vue-treeselect";
//import LocationPartialForm from "./LocationPartialForm.vue";

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "PostCreateForm",
  props: ["entity"],
  components: {
    FileInput: _FileInput__WEBPACK_IMPORTED_MODULE_1__["default"] //LocationPartialForm,

  },
  data: function data() {
    return {
      loading: false,
      errors: {},
      form: {
        entity_id: this.entity.id,
        content: "",
        media: []
      },
      media: []
    };
  },
  computed: {
    remainingChars: function remainingChars() {
      return 270 - this.form.content.length;
    },
    canSubmit: function canSubmit() {
      return this.form.content.length && this.remainingChars >= 0;
    }
  },
  watch: {},
  methods: {
    addFiles: function addFiles(files) {
      var _this = this;

      console.log(files);
      Array.from(files).forEach(function (media) {
        _this.form.media.push(media);

        var reader = new FileReader();
        reader.readAsDataURL(media);

        reader.onload = function (e) {
          _this.media.push(e.target.result);
        };
      });
    },
    submit: function submit() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var formData, post;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                //console.log(this.form.content);
                formData = new FormData();
                formData.append("entity_id", _this2.form.entity_id);
                formData.append("content", _this2.form.content);
                Array.from(_this2.form.media).forEach(function (media) {
                  formData.append("media[]", media);
                });
                _this2.loading = true;
                _context.next = 7;
                return axios.post("api/posts", formData).then(function (response) {
                  console.log(response); //

                  //
                  _this2.$emit("postSubmitted", response.data);

                  _this2.errors = {}; //
                }).then(function () {
                  _this2.form.content = "";
                  _this2.form.media = [];
                  _this2.media = [];
                  _this2.$refs["text-area"].style.height = "initial";
                })["catch"](function (ex) {
                  _this2.errors = ex.response.data.errors;
                })["finally"](function () {
                  return _this2.loading = false;
                });

              case 7:
                post = _context.sent;

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    removeMedia: function removeMedia(index) {
      this.form.media.splice(index, 1);
      this.media.splice(index, 1);
    },
    resizeTextarea: function resizeTextarea() {
      var textarea = this.$refs["text-area"];
      textarea.style.height = "initial";
      textarea.style.height = "".concat(textarea.scrollHeight, "px");
    }
  },
  mounted: function mounted() {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/ClientApp/Components/forms/UserDetailsForm.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/ClientApp/Components/forms/UserDetailsForm.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************/
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
  name: "UserDetailsForm",
  data: function data() {
    return {
      busy: false,
      show: true,
      edit: false,
      errors: {},
      form: {
        email: "",
        username: "",
        name: "",
        description: "",
        phone: "",
        cellphone: ""
      }
    };
  },
  components: {},
  computed: {
    user: function user() {
      return this.$store.state.user;
    }
  },
  watch: {},
  methods: {
    onSubmit: function onSubmit(event) {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var newObj, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();
                _this.busy = true;
                _context.prev = 2;
                newObj = JSON.parse(JSON.stringify(_this.form));
                _context.next = 6;
                return _this.$store.dispatch("updateUserDetails", newObj);

              case 6:
                response = _context.sent;
                //console.log(response)
                _this.edit = false;
                _this.errors = {};

                _this.$bvToast.toast("Details changed successfully!", {
                  title: "Great:",
                  variant: "success",
                  solid: true
                }); //this.$router.push("/");


                _context.next = 16;
                break;

              case 12:
                _context.prev = 12;
                _context.t0 = _context["catch"](2);

                _this.$bvToast.toast(_context.t0.response.data.message, {
                  title: "Errors:",
                  variant: "danger",
                  solid: true
                });

                _this.errors = _context.t0.response.data.errors; //

              case 16:
                _context.prev = 16;
                _this.busy = false;
                return _context.finish(16);

              case 19:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[2, 12, 16, 19]]);
      }))();
    },
    onReset: function onReset(event) {
      var _this2 = this;

      event.preventDefault();
      this.edit = false;
      this.errors = {};
      this.form.email = this.user.email;
      this.form.name = this.user.name;
      this.form.username = this.user.username;
      this.form.phone = this.user.phone;
      this.form.cellphone = this.user.cellphone;
      this.form.description = this.user.description; // Reset our form values
      // Trick to reset/clear native browser form validation state

      this.show = false;
      this.$nextTick(function () {
        _this2.show = true;
      });
    }
  },
  mounted: function mounted() {
    this.form.email = this.user.email;
    this.form.name = this.user.name;
    this.form.username = this.user.username;
    this.form.phone = this.user.phone;
    this.form.cellphone = this.user.cellphone;
    this.form.description = this.user.description;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/ClientApp/Components/forms/UserPrivacyForm.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/ClientApp/Components/forms/UserPrivacyForm.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************/
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
  name: "UserPrivacyForm",
  data: function data() {
    return {
      busy: false,
      show: true,
      edit: false,
      errors: {},
      form: {
        oldPassword: "",
        password: "",
        password_confirmation: ""
      }
    };
  },
  computed: {
    user: function user() {
      return this.$store.state.user;
    }
  },
  watch: {},
  methods: {
    onSubmit: function onSubmit(event) {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var newObj, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();
                _this.busy = true;
                _context.prev = 2;
                newObj = JSON.parse(JSON.stringify(_this.form));
                _context.next = 6;
                return _this.$store.dispatch("updatePassword", newObj);

              case 6:
                response = _context.sent;
                _this.edit = false;
                _this.errors = {};
                _this.form.oldPassword = "";
                _this.form.password = "";
                _this.form.passwordConfirm = ""; //console.log("1", response.data.message);

                _this.$bvToast.toast(response.data.message, {
                  title: "Great:",
                  variant: "success",
                  solid: true
                }); //this.$router.push("/");


                _context.next = 19;
                break;

              case 15:
                _context.prev = 15;
                _context.t0 = _context["catch"](2);

                _this.$bvToast.toast(_context.t0.response.data.message, {
                  title: "Errors:",
                  variant: "danger",
                  solid: true
                });

                _this.errors = _context.t0.response.data.errors; //

              case 19:
                _context.prev = 19;
                _this.busy = false;
                return _context.finish(19);

              case 22:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[2, 15, 19, 22]]);
      }))();
    },
    onReset: function onReset(event) {
      var _this2 = this;

      event.preventDefault();
      this.edit = false;
      this.errors = {};
      this.form.oldPassword = "";
      this.form.password = "";
      this.form.passwordConfirm = ""; // Reset our form values
      // Trick to reset/clear native browser form validation state

      this.show = false;
      this.$nextTick(function () {
        _this2.show = true;
      });
    }
  },
  mounted: function mounted() {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/ClientApp/Pages/EntityPage.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/ClientApp/Pages/EntityPage.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Components_forms_PostCreateForm_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Components/forms/PostCreateForm.vue */ "./resources/js/ClientApp/Components/forms/PostCreateForm.vue");
/* harmony import */ var _Components_InfiniteScroll_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Components/InfiniteScroll.vue */ "./resources/js/ClientApp/Components/InfiniteScroll.vue");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



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
  name: "EntityPage",
  //props: ["username"],
  props: {
    username: String
  },
  metaInfo: {
    // title will be injected into parent titleTemplate
    title: "Entity Page",
    titleTemplate: null
  },
  components: {
    PostCreateForm: _Components_forms_PostCreateForm_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    InfiniteScroll: _Components_InfiniteScroll_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      entity: {
        posts: {
          data: []
        }
      }
    };
  },
  beforeRouteEnter: function beforeRouteEnter(to, from, next) {
    next(function (vm) {
      // access to component's instance using `vm` .
      // this is done because this navigation guard is called before the component is created.
      // clear your previously populated search results.
      // re-populate search results
      vm.getEntity(vm.username);
    });
  },
  watch: {},
  computed: {},
  methods: {
    getEntity: function getEntity(username) {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var ent;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _this.$store.dispatch("getEntity", username);

              case 3:
                ent = _context.sent;
                _this.entity = ent.data;
                console.log(ent);
                _context.next = 11;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](0);

                _this.$bvToast.toast(_context.t0.response, {
                  title: "Errors:",
                  variant: "danger",
                  solid: true
                });

              case 11:
                _context.prev = 11;
                console.log("Finally");
                return _context.finish(11);

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 8, 11, 14]]);
      }))();
    },
    loadMorePosts: function loadMorePosts() {
      var _this2 = this;

      console.log("try", this.entity.posts.next_page_url);

      if (!this.entity.posts.next_page_url) {
        return Promise.resolve();
      } //console.log("Getting");


      return axios.get(this.entity.posts.next_page_url).then(function (response) {
        //console.log(response);
        //
        _this2.entity.posts = _objectSpread(_objectSpread({}, response.data.posts), {}, {
          data: [].concat(_toConsumableArray(_this2.entity.posts.data), _toConsumableArray(response.data.posts.data))
        }); //
      });
    },
    addPost: function addPost(post) {
      //console.log(post);
      this.entity.posts.data.unshift(post);
    },
    destroyPost: function destroyPost(id) {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _this3.$bvModal.msgBoxConfirm("Are you sure?", {
                  title: "Please Confirm",
                  size: "sm",
                  buttonSize: "sm",
                  okVariant: "danger",
                  okTitle: "YES",
                  cancelTitle: "NO",
                  footerClass: "p-2",
                  hideHeaderClose: false,
                  centered: true
                }).then( /*#__PURE__*/function () {
                  var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2(value) {
                    var req;
                    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
                      while (1) {
                        switch (_context2.prev = _context2.next) {
                          case 0:
                            if (!value) {
                              _context2.next = 11;
                              break;
                            }

                            _context2.prev = 1;
                            _context2.next = 4;
                            return _this3.$store.dispatch("deletePost", id);

                          case 4:
                            req = _context2.sent;

                            //console.log(req);
                            if (req.status == 200) {
                              _this3.entity.posts.data = _this3.entity.posts.data.filter(function (entity) {
                                return entity.id != id;
                              });
                            }

                            _context2.next = 11;
                            break;

                          case 8:
                            _context2.prev = 8;
                            _context2.t0 = _context2["catch"](1);
                            console.log(_context2.t0);

                          case 11:
                          case "end":
                            return _context2.stop();
                        }
                      }
                    }, _callee2, null, [[1, 8]]);
                  }));

                  return function (_x) {
                    return _ref.apply(this, arguments);
                  };
                }())["catch"](function (err) {// An error occurred
                });

              case 1:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    previewFile: function previewFile() {
      var preview = this.$refs.profile_pic;
      var file = this.$refs.profile_pic_input.files[0];
      var reader = new FileReader();
      reader.addEventListener("load", function () {
        // convert image file to base64 string
        preview.src = reader.result;
      }, false);

      if (file) {
        reader.readAsDataURL(file);
        this.storeProfilePic(file);
      }
    },
    storeProfilePic: function storeProfilePic(file) {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee4() {
        var formData, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                formData = new FormData();
                formData.append("file", file);
                formData.append("entity_id", _this4.entity.id); //console.log(this.entity.id)

                _context4.next = 6;
                return _this4.$store.dispatch("storeEntityProfilePic", formData);

              case 6:
                response = _context4.sent;

                _this4.$bvToast.toast("Pic changed successfully!", {
                  title: "Great:",
                  variant: "success",
                  solid: true
                });

                _context4.next = 14;
                break;

              case 10:
                _context4.prev = 10;
                _context4.t0 = _context4["catch"](0);

                _this4.$bvToast.toast(_context4.t0.response.data.message, {
                  title: "Errors:",
                  variant: "danger",
                  solid: true
                });

                _this4.errors = _context4.t0.response.data.errors;

              case 14:
                _context4.prev = 14;
                return _context4.finish(14);

              case 16:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[0, 10, 14, 16]]);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/ClientApp/Pages/ForgotPasswordPage.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/ClientApp/Pages/ForgotPasswordPage.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
  name: "ForgotPasswordPage",
  data: function data() {
    return {
      busy: false,
      show: true,
      errors: {},
      sendCode: false,
      form: {
        code: "",
        email: "",
        password: "",
        password_confirmation: ""
      }
    };
  },
  components: {},
  computed: {},
  watch: {},
  methods: {
    forgotPassword: function forgotPassword(event) {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var newObj, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();
                _this.busy = true;
                _context.prev = 2;
                newObj = JSON.parse(JSON.stringify(_this.form));
                _context.next = 6;
                return _this.$store.dispatch("forgotPassword", newObj);

              case 6:
                response = _context.sent;

                _this.$bvToast.toast("Check your spam just in case:", {
                  title: response.data.message,
                  variant: "success",
                  solid: true
                });

                _this.sendCode = true;
                _this.form.code = ""; //this.form.email = "";
                //this.form.password = "";
                //this.form.passwordConfirm = "";
                //this.$router.push("/");

                _context.next = 16;
                break;

              case 12:
                _context.prev = 12;
                _context.t0 = _context["catch"](2);

                _this.$bvToast.toast(_context.t0.response.data.message, {
                  title: "Errors:",
                  variant: "danger",
                  solid: true
                });

                _this.errors = _context.t0.response.data; //

              case 16:
                _context.prev = 16;
                _this.busy = false;
                return _context.finish(16);

              case 19:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[2, 12, 16, 19]]);
      }))();
    },
    resetPassword: function resetPassword(event) {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        var newObj, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                event.preventDefault();
                _this2.busy = true;
                _context2.prev = 2;
                newObj = JSON.parse(JSON.stringify(_this2.form));
                _context2.next = 6;
                return _this2.$store.dispatch("resetPassword", newObj);

              case 6:
                response = _context2.sent;

                //this.$router.push("/");
                _this2.$bvToast.toast("Check your spam just in case:", {
                  title: response.data.message,
                  variant: "success",
                  solid: true
                });

                setTimeout(function () {
                  _this2.$router.push("/login");
                }, 1000);
                _context2.next = 15;
                break;

              case 11:
                _context2.prev = 11;
                _context2.t0 = _context2["catch"](2);

                _this2.$bvToast.toast(_context2.t0.response.data.message, {
                  title: "Errors:",
                  variant: "danger",
                  solid: true
                });

                _this2.errors = _context2.t0.response.data; //

              case 15:
                _context2.prev = 15;
                _this2.busy = false;
                return _context2.finish(15);

              case 18:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[2, 11, 15, 18]]);
      }))();
    },
    onResetMailForm: function onResetMailForm(event) {
      var _this3 = this;

      event.preventDefault(); // Reset our form values

      this.form.email = ""; // Trick to reset/clear native browser form validation state

      this.show = false;
      this.$nextTick(function () {
        _this3.show = true;
      });
    },
    onResetPasswordForm: function onResetPasswordForm(event) {
      var _this4 = this;

      event.preventDefault(); // Reset our form values

      this.form.code = "";
      this.form.password = "";
      this.form.passwordConfirm = ""; // Trick to reset/clear native browser form validation state

      this.show = false;
      this.$nextTick(function () {
        _this4.show = true;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/ClientApp/Pages/LoginPage.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/ClientApp/Pages/LoginPage.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
  name: "LoginPage",
  data: function data() {
    return {
      busy: false,
      show: true,
      errors: {},
      form: {
        email: "guidoaimar@gmail.com",
        password: "123123123"
      }
    };
  },
  components: {},
  computed: {},
  watch: {},
  methods: {
    onSubmit: function onSubmit(event) {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var newObj, res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();
                _this.busy = true;
                _context.prev = 2;
                newObj = JSON.parse(JSON.stringify(_this.form));
                _context.next = 6;
                return _this.$store.dispatch("login", newObj);

              case 6:
                res = _context.sent;

                _this.$router.push("/");

                _context.next = 14;
                break;

              case 10:
                _context.prev = 10;
                _context.t0 = _context["catch"](2);

                _this.$bvToast.toast(_context.t0.response.data.message, {
                  title: "Errors:",
                  variant: "danger",
                  solid: true
                });

                _this.errors = _context.t0.response.data; //

              case 14:
                _context.prev = 14;
                _this.busy = false;
                return _context.finish(14);

              case 17:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[2, 10, 14, 17]]);
      }))();
    },
    onReset: function onReset(event) {
      var _this2 = this;

      event.preventDefault(); // Reset our form values

      this.form.email = "";
      this.form.password = ""; // Trick to reset/clear native browser form validation state

      this.show = false;
      this.$nextTick(function () {
        _this2.show = true;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/ClientApp/Pages/ProfilePage.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/ClientApp/Pages/ProfilePage.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
//
//
//import EntityDetailsForm from "../Components/forms/EntityDetailsForm.vue";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "ProfilePage",
  metaInfo: {
    // title will be injected into parent titleTemplate
    title: "User Profile",
    titleTemplate: null
  },
  data: function data() {
    return {};
  },
  computed: {
    user: function user() {
      return this.$store.state.user;
    },
    userOwnsEntities: function userOwnsEntities() {
      return this.$store.state.mainData.user_entities;
    }
  },
  watch: {},
  methods: {
    previewFile: function previewFile() {
      var preview = this.$refs.profile_pic;
      var file = this.$refs.profile_pic_input.files[0];
      var reader = new FileReader();
      reader.addEventListener("load", function () {
        // convert image file to base64 string
        preview.src = reader.result;
      }, false);

      if (file) {
        reader.readAsDataURL(file);
        this.storeProfilePic(file);
      }
    },
    storeProfilePic: function storeProfilePic(file) {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var formData, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                formData = new FormData();
                formData.append("file", file);
                _context.next = 5;
                return _this.$store.dispatch("storeProfilePic", formData);

              case 5:
                response = _context.sent;

                _this.$bvToast.toast("Pic changed successfully!", {
                  title: "Great:",
                  variant: "success",
                  solid: true
                });

                _context.next = 13;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](0);

                _this.$bvToast.toast(_context.t0.response.data.message, {
                  title: "Errors:",
                  variant: "danger",
                  solid: true
                });

                _this.errors = _context.t0.response.data.errors;

              case 13:
                _context.prev = 13;
                return _context.finish(13);

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 9, 13, 15]]);
      }))();
    }
  },
  mounted: function mounted() {
    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/ClientApp/Pages/RegisterPage.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/ClientApp/Pages/RegisterPage.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************/
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
  name: "RegisterPage",
  data: function data() {
    return {
      busy: false,
      show: true,
      form: {
        email: "",
        username: "",
        name: "",
        job_description: "",
        phone: "",
        cellphone: "",
        address: "",
        password: "",
        password_confirmation: ""
      },
      errors: {}
    };
  },
  components: {},
  computed: {},
  watch: {},
  methods: {
    onSubmit: function onSubmit(event) {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var newObj;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();
                _this.busy = true;
                _context.prev = 2;
                newObj = JSON.parse(JSON.stringify(_this.form));
                _context.next = 6;
                return _this.$store.dispatch("registerUser", newObj);

              case 6:
                _context.next = 8;
                return _this.$store.dispatch("login", newObj);

              case 8:
                _this.$router.push("/");

                _context.next = 14;
                break;

              case 11:
                _context.prev = 11;
                _context.t0 = _context["catch"](2);
                _this.errors = _context.t0.response.data.errors; //.data.errors;

              case 14:
                _context.prev = 14;
                _this.busy = false;
                return _context.finish(14);

              case 17:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[2, 11, 14, 17]]);
      }))();
    },
    onReset: function onReset(event) {
      var _this2 = this;

      event.preventDefault(); // Reset our form values

      this.errors = {};
      this.form.email = "";
      this.form.name = "";
      this.form.username = "";
      this.form.phone = "";
      this.form.cellphone = "";
      this.form.address = "";
      this.form.password = "";
      this.form.passwordconfirm = ""; // Trick to reset/clear native browser form validation state

      this.show = false;
      this.$nextTick(function () {
        _this2.show = true;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/ClientApp/Pages/SettingsPage.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/ClientApp/Pages/SettingsPage.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Components_forms_UserDetailsForm_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Components/forms/UserDetailsForm.vue */ "./resources/js/ClientApp/Components/forms/UserDetailsForm.vue");
/* harmony import */ var _Components_forms_UserPrivacyForm_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Components/forms/UserPrivacyForm.vue */ "./resources/js/ClientApp/Components/forms/UserPrivacyForm.vue");
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
  name: "SettingsPage",
  metaInfo: {
    // title will be injected into parent titleTemplate
    title: "User settings",
    titleTemplate: null
  },
  components: {
    UserDetailsForm: _Components_forms_UserDetailsForm_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    UserPrivacyForm: _Components_forms_UserPrivacyForm_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/ClientApp/Pages/UserBookmarksPage.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/ClientApp/Pages/UserBookmarksPage.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Components_EntityCard_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Components/EntityCard.vue */ "./resources/js/ClientApp/Components/EntityCard.vue");
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
 //import store from "../Store/index.js";

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "UserBookmarksPage",
  metaInfo: {
    // title will be injected into parent titleTemplate
    title: "User Bookmarks",
    titleTemplate: null
  },
  components: {
    EntityCard: _Components_EntityCard_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  beforeRouteEnter: function beforeRouteEnter(to, from, next) {
    /*
    store.dispatch("getUserBookmarks").then((response) => {
        next((vm) => {});
    });
    */
    next(function (vm) {
      // access to component's instance using `vm` .
      // this is done because this navigation guard is called before the component is created.
      vm.$store.dispatch("getUserBookmarks");
    });
  },
  computed: {
    userBoomarks: function userBoomarks() {
      return this.$store.state.mainData.user_bookmarks;
    }
  },
  mounted: function mounted() {//this.$store.dispatch("getUserBookmarks");
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/ClientApp/Pages/UserEntitiesPage.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/ClientApp/Pages/UserEntitiesPage.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Components_forms_EntityDetailsForm_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Components/forms/EntityDetailsForm.vue */ "./resources/js/ClientApp/Components/forms/EntityDetailsForm.vue");


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
 //import store from "../Store";

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "UserEntitiesPage",
  metaInfo: {
    // title will be injected into parent titleTemplate
    title: "User entities",
    titleTemplate: null
  },
  components: {
    EntityDetailsForm: _Components_forms_EntityDetailsForm_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      showModal: false,
      toEntityForm: {}
    };
  },

  /*
  async beforeRouteEnter(to, from, next) {
      await store.dispatch("getUserEntities");
      next();
  },
  */
  computed: {
    userEntities: function userEntities() {
      return this.$store.state.mainData.user_entities;
    }
  },
  methods: {
    editEntity: function editEntity(entity) {
      this.showModal = true; //this.toEntityForm = entity;

      this.toEntityForm = JSON.parse(JSON.stringify(entity));
    }
  },
  mounted: function mounted() {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _this.$store.dispatch("getUserEntities");

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/ClientApp/Components/forms/FileInput.vue?vue&type=style&index=0&id=6e8eaa68&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/ClientApp/Components/forms/FileInput.vue?vue&type=style&index=0&id=6e8eaa68&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n*[data-v-6e8eaa68]:focus {\n    outline: 0 !important;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/ClientApp/Components/forms/LocationPartialForm.vue?vue&type=style&index=0&id=000dc18e&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/ClientApp/Components/forms/LocationPartialForm.vue?vue&type=style&index=0&id=000dc18e&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.location_search input[data-v-000dc18e]::-webkit-calendar-picker-indicator {\n    display: none !important;\n}\n.location_search[data-v-000dc18e] ::-moz-placeholder {\n    /* Chrome, Firefox, Opera, Safari 10.1+ */\n    color: #bdbdbd !important;\n    opacity: 1 !important; /* Firefox */\n}\n.location_search[data-v-000dc18e] :-ms-input-placeholder {\n    /* Chrome, Firefox, Opera, Safari 10.1+ */\n    color: #bdbdbd !important;\n    opacity: 1 !important; /* Firefox */\n}\n.location_search[data-v-000dc18e] ::placeholder {\n    /* Chrome, Firefox, Opera, Safari 10.1+ */\n    color: #bdbdbd !important;\n    opacity: 1 !important; /* Firefox */\n}\n.location_search[data-v-000dc18e] :-ms-input-placeholder {\n    /* Internet Explorer 10-11 */\n    color: #bdbdbd !important;\n}\n.location_search[data-v-000dc18e] ::-ms-input-placeholder {\n    /* Microsoft Edge */\n    color: #bdbdbd !important;\n}\ndiv.vs__actions[data-v-000dc18e] {\n    cursor: pointer !important;\n}\n[data-v-000dc18e]  {\n    --vs-colors--lightest: rgba(60, 60, 60, 0.26);\n    --vs-colors--light: rgba(60, 60, 60, 0.5);\n    --vs-colors--dark: #333;\n    --vs-colors--darkest: rgba(0, 0, 0, 0.15);\n\n    /* Search Input */\n    --vs-search-input-color: inherit;\n    --vs-search-input-placeholder-color: inherit;\n\n    /* Font */\n    --vs-font-size: 1rem;\n    --vs-line-height: 1.4;\n\n    /* Disabled State */\n    --vs-state-disabled-bg: rgb(248, 248, 248);\n    --vs-state-disabled-color: var(--vs-colors--light);\n    --vs-state-disabled-controls-color: var(--vs-colors--light);\n    --vs-state-disabled-cursor: not-allowed;\n\n    /* Borders */\n    --vs-border-color: var(--vs-colors--lightest);\n    --vs-border-width: 1px;\n    --vs-border-style: solid;\n    --vs-border-radius: 4px;\n\n    /* Actions: house the component controls */\n    --vs-actions-padding: 4px 6px 0 3px;\n\n    /* Component Controls: Clear, Open Indicator */\n    --vs-controls-color: var(--vs-colors--light);\n    --vs-controls-size: 1;\n    --vs-controls--deselect-text-shadow: 0 1px 0 #fff;\n\n    /* Selected */\n    --vs-selected-bg: #f0f0f0;\n    --vs-selected-color: var(--vs-colors--dark);\n    --vs-selected-border-color: var(--vs-border-color);\n    --vs-selected-border-style: var(--vs-border-style);\n    --vs-selected-border-width: var(--vs-border-width);\n\n    /* Dropdown */\n    --vs-dropdown-bg: #fff;\n    --vs-dropdown-color: inherit;\n    --vs-dropdown-z-index: 1000;\n    --vs-dropdown-min-width: 160px;\n    --vs-dropdown-max-height: 350px;\n    --vs-dropdown-box-shadow: 0px 3px 6px 0px var(--vs-colors--darkest);\n\n    /* Options */\n    --vs-dropdown-option-bg: #000;\n    --vs-dropdown-option-color: var(--vs-dropdown-color);\n    --vs-dropdown-option-padding: 3px 20px;\n\n    /* Active State */\n    --vs-dropdown-option--active-bg: #5897fb;\n    --vs-dropdown-option--active-color: #fff;\n\n    /* Deselect State */\n    --vs-dropdown-option--deselect-bg: #fb5858;\n    --vs-dropdown-option--deselect-color: #fff;\n\n    /* Transitions */\n    --vs-transition-timing-function: cubic-bezier(1, -0.115, 0.975, 0.855);\n    --vs-transition-duration: 150ms;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/ClientApp/Components/forms/PostCreateForm.vue?vue&type=style&index=0&id=16799772&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/ClientApp/Components/forms/PostCreateForm.vue?vue&type=style&index=0&id=16799772&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\nbutton[data-v-16799772]:disabled {\n    opacity: 75%;\n    cursor: not-allowed;\n}\ntextarea[data-v-16799772] {\n    border: none;\n    background-color: transparent;\n    resize: none;\n    outline: none;\n    width: 100% !important;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/ClientApp/Pages/EntityPage.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/ClientApp/Pages/EntityPage.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* your passed-in element */\n.enlargeable-image > .slot {\n    display: inline-block;\n    /*max-width: 100%;*/\n    width: 100%;\n    max-height: 100%;\n    cursor: zoom-in;\n}\n/* default img if no element passed in */\n.enlargeable-image > .slot > img.default {\n    /*max-width: 100%;*/\n    width: 100%;\n    vertical-align: middle;\n}\n/* passed-in element when growth is happening */\n.enlargeable-image.active > .slot {\n    opacity: 0.3;\n    filter: grayscale(100%);\n}\n/* full version that grows (background image allows seamless transition from thumbnail to full) */\n.enlargeable-image .full {\n    cursor: zoom-out;\n    background-color: transparent;\n    align-items: center;\n    justify-content: center;\n    background-position: center center;\n    background-repeat: no-repeat;\n    background-size: contain;\n    display: none;\n}\n.enlargeable-image .full > img {\n    -o-object-fit: contain;\n       object-fit: contain;\n    width: 100%;\n    height: 100%;\n}\n/* full version while getting bigger */\n.enlargeable-image .full.enlarging {\n    display: flex;\n    position: fixed;\n    left: 0px;\n    top: 0px;\n    width: 100%;\n    height: 100%;\n    background-color: transparent;\n    cursor: zoom-out;\n    z-index: 3;\n}\n/* full version while at its peak size */\n.enlargeable-image .full.enlarged {\n    display: flex;\n    position: fixed;\n    left: 0px;\n    top: 0px;\n    width: 100%;\n    height: 100%;\n    background-color: transparent;\n    cursor: zoom-out;\n    z-index: 2;\n}\n/* full version while getting smaller */\n.enlargeable-image .full.delarging {\n    display: flex;\n    position: fixed;\n    left: 0px;\n    top: 0px;\n    width: 100%;\n    height: 100%;\n    background-color: transparent;\n    cursor: zoom-in;\n    z-index: 1;\n}\n\n/*Profile Pic Start*/\n.picture-container {\n    position: relative;\n    cursor: pointer;\n    text-align: center;\n}\n.picture {\n    /*width: 106px;*/\n    /*height: 106px;*/\n    background-color: #999999;\n    border: 4px solid #cccccc;\n    color: #ffffff;\n    /*border-radius: 50%;*/\n    margin: 0px auto;\n    overflow: hidden;\n    transition: all 0.2s;\n    -webkit-transition: all 0.2s;\n}\n.picture:hover {\n    border-color: #2ca8ff;\n}\n.content.ct-wizard-green .picture:hover {\n    border-color: #05ae0e;\n}\n.content.ct-wizard-blue .picture:hover {\n    border-color: #3472f7;\n}\n.content.ct-wizard-orange .picture:hover {\n    border-color: #ff9500;\n}\n.content.ct-wizard-red .picture:hover {\n    border-color: #ff3b30;\n}\n.picture input[type=\"file\"] {\n    cursor: pointer;\n    display: block;\n    height: 100%;\n    left: 0;\n    opacity: 0 !important;\n    position: absolute;\n    top: 0;\n    width: 100%;\n}\n.picture-src {\n    width: 100%;\n}\n/*Profile Pic End*/\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/ClientApp/Pages/ProfilePage.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/ClientApp/Pages/ProfilePage.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/*Profile Pic Start*/\n.picture-container {\n    position: relative;\n    cursor: pointer;\n    text-align: center;\n}\n.picture {\n    width: 106px;\n    height: 106px;\n    background-color: #999999;\n    border: 4px solid #cccccc;\n    color: #ffffff;\n    border-radius: 50%;\n    margin: 0px auto;\n    overflow: hidden;\n    transition: all 0.2s;\n    -webkit-transition: all 0.2s;\n}\n.picture:hover {\n    border-color: #2ca8ff;\n}\n.content.ct-wizard-green .picture:hover {\n    border-color: #05ae0e;\n}\n.content.ct-wizard-blue .picture:hover {\n    border-color: #3472f7;\n}\n.content.ct-wizard-orange .picture:hover {\n    border-color: #ff9500;\n}\n.content.ct-wizard-red .picture:hover {\n    border-color: #ff3b30;\n}\n.picture input[type=\"file\"] {\n    cursor: pointer;\n    display: block;\n    height: 100%;\n    left: 0;\n    opacity: 0 !important;\n    position: absolute;\n    top: 0;\n    width: 100%;\n}\n.picture-src {\n    width: 100%;\n}\n/*Profile Pic End*/\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/ClientApp/Components/forms/FileInput.vue?vue&type=style&index=0&id=6e8eaa68&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/ClientApp/Components/forms/FileInput.vue?vue&type=style&index=0&id=6e8eaa68&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FileInput_vue_vue_type_style_index_0_id_6e8eaa68_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FileInput.vue?vue&type=style&index=0&id=6e8eaa68&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/ClientApp/Components/forms/FileInput.vue?vue&type=style&index=0&id=6e8eaa68&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FileInput_vue_vue_type_style_index_0_id_6e8eaa68_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FileInput_vue_vue_type_style_index_0_id_6e8eaa68_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/ClientApp/Components/forms/LocationPartialForm.vue?vue&type=style&index=0&id=000dc18e&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/ClientApp/Components/forms/LocationPartialForm.vue?vue&type=style&index=0&id=000dc18e&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LocationPartialForm_vue_vue_type_style_index_0_id_000dc18e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./LocationPartialForm.vue?vue&type=style&index=0&id=000dc18e&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/ClientApp/Components/forms/LocationPartialForm.vue?vue&type=style&index=0&id=000dc18e&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LocationPartialForm_vue_vue_type_style_index_0_id_000dc18e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LocationPartialForm_vue_vue_type_style_index_0_id_000dc18e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/ClientApp/Components/forms/PostCreateForm.vue?vue&type=style&index=0&id=16799772&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/ClientApp/Components/forms/PostCreateForm.vue?vue&type=style&index=0&id=16799772&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PostCreateForm_vue_vue_type_style_index_0_id_16799772_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PostCreateForm.vue?vue&type=style&index=0&id=16799772&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/ClientApp/Components/forms/PostCreateForm.vue?vue&type=style&index=0&id=16799772&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PostCreateForm_vue_vue_type_style_index_0_id_16799772_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PostCreateForm_vue_vue_type_style_index_0_id_16799772_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/ClientApp/Pages/EntityPage.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/ClientApp/Pages/EntityPage.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EntityPage_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EntityPage.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/ClientApp/Pages/EntityPage.vue?vue&type=style&index=0&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EntityPage_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EntityPage_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/ClientApp/Pages/ProfilePage.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/ClientApp/Pages/ProfilePage.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfilePage_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProfilePage.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/ClientApp/Pages/ProfilePage.vue?vue&type=style&index=0&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfilePage_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfilePage_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/AdminApp/Components/forms/UserDetailsForm.vue":
/*!********************************************************************!*\
  !*** ./resources/js/AdminApp/Components/forms/UserDetailsForm.vue ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _UserDetailsForm_vue_vue_type_template_id_3430ef31___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserDetailsForm.vue?vue&type=template&id=3430ef31& */ "./resources/js/AdminApp/Components/forms/UserDetailsForm.vue?vue&type=template&id=3430ef31&");
/* harmony import */ var _UserDetailsForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserDetailsForm.vue?vue&type=script&lang=js& */ "./resources/js/AdminApp/Components/forms/UserDetailsForm.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UserDetailsForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserDetailsForm_vue_vue_type_template_id_3430ef31___WEBPACK_IMPORTED_MODULE_0__.render,
  _UserDetailsForm_vue_vue_type_template_id_3430ef31___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/AdminApp/Components/forms/UserDetailsForm.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/AdminApp/Components/forms/UserPrivacyForm.vue":
/*!********************************************************************!*\
  !*** ./resources/js/AdminApp/Components/forms/UserPrivacyForm.vue ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _UserPrivacyForm_vue_vue_type_template_id_fee30b12___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserPrivacyForm.vue?vue&type=template&id=fee30b12& */ "./resources/js/AdminApp/Components/forms/UserPrivacyForm.vue?vue&type=template&id=fee30b12&");
/* harmony import */ var _UserPrivacyForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserPrivacyForm.vue?vue&type=script&lang=js& */ "./resources/js/AdminApp/Components/forms/UserPrivacyForm.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UserPrivacyForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserPrivacyForm_vue_vue_type_template_id_fee30b12___WEBPACK_IMPORTED_MODULE_0__.render,
  _UserPrivacyForm_vue_vue_type_template_id_fee30b12___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/AdminApp/Components/forms/UserPrivacyForm.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/AdminApp/Pages/Categories.vue":
/*!****************************************************!*\
  !*** ./resources/js/AdminApp/Pages/Categories.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Categories_vue_vue_type_template_id_0daa5ef6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Categories.vue?vue&type=template&id=0daa5ef6& */ "./resources/js/AdminApp/Pages/Categories.vue?vue&type=template&id=0daa5ef6&");
/* harmony import */ var _Categories_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Categories.vue?vue&type=script&lang=js& */ "./resources/js/AdminApp/Pages/Categories.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Categories_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Categories_vue_vue_type_template_id_0daa5ef6___WEBPACK_IMPORTED_MODULE_0__.render,
  _Categories_vue_vue_type_template_id_0daa5ef6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/AdminApp/Pages/Categories.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/AdminApp/Pages/Materials.vue":
/*!***************************************************!*\
  !*** ./resources/js/AdminApp/Pages/Materials.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Materials_vue_vue_type_template_id_470acf7c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Materials.vue?vue&type=template&id=470acf7c& */ "./resources/js/AdminApp/Pages/Materials.vue?vue&type=template&id=470acf7c&");
/* harmony import */ var _Materials_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Materials.vue?vue&type=script&lang=js& */ "./resources/js/AdminApp/Pages/Materials.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Materials_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Materials_vue_vue_type_template_id_470acf7c___WEBPACK_IMPORTED_MODULE_0__.render,
  _Materials_vue_vue_type_template_id_470acf7c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/AdminApp/Pages/Materials.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/AdminApp/Pages/Processes.vue":
/*!***************************************************!*\
  !*** ./resources/js/AdminApp/Pages/Processes.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Processes_vue_vue_type_template_id_e554ba1a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Processes.vue?vue&type=template&id=e554ba1a& */ "./resources/js/AdminApp/Pages/Processes.vue?vue&type=template&id=e554ba1a&");
/* harmony import */ var _Processes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Processes.vue?vue&type=script&lang=js& */ "./resources/js/AdminApp/Pages/Processes.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Processes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Processes_vue_vue_type_template_id_e554ba1a___WEBPACK_IMPORTED_MODULE_0__.render,
  _Processes_vue_vue_type_template_id_e554ba1a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/AdminApp/Pages/Processes.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/AdminApp/Pages/Profile.vue":
/*!*************************************************!*\
  !*** ./resources/js/AdminApp/Pages/Profile.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Profile_vue_vue_type_template_id_4fd1a2bf___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Profile.vue?vue&type=template&id=4fd1a2bf& */ "./resources/js/AdminApp/Pages/Profile.vue?vue&type=template&id=4fd1a2bf&");
/* harmony import */ var _Profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Profile.vue?vue&type=script&lang=js& */ "./resources/js/AdminApp/Pages/Profile.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Profile_vue_vue_type_template_id_4fd1a2bf___WEBPACK_IMPORTED_MODULE_0__.render,
  _Profile_vue_vue_type_template_id_4fd1a2bf___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/AdminApp/Pages/Profile.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/ClientApp/Components/BookmarkIcon.vue":
/*!************************************************************!*\
  !*** ./resources/js/ClientApp/Components/BookmarkIcon.vue ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _BookmarkIcon_vue_vue_type_template_id_2d436241___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BookmarkIcon.vue?vue&type=template&id=2d436241& */ "./resources/js/ClientApp/Components/BookmarkIcon.vue?vue&type=template&id=2d436241&");
/* harmony import */ var _BookmarkIcon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BookmarkIcon.vue?vue&type=script&lang=js& */ "./resources/js/ClientApp/Components/BookmarkIcon.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _BookmarkIcon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _BookmarkIcon_vue_vue_type_template_id_2d436241___WEBPACK_IMPORTED_MODULE_0__.render,
  _BookmarkIcon_vue_vue_type_template_id_2d436241___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/ClientApp/Components/BookmarkIcon.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/ClientApp/Components/EntityCard.vue":
/*!**********************************************************!*\
  !*** ./resources/js/ClientApp/Components/EntityCard.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _EntityCard_vue_vue_type_template_id_290be4f6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EntityCard.vue?vue&type=template&id=290be4f6& */ "./resources/js/ClientApp/Components/EntityCard.vue?vue&type=template&id=290be4f6&");
/* harmony import */ var _EntityCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EntityCard.vue?vue&type=script&lang=js& */ "./resources/js/ClientApp/Components/EntityCard.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _EntityCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EntityCard_vue_vue_type_template_id_290be4f6___WEBPACK_IMPORTED_MODULE_0__.render,
  _EntityCard_vue_vue_type_template_id_290be4f6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/ClientApp/Components/EntityCard.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/ClientApp/Components/InfiniteScroll.vue":
/*!**************************************************************!*\
  !*** ./resources/js/ClientApp/Components/InfiniteScroll.vue ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _InfiniteScroll_vue_vue_type_template_id_c017441a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InfiniteScroll.vue?vue&type=template&id=c017441a& */ "./resources/js/ClientApp/Components/InfiniteScroll.vue?vue&type=template&id=c017441a&");
/* harmony import */ var _InfiniteScroll_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InfiniteScroll.vue?vue&type=script&lang=js& */ "./resources/js/ClientApp/Components/InfiniteScroll.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _InfiniteScroll_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _InfiniteScroll_vue_vue_type_template_id_c017441a___WEBPACK_IMPORTED_MODULE_0__.render,
  _InfiniteScroll_vue_vue_type_template_id_c017441a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/ClientApp/Components/InfiniteScroll.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/ClientApp/Components/forms/EntityDetailsForm.vue":
/*!***********************************************************************!*\
  !*** ./resources/js/ClientApp/Components/forms/EntityDetailsForm.vue ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _EntityDetailsForm_vue_vue_type_template_id_6e50fce1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EntityDetailsForm.vue?vue&type=template&id=6e50fce1& */ "./resources/js/ClientApp/Components/forms/EntityDetailsForm.vue?vue&type=template&id=6e50fce1&");
/* harmony import */ var _EntityDetailsForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EntityDetailsForm.vue?vue&type=script&lang=js& */ "./resources/js/ClientApp/Components/forms/EntityDetailsForm.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _EntityDetailsForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EntityDetailsForm_vue_vue_type_template_id_6e50fce1___WEBPACK_IMPORTED_MODULE_0__.render,
  _EntityDetailsForm_vue_vue_type_template_id_6e50fce1___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/ClientApp/Components/forms/EntityDetailsForm.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/ClientApp/Components/forms/FileInput.vue":
/*!***************************************************************!*\
  !*** ./resources/js/ClientApp/Components/forms/FileInput.vue ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FileInput_vue_vue_type_template_id_6e8eaa68_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FileInput.vue?vue&type=template&id=6e8eaa68&scoped=true& */ "./resources/js/ClientApp/Components/forms/FileInput.vue?vue&type=template&id=6e8eaa68&scoped=true&");
/* harmony import */ var _FileInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FileInput.vue?vue&type=script&lang=js& */ "./resources/js/ClientApp/Components/forms/FileInput.vue?vue&type=script&lang=js&");
/* harmony import */ var _FileInput_vue_vue_type_style_index_0_id_6e8eaa68_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FileInput.vue?vue&type=style&index=0&id=6e8eaa68&scoped=true&lang=css& */ "./resources/js/ClientApp/Components/forms/FileInput.vue?vue&type=style&index=0&id=6e8eaa68&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _FileInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FileInput_vue_vue_type_template_id_6e8eaa68_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _FileInput_vue_vue_type_template_id_6e8eaa68_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "6e8eaa68",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/ClientApp/Components/forms/FileInput.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/ClientApp/Components/forms/LocationPartialForm.vue":
/*!*************************************************************************!*\
  !*** ./resources/js/ClientApp/Components/forms/LocationPartialForm.vue ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _LocationPartialForm_vue_vue_type_template_id_000dc18e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LocationPartialForm.vue?vue&type=template&id=000dc18e&scoped=true& */ "./resources/js/ClientApp/Components/forms/LocationPartialForm.vue?vue&type=template&id=000dc18e&scoped=true&");
/* harmony import */ var _LocationPartialForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LocationPartialForm.vue?vue&type=script&lang=js& */ "./resources/js/ClientApp/Components/forms/LocationPartialForm.vue?vue&type=script&lang=js&");
/* harmony import */ var _LocationPartialForm_vue_vue_type_style_index_0_id_000dc18e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LocationPartialForm.vue?vue&type=style&index=0&id=000dc18e&scoped=true&lang=css& */ "./resources/js/ClientApp/Components/forms/LocationPartialForm.vue?vue&type=style&index=0&id=000dc18e&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _LocationPartialForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _LocationPartialForm_vue_vue_type_template_id_000dc18e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _LocationPartialForm_vue_vue_type_template_id_000dc18e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "000dc18e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/ClientApp/Components/forms/LocationPartialForm.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/ClientApp/Components/forms/PostCreateForm.vue":
/*!********************************************************************!*\
  !*** ./resources/js/ClientApp/Components/forms/PostCreateForm.vue ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PostCreateForm_vue_vue_type_template_id_16799772_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PostCreateForm.vue?vue&type=template&id=16799772&scoped=true& */ "./resources/js/ClientApp/Components/forms/PostCreateForm.vue?vue&type=template&id=16799772&scoped=true&");
/* harmony import */ var _PostCreateForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PostCreateForm.vue?vue&type=script&lang=js& */ "./resources/js/ClientApp/Components/forms/PostCreateForm.vue?vue&type=script&lang=js&");
/* harmony import */ var _PostCreateForm_vue_vue_type_style_index_0_id_16799772_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PostCreateForm.vue?vue&type=style&index=0&id=16799772&scoped=true&lang=css& */ "./resources/js/ClientApp/Components/forms/PostCreateForm.vue?vue&type=style&index=0&id=16799772&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _PostCreateForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PostCreateForm_vue_vue_type_template_id_16799772_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _PostCreateForm_vue_vue_type_template_id_16799772_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "16799772",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/ClientApp/Components/forms/PostCreateForm.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/ClientApp/Components/forms/UserDetailsForm.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/ClientApp/Components/forms/UserDetailsForm.vue ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _UserDetailsForm_vue_vue_type_template_id_bf025d0e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserDetailsForm.vue?vue&type=template&id=bf025d0e& */ "./resources/js/ClientApp/Components/forms/UserDetailsForm.vue?vue&type=template&id=bf025d0e&");
/* harmony import */ var _UserDetailsForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserDetailsForm.vue?vue&type=script&lang=js& */ "./resources/js/ClientApp/Components/forms/UserDetailsForm.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UserDetailsForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserDetailsForm_vue_vue_type_template_id_bf025d0e___WEBPACK_IMPORTED_MODULE_0__.render,
  _UserDetailsForm_vue_vue_type_template_id_bf025d0e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/ClientApp/Components/forms/UserDetailsForm.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/ClientApp/Components/forms/UserPrivacyForm.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/ClientApp/Components/forms/UserPrivacyForm.vue ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _UserPrivacyForm_vue_vue_type_template_id_26474682___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserPrivacyForm.vue?vue&type=template&id=26474682& */ "./resources/js/ClientApp/Components/forms/UserPrivacyForm.vue?vue&type=template&id=26474682&");
/* harmony import */ var _UserPrivacyForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserPrivacyForm.vue?vue&type=script&lang=js& */ "./resources/js/ClientApp/Components/forms/UserPrivacyForm.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UserPrivacyForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserPrivacyForm_vue_vue_type_template_id_26474682___WEBPACK_IMPORTED_MODULE_0__.render,
  _UserPrivacyForm_vue_vue_type_template_id_26474682___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/ClientApp/Components/forms/UserPrivacyForm.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/ClientApp/Pages/EntityPage.vue":
/*!*****************************************************!*\
  !*** ./resources/js/ClientApp/Pages/EntityPage.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _EntityPage_vue_vue_type_template_id_5d859d98___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EntityPage.vue?vue&type=template&id=5d859d98& */ "./resources/js/ClientApp/Pages/EntityPage.vue?vue&type=template&id=5d859d98&");
/* harmony import */ var _EntityPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EntityPage.vue?vue&type=script&lang=js& */ "./resources/js/ClientApp/Pages/EntityPage.vue?vue&type=script&lang=js&");
/* harmony import */ var _EntityPage_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EntityPage.vue?vue&type=style&index=0&lang=css& */ "./resources/js/ClientApp/Pages/EntityPage.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _EntityPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EntityPage_vue_vue_type_template_id_5d859d98___WEBPACK_IMPORTED_MODULE_0__.render,
  _EntityPage_vue_vue_type_template_id_5d859d98___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/ClientApp/Pages/EntityPage.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/ClientApp/Pages/ForgotPasswordPage.vue":
/*!*************************************************************!*\
  !*** ./resources/js/ClientApp/Pages/ForgotPasswordPage.vue ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ForgotPasswordPage_vue_vue_type_template_id_7ecfb1a2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ForgotPasswordPage.vue?vue&type=template&id=7ecfb1a2& */ "./resources/js/ClientApp/Pages/ForgotPasswordPage.vue?vue&type=template&id=7ecfb1a2&");
/* harmony import */ var _ForgotPasswordPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ForgotPasswordPage.vue?vue&type=script&lang=js& */ "./resources/js/ClientApp/Pages/ForgotPasswordPage.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ForgotPasswordPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ForgotPasswordPage_vue_vue_type_template_id_7ecfb1a2___WEBPACK_IMPORTED_MODULE_0__.render,
  _ForgotPasswordPage_vue_vue_type_template_id_7ecfb1a2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/ClientApp/Pages/ForgotPasswordPage.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/ClientApp/Pages/LoginPage.vue":
/*!****************************************************!*\
  !*** ./resources/js/ClientApp/Pages/LoginPage.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _LoginPage_vue_vue_type_template_id_7d53d066___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LoginPage.vue?vue&type=template&id=7d53d066& */ "./resources/js/ClientApp/Pages/LoginPage.vue?vue&type=template&id=7d53d066&");
/* harmony import */ var _LoginPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LoginPage.vue?vue&type=script&lang=js& */ "./resources/js/ClientApp/Pages/LoginPage.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _LoginPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _LoginPage_vue_vue_type_template_id_7d53d066___WEBPACK_IMPORTED_MODULE_0__.render,
  _LoginPage_vue_vue_type_template_id_7d53d066___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/ClientApp/Pages/LoginPage.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/ClientApp/Pages/ProfilePage.vue":
/*!******************************************************!*\
  !*** ./resources/js/ClientApp/Pages/ProfilePage.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ProfilePage_vue_vue_type_template_id_39aef526___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProfilePage.vue?vue&type=template&id=39aef526& */ "./resources/js/ClientApp/Pages/ProfilePage.vue?vue&type=template&id=39aef526&");
/* harmony import */ var _ProfilePage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProfilePage.vue?vue&type=script&lang=js& */ "./resources/js/ClientApp/Pages/ProfilePage.vue?vue&type=script&lang=js&");
/* harmony import */ var _ProfilePage_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProfilePage.vue?vue&type=style&index=0&lang=css& */ "./resources/js/ClientApp/Pages/ProfilePage.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ProfilePage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProfilePage_vue_vue_type_template_id_39aef526___WEBPACK_IMPORTED_MODULE_0__.render,
  _ProfilePage_vue_vue_type_template_id_39aef526___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/ClientApp/Pages/ProfilePage.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/ClientApp/Pages/RegisterPage.vue":
/*!*******************************************************!*\
  !*** ./resources/js/ClientApp/Pages/RegisterPage.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _RegisterPage_vue_vue_type_template_id_73ed4174___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RegisterPage.vue?vue&type=template&id=73ed4174& */ "./resources/js/ClientApp/Pages/RegisterPage.vue?vue&type=template&id=73ed4174&");
/* harmony import */ var _RegisterPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RegisterPage.vue?vue&type=script&lang=js& */ "./resources/js/ClientApp/Pages/RegisterPage.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _RegisterPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _RegisterPage_vue_vue_type_template_id_73ed4174___WEBPACK_IMPORTED_MODULE_0__.render,
  _RegisterPage_vue_vue_type_template_id_73ed4174___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/ClientApp/Pages/RegisterPage.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/ClientApp/Pages/SettingsPage.vue":
/*!*******************************************************!*\
  !*** ./resources/js/ClientApp/Pages/SettingsPage.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SettingsPage_vue_vue_type_template_id_80236218___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SettingsPage.vue?vue&type=template&id=80236218& */ "./resources/js/ClientApp/Pages/SettingsPage.vue?vue&type=template&id=80236218&");
/* harmony import */ var _SettingsPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SettingsPage.vue?vue&type=script&lang=js& */ "./resources/js/ClientApp/Pages/SettingsPage.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SettingsPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SettingsPage_vue_vue_type_template_id_80236218___WEBPACK_IMPORTED_MODULE_0__.render,
  _SettingsPage_vue_vue_type_template_id_80236218___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/ClientApp/Pages/SettingsPage.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/ClientApp/Pages/UserBookmarksPage.vue":
/*!************************************************************!*\
  !*** ./resources/js/ClientApp/Pages/UserBookmarksPage.vue ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _UserBookmarksPage_vue_vue_type_template_id_49910722___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserBookmarksPage.vue?vue&type=template&id=49910722& */ "./resources/js/ClientApp/Pages/UserBookmarksPage.vue?vue&type=template&id=49910722&");
/* harmony import */ var _UserBookmarksPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserBookmarksPage.vue?vue&type=script&lang=js& */ "./resources/js/ClientApp/Pages/UserBookmarksPage.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UserBookmarksPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserBookmarksPage_vue_vue_type_template_id_49910722___WEBPACK_IMPORTED_MODULE_0__.render,
  _UserBookmarksPage_vue_vue_type_template_id_49910722___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/ClientApp/Pages/UserBookmarksPage.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/ClientApp/Pages/UserEntitiesPage.vue":
/*!***********************************************************!*\
  !*** ./resources/js/ClientApp/Pages/UserEntitiesPage.vue ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _UserEntitiesPage_vue_vue_type_template_id_1560817d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserEntitiesPage.vue?vue&type=template&id=1560817d& */ "./resources/js/ClientApp/Pages/UserEntitiesPage.vue?vue&type=template&id=1560817d&");
/* harmony import */ var _UserEntitiesPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserEntitiesPage.vue?vue&type=script&lang=js& */ "./resources/js/ClientApp/Pages/UserEntitiesPage.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UserEntitiesPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserEntitiesPage_vue_vue_type_template_id_1560817d___WEBPACK_IMPORTED_MODULE_0__.render,
  _UserEntitiesPage_vue_vue_type_template_id_1560817d___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/ClientApp/Pages/UserEntitiesPage.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/AdminApp/Components/forms/UserDetailsForm.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/AdminApp/Components/forms/UserDetailsForm.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserDetailsForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserDetailsForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/AdminApp/Components/forms/UserDetailsForm.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserDetailsForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/AdminApp/Components/forms/UserPrivacyForm.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/AdminApp/Components/forms/UserPrivacyForm.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserPrivacyForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserPrivacyForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/AdminApp/Components/forms/UserPrivacyForm.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserPrivacyForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/AdminApp/Pages/Categories.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/AdminApp/Pages/Categories.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Categories_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Categories.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/AdminApp/Pages/Categories.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Categories_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/AdminApp/Pages/Materials.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/AdminApp/Pages/Materials.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Materials_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Materials.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/AdminApp/Pages/Materials.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Materials_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/AdminApp/Pages/Processes.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/AdminApp/Pages/Processes.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Processes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Processes.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/AdminApp/Pages/Processes.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Processes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/AdminApp/Pages/Profile.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/AdminApp/Pages/Profile.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Profile.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/AdminApp/Pages/Profile.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/ClientApp/Components/BookmarkIcon.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/ClientApp/Components/BookmarkIcon.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BookmarkIcon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./BookmarkIcon.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/ClientApp/Components/BookmarkIcon.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BookmarkIcon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/ClientApp/Components/EntityCard.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/ClientApp/Components/EntityCard.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EntityCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EntityCard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/ClientApp/Components/EntityCard.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EntityCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/ClientApp/Components/InfiniteScroll.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/ClientApp/Components/InfiniteScroll.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InfiniteScroll_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./InfiniteScroll.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/ClientApp/Components/InfiniteScroll.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InfiniteScroll_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/ClientApp/Components/forms/EntityDetailsForm.vue?vue&type=script&lang=js&":
/*!************************************************************************************************!*\
  !*** ./resources/js/ClientApp/Components/forms/EntityDetailsForm.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EntityDetailsForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EntityDetailsForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/ClientApp/Components/forms/EntityDetailsForm.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EntityDetailsForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/ClientApp/Components/forms/FileInput.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/ClientApp/Components/forms/FileInput.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FileInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FileInput.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/ClientApp/Components/forms/FileInput.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FileInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/ClientApp/Components/forms/LocationPartialForm.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/ClientApp/Components/forms/LocationPartialForm.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LocationPartialForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./LocationPartialForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/ClientApp/Components/forms/LocationPartialForm.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LocationPartialForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/ClientApp/Components/forms/PostCreateForm.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/ClientApp/Components/forms/PostCreateForm.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PostCreateForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PostCreateForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/ClientApp/Components/forms/PostCreateForm.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PostCreateForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/ClientApp/Components/forms/UserDetailsForm.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/ClientApp/Components/forms/UserDetailsForm.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserDetailsForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserDetailsForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/ClientApp/Components/forms/UserDetailsForm.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserDetailsForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/ClientApp/Components/forms/UserPrivacyForm.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/ClientApp/Components/forms/UserPrivacyForm.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserPrivacyForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserPrivacyForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/ClientApp/Components/forms/UserPrivacyForm.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserPrivacyForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/ClientApp/Pages/EntityPage.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/ClientApp/Pages/EntityPage.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EntityPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EntityPage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/ClientApp/Pages/EntityPage.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EntityPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/ClientApp/Pages/ForgotPasswordPage.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/ClientApp/Pages/ForgotPasswordPage.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ForgotPasswordPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ForgotPasswordPage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/ClientApp/Pages/ForgotPasswordPage.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ForgotPasswordPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/ClientApp/Pages/LoginPage.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/ClientApp/Pages/LoginPage.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./LoginPage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/ClientApp/Pages/LoginPage.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/ClientApp/Pages/ProfilePage.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/ClientApp/Pages/ProfilePage.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfilePage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProfilePage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/ClientApp/Pages/ProfilePage.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfilePage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/ClientApp/Pages/RegisterPage.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/ClientApp/Pages/RegisterPage.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RegisterPage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/ClientApp/Pages/RegisterPage.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/ClientApp/Pages/SettingsPage.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/ClientApp/Pages/SettingsPage.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SettingsPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SettingsPage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/ClientApp/Pages/SettingsPage.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SettingsPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/ClientApp/Pages/UserBookmarksPage.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/ClientApp/Pages/UserBookmarksPage.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserBookmarksPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserBookmarksPage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/ClientApp/Pages/UserBookmarksPage.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserBookmarksPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/ClientApp/Pages/UserEntitiesPage.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/ClientApp/Pages/UserEntitiesPage.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserEntitiesPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserEntitiesPage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/ClientApp/Pages/UserEntitiesPage.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserEntitiesPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/ClientApp/Components/forms/FileInput.vue?vue&type=style&index=0&id=6e8eaa68&scoped=true&lang=css&":
/*!************************************************************************************************************************!*\
  !*** ./resources/js/ClientApp/Components/forms/FileInput.vue?vue&type=style&index=0&id=6e8eaa68&scoped=true&lang=css& ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FileInput_vue_vue_type_style_index_0_id_6e8eaa68_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FileInput.vue?vue&type=style&index=0&id=6e8eaa68&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/ClientApp/Components/forms/FileInput.vue?vue&type=style&index=0&id=6e8eaa68&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/ClientApp/Components/forms/LocationPartialForm.vue?vue&type=style&index=0&id=000dc18e&scoped=true&lang=css&":
/*!**********************************************************************************************************************************!*\
  !*** ./resources/js/ClientApp/Components/forms/LocationPartialForm.vue?vue&type=style&index=0&id=000dc18e&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LocationPartialForm_vue_vue_type_style_index_0_id_000dc18e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./LocationPartialForm.vue?vue&type=style&index=0&id=000dc18e&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/ClientApp/Components/forms/LocationPartialForm.vue?vue&type=style&index=0&id=000dc18e&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/ClientApp/Components/forms/PostCreateForm.vue?vue&type=style&index=0&id=16799772&scoped=true&lang=css&":
/*!*****************************************************************************************************************************!*\
  !*** ./resources/js/ClientApp/Components/forms/PostCreateForm.vue?vue&type=style&index=0&id=16799772&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PostCreateForm_vue_vue_type_style_index_0_id_16799772_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PostCreateForm.vue?vue&type=style&index=0&id=16799772&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/ClientApp/Components/forms/PostCreateForm.vue?vue&type=style&index=0&id=16799772&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/ClientApp/Pages/EntityPage.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************!*\
  !*** ./resources/js/ClientApp/Pages/EntityPage.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EntityPage_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EntityPage.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/ClientApp/Pages/EntityPage.vue?vue&type=style&index=0&lang=css&");


/***/ }),

/***/ "./resources/js/ClientApp/Pages/ProfilePage.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************!*\
  !*** ./resources/js/ClientApp/Pages/ProfilePage.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfilePage_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProfilePage.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/ClientApp/Pages/ProfilePage.vue?vue&type=style&index=0&lang=css&");


/***/ }),

/***/ "./resources/js/AdminApp/Components/forms/UserDetailsForm.vue?vue&type=template&id=3430ef31&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/AdminApp/Components/forms/UserDetailsForm.vue?vue&type=template&id=3430ef31& ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserDetailsForm_vue_vue_type_template_id_3430ef31___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserDetailsForm_vue_vue_type_template_id_3430ef31___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserDetailsForm_vue_vue_type_template_id_3430ef31___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserDetailsForm.vue?vue&type=template&id=3430ef31& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/AdminApp/Components/forms/UserDetailsForm.vue?vue&type=template&id=3430ef31&");


/***/ }),

/***/ "./resources/js/AdminApp/Components/forms/UserPrivacyForm.vue?vue&type=template&id=fee30b12&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/AdminApp/Components/forms/UserPrivacyForm.vue?vue&type=template&id=fee30b12& ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserPrivacyForm_vue_vue_type_template_id_fee30b12___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserPrivacyForm_vue_vue_type_template_id_fee30b12___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserPrivacyForm_vue_vue_type_template_id_fee30b12___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserPrivacyForm.vue?vue&type=template&id=fee30b12& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/AdminApp/Components/forms/UserPrivacyForm.vue?vue&type=template&id=fee30b12&");


/***/ }),

/***/ "./resources/js/AdminApp/Pages/Categories.vue?vue&type=template&id=0daa5ef6&":
/*!***********************************************************************************!*\
  !*** ./resources/js/AdminApp/Pages/Categories.vue?vue&type=template&id=0daa5ef6& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Categories_vue_vue_type_template_id_0daa5ef6___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Categories_vue_vue_type_template_id_0daa5ef6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Categories_vue_vue_type_template_id_0daa5ef6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Categories.vue?vue&type=template&id=0daa5ef6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/AdminApp/Pages/Categories.vue?vue&type=template&id=0daa5ef6&");


/***/ }),

/***/ "./resources/js/AdminApp/Pages/Materials.vue?vue&type=template&id=470acf7c&":
/*!**********************************************************************************!*\
  !*** ./resources/js/AdminApp/Pages/Materials.vue?vue&type=template&id=470acf7c& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Materials_vue_vue_type_template_id_470acf7c___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Materials_vue_vue_type_template_id_470acf7c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Materials_vue_vue_type_template_id_470acf7c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Materials.vue?vue&type=template&id=470acf7c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/AdminApp/Pages/Materials.vue?vue&type=template&id=470acf7c&");


/***/ }),

/***/ "./resources/js/AdminApp/Pages/Processes.vue?vue&type=template&id=e554ba1a&":
/*!**********************************************************************************!*\
  !*** ./resources/js/AdminApp/Pages/Processes.vue?vue&type=template&id=e554ba1a& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Processes_vue_vue_type_template_id_e554ba1a___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Processes_vue_vue_type_template_id_e554ba1a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Processes_vue_vue_type_template_id_e554ba1a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Processes.vue?vue&type=template&id=e554ba1a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/AdminApp/Pages/Processes.vue?vue&type=template&id=e554ba1a&");


/***/ }),

/***/ "./resources/js/AdminApp/Pages/Profile.vue?vue&type=template&id=4fd1a2bf&":
/*!********************************************************************************!*\
  !*** ./resources/js/AdminApp/Pages/Profile.vue?vue&type=template&id=4fd1a2bf& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_template_id_4fd1a2bf___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_template_id_4fd1a2bf___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_template_id_4fd1a2bf___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Profile.vue?vue&type=template&id=4fd1a2bf& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/AdminApp/Pages/Profile.vue?vue&type=template&id=4fd1a2bf&");


/***/ }),

/***/ "./resources/js/ClientApp/Components/BookmarkIcon.vue?vue&type=template&id=2d436241&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/ClientApp/Components/BookmarkIcon.vue?vue&type=template&id=2d436241& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BookmarkIcon_vue_vue_type_template_id_2d436241___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BookmarkIcon_vue_vue_type_template_id_2d436241___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BookmarkIcon_vue_vue_type_template_id_2d436241___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./BookmarkIcon.vue?vue&type=template&id=2d436241& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/ClientApp/Components/BookmarkIcon.vue?vue&type=template&id=2d436241&");


/***/ }),

/***/ "./resources/js/ClientApp/Components/EntityCard.vue?vue&type=template&id=290be4f6&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/ClientApp/Components/EntityCard.vue?vue&type=template&id=290be4f6& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EntityCard_vue_vue_type_template_id_290be4f6___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EntityCard_vue_vue_type_template_id_290be4f6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EntityCard_vue_vue_type_template_id_290be4f6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EntityCard.vue?vue&type=template&id=290be4f6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/ClientApp/Components/EntityCard.vue?vue&type=template&id=290be4f6&");


/***/ }),

/***/ "./resources/js/ClientApp/Components/InfiniteScroll.vue?vue&type=template&id=c017441a&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/ClientApp/Components/InfiniteScroll.vue?vue&type=template&id=c017441a& ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InfiniteScroll_vue_vue_type_template_id_c017441a___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InfiniteScroll_vue_vue_type_template_id_c017441a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InfiniteScroll_vue_vue_type_template_id_c017441a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./InfiniteScroll.vue?vue&type=template&id=c017441a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/ClientApp/Components/InfiniteScroll.vue?vue&type=template&id=c017441a&");


/***/ }),

/***/ "./resources/js/ClientApp/Components/forms/EntityDetailsForm.vue?vue&type=template&id=6e50fce1&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/ClientApp/Components/forms/EntityDetailsForm.vue?vue&type=template&id=6e50fce1& ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EntityDetailsForm_vue_vue_type_template_id_6e50fce1___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EntityDetailsForm_vue_vue_type_template_id_6e50fce1___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EntityDetailsForm_vue_vue_type_template_id_6e50fce1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EntityDetailsForm.vue?vue&type=template&id=6e50fce1& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/ClientApp/Components/forms/EntityDetailsForm.vue?vue&type=template&id=6e50fce1&");


/***/ }),

/***/ "./resources/js/ClientApp/Components/forms/FileInput.vue?vue&type=template&id=6e8eaa68&scoped=true&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/ClientApp/Components/forms/FileInput.vue?vue&type=template&id=6e8eaa68&scoped=true& ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FileInput_vue_vue_type_template_id_6e8eaa68_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FileInput_vue_vue_type_template_id_6e8eaa68_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FileInput_vue_vue_type_template_id_6e8eaa68_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FileInput.vue?vue&type=template&id=6e8eaa68&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/ClientApp/Components/forms/FileInput.vue?vue&type=template&id=6e8eaa68&scoped=true&");


/***/ }),

/***/ "./resources/js/ClientApp/Components/forms/LocationPartialForm.vue?vue&type=template&id=000dc18e&scoped=true&":
/*!********************************************************************************************************************!*\
  !*** ./resources/js/ClientApp/Components/forms/LocationPartialForm.vue?vue&type=template&id=000dc18e&scoped=true& ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LocationPartialForm_vue_vue_type_template_id_000dc18e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LocationPartialForm_vue_vue_type_template_id_000dc18e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LocationPartialForm_vue_vue_type_template_id_000dc18e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./LocationPartialForm.vue?vue&type=template&id=000dc18e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/ClientApp/Components/forms/LocationPartialForm.vue?vue&type=template&id=000dc18e&scoped=true&");


/***/ }),

/***/ "./resources/js/ClientApp/Components/forms/PostCreateForm.vue?vue&type=template&id=16799772&scoped=true&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/ClientApp/Components/forms/PostCreateForm.vue?vue&type=template&id=16799772&scoped=true& ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PostCreateForm_vue_vue_type_template_id_16799772_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PostCreateForm_vue_vue_type_template_id_16799772_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PostCreateForm_vue_vue_type_template_id_16799772_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PostCreateForm.vue?vue&type=template&id=16799772&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/ClientApp/Components/forms/PostCreateForm.vue?vue&type=template&id=16799772&scoped=true&");


/***/ }),

/***/ "./resources/js/ClientApp/Components/forms/UserDetailsForm.vue?vue&type=template&id=bf025d0e&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/ClientApp/Components/forms/UserDetailsForm.vue?vue&type=template&id=bf025d0e& ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserDetailsForm_vue_vue_type_template_id_bf025d0e___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserDetailsForm_vue_vue_type_template_id_bf025d0e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserDetailsForm_vue_vue_type_template_id_bf025d0e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserDetailsForm.vue?vue&type=template&id=bf025d0e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/ClientApp/Components/forms/UserDetailsForm.vue?vue&type=template&id=bf025d0e&");


/***/ }),

/***/ "./resources/js/ClientApp/Components/forms/UserPrivacyForm.vue?vue&type=template&id=26474682&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/ClientApp/Components/forms/UserPrivacyForm.vue?vue&type=template&id=26474682& ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserPrivacyForm_vue_vue_type_template_id_26474682___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserPrivacyForm_vue_vue_type_template_id_26474682___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserPrivacyForm_vue_vue_type_template_id_26474682___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserPrivacyForm.vue?vue&type=template&id=26474682& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/ClientApp/Components/forms/UserPrivacyForm.vue?vue&type=template&id=26474682&");


/***/ }),

/***/ "./resources/js/ClientApp/Pages/EntityPage.vue?vue&type=template&id=5d859d98&":
/*!************************************************************************************!*\
  !*** ./resources/js/ClientApp/Pages/EntityPage.vue?vue&type=template&id=5d859d98& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EntityPage_vue_vue_type_template_id_5d859d98___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EntityPage_vue_vue_type_template_id_5d859d98___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EntityPage_vue_vue_type_template_id_5d859d98___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EntityPage.vue?vue&type=template&id=5d859d98& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/ClientApp/Pages/EntityPage.vue?vue&type=template&id=5d859d98&");


/***/ }),

/***/ "./resources/js/ClientApp/Pages/ForgotPasswordPage.vue?vue&type=template&id=7ecfb1a2&":
/*!********************************************************************************************!*\
  !*** ./resources/js/ClientApp/Pages/ForgotPasswordPage.vue?vue&type=template&id=7ecfb1a2& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ForgotPasswordPage_vue_vue_type_template_id_7ecfb1a2___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ForgotPasswordPage_vue_vue_type_template_id_7ecfb1a2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ForgotPasswordPage_vue_vue_type_template_id_7ecfb1a2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ForgotPasswordPage.vue?vue&type=template&id=7ecfb1a2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/ClientApp/Pages/ForgotPasswordPage.vue?vue&type=template&id=7ecfb1a2&");


/***/ }),

/***/ "./resources/js/ClientApp/Pages/LoginPage.vue?vue&type=template&id=7d53d066&":
/*!***********************************************************************************!*\
  !*** ./resources/js/ClientApp/Pages/LoginPage.vue?vue&type=template&id=7d53d066& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginPage_vue_vue_type_template_id_7d53d066___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginPage_vue_vue_type_template_id_7d53d066___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginPage_vue_vue_type_template_id_7d53d066___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./LoginPage.vue?vue&type=template&id=7d53d066& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/ClientApp/Pages/LoginPage.vue?vue&type=template&id=7d53d066&");


/***/ }),

/***/ "./resources/js/ClientApp/Pages/ProfilePage.vue?vue&type=template&id=39aef526&":
/*!*************************************************************************************!*\
  !*** ./resources/js/ClientApp/Pages/ProfilePage.vue?vue&type=template&id=39aef526& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfilePage_vue_vue_type_template_id_39aef526___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfilePage_vue_vue_type_template_id_39aef526___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfilePage_vue_vue_type_template_id_39aef526___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProfilePage.vue?vue&type=template&id=39aef526& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/ClientApp/Pages/ProfilePage.vue?vue&type=template&id=39aef526&");


/***/ }),

/***/ "./resources/js/ClientApp/Pages/RegisterPage.vue?vue&type=template&id=73ed4174&":
/*!**************************************************************************************!*\
  !*** ./resources/js/ClientApp/Pages/RegisterPage.vue?vue&type=template&id=73ed4174& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterPage_vue_vue_type_template_id_73ed4174___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterPage_vue_vue_type_template_id_73ed4174___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterPage_vue_vue_type_template_id_73ed4174___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RegisterPage.vue?vue&type=template&id=73ed4174& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/ClientApp/Pages/RegisterPage.vue?vue&type=template&id=73ed4174&");


/***/ }),

/***/ "./resources/js/ClientApp/Pages/SettingsPage.vue?vue&type=template&id=80236218&":
/*!**************************************************************************************!*\
  !*** ./resources/js/ClientApp/Pages/SettingsPage.vue?vue&type=template&id=80236218& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SettingsPage_vue_vue_type_template_id_80236218___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SettingsPage_vue_vue_type_template_id_80236218___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SettingsPage_vue_vue_type_template_id_80236218___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SettingsPage.vue?vue&type=template&id=80236218& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/ClientApp/Pages/SettingsPage.vue?vue&type=template&id=80236218&");


/***/ }),

/***/ "./resources/js/ClientApp/Pages/UserBookmarksPage.vue?vue&type=template&id=49910722&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/ClientApp/Pages/UserBookmarksPage.vue?vue&type=template&id=49910722& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserBookmarksPage_vue_vue_type_template_id_49910722___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserBookmarksPage_vue_vue_type_template_id_49910722___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserBookmarksPage_vue_vue_type_template_id_49910722___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserBookmarksPage.vue?vue&type=template&id=49910722& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/ClientApp/Pages/UserBookmarksPage.vue?vue&type=template&id=49910722&");


/***/ }),

/***/ "./resources/js/ClientApp/Pages/UserEntitiesPage.vue?vue&type=template&id=1560817d&":
/*!******************************************************************************************!*\
  !*** ./resources/js/ClientApp/Pages/UserEntitiesPage.vue?vue&type=template&id=1560817d& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserEntitiesPage_vue_vue_type_template_id_1560817d___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserEntitiesPage_vue_vue_type_template_id_1560817d___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserEntitiesPage_vue_vue_type_template_id_1560817d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserEntitiesPage.vue?vue&type=template&id=1560817d& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/ClientApp/Pages/UserEntitiesPage.vue?vue&type=template&id=1560817d&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/AdminApp/Components/forms/UserDetailsForm.vue?vue&type=template&id=3430ef31&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/AdminApp/Components/forms/UserDetailsForm.vue?vue&type=template&id=3430ef31& ***!
  \******************************************************************************************************************************************************************************************************************************************/
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
    "div",
    {},
    [
      _c(
        "b-card",
        {
          attrs: {
            title: "User details",
            "header-tag": "header",
            "footer-tag": "footer",
          },
          scopedSlots: _vm._u([
            {
              key: "header",
              fn: function () {
                return [_c("h6", { staticClass: "mb-0" }, [_vm._v("Profile")])]
              },
              proxy: true,
            },
            {
              key: "footer",
              fn: function () {
                return [_c("em", [_vm._v("Remember to save your changes")])]
              },
              proxy: true,
            },
          ]),
        },
        [
          _vm._v(" "),
          _c(
            "b-card-text",
            [
              _vm.show
                ? _c(
                    "b-form",
                    { on: { submit: _vm.onSubmit, reset: _vm.onReset } },
                    [
                      _c(
                        "b-input-group",
                        { staticClass: "mb-2", attrs: { size: "lg" } },
                        [
                          _c(
                            "b-input-group-prepend",
                            { attrs: { "is-text": "" } },
                            [_c("b-icon", { attrs: { icon: "envelope" } })],
                            1
                          ),
                          _vm._v(" "),
                          _c("b-form-input", {
                            attrs: {
                              disabled: !_vm.edit,
                              type: "email",
                              placeholder: "email",
                            },
                            model: {
                              value: _vm.form.email,
                              callback: function ($$v) {
                                _vm.$set(_vm.form, "email", $$v)
                              },
                              expression: "form.email",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("p", {
                        staticClass: "text-danger",
                        domProps: { textContent: _vm._s(_vm.errors.email) },
                      }),
                      _vm._v(" "),
                      _c(
                        "b-input-group",
                        { staticClass: "mb-2", attrs: { size: "lg" } },
                        [
                          _c(
                            "b-input-group-prepend",
                            { attrs: { "is-text": "" } },
                            [_c("b-icon", { attrs: { icon: "person-fill" } })],
                            1
                          ),
                          _vm._v(" "),
                          _c("b-form-input", {
                            attrs: {
                              disabled: !_vm.edit,
                              type: "text",
                              placeholder: "User name",
                            },
                            model: {
                              value: _vm.form.name,
                              callback: function ($$v) {
                                _vm.$set(_vm.form, "name", $$v)
                              },
                              expression: "form.name",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("p", {
                        staticClass: "text-danger",
                        domProps: { textContent: _vm._s(_vm.errors.name) },
                      }),
                      _vm._v(" "),
                      _vm.edit
                        ? _c(
                            "div",
                            [
                              _c(
                                "b-overlay",
                                {
                                  staticClass: "d-inline-block",
                                  attrs: {
                                    show: _vm.busy,
                                    rounded: "",
                                    opacity: "0.6",
                                    "spinner-small": "",
                                    "spinner-variant": "primary",
                                  },
                                },
                                [
                                  _c(
                                    "b-button",
                                    {
                                      attrs: {
                                        type: "submit",
                                        variant: "primary",
                                      },
                                    },
                                    [_vm._v("Submit")]
                                  ),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                { attrs: { type: "reset", variant: "danger" } },
                                [_vm._v("Reset")]
                              ),
                            ],
                            1
                          )
                        : _vm._e(),
                    ],
                    1
                  )
                : _vm._e(),
            ],
            1
          ),
          _vm._v(" "),
          !_vm.edit
            ? _c(
                "b-input-group",
                { staticClass: "mb-2", attrs: { size: "lg" } },
                [
                  _c(
                    "b-button",
                    {
                      attrs: { type: "submit", variant: "primary" },
                      on: {
                        click: function ($event) {
                          _vm.edit = !_vm.edit
                        },
                      },
                    },
                    [
                      _c("b-icon", {
                        attrs: { icon: "pencil", "aria-label": "Help" },
                      }),
                    ],
                    1
                  ),
                ],
                1
              )
            : _vm._e(),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/AdminApp/Components/forms/UserPrivacyForm.vue?vue&type=template&id=fee30b12&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/AdminApp/Components/forms/UserPrivacyForm.vue?vue&type=template&id=fee30b12& ***!
  \******************************************************************************************************************************************************************************************************************************************/
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
    "div",
    {},
    [
      _c(
        "b-card",
        {
          attrs: { title: "", "header-tag": "header" },
          scopedSlots: _vm._u([
            {
              key: "header",
              fn: function () {
                return [_c("h6", { staticClass: "mb-0" }, [_vm._v("Privacy")])]
              },
              proxy: true,
            },
          ]),
        },
        [
          _vm._v(" "),
          _c("h4", [_vm._v("Password")]),
          _vm._v(" "),
          _c(
            "div",
            [
              _vm.show
                ? _c(
                    "b-form",
                    { on: { submit: _vm.onSubmit, reset: _vm.onReset } },
                    [
                      !_vm.edit
                        ? _c(
                            "b-input-group",
                            { staticClass: "mb-2", attrs: { size: "lg" } },
                            [
                              _c(
                                "b-button",
                                {
                                  attrs: { type: "submit", variant: "primary" },
                                  on: {
                                    click: function ($event) {
                                      _vm.edit = !_vm.edit
                                    },
                                  },
                                },
                                [
                                  _c("b-icon", {
                                    attrs: {
                                      icon: "pencil",
                                      "aria-label": "Help",
                                    },
                                  }),
                                ],
                                1
                              ),
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.edit
                        ? _c(
                            "div",
                            [
                              _c(
                                "b-input-group",
                                { staticClass: "mb-2", attrs: { size: "lg" } },
                                [
                                  _c(
                                    "b-input-group-prepend",
                                    { attrs: { "is-text": "" } },
                                    [
                                      _c("b-icon", {
                                        attrs: { icon: "eye-slash" },
                                      }),
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c("b-form-input", {
                                    attrs: {
                                      type: "password",
                                      placeholder: "old password",
                                    },
                                    model: {
                                      value: _vm.form.oldPassword,
                                      callback: function ($$v) {
                                        _vm.$set(_vm.form, "oldPassword", $$v)
                                      },
                                      expression: "form.oldPassword",
                                    },
                                  }),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "b-input-group",
                                { staticClass: "mb-2", attrs: { size: "lg" } },
                                [
                                  _c(
                                    "b-input-group-prepend",
                                    { attrs: { "is-text": "" } },
                                    [
                                      _c("b-icon", {
                                        attrs: { icon: "eye-slash-fill" },
                                      }),
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c("b-form-input", {
                                    attrs: {
                                      type: "password",
                                      placeholder: "new password",
                                    },
                                    model: {
                                      value: _vm.form.password,
                                      callback: function ($$v) {
                                        _vm.$set(_vm.form, "password", $$v)
                                      },
                                      expression: "form.password",
                                    },
                                  }),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "b-input-group",
                                { staticClass: "mb-2", attrs: { size: "lg" } },
                                [
                                  _c(
                                    "b-input-group-prepend",
                                    { attrs: { "is-text": "" } },
                                    [
                                      _c("b-icon", {
                                        attrs: { icon: "eye-slash-fill" },
                                      }),
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c("b-form-input", {
                                    attrs: {
                                      type: "password",
                                      placeholder: "new password confirm",
                                    },
                                    model: {
                                      value: _vm.form.passwordConfirm,
                                      callback: function ($$v) {
                                        _vm.$set(
                                          _vm.form,
                                          "passwordConfirm",
                                          $$v
                                        )
                                      },
                                      expression: "form.passwordConfirm",
                                    },
                                  }),
                                ],
                                1
                              ),
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.edit
                        ? _c(
                            "div",
                            [
                              _c(
                                "b-overlay",
                                {
                                  staticClass: "d-inline-block",
                                  attrs: {
                                    show: _vm.busy,
                                    rounded: "",
                                    opacity: "0.6",
                                    "spinner-small": "",
                                    "spinner-variant": "primary",
                                  },
                                },
                                [
                                  _c(
                                    "b-button",
                                    {
                                      attrs: {
                                        type: "submit",
                                        variant: "primary",
                                      },
                                    },
                                    [_vm._v("Submit")]
                                  ),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                { attrs: { type: "reset", variant: "danger" } },
                                [_vm._v("Reset")]
                              ),
                            ],
                            1
                          )
                        : _vm._e(),
                    ],
                    1
                  )
                : _vm._e(),
            ],
            1
          ),
        ]
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/AdminApp/Pages/Categories.vue?vue&type=template&id=0daa5ef6&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/AdminApp/Pages/Categories.vue?vue&type=template&id=0daa5ef6& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
    "div",
    { staticClass: "about" },
    [
      _c("h2", [_vm._v("Categories")]),
      _vm._v(" "),
      _vm.mainData.categories
        ? _c(
            "v-card",
            { staticClass: "mx-auto" },
            [
              _c(
                "v-sheet",
                { staticClass: "pa-4 primary lighten-2" },
                [
                  _c("v-text-field", {
                    attrs: {
                      label: "Search Category",
                      dark: "",
                      flat: "",
                      "solo-inverted": "",
                      "hide-details": "",
                      clearable: "",
                      "clear-icon": "mdi-close-circle-outline",
                    },
                    model: {
                      value: _vm.search,
                      callback: function ($$v) {
                        _vm.search = $$v
                      },
                      expression: "search",
                    },
                  }),
                  _vm._v(" "),
                  _c("v-checkbox", {
                    attrs: {
                      dark: "",
                      "hide-details": "",
                      label: "Case sensitive search",
                    },
                    model: {
                      value: _vm.caseSensitive,
                      callback: function ($$v) {
                        _vm.caseSensitive = $$v
                      },
                      expression: "caseSensitive",
                    },
                  }),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-card-text",
                [
                  _c("v-treeview", {
                    attrs: {
                      "selection-type": "independent",
                      selectable: "",
                      "return-object": "",
                      items: _vm.mainData.categories,
                      search: _vm.search,
                      filter: _vm.filter,
                      open: _vm.open,
                    },
                    on: {
                      input: _vm.removeLastSelect,
                      "update:open": function ($event) {
                        _vm.open = $event
                      },
                    },
                    scopedSlots: _vm._u(
                      [
                        {
                          key: "append",
                          fn: function (ref) {
                            var item = ref.item
                            return [
                              _vm.imSelected(item.id)
                                ? _c(
                                    "div",
                                    [
                                      _c(
                                        "v-icon",
                                        {
                                          attrs: { color: "blue darken-2" },
                                          on: {
                                            click: function ($event) {
                                              return _vm.setMode("edit")
                                            },
                                          },
                                        },
                                        [
                                          _vm._v(
                                            "\n                            mdi-pencil\n                        "
                                          ),
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-icon",
                                        {
                                          attrs: { color: "green darken-2" },
                                          on: {
                                            click: function ($event) {
                                              return _vm.setMode("addChild")
                                            },
                                          },
                                        },
                                        [
                                          _vm._v(
                                            "\n                            mdi-plus\n                        "
                                          ),
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-icon",
                                        { attrs: { color: "red darken-2" } },
                                        [_vm._v(" mdi-minus ")]
                                      ),
                                    ],
                                    1
                                  )
                                : _vm._e(),
                            ]
                          },
                        },
                      ],
                      null,
                      false,
                      1026809025
                    ),
                    model: {
                      value: _vm.selections,
                      callback: function ($$v) {
                        _vm.selections = $$v
                      },
                      expression: "selections",
                    },
                  }),
                ],
                1
              ),
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "mt-4" },
        [
          !_vm.selections[0]
            ? _c(
                "v-btn",
                {
                  attrs: { color: "primary" },
                  on: {
                    click: function ($event) {
                      return _vm.setMode("addParent")
                    },
                  },
                },
                [_vm._v("\n            NEW PARENT\n        ")]
              )
            : _vm._e(),
          _vm._v(" "),
          _vm._v(
            "\n        " +
              _vm._s(_vm.form) +
              "\n        " +
              _vm._s(_vm.formChild) +
              "\n        "
          ),
          _c("h4", [
            _vm._v("Mode: " + _vm._s(_vm.mode ? _vm.mode.toUpperCase() : "")),
          ]),
          _vm._v(" "),
          _c(
            "v-alert",
            {
              attrs: {
                value: _vm.alert,
                dark: "",
                border: "top",
                icon: "mdi-home",
                transition: "scale-transition",
              },
            },
            [
              _c(
                "div",
                [
                  _c(
                    "v-form",
                    {
                      ref: "form",
                      attrs: { "lazy-validation": "" },
                      on: {
                        submit: function ($event) {
                          $event.preventDefault()
                          return _vm.onSubmit.apply(null, arguments)
                        },
                      },
                      model: {
                        value: _vm.valid,
                        callback: function ($$v) {
                          _vm.valid = $$v
                        },
                        expression: "valid",
                      },
                    },
                    [
                      _c("v-text-field", {
                        attrs: {
                          disabled: !_vm.mode || _vm.mode == "addChild",
                          counter: 10,
                          rules: _vm.nameRules,
                          label: "Name",
                          required: "",
                        },
                        model: {
                          value: _vm.form.name,
                          callback: function ($$v) {
                            _vm.$set(_vm.form, "name", $$v)
                          },
                          expression: "form.name",
                        },
                      }),
                      _vm._v(" "),
                      _vm.mode == "addChild"
                        ? _c("v-text-field", {
                            attrs: {
                              rules: _vm.nameRules,
                              counter: 10,
                              label: "Child name",
                              required: "",
                            },
                            model: {
                              value: _vm.formChild.name,
                              callback: function ($$v) {
                                _vm.$set(_vm.formChild, "name", $$v)
                              },
                              expression: "formChild.name",
                            },
                          })
                        : _vm._e(),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          attrs: { color: "warning" },
                          on: { click: _vm.resetValidation },
                        },
                        [
                          _vm._v(
                            "\n                        Reset Validation\n                    "
                          ),
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        { attrs: { color: "primary", type: "submit" } },
                        [_vm._v(" Submit ")]
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
            ]
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



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/AdminApp/Pages/Materials.vue?vue&type=template&id=470acf7c&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/AdminApp/Pages/Materials.vue?vue&type=template&id=470acf7c& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
    "div",
    { staticClass: "about" },
    [
      _c("h2", [_vm._v("Materiales")]),
      _vm._v(" "),
      _vm.mainData.materials
        ? _c(
            "v-card",
            { staticClass: "mx-auto" },
            [
              _c(
                "v-sheet",
                { staticClass: "pa-4 primary lighten-2" },
                [
                  _c("v-text-field", {
                    attrs: {
                      label: "Search Material",
                      dark: "",
                      flat: "",
                      "solo-inverted": "",
                      "hide-details": "",
                      clearable: "",
                      "clear-icon": "mdi-close-circle-outline",
                    },
                    model: {
                      value: _vm.search,
                      callback: function ($$v) {
                        _vm.search = $$v
                      },
                      expression: "search",
                    },
                  }),
                  _vm._v(" "),
                  _c("v-checkbox", {
                    attrs: {
                      dark: "",
                      "hide-details": "",
                      label: "Case sensitive search",
                    },
                    model: {
                      value: _vm.caseSensitive,
                      callback: function ($$v) {
                        _vm.caseSensitive = $$v
                      },
                      expression: "caseSensitive",
                    },
                  }),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-card-text",
                [
                  _c("v-treeview", {
                    attrs: {
                      "selection-type": "independent",
                      selectable: "",
                      "return-object": "",
                      items: _vm.mainData.materials,
                      search: _vm.search,
                      filter: _vm.filter,
                      open: _vm.open,
                    },
                    on: {
                      input: _vm.removeLastSelect,
                      "update:open": function ($event) {
                        _vm.open = $event
                      },
                    },
                    scopedSlots: _vm._u(
                      [
                        {
                          key: "append",
                          fn: function (ref) {
                            var item = ref.item
                            return [
                              _vm.imSelected(item.id)
                                ? _c(
                                    "div",
                                    [
                                      _c(
                                        "v-icon",
                                        {
                                          attrs: { color: "blue darken-2" },
                                          on: {
                                            click: function ($event) {
                                              return _vm.setMode("edit")
                                            },
                                          },
                                        },
                                        [
                                          _vm._v(
                                            "\n                            mdi-pencil\n                        "
                                          ),
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-icon",
                                        {
                                          attrs: { color: "green darken-2" },
                                          on: {
                                            click: function ($event) {
                                              return _vm.setMode("addChild")
                                            },
                                          },
                                        },
                                        [
                                          _vm._v(
                                            "\n                            mdi-plus\n                        "
                                          ),
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-icon",
                                        { attrs: { color: "red darken-2" } },
                                        [_vm._v(" mdi-minus ")]
                                      ),
                                    ],
                                    1
                                  )
                                : _vm._e(),
                            ]
                          },
                        },
                      ],
                      null,
                      false,
                      1026809025
                    ),
                    model: {
                      value: _vm.selections,
                      callback: function ($$v) {
                        _vm.selections = $$v
                      },
                      expression: "selections",
                    },
                  }),
                ],
                1
              ),
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "mt-4" },
        [
          !_vm.selections[0]
            ? _c(
                "v-btn",
                {
                  attrs: { color: "primary" },
                  on: {
                    click: function ($event) {
                      return _vm.setMode("addParent")
                    },
                  },
                },
                [_vm._v("\n            NEW PARENT\n        ")]
              )
            : _vm._e(),
          _vm._v(" "),
          _vm._v(
            "\n        " +
              _vm._s(_vm.form) +
              "\n        " +
              _vm._s(_vm.formChild) +
              "\n        "
          ),
          _c("h4", [
            _vm._v("Mode: " + _vm._s(_vm.mode ? _vm.mode.toUpperCase() : "")),
          ]),
          _vm._v(" "),
          _c(
            "v-alert",
            {
              attrs: {
                value: _vm.alert,
                dark: "",
                border: "top",
                icon: "mdi-home",
                transition: "scale-transition",
              },
            },
            [
              _c(
                "div",
                [
                  _c(
                    "v-form",
                    {
                      ref: "form",
                      attrs: { "lazy-validation": "" },
                      on: {
                        submit: function ($event) {
                          $event.preventDefault()
                          return _vm.onSubmit.apply(null, arguments)
                        },
                      },
                      model: {
                        value: _vm.valid,
                        callback: function ($$v) {
                          _vm.valid = $$v
                        },
                        expression: "valid",
                      },
                    },
                    [
                      _c("v-text-field", {
                        attrs: {
                          disabled: !_vm.mode || _vm.mode == "addChild",
                          counter: 10,
                          rules: _vm.nameRules,
                          label: "Name",
                          required: "",
                        },
                        model: {
                          value: _vm.form.name,
                          callback: function ($$v) {
                            _vm.$set(_vm.form, "name", $$v)
                          },
                          expression: "form.name",
                        },
                      }),
                      _vm._v(" "),
                      _vm.mode == "addChild"
                        ? _c("v-text-field", {
                            attrs: {
                              rules: _vm.nameRules,
                              counter: 10,
                              label: "Child name",
                              required: "",
                            },
                            model: {
                              value: _vm.formChild.name,
                              callback: function ($$v) {
                                _vm.$set(_vm.formChild, "name", $$v)
                              },
                              expression: "formChild.name",
                            },
                          })
                        : _vm._e(),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          attrs: { color: "warning" },
                          on: { click: _vm.resetValidation },
                        },
                        [
                          _vm._v(
                            "\n                        Reset Validation\n                    "
                          ),
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        { attrs: { color: "primary", type: "submit" } },
                        [_vm._v(" Submit ")]
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
            ]
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



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/AdminApp/Pages/Processes.vue?vue&type=template&id=e554ba1a&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/AdminApp/Pages/Processes.vue?vue&type=template&id=e554ba1a& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
    "div",
    { staticClass: "about" },
    [
      _c("h2", [_vm._v("Processes")]),
      _vm._v(" "),
      _vm.mainData.processes
        ? _c(
            "v-card",
            { staticClass: "mx-auto" },
            [
              _c(
                "v-sheet",
                { staticClass: "pa-4 primary lighten-2" },
                [
                  _c("v-text-field", {
                    attrs: {
                      label: "Search Process",
                      dark: "",
                      flat: "",
                      "solo-inverted": "",
                      "hide-details": "",
                      clearable: "",
                      "clear-icon": "mdi-close-circle-outline",
                    },
                    model: {
                      value: _vm.search,
                      callback: function ($$v) {
                        _vm.search = $$v
                      },
                      expression: "search",
                    },
                  }),
                  _vm._v(" "),
                  _c("v-checkbox", {
                    attrs: {
                      dark: "",
                      "hide-details": "",
                      label: "Case sensitive search",
                    },
                    model: {
                      value: _vm.caseSensitive,
                      callback: function ($$v) {
                        _vm.caseSensitive = $$v
                      },
                      expression: "caseSensitive",
                    },
                  }),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-card-text",
                [
                  _c("v-treeview", {
                    attrs: {
                      "selection-type": "independent",
                      selectable: "",
                      "return-object": "",
                      items: _vm.mainData.processes,
                      search: _vm.search,
                      filter: _vm.filter,
                      open: _vm.open,
                    },
                    on: {
                      input: _vm.removeLastSelect,
                      "update:open": function ($event) {
                        _vm.open = $event
                      },
                    },
                    scopedSlots: _vm._u(
                      [
                        {
                          key: "append",
                          fn: function (ref) {
                            var item = ref.item
                            return [
                              _vm.imSelected(item.id)
                                ? _c(
                                    "div",
                                    [
                                      _c(
                                        "v-icon",
                                        {
                                          attrs: { color: "blue darken-2" },
                                          on: {
                                            click: function ($event) {
                                              return _vm.setMode("edit")
                                            },
                                          },
                                        },
                                        [
                                          _vm._v(
                                            "\n                            mdi-pencil\n                        "
                                          ),
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-icon",
                                        {
                                          attrs: { color: "green darken-2" },
                                          on: {
                                            click: function ($event) {
                                              return _vm.setMode("addChild")
                                            },
                                          },
                                        },
                                        [
                                          _vm._v(
                                            "\n                            mdi-plus\n                        "
                                          ),
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-icon",
                                        { attrs: { color: "red darken-2" } },
                                        [_vm._v(" mdi-minus ")]
                                      ),
                                    ],
                                    1
                                  )
                                : _vm._e(),
                            ]
                          },
                        },
                      ],
                      null,
                      false,
                      1026809025
                    ),
                    model: {
                      value: _vm.selections,
                      callback: function ($$v) {
                        _vm.selections = $$v
                      },
                      expression: "selections",
                    },
                  }),
                ],
                1
              ),
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "mt-4" },
        [
          !_vm.selections[0]
            ? _c(
                "v-btn",
                {
                  attrs: { color: "primary" },
                  on: {
                    click: function ($event) {
                      return _vm.setMode("addParent")
                    },
                  },
                },
                [_vm._v("\n            NEW PARENT\n        ")]
              )
            : _vm._e(),
          _vm._v(" "),
          _vm._v(
            "\n        " +
              _vm._s(_vm.form) +
              "\n        " +
              _vm._s(_vm.formChild) +
              "\n        "
          ),
          _c("h4", [
            _vm._v("Mode: " + _vm._s(_vm.mode ? _vm.mode.toUpperCase() : "")),
          ]),
          _vm._v(" "),
          _c(
            "v-alert",
            {
              attrs: {
                value: _vm.alert,
                dark: "",
                border: "top",
                icon: "mdi-home",
                transition: "scale-transition",
              },
            },
            [
              _c(
                "div",
                [
                  _c(
                    "v-form",
                    {
                      ref: "form",
                      attrs: { "lazy-validation": "" },
                      on: {
                        submit: function ($event) {
                          $event.preventDefault()
                          return _vm.onSubmit.apply(null, arguments)
                        },
                      },
                      model: {
                        value: _vm.valid,
                        callback: function ($$v) {
                          _vm.valid = $$v
                        },
                        expression: "valid",
                      },
                    },
                    [
                      _c("v-text-field", {
                        attrs: {
                          disabled: !_vm.mode || _vm.mode == "addChild",
                          counter: 10,
                          rules: _vm.nameRules,
                          label: "Name",
                          required: "",
                        },
                        model: {
                          value: _vm.form.name,
                          callback: function ($$v) {
                            _vm.$set(_vm.form, "name", $$v)
                          },
                          expression: "form.name",
                        },
                      }),
                      _vm._v(" "),
                      _vm.mode == "addChild"
                        ? _c("v-text-field", {
                            attrs: {
                              rules: _vm.nameRules,
                              counter: 10,
                              label: "Child name",
                              required: "",
                            },
                            model: {
                              value: _vm.formChild.name,
                              callback: function ($$v) {
                                _vm.$set(_vm.formChild, "name", $$v)
                              },
                              expression: "formChild.name",
                            },
                          })
                        : _vm._e(),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          attrs: { color: "warning" },
                          on: { click: _vm.resetValidation },
                        },
                        [
                          _vm._v(
                            "\n                        Reset Validation\n                    "
                          ),
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        { attrs: { color: "primary", type: "submit" } },
                        [_vm._v(" Submit ")]
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
            ]
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



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/AdminApp/Pages/Profile.vue?vue&type=template&id=4fd1a2bf&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/AdminApp/Pages/Profile.vue?vue&type=template&id=4fd1a2bf& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
    "div",
    {},
    [
      _c("UserDetailsForm"),
      _vm._v(" "),
      _c("hr"),
      _vm._v(" "),
      _c("UserPrivacyForm"),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/ClientApp/Components/BookmarkIcon.vue?vue&type=template&id=2d436241&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/ClientApp/Components/BookmarkIcon.vue?vue&type=template&id=2d436241& ***!
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
    "div",
    [
      !_vm.bookmarked
        ? _c(
            "b-button",
            {
              staticClass: "mb-2",
              attrs: { size: "sm", variant: "outline-secondary" },
              on: {
                click: function ($event) {
                  return _vm.$emit("bookmark")
                },
              },
            },
            [
              _c("b-icon", {
                attrs: { icon: "bookmark", "aria-label": "Help" },
              }),
            ],
            1
          )
        : _c(
            "b-button",
            {
              staticClass: "mb-2",
              attrs: { size: "sm", variant: "secondary" },
              on: {
                click: function ($event) {
                  return _vm.$emit("bookmark")
                },
              },
            },
            [
              _c("b-icon", {
                attrs: { icon: "bookmark", "aria-label": "Help" },
              }),
            ],
            1
          ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/ClientApp/Components/EntityCard.vue?vue&type=template&id=290be4f6&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/ClientApp/Components/EntityCard.vue?vue&type=template&id=290be4f6& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
    "div",
    [
      _c(
        "b-card",
        {
          staticClass: "mb-2",
          attrs: {
            title: _vm.entity.username,
            "img-src": _vm.entity.background_photo_path
              ? _vm.entity.background_photo_path_full_url
              : "http://127.0.0.1:8000/storage/media/defaultCover.webp",
            "img-alt": "Image",
            "img-top": "",
            tag: "article",
          },
        },
        [
          _c(
            "b-card-text",
            [
              _c("h6", [_vm._v("Name:")]),
              _vm._v(" "),
              _c("p", [_vm._v(_vm._s(_vm.entity.name))]),
              _vm._v(" "),
              _c("h6", [_vm._v("Description:")]),
              _vm._v(" "),
              _c("p", [_vm._v(_vm._s(_vm.entity.description))]),
              _vm._v(" "),
              _vm.entity.location ? _c("h6", [_vm._v("Location:")]) : _vm._e(),
              _vm._v(" "),
              _vm.entity.location
                ? _c("p", [
                    _vm._v(
                      "\n                " +
                        _vm._s(_vm.entity.location.city) +
                        " " +
                        _vm._s(_vm.entity.location.state) +
                        "\n            "
                    ),
                  ])
                : _vm._e(),
              _vm._v(" "),
              _c("h6", [_vm._v("Categories:")]),
              _vm._v(" "),
              _vm._l(_vm.entity.categories, function (cat, i) {
                return _c(
                  "span",
                  { key: i, staticClass: "text-muted mr-2 mb-2" },
                  [
                    _vm._v(
                      "\n                " + _vm._s(cat.name) + "\n            "
                    ),
                  ]
                )
              }),
            ],
            2
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass:
                "d-flex justify-content-between align-items-baseline",
            },
            [
              _c(
                "b-button",
                {
                  attrs: {
                    href: "#",
                    variant: "primary",
                    to: "/entity/" + _vm.entity.username,
                  },
                },
                [_vm._v("Go to entity")]
              ),
              _vm._v(" "),
              _c("BookmarkIcon", {
                attrs: { bookmarked: _vm.entity.bookmarked },
                on: { bookmark: _vm.bookmarkEntity },
              }),
              _vm._v(" "),
              _vm._v(
                "\n\n            " +
                  _vm._s(_vm.entity.bookmarks_count) +
                  "\n        "
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



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/ClientApp/Components/InfiniteScroll.vue?vue&type=template&id=c017441a&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/ClientApp/Components/InfiniteScroll.vue?vue&type=template&id=c017441a& ***!
  \************************************************************************************************************************************************************************************************************************************/
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
    "div",
    [
      _vm._t("default"),
      _vm._v(" "),
      _vm.loading
        ? _c("div", { staticClass: "p-4 text-center text-gray-600" }, [
            _vm._v("\n        Loading More...\n    "),
          ])
        : _vm._e(),
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/ClientApp/Components/forms/EntityDetailsForm.vue?vue&type=template&id=6e50fce1&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/ClientApp/Components/forms/EntityDetailsForm.vue?vue&type=template&id=6e50fce1& ***!
  \*********************************************************************************************************************************************************************************************************************************************/
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
    "div",
    {},
    [
      _vm.show
        ? _c(
            "b-form",
            {
              attrs: { autocomplete: "off" },
              on: { submit: _vm.onSubmit, reset: _vm.onReset },
            },
            [
              _c(
                "div",
                { staticClass: "mb-2", attrs: { size: "lg" } },
                [
                  _c("LocationPartialForm", {
                    attrs: { entity: _vm.entity },
                    on: { locationChanged: _vm.changeLocationsInForm },
                  }),
                ],
                1
              ),
              _vm._v(" "),
              _c("hr"),
              _vm._v(" "),
              _c("hr"),
              _vm._v(" "),
              _c(
                "b-input-group",
                { staticClass: "mb-2", attrs: { size: "lg" } },
                [
                  _c(
                    "b-input-group-prepend",
                    { attrs: { "is-text": "" } },
                    [_c("b-icon", { attrs: { icon: "person" } })],
                    1
                  ),
                  _vm._v(" "),
                  _c("b-form-input", {
                    attrs: {
                      disabled: !_vm.edit,
                      type: "text",
                      placeholder: "Username",
                    },
                    model: {
                      value: _vm.form.username,
                      callback: function ($$v) {
                        _vm.$set(_vm.form, "username", $$v)
                      },
                      expression: "form.username",
                    },
                  }),
                ],
                1
              ),
              _vm._v(" "),
              _c("p", {
                staticClass: "text-danger",
                domProps: { textContent: _vm._s(_vm.errors.username) },
              }),
              _vm._v(" "),
              _c(
                "b-input-group",
                { staticClass: "mb-2", attrs: { size: "lg" } },
                [
                  _c(
                    "b-input-group-prepend",
                    { attrs: { "is-text": "" } },
                    [_c("b-icon", { attrs: { icon: "person" } })],
                    1
                  ),
                  _vm._v(" "),
                  _c("b-form-input", {
                    attrs: {
                      disabled: !_vm.edit,
                      type: "text",
                      placeholder: "Full name",
                    },
                    model: {
                      value: _vm.form.name,
                      callback: function ($$v) {
                        _vm.$set(_vm.form, "name", $$v)
                      },
                      expression: "form.name",
                    },
                  }),
                ],
                1
              ),
              _vm._v(" "),
              _c("p", {
                staticClass: "text-danger",
                domProps: { textContent: _vm._s(_vm.errors.name) },
              }),
              _vm._v(" "),
              _c(
                "b-input-group",
                { staticClass: "mb-2", attrs: { size: "lg" } },
                [
                  _c(
                    "b-input-group-prepend",
                    { attrs: { "is-text": "" } },
                    [_c("b-icon", { attrs: { icon: "envelope" } })],
                    1
                  ),
                  _vm._v(" "),
                  _c("b-form-input", {
                    attrs: {
                      disabled: !_vm.edit,
                      type: "email",
                      placeholder: "email",
                    },
                    model: {
                      value: _vm.form.email,
                      callback: function ($$v) {
                        _vm.$set(_vm.form, "email", $$v)
                      },
                      expression: "form.email",
                    },
                  }),
                ],
                1
              ),
              _vm._v(" "),
              _c("p", {
                staticClass: "text-danger",
                domProps: { textContent: _vm._s(_vm.errors.email) },
              }),
              _vm._v(" "),
              _c(
                "b-input-group",
                { staticClass: "mb-2", attrs: { size: "lg" } },
                [
                  _c(
                    "b-input-group-prepend",
                    { attrs: { "is-text": "" } },
                    [_c("b-icon", { attrs: { icon: "telephone" } })],
                    1
                  ),
                  _vm._v(" "),
                  _c("b-form-input", {
                    attrs: {
                      disabled: !_vm.edit,
                      type: "text",
                      placeholder: "Phone",
                    },
                    model: {
                      value: _vm.form.phone,
                      callback: function ($$v) {
                        _vm.$set(_vm.form, "phone", $$v)
                      },
                      expression: "form.phone",
                    },
                  }),
                ],
                1
              ),
              _vm._v(" "),
              _c("p", {
                staticClass: "text-danger",
                domProps: { textContent: _vm._s(_vm.errors.phone) },
              }),
              _vm._v(" "),
              _c(
                "b-input-group",
                { staticClass: "mb-2", attrs: { size: "lg" } },
                [
                  _c(
                    "b-input-group-prepend",
                    { attrs: { "is-text": "" } },
                    [_c("b-icon", { attrs: { icon: "phone" } })],
                    1
                  ),
                  _vm._v(" "),
                  _c("b-form-input", {
                    attrs: {
                      disabled: !_vm.edit,
                      type: "text",
                      placeholder: "Cellphone",
                    },
                    model: {
                      value: _vm.form.cellphone,
                      callback: function ($$v) {
                        _vm.$set(_vm.form, "cellphone", $$v)
                      },
                      expression: "form.cellphone",
                    },
                  }),
                ],
                1
              ),
              _vm._v(" "),
              _c("p", {
                staticClass: "text-danger",
                domProps: { textContent: _vm._s(_vm.errors.cellphone) },
              }),
              _vm._v(" "),
              _c(
                "b-input-group",
                { staticClass: "mb-2", attrs: { size: "lg" } },
                [
                  _c(
                    "b-input-group-prepend",
                    { attrs: { "is-text": "" } },
                    [_c("b-icon", { attrs: { icon: "info-square" } })],
                    1
                  ),
                  _vm._v(" "),
                  _c("b-form-input", {
                    attrs: {
                      disabled: !_vm.edit,
                      type: "text",
                      placeholder: "Description",
                    },
                    model: {
                      value: _vm.form.description,
                      callback: function ($$v) {
                        _vm.$set(_vm.form, "description", $$v)
                      },
                      expression: "form.description",
                    },
                  }),
                ],
                1
              ),
              _vm._v(" "),
              _c("p", {
                staticClass: "text-danger",
                domProps: { textContent: _vm._s(_vm.errors.description) },
              }),
              _vm._v(" "),
              _c(
                "b-input-group",
                { staticClass: "mb-2", attrs: { size: "lg" } },
                [
                  _c(
                    "b-input-group-prepend",
                    { attrs: { "is-text": "" } },
                    [_c("b-icon", { attrs: { icon: "search" } })],
                    1
                  ),
                  _vm._v(" "),
                  _c("b-form-input", {
                    attrs: {
                      disabled: !_vm.edit,
                      type: "text",
                      placeholder: "Search available categories",
                    },
                    on: { input: _vm.debounceInput },
                  }),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                _vm._l(_vm.catSuggestions, function (category, i) {
                  return _c(
                    "b-button",
                    {
                      key: category.id,
                      staticClass: "m-2",
                      on: {
                        click: function ($event) {
                          return _vm.selectCat(category)
                        },
                      },
                    },
                    [_vm._v(_vm._s(category.name))]
                  )
                }),
                1
              ),
              _vm._v(" "),
              _vm.form.catIds.length > 0
                ? _c(
                    "div",
                    [
                      _c("h6", [_vm._v("Selected Categories")]),
                      _vm._v(" "),
                      _vm._l(_vm.selectedCats, function (categ, i) {
                        return _c(
                          "b-button",
                          {
                            key: categ.id,
                            staticClass: "m-2",
                            attrs: {
                              disabled: !_vm.edit,
                              variant: "outline-primary",
                            },
                            on: {
                              click: function ($event) {
                                return _vm.removeCat(categ)
                              },
                            },
                          },
                          [_vm._v(_vm._s(categ.name))]
                        )
                      }),
                    ],
                    2
                  )
                : _vm._e(),
              _vm._v(" "),
              _c(
                "b-input-group",
                { staticClass: "mb-2", attrs: { size: "lg" } },
                [
                  _c("b-input-group-prepend", { attrs: { "is-text": "" } }, [
                    _vm._v(
                      "\n                Do you own this entity?\n            "
                    ),
                  ]),
                  _vm._v(" "),
                  _c("b-form-select", {
                    attrs: { disabled: !_vm.edit, options: _vm.options },
                    model: {
                      value: _vm.form.userOwnsEntity,
                      callback: function ($$v) {
                        _vm.$set(_vm.form, "userOwnsEntity", $$v)
                      },
                      expression: "form.userOwnsEntity",
                    },
                  }),
                ],
                1
              ),
              _vm._v(" "),
              _vm.edit
                ? _c(
                    "div",
                    [
                      _c(
                        "b-overlay",
                        {
                          staticClass: "d-inline-block",
                          attrs: {
                            show: _vm.busy,
                            rounded: "",
                            opacity: "0.6",
                            "spinner-small": "",
                            "spinner-variant": "primary",
                          },
                        },
                        [
                          _c(
                            "b-button",
                            { attrs: { type: "submit", variant: "primary" } },
                            [_vm._v("Submit")]
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-button",
                        { attrs: { type: "reset", variant: "danger" } },
                        [_vm._v("Reset")]
                      ),
                    ],
                    1
                  )
                : _vm._e(),
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      !_vm.edit
        ? _c(
            "b-input-group",
            { staticClass: "mb-2", attrs: { size: "lg" } },
            [
              _c(
                "b-button",
                {
                  attrs: { type: "submit", variant: "primary" },
                  on: {
                    click: function ($event) {
                      _vm.edit = !_vm.edit
                    },
                  },
                },
                [
                  _c("b-icon", {
                    attrs: { icon: "pencil", "aria-label": "Help" },
                  }),
                ],
                1
              ),
            ],
            1
          )
        : _vm._e(),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/ClientApp/Components/forms/FileInput.vue?vue&type=template&id=6e8eaa68&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/ClientApp/Components/forms/FileInput.vue?vue&type=template&id=6e8eaa68&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _c("input", {
      ref: "picker",
      staticClass: "d-none",
      attrs: { type: "file", accept: "image/*", multiple: "" },
      on: { change: _vm.change },
    }),
    _vm._v(" "),
    _c(
      "button",
      {
        staticClass: "border-0",
        attrs: { type: "button" },
        on: { click: _vm.browse },
      },
      [
        _c(
          "svg",
          {
            staticClass: "bi bi-image",
            attrs: {
              xmlns: "http://www.w3.org/2000/svg",
              width: "16",
              height: "16",
              fill: "currentColor",
              viewBox: "0 0 16 16",
            },
          },
          [
            _c("path", {
              attrs: { d: "M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" },
            }),
            _vm._v(" "),
            _c("path", {
              attrs: {
                d: "M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z",
              },
            }),
          ]
        ),
      ]
    ),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/ClientApp/Components/forms/LocationPartialForm.vue?vue&type=template&id=000dc18e&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/ClientApp/Components/forms/LocationPartialForm.vue?vue&type=template&id=000dc18e&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************/
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
    "div",
    {},
    [
      _c("v-select", {
        attrs: {
          options: _vm.optionsCountry,
          label: "name",
          placeholder: "Pais",
          filterable: false,
          searchable: false,
          loading: _vm.loading,
          multiple: false,
        },
        on: { input: _vm.fetchStates },
        scopedSlots: _vm._u([
          {
            key: "option",
            fn: function (option) {
              return [
                _vm._v("\n            " + _vm._s(option.name) + "\n        "),
              ]
            },
          },
          {
            key: "selected-option",
            fn: function (option) {
              return [
                _vm._v("\n            " + _vm._s(option.name) + "\n        "),
              ]
            },
          },
          {
            key: "no-options",
            fn: function (ref) {
              var search = ref.search
              var searching = ref.searching
              var loading = ref.loading
              return [
                _vm._v("\n            Search more specifically\n        "),
              ]
            },
          },
        ]),
        model: {
          value: _vm.selectedCountry,
          callback: function ($$v) {
            _vm.selectedCountry = $$v
          },
          expression: "selectedCountry",
        },
      }),
      _vm._v("\n    " + _vm._s(_vm.selectedCountry) + "\n    "),
      _c("hr"),
      _vm._v(" "),
      _c("v-select", {
        attrs: {
          options: _vm.optionsState,
          label: "name",
          placeholder: "Provincia",
          filterable: false,
          searchable: false,
          loading: _vm.loading,
          multiple: false,
        },
        on: { input: _vm.fetchCities },
        scopedSlots: _vm._u([
          {
            key: "option",
            fn: function (option) {
              return [
                _vm._v("\n            " + _vm._s(option.name) + "\n        "),
              ]
            },
          },
          {
            key: "selected-option",
            fn: function (option) {
              return [
                _vm._v("\n            " + _vm._s(option.name) + "\n        "),
              ]
            },
          },
          {
            key: "no-options",
            fn: function (ref) {
              var search = ref.search
              var searching = ref.searching
              var loading = ref.loading
              return [
                _vm._v("\n            Search more specifically\n        "),
              ]
            },
          },
        ]),
        model: {
          value: _vm.selectedState,
          callback: function ($$v) {
            _vm.selectedState = $$v
          },
          expression: "selectedState",
        },
      }),
      _vm._v("\n    " + _vm._s(_vm.selectedState) + "\n    "),
      _c("hr"),
      _vm._v(" "),
      _c("v-select", {
        attrs: {
          options: _vm.optionsCity,
          label: "name",
          placeholder: "Ciudad/Localidad",
          filterable: true,
          searchable: true,
          loading: _vm.loading,
          multiple: false,
        },
        on: { input: _vm.emitLocation },
        scopedSlots: _vm._u([
          {
            key: "option",
            fn: function (option) {
              return [
                _vm._v("\n            " + _vm._s(option.name) + "\n        "),
              ]
            },
          },
          {
            key: "selected-option",
            fn: function (option) {
              return [
                _vm._v("\n            " + _vm._s(option.name) + "\n        "),
              ]
            },
          },
          {
            key: "no-options",
            fn: function (ref) {
              var search = ref.search
              var searching = ref.searching
              var loading = ref.loading
              return [
                _vm._v("\n            Search more specifically\n        "),
              ]
            },
          },
        ]),
        model: {
          value: _vm.selectedCity,
          callback: function ($$v) {
            _vm.selectedCity = $$v
          },
          expression: "selectedCity",
        },
      }),
      _vm._v("\n    " + _vm._s(_vm.selectedCity) + "\n    "),
      _c("hr"),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/ClientApp/Components/forms/PostCreateForm.vue?vue&type=template&id=16799772&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/ClientApp/Components/forms/PostCreateForm.vue?vue&type=template&id=16799772&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", {}, [
    _c(
      "div",
      { staticClass: "flex p-4 bg-light" },
      [
        _c(
          "b-overlay",
          {
            attrs: {
              show: _vm.loading,
              "spinner-variant": "primary",
              "spinner-type": "grow",
              "spinner-small": "",
              rounded: "sm",
            },
          },
          [
            _c(
              "form",
              {
                staticClass: "flex-1 ml-4",
                attrs: { enctype: "multipart/form-data" },
                on: {
                  submit: function ($event) {
                    $event.preventDefault()
                    return _vm.submit()
                  },
                },
              },
              [
                _c("textarea", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.content,
                      expression: "form.content",
                    },
                  ],
                  ref: "text-area",
                  staticClass: "border-0 p-2 rounded",
                  attrs: {
                    name: "content",
                    id: "",
                    rows: "2",
                    placeholder: "Whats up?",
                    label: "Post content",
                  },
                  domProps: { value: _vm.form.content },
                  on: {
                    input: [
                      function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.form, "content", $event.target.value)
                      },
                      _vm.resizeTextarea,
                    ],
                  },
                }),
                _vm._v(" "),
                _c("p", {
                  staticClass: "text-danger",
                  domProps: { textContent: _vm._s(_vm.errors.content) },
                }),
                _vm._v(" "),
                _vm.form.media.length
                  ? _c(
                      "div",
                      {
                        staticClass: "grid gap-2",
                        class: { "grid-cols-2": _vm.media.length > 1 },
                      },
                      _vm._l(_vm.media, function (m, index) {
                        return _c(
                          "div",
                          {
                            key: index,
                            staticClass:
                              "\n                            relative\n                            flex flex-col\n                            items-center\n                            justify-center\n                        ",
                          },
                          [
                            _c(
                              "button",
                              {
                                staticClass:
                                  "\n                                m-1\n                                absolute\n                                top-0\n                                p-2\n                                left-0\n                                text-white\n                                bg-black bg-opacity-75\n                                rounded-full\n                                cursor-pointer\n                                hover:bg-opacity-100\n                            ",
                                attrs: { type: "button" },
                                on: {
                                  click: function ($event) {
                                    return _vm.removeMedia(index)
                                  },
                                },
                              },
                              [
                                _c(
                                  "svg",
                                  {
                                    staticClass: "bi bi-trash3",
                                    attrs: {
                                      xmlns: "http://www.w3.org/2000/svg",
                                      width: "16",
                                      height: "16",
                                      fill: "currentColor",
                                      viewBox: "0 0 16 16",
                                    },
                                  },
                                  [
                                    _c("path", {
                                      attrs: {
                                        d: "M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z",
                                      },
                                    }),
                                  ]
                                ),
                              ]
                            ),
                            _vm._v(" "),
                            _c("img", {
                              staticClass:
                                "rounded-xl object-cover h-48 w-full",
                              attrs: { src: m, alt: "", width: "100%" },
                            }),
                          ]
                        )
                      }),
                      0
                    )
                  : _vm._e(),
                _vm._v(" "),
                _c(
                  "div",
                  {},
                  [
                    _c("FileInput", { on: { filesdAdded: _vm.addFiles } }),
                    _vm._v(" "),
                    _c("div", {}, [
                      _c(
                        "div",
                        {
                          class:
                            _vm.remainingChars < 0
                              ? "text-danger"
                              : "text-muted",
                        },
                        [
                          _vm._v(
                            "\n                            " +
                              _vm._s(_vm.remainingChars) +
                              "\n                        "
                          ),
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "button",
                        { attrs: { disabled: !_vm.canSubmit, type: "submit" } },
                        [
                          _vm._v(
                            "\n                            Post\n                        "
                          ),
                        ]
                      ),
                    ]),
                  ],
                  1
                ),
              ]
            ),
          ]
        ),
      ],
      1
    ),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/ClientApp/Components/forms/UserDetailsForm.vue?vue&type=template&id=bf025d0e&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/ClientApp/Components/forms/UserDetailsForm.vue?vue&type=template&id=bf025d0e& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
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
    "div",
    {},
    [
      _c(
        "b-card",
        {
          attrs: {
            title: "User details",
            "header-tag": "header",
            "footer-tag": "footer",
          },
          scopedSlots: _vm._u([
            {
              key: "header",
              fn: function () {
                return [_c("h6", { staticClass: "mb-0" }, [_vm._v("Profile")])]
              },
              proxy: true,
            },
            {
              key: "footer",
              fn: function () {
                return [_c("em", [_vm._v("Remember to save your changes")])]
              },
              proxy: true,
            },
          ]),
        },
        [
          _vm._v(" "),
          _c(
            "b-card-text",
            [
              _vm.show
                ? _c(
                    "b-form",
                    { on: { submit: _vm.onSubmit, reset: _vm.onReset } },
                    [
                      _c(
                        "b-input-group",
                        { staticClass: "mb-2", attrs: { size: "lg" } },
                        [
                          _c(
                            "b-input-group-prepend",
                            { attrs: { "is-text": "" } },
                            [_c("b-icon", { attrs: { icon: "person" } })],
                            1
                          ),
                          _vm._v(" "),
                          _c("b-form-input", {
                            attrs: {
                              disabled: !_vm.edit,
                              type: "text",
                              placeholder: "Full name",
                            },
                            model: {
                              value: _vm.form.name,
                              callback: function ($$v) {
                                _vm.$set(_vm.form, "name", $$v)
                              },
                              expression: "form.name",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("p", {
                        staticClass: "text-danger",
                        domProps: { textContent: _vm._s(_vm.errors.name) },
                      }),
                      _vm._v(" "),
                      _c(
                        "b-input-group",
                        { staticClass: "mb-2", attrs: { size: "lg" } },
                        [
                          _c(
                            "b-input-group-prepend",
                            { attrs: { "is-text": "" } },
                            [_c("b-icon", { attrs: { icon: "play" } })],
                            1
                          ),
                          _vm._v(" "),
                          _c("b-form-input", {
                            attrs: {
                              disabled: !_vm.edit,
                              type: "text",
                              placeholder: "Username",
                            },
                            model: {
                              value: _vm.form.username,
                              callback: function ($$v) {
                                _vm.$set(_vm.form, "username", $$v)
                              },
                              expression: "form.username",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("p", {
                        staticClass: "text-danger",
                        domProps: { textContent: _vm._s(_vm.errors.username) },
                      }),
                      _vm._v(" "),
                      _c(
                        "b-input-group",
                        { staticClass: "mb-2", attrs: { size: "lg" } },
                        [
                          _c(
                            "b-input-group-prepend",
                            { attrs: { "is-text": "" } },
                            [_c("b-icon", { attrs: { icon: "envelope" } })],
                            1
                          ),
                          _vm._v(" "),
                          _c("b-form-input", {
                            attrs: {
                              disabled: !_vm.edit,
                              type: "email",
                              placeholder: "email",
                            },
                            model: {
                              value: _vm.form.email,
                              callback: function ($$v) {
                                _vm.$set(_vm.form, "email", $$v)
                              },
                              expression: "form.email",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("p", {
                        staticClass: "text-danger",
                        domProps: { textContent: _vm._s(_vm.errors.email) },
                      }),
                      _vm._v(" "),
                      _c(
                        "b-input-group",
                        { staticClass: "mb-2", attrs: { size: "lg" } },
                        [
                          _c(
                            "b-input-group-prepend",
                            { attrs: { "is-text": "" } },
                            [_c("b-icon", { attrs: { icon: "telephone" } })],
                            1
                          ),
                          _vm._v(" "),
                          _c("b-form-input", {
                            attrs: {
                              disabled: !_vm.edit,
                              type: "text",
                              placeholder: "User phone",
                            },
                            model: {
                              value: _vm.form.phone,
                              callback: function ($$v) {
                                _vm.$set(_vm.form, "phone", $$v)
                              },
                              expression: "form.phone",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("p", {
                        staticClass: "text-danger",
                        domProps: { textContent: _vm._s(_vm.errors.phone) },
                      }),
                      _vm._v(" "),
                      _c(
                        "b-input-group",
                        { staticClass: "mb-2", attrs: { size: "lg" } },
                        [
                          _c(
                            "b-input-group-prepend",
                            { attrs: { "is-text": "" } },
                            [_c("b-icon", { attrs: { icon: "phone" } })],
                            1
                          ),
                          _vm._v(" "),
                          _c("b-form-input", {
                            attrs: {
                              disabled: !_vm.edit,
                              type: "text",
                              placeholder: "User cellphone",
                            },
                            model: {
                              value: _vm.form.cellphone,
                              callback: function ($$v) {
                                _vm.$set(_vm.form, "cellphone", $$v)
                              },
                              expression: "form.cellphone",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("p", {
                        staticClass: "text-danger",
                        domProps: { textContent: _vm._s(_vm.errors.cellphone) },
                      }),
                      _vm._v(" "),
                      _c(
                        "b-input-group",
                        { staticClass: "mb-2", attrs: { size: "lg" } },
                        [
                          _c(
                            "b-input-group-prepend",
                            { attrs: { "is-text": "" } },
                            [_c("b-icon", { attrs: { icon: "info-square" } })],
                            1
                          ),
                          _vm._v(" "),
                          _c("b-form-input", {
                            attrs: {
                              disabled: !_vm.edit,
                              type: "text",
                              placeholder: "User description",
                            },
                            model: {
                              value: _vm.form.description,
                              callback: function ($$v) {
                                _vm.$set(_vm.form, "description", $$v)
                              },
                              expression: "form.description",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("p", {
                        staticClass: "text-danger",
                        domProps: {
                          textContent: _vm._s(_vm.errors.description),
                        },
                      }),
                      _vm._v(" "),
                      _vm.edit
                        ? _c(
                            "div",
                            [
                              _c(
                                "b-overlay",
                                {
                                  staticClass: "d-inline-block",
                                  attrs: {
                                    show: _vm.busy,
                                    rounded: "",
                                    opacity: "0.6",
                                    "spinner-small": "",
                                    "spinner-variant": "primary",
                                  },
                                },
                                [
                                  _c(
                                    "b-button",
                                    {
                                      attrs: {
                                        type: "submit",
                                        variant: "primary",
                                      },
                                    },
                                    [_vm._v("Submit")]
                                  ),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                { attrs: { type: "reset", variant: "danger" } },
                                [_vm._v("Reset")]
                              ),
                            ],
                            1
                          )
                        : _vm._e(),
                    ],
                    1
                  )
                : _vm._e(),
            ],
            1
          ),
          _vm._v(" "),
          !_vm.edit
            ? _c(
                "b-input-group",
                { staticClass: "mb-2", attrs: { size: "lg" } },
                [
                  _c(
                    "b-button",
                    {
                      attrs: { type: "submit", variant: "primary" },
                      on: {
                        click: function ($event) {
                          _vm.edit = !_vm.edit
                        },
                      },
                    },
                    [
                      _c("b-icon", {
                        attrs: { icon: "pencil", "aria-label": "Help" },
                      }),
                    ],
                    1
                  ),
                ],
                1
              )
            : _vm._e(),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/ClientApp/Components/forms/UserPrivacyForm.vue?vue&type=template&id=26474682&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/ClientApp/Components/forms/UserPrivacyForm.vue?vue&type=template&id=26474682& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
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
    "div",
    {},
    [
      _c(
        "b-card",
        {
          attrs: { title: "", "header-tag": "header" },
          scopedSlots: _vm._u([
            {
              key: "header",
              fn: function () {
                return [_c("h6", { staticClass: "mb-0" }, [_vm._v("Privacy")])]
              },
              proxy: true,
            },
          ]),
        },
        [
          _vm._v(" "),
          _c("h4", [_vm._v("Password")]),
          _vm._v(" "),
          _c(
            "div",
            [
              _vm.show
                ? _c(
                    "b-form",
                    { on: { submit: _vm.onSubmit, reset: _vm.onReset } },
                    [
                      !_vm.edit
                        ? _c(
                            "b-input-group",
                            { staticClass: "mb-2", attrs: { size: "lg" } },
                            [
                              _c(
                                "b-button",
                                {
                                  attrs: { type: "submit", variant: "primary" },
                                  on: {
                                    click: function ($event) {
                                      _vm.edit = !_vm.edit
                                    },
                                  },
                                },
                                [
                                  _c("b-icon", {
                                    attrs: {
                                      icon: "pencil",
                                      "aria-label": "Help",
                                    },
                                  }),
                                ],
                                1
                              ),
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.edit
                        ? _c(
                            "div",
                            [
                              _c(
                                "b-input-group",
                                { staticClass: "mb-2", attrs: { size: "lg" } },
                                [
                                  _c(
                                    "b-input-group-prepend",
                                    { attrs: { "is-text": "" } },
                                    [
                                      _c("b-icon", {
                                        attrs: { icon: "eye-slash" },
                                      }),
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c("b-form-input", {
                                    attrs: {
                                      type: "password",
                                      placeholder: "old password",
                                    },
                                    model: {
                                      value: _vm.form.oldPassword,
                                      callback: function ($$v) {
                                        _vm.$set(_vm.form, "oldPassword", $$v)
                                      },
                                      expression: "form.oldPassword",
                                    },
                                  }),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "b-input-group",
                                { staticClass: "mb-2", attrs: { size: "lg" } },
                                [
                                  _c(
                                    "b-input-group-prepend",
                                    { attrs: { "is-text": "" } },
                                    [
                                      _c("b-icon", {
                                        attrs: { icon: "eye-slash-fill" },
                                      }),
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c("b-form-input", {
                                    attrs: {
                                      type: "password",
                                      placeholder: "new password",
                                    },
                                    model: {
                                      value: _vm.form.password,
                                      callback: function ($$v) {
                                        _vm.$set(_vm.form, "password", $$v)
                                      },
                                      expression: "form.password",
                                    },
                                  }),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "b-input-group",
                                { staticClass: "mb-2", attrs: { size: "lg" } },
                                [
                                  _c(
                                    "b-input-group-prepend",
                                    { attrs: { "is-text": "" } },
                                    [
                                      _c("b-icon", {
                                        attrs: { icon: "eye-slash-fill" },
                                      }),
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c("b-form-input", {
                                    attrs: {
                                      type: "password",
                                      placeholder: "new password confirm",
                                    },
                                    model: {
                                      value: _vm.form.password_confirmation,
                                      callback: function ($$v) {
                                        _vm.$set(
                                          _vm.form,
                                          "password_confirmation",
                                          $$v
                                        )
                                      },
                                      expression: "form.password_confirmation",
                                    },
                                  }),
                                ],
                                1
                              ),
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.edit
                        ? _c(
                            "div",
                            [
                              _c(
                                "b-overlay",
                                {
                                  staticClass: "d-inline-block",
                                  attrs: {
                                    show: _vm.busy,
                                    rounded: "",
                                    opacity: "0.6",
                                    "spinner-small": "",
                                    "spinner-variant": "primary",
                                  },
                                },
                                [
                                  _c(
                                    "b-button",
                                    {
                                      attrs: {
                                        type: "submit",
                                        variant: "primary",
                                      },
                                    },
                                    [_vm._v("Submit")]
                                  ),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                { attrs: { type: "reset", variant: "danger" } },
                                [_vm._v("Reset")]
                              ),
                            ],
                            1
                          )
                        : _vm._e(),
                    ],
                    1
                  )
                : _vm._e(),
            ],
            1
          ),
        ]
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/ClientApp/Pages/EntityPage.vue?vue&type=template&id=5d859d98&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/ClientApp/Pages/EntityPage.vue?vue&type=template&id=5d859d98& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
  return _c("b-container", [
    _c("div", { staticClass: "entity" }, [
      _c("div", [_c("h1", [_vm._v("Entity")])]),
      _vm._v(" "),
      _c("div", { staticClass: "picture-container" }, [
        _c("div", { staticClass: "picture" }, [
          _vm.entity
            ? _c("img", {
                ref: "profile_pic",
                staticClass: "picture-src",
                attrs: {
                  src: _vm.entity.background_photo_path
                    ? _vm.entity.background_photo_path_full_url
                    : "http://127.0.0.1:8000/storage/media/defaultCover.webp",
                  title: "",
                },
              })
            : _vm._e(),
          _vm._v(" "),
          _vm.entity.user_id == _vm.$store.state.user.id
            ? _c("input", {
                ref: "profile_pic_input",
                attrs: { type: "file" },
                on: { change: _vm.previewFile },
              })
            : _vm._e(),
        ]),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-5" }, [
          _c(
            "div",
            [
              _c(
                "b-list-group",
                [
                  _c(
                    "b-list-group-item",
                    { staticClass: "d-flex align-items-center" },
                    [
                      _c("b-avatar", {
                        staticClass: "mr-3",
                        attrs: { icon: "bullseye" },
                      }),
                      _vm._v(" "),
                      _c("div", { staticClass: "row" }, [
                        _c("div", { staticClass: "col align-self-center" }, [
                          _c("p", { staticClass: "mb-0" }, [
                            _vm._v("Username"),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col align-self-center" }, [
                          _c("p", { staticClass: "text-muted mb-0" }, [
                            _vm._v(
                              "\n                                        " +
                                _vm._s(_vm.entity.username) +
                                "\n                                    "
                            ),
                          ]),
                        ]),
                      ]),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-list-group-item",
                    { staticClass: "d-flex align-items-center" },
                    [
                      _c("b-avatar", { staticClass: "mr-3" }),
                      _vm._v(" "),
                      _c("div", { staticClass: "row" }, [
                        _c(
                          "div",
                          { staticClass: "col-sm-3 align-self-center" },
                          [_c("p", { staticClass: "mb-0" }, [_vm._v("Name")])]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "col-sm-9 align-self-center" },
                          [
                            _c("p", { staticClass: "text-muted mb-0" }, [
                              _vm._v(
                                "\n                                        " +
                                  _vm._s(_vm.entity.name) +
                                  "\n                                    "
                              ),
                            ]),
                          ]
                        ),
                      ]),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-list-group-item",
                    { staticClass: "d-flex align-items-center" },
                    [
                      _c("b-avatar", {
                        staticClass: "mr-3",
                        attrs: { icon: "envelope" },
                      }),
                      _vm._v(" "),
                      _c("div", { staticClass: "row" }, [
                        _c(
                          "div",
                          { staticClass: "col-sm-3 align-self-center" },
                          [_c("p", { staticClass: "mb-0" }, [_vm._v("Email")])]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "col-sm-9 align-self-center" },
                          [
                            _c("p", { staticClass: "text-muted mb-0" }, [
                              _vm._v(
                                "\n                                        " +
                                  _vm._s(_vm.entity.email) +
                                  "\n                                    "
                              ),
                            ]),
                          ]
                        ),
                      ]),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-list-group-item",
                    { staticClass: "d-flex align-items-center" },
                    [
                      _c("b-avatar", {
                        staticClass: "mr-3",
                        attrs: { icon: "telephone" },
                      }),
                      _vm._v(" "),
                      _c("div", { staticClass: "row" }, [
                        _c(
                          "div",
                          { staticClass: "col-sm-3 align-self-center" },
                          [_c("p", { staticClass: "mb-0" }, [_vm._v("Phone")])]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "col-sm-9 align-self-center" },
                          [
                            _c("p", { staticClass: "text-muted mb-0" }, [
                              _vm._v(
                                "\n                                        " +
                                  _vm._s(_vm.entity.phone) +
                                  "\n                                    "
                              ),
                            ]),
                          ]
                        ),
                      ]),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-list-group-item",
                    { staticClass: "d-flex align-items-center" },
                    [
                      _c("b-avatar", {
                        staticClass: "mr-3",
                        attrs: { icon: "bookmark" },
                      }),
                      _vm._v(" "),
                      _c("span", { staticClass: "mr-auto" }, [
                        _vm._v("Bookmark Count"),
                      ]),
                      _vm._v(" "),
                      _c("b-badge", [
                        _vm._v(_vm._s(_vm.entity.bookmarks_count)),
                      ]),
                    ],
                    1
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c("hr"),
              _vm._v(" "),
              _c(
                "b-list-group",
                [
                  _c("b-list-group-item", { attrs: { disabled: "" } }, [
                    _vm._v("Categories"),
                  ]),
                  _vm._v(" "),
                  _vm._l(_vm.entity.categories, function (cat, i) {
                    return _c(
                      "b-list-group-item",
                      { key: i },
                      [
                        _c(
                          "b-badge",
                          {
                            staticClass: "m-2 p-2",
                            attrs: { variant: "primary" },
                          },
                          [_vm._v(_vm._s(cat.name))]
                        ),
                      ],
                      1
                    )
                  }),
                ],
                2
              ),
            ],
            1
          ),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-7" }, [
          _c(
            "div",
            [
              _c(
                "b-tabs",
                { attrs: { "content-class": "mt-3" } },
                [
                  _c("b-tab", { attrs: { title: "Posts", active: "" } }, [
                    _c(
                      "div",
                      { staticClass: "first_tab" },
                      [
                        _c("h6", [_vm._v("Desc:")]),
                        _vm._v(" "),
                        _c("p", { staticClass: "text-muted h3" }, [
                          _c("cite", [_vm._v(_vm._s(_vm.entity.description))]),
                        ]),
                        _vm._v(" "),
                        _vm.entity.user_id == _vm.$store.state.user.id
                          ? _c("PostCreateForm", {
                              attrs: { entity: _vm.entity },
                              on: { postSubmitted: _vm.addPost },
                            })
                          : _vm._e(),
                        _vm._v(" "),
                        _c("hr"),
                        _vm._v(" "),
                        _c(
                          "infinite-scroll",
                          { attrs: { loadMore: _vm.loadMorePosts } },
                          [
                            _vm.entity
                              ? _c(
                                  "div",
                                  _vm._l(
                                    _vm.entity.posts.data,
                                    function (post, i) {
                                      return _c(
                                        "b-card",
                                        {
                                          key: i,
                                          staticClass: "mb-2",
                                          attrs: {
                                            title: "Date",
                                            "sub-title": post.created_at,
                                          },
                                        },
                                        [
                                          _vm._l(post.media, function (img, i) {
                                            return _c("enlargeable-image", {
                                              key: i,
                                              attrs: {
                                                src: img.full_url,
                                                alt: "",
                                                width: "100%",
                                                src_large: img.full_url,
                                              },
                                            })
                                          }),
                                          _vm._v(" "),
                                          _c(
                                            "b-card-text",
                                            {
                                              staticStyle: {
                                                "white-space": "pre-line",
                                              },
                                            },
                                            [
                                              _vm._v(
                                                "\n                                            " +
                                                  _vm._s(post.content) +
                                                  "\n                                        "
                                              ),
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c("b-card-text", [
                                            _vm._v(
                                              "A second paragraph of text in\n                                            the card."
                                            ),
                                          ]),
                                          _vm._v(" "),
                                          _vm.$store.state.user.id ==
                                          _vm.entity.user_id
                                            ? _c(
                                                "div",
                                                [
                                                  _c(
                                                    "b-link",
                                                    {
                                                      staticClass: "card-link",
                                                      attrs: { href: "#" },
                                                      on: {
                                                        click: function (
                                                          $event
                                                        ) {
                                                          return _vm.destroyPost(
                                                            post.id
                                                          )
                                                        },
                                                      },
                                                    },
                                                    [_vm._v("Delete")]
                                                  ),
                                                ],
                                                1
                                              )
                                            : _vm._e(),
                                        ],
                                        2
                                      )
                                    }
                                  ),
                                  1
                                )
                              : _vm._e(),
                          ]
                        ),
                      ],
                      1
                    ),
                  ]),
                  _vm._v(" "),
                  _c("b-tab", { attrs: { title: "Location" } }, [
                    _c("div", { staticClass: "second_tab" }, [
                      _vm._v("Location"),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("b-tab", { attrs: { title: "Disabled", disabled: "" } }, [
                    _c("p", [_vm._v("I'm a disabled tab!")]),
                  ]),
                ],
                1
              ),
            ],
            1
          ),
        ]),
      ]),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/ClientApp/Pages/ForgotPasswordPage.vue?vue&type=template&id=7ecfb1a2&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/ClientApp/Pages/ForgotPasswordPage.vue?vue&type=template&id=7ecfb1a2& ***!
  \***********************************************************************************************************************************************************************************************************************************/
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
  return _c("b-container", [
    _c(
      "div",
      { staticClass: "blah" },
      [
        _c(
          "b-card",
          { attrs: { title: "Forgot Password:", "sub-title": "" } },
          [
            _c("b-card-text", [
              _c(
                "div",
                [
                  _vm.show
                    ? _c(
                        "b-form",
                        {
                          on: {
                            submit: _vm.forgotPassword,
                            reset: _vm.onResetMailForm,
                          },
                        },
                        [
                          _c(
                            "b-form-group",
                            {
                              attrs: {
                                id: "input-group-1",
                                label: "Email address:",
                                "label-for": "input-1",
                                description: "We'll send you a code.",
                              },
                            },
                            [
                              _c("b-form-input", {
                                attrs: {
                                  id: "input-1",
                                  type: "email",
                                  placeholder: "Enter email",
                                  required: "",
                                },
                                model: {
                                  value: _vm.form.email,
                                  callback: function ($$v) {
                                    _vm.$set(_vm.form, "email", $$v)
                                  },
                                  expression: "form.email",
                                },
                              }),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          !_vm.sendCode
                            ? _c(
                                "div",
                                [
                                  _c(
                                    "b-overlay",
                                    {
                                      staticClass: "d-inline-block",
                                      attrs: {
                                        show: _vm.busy,
                                        rounded: "",
                                        opacity: "0.6",
                                        "spinner-small": "",
                                        "spinner-variant": "primary",
                                      },
                                    },
                                    [
                                      _c(
                                        "b-button",
                                        {
                                          attrs: {
                                            type: "submit",
                                            variant: "primary",
                                          },
                                        },
                                        [_vm._v("Submit")]
                                      ),
                                    ],
                                    1
                                  ),
                                ],
                                1
                              )
                            : _vm._e(),
                        ],
                        1
                      )
                    : _vm._e(),
                ],
                1
              ),
              _vm._v(" "),
              _vm.sendCode
                ? _c(
                    "div",
                    [
                      _vm.show
                        ? _c(
                            "b-form",
                            {
                              on: {
                                submit: _vm.resetPassword,
                                reset: _vm.onResetPasswordForm,
                              },
                            },
                            [
                              _c(
                                "b-input-group",
                                { staticClass: "mb-2", attrs: { size: "lg" } },
                                [
                                  _c(
                                    "b-input-group-prepend",
                                    { attrs: { "is-text": "" } },
                                    [_c("b-icon", { attrs: { icon: "lock" } })],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c("b-form-input", {
                                    attrs: {
                                      type: "text",
                                      placeholder: "code",
                                    },
                                    model: {
                                      value: _vm.form.code,
                                      callback: function ($$v) {
                                        _vm.$set(_vm.form, "code", $$v)
                                      },
                                      expression: "form.code",
                                    },
                                  }),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "b-input-group",
                                { staticClass: "mb-2", attrs: { size: "lg" } },
                                [
                                  _c(
                                    "b-input-group-prepend",
                                    { attrs: { "is-text": "" } },
                                    [
                                      _c("b-icon", {
                                        attrs: { icon: "eye-slash-fill" },
                                      }),
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c("b-form-input", {
                                    attrs: {
                                      type: "password",
                                      placeholder: "new password",
                                    },
                                    model: {
                                      value: _vm.form.password,
                                      callback: function ($$v) {
                                        _vm.$set(_vm.form, "password", $$v)
                                      },
                                      expression: "form.password",
                                    },
                                  }),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "b-input-group",
                                { staticClass: "mb-2", attrs: { size: "lg" } },
                                [
                                  _c(
                                    "b-input-group-prepend",
                                    { attrs: { "is-text": "" } },
                                    [
                                      _c("b-icon", {
                                        attrs: { icon: "eye-slash-fill" },
                                      }),
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c("b-form-input", {
                                    attrs: {
                                      type: "password",
                                      placeholder: "new password confirm",
                                    },
                                    model: {
                                      value: _vm.form.passwordConfirm,
                                      callback: function ($$v) {
                                        _vm.$set(
                                          _vm.form,
                                          "passwordConfirm",
                                          $$v
                                        )
                                      },
                                      expression: "form.passwordConfirm",
                                    },
                                  }),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _vm.sendCode
                                ? _c(
                                    "div",
                                    [
                                      _c(
                                        "b-overlay",
                                        {
                                          staticClass: "d-inline-block",
                                          attrs: {
                                            show: _vm.busy,
                                            rounded: "",
                                            opacity: "0.6",
                                            "spinner-small": "",
                                            "spinner-variant": "primary",
                                          },
                                        },
                                        [
                                          _c(
                                            "b-button",
                                            {
                                              attrs: {
                                                type: "submit",
                                                variant: "primary",
                                              },
                                            },
                                            [_vm._v("Submit")]
                                          ),
                                        ],
                                        1
                                      ),
                                    ],
                                    1
                                  )
                                : _vm._e(),
                            ],
                            1
                          )
                        : _vm._e(),
                    ],
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              _c(
                "p",
                { staticClass: "p-2" },
                [
                  _vm._v("\n                    Have an account? "),
                  _c("b-link", { attrs: { to: "/login" } }, [_vm._v("Login")]),
                ],
                1
              ),
            ]),
          ],
          1
        ),
      ],
      1
    ),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/ClientApp/Pages/LoginPage.vue?vue&type=template&id=7d53d066&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/ClientApp/Pages/LoginPage.vue?vue&type=template&id=7d53d066& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
  return _c("b-container", [
    _c(
      "div",
      { staticClass: "blah" },
      [
        _c(
          "b-card",
          { attrs: { title: "Login", "sub-title": "" } },
          [
            _c(
              "b-card-text",
              [
                _vm.show
                  ? _c(
                      "b-form",
                      { on: { submit: _vm.onSubmit, reset: _vm.onReset } },
                      [
                        _c(
                          "b-form-group",
                          {
                            attrs: {
                              id: "input-group-1",
                              label: "Email address:",
                              "label-for": "input-1",
                              description:
                                "We'll never share your email with anyone else.",
                            },
                          },
                          [
                            _c("b-form-input", {
                              attrs: {
                                id: "input-1",
                                type: "email",
                                placeholder: "Enter email",
                                required: "",
                              },
                              model: {
                                value: _vm.form.email,
                                callback: function ($$v) {
                                  _vm.$set(_vm.form, "email", $$v)
                                },
                                expression: "form.email",
                              },
                            }),
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "b-form-group",
                          {
                            attrs: {
                              id: "input-group-3",
                              label: "Your Pass:",
                              "label-for": "input-3",
                            },
                          },
                          [
                            _c("b-form-input", {
                              attrs: {
                                id: "input-2",
                                placeholder: "Enter pass",
                                required: "",
                              },
                              model: {
                                value: _vm.form.password,
                                callback: function ($$v) {
                                  _vm.$set(_vm.form, "password", $$v)
                                },
                                expression: "form.password",
                              },
                            }),
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "b-overlay",
                          {
                            staticClass: "d-inline-block",
                            attrs: {
                              show: _vm.busy,
                              rounded: "",
                              opacity: "0.6",
                              "spinner-small": "",
                              "spinner-variant": "primary",
                            },
                          },
                          [
                            _c(
                              "b-button",
                              {
                                staticClass: "mr-1",
                                attrs: { type: "submit", variant: "primary" },
                              },
                              [_vm._v("Submit")]
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    )
                  : _vm._e(),
                _vm._v(" "),
                _c(
                  "p",
                  { staticClass: "p-2" },
                  [
                    _vm._v(
                      "\n                    Dont have an account?\n                    "
                    ),
                    _c("b-link", { attrs: { to: "/register" } }, [
                      _vm._v("Register"),
                    ]),
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "p",
                  { staticClass: "p-2" },
                  [
                    _c("b-link", { attrs: { to: "/forgotPassword" } }, [
                      _vm._v("Forgot Password?"),
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
    ),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/ClientApp/Pages/ProfilePage.vue?vue&type=template&id=39aef526&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/ClientApp/Pages/ProfilePage.vue?vue&type=template&id=39aef526& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
  return _c("b-container", [
    _c("div", { staticClass: "profile" }, [
      _c("div", [_c("h1", [_vm._v("Profile")])]),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-lg-4" }, [
          _c("div", { staticClass: "card mb-4" }, [
            _c("div", { staticClass: "card-body text-center" }, [
              _c("div", { staticClass: "container" }, [
                _c("div", { staticClass: "picture-container" }, [
                  _c("div", { staticClass: "picture" }, [
                    _c("img", {
                      ref: "profile_pic",
                      staticClass: "picture-src",
                      attrs: {
                        src: _vm.user.profile_photo_path_full_url,
                        title: "",
                      },
                    }),
                    _vm._v(" "),
                    _c("input", {
                      ref: "profile_pic_input",
                      attrs: { type: "file" },
                      on: { change: _vm.previewFile },
                    }),
                  ]),
                ]),
              ]),
              _vm._v(" "),
              _c("h5", { staticClass: "my-3" }, [
                _vm._v(_vm._s(_vm.user.name)),
              ]),
              _vm._v(" "),
              _c("p", { staticClass: "text-muted mb-1" }, [
                _vm._v(
                  "\n                            " +
                    _vm._s(_vm.user.description) +
                    "\n                        "
                ),
              ]),
            ]),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "card mb-4 mb-lg-0" }, [
            _c("div", { staticClass: "card-body" }, [
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-sm-3" }, [
                  _c("p", { staticClass: "mb-0" }, [_vm._v("Full Name")]),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-sm-9" }, [
                  _c("p", { staticClass: "text-muted mb-0" }, [
                    _vm._v(
                      "\n                                    " +
                        _vm._s(_vm.user.name) +
                        "\n                                "
                    ),
                  ]),
                ]),
              ]),
              _vm._v(" "),
              _c("hr"),
              _vm._v(" "),
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-sm-3" }, [
                  _c("p", { staticClass: "mb-0" }, [_vm._v("Username")]),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-sm-9" }, [
                  _c("p", { staticClass: "text-muted mb-0" }, [
                    _vm._v(
                      "\n                                    " +
                        _vm._s(_vm.user.username) +
                        "\n                                "
                    ),
                  ]),
                ]),
              ]),
              _vm._v(" "),
              _c("hr"),
              _vm._v(" "),
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-sm-3" }, [
                  _c("p", { staticClass: "mb-0" }, [_vm._v("Email")]),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-sm-9" }, [
                  _c("p", { staticClass: "text-muted mb-0" }, [
                    _vm._v(
                      "\n                                    " +
                        _vm._s(_vm.user.email) +
                        "\n                                "
                    ),
                  ]),
                ]),
              ]),
              _vm._v(" "),
              _c("hr"),
              _vm._v(" "),
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-sm-3" }, [
                  _c("p", { staticClass: "mb-0" }, [_vm._v("Phone")]),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-sm-9" }, [
                  _c("p", { staticClass: "text-muted mb-0" }, [
                    _vm._v(
                      "\n                                    " +
                        _vm._s(_vm.user.phone) +
                        "\n                                "
                    ),
                  ]),
                ]),
              ]),
              _vm._v(" "),
              _c("hr"),
              _vm._v(" "),
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-sm-3" }, [
                  _c("p", { staticClass: "mb-0" }, [_vm._v("Mobile")]),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-sm-9" }, [
                  _c("p", { staticClass: "text-muted mb-0" }, [
                    _vm._v(
                      "\n                                    " +
                        _vm._s(_vm.user.cellphone) +
                        "\n                                "
                    ),
                  ]),
                ]),
              ]),
              _vm._v(" "),
              _c("hr"),
            ]),
          ]),
        ]),
      ]),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/ClientApp/Pages/RegisterPage.vue?vue&type=template&id=73ed4174&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/ClientApp/Pages/RegisterPage.vue?vue&type=template&id=73ed4174& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
  return _c("b-container", [
    _c(
      "div",
      { staticClass: "blah" },
      [
        _c(
          "b-card",
          { attrs: { title: "Register", "sub-title": "" } },
          [
            _c(
              "b-card-text",
              [
                _vm.show
                  ? _c(
                      "b-form",
                      { on: { submit: _vm.onSubmit, reset: _vm.onReset } },
                      [
                        _c(
                          "b-form-group",
                          {
                            attrs: {
                              id: "input-group-1",
                              label: "Email address:",
                              "label-for": "input-1",
                              description:
                                "We'll never share your email with anyone else.",
                            },
                          },
                          [
                            _c("b-form-input", {
                              attrs: {
                                id: "input-1",
                                type: "email",
                                placeholder: "Enter email",
                              },
                              model: {
                                value: _vm.form.email,
                                callback: function ($$v) {
                                  _vm.$set(_vm.form, "email", $$v)
                                },
                                expression: "form.email",
                              },
                            }),
                            _vm._v(" "),
                            _c("p", {
                              staticClass: "text-danger",
                              domProps: {
                                textContent: _vm._s(_vm.errors.email),
                              },
                            }),
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "b-form-group",
                          {
                            attrs: {
                              id: "input-group-1",
                              label: "Username:",
                              "label-for": "input-1",
                              description: "",
                            },
                          },
                          [
                            _c("b-form-input", {
                              attrs: {
                                id: "input-1",
                                type: "text",
                                placeholder: "Enter a username",
                              },
                              model: {
                                value: _vm.form.username,
                                callback: function ($$v) {
                                  _vm.$set(_vm.form, "username", $$v)
                                },
                                expression: "form.username",
                              },
                            }),
                            _vm._v(" "),
                            _c("p", {
                              staticClass: "text-danger",
                              domProps: {
                                textContent: _vm._s(_vm.errors.username),
                              },
                            }),
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "b-form-group",
                          {
                            attrs: {
                              id: "input-group-2",
                              label: "Your Name:",
                              "label-for": "input-2",
                            },
                          },
                          [
                            _c("b-form-input", {
                              attrs: {
                                id: "input-2",
                                placeholder: "Enter name",
                              },
                              model: {
                                value: _vm.form.name,
                                callback: function ($$v) {
                                  _vm.$set(_vm.form, "name", $$v)
                                },
                                expression: "form.name",
                              },
                            }),
                            _vm._v(" "),
                            _c("p", {
                              staticClass: "text-danger",
                              domProps: {
                                textContent: _vm._s(_vm.errors.name),
                              },
                            }),
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "b-form-group",
                          {
                            attrs: {
                              id: "input-group-2",
                              label: "A job description:",
                              "label-for": "input-2",
                            },
                          },
                          [
                            _c("b-form-input", {
                              attrs: {
                                id: "input-2",
                                placeholder: "Enter a job description",
                              },
                              model: {
                                value: _vm.form.job_description,
                                callback: function ($$v) {
                                  _vm.$set(_vm.form, "job_description", $$v)
                                },
                                expression: "form.job_description",
                              },
                            }),
                            _vm._v(" "),
                            _c("p", {
                              staticClass: "text-danger",
                              domProps: {
                                textContent: _vm._s(_vm.errors.job_description),
                              },
                            }),
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "b-form-group",
                          {
                            attrs: {
                              id: "input-group-2",
                              label: "Your phone:",
                              "label-for": "input-2",
                            },
                          },
                          [
                            _c("b-form-input", {
                              attrs: {
                                id: "input-2",
                                placeholder: "Enter a phone number",
                              },
                              model: {
                                value: _vm.form.phone,
                                callback: function ($$v) {
                                  _vm.$set(_vm.form, "phone", $$v)
                                },
                                expression: "form.phone",
                              },
                            }),
                            _vm._v(" "),
                            _c("p", {
                              staticClass: "text-danger",
                              domProps: {
                                textContent: _vm._s(_vm.errors.phone),
                              },
                            }),
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "b-form-group",
                          {
                            attrs: {
                              id: "input-group-2",
                              label: "Your cellphone:",
                              "label-for": "input-2",
                            },
                          },
                          [
                            _c("b-form-input", {
                              attrs: {
                                id: "input-2",
                                placeholder: "Enter a cellphone number",
                              },
                              model: {
                                value: _vm.form.cellphone,
                                callback: function ($$v) {
                                  _vm.$set(_vm.form, "cellphone", $$v)
                                },
                                expression: "form.cellphone",
                              },
                            }),
                            _vm._v(" "),
                            _c("p", {
                              staticClass: "text-danger",
                              domProps: {
                                textContent: _vm._s(_vm.errors.cellphone),
                              },
                            }),
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "b-form-group",
                          {
                            attrs: {
                              id: "input-group-2",
                              label: "Your address:",
                              "label-for": "input-2",
                            },
                          },
                          [
                            _c("b-form-input", {
                              attrs: {
                                id: "input-2",
                                placeholder: "Enter an address",
                              },
                              model: {
                                value: _vm.form.address,
                                callback: function ($$v) {
                                  _vm.$set(_vm.form, "address", $$v)
                                },
                                expression: "form.address",
                              },
                            }),
                            _vm._v(" "),
                            _c("p", {
                              staticClass: "text-danger",
                              domProps: {
                                textContent: _vm._s(_vm.errors.address),
                              },
                            }),
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "b-form-group",
                          {
                            attrs: {
                              id: "input-group-3",
                              label: "Your Pass:",
                              "label-for": "input-3",
                            },
                          },
                          [
                            _c("b-form-input", {
                              attrs: {
                                id: "input-2",
                                placeholder: "Enter pass",
                              },
                              model: {
                                value: _vm.form.password,
                                callback: function ($$v) {
                                  _vm.$set(_vm.form, "password", $$v)
                                },
                                expression: "form.password",
                              },
                            }),
                            _vm._v(" "),
                            _c("p", {
                              staticClass: "text-danger",
                              domProps: {
                                textContent: _vm._s(_vm.errors.password),
                              },
                            }),
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "b-form-group",
                          {
                            attrs: {
                              id: "input-group-4",
                              label: "Your Pass Confirm:",
                              "label-for": "input-4",
                            },
                          },
                          [
                            _c("b-form-input", {
                              attrs: {
                                id: "input-2",
                                placeholder: "Enter pass confirmation",
                              },
                              model: {
                                value: _vm.form.password_confirmation,
                                callback: function ($$v) {
                                  _vm.$set(
                                    _vm.form,
                                    "password_confirmation",
                                    $$v
                                  )
                                },
                                expression: "form.password_confirmation",
                              },
                            }),
                            _vm._v(" "),
                            _c("p", {
                              staticClass: "text-danger",
                              domProps: {
                                textContent: _vm._s(_vm.errors.password),
                              },
                            }),
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "b-overlay",
                          {
                            staticClass: "d-inline-block",
                            attrs: {
                              show: _vm.busy,
                              rounded: "",
                              opacity: "0.6",
                              "spinner-small": "",
                              "spinner-variant": "primary",
                            },
                          },
                          [
                            _c(
                              "b-button",
                              {
                                staticClass: "mr-1",
                                attrs: { type: "submit", variant: "primary" },
                              },
                              [_vm._v("Submit")]
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    )
                  : _vm._e(),
                _vm._v(" "),
                _c(
                  "p",
                  { staticClass: "p-2" },
                  [
                    _vm._v("\n                    Have an account? "),
                    _c("b-link", { attrs: { to: "/login" } }, [
                      _vm._v("Login"),
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
    ),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/ClientApp/Pages/SettingsPage.vue?vue&type=template&id=80236218&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/ClientApp/Pages/SettingsPage.vue?vue&type=template&id=80236218& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
  return _c("b-container", [
    _c("div", { staticClass: "settings" }, [
      _c("div", [_c("h1", {}, [_vm._v("Settings")])]),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col" }, [
          _c("div", { staticClass: "card mb-4" }, [
            _c(
              "div",
              { staticClass: "card-body p-0" },
              [_c("UserDetailsForm")],
              1
            ),
          ]),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col" }, [
          _c(
            "div",
            { staticClass: "card mb-4 mb-md-0" },
            [_c("UserPrivacyForm")],
            1
          ),
        ]),
      ]),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/ClientApp/Pages/UserBookmarksPage.vue?vue&type=template&id=49910722&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/ClientApp/Pages/UserBookmarksPage.vue?vue&type=template&id=49910722& ***!
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
  return _c("b-container", [
    _c("div", { staticClass: "about" }, [
      _c("div", [_c("h1", [_vm._v("UserBookmarks")])]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "row" },
        [
          _vm._l(_vm.userBoomarks.data, function (entity, i) {
            return _c(
              "div",
              { staticClass: "col-lg-4" },
              [_c("EntityCard", { attrs: { entity: entity } })],
              1
            )
          }),
          _vm._v(" "),
          _vm.userBoomarks.length == 0
            ? _c(
                "div",
                [
                  _c(
                    "b-card",
                    {
                      staticClass: "text-center",
                      attrs: { "bg-variant": "light", header: "Light" },
                    },
                    [_c("b-card-text", [_vm._v(" NO hay resultados")])],
                    1
                  ),
                ],
                1
              )
            : _vm._e(),
        ],
        2
      ),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/ClientApp/Pages/UserEntitiesPage.vue?vue&type=template&id=1560817d&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/ClientApp/Pages/UserEntitiesPage.vue?vue&type=template&id=1560817d& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
  return _c("b-container", [
    _c(
      "div",
      { staticClass: "about" },
      [
        _c("div", [_c("h1", [_vm._v("UserEntities")])]),
        _vm._v(" "),
        _c(
          "b-card",
          {
            attrs: {
              title: "",
              "header-tag": "header",
              "footer-tag": "footer",
            },
            scopedSlots: _vm._u([
              {
                key: "header",
                fn: function () {
                  return [
                    _c("h6", { staticClass: "mb-0 mt-0" }, [
                      _vm._v("User Entities"),
                    ]),
                  ]
                },
                proxy: true,
              },
              {
                key: "footer",
                fn: function () {
                  return [_c("em", [_vm._v("Remember to save your changes")])]
                },
                proxy: true,
              },
            ]),
          },
          [
            _vm._v(" "),
            _c("b-card-text", [
              _c("div", { staticClass: "mb-4 mb-md-0" }, [
                _c(
                  "div",
                  {},
                  [
                    _c(
                      "p",
                      { staticClass: "mb-4" },
                      [
                        _c(
                          "b-button",
                          {
                            attrs: { type: "submit", variant: "primary" },
                            on: {
                              click: function ($event) {
                                _vm.showModal = !_vm.showModal
                              },
                            },
                          },
                          [
                            _c("b-icon", {
                              attrs: { icon: "plus", "aria-label": "Help" },
                            }),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _vm._l(_vm.userEntities, function (entity, i) {
                      return _c(
                        "div",
                        { key: i },
                        [
                          entity.user_id !== entity.created_by_user_id
                            ? _c(
                                "span",
                                [
                                  _c("b-icon", {
                                    attrs: {
                                      id: "disabled-wrapper" + i,
                                      icon: "exclamation-circle-fill",
                                      variant: "warning",
                                    },
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "b-tooltip",
                                    {
                                      attrs: {
                                        variant: "warning",
                                        target: "disabled-wrapper" + i,
                                      },
                                    },
                                    [_vm._v("You dont own this entity")]
                                  ),
                                ],
                                1
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _c(
                            "h6",
                            { staticClass: "mb-2" },
                            [
                              _vm._v(
                                "\n                                Entity Name:\n                                "
                              ),
                              _c(
                                "span",
                                { staticClass: "text-muted mr-2" },
                                [
                                  _c(
                                    "b-link",
                                    {
                                      attrs: {
                                        to: "/entity/" + entity.username,
                                      },
                                    },
                                    [_vm._v(_vm._s(entity.name))]
                                  ),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                {
                                  staticClass: "mb-2",
                                  attrs: {
                                    size: "sm",
                                    variant: "outline-secondary",
                                  },
                                  on: {
                                    click: function ($event) {
                                      return _vm.editEntity(entity)
                                    },
                                  },
                                },
                                [
                                  _c("b-icon", {
                                    attrs: {
                                      icon: "gear-fill",
                                      "aria-label": "Help",
                                    },
                                  }),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("p", {
                            staticClass: "mb-2",
                            staticStyle: { "font-size": "0.77rem" },
                          }),
                          _vm._v(
                            "\n                            Categories:\n                            "
                          ),
                          _vm._l(entity.categories, function (cat, i) {
                            return _c("h6", { key: i }, [
                              _vm._v(
                                "\n                                " +
                                  _vm._s(cat.name) +
                                  "\n                            "
                              ),
                            ])
                          }),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass: "progress rounded mb-2",
                              staticStyle: { height: "5px" },
                            },
                            [
                              _c("div", {
                                staticClass: "progress-bar",
                                staticStyle: { width: "66%" },
                                attrs: {
                                  role: "progressbar",
                                  "aria-valuenow": "66",
                                  "aria-valuemin": "0",
                                  "aria-valuemax": "100",
                                },
                              }),
                            ]
                          ),
                          _vm._v(" "),
                          _c("hr"),
                        ],
                        2
                      )
                    }),
                  ],
                  2
                ),
              ]),
            ]),
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "b-modal",
          {
            attrs: {
              size: "xl",
              centered: "",
              "hide-footer": true,
              id: "modal-1",
              title: "Add/Edit Entity",
            },
            on: {
              hidden: function ($event) {
                _vm.toEntityForm = {}
              },
            },
            model: {
              value: _vm.showModal,
              callback: function ($$v) {
                _vm.showModal = $$v
              },
              expression: "showModal",
            },
          },
          [_c("EntityDetailsForm", { attrs: { entity: _vm.toEntityForm } })],
          1
        ),
      ],
      1
    ),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);