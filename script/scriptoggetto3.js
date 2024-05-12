else {
          fetch('https://www.cacciaapi.altervista.org/login.php/loginIpad', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                 [
                  { "Testo": "Fear", "Valutazione": "3/5", "Visto?": "si" }, //0
                  { "Testo": "One Life", "Valutazione": "3.6/5",  "Visto?": "si" }, //1
                  { "Testo": "L'origine del tempo" "Valutazione": "2.7/5",  "Visto?": si" }, //2
                  { "Testo": "Tutti tranne te" "Valutazione": "2.5/5",  "Visto?": "si" }, //3
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
