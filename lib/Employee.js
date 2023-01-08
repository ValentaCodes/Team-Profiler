// Creates our employee Class Constructor
class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }
  // creates new method that returns name
  getName() {
    return this.name;
  }
  // method returns ID
  getId() {
    return this.id;
  }
  // method returns email
  getEmail() {
    return this.email;
  }
  // //  new method that returns role
  getRole() {
    return this.constructor;
  }
}
module.exports = Employee;
