const whosOnline = require('.')

test('Test 1', () => {
  const friends = [
    {
      username: 'David',
      status: 'online',
      lastActivity: 10,
    },
    {
      username: 'Lucy',
      status: 'offline',
      lastActivity: 22,
    },
    {
      username: 'Bob',
      status: 'online',
      lastActivity: 104,
    },
  ]

  expect(whosOnline(friends)).toEqual({
    online: ['David'],
    offline: ['Lucy'],
    away: ['Bob'],
  })
})

test('Test 2', () => {
  const friends = [
    {
      username: 'Lucy',
      status: 'offline',
      lastActivity: 22,
    },
    {
      username: 'Bob',
      status: 'online',
      lastActivity: 104,
    },
  ]

  expect(whosOnline(friends)).toEqual({
    offline: ['Lucy'],
    away: ['Bob'],
  })
})
