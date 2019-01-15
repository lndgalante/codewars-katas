const disariumNumber = require('.')

test('Test 1', () => {
  expect(disariumNumber(89)).toBe('Disarium !!')
})

test('Test 2', () => {
  expect(disariumNumber(564)).toBe('Not !!')
})

test('Test 3', () => {
  expect(disariumNumber(1024)).toBe('Not !!')
})

test('Test 4', () => {
  expect(disariumNumber(135)).toBe('Disarium !!')
})

test('Test 5', () => {
  expect(disariumNumber(136586)).toBe('Not !!')
})
