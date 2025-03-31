function enableFields(form){
	var atv_atual = getValue("WKNumState");
	
	log.info("enableFields - atv_atual: " + atv_atual);
	
	if(atv_atual == 4) {
		desabilitarSolicitante5(form)
	}
	
	else if(atv_atual == 5){
		desabilitarSolicitante(form);
		
	}
	

}


function desabilitarSolicitante(form){
	form.setEnabled("datacalendario", false);
	form.setEnabled("dados_solicitante", false);
	form.setEnabled("cliente_tipo", false);
	form.setEnabled("data_finalizacao", false);
	form.setEnabled("volume", false);
	
	
}

function desabilitarSolicitante5(form){
	form.setEnabled("abertuda_sac", false);
	form.setEnabled("numero_sac", false);
	form.setEnabled("observacao", false);
	form.setEnabled("validar", false);
	
	
	
}







