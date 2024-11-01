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
var slice = Tuple.prototype.slice;

assertThrowsInstanceOf(function() { slice() }, TypeError,
                       "value of TupleObject must be a Tuple");

