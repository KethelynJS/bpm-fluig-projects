function validateForm(form) {
    var atv_atual = getValue('WKNumState');
    console.log("Atividade atual: " + atv_atual);

    if (atv_atual == 4) {
        console.log("Validando atividade 4");
        validateActivity4(form);
    } else if (atv_atual == 5) {
        console.log("Validando atividade 5");
        validateActivity5(form);
    } else if (atv_atual == 7) {
        console.log("Validando atividade 7");
        validateActivity7(form);
        
    } else {
        console.log("Atividade não especificada, permitindo envio");
        return true; // Permitir envio se a atividade não for especificada
    }
}

function validateActivity4(form) {
    var msg = "";

    if (form.getValue("datacalendario") == "") {
        msg += "Campo data não foi preenchido\n";
    }
    if (form.getValue("horario_inicio") == "") {
        msg += "Campo horário não foi preenchido\n";
    }
    if (form.getValue("horario_termino") == "") {
        msg += "Campo tipo do desvio não foi preenchido\n";
    }
    if (form.getValue("consideracoes") == "") {
        msg += "Campo observação não foi preenchido\n";
    }
    if (form.getValue("data_prevista") == "") {
        msg += "Campo data não foi preenchido\n";
    }
    if (form.getValue("Local_palatforma") == "") {
        msg += "Campo local não foi preenchido\n";
    }
    if (form.getValue("termino") == "") {
        msg += "Campo termino não foi preenchido\n";
    }
    if (msg !== "") {
        console.log("Erros na Atividade 4: " + msg);
        throw msg;
    }
}

function validateActivity5(form) {
    var msg = "";

    if (form.getValue("informativo") == "") {
        msg += "Campo informativo não foi preenchido\n";
    }
    
    
    if (msg !== "") {
        console.log("Erros na Atividade 5: " + msg);
        throw msg;
    }
}

function validateActivity7(form) {
    var msg = "";

    if (form.getValue("validar") == "") {
        msg += "Campo validação não foi preenchido\n";
    }
    
    
    if (msg !== "") {
        console.log("Erros na Atividade 7: " + msg);
        throw msg;
    }
}



