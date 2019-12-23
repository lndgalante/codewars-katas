const nameFile = require('.')

test('Test 1', () => {
  expect(nameFile('IMG <index_no>', 4, 1)).toEqual(['IMG 1', 'IMG 2', 'IMG 3', 'IMG 4'])
})

test('Test 2', () => {
  expect(nameFile('image #<index_no>.jpg', 3, 7)).toEqual(['image #7.jpg', 'image #8.jpg', 'image #9.jpg'])
})

test('Test 3', () => {
  expect(nameFile('#<index_no> #<index_no>', 3, -2)).toEqual(['#-2 #-2', '#-1 #-1', '#0 #0'])
})

test('Test 4', () => {
  expect(nameFile('<file> number <index_no>', 5, 0)).toEqual([
    '<file> number 0',
    '<file> number 1',
    '<file> number 2',
    '<file> number 3',
    '<file> number 4',
  ])
})

test('Test 5', () => {
  expect(nameFile('<file_no> number <index_no>', 2, -1)).toEqual(['<file_no> number -1', '<file_no> number 0'])
})

test('Test 6', () => {
  expect(nameFile('file', 2, 3)).toEqual(['file', 'file'])
})

test('Test 7', () => {
  expect(nameFile('<file_no> number <index_no>', -1, 0)).toEqual([])
})

test('Test 8', () => {
  expect(nameFile('file <index_no>', 2, 0.1)).toEqual([])
})

test('Test 9', () => {
  expect(nameFile('file <index_no>', 0.2, 0)).toEqual([])
})

test('Test 10', () => {
  expect(nameFile('file <index_no>', 0, 0)).toEqual([])
})
