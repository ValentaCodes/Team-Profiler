const Manager = require('../lib/Manager')

const html = (answers) => {
    const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail)
  return `<!DOCTYPE html>
    <html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Team Profile</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Lobster+Two:ital@1&family=Roboto:wght@500&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="./style.css" />
</head>
<body>
    <header>
        <h1>My Team <h1/>
    </header>
    <div class=wrapper>
        <div class="card">
            <div class="person">            
                <p>${manager.getName()}</p>
                <p>Manager</p>
            </div>
                <div class="info">
                    <p>ID: ${manager.getId()}</p>
                    <a href="mailto:${manager.getEmail()}">Email</a>
                </div>
        </div>`;
};

module.exports = html;
