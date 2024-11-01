// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: |
  Return abrupt from ToInteger(fromIndex)
includes: [sm/non262-shell.js, sm/non262.js]
flags:
- noStrict
features:
- record-tuple
esid: pending
---*/
function TestError() {};

var fromIndex = {
  valueOf: function() {
    throw new TestError();
  }
};

var sample = #[7];

assertThrowsInstanceOf(() => sample.includes(7, fromIndex), TestError);

