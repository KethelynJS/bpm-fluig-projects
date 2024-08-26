function enableFields(form){
	var atv_atual = getValue("WKNumState");
	
	log.info("enableFields - atv_atual: " + atv_atual);
	
	if(atv_atual == 4) {
		desabilitarSolicitante(form);
	}
	
	else if(atv_atual == 5){
		desabilitarSolicitante(form);
	}
	else if (atv_atual == 13 || atv_atual == 11 || atv_atual == 9) {
		desabilitarSolicitante(form);
        desabilitarCamposAtividade5(form);
    }
}


function desabilitarSolicitante(form){
	form.setEnabled("solicitante", false);
	form.setEnabled("setor", false);
	form.setEnabled("produto", false);
	form.setEnabled("tipomotivo", false);
	form.setEnabled("informacao", false);
	form.setEnabled("prioridade", false);
	form.setEnabled("datacalendario", false);
	
}

function desabilitarCamposAtividade5(form) {
	form.setEnabled("status", false);
	form.setEnabled("consideracoes", false);
}