(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/scroller/scroller"],{

/***/ 185:
/*!*************************************************************************!*\
  !*** D:/用户目录/我的文档/HBuilderProjects/资讯/components/scroller/scroller.vue ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scroller_vue_vue_type_template_id_cbdb6978___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scroller.vue?vue&type=template&id=cbdb6978& */ 186);
/* harmony import */ var _scroller_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scroller.vue?vue&type=script&lang=js& */ 188);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _scroller_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _scroller_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _scroller_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scroller.vue?vue&type=style&index=0&lang=css& */ 192);
/* harmony import */ var _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 10);

var renderjs





/* normalize component */

var component = Object(_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _scroller_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _scroller_vue_vue_type_template_id_cbdb6978___WEBPACK_IMPORTED_MODULE_0__["render"],
  _scroller_vue_vue_type_template_id_cbdb6978___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _scroller_vue_vue_type_template_id_cbdb6978___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "components/scroller/scroller.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 186:
/*!********************************************************************************************************!*\
  !*** D:/用户目录/我的文档/HBuilderProjects/资讯/components/scroller/scroller.vue?vue&type=template&id=cbdb6978& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_scroller_vue_vue_type_template_id_cbdb6978___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./scroller.vue?vue&type=template&id=cbdb6978& */ 187);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_scroller_vue_vue_type_template_id_cbdb6978___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_scroller_vue_vue_type_template_id_cbdb6978___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_scroller_vue_vue_type_template_id_cbdb6978___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_scroller_vue_vue_type_template_id_cbdb6978___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 187:
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/用户目录/我的文档/HBuilderProjects/资讯/components/scroller/scroller.vue?vue&type=template&id=cbdb6978& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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

/***/ 188:
/*!**************************************************************************************************!*\
  !*** D:/用户目录/我的文档/HBuilderProjects/资讯/components/scroller/scroller.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_scroller_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./scroller.vue?vue&type=script&lang=js& */ 189);
/* harmony import */ var _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_scroller_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_scroller_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_scroller_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_scroller_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_scroller_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 189:
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/用户目录/我的文档/HBuilderProjects/资讯/components/scroller/scroller.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;













































































var _scroller = _interopRequireDefault(__webpack_require__(/*! ./scroller.js */ 190));

var _option = _interopRequireDefault(__webpack_require__(/*! ./option.js */ 191));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// 引入scroller.js,处理核心逻辑
// 引入全局配置
var _default2 = { data: function data() {return { scroller: null, // scroller实例
      viewId: 'id_' + Math.random().toString(36).substr(2), // 随机生成scroller的id(不能数字开头,否则找不到元素)
      downHight: 0, //下拉刷新: 容器高度
      downRotate: 0, //下拉刷新: 圆形进度条旋转的角度
      downText: '', //下拉刷新: 提示的文本
      isDownReset: false, //下拉刷新: 是否显示重置的过渡动画
      isDownLoading: false, //下拉刷新: 是否显示加载中
      isUpLoading: false, // 上拉加载: 是否显示 "加载中..."
      isUpNoMore: false, // 上拉加载: 是否显示 "-- END --"
      isShowEmpty: false, // 是否显示空布局
      isShowToTop: false, // 是否显示回到顶部按钮
      scrollAble: true, // 是否禁止下滑 (下拉时禁止,避免抖动)
      scrollTop: 0, // 滚动条的位置
      scrollAnim: false, // 是否开启滚动动画
      windowTop: 0, // 可使用窗口的顶部位置
      windowBottom: 0 // 可使用窗口的底部位置
    };}, props: { down: Object, // 下拉刷新的参数配置
    up: Object, // 上拉加载的参数配置
    top: [String, Number], // 下拉布局往下偏移的数值, 已默认单位为upx.
    bottom: [String, Number], // 上拉布局往上偏移的数值, 已默认单位为upx.
    fixed: { // 是否通过fixed固定scroller的高度, 默认true
      type: Boolean, default: function _default() {return true;} } }, computed: { // top数值,单位upx,需转成px. 目的是使下拉布局往下偏移
    numTop: function numTop() {return uni.upx2px(Number(this.top || 0));}, fixedTop: function fixedTop() {return this.fixed ? this.numTop + this.windowTop + 'px' : 0;}, padTop: function padTop() {return !this.fixed ? this.numTop + 'px' : 0;}, // bottom数值,单位upx,需转成px 目的是使上拉布局往上偏移
    numBottom: function numBottom() {return uni.upx2px(Number(this.bottom || 0));}, fixedBottom: function fixedBottom() {return this.fixed ? this.numBottom + this.windowBottom + 'px' : 0;}, padBottom: function padBottom() {return !this.fixed ? this.numBottom + 'px' : 0;}, // 空布局的配置
    optEmpty: function optEmpty() {return this.scroller.optUp.empty;}, // 过渡
    transition: function transition() {return this.isDownReset ? 'transform 300ms' : '';}, translateY: function translateY() {return this.downHight > 0 ? 'translateY(' + this.downHight + 'px)' : ''; // transform会使fixed失效,需注意把fixed元素写在scroller之外
    } }, methods: { //注册列表滚动事件,用于下拉刷新
    scroll: function scroll(e) {var _this = this;this.scroller.scroll(e.detail, function () {_this.$emit('scroll', _this.scroller); // 此时可直接通过 this.scroller.scrollTop获取滚动条位置; this.scroller.isScrollUp获取是否向上滑动
      });}, //注册列表touchstart事件,用于下拉刷新
    touchstartEvent: function touchstartEvent(e) {this.scroller.touchstartEvent(e);}, //注册列表touchmove事件,用于下拉刷新
    touchmoveEvent: function touchmoveEvent(e) {this.scroller.touchmoveEvent(e);}, //注册列表touchend事件,用于下拉刷新
    touchendEvent: function touchendEvent(e) {this.scroller.touchendEvent(e);}, // 点击空布局的按钮回调
    emptyClick: function emptyClick() {this.$emit('emptyclick', this.scroller);}, // 点击回到顶部的按钮回调
    toTopClick: function toTopClick() {this.isShowToTop = false; // 回到顶部按钮需要先隐藏,再执行回到顶部,避免闪动
      this.scroller.scrollTo(0, this.scroller.optUp.toTop.duration); // 执行回到顶部
      this.$emit('topclick', this.scroller); // 派发点击回到顶部按钮的回调
    }, // 更新滚动区域的高度 (使内容不满屏和到底,都可继续翻页)
    setClientHeight: function setClientHeight() {var _this2 = this;if (this.scroller.getClientHeight(true) === 0 && !this.isExec) {this.isExec = true; // 避免多次获取
        this.$nextTick(function () {// 确保dom已渲染
          var view = uni.createSelectorQuery().in(_this2).select('#' + _this2.viewId);view.boundingClientRect(function (data) {_this2.isExec = false;if (data) {_this2.scroller.setClientHeight(data.height);} else if (_this2.clientNum != 3) {// 极少部分情况,可能dom还未渲染完毕,递归获取,最多重试3次
              _this2.clientNum = _this2.clientNum == null ? 1 : _this2.clientNum + 1;
              setTimeout(function () {
                _this2.setClientHeight();
              }, _this2.clientNum * 100);
            }
          }).exec();
        });
      }
    } },

  // 使用created初始化scroller对象; 如果用mounted部分css样式编译到H5会失效
  created: function created() {
    var vm = this;

    var diyOption = {
      // 下拉刷新的配置
      down: {
        inOffset: function inOffset(scroller) {
          // 下拉的距离进入offset范围内那一刻的回调
          vm.scrollAble = false; // 禁止下拉,避免抖动 (自定义scroller组件时,此行不可删)
          vm.isDownReset = false; // 不重置高度 (自定义scroller组件时,此行不可删)
          vm.isDownLoading = false; // 不显示加载中
          vm.downText = scroller.optDown.textInOffset; // 设置文本
        },
        outOffset: function outOffset(scroller) {
          // 下拉的距离大于offset那一刻的回调
          vm.scrollAble = false; // 禁止下拉,避免抖动 (自定义scroller组件时,此行不可删)
          vm.isDownReset = false; // 不重置高度 (自定义scroller组件时,此行不可删)
          vm.isDownLoading = false; // 不显示加载中
          vm.downText = scroller.optDown.textOutOffset; // 设置文本
        },
        onMoving: function onMoving(scroller, rate, downHight) {
          // 下拉过程中的回调,滑动过程一直在执行; rate下拉区域当前高度与指定距离的比值(inOffset: rate<1; outOffset: rate>=1); downHight当前下拉区域的高度
          vm.downHight = downHight; // 设置下拉区域的高度 (自定义scroller组件时,此行不可删)
          vm.downRotate = 'rotate(' + 360 * rate + 'deg)'; // 设置旋转角度
        },
        showLoading: function showLoading(scroller, downHight) {
          // 显示下拉刷新进度的回调
          vm.scrollAble = true; // 开启下拉 (自定义scroller组件时,此行不可删)
          vm.isDownReset = true; // 重置高度 (自定义scroller组件时,此行不可删)
          vm.isDownLoading = true; // 显示加载中
          vm.downHight = downHight; // 设置下拉区域的高度 (自定义scroller组件时,此行不可删)
          vm.downText = scroller.optDown.textLoading; // 设置文本
        },
        endDownScroll: function endDownScroll(scroller) {
          vm.scrollAble = true; // 开启下拉 (自定义scroller组件时,此行不可删)
          vm.isDownReset = true; // 重置高度 (自定义scroller组件时,此行不可删)
          vm.isDownLoading = false; // 不显示加载中
          vm.downHight = 0; // 设置下拉区域的高度 (自定义scroller组件时,此行不可删)
        },
        // 派发下拉刷新的回调
        callback: function callback(scroller) {
          vm.$emit('down', scroller);
        } },

      // 上拉加载的配置
      up: {
        // 显示加载中的回调
        showLoading: function showLoading() {
          vm.isUpLoading = true;
          vm.isUpNoMore = false;
        },
        // 显示无更多数据的回调
        showNoMore: function showNoMore() {
          vm.isUpLoading = false;
          vm.isUpNoMore = true;
        },
        // 隐藏上拉加载的回调
        hideUpScroll: function hideUpScroll() {
          vm.isUpLoading = false;
          vm.isUpNoMore = false;
        },
        // 空布局
        empty: {
          onShow: function onShow(isShow) {
            // 显示隐藏的回调
            vm.isShowEmpty = isShow;
          } },

        // 回到顶部
        toTop: {
          onShow: function onShow(isShow) {
            // 显示隐藏的回调
            vm.isShowToTop = isShow;
          } },

        // 派发上拉加载的回调
        callback: function callback(scroller) {
          vm.$emit('up', scroller);
          // 更新容器的高度 (多scroller的情况)
          vm.setClientHeight();
        } } };



    _scroller.default.extend(diyOption, _option.default); // 混入全局的配置
    var myOption = JSON.parse(
    JSON.stringify({
      down: vm.down,
      up: vm.up }));

    // 深拷贝,避免对props的影响
    _scroller.default.extend(myOption, diyOption); // 混入具体界面的配置

    // 初始化Scroller对象
    vm.scroller = new _scroller.default(myOption);
    vm.scroller.viewId = vm.viewId; // 附带id
    // init回调scroller对象
    vm.$emit('init', vm.scroller);

    // 设置高度
    uni.getSystemInfo({
      success: function success(res) {
        if (res.windowTop) vm.windowTop = res.windowTop; // 修正app和H5的top值
        if (res.windowBottom) vm.windowBottom = res.windowBottom; // 修正app和H5的bottom值
        vm.scroller.setBodyHeight(res.windowHeight); // 使down的bottomOffset生效
      } });


    // 因为使用的是scrollview,这里需自定义scrollTo
    vm.scroller.resetScrollTo(function (y, t) {
      var curY = vm.scroller.getScrollTop();
      if (t === 0) {
        vm.scrollAnim = false;
        vm.scrollTop = curY;
        vm.$nextTick(function () {
          vm.scrollTop = y;
        });
      } else {
        vm.scrollAnim = true;
        vm.scroller.getStep(
        curY,
        y,
        function (step) {
          // 此写法可支持配置t
          vm.scrollTop = step;
        },
        t);

      }
    });
  },
  mounted: function mounted() {
    // 设置容器的高度
    this.setClientHeight();
  } };exports.default = _default2;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 192:
/*!**********************************************************************************************************!*\
  !*** D:/用户目录/我的文档/HBuilderProjects/资讯/components/scroller/scroller.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_scroller_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./scroller.vue?vue&type=style&index=0&lang=css& */ 193);
/* harmony import */ var _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_scroller_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_scroller_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_scroller_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_scroller_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_scroller_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 193:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/用户目录/我的文档/HBuilderProjects/资讯/components/scroller/scroller.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vRDov55So5oi355uu5b2VL+aIkeeahOaWh+ahoy9IQnVpbGRlclByb2plY3RzL+i1hOiury9jb21wb25lbnRzL3Njcm9sbGVyL3Njcm9sbGVyLnZ1ZT9mOTAwIiwid2VicGFjazovLy9EOi/nlKjmiLfnm67lvZUv5oiR55qE5paH5qGjL0hCdWlsZGVyUHJvamVjdHMv6LWE6K6vL2NvbXBvbmVudHMvc2Nyb2xsZXIvc2Nyb2xsZXIudnVlPzc0Y2IiLCJ3ZWJwYWNrOi8vL0Q6L+eUqOaIt+ebruW9lS/miJHnmoTmlofmoaMvSEJ1aWxkZXJQcm9qZWN0cy/otYTorq8vY29tcG9uZW50cy9zY3JvbGxlci9zY3JvbGxlci52dWU/OGYwNCIsIndlYnBhY2s6Ly8vRDov55So5oi355uu5b2VL+aIkeeahOaWh+ahoy9IQnVpbGRlclByb2plY3RzL+i1hOiury9jb21wb25lbnRzL3Njcm9sbGVyL3Njcm9sbGVyLnZ1ZT9hMjVlIiwidW5pLWFwcDovLy9jb21wb25lbnRzL3Njcm9sbGVyL3Njcm9sbGVyLnZ1ZSIsIndlYnBhY2s6Ly8vRDov55So5oi355uu5b2VL+aIkeeahOaWh+ahoy9IQnVpbGRlclByb2plY3RzL+i1hOiury9jb21wb25lbnRzL3Njcm9sbGVyL3Njcm9sbGVyLnZ1ZT85YjgxIiwid2VicGFjazovLy9EOi/nlKjmiLfnm67lvZUv5oiR55qE5paH5qGjL0hCdWlsZGVyUHJvamVjdHMv6LWE6K6vL2NvbXBvbmVudHMvc2Nyb2xsZXIvc2Nyb2xsZXIudnVlP2Y1MWIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFxSDtBQUNySDtBQUM0RDtBQUNMO0FBQ2E7OztBQUdwRTtBQUN1TDtBQUN2TCxnQkFBZ0IsMkxBQVU7QUFDMUIsRUFBRSw4RUFBTTtBQUNSLEVBQUUsbUZBQU07QUFDUixFQUFFLDRGQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxF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SkEsRUFqQkE7O0FBdUJBO0FBQ0E7QUFDQSxnQkFEQSxrQkFDQSxNQURBLEVBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FKQSxFQXhCQTs7QUE4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBbkNBLEVBMUNBOzs7O0FBaUZBLHlEQXBGQSxDQW9GQTtBQUNBO0FBQ0E7QUFDQSxtQkFEQTtBQUVBLGVBRkEsR0FEQTs7QUFLQTtBQUNBLGtEQTNGQSxDQTJGQTs7QUFFQTtBQUNBO0FBQ0EsbUNBL0ZBLENBK0ZBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFEQSxtQkFDQSxHQURBLEVBQ0E7QUFDQSx3REFEQSxDQUNBO0FBQ0EsaUVBRkEsQ0FFQTtBQUNBLG9EQUhBLENBR0E7QUFDQSxPQUxBOzs7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FGQTtBQUdBLE9BTkEsTUFNQTtBQUNBO0FBQ0E7QUFDQSxZQURBO0FBRUEsU0FGQTtBQUdBO0FBQ0E7QUFDQTtBQUNBLFNBTkE7QUFPQSxTQVBBOztBQVNBO0FBQ0EsS0FwQkE7QUFxQkEsR0FqUUE7QUFrUUEsU0FsUUEscUJBa1FBO0FBQ0E7QUFDQTtBQUNBLEdBclFBLEU7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFBb2dDLENBQWdCLHk4QkFBRyxFQUFDLEM7Ozs7Ozs7Ozs7O0FDQXhoQztBQUNBLE9BQU8sS0FBVSxFQUFFLGtCQUtkIiwiZmlsZSI6ImNvbXBvbmVudHMvc2Nyb2xsZXIvc2Nyb2xsZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL3Njcm9sbGVyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1jYmRiNjk3OCZcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3Njcm9sbGVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vc2Nyb2xsZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL3Njcm9sbGVyLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiY29tcG9uZW50cy9zY3JvbGxlci9zY3JvbGxlci52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTE2LTAhLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi90ZW1wbGF0ZS5qcyEuLi8uLi8uLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci9wYWdlLW1ldGEuanMhLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL3Njcm9sbGVyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1jYmRiNjk3OCZcIiIsInZhciBjb21wb25lbnRzXG52YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbn1cbnZhciByZWN5Y2xhYmxlUmVuZGVyID0gZmFsc2VcbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xMi0xIS4uLy4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc2NyaXB0LmpzIS4uLy4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi9zY3JvbGxlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEyLTEhLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zY3JpcHQuanMhLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL3Njcm9sbGVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsIjx0ZW1wbGF0ZT5cclxuXHQ8dmlldyBjbGFzcz1cInNjcm9sbGVyLXdhcnBcIj5cclxuXHRcdDxzY3JvbGwtdmlld1xyXG5cdFx0XHQ6aWQ9XCJ2aWV3SWRcIlxyXG5cdFx0XHRjbGFzcz1cInNjcm9sbGVyXCJcclxuXHRcdFx0OmNsYXNzPVwieyAnc2Nyb2xsZXItZml4ZWQnOiBmaXhlZCB9XCJcclxuXHRcdFx0OnN0eWxlPVwieyAncGFkZGluZy10b3AnOiBwYWRUb3AsICdwYWRkaW5nLWJvdHRvbSc6IHBhZEJvdHRvbSwgdG9wOiBmaXhlZFRvcCwgYm90dG9tOiBmaXhlZEJvdHRvbSB9XCJcclxuXHRcdFx0OnNjcm9sbC10b3A9XCJzY3JvbGxUb3BcIlxyXG5cdFx0XHQ6c2Nyb2xsLXdpdGgtYW5pbWF0aW9uPVwic2Nyb2xsQW5pbVwiXHJcblx0XHRcdEBzY3JvbGw9XCJzY3JvbGxcIlxyXG5cdFx0XHRAdG91Y2hzdGFydD1cInRvdWNoc3RhcnRFdmVudFwiXHJcblx0XHRcdEB0b3VjaG1vdmU9XCJ0b3VjaG1vdmVFdmVudFwiXHJcblx0XHRcdEB0b3VjaGVuZD1cInRvdWNoZW5kRXZlbnRcIlxyXG5cdFx0XHRAdG91Y2hjYW5jZWw9XCJ0b3VjaGVuZEV2ZW50XCJcclxuXHRcdFx0OnNjcm9sbC15PVwic2Nyb2xsQWJsZVwiXHJcblx0XHRcdDp0aHJvdHRsZT1cInNjcm9sbGVyLm9wdFVwLm9uU2Nyb2xsID09IG51bGxcIlxyXG5cdFx0XHQ6ZW5hYmxlLWJhY2stdG8tdG9wPVwidHJ1ZVwiXHJcblx0XHQ+XHJcblx0XHRcdDx2aWV3IDpzdHlsZT1cInsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZLCB0cmFuc2l0aW9uOiB0cmFuc2l0aW9uIH1cIj5cclxuXHRcdFx0XHQ8IS0tIOS4i+aLieWKoOi9veWMuuWfny0tPlxyXG5cdFx0XHRcdDx2aWV3IHYtaWY9XCJzY3JvbGxlci5vcHREb3duLnVzZVwiIGNsYXNzPVwic2Nyb2xsZXItZG93bndhcnBcIj5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZG93bndhcnAtY29udGVudFwiPlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImxvYWRpbmdcIj5cclxuXHRcdFx0XHRcdFx0XHQ8aW1hZ2VcclxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzPVwibG9hZC1pY29uXCJcclxuXHRcdFx0XHRcdFx0XHRcdHNyYz1cImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBSUFBQUFDQUNBWUFBQUREUG1ITEFBQVFqMGxFUVZSNFh1MWRlNUFjeFhuL2ZYTVBTcTVBaVBFRFl1SXlPSmdxRTJPU2dqZzZxRUFTVVFZU0E4WkFlQWsvWkc1M0JWS2szVm5KdXAzVmFiV3pwOGZPM2w2ZGhIYm1LSWdEQ1JDQnNBTUdiQU94WEFhUmxHT0hSMEVGSWdOVklXWGhBRkZFWWhYM21DL1ZlM2NxbmRqYjd0MmQyZG5IVEpYK1VmLzY2Ky83OVcvN2VucTYreU4wNFROaTJaOTF3Y3ZCK0RRUjlURGpEZEx3V0NvUmZhcmI2S0J1Q3ppYkwyMGlvdUZLY1ROekpwMk1iZW9tVHJwS0FPWm82Uk53NmMwcUhYeElBNVlPNmRHWHUwVUUzU1VBeTlrRzhMcHFuY3ZBanJRZVhSMEtvQU1aeUZuMmR4aTRzbnBvdk4vUVkyZDBZUGdWUStxeUVjRCtFWUNMWkoxcjZOR3U0YVZyQWhXZGJscWhBSTRWZnlpQUNzTkJPQUxJeGtnUHkzT1d2UXJBamN4OE9vaGVBZEdlNDF6MzNtUXk5aXNQbXltYkNuSUV5T2RMSDN0ZjAyNEE4MWNBbkFaZ0NvUWRiL1ZOM3I1ajllcjN2WTVWMVY2Z0k0Q1pMKzBHMFRVVm5QMVhiWEw2NHFHaDI5NVJEVVFGRjVRQVJrWjJudVQyOXo0QjRQY3IrTGwzYXNwZGtkbXc4aldWR0x6R0JDWUEweXB0QWVoYml3YkV0TWRJUnE3Mk11Q2dCR0RtblFkQjVWOSs1WWRvajVId05sWlYzZ0lSUUc2Nzh3ZXM4VDRBeDBsZXlXNDI5Tmc5cXNISWNFRUl3TFJLeXdHNlcrWWJOSnhueEtQL0lzVjVEQWhFQU5sODZTSWlFcTlra3Y3SGMrLzAvSHFnR0k4ZmxrRlZ5cHN0Z0xXam8wdE9tdm5RUGhET2tmbm51dnoxamV0aTM1Ymh2QzV2YlFFQVlHWWpuWXpsdkFpODJRTEk1a3NwSWpKVmZBL3FPMFFnQWhnZTN0M2ZkL3k3QndFc1VTRG5IWTIwZ2FIRTRLc0syS3FRWmdwZ3BERHhHWmRkOFdmdUpCVy9lN1RlTXpiRXY3bGZCZXNsSmhBQmlBQnlsdk1QREw1Y0pSZ2ljbEtKU0ZRRld3M1RUQUhrQ283TnpCRVZud24wY0VxUFhLR0M5Um9UbUFCR1JpY3VkRjEzcjJwQXpOckY2ZVRnazZyNFNyaG1DU0NibjFoRzVJclhQcVZIMDdTTGh1S0RQMVlDZXd3S1RBQWlEclBnN0FEemJXb3g4ZU9HSHJ0TURWc1oxU3dCbUZicE1ZQXVWZktWYUtlUmlJakZzRUNlUUFXUXpkOXhHdEdNK0R0NXNrcjBSTHdpbFlqZHBZSU5hZ1RJRlVyZllLWTdGWDA4d053emtFN2U4cm9pM25OWW9BSW9qd0pXYVIxQTJ4UWplMm5xdmNtQlRHYjFJVVg4QXBqZkk4RHc4UGdKZmNmM0MwR2ZwZVlmcnpmMDJIWTFyRCtvd0FVd1BEemMyM3Y4eWZzSWRKNUtpSTI4THZrdGdHcmJ6WTZOamNFL25YN3Z3RUFtazVsV2lkc3ZUT0FDRUlGdHpwZXUwNGp1VXdxU2NNZ2xiV0JqZlBBbEpmeFJJRDhGc0hsMDRpeE52UFl4VGxEeHkyVytmbU15ZHI4SzFrOU1Td2lnL0tkQXRsNitnQVc2eTlBaksyb2x4azhCbUpaeko4RGZVUExKaCs4Y1N1MVdBTFdPQUFvVEEyRDNHZFZBQ05wbEtYM3djVlg4N0h6RG53MGhPV3ZpVW9iN21MSXZwSjF2SkFiRlhDSHdwMlVFSUpqSVdjNG9nOWVxc2NKUEducnNZalhzTE1vdkFaaFc2UW1BbHFuNFFxQmlTby9FVmJETndMU1VBTGFOMzNIcTVQc3p6eExoVkpYZ21UbWFUc1ljRmF4ZkFzam1TeEVpc2xWOFlNYWIvY2YxTEYyLytwWnFXOU5WVEhtR2FTa0JpS2l5Vm1rdGdVWVZJM3hWbTV3ZVVOMDQ0dlVJTUxmUlF3emxuMUh4bDhIeHRCNHJxbUNiaFdrNUFjeitVa3ZQQURTZ1FnSVI1VktKaUtHQzlWb0F1WUpqTW5OS3BXMkE5eGw2N0h3MWJQTlFyU21BUXVrcllIcFFoUVlDRHFOSEcwaXRIWHhPaHM5WjloNEdycXFPVXpzWGtDdE9uSU1aZHgrcmZkRUVpSzgyRXJFOU1oK2JYVjZUQU1ST0hwZmM4bnZ1OVArZXRDK1R1WGJTTDRkemxuTWZnNjlUczAvM0dIcmtaaG5Xek5zRkVHUVRzQWxEajBxLzRwbVdjemZFQVZPRmgwRDNwL1RJOVFyUXVpRmlrODE4NVhReXB2eVJUVmtBYzN2NHhBeDlmaHZYWVFZL1FkRHloaDU1dW03UEY2bTR4Wm80YndibDcrbTlLclkxMHI0MGxCajhYalhzaUdWZjVRSlZmNFhNL0NjeUFuUFdya3NabXVwcjMzUVB0SUVOK3VCUFZlS29CWlBkN255YU5JNkQrUm9RZmZSSVhjS1lrWWdxdlUwcENhREs3dDNaTmhtajFFdFdhbTNrbDdVRUlNT2FDbWY1anJMeGlLRkhwZnNMc25uN1VTSlUvS3FvdXN4c0Z1d2lHR3RrL3MrVzAzWkRqNnhYdzZxaEhNZnBlL3NReDExQ25JQ1BWYXpGL0lDUmpGMHJzeWdWZ0drNTN3SjRpOVFRNFRVWFpLVVRrWklNcTFvK3ZQMzJrL3UwSGpFS2lIMzBzdWV3b1VjL0pBT0o4bXpCdmt3RGhwaHhKb0FlQUsrNUx1OVUzWk9uT3BrRThQcVVPek9RV1hmckFSVy9WRENtWlY4UFJoeUVjMlY0bFlPdUNnS3dYd0R3T1ZsalI1VS9RVUErcFVlVk4wUlVzMjNtUzdlQmFJZThmWHJCMENPZmwrTWFSeWdMZ0htVmtZenRiTHhGWUtSWU9wOW5LQzZmeEI3ZG1ueENLeGRBdnZTckJYOWZGS01oNXRMa05GdGVISGpJNWt0N2llakNhazBUNks1VUhkOEhGTU5aQURNdCs2OEJmSzFhWFdiK2NUb1preDVFbGJVL3ZOWDVaRzh2aTZIK3IyVFlTdVd5WTI1eUFWajJUd0JjVUUvakFINEpnbVVrb3FvTE94V2J5UloyWFU3UTdnTmowU0dlQ011YWRjV0xhVGtYQUN4NFdmUmhjcTlJSjFZK1hDZHY1V3Btd1k2WGgzdmdFL1hhYVZ3QUJXY05tQnRkdlhwYUl5MC9sQmlzbTVDUnZMM1VKZXdDS3V5eFoxcGxKQ09lRExXcVJKdDU1ellRZi9CUEUvTi9RZE51TlJLUkIxUnRIWXNic2V5ckdSREQvZEo2YlloNkRDNm05VmpWMTE3cENGQSsxRWowL1VYT3RkWHEzN2MxSUYvdkZTekR4ZUtKZmU2U1lmQ2NDQWpQRWJzL1RPa3JhL29xV0t2VGkrR3oyKzFMU09NTEFmcWpPY3pMN05Kb2VsM2tGL1cwWVk2Vy9oQXVpUTc3eTNycUw2aEQ5RkpmbjNhSjdMdURWQURDYUhuTnU2L1BxWHErVGRsak9ramtXZ2Y2cHF3Z1Q4VXF1OXNFWUs3b25NTFRMR2Iyb3ZPMWhwc2svRnhqTEZmNW9Ta0pZTjZodVhOdXdrbnBVU2RaRUF6K0dSSGxqVVQwNzJYWVRpN1BXdllxUXJualA5VnduSVMzd0R6MlZ2OVVVZlhIVlpNQWhJT2pvNk5MRHZPU09ITjVxUHB3bzA2cnZLczIya1lyMWpmejloVnp2L2cvOXNJL0FuWk1hdTVZSmw3Yk1mT2FCVER2YkhiYnJqT3BSeE1pR1BRZ0FLWDFkdy9hQ2R4RUxyL3JiR2hha2hrM2VlRU1BUS9OdU83WXhuVXJxNzZWTE5aVzNRS1lONWl6N0l0NWRtWHFra1lDY3VHZXUxRmYrYk5HYkxSNlhiRUNTWXlKUmw3cjVtTWs0SjlubU1jYTNWamFzQUNPakFoNWV3WE5UbUkrVzA5SEVHRjVLaEg5MjNycXRrT2RyVnVkMzV6cTR4ZUk4Y2xHL0NYUW15N2NzZW4zRGhRem1ZemJpQzFSMXpNQkNHTWl5T2xlRmlJUS8zNmpOdWRvZzZGSHR0WldwMzNRMllJVEkyYXhqbEhYUTBUc3NqdEc1QmFOeEszL1VaZVJDcFU4RmNDOC9jMmp6dWMwdHl5RXFzdWxSL3ZqRXM3Wm1JZys3MVZncldiSHRHeXhkN0d1K1JLRGR4TngwVWlzL0NldjQvSkZBRWZtQjNubno1bktRdmpUYW82TGlVeEtqeTUraDQ3WFVRZGd6N1Jzc1pqMnhWcWFac1l6eEZ3MDF2bTNrOGhYQVJ5Wkg1U0hQL0ZuZ1grM0FnSFBUNE9XYmRJamI5ZENUcnRocy9uU0xVUWtKb0Fxenh0aStkMUl4c1pWd0kxZ21pSUE0ZURJK0YwZmRTZW5WZ0I4QTRCVGlQQUtneDcwNjA3QVJranhvKzRteS9sSUw5eG5BYXIwSTVocmtpWUJkMnpLZFl0ZTdpR1FqTDUraEJ2YXJNUkFybUQvR1RNV3UrVGk3MXk0eFdhL0NqZHRCQWdsTWN2QTdBVFp2UUdnTDRKd0poaFBhYVJOeVBZeitzVmZLQUMvbUcwVHU2RUEycVNqL0hJekZJQmZ6TGFKM1ZBQWJkSlJmcmtaQ3NBdlp0dkViaWlBTnVrb3Y5d01CZUFYczIxaU54UkFtM1NVWDI0ZUVVQjVsY3JGWlVUNEZEZTAxWXZFb2RIWE5PS2ZOM0twbzE4QnQ2SmQ3N2l2SGgwQjd4NmJKcmNzZ0ZydXQ2dUZRQ2ErTjUySTNWaExuVzdEK3NXOWpNZjVnN0EwbTBnWnp3SnE5OXZKREI5YjN1azdmV3JsNDJpODM5eExmQ3VueWFVYWoyRFhISy9ZdTViU28vTUhKMnF1MzhrVnNwWTlUa0JnRjBXTEhkbWtsazYxc1c2WW11TFRNaHRpYnpSbXBmTnFtMWJwMzZ0L0h2WTdadDR2QktCd2IwNWpqb1FDcU14ZlN3aEE4ZDZjUmhUd29xRkh6MjdFUUtmV2JXU2ZvRWVjVE5CSVllSXZYSFlmOGNqZ0I4eW9YcnZpVi91dGJOZHY3bVd4aTN1VmZIME5oT0k5TlRKSE83azg4TmZBZVhMTlVmdGN1TGgxTHIxNkl3Y1ZEeEt3RjB3UHBKS1JlenU1ODd5S3pVUHVaUzZKaWZoZWFMaDlQa2xsdUJRc282ekR5ME1CZEhnSHk4SUxCU0JqcU1QTFF3RjBlQWZMd2dzRklHT293OHREQVhSNEI4dkNDd1VnWTZqRHkwTUJkSGdIeThJTEJTQmpxTVBMUXdGMGVBZkx3Z3NGSUdPb3c4dERBWFI0Qjh2Q0N3VWdZNmpEeTBNQmRIZ0h5OEx6WEFDNWduMHpNNzRPNEd3UTlvUDVIMTFOdTNkalBQS2l6Sm13dlBrTWVDYUFFY3U1MHAzTisxdng3bHVWYkZ6TkR6OXNzV0VCYk00N1h5RENHcExuK0h0MXF1ZndGekpyMXg0TWFXOGRCdW9XZ0ZtNC9YZVlOWkhuVjZSUFU3TERjTCtjMWxkK3QzWENEejFSNnJpamFSb2VIdTd0TytHVU5YTjU4MnJLWlJOdUVHMDl3ZFVrQU5NcTNRaW1OU281NnlxRkdncWdqUVVnelI2cUVCc3p2cGxPUnU5VWdJYVFKakdnTkFKNDBma0FmbURvMFlaeUNqU0prNjVxUmlvQTA3TEZEZGZpcHV2Nkg2S1hOT1pyVlpJWTFkOUlXTE1lQmhRRTRQd0U0SG9UUjRvWGhIczA4TmF3OCt2cEh2L3JTQVdRczV6L1pQQnYxKzRLUFVtTXNWUXk4bWp0ZGNNYXpXSkFLZ0RUc2wrdk1hWFp5OHc4bGs3RzdtaFdFR0U3OVRNZ0Y4QnMvdHFDUWhQL0RXQnNxbjl5TExONjlTRUZmQWhwQVFha0FsZzFQbjdjeHlmN1JiYUxSVE5oRTdNelJkcllKajN5YnkwUVUraENEUXhJQlNCc0RXL1pkWHBmZjg5Mk1DOUk2MEtnaDBFWVN5VWlQNnFoelJEYVFnd29DV0RlWDNHSzFaM20zeE5YeWZVUTdRNW45aTNVazNXNlVwTUE2bXdqck5iQ0RJUUNhT0hPYVlacm9RQ2F3WElMdHhFS29JVTdweG11aFFKb0Jzc3QzRVpMQ1dCejNsNnFpWDJGUk5jSXpzUXRvd0E5M1R2VG0xbS9mc1Y3TGN4ajI3cldNZ0l3Qzg0MVlONWRpVWtoQkFKOWJTaGNhUEpjYUMwaGdKRzh2ZFFsN0pORU4ySG8wWWpuREhTNXdaWVFRTTZ5SDJEZ2FsbGZHSHEwSmZ5VitkbE81WUVUdWpsZnVrNGp1aytGdEZBQUtpelZoZ2xVQUdLSGNlL3hKKzhqMEhrcWJvY0NVR0dwTmt5Z0FqQ3QwanFBdGltNTNBSFh6b3BETkJxNVY0RnhHZ2kvQUxSSERUM3l0Rkw4UG9FQ0U4Q1cwVjJuejdpYW1QaDlYQ1UySWw3UnpqbUlGa3NPd2VENzAzcnNlaFVPL01BRUpvQ2NaZTlrbE84bWxqNE1maml0eDY2UUFsc1VJTHNXbmhsYjBzbm9VQkR1QnlZQTA3TGZnV0oyTXRmbEN6YXVpejBUQkVHTnRqbGNMSjdZTjdORTdKYXErZ1NWVkNNUUFXVHpwWXVJU0hFVENXMDM5TWg2R1lIMWxHOGJ2K1BVWC8vZmRLK2Y2V3hVWXczcTFGUnJDNER4eWpUUkJadjB5TnYxZFBCaWRYSUYreVl3VmpLd2RBN3pJak0vbEU3R05ublpqckNsS2dBaWZEV1ZpTjd0ZGZzeWV5MHRBRDhtZnFibDNBM3c4b3JFK1BDbU1Udytma0xmWlAvL1NEdUNzQ3lWaUQ0bHczbGRIb2dBWm44WjlqMUV1R214Z0FoNEtLVkhGK3hCYkRUNHVkdEwvcWFhSFdLNjBldEVGd3FKdVI0eDlPamxqY1pYVC8zQUJGQk9ta2kwRzh4blZYRDgrV25RTXMrSGZzditEZ05YVmhVQThOMlVIdjF5UFdRdVZtZVQ1WHlrRi93a2dNOS9BQlB3c2JuQUJDQ0ltTXVjbVR3NlRRMkRpLzM5dmFQclY5L3lwcGVkSUd5WmxpMW00eWRLN0I0MDlPaHZlZDIybUhCT1RrN0hDU1N1MFJIUHV3QWUxNENSSURmWEJpb0FyMG1XMlRNdG0yVVlVZDVOUzg2aEFDb29JaFNBeXMra0RUSGhDUERCVHV1eUVVQWxWeS92Ti9UWUdXMm83N3BjN2pJQjJPS2lDM0hoUmJXbnEzWWVkWlVBVkZLMWluU3FRNG5CNzlYMWMyckRTbDBsQU5FLzFWSzFCclVlSDZSdXVrNEE1ZldBaFdseXhYOHRTS2NhWkljMHUrMy9CMFkxR1NhWnJGUWdBQUFBQUVsRlRrU3VRbUNDXCJcclxuXHRcdFx0XHRcdFx0XHQ+PC9pbWFnZT5cclxuXHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImxvYWQtdGV4dFwiPnt7IGRvd25UZXh0IH19PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDwhLS0g5YiX6KGo5YaF5a65IC0tPlxyXG5cdFx0XHRcdDxzbG90Pjwvc2xvdD5cclxuXHJcblx0XHRcdFx0PCEtLSDnqbrluIPlsYAgLS0+XHJcblx0XHRcdFx0PHZpZXcgdi1pZj1cImlzU2hvd0VtcHR5XCIgY2xhc3M9XCJzY3JvbGxlci1lbXB0eVwiIDpjbGFzcz1cInsgJ2VtcHR5LWZpeGVkJzogb3B0RW1wdHkuZml4ZWQgfVwiIDpzdHlsZT1cInsgJ3otaW5kZXgnOiBvcHRFbXB0eS56SW5kZXgsIHRvcDogb3B0RW1wdHkudG9wIH1cIj5cclxuXHRcdFx0XHRcdDxibG9jayB2LWlmPVwib3B0RW1wdHkudHlwZSA9PSAnbm9ybWFsJ1wiPlxyXG5cdFx0XHRcdFx0XHQ8aW1hZ2Ugdi1pZj1cIm9wdEVtcHR5Lmljb25cIiBjbGFzcz1cImVtcHR5LWljb25cIiBzcmM9XCIvc3RhdGljL2ltYWdlcy9pY29uLW5vLWRhdGEtMDEucG5nXCIgbW9kZT1cIndpZHRoRml4XCIgLz5cclxuXHRcdFx0XHRcdFx0PHZpZXcgdi1pZj1cIm9wdEVtcHR5LnRpcFwiIGNsYXNzPVwiZW1wdHktdGlwXCIgc3R5bGU9XCJjb2xvcjogIzg0OGM5ODtcIj57eyBvcHRFbXB0eS50aXAgfX08L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDx2aWV3IHYtaWY9XCJvcHRFbXB0eS5idG5UZXh0XCIgY2xhc3M9XCJlbXB0eS1idG5cIiBAY2xpY2s9XCJlbXB0eUNsaWNrXCI+e3sgb3B0RW1wdHkuYnRuVGV4dCB9fTwvdmlldz5cclxuXHRcdFx0XHRcdDwvYmxvY2s+XHJcblx0XHRcdFx0XHQ8YmxvY2sgdi1lbHNlPlxyXG5cdFx0XHRcdFx0XHQ8aW1hZ2Ugdi1pZj1cIm9wdEVtcHR5Lmljb25cIiBjbGFzcz1cImVtcHR5LWljb25cIiA6c3JjPVwib3B0RW1wdHkuaWNvblwiIG1vZGU9XCJ3aWR0aEZpeFwiIC8+XHJcblx0XHRcdFx0XHRcdDx2aWV3IHYtaWY9XCJvcHRFbXB0eS50aXBcIiBjbGFzcz1cImVtcHR5LXRpcFwiPnt7IG9wdEVtcHR5LnRpcCB9fTwvdmlldz5cclxuXHRcdFx0XHRcdFx0PHZpZXcgdi1pZj1cIm9wdEVtcHR5LmJ0blRleHRcIiBjbGFzcz1cImVtcHR5LWJ0blwiIEBjbGljaz1cImVtcHR5Q2xpY2tcIj57eyBvcHRFbXB0eS5idG5UZXh0IH19PC92aWV3PlxyXG5cdFx0XHRcdFx0PC9ibG9jaz5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblxyXG5cdFx0XHRcdDwhLS0g5LiK5ouJ5Yqg6L295Yy65Z+fIC0tPlxyXG5cdFx0XHRcdDx2aWV3IHYtaWY9XCJzY3JvbGxlci5vcHRVcC51c2VcIiBjbGFzcz1cInNjcm9sbGVyLXVwd2FycFwiPlxyXG5cdFx0XHRcdFx0PCEtLSDliqDovb3kuK0gKOatpOWkhOS4jeiDveeUqHYtaWYs5ZCm5YiZYW5kcm9pZOWwj+eoi+W6j+W/q+mAn+S4iuaLieWPr+iDveS8muS4jeaWreinpuWPkeS4iuaLieWbnuiwgykgLS0+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImxvYWRpbmdcIiB2LXNob3c9XCJpc1VwTG9hZGluZ1wiPlxyXG5cdFx0XHRcdFx0XHQ8aW1hZ2VcclxuXHRcdFx0XHRcdFx0XHRjbGFzcz1cImxvYWQtaWNvblwiXHJcblx0XHRcdFx0XHRcdFx0c3JjPVwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFJQUFBQUNBQ0FZQUFBRERQbUhMQUFBUWowbEVRVlI0WHUxZGU1QWN4WG4vZlhNUFNxNUFpUEVEWXVJeU9KZ3FFMk9TZ2pnNnFFQVNVUVlTQThaQWVBay9aRzUzQlZLazNWbkp1cDNWYWJXenA4Zk8zbDZkaEhibUtJZ0RDUkNCc0FNR2JBT3hYQWFSbEdPSFIwRUZJZ05WSVdYaEFGRkVZaFgzbUMvVmUzY3FuZGpiN3QyZDJkbkhUSlgrVWYvNjYrLzc5Vy83ZW5xNit5TjA0VE5pMlo5MXdjdkIrRFFSOVREakRkTHdXQ29SZmFyYjZLQnVDemliTDIwaW91RktjVE56SnAyTWJlb21UcnBLQU9abzZSTnc2YzBxSFh4SUE1WU82ZEdYdTBVRTNTVUF5OWtHOExwcW5jdkFqclFlWFIwS29BTVp5Rm4yZHhpNHNucG92Ti9RWTJkMFlQZ1ZRK3F5RWNEK0VZQ0xaSjFyNk5HdTRhVnJBaFdkYmxxaEFJNFZmeWlBQ3NOQk9BTEl4a2dQeTNPV3ZRckFqY3g4T29oZUFkR2U0MXozM21ReTlpc1BteW1iQ25JRXlPZExIM3RmMDI0QTgxY0FuQVpnQ29RZGIvVk4zcjVqOWVyM3ZZNVYxVjZnSTRDWkwrMEcwVFVWblAxWGJYTDY0cUdoMjk1UkRVUUZGNVFBUmtaMm51VDI5ejRCNFBjcitMbDNhc3Bka2RtdzhqV1ZHTHpHQkNZQTB5cHRBZWhiaXdiRXRNZElScTcyTXVDZ0JHRG1uUWRCNVY5KzVZZG9qNUh3TmxaVjNnSVJRRzY3OHdlczhUNEF4MGxleVc0MjlOZzlxc0hJY0VFSXdMUkt5d0c2VytZYk5KeG54S1AvSXNWNURBaEVBTmw4NlNJaUVxOWtrdjdIYysvMC9IcWdHSThmbGtGVnlwc3RnTFdqbzB0T212blFQaERPa2ZubnV2ejFqZXRpMzViaHZDNXZiUUVBWUdZam5Zemx2QWk4MlFMSTVrc3BJakpWZkEvcU8wUWdBaGdlM3QzZmQveTdCd0VzVVNEbkhZMjBnYUhFNEtzSzJLcVFaZ3BncEREeEdaZGQ4V2Z1SkJXL2U3VGVNemJFdjdsZkJlc2xKaEFCaUFCeWx2TVBETDVjSlJnaWNsS0pTRlFGV3czVFRBSGtDbzdOekJFVm53bjBjRXFQWEtHQzlSb1RtQUJHUmljdWRGMTNyMnBBek5yRjZlVGdrNnI0U3JobUNTQ2JuMWhHNUlyWFBxVkgwN1NMaHVLRFAxWUNld3dLVEFBaURyUGc3QUR6YldveDhlT0dIcnRNRFZzWjFTd0JtRmJwTVlBdVZmS1ZhS2VSaUlqRnNFQ2VRQVdRemQ5eEd0R00rRHQ1c2tyMFJMd2lsWWpkcFlJTmFnVElGVXJmWUtZN0ZYMDh3Tnd6a0U3ZThyb2kzbk5Zb0FJb2p3SldhUjFBMnhRamUybnF2Y21CVEdiMUlVWDhBcGpmSThEdzhQZ0pmY2YzQzBHZnBlWWZyemYwMkhZMXJEK293QVV3UER6YzIzdjh5ZnNJZEo1S2lJMjhMdmt0Z0dyYnpZNk5qY0Uvblg3dndFQW1rNWxXaWRzdlRPQUNFSUZ0enBldTA0anVVd3FTY01nbGJXQmpmUEFsSmZ4UklEOEZzSGwwNGl4TnZQWXhUbER4eTJXK2ZtTXlkcjhLMWs5TVN3aWcvS2RBdGw2K2dBVzZ5OUFqSzJvbHhrOEJtSlp6SjhEZlVQTEpoKzhjU3UxV0FMV09BQW9UQTJEM0dkVkFDTnBsS1gzd2NWWDg3SHpEbncwaE9XdmlVb2I3bUxJdnBKMXZKQWJGWENId3AyVUVJSmpJV2M0b2c5ZXFzY0pQR25yc1lqWHNMTW92QVpoVzZRbUFscW40UXFCaVNvL0VWYkROd0xTVUFMYU4zM0hxNVBzenp4TGhWSlhnbVRtYVRzWWNGYXhmQXNqbVN4RWlzbFY4WU1hYi9jZjFMRjIvK3BacVc5TlZUSG1HYVNrQmlLaXlWbWt0Z1VZVkkzeFZtNXdlVU4wNDR2VUlNTGZSUXd6bG4xSHhsOEh4dEI0cnFtQ2JoV2s1QWN6K1VrdlBBRFNnUWdJUjVWS0ppS0dDOVZvQXVZSmpNbk5LcFcyQTl4bDY3SHcxYlBOUXJTbUFRdWtyWUhwUWhRWUNEcU5IRzBpdEhYeE9oczlaOWg0R3JxcU9VenNYa0N0T25JTVpkeCtyZmRFRWlLODJFckU5TWgrYlhWNlRBTVJPSHBmYzhudnU5UCtldEMrVHVYYlNMNGR6bG5NZmc2OVRzMC8zR0hya1pobld6TnNGRUdRVHNBbERqMHEvNHBtV2N6ZkVBVk9GaDBEM3AvVEk5UXJRdWlGaWs4MTg1WFF5cHZ5UlRWa0FjM3Y0eEF4OWZodlhZUVkvUWREeWhoNTV1bTdQRjZtNHhabzRid2JsNyttOUtyWTEwcjQwbEJqOFhqWHNpR1ZmNVFKVmY0WE0vQ2N5QW5QV3Jrc1ptdXByMzNRUHRJRU4rdUJQVmVLb0JaUGQ3bnlhTkk2RCtSb1FmZlJJWGNLWWtZZ3F2VTBwQ2FESzd0M1pOaG1qMUV0V2FtM2tsN1VFSU1PYUNtZjVqckx4aUtGSHBmc0xzbm43VVNKVS9LcW91c3hzRnV3aUdHdGsvcytXMDNaRGo2eFh3NnFoSE1mcGUvc1F4MTFDbklDUFZhekYvSUNSakYwcnN5Z1ZnR2s1M3dKNGk5UVE0VFVYWktVVGtaSU1xMW8rdlAzMmsvdTBIakVLaUgzMHN1ZXdvVWMvSkFPSjhtekJ2a3dEaHBoeEpvQWVBSys1THU5VTNaT25PcGtFOFBxVU96T1FXWGZyQVJXL1ZEQ21aVjhQUmh5RWMyVjRsWU91Q2dLd1h3RHdPVmxqUjVVL1FVQStwVWVWTjBSVXMyM21TN2VCYUllOGZYckIwQ09mbCtNYVJ5Z0xnSG1Wa1l6dGJMeEZZS1JZT3A5bktDNmZ4QjdkbW54Q0t4ZEF2dlNyQlg5ZkZLTWg1dExrTkZ0ZUhIakk1a3Q3aWVqQ2FrMFQ2SzVVSGQ4SEZNTlpBRE10KzY4QmZLMWFYV2IrY1RvWmt4NUVsYlUvdk5YNVpHOHZpNkgrcjJUWVN1V3lZMjV5QVZqMlR3QmNVRS9qQUg0SmdtVWtvcW9MT3hXYnlSWjJYVTdRN2dOajBTR2VDTXVhZGNXTGFUa1hBQ3g0V2ZSaGNxOUlKMVkrWENkdjVXcG13WTZYaDN2Z0UvWGFhVndBQldjTm1CdGR2WHBhSXkwL2xCaXNtNUNSdkwzVUpld0NLdXl4WjFwbEpDT2VETFdxUkp0NTV6WVFmL0JQRS9OL1FkTnVOUktSQjFSdEhZc2JzZXlyR1JERC9kSjZiWWg2REM2bTlWalYxMTdwQ0ZBKzFFajAvVVhPdGRYcTM3YzFJRi92RlN6RHhlS0pmZTZTWWZDY0NBalBFYnMvVE9rcmEvb3FXS3ZUaStHejIrMUxTT01MQWZxak9jekw3TkpvZWwza0YvVzBZWTZXL2hBdWlRNzd5M3JxTDZoRDlGSmZuM2FKN0x1RFZBRENhSG5OdTYvUHFYcStUZGxqT2tqa1dnZjZwcXdnVDhVcXU5c0VZSzdvbk1MVExHYjJvdk8xaHBzay9GeGpMRmY1b1NrSllONmh1WE51d2tucFVTZFpFQXorR1JIbGpVVDA3MlhZVGk3UFd2WXFRcm5qUDlWd25JUzN3RHoyVnY5VVVmWEhWWk1BaElPam82TkxEdk9TT0hONXFQcHdvMDZydktzMjJrWXIxamZ6OWhWenYvZy85c0kvQW5aTWF1NVlKbDdiTWZPYUJURHZiSGJicmpPcFJ4TWlHUFFnQUtYMWR3L2FDZHhFTHIvcmJHaGFraGszZWVFTUFRL051TzdZeG5VcnE3NlZMTlpXM1FLWU41aXo3SXQ1ZG1YcWtrWUNjdUdldTFGZitiTkdiTFI2WGJFQ1NZeUpSbDdyNW1NazRKOW5tTWNhM1ZqYXNBQ09qQWg1ZXdYTlRtSStXMDlIRUdGNUtoSDkyM3JxdGtPZHJWdWQzNXpxNHhlSThjbEcvQ1hRbXk3Y3NlbjNEaFF6bVl6YmlDMVIxek1CQ0dNaXlPbGVGaUlRLzM2ak51ZG9nNkZIdHRaV3AzM1EyWUlUSTJheGpsSFhRMFRzc2p0RzVCYU54SzMvVVplUkNwVThGY0M4L2Myanp1YzB0eXlFcXN1bFIvdmpFczdabUlnKzcxVmdyV2JIdEd5eGQ3R3UrUktEZHhOeDBVaXMvQ2V2NC9KRkFFZm1CM25uejVuS1F2alRhbzZMaVV4S2p5NStoNDdYVVFkZ3o3UnNzWmoyeFZxYVpzWXp4RncwMXZtM2s4aFhBUnlaSDVTSFAvRm5nWCszQWdIUFQ0T1diZElqYjlkQ1RydGhzL25TTFVRa0pvQXF6eHRpK2QxSXhzWlZ3STFnbWlJQTRlREkrRjBmZFNlblZnQjhBNEJUaVBBS2d4NzA2MDdBUmtqeG8rNG15L2xJTDl4bkFhcjBJNWhya2lZQmQyektkWXRlN2lHUWpMNStoQnZhck1SQXJtRC9HVE1XdStUaTcxeTR4V2EvQ2pkdEJBZ2xNY3ZBN0FUWnZRR2dMNEp3SmhoUGFhUk55UFl6K3NWZktBQy9tRzBUdTZFQTJxU2ovSEl6RklCZnpMYUozVkFBYmRKUmZya1pDc0F2WnR2RWJpaUFOdWtvdjl3TUJlQVhzMjFpTnhSQW0zU1VYMjRlRVVCNWxjckZaVVQ0RkRlMDFZdkVvZEhYTk9LZk4zS3BvMThCdDZKZDc3aXZIaDBCN3g2YkpyY3NnRnJ1dDZ1RlFDYStONTJJM1ZoTG5XN0Qrc1c5ak1mNWc3QTBtMGdaendKcTk5dkpEQjliM3VrN2ZXcmw0Mmk4Mzl4TGZDdW55YVVhajJEWEhLL1l1NWJTby9NSEoycXUzOGtWc3BZOVRrQmdGMFdMSGRta2xrNjFzVzZZbXVMVE1odGlielJtcGZOcW0xYnAzNnQvSHZZN1p0NHZCS0J3YjA1ampvUUNxTXhmU3doQThkNmNSaFR3b3FGSHoyN0VRS2ZXYldTZm9FZWNUTkJJWWVJdlhIWWY4Y2pnQjh5b1hydmlWL3V0Yk5kdjdtV3hpM3VWZkgwTmhPSTlOVEpITzdrODhOZkFlWExOVWZ0Y3VMaDFMcjE2SXdjVkR4S3dGMHdQcEpLUmV6dTU4N3lLelVQdVpTNkppZmhlYUxoOVBrbGx1QlFzbzZ6RHkwTUJkSGdIeThJTEJTQmpxTVBMUXdGMGVBZkx3Z3NGSUdPb3c4dERBWFI0Qjh2Q0N3VWdZNmpEeTBNQmRIZ0h5OElMQlNCanFNUExRd0YwZUFmTHdnc0ZJR09vdzh0REFYUjRCOHZDQ3dVZ1k2akR5ME1CZEhnSHk4THpYQUM1Z24wek03NE80R3dROW9QNUgxMU51M2RqUFBLaXpKbXd2UGtNZUNhQUVjdTUwcDNOKzF2eDdsdVZiRnpORHo5c3NXRUJiTTQ3WHlEQ0dwTG4rSHQxcXVmd0Z6SnIxeDRNYVc4ZEJ1b1dnRm00L1hlWU5aSG5WNlJQVTdMRGNMK2MxbGQrdDNYQ0R6MVI2cmlqYVJvZUh1N3RPK0dVTlhONTgycktaUk51RUcwOXdkVWtBTk1xM1FpbU5TbzU2eXFGR2dxZ2pRVWd6UjZxRUJzenZwbE9SdTlVZ0lhUUpqR2dOQUo0MGZrQWZtRG8wWVp5Q2pTSms2NXFSaW9BMDdMRkRkZmlwdXY2SDZLWE5PWnJWWklZMWQ5SVdMTWVCaFFFNFB3RTRIb1RSNG9YaEhzMDhOYXc4K3ZwSHYvclNBV1FzNXovWlBCdjErNEtQVW1Nc1ZReThtanRkY01heldKQUtnRFRzbCt2TWFYWnk4dzhsazdHN21oV0VHRTc5VE1nRjhCcy90cUNRaFAvRFdCc3FuOXlMTE42OVNFRmZBaHBBUWFrQWxnMVBuN2N4eWY3UmJhTFJUTmhFN016UmRyWUpqM3lieTBRVStoQ0RReElCU0JzRFcvWmRYcGZmODkyTUM5STYwS2doMEVZU3lVaVA2cWh6UkRhUWd3b0NXRGVYM0dLMVozbTN4Tlh5ZlVRN1E1bjlpM1VrM1c2VXBNQTZtd2pyTmJDRElRQ2FPSE9hWVpyb1FDYXdYSUx0eEVLb0lVN3B4bXVoUUpvQnNzdDNFWkxDV0J6M2w2cWlYMkZSTmNJenNRdG93QTkzVHZUbTFtL2ZzVjdMY3hqMjdyV01nSXdDODQxWU41ZGlVa2hCQUo5YlNoY2FQSmNhQzBoZ0pHOHZkUWw3Sk5FTjJIbzBZam5ESFM1d1pZUVFNNnlIMkRnYWxsZkdIcTBKZnlWK2RsTzVZRVR1amxmdWs0anVrK0Z0RkFBS2l6VmhnbFVBR0tIY2UveEorOGowSGtxYm9jQ1VHR3BOa3lnQWpDdDBqcUF0aW01M0FIWHpvcEROQnE1VjRGeEdnaS9BTFJIRFQzeXRGTDhQb0VDRThDVzBWMm56N2lhbVBoOVhDVTJJbDdSemptSUZrc093ZUQ3MDNyc2VoVU8vTUFFSm9DY1plOWtsTzhtbGo0TWZqaXR4NjZRQWxzVUlMc1duaGxiMHNub1VCRHVCeVlBMDdMZmdXSjJNdGZsQ3phdWl6MFRCRUdOdGpsY0xKN1lON05FN0phcStnU1ZWQ01RQVdUenBZdUlTSEVUQ1cwMzlNaDZHWUgxbEc4YnYrUFVYLy9mZEsrZjZXeFVZdzNxMUZSckM0RHh5alRSQlp2MHlOdjFkUEJpZFhJRit5WXdWakt3ZEE3eklqTS9sRTdHTm5uWmpyQ2xLZ0FpZkRXVmlON3RkZnN5ZXkwdEFEOG1mcWJsM0EzdzhvckUrUENtTVR3K2ZrTGZaUC8vU0R1Q3NDeVZpRDRsdzNsZEhvZ0FabjhaOWoxRXVHbXhnQWg0S0tWSEYreEJiRFQ0dWR0TC9xYWFIV0s2MGV0RUZ3cUp1UjR4OU9qbGpjWlhULzNBQkZCT21raTBHOHhuVlhEOCtXblFNcytIZnN2K0RnTlhWaFVBOE4yVUh2MXlQV1F1Vm1lVDVYeWtGL3drZ005L0FCUHdzYm5BQkNDSW1NdWNtVHc2VFEyRGkvMzl2YVByVjkveXBwZWRJR3labGkxbTR5ZEs3QjQwOU9odmVkMjJtSEJPVGs3SENTU3UwUkhQdXdBZTE0Q1JJRGZYQmlvQXIwbVcyVE10bTJVWVVkNU5TODZoQUNvb0loU0F5cytrRFRIaENQREJUdXV5RVVBbFZ5L3ZOL1RZR1cybzc3cGM3aklCMk9LaUMzSGhSYlducTNZZWRaVUFWRksxaW5TcVE0bkI3OVgxYzJyRFNsMGxBTkUvMVZLMUJyVWVINlJ1dWs0QTVmV0FoV2x5eFg4dFNLY2FaSWMwdSszL0IwWTFHU2FackZRZ0FBQUFBRWxGVGtTdVFtQ0NcIlxyXG5cdFx0XHRcdFx0XHQ+PC9pbWFnZT5cclxuXHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJsb2FkLXRleHRcIj57eyBzY3JvbGxlci5vcHRVcC50ZXh0TG9hZGluZyB9fTwvdGV4dD5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDwhLS0g5peg5pWw5o2uIC0tPlxyXG5cdFx0XHRcdFx0PHZpZXcgdi1pZj1cIiFpc0Rvd25Mb2FkaW5nICYmIGlzVXBOb01vcmVcIiBjbGFzcz1cInVwd2FycC1ub2RhdGFcIj57eyBzY3JvbGxlci5vcHRVcC50ZXh0Tm9Nb3JlIH19PC92aWV3PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0PC9zY3JvbGwtdmlldz5cclxuXHJcblx0XHQ8IS0tIOWbnuWIsOmhtumDqOaMiemSriAoZml4ZWTlhYPntKAs6ZyA5YaZ5Zyoc2Nyb2xsLXZpZXflpJbpnaIs6Ziy5q2i5rua5Yqo55qE5pe25YCZ5oqW5YqoKS0tPlxyXG5cdFx0PGltYWdlXHJcblx0XHRcdHYtaWY9XCJzY3JvbGxlci5vcHRVcC50b1RvcC5zcmNcIlxyXG5cdFx0XHRjbGFzcz1cInNjcm9sbGVyLXRvdG9wXCJcclxuXHRcdFx0OmNsYXNzPVwieyAnc2Nyb2xsZXItZmFkZS1pbic6IGlzU2hvd1RvVG9wIH1cIlxyXG5cdFx0XHQ6c3JjPVwic2Nyb2xsZXIub3B0VXAudG9Ub3Auc3JjXCJcclxuXHRcdFx0bW9kZT1cIndpZHRoRml4XCJcclxuXHRcdFx0QGNsaWNrPVwidG9Ub3BDbGlja1wiXHJcblx0XHQvPlxyXG5cdDwvdmlldz5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbi8vIOW8leWFpXNjcm9sbGVyLmpzLOWkhOeQhuaguOW/g+mAu+i+kVxyXG5pbXBvcnQgU2Nyb2xsZXIgZnJvbSAnLi9zY3JvbGxlci5qcyc7XHJcbi8vIOW8leWFpeWFqOWxgOmFjee9rlxyXG5pbXBvcnQgR2xvYmFsT3B0aW9uIGZyb20gJy4vb3B0aW9uLmpzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuXHRkYXRhKCkge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0c2Nyb2xsZXI6IG51bGwsIC8vIHNjcm9sbGVy5a6e5L6LXHJcblx0XHRcdHZpZXdJZDpcclxuXHRcdFx0XHQnaWRfJyArXHJcblx0XHRcdFx0TWF0aC5yYW5kb20oKVxyXG5cdFx0XHRcdFx0LnRvU3RyaW5nKDM2KVxyXG5cdFx0XHRcdFx0LnN1YnN0cigyKSwgLy8g6ZqP5py655Sf5oiQc2Nyb2xsZXLnmoRpZCjkuI3og73mlbDlrZflvIDlpLQs5ZCm5YiZ5om+5LiN5Yiw5YWD57SgKVxyXG5cdFx0XHRkb3duSGlnaHQ6IDAsIC8v5LiL5ouJ5Yi35pawOiDlrrnlmajpq5jluqZcclxuXHRcdFx0ZG93blJvdGF0ZTogMCwgLy/kuIvmi4nliLfmlrA6IOWchuW9oui/m+W6puadoeaXi+i9rOeahOinkuW6plxyXG5cdFx0XHRkb3duVGV4dDogJycsIC8v5LiL5ouJ5Yi35pawOiDmj5DnpLrnmoTmlofmnKxcclxuXHRcdFx0aXNEb3duUmVzZXQ6IGZhbHNlLCAvL+S4i+aLieWIt+aWsDog5piv5ZCm5pi+56S66YeN572u55qE6L+H5rih5Yqo55S7XHJcblx0XHRcdGlzRG93bkxvYWRpbmc6IGZhbHNlLCAvL+S4i+aLieWIt+aWsDog5piv5ZCm5pi+56S65Yqg6L295LitXHJcblx0XHRcdGlzVXBMb2FkaW5nOiBmYWxzZSwgLy8g5LiK5ouJ5Yqg6L29OiDmmK/lkKbmmL7npLogXCLliqDovb3kuK0uLi5cIlxyXG5cdFx0XHRpc1VwTm9Nb3JlOiBmYWxzZSwgLy8g5LiK5ouJ5Yqg6L29OiDmmK/lkKbmmL7npLogXCItLSBFTkQgLS1cIlxyXG5cdFx0XHRpc1Nob3dFbXB0eTogZmFsc2UsIC8vIOaYr+WQpuaYvuekuuepuuW4g+WxgFxyXG5cdFx0XHRpc1Nob3dUb1RvcDogZmFsc2UsIC8vIOaYr+WQpuaYvuekuuWbnuWIsOmhtumDqOaMiemSrlxyXG5cdFx0XHRzY3JvbGxBYmxlOiB0cnVlLCAvLyDmmK/lkKbnpoHmraLkuIvmu5EgKOS4i+aLieaXtuemgeatoizpgb/lhY3mipbliqgpXHJcblx0XHRcdHNjcm9sbFRvcDogMCwgLy8g5rua5Yqo5p2h55qE5L2N572uXHJcblx0XHRcdHNjcm9sbEFuaW06IGZhbHNlLCAvLyDmmK/lkKblvIDlkK/mu5rliqjliqjnlLtcclxuXHRcdFx0d2luZG93VG9wOiAwLCAvLyDlj6/kvb/nlKjnqpflj6PnmoTpobbpg6jkvY3nva5cclxuXHRcdFx0d2luZG93Qm90dG9tOiAwIC8vIOWPr+S9v+eUqOeql+WPo+eahOW6lemDqOS9jee9rlxyXG5cdFx0fTtcclxuXHR9LFxyXG5cdHByb3BzOiB7XHJcblx0XHRkb3duOiBPYmplY3QsIC8vIOS4i+aLieWIt+aWsOeahOWPguaVsOmFjee9rlxyXG5cdFx0dXA6IE9iamVjdCwgLy8g5LiK5ouJ5Yqg6L2955qE5Y+C5pWw6YWN572uXHJcblx0XHR0b3A6IFtTdHJpbmcsIE51bWJlcl0sIC8vIOS4i+aLieW4g+WxgOW+gOS4i+WBj+enu+eahOaVsOWAvCwg5bey6buY6K6k5Y2V5L2N5Li6dXB4LlxyXG5cdFx0Ym90dG9tOiBbU3RyaW5nLCBOdW1iZXJdLCAvLyDkuIrmi4nluIPlsYDlvoDkuIrlgY/np7vnmoTmlbDlgLwsIOW3sum7mOiupOWNleS9jeS4unVweC5cclxuXHRcdGZpeGVkOiB7XHJcblx0XHRcdC8vIOaYr+WQpumAmui/h2ZpeGVk5Zu65a6ac2Nyb2xsZXLnmoTpq5jluqYsIOm7mOiupHRydWVcclxuXHRcdFx0dHlwZTogQm9vbGVhbixcclxuXHRcdFx0ZGVmYXVsdCgpIHtcclxuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH0sXHJcblx0Y29tcHV0ZWQ6IHtcclxuXHRcdC8vIHRvcOaVsOWAvCzljZXkvY11cHgs6ZyA6L2s5oiQcHguIOebrueahOaYr+S9v+S4i+aLieW4g+WxgOW+gOS4i+WBj+enu1xyXG5cdFx0bnVtVG9wKCkge1xyXG5cdFx0XHRyZXR1cm4gdW5pLnVweDJweChOdW1iZXIodGhpcy50b3AgfHwgMCkpO1xyXG5cdFx0fSxcclxuXHRcdGZpeGVkVG9wKCkge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5maXhlZCA/IHRoaXMubnVtVG9wICsgdGhpcy53aW5kb3dUb3AgKyAncHgnIDogMDtcclxuXHRcdH0sXHJcblx0XHRwYWRUb3AoKSB7XHJcblx0XHRcdHJldHVybiAhdGhpcy5maXhlZCA/IHRoaXMubnVtVG9wICsgJ3B4JyA6IDA7XHJcblx0XHR9LFxyXG5cdFx0Ly8gYm90dG9t5pWw5YC8LOWNleS9jXVweCzpnIDovazmiJBweCDnm67nmoTmmK/kvb/kuIrmi4nluIPlsYDlvoDkuIrlgY/np7tcclxuXHRcdG51bUJvdHRvbSgpIHtcclxuXHRcdFx0cmV0dXJuIHVuaS51cHgycHgoTnVtYmVyKHRoaXMuYm90dG9tIHx8IDApKTtcclxuXHRcdH0sXHJcblx0XHRmaXhlZEJvdHRvbSgpIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMuZml4ZWQgPyB0aGlzLm51bUJvdHRvbSArIHRoaXMud2luZG93Qm90dG9tICsgJ3B4JyA6IDA7XHJcblx0XHR9LFxyXG5cdFx0cGFkQm90dG9tKCkge1xyXG5cdFx0XHRyZXR1cm4gIXRoaXMuZml4ZWQgPyB0aGlzLm51bUJvdHRvbSArICdweCcgOiAwO1xyXG5cdFx0fSxcclxuXHRcdC8vIOepuuW4g+WxgOeahOmFjee9rlxyXG5cdFx0b3B0RW1wdHkoKSB7XHJcblx0XHRcdHJldHVybiB0aGlzLnNjcm9sbGVyLm9wdFVwLmVtcHR5O1xyXG5cdFx0fSxcclxuXHRcdC8vIOi/h+a4oVxyXG5cdFx0dHJhbnNpdGlvbigpIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMuaXNEb3duUmVzZXQgPyAndHJhbnNmb3JtIDMwMG1zJyA6ICcnO1xyXG5cdFx0fSxcclxuXHRcdHRyYW5zbGF0ZVkoKSB7XHJcblx0XHRcdHJldHVybiB0aGlzLmRvd25IaWdodCA+IDAgPyAndHJhbnNsYXRlWSgnICsgdGhpcy5kb3duSGlnaHQgKyAncHgpJyA6ICcnOyAvLyB0cmFuc2Zvcm3kvJrkvb9maXhlZOWkseaViCzpnIDms6jmhI/miopmaXhlZOWFg+e0oOWGmeWcqHNjcm9sbGVy5LmL5aSWXHJcblx0XHR9XHJcblx0fSxcclxuXHRtZXRob2RzOiB7XHJcblx0XHQvL+azqOWGjOWIl+ihqOa7muWKqOS6i+S7tiznlKjkuo7kuIvmi4nliLfmlrBcclxuXHRcdHNjcm9sbChlKSB7XHJcblx0XHRcdHRoaXMuc2Nyb2xsZXIuc2Nyb2xsKGUuZGV0YWlsLCAoKSA9PiB7XHJcblx0XHRcdFx0dGhpcy4kZW1pdCgnc2Nyb2xsJywgdGhpcy5zY3JvbGxlcik7IC8vIOatpOaXtuWPr+ebtOaOpemAmui/hyB0aGlzLnNjcm9sbGVyLnNjcm9sbFRvcOiOt+WPlua7muWKqOadoeS9jee9rjsgdGhpcy5zY3JvbGxlci5pc1Njcm9sbFVw6I635Y+W5piv5ZCm5ZCR5LiK5ruR5YqoXHJcblx0XHRcdH0pO1xyXG5cdFx0fSxcclxuXHRcdC8v5rOo5YaM5YiX6KGodG91Y2hzdGFydOS6i+S7tiznlKjkuo7kuIvmi4nliLfmlrBcclxuXHRcdHRvdWNoc3RhcnRFdmVudChlKSB7XHJcblx0XHRcdHRoaXMuc2Nyb2xsZXIudG91Y2hzdGFydEV2ZW50KGUpO1xyXG5cdFx0fSxcclxuXHRcdC8v5rOo5YaM5YiX6KGodG91Y2htb3Zl5LqL5Lu2LOeUqOS6juS4i+aLieWIt+aWsFxyXG5cdFx0dG91Y2htb3ZlRXZlbnQoZSkge1xyXG5cdFx0XHR0aGlzLnNjcm9sbGVyLnRvdWNobW92ZUV2ZW50KGUpO1xyXG5cdFx0fSxcclxuXHRcdC8v5rOo5YaM5YiX6KGodG91Y2hlbmTkuovku7Ys55So5LqO5LiL5ouJ5Yi35pawXHJcblx0XHR0b3VjaGVuZEV2ZW50KGUpIHtcclxuXHRcdFx0dGhpcy5zY3JvbGxlci50b3VjaGVuZEV2ZW50KGUpO1xyXG5cdFx0fSxcclxuXHRcdC8vIOeCueWHu+epuuW4g+WxgOeahOaMiemSruWbnuiwg1xyXG5cdFx0ZW1wdHlDbGljaygpIHtcclxuXHRcdFx0dGhpcy4kZW1pdCgnZW1wdHljbGljaycsIHRoaXMuc2Nyb2xsZXIpO1xyXG5cdFx0fSxcclxuXHRcdC8vIOeCueWHu+WbnuWIsOmhtumDqOeahOaMiemSruWbnuiwg1xyXG5cdFx0dG9Ub3BDbGljaygpIHtcclxuXHRcdFx0dGhpcy5pc1Nob3dUb1RvcCA9IGZhbHNlOyAvLyDlm57liLDpobbpg6jmjInpkq7pnIDopoHlhYjpmpDol48s5YaN5omn6KGM5Zue5Yiw6aG26YOoLOmBv+WFjemXquWKqFxyXG5cdFx0XHR0aGlzLnNjcm9sbGVyLnNjcm9sbFRvKDAsIHRoaXMuc2Nyb2xsZXIub3B0VXAudG9Ub3AuZHVyYXRpb24pOyAvLyDmiafooYzlm57liLDpobbpg6hcclxuXHRcdFx0dGhpcy4kZW1pdCgndG9wY2xpY2snLCB0aGlzLnNjcm9sbGVyKTsgLy8g5rS+5Y+R54K55Ye75Zue5Yiw6aG26YOo5oyJ6ZKu55qE5Zue6LCDXHJcblx0XHR9LFxyXG5cdFx0Ly8g5pu05paw5rua5Yqo5Yy65Z+f55qE6auY5bqmICjkvb/lhoXlrrnkuI3mu6HlsY/lkozliLDlupUs6YO95Y+v57un57ut57+76aG1KVxyXG5cdFx0c2V0Q2xpZW50SGVpZ2h0KCkge1xyXG5cdFx0XHRpZiAodGhpcy5zY3JvbGxlci5nZXRDbGllbnRIZWlnaHQodHJ1ZSkgPT09IDAgJiYgIXRoaXMuaXNFeGVjKSB7XHJcblx0XHRcdFx0dGhpcy5pc0V4ZWMgPSB0cnVlOyAvLyDpgb/lhY3lpJrmrKHojrflj5ZcclxuXHRcdFx0XHR0aGlzLiRuZXh0VGljaygoKSA9PiB7XHJcblx0XHRcdFx0XHQvLyDnoa7kv51kb23lt7LmuLLmn5NcclxuXHRcdFx0XHRcdGxldCB2aWV3ID0gdW5pXHJcblx0XHRcdFx0XHRcdC5jcmVhdGVTZWxlY3RvclF1ZXJ5KClcclxuXHRcdFx0XHRcdFx0LmluKHRoaXMpXHJcblx0XHRcdFx0XHRcdC5zZWxlY3QoJyMnICsgdGhpcy52aWV3SWQpO1xyXG5cdFx0XHRcdFx0dmlldy5ib3VuZGluZ0NsaWVudFJlY3QoZGF0YSA9PiB7XHJcblx0XHRcdFx0XHRcdHRoaXMuaXNFeGVjID0gZmFsc2U7XHJcblx0XHRcdFx0XHRcdGlmIChkYXRhKSB7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5zY3JvbGxlci5zZXRDbGllbnRIZWlnaHQoZGF0YS5oZWlnaHQpO1xyXG5cdFx0XHRcdFx0XHR9IGVsc2UgaWYgKHRoaXMuY2xpZW50TnVtICE9IDMpIHtcclxuXHRcdFx0XHRcdFx0XHQvLyDmnoHlsJHpg6jliIbmg4XlhrUs5Y+v6IO9ZG9t6L+Y5pyq5riy5p+T5a6M5q+VLOmAkuW9kuiOt+WPlizmnIDlpJrph43or5Uz5qyhXHJcblx0XHRcdFx0XHRcdFx0dGhpcy5jbGllbnROdW0gPSB0aGlzLmNsaWVudE51bSA9PSBudWxsID8gMSA6IHRoaXMuY2xpZW50TnVtICsgMTtcclxuXHRcdFx0XHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMuc2V0Q2xpZW50SGVpZ2h0KCk7XHJcblx0XHRcdFx0XHRcdFx0fSwgdGhpcy5jbGllbnROdW0gKiAxMDApO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9KS5leGVjKCk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9LFxyXG5cdC8vIOS9v+eUqGNyZWF0ZWTliJ3lp4vljJZzY3JvbGxlcuWvueixoTsg5aaC5p6c55SobW91bnRlZOmDqOWIhmNzc+agt+W8j+e8luivkeWIsEg15Lya5aSx5pWIXHJcblx0Y3JlYXRlZCgpIHtcclxuXHRcdGxldCB2bSA9IHRoaXM7XHJcblxyXG5cdFx0bGV0IGRpeU9wdGlvbiA9IHtcclxuXHRcdFx0Ly8g5LiL5ouJ5Yi35paw55qE6YWN572uXHJcblx0XHRcdGRvd246IHtcclxuXHRcdFx0XHRpbk9mZnNldChzY3JvbGxlcikge1xyXG5cdFx0XHRcdFx0Ly8g5LiL5ouJ55qE6Led56a76L+b5YWlb2Zmc2V06IyD5Zu05YaF6YKj5LiA5Yi755qE5Zue6LCDXHJcblx0XHRcdFx0XHR2bS5zY3JvbGxBYmxlID0gZmFsc2U7IC8vIOemgeatouS4i+aLiSzpgb/lhY3mipbliqggKOiHquWumuS5iXNjcm9sbGVy57uE5Lu25pe2LOatpOihjOS4jeWPr+WIoClcclxuXHRcdFx0XHRcdHZtLmlzRG93blJlc2V0ID0gZmFsc2U7IC8vIOS4jemHjee9rumrmOW6piAo6Ieq5a6a5LmJc2Nyb2xsZXLnu4Tku7bml7Ys5q2k6KGM5LiN5Y+v5YigKVxyXG5cdFx0XHRcdFx0dm0uaXNEb3duTG9hZGluZyA9IGZhbHNlOyAvLyDkuI3mmL7npLrliqDovb3kuK1cclxuXHRcdFx0XHRcdHZtLmRvd25UZXh0ID0gc2Nyb2xsZXIub3B0RG93bi50ZXh0SW5PZmZzZXQ7IC8vIOiuvue9ruaWh+acrFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0b3V0T2Zmc2V0KHNjcm9sbGVyKSB7XHJcblx0XHRcdFx0XHQvLyDkuIvmi4nnmoTot53nprvlpKfkuo5vZmZzZXTpgqPkuIDliLvnmoTlm57osINcclxuXHRcdFx0XHRcdHZtLnNjcm9sbEFibGUgPSBmYWxzZTsgLy8g56aB5q2i5LiL5ouJLOmBv+WFjeaKluWKqCAo6Ieq5a6a5LmJc2Nyb2xsZXLnu4Tku7bml7Ys5q2k6KGM5LiN5Y+v5YigKVxyXG5cdFx0XHRcdFx0dm0uaXNEb3duUmVzZXQgPSBmYWxzZTsgLy8g5LiN6YeN572u6auY5bqmICjoh6rlrprkuYlzY3JvbGxlcue7hOS7tuaXtizmraTooYzkuI3lj6/liKApXHJcblx0XHRcdFx0XHR2bS5pc0Rvd25Mb2FkaW5nID0gZmFsc2U7IC8vIOS4jeaYvuekuuWKoOi9veS4rVxyXG5cdFx0XHRcdFx0dm0uZG93blRleHQgPSBzY3JvbGxlci5vcHREb3duLnRleHRPdXRPZmZzZXQ7IC8vIOiuvue9ruaWh+acrFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0b25Nb3Zpbmcoc2Nyb2xsZXIsIHJhdGUsIGRvd25IaWdodCkge1xyXG5cdFx0XHRcdFx0Ly8g5LiL5ouJ6L+H56iL5Lit55qE5Zue6LCDLOa7keWKqOi/h+eoi+S4gOebtOWcqOaJp+ihjDsgcmF0ZeS4i+aLieWMuuWfn+W9k+WJjemrmOW6puS4juaMh+Wumui3neemu+eahOavlOWAvChpbk9mZnNldDogcmF0ZTwxOyBvdXRPZmZzZXQ6IHJhdGU+PTEpOyBkb3duSGlnaHTlvZPliY3kuIvmi4nljLrln5/nmoTpq5jluqZcclxuXHRcdFx0XHRcdHZtLmRvd25IaWdodCA9IGRvd25IaWdodDsgLy8g6K6+572u5LiL5ouJ5Yy65Z+f55qE6auY5bqmICjoh6rlrprkuYlzY3JvbGxlcue7hOS7tuaXtizmraTooYzkuI3lj6/liKApXHJcblx0XHRcdFx0XHR2bS5kb3duUm90YXRlID0gJ3JvdGF0ZSgnICsgMzYwICogcmF0ZSArICdkZWcpJzsgLy8g6K6+572u5peL6L2s6KeS5bqmXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRzaG93TG9hZGluZyhzY3JvbGxlciwgZG93bkhpZ2h0KSB7XHJcblx0XHRcdFx0XHQvLyDmmL7npLrkuIvmi4nliLfmlrDov5vluqbnmoTlm57osINcclxuXHRcdFx0XHRcdHZtLnNjcm9sbEFibGUgPSB0cnVlOyAvLyDlvIDlkK/kuIvmi4kgKOiHquWumuS5iXNjcm9sbGVy57uE5Lu25pe2LOatpOihjOS4jeWPr+WIoClcclxuXHRcdFx0XHRcdHZtLmlzRG93blJlc2V0ID0gdHJ1ZTsgLy8g6YeN572u6auY5bqmICjoh6rlrprkuYlzY3JvbGxlcue7hOS7tuaXtizmraTooYzkuI3lj6/liKApXHJcblx0XHRcdFx0XHR2bS5pc0Rvd25Mb2FkaW5nID0gdHJ1ZTsgLy8g5pi+56S65Yqg6L295LitXHJcblx0XHRcdFx0XHR2bS5kb3duSGlnaHQgPSBkb3duSGlnaHQ7IC8vIOiuvue9ruS4i+aLieWMuuWfn+eahOmrmOW6piAo6Ieq5a6a5LmJc2Nyb2xsZXLnu4Tku7bml7Ys5q2k6KGM5LiN5Y+v5YigKVxyXG5cdFx0XHRcdFx0dm0uZG93blRleHQgPSBzY3JvbGxlci5vcHREb3duLnRleHRMb2FkaW5nOyAvLyDorr7nva7mlofmnKxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdGVuZERvd25TY3JvbGwoc2Nyb2xsZXIpIHtcclxuXHRcdFx0XHRcdHZtLnNjcm9sbEFibGUgPSB0cnVlOyAvLyDlvIDlkK/kuIvmi4kgKOiHquWumuS5iXNjcm9sbGVy57uE5Lu25pe2LOatpOihjOS4jeWPr+WIoClcclxuXHRcdFx0XHRcdHZtLmlzRG93blJlc2V0ID0gdHJ1ZTsgLy8g6YeN572u6auY5bqmICjoh6rlrprkuYlzY3JvbGxlcue7hOS7tuaXtizmraTooYzkuI3lj6/liKApXHJcblx0XHRcdFx0XHR2bS5pc0Rvd25Mb2FkaW5nID0gZmFsc2U7IC8vIOS4jeaYvuekuuWKoOi9veS4rVxyXG5cdFx0XHRcdFx0dm0uZG93bkhpZ2h0ID0gMDsgLy8g6K6+572u5LiL5ouJ5Yy65Z+f55qE6auY5bqmICjoh6rlrprkuYlzY3JvbGxlcue7hOS7tuaXtizmraTooYzkuI3lj6/liKApXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHQvLyDmtL7lj5HkuIvmi4nliLfmlrDnmoTlm57osINcclxuXHRcdFx0XHRjYWxsYmFjazogZnVuY3Rpb24oc2Nyb2xsZXIpIHtcclxuXHRcdFx0XHRcdHZtLiRlbWl0KCdkb3duJywgc2Nyb2xsZXIpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g5LiK5ouJ5Yqg6L2955qE6YWN572uXHJcblx0XHRcdHVwOiB7XHJcblx0XHRcdFx0Ly8g5pi+56S65Yqg6L295Lit55qE5Zue6LCDXHJcblx0XHRcdFx0c2hvd0xvYWRpbmcoKSB7XHJcblx0XHRcdFx0XHR2bS5pc1VwTG9hZGluZyA9IHRydWU7XHJcblx0XHRcdFx0XHR2bS5pc1VwTm9Nb3JlID0gZmFsc2U7XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHQvLyDmmL7npLrml6Dmm7TlpJrmlbDmja7nmoTlm57osINcclxuXHRcdFx0XHRzaG93Tm9Nb3JlKCkge1xyXG5cdFx0XHRcdFx0dm0uaXNVcExvYWRpbmcgPSBmYWxzZTtcclxuXHRcdFx0XHRcdHZtLmlzVXBOb01vcmUgPSB0cnVlO1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0Ly8g6ZqQ6JeP5LiK5ouJ5Yqg6L2955qE5Zue6LCDXHJcblx0XHRcdFx0aGlkZVVwU2Nyb2xsKCkge1xyXG5cdFx0XHRcdFx0dm0uaXNVcExvYWRpbmcgPSBmYWxzZTtcclxuXHRcdFx0XHRcdHZtLmlzVXBOb01vcmUgPSBmYWxzZTtcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdC8vIOepuuW4g+WxgFxyXG5cdFx0XHRcdGVtcHR5OiB7XHJcblx0XHRcdFx0XHRvblNob3coaXNTaG93KSB7XHJcblx0XHRcdFx0XHRcdC8vIOaYvuekuumakOiXj+eahOWbnuiwg1xyXG5cdFx0XHRcdFx0XHR2bS5pc1Nob3dFbXB0eSA9IGlzU2hvdztcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdC8vIOWbnuWIsOmhtumDqFxyXG5cdFx0XHRcdHRvVG9wOiB7XHJcblx0XHRcdFx0XHRvblNob3coaXNTaG93KSB7XHJcblx0XHRcdFx0XHRcdC8vIOaYvuekuumakOiXj+eahOWbnuiwg1xyXG5cdFx0XHRcdFx0XHR2bS5pc1Nob3dUb1RvcCA9IGlzU2hvdztcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdC8vIOa0vuWPkeS4iuaLieWKoOi9veeahOWbnuiwg1xyXG5cdFx0XHRcdGNhbGxiYWNrOiBmdW5jdGlvbihzY3JvbGxlcikge1xyXG5cdFx0XHRcdFx0dm0uJGVtaXQoJ3VwJywgc2Nyb2xsZXIpO1xyXG5cdFx0XHRcdFx0Ly8g5pu05paw5a655Zmo55qE6auY5bqmICjlpJpzY3JvbGxlcueahOaDheWGtSlcclxuXHRcdFx0XHRcdHZtLnNldENsaWVudEhlaWdodCgpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHJcblx0XHRTY3JvbGxlci5leHRlbmQoZGl5T3B0aW9uLCBHbG9iYWxPcHRpb24pOyAvLyDmt7flhaXlhajlsYDnmoTphY3nva5cclxuXHRcdGxldCBteU9wdGlvbiA9IEpTT04ucGFyc2UoXHJcblx0XHRcdEpTT04uc3RyaW5naWZ5KHtcclxuXHRcdFx0XHRkb3duOiB2bS5kb3duLFxyXG5cdFx0XHRcdHVwOiB2bS51cFxyXG5cdFx0XHR9KVxyXG5cdFx0KTsgLy8g5rex5ou36LSdLOmBv+WFjeWvuXByb3Bz55qE5b2x5ZONXHJcblx0XHRTY3JvbGxlci5leHRlbmQobXlPcHRpb24sIGRpeU9wdGlvbik7IC8vIOa3t+WFpeWFt+S9k+eVjOmdoueahOmFjee9rlxyXG5cclxuXHRcdC8vIOWIneWni+WMllNjcm9sbGVy5a+56LGhXHJcblx0XHR2bS5zY3JvbGxlciA9IG5ldyBTY3JvbGxlcihteU9wdGlvbik7XHJcblx0XHR2bS5zY3JvbGxlci52aWV3SWQgPSB2bS52aWV3SWQ7IC8vIOmZhOW4pmlkXHJcblx0XHQvLyBpbml05Zue6LCDc2Nyb2xsZXLlr7nosaFcclxuXHRcdHZtLiRlbWl0KCdpbml0Jywgdm0uc2Nyb2xsZXIpO1xyXG5cclxuXHRcdC8vIOiuvue9rumrmOW6plxyXG5cdFx0dW5pLmdldFN5c3RlbUluZm8oe1xyXG5cdFx0XHRzdWNjZXNzKHJlcykge1xyXG5cdFx0XHRcdGlmIChyZXMud2luZG93VG9wKSB2bS53aW5kb3dUb3AgPSByZXMud2luZG93VG9wOyAvLyDkv67mraNhcHDlkoxINeeahHRvcOWAvFxyXG5cdFx0XHRcdGlmIChyZXMud2luZG93Qm90dG9tKSB2bS53aW5kb3dCb3R0b20gPSByZXMud2luZG93Qm90dG9tOyAvLyDkv67mraNhcHDlkoxINeeahGJvdHRvbeWAvFxyXG5cdFx0XHRcdHZtLnNjcm9sbGVyLnNldEJvZHlIZWlnaHQocmVzLndpbmRvd0hlaWdodCk7IC8vIOS9v2Rvd27nmoRib3R0b21PZmZzZXTnlJ/mlYhcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblxyXG5cdFx0Ly8g5Zug5Li65L2/55So55qE5pivc2Nyb2xsdmlldyzov5nph4zpnIDoh6rlrprkuYlzY3JvbGxUb1xyXG5cdFx0dm0uc2Nyb2xsZXIucmVzZXRTY3JvbGxUbygoeSwgdCkgPT4ge1xyXG5cdFx0XHRsZXQgY3VyWSA9IHZtLnNjcm9sbGVyLmdldFNjcm9sbFRvcCgpO1xyXG5cdFx0XHRpZiAodCA9PT0gMCkge1xyXG5cdFx0XHRcdHZtLnNjcm9sbEFuaW0gPSBmYWxzZTtcclxuXHRcdFx0XHR2bS5zY3JvbGxUb3AgPSBjdXJZO1xyXG5cdFx0XHRcdHZtLiRuZXh0VGljayhmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdHZtLnNjcm9sbFRvcCA9IHk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0dm0uc2Nyb2xsQW5pbSA9IHRydWU7XHJcblx0XHRcdFx0dm0uc2Nyb2xsZXIuZ2V0U3RlcChcclxuXHRcdFx0XHRcdGN1clksXHJcblx0XHRcdFx0XHR5LFxyXG5cdFx0XHRcdFx0c3RlcCA9PiB7XHJcblx0XHRcdFx0XHRcdC8vIOatpOWGmeazleWPr+aUr+aMgemFjee9rnRcclxuXHRcdFx0XHRcdFx0dm0uc2Nyb2xsVG9wID0gc3RlcDtcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR0XHJcblx0XHRcdFx0KTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fSxcclxuXHRtb3VudGVkKCkge1xyXG5cdFx0Ly8g6K6+572u5a655Zmo55qE6auY5bqmXHJcblx0XHR0aGlzLnNldENsaWVudEhlaWdodCgpO1xyXG5cdH1cclxufTtcclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGU+XHJcbkBpbXBvcnQgJy4vc2Nyb2xsZXIuY3NzJztcclxuPC9zdHlsZT5cbiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcz8/cmVmLS02LW9uZU9mLTEtMCEuLi8uLi8uLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNi1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTYtb25lT2YtMS0yIS4uLy4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTYtb25lT2YtMS0zIS4uLy4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi9zY3JvbGxlci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzPz9yZWYtLTYtb25lT2YtMS0wIS4uLy4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNi1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL3Njcm9sbGVyLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTYyMTkwNTg1NzcwMFxuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCJEOi9Qcm9ncmFtIEZpbGVzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvaG1yL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wiaG1yXCI6dHJ1ZSxcInB1YmxpY1BhdGhcIjpcIi4uLy4uL1wiLFwibG9jYWxzXCI6ZmFsc2V9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShjc3NSZWxvYWQpO1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQodW5kZWZpbmVkLCBjc3NSZWxvYWQpO1xuICAgIH1cbiAgIl0sInNvdXJjZVJvb3QiOiIifQ==
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/scroller/scroller-create-component',
    {
        'components/scroller/scroller-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('1')['createComponent'](__webpack_require__(185))
        })
    },
    [['components/scroller/scroller-create-component']]
]);
