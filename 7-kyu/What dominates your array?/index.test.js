
const dominator = require('.')

test('Test 0', () => {
          expect(dominator([3,4,3,2,3,1,3,3])).toBe(3);
        })

test('Test 1', () => {
          expect(dominator([1,2,3,4,5])).toBe(-1);
        })

test('Test 2', () => {
          expect(dominator([1,1,1,2,2,2])).toBe(-1);
        })

