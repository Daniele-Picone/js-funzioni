



function conta(n) {
    for( let i = 1; i <= n; i++){
        
        
        
        if( i % 15 == 0 ){
         console.log(`frizzbuzz`);
        }else if( i % 5 ==0 ){
            console.log('buzz');
            
        }else if(i % 3 == 0){
            console.log('frizz');
            
        }else{
            console.log(i);
            
        }
        
    }
   
    return i
}



let contatore = conta(200)

console.log(contatore);
