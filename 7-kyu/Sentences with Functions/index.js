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

const Adam = str => addNext('Adam', str)
const has = str => addNext('has', str)
const a = str => addNext('a', str)
const dog = str => addNext('dog', str)
const The = str => addNext('The', str)
const name = str => addNext('name', str)
const of = str => addNext('of', str)
const the = str => addNext('the', str)
const is = str => addNext('is', str)
const also = str => addNext('also', str)

// Function Export
module.exports = { Adam, has, a, dog, The, name, of, the, is, also }
