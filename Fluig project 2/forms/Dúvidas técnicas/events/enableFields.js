function enableFields(form){
	var atv_atual = getValue("WKNumState");
	
	log.info("enableFields - atv_atual: " + atv_atual);
	
	if(atv_atual == 4) {
		
	}
	
	else if(atv_atual == 5){
		desabilitarSolicitante(form);
		desabilitarSolicitante6(form);
	}
	
	else if(atv_atual == 9){
		desabilitarSolicitante(form);
		desabilitarSolicitante5(form);
	}
	
	else if(atv_atual == 14){
		desabilitarSolicitante(form);
		desabilitarSolicitante6(form);
		desabilitarSolicitante5(form);
	}
	
	else if(atv_atual == 24){
		desabilitarSolicitante(form);
		desabilitarSolicitante6(form);
		desabilitarSolicitante5(form);
	}
	
	else if(atv_atual == 22){
		desabilitarSolicitante(form);
		desabilitarSolicitante6(form);
		desabilitarSolicitante5(form);
	}
	
	
}


function desabilitarSolicitante(form){
	form.setEnabled("datacalendario", false);
	form.setEnabled("nome_contato", false);
	form.setEnabled("empresa", false);
	form.setEnabled("cliente", false);
	form.setEnabled("porque", false);
	form.setEnabled("descricao_duvida", false);
	form.setEnabled("produto", false);
	form.setEnabled("tipo_processo", false);
	form.setEnabled("prioridade", false);
	
	
}

function desabilitarSolicitante5(form){
	form.setEnabled("resposta", false);
	form.setEnabled("comentario", false);
	form.setEnabled("qual_1", false);
	form.setEnabled("porque_1", false);
	form.setEnabled("quem_1", false);
	form.setEnabled("qual_2", false);
	form.setEnabled("porque_2", false);
	form.setEnabled("quem_2", false);
	form.setEnabled("qual_3", false);
	form.setEnabled("porque_3", false);
	form.setEnabled("quem_3", false);
	
	
	
	
}

function desabilitarSolicitante6(form){
	
	
	
	
	
}





