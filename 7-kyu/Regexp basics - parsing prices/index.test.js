/* eslint no-unused-vars: 0 */
/* eslint no-extend-native: 0 */
/* eslint no-use-extend-native/no-use-extend-native: 0 */

const String = require('.')

test('Test 1', () => {
  expect(''.toCents()).toBeNull()
})

test('Test 2', () => {
  expect('1'.toCents()).toBeNull()
})

test('Test 3', () => {
  expect('1.23'.toCents()).toBeNull()
})

test('Test 4', () => {
  expect('$1'.toCents()).toBeNull()
})

test('Test 5', () => {
  expect('$1.23'.toCents()).toBe(123)
})

test('Test 6', () => {
  expect('$99.99'.toCents()).toBe(9999)
})

test('Test 7', () => {
  expect('$12345678.90'.toCents()).toBe(1234567890)
})

test('Test 8', () => {
  expect('$9.69'.toCents()).toBe(969)
})

test('Test 9', () => {
  expect('$9.70'.toCents()).toBe(970)
})

test('Test 10', () => {
  expect('$9.71'.toCents()).toBe(971)
})

test('Test 11', () => {
  expect('$1.23\n'.toCents()).toBeNull()
})

test('Test 12', () => {
  expect('\n$1.23'.toCents()).toBeNull()
})

test('Test 13', () => {
  expect('$0.69'.toCents()).toBe(69)
})

test('Test 14', () => {
  expect('$9.69$4.3.7'.toCents()).toBeNull()
})
