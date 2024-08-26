function updateReturnFlag() {
    document.getElementById('returnFromActivity5').value = 'true';
}

// Exemplo de chamada ao enviar o formulário para a próxima atividade
document.getElementById('submitButton').addEventListener('click', updateReturnFlag);
