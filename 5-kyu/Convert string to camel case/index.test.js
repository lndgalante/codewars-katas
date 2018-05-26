const toCamelCase = require('.')

test('Test 1', () => {
  expect(toCamelCase('the-stealth-warrior')).toBe('theStealthWarrior')
})

test('Test 2', () => {
  expect(toCamelCase('The_Stealth_Warrior')).toBe('TheStealthWarrior')
})
