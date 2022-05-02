const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const questions = [
  {
    // inquirer looks for specific types
    type: "input",
    // this name becomes variable to grab user's input later
    name: "managerName",
    message: "What's your team manager's name?",
    default: "testManager",
  },
  {
    type: "input",
    name: "employeeId",
    message: "What's your employee ID?",
    default: "id123",
  },
  {
    type: "input",
    name: "email",
    message: "What's your email address?",
    default: "id123@aol.com",
  },
  {
    type: "input",
    name: "officeNumber",
    message: "What's your office number?",
    default: "office123",
  },
  {
    type: "list",
    name: "addTeam",
    message: "Do you want to add a team member?",
    choices: ["Engineer", "Intern", "All done"],
  }
];
