/*
  Title:
    Length of the line segment

  Description:
    Find the length between 2 co-ordinates.  The co-ordinates are made of integers between -20 and 20 and will be given in the form of a 2D array:
    (0,0) and (5,-7) would be [ [ 0 , 0 ] , [ 5, -7 ] ]
    The function must return the answer rounded to 2 decimal places in the form of a string.
    lengthOfLine([ [ 0 , 0 ] , [ 5, -7 ] ]); => "8.60"

    length_of_line([[0, 0], [5, -7]]) => "8.60"

    length_of_line([[0, 0], [5, -7]]) # => "8.60"

    If the 2 given co-ordinates are the same, the returned length should be "0.00"


  Examples:

  Notes:

  Kata Link:
    https://www.codewars.com/kata/length-of-the-line-segment

  Discuss Link:
    https://www.codewars.com/kata/length-of-the-line-segment/discuss

  Solutions Link:
    https://www.codewars.com/kata/length-of-the-line-segment/solutions
*/

// Long Solution
/*
const lengthOfLine = ([[x1, y1], [x2, y2]]) => Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2).toFixed(2)
*/

// Short Solution
const lengthOfLine = ([[x1, y1], [x2, y2]]) => Math.hypot(x2 - x1, y2 - y1).toFixed(2)

// Function Export
module.exports = lengthOfLine
