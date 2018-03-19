const apple = require('./index.js')

test('Test 1', () => {
  expect(apple('50')).toBe("It's hotter than the sun!!")
})

test('Test 2', () => {
  expect(apple(4)).toBe('Help yourself to a honeycomb Yorkie for the glovebox.')
})
