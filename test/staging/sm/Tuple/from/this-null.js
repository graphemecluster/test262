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

// this = null or undefined should not throw
var result = Tuple.from.call(null, #[]);

assert.sameValue(result, #[]);
result = Tuple.from.call(undefined, #[]);
assert.sameValue(result, #[]);
result = Tuple.from.call({}, #[]);
assert.sameValue(result, #[]);
result = Tuple.from.call(5, #[]);
assert.sameValue(result, #[]);

