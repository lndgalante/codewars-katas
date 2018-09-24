const circleCircumference = require('.')

test('Test 1', () => {
  expect(Number(circleCircumference({ radius: 30 }).toFixed(6))).toBe(
    188.495559
  )
})

test('Test 2', () => {
  expect(Number(circleCircumference({ radius: 30 }).toFixed(6))).toBe(
    188.495559
  )
})

test('Test 3', () => {
  expect(Number(circleCircumference({ radius: 0 }).toFixed(6))).toBe(0)
})

test('Test 4', () => {
  expect(Number(circleCircumference({ radius: 12.5 }).toFixed(6))).toBe(
    78.539816
  )
})
