const nomes = ["Ana", "Ju", "Leo", "Paulo"]

nomes.forEach(ImprimeNomes)

function ImprimeNomes(nome){
    console.log(nome)
}
console.log()


//
const arrayNums = [1, 2, 3, 4]

function multiplicarPorDez (num){
    // console.log(num)     //Obeserve os parametros passado
    return num*10
}

const arraySomada = arrayNums.map(multiplicarPorDez)        //caso n tenha entendido sobre os parametro que foram passado por aqui, entao descomente o "console.log(num)" tendo da function multiplicarPorDez, caos ainda n entenda vai der outro exemplo abaixo sobre .map
console.log(arraySomada)
console.log()

const arraySomadaDeOutraForma = arrayNums.map( numb => numb*10) // obsevando o que acontece quando n chamamos direto a function ou o callback,assim podemos observar que o resultado n foram diferente. Assim podemos concluir e afirmar que quando chamamos o a function multiplicarPorDez o parametro num da function é colocar conforme o indice do array, ou seja o .map já esta percorrendo o array e assim nesse caso multiplindo os numeros   
console.log(arraySomadaDeOutraForma)