function validateForm(form) {
    var atv_atual = getValue('WKNumState');
    console.log("Atividade atual: " + atv_atual);

    if (atv_atual == 4) {
        console.log("Validando atividade 4");
        validateActivity4(form);
    } else if (atv_atual == 5) {
        console.log("Validando atividade 5");
        validateActivity5(form);
    } else {
        console.log("Atividade não especificada, permitindo envio");
        return true; // Permitir envio se a atividade não for especificada
    }
}

function validateActivity4(form) {
    var msg = "";

    if (form.getValue("nome") == "") {
        msg += "Campo nome não foi preenchido\n";
    }
    if (form.getValue("cargo") == "") {
        msg += "Campo cargo não foi preenchido\n";
    }
    if (form.getValue("setor") == "") {
        msg += "Campo setor não foi preenchido\n";
    }
    if (form.getValue("periodo_avaliado") == "") {
        msg += "Campo período não foi preenchido\n";
    }
    if (form.getValue("itempreenchimento") == "") {
        msg += "Campo itens da não foi preenchido\n";
    }
    if (form.getValue("nome_avaliador") == "") {
        msg += "Campo nome do avaliador não foi preenchido\n";
    }
    if (form.getValue("cargo_avaliador") == "") {
        msg += "Campo cargo do avaliador não foi preenchido\n";
    }
    
    if (form.getValue("setor_avaliador") == "") {
        msg += "Campo setor avaliador não foi preenchido\n";
    }
    
    if (form.getValue("assiduidade") == "") {
        msg += "Campo assiduidade não foi preenchido\n";
    }
    
    
    if (form.getValue("pontualidade") == "") {
        msg += "Campo pontualidade não foi preenchido\n";
    }
    
    
    if (form.getValue("desvio_comport") == "") {
        msg += "Campo desvio não foi preenchido\n";
    }
    
    
    
    if (msg !== "") {
        console.log("Erros na Atividade 4: " + msg);
        throw msg;
    }
}

function validateActivity5(form) {
    var msg = "";

    
    if (form.getValue("entregas") == "") {
        msg += "Campo entregas não foi preenchido\n";
    }
    if (form.getValue("interesse_objetivos") == "") {
        msg += "Campo interesse não foi preenchido\n";
    }
    
    if (form.getValue("pount_assid_reuniao") == "") {
        msg += "Campo pontuação não foi preenchido\n";
    }
    if (form.getValue("habilidade_lideranca") == "") {
        msg += "Campo liderança não foi preenchido\n";
    }
    if (form.getValue("habilidade_treinamentos") == "") {
        msg += "Campo treinamento não foi preenchido\n";
    }
    if (form.getValue("normas_procedimentos") == "") {
        msg += "Campo normas não foi preenchido\n";
    }
    if (form.getValue("opiniao_diferente") == "") {
        msg += "Campo opiniao diferente não foi preenchido\n";
    }
    if (form.getValue("etica") == "") {
        msg += "Campo etica não foi preenchido\n";
    }
    if (form.getValue("inovacao") == "") {
        msg += "Campo inovação não foi preenchido\n";
    }
    if (form.getValue("normas_procedimentos") == "") {
        msg += "Campo normas e procedimentos não foi preenchido\n";
    }
    if (form.getValue("metas_setor") == "") {
        msg += "Campo metas não foi preenchido\n";
    }
    if (form.getValue("valores_empresa") == "") {
        msg += "Campo valores da empresa não foi preenchido\n";
    }
    if (form.getValue("pontuacao_final") == "") {
        msg += "Campo pontuação final não foi preenchido\n";
    }
    
    
    
    if (msg !== "") {
        console.log("Erros na Atividade 5: " + msg);
        throw msg;
    }
}






