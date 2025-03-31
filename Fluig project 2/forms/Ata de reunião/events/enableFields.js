function enableFields(form){
	var atv_atual = getValue("WKNumState");
	
	log.info("enableFields - atv_atual: " + atv_atual);
	
	if(atv_atual == 4) {
		
	}
	
	else if(atv_atual == 5){
		desabilitarSolicitante(form);
		desabilitarSolicitante6(form);
	}
	
	else if(atv_atual == 7){
		desabilitarSolicitante(form);
		desabilitarSolicitante5(form);
	}
	
	
}


function desabilitarSolicitante(form){
	form.setEnabled("datacalendario", false);
	form.setEnabled("horario_inicio", false);
	form.setEnabled("horario_termino", false);
	form.setEnabled("causa", false);
	form.setEnabled("porque", false);
	form.setEnabled("agm", false);
	form.setEnabled("pvo", false);
	form.setEnabled("comercial", false);
	form.setEnabled("orcamento", false);
	form.setEnabled("cipa", false);
	form.setEnabled("brigada", false);
	form.setEnabled("revisao", false);
	form.setEnabled("outros", false);
	form.setEnabled("descricao_outros_acao", false);
	form.setEnabled("descricao_acao_1", false);
	form.setEnabled("responsavel_1", false);
	form.setEnabled("descricao_acao_2", false);
	form.setEnabled("responsavel_2", false);
	form.setEnabled("descricao_acao_3", false);
	form.setEnabled("responsavel_3", false);
	form.setEnabled("descricao_acao_4", false);
	form.setEnabled("responsavel_4", false);
	form.setEnabled("descricao_acao_5", false);
	form.setEnabled("responsavel_5", false);
	form.setEnabled("consideracoes", false);
	form.setEnabled("data_prevista", false);
	form.setEnabled("Local_palatforma", false);
	form.setEnabled("termino", false);
	
}

function desabilitarSolicitante5(form){
	form.setEnabled("consideracoes2", false);
	form.setEnabled("informativo", false);
	
	
	
}

function desabilitarSolicitante6(form){
	form.setEnabled("validar", false);
	form.setEnabled("observacao", false);
	
	
	
}





