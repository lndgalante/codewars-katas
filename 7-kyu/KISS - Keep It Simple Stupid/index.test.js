const isKiss = require('.')

test('Test 1', () => {
  expect(isKiss('Joe had a bad day')).toBe('Good work Joe!')
})

test('Test 2', () => {
  expect(isKiss('Joe had some bad days')).toBe('Good work Joe!')
})

test('Test 3', () => {
  expect(isKiss('Joe is having no fun')).toBe('Keep It Simple Stupid')
})

test('Test 4', () => {
  expect(isKiss('Sometimes joe cries for hours')).toBe('Keep It Simple Stupid')
})
