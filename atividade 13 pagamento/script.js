function calcular() {
    var nome = document.getElementById('nome').value;
    var salario = parseFloat(document.getElementById('salario').value);
    var taxaINSS;
    var valorINSS;

    if (salario <= 1000) {
        taxaINSS = 0.08;
    } else if (salario > 1000 && salario <= 1500) {
        taxaINSS = 0.085;
    } else {
        taxaINSS = 0.09;
    }

    valorINSS = salario * taxaINSS;
    var salarioLiquido = salario - valorINSS;

    console.log("Nome do Funcionário: " + nome);
    console.log("Salário bruto: " + salario.toFixed(2));
    console.log("Taxa de desconto do INSS: " + (taxaINSS * 100) + "%");
    console.log("Valor do INSS: " + valorINSS.toFixed(2));
    console.log("Salário líquido: " + salarioLiquido.toFixed(2));
}