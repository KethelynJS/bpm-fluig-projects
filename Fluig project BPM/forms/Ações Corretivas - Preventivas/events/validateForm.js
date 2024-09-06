function validateForm(form) {
    var atv_atual = getValue('WKNumState');
    console.log("Atividade atual: " + atv_atual);

    if (atv_atual == 4) {
        console.log("Validando atividade 4");
        validateActivity4(form);
    } else if (atv_atual == 5) {
        console.log("Validando atividade 5");
        validateActivity5(form);
    } else if (atv_atual == 13) {
        console.log("Validando atividade 13");
        validateActivity13(form);
    } else if (atv_atual == 15) {
        console.log("Validando atividade 15");
        validateActivity15(form);
    } else {
        console.log("Atividade não especificada, permitindo envio");
        return true; // Permitir envio se a atividade não for especificada
    }
}

function validateActivity4(form) {
    var msg = "";

    if (form.getValue("identificacao_processo") == "") {
        msg += "Campo identificação do processo não foi preenchido\n";
    }
    if (form.getValue("processo_origem") == "") {
        msg += "Campo processo de origem não foi preenchido\n";
    }
    if (form.getValue("tipo") == "") {
        msg += "Campo tipo do desvio não foi preenchido\n";
    }
    if (form.getValue("resposta1") == "") {
        msg += "Campo data ocorrência não foi preenchido\n";
    }
    if (form.getValue("resposta2") == "") {
        msg += "Campo tipo conformidade não foi preenchido\n";
    }
    if (form.getValue("resposta3") == "") {
        msg += "Campo ação imediata não foi preenchido\n";
    }
    if (form.getValue("resposta4") == "") {
        msg += "Campo ação imediata não foi preenchido\n";
    }
    if (form.getValue("resposta5") == "") {
        msg += "Campo ação imediata não foi preenchido\n";
    }
    if (form.getValue("resposta6") == "") {
        msg += "Campo ação imediata não foi preenchido\n";
    }
    if (form.getValue("resposta7") == "") {
        msg += "Campo ação imediata não foi preenchido\n";
    }

    if (msg !== "") {
        console.log("Erros na Atividade 4: " + msg);
        throw msg;
    }
}

function validateActivity5(form) {
    var msg = "";

    
    if (form.getValue("validacao_acoes_responsavel") == "") {
        msg += "Campo validar não foi preenchido\n";
    }

    if (msg !== "") {
        console.log("Erros na Atividade 5: " + msg);
        throw msg;
    }
}

function validateActivity13(form) {
    var msg = "";

    if (form.getValue("status") == "") {
        msg += "Campo status não foi preenchido\n";
    }
    

    if (msg !== "") {
        console.log("Erros na Atividade 13: " + msg);
        throw msg;
    }
}

function validateActivity15(form) {
    var msg = "";

    if (form.getValue("validacao_solicitante") == "") {
        msg += "Campo validação solicitante não foi preenchido\n";
    }
    
    
    if (msg !== "") {
        console.log("Erros na Atividade 15: " + msg);
        throw msg;
    }
}



