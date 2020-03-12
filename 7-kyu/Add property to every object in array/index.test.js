const addNewProperty = require('.')

test('Test 1', () => {
  const questions = [
    {
      question: "What’s the currency of the USA?",
      choices: ['US dollar', 'Ruble', 'Horses', 'Gold'],
      corAnswer: 0,
    },
    {
      question: 'Where was the American Declaration of Independence signed?',
      choices: ['Philadelphia', 'At the bottom', "Frankie’s Pub", 'China'],
      corAnswer: 0,
    },
  ]

  expect(addNewProperty(questions, 'usersAnswer', null)).toEqual([
    {
      question: "What’s the currency of the USA?",
      choices: ['US dollar', 'Ruble', 'Horses', 'Gold'],
      corAnswer: 0,
      usersAnswer: null,
    },
    {
      question: 'Where was the American Declaration of Independence signed?',
      choices: ['Philadelphia', 'At the bottom', "Frankie’s Pub", 'China'],
      corAnswer: 0,
      usersAnswer: null,
    },
  ])
})
