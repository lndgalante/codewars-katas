/*
  Title:
    Coding 3min: Bug in Apple

  Description:
    Oh no! Timmy's List Class has broken! Can you help timmy and fix his class? Timmy has a List class he has created, this is used for type strict arrays (which timmy calls Lists).
    When timmy calls the Count property of the list it still remains at 0 when adding items.
    Also it fails when timmy trys to chain the adds e.g. javascript myList.add(0).add(1) python my_list.add(0).add(1) ruby my_list.add(0).add(1)

  Kata Link:
    https://www.codewars.com/kata/class-conundrum-bug-fixing-number-7

  Discuss Link:
    https://www.codewars.com/kata/class-conundrum-bug-fixing-number-7/discuss

  Solutions Link:
    https://www.codewars.com/kata/class-conundrum-bug-fixing-number-7/solutions
*/

// Long Solution
/*
class List {
  constructor(type) {
    this.type = type
    this.items = []
    this.count = 0
  }

  add(item) {
    if (typeof item !== this.type) return `This item is not of type: ${this.type}`

    this.items = [...this.items, item]
    this.count = this.items.length

    return this
  }
}
*/

// Short Solution
class List {
  constructor(type) {
    this.type = type
    this.items = []
  }

  get count() {
    return this.items.length
  }

  add(item) {
    if (typeof item !== this.type) return `This item is not of type: ${this.type}`
    this.items = [...this.items, item]

    return this
  }
}

// Function Export
module.exports = List
