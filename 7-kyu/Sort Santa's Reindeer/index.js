/*
  Title:
    Sort Santa's Reindeer

  Description:
    Happy Holidays fellow Code Warriors!

    Now, Dasher! Now, Dancer! Now, Prancer, and Vixen! On, Comet! On, Cupid!
    On, Donder and Blitzen! That's the order Santa wanted his reindeer...right?
    What do you mean he wants them in order by their last names!?
    Looks like we need your help Code Warrior!

    Sort Santa's Reindeer
    Write a function called sortReindeer (sort_reindeer in Ruby) that accepts an array of Reindeer names,
    and returns an array with the Reindeer names sorted by their last names.

  Examples:
    sortReindeer([
      "Dasher Tonoyan",
      "Dancer Moore",
      "Prancer Chua",
      "Vixen Hall",
      "Comet Karavani",
      "Cupid Foroutan",
      "Donder Jonker",
      "Blitzen Claus"
    ])

    => returns

    [
      "Prancer Chua",
      "Blitzen Claus",
      "Cupid Foroutan",
      "Vixen Hall",
      "Donder Jonker",
      "Comet Karavani",
      "Dancer Moore",
      "Dasher Tonoyan",
    ]

  Kata Link:
    https://www.codewars.com/kata/sort-santas-reindeer

  Discuss Link:
    https://www.codewars.com/kata/sort-santas-reindeer/discuss

  Solutions Link:
    https://www.codewars.com/kata/sort-santas-reindeer/solutions
*/

// Long Solution
/*
const sortReindeer = reindeerNames =>
  [...reindeerNames].sort((currentName, nextName) => {
    const currentLastname = currentName.split(' ')[1]
    const nextLastname = nextName.split(' ')[1]

    return currentLastname.localeCompare(nextLastname)
  })
*/

// Short Solution
const sortReindeer = reindeerNames =>
  [...reindeerNames].sort((currentName, nextName) =>
    currentName.split(' ')[1].localeCompare(nextName.split(' ')[1])
  )

// Function Export
module.exports = sortReindeer
