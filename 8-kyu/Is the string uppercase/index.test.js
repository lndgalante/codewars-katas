/* eslint no-unused-vars: 0 */
/* eslint no-extend-native: 0 */
/* eslint no-use-extend-native/no-use-extend-native: 0 */

const isUpperCase = require('.')

test('Test 1', () => {
  expect(''.isUpperCase()).toBeTruthy()
})

test('Test 2', () => {
  expect('c'.isUpperCase()).toBeFalsy()
})

test('Test 3', () => {
  expect('C'.isUpperCase()).toBeTruthy()
})

test('Test 4', () => {
  expect('hello I AM DONALD'.isUpperCase()).toBeFalsy()
})

test('Test 5', () => {
  expect('HELLO I AM DONALD'.isUpperCase()).toBeTruthy()
})

test('Test 6', () => {
  expect('ACSKLDFJSgSKLDFJSKLDFJ'.isUpperCase()).toBeFalsy()
})

test('Test 7', () => {
  expect('Hello World'.isUpperCase()).toBeFalsy()
})

test('Test 8', () => {
  expect('hello world'.isUpperCase()).toBeFalsy()
})

test('Test 9', () => {
  expect('Hello world'.isUpperCase()).toBeFalsy()
})

test('Test 10', () => {
  expect('hello World'.isUpperCase()).toBeFalsy()
})

test('Test 11', () => {
  expect('HELLO WORLD'.isUpperCase()).toBeTruthy()
})

test('Test 12', () => {
  expect('Bob walks his dog every day.'.isUpperCase()).toBeFalsy()
})

test('Test 13', () => {
  expect('Bob walks his dog every day.'.isUpperCase()).toBeFalsy()
})

test('Test 14', () => {
  expect('BOB walks his dog every day.'.isUpperCase()).toBeFalsy()
})

test('Test 15', () => {
  expect('BOB WALKS HIS DOG EVERY DAY.'.isUpperCase()).toBeTruthy()
})

test('Test 16', () => {
  expect('BOB WALKs HIS DOG EVERY DAY.'.isUpperCase()).toBeFalsy()
})

test('Test 17', () => {
  expect('#lovewins'.isUpperCase()).toBeFalsy()
})

test('Test 18', () => {
  expect('#Lovewins'.isUpperCase()).toBeFalsy()
})

test('Test 19', () => {
  expect('#loveWins'.isUpperCase()).toBeFalsy()
})

test('Test 20', () => {
  expect('#LoveWins'.isUpperCase()).toBeFalsy()
})

test('Test 21', () => {
  expect('#LoveWins'.isUpperCase()).toBeFalsy()
})

test('Test 22', () => {
  expect('#LOVEWins'.isUpperCase()).toBeFalsy()
})

test('Test 23', () => {
  expect('#LOVEWins'.isUpperCase()).toBeFalsy()
})

test('Test 24', () => {
  expect('#LoveWINS'.isUpperCase()).toBeFalsy()
})

test('Test 25', () => {
  expect('#LOVEWINs'.isUpperCase()).toBeFalsy()
})

test('Test 26', () => {
  expect('#lOVEWINS'.isUpperCase()).toBeFalsy()
})

test('Test 27', () => {
  expect('#LOVEWINS'.isUpperCase()).toBeTruthy()
})
