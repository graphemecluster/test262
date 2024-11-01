// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: |
  no argument searches for a undefined value
includes: [sm/non262-shell.js, sm/non262.js]
flags:
- noStrict
features:
- record-tuple
esid: pending
---*/
assert.sameValue(#[0].includes(), false, "#[0].includes()");
assert.sameValue(#[undefined].includes(), true, "#[undefined].includes()");

