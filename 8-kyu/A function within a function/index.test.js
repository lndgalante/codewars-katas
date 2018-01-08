const always = require('./index.js')

test('Test 1', () => {
  expect(always(3)()).toBe(3)
})

test('Test 2', () => {
  expect(always(true)()).toBeTruthy()
})
