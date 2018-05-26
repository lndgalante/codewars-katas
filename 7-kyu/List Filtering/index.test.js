const filterList = require('.')

test('Test 1', () => {
  expect(filterList([1, 2, 'a', 'b'])).toEqual([1, 2])
})

test('Test 2', () => {
  expect(filterList([1, 'a', 'b', 0, 15])).toEqual([1, 0, 15])
})

test('Test 3', () => {
  expect(filterList([1, 2, 'aasf', '1', '123', 123])).toEqual([1, 2, 123])
})
