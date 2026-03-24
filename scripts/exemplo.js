//--------------------------------- Exemplo1 ---------------------------------//
function exercicio1() {
    alert("Hi")
}
// function
// getElement
const batata = document.getElementById("exercicio1")
// addEventListner
batata.addEventListener('click', () => { exercicio1() })

function exercicio2() {
    alert("okay, bye")
}
const buttonExercicio2 = document.getElementById("exercicio2")
  buttonExercicio2.addEventListener('click', () => { exercicio2() })