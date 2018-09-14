const reject = require('.')

test('Test 1', () => {
  expect(reject([1, 2, 3, 4, 5, 6], num => num % 2 === 0)).toEqual([1, 3, 5])
})
