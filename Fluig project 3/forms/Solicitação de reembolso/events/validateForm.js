function validateForm(form) {
    var atv_atual = getValue('WKNumState');
    console.log("Atividade atual: " + atv_atual);

    if (atv_atual == 4) {
        console.log("Validando atividade 4");
        validateActivity4(form);
    } else if (atv_atual == 5) {
        console.log("Validando atividade 5");
        validateActivity5(form);
    } else if (atv_atual == 15) {
        console.log("Validando atividade 15");
        validateActivity15(form);
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
    if (form.getValue("autorizado") == "") {
        msg += "Campo autorizado por não foi preenchido\n";
    }
    if (form.getValue("periodo") == "") {
        msg += "Campo período não foi preenchido\n";
    }
    if (form.getValue("data_envio") == "") {
        msg += "Campo data não foi preenchido\n";
    }
    if (form.getValue("data1") == "") {
        msg += "Campo data não foi preenchido\n";
    }
    if (form.getValue("fornecedor1") == "") {
        msg += "Campo fornecedor não foi preenchido\n";
    }
    if (form.getValue("nf1") == "") {
        msg += "Campo NF não foi preenchido\n";
    }
    if (form.getValue("categoria1") == "") {
        msg += "Campo categoria não foi preenchido\n";
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

function validateActivity15(form) {
    var msg = "";

    
    if (form.getValue("liberacao") == "") {
        msg += "Campo liberação não foi preenchido\n";
    }

    if (msg !== "") {
        console.log("Erros na Atividade 5: " + msg);
        throw msg;
    }
}







