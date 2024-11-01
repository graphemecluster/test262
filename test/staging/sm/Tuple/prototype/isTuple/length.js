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
var desc = Object.getOwnPropertyDescriptor(Tuple.isTuple, "length");
assert.sameValue(desc.value, 1);
assert.sameValue(desc.writable, false);
assert.sameValue(desc.enumerable, false);
assert.sameValue(desc.configurable, true);


desc = Object.getOwnPropertyDescriptor(Tuple.isTuple, "name");
assert.sameValue(desc.value, "isTuple");
assert.sameValue(desc.writable, false);
assert.sameValue(desc.enumerable, false);
assert.sameValue(desc.configurable, true);

assert.sameValue(isConstructor(Tuple.isTuple), false);

assertThrowsInstanceOf(() => {
  let t = #[1];
    new t.isTuple()();
}, TypeError, '`let t = #[1]; new t.isTuple()` throws TypeError');

