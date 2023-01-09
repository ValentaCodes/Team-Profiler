const Employee = require("./Employee.js");
//  creates a new Engineer Class Constructor that adds github param
class Engineer extends Employee {
  github;

  // constructor that allows our Engineer class to have the following params
  constructor(name, id, email, github) {

    // "super" inherits these params from parent class
    super(name, id, email);
    this.github = github;
  }
  // new method for Engineer class that returns github profile
  getGithub() {
    return `https://www.github.com/${this.github}`;
  }
}

module.exports = Engineer;
