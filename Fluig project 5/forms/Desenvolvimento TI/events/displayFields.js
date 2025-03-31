function displayFields(form,customHTML){
	// Captura o número da solicitação
    var numSolicitacao = getValue("WKNumProces");

    // Preenche o campo de número de solicitação se o valor estiver disponível
    if (numSolicitacao) {
        form.setValue("numeroSolicitacao", numSolicitacao);
    } else {
        log.info("Número da solicitação não disponível.");
    }
    
	var atv_atual = getValue("WKNumState");
	var returnFromActivity5 = form.getValue("returnFromActivity5");
	var returnFromActivity15 = form.getValue("returnFromActivity15");
	
	log.info("atv_atual: " + atv_atual);
	log.info("Return From Activity 5: " + returnFromActivity5);
	log.info("Return From Activity 15: " + returnFromActivity15);
    
    // Atividades 0 e 4
    if (atv_atual == 0 || atv_atual == 4) {
        // Exibe o painel se retornar da atividade 5
        form.setVisibleById("panel2", atv_atual == 4 && returnFromActivity5 == 'true');
        form.setVisibleById("panel3", false);
        form.setVisibleById("panel4", false);
        form.setVisibleById("panel5", false);
        
    }

        // Resetar a flag após usar
        if (atv_atual == 4) {
            form.setValue("returnFromActivity5", 'false');
        }
	
	else if(atv_atual == 5){
		form.setVisibleById("panel3", false);
        form.setVisibleById("panel4", false);
        form.setVisibleById("panel5", false);
		form.setValue("returnFromActivity5", 'true');
	
    } 
        
	else if(atv_atual == 10){
		form.setVisibleById("panel4", atv_atual == 10 && returnFromActivity15 == 'true');
        form.setVisibleById("panel5", false);
		
	
    } 
        
	else if(atv_atual == 12){
		form.setValue("returnFromActivity15", 'true');
        form.setVisibleById("panel5", false);
		
	
    } 
        
    
}


