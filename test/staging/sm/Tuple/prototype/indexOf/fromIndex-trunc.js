// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.prototype.indexof
description: |
  Tuple.prototype.indexOf - 'fromIndex' is a positive non-integer, verify truncation occurs in the proper direction
includes: [sm/non262-shell.js, sm/non262.js]
flags:
- noStrict
features:
- record-tuple
---*/
var target = #[];

assert.sameValue(#[0, target, 2].indexOf(target, 2.5), -1, '#[0, target, 2].indexOf(target, 2.5)');
assert.sameValue(#[0, 1, target].indexOf(target, 2.5), 2, '#[0, 1, target].indexOf(target, 2.5)');

