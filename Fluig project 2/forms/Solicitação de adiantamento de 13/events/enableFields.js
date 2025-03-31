function enableFields(form){
	var atv_atual = getValue("WKNumState");
	
	log.info("enableFields - atv_atual: " + atv_atual);
	
	if(atv_atual == 4) {
		desabilitarSolicitante5(form)
	}
	
	
	else if(atv_atual == 5){
		desabilitarSolicitante(form);
	}
	
	else if(atv_atual == 11){
		desabilitarSolicitante(form);
		desabilitarSolicitante5(form);
	}
	
 
	
}
	
function desabilitarSolicitante(form){
	form.setEnabled("colaborador", false);
	form.setEnabled("funcao", false);
	form.setEnabled("setor", false);
	form.setEnabled("lider", false);
	form.setEnabled("datacalendario", false);
	
	
}

function desabilitarSolicitante5(form){
	form.setEnabled("admissao", false);
	form.setEnabled("valor_13", false);
	form.setEnabled("validar", false);
}

