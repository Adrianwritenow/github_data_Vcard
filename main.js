function displayUser(){

  let main = document.querySelector(".main");


  let data = JSON.parse(this.responseText);
  var template = `
    <h1>${data.name}</h1>
    <div class = card>
      <div class = cardInfo>
        <h2>The Basics</h2>
        <div class =userInfo>
          <ul style="list-style-type:none">
           <li><span>Name</span>: ${data.name}</li>
           <li><span>Github URL<span>: <a href=" https://github.com/Adrianwritenow">${data.login}</a></li>
           <li><span>Email<span>: <a href=" ">${data.email}</a></li>
           <li><span>Website</span>:<a href=" "> ${data.blog} </a></li>
          </ul>
        </div>
      </div>
      <div class = cardStory>
        <h2>The Story</h2>
        <p>${data.bio}</p>
      </div>
      <img src="${data.avatar_url}">

    </div>


    </card>
    `
   main.innerHTML =  template;

  }

  let req = new XMLHttpRequest();
  req.open("GET", "https://api.github.com/users/Adrianwritenow");
  req.addEventListener("load", displayUser);
  req.send();
