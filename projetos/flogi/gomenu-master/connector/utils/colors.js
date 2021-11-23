"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.colorForId = colorForId;
exports.indexForColor = indexForColor;
exports["default"] = void 0;

var _colors = require("@material-ui/core/colors");

var color = function color(c) {
  return c.toString().replace(/\#/, '');
};

var colors = {
  red: {
    background: color(_colors.red[500]),
    foreground: 'ffffff'
  },
  green: {
    background: color(_colors.green[500]),
    foreground: 'ffffff'
  },
  blue: {
    background: color(_colors.blue[500]),
    foreground: 'ffffff'
  },
  grey: {
    background: color(_colors.grey[300]),
    foreground: color(_colors.grey[600])
  },
  teal: {
    background: color(_colors.teal[500]),
    foreground: 'ffffff'
  },
  orange: {
    background: color(_colors.orange[500]),
    foreground: 'ffffff'
  },
  purple: {
    background: color(_colors.purple[500]),
    foreground: 'ffffff'
  },
  black: {
    background: color(_colors.grey[800]),
    foreground: 'ffffff'
  }
};
var _default = colors;
exports["default"] = _default;

function colorForId(id) {
  var keys = Object.keys(colors);
  var index = id % keys.length;
  return keys[index];
}

function indexForColor(color) {
  return Object.keys(colors).indexOf(color);
}
//# sourceMappingURL=colors.js.map