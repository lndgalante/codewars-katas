const stringMerge = require('.')

test('Test 1', () => {
  expect(stringMerge('person', 'here', 'e')).toBe('pere')
})

test('Test 2', () => {
  expect(stringMerge('apowiejfoiajsf', 'iwahfeijouh', 'j')).toBe('apowiejouh')
})

test('Test 3', () => {
  expect(stringMerge('abcdefxxxyzz', 'abcxxxyyyxyzz', 'x')).toBe('abcdefxxxyyyxyzz')
})

test('Test 4', () => {
  expect(stringMerge('12345654321', '123456789', '6')).toBe('123456789')
})

test('Test 5', () => {
  expect(stringMerge('JiOdIdA4', 'oopopopoodddasdfdfsd', 'd')).toBe('JiOdddasdfdfsd')
})

test('Test 6', () => {
  expect(stringMerge('incredible', 'people', 'e')).toBe('increople')
})
