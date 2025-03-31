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
		desabilitarCamposAtividade5(form)
	}

}

function desabilitarSolicitante(form){
	form.setEnabled("solicitante", false);
	form.setEnabled("data_solicitacao", false);
	form.setEnabled("ano_referencia", false);
	form.setEnabled("inspecao", false);
	form.setEnabled("comercializacao", false);
	form.setEnabled("situacao", false);
	form.setEnabled("mudanca", false);
	form.setEnabled("regulamentares", false);
	form.setEnabled("projetos", false);
	form.setEnabled("estabilidade", false);
	
}

function desabilitarCamposAtividade5(form) {
	form.setEnabled("consideracoes", false);
	form.setEnabled("status", false);
}


function desabilitarCamposAtividade9(form) {
	form.setEnabled("observac_", false);
	
}


