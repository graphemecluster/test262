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
var array = [2, 4, 0, 16];
var expectedTuple = #[2, 4, undefined, 16];
var obj = {
  length: 4,
  0: 2,
  1: 4,
  2: 0,
  3: 16
};
delete obj[2];
let t = Tuple.from(obj);
assert.sameValue(t, expectedTuple);

