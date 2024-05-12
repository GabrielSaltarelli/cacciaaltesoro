else {
          fetch('https://www.cacciaapi.altervista.org/login.php/loginIpad', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                 [
                  { "Film": "Fear", "Visto": "si", "Testo": "Fear", "Valutazione": "3/5" }, //0
                  { "Film": "One Life", "Visto": "no", "Testo": "One Life", "Valutazione": "3.6/5" }, //1
                  { "Film": "L'ordine del tempo", "no": "Attivo", "Testo": "L'origine del tempo" "Valutazione": "2.7/5" }, //2
                  { "Film": "Tutti tranne te, "Visto": "si", "Testo": "Tutti tranne te" "Valutazione": "2.5/5" }, //3
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
