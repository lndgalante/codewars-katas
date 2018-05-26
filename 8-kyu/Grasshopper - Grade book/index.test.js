const getGrade = require('.')

test('Test 1', () => {
  expect(getGrade(95, 90, 93)).toBe('A')
})

test('Test 2', () => {
  expect(getGrade(100, 85, 96)).toBe('A')
})

test('Test 3', () => {
  expect(getGrade(92, 93, 94)).toBe('A')
})

test('Test 4', () => {
  expect(getGrade(70, 70, 100)).toBe('B')
})

test('Test 5', () => {
  expect(getGrade(82, 85, 87)).toBe('B')
})

test('Test 6', () => {
  expect(getGrade(84, 79, 85)).toBe('B')
})

test('Test 7', () => {
  expect(getGrade(89, 89, 90)).toBe('B')
})

test('Test 8', () => {
  expect(getGrade(89, 89, 90)).toBe('B')
})

test('Test 9', () => {
  expect(getGrade(70, 70, 70)).toBe('C')
})

test('Test 10', () => {
  expect(getGrade(75, 70, 79)).toBe('C')
})

test('Test 11', () => {
  expect(getGrade(60, 82, 76)).toBe('C')
})

test('Test 12', () => {
  expect(getGrade(65, 70, 59)).toBe('D')
})

test('Test 13', () => {
  expect(getGrade(66, 62, 68)).toBe('D')
})

test('Test 14', () => {
  expect(getGrade(58, 62, 70)).toBe('D')
})

test('Test 15', () => {
  expect(getGrade(44, 55, 52)).toBe('F')
})

test('Test 16', () => {
  expect(getGrade(48, 55, 52)).toBe('F')
})

test('Test 17', () => {
  expect(getGrade(58, 59, 60)).toBe('F')
})
