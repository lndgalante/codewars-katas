const maxProduct = require('.')

test('Test 1', () => {
  expect(maxProduct([56, 335, 195, 443, 6, 494, 252])).toBe(218842)
})

test('Test 2', () => {
  expect(maxProduct([154, 428, 455, 346])).toBe(194740)
})

test('Test 3', () => {
  expect(maxProduct([39, 135, 47, 275, 37, 108, 265, 457, 2, 133, 316, 330, 153, 253, 321, 411])).toBe(187827)
})

test('Test 4', () => {
  expect(maxProduct([136, 376, 10, 146, 105, 63, 234])).toBe(87984)
})

test('Test 5', () => {
  expect(maxProduct([354, 463, 165, 62, 472, 53, 347, 293, 252, 378, 420, 398, 255, 89])).toBe(218536)
})

test('Test 6', () => {
  expect(maxProduct([346, 446, 26, 425, 432, 349, 123, 269, 285, 93, 75, 14])).toBe(192672)
})

test('Test 7', () => {
  expect(maxProduct([134, 320, 266, 299])).toBe(95680)
})

test('Test 8', () => {
  expect(maxProduct([114, 424, 53, 272, 128, 215, 25, 329, 272, 313, 100, 24, 252])).toBe(139496)
})

test('Test 9', () => {
  expect(maxProduct([375, 56, 337, 466, 203])).toBe(174750)
})
