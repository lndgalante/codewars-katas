
const moveVowel = require('.')

test('Test 1', () => {
          expect(moveVowel("day")).toBe("dya");
        })

test('Test 2', () => {
          expect(moveVowel("apple")).toBe("pplae");
        })

test('Test 3', () => {
          expect(moveVowel("peace")).toBe("pceae");
        })

test('Test 4', () => {
          expect(moveVowel("maker")).toBe("mkrae");
        })

