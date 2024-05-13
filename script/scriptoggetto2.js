else {
          fetch('https://www.cacciaapi.altervista.org/login.php/loginIpad', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify{
                        "film": "Fear",
                        "Visto": "Si",
                 "Recenzioni"[ 
                   { "Utente": "Giovannino", "Voto": "10/10", "Testo": "Il film è davvero spettacolare, cedo di non aver mai vistoun film così bello ed appassionante, lo consiglio a chi ha paura", "Valutazione": "3/5" }, //0
                  { "Utente": " Paolino", "Voto": "3/10", "Testo": "Film davvero INDECENTE, non ho mai visto nulla del genere, gli do 3 solo perchè sono buono ma non lo consiglierei a nessuno."}, //1
                  { "Utente": "Marino", "Voto": "5/10", "Testo": "Film non male ma non da sufficienza, lascio la recensione solo perchè devo." }, //2
                  { "Utente": "Franchino", "Voto": "6/10", "Testo": "Il fil in questione non mi fa ne caldo ne freddo, gli do la sufficienza perchè la merita, ma ninete di più"}, //3
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
