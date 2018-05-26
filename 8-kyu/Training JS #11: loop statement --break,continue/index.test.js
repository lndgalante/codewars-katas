const grabDoll = require('.')

test('Test 1', () => {
  expect(grabDoll(['Mickey Mouse', 'Hello Kitty', 'Snow white'])).toEqual([
    'Hello Kitty',
  ])
})

test('Test 2', () => {
  expect(
    grabDoll(['Mickey Mouse', 'Hello Kitty', 'Hello Kitty', 'Snow white'])
  ).toEqual(['Hello Kitty', 'Hello Kitty'])
})

test('Test 3', () => {
  expect(
    grabDoll([
      'Mickey Mouse',
      'Hello Kitty',
      'Hello Kitty',
      'Barbie doll',
      'Snow white',
    ])
  ).toEqual(['Hello Kitty', 'Hello Kitty', 'Barbie doll'])
})

test('Test 4', () => {
  expect(
    grabDoll([
      'Mickey Mouse',
      'Barbie doll',
      'Hello Kitty',
      'Hello Kitty',
      'Hello Kitty',
      'Snow white',
    ])
  ).toEqual(['Barbie doll', 'Hello Kitty', 'Hello Kitty'])
})
