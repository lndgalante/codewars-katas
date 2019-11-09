const refactoryString = require('.')

test('Test 1', () => {
  expect(refactoryString('str8ng is he17e')).toBe('string is here')
})

test('Test 2', () => {
  expect(refactoryString('i li10e pro6ramming')).toBe('i like programming')
})
