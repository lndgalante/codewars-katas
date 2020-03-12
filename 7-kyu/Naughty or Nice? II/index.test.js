const whatListAmIOn = require('.')

test('Test 1', () => {
  const badActions = ["broke someone’s window", 'fought over a toaster', 'killed a bug']
  expect(whatListAmIOn(badActions)).toBe('naughty')
})

test('Test 2', () => {
  const goodActions = ['got someone a new car', 'saved a man from drowning', 'never got into a fight']
  expect(whatListAmIOn(goodActions)).toBe('nice')
})

test('Test 3', () => {
  const actions = ['broke a vending machine', 'never got into a fight', "tied someone’s shoes"]
  expect(whatListAmIOn(actions)).toBe('naughty')
})
