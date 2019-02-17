const setAlarm = require('.')

test('Test 1', () => {
  expect(setAlarm(true, true)).toBeFalse()
})

test('Test 2', () => {
  expect(setAlarm(false, true)).toBeFalse()
})

test('Test 3', () => {
  expect(setAlarm(true, false)).toBeTrue()
})
