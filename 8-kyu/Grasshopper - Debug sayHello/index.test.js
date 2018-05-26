const sayHello = require('.')

test('Test 1', () => {
  expect(sayHello('Mr. Spock')).toBe('Hello, Mr. Spock')
})

test('Test 2', () => {
  expect(sayHello('Captain Kirk')).toBe('Hello, Captain Kirk')
})

test('Test 3', () => {
  expect(sayHello('Liutenant Uhura')).toBe('Hello, Liutenant Uhura')
})

test('Test 4', () => {
  expect(sayHello('Dr. McCoy')).toBe('Hello, Dr. McCoy')
})
