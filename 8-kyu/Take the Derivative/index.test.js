const derive = require('./index.js')

test('Test 1', () => {
  expect(derive(7, 8)).toBe('56x^7')
})

test('Test 2', () => {
  expect(derive(5, 9)).toBe('45x^8')
})
