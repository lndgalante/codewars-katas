const logicalCalc = require('./index.js')

test('Test 1', () => {
  expect(logicalCalc([true, true, true, false], 'AND')).toBeFalsy()
})

test('Test 2', () => {
  expect(logicalCalc([true, true, true, false], 'OR')).toBeTruthy()
})

test('Test 3', () => {
  expect(logicalCalc([true, true, true, false], 'XOR')).toBeTruthy()
})

test('Test 4', () => {
  expect(logicalCalc([true, true, false, false], 'AND')).toBeFalsy()
})

test('Test 5', () => {
  expect(logicalCalc([true, true, false, false], 'OR')).toBeTruthy()
})

test('Test 6', () => {
  expect(logicalCalc([true, true, false, false], 'XOR')).toBeFalsy()
})

test('Test 7', () => {
  expect(logicalCalc([true, false, false, false], 'AND')).toBeFalsy()
})

test('Test 8', () => {
  expect(logicalCalc([true, false, false, false], 'OR')).toBeTruthy()
})

test('Test 9', () => {
  expect(logicalCalc([true, false, false, false], 'XOR')).toBeTruthy()
})

test('Test 10', () => {
  expect(logicalCalc([true, true], 'AND')).toBeTruthy()
})

test('Test 11', () => {
  expect(logicalCalc([true, true], 'OR')).toBeTruthy()
})

test('Test 12', () => {
  expect(logicalCalc([true, true], 'XOR')).toBeFalsy()
})

test('Test 13', () => {
  expect(logicalCalc([false, false], 'AND')).toBeFalsy()
})

test('Test 14', () => {
  expect(logicalCalc([false, false], 'OR')).toBeFalsy()
})

test('Test 15', () => {
  expect(logicalCalc([false, false], 'XOR')).toBeFalsy()
})

test('Test 16', () => {
  expect(logicalCalc([false], 'AND')).toBeFalsy()
})

test('Test 17', () => {
  expect(logicalCalc([false], 'OR')).toBeFalsy()
})

test('Test 18', () => {
  expect(logicalCalc([false], 'XOR')).toBeFalsy()
})

test('Test 19', () => {
  expect(logicalCalc([true], 'AND')).toBeTruthy()
})

test('Test 20', () => {
  expect(logicalCalc([true], 'OR')).toBeTruthy()
})

test('Test 21', () => {
  expect(logicalCalc([true], 'XOR')).toBeTruthy()
})
