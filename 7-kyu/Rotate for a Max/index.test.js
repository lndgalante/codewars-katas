const maxRot = require('.')

test('Test 1', () => {
  expect(maxRot(38458215)).toBe(85821534)
})

test('Test 2', () => {
  expect(maxRot(195881031)).toBe(988103115)
})

test('Test 3', () => {
  expect(maxRot(896219342)).toBe(962193428)
})

test('Test 4', () => {
  expect(maxRot(69418307)).toBe(94183076)
})
