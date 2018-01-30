const websites = require('./index.js')

test('Test 1', () => {
  expect(websites.every(el => el === 'codewars')).toBeTruthy()
})
