const discoverOriginalPrice = require('.')

test('Test 1', () => {
  expect(discoverOriginalPrice(75, 25)).toBe(100)
})

test('Test 2', () => {
  expect(discoverOriginalPrice(25, 75)).toBe(100)
})

test('Test 3', () => {
  expect(discoverOriginalPrice(75.75, 25)).toBe(101)
})
