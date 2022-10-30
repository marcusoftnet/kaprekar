const assert = require('assert');
const {makeDescending, makeAscending, checkConstant, zeroPadStart, zeroPadEnd} = require('./kaprekar')

describe('kaprekars constant', () => {
  describe('flips a number in ascending order', () => {
    it('1234 becomes 4321', () => {
      assert.strictEqual(makeAscending(1234), 4321);
    });
    it('9876 becomes 9876', () => {
      assert.strictEqual(makeAscending(9876), 9876);
    });
    it('7325 becomes 7532', () => {
      assert.strictEqual(makeAscending(7325), 7532);
    });
  });
  describe('flips a number in descending order', () => {
    it('1234 becomes 4321', () => {
      assert.strictEqual(makeDescending(1234), 1234);
    });
    it('9876 becomes 9876', () => {
      assert.strictEqual(makeDescending(9876), 6789);
    });
    it('7325 becomes 7532', () => {
      assert.strictEqual(makeDescending(7325), 2357);
    });
  });


  describe('zero pad start', () => {
    it('6174 becomes "6174"', () => {
      assert.strictEqual(zeroPadStart(6174), '6174');
    });
    it('174 becomes "0174"', () => {
      assert.strictEqual(zeroPadStart(174), '0174');
    });
    it('74 becomes "0074"', () => {
      assert.strictEqual(zeroPadStart(74), '0074');
    });
    it('4 becomes "0004"', () => {
      assert.strictEqual(zeroPadStart(4), '0004');
    });
  });

  describe('zero pad end', () => {
    it('6174 becomes "6174"', () => {
      assert.strictEqual(zeroPadEnd(6174), '6174');
    });
    it('174 becomes "1740"', () => {
      assert.strictEqual(zeroPadEnd(174), '1740');
    });
    it('74 becomes "7400"', () => {
      assert.strictEqual(zeroPadEnd(74), '7400');
    });
    it('4 becomes "4000"', () => {
      assert.strictEqual(zeroPadEnd(4), '4000');
    });
  });

  describe('calculations', () => {
    it('6174', () => {
      const expected = `7641 - 1467 = 6174`
      assert.strictEqual(checkConstant(6174), expected);
    });
    it('8532', () => {
      const expected = `8532 - 2358 = 6174`
      assert.strictEqual(checkConstant(8532), expected);
    });
    it('8082', () => {
      const expected = `8820 - 0288 = 8532
8532 - 2358 = 6174`
      assert.strictEqual(checkConstant(8082), expected);
    });
    it('1495', () => {
      const expected = `9541 - 1459 = 8082
8820 - 0288 = 8532
8532 - 2358 = 6174`
      assert.strictEqual(checkConstant(1495), expected);
    });
    it('8273', () => {
      const expected = `8732 - 2378 = 6354
6543 - 3456 = 3087
8730 - 0378 = 8352
8532 - 2358 = 6174`
      assert.strictEqual(checkConstant(8273), expected);
    });
    it('2111', () => {
      const expected = `2111 - 1112 = 0999
9990 - 0999 = 8991
9981 - 1899 = 8082
8820 - 0288 = 8532
8532 - 2358 = 6174`
      assert.strictEqual(checkConstant(2111), expected);
    });
    it('1', () => {
      const expected = `1000 - 0001 = 0999
9990 - 0999 = 8991
9981 - 1899 = 8082
8820 - 0288 = 8532
8532 - 2358 = 6174`
      assert.strictEqual(checkConstant(1), expected);
    });
    it('9985', () => {
      const expected = `9985 - 5899 = 4086
8640 - 0468 = 8172
8721 - 1278 = 7443
7443 - 3447 = 3996
9963 - 3699 = 6264
6642 - 2466 = 4176
7641 - 1467 = 6174`
      assert.strictEqual(checkConstant(9985), expected);
    });

    it.skip('print all solution that have long chains', () => {
      const arr = [];
      for(let i = 0; i < 10000; i++){
        if(i !== 0000 && i !== 1111 && i !== 2222 &&
           i !== 3333 && i !== 4444 && i !== 5555 &&
           i !== 6666 && i !== 7777 && i !== 8888 &&
           i !== 9999) {

            if(checkConstant(i).split(`\n`).length > 6)
            console.log(`${i} leads to \n${checkConstant(i)}`);
        }
      }
    });
  });
});