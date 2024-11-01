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
var closeCount = 0;
var mapFn = function() {
  throw new RangeError();
};
var items = {};
items[Symbol.iterator] = function() {
  return {
    return: function() {
      closeCount += 1;
    },
    next: function() {
      return {
        done: false
      };
    }
  };
};

assertThrowsInstanceOf(function() {
  Tuple.from(items, mapFn);
}, RangeError, 'Tuple.from(items, mapFn) should throw');

assert.sameValue(closeCount, 1);

