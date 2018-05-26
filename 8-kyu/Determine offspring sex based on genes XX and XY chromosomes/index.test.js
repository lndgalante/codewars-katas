const chromosomeCheck = require('.')

test('Test 1', () => {
  expect(chromosomeCheck('XY')).toBe(
    "Congratulations! You're going to have a son."
  )
})

test('Test 2', () => {
  expect(chromosomeCheck('XX')).toBe(
    "Congratulations! You're going to have a daughter."
  )
})
