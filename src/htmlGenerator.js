const fs = require("fs");
function createHtml(team) {
  let content = "";
  team.forEach((member) => {
    content += `
    <section>
      <h2>${member.name}</h2>
      <h3>${member.getRole()}</h3>
      <div>ID: ${member.id}</div>
      <div>Email: ${member.email}</div>
    `;
    if (member.getRole() === "Manager") {
      content += `<div>Office number:${member.officeNumber}</div>`;
    }
    if (member.getRole() === "Engineer") {
      content += `<div>Github:<a href="${member.getGithub()}">${member.github}</div>`;
    }
  });
  const contentTemplate = `
  <!DOCTYPE html> 
  <html lang="en"> 
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Team Profile</title>
  </head>

  <body>
    <h1>My Team</h1>
    ${content}
  </body>
  </html>
  `;
  fs.writeFile("dist/index.html", contentTemplate, () => {});
}

module.exports = createHtml;
