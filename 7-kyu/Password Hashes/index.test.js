const passHash = require('.')

test('Test 1', () => {
  expect(passHash('password')).toBe('5f4dcc3b5aa765d61d8327deb882cf99')
})

test('Test 2', () => {
  expect(passHash('abc123')).toBe('e99a18c428cb38d5f260853678922e03')
})
