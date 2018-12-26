const solve = require('.')

test('Test 1', () => {
  expect(solve('codewars', 1, 5)).toBe('cawedors')
})

test('Test 2', () => {
  expect(solve('codingIsFun', 2, 100)).toBe('conuFsIgnid')
})

test('Test 3', () => {
  expect(solve('FunctionalProgramming', 2, 15)).toBe('FuargorPlanoitcnmming')
})

test('Test 4', () => {
  expect(solve('abcdefghijklmnopqrstuvwxyz', 0, 20)).toBe('utsrqponmlkjihgfedcbavwxyz')
})

test('Test 5', () => {
  expect(solve('abcdefghijklmnopqrstuvwxyz', 5, 20)).toBe('abcdeutsrqponmlkjihgfvwxyz')
})
