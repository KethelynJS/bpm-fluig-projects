function displayFields(form,customHTML){
	var atv_atual = getValue("WKNumState");
	var returnFromActivity5 = form.getValue("returnFromActivity5");
	var returnFromActivity15 = form.getValue("returnFromActivity15");
	
	log.info("atv_atual: " + atv_atual);
	log.info("Return From Activity 5: " + returnFromActivity5);
	log.info("Return From Activity 15: " + returnFromActivity15);
    
    // Atividades 0 e 4
    if (atv_atual == 0 || atv_atual == 4) {
        // Exibe o painel se retornar da atividade 5
        form.setVisibleById("panelwarning", atv_atual == 4 && returnFromActivity5 == 'true');
        form.setVisibleById("panelwarning3", false);
        form.setVisibleById("panelwarning4", false);
        
    }

        // Resetar a flag após usar
        if (atv_atual == 4) {
            form.setValue("returnFromActivity5", 'false');
        }
	
	else if(atv_atual == 5){
		form.setVisibleById("panelwarning3", false);
		form.setVisibleById("panelwarning4", false);
		form.setValue("returnFromActivity5", 'true');
	
    } else if (atv_atual == 13) {
        
        
    } else if (atv_atual == 15) {
    	
        
    }
    
}
