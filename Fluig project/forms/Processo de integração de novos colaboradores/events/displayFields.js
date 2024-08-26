function displayFields(form,customHTML){
	var atv_atual = getValue("WKNumState");
	var returnFromActivity5 = form.getValue("returnFromActivity5");
	
	log.info("atv_atual: " + atv_atual);
	log.info("Return From Activity 5: " + returnFromActivity5);
    
    // Atividades 0 e 4
    if (atv_atual == 0 || atv_atual == 4) {
        // Exibe o painel se retornar da atividade 5
        form.setVisibleById("panelwarning2", atv_atual == 4 && returnFromActivity5 == 'true');
        form.setVisibleById("panel2", false);
        form.setVisibleById("panel3", false);
        form.setVisibleById("panel4", false);
        form.setVisibleById("panel5", false);
        
    }

        // Resetar a flag após usar
        if (atv_atual == 4) {
            form.setValue("returnFromActivity5", 'true');
        }
	
	else if(atv_atual == 11){
		form.setVisibleById("panel3", false);
        form.setVisibleById("panel4", false);
        form.setVisibleById("panel5", false);
		
	}
        
	else if(atv_atual == 13){
		form.setVisibleById("panel4", false);
        form.setVisibleById("panel5", false);
		
	}
        
	else if(atv_atual == 16){
		form.setVisibleById("panel5", false);
		
	}
	else if(atv_atual == 18){
		
		
	}
}