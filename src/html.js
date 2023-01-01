const html = (answers) => {
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
        My Team
    </header>
    <div class=wrapper>
        <div class="card">
            <div class="person">            
                <p>${answers.managerName}</p>
                <p>Manager</p>
            </div>
                <div class="info">
                    <p>ID: ${answers.managerId}</p>
                    <a href="mailto:${answers.managerEmail}">Email</a>
                </div>
        </div>`;
};

module.exports = html;
