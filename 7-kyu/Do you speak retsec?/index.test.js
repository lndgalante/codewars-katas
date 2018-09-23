const reverseByCenter = require('.')

test('Test 1', () => {
  expect(reverseByCenter('secret')).toBe('retsec')
})

test('Test 2', () => {
  expect(reverseByCenter('agent')).toBe('nteag')
})

test('Test 3', () => {
  expect(reverseByCenter('raw')).toBe('war')
})

test('Test 4', () => {
  expect(reverseByCenter('onion')).toBe('onion')
})
