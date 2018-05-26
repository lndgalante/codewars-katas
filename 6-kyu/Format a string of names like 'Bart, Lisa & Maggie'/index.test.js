const list = require('.')

test('Test 1', () => {
  expect(
    list([
      { name: 'Bart' },
      { name: 'Lisa' },
      { name: 'Maggie' },
      { name: 'Homer' },
      { name: 'Marge' },
    ])
  ).toBe('Bart, Lisa, Maggie, Homer & Marge')
})

test('Test 2', () => {
  expect(list([{ name: 'Bart' }, { name: 'Lisa' }, { name: 'Maggie' }])).toBe(
    'Bart, Lisa & Maggie'
  )
})

test('Test 3', () => {
  expect(list([{ name: 'Bart' }, { name: 'Lisa' }])).toBe('Bart & Lisa')
})

test('Test 4', () => {
  expect(list([{ name: 'Bart' }])).toBe('Bart')
})

test('Test 5', () => {
  expect(list([])).toBe('')
})
