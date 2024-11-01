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
/* Step 6b. */
/* AddEntriesFromIterable should throw if next() throws */

var iter = {};
iter[Symbol.iterator] = function() {
  return {
    next: function() {
      throw new SyntaxError();
    }
  };
};

assertThrowsInstanceOf(function() {
  Tuple.from(iter);
}, SyntaxError, "from() should throw if next() throws");

