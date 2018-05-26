const bloodAlcoholContent = require('.')

test('Test 1', () => {
  expect(bloodAlcoholContent({ ounces: 12.5, abv: 0.4 }, 190, 'male', 1)).toBe(
    0.0837
  )
})

test('Test 2', () => {
  expect(
    bloodAlcoholContent({ ounces: 180, abv: 0.05 }, 160, 'female', 1)
  ).toBe(0.1758)
})

test('Test 3', () => {
  expect(bloodAlcoholContent({ ounces: 50, abv: 0.14 }, 250, 'male', 3)).toBe(
    0.0601
  )
})

test('Test 4', () => {
  expect(bloodAlcoholContent({ ounces: 20, abv: 0.4 }, 100, 'female', 2)).toBe(
    0.2414
  )
})
