const guessGifts = require('.')

test('Test 1', () => {
  const wishlist = [
    { name: 'Mini Puzzle', size: 'small', clatters: 'yes', weight: 'light' },
    { name: 'Toy Car', size: 'medium', clatters: 'a bit', weight: 'medium' },
    { name: 'Card Game', size: 'small', clatters: 'no', weight: 'light' },
  ]

  const presents = [
    { size: 'medium', clatters: 'a bit', weight: 'medium' },
    { size: 'small', clatters: 'yes', weight: 'light' },
  ]

  expect(guessGifts(wishlist, presents)).toEqual(['Mini Puzzle', 'Toy Car'])
})
