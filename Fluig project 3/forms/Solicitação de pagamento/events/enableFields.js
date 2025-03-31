function enableFields(form){
	var atv_atual = getValue("WKNumState");
	
	log.info("enableFields - atv_atual: " + atv_atual);
	
	if(atv_atual == 4) {
		desabilitarCamposAtividade5(form);
	}
	
	else if(atv_atual == 5){
		desabilitarSolicitante(form);
	}

}

function desabilitarSolicitante(form){
	form.setEnabled("solicitante", false);
	form.setEnabled("datacalendario", false);
	form.setEnabled("valor", false);
	form.setEnabled("finalidade", false);
	
	
}

function desabilitarCamposAtividade5(form) {
	form.setEnabled("validacao", false);
	form.setEnabled("consideracoes", false);
	
}





