const borrow = require('.')

test('Test 1', () => {
  expect(borrow('WhAt! FiCK! DaMn CAke?')).toBe('whatfickdamncake')
})

test('Test 2', () => {
  expect(borrow('THE big PeOpLE Here!!')).toBe('thebigpeoplehere')
})

test('Test 3', () => {
  expect(borrow('i AM a TINY BoY!!')).toBe('iamatinyboy')
})
