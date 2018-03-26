const isToday = require('./index.js')

test('Test 1', () => {
  expect(isToday(new Date())).toBeTruthy()
})

test('Test 2', () => {
  const tomorrow = new Date()
  tomorrow.setDate(tomorrow.getDate() + 1)

  expect(isToday(tomorrow)).toBeFalsy()
})

test('Test 3', () => {
  const yesterday = new Date()
  yesterday.setDate(yesterday.getDate() - 1)

  expect(isToday(yesterday)).toBeFalsy()
})
