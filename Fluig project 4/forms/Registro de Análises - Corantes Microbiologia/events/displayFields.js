function displayFields(form, customHTML) {
    var atv_atual = getValue("WKNumState"); // Obtém a atividade atual
    
    var numSolicitacao = getValue("WKNumProces");

    // Preenche o campo de número de solicitação se o valor estiver disponível
    if (numSolicitacao) {
        form.setValue("numeroSolicitacao", numSolicitacao);
    } else {
        log.info("Número da solicitação não disponível.");
    }
    
    // Controle de visibilidade dos painéis
    if (atv_atual == 0 || atv_atual == 4) {
        form.setVisibleById("panel2", false);
        
    } else if (atv_atual == 5) {
        
    }
}



