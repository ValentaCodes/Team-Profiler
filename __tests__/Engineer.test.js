const Engineer = require("../lib/Engineer.js");

const engineer = new Engineer("Cornelius", 2, "xyz@coding.com", "valentacodes");

describe("Engineer tests", () => {
  test("Role to be Employee", () => {
    expect(engineer.getRole()).toBe(Engineer);
  });
  test("Name to be Cornelius", () => {
    expect(engineer.getName()).toBe('Cornelius');
  });
  test("Id to be 2", () => {
    expect(engineer.getId()).toBe(2);
  });
  test("Email to be xyz@coding.com", () => {
    expect(engineer.getEmail()).toBe("xyz@coding.com");
  });
  test("Github to be https://www.github.com/valentacodes", () => {
    expect(engineer.getGithub()).toBe("https://www.github.com/valentacodes");
  });
});
