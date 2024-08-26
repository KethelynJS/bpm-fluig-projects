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
	form.setEnabled("radio_row1", false);
	form.setEnabled("text_row1", false);
	form.setEnabled("radio_row2", false);
	form.setEnabled("text_row2", false);
	form.setEnabled("radio_row3", false);
	form.setEnabled("text_row3", false);
	form.setEnabled("radio_row4", false);
	form.setEnabled("text_row4", false);
	form.setEnabled("radio_row5", false);
	form.setEnabled("text_row5", false);
	form.setEnabled("radio_row6", false);
	form.setEnabled("text_row6", false);
	form.setEnabled("radio_row7", false);
	form.setEnabled("text_row7", false);
	form.setEnabled("radio_row8", false);
	form.setEnabled("text_row8", false);
	form.setEnabled("radio_row9", false);
	form.setEnabled("text_row9", false);
	form.setEnabled("radio_row10", false);
	form.setEnabled("text_row10", false);
	form.setEnabled("radio_row11", false);
	form.setEnabled("text_row11", false);
	form.setEnabled("radio_row12", false);
	form.setEnabled("text_row12", false);
	form.setEnabled("radio_row13", false);
	form.setEnabled("text_row13", false);
	form.setEnabled("radio_row14", false);
	form.setEnabled("text_row14", false);
	form.setEnabled("validacao", false);
	form.setEnabled("responsavel", false);
	form.setEnabled("prioridade", false);
	form.setEnabled("datacalendario", false);
	form.setEnabled("datacalendario3", false);
	form.setEnabled("processovalidado", false);
	
}

function desabilitarSolicitante5(form){
	form.setEnabled("validacao1", false);
	form.setEnabled("observacao", false);
	form.setEnabled("datacalendario2", false);
}