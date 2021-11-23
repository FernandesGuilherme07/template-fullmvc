"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = product;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _fulfillAPIRequest = _interopRequireDefault(require("react-storefront/props/fulfillAPIRequest"));

var _createProduct = _interopRequireDefault(require("./utils/createProduct"));

var _createAppData = _interopRequireDefault(require("./utils/createAppData"));

var _getBase64ForImage = _interopRequireDefault(require("react-storefront/utils/getBase64ForImage"));

function asciiSum() {
  var string = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return string.split('').reduce(function (s, e) {
    return s + e.charCodeAt();
  }, 0);
}

function product(_x, _x2, _x3) {
  return _product.apply(this, arguments);
}

function _product() {
  _product = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(params, req, res) {
    var id, color, size, result, data, mockPrice;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            id = params.id, color = params.color, size = params.size;
            _context.next = 3;
            return (0, _fulfillAPIRequest["default"])(req, {
              appData: _createAppData["default"],
              pageData: function pageData() {
                return getPageData(id);
              }
            });

          case 3:
            result = _context.sent;

            if (!(color || size)) {
              _context.next = 13;
              break;
            }

            _context.next = 7;
            return getPageData(id);

          case 7:
            data = _context.sent;
            data.carousel = {
              index: 0
            }; // A price for the fetched product variant would be included in
            // the response, but for demo purposes only, we are setting the
            // price based on the color name.

            mockPrice = (asciiSum(color) + asciiSum(size)) / 100;
            data.product.price = mockPrice;
            data.product.priceText = "$".concat(mockPrice.toFixed(2));
            return _context.abrupt("return", data);

          case 13:
            return _context.abrupt("return", result);

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _product.apply(this, arguments);
}

function getPageData(_x4) {
  return _getPageData.apply(this, arguments);
}

function _getPageData() {
  _getPageData = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(id) {
    var result, mainProductImage;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            result = {
              title: "Product ".concat(id),
              product: (0, _createProduct["default"])(id),
              breadcrumbs: [{
                text: "Home",
                href: '/'
              }, {
                text: "Subcategory ".concat(id),
                as: "/s/".concat(id),
                href: '/s/[subcategoryId]'
              }]
            };
            mainProductImage = result.product.media.full[0];
            _context2.next = 4;
            return (0, _getBase64ForImage["default"])(mainProductImage.src);

          case 4:
            mainProductImage.src = _context2.sent;
            return _context2.abrupt("return", result);

          case 6:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _getPageData.apply(this, arguments);
}
//# sourceMappingURL=product.js.map