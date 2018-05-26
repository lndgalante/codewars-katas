const Kata = require('.')

test('Test 1', () => {
  expect(new Kata().getVolumeOfCuboid(1, 2, 2)).toBe(4)
})

test('Test 2', () => {
  expect(new Kata().getVolumeOfCuboid(6.3, 2, 5)).toBe(63)
})
