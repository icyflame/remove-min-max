/* global it */
'use strict';
var assert = require('assert');
var removeMinMax = require('./');

it('returns undefined on non-array values', function () {
  var actual = removeMinMax('string');

  assert.equal(actual); // mocha complains about initializing expected to undefined
});

it('returns empty array when length of array is sufficient', function () {
  var actual = removeMinMax([1, 2]);
  var expected = [];

  assert.deepEqual(actual, expected);
});

it('accepts number (integer) values', function () {
  var actual = removeMinMax([1, 2, 3, 4, 5000, 5, 6]);
  var expected = [2, 3, 4, 5, 6];

  assert.deepEqual(actual, expected);
});

it('accepts number (float) values', function () {
  var actual = removeMinMax([0.001, 0.1, 1.0, 2.5, 2.95]);
  var expected = [0.1, 1.0, 2.5];

  assert.deepEqual(actual, expected);
});

it('accepts mixed number values (integer, float)', function () {
  var actual = removeMinMax([0.001, 0.1, 1.0, 200, 5000, 2.5, 2.95]);
  var expected = [0.1, 1.0, 2.5, 2.95, 200];

  assert.deepEqual(actual, expected);
});

it('keeps references intact', function () {
  var expected = [1, 2, 3, 4, 5000, 5, 6];
  var actual = removeMinMax(expected);

  assert.notDeepEqual(actual, expected);
});
