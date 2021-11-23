"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = createFacets;

var _colors = _interopRequireDefault(require("./colors"));

var _capitalize = _interopRequireDefault(require("lodash/capitalize"));

function createFacets() {
  return [{
    name: 'Color',
    ui: 'buttons',
    options: Object.keys(_colors["default"]).map(function (name) {
      return {
        name: (0, _capitalize["default"])(name),
        code: "color:".concat(name),
        image: {
          src: "https://dummyimage.com/48x48/".concat(_colors["default"][name].background, "?text=").concat(encodeURIComponent(' ')),
          alt: name
        }
      };
    })
  }, {
    name: 'Size',
    ui: 'buttons',
    options: [{
      name: 'SM',
      code: 'size:sm'
    }, {
      name: 'MD',
      code: 'size:md'
    }, {
      name: 'LG',
      code: 'size:lg'
    }, {
      name: 'XL',
      code: 'size:xl'
    }, {
      name: 'XXL',
      code: 'size:xxl'
    }]
  }, {
    name: 'Type',
    ui: 'checkboxes',
    options: [{
      name: 'New',
      code: 'type:new',
      matches: 100
    }, {
      name: 'Used',
      code: 'type:used',
      matches: 20
    }]
  }];
}
//# sourceMappingURL=createFacets.js.map