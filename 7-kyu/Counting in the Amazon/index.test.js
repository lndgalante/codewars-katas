const countArara = require('.')

test('Test 1', () => {
  expect(countArara(1)).toBe('anane')
})

test('Test 2', () => {
  expect(countArara(3)).toBe('adak anane')
})

test('Test 3', () => {
  expect(countArara(8)).toBe('adak adak adak adak')
})
