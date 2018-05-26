const swapValues = require('.')

test('Test 1', () => {
  expect(swapValues([1, 2])).toEqual([2, 1])
})
