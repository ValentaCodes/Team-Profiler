const Employee = require("./Employee.js");
// New Intern Class Constructor that adds school param
class Intern extends Employee {
  school;

  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }
}
// new method for Intern class that retrieves school
Intern.prototype.getSchool = function () {
  return this.school;
};

// initializes new intern
const intern = new Intern(
  "Student",
  3,
  "student@gmail.com",
  "University of Utah"
);

intern.getSchool();

module.exports = Intern;
