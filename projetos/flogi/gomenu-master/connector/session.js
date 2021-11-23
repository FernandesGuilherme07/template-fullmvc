"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = session;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _cartStore = require("./utils/cartStore");

function session(_x, _x2) {
  return _session.apply(this, arguments);
}

function _session() {
  _session = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", {
              name: 'Mark',
              email: 'mark@domain.com',
              cart: {
                items: (0, _cartStore.getProducts)(req, res)
              },
              currency: 'USD'
            });

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _session.apply(this, arguments);
}
//# sourceMappingURL=session.js.map