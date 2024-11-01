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
var t = #[];
assert.sameValue(#[].flat(), #[]);
assert.sameValue(#[#[],#[]].flat(), #[]);
assert.sameValue(#[#[], #[1]].flat(), #[1]);
assert.sameValue(#[#[], #[1, t]].flat(), #[1, t]);

