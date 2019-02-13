const tacofy = require('.')

test('Test 1', () => {
  expect(tacofy('')).toEqual(['shell', 'shell'])
})

test('Test 2', () => {
  expect(tacofy('a')).toEqual(['shell', 'beef', 'shell'])
})

test('Test 3', () => {
  expect(tacofy('ggg')).toEqual(['shell', 'guacamole', 'guacamole', 'guacamole', 'shell'])
})

test('Test 4', () => {
  expect(tacofy('ogl')).toEqual(['shell', 'beef', 'guacamole', 'lettuce', 'shell'])
})

test('Test 5', () => {
  expect(tacofy('ydjkpwqrzto')).toEqual(['shell', 'tomato', 'beef', 'shell'])
})
