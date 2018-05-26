const duckDuckGoose = require('.')

class Player {
  constructor(name) {
    this.name = name
  }
}

const exNames = ['a', 'b', 'c', 'd', 'c', 'e', 'f', 'g', 'h', 'z']
const players = exNames.map(n => new Player(n))

test('Test 1', () => {
  expect(duckDuckGoose(players, 1)).toBe('a')
})

test('Test 2', () => {
  expect(duckDuckGoose(players, 3)).toBe('c')
})

test('Test 3', () => {
  expect(duckDuckGoose(players, 10)).toBe('z')
})

test('Test 4', () => {
  expect(duckDuckGoose(players, 20)).toBe('z')
})

test('Test 5', () => {
  expect(duckDuckGoose(players, 30)).toBe('z')
})

test('Test 6', () => {
  expect(duckDuckGoose(players, 18)).toBe('g')
})

test('Test 7', () => {
  expect(duckDuckGoose(players, 28)).toBe('g')
})

test('Test 8', () => {
  expect(duckDuckGoose(players, 12)).toBe('b')
})

test('Test 9', () => {
  expect(duckDuckGoose(players, 2)).toBe('b')
})

test('Test 10', () => {
  expect(duckDuckGoose(players, 7)).toBe('f')
})
