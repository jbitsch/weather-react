/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading wasm modules
/******/ 	var installedWasmModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/Users/jesperbo/Desktop/weatherWidget";
/******/
/******/ 	// object with all compiled WebAssembly.Modules
/******/ 	__webpack_require__.w = {};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/App.js":
/*!***********************!*\
  !*** ./client/App.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _routes = __webpack_require__(/*! ./routes */ \"./client/routes.js\");\n\nvar _routes2 = _interopRequireDefault(_routes);\n\nvar _NotFound = __webpack_require__(/*! ./containers/NotFound/NotFound */ \"./client/containers/NotFound/NotFound.js\");\n\nvar _NotFound2 = _interopRequireDefault(_NotFound);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar App = function (_Component) {\n  _inherits(App, _Component);\n\n  function App(props) {\n    _classCallCheck(this, App);\n\n    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));\n  }\n\n  _createClass(App, [{\n    key: 'render',\n    value: function render() {\n      var _this2 = this;\n\n      return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(\n          _reactRouterDom.Switch,\n          null,\n          _routes2.default.map(function (_ref) {\n            var path = _ref.path,\n                exact = _ref.exact,\n                C = _ref.component,\n                rest = _objectWithoutProperties(_ref, ['path', 'exact', 'component']);\n\n            return _react2.default.createElement(_reactRouterDom.Route, {\n              key: path,\n              path: path,\n              exact: exact,\n              render: function render(props) {\n                return _react2.default.createElement(C, _extends({}, props, rest, { serverError: _this2.props.serverError }));\n              }\n            });\n          }),\n          _react2.default.createElement(_reactRouterDom.Route, { render: function render(props) {\n              return _react2.default.createElement(_NotFound2.default, null);\n            } })\n        )\n      );\n    }\n  }]);\n\n  return App;\n}(_react.Component);\n\nexports.default = App;\n\n//# sourceURL=webpack:///./client/App.js?");

/***/ }),

/***/ "./client/components/Spinner/Spinner.js":
/*!**********************************************!*\
  !*** ./client/components/Spinner/Spinner.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar spinner = function spinner() {\n  return _react2.default.createElement(\n    'div',\n    null,\n    'Loading weather data'\n  );\n};\n\nexports.default = spinner;\n\n//# sourceURL=webpack:///./client/components/Spinner/Spinner.js?");

/***/ }),

/***/ "./client/components/WeatherInfo/WeatherInfo.js":
/*!******************************************************!*\
  !*** ./client/components/WeatherInfo/WeatherInfo.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactApollo = __webpack_require__(/*! react-apollo */ \"react-apollo\");\n\nvar _fetchCityWeather = __webpack_require__(/*! ../../queries/fetchCityWeather */ \"./client/queries/fetchCityWeather.js\");\n\nvar _fetchCityWeather2 = _interopRequireDefault(_fetchCityWeather);\n\nvar _Aux = __webpack_require__(/*! ../../hoc/Aux/Aux */ \"./client/hoc/Aux/Aux.js\");\n\nvar _Aux2 = _interopRequireDefault(_Aux);\n\nvar _Spinner = __webpack_require__(/*! ../../components/Spinner/Spinner */ \"./client/components/Spinner/Spinner.js\");\n\nvar _Spinner2 = _interopRequireDefault(_Spinner);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar WeatherInfo = function (_Component) {\n  _inherits(WeatherInfo, _Component);\n\n  function WeatherInfo(props) {\n    _classCallCheck(this, WeatherInfo);\n\n    var _this = _possibleConstructorReturn(this, (WeatherInfo.__proto__ || Object.getPrototypeOf(WeatherInfo)).call(this, props));\n\n    _this.state = { error: _this.props.serverError, weather: _this.props.data.city };\n    return _this;\n  }\n\n  _createClass(WeatherInfo, [{\n    key: 'componentWillReceiveProps',\n    value: function componentWillReceiveProps(nextProps) {\n      if (nextProps.city != this.props.city) {\n        this.graphQLQuery(nextProps.city);\n      }\n    }\n  }, {\n    key: 'graphQLQuery',\n    value: function graphQLQuery(city) {\n      var _this2 = this;\n\n      this.props.client.query({\n        query: _fetchCityWeather2.default,\n        variables: { name: city }\n      }).then(function (data) {\n        _this2.setState({\n          weather: _extends({}, data.data.city),\n          error: false\n        });\n      }, function (err) {\n        _this2.setState({ weather: undefined, error: true });\n      }).catch(function (err) {\n        _this2.setState({ weather: undefined, error: true });\n      });\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n\n      var weather = this.state.weather;\n\n      var weatherInfo = _react2.default.createElement(\n        _Aux2.default,\n        null,\n        _react2.default.createElement(\n          'div',\n          { className: 'panel-heading' },\n          'Loading'\n        ),\n        _react2.default.createElement(_Spinner2.default, null)\n      );\n\n      var weatherItems = undefined;\n\n      if (this.state.error || this.props.data.error || this.props.serverError == undefined && weather == undefined) {\n        weatherItems = _react2.default.createElement(\n          'li',\n          { className: 'list-group-item' },\n          _react2.default.createElement(\n            'b',\n            null,\n            'Error: '\n          ),\n          ' The specified city could not be found.'\n        );\n      } else if (weather) {\n        weatherItems = _react2.default.createElement(\n          _Aux2.default,\n          null,\n          _react2.default.createElement(\n            'li',\n            { className: 'list-group-item' },\n            'Temperature: ',\n            _react2.default.createElement(\n              'b',\n              null,\n              weather.temperature,\n              '\\xB0C'\n            )\n          ),\n          _react2.default.createElement(\n            'li',\n            { className: 'list-group-item' },\n            'Humidity: ',\n            _react2.default.createElement(\n              'b',\n              null,\n              weather.humidity\n            )\n          ),\n          _react2.default.createElement(\n            'li',\n            { className: 'list-group-item' },\n            'Wind: ',\n            _react2.default.createElement(\n              'b',\n              null,\n              weather.wind,\n              ' m/s \\xD8st'\n            )\n          )\n        );\n      } else {\n        return weatherInfo;\n      }\n\n      return _react2.default.createElement(\n        _Aux2.default,\n        null,\n        _react2.default.createElement(\n          'div',\n          { className: 'panel-heading' },\n          'Weather in ',\n          _react2.default.createElement(\n            'b',\n            null,\n            this.props.city\n          )\n        ),\n        _react2.default.createElement(\n          'ul',\n          { className: 'list-group' },\n          weatherItems,\n          _react2.default.createElement(\n            'li',\n            { className: 'list-group-item' },\n            _react2.default.createElement(\n              'form',\n              { className: 'form-inline', method: 'get', action: '/', onSubmit: this.props.onClickHandler },\n              _react2.default.createElement(\n                'div',\n                { className: 'form-group' },\n                _react2.default.createElement('input', { type: 'text',\n                  minLength: 2,\n                  onChange: this.props.onNameChangeHandler,\n                  className: 'form-control',\n                  id: 'city',\n                  placeholder: 'City',\n                  name: 'city' })\n              ),\n              _react2.default.createElement(\n                'button',\n                { type: 'submit', className: 'btn btn-default' },\n                'Search'\n              )\n            )\n          )\n        )\n      );\n    }\n  }]);\n\n  return WeatherInfo;\n}(_react.Component);\n\nexports.default = (0, _reactApollo.compose)(_reactApollo.withApollo, (0, _reactApollo.graphql)(_fetchCityWeather2.default, {\n  options: function options(props) {\n    return { variables: { name: props.city } };\n  }\n}))(WeatherInfo);\n\n//# sourceURL=webpack:///./client/components/WeatherInfo/WeatherInfo.js?");

/***/ }),

/***/ "./client/containers/NotFound/NotFound.js":
/*!************************************************!*\
  !*** ./client/containers/NotFound/NotFound.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar NotFound = function (_Component) {\n  _inherits(NotFound, _Component);\n\n  function NotFound() {\n    _classCallCheck(this, NotFound);\n\n    return _possibleConstructorReturn(this, (NotFound.__proto__ || Object.getPrototypeOf(NotFound)).apply(this, arguments));\n  }\n\n  _createClass(NotFound, [{\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(\n          'p',\n          null,\n          'Sorry, the page could not be found'\n        ),\n        _react2.default.createElement(\n          'b',\n          null,\n          '404 Not found'\n        ),\n        '/'\n      );\n    }\n  }]);\n\n  return NotFound;\n}(_react.Component);\n\nexports.default = NotFound;\n\n//# sourceURL=webpack:///./client/containers/NotFound/NotFound.js?");

/***/ }),

/***/ "./client/containers/WeatherWidget.js":
/*!********************************************!*\
  !*** ./client/containers/WeatherWidget.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _WeatherInfo = __webpack_require__(/*! ../components/WeatherInfo/WeatherInfo */ \"./client/components/WeatherInfo/WeatherInfo.js\");\n\nvar _WeatherInfo2 = _interopRequireDefault(_WeatherInfo);\n\nvar _index = __webpack_require__(/*! ../store/actions/index */ \"./client/store/actions/index.js\");\n\nvar actions = _interopRequireWildcard(_index);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar WeatherWidget = function (_Component) {\n  _inherits(WeatherWidget, _Component);\n\n  function WeatherWidget(props) {\n    _classCallCheck(this, WeatherWidget);\n\n    var _this = _possibleConstructorReturn(this, (WeatherWidget.__proto__ || Object.getPrototypeOf(WeatherWidget)).call(this, props));\n\n    _this.searchWeatherHandler = function (event) {\n      event.preventDefault();\n\n      var city = _this.state.query;\n\n      if (city.length >= 2) {\n        var path = \"?city=\" + city;\n        _this.setState({ query: city });\n        window.history.pushState({}, '', path);\n        _this.getWeather(city);\n      } else {\n        alert(\"The city name is to short. Should at least be 2 characters.s\");\n      }\n    };\n\n    _this.handleCityNameChange = function (event) {\n      _this.setState({ query: event.target.value });\n    };\n\n    _this.state = {\n      \"query\": \"\"\n    };\n    return _this;\n  }\n\n  _createClass(WeatherWidget, [{\n    key: 'getWeather',\n    value: function getWeather(city) {\n      //this.props.onFetchWeather(city); // Normal API call\n      this.props.onCityChanged(city);\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var widgetStyle = { margin: '10px', width: '300px' };\n\n      var weatherInfo = _react2.default.createElement(_WeatherInfo2.default, {\n        serverError: this.props.serverError,\n        city: this.props.city,\n        onClickHandler: this.searchWeatherHandler,\n        onNameChangeHandler: this.handleCityNameChange,\n        weather: this.props.weather,\n        loading: this.props.loading\n      });\n\n      return _react2.default.createElement(\n        'div',\n        { className: 'widget', style: widgetStyle },\n        _react2.default.createElement(\n          'div',\n          { className: 'panel panel-info' },\n          weatherInfo\n        )\n      );\n    }\n  }]);\n\n  return WeatherWidget;\n}(_react.Component);\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    loading: state.loading,\n    weather: state.weather,\n    city: state.city\n  };\n};\n\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n  return {\n    onFetchWeather: function onFetchWeather(city) {\n      return dispatch(actions.fetchWeather(city));\n    },\n    onCityChanged: function onCityChanged(city) {\n      return dispatch(actions.cityNameChanged(city));\n    }\n  };\n};\n\nexports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(WeatherWidget);\n\n//# sourceURL=webpack:///./client/containers/WeatherWidget.js?");

/***/ }),

/***/ "./client/hoc/Aux/Aux.js":
/*!*******************************!*\
  !*** ./client/hoc/Aux/Aux.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar aux = function aux(props) {\n  return props.children;\n};\n\nexports.default = aux;\n\n//# sourceURL=webpack:///./client/hoc/Aux/Aux.js?");

/***/ }),

/***/ "./client/queries/fetchCityWeather.js":
/*!********************************************!*\
  !*** ./client/queries/fetchCityWeather.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _templateObject = _taggedTemplateLiteral(['\\n  query CityQuery($name: String!) {\\n    city(name: $name) {\\n      name\\n      id\\n      humidity\\n      temperature\\n      wind\\n    }\\n  }\\n'], ['\\n  query CityQuery($name: String!) {\\n    city(name: $name) {\\n      name\\n      id\\n      humidity\\n      temperature\\n      wind\\n    }\\n  }\\n']);\n\nvar _graphqlTag = __webpack_require__(/*! graphql-tag */ \"graphql-tag\");\n\nvar _graphqlTag2 = _interopRequireDefault(_graphqlTag);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\nexports.default = (0, _graphqlTag2.default)(_templateObject);\n\n//# sourceURL=webpack:///./client/queries/fetchCityWeather.js?");

/***/ }),

/***/ "./client/routes.js":
/*!**************************!*\
  !*** ./client/routes.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _WeatherWidget = __webpack_require__(/*! ./containers/WeatherWidget */ \"./client/containers/WeatherWidget.js\");\n\nvar _WeatherWidget2 = _interopRequireDefault(_WeatherWidget);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar routes = [{\n  path: '/',\n  exact: true,\n  component: _WeatherWidget2.default\n}];\n\nexports.default = routes;\n\n//# sourceURL=webpack:///./client/routes.js?");

/***/ }),

/***/ "./client/store/actions/actionTypes.js":
/*!*********************************************!*\
  !*** ./client/store/actions/actionTypes.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar FETCH_WEATHER_START = exports.FETCH_WEATHER_START = 'FETCH_WEATHER_START';\nvar FETCH_WEATHER_SUCCESS = exports.FETCH_WEATHER_SUCCESS = 'FETCH_WEATHER_SUCCESS';\nvar FETCH_WEATHER_FAIL = exports.FETCH_WEATHER_FAIL = 'FETCH_WEATHER_FAIL';\nvar CITY_NAME_CHANGED = exports.CITY_NAME_CHANGED = 'CITY_NAME_CHANGED';\n\n//# sourceURL=webpack:///./client/store/actions/actionTypes.js?");

/***/ }),

/***/ "./client/store/actions/index.js":
/*!***************************************!*\
  !*** ./client/store/actions/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _weather = __webpack_require__(/*! ./weather */ \"./client/store/actions/weather.js\");\n\nObject.defineProperty(exports, 'fetchWeather', {\n  enumerable: true,\n  get: function get() {\n    return _weather.fetchWeather;\n  }\n});\nObject.defineProperty(exports, 'cityNameChanged', {\n  enumerable: true,\n  get: function get() {\n    return _weather.cityNameChanged;\n  }\n});\n\n//# sourceURL=webpack:///./client/store/actions/index.js?");

/***/ }),

/***/ "./client/store/actions/weather.js":
/*!*****************************************!*\
  !*** ./client/store/actions/weather.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.cityNameChanged = exports.fetchWeather = exports.fetchWeatherStart = exports.fetchWeatherFail = exports.fetchWeatherSuccess = undefined;\n\nvar _axios = __webpack_require__(/*! axios */ \"axios\");\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nvar _actionTypes = __webpack_require__(/*! ./actionTypes */ \"./client/store/actions/actionTypes.js\");\n\nvar actionTypes = _interopRequireWildcard(_actionTypes);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar fetchWeatherSuccess = exports.fetchWeatherSuccess = function fetchWeatherSuccess(weather) {\n  return {\n    type: actionTypes.FETCH_WEATHER_SUCCESS,\n    weather: weather\n  };\n};\n\nvar fetchWeatherFail = exports.fetchWeatherFail = function fetchWeatherFail(error) {\n  return {\n    type: actionTypes.FETCH_WEATHER_FAIL,\n    error: error\n  };\n};\n\nvar fetchWeatherStart = exports.fetchWeatherStart = function fetchWeatherStart() {\n  return {\n    type: actionTypes.FETCH_WEATHER_START\n  };\n};\n\nvar fetchWeather = exports.fetchWeather = function fetchWeather(city) {\n  return function (dispatch) {\n    dispatch(fetchWeatherStart());\n\n    _axios2.default.get(\"/api/weather/\" + city).then(function (response) {\n      return response.data;\n    }).then(function (data) {\n      dispatch(fetchWeatherSuccess(data));\n    }, function (err) {\n      dispatch(fetchWeatherFail(err));\n    }).catch(function (err) {\n      dispatch(fetchWeatherFail(err));\n    });\n  };\n};\n\nvar cityNameChanged = exports.cityNameChanged = function cityNameChanged(city) {\n  return function (dispatch) {\n    dispatch({\n      type: actionTypes.CITY_NAME_CHANGED,\n      city: city\n    });\n  };\n};\n\n//# sourceURL=webpack:///./client/store/actions/weather.js?");

/***/ }),

/***/ "./client/store/reducers/weather.js":
/*!******************************************!*\
  !*** ./client/store/reducers/weather.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _actionTypes = __webpack_require__(/*! ../actions/actionTypes */ \"./client/store/actions/actionTypes.js\");\n\nvar actionTypes = _interopRequireWildcard(_actionTypes);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nvar initialState = {\n  loading: false,\n  weather: undefined,\n  city: \"\"\n};\n\nvar fetchWeatherStart = function fetchWeatherStart(state, action) {\n  return _extends({}, state, { loading: false, weather: undefined });\n};\n\nvar fetchWeatherSuccess = function fetchWeatherSuccess(state, action) {\n  return _extends({}, state, { loading: false, weather: action.weather });\n};\n\nvar fetchWeatherFail = function fetchWeatherFail(state, action) {\n  return _extends({}, state, { loading: false, weather: undefined });\n};\n\nvar cityNameChanged = function cityNameChanged(state, action) {\n  return _extends({}, state, { loading: false, weather: undefined, city: action.city });\n};\n\nvar reducer = function reducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var action = arguments[1];\n\n  switch (action.type) {\n    case actionTypes.FETCH_WEATHER_START:\n      return fetchWeatherStart(state, action);\n    case actionTypes.FETCH_WEATHER_SUCCESS:\n      return fetchWeatherSuccess(state, action);\n    case actionTypes.FETCH_WEATHER_FAIL:\n      return fetchWeatherFail(state, action);\n    case actionTypes.CITY_NAME_CHANGED:\n      return cityNameChanged(state, action);\n    default:\n      return state;\n  }\n};\n\nexports.default = reducer;\n\n//# sourceURL=webpack:///./client/store/reducers/weather.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _path = __webpack_require__(/*! path */ \"path\");\n\nvar _path2 = _interopRequireDefault(_path);\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n__webpack_require__(/*! ./server/config/config */ \"./server/config/config.js\");\n\nvar expressGraphQL = __webpack_require__(/*! express-graphql */ \"express-graphql\");\nvar routes = __webpack_require__(/*! ./server/routes/routes */ \"./server/routes/routes.js\");\nvar app = (0, _express2.default)();\nvar schema = __webpack_require__(/*! ./server/schema/schema */ \"./server/schema/schema.js\");\n\nvar port = process.env.PORT;\n\n// use ejs templates\napp.set('view engine', 'ejs');\napp.set('views', _path2.default.join(__dirname, 'views'));\n\n//Serve static files\napp.use(_express2.default.static(_path2.default.join(__dirname + \"/../\", 'client', 'static')));\n\n// Use graphql\napp.use('/graphql', expressGraphQL({\n  schema: schema,\n  graphiql: true\n}));\n\n// set routes\napp.use(routes);\n\napp.listen(port, function () {\n  console.log('Started up at port ' + port);\n});\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./server/config/config.js":
/*!*********************************!*\
  !*** ./server/config/config.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar env = \"development\" || 'development';\n\nif (env === 'development' || env === 'test') {\n  var config = __webpack_require__(/*! ./config.json */ \"./server/config/config.json\");\n  var envConfig = config[env];\n\n  Object.keys(envConfig).forEach(function (key) {\n    process.env[key] = envConfig[key];\n  });\n}\n\n//# sourceURL=webpack:///./server/config/config.js?");

/***/ }),

/***/ "./server/config/config.json":
/*!***********************************!*\
  !*** ./server/config/config.json ***!
  \***********************************/
/*! exports provided: test, development, default */
/***/ (function(module) {

eval("module.exports = {\"test\":{\"PORT\":4000,\"WEATHER_API_KEY\":\"166d00e26d3ff2c6149e89feccc5c59a\"},\"development\":{\"PORT\":4000,\"WEATHER_API_KEY\":\"166d00e26d3ff2c6149e89feccc5c59a\"}};\n\n//# sourceURL=webpack:///./server/config/config.json?");

/***/ }),

/***/ "./server/helper/response.js":
/*!***********************************!*\
  !*** ./server/helper/response.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar res = {\n  sendResponse: function sendResponse(res, response, status) {\n    var responseString = JSON.stringify(response);\n    var responseStatus = status ? status : 200;\n    res.setHeader('Content-Type', 'application/json');\n    res.status(responseStatus);\n    res.end(responseString);\n  },\n  notFound: function notFound(res) {\n    this.sendResponse(res, {\n      message: \"invalid Request\"\n    }, 404);\n  },\n  notAuthenticated: function notAuthenticated(res) {\n    this.sendResponse(res, {\n      message: \"Not authorized\"\n    }, 401);\n  },\n  serverError: function serverError(res, message) {\n    this.sendResponse(res, {\n      message: message\n    }, 500);\n  },\n  validationError: function validationError(res, message) {\n    this.sendResponse(res, {\n      message: message\n    }, 400);\n  }\n};\n\nmodule.exports = res;\n\n//# sourceURL=webpack:///./server/helper/response.js?");

/***/ }),

/***/ "./server/models/city.js":
/*!*******************************!*\
  !*** ./server/models/city.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar axios = __webpack_require__(/*! axios */ \"axios\");\n\nexports.get = function (name) {\n  return new Promise(function (resolve, reject) {\n    var appId = process.env.WEATHER_API_KEY;\n    var city = encodeURIComponent(name);\n    var url = \"http://api.openweathermap.org/data/2.5/weather?q=\" + city + \",dk&appid=\" + appId + \"&units=metric\";\n    //const url = \"http://localhost:3000/cities/\"+name;\n    axios.get(url).then(function (res) {\n      return res.data;\n    }).then(function (data) {\n      var weather = {\n        \"name\": data.name,\n        \"temperature\": data.main.temp,\n        \"humidity\": data.main.humidity,\n        \"wind\": data.wind.speed,\n        \"id\": data.name\n      };\n      resolve(weather);\n    }).catch(function (err) {\n      reject(err);\n    });\n  });\n};\n\n//# sourceURL=webpack:///./server/models/city.js?");

/***/ }),

/***/ "./server/routes/render.js":
/*!*********************************!*\
  !*** ./server/routes/render.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _server = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _redux = __webpack_require__(/*! redux */ \"redux\");\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _apolloClient = __webpack_require__(/*! apollo-client */ \"apollo-client\");\n\nvar _apolloClient2 = _interopRequireDefault(_apolloClient);\n\nvar _apolloCacheInmemory = __webpack_require__(/*! apollo-cache-inmemory */ \"apollo-cache-inmemory\");\n\nvar _reactApollo = __webpack_require__(/*! react-apollo */ \"react-apollo\");\n\nvar _apolloLinkSchema = __webpack_require__(/*! apollo-link-schema */ \"apollo-link-schema\");\n\nvar _serializeJavascript = __webpack_require__(/*! serialize-javascript */ \"serialize-javascript\");\n\nvar _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);\n\nvar _App = __webpack_require__(/*! ../../client/App */ \"./client/App.js\");\n\nvar _App2 = _interopRequireDefault(_App);\n\nvar _routes = __webpack_require__(/*! ../../client/routes */ \"./client/routes.js\");\n\nvar _routes2 = _interopRequireDefault(_routes);\n\nvar _weather = __webpack_require__(/*! ../../client/store/reducers/weather */ \"./client/store/reducers/weather.js\");\n\nvar _weather2 = _interopRequireDefault(_weather);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar express = __webpack_require__(/*! express */ \"express\");\n//import fetch from 'node-fetch';\n\n//import { HttpLink, createHttpLink } from 'apollo-link-http';\n\nvar router = express.Router();\nvar City = __webpack_require__(/*! ../models/city */ \"./server/models/city.js\");\nvar schema = __webpack_require__(/*! ../../server/schema/schema */ \"./server/schema/schema.js\");\n\nrouter.get('/', function (req, res) {\n\n  var cityParam = req.query.city;\n\n  //{ \"activeRoute\": { \"path\": \"/\", \"exact\": true } } if route found or {} if not found\n  var activeRoute = _routes2.default.find(function (route) {\n    return (0, _reactRouterDom.matchPath)(req.url, route);\n  }) || {};\n\n  var promise = activeRoute.fetchInitialData ? activeRoute.fetchInitialData(req.path) : Promise.resolve();\n\n  promise.then(function (_) {\n\n    //const link = createHttpLink({uri: '/graphql', fetch: fetch});\n    var link = new _apolloLinkSchema.SchemaLink({ schema: schema }); //Use schema link instead since it is on the same server\n    var client = new _apolloClient2.default({\n      ssrMode: true,\n      link: link,\n      cache: new _apolloCacheInmemory.InMemoryCache()\n    });\n    var initialState = client.extract();\n\n    var city = \"Copenhagen\";\n\n    if (cityParam) {\n      city = cityParam;\n    }\n\n    var store = (0, _redux.createStore)(_weather2.default, {\n      loading: false,\n      weather: undefined,\n      city: city\n    });\n    var storeState = store.getState();\n\n    var markup = getMarkup(req, store, client, false);\n    (0, _reactApollo.getDataFromTree)(markup).then(function () {\n      var content = (0, _server.renderToString)(markup);\n      return res.status(200).render('index', { markup: content, data: (0, _serializeJavascript2.default)(storeState), apolloState: (0, _serializeJavascript2.default)(initialState) });\n    }).catch(function (err) {\n      var content = (0, _server.renderToString)(getMarkup(req, store, client, true));\n      return res.status(200).render('index', { markup: content, data: (0, _serializeJavascript2.default)(storeState), apolloState: (0, _serializeJavascript2.default)(initialState) });\n    });\n\n    // Load weather from the API endpoint\n    /*City.get(city)\n      .then(data => {\n        const store = createStore(weatherReducer, {\n          loading : false,\n          weather : data\n        });\n        const storeState = store.getState();\n       }).catch(err => {\n      const store = createStore(weatherReducer, { loading : false, weather : undefined });\n       const storeState = store.getState();\n       const markup = renderTemplate(req,store,client);\n      return res.status(200).render('index', { markup, data : serialize(storeState), apolloState : apolloState });\n    });\n    });*/\n  });\n});\n\nfunction getMarkup(req, store, client, error) {\n  var context = {};\n\n  var markup = _react2.default.createElement(\n    _reactApollo.ApolloProvider,\n    { client: client },\n    _react2.default.createElement(\n      _reactRedux.Provider,\n      { store: store },\n      _react2.default.createElement(\n        _reactRouterDom.StaticRouter,\n        { location: req.url, context: context },\n        _react2.default.createElement(_App2.default, { serverError: error })\n      )\n    )\n  );\n\n  return markup;\n}\n\nmodule.exports = router;\n\n//# sourceURL=webpack:///./server/routes/render.js?");

/***/ }),

/***/ "./server/routes/routes.js":
/*!*********************************!*\
  !*** ./server/routes/routes.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar express = __webpack_require__(/*! express */ \"express\");\nvar router = express.Router();\n\nrouter.use('/api/weather', __webpack_require__(/*! ./weather */ \"./server/routes/weather.js\"));\nrouter.use('*', __webpack_require__(/*! ./render */ \"./server/routes/render.js\"));\n\nmodule.exports = router;\n\n//# sourceURL=webpack:///./server/routes/routes.js?");

/***/ }),

/***/ "./server/routes/weather.js":
/*!**********************************!*\
  !*** ./server/routes/weather.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar express = __webpack_require__(/*! express */ \"express\");\nvar router = express.Router();\nvar responseHelper = __webpack_require__(/*! ../helper/response */ \"./server/helper/response.js\");\nvar City = __webpack_require__(/*! ../models/city */ \"./server/models/city.js\");\n\nrouter.get('/:name', function (req, res) {\n  var city = req.params.name;\n  getWeather(res, city);\n});\n\nrouter.get('/', function (req, res) {\n  var city = \"Copenhagen\";\n  getWeather(res, city);\n});\n\nfunction getWeather(res, city) {\n  City.get(city).then(function (data) {\n    responseHelper.sendResponse(res, data);\n  }, function (err) {\n    responseHelper.notFound(res);\n  }).catch(function (err) {\n    responseHelper.serverError(res, err.message);\n  });\n}\n\nmodule.exports = router;\n\n//# sourceURL=webpack:///./server/routes/weather.js?");

/***/ }),

/***/ "./server/schema/city_type.js":
/*!************************************!*\
  !*** ./server/schema/city_type.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar graphql = __webpack_require__(/*! graphql */ \"graphql\");\n\nvar GraphQLObjectType = graphql.GraphQLObjectType,\n    GraphQLString = graphql.GraphQLString,\n    GraphQLFloat = graphql.GraphQLFloat,\n    GraphQLInt = graphql.GraphQLInt;\n\n\nvar CityType = new GraphQLObjectType({\n  name: 'City',\n  fields: function fields() {\n    return {\n      id: { type: GraphQLString },\n      name: { type: GraphQLString },\n      temperature: { type: GraphQLFloat },\n      humidity: { type: GraphQLInt },\n      wind: { type: GraphQLFloat }\n    };\n  }\n});\n\nmodule.exports = CityType;\n\n//# sourceURL=webpack:///./server/schema/city_type.js?");

/***/ }),

/***/ "./server/schema/root_query_type.js":
/*!******************************************!*\
  !*** ./server/schema/root_query_type.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar graphql = __webpack_require__(/*! graphql */ \"graphql\");\nvar GraphQLObjectType = graphql.GraphQLObjectType,\n    GraphQLString = graphql.GraphQLString,\n    GraphQLNonNull = graphql.GraphQLNonNull;\n\nvar CityType = __webpack_require__(/*! ./city_type */ \"./server/schema/city_type.js\");\nvar City = __webpack_require__(/*! ../models/city */ \"./server/models/city.js\");\n\nvar RootQuery = new GraphQLObjectType({\n  name: 'RootQueryType',\n  fields: function fields() {\n    return {\n      city: {\n        type: CityType,\n        args: { name: { type: new GraphQLNonNull(GraphQLString) } },\n        resolve: function resolve(parentValue, _ref) {\n          var name = _ref.name;\n\n          return City.get(name);\n        }\n      }\n    };\n  }\n});\n\nmodule.exports = RootQuery;\n\n//# sourceURL=webpack:///./server/schema/root_query_type.js?");

/***/ }),

/***/ "./server/schema/schema.js":
/*!*********************************!*\
  !*** ./server/schema/schema.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar graphql = __webpack_require__(/*! graphql */ \"graphql\");\nvar GraphQLSchema = graphql.GraphQLSchema;\n\n\nvar RootQueryType = __webpack_require__(/*! ./root_query_type */ \"./server/schema/root_query_type.js\");\n\nmodule.exports = new GraphQLSchema({\n  query: RootQueryType\n});\n\n//# sourceURL=webpack:///./server/schema/schema.js?");

/***/ }),

/***/ "apollo-cache-inmemory":
/*!****************************************!*\
  !*** external "apollo-cache-inmemory" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"apollo-cache-inmemory\");\n\n//# sourceURL=webpack:///external_%22apollo-cache-inmemory%22?");

/***/ }),

/***/ "apollo-client":
/*!********************************!*\
  !*** external "apollo-client" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"apollo-client\");\n\n//# sourceURL=webpack:///external_%22apollo-client%22?");

/***/ }),

/***/ "apollo-link-schema":
/*!*************************************!*\
  !*** external "apollo-link-schema" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"apollo-link-schema\");\n\n//# sourceURL=webpack:///external_%22apollo-link-schema%22?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "express-graphql":
/*!**********************************!*\
  !*** external "express-graphql" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-graphql\");\n\n//# sourceURL=webpack:///external_%22express-graphql%22?");

/***/ }),

/***/ "graphql":
/*!**************************!*\
  !*** external "graphql" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"graphql\");\n\n//# sourceURL=webpack:///external_%22graphql%22?");

/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"graphql-tag\");\n\n//# sourceURL=webpack:///external_%22graphql-tag%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-apollo":
/*!*******************************!*\
  !*** external "react-apollo" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-apollo\");\n\n//# sourceURL=webpack:///external_%22react-apollo%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ }),

/***/ "serialize-javascript":
/*!***************************************!*\
  !*** external "serialize-javascript" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"serialize-javascript\");\n\n//# sourceURL=webpack:///external_%22serialize-javascript%22?");

/***/ })

/******/ });