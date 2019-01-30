const {
  BARK,
  SLEEP,
  dogBarkByDefault,
  dogBarkOnlyIfToldSo,
  dogDontBarkByDefault,
  dogDontBarkOnlyIfToldSo,
} = require('.')

test('Test 1', () => {
  expect(dogBarkOnlyIfToldSo(true)).toBe(BARK)
})

test('Test 2', () => {
  expect(dogBarkOnlyIfToldSo(false)).toBe(SLEEP)
})

test('Test 3', () => {
  expect(dogBarkOnlyIfToldSo()).toBe(SLEEP)
})

test('Test 4', () => {
  expect(dogDontBarkOnlyIfToldSo(true)).toBe(SLEEP)
})

test('Test 5', () => {
  expect(dogDontBarkOnlyIfToldSo(false)).toBe(BARK)
})

test('Test 6', () => {
  expect(dogDontBarkOnlyIfToldSo()).toBe(BARK)
})

test('Test 8', () => {
  expect(dogDontBarkByDefault()).toBe(SLEEP)
})

test('Test 9', () => {
  expect(dogDontBarkByDefault(false)).toBe(BARK)
})

test('Test 10', () => {
  expect(dogBarkByDefault()).toBe(BARK)
})
