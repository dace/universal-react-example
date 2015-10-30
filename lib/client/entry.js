"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactRouter = require("react-router");

var _historyLibCreateBrowserHistory = require('history/lib/createBrowserHistory');

var _historyLibCreateBrowserHistory2 = _interopRequireDefault(_historyLibCreateBrowserHistory);

var _sharedRoutesRoutes = require("../shared/routes/routes");

var _sharedRoutesRoutes2 = _interopRequireDefault(_sharedRoutesRoutes);

var history = (0, _historyLibCreateBrowserHistory2["default"])();

(0, _reactDom.render)(_react2["default"].createElement(_reactRouter.Router, {
  history: history,
  routes: _sharedRoutesRoutes2["default"] }), document.getElementById('app'));

// Router.run(routes, Router.HistoryLocation, (Handler, state) => {
//   React.render(<Handler />, document.getElementById('app'));
// });