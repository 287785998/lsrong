(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/article/list"],{

/***/ 49:
/*!**********************************************************************************!*\
  !*** D:/用户目录/我的文档/HBuilderProjects/资讯/main.js?{"page":"pages%2Farticle%2Flist"} ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _list = _interopRequireDefault(__webpack_require__(/*! ./pages/article/list.vue */ 50));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_list.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 50:
/*!***************************************************************!*\
  !*** D:/用户目录/我的文档/HBuilderProjects/资讯/pages/article/list.vue ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _list_vue_vue_type_template_id_f6c3e0e0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list.vue?vue&type=template&id=f6c3e0e0&scoped=true& */ 51);
/* harmony import */ var _list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list.vue?vue&type=script&lang=js& */ 53);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _list_vue_vue_type_style_index_0_id_f6c3e0e0_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list.vue?vue&type=style&index=0&id=f6c3e0e0&scoped=true&lang=scss& */ 55);
/* harmony import */ var _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 10);

var renderjs





/* normalize component */

var component = Object(_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _list_vue_vue_type_template_id_f6c3e0e0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _list_vue_vue_type_template_id_f6c3e0e0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "f6c3e0e0",
  null,
  false,
  _list_vue_vue_type_template_id_f6c3e0e0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/article/list.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 51:
/*!**********************************************************************************************************!*\
  !*** D:/用户目录/我的文档/HBuilderProjects/资讯/pages/article/list.vue?vue&type=template&id=f6c3e0e0&scoped=true& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_list_vue_vue_type_template_id_f6c3e0e0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./list.vue?vue&type=template&id=f6c3e0e0&scoped=true& */ 52);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_list_vue_vue_type_template_id_f6c3e0e0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_list_vue_vue_type_template_id_f6c3e0e0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_list_vue_vue_type_template_id_f6c3e0e0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_list_vue_vue_type_template_id_f6c3e0e0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 52:
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/用户目录/我的文档/HBuilderProjects/资讯/pages/article/list.vue?vue&type=template&id=f6c3e0e0&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    iconfont: function() {
      return __webpack_require__.e(/*! import() | components/iconfont/iconfont */ "components/iconfont/iconfont").then(__webpack_require__.bind(null, /*! @/components/iconfont/iconfont.vue */ 180))
    },
    scroller: function() {
      return Promise.all(/*! import() | components/scroller/scroller */[__webpack_require__.e("common/vendor"), __webpack_require__.e("components/scroller/scroller")]).then(__webpack_require__.bind(null, /*! @/components/scroller/scroller.vue */ 185))
    }
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  var l0 = _vm.slider.length > 0 ? _vm.slider.slice(0, 5) : null
  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        l0: l0
      }
    }
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 53:
/*!****************************************************************************************!*\
  !*** D:/用户目录/我的文档/HBuilderProjects/资讯/pages/article/list.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./list.vue?vue&type=script&lang=js& */ 54);
/* harmony import */ var _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 54:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/用户目录/我的文档/HBuilderProjects/资讯/pages/article/list.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;

























































































var _util = _interopRequireDefault(__webpack_require__(/*! @/common/util.js */ 22));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var scroller = function scroller() {Promise.all(/*! require.ensure | components/scroller/scroller */[__webpack_require__.e("common/vendor"), __webpack_require__.e("components/scroller/scroller")]).then((function () {return resolve(__webpack_require__(/*! @/components/scroller/scroller.vue */ 185));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var articleList = function articleList() {__webpack_require__.e(/*! require.ensure | components/article/list */ "components/article/list").then((function () {return resolve(__webpack_require__(/*! @/components/article/list.vue */ 194));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var pageLoading = function pageLoading() {__webpack_require__.e(/*! require.ensure | components/loading/pageLoading */ "components/loading/pageLoading").then((function () {return resolve(__webpack_require__(/*! @/components/loading/pageLoading.vue */ 201));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var iconfont = function iconfont() {__webpack_require__.e(/*! require.ensure | components/iconfont/iconfont */ "components/iconfont/iconfont").then((function () {return resolve(__webpack_require__(/*! @/components/iconfont/iconfont.vue */ 180));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var _default =
{
  components: {
    articleList: articleList,
    pageLoading: pageLoading,
    scroller: scroller,
    iconfont: iconfont },

  data: function data() {
    return {
      scroller: {},
      optUp: { auto: true, onScroll: true, page: { size: 20 }, empty: { tip: '暂无文章~' } },
      classid: 1,
      category_index: 0,
      scroll_classid: 'scroll_classid_0',
      currentSliderIndex: 0,
      category: [],
      showMenu: false,
      slider: [],
      list: [],
      showNoData: false,
      showPageLoading: false,
      showNavFloat: false,
      navBarHeight: '' };

  },
  onShow: function onShow() {
    this.$initPageTitle(); //初始化页面标题

    /*导航栏高度*/
    if (this.navBarHeight == '') {
      this.navBarHeight = this.$app.getNaviBarHeight();
    }

    /*来源是登录时更新*/
    var source = uni.getStorageSync('source');
    if (source == 'login') {
      uni.removeStorageSync('source');
      this.loadData();
    }
  },
  onShareAppMessage: function onShareAppMessage() {
    return {
      path: '/pages/article/index',
      success: function success(e) {},
      title: '里奥模板' };

  },
  onLoad: function onLoad(e) {








    this.getCategory();
  },
  onPullDownRefresh: function onPullDownRefresh() {
    uni.showLoading({
      title: '刷新中' });

    this.loadData();
  },
  methods: {
    /*初始化滚动*/
    initScroller: function initScroller(scroller) {
      this.scroller = scroller;
    },

    /*刷新数据*/
    refreshData: function refreshData() {
      uni.showLoading({
        title: '刷新中' });

      this.scroller.resetUpScroll();
    },

    /*加载数据*/
    loadData: function loadData() {
      this.slider = [];
      this.list = [];
      this.currentSliderIndex = 0;
      this.scroller.resetUpScroll();
    },

    /*获取子类别数据*/
    getCategory: function getCategory() {var _this = this;
      this.$app.request({
        url: this.$api.article.category + '?mod=column&act=navigation',
        data: {
          classid: 2 },

        method: 'GET',
        dataType: 'json',
        success: function success(res) {
          if (res.code == 1) {
            _this.category = res.list;
            if (_this.category_index > -1) {
              var nextIndex = _this.category_index - 1;
              nextIndex = nextIndex <= 0 ? 0 : nextIndex;
              _this.scroll_classid = "classid-".concat(nextIndex); //动画滚动,滚动至中心位置
            }
          } else {
            _this.$alert(res.msg);
          }
        },
        complete: function complete(res) {} });

    },

    /*获取数据*/
    getData: function getData() {var _this2 = this;
      this.$app.request({
        url: this.$api.article.index + '?mod=news&act=list',
        data: {
          classid: this.classid,
          page: this.scroller.num,
          pagesize: this.scroller.size },

        method: 'GET',
        dataType: 'json',
        success: function success(res) {
          if (res.code == 1) {
            if (_this2.scroller.num == 1) {
              _this2.list = [];
            }
            // if (this.slider.length == 0) {
            // 	this.slider = res.data.rows;
            // }
            _this2.slider = res.data.list;
            _this2.list = _this2.list.concat(res.data.list);
            // this.list.title = this.list.title.concat(res.data.rows.title.replace(/\\/g,""));
            _this2.scroller.endByPage(res.data.list.length, res.data.page + 1);
            _this2.showPageLoading = false;
          } else {
            _this2.scroller.endSuccess();
            _this2.$alert(res.msg);
          }
        },
        fail: function fail(res) {
          _this2.scroller.endErr();
        },
        complete: function complete(res) {
          uni.stopPullDownRefresh();
          uni.hideLoading();
        } });

    },

    /*切换导航*/
    categoryChange: function categoryChange(classid, index) {
      this.showMenu = false;
      this.category_index = index;
      this.classid = classid;
      var nextIndex = index - 1;
      nextIndex = nextIndex <= 0 ? 0 : nextIndex;
      this.scroll_classid = "classid-".concat(nextIndex); //动画滚动,滚动至中心位置
      //this.loadData();






    },

    /*广告切换*/
    sliderChange: function sliderChange(e) {
      this.currentSliderIndex = e.detail.current;
    },

    /*滚动时导航栏浮动*/
    navFloatShow: function navFloatShow(scroller) {
      if (scroller) {
        if (scroller.scrollTop > 60) {
          if (!this.showNavFloat) {
            this.showNavFloat = true;
          }
        } else {
          if (this.showNavFloat) {
            this.showNavFloat = false;
          }
        }
      }
    },
    /*菜单框展示*/
    menuShow: function menuShow(value) {
      this.showMenu = value;
    },
    /*隐藏导航浮动*/
    navFloatHide: function navFloatHide() {
      this.showNavFloat = false;
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 55:
/*!*************************************************************************************************************************!*\
  !*** D:/用户目录/我的文档/HBuilderProjects/资讯/pages/article/list.vue?vue&type=style&index=0&id=f6c3e0e0&scoped=true&lang=scss& ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_list_vue_vue_type_style_index_0_id_f6c3e0e0_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-1-3!../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./list.vue?vue&type=style&index=0&id=f6c3e0e0&scoped=true&lang=scss& */ 56);
/* harmony import */ var _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_list_vue_vue_type_style_index_0_id_f6c3e0e0_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_list_vue_vue_type_style_index_0_id_f6c3e0e0_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_list_vue_vue_type_style_index_0_id_f6c3e0e0_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_list_vue_vue_type_style_index_0_id_f6c3e0e0_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_list_vue_vue_type_style_index_0_id_f6c3e0e0_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 56:
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/用户目录/我的文档/HBuilderProjects/资讯/pages/article/list.vue?vue&type=style&index=0&id=f6c3e0e0&scoped=true&lang=scss& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[49,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vbWFpbi5qcyIsIndlYnBhY2s6Ly8vRDov55So5oi355uu5b2VL+aIkeeahOaWh+ahoy9IQnVpbGRlclByb2plY3RzL+i1hOiury9wYWdlcy9hcnRpY2xlL2xpc3QudnVlPzRhNmMiLCJ3ZWJwYWNrOi8vL0Q6L+eUqOaIt+ebruW9lS/miJHnmoTmlofmoaMvSEJ1aWxkZXJQcm9qZWN0cy/otYTorq8vcGFnZXMvYXJ0aWNsZS9saXN0LnZ1ZT82MzZjIiwid2VicGFjazovLy9EOi/nlKjmiLfnm67lvZUv5oiR55qE5paH5qGjL0hCdWlsZGVyUHJvamVjdHMv6LWE6K6vL3BhZ2VzL2FydGljbGUvbGlzdC52dWU/Y2MxZSIsIndlYnBhY2s6Ly8vRDov55So5oi355uu5b2VL+aIkeeahOaWh+ahoy9IQnVpbGRlclByb2plY3RzL+i1hOiury9wYWdlcy9hcnRpY2xlL2xpc3QudnVlP2ZlODIiLCJ1bmktYXBwOi8vL3BhZ2VzL2FydGljbGUvbGlzdC52dWUiLCJ3ZWJwYWNrOi8vL0Q6L+eUqOaIt+ebruW9lS/miJHnmoTmlofmoaMvSEJ1aWxkZXJQcm9qZWN0cy/otYTorq8vcGFnZXMvYXJ0aWNsZS9saXN0LnZ1ZT85ODUwIiwid2VicGFjazovLy9EOi/nlKjmiLfnm67lvZUv5oiR55qE5paH5qGjL0hCdWlsZGVyUHJvamVjdHMv6LWE6K6vL3BhZ2VzL2FydGljbGUvbGlzdC52dWU/ZDlhYSJdLCJuYW1lcyI6WyJjcmVhdGVQYWdlIiwiUGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztrREFBQTtBQUNBO0FBQ0EsNEY7QUFDQUEsVUFBVSxDQUFDQyxhQUFELENBQVYsQzs7Ozs7Ozs7Ozs7OztBQ0hBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUE2SDtBQUM3SDtBQUN3RDtBQUNMO0FBQ3NDOzs7QUFHekY7QUFDdUw7QUFDdkwsZ0JBQWdCLDJMQUFVO0FBQzFCLEVBQUUsMEVBQU07QUFDUixFQUFFLDJGQUFNO0FBQ1IsRUFBRSxvR0FBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSwrRkFBVTtBQUNaO0FBQ0E7O0FBRUE7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDdkJmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSx3TEFFTjtBQUNQLEtBQUs7QUFDTDtBQUNBLGFBQWEsOE9BRU47QUFDUDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDL0NBO0FBQUE7QUFBQTtBQUFBO0FBQXFzQixDQUFnQixvckJBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMwRnp0QixvRjtBQUNBO0FBQ0E7QUFDQSw0QkFEQTtBQUVBLDRCQUZBO0FBR0Esc0JBSEE7QUFJQSxzQkFKQSxFQURBOztBQU9BLE1BUEEsa0JBT0E7QUFDQTtBQUNBLGtCQURBO0FBRUEsd0ZBRkE7QUFHQSxnQkFIQTtBQUlBLHVCQUpBO0FBS0Esd0NBTEE7QUFNQSwyQkFOQTtBQU9BLGtCQVBBO0FBUUEscUJBUkE7QUFTQSxnQkFUQTtBQVVBLGNBVkE7QUFXQSx1QkFYQTtBQVlBLDRCQVpBO0FBYUEseUJBYkE7QUFjQSxzQkFkQTs7QUFnQkEsR0F4QkE7QUF5QkEsUUF6QkEsb0JBeUJBO0FBQ0EsMEJBREEsQ0FDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQXZDQTtBQXdDQSxtQkF4Q0EsK0JBd0NBO0FBQ0E7QUFDQSxrQ0FEQTtBQUVBLHFDQUZBO0FBR0EsbUJBSEE7O0FBS0EsR0E5Q0E7QUErQ0EsUUEvQ0Esa0JBK0NBLENBL0NBLEVBK0NBOzs7Ozs7Ozs7QUFTQTtBQUNBLEdBekRBO0FBMERBLG1CQTFEQSwrQkEwREE7QUFDQTtBQUNBLGtCQURBOztBQUdBO0FBQ0EsR0EvREE7QUFnRUE7QUFDQTtBQUNBLGdCQUZBLHdCQUVBLFFBRkEsRUFFQTtBQUNBO0FBQ0EsS0FKQTs7QUFNQTtBQUNBLGVBUEEseUJBT0E7QUFDQTtBQUNBLG9CQURBOztBQUdBO0FBQ0EsS0FaQTs7QUFjQTtBQUNBLFlBZkEsc0JBZUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBcEJBOztBQXNCQTtBQUNBLGVBdkJBLHlCQXVCQTtBQUNBO0FBQ0Esc0VBREE7QUFFQTtBQUNBLG9CQURBLEVBRkE7O0FBS0EscUJBTEE7QUFNQSx3QkFOQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtFQUhBLENBR0E7QUFDQTtBQUNBLFdBUEEsTUFPQTtBQUNBO0FBQ0E7QUFDQSxTQWxCQTtBQW1CQSwyQ0FuQkE7O0FBcUJBLEtBN0NBOztBQStDQTtBQUNBLFdBaERBLHFCQWdEQTtBQUNBO0FBQ0EsMkRBREE7QUFFQTtBQUNBLCtCQURBO0FBRUEsaUNBRkE7QUFHQSxzQ0FIQSxFQUZBOztBQU9BLHFCQVBBO0FBUUEsd0JBUkE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBWkEsTUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBMUJBO0FBMkJBO0FBQ0E7QUFDQSxTQTdCQTtBQThCQTtBQUNBO0FBQ0E7QUFDQSxTQWpDQTs7QUFtQ0EsS0FwRkE7O0FBc0ZBO0FBQ0Esa0JBdkZBLDBCQXVGQSxPQXZGQSxFQXVGQSxLQXZGQSxFQXVGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5REFOQSxDQU1BO0FBQ0E7Ozs7Ozs7QUFPQSxLQXJHQTs7QUF1R0E7QUFDQTtBQUNBO0FBQ0EsS0ExR0E7O0FBNEdBO0FBQ0EsZ0JBN0dBLHdCQTZHQSxRQTdHQSxFQTZHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUpBLE1BSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0F6SEE7QUEwSEE7QUFDQSxZQTNIQSxvQkEySEEsS0EzSEEsRUEySEE7QUFDQTtBQUNBLEtBN0hBO0FBOEhBO0FBQ0EsZ0JBL0hBLDBCQStIQTtBQUNBO0FBQ0EsS0FqSUEsRUFoRUEsRTs7Ozs7Ozs7Ozs7OztBQzNGQTtBQUFBO0FBQUE7QUFBQTtBQUFrekMsQ0FBZ0IsOHNDQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7QUNBdDBDO0FBQ0EsT0FBTyxLQUFVLEVBQUUsa0JBS2QiLCJmaWxlIjoicGFnZXMvYXJ0aWNsZS9saXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICd1bmktcGFnZXMnO1xuaW1wb3J0IFZ1ZSBmcm9tICd2dWUnXG5pbXBvcnQgUGFnZSBmcm9tICcuL3BhZ2VzL2FydGljbGUvbGlzdC52dWUnXG5jcmVhdGVQYWdlKFBhZ2UpIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSBmcm9tIFwiLi9saXN0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1mNmMzZTBlMCZzY29wZWQ9dHJ1ZSZcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2xpc3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9saXN0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9saXN0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWY2YzNlMGUwJnNjb3BlZD10cnVlJmxhbmc9c2NzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiZjZjM2UwZTBcIixcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicGFnZXMvYXJ0aWNsZS9saXN0LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMTYtMCEuLi8uLi8uLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3RlbXBsYXRlLmpzIS4uLy4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXVuaS1hcHAtbG9hZGVyL3BhZ2UtbWV0YS5qcyEuLi8uLi8uLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vbGlzdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZjZjM2UwZTAmc2NvcGVkPXRydWUmXCIiLCJ2YXIgY29tcG9uZW50c1xudHJ5IHtcbiAgY29tcG9uZW50cyA9IHtcbiAgICBpY29uZm9udDogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gaW1wb3J0KFxuICAgICAgICAvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcImNvbXBvbmVudHMvaWNvbmZvbnQvaWNvbmZvbnRcIiAqLyBcIkAvY29tcG9uZW50cy9pY29uZm9udC9pY29uZm9udC52dWVcIlxuICAgICAgKVxuICAgIH0sXG4gICAgc2Nyb2xsZXI6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIGltcG9ydChcbiAgICAgICAgLyogd2VicGFja0NodW5rTmFtZTogXCJjb21wb25lbnRzL3Njcm9sbGVyL3Njcm9sbGVyXCIgKi8gXCJAL2NvbXBvbmVudHMvc2Nyb2xsZXIvc2Nyb2xsZXIudnVlXCJcbiAgICAgIClcbiAgICB9XG4gIH1cbn0gY2F0Y2ggKGUpIHtcbiAgaWYgKFxuICAgIGUubWVzc2FnZS5pbmRleE9mKFwiQ2Fubm90IGZpbmQgbW9kdWxlXCIpICE9PSAtMSAmJlxuICAgIGUubWVzc2FnZS5pbmRleE9mKFwiLnZ1ZVwiKSAhPT0gLTFcbiAgKSB7XG4gICAgY29uc29sZS5lcnJvcihlLm1lc3NhZ2UpXG4gICAgY29uc29sZS5lcnJvcihcIjEuIOaOkuafpee7hOS7tuWQjeensOaLvOWGmeaYr+WQpuato+ehrlwiKVxuICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICBcIjIuIOaOkuafpee7hOS7tuaYr+WQpuespuWQiCBlYXN5Y29tIOinhOiMg++8jOaWh+aho++8mmh0dHBzOi8vdW5pYXBwLmRjbG91ZC5uZXQuY24vY29sbG9jYXRpb24vcGFnZXM/aWQ9ZWFzeWNvbVwiXG4gICAgKVxuICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICBcIjMuIOiLpee7hOS7tuS4jeespuWQiCBlYXN5Y29tIOinhOiMg++8jOmcgOaJi+WKqOW8leWFpe+8jOW5tuWcqCBjb21wb25lbnRzIOS4reazqOWGjOivpee7hOS7tlwiXG4gICAgKVxuICB9IGVsc2Uge1xuICAgIHRocm93IGVcbiAgfVxufVxudmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHZhciBsMCA9IF92bS5zbGlkZXIubGVuZ3RoID4gMCA/IF92bS5zbGlkZXIuc2xpY2UoMCwgNSkgOiBudWxsXG4gIF92bS4kbXAuZGF0YSA9IE9iamVjdC5hc3NpZ24oXG4gICAge30sXG4gICAge1xuICAgICAgJHJvb3Q6IHtcbiAgICAgICAgbDA6IGwwXG4gICAgICB9XG4gICAgfVxuICApXG59XG52YXIgcmVjeWNsYWJsZVJlbmRlciA9IGZhbHNlXG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMTItMSEuLi8uLi8uLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3NjcmlwdC5qcyEuLi8uLi8uLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vbGlzdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEyLTEhLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zY3JpcHQuanMhLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL2xpc3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiPHRlbXBsYXRlPlxyXG5cdDx2aWV3IGNsYXNzPVwicGFnZVwiPlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJzdGF0dXMtYmFyXCI+PC92aWV3PlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJ0b3BcIj5cclxuXHRcdFx0PCEtLSAjaWZkZWYgTVAgLS0+XHJcblx0XHRcdDwhLS0g6aG16Z2i5qCH6aKYIC0tPlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cInBhZ2UtdGl0bGVcIiA6c3R5bGU9XCInaGVpZ2h0OiAnICsgbmF2QmFySGVpZ2h0XCI+PGltYWdlIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWFnZXMvbG9nby5wbmdcIj48L2ltYWdlPjwvdmlldz5cclxuXHRcdFx0PCEtLSDmkJzntKIgLS0+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwic2VhcmNoXCIgOnN0eWxlPVwic2hvd05hdkZsb2F0ID8gJ2Rpc3BsYXk6bm9uZScgOiAnJ1wiPlxyXG5cdFx0XHRcdDxuYXZpZ2F0b3IgY2xhc3M9XCJpbnB1dFwiIDp1cmw9XCInc2VhcmNoP2NsYXNzaWQ9JyArIGNsYXNzaWRcIiBob3Zlci1jbGFzcz1cIm5vbmVcIj5cclxuXHRcdFx0XHRcdDxpY29uZm9udCB0eXBlPVwic2VhcmNoXCI+PC9pY29uZm9udD5cclxuXHRcdFx0XHRcdDx0ZXh0Pui+k+WFpeWFs+mUruivjeaQnOe0ojwvdGV4dD5cclxuXHRcdFx0XHQ8L25hdmlnYXRvcj5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8IS0tICNlbmRpZiAtLT5cclxuXHJcblx0XHRcdDwhLS0g5pCc57SiIC0tPlxyXG5cdFx0XHQ8IS0tICNpZmRlZiBINSAtLT5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJzZWFyY2hcIj5cclxuXHRcdFx0XHQ8aW1hZ2UgY2xhc3M9XCJsb2dvXCIgbW9kZT1cImFzcGVjdEZpdFwiIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWFnZXMvbG9nby5wbmdcIj48L2ltYWdlPlxyXG5cdFx0XHRcdDxuYXZpZ2F0b3IgY2xhc3M9XCJpbnB1dFwiIHVybD1cInNlYXJjaFwiIGhvdmVyLWNsYXNzPVwibm9uZVwiPlxyXG5cdFx0XHRcdFx0PGljb25mb250IHR5cGU9XCJzZWFyY2hcIj48L2ljb25mb250PlxyXG5cdFx0XHRcdFx0PHRleHQ+6L6T5YWl5YWz6ZSu6K+N5pCc57SiPC90ZXh0PlxyXG5cdFx0XHRcdDwvbmF2aWdhdG9yPlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDwhLS0gI2VuZGlmIC0tPlxyXG5cclxuXHRcdFx0PCEtLSDlr7zoiKogLS0+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwibmF2YmFyXCIgOmNsYXNzPVwic2hvd05hdkZsb2F0ID8gJ2Zsb2F0YmFyJyA6ICcnXCI+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJtZW51XCIgdi1pZj1cImNhdGVnb3J5Lmxlbmd0aCA+IDBcIj5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiY2F0ZWdvcnlcIj5cclxuXHRcdFx0XHRcdFx0PHNjcm9sbC12aWV3IDpzY3JvbGwteD1cInRydWVcIiA6c2Nyb2xsLXdpdGgtYW5pbWF0aW9uPVwidHJ1ZVwiIDpzY3JvbGwtaW50by12aWV3PVwic2Nyb2xsX2NsYXNzaWRcIiBAc2Nyb2xsPVwibmF2RmxvYXRTaG93KClcIj5cclxuXHRcdFx0XHRcdFx0XHQ8dmlld1xyXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3M9XCJpdGVtXCJcclxuXHRcdFx0XHRcdFx0XHRcdHYtZm9yPVwiKGl0ZW0sIGluZGV4KSBpbiBjYXRlZ29yeVwiXHJcblx0XHRcdFx0XHRcdFx0XHQ6a2V5PVwiaW5kZXhcIlxyXG5cdFx0XHRcdFx0XHRcdFx0OmNsYXNzPVwiY2xhc3NpZCA9PSBpdGVtLmNsYXNzaWQgPyAnY3VycmVudCcgOiAnJ1wiXHJcblx0XHRcdFx0XHRcdFx0XHQ6aWQ9XCInY2xhc3NpZC0nICsgaW5kZXhcIlxyXG5cdFx0XHRcdFx0XHRcdFx0OnN0eWxlPVwiJ3dpZHRoOicgKyAoY2F0ZWdvcnkubGVuZ3RoIDw9IDQgPyAxMDAgLyBjYXRlZ29yeS5sZW5ndGggKyAnJScgOiAnJylcIlxyXG5cdFx0XHRcdFx0XHRcdFx0QHRhcD1cImNhdGVnb3J5Q2hhbmdlKGl0ZW0uY2xhc3NpZCwgaW5kZXgpXCJcclxuXHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInRleHRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHRleHQ+e3sgaXRlbS5jbGFzc25hbWUgfX08L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwhLS0gPGltYWdlIHNyYz1cIi9zdGF0aWMvaW1hZ2VzL2JnX3RhYi5wbmdcIj48L2ltYWdlPiAtLT5cclxuXHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDwvc2Nyb2xsLXZpZXc+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImxpc3RcIiBAdGFwPVwibWVudVNob3coIXNob3dNZW51KVwiPjxpY29uZm9udCB0eXBlPVwibWVudS0wMVwiPjwvaWNvbmZvbnQ+PC92aWV3PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0PC92aWV3PlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJjb250ZW50XCI+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwibWVudS1ibG9jayBmYWRlLWluXCIgdi1zaG93PVwic2hvd01lbnVcIj5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImxpc3RcIj5cclxuXHRcdFx0XHRcdDx0ZXh0XHJcblx0XHRcdFx0XHRcdGNsYXNzPVwiaXRlbVwiXHJcblx0XHRcdFx0XHRcdHYtZm9yPVwiKGl0ZW0sIGluZGV4KSBpbiBjYXRlZ29yeVwiXHJcblx0XHRcdFx0XHRcdDprZXk9XCJpbmRleFwiXHJcblx0XHRcdFx0XHRcdDpjbGFzcz1cImNsYXNzaWQgPT0gaXRlbS5jbGFzc2lkID8gJ2N1cnJlbnQnIDogJydcIlxyXG5cdFx0XHRcdFx0XHQ6aWQ9XCInY2xhc3NpZC0nICsgKGluZGV4ICsgMSlcIlxyXG5cdFx0XHRcdFx0XHRAdGFwPVwiY2F0ZWdvcnlDaGFuZ2UoaXRlbS5jbGFzc2lkLCBpbmRleClcIlxyXG5cdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHR7eyBpdGVtLmNsYXNzbmFtZSB9fVxyXG5cdFx0XHRcdFx0PC90ZXh0PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8c2Nyb2xsZXIgQGluaXQ9XCJpbml0U2Nyb2xsZXJcIiBAZG93bj1cInJlZnJlc2hEYXRhXCIgQHVwPVwiZ2V0RGF0YVwiIDp1cD1cIm9wdFVwXCIgQHNjcm9sbD1cIm5hdkZsb2F0U2hvdyhzY3JvbGxlcilcIiA6Zml4ZWQ9XCJmYWxzZVwiPlxyXG5cdFx0XHRcdDxzd2lwZXIgdi1pZj1cInNsaWRlci5sZW5ndGggPiAwXCIgY2xhc3M9XCJzd2lwZXJcIiA6aW5kaWNhdG9yLWRvdHM9XCJ0cnVlXCIgOmF1dG9wbGF5PVwidHJ1ZVwiIDpjaXJjdWxhcj1cInRydWVcIj5cclxuXHRcdFx0XHRcdDxzd2lwZXItaXRlbSB2LWZvcj1cIihpdGVtLCBpbmRleCkgaW4gc2xpZGVyLnNsaWNlKDAsNSlcIiA6a2V5PVwiaW5kZXhcIj5cclxuXHRcdFx0XHRcdFx0PG5hdmlnYXRvciBjbGFzcz1cIml0ZW1cIiBob3Zlci1jbGFzcz1cIm5vbmVcIiA6dXJsPVwiJy9wYWdlcy9hcnRpY2xlL2RldGFpbD9pZD0nICsgaXRlbS5pZFwiPlxyXG5cdFx0XHRcdFx0XHRcdDxpbWFnZSA6bGF6eS1sb2FkPVwidHJ1ZVwiIDpzcmM9XCJpdGVtLnRpdGxlcGljXCIgbW9kZT1cImFzcGVjdEZpbGxcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidGl0bGVcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDx0ZXh0Pnt7IGl0ZW0udGl0bGUgfX08L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8L25hdmlnYXRvcj5cclxuXHRcdFx0XHRcdDwvc3dpcGVyLWl0ZW0+XHJcblx0XHRcdFx0PC9zd2lwZXI+XHJcblx0XHRcdFx0PGFydGljbGVMaXN0IDpsaXN0PVwibGlzdFwiIC8+XHJcblx0XHRcdDwvc2Nyb2xsZXI+XHJcblx0XHQ8L3ZpZXc+XHJcblx0XHQ8cGFnZUxvYWRpbmcgdi1pZj1cInNob3dQYWdlTG9hZGluZ1wiPjwvcGFnZUxvYWRpbmc+XHJcblx0PC92aWV3PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0IHNjcm9sbGVyIGZyb20gJ0AvY29tcG9uZW50cy9zY3JvbGxlci9zY3JvbGxlci52dWUnO1xyXG5pbXBvcnQgYXJ0aWNsZUxpc3QgZnJvbSAnQC9jb21wb25lbnRzL2FydGljbGUvbGlzdC52dWUnO1xyXG5pbXBvcnQgcGFnZUxvYWRpbmcgZnJvbSAnQC9jb21wb25lbnRzL2xvYWRpbmcvcGFnZUxvYWRpbmcudnVlJztcclxuaW1wb3J0IGljb25mb250IGZyb20gJ0AvY29tcG9uZW50cy9pY29uZm9udC9pY29uZm9udC52dWUnO1xyXG5pbXBvcnQgdXRpbCBmcm9tICdAL2NvbW1vbi91dGlsLmpzJztcclxuZXhwb3J0IGRlZmF1bHQge1xyXG5cdGNvbXBvbmVudHM6IHtcclxuXHRcdGFydGljbGVMaXN0LFxyXG5cdFx0cGFnZUxvYWRpbmcsXHJcblx0XHRzY3JvbGxlcixcclxuXHRcdGljb25mb250XHJcblx0fSxcclxuXHRkYXRhKCkge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0c2Nyb2xsZXI6IHt9LFxyXG5cdFx0XHRvcHRVcDogeyBhdXRvOiB0cnVlLCBvblNjcm9sbDogdHJ1ZSwgcGFnZTogeyBzaXplOiAyMCB9LCBlbXB0eTogeyB0aXA6ICfmmoLml6Dmlofnq6B+JyB9IH0sXHJcblx0XHRcdGNsYXNzaWQ6IDEsXHJcblx0XHRcdGNhdGVnb3J5X2luZGV4OiAwLFxyXG5cdFx0XHRzY3JvbGxfY2xhc3NpZDogJ3Njcm9sbF9jbGFzc2lkXzAnLFxyXG5cdFx0XHRjdXJyZW50U2xpZGVySW5kZXg6IDAsXHJcblx0XHRcdGNhdGVnb3J5OiBbXSxcclxuXHRcdFx0c2hvd01lbnU6IGZhbHNlLFxyXG5cdFx0XHRzbGlkZXI6IFtdLFxyXG5cdFx0XHRsaXN0OiBbXSxcclxuXHRcdFx0c2hvd05vRGF0YTogZmFsc2UsXHJcblx0XHRcdHNob3dQYWdlTG9hZGluZzogZmFsc2UsXHJcblx0XHRcdHNob3dOYXZGbG9hdDogZmFsc2UsXHJcblx0XHRcdG5hdkJhckhlaWdodDogJydcclxuXHRcdH07XHJcblx0fSxcclxuXHRvblNob3coKSB7XHJcblx0XHR0aGlzLiRpbml0UGFnZVRpdGxlKCk7IC8v5Yid5aeL5YyW6aG16Z2i5qCH6aKYXHJcblxyXG5cdFx0Lyrlr7zoiKrmoI/pq5jluqYqL1xyXG5cdFx0aWYgKHRoaXMubmF2QmFySGVpZ2h0ID09ICcnKSB7XHJcblx0XHRcdHRoaXMubmF2QmFySGVpZ2h0ID0gdGhpcy4kYXBwLmdldE5hdmlCYXJIZWlnaHQoKTtcclxuXHRcdH1cclxuXHJcblx0XHQvKuadpea6kOaYr+eZu+W9leaXtuabtOaWsCovXHJcblx0XHRsZXQgc291cmNlID0gdW5pLmdldFN0b3JhZ2VTeW5jKCdzb3VyY2UnKTtcclxuXHRcdGlmIChzb3VyY2UgPT0gJ2xvZ2luJykge1xyXG5cdFx0XHR1bmkucmVtb3ZlU3RvcmFnZVN5bmMoJ3NvdXJjZScpO1xyXG5cdFx0XHR0aGlzLmxvYWREYXRhKCk7XHJcblx0XHR9XHJcblx0fSxcclxuXHRvblNoYXJlQXBwTWVzc2FnZSgpIHtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdHBhdGg6ICcvcGFnZXMvYXJ0aWNsZS9pbmRleCcsXHJcblx0XHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uKGUpIHt9LFxyXG5cdFx0XHR0aXRsZTogJ+mHjOWlpeaooeadvydcclxuXHRcdH07XHJcblx0fSxcclxuXHRvbkxvYWQoZSkge1xyXG5cdFx0Ly8gI2lmZGVmIEg1XHJcblx0XHRpZiAoZS5jbGFzc2lkID4gMCkge1xyXG5cdFx0XHR0aGlzLmNsYXNzaWQgPSBlLmNsYXNzaWQ7XHJcblx0XHR9XHJcblx0XHRpZiAoZS5jYXRlZ29yeV9pbmRleCA+IDApIHtcclxuXHRcdFx0dGhpcy5jYXRlZ29yeV9pbmRleCA9IGUuY2F0ZWdvcnlfaW5kZXg7XHJcblx0XHR9XHJcblx0XHQvLyAjZW5kaWZcclxuXHRcdHRoaXMuZ2V0Q2F0ZWdvcnkoKTtcclxuXHR9LFxyXG5cdG9uUHVsbERvd25SZWZyZXNoKCkge1xyXG5cdFx0dW5pLnNob3dMb2FkaW5nKHtcclxuXHRcdFx0dGl0bGU6ICfliLfmlrDkuK0nXHJcblx0XHR9KTtcclxuXHRcdHRoaXMubG9hZERhdGEoKTtcclxuXHR9LFxyXG5cdG1ldGhvZHM6IHtcclxuXHRcdC8q5Yid5aeL5YyW5rua5YqoKi9cclxuXHRcdGluaXRTY3JvbGxlcihzY3JvbGxlcikge1xyXG5cdFx0XHR0aGlzLnNjcm9sbGVyID0gc2Nyb2xsZXI7XHJcblx0XHR9LFxyXG5cclxuXHRcdC8q5Yi35paw5pWw5o2uKi9cclxuXHRcdHJlZnJlc2hEYXRhKCkge1xyXG5cdFx0XHR1bmkuc2hvd0xvYWRpbmcoe1xyXG5cdFx0XHRcdHRpdGxlOiAn5Yi35paw5LitJ1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0dGhpcy5zY3JvbGxlci5yZXNldFVwU2Nyb2xsKCk7XHJcblx0XHR9LFxyXG5cclxuXHRcdC8q5Yqg6L295pWw5o2uKi9cclxuXHRcdGxvYWREYXRhKCkge1xyXG5cdFx0XHR0aGlzLnNsaWRlciA9IFtdO1xyXG5cdFx0XHR0aGlzLmxpc3QgPSBbXTtcclxuXHRcdFx0dGhpcy5jdXJyZW50U2xpZGVySW5kZXggPSAwO1xyXG5cdFx0XHR0aGlzLnNjcm9sbGVyLnJlc2V0VXBTY3JvbGwoKTtcclxuXHRcdH0sXHJcblxyXG5cdFx0Lyrojrflj5blrZDnsbvliKvmlbDmja4qL1xyXG5cdFx0Z2V0Q2F0ZWdvcnkoKSB7XHJcblx0XHRcdHRoaXMuJGFwcC5yZXF1ZXN0KHtcclxuXHRcdFx0XHR1cmw6IHRoaXMuJGFwaS5hcnRpY2xlLmNhdGVnb3J5Kyc/bW9kPWNvbHVtbiZhY3Q9bmF2aWdhdGlvbicsXHJcblx0XHRcdFx0ZGF0YToge1xyXG5cdFx0XHRcdFx0Y2xhc3NpZDogMixcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdG1ldGhvZDogJ0dFVCcsXHJcblx0XHRcdFx0ZGF0YVR5cGU6ICdqc29uJyxcclxuXHRcdFx0XHRzdWNjZXNzOiByZXMgPT4ge1xyXG5cdFx0XHRcdFx0aWYgKHJlcy5jb2RlID09IDEpIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5jYXRlZ29yeSA9IHJlcy5saXN0O1xyXG5cdFx0XHRcdFx0XHRpZiAodGhpcy5jYXRlZ29yeV9pbmRleCA+IC0xKSB7XHJcblx0XHRcdFx0XHRcdFx0bGV0IG5leHRJbmRleCA9IHRoaXMuY2F0ZWdvcnlfaW5kZXggLSAxO1xyXG5cdFx0XHRcdFx0XHRcdG5leHRJbmRleCA9IG5leHRJbmRleCA8PSAwID8gMCA6IG5leHRJbmRleDtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLnNjcm9sbF9jbGFzc2lkID0gYGNsYXNzaWQtJHtuZXh0SW5kZXh9YDsgLy/liqjnlLvmu5rliqgs5rua5Yqo6Iez5Lit5b+D5L2N572uXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdHRoaXMuJGFsZXJ0KHJlcy5tc2cpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0Y29tcGxldGU6IHJlcyA9PiB7fVxyXG5cdFx0XHR9KTtcclxuXHRcdH0sXHJcblxyXG5cdFx0Lyrojrflj5bmlbDmja4qL1xyXG5cdFx0Z2V0RGF0YSgpIHtcclxuXHRcdFx0dGhpcy4kYXBwLnJlcXVlc3Qoe1xyXG5cdFx0XHRcdHVybDogdGhpcy4kYXBpLmFydGljbGUuaW5kZXgrJz9tb2Q9bmV3cyZhY3Q9bGlzdCcsXHJcblx0XHRcdFx0ZGF0YToge1xyXG5cdFx0XHRcdFx0Y2xhc3NpZDogdGhpcy5jbGFzc2lkLFxyXG5cdFx0XHRcdFx0cGFnZTogdGhpcy5zY3JvbGxlci5udW0sXHJcblx0XHRcdFx0XHRwYWdlc2l6ZTogdGhpcy5zY3JvbGxlci5zaXplXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRtZXRob2Q6ICdHRVQnLFxyXG5cdFx0XHRcdGRhdGFUeXBlOiAnanNvbicsXHJcblx0XHRcdFx0c3VjY2VzczogcmVzID0+IHtcclxuXHRcdFx0XHRcdGlmIChyZXMuY29kZSA9PSAxKSB7XHJcblx0XHRcdFx0XHRcdGlmICh0aGlzLnNjcm9sbGVyLm51bSA9PSAxKSB7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5saXN0ID0gW107XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0Ly8gaWYgKHRoaXMuc2xpZGVyLmxlbmd0aCA9PSAwKSB7XHJcblx0XHRcdFx0XHRcdC8vIFx0dGhpcy5zbGlkZXIgPSByZXMuZGF0YS5yb3dzO1xyXG5cdFx0XHRcdFx0XHQvLyB9XHJcblx0XHRcdFx0XHRcdHRoaXMuc2xpZGVyID0gcmVzLmRhdGEubGlzdDtcclxuXHRcdFx0XHRcdFx0dGhpcy5saXN0ID0gdGhpcy5saXN0LmNvbmNhdChyZXMuZGF0YS5saXN0KTtcclxuXHRcdFx0XHRcdFx0Ly8gdGhpcy5saXN0LnRpdGxlID0gdGhpcy5saXN0LnRpdGxlLmNvbmNhdChyZXMuZGF0YS5yb3dzLnRpdGxlLnJlcGxhY2UoL1xcXFwvZyxcIlwiKSk7XHJcblx0XHRcdFx0XHRcdHRoaXMuc2Nyb2xsZXIuZW5kQnlQYWdlKHJlcy5kYXRhLmxpc3QubGVuZ3RoLCByZXMuZGF0YS5wYWdlKzEpO1xyXG5cdFx0XHRcdFx0XHR0aGlzLnNob3dQYWdlTG9hZGluZyA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5zY3JvbGxlci5lbmRTdWNjZXNzKCk7XHJcblx0XHRcdFx0XHRcdHRoaXMuJGFsZXJ0KHJlcy5tc2cpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0ZmFpbDogcmVzID0+IHtcclxuXHRcdFx0XHRcdHRoaXMuc2Nyb2xsZXIuZW5kRXJyKCk7XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRjb21wbGV0ZTogcmVzID0+IHtcclxuXHRcdFx0XHRcdHVuaS5zdG9wUHVsbERvd25SZWZyZXNoKCk7XHJcblx0XHRcdFx0XHR1bmkuaGlkZUxvYWRpbmcoKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0fSxcclxuXHJcblx0XHQvKuWIh+aNouWvvOiIqiovXHJcblx0XHRjYXRlZ29yeUNoYW5nZShjbGFzc2lkLCBpbmRleCkge1xyXG5cdFx0XHR0aGlzLnNob3dNZW51ID0gZmFsc2U7XHJcblx0XHRcdHRoaXMuY2F0ZWdvcnlfaW5kZXggPSBpbmRleDtcclxuXHRcdFx0dGhpcy5jbGFzc2lkID0gY2xhc3NpZDtcclxuXHRcdFx0dmFyIG5leHRJbmRleCA9IGluZGV4IC0gMTtcclxuXHRcdFx0bmV4dEluZGV4ID0gbmV4dEluZGV4IDw9IDAgPyAwIDogbmV4dEluZGV4O1xyXG5cdFx0XHR0aGlzLnNjcm9sbF9jbGFzc2lkID0gYGNsYXNzaWQtJHtuZXh0SW5kZXh9YDsgLy/liqjnlLvmu5rliqgs5rua5Yqo6Iez5Lit5b+D5L2N572uXHJcblx0XHRcdC8vdGhpcy5sb2FkRGF0YSgpO1xyXG5cclxuXHRcdFx0Ly8gI2lmZGVmIEg1XHJcblx0XHRcdHVuaS5uYXZpZ2F0ZVRvKHtcclxuXHRcdFx0XHR1cmw6ICcvcGFnZXMvYXJ0aWNsZS9saXN0P2NsYXNzaWQ9JyArIHRoaXMuY2xhc3NpZCArICcmY2F0ZWdvcnlfaW5kZXg9JyArIHRoaXMuY2F0ZWdvcnlfaW5kZXhcclxuXHRcdFx0fSk7XHJcblx0XHRcdC8vICNlbmRpZlxyXG5cdFx0fSxcclxuXHJcblx0XHQvKuW5v+WRiuWIh+aNoiovXHJcblx0XHRzbGlkZXJDaGFuZ2U6IGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0dGhpcy5jdXJyZW50U2xpZGVySW5kZXggPSBlLmRldGFpbC5jdXJyZW50O1xyXG5cdFx0fSxcclxuXHJcblx0XHQvKua7muWKqOaXtuWvvOiIquagj+a1ruWKqCovXHJcblx0XHRuYXZGbG9hdFNob3coc2Nyb2xsZXIpIHtcclxuXHRcdFx0aWYgKHNjcm9sbGVyKSB7XHJcblx0XHRcdFx0aWYgKHNjcm9sbGVyLnNjcm9sbFRvcCA+IDYwKSB7XHJcblx0XHRcdFx0XHRpZiAoIXRoaXMuc2hvd05hdkZsb2F0KSB7XHJcblx0XHRcdFx0XHRcdHRoaXMuc2hvd05hdkZsb2F0ID0gdHJ1ZTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0aWYgKHRoaXMuc2hvd05hdkZsb2F0KSB7XHJcblx0XHRcdFx0XHRcdHRoaXMuc2hvd05hdkZsb2F0ID0gZmFsc2U7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0Lyroj5zljZXmoYblsZXnpLoqL1xyXG5cdFx0bWVudVNob3codmFsdWUpIHtcclxuXHRcdFx0dGhpcy5zaG93TWVudSA9IHZhbHVlO1xyXG5cdFx0fSxcclxuXHRcdC8q6ZqQ6JeP5a+86Iiq5rWu5YqoKi9cclxuXHRcdG5hdkZsb2F0SGlkZSgpIHtcclxuXHRcdFx0dGhpcy5zaG93TmF2RmxvYXQgPSBmYWxzZTtcclxuXHRcdH1cclxuXHR9XHJcbn07XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZCBsYW5nPVwic2Nzc1wiPlxyXG5wYWdlIHtcclxuXHRoZWlnaHQ6IDEwMCU7XHJcbn1cclxuLnBhZ2Uge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0ZmxleDogMTtcclxuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdG92ZXJmbG93OiBoaWRkZW47XHJcblx0aGVpZ2h0OiAxMDAlO1xyXG59XHJcbi5jb250ZW50IHtcclxuXHRmbGV4OiAxO1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGhlaWdodDogMTAwcnB4O1xyXG59XHJcblxyXG4vKuWktOmDqCovXHJcbi50b3Age1xyXG5cdC8q6aG16Z2i5qCH6aKYKi9cclxuXHQucGFnZS10aXRsZSB7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0aGVpZ2h0OiA5MHJweDtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdGJvcmRlci1ib3R0b206IDFycHggc29saWQgI2VmZWZlZjtcclxuXHRcdHotaW5kZXg6IDk5OTk7XHJcblx0XHRsaW5lLWhlaWdodDogMTtcclxuXHRcdGltYWdlIHtcclxuXHRcdFx0aGVpZ2h0OiA1MHJweDtcclxuXHRcdFx0d2lkdGg6IDI4MHJweDtcclxuXHRcdFx0bWFyZ2luLWxlZnQ6IC0zNXJweDtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8q5pCc57SiKi9cclxuXHQuc2VhcmNoIHtcclxuXHRcdHBhZGRpbmc6IDI0cnB4IDI0cnB4IDAgMjRycHg7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdC5sb2dvIHtcclxuXHRcdFx0aGVpZ2h0OiA2MHJweDtcclxuXHRcdFx0d2lkdGg6IDQ3NHJweDtcclxuXHRcdFx0bWFyZ2luLXJpZ2h0OiAzMHJweDtcclxuXHRcdH1cclxuXHRcdC5pbnB1dCB7XHJcblx0XHRcdG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XHJcblx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRcdGhlaWdodDogNzBycHg7XHJcblx0XHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0XHRiYWNrZ3JvdW5kOiAjZjVmNWY1O1xyXG5cdFx0XHRib3JkZXItcmFkaXVzOiAzNHJweDtcclxuXHRcdFx0L2RlZXAvIC5pY29uIHtcclxuXHRcdFx0XHRtYXJnaW4tbGVmdDogMjhycHg7XHJcblx0XHRcdFx0Y29sb3I6ICNhYWFhYWE7XHJcblx0XHRcdFx0Zm9udC1zaXplOiAzMnJweDtcclxuXHRcdFx0XHRsaW5lLWhlaWdodDogMTtcclxuXHRcdFx0fVxyXG5cdFx0XHR0ZXh0IHtcclxuXHRcdFx0XHRtYXJnaW4tbGVmdDogMTRycHg7XHJcblx0XHRcdFx0Zm9udC1zaXplOiAzMHJweDtcclxuXHRcdFx0XHRjb2xvcjogI2FhYWFhYTtcclxuXHRcdFx0XHRsaW5lLWhlaWdodDogMTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0LnVzZXJ7XHJcblx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRcdC9kZWVwLyAuaWNvbiB7XHJcblx0XHRcdFx0bWFyZ2luLWxlZnQ6IDI0cnB4O1xyXG5cdFx0XHRcdGNvbG9yOiAjYWFhYWFhO1xyXG5cdFx0XHRcdGZvbnQtc2l6ZTogMzhycHg7XHJcblx0XHRcdFx0bWFyZ2luLXRvcDogNHJweDtcclxuXHRcdFx0fVxyXG5cdFx0XHRpbWFnZXtcclxuXHRcdFx0XHR3aWR0aDogNTBycHg7XHJcblx0XHRcdFx0aGVpZ2h0OiA1MHJweDtcclxuXHRcdFx0XHRib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0XHRcdFx0bWFyZ2luLWxlZnQ6IDI1cnB4O1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvKiDpobbpg6huYXZiYXIgKi9cclxuXHQubmF2YmFyIHtcclxuXHRcdC8q5YiG57G7Ki9cclxuXHRcdC5tZW51IHtcclxuXHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdFx0XHRoZWlnaHQ6IDgwcnB4O1xyXG5cdFx0XHR3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG5cdFx0XHRwYWRkaW5nOiAxNXJweCAwIDZycHg7XHJcblx0XHRcdHotaW5kZXg6IDEwO1xyXG5cdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0XHRcdC8q5YiG57G7Ki9cclxuXHRcdFx0LmNhdGVnb3J5IHtcclxuXHRcdFx0XHR3aWR0aDogNjUwcnB4O1xyXG5cdFx0XHRcdG1hcmdpbi1sZWZ0OiAzMHJweDtcclxuXHRcdFx0XHR3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG5cdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdFx0XHRzY3JvbGwtdmlldyB7XHJcblx0XHRcdFx0XHR3aWR0aDogYXV0bztcclxuXHRcdFx0XHRcdC5pdGVtIHtcclxuXHRcdFx0XHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdFx0XHRcdFx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0XHRcdFx0XHRcdG1hcmdpbjogMCAzMXJweCAwO1xyXG5cdFx0XHRcdFx0XHRoZWlnaHQ6IDgwcnB4O1xyXG5cdFx0XHRcdFx0XHR0ZXh0LWFsaWduOiBsZWZ0O1xyXG5cdFx0XHRcdFx0XHRwYWRkaW5nLXRvcDogN3JweDtcclxuXHRcdFx0XHRcdFx0Ly9saW5lLWhlaWdodDogODBycHg7XHJcblx0XHRcdFx0XHRcdCY6Zmlyc3QtY2hpbGQge1xyXG5cdFx0XHRcdFx0XHRcdG1hcmdpbi1sZWZ0OiAxMHJweDtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHQmOmFmdGVyIHtcclxuXHRcdFx0XHRcdFx0XHRjb250ZW50OiAnJztcclxuXHRcdFx0XHRcdFx0XHR3aWR0aDogMDtcclxuXHRcdFx0XHRcdFx0XHRoZWlnaHQ6IDA7XHJcblx0XHRcdFx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHRcdFx0XHRcdGxlZnQ6IDUwJTtcclxuXHRcdFx0XHRcdFx0XHRib3R0b206IDA7XHJcblx0XHRcdFx0XHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG5cdFx0XHRcdFx0XHRcdHRyYW5zaXRpb246IDAuM3M7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0LnRleHQge1xyXG5cdFx0XHRcdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdFx0XHRcdFx0XHR3aWR0aDogYXV0bztcclxuXHRcdFx0XHRcdFx0XHRoZWlnaHQ6IGF1dG87XHJcblx0XHRcdFx0XHRcdFx0bGluZS1oZWlnaHQ6IGF1dG87XHJcblx0XHRcdFx0XHRcdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdFx0XHRcdFx0XHRcdHRleHQge1xyXG5cdFx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAzNnJweDtcclxuXHRcdFx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdFx0XHRcdFx0XHRcdFx0Y29sb3I6ICM1NTU7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdGltYWdlIHtcclxuXHRcdFx0XHRcdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdFx0XHRcdFx0XHRcdHRvcDogMTZycHg7XHJcblx0XHRcdFx0XHRcdFx0XHRyaWdodDogLTE0cnB4O1xyXG5cdFx0XHRcdFx0XHRcdFx0d2lkdGg6IDUwcnB4O1xyXG5cdFx0XHRcdFx0XHRcdFx0aGVpZ2h0OiA1MHJweDtcclxuXHRcdFx0XHRcdFx0XHRcdGRpc3BsYXk6IG5vbmU7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHQuY3VycmVudCB7XHJcblx0XHRcdFx0XHRcdCY6YWZ0ZXIge1xyXG5cdFx0XHRcdFx0XHRcdHdpZHRoOiA1MCU7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0LnRleHQge1xyXG5cdFx0XHRcdFx0XHRcdHRleHQge1xyXG5cdFx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiA0MHJweDtcclxuXHRcdFx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdFx0XHRcdFx0XHRcdFx0Y29sb3I6ICMyNjI2MjY7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdGltYWdlIHtcclxuXHRcdFx0XHRcdFx0XHRcdGRpc3BsYXk6IGJsb2NrO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRib3JkZXItYm90dG9tOiA2cnB4IHNvbGlkICM0MDlFRkY7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0Lmxpc3Qge1xyXG5cdFx0XHRcdHdpZHRoOiA3MHJweDtcclxuXHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHRcdFx0Ly9ib3gtc2hhZG93OiAtNHJweCAwIDAgI2U5ZWJlZTtcclxuXHRcdFx0XHQvL2JveC1zaGFkb3c6IC0ycHggMCAwICMyNjI2MjY7XHJcblx0XHRcdFx0L2RlZXAvIC5pY29uIHtcclxuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMzZycHg7XHJcblx0XHRcdFx0XHRtYXJnaW4tdG9wOiAtNnJweDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbn1cclxuLm1lbnUtYmxvY2sge1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR0b3A6IDA7XHJcblx0bGVmdDogMDtcclxuXHRiYWNrZ3JvdW5kOiAjZmZmO1xyXG5cdGJvcmRlci1ib3R0b206IDFycHggc29saWQgI2Y1ZjVmNTtcclxuXHRwYWRkaW5nOiAyMHJweCAwIDUwcnB4O1xyXG5cdHotaW5kZXg6IDEwMDtcclxuXHQvL2JveC1zaGFkb3c6IDAgMTVycHggMTBycHggLTE1cnB4ICNlOWViZWU7XHJcblx0Lmxpc3Qge1xyXG5cdFx0cGFkZGluZy1sZWZ0OiAxMHJweDtcclxuXHRcdHRleHQge1xyXG5cdFx0XHRiYWNrZ3JvdW5kOiAjZjVmN2ZhO1xyXG5cdFx0XHRib3JkZXItcmFkaXVzOiA4cnB4O1xyXG5cdFx0XHRmb250LXNpemU6IDMycnB4O1xyXG5cdFx0XHRtYXJnaW46IDEycnB4IDIwcnB4O1xyXG5cdFx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0XHRcdGhlaWdodDogNzJycHg7XHJcblx0XHRcdHdpZHRoOiAxNDRycHg7XHJcblx0XHRcdGxpbmUtaGVpZ2h0OiA3MnJweDtcclxuXHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0fVxyXG5cdFx0LmN1cnJlbnQge1xyXG5cdFx0XHRjb2xvcjogI2ZmZjtcclxuXHRcdFx0YmFja2dyb3VuZDogIzQwOUVGRjtcclxuXHRcdFx0Ly9mb250LXNpemU6IDMycnB4O1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuLnNjcm9sbCB7XHJcblx0aGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4vKuW5u+eBr+eJh+W5v+WRiiAqL1xyXG4uc3dpcGVyIHtcclxuXHRoZWlnaHQ6IDM1MHJweDtcclxuXHRtYXJnaW46IDE0cnB4IDI0cnB4IDA7XHJcblx0aW1hZ2Uge1xyXG5cdFx0aGVpZ2h0OiAzNTBycHg7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDE1cnB4O1xyXG5cdFx0Ly9ib3gtc2hhZG93OiAwIDAgMTJweCAjZGRkZWUxO1xyXG5cdH1cclxuXHQuY3VycmVudCB7XHJcblx0XHR3aWR0aDogOTclO1xyXG5cdFx0aGVpZ2h0OiAzNTBycHg7XHJcblx0XHRtYXJnaW46IDEuNSUgMS41JTtcclxuXHRcdHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4gMHM7XHJcblx0fVxyXG5cdC5pdGVtIHtcclxuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdC50aXRsZSB7XHJcblx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdFx0bGVmdDogMDtcclxuXHRcdFx0Ym90dG9tOiAwO1xyXG5cdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRcdHRleHQge1xyXG5cdFx0XHRcdG1hcmdpbjogNyUgNiU7XHJcblx0XHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0XHRcdC8vYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2JhKDAsIDAsIDAsIDAuMyksIHJnYmEoMCwgMCwgMCwgMC4zKSk7XHJcblx0XHRcdFx0Ly9iYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcscmdiYSgyNTUsIDE4MSwgMTksLjgpLHJnYmEoMjU1LCAxODEsIDE5LC4yKSk7XHJcblx0XHRcdFx0Y29sb3I6ICNmZmY7XHJcblx0XHRcdFx0ZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcblx0XHRcdFx0dGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcblx0XHRcdFx0d29yZC1icmVhazogYnJlYWstYWxsO1xyXG5cdFx0XHRcdC13ZWJraXQtbGluZS1jbGFtcDogMjtcclxuXHRcdFx0XHQtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG5cdFx0XHRcdG92ZXJmbG93OiBoaWRkZW47XHJcblx0XHRcdFx0Zm9udC1zaXplOiAzNHJweDtcclxuXHRcdFx0XHRwYWRkaW5nOiAxNHJweCAyMHJweDtcclxuXHRcdFx0XHRtYXgtd2lkdGg6IDYxMHJweDtcclxuXHRcdFx0XHRsaW5lLWhlaWdodDogMS4zO1xyXG5cdFx0XHRcdGJvcmRlci1yYWRpdXM6IDVycHg7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbi8q5rWu5YqobmF2YmFyKi9cclxuLmZsb2F0YmFyIHtcclxuXHQvL2JvcmRlci1ib3R0b206IDFycHggc29saWQgI2U4ZThlODtcclxuXHRib3gtc2hhZG93OiAwcHggMnB4IDJweCAtMnB4ICNlOGU4ZTg7XHJcblx0cGFkZGluZy1ib3R0b206IDEycnB4O1xyXG59XHJcblxyXG4vZGVlcC8gLm5vLWRhdGEge1xyXG5cdG1hcmdpbi10b3A6IDIwMHJweDtcclxufVxyXG48L3N0eWxlPlxyXG4iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanM/P3JlZi0tOC1vbmVPZi0xLTAhLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTgtb25lT2YtMS0xIS4uLy4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTgtb25lT2YtMS00IS4uLy4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMS01IS4uLy4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi9saXN0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWY2YzNlMGUwJnNjb3BlZD10cnVlJmxhbmc9c2NzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzPz9yZWYtLTgtb25lT2YtMS0wIS4uLy4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS04LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS04LW9uZU9mLTEtNCEuLi8uLi8uLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTEtNSEuLi8uLi8uLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vbGlzdC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1mNmMzZTBlMCZzY29wZWQ9dHJ1ZSZsYW5nPXNjc3MmXCIiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAvLyAxNjIxOTA1ODU3NTU4XG4gICAgICB2YXIgY3NzUmVsb2FkID0gcmVxdWlyZShcIkQ6L1Byb2dyYW0gRmlsZXMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9obXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7XCJobXJcIjp0cnVlLFwicHVibGljUGF0aFwiOlwiLi4vLi4vXCIsXCJsb2NhbHNcIjpmYWxzZX0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGNzc1JlbG9hZCk7XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdCh1bmRlZmluZWQsIGNzc1JlbG9hZCk7XG4gICAgfVxuICAiXSwic291cmNlUm9vdCI6IiJ9