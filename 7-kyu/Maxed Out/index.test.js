const maxedOut = require('.')

test('Test 1', () => {
  expect(maxedOut([1, 2])).toBe(9)
})

test('Test 2', () => {
  expect(maxedOut([-530, 230, 5600, 40, 5, 7200])).toBe(548727354125)
})

test('Test 3', () => {
  expect(maxedOut([7600, 32300, 66700, 22200, 4554, 323000, 5555])).toBe("You’ve pushed me to the max!")
})
