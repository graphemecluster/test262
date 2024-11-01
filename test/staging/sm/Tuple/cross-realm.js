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

const realm = newGlobal();

const realm_TupleConstructor = realm.eval("Tuple");
const realm_tuple = realm.eval(`
  var tuple = Tuple(1, 2, 3);
  tuple;
`);

assert.sameValue(realm_tuple === #[1, 2, 3], true);
assert.sameValue(realm_tuple.constructor, Tuple);
assert.sameValue(realm.eval("tuple.constructor"), realm_TupleConstructor);

realm_TupleConstructor.prototype.foo = 42;
assert.sameValue(realm.eval("tuple.foo"), 42);
assert.sameValue(realm_tuple.foo, undefined);

assert.sameValue("foo" in Object(realm_tuple), false);
assert.sameValue(realm.eval(`"foo" in Object(tuple)`), true);

