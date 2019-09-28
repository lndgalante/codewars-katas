const sortTransform = require('.')

test('Test 1', () => {
  expect(sortTransform([111, 112, 113, 114, 115, 113, 114, 110])).toBe('oprn-nors-sron-nors')
})

test('Test 2', () => {
  expect(sortTransform([51, 62, 73, 84, 95, 100, 99, 126])).toBe('3>c~-3>d~-~d>3-3>d~')
})
