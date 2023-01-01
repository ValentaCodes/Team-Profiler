const Employee = require("./Employee.js");
//  creates a new Engineer Class Constructor that adds github param
class Engineer extends Employee {
  github;

  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }
}
// initializes new engineer
const engineer = new Engineer(
  "Engineer",
  2,
  "engineer@gmail.com",
  "valentacodes"
);

// new method for Engineer class that retrieves github profile
Engineer.prototype.getGithub = function () {
  return `https://www.github.com/${this.github}`;
};

engineer.getGithub();

module.exports = Engineer;
