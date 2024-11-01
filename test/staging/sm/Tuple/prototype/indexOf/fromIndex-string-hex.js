// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.prototype.indexof
description: |
  Tuple.prototype.indexOf - value of 'fromIndex' is a string containing a hex number
includes: [sm/non262-shell.js, sm/non262.js]
flags:
- noStrict
features:
- record-tuple
---*/
var target = #[];

assert.sameValue(#[0, 1, target, 3, 4].indexOf(target, "0x0003"), -1, '#[0, 1, target, 3, 4].indexOf(target, "0x0003")');
assert.sameValue(#[0, 1, 2, target, 4].indexOf(target, "0x0003"), 3, '#[0, 1, 2, target, 4].indexOf(target, "0x0003")');

