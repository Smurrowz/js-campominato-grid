

const grigliaElement = document.querySelector('.tabellone')
const diffChoice = document.getElementById('difficulty-choice')
const genButton = document.getElementById('gen-button')
// genero il tabellone in base alla grandezza scelta
genButton.addEventListener('click', function(){
  // pulisco la console,l'HTML e tolgo eventuali classi se hai gia' generato
  console.clear()
  grigliaElement.innerHTML = ""
  grigliaElement.classList.remove('small', 'medium', 'large', 'extrasmall')
  
  if(diffChoice.value === '1'){
    // se ha scelto facile allora la tabella sará 10x10
    gridGenerator(10)
    grigliaElement.classList.add('large')
  } else if(diffChoice.value === '2'){
    // se ha scelto medio allora la tabella sará 9x9
    gridGenerator(9)
    grigliaElement.classList.add('medium')
  } else if(diffChoice.value === '3'){
    // se ha scelto difficile allora la tabella sará 7x7
    gridGenerator(7)
    grigliaElement.classList.add('small')
  } else if(diffChoice.value === '4'){
    // se ha scelto molto difficile allora la tabella sará 6x6
    gridGenerator(6)
    grigliaElement.classList.add('extrasmall')
  }

  
})




// creo la funzione per generare la griglia in base al dato inserito
function gridGenerator(dimensione){
  let numeroCelle = dimensione ** 2
  for(let i = 0; i < numeroCelle; i++){
  
    const cella = getSquareElement() 
    cella.innerHTML = i + 1
    // appendo la cella al tabellone
    grigliaElement.append(cella)
    
  }
}

// creo la funzione per generare le caselle e ci attacco gia' l'event listener
function getSquareElement() {
  const square = document.createElement('div')
  square.classList.add('square')
  square.addEventListener('click', clickHandler)  
  
  return square
}
// creo la funzione che mi andra' a gestire i click nelle celle
function clickHandler(){
  // in questo caso this e' uguale a cio' che clickiamo 
  const square = this
  console.log(square)
  // aggiungo la classe che fa cambiare colore alla cella
  square.classList.toggle('clicked')
  // rendo la cella non clickabile piu' di una volta perché quando viene invocato l'addeventlistener gli levo l'event listener 
  square.removeEventListener('click', clickHandler)
  
}



