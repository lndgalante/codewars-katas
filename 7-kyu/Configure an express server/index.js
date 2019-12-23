/*
  Title:
    Configure an express server

  Description:
    Express is a minimalist web framework for Node.js.

    To get a server up and running there are a few steps you have to follow.

    - Install express npm install express --save
    - Require express on a file var express = require('express');
    - Get the app from express by invoking it var app = express();
    - Start the server with the app's listen function

    The listen function will start a server that you are going to be able to use through the browser.

    It has different signature methods, the one you are going to use in this kata is (port, host, callback)

    Your Task
    Inside the solution function you have to require express and start a server.

  Notes:
    The PORT and HOST are going to be pre-loaded in the process.env object (in a node application process.env stores the environment configuration).

    process.env = {
      PORT: 3000,
      HOST: '0.0.0.0',
    };

  Kata Link:
    https://www.codewars.com/kata/configure-an-express-server

  Discuss Link:
    https://www.codewars.com/kata/configure-an-express-server/discuss

  Solutions Link:
    https://www.codewars.com/kata/configure-an-express-server/solutions
*/

// Long Solution
const solution = () => {
  // To avoid installing lib: const express = require('express')
  const express = () => ({ listen: () => {} })

  const app = express()

  app.listen(process.env.PORT, process.env.HOST, () =>
    console.log(`Running on ${process.env.HOST}:${process.env.PORT}`)
  )
}

// Short Solution
/*
const solution = () => require('express')().listen(process.env.PORT, process.env.HOST, () => {})
*/

// Function Export
module.exports = solution
