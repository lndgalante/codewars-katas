const digitize = require('.')

test('Test 1', () => {
  expect(digitize(348597)).toEqual([7, 9, 5, 8, 4, 3])
})

test('Test 2', () => {
  expect(digitize(35231)).toEqual([1, 3, 2, 5, 3])
})
