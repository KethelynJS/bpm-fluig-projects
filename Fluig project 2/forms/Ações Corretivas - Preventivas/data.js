window.onload = function() {
    // Obtém a data atual no formato YYYY-MM-DD
    const today = new Date().toISOString().split('T')[0];

    // Define a data nos campos correspondentes
    document.getElementById('data_conclusao').value = today;
    document.getElementById('data_realizacao_acao').value = today;
    document.getElementById('data_inicio').value = today;
};
