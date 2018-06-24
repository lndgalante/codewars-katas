const check = require('.')

test('Test 1', () => {
  expect(check([66, 101], 66)).toBeTrue()
})

test('Test 2', () => {
  expect(check([80, 117, 115, 104, 45, 85, 112, 115], 45)).toBeTrue()
})

test('Test 3', () => {
  expect(check(['t', 'e', 's', 't'], 'e')).toBeTrue()
})

test('Test 4', () => {
  expect(check(['what', 'a', 'great', 'kata'], 'kat')).toBeFalse()
})
