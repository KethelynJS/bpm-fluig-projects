function enableFields(form){
	var atv_atual = getValue("WKNumState");
	
	log.info("enableFields - atv_atual: " + atv_atual);
	
	if(atv_atual == 4) {
		desabilitarSolicitante4(form);
	}
	
	
	else if(atv_atual == 7){
		desabilitarSolicitante4(form);
	}
	
 
	
}
	
function desabilitarSolicitante4(form){
	form.setEnabled("opcao7", false);
	form.setEnabled("lote", false);
	form.setEnabled("aspecto", false);
	form.setEnabled("Resp", false);
	form.setEnabled("dosagem", false);
	form.setEnabled("leitura_refratormetro", false);
	form.setEnabled("massa_volume", false);
		
		
}