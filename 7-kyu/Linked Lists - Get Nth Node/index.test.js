const getNth = require('.')

const list = {
  data: 1,
  next: { data: 2, next: { data: 3, next: null } },
}

test('Test 1', () => {
  expect(getNth(list, 0).data).toBe(1)
})

test('Test 2', () => {
  expect(getNth(list, 1).data).toBe(2)
})

test('Test 3', () => {
  expect(getNth(list, 2).data).toBe(3)
})

test('Test 4', () => {
  expect(() => getNth(list, 3)).toThrow()
})

test('Test 5', () => {
  expect(() => getNth(list, 100)).toThrow()
})

test('Test 6', () => {
  expect(() => getNth(null, 0)).toThrow()
})
