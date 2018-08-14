const sortList = require('.')

test('Test 1', () => {
  expect(
    sortList('a', [
      { a: 1, b: 3 },
      { a: 3, b: 2 },
      { a: 2, b: 40 },
      { a: 4, b: 12 },
    ])
  ).toEqual([{ a: 4, b: 12 }, { a: 3, b: 2 }, { a: 2, b: 40 }, { a: 1, b: 3 }])
})
