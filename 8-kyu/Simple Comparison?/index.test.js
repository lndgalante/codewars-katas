const add = require('.')

test('Test 1', () => {
  expect(add('1', 1)).toBeTruthy()
})

test('Test 2', () => {
  expect(add(1, '1')).toBeTruthy()
})

test('Test 3', () => {
  expect(add(1, '0')).toBeFalsy()
})

test('Test 4', () => {
  expect(add('11', 11)).toBeTruthy()
})

test('Test 5', () => {
  expect(add(12, 12)).toBeTruthy()
})

test('Test 6', () => {
  expect(add(120, '021')).toBeFalsy()
})
