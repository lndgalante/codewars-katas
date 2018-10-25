const explode = require('.')

test('Test 1', () => {
  expect(explode('312')).toBe('333122')
})

test('Test 2', () => {
  expect(explode('102269')).toBe('12222666666999999999')
})
