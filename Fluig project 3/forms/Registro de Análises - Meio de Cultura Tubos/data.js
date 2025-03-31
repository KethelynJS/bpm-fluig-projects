function preencherDataAtual() {
    var dataAtual = new Date();
    
    // Formatação da data e hora no padrão brasileiro
    var ano = dataAtual.getFullYear();
    var mes = String(dataAtual.getMonth() + 1).padStart(2, '0'); // Meses começam em 0
    var dia = String(dataAtual.getDate()).padStart(2, '0');
    var horas = String(dataAtual.getHours()).padStart(2, '0');
    var minutos = String(dataAtual.getMinutes()).padStart(2, '0');
    
    // Formato 'DD/MM/YYYY HH:mm' para texto
    var dataFormatada = `${dia}/${mes}/${ano} ${horas}:${minutos}`; 

    // Verifica a visibilidade dos painéis e preenche os campos se estiverem vazios
    if (document.getElementById("panel1").style.display !== "none") {
        if (!getValue("data_inicio_esterilidade")) { // Verifica se o campo está vazio
            setValue("data_inicio_esterilidade", dataFormatada); // Preenche com a data atual
        }
    }
    
    if (document.getElementById("panel2").style.display !== "none") {
        if (!getValue("datainicio2")) {
            setValue("datainicio2", dataFormatada);
        }
    }
    
    if (document.getElementById("panel3").style.display !== "none") {
        if (!getValue("data_final_esterilidade")) {
            setValue("data_final_esterilidade", dataFormatada);
        }
    }
    
    if (document.getElementById("panel4").style.display !== "none") {
        if (!getValue("datacalendario")) {
            setValue("datacalendario", dataFormatada);
        }
    }
}

// Chama a função ao iniciar o processo
preencherDataAtual();
