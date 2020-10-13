/*
  Title:
    A Needle in the Haystack

  Description:
    Can you find the needle in the haystack?

    Write a function findNeedle() that takes an array full of junk but containing one "needle"

    After your function finds the needle it should return a message (as a string) that says:

    "found the needle at position " plus the index it found the needle

  Examples:
    find_needle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])
    => 'found the needle at position 5'

    findNeedle(new Object[] {"hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"})
    => 'found the needle at position 5'
*/

// Short Solution
const findNeedle = (haystack) => {
  const position = haystack.indexOf('needle')
  return `found the needle at position ${position}` 
}

// Function Export
module.exports = findNeedle
