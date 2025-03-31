function validateForm(form) {
    var atv_atual = getValue('WKNumState');
    console.log("Atividade atual: " + atv_atual);

    if (atv_atual == 4) {
        console.log("Validando atividade 4");
        validateActivity4(form);
    } else if (atv_atual == 5) {
        console.log("Validando atividade 5");
        validateActivity5(form);
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
    if (form.getValue("tipo_dispositivo") == "") {
        msg += "Campo tipo_dispositivo por não foi preenchido\n";
    }
    if (form.getValue("justificativa") == "") {
        msg += "Campo justificativa não foi preenchido\n";
    }
    
    if (msg !== "") {
        console.log("Erros na Atividade 4: " + msg);
        throw msg;
    }
}

function validateActivity5(form) {
    var msg = "";

    
    if (form.getValue("validar") == "") {
        msg += "Campo validar não foi preenchido\n";
    }

    if (msg !== "") {
        console.log("Erros na Atividade 5: " + msg);
        throw msg;
    }
}











