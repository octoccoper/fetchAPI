document.getElementById("button1").addEventListener("click",getText);
document.getElementById("button2").addEventListener("click",getJSON);
document.getElementById("button3").addEventListener("click",getAPIdata);

function getText() { 
  fetch("test.txt")
    .then(function (res) {
      return res.text();
    })
    .then(function (data) {
      document.getElementById("output").innerHTML = data;
    })
    .catch(function(err){
      console.log(err);
    })
}

function getJSON() { 
  fetch("test.txt")
    .then(function (res) {
      return res.text();
    })
    .then(function (data) {
      document.getElementById("output").innerHTML = data;
    })
    .catch(function(err){
      console.log(err);
    })
}

function getAPIdata() { 
  fetch("test.txt")
    .then(function (res) {
      return res.text();
    })
    .then(function (data) {
      document.getElementById("output").innerHTML = data;
    })
    .catch(function(err){
      console.log(err);
    })
}
