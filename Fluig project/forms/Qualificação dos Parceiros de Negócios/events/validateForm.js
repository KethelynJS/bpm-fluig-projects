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
    } else if (atv_atual == 16) {
        console.log("Validando atividade 16");
        validateActivity16(form);
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
    if (form.getValue("solicitantepn") == "") {
        msg += "Campo solicitante PN não foi preenchido\n";
    }
    if (form.getValue("datacalendario") == "") {
        msg += "Campo data não foi preenchido\n";
    }

    if (msg !== "") {
        console.log("Erros na Atividade 4: " + msg);
        throw msg;
    }
}

function validateActivity5(form) {
    var msg = "";

    if (form.getValue("prioridade") == "") {
        msg += "Campo específico validação não foi preenchido\n";
    }

    if (msg !== "") {
        console.log("Erros na Atividade 5: " + msg);
        throw msg;
    }
}

function validateActivity14(form) {
    var msg = "";

    if (form.getValue("realizado") == "") {
        msg += "Campo específico realizado não foi preenchido\n";
    }
    
    if (form.getValue("codigo") == "") {
        msg += "Campo específico código SAP não foi preenchido\n";
    }

    if (msg !== "") {
        console.log("Erros na Atividade 14: " + msg);
        throw msg;
    }
}

function validateActivity16(form) {
    var msg = "";

    if (form.getValue("campoEspecificoAtividade16") == "") {
        msg += "Campo específico da Atividade 16 não foi preenchido\n";
    }

    if (msg !== "") {
        console.log("Erros na Atividade 16: " + msg);
        throw msg;
    }
}

