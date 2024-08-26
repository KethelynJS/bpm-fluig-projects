function validateForm(form) {
    var atv_atual = getValue('WKNumState');
    console.log("Atividade atual: " + atv_atual);

    if (atv_atual == 4) {
        console.log("Validando atividade 4");
        validateActivity4(form);
    } else if (atv_atual == 5) {
        console.log("Validando atividade 5");
        validateActivity5(form)
        
}


function validateActivity4(form) {
    var msg = "";

    if (form.getValue("revalidacao") == "") {
        msg += "Campo específico revalidacao não foi preenchido\n";
    }
    
    if (form.getValue("consideracoes") == "") {
        msg += "Campo específico consideracoes não foi preenchido\n";
    }
    
    if (form.getValue("responsavel") == "") {
        msg += "Campo específico responsavel não foi preenchido\n";
    }
    
    if (form.getValue("processovalidado") == "") {
        msg += "Campo específico processo validado não foi preenchido\n";
    }

    if (msg !== "") {
        console.log("Erros na Atividade 4: " + msg);
        throw msg;
    }
}
}

function validateActivity5(form) {
    var msg = "";

    if (form.getValue("prioridade") == "") {
        msg += "Campo específico prioridade não foi preenchido\n";
    }
    
    if (form.getValue("observacao") == "") {
        msg += "Campo específico observacao não foi preenchido\n";
    }
    

    if (msg !== "") {
        console.log("Erros na Atividade 5: " + msg);
        throw msg;
    }
}