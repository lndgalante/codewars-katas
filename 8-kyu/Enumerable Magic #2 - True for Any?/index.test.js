const any = require('./index.js')

test('Test 1', () => {
  expect(any([1, 2, 3, 4], v => v > 3)).toBeTruthy()
})

test('Test 2', () => {
  expect(any([1, 2, 3, 4], v => v > 4)).toBeFalsy()
})
