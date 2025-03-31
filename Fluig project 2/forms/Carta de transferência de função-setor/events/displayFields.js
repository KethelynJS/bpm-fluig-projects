function displayFields(form,customHTML){
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
    
	else if(atv_atual == 11){
		form.setVisibleById("panel4", false);
	}
    
}