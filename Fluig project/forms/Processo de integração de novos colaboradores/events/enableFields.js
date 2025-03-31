function enableFields(form){
	var atv_atual = getValue("WKNumState");
	
	log.info("enableFields - atv_atual: " + atv_atual);
	
	if(atv_atual == 4) {
	}
	
	
	else if(atv_atual == 11){
		desabilitarSolicitante(form);
		desabilitarSolicitante27(form)
	}
	
	else if(atv_atual == 13){
		desabilitarSolicitante11(form);
		desabilitarSolicitante(form);
		desabilitarSolicitante27(form)
	}
	
	else if(atv_atual == 16){
		desabilitarSolicitante11(form);
		desabilitarSolicitante(form);
		desabilitarSolicitante13(form);
		desabilitarSolicitante27(form)
	}
	
	else if(atv_atual == 18){
		desabilitarSolicitante11(form);
		desabilitarSolicitante(form);
		desabilitarSolicitante13(form);
		desabilitarSolicitante16(form);
		desabilitarSolicitante27(form)
	}
	else if(atv_atual == 26){
		desabilitarSolicitante(form);
		
	}
	
 
	
}
	
function desabilitarSolicitante(form){
	form.setEnabled("novo_colaborador", false);
	form.setEnabled("setor_atuante", false);
	form.setEnabled("funcao", false);
	form.setEnabled("data_prevista", false);
	form.setEnabled("acionar_ti", false);
	form.setEnabled("n_matricula", false);
	form.setEnabled("hor_trabalho", false);
	form.setEnabled("opcao", false);
	form.setEnabled("data_nascimento", false);
	form.setEnabled("email_pessoal", false);
	form.setEnabled("celular", false);
	form.setEnabled("estado_civil", false);
	form.setEnabled("plano_saude", false);
	form.setEnabled("alergia", false);
	form.setEnabled("contato_emergencia", false);
	form.setEnabled("filhos", false);
	
	
	
}

function desabilitarSolicitante11(form){
	form.setEnabled("acessos_solicitados", false);
	form.setEnabled("observacao_ti", false);
	
}


function desabilitarSolicitante27(form){
	form.setEnabled("sap", false);
	form.setEnabled("fluig", false);
	form.setEnabled("email", false);
	form.setEnabled("spark", false);
	form.setEnabled("site", false);
	form.setEnabled("redessociais", false);
	form.setEnabled("powerbi", false);
	form.setEnabled("whatsapp", false);
	form.setEnabled("notebook", false);
	form.setEnabled("impressora", false);
	form.setEnabled("celularr", false);
	form.setEnabled("checkbox", false);
	
}

function desabilitarSolicitante13(form){
	form.setEnabled("pergunta1", false);
	form.setEnabled("pergunta2", false);
	form.setEnabled("pergunta3", false);
	form.setEnabled("pergunta4", false);
	form.setEnabled("pergunta5", false);
	form.setEnabled("pergunta6", false);
	form.setEnabled("observacao_gestao", false);
}

function desabilitarSolicitante16(form){
	form.setEnabled("questao1", false);
	form.setEnabled("questao2", false);
	form.setEnabled("questao3", false);
	form.setEnabled("questao4", false);
	form.setEnabled("questao5", false);
	form.setEnabled("questao6", false);
	form.setEnabled("questao7", false);
	
}

function desabilitarSolicitante18(form){
	form.setEnabled("questaoA1", false);
	form.setEnabled("questaoA2", false);
	form.setEnabled("questaoA4", false);
	
	
}