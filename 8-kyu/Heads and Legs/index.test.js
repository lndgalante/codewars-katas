const animals = require('.')

test('Test 1', () => {
  expect(animals(72, 200)).toEqual([44, 28])
})

test('Test 2', () => {
  expect(animals(116, 282)).toEqual([91, 25])
})

test('Test 3', () => {
  expect(animals(12, 24)).toEqual([12, 0])
})

test('Test 4', () => {
  expect(animals(6, 24)).toEqual([0, 6])
})

test('Test 5', () => {
  expect(animals(344, 872)).toEqual([252, 92])
})

test('Test 6', () => {
  expect(animals(158, 616)).toEqual([8, 150])
})

test('Test 7', () => {
  expect(animals(158, 616)).toEqual([8, 150])
})

test('Test 8', () => {
  expect(animals(25, 255)).toBe('No solutions')
})

test('Test 9', () => {
  expect(animals(12, 25)).toBe('No solutions')
})

test('Test 10', () => {
  expect(animals(54, 956)).toBe('No solutions')
})

test('Test 11', () => {
  expect(animals(5455, 54956)).toBe('No solutions')
})

test('Test 12', () => {
  expect(animals(0, 0)).toEqual([0, 0])
})

test('Test 13', () => {
  expect(animals(-1, -1)).toBe('No solutions')
})

test('Test 14', () => {
  expect(animals(-45, 5)).toBe('No solutions')
})

test('Test 15', () => {
  expect(animals(500, 0)).toBe('No solutions')
})

test('Test 16', () => {
  expect(animals(0, 500)).toBe('No solutions')
})

test('Test 17', () => {
  expect(animals(5, -55)).toBe('No solutions')
})
