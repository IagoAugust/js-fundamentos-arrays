const alunos = ['João', 'Juliana', 'Caio', 'Ana']

const mediasDosAlunos = [10, 7, 9, 6]

let lsitaDeNotasEAlunos = [alunos, mediasDosAlunos]


const eixibeNomeNota = (nomeDoAluno) => {
    if (lsitaDeNotasEAlunos[0].includes(nomeDoAluno)){
        indice = lsitaDeNotasEAlunos[0].indexOf(nomeDoAluno)
        return lsitaDeNotasEAlunos[0][indice] + ', sua média é ' + lsitaDeNotasEAlunos[1][indice]
    }else{
        return "Aluno não esta Cadastrado"
    }
}

console.log(eixibeNomeNota("Ana"))