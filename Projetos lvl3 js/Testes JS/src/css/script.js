var num1 = prompt('Entre com o primeiro numero:')
var oper = prompt('Selecione a operacao: (Somar/Subtrair)')
var num2 = prompt('Entre com o segundo numero:')
var result = null
num1 = parseInt(num1)
num2 = parseInt(num2)



function calc(num1, num2, oper) {
        switch (oper) {

        case 'Somar':
            result = num1 + num2
            break;
        case 'Subtrair':
            result = num1 - num2
            break;
        default:
            result = ('Operacao invalida, tente novamente.')
        }
        return result;
}
document.write('O resultado final e ' +calc(num1, num2, oper))