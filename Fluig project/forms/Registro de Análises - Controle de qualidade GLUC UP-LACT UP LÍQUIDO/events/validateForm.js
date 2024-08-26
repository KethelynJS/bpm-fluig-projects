function validateForm(form) {
    var atv_atual = getValue('WKNumState');
    console.log("Atividade atual: " + atv_atual);

    if (atv_atual == 4) {
        console.log("Validando atividade 4");
        validateActivity4(form);
    } else if (atv_atual == 7) {
        console.log("Validando atividade 7");
        validateActivity5(form);
    } else if (atv_atual == 9) {
        console.log("Validando atividade 9");
        validateActivity14(form);
    } else {
        console.log("Atividade não especificada, permitindo envio");
        return true; // Permitir envio se a atividade não for especificada
    }
}

function validateActivity4(form) {
    var msg = "";

    if (form.getValue("opcao7") == "") {
        msg += "Campo produto não foi preenchido\n";
    }
    if (form.getValue("motivoAnalise") == "") {
        msg += "Campo motivo não foi preenchido\n";
    }
    if (form.getValue("Resp") == "") {
        msg += "Campo Resp não foi preenchido\n";
    }
    if (form.getValue("dosagem") == "") {
        msg += "Campo dosagem não foi preenchido\n";
    }
    if (form.getValue("lote") == "") {
        msg += "Campo lote não foi preenchido\n";
    }

    if (msg !== "") {
        console.log("Erros na Atividade 4: " + msg);
        throw msg;
    }
}

function validateActivity5(form) {
    var msg = "";

    if (form.getValue("opcao") == "") {
        msg += "Campo específico não foi preenchido\n";
    }
    
    if (form.getValue("Resp4") == "") {
        msg += "Campo Resp não foi preenchido\n";
    }

    if (msg !== "") {
        console.log("Erros na Atividade 5: " + msg);
        throw msg;
    }
}

function validateActivity14(form) {
    var msg = "";

    if (form.getValue("Respk") == "") {
        msg += "Campo Resp não foi preenchido\n";
    }
    if (form.getValue("aprovado") == "") {
        msg += "Campo aprovado não foi preenchido\n";
    }
    

    if (msg !== "") {
        console.log("Erros na Atividade 14: " + msg);
        throw msg;
    }
}

