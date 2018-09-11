const numbersWithDigitInside = require('.')

test('Test 1', () => {
  expect(numbersWithDigitInside(5, 6)).toEqual([0, 0, 0])
})

test('Test 2', () => {
  expect(numbersWithDigitInside(7, 6)).toEqual([1, 6, 6])
})

test('Test 3', () => {
  expect(numbersWithDigitInside(11, 1)).toEqual([3, 22, 110])
})

test('Test 4', () => {
  expect(numbersWithDigitInside(20, 0)).toEqual([2, 30, 200])
})

test('Test 5', () => {
  expect(numbersWithDigitInside(44, 4)).toEqual([9, 286, 5955146588160])
})
