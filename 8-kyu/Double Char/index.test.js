const doubleChar = require('.')

test('Test 1', () => {
  expect(doubleChar('abcd')).toBe('aabbccdd')
})

test('Test 2', () => {
  expect(doubleChar('Adidas')).toBe('AAddiiddaass')
})

test('Test 3', () => {
  expect(doubleChar('1337')).toBe('11333377')
})

test('Test 4', () => {
  expect(doubleChar('illuminati')).toBe('iilllluummiinnaattii')
})

test('Test 5', () => {
  expect(doubleChar('123456')).toBe('112233445566')
})

test('Test 6', () => {
  expect(doubleChar('%^&*(')).toBe('%%^^&&**((')
})
