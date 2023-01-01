const Intern = require("../lib/Intern.js");
const intern = new Intern(
  "Cornelius",
  3,
  "intern@school.com",
  "University of Utah"
);

describe("Intern tests", () => {
  test("Role to be Intern", () => {
    expect(intern.getRole()).toBe(Intern);
  });
  test("Name to be Cornelius", () => {
    expect(intern.getName()).toBe('Cornelius');
  });
  test("Id to be 3", () => {
    expect(intern.getId()).toBe(3);
  });
  test("Email to be intern@school.com", () => {
    expect(intern.getEmail()).toBe("intern@school.com");
  });
  test("School to be University of Utah", () => {
    expect(intern.getSchool()).toBe("University of Utah");
  });
});
