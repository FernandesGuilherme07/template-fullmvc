"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = removeCartItem;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _cartStore = require("./utils/cartStore");

function removeCartItem(_x, _x2, _x3) {
  return _removeCartItem.apply(this, arguments);
}

function _removeCartItem() {
  _removeCartItem = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(item, req, res) {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", {
              cart: {
                items: (0, _cartStore.removeItem)(item.id, req, res)
              }
            });

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _removeCartItem.apply(this, arguments);
}
//# sourceMappingURL=removeCartItem.js.map