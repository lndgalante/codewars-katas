const obfuscate = require('.')

test('Test 1', () => {
  expect(obfuscate('test@123.com')).toBe('test [at] 123 [dot] com')
})

test('Test 2', () => {
  expect(obfuscate('Code_warrior@foo.ac.uk')).toBe(
    'Code_warrior [at] foo [dot] ac [dot] uk'
  )
})
