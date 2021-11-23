"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = productSuggestions;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _createProduct = _interopRequireDefault(require("./utils/createProduct"));

/**
 * An example endpoint that returns mock product suggestions for a PDP.
 * @param {*} req
 * @param {*} res
 */
function productSuggestions(_x, _x2) {
  return _productSuggestions.apply(this, arguments);
}

function _productSuggestions() {
  _productSuggestions = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var products, i;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            products = [];

            for (i = 1; i <= 10; i++) {
              products.push((0, _createProduct["default"])(i));
            }

            return _context.abrupt("return", products);

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _productSuggestions.apply(this, arguments);
}
//# sourceMappingURL=productSuggestions.js.map