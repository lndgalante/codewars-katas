const sentencify = require('.')

test('Test 1', () => {
  expect(sentencify(['i', 'am', 'an', 'AI'])).toBe('I am an AI.')
})

test('Test 2', () => {
  expect(sentencify(['yes'])).toBe('Yes.')
})

test('Test 3', () => {
  expect(sentencify(['FIELDS', 'of', 'CORN', 'are', 'to', 'be', 'sown'])).toBe('FIELDS of CORN are to be sown.')
})

test('Test 4', () => {
  expect(sentencify(["i’m", 'afraid', 'I', "can’t", 'let', 'you', 'do', 'that'])).toBe(
    "I’m afraid I can’t let you do that."
  )
})
