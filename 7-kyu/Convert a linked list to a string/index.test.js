const { stringify, Node } = require('.')

test('Test 1', () => {
  expect(stringify(new Node(1, new Node(2, new Node(3))))).toBe('1 -> 2 -> 3 -> null')
})

test('Test 2', () => {
  expect(stringify(new Node(0, new Node(1, new Node(4, new Node(9, new Node(16))))))).toBe(
    '0 -> 1 -> 4 -> 9 -> 16 -> null'
  )
})

test('Test 3', () => {
  expect(stringify(null)).toBe('null')
})
