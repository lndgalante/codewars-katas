const isToday = require('.')

test('Test 1', () => {
  expect(isToday(new Date())).toBeTrue()
})

test('Test 2', () => {
  const tomorrow = new Date()
  tomorrow.setDate(tomorrow.getDate() + 1)

  expect(isToday(tomorrow)).toBeFalse()
})

test('Test 3', () => {
  const yesterday = new Date()
  yesterday.setDate(yesterday.getDate() - 1)

  expect(isToday(yesterday)).toBeFalse()
})
