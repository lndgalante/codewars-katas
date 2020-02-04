const frame = require('.')

test('Test 1', () => {
  const yolo = '@@@@@@@@\n@      @\n@ Yolo @\n@      @\n@@@@@@@@'
  expect(frame('Yolo', '@')).toBe(yolo)
})

test('Test 2', () => {
  const yolo2 = '********\n*      *\n* Yolo *\n*      *\n********'
  expect(frame('Yolo')).toBe(yolo2)
})
