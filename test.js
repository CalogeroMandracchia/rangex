'use sctrict';

import range from './built/range.js';

const equal = (a=[], b=[]) => a.toString() == b.toString();
const check = tester => (message="", ...test) => { const res = tester(...test) ? "PASSED" : "FAILED"; console.log(message, res) };
const checkEqual = check(equal);

checkEqual("5", [...range(5)], [0, 1, 2, 3, 4 ] );
checkEqual("-2, 2", [...range(-2, 2)], [-2, -1, 0, 1] );
checkEqual("0, -10, -2", [...range(0, -10, -2)], [0, -2, -4, -6, -8 ] );
checkEqual("0, 0, 0", [...range(0, 0, 0)], [] );
checkEqual("1, 10, 100", [...range(1, 10, 100000)], [1] );
checkEqual("-1, 10, 100", [...range(-1, 10, 100)], [-1] );
checkEqual("100, 90, -2", [...range(100, 90, -2)], [ 100, 98, 96, 94, 92 ] );
checkEqual("-5, 5, 2", [...range(-5, 5, 2)], [-5, -3, -1, 1, 3] );
checkEqual("-8, -2, 2", [...range(-8, -2, 2)], [-8, -6, -4] );