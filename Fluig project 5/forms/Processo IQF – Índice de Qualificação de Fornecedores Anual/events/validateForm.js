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

    if (form.getValue("ano") == "") {
        msg += "Campo ano não foi preenchido\n";
    }
    if (form.getValue("responsavel") == "") {
        msg += "Campo responsável não foi preenchido\n";
    }
    if (form.getValue("data_solicitacao") == "") {
        msg += "Campo data não foi preenchido\n";
    }
    if (form.getValue("procedencia") == "") {
        msg += "Campo procedencia não foi preenchido\n";
    }
    if (form.getValue("itempreenchimento") == "") {
        msg += "Campo marcar não foi preenchido\n";
    }

    if (msg !== "") {
        console.log("Erros na Atividade 4: " + msg);
        throw msg;
    }
}

function validateActivity5(form) {
    var msg = "";

    
    if (form.getValue("responsavel2") == "") {
        msg += "Campo Responsável não foi preenchido\n";
    }
    if (form.getValue("itempreenchimento2") == "") {
        msg += "Campo marcar não foi preenchido\n";
    }

    if (msg !== "") {
        console.log("Erros na Atividade 5: " + msg);
        throw msg;
    }
}

function validateActivity9(form) {
    var msg = "";

    if (form.getValue("opcao") == "") {
        msg += "Campo resultado não foi preenchido\n";
    }
    if (form.getValue("respc") == "") {
        msg += "Campo responsável não foi preenchido\n";
    }
    
   
    

    if (msg !== "") {
        console.log("Erros na Atividade 9: " + msg);
        throw msg;
    }
}

function validateActivity11(form) {
    var msg = "";

    if (form.getValue("prioridade") == "") {
        msg += "Campo conforme ou não, não foi preenchido\n";
    }
    if (form.getValue("Respk") == "") {
        msg += "Campo responsável não foi preenchido\n";
    }
    
    if (form.getValue("aprovado") == "") {
        msg += "Campo aprovado não foi preenchido\n";
    }
    if (form.getValue("Respp1") == "") {
        msg += "Campo responsável não foi preenchido\n";
    }
    

    if (msg !== "") {
        console.log("Erros na Atividade 11: " + msg);
        throw msg;
    }
}

