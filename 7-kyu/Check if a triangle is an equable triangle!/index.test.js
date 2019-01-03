const equableTriangle = require('.')

test('Test 1', () => {
  expect(equableTriangle(5, 12, 13)).toBeTrue()
})

test('Test 2', () => {
  expect(equableTriangle(2, 3, 4)).toBeFalse()
})

test('Test 3', () => {
  expect(equableTriangle(6, 8, 10)).toBeTrue()
})

test('Test 4', () => {
  expect(equableTriangle(7, 15, 20)).toBeTrue()
})

test('Test 5', () => {
  expect(equableTriangle(17, 17, 30)).toBeFalse()
})

test('Test 6', () => {
  expect(equableTriangle(7, 10, 12)).toBeFalse()
})

test('Test 7', () => {
  expect(equableTriangle(6, 11, 12)).toBeFalse()
})

test('Test 8', () => {
  expect(equableTriangle(25, 25, 45)).toBeFalse()
})

test('Test 9', () => {
  expect(equableTriangle(13, 37, 30)).toBeFalse()
})

test('Test 10', () => {
  expect(equableTriangle(6, 25, 29)).toBeTrue()
})

test('Test 11', () => {
  expect(equableTriangle(10, 11, 18)).toBeFalse()
})

test('Test 12', () => {
  expect(equableTriangle(73, 9, 80)).toBeFalse()
})

test('Test 13', () => {
  expect(equableTriangle(12, 35, 37)).toBeFalse()
})

test('Test 14', () => {
  expect(equableTriangle(120, 109, 13)).toBeFalse()
})
