const lovefunc = require('.')

test('Test 1', () => {
  expect(lovefunc(1, 4)).toBeTrue()
})

test('Test 2', () => {
  expect(lovefunc(2, 2)).toBeFalse()
})

test('Test 3', () => {
  expect(lovefunc(0, 1)).toBeTrue()
})

test('Test 4', () => {
  expect(lovefunc(0, 0)).toBeFalse()
})
