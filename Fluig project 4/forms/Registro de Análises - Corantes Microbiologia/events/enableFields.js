function enableFields(form){
	var atv_atual = getValue("WKNumState");
	
	log.info("enableFields - atv_atual: " + atv_atual);
	
	if(atv_atual == 4) {
		
	}
	
	
	else if(atv_atual == 5){
		desabilitarSolicitante(form);
	}
	
 
function desabilitarSolicitante(form){
	form.setEnabled("itens", false);
	form.setEnabled("lote", false);
	form.setEnabled("data_inicio_esterilidade", false);
	form.setEnabled("aspecto", false);
	form.setEnabled("lotereagente", false);
	form.setEnabled("Resp", false);
	

}




}