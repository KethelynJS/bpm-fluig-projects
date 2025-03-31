function enableFields(form){
	var atv_atual = getValue("WKNumState");
	
	log.info("enableFields - atv_atual: " + atv_atual);
	
	if(atv_atual == 4) {
		desabilitarSolicitante5(form)
	}
	
	
	else if(atv_atual == 5){
		desabilitarSolicitante(form);
		desabilitarSolicitante14(form);
		desabilitarSolicitante27(form);
	}
	
	else if(atv_atual == 10){
		desabilitarSolicitante(form);
		desabilitarSolicitante5(form);
	}
	
	else if(atv_atual == 14){
		desabilitarSolicitante(form);
		desabilitarSolicitante5(form);
		desabilitarSolicitante10(form);
	}
	
	else if(atv_atual == 27){
		desabilitarSolicitante(form);
		desabilitarSolicitante5(form);
		desabilitarSolicitante10(form);
	}
	
 
	
}
	
function desabilitarSolicitante(form){
	form.setEnabled("solicitante", false);
	form.setEnabled("setor", false);
	form.setEnabled("datacalendario", false);
	form.setEnabled("equipamento_modelo", false);
	form.setEnabled("n_equipamento", false);
	form.setEnabled("ocorrencia", false);
	
}

function desabilitarSolicitante5(form){
	form.setEnabled("interno_externo", false);
	form.setEnabled("descrever_acao", false);
}

function desabilitarSolicitante10(form){
	form.setEnabled("observacao_manutencao", false);
	
}

function desabilitarSolicitante14(form){
	form.setEnabled("validar", false);
	form.setEnabled("observacao_solicitante", false);
}

function desabilitarSolicitante27(form){
	form.setEnabled("validar", false);
	form.setEnabled("observacao_solicitante", false);
}