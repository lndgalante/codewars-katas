/* eslint no-unused-vars: 0 */
/* eslint no-extend-native: 0 */
/* eslint no-use-extend-native/no-use-extend-native: 0 */

const isUpperCase = require('.')

test('Test 1', () => {
  expect(''.isUpperCase()).toBeTrue()
})

test('Test 2', () => {
  expect('c'.isUpperCase()).toBeFalse()
})

test('Test 3', () => {
  expect('C'.isUpperCase()).toBeTrue()
})

test('Test 4', () => {
  expect('hello I AM DONALD'.isUpperCase()).toBeFalse()
})

test('Test 5', () => {
  expect('HELLO I AM DONALD'.isUpperCase()).toBeTrue()
})

test('Test 6', () => {
  expect('ACSKLDFJSgSKLDFJSKLDFJ'.isUpperCase()).toBeFalse()
})

test('Test 7', () => {
  expect('Hello World'.isUpperCase()).toBeFalse()
})

test('Test 8', () => {
  expect('hello world'.isUpperCase()).toBeFalse()
})

test('Test 9', () => {
  expect('Hello world'.isUpperCase()).toBeFalse()
})

test('Test 10', () => {
  expect('hello World'.isUpperCase()).toBeFalse()
})

test('Test 11', () => {
  expect('HELLO WORLD'.isUpperCase()).toBeTrue()
})

test('Test 12', () => {
  expect('Bob walks his dog every day.'.isUpperCase()).toBeFalse()
})

test('Test 13', () => {
  expect('Bob walks his dog every day.'.isUpperCase()).toBeFalse()
})

test('Test 14', () => {
  expect('BOB walks his dog every day.'.isUpperCase()).toBeFalse()
})

test('Test 15', () => {
  expect('BOB WALKS HIS DOG EVERY DAY.'.isUpperCase()).toBeTrue()
})

test('Test 16', () => {
  expect('BOB WALKs HIS DOG EVERY DAY.'.isUpperCase()).toBeFalse()
})

test('Test 17', () => {
  expect('#lovewins'.isUpperCase()).toBeFalse()
})

test('Test 18', () => {
  expect('#Lovewins'.isUpperCase()).toBeFalse()
})

test('Test 19', () => {
  expect('#loveWins'.isUpperCase()).toBeFalse()
})

test('Test 20', () => {
  expect('#LoveWins'.isUpperCase()).toBeFalse()
})

test('Test 21', () => {
  expect('#LoveWins'.isUpperCase()).toBeFalse()
})

test('Test 22', () => {
  expect('#LOVEWins'.isUpperCase()).toBeFalse()
})

test('Test 23', () => {
  expect('#LOVEWins'.isUpperCase()).toBeFalse()
})

test('Test 24', () => {
  expect('#LoveWINS'.isUpperCase()).toBeFalse()
})

test('Test 25', () => {
  expect('#LOVEWINs'.isUpperCase()).toBeFalse()
})

test('Test 26', () => {
  expect('#lOVEWINS'.isUpperCase()).toBeFalse()
})

test('Test 27', () => {
  expect('#LOVEWINS'.isUpperCase()).toBeTrue()
})
