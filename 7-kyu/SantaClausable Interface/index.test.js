const isSantaClausable = require('.')

test('Test 1', () => {
  const santa = {
    sayHoHoHo() {
      console.log('Ho Ho Ho!')
    },
    distributeGifts() {
      console.log('Gifts for all!')
    },
    goDownTheChimney() {
      console.log('*whoosh*')
    },
  }

  expect(isSantaClausable(santa)).toBeTrue()
})

test('Test 2', () => {
  const notSanta = {
    sayHoHoHo() {
      console.log('Oink Oink!')
    },
  }

  expect(isSantaClausable(notSanta)).toBeFalse()
})
