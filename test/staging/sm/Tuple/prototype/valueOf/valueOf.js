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
/*
8.2.3.3 Tuple.prototype.valueOf ( )
When the valueOf function is called, the following steps are taken:

1. Return ? thisTupleValue(this value).
*/

var valueOf = Tuple.prototype.valueOf;
assert.sameValue(typeof valueOf, 'function');

var tup = #[1,2,3];
assert.sameValue(valueOf.call(tup), tup);
assert.sameValue(valueOf.call(Object(tup)), tup);
assertThrowsInstanceOf(() => valueOf.call("monkeys"), TypeError,
                       "this is not Tuple");
assertThrowsInstanceOf(() => valueOf.call({}), TypeError,
                       "this is not Tuple");
assertThrowsInstanceOf(() => valueOf.call(new Object(1)), TypeError,
                       "this is not Tuple");


