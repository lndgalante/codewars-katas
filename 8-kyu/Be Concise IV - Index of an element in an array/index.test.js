const find = require('.')

test('Test 1', () => {
  expect(find([2, 3, 5, 7, 11], 5)).toBe(2)
})

test('Test 2', () => {
  expect(find([2, 3, 5, 7, 11], 11)).toBe(4)
})

test('Test 3', () => {
  expect(find([2, 3, 5, 7, 11], 3)).toBe(1)
})

test('Test 4', () => {
  expect(find([2, 3, 5, 7, 11], 2)).toBe(0)
})

test('Test 5', () => {
  expect(find([2, 3, 5, 7, 11], 7)).toBe(3)
})

test('Test 6', () => {
  expect(find([2, 3, 5, 7, 11], 1)).toBe('Not found')
})

test('Test 7', () => {
  expect(find([2, 3, 5, 7, 11], 8)).toBe('Not found')
})

test('Test 8', () => {
  expect(
    find([true, 'Hello World', false, 'Lorem Ipsum', 6, Math.PI], 'Hello World')
  ).toBe(1)
})

test('Test 9', () => {
  expect(
    find([true, 'Hello World', false, 'Lorem Ipsum', 6, Math.PI], 'lorem ipsum')
  ).toBe('Not found')
})

test('Test 10', () => {
  expect(
    find([true, 'Hello World', false, 'Lorem Ipsum', 6, Math.PI], 'Lorem Ipsum')
  ).toBe(3)
})

test('Test 11', () => {
  expect(
    find([true, 'Hello World', false, 'Lorem Ipsum', 6, Math.PI], false)
  ).toBe(2)
})

test('Test 12', () => {
  expect(
    find([true, 'Hello World', false, 'Lorem Ipsum', 6, Math.PI], true)
  ).toBe(0)
})

test('Test 13', () => {
  expect(
    find([true, 'Hello World', false, 'Lorem Ipsum', 6, Math.PI], Math.PI)
  ).toBe(5)
})

test('Test 14', () => {
  expect(
    find([true, 'Hello World', false, 'Lorem Ipsum', 6, Math.PI], 3.14)
  ).toBe('Not found')
})

test('Test 15', () => {
  expect(find([true, 'Hello World', false, 'Lorem Ipsum', 6, Math.PI], 6)).toBe(
    4
  )
})
