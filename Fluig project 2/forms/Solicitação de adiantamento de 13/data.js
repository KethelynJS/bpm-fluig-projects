window.onload = function() {
    // Obtém o campo de data pelo ID
    var campoData = document.getElementById('datacalendario');
    
    // Cria um objeto Date para pegar a data atual
    var dataAtual = new Date();
    
    // Formata a data no padrão YYYY-MM-DD
    var dia = String(dataAtual.getDate()).padStart(2, '0');
    var mes = String(dataAtual.getMonth() + 1).padStart(2, '0'); // Janeiro é 0
    var ano = dataAtual.getFullYear();
    
    // Monta a data no formato adequado para campos de data (input type="date")
    var dataFormatada = ano + '-' + mes + '-' + dia;
    
    // Atribui a data formatada ao campo
    campoData.value = dataFormatada;
};
