const Employee = require("./Employee.js");

//  creates a new Class constructor that inherits from Employee and adds additional "officeNumber" param
class Manager extends Employee {
  officeNumber;

  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }
}
module.exports = Manager;
