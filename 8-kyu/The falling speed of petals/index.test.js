const sakuraFall = require('.')

test('Test 1', () => {
  expect(sakuraFall(5)).toBe(80)
})

test('Test 2', () => {
  expect(sakuraFall(10)).toBe(40)
})

test('Test 3', () => {
  expect(sakuraFall(-1)).toBe(0)
})
