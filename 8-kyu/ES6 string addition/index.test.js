const joinStrings = require('.')

test('Test 1', () => {
  expect(joinStrings('string1', 'string2')).toBe('string1 string2')
})

test('Test 2', () => {
  expect(joinStrings('testing', 'testing')).toBe('testing testing')
})

test('Test 3', () => {
  expect(joinStrings(134, 234)).toBe('134 234')
})
