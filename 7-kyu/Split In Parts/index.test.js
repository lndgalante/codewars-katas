const splitInParts = require('.')

test('Test 1', () => {
  expect(splitInParts('supercalifragilisticexpialidocious', 3)).toBe(
    'sup erc ali fra gil ist ice xpi ali doc iou s'
  )
})

test('Test 2', () => {
  expect(splitInParts('HelloKata', 1)).toBe('H e l l o K a t a')
})

test('Test 3', () => {
  expect(splitInParts('HelloKata', 9)).toBe('HelloKata')
})
