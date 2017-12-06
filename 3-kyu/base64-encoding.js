/* 
  Title:
    Base64 Encoding

  Description:
    Extend the String object (JS) or create a function (Python, C#) that converts the value of the String to and from Base64 using the ASCII (UTF-8 for C#) character set.
    Do not use built in functions.

    You can learn more about Base64 encoding and decoding https://en.wikipedia.org/wiki/Base64
  
  Link:
    https://www.codewars.com/kata/5270f22f862516c686000161
*/

String.prototype.toBase64 = function() {
  return Buffer.from(this).toString('base64')
}

String.prototype.fromBase64 = function() {
  return Buffer.from(this, 'base64').toString()
}

console.log('this is a string!!'.toBase64())
// => It should return 'dGhpcyBpcyBhIHN0cmluZyEh'
console.log('dGhpcyBpcyBhIHN0cmluZyEh'.fromBase64())
// => It should return 'this is a string!!'
