function displayFields(form,customHTML){ 
	var numSolicitacao = getValue("WKNumProces");

    // Preenche o campo de número de solicitação se o valor estiver disponível
    if (numSolicitacao) {
        form.setValue("numeroSolicitacao", numSolicitacao);
    } else {
        log.info("Número da solicitação não disponível.");
    }
	
var atv_atual = getValue("WKNumState"); // Obtém a atividade atual
    
    // Controle de visibilidade dos painéis
    if (atv_atual == 0 || atv_atual == 4) {
        form.setVisibleById("panel2", false);
        form.setVisibleById("panel3", false);
        form.setVisibleById("panel4", false);
        form.setVisibleById("panel5", false);
        form.setVisibleById("panel6", false);
        form.setVisibleById("panel7", false);
        form.setVisibleById("panel8", false);
        form.setVisibleById("panelP", false);
        form.setVisibleById("panelreprovado", false);
    } else if (atv_atual == 5) {
    	form.setVisibleById("panel3", false);
        form.setVisibleById("panel4", false);
        form.setVisibleById("panel5", false);
        form.setVisibleById("panel6", false);
    	form.setVisibleById("panel7", false);
    	form.setVisibleById("panel8", false);
    	form.setVisibleById("panelP", false);
    	form.setVisibleById("panelreprovado", false);
    } else if (atv_atual == 12) { 
	    form.setVisibleById("panel4", false);
	    form.setVisibleById("panel5", false);
	    form.setVisibleById("panel6", false);
		form.setVisibleById("panel7", false);
		form.setVisibleById("panel8", false);
		form.setVisibleById("panelreprovado", false);
    }
    else if (atv_atual == 102) { 
    	form.setVisibleById("panel3", false);
	    form.setVisibleById("panel4", false);
	    form.setVisibleById("panel5", false);
		form.setVisibleById("panel7", false);
		form.setVisibleById("panel8", false);
		form.setVisibleById("panelP", false);
		form.setVisibleById("panelreprovado", false);
    }
    else if (atv_atual == 16) { 
    	form.setVisibleById("panel3", false);
	    form.setVisibleById("panel5", false);
	    form.setVisibleById("panel6", false);
		form.setVisibleById("panel7", false);
		form.setVisibleById("panel8", false);
		form.setVisibleById("panelreprovado", false);
    }
    else if (atv_atual == 18) { 
	    form.setVisibleById("panel3", false);
	    form.setVisibleById("panel4", false);
	    form.setVisibleById("panel6", false);
		form.setVisibleById("panel7", false);
		form.setVisibleById("panel8", false);
		form.setVisibleById("panelreprovado", false);
		
    }
    else if (atv_atual == 10) {
    	form.setVisibleById("panel3", false);
    	form.setVisibleById("panel6", false);
        form.setVisibleById("panel4", false);
        form.setVisibleById("panel5", false);
    	form.setVisibleById("panel7", false);
    	form.setVisibleById("panelP", false);
    	form.setVisibleById("panelreprovado", false);
    }
    else if (atv_atual == 21) {
    	form.setVisibleById("panel4", false);
	    form.setVisibleById("panel5", false);
	    form.setVisibleById("panel6", false);
	    form.setVisibleById("panel8", false);
	    
		
    }
    else if (atv_atual == 111) {
    	form.setVisibleById("panel3", false);
	    form.setVisibleById("panel4", false);
	    form.setVisibleById("panel5", false);
	    form.setVisibleById("panel8", false);
	    form.setVisibleById("panelP", false);
	    
    }
    else if (atv_atual == 25) {
    	form.setVisibleById("panel3", false);
	    form.setVisibleById("panel5", false);
	    form.setVisibleById("panel6", false);
	    form.setVisibleById("panel8", false);
	    
    }
    else if (atv_atual == 27) {
    	form.setVisibleById("panel3", false);
	    form.setVisibleById("panel4", false);
	    form.setVisibleById("panel6", false);
	    form.setVisibleById("panel8", false);
	    
    }
    else if (atv_atual == 29) {
    	form.setVisibleById("panel6", false);
    	form.setVisibleById("panel3", false);
        form.setVisibleById("panel4", false);
        form.setVisibleById("panel5", false);
        form.setVisibleById("panelP", false);
        
    }
    else if (atv_atual == 40) {
    	form.setVisibleById("panel3", false);
        form.setVisibleById("panel4", false);
        form.setVisibleById("panel5", false);
        form.setVisibleById("panel6", false);
    	form.setVisibleById("panel7", false);
    	form.setVisibleById("panel8", false);
    	form.setVisibleById("panelreprovado", false);
    }
    
    else if (atv_atual == 48) {
    	form.setVisibleById("panel4", false);
	    form.setVisibleById("panel5", false);
	    form.setVisibleById("panel6", false);
	    form.setVisibleById("panel8", false);
	    form.setVisibleById("panel7", false);
	    
		
    }
    else if (atv_atual == 106) { 
    	form.setVisibleById("panel3", false);
	    form.setVisibleById("panel4", false);
	    form.setVisibleById("panel5", false);
		form.setVisibleById("panel7", false);
		form.setVisibleById("panel8", false);
		form.setVisibleById("panelP", false);
    }
    else if (atv_atual == 60) {
    	form.setVisibleById("panel3", false);
	    form.setVisibleById("panel5", false);
	    form.setVisibleById("panel6", false);
	    form.setVisibleById("panel8", false);
	    form.setVisibleById("panel7", false);
    }
    
    else if (atv_atual == 54) { 
	    form.setVisibleById("panel3", false);
	    form.setVisibleById("panel4", false);
	    form.setVisibleById("panel6", false);
		form.setVisibleById("panel7", false);
		form.setVisibleById("panel8", false);
		
    }
    else if (atv_atual == 72) {
    	form.setVisibleById("panel3", false);
    	form.setVisibleById("panel6", false);
        form.setVisibleById("panel4", false);
        form.setVisibleById("panel5", false);
    	form.setVisibleById("panel7", false);
    	form.setVisibleById("panelP", false);
    }
    
    else if (atv_atual == 79) {
    	form.setVisibleById("panelreprovado", false);
    	form.setVisibleById("panel4", false);
	    form.setVisibleById("panel5", false);
	    form.setVisibleById("panel6", false);
	    form.setVisibleById("panel8", false);
	    
        
    }
    
    else if (atv_atual == 108) {
    	form.setVisibleById("panelreprovado", false);
    	form.setVisibleById("panel3", false);
	    form.setVisibleById("panel4", false);
	    form.setVisibleById("panel5", false);
		
		form.setVisibleById("panel8", false);
		form.setVisibleById("panelP", false);
        
    }
    
    else if (atv_atual == 81) {
    	form.setVisibleById("panelreprovado", false);
    	form.setVisibleById("panel3", false);
	    form.setVisibleById("panel5", false);
	    form.setVisibleById("panel6", false);
	    form.setVisibleById("panel8", false);
	    
        
    }
    
    else if (atv_atual == 80) {
    	form.setVisibleById("panelreprovado", false);
    	form.setVisibleById("panel3", false);
	    form.setVisibleById("panel4", false);
	    form.setVisibleById("panel6", false);
		
		form.setVisibleById("panel8", false);
        
    }
    
    else if (atv_atual == 83) {
    	form.setVisibleById("panelreprovado", false);
    	form.setVisibleById("panel3", false);
        form.setVisibleById("panel4", false);
        form.setVisibleById("panel5", false);
        form.setVisibleById("panel6", false);
    	form.setVisibleById("panelP", false);
        
    }
}
