const websites = require('.')

test('Test 1', () => {
  expect(websites.every(el => el === 'codewars')).toBeTrue()
})
