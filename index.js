const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

let teamMember = "team manager";
const questions = [
  {
    // inquirer looks for specific types
    type: "input",
    // this name becomes variable to grab user's input later
    name: "name",
    message: () => `What's your ${teamMember}'s name?`,
    default: "testManager",
  },
  {
    type: "input",
    name: "employeeId",
    message: "What's their employee ID?",
    default: "id123",
  },
  {
    type: "input",
    name: "email",
    message: "What's their email address?",
    default: "id123@aol.com",
  },
  {
    type: "input",
    name: "ability",
    message: () => {
      let ability = "";
      if (teamMember === "team manager") {
        ability = "office number";
      }
      if (teamMember === "engineer") {
        ability = "GitHub";
      }
      if (teamMember === "intern") {
        ability = "school";
      }
      return `What's their ${ability}?`;
    },
    default: "test123",
  },
  {
    type: "list",
    name: "addTeam",
    message: "Do you want to add another team member?",
    choices: ["Engineer", "Intern", "All done"],
  },
];

async function ask(team) {
  return await inquirer
    .prompt(questions)
    .then((answers) => {
      if (team) {
        team.push(answers);
      }
      if (!team) {
        team = [answers];
      }
      if (answers.addTeam !== "All done") {
        teamMember = answers.addTeam.toLowerCase();
        ask(team);
      } else {
          return team;
      }
      // writeToFile("README.md", answers);
    })
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else went wrong
      }
    });
}

async function init() {
  const team = await ask();
  console.log(team);
  createHtml(team);
}
function createHtml(){

}

// Function call to initialize app
init();
