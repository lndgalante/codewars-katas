const sixToast = require('.')

test('Test 1', () => {
  expect(sixToast(6)).toBe(0)
})

test('Test 2', () => {
  expect(sixToast(17)).toBe(11)
})

test('Test 3', () => {
  expect(sixToast(3)).toBe(3)
})
