/* eslint no-unused-vars: 0 */

const String = require('.')

test('Test 1', () => {
  expect(' '.repeat(4) + 'Sub-node').toBe('    Sub-node')
})

test('Test 2', () => {
  expect(' '.repeat(4) + 'Sub-node->').toBe('    Sub-node->')
})

test('Test 3', () => {
  expect(' '.repeat(8) + 'Sub-sub-node').toBe('        Sub-sub-node')
})
