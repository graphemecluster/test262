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
var toReversed = Tuple.prototype.toReversed;

assert.sameValue(typeof toReversed, 'function');

assertThrowsInstanceOf(function() {
  toReversed();
}, TypeError, "toReversed() invoked as function");

