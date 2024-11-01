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
assert.sameValue(isConstructor(Tuple.from), false);

assertThrowsInstanceOf(() => {
  new Tuple.from([]);
}, TypeError, 'new Tuple.from([]) throws a TypeError exception');


