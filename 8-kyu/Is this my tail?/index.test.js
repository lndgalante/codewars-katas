const correctTail = require('./index.js')

test('Test 1', () => {
  expect(correctTail('Fox', 'x')).toBeTruthy()
})

test('Test 2', () => {
  expect(correctTail('Rhino', 'o')).toBeTruthy()
})

test('Test 3', () => {
  expect(correctTail('Meerkat', 't')).toBeTruthy()
})
