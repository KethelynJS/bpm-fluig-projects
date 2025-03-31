function enableFields(form){
	var atv_atual = getValue("WKNumState");
	
	log.info("enableFields - atv_atual: " + atv_atual);
	
	if(atv_atual == 4) {
		desabilitarCamposAtividade55(form);
	}
	
	else if(atv_atual == 5){
		desabilitarSolicitante(form);
	}
	
	else if(atv_atual == 16){
		desabilitarSolicitante(form);
	
		desabilitarCamposAtividade55(form)
	}
	else if(atv_atual == 18){
		desabilitarCamposAtividade55(form)
		desabilitarSolicitante(form);
		
	}
	else if(atv_atual == 20){
		desabilitarCamposAtividade55(form)
		
		desabilitarSolicitante(form);
		desabilitarCamposAtividade18(form);
	}
	else if(atv_atual == 22){
		desabilitarCamposAtividade55(form)
		desabilitarSolicitante(form);
		desabilitarCamposAtividade18(form);
		desabilitarCamposAtividade20(form);
	}
	else if(atv_atual == 24){
		desabilitarCamposAtividade55(form)
		desabilitarCamposAtividade22(form);
		desabilitarSolicitante(form);
		desabilitarCamposAtividade18(form);
		desabilitarCamposAtividade20(form);
	}
	else if(atv_atual == 28){
		desabilitarCamposAtividade55(form)
		desabilitarCamposAtividade22(form);
		desabilitarSolicitante(form);
		desabilitarCamposAtividade18(form);
		desabilitarCamposAtividade20(form);
		desabilitarCamposAtividade24(form);
		desabilitarCamposAtividade77(form);
	}
	else if(atv_atual == 30){
		desabilitarCamposAtividade55(form)
		desabilitarCamposAtividade22(form);
		desabilitarSolicitante(form);
		desabilitarCamposAtividade18(form);
		desabilitarCamposAtividade20(form);
		desabilitarCamposAtividade28(form);
		desabilitarCamposAtividade24(form);
		desabilitarCamposAtividade77(form);
	}
	
	else if(atv_atual == 14){
		desabilitarCamposAtividade55(form)
		desabilitarSolicitante(form);
	}
	
	else if(atv_atual == 34){
		desabilitarCamposAtividade55(form)
		
		desabilitarSolicitante(form);
		desabilitarCamposAtividade18(form);
	}
	
	else if(atv_atual == 36){
		desabilitarCamposAtividade55(form)
		desabilitarSolicitante(form);
		desabilitarCamposAtividade18(form);
		desabilitarCamposAtividade20(form);
	}
	
	else if(atv_atual == 38){
		desabilitarCamposAtividade55(form)
		desabilitarCamposAtividade22(form);
		desabilitarSolicitante(form);
		desabilitarCamposAtividade18(form);
		desabilitarCamposAtividade20(form);
	}
	
	else if(atv_atual == 41){
		desabilitarCamposAtividade55(form)
		desabilitarCamposAtividade22(form);
		desabilitarSolicitante(form);
		desabilitarCamposAtividade18(form);
		desabilitarCamposAtividade20(form);
		desabilitarCamposAtividade24(form);
		desabilitarCamposAtividade77(form);
	}
	
	else if(atv_atual == 43){
		desabilitarCamposAtividade55(form)
		desabilitarCamposAtividade22(form);
		desabilitarSolicitante(form);
		desabilitarCamposAtividade18(form);
		desabilitarCamposAtividade20(form);
		desabilitarCamposAtividade28(form);
		desabilitarCamposAtividade24(form);
		desabilitarCamposAtividade77(form);
	}
	else if(atv_atual == 77){
		desabilitarCamposAtividade55(form);
		desabilitarCamposAtividade22(form);
		desabilitarSolicitante(form);
		desabilitarCamposAtividade18(form);
		desabilitarCamposAtividade20(form);
		desabilitarCamposAtividade24(form);
		
	}
	else if(atv_atual == 81){
		desabilitarCamposAtividade55(form);
		desabilitarCamposAtividade22(form);
		desabilitarSolicitante(form);
		desabilitarCamposAtividade18(form);
		desabilitarCamposAtividade20(form);
		desabilitarCamposAtividade24(form);
		
	}

}

function desabilitarSolicitante(form){
	form.setEnabled("solicitante", false);
	form.setEnabled("data_solicitacao", false);
	form.setEnabled("origemm", false);
	form.setEnabled("motivo", false);
	form.setEnabled("empresa", false);
	form.setEnabled("nome_contato", false);
	form.setEnabled("email_telefone", false);
	form.setEnabled("parte_1", false);
	form.setEnabled("parte_2", false);
	form.setEnabled("parte_3", false);
	form.setEnabled("parte_4", false);
	form.setEnabled("parte_5", false);
	form.setEnabled("parte_12", false);
	form.setEnabled("parte_22", false);
	form.setEnabled("parte_32", false);
	form.setEnabled("parte_42", false);
	form.setEnabled("parte_52", false);
	form.setEnabled("frete", false);
	
}

function desabilitarCamposAtividade55(form) {
	form.setEnabled("comercial_validacao", false);
	form.setEnabled("consideracoes_comerc", false);
}


function desabilitarCamposAtividade20(form) {
	form.setEnabled("solicitar_coleta", false);
	form.setEnabled("nf_devolucao", false);
}


function desabilitarCamposAtividade22(form) {
	form.setEnabled("datacalendario", false);
	form.setEnabled("resp", false);
	form.setEnabled("se_perecivel", false);
	
}

function desabilitarCamposAtividade18(form) {
	form.setEnabled("n_nf_devolucao", false);
	form.setEnabled("resp_faturamento", false);
	form.setEnabled("transferencia", false);
	
}

function desabilitarCamposAtividade24(form) {
	form.setEnabled("processo_reanalise", false);
	form.setEnabled("n_solicitacao", false);
	form.setEnabled("consideracoes", false);
	form.setEnabled("transferencia2", false);
	
}

function desabilitarCamposAtividade28(form) {
	form.setEnabled("consideracoes_faturamento", false);
	
	
}

function desabilitarCamposAtividade77(form) {
	form.setEnabled("movimentacao", false);
	
}


