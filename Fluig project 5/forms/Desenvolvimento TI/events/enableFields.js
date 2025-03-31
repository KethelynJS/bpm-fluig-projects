function enableFields(form){
	var atv_atual = getValue("WKNumState");
	
	log.info("enableFields - atv_atual: " + atv_atual);
	
	if(atv_atual == 4) {
		desabilitarCamposAtividade5(form);
	}
	
	else if(atv_atual == 5){
		desabilitarSolicitante(form);
	}
	else if(atv_atual == 10){
		desabilitarSolicitante(form);
		desabilitarCamposAtividade5(form);
		desabilitarCamposAtividade12(form);
	}
	else if(atv_atual == 12){
		desabilitarSolicitante(form);
		desabilitarCamposAtividade5(form);
		desabilitarCamposAtividade10(form);
	}
	else if(atv_atual == 17){
		desabilitarSolicitante(form);
		desabilitarCamposAtividade5(form);
		desabilitarCamposAtividade10(form);
		desabilitarCamposAtividade12(form);
		
	}

}

function desabilitarSolicitante(form){
	form.setEnabled("solicitante", false);
	form.setEnabled("setor", false);
	form.setEnabled("data_inicio", false);
	form.setEnabled("tipo_solicitacao", false);
	form.setEnabled("consideracoes", false);
	form.setEnabled("referencia", false);
	form.setEnabled("responsavel_etapa", false);
	form.setEnabled("finalidade", false);
	
	
}

function desabilitarCamposAtividade5(form) {
	form.setEnabled("informacoes_TI", false);
	form.setEnabled("observacao_TI", false);
	
}

function desabilitarCamposAtividade10(form) {
	form.setEnabled("consideracoes_desenvolvimentp", false);
	
	
}

function desabilitarCamposAtividade12(form) {
	form.setEnabled("validado", false);
	form.setEnabled("consideracoes_usuario", false);
	
}





