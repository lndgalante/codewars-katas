/*
  Title:
    Sentences with Functions

  Description:
    Implement all required functions in order to create the following sentences by calling those functions

  Examples:
    Adam(has(a(dog())));
    // must return "Adam has a dog."

    The(name(of(the(dog(is(also(Adam())))))));
    // must return "The name of the dog is also Adam."

  Kata Link:
    https://www.codewars.com/kata/sentences-with-functions

  Discuss Link:
    https://www.codewars.com/kata/sentences-with-functions/discuss

  Solutions Link:
    https://www.codewars.com/kata/sentences-with-functions/solutions
*/

// Long Solution
const addNext = (current, next) => (next ? `${current} ${next}` : `${current}.`)

const Adam = string => addNext('Adam', string)
const has = string => addNext('has', string)
const a = string => addNext('a', string)
const dog = string => addNext('dog', string)
const The = string => addNext('The', string)
const name = string => addNext('name', string)
const of = string => addNext('of', string)
const the = string => addNext('the', string)
const is = string => addNext('is', string)
const also = string => addNext('also', string)

// Function Export
module.exports = { Adam, has, a, dog, The, name, of, the, is, also }
