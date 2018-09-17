/*
  Title:
    FIXME: Get Full Name

  Description:
    The code provided is supposed return a person's Full Name given their first and last names.

    But it's not working properly.
    Notes

    The first and/or last names are never null (None in Python), but may be empty.
    Task

    Fix the bug so we can all go home early.

  Kata Link:
    https://www.codewars.com/kata/fixme-get-full-name

  Discuss Link:
    https://www.codewars.com/kata/fixme-get-full-name/discuss

  Solutions Link:
    https://www.codewars.com/kata/fixme-get-full-name/solutions
*/

// Long Solution
/*
class Dinglemouse {
  constructor(firstName, lastName) {
    Object.assign(this, { firstName, lastName })
  }

  getFullName() {
    const { firstName, lastName } = this

    if (firstName && !lastName) return firstName
    if (!firstName && lastName) return lastName
    if (firstName && lastName) return `${firstName} ${lastName}`

    return ''
  }
}
*/

// Short Solution
class Dinglemouse {
  constructor(firstName, lastName) {
    Object.assign(this, { firstName, lastName })
  }

  getFullName() {
    const { firstName, lastName } = this
    return `${firstName} ${lastName}`.trim()
  }
}

// Function Export
module.exports = Dinglemouse
