const pitchClass = require('.')

test('Test 1', () => {
  expect(pitchClass('D')).toBe(2)
})

test('Test 2', () => {
  expect(pitchClass('D#')).toBe(3)
})

test('Test 3', () => {
  expect(pitchClass('Ab')).toBe(8)
})
