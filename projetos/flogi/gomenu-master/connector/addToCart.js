"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = addToCart;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _cartStore = require("./utils/cartStore");

function addToCart(_x, _x2, _x3) {
  return _addToCart.apply(this, arguments);
}

function _addToCart() {
  _addToCart = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_ref, req, res) {
    var color, size, product, quantity;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            color = _ref.color, size = _ref.size, product = _ref.product, quantity = _ref.quantity;
            return _context.abrupt("return", {
              cart: {
                items: (0, _cartStore.addItem)(product.id, quantity, req, res)
              }
            });

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _addToCart.apply(this, arguments);
}
//# sourceMappingURL=addToCart.js.map