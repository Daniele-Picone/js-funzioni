

function palindromo (str) {

    let cleaned = str.replace(/\W/g, "");
    let reversed = cleaned.split('').reverse().join(''); 
      
      
      if(reversed == cleaned){
        console.log('vero');
        
    }else{
        console.log('falso');
        
    }
    

    return reversed
   
    
}

let stringa = 'i topi non avevano nipoti'

let frase = palindromo(stringa);

console.log(frase);

