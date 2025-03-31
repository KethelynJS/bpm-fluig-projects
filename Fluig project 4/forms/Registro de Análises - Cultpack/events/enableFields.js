function enableFields(form){
	var atv_atual = getValue("WKNumState");
	
	log.info("enableFields - atv_atual: " + atv_atual);
	
	if(atv_atual == 4) {
		desabilitarCamposAtividade5(form);
	}
	
	else if(atv_atual == 5){
		desabilitarSolicitante(form);
	}

}

function desabilitarSolicitante(form){
	form.setEnabled("opcao", false);
	form.setEnabled("dosagem", false);
	form.setEnabled("lote", false);
	form.setEnabled("data_inicio", false);
	form.setEnabled("aspecto", false);
	form.setEnabled("Resultado", false);
	form.setEnabled("responsavel", false);
	
	
	
}

function desabilitarCamposAtividade5(form) {
	form.setEnabled("aprovado_reprovado", false);
	form.setEnabled("consideracoes", false);
	form.setEnabled("Resp", false);
}





