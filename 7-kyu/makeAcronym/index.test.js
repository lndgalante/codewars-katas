const makeAcronym = require('.')

test('Test 1', () => {
  expect(makeAcronym('My aunt sally')).toBe('MAS')
})

test('Test 2', () => {
  expect(makeAcronym('42')).toBe('Not letters')
})

test('Test 3', () => {
  expect(makeAcronym(64)).toBe('Not a string')
})

test('Test 4', () => {
  expect(makeAcronym([2, 4, 6, 8])).toBe('Not a string')
})
