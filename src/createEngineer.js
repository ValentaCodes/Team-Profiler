const createEngineer = (answers) => {
  return `\n<div class="card">
        <div class="person">
            <p>${answers.engineerName}</p>
            <p>Engineer</p>
        </div>
            <div class="info">
                <p>ID: ${answers.engineerId}</p>
                <a href="mailto:${answers.engineerEmail}">Email</a>
                <a href="https://www.github.com/${answers.github}">Github</a>
            </div>
    </div>`;
};

module.exports = createEngineer;