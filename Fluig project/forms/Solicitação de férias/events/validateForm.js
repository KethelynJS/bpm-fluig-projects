function validateForm(form) {
    var atv_atual = getValue('WKNumState');
    console.log("Atividade atual: " + atv_atual);

    if (atv_atual == 4) {
        console.log("Validando atividade 4");
        validateActivity4(form);
    } else if (atv_atual == 9) {
        console.log("Validando atividade 9");
        validateActivity9(form);
    } else if (atv_atual == 14) {
        console.log("Validando atividade 14");
        validateActivity14(form);
    } else if (atv_atual == 18) {
        console.log("Validando atividade 18");
        validateActivity18(form);
    } else {
        console.log("Atividade não especificada, permitindo envio");
        return true; // Permitir envio se a atividade não for especificada
    }
}

function validateActivity4(form) {
    var msg = "";

    if (form.getValue("colaborador") == "") {
        msg += "Campo colaborador não foi preenchido\n";
    }
    if (form.getValue("setor") == "") {
        msg += "Campo setor não foi preenchido\n";
    }
    if (form.getValue("dias_solicitados") == "") {
        msg += "Campo dias solicitados não foi preenchido\n";
    }
    if (form.getValue("data_inicio") == "") {
        msg += "Campo data início não foi preenchido\n";
    }
    if (form.getValue("data_final") == "") {
        msg += "Campo data final não foi preenchido\n";
    }
    if (form.getValue("abono_pecuario") == "") {
        msg += "Campo abono foi não foi preenchido\n";
    }

    if (msg !== "") {
        console.log("Erros na Atividade 4: " + msg);
        throw msg;
    }
}

function validateActivity9(form) {
    var msg = "";

    
    if (form.getValue("aprovacao") == "") {
        msg += "Campo aprovação não foi preenchido\n";
    }

    if (msg !== "") {
        console.log("Erros na Atividade 9: " + msg);
        throw msg;
    }
}

function validateActivity14(form) {
    var msg = "";

    if (form.getValue("contabilidade") == "") {
        msg += "Campo contabilidade foi preenchido\n";
    }
    
    

    if (msg !== "") {
        console.log("Erros na Atividade 14: " + msg);
        throw msg;
    }
}

function validateActivity18(form) {
    var msg = "";

    if (form.getValue("pagamento_ferias_dia") == "") {
        msg += "Campo pagamento não foi preenchido\n";
    }
    
    

    if (msg !== "") {
        console.log("Erros na Atividade 18: " + msg);
        throw msg;
    }
}

