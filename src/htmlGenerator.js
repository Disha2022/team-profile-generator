const fs = require("fs");
function createHtml(team) {
  let content = "";
  team.forEach((member) => {
    content += "<div></div>";
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
    ${content}
  </body>
  </html>
  `;
  fs.writeFile("dist/index.html", contentTemplate, () => {});
}

module.exports = createHtml;
