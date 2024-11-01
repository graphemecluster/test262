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
var items = {};
var result, nextIterResult, lastIterResult;
items[Symbol.iterator] = function() {
  return {
    next: function() {
      var result = nextIterResult;
      nextIterResult = lastIterResult;
      return result;
    }
  };
};

nextIterResult = lastIterResult = {
  done: true
};
result = Tuple.from(items);

assert.sameValue(result.length, 0);

nextIterResult = {
  done: false
};
lastIterResult = {
  done: true
};
result = Tuple.from(items);

assert.sameValue(result.length, 1);

