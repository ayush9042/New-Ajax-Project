var main = document.getElementById("section-wrapper");
console.log(main);

var http = new XMLHttpRequest();
http.open("GET", "https://jsonplaceholder.typicode.com/comments", true);
http.onreadystatechange = function () {
  if (this.readyState === 4) { //work done
    var response = JSON.parse(this.responseText);
    // console.log(response);

    for (var i = 0; i < response.length; i++) {

      //Comment Data dynammic Div
      var data = document.createElement("div");
      data.id = "comment-data";


      //Append to parent
      main.appendChild(data);



      // Name    
      var nam = document.createElement("h1");
      nam.className = "name";
      nam.innerHTML = response[i].name;

      // Appending name to parent
      data.appendChild(nam);

      // Email
      var email = document.createElement("h2");
      email.className = "email";
      email.innerHTML = response[i].email;

      // Appending name to parent
      data.appendChild(email);

      // Body of Comment

      var body = document.createElement("h2");
      body.className = "body";
      body.innerHTML = response[i].body;

      // Appending name to parent
      data.appendChild(body);



    }
  }
}
http.send();


  // // Email
  // var email = document.createElement("h2");
  // email.className = "email";
  // email.innerHTML = response[i].email;

  // // Body of Comment

  // var body = document.createElement("h2");
  // body.className = "body";
  // body.innerHTML = response[i].body;