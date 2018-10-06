/* eslint no-return-assign: 0 */

/*
  Title:
    HTML Generator

  Description:
    Another rewarding day in the fast-paced world of WebDev.
    Man, you love your job! But as with any job, somtimes things can get a little tedious.
    Part of the website you're working on has a very repetitive structure, and writing all the HTML by hand is a bore.
    Time to automate! You want to write some functions that will generate the HTML for you.

    To organize your code, make of all your functions methods of a class called HTMLGen.
    Tag functions should be named after the tag of the element they create.
    Each function will take one argument, a string, which is the inner HTML of the element to be created.
    The functions will return the string for the appropriate HTML element.

    Your HTMLGen class should have methods to create the following elements:

    a
    b
    p
    body
    div
    span
    title

  Examples:
    const g = new HTMLGen();
    const paragraph = g.p('Hello, World!');
    const block = g.div(paragraph);

    // The following are now true
    paragraph === '<p>Hello, World!</p>'
    block === '<div><p>Hello, World!</p></div>'

  Notes:
    The comment method should wrap its argument with an HTML comment.
    It is the only method whose name does not match an HTML tag.
    So, g.comment('i am a comment') must produce <!--i am a comment-->.

  Kata Link:
    https://www.codewars.com/kata/html-generator

  Discuss Link:
    https://www.codewars.com/kata/html-generator/discuss

  Solutions Link:
    https://www.codewars.com/kata/html-generator/solutions
*/

// Long Solution
/*
class HTMLGen {
  a(innerHTML) {
    return `<a>${innerHTML}</a>`
  }

  b(innerHTML) {
    return `<b>${innerHTML}</b>`
  }

  p(innerHTML) {
    return `<p>${innerHTML}</p>`
  }

  body(innerHTML) {
    return `<body>${innerHTML}</body>`
  }

  div(innerHTML) {
    return `<div>${innerHTML}</div>`
  }

  span(innerHTML) {
    return `<span>${innerHTML}</span>`
  }

  title(innerHTML) {
    return `<title>${innerHTML}</title>`
  }

  comment(comment) {
    return `<!--${comment}-->`
  }
}
*/

// Short Solution
function HTMLGen() {
  const tags = ['a', 'b', 'p', 'body', 'div', 'span', 'title']

  tags.forEach(
    tag => (HTMLGen.prototype[tag] = content => `<${tag}>${content}</${tag}>`)
  )

  HTMLGen.prototype.comment = content => `<!--${content}-->`
}

// Function Export
module.exports = HTMLGen
