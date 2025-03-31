function displayFields(form, customHTML) {
	 var numSolicitacao = getValue("WKNumProces");

	    // Preenche o campo de número de solicitação se o valor estiver disponível
	    if (numSolicitacao) {
	        form.setValue("numeroSolicitacao", numSolicitacao);
	    } else {
	        log.info("Número da solicitação não disponível.");
	    }
    var atv_atual = getValue("WKNumState");
    var returnFromActivity5 = form.getValue("returnFromActivity5");
    
    log.info("atv_atual: " + atv_atual);
    log.info("Return From Activity 9: " + returnFromActivity5);


    if (atv_atual == 0 || atv_atual == 4) {
    	form.setVisibleById("panel2", atv_atual == 4 && returnFromActivity5 == 'true');
        form.setVisibleById("panel3", false);
        form.setVisibleById("panel4", false);
        form.setVisibleById("panel5", false);
    }

        // Resetar a flag após usar
        if (atv_atual == 4) {
        	form.setValue("returnFromActivity5", 'false');
        }
    else if (atv_atual == 9) {
        log.info("Entrou na condição para atividade 9.");
        form.setVisibleById("panel3", false);
        form.setVisibleById("panel4", false);
        form.setVisibleById("panel5", false);
        form.setValue("returnFromActivity5", 'true');
    }
    else if (atv_atual == 14) {
        log.info("Entrou na condição para atividade 14.");
        form.setVisibleById("panel4", false);
        form.setVisibleById("panel5", false);
    }
    else if (atv_atual == 18) {
        log.info("Entrou na condição para atividade 18.");
        form.setVisibleById("panel5", false);
    }
}
