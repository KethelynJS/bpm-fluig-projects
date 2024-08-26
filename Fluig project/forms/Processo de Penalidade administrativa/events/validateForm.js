function validateForm(form) {
    var atv_atual = getValue('WKNumState');
    console.log("Atividade atual: " + atv_atual);

    if (atv_atual == 4) {
        console.log("Validando atividade 4");
        validateActivity5(form);
    } else if (atv_atual == 5) {
        console.log("Validando atividade 5");
        
}


function validateActivity5(form) {
    var msg = "";

    if (form.getValue("solicitante") == "") {
        msg += "Campo específico solicitante não foi preenchido\n";
    }
    
    if (form.getValue("colaborador") == "") {
        msg += "Campo específico colaborador não foi preenchido\n";
    }
    
    if (form.getValue("motivo") == "") {
        msg += "Campo específico motivo não foi preenchido\n";
    }

    if (msg !== "") {
        console.log("Erros na Atividade 4: " + msg);
        throw msg;
    }
}
}