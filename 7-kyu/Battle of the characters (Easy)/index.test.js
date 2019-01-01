const battle = require('.')

test('Test 1', () => {
  expect(battle('AAA', 'Z')).toBe('Z')
})

test('Test 2', () => {
  expect(battle('ONE', 'TWO')).toBe('TWO')
})

test('Test 3', () => {
  expect(battle('ONE', 'NEO')).toBe('Tie!')
})

test('Test 4', () => {
  expect(battle('FOUR', 'FIVE')).toBe('FOUR')
})
