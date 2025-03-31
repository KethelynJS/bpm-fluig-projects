function enableFields(form){
	var atv_atual = getValue("WKNumState");
	
	log.info("enableFields - atv_atual: " + atv_atual);
	
	if(atv_atual == 4) {
		
	}
	
	
	else if(atv_atual == 5){
		 desabilitarSolicitante4(form)
		
	}
	else if (atv_atual == 7) {
		desabilitarSolicitante5(form);
		 desabilitarSolicitante4(form)
	}
    else if (atv_atual == 9) {
    	desabilitarCamposAtividade7(form); 
    	desabilitarSolicitante5(form);
    	 desabilitarSolicitante4(form)
    }
	
	

	function desabilitarSolicitante4(form){
		form.setEnabled("data_solici", false);
		form.setEnabled("respons_solic", false);
		form.setEnabled("desc_equipa", false);
		form.setEnabled("consideracoes_finalidade", false);
		form.setEnabled("produto_manipulado", false);
		form.setEnabled("espaco_dispo", false);
		form.setEnabled("material", false);
		form.setEnabled("precisao", false);
		form.setEnabled("calibracao", false);
		form.setEnabled("qualificacao", false);
		form.setEnabled("certificado", false);
		form.setEnabled("purificado", false);
		form.setEnabled("utilizacao", false);
		form.setEnabled("consideracoes_fabricacao", false);
		
		
	}	

function desabilitarSolicitante5(form){
	form.setEnabled("fornecedor_1", false);
	form.setEnabled("fornecedor_2", false);
	form.setEnabled("fornecedor_3", false);
	form.setEnabled("valor_cotacao_1", false);
	form.setEnabled("valor_cotacao_2", false);
	form.setEnabled("valor_cotacao_3", false);
	form.setEnabled("prazo_entrega", false);
	form.setEnabled("condicoes_pagamento", false);
	form.setEnabled("observac_orcamento", false);
	form.setEnabled("detalhamento_tecnico", false);
	form.setEnabled("inf_instal", false);
	form.setEnabled("comentario", false);
	
	
	
}

function desabilitarCamposAtividade7(form) {
	form.setEnabled("autorizada", false);
	form.setEnabled("pedido_sap", false);
	form.setEnabled("data_recebimento", false);
	
	
}

function desabilitarCamposAtividade9(form) {
	form.setEnabled("instalado_corretamente", false);
	form.setEnabled("equipamento_cadastrado", false);
	form.setEnabled("calibracao_2", false);
	form.setEnabled("qualificacao_2", false);
	form.setEnabled("certificacao", false);
	form.setEnabled("manual_equipamento", false);
	form.setEnabled("modelo", false);
	form.setEnabled("treinados", false);
	form.setEnabled("liberacao_equipamento", false);
	form.setEnabled("respons", false);
	
	
}
}