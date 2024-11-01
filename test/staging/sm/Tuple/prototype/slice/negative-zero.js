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

var sample = #[40,41,42,43];

assert.sameValue(sample.slice(-0), sample);
assert.sameValue(sample.slice(-0, 4), sample);
assert.sameValue(sample.slice(0, -0), #[]);
assert.sameValue(sample.slice(-0, -0), #[]);

