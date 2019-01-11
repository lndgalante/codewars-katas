const balancedNum = require('.')

test('Test 1', () => {
  expect(balancedNum(1230987)).toBe('Not Balanced')
})

test('Test 2', () => {
  expect(balancedNum(7)).toBe('Balanced')
})

test('Test 3', () => {
  expect(balancedNum(959)).toBe('Balanced')
})

test('Test 4', () => {
  expect(balancedNum(13)).toBe('Balanced')
})

test('Test 5', () => {
  expect(balancedNum(432)).toBe('Not Balanced')
})

test('Test 6', () => {
  expect(balancedNum(424)).toBe('Balanced')
})

test('Test 7', () => {
  expect(balancedNum(1024)).toBe('Not Balanced')
})

test('Test 8', () => {
  expect(balancedNum(66545)).toBe('Not Balanced')
})

test('Test 9', () => {
  expect(balancedNum(295591)).toBe('Not Balanced')
})
