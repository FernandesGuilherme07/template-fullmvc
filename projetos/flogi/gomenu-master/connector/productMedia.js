"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = productMedia;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _createMedia = _interopRequireDefault(require("./utils/createMedia"));

function productMedia(_x, _x2, _x3) {
  return _productMedia.apply(this, arguments);
}

function _productMedia() {
  _productMedia = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_ref, req, res) {
    var id, color;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            id = _ref.id, color = _ref.color;
            return _context.abrupt("return", {
              media: (0, _createMedia["default"])(id, color)
            });

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _productMedia.apply(this, arguments);
}
//# sourceMappingURL=productMedia.js.map