const printArray = require('./index.js')

test('Test 1', () => {
  expect(printArray([2, 4, 5, 2])).toBe('2,4,5,2')
})
