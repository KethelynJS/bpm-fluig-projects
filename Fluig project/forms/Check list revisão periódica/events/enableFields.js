function enableFields(form){
	var atv_atual = getValue("WKNumState");
	
	log.info("enableFields - atv_atual: " + atv_atual);
	
	if(atv_atual == 4) {
		desabilitarSolicitante5(form)
	}
	
	
	else if(atv_atual == 5){
		desabilitarSolicitante(form);
	}
	
 
	
}
	
function desabilitarSolicitante(form){
	form.setEnabled("caixa1_1", false);
	form.setEnabled("caixa1_2", false);
	form.setEnabled("caixa2_1", false);
	form.setEnabled("caixa2_2", false);
	form.setEnabled("caixa3_1", false);
	form.setEnabled("caixa3_2", false);
	form.setEnabled("caixa4_1", false);
	form.setEnabled("caixa4_2", false);
	form.setEnabled("caixa5_1", false);
	form.setEnabled("caixa5_2", false);
	form.setEnabled("caixa6_1", false);
	form.setEnabled("caixa6_2", false);
	form.setEnabled("caixa7_1", false);
	form.setEnabled("caixa7_2", false);
	form.setEnabled("revalidacao", false);
	form.setEnabled("consideracoes", false);
	form.setEnabled("responsavel", false);
	form.setEnabled("datacalendario", false);
	form.setEnabled("processovalidado", false);
	
}

function desabilitarSolicitante5(form){
	form.setEnabled("prioridade", false);
	form.setEnabled("observacao", false);
	form.setEnabled("datacalendario2", false);
}

