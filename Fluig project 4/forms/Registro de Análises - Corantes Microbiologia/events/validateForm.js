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

    if (form.getValue("itens") == "") {
        msg += "Campo produto não foi preenchido\n";
    }
    if (form.getValue("lotereagente") == "") {
        msg += "Campo lote reagente não foi preenchido\n";
    }
    if (form.getValue("lotereagente") == "") {
        msg += "Campo estufa não foi preenchido\n";
    }
    if (form.getValue("Resp") == "") {
        msg += "Campo Responsável não foi preenchido\n";
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

    
    if (form.getValue("prioridade") == "") {
        msg += "Campo Responsável não foi preenchido\n";
    }
    if (form.getValue("aprovado") == "") {
        msg += "Campo Responsável não foi preenchido\n";
    }

    if (msg !== "") {
        console.log("Erros na Atividade 5: " + msg);
        throw msg;
    }
}






