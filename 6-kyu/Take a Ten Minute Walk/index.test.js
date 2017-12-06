const isValidWalk = require('./index.js')

test('Test 1', () => {
  expect(
    isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's'])
  ).toBeTruthy()
})

test('Test 2', () => {
  expect(
    isValidWalk(['w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e'])
  ).toBeFalsy()
})

test('Test 3', () => {
  expect(isValidWalk(['w'])).toBeFalsy()
})

test('Test 4', () => {
  expect(
    isValidWalk(['n', 'n', 'n', 's', 'n', 's', 'n', 's', 'n', 's'])
  ).toBeFalsy()
})
