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

var boxO = Object(#{ x: 1, y: 2 });

assert.sameValue(Object.isExtensible(boxO), false);
assert.sameValue(Object.isSealed(boxO), true);
assert.sameValue(Object.isFrozen(boxO), true);

boxO.x = 3;
assert.sameValue(boxO.x, 1);
assertThrowsInstanceOf(() => { "use strict"; boxO.x = 3; }, TypeError);
assert.sameValue(boxO.x, 1);

boxO.z = 3;
assert.sameValue(boxO.z, undefined);
assertThrowsInstanceOf(() => { "use strict"; boxO.z = 3; }, TypeError);
assert.sameValue(boxO.z, undefined);

assertThrowsInstanceOf(() => { Object.defineProperty(boxO, "x", { value: 3 }); }, TypeError);
assert.sameValue(boxO.x, 1);

assertThrowsInstanceOf(() => { Object.defineProperty(boxO, "z", { value: 3 }); }, TypeError);
assert.sameValue(boxO.z, undefined);

