// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes: [sm/non262-shell.js, sm/non262.js]
flags:
- noStrict
features:
- record-tuple
description: |
  pending
esid: pending
---*/
var thisVals = [];
var nextResult = {
  done: false,
  value: {}
};
var nextNextResult = {
  done: false,
  value: {}
};
var firstReturnVal = 1;
var secondReturnVal = 2;
var mapFn = function(value, idx) {
  var returnVal = nextReturnVal;
  nextReturnVal = nextNextReturnVal;
  nextNextReturnVal = null;
  return returnVal;
};
var nextReturnVal = firstReturnVal;
var nextNextReturnVal = secondReturnVal;
var items = {};
var result;

items[Symbol.iterator] = function() {
  return {
    next: function() {
      var result = nextResult;
      nextResult = nextNextResult;
      nextNextResult = {
        done: true
      };

      return result;
    }
  };
};

result = Tuple.from(items, mapFn);

assert.sameValue(result.length, 2);
assert.sameValue(result[0], firstReturnVal);
assert.sameValue(result[1], secondReturnVal);

