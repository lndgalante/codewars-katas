const solve = require('.')

test('Test 1', () => {
  expect(solve(['abode', 'ABc', 'xyzD'])).toEqual([4, 3, 1])
})

test('Test 2', () => {
  expect(solve(['abide', 'ABc', 'xyz'])).toEqual([4, 3, 0])
})

test('Test 3', () => {
  expect(solve(['IAMDEFANDJKL', 'thedefgh', 'xyzDEFghijabc'])).toEqual([
    6,
    5,
    7,
  ])
})

test('Test 4', () => {
  expect(solve(['encode', 'abc', 'xyzD', 'ABmD'])).toEqual([1, 3, 1, 3])
})
