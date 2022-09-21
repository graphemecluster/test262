// Copyright 2022 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
esid: prod-PrivateIdentifier
description: |
  Test that Unicode v6.0.0 ID_Start characters are accepted as
  identifier start characters in escaped form, i.e.
  - \uXXXX or \u{XXXX} for BMP symbols
  - \u{XXXXXX} for astral symbols
  in private class fields.
info: |
  Generated by https://github.com/mathiasbynens/caniunicode
features: [class, class-fields-private]
---*/

class _ {
  #\u0526;
  #\u0527;
  #\u0620;
  #\u0840;
  #\u0841;
  #\u0842;
  #\u0843;
  #\u0844;
  #\u0845;
  #\u0846;
  #\u0847;
  #\u0848;
  #\u0849;
  #\u084A;
  #\u084B;
  #\u084C;
  #\u084D;
  #\u084E;
  #\u084F;
  #\u0850;
  #\u0851;
  #\u0852;
  #\u0853;
  #\u0854;
  #\u0855;
  #\u0856;
  #\u0857;
  #\u0858;
  #\u0973;
  #\u0974;
  #\u0975;
  #\u0976;
  #\u0977;
  #\u0CF1;
  #\u0CF2;
  #\u0D29;
  #\u0D3A;
  #\u0D4E;
  #\u0F8C;
  #\u1BC0;
  #\u1BC1;
  #\u1BC2;
  #\u1BC3;
  #\u1BC4;
  #\u1BC5;
  #\u1BC6;
  #\u1BC7;
  #\u1BC8;
  #\u1BC9;
  #\u1BCA;
  #\u1BCB;
  #\u1BCC;
  #\u1BCD;
  #\u1BCE;
  #\u1BCF;
  #\u1BD0;
  #\u1BD1;
  #\u1BD2;
  #\u1BD3;
  #\u1BD4;
  #\u1BD5;
  #\u1BD6;
  #\u1BD7;
  #\u1BD8;
  #\u1BD9;
  #\u1BDA;
  #\u1BDB;
  #\u1BDC;
  #\u1BDD;
  #\u1BDE;
  #\u1BDF;
  #\u1BE0;
  #\u1BE1;
  #\u1BE2;
  #\u1BE3;
  #\u1BE4;
  #\u1BE5;
  #\u2095;
  #\u2096;
  #\u2097;
  #\u2098;
  #\u2099;
  #\u209A;
  #\u209B;
  #\u209C;
  #\u31B8;
  #\u31B9;
  #\u31BA;
  #\uA660;
  #\uA661;
  #\uA78D;
  #\uA78E;
  #\uA790;
  #\uA791;
  #\uA7A0;
  #\uA7A1;
  #\uA7A2;
  #\uA7A3;
  #\uA7A4;
  #\uA7A5;
  #\uA7A6;
  #\uA7A7;
  #\uA7A8;
  #\uA7A9;
  #\uA7FA;
  #\uAB01;
  #\uAB02;
  #\uAB03;
  #\uAB04;
  #\uAB05;
  #\uAB06;
  #\uAB09;
  #\uAB0A;
  #\uAB0B;
  #\uAB0C;
  #\uAB0D;
  #\uAB0E;
  #\uAB11;
  #\uAB12;
  #\uAB13;
  #\uAB14;
  #\uAB15;
  #\uAB16;
  #\uAB20;
  #\uAB21;
  #\uAB22;
  #\uAB23;
  #\uAB24;
  #\uAB25;
  #\uAB26;
  #\uAB28;
  #\uAB29;
  #\uAB2A;
  #\uAB2B;
  #\uAB2C;
  #\uAB2D;
  #\uAB2E;
  #\u{11003};
  #\u{11004};
  #\u{11005};
  #\u{11006};
  #\u{11007};
  #\u{11008};
  #\u{11009};
  #\u{1100A};
  #\u{1100B};
  #\u{1100C};
  #\u{1100D};
  #\u{1100E};
  #\u{1100F};
  #\u{11010};
  #\u{11011};
  #\u{11012};
  #\u{11013};
  #\u{11014};
  #\u{11015};
  #\u{11016};
  #\u{11017};
  #\u{11018};
  #\u{11019};
  #\u{1101A};
  #\u{1101B};
  #\u{1101C};
  #\u{1101D};
  #\u{1101E};
  #\u{1101F};
  #\u{11020};
  #\u{11021};
  #\u{11022};
  #\u{11023};
  #\u{11024};
  #\u{11025};
  #\u{11026};
  #\u{11027};
  #\u{11028};
  #\u{11029};
  #\u{1102A};
  #\u{1102B};
  #\u{1102C};
  #\u{1102D};
  #\u{1102E};
  #\u{1102F};
  #\u{11030};
  #\u{11031};
  #\u{11032};
  #\u{11033};
  #\u{11034};
  #\u{11035};
  #\u{11036};
  #\u{11037};
  #\u{16800};
  #\u{16801};
  #\u{16802};
  #\u{16803};
  #\u{16804};
  #\u{16805};
  #\u{16806};
  #\u{16807};
  #\u{16808};
  #\u{16809};
  #\u{1680A};
  #\u{1680B};
  #\u{1680C};
  #\u{1680D};
  #\u{1680E};
  #\u{1680F};
  #\u{16810};
  #\u{16811};
  #\u{16812};
  #\u{16813};
  #\u{16814};
  #\u{16815};
  #\u{16816};
  #\u{16817};
  #\u{16818};
  #\u{16819};
  #\u{1681A};
  #\u{1681B};
  #\u{1681C};
  #\u{1681D};
  #\u{1681E};
  #\u{1681F};
  #\u{16820};
  #\u{16821};
  #\u{16822};
  #\u{16823};
  #\u{16824};
  #\u{16825};
  #\u{16826};
  #\u{16827};
  #\u{16828};
  #\u{16829};
  #\u{1682A};
  #\u{1682B};
  #\u{1682C};
  #\u{1682D};
  #\u{1682E};
  #\u{1682F};
  #\u{16830};
  #\u{16831};
  #\u{16832};
  #\u{16833};
  #\u{16834};
  #\u{16835};
  #\u{16836};
  #\u{16837};
  #\u{16838};
  #\u{16839};
  #\u{1683A};
  #\u{1683B};
  #\u{1683C};
  #\u{1683D};
  #\u{1683E};
  #\u{1683F};
  #\u{16840};
  #\u{16841};
  #\u{16842};
  #\u{16843};
  #\u{16844};
  #\u{16845};
  #\u{16846};
  #\u{16847};
  #\u{16848};
  #\u{16849};
  #\u{1684A};
  #\u{1684B};
  #\u{1684C};
  #\u{1684D};
  #\u{1684E};
  #\u{1684F};
  #\u{16850};
  #\u{16851};
  #\u{16852};
  #\u{16853};
  #\u{16854};
  #\u{16855};
  #\u{16856};
  #\u{16857};
  #\u{16858};
  #\u{16859};
  #\u{1685A};
  #\u{1685B};
  #\u{1685C};
  #\u{1685D};
  #\u{1685E};
  #\u{1685F};
  #\u{16860};
  #\u{16861};
  #\u{16862};
  #\u{16863};
  #\u{16864};
  #\u{16865};
  #\u{16866};
  #\u{16867};
  #\u{16868};
  #\u{16869};
  #\u{1686A};
  #\u{1686B};
  #\u{1686C};
  #\u{1686D};
  #\u{1686E};
  #\u{1686F};
  #\u{16870};
  #\u{16871};
  #\u{16872};
  #\u{16873};
  #\u{16874};
  #\u{16875};
  #\u{16876};
  #\u{16877};
  #\u{16878};
  #\u{16879};
  #\u{1687A};
  #\u{1687B};
  #\u{1687C};
  #\u{1687D};
  #\u{1687E};
  #\u{1687F};
  #\u{16880};
  #\u{16881};
  #\u{16882};
  #\u{16883};
  #\u{16884};
  #\u{16885};
  #\u{16886};
  #\u{16887};
  #\u{16888};
  #\u{16889};
  #\u{1688A};
  #\u{1688B};
  #\u{1688C};
  #\u{1688D};
  #\u{1688E};
  #\u{1688F};
  #\u{16890};
  #\u{16891};
  #\u{16892};
  #\u{16893};
  #\u{16894};
  #\u{16895};
  #\u{16896};
  #\u{16897};
  #\u{16898};
  #\u{16899};
  #\u{1689A};
  #\u{1689B};
  #\u{1689C};
  #\u{1689D};
  #\u{1689E};
  #\u{1689F};
  #\u{168A0};
  #\u{168A1};
  #\u{168A2};
  #\u{168A3};
  #\u{168A4};
  #\u{168A5};
  #\u{168A6};
  #\u{168A7};
  #\u{168A8};
  #\u{168A9};
  #\u{168AA};
  #\u{168AB};
  #\u{168AC};
  #\u{168AD};
  #\u{168AE};
  #\u{168AF};
  #\u{168B0};
  #\u{168B1};
  #\u{168B2};
  #\u{168B3};
  #\u{168B4};
  #\u{168B5};
  #\u{168B6};
  #\u{168B7};
  #\u{168B8};
  #\u{168B9};
  #\u{168BA};
  #\u{168BB};
  #\u{168BC};
  #\u{168BD};
  #\u{168BE};
  #\u{168BF};
  #\u{168C0};
  #\u{168C1};
  #\u{168C2};
  #\u{168C3};
  #\u{168C4};
  #\u{168C5};
  #\u{168C6};
  #\u{168C7};
  #\u{168C8};
  #\u{168C9};
  #\u{168CA};
  #\u{168CB};
  #\u{168CC};
  #\u{168CD};
  #\u{168CE};
  #\u{168CF};
  #\u{168D0};
  #\u{168D1};
  #\u{168D2};
  #\u{168D3};
  #\u{168D4};
  #\u{168D5};
  #\u{168D6};
  #\u{168D7};
  #\u{168D8};
  #\u{168D9};
  #\u{168DA};
  #\u{168DB};
  #\u{168DC};
  #\u{168DD};
  #\u{168DE};
  #\u{168DF};
  #\u{168E0};
  #\u{168E1};
  #\u{168E2};
  #\u{168E3};
  #\u{168E4};
  #\u{168E5};
  #\u{168E6};
  #\u{168E7};
  #\u{168E8};
  #\u{168E9};
  #\u{168EA};
  #\u{168EB};
  #\u{168EC};
  #\u{168ED};
  #\u{168EE};
  #\u{168EF};
  #\u{168F0};
  #\u{168F1};
  #\u{168F2};
  #\u{168F3};
  #\u{168F4};
  #\u{168F5};
  #\u{168F6};
  #\u{168F7};
  #\u{168F8};
  #\u{168F9};
  #\u{168FA};
  #\u{168FB};
  #\u{168FC};
  #\u{168FD};
  #\u{168FE};
  #\u{168FF};
  #\u{16900};
  #\u{16901};
  #\u{16902};
  #\u{16903};
  #\u{16904};
  #\u{16905};
  #\u{16906};
  #\u{16907};
  #\u{16908};
  #\u{16909};
  #\u{1690A};
  #\u{1690B};
  #\u{1690C};
  #\u{1690D};
  #\u{1690E};
  #\u{1690F};
  #\u{16910};
  #\u{16911};
  #\u{16912};
  #\u{16913};
  #\u{16914};
  #\u{16915};
  #\u{16916};
  #\u{16917};
  #\u{16918};
  #\u{16919};
  #\u{1691A};
  #\u{1691B};
  #\u{1691C};
  #\u{1691D};
  #\u{1691E};
  #\u{1691F};
  #\u{16920};
  #\u{16921};
  #\u{16922};
  #\u{16923};
  #\u{16924};
  #\u{16925};
  #\u{16926};
  #\u{16927};
  #\u{16928};
  #\u{16929};
  #\u{1692A};
  #\u{1692B};
  #\u{1692C};
  #\u{1692D};
  #\u{1692E};
  #\u{1692F};
  #\u{16930};
  #\u{16931};
  #\u{16932};
  #\u{16933};
  #\u{16934};
  #\u{16935};
  #\u{16936};
  #\u{16937};
  #\u{16938};
  #\u{16939};
  #\u{1693A};
  #\u{1693B};
  #\u{1693C};
  #\u{1693D};
  #\u{1693E};
  #\u{1693F};
  #\u{16940};
  #\u{16941};
  #\u{16942};
  #\u{16943};
  #\u{16944};
  #\u{16945};
  #\u{16946};
  #\u{16947};
  #\u{16948};
  #\u{16949};
  #\u{1694A};
  #\u{1694B};
  #\u{1694C};
  #\u{1694D};
  #\u{1694E};
  #\u{1694F};
  #\u{16950};
  #\u{16951};
  #\u{16952};
  #\u{16953};
  #\u{16954};
  #\u{16955};
  #\u{16956};
  #\u{16957};
  #\u{16958};
  #\u{16959};
  #\u{1695A};
  #\u{1695B};
  #\u{1695C};
  #\u{1695D};
  #\u{1695E};
  #\u{1695F};
  #\u{16960};
  #\u{16961};
  #\u{16962};
  #\u{16963};
  #\u{16964};
  #\u{16965};
  #\u{16966};
  #\u{16967};
  #\u{16968};
  #\u{16969};
  #\u{1696A};
  #\u{1696B};
  #\u{1696C};
  #\u{1696D};
  #\u{1696E};
  #\u{1696F};
  #\u{16970};
  #\u{16971};
  #\u{16972};
  #\u{16973};
  #\u{16974};
  #\u{16975};
  #\u{16976};
  #\u{16977};
  #\u{16978};
  #\u{16979};
  #\u{1697A};
  #\u{1697B};
  #\u{1697C};
  #\u{1697D};
  #\u{1697E};
  #\u{1697F};
  #\u{16980};
  #\u{16981};
  #\u{16982};
  #\u{16983};
  #\u{16984};
  #\u{16985};
  #\u{16986};
  #\u{16987};
  #\u{16988};
  #\u{16989};
  #\u{1698A};
  #\u{1698B};
  #\u{1698C};
  #\u{1698D};
  #\u{1698E};
  #\u{1698F};
  #\u{16990};
  #\u{16991};
  #\u{16992};
  #\u{16993};
  #\u{16994};
  #\u{16995};
  #\u{16996};
  #\u{16997};
  #\u{16998};
  #\u{16999};
  #\u{1699A};
  #\u{1699B};
  #\u{1699C};
  #\u{1699D};
  #\u{1699E};
  #\u{1699F};
  #\u{169A0};
  #\u{169A1};
  #\u{169A2};
  #\u{169A3};
  #\u{169A4};
  #\u{169A5};
  #\u{169A6};
  #\u{169A7};
  #\u{169A8};
  #\u{169A9};
  #\u{169AA};
  #\u{169AB};
  #\u{169AC};
  #\u{169AD};
  #\u{169AE};
  #\u{169AF};
  #\u{169B0};
  #\u{169B1};
  #\u{169B2};
  #\u{169B3};
  #\u{169B4};
  #\u{169B5};
  #\u{169B6};
  #\u{169B7};
  #\u{169B8};
  #\u{169B9};
  #\u{169BA};
  #\u{169BB};
  #\u{169BC};
  #\u{169BD};
  #\u{169BE};
  #\u{169BF};
  #\u{169C0};
  #\u{169C1};
  #\u{169C2};
  #\u{169C3};
  #\u{169C4};
  #\u{169C5};
  #\u{169C6};
  #\u{169C7};
  #\u{169C8};
  #\u{169C9};
  #\u{169CA};
  #\u{169CB};
  #\u{169CC};
  #\u{169CD};
  #\u{169CE};
  #\u{169CF};
  #\u{169D0};
  #\u{169D1};
  #\u{169D2};
  #\u{169D3};
  #\u{169D4};
  #\u{169D5};
  #\u{169D6};
  #\u{169D7};
  #\u{169D8};
  #\u{169D9};
  #\u{169DA};
  #\u{169DB};
  #\u{169DC};
  #\u{169DD};
  #\u{169DE};
  #\u{169DF};
  #\u{169E0};
  #\u{169E1};
  #\u{169E2};
  #\u{169E3};
  #\u{169E4};
  #\u{169E5};
  #\u{169E6};
  #\u{169E7};
  #\u{169E8};
  #\u{169E9};
  #\u{169EA};
  #\u{169EB};
  #\u{169EC};
  #\u{169ED};
  #\u{169EE};
  #\u{169EF};
  #\u{169F0};
  #\u{169F1};
  #\u{169F2};
  #\u{169F3};
  #\u{169F4};
  #\u{169F5};
  #\u{169F6};
  #\u{169F7};
  #\u{169F8};
  #\u{169F9};
  #\u{169FA};
  #\u{169FB};
  #\u{169FC};
  #\u{169FD};
  #\u{169FE};
  #\u{169FF};
  #\u{16A00};
  #\u{16A01};
  #\u{16A02};
  #\u{16A03};
  #\u{16A04};
  #\u{16A05};
  #\u{16A06};
  #\u{16A07};
  #\u{16A08};
  #\u{16A09};
  #\u{16A0A};
  #\u{16A0B};
  #\u{16A0C};
  #\u{16A0D};
  #\u{16A0E};
  #\u{16A0F};
  #\u{16A10};
  #\u{16A11};
  #\u{16A12};
  #\u{16A13};
  #\u{16A14};
  #\u{16A15};
  #\u{16A16};
  #\u{16A17};
  #\u{16A18};
  #\u{16A19};
  #\u{16A1A};
  #\u{16A1B};
  #\u{16A1C};
  #\u{16A1D};
  #\u{16A1E};
  #\u{16A1F};
  #\u{16A20};
  #\u{16A21};
  #\u{16A22};
  #\u{16A23};
  #\u{16A24};
  #\u{16A25};
  #\u{16A26};
  #\u{16A27};
  #\u{16A28};
  #\u{16A29};
  #\u{16A2A};
  #\u{16A2B};
  #\u{16A2C};
  #\u{16A2D};
  #\u{16A2E};
  #\u{16A2F};
  #\u{16A30};
  #\u{16A31};
  #\u{16A32};
  #\u{16A33};
  #\u{16A34};
  #\u{16A35};
  #\u{16A36};
  #\u{16A37};
  #\u{16A38};
  #\u{1B000};
  #\u{1B001};
  #\u{2B740};
  #\u{2B741};
  #\u{2B742};
  #\u{2B743};
  #\u{2B744};
  #\u{2B745};
  #\u{2B746};
  #\u{2B747};
  #\u{2B748};
  #\u{2B749};
  #\u{2B74A};
  #\u{2B74B};
  #\u{2B74C};
  #\u{2B74D};
  #\u{2B74E};
  #\u{2B74F};
  #\u{2B750};
  #\u{2B751};
  #\u{2B752};
  #\u{2B753};
  #\u{2B754};
  #\u{2B755};
  #\u{2B756};
  #\u{2B757};
  #\u{2B758};
  #\u{2B759};
  #\u{2B75A};
  #\u{2B75B};
  #\u{2B75C};
  #\u{2B75D};
  #\u{2B75E};
  #\u{2B75F};
  #\u{2B760};
  #\u{2B761};
  #\u{2B762};
  #\u{2B763};
  #\u{2B764};
  #\u{2B765};
  #\u{2B766};
  #\u{2B767};
  #\u{2B768};
  #\u{2B769};
  #\u{2B76A};
  #\u{2B76B};
  #\u{2B76C};
  #\u{2B76D};
  #\u{2B76E};
  #\u{2B76F};
  #\u{2B770};
  #\u{2B771};
  #\u{2B772};
  #\u{2B773};
  #\u{2B774};
  #\u{2B775};
  #\u{2B776};
  #\u{2B777};
  #\u{2B778};
  #\u{2B779};
  #\u{2B77A};
  #\u{2B77B};
  #\u{2B77C};
  #\u{2B77D};
  #\u{2B77E};
  #\u{2B77F};
  #\u{2B780};
  #\u{2B781};
  #\u{2B782};
  #\u{2B783};
  #\u{2B784};
  #\u{2B785};
  #\u{2B786};
  #\u{2B787};
  #\u{2B788};
  #\u{2B789};
  #\u{2B78A};
  #\u{2B78B};
  #\u{2B78C};
  #\u{2B78D};
  #\u{2B78E};
  #\u{2B78F};
  #\u{2B790};
  #\u{2B791};
  #\u{2B792};
  #\u{2B793};
  #\u{2B794};
  #\u{2B795};
  #\u{2B796};
  #\u{2B797};
  #\u{2B798};
  #\u{2B799};
  #\u{2B79A};
  #\u{2B79B};
  #\u{2B79C};
  #\u{2B79D};
  #\u{2B79E};
  #\u{2B79F};
  #\u{2B7A0};
  #\u{2B7A1};
  #\u{2B7A2};
  #\u{2B7A3};
  #\u{2B7A4};
  #\u{2B7A5};
  #\u{2B7A6};
  #\u{2B7A7};
  #\u{2B7A8};
  #\u{2B7A9};
  #\u{2B7AA};
  #\u{2B7AB};
  #\u{2B7AC};
  #\u{2B7AD};
  #\u{2B7AE};
  #\u{2B7AF};
  #\u{2B7B0};
  #\u{2B7B1};
  #\u{2B7B2};
  #\u{2B7B3};
  #\u{2B7B4};
  #\u{2B7B5};
  #\u{2B7B6};
  #\u{2B7B7};
  #\u{2B7B8};
  #\u{2B7B9};
  #\u{2B7BA};
  #\u{2B7BB};
  #\u{2B7BC};
  #\u{2B7BD};
  #\u{2B7BE};
  #\u{2B7BF};
  #\u{2B7C0};
  #\u{2B7C1};
  #\u{2B7C2};
  #\u{2B7C3};
  #\u{2B7C4};
  #\u{2B7C5};
  #\u{2B7C6};
  #\u{2B7C7};
  #\u{2B7C8};
  #\u{2B7C9};
  #\u{2B7CA};
  #\u{2B7CB};
  #\u{2B7CC};
  #\u{2B7CD};
  #\u{2B7CE};
  #\u{2B7CF};
  #\u{2B7D0};
  #\u{2B7D1};
  #\u{2B7D2};
  #\u{2B7D3};
  #\u{2B7D4};
  #\u{2B7D5};
  #\u{2B7D6};
  #\u{2B7D7};
  #\u{2B7D8};
  #\u{2B7D9};
  #\u{2B7DA};
  #\u{2B7DB};
  #\u{2B7DC};
  #\u{2B7DD};
  #\u{2B7DE};
  #\u{2B7DF};
  #\u{2B7E0};
  #\u{2B7E1};
  #\u{2B7E2};
  #\u{2B7E3};
  #\u{2B7E4};
  #\u{2B7E5};
  #\u{2B7E6};
  #\u{2B7E7};
  #\u{2B7E8};
  #\u{2B7E9};
  #\u{2B7EA};
  #\u{2B7EB};
  #\u{2B7EC};
  #\u{2B7ED};
  #\u{2B7EE};
  #\u{2B7EF};
  #\u{2B7F0};
  #\u{2B7F1};
  #\u{2B7F2};
  #\u{2B7F3};
  #\u{2B7F4};
  #\u{2B7F5};
  #\u{2B7F6};
  #\u{2B7F7};
  #\u{2B7F8};
  #\u{2B7F9};
  #\u{2B7FA};
  #\u{2B7FB};
  #\u{2B7FC};
  #\u{2B7FD};
  #\u{2B7FE};
  #\u{2B7FF};
  #\u{2B800};
  #\u{2B801};
  #\u{2B802};
  #\u{2B803};
  #\u{2B804};
  #\u{2B805};
  #\u{2B806};
  #\u{2B807};
  #\u{2B808};
  #\u{2B809};
  #\u{2B80A};
  #\u{2B80B};
  #\u{2B80C};
  #\u{2B80D};
  #\u{2B80E};
  #\u{2B80F};
  #\u{2B810};
  #\u{2B811};
  #\u{2B812};
  #\u{2B813};
  #\u{2B814};
  #\u{2B815};
  #\u{2B816};
  #\u{2B817};
  #\u{2B818};
  #\u{2B819};
  #\u{2B81A};
  #\u{2B81B};
  #\u{2B81C};
  #\u{2B81D};
};
