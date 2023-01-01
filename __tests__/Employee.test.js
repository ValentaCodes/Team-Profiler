const Employee = require("../lib/Employee.js");

const cornelius = new Employee("Cornelius", 1, "valentacodes@gmail.com");

describe("Employee tests", () => {
  test("Role to equal Employee", () => {
    expect(cornelius.getRole()).toBe(Employee);
  });
  test("Id to equal 1", () => {
    expect(cornelius.getId()).toBe(1);
  });
  test("Email to equal valentacodes@gmail.com", () => {
    expect(cornelius.getEmail()).toBe("valentacodes@gmail.com");
  });
});
