function enableFields(form){
	var atv_atual = getValue("WKNumState");
	
	log.info("enableFields - atv_atual: " + atv_atual);
	
	if(atv_atual == 4) {
		desabilitarSolicitante9(form)
	}
	
	
	else if(atv_atual == 9){
		desabilitarSolicitante(form);
		
		
	}
	
	else if(atv_atual == 14){
		desabilitarSolicitante(form);
		desabilitarSolicitante9(form);
	}
	
	else if(atv_atual == 18){
		desabilitarSolicitante(form);
		desabilitarSolicitante9(form);
		desabilitarSolicitante14(form);
	}
	
	else if(atv_atual == 26){
		desabilitarSolicitante(form);
		desabilitarSolicitante9(form);
		desabilitarSolicitante14(form);
		desabilitarSolicitante18(form);
	}
	
	
}
	
function desabilitarSolicitante(form){
	form.setEnabled("colaborador", false);
	form.setEnabled("setor", false);
	form.setEnabled("data_solicitacao", false);
	form.setEnabled("dias_solicitados", false);
	form.setEnabled("data_inicio", false);
	form.setEnabled("data_final", false);
	form.setEnabled("abono_pecuario", false);
	
}

function desabilitarSolicitante9(form){
	form.setEnabled("aprovacao", false);
	form.setEnabled("observacao", false);
	
}

function desabilitarSolicitante14(form){
	form.setEnabled("contabilidade", false);
	
	
}

function desabilitarSolicitante18(form){
	form.setEnabled("pagamento_ferias_dia", false);
	form.setEnabled("substituicao", false);
	form.setEnabled("nome_sair", false);
	form.setEnabled("nome_substituir", false);
	
	
	
}

function desabilitarSolicitante26(form){
	form.setEnabled("informativo_ti", false);
	form.setEnabled("consideracoes_nao_conforme", false);
}

