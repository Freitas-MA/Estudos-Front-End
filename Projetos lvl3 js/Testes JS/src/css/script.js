/*
var media = null 
var nota1 = prompt('Digite a nota 1:')
var nota2 = prompt('Digite a nota 2:')
var notafinal = 6

nota1 = parseInt(nota1)
nota2 = parseInt(nota2)

media = (nota1 + nota2) / 2;


document.write (media)
document.write (' <hr/>')
if (media >= notafinal ) { 
    document.write ('Aluno Aprovado')
}
else { 
    document.write ('Aluno reprovado')
}
*/


 
/*
if (idade >= 0 && idade < 15) { 
    document.write ('Crianca')
}
if (idade >= 15 && idade < 30) {
    document.write ('Jovem')
}
if (idade >= 30 && idade < 60) {
    document.write ('Adulto')
}
if (idade >= 60) {
    document.write ('idoso')
}
*/

var nome = prompt('Nome:')
var peso = prompt('peso: kg')
var altura = prompt('altura: cm')
var imc = null

peso = parseFloat(peso)
altura = parseFloat(altura / 100)

imc = peso  / (altura * altura)

imc = parseFloat(imc.toFixed(2))

if (imc < 16) {
    document.write ('Ola ' + nome + ', seu IMC e de ' + imc +': Baixo peso, muito grave.')
}
if (imc >= 16 && imc < 16.99) {
    document.write ('Ola ' + nome + ', seu IMC e de ' + imc +': Baixo peso, grave.')
}
if (imc >= 17 && imc < 18.49) {
    document.write ('Ola ' + nome + ', seu IMC e de ' + imc +': Baixo peso.')
}
if (imc >= 18.50 && imc < 24.99) {
    document.write ('Ola ' + nome + ', seu IMC e de ' + imc +': Peso normal.')
}
if (imc >= 25 && imc < 29.99) {
    document.write ('Ola ' + nome + ', seu IMC e de ' + imc +': Sobrepeso.')
}
if (imc >= 30 && imc < 34.99) {
    document.write ('Ola ' + nome + ', seu IMC e de ' + imc +': Obesidade grau I.')
}
if (imc >= 35 && imc < 39.99) {
    document.write ('Ola ' + nome + ', seu IMC e de ' + imc +': Obesidade grau II.')
}
if (imc >= 40) {
    document.write ('Ola ' + nome + ', seu IMC e de ' + imc +': Obesidade gray III.')
}
