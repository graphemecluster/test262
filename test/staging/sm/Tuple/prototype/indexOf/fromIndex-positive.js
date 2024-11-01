// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: |
  Tuple.prototype.indexOf - value of 'fromIndex' is a number (value is positive number)
includes: [sm/non262-shell.js, sm/non262.js]
flags:
- noStrict
features:
- record-tuple
esid: pending
---*/
var target = #[];

assert.sameValue(#[0, target, 2].indexOf(target, 2), -1, '#[0, target, 2].indexOf(target, 2)');
assert.sameValue(#[0, 1, target].indexOf(target, 2), 2, '#[0, 1, target].indexOf(target, 2)');

