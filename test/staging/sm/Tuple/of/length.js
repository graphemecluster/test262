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
var desc = Object.getOwnPropertyDescriptor(Tuple.of, "length");
assert.sameValue(desc.value, 0);
assert.sameValue(desc.writable, false);
assert.sameValue(desc.enumerable, false);
assert.sameValue(desc.configurable, true);

desc = Object.getOwnPropertyDescriptor(Tuple.of, "name");
assert.sameValue(desc.value, "of");
assert.sameValue(desc.writable, false);
assert.sameValue(desc.enumerable, false);
assert.sameValue(desc.configurable, true);

assert.sameValue(isConstructor(Tuple.of), false);

assertThrowsInstanceOf(() => {
  new Tuple.of(1, 2, 3);
}, TypeError, '`new Tuple.of(1, 2, 3)` throws TypeError');

