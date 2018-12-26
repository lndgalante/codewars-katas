const matchArrays = require('.')

test('Test 1', () => {
  expect(matchArrays(['Perl', 'Closure', 'JavaScript'], ['Go', 'C++', 'Erlang'])).toBe(0)
})

test('Test 2', () => {
  expect(matchArrays(['incapsulation', 'OOP', 'array'], ['time', 'propert', 'paralelism', 'OOP'])).toBe(1)
})

test('Test 3', () => {
  expect(matchArrays([1, 2, 3, 4, 5], [2, 3, 4, 5, 6])).toBe(4)
})
