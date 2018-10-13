const rowWeights = require('.')

test('Test 1', () => {
  expect(rowWeights([80])).toEqual([80, 0])
})

test('Test 2', () => {
  expect(rowWeights([100, 50])).toEqual([100, 50])
})

test('Test 3', () => {
  expect(rowWeights([50, 60, 70, 80])).toEqual([120, 140])
})

test('Test 4', () => {
  expect(rowWeights([13, 27, 49])).toEqual([62, 27])
})

test('Test 5', () => {
  expect(rowWeights([70, 58, 75, 34, 91])).toEqual([236, 92])
})

test('Test 6', () => {
  expect(rowWeights([29, 83, 67, 53, 19, 28, 96])).toEqual([211, 164])
})

test('Test 7', () => {
  expect(rowWeights([0])).toEqual([0, 0])
})

test('Test 8', () => {
  expect(rowWeights([100, 51, 50, 100])).toEqual([150, 151])
})

test('Test 9', () => {
  expect(rowWeights([39, 84, 74, 18, 59, 72, 35, 61])).toEqual([207, 235])
})

test('Test 10', () => {
  expect(rowWeights([0, 1, 0])).toEqual([0, 1])
})
