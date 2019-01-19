const nerdify = require('.')

test('Test 1', () => {
  expect(nerdify('Fund4m3nt41s')).toBe('Fund4m3nt41s')
})

test('Test 2', () => {
  expect(nerdify('Seven')).toBe('S3v3n')
})

test('Test 3', () => {
  expect(nerdify('Los Angeles')).toBe('Los 4ng313s')
})
