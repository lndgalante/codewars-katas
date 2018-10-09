const makeString = require('.')

test('Test 1', () => {
  expect(makeString('sees eyes xray yoat')).toBe('sexy')
})

test('Test 2', () => {
  expect(makeString('brown eyes are nice')).toBe('bean')
})

test('Test 3', () => {
  expect(makeString('cars are very nice')).toBe('cavn')
})

test('Test 4', () => {
  expect(makeString('kaks de gan has a big head')).toBe('kdghabh')
})
