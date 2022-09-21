// Copyright 2022 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
esid: prod-PrivateIdentifier
description: |
  Test that Unicode v15.0.0 ID_Continue characters are accepted as
  identifier part characters in escaped form, i.e.
  - \uXXXX or \u{XXXX} for BMP symbols
  - \u{XXXXXX} for astral symbols
  in private class fields.
info: |
  Generated by https://github.com/mathiasbynens/caniunicode
features: [class, class-fields-private]
---*/

class _ {
  #_\u0CF3\u0ECE\u{10EFD}\u{10EFE}\u{10EFF}\u{11241}\u{11F00}\u{11F01}\u{11F03}\u{11F34}\u{11F35}\u{11F36}\u{11F37}\u{11F38}\u{11F39}\u{11F3A}\u{11F3E}\u{11F3F}\u{11F40}\u{11F41}\u{11F42}\u{11F50}\u{11F51}\u{11F52}\u{11F53}\u{11F54}\u{11F55}\u{11F56}\u{11F57}\u{11F58}\u{11F59}\u{13440}\u{13447}\u{13448}\u{13449}\u{1344A}\u{1344B}\u{1344C}\u{1344D}\u{1344E}\u{1344F}\u{13450}\u{13451}\u{13452}\u{13453}\u{13454}\u{13455}\u{1E08F}\u{1E4EC}\u{1E4ED}\u{1E4EE}\u{1E4EF}\u{1E4F0}\u{1E4F1}\u{1E4F2}\u{1E4F3}\u{1E4F4}\u{1E4F5}\u{1E4F6}\u{1E4F7}\u{1E4F8}\u{1E4F9};
};
