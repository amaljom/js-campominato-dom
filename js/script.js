
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
function createNumber(usedNumbers){
    let randomNumber = (Math.floor(Math.random() * 100)+1);
    // while(usedNumbers.includes(randomNumber)){
    //     randomNumber = Math.floor(Math.random() * 100)+1;
    // }
    return randomNumber;
}


// ! FUNZIONE PER CREARE LA BOMBA

// ! il problema //
const button=document.getElementById('button');
button.addEventListener('click', function(){
    container.innerHTML=null;
    const arrayPC = [];
    console.log(arrayPC);
    // * richiamo la funzione per genereare quadrati
    for (let index = 0; index < 100; index++){
        
        // ? RICHIAMO DELLA FUNZIONEPER GENERARE LE BOX
        const newGridBox = createElement();

        // ? RICHIAMO DELLA FUNZIONE PER GENERARE I NUMERI
        const gridNumber= createNumber(blackList);
        newGridBox.innerHTML=gridNumber;
        blackList.push(gridNumber);

        container.append(newGridBox);

        const newBombElement= createBomb();
        arrayPC.push(newBombElement);

        newGridBox.addEventListener('click', function(){
            newGridBox.classList.toggle('bg');
            console.log(newGridBox.innerText);
        });
        
        
    }
});


// ! per eseguire i nuovi punti del esercizio(il controllo delle bombe), dobbiamo prima far generare tali bombe con una funzione
// ! VISTO CHE NON HO FATTO IL BONUS, CERCO DI IMPLEMENTARLO PER ORA PER LA LISTA DEI PRIMI 100 NUMERI