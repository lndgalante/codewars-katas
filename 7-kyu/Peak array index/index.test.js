
const peak = require('.')

test('Test 1', () => {
          expect(peak([1,2,3,5,3,2,1])).toBe(3);
        })

test('Test 2', () => {
          expect(peak([1,12,3,3,6,3,1])).toBe(2);
        })

test('Test 3', () => {
          expect(peak([10,20,30,40])).toBe(-1);
        })

