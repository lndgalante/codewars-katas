const switcheroo = require('.')

test('Test 1', () => {
  expect(switcheroo('abc')).toBe('bac')
})

test('Test 2', () => {
  expect(switcheroo('aaabcccbaaa')).toBe('bbbacccabbb')
})

test('Test 3', () => {
  expect(switcheroo('ccccc')).toBe('ccccc')
})
