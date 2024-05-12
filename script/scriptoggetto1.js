else {
          fetch('https://www.cacciaapi.altervista.org/login.php/loginIpad', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                 [
                  { "Film": "Fear", "Durata": "1:38:00" , "Incasso": 1.227.794 }, //0
                  { "Film": "One Life", "Durata": "1:50:00" , "Incasso": 1.190.128 }, //1
                  { "Film": "L'ordine del tempo", "Durata": "1:53:00" , "Incasso": 498.118 }, //2
                  { "Film": "Tutti tranne te, "Codice": "1:44:00" , "Incasso": 219.200.000 }, //3
                  ]
              })
          })
          .then(response => responsive.json())
          .then(data => console.log(data))
          .catch((error) =>{
              console.error('Error:', error);
          });

      }
}
