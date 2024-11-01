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

// If an indexed Array setter is overridden, TupleMap shouldn't use it
// when constructing the intermediate array

z = 5;
Object.defineProperty(Array.prototype, '0', { set: function(y) { z = 42; }});
newT = Tuple.from([1, 2, 3]);
assert.sameValue(z, 5);

