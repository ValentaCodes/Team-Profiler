// imports needed to run program
const inquirer = require("inquirer");
const fs = require("fs");
const html = require("./src/html.js");
const createEngineer = require("./src/createEngineer.js");
const createIntern = require("./src/createIntern.js");

// questions array we will ask in node
const manager = [
  {
    type: "input",
    name: "managerName",
    message: "Enter the team managers name.",
    validate: function (input) {
      const numbers = Number(input);
      if (input == numbers) {
        return ` Hey unless '${input}' is a bot, You must enter valid name`;
      }
      return true;
    },
  },
  {
    type: "input",
    name: "managerId",
    message: "What is their Id?",
    validate: function (input) {
      const numbers = Number(input);
      if (input != numbers) {
        return `'${input}' is not a valid ID, try again`;
      }
      return true;
    },
  },
  {
    type: "input",
    name: "managerEmail",
    message: "What is their email address?",
    validate: function (input) {
      const email = "@";
      if (input.includes(email) == false) {
        return `You forgot the '@' symbol`;
      }
      return true;
    },
  },
  {
    type: "input",
    name: "managerOffice",
    message: "Enter their office number",
    validate: function (input) {
      const numbers = Number(input);
      if (input != numbers) {
        return `'${input}' is not an office number, try again`;
      }
      return true;
    },
  },
  {
    type: "list",
    name: "employeeCheck",
    message: "What type of team member are we adding next?",
    choices: ["Engineer", "Intern", new inquirer.Separator(), "I'm finished"],
  },
];
const engineer = [
  {
    type: "input",
    name: "engineerName",
    message: "What is the engineers name?",
    validate: function (input) {
      const numbers = Number(input);
      if (input == numbers) {
        return ` Hey unless '${input}' is a bot, You must enter valid name`;
      }
      return true;
    },
  },
  {
    type: "input",
    name: "engineerId",
    message: "What is their ID?",
    validate: function (input) {
      const numbers = Number(input);
      if (input != numbers) {
        return `'${input}' is not a valid ID, try again`;
      }
      return true;
    },
  },
  {
    type: "input",
    name: "engineerEmail",
    message: "What is their Email?",
    validate: function (input) {
      const email = "@";
      if (input.includes(email) == false) {
        return `You forgot the '@' symbol`;
      }
      return true;
    },
  },
  {
    type: "input",
    name: "github",
    message: "What is their github username?",
  },
  {
    type: "list",
    name: "employeeCheck",
    message: "What type of team member are we adding next?",
    choices: ["Engineer", "Intern", new inquirer.Separator(), "I'm finished"],
  },
];
const intern = [
  {
    type: "input",
    name: "internName",
    message: "What is the interns name?",
    validate: function (input) {
      const numbers = Number(input);
      if (input == numbers) {
        return ` Hey unless '${input}' is a bot, You must enter valid name`;
      }
      return true;
    },
  },
  {
    type: "input",
    name: "internId",
    message: "What is their ID?",
    validate: function (input) {
      const numbers = Number(input);
      if (input != numbers) {
        return `'${input}' is not a valid ID, try again`;
      }
      return true;
    },
  },
  {
    type: "input",
    name: "internEmail",
    message: "What is their Email?",
    validate: function (input) {
      const email = "@";
      if (input.includes(email) == false) {
        return `You forgot the '@' symbol`;
      }
      return true;
    },
  },
  {
    type: "input",
    name: "school",
    message: "What school is the intern attending?",
  },
  {
    type: "list",
    name: "employeeCheck",
    message: "What type of team member are we adding next?",
    choices: ["Engineer", "Intern", new inquirer.Separator(), "I'm finished"],
  },
];
// Checking for user input to add another team member
function checkForNewEmployee(answers) {
  if (answers.employeeCheck === "Engineer") {
    writeEngineer();
    return;
  } else if (answers.employeeCheck === "Intern") {
    writeIntern();
    return;
  } else {
    closeTags();
    return;
  }
}
// NOTE: this functions asks questions about the engineer and appends to html
function writeEngineer() {
  inquirer.prompt(engineer).then((answers) => {
    const engineerContent = createEngineer(answers);
    fs.appendFile("./dist/index.html", engineerContent, (error) => {
      error ? console.log(error) : checkForNewEmployee(answers);
    });
  });
}
// NOTE: This function asks questions about the engineer and appends to html
function writeIntern() {
  inquirer.prompt(intern).then((answers) => {
    const internContent = createIntern(answers);
    fs.appendFile("./dist/index.html", internContent, (error) => {
      error ? console.log(error) : checkForNewEmployee(answers);
    });
  });
}
// NOTE: Closes our HTML
const closeTags = () => {
  let closingTags = ` \n</div>
    </body>
  </html>`;
  fs.appendFile("./dist/index.html", closingTags, (error) => {
    error ? console.log(error) : console.log("Successfully created your team!");
  });
};
// function that creates our file.
function writeToFile(filename) {
  filename = "./dist/index.html";
  // prompt method that asks our questions, waits for answers, then executes write file unless an error occurs
  inquirer.prompt(manager).then((answers) => {
    const htmlPageContent = html(answers);
    fs.writeFile(filename, htmlPageContent, (error) => {
      error ? console.log(error) : checkForNewEmployee(answers);
    });
  });
}

function init() {
  writeToFile();
}

init();
