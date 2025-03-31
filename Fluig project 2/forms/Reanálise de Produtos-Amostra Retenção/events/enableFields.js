function enableFields(form){
	var atv_atual = getValue("WKNumState");
	
	log.info("enableFields - atv_atual: " + atv_atual);
	
	if(atv_atual == 4) {
		
	}
	
	else if(atv_atual == 5){
		desabilitarSolicitante(form);
		
	}
	
	else if(atv_atual == 9){
		desabilitarSolicitante(form);
		desabilitarSolicitante5(form);
	}
	
	
}


function desabilitarSolicitante(form){
	form.setEnabled("datacalendario", false);
	form.setEnabled("tipo_amostra", false);
	form.setEnabled("codigo_nome", false);
	form.setEnabled("lote", false);
	form.setEnabled("data_fabricacao", false);
	form.setEnabled("data_validade", false);
	form.setEnabled("motivo_solicitacao", false);
	
	
	
}

function desabilitarSolicitante5(form){
	form.setEnabled("aspecto", false);
	form.setEnabled("dosagem", false);
	form.setEnabled("esterilidade", false);
	form.setEnabled("desempenho", false);
	form.setEnabled("outros_it", false);
	form.setEnabled("descricao_outros_acao2", false);
	form.setEnabled("contaminante", false);
	form.setEnabled("data_hora", false);
	form.setEnabled("etapas", false);
	form.setEnabled("resultados", false);
	form.setEnabled("observacao", false);
	form.setEnabled("acoes_imediatas", false);
	form.setEnabled("resp", false);
	form.setEnabled("data_conclusao", false);
	form.setEnabled("descricao_outros_acao3", false);
	
	
}







