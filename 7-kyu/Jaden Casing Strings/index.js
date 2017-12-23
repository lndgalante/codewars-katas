/*
  Title:
    Jaden Casing Strings

  Description:
    Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013).
    Jaden is also known for some of his philosophy that he delivers via Twitter.
    When writing on Twitter, he is known for almost always capitalizing every word.

    Your task is to convert strings to how they would be written by Jaden Smith.
    The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

  Examples:
    Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
    Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"

  Notes:
    Note that the Java version expects a return value of null for an empty string or null.

  Kata Link:
    https://www.codewars.com/kata/jaden-casing-strings

  Discuss Link:
    https://www.codewars.com/kata/jaden-casing-strings/discuss

  Solutions Link:
    https://www.codewars.com/kata/jaden-casing-strings/solutions
*/

// Long Solution
/*
String.prototype.toJadenCase = function() {
  return this.split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}
*/

/* Short Solution - RegEx here https://regexr.com/3h1tc
^ Matches the beginning of the string
| Acts like the boolean OR
\s Matches any whitespace character
(^|\s)[a-z] Matches the beginning of each char with it space after it */
String.prototype.toJadenCase = function() {
  return this.replace(/(^|\s)[a-z]/g, x => x.toUpperCase())
}

// Function Export
module.exports = String.prototype.toJadenCase
