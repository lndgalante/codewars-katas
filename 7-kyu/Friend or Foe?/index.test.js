const friend = require('./index.js')

test('Test 1', () => {
  expect(friend(['Ryan', 'Kieran', 'Mark'])).toEqual(['Ryan', 'Mark'])
})

test('Test 2', () => {
  expect(friend(['Ryan', 'Jimmy', '123', '4', 'Cool Man'])).toEqual(['Ryan'])
})

test('Test 3', () => {
  expect(
    friend(['Jimm', 'Cari', 'aret', 'truehdnviegkwgvke', 'sixtyiscooooool'])
  ).toEqual(['Jimm', 'Cari', 'aret'])
})

test('Test 4', () => {
  expect(friend(['Love', 'Your', 'Face', '1'])).toEqual([
    'Love',
    'Your',
    'Face',
  ])
})
