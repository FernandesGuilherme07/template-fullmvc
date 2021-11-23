"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = createProducts;

var _createProduct = _interopRequireDefault(require("./createProduct"));

function createProducts(count) {
  var page = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var products = [];
  var start = page * count;

  for (var i = 0; i < count; i++) {
    products.push((0, _createProduct["default"])(start + i + 1));
  }

  return products;
}
//# sourceMappingURL=createProducts.js.map