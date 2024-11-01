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

// If an indexed Array setter is overridden, TupleSplice shouldn't use it
// when constructing the intermediate array

var z = 5;
print("1111");
Object.defineProperty(Array.prototype, '0', { set: function(y) { z = 42; }});
print("2222");
let newT = #[1,2,3].filter(x => true);
print("3333");
assert.sameValue(z, 5);
print("4444");

