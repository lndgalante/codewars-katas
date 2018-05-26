const rooms = require('.')

test('Test 1', () => {
  const solution = {
    first: {
      description: 'This is the first room',
      items: {
        chair: 'The old chair looks comfortable',
        lamp: 'This lamp looks ancient',
      },
    },
    second: {
      description: 'This is the second room',
      items: {
        couch: 'This couch looks like it would hurt your back',
        table: 'On the table there is an unopened bottle of water',
      },
    },
  }

  expect(rooms).toEqual(solution)
})
