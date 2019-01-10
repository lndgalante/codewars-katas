const last = require('.')

test('Test 1', () => {
  expect(last('man i need a taxi up to ubud')).toEqual(['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up'])
})

test('Test 2', () => {
  expect(last('what time are we climbing up the volcano')).toEqual([
    'time',
    'are',
    'we',
    'the',
    'climbing',
    'volcano',
    'up',
    'what',
  ])
})

test('Test 3', () => {
  expect(last('take me to semynak')).toEqual(['take', 'me', 'semynak', 'to'])
})
