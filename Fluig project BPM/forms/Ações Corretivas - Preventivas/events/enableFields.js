function enableFields(form){
	var atv_atual = getValue("WKNumState");
	
	log.info("enableFields - atv_atual: " + atv_atual);
	
	if(atv_atual == 4) {
		desabilitarCamposAtividade5(form);
	}
	
	else if(atv_atual == 5){
		desabilitarSolicitante(form);
	}
	else if (atv_atual == 13) {
		desabilitarSolicitante(form);
        desabilitarCamposAtividade5(form);
        desabilitarCamposAtividade15(form);
    }
	else if (atv_atual == 15) {
		desabilitarSolicitante(form);
        desabilitarCamposAtividade5(form);
        desabilitarCamposAtividade13(form);
    }
	
	
}


function desabilitarSolicitante(form){
	form.setEnabled("data_inicio", false);
	form.setEnabled("identificacao_processo", false);
	form.setEnabled("processo_origem", false);
	form.setEnabled("tipo", false);
	form.setEnabled("resposta1", false);
	form.setEnabled("resposta2", false);
	form.setEnabled("resposta3", false);
	form.setEnabled("resposta4", false);
	form.setEnabled("resposta5", false);
	form.setEnabled("resposta6", false);
	form.setEnabled("resposta7", false);
	form.setEnabled("descricao_outros_acao", false);
	
}

function desabilitarCamposAtividade5(form) {
	form.setEnabled("validacao_acoes_responsavel", false);
	form.setEnabled("correcao_primeira", false);
}

function desabilitarCamposAtividade13(form) {
	form.setEnabled("data_realizacao_acao", false);
	form.setEnabled("status", false);
	form.setEnabled("motivos", false);
}

function desabilitarCamposAtividade15(form) {
	form.setEnabled("validacao_solicitante", false);
	form.setEnabled("motivo_nao_conforme", false);
	form.setEnabled("data_conclusao", false);
	
}


