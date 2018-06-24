const add = require('.')

test('Test 1', () => {
  expect(add('1', 1)).toBeTrue()
})

test('Test 2', () => {
  expect(add(1, '1')).toBeTrue()
})

test('Test 3', () => {
  expect(add(1, '0')).toBeFalse()
})

test('Test 4', () => {
  expect(add('11', 11)).toBeTrue()
})

test('Test 5', () => {
  expect(add(12, 12)).toBeTrue()
})

test('Test 6', () => {
  expect(add(120, '021')).toBeFalse()
})
