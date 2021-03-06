function generateHTML(managerArr, enginArr, internArr) {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Team Page</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    </head>
        
    <body>
        <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4" style="text-align:center">My Team</h1>
  </div>
</div>
    
    ${managerArr
    .map(member =>
        `
        <div class="row">
  <div class="col-sm-3">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Manager</h5>
        <p class="card-text">Name: ${member.name} </p>
        <p class="card-text">Position: Manager </p>
        <p class="card-text">ID: ${member.id} </p>
        <p class="card-text">Email: ${member.email} </p>
        <p class="card-text">Office Number: ${member.officeNumber} </p>
      </div>
    </div>
  </div>
`
.trim()
    )
    .join("")}
    ${enginArr
    .map(member =>
`
<div class="col-sm-3">
<div class="card">
  <div class="card-body">
  <h5 class="card-title">Team Member</h5>
  <p class="card-text">Name: ${member.name} </p>
  <p class="card-text">Position: Engineer</p>
  <p class="card-text">ID: ${member.id} </p>
  <p class="card-text">Email: ${member.email} </p>
  <p class="card-text">GitHub:<a href="https://github.com/${member.github}"> ${member.github}</a></p>
  </div>
</div>
</div>`
    .trim()
    )
    .join("")}
    ${internArr
    .map(member =>
        `
        <div class="col-sm-3">
<div class="card">
  <div class="card-body">
  <h5 class="card-title">Team Member</h5>
  <p class="card-text">Name: ${member.name} </p>
  <p class="card-text">Position: Intern</p>
  <p class="card-text">ID: ${member.id} </p>
  <p class="card-text">Email: ${member.email} </p>
  <p class="card-text">School: ${member.school}</p>
  </div>
</div>
</div>
</div>
    `.trim()
    )
    .join("")}
    
    </body>
    </html>`;
}

module.exports = generateHTML;