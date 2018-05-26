const howManyLightsabersDoYouOwn = require('.')

test('Test 1', () => {
  expect(howManyLightsabersDoYouOwn('Zach')).toBe(18)
})

test('Test 2', () => {
  expect(howManyLightsabersDoYouOwn('Eric')).toBe(0)
})

test('Test 3', () => {
  expect(howManyLightsabersDoYouOwn('Adrian')).toBe(0)
})
