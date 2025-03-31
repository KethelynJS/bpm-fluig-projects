function enableFields(form){
	var atv_atual = getValue("WKNumState");
	
	log.info("enableFields - atv_atual: " + atv_atual);
	
	if(atv_atual == 4) {
		desabilitarCamposAtividade5(form);
	}
	
	else if(atv_atual == 5){
		desabilitarSolicitante(form);
	}
	
	else if(atv_atual == 9){
		desabilitarSolicitante(form);
		desabilitarCamposAtividade5(form)
	}

}

function desabilitarSolicitante(form){
	form.setEnabled("ano", false);
	form.setEnabled("responsavel", false);
	form.setEnabled("data_solicitacao", false);
	form.setEnabled("procedencia", false);
	form.setEnabled("itempreenchimento", false);
	form.setEnabled("consideracoes", false);
	
	
}

function desabilitarCamposAtividade5(form) {
	form.setEnabled("responsavel2", false);
	form.setEnabled("data_solicitacao2", false);
	form.setEnabled("itempreenchimento2", false);
	form.setEnabled("consideracoes2", false);
}




