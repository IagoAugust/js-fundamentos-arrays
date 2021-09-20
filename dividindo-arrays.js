const nomes = ['joão', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'Andre', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinicius', 'Renan', 'Renata', 'Renata', 'Daisy', 'Camilo']

console.log(`tamanho do array ${nomes.length}`)
const sala1 = nomes.slice(0,nomes.lenght/2)     //metodo slice - corta o primeiro parametro é aonde começa e o segundo aonde termina
const sala2 = nomes.slice(nomes.length/2)

console.log(`Alunos da sala 1: ${sala1}`)
console.log(`Alunos da sala 2 ${sala2}`)

