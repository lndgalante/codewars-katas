const correctTail = require('.')

test('Test 1', () => {
  expect(correctTail('Fox', 'x')).toBeTrue()
})

test('Test 2', () => {
  expect(correctTail('Rhino', 'o')).toBeTrue()
})

test('Test 3', () => {
  expect(correctTail('Meerkat', 't')).toBeTrue()
})
