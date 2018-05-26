const correct = require('.')

test('Test 1', () => {
  expect(correct('L0ND0N')).toBe('LONDON')
})

test('Test 2', () => {
  expect(correct('DUBL1N')).toBe('DUBLIN')
})

test('Test 3', () => {
  expect(correct('51NGAP0RE')).toBe('SINGAPORE')
})

test('Test 4', () => {
  expect(correct('BUDAPE5T')).toBe('BUDAPEST')
})

test('Test 5', () => {
  expect(correct('PAR15')).toBe('PARIS')
})
