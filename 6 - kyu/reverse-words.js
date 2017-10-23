/* 
  Title:
    Reversed Words
    
  Description:
    Complete the solution so that it reverses all of the words within the string passed in.

  Example:
    reverseWords("The greatest victory is that which requires no battle")
    Should return "battle no requires which that is victory greatest The"

  Link:
    https://www.codewars.com/kata/51c8991dee245d7ddf00000e
*/

function reverseWords(str) {
  return str
    .split(' ')
    .reverse()
    .join(' ')
}

// Test to pass
console.log(reverseWords('hello world!'))
// It should return => "world! hello"
console.log(reverseWords("yoda doesn't speak like this"))
// It should return => "this like speak doesn't yoda"
console.log(reverseWords('foobar'))
// It should return =>  "foobar")
console.log(reverseWords('kata editor'))
// It should return =>  "editor kata"
console.log(reverseWords('row row row your boat'))
// It should return =>  "boat your row row row"
