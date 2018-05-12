/*
  Title:
    Javascript filter - 1

  Description:
    While developing a website, you detect that some of the members have troubles logging in.
    Searching through the code you find that all logins ending with a "_" make problems.
    So you want to write a function that takes an array of pairs of login-names and e-mails, and outputs an array of all login-name, e-mails-pairs from the login-names that end with "_".

    If you have the input-array:

  Examples:
    [ [ "foo", "foo@foo.com" ], [ "bar_", "bar@bar.com" ] ]
    it should output [ [ "bar_", "bar@bar.com" ] ]

  Kata Link:
    https://www.codewars.com/kata/javascript-filter-1

  Discuss Link:
    https://www.codewars.com/kata/javascript-filter-1/discuss

  Solutions Link:
    https://www.codewars.com/kata/javascript-filter-1/solutions
*/

// Long Solution
/*
function searchNames(logins) {
  return logins.filter(login => {
    const loginName = login[0]
    return login[0].match(/_$/)
  })
}
*/

// Short Solution
const searchNames = logins => logins.filter(login => login[0].endsWith('_'))

// Function Export
module.exports = searchNames
