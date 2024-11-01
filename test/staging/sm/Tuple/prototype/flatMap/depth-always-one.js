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
assert.sameValue(#[1, 2].flatMap(function(e) {
  return #[e, e * 2];
}), #[1, 2, 2, 4]);

var result = #[1, 2, 3].flatMap(function(ele) {
  return #[
    #[ele * 2]
  ];
});
assert.sameValue(result.length, 3);
assert.sameValue(result[0], #[2]);
assert.sameValue(result[1] ,#[4]);
assert.sameValue(result[2], #[6]);

