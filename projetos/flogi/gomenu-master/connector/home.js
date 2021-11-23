"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = home;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _fulfillAPIRequest = _interopRequireDefault(require("react-storefront/props/fulfillAPIRequest"));

var _createAppData = _interopRequireDefault(require("./utils/createAppData"));

function home(_x, _x2) {
  return _home.apply(this, arguments);
}

function _home() {
  _home = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _fulfillAPIRequest["default"])(req, {
              appData: _createAppData["default"],
              pageData: function pageData() {
                return Promise.resolve({
                  title: 'React Storefront',
                  slots: {
                    heading: 'Welcome to your new React Storefront app.',
                    description: "\n                <p>\n                Here you'll find mock home, category, subcategory, product, and cart pages that you can\n                use as a starting point to build your PWA.\n              </p>\n              <p>Happy coding!</p>\n            "
                  }
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
  return _home.apply(this, arguments);
}
//# sourceMappingURL=home.js.map