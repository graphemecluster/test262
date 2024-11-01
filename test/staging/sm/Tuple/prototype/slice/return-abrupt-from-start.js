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

var o1 = { valueOf: function() { throw new SyntaxError(); } };
var o2 = { toString: function() { throw new SyntaxError(); } };

var sample = #[];

assertThrowsInstanceOf(() => sample.slice(o1),
                       SyntaxError, "valueOf throws");
assertThrowsInstanceOf(() => sample.slice(o2),
                       SyntaxError, "toString throws");

