
//  ! dobbiamo generare automaticamente cento caselle dentro il container presente nel html
const container = document.getElementById('containder-grid');
// ! inserisco un array vuoto al di fuori delle funzioni, che segna i numeri gia usati
const blackList=[];
// ! FUNZIONE CHE GENERA UN NUOVO QUADRATO
function createElement(dato){
    
    const newBox= document.createElement('div');
    let radiceQ= Math.sqrt(dato);
    console.log(radiceQ);
    newBox.classList.add("new-grid");
    switch (radiceQ) {
        case 10:
            newBox.classList.add("new-grid", "square1");
            break;
        case 9:
        newBox.classList.add("new-grid", "square2");
        break;
        case 7:
        newBox.classList.add("new-grid", "square3");
        break;
    }
        
    
    return newBox;
}
// ! FUNZIONE PER CREARE LA BOMBA
function createBomb(bombArray, max) {
    let randomBomb = (Math.floor(Math.random() * max)+1);

    while(bombArray.includes(randomBomb)){
        randomBomb = Math.floor(Math.random() * max)+1;
    }
    return randomBomb;
}


// ! il problema //
const button=document.getElementById('button');
button.addEventListener('click', function(){
    
    let diffMode = parseInt(document.querySelector("#user-diff").value);
    let elements;
    let squares;
    switch (diffMode){
        case 1:
            elements=81;
            break;
        case 2:
            elements=49;
            break;
        case 0:
            elements=100;
            break;
    }
    container.innerHTML=null;
    // * ARRAY RANDOMICO DEL PC
    const arrayPC = [];
    // console.log(arrayPC);
    for (let a = 0; a < 16; a++) {
        const newBombElement= createBomb(arrayPC, elements);
        arrayPC.push(newBombElement);   
    }

    let contatore= 0;
    let bombaEsplosa=false;
    // * richiamo la funzione per genereare quadrati
    for (let index = 0; index < elements; index++){
        
        // ? RICHIAMO DELLA FUNZIONEPER GENERARE LE BOX
        const newGridBox = createElement(elements);

        // ? RICHIAMO DELLA FUNZIONE PER GENERARE I NUMERI
        const gridNumber=index;
        
        newGridBox.innerHTML = gridNumber;
        // ! CREO LE BOMBE
        newGridBox.addEventListener('click', function(){
            if(!bombaEsplosa){
                if (arrayPC.includes(parseInt(newGridBox.innerHTML))) {
                   
                    bombaEsplosa=true;
                    newGridBox.classList.add('bg-red');
                    alert('hai perso! il tuo punteggio è di: '+ contatore);
                }else{
                    newGridBox.classList.add('bg');
                    contatore++;
                }
            }
        });

        container.append(newGridBox);
    }
    console.log(arrayPC);
});


