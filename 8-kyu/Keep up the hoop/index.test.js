const hoopCount = require('.')

test('Test 1', () => {
  expect(hoopCount(3)).toBe('Keep at it until you get it')
})

test('Test 2', () => {
  expect(hoopCount(11)).toBe('Great, now move on to tricks')
})
