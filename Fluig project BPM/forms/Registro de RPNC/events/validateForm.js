function validateForm(form) {
    var atv_atual = getValue('WKNumState');
    console.log("Atividade atual: " + atv_atual);

    if (atv_atual == 4) {
        console.log("Validando atividade 4");
        validateActivity4(form);
    } else if (atv_atual == 5) {
        console.log("Validando atividade 5");
        validateActivity5(form);
    } else if (atv_atual == 22) {
        console.log("Validando atividade 22");
        validateActivity22(form);
    } else if (atv_atual == 12) {
        console.log("Validando atividade 12");
        validateActivity12(form);
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

    if (form.getValue("resp_pelo_envio") == "") {
        msg += "Campo responsável não foi preenchido\n";
    }
    if (form.getValue("setor_responsavel") == "") {
        msg += "Campo setor não foi preenchido\n";
    }
    if (form.getValue("natureza_desvio") == "") {
        msg += "Campo natureza do desvio não foi preenchido\n";
    }
    if (form.getValue("data_ocorrencia") == "") {
        msg += "Campo data ocorrência não foi preenchido\n";
    }
    if (form.getValue("tipo_nao_conformidade") == "") {
        msg += "Campo tipo conformidade não foi preenchido\n";
    }
    if (form.getValue("acao_imediata_tomada") == "") {
        msg += "Campo ação imediata não foi preenchido\n";
    }

    if (msg !== "") {
        console.log("Erros na Atividade 4: " + msg);
        throw msg;
    }
}

function validateActivity5(form) {
    var msg = "";

    
    if (form.getValue("validando_primeira") == "") {
        msg += "Campo validar não foi preenchido\n";
    }

    if (msg !== "") {
        console.log("Erros na Atividade 5: " + msg);
        throw msg;
    }
}

function validateActivity22(form) {
    var msg = "";

    if (form.getValue("setor_responsavel_investigacao") == "") {
        msg += "Campo setor não foi preenchido\n";
    }
    

    if (msg !== "") {
        console.log("Erros na Atividade 22: " + msg);
        throw msg;
    }
}

function validateActivity12(form) {
    var msg = "";

    if (form.getValue("investigacao_previa") == "") {
        msg += "Campo investigação prévia não foi preenchido\n";
    }
    if (form.getValue("disposicao_final_lote") == "") {
        msg += "Campo lote não foi preenchido\n";
    }
    if (form.getValue("conclusao") == "") {
        msg += "Campo conclusão não foi preenchido\n";
    }
    if (form.getValue("resp_investigacao") == "") {
        msg += "Campo responsável não foi preenchido\n";
    }
    
    if (msg !== "") {
        console.log("Erros na Atividade 12: " + msg);
        throw msg;
    }
}

function validateActivity15(form) {
    var msg = "";

    if (form.getValue("validando_final") == "") {
        msg += "Campo validar não foi preenchido\n";
    }
    
    if (msg !== "") {
        console.log("Erros na Atividade 15: " + msg);
        throw msg;
    }
}


