function displayFields(form,customHTML){
	var atv_atual = getValue("WKNumState");
	var returnFromActivity5 = form.getValue("returnFromActivity5");
	
	var numSolicitacao = getValue("WKNumProces");

    // Preenche o campo de número de solicitação se o valor estiver disponível
    if (numSolicitacao) {
        form.setValue("numeroSolicitacao", numSolicitacao);
    } else {
        log.info("Número da solicitação não disponível.");
    }
	
	log.info("atv_atual: " + atv_atual);
	
    
    // Atividades 0 e 4
    if (atv_atual == 0 || atv_atual == 4) {
        
        form.setVisibleById("panelwarning3", false);
    }


}