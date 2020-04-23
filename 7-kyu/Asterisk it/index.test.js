const asteriscIt = require('.')

test('Test 1', () => {
  expect(asteriscIt(5312708)).toBe('531270*8')
})

test('Test 2', () => {
  expect(asteriscIt(9682135)).toBe('96*8*2135')
})

test('Test 3', () => {
  expect(asteriscIt(2222)).toBe('2*2*2*2')
})

test('Test 4', () => {
  expect(asteriscIt(1111)).toBe('1111')
})

test('Test 5', () => {
  expect(asteriscIt(9999)).toBe('9999')
})

test('Test 6', () => {
  expect(asteriscIt('0000')).toBe('0*0*0*0')
})

test('Test 7', () => {
  expect(asteriscIt(8)).toBe('8')
})

test('Test 8', () => {
  expect(asteriscIt(2)).toBe('2')
})

test('Test 9', () => {
  expect(asteriscIt(0)).toBe('0')
})

test('Test 10', () => {
  expect(asteriscIt([1, 4, 64, 68, 67, 23, 1])).toBe('14*6*4*6*8*67231')
})
