(window.webpackJsonp=window.webpackJsonp||[]).push([[206],{"../plugins/search/src/components/HomePageComponent/HomePageSearchBar.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";(function(module){__webpack_require__.d(__webpack_exports__,"a",(function(){return HomePageSearchBar}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../node_modules/@material-ui/core/esm/styles/makeStyles.js"),_SearchBar__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../plugins/search/src/components/SearchBar/index.tsx"),_util__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../plugins/search/src/components/util.ts");var enterModule;(enterModule=__webpack_require__("../node_modules/react-hot-loader/index.js").enterModule)&&enterModule(module);const useStyles=Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__.a)({root:{border:"1px solid #555",borderRadius:"6px",fontSize:"1.5em"}}),HomePageSearchBar=({...props})=>{const classes=useStyles(props),[query,setQuery]=Object(react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),handleSearch=Object(_util__WEBPACK_IMPORTED_MODULE_3__.a)(),handleChange=Object(react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((value=>{setQuery(value)}),[setQuery]);return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SearchBar__WEBPACK_IMPORTED_MODULE_2__.SearchBarBase,{classes:{root:classes.root},value:query,onSubmit:()=>{handleSearch({query:query})},onChange:handleChange,...props,__self:void 0,__source:{fileName:"/home/runner/work/backstage/backstage/plugins/search/src/components/HomePageComponent/HomePageSearchBar.tsx",lineNumber:62}})};var reactHotLoader,leaveModule;reactHotLoader=__webpack_require__("../node_modules/react-hot-loader/index.js").default,leaveModule=__webpack_require__("../node_modules/react-hot-loader/index.js").leaveModule,reactHotLoader&&(reactHotLoader.register(useStyles,"useStyles","/home/runner/work/backstage/backstage/plugins/search/src/components/HomePageComponent/HomePageSearchBar.tsx"),reactHotLoader.register(HomePageSearchBar,"HomePageSearchBar","/home/runner/work/backstage/backstage/plugins/search/src/components/HomePageComponent/HomePageSearchBar.tsx"),leaveModule(module));try{HomePageSearchBar.displayName="HomePageSearchBar",HomePageSearchBar.__docgenInfo={description:"The search bar created specifically for the composable home page",displayName:"HomePageSearchBar",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<unknown>"}},debounceTime:{defaultValue:null,description:"",name:"debounceTime",required:!1,type:{name:"number"}},clearButton:{defaultValue:null,description:"",name:"clearButton",required:!1,type:{name:"boolean"}},onClear:{defaultValue:null,description:"",name:"onClear",required:!1,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../plugins/search/src/components/HomePageComponent/HomePageSearchBar.tsx#HomePageSearchBar"]={docgenInfo:HomePageSearchBar.__docgenInfo,name:"HomePageSearchBar",path:"../plugins/search/src/components/HomePageComponent/HomePageSearchBar.tsx#HomePageSearchBar"})}catch(__react_docgen_typescript_loader_error){}}).call(this,__webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module))},"../plugins/search/src/components/HomePageComponent/index.ts":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var enterModule,reactHotLoader,leaveModule,_HomePageSearchBar__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../plugins/search/src/components/HomePageComponent/HomePageSearchBar.tsx");__webpack_require__.d(__webpack_exports__,"HomePageSearchBar",(function(){return _HomePageSearchBar__WEBPACK_IMPORTED_MODULE_0__.a})),(enterModule=__webpack_require__("../node_modules/react-hot-loader/index.js").enterModule)&&enterModule(module),reactHotLoader=__webpack_require__("../node_modules/react-hot-loader/index.js").default,leaveModule=__webpack_require__("../node_modules/react-hot-loader/index.js").leaveModule,reactHotLoader&&leaveModule(module)}.call(this,__webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module))},"../plugins/search/src/components/util.ts":function(module,__webpack_exports__,__webpack_require__){"use strict";(function(module){__webpack_require__.d(__webpack_exports__,"a",(function(){return useNavigateToQuery}));var enterModule,qs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../node_modules/qs/lib/index.js"),qs__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_0__),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),react_router_dom__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../node_modules/react-router/index.js"),_plugin__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../plugins/search/src/plugin.ts"),_backstage_core_plugin_api__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../packages/core-plugin-api/src/index.ts");(enterModule=__webpack_require__("../node_modules/react-hot-loader/index.js").enterModule)&&enterModule(module);const useNavigateToQuery=()=>{const searchRoute=Object(_backstage_core_plugin_api__WEBPACK_IMPORTED_MODULE_4__.useRouteRef)(_plugin__WEBPACK_IMPORTED_MODULE_3__.b),navigate=Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.k)();return Object(react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((({query:query})=>{const queryString=qs__WEBPACK_IMPORTED_MODULE_0___default.a.stringify({query:query},{addQueryPrefix:!0});navigate(`${searchRoute()}${queryString}`)}),[navigate,searchRoute])};var reactHotLoader,leaveModule;reactHotLoader=__webpack_require__("../node_modules/react-hot-loader/index.js").default,leaveModule=__webpack_require__("../node_modules/react-hot-loader/index.js").leaveModule,reactHotLoader&&(reactHotLoader.register(useNavigateToQuery,"useNavigateToQuery","/home/runner/work/backstage/backstage/plugins/search/src/components/util.ts"),leaveModule(module))}).call(this,__webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module))}}]);