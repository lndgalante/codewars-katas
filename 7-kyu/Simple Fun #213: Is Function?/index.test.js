const isFunction = require('.')

test('Test 1', () => {
  expect(isFunction([[0.5, 1.5], [2.5, 3.5]])).toBeTrue()
})

test('Test 2', () => {
  expect(isFunction([[5, 1], [2.5, 3.4], [5, 6], [7, 2]])).toBeFalse()
})

test('Test 3', () => {
  expect(isFunction([[4, 5], [5, 5], [4, 5]])).toBeTrue()
})

test('Test 4', () => {
  expect(
    isFunction([[-86, -4], [72, 10], [-8, 7], [-75, 1], [-47, -7], [9, -10], [-69, 4], [10, -10], [90, -3], [12, -3]])
  ).toBeTrue()
})
