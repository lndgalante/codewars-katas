/* eslint no-unused-vars: 0 */

/*
  Title:
    Creating Elements with React

  Description:
    React is "A JavaScript library for building user interfaces". It's become a popular option amongst JavaScript frameworks and now it's supported in Codewars!
    For this first React Kata, we'll be exploring how to create elements with React. React has a high level method  React.createElement for exactly this purpose. It's usage is as simple as:
    React.createElement('div', { prop: 'value' }, 'Hello world!');
    Where the first argument is the element tag, the second argument is the element's properties and the third tag is the content you want to add into the element.
    Your task is to create two wrapper methods called createElement and createUnorderedList for our own purposes.
    The createElement method should take in a content, tag, and properties, similar to the React method. We should be able to call this method with just content like createElement('Hello World') and by default it should create a div with the content "Hello World".
    The createUnorderedList method should take in list, which is an array strings and create a ul element, whose children are li elements containing the values from the list. Given an array ['apples', 'oranges', 'bananas'], the createUnorderedList method should return a react element with this heirarchy:
    <ul>
      <li>apples</li>
      <li>oranges</li>
      <li>bananas</li>
    </ul>
    Also, React suggests that you always supply a key property when creating dynamic children so be sure to create a unique key for each child li created.
    For more general information about React check out the docs!


  Examples:

  Notes:

  Kata Link:
    https://www.codewars.com/kata/creating-elements-with-react

  Discuss Link:
    https://www.codewars.com/kata/creating-elements-with-react/discuss

  Solutions Link:
    https://www.codewars.com/kata/creating-elements-with-react/solutions
*/

// Long Solution
/*
const React = require('react')

function createElement(content, tag = 'div', props) {
  return React.createElement(tag, props, content)
}

function createUnorderedList(list) {
  const elements = list.map((el, key) => createElement(el, 'li', { key }))
  return createElement(elements, 'ul')
}
*/

// Short Solution
const createElement = (content, Tag = 'div', props) => <Tag {...props}>{content}</Tag>

const createUnorderedList = list => (
  <ul>
    {list.map((item, i) => (
      <li key={i}>{item}</li>
    ))}
  </ul>
)

// Function Export
module.exports = { createElement, createUnorderedList }
