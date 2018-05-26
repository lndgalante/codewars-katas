const humanYearsCatYearsDogYears = require('.')

test('Test 1', () => {
  expect(humanYearsCatYearsDogYears(1)).toEqual([1, 15, 15])
})

test('Test 2', () => {
  expect(humanYearsCatYearsDogYears(2)).toEqual([2, 24, 24])
})

test('Test 3', () => {
  expect(humanYearsCatYearsDogYears(10)).toEqual([10, 56, 64])
})
