const processArray = require('.')

test('Test 1', () => {
  expect(processArray([4, 8, 2, 7, 5], a => a * 2)).toEqual([8, 16, 4, 14, 10])
})

test('Test 2', () => {
  expect(processArray([7, 8, 9, 1, 2], a => a + 5)).toEqual([12, 13, 14, 6, 7])
})
