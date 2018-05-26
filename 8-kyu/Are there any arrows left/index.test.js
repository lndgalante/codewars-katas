const anyArrows = require('.')

test('Test 1', () => {
  expect(anyArrows([])).toBeFalsy()
})

test('Test 2', () => {
  expect(
    anyArrows([{ range: 5 }, { range: 10, damaged: true }, { damaged: true }])
  ).toBeTruthy()
})

test('Test 3', () => {
  expect(
    anyArrows([{ range: 10, damaged: true }, { damaged: true }])
  ).toBeFalsy()
})
