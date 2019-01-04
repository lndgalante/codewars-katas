const productArray = require('.')

test('Test 1', () => {
  expect(productArray([12, 20])).toEqual([20, 12])
})

test('Test 2', () => {
  expect(productArray([3, 27, 4, 2])).toEqual([216, 24, 162, 324])
})

test('Test 3', () => {
  expect(productArray([13, 10, 5, 2, 9])).toEqual([900, 1170, 2340, 5850, 1300])
})

test('Test 4', () => {
  expect(productArray([16, 17, 4, 3, 5, 2])).toEqual([2040, 1920, 8160, 10880, 6528, 16320])
})
