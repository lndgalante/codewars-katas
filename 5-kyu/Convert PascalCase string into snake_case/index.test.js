const toUnderscore = require('./index.js')

test('Test 1', () => {
  expect(toUnderscore('TestController')).toBe('test_controller')
})

test('Test 2', () => {
  expect(toUnderscore('MoviesAndBooks')).toBe('movies_and_books')
})

test('Test 3', () => {
  expect(toUnderscore('App7Test')).toBe('app7_test')
})

test('Test 4', () => {
  expect(toUnderscore(1)).toBe('1')
})
