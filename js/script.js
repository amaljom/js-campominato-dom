
//  ! dobbiamo generare automaticamente cento caselle dentro il container presente nel html
const container = document.getElementById('containder-grid');
// ! inserisco un array vuoto al di fuori delle funzioni, che segna i numeri gia usati
const blackList=[];
// ! FUNZIONE CHE GENERA UN NUOVO QUADRATO
function createElement(){
    const newBox= document.createElement('div');
    newBox.classList.add("new-grid");
   // diamo indietro il risultato 
    return newBox;
}
// ! FUNZIONE CHE GENERA UN NUMERO
function createNumber(usedNumbers, max, min){
    let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        //  while(usedNumbers.includes(randomNumber)){
        //    randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        //   }
    return randomNumber;
}
// ! FUNZIONE PER CREARE LA BOMBA
function createBomb(bombArray) {
    let randomBomb = (Math.floor(Math.random() * 100)+1);

    while(bombArray.includes(randomBomb)){
        randomBomb = Math.floor(Math.random() * 100)+1;
    }
    return randomBomb;
}



// ! il problema //
const button=document.getElementById('button');
button.addEventListener('click', function(){
    container.innerHTML=null;
    // * ARRAY RANDOMICO DEL PC
    const arrayPC = [];
    // console.log(arrayPC);
    for (let a = 0; a < 16; a++) {
        const newBombElement= createBomb(arrayPC);
        arrayPC.push(newBombElement);   
    }
    let contatore= 0;
    let bombaEsplosa=false;

    // * richiamo la funzione per genereare quadrati
    for (let index = 0; index < elements; index++){
        
        // ? RICHIAMO DELLA FUNZIONEPER GENERARE LE BOX
        const newGridBox = createElement();

        // ? RICHIAMO DELLA FUNZIONE PER GENERARE I NUMERI
        const gridNumber=index;
        //  createNumber(blackList, 100, 0);
        newGridBox.innerHTML = gridNumber;
        // blackList.push(gridNumber);
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

let diffMode = (document.querySelector("#user-diff").value);

console.log(diffMode);
let elements;

switch (diffMode){
    case 1:
        elements=81;
        break;
    case 2:
        elements=79;
        break;
    case 0:
        elements=100;
        break;
}
