function enableFields(form){
	var atv_atual = getValue("WKNumState");
	
	log.info("enableFields - atv_atual: " + atv_atual);
	
	if(atv_atual == 4) {
		
	}
	
	else if(atv_atual == 5){
		desabilitarSolicitante(form);
	}
	
	else if(atv_atual == 11){
		desabilitarSolicitante(form);
		desabilitarSolicitante5(form);
	}
	
	else if(atv_atual == 13){
		desabilitarSolicitante(form);
		desabilitarSolicitante5(form);
		desabilitarSolicitante11(form);
	}
	
}


function desabilitarSolicitante(form){
	form.setEnabled("colaborador", false);
	form.setEnabled("datacalendario", false);
	form.setEnabled("funcao_atual", false);
	form.setEnabled("setor_atual", false);
	form.setEnabled("funcao_nova", false);
	form.setEnabled("setor_novo", false);
	
}

function desabilitarSolicitante5(form){
	form.setEnabled("validacao", false);
	
	
}

function desabilitarSolicitante11(form){
	form.setEnabled("exame_medico", false);
	form.setEnabled("dados_contabilidade", false);
	form.setEnabled("horario_dia", false);
	
	
}

function desabilitarSolicitante13(form){
	form.setEnabled("contabilidade", false);
	
}


