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

//CHECK#1
Tuple.prototype.toString = Object.prototype.toString;
var x = Tuple();
assert.sameValue(x.toString(), "[object Tuple]");

//CHECK#2
Tuple.prototype.toString = Object.prototype.toString;
var x = Tuple(0, 1, 2);
assert.sameValue(x.toString(), "[object Tuple]");

