const start = document.getElementById('start')
const diffic = document.getElementById('difficoltà')
const htmlMain = document.querySelector('main')
const r =document.querySelector(':root')

start.addEventListener('click', function(){
    gioco();
})

function gioco(){
    let valdiff = parseInt(diffic.value)
    reset(valdiff)
    htmlMain.innerHTML = ''
    //creazione della griglia
    let divgriglia = document.createElement('div')
    //aggiunta classe
    divgriglia.classList.add('griglia')
    htmlMain.append(divgriglia)
    reset(valdiff)

    for( let i = 1; i <= valdiff; i++){
        let divbox = document.createElement('div')
        divbox.classList.add('box')
        divbox.innerText = i;
        document.querySelector('.griglia').append(divbox)
        divbox.addEventListener('click', function(){
            this.classList.add('clicked')
            this.classList.toggle('bg-danger-subtle')
            console.log(this.innerHTML)
        })
    }
}

function reset(x){
    x = Math.sqrt(x)
    r.style.setProperty('--numcell', x);
}