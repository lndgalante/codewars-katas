const circleArea = require('.')

class Circle {
  constructor(center, radius) {
    this.center = center
    this.radius = radius
  }
}

class Point {
  constructor(x, y) {
    this.x = x
    this.y = y
  }
}

test('Test 1', () => {
  expect(Number(circleArea(new Circle(new Point(10, 10), 30)).toFixed(6))).toBe(
    2827.433388
  )
})

test('Test 2', () => {
  expect(
    Number(circleArea(new Circle(new Point(25, -70), 30)).toFixed(6))
  ).toBe(2827.433388)
})

test('Test 3', () => {
  expect(Number(circleArea(new Circle(new Point(-15, 5), 0)).toFixed(6))).toBe(
    0
  )
})

test('Test 4', () => {
  expect(
    Number(circleArea(new Circle(new Point(-15, 5), 12.5)).toFixed(6))
  ).toBe(490.873852)
})
