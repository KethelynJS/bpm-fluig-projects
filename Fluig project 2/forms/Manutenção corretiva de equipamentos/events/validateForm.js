function validateForm(form) {
    var atv_atual = getValue('WKNumState');
    console.log("Atividade atual: " + atv_atual);

    if (atv_atual == 4) {
        console.log("Validando atividade 4");
        validateActivity4(form);
    } else if (atv_atual == 5) {
        console.log("Validando atividade 5");
        validateActivity5(form);
    } else if (atv_atual == 14) {
        console.log("Validando atividade 14");
        validateActivity14(form);
    } else if (atv_atual == 27) {
        console.log("Validando atividade 27");
        validateActivity14(form);
    } else {
        console.log("Atividade não especificada, permitindo envio");
        return true; // Permitir envio se a atividade não for especificada
    }
}

function validateActivity4(form) {
    var msg = "";

    if (form.getValue("solicitante") == "") {
        msg += "Campo solicitante não foi preenchido\n";
    }
    if (form.getValue("setor") == "") {
        msg += "Campo setor não foi preenchido\n";
    }
    if (form.getValue("equipamento_modelo") == "") {
        msg += "Campo equipamento_modelo não foi preenchido\n";
    }
    if (form.getValue("n_equipamento") == "") {
        msg += "Campo n_equipamento não foi preenchido\n";
    }
    if (form.getValue("ocorrencia") == "") {
        msg += "Campo ocorrência não foi preenchido\n";
    }

    if (msg !== "") {
        console.log("Erros na Atividade 4: " + msg);
        throw msg;
    }
}

function validateActivity5(form) {
    var msg = "";

    
    if (form.getValue("interno_externo") == "") {
        msg += "Campo interno_externo não foi preenchido\n";
    }

    if (msg !== "") {
        console.log("Erros na Atividade 5: " + msg);
        throw msg;
    }
}

function validateActivity14(form) {
    var msg = "";

    if (form.getValue("validar") == "") {
        msg += "Campo validar não foi preenchido\n";
    }
    

    if (msg !== "") {
        console.log("Erros na Atividade 14: " + msg);
        throw msg;
    }
}

function validateActivity27(form) {
    var msg = "";

    if (form.getValue("validar") == "") {
        msg += "Campo validar não foi preenchido\n";
    }
    
    if (msg !== "") {
        console.log("Erros na Atividade 27: " + msg);
        throw msg;
    }
}


