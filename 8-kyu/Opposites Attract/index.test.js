const lovefunc = require('./index.js')

test('Test 1', () => {
  expect(lovefunc(1, 4)).toBeTruthy()
})

test('Test 2', () => {
  expect(lovefunc(2, 2)).toBeFalsy()
})

test('Test 3', () => {
  expect(lovefunc(0, 1)).toBeTruthy()
})

test('Test 4', () => {
  expect(lovefunc(0, 0)).toBeFalsy()
})
