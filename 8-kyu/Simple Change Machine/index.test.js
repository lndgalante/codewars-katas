const changeMe = require('.')

test('Test 1', () => {
  expect(changeMe('£1')).toBe('20p 20p 20p 20p 20p')
})

test('Test 2', () => {
  expect(changeMe('Money')).toBe('Money')
})
