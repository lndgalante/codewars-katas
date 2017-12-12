const maskify = require('./index.js')

test('Test 1', () => {
  expect(maskify('4556364607935616')).toBe('############5616')
})

test('Test 2', () => {
  expect(maskify('1')).toBe('1')
})

test('Test 3', () => {
  expect(maskify('11111')).toBe('#1111')
})
