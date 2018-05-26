const preFizz = require('.')

test('Test 1', () => {
  expect(preFizz(1)).toEqual([1])
})

test('Test 2', () => {
  expect(preFizz(2)).toEqual([1, 2])
})

test('Test 3', () => {
  expect(preFizz(3)).toEqual([1, 2, 3])
})

test('Test 4', () => {
  expect(preFizz(4)).toEqual([1, 2, 3, 4])
})

test('Test 5', () => {
  expect(preFizz(5)).toEqual([1, 2, 3, 4, 5])
})
