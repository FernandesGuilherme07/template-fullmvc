"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = cart;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _fulfillAPIRequest = _interopRequireDefault(require("react-storefront/props/fulfillAPIRequest"));

var _createAppData = _interopRequireDefault(require("./utils/createAppData"));

var _cartStore = require("./utils/cartStore");

function cart(_x, _x2) {
  return _cart.apply(this, arguments);
}

function _cart() {
  _cart = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", (0, _fulfillAPIRequest["default"])(req, {
              appData: _createAppData["default"],
              pageData: function pageData() {
                return Promise.resolve({
                  title: 'My Cart',
                  breadcrumbs: [{
                    text: 'Home',
                    href: '/'
                  }],
                  cart: {
                    items: (0, _cartStore.getProducts)(req, res)
                  }
                });
              }
            }));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _cart.apply(this, arguments);
}
//# sourceMappingURL=cart.js.map