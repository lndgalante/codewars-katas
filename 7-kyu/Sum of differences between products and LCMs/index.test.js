
const sumDifferencesBetweenProductsAndLCMs = require('.')

test('Test 1', () => {
          expect(sumDifferencesBetweenProductsAndLCMs([[15,18], [4,5], [12,60]])).toBe(840);
        })

test('Test 2', () => {
          expect(sumDifferencesBetweenProductsAndLCMs([[1,1], [0,0], [13,91]])).toBe(1092);
        })

test('Test 3', () => {
          expect(sumDifferencesBetweenProductsAndLCMs([[15,7], [4,5], [19,60]])).toBe(0);
        })

test('Test 4', () => {
          expect(sumDifferencesBetweenProductsAndLCMs([[20,50], [10,10], [50,20]])).toBe(1890);
        })

test('Test 5', () => {
          expect(sumDifferencesBetweenProductsAndLCMs([])).toBe(0);
        })

