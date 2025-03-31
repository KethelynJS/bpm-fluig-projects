function enableFields(form){
	var atv_atual = getValue("WKNumState");
	
	log.info("enableFields - atv_atual: " + atv_atual);
	
	if(atv_atual == 4) {
		
	}
	
	else if(atv_atual == 5){
		desabilitarSolicitante(form);
	}
	

}

function desabilitarSolicitante(form){
	form.setEnabled("solicitante", false);
	form.setEnabled("setor", false);
	form.setEnabled("data_inicio", false);
	form.setEnabled("tipo_dispositivo", false);
	form.setEnabled("justificativa", false);

	
}









