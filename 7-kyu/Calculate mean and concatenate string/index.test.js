const mean = require('.')

test('Test 1', () => {
  const list = [
    'u',
    '6',
    'd',
    '1',
    'i',
    'w',
    '6',
    's',
    't',
    '4',
    'a',
    '6',
    'g',
    '1',
    '2',
    'w',
    '8',
    'o',
    '2',
    '0',
  ]

  expect(mean(list)).toEqual([3.6, 'udiwstagwo'])
})

test('Test 2', () => {
  const list = [
    '0',
    'c',
    '7',
    'x',
    '6',
    '2',
    '3',
    '5',
    'w',
    '7',
    '0',
    'y',
    'v',
    'u',
    'h',
    'i',
    'n',
    'u',
    '0',
    '0',
  ]

  expect(mean(list)).toEqual([3, 'cxwyvuhinu'])
})

test('Test 3', () => {
  const list = [
    '0',
    'u',
    'a',
    'y',
    '0',
    'a',
    '9',
    'q',
    '3',
    'v',
    'g',
    '7',
    '6',
    '4',
    'y',
    'd',
    '8',
    '6',
    '0',
    'd',
  ]

  expect(mean(list)).toEqual([4.3, 'uayaqvgydd'])
})

test('Test 4', () => {
  const list = [
    's',
    'n',
    '9',
    'l',
    '0',
    'm',
    'i',
    'z',
    '9',
    '7',
    'y',
    '4',
    'z',
    '3',
    '3',
    'k',
    '4',
    '1',
    '0',
    'k',
  ]

  expect(mean(list)).toEqual([4, 'snlmizyzkk'])
})

test('Test 5', () => {
  const list = [
    '5',
    'v',
    'u',
    'k',
    '8',
    '4',
    '9',
    'b',
    '9',
    'g',
    '5',
    'z',
    '3',
    'f',
    '6',
    'u',
    'i',
    '6',
    '6',
    't',
  ]

  expect(mean(list)).toEqual([6.1, 'vukbgzfuit'])
})

test('Test 6', () => {
  const list = [
    '1',
    '1',
    '1',
    '1',
    '1',
    '1',
    '1',
    '1',
    '1',
    '0',
    'a',
    'a',
    'd',
    'd',
    'g',
    'q',
    'u',
    'v',
    'y',
    'y',
  ]

  expect(mean(list)).toEqual([0.9, 'aaddgquvyy'])
})

test('Test 7', () => {
  const list = [
    '1',
    '1',
    '1',
    '1',
    '1',
    '1',
    '1',
    '1',
    '1',
    '1',
    'a',
    'a',
    'd',
    'd',
    'g',
    'q',
    'u',
    'v',
    'y',
    'y',
  ]

  expect(mean(list)).toEqual([1, 'aaddgquvyy'])
})
