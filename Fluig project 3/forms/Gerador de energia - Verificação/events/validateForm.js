function validateForm(form) {
    var atv_atual = getValue('WKNumState');
    console.log("Atividade atual: " + atv_atual);

    if (atv_atual == 4) {
        console.log("Validando atividade 4");
        validateActivity4(form);
    } else {
        console.log("Atividade não especificada, permitindo envio");
        return true; // Permitir envio se a atividade não for especificada
    }
}

function validateActivity4(form) {
    var msg = "";

    if (form.getValue("chave_branca") == "") {
        msg += "Campo chave branca não foi preenchido\n";
    }
    if (form.getValue("posicao_AUT") == "") {
        msg += "Campo posião AUT não foi preenchido\n";
    }
    if (form.getValue("painel_digital_lampada") == "") {
        msg += "Campo painel digital não foi preenchido\n";
    }
    if (form.getValue("combustivel") == "") {
        msg += "Campo combustível não foi preenchido\n";
    }
    if (form.getValue("verificacao") == "") {
        msg += "Campo verificação não foi preenchido\n";
    }
    

    if (msg !== "") {
        console.log("Erros na Atividade 4: " + msg);
        throw msg;
    }
}



