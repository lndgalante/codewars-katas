const myLanguages = require('.')

test('Test 1', () => {
  expect(myLanguages({ Java: 10, Ruby: 80, Python: 65 })).toEqual(['Ruby', 'Python'])
})

test('Test 2', () => {
  expect(myLanguages({ Hindi: 60, Greek: 71, Dutch: 93 })).toEqual(['Dutch', 'Greek', 'Hindi'])
})

test('Test 3', () => {
  expect(myLanguages({ 'C++': 50, ASM: 10, Haskell: 20 })).toEqual([])
})
