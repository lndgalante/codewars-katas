const toWeirdCase = require('./index.js')

test('Test 1', () => {
  expect(toWeirdCase('This')).toBe('ThIs')
})

test('Test 2', () => {
  expect(toWeirdCase('is')).toBe('Is')
})

test('Test 3', () => {
  expect(toWeirdCase('This is a test')).toBe('ThIs Is A TeSt')
})
