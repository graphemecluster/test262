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
let sample = #[42, 43, 44, 45, 46];
var calls = 0;

let comparefn = function() {
    calls += 1;
    throw new TypeError();
};

assertThrowsInstanceOf(function() {
    sample.toSorted(comparefn);
}, TypeError, "comparefn should throw");

assert.sameValue(calls, 1);

