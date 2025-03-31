function displayFields(form,customHTML){
	var atv_atual = getValue("WKNumState");
	var returnFromActivity11 = form.getValue("returnFromActivity11");
	
	log.info("atv_atual: " + atv_atual);
    
    
    if (atv_atual == 0 || atv_atual == 4) {
        form.setVisibleById("panel2", false);
        form.setVisibleById("panel3", false);
        form.setVisibleById("panel4", false);
        
    }
    

	else if(atv_atual == 5){
		form.setVisibleById("panel3", false);
        

	}
    
	else if(atv_atual == 10){
        form.setVisibleById("panel4", false);
        
	}
    
	else if(atv_atual == 14){
		form.setVisibleById("panel3", false);
        
	}
    
}