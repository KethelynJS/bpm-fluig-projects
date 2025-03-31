function validateForm(form) {
    var atv_atual = getValue('WKNumState');
    console.log("Atividade atual: " + atv_atual);

    if (atv_atual == 4) {
        console.log("Validando atividade 4");
        validateActivity4(form);
    } else if (atv_atual == 5) {
        console.log("Validando atividade 5");
        validateActivity5(form);
    } else if (atv_atual == 18) {
        console.log("Validando atividade 18");
        validateActivity18(form);
    } else if (atv_atual == 20) {
        console.log("Validando atividade 20");
        validateActivity20(form);
    } else if (atv_atual == 22) {
        console.log("Validando atividade 22");
        validateActivity22(form);
    } else if (atv_atual == 24) {
        console.log("Validando atividade 24");
        validateActivity24(form);
    } 
        
     else {
        console.log("Atividade não especificada, permitindo envio");
        return true; // Permitir envio se a atividade não for especificada
    }
}

function validateActivity4(form) {
    var msg = "";

    if (form.getValue("solicitante") == "") {
        msg += "Campo solicitante não foi preenchido\n";
    }
    if (form.getValue("data_solicitacao") == "") {
        msg += "Campo data não foi preenchido\n";
    }
    if (form.getValue("origemm") == "") {
        msg += "Campo origem  não foi preenchido\n";
    }
    if (form.getValue("motivo") == "") {
        msg += "Campo motivo não foi preenchido\n";
    }
    if (form.getValue("empresa") == "") {
        msg += "Campo empresa não foi preenchido\n";
    }
    if (form.getValue("nome_contato") == "") {
        msg += "Campo nome do contato não foi preenchido\n";
    }
    if (form.getValue("email_telefone") == "") {
        msg += "Campo email/telefone não foi preenchido\n";
    }
    if (form.getValue("parte_1") == "") {
        msg += "Campo código não foi preenchido\n";
    }
    if (form.getValue("parte_2") == "") {
        msg += "Campo lote não foi preenchido\n";
    }
    if (form.getValue("parte_3") == "") {
        msg += "Campo validade não foi preenchido\n";
    }
    if (form.getValue("parte_4") == "") {
        msg += "Campo quantidade não foi preenchido\n";
    }
    if (form.getValue("parte_5") == "") {
        msg += "Campo NF de origem não foi preenchido\n";
    }
    if (form.getValue("frete") == "") {
        msg += "Campo frete não foi preenchido\n";
    }
    
    if (msg !== "") {
        console.log("Erros na Atividade 4: " + msg);
        throw msg;
    }
}

function validateActivity5(form) {
    var msg = "";

    
    if (form.getValue("comercial_validacao") == "") {
        msg += "Campo solicitar coleta não foi preenchido\n";
    }
    
    if (form.getValue("consideracoes_comerc") == "") {
        msg += "Campo nf de devolução não foi preenchido\n";
    }

    if (msg !== "") {
        console.log("Erros na Atividade 5: " + msg);
        throw msg;
    }
}

function validateActivity18(form) {
    var msg = "";

    
    if (form.getValue("transferencia") == "") {
        msg += "Campo transferencia não foi preenchido\n";
    }

    if (msg !== "") {
        console.log("Erros na Atividade 5: " + msg);
        throw msg;
    }
}

function validateActivity20(form) {
    var msg = "";

    
    if (form.getValue("solicitar_coleta") == "") {
        msg += "Campo coleta não foi preenchido\n";
    }
    
    

    if (msg !== "") {
        console.log("Erros na Atividade 5: " + msg);
        throw msg;
    }
}

function validateActivity22(form) {
    var msg = "";

    
    if (form.getValue("datacalendario") == "") {
        msg += "Campo data não foi preenchido\n";
    }
    
    if (form.getValue("resp") == "") {
        msg += "Campo responsável não foi preenchido\n";
    }
    

    if (msg !== "") {
        console.log("Erros na Atividade 5: " + msg);
        throw msg;
    }
}

function validateActivity24(form) {
    var msg = "";

    
    if (form.getValue("processo_reanalise") == "") {
        msg += "Campo processo reanalise não foi preenchido\n";
    }
    

    if (msg !== "") {
        console.log("Erros na Atividade 5: " + msg);
        throw msg;
    }
}


function validateActivity14(form) {
    var msg = "";

    
    if (form.getValue("transferencia") == "") {
        msg += "Campo transferencia não foi preenchido\n";
    }

    if (msg !== "") {
        console.log("Erros na Atividade 5: " + msg);
        throw msg;
    }
}

function validateActivity34(form) {
    var msg = "";

    
    if (form.getValue("solicitar_coleta") == "") {
        msg += "Campo coleta não foi preenchido\n";
    }
    
    

    if (msg !== "") {
        console.log("Erros na Atividade 5: " + msg);
        throw msg;
    }
}


function validateActivity38(form) {
    var msg = "";

    
    if (form.getValue("datacalendario") == "") {
        msg += "Campo data não foi preenchido\n";
    }
    
    if (form.getValue("resp") == "") {
        msg += "Campo responsável não foi preenchido\n";
    }
    

    if (msg !== "") {
        console.log("Erros na Atividade 5: " + msg);
        throw msg;
    }
}



