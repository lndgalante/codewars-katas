const winnerOfTrick = require('.')

test('Test 1', () => {
  const players = 'Algichhe,Bdobd,Chharmolg,Dbavgridb,Evgre'.split(',')

  const simpleTricks = [
    ['AH2H3H', 'Algichhe wins'],
    ['2HKH3H', 'Bdobd wins'],
    ['2H3H4S', 'Chharmolg wins'],
    ['ACKC2C3C', 'Algichhe wins'],
    ['2CKCQC3C', 'Bdobd wins'],
    ['2C3CJD4S', 'Chharmolg wins'],
    ['2C3CJDAS', 'Dbavgridb wins'],
  ]

  simpleTricks.forEach(([cc, exp]) => expect(winnerOfTrick(cc.match(/../g), players)).toBe(exp))
})

test('Test 2', () => {
  expect(winnerOfTrick(['KH', '2S', 'KD'], ['gQba', 'gZogZo', 'mXin'])).toBe('Tie! (gQba,mXin)')
})
