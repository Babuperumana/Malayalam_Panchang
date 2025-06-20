
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./mlpg-panchang.cjs.production.min.js')
} else {
  module.exports = require('./mlpg-panchang.cjs.development.js')
}
