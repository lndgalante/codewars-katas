/*
  Title:
    L1: Bartender, drinks!

  Description:
    Write a function getDrinkByProfession/get_drink_by_profession() that receives as input parameter a string, and produces outputs according to the following table:

    Input	Output
      "Jabroni"	            "Patron Tequila"
      "School Counselor"	  "Anything with Alcohol"
      "Programmer"	        "Hipster Craft Beer"
      "Bike Gang Member"	  "Moonshine"
      "Politician"	        "Your tax dollars"
      "Rapper"	            "Cristal"
      anything else	        "Beer"

  Notes:
    Anything else is the default case: if the input to the function is not any of the values in the table, then the return value should be "Beer."
    Make sure you cover the cases where certain words do not show up with correct capitalization. For example, getDrinkByProfession("pOLitiCIaN") should still return "Your tax dollars".

  Kata Link:
    https://www.codewars.com/kata/l1-bartender-drinks

  Discuss Link:
    https://www.codewars.com/kata/l1-bartender-drinks/discuss

  Solutions Link:
    https://www.codewars.com/kata/l1-bartender-drinks/solutions
*/

// Long Solution
const table = {
  jabroni: 'Patron Tequila',
  'school counselor': 'Anything with Alcohol',
  programmer: 'Hipster Craft Beer',
  'bike gang member': 'Moonshine',
  politician: 'Your tax dollars',
  rapper: 'Cristal',
}

const getDrinkByProfession = param => table[param.toLowerCase()] || 'Beer'

// Function Export
module.exports = getDrinkByProfession
