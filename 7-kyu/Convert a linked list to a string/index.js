/*
  Title:
    Convert a linked list to a string

  Description:
    Related Kata

    Although this Kata is not part of an official Series, you may also want to try out Parse a linked list from a string if you enjoyed this Kata.
    Preloaded

    Preloaded for you is a class, struct or derived data type Node (depending on the language) used to construct linked lists in this Kata:

    class Node {
    constructor(data, next = null) {
      this.data = data;
      this.next = next;
    }
    }

    If you are attempting this Kata in NASM then note that the code example shown directly above may not be relevant; please refer to the Sample Tests (written in C) for the exact definition of the Node structure.
    Prerequisites

    This Kata assumes that you are already familiar with the idea of a linked list. If you do not know what that is, you may want to read up on this article on Wikipedia. Specifically, the linked lists this Kata is referring to are singly linked lists, where the value of a specific node is stored in its data/$data/Data property, the reference to the next node is stored in its next/$next/Next/next_node property and the terminator for a list is null/NULL/None/nil/nullptr/null().
    Task

    If you are attempting this Kata in NASM, the code examples shown below may not be relevant at all - please refer to the Sample Tests (written in C) for the exact requirements.

    Create a function stringify which accepts an argument list/$list and returns a string representation of the list. The string representation of the list starts with the value of the current Node, specified by its data/$data/Data property, followed by a whitespace character, an arrow and another whitespace character (" -> "), followed by the rest of the list. The end of the string representation of a list must always end with null/NULL/None/nil/nullptr/null() (all caps or all lowercase depending on the language you are undertaking this Kata in). For example, given the following list:

    new Node(1, new Node(2, new Node(3)))

    ... its string representation would be:

    "1 -> 2 -> 3 -> null"

    And given the following linked list:

    new Node(0, new Node(1, new Node(4, new Node(9, new Node(16)))))

    ... its string representation would be:

    "0 -> 1 -> 4 -> 9 -> 16 -> null"

    Note that null/NULL/None/nil/nullptr/null() itself is also considered a valid linked list. In that case, its string representation would simply be "null"/"NULL"/"None"/"nil"/"nullptr"/@"NULL"/"null()" (again, depending on the language).

    For the simplicity of this Kata, you may assume that any Node in this Kata may only contain non-negative integer values. For example, you will not encounter a Node whose data/$data/Data property is "Hello World".

  Kata Link:
    https://www.codewars.com/kata/convert-a-linked-list-to-a-string

  Discuss Link:
    https://www.codewars.com/kata/convert-a-linked-list-to-a-string/discuss

  Solutions Link:
    https://www.codewars.com/kata/convert-a-linked-list-to-a-string/solutions
*/

// Preloaded data
class Node {
  constructor(data, next = null) {
    this.data = data
    this.next = next
  }
}

// Long Solution
/*
const stringify = (list, result = []) => {
  if (list && !isNaN(list.data)) result.push(list.data)
  if (list && list.next) return stringify(list.next, result)

  return [...result, 'null'].join(' -> ')
}
*/

// Short Solution
const stringify = list => (list ? `${list.data} -> ${stringify(list.next)}` : 'null')

// Function Export
module.exports = { stringify, Node }
