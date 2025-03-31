function enableFields(form){
	var atv_atual = getValue("WKNumState");
	
	log.info("enableFields - atv_atual: " + atv_atual);
	
	if(atv_atual == 4) {
		desabilitarCamposAtividade5(form);
	}
	
	else if(atv_atual == 5){
		desabilitarSolicitante(form);
	}
	else if (atv_atual == 22) {
		desabilitarSolicitante(form);
        desabilitarCamposAtividade5(form);
    }
	else if (atv_atual == 12) {
		desabilitarSolicitante(form);
        desabilitarCamposAtividade5(form);
        desabilitarCamposAtividade22(form);
        desabilitarCamposAtividade15(form);
    }
	
	else if (atv_atual == 15) {
		desabilitarSolicitante(form);
        desabilitarCamposAtividade5(form);
        desabilitarCamposAtividade22(form);
        desabilitarCamposAtividade12(form);
    }
	
}


function desabilitarSolicitante(form){
	form.setEnabled("data_inicio", false);
	form.setEnabled("resp_pelo_envio", false);
	form.setEnabled("setor_responsavel", false);
	form.setEnabled("natureza_desvio", false);
	form.setEnabled("data_ocorrencia", false);
	form.setEnabled("tipo_nao_conformidade", false);
	form.setEnabled("acao_imediata_tomada", false);
	form.setEnabled("descricao_outros", false);
	form.setEnabled("descricao_outros_acao", false);
	form.setEnabled("descricao_nao_conformidade", false);
	
}

function desabilitarCamposAtividade5(form) {
	form.setEnabled("validando_primeira", false);
	form.setEnabled("observacao_gq", false);
}

function desabilitarCamposAtividade22(form) {
	form.setEnabled("setor_responsavel_investigacao", false);
	form.setEnabled("observacao_garantia", false);
}

function desabilitarCamposAtividade12(form) {
	form.setEnabled("investigacao_previa", false);
	form.setEnabled("disposicao_final_lote", false);
	form.setEnabled("conclusao", false);
	form.setEnabled("resp_investigacao", false);
	form.setEnabled("descricao_outros_final", false);
}

function desabilitarCamposAtividade15(form) {
	form.setEnabled("validando_final", false);
	form.setEnabled("consideracoes", false);
}
