const cannonsReady = require('.')

test('Test 1', () => {
  expect(
    cannonsReady({ Mike: 'aye', Joe: 'aye', Johnson: 'aye', Peter: 'aye' })
  ).toBe('Fire!')
})

test('Test 2', () => {
  expect(
    cannonsReady({ Mike: 'aye', Joe: 'nay', Johnson: 'aye', Peter: 'aye' })
  ).toBe('Shiver me timbers!')
})
