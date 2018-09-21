/*
  Title:
    Find an employees role in the company

  Description:
    You get a new job working for Eggman Movers. Your first task is to write a method that will allow the admin staff to enter a person’s name and return what that person's role is in the company.

    You will be given an array of object literals holding the current employees of the company.
    You code must find the employee with the matching firstName and lastName and then return the role for that employee or if no employee is not found it should return "Does not work here!"

    The array is preloaded and can be referenced using the variable employees ($employees in Ruby).
    It uses the following structure.

    let employees = [ {firstName: "Dipper", lastName: "Pines", role: "Boss"}, ...... ]

    There are no duplicate names in the array and the name passed in will be a single string with a space between the first and last name i.e. Jane Doe or just a name.

  Kata Link:
    https://www.codewars.com/kata/find-an-employees-role-in-the-company

  Discuss Link:
    https://www.codewars.com/kata/find-an-employees-role-in-the-company/discuss

  Solutions Link:
    https://www.codewars.com/kata/find-an-employees-role-in-the-company/solutions
*/

// Initial Data
const employees = [
  { firstName: 'Ollie', lastName: 'Hepburn', role: 'Boss' },
  { firstName: 'Morty', lastName: 'Smith', role: 'Truck Driver' },
  {
    firstName: 'Peter',
    lastName: 'Ross',
    role: 'Warehouse Manager',
  },
  { firstName: 'Cal', lastName: 'Neil', role: 'Sales Assistant' },
  { firstName: 'Jesse', lastName: 'Saunders', role: 'Admin' },
  { firstName: 'Anna', lastName: 'Jones', role: 'Sales Assistant' },
  { firstName: 'Carmel', lastName: 'Hamm', role: 'Admin' },
  { firstName: 'Tori', lastName: 'Sparks', role: 'Sales Manager' },
  {
    firstName: 'Peter',
    lastName: 'Jones',
    role: 'Warehouse Picker',
  },
  {
    firstName: 'Mort',
    lastName: 'Smith',
    role: 'Warehouse Picker',
  },
  { firstName: 'Anna', lastName: 'Bell', role: 'Admin' },
  { firstName: 'Jewel', lastName: 'Bell', role: 'Receptionist' },
  { firstName: 'Colin', lastName: 'Brown', role: 'Trainee' },
]

// Long Solution
const findEmployeesRole = name => {
  const foundEmployee = employees.find(
    ({ firstName, lastName }) => name === `${firstName} ${lastName}`
  )

  return foundEmployee ? foundEmployee.role : 'Does not work here!'
}

// Function Export
module.exports = findEmployeesRole
