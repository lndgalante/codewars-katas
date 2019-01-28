const boredom = require('.')

test('Test 1', () => {
  expect(
    boredom({
      tim: 'change',
      jim: 'accounts',
      randy: 'canteen',
      sandy: 'change',
      andy: 'change',
      katie: 'IS',
      laura: 'change',
      saajid: 'IS',
      alex: 'trading',
      john: 'accounts',
      mr: 'finance',
    })
  ).toBe('kill me now')
})

test('Test 2', () => {
  expect(
    boredom({
      tim: 'IS',
      jim: 'finance',
      randy: 'pissing about',
      sandy: 'cleaning',
      andy: 'cleaning',
      katie: 'cleaning',
      laura: 'pissing about',
      saajid: 'regulation',
      alex: 'regulation',
      john: 'accounts',
      mr: 'canteen',
    })
  ).toBe('i can handle this')
})

test('Test 3', () => {
  expect(
    boredom({
      tim: 'accounts',
      jim: 'accounts',
      randy: 'pissing about',
      sandy: 'finance',
      andy: 'change',
      katie: 'IS',
      laura: 'IS',
      saajid: 'canteen',
      alex: 'pissing about',
      john: 'retail',
      mr: 'pissing about',
    })
  ).toBe('party time!!')
})
