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
Object.defineProperty(items, Symbol.iterator, {
  get: function() {
    throw new RangeError();
  }
});

assertThrowsInstanceOf(() => Tuple.from(items), RangeError,
                       'Tuple.from(items) should throw');

