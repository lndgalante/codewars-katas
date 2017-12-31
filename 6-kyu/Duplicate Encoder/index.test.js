const duplicateEncode = require('./index')

test('Test 1', () => {
  expect(duplicateEncode('din')).toBe('(((')
})

test('Test 2', () => {
  expect(duplicateEncode('recede')).toBe('()()()')
})

test('Test 3', () => {
  expect(duplicateEncode('Success')).toBe(')())())')
})

test('Test 4', () => {
  expect(duplicateEncode('(( @')).toBe('))((')
})
