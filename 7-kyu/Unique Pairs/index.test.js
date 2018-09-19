const projectPartners = require('.')

test('Test 1', () => {
  expect(projectPartners(2)).toBe(1)
})

test('Test 2', () => {
  expect(projectPartners(3)).toBe(3)
})

test('Test 3', () => {
  expect(projectPartners(4)).toBe(6)
})

test('Test 4', () => {
  expect(projectPartners(5)).toBe(10)
})
