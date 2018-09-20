const myParseInt = require('.')

test('Test 1', () => {
  expect(myParseInt('1')).toBe(1)
})

test('Test 2', () => {
  expect(myParseInt('  1 ')).toBe(1)
})

test('Test 3', () => {
  expect(myParseInt('08')).toBe(8)
})
