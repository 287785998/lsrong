(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/imageCropper/imageCropper"],{

/***/ 246:
/*!*********************************************************************************!*\
  !*** D:/用户目录/我的文档/HBuilderProjects/资讯/components/imageCropper/imageCropper.vue ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _imageCropper_vue_vue_type_template_id_0c3f9ec4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./imageCropper.vue?vue&type=template&id=0c3f9ec4&scoped=true& */ 247);
/* harmony import */ var _imageCropper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./imageCropper.vue?vue&type=script&lang=js& */ 249);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _imageCropper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _imageCropper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _imageCropper_vue_vue_type_style_index_0_id_0c3f9ec4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./imageCropper.vue?vue&type=style&index=0&id=0c3f9ec4&scoped=true&lang=css& */ 251);
/* harmony import */ var _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 10);

var renderjs





/* normalize component */

var component = Object(_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _imageCropper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _imageCropper_vue_vue_type_template_id_0c3f9ec4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _imageCropper_vue_vue_type_template_id_0c3f9ec4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "0c3f9ec4",
  null,
  false,
  _imageCropper_vue_vue_type_template_id_0c3f9ec4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "components/imageCropper/imageCropper.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 247:
/*!****************************************************************************************************************************!*\
  !*** D:/用户目录/我的文档/HBuilderProjects/资讯/components/imageCropper/imageCropper.vue?vue&type=template&id=0c3f9ec4&scoped=true& ***!
  \****************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_imageCropper_vue_vue_type_template_id_0c3f9ec4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./imageCropper.vue?vue&type=template&id=0c3f9ec4&scoped=true& */ 248);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_imageCropper_vue_vue_type_template_id_0c3f9ec4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_imageCropper_vue_vue_type_template_id_0c3f9ec4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_imageCropper_vue_vue_type_template_id_0c3f9ec4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_imageCropper_vue_vue_type_template_id_0c3f9ec4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 248:
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/用户目录/我的文档/HBuilderProjects/资讯/components/imageCropper/imageCropper.vue?vue&type=template&id=0c3f9ec4&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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

/***/ 249:
/*!**********************************************************************************************************!*\
  !*** D:/用户目录/我的文档/HBuilderProjects/资讯/components/imageCropper/imageCropper.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_imageCropper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./imageCropper.vue?vue&type=script&lang=js& */ 250);
/* harmony import */ var _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_imageCropper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_imageCropper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_imageCropper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_imageCropper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_imageCropper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 250:
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/用户目录/我的文档/HBuilderProjects/资讯/components/imageCropper/imageCropper.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'image-cropper',
  props: {
    cropWidth: {
      type: Number,
      default: 200 },

    cropHeight: {
      type: Number,
      default: 200 },

    cropFixed: {
      type: Boolean,
      default: false },

    src: {
      type: String },

    showResetBtn: {
      type: Boolean,
      default: true },

    showRotateBtn: {
      type: Boolean,
      default: true } },


  data: function data() {
    var sysInfo = uni.getSystemInfoSync();
    var pixelRatio = sysInfo.pixelRatio;
    return {
      show: false,
      scale: 1,
      rotate: 0,
      cropW: 0,
      cropH: 0,
      cropOldW: 0,
      cropOldH: 0,
      sysInfo: sysInfo,
      pixelRatio: pixelRatio,
      imageRealWidth: 0,
      imageRealHeight: 0,
      cropOffsertX: 0,
      cropOffsertY: 0,
      startX: 0,
      startY: 0,
      // 裁剪框与边界间距
      border: 5,
      x: 0,
      y: 0,
      startL: 0,
      oldScale: 1 };

  },
  watch: {
    src: function src(val) {
      if (val.length > 0) {
        this.init();
      }
    },
    show: function show(val) {
      if (!val) {
        this.src = '';
      }
    } },

  computed: {
    containerTop: function containerTop() {
      var top = 0;



      return top;
    },
    // 容器高度
    containerHeight: function containerHeight() {
      return this.windowHeight - 48;
    },
    // 屏幕宽度
    windowWidth: function windowWidth() {
      return this.sysInfo.windowWidth;
    },
    windowHeight: function windowHeight() {
      return this.sysInfo.windowHeight;
    },
    // 图片宽高比
    imageRatio: function imageRatio() {
      if (this.imageRealHeight > 0) {
        return this.imageRealWidth / this.imageRealHeight;
      }
      return 0;
    },
    // 等比缩放后的宽度
    imageWidth: function imageWidth() {
      if (this.imageRatio >= 1) {
        return this.windowWidth;
      }
      return this.windowWidth * this.imageRatio;
    },
    // 等比缩放后的高度
    imageHeight: function imageHeight() {
      if (this.imageRatio >= 1) {
        return this.windowWidth / this.imageRatio;
      }
      return this.windowWidth;
    } },

  methods: {
    rotateHandler: function rotateHandler() {
      if (this.rotate == 3) {
        this.rotate = 0;
      } else {
        ++this.rotate;
      }
    },
    init: function init() {
      this.rotate = 0;
      this.scale = 1;
      this.cropW = this.cropWidth;
      this.cropH = this.cropHeight;
      uni.showLoading({
        title: '图片加载中...' });

      this.loadImage(this.src).
      then(function (e) {
        uni.hideLoading();
      }).
      catch(function (e) {
        uni.hideLoading();
        uni.showModal({
          title: '标题',
          content: '图片加载失败' });

      });
    },
    loadImage: function loadImage(src) {
      var _this = this;
      return new Promise(function (resolve, reject) {
        uni.getImageInfo({
          src: src,
          success: function success(res) {
            _this.imageRealWidth = res.width;
            _this.imageRealHeight = res.height;

            _this.cropOffsertX = _this.windowWidth / 2 - _this.cropW / 2;
            _this.cropOffsertY = _this.windowHeight / 2 - _this.cropH / 2;
            _this.show = true;

            _this.$nextTick(function () {
              _this.x = _this.windowWidth / 2 - _this.imageWidth / 2;
              _this.y = _this.containerHeight / 2 - _this.imageHeight / 2;
            });
            resolve(res);
          },
          fail: function fail(e) {
            _this.show = false;
            reject(e);
          } });

      });
    },
    cancel: function cancel() {
      this.show = false;
      this.$emit('cancel');
    },
    confirm: function confirm(event) {
      uni.showLoading({
        title: '裁剪中...' });

      var _this = this;
      var ctx = uni.createCanvasContext('myCanvas', _this);

      var pixelRatio = _this.pixelRatio;
      var imgage = _this.src;
      var imgW = _this.imageWidth * _this.scale;
      var imgH = _this.imageHeight * _this.scale;
      var rotate = _this.rotate;
      var dx = _this.cropOffsertX - _this.x - (_this.imageWidth - imgW) / 2;
      var dy = _this.cropOffsertY - _this.y - (_this.imageHeight - imgH) / 2;

      ctx.setFillStyle('white');
      ctx.fillRect(0, 0, imgW, imgH);
      ctx.save();

      ctx.rotate(rotate * 90 * Math.PI / 180);
      switch (rotate) {
        case 1:
          dx += (imgH - imgW) / 2;
          dy -= (imgH - imgW) / 2;
          ctx.drawImage(imgage, -dy, dx, imgW, -imgH);
          break;
        case 2:
          ctx.drawImage(imgage, dx, dy, -imgW, -imgH);
          break;
        case 3:
          dx += (imgH - imgW) / 2;
          dy -= (imgH - imgW) / 2;
          ctx.drawImage(imgage, dy, -dx, -imgW, imgH);
          break;
        default:
          ctx.drawImage(imgage, -dx, -dy, imgW, imgH);
          break;}

      ctx.restore();
      ctx.draw(false, function () {
        uni.canvasToTempFilePath(
        {
          canvasId: 'myCanvas',
          destWidth: _this.cropW * pixelRatio,
          destHeight: _this.cropH * pixelRatio,
          success: function success(res) {
            console.log(res);
            uni.hideLoading();
            event.detail.tempFilePath = res.tempFilePath;
            _this.show = false;
            //console.log(event)
            _this.$emit('confirm', event);
          },
          fail: function fail(e) {
            uni.hideLoading();
            uni.showModal({
              title: '提示',
              content: '裁剪失败' });

          } },

        _this);

      });
    },
    imgTouchStart: function imgTouchStart(e) {
      if (e.touches.length == 2) {
        this.oldScale = this.scale;
        this.scaling = true;
        var x = e.touches[0].pageX - e.touches[1].pageX;
        var y = e.touches[0].pageY - e.touches[1].pageY;
        var hypotenuse = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));

        this.startL = Math.max(x, y, hypotenuse);
        uni.showModal({
          content: this.startL });

      } else {
        this.startX = e.touches[0].pageX - this.x;
        this.startY = e.touches[0].pageY - this.y;
      }
    },
    imgMoveing: function imgMoveing(e) {
      if (this.scaling) {
        var scale = this.oldScale;

        var x = e.touches[0].pageX - e.touches[1].pageX;
        var y = e.touches[0].pageY - e.touches[1].pageY;
        var hypotenuse = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));

        var newL = Math.max(x, y, hypotenuse);

        var cha = newL - this.startL;

        // 根据图片本身大小 决定每次改变大小的系数, 图片越大系数越小
        // 1px - 0.2
        var coe = 1;
        coe = coe / this.imageWidth > coe / this.imageHeight ? coe / this.imageHeight : coe / this.imageWidth;
        coe = coe > 0.1 ? 0.1 : coe;
        var num = coe * cha;

        if (cha > 0) {
          scale += Math.abs(num);
        } else if (cha < 0) {
          scale > Math.abs(num) ? scale -= Math.abs(num) : scale;
        }

        this.scale = scale;
      } else {
        var moveX = e.touches[0].pageX - this.startX;
        var moveY = e.touches[0].pageY - this.startY;

        this.x = moveX;
        this.y = moveY;
      }
    },
    imgMoveEnd: function imgMoveEnd() {var _this2 = this;
      setTimeout(function () {
        _this2.scaling = false;
      }, 100);
    },
    touchStart: function touchStart(e) {
      this.startX = e.touches[0].pageX - this.cropOffsertX;
      this.startY = e.touches[0].pageY - this.cropOffsertY;

      this.cropOldW = this.cropW;
      this.cropOldH = this.cropH;
    },
    cropMoveing: function cropMoveing(e) {
      var moveX = this._cropX(e.touches[0].pageX - this.startX);
      var moveY = this._cropY(e.touches[0].pageY - this.startY);

      this.cropOffsertX = moveX;
      this.cropOffsertY = moveY;
    },
    dragMove: function dragMove(e, type) {
      if (this.cropFixed) {
        return false;
      }
      var moveX = e.touches[0].pageX - this.startX;
      var moveY = e.touches[0].pageY - this.startY;
      switch (type) {
        case 'left-top':
          this._cropMoveLeft(moveX);
          this._cropMoveTop(moveY);
          break;
        case 'middle-top':
          this._cropMoveTop(moveY);
          break;
        case 'right-top':
          this._cropMoveTop(moveY);
          this._cropMoveRight(moveX);
          break;
        case 'middle-right':
          this._cropMoveRight(moveX);
          break;
        case 'right-bottom':
          this._cropMoveRight(moveX);
          this._cropMoveBottom(moveY);
          break;
        case 'middle-bottom':
          this._cropMoveBottom(moveY);
          break;
        case 'left-bottom':
          this._cropMoveBottom(moveY);
          this._cropMoveLeft(moveX);
          break;
        case 'middle-left':
          this._cropMoveLeft(moveX);
          break;
        default:
          break;}

    },
    _cropMoveTop: function _cropMoveTop(y) {
      var topY = this._cropY(y);
      this.cropH += this.cropOffsertY - topY;
      this.cropOffsertY = topY;
    },
    _cropMoveRight: function _cropMoveRight(x) {
      if (this.cropOldW + x >= this.windowWidth - this.border) {
        return false;
      }
      this.cropW = this.cropOldW + (x - this.cropOffsertX);
    },
    _cropMoveBottom: function _cropMoveBottom(y) {
      if (this.cropOldH + y >= this.windowHeight - this.containerTop - this.border) {
        return false;
      }
      this.cropH = this.cropOldH + (y - this.cropOffsertY);
    },
    _cropMoveLeft: function _cropMoveLeft(x) {
      var leftX = this._cropY(x);
      this.cropW += this.cropOffsertX - leftX;
      this.cropOffsertX = leftX;
    },
    _cropX: function _cropX(x) {
      if (x <= this.border) {
        return this.border;
      }
      if (x + this.cropW >= this.windowWidth - this.border) {
        return this.windowWidth - this.cropW - this.border;
      }
      return x;
    },
    _cropY: function _cropY(y) {
      if (y <= this.border) {
        return this.border;
      }
      if (y + this.cropH >= this.windowHeight - this.containerTop - this.border) {
        return this.windowHeight - this.cropH - this.containerTop - this.border;
      }
      return y;
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 251:
/*!******************************************************************************************************************************************!*\
  !*** D:/用户目录/我的文档/HBuilderProjects/资讯/components/imageCropper/imageCropper.vue?vue&type=style&index=0&id=0c3f9ec4&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_imageCropper_vue_vue_type_style_index_0_id_0c3f9ec4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./imageCropper.vue?vue&type=style&index=0&id=0c3f9ec4&scoped=true&lang=css& */ 252);
/* harmony import */ var _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_imageCropper_vue_vue_type_style_index_0_id_0c3f9ec4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_imageCropper_vue_vue_type_style_index_0_id_0c3f9ec4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_imageCropper_vue_vue_type_style_index_0_id_0c3f9ec4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_imageCropper_vue_vue_type_style_index_0_id_0c3f9ec4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_imageCropper_vue_vue_type_style_index_0_id_0c3f9ec4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 252:
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/用户目录/我的文档/HBuilderProjects/资讯/components/imageCropper/imageCropper.vue?vue&type=style&index=0&id=0c3f9ec4&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vRDov55So5oi355uu5b2VL+aIkeeahOaWh+ahoy9IQnVpbGRlclByb2plY3RzL+i1hOiury9jb21wb25lbnRzL2ltYWdlQ3JvcHBlci9pbWFnZUNyb3BwZXIudnVlPzcwZWIiLCJ3ZWJwYWNrOi8vL0Q6L+eUqOaIt+ebruW9lS/miJHnmoTmlofmoaMvSEJ1aWxkZXJQcm9qZWN0cy/otYTorq8vY29tcG9uZW50cy9pbWFnZUNyb3BwZXIvaW1hZ2VDcm9wcGVyLnZ1ZT82MmExIiwid2VicGFjazovLy9EOi/nlKjmiLfnm67lvZUv5oiR55qE5paH5qGjL0hCdWlsZGVyUHJvamVjdHMv6LWE6K6vL2NvbXBvbmVudHMvaW1hZ2VDcm9wcGVyL2ltYWdlQ3JvcHBlci52dWU/OTUxYyIsIndlYnBhY2s6Ly8vRDov55So5oi355uu5b2VL+aIkeeahOaWh+ahoy9IQnVpbGRlclByb2plY3RzL+i1hOiury9jb21wb25lbnRzL2ltYWdlQ3JvcHBlci9pbWFnZUNyb3BwZXIudnVlPzdkMWQiLCJ1bmktYXBwOi8vL2NvbXBvbmVudHMvaW1hZ2VDcm9wcGVyL2ltYWdlQ3JvcHBlci52dWUiLCJ3ZWJwYWNrOi8vL0Q6L+eUqOaIt+ebruW9lS/miJHnmoTmlofmoaMvSEJ1aWxkZXJQcm9qZWN0cy/otYTorq8vY29tcG9uZW50cy9pbWFnZUNyb3BwZXIvaW1hZ2VDcm9wcGVyLnZ1ZT8zZDY4Iiwid2VicGFjazovLy9EOi/nlKjmiLfnm67lvZUv5oiR55qE5paH5qGjL0hCdWlsZGVyUHJvamVjdHMv6LWE6K6vL2NvbXBvbmVudHMvaW1hZ2VDcm9wcGVyL2ltYWdlQ3JvcHBlci52dWU/NDFkNiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXFJO0FBQ3JJO0FBQ2dFO0FBQ0w7QUFDcUM7OztBQUdoRztBQUN1TDtBQUN2TCxnQkFBZ0IsMkxBQVU7QUFDMUIsRUFBRSxrRkFBTTtBQUNSLEVB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QSxFQWlNQSxJQWpNQSxFQWlNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkE5QkE7O0FBZ0NBLEtBdk9BO0FBd09BLGdCQXhPQSx3QkF3T0EsQ0F4T0EsRUF3T0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQTVPQTtBQTZPQSxrQkE3T0EsMEJBNk9BLENBN09BLEVBNk9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQWxQQTtBQW1QQSxtQkFuUEEsMkJBbVBBLENBblBBLEVBbVBBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQXhQQTtBQXlQQSxpQkF6UEEseUJBeVBBLENBelBBLEVBeVBBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0E3UEE7QUE4UEEsVUE5UEEsa0JBOFBBLENBOVBBLEVBOFBBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQXRRQTtBQXVRQSxVQXZRQSxrQkF1UUEsQ0F2UUEsRUF1UUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBL1FBLEVBM0dBLEU7Ozs7Ozs7Ozs7Ozs7QUNuRkE7QUFBQTtBQUFBO0FBQUE7QUFBZ2lDLENBQWdCLHErQkFBRyxFQUFDLEM7Ozs7Ozs7Ozs7O0FDQXBqQztBQUNBLE9BQU8sS0FBVSxFQUFFLGtCQUtkIiwiZmlsZSI6ImNvbXBvbmVudHMvaW1hZ2VDcm9wcGVyL2ltYWdlQ3JvcHBlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vaW1hZ2VDcm9wcGVyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wYzNmOWVjNCZzY29wZWQ9dHJ1ZSZcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2ltYWdlQ3JvcHBlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2ltYWdlQ3JvcHBlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vaW1hZ2VDcm9wcGVyLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTBjM2Y5ZWM0JnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCIwYzNmOWVjNFwiLFxuICBudWxsLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJjb21wb25lbnRzL2ltYWdlQ3JvcHBlci9pbWFnZUNyb3BwZXIudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xNi0wIS4uLy4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvdGVtcGxhdGUuanMhLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stdW5pLWFwcC1sb2FkZXIvcGFnZS1tZXRhLmpzIS4uLy4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi9pbWFnZUNyb3BwZXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTBjM2Y5ZWM0JnNjb3BlZD10cnVlJlwiIiwidmFyIGNvbXBvbmVudHNcbnZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxufVxudmFyIHJlY3ljbGFibGVSZW5kZXIgPSBmYWxzZVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEyLTEhLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zY3JpcHQuanMhLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL2ltYWdlQ3JvcHBlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEyLTEhLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zY3JpcHQuanMhLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL2ltYWdlQ3JvcHBlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCI8dGVtcGxhdGU+XHJcblx0PHZpZXcgY2xhc3M9XCJ2dWUtY3JvcHBlclwiIHJlZj1cImNyb3BwZXJcIiA6c3R5bGU9XCJ7IHRvcDogYCR7Y29udGFpbmVyVG9wfXB4YCB9XCIgdi1zaG93PVwic2hvd1wiPlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJjcm9wcGVyLWJveFwiPlxyXG5cdFx0XHQ8dmlld1xyXG5cdFx0XHRcdGNsYXNzPVwiY3JvcHBlci1ib3gtY2FudmFzXCJcclxuXHRcdFx0XHRAdG91Y2hzdGFydC5zdG9wLnByZXZlbnQ9XCJpbWdUb3VjaFN0YXJ0XCJcclxuXHRcdFx0XHRAdG91Y2htb3ZlLnN0b3AucHJldmVudD1cImltZ01vdmVpbmdcIlxyXG5cdFx0XHRcdEB0b3VjaGVuZC5zdG9wLnByZXZlbnQ9XCJpbWdNb3ZlRW5kXCJcclxuXHRcdFx0XHQ6c3R5bGU9XCJ7XHJcblx0XHRcdFx0XHR3aWR0aDogaW1hZ2VXaWR0aCArICdweCcsXHJcblx0XHRcdFx0XHRoZWlnaHQ6IGltYWdlSGVpZ2h0ICsgJ3B4JyxcclxuXHRcdFx0XHRcdHRyYW5zZm9ybTogJ3NjYWxlKCcgKyBzY2FsZSArICcsJyArIHNjYWxlICsgJykgJyArICd0cmFuc2xhdGUzZCgnICsgeCAvIHNjYWxlICsgJ3B4LCcgKyB5IC8gc2NhbGUgKyAncHgsJyArICcwKScgKyAncm90YXRlWignICsgcm90YXRlICogOTAgKyAnZGVnKSdcclxuXHRcdFx0XHR9XCJcclxuXHRcdFx0PlxyXG5cdFx0XHRcdDxpbWFnZSA6c3JjPVwic3JjXCIgYWx0PVwiY3JvcHBlci1pbWdcIiByZWY9XCJjcm9wcGVySW1nXCIgbW9kZT1cInNjYWxlVG9GaWxsXCIgY2xhc3M9XCJ1bmktaW1hZ2VcIj48L2ltYWdlPlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHQ8L3ZpZXc+XHJcblx0XHQ8dmlldyBjbGFzcz1cImNyb3BwZXItZHJhZy1ib3ggY3JvcHBlci1tb2RhbCBjcm9wcGVyLW1vdmUgcG9pbnRlci1ldmVudHNcIj48L3ZpZXc+XHJcblx0XHQ8dmlld1xyXG5cdFx0XHRjbGFzcz1cImNyb3BwZXItY3JvcC1ib3hcIlxyXG5cdFx0XHQ6Y2xhc3M9XCJ7ICdwb2ludGVyLWV2ZW50cyc6IGNyb3BGaXhlZCB9XCJcclxuXHRcdFx0OnN0eWxlPVwieyB3aWR0aDogY3JvcFcgKyAncHgnLCBoZWlnaHQ6IGNyb3BIICsgJ3B4JywgdHJhbnNmb3JtOiAndHJhbnNsYXRlM2QoJyArIGNyb3BPZmZzZXJ0WCArICdweCwnICsgY3JvcE9mZnNlcnRZICsgJ3B4LCcgKyAnMCknIH1cIlxyXG5cdFx0PlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cImNyb3BwZXItdmlldy1ib3hcIj5cclxuXHRcdFx0XHQ8aW1hZ2VcclxuXHRcdFx0XHRcdDpzdHlsZT1cIntcclxuXHRcdFx0XHRcdFx0d2lkdGg6IGltYWdlV2lkdGggKyAncHgnLFxyXG5cdFx0XHRcdFx0XHRoZWlnaHQ6IGltYWdlSGVpZ2h0ICsgJ3B4JyxcclxuXHRcdFx0XHRcdFx0dHJhbnNmb3JtOlxyXG5cdFx0XHRcdFx0XHRcdCdzY2FsZSgnICtcclxuXHRcdFx0XHRcdFx0XHRzY2FsZSArXHJcblx0XHRcdFx0XHRcdFx0JywnICtcclxuXHRcdFx0XHRcdFx0XHRzY2FsZSArXHJcblx0XHRcdFx0XHRcdFx0JykgJyArXHJcblx0XHRcdFx0XHRcdFx0J3RyYW5zbGF0ZTNkKCcgK1xyXG5cdFx0XHRcdFx0XHRcdCh4IC0gY3JvcE9mZnNlcnRYKSAvIHNjYWxlICtcclxuXHRcdFx0XHRcdFx0XHQncHgsJyArXHJcblx0XHRcdFx0XHRcdFx0KHkgLSBjcm9wT2Zmc2VydFkpIC8gc2NhbGUgK1xyXG5cdFx0XHRcdFx0XHRcdCdweCwnICtcclxuXHRcdFx0XHRcdFx0XHQnMCknICtcclxuXHRcdFx0XHRcdFx0XHQncm90YXRlWignICtcclxuXHRcdFx0XHRcdFx0XHRyb3RhdGUgKiA5MCArXHJcblx0XHRcdFx0XHRcdFx0J2RlZyknXHJcblx0XHRcdFx0XHR9XCJcclxuXHRcdFx0XHRcdG1vZGU9XCJzY2FsZVRvRmlsbFwiXHJcblx0XHRcdFx0XHQ6c3JjPVwic3JjXCJcclxuXHRcdFx0XHRcdGFsdD1cImNyb3BwZXItaW1nXCJcclxuXHRcdFx0XHQ+PC9pbWFnZT5cclxuXHRcdFx0PC92aWV3PlxyXG5cclxuXHRcdFx0PHZpZXcgdi1pZj1cIiFjcm9wRml4ZWRcIiBjbGFzcz1cImNyb3BwZXItZmFjZSBjcm9wcGVyLW1vdmVcIiBAdG91Y2hzdGFydC5zdG9wLnByZXZlbnQ9XCJ0b3VjaFN0YXJ0XCIgQHRvdWNobW92ZS5zdG9wLnByZXZlbnQ9XCJjcm9wTW92ZWluZ1wiPjwvdmlldz5cclxuXHJcblx0XHRcdDx2aWV3IGNsYXNzPVwiY3JvcC1saW5lIGxpbmUtd1wiPjwvdmlldz5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJjcm9wLWxpbmUgbGluZS1hXCI+PC92aWV3PlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cImNyb3AtbGluZSBsaW5lLXNcIj48L3ZpZXc+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwiY3JvcC1saW5lIGxpbmUtZFwiPjwvdmlldz5cclxuXHRcdFx0PGJsb2NrIHYtaWY9XCIhY3JvcEZpeGVkXCI+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJjcm9wLXBvaW50IHBvaW50LWx0XCIgQHRvdWNoc3RhcnQuc3RvcC5wcmV2ZW50PVwidG91Y2hTdGFydFwiIEB0b3VjaG1vdmUuc3RvcC5wcmV2ZW50PVwiZHJhZ01vdmUoJGV2ZW50LCAnbGVmdC10b3AnKVwiPjwvdmlldz5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImNyb3AtcG9pbnQgcG9pbnQtbXRcIiBAdG91Y2hzdGFydC5zdG9wLnByZXZlbnQ9XCJ0b3VjaFN0YXJ0XCIgQHRvdWNobW92ZS5zdG9wLnByZXZlbnQ9XCJkcmFnTW92ZSgkZXZlbnQsICdtaWRkbGUtdG9wJylcIj48L3ZpZXc+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJjcm9wLXBvaW50IHBvaW50LXJ0XCIgQHRvdWNoc3RhcnQuc3RvcC5wcmV2ZW50PVwidG91Y2hTdGFydFwiIEB0b3VjaG1vdmUuc3RvcC5wcmV2ZW50PVwiZHJhZ01vdmUoJGV2ZW50LCAncmlnaHQtdG9wJylcIj48L3ZpZXc+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJjcm9wLXBvaW50IHBvaW50LW1sXCIgQHRvdWNoc3RhcnQuc3RvcC5wcmV2ZW50PVwidG91Y2hTdGFydFwiIEB0b3VjaG1vdmUuc3RvcC5wcmV2ZW50PVwiZHJhZ01vdmUoJGV2ZW50LCAnbWlkZGxlLWxlZnQnKVwiPjwvdmlldz5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImNyb3AtcG9pbnQgcG9pbnQtbXJcIiBAdG91Y2hzdGFydC5zdG9wLnByZXZlbnQ9XCJ0b3VjaFN0YXJ0XCIgQHRvdWNobW92ZS5zdG9wLnByZXZlbnQ9XCJkcmFnTW92ZSgkZXZlbnQsICdtaWRkbGUtcmlnaHQnKVwiPjwvdmlldz5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImNyb3AtcG9pbnQgcG9pbnQtbGJcIiBAdG91Y2hzdGFydC5zdG9wLnByZXZlbnQ9XCJ0b3VjaFN0YXJ0XCIgQHRvdWNobW92ZS5zdG9wLnByZXZlbnQ9XCJkcmFnTW92ZSgkZXZlbnQsICdsZWZ0LWJvdHRvbScpXCI+PC92aWV3PlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiY3JvcC1wb2ludCBwb2ludC1tYlwiIEB0b3VjaHN0YXJ0LnN0b3AucHJldmVudD1cInRvdWNoU3RhcnRcIiBAdG91Y2htb3ZlLnN0b3AucHJldmVudD1cImRyYWdNb3ZlKCRldmVudCwgJ21pZGRsZS1ib3R0b20nKVwiPjwvdmlldz5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImNyb3AtcG9pbnQgcG9pbnQtcmJcIiBAdG91Y2hzdGFydC5zdG9wLnByZXZlbnQ9XCJ0b3VjaFN0YXJ0XCIgQHRvdWNobW92ZS5zdG9wLnByZXZlbnQ9XCJkcmFnTW92ZSgkZXZlbnQsICdyaWdodC1ib3R0b20nKVwiPjwvdmlldz5cclxuXHRcdFx0PC9ibG9jaz5cclxuXHRcdDwvdmlldz5cclxuXHJcblx0XHQ8Y2FudmFzIGNhbnZhcy1pZD1cIm15Q2FudmFzXCIgY2xhc3M9XCJjcm9wcGVyLWNhbnZhc1wiIDpzdHlsZT1cInsgd2lkdGg6IGNyb3BXICsgJ3B4JywgaGVpZ2h0OiBjcm9wSCArICdweCcgfVwiPjwvY2FudmFzPlxyXG5cclxuXHRcdDx2aWV3IGNsYXNzPVwiYnRuLWdyb3VwXCI+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwiYnRuLWl0ZW0gcmVzZXQtYnRuXCIgdi1zaG93PVwic2hvd1Jlc2V0QnRuXCIgQHRhcD1cImluaXRcIj48L3ZpZXc+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwiYnRuLWl0ZW0gcm90YXRlLWJ0blwiIHYtc2hvdz1cInNob3dSb3RhdGVCdG5cIiBAdGFwPVwicm90YXRlSGFuZGxlclwiPjwvdmlldz5cclxuXHRcdDwvdmlldz5cclxuXHJcblx0XHQ8dmlldyBjbGFzcz1cInVuaS1pbmZvX19mdFwiPlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cInVuaS1tb2RhbF9fYnRuIHVuaS1tb2RhbF9fYnRuX2RlZmF1bHRcIiBzdHlsZT1cImNvbG9yOiByZ2IoMCwgMCwgMCk7XCIgQHRhcD1cImNhbmNlbFwiPuWPlua2iDwvdmlldz5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJ1bmktbW9kYWxfX2J0biB1bmktbW9kYWxfX2J0bl9wcmltYXJ5XCIgc3R5bGU9XCJjb2xvcjogcmdiKDAsIDEyMiwgMjU1KTtcIiBAdGFwPVwiY29uZmlybVwiPuehruWumjwvdmlldz5cclxuXHRcdDwvdmlldz5cclxuXHQ8L3ZpZXc+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5leHBvcnQgZGVmYXVsdCB7XHJcblx0bmFtZTogJ2ltYWdlLWNyb3BwZXInLFxyXG5cdHByb3BzOiB7XHJcblx0XHRjcm9wV2lkdGg6IHtcclxuXHRcdFx0dHlwZTogTnVtYmVyLFxyXG5cdFx0XHRkZWZhdWx0OiAyMDBcclxuXHRcdH0sXHJcblx0XHRjcm9wSGVpZ2h0OiB7XHJcblx0XHRcdHR5cGU6IE51bWJlcixcclxuXHRcdFx0ZGVmYXVsdDogMjAwXHJcblx0XHR9LFxyXG5cdFx0Y3JvcEZpeGVkOiB7XHJcblx0XHRcdHR5cGU6IEJvb2xlYW4sXHJcblx0XHRcdGRlZmF1bHQ6IGZhbHNlXHJcblx0XHR9LFxyXG5cdFx0c3JjOiB7XHJcblx0XHRcdHR5cGU6IFN0cmluZ1xyXG5cdFx0fSxcclxuXHRcdHNob3dSZXNldEJ0bjoge1xyXG5cdFx0XHR0eXBlOiBCb29sZWFuLFxyXG5cdFx0XHRkZWZhdWx0OiB0cnVlXHJcblx0XHR9LFxyXG5cdFx0c2hvd1JvdGF0ZUJ0bjoge1xyXG5cdFx0XHR0eXBlOiBCb29sZWFuLFxyXG5cdFx0XHRkZWZhdWx0OiB0cnVlXHJcblx0XHR9XHJcblx0fSxcclxuXHRkYXRhKCkge1xyXG5cdFx0Y29uc3Qgc3lzSW5mbyA9IHVuaS5nZXRTeXN0ZW1JbmZvU3luYygpO1xyXG5cdFx0Y29uc3QgcGl4ZWxSYXRpbyA9IHN5c0luZm8ucGl4ZWxSYXRpbztcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdHNob3c6IGZhbHNlLFxyXG5cdFx0XHRzY2FsZTogMSxcclxuXHRcdFx0cm90YXRlOiAwLFxyXG5cdFx0XHRjcm9wVzogMCxcclxuXHRcdFx0Y3JvcEg6IDAsXHJcblx0XHRcdGNyb3BPbGRXOiAwLFxyXG5cdFx0XHRjcm9wT2xkSDogMCxcclxuXHRcdFx0c3lzSW5mbzogc3lzSW5mbyxcclxuXHRcdFx0cGl4ZWxSYXRpbzogcGl4ZWxSYXRpbyxcclxuXHRcdFx0aW1hZ2VSZWFsV2lkdGg6IDAsXHJcblx0XHRcdGltYWdlUmVhbEhlaWdodDogMCxcclxuXHRcdFx0Y3JvcE9mZnNlcnRYOiAwLFxyXG5cdFx0XHRjcm9wT2Zmc2VydFk6IDAsXHJcblx0XHRcdHN0YXJ0WDogMCxcclxuXHRcdFx0c3RhcnRZOiAwLFxyXG5cdFx0XHQvLyDoo4HliarmoYbkuI7ovrnnlYzpl7Tot51cclxuXHRcdFx0Ym9yZGVyOiA1LFxyXG5cdFx0XHR4OiAwLFxyXG5cdFx0XHR5OiAwLFxyXG5cdFx0XHRzdGFydEw6IDAsXHJcblx0XHRcdG9sZFNjYWxlOiAxXHJcblx0XHR9O1xyXG5cdH0sXHJcblx0d2F0Y2g6IHtcclxuXHRcdHNyYyh2YWwpIHtcclxuXHRcdFx0aWYgKHZhbC5sZW5ndGggPiAwKSB7XHJcblx0XHRcdFx0dGhpcy5pbml0KCk7XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRzaG93KHZhbCkge1xyXG5cdFx0XHRpZiAoIXZhbCkge1xyXG5cdFx0XHRcdHRoaXMuc3JjID0gJyc7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9LFxyXG5cdGNvbXB1dGVkOiB7XHJcblx0XHRjb250YWluZXJUb3AoKSB7XHJcblx0XHRcdGxldCB0b3AgPSAwO1xyXG5cdFx0XHQvLyAjaWZkZWYgSDVcclxuXHRcdFx0dG9wID0gNDQ7XHJcblx0XHRcdC8vICNlbmRpZlxyXG5cdFx0XHRyZXR1cm4gdG9wO1xyXG5cdFx0fSxcclxuXHRcdC8vIOWuueWZqOmrmOW6plxyXG5cdFx0Y29udGFpbmVySGVpZ2h0KCkge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy53aW5kb3dIZWlnaHQgLSA0ODtcclxuXHRcdH0sXHJcblx0XHQvLyDlsY/luZXlrr3luqZcclxuXHRcdHdpbmRvd1dpZHRoKCkge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5zeXNJbmZvLndpbmRvd1dpZHRoO1xyXG5cdFx0fSxcclxuXHRcdHdpbmRvd0hlaWdodCgpIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMuc3lzSW5mby53aW5kb3dIZWlnaHQ7XHJcblx0XHR9LFxyXG5cdFx0Ly8g5Zu+54mH5a696auY5q+UXHJcblx0XHRpbWFnZVJhdGlvKCkge1xyXG5cdFx0XHRpZiAodGhpcy5pbWFnZVJlYWxIZWlnaHQgPiAwKSB7XHJcblx0XHRcdFx0cmV0dXJuIHRoaXMuaW1hZ2VSZWFsV2lkdGggLyB0aGlzLmltYWdlUmVhbEhlaWdodDtcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gMDtcclxuXHRcdH0sXHJcblx0XHQvLyDnrYnmr5TnvKnmlL7lkI7nmoTlrr3luqZcclxuXHRcdGltYWdlV2lkdGgoKSB7XHJcblx0XHRcdGlmICh0aGlzLmltYWdlUmF0aW8gPj0gMSkge1xyXG5cdFx0XHRcdHJldHVybiB0aGlzLndpbmRvd1dpZHRoO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiB0aGlzLndpbmRvd1dpZHRoICogdGhpcy5pbWFnZVJhdGlvO1xyXG5cdFx0fSxcclxuXHRcdC8vIOetieavlOe8qeaUvuWQjueahOmrmOW6plxyXG5cdFx0aW1hZ2VIZWlnaHQoKSB7XHJcblx0XHRcdGlmICh0aGlzLmltYWdlUmF0aW8gPj0gMSkge1xyXG5cdFx0XHRcdHJldHVybiB0aGlzLndpbmRvd1dpZHRoIC8gdGhpcy5pbWFnZVJhdGlvO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiB0aGlzLndpbmRvd1dpZHRoO1xyXG5cdFx0fVxyXG5cdH0sXHJcblx0bWV0aG9kczoge1xyXG5cdFx0cm90YXRlSGFuZGxlcigpIHtcclxuXHRcdFx0aWYgKHRoaXMucm90YXRlID09IDMpIHtcclxuXHRcdFx0XHR0aGlzLnJvdGF0ZSA9IDA7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0Kyt0aGlzLnJvdGF0ZTtcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdGluaXQoKSB7XHJcblx0XHRcdHRoaXMucm90YXRlID0gMDtcclxuXHRcdFx0dGhpcy5zY2FsZSA9IDE7XHJcblx0XHRcdHRoaXMuY3JvcFcgPSB0aGlzLmNyb3BXaWR0aDtcclxuXHRcdFx0dGhpcy5jcm9wSCA9IHRoaXMuY3JvcEhlaWdodDtcclxuXHRcdFx0dW5pLnNob3dMb2FkaW5nKHtcclxuXHRcdFx0XHR0aXRsZTogJ+WbvueJh+WKoOi9veS4rS4uLidcclxuXHRcdFx0fSk7XHJcblx0XHRcdHRoaXMubG9hZEltYWdlKHRoaXMuc3JjKVxyXG5cdFx0XHRcdC50aGVuKGUgPT4ge1xyXG5cdFx0XHRcdFx0dW5pLmhpZGVMb2FkaW5nKCk7XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHQuY2F0Y2goZSA9PiB7XHJcblx0XHRcdFx0XHR1bmkuaGlkZUxvYWRpbmcoKTtcclxuXHRcdFx0XHRcdHVuaS5zaG93TW9kYWwoe1xyXG5cdFx0XHRcdFx0XHR0aXRsZTogJ+agh+mimCcsXHJcblx0XHRcdFx0XHRcdGNvbnRlbnQ6ICflm77niYfliqDovb3lpLHotKUnXHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdH0sXHJcblx0XHRsb2FkSW1hZ2Uoc3JjKSB7XHJcblx0XHRcdGNvbnN0IF90aGlzID0gdGhpcztcclxuXHRcdFx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuXHRcdFx0XHR1bmkuZ2V0SW1hZ2VJbmZvKHtcclxuXHRcdFx0XHRcdHNyYzogc3JjLFxyXG5cdFx0XHRcdFx0c3VjY2VzczogcmVzID0+IHtcclxuXHRcdFx0XHRcdFx0X3RoaXMuaW1hZ2VSZWFsV2lkdGggPSByZXMud2lkdGg7XHJcblx0XHRcdFx0XHRcdF90aGlzLmltYWdlUmVhbEhlaWdodCA9IHJlcy5oZWlnaHQ7XHJcblxyXG5cdFx0XHRcdFx0XHRfdGhpcy5jcm9wT2Zmc2VydFggPSBfdGhpcy53aW5kb3dXaWR0aCAvIDIgLSBfdGhpcy5jcm9wVyAvIDI7XHJcblx0XHRcdFx0XHRcdF90aGlzLmNyb3BPZmZzZXJ0WSA9IF90aGlzLndpbmRvd0hlaWdodCAvIDIgLSBfdGhpcy5jcm9wSCAvIDI7XHJcblx0XHRcdFx0XHRcdF90aGlzLnNob3cgPSB0cnVlO1xyXG5cclxuXHRcdFx0XHRcdFx0X3RoaXMuJG5leHRUaWNrKCgpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRfdGhpcy54ID0gX3RoaXMud2luZG93V2lkdGggLyAyIC0gX3RoaXMuaW1hZ2VXaWR0aCAvIDI7XHJcblx0XHRcdFx0XHRcdFx0X3RoaXMueSA9IF90aGlzLmNvbnRhaW5lckhlaWdodCAvIDIgLSBfdGhpcy5pbWFnZUhlaWdodCAvIDI7XHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRyZXNvbHZlKHJlcyk7XHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0ZmFpbDogZSA9PiB7XHJcblx0XHRcdFx0XHRcdF90aGlzLnNob3cgPSBmYWxzZTtcclxuXHRcdFx0XHRcdFx0cmVqZWN0KGUpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9KTtcclxuXHRcdH0sXHJcblx0XHRjYW5jZWwoKSB7XHJcblx0XHRcdHRoaXMuc2hvdyA9IGZhbHNlO1xyXG5cdFx0XHR0aGlzLiRlbWl0KCdjYW5jZWwnKTtcclxuXHRcdH0sXHJcblx0XHRjb25maXJtKGV2ZW50KSB7XHJcblx0XHRcdHVuaS5zaG93TG9hZGluZyh7XHJcblx0XHRcdFx0dGl0bGU6ICfoo4HliarkuK0uLi4nXHJcblx0XHRcdH0pO1xyXG5cdFx0XHRjb25zdCBfdGhpcyA9IHRoaXM7XHJcblx0XHRcdGNvbnN0IGN0eCA9IHVuaS5jcmVhdGVDYW52YXNDb250ZXh0KCdteUNhbnZhcycsIF90aGlzKTtcclxuXHJcblx0XHRcdGNvbnN0IHBpeGVsUmF0aW8gPSBfdGhpcy5waXhlbFJhdGlvO1xyXG5cdFx0XHRjb25zdCBpbWdhZ2UgPSBfdGhpcy5zcmM7XHJcblx0XHRcdGNvbnN0IGltZ1cgPSBfdGhpcy5pbWFnZVdpZHRoICogX3RoaXMuc2NhbGU7XHJcblx0XHRcdGNvbnN0IGltZ0ggPSBfdGhpcy5pbWFnZUhlaWdodCAqIF90aGlzLnNjYWxlO1xyXG5cdFx0XHRjb25zdCByb3RhdGUgPSBfdGhpcy5yb3RhdGU7XHJcblx0XHRcdGxldCBkeCA9IF90aGlzLmNyb3BPZmZzZXJ0WCAtIF90aGlzLnggLSAoX3RoaXMuaW1hZ2VXaWR0aCAtIGltZ1cpIC8gMjtcclxuXHRcdFx0bGV0IGR5ID0gX3RoaXMuY3JvcE9mZnNlcnRZIC0gX3RoaXMueSAtIChfdGhpcy5pbWFnZUhlaWdodCAtIGltZ0gpIC8gMjtcclxuXHJcblx0XHRcdGN0eC5zZXRGaWxsU3R5bGUoJ3doaXRlJyk7XHJcblx0XHRcdGN0eC5maWxsUmVjdCgwLCAwLCBpbWdXLCBpbWdIKTtcclxuXHRcdFx0Y3R4LnNhdmUoKTtcclxuXHJcblx0XHRcdGN0eC5yb3RhdGUoKHJvdGF0ZSAqIDkwICogTWF0aC5QSSkgLyAxODApO1xyXG5cdFx0XHRzd2l0Y2ggKHJvdGF0ZSkge1xyXG5cdFx0XHRcdGNhc2UgMTpcclxuXHRcdFx0XHRcdGR4ICs9IChpbWdIIC0gaW1nVykgLyAyO1xyXG5cdFx0XHRcdFx0ZHkgLT0gKGltZ0ggLSBpbWdXKSAvIDI7XHJcblx0XHRcdFx0XHRjdHguZHJhd0ltYWdlKGltZ2FnZSwgLWR5LCBkeCwgaW1nVywgLWltZ0gpO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0Y2FzZSAyOlxyXG5cdFx0XHRcdFx0Y3R4LmRyYXdJbWFnZShpbWdhZ2UsIGR4LCBkeSwgLWltZ1csIC1pbWdIKTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdGNhc2UgMzpcclxuXHRcdFx0XHRcdGR4ICs9IChpbWdIIC0gaW1nVykgLyAyO1xyXG5cdFx0XHRcdFx0ZHkgLT0gKGltZ0ggLSBpbWdXKSAvIDI7XHJcblx0XHRcdFx0XHRjdHguZHJhd0ltYWdlKGltZ2FnZSwgZHksIC1keCwgLWltZ1csIGltZ0gpO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0ZGVmYXVsdDpcclxuXHRcdFx0XHRcdGN0eC5kcmF3SW1hZ2UoaW1nYWdlLCAtZHgsIC1keSwgaW1nVywgaW1nSCk7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0fVxyXG5cdFx0XHRjdHgucmVzdG9yZSgpO1xyXG5cdFx0XHRjdHguZHJhdyhmYWxzZSwgKCkgPT4ge1xyXG5cdFx0XHRcdHVuaS5jYW52YXNUb1RlbXBGaWxlUGF0aChcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0Y2FudmFzSWQ6ICdteUNhbnZhcycsXHJcblx0XHRcdFx0XHRcdGRlc3RXaWR0aDogX3RoaXMuY3JvcFcgKiBwaXhlbFJhdGlvLFxyXG5cdFx0XHRcdFx0XHRkZXN0SGVpZ2h0OiBfdGhpcy5jcm9wSCAqIHBpeGVsUmF0aW8sXHJcblx0XHRcdFx0XHRcdHN1Y2Nlc3M6IHJlcyA9PiB7XHJcblx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2cocmVzKTtcclxuXHRcdFx0XHRcdFx0XHR1bmkuaGlkZUxvYWRpbmcoKTtcclxuXHRcdFx0XHRcdFx0XHRldmVudC5kZXRhaWwudGVtcEZpbGVQYXRoID0gcmVzLnRlbXBGaWxlUGF0aDtcclxuXHRcdFx0XHRcdFx0XHRfdGhpcy5zaG93ID0gZmFsc2U7XHJcblx0XHRcdFx0XHRcdFx0Ly9jb25zb2xlLmxvZyhldmVudClcclxuXHRcdFx0XHRcdFx0XHRfdGhpcy4kZW1pdCgnY29uZmlybScsIGV2ZW50KTtcclxuXHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0ZmFpbDogZSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0dW5pLmhpZGVMb2FkaW5nKCk7XHJcblx0XHRcdFx0XHRcdFx0dW5pLnNob3dNb2RhbCh7XHJcblx0XHRcdFx0XHRcdFx0XHR0aXRsZTogJ+aPkOekuicsXHJcblx0XHRcdFx0XHRcdFx0XHRjb250ZW50OiAn6KOB5Ymq5aSx6LSlJ1xyXG5cdFx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0X3RoaXNcclxuXHRcdFx0XHQpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH0sXHJcblx0XHRpbWdUb3VjaFN0YXJ0KGUpIHtcclxuXHRcdFx0aWYgKGUudG91Y2hlcy5sZW5ndGggPT0gMikge1xyXG5cdFx0XHRcdHRoaXMub2xkU2NhbGUgPSB0aGlzLnNjYWxlO1xyXG5cdFx0XHRcdHRoaXMuc2NhbGluZyA9IHRydWU7XHJcblx0XHRcdFx0Y29uc3QgeCA9IGUudG91Y2hlc1swXS5wYWdlWCAtIGUudG91Y2hlc1sxXS5wYWdlWDtcclxuXHRcdFx0XHRjb25zdCB5ID0gZS50b3VjaGVzWzBdLnBhZ2VZIC0gZS50b3VjaGVzWzFdLnBhZ2VZO1xyXG5cdFx0XHRcdGNvbnN0IGh5cG90ZW51c2UgPSBNYXRoLnNxcnQoTWF0aC5wb3coeCwgMikgKyBNYXRoLnBvdyh5LCAyKSk7XHJcblxyXG5cdFx0XHRcdHRoaXMuc3RhcnRMID0gTWF0aC5tYXgoeCwgeSwgaHlwb3RlbnVzZSk7XHJcblx0XHRcdFx0dW5pLnNob3dNb2RhbCh7XHJcblx0XHRcdFx0XHRjb250ZW50OiB0aGlzLnN0YXJ0TFxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHRoaXMuc3RhcnRYID0gZS50b3VjaGVzWzBdLnBhZ2VYIC0gdGhpcy54O1xyXG5cdFx0XHRcdHRoaXMuc3RhcnRZID0gZS50b3VjaGVzWzBdLnBhZ2VZIC0gdGhpcy55O1xyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0aW1nTW92ZWluZyhlKSB7XHJcblx0XHRcdGlmICh0aGlzLnNjYWxpbmcpIHtcclxuXHRcdFx0XHRsZXQgc2NhbGUgPSB0aGlzLm9sZFNjYWxlO1xyXG5cclxuXHRcdFx0XHRjb25zdCB4ID0gZS50b3VjaGVzWzBdLnBhZ2VYIC0gZS50b3VjaGVzWzFdLnBhZ2VYO1xyXG5cdFx0XHRcdGNvbnN0IHkgPSBlLnRvdWNoZXNbMF0ucGFnZVkgLSBlLnRvdWNoZXNbMV0ucGFnZVk7XHJcblx0XHRcdFx0Y29uc3QgaHlwb3RlbnVzZSA9IE1hdGguc3FydChNYXRoLnBvdyh4LCAyKSArIE1hdGgucG93KHksIDIpKTtcclxuXHJcblx0XHRcdFx0Y29uc3QgbmV3TCA9IE1hdGgubWF4KHgsIHksIGh5cG90ZW51c2UpO1xyXG5cclxuXHRcdFx0XHRjb25zdCBjaGEgPSBuZXdMIC0gdGhpcy5zdGFydEw7XHJcblxyXG5cdFx0XHRcdC8vIOagueaNruWbvueJh+acrOi6q+Wkp+WwjyDlhrPlrprmr4/mrKHmlLnlj5jlpKflsI/nmoTns7vmlbAsIOWbvueJh+i2iuWkp+ezu+aVsOi2iuWwj1xyXG5cdFx0XHRcdC8vIDFweCAtIDAuMlxyXG5cdFx0XHRcdGxldCBjb2UgPSAxO1xyXG5cdFx0XHRcdGNvZSA9IGNvZSAvIHRoaXMuaW1hZ2VXaWR0aCA+IGNvZSAvIHRoaXMuaW1hZ2VIZWlnaHQgPyBjb2UgLyB0aGlzLmltYWdlSGVpZ2h0IDogY29lIC8gdGhpcy5pbWFnZVdpZHRoO1xyXG5cdFx0XHRcdGNvZSA9IGNvZSA+IDAuMSA/IDAuMSA6IGNvZTtcclxuXHRcdFx0XHRjb25zdCBudW0gPSBjb2UgKiBjaGE7XHJcblxyXG5cdFx0XHRcdGlmIChjaGEgPiAwKSB7XHJcblx0XHRcdFx0XHRzY2FsZSArPSBNYXRoLmFicyhudW0pO1xyXG5cdFx0XHRcdH0gZWxzZSBpZiAoY2hhIDwgMCkge1xyXG5cdFx0XHRcdFx0c2NhbGUgPiBNYXRoLmFicyhudW0pID8gKHNjYWxlIC09IE1hdGguYWJzKG51bSkpIDogc2NhbGU7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHR0aGlzLnNjYWxlID0gc2NhbGU7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0Y29uc3QgbW92ZVggPSBlLnRvdWNoZXNbMF0ucGFnZVggLSB0aGlzLnN0YXJ0WDtcclxuXHRcdFx0XHRjb25zdCBtb3ZlWSA9IGUudG91Y2hlc1swXS5wYWdlWSAtIHRoaXMuc3RhcnRZO1xyXG5cclxuXHRcdFx0XHR0aGlzLnggPSBtb3ZlWDtcclxuXHRcdFx0XHR0aGlzLnkgPSBtb3ZlWTtcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdGltZ01vdmVFbmQoKSB7XHJcblx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdHRoaXMuc2NhbGluZyA9IGZhbHNlO1xyXG5cdFx0XHR9LCAxMDApO1xyXG5cdFx0fSxcclxuXHRcdHRvdWNoU3RhcnQoZSkge1xyXG5cdFx0XHR0aGlzLnN0YXJ0WCA9IGUudG91Y2hlc1swXS5wYWdlWCAtIHRoaXMuY3JvcE9mZnNlcnRYO1xyXG5cdFx0XHR0aGlzLnN0YXJ0WSA9IGUudG91Y2hlc1swXS5wYWdlWSAtIHRoaXMuY3JvcE9mZnNlcnRZO1xyXG5cclxuXHRcdFx0dGhpcy5jcm9wT2xkVyA9IHRoaXMuY3JvcFc7XHJcblx0XHRcdHRoaXMuY3JvcE9sZEggPSB0aGlzLmNyb3BIO1xyXG5cdFx0fSxcclxuXHRcdGNyb3BNb3ZlaW5nKGUpIHtcclxuXHRcdFx0Y29uc3QgbW92ZVggPSB0aGlzLl9jcm9wWChlLnRvdWNoZXNbMF0ucGFnZVggLSB0aGlzLnN0YXJ0WCk7XHJcblx0XHRcdGNvbnN0IG1vdmVZID0gdGhpcy5fY3JvcFkoZS50b3VjaGVzWzBdLnBhZ2VZIC0gdGhpcy5zdGFydFkpO1xyXG5cclxuXHRcdFx0dGhpcy5jcm9wT2Zmc2VydFggPSBtb3ZlWDtcclxuXHRcdFx0dGhpcy5jcm9wT2Zmc2VydFkgPSBtb3ZlWTtcclxuXHRcdH0sXHJcblx0XHRkcmFnTW92ZShlLCB0eXBlKSB7XHJcblx0XHRcdGlmICh0aGlzLmNyb3BGaXhlZCkge1xyXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0fVxyXG5cdFx0XHRjb25zdCBtb3ZlWCA9IGUudG91Y2hlc1swXS5wYWdlWCAtIHRoaXMuc3RhcnRYO1xyXG5cdFx0XHRjb25zdCBtb3ZlWSA9IGUudG91Y2hlc1swXS5wYWdlWSAtIHRoaXMuc3RhcnRZO1xyXG5cdFx0XHRzd2l0Y2ggKHR5cGUpIHtcclxuXHRcdFx0XHRjYXNlICdsZWZ0LXRvcCc6XHJcblx0XHRcdFx0XHR0aGlzLl9jcm9wTW92ZUxlZnQobW92ZVgpO1xyXG5cdFx0XHRcdFx0dGhpcy5fY3JvcE1vdmVUb3AobW92ZVkpO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0Y2FzZSAnbWlkZGxlLXRvcCc6XHJcblx0XHRcdFx0XHR0aGlzLl9jcm9wTW92ZVRvcChtb3ZlWSk7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRjYXNlICdyaWdodC10b3AnOlxyXG5cdFx0XHRcdFx0dGhpcy5fY3JvcE1vdmVUb3AobW92ZVkpO1xyXG5cdFx0XHRcdFx0dGhpcy5fY3JvcE1vdmVSaWdodChtb3ZlWCk7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRjYXNlICdtaWRkbGUtcmlnaHQnOlxyXG5cdFx0XHRcdFx0dGhpcy5fY3JvcE1vdmVSaWdodChtb3ZlWCk7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRjYXNlICdyaWdodC1ib3R0b20nOlxyXG5cdFx0XHRcdFx0dGhpcy5fY3JvcE1vdmVSaWdodChtb3ZlWCk7XHJcblx0XHRcdFx0XHR0aGlzLl9jcm9wTW92ZUJvdHRvbShtb3ZlWSk7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRjYXNlICdtaWRkbGUtYm90dG9tJzpcclxuXHRcdFx0XHRcdHRoaXMuX2Nyb3BNb3ZlQm90dG9tKG1vdmVZKTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdGNhc2UgJ2xlZnQtYm90dG9tJzpcclxuXHRcdFx0XHRcdHRoaXMuX2Nyb3BNb3ZlQm90dG9tKG1vdmVZKTtcclxuXHRcdFx0XHRcdHRoaXMuX2Nyb3BNb3ZlTGVmdChtb3ZlWCk7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRjYXNlICdtaWRkbGUtbGVmdCc6XHJcblx0XHRcdFx0XHR0aGlzLl9jcm9wTW92ZUxlZnQobW92ZVgpO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0ZGVmYXVsdDpcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0X2Nyb3BNb3ZlVG9wKHkpIHtcclxuXHRcdFx0Y29uc3QgdG9wWSA9IHRoaXMuX2Nyb3BZKHkpO1xyXG5cdFx0XHR0aGlzLmNyb3BIICs9IHRoaXMuY3JvcE9mZnNlcnRZIC0gdG9wWTtcclxuXHRcdFx0dGhpcy5jcm9wT2Zmc2VydFkgPSB0b3BZO1xyXG5cdFx0fSxcclxuXHRcdF9jcm9wTW92ZVJpZ2h0KHgpIHtcclxuXHRcdFx0aWYgKHRoaXMuY3JvcE9sZFcgKyB4ID49IHRoaXMud2luZG93V2lkdGggLSB0aGlzLmJvcmRlcikge1xyXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0fVxyXG5cdFx0XHR0aGlzLmNyb3BXID0gdGhpcy5jcm9wT2xkVyArICh4IC0gdGhpcy5jcm9wT2Zmc2VydFgpO1xyXG5cdFx0fSxcclxuXHRcdF9jcm9wTW92ZUJvdHRvbSh5KSB7XHJcblx0XHRcdGlmICh0aGlzLmNyb3BPbGRIICsgeSA+PSB0aGlzLndpbmRvd0hlaWdodCAtIHRoaXMuY29udGFpbmVyVG9wIC0gdGhpcy5ib3JkZXIpIHtcclxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdH1cclxuXHRcdFx0dGhpcy5jcm9wSCA9IHRoaXMuY3JvcE9sZEggKyAoeSAtIHRoaXMuY3JvcE9mZnNlcnRZKTtcclxuXHRcdH0sXHJcblx0XHRfY3JvcE1vdmVMZWZ0KHgpIHtcclxuXHRcdFx0Y29uc3QgbGVmdFggPSB0aGlzLl9jcm9wWSh4KTtcclxuXHRcdFx0dGhpcy5jcm9wVyArPSB0aGlzLmNyb3BPZmZzZXJ0WCAtIGxlZnRYO1xyXG5cdFx0XHR0aGlzLmNyb3BPZmZzZXJ0WCA9IGxlZnRYO1xyXG5cdFx0fSxcclxuXHRcdF9jcm9wWCh4KSB7XHJcblx0XHRcdGlmICh4IDw9IHRoaXMuYm9yZGVyKSB7XHJcblx0XHRcdFx0cmV0dXJuIHRoaXMuYm9yZGVyO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmICh4ICsgdGhpcy5jcm9wVyA+PSB0aGlzLndpbmRvd1dpZHRoIC0gdGhpcy5ib3JkZXIpIHtcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy53aW5kb3dXaWR0aCAtIHRoaXMuY3JvcFcgLSB0aGlzLmJvcmRlcjtcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4geDtcclxuXHRcdH0sXHJcblx0XHRfY3JvcFkoeSkge1xyXG5cdFx0XHRpZiAoeSA8PSB0aGlzLmJvcmRlcikge1xyXG5cdFx0XHRcdHJldHVybiB0aGlzLmJvcmRlcjtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAoeSArIHRoaXMuY3JvcEggPj0gdGhpcy53aW5kb3dIZWlnaHQgLSB0aGlzLmNvbnRhaW5lclRvcCAtIHRoaXMuYm9yZGVyKSB7XHJcblx0XHRcdFx0cmV0dXJuIHRoaXMud2luZG93SGVpZ2h0IC0gdGhpcy5jcm9wSCAtIHRoaXMuY29udGFpbmVyVG9wIC0gdGhpcy5ib3JkZXI7XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIHk7XHJcblx0XHR9XHJcblx0fVxyXG59O1xyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQgbGFuZz1cImNzc1wiPlxyXG5cclxuICBAZm9udC1mYWNlIHtcclxuICAgICAgZm9udC1mYW1pbHk6IFwiaWNvbmZvbnRcIjtcclxuICAgICAgc3JjOiB1cmwoJ2RhdGE6YXBwbGljYXRpb24veC1mb250LXdvZmYyO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGQwOUdNZ0FCQUFBQUFBUjRBQXNBQUFBQUNLZ0FBQVFzQUFFQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFIRUlHVmdDREJncUVmSVJHQVRZQ0pBTU1Dd2dBQkNBRmhHMEhTaHVnQjhnT0pVSEJ3QUFBQUFGRUJObXd6ZDRkdGF0U21tcEZvVkFFaFVUaEVBWWtDb3pGS0RDcUNWTzZSZkgvODl2ODY5YXdEblRSMXFyU0FORnQ0R0c0U054cmVCbjkxZm1WOWYzKzUzSjYxM2llSGJhK04xem1HTThQQTdvWFRhQ0F4cGplaThJb0xXRnNHTHU0alBNRTZ2V0pKZG92cW1nQU80VTJMUkJuZXAwSzdHSm1wWVFXYW5YVk9XdUx1QUZydGVuSzRoYUFhL2YzOFFuS3NDT3B5clJGaDZlRldzaDVLWG5mWWNuOTU4QkdRTktmRTh3bU1tYUFRcHprdW85Wit1a1psdW9sdFZWNWFiVWlwTDVpL3lzQXJsaFdWdXQvZUNSQlZOUFVqWWc2b1VvN0pUSEZvYVlEU3ZkYWNuS1RxOUdBQjRBWTV5MmR0TDNxcEZoMURFTmRuSkM2SHEreFliN3B5Uk1ETXpjL2ZZb0pqWThmbHdPM205OHJNdWNGK0laSGo2Q2FndzVVZUtweHlGYnQyckhHWS84anBhN0NZTXZMZmNJZXNMalkzYmRxaGFmK25xZ1FzMnFULytyakNIL1ZmQTBWRkd1QUMzaUU4TkVyL1ZhdTh2WnNYaVV5NytWM2MzdFFRWE1BdU5qRENDODlLRElISDBPRmhuVWk4MUdFUHd5Yzd3WlVhTjdEblVmNGcrWkxRc01LWVYvOTROaks3UjdURU00bmlUWTFvSjV6RVU2MmFOVmFhc1V1YjA4WUxVRWFtNUVuVDZhNjEvSTE3ZE5rK3ZUdTlqcEpqWGhzVEZ3anFUdHBDQnhCSUlnUzZpUW5jL1pvZDFZR0twMHJBd3NEOGtreVA2QXdjSzBoY0F3a2lRbUJoV3Z4UFpXS0R1ODZhVUgybkxFZGk5ckdYMWVYcTVQNkExU3JuQXVjTVZNZFpIL0dLaS9qeWZDcUp5dWNmSzNtWHBWdWpYT1BmRmY1TEM0RHZ4MFgvOTQzSnlPcTRIdUNUWjhLaUlQUEFiNnJvOGFrcFQ2dWZpcTM5QlFyTmxrNW1wOHBPMEpsSkxrOGY1UWFsUmpvUDYwSU14ME44bjd3R2hTRDNuNi9GMXpsY1RWei9jUitFdjBsa0xTVGQ3VWlQYkQvd0N4R1JNQTJLcndybzJPMGJUUXRJbWJ3aGpBSmMwUzNONFJPeDE1L1BINjBJemFJT2pDYkVlbHFrRE9mRVROeGIvRk1peG5XTnplSnAyS1BRdzlBNWQ3NmpHVU9RT1V2SDdSRS9vMlJma05hdGQzT0dmOXEwUUtibnE4V0I3cXkraFZxSlJqSm4xQlFnUC9pRXJrczB5eTVpR0pUck9heVc3Qy96MElvWkgwcU5IKzdOKzMxWFhjN0cycDFoWkRVNklXczFnaGFxRE5RcGNFS1ZLdTFCZldtRlc5dTBJRmhLVW9kcHN3Q0VGb2RncVRaSFdTdGJxT0YraHFxZFBzRzFWckRFdW9kaGZ1ZURjWkNqK1F6dUlyRnRaaDZCTk5yYUlvd2JDemkxZGJoT2xPZmlvbktYSG9Uemd6b1k1aENLay9taW5FS1ovcFlNRENvVTdJc2dSRU0zWThWZ2N2d3ZqNGFNekswQWRld1VwSmxqV2t5R1pIM0lLbUc3Z2ZFSGdaT2hZWFR3cWlOd09ocDBDaUUzWmlGcEw1ZkI2ZGowa2VGS2NHVitKdmdHQVAwdldNVXBPUTEwR0kxVlF0M0xvTUhETkpSWXJFSVBJbkFvUFhERkVFbnJrOVAwekRHL0ZFR09BMldGTmtpYVpSR2h1b1JkZFhTOGJYOTE3Y0w2bW45YzZUSVVYU2VreWJLSEtRZkpYRnEyS1NpUmtsTFlVOGROS1dESVgwY0FBPT0nKSBmb3JtYXQoJ3dvZmYyJyk7XHJcbiAgfVxyXG5cclxuICAudnVlLWNyb3BwZXIge1xyXG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICBib3R0b206IDA7XHJcbiAgICAgIHotaW5kZXg6IDk5ODtcclxuICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgZGlyZWN0aW9uOiBsdHI7XHJcbiAgICAgIHRvdWNoLWFjdGlvbjogbm9uZTtcclxuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgLyogYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFCQUFBQUFRQVFNQUFBQWxQVzBpQUFBQUEzTkNTVlFJQ0FqYjRVL2dBQUFBQmxCTVZFWE16TXovLy8vVGpSVjJBQUFBQ1hCSVdYTUFBQXJyQUFBSzZ3R0NpdzFhQUFBQUhIUkZXSFJUYjJaMGQyRnlaUUJCWkc5aVpTQkdhWEpsZDI5eWEzTWdRMU0yNkx5eWpBQUFBQkZKUkVGVUNKbGorTS9BZ0JWaEYvMFBBSDYvRC9Ia0R4T0dBQUFBQUVsRlRrU3VRbUNDXCIpO1xyXG5cdCAqL1xyXG5cdFx0YmFja2dyb3VuZDogIzAwMDtcclxuXHR9XHJcblxyXG4gIC5jcm9wcGVyLWNhbnZhcyB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiAtOTk5OXB4O1xyXG4gICAgICBsZWZ0Oi05OTk5cHg7XHJcbiAgICAgIHotaW5kZXg6IC05OTg7XHJcbiAgfVxyXG5cclxuICAudnVlLWNyb3BwZXIgLnVuaS1pbmZvX19mdCB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHQgIGhlaWdodDogOTBycHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMzJycHg7XHJcbiAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcblx0ICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdCAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGJvdHRvbTogMDtcclxuICAgICAgbGVmdDogMDtcclxuICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgIHotaW5kZXg6IDk5ODtcclxuXHQgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgfVxyXG4gLnZ1ZS1jcm9wcGVyIC51bmktaW5mb19fZnQgLnVuaS1tb2RhbF9fYnRue1xyXG5cdGhlaWdodDogOTBycHg7XHJcblx0bGluZS1oZWlnaHQ6IDkwcnB4O1xyXG4gfVxyXG4gIC5idG4tZ3JvdXAge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHJpZ2h0OiAzMHB4O1xyXG4gICAgICBib3R0b206IDc4cHg7XHJcbiAgICAgIHotaW5kZXg6IDk5ODtcclxuICB9XHJcblxyXG4gIC5idG4taXRlbSB7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAuYnRuLWl0ZW06YWN0aXZlIHtcclxuICAgICAgYmFja2dyb3VuZDogI2NjYztcclxuICB9XHJcblxyXG4gIC5yb3RhdGUtYnRuIHtcclxuICAgICAgZm9udC1mYW1pbHk6IFwiaWNvbmZvbnRcIiAhaW1wb3J0YW50O1xyXG4gICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbiAgICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgLnJvdGF0ZS1idG46YmVmb3JlIHtcclxuICAgICAgY29udGVudDogXCJcXGU2NWNcIjtcclxuICAgICAgbWFyZ2luLWxlZnQ6IC0ycHg7XHJcbiAgfVxyXG5cclxuICAucmVzZXQtYnRuIHtcclxuICAgICAgZm9udC1mYW1pbHk6IFwiaWNvbmZvbnRcIiAhaW1wb3J0YW50O1xyXG4gICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbiAgICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgLnJlc2V0LWJ0bjpiZWZvcmUge1xyXG4gICAgICBjb250ZW50OiBcIlxcZTY0OFwiO1xyXG4gICAgICBtYXJnaW4tbGVmdDogLTJweDtcclxuICB9XHJcblxyXG4gIC52dWUtY3JvcHBlciAudW5pLWluZm9fX2Z0OmFmdGVyIHtcclxuICAgICAgY29udGVudDogXCIgXCI7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgbGVmdDogMDtcclxuICAgICAgdG9wOiAwO1xyXG4gICAgICByaWdodDogMDtcclxuICAgICAgaGVpZ2h0OiAxcHg7XHJcbiAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZDVkNWQ2O1xyXG4gICAgICBjb2xvcjogI2Q1ZDVkNjtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiAwIDA7XHJcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDAgMDtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWSguNSk7XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGVZKC41KTtcclxuICAgICAgei1pbmRleDogOTk4O1xyXG4gIH1cclxuXHJcbiAgLnZ1ZS1jcm9wcGVyIC51bmktbW9kYWxfX2J0biB7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAtd2Via2l0LWJveC1mbGV4OiAxO1xyXG4gICAgICAtd2Via2l0LWZsZXg6IDE7XHJcbiAgICAgIGZsZXg6IDE7XHJcbiAgICAgIGNvbG9yOiAjM2NjNTFmO1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogcmdiYSgwLDAsMCwwKTtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgIHotaW5kZXg6IDk5ODtcclxuXHQgIGZvbnQtc2l6ZTogMzJycHg7XHJcbiAgfVxyXG5cclxuICAudnVlLWNyb3BwZXIgLnVuaS1tb2RhbF9fYnRuOmZpcnN0LWNoaWxkOmFmdGVyIHsgZGlzcGxheTogIG5vbmUgfVxyXG4gIC52dWUtY3JvcHBlciAudW5pLW1vZGFsX19idG46YWZ0ZXIge1xyXG4gICAgICBjb250ZW50OiBcIiBcIjtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBsZWZ0OiAwO1xyXG4gICAgICB0b3A6IDA7XHJcbiAgICAgIHdpZHRoOiAxcHg7XHJcbiAgICAgIGJvdHRvbTogMDtcclxuICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZDVkNWQ2O1xyXG4gICAgICBjb2xvcjogI2Q1ZDVkNjtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiAwIDA7XHJcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDAgMDtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWCguNSk7XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGVYKC41KTtcclxuICAgICAgei1pbmRleDogOTk4O1xyXG4gIH1cclxuXHJcbiAgLnZ1ZS1jcm9wcGVyIC51bmktbW9kYWxfX2J0bjphY3RpdmUge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xyXG4gIH1cclxuXHJcbiAgLmNyb3BwZXItYm94LFxyXG4gIC5jcm9wcGVyLWJveC1jYW52YXMsXHJcbiAgLmNyb3BwZXItZHJhZy1ib3gsXHJcbiAgLmNyb3BwZXItY3JvcC1ib3gsXHJcbiAgLmNyb3BwZXItZmFjZSB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiAwO1xyXG4gICAgICByaWdodDogMDtcclxuICAgICAgYm90dG9tOiAwO1xyXG4gICAgICBsZWZ0OiAwO1xyXG4gICAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgei1pbmRleDogOTk4O1xyXG4gIH1cclxuXHQuY3JvcHBlci1ib3h7XHJcblx0XHQvKiBiYWNrZ3JvdW5kOiAjMDAwOyAqL1xyXG5cdH1cclxuICAudW5pLWltYWdlIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICB9XHJcblxyXG4gIC5jcm9wcGVyLWJveC1jYW52YXMgaW1hZ2Uge1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICB0cmFuc2Zvcm06IG5vbmU7XHJcbiAgICAgIG1heC13aWR0aDogbm9uZTtcclxuICAgICAgbWF4LWhlaWdodDogbm9uZTtcclxuICAgICAgei1pbmRleDogOTk4O1xyXG4gIH1cclxuXHJcbiAgLmNyb3BwZXItYm94IHtcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB9XHJcblxyXG4gIC5jcm9wcGVyLW1vdmUge1xyXG4gICAgICBjdXJzb3I6IG1vdmU7XHJcbiAgfVxyXG5cclxuICAuY3JvcHBlci1jcm9wIHtcclxuICAgICAgY3Vyc29yOiBjcm9zc2hhaXI7XHJcbiAgfVxyXG5cclxuICAuY3JvcHBlci1tb2RhbCB7XHJcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICB9XHJcblxyXG4gIC5wb2ludGVyLWV2ZW50cyB7XHJcbiAgICAgIHBvaW50ZXItZXZlbnRzOm5vbmU7XHJcbiAgfVxyXG5cclxuICAuY3JvcHBlci1jcm9wLWJveCB7XHJcbiAgICAgIC8qYm9yZGVyOiAycHggc29saWQgIzM5ZjsqL1xyXG4gIH1cclxuXHJcbiAgLmNyb3BwZXItdmlldy1ib3gge1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgb3V0bGluZTogMXB4IHNvbGlkICMzOWY7XHJcbiAgICAgIG91dGxpbmUtY29sb3I6IHJnYmEoNTEsIDE1MywgMjU1LCAwLjc1KTtcclxuICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAuY3JvcHBlci12aWV3LWJveCBpbWFnZSB7XHJcbiAgICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICBtYXgtd2lkdGg6IG5vbmU7XHJcbiAgICAgIG1heC1oZWlnaHQ6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAuY3JvcHBlci1mYWNlIHtcclxuICAgICAgdG9wOiAwO1xyXG4gICAgICBsZWZ0OiAwO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICBvcGFjaXR5OiAwLjE7XHJcbiAgfVxyXG5cclxuICAuY3JvcC1saW5lIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgb3BhY2l0eTogMC4xO1xyXG4gICAgICB6LWluZGV4OiA5OTg7XHJcbiAgfVxyXG5cclxuICAubGluZS13IHtcclxuICAgICAgdG9wOiAtM3B4O1xyXG4gICAgICBsZWZ0OiAwO1xyXG4gICAgICBoZWlnaHQ6IDVweDtcclxuICAgICAgY3Vyc29yOiBuLXJlc2l6ZTtcclxuICB9XHJcblxyXG4gIC5saW5lLWEge1xyXG4gICAgICB0b3A6IDA7XHJcbiAgICAgIGxlZnQ6IC0zcHg7XHJcbiAgICAgIHdpZHRoOiA1cHg7XHJcbiAgICAgIGN1cnNvcjogdy1yZXNpemU7XHJcbiAgfVxyXG5cclxuICAubGluZS1zIHtcclxuICAgICAgYm90dG9tOiAtM3B4O1xyXG4gICAgICBsZWZ0OiAwO1xyXG4gICAgICBoZWlnaHQ6IDVweDtcclxuICAgICAgY3Vyc29yOiBzLXJlc2l6ZTtcclxuICB9XHJcblxyXG4gIC5saW5lLWQge1xyXG4gICAgICB0b3A6IDA7XHJcbiAgICAgIHJpZ2h0OiAtM3B4O1xyXG4gICAgICB3aWR0aDogNXB4O1xyXG4gICAgICBjdXJzb3I6IGUtcmVzaXplO1xyXG4gIH1cclxuXHJcbiAgLmNyb3AtcG9pbnQge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHdpZHRoOiA4cHg7XHJcbiAgICAgIGhlaWdodDogOHB4O1xyXG4gICAgICBvcGFjaXR5OiAwLjc1O1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzlmO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgICB6LWluZGV4OiA5OTg7XHJcbiAgfVxyXG5cclxuICAucG9pbnQtbHQge1xyXG4gICAgICB0b3A6IC00cHg7XHJcbiAgICAgIGxlZnQ6IC00cHg7XHJcbiAgICAgIGN1cnNvcjogbnctcmVzaXplO1xyXG4gIH1cclxuXHJcbiAgLnBvaW50LW10IHtcclxuICAgICAgdG9wOiAtNXB4O1xyXG4gICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAtM3B4O1xyXG4gICAgICBjdXJzb3I6IG4tcmVzaXplO1xyXG4gIH1cclxuXHJcbiAgLnBvaW50LXJ0IHtcclxuICAgICAgdG9wOiAtNHB4O1xyXG4gICAgICByaWdodDogLTRweDtcclxuICAgICAgY3Vyc29yOiBuZS1yZXNpemU7XHJcbiAgfVxyXG5cclxuICAucG9pbnQtbWwge1xyXG4gICAgICB0b3A6IDUwJTtcclxuICAgICAgbGVmdDogLTRweDtcclxuICAgICAgbWFyZ2luLXRvcDogLTNweDtcclxuICAgICAgY3Vyc29yOiB3LXJlc2l6ZTtcclxuICB9XHJcblxyXG4gIC5wb2ludC1tciB7XHJcbiAgICAgIHRvcDogNTAlO1xyXG4gICAgICByaWdodDogLTRweDtcclxuICAgICAgbWFyZ2luLXRvcDogLTNweDtcclxuICAgICAgY3Vyc29yOiBlLXJlc2l6ZTtcclxuICB9XHJcblxyXG4gIC5wb2ludC1sYiB7XHJcbiAgICAgIGJvdHRvbTogLTVweDtcclxuICAgICAgbGVmdDogLTRweDtcclxuICAgICAgY3Vyc29yOiBzdy1yZXNpemU7XHJcbiAgfVxyXG5cclxuICAucG9pbnQtbWIge1xyXG4gICAgICBib3R0b206IC01cHg7XHJcbiAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgbWFyZ2luLWxlZnQ6IC0zcHg7XHJcbiAgICAgIGN1cnNvcjogcy1yZXNpemU7XHJcbiAgfVxyXG5cclxuICAucG9pbnQtcmIge1xyXG4gICAgICBib3R0b206IC01cHg7XHJcbiAgICAgIHJpZ2h0OiAtNHB4O1xyXG4gICAgICBjdXJzb3I6IHNlLXJlc2l6ZTtcclxuICB9XHJcbjwvc3R5bGU+XG4iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanM/P3JlZi0tNi1vbmVPZi0xLTAhLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtb25lT2YtMS0xIS4uLy4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS02LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vaW1hZ2VDcm9wcGVyLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTBjM2Y5ZWM0JnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanM/P3JlZi0tNi1vbmVPZi0xLTAhLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtb25lT2YtMS0xIS4uLy4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS02LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vaW1hZ2VDcm9wcGVyLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTBjM2Y5ZWM0JnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTYyMTkwNTg1NzM0M1xuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCJEOi9Qcm9ncmFtIEZpbGVzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvaG1yL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wiaG1yXCI6dHJ1ZSxcInB1YmxpY1BhdGhcIjpcIi4uLy4uL1wiLFwibG9jYWxzXCI6ZmFsc2V9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShjc3NSZWxvYWQpO1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQodW5kZWZpbmVkLCBjc3NSZWxvYWQpO1xuICAgIH1cbiAgIl0sInNvdXJjZVJvb3QiOiIifQ==
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/imageCropper/imageCropper-create-component',
    {
        'components/imageCropper/imageCropper-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('1')['createComponent'](__webpack_require__(246))
        })
    },
    [['components/imageCropper/imageCropper-create-component']]
]);
