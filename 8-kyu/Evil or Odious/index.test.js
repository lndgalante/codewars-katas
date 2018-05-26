const evil = require('.')

test('Test 1', () => {
  expect(evil(1)).toBe("It's Odious!")
})

test('Test 2', () => {
  expect(evil(2)).toBe("It's Odious!")
})

test('Test 3', () => {
  expect(evil(3)).toBe("It's Evil!")
})
