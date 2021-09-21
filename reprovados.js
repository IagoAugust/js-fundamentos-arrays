const nomes = ['Ana', 'Marcos', 'Maria', 'Mauro']
const notas = [7, 4.5, 8, 7.5]

const reprovados = nomes.filter( (_, indice) => notas[indice] <= 5 ) // o primeiro valor do filter indica o nome ou seja o valor, o segundo parametro que é opcional indica o indice como o proprio o nome já fala

console.log(`Reprovados ${reprovados}`)