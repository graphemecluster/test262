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
var TuplePrototype = Tuple.prototype;

assert.sameValue(typeof TuplePrototype.toSorted, 'function');

assertThrowsInstanceOf(function() {
  TuplePrototype.toSorted();
}, TypeError, "toSorted() invoked as method");

