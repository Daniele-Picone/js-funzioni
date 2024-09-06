
let tiri= Number(prompt('inserisci il numero di tiri'))

function lancioDati(giocatore) {
  let punteggio = 0;

   for(i = 1 ; i <= tiri ; i++){
    

    punteggio += Math.floor(Math.random() * (6 -1 )  + 1 );

   }

  return punteggio
}

let player1 = lancioDati(1);
let player2 = lancioDati(2)

console.log(`Giovanni con ${tiri} tiri ha totalizzato ${player1}, mentre, Pasquale ne ha totalizzati ${player2}  `);

if( player1 > player2){
  console.log(` Il vincitore è Giovanni con il punteggio di ${player1}`)
}else if( player2 > player1){
  console.log(`Pasquale è il vincitore con il punteggio di ${player2}`);
}else{
  console.log('Avete pareggiato');
  
}


