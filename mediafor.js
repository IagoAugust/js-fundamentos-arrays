// media com um array
const notas = [10, 6.5, 8, 7.5]

let somaDaNotas = 0

for (let i = 0; i < notas.length; i++){
    somaDaNotas += notas[i];
}

let media = somaDaNotas/notas.length

console.log(media)
console.log()


// Media geral array e uma matriz de 2 dimensoes
const notas1 = [10 , 6.5, 8 ,7.5]
const notas2 = [9  , 6  , 6]
const notas3 = [8.5, 9.5]

const notasGerais = [notas1,notas2,notas3]

let mediaGeral = 0

for (let i = 0; i < notasGerais.length; i++){
    for (j = 0; j < notasGerais[i].length; j++){
        mediaGeral += notasGerais[i][j]/notasGerais[i].length;
    }
}

mediaGeral = mediaGeral/notasGerais.length
console.log(mediaGeral)