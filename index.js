'use strict';
module.exports = function (inputArr) {
  var mathSort = require('math-sort');
  if (Array.isArray(inputArr)) {
    var newArr = mathSort(inputArr);
    newArr.pop();
    newArr.reverse();
    newArr.pop();
    return mathSort(newArr);
  } else {
    return undefined;
  }
};
