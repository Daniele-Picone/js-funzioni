
let n = Number( prompt('  inserisci un numero'))

function cifre (numero){
    
    if( n < 10 && n >= 0 ){
        console.log(` il numero ${n} è ad una cifra  `);
        
    }else if (n >= 0 && n <= 99  ){
        console.log(` Il numero ${n} è a due cifre`);

        
    }else if ( n >= 100 && n < 1000 ){
        console.log(`Il numero ${n} è di tre cifre`);
        
    } else if( n >= 1000 && n < 10000){
        console.log(` Il numero ${n} è a 4 cifre`);
        
    }else{
        console.log(`Il ${n} non è valido`);
        
    }
    return n
}
 
let numeroCifre = cifre(n)
console.log(numeroCifre);
