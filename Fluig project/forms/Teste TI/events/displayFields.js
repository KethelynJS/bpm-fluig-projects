function displayFields(form,customHTML){
	var atv_atual = getValue("WKNumState");
	
	log.info("atv_atual: " + atv_atual);
	
	if(atv_atual == 0 || atv_atual == 4){
		form.setVisibleById("panelti", false);
		form.setVisibleById("panelvalidado", false);
	}
	
	else if(atv_atual == 5){
		form.setVisibleById("panelvalidado", false);
	}
	
	
}

