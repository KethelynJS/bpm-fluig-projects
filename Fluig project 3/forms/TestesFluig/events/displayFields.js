function displayFields(form, customHTML) {
    // Captura o número da solicitação
    var numSolicitacao = getValue("WKNumProces");

    // Verifica se o número da solicitação foi obtido
    if (numSolicitacao) {
        // Preenche o campo com o número da solicitação
        form.setValue("numeroSolicitacao", numSolicitacao);
    } else {
        // Log para verificar se o número da solicitação não está disponível
        log.info("Número da solicitação não disponível.");
    }
}
