// Creates our employee Class Constructor
function Employee(name, id, email) {
  this.name = name;
  this.id = id;
  this.email = email;
}

// creates new method to get name
Employee.prototype.getName = function () {
  // typeof this.name !== "string"
  //   ? console.log("Must Enter Valid name")
  //   :
  return this.name;
};
//  new method for id
Employee.prototype.getId = function () {
  // typeof this.id !== "number"
  //   ? console.log("Must Enter A Number")
  // :
  return this.id;
};
// new method for email retrieval
Employee.prototype.getEmail = function () {
  return this.email;
};
//  new method to get role
Employee.prototype.getRole = function () {
  return this.constructor;
};

// initializes new employee and assigns info of employee
const employee = new Employee(1, "892", "valentacodes@gmail.com");
employee.getRole();
module.exports = Employee;
