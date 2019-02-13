/*
  Title:
    Turn any word into a beef taco

  Description:
    If you like Taco Bell, you will be familiar with their signature doritos locos taco. They're very good.
    Why can't everything be a taco? We're going to attempt that here, turning every word we find into the taco bell recipe with each ingredient.
    We want to input a word as a string, and return a list representing that word as a taco.

    Key
      all vowels (except 'y') = beef
      t = tomato
      l = lettuce
      c = cheese
      g = guacamole
      s = salsa

  Notes:
    - We do not care about case here. 'S' is therefore equivalent to 's' in our taco.
    - Ignore all other letters; we don't want our taco uneccesarily clustered or else it will be too difficult to eat.
    - Note that no matter what ingredients are passed, our taco will always have a shell.

  Kata Link:
    https://www.codewars.com/kata/turn-any-word-into-a-beef-taco

  Discuss Link:
    https://www.codewars.com/kata/turn-any-word-into-a-beef-taco/discuss

  Solutions Link:
    https://www.codewars.com/kata/turn-any-word-into-a-beef-taco/solutions
*/

// Long Solution
/*
const dictionary = {
  a: 'beef',
  e: 'beef',
  i: 'beef',
  o: 'beef',
  u: 'beef',
  t: 'tomato',
  l: 'lettuce',
  c: 'cheese',
  g: 'guacamole',
  s: 'salsa',
}

const tacofy = word => [
  'shell',
  ...(word.toLowerCase().match(/[aeioutlcgs]/g) || []).map(char => dictionary[char]),
  'shell',
]
*/

// Short Solution
const dictionary = {
  t: 'tomato',
  l: 'lettuce',
  c: 'cheese',
  g: 'guacamole',
  s: 'salsa',
}

const tacofy = word => [
  'shell',
  ...(word.toLowerCase().match(/[aeioutlcgs]/g) || []).map(char => dictionary[char] || 'beef'),
  'shell',
]

// Function Export
module.exports = tacofy
