const solve = require('.')

test('Test 1', () => {
  expect(solve([15, 11, 10, 7, 12])).toEqual([15, 7, 12, 10, 11])
})

test('Test 2', () => {
  expect(solve([91, 75, 86, 14, 82])).toEqual([91, 14, 86, 75, 82])
})

test('Test 3', () => {
  expect(solve([84, 79, 76, 61, 78])).toEqual([84, 61, 79, 76, 78])
})

test('Test 4', () => {
  expect(solve([52, 77, 72, 44, 74, 76, 40])).toEqual([77, 40, 76, 44, 74, 52, 72])
})

test('Test 5', () => {
  expect(solve([1, 6, 9, 4, 3, 7, 8, 2])).toEqual([9, 1, 8, 2, 7, 3, 6, 4])
})

test('Test 6', () => {
  expect(solve([78, 79, 52, 87, 16, 74, 31, 63, 80])).toEqual([87, 16, 80, 31, 79, 52, 78, 63, 74])
})
