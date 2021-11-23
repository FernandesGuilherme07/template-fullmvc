"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = searchSuggestions;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

/**
 * An example implementation of the API for the SearchPopup component using placeholder data.
 * @param {Object} params
 * @param {String} params.q The search text
 * @return {Object} An object whose shape matches AppModelBase
 */
function searchSuggestions(_x, _x2, _x3) {
  return _searchSuggestions.apply(this, arguments);
}

function _searchSuggestions() {
  _searchSuggestions = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(q, req, res) {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", {
              text: q,
              groups: [{
                caption: 'Suggested Searches',
                ui: 'list',
                links: ["Small ".concat(q), "Large ".concat(q), "".concat(q, " with red stripes")].map(function (text) {
                  return {
                    text: text,
                    as: "/search?q=".concat(encodeURIComponent(text)),
                    href: '/search'
                  };
                })
              }, {
                caption: 'Suggested Categories',
                ui: 'list',
                links: [{
                  text: 'Category 1',
                  href: '/s/[subcategoryId]',
                  as: '/s/1'
                }, {
                  text: 'Category 2',
                  href: '/s/[subcategoryId]',
                  as: '/s/2'
                }, {
                  text: 'Category 3',
                  href: '/s/[subcategoryId]',
                  as: '/s/3'
                }]
              }, {
                caption: 'Suggested Products',
                ui: 'thumbnails',
                links: [{
                  text: 'Product 1',
                  href: '/p/[productId]',
                  as: '/p/1?s=1&c=1',
                  thumbnail: {
                    src: 'https://dummyimage.com/120x120',
                    alt: 'Product 1'
                  }
                }, {
                  text: 'Product 2',
                  href: '/p/[productId]',
                  as: '/p/2?s=1&c=1',
                  thumbnail: {
                    src: 'https://dummyimage.com/120x120',
                    alt: 'Product 1'
                  }
                }, {
                  text: 'Product 3',
                  href: '/p/[productId]',
                  as: '/p/3?s=1&c=1',
                  thumbnail: {
                    src: 'https://dummyimage.com/120x120',
                    alt: 'Product 1'
                  }
                }, {
                  text: 'Product 4',
                  href: '/p/[productId]',
                  as: '/p/3?s=1&c=1',
                  thumbnail: {
                    src: 'https://dummyimage.com/120x120',
                    alt: 'Product 1'
                  }
                }, {
                  text: 'Product 5',
                  href: '/p/[productId]',
                  as: '/p/5?s=1&c=1',
                  thumbnail: {
                    src: 'https://dummyimage.com/120x120',
                    alt: 'Product 1'
                  }
                }]
              }]
            });

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _searchSuggestions.apply(this, arguments);
}
//# sourceMappingURL=searchSuggestions.js.map