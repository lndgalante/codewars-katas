/* 
  Title:
    RGB To Hex Conversion

  Description:
    The rgb() method is incomplete. 
    Complete the method so that passing in RGB decimal values will result in a
    hexadecimal representation being returned. 
    The valid decimal values for RGB are 0 - 255. Any (r,g,b) argument values
    that fall out of that range should be rounded to the closest valid value.

  Examples:
    rgb(255, 255, 255) // returns FFFFFF
    rgb(255, 255, 300) // returns FFFFFF
    rgb(0,0,0) // returns 000000
    rgb(148, 0, 211) // returns 9400D3

  Link:
    https://www.codewars.com/kata/rgb-to-hex-conversion
*/

// Long Solution
const rgb = (r, g, b) => {
  return [r, g, b]
    .map(x => {
      if (x > 255) return 'FF'
      if (x < 0) return '00'

      const hex = x.toString(16)
      return hex.length === 1 ? `0${x}` : hex
    })
    .join('')
    .toUpperCase()
}

// Function Export
module.exports = rgb
