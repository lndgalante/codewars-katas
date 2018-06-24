const anyArrows = require('.')

test('Test 1', () => {
  expect(anyArrows([])).toBeFalse()
})

test('Test 2', () => {
  expect(
    anyArrows([{ range: 5 }, { range: 10, damaged: true }, { damaged: true }])
  ).toBeTrue()
})

test('Test 3', () => {
  expect(
    anyArrows([{ range: 10, damaged: true }, { damaged: true }])
  ).toBeFalse()
})
