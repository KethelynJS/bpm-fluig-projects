function enableFields(form){
	var atv_atual = getValue("WKNumState");
	
	log.info("enableFields - atv_atual: " + atv_atual);
	
	if(atv_atual == 4) {
		desabilitarCamposAtividade5(form);
	}
	
	else if(atv_atual == 5){
		desabilitarSolicitante(form);
	}
	else if (atv_atual == 14) {
		desabilitarSolicitante(form);
        desabilitarCamposAtividade5(form);
    }
	else if (atv_atual == 16) {
		desabilitarSolicitante(form);
        desabilitarCamposAtividade5(form);
        desabilitarCamposAtividade14(form);
    }
	
}


function desabilitarSolicitante(form){
	form.setEnabled("solicitante", false);
	form.setEnabled("setor", false);
	form.setEnabled("produto", false);
	form.setEnabled("solicitantepn", false);
	form.setEnabled("opcao", false);
	form.setEnabled("datacalendario", false);
	
}

function desabilitarCamposAtividade5(form) {
	form.setEnabled("prioridade", false);
	form.setEnabled("consideracoes", false);
}

function desabilitarCamposAtividade14(form) {
	form.setEnabled("realizado", false);
	form.setEnabled("codigo", false);
}
