const salaJs = [7, 8, 8, 7, 10, 6.5, 4, 10, 7]
const salaJava = [6, 5, 8, 9, 5, 6]
const salaPython = [7, 3.5, 8, 9.5]

function MediaSala(notasDaSala){
    const somaDasNotas = notasDaSala.reduce((acum, atual) => atual + acum,0)
    return somaDasNotas/notasDaSala.length
}

console.log(`Média da sala de JavaScripts ${MediaSala(salaJs)}`)
console.log(`Média da sala de JavaSCripts ${MediaSala(salaJava)}`)
console.log(`Média da sala de JavaSCripts ${MediaSala(salaPython)}`)


//
const notas = [10, 6.5, 8, 7.5]

// let media = (notas[0] + notas[1] + notas[2] +  notas[3]) / notas.length  //problema no primeiro arquvios que é media.js
let media = notas.reduce((acum, atual) => atual + acum,0)/notas.length

console.log(media)