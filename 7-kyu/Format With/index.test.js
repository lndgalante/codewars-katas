/* eslint no-unused-vars: 0 */
/* eslint no-extend-native: 0 */
/* eslint no-use-extend-native/no-use-extend-native: 0 */

const String = require('.')

test('Test 1', () => {
  expect('Hello {0}'.formatWith('Codewars')).toBe('Hello Codewars')
})

test('Test 2', () => {
  expect('{0} is a {1} {2}'.formatWith('Today', 'good', 'day')).toBe('Today is a good day')
})

test('Test 3', () => {
  expect('{0} + {0} = {1}'.formatWith('1', '2')).toBe('1 + 1 = 2')
})

test('Test 4', () => {
  expect('Hello {0}. This {1} is bring a {2} to work day'.formatWith('World', 'Monday', 'dog')).toBe(
    'Hello World. This Monday is bring a dog to work day'
  )
})
