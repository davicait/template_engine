const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");
const generateHTML = require("./generateHTML");
const Employee = require("./lib/Employee");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");

const writeFileAsync = util.promisify(fs.writeFile);

const writeHTML = function(generateHTML) {
  writeFileAsync("./team.html", generateHTML);
};

const internArr = [];
const enginArr=[];
const managerArr = [];

// On app launch collect data, create new manager instance, push to team array, fires the more function
const generateTeam = () => {
  console.log(
    "Hello! You will be prompted to fill out various information about you and your team."
  );
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is your name?",
        name: "name"
      },
      {
        type: "input",
        message: "What is your office number?",
        name: "officeNumber"
      },
      {
        type: "input",
        message: "What is your email address?",
        name: "email"
      },
      {
        type: "input",
        message: "What is your ID number?",
        name: "id"
      }
    ])
    .then(function(data) {
      const teamManager = new Manager(
        data.name,
        data.id,
        data.email,
        data.officeNumber,
        "Manager"
      );
      managerArr.push(teamManager);
    })
    .then(function() {
      more();
    });
};

// Function to collect info for interns. Creates new Intern instance and adds to the team array.
const newIntern = () => {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is this member's name?",
        name: "name"
      },
      {
        type: "input",
        message: "What is this member's ID number?",
        name: "id"
      },
      {
        type: "input",
        message: "What is this member's email address?",
        name: "email"
      },
      {
        type: "input",
        message: "What school did this member go to?",
        name: "school"
      }
    ])
    .then(function(res) {
      const member = new Intern(
        res.name,
        res.id,
        res.email,
        res.school,
        "Intern"
      );
      internArr.push(member);
    })
    .then(function() {
      more();
    });
};

// Function to collect info for Engineers. Creates new engineer instance and pushes to team array.
const newEngineer = () => {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is this member's name?",
        name: "name"
      },
      {
        type: "input",
        message: "What is this member's ID number?",
        name: "id"
      },
      {
        type: "input",
        message: "What is this member's email address?",
        name: "email"
      },
      {
        type: "input",
        message: "What is this member's GitHub username?",
        name: "github"
      }
    ])
    .then(function(res) {
      const member = new Engineer(
        res.name,
        res.id,
        res.email,
        res.github,
        "Engineer"
      );
      enginArr.push(member);
    })
    .then(function() {
      more();
    });
};

// Function that fires once all info has been collected. Prints team array.
async function done(managerArr, enginArr, internArr)  {
  
  console.log(
    "You have successfully added all your team members. Please find this info in the 'team.html' file"
  ); 
  
    generateHTML(managerArr, enginArr, internArr);
   writeHTML(generateHTML(managerArr, enginArr, internArr));
};

// Function to add additional team member. Fires addAnother function or done function.
const more = () => {
  inquirer
    .prompt([
      {
        type: "list",
        message: "Would you like to enter another team member?",
        name: "add",
        choices: ["yes", "no"]
      }
    ])
    .then(function(res) {
      if (res.add == "yes") {
        addAnother();
      } else done(managerArr, enginArr, internArr);
        
    })
};

// Function to determine the role of new team member
const addAnother = () => {
  console.log(
    "Please enter information for the next team member."
  );
  inquirer
    .prompt([
      {
        type: "list",
        message: "Is this team member an engineer or an intern?",
        name: "job",
        choices: ["engineer", "intern"]
      }
    ])
    .then(function(res) {
      if (res.job == "engineer") {
        newEngineer();
      } else newIntern();
    });
};

generateTeam();
