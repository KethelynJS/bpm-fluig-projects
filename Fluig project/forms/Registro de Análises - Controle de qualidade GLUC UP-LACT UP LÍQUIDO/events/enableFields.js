function enableFields(form){
	var atv_atual = getValue("WKNumState");
	
	log.info("enableFields - atv_atual: " + atv_atual);
	
	if(atv_atual == 4) {
		desabilitarSolicitante4(form);
	}
	
	
	else if(atv_atual == 7){
		desabilitarSolicitante(form);
	}
	else if (atv_atual == 9) {
		desabilitarSolicitante(form);
        desabilitarCamposAtividade5(form);
 
	
}
	
function desabilitarSolicitante4(form){
		form.setEnabled("aspecto", false);
		
		
}


function desabilitarSolicitante(form){
	form.setEnabled("opcao7", false);
	form.setEnabled("lote", false);
	form.setEnabled("motivoAnalise", false);
	form.setEnabled("aspecto", false);
	form.setEnabled("Resp", false);
	form.setEnabled("dosagem", false);
	form.setEnabled("valor1", false);
	
}

function desabilitarCamposAtividade5(form) {
	form.setEnabled("datainicio2", false);
	form.setEnabled("Resp4", false);
	
}
}