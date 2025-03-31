function updateReturnFlag() {
    document.getElementById('returnFromActivity5').value = 'true';
}

function updateReturnFlag2() {
    document.getElementById('returnFromActivity15').value = 'true';
}

// Exemplo de chamada ao enviar o formulário para a próxima atividade
document.getElementById('submitButton').addEventListener('click', updateReturnFlag);

//Exemplo de chamada ao enviar o formulário para a próxima atividade
document.getElementById('submitButton').addEventListener('click', updateReturnFlag2);