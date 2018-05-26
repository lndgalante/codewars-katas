const blackAndWhite = require('.')

test('Test 1', () => {
  expect(blackAndWhite(5, 13)).toBe("It's a fake array")
})

test('Test 2', () => {
  expect(blackAndWhite([5, 13])).toBe("It's a black array")
})

test('Test 3', () => {
  expect(blackAndWhite([5, 12])).toBe("It's a white array")
})
