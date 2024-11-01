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

assert.sameValue(Object.prototype.toString.call(#[1,2,3]),
         "[object Tuple]");
assert.sameValue(Object.prototype.toString.call(Object(#[1,2,3])),
         "[object Tuple]");
assert.sameValue(Object.prototype.toString.call(#[]),
         "[object Tuple]");
assert.sameValue(Object.prototype.toString.call(Object(#[])),
         "[object Tuple]");

