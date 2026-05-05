const mostrarImpares=()=>{
    let cont=1;
    let i=1
    while(cont<=10){
        if(i%2!=0){
            console.log(`Numero impar ${cont}: ${i}`)
            cont++;
        }
        i++;
    }
}
mostrarImpares();