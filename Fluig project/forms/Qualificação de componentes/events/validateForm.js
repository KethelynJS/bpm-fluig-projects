function validateForm(form) {
    var atv_atual = getValue('WKNumState');
    console.log("Atividade atual: " + atv_atual);

    if (atv_atual == 4) {
        console.log("Validando atividade 4");
        validateActivity4(form);
    } else if (atv_atual == 5) {
        console.log("Validando atividade 5");
        validateActivity5(form)
    } else if (atv_atual == 15) {
        console.log("Validando atividade 5");
        validateActivity15(form)
    } else if (atv_atual == 19) {
        console.log("Validando atividade 5");
        validateActivity19(form)
    } else if (atv_atual == 21) {
        console.log("Validando atividade 5");
        validateActivity21(form)
    } else if (atv_atual == 30) {
        console.log("Validando atividade 5");
        validateActivity30(form)
    } else if (atv_atual == 51) {
        console.log("Validando atividade 5");
        validateActivity51(form)
    } else if (atv_atual == 33) {
        console.log("Validando atividade 5");
        validateActivity33(form)
    } else if (atv_atual == 53) {
        console.log("Validando atividade 5");
        validateActivity53(form)
    } else if (atv_atual == 36) {
        console.log("Validando atividade 5");
        validateActivity36(form)
    } else if (atv_atual == 55) {
        console.log("Validando atividade 5");
        validateActivity55(form)
    } else if (atv_atual == 42) {
        console.log("Validando atividade 5");
        validateActivity42(form)
        }
}


function validateActivity4(form) {
    var msg = "";

    if (form.getValue("motivoQualificacao") == "") {
        msg += "Campo específico motivo não foi preenchido\n";
    }
    
    if (form.getValue("componente") == "") {
        msg += "Campo específico componente não foi preenchido\n";
    }

    if (msg !== "") {
        console.log("Erros na Atividade 4: " + msg);
        throw msg;
    }
}

function validateActivity5(form) {
    var msg = "";

    if (form.getValue("notificarCQFQ") == "") {
        msg += "Campo específico notificação não foi preenchido\n";
    }
    

    if (msg !== "") {
        console.log("Erros na Atividade 5: " + msg);
        throw msg;
    }
}

function validateActivity15(form) {
    var msg = "";

    if (form.getValue("temperatura") == "") {
        msg += "Campo específico temperatura não foi preenchido\n";
    }
    
    if (form.getValue("lotebancada") == "") {
        msg += "Campo específico lote não foi preenchido\n";
    }
    
    if (form.getValue("anexo") == "") {
        msg += "Campo específico anexo não foi preenchido\n";
    }
    
    if (form.getValue("analiseMicro") == "") {
        msg += "Campo específico analise não foi preenchido\n";
    }
    

    if (msg !== "") {
        console.log("Erros na Atividade 5: " + msg);
        throw msg;
    }
}

function validateActivity19(form) {
    var msg = "";

    if (form.getValue("resp2") == "") {
        msg += "Campo específico responsável não foi preenchido\n";
    }
    

    if (msg !== "") {
        console.log("Erros na Atividade 5: " + msg);
        throw msg;
    }
}

function validateActivity21(form) {
    var msg = "";

    if (form.getValue("lotePiloto2") == "") {
        msg += "Campo específico lote não foi preenchido\n";
    }
    

    if (msg !== "") {
        console.log("Erros na Atividade 21: " + msg);
        throw msg;
    }
}

function validateActivity30(form) {
    var msg = "";

    if (form.getValue("lotepcp") == "") {
        msg += "Campo específico lote não foi preenchido\n";
    }
    

    if (msg !== "") {
        console.log("Erros na Atividade 30: " + msg);
        throw msg;
    }
}

function validateActivity51(form) {
    var msg = "";

    if (form.getValue("lotepcp") == "") {
        msg += "Campo específico lote não foi preenchido\n";
    }
    

    if (msg !== "") {
        console.log("Erros na Atividade 30: " + msg);
        throw msg;
    }
}

function validateActivity33(form) {
    var msg = "";

    if (form.getValue("intercorrencia") == "") {
        msg += "Campo específico intercorrência não foi preenchido\n";
    }
    

    if (msg !== "") {
        console.log("Erros na Atividade 30: " + msg);
        throw msg;
    }
}

function validateActivity53(form) {
    var msg = "";

    if (form.getValue("intercorrencia") == "") {
        msg += "Campo específico intercorrência não foi preenchido\n";
    }
    

    if (msg !== "") {
        console.log("Erros na Atividade 30: " + msg);
        throw msg;
    }
}

function validateActivity42(form) {
    var msg = "";

    if (form.getValue("qualificacao3") == "") {
        msg += "Campo específico qualificação  não foi preenchido\n";
    }
    

    if (msg !== "") {
        console.log("Erros na Atividade 42: " + msg);
        throw msg;
    }
}

function validateActivity36(form) {
    var msg = "";

    if (form.getValue("analiseMicro1") == "") {
        msg += "Campo específico analise  não foi preenchido\n";
    }
    

    if (msg !== "") {
        console.log("Erros na Atividade 36: " + msg);
        throw msg;
    }
}

function validateActivity55(form) {
    var msg = "";

    if (form.getValue("analiseMicro1") == "") {
        msg += "Campo específico analise  não foi preenchido\n";
    }
    

    if (msg !== "") {
        console.log("Erros na Atividade 55: " + msg);
        throw msg;
    }
}