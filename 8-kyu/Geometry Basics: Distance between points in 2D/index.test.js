const distanceBetweenPoints = require('.')

test('Test 1', () => {
  expect(distanceBetweenPoints({ x: 3, y: 3 }, { x: 3, y: 3 })).toBe(0)
})

test('Test 2', () => {
  expect(distanceBetweenPoints({ x: 1, y: 6 }, { x: 4, y: 2 })).toBe(5)
})

test('Test 3', () => {
  expect(
    Number(
      distanceBetweenPoints({ x: -10.2, y: 12.5 }, { x: 0.3, y: 14.7 }).toFixed(
        6
      )
    )
  ).toBe(10.728001)
})
