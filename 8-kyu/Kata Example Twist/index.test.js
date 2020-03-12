const websites = require('.')

test('Test 1', () => {
  expect(websites.every(element => element === 'codewars')).toBeTrue()
})
