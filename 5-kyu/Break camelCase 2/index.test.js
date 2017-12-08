const camelCase = require('./index.js')

test('Test 1', () => {
  expect('test case'.camelCase()).toBe('TestCase')
})

test('Test 2', () => {
  expect('camel case method'.camelCase()).toBe('CamelCaseMethod')
})

test('Test 3', () => {
  expect('say hello '.camelCase()).toBe('SayHello')
})

test('Test 4', () => {
  expect(' camel case word'.camelCase()).toBe('CamelCaseWord')
})

test('Test 5', () => {
  expect(''.camelCase()).toBe('')
})
