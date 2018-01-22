/*
  Title:

  Description:
    Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

  Examples:
    domainName("http://github.com/carbonfive/raygun") == "github"
    domainName("http://www.zombie-bites.com") == "zombie-bites"
    domainName("https://www.cnet.com") == "cnet"

  Kata Link:
    https://www.codewars.com/kata/extract-the-domain-name-from-a-url-1

  Discuss Link:
    https://www.codewars.com/kata/extract-the-domain-name-from-a-url-1/discuss

  Solutions Link:
    https://www.codewars.com/kata/extract-the-domain-name-from-a-url-1/solutions
*/

// Long Solution
/*
function domainName(url) {
  return url
    .replace('http://', '')
    .replace('https://', '')
    .replace('www.', '')
    .split('.')[0]
}
*/

// Short Solution
const domainName = url => url.replace(/.+\/\/|www.|\..+/g, '')

// Function Export
module.exports = domainName
