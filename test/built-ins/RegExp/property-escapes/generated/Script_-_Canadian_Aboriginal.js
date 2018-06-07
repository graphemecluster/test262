// Copyright 2018 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script=Canadian_Aboriginal`
info: |
  Generated by https://github.com/mathiasbynens/unicode-property-escapes-tests
  Unicode v11.0.0
esid: sec-static-semantics-unicodematchproperty-p
features: [regexp-unicode-property-escapes]
includes: [regExpUtils.js]
---*/

const matchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x001400, 0x00167F],
    [0x0018B0, 0x0018F5]
  ]
});
testPropertyEscapes(
  /^\p{Script=Canadian_Aboriginal}+$/u,
  matchSymbols,
  "\\p{Script=Canadian_Aboriginal}"
);
testPropertyEscapes(
  /^\p{Script=Cans}+$/u,
  matchSymbols,
  "\\p{Script=Cans}"
);
testPropertyEscapes(
  /^\p{sc=Canadian_Aboriginal}+$/u,
  matchSymbols,
  "\\p{sc=Canadian_Aboriginal}"
);
testPropertyEscapes(
  /^\p{sc=Cans}+$/u,
  matchSymbols,
  "\\p{sc=Cans}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x0013FF],
    [0x001680, 0x0018AF],
    [0x0018F6, 0x00DBFF],
    [0x00E000, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Script=Canadian_Aboriginal}+$/u,
  nonMatchSymbols,
  "\\P{Script=Canadian_Aboriginal}"
);
testPropertyEscapes(
  /^\P{Script=Cans}+$/u,
  nonMatchSymbols,
  "\\P{Script=Cans}"
);
testPropertyEscapes(
  /^\P{sc=Canadian_Aboriginal}+$/u,
  nonMatchSymbols,
  "\\P{sc=Canadian_Aboriginal}"
);
testPropertyEscapes(
  /^\P{sc=Cans}+$/u,
  nonMatchSymbols,
  "\\P{sc=Cans}"
);
