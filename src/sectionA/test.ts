import {
  sumCubes,
  sumCubes2,
  sumFactorials,
  sumFactorials2,
  prodInts,
  sumInts2,
  sumMap,
  sumSquares,
  sumSquares2,
  sumInts,
  prodSquares,
  prodCubes,
  prodFactorial,
  prodMap,
  prodInts2,
  prodSquares2,
  prodCubes2,
  prodFactorial2,
  mapReduce,
  mapReduce2,
  sumMap2,
  prodMap2,
} from './code.js';

// All test cases in an outputable way for the terminal, nothing more
// Run "npm run testA" or "yarn testA" to see them working

const MAX_PAD_LEGNTH = 50;
const PAD_CHAR = '.';

console.log('====================================');
console.log('Test Results:');
console.log(
  'sumInts(1, 5)'.padEnd(MAX_PAD_LEGNTH, PAD_CHAR),
  '| Result:',
  sumInts(1, 5),
  'should be',
  15
);
console.log(
  'sumSquares(1, 5)'.padEnd(MAX_PAD_LEGNTH, PAD_CHAR),
  '| Result:',
  sumSquares(1, 5),
  'should be',
  55
);
console.log(
  'sumCubes(1, 5)'.padEnd(MAX_PAD_LEGNTH, PAD_CHAR),
  '| Result:',
  sumCubes(1, 5),
  'should be',
  225
);
console.log(
  'sumFactorials(1, 5)'.padEnd(MAX_PAD_LEGNTH, PAD_CHAR),
  '| Result:',
  sumFactorials(1, 5),
  'should be',
  153
);
console.log('---');
console.log(
  'sumMap((x) => x)(1, 5)'.padEnd(MAX_PAD_LEGNTH, PAD_CHAR),
  '| Result:',
  sumMap((x) => x)(1, 5),
  'should be',
  15
);
console.log(
  'sumMap((x) => x * x)(1, 5)'.padEnd(MAX_PAD_LEGNTH, PAD_CHAR),
  '| Result:',
  sumMap((x) => x * x)(1, 5),
  'should be',
  55
);
console.log('---');
console.log(
  'sumInts2(1, 5)'.padEnd(MAX_PAD_LEGNTH, PAD_CHAR),
  '| Result:',
  sumInts2(1, 5),
  'should be',
  15
);
console.log(
  'sumSquares2(1, 5)'.padEnd(MAX_PAD_LEGNTH, PAD_CHAR),
  '| Result:',
  sumSquares2(1, 5),
  'should be',
  55
);
console.log(
  'sumCubes2(1, 5)'.padEnd(MAX_PAD_LEGNTH, PAD_CHAR),
  '| Result:',
  sumCubes2(1, 5),
  'should be',
  225
);
console.log(
  'sumFactorials2(1, 5)'.padEnd(MAX_PAD_LEGNTH, PAD_CHAR),
  '| Result:',
  sumFactorials2(1, 5),
  'should be',
  153
);
console.log('---');
console.log(
  'prodInts(1, 5)'.padEnd(MAX_PAD_LEGNTH, PAD_CHAR),
  '| Result:',
  prodInts(1, 5),
  'should be',
  120
);
console.log(
  'prodSquares(1, 5)'.padEnd(MAX_PAD_LEGNTH, PAD_CHAR),
  '| Result:',
  prodSquares(1, 5),
  'should be',
  14400
);
console.log(
  'prodCubes(1, 5)'.padEnd(MAX_PAD_LEGNTH, PAD_CHAR),
  '| Result:',
  prodCubes(1, 5),
  'should be',
  1728000
);
console.log(
  'prodFactorial(1, 5)'.padEnd(MAX_PAD_LEGNTH, PAD_CHAR),
  '| Result:',
  prodFactorial(1, 5),
  'should be',
  34560
);
console.log('---');
console.log(
  'prodMap((x) => x)(1, 5)'.padEnd(MAX_PAD_LEGNTH, PAD_CHAR),
  '| Result:',
  prodMap((x) => x)(1, 5),
  'should be',
  120
);
console.log(
  'prodMap((x) => x * x)(1, 5)'.padEnd(MAX_PAD_LEGNTH, PAD_CHAR),
  '| Result:',
  prodMap((x) => x * x)(1, 5),
  'should be',
  14400
);
console.log('---');
console.log(
  'prodInts2(1, 5)'.padEnd(MAX_PAD_LEGNTH, PAD_CHAR),
  '| Result:',
  prodInts2(1, 5),
  'should be',
  120
);
console.log(
  'prodSquares2(1, 5)'.padEnd(MAX_PAD_LEGNTH, PAD_CHAR),
  '| Result:',
  prodSquares2(1, 5),
  'should be',
  14400
);
console.log(
  'prodCubes2(1, 5)'.padEnd(MAX_PAD_LEGNTH, PAD_CHAR),
  '| Result:',
  prodCubes2(1, 5),
  'should be',
  1728000
);
console.log(
  'prodFactorial2(1, 5)'.padEnd(MAX_PAD_LEGNTH, PAD_CHAR),
  '| Result:',
  prodFactorial2(1, 5),
  'should be',
  34560
);
console.log('---');
console.log(
  'mapReduce((x) => x, (a, b) => a + b, 0)(1, 5)'.padEnd(
    MAX_PAD_LEGNTH,
    PAD_CHAR
  ),
  '| Result:',
  mapReduce(
    (x) => x,
    (a, b) => a + b,
    0
  )(1, 5),
  'should be',
  15
);
console.log(
  'mapReduce((x) => x * x, (a, b) => a + b, 0)(1, 5)'.padEnd(
    MAX_PAD_LEGNTH,
    PAD_CHAR
  ),
  '| Result:',
  mapReduce(
    (x) => x * x,
    (a, b) => a + b,
    0
  )(1, 5),
  'should be',
  55
);
console.log(
  'mapReduce((x) => x, (a, b) => a * b, 1)(1, 5)'.padEnd(
    MAX_PAD_LEGNTH,
    PAD_CHAR
  ),
  '| Result:',
  mapReduce(
    (x) => x,
    (a, b) => a * b,
    1
  )(1, 5),
  'should be',
  120
);
console.log(
  'mapReduce((x) => x * x, (a, b) => a * b, 1)(1, 5)'.padEnd(
    MAX_PAD_LEGNTH,
    PAD_CHAR
  ),
  '| Result:',
  mapReduce(
    (x) => x * x,
    (a, b) => a * b,
    1
  )(1, 5),
  'should be',
  14400
);
console.log('---');
console.log(
  'mapReduce2((a, b) => a + b, 0)((x) => x)(1, 5)'.padEnd(
    MAX_PAD_LEGNTH,
    PAD_CHAR
  ),
  '| Result:',
  mapReduce2((a, b) => a + b, 0)((x) => x)(1, 5),
  'should be',
  15
);
console.log(
  'mapReduce2((a, b) => a + b, 0)((x) => x * x)(1, 5)'.padEnd(
    MAX_PAD_LEGNTH,
    PAD_CHAR
  ),
  '| Result:',
  mapReduce2((a, b) => a + b, 0)((x) => x * x)(1, 5),
  'should be',
  55
);
console.log(
  'mapReduce2((a, b) => a * b, 1)((x) => x)(1, 5)'.padEnd(
    MAX_PAD_LEGNTH,
    PAD_CHAR
  ),
  '| Result:',
  mapReduce2((a, b) => a * b, 1)((x) => x)(1, 5),
  'should be',
  120
);
console.log(
  'mapReduce2((a, b) => a * b, 1)((x) => x * x)(1, 5)'.padEnd(
    MAX_PAD_LEGNTH,
    PAD_CHAR
  ),
  '| Result:',
  mapReduce2((a, b) => a * b, 1)((x) => x * x)(1, 5),
  'should be',
  14400
);
console.log('---');
console.log(
  'sumMap2((x) => x)(1, 5)'.padEnd(MAX_PAD_LEGNTH, PAD_CHAR),
  '| Result:',
  sumMap2((x) => x)(1, 5),
  'should be',
  15
);
console.log(
  'sumMap2((x) => x * x)(1, 5)'.padEnd(MAX_PAD_LEGNTH, PAD_CHAR),
  '| Result:',
  sumMap2((x) => x * x)(1, 5),
  'should be',
  55
);
console.log(
  'prodMap2((x) => x)(1, 5)'.padEnd(MAX_PAD_LEGNTH, PAD_CHAR),
  '| Result:',
  prodMap2((x) => x)(1, 5),
  'should be',
  120
);
console.log(
  'prodMap2((x) => x * x)(1, 5)'.padEnd(MAX_PAD_LEGNTH, PAD_CHAR),
  '| Result:',
  prodMap2((x) => x * x)(1, 5),
  'should be',
  14400
);
console.log('====================================');
