"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = account;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _fulfillAPIRequest = _interopRequireDefault(require("react-storefront/props/fulfillAPIRequest"));

var _createAppData = _interopRequireDefault(require("./utils/createAppData"));

function account(_x, _x2) {
  return _account.apply(this, arguments);
}

function _account() {
  _account = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _fulfillAPIRequest["default"])(req, {
              appData: _createAppData["default"],
              pageData: function pageData() {
                return Promise.resolve({
                  title: 'My Account',
                  account: {},
                  breadcrumbs: [{
                    text: 'Home',
                    href: '/'
                  }]
                });
              }
            });

          case 2:
            return _context.abrupt("return", _context.sent);

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _account.apply(this, arguments);
}
//# sourceMappingURL=account.js.map