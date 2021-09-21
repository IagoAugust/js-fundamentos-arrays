let nomes =["ana Julia", "Caio vinicius", "BIA silva"]

const nomesAtualizados = nomes.map(nome => nome.toUpperCase() )

console.log(nomesAtualizados)


//
const nome = "Iago Augusto";
let nomeMaiuscula = "";

for (let i = 0; i < nome.length; i++){
    nomeMaiuscula += nome[i].toUpperCase()
}

console.log(nomeMaiuscula)


//
const nomeDoCurso = "Fundamentos de JS";
const NomeDaPlataforma = " Alura";

const NomeCompleto = nomeDoCurso.concat(NomeDaPlataforma);
console.log(NomeCompleto)