/*
  Title:
    254 shades of grey

  Description:
    Why would we want to stop to only 50 shades of grey? Let's see to how many we can go.

    Write a function that takes a number n as a parameter and return an array containing n shades of grey in hexadecimal code (#aaaaaa for example). The array should be sorted in ascending order starting with #010101, #020202, etc. (using lower case letters).

    function shadesOfGrey(n){
      // returns n shades of grey in an array
    }

    As a reminder, the grey color is composed by the same number of red, green and blue: #010101, #aeaeae, #555555, etc. Also, #000000 and #ffffff are not accepted values.

    When n is negative, just return an empty array. If n is higher than 254, just return an array of 254 elements.

  Kata Link:
    https://www.codewars.com/kata/254-shades-of-grey

  Discuss Link:
    https://www.codewars.com/kata/254-shades-of-grey/discuss

  Solutions Link:
    https://www.codewars.com/kata/254-shades-of-grey/solutions
*/

// Long Solution
const numberToHexadecimal = number => number.toString(16).padStart(2, '0')

const shadesOfGrey = n => {
  if (n < 0) return []

  const max = Math.min(n, 254)

  return Array.from({ length: max }, (_, index) => {
    const hexadecimal = numberToHexadecimal(index + 1)
    return `#${hexadecimal}${hexadecimal}${hexadecimal}`
  })
}

// Function Export
module.exports = shadesOfGrey
