"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = subcategory;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _createFacets = _interopRequireDefault(require("./utils/createFacets"));

var _createSortOptions = _interopRequireDefault(require("./utils/createSortOptions"));

var _createProduct = _interopRequireDefault(require("./utils/createProduct"));

var _colors = _interopRequireWildcard(require("./utils/colors"));

var _fulfillAPIRequest = _interopRequireDefault(require("react-storefront/props/fulfillAPIRequest"));

var _createAppData = _interopRequireDefault(require("./utils/createAppData"));

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function subcategory(_x, _x2, _x3) {
  return _subcategory.apply(this, arguments);
}

function _subcategory() {
  _subcategory = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(params, req, res) {
    var q, _params$slug, slug, _params$page, page, filters, sort, _params$more, more;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            q = params.q, _params$slug = params.slug, slug = _params$slug === void 0 ? '1' : _params$slug, _params$page = params.page, page = _params$page === void 0 ? 0 : _params$page, filters = params.filters, sort = params.sort, _params$more = params.more, more = _params$more === void 0 ? false : _params$more;

            if (filters) {
              filters = JSON.parse(filters);
            } else {
              filters = [];
            }

            _context.next = 4;
            return (0, _fulfillAPIRequest["default"])(req, {
              appData: _createAppData["default"],
              pageData: function pageData() {
                return Promise.resolve({
                  id: slug,
                  name: q != null ? "Results for \"".concat(q, "\"") : "Subcategory ".concat(slug),
                  title: q != null ? "Results for \"".concat(q, "\"") : "Subcategory ".concat(slug),
                  total: 100,
                  page: parseInt(page),
                  totalPages: 5,
                  filters: filters,
                  sort: sort,
                  sortOptions: (0, _createSortOptions["default"])(),
                  facets: (0, _createFacets["default"])(),
                  products: filterProducts(page, filters, more),
                  breadcrumbs: [{
                    text: "Home",
                    href: '/'
                  }]
                });
              }
            });

          case 4:
            return _context.abrupt("return", _context.sent);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _subcategory.apply(this, arguments);
}

function filterProducts(page, filters, more) {
  var products = [];
  var filteredColors = filters ? filters.filter(function (f) {
    return f.startsWith('color');
  }).map(function (f) {
    return f.replace(/^color:/, '');
  }) : [];
  var count = more ? 20 : 10;

  while (products.length < count) {
    if (filteredColors && filteredColors.length) {
      var _iterator = _createForOfIteratorHelper(filteredColors),
          _step;

      try {
        var _loop = function _loop() {
          var color = _step.value;
          var index = (0, _colors.indexForColor)(color);

          var colorGap = function colorGap(i) {
            return Math.floor(page * count / filteredColors.length) + i;
          };

          products.push.apply(products, (0, _toConsumableArray2["default"])(Array.from({
            length: count
          }, function (v, i) {
            return colorGap(i);
          }).map(function (i) {
            return (0, _createProduct["default"])('' + (i * Object.keys(_colors["default"]).length + index));
          })));
        };

        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          _loop();
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    } else {
      var id = page * 10 + products.length + 1;
      products.push((0, _createProduct["default"])(id + ''));
    }
  }

  return products.sort(function (a, b) {
    return a.id - b.id;
  }).slice(0, count);
}
//# sourceMappingURL=subcategory.js.map