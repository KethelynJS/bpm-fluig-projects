function displayFields(form,customHTML){
	var numSolicitacao = getValue("WKNumProces");

    // Preenche o campo de número de solicitação se o valor estiver disponível
    if (numSolicitacao) {
        form.setValue("numeroSolicitacao", numSolicitacao);
    } else {
        log.info("Número da solicitação não disponível.");
    }
	var atv_atual = getValue("WKNumState");
	
	log.info("atv_atual: " + atv_atual);
    
    
    if (atv_atual == 0 || atv_atual == 4) {
        
        form.setVisibleById("panel2", false);
        form.setVisibleById("panel3", false);
        form.setVisibleById("panel4", false);
    }

	
	else if(atv_atual == 5){
		form.setVisibleById("panel3", false);
		form.setVisibleById("panel4", false);
	}
    
	else if(atv_atual == 14){
		form.setVisibleById("panel3", false);
	}
    
	else if(atv_atual == 24){
		form.setVisibleById("panel2", false);
	}
    
	else if(atv_atual == 22){
		form.setVisibleById("panel2", false);
		form.setVisibleById("panel4", false);
	}
    
	
    
 
}


