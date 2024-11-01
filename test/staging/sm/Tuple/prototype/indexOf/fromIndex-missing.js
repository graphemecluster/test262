// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.prototype.indexof
description: |
  Tuple.prototype.indexOf - 'fromIndex' isn't passed
includes: [sm/non262-shell.js, sm/non262.js]
flags:
- noStrict
features:
- record-tuple
---*/
var arr = #[0, 1, 2, 3, 4];
//'fromIndex' will be set as 0 if not passed by default

assert.sameValue(arr.indexOf(0), arr.indexOf(0, 0), 'arr.indexOf(0)');
assert.sameValue(arr.indexOf(2), arr.indexOf(2, 0), 'arr.indexOf(2)');
assert.sameValue(arr.indexOf(4), arr.indexOf(4, 0), 'arr.indexOf(4)');

