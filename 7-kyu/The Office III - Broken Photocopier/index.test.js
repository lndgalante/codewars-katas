const broken = require('.')

test('Test 1', () => {
  expect(broken('1')).toBe('0')
})

test('Test 2', () => {
  expect(broken('10000000101101111110011001000')).toBe('01111111010010000001100110111')
})

test('Test 3', () => {
  expect(broken('100010')).toBe('011101')
})
