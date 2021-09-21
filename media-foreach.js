const notas = [10, 6.5, 8, 7.5]

let somaDaNotas = 0

notas.forEach(nota => {
    somaDaNotas += nota
})

let media = somaDaNotas/notas.length

console.log(media)