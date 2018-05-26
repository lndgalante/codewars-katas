const tickets = require('.')

test('Test 1', () => {
  expect(tickets([25, 25, 50, 50])).toBe('YES')
})

test('Test 2', () => {
  expect(tickets([25, 100])).toBe('NO')
})

test('Test 3', () => {
  expect(
    tickets([
      25,
      25,
      50,
      100,
      25,
      25,
      25,
      100,
      25,
      25,
      25,
      100,
      25,
      25,
      25,
      100,
      100,
      100,
    ])
  ).toBe('NO')
})

test('Test 4', () => {
  expect(
    tickets([
      25,
      25,
      50,
      100,
      25,
      50,
      25,
      100,
      25,
      25,
      25,
      100,
      25,
      25,
      50,
      100,
      25,
      50,
      25,
      100,
    ])
  ).toBe('YES')
})

test('Test 5', () => {
  expect(
    tickets([
      25,
      25,
      50,
      100,
      25,
      25,
      25,
      100,
      25,
      50,
      25,
      100,
      25,
      25,
      50,
      100,
      50,
      25,
    ])
  ).toBe('NO')
})
