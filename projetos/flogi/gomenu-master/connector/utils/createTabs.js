"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = createTabs;

function createTabs() {
  var tabs = [];
  var subcategories = [];

  for (var i = 1; i <= 3; i++) {
    subcategories.push({
      as: "/s/".concat(i),
      href: '/s/[...categorySlug]',
      text: "Subcategory ".concat(i)
    });
  }

  for (var _i = 1; _i <= 10; _i++) {
    tabs.push({
      as: "/s/".concat(_i),
      href: '/s/[...categorySlug]',
      text: "Category ".concat(_i),
      items: subcategories
    });
  }

  return tabs;
}
//# sourceMappingURL=createTabs.js.map