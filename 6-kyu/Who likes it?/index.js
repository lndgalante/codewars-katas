/* 
  Title:
    Who likes it?

  Description:
    You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. 
    We want to create the text that should be displayed next to such an item.

    Implement a function likes :: [String] -> String, which must take in input array, containing the names of people who like an item. 

  Examples:
    It must return the display text as shown in the examples:

    likes [] // must be "no one likes this"
    likes ["Peter"] // must be "Peter likes this"
    likes ["Jacob", "Alex"] // must be "Jacob and Alex like this"
    likes ["Max", "John", "Mark"] // must be "Max, John and Mark like this"
    likes ["Alex", "Jacob", "Mark", "Max"] // must be "Alex, Jacob and 2 others like this"
    
  Notes:
    For more than 4 names, the number in and 2 others simply increases.
  
  Link:
    https://www.codewars.com/kata/who-likes-it
*/

// Long Solution
/*
 function likes(names = []) {
  switch (names.length) {
    case 0:
      return `no one likes this`
    case 1:
      return `${names[0]} likes this`
    case 2:
      return `${names[0]} and ${names[1]} like this`
    case 3:
      return `${names[0]}, ${names[1]} and ${names[2]} like this`
    default:
      return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
  }
} 
*/

// Short Solution
const likes = (names = []) => {
  if (names.length === 0) return `no one likes this`
  if (names.length === 1) return `${names[0]} likes this`
  if (names.length === 2) return `${names[0]} and ${names[1]} like this`
  if (names.length === 3)
    return `${names[0]}, ${names[1]} and ${names[2]} like this`

  return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
}

// Function Export
module.exports = likes
