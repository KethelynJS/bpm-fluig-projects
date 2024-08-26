function enableFields(form) {
    var atv_atual = getValue("WKNumState");
    
    log.info("enableFields - atv_atual: " + atv_atual);
    
    // Garantir que a função validacaoanexo é chamada na atividade 4
    if (atv_atual == 4) {
        log.info("Chamada para validacaoanexo na atividade 4");
        validacaoanexo(form);
    } else if (atv_atual == 4) {
    	compras62(form);
    } else if (atv_atual == 5) {
        compras4(form);
    
    } else if (atv_atual == 15) {
        compras4(form);
        almox4(form);
    } else if (atv_atual == 62) {
        compras4(form);
        almox4(form);
    } else if (atv_atual == 19) {
        compras4(form);
        almox4(form);
        cqfq1(form);
    } else if (atv_atual == 21) {
        compras4(form);
        almox4(form);
        cqfq1(form);
        cqm1(form);
    } else if (atv_atual == 25) {
        compras4(form);
        almox4(form);
        cqfq1(form);
        cqm1(form);
    } else if (atv_atual == 30) {
        compras4(form);
        almox4(form);
        cqfq1(form);
        cqm1(form);
        lotepiloto(form);
    } else if (atv_atual == 51) {
        compras4(form);
        almox4(form);
        cqfq1(form);
        cqm1(form);
        lotepiloto(form);
    } else if (atv_atual == 33) {
        compras4(form);
        almox4(form);
        cqfq1(form);
        cqm1(form);
        lotepiloto(form);
        pcp(form);
    } else if (atv_atual == 53) {
        compras4(form);
        almox4(form);
        cqfq1(form);
        cqm1(form);
        lotepiloto(form);
        pcp(form);
    } else if (atv_atual == 36) {
        compras4(form);
        almox4(form);
        cqfq1(form);
        cqm1(form);
        lotepiloto(form);
        pcp(form);
        producao(form);
    } else if (atv_atual == 55) {
        compras4(form);
        almox4(form);
        cqfq1(form);
        cqm1(form);
        lotepiloto(form);
        pcp(form);
        producao(form);
    } else if (atv_atual == 45) {
        compras4(form);
        almox4(form);
        cqfq1(form);
        cqm1(form);
        lotepiloto(form);
        pcp(form);
        producao(form);
        cqfq2(form);
        cqm2(form);
    } else if (atv_atual == 40) {
        compras4(form);
        almox4(form);
        cqfq1(form);
        cqm1(form);
        lotepiloto(form);
        pcp(form);
        producao(form);
        cqfq2(form);
    } else if (atv_atual == 42) {
        compras4(form);
        almox4(form);
        cqfq1(form);
        cqm1(form);
        lotepiloto(form);
        pcp(form);
        producao(form);
        cqfq2(form);
        cqm2(form);
    } else if (atv_atual == 58) {
        compras4(form);
        almox4(form);
        cqfq1(form);
        cqm1(form);
        lotepiloto(form);
        pcp(form);
        producao(form);
        cqfq2(form);
        cqm2(form);
    }
}

function validacaoanexo(form) {
    log.info("Desabilitando campos na atividade 4");
    
    if (form) {
        try {
            form.setEnabled("validacao_anexo", false);
            form.setEnabled("observacao_validacao", false);
        } catch (error) {
            log.error("Erro ao desabilitar campos: " + error);
        }
    } else {
        log.error("Formulário não encontrado.");
    }
}

// Outras funções permanecem inalteradas

function compras62(form){
	form.setEnabled("validacao_anexo", false);
    form.setEnabled("observacao_validacao", false);
}
	
function compras4(form){
	form.setEnabled("datacalendario", false);
	form.setEnabled("motivoQualificacao", false);
	form.setEnabled("caixa1_1", false);
	form.setEnabled("caixa1_2", false);
	form.setEnabled("caixa1_3", false);
	form.setEnabled("caixa1_4", false);
	form.setEnabled("caixa2_1", false);
	form.setEnabled("caixa2_2", false);
	form.setEnabled("caixa2_3", false);
	form.setEnabled("caixa2_4", false);
	form.setEnabled("caixa3_1", false);
	form.setEnabled("caixa3_2", false);
	form.setEnabled("caixa3_3", false);
	form.setEnabled("caixa3_4", false);
	form.setEnabled("caixa4_1", false);
	form.setEnabled("caixa4_2", false);
	form.setEnabled("caixa4_3", false);
	form.setEnabled("caixa4_4", false);
	form.setEnabled("caixa5_1", false);
	form.setEnabled("caixa5_2", false);
	form.setEnabled("caixa5_3", false);
	form.setEnabled("caixa5_4", false);
	form.setEnabled("componente", false);
	form.setEnabled("anexo1", false);
	form.setEnabled("caixa1_5", false);
	form.setEnabled("caixa2_5", false);
	form.setEnabled("caixa3_5", false);
	form.setEnabled("caixa4_5", false);
	form.setEnabled("caixa5_5", false);
	
	
}

function almox4(form){
	form.setEnabled("datacalendario2", false);
	form.setEnabled("notificarCQFQ", false);
	
}
function validacaoanexo(form) {
    log.info("Desabilitando campos na atividade 4");
    
    if (form) {
        try {
            form.setEnabled("validacao_anexo", false);
            form.setEnabled("observacao_validacao", false);
        } catch (error) {
            log.error("Erro ao desabilitar campos: " + error);
        }
    } else {
        log.error("Formulário não encontrado.");
    }
}

function cqfq1(form){
	form.setEnabled("datacalendario3", false);
	form.setEnabled("temperatura", false);
	form.setEnabled("temperaturaOutras", false);
	form.setEnabled("fotossensivel", false);
	form.setEnabled("concentracao", false);
	form.setEnabled("composicao", false);
	form.setEnabled("analise_1", false);
	form.setEnabled("especificacao_1", false);
	form.setEnabled("result_1", false);
	form.setEnabled("analista_1", false);
	form.setEnabled("analise_2", false);
	form.setEnabled("especificacao_2", false);
	form.setEnabled("result_2", false);
	form.setEnabled("analista_2", false);
	form.setEnabled("analise_3", false);
	form.setEnabled("especificacao_3", false);
	form.setEnabled("result_3", false);
	form.setEnabled("analista_3", false);
	form.setEnabled("analise_4", false);
	form.setEnabled("especificacao_4", false);
	form.setEnabled("result_4", false);
	form.setEnabled("analista_4", false);
	form.setEnabled("analise_5", false);
	form.setEnabled("especificacao_5", false);
	form.setEnabled("result_5", false);
	form.setEnabled("analista_5", false);
	form.setEnabled("lotebancada", false);
	form.setEnabled("anexo", false);
	form.setEnabled("analiseMicro", false);
	form.setEnabled("dataConclusao", false);
	form.setEnabled("responsavelConclusao", false);
	form.setEnabled("lotePiloto", false);
	form.setEnabled("motivo", false);
	form.setEnabled("qualificacao", false);
	form.setEnabled("observacoesSAP", false);
	form.setEnabled("concentracao_text", false);
	form.setEnabled("composicao_text", false);
	form.setEnabled("lotebancadaa", false);
	form.setEnabled("microbiologica", false);
	form.setEnabled("hematologica", false);
	form.setEnabled("citologica", false);
	form.setEnabled("fisicoquimica", false);
	
}

function cqm1(form){
	form.setEnabled("analise2_1", false);
	form.setEnabled("especificacao2_1", false);
	form.setEnabled("result2_1", false);
	form.setEnabled("analista2_1", false);
	form.setEnabled("analise2_2", false);
	form.setEnabled("especificacao2_2", false);
	form.setEnabled("result2_2", false);
	form.setEnabled("analista2_2", false);
	form.setEnabled("analise2_3", false);
	form.setEnabled("especificacao2_3", false);
	form.setEnabled("result2_3", false);
	form.setEnabled("analista2_3", false);
	form.setEnabled("analise2_4", false);
	form.setEnabled("especificacao2_4", false);
	form.setEnabled("result2_4", false);
	form.setEnabled("analista2_4", false);
	form.setEnabled("analise2_5", false);
	form.setEnabled("especificacao2_5", false);
	form.setEnabled("result2_5", false);
	form.setEnabled("analista2_5", false);
	form.setEnabled("datacalendario4", false);
	form.setEnabled("resp2", false);
	form.setEnabled("responsavelConclusao", false);
	
}

function lotepiloto(form){
	form.setEnabled("lotePiloto2", false);
	form.setEnabled("motivo2", false);
	form.setEnabled("qualificacao2", false);
	form.setEnabled("observacoesSAP2", false);
	form.setEnabled("datacalendario2", false);
}

function pcp(form){
	form.setEnabled("datacalendario6", false);
	form.setEnabled("lotepcp", false);
}

function producao(form){
	form.setEnabled("datacalendario7", false);
	form.setEnabled("intercorrencia", false);
}

function cqfq2(form){
	form.setEnabled("analise3_1", false);
	form.setEnabled("especificacao3_1", false);
	form.setEnabled("result3_1", false);
	form.setEnabled("analista3_1", false);
	form.setEnabled("analise3_2", false);
	form.setEnabled("especificacao3_2", false);
	form.setEnabled("result3_2", false);
	form.setEnabled("analista3_2", false);
	form.setEnabled("analise3_3", false);
	form.setEnabled("especificacao3_3", false);
	form.setEnabled("result3_3", false);
	form.setEnabled("analista3_3", false);
	form.setEnabled("analise3_4", false);
	form.setEnabled("especificacao3_4", false);
	form.setEnabled("result3_4", false);
	form.setEnabled("analista3_4", false);
	form.setEnabled("dataConclusao1", false);
	form.setEnabled("responsavelConclusao1", false);
	form.setEnabled("analiseMicro1", false);
	form.setEnabled("qualificacao1", false);
	form.setEnabled("observacoesSAP1", false);
}

function cqm2(form){
	form.setEnabled("analise4_1", false);
	form.setEnabled("especificacao4_1", false);
	form.setEnabled("result4_1", false);
	form.setEnabled("analista4_1", false);
	form.setEnabled("analise4_2", false);
	form.setEnabled("especificacao4_2", false);
	form.setEnabled("result4_2", false);
	form.setEnabled("analista4_2", false);
	form.setEnabled("analise4_3", false);
	form.setEnabled("especificacao4_3", false);
	form.setEnabled("result4_3", false);
	form.setEnabled("analista4_3", false);
	form.setEnabled("analise4_4", false);
	form.setEnabled("especificacao4_4", false);
	form.setEnabled("result4_4", false);
	form.setEnabled("analista4_4", false);
	form.setEnabled("dataConclusao2", false);
	form.setEnabled("responsavelConclusao2", false);
	
}

function qualify(form){
	form.setEnabled("qualificacao3", false);
	form.setEnabled("observacoesSAP3", false);
	
}