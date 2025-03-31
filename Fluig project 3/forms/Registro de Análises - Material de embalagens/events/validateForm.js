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

    if (form.getValue("opcao") == "") {
        msg += "Campo código não foi preenchido\n";
    }
    if (form.getValue("dosagem") == "") {
        msg += "Campo Procedência de origem não foi preenchido\n";
    }
    if (form.getValue("lote") == "") {
        msg += "Campo lote do desvio não foi preenchido\n";
    }
    if (form.getValue("question1") == "") {
        msg += "Campo question1 não foi preenchido\n";
    }
    if (form.getValue("question2") == "") {
        msg += "Campo question2 não foi preenchido\n";
    }
    
    if (form.getValue("question5") == "") {
        msg += "Campo question5 não foi preenchido\n";
    }
    if (form.getValue("question6") == "") {
        msg += "Campo question6 não foi preenchido\n";
    }
    if (form.getValue("question7") == "") {
        msg += "Campo question7 não foi preenchido\n";
    }
    if (form.getValue("question8") == "") {
        msg += "Campo question8 não foi preenchido\n";
    }
    if (form.getValue("question9") == "") {
        msg += "Campo question9 não foi preenchido\n";
    }
    if (form.getValue("question10") == "") {
        msg += "Campo question10 não foi preenchido\n";
    }

    if (msg !== "") {
        console.log("Erros na Atividade 4: " + msg);
        throw msg;
    }
}

function validateActivity5(form) {
    var msg = "";

    
    if (form.getValue("aprovado_reprovado") == "") {
        msg += "Campo validar não foi preenchido\n";
    }

    if (msg !== "") {
        console.log("Erros na Atividade 5: " + msg);
        throw msg;
    }
}







