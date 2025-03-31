window.onload = function() {
    var hoje = new Date();
    var dia = ("0" + hoje.getDate()).slice(-2);
    var mes = ("0" + (hoje.getMonth() + 1)).slice(-2); // Janeiro é 0!
    var ano = hoje.getFullYear();
    var dataAtualISO = ano + "-" + mes + "-" + dia;
    
    // Define o valor do campo de data no formato ISO
    document.getElementById("datacalendario").value = dataAtualISO;
    
    // Exibe a data no formato brasileiro em outra área, se necessário
    var dataFormatada = dia + "/" + mes + "/" + ano;
    console.log(dataFormatada); // Você pode exibir ou usar esse formato onde for necessário
};


$(document).ready(function () {

    function atualizarPontuacao() {
        let pontuacaoTotal = 0;
        let perguntasContadas = 0;

        // Captura as respostas dos radio buttons
        $('input[type="radio"]:checked').each(function () {
            let valor = $(this).val(); // Captura o valor do radio selecionado
            console.log("Valor capturado:", valor); // Verifica se os valores estão corretos

            // Garantir que a questão 9 não seja apagada
            if ($(this).attr('name') !== 'questao9' && !$(this).hasClass('nao_sei_avaliar')) {
                let valorConvertido = parseInt(valor, 10); // Converte para número inteiro
                console.log("Valor convertido:", valorConvertido); // Verifica a conversão
                
                if (!isNaN(valorConvertido)) { // Só soma se for número válido
                    pontuacaoTotal += valorConvertido;
                    perguntasContadas++;
                } else {
                    console.error("Erro: Valor inválido encontrado", valor); // Log de erro
                }
            }
        });

        console.log("Perguntas processadas:", perguntasContadas);
        console.log("Soma final:", pontuacaoTotal);

        // Atualiza os campos de pontuação total
        $('#pontuacao_total').val(pontuacaoTotal);
        $('#pontuacao_total1').val(pontuacaoTotal);
    }

    // Calcula a soma dos radios selecionados e mantém a pontuação total
    function calcularSomaRadios() {
        let soma = 0;

        $('input[type="radio"]:checked').each(function () {
            if ($(this).attr('name') !== 'itempreenchimento') { 
                soma += parseFloat($(this).val()) || 0; 
            }
        });

        $('#total').text(soma); // Atualiza o elemento que mostra o total
    }

    // Atualiza a pontuação quando um radio for alterado
    $('input[type="radio"]').change(function () {
        atualizarPontuacao();
        calcularSomaRadios();
    });

    // Inicializa a pontuação ao carregar a página
    atualizarPontuacao();
    calcularSomaRadios();
});
