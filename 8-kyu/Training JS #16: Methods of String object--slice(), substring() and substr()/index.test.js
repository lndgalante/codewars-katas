const cutIt = require('.')

test('Test 1', () => {
  expect(cutIt(['ab', 'cde', 'fgh'])).toEqual(['ab', 'cd', 'fg'])
})

test('Test 2', () => {
  expect(cutIt(['abc', 'defgh', 'ijklmn'])).toEqual(['abc', 'def', 'ijk'])
})

test('Test 3', () => {
  expect(cutIt(['codewars', 'javascript', 'java'])).toEqual([
    'code',
    'java',
    'java',
  ])
})
