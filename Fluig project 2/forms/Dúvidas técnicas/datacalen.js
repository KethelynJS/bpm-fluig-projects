// Função que será executada ao carregar o formulário
function carregarData() {
    console.log("Carregando data automaticamente...");

    // Obtém o campo de data pelo ID
    var campoData = getField('datacalendario');

    // Verifica se o campo foi encontrado
    if (campoData) {
        var dataAtual = new Date();
        
        // Formatar a data no padrão dd/mm/yyyy
        var dia = ('0' + dataAtual.getDate()).slice(-2);
        var mes = ('0' + (dataAtual.getMonth() + 1)).slice(-2);
        var ano = dataAtual.getFullYear();

        // Concatenar a data
        var dataFormatada = `${dia}/${mes}/${ano}`;
        console.log("Data formatada:", dataFormatada);

        // Definir o valor do campo
        campoData.value = dataFormatada;
        console.log("Valor do campo de data atualizado:", campoData.value);
    } else {
        console.error("Elemento com o id 'datacalendario' não foi encontrado.");
    }
}

// Chama a função ao carregar o formulário
carregarData();
