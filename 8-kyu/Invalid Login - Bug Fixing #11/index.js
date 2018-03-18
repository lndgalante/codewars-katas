/* eslint no-undef: 0 */

/*
  Title:
    Invalid Login - Bug Fixing #11

  Description:
    Oh NO! Timmy has moved divisions... but now he's in the field of security.
    Timmy being the top coder he is has allowed some bad code through,
    you must help Timmy and filter out any injected code!

    Task
    Your task is simple, search the password string for any injected code
    (Injected code is any thing that would be used to exploit flaws in the current code,
    so basically anything that contains || or //) if you find any you must return "Wrong username or password!"
    because no one likes someone trying to cheat their way in!

    Preloaded
    You will be given a preloaded class called Database with a method login this takes two parameters username and password.
    This is a generic login function which will check the database for the user it will return either 'Successfully Logged in!'
    if it passes the test or 'Wrong username or password!' if either the password is wrong or username does not exist.

  Examples:
    var database = new Database();
    database.login('Timmy', 'password');

  Kata Link:
    https://www.codewars.com/kata/invalid-login-bug-fixing-number-11

  Discuss Link:
    https://www.codewars.com/kata/invalid-login-bug-fixing-number-11/discuss

  Solutions Link:
    https://www.codewars.com/kata/invalid-login-bug-fixing-number-11/solutions
*/

// Long Solution
const validate = (username, password) => {
  if (password.includes('||') || password.includes('//'))
    return 'Wrong username or password!'

  const database = new Database()
  return database.login(username, password)
}

// Short Solution
/*
const validate = (username, password) =>
  new Database().login(username, encodeURI(password))
*/

// Function Export
module.exports = validate
