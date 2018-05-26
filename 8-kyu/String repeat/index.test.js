const repeatStr = require('.')

test('Test 1', () => {
  expect(repeatStr(6, 'I')).toBe('IIIIII')
})

test('Test 2', () => {
  expect(repeatStr(5, 'Hello')).toBe('HelloHelloHelloHelloHello')
})

test('Test 3', () => {
  expect(repeatStr(3, '*')).toBe('***')
})

test('Test 4', () => {
  expect(repeatStr(5, '#')).toBe('#####')
})

test('Test 5', () => {
  expect(repeatStr(2, 'ha ')).toBe('ha ha ')
})
