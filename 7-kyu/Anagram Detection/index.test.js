const isAnagram = require('.')

test('Test 1', () => {
  expect(isAnagram('foefet', 'toffee')).toBeTrue()
})

test('Test 2', () => {
  expect(isAnagram('Buckethead', 'DeathCubeK')).toBeTrue()
})

test('Test 3', () => {
  expect(isAnagram('Twoo', 'WooT')).toBeTrue()
})

test('Test 4', () => {
  expect(isAnagram('dumble', 'bumble')).toBeFalse()
})

test('Test 5', () => {
  expect(isAnagram('ound', 'round')).toBeFalse()
})

test('Test 6', () => {
  expect(isAnagram('apple', 'pale')).toBeFalse()
})
