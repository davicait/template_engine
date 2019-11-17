// Links 
const inquirer = require("inquirer");
const util = require("util");

// Terminal Prompts

inquirer
  .prompt([
    {
      type: "input",
      message: "What is your user name?",
      name: "username"
    },
    {
      type: "password",
      message: "What is your password",
      name: "password",
    },
    {
      type: "password",
      message: "Please re-enter password to confirm:",
      name: "confirm"
    }
  ])
  .then(function(response) {
    if (response.confirm === response.password) {
      console.log("Success");
    } else {
      console.log("You forgot your password already?");
    }
  });
