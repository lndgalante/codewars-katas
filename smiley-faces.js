/* 
  Description ⚔️
    Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

  Rules for a smiling face:
    -Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
    -A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
    -Every smiling face must have a smiling mouth that should be marked with either ) or D.
    No additional characters are allowed except for those mentioned.
    
  Valid smiley face examples:
    :) :D ;-D :~)

  Invalid smiley faces:
    ;( :> :} :] 

    Note: 
    In case of an empty array return 0. You will not be tested with invalid input (input will always be an array)
*/

// Long Solution
function countSmileys(faces) {
  if (faces.length === 0) return 0

  const smiles = faces.filter(face => {
    const parts = face.split('')
    const hasEyes = parts[0].includes(':') || parts[0].includes(';')
    const hasNose = parts[1].includes('-') || parts[1].includes('~')
    const hasSmile = pos => parts[pos].includes(')') || parts[pos].includes('D')

    if (parts.length === 2) {
      if (hasEyes && hasSmile(1)) return face
    }

    if (parts.length === 3) {
      if (hasEyes && hasNose && hasSmile(2)) return face
    }
  })

  return smiles.length
}

// One-line Solution
function countSmileys(faces) {
  return faces.filter(face => /^[:;][-~]?[)D]$/.test(face)).length
  /* Regex cheatsheet:
      / should be at the start and at the end of the regular expresion
      ^ marks the start of the string
      $ marks the end of the string
      ? makes the previous optional
  */
}

// Test to pass
console.log(countSmileys([])) // -> It should return 0
console.log(countSmileys([':)', ';(', ';}', ':-D'])) // -> It should return 2
console.log(countSmileys([';D', ':-(', ':-)', ';~)'])) // -> It should return 3
console.log(countSmileys([';]', ':[', ';*', ':$', ';-D'])) // -> It should return 1
console.log(countSmileys([':D', ':~)', ';~D', ':)'])) // -> It should return 4
console.log(countSmileys([':)', ':(', ':D', ':O', ':;'])) // -> It should return 2
