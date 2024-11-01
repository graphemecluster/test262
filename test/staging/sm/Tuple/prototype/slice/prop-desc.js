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

var desc = Object.getOwnPropertyDescriptor(Tuple.prototype, "slice");
assert.sameValue(desc.writable, true);
assert.sameValue(desc.enumerable, false);
assert.sameValue(desc.configurable, true);
assert.sameValue(typeof Tuple.prototype.slice, 'function');

