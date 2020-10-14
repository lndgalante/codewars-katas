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

const findNeedle = (haystack) => {
  let y = `found the needle at position ${haystack.indexOf('needle')}`
  return y
}

// Function Export
module.exports = findNeedle
