const cakes = require('./index.js')

test('Test 1', () => {
  expect(
    cakes(
      { flour: 500, sugar: 200, eggs: 1 },
      { flour: 1200, sugar: 1200, eggs: 5, milk: 200 }
    )
  ).toBe(2)
})

test('Test 2', () => {
  expect(
    cakes(
      { apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 },
      { sugar: 500, flour: 2000, milk: 2000 }
    )
  ).toBe(0)
})

test('Test 3', () => {
  expect(
    cakes(
      { apples: 0, oil: 0, milk: 72 },
      {
        cream: 9700,
        apples: 9300,
        pears: 2200,
        crumbles: 8800,
        cocoa: 3500,
        chocolate: 7600,
        eggs: 2100,
        oil: 10000,
        flour: 400,
        butter: 6600,
        milk: 100,
        nuts: 9000,
        sugar: 2100,
      }
    )
  ).toBe(0)
})
