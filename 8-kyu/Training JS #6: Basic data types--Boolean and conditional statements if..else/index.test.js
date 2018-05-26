const trueOrFalse = require('.')

const a = 1
const b = 2
const c = 1
const t = true
const f = false

test('Test 1', () => {
  expect(trueOrFalse(a > b)).toBe('false')
})

test('Test 2', () => {
  expect(trueOrFalse(a === b)).toBe('false')
})

test('Test 3', () => {
  expect(trueOrFalse(a < b)).toBe('true')
})

test('Test 4', () => {
  expect(trueOrFalse(a !== b)).toBe('true')
})

test('Test 5', () => {
  expect(trueOrFalse(b > c)).toBe('true')
})

test('Test 6', () => {
  expect(trueOrFalse(b === c)).toBe('false')
})

test('Test 7', () => {
  expect(trueOrFalse(b < c)).toBe('false')
})

test('Test 8', () => {
  expect(trueOrFalse(b !== c)).toBe('true')
})

test('Test 9', () => {
  expect(trueOrFalse(a === c)).toBe('true')
})

test('Test 10', () => {
  expect(trueOrFalse(a !== c)).toBe('false')
})

test('Test 11', () => {
  expect(trueOrFalse(t && f)).toBe('false')
})

test('Test 12', () => {
  expect(trueOrFalse(f && f)).toBe('false')
})

test('Test 13', () => {
  expect(trueOrFalse(t && t)).toBe('true')
})

test('Test 14', () => {
  expect(trueOrFalse(t || f)).toBe('true')
})

test('Test 15', () => {
  expect(trueOrFalse(t || t)).toBe('true')
})

test('Test 16', () => {
  expect(trueOrFalse(f || f)).toBe('false')
})

test('Test 17', () => {
  expect(trueOrFalse(t & f)).toBe('false')
})

test('Test 18', () => {
  expect(trueOrFalse(t & t)).toBe('true')
})

test('Test 19', () => {
  expect(trueOrFalse(f & f)).toBe('false')
})

test('Test 20', () => {
  expect(trueOrFalse(t | f)).toBe('true')
})

test('Test 21', () => {
  expect(trueOrFalse(t | t)).toBe('true')
})

test('Test 22', () => {
  expect(trueOrFalse(f | f)).toBe('false')
})

test('Test 23', () => {
  expect(trueOrFalse(!t)).toBe('false')
})

test('Test 24', () => {
  expect(trueOrFalse(!f)).toBe('true')
})

test('Test 25', () => {
  expect(trueOrFalse(t ^ f)).toBe('true')
})

test('Test 26', () => {
  expect(trueOrFalse(t ^ t)).toBe('false')
})

test('Test 27', () => {
  expect(trueOrFalse(f ^ f)).toBe('false')
})

test('Test 28', () => {
  expect(trueOrFalse(true)).toBe('true')
})

test('Test 29', () => {
  expect(trueOrFalse(123)).toBe('true')
})

test('Test 30', () => {
  expect(trueOrFalse('123')).toBe('true')
})

test('Test 31', () => {
  expect(trueOrFalse(['123'])).toBe('true')
})

test('Test 32', () => {
  expect(trueOrFalse('false')).toBe('true')
})

test('Test 33', () => {
  expect(trueOrFalse(false)).toBe('false')
})

test('Test 34', () => {
  expect(trueOrFalse(0)).toBe('false')
})

test('Test 35', () => {
  expect(trueOrFalse('')).toBe('false')
})

test('Test 36', () => {
  expect(trueOrFalse(null)).toBe('false')
})

test('Test 37', () => {
  expect(trueOrFalse([].length)).toBe('false')
})

test('Test 38', () => {
  expect(trueOrFalse(undefined)).toBe('false')
})
