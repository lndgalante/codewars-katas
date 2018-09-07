const partlist = require('.')

test('Test 1', () => {
  expect(partlist(['I', 'wish', 'I', "hadn't", 'come'])).toEqual([
    ['I', "wish I hadn't come"],
    ['I wish', "I hadn't come"],
    ['I wish I', "hadn't come"],
    ["I wish I hadn't", 'come'],
  ])
})

test('Test 2', () => {
  expect(partlist(['cdIw', 'tzIy', 'xDu', 'rThG'])).toEqual([
    ['cdIw', 'tzIy xDu rThG'],
    ['cdIw tzIy', 'xDu rThG'],
    ['cdIw tzIy xDu', 'rThG'],
  ])
})

test('Test 3', () => {
  expect(partlist(['vJQ', 'anj', 'mQDq', 'sOZ'])).toEqual([
    ['vJQ', 'anj mQDq sOZ'],
    ['vJQ anj', 'mQDq sOZ'],
    ['vJQ anj mQDq', 'sOZ'],
  ])
})
