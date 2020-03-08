/*
  Title:
    Vasya - Clerk

  Description:
    The new "Avengers" movie has just been released! There are a lot of people at the cinema box office standing in a huge line.
    Each of them has a single 100, 50 or 25 dollars bill. An "Avengers" ticket costs 25 dollars.

    Vasya is currently working as a clerk. He wants to sell a ticket to every single person in this line.

    Can Vasya sell a ticket to each person and give the change if he initially
    has no money and sells the tickets strictly in the order people follow in the line?

    Return YES, if Vasya can sell a ticket to each person and give the change with the bills he has at hand at that moment. Otherwise return NO.

  Examples:
    tickets([25, 25, 50])
      // => YES
    tickets([25, 100])
      // => NO. Vasya will not have enough money to give change to 100 dollars

  Kata Link:
    https://www.codewars.com/kata/vasya-clerk

  Discuss Link:
    https://www.codewars.com/kata/vasya-clerk/discuss

  Solutions Link:
    https://www.codewars.com/kata/vasya-clerk/solutions
*/

// Long Solution
function tickets(peopleInLine) {
  const till = {
    amount25: 0,
    amount50: 0,
    amount100: 0,
  }

  for (const money of peopleInLine) {

    switch (money) {
      case 100:
        if (till.amount25 >= 1 && till.amount50 >= 1) {
          till.amount25--
          till.amount50--
          till.amount100++
        } else if (till.amount25 >= 3) {
          till.amount25 -= 3
          till.amount100++
        } else {
          return 'NO'
        }

        break

      case 50:
        if (till.amount25 >= 1) {
          till.amount25--
          till.amount50++
        } else {
          return 'NO'
        }

        break

      case 25:
        till.amount25++
        break

      default:
        break
    }
  }

  return 'YES'
}

// Function Export
module.exports = tickets
