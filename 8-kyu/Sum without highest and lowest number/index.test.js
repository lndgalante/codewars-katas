const sumArray = require('./index.js')

test('Test 1', () => {
  expect(sumArray([6, 2, 1, 8, 10])).toBe(16)
})
