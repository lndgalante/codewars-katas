const arrayMadness = require('.')

test('Test 1', () => {
  expect(arrayMadness([4, 5, 6], [1, 2, 3])).toBeTrue()
})
