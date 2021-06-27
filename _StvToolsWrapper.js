var baseCreate = require('./_baseCreate'),
    baseStvTools = require('./_baseStvTools');

/**
 * The base constructor for creating `stvTools` wrapper objects.
 *
 * @private
 * @param {*} value The value to wrap.
 * @param {boolean} [chainAll] Enable explicit method chain sequences.
 */
function StvToolsWrapper(value, chainAll) {
  this.__wrapped__ = value;
  this.__actions__ = [];
  this.__chain__ = !!chainAll;
  this.__index__ = 0;
  this.__values__ = undefined;
}

StvToolsWrapper.prototype = baseCreate(baseStvTools.prototype);
StvToolsWrapper.prototype.constructor = StvToolsWrapper;

module.exports = StvToolsWrapper;
