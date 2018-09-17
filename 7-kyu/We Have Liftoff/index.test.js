const liftoff = require('.')

test('Test 1', () => {
  expect(liftoff([2, 8, 10, 9, 1, 3, 4, 7, 6, 5])).toBe(
    '10 9 8 7 6 5 4 3 2 1 liftoff!'
  )
})
