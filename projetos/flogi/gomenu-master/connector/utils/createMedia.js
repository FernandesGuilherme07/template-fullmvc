"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = createMedia;

var _colors = _interopRequireDefault(require("./colors"));

function createMedia(id, color) {
  return {
    full: [color].map(function (key, i) {
      return {
        src: "https://dummyimage.com/".concat(i === 2 ? 400 : 600, "x").concat(i === 1 ? 400 : 600, "/").concat(_colors["default"][key].background, "/").concat(_colors["default"][key].foreground, "?text=").concat(encodeURIComponent('Product ' + id)),
        alt: "Product ".concat(id),
        magnify: {
          height: i === 1 ? 800 : 1200,
          width: i === 2 ? 800 : 1200,
          src: "https://dummyimage.com/".concat(i === 2 ? 800 : 1200, "x").concat(i === 1 ? 800 : 1200, "/").concat(_colors["default"][key].background, "/").concat(_colors["default"][key].foreground, "?text=").concat(encodeURIComponent('Product ' + id))
        }
      };
    }),
    thumbnails: [color].map(function (key, i) {
      return {
        src: "https://dummyimage.com/".concat(i === 2 ? 300 : 400, "x").concat(i === 1 ? 300 : 400, "/").concat(_colors["default"][key].background, "?text=").concat(encodeURIComponent("Product ".concat(id))),
        alt: key
      };
    })
  };
}
//# sourceMappingURL=createMedia.js.map