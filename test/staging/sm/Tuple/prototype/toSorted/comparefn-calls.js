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
var expectedThis = (function() {
  return this;
})();


var sample = #[42, 42, 42, 42, 42];
var calls = [];

var comparefn = function() {
    calls.push([this, arguments]);
};

let result = sample.toSorted(comparefn);

assert.sameValue(calls.length > 0, true);

calls.forEach(function(args) {
    assert.sameValue(args[0], expectedThis);
    assert.sameValue(args[1].length, 2);
    assert.sameValue(args[1][0], 42);
    assert.sameValue(args[1][0], 42);
});

