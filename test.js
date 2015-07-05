/* global it */
'use strict';
var assert = require('assert');
var removeMinMax = require('./');

it('should work on arrays', function () {
  assert.deepEqual(removeMinMax([1, 2, 3, 5, 6, 9, 4, 7, 8]), [2, 3, 4, 5, 6, 7, 8]);
  assert.deepEqual(removeMinMax([1, 2]), []);
  assert.deepEqual(removeMinMax([0.001, 0.1, 1.0, 200, 5000, 2.5, 2.95]), [0.1, 1.0, 2.5, 2.95, 200]);
});
