function displayFields(form,customHTML){
	var atv_atual = getValue("WKNumState");
	var returnFromActivity5 = form.getValue("returnFromActivity5");
	
	log.info("atv_atual: " + atv_atual);
	
    
    // Atividades 0 e 4
    if (atv_atual == 0 || atv_atual == 4) {
        form.setVisibleById("panelwarning2", false);
        form.setVisibleById("panelwarning3", false);
    }


	
	else if(atv_atual == 7){
		form.setVisibleById("panelwarning3", false);
		
	}
	
	else if(atv_atual == 9){
		
	}
}