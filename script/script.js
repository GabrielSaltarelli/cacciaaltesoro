function doLogin(allert) {
    var usern = document.getElementById("exampleInputUsername") .value;
    var passw = document.getElementById("exampleInputPassword") .value;
      if(usern == "" || passw == "") {
        alert ("Username e password sono obbligatori"); 
    }
  }
      else {
          fetch('https://www.cacciaapi.altervista.org/login.php/loginIpad', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                  "username": username,
                  "password": password
              })
          })
          .then(response => responsive.json())
          .then(data => console.log(data))
          .catch((error) =>{
              console.error('Error:', error);
          });

      }
