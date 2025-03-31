function displayFields(form,customHTML){
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
	log.info("Return From Activity 5: " + returnFromActivity5);
	
    
    // Atividades 0 e 4
    if (atv_atual == 0 || atv_atual == 4) {
        // Exibe o painel se retornar da atividade 5
        form.setVisibleById("panelwarningC", atv_atual == 4 && returnFromActivity5 == 'true');
        form.setVisibleById("panelwarning2", false);
        form.setVisibleById("panelwarning3", false);
        form.setVisibleById("panelwarning4", false);
        form.setVisibleById("panelwarning5", false);
        form.setVisibleById("panelwarning6", false);
        form.setVisibleById("panelwarning7", false);
        form.setVisibleById("panelwarningS", false);
        form.setVisibleById("panelmovimentacao", false);
        form.setVisibleById("panelreprovacao", false);
        
    }

        // Resetar a flag após usar
        if (atv_atual == 4) {
            form.setValue("returnFromActivity5", 'false');
        }
	
	else if(atv_atual == 5){
		form.setVisibleById("panelwarning2", false);
        form.setVisibleById("panelwarning3", false);
        form.setVisibleById("panelwarning4", false);
        form.setVisibleById("panelwarning5", false);
        form.setVisibleById("panelwarning6", false);
        form.setVisibleById("panelwarning7", false);
        form.setVisibleById("panelwarningS", false);
        form.setVisibleById("panelmovimentacao", false);
        form.setVisibleById("panelreprovacao", false);
		form.setValue("returnFromActivity5", 'true');
	
    } 
	else if(atv_atual == 73){
		form.setVisibleById("panelmovimentacao", false);
		form.setVisibleById("panelwarning2", false);
        form.setVisibleById("panelwarning3", false);
        form.setVisibleById("panelwarning4", false);
        form.setVisibleById("panelwarning5", false);
        form.setVisibleById("panelwarning6", false);
        form.setVisibleById("panelwarning7", false);
        form.setVisibleById("panelwarningS", false);
		
	
    } 
       
	else if(atv_atual == 16){
		form.setVisibleById("panelwarning2", false);
        form.setVisibleById("panelwarning3", false);
        form.setVisibleById("panelwarning4", false);
        form.setVisibleById("panelwarning5", false);
        form.setVisibleById("panelwarning6", false);
        form.setVisibleById("panelwarning7", false);
        form.setVisibleById("panelmovimentacao", false);
        form.setVisibleById("panelreprovacao", false);
		
	
    } 
	else if(atv_atual == 18){
		form.setVisibleById("panelwarning2", false);
        form.setVisibleById("panelwarning3", false);
        form.setVisibleById("panelwarning5", false);
        form.setVisibleById("panelwarning6", false);
        form.setVisibleById("panelwarning7", false);
        form.setVisibleById("panelmovimentacao", false);
        form.setVisibleById("panelreprovacao", false);
		
	
    } 
        
        
	else if(atv_atual == 20){
		
        form.setVisibleById("panelwarning3", false);
        form.setVisibleById("panelwarning5", false);
        form.setVisibleById("panelwarning6", false);
        form.setVisibleById("panelwarning7", false);
        form.setVisibleById("panelmovimentacao", false);
        form.setVisibleById("panelreprovacao", false);
		
	
    } 
    
	else if(atv_atual == 22){
		
        form.setVisibleById("panelwarning5", false);
        form.setVisibleById("panelwarning6", false);
        form.setVisibleById("panelwarning7", false);
        form.setVisibleById("panelmovimentacao", false);
        form.setVisibleById("panelreprovacao", false);
	
    } 
        
else if(atv_atual == 24){
		
        
        form.setVisibleById("panelwarning6", false);
        form.setVisibleById("panelwarning7", false);
        form.setVisibleById("panelmovimentacao", false);
        form.setVisibleById("panelreprovacao", false);
	
    } 
        
else if(atv_atual == 77){
	
    
    form.setVisibleById("panelwarning6", false);
    form.setVisibleById("panelwarning7", false);
    form.setVisibleById("panelreprovacao", false);

} 
        
else if(atv_atual == 81){
	
    
    form.setVisibleById("panelwarning6", false);
    form.setVisibleById("panelwarning7", false);
    form.setVisibleById("panelreprovacao", false);

} 
        
else if(atv_atual == 28){

    
    form.setVisibleById("panelwarning7", false);

} 
  
else if(atv_atual == 14){
	form.setVisibleById("panelwarningS", false);
    form.setVisibleById("panelwarningC", false);
	form.setVisibleById("panelwarning2", false);
    form.setVisibleById("panelwarning3", false);
    form.setVisibleById("panelwarning5", false);
    form.setVisibleById("panelwarning6", false);
    form.setVisibleById("panelwarning7", false);
    form.setVisibleById("panelmovimentacao", false);
    form.setVisibleById("panelreprovacao", false);
	

}   
        
else if(atv_atual == 34){
	form.setVisibleById("panelwarningS", false);
    form.setVisibleById("panelwarningC", false);
    form.setVisibleById("panelwarning3", false);
    form.setVisibleById("panelwarning5", false);
    form.setVisibleById("panelwarning6", false);
    form.setVisibleById("panelwarning7", false);
    form.setVisibleById("panelmovimentacao", false);
    form.setVisibleById("panelreprovacao", false);
	

} 
        
else if(atv_atual == 36){
	form.setVisibleById("panelwarningS", false);
    form.setVisibleById("panelwarningC", false);
    form.setVisibleById("panelwarning5", false);
    form.setVisibleById("panelwarning6", false);
    form.setVisibleById("panelwarning7", false);
    form.setVisibleById("panelmovimentacao", false);
    form.setVisibleById("panelreprovacao", false);

} 
        
else if(atv_atual == 38){
	
	form.setVisibleById("panelwarningS", false);
    form.setVisibleById("panelwarningC", false);
    form.setVisibleById("panelwarning6", false);
    form.setVisibleById("panelwarning7", false);
    form.setVisibleById("panelmovimentacao", false);
    form.setVisibleById("panelreprovacao", false);

} 
        
else if(atv_atual == 41){

	form.setVisibleById("panelwarningS", false);
    form.setVisibleById("panelwarningC", false);
    form.setVisibleById("panelwarning7", false);
    
    form.setVisibleById("panelreprovacao", false);

} 
else if(atv_atual == 43){

    
    form.setVisibleById("panelwarningS", false);
    form.setVisibleById("panelwarningC", false);
    
    form.setVisibleById("panelreprovacao", false);

} 
        
}
