/* 
  Title:
    Duplicate Encoder

  Description:
  The goal of this exercise is to convert a string to a new string where each character
  in the new string is '(' if that character appears only once in the original string,
  or ')' if that character appears more than once in the original string.
  Ignore capitalization when determining if a character is a duplicate.

  Examples:
    "din" => "((("

    "recede" => "()()()"

    "Success" => ")())())"

    "(( @" => "))(("

  Notes:
    There is a flaw in the JS version, that may occur in the random tests.
    Do not hesitate to do several attempts before modifying your code if you fail there. 

    Assertion messages may be unclear about what they display in some languages.
    If you read "...It Should encode XXX", the "XXX" is actually the expected result, not the input!
    (these languages are locked so that's not possible to correct it).
  
  Link:
    https://www.codewars.com/kata/duplicate-encoder
*/

// Long Solution
function duplicateEncode(word) {
  const wordSplitted = word.split('')
  const repeated = wordSplitted
    .map((char, index) => {
      const wordArr = word.split('')
      wordArr.splice(index, 1)

      const repeats = wordArr.reduce((a, b) => (b === char ? a + 1 : a), 0)

      console.log(repeats)
      return {
        char,
        repeats,
      }
    })
    .map(({ char, repeats }) => (repeats >= 1 ? ')' : '('))
    .join('')

  return repeated
}

// Short Solution

// Test to pass
console.log(duplicateEncode('din'))
// => It should return "((("
console.log(duplicateEncode('recede'))
// => It should return "()()()"
console.log(duplicateEncode('Success'))
// => It should return ")())())"
console.log(duplicateEncode('(( @'))
// => It should return "))(("
