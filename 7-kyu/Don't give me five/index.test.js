const dontGiveMeFive = require('./index.js')

test('Test 1', () => {
  expect(dontGiveMeFive(1, 9)).toBe(8)
})

test('Test 2', () => {
  expect(dontGiveMeFive(4, 17)).toBe(12)
})
