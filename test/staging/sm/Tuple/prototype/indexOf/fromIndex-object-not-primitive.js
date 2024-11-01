// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: |
  Tuple.prototype.indexOf throws TypeError exception when value of 'fromIndex' is an object with toString and valueOf methods that don�t return primitive values
includes: [sm/non262-shell.js, sm/non262.js]
flags:
- noStrict
features:
- record-tuple
esid: pending
---*/
var toStringAccessed = false;
var valueOfAccessed = false;
var fromIndex = {
  toString: function() {
    toStringAccessed = true;
    return {};
  },

  valueOf: function() {
    valueOfAccessed = true;
    return {};
  }
};

assertThrowsInstanceOf(function() {
  #[0, true].indexOf(true, fromIndex);
}, TypeError);

assert.sameValue(toStringAccessed, true);
assert.sameValue(valueOfAccessed, true);

