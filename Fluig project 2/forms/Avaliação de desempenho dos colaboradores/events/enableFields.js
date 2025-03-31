function enableFields(form){
	var atv_atual = getValue("WKNumState");
	
	log.info("enableFields - atv_atual: " + atv_atual);
	
	if(atv_atual == 4) {
		
	}
	
	else if(atv_atual == 5){
		desabilitarSolicitante(form);
		desabilitarSolicitante5(form);
		
		
	}
	
	else if(atv_atual == 11){
		desabilitarSolicitante(form);
		
		
		
	}
	
}

function desabilitarSolicitante(form){
	form.setEnabled("nome", false);
	form.setEnabled("cargo", false);
	form.setEnabled("setor", false);
	form.setEnabled("datacalendario", false);
	form.setEnabled("periodo_avaliado", false);
	form.setEnabled("itempreenchimento", false);
	form.setEnabled("nome_avaliador", false);
	form.setEnabled("cargo_avaliador", false);
	form.setEnabled("setor_avaliador", false);
	form.setEnabled("assiduidade", false);
	form.setEnabled("consideracoes", false);
	form.setEnabled("pontualidade", false);
	form.setEnabled("consideracoes_pontualidade", false);
	form.setEnabled("desvio_comport", false);
	form.setEnabled("consideracoes_desvio", false);
	
	
	
	
}


function desabilitarSolicitante5(form){
	
	form.setEnabled("queixa_conduta", false);
	form.setEnabled("consideracoes_queixa", false);
	form.setEnabled("horas_extra", false);
	form.setEnabled("consideracoes_horas_extra", false);
	form.setEnabled("conheciment_tecnico", false);
	form.setEnabled("consideracoes_conhectec", false);
	form.setEnabled("consideracoes_valores", false);
	form.setEnabled("valores_empresa", false);
	form.setEnabled("consideracoes_metas", false);
	form.setEnabled("metas_setor", false);
	form.setEnabled("consideracoes_conhecimento", false);
	form.setEnabled("normas_procedimentosx", false);
	form.setEnabled("consideracoes_inovacao", false);
	form.setEnabled("inovacaoxx", false);
	form.setEnabled("consideracoes_etica", false);
	form.setEnabled("etica", false);
	form.setEnabled("consideracoes_opiniao_difer", false);
	form.setEnabled("opiniao_diferente", false);
	form.setEnabled("consideracoes_normas_proced", false);
	form.setEnabled("normas_procedimentos", false);
	form.setEnabled("consideracoes_habilidade2", false);
	form.setEnabled("habilidade_treinamentos", false);
	form.setEnabled("consideracoes_habilidade", false);
	form.setEnabled("habilidade_lideranca", false);
	form.setEnabled("consideracoes_pount_assid", false);
	form.setEnabled("pount_assid_reuniao", false);
	form.setEnabled("consideracoes_interesse", false);
	form.setEnabled("interesse_objetivos", false);
	form.setEnabled("consideracoes_entregas", false);
	form.setEnabled("trinta_setenta", false);
	form.setEnabled("caracteristica", false);
	form.setEnabled("entregas", false);
	form.setEnabled("pontuacao_final", false);
	form.setEnabled("pontos_fortes", false);
	form.setEnabled("pontos_melhorar", false);
	
	
}









