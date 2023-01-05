const Engineer = require("../lib/Engineer");

const createEngineer = (answers) => {
  const engineer = new Engineer(
    answers.engineerName,
    answers.engineerId,
    answers.engineerEmail,
    answers.github
  );
  return `\n<div class="card">
        <div class="person">
            <p>${engineer.getName()}</p>
            <p>Engineer</p>
        </div>
            <div class="info">
                <p>ID: ${engineer.getId()}</p>
                <a href="mailto:${engineer.getEmail()}">Email</a>
                <a href="${engineer.getGithub()}">Github</a>
            </div>
    </div>`;
};

module.exports = createEngineer;
