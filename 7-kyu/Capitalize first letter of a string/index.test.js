/* eslint no-unused-vars: 0 */
/* eslint no-use-extend-native/no-use-extend-native: 0 */

const String = require('.');

test('Test 1', () => {
  expect('hello world'.capitalize()).toBe('Hello world');
});

test('Test 2', () => {
  expect('an apple a day keeps the doctor away'.capitalize()).toBe('An apple a day keeps the doctor away');
});

test('Test 3', () => {
  expect('today, I have a dream ... '.capitalize()).toBe('Today, I have a dream ... ');
});

test('Test 4', () => {
  expect('hello how are you?  i am john doe'.capitalize()).toBe('Hello how are you?  i am john doe');
});
