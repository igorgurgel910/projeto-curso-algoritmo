/* Seção de Comandos, procedimento, funções, operadores, etc...
escreval("Digite o nome do aluno: ")
leia(nome)
escreval("Digite a nota01 do aluno: ")
leia(nota01)
escreval("Digite a nota02 do aluno: ")
leia(nota02)
media:=(nota01+nota02)/2

se media>=5 entao
   escreval("Aprovado!", " Sua média foi: ", media)
senao
     escreval("Reprovado", nome)
fimse*/

var nome, nota01, nota02;
nome = prompt("Digite o nome do aluno: ")
nota01 = prompt("Digite a nota01 do aluno: ")
nota02 = prompt("Digite a nota02 do aluno: ")

media = (nota01 + nota02)/2
if(media>=50){
    alert("Aprovado!" + " Sua media foi: " + media)
}
else
    alert("Reprovado!" + " Sua media foi: " + media)