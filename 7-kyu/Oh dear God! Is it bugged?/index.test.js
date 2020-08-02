const isItBugged = require('.')

test('Test 1', () => {
  expect(isItBugged('01_09_2016 01:20')).toBeFalse()
})

test('Test 2', () => {
  expect(isItBugged('14-10-1066 12:00')).toBeTrue()
})
