const seven = require('.')

test('Test 1', () => {
  expect(seven(1603)).toEqual([7, 2])
})

test('Test 2', () => {
  expect(seven(371)).toEqual([35, 1])
})

test('Test 3', () => {
  expect(seven(483)).toEqual([42, 1])
})
