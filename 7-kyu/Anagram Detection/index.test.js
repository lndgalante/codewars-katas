const isAnagram = require('.')

test('Test 1', () => {
  expect(isAnagram('foefet', 'toffee')).toBeTruthy()
})

test('Test 2', () => {
  expect(isAnagram('Buckethead', 'DeathCubeK')).toBeTruthy()
})

test('Test 3', () => {
  expect(isAnagram('Twoo', 'WooT')).toBeTruthy()
})

test('Test 4', () => {
  expect(isAnagram('dumble', 'bumble')).toBeFalsy()
})

test('Test 5', () => {
  expect(isAnagram('ound', 'round')).toBeFalsy()
})

test('Test 6', () => {
  expect(isAnagram('apple', 'pale')).toBeFalsy()
})
