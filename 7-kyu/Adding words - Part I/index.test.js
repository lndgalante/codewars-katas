const Arith = require('.')

const i = new Arith('three')

test('Test 1', () => {
  expect(i.add('seven')).toBe('ten')
})

test('Test 2', () => {
  expect(i.add('eight')).toBe('eleven')
})

test('Test 3', () => {
  expect(i.add('zero')).toBe('three')
})
