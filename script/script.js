function doLogin(allert) {
    var usern = document.getElementById("Username") .value;
    var passw = document.getElementById("Password") .value;
      if(usern == "" || passw == "") {
        alert ("Username e password sono obbligatori"); 
    }
  }
