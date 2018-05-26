const replace = require('.')

test('Test 1', () => {
  expect(replace('Hi!')).toBe('H!!')
})

test('Test 2', () => {
  expect(replace('!Hi! Hi!')).toBe('!H!! H!!')
})

test('Test 3', () => {
  expect(replace('aeiou')).toBe('!!!!!')
})

test('Test 4', () => {
  expect(replace('ABCDE')).toBe('!BCD!')
})
