const caffeineBuzz = require('./index.js')

test('Test 1', () => {
  expect(caffeineBuzz(1)).toBe('mocha_missing!')
})

test('Test 2', () => {
  expect(caffeineBuzz(3)).toBe('Java')
})

test('Test 3', () => {
  expect(caffeineBuzz(6)).toBe('JavaScript')
})

test('Test 4', () => {
  expect(caffeineBuzz(12)).toBe('CoffeeScript')
})
