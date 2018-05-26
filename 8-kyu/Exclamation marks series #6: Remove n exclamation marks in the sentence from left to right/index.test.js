const remove = require('.')

test('Test 1', () => {
  expect(remove('Hi!', 1)).toBe('Hi')
})

test('Test 2', () => {
  expect(remove('Hi!', 100)).toBe('Hi')
})

test('Test 3', () => {
  expect(remove('Hi!!!', 1)).toBe('Hi!!')
})

test('Test 4', () => {
  expect(remove('Hi!!!', 100)).toBe('Hi')
})

test('Test 5', () => {
  expect(remove('!Hi', 1)).toBe('Hi')
})

test('Test 6', () => {
  expect(remove('!Hi!', 1)).toBe('Hi!')
})

test('Test 7', () => {
  expect(remove('!Hi!', 100)).toBe('Hi')
})

test('Test 8', () => {
  expect(remove('!!!Hi !!hi!!! !hi', 1)).toBe('!!Hi !!hi!!! !hi')
})

test('Test 9', () => {
  expect(remove('!!!Hi !!hi!!! !hi', 3)).toBe('Hi !!hi!!! !hi')
})

test('Test 10', () => {
  expect(remove('!!!Hi !!hi!!! !hi', 5)).toBe('Hi hi!!! !hi')
})

test('Test 11', () => {
  expect(remove('!!!Hi !!hi!!! !hi', 100)).toBe('Hi hi hi')
})
