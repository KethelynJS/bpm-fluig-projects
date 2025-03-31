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

    if (form.getValue("nome_contato") == "") {
        msg += "Campo nome do contato não foi preenchido\n";
    }
    if (form.getValue("empresa") == "") {
        msg += "Campo empresa não foi preenchido\n";
    }
    if (form.getValue("cliente") == "") {
        msg += "Campo cliente não foi preenchido\n";
    }
    if (form.getValue("porque") == "") {
        msg += "Campo porque não foi preenchido\n";
    }
    if (form.getValue("descricao_duvida") == "") {
        msg += "Campo descrição da dúvida não foi preenchido\n";
    }
    if (form.getValue("produto") == "") {
        msg += "Campo produto não foi preenchido\n";
    }
    if (form.getValue("tipo_processo") == "") {
        msg += "Campo produto não foi preenchido\n";
    }
    if (form.getValue("prioridade") == "") {
        msg += "Campo produto não foi preenchido\n";
    }
    
    if (msg !== "") {
        console.log("Erros na Atividade 4: " + msg);
        throw msg;
    }
}

function validateActivity5(form) {
    var msg = "";

    
    if (form.getValue("resposta") == "") {
        msg += "Campo resposta não foi preenchido\n";
    }
    if (form.getValue("comentario") == "") {
        msg += "Campo comentário não foi preenchido\n";
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




