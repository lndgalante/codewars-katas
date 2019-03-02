const outed = require('.')

test('Test 1', () => {
  expect(
    outed(
      { tim: 0, jim: 2, randy: 0, sandy: 7, andy: 0, katie: 5, laura: 1, saajid: 2, alex: 3, john: 2, mr: 0 },
      'laura'
    )
  ).toBe('Get Out Now!')
})

test('Test 2', () => {
  expect(
    outed(
      { tim: 1, jim: 3, randy: 9, sandy: 6, andy: 7, katie: 6, laura: 9, saajid: 9, alex: 9, john: 9, mr: 8 },
      'katie'
    )
  ).toBe('Nice Work Champ!')
})

test('Test 3', () => {
  expect(
    outed(
      { tim: 2, jim: 4, randy: 0, sandy: 5, andy: 8, katie: 6, laura: 2, saajid: 2, alex: 3, john: 2, mr: 8 },
      'john'
    )
  ).toBe('Get Out Now!')
})
