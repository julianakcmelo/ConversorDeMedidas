function calculo(valorASerConvertido, cotacao) {
  var total = (valorASerConvertido * cotacao)

  return total
}

var nome = prompt("Informe o seu nome: ");
var option = Number(prompt('O que você deseja converter?' + '\n' + '1 - Dólar para Real' + '\n' + '2 - Euro para Real' + '\n' + '3 - Libra para Real' + '\n' + '4 - Anos-luz para metros' + '\n' + '5 - Anos-luz para quilômetros'));
var valorASerConvertido = Number(prompt('Informe o valor que você deseja converter: '));

switch(option) {
  case 1: /// DOLAR
    var cotacaoDoDolar = 5.09
    total = calculo(valorASerConvertido, cotacaoDoDolar)

    alert(`Olá, ${nome}! A conversão de ${valorASerConvertido} Dólares em Reais, com a cotação do Dolar em R$ ${cotacaoDoDolar} = R$ ${total.toFixed(2)}`)
    break
  case 2: // EURO
    var cotacaoDoEuro = 5.54
    total = calculo(valorASerConvertido, cotacaoDoEuro)

    alert(`Olá, ${nome}! A conversão de ${valorASerConvertido} Euros em Reais, com a cotação do Euro em R$ ${cotacaoDoEuro} = R$ ${total.toFixed(2)}`)
    break
  case 3: // LIBRA
    var cotacaoDaLibra = 6.30
    total = calculo(valorASerConvertido, cotacaoDaLibra)

    alert(`Olá, ${nome}! A conversão de ${valorASerConvertido} Libras em Reais, com a cotação da Libra em R$ ${cotacaoDoDaLibra} = R$ ${total.toFixed(2)}`)
    break
  case 4: // ANOS-LUZ PARA METROS
    var umLyEmMetros = 9460730777119564.00
    total = parseFloat(calculo(valorASerConvertido, umLyEmMetros))

    alert(`Olá, ${nome}! A conversão de ${valorASerConvertido} Anos-Luz em Metros, sendo 1 ano-luz igual a ${umLyEmMetros} = ${total} metros aproximadamente`)
    break
  case 5: // ANOS-LUZ PARA QUILÔMETROS
    var umLyEmKm = 9460800000000
    total = parseFloat(calculo(valorASerConvertido, umLyEmKm))

    alert(`Olá, ${nome}! A conversão de ${valorASerConvertido} Anos-Luz em Quilômetros, sendo 1 ano-luz igual a ${umLyEmKm} = ${total} quilômetros aproximadamente`)
    break
  default:
    alert('Opção inválida!')
    break
}