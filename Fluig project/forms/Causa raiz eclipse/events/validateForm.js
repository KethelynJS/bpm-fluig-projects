function validateForm(form) {
    var atv_atual = getValue('WKNumState');
    console.log("Atividade atual: " + atv_atual);

    if (atv_atual == 4) {
        console.log("Validando atividade 4");
        validateActivity4(form);
    } else if (atv_atual == 5) {
        console.log("Validando atividade 5");
   
    } else if (atv_atual == 9) {
        console.log("Validando atividade 9");
        validateActivity5(form)
    } else if (atv_atual == 11) {
        console.log("Validando atividade 11");
        validateActivity11
        
}


function validateActivity4(form) {
    var msg = "";

    if (form.getValue("prioridade") == "") {
        msg += "Campo específico prioridade não foi preenchido\n";
    }
    
    if (form.getValue("setores") == "") {
        msg += "Campo específico setores não foi preenchido\n";
    }
    
    if (form.getValue("consideracoes") == "") {
        msg += "Campo específico considerações não foi preenchido\n";
    }
    
    if (form.getValue("custo") == "") {
        msg += "Campo específico custo validado não foi preenchido\n";
    }

    if (msg !== "") {
        console.log("Erros na Atividade 4: " + msg);
        throw msg;
    }
}
}

function validateActivity5(form) {
    var msg = "";

    if (form.getValue("processo") == "") {
        msg += "Campo específico processo não foi preenchido\n";
    }
    

    if (msg !== "") {
        console.log("Erros na Atividade 5: " + msg);
        throw msg;
    }
}

function validateActivity11(form) {
    var msg = "";

    if (form.getValue("conclusao") == "") {
        msg += "Campo específico conclusão não foi preenchido\n";
    }
    if (form.getValue("processo1") == "") {
        msg += "Campo específico validação não foi preenchido\n";
    }

    if (msg !== "") {
        console.log("Erros na Atividade 5: " + msg);
        throw msg;
    }
}