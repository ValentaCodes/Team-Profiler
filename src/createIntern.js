const createIntern = (answers) => {
  return `\n<div class="card">
        <div class="person">
            <p>${answers.internName}</p>
            <p>Intern</p>
        </div>
        <div class="info">
            <p>ID: ${answers.internId}</p>
            <a href="mailto:${answers.internEmail}">Email</a>
            <p>${answers.school}</p>
        </div>
    </div>`;
};
module.exports = createIntern;