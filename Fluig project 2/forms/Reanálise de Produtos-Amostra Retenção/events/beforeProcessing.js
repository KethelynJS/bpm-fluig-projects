function beforeProcessing(form) {
    // Registra que o beforeProcessing foi chamado
    log.info("Executando o beforeProcessing");

    // Obtém o valor do campo 'datacalendario'
    var dataCalendario = form.getValue("datacalendario");
    
    // Log para verificar o valor atual do campo
    log.info("Valor atual de 'datacalendario': " + dataCalendario);

    // Verifica se o campo 'datacalendario' está vazio
    if (!dataCalendario || dataCalendario.trim() === "") {
        // Obtemos a data atual usando a classe java.util.Date no Fluig
        var today = new java.util.Date();

        // Criamos um objeto para formatar a data no estilo brasileiro (dd/MM/yyyy)
        var sdf = new java.text.SimpleDateFormat("dd/MM/yyyy");

        // Formatamos a data atual
        var dataFormatada = sdf.format(today);

        // Definimos a data formatada no campo 'datacalendario'
        form.setValue("datacalendario", dataFormatada);

        // Registro de log para verificar se o valor foi setado corretamente
        log.info("Campo 'datacalendario' preenchido com: " + dataFormatada);
    } else {
        // Log para indicar que a data já estava preenchida
        log.info("Data já está preenchida: " + dataCalendario);
    }
}
