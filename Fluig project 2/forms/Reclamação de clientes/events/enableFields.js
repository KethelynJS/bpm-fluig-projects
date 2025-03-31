function enableFields(form){
	var atv_atual = getValue("WKNumState");
	
	log.info("enableFields - atv_atual: " + atv_atual);
	
	if(atv_atual == 4) {
		desabilitarSolicitante5(form)
		desabilitarSolicitante9(form)
	}
	
	
	else if(atv_atual == 5){
		desabilitarSolicitante(form);
		desabilitarSolicitante9(form);
		
	}
	
	else if(atv_atual == 7){
		desabilitarSolicitante(form);
		desabilitarSolicitante5(form);
	}
	
	else if(atv_atual == 9){
		desabilitarSolicitante(form);
		desabilitarSolicitante5(form);
		desabilitarSolicitante7(form);
	}
	
	
}
	
function desabilitarSolicitante(form){
	form.setEnabled("datacalendario", false);
	form.setEnabled("reclamante_setor", false);
	form.setEnabled("nome_empresa", false);
	form.setEnabled("cliente", false);
	form.setEnabled("endereco", false);
	form.setEnabled("Telefone", false);
	form.setEnabled("email", false);
	form.setEnabled("categoria", false);
	form.setEnabled("aspecto_alterado", false);
	form.setEnabled("categoria", false);
	form.setEnabled("contaminacao", false);
	form.setEnabled("avaria", false);
	form.setEnabled("desempenho_insatisfatorio", false);
	form.setEnabled("erro_digitacao", false);
	form.setEnabled("erro_separacao", false);
	form.setEnabled("nf_incorreta", false);
	form.setEnabled("reacao_adversa", false);
	form.setEnabled("produto_sem_rotulo_incorreto", false);
	form.setEnabled("outros", false);
	form.setEnabled("descricao_outros", false);
	form.setEnabled("n_nota", false);
	form.setEnabled("vendedor_representante", false);
	form.setEnabled("descricao_reclamacao", false);
	form.setEnabled("vazamento", false);
	form.setEnabled("validade_curta", false);
	form.setEnabled("atraso_entrega", false);
	
}

function desabilitarSolicitante5(form){
	form.setEnabled("question1", false);
	form.setEnabled("comment1", false);
	form.setEnabled("question2", false);
	form.setEnabled("comment2", false);
	form.setEnabled("question3", false);
	form.setEnabled("comment3", false);
	form.setEnabled("question4", false);
	form.setEnabled("comment4", false);
	form.setEnabled("question5", false);
	form.setEnabled("comment5", false);
	form.setEnabled("question6", false);
	form.setEnabled("comment6", false);
	form.setEnabled("question7", false);
	form.setEnabled("comment7", false);

}

function desabilitarSolicitante7(form){
	form.setEnabled("conclusao", false);
	form.setEnabled("observacao_conclusao", false);
	
	
}

function desabilitarSolicitante9(form){
	form.setEnabled("validacao_gq", false);
	form.setEnabled("consideracoes_nao_conforme", false);
}

