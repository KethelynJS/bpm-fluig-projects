function validateForm(form) {
    var atv_atual = getValue('WKNumState');
    console.log("Atividade atual: " + atv_atual);

    if (atv_atual == 4) {
        console.log("Validando atividade 4");
        validateActivity4(form);
    } else if (atv_atual == 5) {
        console.log("Validando atividade 5");
        validateActivity5(form);
    } else if (atv_atual == 9) {
        console.log("Validando atividade 9");
        validateActivity9(form);
    } else {
        console.log("Atividade não especificada, permitindo envio");
        return true; // Permitir envio se a atividade não for especificada
    }
}

function validateActivity4(form) {
    var msg = "";

    if (form.getValue("tipo_amostra") == "") {
        msg += "Campo tipo de amostra não foi preenchido\n";
    }
    if (form.getValue("codigo_nome") == "") {
        msg += "Campo código não foi preenchido\n";
    }
    if (form.getValue("lote") == "") {
        msg += "Campo lote não foi preenchido\n";
    }
    if (form.getValue("data_fabricacao") == "") {
        msg += "Campo data fabricação não foi preenchido\n";
    }
    if (form.getValue("data_validade") == "") {
        msg += "Campo data validade da dúvida não foi preenchido\n";
    }
    if (form.getValue("motivo_solicitacao") == "") {
        msg += "Campo motivo não foi preenchido\n";
    }
    
    if (msg !== "") {
        console.log("Erros na Atividade 4: " + msg);
        throw msg;
    }
}

function validateActivity5(form) {
    var msg = "";

    
    if (form.getValue("contaminante") == "") {
        msg += "Campo contaminante não foi preenchido\n";
    }
    if (form.getValue("resultados") == "") {
        msg += "Campo resultados não foi preenchido\n";
    }
    
    if (form.getValue("acoes_imediatas") == "") {
        msg += "Campo ações imediatas não foi preenchido\n";
    }
    
    if (msg !== "") {
        console.log("Erros na Atividade 5: " + msg);
        throw msg;
    }
}

function validateActivity9(form) {
    var msg = "";

    if (form.getValue("comentariopd") == "") {
        msg += "Campo comentário não foi preenchido\n";
    }
    

    if (msg !== "") {
        console.log("Erros na Atividade 9: " + msg);
        throw msg;
    }
}




