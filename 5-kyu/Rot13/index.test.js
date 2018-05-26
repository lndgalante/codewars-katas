const rot13 = require('.')

test('Test 1', () => {
  expect(rot13('test')).toBe('grfg')
})

test('Test 2', () => {
  expect(rot13('Test')).toBe('Grfg')
})
