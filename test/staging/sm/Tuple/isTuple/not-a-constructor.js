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
/* 18 ECMAScript Standard Built-in Objects
...

  Built-in function objects that are not identified as constructors do not
  implement the [[Construct]] internal method unless otherwise specified in
  the description of a particular function.
*/

assert.sameValue(isConstructor(Tuple.isTuple), false);

assertThrowsInstanceOf(() => new Tuple.isTuple(#[]), TypeError,
                       "new Tuple.isTuple(#[]) throws");

