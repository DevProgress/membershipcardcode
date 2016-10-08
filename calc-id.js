/**
 *
 */

'use strict';

function calculate(vanId) {
  let urlId = '';

  const startNum = 105100000;
  const startCode = '0E2B346Q';

  const vanNum = Number(vanId);
  const countFromStart = vanNum - startNum;
  console.log({ vanNum, countFromStart });


  // ....


  return urlId;
}

//                               16   16        16

const knownMatches = {
                              // 0-F  0-F       A-Q

  '105100000': '0E2B346Q',    // 0    E  2B346  Q

  '105130000': '0182446L',
  '105130001': '1182446M',

  '105134600': '80A3446E',    // 8    0  A3446  E
  '105134601': '90A3446F',

  '105134782': 'EBA3446Q',    // E    B  A3446  Q
  '105134783': 'FBA3446A',    // F    B  A3446  A
  '105134784': '0CA3446B',    // 0    C  A3446  B
  '105134785': '1CA3446C',    // 1    C  A3446  C
  '105134786': '2CA3446D',    // 2    C  A3446  D
  '105134787': '3CA3446E',    // 3    C  A3446  E
  '105134788': '4CA3446F',    // 4    C  A3446  F
  '105134789': '5CA3446G',    // 5    C  A3446  G
  '105134790': '6CA3446H',    // 6    C  A3446  H
  '105134791': '7CA3446I',    // 7    C  A3446  I
  '105134792': '8CA3446J',    // 8    C  A3446  J
  '105134793': '9CA3446K',    // 9    C  A3446  K
  '105134794': 'ACA3446L',    // A    C  A3446  L
  '105134795': 'BCA3446M',    // B    C  A3446  M
  '105134796': 'BCA3446N',    // B    C  A3446  N  // inactive
  '105134797': 'BCA3446O',    // B    C  A3446  O  // inactive        // BC REPEATS x3!!
  '105134798': 'ECA3446P',    // E    C  A3446  P                     // SKIP B-E !!
  '105134799': 'FCA3446Q',    // F    C  A3446  Q
  '105134800': '0DA3446A',    // 0    D  A3446  A
  '105134801': '0DA3446B',    // 0    D  A3446  B   // inactive       // 0D REPEATS x2!!
  '105134802': '2DA3446C',    // 2    D  A3446  C                     // 1D SKIPS!!
  '105134803': '3DA3446D',    // 3    D  A3446  D
  '105134804': '4DA3446E',    // 4    D  A3446  E
  '105134805': '5DA3446F',    // 5    D  A3446  F
  '105134806': '6DA3446G',    // 6    D  A3446  G
  '105134807': '7DA3446H',    // 7    D  A3446  H
  '105134808': '8DA3446I',    // 8    D  A3446  I
  '105134809': '9DA3446J',    // 9    D  A3446  J
  '105134810': 'ADA3446K',    // A    D  A3446  K
  '105134811': 'BDA3446L',    // B    D  A3446  L
  '105134812': 'CDA3446M',    // C    D  A3446  M
  '105134813': 'DDA3446N',    // D    D  A3446  N
  '105134814': 'EDA3446O',    // E    D  A3446  O
  '105134815': 'FDA3446P',    // F    D  A3446  P
  '105134816': '0EA3446Q',    // 0    E  A3446  Q
  '105134817': '1EA3446A',    // 1    E  A3446  A

  '105134830': 'EEA3446N',

  '105134847': 'FFA3446N',    // F    F  A3446  N
  '105134848': '00B3446O',    // 0    0  B3446  O    // FIRST B!

  '105134880': '02B3446M',


  '105134904': '83B3446C',    // 8    3  B3446  C
  '105134905': '93B3446D',    // 9    3  B3446  D
  '105134906': 'A3B3446E',    // A    3  B3446  E
};

for (const vanId in knownMatches) {
  const expected = knownMatches[vanId];
  const calculated = calculate(vanId);

  console.log(`${vanId}\tExpected: ${expected}\tCalculated: ${calculated}\t` +
    (expected === calculated ? '!!!' : 'FAIL'));
}
