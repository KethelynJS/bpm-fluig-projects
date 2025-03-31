function validateForm(form) {
    var atv_atual = getValue('WKNumState');
    console.log("Atividade atual: " + atv_atual);

    if (atv_atual == 4) {
        console.log("Validando atividade 4");
        validateActivity4(form);
    } else if (atv_atual == 5) {
        console.log("Validando atividade 5");
        validateActivity5(form);
    } else if (atv_atual == 10) {
        console.log("Validando atividade 10");
        validateActivity10(form);
    } else if (atv_atual == 12) {
        console.log("Validando atividade 12");
        validateActivity12(form);
    
    }  else {
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
    if (form.getValue("tipo_solicitacao") == "") {
        msg += "Campo autorizado por não foi preenchido\n";
    }
    if (form.getValue("consideracoes") == "") {
        msg += "Campo período não foi preenchido\n";
    }
    if (form.getValue("referencia") == "") {
        msg += "Campo referencia não foi preenchido\n";
    }
    if (form.getValue("responsavel_etapa") == "") {
        msg += "Campo responsavel não foi preenchido\n";
    }
    if (form.getValue("finalidade") == "") {
        msg += "Campo fornecedor não foi preenchido\n";
    }
      

    if (msg !== "") {
        console.log("Erros na Atividade 4: " + msg);
        throw msg;
    }
}

function validateActivity5(form) {
    var msg = "";

    
    if (form.getValue("informacoes_TI") == "") {
        msg += "Campo informações não foi preenchido\n";
    }

    if (msg !== "") {
        console.log("Erros na Atividade 5: " + msg);
        throw msg;
    }
}

function validateActivity10(form) {
    var msg = "";

    
    if (form.getValue("consideracoes_desenvolvimentp") == "") {
        msg += "Campo considerações desenvolvimento não foi preenchido\n";
    }

    if (msg !== "") {
        console.log("Erros na Atividade 5: " + msg);
        throw msg;
    }
}

function validateActivity12(form) {
    var msg = "";

    
    if (form.getValue("validado") == "") {
        msg += "Campo validar não foi preenchido\n";
    }

    if (msg !== "") {
        console.log("Erros na Atividade 5: " + msg);
        throw msg;
    }
}







