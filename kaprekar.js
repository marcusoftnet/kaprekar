const sortNumber = (num, asc) => {
  const numArr = num.toString().split('');

  const sorted = asc ?
    numArr.sort((a, b) => b-a) :
    numArr.sort((a, b) => a-b);

  return Number.parseInt(sorted.join(''), 10);
}

const makeAscending = (num) => sortNumber(num, true);
const makeDescending = (num) => sortNumber(num, false);
const max = (a, b) => a > b ? a : b;
const min = (a, b) => a < b ? a : b;
const zeroPadStart = (num) => {
  const s = num.toString();
  const len = s.length;
  if(len === 4) return s;
  return new Array(4 - len).fill('0').join('') + s;
};
const zeroPadEnd = (num) => {
  const s = num.toString();
  const len = s.length;
  if(len === 4) return s;
  return s + new Array(4 - len).fill('0').join('');
};
const calculate = (a, b) => {
  const first = max(a, b);
  const second = min(a, b);

  return Number.parseInt(zeroPadEnd(first), 10) - second;
};
const makeCalcString = (a, b, result) => `${zeroPadEnd(max(a, b))} - ${zeroPadStart(min(a, b))} = ${zeroPadStart(result)}`;

const checkConstant = (num, acc) => {

  const desc = makeDescending(num);
  const asc = makeAscending(num);

  const result = calculate(desc, asc);
  const calcString = makeCalcString(desc, asc, result);

  let calcResultsArr = acc || [];
  calcResultsArr = [...calcResultsArr, calcString];

  if(result === 6174) return calcResultsArr.join('\n').trim('\n');

  return checkConstant(result, calcResultsArr);
}

module.exports = {
  makeAscending,
  makeDescending,
  checkConstant,
  zeroPadStart,
  zeroPadEnd,
}