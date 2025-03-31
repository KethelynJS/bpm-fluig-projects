function validateForm(form) {
    var atv_atual = getValue('WKNumState');
    console.log("Atividade atual: " + atv_atual);

    if (atv_atual == 4) {
        console.log("Validando atividade 4");
        validateActivity4(form);
    } else if (atv_atual == 5) {
        console.log("Validando atividade 5");
        validateActivity5(form);
    }  else if (atv_atual == 12) {
        console.log("Validando atividade 12");
        validateActivity12(form);
    
    } else if (atv_atual == 16) {
        console.log("Validando atividade 16");
        validateActivity16(form);
    } else if (atv_atual == 18) {
        console.log("Validando atividade 18");
        validateActivity18(form);
    } else if (atv_atual == 10) {
        console.log("Validando atividade 10");
        validateActivity10(form);
    } 
    
    
    else {
        console.log("Atividade não especificada, permitindo envio");
        return true; // Permitir envio se a atividade não for especificada
    }
}

function validateActivity4(form) {
    var msg = "";

    if (form.getValue("procedencia") == "") {
        msg += "Campo procedencia não foi preenchido\n";
    }
    if (form.getValue("tipo_amostra") == "") {
        msg += "Campo tipo não foi preenchido\n";
    }
    if (form.getValue("tipo_amostra1") == "") {
        msg += "Campo tipo  não foi preenchido\n";
    }
    if (form.getValue("motivo_solicitacao") == "") {
        msg += "Campo motivo não foi preenchido\n";
    }
    if (form.getValue("registro_desvio") == "") {
        msg += "Campo registro não foi preenchido\n";
    }
  
    
    if (msg !== "") {
        console.log("Erros na Atividade 4: " + msg);
        throw msg;
    }
}

function validateActivity5(form) {
    var msg = "";

    
    if (form.getValue("verificacao") == "") {
        msg += "Campo validar não foi preenchido\n";
    }
    

    if (msg !== "") {
        console.log("Erros na Atividade 5: " + msg);
        throw msg;
    }
}

function validateActivity12(form) {
    var msg = "";

    
    if (form.getValue("acoes_imediatas") == "") {
        msg += "Campo validar não foi preenchido\n";
    }
    if (form.getValue("data_conclusao") == "") {
        msg += "Campo validar não foi preenchido\n";
    }
    if (form.getValue("aprovado_aspecto") == "") {
        msg += "Campo validar não foi preenchido\n";
    }
    

    if (msg !== "") {
        console.log("Erros na Atividade 12: " + msg);
        throw msg;
    }
}



function validateActivity16(form) {
    var msg = "";

    
    if (form.getValue("acoes_imediatas_esterili") == "") {
        msg += "Campo validar não foi preenchido\n";
    }
    if (form.getValue("resultado_esterilidade") == "") {
        msg += "Campo validar não foi preenchido\n";
    }
    if (form.getValue("inicio_analise2") == "") {
        msg += "Campo validar não foi preenchido\n";
    }
    if (form.getValue("final_analise2") == "") {
        msg += "Campo validar não foi preenchido\n";
    }
    

    if (msg !== "") {
        console.log("Erros na Atividade 5: " + msg);
        throw msg;
    }
}


function validateActivity18(form) {
    var msg = "";

    
    if (form.getValue("inicio_analise4") == "") {
        msg += "Campo validar não foi preenchido\n";
    }
    if (form.getValue("final_analise4") == "") {
        msg += "Campo validar não foi preenchido\n";
    }
    if (form.getValue("acoes_imediatas_desemp") == "") {
        msg += "Campo validar não foi preenchido\n";
    }
    if (form.getValue("prioridade") == "") {
        msg += "Campo validar não foi preenchido\n";
    }
    if (form.getValue("aprovado") == "") {
        msg += "Campo validar não foi preenchido\n";
    }
    

    if (msg !== "") {
        console.log("Erros na Atividade 5: " + msg);
        throw msg;
    }
}

function validateActivity10(form) {
    var msg = "";

    
    if (form.getValue("aprovado_outros") == "") {
        msg += "Campo validar não foi preenchido\n";
    }
    if (form.getValue("acoes_imediatas_outros") == "") {
        msg += "Campo validar não foi preenchido\n";
    }
    if (form.getValue("aprovado_outros") == "") {
        msg += "Campo validar não foi preenchido\n";
    }
    

    if (msg !== "") {
        console.log("Erros na Atividade 5: " + msg);
        throw msg;
    }
}









