// /******/ (() => { // webpackBootstrap
// /******/ 	var __webpack_modules__ = ([
// /* 0 */
// /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// "use strict";
// __webpack_require__.r(__webpack_exports__);
// /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
// /* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
// /* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
// /* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
// /* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_3__);

// react_dom__WEBPACK_IMPORTED_MODULE_1__.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_App__WEBPACK_IMPORTED_MODULE_2__.default, null), document.getElementById('root'));

// /***/ }),
// /* 1 */
// /***/ ((module) => {

// module.exports = React;

// /***/ }),
// /* 2 */
// /***/ ((module) => {

// module.exports = ReactDOM;

// /***/ }),
// /* 3 */
// /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// "use strict";
// __webpack_require__.r(__webpack_exports__);
// /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
// /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
// /* harmony import */ var _Chatbot__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);

// function App() {
//   return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "container" }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Customer Service Chatbot"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Chatbot__WEBPACK_IMPORTED_MODULE_1__.default, null));
// }

// /* harmony default export */ __webpack_exports__["default"] = (App);

// /***/ }),
// /* 4 */
// /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// "use strict";
// __webpack_require__.r(__webpack_exports__);
// /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
// /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

// function Chatbot()
// {
//   const [messages, setMessages] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);

//   const handleMessageSubmit = (message) => {
//     setMessages(messages => [...messages, { text: message, sender: 'user' }]);
//     fetch('/api/answer', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({ message })
//     })
//     .then(response => response.json())
//     .then(data => {
//       setMessages(messages => [...messages, { text: data.answer, sender: 'bot' }]);
//     });
//   };
//   return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, messages.map((message, index) => {
//     return /*#__PURE__*/react__WEBPACK
// }
