const { getNiceNames, getNaughtyNames } = require('.')

test('Test 1', () => {
  expect(
    getNiceNames([
      { name: 'Warrior reading this kata', wasNice: true },
      { name: 'xDranik', wasNice: false },
      { name: 'Santa', wasNice: true },
    ])
  ).toEqual(['Warrior reading this kata', 'Santa'])
})

test('Test 2', () => {
  expect(
    getNaughtyNames([
      { name: 'Warrior reading this kata', wasNice: true },
      { name: 'xDranik', wasNice: false },
      { name: 'Santa', wasNice: true },
    ])
  ).toEqual(['xDranik'])
})
