"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = createProduct;

var _colors = _interopRequireWildcard(require("./colors"));

var _capitalize = _interopRequireDefault(require("lodash/capitalize"));

var _loremIpsum = require("lorem-ipsum");

function createProduct(id) {
  var numColors = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 4;
  var color = (0, _colors.colorForId)(id);
  var variants = [color, 'red', 'blue'];
  var price = id % 10 * 10 + 0.99;
  return {
    id: id,
    url: "/p/".concat(id),
    name: "Product ".concat(id),
    price: price,
    priceText: "$".concat(price),
    rating: (10 - id % 10) / 2.0,
    thumbnail: {
      src: "https://dummyimage.com/400x400/".concat(_colors["default"][color].background, "/").concat(_colors["default"][color].foreground, "?text=").concat(encodeURIComponent('Product ' + id)),
      alt: "Product ".concat(id)
    },
    media: {
      full: variants.map(function (key, i) {
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
      thumbnails: variants.map(function (key, i) {
        return {
          src: "https://dummyimage.com/".concat(i === 2 ? 233 : 300, "x").concat(i === 1 ? 233 : 300, "/").concat(_colors["default"][key].background, "/").concat(_colors["default"][key].foreground, "?text=").concat(encodeURIComponent('Product ' + id)),
          alt: "Product ".concat(id)
        };
      })
    },
    sizes: [{
      id: 'sm',
      text: 'SM'
    }, {
      id: 'md',
      text: 'MD'
    }, {
      id: 'lg',
      text: 'LG'
    }, {
      id: 'xl',
      text: 'XL',
      disabled: true
    }, {
      id: 'xxl',
      text: 'XXL'
    }],
    description: (0, _loremIpsum.loremIpsum)({
      count: 10
    }),
    specs: (0, _loremIpsum.loremIpsum)({
      count: 10
    }),
    colors: Object.keys(_colors["default"]).slice(0, numColors).map(function (name, idx) {
      return {
        text: (0, _capitalize["default"])(name),
        id: name,
        disabled: idx === 2,
        image: {
          src: "https://dummyimage.com/48x48/".concat(_colors["default"][name].background, "?text=").concat(encodeURIComponent(' ')),
          alt: name
        },
        media: {
          full: [name, name, name].map(function (key, i) {
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
          thumbnails: [name, name, name].map(function (key, i) {
            return {
              src: "https://dummyimage.com/".concat(i === 2 ? 300 : 400, "x").concat(i === 1 ? 300 : 400, "/").concat(_colors["default"][key].background, "/").concat(_colors["default"][key].foreground, "?text=").concat(encodeURIComponent("Product ".concat(id))),
              alt: key
            };
          }),
          thumbnail: [name].map(function (key) {
            return {
              src: "https://dummyimage.com/400x400/".concat(_colors["default"][key].background, "/").concat(_colors["default"][key].foreground, "?text=").concat(encodeURIComponent('Product ' + id)),
              alt: "Product ".concat(id)
            };
          })[0]
        }
      };
    })
  };
}
//# sourceMappingURL=createProduct.js.map