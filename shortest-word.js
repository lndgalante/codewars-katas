/* 
  Instructions ⚔️
  Simple, given a string of words, return the length of the shortest word(s).
  String will never be empty and you do not need to account for different data types. 
*/

// Long Solution
function findShort(s) {
  const wordsArray = s.split(' ')
  const wordsLength = wordsArray.map(word => word.length)
  const minWordLength = Math.min(...wordsLength)
  return minWordLength
}

// One-line Solution
const findShort = s => Math.min(...s.split(' ').map(word => word.length))

findShort('bitcoin take over the world maybe who knows perhaps') // -> It should return 3
findShort('turns out random test cases are easier than writing out basic ones') // -> It should return 3
