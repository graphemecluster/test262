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

assert.sameValue(
	JSON.stringify(#{ x: 1, a: #[1, 2, #{}, #[]] }),
	'{"a":[1,2,{},[]],"x":1}'
);

assert.sameValue(
	JSON.stringify({ rec: Object(#{ x: 1 }), tup: Object(#[1, 2]) }),
	'{"rec":{"x":1},"tup":[1,2]}'
);

