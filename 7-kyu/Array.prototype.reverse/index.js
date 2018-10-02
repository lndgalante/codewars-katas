/* eslint no-extend-native: 0 */
/* eslint no-use-extend-native/no-use-extend-native: 0 */

/*
  Title:
    Array.prototype.reverse()

  Description:
    The Array's reverse() method has gone missing! Re-write it, quick-sharp!

    When this method is called, it reverses the order of the items in the original array.
    Then then it returns that same, original array.
    No new arrays should need to be created to pass this kata.

  Examples:
    var input = [1, 2, 3, 4];
    input.reverse(); // == [4, 3, 2, 1]  // returned by .reverse()
    input;           // == [4, 3, 2, 1]  // items reordered in the original array

  Kata Link:
    https://www.codewars.com/kata/array-dot-prototype-dot-reverse

  Discuss Link:
    https://www.codewars.com/kata/array-dot-prototype-dot-reverse/discuss

  Solutions Link:
    https://www.codewars.com/kata/array-dot-prototype-dot-reverse/solutions
*/

// Long Solution
/*
Array.prototype.reverse = function() {
  let index = 0
  const copy = [...this]

  for (let i = copy.length - 1; i >= 0; i--) {
    this[index] = copy[i]
    index++
  }

  return this
}
*/

// Short Solution
Array.prototype.reverse = function() {
  const reversed = this.reduceRight((array, element) => [...array, element], [])

  Object.assign(this, reversed)

  return this
}

// Function Export
module.exports = Array
