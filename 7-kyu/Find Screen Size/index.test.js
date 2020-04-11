const findScreenHeight = require('.')

test('Test 1', () => {
  expect(findScreenHeight(1024, '4:3')).toBe('1024x768')
})

test('Test 2', () => {
  expect(findScreenHeight(1280, '16:9')).toBe('1280x720')
})

test('Test 3', () => {
  expect(findScreenHeight(3840, '32:9')).toBe('3840x1080')
})
