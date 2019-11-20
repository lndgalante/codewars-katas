const kataStatus = require('.')

test('Test 1', () => {
  expect(
    kataStatus({ name: 'Training JS #1', issue: 1, vote: [4, 3, 2, 1], rank: [8, 7, 6], example: true, random: true })
  ).toBe('Beta Status:Waiting for issues to be resolved')
})

test('Test 2', () => {
  expect(
    kataStatus({ name: 'Training JS #1', issue: 0, vote: [4, 3, 2, 1], rank: [8, 7, 6], example: true, random: true })
  ).toBe('Beta Status:Testing & feedback needed')
})

test('Test 3', () => {
  expect(
    kataStatus({
      name: 'Training JS #1',
      issue: 0,
      vote: [4, 4, 3, 2, 1],
      rank: [8, 7, 6],
      example: true,
      random: true,
    })
  ).toBe('Beta Status:Ranking feedback needed')
})

test('Test 4', () => {
  expect(
    kataStatus({
      name: 'Training JS #1',
      issue: 0,
      vote: [4, 4, 3, 2, 1],
      rank: [8, 7, 6, 8, 7, 6, 8, 7, 6],
      example: false,
      random: true,
    })
  ).toBe('Beta Status:Example testcases needed')
})

test('Test 5', () => {
  expect(
    kataStatus({
      name: 'Training JS #1',
      issue: 0,
      vote: [4, 4, 3, 2, 1],
      rank: [8, 7, 6, 8, 7, 6, 8, 7, 6],
      example: false,
      random: false,
    })
  ).toBe('Beta Status:Example and random testcases needed')
})

test('Test 6', () => {
  expect(
    kataStatus({
      name: 'Training JS #1',
      issue: 0,
      vote: [4, 4, 3, 2, 1],
      rank: [8, 7, 6, 8, 7, 6, 8, 7, 6],
      example: true,
      random: true,
    })
  ).toBe('Kata approved. vote scores:14, rank:7kyu')
})
