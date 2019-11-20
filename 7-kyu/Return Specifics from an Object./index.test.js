const returnSpecifics = require('.')

test('Test 1', () => {
  expect(
    returnSpecifics({
      a: 1,
      b: 2,
      c: 3,
      d: 'd',
      e: 'dsds',
      add(a, b) {
        return a + b
      },
      g: 34,
    })
  ).toEqual([1, 2, 3, 34, 'add'])
})

test('Test 2', () => {
  expect(
    returnSpecifics({
      a: 10,
      b: -20,
      c: true,
      d: 'd',
      e: 50,
      subtract(a, b) {
        return a - b
      },
      g: 100,
    })
  ).toEqual([10, -20, 50, 100, 'subtract'])
})

test('Test 3', () => {
  expect(returnSpecifics({ a: 44456, b: 999, c: true, d: 'd', e: 5094430, arr: [1, 2, 3], g: 1980700 })).toEqual([
    44456,
    999,
    5094430,
    1980700,
  ])
})

test('Test 4', () => {
  expect(
    returnSpecifics({
      add(a, b) {
        return a + b
      },
      b: [3, 5, 6],
      c: true,
      d: 'd',
      double(a) {
        return a * a
      },
      subtract(a, b) {
        return a - b
      },
      g: false,
    })
  ).toEqual(['add', 'double', 'subtract'])
})

test('Test 5', () => {
  expect(returnSpecifics({})).toEqual(['The Object is Empty'])
})
