/*
  Title:
    Replace every nth

  Description:
    Task

    Write a method, that replaces every nth char oldValue with char newValue.

    Method:

    replaceNth(text, n, oldValue, newValue)

    Example:

    n:         2
    oldValue: 'a'
    newValue: 'o'
    "Vader said: No, I am your father!" -> "Vader soid: No, I am your fother!"
      1     2          3        4       -> 2nd and 4th occurence are replaced

    Your method has to be case sensitive!

    As you can see in the example: The first changed is the 2nd 'a'. So the start is always at the nth suitable char and not at the first!

    If n is 0 or negative or if it is larger than the count of the oldValue, return the original text without a change.

    The text and the chars will never be null.

    Have fun coding it and please don't forget to vote and rank this kata! :-)

    I have created other katas. Have a look if you like coding and challenges.

  Kata Link:
    https://www.codewars.com/kata/replace-every-nth

  Discuss Link:
    https://www.codewars.com/kata/replace-every-nth/discuss

  Solutions Link:
    https://www.codewars.com/kata/replace-every-nth/solutions
*/

// Long Solution
/*
const replaceNth = (text, n, oldValue, newValue) => {
  if (n <= 0) return text

  let ocurrencyIndex = 0

  const result = text.replace(new RegExp(oldValue, 'g'), char => {
    ocurrencyIndex++
    return ocurrencyIndex % n === 0 ? newValue : char
  })

  return result
}
*/

// Short Solution
const replaceNth = (text, n, oldValue, newValue, ocurrencyIndex = 0) =>
  n <= 0
    ? text
    : text.replace(
        new RegExp(oldValue, 'g'),
        char => (++ocurrencyIndex % n === 0 ? newValue : char)
      )

// Function Export
module.exports = replaceNth
