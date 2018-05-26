const giveMeFive = require('.')

test('Test 1', () => {
  expect(giveMeFive({ Our: 'earth', is: 'a', beautyful: 'world' })).toEqual([
    'earth',
    'world',
  ])
})

test('Test 2', () => {
  expect(
    giveMeFive({ Ihave: 'enough', money: 'to', buy: 'a', car: 'model' })
  ).toEqual(['Ihave', 'money', 'model'])
})

test('Test 3', () => {
  expect(giveMeFive({ Pears: 'than', apple: 'sweet' })).toEqual([
    'Pears',
    'apple',
    'sweet',
  ])
})
