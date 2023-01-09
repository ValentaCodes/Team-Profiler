const Employee = require("./Employee.js");
// New Intern Class Constructor that adds school param
class Intern extends Employee {
  school;

  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }

  // new method for Intern class that returns school name
  getSchool() {
    return this.school;
  }
}

module.exports = Intern;
