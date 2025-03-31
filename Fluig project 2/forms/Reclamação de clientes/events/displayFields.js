function displayFields(form,customHTML){
	var atv_atual = getValue("WKNumState");
	var returnFromActivity5 = form.getValue("returnFromActivity5");
	
	log.info("atv_atual: " + atv_atual);
    
    
	if (atv_atual == 0 || atv_atual == 4) {
	    // Exibe o painel se retornar da atividade 5
	    form.setVisibleById("panel4", atv_atual == 4 && returnFromActivity5 == 'true');
	    form.setVisibleById("panel2", false);
	    form.setVisibleById("panel3", false);
	    
	    
	}

	    // Resetar a flag após usar
	    if (atv_atual == 4) {
	        form.setValue("returnFromActivity5", 'false');
	    }
    

	else if(atv_atual == 5){
		form.setVisibleById("panel3", false);
		form.setVisibleById("panel4", false);
        

	}
    
	else if(atv_atual == 7){
        form.setVisibleById("panel4", false);
        
	}
    
	else if(atv_atual == 9){
		form.setValue("returnFromActivity5", 'true');
        
	}
    
}
