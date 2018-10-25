/*
  Title:
    Initialize my name

  Description:
    Some people just have a first name; some people have first and last names and some people have first, middle and last names.

    You task is to initialize the middle names (if there is any).

  Examples:
    'Jack Ryan'                   => 'Jack Ryan'
    'Lois Mary Lane'              => 'Lois M. Lane'
    'Dimitri'                     => 'Dimitri'
    'Alice Betty Catherine Davis' => 'Alice B. C. Davis'

  Kata Link:
    https://www.codewars.com/kata/initialize-my-name

  Discuss Link:
    https://www.codewars.com/kata/initialize-my-name/discuss

  Solutions Link:
    https://www.codewars.com/kata/initialize-my-name/solutions
*/

// Long Solution
/*
const initializeNames = name => {
  const names = name.split(' ')
  if (names.length <= 2) return name

  return names
    .map((name, index) => {
      if (index === 0 || index === names.length - 1) return name
      if (index < names.length - 1) return `${name[0]}.`
    })
    .join(' ')
}
*/

// Short Solution
const initializeNames = name => name.replace(/\s(\w)\w*(?= )/g, ' $1.')

// Function Export
module.exports = initializeNames
