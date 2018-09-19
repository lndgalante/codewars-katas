const sortReindeer = require('.')

test('Test 1', () => {
  expect(
    sortReindeer([
      'Dasher Tonoyan',
      'Dancer Moore',
      'Prancer Chua',
      'Vixen Hall',
      'Comet Karavani',
      'Cupid Foroutan',
      'Donder Jonker',
      'Blitzen Claus',
    ])
  ).toEqual([
    'Prancer Chua',
    'Blitzen Claus',
    'Cupid Foroutan',
    'Vixen Hall',
    'Donder Jonker',
    'Comet Karavani',
    'Dancer Moore',
    'Dasher Tonoyan',
  ])
})
