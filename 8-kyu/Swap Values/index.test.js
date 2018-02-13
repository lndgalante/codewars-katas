const swapValues = require('./index.js')

test('Test 1', () => {
  expect(swapValues([1, 2])).toEqual([2, 1])
})
