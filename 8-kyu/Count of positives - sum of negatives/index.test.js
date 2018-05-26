const countPositivesSumNegatives = require('.')

test('Test 1', () => {
  expect(
    countPositivesSumNegatives([
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      -11,
      -12,
      -13,
      -14,
      -15,
    ])
  ).toEqual([10, -65])
})

test('Test 2', () => {
  expect(
    countPositivesSumNegatives([
      0,
      2,
      3,
      0,
      5,
      6,
      7,
      8,
      9,
      10,
      -11,
      -12,
      -13,
      -14,
    ])
  ).toEqual([8, -50])
})

test('Test 3', () => {
  expect(countPositivesSumNegatives([])).toEqual([])
})

test('Test 4', () => {
  expect(countPositivesSumNegatives(null)).toEqual([])
})
