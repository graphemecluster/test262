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
/* Tuples should have a length ownProperty that can't be overridden
 * This test is expected to fail until the spec change in
 * https://github.com/tc39/proposal-record-tuple/issues/282 is implemented.
 */

/*
var desc = Object.getOwnPropertyDescriptor(#[1,2,3], "length");
assert.sameValue(desc.value, 3);
assert.sameValue(desc.writable, false);
assert.sameValue(desc.enumerable, false);
assert.sameValue(desc.configurable, false);
Object.defineProperty(Tuple.prototype, "length", {value: 0});
desc = Object.getOwnPropertyDescriptor(#[1,2,3], "length");
assert.sameValue(desc.value, 3);
assert.sameValue(desc.writable, false);
assert.sameValue(desc.enumerable, false);
assert.sameValue(desc.configurable, false);
*/

