function displayFields(form,customHTML){
	var numSolicitacao = getValue("WKNumProces");

    // Preenche o campo de número de solicitação se o valor estiver disponível
    if (numSolicitacao) {
        form.setValue("numeroSolicitacao", numSolicitacao);
    } else {
        log.info("Número da solicitação não disponível.");
    }
	var atv_atual = getValue("WKNumState");
	var returnFromActivity11 = form.getValue("returnFromActivity11");
	
	log.info("atv_atual: " + atv_atual);
    
    
    if (atv_atual == 0 || atv_atual == 4) {
        form.setVisibleById("panel2", false);
        form.setVisibleById("panel3", false);
        
        
    }
    

	else if(atv_atual == 5){
		form.setVisibleById("panel3", false);
        

	}
    
    
}