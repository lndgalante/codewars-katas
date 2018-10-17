/* eslint unicorn/new-for-builtins: 0 */
/* eslint no-new-wrappers: 0 */

const isAN = require('.')

test('Test 1', () => {
  expect(isAN(3)).toBeTrue()
})

test('Test 2', () => {
  expect(isAN('4')).toBeFalse()
})

test('Test 3', () => {
  expect(isAN(Number(4))).toBeTrue()
})

test('Test 4', () => {
  expect(isAN(new Number(4))).toBeTrue()
})

test('Test 5', () => {
  expect(isAN(new Number('d'))).toBeFalse()
})

test('Test 6', () => {
  expect(isAN(null)).toBeFalse()
})

test('Test 7', () => {
  expect(isAN([])).toBeFalse()
})
