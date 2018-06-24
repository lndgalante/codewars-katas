const logicalCalc = require('.')

test('Test 1', () => {
  expect(logicalCalc([true, true, true, false], 'AND')).toBeFalse()
})

test('Test 2', () => {
  expect(logicalCalc([true, true, true, false], 'OR')).toBeTrue()
})

test('Test 3', () => {
  expect(logicalCalc([true, true, true, false], 'XOR')).toBeTrue()
})

test('Test 4', () => {
  expect(logicalCalc([true, true, false, false], 'AND')).toBeFalse()
})

test('Test 5', () => {
  expect(logicalCalc([true, true, false, false], 'OR')).toBeTrue()
})

test('Test 6', () => {
  expect(logicalCalc([true, true, false, false], 'XOR')).toBeFalse()
})

test('Test 7', () => {
  expect(logicalCalc([true, false, false, false], 'AND')).toBeFalse()
})

test('Test 8', () => {
  expect(logicalCalc([true, false, false, false], 'OR')).toBeTrue()
})

test('Test 9', () => {
  expect(logicalCalc([true, false, false, false], 'XOR')).toBeTrue()
})

test('Test 10', () => {
  expect(logicalCalc([true, true], 'AND')).toBeTrue()
})

test('Test 11', () => {
  expect(logicalCalc([true, true], 'OR')).toBeTrue()
})

test('Test 12', () => {
  expect(logicalCalc([true, true], 'XOR')).toBeFalse()
})

test('Test 13', () => {
  expect(logicalCalc([false, false], 'AND')).toBeFalse()
})

test('Test 14', () => {
  expect(logicalCalc([false, false], 'OR')).toBeFalse()
})

test('Test 15', () => {
  expect(logicalCalc([false, false], 'XOR')).toBeFalse()
})

test('Test 16', () => {
  expect(logicalCalc([false], 'AND')).toBeFalse()
})

test('Test 17', () => {
  expect(logicalCalc([false], 'OR')).toBeFalse()
})

test('Test 18', () => {
  expect(logicalCalc([false], 'XOR')).toBeFalse()
})

test('Test 19', () => {
  expect(logicalCalc([true], 'AND')).toBeTrue()
})

test('Test 20', () => {
  expect(logicalCalc([true], 'OR')).toBeTrue()
})

test('Test 21', () => {
  expect(logicalCalc([true], 'XOR')).toBeTrue()
})
