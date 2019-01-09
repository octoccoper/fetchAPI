document.getElementById("button1").addEventListener("click",getText);
document.getElementById("button2").addEventListener("click",getJSON);
document.getElementById("button3").addEventListener("click",getAPIdata);

// Get local test.txt file
function getText() { 
  fetch("test.txt")
    .then(res => res.text())
    .then(data => document.getElementById("output").innerHTML = data)
    .catch(err =>console.log(err));
}

// Get local JSON data
function getJSON() { 
  fetch("posts.json")
    .then(res => res.json())
    .then(data => {
      let resultData = "";
      data.forEach(element => {
        resultData += `<li>${element.title}</li>`;
      })
      document.getElementById("output").innerHTML = resultData;
    })
    .catch(err => console.log(err))
}

// Get API data
function getAPIdata() { 
  fetch("https://api.github.com/users")
    .then(res => res.json())
    .then(data => {
      let resultData = "";
      data.forEach(element => {
        resultData += `<li>${element.login}</li>`;
      });
      document.getElementById("output").innerHTML = resultData;
    })

    .catch(err =>  console.log(err))
}