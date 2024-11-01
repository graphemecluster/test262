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
var itemsPoisonedSymbolIterator = {};
itemsPoisonedSymbolIterator[Symbol.iterator] = function() {
  throw new RangeError();
};

assertThrowsInstanceOf(function() {
  Tuple.from(itemsPoisonedSymbolIterator);
}, RangeError, 'Tuple.from(itemsPoisonedSymbolIterator) throws');

