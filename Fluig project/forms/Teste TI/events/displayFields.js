function displayFields(form,customHTML){
	var atv_atual = getValue("WKNumState");
	var returnFromActivity5 = form.getValue("returnFromActivity5");
	
	log.info("atv_atual: " + atv_atual);
	
	if(atv_atual == 0 || atv_atual == 4){
		form.setVisibleById("panelti", false);
		form.setVisibleById("panelvalidado", false);
		form.setVisibleById("panelnotificacao", false);
	}
	
	if (atv_atual == 5) {
		form.setVisibleById("panelvalidado", atv_atual == 5 && returnFromActivity5 == 'true');
        form.setValue("returnFromActivity5", 'false');
        form.setVisibleById("panelnotificacao", false);
    }
	
	else if(atv_atual == 13){
		form.setValue("returnFromActivity5", 'true');
		form.setVisibleById("panelnotificacao", false);
        
	}
	
	
}

