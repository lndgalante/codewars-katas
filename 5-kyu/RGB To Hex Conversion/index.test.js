const rgb = require('./index.js')

test('Test 1', () => {
  expect(rgb(255, 255, 255)).toBe('FFFFFF')
})

test('Test 2', () => {
  expect(rgb(255, 255, 300)).toBe('FFFFFF')
})

test('Test 3', () => {
  expect(rgb(0, 0, 0)).toBe('000000')
})

test('Test 4', () => {
  expect(rgb(148, 0, 211)).toBe('9400D3')
})
