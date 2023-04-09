(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/image/cropper"],{

/***/ 253:
/*!*********************************************************************!*\
  !*** D:/用户目录/我的文档/HBuilderProjects/资讯/components/image/cropper.vue ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cropper_vue_vue_type_template_id_b1001ba4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cropper.vue?vue&type=template&id=b1001ba4&scoped=true& */ 254);
/* harmony import */ var _cropper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cropper.vue?vue&type=script&lang=js& */ 256);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _cropper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _cropper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _cropper_vue_vue_type_style_index_0_id_b1001ba4_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cropper.vue?vue&type=style&index=0&id=b1001ba4&scoped=true&lang=scss& */ 258);
/* harmony import */ var _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 10);

var renderjs





/* normalize component */

var component = Object(_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _cropper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _cropper_vue_vue_type_template_id_b1001ba4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _cropper_vue_vue_type_template_id_b1001ba4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "b1001ba4",
  null,
  false,
  _cropper_vue_vue_type_template_id_b1001ba4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "components/image/cropper.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 254:
/*!****************************************************************************************************************!*\
  !*** D:/用户目录/我的文档/HBuilderProjects/资讯/components/image/cropper.vue?vue&type=template&id=b1001ba4&scoped=true& ***!
  \****************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_cropper_vue_vue_type_template_id_b1001ba4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./cropper.vue?vue&type=template&id=b1001ba4&scoped=true& */ 255);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_cropper_vue_vue_type_template_id_b1001ba4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_cropper_vue_vue_type_template_id_b1001ba4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_cropper_vue_vue_type_template_id_b1001ba4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_cropper_vue_vue_type_template_id_b1001ba4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 255:
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/用户目录/我的文档/HBuilderProjects/资讯/components/image/cropper.vue?vue&type=template&id=b1001ba4&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 256:
/*!**********************************************************************************************!*\
  !*** D:/用户目录/我的文档/HBuilderProjects/资讯/components/image/cropper.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_cropper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./cropper.vue?vue&type=script&lang=js& */ 257);
/* harmony import */ var _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_cropper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_cropper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_cropper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_cropper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_cropper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 257:
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/用户目录/我的文档/HBuilderProjects/资讯/components/image/cropper.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var _default =
{
  props: {
    url: {
      type: String,
      default: '' },

    fixed: {
      type: Boolean,
      default: false },

    width: {
      type: Number,
      default: 200 },

    height: {
      type: Number,
      default: 200 },

    maxWidth: {
      type: Number,
      default: 1024 },

    maxHeight: {
      type: Number,
      default: 1024 },

    blob: {
      type: Boolean,
      default: false } },


  data: function data() {
    return {
      mask: {
        show: false },

      frame: {
        left: 50,
        top: 50,
        width: this.width / 1.5,
        height: this.height / 1.5 },

      image: {
        left: 20,
        top: 20,
        width: 300,
        height: 400 },

      real: {
        width: 100,
        height: 100 },

      target: {
        width: this.width,
        height: this.height },

      touches: [],
      type: '',
      start: {
        frame: {
          left: 0,
          top: 0,
          width: 0,
          height: 0 },

        image: {
          left: 0,
          top: 0,
          width: 0,
          height: 0 } },


      timeoutId: -1,
      context: null };

  },
  mounted: function mounted() {





    this.context = uni.createCanvasContext('canvas', this);
    this.targetContext = uni.createCanvasContext('target', this);
  },
  methods: {
    imageLoad: function imageLoad(ev) {var _this = this;
      this.mask.show = true;
      this.real.width = ev.detail.width;
      this.real.height = ev.detail.height;
      this.image.width = ev.detail.width;
      this.image.height = ev.detail.height;
      this.frame.width = this.width / 1.5;
      this.frame.height = this.height / 1.5;
      if (!this.fixed) {
        this.frame.width = this.image.width;
        this.frame.height = this.image.height;
      }
      var query = uni.createSelectorQuery().in(this);
      query.
      select('.body').
      boundingClientRect(function (data) {
        var bw = data.width;
        var bh = data.height;
        var fw = _this.frame.width;
        var fh = _this.frame.height;
        var tw = bw * 0.8;
        var th = bh * 0.8;
        var sx = tw / fw;
        var sy = th / fh;
        var scale = sx;
        if (sx < sy) {
          scale = sy;
        }
        tw = fw * scale;
        th = fh * scale;
        var tx = (bw - tw) / 2;
        var ty = (bh - th) / 2;
        _this.frame.width = tw;
        _this.frame.height = th;
        _this.frame.left = tx;
        _this.frame.top = ty;

        var iw = _this.image.width;
        var ih = _this.image.height;
        sx = tw / iw;
        sy = th / ih;
        scale = sx;
        if (sx < sy) {
          scale = sy;
        }
        _this.image.width = iw * scale;
        _this.image.height = ih * scale;
        _this.image.left = (bw - _this.image.width) / 2;
        _this.image.top = (bh - _this.image.height) / 2;
        setTimeout(function () {
          _this.trimImage();
        }, 100);
      }).
      exec();
    },
    touchHandle: function touchHandle() {},
    touchStart: function touchStart(ev, type) {
      this.stopTime();
      this.mask.show = false;
      if (this.touches.length == 0) {
        this.type = type;
        this.start.frame.left = this.frame.left;
        this.start.frame.top = this.frame.top;
        this.start.frame.width = this.frame.width;
        this.start.frame.height = this.frame.height;
        this.start.image.left = this.image.left;
        this.start.image.top = this.image.top;
        this.start.image.width = this.image.width;
        this.start.image.height = this.image.height;
      }
      var touches = ev.changedTouches;
      for (var i = 0; i < touches.length; i++) {
        var touch = touches[i];
        // this.touches[touch.identifier] = touch;
        this.touches.push(touch);
      }
    },
    touchMove: function touchMove(ev) {
      this.stopTime();
      ev.preventDefault();
      var touches = ev.touches;
      if (this.touches.length == 1) {
        if (this.type == 'plank' || this.type == 'frame' || this.fixed) {
          this.moveImage(this.touches[0], touches[0]);
        } else {
          this.scaleFrame(this.touches[0], touches[0], this.type);
        }
      } else if (this.touches.length == 2 && touches.length == 2) {
        var ta = this.touches[0];
        var tb = this.touches[1];
        var tc = touches[0];
        var td = touches[1];
        if (ta.identifier != tc.identifier) {
          var temp = tc;
          tc = td;
          td = temp;
        }
        this.scaleImage(ta, tb, tc, td);
      }
    },
    touchEnd: function touchEnd(ev) {
      this.type = '';
      this.touches = [];
      this.startTime();
    },
    touchCancel: function touchCancel(ev) {
      this.type = '';
      this.touches = [];
      this.startTime();
    },
    startTime: function startTime() {var _this2 = this;
      this.stopTime();
      this.timeoutId = setTimeout(function () {
        _this2.trimImage();
      }, 800);
    },
    stopTime: function stopTime() {
      if (this.timeoutId >= 0) {
        clearTimeout(this.timeoutId);
        this.timeoutId = -1;
      }
    },
    trimImage: function trimImage() {var _this3 = this;
      this.mask.show = true;
      var query = uni.createSelectorQuery().in(this);
      query.
      select('.body').
      boundingClientRect(function (data) {
        var bw = data.width;
        var bh = data.height;
        var fw = _this3.frame.width;
        var fh = _this3.frame.height;
        var tw = bw * 0.8;
        var th = bh * 0.8;
        var sx = tw / fw;
        var sy = th / fh;
        var scale = sx;
        if (sx > sy) {
          scale = sy;
        }
        tw = fw * scale;
        th = fh * scale;
        var tx = (bw - tw) / 2;
        var ty = (bh - th) / 2;
        var ax = tx - _this3.frame.left + (_this3.frame.left - _this3.image.left) * (1 - scale);
        var ay = ty - _this3.frame.top + (_this3.frame.top - _this3.image.top) * (1 - scale);
        _this3.frame.width = tw;
        _this3.frame.height = th;
        _this3.frame.left = tx;
        _this3.frame.top = ty;
        _this3.image.width *= scale;
        _this3.image.height *= scale;
        _this3.image.left += ax;
        _this3.image.top += ay;
      }).
      exec();
      setTimeout(function () {
        var scale = _this3.image.width / _this3.real.width;
        var x = (_this3.frame.left - _this3.image.left) / scale;
        var y = (_this3.frame.top - _this3.image.top) / scale;
        var width = _this3.frame.width / scale;
        var height = _this3.frame.height / scale;
        _this3.context.drawImage(_this3.url, x, y, width, height, 0, 0, _this3.frame.width, _this3.frame.height);
        _this3.context.draw(false);
      }, 100);
    },
    moveImage: function moveImage(ta, tb) {
      var ax = tb.clientX - ta.clientX;
      var ay = tb.clientY - ta.clientY;
      this.image.left = this.start.image.left + ax;
      this.image.top = this.start.image.top + ay;
      if (this.image.left > this.frame.left) {
        this.image.left = this.frame.left;
      }
      if (this.image.top > this.frame.top) {
        this.image.top = this.frame.top;
      }
      if (this.image.left + this.image.width < this.frame.left + this.frame.width) {
        this.image.left = this.frame.left + this.frame.width - this.image.width;
      }
      if (this.image.top + this.image.height < this.frame.top + this.frame.height) {
        this.image.top = this.frame.top + this.frame.height - this.image.height;
      }
    },
    scaleImage: function scaleImage(ta, tb, tc, td) {
      var x1 = ta.clientX;
      var y1 = ta.clientY;
      var x2 = tb.clientX;
      var y2 = tb.clientY;
      var x3 = tc.clientX;
      var y3 = tc.clientY;
      var x4 = td.clientX;
      var y4 = td.clientY;
      var ol = Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
      var el = Math.sqrt((x3 - x4) * (x3 - x4) + (y3 - y4) * (y3 - y4));
      var ocx = (x1 + x2) / 2;
      var ocy = (y1 + y2) / 2;
      var ecx = (x3 + x4) / 2;
      var ecy = (y3 + y4) / 2;
      var ax = ecx - ocx;
      var ay = ecy - ocy;
      var scale = el / ol;
      if (this.start.image.width * scale < this.frame.width) {
        scale = this.frame.width / this.start.image.width;
      }
      if (this.start.image.height * scale < this.frame.height) {
        scale = this.frame.height / this.start.image.height;
      }
      if (this.start.image.width * scale < this.frame.width) {
        scale = this.frame.width / this.start.image.width;
      }
      this.image.left = this.start.image.left + ax - (ocx - this.start.image.left) * (scale - 1);
      this.image.top = this.start.image.top + ay - (ocy - this.start.image.top) * (scale - 1);
      this.image.width = this.start.image.width * scale;
      this.image.height = this.start.image.height * scale;
      if (this.image.left > this.frame.left) {
        this.image.left = this.frame.left;
      }
      if (this.image.top > this.frame.top) {
        this.image.top = this.frame.top;
      }
      if (this.image.left + this.image.width < this.frame.left + this.frame.width) {
        this.image.left = this.frame.left + this.frame.width - this.image.width;
      }
      if (this.image.top + this.image.height < this.frame.top + this.frame.height) {
        this.image.top = this.frame.top + this.frame.height - this.image.height;
      }
    },
    scaleFrame: function scaleFrame(ta, tb, type) {
      var ax = tb.clientX - ta.clientX;
      var ay = tb.clientY - ta.clientY;
      var x1 = this.start.frame.left;
      var y1 = this.start.frame.top;
      var x2 = this.start.frame.left + this.start.frame.width;
      var y2 = this.start.frame.top + this.start.frame.height;
      if (type == 'left') {
        x1 += ax;
      } else if (type == 'right') {
        x2 += ax;
      } else if (type == 'top') {
        y1 += ay;
      } else if (type == 'bottom') {
        y2 += ay;
      } else if (type == 'left-top') {
        x1 += ax;
        y1 += ay;
      } else if (type == 'left-bottom') {
        x1 += ax;
        y2 += ay;
      } else if (type == 'right-top') {
        x2 += ax;
        y1 += ay;
      } else if (type == 'right-bottom') {
        x2 += ax;
        y2 += ay;
      }
      if (x1 < this.image.left) {
        x1 = this.image.left;
      }
      if (y1 < this.image.top) {
        y1 = this.image.top;
      }
      if (x2 > this.image.left + this.image.width) {
        x2 = this.image.left + this.image.width;
      }
      if (y2 > this.image.top + this.image.height) {
        y2 = this.image.top + this.image.height;
      }
      this.frame.left = x1;
      this.frame.top = y1;
      this.frame.width = x2 - x1;
      this.frame.height = y2 - y1;
    },
    parseBlob: function parseBlob(base64) {
      var arr = base64.split(',');
      var mime = arr[0].match(/:(.*?);/)[1];
      var bstr = atob(arr[1]);
      var n = bstr.length;
      var u8arr = new Uint8Array(n);
      for (var i = 0; i < n; i++) {
        u8arr[i] = bstr.charCodeAt(i);
      }
      var url = URL || webkitURL;
      return url.createObjectURL(new Blob([u8arr], { type: mime }));
    },
    confirm: function confirm() {var _this4 = this;
      var scale = this.image.width / this.real.width;
      var x = (this.frame.left - this.image.left) / scale;
      var y = (this.frame.top - this.image.top) / scale;
      var width = this.frame.width / scale;
      var height = this.frame.height / scale;
      var tw = width;
      var th = height;
      if (this.fixed) {
        tw = this.width / 1.5 / 2;
        th = this.height / 1.5 / 2;
      } else {
        if (tw > this.maxWidth / 2) {
          var sc = this.maxWidth / 2 / tw;
          tw = tw * sc;
          th = th * sc;
        }
        if (th > this.maxHeight / 2) {
          var sc = this.maxHeight / 2 / th;
          th = th * sc;
          tw = tw * sc;
        }
      }
      this.target.width = tw;
      this.target.height = th;
      uni.showLoading({
        title: '图片裁剪…' });

      setTimeout(function () {
        _this4.targetContext.drawImage(_this4.url, x, y, width, height, 0, 0, tw, th);
        _this4.targetContext.draw(false, function () {
          setTimeout(function () {
            uni.canvasToTempFilePath(
            {
              canvasId: 'target',
              success: function success(res) {
                var path = res.tempFilePath;





                _this4.$emit('ok', {
                  path: path });

              },
              fail: function fail(ev) {
                console.log(ev);
              },
              complete: function complete() {
                uni.hideLoading();
              } },

            _this4);
          }, 200);
        });
      }, 200);
    },
    cancel: function cancel() {
      this.$emit('cancel');
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 258:
/*!*******************************************************************************************************************************!*\
  !*** D:/用户目录/我的文档/HBuilderProjects/资讯/components/image/cropper.vue?vue&type=style&index=0&id=b1001ba4&scoped=true&lang=scss& ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_cropper_vue_vue_type_style_index_0_id_b1001ba4_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-1-3!../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./cropper.vue?vue&type=style&index=0&id=b1001ba4&scoped=true&lang=scss& */ 259);
/* harmony import */ var _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_cropper_vue_vue_type_style_index_0_id_b1001ba4_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_cropper_vue_vue_type_style_index_0_id_b1001ba4_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_cropper_vue_vue_type_style_index_0_id_b1001ba4_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_cropper_vue_vue_type_style_index_0_id_b1001ba4_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_cropper_vue_vue_type_style_index_0_id_b1001ba4_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 259:
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/用户目录/我的文档/HBuilderProjects/资讯/components/image/cropper.vue?vue&type=style&index=0&id=b1001ba4&scoped=true&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vRDov55So5oi355uu5b2VL+aIkeeahOaWh+ahoy9IQnVpbGRlclByb2plY3RzL+i1hOiury9jb21wb25lbnRzL2ltYWdlL2Nyb3BwZXIudnVlP2E1ZmUiLCJ3ZWJwYWNrOi8vL0Q6L+eUqOaIt+ebruW9lS/miJHnmoTmlofmoaMvSEJ1aWxkZXJQcm9qZWN0cy/otYTorq8vY29tcG9uZW50cy9pbWFnZS9jcm9wcGVyLnZ1ZT83MWU0Iiwid2VicGFjazovLy9EOi/nlKjmiLfnm67lvZUv5oiR55qE5paH5qGjL0hCdWlsZGVyUHJvamVjdHMv6LWE6K6vL2NvbXBvbmVudHMvaW1hZ2UvY3JvcHBlci52dWU/MTAwMCIsIndlYnBhY2s6Ly8vRDov55So5oi355uu5b2VL+aIkeeahOaWh+ahoy9IQnVpbGRlclByb2plY3RzL+i1hOiury9jb21wb25lbnRzL2ltYWdlL2Nyb3BwZXIudnVlPzU1ZTkiLCJ1bmktYXBwOi8vL2NvbXBvbmVudHMvaW1hZ2UvY3JvcHBlci52dWUiLCJ3ZWJwYWNrOi8vL0Q6L+eUqOaIt+ebruW9lS/miJHnmoTmlofmoaMvSEJ1aWxkZXJQcm9qZWN0cy/otYTorq8vY29tcG9uZW50cy9pbWFnZS9jcm9wcGVyLnZ1ZT8wMGE0Iiwid2VicGFjazovLy9EOi/nlKjmiLfnm67lvZUv5oiR55qE5paH5qGjL0hCdWlsZGVyUHJvamVjdHMv6LWE6K6vL2NvbXBvbmVudHMvaW1hZ2UvY3JvcHBlci52dWU/ZDU1YiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWdJO0FBQ2hJO0FBQzJEO0FBQ0w7QUFDc0M7OztBQUc1RjtBQUN1TDtBQUN2TCxnQkFBZ0IsMkxBQVU7QUFDMUIsRUFBRSw2RUFBTTtBQUNSLEVBQUUsOEZBQU07QUFDUixFQUFFLHVHQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLGtHQUFVO0FBQ1o7QUFDQTs7QUFFQTtB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ZSI6ImNvbXBvbmVudHMvaW1hZ2UvY3JvcHBlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vY3JvcHBlci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YjEwMDFiYTQmc2NvcGVkPXRydWUmXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9jcm9wcGVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vY3JvcHBlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vY3JvcHBlci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1iMTAwMWJhNCZzY29wZWQ9dHJ1ZSZsYW5nPXNjc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcImIxMDAxYmE0XCIsXG4gIG51bGwsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImNvbXBvbmVudHMvaW1hZ2UvY3JvcHBlci52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTE2LTAhLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi90ZW1wbGF0ZS5qcyEuLi8uLi8uLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci9wYWdlLW1ldGEuanMhLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL2Nyb3BwZXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWIxMDAxYmE0JnNjb3BlZD10cnVlJlwiIiwidmFyIGNvbXBvbmVudHNcbnZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxufVxudmFyIHJlY3ljbGFibGVSZW5kZXIgPSBmYWxzZVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEyLTEhLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zY3JpcHQuanMhLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL2Nyb3BwZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xMi0xIS4uLy4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc2NyaXB0LmpzIS4uLy4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi9jcm9wcGVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsIjx0ZW1wbGF0ZT5cclxuXHQ8dmlldyB2LXNob3c9XCJ1cmxcIiBjbGFzcz1cImNyb3BwZXJcIj5cclxuXHRcdDxjYW52YXMgOnN0eWxlPVwieyB3aWR0aDogdGFyZ2V0LndpZHRoICsgJ3B4JywgaGVpZ2h0OiB0YXJnZXQuaGVpZ2h0ICsgJ3B4JyB9XCIgY2FudmFzLWlkPVwidGFyZ2V0XCI+PC9jYW52YXM+XHJcblx0XHQ8dmlldyBjbGFzcz1cImJvZHlcIj5cclxuXHRcdFx0PGltYWdlXHJcblx0XHRcdFx0di1pZj1cInVybFwiXHJcblx0XHRcdFx0Y2xhc3M9XCJpbWFnZVwiXHJcblx0XHRcdFx0QGxvYWQ9XCJpbWFnZUxvYWRcIlxyXG5cdFx0XHRcdDpzdHlsZT1cInsgbGVmdDogaW1hZ2UubGVmdCArICdweCcsIHRvcDogaW1hZ2UudG9wICsgJ3B4Jywgd2lkdGg6IGltYWdlLndpZHRoICsgJ3B4JywgaGVpZ2h0OiBpbWFnZS5oZWlnaHQgKyAncHgnIH1cIlxyXG5cdFx0XHRcdDpzcmM9XCJ1cmxcIlxyXG5cdFx0XHQ+PC9pbWFnZT5cclxuXHRcdFx0PHZpZXcgdi1pZj1cIm1hc2suc2hvd1wiIGNsYXNzPVwibWFza1wiPjwvdmlldz5cclxuXHRcdFx0PHZpZXcgQHRvdWNoc3RhcnQ9XCJ0b3VjaFN0YXJ0KCRldmVudCwgJ3BsYW5rJylcIiBAdG91Y2htb3ZlPVwidG91Y2hNb3ZlXCIgQHRvdWNoZW5kPVwidG91Y2hFbmRcIiBAdG91Y2hjYW5jZWw9XCJ0b3VjaENhbmNlbFwiIGNsYXNzPVwicGxhbmtcIj5cclxuXHRcdFx0XHQ8dmlld1xyXG5cdFx0XHRcdFx0Y2xhc3M9XCJmcmFtZVwiXHJcblx0XHRcdFx0XHRAdG91Y2hzdGFydD1cInRvdWNoU3RhcnQoJGV2ZW50LCAnZnJhbWUnKVwiXHJcblx0XHRcdFx0XHRAdG91Y2hzdGFydC5zdG9wLnByZXZlbnQ9XCJ0b3VjaEhhbmRsZVwiXHJcblx0XHRcdFx0XHQ6c3R5bGU9XCJ7IGxlZnQ6IGZyYW1lLmxlZnQgKyAncHgnLCB0b3A6IGZyYW1lLnRvcCArICdweCcsIHdpZHRoOiBmcmFtZS53aWR0aCArICdweCcsIGhlaWdodDogZnJhbWUuaGVpZ2h0ICsgJ3B4JyB9XCJcclxuXHRcdFx0XHQ+XHJcblx0XHRcdFx0XHQ8Y2FudmFzIHYtaWY9XCJtYXNrLnNob3dcIiBjbGFzcz1cImNhbnZhc1wiIDpzdHlsZT1cInsgd2lkdGg6IGZyYW1lLndpZHRoICsgJ3B4JywgaGVpZ2h0OiBmcmFtZS5oZWlnaHQgKyAncHgnIH1cIiBjYW52YXMtaWQ9XCJjYW52YXNcIj48L2NhbnZhcz5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicmVjdFwiPjwvdmlldz5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwibGluZS1vbmVcIj48L3ZpZXc+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImxpbmUtdHdvXCI+PC92aWV3PlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJsaW5lLXRocmVlXCI+PC92aWV3PlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJsaW5lLWZvdXJcIj48L3ZpZXc+XHJcblx0XHRcdFx0XHQ8dmlldyBAdG91Y2hzdGFydD1cInRvdWNoU3RhcnQoJGV2ZW50LCAnbGVmdCcpXCIgQHRvdWNoc3RhcnQuc3RvcC5wcmV2ZW50PVwidG91Y2hIYW5kbGVcIiBjbGFzcz1cImZyYW1lLWxlZnRcIj48L3ZpZXc+XHJcblx0XHRcdFx0XHQ8dmlldyBAdG91Y2hzdGFydD1cInRvdWNoU3RhcnQoJGV2ZW50LCAncmlnaHQnKVwiIEB0b3VjaHN0YXJ0LnN0b3AucHJldmVudD1cInRvdWNoSGFuZGxlXCIgY2xhc3M9XCJmcmFtZS1yaWdodFwiPjwvdmlldz5cclxuXHRcdFx0XHRcdDx2aWV3IEB0b3VjaHN0YXJ0PVwidG91Y2hTdGFydCgkZXZlbnQsICd0b3AnKVwiIEB0b3VjaHN0YXJ0LnN0b3AucHJldmVudD1cInRvdWNoSGFuZGxlXCIgY2xhc3M9XCJmcmFtZS10b3BcIj48L3ZpZXc+XHJcblx0XHRcdFx0XHQ8dmlldyBAdG91Y2hzdGFydD1cInRvdWNoU3RhcnQoJGV2ZW50LCAnYm90dG9tJylcIiBAdG91Y2hzdGFydC5zdG9wLnByZXZlbnQ9XCJ0b3VjaEhhbmRsZVwiIGNsYXNzPVwiZnJhbWUtYm90dG9tXCI+PC92aWV3PlxyXG5cdFx0XHRcdFx0PHZpZXcgQHRvdWNoc3RhcnQ9XCJ0b3VjaFN0YXJ0KCRldmVudCwgJ2xlZnQtdG9wJylcIiBAdG91Y2hzdGFydC5zdG9wLnByZXZlbnQ9XCJ0b3VjaEhhbmRsZVwiIGNsYXNzPVwiZnJhbWUtbGVmdC10b3BcIj48L3ZpZXc+XHJcblx0XHRcdFx0XHQ8dmlldyBAdG91Y2hzdGFydD1cInRvdWNoU3RhcnQoJGV2ZW50LCAnbGVmdC1ib3R0b20nKVwiIEB0b3VjaHN0YXJ0LnN0b3AucHJldmVudD1cInRvdWNoSGFuZGxlXCIgY2xhc3M9XCJmcmFtZS1sZWZ0LWJvdHRvbVwiPjwvdmlldz5cclxuXHRcdFx0XHRcdDx2aWV3IEB0b3VjaHN0YXJ0PVwidG91Y2hTdGFydCgkZXZlbnQsICdyaWdodC10b3AnKVwiIEB0b3VjaHN0YXJ0LnN0b3AucHJldmVudD1cInRvdWNoSGFuZGxlXCIgY2xhc3M9XCJmcmFtZS1yaWdodC10b3BcIj48L3ZpZXc+XHJcblx0XHRcdFx0XHQ8dmlldyBAdG91Y2hzdGFydD1cInRvdWNoU3RhcnQoJGV2ZW50LCAncmlnaHQtYm90dG9tJylcIiBAdG91Y2hzdGFydC5zdG9wLnByZXZlbnQ9XCJ0b3VjaEhhbmRsZVwiIGNsYXNzPVwiZnJhbWUtcmlnaHQtYm90dG9tXCI+PC92aWV3PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0PC92aWV3PlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJ0b29sYmFyXCI+XHJcblx0XHRcdDxidXR0b24gQHRhcD1cImNhbmNlbFwiIGNsYXNzPVwiYnRuLWNhbmNlbFwiPuWPlua2iDwvYnV0dG9uPlxyXG5cdFx0XHQ8YnV0dG9uIEB0YXA9XCJjb25maXJtXCIgY2xhc3M9XCJidG4tb2tcIj7noa7lrpo8L2J1dHRvbj5cclxuXHRcdDwvdmlldz5cclxuXHQ8L3ZpZXc+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5leHBvcnQgZGVmYXVsdCB7XHJcblx0cHJvcHM6IHtcclxuXHRcdHVybDoge1xyXG5cdFx0XHR0eXBlOiBTdHJpbmcsXHJcblx0XHRcdGRlZmF1bHQ6ICcnXHJcblx0XHR9LFxyXG5cdFx0Zml4ZWQ6IHtcclxuXHRcdFx0dHlwZTogQm9vbGVhbixcclxuXHRcdFx0ZGVmYXVsdDogZmFsc2VcclxuXHRcdH0sXHJcblx0XHR3aWR0aDoge1xyXG5cdFx0XHR0eXBlOiBOdW1iZXIsXHJcblx0XHRcdGRlZmF1bHQ6IDIwMFxyXG5cdFx0fSxcclxuXHRcdGhlaWdodDoge1xyXG5cdFx0XHR0eXBlOiBOdW1iZXIsXHJcblx0XHRcdGRlZmF1bHQ6IDIwMFxyXG5cdFx0fSxcclxuXHRcdG1heFdpZHRoOiB7XHJcblx0XHRcdHR5cGU6IE51bWJlcixcclxuXHRcdFx0ZGVmYXVsdDogMTAyNFxyXG5cdFx0fSxcclxuXHRcdG1heEhlaWdodDoge1xyXG5cdFx0XHR0eXBlOiBOdW1iZXIsXHJcblx0XHRcdGRlZmF1bHQ6IDEwMjRcclxuXHRcdH0sXHJcblx0XHRibG9iOiB7XHJcblx0XHRcdHR5cGU6IEJvb2xlYW4sXHJcblx0XHRcdGRlZmF1bHQ6IGZhbHNlXHJcblx0XHR9XHJcblx0fSxcclxuXHRkYXRhKCkge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0bWFzazoge1xyXG5cdFx0XHRcdHNob3c6IGZhbHNlXHJcblx0XHRcdH0sXHJcblx0XHRcdGZyYW1lOiB7XHJcblx0XHRcdFx0bGVmdDogNTAsXHJcblx0XHRcdFx0dG9wOiA1MCxcclxuXHRcdFx0XHR3aWR0aDogdGhpcy53aWR0aCAvIDEuNSxcclxuXHRcdFx0XHRoZWlnaHQ6IHRoaXMuaGVpZ2h0IC8gMS41XHJcblx0XHRcdH0sXHJcblx0XHRcdGltYWdlOiB7XHJcblx0XHRcdFx0bGVmdDogMjAsXHJcblx0XHRcdFx0dG9wOiAyMCxcclxuXHRcdFx0XHR3aWR0aDogMzAwLFxyXG5cdFx0XHRcdGhlaWdodDogNDAwXHJcblx0XHRcdH0sXHJcblx0XHRcdHJlYWw6IHtcclxuXHRcdFx0XHR3aWR0aDogMTAwLFxyXG5cdFx0XHRcdGhlaWdodDogMTAwXHJcblx0XHRcdH0sXHJcblx0XHRcdHRhcmdldDoge1xyXG5cdFx0XHRcdHdpZHRoOiB0aGlzLndpZHRoLFxyXG5cdFx0XHRcdGhlaWdodDogdGhpcy5oZWlnaHRcclxuXHRcdFx0fSxcclxuXHRcdFx0dG91Y2hlczogW10sXHJcblx0XHRcdHR5cGU6ICcnLFxyXG5cdFx0XHRzdGFydDoge1xyXG5cdFx0XHRcdGZyYW1lOiB7XHJcblx0XHRcdFx0XHRsZWZ0OiAwLFxyXG5cdFx0XHRcdFx0dG9wOiAwLFxyXG5cdFx0XHRcdFx0d2lkdGg6IDAsXHJcblx0XHRcdFx0XHRoZWlnaHQ6IDBcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdGltYWdlOiB7XHJcblx0XHRcdFx0XHRsZWZ0OiAwLFxyXG5cdFx0XHRcdFx0dG9wOiAwLFxyXG5cdFx0XHRcdFx0d2lkdGg6IDAsXHJcblx0XHRcdFx0XHRoZWlnaHQ6IDBcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdHRpbWVvdXRJZDogLTEsXHJcblx0XHRcdGNvbnRleHQ6IG51bGxcclxuXHRcdH07XHJcblx0fSxcclxuXHRtb3VudGVkKCkge1xyXG5cdFx0Ly8jaWZkZWYgSDVcclxuXHRcdHRoaXMuJGVsLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIGV2ID0+IHtcclxuXHRcdFx0ZXYucHJldmVudERlZmF1bHQoKTtcclxuXHRcdH0pO1xyXG5cdFx0Ly8gI2VuZGlmXHJcblx0XHR0aGlzLmNvbnRleHQgPSB1bmkuY3JlYXRlQ2FudmFzQ29udGV4dCgnY2FudmFzJywgdGhpcyk7XHJcblx0XHR0aGlzLnRhcmdldENvbnRleHQgPSB1bmkuY3JlYXRlQ2FudmFzQ29udGV4dCgndGFyZ2V0JywgdGhpcyk7XHJcblx0fSxcclxuXHRtZXRob2RzOiB7XHJcblx0XHRpbWFnZUxvYWQoZXYpIHtcclxuXHRcdFx0dGhpcy5tYXNrLnNob3cgPSB0cnVlO1xyXG5cdFx0XHR0aGlzLnJlYWwud2lkdGggPSBldi5kZXRhaWwud2lkdGg7XHJcblx0XHRcdHRoaXMucmVhbC5oZWlnaHQgPSBldi5kZXRhaWwuaGVpZ2h0O1xyXG5cdFx0XHR0aGlzLmltYWdlLndpZHRoID0gZXYuZGV0YWlsLndpZHRoO1xyXG5cdFx0XHR0aGlzLmltYWdlLmhlaWdodCA9IGV2LmRldGFpbC5oZWlnaHQ7XHJcblx0XHRcdHRoaXMuZnJhbWUud2lkdGggPSB0aGlzLndpZHRoIC8gMS41O1xyXG5cdFx0XHR0aGlzLmZyYW1lLmhlaWdodCA9IHRoaXMuaGVpZ2h0IC8gMS41O1xyXG5cdFx0XHRpZiAoIXRoaXMuZml4ZWQpIHtcclxuXHRcdFx0XHR0aGlzLmZyYW1lLndpZHRoID0gdGhpcy5pbWFnZS53aWR0aDtcclxuXHRcdFx0XHR0aGlzLmZyYW1lLmhlaWdodCA9IHRoaXMuaW1hZ2UuaGVpZ2h0O1xyXG5cdFx0XHR9XHJcblx0XHRcdHZhciBxdWVyeSA9IHVuaS5jcmVhdGVTZWxlY3RvclF1ZXJ5KCkuaW4odGhpcyk7XHJcblx0XHRcdHF1ZXJ5XHJcblx0XHRcdFx0LnNlbGVjdCgnLmJvZHknKVxyXG5cdFx0XHRcdC5ib3VuZGluZ0NsaWVudFJlY3QoZGF0YSA9PiB7XHJcblx0XHRcdFx0XHR2YXIgYncgPSBkYXRhLndpZHRoO1xyXG5cdFx0XHRcdFx0dmFyIGJoID0gZGF0YS5oZWlnaHQ7XHJcblx0XHRcdFx0XHR2YXIgZncgPSB0aGlzLmZyYW1lLndpZHRoO1xyXG5cdFx0XHRcdFx0dmFyIGZoID0gdGhpcy5mcmFtZS5oZWlnaHQ7XHJcblx0XHRcdFx0XHR2YXIgdHcgPSBidyAqIDAuODtcclxuXHRcdFx0XHRcdHZhciB0aCA9IGJoICogMC44O1xyXG5cdFx0XHRcdFx0dmFyIHN4ID0gdHcgLyBmdztcclxuXHRcdFx0XHRcdHZhciBzeSA9IHRoIC8gZmg7XHJcblx0XHRcdFx0XHR2YXIgc2NhbGUgPSBzeDtcclxuXHRcdFx0XHRcdGlmIChzeCA8IHN5KSB7XHJcblx0XHRcdFx0XHRcdHNjYWxlID0gc3k7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR0dyA9IGZ3ICogc2NhbGU7XHJcblx0XHRcdFx0XHR0aCA9IGZoICogc2NhbGU7XHJcblx0XHRcdFx0XHR2YXIgdHggPSAoYncgLSB0dykgLyAyO1xyXG5cdFx0XHRcdFx0dmFyIHR5ID0gKGJoIC0gdGgpIC8gMjtcclxuXHRcdFx0XHRcdHRoaXMuZnJhbWUud2lkdGggPSB0dztcclxuXHRcdFx0XHRcdHRoaXMuZnJhbWUuaGVpZ2h0ID0gdGg7XHJcblx0XHRcdFx0XHR0aGlzLmZyYW1lLmxlZnQgPSB0eDtcclxuXHRcdFx0XHRcdHRoaXMuZnJhbWUudG9wID0gdHk7XHJcblxyXG5cdFx0XHRcdFx0dmFyIGl3ID0gdGhpcy5pbWFnZS53aWR0aDtcclxuXHRcdFx0XHRcdHZhciBpaCA9IHRoaXMuaW1hZ2UuaGVpZ2h0O1xyXG5cdFx0XHRcdFx0c3ggPSB0dyAvIGl3O1xyXG5cdFx0XHRcdFx0c3kgPSB0aCAvIGloO1xyXG5cdFx0XHRcdFx0c2NhbGUgPSBzeDtcclxuXHRcdFx0XHRcdGlmIChzeCA8IHN5KSB7XHJcblx0XHRcdFx0XHRcdHNjYWxlID0gc3k7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR0aGlzLmltYWdlLndpZHRoID0gaXcgKiBzY2FsZTtcclxuXHRcdFx0XHRcdHRoaXMuaW1hZ2UuaGVpZ2h0ID0gaWggKiBzY2FsZTtcclxuXHRcdFx0XHRcdHRoaXMuaW1hZ2UubGVmdCA9IChidyAtIHRoaXMuaW1hZ2Uud2lkdGgpIC8gMjtcclxuXHRcdFx0XHRcdHRoaXMuaW1hZ2UudG9wID0gKGJoIC0gdGhpcy5pbWFnZS5oZWlnaHQpIC8gMjtcclxuXHRcdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHR0aGlzLnRyaW1JbWFnZSgpO1xyXG5cdFx0XHRcdFx0fSwgMTAwKTtcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdC5leGVjKCk7XHJcblx0XHR9LFxyXG5cdFx0dG91Y2hIYW5kbGUoKSB7fSxcclxuXHRcdHRvdWNoU3RhcnQoZXYsIHR5cGUpIHtcclxuXHRcdFx0dGhpcy5zdG9wVGltZSgpO1xyXG5cdFx0XHR0aGlzLm1hc2suc2hvdyA9IGZhbHNlO1xyXG5cdFx0XHRpZiAodGhpcy50b3VjaGVzLmxlbmd0aCA9PSAwKSB7XHJcblx0XHRcdFx0dGhpcy50eXBlID0gdHlwZTtcclxuXHRcdFx0XHR0aGlzLnN0YXJ0LmZyYW1lLmxlZnQgPSB0aGlzLmZyYW1lLmxlZnQ7XHJcblx0XHRcdFx0dGhpcy5zdGFydC5mcmFtZS50b3AgPSB0aGlzLmZyYW1lLnRvcDtcclxuXHRcdFx0XHR0aGlzLnN0YXJ0LmZyYW1lLndpZHRoID0gdGhpcy5mcmFtZS53aWR0aDtcclxuXHRcdFx0XHR0aGlzLnN0YXJ0LmZyYW1lLmhlaWdodCA9IHRoaXMuZnJhbWUuaGVpZ2h0O1xyXG5cdFx0XHRcdHRoaXMuc3RhcnQuaW1hZ2UubGVmdCA9IHRoaXMuaW1hZ2UubGVmdDtcclxuXHRcdFx0XHR0aGlzLnN0YXJ0LmltYWdlLnRvcCA9IHRoaXMuaW1hZ2UudG9wO1xyXG5cdFx0XHRcdHRoaXMuc3RhcnQuaW1hZ2Uud2lkdGggPSB0aGlzLmltYWdlLndpZHRoO1xyXG5cdFx0XHRcdHRoaXMuc3RhcnQuaW1hZ2UuaGVpZ2h0ID0gdGhpcy5pbWFnZS5oZWlnaHQ7XHJcblx0XHRcdH1cclxuXHRcdFx0dmFyIHRvdWNoZXMgPSBldi5jaGFuZ2VkVG91Y2hlcztcclxuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0b3VjaGVzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0dmFyIHRvdWNoID0gdG91Y2hlc1tpXTtcclxuXHRcdFx0XHQvLyB0aGlzLnRvdWNoZXNbdG91Y2guaWRlbnRpZmllcl0gPSB0b3VjaDtcclxuXHRcdFx0XHR0aGlzLnRvdWNoZXMucHVzaCh0b3VjaCk7XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHR0b3VjaE1vdmUoZXYpIHtcclxuXHRcdFx0dGhpcy5zdG9wVGltZSgpO1xyXG5cdFx0XHRldi5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHR2YXIgdG91Y2hlcyA9IGV2LnRvdWNoZXM7XHJcblx0XHRcdGlmICh0aGlzLnRvdWNoZXMubGVuZ3RoID09IDEpIHtcclxuXHRcdFx0XHRpZiAodGhpcy50eXBlID09ICdwbGFuaycgfHwgdGhpcy50eXBlID09ICdmcmFtZScgfHwgdGhpcy5maXhlZCkge1xyXG5cdFx0XHRcdFx0dGhpcy5tb3ZlSW1hZ2UodGhpcy50b3VjaGVzWzBdLCB0b3VjaGVzWzBdKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0dGhpcy5zY2FsZUZyYW1lKHRoaXMudG91Y2hlc1swXSwgdG91Y2hlc1swXSwgdGhpcy50eXBlKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0gZWxzZSBpZiAodGhpcy50b3VjaGVzLmxlbmd0aCA9PSAyICYmIHRvdWNoZXMubGVuZ3RoID09IDIpIHtcclxuXHRcdFx0XHR2YXIgdGEgPSB0aGlzLnRvdWNoZXNbMF07XHJcblx0XHRcdFx0dmFyIHRiID0gdGhpcy50b3VjaGVzWzFdO1xyXG5cdFx0XHRcdHZhciB0YyA9IHRvdWNoZXNbMF07XHJcblx0XHRcdFx0dmFyIHRkID0gdG91Y2hlc1sxXTtcclxuXHRcdFx0XHRpZiAodGEuaWRlbnRpZmllciAhPSB0Yy5pZGVudGlmaWVyKSB7XHJcblx0XHRcdFx0XHR2YXIgdGVtcCA9IHRjO1xyXG5cdFx0XHRcdFx0dGMgPSB0ZDtcclxuXHRcdFx0XHRcdHRkID0gdGVtcDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dGhpcy5zY2FsZUltYWdlKHRhLCB0YiwgdGMsIHRkKTtcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdHRvdWNoRW5kKGV2KSB7XHJcblx0XHRcdHRoaXMudHlwZSA9ICcnO1xyXG5cdFx0XHR0aGlzLnRvdWNoZXMgPSBbXTtcclxuXHRcdFx0dGhpcy5zdGFydFRpbWUoKTtcclxuXHRcdH0sXHJcblx0XHR0b3VjaENhbmNlbChldikge1xyXG5cdFx0XHR0aGlzLnR5cGUgPSAnJztcclxuXHRcdFx0dGhpcy50b3VjaGVzID0gW107XHJcblx0XHRcdHRoaXMuc3RhcnRUaW1lKCk7XHJcblx0XHR9LFxyXG5cdFx0c3RhcnRUaW1lKCkge1xyXG5cdFx0XHR0aGlzLnN0b3BUaW1lKCk7XHJcblx0XHRcdHRoaXMudGltZW91dElkID0gc2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0dGhpcy50cmltSW1hZ2UoKTtcclxuXHRcdFx0fSwgODAwKTtcclxuXHRcdH0sXHJcblx0XHRzdG9wVGltZSgpIHtcclxuXHRcdFx0aWYgKHRoaXMudGltZW91dElkID49IDApIHtcclxuXHRcdFx0XHRjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0SWQpO1xyXG5cdFx0XHRcdHRoaXMudGltZW91dElkID0gLTE7XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHR0cmltSW1hZ2UoKSB7XHJcblx0XHRcdHRoaXMubWFzay5zaG93ID0gdHJ1ZTtcclxuXHRcdFx0dmFyIHF1ZXJ5ID0gdW5pLmNyZWF0ZVNlbGVjdG9yUXVlcnkoKS5pbih0aGlzKTtcclxuXHRcdFx0cXVlcnlcclxuXHRcdFx0XHQuc2VsZWN0KCcuYm9keScpXHJcblx0XHRcdFx0LmJvdW5kaW5nQ2xpZW50UmVjdChkYXRhID0+IHtcclxuXHRcdFx0XHRcdHZhciBidyA9IGRhdGEud2lkdGg7XHJcblx0XHRcdFx0XHR2YXIgYmggPSBkYXRhLmhlaWdodDtcclxuXHRcdFx0XHRcdHZhciBmdyA9IHRoaXMuZnJhbWUud2lkdGg7XHJcblx0XHRcdFx0XHR2YXIgZmggPSB0aGlzLmZyYW1lLmhlaWdodDtcclxuXHRcdFx0XHRcdHZhciB0dyA9IGJ3ICogMC44O1xyXG5cdFx0XHRcdFx0dmFyIHRoID0gYmggKiAwLjg7XHJcblx0XHRcdFx0XHR2YXIgc3ggPSB0dyAvIGZ3O1xyXG5cdFx0XHRcdFx0dmFyIHN5ID0gdGggLyBmaDtcclxuXHRcdFx0XHRcdHZhciBzY2FsZSA9IHN4O1xyXG5cdFx0XHRcdFx0aWYgKHN4ID4gc3kpIHtcclxuXHRcdFx0XHRcdFx0c2NhbGUgPSBzeTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdHR3ID0gZncgKiBzY2FsZTtcclxuXHRcdFx0XHRcdHRoID0gZmggKiBzY2FsZTtcclxuXHRcdFx0XHRcdHZhciB0eCA9IChidyAtIHR3KSAvIDI7XHJcblx0XHRcdFx0XHR2YXIgdHkgPSAoYmggLSB0aCkgLyAyO1xyXG5cdFx0XHRcdFx0dmFyIGF4ID0gdHggLSB0aGlzLmZyYW1lLmxlZnQgKyAodGhpcy5mcmFtZS5sZWZ0IC0gdGhpcy5pbWFnZS5sZWZ0KSAqICgxIC0gc2NhbGUpO1xyXG5cdFx0XHRcdFx0dmFyIGF5ID0gdHkgLSB0aGlzLmZyYW1lLnRvcCArICh0aGlzLmZyYW1lLnRvcCAtIHRoaXMuaW1hZ2UudG9wKSAqICgxIC0gc2NhbGUpO1xyXG5cdFx0XHRcdFx0dGhpcy5mcmFtZS53aWR0aCA9IHR3O1xyXG5cdFx0XHRcdFx0dGhpcy5mcmFtZS5oZWlnaHQgPSB0aDtcclxuXHRcdFx0XHRcdHRoaXMuZnJhbWUubGVmdCA9IHR4O1xyXG5cdFx0XHRcdFx0dGhpcy5mcmFtZS50b3AgPSB0eTtcclxuXHRcdFx0XHRcdHRoaXMuaW1hZ2Uud2lkdGggKj0gc2NhbGU7XHJcblx0XHRcdFx0XHR0aGlzLmltYWdlLmhlaWdodCAqPSBzY2FsZTtcclxuXHRcdFx0XHRcdHRoaXMuaW1hZ2UubGVmdCArPSBheDtcclxuXHRcdFx0XHRcdHRoaXMuaW1hZ2UudG9wICs9IGF5O1xyXG5cdFx0XHRcdH0pXHJcblx0XHRcdFx0LmV4ZWMoKTtcclxuXHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0dmFyIHNjYWxlID0gdGhpcy5pbWFnZS53aWR0aCAvIHRoaXMucmVhbC53aWR0aDtcclxuXHRcdFx0XHR2YXIgeCA9ICh0aGlzLmZyYW1lLmxlZnQgLSB0aGlzLmltYWdlLmxlZnQpIC8gc2NhbGU7XHJcblx0XHRcdFx0dmFyIHkgPSAodGhpcy5mcmFtZS50b3AgLSB0aGlzLmltYWdlLnRvcCkgLyBzY2FsZTtcclxuXHRcdFx0XHR2YXIgd2lkdGggPSB0aGlzLmZyYW1lLndpZHRoIC8gc2NhbGU7XHJcblx0XHRcdFx0dmFyIGhlaWdodCA9IHRoaXMuZnJhbWUuaGVpZ2h0IC8gc2NhbGU7XHJcblx0XHRcdFx0dGhpcy5jb250ZXh0LmRyYXdJbWFnZSh0aGlzLnVybCwgeCwgeSwgd2lkdGgsIGhlaWdodCwgMCwgMCwgdGhpcy5mcmFtZS53aWR0aCwgdGhpcy5mcmFtZS5oZWlnaHQpO1xyXG5cdFx0XHRcdHRoaXMuY29udGV4dC5kcmF3KGZhbHNlKTtcclxuXHRcdFx0fSwgMTAwKTtcclxuXHRcdH0sXHJcblx0XHRtb3ZlSW1hZ2UodGEsIHRiKSB7XHJcblx0XHRcdHZhciBheCA9IHRiLmNsaWVudFggLSB0YS5jbGllbnRYO1xyXG5cdFx0XHR2YXIgYXkgPSB0Yi5jbGllbnRZIC0gdGEuY2xpZW50WTtcclxuXHRcdFx0dGhpcy5pbWFnZS5sZWZ0ID0gdGhpcy5zdGFydC5pbWFnZS5sZWZ0ICsgYXg7XHJcblx0XHRcdHRoaXMuaW1hZ2UudG9wID0gdGhpcy5zdGFydC5pbWFnZS50b3AgKyBheTtcclxuXHRcdFx0aWYgKHRoaXMuaW1hZ2UubGVmdCA+IHRoaXMuZnJhbWUubGVmdCkge1xyXG5cdFx0XHRcdHRoaXMuaW1hZ2UubGVmdCA9IHRoaXMuZnJhbWUubGVmdDtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAodGhpcy5pbWFnZS50b3AgPiB0aGlzLmZyYW1lLnRvcCkge1xyXG5cdFx0XHRcdHRoaXMuaW1hZ2UudG9wID0gdGhpcy5mcmFtZS50b3A7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKHRoaXMuaW1hZ2UubGVmdCArIHRoaXMuaW1hZ2Uud2lkdGggPCB0aGlzLmZyYW1lLmxlZnQgKyB0aGlzLmZyYW1lLndpZHRoKSB7XHJcblx0XHRcdFx0dGhpcy5pbWFnZS5sZWZ0ID0gdGhpcy5mcmFtZS5sZWZ0ICsgdGhpcy5mcmFtZS53aWR0aCAtIHRoaXMuaW1hZ2Uud2lkdGg7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKHRoaXMuaW1hZ2UudG9wICsgdGhpcy5pbWFnZS5oZWlnaHQgPCB0aGlzLmZyYW1lLnRvcCArIHRoaXMuZnJhbWUuaGVpZ2h0KSB7XHJcblx0XHRcdFx0dGhpcy5pbWFnZS50b3AgPSB0aGlzLmZyYW1lLnRvcCArIHRoaXMuZnJhbWUuaGVpZ2h0IC0gdGhpcy5pbWFnZS5oZWlnaHQ7XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRzY2FsZUltYWdlKHRhLCB0YiwgdGMsIHRkKSB7XHJcblx0XHRcdHZhciB4MSA9IHRhLmNsaWVudFg7XHJcblx0XHRcdHZhciB5MSA9IHRhLmNsaWVudFk7XHJcblx0XHRcdHZhciB4MiA9IHRiLmNsaWVudFg7XHJcblx0XHRcdHZhciB5MiA9IHRiLmNsaWVudFk7XHJcblx0XHRcdHZhciB4MyA9IHRjLmNsaWVudFg7XHJcblx0XHRcdHZhciB5MyA9IHRjLmNsaWVudFk7XHJcblx0XHRcdHZhciB4NCA9IHRkLmNsaWVudFg7XHJcblx0XHRcdHZhciB5NCA9IHRkLmNsaWVudFk7XHJcblx0XHRcdHZhciBvbCA9IE1hdGguc3FydCgoeDEgLSB4MikgKiAoeDEgLSB4MikgKyAoeTEgLSB5MikgKiAoeTEgLSB5MikpO1xyXG5cdFx0XHR2YXIgZWwgPSBNYXRoLnNxcnQoKHgzIC0geDQpICogKHgzIC0geDQpICsgKHkzIC0geTQpICogKHkzIC0geTQpKTtcclxuXHRcdFx0dmFyIG9jeCA9ICh4MSArIHgyKSAvIDI7XHJcblx0XHRcdHZhciBvY3kgPSAoeTEgKyB5MikgLyAyO1xyXG5cdFx0XHR2YXIgZWN4ID0gKHgzICsgeDQpIC8gMjtcclxuXHRcdFx0dmFyIGVjeSA9ICh5MyArIHk0KSAvIDI7XHJcblx0XHRcdHZhciBheCA9IGVjeCAtIG9jeDtcclxuXHRcdFx0dmFyIGF5ID0gZWN5IC0gb2N5O1xyXG5cdFx0XHR2YXIgc2NhbGUgPSBlbCAvIG9sO1xyXG5cdFx0XHRpZiAodGhpcy5zdGFydC5pbWFnZS53aWR0aCAqIHNjYWxlIDwgdGhpcy5mcmFtZS53aWR0aCkge1xyXG5cdFx0XHRcdHNjYWxlID0gdGhpcy5mcmFtZS53aWR0aCAvIHRoaXMuc3RhcnQuaW1hZ2Uud2lkdGg7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKHRoaXMuc3RhcnQuaW1hZ2UuaGVpZ2h0ICogc2NhbGUgPCB0aGlzLmZyYW1lLmhlaWdodCkge1xyXG5cdFx0XHRcdHNjYWxlID0gdGhpcy5mcmFtZS5oZWlnaHQgLyB0aGlzLnN0YXJ0LmltYWdlLmhlaWdodDtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAodGhpcy5zdGFydC5pbWFnZS53aWR0aCAqIHNjYWxlIDwgdGhpcy5mcmFtZS53aWR0aCkge1xyXG5cdFx0XHRcdHNjYWxlID0gdGhpcy5mcmFtZS53aWR0aCAvIHRoaXMuc3RhcnQuaW1hZ2Uud2lkdGg7XHJcblx0XHRcdH1cclxuXHRcdFx0dGhpcy5pbWFnZS5sZWZ0ID0gdGhpcy5zdGFydC5pbWFnZS5sZWZ0ICsgYXggLSAob2N4IC0gdGhpcy5zdGFydC5pbWFnZS5sZWZ0KSAqIChzY2FsZSAtIDEpO1xyXG5cdFx0XHR0aGlzLmltYWdlLnRvcCA9IHRoaXMuc3RhcnQuaW1hZ2UudG9wICsgYXkgLSAob2N5IC0gdGhpcy5zdGFydC5pbWFnZS50b3ApICogKHNjYWxlIC0gMSk7XHJcblx0XHRcdHRoaXMuaW1hZ2Uud2lkdGggPSB0aGlzLnN0YXJ0LmltYWdlLndpZHRoICogc2NhbGU7XHJcblx0XHRcdHRoaXMuaW1hZ2UuaGVpZ2h0ID0gdGhpcy5zdGFydC5pbWFnZS5oZWlnaHQgKiBzY2FsZTtcclxuXHRcdFx0aWYgKHRoaXMuaW1hZ2UubGVmdCA+IHRoaXMuZnJhbWUubGVmdCkge1xyXG5cdFx0XHRcdHRoaXMuaW1hZ2UubGVmdCA9IHRoaXMuZnJhbWUubGVmdDtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAodGhpcy5pbWFnZS50b3AgPiB0aGlzLmZyYW1lLnRvcCkge1xyXG5cdFx0XHRcdHRoaXMuaW1hZ2UudG9wID0gdGhpcy5mcmFtZS50b3A7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKHRoaXMuaW1hZ2UubGVmdCArIHRoaXMuaW1hZ2Uud2lkdGggPCB0aGlzLmZyYW1lLmxlZnQgKyB0aGlzLmZyYW1lLndpZHRoKSB7XHJcblx0XHRcdFx0dGhpcy5pbWFnZS5sZWZ0ID0gdGhpcy5mcmFtZS5sZWZ0ICsgdGhpcy5mcmFtZS53aWR0aCAtIHRoaXMuaW1hZ2Uud2lkdGg7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKHRoaXMuaW1hZ2UudG9wICsgdGhpcy5pbWFnZS5oZWlnaHQgPCB0aGlzLmZyYW1lLnRvcCArIHRoaXMuZnJhbWUuaGVpZ2h0KSB7XHJcblx0XHRcdFx0dGhpcy5pbWFnZS50b3AgPSB0aGlzLmZyYW1lLnRvcCArIHRoaXMuZnJhbWUuaGVpZ2h0IC0gdGhpcy5pbWFnZS5oZWlnaHQ7XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRzY2FsZUZyYW1lKHRhLCB0YiwgdHlwZSkge1xyXG5cdFx0XHR2YXIgYXggPSB0Yi5jbGllbnRYIC0gdGEuY2xpZW50WDtcclxuXHRcdFx0dmFyIGF5ID0gdGIuY2xpZW50WSAtIHRhLmNsaWVudFk7XHJcblx0XHRcdHZhciB4MSA9IHRoaXMuc3RhcnQuZnJhbWUubGVmdDtcclxuXHRcdFx0dmFyIHkxID0gdGhpcy5zdGFydC5mcmFtZS50b3A7XHJcblx0XHRcdHZhciB4MiA9IHRoaXMuc3RhcnQuZnJhbWUubGVmdCArIHRoaXMuc3RhcnQuZnJhbWUud2lkdGg7XHJcblx0XHRcdHZhciB5MiA9IHRoaXMuc3RhcnQuZnJhbWUudG9wICsgdGhpcy5zdGFydC5mcmFtZS5oZWlnaHQ7XHJcblx0XHRcdGlmICh0eXBlID09ICdsZWZ0Jykge1xyXG5cdFx0XHRcdHgxICs9IGF4O1xyXG5cdFx0XHR9IGVsc2UgaWYgKHR5cGUgPT0gJ3JpZ2h0Jykge1xyXG5cdFx0XHRcdHgyICs9IGF4O1xyXG5cdFx0XHR9IGVsc2UgaWYgKHR5cGUgPT0gJ3RvcCcpIHtcclxuXHRcdFx0XHR5MSArPSBheTtcclxuXHRcdFx0fSBlbHNlIGlmICh0eXBlID09ICdib3R0b20nKSB7XHJcblx0XHRcdFx0eTIgKz0gYXk7XHJcblx0XHRcdH0gZWxzZSBpZiAodHlwZSA9PSAnbGVmdC10b3AnKSB7XHJcblx0XHRcdFx0eDEgKz0gYXg7XHJcblx0XHRcdFx0eTEgKz0gYXk7XHJcblx0XHRcdH0gZWxzZSBpZiAodHlwZSA9PSAnbGVmdC1ib3R0b20nKSB7XHJcblx0XHRcdFx0eDEgKz0gYXg7XHJcblx0XHRcdFx0eTIgKz0gYXk7XHJcblx0XHRcdH0gZWxzZSBpZiAodHlwZSA9PSAncmlnaHQtdG9wJykge1xyXG5cdFx0XHRcdHgyICs9IGF4O1xyXG5cdFx0XHRcdHkxICs9IGF5O1xyXG5cdFx0XHR9IGVsc2UgaWYgKHR5cGUgPT0gJ3JpZ2h0LWJvdHRvbScpIHtcclxuXHRcdFx0XHR4MiArPSBheDtcclxuXHRcdFx0XHR5MiArPSBheTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAoeDEgPCB0aGlzLmltYWdlLmxlZnQpIHtcclxuXHRcdFx0XHR4MSA9IHRoaXMuaW1hZ2UubGVmdDtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAoeTEgPCB0aGlzLmltYWdlLnRvcCkge1xyXG5cdFx0XHRcdHkxID0gdGhpcy5pbWFnZS50b3A7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKHgyID4gdGhpcy5pbWFnZS5sZWZ0ICsgdGhpcy5pbWFnZS53aWR0aCkge1xyXG5cdFx0XHRcdHgyID0gdGhpcy5pbWFnZS5sZWZ0ICsgdGhpcy5pbWFnZS53aWR0aDtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAoeTIgPiB0aGlzLmltYWdlLnRvcCArIHRoaXMuaW1hZ2UuaGVpZ2h0KSB7XHJcblx0XHRcdFx0eTIgPSB0aGlzLmltYWdlLnRvcCArIHRoaXMuaW1hZ2UuaGVpZ2h0O1xyXG5cdFx0XHR9XHJcblx0XHRcdHRoaXMuZnJhbWUubGVmdCA9IHgxO1xyXG5cdFx0XHR0aGlzLmZyYW1lLnRvcCA9IHkxO1xyXG5cdFx0XHR0aGlzLmZyYW1lLndpZHRoID0geDIgLSB4MTtcclxuXHRcdFx0dGhpcy5mcmFtZS5oZWlnaHQgPSB5MiAtIHkxO1xyXG5cdFx0fSxcclxuXHRcdHBhcnNlQmxvYihiYXNlNjQpIHtcclxuXHRcdFx0dmFyIGFyciA9IGJhc2U2NC5zcGxpdCgnLCcpO1xyXG5cdFx0XHR2YXIgbWltZSA9IGFyclswXS5tYXRjaCgvOiguKj8pOy8pWzFdO1xyXG5cdFx0XHR2YXIgYnN0ciA9IGF0b2IoYXJyWzFdKTtcclxuXHRcdFx0dmFyIG4gPSBic3RyLmxlbmd0aDtcclxuXHRcdFx0dmFyIHU4YXJyID0gbmV3IFVpbnQ4QXJyYXkobik7XHJcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbjsgaSsrKSB7XHJcblx0XHRcdFx0dThhcnJbaV0gPSBic3RyLmNoYXJDb2RlQXQoaSk7XHJcblx0XHRcdH1cclxuXHRcdFx0dmFyIHVybCA9IFVSTCB8fCB3ZWJraXRVUkw7XHJcblx0XHRcdHJldHVybiB1cmwuY3JlYXRlT2JqZWN0VVJMKG5ldyBCbG9iKFt1OGFycl0sIHsgdHlwZTogbWltZSB9KSk7XHJcblx0XHR9LFxyXG5cdFx0Y29uZmlybSgpIHtcclxuXHRcdFx0dmFyIHNjYWxlID0gdGhpcy5pbWFnZS53aWR0aCAvIHRoaXMucmVhbC53aWR0aDtcclxuXHRcdFx0dmFyIHggPSAodGhpcy5mcmFtZS5sZWZ0IC0gdGhpcy5pbWFnZS5sZWZ0KSAvIHNjYWxlO1xyXG5cdFx0XHR2YXIgeSA9ICh0aGlzLmZyYW1lLnRvcCAtIHRoaXMuaW1hZ2UudG9wKSAvIHNjYWxlO1xyXG5cdFx0XHR2YXIgd2lkdGggPSB0aGlzLmZyYW1lLndpZHRoIC8gc2NhbGU7XHJcblx0XHRcdHZhciBoZWlnaHQgPSB0aGlzLmZyYW1lLmhlaWdodCAvIHNjYWxlO1xyXG5cdFx0XHR2YXIgdHcgPSB3aWR0aDtcclxuXHRcdFx0dmFyIHRoID0gaGVpZ2h0O1xyXG5cdFx0XHRpZiAodGhpcy5maXhlZCkge1xyXG5cdFx0XHRcdHR3ID0gdGhpcy53aWR0aCAvIDEuNSAvIDI7XHJcblx0XHRcdFx0dGggPSB0aGlzLmhlaWdodCAvIDEuNSAvIDI7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0aWYgKHR3ID4gdGhpcy5tYXhXaWR0aCAvIDIpIHtcclxuXHRcdFx0XHRcdHZhciBzYyA9IHRoaXMubWF4V2lkdGggLyAyIC8gdHc7XHJcblx0XHRcdFx0XHR0dyA9IHR3ICogc2M7XHJcblx0XHRcdFx0XHR0aCA9IHRoICogc2M7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmICh0aCA+IHRoaXMubWF4SGVpZ2h0IC8gMikge1xyXG5cdFx0XHRcdFx0dmFyIHNjID0gdGhpcy5tYXhIZWlnaHQgLyAyIC8gdGg7XHJcblx0XHRcdFx0XHR0aCA9IHRoICogc2M7XHJcblx0XHRcdFx0XHR0dyA9IHR3ICogc2M7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdHRoaXMudGFyZ2V0LndpZHRoID0gdHc7XHJcblx0XHRcdHRoaXMudGFyZ2V0LmhlaWdodCA9IHRoO1xyXG5cdFx0XHR1bmkuc2hvd0xvYWRpbmcoe1xyXG5cdFx0XHRcdHRpdGxlOiAn5Zu+54mH6KOB5Ymq4oCmJ1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0dGhpcy50YXJnZXRDb250ZXh0LmRyYXdJbWFnZSh0aGlzLnVybCwgeCwgeSwgd2lkdGgsIGhlaWdodCwgMCwgMCwgdHcsIHRoKTtcclxuXHRcdFx0XHR0aGlzLnRhcmdldENvbnRleHQuZHJhdyhmYWxzZSwgKCkgPT4ge1xyXG5cdFx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0XHR1bmkuY2FudmFzVG9UZW1wRmlsZVBhdGgoXHJcblx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRjYW52YXNJZDogJ3RhcmdldCcsXHJcblx0XHRcdFx0XHRcdFx0c3VjY2VzczogcmVzID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdHZhciBwYXRoID0gcmVzLnRlbXBGaWxlUGF0aDtcclxuXHRcdFx0XHRcdFx0XHRcdC8vICNpZmRlZiBINVxyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKHRoaXMuYmxvYikge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRwYXRoID0gdGhpcy5wYXJzZUJsb2IocGF0aCk7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHQvLyAjZW5kaWZcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMuJGVtaXQoJ29rJywge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRwYXRoOiBwYXRoXHJcblx0XHRcdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRcdGZhaWw6IGV2ID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKGV2KTtcclxuXHRcdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRcdGNvbXBsZXRlOiAoKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHR1bmkuaGlkZUxvYWRpbmcoKTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdHRoaXNcclxuXHRcdFx0XHRcdCl9LCAyMDApO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9LCAyMDApO1xyXG5cdFx0fSxcclxuXHRcdGNhbmNlbCgpIHtcclxuXHRcdFx0dGhpcy4kZW1pdCgnY2FuY2VsJyk7XHJcblx0XHR9XHJcblx0fVxyXG59O1xyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQgbGFuZz1cInNjc3NcIj5cclxuLmNyb3BwZXIge1xyXG5cdHBvc2l0aW9uOiBmaXhlZDtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRoZWlnaHQ6IDEwMCU7XHJcblx0dG9wOiAwO1xyXG5cdGxlZnQ6IDA7XHJcblx0ei1pbmRleDogOTk3O1xyXG59XHJcbi50b29sYmFyIHtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0aGVpZ2h0OiAxMjBycHg7XHJcblx0bGVmdDogMHJweDtcclxuXHRib3R0b206IDBycHg7XHJcblx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHRiYWNrZ3JvdW5kOiAjMDAwO1xyXG59XHJcbi5idG4tY2FuY2VsIHtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0bGVmdDogMTAwcnB4O1xyXG5cdHRvcDogMTJycHg7XHJcblx0Zm9udC1zaXplOiAzMHJweDtcclxuXHRwYWRkaW5nOiAwIDgwcnB4O1xyXG5cdGNvbG9yOiAjMzUzNTM1O1xyXG5cdGJvcmRlci1yYWRpdXM6IDE1MHJweDtcclxuXHRiYWNrZ3JvdW5kOiAjZmZmO1xyXG5cdGhlaWdodDogNzBycHg7XHJcblx0bGluZS1oZWlnaHQ6IDcwcnB4O1xyXG59XHJcbi5idG4tb2sge1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRyaWdodDogMTAwcnB4O1xyXG5cdHRvcDogMTJycHg7XHJcblx0Zm9udC1zaXplOiAzMHJweDtcclxuXHRwYWRkaW5nOiAwIDgwcnB4O1xyXG5cdGNvbG9yOiAjZmZmO1xyXG5cdGJvcmRlci1yYWRpdXM6IDE1MHJweDtcclxuXHRiYWNrZ3JvdW5kOiAjMDk5ZTU1O1xyXG5cdGhlaWdodDogNzBycHg7XHJcblx0bGluZS1oZWlnaHQ6IDcwcnB4O1xyXG59XHJcbi5ib2R5IHtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0bGVmdDogMHJweDtcclxuXHRyaWdodDogMHJweDtcclxuXHR0b3A6IDBycHg7XHJcblx0Ym90dG9tOiAxMjBycHg7XHJcblx0YmFja2dyb3VuZDogYmxhY2s7XHJcblx0b3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4ubWFzayB7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdGxlZnQ6IDBycHg7XHJcblx0cmlnaHQ6IDBycHg7XHJcblx0dG9wOiAwcnB4O1xyXG5cdGJvdHRvbTogMHJweDtcclxuXHRiYWNrZ3JvdW5kOiBibGFjaztcclxuXHRvcGFjaXR5OiAwLjQ7XHJcbn1cclxuLnBsYW5rIHtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0bGVmdDogMHJweDtcclxuXHRyaWdodDogMHJweDtcclxuXHR0b3A6IDBycHg7XHJcblx0Ym90dG9tOiAwcnB4O1xyXG59XHJcbi5pbWFnZSB7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcbi5mcmFtZSB7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcbi5jYW52YXMge1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHRsZWZ0OiAwcHg7XHJcblx0dG9wOiAwcHg7XHJcbn1cclxuLnJlY3Qge1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRsZWZ0OiAtMnB4O1xyXG5cdHRvcDogLTJweDtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRoZWlnaHQ6IDEwMCU7XHJcblx0Ym9yZGVyOiAycHggc29saWQgd2hpdGU7XHJcbn1cclxuLmxpbmUtb25lIHtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0aGVpZ2h0OiAxcHg7XHJcblx0YmFja2dyb3VuZDogd2hpdGU7XHJcblx0bGVmdDogMDtcclxuXHR0b3A6IDMzLjMlO1xyXG59XHJcbi5saW5lLXR3byB7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGhlaWdodDogMXB4O1xyXG5cdGJhY2tncm91bmQ6IHdoaXRlO1xyXG5cdGxlZnQ6IDA7XHJcblx0dG9wOiA2Ni43JTtcclxufVxyXG4ubGluZS10aHJlZSB7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHdpZHRoOiAxcHg7XHJcblx0aGVpZ2h0OiAxMDAlO1xyXG5cdGJhY2tncm91bmQ6IHdoaXRlO1xyXG5cdHRvcDogMDtcclxuXHRsZWZ0OiAzMy4zJTtcclxufVxyXG4ubGluZS1mb3VyIHtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0d2lkdGg6IDFweDtcclxuXHRoZWlnaHQ6IDEwMCU7XHJcblx0YmFja2dyb3VuZDogd2hpdGU7XHJcblx0dG9wOiAwO1xyXG5cdGxlZnQ6IDY2LjclO1xyXG59XHJcbi5mcmFtZS1sZWZ0IHtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0aGVpZ2h0OiAxMDAlO1xyXG5cdHdpZHRoOiA4cHg7XHJcblx0bGVmdDogLTRweDtcclxuXHR0b3A6IDA7XHJcbn1cclxuLmZyYW1lLXJpZ2h0IHtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0aGVpZ2h0OiAxMDAlO1xyXG5cdHdpZHRoOiA4cHg7XHJcblx0cmlnaHQ6IC00cHg7XHJcblx0dG9wOiAwO1xyXG59XHJcbi5mcmFtZS10b3Age1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRoZWlnaHQ6IDhweDtcclxuXHR0b3A6IC00cHg7XHJcblx0bGVmdDogMDtcclxufVxyXG4uZnJhbWUtYm90dG9tIHtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0aGVpZ2h0OiA4cHg7XHJcblx0Ym90dG9tOiAtNHB4O1xyXG5cdGxlZnQ6IDA7XHJcbn1cclxuLmZyYW1lLWxlZnQtdG9wIHtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0d2lkdGg6IDIwcHg7XHJcblx0aGVpZ2h0OiAyMHB4O1xyXG5cdGxlZnQ6IC02cHg7XHJcblx0dG9wOiAtNnB4O1xyXG5cdGJvcmRlci1sZWZ0OiA0cHggc29saWQgcmVkO1xyXG5cdGJvcmRlci10b3A6IDRweCBzb2xpZCByZWQ7XHJcbn1cclxuLmZyYW1lLWxlZnQtYm90dG9tIHtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0d2lkdGg6IDIwcHg7XHJcblx0aGVpZ2h0OiAyMHB4O1xyXG5cdGxlZnQ6IC02cHg7XHJcblx0Ym90dG9tOiAtNnB4O1xyXG5cdGJvcmRlci1sZWZ0OiA0cHggc29saWQgcmVkO1xyXG5cdGJvcmRlci1ib3R0b206IDRweCBzb2xpZCByZWQ7XHJcbn1cclxuLmZyYW1lLXJpZ2h0LXRvcCB7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHdpZHRoOiAyMHB4O1xyXG5cdGhlaWdodDogMjBweDtcclxuXHRyaWdodDogLTZweDtcclxuXHR0b3A6IC02cHg7XHJcblx0Ym9yZGVyLXJpZ2h0OiA0cHggc29saWQgcmVkO1xyXG5cdGJvcmRlci10b3A6IDRweCBzb2xpZCByZWQ7XHJcbn1cclxuLmZyYW1lLXJpZ2h0LWJvdHRvbSB7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHdpZHRoOiAyMHB4O1xyXG5cdGhlaWdodDogMjBweDtcclxuXHRyaWdodDogLTZweDtcclxuXHRib3R0b206IC02cHg7XHJcblx0Ym9yZGVyLXJpZ2h0OiA0cHggc29saWQgcmVkO1xyXG5cdGJvcmRlci1ib3R0b206IDRweCBzb2xpZCByZWQ7XHJcbn1cclxuPC9zdHlsZT5cbiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcz8/cmVmLS04LW9uZU9mLTEtMCEuLi8uLi8uLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOC1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMS0yIS4uLy4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMS0zIS4uLy4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOC1vbmVPZi0xLTQhLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0xLTUhLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL2Nyb3BwZXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9YjEwMDFiYTQmc2NvcGVkPXRydWUmbGFuZz1zY3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanM/P3JlZi0tOC1vbmVPZi0xLTAhLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTgtb25lT2YtMS0xIS4uLy4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTgtb25lT2YtMS00IS4uLy4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMS01IS4uLy4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi9jcm9wcGVyLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWIxMDAxYmE0JnNjb3BlZD10cnVlJmxhbmc9c2NzcyZcIiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIC8vIDE2MjE5MDU4NTc4MThcbiAgICAgIHZhciBjc3NSZWxvYWQgPSByZXF1aXJlKFwiRDovUHJvZ3JhbSBGaWxlcy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2htci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qc1wiKShtb2R1bGUuaWQsIHtcImhtclwiOnRydWUsXCJwdWJsaWNQYXRoXCI6XCIuLi8uLi9cIixcImxvY2Fsc1wiOmZhbHNlfSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoY3NzUmVsb2FkKTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KHVuZGVmaW5lZCwgY3NzUmVsb2FkKTtcbiAgICB9XG4gICJdLCJzb3VyY2VSb290IjoiIn0=
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/image/cropper-create-component',
    {
        'components/image/cropper-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('1')['createComponent'](__webpack_require__(253))
        })
    },
    [['components/image/cropper-create-component']]
]);
