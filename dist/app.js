webpackJsonp([0],{0:function(e,t,n){n(1),e.exports=n(159)},1:function(module,exports,__webpack_require__){eval("'use strict';\n\nvar _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(2);\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar SlugifyForm = (function (_React$Component) {\n  _inherits(SlugifyForm, _React$Component);\n\n  function SlugifyForm(props) {\n    _classCallCheck(this, SlugifyForm);\n\n    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(SlugifyForm).call(this, props));\n\n    _this.state = { text: '', slug: '' };\n\n    _this.submitHandler = _this.submitHandler.bind(_this);\n    _this.textChangeHandler = _this.textChangeHandler.bind(_this);\n    return _this;\n  }\n\n  _createClass(SlugifyForm, [{\n    key: 'textChangeHandler',\n    value: function textChangeHandler(e) {\n      this.setState({ text: e.target.value.trim(), slug: '' });\n    }\n  }, {\n    key: 'slugFocusHandler',\n    value: function slugFocusHandler(e) {\n      e.target.select();\n    }\n  }, {\n    key: 'submitHandler',\n    value: function submitHandler(e) {\n      e.preventDefault();\n      var httpRequest = new XMLHttpRequest();\n      httpRequest.onreadystatechange = (function () {\n        if (httpRequest.readyState === XMLHttpRequest.DONE && httpRequest.status === 200) {\n          var result = JSON.parse(httpRequest.responseText);\n          this.setState({ text: result.text, slug: result.slug });\n          this.refs.inputSlug.select();\n        }\n      }).bind(this);\n      httpRequest.open('POST', '/slugify', true);\n      httpRequest.setRequestHeader('Content-Type', 'application/json');\n      httpRequest.setRequestHeader('X-Requested-With', 'XMLHttpRequest');\n      var data = { text: this.state.text };\n      httpRequest.send(JSON.stringify(data));\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        'div',\n        { className: 'form' },\n        _react2.default.createElement(\n          'form',\n          { action: '/slugify', method: 'post', onSubmit: this.submitHandler },\n          _react2.default.createElement(\n            'div',\n            { className: 'form-group' },\n            _react2.default.createElement(\n              'label',\n              { htmlFor: 'input-text' },\n              'Text:'\n            ),\n            _react2.default.createElement('textarea', { name: 'input-text', ref: 'inputText', id: 'input-text',\n              onChange: this.textChangeHandler,\n              rows: '5', cols: '40', defaultValue: this.state.text })\n          ),\n          _react2.default.createElement(\n            'div',\n            { className: 'form-group' },\n            _react2.default.createElement(\n              'label',\n              { htmlFor: 'input-slug', className: 'hide' },\n              'Slug:'\n            ),\n            _react2.default.createElement('textarea', { name: 'input-slug', ref: 'inputSlug', id: 'input-slug',\n              onFocus: this.slugFocusHandler,\n              rows: '5', cols: '40', readOnly: true, value: this.state.slug })\n          ),\n          _react2.default.createElement(\n            'div',\n            { className: 'form-actions' },\n            _react2.default.createElement('input', { type: 'reset', value: 'Reset' }),\n            _react2.default.createElement('input', { type: 'submit', value: 'Slugify' })\n          )\n        )\n      );\n    }\n  }]);\n\n  return SlugifyForm;\n})(_react2.default.Component);\n\nexports.default = SlugifyForm;\n\nmodule.exports = SlugifyForm;//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvc3RhdGljL2pzL2NvbXBvbmVudC5qc3g/ODkyOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jbGFzcyBTbHVnaWZ5Rm9ybSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7dGV4dDogJycsIHNsdWc6ICcnfTtcblxuICAgIHRoaXMuc3VibWl0SGFuZGxlciA9IHRoaXMuc3VibWl0SGFuZGxlci5iaW5kKHRoaXMpO1xuICAgIHRoaXMudGV4dENoYW5nZUhhbmRsZXIgPSB0aGlzLnRleHRDaGFuZ2VIYW5kbGVyLmJpbmQodGhpcyk7XG4gIH07XG5cbiAgdGV4dENoYW5nZUhhbmRsZXIoZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoe3RleHQ6IGUudGFyZ2V0LnZhbHVlLnRyaW0oKSwgc2x1ZzogJyd9KTtcbiAgfTtcblxuICBzbHVnRm9jdXNIYW5kbGVyKGUpIHtcbiAgICBlLnRhcmdldC5zZWxlY3QoKTtcbiAgfTtcblxuICBzdWJtaXRIYW5kbGVyKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdmFyIGh0dHBSZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgaHR0cFJlcXVlc3Qub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoaHR0cFJlcXVlc3QucmVhZHlTdGF0ZSA9PT0gWE1MSHR0cFJlcXVlc3QuRE9ORSAmJlxuICAgICAgICAgIGh0dHBSZXF1ZXN0LnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gSlNPTi5wYXJzZShodHRwUmVxdWVzdC5yZXNwb25zZVRleHQpO1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dGV4dDogcmVzdWx0LnRleHQsIHNsdWc6IHJlc3VsdC5zbHVnfSk7XG4gICAgICAgICAgICB0aGlzLnJlZnMuaW5wdXRTbHVnLnNlbGVjdCgpO1xuICAgICAgfVxuICAgIH0uYmluZCh0aGlzKTtcbiAgICBodHRwUmVxdWVzdC5vcGVuKCdQT1NUJywgJy9zbHVnaWZ5JywgdHJ1ZSk7XG4gICAgaHR0cFJlcXVlc3Quc2V0UmVxdWVzdEhlYWRlcignQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcbiAgICBodHRwUmVxdWVzdC5zZXRSZXF1ZXN0SGVhZGVyKCdYLVJlcXVlc3RlZC1XaXRoJywgJ1hNTEh0dHBSZXF1ZXN0Jyk7XG4gICAgdmFyIGRhdGEgPSB7dGV4dDogdGhpcy5zdGF0ZS50ZXh0fTtcbiAgICBodHRwUmVxdWVzdC5zZW5kKEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybVwiPlxuICAgICAgICA8Zm9ybSBhY3Rpb249XCIvc2x1Z2lmeVwiIG1ldGhvZD1cInBvc3RcIiBvblN1Ym1pdD17dGhpcy5zdWJtaXRIYW5kbGVyfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiaW5wdXQtdGV4dFwiPlRleHQ6PC9sYWJlbD5cbiAgICAgICAgICAgIDx0ZXh0YXJlYSBuYW1lPVwiaW5wdXQtdGV4dFwiIHJlZj1cImlucHV0VGV4dFwiIGlkPVwiaW5wdXQtdGV4dFwiXG4gICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMudGV4dENoYW5nZUhhbmRsZXJ9XG4gICAgICAgICAgICAgcm93cz1cIjVcIiBjb2xzPVwiNDBcIiBkZWZhdWx0VmFsdWU9e3RoaXMuc3RhdGUudGV4dH0+PC90ZXh0YXJlYT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiaW5wdXQtc2x1Z1wiIGNsYXNzTmFtZT1cImhpZGVcIj5TbHVnOjwvbGFiZWw+XG4gICAgICAgICAgICA8dGV4dGFyZWEgbmFtZT1cImlucHV0LXNsdWdcIiByZWY9XCJpbnB1dFNsdWdcIiBpZD1cImlucHV0LXNsdWdcIlxuICAgICAgICAgICAgIG9uRm9jdXM9e3RoaXMuc2x1Z0ZvY3VzSGFuZGxlcn1cbiAgICAgICAgICAgICByb3dzPVwiNVwiIGNvbHM9XCI0MFwiIHJlYWRPbmx5IHZhbHVlPXt0aGlzLnN0YXRlLnNsdWd9PjwvdGV4dGFyZWE+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWFjdGlvbnNcIj5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmVzZXRcIiB2YWx1ZT1cIlJlc2V0XCIgLz5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJTbHVnaWZ5XCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNsdWdpZnlGb3JtO1xubW9kdWxlLmV4cG9ydHMgPSBTbHVnaWZ5Rm9ybTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9zdGF0aWMvanMvY29tcG9uZW50LmpzeFxuICoqLyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQURBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQVJBOztBQVNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTs7QUFDQTtBQUNBOztBQUFBO0FBQ0E7O0FBQUE7QUFDQTs7QUFBQTs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQUE7QUFDQTs7QUFBQTs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQTFEQTtBQUFBO0FBQ0E7QUE0REE7QUFDQTtBQUFBIiwic291cmNlUm9vdCI6IiJ9")},159:function(module,exports,__webpack_require__){eval("'use strict';\n\nvar _react = __webpack_require__(2);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactDom = __webpack_require__(160);\n\nvar _reactDom2 = _interopRequireDefault(_reactDom);\n\nvar _component = __webpack_require__(1);\n\nvar _component2 = _interopRequireDefault(_component);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n__webpack_require__(161);\n\nwindow.React = _react2.default;\nwindow.ReactDOM = _reactDom2.default;\n\nmain();\n\nfunction main() {\n    _reactDom2.default.render(_react2.default.createElement(_component2.default, null), document.getElementById('app'));\n}//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTU5LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9zdGF0aWMvanMvbWFpbi5qc3g/ZDJiYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgU2x1Z2lmeUZvcm0gZnJvbSAnLi9jb21wb25lbnQnO1xuXG5yZXF1aXJlKCcuLi9jc3MvbWFpbi5zY3NzJyk7XG5cbndpbmRvdy5SZWFjdCA9IFJlYWN0XG53aW5kb3cuUmVhY3RET00gPSBSZWFjdERPTVxuXG5tYWluKCk7XG5cbmZ1bmN0aW9uIG1haW4oKSB7XG4gICAgUmVhY3RET00ucmVuZGVyKDxTbHVnaWZ5Rm9ybSAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKTtcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9zdGF0aWMvanMvbWFpbi5qc3hcbiAqKi8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9")},161:function(module,exports){eval("// removed by extract-text-webpack-plugin//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTYxLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9jc3MvbWFpbi5zY3NzP2E3NDUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3N0YXRpYy9jc3MvbWFpbi5zY3NzXG4gKiogbW9kdWxlIGlkID0gMTYxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9")}});