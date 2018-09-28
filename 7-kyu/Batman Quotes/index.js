/*
  Title:
    Batman Quotes

  Description:
    Batman & Robin have gotten into quite a pickle this time.
    The Joker has mixed up their iconic quotes and also replaced one of the characters in their names, with a number.
    They need help getting things back in order.

    Implement the getQuote method which takes in an array of quotes,
    and a string comprised of letters and a single number (e.g. "Rob1n")
    where the number corresponds to their quote indexed in the passed in array.

  Examples:
    Return the quote along with the character who said it:

    getQuote(["I am vengeance. I am the night. I am Batman!", "Holy haberdashery, Batman!", "Let's put a smile on that faaaceee!"], "Rob1n")
      // =>  "Robin: Holy haberdashery, Batman!

  Notes:
    You are guaranteed that the number in the passed in string is placed somewhere after the first character of the string.
    The quotes either belong to "Batman", "Robin", or "Joker".

  Kata Link:
    https://www.codewars.com/kata/batman-quotes

  Discuss Link:
    https://www.codewars.com/kata/batman-quotes/discuss

  Solutions Link:
    https://www.codewars.com/kata/batman-quotes/solutions
*/

// Long Solution
const getQuote = (quotes, hero) => {
  const heroes = { B: 'Batman', R: 'Robin', J: 'Joker' }
  const index = hero.match(/\d/g)
  const heroParsed = heroes[hero[0]]

  return `${heroParsed}: ${quotes[index]}`
}

// Function Export
module.exports = getQuote
