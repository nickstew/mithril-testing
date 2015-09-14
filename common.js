/**
 * Require should
 */

should = require('should')

/**
 * Require Mithril
 */

m = require('mithril')

/**
 * Require Mithril Mocking file
 */

require('./mithril-mock')

/**
 * LocalStorage Fix for Node
 */
if (typeof localStorage === 'undefined' || localStorage === null) {
  localStorage = require('./localStorage-mock')
}
