const printArray = require('.')

test('Test 1', () => {
  expect(printArray([2, 4, 5, 2])).toBe('2,4,5,2')
})
