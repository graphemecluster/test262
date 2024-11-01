// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: |
  Tuple.prototype.indexOf - side effects produced by step 1 are visible when an exception occurs
includes: [sm/non262-shell.js, sm/non262.js]
flags:
- noStrict
features:
- record-tuple
esid: pending
---*/
var stepFiveOccurs = false;
var fromIndex = {
  valueOf: function() {
    stepFiveOccurs = true;
    return 0;
  }
};
assertThrowsInstanceOf(function() {
  Tuple.prototype.indexOf.call(undefined, undefined, fromIndex);
}, TypeError);
assert.sameValue(stepFiveOccurs, false, 'stepFiveOccurs');

