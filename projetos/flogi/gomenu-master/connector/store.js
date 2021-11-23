'use strict'

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault')

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports['default'] = store

var _regenerator = _interopRequireDefault(require('@babel/runtime/regenerator'))

var _asyncToGenerator2 = _interopRequireDefault(require('@babel/runtime/helpers/asyncToGenerator'))

var _fulfillAPIRequest = _interopRequireDefault(require('react-storefront/props/fulfillAPIRequest'))

// var _createStore = _interopRequireDefault(require('./utils/createStore'))

var _createAppData = _interopRequireDefault(require('./utils/createAppData'))

var _getBase64ForImage = _interopRequireDefault(require('react-storefront/utils/getBase64ForImage'))

function asciiSum() {
  var string = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ''
  return string.split('').reduce(function(s, e) {
    return s + e.charCodeAt()
  }, 0)
}

function store(_x, _x2, _x3) {
  return _store.apply(this, arguments)
}

function _store() {
  _store = (0, _asyncToGenerator2['default'])(
    /*#__PURE__*/ _regenerator['default'].mark(function _callee(req, res, products) {
      console.log(products, 'products')
      return _regenerator['default'].wrap(function _callee$(_context) {
        while (1) {
          switch ((_context.prev = _context.next)) {
            case 0:
              return _context.abrupt(
                'return',
                (0, _fulfillAPIRequest['default'])(req, {
                  appData: _createAppData['default'],
                  pageData: function pageData() {
                    return Promise.resolve({
                      data: products,
                    })
                  },
                })
              )

            case 1:
            case 'end':
              return _context.stop()
          }
        }
      }, _callee)
    })
  )
  return _store.apply(this, arguments)
}

//# sourceMappingURL=store.js.map
