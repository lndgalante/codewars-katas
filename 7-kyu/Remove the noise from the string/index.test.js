const removeNoise = require('.')

test('Test 1', () => {
  const test1 = 'h%e&·%$·llo w&%or&$l·$%d'
  expect(removeNoise(test1)).toBe('hello world')
})
