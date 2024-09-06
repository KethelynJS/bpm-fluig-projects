function validateForm(form) {
    var atv_atual = getValue('WKNumState');
    console.log("Atividade atual: " + atv_atual);

    if (atv_atual == 4) {
        console.log("Validando atividade 4");
        validateActivity4(form);
    } else if (atv_atual == 5) {
        console.log("Validando atividade 5");
        validateActivity5(form);
    } else if (atv_atual == 7) {
        console.log("Validando atividade 7");
        validateActivity7(form);
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

    if (form.getValue("nome_empresa") == "") {
        msg += "Campo solicitante não foi preenchido\n";
    }
    if (form.getValue("reclamante_setor") == "") {
        msg += "Campo setor não foi preenchido\n";
    }
    if (form.getValue("cliente") == "") {
        msg += "Campo cliente não foi preenchido\n";
    }
    if (form.getValue("categoria") == "") {
        msg += "Campo categoria não foi preenchido\n";
    }
    if (form.getValue("n_nota") == "") {
        msg += "Campo nota não foi preenchido\n";
    }
    if (form.getValue("vendedor_representante") == "") {
        msg += "Campo vendedor_representante não foi preenchido\n";
    }

    if (msg !== "") {
        console.log("Erros na Atividade 4: " + msg);
        throw msg;
    }
}

function validateActivity5(form) {
    var msg = "";

    
    if (form.getValue("question1") == "") {
        msg += "Campo question1 não foi preenchido\n";
    }
    if (form.getValue("question3") == "") {
        msg += "Campo question3 não foi preenchido\n";
    }
    if (form.getValue("question4") == "") {
        msg += "Campo question4 não foi preenchido\n";
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
    if (form.getValue("question2") == "") {
        msg += "Campo question2 não foi preenchido\n";
    }

    if (msg !== "") {
        console.log("Erros na Atividade 5: " + msg);
        throw msg;
    }
}

function validateActivity7(form) {
    var msg = "";

    if (form.getValue("conclusao") == "") {
        msg += "Campo conclusão não foi preenchido\n";
    }
    

    if (msg !== "") {
        console.log("Erros na Atividade 7: " + msg);
        throw msg;
    }
}

function validateActivity9(form) {
    var msg = "";

    if (form.getValue("validacao_gq") == "") {
        msg += "Campo validar não foi preenchido\n";
    }
    
    if (msg !== "") {
        console.log("Erros na Atividade 9: " + msg);
        throw msg;
    }
}


