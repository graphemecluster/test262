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

var obj = {
  0: 2,
  1: 4,
  2: 8,
  3: 16
}

var t = Tuple.from(obj);
assert.sameValue(t.length, 0);

