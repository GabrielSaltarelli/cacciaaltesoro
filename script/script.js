function doLogin(allert) {
    var usern = document.getElementById("exampleInputUsername") .value;
    var passw = document.getElementById("exampleInputPassword") .value;
      if(usern == "" || passw == "") {
        alert ("Username e password sono obbligatori"); 
    }
  }
