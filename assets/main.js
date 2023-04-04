const start = document.getElementById('start')
const diffic = document.getElementById('difficoltà')
const htmlMain = document.querySelector('main')
const r =document.querySelector(':root')

start.addEventListener('click', function(){
    gioco();
})

function gioco(){

    let game = false;



    let valdiff = parseInt(diffic.value)

    let bomb = bombe( valdiff )

    console.log(bomb);

    reset(valdiff)

    htmlMain.innerHTML = ''

    if ( !game ) {
        
        
        //creazione della griglia
        let divgriglia = document.createElement('div')
        
        //aggiunta classe
        divgriglia.classList.add('griglia')
        
        htmlMain.append(divgriglia)
        
        reset(valdiff)
        
        for( let i = 1; i <= valdiff; i++){
            
            let divbox = document.createElement('div')
            
            divbox.classList.add('box')
            
            //tolgo la stampa dei numeri all'interno delle caselle
            //divbox.innerText = i;
            
            document.querySelector('.griglia').append(divbox)
            
            divbox.addEventListener('click', function(){
                
                //rimuovo il toggle e sostituisco con add
                //this.classList.toggle('bg-danger-subtle')

                if ( !game ) {
                    if( !bomb.includes(i) ){
                    
                        this.classList.add('bg-light')
                        
                    }else{

                        this.classList.add('bg-danger')
                        this.innerHTML = `<i class="fa-solid fa-bomb fs-3"></i>`

                        game = true

                    }
                }
            })
        }
    }
}
function reset(x){

    x = Math.sqrt(x)

    r.style.setProperty('--numcell', x);

}

function bombe( difficpar ){

    let bombaray = []

    while ( bombaray.length < 16 ){

        let bomb = numRand( 1, difficpar );

        if( !bombaray.includes(bomb)){

            bombaray.push(bomb)

        }
    }

    return bombaray
}

function numRand( min, max){

    return Math.floor( Math.random() * max ) + min
    
}