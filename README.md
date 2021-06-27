# stv-tools v1.0.0

The stv-tools library exported as [Node.js](https://nodejs.org/) modules.

## Installation

Using npm:
```shell
$ npm i -g npm
$ npm i --save stv-tools
```

In Node.js:
```js
// Load the full build.
var _ = require('stvTools');
// Load the core build.
var _ = require('stvTools/core');
// Load the FP build for immutable auto-curried iteratee-first data-last methods.
var fp = require('stvTools/fp');

// Load method categories.
var array = require('stvTools/array');
var object = require('stvTools/fp/object');

// Cherry-pick methods for smaller browserify/rollup/webpack bundles.
var at = require('stvTools/at');
var curryN = require('stvTools/fp/curryN');
```

See the [package source](https://github.com/stevecchow/stv-tools) for more details.

## Support

Tested in Chrome 74-75, Firefox 66-67, IE 11, Edge 18, Safari 11-12, & Node.js 8-12.<br>
