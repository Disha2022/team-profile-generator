const fs = require("fs");
// takes an array of Employee classes and creates an index.html in the dist folder
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
      content += `<div>Office number: ${member.officeNumber}</div>`;
    }
    if (member.getRole() === "Engineer") {
      content += `<div>Github: <a href="${member.getGithub()}">${
        member.github
      }</a></div>`;
    }
    if (member.getRole() === "Intern") {
      content += `<div>School: ${member.getSchool()}</div>`;
    }
    content += "</section>";
  });
  const contentTemplate = `
  <!DOCTYPE html> 
  <html lang="en"> 
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="./style.css">
    <title>Team Profile</title>
  </head>

  <body>
    <h1>My Team</h1>
    ${content}
  </body>
  </html>
  `;
  fs.writeFile("dist/index.html", contentTemplate, (error) => {
    console.log(error);
  });
}

module.exports = createHtml;
