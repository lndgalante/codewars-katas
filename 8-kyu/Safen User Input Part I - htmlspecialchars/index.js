/*
  Title:
    Safen User Input Part I - htmlspecialchars

  Description:
    You are a(n) novice/average/experienced/professional/world-famous Web Developer (choose one) who owns a(n) simple/clean/slick/beautiful/complicated/professional/business website (choose one or more) which contains form fields so visitors can send emails or leave a comment on your website with ease. However, with ease comes danger. Every now and then, a hacker visits your website and attempts to compromise it through the use of XSS (Cross Site Scripting). This is done by injecting script tags into the website through form fields which may contain malicious code (e.g. a redirection to a malicious website that steals personal information).

    Mission
    Your mission is to implement a function htmlspecialchars() that converts the following potentially harmful characters:

    < --> &lt;
    > --> &gt;
    " --> &quot;
    & --> &amp;
    Good luck :D

    Extension
    If you are an experienced Javascript programmer, try shortening your code as much as possible and optimise it to minimise run time. Experienced programmers should be able to complete this exercise in one line of code.

  Kata Link:
    https://www.codewars.com/kata/safen-user-input-part-i-htmlspecialchars

  Discuss Link:
    https://www.codewars.com/kata/safen-user-input-part-i-htmlspecialchars/discuss

  Solutions Link:
    https://www.codewars.com/kata/safen-user-input-part-i-htmlspecialchars/solutions
*/

// Long Solution
/*
const dictionary = {
  ['<']: '&lt;',
  ['>']: '&gt;',
  ['"']: '&quot;',
  ['&']: '&amp;',
}

const htmlspecialchars = formData =>
  formData
    .split('')
    .map(char => (dictionary.hasOwnProperty(char) ? dictionary[char] : char))
    .join('')
*/

// Short Solution
const htmlspecialchars = formData =>
  formData.replace(
    /[<>"&]/g,
    char => ({ '<': '&lt;', '>': '&gt;', '"': '&quot;', '&': '&amp;' }[char])
  )

// Function Export
module.exports = htmlspecialchars
