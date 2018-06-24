const isValidWalk = require('.')

test('Test 1', () => {
  expect(
    isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's'])
  ).toBeTrue()
})

test('Test 2', () => {
  expect(
    isValidWalk(['w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e'])
  ).toBeFalse()
})

test('Test 3', () => {
  expect(isValidWalk(['w'])).toBeFalse()
})

test('Test 4', () => {
  expect(
    isValidWalk(['n', 'n', 'n', 's', 'n', 's', 'n', 's', 'n', 's'])
  ).toBeFalse()
})
