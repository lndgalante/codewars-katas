const { greetAbe, greetBen } = require('./index.js')

test('Test 1', () => {
  expect(greetAbe()).toBe('Hello, Abe!')
})

test('Test 2', () => {
  expect(greetBen()).toBe('Hello, Ben!')
})
