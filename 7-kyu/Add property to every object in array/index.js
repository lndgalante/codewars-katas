/* eslint no-unused-vars: 0 */

/*
  Title:
    Add property to every object in array

  Description:
    Your task is to add a new property usersAnswer to every object in the array questions.
    The value of usersAnswer should be set to null.
    The solution should work for array of any length.

  Examples:
    var questions = [{
        question: "What's the currency of the USA?",
        choices: ["US dollar", "Ruble", "Horses", "Gold"],
        corAnswer: 0
    }, {
        question: "Where was the American Declaration of Independence signed?",
        choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
        corAnswer: 0
    }];

    After adding the property the result should be:

    var questions = [{
        question: "What's the currency of the USA?",
        choices: ["US dollar", "Ruble", "Horses", "Gold"],
        corAnswer: 0,
        usersAnswer: null
    }, {
        question: "Where was the American Declaration of Independence signed?",
        choices: ["Philadelphia", "At the bottom", "Frankie's pub", "China"],
        corAnswer: 0,
        usersAnswer: null
    }];

  Notes:
    The questions array is already defined for you and is not the same as the one in the example.

  Kata Link:
    https://www.codewars.com/kata/add-property-to-every-object-in-array

  Discuss Link:
    https://www.codewars.com/kata/add-property-to-every-object-in-array/discuss

  Solutions Link:
    https://www.codewars.com/kata/add-property-to-every-object-in-array/solutions
*/

// Long Solution
const addNewProperty = (array, property, value) =>
  array.map(object => ({ ...object, [property]: value }))

let questions = [
  {
    question: "What's the currency of the USA?",
    choices: ['US dollar', 'Ruble', 'Horses', 'Gold'],
    corAnswer: 0,
  },
  {
    question: 'Where was the American Declaration of Independence signed?',
    choices: ['Philadelphia', 'At the bottom', "Frankie's Pub", 'China'],
    corAnswer: 0,
  },
]

questions = addNewProperty(questions, 'usersAnswer', null)

// Function Export
module.exports = addNewProperty
