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