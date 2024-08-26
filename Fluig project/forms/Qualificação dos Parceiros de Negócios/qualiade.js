$(document).ready(function(){
    // Aplica a máscara de CNPJ ao campo com id "setor"
    $('#setor').mask('00.000.000/0001-00');
});

function updateReturnFlag() {
    document.getElementById('returnFromActivity5').value = 'true';
}

// Exemplo de chamada ao enviar o formulário para a próxima atividade
document.getElementById('submitButton').addEventListener('click', updateReturnFlag);