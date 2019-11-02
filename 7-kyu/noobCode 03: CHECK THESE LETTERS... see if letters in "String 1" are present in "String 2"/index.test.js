const letterCheck = require('.')

test('Test 1', () => {
  expect(letterCheck(['trances', 'nectar'])).toBeTrue()
})

test('Test 2', () => {
  expect(letterCheck(['THE EYES', 'they see'])).toBeTrue()
})

test('Test 3', () => {
  expect(letterCheck(['assert', 'staring'])).toBeFalse()
})

test('Test 4', () => {
  expect(letterCheck(['arches', 'later'])).toBeFalse()
})

test('Test 5', () => {
  expect(letterCheck(['dale', 'caller'])).toBeFalse()
})

test('Test 6', () => {
  expect(letterCheck(['parses', 'parsecs'])).toBeFalse()
})

test('Test 7', () => {
  expect(letterCheck(['replays', 'adam'])).toBeFalse()
})

test('Test 8', () => {
  expect(letterCheck(['mastering', 'streaming'])).toBeTrue()
})

test('Test 9', () => {
  expect(letterCheck(['drapes', 'compadres'])).toBeFalse()
})

test('Test 10', () => {
  expect(letterCheck(['deltas', 'slated'])).toBeTrue()
})
