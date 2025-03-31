function enableFields(form){
	var atv_atual = getValue("WKNumState");
	
	log.info("enableFields - atv_atual: " + atv_atual);
	
	if(atv_atual == 4) {
		
	}
	
	else if(atv_atual == 5){
		desabilitarSolicitante4(form);
	}
	
	else if(atv_atual == 40){ 
		desabilitarSolicitante4(form);
		desabilitarCamposAtividade5(form);
	}
	
	else if(atv_atual == 12){ 
		desabilitarSolicitante4(form);
		desabilitarCamposAtividade5(form);
		
	}
	
	else if(atv_atual == 102){ 
		desabilitarSolicitante4(form);
		desabilitarCamposAtividade5(form);
		desabilitarCamposAtividade40(form);
	}
	
	else if(atv_atual == 16){ 
		desabilitarSolicitante4(form);
		desabilitarCamposAtividade5(form);
		
	}
	
	else if(atv_atual == 18){ 
		desabilitarSolicitante4(form);
		desabilitarCamposAtividade5(form);
		
	}
	
	else if(atv_atual == 10){ 
		desabilitarSolicitante4(form);
		desabilitarCamposAtividade5(form);
		desabilitarCamposAtividade40(form);
	}
	
	else if(atv_atual == 21){ 
		desabilitarSolicitante4(form);
		desabilitarCamposAtividade5(form);
		desabilitarCamposAtividade40(form);
		desabilitarCamposAtividade12(form);
		desabilitarCamposAtividadeR(form);
		
	}
	
	else if(atv_atual == 111){ 
		desabilitarSolicitante4(form);
		desabilitarCamposAtividade5(form);
		desabilitarCamposAtividade40(form);
		desabilitarCamposAtividade14(form);
		desabilitarCamposAtividadeR(form);
		
	}
	
	else if(atv_atual == 25){ 
		desabilitarSolicitante4(form);
		desabilitarCamposAtividade5(form);
		desabilitarCamposAtividade40(form);
		desabilitarCamposAtividade16(form);
		desabilitarCamposAtividadeR(form);
		
	}
	
	else if(atv_atual == 27){ 
		desabilitarSolicitante4(form);
		desabilitarCamposAtividade5(form);
		desabilitarCamposAtividade40(form);
		desabilitarCamposAtividade18(form);
		desabilitarCamposAtividadeR(form);
		
	}
	
	else if(atv_atual == 29){ 
		desabilitarSolicitante4(form);
		desabilitarCamposAtividade5(form);
		desabilitarCamposAtividade40(form);
		desabilitarCamposAtividade10(form);
		desabilitarCamposAtividadeR(form);
		
	}
	
	else if(atv_atual == 48){ 
		desabilitarSolicitante4(form);
		desabilitarCamposAtividade5(form);
		desabilitarCamposAtividade40(form);
		desabilitarCamposAtividade12(form);
		
		
	}
	
	else if(atv_atual == 106){ 
		desabilitarSolicitante4(form);
		desabilitarCamposAtividade5(form);
		desabilitarCamposAtividade40(form);
		desabilitarCamposAtividade14(form);
		
		
		
		
	}
	
	else if(atv_atual == 60){ 
		desabilitarSolicitante4(form);
		desabilitarCamposAtividade5(form);
		desabilitarCamposAtividade40(form);
		desabilitarCamposAtividade16(form);
		
		
	}
	
	else if(atv_atual == 54){ 
		desabilitarSolicitante4(form);
		desabilitarCamposAtividade5(form);
		desabilitarCamposAtividade40(form);
		desabilitarCamposAtividade18(form);
		
		
	}
	
	else if(atv_atual ==72){ 
		desabilitarSolicitante4(form);
		desabilitarCamposAtividade5(form);
		desabilitarCamposAtividade40(form);
		desabilitarCamposAtividade10(form);
		
		
	}
	
	else if(atv_atual == 79){ 
		desabilitarSolicitante4(form);
		desabilitarCamposAtividade5(form);
		desabilitarCamposAtividade40(form);
		desabilitarCamposAtividade12(form);
		
		
	}
	
	else if(atv_atual == 108){ 
		desabilitarSolicitante4(form);
		desabilitarCamposAtividade5(form);
		desabilitarCamposAtividade40(form);
		desabilitarCamposAtividade14(form);
		
		
	}
	
	else if(atv_atual == 81){ 
		desabilitarSolicitante4(form);
		desabilitarCamposAtividade5(form);
		desabilitarCamposAtividade40(form);
		desabilitarCamposAtividade16(form);
		
		
	}
	
	else if(atv_atual == 80){ 
		desabilitarSolicitante4(form);
		desabilitarCamposAtividade5(form);
		desabilitarCamposAtividade40(form);
		desabilitarCamposAtividade18(form);
		
		
	}
	
	else if(atv_atual == 83){ 
		desabilitarSolicitante4(form);
		desabilitarCamposAtividade5(form);
		desabilitarCamposAtividade40(form);
		desabilitarCamposAtividade10(form);
		
		
	}
	
	

}

function desabilitarSolicitante4(form){
	form.setEnabled("datacalendario", false);
	form.setEnabled("procedencia", false);
	form.setEnabled("tipo_amostra", false);
	form.setEnabled("tipo_amostra1", false);
	form.setEnabled("motivo_solicitacao", false);
	form.setEnabled("registro_desvio", false);
	
	
	
}

function desabilitarCamposAtividade5(form) {
	form.setEnabled("verificacao", false);
	
}

function desabilitarCamposAtividade40(form) {
	form.setEnabled("opcao_desempenho", false);
	form.setEnabled("lote4", false);
	form.setEnabled("aspecto", false);
	
}

function desabilitarCamposAtividade12(form) {
	form.setEnabled("data_inicio_aspecto", false);
	form.setEnabled("analise_complementar", false);
	form.setEnabled("acoes_imediatas", false);
	form.setEnabled("data_conclusao", false);
	form.setEnabled("Resp4", false);
	form.setEnabled("aprovado_aspecto", false);
	
	
}

function desabilitarCamposAtividade16(form) {
	form.setEnabled("bacterianaa", false);
	form.setEnabled("estufa", false);
	form.setEnabled("inicio_analise", false);
	form.setEnabled("final_analise", false);
	form.setEnabled("resultado_analise", false);
	form.setEnabled("crescimento_microrganismo", false);
	form.setEnabled("estufaa", false);
	form.setEnabled("inicio_analise2", false);
	form.setEnabled("final_analise2", false);
	form.setEnabled("resultado_analise2", false);
	form.setEnabled("crescimento_microrganismo2", false);
	form.setEnabled("analise_complementar_esteril", false);
	form.setEnabled("acoes_imediatas_esterili", false);
	form.setEnabled("resultado_esterilidade", false);
	form.setEnabled("data_esterilidade", false);
	form.setEnabled("Resp3", false);
	
	
}

function desabilitarCamposAtividade18(form) {
	form.setEnabled("inicio_analise4", false);
	form.setEnabled("final_analise4", false);
	form.setEnabled("Resp_desempenho", false);
	form.setEnabled("infoText1", false);
	form.setEnabled("acoes_imediatas_desemp", false);
	form.setEnabled("prioridade", false);
	form.setEnabled("aprovado", false);
	form.setEnabled("datadesempenho", false);
	form.setEnabled("Respp1", false);
	
	
}

function desabilitarCamposAtividade14(form) {
	form.setEnabled("opcao7", false);
	form.setEnabled("lote5", false);
	form.setEnabled("aspecto5", false);
	form.setEnabled("Resp", false);
	form.setEnabled("dosagem", false);
	form.setEnabled("lote_reagende", false);
	form.setEnabled("datacainicio2", false);
	form.setEnabled("datacafinall", false);
	form.setEnabled("Resp5", false);
	form.setEnabled("opcao", false);
	form.setEnabled("prioridade", false);
	form.setEnabled("aprovado", false);
	form.setEnabled("databioquimica", false);
	form.setEnabled("resp_bioquimica", false);
	form.setEnabled("aprovado_bioquimica", false);
	form.setEnabled("datacainicio2", false);
	
	
	
}

function desabilitarCamposAtividade10(form) {
	form.setEnabled("data_hora", false);
	form.setEnabled("etapas", false);
	form.setEnabled("resultados", false);
	form.setEnabled("observacao", false);
	form.setEnabled("acoes_imediatas_outros", false);
	form.setEnabled("aprovado_outros", false);
	
	
	
}

function desabilitarCamposAtividadeR(form) {
	form.setEnabled("consideracoes_1", false);
	form.setEnabled("consideracoes_2", false);
	form.setEnabled("consideracoes_3", false);
	form.setEnabled("consideracoes_4", false);
	form.setEnabled("n_processo_fluig", false);
	form.setEnabled("acoes_cq", false);
	
	
	
}







