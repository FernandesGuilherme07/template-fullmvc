"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = updateCartItem;

var _cartStore = require("./utils/cartStore");

function updateCartItem(item, quantity, req, res) {
  return {
    cart: {
      items: (0, _cartStore.updateItem)(item.id, quantity, req, res)
    }
  };
}
//# sourceMappingURL=updateCartItem.js.map