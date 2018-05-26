const describeAge = require('.')

test('Test 1', () => {
  expect(describeAge(9)).toBe("You're a(n) kid")
})

test('Test 2', () => {
  expect(describeAge(10)).toBe("You're a(n) kid")
})

test('Test 3', () => {
  expect(describeAge(11)).toBe("You're a(n) kid")
})

test('Test 4', () => {
  expect(describeAge(12)).toBe("You're a(n) kid")
})

test('Test 5', () => {
  expect(describeAge(13)).toBe("You're a(n) teenager")
})

test('Test 6', () => {
  expect(describeAge(14)).toBe("You're a(n) teenager")
})

test('Test 7', () => {
  expect(describeAge(15)).toBe("You're a(n) teenager")
})

test('Test 8', () => {
  expect(describeAge(16)).toBe("You're a(n) teenager")
})

test('Test 9', () => {
  expect(describeAge(17)).toBe("You're a(n) teenager")
})

test('Test 10', () => {
  expect(describeAge(18)).toBe("You're a(n) adult")
})

test('Test 11', () => {
  expect(describeAge(19)).toBe("You're a(n) adult")
})

test('Test 12', () => {
  expect(describeAge(63)).toBe("You're a(n) adult")
})

test('Test 13', () => {
  expect(describeAge(64)).toBe("You're a(n) adult")
})

test('Test 14', () => {
  expect(describeAge(65)).toBe("You're a(n) elderly")
})

test('Test 15', () => {
  expect(describeAge(66)).toBe("You're a(n) elderly")
})

test('Test 16', () => {
  expect(describeAge(100)).toBe("You're a(n) elderly")
})
