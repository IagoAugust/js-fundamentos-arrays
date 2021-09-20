const nota = [3, 5, 9, 1,2]
const nota1 = [7, 5, 8, 9, 4]

const concatenar = nota.concat(nota1);   //metodo concat é colocar um array dentro do outro
console.log(`Juntado as notas: ${concatenar}`);
console.log();


const notaMinima = (nota) => {
    return nota >5;
}

const filtrado = concatenar.filter(notaMinima);    //metodo filter - necessidade de uma function para validar e exibe a validação 
console.log(`Parabens todas as notas aqui são maiores que 5: ${filtrado}`);
console.log();


const encrontar  = concatenar.find(elemento => elemento > 8);  //metodo find - procura o elmento exato ou o proximo que tiver, se n tiver retonar undefind
console.log(`O valor encrontado é ${encrontar}`);
console.log();


filtrado.shift();  //metodo Shift apaga o primeiro elemento, deixnado o  indece 1 para o indece 0 
console.log(`tirei o primeiro elemento das notas maiores que 5: ${filtrado}`);
console.log();


filtrado.reverse();  //metodo reverse - troca toda a ordem o indice 0 vira o ultimo e vice versa
console.log(`Invertendo a ordem: ${filtrado}`);
console.log();

filtrado.splice(1,0, "a",9,"0");   // metodo splice - passa tres parametros o primeiro definie aonde começa o indice no caso começa após 0 ou seja 1, o segundo parametro fala se remove ou não nesse caso n remove nenhum indice, o terceiro pode adicionar o que dizer na lista
console.log(filtrado);
filtrado.splice(1,3);    //metodo splice - esse metodo estou apagando apenas as duas sring que coloquei antes
console.log(filtrado);
console.log()

filtrado.sort();    //metodo sort - serve para organizar
console.log(filtrado);