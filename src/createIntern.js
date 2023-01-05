const Intern = require('../lib/Intern')

const createIntern = (answers) => {
    const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.school)
  return `\n<div class="card">
        <div class="person">
            <p>${intern.getName()}</p>
            <p>Intern</p>
        </div>
        <div class="info">
            <p>ID: ${intern.getId()}</p>
            <a href="mailto:${intern.getEmail()}">Email</a>
            <p>${intern.getSchool()}</p>
        </div>
    </div>`;
};
module.exports = createIntern;