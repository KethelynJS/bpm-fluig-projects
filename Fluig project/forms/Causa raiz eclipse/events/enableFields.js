function enableFields(form){
	var atv_atual = getValue("WKNumState");
	
	log.info("enableFields - atv_atual: " + atv_atual);
	
	if(atv_atual == 4) {
		desabilitarSolicitante11(form)
	}
	
	
	else if(atv_atual == 5){
		desabilitarSolicitante(form);
	}
	
	else if(atv_atual == 9){
		desabilitarSolicitante5(form);
	}
	
	else if(atv_atual == 11){
		desabilitarSolicitante9(form);
	}
	
 
	
}
	
function desabilitarSolicitante(form){
	form.setEnabled("prioridade", false);
	form.setEnabled("outros1", false);
	form.setEnabled("setores", false);
	form.setEnabled("consideracoes", false);
	form.setEnabled("custo", false);
	form.setEnabled("processo1", false);
	form.setEnabled("observacgq", false);
	form.setEnabled("composicao_text", false);
	
	
}

function desabilitarSolicitante5(form){
	form.setEnabled("prioridade", false);
	form.setEnabled("outros1", false);
	form.setEnabled("setores", false);
	form.setEnabled("consideracoes", false);
	form.setEnabled("custo", false);
	form.setEnabled("documental", false);
	form.setEnabled("brainstorm", false);
	form.setEnabled("meioambiente", false);
	form.setEnabled("maquina", false);
	form.setEnabled("metodo", false);
	form.setEnabled("material", false);
	form.setEnabled("maodeobra", false);
	form.setEnabled("composicao_text", false);
	
}

function desabilitarSolicitante9(form){
	form.setEnabled("prioridade", false);
	form.setEnabled("outros1", false);
	form.setEnabled("setores", false);
	form.setEnabled("consideracoes", false);
	form.setEnabled("custo", false);
	form.setEnabled("documental", false);
	form.setEnabled("brainstorm", false);
	form.setEnabled("meioambiente", false);
	form.setEnabled("maquina", false);
	form.setEnabled("metodo", false);
	form.setEnabled("material", false);
	form.setEnabled("maodeobra", false);
	form.setEnabled("processo", false);
	form.setEnabled("composicao_text", false);
	
}

