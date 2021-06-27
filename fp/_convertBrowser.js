var baseConvert = require('./_baseConvert');

/**
 * Converts `stvTools` to an immutable auto-curried iteratee-first data-last
 * version with conversion `options` applied.
 *
 * @param {Function} stvTools The stvTools function to convert.
 * @param {Object} [options] The options object. See `baseConvert` for more details.
 * @returns {Function} Returns the converted `stvTools`.
 */
function browserConvert(stvTools, options) {
  return baseConvert(stvTools, stvTools, options);
}

if (typeof _ == 'function' && typeof _.runInContext == 'function') {
  _ = browserConvert(_.runInContext());
}
module.exports = browserConvert;
