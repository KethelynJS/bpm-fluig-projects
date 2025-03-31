function enableFields(form){
	var atv_atual = getValue("WKNumState");
	
	log.info("enableFields - atv_atual: " + atv_atual);
	
	if(atv_atual == 4) {
		desabilitarCamposAtividade5(form);
	}
	
	else if(atv_atual == 5){
		desabilitarSolicitante(form);
	}
	
	else if(atv_atual == 15){
		desabilitarSolicitante(form);
		desabilitarCamposAtividade5(form);
	}

}

function desabilitarSolicitante(form){
	form.setEnabled("solicitante", false);
	form.setEnabled("setor", false);
	form.setEnabled("autorizado", false);
	form.setEnabled("periodo", false);
	form.setEnabled("data_envio", false);
	form.setEnabled("reembolso", false);
	form.setEnabled("total_reembolso", false);
	form.setEnabled("data1", false);
	form.setEnabled("fornecedor1", false);
	form.setEnabled("nf1", false);
	form.setEnabled("categoria1", false);
	form.setEnabled("nf_1", false);
	form.setEnabled("data2", false);
	form.setEnabled("fornecedor2", false);
	form.setEnabled("nf2", false);
	form.setEnabled("categoria2", false);
	form.setEnabled("nf_2", false);
	form.setEnabled("data3", false);
	form.setEnabled("fornecedor3", false);
	form.setEnabled("nf3", false);
	form.setEnabled("categoria3", false);
	form.setEnabled("nf_3", false);
	form.setEnabled("data4", false);
	form.setEnabled("fornecedor4", false);
	form.setEnabled("nf4", false);
	form.setEnabled("categoria4", false);
	form.setEnabled("nf_6", false);
	form.setEnabled("data5", false);
	form.setEnabled("fornecedor5", false);
	form.setEnabled("nf5", false);
	form.setEnabled("categoria5", false);
	form.setEnabled("nf_4", false);
	
}

function desabilitarCamposAtividade5(form) {
	form.setEnabled("itempreenchimento", false);
	form.setEnabled("consideracoes", false);
	
}





