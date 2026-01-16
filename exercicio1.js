var nome_pessoa = "Priscila";
console.log("Olá, " + nome_pessoa + "!")

var num1 = 5;
var num2 = 12;

var multiplicaçao = num1 * num2;
console.log("A multiplicação do numeros " + num1 + "e " +num2 + " é igual a " +multiplicaçao)

var subtracao = num1 - num2;
console.log("A subtração do numeros " + num1 + "e " +num2 + " é igual a "+ subtracao)

var soma = num1 + num2;
console.log("A soma  do numeros " + num1 + " e " +num2 + " é igual a "+soma)

var divisao = num1 / num2;
console.log("A subtração do numeros " + num1 + "e " +num2 + " é igual a "+ divisao)


var nota_pessoa = 80;
var aprovado;

if(nota_pessoa >= 70){
    aprovado = " você foi aprovado."
}
else{
    aprovado = " você nao foi aprovado."

}

console.log("Olá, " + nome_pessoa + "," + aprovado)


for (let i = 0; i < 11; i++) {
    console.log(i);
  }
  //let i = incia o contador
  //i< = condição, repete enquanto for verdadeira
  //i++Expressão final (incrementa o contador após cada iteração)


function saudar(nome){
    return 'Olá,'+ nome + '! Seja bem vinda!'
}
  console.log(saudar("Priscila"))

