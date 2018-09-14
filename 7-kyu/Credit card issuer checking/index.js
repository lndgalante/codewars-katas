/*
  Title:
    Credit card issuer checking

  Description:
    Given a credit card number we can determine who the issuer/vendor is with a few basic knowns.

    Complete the function getIssuer() that will use the values shown below to determine the card issuer for a given card number. If the number cannot be matched then the function should return the string Unknown.

    | Card Type  | Begins With          | Number Length |
    |------------|----------------------|---------------|
    | AMEX       | 34 or 37             | 15            |
    | Discover   | 6011                 | 16            |
    | Mastercard | 51, 52, 53, 54 or 55 | 16            |
    | VISA       | 4                    | 13 or 16      |

  Examples:
    getIssuer(4111111111111111) == "VISA"
    getIssuer(4111111111111) == "VISA"
    getIssuer(4012888888881881) == "VISA"
    getIssuer(378282246310005) == "AMEX"
    getIssuer(6011111111111117) == "Discover"
    getIssuer(5105105105105100) == "Mastercard"
    getIssuer(5105105105105106) == "Mastercard"
    getIssuer(9111111111111111) == "Unknown"

  Kata Link:
    https://www.codewars.com/kata/credit-card-issuer-checking

  Discuss Link:
    https://www.codewars.com/kata/credit-card-issuer-checking/discuss

  Solutions Link:
    https://www.codewars.com/kata/credit-card-issuer-checking/solutions
*/

// Long Solution
/*
const getIssuer = number => {
  const numberString = String(number)

  if (/(?:34|37)/.test(numberString) && numberString.length === 15) {
    return 'AMEX'
  }

  if (numberString.startsWith('6011') && numberString.length === 16) {
    return 'Discover'
  }

  if (/^5[1-5]/g.test(numberString) && numberString.length === 16) {
    return 'Mastercard'
  }

  if (
    numberString.startsWith('4') &&
    (numberString.length === 13 || numberString.length === 16)
  ) {
    return 'VISA'
  }

  return 'Unknown'
}
*/

// Short Solution
/*
const getIssuer = number => {
  const numberString = String(number)

  if (/^3[4|7]\d{13}$/.test(numberString)) return 'AMEX'
  if (/^6011\d{12}$/.test(numberString)) return 'Discover'
  if (/^5[1-5]\d{14}$/.test(numberString)) return 'Mastercard'
  if (/^4(\d{12}|\d{15})$/.test(numberString)) return 'VISA'

  return 'Unknown'
}
*/

// Alternative Solution
const issuers = {
  AMEX: /^3[4|7]\d{13}$/,
  Discover: /^6011\d{12}$/,
  Mastercard: /^5[1-5]\d{14}$/,
  VISA: /^4(\d{12}|\d{15})$/,
}

const getIssuer = number => {
  const match = Object.entries(issuers).find(([_, regex]) => regex.test(number))
  return match ? match[0] : 'Unknown'
}

// Function Export
module.exports = getIssuer
