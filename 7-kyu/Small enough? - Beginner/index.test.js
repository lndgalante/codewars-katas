const smallEnough = require('.')

test('Test 1', () => {
  expect(smallEnough([66, 101], 200)).toBeTrue()
})

test('Test 2', () => {
  expect(smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100)).toBeFalse()
})

test('Test 3', () => {
  expect(smallEnough([101, 45, 75, 105, 99, 107], 107)).toBeTrue()
})

test('Test 4', () => {
  expect(smallEnough([80, 117, 115, 104, 45, 85, 112, 115], 120)).toBeTrue()
})
